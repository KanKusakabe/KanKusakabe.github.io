import sys

with open('generate_news.py', 'r') as f:
    content = f.read()

index = content.find('def main():')
if index == -1:
    print("Could not find def main():")
    sys.exit(1)

new_code = content[:index] + """
GENRE_MAPPING = {
    "WORLD": {
        "title": "グローバル情勢・マクロ経済",
        "feeds": ["GLOBAL_WORLD"],
        "system_role": "世界情勢・マクロ経済の第一線で活躍するプロフェッショナル・アナリスト",
        "prompt_instruction": "真にインパクトのある重要ニュースのみを厳選して抽出してください。ノイズや単なるPRは除外すること（目安: 5〜15件）。\\n事実関係と、グローバルな社会・経済への影響を論理的に解説してください（日本市場に特段の関連がある場合は付記する）。"
    },
    "BUSINESS": {
        "title": "ビジネス・経済動向",
        "feeds": ["GLOBAL_BUSINESS", "JAPAN_BUSINESS"],
        "system_role": "世界情勢・マクロ経済の第一線で活躍するプロフェッショナル・アナリスト",
        "prompt_instruction": "真にインパクトのある重要ニュースのみを厳選して抽出してください。ノイズや単なるPRは除外すること（目安: 5〜15件）。\\n事実関係と、グローバルな社会・経済への影響を論理的に解説してください（日本市場に特段の関連がある場合は付記する）。"
    },
    "TECHNOLOGY": {
        "title": "グローバル・テックトレンド",
        "feeds": ["TECHCRUNCH", "THE_REGISTER"],
        "system_role": "先端技術トレンドとソフトウェア開発の第一線で活躍するプロフェッショナル・エンジニア",
        "prompt_instruction": "技術的ブレイクスルーの核心や、真に重要なニュースのみを厳選して抽出してください。ノイズや単なる製品PRは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    },
    "SCIENCE": {
        "title": "サイエンス・ディープテック",
        "feeds": ["GLOBAL_SCIENCE", "ARS_TECHNICA"],
        "system_role": "先端技術トレンドとソフトウェア開発の第一線で活躍するプロフェッショナル・エンジニア",
        "prompt_instruction": "科学的発見やディープテック分野の進展について、真に重要なニュースのみを厳選して抽出してください。ノイズは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    },
    "DEVELOPER_TRENDS": {
        "title": "デベロッパートレンド (Hacker News & 海外フォーラム & 国内)",
        "feeds": ["HACKER_NEWS", "LOBSTERS", "REDDIT_PROG", "DEV_TO", "INFOQ", "ZENN"],
        "system_role": "先端技術トレンドとソフトウェア開発の第一線で活躍するプロフェッショナル・エンジニア",
        "prompt_instruction": "技術的ブレイクスルーの核心や、開発者にとって真に重要なニュースのみを厳選して抽出してください。ノイズや単なる製品PRは除外すること（目安: 5〜15件）。\\nなぜそれが面白いのか、技術的な意義や将来への影響を論理的に解説してください。"
    }
}

def generate_topics_for_genre(api_key, call_func, genre, title, news_text, instruction):
    prompt = f\"\"\"
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
\"\"\"
    return call_func(api_key, prompt)

def generate_synthesis(api_key, call_func, headlines_text):
    prompt = f\"\"\"
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
\"\"\"
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
            news_text += f"【{feed_name}】\\n{news_data.get(feed_name, '')}\\n"
            
        print(f"カテゴリ [{genre}] のニュースを生成中...")
        res, usage = generate_topics_for_genre(api_key, call_func, genre, info["title"], news_text, info["prompt_instruction"])
        if res and "topics" in res:
            topics = res["topics"]
            categories.append({
                "genre": genre,
                "title": info["title"],
                "topics": topics
            })
            all_headlines.append(f"\\n[{info['title']}]")
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
    headlines_text = "\\n".join(all_headlines)
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
    
    archive_dir = os.path.join(output_dir, 'archive')
    os.makedirs(archive_dir, exist_ok=True)
    archive_path = os.path.join(archive_dir, f"{now.strftime('%Y-%m-%d')}.json")
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("window.newsData = ")
            json.dump(final_response, f, ensure_ascii=False, indent=2)
            f.write(";\\n")
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
        usage_msg = f"\\n[API使用量]\\n入力トークン: {total_api_usage['prompt_tokens']}\\n出力トークン: {total_api_usage['completion_tokens']}\\n合計トークン: {total_api_usage['total_tokens']}"
        
        try:
            summary_text = final_response.get("periods", {}).get("days", {}).get("summary", {}).get("content", "サマリーが見つかりませんでした。")
        except:
            summary_text = "サマリーの抽出に失敗しました。"
            
        subject = f"📰 ニュース要約完了 ({now.strftime('%Y-%m-%d')})"
        body_text = f"ニュースの自動取得と要約が完了しました。\\n取得件数: {total_news}件\\n\\n"
        body_text += f"【本日のサマリー】\\n{summary_text}\\n\\n"
        
        try:
            week_overview = final_response.get("periods", {}).get("week", {}).get("overview", "")
            if week_overview:
                body_text += f"【直近1週間の総括】\\n{week_overview}\\n\\n"
        except:
            pass

        body_text += f"---\\n{usage_msg}"
        
        send_email_notification(to_email, subject, body_text)
    else:
        print("メール通知用の環境変数が設定されていないため、通知はスキップされました。")

if __name__ == "__main__":
    main()
"""

with open('generate_news.py', 'w') as f:
    f.write(new_code)
print("Updated generate_news.py successfully")
