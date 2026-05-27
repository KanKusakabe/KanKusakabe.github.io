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

# RSS Feeds
FEEDS = {
    "GLOBAL_WORLD": "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-US&gl=US&ceid=US:en",
    "BBC_WORLD": "http://feeds.bbci.co.uk/news/world/rss.xml",
    "GLOBAL_BUSINESS": "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-US&gl=US&ceid=US:en",
    "CNBC_BUSINESS": "https://search.cnbc.com/rs/search/combinedcms/view.xml?id=10001147",
    "JAPAN_BUSINESS": "https://news.google.com/rss/search?q=site:nikkei.com&hl=ja&gl=JP&ceid=JP:ja",
    "GLOBAL_SCIENCE": "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=en-US&gl=US&ceid=US:en",
    "ARS_TECHNICA": "http://feeds.arstechnica.com/arstechnica/index",
    "HACKER_NEWS": "https://hnrss.org/frontpage?points=100",
    "TECHCRUNCH": "https://techcrunch.com/feed/",
    "ZENN": "https://zenn.dev/feed"
}
TOPICS_PER_CATEGORY = 30
RSS_MAX_ITEMS = 40

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

def fetch_news_from_rss(url, max_items=12):
    """Fetch news headlines and scrape basic content from RSS/Atom feed."""
    print(f"RSSフィードを取得中: {url}")
    try:
        feed = feedparser.parse(url)
        items = []
        for entry in feed.entries[:max_items]:
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
    """Return a stable deduplication key for a topic."""
    url = (topic.get("url") or "").strip()
    headline = (topic.get("headline") or "").strip()
    if url and headline:
        return f"{url}|{headline}"
    return url or headline

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


GENRE_MAPPING = {
    "WORLD": {
        "title": "グローバル情勢・マクロ経済",
        "feeds": ["GLOBAL_WORLD", "BBC_WORLD"],
        "prompt_instruction": "グローバルとローカルの動きをクロスリファレンスし、社会・市場全体に影響がある高インパクト案件を優先して可能な限り多く（最大30件まで）抽出してください。"
    },
    "BUSINESS": {
        "title": "ビジネス・経済動向",
        "feeds": ["GLOBAL_BUSINESS", "CNBC_BUSINESS", "JAPAN_BUSINESS"],
        "prompt_instruction": "グローバルとローカルの動きをクロスリファレンスし、社会・市場全体に影響がある高インパクト案件を優先して可能な限り多く（最大30件まで）抽出してください。"
    },
    "TECHNOLOGY": {
        "title": "グローバル・テックトレンド",
        "feeds": ["TECHCRUNCH"],
        "prompt_instruction": "概要（本文抜粋）を深く読み込み、「なぜそれが面白いのか」「日本の開発者にどういう影響があるか」が明確な高関連トピックを優先して可能な限り多く（最大30件まで）抽出して列挙してください。"
    },
    "SCIENCE": {
        "title": "サイエンス・ディープテック",
        "feeds": ["GLOBAL_SCIENCE", "ARS_TECHNICA"],
        "prompt_instruction": "科学的発見やディープテック分野の進展について、日本市場や未来の技術にどう繋がるかを示唆する重要ニュースを優先して可能な限り多く（最大30件まで）抽出してください。"
    },
    "DEVELOPER_TRENDS": {
        "title": "デベロッパートレンド (Hacker News & 国内)",
        "feeds": ["HACKER_NEWS", "ZENN"],
        "prompt_instruction": "概要（本文抜粋）を深く読み込み、「なぜそれが面白いのか」「日本の開発者にどういう影響があるか」が明確な高関連トピックを優先して可能な限り多く（最大30件まで）抽出して列挙してください。"
    }
}

def generate_topics_for_genre(api_key, call_func, genre, title, news_text, instruction):
    prompt = f"""
あなたは世界情勢、マクロ経済、および先端技術トレンドの第一線で活躍するプロフェッショナル・アナリストであり、日本の市場・エンジニア向けに高度なインテリジェンスを提供しています。
提供された海外および国内のニュースリスト（本文抜粋を含む）から、**「日本市場や日本の開発者にとって大きなインパクトを与える重要ニュース」**を抽出してください。

【分析対象のニュースリスト】
{news_text}

【抽出ルール】
- {instruction}
- topics は **重複禁止（headline と url の重複を禁止）**。
- 必ず以下のJSONスキーマに従って日本語のみで出力してください。Markdownのコードブロック（```json など）で囲まず、純粋なJSON文字列のみを返してください。

JSONスキーマ:
{{
  "topics": [
    {{
      "headline": "具体的なトピック見出し（例：米FRBが利下げを示唆）",
      "content": "事実関係の簡潔なまとめ（スクレイピングされた本文内容を反映すること）",
      "impact": "★重要★日本市場や関連セクターへの影響、または社会的な意義の論理的な解説",
      "date": "ニュースの日付 (例: 10/24 等)",
      "url": "ニュースの元のURL"
    }}
  ]
}}
"""
    return call_func(api_key, prompt)

