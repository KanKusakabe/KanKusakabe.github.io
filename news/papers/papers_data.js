window.papersData = {
  "updated_at": "2026-11-25 11:35 JST",
  "arxiv": [
    {
      "id": "2611.30844",
      "title": "DyLoMo-DiT: Dynamic Looped Mixture-of-Experts Diffusion Transformers",
      "url": "https://arxiv.org/abs/2611.30844",
      "pdf": "https://arxiv.org/pdf/2611.30844",
      "authors": [
        "Lernie Li",
        "Yuanliu Liu",
        "Pengfei Xiong",
        "Wei Zhang"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "46 pages, 29 figures, 33 tables. Code, weights and project page: https://oneboxcream.github.io/DyLoMo-DiT/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "DyLoMo-DiT reduces FID by 11-24% relative to DiT and 36-56% relative to DiT-MoE at matched parameter and compute budgets.",
      "signals": [],
      "headline": "重み共有とMoEを組み合わせた効率的な拡散モデルDyLoMo-DiT",
      "what": "Diffusion Transformers (DiTs) において、中間層を繰り返し適用する「ウェイト共有ループ」と、トークンごとにパラメータを割り当てる「スパース専門家（MoE）」を統合した手法です。ノイズレベルに応じて動的に計算パス数を変化させ、パラメータを増やさずにネットワークを深化させます。",
      "enables": "ImageNet 256x256において、同じパラメータ数と計算予算でDiTと比較してFIDを11-24%改善しました。FLOX.1と比較しても1/10以下の活性パラメータ数で優れたGenEvalスコアを記録しました。",
      "why_it_matters": "パラメータ容量の効率化と動的な計算資源の配分を同時に実現し、モバイルデバイスなどの制約条件下での高品質な生成AIの展開に寄与します。",
      "tags": [
        "拡散モデル",
        "MoE",
        "効率化"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30965",
      "title": "Beyond Self-Consistency: Recursive Self-Improvement at Test Time",
      "url": "https://arxiv.org/abs/2611.30965",
      "pdf": "https://arxiv.org/pdf/2611.30965",
      "authors": [
        "Jianyu Wu",
        "Yizhou Wang",
        "Encheng Su",
        "Jinouwen Zhang",
        "Pengze Li",
        "Lintao Wang"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
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
      "star_quote": "outperforms the strongest self-consistency-based method by +4.79% under the same test-time scaling budget.",
      "signals": [],
      "headline": "テスト時の再帰的な自己改善でLLMの精度を高めるTT-RSI",
      "what": "展開後のLLMがラベルなしで自律的に向上するためのフレームワークで、過去の解答を参考にして解き直す「In-Context RSI」と、その改善結果をモデルの重みに蒸留する「In-Weight RSI」から構成されます。多数決（Self-Consistency）だけに頼らず、推論過程の洗練を重視します。",
      "enables": "ベースモデルに対して平均精度を13.89%向上させ、同じ計算予算の下で最強の自己無撞着ベースの手法を4.79%上回る精度を達成しました。",
      "why_it_matters": "静的なモデルではなく、デプロイ後の実行（テスト）時において推論と学習を繰り返すことで、モデルの限界を超えた知能の洗練を可能にする道筋を示しています。",
      "tags": [
        "LLM",
        "自己改善",
        "テスト時計算"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28115",
      "title": "NOVA: Normalization-Aware Output-Guided Attention Acceleration for Video Diffusion Transformers",
      "url": "https://arxiv.org/abs/2611.28115",
      "pdf": "https://arxiv.org/pdf/2611.28115",
      "authors": [
        "Wenxuan Miao",
        "Haosong Liu",
        "Aiyue Chen",
        "Yiwu Yao",
        "Zihan Liu",
        "Anbang Wu"
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
        "sota"
      ],
      "star_quote": "NOVA achieves the best PSNR, SSIM, and LPIPS among sparse attention methods",
      "signals": [],
      "headline": "動画拡散トランスフォーマーの効率を向上させるNOVAフレームワーク",
      "what": "Video Diffusion Transformers (vDiTs) のセルフアテンションにおける計算コストを削減するため、正規化後の出力を考慮した粗から精へのスパースアテンション手法を提案しています。サイズ加重されたキー/値のセントロイドを用いてフル出力を近似し、その推定値をガイドとして精査すべきクエリ・キーブロックを選択します。",
      "enables": "5つのvDiTモデルにおいて既存のスパース手法を上回るPSNR、SSIM、LPIPSを達成し、最強のベースラインに対してPSNRを最大1.55dB改善しつつ、H100 GPU上で最大1.82倍の高速化を実現しました。",
      "why_it_matters": "従来のアテンション重みのみに基づくスパース化ではなく、正規化後の最終出力の忠実度を考慮することで、高解像度かつ長時間の動画生成における効率と品質を両立させています。",
      "tags": [
        "動画生成",
        "拡散モデル",
        "スパースアテンション"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29195",
      "title": "FunGrasp-Zero: Field-Conditioned Graph Attention Policy for Zero-Shot Cross-Embodiment Dexterous Functional Grasping",
      "url": "https://arxiv.org/abs/2611.29195",
      "pdf": "https://arxiv.org/pdf/2611.29195",
      "authors": [
        "Yanhan Lin",
        "Yuliang Wu",
        "Yihao Guo",
        "Wei-Jin Huang",
        "Jianwen Li",
        "Jiawei Tang"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "FunGrasp-Zero is the first RL-based framework to achieve zero-shot cross-embodiment functional grasping across unseen hands",
      "signals": [],
      "headline": "未知の手でも器用な把持を実現するFunGrasp-Zero",
      "what": "異なる形態を持つロボットハンド（クロスエンボディメント）間で、物体中心の機能的接触意図を共有することで、ゼロショットでの器用な把持を可能にする強化学習フレームワークです。Field-Conditioned Graph Attention Network (FC-GAT) を用い、ポテンシャルフィールドから誘導されるベクトルに基づいて多指の動きを制御します。",
      "enables": "4つのハンドで共同学習された単一のポリシーが、5つの未知のハンドにおいて平均86%の把持成功率を達成しました。実機実験においても4つの未知のハンドで80%の成功率を記録しています。",
      "why_it_matters": "ハンド固有の関節構成に依存せず、物体の機能に基づいた接触意図を学習することで、ハードウェアの多様性を超えた高度な汎用操作の実現に貢献します。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "多指ハンド"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29260",
      "title": "Revealing Semantic Gaps in Zero-Knowledge Virtual Machines via Obligation-Targeted Semantic Fuzzing",
      "url": "https://arxiv.org/abs/2611.29260",
      "pdf": "https://arxiv.org/pdf/2611.29260",
      "authors": [
        "Hongbo Wen",
        "Jingyu Ke",
        "Hanzhi Liu",
        "Yanju Chen",
        "Yu Feng"
      ],
      "categories": [
        "cs.CR"
      ],
      "venues": [
        "NDSS (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "18 pages. Accepted at the Network and Distributed System Security (NDSS) Symposium 2027",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Beak detects 25 of 37 known bugs (67.6%) versus 5 (13.5%) for the prior state of the art",
      "signals": [],
      "headline": "ゼロ知識証明仮想マシンの脆弱性をRLで検出するBeak",
      "what": "zkVMにおける命令セット(ISA)と制約システムの不一致（セマンティックギャップ）を検出するための、強化学習を用いたファジングツールです。ISAの仕様から導き出された「制約義務」をターゲットとし、入力生成、報酬設計、証拠（witness）の改ざんをRLで制御します。",
      "enables": "主要な6つのRISC-V zkVMにおいて、既知のバグの67.6%を検出し（従来手法は13.5%）、さらに14件の未知の脆弱性を発見して修正に繋げました。",
      "why_it_matters": "膨大な資産を保護するzkVMの安全性において、従来の手法では到達困難だったコーナーケースの脆弱性を自動的に発見する手法を確立し、信頼性を大幅に向上させています。",
      "tags": [
        "セキュリティ",
        "ゼロ知識証明",
        "ファジング"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29460",
      "title": "Fill in the Blanks: Non-Autoregressive Schema-Parallel Key Information Extraction with CTC Decoding",
      "url": "https://arxiv.org/abs/2611.29460",
      "pdf": "https://arxiv.org/pdf/2611.29460",
      "authors": [
        "Shaked Perek",
        "Avihu Dekel",
        "Ben Wiesel",
        "Sivan Harary",
        "Eli Schwartz"
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
        "new"
      ],
      "star_quote": "non-autoregressive extractor that writes the structure from the schema, sizes every list with a count pass",
      "signals": [],
      "headline": "ドキュメントからの情報抽出を非自己回帰で高速化するFill in the Blanks",
      "what": "ドキュメントからのキー情報抽出（KIE）において、スキーマが固定されていることに着目し、全値を並列に予測する非自己回帰型エクストラクタを提案しています。CTCデコーディングを用いることで、トークンの長さを事前に予測することなく固定回数のパスで抽出を完結させます。",
      "enables": "4Bモデルでありながら、拡散モデルベースの競合手法より平均3.5倍（最大5.6倍）、自己回帰デコーディングより8.3倍高速に動作し、かつ同等以上の精度を達成しました。",
      "why_it_matters": "ビジネスドキュメント処理のような実務において、JSON生成のボトルネックであるシーケンシャルなデコーディングを排除し、実用的な速度と精度の両立を実現しています。",
      "tags": [
        "文書解析",
        "VLM",
        "非自己回帰生成"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30304",
      "title": "PinGround: Pinning Queries to Points for Parallel Grounding in Vision-Language Models",
      "url": "https://arxiv.org/abs/2611.30304",
      "pdf": "https://arxiv.org/pdf/2611.30304",
      "authors": [
        "Shuxuan Li",
        "Jialiang Kang",
        "Yanghao Zhou",
        "Ziye Zhu",
        "Zhilin Zhao",
        "Xiao Yang"
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
        "new"
      ],
      "star_quote": "writes a single point into each query as a spatial anchor and asks for the matching instance nearest to that point",
      "signals": [],
      "headline": "空間アンカーを用いた並列デコーディングでVLMの物体特定を高速化するPinGround",
      "what": "VLMによる物体の接地（Grounding）タスクにおいて、各クエリに対して1つの「点」を空間アンカーとして書き込み、近傍のインスタンスを並列にデコーディングする手法「PinGround」を提案しています。クエリ間の依存関係を排除し、プレフィックスツリーを用いた独立した並列処理を可能にします。",
      "enables": "インスタンス密度が高いシーンにおいて、逐次的なデコーディングと比較して最大21.9倍の高速化を実現しつつ、精度（F1スコア）の低下を最小限に抑えました。",
      "why_it_matters": "物体数に比例して推論コストが増大するVLMの課題を解決し、自動運転や画像解析におけるリアルタイムの多物体認識・特定を現実的なものにします。",
      "tags": [
        "VLM",
        "並列デコーディング",
        "物体特定"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30573",
      "title": "Write, Evolve, Read: Streaming Cameras into a Persistent World State for 4D Occupancy Forecasting",
      "url": "https://arxiv.org/abs/2611.30573",
      "pdf": "https://arxiv.org/pdf/2611.30573",
      "authors": [
        "ZiAn Wang",
        "Tianyi Wang",
        "Zhihao Chen",
        "Manni Cui",
        "Junkai Chen",
        "ZhiJin Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 4,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "PersistWorld raises the IoU of the best camera-based world model by 19 points at 1-3 s and by 18 to 24 points up to 8 s",
      "signals": [],
      "headline": "永続的な3D世界状態を保持し占有予測を改善するPersistWorld",
      "what": "自動運転における4D占有予測において、カメラフレームを「永続的な3D世界状態」へと順次ストリーミング入力し、一度見た場所の情報を固定状態で保持するフレームワークです。車両の移動に伴って変化しない部分を再構築せず、過去の知見をそのまま利用します。",
      "enables": "Occ3D-nuScenesにおいて、既存のカメラベース手法と比較してIoUを19〜24ポイント大幅に向上させ、かつ2倍以上の高速動作を実現しました。",
      "why_it_matters": "未来の予測を単なる「想像」ではなく、すでに見た世界状態の「進化」として扱うことで、一貫性の欠如という既存のカメラベースモデルの致命的な弱点を克服しています。",
      "tags": [
        "自動運転",
        "占有予測",
        "ワールドモデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.31239",
      "title": "Lyris: Layout-Guided Long Video Generation with Persistent 3D Memory",
      "url": "https://arxiv.org/abs/2611.31239",
      "pdf": "https://arxiv.org/pdf/2611.31239",
      "authors": [
        "Chen Wang",
        "Jiahui Huang",
        "Riccardo de Lutio",
        "Alex Trevithick",
        "Bryan Chu",
        "Jiawei Ren"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: http://research.nvidia.com/labs/sil/projects/lyris",
      "hf_upvotes": 1,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing camera error by 3.8x and improving consistency upon return by 22% on average.",
      "signals": [],
      "headline": "3Dレイアウトとメモリの統合により長時間のシーン生成を実現するLyris",
      "what": "1枚の写真から、3分以上にわたる長時間のカメラ操作可能な動画を生成するフレームワークです。すでに見たシーンを記録する「永続的ポイントクラウドメモリ」と、VLMが未知の領域を予測して配置する「3Dレイアウト」を組み合わせ、シーンの一貫性を保ちます。",
      "enables": "50メートル以上の移動を伴う動画生成において、既存のSOTA手法に対しカメラ誤差を3.8倍削減し、元の場所に戻った際の一貫性を22%向上させました。",
      "why_it_matters": "テキスト指示だけでは制御しきれない「どの物体がどこにあるべきか」という空間的な構造を、VLMによるレイアウト生成で解決し、広大な3D空間の探索動画生成を可能にしました。",
      "tags": [
        "動画生成",
        "3Dシーン",
        "VLM"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28483",
      "title": "Don't Train It, Write It: An AI Agent Writes New Capabilities into Language Model Weights",
      "url": "https://arxiv.org/abs/2611.28483",
      "pdf": "https://arxiv.org/pdf/2611.28483",
      "authors": [
        "Santiago Rivadeneira Quintero"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "28 pages, 5 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "an AI agent can write new capabilities into a pretrained language model by adding gated attention heads and MLP neurons inside its existing layers, without backpropagation",
      "signals": [],
      "headline": "AIエージェントがLLMの重みを直接書き換えて新機能を追加",
      "what": "バックプロパゲーションや教師データなしに、AIエージェントが既存のLLMの内部（Gated AttentionやMLP）に直接新しい論理回路（モジュール）を書き込む手法です。エージェントは50回のモデル実行という限られた予算内でタスクを理解し、重みを修正します。",
      "enables": "Qwen2.5-1.5Bに対し、20桁の掛け算や論理推論などの新機能を書き込み、既存の能力を一切損なうことなく（KLダイバージェンスがゼロ）大幅な精度向上を実現しました。",
      "why_it_matters": "「学習」という計算コストの高いプロセスの代わりに、「設計・書き込み」というエージェントによる直接編集が、モデルの機能を拡張する新しい手段になり得ることを示唆しています。",
      "tags": [
        "LLM",
        "重み編集",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28286",
      "title": "Scalable Beckmann Maps Improve One-step Generation",
      "url": "https://arxiv.org/abs/2611.28286",
      "pdf": "https://arxiv.org/pdf/2611.28286",
      "authors": [
        "Ulrik Unneberg",
        "Shiyi Wang",
        "Lee Cheuk-Kit",
        "Felix Berg",
        "Boris Kozinsky",
        "Yilun Du"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "40 pages, 15 figures, 12 tables. Code and checkpoints: https://tullebulle.github.io/projects/sbm/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SBM reaches a one-step FID of 1.6 on ImageNet 256x256 without a teacher",
      "signals": [],
      "headline": "教師なしでの一段階画像生成を改善するScalable Beckmann Maps",
      "what": "Beckmann Transport Models (BTM) にClassifier-Free Guidance (CFG) とスケーラブルなトレーニング手法を導入したScalable Beckmann Maps (SBM) を提案しています。BTMの電流が自律的なデノイジング場に比例するという観察に基づき、追加ネットワークなしでガイダンスを適用します。",
      "enables": "ImageNet 256x256において、蒸留や教師モデルなしでFID 1.6という1ステップ生成性能を達成し、FLOPsを3.2倍削減しながらベースラインを上回りました。また、GenEvalスコア0.86、ロボット操作のワールドモデルとしても高い性能を示しています。",
      "why_it_matters": "多段階のサンプリングを必要とする既存モデルに対し、単一のネットワーク評価で高品質な生成を可能にし、計算効率とスケーラビリティを高いレベルで統合しています。",
      "tags": [
        "画像生成",
        "ワンステップ生成",
        "ワールドモデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28314",
      "title": "INSEP: Refusal-Direction Inseparability as a Defense Against Abliteration",
      "url": "https://arxiv.org/abs/2611.28314",
      "pdf": "https://arxiv.org/pdf/2611.28314",
      "authors": [
        "Ivan Brugere",
        "Junqi Jiang",
        "Saumitra Mishra",
        "Sumitra Ganesh"
      ],
      "categories": [
        "cs.AI",
        "cs.CL",
        "cs.CR",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 2 figures, 42 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "INSEP ranks first on the mean composite score across all eight base models",
      "signals": [],
      "headline": "拒絶方向の分離を困難にすることでLLMの安全性を守る防御手法INSEP",
      "what": "モデルの活性化空間から「拒絶方向」を削除する攻撃（Abliteration）への対策として、有害な入力と無害な入力の活性化の分離可能性を低減するようにモデルをファインチューニングする手法を提案しています。敵対的な固有値分解を用いて最も分離しやすいプロンプトを特定し、低ランクアダプターでその差異を圧縮します。",
      "enables": "1Bから14Bのパラメータを持つ8つのLLMファミリーにおいて、MMLUなどの性能を維持しつつ、6つの防御手法と5つの攻撃を対象とした評価で平均総合スコア1位を獲得しました。",
      "why_it_matters": "ホワイトボックス攻撃に対して、モデル本来の拒絶行動や回答の質を損なうことなく堅牢性を高めることができる実用的な防御策を提供しています。",
      "tags": [
        "LLM",
        "AI安全",
        "敵対的防御"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28485",
      "title": "VICA: Video Contextual Agreement for AIGC Video Detection and Localization",
      "url": "https://arxiv.org/abs/2611.28485",
      "pdf": "https://arxiv.org/pdf/2611.28485",
      "authors": [
        "Runheng Lin",
        "Jialiang Shen",
        "Jiyang Zheng",
        "Ruiqi Liu",
        "Zonglin He",
        "Yu Yao"
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
      "star_quote": "VICA achieves state-of-the-art performance on both tasks across multiple benchmarks",
      "signals": [],
      "headline": "周辺文脈との不一致からAI生成動画の改ざんを検知・特定するVICA",
      "what": "動画の特定の領域をマスクし、凍結されたV-JEPAモデルを用いて周囲の時空間文脈からその領域の表現を予測するVIdeo Contextual Agreement (VICA) を提案しています。観測された表現と予測された表現の差を空間的・時間的な残差として抽出することで、不一致箇所を特定します。",
      "enables": "AI生成動画の検知と改ざん箇所の特定の双方でSOTAを達成し、未学習の動画生成器や編集手法に対しても高い汎化性能を示しました。",
      "why_it_matters": "大域的な特徴量や単一フレームのアーティファクトに頼るのではなく、文脈との不一致を forensic な表現として利用することで、より局所的で複雑な改ざんの検出を可能にしています。",
      "tags": [
        "動画検知",
        "ディープフェイク",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28779",
      "title": "Imagine Smarter, Drive Faster: Efficient World Modeling for Decision-Aware Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.28779",
      "pdf": "https://arxiv.org/pdf/2611.28779",
      "authors": [
        "Feiyang Jia",
        "Lin Liu",
        "Zhicheng Bao",
        "Caiyan Jia",
        "Ziying Song",
        "Shengkai Zhang"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "23 pages total, 8 pages main text (4 figures, 8 tables), 12 pages supplementary material (9 figures, 5 tables)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FastWorld achieves 92.2 PDMS at 132 FPS on a single 4090 GPU",
      "signals": [],
      "headline": "自動運転の計画効率を高速化する軽量ワールドモデルFastWorld",
      "what": "自動運転のプランニング向けに、コンパクトなシーン表現、短期間のアクション条件付き予測、選択的な候補検証とスコア精緻化を組み合わせたネイティブな軽量ワールドモデルです。知識蒸留や大規模なドメイン特化型事前学習に頼らずに効率化を実現しています。",
      "enables": "NAVSIMv1において、シングル4090 GPU上で132 FPSという高速動作と92.2 PDMSという高い性能を両立しました。nuScenes等のデータセットでも既存手法を上回る効率性を示しています。",
      "why_it_matters": "計算コストの高さが課題であったワールドモデルにおいて、リアルタイム性を維持しつつ高精度な予測とプランニングが可能であることを示し、実車への搭載可能性を広げています。",
      "tags": [
        "自動運転",
        "ワールドモデル",
        "ロボティクス"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28836",
      "title": "Omni-H3-Image: Constrained Foundation Priors Usher in a New Era of All-in-One Blind Image Restoration",
      "url": "https://arxiv.org/abs/2611.28836",
      "pdf": "https://arxiv.org/pdf/2611.28836",
      "authors": [
        "Zihao He",
        "Songhua Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 13 figures, 7 tables. Code: https://github.com/RedRoman/Omni-H3",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Omni-H3 recovers +4.73 dB degraded-scene PSNR over Base H3",
      "signals": [],
      "headline": "ブラインド画像復元を刷新するVLMベースのOmni-H3-Image",
      "what": "既存のMiniMax-H3-ImageやQwen3-VLなどの大規模基盤モデルに対し、極めて軽量な気象事前条件付け器を用いた3段階の制約付き事後投影フレームワークを提案しています。格子の固定、色空間での射影、テキスト検証による閉ループ制御を組み合わせています。",
      "enables": "429の劣化した公開シーンにおいて、ベースモデルに対しPSNRを4.73dB改善（21.47dB）し、DISTS、NIQE、Edge-F1といった指標でSOTAを達成しました。また、Urban100における色ずれを91.6%削減しています。",
      "why_it_matters": "強力な生成モデルが陥りがちな空間的な歪みや幻覚（Hallucination）を、ごく僅かな追加パラメータと物理的・意味的な制約によって抑制し、実用的な画像復元ツールへと昇華させています。",
      "tags": [
        "画像復元",
        "VLM",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28917",
      "title": "Div3DAfford: Diverse 3D affordance grounding",
      "url": "https://arxiv.org/abs/2611.28917",
      "pdf": "https://arxiv.org/pdf/2611.28917",
      "authors": [
        "Haomeng Zhang",
        "Raymond A. Yeh"
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
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing GED-SIM from 0.745 to 0.492",
      "signals": [],
      "headline": "多様な人間と物体のインタラクションを予測するDiv3DAfford",
      "what": "1つの物体に対して複数の妥当なアフォーダンス領域を予測する「多様な3Dアフォーダンス・グラウンディング」タスクを提案し、トランスフォーマーベースの集合予測モデルDiv3DAffordNetを開発しました。また、2D生成モデルと3D再構成を組み合わせた自動パイプラインにより、アノテーション時間を72倍削減したベンチマークを構築しています。",
      "enables": "マルチマスク設定において、GED-SIMを0.745から0.492へと大幅に改善し、単一マスクの設定でも競争力のある性能（19.0 mIoU）を維持しました。",
      "why_it_matters": "人間のインタラクションの多様性を考慮することで、ロボットが単一の動作に固執せず、状況に応じた柔軟な行動選択を行えるようになる基盤を提供します。",
      "tags": [
        "3Dビジョン",
        "アフォーダンス",
        "ロボティクス"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29064",
      "title": "Single-Transformer Latent Diffusion",
      "url": "https://arxiv.org/abs/2611.29064",
      "pdf": "https://arxiv.org/pdf/2611.29064",
      "authors": [
        "Hao-Yu Hsu",
        "Shenlong Wang",
        "Alexander G. Schwing"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://haoyuhsu.github.io/Unified-LDM/",
      "hf_upvotes": 13,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reaches 2.08 with 215M parameters, the lowest among compared models",
      "signals": [],
      "headline": "エンコード・生成・デコードを単一のトランスフォーマーで完結するUNIFIED",
      "what": "Latent Diffusionモデルにおけるエンコーダ、ジェネレータ、デコーダの3つのネットワークを1つの共有バックボーンに統合した手法を提案しています。位置合わせされたシーケンスマップとして全タスクを扱い、モードトークンとタイムステップのみで各機能を切り替えます。",
      "enables": "ImageNet-1K 256x256において、215Mのパラメータ数でgFID 2.08を達成し、250M以下のモデルで最も優れた性能を示しました。また、Text-to-Image生成においても、より大規模なモデルに匹敵するGenEvalスコアを獲得しています。",
      "why_it_matters": "従来別々に学習・推論されていたコンポーネントを完全に統一することで、アーキテクチャの簡素化と性能向上を同時に達成できることを証明しました。",
      "tags": [
        "拡散モデル",
        "画像生成",
        "Transformer"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29548",
      "title": "Real-Time Kinodynamic Multi-Agent Motion Planning",
      "url": "https://arxiv.org/abs/2611.29548",
      "pdf": "https://arxiv.org/pdf/2611.29548",
      "authors": [
        "Jiarui Li",
        "Runyu Zhang",
        "Gioele Zardini"
      ],
      "categories": [
        "cs.RO",
        "cs.MA"
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
      "star_quote": "our planners run over 2,000 times faster than the strongest baseline in 2D halls and over 100 times in 3D",
      "signals": [],
      "headline": "大規模ロボット群のリアルタイム軌道計画を実現するTAKT",
      "what": "動的制約を考慮したマルチエージェント動作計画（MAPF）において、探索前に力学特性を考慮し、二重積分器モデルの格子探索に帰着させるフレームワーク「Tickwise Actions to Kinodynamic Trajectories (TAKT)」を提案しています。離散的な計画を連続的な軌道に解析的に変換する畳み込み手法を含みます。",
      "enables": "50台のロボットを用いた実験で、最強のベースラインと比較して2Dで2000倍以上、3Dで100倍以上の高速化を達成しました。数千台規模のロボット群の軌道を数秒で計画可能です。",
      "why_it_matters": "倉庫ロボットやドローン群のような大規模フリートにおいて、衝突回避と動的制約を両立させつつ、リアルタイムでの計画更新が可能であることを示しました。",
      "tags": [
        "ロボティクス",
        "パスプランニング",
        "マルチエージェント"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29882",
      "title": "Reparameterizing Your Object Detectors for Weight Space Programming",
      "url": "https://arxiv.org/abs/2611.29882",
      "pdf": "https://arxiv.org/pdf/2611.29882",
      "authors": [
        "Chien-Yao Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "29 pages, 12 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "lifting detector layers via exact function-preserving operators (E, C) into decoupled moment, 2D-DCT, PCA, and Stiefel-Procrustes subspaces",
      "signals": [],
      "headline": "再学習なしで物体検知器の性能と遅延を調整するIR-ODWSP",
      "what": "重み空間プログラミング (WSP) を用いて、学習済み物体検知器の重みをバックプロパゲーションなしで直接編集する手法です。重み層をDCTやPCAなどの分離された部分空間へ射影し、異方的なリーマン計量を導入することで、既存の検知器の重みを最適化します。",
      "enables": "MS COCOにおいて17種類のYOLO等のモデルの精度を向上させ、ラベルなしの天候適応で+2.79 APを達成しました。また、グラフの静的・動的切り替えにより、推論遅延を-100%から+100%まで柔軟に調整可能です。",
      "why_it_matters": "モデルを再学習することなく、計算リソースや環境の変化に合わせて展開済みのエッジデバイス上の検知器を瞬時に最適化・調整できる新しい運用パラダイムを提示しています。",
      "tags": [
        "物体検知",
        "モデル最適化",
        "重み空間編集"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30634",
      "title": "Rewirable Circuits in Transformers with Loom Attention",
      "url": "https://arxiv.org/abs/2611.30634",
      "pdf": "https://arxiv.org/pdf/2611.30634",
      "authors": [
        "Da Xiao",
        "Qingye Meng",
        "Shengping Li",
        "Xingyuan Yuan"
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
      "star_quote": "allows a Transformer to dynamically rewire its circuits at every token by interweaving a head's vertical attention over the outputs of earlier heads",
      "signals": [],
      "headline": "Transformerの回路を動的に書き換えるLoom Attention",
      "what": "ヘッド間の垂直方向のアテンション（過去のヘッド出力の利用）と、トークン間の水平方向のアテンションを統合した「Loom Attention」を提案しています。行列メモリを用いた2つ目のレジデュアルストリームを持つデュアルストリーム構造「LoomFormer」を採用しています。",
      "enables": "同等の計算予算で学習した際、既存のTransformerベースのモデル（Pythiaなど）と比較して、3倍以上の計算量で学習したモデルに匹敵する下流タスク性能を達成しました。",
      "why_it_matters": "層間の固定された接続を動的に「配線し直す」能力を導入することで、限られたパラメータ数と計算リソースでより高い推論・推論能力を持つモデルの構築が可能になります。",
      "tags": [
        "LLM",
        "アーキテクチャ",
        "効率化"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30666",
      "title": "Zhengrong: World Models with Pole-Based Action-Response Factorization for Direct Visual Planning",
      "url": "https://arxiv.org/abs/2611.30666",
      "pdf": "https://arxiv.org/pdf/2611.30666",
      "authors": [
        "Yu Zhang",
        "Jingrui Li",
        "Congyu Wang",
        "Yuhang Cheng",
        "Wenbo Chen",
        "Xiaobo Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 4 figures, 11 tables. Technical report, Beijing Freedo Technology Co., Ltd",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "exceeding the strongest baseline (QQWorld) by 6.08 percentage points.",
      "signals": [],
      "headline": "アクション応答の因数分解により視覚的計画を高速化するZhengrong",
      "what": "再帰的な潜入状態の展開を必要とせず、初期状態、自由応答、およびアクションによる遅延応答の組み合わせとして軌道を予測する、極（Pole）ベースのアクション応答因数分解を用いたワールドモデルです。非線形な相互作用を維持しつつ、因果性を保証した予測を行います。",
      "enables": "4つのベンチマークにおいて平均成功率90.83%を達成し、最強のベースラインを6.08ポイント上回りました。推論遅延は自己回帰型のモデルと比較して7.1倍の高速化を実現しています。",
      "why_it_matters": "計算コストの高い自己回帰的なシミュレーションを、高速かつ正確な因数分解モデルに置き換えることで、視覚情報を直接用いたリアルタイムなロボット制御の信頼性を高めています。",
      "tags": [
        "ロボティクス",
        "ワールドモデル",
        "視覚計画"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30900",
      "title": "GlanceNav: Efficient Vision-and-Language Navigation with Streaming Memory and Counterfactual Rewind",
      "url": "https://arxiv.org/abs/2611.30900",
      "pdf": "https://arxiv.org/pdf/2611.30900",
      "authors": [
        "Anh Dao",
        "Quan-Dung Pham",
        "Danh Vinh Le",
        "Tuyen Pham Le",
        "Quan Nguyen",
        "Yuzhang Shang"
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
      "hf_upvotes": 3,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "outperforms the strongest previous single-RGB method trained without external data by 9.1 points",
      "signals": [],
      "headline": "ストリーミングメモリと後悔からの学習でVLNを効率化するGlanceNav",
      "what": "視覚言語ナビゲーション（VLN）において、各フレームを一度だけエンコードし、回帰的な状態と少数のキーフレームのみを保持するストリーミングナビゲーターです。さらに、失敗した試行を「巻き戻し」て専門家が修正を行う強化学習手法「Counterfactual Rewind (CoRe)」を提案しています。",
      "enables": "R2R-CEにおいて成功率71.9%を達成し、外部データなしの従来手法を9.1ポイント上回りました。また、1ステップあたり104msという高速な動作を一定のメモリ消費で維持します。",
      "why_it_matters": "過去の全フレームを再エンコードし続ける計算の無駄を省き、長い履歴を活用しながら効率的に間違いから学習できる実用的なナビゲーションAIを実現しています。",
      "tags": [
        "VLN",
        "ロボティクス",
        "強化学習"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.31065",
      "title": "Decoupling Solving from Abstention: Single-Rollout Conformal Risk Control for Hard-Budget LLM Reasoning",
      "url": "https://arxiv.org/abs/2611.31065",
      "pdf": "https://arxiv.org/pdf/2611.31065",
      "authors": [
        "Qianyi Chen",
        "Bo Li"
      ],
      "categories": [
        "cs.AI",
        "stat.ME"
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
      "star_quote": "single-rollout framework that separates candidate generation from submission control",
      "signals": [],
      "headline": "トークン予算の制限下でLLMの回答信頼性を制御するTail-CRC",
      "what": "計算リソース（トークン数）の制約がある中で、LLMが予算内で正解を導く確率を上げつつ、不確実な場合に棄権（Abstention）するタイミングを制御するフレームワークです。共形リスク制御（Conformal Risk Control）を応用し、単一の試行から不確実性スコアを算出します。",
      "enables": "Qwen3.5-4B/8Bにおいて、回答の正解率を最大29.6ポイント向上させ、かつドメイン外の数学課題における誤回答率を大幅に低減（30.3%から5.8%など）させました。",
      "why_it_matters": "推論コストを抑えるために回答を強制終了させつつ、モデルが「いつ自信を持って答えてよいか」を統計的に保証付きで判断できるようにし、信頼性と効率を両立させています。",
      "tags": [
        "LLM",
        "不確実性",
        "効率化推論"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.31143",
      "title": "Head Anything: Correspondence-Guided Joint Generation of 3D Heads from Few Images",
      "url": "https://arxiv.org/abs/2611.31143",
      "pdf": "https://arxiv.org/pdf/2611.31143",
      "authors": [
        "Umut Kocasari",
        "Bart{\\l}omiej Baranowski",
        "Richard Shaw",
        "Eduardo P\\'erez-Pellitero",
        "Matthias Nie{\\ss}ner"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project website: https://kocasariumut.github.io/HeadAnything/ , Video: https://youtu.be/EQm6y_Z0Frk",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "generates detailed head meshes from a few images with changing expressions and viewpoints. Instead of training a multi-image prior, we turn a pretrained single-image generator",
      "signals": [],
      "headline": "少数の画像から一貫した3Dヘッドを生成するHead Anything",
      "what": "表情や視点が異なる少数の画像から詳細な3Dヘッドメッシュを生成する手法です。単一画像用の事前学習済み3D生成モデルをベースに、画像間の対応関係（Correspondence）を考慮したアテンションアダプターを導入し、複数の画像を共同でデノイジングします。",
      "enables": "従来の単一画像ベース手法と比較して、3D形状の精度（Chamfer distance）を32%改善し、フレーム間の不整合を47%削減しました。",
      "why_it_matters": "複数の画像がある場合でも、それらを独立した別の物体として扱ってしまう既存手法の弱点を克服し、見えない部分を相互に補完し合う一貫した3Dアバター生成を可能にします。",
      "tags": [
        "3D生成",
        "顔画像処理",
        "マルチビュー"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28109",
      "title": "Green ACO: An Energy-Aware Ant Colony Optimisation for the MAX-SAT Problem with EI/J Scheduling and Thompson Sampling",
      "url": "https://arxiv.org/abs/2611.28109",
      "pdf": "https://arxiv.org/pdf/2611.28109",
      "authors": [
        "Maroua Ogab",
        "Nazim Abdeerhmane Aouni",
        "Rayane Rahmat Errahmane Smara",
        "Nour El Imane Elbar",
        "Zakaria Soualah Mohammed",
        "Malika Bessedik"
      ],
      "categories": [
        "cs.NE",
        "cs.AI",
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
      "star_quote": "This beats the standard ACO baselines by close to 3 points, while using only 986 J against 4,171 to 6,610 J for the strongest competitors",
      "signals": [],
      "headline": "エネルギー効率を6.5倍向上させるMAX-SAT最適化手法Green ACO",
      "what": "組合せ最適化問題（MAX-SAT）を解くための、エネルギー消費を考慮した蟻コロニー最適化（ACO）アルゴリズムです。期待される解の質の向上とエネルギーコストのバランスを「1ジュールあたりの期待改善量（EI/J）」で評価し、適切な演算子を動的に選択します。",
      "enables": "標準的なACO baselinesに対して解の質を約3ポイント向上させつつ、エネルギー消費を大幅に削減（4171Jから986Jへ）し、CO2排出量を約85%削減しました。",
      "why_it_matters": "計算負荷の高いNP困難問題において、環境負荷（カーボンプリント）を明示的な最適化対象に含めることで、持続可能なAIコンピューティングの新しい基準を提示しています。",
      "tags": [
        "組合せ最適化",
        "グリーンAI",
        "エネルギー効率"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29252",
      "title": "Zarc: Exact Nearest Neighbors over a Billion Vectors in Seconds",
      "url": "https://arxiv.org/abs/2611.29252",
      "pdf": "https://arxiv.org/pdf/2611.29252",
      "authors": [
        "Dongfang Zhao"
      ],
      "categories": [
        "cs.DC",
        "cs.DB",
        "cs.IR",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Identical to https://zenodo.org/records/23674584",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "answers 10,000 exact queries over one billion vectors in 1.1 seconds instead of five minutes.",
      "signals": [],
      "headline": "10億個のベクトルから秒単位で厳密近傍探索を行うZarc",
      "what": "GPUメモリにはデータの短い要約（ハーフプレ精度）のみを保持し、候補となる完全なベクトルのみをホストメモリ（RAM）から取得するアーキテクチャを持つ、厳密なk近傍探索システムです。Euclidean、cosine、内積などの検索に対応し、データの更新もサポートします。",
      "enables": "4枚のH100 GPUを用いて、10億個のベクトルに対する1万件の厳密クエリを1.1秒で処理しました。これは全探索と比較して250倍以上高速であり、LLMのアテンション計算も最大13.1倍高速化します。",
      "why_it_matters": "近似解（ANN）ではなく厳密解を、GPUメモリに収まりきらない巨大スケールで高速に検索できるため、大規模LLMの長期メモリやデータの重複排除などの基盤インフラを劇的に効率化します。",
      "tags": [
        "ベクトル検索",
        "GPU計算",
        "LLM"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28167",
      "title": "VideoJSON: A Minimal Harness Beats Purpose-Built Memory for Ultra-Long Video Understanding",
      "url": "https://arxiv.org/abs/2611.28167",
      "pdf": "https://arxiv.org/pdf/2611.28167",
      "authors": [
        "Wenqi Marshall Guo",
        "Kuan-Hao Huang",
        "Junda Chen",
        "Hao Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 2,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "VideoJSON with DeepSeek V4.1 Flash outperforms MAGIC-Video by 7.0, 20.0, and 24.75 points on EgoLifeQA, Ego-R1-Bench, and MM-Lifelong Week",
      "signals": [],
      "headline": "コード生成エージェントによる超長時間動画の理解手法VideoJSON",
      "what": "数日〜数週間にわたる超長時間動画を解析するため、各分を詳細なJSONレコード（キャプション、イベント、音声等）に索引化し、コーディングエージェントがPythonやBashを用いてそのJSONを検索・加工するフレームワークです。生動画へのアクセスを必要としません。",
      "enables": "超長時間動画ベンチマークにおいて、既存手法を最大24.75ポイント上回る圧倒的なスコアを記録しました。Qwen-3.5-Flashなどの軽量モデルでも、ファインチューニングにより大幅な精度向上が可能です。",
      "why_it_matters": "複雑なメモリ構造や検索パイプラインを事前に設計するのではなく、エージェントに「検索プログラム」を書かせるという最小限のアプローチが、極めて長い文脈の理解に有効であることを示しました。",
      "tags": [
        "動画理解",
        "AIエージェント",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28195",
      "title": "torchtsetlin: Fast, Interpretable Tsetlin Machines for PyTorch",
      "url": "https://arxiv.org/abs/2611.28195",
      "pdf": "https://arxiv.org/pdf/2611.28195",
      "authors": [
        "Vajira Thambawita",
        "P{\\aa}l Halvorsen",
        "Ole-Christoffer Granmo"
      ],
      "categories": [
        "cs.AI",
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
        "new"
      ],
      "star_quote": "Its core technique is a batched formulation of Type I and Type II feedback, in which automaton transitions become event counts realised as binomial draws",
      "signals": [],
      "headline": "PyTorchに統合された高速かつ解釈可能なtorchtsetlin",
      "what": "論理ルールを学習するTsetlin Machineを、PyTorchのモジュールとして完全に実装したライブラリです。勾配降下法ではなく報酬・ペナルティで学習する特性を維持しつつ、フィードバック処理をバッチ化することでGPU上での高速な演算を可能にしています。",
      "enables": "既存のTsetlin Machineライブラリと比較して、精度を維持しながら学習速度を2.4倍から81.2倍向上させました。state_dict()による保存や.to(device)による移動など、PyTorchのエコシステムをそのまま利用可能です。",
      "why_it_matters": "解釈性の高さが求められる分野において、従来の深層学習フレームワークと同じ感覚で、より高速かつ簡便に「論理ベースのAI」を構築・訓練できる環境を提供します。",
      "tags": [
        "PyTorch",
        "解釈可能なAI",
        "機械学習"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28275",
      "title": "eSPG: The Unreasonable Effectiveness of Event Speckle Plethysmography",
      "url": "https://arxiv.org/abs/2611.28275",
      "pdf": "https://arxiv.org/pdf/2611.28275",
      "authors": [
        "Aniket Dashpute",
        "Anirudh Bindiganavale Harish",
        "Bhargav Ghanekar",
        "Alankar Kotwal",
        "Andrew Negrut",
        "Syna Gupta"
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
        "cap"
      ],
      "star_quote": "This distance exceeds previous remote plethysmography demonstrations by an order of magnitude and previous speckle plethysmography demonstrations by over three orders",
      "signals": [],
      "headline": "1km先から心拍数を非接触計測するイベントスペクトル心拍計",
      "what": "低出力レーザーを照射し、生じる動的なスペックルパターンの変化をイベントカメラで捉える手法「eSPG」を提案しています。イベントカメラの高い時間解像度と感度を活用することで、微細な血流由来の変動を抽出します。",
      "enables": "1kmという極めて長距離から、平均絶対誤差5 bpmという精度で心拍数の推定に成功しました。これは従来の非接触計測の記録を大幅に更新するものです。",
      "why_it_matters": "救助活動や遠隔医療において、照明条件や動きに強い、これまでにない長距離かつ頑健な生体情報モニタリング技術を実現します。",
      "tags": [
        "生体計測",
        "イベントカメラ",
        "リモートセンシング"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28640",
      "title": "Mitigating Backdoors in Masked Diffusion Language Models",
      "url": "https://arxiv.org/abs/2611.28640",
      "pdf": "https://arxiv.org/pdf/2611.28640",
      "authors": [
        "Chengzhong Wang",
        "Lang Lin",
        "Shengfang Zhai",
        "Chenru Wang",
        "Daniel Yiming Cao",
        "Sheng-Yen Chou"
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
      "star_quote": "UNMASK detects 99.3% of trigger-containing inputs at a 5% false-positive rate, substantially outperforming the strongest adapted baseline, which achieves 54.8%",
      "signals": [],
      "headline": "マスク型拡散言語モデルのバックドアを検知・除去するUNMASK",
      "what": "Masked Diffusion Language Models (MDLMs) に対する初のバックドア防御フレームワークです。トリガーの「特異性」と「支配性」を利用して疑わしいトークンをスコアリングし、MDLM特有の並列予測・再構成能力を用いてトリガーの特定と除去を行います。",
      "enables": "40の異なる設定において、99.3%のトリガー入力を検知し、攻撃成功率を95%から1%以下に低減しました。一方でクリーンな入力に対する性能はほぼ維持されます。",
      "why_it_matters": "自己回帰モデルとは異なる特性を持つ拡散型言語モデルにおいて、実用的なセキュリティ対策を確立し、安全なマルチトークン並列生成を支えます。",
      "tags": [
        "LLM",
        "AI安全",
        "バックドア対策"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29099",
      "title": "TesseraFlow: Scalable Video Diffusion for Dynamic Medical Imaging Inverse Problems",
      "url": "https://arxiv.org/abs/2611.29099",
      "pdf": "https://arxiv.org/pdf/2611.29099",
      "authors": [
        "Atakan Topcu",
        "Mohammadhossein Momeni",
        "Alfredo De Goyeneche",
        "Michael Lustig"
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
        "sota"
      ],
      "star_quote": "TesseraFlow reconstructs about one 256x256 frame per second, 20-367x faster than patch and latent video priors",
      "signals": [],
      "headline": "医療画像の動的再構成を劇的に高速化するTesseraFlow",
      "what": "MRIやCTなどの動的医療画像再構成のために、複素数空間でのピクセル空間フロー事前分布「TesseraFlow」と、サンプラー「ReTile」を提案しています。低解像度から高解像度へと段階的にデコードを行い、全フレームを常にフル解像度で処理することを避けています。",
      "enables": "既存の動画事前分布を用いた手法と比較して20〜367倍高速に動作し、1フレームあたり約1秒での再構成を可能にしました。心臓、脳、腹部などの複数部位で高い再構成精度を達成しています。",
      "why_it_matters": "高品質だが推論に数分かかっていた生成AIベースの画像再構成を、実用的な時間枠内（秒単位）に収めることで、医療現場での診断支援への適用を現実的にしています。",
      "tags": [
        "医療画像",
        "画像再構成",
        "拡散モデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29336",
      "title": "Probe Before You Learn: Allocating Prompts from Initial Gradients under Label Noise",
      "url": "https://arxiv.org/abs/2611.29336",
      "pdf": "https://arxiv.org/pdf/2611.29336",
      "authors": [
        "Jiazhe Zhang",
        "Zibin Geng",
        "Qiang Ma",
        "Xuefeng Jiang",
        "Yijun Lin",
        "Jingyi Wang"
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
        "new"
      ],
      "star_quote": "derives allocation between text and visual prompts using only loss gradients at initialization",
      "signals": [],
      "headline": "初期勾配を用いてプロンプト配分を最適化するGPrompt",
      "what": "VLMのプロンプト学習において、ラベルノイズの影響を抑えるため、テキストと視覚プロンプトのパラメータ配分（アロケーション）を最適化する手法です。学習開始前の初期勾配の幾何学的特性を解析することで、トレーニングなしで最適な配分を決定します。",
      "enables": "11個のデータセットにおいて、最強のベースラインを最大7.75%上回り、網羅的な学習によって得られる「最良の配分」に近い構成を99.9%低い計算コストで選択可能です。",
      "why_it_matters": "ノイズの多い実データ環境において、試行錯誤（Brute-force）なしにタスクごとに最適なモデル構成を瞬時に導き出せる実用的な適応手法です。",
      "tags": [
        "VLM",
        "プロンプト学習",
        "ロバスト性"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30104",
      "title": "A Polynomial-Time Best-of-Both-Worlds Algorithm for Matroid Semi-Bandit Problems",
      "url": "https://arxiv.org/abs/2611.30104",
      "pdf": "https://arxiv.org/pdf/2611.30104",
      "authors": [
        "Botao Chen",
        "Junya Honda"
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
      "star_quote": "the first polynomial-time algorithm for matroid semi-bandits that achieves BOBW guarantees",
      "signals": [],
      "headline": "マトロイド・セミバンディット問題に対する多項式時間のBOBWアルゴリズム",
      "what": "Follow-the-Perturbed-Leader (FTPL) フレームワークを用い、幾何リサンプリングと特定の分布（Frechet/Pareto）を組み合わせることで、敵対的設定と確率的設定の両方で最適な後悔（Regret）を達成するアルゴリズムを提案しています。",
      "enables": "マトロイド・セミバンディット問題において、敵対的設定でO(√(mdT))、確率的設定で対数的な後悔を、多項式時間で同時に達成できることが初めて示されました。",
      "why_it_matters": "理論的に優れた性能（Best-of-Both-Worlds）を持ちながら、計算量的に実行可能なアルゴリズムを提供したことで、オンライン学習の応用範囲を広げます。",
      "tags": [
        "オンライン学習",
        "強化学習",
        "アルゴリズム理論"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30728",
      "title": "Same Seed, Different Picture? Deciding Early at Low Resolution for Seed-Faithful Few-Step Flow Sampling",
      "url": "https://arxiv.org/abs/2611.30728",
      "pdf": "https://arxiv.org/pdf/2611.30728",
      "authors": [
        "Huiran Duan",
        "Weilun Feng",
        "Yuqi Li",
        "Yingli Tian"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "43 pages, 27 figures, 38 tables. Project page: https://duanhuiran.github.io/DtR",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We therefore propose Decide-then-Render (DtR), a training-free sampler that decides the composition in a few low-resolution steps",
      "signals": [],
      "headline": "低解像度での早期決定によりシードへの忠実度を保つDtRサンプラー",
      "what": "Flowベースの画像生成モデルにおいて、少数のステップでサンプリングする際にも、標準的な50ステップと同じ構図や属性（シードへの忠実度）を維持するための手法「Decide-then-Render (DtR)」です。構図が決まる初期段階のみ低解像度で高速に処理し、後に高解像度で詳細を書き込みます。",
      "enables": "FLUX.1-dev等の大規模モデルにおいて、参照サンプラーより11〜25倍高速でありながら、既存の高速サンプラーよりも圧倒的に高いシード忠実度と画像品質を達成しました。",
      "why_it_matters": "「速いが構図が変わってしまう」という高速サンプラーの共通課題を解決し、クリエイティブな制作において一貫性を保ったまま試行錯誤のサイクルを高速化します。",
      "tags": [
        "画像生成",
        "高速推論",
        "拡散モデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.31212",
      "title": "Flood forecasting using a physics-guided conditional denoising diffusion probabilistic model",
      "url": "https://arxiv.org/abs/2611.31212",
      "pdf": "https://arxiv.org/pdf/2611.31212",
      "authors": [
        "Omar Sallam",
        "David Coe",
        "Jeremy Feinstein",
        "Hugo Torres",
        "Sofia Sahagun Covarrubias",
        "Eugene Yan"
      ],
      "categories": [
        "physics.flu-dyn",
        "cs.LG",
        "physics.geo-ph"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages, 25 figures, 9 tables. Submitted to Journal of Hydrology",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "Physics-guided diffusion models are thus promising probabilistic surrogates for regional-scale flood forecasting.",
      "signals": [],
      "headline": "物理ガイド付き拡散モデルによる高速・高精度な洪水予測",
      "what": "30m解像度の洪水進展を予測するための、物理（浅水方程式）ガイド付き条件付き拡散モデルです。粗い（100m/150m）流体力学シミュレーションを条件として与えることで、詳細な水位変化のアンサンブル予測を行います。",
      "enables": "単一GPU上で、従来の30m解像度シミュレーションと比較して7.8〜16.3倍、14日間予測では最大49倍の高速化を実現しました。粗い入力を組み合わせることで水位の誤差（RMSE）を約1/3に低減可能です。",
      "why_it_matters": "膨大な計算時間を要していた広域の洪水予測を、物理的整合性を保ちつつ現実的な時間内で、かつ不確実性を考慮した確率的な形で提供できる実用的な手法です。",
      "tags": [
        "洪水予測",
        "拡散モデル",
        "物理ガイド付き学習"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29897",
      "title": "Motion Mamba 2.0: Autoregressive Diffusion Mamba for Long-Horizon Humanoid Control",
      "url": "https://arxiv.org/abs/2611.29897",
      "pdf": "https://arxiv.org/pdf/2611.29897",
      "authors": [
        "Yue Huang",
        "Tianshan Zhang",
        "Zeyu Zhang",
        "Jayeon Kang",
        "Akide Liu",
        "Sungjoon Choi"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/AIGeeksGroup/MotionMamba2.0. Website: https://aigeeksgroup.github.io/MotionMamba2.0",
      "hf_upvotes": 175,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲175"
      ],
      "headline": "長期間のヒューマノイド制御を実現するMotion Mamba 2.0",
      "what": "双方向のアテンション、回帰状態、および永続的コンテンツメモリ（PCM）を統合したMambaベースの拡散アーキテクチャです。圧縮された過去の動きの履歴をメモリとして保持し、長期間（最大40秒弱）の一貫した動作生成を可能にします。",
      "enables": "RTX 4090上で、出力を維持したまま推論遅延を1685msから276msへと約6.1倍高速化しました。実機のUnitree G1において、キーボード操作やテキストによる複雑な動作指示へのリアルタイム対応を実現しました。",
      "why_it_matters": "インタラクティブなアニメーションやロボット制御において、長い履歴を考慮した一貫性のある動作を、低遅延で生成できる実用的な基盤技術を確立しました。",
      "tags": [
        "ロボティクス",
        "Mamba",
        "動作生成"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30989",
      "title": "WorldLeague: Benchmarking Physical Agency",
      "url": "https://arxiv.org/abs/2611.30989",
      "pdf": "https://arxiv.org/pdf/2611.30989",
      "authors": [
        "Xinyang Zhou",
        "Qi Li",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 102,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲102"
      ],
      "headline": "AIシステムの物理的自律性を多角的に評価するWorldLeague",
      "what": "ロボットエージェントの「物理的自律性」を測定するためのベンチマークです。探索、再配置、環境変化への適応など、60のシミュレーションタスクを通じて、VLM、VLA、WAMなどの異なるタイプのAIを同一の指標（Interactive Scoreと成功率）で比較します。",
      "enables": "13種類の最新AIモデルの能力を「Physical Agency Profile」として可視化しました。現状、Claude Fable 5.2が最も高いスコアを記録していますが、依然として物理的な目標達成には大きな課題があることが浮き彫りになりました。",
      "why_it_matters": "「正解を言うこと」と「物理的に目的を達成すること」のギャップを定量化し、今後のEmbodied AI開発に向けた共通の評価基準を提供しています。",
      "tags": [
        "ロボティクス",
        "ベンチマーク",
        "Embodied AI"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.31201",
      "title": "Embo-Harness: Towards Understanding Frontier-Model-as-Policy Harness",
      "url": "https://arxiv.org/abs/2611.31201",
      "pdf": "https://arxiv.org/pdf/2611.31201",
      "authors": [
        "Xiao-Ming Wu",
        "Kang Liao",
        "Yuexiao Ma",
        "Taolin Zhang",
        "Mingqian Zhou",
        "Nuo Chen"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://dravenalg.github.io/projects/Embo-Harness/",
      "hf_upvotes": 90,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲90"
      ],
      "headline": "最新マルチモーダルモデルをロボットのポリシーとして活用するEmbo-Harness",
      "what": "フロンティア級のマルチモーダルモデルを直接ロボットのポリシー（行動決定器）として使うためのフレームワークと設計指針の研究です。プロンプト、計画、アクション実行、ツール利用の4要素を体系的に調査し、最適な「レシピ」を提案しています。",
      "enables": "RoboLab-120において成功率83.3%を達成し、既存の最強ベースラインを26.2ポイント上回りました。また、実機での4つのタスクにおいても20回中15回のゼロショット成功を記録しました。",
      "why_it_matters": "大規模モデルの「視覚的推論能力」を最大限に引き出すための実践的な設計手法を明らかにし、専門的な学習なしで高度なロボット操作を実現する道筋を示しています。",
      "tags": [
        "ロボティクス",
        "VLM",
        "ポリシー学習"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30013",
      "title": "3AGameFactory-Motion: Agentic Rigging and Reliable Complex Motion Generation for Diverse 3D Assets",
      "url": "https://arxiv.org/abs/2611.30013",
      "pdf": "https://arxiv.org/pdf/2611.30013",
      "authors": [
        "Bohan Zeng",
        "Kaixin Zhu",
        "Yifan Yang",
        "Dongge Yu",
        "Zihao Wu",
        "Yifan Dai"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19pages, 10 figures",
      "hf_upvotes": 57,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲57"
      ],
      "headline": "エージェントがプログラムを生成して3Dアセットを動かす3AGameFactory",
      "what": "任意の3Dアセットに対し、LLMエージェントが「スケルトンとモーションのプログラム」を書き下ろすことでアニメーションを作成するフレームワークです。直接生成するのではなく、決定論的な実行器を通じてリギングや運動学的な解決を行います。",
      "enables": "多様な形態（6カテゴリ）や複雑な指示に対応するベンチマークDivDynBenchを構築し、提案手法がリギングの信頼性と動作制御の正確性において既存の生成手法を上回ることを示しました。",
      "why_it_matters": "画像や動画の生成とは異なり、3Dアセットの構造を論理的に推論して「制御可能なプログラム」として出力することで、ゲーム制作などの実務で使いやすい精緻な動作制御を実現しています。",
      "tags": [
        "3Dアニメーション",
        "AIエージェント",
        "リギング"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30662",
      "title": "WeMM-Ecom: Advancing Multimodal Content Understanding for WeChat E-Commerce",
      "url": "https://arxiv.org/abs/2611.30662",
      "pdf": "https://arxiv.org/pdf/2611.30662",
      "authors": [
        "Binhui Xie",
        "Jinmin Li",
        "Haomiao Tang",
        "Guangting Wang",
        "Song Jin",
        "Jianwei Zhu"
      ],
      "categories": [
        "cs.AI",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 53,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲53"
      ],
      "headline": "WeChatのEC体験を支えるマルチモーダル基盤モデルWeMM-Ecom",
      "what": "WeChatのEコマース向けに特化したマルチモーダルLLMのファミリーです。0.8Bから35B（Active 3B）までの5サイズを展開し、大量のECデータを用いた継続事前学習と、蒸留・強化学習を組み合わせたポストトレーニングを行っています。",
      "enables": "構築した28のECベンチマークにおいて、Qwen3.8-Flashなどの大規模なオープンモデルを凌駕する性能を達成しました。現在、WeChat内で商品検索やライブコマースなどの実機サービスに投入され、1日10億規模のリクエストを処理しています。",
      "why_it_matters": "汎用性能を維持しつつ、特定ドメイン（EC）において圧倒的な専門性を発揮するモデルの構築手法と、実サービスでの大規模運用の知見を提供しています。",
      "tags": [
        "VLM",
        "Eコマース",
        "ドメイン特化モデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29338",
      "title": "A Glimpse of Training VLMs as Foundation Models for Robotic Manipulation",
      "url": "https://arxiv.org/abs/2611.29338",
      "pdf": "https://arxiv.org/pdf/2611.29338",
      "authors": [
        "Meng-Hao Guo",
        "Yi Zhang",
        "Zhe-Han Mo",
        "Han-Zheng Wang",
        "Jia-Jun Wang",
        "Xin-Sheng Chen"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 53,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲53"
      ],
      "headline": "意味的アクション設計と性能維持SFTにより、VLMのロボット操作における汎化性能と効率を向上",
      "what": "ロボットの動作を再利用可能なパラメータ付きプリミティブと意味的なステップとして定義し、事前学習済みVLMの能力を損なわないCapability-Preserving Supervised Fine-Tuning（CP-SFT）を提案しています。5,000時間以上のロボットデータとVQAデータを用いてnanoAstra-9Bを訓練し、構造化されたアクション空間への適応を行っています。",
      "enables": "RoboTwin 2.0ベンチマークにおいて17.8%のゼロショット成功率を達成し、既存のVLAモデルを上回りました。また、推論と動作をオーバーラップさせるストリーミング実行により、ロボットの待機時間を35.0%から6.9%に削減しています。",
      "why_it_matters": "GPT-6 Astraのような高い汎化性能を持つモデルの再現手法を提示しており、汎用的なVision-Language-Action（VLA）モデルの構築において、事前学習済みモデルの知識保持と実時間制御の重要性を示しています。",
      "tags": [
        "VLA",
        "ロボティクス",
        "ファウンデーションモデル"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.28202",
      "title": "AutoPILOT: A Visual Agent Harness for Real-Time Gameplay",
      "url": "https://arxiv.org/abs/2611.28202",
      "pdf": "https://arxiv.org/pdf/2611.28202",
      "authors": [
        "Mark Zhao",
        "Pengcheng Wang",
        "Rui Yang",
        "Jiarui Yao",
        "Xirui Jiang",
        "Yuxi Chen"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "32 pages, 10 figures, 21 tables",
      "hf_upvotes": 32,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲32"
      ],
      "headline": "リアルタイムゲーム向けエージェント設計AutoPILOT：モデル出力を動的な制御コードへ変換",
      "what": "VLMをリアルタイムゲームに適応させるためのハーネス（Harness）設計手法であり、モデル呼び出しのたびに基本アクション、オープンループのマクロ、またはクローズドループのコントローラを生成して実行します。あわせて、実時間での応答性が求められる120種のブラウザゲームからなるAFK-Benchを提案しています。",
      "enables": "GPT-6.1 Solを用いた評価において、既存のVISTAの38.3%に対し68.6%という高いリアルタイム成功率を記録しました。また、VISTAと同等の成功率を5分の1のAPIコストで達成し、推論頻度によらない自律的なアクション継続が可能になりました。",
      "why_it_matters": "モデルの思考速度が環境の進行に追いつかない課題に対し、推論結果を一定期間の自律制御に委ねることで、「待ってくれない」現実世界のタスクにLLM/VLMを適用する新たな設計指針を与えています。",
      "tags": [
        "マルチモーダルエージェント",
        "リアルタイム制御",
        "VLM"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.30835",
      "title": "The KL Divergence Is Never Negative, Except in PyTorch",
      "url": "https://arxiv.org/abs/2611.30835",
      "pdf": "https://arxiv.org/pdf/2611.30835",
      "authors": [
        "Zhen Yang",
        "Wei Tang",
        "Chu Chen",
        "Rui Qian",
        "Yixuan Chen",
        "Fan Yang"
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
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HN 86pt"
      ],
      "headline": "PyTorchにおけるKLダイバージェンスの負値問題を修正し、モデル訓練の精度と安定性を改善",
      "what": "PyTorchのF.kl_divや標準的な数式が浮動小数点演算の精度限界により負の値を返す「サイレントな失敗」を特定し、その修正手法を提案しています。安定した閉形式の分解、補償演算（Compensated Arithmetic）、解析的勾配を用いることで、CPUおよびGPU上での数値誤差を排除します。",
      "enables": "850万件以上の入力テストにおいて、FP32の85%以上で見られた1%以上の相対誤差をほぼ解消しました。蒸留におけるトップ1不一致率（最大97%）や、量子化LLMのレイヤーランキングにおける誤判定、GPT-2の回路分析でのエッジスコア異常などが修正されます。",
      "why_it_matters": "機械学習の根幹であるKLダイバージェンスの計算実装に潜む広範なバグを明らかにしており、微小な分布差を扱う蒸留やベイズ決定論などの応用分野において信頼性を担保する重要な知見です。",
      "tags": [
        "数値計算",
        "機械学習基盤",
        "PyTorch"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    },
    {
      "id": "2611.29853",
      "title": "Landscape and Taxonomy of Prompt Engineering Patterns in Software Engineering",
      "url": "https://arxiv.org/abs/2611.29853",
      "pdf": "https://arxiv.org/pdf/2611.29853",
      "authors": [
        "Yuya Sasaki",
        "Hironori Washizaki",
        "Jialong Li",
        "Nobukazu Yoshioka",
        "Naoyasu Ubayashi",
        "Yoshiaki Fukazawa"
      ],
      "categories": [
        "cs.SE",
        "cs.AI"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Published in IEEE IT Professional, vol. 27, no. 1, pp. 41-49, 2025. Recipient of the IT Professional 2025 Best Paper Award. 8 pages, 2 figures",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "ソフトウェア開発におけるプロンプトエンジニアリング・パターンの体系的な分類と分析",
      "what": "ソフトウェア開発タスクにおいてLLMの性能を最大化するためのプロンプトパターンを調査し、タクソノミー（体系的分類）を構築しています。2023年初頭のLLMがコンテキスト長や推論能力に制約を抱えていた時期の文献レビューに基づき、ユーザビリティと信頼性を高めるテクニックを整理しています。",
      "enables": "曖昧な指示への対応やタスク実行の最適化において、どのようなプロンプト設計が有効であるかを構造的に理解することを可能にします。モデルの進化にかかわらず重要となる、設計パターンによる性能向上の役割を明確にしています。",
      "why_it_matters": "LLMをソフトウェア工学のワークフローに組み込むエンジニアにとって、経験則に頼らないプロンプト設計のベストプラクティスをパターンとして参照できる意義があります。",
      "tags": [
        "ソフトウェア工学",
        "プロンプトエンジニアリング",
        "LLM"
      ],
      "fetched_at": "2026-11-25T11:35:22.277841+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.29897",
      "title": "Motion Mamba 2.0: Autoregressive Diffusion Mamba for Long-Horizon Humanoid Control",
      "abstract": "Long-horizon, real-time controllable motion generation is essential for interactive animation and humanoid robotics, where an agent must respond to changing instructions and spatial goals while moving. Existing autoregressive diffusion methods generate motion incrementally, but bounded attention caches limit access to distant history, while repeated denoising introduces substantial inference overhead. We present Motion Mamba 2.0, a Mamba-based root-body diffusion architecture that integrates local attention, resumable recurrent states, and persistent content memory (PCM) for long-horizon controllable motion generation. PCM transforms compressed motion history from Mamba recurrent states, together with state changes and text-conditioned features, into dynamically updated content slots accessible to local attention. To enable efficient inference, we further develop an execution scheme tailored to this architecture, combining CUDA Graph replay, fused kernels, and execution-flow simplification while preserving the canonical history update. Evaluations on retargeted HiPHI demonstrate accurate terminal control over rollouts of up to 39.52 s, while short-horizon comparisons on BONES Seed and retargeted HumanML3D show that the model also retains strong spatial control and text-motion matching. On an RTX 4090, the optimized execution reduces median complete-window latency from 1685.35 to 276.14 ms, achieving a median paired speedup of 6.138times while preserving identical outputs and committed states in the tested rollouts. Moreover, we conduct extensive real-world evaluation on the Unitree G1, demonstrating sequential text-guided action composition, expressive motion, and interactive locomotion through keyboard and mouse control.",
      "upvotes": 175,
      "github_stars": 23,
      "github_repo": "https://github.com/AIGeeksGroup/MotionMamba2.0",
      "project_page": "https://aigeeksgroup.github.io/MotionMamba2.0/",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.29897",
      "arxiv_url": "https://arxiv.org/abs/2611.29897",
      "title_ja": "Motion Mamba 2.0: ヒューマノイド制御のための自己回帰拡散Mamba",
      "summary_ja": "Mambaを基盤に、長期の履歴を保持しつつリアルタイムで制御可能な高品質な人型動作生成を実現。"
    },
    {
      "id": "2611.24738",
      "title": "Jeveration: System One Models Now Generate",
      "abstract": "System One models such as Jev return decisions through fast, parallel prediction. In this paper, we introduce Jeveration, showing that the same decision paradigm can also generate high-quality images in a single forward pass. Jeveration builds on a frozen vision-language model, repurposing its visual-semantic knowledge for holistic image generation. The key challenge is to maintain global consistency. A single prompt admits many valid images, yet parallel predictions must converge on a coherent whole. We therefore condition all positions on a shared random state to coordinate parallel predictions, so that each draw yields a different but coherent image. Since the model tends to ignore this state under direct image supervision, we first learn a distribution over discrete image codes to guide single-pass generation. Beyond text-to-image generation, we further unify image-to-image generation and dense prediction within the same architecture, so that one checkpoint supports all three tasks, each in one forward pass. Experiments show that Jeveration generates a 512x512 image in 78 ms, up to 122x faster than existing unified models, while maintaining competitive image quality and dense prediction performance.",
      "upvotes": 156,
      "github_stars": 163,
      "github_repo": "https://github.com/Carol-lyh/Jeveration",
      "project_page": "https://carol-lyh.github.io/Jeveration/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.24738",
      "arxiv_url": "https://arxiv.org/abs/2611.24738",
      "title_ja": "Jeveration: システム1モデルによる画像生成の実現",
      "summary_ja": "高速な意思決定を行うVLMを用い、共有ランダム状態により一貫性を保ちつつ単一のフォワードパスで画像生成が可能。"
    },
    {
      "id": "2611.30989",
      "title": "WorldLeague: Benchmarking Physical Agency",
      "abstract": "AI systems can now operate Blender, follow instructions in complex video games, and manipulate objects with robot arms. What range of physical goals can today's AI systems achieve autonomously? Answering this question requires testing systems on tasks that demand different combinations of perception, memory, planning, and action. We introduce WorldLeague, a benchmark that compares AI systems on a common set of 60 simulated robot tasks by measuring progress toward each task's physical goal from the robot's trajectory. Robots explore scenes to gather evidence in WorldSeek, rearrange objects in WorldShape, and adapt to changes in WorldShift. Tying these goals to a single control interface limits which AI systems can be compared. In WorldLeague, vision-language models (VLMs) choose targets and motions, while vision-language-action models (VLAs) and world-action models (WAMs) use their native controls. For each of six capability dimensions, we measure how much progress a system makes toward its goals (Interactive Score) and how often it achieves them (physical success rate). Together, these measures form the system's Physical Agency Profile. Among 13 representative AI systems, Claude Fable 5.2 achieves 13 of the 60 goals and earns the highest mean Interactive Score (28.58/100). Fable leads in four dimensions, while GPT-6.1-Sol and GPT-6-Astra tie for first on rule-following tasks. Even when VLMs answer every final question correctly, they receive an Interactive Score of zero in 71.8\\% of those episodes. WorldLeague gives Embodied AI, Physical AI, and Agentic AI a shared basis for comparing what AI systems achieve autonomously, from partial progress toward a physical goal to full goal completion. Project Webpage: https://xyangzhou.github.io/WorldLeague",
      "upvotes": 102,
      "github_stars": 18,
      "github_repo": "https://github.com/xyangzhou/WorldLeague",
      "project_page": "https://xyangzhou.github.io/WorldLeague/",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.30989",
      "arxiv_url": "https://arxiv.org/abs/2611.30989",
      "title_ja": "WorldLeague: 物理的エージェンシーのベンチマーク",
      "summary_ja": "知覚・記憶・計画・行動が必要な60のロボットタスクを通じて、AIの物理的な目標達成能力を総合的に評価。"
    },
    {
      "id": "2611.27193",
      "title": "cmHC: Balancing Stream Mixing in Hyper-Connections via Geometric Contraction",
      "abstract": "Manifold-constrained Hyper-Connections (mHC) extends residual connections to multiple streams and stabilizes residual propagation by constraining stream-mixing residual matrices to the Birkhoff polytope, the set of doubly stochastic matrices. In this work, we investigate how to effectively mix residual streams within the Birkhoff polytope. We reveal a mixing trade-off: when under-mixed residual matrices stay close to the vertices of the Birkhoff polytope, hyper-connections will degenerate into a set of nearly independent streams; when over-mixed residual matrices are concentrated around the uniform barycenter of the polytope, streams will become less distinguishable from each other. We theoretically validate our findings by bounding the cumulative residual mixing, stream difference and gradient difference of mixing coefficients across layers. Motivated by these findings, we propose Contraction for Manifold-Constrained Hyper-Connections (cmHC), an exact doubly stochastic method which geometrically contracts the Birkhoff polytope toward its interior. This contraction mitigates under-mixing by forcing the residual matrices to explore deeper into the polytope, with a provable stream mixing bound and no new parameterization. Moreover, we apply a moderate contraction at the shallow layers to prevent over-mixing, enabling stable gradient propagation on extremely large-scale model pretraining. Extensive experiments across dense and mixture-of-experts models at various parameter scales demonstrate the effectiveness and scalability of cmHC. We also develop fused operators for cmHC on Ascend NPUs, reducing hyper-connection execution latency by up to 44.8%.",
      "upvotes": 94,
      "github_stars": 1,
      "github_repo": "https://github.com/Newiz430/cmHC",
      "project_page": "",
      "comments": 3,
      "org": "XingChen-AGI",
      "url": "https://huggingface.co/papers/2611.27193",
      "arxiv_url": "https://arxiv.org/abs/2611.27193",
      "title_ja": "cmHC: 幾何学的収縮によるハイパーコネクションのストリーム混合バランス",
      "summary_ja": "残差ストリームの混合におけるトレードオフを解明し、混合の集中を防ぎつつ独立性を保つ新たな手法を提案。"
    },
    {
      "id": "2611.31201",
      "title": "Embo-Harness: Towards Understanding Frontier-Model-as-Policy Harness",
      "abstract": "Frontier multimodal models exhibit extraordinary generalization in generating robot actions from observations and instructions, enabling a new paradigm in which they serve directly as policies within closed-loop robotic harnesses. However, the design principles of such harnesses, and the capabilities underlying their strong performance, remain unclear. We present Embo-Harness, a framework for systematically studying frontier-model-as-policy harnesses. We investigate four components of the robotic agentic loop, namely, prompting, planning, action execution, and tool use, and distill six empirical findings into a practical recipe. This recipe prioritizes interfaces that exploit the model's native visual reasoning and tool-use capabilities over handcrafted plans, skills, or action priors, and identifies effective choices for action representation, chunking, reasoning effort, visual observations, short multi-action sequences, and policy refinement. On RoboLab-120, Embo-Harness achieves an 83.3\\% success rate, outperforming the strongest reported baseline by 26.2 percentage points. It also succeeds in 15 of 20 zero-shot trials across four real-world manipulation tasks. Beyond performance, controlled interventions indicate that the studied model depends more strongly on accurate spatial target estimation than on explicit low-level joint or trajectory generation. These results provide both a practical recipe for building strong frontier-model-as-policy harnesses and a clearer account of the capabilities that drive their performance.",
      "upvotes": 90,
      "github_stars": 59,
      "github_repo": "https://github.com/DravenALG/Embo-Harness",
      "project_page": "https://dravenalg.github.io/projects/Embo-Harness/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.31201",
      "arxiv_url": "https://arxiv.org/abs/2611.31201",
      "title_ja": "Embo-Harness: フロンティアモデルを方策とするハーネスの理解に向けて",
      "summary_ja": "VLMを直接ロボットの方策として使う際の設計原則を体系的に調査し、最適な構成を「レシピ」として提示。"
    },
    {
      "id": "2611.27963",
      "title": "Non-penetrating World Models",
      "abstract": "We study a new problem of preventing object penetration in interactive video world models. To understand how existing models handle this, we introduce NoPeBench, a benchmark that evaluates how world models respond to physical obstacles. Our evaluation reveals that none of the open-source models can reliably prevent such failures. Surprisingly, however, these models already encode the information needed to predict such violations. We find that the hidden states of diffusion transformers (DiTs) can predict whether a candidate action will penetrate an obstacle. Building on this, we introduce NoPeWorld, a lightweight framework that detects and prevents penetration. Specifically, we train a small prediction head on top of a frozen DiT's hidden states to read out if a candidate action is safe or not. Unsafe actions are then replaced with safe ones that best preserve the original intent. Despite its simplicity, NoPeWorld substantially reduces the physical violation rate, averaged over six video world models, from 74% to 16%. Remarkably, our method shows zero-shot generalization to open-domain imagery, third-person viewpoints, and moving obstacles. We publicly release our code, the NoPeBench benchmark, and model weights. Project Page: https://nopeworld.github.io .",
      "upvotes": 60,
      "github_stars": 43,
      "github_repo": "https://github.com/yuhangdai427/NoPeWorld",
      "project_page": "https://nopeworld.github.io/",
      "comments": 3,
      "org": "The Hong Kong Polytechnic University",
      "url": "https://huggingface.co/papers/2611.27963",
      "arxiv_url": "https://arxiv.org/abs/2611.27963",
      "title_ja": "非貫通型ワールドモデル",
      "summary_ja": "動画生成における物体の貫通問題を評価するベンチマークを導入し、隠れ状態から貫通を検知・回避する軽量枠組みを提案。"
    },
    {
      "id": "2611.30013",
      "title": "3AGameFactory-Motion: Agentic Rigging and Reliable Complex Motion Generation for Diverse 3D Assets",
      "abstract": "Animating arbitrary 3D assets from instructions requires both structural inference and motion control, yet existing motion benchmarks mostly cover conventional human or animal skeletons with simple instructions. We introduce DivDynBench, which evaluates rigging and motion generation across six morphology categories, with instructions requiring multi-phase part coordination and explicit timing, angle, repetition, and trajectory constraints. With large language models, we systematically compare three common paradigms: specialized motion generation, video generation followed by motion recovery, and direct agent-driven generation. We analyze their control capabilities, cross-morphology adaptability, and generation costs. Guided by this comparison, we propose an Agentic Motion Framework in which an agent writes compact parametric skeleton and motion programs, and a deterministic executor performs rigging, kinematic solving, and geometric correction. Compact parameter control reduces generation overhead and improves rigging reliability and motion-control accuracy, providing practical guidance for deploying complex 3D motion generation.",
      "upvotes": 57,
      "github_stars": 1377,
      "github_repo": "https://github.com/OpenDCAI/GameFactory-3A",
      "project_page": "",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.30013",
      "arxiv_url": "https://arxiv.org/abs/2611.30013",
      "title_ja": "3AGameFactory-Motion: 多様な3D資産のためのエージェント的リギングと複雑な動作生成",
      "summary_ja": "多様な形態の3Dモデルに対し、LLMを用いて制約の多い複雑な動作とリギングを生成・比較する手法を導入。"
    },
    {
      "id": "2611.26444",
      "title": "Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation",
      "abstract": "Embodied intelligence aims to let robots perform complex physical tasks with human-like adaptability and reliability, which requires three complementary capabilities: history-based cognitive reasoning, precise and timely physical execution, and the composition of reasoning and execution through environmental feedback. Yet existing benchmarks either evaluate reasoning and execution within the same tasks or assess them separately without their composition, so they reveal little about whether a failure comes from reasoning, execution, or their composition. We introduce Mind2Act World, a diagnostic benchmark of 30 simulated manipulation tasks from five real-world application domains. Each task has three difficulty levels and two scene settings (Clean and Random), yielding 180 configurations. The tasks form three views: Mind tests decisions based on past observations, Act tests precise and timely execution, and Mind2Act combines both in closed-loop tasks where action outcomes guide later decisions. Comparing the three views shows whether a system lacks a capability or fails to compose capabilities it already has. A diagnosis harness further attributes the failed episodes of three representative systems to Mind, Act, or their composition and summarizes each system in a profile card. Our evaluation of multimodal agents, vision-language-action models (VLAs), and world-action models (WAMs) shows that competence in a single view does not carry over to Mind2Act tasks. Even the strongest agent succeeds in 52.7% of Mind and 39.0% of Act episodes but in only 12.0% of Mind2Act episodes. The strongest agent retains task state but struggles with sustained contact, whereas end-to-end policies execute practiced motions but retain little task state. These findings point to composing reasoning and execution through environmental feedback as the main open problem.",
      "upvotes": 56,
      "github_stars": 51,
      "github_repo": "https://github.com/Mind2Act/Mind2Act_World",
      "project_page": "https://mind2act-world.com/",
      "comments": 4,
      "org": "Mind2Act-World",
      "url": "https://huggingface.co/papers/2611.26444",
      "arxiv_url": "https://arxiv.org/abs/2611.26444",
      "title_ja": "Mind2Act World: ロボット操作における知能、行動、およびその構成の診断ベンチマーク",
      "summary_ja": "認知推論、物理実行、およびその連携のどこに失敗の原因があるかを特定可能な30のロボット操作タスクを提供。"
    },
    {
      "id": "2611.21373",
      "title": "WeVisForensics: Self-Evolving Agent for Omni AI-Generated Video Detection",
      "abstract": "Recent advances in video generation call for reliable detection grounded in explicit forensic evidence. However, current methods primarily depend on single-pass chain-of-thought reasoning that overlooks brief or localized artifacts, or on predefined multi-agent workflows that offer limited flexibility in selecting relevant inspections. Even with adaptive investigation, optimizing the investigation policy alone does not directly improve the forensic capabilities of fixed experts. We introduce WeVisForensics, an agentic framework in which a main investigator agent coordinates a self-evolving library of forensic inspector sub-agents spanning visual and audio cues. The investigator learns which artifact type to examine, over which window, and when to conclude, and these interactions provide shared feedback for both levels of agents. Our dual-timescale policy optimization strategy, DTPO, closes this loop through fast reinforcement learning of the investigator and slower refinement of the inspectors, guided by annotated artifact intervals, to report subtle artifacts they once dismissed. Furthermore, we curate ForenCue-30K, combining role-specific forensic annotations and interaction trajectories to supervise individual inspections and their coordination, with an accompanying reinforcement-learning pool. Experiments show that WeVisForensics averages 95.2% detection accuracy across in-domain, out-of-domain and agentic benchmarks, 9.0% above the strongest prior detector, while grounding its verdicts in localized evidence.",
      "upvotes": 55,
      "github_stars": 64,
      "github_repo": "https://github.com/Tencent/WeVisForensics",
      "project_page": "https://tencent.github.io/WeVisForensics",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.21373",
      "arxiv_url": "https://arxiv.org/abs/2611.21373",
      "title_ja": "WeVisForensics: 全方位AI生成ビデオ検知のための自己進化型エージェント",
      "summary_ja": "視覚・音声の専門家エージェントを自己進化させ、連携させることで、AI生成動画の法科学的証拠を適応的に検出。"
    },
    {
      "id": "2611.30662",
      "title": "WeMM-Ecom: Advancing Multimodal Content Understanding for WeChat E-Commerce",
      "abstract": "We present WeMM-Ecom, a family of multimodal large language models that deliver frontier e-commerce capabilities while achieving state-of-the-art general-purpose performance at their respective scales. The family spans five sizes, from a 0.8B dense model to a 35B mixture-of-experts model with 3B active parameters. Our training pipeline begins with two-stage continued pre-training that progressively raises the proportion of e-commerce data within a diverse multimodal data mixture, followed by hybrid-thinking post-training that combines on-policy distillation and reinforcement learning to support both non-thinking and thinking modes. For evaluation, we construct a comprehensive suite of 28 e-commerce benchmarks (23 in-house and five open-source) covering eight business scenarios and complement it with 64 public general-purpose benchmarks. On the e-commerce suite, WeMM-Ecom-35B-A3B surpasses substantially larger open-source flagship models, including Qwen3.8-Flash-Next, HY4, and DeepSeek-V4.1-Flash. On the general-purpose suite, every WeMM-Ecom model surpasses its similarly sized Qwen3.5 counterpart, with the lightweight variants (e.g., WeMM-Ecom-2B) showing clear advantages over leading lightweight models such as Qwen3.5-2B, MiniCPM-V-4.7-1B, and LFM3-VL-2B. Beyond benchmarks, WeMM-Ecom now powers hundreds of production use cases in WeChat, including catalog management, multimodal product search, and livestream commerce, serving billion-scale requests per day. We publicly release all model weights and detail our data curation, training recipe, and benchmark construction to facilitate future work on domain-specialized multimodal models. We have released the model weights and code to facilitate future research at https://github.com/Tencent/WeMM-Ecom.",
      "upvotes": 53,
      "github_stars": 34,
      "github_repo": "https://github.com/Tencent/WeMM-Ecom",
      "project_page": "https://huggingface.co/collections/tencent/wemm-ecom",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.30662",
      "arxiv_url": "https://arxiv.org/abs/2611.30662",
      "title_ja": "WeMM-Ecom: WeChat Eコマースのためのマルチモーダル理解の進展",
      "summary_ja": "Eコマースに特化した大規模データと強化学習を用い、汎用性能と専門能力を両立させたVLMシリーズを開発。"
    },
    {
      "id": "2611.29338",
      "title": "A Glimpse of Training VLMs as Foundation Models for Robotic Manipulation",
      "abstract": "Recently, GPT-6 Astra demonstrates strong generalization in robot control, yet limited disclosure of its training leaves open how such capabilities can be reproduced. We introduce nanoAstra, an approach to training vision-language models (VLMs) for generalizable manipulation that combines semantic action modeling with capability-preserving supervised fine-tuning (CP-SFT). nanoAstra represents robot behavior as semantic steps composed of reusable, parameterized action primitives, guided by explicit progress descriptions. Meanwhile, CP-SFT uses an explicit robot-specific system prompt to constrain manipulation outputs to a structured action space, aiming to focus adaptation on robot-specific contexts and promote specialization while minimizing interference with broader pretrained capabilities. With this formulation, we train nanoAstra on more than 5,000 hours of robot data together with general VQA data. On RoboTwin 2.0's randomized benchmark, nanoAstra-9B achieves a 17.8% zero-shot success rate, substantially outperforming advanced VLA and WAM baselines as well as similarly sized VLMs. With inference faster than the corresponding motion execution on a single H20 GPU, our model supports action-chunk-like streaming execution that overlaps inference with motion, reducing the robot's idle time from 35.0% to 6.9%.",
      "upvotes": 53,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.29338",
      "arxiv_url": "https://arxiv.org/abs/2611.29338",
      "title_ja": "ロボット操作用基盤モデルとしてのVLM訓練の概観",
      "summary_ja": "意味的な行動モデリングと能力保持ファインチューニングにより、汎用的なロボット操作を可能にするVLM訓練法を提案。"
    },
    {
      "id": "2611.12164",
      "title": "Let the Fixer Decide: Training a Code Localizer from the Fixer's Likelihood",
      "abstract": "Code localizers are usually trained to predict the files a reference patch edits, but the code a fixer needs to read is not the same as the code it changes. We propose Fixer-Guided Localization (FGL): the localizer proposes several localizations, a frozen fixer scores each by how likely it makes a verified patch, and the localizer is trained on these scores with weighted supervised fine-tuning, without running tests and without reinforcement learning. We build the full pipeline on Gemma 4 E4B for the Kaggle Gemma-4 Developer Agent competition, from 1,629 test-verified Kimi K3 trajectories. The FGL target helps the fixer find the bug as often as the teacher's localization while using 27.5% less code. On the development set, one EM round moves the agent in the expected direction compared with a matched control: more tasks reach a patch (53 vs. 46), fewer tasks get stuck reading files that do not exist (43 vs. 54), and more tasks are solved (8 vs. 6). Training also changes how the agent works: trained agents explore about three times more than the base model and write far fewer wrong patches, and the single agent solves up to 11 of 78 tasks, against 8 for the base model. An analysis of 13 evaluation runs identifies what limits a 4B agent under an 8-minute budget (time, repetition loops and edit quality) and gives practical lessons for training small coding agents. All data, code and adapters are publicly available.",
      "upvotes": 51,
      "github_stars": 0,
      "github_repo": "https://github.com/misraj-ai/locfix",
      "project_page": "",
      "comments": 4,
      "org": "Misraj Ai",
      "url": "https://huggingface.co/papers/2611.12164",
      "arxiv_url": "https://arxiv.org/abs/2611.12164",
      "title_ja": "Fixerに決めさせる：修正機の確信度からコード局所化モデルを訓練する",
      "summary_ja": "修正用LLMのスコアを教師として局所化モデルを訓練し、テスト実行なしでバグ特定効率と精度を向上。"
    },
    {
      "id": "2611.26409",
      "title": "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding",
      "abstract": "Video understanding, particularly with accompanying audio, remains a central challenge in multimodal intelligence. In this report, we introduce WeMM-Video, a family of Chinese-English bilingual omni-modal foundation models spanning 2B, 4B, 9B, and 35B-A3B variants. Centering on joint audio-visual perception and reasoning, WeMM-Video unifies text, image, audio, and video processing within a hybrid-thinking paradigm, seamlessly supporting both a non-thinking instruct mode for fast, direct responses and a thinking mode for explicit step-by-step reasoning. The models are trained on a large-scale multimodal corpus of approximately 1.2 trillion tokens through progressive pre-training and a multi-stage post-training pipeline incorporating multi-teacher OPD, anti-repetition MrDPO, and specialist RL. Evaluated across more than 120 benchmarks, WeMM-Video demonstrates superior performance in omni-modal video understanding and reasoning, while maintaining highly competitive capabilities across general audio, silent video, image, and text tasks. Specifically, in omni-modal video evaluations, our flagship WeMM-Video-35B-A3B establishes a new open-source state of the art, substantially outperforming proprietary models such as Qwen3.5-Omni-Flash and Seed2.0-Mini-0428 while narrowing the gap with the strong Gemini-3.0-Flash, and our compact WeMM-Video-9B surpasses the larger open-source Qwen3-Omni-30B-A3B-Instruct. We publicly release the WeMM-Video family along with our evaluation and reproduction pipeline to foster further research and development in the open-source community.",
      "upvotes": 50,
      "github_stars": 147,
      "github_repo": "https://github.com/Tencent/WeMM-Video",
      "project_page": "",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.26409",
      "arxiv_url": "https://arxiv.org/abs/2611.26409",
      "title_ja": "WeMM-Video: オープンソース全方位ビデオ理解のフロンティア",
      "summary_ja": "音声と映像を統合し、「思考モード」で段階的な推論を可能にする日中二言語対応のビデオ理解基盤モデルを構築。"
    },
    {
      "id": "2611.26629",
      "title": "Posterior Matching Distillation",
      "abstract": "Diffusion distillation accelerates image and video generation by compressing a pretrained teacher's iterative sampling process into a few network evaluations. Distribution-based methods achieve this by matching the student's output distribution to the teacher's. This matching is often driven by reverse-KL objectives, whose mode-seeking bias favors dominant teacher modes at the expense of diversity across samples. We introduce Posterior Matching Distillation (PMD), a new member of the distribution-based distillation family that combines mode-covering posterior sampling with any-step generation. At zero population loss, PMD recovers the teacher's full posterior of clean images at each trained noise level. Its stochastic student supports any-step sampling budgets within the trained timestep grid without further training. To learn these posteriors, PMD matches exponentially reweighted averages of student samples conditioned on a fixed noisy state to corresponding teacher posterior means. Under Gaussian corruption, exponentially tilted posterior mean is a single teacher evaluation at a shifted input. We prove that, matching tilted means over an open neighborhood uniquely identifies the full posterior. PMD thus supervises the entire conditional distribution through a family of mean constraints, without any auxiliary student-score network. Experiments on SDXL and FLUX.2 [klein] 4B demonstrate that PMD achieves the best FID among 4-step methods on both models, while maintaining competitive or leading performance across prompt-alignment and perceptual-quality metrics.",
      "upvotes": 46,
      "github_stars": 17,
      "github_repo": "https://github.com/yesiltepe-hidir/PMD",
      "project_page": "https://pmd-distillation.github.io/",
      "comments": 4,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.26629",
      "arxiv_url": "https://arxiv.org/abs/2611.26629",
      "title_ja": "事後分布マッチング蒸留 (PMD)",
      "summary_ja": "拡散モデルの高速化において、教師モデルの多様性を損なわずに任意のステップ数で高品質な生成を可能にする新手法。"
    },
    {
      "id": "2611.26954",
      "title": "Learning Video Foresight Reasoning from Unlabeled Videos via On-Policy Self-Distillation",
      "abstract": "Video foresight reasoning requires vision-language models to anticipate future events or next actions from currently observed videos. Existing methods fit future captions, rationales, or full visual states, but face two limitations. First, they rely on annotations or external large models for supervision, limiting scalability. We address this with an on-policy self-distillation framework that turns past-future video pairs into a natural self-supervised signal without extra annotations or LLM supervision. Second, they treat the whole future clip as equally valuable, although most of it is irrelevant context information. We address this by defining a foresight score, from which we obtain a contrastive privilege advantage that drives the model to learn the most valuable future information. Since the score is intractable, we optimize a tractable lower-bound surrogate that interpolates this advantage, computed between the true and a random reference future, with a teacher-student distillation advantage; together, they amplify decision-relevant content information and suppress irrelevant context information. We call the resulting framework Future-OPSD. On open-ended prediction and closed-ended planning, Future-OPSD improves base models by up to 14.2 and 15.9 points without compromising general video understanding. Code will be available at https://jingchensun.github.io/future-opsd/",
      "upvotes": 43,
      "github_stars": 15,
      "github_repo": "https://github.com/Jingchensun/future-opsd",
      "project_page": "https://jingchensun.github.io/future-opsd/",
      "comments": 2,
      "org": "University at Buffalo",
      "url": "https://huggingface.co/papers/2611.26954",
      "arxiv_url": "https://arxiv.org/abs/2611.26954",
      "title_ja": "ラベルなし動画からの自己蒸留によるビデオ先読み推論の学習",
      "summary_ja": "追加アノテーションなしで、過去と未来のペアから重要な変化を特定し、将来の出来事を予測する能力を自己学習。"
    },
    {
      "id": "2611.24636",
      "title": "Clover-35B-A3B-Preview Technical Report",
      "abstract": "We introduce Clover-35B-A3B-Preview (Clover), a mixture-of-experts diffusion language model with 35 billion total parameters and 3 billion activated parameters, supporting thinking-mode generation. Clover adapts Gated Delta Networks to block diffusion by combining recurrent memory of previously generated context with bidirectional softmax attention inside the current block. Historical memory readout competes with current-block tokens in a shared softmax, with learnable block-size calibration and a separate, zero-initialized right-context convolution branch. Clover leads the seven evaluated agent metrics, including 73.6 on SWE-bench Verified and 51.7 on Terminal-Bench 2.1. On internal agent workloads, it reaches a reported generation speed of 680 tokens/s using one NVIDIA GB300 GPU at BF16 precision and batch size one. We organize the evaluation around model quality, drafting and verification costs, and deployment under constrained memory. We also describe a decision-model variant that generates answers to related questions in one denoising pass. On an internal set of 500 groups, joint prediction raises question accuracy from 90.37% to 93.88% and all-correct group accuracy from 65.4% to 77.0%.",
      "upvotes": 42,
      "github_stars": 164,
      "github_repo": "https://github.com/DiffuSpace/Clover-35B-A3B-Preview",
      "project_page": "https://diffuspace.ai/blog/clover-35b/",
      "comments": 4,
      "org": "Diffuspace",
      "url": "https://huggingface.co/papers/2611.24636",
      "arxiv_url": "https://arxiv.org/abs/2611.24636",
      "title_ja": "Clover-35B-A3B-Preview テクニカルレポート",
      "summary_ja": "再帰メモリとアテンションを組み合わせたMoE言語モデルを提案し、エージェントタスクで高い推論性能を達成。"
    },
    {
      "id": "2611.21366",
      "title": "ALIVE: Making Streaming Video Models Interactive",
      "abstract": "Streaming video LLMs can continuously observe the world, yet often handle user requests in isolation. We introduce ALIVE, an interactive streaming video model supporting proactive monitoring, streaming task coordination, and feedback-seeking interaction. We construct ALIVE-SFT-288K and ALIVE-RL-3K for two-stage training. Contrastive supervised fine-tuning teaches when and how to respond, while reinforcement learning with Behavior-Aligned Credit Assignment (BACA) combines trajectory-level and local advantages to refine decisions, responses, and silence across multi-turn interactions. We also introduce FSI-Bench to evaluate feedback seeking and subsequent task completion. ALIVE achieves the highest overall scores among the compared models on four public benchmarks and FSI-Bench, demonstrating strong streaming understanding and interactive capabilities.",
      "upvotes": 42,
      "github_stars": 57,
      "github_repo": "https://github.com/lijinzhao30/ALIVE",
      "project_page": "https://lijinzhao30.github.io/ALIVE/",
      "comments": 4,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.21366",
      "arxiv_url": "https://arxiv.org/abs/2611.21366",
      "title_ja": "ALIVE: ストリーミングビデオモデルをインタラクティブにする",
      "summary_ja": "監視、タスク調整、フィードバック要求を自ら行う、対話可能なストリーミング動画理解モデルと訓練法を開発。"
    },
    {
      "id": "2611.26595",
      "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
      "abstract": "Code2Video uses agent-authored 3D proxies to guide video generation, enabling explicit control over structure and dynamics. However, how to construct proxies and prompts for optimal downstream quality remains underexplored, as do the capabilities and limitations of this paradigm. Through controlled experiments and blinded human evaluation, we study proxy granularity, physics simulation, and prompting. The results reveal task-dependent trade-offs: coarse proxies favor natural motion, while medium-grained proxies favor consistency. Physics simulation and proxy-aligned prompting further improve average quality. Guided by these findings, we introduce Coda-DaVinci, a task-adaptive agentic framework for Code2Video generation that selects between proxy-guided and direct generation, adapts modeling granularity to each entity, and coordinates simulation with proxy-grounded prompting. Its multi-agent harness preserves scene assets and guides repairs through visual inspection and independent review. Experiments demonstrate leading instruction following on VTR and scene consistency on R2M, improved physical plausibility over direct generation, and higher visual realism than the compared Code2Video baselines. Long-video evaluations further show gains in event structure and consistency across successive interactions, while revealing limitations in transition stability and adherence to scene settings.",
      "upvotes": 41,
      "github_stars": 42,
      "github_repo": "https://github.com/FrankYang-17/Coda",
      "project_page": "https://coda-davinci.github.io/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.26595",
      "arxiv_url": "https://arxiv.org/abs/2611.26595",
      "title_ja": "Coda-DaVinci: Code2Videoによる動画生成の再考",
      "summary_ja": "エージェントが作成した3Dプロキシを用いて動画生成を制御し、構造と物理の整合性を高める適応的な枠組み。"
    },
    {
      "id": "2611.23068",
      "title": "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements",
      "abstract": "Agent evolution follows a simple loop: a proposer writes candidate artifacts (prompts, skills, memories) and selection accepts those that score higher. This loop has shown promise, yet practitioners face a puzzle: methods trade wins across papers, and evolution often fails to bootstrap on certain tasks. We trace this puzzle to the Resolution Hypothesis: agent evolution stalls not because methods fail to propose better artifacts, but because noisy evaluations cannot reliably identify them. Across seven evolution methods and six models (over 10M LLM calls), we find support for the hypothesis at both levels where evaluation scores are used. At the candidate level (choosing artifacts), helpful candidate artifacts exist, but selection is no better than random at telling them from harmful ones, so errors accumulate across rounds. At the method level (ranking methods), typical margins of a few percentage points are smaller than the difference between two independent runs of the same method, so published rankings often rest on luck. Together, these findings indicate that agent evolution is often bottlenecked by reliably identifying improvements. This calls for a shift in how we develop and evaluate self-improving agents, from designing ever more candidate improvement systems to making true improvements detectable and accumulable.",
      "upvotes": 39,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lineshogan.github.io/resolution-hypothesis/",
      "comments": 9,
      "org": "ShanghaiTech University",
      "url": "https://huggingface.co/papers/2611.23068",
      "arxiv_url": "https://arxiv.org/abs/2611.23068",
      "title_ja": "解像度仮説：エージェント進化の鍵は改善の特定にある",
      "summary_ja": "エージェントの自己進化が停滞するのは、評価のノイズにより「改善」を正しく識別できていないためだとする仮説を検証。"
    },
    {
      "id": "2611.26603",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "abstract": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming prior work in all of these dimensions. We release a family of models that define a new Pareto frontier in terms of metric accuracy, sharpness, temporal consistency, and runtime. We release code and weights at https://apple-aiml-research.github.io/ml-depth-pro-2/",
      "upvotes": 38,
      "github_stars": 684,
      "github_repo": "https://github.com/apple-aiml-research/ml-depth-pro-2",
      "project_page": "https://apple-aiml-research.github.io/ml-depth-pro-2/",
      "comments": 3,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2611.26603",
      "arxiv_url": "https://arxiv.org/abs/2611.26603",
      "title_ja": "Depth Pro 2: 鋭利で時間的一貫性のある単眼メトリック深度推定",
      "summary_ja": "単一画像と動画の両方に対応し、境界の鋭さと時間的一貫性を両立した高精度なフル解像度深度推定を実現。"
    },
    {
      "id": "2611.26389",
      "title": "ViDecide: Teaching Video Diffusion Models to Reason and Plan Step by Step",
      "abstract": "Current leading video generation models can synthesize highly realistic videos, while still frequently violating physical and logical constraints in multi-step reasoning and planning, even after training with large-scale reasoning data or existing diffusion RL methods. We attribute these failures to the conventional video training paradigm, which treats a solution as a fixed-length clip rather than a chain of decisions. We present ViDecide, a decision-centric framework that trains video diffusion models to predict state transitions causally and decide when to stop, with a decision-focused training schedule. We further propose Corrective Fine-tuning (CFT), which corrects failed decisions by mapping their noise to the model's own successful continuations, achieving stable improvement without policy-gradient optimization. Across abstract games, planning tasks, and a new benchmark of multi-step robot planning, ViDecide achieves an average strict success rate of 83.8%, far above 23.3% for standard fine-tuning and 67.8% for the strongest prior method, and generalizes to larger puzzles and unseen layouts. Our framework therefore unlocks greater potential for video generation models as reliable reasoners and planners in the visual world. Project page: https://kevin-thu.github.io/ViDecide.",
      "upvotes": 36,
      "github_stars": 10,
      "github_repo": "https://github.com/Kevin-thu/ViDecide",
      "project_page": "https://kevin-thu.github.io/ViDecide/",
      "comments": 3,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.26389",
      "arxiv_url": "https://arxiv.org/abs/2611.26389",
      "title_ja": "ViDecide: ビデオ拡散モデルに段階的な推論と計画を教える",
      "summary_ja": "動画を意思決定の連鎖として捉え、状態遷移の予測と停止判断を学習させることで物理的・論理的整合性を向上。"
    },
    {
      "id": "2611.26590",
      "title": "Probing the \"Conscious\" Mind: Selective Access and Global Workspace in Vision-Language Models",
      "abstract": "Vision-language models (VLMs) integrate visual and textual information, but their outputs do not reveal internal concept representations. Global workspace theory (GWT) proposes that information is selected from parallel brain processes, integrated in a shared workspace, and made available to specialised processes. We introduce the Multimodal Concept Lens (MC-Lens), a multimodal Jacobian lens, to study these functions in VLM concept processing. Its vision encoder and language decoder lenses map intermediate states to a shared semantic space defined by the decoder's output vocabulary to compare concept accessibility across modalities. MC-Lens supports internal concept interventions to examine the role of accessed concepts in downstream computation. (i) Accessibility and selective access. Multimodal concept information is readable in intermediate states and selectively accessible as tasks require. We extend \"readout carriers\" from one name token to a token set to better capture and express concept information and support counterfactual experiments. (ii) Concepts in downstream computation. Counterfactual experiments show that accessed concept information participates in downstream computation and reasoning. (iii) Development of cross-modal alignment and selective access. We develop two J-space metrics tracking the development of cross-modal concept alignment more clearly than hidden state cosine in controlled VLM training. The experiment also shows that reliable selective access develops later than concept accessibility. (iv) Shared functions across models. Across VLM families and sizes, we find shared patterns of concept accessibility, query-dependent selectivity and cross-task intervention effects despite differences in internal organisation. These findings offer an experimental basis to study GWT in multimodal artificial systems and how it can guide cross-modal alignment improvements.",
      "upvotes": 36,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "University College London",
      "url": "https://huggingface.co/papers/2611.26590",
      "arxiv_url": "https://arxiv.org/abs/2611.26590",
      "title_ja": "「意識的」な精神の探索：VLMにおける選択的アクセスとグローバルワークスペース",
      "summary_ja": "マルチモーダル概念レンズを用いて、VLM内部の概念がモダリティを超えてどのように統合・処理されるかを解明。"
    },
    {
      "id": "2611.21383",
      "title": "The Mask Is Not the Object: Volumetric Supervision for 3D Gaussian Segmentation",
      "abstract": "3D Gaussian Splatting enables object-level operations on Gaussian primitives, yet existing segmentation methods are largely trained and evaluated through rendered views. This mismatch can produce accurate rendered masks from incomplete 3D selections since alpha-blended feature supervision concentrates learning on dominant contributors while leaving occluded or low-contribution Gaussians weakly supervised. We propose VODA, a plug-and-play supervision objective that exploits local depth structure to group per-pixel contributors and directly supervises all Gaussians in selected depth clusters, bypassing contribution-weighted gradient delivery. To evaluate volumetric completeness, we introduce Removal-3D, a synthetic object-removal benchmark, and the Removal Depth Error (RDE), a metric comparing predicted and ground-truth depth changes. Across four rendering-based baselines, VODA consistently improves volumetric segmentation on Removal-3D while maintaining or improving performance on LERF and ScanNet. Further analysis shows that VODA recovers lower-contribution Gaussians, while simple gradient reweighting and spatial propagation fail to reproduce comparable gains.",
      "upvotes": 36,
      "github_stars": 29,
      "github_repo": "https://github.com/jhxcho/voda",
      "project_page": "https://jhxcho.github.io/voda/",
      "comments": 4,
      "org": "Yonsei University",
      "url": "https://huggingface.co/papers/2611.21383",
      "arxiv_url": "https://arxiv.org/abs/2611.21383",
      "title_ja": "マスクは物体ではない：3D Gaussian Segmentationのための体積監督",
      "summary_ja": "レンダリング結果だけでなく、深度構造を利用して隠れたガウス粒子も直接監督する3Dセグメンテーション手法。"
    },
    {
      "id": "2611.28202",
      "title": "AutoPILOT: A Visual Agent Harness for Real-Time Gameplay",
      "abstract": "Multimodal foundation models can play video games well when the game waits for them, but often fail when it keeps running. We find that much of this gap lies in the harness, which decides what the model sees, what it remembers, and how its outputs become actions over time. Existing harnesses such as VISTA improve the first two, yet turn each model call into at most one action, so the agent acts only as often as its model thinks. We introduce AutoPILOT, which changes the third: in each model call, the model can send a primitive action, start an open-loop macro, or write a closed-loop controller that keeps playing from the screen without further model calls until it hands control back. To evaluate agents in real-time games, we build AFK-Bench, 120 diverse browser games grouped by how they respond to inaction and playable in real time or with the clock paused. With GPT-6.1 Sol under the same budgets, AutoPILOT reaches 68.6% real-time success against 38.3% for VISTA, and on GameWorld it keeps 80.0% in real time while VISTA drops from 84.1% to 42.9%. Its gains hold across models, and it reaches VISTA's final success rate at a fifth of its API cost. Our results suggest that how a harness turns model outputs into actions over time is a central yet underexplored part of agent design, and we hope AutoPILOT and AFK-Bench will serve as a foundation for agents in a world that does not wait.",
      "upvotes": 32,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://autopilot-harness.github.io/",
      "comments": 3,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2611.28202",
      "arxiv_url": "https://arxiv.org/abs/2611.28202",
      "title_ja": "AutoPILOT: リアルタイムゲームプレイのための視覚エージェントハーネス",
      "summary_ja": "モデルが制御コードを書き出す仕組みにより、思考速度に縛られずリアルタイムで複雑なゲーム操作を継続可能。"
    },
    {
      "id": "2611.27376",
      "title": "Composable Soft-Prompt Distillation of RL Experts: Toward Continual Post-Training",
      "abstract": "RL post-training typically produces domain experts that must then be consolidated into one model, and as new experts keep arriving, this consolidation becomes a continual process. Weight merging and multi-teacher on-policy distillation (MOPD) must re-consolidate the whole model whenever an expert is added, and can erode capabilities outside the target domains. We propose Composable Soft-Prompt Distillation (CSPD), which keeps the pre-RL model frozen, distills each RL expert independently into a soft prompt, and composes experts by concatenating their prompts without joint training. A single soft prompt suffices to distill an RL expert, recovering at least 90% of the teacher's gain in 22 of 23 math, code, and agent settings. Independently trained prompts compose well. In a multi-expert setting, the average rises with every expert added, and the full composition matches MOPD (67.83 vs. 67.79). The composition generalizes best across six held-out benchmarks. Input-space adaptation adds little serving overhead, keeping throughput within 1.5% of the unadapted backbone and reaching 2.40x that of rank-4 LoRA. These results point toward continual post-training on a fixed backbone.",
      "upvotes": 30,
      "github_stars": 9,
      "github_repo": "https://github.com/UCSB-AI/CSPD",
      "project_page": "https://github.com/UCSB-AI/CSPD",
      "comments": 2,
      "org": "UCSB AI Group",
      "url": "https://huggingface.co/papers/2611.27376",
      "arxiv_url": "https://arxiv.org/abs/2611.27376",
      "title_ja": "RL専門家の構成可能なソフトプロンプト蒸留：継続的な学習に向けて",
      "summary_ja": "各分野の強化学習済みモデルを独立したソフトプロンプトに蒸留・合成することで、既存能力を壊さず能力を拡張。"
    },
    {
      "id": "2611.26516",
      "title": "Plan4D: Generative Plannable 4D Worlds",
      "abstract": "Most world models for future prediction prioritize aestetic quality of generated videos, but offer only weak physical grounding and limited geometric consistency over time, due to the lack of explicit 4D modeling. In this paper, we introduce plan4d, a possible next milestone towards building a generative plannable 4D world model that predicts future RGB videos together with dense 4D geometry, including depth, cameras, point clouds, and scene flow from an observed scene context and text-specified actions. Since training data with paired actions and dense 4D annotations is inherently scarce, plan4d leverages the complementary priors of foundational video generators and 3D reconstructors. Specifically, we propose a model-stitching architecture that couples Depth Anything 3 with LongCat-Video and augments it with an auxiliary DPT head for scene-flow prediction. The resulting model allows us to plan and generate complex, long-horizon, and fine-grained actions in a dynamic 3D scenes, while substantially improving both visual fidelity and geometric accuracy of the generated future videos. Extensive experiments on both synthetic and real-world datasets demonstrate that plan4d achieves state-of-the-art performance in generative 4D modeling of environmental reactions. Project Page: https://fogradio.github.io/plan4d-project",
      "upvotes": 29,
      "github_stars": 21,
      "github_repo": "https://github.com/AMAP-ML/plan4d",
      "project_page": "https://fogradio.github.io/plan4d-project/",
      "comments": 1,
      "org": "AMAP-ML",
      "url": "https://huggingface.co/papers/2611.26516",
      "arxiv_url": "https://arxiv.org/abs/2611.26516",
      "title_ja": "Plan4D: 生成可能で計画可能な4D世界",
      "summary_ja": "ビデオ生成と3D再構成を組み合わせ、指定した行動に応じた未来の4D幾何学と映像を予測する世界モデルを構築。"
    },
    {
      "id": "2611.24154",
      "title": "Game2Player: Scaling Gameplay Experience for Visual Agents through Environment-Player Co-Development",
      "abstract": "Games are a rich testbed for visual agents, demanding perception, long-horizon planning, and precise control. However, collecting human gameplay is costly, and learning from gameplay videos requires inferring missing actions. Existing datasets also cover a limited range of games, often without explicit tasks or verifiable outcomes. To address these gaps, we introduce Game2Player, a framework that co-develops game environments and players to collect diverse and verifiable gameplay experience at scale. In the Game2Player loop, a Builder agent adapts existing web games, exposes their internal state, and defines tasks with state-based progress measures and success checks. A Coding Player and a VLM Player then attempt the tasks and report problems to the Builder for repair, so that play serves as both environment validation and training data collection. With Game2Player, we build 568 verified web games with 3,436 tasks, collect 15.7K trajectories (307 hours of gameplay), and hold out 50 games as the benchmark PlayerBench. To evaluate the collected experience as training data, we train VLM agents with progress-weighted SFT, assigning greater weight to steps that advance task progress. Game2Player-9B improves progress from 14.3% to 31.2% on PlayerBench and from 30.0% to 53.1% on the external GameWorld benchmark. More broadly, our work suggests a path for visual agents to scale their gameplay experience by building, verifying, and learning from existing game worlds.",
      "upvotes": 29,
      "github_stars": 28,
      "github_repo": "https://github.com/game2player/Game2Player",
      "project_page": "https://game2player.github.io/",
      "comments": 4,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2611.24154",
      "arxiv_url": "https://arxiv.org/abs/2611.24154",
      "title_ja": "Game2Player: 環境とプレイヤーの共同開発によるゲーム体験のスケールアップ",
      "summary_ja": "Webゲームを自動改変してタスクと状態を定義し、大規模かつ検証可能なプレイデータを収集する枠組みを提案。"
    },
    {
      "id": "2611.11318",
      "title": "PROLA: Principal-Orthogonal Low-rank Adaptation for Predictive Spatiotemporal Weather Downscaling",
      "abstract": "High-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high-resolution fields from recent coarse states remains challenging and costly. We formulate this setting as Predictive Spatiotemporal Weather Downscaling (PSWD), a task that jointly refines spatial and temporal resolution while predicting future high-resolution trajectories. To this end, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads. For backbone adaptation, we introduce PROLA (PRincipal-Orthogonal Low-rank Adaptation), which allocates a fixed low-rank budget between pretrained weights' principal directions and their orthogonal complement. PROLA further rescales rank-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank. Experiments in the PSWD setting show that PROLA outperforms representative low-rank adaptation baselines. Further experiments across diverse datasets and tasks support the broader applicability of PROLA, showing that its benefits extend beyond the primary weather downscaling setting.",
      "upvotes": 28,
      "github_stars": 2,
      "github_repo": "https://github.com/yms020615/PROLA",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.11318",
      "arxiv_url": "https://arxiv.org/abs/2611.11318",
      "title_ja": "PROLA: 予測的な時空間気象ダウンスケーリングのための主直交低ランク適応",
      "summary_ja": "粗い気象データから将来の高解像度な局所気象パターンを予測・生成するための、低コストな学習枠組み。"
    },
    {
      "id": "2611.27973",
      "title": "MemOnce: A Scalable Memory Architecture for Large Language Models",
      "abstract": "Deploying large language models (LLMs) in long-horizon and continual interactions requires maintaining reusable memory states for future inference, posing challenges for existing architectures. Standard Transformers accumulate layer-wise, token-level KV caches, incurring linear GPU memory growth and quadratic computational complexity as the context expands. In contrast, linear-time architectures compress history into fixed-size states, but struggle to retain fine-grained details. We introduce MemOnce, a foundation architecture that learns scalable memory states for language models. MemOnce is based on two core designs: (a) Memory encoder-decoder: it caches only a small subset of final-layer hidden states as compact memory representations and dynamically decodes them back into KV caches for attention layers; (b) Memory sparse attention: for each continual input, MemOnce adaptively retrieves relevant memory representations, with the sparse indices computed only once across layers. Coupling these two designs enables efficient on-the-fly memory loading and KV cache decoding, drastically reducing the GPU memory footprint and achieving linear-time complexity. We conduct extensive experiments to show that MemOnce outperforms Transformers and other architectures across varying model sizes, context lengths, and training paradigms (pretraining and post-training adaptation). In particular, adapting Qwen3.5-4B with MemOnce reduces memory state cache by 1313times and prefill latency by 6.9times at 1M context, and improves throughput by 3.5times and overall memory performance by +5.77%. Finally, MemOnce generalizes zero-shot to downstream representation tasks, achieving competitive results against specialized models.",
      "upvotes": 26,
      "github_stars": 28,
      "github_repo": "https://github.com/Clare-Nie/MemOnce",
      "project_page": "https://clare-nie.github.io/MemOnce/",
      "comments": 2,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2611.27973",
      "arxiv_url": "https://arxiv.org/abs/2611.27973",
      "title_ja": "MemOnce: 大規模言語モデルのためのスケーラブルなメモリ層",
      "summary_ja": "最終層の状態のみを固定サイズでメモリに符号化することで、長い文脈でも計算量を抑えつつ詳細を保持する新アーキテクチャ。"
    },
    {
      "id": "2611.26380",
      "title": "EgoCaptioner: Towards Comprehensive and Fine-Grained Egocentric Video Captioning",
      "abstract": "Egocentric video captioning requires fine-grained detail and accurate timing, yet current multimodal large language models (MLLMs) often miss brief actions, confuse their order, or misinterpret the wearer's motion. Existing caption formats also offer limited support for combining detailed narration with precise timing. We present EgoCaptioner, which pairs a video-level overview of the setting, participants, and the wearer's overall activity with timed steps whose narration adapts to varying perceptual demands and marks key moments at specific timestamps. We develop a coarse-to-fine annotation pipeline that establishes event structure before expanding step descriptions, yielding 50,000 training examples from eight egocentric video sources. Complementary rewards assess factual accuracy and coverage, measure step-level temporal alignment, and penalize fragmented or redundant narration, guiding caption refinement through Group Relative Policy Optimization (GRPO). To improve the reliability of factual supervision, we supplement caption references with pose-derived motion facts when sensor data are available. Across five egocentric benchmarks, EgoCaptioner achieves leading performance among evaluated open-source models in caption quality, caption-conditioned question answering, and temporal alignment. It also surpasses Gemini 3.1 Pro on PhysCapBench and all evaluated proprietary baselines on Minerva-Ego under the caption-to-QA protocol. Ablations support the complementary roles of factual and temporal rewards and show that coarse-to-fine annotation provides more effective supervision than single-pass annotation.",
      "upvotes": 26,
      "github_stars": 11,
      "github_repo": "https://github.com/cactusqq/EgoCaptioner",
      "project_page": "https://cactusqq.github.io/EgoCaptioner/",
      "comments": 2,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.26380",
      "arxiv_url": "https://arxiv.org/abs/2611.26380",
      "title_ja": "EgoCaptioner: 包括的で詳細な一人称視点ビデオキャプションに向けて",
      "summary_ja": "一人称視点動画に対し、全体概要とタイムスタンプ付きの精密な行動解説を組み合わせた詳細なデータセットを作成。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Mantic Scales Inkling 2 Small to 100,000 Forecasts at One-Fifteenth the Cost",
      "summary": "Mantic fine-tuned Inkling 2 Small on Tinker with reinforcement learning, matching frontier forecasting accuracy at 15 times lower cost per prediction. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/mantic-scales-inkling-2-small-to-100-000-forecasts-at-one-fifteenth-the-cost?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T10:20:28+09:00",
      "title_ja": "ManticがInkling 2 Smallを公開、コストを15分の1に削減",
      "summary_ja": "強化学習により最適化され、既存の予測精度を維持しつつコストを15分の1に抑え、10万件の予測を実行可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Claude Code Agents Found 9 of 11 Mobile Bugs for Under $1",
      "summary": "A new open-source template spins up 20 Claude Code agents on real iOS simulators and Android emulators via GitHub Actions, for roughly zero dollars. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/repo/claude-code-agents-found-9-of-11-mobile-bugs-for-under-1?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T10:06:18+09:00",
      "title_ja": "Claude Codeエージェントが1ドル未満で11件中9件のモバイルバグを発見",
      "summary_ja": "実機シミュレーター上で20個のClaude Codeエージェントを動かし、低コストでバグ検出を行うオープンソースの仕組み。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Sakana AI's 30B Namazu Small Beats NVIDIA's 120B Model on 25 Benchmarks",
      "summary": "Sakana AI's new 30B reasoning model takes NVIDIA's Nemotron 3 Nano, retrains it in-house, and beats a model four times its size on 25 benchmarks. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/sakana-ai-s-30b-namazu-small-beats-nvidia-s-120b-model-on-25-benchmarks?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T09:35:45+09:00",
      "title_ja": "Sakana AIの30Bモデル「Namazu Small」がNVIDIAの120Bモデルを凌駕",
      "summary_ja": "NVIDIAのモデルを独自に再学習させ、4倍のサイズを持つモデルを25のベンチマークで上回る性能を達成。"
    },
    {
      "lab": "AlphaSignal",
      "title": "CPCN Loops a Single Layer to Match Deep Network Performance",
      "summary": "Closing a predictive coding network into a loop lets a small model behave like a deep one, matching ResNet-scale accuracy and solving Sudoku-hard. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/paper/cpcn-loops-a-single-layer-to-match-deep-network-performance?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T09:05:18+09:00",
      "title_ja": "CPCNが単一層のループ構造でディープネットワークに匹敵する性能を実現",
      "summary_ja": "予測符号化ネットワークをループ化することで、ResNet規模の精度や数独のような難問解決を小規模モデルで可能にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Data Shows AI Training Is Accelerating 8x Faster Since 2026",
      "summary": "OpenAI released pretraining loss data for 13 frontier models showing log-perplexity dropping seven times faster since early 2026, and analysts are split on what it means. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/openai-data-shows-ai-training-is-accelerating-8x-faster-since-2026?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T08:33:55+09:00",
      "title_ja": "OpenAIのデータ、AIトレーニングが2026年以降8倍加速したことを示唆",
      "summary_ja": "13の最先端モデルの学習損失データから、対数パープレキシティの低下速度が2026年初頭より7倍速まったことが判明。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Fellows Turn Raw Neuron Vectors Into Zero-Shot Safety Tools",
      "summary": "Anthropic Fellows show individual neurons in open-weight LLMs can detect harmful text, steer behavior, and expose backdoors without any training. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/anthropic-fellows-turn-raw-neuron-vectors-into-zero-shot-safety-tools?utm_source=rss&utm_medium=feed",
      "published": "2026-11-25T08:05:42+09:00",
      "title_ja": "ニューロンベクトルをゼロショットの安全性ツールに変換する手法",
      "summary_ja": "公開重みLLM内の個別のニューロンが、追加学習なしで有害テキストの検出や行動制御、バックドアの露出を行えることを実証。"
    },
    {
      "lab": "Hugging Face",
      "title": "Microduck Obstacle Avoidance: A Sim2Real Workflow with Isaac Lab and Newton",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/microduck-obstacle-avoidance",
      "published": "2026-11-25T01:34:13+09:00",
      "title_ja": "Microduckの障害物回避：Isaac LabとNewtonを用いたSim2Realワークフロー",
      "summary_ja": "Isaac LabとNewtonを活用し、シミュレーションから現実世界への移行を実現する障害物回避ワークフローを提示。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT-6 models demonstrate intrinsic protein-design capabilities",
      "summary": "GPT-6 models design protein structures and sequences using reasoning and code. Lab tests found evidence of binding across five targets.",
      "url": "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities",
      "published": "2026-11-24T22:00:00+09:00",
      "title_ja": "GPT-6モデルが固有のタンパク質設計能力を実証",
      "summary_ja": "推論とコードを用いてタンパク質の構造と配列を設計し、ラボ試験にて5つのターゲットに対する結合能力が確認された。"
    },
    {
      "lab": "OpenAI",
      "title": "Searching for distant planets with Astra",
      "summary": "See how two amateur astronomers used Codex and Astra to find potential exoplanets in public data from NASA’s Kepler and TESS space telescopes.",
      "url": "https://openai.com/index/searching-for-distant-planets-with-astra",
      "published": "2026-11-24T20:00:00+09:00",
      "title_ja": "Astraを活用した遠近の惑星探索",
      "summary_ja": "アマチュア天文家がCodexとAstraを使用し、NASAの公開データから未知の系外惑星候補を特定することに成功。"
    },
    {
      "lab": "OpenAI",
      "title": "How Intentful uses dots to make more time for growth",
      "summary": "Marina Petrova’s dot Aria helps research websites and build proposals, while proactively flagging messages and resolving issues.",
      "url": "https://openai.com/business/customer-stories/intentful-dots",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "Intentfulがいかにして成長のための時間を創出しているか",
      "summary_ja": "AIドット「Aria」がウェブ調査や提案書作成、メッセージへの対応を自律的に行い、業務効率化を支援する事例。"
    },
    {
      "lab": "OpenAI",
      "title": "How iFood scales coding agents across 15,000 repositories",
      "summary": "",
      "url": "https://openai.com/business/customer-stories/ifood",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "iFoodが15,000のリポジトリでコーディングエージェントを拡張する方法",
      "summary_ja": "膨大な数のリポジトリにおいてコーディングエージェントを大規模に運用・スケーリングするための手法を解説。"
    },
    {
      "lab": "OpenAI",
      "title": "Clay helps sales teams win with Codex and ChatGPT",
      "summary": "ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 models handling the reasoning.",
      "url": "https://openai.com/business/customer-stories/clay-plugins-openai",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "ClayがCodexとChatGPTで営業チームを支援",
      "summary_ja": "ChatGPTとCodexを統合し、GPT-6による推論を用いて案件調査やデータに基づく営業戦略の構築を可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and Cisco introduce Shirudo",
      "summary": "OpenAI and Cisco introduce Shirudo, an open-source runtime for Linux. It helps teams protect running systems while they roll out patches.",
      "url": "https://openai.com/index/introducing-shirudo",
      "published": "2026-11-24T06:20:00+09:00",
      "title_ja": "OpenAIとCiscoがLinux向け実行環境「Shirudo」を発表",
      "summary_ja": "パッチ適用の作業中に、稼働中のシステムを保護するためのオープンソースのLinux向けランタイムを共同開発。"
    },
    {
      "lab": "Google Research",
      "title": "Supercharging transformer residual connections",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/supercharging-transformer-residual-connections/",
      "published": "2026-11-24T02:21:12+09:00",
      "title_ja": "Transformerの残差接続を強化するアルゴリズム",
      "summary_ja": "アルゴリズムと理論に基づき、Transformerモデルの残差接続をスーパーチャージして性能を向上させる手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "RoboTrack: Point tracking for real-world robotic manipulation",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/robotrack",
      "published": "2026-11-24T02:20:37+09:00",
      "title_ja": "RoboTrack：実世界のロボット操作におけるポイントトラッキング",
      "summary_ja": "現実世界のロボットアームなどの操作において、高精度なポイントトラッキングを実現する新技術を紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Finding faster quantum algorithms with agents and formal verification",
      "summary": "Using agent teams and formal verification to improve quantum algorithms for fusion and chemistry.",
      "url": "https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/",
      "published": "2026-11-24T01:59:40+09:00",
      "title_ja": "エージェントと形式検証による高速な量子アルゴリズムの発見",
      "summary_ja": "エージェントチームと形式検証を組み合わせ、核融合や化学分野向けの量子アルゴリズムの性能を改善する取り組み。"
    },
    {
      "lab": "Hugging Face",
      "title": "How to build and maintain an agentic evaluation",
      "summary": "",
      "url": "https://huggingface.co/blog/agentic-evals",
      "published": "2026-11-23T09:00:00+09:00",
      "title_ja": "エージェント評価基盤の構築と維持方法",
      "summary_ja": "AIエージェントの性能を適切に評価するためのフレームワークの構築手法と、その継続的な運用について解説。"
    },
    {
      "lab": "Google Research",
      "title": "How Google Duplex evolved to also call businesses for you in Gemini",
      "summary": "Generative AI",
      "url": "https://research.google/blog/how-google-duplex-evolved-to-also-call-businesses-for-you-in-gemini/",
      "published": "2026-11-21T08:30:30+09:00",
      "title_ja": "Google DuplexがGemini内でビジネス電話代行へと進化した経緯",
      "summary_ja": "生成AIの進化に伴い、Google Duplexがユーザーに代わって店舗等へ電話をかける機能をGeminiに統合した過程を紹介。"
    },
    {
      "lab": "Apple ML",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "summary": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming…",
      "url": "https://machinelearning.apple.com/research/depth-pro-2-monocular",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Depth Pro 2：鮮明で時間的一貫性のある単眼奥行き推定",
      "summary_ja": "画像と動画から高精度かつ境界が鮮明で、時間的なブレが少ない絶対的な奥行き情報を予測できるスケーラブルなネットワーク。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup",
      "summary": "",
      "url": "https://huggingface.co/blog/inkling2mini",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "ローカル環境に最先端の性能をもたらす「Inkling 2 Mini」登場",
      "summary_ja": "ローカルのセットアップ環境でも動作するよう設計された、最先端の性能を持つ小型モデルInkling 2 Miniを公開。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost",
      "summary": "",
      "url": "https://huggingface.co/blog/harness-adapters-at-scale",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "ハーネスアダプターの導入：モデルの適合による性能とコストの改善",
      "summary_ja": "好みのモデルを特定の評価ハーネスに適合させ、コストを抑えつつ最大限の性能を引き出すためのアダプターを紹介。"
    },
    {
      "lab": "Google Research",
      "title": "A game you cannot win unless you have a quantum computer",
      "summary": "Quantum",
      "url": "https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/",
      "published": "2026-11-20T05:03:00+09:00",
      "title_ja": "量子コンピュータなしでは勝てないゲーム",
      "summary_ja": "量子力学的な優位性を証明するために設計された、量子コンピュータを用いることで初めて勝利可能になるゲームの解説。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの紹介",
      "summary_ja": "Googleの次世代AIモデルシリーズにおける、新たなラインナップ「Gemini 4 Neon」の発表。"
    },
    {
      "lab": "Hugging Face",
      "title": "DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency",
      "summary": "",
      "url": "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin",
      "published": "2026-11-19T04:54:56+09:00",
      "title_ja": "DaisyRose-27B：事後学習効率の限界に挑む",
      "summary_ja": "27Bパラメータ規模で、モデルの事後学習プロセスにおける効率性を飛躍的に高めた新たなフロンティアモデル。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4が利用可能に",
      "summary_ja": "最新のAIモデル「Genie 4」が正式にリリースされ、ユーザーが利用できるようになったことを発表。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "Split-and-Scale Latent 3D Representations",
      "summary_ja": "計算負荷を抑えつつ潜在容量を拡張し、複雑な3Dシーンの微細なディテールを忠実に再現する新たな3D生成モデル表現手法。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの「/teamwork」による科学とエンジニアリングの進展",
      "summary_ja": "教育イノベーションの枠組みにおいて、チームワークを支援する新機能が科学・工学分野の発展を加速させる。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの紹介",
      "summary_ja": "Gemini 4シリーズの新たなバリエーションとして、特定の性能や用途に特化した「Hydrogen」モデルを導入。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルアライメントの理論的限界",
      "summary_ja": "KLダイバージェンス制約下での報酬最大化において、情報理論に基づきアライメントによる改善の限界値を解明。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブル端末を用いたCKMリスク評価による個別化コーチング",
      "summary_ja": "ウェアラブルデバイスのデータから心血管・腎臓・代謝のリスクを分析し、個々に適した健康コーチングを提供する取り組み。"
    }
  ]
};
