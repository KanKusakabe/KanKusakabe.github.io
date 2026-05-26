# KanKusakabe.github.io

このリポジトリは、日下部 完 (Kan Kusakabe) の個人ウェブサイトのルートおよび、マーケットニュース要約セクションを管理しています。

---

## 🤖 AI / AIエージェント開発者向け指示書 (AI Agent Guidelines)
> [!IMPORTANT]
> **このリポジトリで作業するすべてのAI（Gemini, Claude, GPT等）およびエージェントツールは、以下の開発規約を遵守してください。**
> 
> 1. **Pythonの実行には必ず `uv` を使用してください:**
>    - ローカルマシンのシステムPython環境を汚染しないよう、`python generate_news.py` のような直接実行は禁止します。
>    - スクリプトの実行や依存関係の処理は、必ず `uv run generate_news.py` を使用してください。
> 2. **仮想環境および設定ファイルの誤プッシュ防止:**
>    - `.venv/` および `.env` などの秘匿情報やローカル仮想環境がGit管理対象に入らないよう、`.gitignore` のルールを確認・順守してください。
> 3. **依存関係の追加:**
>    - 新しいパッケージが必要な場合は、`generate_news.py` の上部にある PEP 723 スクリプトメタデータ（`# /// script ...`）および `requirements.txt` の両方に追記してください。

---

## ニュースセクションの仕組み

`KanKusakabe.github.io/news` では、最新の経済およびテクノロジートレンドが株式市場に与えた影響を因果関係に基づいて要約・解説するページがホストされています。

* **フロントエンド:** [news/index.html](news/index.html) (Tailwind CSSを使用したレスポンシブな1枚のHTML。`news/news_data.json` を非同期で読み込んで表示します)
* **バックエンド (要約スクリプト):** [generate_news.py](generate_news.py) (Google NewsのRSSをフェッチし、GeminiまたはOpenAIのAPIを用いて要約JSONを生成します)
* **自動更新ワークフロー:** [.github/workflows/update_news.yml](.github/workflows/update_news.yml) (GitHub Actionsにより、毎日日本時間18:00に自動でスクリプトが走り、最新情報に更新されます)

---

## 開発環境の復元方法 (Set Up / Restore Environment)

別のPCや新しい環境でこのプロジェクトをクローンした際、`uv` を用いて環境を復元する手順は以下の通りです。

### 1. `uv` のインストール（未導入の場合のみ）
ターミナルで `uv --version` を実行し、インストールされていない場合は以下を実行してインストールしてください。

* **macOS / Linux:**
  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```
* **Windows (PowerShell):**
  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

### 2. 仮想環境の作成と復元
リポジトリのルートディレクトリで以下を実行します。

```bash
# 仮想環境 (.venv) の作成
uv venv

# 依存関係 (requirements.txt) のインストール
uv pip install -r requirements.txt
```

### 3. APIキー（環境変数）の設定
ローカル実行やテストを行うために、ルートディレクトリに `.env` ファイルを作成し、APIキーを書き込みます。（`.env` は自動的にGitの管理対象から除外されます）

```env
# Google Gemini APIを使用する場合 (推奨)
GEMINI_API_KEY=あなたのGeminiAPIキー

# OpenAI APIを使用する場合
# OPENAI_API_KEY=あなたのOpenAIAPIキー
```

### 4. 実行テスト
以下のコマンドを実行して、ニュースデータが正常に更新されることを確認します。

```bash
uv run generate_news.py
```
成功すると、`news/news_data.json` が最新データに上書き更新されます。
