#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "python-dotenv",
#     "feedparser",
#     "requests",
#     "beautifulsoup4",
# ]
# ///
"""論文・研究動向データの生成（ニュース生成とは独立）。

Papers枠は3つのパートで構成する:
  1. arxiv : arXiv新着から「要チェック(★)」の論文を、チェックリスト方式で検出して解説する
             (順位付けではなく、基準を満たすかの事実確認。根拠の引用が原文に存在するかをコードで検証)
  2. hf    : Hugging Face Daily Papers（HFの注目順のまま、日本語一行要約のみ付与）
  3. labs  : 主要ラボのブログを1本に統合（新しい順）

出力: news/papers/papers_data.js, news/papers/archive/YYYY-MM-DD.json, news/papers/processed_ids.json
"""

import os
import sys
import re
import json
import time
import argparse
import threading
import concurrent.futures
import urllib.request
import urllib.error
import urllib.parse
import xml.etree.ElementTree as ET
from calendar import timegm
from datetime import datetime, timezone, timedelta

import feedparser
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

from generate_news import call_gemini_api, call_openai_api

# ---------------------------------------------------------------------------
# 設定
# ---------------------------------------------------------------------------
ARXIV_CATEGORIES = ["cs.AI", "cs.LG", "cs.CL", "cs.CV", "cs.RO", "cs.CR", "cs.SE", "stat.ML"]
ARXIV_ANNOUNCE_TYPES = {"new", "cross"}  # 改訂(replace系)は除外
ARXIV_KEEP_DAYS = 3          # 表示に使うアーカイブ日数
ARXIV_DISPLAY_MAX = 60

# ★判定（絶対指標）。LLMの判定はぶれるため、候補抽出(1回)→厳格な再判定(STAR_VOTES回)の和集合を採用し、
# 何回の判定で★になったか(votes)を確度として使う。
STAR_STAGE1_BATCH = 100      # 候補抽出: 1バッチの論文数（冒頭+末尾のみを送る）
STAR_STAGE2_BATCH = 90       # 厳格な再判定: 1バッチの論文数（全文アブストラクト）
STAR_VOTES = 2               # 再判定の実行回数
STAR_QUOTE_MIN = 8           # 根拠の引用の最小長（短すぎる引用は無効）
HF_STAR_UPVOTES = 30         # 外部シグナル: HFのupvotes下限
HN_STAR_POINTS = 50          # 外部シグナル: HNのポイント下限

HF_MAX = 30
HF_DAYS = 7                  # HF Daily Papers: 直近何日分(暦日)の掲載を束ねるか（土日は掲載なし）
HF_PAGE_SIZE = 100           # APIの1リクエスト上限（超えると400）
HF_MAX_PAGES = 5             # 1日あたりの最大ページ数

LAB_FEEDS = {
    "OpenAI": "https://openai.com/news/rss.xml",
    "Google DeepMind": "https://deepmind.google/blog/rss.xml",
    "Google Research": "https://research.google/blog/rss/",
    "Berkeley BAIR": "https://bair.berkeley.edu/blog/feed.xml",
    "Apple ML": "https://machinelearning.apple.com/rss.xml",
    "Hugging Face": "https://huggingface.co/blog/feed.xml",
    "The Gradient": "https://thegradient.pub/rss/",
    "AlphaSignal": "https://alphasignal.ai/feed.xml",
}
LAB_MAX_AGE_DAYS = 21
LAB_MAX = 30
LAB_PER_LAB_MAX = 6      # 1ラボが枠を占拠しないよう上限を設ける

PROCESSED_KEEP_DAYS = 7
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

# 採択会議・受賞の検出（arXivの comment / journal_ref から）
VENUE_PATTERN = re.compile(
    r"\b(CVPR|ICCV|ECCV|NeurIPS|NIPS|ICML|ICLR|AAAI|IJCAI|ACL|EMNLP|NAACL|COLING|KDD|SIGGRAPH|CoRL|ICRA|IROS|RSS|"
    r"USENIX Security|CCS|IEEE S&P|NDSS|ICSE|FSE|OSDI|SOSP|SIGMOD|VLDB|WWW|SIGIR|CHI|UIST|TPAMI|JMLR|TMLR)\b"
)
AWARD_PATTERN = re.compile(r"(best paper|outstanding paper|best student paper|award|distinguished paper)", re.IGNORECASE)
WORKSHOP_PATTERN = re.compile(r"(workshop|symposium|doctoral consortium|\w\s*@\s*[A-Z][A-Za-z]+)", re.IGNORECASE)
# 「Submitted to ICRA 2027」のような投稿中の記載は採択として扱わない
SUBMITTED_PATTERN = re.compile(r"(submitted|under review|in submission|under submission|review at|for possible publication)", re.IGNORECASE)
ACCEPTED_PATTERN = re.compile(r"(accepted|to appear|appears? in|camera[- ]ready|published (in|at)|presented at|will be presented|oral|spotlight|poster|highlight)", re.IGNORECASE)
TALK_PATTERN = re.compile(r"\b(oral|spotlight|highlight)\b", re.IGNORECASE)

