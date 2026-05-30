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

import os
import sys
import json
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta
import urllib.error
import feedparser
from dotenv import load_dotenv
import requests
from bs4 import BeautifulSoup
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import concurrent.futures
import argparse
import re

# RSS Feeds
FEEDS = {
    "GLOBAL_WORLD": "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-US&gl=US&ceid=US:en",
    "BBC_WORLD": "https://news.google.com/rss/search?q=site:bbc.com/news/world+when:1d&hl=en-US&gl=US&ceid=US:en",
    "REUTERS_WORLD": "https://news.google.com/rss/search?q=site:reuters.com+when:1d&hl=en-US&gl=US&ceid=US:en",
    "GLOBAL_BUSINESS": "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-US&gl=US&ceid=US:en",
    "CNBC_BUSINESS": "https://news.google.com/rss/search?q=site:cnbc.com+when:1d&hl=en-US&gl=US&ceid=US:en",
    "JAPAN_BUSINESS": "https://news.google.com/rss/search?q=site:nikkei.com&hl=ja&gl=JP&ceid=JP:ja",
    "GLOBAL_SCIENCE": "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-US&gl=US&ceid=US:en",
    "ARS_TECHNICA": "https://news.google.com/rss/search?q=site:arstechnica.com+when:1d&hl=en-US&gl=US&ceid=US:en",
    "HACKER_NEWS": "https://hnrss.org/frontpage?points=100",
    "TECHCRUNCH": "https://news.google.com/rss/search?q=site:techcrunch.com+when:1d&hl=en-US&gl=US&ceid=US:en",
    "ZENN": "https://zenn.dev/feed",
    "LOBSTERS": "https://lobste.rs/rss",
    "REDDIT_PROG": "https://www.reddit.com/r/programming/top/.rss?t=day",
    "DEV_TO": "https://dev.to/feed",
    "INFOQ": "https://feed.infoq.com/",
    "THE_REGISTER": "https://news.google.com/rss/search?q=site:theregister.com+when:1d&hl=en-US&gl=US&ceid=US:en"
}
TOPICS_PER_CATEGORY = 30
DEFAULT_RSS_MAX_ITEMS = 12

def clean_url(url):
    """Normalize URL by stripping query parameters and fragments, keeping path casing intact."""
    if not url:
        return ""
    try:
        parsed = urllib.parse.urlparse(url)
        cleaned = parsed._replace(query="", fragment="")
        # Only lowercase scheme and domain
        cleaned = cleaned._replace(scheme=cleaned.scheme.lower(), netloc=cleaned.netloc.lower())
        url_str = urllib.parse.urlunparse(cleaned).strip()
        if url_str.endswith('/'):
            url_str = url_str[:-1]
        return url_str
    except Exception:
        return url.strip()

def clean_title(title):
    """Normalize title for comparison by stripping whitespace and non-alphanumeric characters."""
    if not title:
        return ""
    return re.sub(r'[\s\W_]+', '', title).lower()

def fetch_article_summary(url):
    """Scrape the main content or summary of the article to provide deeper context."""
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=5)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        paragraphs = soup.find_all('p')
        text = ' '.join([p.get_text().strip() for p in paragraphs if len(p.get_text().strip()) > 30])
        return text[:400] if text else ""
    except Exception as e:
        print(f"Scraping skipped for {url}: {e}", file=sys.stderr)
        return ""

