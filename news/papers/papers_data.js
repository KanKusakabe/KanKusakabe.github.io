window.papersData = {
  "updated_at": "2026-11-05 11:03 JST",
  "arxiv": [
    {
      "id": "2611.00859",
      "title": "Wave Forcing: Towards Speed-of-Light Streaming Video Generation",
      "url": "https://arxiv.org/abs/2611.00859",
      "pdf": "https://arxiv.org/pdf/2611.00859",
      "authors": [
        "Yijie Jin",
        "Yuxuan Liu",
        "Jiajun Xu",
        "Ye Huang",
        "Chuzhi Wang",
        "Jiayang Li"
      ],
      "categories": [
        "cs.CV",
        "cs.DC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 109,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "achieve 1F1C: one output chunk per concurrent forward round after pipeline fill.",
      "signals": [
        "HF ▲109"
      ],
      "headline": "リアルタイム長時間動画生成を可能にするWave Forcingと並列実行ランタイム",
      "what": "動画生成におけるデノイジングの各段階を複数のモデルレプリカに分散し、先行チャンクの処理を待たずに次を開始するWave Forcing (WF) を提案しています。同時に、通信と計算をオーバーラップさせるWave Parallelism (WP) を備えたWaveRTを開発しました。",
      "enables": "8枚のH200 GPUで147.6 DiT FPSを達成し、既存のコンテキスト並列手法と比較して最大2.53倍のストリーミングスループットを実現しています。",
      "why_it_matters": "従来の逐次的な生成手法のボトルネックを解消し、品質を維持したままリアルタイムかつ安定した長時間動画生成を可能にするシステム設計を示しています。",
      "tags": [
        "動画生成",
        "並列計算",
        "リアルタイム"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02405",
      "title": "MirrorComm: A Communication-Efficient Cooperative Perception Framework via Mirrored World Models",
      "url": "https://arxiv.org/abs/2611.02405",
      "pdf": "https://arxiv.org/pdf/2611.02405",
      "authors": [
        "Shenghan Luo",
        "Yin Xu",
        "Cixiao Zhang",
        "Yang Wang",
        "Yujie Cao",
        "Zhuoran Xiao"
      ],
      "categories": [
        "eess.SP",
        "cs.CV"
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
        "new"
      ],
      "star_quote": "we propose MirrorComm, the first world model-based communication-efficient CP framework",
      "signals": [],
      "headline": "ワールドモデルにより通信量を大幅に削減する協調型認知フレームワーク",
      "what": "送信側と受信側に共通のワールドモデルを持たせ、過去の履歴から現在の観測を予測するMirrorCommを提案しています。予測と実際の観測の差分（エラー）のみを送信することで、冗長な情報の通信を抑制します。",
      "enables": "OPV2Vデータセットにおいて、既存のSOTA手法と同等の性能を維持しながら、通信帯域を最大約66分の1に削減することに成功しました。",
      "why_it_matters": "自動運転車間の通信など、帯域が制限された環境下での協調的な物体認識やセマンティックセグメンテーションの実現に寄与します。",
      "tags": [
        "自動運転",
        "協調学習",
        "ワールドモデル"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02779",
      "title": "Stop Handcrafting Your Engine! GenDB-V: Towards AI-Generated and Formally Verified Database Systems",
      "url": "https://arxiv.org/abs/2611.02779",
      "pdf": "https://arxiv.org/pdf/2611.02779",
      "authors": [
        "Jiale Lao",
        "Immanuel Trummer"
      ],
      "categories": [
        "cs.DB",
        "cs.AI",
        "cs.CL",
        "cs.LG"
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
      "star_quote": "GenDB-V achieves geometric-mean speedups of 22.0-61.3x over DuckDB and Umbra.",
      "signals": [],
      "headline": "ハードウェアとワークロードに最適化されたデータベースを自動生成・検証するGenDB-V",
      "what": "AIエージェントを用いて、特定のハードウェアやワークロードに特化したデータベースエンジンを自動合成するGenDB-Vを提案しています。SQLSpecによる定式化と形式手法（Formal Verification）により、合成されたコードの正しさを数学的に保証します。",
      "enables": "DuckDBやUmbraといった既存の高速なエンジンに対し、TPC-Hベンチマーク等で幾何平均22.0倍から61.3倍の高速化を達成しました。",
      "why_it_matters": "人間の手によるエンジンの設計ミス（バグ）を排除しつつ、性能を最大化する「AI生成・検証済みデータベース」という新しいパラダイムを提示しています。",
      "tags": [
        "データベース",
        "形式検証",
        "コード生成"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2610.40935",
      "title": "Let LiDAR Decide Where to Look: Geometry-Measured Token Selection for Efficient Sparse Latent World Models",
      "url": "https://arxiv.org/abs/2610.40935",
      "pdf": "https://arxiv.org/pdf/2610.40935",
      "authors": [
        "Zeping Zhang",
        "Zhuoya Zhao",
        "Robert Lagani\\`ere"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "GATS achieves a 3-sec L2 displacement error of 0.520 m on nuScenes and an EPDMS of 88.9 on NAVSIM---surpassing the dense baseline (0.573 m / 85.9)",
      "signals": [],
      "headline": "LiDARの幾何情報を活用して画像トークンを削減し、自動運転モデルを18倍高速化",
      "what": "Geometry-Aware Token Selection (GATS)は、画像バックボーンを動かす前にLiDARやレーダーの点群投影を用いて、走行に重要な画像トークンのみを選択する手法です。選択されたトークンは3Dアンカーと共にSelf-supervised Latent World Modelに入力され、将来の推論に使用されます。",
      "enables": "トークン予算25%で、高密度のベースラインより6.6倍少ないFLOPsで、nuScenesのL2変位誤差を0.520m（ベースライン0.573m）に改善しました。また、危険な車両の95.8%をカバーし、衝突率を0.34%から0.09%へと73.5%低減しました。",
      "why_it_matters": "従来の画像中心モデルが空や空き地などの不要な情報に計算を割いていた問題を、幾何計測に基づくトークン選択によって解決し、効率と性能の両立を実現しています。",
      "tags": [
        "自動運転",
        "効率化",
        "LiDAR"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41314",
      "title": "GenDSR: Transferring Representations from Video Generation Models for Dynamic Spatial Reasoning",
      "url": "https://arxiv.org/abs/2610.41314",
      "pdf": "https://arxiv.org/pdf/2610.41314",
      "authors": [
        "Ke Yang",
        "Zhenyu Zhang",
        "Jun Li"
      ],
      "categories": [
        "cs.CV",
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
        "new",
        "sota"
      ],
      "star_quote": "On DSR-Bench, GenDSR achieves 67.2%, surpassing the previous best result and establishing a new state of the art.",
      "signals": [],
      "headline": "動画生成モデルの表現をVLMに転送し、動的な空間推論能力を向上させるGenDSR",
      "what": "Video Generation Models (VGM)が持つ時系列的な一貫性をVision-Language Models (VLM)に転送するフレームワークです。全体的な生成コンテキストを保持するRawブランチと、時間的変化を強調するDeltaブランチを融合して視覚表現に注入します。",
      "enables": "DSR-Benchにおいて67.2%の精度を達成し、これまでの最高記録を上回るSOTA（State of the Art）を樹立しました。",
      "why_it_matters": "動画生成モデルが学習した豊かな時空間表現を、空間関係の推論という別の課題に活用できることを示した点が重要です。",
      "tags": [
        "動画生成",
        "マルチモーダルLLM",
        "空間推論"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.42018",
      "title": "Asynchronous Flow Map Language Models",
      "url": "https://arxiv.org/abs/2610.42018",
      "pdf": "https://arxiv.org/pdf/2610.42018",
      "authors": [
        "Chanhyuk Lee",
        "Wonjung Kim",
        "Patrick Pynadath",
        "Jaehoon Yoo",
        "Satoshi Hayakawa",
        "Ruqi Zhang"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code available at: https://github.com/david3684/async-fmlm",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "aFMLM establishes new state-of-the-art one-step performance.",
      "signals": [],
      "headline": "予測順序を学習に組み込むことで、1ステップでの並列生成を可能にする非同期フロー写像言語モデル",
      "what": "Asynchronous Flow Map Language Models (aFMLM)は、トークンごとのタイムスケジュールを通じて予測順序を1ステップのモデリングに組み込む手法です。非同期フローのフロー写像を蒸留することで、単一のフォワードパスで全トークンを生成します。",
      "enables": "数独の解法やGSM8Kの数学問題に対するコード生成において、1ステップ生成モデルとしてのSOTAを更新しました。",
      "why_it_matters": "自己回帰や拡散モデルのように複数ステップを要さず、内部計算に順序情報を内在化させることで高速かつ高品質な生成を実現しています。",
      "tags": [
        "言語モデル",
        "フローマッチング",
        "高速推論"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2611.03698",
      "title": "Training LLM Agents to Automate LLM Post-Training with RSI-Dojo",
      "url": "https://arxiv.org/abs/2611.03698",
      "pdf": "https://arxiv.org/pdf/2611.03698",
      "authors": [
        "Shuzheng Gao",
        "Zhaojian Yu",
        "Penghao Yin",
        "Yuling Shi",
        "Kai Cai",
        "Shilin He"
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
        "new"
      ],
      "star_quote": "The resulting RSI-Dojo-9B and RSI-Dojo-35B-A3B improve over their base models by 8.74 and 16.87 PostTrainBench points",
      "signals": [],
      "headline": "LLM自らがポストトレーニング工程を自動化・自己改善するための学習環境「RSI-Dojo」の構築",
      "what": "LLMエージェントにポストトレーニング（事後学習）の全工程を教えるための実行可能な学習環境群「RSI-Dojo」を提案しています。論文からデータ選択、モデル学習、失敗の診断、反復的な改善までの軌跡を自動生成するRSI-Craftパイプラインを開発し、281個のタスクを構築しました。",
      "enables": "Qwen3.5-35B-A3Bをベースとしたモデルは、PostTrainBenchで16.87ポイント向上し、GPT-4.5（GPT 5.5）やGLM-5.2に匹敵する29.95を記録しました。これにより、エージェントが自律的にベースモデルの性能を向上させることが可能になります。",
      "why_it_matters": "従来の研究はワークフローの最適化に留まっていましたが、本手法は「モデルを訓練する能力」そのものをモデル内部に取り込むことに成功しています。AIがAIを自律的に改善するRecursive Self-Improvement（RSI）の実現に向けた重要な一歩です。",
      "tags": [
        "LLM",
        "自己改善",
        "エージェント"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04122",
      "title": "ScrambleMark: Zero-Query Watermark-Agnostic Black-Box Evasion of Modern Speech Watermarking",
      "url": "https://arxiv.org/abs/2611.04122",
      "pdf": "https://arxiv.org/pdf/2611.04122",
      "authors": [
        "Binhao Ma",
        "Weikang Ding",
        "Hanqing Guo",
        "Wenwei Zhao",
        "Xiaowen Li",
        "Leah Ding"
      ],
      "categories": [
        "cs.CR",
        "cs.LG"
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
        "cap"
      ],
      "star_quote": "ScrambleMark, a zero-query, watermark-agnostic, black-box attack that evades detection through harmonic scrambling.",
      "signals": [],
      "headline": "音声の調波構造を撹乱することで検出を回避する透かし不可知な攻撃手法「ScrambleMark」",
      "what": "音声透かしを「除去」するのではなく、透かしパターンの構造的一貫性を「撹乱」することで検出を回避するブラックボックス攻撃手法です。調波構造を標的とした決定論的エンジンと、ランダムな撹乱パターンを学習する生成モデルを組み合わせています。",
      "enables": "Google SynthIDやResemble AIなど3つの商用プラットフォームに対し、約97%の回避率を達成しながら、5点満点中4.2の自然な音質を維持しました。適応的な復元処理に対しても耐性を示しています。",
      "why_it_matters": "クエリや検出器へのアクセスを必要としないゼロクエリ攻撃であり、既存の透かし除去手法よりも音質と回避性能の両面で優れていることを示しました。",
      "tags": [
        "音声処理",
        "セキュリティ",
        "透かし回避"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.00486",
      "title": "Integer-Exact Microscaling: Running MXFP4 Language Models on INT8 Matrix Units",
      "url": "https://arxiv.org/abs/2611.00486",
      "pdf": "https://arxiv.org/pdf/2611.00486",
      "authors": [
        "Shinyoung Kang",
        "Junhyung Ahn",
        "Yujun Kim",
        "Jungho Park"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 3 figures, 13 tables. Code: https://github.com/shinyoungkang1/mxfp4-int8-m5",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "prefill is 1.34-1.74x faster than MLX on a dense model",
      "signals": [],
      "headline": "MXFP4量子化モデルを汎用INT8演算ユニットで高効率に実行する手法",
      "what": "ブロック指数の広がりを制限することで、MXFP4形式の重みを1つのINT8ベクトルとスカラーの積として扱うInteger-Exact Microscalingを提案しています。これにより、専用ハードウェアがなくともINT8 GEMMのみで4ビット重みの線形層を実行可能にします。",
      "enables": "Apple M5 GPUなどの環境でMLXの実装と比較してプリフィルを最大1.74倍高速化し、Qwen3.8-Flash-Nextなどの大規模モデルにおいてFP8モデルに近い精度を維持しています。",
      "why_it_matters": "特殊な浮動小数点演算をサポートしない既存のハードウェア上でも、精度を損なうことなく最新の4ビット量子化モデルを高速に動作させる道を開いています。",
      "tags": [
        "量子化",
        "推論加速"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.00554",
      "title": "From Weeks to Hours: Fast and Principled SFT Data Generation for Reasoning LLMs",
      "url": "https://arxiv.org/abs/2611.00554",
      "pdf": "https://arxiv.org/pdf/2611.00554",
      "authors": [
        "Hongyi Henry Jin",
        "Wenhan Yang",
        "Meysam Ghaffari",
        "Carlos Morato",
        "Baharan Mirzasoleiman"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "7.5k generated examples outperforms it by 2.5% in accuracy.",
      "signals": [],
      "headline": "推論LLMのSFTデータ選別を数週間から数時間に短縮するSFTProbe",
      "what": "生成された推論トレースの質を直接予測するSFTProbeを提案しています。短時間のLoRA学習と推論トレースの5%の損失（loss）評価に基づき、幾何学的な視点からデータの難易度と多様性を推定します。",
      "enables": "データの選別時間を数週間から数時間に短縮しつつ、OpenThoughts-Mathの89kサンプルと同等の性能をわずか5kサンプルで達成しています。",
      "why_it_matters": "従来の高コストな「大量生成してLLMでフィルタリングする」手法を、モデルの損失曲面の特性を利用した効率的な手法へ置き換えるものです。",
      "tags": [
        "LLM",
        "データ選別",
        "推論能力"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01112",
      "title": "Auriga Technical Report: A Task-Agnostic Agent Harness for Zero-Shot Embodied Manipulation",
      "url": "https://arxiv.org/abs/2611.01112",
      "pdf": "https://arxiv.org/pdf/2611.01112",
      "authors": [
        "Chengcheng Wang",
        "Yuheng Shi",
        "Siyu Xu",
        "Yutong Wang",
        "Jinjing Zhao",
        "Chenghao Xia"
      ],
      "categories": [
        "cs.RO",
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
        "sota"
      ],
      "star_quote": "Auriga ranks first on the RoboDojo leaderboard with a 57.7% success rate",
      "signals": [],
      "headline": "ゼロショットのロボット操作における計画と実行の乖離を埋めるAuriga",
      "what": "Vision-Language Model (VLM) 用のタスク非依存なエージェント・ハーネスAurigaを提案しています。明示的なタスク信念（Task Belief）の管理、3D計測値に基づいたPythonプログラムの合成、実行中の自己修復機能などを備えています。",
      "enables": "RoboDojoベンチマークにおいて57.7%の成功率を記録し、既存手法（GPT-6 Astra）の2倍以上の性能を達成しつつ、学習済みポリシーよりも高い汎用性を示しました。",
      "why_it_matters": "高度な判断ができるLLM/VLMと、物理的な制約を持つロボット制御の間のギャップを、タスクに依存しない枠組みで解消しています。",
      "tags": [
        "ロボット",
        "VLM",
        "エージェント"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01207",
      "title": "A Batched Hartigan's $k$-Means Clustering",
      "url": "https://arxiv.org/abs/2611.01207",
      "pdf": "https://arxiv.org/pdf/2611.01207",
      "authors": [
        "Edward Raff",
        "Michael Slawinski"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "To appear in the 40th Conference on Neural Information Processing Systems (NeurIPS 2026)",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "enables vectorized calculation by exploiting the triangle inequality",
      "signals": [],
      "headline": "三角不等式を利用してHartigan's k-Meansをベクトル化した高速計算手法",
      "what": "標準的なLloyd's法よりも理論的に優れた性質を持つHartigan's k-means法を、バッチ処理可能にしたBatched Hartigan'sを提案しています。三角不等式を用いて並列更新が可能な集合を特定し、逐次処理のボトルネックを解消しています。",
      "enables": "Hartigan's法において、初めてLloyd's法と同等の実行速度を実現しました。",
      "why_it_matters": "収束性が高いものの低速だったHartigan's法を、実用的な速度で利用可能にすることで、クラスタリングの品質向上に寄与します。",
      "tags": [
        "機械学習",
        "アルゴリズム",
        "クラスタリング"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01283",
      "title": "DriftingPlanner: Drifting Generative Models for One-Step Trajectory Planning in End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.01283",
      "pdf": "https://arxiv.org/pdf/2611.01283",
      "authors": [
        "Ziming Liu",
        "Yizhan Qu",
        "Leichen Wang",
        "Hao Sun"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
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
        "sota"
      ],
      "star_quote": "On NAVSIM navtest, DriftingPlanner reaches a state-of-the-art 93.75 PDMS",
      "signals": [],
      "headline": "1ステップの推論で高精度な軌道計画を行うDriftingPlanner",
      "what": "拡散モデルなどの反復的な推論を必要とせず、1ステップで軌道生成を行うDrifting損失を用いたプランナーを提案しています。アンチセティック・ペアリング（antithetic pairing）により生成時の系統的な誤差をキャンセルする手法を導入しています。",
      "enables": "NAVSIMベンチマークで93.75 PDMSを達成し、10ステップの推論を必要とする拡散モデルやFlow Matching手法と同等の精度を1ステップで実現しました。",
      "why_it_matters": "自動運転の軌道計画において、分布のモデリング性能と推論速度のトレードオフを解消し、リアルタイム性を大幅に向上させています。",
      "tags": [
        "自動運転",
        "軌道計画",
        "生成モデル"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02688",
      "title": "Accelerating LLM Pretraining with Zeroth-Order Curvature on Idle Serving Compute",
      "url": "https://arxiv.org/abs/2611.02688",
      "pdf": "https://arxiv.org/pdf/2611.02688",
      "authors": [
        "Mingchuan Ma",
        "Dongqi Cai",
        "Daqian Yang",
        "Zhenyan Lu",
        "Chen Chen",
        "Teresa Lv"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "30 pages, 14 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "ZO-Curv, which leverages idle forward-only devices to estimate curvature and uses it to adapt",
      "signals": [],
      "headline": "推論用の余剰計算リソースを活用してLLMの事前学習を加速するZO-Curv",
      "what": "推論サーバーの空き時間を利用し、零次（Zeroth-Order）最適化によって損失曲面の曲率（Curvature）を推定し、一次勾配による学習を適応的に補正するZO-Curvを提案しています。勾配そのものではなく曲率を推定することで、パラメータ数が多い場合でも有効な情報を取り出します。",
      "enables": "770Mパラメータのモデルにおいて、AdamWが7.5時間かかる検証損失の達成を3.9時間に短縮し、かつ最終的な精度も改善しました。",
      "why_it_matters": "メモリやネットワーク制約で通常の分散学習が難しい推論用ハードウェアを、事前学習の加速に有効活用する新しいアプローチを提示しています。",
      "tags": [
        "LLM",
        "事前学習",
        "最適化"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.05036",
      "title": "ToolSpace: Scaling Tool-Centric Environment Synthesis for Long-Horizon Agents",
      "url": "https://arxiv.org/abs/2611.05036",
      "pdf": "https://arxiv.org/pdf/2611.05036",
      "authors": [
        "Guanting Dong",
        "Zhichao Sun",
        "Xinyu Yang",
        "Rui Wang",
        "Xin Deng",
        "Jiajie Jin"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Working in progress",
      "hf_upvotes": 34,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose ToolSpace, a tool-centric framework that reverses this order. ToolSpace mines data, state, and retry dependencies from adjacent calls in execution traces",
      "signals": [
        "HF ▲34"
      ],
      "headline": "ツール中心の環境合成により長期間実行エージェントの能力を向上させる「ToolSpace」",
      "what": "実際のMCP（Model Context Protocol）サービスの実行トレースから、ツールの依存関係グラフを抽出して学習環境を構築するフレームワークです。データ駆動ではなくツール駆動で環境を生成し、状態変化を伴うランダムウォークによってタスクと検証コードを自動生成します。",
      "enables": "Qwen3.6-35B-A3Bの長期間タスクにおける平均スコアを23.0から41.0（強化学習併用で43.2）へ大幅に引き上げ、GLM-5.2でもClaude Opusに匹敵する性能向上を実現しました。",
      "why_it_matters": "LLMの推測に頼らず実行に基づいた環境構築を行うことで、従来の手法よりも難易度が高く現実に即した学習データを大規模に生成できる点が特徴です。",
      "tags": [
        "LLMエージェント",
        "ツール利用",
        "合成データ"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.03503",
      "title": "A Cross-Domain Matrix Engine for Signal Processing and Deep Neural Net Inference",
      "url": "https://arxiv.org/abs/2611.03503",
      "pdf": "https://arxiv.org/pdf/2611.03503",
      "authors": [
        "Mehdi Safarpour"
      ],
      "categories": [
        "cs.AR",
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
        "new",
        "sota"
      ],
      "star_quote": "SCALE-Sim simulations shows up to 7.5x lower latency for small complex value PHY kernels.",
      "signals": [],
      "headline": "信号処理とDNN推論の両方を高速化する再構成可能な行列演算エンジン",
      "what": "シストリックアレイ（SA）とテンソルユニットの利点を融合した再構成可能な行列演算エンジンを提案しています。低コストな回路変更により、信号処理用の小規模行列とDNN用の大規模行列の双方に最適化された演算モードを切り替えます。",
      "enables": "信号処理（PHY）カーネルで最大7.5倍の低遅延化を達成し、DNNワークロードでも従来のSAに対して最大1.65倍の高速化を実現しました。",
      "why_it_matters": "従来は独立していた信号処理用プロセッサとAIアクセラレータを統合し、面積や電力のオーバーヘッドを抑えつつ多様な演算をサポートします。",
      "tags": [
        "コンピュータアーキテクチャ",
        "AIチップ",
        "信号処理"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2610.41548",
      "title": "Contact-based optimization for collision-free motion planning for a million robots",
      "url": "https://arxiv.org/abs/2610.41548",
      "pdf": "https://arxiv.org/pdf/2610.41548",
      "authors": [
        "Jan Kamm",
        "Antonio Terpin",
        "Raffaello D'Andrea"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY"
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
        "new"
      ],
      "star_quote": "Numerical experiments demonstrate planning for one million robots in minutes and thousands of robots in fractions of a second.",
      "signals": [],
      "headline": "ロボット同士の接触タイミングに着目した最適化により、100万台規模の衝突回避計画を分単位で実行",
      "what": "ロボット間の最小距離（接触）に焦点を当てて最適化を行うSequential Contact Insertion (SCI)アルゴリズムを提案しています。制約のない軌跡から開始し、衝突が発生する箇所に「接触」を挿入して、接触時間と状態を代数的に調整します。",
      "enables": "100万台のロボットの計画を数分で、数千台規模なら1秒未満で完了させることが可能です。既存の数値最適化手法（SCP）に対して、精度を維持したまま数桁の高速化を実現しました。",
      "why_it_matters": "軌跡全体を離散化して最適化する従来手法の計算コストを、接触という構造的特徴を利用することで劇的に削減した点が画期的です。",
      "tags": [
        "マルチエージェント",
        "ロボティクス",
        "最適化"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2611.04096",
      "title": "Online Hamilton-Jacobi Reachability Onboard the Robot Control Loop: A Real-Time GPU Solver for Safety-Critical Autonomy",
      "url": "https://arxiv.org/abs/2611.04096",
      "pdf": "https://arxiv.org/pdf/2611.04096",
      "authors": [
        "Kevin Weekly",
        "Alexandre M. Bayen"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 4 figures, 5 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "5.9-17.5x faster than the JAX reference hj_reachability at matched precision and 1.7-16x faster than a torch.compile reimplementation",
      "signals": [],
      "headline": "ロボットの制御ループ内でリアルタイムに動作する高速なハミルトン・ジャコビ到達可能性解析ソルバー",
      "what": "安全性保証に不可欠なハミルトン・ジャコビ（HJ）到達可能性解析を、CUDAを用いて実装したリアルタイムGPUソルバーです。WENO5やTVD-RK3などのスキームを最適化し、これまでオフライン計算が主流だった高次元の安全制御計算をロボット搭載デバイス上で実行可能にしました。",
      "enables": "RTX 4000 Ada上で4Dの追跡回避問題を61Hzで計算でき、JAXベースの参照実装より最大17.5倍高速化しました。Jetson AGX Thor上でも54Hz以上で動作し、エッジデバイスでの決定論的な安全層の提供を可能にします。",
      "why_it_matters": "ブラックボックス化しがちなニューラルネットワーク・ポリシーに対し、数学的な安全性を保証する層をリアルタイムで統合できるため、自律走行車やヒューマノイドの信頼性が向上します。",
      "tags": [
        "ロボティクス",
        "GPU高速化",
        "安全性保証"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04126",
      "title": "GlucoAgent: Personalized Glucose Forecasting from Multimodal Personal Context",
      "url": "https://arxiv.org/abs/2611.04126",
      "pdf": "https://arxiv.org/pdf/2611.04126",
      "authors": [
        "Xingzhi Sun",
        "Hyo Jin Kim",
        "Zhiyuan Wang",
        "Hao Chen"
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
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "GlucoAgent outperforms time series foundation models on every forecasting horizon, achieving an average RMSE of 22.5 mg/dL",
      "signals": [],
      "headline": "LLMエージェントによる動的なコード実行を用いたパーソナライズされた血糖値予測システム",
      "what": "持続血糖測定器（CGM）やスマートウォッチ、食事ログなどのマルチモーダルな個人コンテキストを活用するLLMベースのエージェントシステムです。推論時に症例ごとの分析コードを動的に生成・実行し、過去の類似症例の取得や生理学的モデルのフィッティングを行います。",
      "enables": "マルチモーダルデータセットCGMacrosにおいて、RMSE 22.5 mg/dLを達成し、既存の時系列ファウンデーションモデルChronos-2（23.5 mg/dL）を上回りました。特に食後60分の予測では、RMSEを4.6 mg/dL改善しています。",
      "why_it_matters": "個人や時間帯によってデータの重要度が異なるヘルスケア予測において、固定的なモデルよりもエージェントによる動的な推論が有効であることを証明しました。",
      "tags": [
        "LLMエージェント",
        "時系列予測",
        "ヘルスケア"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04147",
      "title": "AdSteer: Native Advertising in Large Language Model Generation",
      "url": "https://arxiv.org/abs/2611.04147",
      "pdf": "https://arxiv.org/pdf/2611.04147",
      "authors": [
        "Shuhang Lin",
        "Chuhao Zhou",
        "Zhenyu Wang",
        "Xiao Lin",
        "Changsheng Wang",
        "Saibo Geng"
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
        "new"
      ],
      "star_quote": "We propose AdSteer, a lightweight decoding-time advertising framework that adaptively adjusts token probabilities",
      "signals": [],
      "headline": "デコーディング時のトークン確率調整によるLLMへのネイティブ広告の自然な統合フレームワーク",
      "what": "LLMの生成プロセスにおいて、ユーザーの意図と広告主の内容を整合させながら広告を挿入するデコーディング時フレームワーク「AdSteer」を提案しています。プロンプトへの注入や書き換えを行わず、トークン確率を適応的に調整することで広告の影響を制御します。",
      "enables": "GEM-Benchにおいて、既存の最強のベースラインより総合スコアで平均14.1%向上し、書き換えベースの手法と比較してトークン数を平均22.5%削減しました。これにより、低コストかつ高品質な広告挿入が可能になります。",
      "why_it_matters": "LLMサービスの無料・低価格化を維持するための収益化手段として、計算コストを抑えつつ回答の質を損なわない実用的な広告統合手法を提示しています。",
      "tags": [
        "LLM",
        "自然言語生成",
        "デコーディング最適化"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04287",
      "title": "Predicting protein structures at any folding stage from sequence",
      "url": "https://arxiv.org/abs/2611.04287",
      "pdf": "https://arxiv.org/pdf/2611.04287",
      "authors": [
        "Lisheng Zhang",
        "Qingsong Li",
        "Zinan Xie",
        "Yanting Yang",
        "Qikui Yang",
        "Peng Lu"
      ],
      "categories": [
        "q-bio.BM",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages, 10 figures. The first five authors contributed equally",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "FoldScape extends sequence-based structure prediction beyond a single folded endpoint to controllable conformational-ensemble generation",
      "signals": [],
      "headline": "タンパク質の中間状態や展開状態を任意の折り畳み段階で予測可能な「FoldScape」",
      "what": "タンパク質のネイティブ構造だけでなく、折り畳みの進行度（Q値）を指定してコンフォメーション・アンサンブルを生成できるディープラーニングフレームワークです。階層的な距離回帰とRectified-flowデコーダーを組み合わせ、100万件以上のシミュレーション軌跡で学習されています。",
      "enables": "AlphaFold 3と比較して、慣性半径やネイティブ接触率などの空間カバー率において大幅な優位性（0.989対0.05など）を示しました。分子動力学シミュレーションなしで、折り畳み中間体や機械的展開の経路を予測可能です。",
      "why_it_matters": "単一の完成構造の予測を超え、タンパク質の動的なプロセス全体を制御可能な形で生成できるため、生物学的メカニズムの解明や創薬への貢献が期待されます。",
      "tags": [
        "タンパク質構造予測",
        "バイオインフォマティクス",
        "生成モデル"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04497",
      "title": "SKILL2STEER: One-Pass Hypernetwork for Mapping Natural-Language Skills to Low-Rank Post-Block Activation Shifts",
      "url": "https://arxiv.org/abs/2611.04497",
      "pdf": "https://arxiv.org/pdf/2611.04497",
      "authors": [
        "Ran Li",
        "Lei Chen"
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
        "new"
      ],
      "star_quote": "We then introduce SKILL2STEER, a one-pass hypernetwork that reads a skill document once and maps it to low-rank activation shifts",
      "signals": [],
      "headline": "自然言語のスキルを低ランクの活性化シフトへ一括変換する「SKILL2STEER」",
      "what": "エージェントに与える自然言語のスキル（指示文）を、モデルのデコーダーブロックへの低ランク活性化シフトとしてコンパイルするハイパーネットワーク手法です。スキル文章をプロンプトから排除し、パラメータの重み自体は固定したまま推論を制御します。",
      "enables": "SearchQAベンチマークにおいて、重み空間のアダプター手法よりも9.25倍少ないパラメータ数（1スキルあたり2.36M）で、ベースモデルを9.8ポイント上回る37.9点の正解率を達成しました。",
      "why_it_matters": "スキル文書のコンパイルが単なる情報の埋め込みではなく、ドメインに依存しない行動バイアスとして機能していることを実験で明らかにし、効率的なスキル配布と実行の新しい形式を提案しています。",
      "tags": [
        "LLM",
        "ハイパーネットワーク",
        "モデル制御"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.05372",
      "title": "PolicyIK: High-Precision Inverse Kinematics for Robot Arms with Reinforcement Learning",
      "url": "https://arxiv.org/abs/2611.05372",
      "pdf": "https://arxiv.org/pdf/2611.05372",
      "authors": [
        "Yuhan Liu",
        "Xinqi Liu",
        "Zixuan Dong",
        "Keith W. Ross",
        "Shenji Wan"
      ],
      "categories": [
        "cs.RO",
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
      "star_quote": "PolicyIK achieves higher reaching and holding success than all four classical IK controllers under the same time budgets.",
      "signals": [],
      "headline": "強化学習を用いてロボットアームの高精度な逆運動学（IK）を実現する「PolicyIK」",
      "what": "手動調整が必要な従来の数値解法に代わり、ゴール条件付き強化学習（PPO）を用いて逆運動学を解く手法です。2つのスケールのポーズ誤差と誤差依存のアクションゲインを導入し、物理ロボットでの直接学習も可能な設計になっています。",
      "enables": "シミュレーション環境で93.5%のタスクにおいて平均誤差1mm、0.2度未満の精度を達成し、物理アームの実験でも4つの古典的IKコントローラーすべてを上回る成功率を記録しました。また、VLAモデルであるπ0.5の実行でも95.7%の成功率を示しました。",
      "why_it_matters": "冗長性や特異点といったIK特有の課題を学習ベースで克服し、多様なハードウェアへの適応や高精度なタスク実行を容易にします。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "逆運動学"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04977",
      "title": "GeoFaham: Domain-Specialized Multi-Agent Geospatial Analytics for Disaster Response",
      "url": "https://arxiv.org/abs/2611.04977",
      "pdf": "https://arxiv.org/pdf/2611.04977",
      "authors": [
        "Muhammad Sohail Danish",
        "Gilles Q. Hacheme",
        "Akram Zaytar",
        "Satej S. Soman",
        "Inbal Becker-Reshef",
        "Juan Lavista Ferres"
      ],
      "categories": [
        "cs.MA",
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
      "star_quote": "GeoFaham achieves the best overall performance, scoring 0.940 versus the next-best 0.879, while using 7.5 times fewer tokens.",
      "signals": [],
      "headline": "災害対応のための地理空間分析に特化したマルチエージェントシステム「GeoFaham」",
      "what": "ベクトル演算、ラスタ解析、衛星画像探索などの専門エージェントをオーケストレーターが統括する地理空間分析システムです。LLMの文脈ウィンドウ外に大容量の地理空間データを保持するResponse Storeを備え、二重台帳方式の制御ループで計画の修正と検証を行います。",
      "enables": "GeoFaham-Benchにおいて、既存のコーディングエージェント（Claude Code等）を上回る0.940のスコアを達成し、かつトークン消費量を7.5分の1に削減しました。複雑なメタデータの維持や空間的な不整合といった失敗を回避します。",
      "why_it_matters": "単なるコード生成を超え、実世界の災害対応に必要な多段階の地理空間推論と大規模データの統合を自律的に行う実用的なフレームワークを提示しています。",
      "tags": [
        "マルチエージェント",
        "地理情報システム",
        "災害対応"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04389",
      "title": "Spin Spherical Fourier Neural Operators: Efficient Equivariant Learning for Vector and Spin Fields on the Sphere",
      "url": "https://arxiv.org/abs/2611.04389",
      "pdf": "https://arxiv.org/pdf/2611.04389",
      "authors": [
        "Kevin Mulder",
        "Matthew A. Price",
        "Eirini Leftaki",
        "Jason D. McEwen"
      ],
      "categories": [
        "cs.CV",
        "astro-ph.IM",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, 15 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We extend spherical Fourier neural operators (SFNOs) to fields of any spin, through lifted spherical convolutions that are exactly rotationally equivariant.",
      "signals": [],
      "headline": "球面上のベクトル・スピン場に対して等変性を持つ効率的なニューラルオペレータ「S2FNO」",
      "what": "風速や宇宙マイクロ波背景放射の偏光など、球面上のスピン場を扱うための等変ニューラルオペレータを提案しています。球面コンボリューションを回転群上の関数へ持ち上げる理論的枠組み（Mackey functions）を採用し、球面サンプリング定理を用いて効率的な計算を実現しました。",
      "enables": "回転等変性がマシン精度で保持されることを実証し、既存のベンチマークでSOTAを達成しました。特にスピンを考慮する必要がある物理データの解析において、従来のスカラーベースのモデルよりも高い性能を示します。",
      "why_it_matters": "物理学における重要な場の概念であるスピンを、幾何学的な対称性を保ったまま深層学習で扱えるようにし、気象予測や宇宙論などの科学計算の効率化に貢献します。",
      "tags": [
        "幾何学的深層学習",
        "物理学",
        "気象予測"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.05207",
      "title": "Multi-Objective Generative Optimization via Expected Hypervolume Fine-Tuning",
      "url": "https://arxiv.org/abs/2611.05207",
      "pdf": "https://arxiv.org/pdf/2611.05207",
      "authors": [
        "Juan Guevara",
        "Riccardo De Santi",
        "Andreas Krause",
        "Raul Astudillo"
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
        "new"
      ],
      "star_quote": "We introduce Hypervolume Fine-Tuning (HVFT), which adapts a single pretrained generator to maximize the expected hypervolume of its samples",
      "signals": [],
      "headline": "期待ハイパーボリュームを報酬とする多目的最適化による生成モデルのファインチューニング",
      "what": "拡散モデルやフローモデルなどの生成モデルを、複数の相反する特性（例：薬物の結合能と合成の容易さ）のトレードオフをカバーするように調整する「Hypervolume Fine-Tuning (HVFT)」を提案しています。候補の品質と多様な組み合わせの広がり（ハイパーボリューム）を直接報酬として使用します。",
      "enables": "期待ハイパーボリュームの変分が「追加的な寄与」に対応することを利用し、標準的な強化学習手法で最適化可能な形に分解しました。ペプチドや分子設計のタスクにおいて、トレードオフの網羅性でSOTAを達成しました。",
      "why_it_matters": "単一の指標を最大化するのではなく、実用的な選択肢のパレート境界全体を効率よく生成するようにモデルを誘導できるため、科学的発見を加速させます。",
      "tags": [
        "多目的最適化",
        "生成モデル",
        "創薬"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.00312",
      "title": "RaMMOBO: Random Max-Margin Multi-Objective Bayesian Optimization",
      "url": "https://arxiv.org/abs/2611.00312",
      "pdf": "https://arxiv.org/pdf/2611.00312",
      "authors": [
        "Thomas Wedenig",
        "Paul Plantosar",
        "Robert Peharz"
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
      "star_quote": "acquisition optimization up to two orders of magnitude faster than qLogNEHVI.",
      "signals": [],
      "headline": "多目的ベイズ最適化において、目的関数が増えても計算コストを抑えるRaMMOBO",
      "what": "多目的ベイズ最適化（MOBO）において、Hypervolumeの期待改善量（EHVI）の下限を計測するRaMMOBOを提案しています。目的関数空間の再重み付けを平均化することで、目的関数の数Mに対して計算コストが線形にスケールする獲得関数を実現しています。",
      "enables": "目的関数の数が多い問題でも効率的な最適化が可能になり、獲得関数の最適化において既存のqLogNEHVIよりも最大2桁の高速化を達成しています。",
      "why_it_matters": "従来のEHVIは目的関数が増えると計算コストが指数関数的に増大する課題がありましたが、本手法は勾配ベースの最適化をサポートしつつ、スケーラビリティの問題を解決しています。",
      "tags": [
        "ベイズ最適化",
        "多目的最適化"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.00588",
      "title": "TVP: TV is Almost All You Need for Speculative Decoding",
      "url": "https://arxiv.org/abs/2611.00588",
      "pdf": "https://arxiv.org/pdf/2611.00588",
      "authors": [
        "Aaryam Sharma"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 2 figures, 14 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "we derive TVP, a loss family based on expected acceptance length",
      "signals": [],
      "headline": "Total Variation距離を基に投機的デコードを加速する損失関数TVP",
      "what": "投機的デコードにおいて、ドラフトモデルの受容確率を直接最適化するためにTotal Variation (TV) 距離を用いた損失関数TVPを提案しています。期待受容長に基づく損失関数にパワーパラメータを導入し、学習時の勾配消失問題を解決しています。",
      "enables": "既存の学習手法（DFlash2など）と比較して受容長を6.2%から12.9%改善し、投機的デコード全体の効率を向上させています。",
      "why_it_matters": "これまでCross-EntropyやKLダイバージェンスが主流だったドラフトモデルの学習を、デコードの成功指標に直接結びついた形式に洗練させています。",
      "tags": [
        "LLM",
        "推論加速",
        "投機的デコード"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02255",
      "title": "Multiclass Classification with Rare Useful Features: Fundamental Limits and the Optimality of Diversity Pursuit Higher Criticism Thresholding",
      "url": "https://arxiv.org/abs/2611.02255",
      "pdf": "https://arxiv.org/pdf/2611.02255",
      "authors": [
        "Gabriel Moryoussef",
        "Alon Kipnis"
      ],
      "categories": [
        "stat.ML",
        "cs.LG",
        "math.ST",
        "stat.TH"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026. 43 pages, including references and supplementary material",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "we derive a new and strictly harder phase transition, driven by the growing degrees of freedom",
      "signals": [],
      "headline": "多クラス分類における稀な有用特徴量を特定するDP-HCT手法",
      "what": "高次元データにおいてごく一部の特徴量のみが分類に有効な「Rare-and-Weak」シナリオでの多クラス分類手法DP-HCTを提案しています。分散分析（ANOVA）等の検定から得られるp値に対してHigher Criticism閾値処理を適用し、特徴量を選別します。",
      "enables": "クラス数が増大する条件下での理論的な限界を特定し、従来のバイナリ分類手法よりも高い精度での特徴量抽出を可能にしました。",
      "why_it_matters": "バイオインフォマティクスなどの多次元・多クラス問題において、ノイズの中から本質的な変数を特定するための数学的な基盤と実用的な手法を提供しています。",
      "tags": [
        "統計的学習",
        "特徴量選択",
        "高次元データ"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02564",
      "title": "Central pivot point control of a body-attached spring-mass runner: periodic gaits, stabilization, template embedding and approximate analytic return maps",
      "url": "https://arxiv.org/abs/2611.02564",
      "pdf": "https://arxiv.org/pdf/2611.02564",
      "authors": [
        "\\.Izel Sever",
        "O. Kaan Karag\\\"oz",
        "M. Mert Ankaral{\\i}"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY",
        "math.DS",
        "physics.bio-ph"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages, 15 figures. Submitted to Chaos: An Interdisciplinary Journal of Nonlinear Science",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "decouples pitch exactly and reduces stance to a planar central-force problem.",
      "signals": [],
      "headline": "胴体を持つランニングロボットを解析的に制御するCentral Pivot Point法",
      "what": "ランニングロボットの重心（COM）と胴体の姿勢を切り離して制御するCentral Pivot Point (CPP) 法を提案しています。床反力を常に重心に向けるトルク則により、複雑な胴体モデルを単純なSLIPモデルと同様の解析可能な形式に変換します。",
      "enables": "胴体モデルにおいて初めて解析的なリターンマップを構築し、離陸速度や頂点位置を1%程度の誤差で予測することに成功しました。",
      "why_it_matters": "これまで数値計算に頼っていた複雑な脚式ロボットのダイナミクスを解析的な手法で扱えるようにし、安定したガイト（歩容）生成を容易にしています。",
      "tags": [
        "ロボット",
        "制御工学",
        "ダイナミクス"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.03142",
      "title": "DepthGraft: Structural Regularization through Hierarchical Cross-Layer KV Reconstruction",
      "url": "https://arxiv.org/abs/2611.03142",
      "pdf": "https://arxiv.org/pdf/2611.03142",
      "authors": [
        "Xiaohan Qin",
        "Xiangdong Zhang",
        "Yu Wang",
        "Huaijin Wu",
        "Zhuo Xia",
        "Yebin Yang"
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
        "new"
      ],
      "star_quote": "DepthGraft, a hierarchical KV-sharing architecture that reconstructs deep-layer KV",
      "signals": [],
      "headline": "KVキャッシュの共有構造により深層LLMの学習を正則化するDepthGraft",
      "what": "階層的なKV（Key-Value）共有アーキテクチャであるDepthGraftを提案しています。浅い層と中間層のペアから深い層のKVを再構成することで、計算・メモリ効率を高めつつ、深い層からソース層への直接的な勾配経路を形成します。",
      "enables": "KVキャッシュを約1/3削減しながら、16BのMoEモデルでMMLU-Proのスコアを7.0%向上させるなど、モデルの性能を改善しました。",
      "why_it_matters": "単なるキャッシュの圧縮技術を超えて、ネットワーク構造そのものを正則化し、層が深くなるにつれて情報が希釈されるPre-LNアーキテクチャの課題を解決しています。",
      "tags": [
        "LLM",
        "アーキテクチャ",
        "KVキャッシュ"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.00351",
      "title": "SIEVE: Preserving Cross-Image Evidence via Depth-Aware Token Compression",
      "url": "https://arxiv.org/abs/2611.00351",
      "pdf": "https://arxiv.org/pdf/2611.00351",
      "authors": [
        "Nitish Shukla",
        "Surgan Jandial",
        "Nhat-Tan Bui",
        "Arun Ross"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, including supplementary material. Code: https://github.com/nitishshukla86/SIEVE",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "outperforms the strongest baseline by 9.96 and 9.03 points at 6.25% and 12.5% budgets",
      "signals": [],
      "headline": "マルチイメージVLMのトークンを深度と重要度に応じて効率的に圧縮するSIEVE",
      "what": "視覚シーケンスのトークンをデコーダの深さに応じて段階的に削減するSIEVEを提案しています。画像ごとの割当枠を維持しながら、質問に関連の深いトークンを選択的に集約・維持します。",
      "enables": "LLaVA-OneVision-7Bにおいて、プリフィルの計算量を6.6倍削減しつつ、圧縮なしのモデルより高い平均精度を達成しました。",
      "why_it_matters": "大量の画像や動画を扱う際の計算コストを大幅に抑えつつ、特定画像の証拠が消失するのを防ぐことで、性能と効率を両立させています。",
      "tags": [
        "VLM",
        "トークン圧縮",
        "効率化"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.00374",
      "title": "Unlearning by Extrapolating a Shrink-and-Heal Lookahead",
      "url": "https://arxiv.org/abs/2611.00374",
      "pdf": "https://arxiv.org/pdf/2611.00374",
      "authors": [
        "Hoang-Chau Luong",
        "Lingwei Chen"
      ],
      "categories": [
        "cs.LG",
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
        "new"
      ],
      "star_quote": "this shrink-and-heal lookahead moves the model a fixed fraction of the way to the retrained model",
      "signals": [],
      "headline": "モデルの重みを縮小・回復させることで正確なアンラーニングを実現するSHIFT",
      "what": "LLMから特定の知識を削除するアンラーニングにおいて、事前学習状態への縮小（Shrink）と維持セットの再学習（Heal）を用いた外挿手法SHIFTを提案しています。これにより、理想的な「再学習済みモデル」の方向性を推定します。",
      "enables": "TOFUベンチマークにおいて既存の11手法を上回る精度を達成し、削除対象以外の知識の保持においても高い性能を示しました。",
      "why_it_matters": "従来の「尤度を下げる」だけの手法では制御が難しかったアンラーニングを、幾何学的なアプローチでより正確かつ安定したものにしています。",
      "tags": [
        "LLM",
        "アンラーニング",
        "安全性"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01115",
      "title": "CompSkill: Compiling Execution Experience for Skill Retrieval",
      "url": "https://arxiv.org/abs/2611.01115",
      "pdf": "https://arxiv.org/pdf/2611.01115",
      "authors": [
        "Qi Shen",
        "Ziyue Zhu",
        "Yongqing Jiang",
        "Zhen Xia",
        "Li Shengjie",
        "Shuai Zhao"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "33 pages. Code: https://github.com/satoshinji2992/CompSkill",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "compiles matched same-task comparisons into skill offsets and capped key residuals (KeyOpt)",
      "signals": [],
      "headline": "過去の実行経験をスキル索引にコンパイルして検索精度を高めるCompSkill",
      "what": "LLMエージェントが利用するスキルの検索において、過去の成功・失敗経験をベクトル空間上のオフセットとして蓄積するCompSkillを提案しています。スキルの説明文だけでなく、実際の実行結果に基づいた動的なランキングを可能にします。",
      "enables": "ToolQAタスクにおいて、既存の最強のベースラインよりも24件多くのタスクを完了し、検索の指標であるNDCG@10を大幅に改善しました。",
      "why_it_matters": "「説明は正しいが実行には向かない」スキルの回避など、静的な検索では不可能だったエージェントの継続的な改善を実現します。",
      "tags": [
        "LLM",
        "エージェント",
        "情報検索"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01143",
      "title": "GSLM2: Multi-Stream Speech Representation Learning and Generative Spoken Language Modeling",
      "url": "https://arxiv.org/abs/2611.01143",
      "pdf": "https://arxiv.org/pdf/2611.01143",
      "authors": [
        "Yosuke Higuchi",
        "Tom Fizycki",
        "Mahi Luthra",
        "Charles-\\'Eric Saint-James",
        "Azeez Syed",
        "Angel Villar-Corrales"
      ],
      "categories": [
        "cs.CL",
        "cs.SD",
        "eess.AS"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Equal contribution by Yosuke Higuchi and Tom Fizycki. Core contribution by Mahi Luthra, Charles-Éric Saint-James and Azeez Syed",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "shrink the gap by about two orders of magnitude on sWuggy, sBLIMP, and tSC",
      "signals": [],
      "headline": "多階層の離散ユニットを用いて音声の言語能力を高めるGSLM2",
      "what": "テキストを介さず音声のみから学習する言語モデルGSLM2を提案しています。複数の抽象レベルで離散ユニットを抽出するSpidR 2.0エンコーダと、これらをマルチストリームで処理するバックボーンにより構成されます。",
      "enables": "最大600万時間の音声データで学習し、sWuggyなどの言語ベンチマークにおいて、音声と言語モデルのギャップを2桁近く縮小しました。",
      "why_it_matters": "音声単体での学習効率を劇的に高めることで、テキストデータが乏しい言語への適用や、より自然な音声言語理解への道を開いています。",
      "tags": [
        "音声言語モデル",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01846",
      "title": "Z-Cache: Accelerating Diffusion Transformers via Self-Reflection",
      "url": "https://arxiv.org/abs/2611.01846",
      "pdf": "https://arxiv.org/pdf/2611.01846",
      "authors": [
        "Zegang Cheng",
        "Zhikai Wang",
        "Jiacheng Liu",
        "Xiaobing Tu",
        "Chang Zou",
        "Junjie Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 (poster)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Z-Cache is designed to first predict the features in the future caching steps",
      "signals": [],
      "headline": "自己修正（Self-Reflection）により拡散トランスフォーマーの推論を高速化するZ-Cache",
      "what": "Diffusion Transformer（DiT）の推論において、特徴量のキャッシュとその予測、および再計算による補正を行うZ-Cacheを提案しています。過去の計算ステップから将来の特徴を予測し、その後の全計算で誤差を修正します。",
      "enables": "FLUX-devによる画像生成において、生成品質を維持したまま6.22倍の高速化を達成しました。",
      "why_it_matters": "従来のキャッシュ手法で課題だった生成品質の低下を、自己修正メカニズムによって解決し、DiTの実用性を高めています。",
      "tags": [
        "画像生成",
        "DiT",
        "推論加速"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02550",
      "title": "Re$^3$Rank: Listwise Reranking with Reasoning-Conditioned Retrieval Heads",
      "url": "https://arxiv.org/abs/2611.02550",
      "pdf": "https://arxiv.org/pdf/2611.02550",
      "authors": [
        "Ruiyi Yan",
        "Zhuoyuan Mao",
        "Yugo Murawaki",
        "Yiwen Guo"
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
        "sota"
      ],
      "star_quote": "our 4B variant exceeds the strongest baseline by 3.11 NDCG@10 points on average",
      "signals": [],
      "headline": "推論トレースをクエリとして用いる高精度なリランキング手法Re3Rank",
      "what": "検索された候補文書を並べ替える際、生成器が書いた「推論トレース（reasoning trace）」をクエリとしてアテンションを行うRRHeadsを提案しています。ランキング損失を推論トレース経由で逆伝播させる学習手法を導入しています。",
      "enables": "9つのベンチマーク平均で11の既存手法を上回り、4Bパラメータのモデルで32B規模の既存リランカーを凌駕する性能を示しました。",
      "why_it_matters": "固定された質問文だけでなく、思考過程を検索の手掛かりにすることで、より文脈に即した証拠の発見を可能にします。",
      "tags": [
        "LLM",
        "リランキング",
        "RAG"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02710",
      "title": "MicroMouse: Masking Harmful Supervision in Long CoT via Relative Potential",
      "url": "https://arxiv.org/abs/2611.02710",
      "pdf": "https://arxiv.org/pdf/2611.02710",
      "authors": [
        "Xiaowei Zhu",
        "Hengzhu Tang",
        "Zhenyu Zhang",
        "Shuohuan Wang",
        "Yubing Ren",
        "Yanan Cao"
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
        "new"
      ],
      "star_quote": "we view a long CoT as a search trajectory from the input problem toward the target",
      "signals": [],
      "headline": "長い思考過程に含まれる「有害な指導」を自動でマスクするMicroMouse",
      "what": "長い思考連鎖（CoT）を迷路探索と見なし、各思考ステップが正解にどれだけ近づいたかを相対ポテンシャル（REP）で測定する手法を提案しています。REPが低下し続けた箇所を誤探索として特定し、SFT時の学習対象から外します。",
      "enables": "SFTの精度（Pass@1）を2.6%向上させつつ、平均出力長を8.8%短縮し、推論の効率化に成功しました。",
      "why_it_matters": "高品質なCoTデータを作成する際に混入する「無駄な試行錯誤」や「重複した思考」を、人間が介在せずに自動でクレンジングできます。",
      "tags": [
        "LLM",
        "CoT",
        "データクレンジング"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02846",
      "title": "SpecOPD: Branch-Parallel On-Policy Distillation for Speculative Decoding",
      "url": "https://arxiv.org/abs/2611.02846",
      "pdf": "https://arxiv.org/pdf/2611.02846",
      "authors": [
        "Tianyu Liu",
        "Jun Zhang",
        "Wenjie Huang",
        "Yuhao Shen",
        "Tianqi Xu",
        "Xinyue Hao"
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
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SpecOPD achieves up to 41.45% higher mean acceptance length",
      "signals": [],
      "headline": "ブランチ並列学習により投機的デコードを劇的に効率化するSpecOPD",
      "what": "投機的デコードのドラフトモデルを学習するための並列的なOn-Policy Distillation（OPD）フレームワークを提案しています。逐次的なロールアウトを待たずに、リファレンス上の各アンカーから並列にブランチを生成して教師信号を収集します。",
      "enables": "従来の逐次的OPDと比較して学習時のスループットを16倍以上に高め、受容長を最大41.45%改善しました。",
      "why_it_matters": "大規模モデルに対するドラフトモデルの学習コストを大幅に下げ、実用的な時間での高度な最適化を可能にします。",
      "tags": [
        "LLM",
        "推論加速",
        "蒸留"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02930",
      "title": "PointPilot: Unified Robotic Manipulation via Object-Centric 3D Point Flow Prediction",
      "url": "https://arxiv.org/abs/2611.02930",
      "pdf": "https://arxiv.org/pdf/2611.02930",
      "authors": [
        "Yihan Fang",
        "Yuxin Tian",
        "Ruixiang Wang",
        "Zhanqi Zhang",
        "Xing Hu",
        "Zhen Yang"
      ],
      "categories": [
        "cs.RO"
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
        "cap"
      ],
      "star_quote": "notably, we demonstrate zero-shot embodiment generalization with PointPilot.",
      "signals": [],
      "headline": "3D空間のポイントフロー予測により未知のロボットを操作するPointPilot",
      "what": "タスクに関連するオブジェクトの3Dポイントフロー（移動方向）を予測することで、ロボットの操作を行うフレームワークを提案しています。グローバルなシーン全体ではなく、タスクに集中した表現を用いることで、異なる形状のロボット（Embodiment）への汎用性を持たせています。",
      "enables": "追加のファインチューニングなしで、訓練中には見たことのないロボットに対してもゼロショットでタスクを実行することに成功しました。",
      "why_it_matters": "ロボットの種類やカメラ位置に依存しない、より一般的で物理空間に即した操作ポリシーの構築を可能にします。",
      "tags": [
        "ロボット",
        "3Dビジョン",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.03618",
      "title": "Strategist: Evolving Reasoning with Agents",
      "url": "https://arxiv.org/abs/2611.03618",
      "pdf": "https://arxiv.org/pdf/2611.03618",
      "authors": [
        "Taiming Lu",
        "Qi Xu",
        "Zhigang Hua",
        "Zhuang Liu"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Strategist, a meta-agent that evolves inference strategies across tasks",
      "signals": [],
      "headline": "タスクに応じた「推論戦略」を自動で進化・蓄積させるStrategist",
      "what": "LLMの推論プロセス（コード化されたブループリント）を自動生成、テスト、修正し、ライブラリとして蓄積していくメタエージェントを提案しています。新しいタスクに対して、過去に発見された有用な戦略を組み合わせて対応します。",
      "enables": "30のベンチマークにおいて24件で最強のベースラインを上回り、かつ推論コストを39%削減することに成功しました。",
      "why_it_matters": "人間が手書きしていた推論ロジックをAI自身が最適化し、さらにその経験を異なるタスクやモデルへ転移できる点に大きな意義があります。",
      "tags": [
        "LLM",
        "エージェント",
        "メタ学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02900",
      "title": "Control Foundation Models across Changing Block Diagrams: Generalizing Time-Series Prediction to Dynamic Graphs",
      "url": "https://arxiv.org/abs/2611.02900",
      "pdf": "https://arxiv.org/pdf/2611.02900",
      "authors": [
        "Yuji Okamoto",
        "Kenta Hoshino",
        "Masaki Inoue"
      ],
      "categories": [
        "eess.SY",
        "cs.LG",
        "cs.SY"
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
        "new"
      ],
      "star_quote": "We formulate a control foundation model that defines a data space of dynamic graphs",
      "signals": [],
      "headline": "動的なブロック線図を扱う制御用基盤モデルBlock Diagram Transformer",
      "what": "物理システムの制御データを動的グラフとして扱い、信号の値と接続構造を統一的にモデル化する手法を提案しています。事前学習済みの時系列基盤モデルを、ブロック線図の構造を考慮したグラフニューラルネットワーク（GNN）で拡張しています。",
      "enables": "実験データの接続条件が異なる場合でも、応答予測と制御入力生成を共通のマスク予測問題として解き、不安定な系の安定化に成功しました。",
      "why_it_matters": "従来の時系列モデルでは難しかった「システム構成の変更」を伴う制御タスクにおいて、基盤モデルの知識を直接活用できる道を開きました。",
      "tags": [
        "制御理論",
        "基盤モデル",
        "グラフニューラルネットワーク"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2610.41334",
      "title": "HIPC: Humanoid Iterative Planning and Control via Goal-Conditioned Motion Closure",
      "url": "https://arxiv.org/abs/2610.41334",
      "pdf": "https://arxiv.org/pdf/2610.41334",
      "authors": [
        "Yi Han",
        "Xingyu Chen",
        "Zixuan Lang",
        "Qianyang Wu",
        "Yuhang Lin",
        "Ji Ma"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Website: https://hipc-humanoid.github.io/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "HIPC achieves state-of-the-art goal-reaching accuracy among existing methods while simultaneously demonstrating robustness to physical perturbations and the ability to recover from falls.",
      "signals": [],
      "headline": "実時間での計画と制御を統合し、外乱に強く転倒から回復可能なヒューマノイド制御フレームワーク",
      "what": "生成モデルによる動作計画とモーション追従を統合したHumanoid Iterative Planning and Control (HIPC)を提案しています。偏差減衰リカバリや履歴の再アンカリングといった戦略により、物理的な実行状態をフィードバックする際の分布外（OOD）シフトを軽減します。",
      "enables": "極端な姿勢でのジンバルロックを回避し、物理的な摂動に対する堅牢性と転倒からの自己復帰能力を実証しました。",
      "why_it_matters": "オープンループな動作生成と制御の乖離を埋め、非同期的な実行における遅延補償も含めた実用的なクローズドループ制御を実現しています。",
      "tags": [
        "ヒューマノイド",
        "ロボット制御",
        "動作計画"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41446",
      "title": "Beyond Trial-and-Error: A Geospatial-Guided Active Reasoning Framework for Robust Aerial Vision-and-Language Navigation",
      "url": "https://arxiv.org/abs/2610.41446",
      "pdf": "https://arxiv.org/pdf/2610.41446",
      "authors": [
        "Jiawei Ge",
        "Wenkang Gong",
        "Jiuxin Cao",
        "Bo Liu",
        "Lei Cui",
        "Haoran Wang"
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
      "star_quote": "GeoReasoner sets a new SOTA among zero-shot Aerial VLN methods while competing favorably with supervised approaches.",
      "signals": [],
      "headline": "地理空間的な推論に基づき、ドローンの視覚言語ナビゲーションを試行錯誤から能動的探索へ改善",
      "what": "空中視覚言語ナビゲーション（VLN）のためのフレームワークGeoReasonerを提案しています。事前探索による地理空間推論で目標候補を絞り込み、仮説駆動型の探索と整合性ベースの検証を行うことで、視覚的に類似した障害物への誤認を防ぎます。",
      "enables": "CityNavベンチマークにおいて、ゼロショット手法としてSOTAを達成し、教師あり学習手法とも遜色ない性能を示しました。",
      "why_it_matters": "局所的な観察に基づく従来の反応的なアプローチから、安定した地理構造を活用する能動的な推論パラダイムへと転換した点が特徴です。",
      "tags": [
        "ドローン",
        "自律ナビゲーション",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41618",
      "title": "Attention Maps Know When to Think: Training-Free Difficulty-Aware Chain-of-Thought for Reasoning Segmentation",
      "url": "https://arxiv.org/abs/2610.41618",
      "pdf": "https://arxiv.org/pdf/2610.41618",
      "authors": [
        "Chanseul Cho",
        "Jaesung Jun",
        "Dongheon Lee",
        "Youngmin Ro"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to WACV 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "DA-CoT demonstrates its effectiveness by achieving state-of-the-art performance on the Reasoning Segmentation benchmarks",
      "signals": [],
      "headline": "注意マップのエントロピーで難易度を判定し、過剰なChain-of-Thoughtを抑制するDA-CoT",
      "what": "Difficulty-Aware Chain-of-Thought (DA-CoT)は、モデルの注意マップ（Attention Maps）のエントロピーを指標に、Chain-of-Thought (CoT)を適用すべき難易度かどうかを自動判断する手法です。エントロピーが低い場合は直接接地を行い、高い場合のみ思考プロセスをトリガーします。",
      "enables": "推論セグメンテーションにおいて、不要な思考（Overthinking）による精度低下を防ぎつつ、推論効率を大幅に向上させ、SOTAを達成しました。",
      "why_it_matters": "モデルを再学習することなく、注意マップという内部信号を用いて適応的に推論戦略を切り替えられる点が実用的です。",
      "tags": [
        "Chain-of-Thought",
        "セグメンテーション",
        "効率化"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.42136",
      "title": "ReLift: Dense 3D Tracking as Lifted Trajectory Repair",
      "url": "https://arxiv.org/abs/2610.42136",
      "pdf": "https://arxiv.org/pdf/2610.42136",
      "authors": [
        "Assaf Singer",
        "Maroun Khriesh",
        "Noam Rotstein",
        "Yoni Kasten",
        "Or Litany"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 22,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On WorldTrack, ReLift achieves state-of-the-art mean accuracy, improving on the strongest baselines by 2.1 APD on all points and 3.0 on dynamic points",
      "signals": [],
      "headline": "既存の2Dトラッカーと3D幾何モデルの出力を「修復」して高精度な3D追跡を実現するReLift",
      "what": "単眼ビデオからの高密度3D追跡を、幾何的な軌跡の修復および補完タスクとして再定義する手法です。Trajectory Correctorが注意機構を用いて、信頼できる観測を保持しながら、遮蔽（オクルージョン）による破損や欠損した動きを修正します。",
      "enables": "WorldTrackにおいて、動的な点に対して3.0 APDの改善を達成し、既存の3Dトラッカーを上回る精度と速度を両立しました。",
      "why_it_matters": "画像情報に依存せず幾何的な軌跡のみで学習するため、将来登場するより強力な2Dトラッカーや3D深度推定モデルと組み合わせて性能を向上させ続けられます。",
      "tags": [
        "3Dトラッキング",
        "コンピュータビジョン",
        "軌跡推定"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41720",
      "title": "UpLoop: Training Looped Transformers via Upcycling at No Extra Pretraining Compute",
      "url": "https://arxiv.org/abs/2610.41720",
      "pdf": "https://arxiv.org/pdf/2610.41720",
      "authors": [
        "Cheng Liang",
        "Tengfei Zhang",
        "Ya Zhang",
        "Yanfeng Wang",
        "Zhouhan Lin"
      ],
      "categories": [
        "cs.LG",
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
        "new"
      ],
      "star_quote": "UpLoop, a pretraining schedule that uses upcycling to train looped Transformers while exactly matching a standard dense baseline in final parameter count",
      "signals": [],
      "headline": "追加の計算コストなしに、既存モデルをアップサイクルして推論能力を高めるLooped Transformers",
      "what": "UpLoopは、標準的なTransformerを、重みを共有して繰り返し実行するLooped Transformerへと学習させるスケジュール手法です。学習初期は浅い層で計算量を節約し、後にその節約分を繰り返しの計算に充てることで、総FLOPsを一定に保ちます。",
      "enables": "1.3Bパラメータのモデルにおいて、22のダウンストリームタスクの平均スコアを22.99から27.52へと向上させ、数学的推論能力も改善しました。",
      "why_it_matters": "パラメータ数や学習トークン数を増やさずに、実行の深さを増やすことでモデルの性能を引き出せる効率的な学習戦略を提供しています。",
      "tags": [
        "Transformer",
        "効率的学習",
        "LLM"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2611.05275",
      "title": "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems",
      "url": "https://arxiv.org/abs/2611.05275",
      "pdf": "https://arxiv.org/pdf/2611.05275",
      "authors": [
        "Pengfei Zhou",
        "Yixing Ma",
        "Hexin Wang",
        "Weidong Tang",
        "Zhenglin Wan",
        "Wangbo Zhao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 86,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲86"
      ],
      "headline": "450以上のモデル・ツールを最適に使い分ける汎用AIのためのオムニモーダル・ルーティング",
      "what": "言語・画像・動画・音声・コード・ロボット操作の25のベンチマークを含む、37万件以上の実行データからなる大規模なルーティング行列を構築し、タスクごとに最適なモデルを選択するフレームワーク「Route Anything」を提案しています。品質と計算コストのトレードオフを理論化しました。",
      "enables": "学習されたルーターは、固定モデルの使用に比べて動画生成で2.1、ロボット操作で1.1ポイント性能を向上させ、参照モデルと比較して平均8.82倍の効率化（コスト削減）を実現しました。最適なオラクルルーティングでは5.4ポイントの向上が可能です。",
      "why_it_matters": "単一の巨大モデルですべてを解くのではなく、多様な専門モデルを動的にオーケストレーションすることがAGIへの有力な経路であることを示唆しています。",
      "tags": [
        "マルチモーダル",
        "モデルルーティング",
        "AGI"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04814",
      "title": "Think Less, Locally: Local Preference Learning for Reasoning Compression",
      "url": "https://arxiv.org/abs/2611.04814",
      "pdf": "https://arxiv.org/pdf/2611.04814",
      "authors": [
        "Muyao Yuan",
        "Liyan Xu",
        "Weizhan Zhang",
        "Muyan Jiao",
        "Jiangnan Li",
        "Jinchao Zhang"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 65,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲65"
      ],
      "headline": "「考えすぎ」を防ぎ推論コストを削減する局所的選好学習手法「LoCo」",
      "what": "推論モデル（Reasoning Model）がいつ思考を停止すべきかを学習させるための、局所的な選好学習手法です。モデル自身の推論過程から「過剰な思考」の箇所を特定し、より短い検証済み回答とのペアを用いてDPO（Direct Preference Optimization）で学習します。",
      "enables": "数学タスクで回答の長さを41.7%〜45.4%、コード生成で23.4%〜36.3%削減しながら、精度を維持または向上させました。数学データのみでの学習でもコード生成タスクに効果が転移することを確認しています。",
      "why_it_matters": "推論軌跡全体を短くするのではなく、各状態において「これ以上考える必要があるか」を判断させることで、推論の質を保ちつつ推論コスト（トークン数）を大幅に削減できます。",
      "tags": [
        "LLM",
        "推論効率化",
        "DPO"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.04916",
      "title": "Behind Video Generation: Observations and Insights on Multimodal Understanding from Kling",
      "url": "https://arxiv.org/abs/2611.04916",
      "pdf": "https://arxiv.org/pdf/2611.04916",
      "authors": [
        "Kling Team",
        "Dong Chen",
        "Jialu Chen",
        "Xinlong Chen",
        "Yifan Dai",
        "Haotian Dong"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 52,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲52"
      ],
      "headline": "動画生成モデル「Kling」の開発から得られたマルチモーダル理解と制御に関する知見",
      "what": "動画生成モデルKlingの開発過程で得られた、マルチモーダル理解のスタック（データ・アライメント・評価）に関する包括的なレポートです。Kling-MLLMを基礎とし、セマンティックな密度を最大化するキャプション生成、エージェントによるプロンプト強化、説明可能な報酬モデルなどの技術を詳述しています。",
      "enables": "ユーザーの意図を正確に捉えるプロンプト強化や、モデル学習前のテキストエンコーダーの事前評価、局所的な批判を行う報酬モデルなどの導入により、制御性の高い高品質な動画生成を可能にする設計指針を提示しました。",
      "why_it_matters": "単なるレンダリング技術ではなく、データから評価までの「理解の連鎖」が動画生成のボトルネックであることを示し、実用的な開発のベストプラクティスを共有しています。",
      "tags": [
        "動画生成",
        "マルチモーダル理解",
        "強化学習"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.05377",
      "title": "DreamX: Video Diffusion Model is a Universal Latent Action Learner",
      "url": "https://arxiv.org/abs/2611.05377",
      "pdf": "https://arxiv.org/pdf/2611.05377",
      "authors": [
        "Jisoo Kim",
        "Chaehyun Kim",
        "Junsu Kim",
        "Jiho Park",
        "Seongchan Kim",
        "Eunbeen Hong"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://cvlab-kaist.github.io/DreamX/",
      "hf_upvotes": 51,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲51"
      ],
      "headline": "動画拡散モデルを汎用的な潜在アクション学習器として活用する「DreamX」",
      "what": "学習済みの動画拡散モデルから、実施形態（人間やロボット）に依存しない共通の潜在アクション（Latent Action）を抽出する手法です。モデルの時空間特徴を300倍に圧縮し、外見から切り離されたアクション関連のダイナミクスのみを学習させます。",
      "enables": "LARY-BenchでSOTAを記録し、人間からロボット、あるいは異なる環境間でのゼロショット・アクション転送を可能にしました。また、圧縮された潜在空間でのポリシー学習により、計算コストの削減も実現しています。",
      "why_it_matters": "動画モデルの強力な事前知識を「アクション」の理解に転用することで、異なるロボット間でのスキル共有や動画からの模倣学習をより汎用的なものにします。",
      "tags": [
        "ロボティクス",
        "潜在表現学習",
        "動画拡散モデル"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.05193",
      "title": "Factorized MLLM Embeddings for Composed Image Retrieval",
      "url": "https://arxiv.org/abs/2611.05193",
      "pdf": "https://arxiv.org/pdf/2611.05193",
      "authors": [
        "WonJun Moon",
        "Seongchan Kim",
        "Dahun Kim",
        "Seungryong Kim"
      ],
      "categories": [
        "cs.CV",
        "cs.IR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://cvlab-kaist.github.io/FactEmbed/, Code: https://github.com/cvlab-kaist/FactEmbed",
      "hf_upvotes": 44,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲44"
      ],
      "headline": "MLLMの内部推論を因子化し、複雑な指示に基づく画像検索を高度化する「FactEmbed」",
      "what": "「参照画像＋修正指示」による画像検索（CIR）において、MLLMの内部で修正意図を複数の因子（Factorized latents）に分解して推論する手法です。ターゲット画像のイメージを中間目標として生成し、それを検索用エンベディングへ蒸留します。",
      "enables": "MLLMの深いアテンション層に分解された表現を統合することで、主要なCIRベンチマークで従来手法を上回る検索精度を達成しました。また、[EOS]トークンによる一括処理と再ランキングの組み合わせにより、効率的な推論が可能です。",
      "why_it_matters": "単に画像をベクトル化するのではなく、モデル内部で「何を変更すべきか」を明示的に推論させることで、複雑な指示に対する検索の頑健性を高めています。",
      "tags": [
        "画像検索",
        "MLLM",
        "マルチモーダル推論"
      ],
      "fetched_at": "2026-11-05T11:03:06.398174+09:00"
    },
    {
      "id": "2611.01860",
      "title": "Advances in Agentic Computer Graphics",
      "url": "https://arxiv.org/abs/2611.01860",
      "pdf": "https://arxiv.org/pdf/2611.01860",
      "authors": [
        "Hengyu Liu",
        "Jihyeon Je",
        "Ruiqi Wang",
        "Mingxuan Wu",
        "Haven Feng",
        "Qixing Huang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, 19 Figures",
      "hf_upvotes": 111,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲111"
      ],
      "headline": "コンピュータグラフィックスにおけるエージェントシステムの体系化と文献分析",
      "what": "LLMエージェントがCGコードを生成・修正する「Agentic Computer Graphics」という新領域について、統一的なタクソノミー（分類学）を提案しています。また、膨大な論文を大規模に分析するためのエージェント支援型文献システムを開発しました。",
      "enables": "複雑化するCGタスクとエージェント技術の接点を整理し、長期的な計画や人間との協調における課題を明確にしました。",
      "why_it_matters": "手動のプログラミングからエージェントによる自動化へと移行しつつあるCG分野において、研究の方向性と設計指針を提供しています。",
      "tags": [
        "コンピュータグラフィックス",
        "エージェント",
        "サーベイ"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.03126",
      "title": "CUA-Master: Scaling Computer-use Agents through Open-World Recursive Improvements",
      "url": "https://arxiv.org/abs/2611.03126",
      "pdf": "https://arxiv.org/pdf/2611.03126",
      "authors": [
        "Xinlei Yu",
        "Gen Li",
        "Ji Zhao",
        "Zhangquan Chen",
        "Congcong Wang",
        "Shuai Dong"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 93,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲93"
      ],
      "headline": "オープンワールドの再帰的改善により進化するPC操作エージェントCUA-Master",
      "what": "二重ループの再帰的改善フレームワークを用いたPC操作エージェント（CUA）を提案しています。ウェブ上の動画からタスクを抽出する「シード生成」と、モデル自身の弱点から学習データを動的に構築する「フライホイール」を組み合わせています。",
      "enables": "OSWorldベンチマーク等の複数の指標でSOTAを達成し、再帰的な反復学習によって性能が継続的に向上することを確認しました。",
      "why_it_matters": "静的なデータセットに依存せず、オープンワールドのデータから自律的にスキルを拡張し続けるエージェントの構築手法を示しています。",
      "tags": [
        "エージェント",
        "PC操作",
        "再帰的学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.03178",
      "title": "CoworkOS:Scaling Agent Coworkers for Real-world Automation",
      "url": "https://arxiv.org/abs/2611.03178",
      "pdf": "https://arxiv.org/pdf/2611.03178",
      "authors": [
        "Jiajie Jin",
        "Guanting Dong",
        "Chengjun Pan",
        "Xin Deng",
        "Zhuohui Sheng",
        "Guoqiang Wang"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "34 pages",
      "hf_upvotes": 89,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲89"
      ],
      "headline": "長期的な実務を自律的に管理・遂行するエージェント基盤CoworkOS",
      "what": "タスクの戦略決定と実行管理を分離した、長期タスク用の汎用ハーネスCoworkOSを提案しています。階層的なワークスペースと永続的なセマンティックメモリを備え、人間とAIが同じドキュメントや3Dモデルを直接編集しながら協調できます。",
      "enables": "Qwen3.6-35Bの自動ポストトレーニングを5回繰り返し、8つのベンチマーク平均スコアを33.19から42.95へと大幅に向上させました。",
      "why_it_matters": "単発のタスク解決ではなく、中断や再開、人間との深い協調を必要とする「実際の仕事」に耐えうるエージェントシステムの構造を定義しています。",
      "tags": [
        "エージェント",
        "人間・AI協調",
        "OS"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01560",
      "title": "Democratizing Robot-Use Agents: A Unified Harness with Open Models",
      "url": "https://arxiv.org/abs/2611.01560",
      "pdf": "https://arxiv.org/pdf/2611.01560",
      "authors": [
        "Jiarui Yuan",
        "Yuxin Zuo",
        "Xiaoyu Huang",
        "Wenbo Zhang",
        "Kwanyoung Park",
        "Junlin Yang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 42,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲42"
      ],
      "headline": "オープンモデルを用いたロボット操作エージェントの統合ハーネスuni-robot-agent",
      "what": "商用モデルに頼らず、オープンウェイトのモデルで高度なロボット操作を実現するための統合ハーネスを提案しています。特権的な入力（正解の3D座標等）なしで、Qwen3.8-Flash-Nextなどのモデルをロボット操作に使用可能にします。",
      "enables": "RoboDojoにおいて、商用のGPT-6 Astra（RoboProbe）を上回る31.39スコアをオープンモデルで達成しました。",
      "why_it_matters": "これまで高価なクローズドモデルが主導していたロボット操作エージェントの研究を、誰でも再学習・改善可能なオープンな環境へと民主化しています。",
      "tags": [
        "ロボット",
        "オープンソース",
        "LLM"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02074",
      "title": "SWE-Trail: History-Guided Trajectory Collection for Coding Agent Training",
      "url": "https://arxiv.org/abs/2611.02074",
      "pdf": "https://arxiv.org/pdf/2611.02074",
      "authors": [
        "Ziming Li",
        "Lu Yu",
        "Jiatan Huang",
        "Qing Cui",
        "Jun Zhou",
        "Chuxu Zhang"
      ],
      "categories": [
        "cs.AI",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Coding agents, Trajectory collection, Agent training data, History-guided exploration, SWE-bench",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "過去の試行履歴を活用して高品質なコーディング学習データを収集するSWE-Trail",
      "what": "コーディングエージェントの学習データ収集において、過去の試行履歴（軌道）を参照して次に注力すべき探索箇所を決定する手法を提案しています。エージェントの入力コンテキストには履歴を入れず、コレクター側で履歴を管理することで学習時の不整合を防ぎます。",
      "enables": "SWE-bench Multilingualにおいて、単純な独立サンプリングによる学習よりも解決率を2.33ポイント向上させました。",
      "why_it_matters": "エージェントの学習データを集める際、無駄な重複を避け、かつテスト時には得られない情報をカンニングさせずに効率的に学習させる戦略を示しています。",
      "tags": [
        "LLM",
        "コード生成",
        "データ収集"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02897",
      "title": "PhotoGuider: Composition-Aware Cropping and 360$^{\\circ}$ View Framing with Explainable Photographic Assessments",
      "url": "https://arxiv.org/abs/2611.02897",
      "pdf": "https://arxiv.org/pdf/2611.02897",
      "authors": [
        "Yuan-Kang Lee",
        "Kuan-Lin Chen",
        "Chia-Che Chang",
        "Yu-Lun Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 8 figures. Project page: https://ntuneillee.github.io/research/photoguider/",
      "hf_upvotes": 30,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲30"
      ],
      "headline": "360度パノラマから最適な構図を自動抽出・説明するPhotoGuider",
      "what": "360度シーンの中から最適な視点と構図を見つけ出すPhotoGuiderを提案しています。被写体、構図、美学、整合性の4つの指標を学習済みスコアラーで評価し、マルチモーダルLLMによってその構図の理由を説明します。",
      "enables": "標準的な画像クロッピングベンチマークで最高性能を達成し、人間による評価テストでも53.2%のケースで最適と判定されました。",
      "why_it_matters": "従来の「写っている範囲」を整えるクロッピングから、全天球空間から「価値ある1枚」を発見する高度な写真撮影支援へと進化させています。",
      "tags": [
        "コンピュータビジョン",
        "写真構成",
        "LLM"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.02102",
      "title": "NorthCUA Technical Report: Turbocharging Computer-Use Agents through Experience at Scale",
      "url": "https://arxiv.org/abs/2611.02102",
      "pdf": "https://arxiv.org/pdf/2611.02102",
      "authors": [
        "Chaoyun Zhang",
        "Bingxuan Li",
        "Pinxue Guo",
        "Yangfan Gao",
        "Zikun Cai",
        "Tianci Xie"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 30,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲30"
      ],
      "headline": "経験のフライホイールによりPC操作能力を飛躍させるNorthCUA",
      "what": "PC操作エージェントを大規模な経験から強化する統合システムNorthCUAを提案しています。タスクの自動生成、未解決タスクの自己改善、デスクトップとウェブを跨いだ強化学習を組み合わせた学習ループを構築しています。",
      "enables": "オープンソースモデルとしてGUI接地、デスクトップ実行、ウェブ対話の各項目でSOTAを達成し、より応答性の高い高速モデルも実現しました。",
      "why_it_matters": "エージェントが単一の操作だけでなく、複雑なソフトウェア作業を完遂するための「経験の蓄積と学習」のフルパイプラインを提供しています。",
      "tags": [
        "エージェント",
        "PC操作",
        "強化学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    },
    {
      "id": "2611.01878",
      "title": "Don't Guess, Ask Wisely: Benchmarking and Training Proactive Elicitation in Open-Domain LLM Conversations",
      "url": "https://arxiv.org/abs/2611.01878",
      "pdf": "https://arxiv.org/pdf/2611.01878",
      "authors": [
        "Rongyu Zhang",
        "Mutian Bao",
        "Jinjian Zhang",
        "Yuetian Du",
        "He Xu",
        "Wei Zhou"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "26 pages, 6 figures; EMNLP 2026 oral",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "不十分な指示に対して賢く問い返す能力を強化するDialogGRPO",
      "what": "ユーザーの曖昧な指示に対し、不足情報を特定して質問する（Proactive Elicitation）能力を訓練するDialogGRPOを提案しています。強化学習（RL）を用いて、質問による情報利得と将来の回答品質を報酬として最適化します。",
      "enables": "曖昧なクエリに対して88%以上の確率で適切な質問を行えるようになり、完全な指示を待たずに効率的な情報収集が可能になりました。",
      "why_it_matters": "LLMが当て推量で回答して失敗するのを防ぎ、対話を通じて必要な情報を能動的に引き出す「賢いアシスタント」としての能力を向上させます。",
      "tags": [
        "LLM",
        "対話システム",
        "強化学習"
      ],
      "fetched_at": "2026-11-04T10:59:18.005606+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.01860",
      "title": "Advances in Agentic Computer Graphics",
      "abstract": "Computer graphics is built on code. Large language model (LLM) agents can now generate graphics code and iteratively refine it through various feedback. This capability opens the door to a potentially new paradigm of computer graphics, with graphics algorithms increasingly built around agentic systems to automate progressively complex tasks. Over the past years, research on agentic graphics has expanded rapidly across a diverse range of tasks. This rapid growth makes it increasingly difficult for manual literature reviews to keep pace with new developments. At the same time, similar ideas are often described using different terminology across these tasks, further complicating efforts to develop a systematic understanding of the field. In this report, we address these challenges through two contributions. First, we introduce a unified taxonomy for characterizing agentic systems across diverse computer graphics tasks. Second, we develop an agentic literature system that can assist human researchers in analyzing existing and newly published papers at scale. Building on these contributions, we analyze emerging research trends and discuss open challenges in coordinating agents and tools across graphics tasks, designing interfaces and representations for human-agent collaboration, sustaining long-horizon planning and refinement, and reliably evaluating interactive graphics systems.",
      "upvotes": 133,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "University of Texas at Austin",
      "url": "https://huggingface.co/papers/2611.01860",
      "arxiv_url": "https://arxiv.org/abs/2611.01860",
      "title_ja": "エージェント・コンピュータグラフィックスの進展",
      "summary_ja": "LLMエージェントがグラフィックスコードの生成と反復修正を行いタスクを自動化する、CGの新たなパラダイムを提案する。"
    },
    {
      "id": "2611.00859",
      "title": "Wave Forcing: Towards Speed-of-Light Streaming Video Generation",
      "abstract": "Real-time long-video generation requires continuous output with consistent appearance and natural motion. Existing chunk-wise autoregressive methods face challenges in both generation efficiency and long-video quality: serialized denoising and history-cache refresh require two forward passes even with one-step denoising, and longer rollouts can degrade quality and cause camera drift. We propose Wave Forcing (WF), which co-designs generation, training, and execution for continuous video output with multi-step denoising. WF uses chunk-wise causal attention to access earlier, cleaner chunks before their denoising is complete, and distributes staggered denoising and cache-refresh stages across full-model replicas to achieve 1F1C: one output chunk per concurrent forward round after pipeline fill. To adapt the model to this continuous generation process, we develop a three-stage training procedure that successively introduces mixed-noise denoising, motion supervision, and causal adaptation using self-generated history. To execute this process efficiently, Wave Runtime (WaveRT) uses Wave Parallelism (WP) for early K/V delivery and communication-computation overlap, together with optimized kernels and pipelined VAE decoding. Experiments on Wan2.1-T2V-1.3B show that 5-step WF maintains overall quality comparable to Rolling Forcing while achieving higher Dynamic Degree on both short and long videos. Our system efficiency experiments show that 4-step WF achieves 147.6 DiT FPS and 134.8 end-to-end FPS on eight H200 GPUs, yielding 7.07x the single-GPU end-to-end throughput. In DiT-only tests with matched SageAttention+W8A8 backends, denoising steps, and GPU counts, WP delivers up to 2.53x the throughput of the faster of the Ulysses and Ring context-parallel baselines across six model scales (1.3B-14B).",
      "upvotes": 122,
      "github_stars": 115,
      "github_repo": "https://github.com/SJTU-DENG-Lab/WaveForcing",
      "project_page": "https://sjtu-deng-lab.github.io/WaveForcing/",
      "comments": 6,
      "org": "DENG Lab @ SJTU",
      "url": "https://huggingface.co/papers/2611.00859",
      "arxiv_url": "https://arxiv.org/abs/2611.00859",
      "title_ja": "Wave Forcing: 光速のストリーミングビデオ生成に向けて",
      "summary_ja": "多段階デノイジングとキャッシュ更新を分散・並列化することで、高品質な長尺動画をリアルタイムかつ一貫性を保ち生成する。"
    },
    {
      "id": "2610.36671",
      "title": "Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs",
      "abstract": "Diffusion vision-language models (DVLMs) process their entire input at every denoising step. Since visual tokens make up 89-97% of this input on the benchmarks we study, most of the decoding computation is spent repeatedly processing the same image. Visual token pruning methods partially relieve this burden by removing part of the visual tokens, but they lose the removed information and still process the remaining image at every step. To measure how often the image is actually needed, we compare LLaDA-V's predictions with and without the image at every decoding step and find that removing the image changes a token being unmasked at only 22.8% of steps on average and at as few as 7.9%. We therefore propose LOWN, a decoding method that decides at every step whether to process the image and how many tokens to unmask. LOWN predicts the masked tokens without the image and processes the image only when this prediction disagrees with the last image-conditioned prediction. Agreement certifies the earlier prediction for reuse, and the number of certified tokens sets how many are unmasked in that step. We further observe that the need for the image differs across benchmarks, so LOWN's adaptive decision is needed rather than a fixed schedule. Without training or a tuned threshold, LOWN retains 99.6% of LLaDA-V's score on ten benchmarks at 35.3% of the decoding FLOPs on average. LOWN also generalizes across LLaDA-based DVLMs, composes orthogonally with visual token pruning, and runs under key-value caching for further efficiency gains. Code and project page are available at https://hyeon9698.github.io/LOWN/",
      "upvotes": 115,
      "github_stars": 19,
      "github_repo": "https://github.com/hyeon9698/LOWN",
      "project_page": "https://hyeon9698.github.io/LOWN/",
      "comments": 3,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.36671",
      "arxiv_url": "https://arxiv.org/abs/2610.36671",
      "title_ja": "必要な時だけ見る：効率的な拡散VLMのための証明書ガイド付き視覚ルーティング",
      "summary_ja": "画像が必要なステップを動的に判断し、不要な計算を省くことで、情報の損失を抑えつつ拡散VLMsのデコードを大幅に高速化する。"
    },
    {
      "id": "2611.03178",
      "title": "CoworkOS:Scaling Agent Coworkers for Real-world Automation",
      "abstract": "Rapid advances in cowork agents are shifting human-AI collaboration toward real-world automation, delivering software, designs, and other artifacts. However, such productivity work demands both high-quality delivery on complex productivity tasks and continued monitoring and decision-making over long horizons, a combination that remains an open challenge. We introduce CoworkOS, a general-purpose harness for long-horizon work that separates task strategy from execution management: the model decides actions, delegation, and acceptance, while the runtime maintains state and feedback. Its three-layer architecture enables direct execution or delegation to Subagents, synchronously or asynchronously, under stable responsibilities. Through a shared application layer, humans and agents inspect and revise the same evolving documents, presentations, CAD models, and Blender scenes, so human-in-the-loop participation can enter both through conversation and through direct modification of the work itself. To sustain continuity across agents and sessions, CoworkOS further introduces hierarchical workspaces and persistent semantic memory, so working files, key decisions, and long-running Job logs remain shareable, reusable, and resumable after interruption. Across 12 benchmarks and 6 categories of real-world applications, CoworkOS proves highly competitive with frontier agent applications such as Codex and DeepSeek Harness. As a sustained-work case study, CoworkOS uses GLM-5.3 as its backbone to conduct RSI-driven automated post-training on Qwen3.6-35B-A3B. Over five rounds, the model's average score across eight benchmarks rose from 33.19 to 42.95 (+9.76). Looking ahead, we believe CoworkOS opens a meaningful path toward general cowork-agent intelligence.",
      "upvotes": 95,
      "github_stars": 116,
      "github_repo": "https://github.com/RUC-NLPIR/CoworkOS",
      "project_page": "https://coworkos-ai.github.io",
      "comments": 4,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.03178",
      "arxiv_url": "https://arxiv.org/abs/2611.03178",
      "title_ja": "CoworkOS：実世界の自動化に向けたエージェント共同作業者のスケーリング",
      "summary_ja": "タスク戦略と実行管理を分離し、サブエージェントへの委譲や状態管理を行うことで、複雑な実務タスクの長期実行を可能にする。"
    },
    {
      "id": "2611.05275",
      "title": "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems",
      "abstract": "Artificial general intelligence (AGI) requires a method that can understand, generate, reason, and act across diverse domains and modalities. Rather than relying on a single model to master every capability, a promising path toward AGI now is to orchestrate a heterogeneous ecosystem of specialized models, tools, and policies (candidates) into a unified AI system. At the heart of this vision lies a fundamental question: how can an AI system dynamically select and coordinate the most capable candidate for each task while balancing performance and computational cost? In this work, we present Route Anything, a unified framework for studying model and policy routing across general-purpose AI systems. We develop a unified theoretical foundation that characterizes optimal routing under quality--cost trade-offs and establishes how the information available to a router determines its attainable performance. To systematically investigate routing across diverse capabilities, we first construct an omni-modal trajectory matrix spanning 25 benchmarks across language understanding, image, video, and speech generation, coding and workplace agents, and robotic manipulation, comprising 374,401 scored runs from 452 candidate configurations. Building on this framework, we train and test different routers to investigate the potential of omni-modal model routing, the capabilities of learned routers, and the conditions under which routing improves efficiency. Our results reveal substantial opportunities for capability orchestration: per-input oracle routing outperforms the best fixed candidate by 5.4 points, and learned routers outperform it by 0.3 points across 16 benchmarks, by 2.1 points on video generation, and by 1.1 points on robot manipulation while using 24% less policy time. More importantly, routing raises efficiency by 8.82x on average compared with the reference model.",
      "upvotes": 86,
      "github_stars": 8,
      "github_repo": "https://github.com/InfRec-Cardinal/route-anything",
      "project_page": "https://mikeeeeeeeeeeeeee.github.io/RouteAnything",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.05275",
      "arxiv_url": "https://arxiv.org/abs/2611.05275",
      "title_ja": "Route Anything：汎用AIシステムにおけるモデルとポリシーのルーティング研究",
      "summary_ja": "多様な専門モデルやツールから最適な候補を動的に選択・調整し、性能と計算コストのバランスを最適化する統合枠組みを提案。"
    },
    {
      "id": "2611.03126",
      "title": "CUA-Master: Scaling Computer-use Agents through Open-World Recursive Improvements",
      "abstract": "Despite recent advances in CUAs, their development remains constrained by the limited diversity, controllability, and reliability of interaction data. Moreover, conventional optimization pipelines lack iterative feedback, while existing recursive improvement approaches often rely on self-generated experiences, limiting ability expansion and yielding diminishing returns. To address these challenges, we introduce CUA-Master, a nested double-loop recursive improvement framework. At the system level, an outer world-data-model flywheel continuously incorporates open-world corpus and leverages evolving model weaknesses to guide subsequent data construction and optimization iterations. At the data level, an inner flywheel couples open-world seeding and autocatalytic propagation. The former mines authentic workflows as seed tasks from instructional videos, and employs visual-semantic dual-path trajectory reconstruction; The latter transforms these seeds into reusable primitives for controllable synthesis of diverse, complex, and verifiable tasks. To enable efficient and reliable trajectory collection, we further introduce a feedback-guided snapshot-rollback retry mechanism in various real environments. Extensive experiments demonstrate that CUA-Master-27B achieves competitive performance across GUI-only and GUI-CLI hybrid benchmarks, scoring 80.2 on OSWorld Verified, 36.9 on OSWorld 2.0, 43.9 on WeaveBench, and 25.0 on Agents' Last Exam. Our framework also substantially improves the quality and efficiency of data synthesis, and exhibits continuous gains across recursive iterations.",
      "upvotes": 78,
      "github_stars": 98,
      "github_repo": "https://github.com/xlyu0106/CUA-Master",
      "project_page": "https://xlyu0106.github.io/CUA-Master/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03126",
      "arxiv_url": "https://arxiv.org/abs/2611.03126",
      "title_ja": "CUA-Master：開かれた世界での再帰的改善によるコンピュータ操作エージェントの拡張",
      "summary_ja": "外部世界のデータとモデルの弱点を活用した二重ループの再帰的改善により、多様で信頼性の高いコンピュータ操作データを構築する。"
    },
    {
      "id": "2610.39301",
      "title": "Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities",
      "abstract": "We present Youtu-Parsing-Omni, an omni-modal parser that converts documents, images, audio, and video into structured records grounded in space and time, providing a perception layer for agents that read, locate, and cite evidence across modalities. Its design rests on one encoder for every modality and one schema for every task. Youtu-Omni-Encoder, initialized from a pre-trained language model to strengthen text reading, encodes all modalities with shared weights in a unified space-time coordinate system, and a few fusion layers let video frames attend to concurrent audio, bringing cross-modal fusion and temporal alignment into perception itself. OmniSchema unifies the outputs of all ten parsing tasks, allowing a single self-evolving post-training procedure, OmniSchema-Aware On-Policy Distillation (OSAD), to provide a shared token-role-based objective across tasks. In each round, the model is trained on its own rollouts against token-level targets from a reference-conditioned copy of itself, which is then refreshed with the trained weights, so that the parser and its supervision co-evolve. With a single 5 B-parameter checkpoint, Youtu-Parsing-Omni achieves state-of-the-art performance on OmniDocBench v1.6 (96.96 Overall) and leads all open-weight models on OmniParsingBench (75.08 Avg.), with its advantage concentrated on audio and video. It also achieves the best overall chart-parsing score (95.02) and the highest exact chemical-fingerprint agreement among compared systems, and matches a dedicated optical-music model in character-level transcription of typeset sheet music while staying far ahead of general-purpose systems. Code and model weights are publicly available.",
      "upvotes": 76,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://github.com/TencentCloudADP/youtu-parsing/tree/main/youtu_parsing_omni",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.39301",
      "arxiv_url": "https://arxiv.org/abs/2610.39301",
      "title_ja": "Youtu-Parsing-Omni：一つのエンコーダ、一つのスキーマ、全モダリティ",
      "summary_ja": "文書、画像、音声、動画を、時空間座標が紐付いた構造化データへ単一のエンコーダとスキーマで変換する汎用パーサを提案。"
    },
    {
      "id": "2610.38568",
      "title": "A-RSI: Adaptive Task Refresh for Zero-Data Multimodal Self-Improvement",
      "abstract": "Recursive self-improvement requires models not only to acquire useful training experience, but also to decide when their current experience has ceased to be useful. Existing methods often focus on what experience to generate next, while paying less attention to when fresh experience should be introduced. Many also construct training targets through self-consistency or majority voting, making supervision depend on the model's own uncertain predictions. We address these two questions separately: training dynamics determine when to acquire new experience, while the answers to new tasks remain independently checkable. A-RSI monitors reward variation and accuracy in training logs to refresh a task pool when its learning signal declines, without consulting validation or test scores. A static library of model-authored programs produces multimodal questions and derives their reference answers; we specify the task-generation contract, automatically verify chosen properties of the reward and refresh rules, and separately audit the generated answers. The training loop uses no external training examples or human-written answer labels. On the primary eleven-benchmark suite, A-RSI raises the performance average from 57.77 to 61.05 with 800 fresh tasks.",
      "upvotes": 75,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://seerray-lab.github.io/A-RSI/",
      "comments": 4,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.38568",
      "arxiv_url": "https://arxiv.org/abs/2610.38568",
      "title_ja": "A-RSI：ゼロデータ・マルチモーダル自己改善のための適応的タスクリフレッシュ",
      "summary_ja": "訓練ログの報酬と精度を監視し、経験の有用性が低下した際に自動でタスクを更新することで、モデルの自己改善を効率化する。"
    },
    {
      "id": "2610.40191",
      "title": "Video Generation Meets Agent Harness: Agentic Video Generation, Agentic World Modeling and Recursive Self-Improvement",
      "abstract": "Video generation is shifting from end-to-end synthesis toward agentic generation, where planning, tool use, and feedback enable coherent, controllable multi-shot videos. In parallel, video world models provide action-conditioned observations and predicted futures, serving as interactive environments for agents. We study their intersection through the agent harness: an executable runtime that constructs context, exposes tools, maintains state, routes feedback, and manages budgets around video models. This report examines three directions. First, agentic video generation, where harnesses coordinate scripting, shot planning, asset management, production, and editing, alongside the evaluation challenges of these systems. Second, agentic world modeling, where harnesses mediate observation, control, execution, and state. We discuss hybrid designs in which game engines or agent-written programs maintain world state while video models render observations, and how agents and world models can mutually evaluate and improve one another. Third, recursive self-improvement (RSI) in video model development, distinguishing output revisions, updates to harness state, generator parameters, and evaluators, and changes to the improvement procedure itself. We identify how these improvements feed back into subsequent development. Across these directions, we analyze essential agent capabilities, including audiovisual perception, long-horizon planning, memory, code-based interaction, feedback-guided control, skill reuse, and multi-agent coordination. We conclude with challenges in autonomous video production, lifelong memory, programmable hybrid control, autonomous model development, provenance, cost accounting, and evaluation linking video quality and task performance to sustained improvements in models and harnesses.",
      "upvotes": 74,
      "github_stars": 50,
      "github_repo": "https://github.com/agentic-videogen/awesome-agentic-videogen",
      "project_page": "https://agentic-videogen.github.io/",
      "comments": 2,
      "org": "Video Rebirth",
      "url": "https://huggingface.co/papers/2610.40191",
      "arxiv_url": "https://arxiv.org/abs/2610.40191",
      "title_ja": "動画生成とエージェント・ハーネスの融合：エージェントによる動画生成、世界モデル、再帰的自己改善",
      "summary_ja": "実行環境（ハーネス）を通じて動画モデルの計画や編集を制御し、一貫性のある多ショット動画生成や世界モデル構築を実現する。"
    },
    {
      "id": "2610.39302",
      "title": "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
      "abstract": "Whether models trained on different modalities converge to the same representation of the world is central to AI. The Platonic Representation Hypothesis (PRH) conjectures that they do as they scale, but without a proof it offers neither a guarantee nor a recipe. We turn the hypothesis into a theorem. First, we prove a Platonic Representation Theorem: Joint-Embedding Predictive Architectures (JEPAs) trained separately on any number of modalities learn the same representation up to one rotation whenever their positive pairs are two observations of one scene--good views--and their misalignment is bounded otherwise. Second, we show that next-token prediction is a JEPA with bad views, parts of a single document, which explains why language models align with vision only through scale. Third, we validate the theory from 145k captions to the texts of 940M web images, and uncover a scaling law of alignment that predicts unseen runs within seed noise. Good views need 42 times fewer training samples than next-token prediction on the same corpus to reach the same alignment, and a 109M-parameter text JEPA aligns with DINOv2 and CLIP's image encoders better than every language model we evaluated, up to 72B parameters, and than CLIP's text encoder: next-token prediction is a remarkably inefficient route to platonic representations. As a showcase, one rotation turns separately trained encoders into an image captioner (CIDEr .838 on COCO). Even that rotation needs no pair: on the latest pair-free benchmark, our text JEPA beats every zero-shot accuracy reported with language models up to 8B parameters, e.g., 64\\% against at most 56\\% top-5 on ImageNet-100. Positive views, and not scale alone, are thus the lever to build platonic representations.",
      "upvotes": 73,
      "github_stars": 151,
      "github_repo": "https://github.com/galilai-group/prh-proof",
      "project_page": "https://github.com/galilai-group/prh-proof",
      "comments": 4,
      "org": "galilai-group",
      "url": "https://huggingface.co/papers/2610.39302",
      "arxiv_url": "https://arxiv.org/abs/2610.39302",
      "title_ja": "JEPAを用いたプラトン的表現仮説の証明と改善",
      "summary_ja": "異なるモダリティで訓練されたモデルが同一の表現に収束することを数学的に証明し、次トークン予測の限界と改善策を示す。"
    },
    {
      "id": "2611.00617",
      "title": "Words Caught in the Heart: Simulating Person-Specific Expression for Self-Opaque Clients in Psychotherapy",
      "abstract": "Psychotherapy clients may experience distress before they can coherently describe it, and their expression changes with emotion, perceived safety, and trust. Large language model-based client simulators often rely on clinically organized case descriptions, which can encourage responses explaining the client's difficulties more clearly than their current understanding warrants. We propose Pandora, a psychotherapy client simulation framework that models how psychological experience becomes situated, individual expression. Pandora updates psychological and relational states in response to therapist interventions, constructs subjective appraisals and attributions, and plans response content and strategy. A separate expression planner combines these decisions with language patterns distilled from the client's utterances to guide linguistic realization. We evaluate Pandora against five baselines on 115 cases from four counseling and motivational interviewing datasets. It achieves the highest expression similarity and overall disclosure-alignment score among the compared systems. In a four-evaluator study of 45 matched disclosure items, Pandora receives AI-like judgments in 7.2% of ratings, compared with 43.3--67.2% for the baselines and 35.6% without expression planning. The ablation also reduces expression similarity. These results support explicit expression planning in client simulation to improve alignment with individual language patterns and reduce perceived AI-like expression in the evaluated setting.",
      "upvotes": 69,
      "github_stars": 0,
      "github_repo": "https://github.com/whunextgen/Pandora",
      "project_page": "https://clain.org/Pandora/",
      "comments": 2,
      "org": "CLAIN-WHU",
      "url": "https://huggingface.co/papers/2611.00617",
      "arxiv_url": "https://arxiv.org/abs/2611.00617",
      "title_ja": "Pandora：心理療法における自己不透明なクライアントの個人特有の表現シミュレーション",
      "summary_ja": "クライアントの心理状態や治療者との関係性をモデル化し、感情や信頼度に応じて変化する主観的な反応を再現するフレームワーク。"
    },
    {
      "id": "2611.04814",
      "title": "Think Less, Locally: Local Preference Learning for Reasoning Compression",
      "abstract": "Large reasoning models achieve strong performance on challenging tasks, but their long chain-of-thought often incurs substantial inference costs by continuing to deliberate after sufficient information has been obtained. Existing reasoning compression methods primarily operate on reasoning trajectories, paying less attention to the local decision of whether further reasoning is necessary given the current state. We propose LoCo, a local preference learning method for reasoning compression. LoCo detects candidate overthinking states from the model's own traces, freezes the corresponding reasoning prefixes, regenerates shorter verified continuations from the same states, and trains on the resulting state-conditioned preference pairs with DPO. This formulation teaches the model when to continue reasoning and when to conclude, rather than simply encouraging shorter trajectories overall. We construct training data entirely from self-generated mathematical traces and evaluate LoCo on five mathematical and three code generation benchmarks. LoCo reduces completion length by 41.7\\%--45.4\\% on mathematics and 23.4\\%--36.3\\% on code, while maintaining or improving accuracy and achieving the best AUC across all code benchmarks. LoCo consistently improves the accuracy-efficiency trade-off on mathematics and transfers effectively to code generation despite math-only training, demonstrating the cross-domain generality of local preference learning for reasoning compression. The code and model will be publicly released at https://github.com/MuyaoYuan/LoCo.",
      "upvotes": 65,
      "github_stars": 6,
      "github_repo": "https://github.com/MuyaoYuan/LoCo",
      "project_page": "https://huggingface.co/MuyaoYuan/LoCo-7B",
      "comments": 7,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.04814",
      "arxiv_url": "https://arxiv.org/abs/2611.04814",
      "title_ja": "Think Less, Locally：推論圧縮のための局所的嗜好学習",
      "summary_ja": "推論の継続が必要かを局所的に判断し、過剰な思考を検出して短い継続回答を学習させることで、性能を維持しつつ推論コストを削減。"
    },
    {
      "id": "2611.02737",
      "title": "MoviEdit: Long-form Multi-Shot Video Editing Made Easy",
      "abstract": "Long-form multi-shot video editing requires an intended edit to remain coherent across abrupt changes in scene, viewpoint, and subject appearance, while processing substantially longer visual context than conventional single-shot editors. We introduce MoviEdit, an end-to-end framework for scalable long-form multi-shot video editing that jointly addresses the challenges of data, modeling, and evaluation. To provide cross-shot supervision data at scale, we develop automatic data-generation pipelines spanning synchronized multi-view footage, real-world multi-shot videos, and generated multi-shot content, yielding 87K paired editing videos without manual annotation. Architecturally, MoviEdit employs a cascaded bidirectional-autoregressive design: a lightweight bidirectional stage first establishes a globally coherent editing draft over a spatiotemporally compressed representation, which is then autoregressively propagated and refined over the full video. We further introduce MoviEdit-Bench, a dedicated benchmark for systematic evaluation of long-form multi-shot video editing. Extensive experiments show that MoviEdit substantially outperforms existing open-source models and performs on par with industry frontier models across text-guided and image-guided editing. Visit our project page for complete results and to access the benchmark: https://multi-shot-edit.github.io/",
      "upvotes": 63,
      "github_stars": 7,
      "github_repo": "https://github.com/adobe-research/MoviEdit-Bench",
      "project_page": "https://multi-shot-edit.github.io/",
      "comments": 2,
      "org": "Adobe",
      "url": "https://huggingface.co/papers/2611.02737",
      "arxiv_url": "https://arxiv.org/abs/2611.02737",
      "title_ja": "MoviEdit：長尺マルチショット動画編集の容易化",
      "summary_ja": "自動生成データと統合アーキテクチャにより、場面や視点が急変する長尺動画においても一貫性を保った編集を可能にする。"
    },
    {
      "id": "2610.39497",
      "title": "Does Scaling Toward AGI Depend on What System-1 Lets System-2 Execute?",
      "abstract": "Progress toward artificial general intelligence (AGI) has largely relied on scaling a resource-intensive executive, System-2, through larger models, more data and compute, longer reasoning, and more agents. We ask whether the next stage may come instead from co-designing it with System-1, a lightweight, semantically aware predictor that evaluates candidate interactions before execution, so that System-2 acts only on those worth their cost. Our answer is a qualified yes. We study conditional interaction, a predict--gate--execute--update loop: System-1 estimates each candidate's utility, System-2 executes those admitted by an adaptive threshold, and the outcomes update System-1. The loop spans training, test-time reasoning, adaptive decision-making, and agentic tool use, with utility and cost defined by the application. Under ideal screening and equal execution costs, execution compute falls by a factor approaching 1/ρ_u, where ρ_u is the density of utility-relevant interactions (cost-weighted when costs differ); prediction errors, exploration, and distribution shift reduce the saving. We bound selection regret by predictor error and the utility margin. These results motivate our central hypothesis: ρ_u is a measurable coordinate of scaling efficiency and makes informative compute a better description of scaling than total compute.",
      "upvotes": 62,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cheemswang.github.io/blogs/sys1-sys2-codesign.html",
      "comments": 3,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2610.39497",
      "arxiv_url": "https://arxiv.org/abs/2610.39497",
      "title_ja": "AGIへのスケーリングはSystem-1がSystem-2に何を決定させるかに依存するか？",
      "summary_ja": "軽量なSystem-1が実行の有用性を予測し、高コストなSystem-2の実行を制限することで、知能と効率の両立を図る手法を提案。"
    },
    {
      "id": "2611.04916",
      "title": "Behind Video Generation: Observations and Insights on Multimodal Understanding from Kling",
      "abstract": "Video generation has progressed from isolated clips to coherent short-form audiovisual sequences, and the bottleneck is shifting from rendering to semantic control. This report summarizes the observations and insights on multimodal understanding gained from successive generations of Kling. We argue that generation quality is the projection of multimodal understanding through the entire data--conditioning--alignment--evaluation chain, and we examine this chain module by module. Kling-MLLM, a shared multimodal foundation model that unifies image, video, audio, synchronized audio--video, and interleaved inputs, is specialized for each downstream module. Because a DiT is trained on far fewer training samples than a language model, we treat captioning as a semantic contract that maximizes description density, and extend it to reference-grounded captioning that makes reference bindings explicit. Prompt enhancement translates user intent into this caption distribution: basic PE is derived from captions of compelling videos and refined with text-level and generator-in-the-loop reinforcement learning, while agentic PE refines the story and retrieves compelling examples. We show that a reliable text encoder comes from perceptual training rather than from stronger language ability, and that candidates can be screened from text alone before end-to-end training. Reward modeling pairs a general reward model for explainable, localized critiques with a decision reward model for fast multidimensional scoring, treating perceptual bandwidth as a first-class design parameter. Finally, we review task-specific automatic evaluation, focusing on protocols that expose scoring shortcuts and help trace failures to their upstream source. We hope these lessons offer practical guidance for building the understanding stack behind controllable video generation.",
      "upvotes": 52,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://klingai.com/app",
      "comments": 2,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.04916",
      "arxiv_url": "https://arxiv.org/abs/2611.04916",
      "title_ja": "動画生成の裏側：Klingにおけるマルチモーダル理解の観察と洞察",
      "summary_ja": "動画生成の質をマルチモーダル理解の投影と捉え、データから評価までの全工程におけるKlingの知見と手法を解説する。"
    },
    {
      "id": "2611.05377",
      "title": "DreamX: Video Diffusion Model is a Universal Latent Action Learner",
      "abstract": "Learning a universal action representation from video requires modeling dynamics that are consistent across different executions of the same action yet invariant to changes in embodiment and appearance. Existing latent action models infer actions from visual transitions, but their representations often entangle the underlying action with irrelevant visual variations, limiting transfer across embodiments. We introduce DreamX, which repurposes a pretrained video diffusion model as a universal latent action learner. Our approach extracts compact latent actions from the video model's rich spatiotemporal features, compressing each latent video frame by 300times (1{,200 rightarrow 4} tokens). In addition, by leveraging the video model's generative prior, these latent actions capture action-relevant dynamics disentangled from visual appearance. The resulting latent space serves as a shared action interface across embodiments (human and robot), environments, and action parameterizations. On LARY-Bench, DreamX achieves state-of-the-art performance among latent action models. Moreover, actions encoded in one setting remain effective in another: the latent space supports any-to-any video transfer and zero-shot action transfer across diverse embodiments and environments. Furthermore, this shared interface also enables policy learning in a compact latent action space, reducing the computational cost of video-diffusion-based policies.",
      "upvotes": 51,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cvlab-kaist.github.io/DreamX/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05377",
      "arxiv_url": "https://arxiv.org/abs/2611.05377",
      "title_ja": "DreamX：動画拡散モデルは汎用的な潜在アクション学習器である",
      "summary_ja": "事前学習済み動画モデルの時空間特徴から、外見に依存しない行動表現を抽出し、多様なロボット形態へ転用可能なアクションを学ぶ。"
    },
    {
      "id": "2610.40614",
      "title": "L3G-World: Real-Time Infinite World Generation with Latent 3D Gaussian Memory",
      "abstract": "Interactive world models generate visual content conditioned on user actions, yet maintaining spatial consistency over long-horizon exploration in real time remains challenging. Existing approaches rely on either temporal context or explicit 3D memory, both of which scale poorly because memory grows with the length of the generated stream. Moreover, explicit 3D memories condition latent video generators by re-encoding RGB renderings, which precludes real-time generation. In this paper, we introduce a Latent 3D Gaussian Memory (L3G) that combines the efficiency of feed-forward reconstruction with a compact, rapidly renderable scene representation. Building on this memory, we propose L3G-World, in which a memory updater and a video diffusion transformer (DiT) alternate autoregressively to generate spatially consistent worlds. The memory updater spawns Gaussians in newly observed regions and refines existing ones, so that the memory grows with scene extent rather than stream length. Each Gaussian further stores a VAE latent feature, allowing the memory to be rendered directly into the DiT's latent space without VAE re-encoding. Experiments show that L3G-World achieves state-of-the-art generation quality and long-horizon spatial consistency, with up to 38.6times fewer 3D primitives, 3.2times faster memory updates, and 359times faster memory rendering relative to the most efficient prior 3D-memory baseline for each metric, enabling real-time world generation at 9 FPS.",
      "upvotes": 46,
      "github_stars": 69,
      "github_repo": "https://github.com/cvlab-kaist/L3G-World",
      "project_page": "https://cvlab-kaist.github.io/L3G-World/",
      "comments": 5,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.40614",
      "arxiv_url": "https://arxiv.org/abs/2610.40614",
      "title_ja": "L3G-World：潜在3Dガウスメモリによるリアルタイムな無限世界生成",
      "summary_ja": "効率的な潜在3Dガウス表現を用いることで、長期間の探索でも空間的な一貫性を保ちつつ、リアルタイムに視覚コンテンツを生成する。"
    },
    {
      "id": "2610.22740",
      "title": "R^2Orch: Recursive Self-Improvement for Agent Orchestration via Self-Play within a Skill-Internalization Loop",
      "abstract": "In recent years, agentic orchestration has been widely applied to solve complex human tasks. However, existing orchestration learning still faces key challenges, including hand-designed curricula, advantage collapse when a task's rollouts all reach the same outcome, and unreliable evaluation signals that judge each skill by one noisy score. To address these challenges, we propose R^2Orch, a new paradigm of Recursive Self-Play Orchestration: an inner loop of self-play that improves the orchestrator on self-chosen tasks, and an outer loop that improves how the inner loop improves. To support this paradigm, we introduce Recursive Learnability, a training objective that rewards a Proposer for choosing tasks whose rollouts keep reaching different outcomes as skills are withdrawn. Built on this objective, we further propose Skill Withdrawal, in which the outer loop withdraws each skill once a controlled evaluation within self-play shows that the orchestrator performs as well without it. Moreover, the two loops form one cycle: failures are distilled into skills, skills into parameters, and withdrawals lead the Proposer to new failures, so the orchestrator moves toward zero-skill deployment. Experimental results on twelve datasets show that R^2Orch consistently outperforms baselines across question answering, math, code, and interactive tasks. Our code is available at https://github.com/beita6969/R2Orch.",
      "upvotes": 45,
      "github_stars": 27,
      "github_repo": "https://github.com/beita6969/R2Orch",
      "project_page": "",
      "comments": 3,
      "org": "Chinese University of Hong Kong, Shenzhen",
      "url": "https://huggingface.co/papers/2610.22740",
      "arxiv_url": "https://arxiv.org/abs/2610.22740",
      "title_ja": "R^2Orch：スキル内部化ループ内での自己対戦によるエージェント統括の再帰的自己改善",
      "summary_ja": "自己対戦による内側ループと、改善の仕組み自体を磨く外側ループを組み合わせ、複雑なタスクを解くエージェントの調整能力を高める。"
    },
    {
      "id": "2611.05193",
      "title": "Factorized MLLM Embeddings for Composed Image Retrieval",
      "abstract": "Composed Image Retrieval (CIR) aims to retrieve a target image given a reference image and a modification text. Although recent approaches leveraging Multimodal Large Language Models (MLLMs) have shown significant progress, we argue that the MLLM's compositional understanding remains underutilized. This stems from directly mapping composed queries into a retrieval embedding via contrastive supervision alone, without explicitly resolving the intended visual modifications. In this work, we introduce Factorized MLLM Embeddings (FactEmbed), which decouples compositional query comprehension from building discriminative embeddings. Rather than directly projecting the composed query into a single embedding without internal reasoning, FactEmbed employs a set of factorized latents that simulate the intended visual modifications via an intermediate target imagination objective. This process encourages the latents to ground into target semantics before forming discriminative representations for retrieval. Subsequently, to propagate these factorized representations throughout the model for retrieval, we optimize a factor-level contrastive loss while distilling the decomposed representations into a deeper attention layer of the MLLM. Finally, for efficient inference, we retain the [EOS] token to establish a global-level embedding on top of these factorized latents, while we exploit the mean-pooled factorized latents to rerank a short candidate list at negligible cost, as both are produced by the same forward pass. Extensive evaluations demonstrate that FactEmbed outperforms prior works across CIR benchmarks.",
      "upvotes": 44,
      "github_stars": 9,
      "github_repo": "https://github.com/cvlab-kaist/FactEmbed",
      "project_page": "https://cvlab-kaist.github.io/FactEmbed/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05193",
      "arxiv_url": "https://arxiv.org/abs/2611.05193",
      "title_ja": "構成的画像検索のための因子分解されたMLLM埋め込み",
      "summary_ja": "クエリの意図を直接埋め込むのではなく、修正内容と基準画像を分解して理解することで、MLLMによる高度な画像検索を実現する。"
    },
    {
      "id": "2611.02497",
      "title": "RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild",
      "abstract": "General-purpose robot policies must work across robots, tasks, and environments, yet the variation that makes physical trials informative also makes them difficult to reproduce. We introduce RoboColosseum, a distributed evaluation framework that combines unified policy serving and standardized protocols across a network of locally operated robots in diverse environments. Our initial study evaluates five vision-language-action (VLA) policies and three frontier AI agents across four embodiments (SO-101, Franka, Bimanual-YAM, and G1 Humanoid). The Open Track compares models without task-specific adaptation in blinded, pairwise trials under matched local conditions. The Fine-tune Track measures how well VLA policies adapt to 20 tasks across all four embodiments when each policy receives the same 100 demonstrations per task. Across 5,699 pairwise Open Track comparisons at 124 sites, frontier agents rival specialized VLA policies, while all systems struggle to complete open-world tasks reliably. After fine-tuning, GR00T N1.7 leads on SO-101 and pi0.5 leads on Franka and Bimanual-YAM. Policy rankings show weak agreement across embodiment-specific task suites (Kendall W = 0.24). Open Track rankings poorly predict relative performance after fine-tuning, with substantial rank reversals on all three embodiments shared between tracks. Measuring partial progress reveals differences that task success alone misses. On the G1 Humanoid, no policy completes any of the five tasks, yet average progress ranges from 13.3% to 23.2% across policies. Open Track rankings stabilize as trials accumulate, and active matchmaking achieves comparable ranking agreement with substantially fewer physical trials than uniform sampling. These results show how distributed physical evaluation can reveal where robot policies generalize, how well they adapt to new tasks, and how far they progress on tasks they fail to complete.",
      "upvotes": 44,
      "github_stars": 3,
      "github_repo": "https://github.com/RoboColosseum/robocolosseum-client",
      "project_page": "https://robocolosseum.ai/",
      "comments": 2,
      "org": "Hugging Face",
      "url": "https://huggingface.co/papers/2611.02497",
      "arxiv_url": "https://arxiv.org/abs/2611.02497",
      "title_ja": "RoboColosseum：野生環境における物理的知能の大規模評価",
      "summary_ja": "多様な環境とロボットをネットワークで繋ぎ、標準化されたプロトコルでVLAモデル等の性能を公平かつ大規模に評価する枠組み。"
    },
    {
      "id": "2611.03424",
      "title": "IdeaTaste: Do LLMs Share the Research Taste of Human Researchers?",
      "abstract": "Research taste, the judgment of what to read, which problems to pursue, and which methods to try, increasingly shapes the work of AI scientists, yet it remains far less understood than their ability to execute research. We introduce IdeaTaste, a benchmark that scores an LLM by how closely the research proposals it writes from a literature snapshot frozen at 2025 match the work the same communities published in 2026. Our experiments span six contemporary language models and four research areas from established to emerging fields, covering more than 90{,}000 proposals in total. LLM agents fall well short of human communities in both the literature they cite and the ideas they state, reaching about 26\\% of the human level on citation matching and only 18\\% on idea matching. Their populations can cite as diversely as a community and take up its tasks and methods, yet rarely arrive at the concrete approaches and research plans it pursues. Neither richer field context nor larger populations substantially close this gap. In blinded expert review, AI proposals trail the 2026 papers least in presentation and most in expected success, echoing their gap in concrete approaches, and those whose ideas no human paper shares fare worst, suggesting weaker directions rather than overlooked opportunities. These results indicate that the main bottleneck in AI research taste lies less in finding the directions a community works on than in turning them into the concrete approaches it goes on to pursue. We release IdeaTaste as an open, continuously updated leaderboard (https://cxcscmu.github.io/IdeaTaste) that benchmarks contemporary AI proposals against future publication cycles.",
      "upvotes": 44,
      "github_stars": 7,
      "github_repo": "https://github.com/cxcscmu/IdeaTaste",
      "project_page": "https://cxcscmu.github.io/IdeaTaste/",
      "comments": 3,
      "org": "Carnegie Mellon University School of Computer Science",
      "url": "https://huggingface.co/papers/2611.03424",
      "arxiv_url": "https://arxiv.org/abs/2611.03424",
      "title_ja": "IdeaTaste：LLMは人間の研究者と同じ「研究センス」を共有しているか？",
      "summary_ja": "将来発表される論文を予測させるベンチマークにより、LLMの研究提案能力や引用選択の傾向が人間のコミュニティとどう異なるかを測定。"
    },
    {
      "id": "2611.01560",
      "title": "Democratizing Robot-Use Agents: A Unified Harness with Open Models",
      "abstract": "Robot-use Agents (RUAs) have shown promising zero-shot manipulation capabilities, but reliance on frontier, proprietary models limits research into further training. To democratize RUA research, we introduce uni-robot-agent, a unified harness for competitive open-weight robot use that supports further training. Without privileged inputs, an out-of-the-box Qwen3.8-Flash-Next achieves a RoboDojo Score of 31.39, surpassing the published GPT-6 Astra-RoboProbe result of 28.97 and many VLA/WAM baselines, and performs competitively on 19 real-world tasks. Our analysis across model generations, families, and sizes links effective robot use to four general capabilities, suggesting that future RUA training should develop them jointly.",
      "upvotes": 43,
      "github_stars": 196,
      "github_repo": "https://github.com/Open-RUA/uni-robot-agent",
      "project_page": "https://openrua.ai/uni-robot-agent",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.01560",
      "arxiv_url": "https://arxiv.org/abs/2611.01560",
      "title_ja": "ロボット操作エージェントの民主化：オープンモデルによる統合ハーネス",
      "summary_ja": "オープンな軽量モデルで商用モデルを凌駕する性能を達成し、訓練可能な統合環境を提供することでロボット操作研究を促進する。"
    },
    {
      "id": "2610.42149",
      "title": "Latent Reasoning in Continuous Space for Unified Multimodal Models",
      "abstract": "Unified Multimodal Models (UMMs) achieve remarkable success on diverse multimodal understanding and generation tasks, yet they still struggle to effectively leverage language-based chain-of-thought reasoning for image generation. As a result, existing reasoning-augmented UMMs often fail to inherit the test-time scaling and fine-grained controllability observed in large language models. We attribute this failure to a fundamental modality mismatch: reasoning is performed in a discrete token space, whereas image generation operates in a continuous space. To bridge this gap, we introduce a Latent Reasoning framework in Continuous space (LARC), which alleviates the token-level bottleneck by reasoning over continuous hidden states. Specifically, the training framework consists of two stages: (i) curriculum supervised fine-tuning (SFT), and (ii) information-gain reinforcement learning (RL). First, the curriculum SFT stage gradually converts token-level reasoning into latent reasoning. Subsequently, the information-gain RL stage self-evolves latent reasoning without ground truth supervision. Experiments across diverse text-to-image generation benchmarks show that LARC consistently improves generation quality, prompt following, and compositional fidelity. Notably, LARC achieves state-of-the-art performance on GenEval with a 7%p gain over BAGEL and demonstrates clear test-time scaling behavior, outperforming token-based generation under both parallel and sequential test-time scaling strategies.",
      "upvotes": 42,
      "github_stars": 9,
      "github_repo": "https://github.com/rootyJeon/LARC",
      "project_page": "https://rootyjeon.github.io/larc-umm/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.42149",
      "arxiv_url": "https://arxiv.org/abs/2610.42149",
      "title_ja": "統合マルチモーダルモデルのための連続空間における潜在推論",
      "summary_ja": "離散トークンと連続的な画像生成のギャップを埋める潜在推論枠組みにより、推論に基づく精緻な画像制御とテスト時スケーリングを実現。"
    },
    {
      "id": "2611.03233",
      "title": "Axion 1.0: Open Agent Foundation Models, Simplified",
      "abstract": "We introduce Axion 1.0, a fully open agent foundation model that combines strong and broad agentic capabilities with a remarkably simple training recipe. Axion 1.0 is trained in only three stages: two lightweight supervised fine-tuning stages followed by reinforcement learning, without dedicated mid-training, direct preference optimization (DPO), or on-policy distillation (OPD). The first SFT stage develops strong self-contained reasoning through model-aware data construction, where we synthesize challenging problems and adversarially strengthen them based on the base model's own successful solution strategies. The second stage extends these capabilities to tool-dependent reasoning through a scalable pipeline for constructing diverse and automatically verifiable tasks grounded in real-world data sources and deterministic computation. Finally, reinforcement learning further strengthens long-horizon reasoning and interaction with external tools and environments. Despite this compact training recipe, Axion 1.0 achieves strong performance across a broad suite of agentic benchmarks and is competitive with leading commercial models on several of them. Equally importantly, Axion 1.0 is open beyond model weights: we release the complete recipe, including data construction, generation, filtering, verification, prompts, and training code, enabling the entire development process to be reproduced and extended. Axion 1.0 demonstrates that strong agent foundation models can be both open and simple, offering a practical and reproducible path toward advancing open agentic intelligence.",
      "upvotes": 40,
      "github_stars": 37,
      "github_repo": "https://github.com/bytedance/axion1_0",
      "project_page": "https://axion1-0.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03233",
      "arxiv_url": "https://arxiv.org/abs/2611.03233",
      "title_ja": "Axion 1.0：簡素化されたオープンなエージェント基盤モデル",
      "summary_ja": "複雑な中間学習を省き、2段階のSFTと強化学習のみというシンプルなレシピで、高い推論能力とツール利用能力を持つモデルを構築。"
    },
    {
      "id": "2610.37161",
      "title": "WorkFactory: Turning Professional Intents into Executable Work for Scalable Agent Training",
      "abstract": "Scaling supervised training for working agents requires diverse professional tasks that yield reliable expert demonstrations. However, missing or inconsistent task information can obstruct teacher execution and weaken the resulting supervision. We propose WorkFactory, a scalable framework for constructing coherent and executable professional tasks. Starting from professional intents, information-level planning builds an information support graph to guide task instantiation, explicitly representing the dependencies and locations of information required for the intended outputs. Probe executions then identify support failures and guide repairs while preserving the intended work. We construct 112,686 tasks spanning 612 occupations and use the collected teacher trajectories to fine-tune Qwen models at 4B, 27B, and 35B-A3B scales, yielding the WorkPilot family. All three models improve over their respective base models across four professional-work benchmarks, with WorkPilot-35B-A3B improving from 879 to 1565 Elo on GDPval-AA v2.1. Scaling analyses reveal model-dependent diminishing returns, with execution length first increasing and then decreasing. Controlled component analyses show that planning and repair reduce probe-diagnosed task environment defects and improve downstream performance. The data and models are available at https://github.com/IQuestLab/WorkFactory.",
      "upvotes": 40,
      "github_stars": 22,
      "github_repo": "https://github.com/IQuestLab/WorkFactory",
      "project_page": "",
      "comments": 6,
      "org": "IQuest",
      "url": "https://huggingface.co/papers/2610.37161",
      "arxiv_url": "https://arxiv.org/abs/2610.37161",
      "title_ja": "WorkFactory：エージェント訓練のスケーリングに向けた専門的意図の実行可能なワークへの変換",
      "summary_ja": "情報の依存関係をグラフ化し実行テストで修復することで、エージェント学習に不可欠な高品質で一貫性のある専門タスクを大量生成する。"
    },
    {
      "id": "2611.02074",
      "title": "SWE-Trail: History-Guided Trajectory Collection for Coding Agent Training",
      "abstract": "Coding agents solve repository issues through long sequences of exploration, editing, and validation. These trajectories are increasingly used as post-training data, so how they are collected shapes what the trained model learns. A common approach is to sample multiple trajectories independently for each issue and then select or curate them. However, as more trajectories are sampled independently, later trajectories become increasingly redundant, even though earlier trajectories could guide where subsequent collection effort should be spent. A natural way to use this history is to expose it to the coding agent as advice. But training on such trajectories can make the model rely on advice that is unavailable at test time, creating a train-test mismatch. Instead, we argue that history should guide where collection effort is spent, while the coding agent decides what to generate. We introduce SWE-Trail, a trajectory collector that uses earlier trajectories to guide subsequent collection while keeping that history outside the coding agent's context. During a new rollout, SWE-Trail uses history to identify a state where additional collection effort may be useful. There, the coding agent proposes candidate next actions from its ordinary context, and SWE-Trail briefly executes them from the same checkpoint to decide which route continues. We evaluate collection approaches by training student models on the trajectories they produce. For a 124B student initialized from Ling-3.0-flash-base, SWE-Trail improves mean resolution over independent sampling by 2.33 and 1.60 percentage points on SWE-bench Multilingual and SWE-bench Pro, respectively. Without history, the same pipeline produces more resolved trajectories than independent sampling, but improves by only 0.11 points on Multilingual. These results show the value of using history to guide collection without exposing it to the coding agent.",
      "upvotes": 38,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Ant Group",
      "url": "https://huggingface.co/papers/2611.02074",
      "arxiv_url": "https://arxiv.org/abs/2611.02074",
      "title_ja": "SWE-Trail：コーディングエージェント訓練のための履歴誘導型軌跡収集",
      "summary_ja": "過去の試行履歴をアドバイスとして活用し、冗長な探索を避けて効率的に高品質な訓練データを収集する。訓練時のアドバイス依存も解消。"
    },
    {
      "id": "2611.02897",
      "title": "PhotoGuider: Composition-Aware Cropping and 360^{circ} View Framing with Explainable Photographic Assessments",
      "abstract": "Traditional image cropping assumes the photograph already contains the composition worth keeping, and asks only where to crop. A full 360^{circ} scene offers no such guarantee: the viewing direction in a scene has to be discovered before anything can be framed. We present PhotoGuider, a measure-then-frame method that answers both questions with compact learned scorers over one shared set of composition-aware features. The designed features are extracted using foundation and task-specific vision models and structured into four photographic tokens: Subject, Composition, Aesthetics, and Integrity. Our MLLM explainer is fine-tuned to generate composition-related explanations conditioned on images and measured token assessments. To our knowledge, PhotoGuider is the first method to combine explicit composition-based direction selection in 360^{circ} panoramas with refined framing, camera-parameter output for native re-rendering, and measurement-conditioned explanations. On two standard 2D cropping benchmarks, PhotoGuider achieves the highest average mIoU performance against ground-truth crops. In a blind ranking study, 120 participants ranked three cropping methods over 100 panoramic scenes from the public Poly Haven HDRI library, placing our framings first in 53.2% of cases, against 27.3% and 19.5% for two strong alternatives. Project page: https://ntuneillee.github.io/research/photoguider/",
      "upvotes": 37,
      "github_stars": 50,
      "github_repo": "https://github.com/NTUneillee/PhotoGuider",
      "project_page": "https://ntuneillee.github.io/research/photoguider/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.02897",
      "arxiv_url": "https://arxiv.org/abs/2611.02897",
      "title_ja": "PhotoGuider：説明可能な写真評価による構図重視のクロッピングと360度ビューフレーミング",
      "summary_ja": "4つの写真特性トークンと学習済みスコアラーを用い、360度シーンから最適な構図を特定し、その理由を言語で説明する手法を提案。"
    },
    {
      "id": "2610.40738",
      "title": "Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use",
      "abstract": "A capable voice assistant must do more than recognize words; it must understand requests, reason over context, sustain conversations, and act through tools. We present Apriel Voice 27B Preview, an open speech-language model that unifies these capabilities within a shared reasoning backbone while retaining text and image input modalities. Built on the post-trained Gemma 4 26B-A4B checkpoint, Apriel Voice directly processes speech and generates both responses and tool calls without requiring a separate dialogue model. We introduce a two-stage training procedure to adapt the model to speech. The first stage establishes the speech interface, while the second jointly adapts the projector and backbone through supervised fine-tuning, text replay, and source-dependent cross-entropy and forward Kullback--Leibler divergence supervision. Automatically constructed speech-conditioned dialogues provide conversational training data, while local teacher serving, overlapping teacher and student computation, and fused full-vocabulary losses enable efficient online distillation. In thinking mode, Apriel Voice achieves a score of 98.90 on Big Bench Audio, 81.13 on Speech-BFCL, and a task success rate of 65.51% on τ-Voice, with a mean latency of 1.91 seconds. It also achieves 51.27% English EVA accuracy and 74.13% experience pass@1. Finally, we deploy Apriel Voice 27B Preview on a custom serving platform to support interactive voice interactions.",
      "upvotes": 36,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://servicenow-ai-apriel.hf.space/home",
      "comments": 2,
      "org": "ServiceNow-AI",
      "url": "https://huggingface.co/papers/2610.40738",
      "arxiv_url": "https://arxiv.org/abs/2610.40738",
      "title_ja": "Apriel Voice 27B Preview：音声・推論・ツール利用のためのオープンモデル",
      "summary_ja": "単一の推論バックボーンで音声入力を直接処理し、対話やツール呼び出しを統合的に行うことができるオープンな音声言語モデル。"
    },
    {
      "id": "2611.05036",
      "title": "ToolSpace: Scaling Tool-Centric Environment Synthesis for Long-Horizon Agents",
      "abstract": "Large language models are deployed as long-horizon agents that compose diverse tools across MCP services into executable workflows. Existing MCP environment-scaling methods are data-centric: they first synthesize a database and scenario, then derive tools and tasks from them. As a result, tool interfaces may not match real ones, tool compositions are not grounded in execution, and tasks rarely span more than one environment. We propose ToolSpace, a tool-centric framework that reverses this order. ToolSpace mines data, state, and retry dependencies from adjacent calls in execution traces of real MCP services and open agent corpora, using deterministic rules rather than LLM judgment, and clusters the resulting weighted tool-composition graph into environments. Databases are synthesized only for state-mutating environments, while query and stateless tools replay recorded returns. ToolSpace then performs state-aware random walks with rollback and decompiles each chain into a natural-language task with assertion-based checks, keeping only samples that replay successfully from the initial state. Applied to AutomationBench and tau3-Bench Banking, the pipeline produces harder Pro versions on which 7 frontier models drop by up to 38.2 points. Across seven long-horizon tool-use benchmarks, ToolSpace raises Qwen3.6-35B-A3B from 23.0 to 41.0 average score (43.2 with RL) and GLM-5.2 from 44.6 to 56.6, on par with Claude Opus 5. Ablations show that execution-witnessed edges clearly outperform LLM-judged ones, and performance keeps improving with data and environment scale.",
      "upvotes": 34,
      "github_stars": 28,
      "github_repo": "https://github.com/dongguanting/ToolSpace",
      "project_page": "https://toolspace-agent.github.io/",
      "comments": 2,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.05036",
      "arxiv_url": "https://arxiv.org/abs/2611.05036",
      "title_ja": "ToolSpace：長期実行エージェントのためのツール中心の環境合成のスケーリング",
      "summary_ja": "実際の実行トレースからツール間の依存関係を抽出し、現実のインターフェースに基づいた複雑で地続きなツール利用環境を構築する。"
    },
    {
      "id": "2610.27954",
      "title": "Lost in Recovery: Demystifying Recovery Behavior of Computer-Use Agents via Goal-Oriented Action Replay",
      "abstract": "Recent advances in large (vision) language models have enabled computer-use agents that automate digital workflows via fine-grained keyboard and mouse operations. However, such agents remain fragile in long-horizon settings, where errors accumulate and executed actions leave unintended side effects, making the ability to recover from failures critical. Yet, existing remedies remain inadequate: environment resets are infeasible in proprietary settings, action replay is prohibitively expensive over long horizons, and API-based rollback is limited to web environments, leaving model-based recovery largely unexplored. To address this gap, we present ReTrace, a scalable evaluation framework for systematically studying recovery behavior in computer-use agents. We formalize Transition-Consistent Recovery: identical downstream actions from the recovered and target states must yield identical outcomes. We operationalize this criterion through goal-oriented action replay following controlled error injection. Using ReTrace, we present the first systematic study of autonomous, model-based recovery, revealing that (i) ideal recovery can unlock model's latent task completion capabilities, (ii) current computer-use agents fail to exploit their latent recovery capabilities, and (iii) accurate model-based recovery yields measurable end-to-end gains. Together, these findings establish recovery as a fundamental capability for building reliable computer-use agents. Our code and dataset is available at https://github.com/BangProx/ReTRACE.",
      "upvotes": 33,
      "github_stars": 4,
      "github_repo": "https://github.com/BangProx/ReTRACE",
      "project_page": "",
      "comments": 3,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.27954",
      "arxiv_url": "https://arxiv.org/abs/2610.27954",
      "title_ja": "Lost in Recovery：ゴール指向アクションリプレイによるコンピュータ操作エージェントの回復挙動の解明",
      "summary_ja": "エラーからの回復が困難なコンピュータ操作において、実行済みアクションを整理・再現し、モデルによる回復能力を評価する枠組み。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's Images 2.6 Generates 4B Weekly Images 32% Faster With Native GIFs",
      "summary": "OpenAI's Images 2.6 adds native GIF generation, reusable reference images, and two API models that cut generation time by nearly half.",
      "url": "https://alphasignal.ai/news/openai-s-images-2-6-generates-4b-weekly-images-32-faster-with-native-gifs",
      "published": "2026-11-05T08:35:14+09:00",
      "title_ja": "OpenAI Images 2.6：GIF生成対応と32%の高速化を実現",
      "summary_ja": "GIF生成、再利用可能な参照画像、生成時間を約半分に短縮する2つのAPIモデルを追加。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Code Slashes Background Agent Status Costs by 99%",
      "summary": "Claude Code now uses Haiku 5.5 with short notes instead of full transcripts to refresh subagent status lines, cutting update costs by about 99%.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-code-slashes-background-agent-status-costs-by-99",
      "published": "2026-11-05T04:29:39+09:00",
      "title_ja": "AnthropicのClaude Code、エージェントの更新コストを99%削減",
      "summary_ja": "Haiku 5.5を活用し、全文ではなく短いメモで状態を更新することで大幅な低コスト化を実現。"
    },
    {
      "lab": "Google Research",
      "title": "Agile Deliberation: How AI helps humans define the gray areas",
      "summary": "Data Mining & Modeling",
      "url": "https://research.google/blog/agile-deliberation-how-ai-helps-humans-define-the-gray-areas/",
      "published": "2026-11-05T03:07:05+09:00",
      "title_ja": "機敏な審議：AIによる定義が困難な境界領域の明確化支援",
      "summary_ja": "データマイニングとモデリングを活用し、人間が曖昧な領域を定義するのをAIが支援する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "FMS-DS Solves a Decades-Old Math Problem in Outlier-Resistant Data Recovery",
      "summary": "A new theoretical result shows a popular iterative algorithm reliably recovers subspaces from corrupted data, no matter how badly it is initialized.",
      "url": "https://alphasignal.ai/news/fms-ds-solves-a-decades-old-math-problem-in-outlier-resistant-data-recovery",
      "published": "2026-11-05T03:01:23+09:00",
      "title_ja": "FMS-DS：外れ値に強いデータ復元における数十年来の数学的課題を解決",
      "summary_ja": "初期値の状態に関わらず、汚染されたデータから部分空間を確実に復元する新理論を提示。"
    },
    {
      "lab": "Hugging Face",
      "title": "Dharma Field Extractor: Any Document In, Structured Fields in JSON Out",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/dharma-field-extractor",
      "published": "2026-11-05T02:50:10+09:00",
      "title_ja": "Dharma Field Extractor：あらゆる文書を構造化されたJSONに変換",
      "summary_ja": "任意のドキュメントを入力するだけで、定義されたフィールドをJSON形式で出力できる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Moonshot AI Opens Kimi K3.1 Pro Weights to Beat Claude on Coding Agents",
      "summary": "Moonshot AI drops the open weights for its 2.8T-parameter flagship, a post-training overhaul of Kimi K3 that nearly ties Claude Opus 5.5 on agentic coding.",
      "url": "https://alphasignal.ai/news/moonshot-ai-opens-kimi-k3-1-pro-weights-to-beat-claude-on-coding-agents",
      "published": "2026-11-05T01:00:35+09:00",
      "title_ja": "Moonshot AIがKimi K3.1 Proを公開、コーディングでClaudeに匹敵",
      "summary_ja": "2.8兆パラメータのモデルを公開。エージェントによるコーディングでClaude 5.5に肉薄。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI to acquire Pierre Computer Company, Inc.",
      "summary": "OpenAI will acquire Pierre Computer Company, expanding Codex’s tools for building, understanding, and reviewing code.",
      "url": "https://openai.com/index/openai-to-acquire-pierre",
      "published": "2026-11-04T23:30:00+09:00",
      "title_ja": "OpenAIがPierre Computer Companyを買収",
      "summary_ja": "買収により、Codexのコード構築、理解、レビューのためのツール群を拡張する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Deep Principle's Hydrogen-1.0 Beats GPT-6 on Science With 753B Open Parameters",
      "summary": "Deep Principle post-trained GLM-5.3 on chemistry lab records and discovery trajectories, releasing a 753B open-weight model that beats GPT-6-Astra on FrontierScience-Research.",
      "url": "https://alphasignal.ai/news/deep-principle-s-hydrogen-1-0-beats-gpt-6-on-science-with-753b-open-parameters",
      "published": "2026-11-04T21:19:04+09:00",
      "title_ja": "Deep PrincipleのHydrogen-1.0、753Bのオープン重みでGPT-6を凌駕",
      "summary_ja": "化学実験記録で追加学習し、科学研究ベンチマークでGPT-6 Astraを上回る性能を達成。"
    },
    {
      "lab": "AlphaSignal",
      "title": "GPT-6 Astra Rewrites Qwen3.5 and Boosts Math Scores by 40%",
      "summary": "Rikiya Takehi and collaborators published an edited Qwen3.5-0.8B on Hugging Face, showing GPT-6 Astra can rewrite weights directly with no training.",
      "url": "https://alphasignal.ai/news/gpt-6-astra-rewrites-qwen3-5-and-boosts-math-scores-by-40",
      "published": "2026-11-04T21:18:00+09:00",
      "title_ja": "GPT-6 AstraがQwen3.5を書き換え、数学スコアを40%向上",
      "summary_ja": "学習なしでモデルの重みを直接書き換える手法により、小型モデルの数学性能を大幅に改善。"
    },
    {
      "lab": "OpenAI",
      "title": "A thousand fewer paths to root",
      "summary": "OpenAI built an autonomous pipeline that found, validated, and generated patches for 948 local privilege-escalation vulnerabilities in the Linux kernel.",
      "url": "https://openai.com/index/a-thousand-fewer-paths-to-root",
      "published": "2026-11-04T17:00:00+09:00",
      "title_ja": "rootへの経路を1000件削減",
      "summary_ja": "Linuxカーネル内の948件のローカル権限昇格脆弱性を自律的に発見・修正生成するパイプライン。"
    },
    {
      "lab": "OpenAI",
      "title": "Daybreak Red is now available in AWS GovCloud (US-East)",
      "summary": "Daybreak Red brings GPT-5.6 Cyber to approved customers in AWS GovCloud (US-East) through Amazon Bedrock for authorized cybersecurity work.",
      "url": "https://openai.com/index/daybreak-red-aws-govcloud",
      "published": "2026-11-04T16:00:00+09:00",
      "title_ja": "Daybreak RedがAWS GovCloud (US-East)で利用可能に",
      "summary_ja": "Amazon Bedrockを通じ、政府承認顧客へサイバーセキュリティ用GPT-5.6を提供。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing Images 2.6",
      "summary": "Images 2.6 brings faster image generation, GIF creation, more precise editing, and new API controls across ChatGPT, Codex, and the API.",
      "url": "https://openai.com/index/introducing-images-2-6",
      "published": "2026-11-04T09:00:00+09:00",
      "title_ja": "Images 2.6の導入",
      "summary_ja": "画像生成の高速化、GIF作成、精密な編集、新APIコントロールを各サービスに提供。"
    },
    {
      "lab": "OpenAI",
      "title": "DevRev delivers autonomous self-service with GPT-6.1 Sol",
      "summary": "DevRev uses GPT-6.1 Sol to power Computer and Operator, balancing reasoning, speed, and cost for enterprise service.",
      "url": "https://openai.com/index/devrev-enterprise-self-service",
      "published": "2026-11-04T09:00:00+09:00",
      "title_ja": "DevRevがGPT-6.1 Solによる自律型セルフサービスを提供",
      "summary_ja": "推論、速度、コストのバランスを最適化し、エンタープライズ向けのサービスを強化。"
    },
    {
      "lab": "Hugging Face",
      "title": "StateBench: Testing how language models track state changes over long documents",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/statebench",
      "published": "2026-11-04T02:15:21+09:00",
      "title_ja": "StateBench：長文内での状態変化追跡能力のテスト",
      "summary_ja": "言語モデルが長いドキュメントを通じて状態の変化をどの程度追跡できるかを評価する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Agentic cheminformatics with Google Antigravity",
      "summary": "Learn how Google Antigravity and our Cheminformatics Skills accelerate drug discovery workflows, search compounds, and propose novel rigidified macrocycles.",
      "url": "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/",
      "published": "2026-11-04T02:01:49+09:00",
      "title_ja": "Google Antigravityによるエージェント型ケモインフォマティクス",
      "summary_ja": "創薬ワークフローを加速し、化合物の探索や新規マクロサイクルの提案を効率化する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Palette: teaching a small model to build decks in your design language",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/palette-deck-building",
      "published": "2026-11-04T01:35:36+09:00",
      "title_ja": "Palette：小規模モデルに指定のデザイン言語でスライド作成を学習させる",
      "summary_ja": "独自のスタイルに合わせたデッキ作成が可能なよう、小規模モデルを訓練する手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Accelerating engineering for the physical world",
      "summary": "Discover how ChatGPT and Codex are helping engineers accelerate CAD, PCB design, simulation, and other workflows across the physical world.",
      "url": "https://openai.com/index/accelerating-engineering-for-the-physical-world",
      "published": "2026-11-03T21:00:00+09:00",
      "title_ja": "物理世界のエンジニアリングを加速",
      "summary_ja": "ChatGPTとCodexを活用し、CADやPCB設計、シミュレーション等の業務を効率化。"
    },
    {
      "lab": "Hugging Face",
      "title": "CWE-bench v2: More coverage, quality, and transparency",
      "summary": "",
      "url": "https://huggingface.co/blog/cwe-bench",
      "published": "2026-11-03T09:00:00+09:00",
      "title_ja": "CWE-bench v2：網羅性、品質、透明性の向上",
      "summary_ja": "ソフトウェア脆弱性に関するベンチマークの範囲と質を拡張し、透明性を高めた新版。"
    },
    {
      "lab": "Hugging Face",
      "title": "Transformers Model Integration Contracts",
      "summary": "",
      "url": "https://huggingface.co/blog/transformers-mic",
      "published": "2026-11-03T09:00:00+09:00",
      "title_ja": "Transformersモデル統合コントラクト",
      "summary_ja": "Transformersライブラリにおけるモデル統合のための契約・仕様に関する定義。"
    },
    {
      "lab": "Hugging Face",
      "title": "nemotron-halloween",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-halloween",
      "published": "2026-10-31T02:57:24+09:00",
      "title_ja": "nemotron-halloween",
      "summary_ja": "（詳細説明なし：タイトルに基づいたハロウィン関連のプロジェクトまたはアップデート）"
    },
    {
      "lab": "Google DeepMind",
      "title": "Speeding up planning decisions with AI",
      "summary": "Google DeepMind and UK government work together to reduce planning assessment times",
      "url": "https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/",
      "published": "2026-10-30T23:18:30+09:00",
      "title_ja": "AIによる計画決定の迅速化",
      "summary_ja": "Google DeepMindと英国政府が協力し、計画評価にかかる時間の短縮に取り組む。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代フロンティアモデル",
      "summary_ja": "Googleが開発する次世代の最先端モデルの発表。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "sleepフレームワーク：継続学習におけるLLMの知識保持の新手法",
      "summary_ja": "LLMが学習を続ける中で、既存の知識を失わずに保持し続けるための新たな枠組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイムシミュレーションにおいて前例のないリアリズムを実現する新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイム・ガウス頭部アニメーション",
      "summary_ja": "少数の画像と表情信号から、幾何学と外見を分離して3D頭部をリアルタイムにアニメーション化。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AIを活用し、結核のスクリーニング検査を支援する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプのマッピング",
      "summary_ja": "地球上のすべての10メートル区画を、異なる森林タイプに分類したグローバルマップ。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "健康・バイオサイエンス分野において、AIを用いて妊産婦の最前線ケアを支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントの生物学的現実への接地：自律型ウェットラボの構成要素",
      "summary_ja": "自律的な実験室（ウェットラボ）の実現に向け、AIエージェントを生物学的事実に適応させる。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用Google Antigravityを利用し、新規の抗菌ペプチドの検索を高速化する。"
    }
  ]
};