JST = timezone(timedelta(hours=9))



# ---------------------------------------------------------------------------
# LLM呼び出し（思考を最小にして、出力トークン課金を抑える）
# ---------------------------------------------------------------------------
GEMINI_MODELS = [
    ("gemini-3-flash-preview", {"thinkingLevel": "minimal"}),
    ("gemini-2.5-flash", {"thinkingBudget": 0}),
]
USAGE = {"in": 0, "out": 0, "think": 0, "calls": 0}
_usage_lock = threading.Lock()


def call_gemini_fast(api_key, prompt):
    """generate_news.call_gemini_api と同じ戻り値 (dict, usage)。思考を抑え、JSON崩れは再試行する。"""
    last_error = None
    for model, thinking in GEMINI_MODELS:
        payload = json.dumps({
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"response_mime_type": "application/json", "thinkingConfig": thinking},
        }).encode("utf-8")
        for _ in range(2):
            try:
                req = urllib.request.Request(
                    f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
                    data=payload,
                    headers={"Content-Type": "application/json", "x-goog-api-key": api_key},
                    method="POST",
                )
                with urllib.request.urlopen(req, timeout=180) as r:
                    result = json.loads(r.read().decode("utf-8"))
                usage = result.get("usageMetadata", {})
                parsed = json.loads(result["candidates"][0]["content"]["parts"][0]["text"])
                with _usage_lock:
                    USAGE["in"] += usage.get("promptTokenCount", 0)
                    USAGE["out"] += usage.get("candidatesTokenCount", 0)
                    USAGE["think"] += usage.get("thoughtsTokenCount", 0)
                    USAGE["calls"] += 1
                return parsed, usage
            except urllib.error.HTTPError as e:
                print(f"Gemini API ({model}) HTTPエラー {e.code}", file=sys.stderr)
                last_error = e
                break  # 次のモデルへ
            except Exception as e:  # JSON崩れ・接続エラーは同じモデルで1回だけ再試行
                last_error = e
                time.sleep(1)
    print(f"Gemini API 呼び出し失敗: {last_error}", file=sys.stderr)
    return None, {}


def estimated_cost_usd():
    """概算料金（gemini-3-flash-preview の公開価格: 入力$0.50 / 出力$3.00 per 1M tokens）。"""
    return USAGE["in"] * 0.50 / 1e6 + (USAGE["out"] + USAGE["think"]) * 3.00 / 1e6


# ---------------------------------------------------------------------------
# 共通ユーティリティ
# ---------------------------------------------------------------------------
def arxiv_id_from_url(url):
    m = re.search(r"arxiv\.org/(?:abs|pdf)/([^\s?#]+?)(?:v\d+)?(?:\.pdf)?$", url)
    return m.group(1) if m else ""


def strip_html(text):
    return BeautifulSoup(text or "", "html.parser").get_text(" ", strip=True)


def entry_datetime(entry):
    for key in ("published_parsed", "updated_parsed"):
        t = getattr(entry, key, None)
        if t:
            return datetime.fromtimestamp(timegm(t), tz=timezone.utc)
    return None


def load_json(path, default):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def usage_tokens(usage):
    return usage.get("totalTokenCount", usage.get("total_tokens", 0)) if usage else 0


# ---------------------------------------------------------------------------
# 1. arXiv
# ---------------------------------------------------------------------------
def fetch_arxiv_feed(categories):
    url = "https://rss.arxiv.org/rss/" + "+".join(categories)
    print(f"arXiv RSS取得: {url}")
    resp = requests.get(url, headers=HEADERS, timeout=60)
    resp.raise_for_status()
    feed = feedparser.parse(resp.content)

    papers = {}
    for e in feed.entries:
        atype = getattr(e, "arxiv_announce_type", "")
        if atype not in ARXIV_ANNOUNCE_TYPES:
            continue
        aid = arxiv_id_from_url(getattr(e, "link", ""))
        if not aid or aid in papers:
            continue
        desc = getattr(e, "summary", "")
        abstract = desc.split("Abstract:", 1)[1].strip() if "Abstract:" in desc else desc
        papers[aid] = {
            "id": aid,
            "title": re.sub(r"\s+", " ", getattr(e, "title", "")).strip(),
            "abstract": re.sub(r"\s+", " ", abstract).strip(),
            "authors": [a.strip() for a in getattr(e, "author", "").split(",") if a.strip()],
            "categories": [t.term for t in getattr(e, "tags", [])],
            "announce_type": atype,
            "url": f"https://arxiv.org/abs/{aid}",
            "pdf": f"https://arxiv.org/pdf/{aid}",
        }
    print(f"  新着(new/cross): {len(papers)}件 / 全{len(feed.entries)}件")
    return papers


