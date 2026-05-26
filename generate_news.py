#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "python-dotenv",
#     "feedparser",
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

# RSS Feeds
FEEDS = {
    "WORLD": "https://news.google.com/rss/headlines/section/topic/WORLD?hl=ja&gl=JP&ceid=JP:ja",
    "NATION": "https://news.google.com/rss/headlines/section/topic/NATION?hl=ja&gl=JP&ceid=JP:ja",
    "BUSINESS": "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=ja&gl=JP&ceid=JP:ja",
    "SCIENCE": "https://news.google.com/rss/headlines/section/topic/SCIENCE?hl=ja&gl=JP&ceid=JP:ja",
    "NIKKEI": "https://news.google.com/rss/search?q=site:nikkei.com&hl=ja&gl=JP&ceid=JP:ja",
    "ITMEDIA": "https://rss.itmedia.co.jp/rss/2.0/itmedia_all.xml",
    "QIITA": "https://qiita.com/popular-items/feed",
    "ZENN": "https://zenn.dev/feed"
}

def fetch_news_from_rss(url, max_items=12):
    """Fetch news headlines from RSS/Atom feed using feedparser."""
    print(f"RSSフィードを取得中: {url}")
    try:
        feed = feedparser.parse(url)
        items = []
        for entry in feed.entries[:max_items]:
            title = entry.title
            # Strip source name from title for Google News
            if " - " in title and "news.google.com" in url:
                title = title.rsplit(" - ", 1)[0]
            items.append(f"- {title}")
        return "\n".join(items)
    except Exception as e:
        print(f"RSS取得エラー ({url}): {e}", file=sys.stderr)
        return ""

def call_gemini_api(api_key, prompt):
    """Call Google Gemini API via raw HTTP request."""
    print("Gemini APIを呼び出し中...")
    
    models = [
        "gemini-3.5-flash",
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-flash-latest"
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
            with urllib.request.urlopen(req, timeout=60) as response:
                result = json.loads(response.read().decode('utf-8'))
                text_content = result['candidates'][0]['content']['parts'][0]['text']
                return json.loads(text_content)
        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8') if e.fp else ""
            print(f"Gemini API ({model}) HTTPエラー ({e.code}): {e.reason}\n詳細: {error_body}", file=sys.stderr)
            last_error = e
        except Exception as e:
            print(f"Gemini API ({model}) 接続試行エラー: {e}", file=sys.stderr)
            last_error = e
            
    print(f"Gemini APIのすべてのモデル呼び出しに失敗しました。最後のエラー: {last_error}", file=sys.stderr)
    return None

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
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode('utf-8'))
            text_content = result['choices'][0]['message']['content']
            return json.loads(text_content)
    except Exception as e:
        print(f"OpenAI APIエラー: {e}", file=sys.stderr)
        return None