def generate_synthesis(api_key, call_func, headlines_text):
    prompt = f"""
あなたはプロフェッショナル・アナリストです。
本日抽出された以下の重要ニュースのリストに基づいて、本日の総括サマリー、週間トレンド（直近1週間の市場・技術の潮流の総括）、およびニュース内で使われている専門用語の解説（5〜10個程度）を作成してください。

【本日の重要ニュースリスト】
{headlines_text}

必ず以下のJSONスキーマに従って日本語のみで出力してください。Markdownのコードブロック（```json など）で囲まず、純粋なJSON文字列のみを返してください。

JSONスキーマ:
{{
  "summary": {{
    "content": "本日の世界のビッグトレンドと、日本が注視すべきポイントの総括"
  }},
  "week": {{
    "overview": "直近1週間の市場・技術の潮流に関する総括文章（数段落で深い洞察を記述）",
    "key_trends": [
      {{
        "title": "トレンド見出し（例：AI市場の二極化とエッジ移行）",
        "analysis": "具体的な分析、日本への影響、今後の展望"
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
    
    gemini_key = os.environ.get("GEMINI_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")
    
    if not gemini_key and not openai_key:
        print("エラー: GEMINI_API_KEY または OPENAI_API_KEY が設定されていません。", file=sys.stderr)
        print("環境変数に設定するか、スクリプトと同じディレクトリに .env ファイルを作成して設定してください。", file=sys.stderr)
        sys.exit(1)
        
    api_key = gemini_key if gemini_key else openai_key
    call_func = call_gemini_api if gemini_key else call_openai_api
        
    news_data = {}
    total_news = 0
    for name, url in FEEDS.items():
        items_text = fetch_news_from_rss(url, max_items=RSS_MAX_ITEMS)
        news_data[name] = items_text
        count = len(items_text.splitlines()) if items_text else 0
        total_news += count
        print(f"取得した {name} ニュース件数: {count}")
    
    if total_news == 0:
        print("エラー: ニュースの取得に失敗しました。", file=sys.stderr)
        sys.exit(1)

    categories = []
    all_headlines = []
    total_api_usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
    
    for genre, info in GENRE_MAPPING.items():
        news_text = ""
        for feed_name in info["feeds"]:
            news_text += f"【{feed_name}】\n{news_data.get(feed_name, '')}\n"
            
        print(f"カテゴリ [{genre}] のニュースを生成中...")
        res, usage = generate_topics_for_genre(api_key, call_func, genre, info["title"], news_text, info["prompt_instruction"])
        if res and "topics" in res:
            topics = res["topics"]
            categories.append({
                "genre": genre,
                "title": info["title"],
                "topics": topics
            })
            all_headlines.append(f"\n[{info['title']}]")
            for t in topics:
                all_headlines.append(f"- {t.get('headline')}: {t.get('impact')}")
                
        # Update usage (handle both Gemini and OpenAI formats)
        if gemini_key:
            total_api_usage["prompt_tokens"] += usage.get('promptTokenCount', 0)
            total_api_usage["completion_tokens"] += usage.get('candidatesTokenCount', 0)
            total_api_usage["total_tokens"] += usage.get('totalTokenCount', 0)
        else:
            total_api_usage["prompt_tokens"] += usage.get('prompt_tokens', 0)
            total_api_usage["completion_tokens"] += usage.get('completion_tokens', 0)
            total_api_usage["total_tokens"] += usage.get('total_tokens', 0)
            
    print("全体サマリーと用語解説を生成中...")
    headlines_text = "\n".join(all_headlines)
    synthesis_res, usage = generate_synthesis(api_key, call_func, headlines_text)
    
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
        
    jst_tz = timezone(timedelta(hours=9))
    now = datetime.now(jst_tz)
    final_response["updated_at"] = now.strftime("%Y-%m-%d %H:%M JST")
    

    output_dir = os.path.join(os.path.dirname(__file__), 'news')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'news_data.js')
    
    token_usage = {}
    try:
        if os.path.exists(output_path):
            with open(output_path, 'r', encoding='utf-8') as f:
                content = f.read()
                json_text = content[content.find('{'):content.rfind('}')+1]
                import json
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

    
    archive_dir = os.path.join(output_dir, 'archive')
    os.makedirs(archive_dir, exist_ok=True)
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
        body_text = f"ニュースの自動取得と要約が完了しました。\n取得件数: {total_news}件\n\n"
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