def parse_venue_info(text):
    """arXivの comment / journal_ref から、採択会議・受賞・ワークショップ採択を判定する。"""
    venues = sorted({m.group(1) for m in VENUE_PATTERN.finditer(text)})
    accepted = bool(ACCEPTED_PATTERN.search(text))
    if venues and SUBMITTED_PATTERN.search(text) and not accepted:
        venues = []  # 投稿中のみ
    workshop = bool(venues) and bool(WORKSHOP_PATTERN.search(text))
    return {
        "venues": [f"{v} (WS)" for v in venues] if workshop else venues,
        "workshop": workshop,
        "award": bool(AWARD_PATTERN.search(text)) and not workshop,
        "talk": bool(TALK_PATTERN.search(text)),
    }


def fetch_arxiv_meta(papers, chunk=100):
    """arXiv API から comment / journal_ref を取得し、採択会議・受賞フラグを付ける。"""
    ids = list(papers.keys())
    ns = {"a": "http://www.w3.org/2005/Atom", "x": "http://arxiv.org/schemas/atom"}
    for i in range(0, len(ids), chunk):
        batch = ids[i:i + chunk]
        url = "https://export.arxiv.org/api/query?" + urllib.parse.urlencode(
            {"id_list": ",".join(batch), "max_results": len(batch)}
        )
        try:
            resp = requests.get(url, headers=HEADERS, timeout=60)
            resp.raise_for_status()
            root = ET.fromstring(resp.content)
            for entry in root.findall("a:entry", ns):
                aid = arxiv_id_from_url((entry.findtext("a:id", "", ns) or "").strip())
                if aid not in papers:
                    continue
                comment = (entry.findtext("x:comment", "", ns) or "").strip()
                journal = (entry.findtext("x:journal_ref", "", ns) or "").strip()
                papers[aid]["comment"] = comment
                papers[aid]["journal_ref"] = journal
                papers[aid].update(parse_venue_info(f"{comment} {journal}"))
        except Exception as ex:
            print(f"arXiv API(メタ情報)取得エラー: {ex}", file=sys.stderr)
        time.sleep(3)  # arXiv API の利用規約（3秒に1リクエスト）
    flagged = sum(1 for p in papers.values() if p.get("venues") and not p.get("workshop"))
    print(f"  会議/ジャーナル記載あり: {flagged}件")


STAR_CODES_STAGE1 = {
    "bench": "既存の最高値・ベースラインを、具体的な数値で明確に上回ったと述べている（SOTA更新、○○ポイント向上、○倍高速など）。数値が書かれていないものは不可",
    "new": "新しい名前付きの手法・モデル・アーキテクチャ・アルゴリズム・パラダイムを提案している。既存手法の小改良、組み合わせ、単なる応用・評価は不可",
    "cap": "これまで不可能・困難だったことを可能にした（新しい能力・新しいタスクの実現）と述べている。単なる精度向上は不可",
}
STAR_CODES_STAGE2 = {
    "sota": "広く使われている確立したベンチマークで、従来の最高性能（SOTA）を更新した、または公開モデルを明確に上回ったと明言している。数値や比較対象が書かれていること。「ベースラインを上回る」「改善した」だけでは不可",
    "new": "後続研究が土台にしうる、新しいアーキテクチャ・アルゴリズム・学習パラダイム・理論的枠組みを提案している。既存手法の小改良、組み合わせ、特定領域への応用、評価・分析のみは不可",
    "cap": "これまで不可能だった能力・タスクの実現を明言している。単なる精度・速度の向上は不可",
}
STAR_LABELS = {"sota": "SOTA更新", "new": "新手法", "cap": "新能力"}


def _norm(text):
    return re.sub(r"[\s\"'“”‘’`]+", " ", (text or "").lower()).strip()


def _quote_is_verbatim(quote, abstract):
    """LLMが示した根拠の引用が、アブストラクトの原文に実在するかを検証する（作り話の根拠を排除）。"""
    q = _norm(quote)
    return len(q) >= STAR_QUOTE_MIN and q in _norm(abstract)


