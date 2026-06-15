#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "python-dotenv",
# ]
# ///
"""
過去のアーカイブJSONに novelty / japan_relevance を追記するバックフィルスクリプト。
既にどちらも存在するトピックはスキップする。

使い方:
    uv run backfill_metrics.py
"""

import os
import sys
import json
import urllib.request
import urllib.error
import concurrent.futures
from pathlib import Path
from dotenv import load_dotenv


# ── API呼び出し ──────────────────────────────────────────────────────────────

def call_gemini_api(api_key: str, prompt: str):
    models = [
        "gemini-3-flash-preview",
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash",
        "gemini-1.5-flash",
    ]
    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generation_config": {"response_mime_type": "application/json"},
    }).encode()

    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
        req = urllib.request.Request(
            url, data=payload,
            headers={"Content-Type": "application/json", "x-goog-api-key": api_key},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                result = json.loads(r.read().decode())
                text = result["candidates"][0]["content"]["parts"][0]["text"]
                usage = result.get("usageMetadata", {})
                return json.loads(text), usage
        except urllib.error.HTTPError as e:
            print(f"Gemini ({model}) HTTPError {e.code}: {e.reason}", file=sys.stderr)
        except Exception as e:
            print(f"Gemini ({model}) Error: {e}", file=sys.stderr)
    return None, {}


def call_openai_api(api_key: str, prompt: str):
    payload = json.dumps({
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant that outputs only valid JSON."},
            {"role": "user", "content": prompt},
        ],
        "response_format": {"type": "json_object"},
    }).encode()
    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=payload,
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            result = json.loads(r.read().decode())
            text = result["choices"][0]["message"]["content"]
            usage = result.get("usage", {})
            return json.loads(text), usage
    except Exception as e:
        print(f"OpenAI APIエラー: {e}", file=sys.stderr)
        return None, {}


# ── スコアリング ──────────────────────────────────────────────────────────────

def build_prompt(topics: list[dict]) -> str:
    items = []
    for i, t in enumerate(topics):
        items.append(
            f"[{i}] headline: {t.get('headline','')}\n"
            f"    content: {t.get('content','')}\n"
            f"    impact: {t.get('impact','')}"
        )
    items_text = "\n\n".join(items)

    return f"""以下のニューストピックリストについて、各トピックの指標を評価してください。

【トピックリスト】
{items_text}

【評価する指標】
- novelty（新規性）: このトピック自体がどれだけ新しいテーマ・展開か。
  既知の大きな継続イシュー（例: 米中貿易摩擦の続報）は低く、
  新たな発見や初めて明らかになった事象は高くする。1〜5の整数。
- japan_relevance（日本関連度）: 日本市場・日本のエンジニア・日本社会への
  直接的な関連度。直結する内容なら5、ほぼ無関係なら1。1〜5の整数。

必ず以下のJSONスキーマで出力してください（インデックスはトピックリストの番号と対応）:
{{
  "scores": [
    {{"index": 0, "novelty": 3, "japan_relevance": 3}},
    ...
  ]
}}"""


def score_topics(topics: list[dict], api_key: str, call_func) -> list[dict]:
    """novelty / japan_relevance が両方欠けているトピックをまとめてスコアリング。"""
    targets = [
        (i, t) for i, t in enumerate(topics)
        if "novelty" not in t or "japan_relevance" not in t
    ]
    if not targets:
        return topics

    target_topics = [t for _, t in targets]
    prompt = build_prompt(target_topics)
    res, _ = call_func(api_key, prompt)

    if not res or "scores" not in res:
        print("  スコアリング失敗、デフォルト値(3)を使用します。", file=sys.stderr)
        for _, t in targets:
            t.setdefault("novelty", 3)
            t.setdefault("japan_relevance", 3)
        return topics

    score_map = {s["index"]: s for s in res["scores"]}
    for local_i, (orig_i, t) in enumerate(targets):
        s = score_map.get(local_i, {})
        t["novelty"] = int(s.get("novelty", 3))
        t["japan_relevance"] = int(s.get("japan_relevance", 3))

    return topics


# ── メイン ────────────────────────────────────────────────────────────────────

def process_file(path: Path, api_key: str, call_func) -> bool:
    """1ファイルを処理。変更があれば上書き保存し True を返す。"""
    with open(path, encoding="utf-8") as f:
        data = json.load(f)

    categories = (
        data.get("periods", {}).get("days", {}).get("categories", [])
    )
    changed = False

    for cat in categories:
        topics = cat.get("topics", [])
        needs_scoring = any(
            "novelty" not in t or "japan_relevance" not in t for t in topics
        )
        if not needs_scoring:
            continue

        print(f"  [{cat.get('genre')}] {len(topics)}件をスコアリング中...")
        before = json.dumps(topics)
        score_topics(topics, api_key, call_func)
        if json.dumps(topics) != before:
            changed = True

    if changed:
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"  → 保存完了: {path.name}")

    return changed


def main():
    load_dotenv()

    gemini_key = os.environ.get("GEMINI_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")
    if not gemini_key and not openai_key:
        print("エラー: GEMINI_API_KEY または OPENAI_API_KEY が必要です。", file=sys.stderr)
        sys.exit(1)

    api_key = gemini_key if gemini_key else openai_key
    call_func = call_gemini_api if gemini_key else call_openai_api

    archive_dir = Path(__file__).parent / "news" / "archive"
    json_files = sorted(archive_dir.glob("*.json"))

    if not json_files:
        print("アーカイブファイルが見つかりません。")
        return

    print(f"対象ファイル: {len(json_files)}件\n")

    total_changed = 0
    for path in json_files:
        print(f"処理中: {path.name}")
        if process_file(path, api_key, call_func):
            total_changed += 1
        else:
            print(f"  → スキップ（全指標済み）")

    print(f"\n完了: {total_changed}/{len(json_files)} ファイルを更新しました。")


if __name__ == "__main__":
    main()