def fetch_news_from_rss(url, seen_urls=None, seen_titles=None, max_items=12):
    """Fetch news headlines and scrape basic content from RSS/Atom feed, skipping seen URLs/titles."""
    print(f"RSSフィードを取得中: {url}")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        feed = feedparser.parse(response.content)
        items = []
        
        valid_entries = []
        for entry in feed.entries:
            link = entry.link if hasattr(entry, 'link') else ""
            title = entry.title if hasattr(entry, 'title') else ""
            
            is_seen = False
            if link and seen_urls and clean_url(link) in seen_urls:
                is_seen = True
            if title and seen_titles and clean_title(title) in seen_titles:
                is_seen = True
                
            if is_seen:
                continue
                
            valid_entries.append(entry)
            if len(valid_entries) >= max_items:
                break
                
        for entry in valid_entries:
            title = entry.title
            date_str = ""
            if hasattr(entry, 'published'):
                date_str = entry.published
            elif hasattr(entry, 'updated'):
                date_str = entry.updated
            
            link = entry.link if hasattr(entry, 'link') else ""
            summary = entry.summary if hasattr(entry, 'summary') else ""
            if summary:
                summary = BeautifulSoup(summary, "html.parser").get_text()[:200]
            
            article_text = fetch_article_summary(link)
            content_snippet = article_text if len(article_text) > len(summary) else summary
            
            items.append(f"- [日付: {date_str}] {title}\n  (概要/本文抜粋: {content_snippet})\n  (URL: {link})")
            time.sleep(0.5)
        return "\n".join(items)
    except Exception as e:
        print(f"RSS取得エラー ({url}): {e}", file=sys.stderr)
        return ""

def call_gemini_api(api_key, prompt):
    """Call Google Gemini API via raw HTTP request."""
    print("Gemini APIを呼び出し中...")
    
    models = [
        "gemini-3.5-flash",
        "gemini-flash-latest",
        "gemini-2.5-flash"
    ]
    
    payload = {
        "contents": [{
            "parts": [{
                "text": prompt
            }]
        }],
        "generation_config": {
            "response_mime_type": "application/json"
        }
    }
    data = json.dumps(payload).encode('utf-8')
    
    last_error = None
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"
        req = urllib.request.Request(
            url,
            data=data,
            headers={
                'Content-Type': 'application/json',
                'x-goog-api-key': api_key
            },
            method='POST'
        )
        try:
            with urllib.request.urlopen(req, timeout=180) as response:
                result = json.loads(response.read().decode('utf-8'))
                text_content = result['candidates'][0]['content']['parts'][0]['text']
                usage = result.get('usageMetadata', {})
                return json.loads(text_content), usage
        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8') if e.fp else ""
            print(f"Gemini API ({model}) HTTPエラー ({e.code}): {e.reason}\n詳細: {error_body}", file=sys.stderr)
            last_error = e
        except Exception as e:
            print(f"Gemini API ({model}) 接続試行エラー: {e}", file=sys.stderr)
            last_error = e
            
    print(f"Gemini APIのすべてのモデル呼び出しに失敗しました。最後のエラー: {last_error}", file=sys.stderr)
    return None, {}

def call_openai_api(api_key, prompt):
    """Call OpenAI API via raw HTTP request."""
    print("OpenAI APIを呼び出し中...")
    url = "https://api.openai.com/v1/chat/completions"
    
    payload = {
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant that outputs only valid JSON."},
            {"role": "user", "content": prompt}
        ],
        "response_format": {"type": "json_object"}
    }
    
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        },
        method='POST'
    )
    
    try:
        with urllib.request.urlopen(req, timeout=180) as response:
            result = json.loads(response.read().decode('utf-8'))
            text_content = result['choices'][0]['message']['content']
            usage = result.get('usage', {})
            return json.loads(text_content), usage
    except Exception as e:
        print(f"OpenAI APIエラー: {e}", file=sys.stderr)
        return None, {}