def _head_tail(abstract):
    """候補抽出用に、冒頭(提案内容)と末尾(結果の数値)だけを送ってトークンを節約する。"""
    if len(abstract) <= 520:
        return abstract
    return abstract[:200].rstrip() + " … " + abstract[-300:].lstrip()


def detect_star_candidates(api_key, call_func, papers):
    """第1段階: 冒頭+末尾で、★基準に当てはまりそうな論文を広めに拾う。
    戻り値: (candidates{id: codes}, evaluated_ids)。応答が得られたバッチの論文だけ evaluated に入る。"""
    ids = list(papers)
    batches = [ids[i:i + STAR_STAGE1_BATCH] for i in range(0, len(ids), STAR_STAGE1_BATCH)]
    codes_txt = "\n".join(f"- {k}: {v}" for k, v in STAR_CODES_STAGE1.items())

    def one(batch):
        listing = "\n\n".join(f"[{i}] {papers[i]['title']}\n{_head_tail(papers[i]['abstract'])}" for i in batch)
        prompt = f"""あなたはAI・コンピュータサイエンス分野の査読者です。以下のarXiv論文（{len(batch)}件）について、次の基準のどれに当てはまるかを事実に基づいて判定してください。

【基準】
{codes_txt}

【ルール】
- アブストラクトに明記されている内容だけで判定する。推測や期待で当てはめない。迷う場合は当てはめない。
- 当てはまる基準が1つもない論文は出力しない（大半の論文は該当しない）。
- 当てはまる論文は、根拠となる文を、アブストラクトの原文のまま（改変・翻訳せず）80文字以内で引用すること。
- IDは改変しない。

【論文リスト】
{listing}

次のJSONのみで出力してください。
{{"flags": [{{"id": "2609.12345", "c": ["bench", "new"], "q": "原文からの引用"}}]}}"""
        res, _ = call_func(api_key, prompt)
        return batch, res

    candidates, evaluated = {}, set()
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        for batch, res in executor.map(one, batches):
            if res is None:
                continue
            evaluated.update(batch)
            for f in res.get("flags", []):
                pid = str(f.get("id", ""))
                codes = [c for c in f.get("c", []) if c in STAR_CODES_STAGE1]
                # 根拠の引用が原文に実在するものだけを候補にする（引用を必須にすると判定が厳密になる）
                if pid in papers and codes and _quote_is_verbatim(f.get("q", ""), papers[pid]["abstract"]):
                    candidates[pid] = codes
    return candidates, evaluated


def judge_stars(api_key, call_func, papers, candidate_ids, votes):
    """第2段階: 全文アブストラクトで厳格に再判定する。votes回実行し、和集合を返す。
    戻り値: ({id: {"votes": n, "codes": [...], "quote": "..."}}, 判定に失敗したid集合)。"""
    ids = list(candidate_ids)
    if not ids:
        return {}, set()
    batches = [ids[i:i + STAR_STAGE2_BATCH] for i in range(0, len(ids), STAR_STAGE2_BATCH)]
    codes_txt = "\n".join(f"- {k}: {v}" for k, v in STAR_CODES_STAGE2.items())

    def one(batch):
        listing = "\n\n".join(f"[{i}] {papers[i]['title']}\n{papers[i]['abstract']}" for i in batch)
        prompt = f"""あなたは厳格なAI分野の査読者です。以下は一次判定を通過した論文{len(batch)}件です。毎日の「要チェック論文（★）」に値するものだけを、厳しく選んでください。

【★の基準】
{codes_txt}

【ルール】
- ★は希少にする。この{len(batch)}件のうち、基準を明確に満たすのはごく一部のはず。少しでも迷うものは外す。
- アブストラクトに明記された内容だけで判定する。推測や期待で判定しない。
- 該当する論文は、根拠の文をアブストラクトの原文のまま（改変・翻訳せず）80文字以内で引用する。
- IDは改変しない。

【論文リスト】
{listing}

次のJSONのみで出力してください。
{{"stars": [{{"id": "2609.12345", "c": ["new"], "q": "原文からの引用"}}]}}"""
        res, _ = call_func(api_key, prompt)
        return batch, res

    tasks = [(run, bi, batch) for run in range(votes) for bi, batch in enumerate(batches)]

    def run_task(task):
        run, bi, batch = task
        return run, bi, one(batch)[1]

    stars = {}
    judged_batches = set()  # 1回でも応答が得られたバッチ
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        for run, bi, res in executor.map(run_task, tasks):
            if res is None:
                continue
            judged_batches.add(bi)
            for f in res.get("stars", []):
                pid = str(f.get("id", ""))
                codes = [c for c in f.get("c", []) if c in STAR_CODES_STAGE2]
                if pid not in papers or not codes or not _quote_is_verbatim(f.get("q", ""), papers[pid]["abstract"]):
                    continue
                entry = stars.setdefault(pid, {"runs": set(), "codes": [], "quote": f["q"]})
                entry["runs"].add(run)  # 同じ回の重複出力は1票
                entry["codes"] = sorted(set(entry["codes"]) | set(codes))
    for entry in stars.values():
        entry["votes"] = len(entry.pop("runs"))
    failed = {i for bi, batch in enumerate(batches) if bi not in judged_batches for i in batch}
    return stars, failed


