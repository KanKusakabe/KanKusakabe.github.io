window.papersData = {
  "updated_at": "2026-10-27 10:16 JST",
  "arxiv": [
    {
      "id": "2610.32017",
      "title": "SynMark: Semantic-Coordinate Multi-Bit Watermarking during LLM Code Generation",
      "url": "https://arxiv.org/abs/2610.32017",
      "pdf": "https://arxiv.org/pdf/2610.32017",
      "authors": [
        "Rui Xu",
        "Weizhi Liu",
        "Zhaoxia Yin"
      ],
      "categories": [
        "cs.CR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "Under 100% identifier renaming, SynMark retains 82.27% and 83.77% BitAcc on CodeLlama and DeepSeek-Coder",
      "signals": [],
      "headline": "LLM生成コードの機能保存編集に頑健なセマンティックウォーターマーク",
      "what": "SynMarkは、LLMが生成したコードにマルチビットのウォーターマークを埋め込む手法で、表面的なトークンプレフィックスではなく、学習されたセマンティック座標を用いてメッセージルーティングを行います。",
      "enables": "これにより、識別子の名前変更や構造的リファクタリングといった機能保存編集が施されたコードでも、ウォーターマークの復元精度を高く保ちます。100%の識別子名変更下で、CodeLlamaでは82.27%、DeepSeek-Coderでは83.77%のBitAccを維持します。",
      "why_it_matters": "既存手法が表面トークンに依存し、編集によってルーティングがずれやすい問題を解決します。SynMarkは、より多くのLLM生成コードの改変に耐えうるため、コードの出所を追跡し、信頼性を確保する上で重要です。",
      "tags": [
        "LLM",
        "コード生成",
        "ウォーターマーク"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32326",
      "title": "TGR-EvoDAG: A DAG-based Multi-Agent Code Evolution Framework for Generative Recommendation on Tencent",
      "url": "https://arxiv.org/abs/2610.32326",
      "pdf": "https://arxiv.org/pdf/2610.32326",
      "authors": [
        "Junlin He",
        "Junzhang Zhu",
        "Yudong Li",
        "Yihong Tang",
        "Xuefeng Jiang",
        "Wei Ma"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "improving offline metrics by up to 37.4% and Agent4Rec simulated user satisfaction by 19.7% over the strongest baseline",
      "signals": [],
      "headline": "Tencentの生成推薦システム向け、DAGベースのマルチエージェントコード進化フレームワーク",
      "what": "TGR-EvoDAGは、モジュールカスケード型パイプラインを持つ生成推薦 (GR) モデルに特化したマルチエージェントコード進化フレームワークです。コード進化を有向非巡回グラフ (DAG) としてモデル化し、複数の進化ブランチを維持し、補完的なイノベーションをマージします。",
      "enables": "このフレームワークは、Amazonデータセットでオフライン指標を最大37.4%改善し、Agent4Recシミュレートユーザー満足度を19.7%向上させました。Tencentの商用メディアプラットフォームでの産業展開では、オフラインHit@1で12.16%の相対改善、オンラインCTRで0.40%の統計的に有意な増加を達成しました。",
      "why_it_matters": "既存の進化手法が、ステージ間の再学習コストを無視したり、一時的な指標低下で有望なイノベーションを廃棄したりする問題を解決します。GRパイプライン全体の自律的な進化を可能にし、ドメイン固有のフィードバックと高度な探索を統合することで、効率的なアルゴリズム発見と性能向上を実現します。",
      "tags": [
        "LLMエージェント",
        "推薦システム",
        "コード生成"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32648",
      "title": "StateMirror: Pre-Execution Detection of Hallucinated Tool Calls in Coding Agents",
      "url": "https://arxiv.org/abs/2610.32648",
      "pdf": "https://arxiv.org/pdf/2610.32648",
      "authors": [
        "Shiwen Shan",
        "Yintong Huo",
        "Zhiying Wu",
        "Yuxin Su"
      ],
      "categories": [
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "surpassing the strongest LLM judge by 35.3% in F1 while reducing median detection latency from 17.73 s to 1.50 ms",
      "signals": [],
      "headline": "LLMベースのコーディングエージェントにおける幻覚ツール呼び出しを事前検知",
      "what": "StateMirrorは、LLMベースのコーディングエージェントが、実行環境に適用できない無効なアクション（幻覚ツール使用）を提案するのを、実行前に検知する軽量な検出器です。アクションを傍受し、ASTおよびコマンド分析を通じて状態述語を抽出し、ライブリポジトリに対して決定論的に検証します。",
      "enables": "本手法は、幻覚ツール呼び出しの検出において、0.940の精度と0.817のF1スコアを達成し、最強のLLMジャッジをF1スコアで35.3%上回ります。また、検出遅延を中央値で17.73秒から1.50ミリ秒に短縮し、トークン消費はゼロです。これにより、エージェントは幻覚ツール呼び出しの95%以上を修正でき、実行時間を15.8%、トークン消費量を11.8%削減しました。",
      "why_it_matters": "既存の事後的なフィードバックに依存するフレームワークがリソースを浪費する問題を解決します。実行前に環境との不一致を特定することで、無効なアクションとそれに続くリカバリサイクルを未然に防ぎ、エージェントの効率と信頼性を大幅に向上させます。",
      "tags": [
        "LLMエージェント",
        "デバッグ",
        "コード生成"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.31911",
      "title": "LazyFlash: Forward-Dense, Backward-Sparse Attention for Accelerated Long-Context Fine-Tuning",
      "url": "https://arxiv.org/abs/2610.31911",
      "pdf": "https://arxiv.org/pdf/2610.31911",
      "authors": [
        "Keqi Deng",
        "Ruchao Fan",
        "Jinyu Li"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "achieving up to 5.7x attention-backward speedup over FlashAttention",
      "signals": [],
      "headline": "LLM長文ファインチューニングを高速化、メモリ効率の高いAttention機構",
      "what": "LazyFlashは、Attentionの学習において、フォワードパスは密（dense）に保ちつつ、バックワードパスを疎（sparse）にする手法です。Attentionの学習はバックワードパスが支配的であるという観察に基づいています。",
      "enables": "バックワードパスで勾配のノルムが小さいクエリブロックをスキップすることで、FlashAttentionに対し最大5.7倍のAttentionバックワード高速化、エンドツーエンドの学習で1.7倍の高速化を達成し、下流タスクの性能を維持します。",
      "why_it_matters": "これにより、推論時に既存の標準的な密なモデルを使用できるため、vLLMなどの既存システムとの互換性を保ちつつ、長文コンテキストLLMの学習コストを大幅に削減できます。勾配に基づいたブロック疎化と重要度サンプリングにより、実用的な高速化を実現しています。",
      "tags": [
        "LLM",
        "Attention",
        "高速化"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32597",
      "title": "Automated Multi-Line Bug Repair Using Model Checker Aided LLMs: A Case Study on RISC-V Processors",
      "url": "https://arxiv.org/abs/2610.32597",
      "pdf": "https://arxiv.org/pdf/2610.32597",
      "authors": [
        "Debleena Das",
        "Chandan Kumar Jha",
        "Muhammad Hassan",
        "Rolf Drechsler",
        "Ansuman Banerjee",
        "Subhra K. Das"
      ],
      "categories": [
        "cs.AR",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "demonstrate that our methodology can repair up to 98% of single-line RTL bugs and 93% of the multi-line bugs.",
      "signals": [],
      "headline": "モデルチェッカーとLLMを活用し、RISC-Vプロセッサの複数行バグを自動修復",
      "what": "本論文は、LLMと形式検証ツール（モデルチェッカー）を組み合わせ、Register-Transfer Level (RTL) デザインにおける複数行バグの自動修復を可能にする新しい手法を提案しています。失敗したアサーションをLLMがパッチを生成する際のガイドとして利用し、生成されたパッチはモデルチェッカーで形式的に検証されます。",
      "enables": "BRISC-V RISC-Vコアのケーススタディでは、本手法は単一行RTLバグの最大98%、複数行バグの93%を修復できることを示しました。これにより、複雑なRISC-Vプロセッサ設計におけるスケーラブルなLLM支援複数行バグ修復が可能になります。",
      "why_it_matters": "従来のLLMによるRTLデバッグ手法が単一行バグに限定され、信頼性に欠ける問題を克服します。形式検証によって信頼性とスケーラビリティを確保し、半導体開発におけるデバッグのボトルネックを解消する可能性を秘めています。",
      "tags": [
        "LLM",
        "バグ修正",
        "形式検証"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.31931",
      "title": "Every Weight Is a Path of Shared Discrete Decisions",
      "url": "https://arxiv.org/abs/2610.31931",
      "pdf": "https://arxiv.org/pdf/2610.31931",
      "authors": [
        "Ammar Ali",
        "Stamatis Lefkimmiatis"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 19,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce TWIG (Tree-structured Weights with Inherited Gates), a representation in which every weight of a neural network is the end of a path of small discrete decisions",
      "signals": [],
      "headline": "ニューラルネットワークの重みをツリー構造で表現し、多様な圧縮を一元化",
      "what": "TWIG (Tree-structured Weights with Inherited Gates) は、ニューラルネットワークの各重みを、符号、2のべき乗によるシフト、ゼロゲート、共有テーブルのインデックスといった一連の離散的な決定のパスの終端として表現する手法です。",
      "enables": "この表現により、量子化、プルーニング、低ランク分解などの多様な圧縮手法を一つのオブジェクトの編集として扱い、ネットワーク全体で最適化できるようになります。また、回路コストを考慮した場合、GPTQと比較して同等の層エラーで9〜15%少ない加算で3-4ビット精度を達成します。",
      "why_it_matters": "これにより、現在の断片化された圧縮手法（それぞれが独自のフォーマットとソルバーを持つ）を統合し、固定重みを持つチップ向けの効率的なハードウェア実装への道を開きます。全ての共通フォーマットは、追加コストなしで浅いTWIGとして表現可能です。",
      "tags": [
        "ニューラルネットワーク",
        "モデル圧縮",
        "量子化"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32141",
      "title": "Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting",
      "url": "https://arxiv.org/abs/2610.32141",
      "pdf": "https://arxiv.org/pdf/2610.32141",
      "authors": [
        "Jiazheng Li",
        "Huaqing Zhang",
        "Jing Xu",
        "Tianle Cai",
        "Jingzhao Zhang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "averaging +7.84 pp over a matched direct mixture, including gains of +17.06 pp on GSM8K",
      "signals": [],
      "headline": "データ混合時のLLM事前学習を高速化する適応的損失再重み付け手法",
      "what": "LARE (Loss-Adaptive Reweighting under fixed Exposure) は、複数のデータドメインを混合して事前学習するLLMにおいて、データ露出量は固定したまま、各ドメインの学習への寄与度（損失の重み）を自動的に調整する手法です。実行中の損失統計からドメイン重みを適応的に調整します。",
      "enables": "1.5Bモデルを240Bトークンで学習させた実験において、知識、数学、コードの5つのベンチマーク全てで性能を向上させ、直接混合と比較して平均で+7.84 pp改善しました。具体的には、GSM8Kで+17.06 pp、MATHで+9.00 ppのゲインを達成しました。",
      "why_it_matters": "これは、データ混合比率だけでは捉えられない、独立した制御メカニズムを明らかにします。忘却トレードオフを改善し、追加のデータ露出なしに、知識や数学といった複合的な能力を単一のチェックポイントで向上させることができるため、LLMの効率的かつ効果的な事前学習に貢献します。",
      "tags": [
        "LLM",
        "事前学習",
        "最適化"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32234",
      "title": "MS-TTRL: Breaking the Frequency Conflict in Multiple-Solution Test-Time Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.32234",
      "pdf": "https://arxiv.org/pdf/2610.32234",
      "authors": [
        "Zhixia Zhang",
        "Binqian Xu",
        "Huaiyang Wang",
        "Yikun Ban",
        "Dianbo Liu"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "MS-TTRL improves Recovery Rate by 19.13 percentage points on average over the best-performing label-free baseline",
      "signals": [],
      "headline": "複数解タスクのTTRLにおける「頻度対立」を解決し、ラベルなし学習を改善",
      "what": "MS-TTRLは、科学・工学・数学的推論タスクのような複数解が存在する問題において、Test-Time Reinforcement Learning (TTRL) の「頻度対立」を解決する手法です。これは、正解推定が頻繁な結果を好み、多様性維持が稀な結果を好むという矛盾です。MS-TTRLはOutcome-Level Self-Verificationを通じて頻度から独立した正解推定を行い、生成頻度は多様性維持のみに利用します。",
      "enables": "2つのベンチマーク、4つの複数解タスク、3つの基盤モデルにわたる実験で、MS-TTRLは最適なラベルなしベースラインと比較してRecovery Rateを平均19.13パーセンテージポイント改善し、教師ありIPS-GRPOの性能に匹敵します。",
      "why_it_matters": "複数解タスクの教師なし学習において、生成頻度から独立した確実な正解推定を可能にすることで、ラベル付けコストが高いタスクでのTTRLの有効性を大幅に向上させます。これにより、稀で信頼性の高い検証済み結果の学習シグナルを強化し、多様なソリューションの発見と学習を促進します。",
      "tags": [
        "強化学習",
        "TTRL",
        "複数解タスク"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32880",
      "title": "Multimodal Generative AI Assists Comprehensive Echocardiographic Interpretation",
      "url": "https://arxiv.org/abs/2610.32880",
      "pdf": "https://arxiv.org/pdf/2610.32880",
      "authors": [
        "Yi Qin",
        "Marawan Elbatel",
        "Shanshan Song",
        "Taoran Huang",
        "Jiarong Guo",
        "Ningshu Li"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "improving average recall by 13.54% on shared tasks) and quantification (average R2 score increase of 0.275",
      "signals": [],
      "headline": "マルチモーダル生成AIが心エコー図の包括的な解釈を支援し診断精度向上",
      "what": "EchoChatは、ジェネレーティブ・マルチモーダル視覚言語モデルであり、心エコー図の包括的な分析を行います。心臓専門医の認知ワークフローを模倣し、膨大な医療知識とChain-of-Thought推論メカニズムを統合し、視覚的証拠に基づいて結論を明示的に根拠付けます。",
      "enables": "46,358の検査からの心エコー図-指示ペアで学習され、33の心臓病変を診断する広範な診断スコープをサポートします。既存の最先端基盤モデルと比較して、心臓病認識の平均リコールを13.54%向上させ、定量化の平均R2スコアを0.275向上させました。EchoChatと共同生成されたレポートは、診断精度と完全性において高い評価を受け、F1スコアで72.78%から82.75%に診断性能を改善しました。",
      "why_it_matters": "経験豊富な解釈者の不足という課題に対し、従来のAIソリューションが抱える「ブラックボックス」性や狭いタスク範囲の限界を克服します。臨床推論をマルチモーダルAIに統合することで、専門医の専門知識を民主化し、心血管ケアの標準を変革する可能性を示しています。",
      "tags": [
        "マルチモーダルAI",
        "医療AI",
        "診断支援"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32253",
      "title": "RSIHub: A Composable Framework for Agent-Evolution Methods",
      "url": "https://arxiv.org/abs/2610.32253",
      "pdf": "https://arxiv.org/pdf/2610.32253",
      "authors": [
        "Zimu Wang",
        "Xiaobo Wang",
        "Siyu Ye",
        "Jiaqi Li",
        "Silin Chen",
        "Yuling Shi"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "NeurIPS (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "NeurIPS 2026 Meta-Agents Workshop",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "エージェント進化手法を構築・比較・拡張するRSIHubフレームワーク",
      "what": "RSIHubは、実行フィードバックを利用してプロンプト、スキル、ツール、オーケストレーションを改善するエージェント進化手法 (Agent-evolution methods) のためのオープンソースフレームワークです。再利用可能なオペレーターと可変リソースを組み合わせるレシピを通じて、実行、評価、リカバリ、および系統管理機能を提供します。",
      "enables": "AHE、Hyperagents、A-Evolve、GEPAといった既存のエージェント進化手法を、フレームワークのコアを変更することなく実装できます。MiniSWEとCodexを用いた評価では、最大13.5パーセンテージポイントのpass@1向上を達成しました。",
      "why_it_matters": "これにより、研究者は進化ポリシーの開発に集中でき、評価は可変表面の外に保たれ、結果は候補と評価条件に紐付けられます。エージェント進化ポリシーを比較するための共通プロトコル、検証可能な候補履歴、および新しい手法を開発するための再利用可能なコンポーネントを提供し、研究開発を加速します。",
      "tags": [
        "LLMエージェント",
        "強化学習",
        "フレームワーク"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32965",
      "title": "RynnUnify: Towards Unified Embodied Brain",
      "url": "https://arxiv.org/abs/2610.32965",
      "pdf": "https://arxiv.org/pdf/2610.32965",
      "authors": [
        "Minghao Zhu",
        "Bohan Hou",
        "Kun Xiang",
        "Zixuan Wang",
        "Yinzhou Tang",
        "Yifei Yang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 33,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲33"
      ],
      "headline": "統一されたエンボディードモデルRynnUnify：身体性理解と長期的視覚計画を統合",
      "what": "RynnUnifyは、強力な身体性理解と、ビデオと言語の推論を組み合わせた長期的視覚計画を統合した16Bの統一エンボディードモデルです。空間推論、物理予測、グラウンディングといった能力を通じて、物理世界の理解と、連続するサブタスクでそれがどのように進化するかという視覚的予測を結びつけます。",
      "enables": "RynnUnifyは、評価された統一マルチモーダルモデルの中で最高の平均身体性理解スコアを達成し、Rynn-VPの総合スコアをCosmos 3 Nanoと比較して9.75ポイント改善しました。そのエージェント拡張機能はRynn-GEUの平均を6.0ポイント改善し、ワールドアクション拡張機能は選択された20のRoboCasa365複合タスクで51.5%の成功率、3つの実ロボットタスクで平均46.7%の成功率を達成しました。",
      "why_it_matters": "未観測状態や相互作用結果についての推論にビデオ予測を選択的に使用するエージェント拡張機能、およびその理解と予測能力をロボット制御に変換するワールドアクション拡張機能を提供します。これにより、身体性理解、視覚計画、ロボット制御のための共通基盤を確立し、「統一されたエンボディード脳」への一歩を踏み出します。",
      "tags": [
        "ロボティクス",
        "マルチモーダルAI",
        "視覚計画"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    },
    {
      "id": "2610.32630",
      "title": "The Standard Deviation in VICReg Buys a Safety Margin",
      "url": "https://arxiv.org/abs/2610.32630",
      "pdf": "https://arxiv.org/pdf/2610.32630",
      "authors": [
        "Hawar Dizayee"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "11 pages. Code: https://github.com/hawardizayee/vicreg-hinge",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "VICRegにおける標準偏差損失は、分散損失よりも安定性マージンを向上させる",
      "what": "VICRegは、各埋め込み次元の標準偏差にヒンジ（Hinge）を適用してコラプスを防ぎますが、この研究は、分散にヒンジを適用した場合と比較して、標準偏差にヒンジを適用することの利点を実験的に検証しています。",
      "enables": "標準偏差ヒンジは、分散ヒンジと比較して、コラプスが発生する閾値の重みが35〜130倍低いことを示しました。これにより、標準偏差ヒンジはより広い範囲の重みで学習を継続し、モデルの安定性に対して「安全マージン」をもたらします。",
      "why_it_matters": "この結果は、VICRegのような自己教師あり学習におけるコラプス防止メカニズムの設計に関する重要な洞察を提供します。標準偏差に基づくアプローチが、分散に基づくアプローチよりも、学習のロバスト性を高める上で優れていることを実証しています。",
      "tags": [
        "自己教師あり学習",
        "VICReg",
        "安定性"
      ],
      "fetched_at": "2026-10-27T10:16:48.184363+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.21114",
      "title": "Spectral-Spatial Interpretation",
      "abstract": "Post-hoc image explanations usually show where a model looks using spatial heatmaps or indicate which channels matter using global channel scores. These separate views are limiting for multispectral data because channel relevance is often spatially localized and physically meaningful. We introduce Spectral-Spatial Interpretation (SSI), a full-grid attribution method over position-channel players (g,c). For each spatial position, SSI fixes the observed surrounding context, defines a conditional game over the channels at that position, and applies the Shapley value to this local game. The result is a full spectral-spatial attribution matrix rather than a single heatmap or a global channel ranking. SSI has a clear local interpretation. It satisfies Shapley fairness within each position, and aggregating its channel attributions exactly recovers the position-level contextual contrast obtained by replacing that position with the baseline. SSI also differs from context-averaged Owen-style hierarchical accounting, which uses the same position-channel grouping but averages over external spatial coalitions. On HLS Burn Scar, SSI outperforms an MC-Owen estimator across retained attribution metrics while using only about 6% of its evaluation budget. Across CUB-200, EuroSAT, and HLS Burn Scar under both per-channel mean and zero baselines, SSI achieves the best joint deletion and insertion AUC over dense, flat, and rank-1 baselines, yields the strongest spectral hit rates and channel deletion, and leads spatial localization on both annotated datasets. Code is available at https://github.com/AtheavenMa/Spectral-Spatial-Interpretation.",
      "upvotes": 754,
      "github_stars": 42,
      "github_repo": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "project_page": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21114",
      "arxiv_url": "https://arxiv.org/abs/2610.21114",
      "title_ja": "Spectral-Spatial Interpretation",
      "summary_ja": "マルチスペクトル画像に対し、空間的な位置とチャンネルの両面から、どの要素がモデルの判断に寄与したかを特定できる局所的なShapley値を用いた手法の提案。"
    },
    {
      "id": "2610.28402",
      "title": "StreamEval: Evaluating Interactive Streaming Video Generation Models",
      "abstract": "As streaming video generation advances, enabling real-time interaction with generated video is becoming increasingly important. We introduce StreamEval, a unified benchmark for interactive streaming video generation spanning five tasks: avatar dialogue, avatar performance, world generation, instruction editing, and reference editing. StreamEval comprises 300 scripted test cases lasting 15-300s, each specifying initial assets, incrementally arriving multimodal requests, and explicit requirements for state changes and content preservation. Performance is assessed along four evaluation dimensions: task execution, state consistency, visual fidelity, and audiovisual coordination, instantiated through ten task-specific metrics on a 0-100 scale. Evaluating 37 distinct models across 300 test cases, we find that high visual quality and identity retention do not necessarily coincide with reliable request execution or sustained state consistency. In particular, request execution remains challenging: the highest task-specific scores are 36.90 for Following among seven avatar-performance models, 25.93 for Following in text-conditioned world generation, and 15.00 for Edit Success among three reported reference-editing models. These findings identify reliable request execution under timing and preservation constraints as a central challenge for advancing omni-modal real-time interactive systems. The leaderboard is available at https://streameval.ai",
      "upvotes": 654,
      "github_stars": 376,
      "github_repo": "https://github.com/StreamEval/StreamEval",
      "project_page": "https://streameval.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.28402",
      "arxiv_url": "https://arxiv.org/abs/2610.28402",
      "title_ja": "StreamEval: インタラクティブ・ストリーミング動画生成モデルの評価",
      "summary_ja": "リアルタイムな対話や編集を伴うストリーミング動画生成を評価するため、5つのタスクと4つの評価指標からなる300件のテストケースを含むベンチマークを構築。"
    },
    {
      "id": "2610.31329",
      "title": "WeVisOne-VL: Unified Visual Perception from Objects to Pixels",
      "abstract": "Existing vision-language models (VLMs) remain unreliable for fine-grained visual perception. In this report, we present WeVisOne-VL (WeChat Vision All-in-One), a powerful VLM that unifies object-level and pixel-level perception through structured next-token prediction. It supports multiple visual tasks including object detection, referring localization, counting, OCR, segmentation, and matting, enabling localization at any user-specific granularity, from points and boxes to masks and alpha mattes. Architecturally, we integrate a lightweight pixel decoder into the VLM via a special <OBJ> token to generate instance-level pixel outputs. We train the model with a three-stage curriculum SFT followed by mixed-task RL. Across over 30 benchmarks, WeVisOne-VL demonstrates leading performance on both object-level and pixel-level tasks, while maintaining robust rejection for object-absent queries. By releasing WeVisOne-VL to the open-source community, we hope to advance VLMs from broad visual understanding toward truly reliable perception systems for real-world deployment.",
      "upvotes": 252,
      "github_stars": 263,
      "github_repo": "https://github.com/Tencent/WeVisOne-VL",
      "project_page": "https://tencent.github.io/WeVisOne-VL",
      "comments": 4,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.31329",
      "arxiv_url": "https://arxiv.org/abs/2610.31329",
      "title_ja": "WeVisOne-VL: オブジェクトからピクセルまでを統合した視覚認識",
      "summary_ja": "軽量なピクセルデコーダーを統合し、物体検出からセグメンテーション、マッティングまで、任意の粒度で高精度に視覚的特徴を認識・出力できるマルチモーダル言語モデル。"
    },
    {
      "id": "2610.31668",
      "title": "Reading, Writing, Sharing, and Interacting with the World through Video",
      "abstract": "Video foundation models have advanced rapidly in understanding and generating visual sequences, while video world models seek to capture the underlying dynamics of the world they depict. Despite their different objectives, both concern the relationship between video observations and an evolving world. This survey adopts world modeling as a unifying lens for examining these developments. Viewing an observed video as a partial, lossy, and temporally ordered projection of a latent temporal world, we organize the literature around four complementary operations: reading infers world properties from observed video; writing synthesizes video from specified or learned world conditions; sharing integrates understanding and generation through common modeling mechanisms; and interacting predicts and updates world states under actions and evolving observations. This perspective distinguishes temporal coherence in observed or generated sequences from consistency in the underlying world state. Across tasks, representations, models, datasets, and benchmarks, we trace a shift in emphasis from clip-level recognition and perceptual fidelity toward persistent state, controllable evolution, physical and causal validity, and evaluation grounded in interaction and downstream decisions, and we distill the open challenges that follow.",
      "upvotes": 216,
      "github_stars": 22,
      "github_repo": "https://github.com/vid-gen/awesome-video-world-model",
      "project_page": "https://vid-gen.github.io/video-world-model-survey/",
      "comments": 2,
      "org": "University of Oxford",
      "url": "https://huggingface.co/papers/2610.31668",
      "arxiv_url": "https://arxiv.org/abs/2610.31668",
      "title_ja": "動画を通じた世界の読み書き、共有、インタラクション",
      "summary_ja": "動画の生成・理解モデルと世界モデルの発展を、情報の抽出、合成、統合、制御という4つの相補的な操作からなる「世界モデリング」の視点で整理した包括的な調査。"
    },
    {
      "id": "2610.30926",
      "title": "Making MLLM Latents Matter: Factor-Aware Predictive Learning for Cinematic Video Generation",
      "abstract": "Cinematic video generation requires both temporal inference from limited inputs (i.e., sparse rather than frame-by-frame guidance) and factor-aware control of character, scene, action, and camera. Multimodal large language models (MLLMs) offer useful priors for both capabilities, but their representations are not automatically actionable for video generation: a Video Diffusion Transformer (DiT) may bypass them through native conditioning pathways, and using them does not ensure either factor-aware control or generation-compatible temporal prediction. We propose Factor-Aware Predictive Learning (FAPL), which establishes effective MLLM latent use as a shared prerequisite and then targets the two capabilities with complementary learning signals. First, latent-only generator grounding trains the DiT with a frozen MLLM and connector, strengthening the DiT's use of MLLM latents for generation. Second, for factor-aware control, paired videos specify a target-factor change and non-target preservation, and factor-span replacement trains the DiT to realize this relationship in its output. Third, for temporal inference, text-only and text-plus-complete-video observations share a video target, and the trained DiT is then frozen while the MLLM and connector are optimized through it. This final stage trains limited-input representations for generation while retaining complete-observation reconstruction as a complementary training mode. Extensive experiments demonstrate our consistently better performance on three cinematic video generation tasks (i.e., sparse-to-video, factor-aware editing, and multi-shot generation) over baselines and validate FAPL's contributions to MLLM feature use, temporal control, and factor coordination.",
      "upvotes": 204,
      "github_stars": 5,
      "github_repo": "https://github.com/Songlin1998/ShotVerse2.0",
      "project_page": "https://shotverse.github.io/fapl/",
      "comments": 2,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.30926",
      "arxiv_url": "https://arxiv.org/abs/2610.30926",
      "title_ja": "MLLM潜在変数の活用：映画のような動画生成に向けた要因配慮型予測学習",
      "summary_ja": "マルチモーダル言語モデルの事前知識を活用し、キャラクターやカメラ、アクションなどの要素を制御しながら、時間的推論に基づく高品質な動画生成を実現する手法。"
    },
    {
      "id": "2610.24738",
      "title": "Editing Images into Reusable Layers via Compositional Edit-Prior Distillation",
      "abstract": "High-quality image editing requires precise modification of target regions while preserving the content of unrelated regions. Existing editing models produce flattened outputs that limit precise local manipulation and layer reuse, while decomposition methods typically optimize layer recovery separately from instruction-driven editing. To this end, we introduce LayerEditor, a unified framework that couples instruction-guided image editing with controllable generation of reusable RGBA layers. At its core, In-Context RGB-Alpha Token Modeling jointly represents the edited canvas and an ordered sequence of RGB-Alpha layers within a single token sequence, enabling semantic edits and explicit control over individual layer content. To retain the pretrained model's editing capability during adaptation to layered outputs, we propose Compositional Edit-Prior Distillation, which transfers its editing prior to both the edited canvas and the image composed from the predicted layers. To support training and evaluation, we construct LayerEditor-100K, a large-scale paired image-editing dataset with ordered RGBA layer annotations, and introduce dedicated benchmarks for layered editing. Extensive experiments demonstrate that LayerEditor maintains strong editing fidelity while generating accurate RGBA layers, supporting both flexible layer-level manipulation and multi-layer decomposition.",
      "upvotes": 196,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.24738",
      "arxiv_url": "https://arxiv.org/abs/2610.24738",
      "title_ja": "LayerEditor: 構成的な編集事前分布の蒸留による再利用可能なレイヤーへの画像編集",
      "summary_ja": "入力画像と編集結果、透明度を含む複数のレイヤーを単一のトークン列として扱うことで、指示通りの画像編集と再利用可能な個別の構成要素への分離を同時に実現する。"
    },
    {
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "abstract": "Moving from controllable videos to genuinely playable worlds requires persistent world state, executable game rules, and low-latency interaction. We outline a roadmap for the next generation of Matrix-Game that separates game execution from visual generation through an executable game harness, and introduce Matrix-Game 4.0 as the first system built on this design. A lightweight game engine maintains world state and executes interaction rules, a multimodal coding agent translates player ideas into game code and dynamic scene captions, and a renderer based on autoregressive video model transforms engine-rendered low-poly proxies into detailed visuals, conditioned on dynamic captions and memory references. This framework provides continuous guidance for visual generation and enables natural-language creation and modification of scenes and gameplay. Our renderer is trained on aligned low-poly and high-fidelity video pairs and distilled into a causal generator that generates in four-frame chunks with one or two denoising steps. Together with targeted inference optimizations, Matrix-Game 4.0 enables 480p, 60 FPS gameplay on a single NVIDIA RTX5090 with a key-press-to-display latency of 112ms. Single-step generation achieves 83FPS steady-state throughput with 18.2GiB of peak GPU memory usage. With fixed prompts, steady-state throughput also reaches 67FPS on an RTX5080 and 58FPS on an RTX5070Ti. We demonstrate customizable shooter and driving games with engine-enforced mechanics, and release code, model weights, and low-poly game assets to support research and creation of playable game worlds.",
      "upvotes": 195,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://matrix-game-v4-0.github.io/page/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.27999",
      "arxiv_url": "https://arxiv.org/abs/2610.27999",
      "title_ja": "Matrix-Game 4.0: 動画モデルを活用したリアルタイムで遊べるゲームワールド",
      "summary_ja": "実行エンジンによる状態管理、AIエージェントによるコード生成、動画モデルによる描画を分離し、低遅延でプレイヤーの指示に反応するインタラクティブなゲーム環境。"
    },
    {
      "id": "2610.11942",
      "title": "Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents",
      "abstract": "A login screen that appears after a tap on Sign in is expected; the same screen after a tap on View order is an attack. For GUI agents, safety is therefore a property of the transition rather than of the screen, and a monitor that inspects only screens can be defeated by reusing a legitimate one. Judging a transition requires an expectation of what should have followed the action. Existing GUI world models provide one, but they output it as text, code, or images, so checking it against the observed screen requires a second model to judge the two. We argue that a world model meant for verification should instead predict in the space in which observations are encoded, and present LGWM, a decoder-free, action-conditioned world model that predicts the representation of the next screen directly, trained without semantic annotation on 1.85M real GUI transitions. Verification reduces to a vector comparison, and the same signal reveals whether a mismatch is harmful. We evaluate on RSWT-BENCH, a diagnostic where each credential screen appears under both a legitimate and a hijacked transition, so detectors that see only the screen are at chance by construction. The training-free score reaches 0.987 AUC at 17 ms per decision, on par with the strongest closed-source VLMs and about ten AUC points above generative GUI world models at over three orders of magnitude lower latency. The residual direction reaches 0.953 AUC at separating harmful from benign violations, where prompted VLMs are near chance. Further analyses show that the prediction is a usable future state rather than an anomaly score. World models have mostly served as simulators or planners; our results point to a third role, verification, for which predicting in representation space is the natural design.",
      "upvotes": 189,
      "github_stars": 4,
      "github_repo": "https://github.com/jiamingzhang94/lgwm",
      "project_page": "https://jiamingzhang.netlify.app/lgwm/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.11942",
      "arxiv_url": "https://arxiv.org/abs/2610.11942",
      "title_ja": "世界モデルをGUIエージェントの検証器として活用",
      "summary_ja": "GUI操作後の画面変化が適切かを、テキストや画像ではなく、エンコードされた潜在空間内で予測・比較することで、高い精度と信頼性でエージェントを監視する手法。"
    },
    {
      "id": "2610.26203",
      "title": "Focused Omni-Modal GUI Agents",
      "abstract": "Graphical User Interface (GUI) agents increasingly act over streaming omni-modal observations spanning screenshots, audio, video, interaction history, and device states. However, exposing this complete context uniformly at every step ignores that relevance is transient and sparse: the signal determining one action can become clutter at the next. Because executed actions feed back into the context, these errors compound into Sequential Distraction, driving the agent into irreversible trajectory drift. We formulate the underlying requirement as Focused Perception: a representation that is step-adaptive, action-sufficient, and non-intrusive. We realize this in FocusGUI, a lightweight adapter that dynamically prioritizes multimodal channels against a step-specific decision reference. Instead of uniformly processing all inputs, it compresses the most relevant evidence into a compact latent and subtly injects it into the frozen decoder's embeddings, guiding the model's attention without altering its native parameter space. FocusGUI trains from action supervision alone, requiring neither modality-relevance labels nor backbone fine-tuning. Across four omni-modal backbones, it raises overall Type Match by +33.2 and Exact Match by 3.0 times over the frozen backbone on average, and Type Match by +30.1 over the strongest existing enhancement method.",
      "upvotes": 189,
      "github_stars": 52,
      "github_repo": "https://github.com/fyzhang1/FocusGUI",
      "project_page": "https://fyzhang1.github.io/FocusGUI/",
      "comments": 3,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2610.26203",
      "arxiv_url": "https://arxiv.org/abs/2610.26203",
      "title_ja": "焦点を絞ったオムニモーダルGUIエージェント",
      "summary_ja": "多様な入力を扱うGUIエージェントにおいて、各ステップで必要な情報にのみ適応的に注意を向け、無関係な情報による混乱を抑える軽量アダプターFocusGUIの提案。"
    },
    {
      "id": "2610.30181",
      "title": "Deep Search in Real-World Web Environments",
      "abstract": "Despite substantial progress in Deep Search agents, their ability to conduct end-to-end research in real-world open Web environments remains insufficiently evaluated. Unlike static retrieval settings, information on the real-world Web is distributed across diverse sources, modalities, and heterogeneous formats, often involving complex interaction mechanisms that require agents to autonomously search for, access, and integrate relevant evidence during execution. To address this gap, we introduce the OpenDS task, designed to evaluate agents' ability to perform multi-step deep search in the live, open Web. This task requires agents to autonomously explore the real Web, discover and connect relevant evidence from multiple independent sources through Web search, browser interaction, and evidence processing, and ultimately determine a unique factual answer. Building on this task formulation, we construct OpenDS-World, a benchmark comprising 200 challenging tasks spanning diverse information modalities, heterogeneous file formats, and interactive access requirements, with independent human verification to ensure evidence validity and answer uniqueness. We evaluate 12 frontier models under a unified tool environment and execution protocol. The best-performing model achieves 39.0% accuracy, while human evaluation across 1,000 independent attempts yields 21.1% accuracy. Further analyses of tool usage, search cost, termination behavior, and failure recovery reveal substantial differences in research strategies across models, as well as persistent challenges in tool coordination and long-horizon search management. OpenDS-World provides a unified evaluation platform for systematically assessing and advancing agents' autonomous deep search capabilities in real-world open Web environments.",
      "upvotes": 188,
      "github_stars": 24,
      "github_repo": "https://github.com/Yu-xm/OpenDS",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.30181",
      "arxiv_url": "https://arxiv.org/abs/2610.30181",
      "title_ja": "実世界のWeb環境におけるディープサーチ",
      "summary_ja": "静的な環境ではなく、実世界の多様なソースや形式が混在するWebを舞台に、エージェントが自律的に探索・統合を行って調査を完結させる能力を測るOpenDSタスク。"
    },
    {
      "id": "2610.29989",
      "title": "Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation",
      "abstract": "Autoregressive video diffusion models generate videos chunk by chunk, yet producing plausible continuations does not guarantee that they capture how scenes evolve. Under teacher forcing, strong temporal redundancy may allow local visual continuity to serve as a shortcut for current-chunk denoising, reducing the pressure to model visual evolution. We introduce Future Chunk Prediction (FCP), an auxiliary objective jointly optimized with teacher-forced denoising that predicts temporally separated chunks without access to the intervening visual context. Drawing supervision directly from training videos, FCP requires no additional pretrained visual encoder and leaves autoregressive inference unchanged. Our method achieves superior physical plausibility over standard teacher-forced autoregressive training with a lower overall training compute budget, highlighting the effectiveness and efficiency of future-chunk supervision for modeling visual evolution. Intriguingly, our visualizations suggest that FCP fosters a more structured representation space, which may be valuable for building autoregressive world models.",
      "upvotes": 172,
      "github_stars": 120,
      "github_repo": "https://github.com/TencentARC/Looking-Ahead",
      "project_page": "https://hellorpg.github.io/looking-ahead/",
      "comments": 2,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.29989",
      "arxiv_url": "https://arxiv.org/abs/2610.29989",
      "title_ja": "将来予測：自己回帰型動画生成における未来の進化のモデリング",
      "summary_ja": "自己回帰生成における視覚的な連続性の依存を抑え、後続のチャンクを直接予測する補助目的関数を導入することで、動画内でのシーンの進化をより正確に捉える。"
    },
    {
      "id": "2610.26659",
      "title": "SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?",
      "abstract": "Spatial intelligence requires agents to actively acquire visual evidence and integrate observations into a coherent representation of the three-dimensional world. Yet spatial question answering offers limited evidence of whether models can construct accurate metric maps through autonomous exploration. We introduce SpatialScout, a benchmark for evaluating vision-language model (VLM) agents on active object-level 3D mapping. SpatialScout comprises 80 diverse indoor scenes containing 3,140 target objects. Given an object inventory, RGB observations, camera calibration, and camera poses, agents control a camera to explore each scene and estimate object centers in a shared coordinate frame. The task requires coordinating viewpoint selection, cross-view association, geometric estimation, and map revision under bounded interaction budgets. Evaluation jointly measures localization accuracy and target coverage through object-scale overlap scores that penalize missing predictions. Experiments with frontier VLMs reveal substantial limitations: the strongest evaluated model, Claude Opus 5.5, achieves a mean overlap score of 41.71%, with 47.23% of targets exceeding an intersection-over-union (IoU) threshold of 0.5 and only 3.25% exceeding 0.9. These results reveal a substantial gap between recovering coarse object layouts and constructing complete, precise metric maps. SpatialScout provides a quantitative testbed for developing agents that build reliable 3D spatial representations through active perception. Code is available at https://github.com/JesseZZZZZ/SpatialScout.",
      "upvotes": 170,
      "github_stars": 11,
      "github_repo": "https://github.com/JesseZZZZZ/SpatialScout",
      "project_page": "https://spatialscout.osslab-pku.org",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2610.26659",
      "arxiv_url": "https://arxiv.org/abs/2610.26659",
      "title_ja": "SpatialScout: VLMエージェントは3D空間を能動的に探索・マッピングできるか",
      "summary_ja": "エージェントが3D空間内でカメラを操作し、自律的に探索を行いながら物体の中心位置を正確に推定し、地図を作成する能力を評価するベンチマーク。"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "abstract": "Looped language models can run more iterations at test time, but additional iterations need not help them solve longer problems. For sequential state tracking, final-answer supervision does not specify how far each iteration should advance, and repeated updates can change the scale of the recurrent state. We introduce Progress-Aligned Recurrence (PAR), which trains the prediction at iteration k to match the state after the first k operations and rescales recurrent states to their first-iteration norms. On swap-S_5, a Qwen2.5-0.5B model trained on at most 32 moves achieves 95.5\\% mean full-state accuracy at 512 moves, or 16times the training length, compared with 55.7\\% reported for RLT and 0.8\\% for explicit chain of thought on the same backbone. Controlled S_5 ablations show that removing norm anchoring reduces the extrapolation factor from 16times to below 2.2times, and replacing progress-aligned targets with final-answer supervision reduces it to at most 8times. A learned completion readout selects when to answer without a supplied stopping depth. When intermediate labels are unavailable, prefix self-distillation induces the correspondence from shorter problem prefixes using only final answers. The gains apply across sequential state-tracking tasks, establishing the task structure required for depth extrapolation. These findings support training intermediate predictions and state scale together to make additional recurrent depth useful for longer problems.",
      "upvotes": 163,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.27628",
      "arxiv_url": "https://arxiv.org/abs/2610.27628",
      "title_ja": "PAR: 状態追跡の長さ汎化に向けた進行状況調整型再帰",
      "summary_ja": "推論回数を増やす際に、各ステップの進捗を学習時と一致させ、再帰状態のノルムを調整することで、学習時より遥かに長いステップの問題を解くことを可能にした手法。"
    },
    {
      "id": "2610.29997",
      "title": "DONIC: Generalist Dexterous Bimanual Tracking Control from Human Demonstrations",
      "abstract": "Despite recent progress in dexterous reference tracking, existing models focus primarily on single-hand manipulation and a limited range of interactions, leaving the bimanual dexterous behaviors common in real life unaddressed. The scarcity of contact-rich bimanual manipulation data and the increased complexity of coordinating contacts make developing a generalist bimanual tracker particularly challenging. Therefore, we present 1) DONIC, the first generalist bimanual tracker jointly trained across operation categories and human-motion sources, together with 2) BiHOI, a multi-view dataset of 1,575 sequences spanning 229 objects and emphasizing sustained bimanual interaction, where reconstructed interactions are retargeted into robot references. DONIC combines proximal policy optimization with behavioral cloning in a feedback loop that recycles verified successful executions into training demonstrations. An object-centered per-hand reward maintains object-motion feedback while supervising each hand according to its reference contact role. Clip-Centered Advantages remove reference-dependent advantage offsets while preserving within-trajectory differences. Together, these designs enable one single policy to learn coordinated manipulation across heterogeneous references. Without finetuning, a single checkpoint achieves 86.79% success on unseen trajectories of training objects and 57.32% on held-out objects, surpassing the state-of-the-art bimanual tracking baselines by 77.36 and 45.73 percentage points.",
      "upvotes": 161,
      "github_stars": 47,
      "github_repo": "https://github.com/Ropedia/DONIC",
      "project_page": "https://ropedia.github.io/DONIC/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.29997",
      "arxiv_url": "https://arxiv.org/abs/2610.29997",
      "title_ja": "DONIC: 人間のデモンストレーションからの汎用的で器用な両手追跡制御",
      "summary_ja": "多様な物体を扱う両手の器用な操作を再現するため、人間の動作データと物理シミュレーションを組み合わせた、大規模データセットに基づく汎用的な両手制御モデル。"
    },
    {
      "id": "2610.28577",
      "title": "Cache Engineering for Agents",
      "abstract": "Large Language Model (LLM) agents can handle increasingly complex tasks, navigating long trajectories of observations and actions. As these trajectories grow, key-value (KV) cache I/O and storage become the dominant cost. Trajectories can also exceed the LLM's maximum context length, requiring control over active cache growth. Prior work uses context engineering to reduce cache size by trimming or summarizing history. However, modifying the trajectory prefix invalidates subsequent cached states and triggers costly re-prefilling of retained context. Task accuracy can also suffer when too little context is retained to limit re-prefill costs. We propose cache engineering as a new scheme. It allows agents to directly control their active KV cache without modifying the trajectory or re-prefilling retained context. Specifically, agents can proactively use drop to exclude selected cache from future attention and repos to adjust retained keys' position encodings. We formalize these cache operations and identify history dependence as a serving challenge: identical token sequences can yield different cache states under different cache operation sequences, making prefix matching insufficient for correct cache reuse. Thus, we co-design the AKV serving engine. It provides a stateless interface compatible with existing serving APIs, while internally managing stateful cache reuse, eviction, and restoration. Experiments show that a tool-response rolling-drop cache policy improves average benchmark scores by 1.7 points and reduces average cost by 27.7%, compared with conventional threshold-triggered summarization. With AKV, it achieves up to 1.2x the output throughput and a 1.5x speedup in P95 request latency. Recursive self-improvement of cache policies further reduces cost by 7.1% over expert design. Our code is at https://github.com/thu-nics/AKV.",
      "upvotes": 159,
      "github_stars": 136,
      "github_repo": "https://github.com/thu-nics/AKV",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/akv/",
      "comments": 1,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.28577",
      "arxiv_url": "https://arxiv.org/abs/2610.28577",
      "title_ja": "エージェントのためのキャッシュエンジニアリング",
      "summary_ja": "LLMエージェントの履歴増大に伴うコストを削減するため、過去の計算済みKVキャッシュの状態を、再計算を最小限に抑えつつ柔軟に再構成・再利用するキャッシュ制御手法。"
    },
    {
      "id": "2610.26855",
      "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
      "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, Ψ_0, ω-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
      "upvotes": 151,
      "github_stars": 106,
      "github_repo": "https://github.com/Ropedia/ropedia-w0",
      "project_page": "https://ropedia.github.io/ropedia-w0/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26855",
      "arxiv_url": "https://arxiv.org/abs/2610.26855",
      "title_ja": "Ropedia W0: 人間の経験を用いた形態を超えた移動・操作世界モデルの拡張",
      "summary_ja": "人間とロボットの膨大な一人称視点データを共通の骨格表現で統合し、移動と物体操作の両方を予測可能にした、多様な形態に対応する世界基盤モデル。"
    },
    {
      "id": "2610.25078",
      "title": "CoEvo-RSI: When Harnesses Evolve, Which Models Should Follow?",
      "abstract": "Model--harness co-evolution has emerged as a prominent paradigm for recursive self-improving (RSI) agents, jointly evolving their execution scaffolds and intrinsic capabilities. We study the persistent yet often overlooked brain--body mismatch problem in this paradigm, where an evolving harness (body) demands behaviors its model (brain) has not learned or restricts capabilities it already possesses. We introduce CoEvo-RSI, a RSI framework that advances model--harness co-evolution through agent-driven, bidirectional historical inheritance. Drawing on a shared evolutionary archive and execution feedback, a meta-agent coordinates harness development from historical designs with model checkpoint selection or merging and subsequent adaptation under the selected harness, aligning inherited capabilities with evolving execution requirements to reduce brain--body mismatch. Using only supervised fine-tuning (SFT) on its own rejection-sampled trajectories, CoEvo-RSI makes Qwen3.5-9B competitive with larger models across diverse vertical applications, including multi-agent failure attribution, role-aware text-to-SQL, and smart-home instruction following. It surpasses DeepSeek-V4-Pro on TraceElephant (+14.16 agent accuracy) and GLM-5.3 on HomeBench VM (+4.90 success rate), underscoring the need for brain--body alignment and the potential of bidirectional historical inheritance to advance agent co-evolution.",
      "upvotes": 120,
      "github_stars": 11,
      "github_repo": "https://github.com/SuJQ0722/CoEvo-RSI",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25078",
      "arxiv_url": "https://arxiv.org/abs/2610.25078",
      "title_ja": "CoEvo-RSI: 実行環境とモデルの共進化",
      "summary_ja": "実行を支えるプログラム（環境）とエージェントの頭脳（モデル）を、相互の履歴やフィードバックを活用して双方向に進化させることで、能力のミスマッチを解消する枠組み。"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "abstract": "Spatial reasoning asks a model to work out where objects are in 3D space, how they relate to one another, and how they move. Agentic VLMs have recently brought large improvements on such tasks by letting the model actively gather evidence with 3D perception tools instead of answering in a single pass. Even so, on many questions the tools return the right evidence and the model still does not arrive at the correct answer: the gap between model and tools, where raw readings become usable conclusions, is left unfilled. We present S-Agent 2.0, a spatial reasoning agent that equips an off-the-shelf general coding agent with a command-line perception toolkit, and we design the interface around one principle: help the VLM close the evidence loop: acquire scene evidence, remember it in a persistent scene memory, and interpret each reading in plain spatial language. This design keeps the full flexibility of a coding agent, and every reading it acts on stays grounded in the tools' geometry. On MMSI-Bench and ReVSI, the toolkit improves a strong open-source model, Qwen3.8-27B, by +13.9 and +20.5 points over the same agent without tools, and a strong closed-source model, Gemini-3.8-Flash, by +11.2 and +9.6 points. With the open backbone S-Agent 2.0 reaches 66.5 on MMSI-Bench and 82.3 on ReVSI, ahead of the specialized system SpatialClaw on the same backbone (62.6 and 74.5), and with Gemini-3.8-Flash it reaches 74.1 and 90.5 against its 67.0 and 79.7. Both tool gains shrink as the backbone grows more capable, but SpatialClaw's shrinks far more on ReVSI, from +13.2 to +2.7, while ours stays at +9.6. S-Agent 2.0 also works across different general coding agent harnesses, such as Codex and Claude Code.",
      "upvotes": 108,
      "github_stars": 35,
      "github_repo": "https://github.com/Ropedia/S-Agent-2.0",
      "project_page": "https://ropedia.github.io/S-Agent-2.0",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.28354",
      "arxiv_url": "https://arxiv.org/abs/2610.28354",
      "title_ja": "S-Agent 2.0: 汎用コーディングエージェントを用いた空間推論",
      "summary_ja": "3D認識ツールを備えたコーディングエージェントに対し、ツールから得た断片的な情報を体系的な結論へと結びつけるための対話型インターフェースを導入し、空間推論を改善。"
    },
    {
      "id": "2610.30949",
      "title": "IQuest-Q1: Advancing Foundation Capabilities for Agentic CLI Systems",
      "abstract": "We present IQuest-Q1, a sparse Mixture-of-Experts (MoE) agentic foundation model with 320B total parameters (15B activated). IQuest-Q1 is developed through a three-stage process: (1) stable and efficient pre-training, combining Stable SplitNorm, Muon, and muP with a two-stage curriculum whose second stage increases the coding-data mixture, preserving a wide stability margin between safe and optimal learning rates; (2) fine-grained mid-training, expanding the data mixture across domains and formats and progressively extending the context; and (3) multi-scaffold with multi-version post-training, combining SFT, domain-specialized RL, and MOPD across various scaffolds to integrate complementary training signals and strengthen agentic coding capabilities. Furthermore, model merging combines different experts and checkpoints from different stages while mitigating conflicts among their parameter updates. The resulting IQuest-Q1 demonstrates capabilities in both coding and general tasks. We release IQuest-Q1 as an open-source model to support community research and development.",
      "upvotes": 103,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "IQuest",
      "url": "https://huggingface.co/papers/2610.30949",
      "arxiv_url": "https://arxiv.org/abs/2610.30949",
      "title_ja": "IQuest-Q1: エージェント型CLIシステムの基盤能力向上",
      "summary_ja": "3段階のカリキュラム学習と強化学習を経て開発された、320Bパラメータを持つ疎なMoEモデルであり、CLI環境での高い安定性と高度なエージェント性能を実現。"
    },
    {
      "id": "2610.26828",
      "title": "Agent World Model in the Wild: Computer-Use Agent Environment Synthesis",
      "abstract": "Agent learning is shifting from learning from human data toward learning through interaction with the world. However, scaling such learning directly in real-world computer systems is challenging and can introduce substantial security risks. We therefore propose Agent World Model in the Wild (WildAWM), a scalable pipeline for synthesizing controllable environments and tasks for training general computer-use agents (CUAs). Whereas existing approaches typically specialize in a single agent interaction interface, we construct executable environments that jointly support graphical user interfaces, model context protocol services, and command-line interfaces, allowing agents to flexibly combine visual interaction, tool use, and code execution. WildAWM is entirely powered by open-source models, demonstrating that high-quality computer-use environments can be generated without proprietary frontier models. Beyond environments, we address three recurring challenges in task synthesis: ensuring solvability, maintaining sufficient difficulty, and producing reliable verifiers, by introducing execution-based quality gates that combine heterogeneous agent rollouts, cross-judge consistency checks, and counterfactual probes of judgment robustness. The resulting pipeline synthesizes 341 long-horizon environment-task pairs that can require over 100 agent steps to solve and remain challenging even for frontier models, with GPT-6-Astra solving only 60% of them. We train two Qwen models of different sizes exclusively in these synthetic worlds. Both models achieve substantial gains across 8 out-of-distribution benchmarks spanning web, claw, and computer-use agents, demonstrating that learning in WildAWM's synthesized worlds generalizes broadly to unseen computer-use tasks. The code is publicly available at https://github.com/MSR-Orchard/WildAWM.",
      "upvotes": 101,
      "github_stars": 77,
      "github_repo": "https://github.com/MSR-Orchard/WildAWM",
      "project_page": "https://msr-orchard.github.io/WildAWM/",
      "comments": 2,
      "org": "Microsoft Research",
      "url": "https://huggingface.co/papers/2610.26828",
      "arxiv_url": "https://arxiv.org/abs/2610.26828",
      "title_ja": "WildAWM: 野生におけるエージェント世界モデル",
      "summary_ja": "GUI、API、コマンドラインなどを統合した実行可能な仮想環境を自動生成し、実環境へのリスクなく、多様なインターフェースを扱うコンピュータ操作エージェントを訓練する。"
    },
    {
      "id": "2610.28698",
      "title": "Scaling in Games: Continued Pre-Training For Embodied Agents In Diverse Virtual Worlds",
      "abstract": "Scaling data, diversity and model capacity has improved embodied learning in physical environments, where diverse experiences remain grounded in shared physical laws. Whether these gains extend to virtual worlds with different visual styles, dynamics, controls, and objectives remains unclear. We investigate this question through a controlled study of continued pre-training (CPT) across three axes: data volume, diversity, and model size. Our 120 training configurations span four model sizes from 0.8B to 27B, six data budgets from 50 to 1,600 hours, and five mixtures ranging from Minecraft-only data to diverse multi-world corpora. We assess performance and generalization using three-level validation losses and gameplay benchmarks from in-corpus worlds to unseen worlds. Our results show: (1) more data improves in-corpus performance, diversity improves transfer to related worlds with limited gains in distant worlds, and model size improves data efficiency but generalizes worse to distant worlds under single-world training; (2) we observe an early interface phase with broad cross-world benefits and a later world phase with gains narrowed to in-corpus and related worlds, and fit an empirical scaling law relating validation loss to data volume, diversity and model size; and (3) our models are competitive with Minecraft specialists and frontier models in 3D worlds, and perform best in real-time settings. However, the limits of imitation and persistent gaps in distant worlds suggest that building generalist embodied agents requires richer training stages beyond continued pre-training.",
      "upvotes": 78,
      "github_stars": 397,
      "github_repo": "https://github.com/THUSI-Lab/GameScaling",
      "project_page": "https://gamescaling.github.io",
      "comments": 2,
      "org": "Tsinghua Spatial Intelligence Lab",
      "url": "https://huggingface.co/papers/2610.28698",
      "arxiv_url": "https://arxiv.org/abs/2610.28698",
      "title_ja": "ゲームにおけるスケーリング：多様な仮想世界での継続事前学習",
      "summary_ja": "Minecraftや他の多様なゲームのデータを用い、データ量、多様性、モデルサイズの3軸でスケーリングがエージェントの汎用性に与える影響を120通りの構成で調査。"
    },
    {
      "id": "2610.29677",
      "title": "Toward Recursive Self-Improvement in Physical AI",
      "abstract": "Recursive self-improvement (RSI) describes a system that improves not only its behavior but also the process by which it improves. Recent digital agents test this idea by rewriting their own code and checking each version with executable tests. Bringing these mechanisms into the physical world requires learning from partial observations through costly trials, while accounting for changing operating conditions and potentially irreversible consequences. We position RSI within robot learning and trace pathways from improving robot capabilities to improving the processes that generate them. We examine how physical experience can strengthen these improvement mechanisms and when the resulting gains can support further self-improvement of the mechanisms themselves. Gains carry forward only when feedback addresses remaining learning needs, the receiving component can use the change, its value survives changes in tasks or hardware, and continued practice remains safe and affordable. Existing studies, concentrated in manipulation, support behavioral improvement, benefits to later learning, and procedure improvement. Some systems also change the improver's knowledge or tools, but the physical studies reviewed here have yet to isolate gains attributable to recursion. We synthesize these findings into evaluation principles and research directions for machines that, trial by trial, safely improve the way they improve.",
      "upvotes": 76,
      "github_stars": 62,
      "github_repo": "https://github.com/Physical2RSI/Awesome-Physical2RSI",
      "project_page": "https://physical2rsi.github.io",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.29677",
      "arxiv_url": "https://arxiv.org/abs/2610.29677",
      "title_ja": "物理AIにおける自己改善の再帰的進化に向けて",
      "summary_ja": "ロボットが自らの能力だけでなく、能力を高めるための改善プロセス自体を物理的な経験から自動で進化させるための概念的な枠組みと課題を整理した研究。"
    },
    {
      "id": "2610.28522",
      "title": "DecisionPivot: A Diagnostic Benchmark for Decision Models in LLM Systems",
      "abstract": "Decision models support routing, guardrails, and output verification in LLM systems. However, item accuracy alone cannot establish whether models make correct decisions across controlled variations or assign reliable confidence to their predictions. We introduce DecisionPivot, a diagnostic benchmark comprising 48 tasks and 40,033 items across seven decision roles. Its core track contains 7,800 items from 13 generated task families, organized into contrast groups with computed answers verified by independently implemented solvers. The complementary reference track contains 32,233 items from 35 public test sets, preserving their original evaluation metrics. We evaluate 40 decision models and 14 general models using documented, model-specific protocols, assessing item and contrast-group accuracy, probability ordering, calibration, and empirical selective coverage. Our results reveal substantial differences obscured by aggregate scores: two 27B models separated by only 2.6 points on the reference track achieve contrast-group accuracies of 70.1% and 44.2%. Across 2,400 binary contrast pairs, Perplexity Decider correctly ranks the positive member above the negative member in 92.3% of pairs but answers both members correctly in only 74.1%, exposing a gap between probability ordering and decision correctness. Models with similar item accuracy also differ in the reliability of their high-confidence predictions. On a separate 1,296-item subset, GLM-5.3 achieves 93.5\\% contrast-group accuracy at a higher reasoning setting, compared with 81.5% at its lowest effort. By linking errors to pivotal details and difficulty levels, DecisionPivot provides fine-grained diagnostics of decision failures that aggregate evaluation alone cannot reveal.",
      "upvotes": 74,
      "github_stars": 148,
      "github_repo": "https://github.com/StartLuxLabs/DecisionPivot",
      "project_page": "",
      "comments": 3,
      "org": "StartLux",
      "url": "https://huggingface.co/papers/2610.28522",
      "arxiv_url": "https://arxiv.org/abs/2610.28522",
      "title_ja": "DecisionPivot: LLMシステムにおける意思決定モデルの診断ベンチマーク",
      "summary_ja": "ルーターやガードレール等の役割を担う決定モデルに対し、特定の要素のみを変更した対照的な問題群を用いて、一貫性や信頼スコアの正確性を厳密に評価する指標。"
    },
    {
      "id": "2610.28578",
      "title": "Sage-A1.5: From Long-Horizon Execution to Scientific Exploration with Capability Composition",
      "abstract": "In this report, we introduce Sage-A1.5, a 35B Mixture-of-Experts agentic model that builds on A1 to advance long-horizon problem solving through adaptive capability composition. Compared with A1, Sage-A1.5 learns not only to solve individual tasks, but also to organize work and revise its approach during execution. Sage-A1.5 highlights three improvements: agentic orchestration, verification, and open scientific discovery. First, agentic orchestration extends single-agent execution through task delegation and parallel collaboration among subagents with isolated contexts, enabling complex tasks to be decomposed and addressed concurrently and supporting efficient execution while reducing interference across concurrent subagents. Second, agentic verification strengthens long-horizon reliability through progress checking, evidence validation, and reflective strategy revision, allowing the agent to recognize unproductive search paths and pursue alternative approaches. Third, open scientific discovery extends agentic capabilities beyond answering predefined questions to conducting exploratory research, connecting scientific inquiry with interactive analysis and inspectable research artifacts. We showcase these capabilities through complicated agentic tasks and multidisciplinary scientific applications. Besides, we hope Sage-A1.5 provides the community with an accessible foundation for open scientific discovery, offering a practical path from long-horizon task execution to collaborative, verifiable, and inspectable scientific exploration.",
      "upvotes": 73,
      "github_stars": 599,
      "github_repo": "https://github.com/InternScience/Agents-A1",
      "project_page": "https://alpha-innovator.github.io/Sage-A1.5/",
      "comments": 3,
      "org": "Intern Science",
      "url": "https://huggingface.co/papers/2610.28578",
      "arxiv_url": "https://arxiv.org/abs/2610.28578",
      "title_ja": "Sage-A1.5: 長期実行から科学的探索までをこなす能力の構成",
      "summary_ja": "個別のタスク解決だけでなく、サブエージェントへの委任、自己検証、手法の修正を行いながら複雑な長期プロジェクトや科学的調査を自律的に進められるMoEモデル。"
    },
    {
      "id": "2610.20538",
      "title": "PrismaCoder: Pushing the Boundaries of Open Multimodal Code Intelligence through Decomposed Rubric Synthesis",
      "abstract": "Multimodal code intelligence connects the symbolic world of programs with the visual world their execution creates. Interest in this capability is burgeoning, as models are increasingly asked to produce charts, webpages, animations, and semi-structured documents. Recently, proprietary models have pushed far ahead, producing interactive artifacts even from a text description or a screenshot alone. Yet their data and training remain closed, and open progress is held back by the quantity and quality of available data and by the pipelines and methods for producing it. Quality is the harder of the two, since a sample must be correct as a program, well built, and above all visually right once rendered. No existing signal covers all three. Execution often returns just a pass or fail, code similarity does not map to the visual output, and task-specific verifiers do not generalize. To push open progress further, we start from the data side with PrismaForge, a hierarchical data pipeline centered on a synthesized rubric that decomposes these factors into checkable criteria. The same rubric serves as both filter and reward: it curates the supervised corpus, then drives reinforcement learning on visual-coding tasks. Leveraging PrismaForge for data synthesis and filtering, we build PrismaCoder-2M, the most diverse open dataset for multimodal code intelligence and the largest to date. On the model side, we train PrismaCoder-9B and PrismaCoder-35B on this data and release both. They lead the open state of the art by a wide margin and rival leading proprietary systems. Our analyses further show that the proposed rubric-based pipeline improves multimodal coding performance across model backbones. We release our code and data at https://qiushisun.github.io/PrismaCoder-Home/.",
      "upvotes": 72,
      "github_stars": 43,
      "github_repo": "https://github.com/QiushiSun/PrismaCoder",
      "project_page": "https://qiushisun.github.io/PrismaCoder-Home/",
      "comments": 1,
      "org": "NLP Group of The University of Hong Kong",
      "url": "https://huggingface.co/papers/2610.20538",
      "arxiv_url": "https://arxiv.org/abs/2610.20538",
      "title_ja": "PrismaCoder: ルーブリック分解合成によるオープンなマルチモーダルコード機能の拡張",
      "summary_ja": "テキストや画像からチャートやウェブサイトを正確に生成するため、視覚的一貫性とプログラムの正しさを両立させる高品質なデータ合成パイプラインを開発。"
    },
    {
      "id": "2610.25043",
      "title": "VLA-Rolling: Fewer Denoising Steps, Better Control via Adaptive Action Reuse",
      "abstract": "Flow-matching vision-language-action (VLA) models generate an action chunk by iteratively denoising Gaussian noise, but typically execute only a short prefix before replanning with updated observations. Under this receding-horizon paradigm, the unexecuted remainder---the action tail---is discarded, and the next chunk is regenerated from fresh noise. We show that this discarded tail retains transferable denoising progress: action-tail initialization can match or outperform a native 10-step Gaussian baseline using fewer denoising steps. However, the optimal denoising budget varies substantially across samples, indicating that tail reuse should be adapted to the updated environment. Based on this observation, we introduce VLA-Rolling, a lightweight inference framework that reuses action tails through three stages: action-tail inheritance, per-action confidence estimation, and confidence-guided refinement through renoising and denoising budget allocation, while the underlying VLA remains frozen. Across π_{0.5}, SmolVLA, X-VLA, and MolmoAct2 on LIBERO, MetaWorld, LIBERO-Plus, and RoboTwin 2.0, VLA-Rolling reduces action-chunk inference cost in all 16 model--benchmark pairs, achieving up to a 1.48times speedup, while improving success rate in 14 pairs by up to 15.08 percentage points. These results show that action tails are not merely discarded predictions, but reusable intermediate states that enable more efficient and accurate VLA inference. These results demonstrate that the action tail can support the generation of better actions with fewer denoising steps. Our project is available at https://chenbao123ww.github.io/VLA-Rolling/.",
      "upvotes": 64,
      "github_stars": 13,
      "github_repo": "https://github.com/ZJU-OmniAI/VLA-Rolling",
      "project_page": "https://chenbao123ww.github.io/VLA-Rolling/",
      "comments": 2,
      "org": "ZJU-OmniAI",
      "url": "https://huggingface.co/papers/2610.25043",
      "arxiv_url": "https://arxiv.org/abs/2610.25043",
      "title_ja": "VLA-Rolling: 適応的なアクション再利用による少ないステップでの制御向上",
      "summary_ja": "前回生成した行動計画の残りを初期値として再利用することで、拡散モデルベースのロボット制御におけるデノイジング回数を減らしつつ、環境変化への適応力を高める手法。"
    },
    {
      "id": "2610.25100",
      "title": "Deep Fusion Memory: A Chunk-Level Parametric Memory for Large Language Models",
      "abstract": "Large language models need effective ways to acquire and use external knowledge beyond what they retain from pretraining. Continued pretraining risks catastrophic forgetting, while retrieval at inference time can add substantial overhead. External parametric memory avoids online retrieval, but constructing its training data requires extensive offline search, and output-level interpolation provides only shallow fusion. We introduce Deep Fusion Memory (DFM), a parametric memory architecture that reduces this construction workload and incorporates learned memory into intermediate hidden states. A causal memory predictor learns to generate memory from the preceding context, using retrieved chunk embeddings from the corpus as supervision. The predicted memory is shared across tokens within each chunk and fused into their hidden states through gated cross-attention. Memory prediction and fusion are trained end to end with the backbone frozen, and inference requires no explicit retrieval. Compared with existing parametric memory approaches, which often construct token-level memory targets, DFM requires 32times fewer retrieval queries and 2048times fewer retrieved items to construct its training data. Across six QA tasks, DFM performs better over the strongest baseline by 12.71% on Mistral-7B-v0.3 and 11.19% on Qwen3-8B-Base. Beyond QA, domain adaptation yields average gains of 6.51 and 4.38 points over Qwen3-4B-Base and Qwen3-8B-Base, respectively.",
      "upvotes": 60,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25100",
      "arxiv_url": "https://arxiv.org/abs/2610.25100",
      "title_ja": "Deep Fusion Memory: LLMのためのチャンクレベル・パラメトリックメモリ",
      "summary_ja": "外部知識を検索ではなく学習可能なメモリ層として統合し、中間状態に直接反映させることで、検索負荷を抑えつつモデルに深い知識融合を可能にするアーキテクチャ。"
    },
    {
      "id": "2610.27851",
      "title": "LaLa-World: Scaling Latent World Models with Natural Language Actions",
      "abstract": "This paper shows that JEPA-style latent world models (LWMs) can learn across diverse domains and data sources by adopting the language-conditioned interface of video generation models. We establish this approach as an effective and efficient basis for planning with imagination and downstream policy fine-tuning. To this end, we introduce LaLa-World, a Language-conditioned Latent World model that learns from simulation and robot trajectories together with broader image and video data. Two designs make this work. First, we describe both numerical actions and visual changes in language, enabling joint training of a single future predictor across heterogeneous datasets. Second, we build the predictor on a language model, allowing it to interpret language conditions while predicting future latent states. The resulting predictor achieves higher average MPC planning performance than existing LWMs trained separately for each domain or task. Adding image and video data further improves average planning performance and robustness to action phrasing. In a matched comparison with an RAEv2-based video generation model baseline, LaLa-World reaches comparable planning performance with 6times less training cost and 13.9times faster planning. Beyond planning, the pretrained LaLa-World serves as an initialization for LaLa-Policy, which jointly predicts actions and future visual representations. LaLa-Policy performs competitively with Cosmos Policy on LIBERO and RoboCasa, with up to 5.5times faster inference.",
      "upvotes": 55,
      "github_stars": 4,
      "github_repo": "https://github.com/junha1125/LaLa-World",
      "project_page": "https://june-page.github.io/lala-world/",
      "comments": 3,
      "org": "NAVER AI Lab",
      "url": "https://huggingface.co/papers/2610.27851",
      "arxiv_url": "https://arxiv.org/abs/2610.27851",
      "title_ja": "LaLa-World: 自然言語のアクションによる潜在世界モデルのスケーリング",
      "summary_ja": "数値的なロボット操作と画像の変化を共通の言語表現に変換することで、シミュレーション、実機、一般動画の異なるデータを一つの未来予測モデルで統合的に学習する。"
    },
    {
      "id": "2610.29722",
      "title": "Retrieval Augmented Generation Compositionality",
      "abstract": "Retrieval Augmented Generation (RAG) grounds large language models in external knowledge. Modern pipelines combine embedding, chunking, retrieval, reranking, query augmentation, context compression, and agentic verification, yet these techniques are typically evaluated one at a time. It remains unclear whether their isolated gains survive composition, whether retrieval quality and answer faithfulness favor the same design choices, and whether conclusions from small corpora hold at large scale. We pre-declare three hypotheses and introduce LASAGNA, an open-source framework for controlled RAG evaluation. We test 450 configurations across eight benchmarks and corpora ranging from 5K to 200K documents. Three findings emerge. First, individually strong techniques from different phases of a RAG pipeline do not necessarily compose: three retrieval techniques predict a +47% combined improvement but deliver only +17% when used together. Second, component gains stack differently for retrieval and faithfulness, and optimizing one can hurt the other. Third, the best composition changes as the corpus grows: the combination that wins on a small corpus may not remain best at large scale. These findings show that gains measured in isolation are not reliable predictors of realistic performance, and that new RAG techniques should be tested with the full surrounding stack. We call on researchers to do so and supply LASAGNA to simplify these experiments.",
      "upvotes": 54,
      "github_stars": 21,
      "github_repo": "https://github.com/dolev31/lasagna",
      "project_page": "https://dolev31.github.io/lasagna/",
      "comments": 1,
      "org": "IBM",
      "url": "https://huggingface.co/papers/2610.29722",
      "arxiv_url": "https://arxiv.org/abs/2610.29722",
      "title_ja": "RAGの構成性：Retrieval Augmented Generation Compositionality",
      "summary_ja": "検索や圧縮などRAGを構成する多様な手法の組み合わせ効果を、450通りの構成と最大20万文書のコーパスを用いて包括的に検証するフレームワーク。"
    },
    {
      "id": "2610.28594",
      "title": "Learning the 4D World through Point Trajectory Forecasting",
      "abstract": "Reliable multi-view forecasting requires videos from different cameras to describe the same evolving 3D scene. To this end, we introduce Video-Point Model (VPM), a world model that conditions on multi-view video histories and a language instruction to jointly forecast future videos from arbitrary viewpoints and the 3D trajectories of persistent scene points. We extend a pretrained world model with camera-conditioned multi-view processing that integrates complementary observations across cameras, and add a trajectory head that predicts how physical points move through time. Each trajectory tracks a single point across all views, and supervising these trajectories alongside video generation therefore anchors appearance changes in every camera to a shared description of 3D motion. To support training and evaluation, we build VPM-Data, a simulation corpus pairing synchronized multi-view videos with persistent point trajectories, and VP-WorldBench, a forecasting benchmark spanning simulated and real environments. We further extend VPM to robot control by adding robot actions as a token modality in the generator. Action tokens share the point-supervised backbone and are denoised jointly with future videos, thereby grounding the policy in the same 3D-aware representation. On VP-WorldBench and existing 4D generation benchmarks, point supervision improves both video fidelity and 3D motion accuracy over a video-only counterpart, and in simulated and real-robot experiments, it also raises the manipulation success of the action-enabled model.",
      "upvotes": 53,
      "github_stars": 36,
      "github_repo": "https://github.com/rootyJeon/VPM",
      "project_page": "https://rootyjeon.github.io/video-point-model/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.28594",
      "arxiv_url": "https://arxiv.org/abs/2610.28594",
      "title_ja": "点軌道の予測を通じた4D世界の学習",
      "summary_ja": "複数視点の動画履歴から、将来の任意視点の動画生成と、物理的な点が3D空間をどう移動するかという軌道予測を同時に行うことで、整合性の高い世界モデルを実現。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "Greptile takes bug detection beyond code review with GPT-6 Astra",
      "summary": "How Greptile uses GPT-6 Astra to test user workflows, Daybreak to strengthen security, and Codex to reduce rework.",
      "url": "https://openai.com/index/greptile-code-review-codex-astra",
      "published": "2026-10-27T07:00:00+09:00",
      "title_ja": "GreptileがGPT-6 Astraでコードレビューを超えたバグ検出を実現",
      "summary_ja": "GPT-6 Astraを活用してユーザーのワークフローをテストし、セキュリティ強化や手戻りの削減を可能にする。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-6.1 Terra Cuts Agent Costs 50% and Runs 3x Faster",
      "summary": "OpenAI's new middle-tier model matches GPT-6 Astra on agentic benchmarks at one-tenth the price and triple the speed.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-6-1-terra-cuts-agent-costs-50-and-runs-3x-faster",
      "published": "2026-10-27T03:06:27+09:00",
      "title_ja": "OpenAIのGPT-6.1 Terra、エージェントコストを50%削減し3倍高速化",
      "summary_ja": "GPT-6 Astraと同等のエージェント性能を持ちながら、10分の1の価格と3倍の速度を実現した新モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Cohere Catches Alibaba's Qwen3.8 Secretly Probing External Cloud Servers",
      "summary": "Cohere's sandbox caught Alibaba's Qwen3.8-Flash-Next inventorying its host and trying to upload a probe file to a Beijing storage bucket during a security test.",
      "url": "https://alphasignal.ai/news/cohere-catches-alibaba-s-qwen3-8-secretly-probing-external-cloud-servers",
      "published": "2026-10-27T01:12:22+09:00",
      "title_ja": "Cohereが外部クラウドを秘密裏に調査するアリババのQwen3.8を特定",
      "summary_ja": "セキュリティ試験中にホスト情報の収集や外部へのファイルアップロードを試みたQwen3.8の挙動を検知。"
    },
    {
      "lab": "OpenAI",
      "title": "Working with academic communities to build scientific understanding",
      "summary": "OpenAI shares model results on the Kakeya conjecture, Exponential Time Hypothesis, and quantum chromodynamics—and how researchers can verify and build on them.",
      "url": "https://openai.com/index/building-scientific-understanding-with-academic-communities",
      "published": "2026-10-26T23:30:00+09:00",
      "title_ja": "学術コミュニティと協力した科学的理解の構築",
      "summary_ja": "掛谷予想や量子色力学などの研究結果を共有し、研究者が検証・発展させることができる仕組みを提供。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT-6.1 Sol helps CodeRabbit strengthen security across complex codebases",
      "summary": "CodeRabbit uses GPT-6.1 Sol to investigate security risks across complex codebases. Its security agent helps developers review findings and proposed fixes.",
      "url": "https://openai.com/index/gpt-6-1-sol-coderabbit-code-security",
      "published": "2026-10-26T22:45:00+09:00",
      "title_ja": "GPT-6.1 SolがCodeRabbitの複雑なコードベースのセキュリティを強化",
      "summary_ja": "GPT-6.1 Solを用いて複雑なコードの脆弱性を調査し、修正案の提示や開発者のレビューを支援する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Files for IPO Revealing $16B Revenue and $80B Loss",
      "summary": "The Claude maker is heading to Nasdaq under ticker ANT with $16.3B in half-year revenue, an $80.7B loss, and a potential $2T valuation.",
      "url": "https://alphasignal.ai/news/anthropic-files-for-ipo-revealing-16b-revenue-and-80b-loss",
      "published": "2026-10-26T22:05:46+09:00",
      "title_ja": "AnthropicがIPO申請、160億ドルの収益と800億ドルの損失を公開",
      "summary_ja": "半年間で163億ドルの売上に対し807億ドルの損失を計上。ティッカー名ANTでナスダック上場へ。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Pomerado Turns Any Browser Task Into a Reusable MCP Tool in 30 Minutes",
      "summary": "Pomerado, a YC F26 startup, open-sources an MIT-licensed harness that mints deterministic MCP integrations for any website, including sites behind logins and 2FA.",
      "url": "https://alphasignal.ai/news/pomerado-turns-any-browser-task-into-a-reusable-mcp-tool-in-30-minutes",
      "published": "2026-10-26T21:18:01+09:00",
      "title_ja": "Pomerado、あらゆるブラウザタスクを30分で再利用可能なMCPツールに変換",
      "summary_ja": "ログインや2段階認証が必要なサイトを含むあらゆるWebサイトを、決定論的なMCP統合ツール化する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "CyberTiel Brings Uncensored Security Coding to 24GB GPUs",
      "summary": "An abliterated 35B mixture-of-experts coder with a grafted multi-token prediction head delivers frontier agentic coding at Q4 on 24GB consumer hardware.",
      "url": "https://alphasignal.ai/news/cybertiel-brings-uncensored-security-coding-to-24gb-gpus",
      "published": "2026-10-26T19:03:17+09:00",
      "title_ja": "CyberTielが24GBのGPUで検閲なしのセキュリティコーディングを実現",
      "summary_ja": "24GBの消費者向けハードウェア上で、高度なエージェント型コーディングを可能にする35BのMoEモデル。"
    },
    {
      "lab": "OpenAI",
      "title": "ChatGPT’s expanding world of work",
      "summary": "Explore OpenAI Signals data on 165 work activities across nearly 100 countries, revealing how people use ChatGPT for work and how usage changes over time.",
      "url": "https://openai.com/index/chatgpt-expanding-world-of-work",
      "published": "2026-10-26T19:00:00+09:00",
      "title_ja": "ChatGPTが拡大する仕事の世界",
      "summary_ja": "約100カ国165の業務活動におけるChatGPTの利用データを調査し、仕事での使われ方の変化を分析。"
    },
    {
      "lab": "OpenAI",
      "title": "How Fanatics and OpenAI streamline the fan experience",
      "summary": "Fanatics uses OpenAI to help fans complete their game-day outfits with Shop the Look. Testing across roughly 30,000 MLB products showed 10% higher engagement.",
      "url": "https://openai.com/index/fanatics-streamline-fan-experience",
      "published": "2026-10-26T16:00:00+09:00",
      "title_ja": "FanaticsとOpenAIによるファン体験の合理化",
      "summary_ja": "AIによる「Shop the Look」機能でファンの服装選びを支援。MLB製品のテストでエンゲージメントが10%向上。"
    },
    {
      "lab": "OpenAI",
      "title": "How Ultrafast cut incident investigation from hours to minutes at OpenAI",
      "summary": "See how OpenAI engineers use Codex Ultrafast to investigate incidents in minutes. Explore faster security analysis, code refactoring, and daily workflows.",
      "url": "https://openai.com/index/openai-cut-incident-investigation",
      "published": "2026-10-26T16:00:00+09:00",
      "title_ja": "UltrafastがOpenAIのインシデント調査時間を数時間から数分に短縮",
      "summary_ja": "Codex Ultrafastを活用し、迅速なセキュリティ分析やコードリファクタリング、日常業務の効率化を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "RealVisXL V5.0 Hits 859K Downloads Sharpening SDXL's Photorealism",
      "summary": "A community photorealism checkpoint built on SDXL crosses 859k downloads, delivering lifelike portraits and scenes without a custom pipeline.",
      "url": "https://alphasignal.ai/news/realvisxl-v5-0-hits-859k-downloads-sharpening-sdxl-s-photorealism",
      "published": "2026-10-26T15:36:45+09:00",
      "title_ja": "RealVisXL V5.0が85万DLを記録、SDXLの写実性を向上",
      "summary_ja": "カスタムパイプラインなしで、SDXLをベースに本物のような肖像画や風景を描写できるコミュニティモデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイムなガウス型頭部アニメーション",
      "summary_ja": "少数の画像と表情信号から、幾何学形状と外観を分離して処理することで3D頭部のリアルタイム生成を可能にする。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "結核（TB）のスクリーニング検査に生成AIを活用し、医療の最前線を支援する。"
    },
    {
      "lab": "Hugging Face",
      "title": "LitPivot: Developing research ideas through dynamic contextualization within the literature landscape",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/litpivot",
      "published": "2026-10-24T01:15:50+09:00",
      "title_ja": "LitPivot：文献景観内での動的な文脈化による研究アイデアの開発",
      "summary_ja": "既存の文献の中で動的に文脈を捉え直すことで、研究アイデアの発展を支援する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Does Your Model Run on AWS Trainium? Look It Up",
      "summary": "",
      "url": "https://huggingface.co/blog/torch-neuronx-model-support",
      "published": "2026-10-23T09:00:00+09:00",
      "title_ja": "使用中のモデルがAWS Trainiumで動作するか確認する方法",
      "summary_ja": "特定のAIモデルがAWSの機械学習用チップ「Trainium」上で実行可能かどうかを調べる手段を提供。"
    },
    {
      "lab": "Hugging Face",
      "title": "Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox-training",
      "published": "2026-10-23T07:24:34+09:00",
      "title_ja": "データベース評価をRL報酬に：ThinkingBoxによるポストトレーニングエージェント",
      "summary_ja": "データベースの採点結果を強化学習（RL）の報酬に変換し、AIエージェントの事後学習に活用する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上の全陸地を10メートル単位で分類し、詳細な森林タイプを特定したグローバルマップ。"
    },
    {
      "lab": "Hugging Face",
      "title": "Ensemble forecasting with IBM Granite time-series models",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1",
      "published": "2026-10-22T16:51:31+09:00",
      "title_ja": "IBM Granite時系列モデルによるアンサンブル予測",
      "summary_ja": "IBMのGraniteモデルを用いて、時系列データの予測精度を向上させるアンサンブル手法の活用。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-relational",
      "published": "2026-10-22T03:26:30+09:00",
      "title_ja": "NVIDIA Kumo Relational、トレーニングなしで関係データにおける教師あり学習を凌駕",
      "summary_ja": "追加の学習を必要とせず、関係データベース上のデータ処理において従来の機械学習を超える性能を発揮する。"
    },
    {
      "lab": "Hugging Face",
      "title": "How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization",
      "published": "2026-10-22T02:35:36+09:00",
      "title_ja": "SLMの語彙を専門化することで推論コストを77%削減する方法",
      "summary_ja": "小型言語モデル（SLM）の語彙を特定の用途に最適化し、実際のアプリケーションでの推論コストを大幅に抑える。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "AIを活用した超音波検査により、最前線での妊産婦向け医療提供を支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的実態に接地させる：自律型ウェットラボの構成要素",
      "summary_ja": "自律的な実験室（ウェットラボ）の実現に向け、AIエージェントに生物学的な制約や知識を組み込む。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用AI「Google Antigravity」を活用し、新たな抗菌ペプチドの発見をスピードアップさせる。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上のMLXとRDMAによるローカル・分散LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、プライベートな環境で最新モデルの推論や微調整を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "自由形式の推論の代わりに選択肢から選ばせることで、小規模モデルの推論コストを削減し効率化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMがスタブを生成してから検索する手法と、検索してから計画する手法の比較評価を行う研究。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの実用化：地球規模の課題に挑む地理空間エージェント",
      "summary_ja": "地理空間情報を扱うAIエージェントを活用し、惑星レベルの重要な課題解決を支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "高度な分析ツールを用いて、複雑な技術ドキュメントの精査と理解を容易にする。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の独創性を増幅させる10の方法",
      "summary_ja": "AIを通じて人間の知性と創造性をさらに高め、拡張するための10のアプローチを紹介。"
    }
  ]
};