def main():
    load_dotenv()
    
    gemini_key = os.environ.get("GEMINI_API_KEY")
    openai_key = os.environ.get("OPENAI_API_KEY")
    
    if not gemini_key and not openai_key:
        print("エラー: GEMINI_API_KEY または OPENAI_API_KEY が設定されていません。", file=sys.stderr)
        print("環境変数に設定するか、スクリプトと同じディレクトリに .env ファイルを作成して設定してください。", file=sys.stderr)
        sys.exit(1)
        
    news_data = {}
    total_news = 0
    for name, url in FEEDS.items():
        items_text = fetch_news_from_rss(url, max_items=12)
        news_data[name] = items_text
        count = len(items_text.splitlines()) if items_text else 0
        total_news += count
        print(f"取得した {name} ニュース件数: {count}")
    
    if total_news == 0:
        print("エラー: ニュースの取得に失敗しました。", file=sys.stderr)
        sys.exit(1)
        
    prompt = f"""
あなたはプロのアナリストおよび技術トレンドの専門家です。以下の最新ニュース記事リストを読み、各ジャンルについて複数の重要なトピックをピックアップして、わかりやすく列挙的に解説したレポートを作成してください。

以下のニュースリストを基に分析してください：
【WORLD (国際)】
{news_data['WORLD']}
【NATION (国内)】
{news_data['NATION']}
【BUSINESS (一般ビジネス)】
{news_data['BUSINESS']}
【NIKKEI (日経新聞・経済)】
{news_data['NIKKEI']}
【SCIENCE (科学)】
{news_data['SCIENCE']}
【ITMEDIA (テクノロジー総合)】
{news_data['ITMEDIA']}
【QIITA (エンジニアトレンド)】
{news_data['QIITA']}
【ZENN (エンジニアトレンド)】
{news_data['ZENN']}

レポートは必ず以下のJSONスキーマに従って日本語のみで出力してください。Markdownのコードブロック（```json など）で囲まず、純粋なJSON文字列のみを返してください。

JSONスキーマ:
{{
  "periods": {{
    "days": {{
      "categories": [
        {{
          "genre": "WORLD",
          "title": "国際・世界情勢サマリー",
          "topics": [
            {{
              "headline": "具体的なトピック見出し（例：米FRBが利下げを示唆）",
              "content": "事実関係の簡潔なまとめ",
              "impact": "市場や関連セクターへの影響、または社会的な意義の論理的な解説"
            }}
          ] // 重要なニュースを2〜4つピックアップしてください
        }},
        {{
          "genre": "NATION",
          "title": "国内ニュースサマリー",
          "topics": [ ... ]
        }},
        {{
          "genre": "BUSINESS",
          "title": "ビジネス・経済サマリー (日経・一般)",
          "topics": [ ... ]
        }},
        {{
          "genre": "TECHNOLOGY",
          "title": "テクノロジー・ITトレンド (ITmedia等)",
          "topics": [ ... ]
        }},
        {{
          "genre": "SCIENCE",
          "title": "科学・サイエンスサマリー",
          "topics": [ ... ]
        }},
        {{
          "genre": "DEVELOPER_TRENDS",
          "title": "デベロッパートレンド (Qiita・Zenn)",
          "topics": [ ... ]
        }}
      ],
      "summary": {{
        "content": "本日の総括と注視ポイント"
      }}
    }},
    "week": {{
      // 「days」と全く同じ構造（categories, summary）で、直近1週間のトピックから中長期トレンドと市場影響の因果関係を記述してください。
    }},
    "month": {{
      // 「days」と全く同じ構造（categories, summary）で、直近1ヶ月のマクロトレンドと市場影響の因果関係を記述してください。
    }}
  }},
  "glossary": {{
    "用語名": "その用語の一般向け解説（5〜10個程度ピックアップしてください）"
  }}
}}

制約事項：
1. 一般ビジネスパーソンや初学者にもわかりやすいように解説してください。
2. ニュースの単なる箇条書きではなく、論理的な因果関係（事象→影響）を解説してください。
3. 日本語以外の言語は出力しないでください。すべての期間（days, week, month）のすべてのフィールドに日本語を入力してください。
"""

    llm_response = None
    if gemini_key:
        llm_response = call_gemini_api(gemini_key, prompt)
    elif openai_key:
        llm_response = call_openai_api(openai_key, prompt)
        
    if not llm_response:
        print("エラー: LLMによるレポート生成に失敗しました。", file=sys.stderr)
        sys.exit(1)
        
    jst_tz = timezone(timedelta(hours=9))
    now = datetime.now(jst_tz)
    llm_response["updated_at"] = now.strftime("%Y-%m-%d %H:%M JST")
    
    output_dir = os.path.join(os.path.dirname(__file__), 'news')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'news_data.js')
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("window.newsData = ")
            json.dump(llm_response, f, ensure_ascii=False, indent=2)
            f.write(";\n")
        print(f"要約ニュースデータを保存しました: {output_path}")
    except Exception as e:
        print(f"ファイル保存エラー: {e}", file=sys.stderr)
        sys.exit(1)
        
    print("すべての処理が正常に完了しました。")

if __name__ == "__main__":
    main()