def fetch_hn_arxiv_points(days=14, min_points=HN_STAR_POINTS):
    """Hacker NewsでURLがarxiv.orgの投稿を、ポイント付きで取得する（Algolia API。キー不要）。"""
    since = int(time.time()) - days * 86400
    url = "https://hn.algolia.com/api/v1/search_by_date?" + urllib.parse.urlencode({
        "query": "arxiv.org", "restrictSearchableAttributes": "url", "tags": "story",
        "numericFilters": f"points>={min_points},created_at_i>{since}", "hitsPerPage": 100,
    })
    points = {}
    try:
        resp = requests.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        for h in resp.json().get("hits", []):
            m = re.search(r"arxiv\.org/(?:abs|pdf)/(\d{4}\.\d{4,5})", h.get("url") or "")
            if m:
                points[m.group(1)] = max(points.get(m.group(1), 0), h.get("points", 0))
    except Exception as ex:
        print(f"HN取得エラー: {ex}", file=sys.stderr)
    print(f"  HN(arXiv投稿, {min_points}pt以上): {len(points)}件")
    return points


def external_signals(papers, hf_items, hn_points):
    """LLMを使わない★の根拠: 受賞 / 本会議のOral等 / HFの高い注目 / HNの高い注目。"""
    sig = {}
    for it in hf_items:
        if it["id"] in papers and it["upvotes"] >= HF_STAR_UPVOTES:
            sig.setdefault(it["id"], []).append(f"HF ▲{it['upvotes']}")
    for pid, pts in hn_points.items():
        if pid in papers:
            sig.setdefault(pid, []).append(f"HN {pts}pt")
    for pid, p in papers.items():
        if p.get("award"):
            sig.setdefault(pid, []).append("受賞")
        if p.get("talk") and p.get("venues") and not p.get("workshop"):
            sig.setdefault(pid, []).append("Oral等")
    return sig


def analyze_arxiv(api_key, call_func, selected, hf_stats):
    """★の論文に、日本語の解説を付ける（順位付け・採点はしない）。"""
    results = {}
    batch_size = 40
    for i in range(0, len(selected), batch_size):
        batch = selected[i:i + batch_size]
        listing = "\n\n".join(
            f"[{p['id']}] {p['title']}\n"
            f"カテゴリ: {', '.join(p['categories'])} / 会議・ジャーナル記載: {', '.join(p.get('venues', [])) or 'なし'}"
            f"{' / 受賞記載あり' if p.get('award') else ''}{' / Oral・Spotlight等' if p.get('talk') else ''}{' / ワークショップ採択' if p.get('workshop') else ''}"
            f"{' / HF注目度: ' + str(hf_stats[p['id']]) if p['id'] in hf_stats else ''}\n"
            f"アブストラクト: {p['abstract']}"
            for p in batch
        )
        prompt = f"""
あなたは先端テクノロジーを追うリサーチ・アナリストです。以下の論文について、エンジニアが最新技術をキャッチアップするための
日本語の解説を作成してください。

【論文リスト】
{listing}

【出力ルール】
- 各論文について以下を日本語で書く。専門用語は無理に訳さず、必要なら原語を併記する。
  - headline: 何が分かる見出し（30〜50字。論文タイトルの直訳ではなく、成果が伝わる表現）
  - what: どんな技術・手法か（2〜3文）
  - enables: これにより何が可能になったか、何が改善したか。アブストラクトにある具体的な数値があれば含める（1〜2文）
  - why_it_matters: 既存手法との違い、分野・実務への意義（1〜2文）
  - tags: 技術領域を表す短い日本語タグを2〜3個（例: "LLM", "強化学習", "画像生成"）
- 日本語の表現ルール:
  - 手法名・モデル名・データセット名・概念名は英語のまま書く（例: "Blackboard Intelligence"、"Dutch Book"）。造語の直訳や、略した名前（"Arbitr" のような途切れた表記）は使わない。
  - 定訳のある用語（拡散モデル、強化学習、自己回帰モデルなど）だけ日本語にする。
  - 「圧倒」「解明」「劇的」「画期的」など誇張する語は使わない。何をしたか、何が測定されたかを淡々と書く。
  - 「〜という錯覚」のような比喩や、アブストラクトにない言い換えをしない。
- アブストラクトに書かれていない事実を創作しないこと。IDは改変しないこと。
- 次のJSONのみで出力する。
{{"papers": [{{"id": "2609.12345", "headline": "", "what": "", "enables": "", "why_it_matters": "", "tags": ["", ""]}}]}}
"""
        res, _ = call_func(api_key, prompt)
        for r in (res or {}).get("papers", []):
            if "id" in r:
                results[str(r["id"])] = r
    return results