def send_email_notification(to_email, subject, body_text):
    """Send an email notification via SMTP."""
    smtp_server = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_password = os.environ.get("SMTP_PASSWORD")
    
    if not smtp_user or not smtp_password or not to_email:
        print("メール通知用の環境変数が設定されていません。", file=sys.stderr)
        return
        
    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg['Subject'] = subject
    
    msg.attach(MIMEText(body_text, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        print("メールを送信しました。")
    except Exception as e:
        print(f"メール送信エラー: {e}", file=sys.stderr)

def normalize_topic_key(topic):
    """Return a stable deduplication key for a topic using normalized URL."""
    url = (topic.get("url") or "").strip()
    headline = (topic.get("headline") or "").strip()
    if url:
        return clean_url(url)
    return headline

def enforce_topic_limits(llm_response, limit=TOPICS_PER_CATEGORY):
    """Limit topics per category and remove duplicates across all categories."""
    days_data = llm_response.get("periods", {}).get("days", {})
    categories = days_data.get("categories", [])
    if not isinstance(categories, list):
        return llm_response

    seen_global = set()
    for category in categories:
        topics = category.get("topics", [])
        if not isinstance(topics, list):
            category["topics"] = []
            continue

        unique_topics = []
        seen_local = set()
        for topic in topics:
            if not isinstance(topic, dict):
                continue
            key = normalize_topic_key(topic)
            if not key or key in seen_local or key in seen_global:
                continue
            seen_local.add(key)
            seen_global.add(key)
            unique_topics.append(topic)
            if len(unique_topics) >= limit:
                break
        category["topics"] = unique_topics

    return llm_response

def load_processed_cache(cache_path, now, keep_days=3):
    """Load processed URLs and Titles from JSON, filtering out older entries."""
    urls = {}
    titles = {}
    if os.path.exists(cache_path):
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list):
                    for url in data:
                        urls[clean_url(url)] = now.isoformat()
                elif isinstance(data, dict):
                    raw_urls = data.get("urls", {})
                    for u, d_str in raw_urls.items():
                        urls[clean_url(u)] = d_str
                    
                    raw_titles = data.get("titles", {})
                    for t, d_str in raw_titles.items():
                        titles[t] = d_str
        except Exception as e:
            print(f"キャッシュファイルのロード失敗: {e}", file=sys.stderr)
            
    cutoff = now - timedelta(days=keep_days)
    cleaned_urls = {}
    for u, d_str in urls.items():
        try:
            if datetime.fromisoformat(d_str) > cutoff:
                cleaned_urls[u] = d_str
        except Exception:
            cleaned_urls[u] = d_str
            
    cleaned_titles = {}
    for t, d_str in titles.items():
        try:
            if datetime.fromisoformat(d_str) > cutoff:
                cleaned_titles[t] = d_str
        except Exception:
            cleaned_titles[t] = d_str
            
    return cleaned_urls, cleaned_titles

def save_processed_cache(cache_path, urls_dict, titles_dict):
    """Save processed URLs and Titles dictionary to JSON."""
    try:
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump({"urls": urls_dict, "titles": titles_dict}, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"キャッシュファイルの保存失敗: {e}", file=sys.stderr)

def load_past_topics(archive_dir, now, hours=24):
    """JSTの現在時刻 `now` から過去 `hours` 時間以内のアーカイブからトピックをロードする。"""
    past_topics = []
    seen_urls = set()
    
    delta_days = (hours // 24) + 1
    for i in range(delta_days):
        target_date = now - timedelta(days=i)
        date_str = target_date.strftime('%Y-%m-%d')
        file_path = os.path.join(archive_dir, f"{date_str}.json")
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    categories = data.get("periods", {}).get("days", {}).get("categories", [])
                    for cat in categories:
                        genre = cat.get("genre")
                        for topic in cat.get("topics", []):
                            if not isinstance(topic, dict):
                                continue
                            
                            url = (topic.get("url") or "").strip()
                            if url:
                                seen_urls.add(clean_url(url))
                            
                            fetched_at_str = topic.get("fetched_at")
                            is_recent = False
                            if fetched_at_str:
                                try:
                                    fetched_at = datetime.fromisoformat(fetched_at_str)
                                    if now - fetched_at <= timedelta(hours=hours):
                                        is_recent = True
                                except ValueError:
                                    pass
                            else:
                                if hours == 24 and i <= 1:
                                    is_recent = True
                                    
                            if is_recent:
                                past_topics.append({
                                    "genre": genre,
                                    "topic": topic
                                })
            except Exception as e:
                print(f"アーカイブファイルのロード失敗 ({file_path}): {e}", file=sys.stderr)
    return past_topics, seen_urls

def collect_weekly_topics(archive_dir, now):
    """過去7日間のアーカイブから、重要度(importance)が4以上のトピックを収集してテキスト化する。"""
    weekly_topics = []
    seen_keys = set()
    for i in range(7):
        target_date = now - timedelta(days=i)
        date_str = target_date.strftime('%Y-%m-%d')
        file_path = os.path.join(archive_dir, f"{date_str}.json")
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    categories = data.get("periods", {}).get("days", {}).get("categories", [])
                    for cat in categories:
                        genre_title = cat.get("title", "")
                        topics = cat.get("topics", [])
                        for t in topics:
                            if not isinstance(t, dict):
                                continue
                            headline = t.get("headline", "")
                            url = t.get("url", "")
                            key = f"{headline}|{clean_url(url)}"
                            if key in seen_keys:
                                continue
                            
                            importance = int(t.get("importance", 3))
                            if importance >= 4:
                                seen_keys.add(key)
                                content = t.get("content", "")
                                weekly_topics.append(f"- [{genre_title}] {headline} (重要度: {importance})\n  (概要: {content})")
            except Exception as e:
                pass
    return "\n".join(weekly_topics[:60])

GENRE_MAPPING = {
    "WORLD": {
        "title": "グローバル情勢・マクロ経済",
        "feeds": ["GLOBAL_WORLD", "BBC_WORLD", "REUTERS_WORLD"],
        "system_role": "世界情勢・マクロ経済の第一線で活躍するプロフェッショナル・アナリスト",
        "prompt_instruction": "真にインパクトのある重要ニュースのみを厳選して抽出してください。ノイズや単なるPRは除外すること（目安: 5〜15件）。\\n事実関係と、グローバルな社会・経済への影響を論理的に解説してください（日本市場に特段の関連がある場合は付記する）。"
    },
    "BUSINESS": {
        "title": "ビジネス・経済動向",
        "feeds": ["GLOBAL_BUSINESS", "CNBC_BUSINESS", "JAPAN_BUSINESS"],
        "system_role": "世界情勢・マクロ経済の第一線で活躍するプロフェッショナル・アナリスト",
        "prompt_instruction": "真にインパクトのある重要ニュースのみを厳選して抽出してください。ノイズや単なるPRは除外すること（目安: 5〜15件）。\\n事実関係と、グローバルな社会・経済への影響を論理的に解説してください（日本市場に特段の関連がある場合は付記する）。"
    },
    "TECHNOLOGY": {
        "title": "グローバル・テックトレンド",
        "feeds": ["TECHCRUNCH", "THE_REGISTER"],
        "system_role": "先端技術トレンドとソフトウェア開発 of the high tier engineer",
        "prompt_instruction": "技術的ブレイクスルーの核心や、真に重要なニュースのみを厳選して抽出してください。ノイズや単なる製品PRは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    },
    "SCIENCE": {
        "title": "サイエンス・ディープテック",
        "feeds": ["GLOBAL_SCIENCE", "ARS_TECHNICA"],
        "system_role": "先端技術トレンドとソフトウェア開発 of the high tier engineer",
        "prompt_instruction": "科学的発見やディープテック分野の進展について、真に重要なニュースのみを厳選して抽出してください。ノイズは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    },
    "DEVELOPER_TRENDS": {
        "title": "デベロッパートレンド (Hacker News & 海外フォーラム & 国内)",
        "feeds": ["HACKER_NEWS", "LOBSTERS", "REDDIT_PROG", "DEV_TO", "INFOQ", "ZENN"],
        "system_role": "先端技術トレンドとソフトウェア開発 of the high tier engineer",
        "prompt_instruction": "技術的ブレイクスルーの核心や、開発者にとって真に重要なニュースのみを厳選して抽出してください。ノイズや単なる製品PRは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    }
}

def generate_topics_for_genre(api_key, call_func, genre, title, news_text, instruction, system_role):
    prompt = f"""
    あなたは{system_role}であり、高度なインテリジェンスを提供しています。
    提供された海外および国内のニュースリスト（本文抜粋を含む）から、ニュースを抽出してください。

    【分析対象のニュースリスト】
    {news_text}

    【抽出ルール】
    - {instruction}
    - topics は **重複禁止（headline と url の重複を禁止）**。
    - 抽出するニュースについて、提供されたテキスト内のURLを一文字も改変・省略せずにそのまま転記すること。
    - 必ず以下のJSONスキーマに従って日本語のみで出力してください。Markdown of json format.
    - 各ニュースについて、その重要度やインパクトの大きさ（importance）を 1 から 5 の整数値で設定してください（5が最も重要、1が最も低い）。

    JSONスキーマ:
    {{
      "topics": [
        {{
          "headline": "具体的なトピック見出し",
          "content": "事実関係の簡潔なまとめ（スクレイピングされた本文内容を反映すること）",
          "impact": "★重要★ 意義や影響の論理的な解説",
          "date": "ニュースの日付 (例: 10/24 等)",
          "url": "ニュースの元のURL（改変禁止）",
          "importance": 3
        }}
      ]
    }}
    """
    return call_func(api_key, prompt)

def generate_synthesis(api_key, call_func, headlines_text):
    prompt = f"""
    あなたはプロフェッショナル・アナリストです。
    本日および直近1週間の重要ニュースのリストに基づいて、本日の総括サマリー、今週全体のニュース群から見えてくるマクロな潮流（Big Picture）、およびニュース内で使われている専門用語の解説（5〜10個程度）を作成してください。

    【重要ニュースリスト】
    {headlines_text}

    必ず以下のJSONスキーマに従って日本語のみで出力してください。Markdown of json format.

    JSONスキーマ:
    {{
      "summary": {{
        "content": "本日の世界のビッグトレンドと、注視すべきポイントの総括"
      }},
      "week": {{
        "overview": "直近1週間のニュース群全体から見えてくる、より大きなマクロトレンドや技術の潮流（Big Picture）に関する総括文章（数段落で深い洞察を記述）",
        "key_trends": [
          {{
            "title": "トレンド見出し（例：AI市場の二極化とエッジ移行）",
            "analysis": "具体的な分析、グローバル市場や開発者への影響、今後の展望"
          }}
        ]
      }},
      "glossary": {{
        "用語名": "その用語の一般向け解説（5〜10個程度ピックアップ）"
      }}
    }}
    """
    return call_func(api_key, prompt)

def main():
    load_dotenv()
    
    # コマンドライン引数の解析
    parser = argparse.ArgumentParser(description="News generator with incremental fetch and LLM summarization.")
    parser.add_argument("--bootstrap", action="store_true", help="Bootstrap mode: fetch maximum items and bypass history check.")
    parser.add_argument("--limit", type=int, default=None, help="Force limit the maximum items fetched per RSS feed.")
    args = parser.parse_args()
    
    gemini_key = os.environ.get("GEMINI_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")
    
    if not gemini_key and not openai_key:
        print("エラー: GEMINI_API_KEY または OPENAI_API_KEY が設定されていません。", file=sys.stderr)
        print("環境変数に設定するか、スクリプトと同じディレクトリに .env ファイルを作成して設定してください。", file=sys.stderr)
        sys.exit(1)
        
    api_key = gemini_key if gemini_key else openai_key
    call_func = call_gemini_api if gemini_key else call_openai_api
    
    # タイムゾーンと日付の設定
    jst_tz = timezone(timedelta(hours=9))
    now = datetime.now(jst_tz)
    
    output_dir = os.path.join(os.path.dirname(__file__), 'news')
    archive_dir = os.path.join(output_dir, 'archive')
    os.makedirs(archive_dir, exist_ok=True)
    cache_path = os.path.join(output_dir, 'processed_urls.json')
    
    # アーカイブから過去24時間のトピックをロード
    past_topics = []
    if not args.bootstrap:
        print("過去24時間のアーカイブを読み込み中...")
        past_topics, _ = load_past_topics(archive_dir, now, hours=24)
        print(f"マージ対象の過去トピック: {len(past_topics)}件")
        
    # 処理済みキャッシュのロード
    processed_urls_dict = {}
    processed_titles_dict = {}
    seen_urls = set()
    seen_titles = set()
    if not args.bootstrap:
        print("処理済みキャッシュを読み込み中...")
        processed_urls_dict, processed_titles_dict = load_processed_cache(cache_path, now)
        seen_urls = set(processed_urls_dict.keys())
        seen_titles = set(processed_titles_dict.keys())
        print(f"既処理URL: {len(seen_urls)}件, 既処理タイトル: {len(seen_titles)}件")
    else:
        print("Bootstrapモードで実行中（過去の履歴とキャッシュを無視します）")
        
    # RSS取得件数の設定
    if args.limit is not None:
        rss_max_items = args.limit
    elif args.bootstrap:
        rss_max_items = 40
    else:
        rss_max_items = DEFAULT_RSS_MAX_ITEMS
        
    print(f"各RSSフィードからの最大取得件数: {rss_max_items}")
    
    news_data = {}
    total_news = 0
    
    print("RSSフィードの並列取得を開始します...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(FEEDS)) as executor:
        future_to_name = {
            executor.submit(fetch_news_from_rss, url, seen_urls=seen_urls, seen_titles=seen_titles, max_items=rss_max_items): name 
            for name, url in FEEDS.items()
        }
        for future in concurrent.futures.as_completed(future_to_name):
            name = future_to_name[future]
            try:
                items_text = future.result()
                news_data[name] = items_text
                count = len(re.findall(r'\(URL:\s*(https?://[^\s\)]+)\)', items_text)) if items_text else 0
                total_news += count
                print(f"取得完了: {name} (新規 {count}件)")
            except Exception as exc:
                print(f"{name} の取得でエラーが発生しました: {exc}", file=sys.stderr)
                news_data[name] = ""
    
    # 差分実行時で新規ニュースが0件かつ、過去のトピックも無い場合のみエラー終了とする
    if total_news == 0 and len(past_topics) == 0:
        print("新規ニュースが0件で、マージ対象の過去トピックも存在しないため終了します。", file=sys.stderr)
        sys.exit(0)
        
    # RSSから新しく取得して、実際に処理対象（LLMに送信）となるニュースのURLとタイトルをキャッシュに登録
    newly_urls_count = 0
    newly_titles_count = 0
    for name, items_text in news_data.items():
        if not items_text:
            continue
        articles = items_text.split("- [日付:")
        for art in articles:
            if not art.strip():
                continue
            lines = art.strip().split('\n')
            if len(lines) >= 3:
                first_line = lines[0]
                title_match = re.search(r'\]\s*(.*)', first_line)
                title = title_match.group(1).strip() if title_match else ""
                
                url_line = lines[2]
                url_match = re.search(r'\(URL:\s*(https?://[^\s\)]+)\)', url_line)
                url = url_match.group(1).strip() if url_match else ""
                
                if url:
                    cleaned_u = clean_url(url)
                    if cleaned_u not in processed_urls_dict:
                        processed_urls_dict[cleaned_u] = now.isoformat()
                        newly_urls_count += 1
                if title:
                    cleaned_t = clean_title(title)
                    if cleaned_t not in processed_titles_dict:
                        processed_titles_dict[cleaned_t] = now.isoformat()
                        newly_titles_count += 1
                        
    if newly_urls_count > 0 or newly_titles_count > 0:
        print(f"新規に処理したURL {newly_urls_count}件, タイトル {newly_titles_count}件をキャッシュに保存します。")
        save_processed_cache(cache_path, processed_urls_dict, processed_titles_dict)
        
    categories = []
    all_headlines = []
    total_api_usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
    
    print("\n各カテゴリのLLM解析を並列で実行します...")
    genre_results = {}
    
    genres_to_process = []
    for genre, info in GENRE_MAPPING.items():
        news_text = ""
        for feed_name in info["feeds"]:
            if news_data.get(feed_name):
                news_text += f"【{feed_name}】\n{news_data.get(feed_name)}\n"
        if news_text.strip():
            genres_to_process.append((genre, info, news_text))
        else:
            print(f"新規ニュースなしのためスキップ: [{genre}]")
            
    if genres_to_process:
        with concurrent.futures.ThreadPoolExecutor(max_workers=len(genres_to_process)) as executor:
            future_to_genre = {
                executor.submit(
                    generate_topics_for_genre, 
                    api_key, call_func, genre, info["title"], news_text, 
                    info["prompt_instruction"], info.get("system_role", "プロフェッショナル・アナリスト")
                ): genre
                for genre, info, news_text in genres_to_process
            }

            for future in concurrent.futures.as_completed(future_to_genre):
                genre = future_to_genre[future]
                try:
                    res, usage = future.result()
                    genre_results[genre] = (res, usage)
                    print(f"解析完了: [{genre}]")
                except Exception as exc:
                    print(f"[{genre}] の解析でエラーが発生しました: {exc}", file=sys.stderr)
                    genre_results[genre] = (None, {})
                
    fetched_at_str = now.isoformat()
    
    for genre, info in GENRE_MAPPING.items():
        genre_topics = []
        
        for past in past_topics:
            if past["genre"] == genre:
                if "fetched_at" not in past["topic"]:
                    past["topic"]["fetched_at"] = (now - timedelta(hours=12)).isoformat()
                genre_topics.append(past["topic"])
                
        if genre in genre_results:
            res, usage = genre_results[genre]
            if res and "topics" in res:
                for t in res["topics"]:
                    t["fetched_at"] = fetched_at_str
                    if "importance" not in t:
                        t["importance"] = 3
                    genre_topics.append(t)
                    
                if gemini_key:
                    total_api_usage["prompt_tokens"] += usage.get('promptTokenCount', 0)
                    total_api_usage["completion_tokens"] += usage.get('candidatesTokenCount', 0)
                    total_api_usage["total_tokens"] += usage.get('totalTokenCount', 0)
                else:
                    total_api_usage["prompt_tokens"] += usage.get('prompt_tokens', 0)
                    total_api_usage["completion_tokens"] += usage.get('completion_tokens', 0)
                    total_api_usage["total_tokens"] += usage.get('total_tokens', 0)
        
        seen_keys = set()
        unique_topics = []
        for t in genre_topics:
            key = normalize_topic_key(t)
            if key not in seen_keys:
                seen_keys.add(key)
                unique_topics.append(t)
                
        sorted_topics = sorted(
            unique_topics,
            key=lambda x: (int(x.get("importance", 3)), x.get("fetched_at", "")),
            reverse=True
        )
        
        final_topics = sorted_topics[:TOPICS_PER_CATEGORY]
        
        if final_topics:
            categories.append({
                "genre": genre,
                "title": info["title"],
                "topics": final_topics
            })
            all_headlines.append(f"\n[{info['title']}]")
            for t in final_topics:
                all_headlines.append(f"- {t.get('headline')} (重要度: {t.get('importance')})")
                
    print("過去7日間の重要トピックを収集中...")
    weekly_headlines_text = collect_weekly_topics(archive_dir, now)
    
    synthesis_input = weekly_headlines_text if weekly_headlines_text else "\n".join(all_headlines)
    print("全体サマリーと週間トレンド（キートレンド）を生成中...")
    synthesis_res, usage = generate_synthesis(api_key, call_func, synthesis_input)
    
    if gemini_key:
        total_api_usage["prompt_tokens"] += usage.get('promptTokenCount', 0)
        total_api_usage["completion_tokens"] += usage.get('candidatesTokenCount', 0)
        total_api_usage["total_tokens"] += usage.get('totalTokenCount', 0)
    else:
        total_api_usage["prompt_tokens"] += usage.get('prompt_tokens', 0)
        total_api_usage["completion_tokens"] += usage.get('completion_tokens', 0)
        total_api_usage["total_tokens"] += usage.get('total_tokens', 0)
        
    final_response = {
        "periods": {
            "days": {
                "categories": categories,
                "summary": synthesis_res.get("summary", {}) if synthesis_res else {}
            },
            "week": synthesis_res.get("week", {}) if synthesis_res else {}
        },
        "glossary": synthesis_res.get("glossary", {}) if synthesis_res else {}
    }

    final_response = enforce_topic_limits(final_response, TOPICS_PER_CATEGORY)
    final_response["updated_at"] = now.strftime("%Y-%m-%d %H:%M JST")
    
    output_path = os.path.join(output_dir, 'news_data.js')
    token_usage = {}
    try:
        if os.path.exists(output_path):
            with open(output_path, 'r', encoding='utf-8') as f:
                content = f.read()
                json_text = content[content.find('{'):content.rfind('}')+1]
                prev_data = json.loads(json_text)
                token_usage = prev_data.get("token_usage", {})
    except Exception as e:
        print(f"Previous token usage could not be loaded: {e}")

    current_month = now.strftime("%Y-%m")
    current_day = now.strftime("%Y-%m-%d")
    
    run_tokens = total_api_usage["total_tokens"]
    token_usage[current_month] = token_usage.get(current_month, 0) + run_tokens
    token_usage[current_day] = token_usage.get(current_day, 0) + run_tokens
    
    final_response["token_usage"] = token_usage
    
    archive_path = os.path.join(archive_dir, f"{now.strftime('%Y-%m-%d')}.json")
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("window.newsData = ")
            json.dump(final_response, f, ensure_ascii=False, indent=2)
            f.write(";\n")
        print(f"要約ニュースデータを保存しました: {output_path}")
        
        with open(archive_path, 'w', encoding='utf-8') as f:
            json.dump(final_response, f, ensure_ascii=False, indent=2)
        print(f"アーカイブを保存しました: {archive_path}")
    except Exception as e:
        print(f"ファイル保存エラー: {e}", file=sys.stderr)
        sys.exit(1)
        
    print("すべての処理が正常に完了しました。")
    
    to_email = os.environ.get("TO_EMAIL")
    smtp_user = os.environ.get("SMTP_USER")
    
    if to_email and smtp_user:
        usage_msg = f"\n[API使用量]\n入力トークン: {total_api_usage['prompt_tokens']}\n出力トークン: {total_api_usage['completion_tokens']}\n合計トークン: {total_api_usage['total_tokens']}"
        
        try:
            summary_text = final_response.get("periods", {}).get("days", {}).get("summary", {}).get("content", "サマリーが見つかりませんでした。")
        except:
            summary_text = "サマリーの抽出に失敗しました。"
            
        subject = f"📰 ニュース要約完了 ({now.strftime('%Y-%m-%d')})"
        body_text = f"ニュースの自動取得と要約が完了しました。\n新規取得件数: {total_news}件\n\n"
        body_text += f"【本日のサマリー】\n{summary_text}\n\n"
        
        try:
            week_overview = final_response.get("periods", {}).get("week", {}).get("overview", "")
            if week_overview:
                body_text += f"【直近1週間の総括】\n{week_overview}\n\n"
        except:
            pass

        body_text += f"---\n{usage_msg}"
        send_email_notification(to_email, subject, body_text)
    else:
        print("メール通知用の環境変数が設定されていないため、通知はスキップされました。")

if __name__ == "__main__":
    main()
