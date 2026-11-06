window.papersData = {
  "updated_at": "2026-11-06 11:32 JST",
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
      "id": "2611.05735",
      "title": "Self-Supervised Learning of Universal Latent Spaces for Operator Learning",
      "url": "https://arxiv.org/abs/2611.05735",
      "pdf": "https://arxiv.org/pdf/2611.05735",
      "authors": [
        "Sepehr Mousavi",
        "Levi Lingsch",
        "Siddhartha Mishra",
        "Laura De Lorenzis"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "a functional autoencoder is pre-trained on analytic functions synthesized on the fly",
      "signals": [],
      "headline": "偏微分方程式の解や画像を共通して扱える自己学習型ユニバーサル潜在空間の構築",
      "what": "演算子学習（Operator Learning）において表現学習と学習タスクを分離し、解析関数を用いた自己学習によってタスクに依存しない潜在空間を事前学習する手法です。関数オートエンコーダにより、並進やスケーリングに対して完全な等変性を持つ潜在空間を凍結して再利用します。",
      "enables": "流体力学や音響学など28のタスクにおいて、既存手法を上回る精度を維持しつつ、最大で1桁高いスループットと2桁大きいモデルの学習を可能にしました。",
      "why_it_matters": "タスクごとに空間を再構築する必要がなく、キャッシュされた埋め込み上で学習を行うため、計算資源の大幅な節約と高度な物理シミュレーションの効率化に貢献します。",
      "tags": [
        "機械学習",
        "科学計算",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
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
      "id": "2611.06084",
      "title": "Shallow Encoding Emits Deep Memories",
      "url": "https://arxiv.org/abs/2611.06084",
      "pdf": "https://arxiv.org/pdf/2611.06084",
      "authors": [
        "Mingyuan Ma",
        "Yangmin Li",
        "Harris Nover",
        "Zheyu Fu",
        "Po-Han Huang",
        "Alex Settle"
      ],
      "categories": [
        "cs.LG",
        "cs.DC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages. Mingyuan Ma and Yangmin Li contributed equally",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "emitters, therefore write a prompt's deep memories from the residual stream",
      "signals": [],
      "headline": "浅い層の計算から深い層のメモリを生成し、推論のメモリ効率と速度を向上させるSEED",
      "what": "ハイブリッド言語モデルにおいて、深い層のメモリ書き込みが浅い層の表現から予測可能であるという特性を利用し、中間層をスキップしてメモリ（KVキャッシュや再帰状態）を生成する手法です。さらに、再帰状態を低ランク因子に圧縮して保存することでデコード時のメモリ負荷を軽減します。",
      "enables": "Qwen3.8-Flash-Nextなどのモデルにおいて、性能を維持したままGPUあたりのスループットを1.2〜1.4倍に向上させることが可能です。",
      "why_it_matters": "モデルの深さと状態表現の両面で「浅さ」を追求することで、長文コンテキストや大規模エージェント実行時におけるメモリ帯域のボトルネックを解消します。",
      "tags": [
        "LLM",
        "推論最適化",
        "計算効率化"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
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
      "id": "2611.06793",
      "title": "Transforming Integer Grids to Spatial Intuition: Perception, Not Planning, Governs ARC-AGI-3",
      "url": "https://arxiv.org/abs/2611.06793",
      "pdf": "https://arxiv.org/pdf/2611.06793",
      "authors": [
        "Harsidak Singh Banwait"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 17 figures, 8 tables. Submitted to the ARC Prize 2026 paper track. Code: https://github.com/Harsidak/SARBLOH",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "SARBLOH scored 16.53 on the hidden Kaggle evaluation, 13.7x the first Milestone winner.",
      "signals": [],
      "headline": "幾何学的知覚エンジンによりARC-AGIベンチマークの効率と精度を飛躍的に高めるSARBLOH",
      "what": "ARC-AGI-3という難関知能テストに対し、計画能力ではなく「空間知覚」を重視したアプローチです。整数のグリッドを幾何学的なオブジェクト目録や不変条件のブリーフィングに変換する高速な知覚エンジンと、コードを生成して実行するランタイムを組み合わせています。",
      "enables": "特定の評価指標において、スコアを3/28から25/28へと大幅に引き上げると同時に、使用トークン量を89.4%削減しました。",
      "why_it_matters": "LLMが苦手とする「グリッドをただの数値列として読み取る」ことによる空間構造の喪失を回避し、効率的な視覚的推論を実現する新しい道筋を示しました。",
      "tags": [
        "AIエージェント",
        "知能評価",
        "空間知覚"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
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
      "id": "2611.05689",
      "title": "TRUST-Stereo: Teacher-Assisted Robust Uncertainty-Guided Search and Transfer for Fast Stereo Matching",
      "url": "https://arxiv.org/abs/2611.05689",
      "pdf": "https://arxiv.org/pdf/2611.05689",
      "authors": [
        "Pouya Sohrabipour",
        "Yihong Feng",
        "Chaitanya Kumar Reddy Pallerla",
        "Tuan Dang",
        "Ngan Le",
        "Dongyi Wang"
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
      "star_quote": "TRUST-Stereo achieves state-of-the-art results on several benchmark metrics",
      "signals": [],
      "headline": "不確実性に基づき探索範囲を適応させる高速かつ頑健なステレオマッチング手法の開発",
      "what": "Uncertainty-Guided Residual Search Module (UGRSM)を導入し、伝播された視差の信頼性を推定して探索中心を動的に補正する手法です。さらに、基盤モデルから軽量なバックボーンへ知識を転送する2段階のSenior-Junior Teacher Assistant蒸留戦略を採用しています。",
      "enables": "KITTI 2015でEPE 0.93、MiddleburyでBad 2.0 6.79%というSOTAの精度を達成しつつ、ステレオペア1組あたり約50msの高速な推論が可能です。",
      "why_it_matters": "従来のcoarse-to-fine手法が抱えていた誤差伝播による対応点消失の問題を解決し、実用的な速度と高いゼロショット汎化性能を両立しています。",
      "tags": [
        "コンピュータビジョン",
        "ステレオマッチング",
        "知識蒸留"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06781",
      "title": "Semantic Residual Vector Quantization for Sign Language Generation",
      "url": "https://arxiv.org/abs/2611.06781",
      "pdf": "https://arxiv.org/pdf/2611.06781",
      "authors": [
        "Chang Liu",
        "Ke Han",
        "Niccol\\`o Biondi",
        "Gloria Isotton",
        "Elisa Ricci",
        "Davide Talon"
      ],
      "categories": [
        "cs.CV"
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
      "star_quote": "SRVQ achieves R@1 of 82.3 and 70.3, outperforming the previous SOTA by 30 and 46",
      "signals": [],
      "headline": "意味論から運動学への階層的アプローチによる高精度な手話生成フレームワーク",
      "what": "Semantic Residual Vector Quantization (SRVQ)を導入し、手話の内容（意味）と具体的な動き（運動学）を階層的にモデル化する手法です。第1レベルで手話の単語内容をコード化し、後続のレベルで手指の形や軌道などの詳細なポーズ情報を洗練させます。",
      "enables": "CSL-DailyデータセットにおいてR@1指標で82.3を記録し、従来手法を30ポイント以上上回る精度でテキストから手話動作を生成できます。",
      "why_it_matters": "「何を結ぶか」と「どう動くか」を明示的に分離することで、複雑な手話表現における文脈の正確性と微細な調音の再現性を向上させました。",
      "tags": [
        "コンピュータビジョン",
        "手話生成",
        "動作合成"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05591",
      "title": "C-GRPO: Conformal Group Relative Policy Optimization",
      "url": "https://arxiv.org/abs/2611.05591",
      "pdf": "https://arxiv.org/pdf/2611.05591",
      "authors": [
        "Arya Fayyazi",
        "Seyedarmin Azizi",
        "Mehdi Kamal",
        "Massoud Pedram"
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
      "comment": "Proceeding of NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "CGRPO, which replaces the fixed rollout budget of standard GPRO with calibrated conformal thresholds over task-specific nonconformity scores",
      "signals": [],
      "headline": "共形予測を用いた適応的な計算配分によりGRPOの学習効率を大幅に改善するC-GRPO",
      "what": "標準的なGRPOが固定のロールアウト数を用いるのに対し、タスクの難易度に応じて試行回数を適応的に変化させる手法です。Conformal Prediction（共形予測）を用いて停止規則を較正し、統計的な保証を提供しながら計算量を制御します。",
      "enables": "数学やコード生成のベンチマークにおいて、精度を維持したまま平均トレーニングロールアウト数を49〜70%削減することに成功しました。",
      "why_it_matters": "簡単な問題への過剰な計算と難問への探索不足という非効率性を、数学的根拠に基づいた適応的バジェット管理で解決しています。",
      "tags": [
        "LLM",
        "強強化学習",
        "学習最適化"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05643",
      "title": "Data-Efficient Scaling-Law Discovery for Recommendation Systems via Coupled Hyperparameter Scaling",
      "url": "https://arxiv.org/abs/2611.05643",
      "pdf": "https://arxiv.org/pdf/2611.05643",
      "authors": [
        "John Martabano Landy",
        "Louis C. Tiao",
        "Yao Xuan",
        "Luc Kien Hang",
        "Rupinder P. Khandpur",
        "Arvind M. Vepa"
      ],
      "categories": [
        "cs.LG",
        "cs.IR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce a scaling layer, which groups primitive architecture parameters into semantically coherent groups and defines how they co-vary",
      "signals": [],
      "headline": "推薦システムにおける計算量と精度のスケーリング則を効率的に発見するAxiaワークフロー",
      "what": "推薦モデルの複雑なアーキテクチャパラメータを意味のあるグループにまとめ、低次元のハイパーパラメータ空間からスケーリング則を導き出す手法です。サロゲートモデルを用いて、少量の試行から効率的にパレート境界を推定します。",
      "enables": "Metaの広告推薦システムにおいて、オフラインでの正規化エントロピーを0.66%改善し、オンラインでも0.36%のリフトを達成しました。",
      "why_it_matters": "LLMとは異なり構造が多様な推薦モデルにおいて、不確実性を考慮しながら最適な計算資源配分を自動決定できる実用的なフレームワークを提供します。",
      "tags": [
        "推薦システム",
        "スケーリング則",
        "AutoML"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05835",
      "title": "Pathwise-Budgeted LLM Routing: Online Allocation with K-Bit Tail-Cost Learning",
      "url": "https://arxiv.org/abs/2611.05835",
      "pdf": "https://arxiv.org/pdf/2611.05835",
      "authors": [
        "Hanzhang Qin",
        "Sophie H. Yu",
        "Yuewei Zhang",
        "Zhi-Hai Zhang"
      ],
      "categories": [
        "cs.LG",
        "math.OC"
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
      "star_quote": "ADP-HT, which learns each model's task-specific success probability and constructs conservative cost estimates from coarsened response-length labels",
      "signals": [],
      "headline": "予算制約下で最適なLLMを選択しタスク成功率を最大化するパスワイズ・ルーティング手法",
      "what": "固定予算内で複数のLLMを使い分ける際、タスクごとの成功確率と予測コスト（応答長）を考慮してモデルを選択するコンテキストバンディットアルゴリズムです。コスト推定に不確実性を考慮した保守的な値を導入し、残予算に応じてペナルティを調整します。",
      "enables": "厳しい予算制約下において、MATH500やGPQAなどの難関タスクで既存のベースライン手法の2倍以上の解を導き出すことができました。",
      "why_it_matters": "実行後までコストが確定しないLLM APIの利用において、1回の長い回答による予算枯渇を防ぎ、システム全体のタスク完了数を最適化します。",
      "tags": [
        "LLM",
        "オンライン学習",
        "リソース管理"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06108",
      "title": "Learning When to Think Aloud in Latent Reasoning",
      "url": "https://arxiv.org/abs/2611.06108",
      "pdf": "https://arxiv.org/pdf/2611.06108",
      "authors": [
        "Zhehao Zhou",
        "Tongrui Su",
        "Shengyu Zhu",
        "Da Li",
        "Zeyu Liu",
        "Jun Zhu"
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
      "star_quote": "VITAL, an importance-guided hybrid reasoning framework that selectively verbalizes informative tokens as reasoning anchors while keeping most computation latent.",
      "signals": [],
      "headline": "重要な思考のみを言語化し、潜在空間での推論と組み合わせるハイブリッド推論枠組みVITAL",
      "what": "すべての思考をトークンとして出力するのではなく、重要なアンカーとなるトークンのみを選択的に言語化し、残りの計算を連続的な潜在状態で処理する手法です。ゲート機構により、言語化と潜在状態のフィードバックを動的に切り替えます。",
      "enables": "GPT-2やLlama-3.2において、従来の潜在推論手法より最大9.6%高い精度を達成し、かつ通常のChain-of-Thought（CoT）より短い系列長で推論可能です。",
      "why_it_matters": "CoTの高い精度と潜在推論の低コストを両立させ、推論効率を損なうことなく数学的推論などの精密なタスクに対応できます。",
      "tags": [
        "LLM",
        "推論効率化",
        "Chain-of-Thought"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06121",
      "title": "3D Pose Estimation in Projection Space via Pixel-level Visible Light Communication",
      "url": "https://arxiv.org/abs/2611.06121",
      "pdf": "https://arxiv.org/pdf/2611.06121",
      "authors": [
        "Michikuni Eguchi",
        "Takefumi Hiraki"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "submitted to IEEE Access",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "first realization of real-time 3D pose estimation coordinated with high-quality projected image content without external sensing infrastructure.",
      "signals": [],
      "headline": "可視光通信を用いたプロジェクタ映像によるドローンなどのリアルタイム3D位置推定",
      "what": "プロジェクタの各画素に高速な輝度変調を施すPixel-level Visible Light Communication (PVLC)を利用し、受信側の4つの光センサで3Dポーズを推定する手法です。PnP問題として定式化することで、平面上に限定されていた従来技術を3次元空間へ拡張しました。",
      "enables": "外部センサなしで、約8msの低遅延かつ19.2mm（RMSE）という高精度な3D位置推定と高品質な映像投影を両立しました。",
      "why_it_matters": "専用のモーションキャプチャ設備なしで、プロジェクタが照射する空間内でのロボットやデバイスの精密な位置制御が可能になります。",
      "tags": [
        "ロボティクス",
        "可視光通信",
        "AR"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06270",
      "title": "NextGAN: Towards Simple and Scalable GAN Training for Image and Video Generation",
      "url": "https://arxiv.org/abs/2611.06270",
      "pdf": "https://arxiv.org/pdf/2611.06270",
      "authors": [
        "Xinhao Lou",
        "Dongye Xie",
        "Peng Sun",
        "Chenyi Zhuang",
        "Kaicheng Yu",
        "Tao Lin"
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
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "regressing its input gradient onto displacements between independently paired reference and generated features at interpolated locations in frozen representation spaces.",
      "signals": [],
      "headline": "画像・動画生成における1ステップでの高品質なサンプリングを可能にするNextGAN",
      "what": "従来のGAN損失の代わりに、生成された特徴と参照特徴の間の変位に対して識別器の勾配を回帰させる新しい目的関数を提案しています。事前学習済みの大規模なImageNetモデルや動画生成モデル（Wan2.1）に適用可能です。",
      "enables": "14Bパラメータまでの大規模モデルを安定して学習でき、ImageNetでFID 1.54（1ステップ）、動画生成でもVBenchで既存手法を上回るスコアを記録しました。",
      "why_it_matters": "複雑な蒸留や補助的な損失を用いずに、大規模な拡散モデルなどを1〜2ステップで実行可能な高速生成モデルへと効率的に変換できます。",
      "tags": [
        "画像生成",
        "動画生成",
        "GAN"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06519",
      "title": "IDSISA: Influence-Distilled Sharded Training for Efficient Machine Unlearning",
      "url": "https://arxiv.org/abs/2611.06519",
      "pdf": "https://arxiv.org/pdf/2611.06519",
      "authors": [
        "Deeraj SK",
        "Sadhana Devarajan",
        "Tanmoy Hazra",
        "Anupam Shukla"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "This work has been submitted to the IEEE for possible publication. Copyright may be transferred without notice, after which this version may no longer be accessible",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "IDSISA (Influence-Distilled SISA), which uses influence functions to concentrate forget-prone samples into few shards and distillation from unaffected shards",
      "signals": [],
      "headline": "影響関数と知識蒸留により特定のデータの影響を効率的に削除するIDSISA",
      "what": "機械学習モデルから特定の学習データの影響を削除するUnlearningの手法です。影響関数を用いて削除対象になりやすいデータを特定のシャード（分割データ）に集中させ、削除後の性能低下を残りのシャードからの蒸留で補完します。",
      "enables": "SISAと比較して、選択的忘却の性能を14〜91%向上させ、モデルの有用性（Utility）の保持率を最大50%改善しました。",
      "why_it_matters": "プライバシー規制への対応として、モデル全体を再学習することなく、数学的な保証を維持しながら効率的かつ高品質なデータ削除を可能にします。",
      "tags": [
        "機械学習",
        "Machine Unlearning",
        "プライバシー"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06585",
      "title": "Signed, Sealed, Leaked: Trust Beyond Signature for MCP Toolchains",
      "url": "https://arxiv.org/abs/2611.06585",
      "pdf": "https://arxiv.org/pdf/2611.06585",
      "authors": [
        "Yichiet Aun (Universiti Tunku Abdul Rahman)",
        "Mohammed A. Alhartomi (University of Tabuk)",
        "Jing Jie Tan (National University of Singapore)",
        "Waqas Nadeem (Universiti Tunku Abdul Rahman)",
        "Adeb Salh (Universiti Tunku Abdul Rahman)",
        "Shankar Karuppayah (Bitranger"
      ],
      "categories": [
        "cs.CR",
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 5 figures, 15 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "germline execution, which limits information disclosure without inspecting or trusting tool implementations.",
      "signals": [],
      "headline": "AIエージェント用ツールの悪意ある動作を防ぐデータ隔離実行環境Germline Execution",
      "what": "署名済みツールであっても秘密情報の漏洩を防ぐため、機密データを含まない「Germline（生殖系列）」プロセスからエフェメラルなコピーを作成してツールを実行する手法です。各実行コピーには、その宛先に許可されたデータのみを提供し、情報流出の経路を物理的に遮断します。",
      "enables": "153回の攻撃実験において、既存の防御手法が漏洩を防げなかったケースでも、情報漏洩をゼロに抑えることに成功しました。",
      "why_it_matters": "Model Context Protocol (MCP)などのツール利用において、実装の信頼性に依存せず、構造的に情報の機密性を担保するセキュリティ手法を提供します。",
      "tags": [
        "AIエージェント",
        "セキュリティ",
        "Model Context Protocol"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
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
      "id": "2611.06728",
      "title": "Turns Matter: Advancing Streaming Video RL via Turn-Level Credit",
      "url": "https://arxiv.org/abs/2611.06728",
      "pdf": "https://arxiv.org/pdf/2611.06728",
      "authors": [
        "Shuai Dong",
        "Kanghui Tian",
        "Linghan Chen",
        "Wenqi Shao",
        "Hongrui Wu",
        "Haowen Hou"
      ],
      "categories": [
        "cs.CV",
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 4 figures",
      "hf_upvotes": 83,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲83"
      ],
      "headline": "発話ごとの報酬割り当てにより動画対話の冗長性を排除するTurnWise GRPO",
      "what": "ストリーミング動画理解において、モデルが「応答するか待機するか」を判断する各ターンの意思決定に対して個別に報酬を割り当てる手法です。前後のターンの影響を排除したアドバンテージを計算し、各決定の価値を正しく評価します。",
      "enables": "動画内の出来事に対する正確なタイミングでの応答を促進し、既存の強化学習手法よりも高い精度と低い冗長性を実現しました。",
      "why_it_matters": "対話全体ではなく個々の発話ターンの質に焦点を当てることで、リアルタイムな動画視聴・対話システムにおけるエージェントの振る舞いを最適化します。",
      "tags": [
        "動画理解",
        "強化学習",
        "ストリーミング"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06918",
      "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
      "url": "https://arxiv.org/abs/2611.06918",
      "pdf": "https://arxiv.org/pdf/2611.06918",
      "authors": [
        "Weichen Fan",
        "Haiwen Diao",
        "Penghao Wu",
        "Siyuan Hu",
        "Ziqi Huang",
        "Tianqi Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code link: https://github.com/EvolvingLMMs-Lab/NEO/tree/main/VLAKit",
      "hf_upvotes": 56,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲56"
      ],
      "headline": "視覚エンコーダを廃止し、視覚と行動を密接に統合するロボット制御フレームワークNEO-VLA",
      "what": "従来の「固定された視覚エンコーダの出力を言語モデルに渡す」構成ではなく、軽量なパッチトークン化から始まり、モデルの全層で視覚と行動が共に進化するエンコーダフリーなアーキテクチャです。フローマッチングを用いた行動エキスパートが、モデルの各深さの表現を直接参照します。",
      "enables": "多様な操作タスクや分布の変化において、エンコーダベースの従来モデルよりも一貫して高い性能と堅牢な制御を達成しました。",
      "why_it_matters": "ロボット操作に不可欠な微細な幾何学情報や深度情報が、視覚エンコーダによる抽象化で失われるのを防ぎ、より直接的な視覚・行動連携を可能にします。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "ビジョンランゲージアクションモデル"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06910",
      "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
      "url": "https://arxiv.org/abs/2611.06910",
      "pdf": "https://arxiv.org/pdf/2611.06910",
      "authors": [
        "Bingran You",
        "Wenjun Ke",
        "Ria Rosenauer",
        "Bo Liu",
        "Wenbo Chen",
        "Min Chen"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "41 pages (10 pages main text), 19 figures, 11 tables",
      "hf_upvotes": 47,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲47"
      ],
      "headline": "物理学研究の全工程をエージェントが完結できるかを評価するFrontierPhysics",
      "what": "文献調査から計画立案、実験、論文作成まで、物理学の専門家が作成した56のタスクを含むエンドツーエンドの評価ベンチマークです。9つの物理学領域をカバーし、結果の正しさだけでなく、研究としての質や出版可能性も評価します。",
      "enables": "22種類の最新モデルを評価した結果、最高設定でも全試行の3割未満しかパスできないことが明らかになり、エージェントの推論の厳密さや直感の不足を浮き彫りにしました。",
      "why_it_matters": "単なる知識の有無ではなく、現実の複雑な科学的研究を自律的に遂行する能力を測定する、より実践的なAI評価指標として機能します。",
      "tags": [
        "AIエージェント",
        "物理学",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06483",
      "title": "What Does Multi-Turn Reinforcement Learning Really Improve in LLM Agents?",
      "url": "https://arxiv.org/abs/2611.06483",
      "pdf": "https://arxiv.org/pdf/2611.06483",
      "authors": [
        "Kejian Zhu",
        "Zhuoran Jin",
        "Shangqing Tu",
        "Tianyi Men",
        "Yupu Hao",
        "Jiachun Li"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://rethinking-agentic-rl.github.io/",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "複数ターン強化学習がエージェントの回復力と長期的なレジリエンスを向上させることを解明",
      "what": "多ターン対話を行うLLMエージェントにおいて、強化学習が具体的にどの能力を向上させているかを、サンプリング幅と対話の深さの観点から詳細に分析した研究です。また、トレーニング時のバジェット（ターン数）を変化させるBudgetMix RLを提案しています。",
      "enables": "強化学習が単一ステップの判断ミスを減らすのではなく、ミスからの回復（Error Recovery）能力を主に向上させていることを明らかにしました。",
      "why_it_matters": "エージェントの挙動の特性を理解することで、デプロイ時の計算予算に依存しない、より堅牢なエージェントの学習が可能になります。",
      "tags": [
        "LLM",
        "強化学習",
        "エージェント"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05711",
      "title": "Self-Supervised Pretraining for Label-Efficient Facial Expression Recognition using Smart Glasses",
      "url": "https://arxiv.org/abs/2611.05711",
      "pdf": "https://arxiv.org/pdf/2611.05711",
      "authors": [
        "Zhengtao Gao",
        "Francesco Bombassei De Bona",
        "Leonardo Alchieri",
        "Ivana Kiprijanovska",
        "Simon Stankoski",
        "Bojan Sofronievski"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "7 pages, 5 figures, 2 tables. Best Paper Award at the SEPH 2026 workshop, UbiComp Companion '26",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "スマートグラスを用いた表情認識において少量のラベルで高性能を実現する自己学習法",
      "what": "顔の筋肉の動きを検知するOMG（光筋電図）センサを搭載したスマートグラスにおいて、ラベルのない大量のデータからVision Transformerを事前学習する手法です。マスクドオートエンコーダ（MAE）の目的関数を用いて、顔の動きの表現を学習します。",
      "enables": "わずか5%のラベルデータのみを用いた学習で、すべてのラベルを使ってゼロから学習したモデルを上回る表情認識精度を達成しました。",
      "why_it_matters": "プライバシーに配慮したウェアラブルデバイスにおいて、高コストなラベル付け作業を大幅に削減し、個人に最適化された表情認識システムの構築を容易にします。",
      "tags": [
        "自己教師あり学習",
        "表情認識",
        "ウェアラブル"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05979",
      "title": "Learning Object-Centric Motion Priors from Human for Robotic Dexterous Manipulation",
      "url": "https://arxiv.org/abs/2611.05979",
      "pdf": "https://arxiv.org/pdf/2611.05979",
      "authors": [
        "Zhengdong Hong",
        "Guofeng Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "AAAI"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as an oral paper at AAAI 2026 (Website: https://ojs.aaai.org/index.php/AAAI/article/view/38892)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "人間の動画から物体の動きの事前知識を学び、器用なロボット操作を可能にする手法",
      "what": "人間と物体の相互作用（HOI）データセットから、物体が将来どのように動くかを予測するモデルを学習し、その予測結果を強化学習の報酬として利用する手法です。特定のタスクに依存した報酬設計（Reward Engineering）への依存を減らします。",
      "enables": "3つのシミュレーションタスクおよび実世界のロボットハンドにおいて、未知の物体に対しても高い成功率と汎化性能を示しました。",
      "why_it_matters": "「人間がどう動くか」を模倣するのではなく「物体がどう動くべきか」という物理的な事前知識を活用することで、異なるロボットの形状（エンボディメント）にも適応可能な汎用的なスキルを獲得できます。",
      "tags": [
        "ロボティクス",
        "器用な操作",
        "強化学習"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06911",
      "title": "BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories",
      "url": "https://arxiv.org/abs/2611.06911",
      "pdf": "https://arxiv.org/pdf/2611.06911",
      "authors": [
        "Fei Lin",
        "Tengchao Zhang",
        "Ziyang Gong",
        "Xiaotong Yu",
        "Bohan Zhang",
        "Yifan Zhou"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted by NeurIPS 2026 (Track on Evaluations and Datasets, Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "自動実験室におけるAIエージェントの判断力と行動能力を評価するBEAKERベンチマーク",
      "what": "自律型化学実験室（SDCL）において、AIモデルが実験装置の認識、軌道計画、安全確認、手順の推論などができるかを評価する、1,000件の専門家によるキュレーション済みデータセットです。",
      "enables": "最新のマルチモーダルLLMを評価した結果、大まかな手順は理解できているものの、具体的な操作領域の特定や微細な装置の状態認識に課題があることを明らかにしました。",
      "why_it_matters": "AIによる化学実験の自動化に向け、物理的な制約や安全性を考慮した実用的な行動能力を測定するための、専門性の高い評価基盤を提供します。",
      "tags": [
        "AIエージェント",
        "化学",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2611.01860",
      "title": "Advances in Agentic Computer Graphics",
      "abstract": "Computer graphics is built on code. Large language model (LLM) agents can now generate graphics code and iteratively refine it through various feedback. This capability opens the door to a potentially new paradigm of computer graphics, with graphics algorithms increasingly built around agentic systems to automate progressively complex tasks. Over the past years, research on agentic graphics has expanded rapidly across a diverse range of tasks. This rapid growth makes it increasingly difficult for manual literature reviews to keep pace with new developments. At the same time, similar ideas are often described using different terminology across these tasks, further complicating efforts to develop a systematic understanding of the field. In this report, we address these challenges through two contributions. First, we introduce a unified taxonomy for characterizing agentic systems across diverse computer graphics tasks. Second, we develop an agentic literature system that can assist human researchers in analyzing existing and newly published papers at scale. Building on these contributions, we analyze emerging research trends and discuss open challenges in coordinating agents and tools across graphics tasks, designing interfaces and representations for human-agent collaboration, sustaining long-horizon planning and refinement, and reliably evaluating interactive graphics systems.",
      "upvotes": 140,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "University of Texas at Austin",
      "url": "https://huggingface.co/papers/2611.01860",
      "arxiv_url": "https://arxiv.org/abs/2611.01860",
      "title_ja": "エージェント型コンピュータグラフィックスの進歩",
      "summary_ja": "LLMエージェントがコード生成とフィードバックによる改善を繰り返し、複雑なグラフィックス生成タスクを自動化する新しいパラダイムを提案。"
    },
    {
      "id": "2611.00859",
      "title": "Wave Forcing: Towards Speed-of-Light Streaming Video Generation",
      "abstract": "Real-time long-video generation requires continuous output with consistent appearance and natural motion. Existing chunk-wise autoregressive methods face challenges in both generation efficiency and long-video quality: serialized denoising and history-cache refresh require two forward passes even with one-step denoising, and longer rollouts can degrade quality and cause camera drift. We propose Wave Forcing (WF), which co-designs generation, training, and execution for continuous video output with multi-step denoising. WF uses chunk-wise causal attention to access earlier, cleaner chunks before their denoising is complete, and distributes staggered denoising and cache-refresh stages across full-model replicas to achieve 1F1C: one output chunk per concurrent forward round after pipeline fill. To adapt the model to this continuous generation process, we develop a three-stage training procedure that successively introduces mixed-noise denoising, motion supervision, and causal adaptation using self-generated history. To execute this process efficiently, Wave Runtime (WaveRT) uses Wave Parallelism (WP) for early K/V delivery and communication-computation overlap, together with optimized kernels and pipelined VAE decoding. Experiments on Wan2.1-T2V-1.3B show that 5-step WF maintains overall quality comparable to Rolling Forcing while achieving higher Dynamic Degree on both short and long videos. Our system efficiency experiments show that 4-step WF achieves 147.6 DiT FPS and 134.8 end-to-end FPS on eight H200 GPUs, yielding 7.07x the single-GPU end-to-end throughput. In DiT-only tests with matched SageAttention+W8A8 backends, denoising steps, and GPU counts, WP delivers up to 2.53x the throughput of the faster of the Ulysses and Ring context-parallel baselines across six model scales (1.3B-14B).",
      "upvotes": 124,
      "github_stars": 128,
      "github_repo": "https://github.com/SJTU-DENG-Lab/WaveForcing",
      "project_page": "https://sjtu-deng-lab.github.io/WaveForcing/",
      "comments": 6,
      "org": "DENG Lab @ SJTU",
      "url": "https://huggingface.co/papers/2611.00859",
      "arxiv_url": "https://arxiv.org/abs/2611.00859",
      "title_ja": "Wave Forcing: 光速のストリーミングビデオ生成に向けて",
      "summary_ja": "推論と訓練を協調設計し、多段階デノイジングを分散実行することで、一貫性と効率を両立した長尺ビデオのリアルタイム生成を実現。"
    },
    {
      "id": "2611.03178",
      "title": "CoworkOS:Scaling Agent Coworkers for Real-world Automation",
      "abstract": "Rapid advances in cowork agents are shifting human-AI collaboration toward real-world automation, delivering software, designs, and other artifacts. However, such productivity work demands both high-quality delivery on complex productivity tasks and continued monitoring and decision-making over long horizons, a combination that remains an open challenge. We introduce CoworkOS, a general-purpose harness for long-horizon work that separates task strategy from execution management: the model decides actions, delegation, and acceptance, while the runtime maintains state and feedback. Its three-layer architecture enables direct execution or delegation to Subagents, synchronously or asynchronously, under stable responsibilities. Through a shared application layer, humans and agents inspect and revise the same evolving documents, presentations, CAD models, and Blender scenes, so human-in-the-loop participation can enter both through conversation and through direct modification of the work itself. To sustain continuity across agents and sessions, CoworkOS further introduces hierarchical workspaces and persistent semantic memory, so working files, key decisions, and long-running Job logs remain shareable, reusable, and resumable after interruption. Across 12 benchmarks and 6 categories of real-world applications, CoworkOS proves highly competitive with frontier agent applications such as Codex and DeepSeek Harness. As a sustained-work case study, CoworkOS uses GLM-5.3 as its backbone to conduct RSI-driven automated post-training on Qwen3.6-35B-A3B. Over five rounds, the model's average score across eight benchmarks rose from 33.19 to 42.95 (+9.76). Looking ahead, we believe CoworkOS opens a meaningful path toward general cowork-agent intelligence.",
      "upvotes": 100,
      "github_stars": 125,
      "github_repo": "https://github.com/RUC-NLPIR/CoworkOS",
      "project_page": "https://coworkos-ai.github.io",
      "comments": 4,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.03178",
      "arxiv_url": "https://arxiv.org/abs/2611.03178",
      "title_ja": "CoworkOS: 実世界の自動化に向けたエージェント同僚のスケーリング",
      "summary_ja": "戦略決定と実行管理を分離した3層アーキテクチャにより、複雑なタスクの代行や同期・非同期の連携を可能にする長期業務用の汎用基盤。"
    },
    {
      "id": "2611.05275",
      "title": "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems",
      "abstract": "Artificial general intelligence (AGI) requires a method that can understand, generate, reason, and act across diverse domains and modalities. Rather than relying on a single model to master every capability, a promising path toward AGI now is to orchestrate a heterogeneous ecosystem of specialized models, tools, and policies (candidates) into a unified AI system. At the heart of this vision lies a fundamental question: how can an AI system dynamically select and coordinate the most capable candidate for each task while balancing performance and computational cost? In this work, we present Route Anything, a unified framework for studying model and policy routing across general-purpose AI systems. We develop a unified theoretical foundation that characterizes optimal routing under quality--cost trade-offs and establishes how the information available to a router determines its attainable performance. To systematically investigate routing across diverse capabilities, we first construct an omni-modal trajectory matrix spanning 25 benchmarks across language understanding, image, video, and speech generation, coding and workplace agents, and robotic manipulation, comprising 374,401 scored runs from 452 candidate configurations. Building on this framework, we train and test different routers to investigate the potential of omni-modal model routing, the capabilities of learned routers, and the conditions under which routing improves efficiency. Our results reveal substantial opportunities for capability orchestration: per-input oracle routing outperforms the best fixed candidate by 5.4 points, and learned routers outperform it by 0.3 points across 16 benchmarks, by 2.1 points on video generation, and by 1.1 points on robot manipulation while using 24% less policy time. More importantly, routing raises efficiency by 8.82x on average compared with the reference model.",
      "upvotes": 85,
      "github_stars": 11,
      "github_repo": "https://github.com/InfRec-Cardinal/route-anything",
      "project_page": "https://mikeeeeeeeeeeeeee.github.io/RouteAnything",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.05275",
      "arxiv_url": "https://arxiv.org/abs/2611.05275",
      "title_ja": "Route Anything: 汎用AIシステムにおけるモデルおよびポリシーのルーティング研究",
      "summary_ja": "性能とコストを最適化しつつ、タスクごとに最適な専門モデルやツールを動的に選択・調整する統合ルーティングフレームワークを提示。"
    },
    {
      "id": "2611.06728",
      "title": "Turns Matter: Advancing Streaming Video RL via Turn-Level Credit",
      "abstract": "Streaming video understanding requires models to repeatedly decide whether to respond or continue observing. Recently, Group Relative Policy Optimization (GRPO) has been applied to this setting, with existing approaches emphasizing reward design while retaining a single trajectory-level advantage across turns. Such shared credit can reinforce redundant replies after earlier successes and discourage useful follow-ups after earlier failures. We propose TurnWise, a turn-level GRPO framework that aligns learning with individual streaming decisions. TurnWise addresses the mismatch between trajectory-level feedback and turn-level interaction, promoting informative responses and reducing redundancy. Specifically, turn-level credit assignment uses silence-completed prefix scoring to construct group-relative advantages from each decision's remaining return, separating its learning signal from earlier rewards. Turn-mean policy optimization averages token losses within each turn and then across turns, giving response and waiting decisions equal weight regardless of output length. These complementary designs improve streaming policy learning without a learned critic or additional rollouts. Extensive experiments show our method outperforms prior RL approaches for streaming video understanding.",
      "upvotes": 83,
      "github_stars": 63,
      "github_repo": "https://github.com/XD111ds/turn-wise-rl",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.06728",
      "arxiv_url": "https://arxiv.org/abs/2611.06728",
      "title_ja": "Turns Matter: ターンレベルのクレジットによるストリーミングビデオRLの進化",
      "summary_ja": "ターンごとの判断に報酬を割り当てることで、ストリーミング動画理解における冗長な応答を抑え、状況に応じた有用な追跡行動を促進。"
    },
    {
      "id": "2610.00854",
      "title": "Are Frontier VLM Agents Ready to Be Robot Generalists? An Empirical Study with the Embodied Agent Arena",
      "abstract": "A robot generalist must interpret a scene, act on it, and satisfy every condition of a task. How far do frontier vision-language models (VLMs) meet these demands? We introduce Embodied Agent Arena, evaluating ten VLM agents across Geometry, Spatial Reasoning, Affordance, Task Planning, and Manipulation. Its 1,000 cases combine 32 established sources with GeoProbe, our 168-case benchmark for camera, motion, depth, and scale estimation. A minimal harness leaves task decisions to the model through source-native interfaces. Closed-weight models lead all five domains, whereas open-weight VLMs show useful spatial reasoning but substantially lower planning and manipulation success. Beneath these averages, similar geometric errors conceal different scale and shape distortions, and valid region estimates need not identify usable action points. During execution, agents can achieve early subgoals yet lose object control, bind an action to the wrong receiving region, or stop before the required physical state holds. Additional computation does not uniformly resolve these failures: code repair can restore execution without completing the task, while self-review can reverse correct judgments. Failure costs also differ: the strongest planners concentrate failed-token expenditure in prolonged body-control tasks, whereas other models fail broadly across procedures. Matched traces show how successful recovery uses feedback to restore a missing prerequisite and advance the remaining task.",
      "upvotes": 81,
      "github_stars": 22,
      "github_repo": "https://github.com/embodied-agent-arena/embodied-agent-arena",
      "project_page": "https://embodied-agent-arena.github.io/embodied-agent-arena/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.00854",
      "arxiv_url": "https://arxiv.org/abs/2610.00854",
      "title_ja": "最先端VLMエージェントはロボットのジェネラリストになれるか？Embodied Agent Arenaによる実証研究",
      "summary_ja": "10種のVLMを32のソースに基づくベンチマークで評価し、空間推論能力は高いが計画や操作の成功率には依然として大きな課題があることを解明。"
    },
    {
      "id": "2611.00617",
      "title": "Words Caught in the Heart: Simulating Person-Specific Expression for Self-Opaque Clients in Psychotherapy",
      "abstract": "Psychotherapy clients may experience distress before they can coherently describe it, and their expression changes with emotion, perceived safety, and trust. Large language model-based client simulators often rely on clinically organized case descriptions, which can encourage responses explaining the client's difficulties more clearly than their current understanding warrants. We propose Pandora, a psychotherapy client simulation framework that models how psychological experience becomes situated, individual expression. Pandora updates psychological and relational states in response to therapist interventions, constructs subjective appraisals and attributions, and plans response content and strategy. A separate expression planner combines these decisions with language patterns distilled from the client's utterances to guide linguistic realization. We evaluate Pandora against five baselines on 115 cases from four counseling and motivational interviewing datasets. It achieves the highest expression similarity and overall disclosure-alignment score among the compared systems. In a four-evaluator study of 45 matched disclosure items, Pandora receives AI-like judgments in 7.2% of ratings, compared with 43.3--67.2% for the baselines and 35.6% without expression planning. The ablation also reduces expression similarity. These results support explicit expression planning in client simulation to improve alignment with individual language patterns and reduce perceived AI-like expression in the evaluated setting.",
      "upvotes": 77,
      "github_stars": 0,
      "github_repo": "https://github.com/whunextgen/Pandora",
      "project_page": "https://clain.org/Pandora/",
      "comments": 2,
      "org": "CLAIN-WHU",
      "url": "https://huggingface.co/papers/2611.00617",
      "arxiv_url": "https://arxiv.org/abs/2611.00617",
      "title_ja": "Words Caught in the Heart: 心理療法における言語化困難なクライアントの個人特性シミュレーション",
      "summary_ja": "心理状態や信頼関係に応じて主観的な解釈や発言を変化させ、自分の苦しみを上手く説明できない心理療法の患者を模倣するシミュレーター。"
    },
    {
      "id": "2610.40191",
      "title": "Video Generation Meets Agent Harness: Agentic Video Generation, Agentic World Modeling and Recursive Self-Improvement",
      "abstract": "Video generation is shifting from end-to-end synthesis toward agentic generation, where planning, tool use, and feedback enable coherent, controllable multi-shot videos. In parallel, video world models provide action-conditioned observations and predicted futures, serving as interactive environments for agents. We study their intersection through the agent harness: an executable runtime that constructs context, exposes tools, maintains state, routes feedback, and manages budgets around video models. This report examines three directions. First, agentic video generation, where harnesses coordinate scripting, shot planning, asset management, production, and editing, alongside the evaluation challenges of these systems. Second, agentic world modeling, where harnesses mediate observation, control, execution, and state. We discuss hybrid designs in which game engines or agent-written programs maintain world state while video models render observations, and how agents and world models can mutually evaluate and improve one another. Third, recursive self-improvement (RSI) in video model development, distinguishing output revisions, updates to harness state, generator parameters, and evaluators, and changes to the improvement procedure itself. We identify how these improvements feed back into subsequent development. Across these directions, we analyze essential agent capabilities, including audiovisual perception, long-horizon planning, memory, code-based interaction, feedback-guided control, skill reuse, and multi-agent coordination. We conclude with challenges in autonomous video production, lifelong memory, programmable hybrid control, autonomous model development, provenance, cost accounting, and evaluation linking video quality and task performance to sustained improvements in models and harnesses.",
      "upvotes": 77,
      "github_stars": 54,
      "github_repo": "https://github.com/agentic-videogen/awesome-agentic-videogen",
      "project_page": "https://agentic-videogen.github.io/",
      "comments": 2,
      "org": "Video Rebirth",
      "url": "https://huggingface.co/papers/2610.40191",
      "arxiv_url": "https://arxiv.org/abs/2610.40191",
      "title_ja": "ビデオ生成とエージェント・ハーネスの融合：エージェント型ビデオ生成と世界モデル",
      "summary_ja": "実行環境「ハーネス」を用いて動画モデルの計画やツール利用を管理し、一貫性のある動画生成や対話的な世界モデルの構築を目指す研究。"
    },
    {
      "id": "2611.02737",
      "title": "MoviEdit: Long-form Multi-Shot Video Editing Made Easy",
      "abstract": "Long-form multi-shot video editing requires an intended edit to remain coherent across abrupt changes in scene, viewpoint, and subject appearance, while processing substantially longer visual context than conventional single-shot editors. We introduce MoviEdit, an end-to-end framework for scalable long-form multi-shot video editing that jointly addresses the challenges of data, modeling, and evaluation. To provide cross-shot supervision data at scale, we develop automatic data-generation pipelines spanning synchronized multi-view footage, real-world multi-shot videos, and generated multi-shot content, yielding 87K paired editing videos without manual annotation. Architecturally, MoviEdit employs a cascaded bidirectional-autoregressive design: a lightweight bidirectional stage first establishes a globally coherent editing draft over a spatiotemporally compressed representation, which is then autoregressively propagated and refined over the full video. We further introduce MoviEdit-Bench, a dedicated benchmark for systematic evaluation of long-form multi-shot video editing. Extensive experiments show that MoviEdit substantially outperforms existing open-source models and performs on par with industry frontier models across text-guided and image-guided editing. Visit our project page for complete results and to access the benchmark: https://multi-shot-edit.github.io/",
      "upvotes": 74,
      "github_stars": 15,
      "github_repo": "https://github.com/adobe-research/MoviEdit-Bench",
      "project_page": "https://multi-shot-edit.github.io/",
      "comments": 2,
      "org": "Adobe",
      "url": "https://huggingface.co/papers/2611.02737",
      "arxiv_url": "https://arxiv.org/abs/2611.02737",
      "title_ja": "MoviEdit: 長尺マルチショット動画編集の簡易化",
      "summary_ja": "8.7万件の自動生成ペアデータと専用のアーキテクチャにより、視点や場面が急変するマルチショット動画の整合性を保った編集を実現。"
    },
    {
      "id": "2611.04916",
      "title": "Behind Video Generation: Observations and Insights on Multimodal Understanding from Kling",
      "abstract": "Video generation has progressed from isolated clips to coherent short-form audiovisual sequences, and the bottleneck is shifting from rendering to semantic control. This report summarizes the observations and insights on multimodal understanding gained from successive generations of Kling. We argue that generation quality is the projection of multimodal understanding through the entire data--conditioning--alignment--evaluation chain, and we examine this chain module by module. Kling-MLLM, a shared multimodal foundation model that unifies image, video, audio, synchronized audio--video, and interleaved inputs, is specialized for each downstream module. Because a DiT is trained on far fewer training samples than a language model, we treat captioning as a semantic contract that maximizes description density, and extend it to reference-grounded captioning that makes reference bindings explicit. Prompt enhancement translates user intent into this caption distribution: basic PE is derived from captions of compelling videos and refined with text-level and generator-in-the-loop reinforcement learning, while agentic PE refines the story and retrieves compelling examples. We show that a reliable text encoder comes from perceptual training rather than from stronger language ability, and that candidates can be screened from text alone before end-to-end training. Reward modeling pairs a general reward model for explainable, localized critiques with a decision reward model for fast multidimensional scoring, treating perceptual bandwidth as a first-class design parameter. Finally, we review task-specific automatic evaluation, focusing on protocols that expose scoring shortcuts and help trace failures to their upstream source. We hope these lessons offer practical guidance for building the understanding stack behind controllable video generation.",
      "upvotes": 65,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://klingai.com/app",
      "comments": 2,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.04916",
      "arxiv_url": "https://arxiv.org/abs/2611.04916",
      "title_ja": "ビデオ生成の舞台裏：Klingから得られたマルチモーダル理解の知見",
      "summary_ja": "動画生成の品質はマルチモーダル理解の投影であるとし、データ・条件付け・評価の全工程におけるモデル最適化の知見を公開。"
    },
    {
      "id": "2610.39497",
      "title": "Does Scaling Toward AGI Depend on What System-1 Lets System-2 Execute?",
      "abstract": "Progress toward artificial general intelligence (AGI) has largely relied on scaling a resource-intensive executive, System-2, through larger models, more data and compute, longer reasoning, and more agents. We ask whether the next stage may come instead from co-designing it with System-1, a lightweight, semantically aware predictor that evaluates candidate interactions before execution, so that System-2 acts only on those worth their cost. Our answer is a qualified yes. We study conditional interaction, a predict--gate--execute--update loop: System-1 estimates each candidate's utility, System-2 executes those admitted by an adaptive threshold, and the outcomes update System-1. The loop spans training, test-time reasoning, adaptive decision-making, and agentic tool use, with utility and cost defined by the application. Under ideal screening and equal execution costs, execution compute falls by a factor approaching 1/ρ_u, where ρ_u is the density of utility-relevant interactions (cost-weighted when costs differ); prediction errors, exploration, and distribution shift reduce the saving. We bound selection regret by predictor error and the utility margin. These results motivate our central hypothesis: ρ_u is a measurable coordinate of scaling efficiency and makes informative compute a better description of scaling than total compute.",
      "upvotes": 64,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cheemswang.github.io/blogs/sys1-sys2-codesign.html",
      "comments": 3,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2610.39497",
      "arxiv_url": "https://arxiv.org/abs/2610.39497",
      "title_ja": "AGIへのスケーリングはSystem-1がSystem-2に何をさせるかに依存するか？",
      "summary_ja": "軽量なSystem-1が実行の価値を予測し、高コストなSystem-2の動作を制限することで、効率的に性能を向上させる協調設計を提案。"
    },
    {
      "id": "2611.06918",
      "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
      "abstract": "Vision-language-action models are typically built on a simple premise: perception is first compressed by visual encoders, and action reasoning begins only afterwards. Yet manipulation often hinges on precisely the visual signals most vulnerable to this abstraction, e.g., local geometry, boundaries, depth, and subtle state changes. This raises a fundamental question: should action policies inherit a fixed visual endpoint, or directly access evolving visual computation? We introduce NEO-VLA, a structurally encoder-free vision-language-action framework. Images are tokenized by lightweight patch convolutional layers and evolve jointly with language throughout the backbone, allowing a flow-matching action expert to draw from instruction-conditioned visual representations at different depths. This simple change reveals a consistent pattern. Native architectures outperform encoder-based counterparts under controlled comparisons; full fine-tuning reduces but does not erase the gap, and additional scale alone cannot recover it. More strikingly, layer-wise probing shows that the action-critical signals often peak well before the final visual representation. Across diverse manipulation settings and distribution shifts, NEO-VLA consequently achieves stronger and more robust control. Together, these results suggest that embodied control benefits from access to visual representations across the computational hierarchy, rather than a fixed encoder output.",
      "upvotes": 56,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.lmms-lab.com/posts/neo_vla/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.06918",
      "arxiv_url": "https://arxiv.org/abs/2611.06918",
      "title_ja": "ピクセルからアクションへ - ネイティブな視覚と言語と行動のポリシーに向けて",
      "summary_ja": "視覚情報を固定のベクトルに圧縮せず、軽量な畳み込み層を介して言語と同時に処理することで、細かな幾何学的特徴を捉えるロボット制御。"
    },
    {
      "id": "2611.04814",
      "title": "Think Less, Locally: Local Preference Learning for Reasoning Compression",
      "abstract": "Large reasoning models achieve strong performance on challenging tasks, but their long chain-of-thought often incurs substantial inference costs by continuing to deliberate after sufficient information has been obtained. Existing reasoning compression methods primarily operate on reasoning trajectories, paying less attention to the local decision of whether further reasoning is necessary given the current state. We propose LoCo, a local preference learning method for reasoning compression. LoCo detects candidate overthinking states from the model's own traces, freezes the corresponding reasoning prefixes, regenerates shorter verified continuations from the same states, and trains on the resulting state-conditioned preference pairs with DPO. This formulation teaches the model when to continue reasoning and when to conclude, rather than simply encouraging shorter trajectories overall. We construct training data entirely from self-generated mathematical traces and evaluate LoCo on five mathematical and three code generation benchmarks. LoCo reduces completion length by 41.7\\%--45.4\\% on mathematics and 23.4\\%--36.3\\% on code, while maintaining or improving accuracy and achieving the best AUC across all code benchmarks. LoCo consistently improves the accuracy-efficiency trade-off on mathematics and transfers effectively to code generation despite math-only training, demonstrating the cross-domain generality of local preference learning for reasoning compression. The code and model will be publicly released at https://github.com/MuyaoYuan/LoCo.",
      "upvotes": 56,
      "github_stars": 9,
      "github_repo": "https://github.com/MuyaoYuan/LoCo",
      "project_page": "https://huggingface.co/MuyaoYuan/LoCo-7B",
      "comments": 7,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.04814",
      "arxiv_url": "https://arxiv.org/abs/2611.04814",
      "title_ja": "Think Less, Locally: 推論圧縮のための局所的な嗜好学習",
      "summary_ja": "モデルが「考えすぎ」ている状態を検出し、情報の追加が必要かどうかを局所的に判断させることで、推論コストを大幅に削減する学習手法。"
    },
    {
      "id": "2611.05377",
      "title": "DreamX: Video Diffusion Model is a Universal Latent Action Learner",
      "abstract": "Learning a universal action representation from video requires modeling dynamics that are consistent across different executions of the same action yet invariant to changes in embodiment and appearance. Existing latent action models infer actions from visual transitions, but their representations often entangle the underlying action with irrelevant visual variations, limiting transfer across embodiments. We introduce DreamX, which repurposes a pretrained video diffusion model as a universal latent action learner. Our approach extracts compact latent actions from the video model's rich spatiotemporal features, compressing each latent video frame by 300times (1{,200 rightarrow 4} tokens). In addition, by leveraging the video model's generative prior, these latent actions capture action-relevant dynamics disentangled from visual appearance. The resulting latent space serves as a shared action interface across embodiments (human and robot), environments, and action parameterizations. On LARY-Bench, DreamX achieves state-of-the-art performance among latent action models. Moreover, actions encoded in one setting remain effective in another: the latent space supports any-to-any video transfer and zero-shot action transfer across diverse embodiments and environments. Furthermore, this shared interface also enables policy learning in a compact latent action space, reducing the computational cost of video-diffusion-based policies.",
      "upvotes": 54,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cvlab-kaist.github.io/DreamX/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05377",
      "arxiv_url": "https://arxiv.org/abs/2611.05377",
      "title_ja": "DreamX: ビデオ拡散モデルは汎用的な潜在アクション学習器である",
      "summary_ja": "学習済みのビデオモデルから外見に依存しないアクション表現を抽出・圧縮し、異なるロボット間でも転用可能な動作制御を実現。"
    },
    {
      "id": "2611.06910",
      "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
      "abstract": "AI agents are playing an increasingly important role in physics research. However, existing physics benchmarks only evaluate fixed questions, isolated sub-tasks, or paper reproduction with given solutions, and rarely check research quality alongside correctness. We introduce FrontierPhysics, an end-to-end benchmark with 56 tasks made by 42 physicists based on their own research, covering nine domains across theoretical, computational, and experimental physics. Each task requires agents to review the literature, develop a research plan, conduct research and experiments, and produce structured outputs and scientific manuscripts. Combining deterministic verifiers with expert-authored rubrics, FrontierPhysics evaluates whether agents' research is correct and publishable. Across 22 models in 26 configurations, no configuration passes more than 46 of its 168 rollouts. Manual review of agent trajectories shows that frontier agents' main weaknesses are insufficiently rigorous reasoning and limited expert intuition, rather than gaps in physics knowledge or execution errors.",
      "upvotes": 47,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.benchflow.ai/frontierphysics",
      "comments": 0,
      "org": "BenchFlow",
      "url": "https://huggingface.co/papers/2611.06910",
      "arxiv_url": "https://arxiv.org/abs/2611.06910",
      "title_ja": "FrontierPhysics: エンドツーエンドの物理学研究に向けたエージェント評価",
      "summary_ja": "物理学者が作成した56の課題を用い、文献調査から実験計画、執筆までを行うAIエージェントの物理研究能力を包括的に測定する指標。"
    },
    {
      "id": "2611.05193",
      "title": "Factorized MLLM Embeddings for Composed Image Retrieval",
      "abstract": "Composed Image Retrieval (CIR) aims to retrieve a target image given a reference image and a modification text. Although recent approaches leveraging Multimodal Large Language Models (MLLMs) have shown significant progress, we argue that the MLLM's compositional understanding remains underutilized. This stems from directly mapping composed queries into a retrieval embedding via contrastive supervision alone, without explicitly resolving the intended visual modifications. In this work, we introduce Factorized MLLM Embeddings (FactEmbed), which decouples compositional query comprehension from building discriminative embeddings. Rather than directly projecting the composed query into a single embedding without internal reasoning, FactEmbed employs a set of factorized latents that simulate the intended visual modifications via an intermediate target imagination objective. This process encourages the latents to ground into target semantics before forming discriminative representations for retrieval. Subsequently, to propagate these factorized representations throughout the model for retrieval, we optimize a factor-level contrastive loss while distilling the decomposed representations into a deeper attention layer of the MLLM. Finally, for efficient inference, we retain the [EOS] token to establish a global-level embedding on top of these factorized latents, while we exploit the mean-pooled factorized latents to rerank a short candidate list at negligible cost, as both are produced by the same forward pass. Extensive evaluations demonstrate that FactEmbed outperforms prior works across CIR benchmarks.",
      "upvotes": 47,
      "github_stars": 13,
      "github_repo": "https://github.com/cvlab-kaist/FactEmbed",
      "project_page": "https://cvlab-kaist.github.io/FactEmbed/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05193",
      "arxiv_url": "https://arxiv.org/abs/2611.05193",
      "title_ja": "合成画像検索のための因子分解MLLM埋め込み",
      "summary_ja": "元画像と修正指示を個別に理解し統合することで、単純な対照学習よりも精度の高い画像修正意図の把握と検索を可能にする手法。"
    },
    {
      "id": "2611.02497",
      "title": "RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild",
      "abstract": "General-purpose robot policies must work across robots, tasks, and environments, yet the variation that makes physical trials informative also makes them difficult to reproduce. We introduce RoboColosseum, a distributed evaluation framework that combines unified policy serving and standardized protocols across a network of locally operated robots in diverse environments. Our initial study evaluates five vision-language-action (VLA) policies and three frontier AI agents across four embodiments (SO-101, Franka, Bimanual-YAM, and G1 Humanoid). The Open Track compares models without task-specific adaptation in blinded, pairwise trials under matched local conditions. The Fine-tune Track measures how well VLA policies adapt to 20 tasks across all four embodiments when each policy receives the same 100 demonstrations per task. Across 5,699 pairwise Open Track comparisons at 124 sites, frontier agents rival specialized VLA policies, while all systems struggle to complete open-world tasks reliably. After fine-tuning, GR00T N1.7 leads on SO-101 and pi0.5 leads on Franka and Bimanual-YAM. Policy rankings show weak agreement across embodiment-specific task suites (Kendall W = 0.24). Open Track rankings poorly predict relative performance after fine-tuning, with substantial rank reversals on all three embodiments shared between tracks. Measuring partial progress reveals differences that task success alone misses. On the G1 Humanoid, no policy completes any of the five tasks, yet average progress ranges from 13.3% to 23.2% across policies. Open Track rankings stabilize as trials accumulate, and active matchmaking achieves comparable ranking agreement with substantially fewer physical trials than uniform sampling. These results show how distributed physical evaluation can reveal where robot policies generalize, how well they adapt to new tasks, and how far they progress on tasks they fail to complete.",
      "upvotes": 47,
      "github_stars": 3,
      "github_repo": "https://github.com/RoboColosseum/robocolosseum-client",
      "project_page": "https://robocolosseum.ai/",
      "comments": 2,
      "org": "Hugging Face",
      "url": "https://huggingface.co/papers/2611.02497",
      "arxiv_url": "https://arxiv.org/abs/2611.02497",
      "title_ja": "RoboColosseum: 野生環境における物理的知能の大規模評価",
      "summary_ja": "異なる環境の複数のロボットを統一プロトコルで接続し、VLAポリシー等の性能を公平かつ大規模に比較できる分散型評価フレームワーク。"
    },
    {
      "id": "2611.03424",
      "title": "IdeaTaste: Do LLMs Share the Research Taste of Human Researchers?",
      "abstract": "Research taste, the judgment of what to read, which problems to pursue, and which methods to try, increasingly shapes the work of AI scientists, yet it remains far less understood than their ability to execute research. We introduce IdeaTaste, a benchmark that scores an LLM by how closely the research proposals it writes from a literature snapshot frozen at 2025 match the work the same communities published in 2026. Our experiments span six contemporary language models and four research areas from established to emerging fields, covering more than 90{,}000 proposals in total. LLM agents fall well short of human communities in both the literature they cite and the ideas they state, reaching about 26\\% of the human level on citation matching and only 18\\% on idea matching. Their populations can cite as diversely as a community and take up its tasks and methods, yet rarely arrive at the concrete approaches and research plans it pursues. Neither richer field context nor larger populations substantially close this gap. In blinded expert review, AI proposals trail the 2026 papers least in presentation and most in expected success, echoing their gap in concrete approaches, and those whose ideas no human paper shares fare worst, suggesting weaker directions rather than overlooked opportunities. These results indicate that the main bottleneck in AI research taste lies less in finding the directions a community works on than in turning them into the concrete approaches it goes on to pursue. We release IdeaTaste as an open, continuously updated leaderboard (https://cxcscmu.github.io/IdeaTaste) that benchmarks contemporary AI proposals against future publication cycles.",
      "upvotes": 47,
      "github_stars": 18,
      "github_repo": "https://github.com/cxcscmu/IdeaTaste",
      "project_page": "https://cxcscmu.github.io/IdeaTaste/",
      "comments": 3,
      "org": "Carnegie Mellon University School of Computer Science",
      "url": "https://huggingface.co/papers/2611.03424",
      "arxiv_url": "https://arxiv.org/abs/2611.03424",
      "title_ja": "IdeaTaste: LLMは人間の研究者と同じ研究センスを共有しているか？",
      "summary_ja": "2025年までの論文データから提案した研究案が、将来の学会発表とどれだけ一致するかで、LLMの「研究の目利き」を評価する指標。"
    },
    {
      "id": "2611.03126",
      "title": "CUA-Master: Scaling Computer-use Agents through Open-World Recursive Improvements",
      "abstract": "Despite recent advances in CUAs, their development remains constrained by the limited diversity, controllability, and reliability of interaction data. Moreover, conventional optimization pipelines lack iterative feedback, while existing recursive improvement approaches often rely on self-generated experiences, limiting ability expansion and yielding diminishing returns. To address these challenges, we introduce CUA-Master, a nested double-loop recursive improvement framework. At the system level, an outer world-data-model flywheel continuously incorporates open-world corpus and leverages evolving model weaknesses to guide subsequent data construction and optimization iterations. At the data level, an inner flywheel couples open-world seeding and autocatalytic propagation. The former mines authentic workflows as seed tasks from instructional videos, and employs visual-semantic dual-path trajectory reconstruction; The latter transforms these seeds into reusable primitives for controllable synthesis of diverse, complex, and verifiable tasks. To enable efficient and reliable trajectory collection, we further introduce a feedback-guided snapshot-rollback retry mechanism in various real environments. Extensive experiments demonstrate that CUA-Master-27B achieves competitive performance across GUI-only and GUI-CLI hybrid benchmarks, scoring 80.2 on OSWorld Verified, 36.9 on OSWorld 2.0, 43.9 on WeaveBench, and 25.0 on Agents' Last Exam. Our framework also substantially improves the quality and efficiency of data synthesis, and exhibits continuous gains across recursive iterations.",
      "upvotes": 47,
      "github_stars": 121,
      "github_repo": "https://github.com/xlyu0106/CUA-Master",
      "project_page": "https://xlyu0106.github.io/CUA-Master/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03126",
      "arxiv_url": "https://arxiv.org/abs/2611.03126",
      "title_ja": "CUA-Master: オープンワールドの再帰的改善によるPC操作エージェントのスケーリング",
      "summary_ja": "システムの弱点からデータを自動構築する外部ループと、環境のフィードバックで学習する内部ループにより、PC操作の能力を継続的に拡張。"
    },
    {
      "id": "2611.01560",
      "title": "Democratizing Robot-Use Agents: A Unified Harness with Open Models",
      "abstract": "Robot-use Agents (RUAs) have shown promising zero-shot manipulation capabilities, but reliance on frontier, proprietary models limits research into further training. To democratize RUA research, we introduce uni-robot-agent, a unified harness for competitive open-weight robot use that supports further training. Without privileged inputs, an out-of-the-box Qwen3.8-Flash-Next achieves a RoboDojo Score of 31.39, surpassing the published GPT-6 Astra-RoboProbe result of 28.97 and many VLA/WAM baselines, and performs competitively on 19 real-world tasks. Our analysis across model generations, families, and sizes links effective robot use to four general capabilities, suggesting that future RUA training should develop them jointly.",
      "upvotes": 47,
      "github_stars": 230,
      "github_repo": "https://github.com/Open-RUA/uni-robot-agent",
      "project_page": "https://openrua.ai/uni-robot-agent",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.01560",
      "arxiv_url": "https://arxiv.org/abs/2611.01560",
      "title_ja": "ロボット操作エージェントの民主化：オープンモデルを用いた統合ハーネス",
      "summary_ja": "商用モデルに匹敵する性能を持つオープンな環境構築ツールを公開し、独自の追加訓練や評価を可能にすることでロボット研究の参入障壁を低減。"
    },
    {
      "id": "2611.03233",
      "title": "Axion 1.0: Open Agent Foundation Models, Simplified",
      "abstract": "We introduce Axion 1.0, a fully open agent foundation model that combines strong and broad agentic capabilities with a remarkably simple training recipe. Axion 1.0 is trained in only three stages: two lightweight supervised fine-tuning stages followed by reinforcement learning, without dedicated mid-training, direct preference optimization (DPO), or on-policy distillation (OPD). The first SFT stage develops strong self-contained reasoning through model-aware data construction, where we synthesize challenging problems and adversarially strengthen them based on the base model's own successful solution strategies. The second stage extends these capabilities to tool-dependent reasoning through a scalable pipeline for constructing diverse and automatically verifiable tasks grounded in real-world data sources and deterministic computation. Finally, reinforcement learning further strengthens long-horizon reasoning and interaction with external tools and environments. Despite this compact training recipe, Axion 1.0 achieves strong performance across a broad suite of agentic benchmarks and is competitive with leading commercial models on several of them. Equally importantly, Axion 1.0 is open beyond model weights: we release the complete recipe, including data construction, generation, filtering, verification, prompts, and training code, enabling the entire development process to be reproduced and extended. Axion 1.0 demonstrates that strong agent foundation models can be both open and simple, offering a practical and reproducible path toward advancing open agentic intelligence.",
      "upvotes": 46,
      "github_stars": 56,
      "github_repo": "https://github.com/bytedance/axion1_0",
      "project_page": "https://axion1-0.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03233",
      "arxiv_url": "https://arxiv.org/abs/2611.03233",
      "title_ja": "Axion 1.0: 簡素化されたオープンなエージェント基盤モデル",
      "summary_ja": "複雑な強化学習の調整を排除し、独自の3段階の学習レシピのみで高い推論力とツール利用能力を実現したオープンな基盤モデル。"
    },
    {
      "id": "2610.22740",
      "title": "R^2Orch: Recursive Self-Improvement for Agent Orchestration via Self-Play within a Skill-Internalization Loop",
      "abstract": "In recent years, agentic orchestration has been widely applied to solve complex human tasks. However, existing orchestration learning still faces key challenges, including hand-designed curricula, advantage collapse when a task's rollouts all reach the same outcome, and unreliable evaluation signals that judge each skill by one noisy score. To address these challenges, we propose R^2Orch, a new paradigm of Recursive Self-Play Orchestration: an inner loop of self-play that improves the orchestrator on self-chosen tasks, and an outer loop that improves how the inner loop improves. To support this paradigm, we introduce Recursive Learnability, a training objective that rewards a Proposer for choosing tasks whose rollouts keep reaching different outcomes as skills are withdrawn. Built on this objective, we further propose Skill Withdrawal, in which the outer loop withdraws each skill once a controlled evaluation within self-play shows that the orchestrator performs as well without it. Moreover, the two loops form one cycle: failures are distilled into skills, skills into parameters, and withdrawals lead the Proposer to new failures, so the orchestrator moves toward zero-skill deployment. Experimental results on twelve datasets show that R^2Orch consistently outperforms baselines across question answering, math, code, and interactive tasks. Our code is available at https://github.com/beita6969/R2Orch.",
      "upvotes": 46,
      "github_stars": 37,
      "github_repo": "https://github.com/beita6969/R2Orch",
      "project_page": "",
      "comments": 3,
      "org": "Chinese University of Hong Kong, Shenzhen",
      "url": "https://huggingface.co/papers/2610.22740",
      "arxiv_url": "https://arxiv.org/abs/2610.22740",
      "title_ja": "R^2Orch: スキル内面化ループ内での自己対戦によるエージェント・オーケストレーションの再帰的改善",
      "summary_ja": "エージェントの連携を改善する学習と、その学習プロセス自体を改善する外部ループを組み合わせ、複雑なタスクの解決能力を自己進化させる。"
    },
    {
      "id": "2610.42149",
      "title": "Latent Reasoning in Continuous Space for Unified Multimodal Models",
      "abstract": "Unified Multimodal Models (UMMs) achieve remarkable success on diverse multimodal understanding and generation tasks, yet they still struggle to effectively leverage language-based chain-of-thought reasoning for image generation. As a result, existing reasoning-augmented UMMs often fail to inherit the test-time scaling and fine-grained controllability observed in large language models. We attribute this failure to a fundamental modality mismatch: reasoning is performed in a discrete token space, whereas image generation operates in a continuous space. To bridge this gap, we introduce a Latent Reasoning framework in Continuous space (LARC), which alleviates the token-level bottleneck by reasoning over continuous hidden states. Specifically, the training framework consists of two stages: (i) curriculum supervised fine-tuning (SFT), and (ii) information-gain reinforcement learning (RL). First, the curriculum SFT stage gradually converts token-level reasoning into latent reasoning. Subsequently, the information-gain RL stage self-evolves latent reasoning without ground truth supervision. Experiments across diverse text-to-image generation benchmarks show that LARC consistently improves generation quality, prompt following, and compositional fidelity. Notably, LARC achieves state-of-the-art performance on GenEval with a 7%p gain over BAGEL and demonstrates clear test-time scaling behavior, outperforming token-based generation under both parallel and sequential test-time scaling strategies.",
      "upvotes": 44,
      "github_stars": 10,
      "github_repo": "https://github.com/rootyJeon/LARC",
      "project_page": "https://rootyjeon.github.io/larc-umm/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.42149",
      "arxiv_url": "https://arxiv.org/abs/2610.42149",
      "title_ja": "統一マルチモーダルモデルに向けた連続空間における潜在的な推論",
      "summary_ja": "離散トークンでの思考と連続空間での画像生成の乖離を解消し、連鎖的な推論プロセスを通じて高品質な画像生成と制御を可能にする手法。"
    },
    {
      "id": "2611.02074",
      "title": "SWE-Trail: History-Guided Trajectory Collection for Coding Agent Training",
      "abstract": "Coding agents solve repository issues through long sequences of exploration, editing, and validation. These trajectories are increasingly used as post-training data, so how they are collected shapes what the trained model learns. A common approach is to sample multiple trajectories independently for each issue and then select or curate them. However, as more trajectories are sampled independently, later trajectories become increasingly redundant, even though earlier trajectories could guide where subsequent collection effort should be spent. A natural way to use this history is to expose it to the coding agent as advice. But training on such trajectories can make the model rely on advice that is unavailable at test time, creating a train-test mismatch. Instead, we argue that history should guide where collection effort is spent, while the coding agent decides what to generate. We introduce SWE-Trail, a trajectory collector that uses earlier trajectories to guide subsequent collection while keeping that history outside the coding agent's context. During a new rollout, SWE-Trail uses history to identify a state where additional collection effort may be useful. There, the coding agent proposes candidate next actions from its ordinary context, and SWE-Trail briefly executes them from the same checkpoint to decide which route continues. We evaluate collection approaches by training student models on the trajectories they produce. For a 124B student initialized from Ling-3.0-flash-base, SWE-Trail improves mean resolution over independent sampling by 2.33 and 1.60 percentage points on SWE-bench Multilingual and SWE-bench Pro, respectively. Without history, the same pipeline produces more resolved trajectories than independent sampling, but improves by only 0.11 points on Multilingual. These results show the value of using history to guide collection without exposing it to the coding agent.",
      "upvotes": 40,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Ant Group",
      "url": "https://huggingface.co/papers/2611.02074",
      "arxiv_url": "https://arxiv.org/abs/2611.02074",
      "title_ja": "SWE-Trail: コーディングエージェント訓練のための履歴誘導型軌跡収集",
      "summary_ja": "過去の失敗履歴を助言として活用しつつ、学習時にはその助言に依存しすぎないよう制御することで、効率的に高品質な訓練データを収集。"
    },
    {
      "id": "2611.05036",
      "title": "ToolSpace: Scaling Tool-Centric Environment Synthesis for Long-Horizon Agents",
      "abstract": "Large language models are deployed as long-horizon agents that compose diverse tools across MCP services into executable workflows. Existing MCP environment-scaling methods are data-centric: they first synthesize a database and scenario, then derive tools and tasks from them. As a result, tool interfaces may not match real ones, tool compositions are not grounded in execution, and tasks rarely span more than one environment. We propose ToolSpace, a tool-centric framework that reverses this order. ToolSpace mines data, state, and retry dependencies from adjacent calls in execution traces of real MCP services and open agent corpora, using deterministic rules rather than LLM judgment, and clusters the resulting weighted tool-composition graph into environments. Databases are synthesized only for state-mutating environments, while query and stateless tools replay recorded returns. ToolSpace then performs state-aware random walks with rollback and decompiles each chain into a natural-language task with assertion-based checks, keeping only samples that replay successfully from the initial state. Applied to AutomationBench and tau3-Bench Banking, the pipeline produces harder Pro versions on which 7 frontier models drop by up to 38.2 points. Across seven long-horizon tool-use benchmarks, ToolSpace raises Qwen3.6-35B-A3B from 23.0 to 41.0 average score (43.2 with RL) and GLM-5.2 from 44.6 to 56.6, on par with Claude Opus 5. Ablations show that execution-witnessed edges clearly outperform LLM-judged ones, and performance keeps improving with data and environment scale.",
      "upvotes": 39,
      "github_stars": 34,
      "github_repo": "https://github.com/dongguanting/ToolSpace",
      "project_page": "https://toolspace-agent.github.io/",
      "comments": 2,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.05036",
      "arxiv_url": "https://arxiv.org/abs/2611.05036",
      "title_ja": "ToolSpace: 長期実行エージェントのためのツール中心型環境合成のスケーリング",
      "summary_ja": "実際のサービス実行ログからツールの依存関係やデータを抽出し、複数のツールをまたぐ現実的なタスク環境を自動生成するフレームワーク。"
    },
    {
      "id": "2611.02897",
      "title": "PhotoGuider: Composition-Aware Cropping and 360^{circ} View Framing with Explainable Photographic Assessments",
      "abstract": "Traditional image cropping assumes the photograph already contains the composition worth keeping, and asks only where to crop. A full 360^{circ} scene offers no such guarantee: the viewing direction in a scene has to be discovered before anything can be framed. We present PhotoGuider, a measure-then-frame method that answers both questions with compact learned scorers over one shared set of composition-aware features. The designed features are extracted using foundation and task-specific vision models and structured into four photographic tokens: Subject, Composition, Aesthetics, and Integrity. Our MLLM explainer is fine-tuned to generate composition-related explanations conditioned on images and measured token assessments. To our knowledge, PhotoGuider is the first method to combine explicit composition-based direction selection in 360^{circ} panoramas with refined framing, camera-parameter output for native re-rendering, and measurement-conditioned explanations. On two standard 2D cropping benchmarks, PhotoGuider achieves the highest average mIoU performance against ground-truth crops. In a blind ranking study, 120 participants ranked three cropping methods over 100 panoramic scenes from the public Poly Haven HDRI library, placing our framings first in 53.2% of cases, against 27.3% and 19.5% for two strong alternatives. Project page: https://ntuneillee.github.io/research/photoguider/",
      "upvotes": 38,
      "github_stars": 54,
      "github_repo": "https://github.com/NTUneillee/PhotoGuider",
      "project_page": "https://ntuneillee.github.io/research/photoguider/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.02897",
      "arxiv_url": "https://arxiv.org/abs/2611.02897",
      "title_ja": "PhotoGuider: 説明可能な写真評価を用いた構図重視のクロッピングと360度視野フレーミング",
      "summary_ja": "360度全天球画像から最適な視点と構図を特定し、その選択理由を写真学的な要素に基づいて説明できるマルチモーダル評価システム。"
    },
    {
      "id": "2610.40738",
      "title": "Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use",
      "abstract": "A capable voice assistant must do more than recognize words; it must understand requests, reason over context, sustain conversations, and act through tools. We present Apriel Voice 27B Preview, an open speech-language model that unifies these capabilities within a shared reasoning backbone while retaining text and image input modalities. Built on the post-trained Gemma 4 26B-A4B checkpoint, Apriel Voice directly processes speech and generates both responses and tool calls without requiring a separate dialogue model. We introduce a two-stage training procedure to adapt the model to speech. The first stage establishes the speech interface, while the second jointly adapts the projector and backbone through supervised fine-tuning, text replay, and source-dependent cross-entropy and forward Kullback--Leibler divergence supervision. Automatically constructed speech-conditioned dialogues provide conversational training data, while local teacher serving, overlapping teacher and student computation, and fused full-vocabulary losses enable efficient online distillation. In thinking mode, Apriel Voice achieves a score of 98.90 on Big Bench Audio, 81.13 on Speech-BFCL, and a task success rate of 65.51% on τ-Voice, with a mean latency of 1.91 seconds. It also achieves 51.27% English EVA accuracy and 74.13% experience pass@1. Finally, we deploy Apriel Voice 27B Preview on a custom serving platform to support interactive voice interactions.",
      "upvotes": 37,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://servicenow-ai-apriel.hf.space/home",
      "comments": 2,
      "org": "ServiceNow-AI",
      "url": "https://huggingface.co/papers/2610.40738",
      "arxiv_url": "https://arxiv.org/abs/2610.40738",
      "title_ja": "Apriel Voice 27B Preview: 音声・推論・ツール利用を統合したオープンモデル",
      "summary_ja": "別の対話モデルを介さず、音声から直接推論やツール呼び出しを生成でき、テキストや画像入力も可能な270億パラメータの音声言語モデル。"
    },
    {
      "id": "2611.06483",
      "title": "What Does Multi-Turn Reinforcement Learning Really Improve in LLM Agents?",
      "abstract": "While multi-turn agentic reinforcement learning (RL) excels on long-horizon tasks, its performance gains remain highly sensitive to interaction constraints. Evaluating across sampling breadth K and interaction depth T via Pass@(K,T), we show that trajectory-level RL advantages depend on sufficient turn budgets, diminishing significantly when budgets tighten. Besides, agentic RL does not uniformly elevate single-step decision quality; rather, its strength concentrates in error recovery and long-horizon resilience. To mitigate the deployment risks caused by this budget dependence, we provide a preliminary discussion on the benefits and limitations of process supervision signals and introduce BudgetMix RL as an alternative that varies interaction budgets during training. Experiments demonstrate that BudgetMix RL achieves robust performance across diverse execution settings. Project Page: https://rethinking-agentic-rl.github.io/",
      "upvotes": 34,
      "github_stars": 16,
      "github_repo": "https://github.com/GaryStack/Rethinking-Agent-RL",
      "project_page": "https://rethinking-agentic-rl.github.io/",
      "comments": 2,
      "org": "Chinese Academic of Science Institute of Automation",
      "url": "https://huggingface.co/papers/2611.06483",
      "arxiv_url": "https://arxiv.org/abs/2611.06483",
      "title_ja": "複数ターン強化学習はLLMエージェントの何を向上させるのか？",
      "summary_ja": "複数ターンのRLは単一の意思決定の質を高めるのではなく、エラーからの回復力や長期的な粘り強さを改善することを実証的に解明。"
    },
    {
      "id": "2610.37257",
      "title": "GameVerse: A Minute-Scale Gameplay Dataset for Long-Horizon Interactive World Modeling",
      "abstract": "Recent advances in interactive world models have made it possible to generate controllable, dynamic environments from action inputs. Yet current models struggle to maintain coherence beyond roughly one minute of rollout, a limitation rooted not in model capacity but in the scarcity of long-horizon training data. Existing gameplay video datasets typically consist of clips under ten seconds, with captions that describe whole clips in coarse and undifferentiated text, which is insufficient for controllable long-horizon generation. We address this with GameVerse, a minute-scale gameplay video dataset purpose-built for long-horizon interactive world modeling. GameVerse contains 69.7K clips spanning 1,655 hours and 349.6 million frames across diverse first- and third-person gameplay, including 1,358 hours of continuous two-minute sequences, an order of magnitude longer than prior datasets. Clips pass through a unified pipeline of scene-consistent segmentation, quality filtering, camera pose estimation, and event-based caption annotation. Each clip is paired with a temporally stable camera trajectory that remains coherent across minutes, together with captions that separate static scene context from dynamic foreground events and align to event boundaries rather than fixed time windows. Comprehensive analysis shows that GameVerse surpasses existing public datasets in scale, diversity, and annotation quality. Experiments further demonstrate that training on GameVerse substantially extends the temporal horizon of interactive world models.",
      "upvotes": 34,
      "github_stars": 10,
      "github_repo": "https://github.com/kangverse/GameVerse",
      "project_page": "https://kangverse.github.io/GameVerse/",
      "comments": 2,
      "org": "Alaya Lab",
      "url": "https://huggingface.co/papers/2610.37257",
      "arxiv_url": "https://arxiv.org/abs/2610.37257",
      "title_ja": "GameVerse: 長期間の対話型世界モデルに向けた分単位のゲームプレイデータセット",
      "summary_ja": "従来の秒単位の断片的なデータではなく、操作指示を含む1分以上の長いゲーム動画データを提供し、一貫性のある世界モデルの構築を支援。"
    },
    {
      "id": "2611.02112",
      "title": "Order-Only On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student on its own generations by matching the teacher's token probabilities. These probabilities entangle two kinds of information: which tokens the teacher prefers, and how confident it is. The latter reflects the teacher's own capacity and calibration, which a smaller student may be unable to reproduce. Because the teacher temperature changes these values without changing the ordering, OPD is also sensitive to the temperature choice. We ask whether the teacher's ordering of candidate tokens is enough, and propose Order-Only On-Policy Distillation (O^{3}PD). At each student-generated prefix, O^{3}PD trains the student to reproduce the order of the teacher's top-K tokens, without fitting their probability values. The objective is therefore invariant to the teacher temperature and needs no temperature tuning. Across six teacher--student pairs, O^{3}PD outperforms OPD on the average over HMMT25, AIME24, and AIME25 in every pair, by up to 2.9 points, with gains of up to 5.6 points on AIME25. Other ranking losses yield similar gains, so the benefit comes from ordinal supervision itself. Analysis shows that O^{3}PD departs further from the teacher's probabilities than OPD, yet reproduces its ranking more faithfully and yields a stronger student. The ranking, not the probability values, thus carries the knowledge that on-policy distillation needs to transfer.",
      "upvotes": 34,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.02112",
      "arxiv_url": "https://arxiv.org/abs/2611.02112",
      "title_ja": "順序限定オンポリシー蒸留",
      "summary_ja": "教師モデルの確率値ではなく「どのトークンを好むか」の順序のみを学習することで、生徒モデルの無理な模倣を防ぎ効率的に知識を継承。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "Cult.fit builds operational muscle with Codex",
      "summary": "Cult.fit is using Codex to help teams across functions build tools, move faster, and change how work gets done.",
      "url": "https://openai.com/index/cultfit-builds-with-codex",
      "published": "2026-11-06T05:00:00+09:00",
      "title_ja": "Cult.fitがCodexで業務効率を向上",
      "summary_ja": "Codexを活用して独自ツールを構築し、各部門の業務スピード加速と作業プロセスの変革を実現。"
    },
    {
      "lab": "Hugging Face",
      "title": "New NVIDIA Cosmos 3 Open Models for Interactive World Simulation",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation",
      "published": "2026-11-06T04:35:16+09:00",
      "title_ja": "インタラクティブな世界シミュレーション向けの新型NVIDIA Cosmos 3オープンモデル",
      "summary_ja": "対話型の世界シミュレーションを可能にする、新しいオープンモデル「Cosmos 3」を公開。"
    },
    {
      "lab": "AlphaSignal",
      "title": "METR Finds Anthropic's AI-Assisted R&D Moving Twice as Fast",
      "summary": "An independent audit of Anthropic's internal R&D pipeline finds AI model progress has roughly doubled since late 2025, mostly driven by AI itself.",
      "url": "https://alphasignal.ai/news/metr-finds-anthropic-s-ai-assisted-r-d-moving-twice-as-fast",
      "published": "2026-11-06T03:36:37+09:00",
      "title_ja": "METRの調査でAnthropicのAI支援研究開発が2倍速に向上",
      "summary_ja": "外部監査により、AI自体の進化が寄与してAnthropic内部の研究開発速度が2025年後半から倍増したと判明。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Now Reads and Analyzes Your Bank Accounts",
      "summary": "Anthropic adds a read-only money hub to Claude that connects to US bank accounts through Plaid and answers spending questions in plain English.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-now-reads-and-analyzes-your-bank-accounts",
      "published": "2026-11-06T03:00:35+09:00",
      "title_ja": "AnthropicのClaudeが銀行口座の読み取りと分析に対応",
      "summary_ja": "Plaid経由で米国の銀行口座と連携し、支出に関する質問に自然な日本語（英語）で回答する機能を追加。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/",
      "published": "2026-11-06T02:05:16+09:00",
      "title_ja": "Gemini Omni 1.2 Flash：高速・低コストでより長い動画クリップに対応",
      "summary_ja": "高速かつ高いコストパフォーマンスを維持しつつ、より長時間の動画処理に対応した最新モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Australian universities are creating AI-native graduates",
      "summary": "Australian universities are expanding access to ChatGPT and bringing AI into teaching and learning to prepare students for an AI-enabled workforce.",
      "url": "https://openai.com/index/australian-universities-ai-native-graduates",
      "published": "2026-11-06T02:00:00+09:00",
      "title_ja": "オーストラリアの大学がAIネイティブな卒業生を育成",
      "summary_ja": "ChatGPTへのアクセスを拡大し、AI対応の労働力に向けた教育や学習にAIを本格的に導入。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Prism ML's Ternary-Bonsai-2 Shrinks a 9B AI Model to 2.42 GB",
      "summary": "Prism ML squeezes a 9B vision-language model down to 2 GB with ternary weights, hybrid attention, and 262K context for on-device inference.",
      "url": "https://alphasignal.ai/news/prism-ml-s-ternary-bonsai-2-shrinks-a-9b-ai-model-to-2-42-gb",
      "published": "2026-11-06T01:02:20+09:00",
      "title_ja": "Prism MLのTernary-Bonsai-2が9Bモデルを2.42GBに軽量化",
      "summary_ja": "3値重みとハイブリッドアテンションにより、大規模な視覚言語モデルをデバイス上で動作可能なサイズに圧縮。"
    },
    {
      "lab": "Google Research",
      "title": "Detecting signs of hypertension using wearable sensors",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
      "published": "2026-11-06T01:01:08+09:00",
      "title_ja": "ウェアラブルセンサーを用いた高血圧の兆候検知",
      "summary_ja": "ウェアラブル端末のセンサーデータを活用して、高血圧の予兆を検出するヘルスケア技術の研究。"
    },
    {
      "lab": "AlphaSignal",
      "title": "MiniMax Drops Music 3, an Open-Weight AI That Writes 5-Minute Songs",
      "summary": "MiniMax releases an open-weight text-to-music model that generates full 5-minute songs in 32 kHz stereo with native ComfyUI support.",
      "url": "https://alphasignal.ai/news/minimax-drops-music-3-an-open-weight-ai-that-writes-5-minute-songs",
      "published": "2026-11-06T00:30:34+09:00",
      "title_ja": "MiniMaxが5分の楽曲を生成するオープンモデルMusic 3を公開",
      "summary_ja": "テキストから32kHzステレオの5分間のフル楽曲を生成できる、ComfyUI対応のオープン重みモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Switch Brings Multiple AI Agents Into Slack and Teams Channels",
      "summary": "Switch turns Slack, Teams, Discord, Telegram and Mattermost channels into shared rooms where humans and AI agents collaborate on the same thread.",
      "url": "https://alphasignal.ai/news/switch-brings-multiple-ai-agents-into-slack-and-teams-channels",
      "published": "2026-11-05T21:06:08+09:00",
      "title_ja": "SwitchがSlackやTeamsのチャンネルに複数のAIエージェントを導入",
      "summary_ja": "主要チャットツールを人間とAIが同一スレッドで協力できる共有ルームに変換し、共同作業を可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents",
      "summary": "Introducing GPT‑6 Cyber, OpenAI’s cybersecurity model for finding exploitable vulnerabilities and developing fixes, trained to stay within authorized scope.",
      "url": "https://openai.com/index/introducing-gpt-6-cyber",
      "published": "2026-11-05T18:00:00+09:00",
      "title_ja": "GPT-6 Cyber：アラインメントされたサイバーセキュリティエージェントの最前線",
      "summary_ja": "脆弱性の発見と修正プログラムの開発を目的とした、許可された範囲内で動作するOpenAIの最新モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Merge builds product and business tools with OpenAI technology",
      "summary": "Merge uses GPT-6 Astra, ChatGPT, and Codex to review product code and support marketing. Its teams also use AI to plan executive dinners and prepare sales updates.",
      "url": "https://openai.com/index/merge-builds-with-openai",
      "published": "2026-11-05T17:00:00+09:00",
      "title_ja": "MergeがOpenAIの技術で製品・ビジネスツールを構築",
      "summary_ja": "GPT-6 Astra等のAIを用いてコードレビューからマーケティング支援、夕食会の計画まで多岐にわたり活用。"
    },
    {
      "lab": "AlphaSignal",
      "title": "A Community Krea 2 LoRA for Anime Characters Hits 864K Downloads",
      "summary": "A trending community LoRA for Krea 2 brings consistent Japanese character generation to both the undistilled Raw base and the fast Turbo checkpoint.",
      "url": "https://alphasignal.ai/news/a-community-krea-2-lora-for-anime-characters-hits-864k-downloads",
      "published": "2026-11-05T13:00:49+09:00",
      "title_ja": "コミュニティによるKrea 2用アニメLoRAが864,000ダウンロードを達成",
      "summary_ja": "高品質な日本のアニメキャラクターを安定して生成できる追加学習モデルが、コミュニティで高い人気を記録。"
    },
    {
      "lab": "OpenAI",
      "title": "Setting a new standard for responsible AI infrastructure",
      "summary": "OpenAI introduces its National Community Compact and Compute Campus Policy Blueprint to protect local resources, create jobs, and guide responsible AI infrastructure development.",
      "url": "https://openai.com/index/setting-new-standard-responsible-ai-infrastructure",
      "published": "2026-11-05T11:00:00+09:00",
      "title_ja": "責任あるAIインフラの新基準を策定",
      "summary_ja": "地域資源の保護や雇用創出を目指し、OpenAIが責任あるインフラ開発のための指針と枠組みを発表。"
    },
    {
      "lab": "OpenAI",
      "title": "Flipsnack grows product signups with conversion optimization",
      "summary": "Flipsnack focused its ChatGPT Ads campaigns on getting people to try its product, growing registrations while lowering the cost per signup.",
      "url": "https://openai.com/ads/customers/flipsnack",
      "published": "2026-11-05T09:45:15+09:00",
      "title_ja": "Flipsnackがコンバージョン最適化により会員登録数を増加",
      "summary_ja": "ChatGPT広告キャンペーンを試用体験に集中させることで、登録コストを抑えつつ新規ユーザー獲得を加速。"
    },
    {
      "lab": "Apple ML",
      "title": "Faster Retrieval for Better, More Efficient RAG",
      "summary": "Maximum inner product search (MIPS) sits at the core of recommendation systems, search, and retrieval-augmented generation (RAG). Given a query vector, MIPS systems search within a database of millions of candidate key vectors for the one that best matches the query. The original data point associated with that best-matching key is then used to handle the query: in RAG, the document that is best suited to answer the question is typically prefixed to the query.\nAs the number of keys grows to millions and vector dimensions reach thousands, the computational cost of running an exhaustive…",
      "url": "https://machinelearning.apple.com/research/faster-retrieval",
      "published": "2026-11-05T09:00:00+09:00",
      "title_ja": "RAGの効率向上のための高速なベクトル検索",
      "summary_ja": "膨大なデータから最適な情報を瞬時に見つけ出すMIPS技術により、RAGや推薦システムの精度と速度を改善。"
    },
    {
      "lab": "Hugging Face",
      "title": "A Closer Look at Phonon TTS. Launching High-Quality On-Device Speech That Tops the Benchmarks.",
      "summary": "",
      "url": "https://huggingface.co/blog/phonon-tts",
      "published": "2026-11-05T09:00:00+09:00",
      "title_ja": "Phonon TTS詳解：ベンチマークを凌駕する高品質なオンデバイス音声合成",
      "summary_ja": "デバイス上で動作しながら、既存の基準を超える高い品質を実現した音声合成技術をリリース。"
    },
    {
      "lab": "Google Research",
      "title": "Agile Deliberation: How AI helps humans define the gray areas",
      "summary": "Data Mining & Modeling",
      "url": "https://research.google/blog/agile-deliberation-how-ai-helps-humans-define-the-gray-areas/",
      "published": "2026-11-05T03:07:05+09:00",
      "title_ja": "Agile Deliberation：AIが人間の曖昧な領域の定義を支援する方法",
      "summary_ja": "データマイニングとモデリングを通じて、人間が複雑で曖昧な問題を判断・定義する際のAIによる補助技術。"
    },
    {
      "lab": "Hugging Face",
      "title": "Dharma Field Extractor: Any Document In, Structured Fields in JSON Out",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/dharma-field-extractor",
      "published": "2026-11-05T02:50:10+09:00",
      "title_ja": "Dharma Field Extractor：あらゆる文書からJSON形式で構造化データを抽出",
      "summary_ja": "非構造化ドキュメントを読み込み、指定したフィールドの構造化データとして即座に変換・出力が可能。"
    },
    {
      "lab": "Hugging Face",
      "title": "StateBench: Testing how language models track state changes over long documents",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/statebench",
      "published": "2026-11-04T02:15:21+09:00",
      "title_ja": "StateBench：長い文書における言語モデルの状態変化追跡能力のテスト",
      "summary_ja": "長文ドキュメント内での情報の推移や状態の変化を、言語モデルがどれだけ正確に把握できるかを測定。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Agentic cheminformatics with Google Antigravity",
      "summary": "Learn how Google Antigravity and our Cheminformatics Skills accelerate drug discovery workflows, search compounds, and propose novel rigidified macrocycles.",
      "url": "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/",
      "published": "2026-11-04T02:01:49+09:00",
      "title_ja": "Google Antigravityによるエージェント型計算化学",
      "summary_ja": "AIを活用して創薬ワークフローを加速し、化合物の探索や新規なマクロサイクルの提案を効率化。"
    },
    {
      "lab": "Hugging Face",
      "title": "Palette: teaching a small model to build decks in your design language",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/palette-deck-building",
      "published": "2026-11-04T01:35:36+09:00",
      "title_ja": "Palette：小型モデルに独自のブランドデザイン言語を学習させる",
      "summary_ja": "特定のデザインガイドラインに沿った資料やデッキを作成できるよう、小規模モデルを訓練する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "CWE-bench v2: More coverage, quality, and transparency",
      "summary": "",
      "url": "https://huggingface.co/blog/cwe-bench",
      "published": "2026-11-03T09:00:00+09:00",
      "title_ja": "CWE-bench v2：網羅性、品質、透明性の向上",
      "summary_ja": "ソフトウェアの脆弱性検知能力を評価するベンチマークを刷新し、より広範で高品質なテストを実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Speeding up planning decisions with AI",
      "summary": "Google DeepMind and UK government work together to reduce planning assessment times",
      "url": "https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/",
      "published": "2026-10-30T23:18:30+09:00",
      "title_ja": "AIによる都市計画決定のスピードアップ",
      "summary_ja": "Google DeepMindと英政府が協力し、都市計画のアセスメントに要する時間を短縮する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代のフロンティアモデル",
      "summary_ja": "Googleが開発する、次なる限界を突破するための最新の大規模言語モデル。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "sleepフレームワーク：継続学習においてLLMの知識保持を可能にする新手法",
      "summary_ja": "AIが新しい情報を学び続ける際に、過去に習得した知識を忘れないようにするための新しい学習枠組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイムシミュレーションにおいて、かつてないほどのリアリズムを実現する新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイムなガウス型頭部アニメーション",
      "summary_ja": "少数の画像と表情信号から、3Dの人物頭部を高品質かつリアルタイムに動かすアニメーション技術。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AI技術を活用し、結核の診断やスクリーニング精度の向上を目指す医療支援の取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上の全陸地を10メートル単位で解析し、詳細な森林の種類を分類したグローバルマップ。"
    }
  ]
};