# ---------------------------------------------------------------------------
# 2. Hugging Face Daily Papers
# ---------------------------------------------------------------------------
def fetch_hf_daily(days):
    """直近days日(暦日)の Daily Papers を日付指定で取得し、重複を除いて upvotes 降順で返す。"""
    today = datetime.now(JST).date()
    by_id = {}
    for offset in range(days):
        date = (today - timedelta(days=offset)).isoformat()
        # 注意: sort=trending を付けると date が無視されて全期間のトレンドになるため付けない
        data = []
        try:
            for page in range(HF_MAX_PAGES):
                url = f"https://huggingface.co/api/daily_papers?date={date}&limit={HF_PAGE_SIZE}&p={page}"
                resp = requests.get(url, headers=HEADERS, timeout=30)
                resp.raise_for_status()
                chunk = resp.json()
                data.extend(chunk)
                if len(chunk) < HF_PAGE_SIZE:
                    break
        except Exception as ex:
            print(f"HF Daily Papers取得エラー ({date}): {ex}", file=sys.stderr)
            if not data:
                continue
        print(f"HF Daily Papers {date}: {len(data)}件")
        for d in data:
            p = d.get("paper", {})
            pid = p.get("id")
            if not pid or pid in by_id:  # 新しい日から順に見ているので、先に入ったものを残す
                continue
            org = d.get("organization") or {}
            by_id[pid] = {
                "id": pid,
                "title": re.sub(r"\s+", " ", d.get("title") or p.get("title") or "").strip(),
                "abstract": re.sub(r"\s+", " ", p.get("summary") or "").strip(),
                "upvotes": p.get("upvotes", 0) or 0,
                "github_stars": p.get("githubStars", 0) or 0,
                "github_repo": p.get("githubRepo") or "",
                "project_page": p.get("projectPage") or "",
                "comments": d.get("numComments", 0) or 0,
                "org": org.get("fullname") or org.get("name") or "",
                "url": f"https://huggingface.co/papers/{pid}",
                "arxiv_url": f"https://arxiv.org/abs/{pid}",
            }
    items = sorted(by_id.values(), key=lambda x: x["upvotes"], reverse=True)
    print(f"  計{len(items)}件（{days}日分）")
    return items


# ---------------------------------------------------------------------------
# 3. ラボブログ（統合）
# ---------------------------------------------------------------------------
def fetch_lab_blogs(feeds, max_age_days, max_items):
    cutoff = datetime.now(timezone.utc) - timedelta(days=max_age_days)
    items = []
    for lab, url in feeds.items():
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            resp.raise_for_status()
            feed = feedparser.parse(resp.content)
            count = 0
            for e in feed.entries:
                if count >= LAB_PER_LAB_MAX:
                    break
                dt = entry_datetime(e)
                if not dt or dt < cutoff:
                    continue
                items.append({
                    "lab": lab,
                    "title": re.sub(r"\s+", " ", getattr(e, "title", "")).strip(),
                    "summary": strip_html(getattr(e, "summary", ""))[:600],
                    "url": getattr(e, "link", ""),
                    "published": dt.astimezone(JST).isoformat(),
                })
                count += 1
            print(f"  {lab}: {count}件")
        except Exception as ex:
            print(f"ラボブログ取得エラー ({lab}): {ex}", file=sys.stderr)
    items.sort(key=lambda x: x["published"], reverse=True)
    return items[:max_items]


def add_japanese_summaries(api_key, call_func, items, text_key, kind):
    """HF論文 / ラボ記事に日本語タイトルと一行要約を付与する（選別は行わない）。"""
    if not items:
        return 0
    listing = "\n\n".join(
        f"[{i}] {it['title']}\n{it.get(text_key, '')[:700]}" for i, it in enumerate(items)
    )
    prompt = f"""
以下は{kind}の一覧です。各項目について、日本語のタイトルと「何が新しいか・何ができるか」が分かる一行要約（80字以内）を作成してください。
本文にない事実は書かないこと。番号(index)は改変しないこと。

{listing}

次のJSONのみで出力してください。
{{"items": [{{"index": 0, "title_ja": "", "summary_ja": ""}}]}}
"""
    res, usage = call_func(api_key, prompt)
    for r in (res or {}).get("items", []):
        try:
            idx = int(r["index"])
            items[idx]["title_ja"] = r.get("title_ja", "")
            items[idx]["summary_ja"] = r.get("summary_ja", "")
        except (KeyError, ValueError, TypeError, IndexError):
            continue
    return usage_tokens(usage)


# ---------------------------------------------------------------------------
# 出力
# ---------------------------------------------------------------------------
def load_recent_arxiv_archive(archive_dir, now, days):
    merged = {}
    for offset in range(days):
        day = (now - timedelta(days=offset)).strftime("%Y-%m-%d")
        data = load_json(os.path.join(archive_dir, f"{day}.json"), {})
        for p in data.get("arxiv", []):
            merged.setdefault(p["id"], p)
    return list(merged.values())


def rank_key(p):
    # ★の確度順: 判定の一致回数 → 外部シグナルの数 → 満たした基準の数 → 新しさ
    return (p.get("star_votes", 0), len(p.get("signals", [])), len(p.get("star_codes", [])), p.get("fetched_at", ""))


def main():
    load_dotenv()
    parser = argparse.ArgumentParser(description="Papers section generator (arXiv stars / HF Daily / lab blogs).")
    parser.add_argument("--no-llm", action="store_true", help="LLMを使わず取得結果の確認のみ行う（ファイルは書き出さない）")
    parser.add_argument("--dry-run", action="store_true", help="★判定まで実行して結果を表示し、解説生成とファイル書き出しは行わない")
    parser.add_argument("--votes", type=int, default=STAR_VOTES, help="厳格な再判定の実行回数")
    parser.add_argument("--max-arxiv", type=int, default=None, help="取得するarXiv論文の上限（動作確認用）")
    args = parser.parse_args()

    gemini_key = os.environ.get("GEMINI_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")
    api_key = gemini_key or openai_key
    call_func = call_gemini_fast if gemini_key else call_openai_api
    if not api_key and not args.no_llm:
        print("エラー: GEMINI_API_KEY または OPENAI_API_KEY が設定されていません。", file=sys.stderr)
        sys.exit(1)

    now = datetime.now(JST)
    base_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "news", "papers")
    archive_dir = os.path.join(base_dir, "archive")
    processed_path = os.path.join(base_dir, "processed_ids.json")
    output_path = os.path.join(base_dir, "papers_data.js")
    write_files = not (args.no_llm or args.dry_run)
    if write_files:
        os.makedirs(archive_dir, exist_ok=True)

    # 重複排除キャッシュ
    cutoff = (now - timedelta(days=PROCESSED_KEEP_DAYS)).isoformat()
    processed = {k: v for k, v in load_json(processed_path, {}).items() if v >= cutoff}
    fetched_at = now.isoformat()

    # --- HF（独立。失敗しても他に影響させない） ---
    hf_all = []
    try:
        hf_all = fetch_hf_daily(HF_DAYS)
    except Exception as ex:
        print(f"HF取得エラー: {ex}", file=sys.stderr)
    # ★の外部シグナルと統計は束ねた全件で判定し、画面に出すのは上位HF_MAX件
    hf_items = hf_all[:HF_MAX]
    hf_stats = {it["id"]: f"upvotes {it['upvotes']} / GitHub stars {it['github_stars']}" for it in hf_all}

    # --- ラボブログ ---
    print("ラボブログ取得中...")
    lab_items = fetch_lab_blogs(LAB_FEEDS, LAB_MAX_AGE_DAYS, LAB_MAX)

    # --- arXiv ---
    arxiv_new = {}
    try:
        arxiv_new = fetch_arxiv_feed(ARXIV_CATEGORIES)
    except Exception as ex:
        print(f"arXiv取得エラー: {ex}", file=sys.stderr)
    arxiv_new = {k: v for k, v in arxiv_new.items() if k not in processed}
    if args.max_arxiv:
        arxiv_new = dict(list(arxiv_new.items())[:args.max_arxiv])
    print(f"  未処理のarXiv論文: {len(arxiv_new)}件")

    if args.no_llm:
        print("\n--no-llm: 取得確認のみ。ファイルは書き出しません。")
        print(f"arXiv {len(arxiv_new)}件 / HF {len(hf_items)}件 / ラボ {len(lab_items)}件")
        return

    new_arxiv_results = []
    if arxiv_new:
        print("arXivメタ情報（採択会議・受賞）取得中...")
        fetch_arxiv_meta(arxiv_new)
        hn_points = fetch_hn_arxiv_points()

        print(f"★判定 第1段階（候補抽出）: {len(arxiv_new)}件...")
        candidates, evaluated = detect_star_candidates(api_key, call_func, arxiv_new)
        print(f"  候補 {len(candidates)}件")
        print(f"★判定 第2段階（厳格な再判定 ×{args.votes}回）...")
        stars, failed = judge_stars(api_key, call_func, arxiv_new, list(candidates), args.votes)
        signals = external_signals(arxiv_new, hf_all, hn_points)
        star_ids = list(dict.fromkeys(list(stars) + list(signals)))
        print(f"  ★ {len(star_ids)}件（LLM判定 {len(stars)}件 / うち{args.votes}回とも★ "
              f"{sum(1 for v in stars.values() if v['votes'] >= args.votes)}件 / 外部シグナル {len(signals)}件）")

        if args.dry_run:
            for pid in star_ids:
                st = stars.get(pid, {})
                print(f"  ★{st.get('votes', 0)} {st.get('codes', [])} {signals.get(pid, [])} {arxiv_new[pid]['title'][:70]}")
            print(f"使用トークン 入力{USAGE['in']:,} 出力{USAGE['out']:,} 思考{USAGE['think']:,} / 概算 ${estimated_cost_usd():.3f}")
            return

        selected = [arxiv_new[pid] for pid in star_ids]
        print(f"日本語の解説を生成中（{len(selected)}件）...")
        analyzed = analyze_arxiv(api_key, call_func, selected, hf_stats)
        for p in selected:
            a = analyzed.get(p["id"])
            if not a:
                continue
            st = stars.get(p["id"], {})
            new_arxiv_results.append({
                "id": p["id"],
                "title": p["title"],
                "url": p["url"],
                "pdf": p["pdf"],
                "authors": p["authors"][:6],
                "categories": p["categories"],
                "venues": p.get("venues", []),
                "award": p.get("award", False),
                "talk": p.get("talk", False),
                "workshop": p.get("workshop", False),
                "comment": p.get("comment", ""),
                "hf_upvotes": next((h["upvotes"] for h in hf_all if h["id"] == p["id"]), None),
                "star_votes": st.get("votes", 0),
                "star_codes": st.get("codes", []),
                "star_quote": st.get("quote", ""),
                "signals": signals.get(p["id"], []),
                "headline": a.get("headline", p["title"]),
                "what": a.get("what", ""),
                "enables": a.get("enables", ""),
                "why_it_matters": a.get("why_it_matters", ""),
                "tags": a.get("tags", []),
                "fetched_at": fetched_at,
            })
        # 第1段階で応答が得られ、第2段階の判定も失敗しなかった論文だけを処理済みにする（失敗分は次回再挑戦）
        for aid in evaluated - failed:
            processed[aid] = fetched_at

    # アーカイブ保存（同日の再実行ではマージ）
    day_path = os.path.join(archive_dir, f"{now.strftime('%Y-%m-%d')}.json")
    day_data = load_json(day_path, {})
    merged_today = {p["id"]: p for p in day_data.get("arxiv", [])}
    merged_today.update({p["id"]: p for p in new_arxiv_results})
    save_json(day_path, {"date": now.strftime("%Y-%m-%d"), "arxiv": list(merged_today.values())})

    # --- HF / ラボの日本語要約 ---
    add_japanese_summaries(api_key, call_func, hf_items, "abstract", "Hugging Face Daily Papers の論文")
    add_japanese_summaries(api_key, call_func, lab_items, "summary", "AI/テック企業・研究機関の公式ブログ記事")

    # --- 表示用データ ---
    recent = load_recent_arxiv_archive(archive_dir, now, ARXIV_KEEP_DAYS)
    recent.sort(key=rank_key, reverse=True)

    output = {
        "updated_at": now.strftime("%Y-%m-%d %H:%M JST"),
        "arxiv": recent[:ARXIV_DISPLAY_MAX],
        "hf": hf_items,
        "labs": lab_items,
    }
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("window.papersData = " + json.dumps(output, ensure_ascii=False, indent=2) + ";\n")
    save_json(processed_path, processed)

    print(f"完了: ★{len(output['arxiv'])}件 / HF {len(hf_items)}件 / ラボ {len(lab_items)}件 / "
          f"使用トークン 入力{USAGE['in']:,} 出力{USAGE['out']:,} 思考{USAGE['think']:,} / 概算 ${estimated_cost_usd():.3f}")


if __name__ == "__main__":
    main()
