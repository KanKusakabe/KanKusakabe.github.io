window.papersData = {
  "updated_at": "2026-11-26 13:00 JST",
  "arxiv": [
    {
      "id": "2611.33158",
      "title": "OmniAct: One Policy, One Million Embodiments",
      "url": "https://arxiv.org/abs/2611.33158",
      "pdf": "https://arxiv.org/pdf/2611.33158",
      "authors": [
        "Xiang Fan",
        "Yuheng Wang",
        "Jiayuan Yan",
        "Bohan Fang",
        "Wisdom Oluchi Ikezogwo",
        "Ainaz Eftekhar"
      ],
      "categories": [
        "cs.RO",
        "cs.AI",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 2,
      "star_codes": [
        "cap",
        "new",
        "sota"
      ],
      "star_quote": "We introduce OmniAct, a cross-embodiment manipulation policy that conditions directly on each robot's kinematics in a specific scene",
      "signals": [],
      "headline": "OmniAct: ロボットのキネマティクスを条件とする100万種の形態に対応可能な行動ポリシー",
      "what": "多様なロボット形態に適応するため、シーン内のロボットのキネマティクス（関節位置、接続性など）を直接条件とする行動ポリシーです。100万種類の仮想的なロボット形態でシミュレーション学習を行い、フローマッチングを用いて制御を行います。",
      "enables": "未知のロボットやシーンにおいて63.0%の成功率を達成し、既存のpi 0.5 (17.8%) やGPT-6 Astra (41.1%) を大幅に上回りました。現実世界の未知のロボットに対しても、他手法の2倍近い成功率を示しました。",
      "why_it_matters": "特定のロボット専用のモデルを作るのではなく、物理的な構造を理解して汎用的に動作する「ロボットのための基盤モデル」への重要な一歩です。",
      "tags": [
        "ロボティクス",
        "汎用ポリシー",
        "シミュレーション"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32554",
      "title": "PartAgent: Agentic 3D Part Segmentation via Expert Integration and Closed-Loop Refinement",
      "url": "https://arxiv.org/abs/2611.32554",
      "pdf": "https://arxiv.org/pdf/2611.32554",
      "authors": [
        "Yang Cao",
        "Zhe Zhu",
        "Yiheng Zhang",
        "Zhengqiang Zhang",
        "Haoyuan Li",
        "Le Wan"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://yangcaoai.github.io/PartAgent_ProjectPage/",
      "hf_upvotes": 33,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On PartObjaverse-Tiny-WT, PartAgent achieves 68.41 mIoU, outperforming the strongest competing method by 8.53 points.",
      "signals": [
        "HF ▲33"
      ],
      "headline": "PartAgent: 2Dと3Dの専門家モデルを統合した自律的な3Dパーツセグメンテーション",
      "what": "3Dの幾何学的提案と2Dのセマンティックな情報を統合し、逐次的に修正を行うエージェント形式のフレームワークです。3D構造に基づきパーツを分割し、マルチビューの2D証拠を用いてクローズドループで分割を洗練させます。",
      "enables": "PartObjaverse-Tinyにおいて68.41 mIoUを記録し、既存の最高手法を8.53ポイント上回りました。4つの主要データセットすべてにおいて、トレーニング不要でありながら最高精度を更新しています。",
      "why_it_matters": "追加学習なしで、既存の強力なモデル群を「エージェント」として組織化することで、複雑な3D解析タスクを解く新しいパターンを示しました。",
      "tags": [
        "3D理解",
        "エージェント",
        "セグメンテーション"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31495",
      "title": "ModernELECTRA: Replaced-Token Detection with Boundary-Window Reconstruction for Compact Encoders that Classify and Embed",
      "url": "https://arxiv.org/abs/2611.31495",
      "pdf": "https://arxiv.org/pdf/2611.31495",
      "authors": [
        "Mykhailo Shtopko",
        "Ihor Stepanov",
        "Dmytro Vodianytskyi",
        "Oleksandr Lukashov"
      ],
      "categories": [
        "cs.CL",
        "cs.IR",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "23 pages, 2 figures. Models: https://huggingface.co/knowledgator/EdgeCoder-31M and https://huggingface.co/knowledgator/EdgeCoder-Multilingual-61M. Code: https://github.com/Knowledgator/FlashDeBERTa",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "The English model outperforms Ettin-Enc-32m (83.5) and MiniLM-L12 (84.6) on GLUE",
      "signals": [],
      "headline": "ModernELECTRA: 埋め込み性能と分類タスクを両立する軽量言語モデルの事前学習手法",
      "what": "従来のELECTRAのRTDタスクに、近傍トークンから元のトークンを復元するboundary-window reconstructionタスクを追加した手法です。学習時のみ軽量なFFNを用い、推論時は分類と密ベクトルの両方で高性能なエンコーダを実現します。",
      "enables": "GLUEで86.0、MTEBで51.1を達成し、31Mパラメータでありながら、MiniLM-L12などのより大規模なモデルを凌駕または同等の性能を示しました。また、FlashDeBERTaの実装により4096トークン時のメモリ使用量を93%削減しました。",
      "why_it_matters": "RTD学習モデルが埋め込みタスクに弱いという長年の課題を解決し、エッジデバイスで動作可能な超小型・高性能な多機能エンコーダの道を開きました。",
      "tags": [
        "LLM",
        "事前学習",
        "NLP"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32696",
      "title": "RestPose: Canonicalization for Open Object Pose Estimation",
      "url": "https://arxiv.org/abs/2611.32696",
      "pdf": "https://arxiv.org/pdf/2611.32696",
      "authors": [
        "Sandeep Inuganti",
        "Weihang Li",
        "Benjamin Busam",
        "Didier Stricker",
        "Jason Rambach"
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
        "new",
        "sota"
      ],
      "star_quote": "we improve on the supervised state-of-the-art methods by 18.3 points in absolute metrics and 13.8 points in scale-agnostic metrics",
      "signals": [],
      "headline": "RestPose: 参照モデル不要の幾何学・物理解析に基づく物体姿勢推定",
      "what": "特定の物体モデルや学習時の基準座標系に依存せず、任意の物体の姿勢を推定する手法です。単一の画像から物体のメッシュを生成し、幾何学的・物理的（安定性など）な解析から正規のフレームを導出し、基盤モデルでマッチングを行います。",
      "enables": "HouseCat6D、NOCS、Omni6DPoseの各データセットで、教師あり学習の最先端手法を絶対指標で18.3ポイント、スケール非依存指標で13.8ポイント上回る精度を達成しました。",
      "why_it_matters": "モデルごとに定義される「正規の向き」という恣意的な制約を排除し、未知のカテゴリの物体に対してもゼロショットで高精度な姿勢推定を可能にしました。",
      "tags": [
        "物体姿勢推定",
        "コンピュータビジョン",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32778",
      "title": "Beyond Fixed-Context Likelihood: Zero-Shot AI-Generated Text Detection via Context Perturbation Discrepancy",
      "url": "https://arxiv.org/abs/2611.32778",
      "pdf": "https://arxiv.org/pdf/2611.32778",
      "authors": [
        "Yifan Tang",
        "Jingran Li",
        "Yihao Wang",
        "Zhen Yang",
        "Jianyi Liu",
        "Gongshen Liu"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We introduce Context Perturbation Discrepancy (CPD), a zero-shot detector that measures this gain relative to what a single pretrained language model expects.",
      "signals": [],
      "headline": "CPD: 文脈の摂動による確率変化の偏差を利用したゼロショットAI生成文検知",
      "what": "テキスト内の各トークンの対数確率が、文脈の長さ（フル文脈 vs 短い窓）によってどのように変化するかを測定する検知手法です。単一の事前学習済み言語モデルを用いて、人間とAIが生成したテキストの統計的な乖離を算出します。",
      "enables": "既存のゼロショット手法を平均で上回り、94.80%のAUROCと、偽陽性率5%において79.60%の再現率を達成しました。特に編集済みのテキストにおいても、元の草稿がAIか人間かを明確に分離できます。",
      "why_it_matters": "追加の学習や複数モデルの比較を必要とせず、文脈の利用パターンの違いという本質的な指標で高精度な検知を実現した点が強力です。",
      "tags": [
        "LLM",
        "AI検知",
        "NLP"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.33109",
      "title": "RenGen: Generating Images with as Many Tokens as the Scene Needs",
      "url": "https://arxiv.org/abs/2611.33109",
      "pdf": "https://arxiv.org/pdf/2611.33109",
      "authors": [
        "Savya Khosla",
        "Jay Mahajan",
        "Akin Tuna Sakalli",
        "Derek Hoiem",
        "David Forsyth",
        "Alex Schwing"
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
        "new",
        "sota"
      ],
      "star_quote": "RenGen reaches a gFID of 1.34 with 88 tokens per image on average, the best among methods that vary their token count.",
      "signals": [],
      "headline": "RenGen: シーンの複雑さに応じてトークン数を動的に変化させる画像生成モデル",
      "what": "画像の質を落とさずに、シーンの複雑さに応じてトークン数を変える潜在拡散モデルです。パッチ分割ではなく、リージョン単位で符号化する手法を採り、アンカーポイントの数で計算量と複雑さのトレードオフを制御します。",
      "enables": "ImageNet 256x256において、平均88トークン（固定パッチ型の数分の一）でgFID 1.34という最高水準の品質を達成しました。最先端モデルRAEv2に対し、2.5倍低いレイテンシで同等の画質を実現します。",
      "why_it_matters": "全ての画像を同じ計算コストで生成する従来の非効率性を解消し、シンプルなシーンでは高速に、複雑なシーンでは詳細に生成するという最適化を可能にしました。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "効率化"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
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
      "id": "2611.33124",
      "title": "SAG-Mem-1.0 Technical Report",
      "url": "https://arxiv.org/abs/2611.33124",
      "pdf": "https://arxiv.org/pdf/2611.33124",
      "authors": [
        "Yuchao Wu",
        "XingCheng Liang",
        "Xuanze Wang",
        "Yini Huang",
        "Yue Wu"
      ],
      "categories": [
        "cs.CL",
        "cs.IR"
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
      "star_quote": "SAG-Mem achieves overall scores of 83.08 and 80.20, respectively, the highest among the evaluated methods on both benchmarks.",
      "signals": [],
      "headline": "SAG-Mem: 語彙拡張とエビデンス評価を用いた長期会話メモリフレームワーク",
      "what": "会話履歴を改変せずそのまま保存し、クエリ実行時に語彙拡張（lexical expansion）によって関連する情報を探し出す手法です。LLMによる要約や関係構築を必要とせず、安価なインデックスと2段階の検索プロセスで構成されます。",
      "enables": "LoCoMoおよびLongMemEvalベンチマークにおいて、既存のすべてのメモリベース手法を上回る最高スコアを達成しました。特にLongMemEvalでは最強のベースラインを7.20ポイント上回っています。",
      "why_it_matters": "記憶の要約による詳細の欠落を防ぎつつ、計算コストを抑えたまま、複雑なコンテキストの情報を効果的に引き出す実用的な会話メモリの設計指針を示しました。",
      "tags": [
        "LLM",
        "会話メモリ",
        "RAG"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
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
      "id": "2611.31656",
      "title": "BRAG: Bayesian Retrieval Augmented Generation",
      "url": "https://arxiv.org/abs/2611.31656",
      "pdf": "https://arxiv.org/pdf/2611.31656",
      "authors": [
        "Javier Movellan",
        "Manjot Bilkhu",
        "Young-mok Jung",
        "Sirajul Salekin",
        "Henry Tran",
        "Zhao Huang"
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
        "new"
      ],
      "star_quote": "We introduce BRAG, a generative model of retrieval with use.",
      "signals": [],
      "headline": "BRAG: ベイズ生成モデルによる動的な情報の検索と利用の最適化",
      "what": "RAGにおける検索を、各チャンクが回答可能なクエリを生成するというベイズ生成モデルとして定式化した手法です。フィードバックに基づいてオンラインで更新される潜在的な有用性（latent utility）とキーを持ち、検索を制御問題として扱います。",
      "enables": "情報の更新が発生する課題において、既存手法がRecall@5で0.67-0.71に留まる中、0.80-0.86という高い精度で最新のチャンクを検索可能にしました。個人エージェントのメモリではRecall@1を0.44から0.97へ改善しました。",
      "why_it_matters": "従来のヒューリスティックな検索手法を統一的な枠組みで説明可能にし、時間の経過とともに変化する知識を正確に捉える理論的基盤を提供しました。",
      "tags": [
        "RAG",
        "情報検索",
        "ベイズ統計"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31836",
      "title": "Gaze World Model",
      "url": "https://arxiv.org/abs/2611.31836",
      "pdf": "https://arxiv.org/pdf/2611.31836",
      "authors": [
        "Jiawen Zhang",
        "Houze Yang",
        "Xu Cao",
        "Yifan Shen",
        "Zhongyi Zhou",
        "Steve Wong"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 8 figures, 15 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "GWM achieves state-of-the-art shift detection on these benchmarks",
      "signals": [],
      "headline": "Gaze World Model: 注視点の移動を予測するワールドモデルを用いた視線推定",
      "what": "V-JEPA 2.1エンコーダをベースに、潜在的なシーン予測と視線監視を共同学習させる視線ワールドモデル（GWM）です。単一フレームの推定だけでなく、動的なシーン変化に応じた視線のシフト（Gaze Shift）をモデル化します。",
      "enables": "視線シフト検出において、従来の最強のベースラインを4クラスAPで約10ポイント上回る性能を達成しました。また、現在および将来の視線位置の予測精度も向上させています。",
      "why_it_matters": "視線を単なる点ではなく「シーンの変化に対する反応」として捉え、ワールドモデルの文脈で視線の意図や推移を扱えるようにした点が独創的です。",
      "tags": [
        "コンピュータビジョン",
        "ワールドモデル",
        "視線推定"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31891",
      "title": "Open-OmniCoach: Evidence-Enhanced Trajectory Learning for Omni Video Agents",
      "url": "https://arxiv.org/abs/2611.31891",
      "pdf": "https://arxiv.org/pdf/2611.31891",
      "authors": [
        "Weisong Liu",
        "Xiangtai Li",
        "Haochen Wang",
        "Haiquan Wen",
        "Zhaoxiang Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages. Project Page: https://open-omnicoach.github.io , Code: https://github.com/Open-OmniCoach/omnicoach , Models & Data: https://huggingface.co/Open-OmniCoach",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Open OmniAgent-30B improves average accuracy over Qwen3-Omni by 6.3 percentage points",
      "signals": [],
      "headline": "Open-OmniCoach: エビデンスに基づく強化学習によるビデオエージェントの性能向上",
      "what": "ビデオとオーディオを統合的に理解するOmni Video Agentのための学習フレームワークです。24.8万件の対話軌跡を含む高品質データセットOmniCoach-240Kと、エビデンスの網羅性に基づきステップ単位で報酬を与えるSEPO手法を導入しました。",
      "enables": "Open OmniAgent-30BはQwen3-Omniと比較して9つのベンチマークで平均6.3ポイント、LVBenchなどの難関タスクで13ポイント以上の精度向上を達成しました。推論過程でのエビデンスの探索と自己修正能力が向上しています。",
      "why_it_matters": "単なるQAペアの学習ではなく、根拠（evidence）を能動的に探し出す「エージェント的」なビデオ理解を、データの質と学習アルゴリズムの両面から強化しました。",
      "tags": [
        "マルチモーダル",
        "ビデオ理解",
        "強化学習"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32042",
      "title": "Instant LiDAR: Feed-Forward Gaussian Reconstruction for LiDAR Simulation",
      "url": "https://arxiv.org/abs/2611.32042",
      "pdf": "https://arxiv.org/pdf/2611.32042",
      "authors": [
        "Xin Kang",
        "Jiahui Huang",
        "Jiawei Ren",
        "Sipeng Zhang",
        "Yu Chen",
        "Weihua Zhang"
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
      "star_quote": "We present Instant LiDAR, a feed-forward pipeline that reconstructs multiple LiDAR scans",
      "signals": [],
      "headline": "Instant LiDAR: 最適化なしで高速にLiDARスキャンをガウス表現で再構成する手法",
      "what": "シーンごとの最適化を必要とせず、フィードフォワードのみでLiDARデータを再利用可能なGaussianアセットとして再構成するパイプラインです。測定値に紐づいたガウス分布予測とサンプリングに応じたスケール調整、複数フレームの統合を組み合わせています。",
      "enables": "既存のNuRecと比較して、Physical AI上で46倍、Waymoデータセット上で70倍高速な再構成を実現しました。また、再構成されたデータを用いた3D物体検出精度でも実用的な水準を維持しています。",
      "why_it_matters": "自動運転のシミュレーションに必要な大規模な環境アセット構築にかかる時間を、数時間から数分へと劇的に短縮することに成功しました。",
      "tags": [
        "自動運転",
        "3D再構成",
        "GaussianSplatting"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32198",
      "title": "MoGe-4D: Efficient, Flexible, and Unified Dense 4D Reconstruction and Tracking",
      "url": "https://arxiv.org/abs/2611.32198",
      "pdf": "https://arxiv.org/pdf/2611.32198",
      "authors": [
        "Ruicheng Wang",
        "Linlin Xin",
        "Sicheng Xu",
        "Jianfeng Xiang",
        "Zelong Lv",
        "Yu Deng"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://microsoft.github.io/MoGe-4D",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce MoGe-4D, a feed-forward framework that unifies geometry and motion prediction",
      "signals": [],
      "headline": "MoGe-4D: 幾何構造と動きを統一的に予測する高速な4D再構成とトラッキング",
      "what": "RGBビデオから4Dの幾何構造と動きを同時に予測するフィードフォワードフレームワークです。デカップリングされたクエリエンコーダを用いることで、任意の解像度で密な3Dトラッキングと深度推定を同時に実行します。",
      "enables": "既存の4Dベースラインよりも大幅に高速に動作しつつ、最新の3D基盤モデルに匹敵する再構成精度と、最先端の密な3Dトラッキング性能を達成しました。学習データとしてRigIDTrackという新しい合成データセットを導入しています。",
      "why_it_matters": "再構成とトラッキングを分離せず、一つの軽量なデコーダで解決することで、動的なシーン解析の効率を大幅に改善しました。",
      "tags": [
        "コンピュータビジョン",
        "3D再構成",
        "モーショントラッキング"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32344",
      "title": "DiCT: Teaching X-ray Vision-Language Models to Reason via Imagining CT",
      "url": "https://arxiv.org/abs/2611.32344",
      "pdf": "https://arxiv.org/pdf/2611.32344",
      "authors": [
        "Zhenghao Lu",
        "Xiaotian Zhang",
        "Songtao Jiang",
        "Yiqun Lin",
        "Siming Fu",
        "Hualiang Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 8 figures. Supplementary material included",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "enabling it to reason directly from 2D X-rays without explicit CT reconstruction",
      "signals": [],
      "headline": "DiCT: CTの3D推論能力をX線診断モデルへ蒸留する3段階の学習フレームワーク",
      "what": "2DのX線画像から3D的な構造を推論するために、CT画像を扱うVLMからX線用VLMへ知識を転移する手法です。CT情報を「想像」するように促し、CT教師モデルが推論の軌跡をガイドするオンポリシー蒸留を行います。",
      "enables": "3D-RADにおける異常検知タスクで、CT再構成を明示的に行う手法と比較して、推論コストを1/12.77に削減しながら精度を1.66ポイント向上させました。推論時には2D画像のみで3D的な解剖学的推論が可能です。",
      "why_it_matters": "高度な3D診断が可能なCTの知見を、より一般的で安価なX線検査の診断支援に活用できる実用的価値の高いアプローチです。",
      "tags": [
        "医療AI",
        "知識蒸留",
        "VLM"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32431",
      "title": "NRG-Twins: Pixel-Level Ground Truth for Rigidity Violations in Generated Videos",
      "url": "https://arxiv.org/abs/2611.32431",
      "pdf": "https://arxiv.org/pdf/2611.32431",
      "authors": [
        "Chenrui Fan",
        "Qiyang Hu",
        "Luca Scharr",
        "Paolo Favaro"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "35 pages including supplementary material; 15 figures, 32 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We release Non-Rigidly Generated Twins (NRG-Twins), 871 twins, the code that builds them",
      "signals": [],
      "headline": "NRG-Twins: 生成ビデオの幾何学的な不整合をピクセル単位で検出するデータセットと手法",
      "what": "ビデオ生成モデルが生成する映像に含まれる微細な幾何学的歪み（非剛体的な動き）を定量化するためのデータセットと検出器です。実写映像とその再現映像をペアにした「双子」データを作成し、ピクセルごとに剛体性の違反をラベル化します。",
      "enables": "開発された検出器NRG-PDは、AUROC 0.85で生成映像内の不整合なピクセルを特定でき、既存の動きセグメンテーション手法（0.40-0.74）を圧倒しました。また、生成コンテンツを含む映像の3D Gaussian Splatting品質を改善できます。",
      "why_it_matters": "一見リアルだが3D的に矛盾している生成ビデオを自動評価・修正するための重要なマイルストーンとなります。",
      "tags": [
        "ビデオ生成",
        "3D一貫性",
        "データセット"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32745",
      "title": "MemAnchorWorld: A Sparse World Model with Horizon-Conditioned Memory Retrieval for Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.32745",
      "pdf": "https://arxiv.org/pdf/2611.32745",
      "authors": [
        "Xinyang Jia",
        "Yuqi Zhang",
        "Jiakai Wang",
        "Yahu Yang",
        "Guandong Pan",
        "Chao Tong"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 4 figures, 4 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "MemAnchorWorld achieves an average mIoU of 13.55% and an average IoU of 22.84% across the 1-3 s forecasting horizons, attaining state-of-the-art performance",
      "signals": [],
      "headline": "MemAnchorWorld: 過去の幾何情報を明示的に取得する自動運転用4D占有グリッド予測",
      "what": "自動運転において、長期的な将来の占有グリッド（Occupancy）を予測するためのスパース・ワールドモデルです。予測ステップに応じた「メモリ・アンカー」の階層的検索機構を導入し、過去の情報を明示的に参照することで誤差の蓄積を防ぎます。",
      "enables": "Occ3D-nuScenesにおいて、1-3秒の将来予測で平均mIoU 13.55%を達成し、最先端の性能を記録しました。特に長期予測において、時間的なエビデンスを直接利用することで幾何的な偏差を抑制しています。",
      "why_it_matters": "隠れ状態に頼る従来の時系列モデルの限界を超え、過去の重要情報を明示的に「思い出す」仕組みが将来予測の精度向上に寄与することを示しました。",
      "tags": [
        "自動運転",
        "ワールドモデル",
        "Occupancy"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.33133",
      "title": "A Bias in Disguise: Tiny Gradient Edits Stop a Small Language Model's Thinking Loops and Complement a Frontier Model's Weight Edit",
      "url": "https://arxiv.org/abs/2611.33133",
      "pdf": "https://arxiv.org/pdf/2611.33133",
      "authors": [
        "Hussamuddin Syed"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 2 figures, 7 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "The gradient concentrates the edit on the most nearly constant channel of each of the first three layers.",
      "signals": [],
      "headline": "微細な重み修正による小型言語モデルの思考ループ解消と性能向上",
      "what": "0.8Bの超小型LLMに見られる「思考のループ」を、ごく少数の重みを修正することで解消する手法です。モデル自身の正解例を用いた勾配ベースの微調整により、特定の層の定数ベクトル（bias的な役割）を修正し、推論の完結を促します。",
      "enables": "MATH-500ベンチマークにおいて、わずか2-9分の学習で精度を15.4%から45.5%まで向上させました。また、GPT-6 Astraによる重み編集と組み合わせることで、32kトークン時に62.2%という高い精度を達成しました。",
      "why_it_matters": "超小型モデルでも適切な「バイアス」の修正によって高度な推論能力を引き出せることを示し、モデル編集の新しい可能性を提示しました。",
      "tags": [
        "LLM",
        "推論",
        "モデル編集"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31621",
      "title": "Self-Improving Long-Horizon Reasoning by Learning Summaries from Local Continuations",
      "url": "https://arxiv.org/abs/2611.31621",
      "pdf": "https://arxiv.org/pdf/2611.31621",
      "authors": [
        "Haoqun Cao",
        "Tengyang Xie"
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
        "new"
      ],
      "star_quote": "we train a separate summarizer with Delta-KL, a reward computed from the frozen reasoning model's token-level predictions on sampled continuations",
      "signals": [],
      "headline": "TruSuCo: 自己改善により推論履歴を圧縮し、長期推論を可能にする手法",
      "what": "長い推論過程を途中で切り詰め、要約に変換してから推論を継続する（Truncate, Summarize, Continue）手法です。Delta-KLという独自の報酬を用い、要約後の推論が要約前の振る舞いを維持するように要約モデルを学習させます。",
      "enables": "数学ベンチマークAIME 2024-2026において、通常の推論手法を10ポイント上回る精度を達成しました。推論ステップが長くなるほど精度が劣化するという、既存の推論モデルの限界を克服しています。",
      "why_it_matters": "外部の教師データや報酬モデルを使わずに、モデル自身の「短い文脈での正確さ」を長い推論に引き継がせる自己改善の仕組みが画期的です。",
      "tags": [
        "LLM",
        "推論",
        "自己改善"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31918",
      "title": "HiGS: A Hierarchical Architecture for Fast Differentiable 3D Gaussian Splatting",
      "url": "https://arxiv.org/abs/2611.31918",
      "pdf": "https://arxiv.org/pdf/2611.31918",
      "authors": [
        "Dawid Paj\\k{a}k",
        "Martin Bisson",
        "Rodolfo Lima",
        "Fran\\c{c}ois Trudel"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
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
      "star_quote": "HiGS renders scenes faster than every published method we evaluate, by the widest margin on views with uneven load, and reconstructs them faster and in less memory",
      "signals": [],
      "headline": "HiGS: 階層的なタイル管理による高速な3D Gaussian Splattingのレンダリングと再構成",
      "what": "レンダリングと再構成の単位を、粗いマクロタイルと細かいレンダータイルの2階層で管理する3DGSアーキテクチャです。画像内の負荷の不均衡を解消するバッチ処理と、メモリ消費を抑えたオプティマイザの統合 backward パスを導入しています。",
      "enables": "評価したすべての手法の中で最も速いレンダリング速度を達成し、特に負荷が偏ったシーンで顕著な差を示しました。メモリ消費量も大幅に削減しつつ、画像品質と完全なアルファ合成を維持しています。",
      "why_it_matters": "3DGSの計算上のボトルネックを解消し、より高精細なシーンのリアルタイムレンダリングと高速な学習を可能にしました。",
      "tags": [
        "3D再構成",
        "レンダリング",
        "GaussianSplatting"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32037",
      "title": "Online Environment Repair for Coding Agents",
      "url": "https://arxiv.org/abs/2611.32037",
      "pdf": "https://arxiv.org/pdf/2611.32037",
      "authors": [
        "Sheng Lu",
        "Rui Mao",
        "Zewei Chen",
        "Chihua Ying",
        "Beiduo Chen",
        "Dingxin Hu"
      ],
      "categories": [
        "cs.LG",
        "cs.CR",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "online environment repair, which leaves triggering rollout rewards unchanged to remove hiding incentives and asynchronously patches exploited environments during training.",
      "signals": [],
      "headline": "コーディングエージェントのためのオンライン環境修復による報酬ハッキング防止",
      "what": "強化学習中のコーディングエージェントが、不完全なテストを悪用して報酬を得る「報酬ハッキング」を、環境側のバグを自動修正することで防ぐ手法です。エージェントの挙動から脆弱性を検出し、非同期的にテストや環境をパッチします。",
      "enables": "20種類のソフトウェア開発リポジトリにおいて、累積報酬ハッキング率を36.9%から0.06%まで激減させ、検証用データでのPass@8を21.7%から46.7%へ大幅に向上させました。",
      "why_it_matters": "モデル側を制限するのではなく、学習環境（ベリファイア）を動的に堅牢化するという新しいアプローチで、より実用的で誠実なAIエージェントの育成を可能にします。",
      "tags": [
        "AIエージェント",
        "強化学習",
        "コード生成"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32452",
      "title": "The Teacher Is Already Inside: Self-Distilling Looped Language Models Beyond Their Last Loop",
      "url": "https://arxiv.org/abs/2611.32452",
      "pdf": "https://arxiv.org/pdf/2611.32452",
      "authors": [
        "Linghua Zhang"
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
      "star_quote": "ELPSD (Extrapolated-Loop Policy Self-Distillation) turns this distribution into a self-distillation target: a frozen copy of the model computes it",
      "signals": [],
      "headline": "ELPSD: 報酬不要で推論能力を向上させる「外挿ループ」自己蒸留手法",
      "what": "ループ構造を持つ言語モデルにおいて、特定のループ（1段目から最終段）の出力分布から、さらに先の分布を外挿し、それを教師信号として自身の最終ループに蒸留する手法です。報酬モデルや外部の正解データを必要とせず、自己完結的に学習します。",
      "enables": "数学ベンチマーク5種において、検証器（verifier）を用いるGRPOや正解データを必要とする手法を抑え、平均スコアを61.15から63.69へと引き上げ、最高の性能を達成しました。",
      "why_it_matters": "「モデルの中に既に教師がいる」という着想のもと、ループ構造の特性を活かして効率的に推論性能を高める手法を確立しました。",
      "tags": [
        "LLM",
        "自己蒸留",
        "推論"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32504",
      "title": "InducedTFMs: A Family of Sub-Quadratic Tabular Foundation Models Using Induced Attention",
      "url": "https://arxiv.org/abs/2611.32504",
      "pdf": "https://arxiv.org/pdf/2611.32504",
      "authors": [
        "Salome Gobbi",
        "Nicolas Atienza",
        "Nicola Cancedda",
        "Michael Arbel"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 4 figures, 3 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "InducedTFM, which replaces both attention stages of a bidimensional TFM with the induced attention of the Set Transformer, preserving cell-level representations",
      "signals": [],
      "headline": "InducedTFMs: 大規模な表データに対応可能な計算効率の高い表形式データ基盤モデル",
      "what": "表形式データの基盤モデル（TFM）において、従来の二次関数的な計算コストを、Set Transformerの誘発アテンション（induced attention）を用いることで線形コストに削減したモデル群です。セルの表現を維持したまま、サンプル数と特徴量数の両方に対して効率化しています。",
      "enables": "従来のTabICLv2と同等の精度を維持しつつ、64万行のデータにおいて30倍の推論高速化を実現しました。これにより、合成データだけでなく大規模な実データでの事前学習と推論が可能になりました。",
      "why_it_matters": "これまで計算コストの制約で難しかった、大規模な表データに対するインコンテキスト学習や基盤モデルの適用を現実的なものにしました。",
      "tags": [
        "機械学習",
        "表形式データ",
        "効率化"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32797",
      "title": "Supply Geometry, Learn Execution: Screw Attention for Zero-Shot Policy Transfer in Robot Manipulation",
      "url": "https://arxiv.org/abs/2611.32797",
      "pdf": "https://arxiv.org/pdf/2611.32797",
      "authors": [
        "Aly Magassouba"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical Report, 6 pages, 2 figures, 4 Tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "trained entirely in simulation on a single robot arm, the policy generalises to new scene layouts, transfers zero-shot across robot embodiments",
      "signals": [],
      "headline": "Screw Attention: 幾何学的構造を明示的に与えることでゼロショット転移を実現するロボット制御",
      "what": "ロボット制御において、タスクの幾何学的構造（物体のポーズ、関節のねじ軸など）を直接ポリシーに供給し、実行部分のみを学習させるフレームワークです。わずか3万パラメータの極めて小さなモデルで構成されます。",
      "enables": "シミュレーション上の単一のアームでのみ学習し、未知のロボットアーム5種に対して80.2%の成功率でゼロショット転移を達成しました。実機のロボットでも24試行中21回成功し、高い汎用性を示しました。",
      "why_it_matters": "「何を学習し、何を与えるべきか」という設計思想を転換し、幾何学情報を明示的に扱うことで、ロボット制御の汎用性と学習効率を劇的に高められることを証明しました。",
      "tags": [
        "ロボティクス",
        "ゼロショット学習",
        "幾何学"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.32807",
      "title": "From Grammar Deltas to Token Masks: Incremental Constrained Decoding under Runtime Grammar Evolution",
      "url": "https://arxiv.org/abs/2611.32807",
      "pdf": "https://arxiv.org/pdf/2611.32807",
      "authors": [
        "Hantao Hua",
        "Jiming Su",
        "Yonggang Che",
        "Feng Zhu"
      ],
      "categories": [
        "cs.CL",
        "cs.FL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Submitted to ICLR 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce GramDelta, an incremental framework for constrained decoding with append-only runtime grammar updates.",
      "signals": [],
      "headline": "GramDelta: 文法制約が実行時に変化する環境下での高速な逐次デコード",
      "what": "LLMの出力に文法制約を課すデコードにおいて、新しい関数宣言などによって実行時に文法が更新される際、最初から再パースせずに差分だけを反映するフレームワークです。追加された規則による依存関係の変化のみを伝搬させます。",
      "enables": "文法が逐次進化する環境下で、文法更新のレイテンシを従来手法の約1/11に削減し、制約なしデコードに対するオーバーヘッドを最大81.9%削減しました。出力の正確性を保ちつつ、リアルタイム性を大幅に向上させます。",
      "why_it_matters": "コード生成や動的なDSL生成など、生成が進むにつれて制約が増える実用的なシーンでの構造化デコードを現実的な速度で可能にします。",
      "tags": [
        "LLM",
        "コード生成",
        "構造化出力"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.33013",
      "title": "RFW-W: Scaling Physical Asset Universes for Generative Embodied Simulation",
      "url": "https://arxiv.org/abs/2611.33013",
      "pdf": "https://arxiv.org/pdf/2611.33013",
      "authors": [
        "Jiawei Weng",
        "Rui Zhang",
        "Saining Zhang",
        "Changjian Pan",
        "Yuanbo Lyu",
        "Jiarui Guo"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "38 pages, 16 figures. Project Page: https://roboflywheel-com.github.io/RoboFlywheel-World/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "exceeding the strongest baseline by 15.8 and 10.6 percentage points, respectively.",
      "signals": [],
      "headline": "RFW-W: 100万点を超える物理属性付きアセットによる大規模なシミュレーション環境",
      "what": "剛体、関節物体、変形体を含む100万件以上の物理アセットと、それらをタスクに応じてシーン構成する統合プラットフォームです。自動生成された物理プロパティや干渉情報、関節構造の注釈が含まれています。",
      "enables": "既存のデータセットよりも広いカテゴリを網羅し、これを用いた学習によりRoboTwinタスクでの成功率がベースラインより最大15.8ポイント向上しました。多様な物理的制約下でのロボット学習を支援します。",
      "why_it_matters": "汎用ロボットエージェントの育成に不可欠な「多様で物理的に正確な世界」を大規模に提供し、シミュレーションと現実のギャップを埋める基盤となります。",
      "tags": [
        "ロボティクス",
        "シミュレーション",
        "データセット"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.33147",
      "title": "One Take, Many Cameras: Audio-Grounded Shot Synthesis for Dialogue Re-Cinematography",
      "url": "https://arxiv.org/abs/2611.33147",
      "pdf": "https://arxiv.org/pdf/2611.33147",
      "authors": [
        "Anthony Chen",
        "Naomi Ken Korem",
        "Matan Ben-Yosef",
        "Tavi Halperin",
        "Urska Jelercic",
        "Ofir Bibi"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://recinematography.github.io/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our method lowers perceptual error by 59%, landmark error by 56%, and speech leakage by 97% relative to the strongest baseline, Wan 3.0.",
      "signals": [],
      "headline": "Audio-Grounded Shot Synthesis: 音声情報を活用した対話シーンの再撮影・合成技術",
      "what": "1つの広角映像から、話者のクローズアップなどの別カットを合成する技術です。視点に依存しない「音声」情報をリップシンクのガイドとして使いつつ、特定の話者の顔だけを駆動させるSpeaker-aware audio gatingを導入しています。",
      "enables": "最強のベースラインと比較して、視覚的な知覚エラーを59%、ランドマークエラーを56%削減し、聞き手の口が動いてしまう「スピーチ漏れ」を97%抑制することに成功しました。",
      "why_it_matters": "映画製作やビデオ編集において、追加の撮影なしで自然なカット割りを作成できるため、ポストプロダクションのコスト削減と柔軟性向上に寄与します。",
      "tags": [
        "ビデオ生成",
        "マルチモーダル",
        "動画編集"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31343",
      "title": "Exact Volume-Preserving Diffeomorphic Shear Splitting: Continuous-Discrete Geometric Bounds, Reversible Memory Backpropagation, and Expressivity Frontiers in Volumetric Mapping",
      "url": "https://arxiv.org/abs/2611.31343",
      "pdf": "https://arxiv.org/pdf/2611.31343",
      "authors": [
        "Alvaro Garcia-Casas"
      ],
      "categories": [
        "eess.IV",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 4 figures, 4 tables. Reversible PyTorch autograd engine with exact volume-preserving diffeomorphism guarantees",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We formulate an exact structure-preserving framework for 3D registration based on cascaded coordinate shears.",
      "signals": [],
      "headline": "Exact Volume-Preserving Shear Splitting: 体積を厳密に保存する高速な3D医用画像登録",
      "what": "組織の体積変化がない3D画像登録（変形操作）を、座標軸に沿った「せん断（shear）」の組み合わせとして定式化した手法です。数値的な近似ではなく、数学的に厳密な逆変換と体積保存（行列式=1）を実現します。",
      "enables": "脳や心臓のMRIにおいて、体積の誤差（ドリフト）をゼロに抑えつつ、従来のSVF法より2.1-4.0倍高速に動作し、GPUメモリ消費を78.4%削減しました。トポロジーの崩れ（折り畳み）も発生しません。",
      "why_it_matters": "医療画像解析において、計算効率と解剖学的な正しさ（体積保存）を両立させた、理論的かつ実用的なブレイクスルーです。",
      "tags": [
        "医療AI",
        "画像登録",
        "幾何学的ディープラーニング"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2611.29897",
      "title": "Motion Mamba 2.0: Autoregressive Diffusion Mamba for Long-Horizon Humanoid Control",
      "abstract": "Long-horizon, real-time controllable motion generation is essential for interactive animation and humanoid robotics, where an agent must respond to changing instructions and spatial goals while moving. Existing autoregressive diffusion methods generate motion incrementally, but bounded attention caches limit access to distant history, while repeated denoising introduces substantial inference overhead. We present Motion Mamba 2.0, a Mamba-based root-body diffusion architecture that integrates local attention, resumable recurrent states, and persistent content memory (PCM) for long-horizon controllable motion generation. PCM transforms compressed motion history from Mamba recurrent states, together with state changes and text-conditioned features, into dynamically updated content slots accessible to local attention. To enable efficient inference, we further develop an execution scheme tailored to this architecture, combining CUDA Graph replay, fused kernels, and execution-flow simplification while preserving the canonical history update. Evaluations on retargeted HiPHI demonstrate accurate terminal control over rollouts of up to 39.52 s, while short-horizon comparisons on BONES Seed and retargeted HumanML3D show that the model also retains strong spatial control and text-motion matching. On an RTX 4090, the optimized execution reduces median complete-window latency from 1685.35 to 276.14 ms, achieving a median paired speedup of 6.138times while preserving identical outputs and committed states in the tested rollouts. Moreover, we conduct extensive real-world evaluation on the Unitree G1, demonstrating sequential text-guided action composition, expressive motion, and interactive locomotion through keyboard and mouse control.",
      "upvotes": 211,
      "github_stars": 34,
      "github_repo": "https://github.com/AIGeeksGroup/MotionMamba2.0",
      "project_page": "https://aigeeksgroup.github.io/MotionMamba2.0/",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.29897",
      "arxiv_url": "https://arxiv.org/abs/2611.29897",
      "title_ja": "Motion Mamba 2.0: ヒューマノイド制御のための自己回帰拡散Mamba",
      "summary_ja": "Mamba基盤の新建築により、長い文脈の履歴を保持しつつ、リアルタイムで制御可能な高品質の全身運動を生成できる。"
    },
    {
      "id": "2611.30989",
      "title": "WorldLeague: Benchmarking Physical Agency",
      "abstract": "AI systems can now operate Blender, follow instructions in complex video games, and manipulate objects with robot arms. What range of physical goals can today's AI systems achieve autonomously? Answering this question requires testing systems on tasks that demand different combinations of perception, memory, planning, and action. We introduce WorldLeague, a benchmark that compares AI systems on a common set of 60 simulated robot tasks by measuring progress toward each task's physical goal from the robot's trajectory. Robots explore scenes to gather evidence in WorldSeek, rearrange objects in WorldShape, and adapt to changes in WorldShift. Tying these goals to a single control interface limits which AI systems can be compared. In WorldLeague, vision-language models (VLMs) choose targets and motions, while vision-language-action models (VLAs) and world-action models (WAMs) use their native controls. For each of six capability dimensions, we measure how much progress a system makes toward its goals (Interactive Score) and how often it achieves them (physical success rate). Together, these measures form the system's Physical Agency Profile. Among 13 representative AI systems, Claude Fable 5.2 achieves 13 of the 60 goals and earns the highest mean Interactive Score (28.58/100). Fable leads in four dimensions, while GPT-6.1-Sol and GPT-6-Astra tie for first on rule-following tasks. Even when VLMs answer every final question correctly, they receive an Interactive Score of zero in 71.8\\% of those episodes. WorldLeague gives Embodied AI, Physical AI, and Agentic AI a shared basis for comparing what AI systems achieve autonomously, from partial progress toward a physical goal to full goal completion. Project Webpage: https://xyangzhou.github.io/WorldLeague",
      "upvotes": 136,
      "github_stars": 19,
      "github_repo": "https://github.com/xyangzhou/WorldLeague",
      "project_page": "https://xyangzhou.github.io/WorldLeague/",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.30989",
      "arxiv_url": "https://arxiv.org/abs/2611.30989",
      "title_ja": "WorldLeague: 物理的エージェンシーのベンチマーク",
      "summary_ja": "知覚・計画・行動を要する60種のシミュレーション課題を通じ、AIシステムの自律的な物理目標達成能力を測定する新指標。"
    },
    {
      "id": "2611.25403",
      "title": "Antom 3-in-1 Transformer: A Payment Foundation Model",
      "abstract": "We report the development of Antom 3-in-1 Transformer, a payment foundation model that integrates sequence, tabular, and graph representations for payment risk detection. The model contains approximately 7B parameters, with approximately 1.7B activated per task route. Antom 3-in-1 Transformer is pretrained to learn reusable behavioral and relational representations, primarily on Ant International's internal payment data. In a cross-business transfer experiment, pretraining improves the target business metric by 34.5% over the same architecture trained from scratch. With only 25% of the training labels, the pretrained model outperforms the full-label scratch baseline in Average Precision (AP) and Recall@0.5% on different merchant domains. In a four-month online experiment on Ant International's billion-scale payment platform, the model reduced the overall loss rate by 37.88% relative to XGB-Online.",
      "upvotes": 104,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2611.25403",
      "arxiv_url": "https://arxiv.org/abs/2611.25403",
      "title_ja": "Antom 3-in-1 Transformer: 決済基盤モデル",
      "summary_ja": "系列・表・グラフ表現を統合し、少数のラベルでも高い精度で決済リスクを検出できる70億パラメータの事前学習モデル。"
    },
    {
      "id": "2611.31201",
      "title": "Embo-Harness: Towards Understanding Frontier-Model-as-Policy Harness",
      "abstract": "Frontier multimodal models exhibit extraordinary generalization in generating robot actions from observations and instructions, enabling a new paradigm in which they serve directly as policies within closed-loop robotic harnesses. However, the design principles of such harnesses, and the capabilities underlying their strong performance, remain unclear. We present Embo-Harness, a framework for systematically studying frontier-model-as-policy harnesses. We investigate four components of the robotic agentic loop, namely, prompting, planning, action execution, and tool use, and distill six empirical findings into a practical recipe. This recipe prioritizes interfaces that exploit the model's native visual reasoning and tool-use capabilities over handcrafted plans, skills, or action priors, and identifies effective choices for action representation, chunking, reasoning effort, visual observations, short multi-action sequences, and policy refinement. On RoboLab-120, Embo-Harness achieves an 83.3\\% success rate, outperforming the strongest reported baseline by 26.2 percentage points. It also succeeds in 15 of 20 zero-shot trials across four real-world manipulation tasks. Beyond performance, controlled interventions indicate that the studied model depends more strongly on accurate spatial target estimation than on explicit low-level joint or trajectory generation. These results provide both a practical recipe for building strong frontier-model-as-policy harnesses and a clearer account of the capabilities that drive their performance.",
      "upvotes": 103,
      "github_stars": 68,
      "github_repo": "https://github.com/DravenALG/Embo-Harness",
      "project_page": "https://dravenalg.github.io/projects/Embo-Harness/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.31201",
      "arxiv_url": "https://arxiv.org/abs/2611.31201",
      "title_ja": "Embo-Harness: フロンティアモデルによるポリシーハーネスの理解に向けて",
      "summary_ja": "VLMをロボットの制御方針として直接使う際の、プロンプトや計画、行動実行等の設計原則を体系的に調査し最適解を提示。"
    },
    {
      "id": "2611.32884",
      "title": "Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe",
      "abstract": "AI agents working on long tasks often commit to an answer before they have enough evidence, a behavior called laziness. In our evaluations, they frequently commit even while their stated belief still names several possible answers. An outcome reward at the end of the episode scores only the final answer, so it cannot teach the agent when to commit, because a lucky guess receives the same reward as an answer backed by evidence. During training, however, the simulator can compute the exact posterior over the answer at every step and tell whether the evidence is already enough. We propose Reinforcement Learning with Verifiable Beliefs (RLVB), which rewards the agent for taking further steps while this posterior still allows several answers and for committing once the evidence is sufficient. The reward needs no judge, critic or reward model, and it never reads the belief line the agent writes before each action. We also introduce Pro Worlds, a benchmark of visual puzzles where the agent views a large world through a small window. We evaluate three vision-language models on three benchmarks, two of which are never seen in training. RLVB improves the base model in all nine settings, by 17.1% on average. Under the outcome reward, GRPO and PPO fall below the base model on average. RLVB also outperforms PPO with a process reward from an LLM judge by 9.3% on average while using 1.6 times fewer GPU-hours. The trained agent answers with sufficient evidence in 51%, 12% and 74% of the episodes on the three benchmarks, against 8%, 0.4% and 36% for the base model. Its accuracy gain therefore comes from answering more often at high levels of evidence. The belief line shows how the agent reaches this evidence: it acts on its own belief. It commits at only 0.1 to 2.2% of the turns at which the evidence is insufficient and its line still names several answers, against 3 to 68% for the base model.",
      "upvotes": 97,
      "github_stars": 26,
      "github_repo": "https://github.com/declare-lab/RLVB",
      "project_page": "https://declare-lab.github.io/RLVB/?case=tabletop_cups&m=rlvb_grpo&s=0",
      "comments": 6,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.32884",
      "arxiv_url": "https://arxiv.org/abs/2611.32884",
      "title_ja": "怠惰なエージェントは自身の信念に反して回答する：検証可能な信念を伴う強化学習による改善",
      "summary_ja": "根拠不足のまま回答する「怠惰」を解消するため、推論ステップごとに証拠の十分性を報酬として与える学習手法RLVBを提案。"
    },
    {
      "id": "2611.28947",
      "title": "Don't Sleep, Keep Watch: Proactive Perception for Computer-Use Agents",
      "abstract": "Computer-use agents (CUAs) built on vision-language models are increasingly entrusted with long-horizon tasks in live desktop, web, and mobile environments, where the screen keeps changing on its own. However, current CUAs lack real-time situational awareness: they perceive the environment through discrete snapshots, and the substantial inference latency of VLMs, compounded by highly dynamic interfaces, opens a perception-action gap in which the observed state frequently becomes stale before the corresponding action is executed. To bridge this gap, we present NightWatch, a plug-and-play framework that endows any CUA with continuous, temporally grounded perception without changing the agent's model, prompt, or action space. NightWatch couples the VLM agent with NightWatch-0.8B, a lightweight System-1 model that performs streaming monitoring of the interface state and keeps the agent synchronized with the evolving environment at low computational cost and latency, thereby grounding each decision in the current state rather than an outdated snapshot and reducing both stale actions and idle waiting while preserving task success. Experiments on desktop and dynamic web environments (OSWorld-Verified and DynaCU-Bench) show that NightWatch, driven by a watcher of only 0.8B parameters, reduces non-reasoning wall-clock time by 33% and wasted time by 53% on OSWorld while keeping task success on par, raises success on DynaCU-Bench from 39.5% to 44.2% with the large VLM agent, and is more efficient than passive-watching baselines such as AOI and PUSV under the same screenshot-only input, as well as a System-1 decision model more than 30times its size. Overall, NightWatch demonstrates that the timing of perception is as critical as its content, marking a step toward agents that maintain continuous awareness of their environment rather than perceiving it turn by turn.",
      "upvotes": 97,
      "github_stars": 2,
      "github_repo": "https://github.com/SuJQ0722/NightWatch",
      "project_page": "https://sujq0722.github.io/NightWatch/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.28947",
      "arxiv_url": "https://arxiv.org/abs/2611.28947",
      "title_ja": "Don't Sleep, Keep Watch: PC操作エージェントのための能動的知覚",
      "summary_ja": "VLMの推論遅延による情報の劣化を防ぐため、画面の変化を継続的に監視・追跡し最新状態をエージェントに提供する手法。"
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
      "title_ja": "cmHC: 幾何学的収縮によるハイパーコネクションのストリーム混合のバランス調整",
      "summary_ja": "複数の残差接続の流れが、独立しすぎず混ざりすぎない最適な状態を理論的に導き出し、モデルの学習を安定させる手法。"
    },
    {
      "id": "2611.30634",
      "title": "Rewirable Circuits in Transformers with Loom Attention",
      "abstract": "We propose loom attention, which allows a Transformer to dynamically rewire its circuits at every token by interweaving a head's vertical attention over the outputs of earlier heads (to obtain its query, key and value) with its horizontal attention over tokens. We instantiate vertical attention efficiently with normalized and gated linear attention over a per-token matrix memory, which stores the compressed head outputs and serves as a second residual stream. This yields LoomFormer, a dual-stream architecture that splits control and content between the vector and matrix streams. Across model sizes and training token budgets in language modeling and downstream tasks, LoomFormer matches Transformers trained with over 3x compute and recent residual-stream baselines (HC/mHC, MUDDFormer, AttnRes) trained with ~1.7-2.8x. For example, trained on the same 300B tokens with only 2% extra FLOPs, LoomPythia-2.8B achieves ~1.6x the average downstream gain of mHC-Pythia-2.8B over Pythia-2.8B, and matches (0-shot) or surpasses (5-shot) Pythia-12B. Code is available at https://github.com/Caiyun-AI/LoomFormer",
      "upvotes": 87,
      "github_stars": 4,
      "github_repo": "https://github.com/Caiyun-AI/LoomFormer",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.30634",
      "arxiv_url": "https://arxiv.org/abs/2611.30634",
      "title_ja": "Loom Attentionを用いたTransformer内の再配線可能な回路",
      "summary_ja": "トークンごとにヘッド間の接続を動的に変更するLoom Attentionにより、計算効率と予測精度を両立する新アーキテクチャ。"
    },
    {
      "id": "2611.31205",
      "title": "ACAP: Asynchronous Coding Agents for Efficient Robot Control",
      "abstract": "Coding agents can construct and revise robot behavior during execution, but using one agent for the whole robot can delay otherwise independent work. We introduce Asynchronous Coding Agents as Policy (ACAP), an asynchronous framework that organizes one robot as a team of persistent agents. Each member reasons and acts for a configurable control group, such as an arm with its gripper or the torso and chassis, enabling asynchronous reasoning and execution. However, different robot components often have physical dependencies that require coordination. To address this challenge, ACAP introduces a hyper-agent that assigns tasks, coordinates dependencies, and dynamically allocates control between the lead and member agents. This allows independent work to progress concurrently while supporting tightly coupled manipulation when necessary. Across 72 real-world rollouts covering 25 task/platform settings, ACAP reduces task-balanced time cost by 28.2% compared with a single-agent Direct Policy, with improvements across Fully Parallel, Parallel-Sequential, and Collaborative tasks. Across all eight Collaborative settings, ACAP also achieves lower mean time cost than Fixed Delegation, where only member agents can control their assigned groups. An additional 90-rollout study shows lower mean 30-minute-capped time cost than Direct on all six tasks. We further demonstrate mobile manipulation using the same member interface for chassis and torso control. We present the framework and a real-world rollout dataset containing observations, generated programs, actions, and feedback to support research on how coding agents reason and act in the physical world.",
      "upvotes": 62,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://projects.zxhezexin.com/acap",
      "comments": 3,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.31205",
      "arxiv_url": "https://arxiv.org/abs/2611.31205",
      "title_ja": "ACAP: 効率的なロボット制御のための非同期コーディングエージェント",
      "summary_ja": "ロボットの各部位を独立したエージェントとして非同期に制御しつつ、上位エージェントが部品間の物理的干渉を調整する枠組み。"
    },
    {
      "id": "2611.27963",
      "title": "Non-penetrating World Models",
      "abstract": "We study a new problem of preventing object penetration in interactive video world models. To understand how existing models handle this, we introduce NoPeBench, a benchmark that evaluates how world models respond to physical obstacles. Our evaluation reveals that none of the open-source models can reliably prevent such failures. Surprisingly, however, these models already encode the information needed to predict such violations. We find that the hidden states of diffusion transformers (DiTs) can predict whether a candidate action will penetrate an obstacle. Building on this, we introduce NoPeWorld, a lightweight framework that detects and prevents penetration. Specifically, we train a small prediction head on top of a frozen DiT's hidden states to read out if a candidate action is safe or not. Unsafe actions are then replaced with safe ones that best preserve the original intent. Despite its simplicity, NoPeWorld substantially reduces the physical violation rate, averaged over six video world models, from 74% to 16%. Remarkably, our method shows zero-shot generalization to open-domain imagery, third-person viewpoints, and moving obstacles. We publicly release our code, the NoPeBench benchmark, and model weights. Project Page: https://nopeworld.github.io .",
      "upvotes": 62,
      "github_stars": 51,
      "github_repo": "https://github.com/yuhangdai427/NoPeWorld",
      "project_page": "https://nopeworld.github.io/",
      "comments": 3,
      "org": "The Hong Kong Polytechnic University",
      "url": "https://huggingface.co/papers/2611.27963",
      "arxiv_url": "https://arxiv.org/abs/2611.27963",
      "title_ja": "非貫通型ワールドモデル",
      "summary_ja": "物体同士のめり込みを評価する指標を導入し、DiTの内部状態から貫通を予測・回避する軽量な制御フレームワークを開発。"
    },
    {
      "id": "2611.30013",
      "title": "3AGameFactory-Motion: Agentic Rigging and Reliable Complex Motion Generation for Diverse 3D Assets",
      "abstract": "Animating arbitrary 3D assets from instructions requires both structural inference and motion control, yet existing motion benchmarks mostly cover conventional human or animal skeletons with simple instructions. We introduce DivDynBench, which evaluates rigging and motion generation across six morphology categories, with instructions requiring multi-phase part coordination and explicit timing, angle, repetition, and trajectory constraints. With large language models, we systematically compare three common paradigms: specialized motion generation, video generation followed by motion recovery, and direct agent-driven generation. We analyze their control capabilities, cross-morphology adaptability, and generation costs. Guided by this comparison, we propose an Agentic Motion Framework in which an agent writes compact parametric skeleton and motion programs, and a deterministic executor performs rigging, kinematic solving, and geometric correction. Compact parameter control reduces generation overhead and improves rigging reliability and motion-control accuracy, providing practical guidance for deploying complex 3D motion generation.",
      "upvotes": 61,
      "github_stars": 1397,
      "github_repo": "https://github.com/OpenDCAI/GameFactory-3A",
      "project_page": "",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.30013",
      "arxiv_url": "https://arxiv.org/abs/2611.30013",
      "title_ja": "3AGameFactory-Motion: 多様な3D資産のためのエージェントによるリギングと複雑な動作生成",
      "summary_ja": "多様な形態の3Dモデルに対し、LLMを用いて骨格推定から複雑な制約付き動作の生成までを自動で行う手法を評価・提案。"
    },
    {
      "id": "2611.12164",
      "title": "Let the Fixer Decide: Training a Code Localizer from the Fixer's Likelihood",
      "abstract": "Code localizers are usually trained to predict the files a reference patch edits, but the code a fixer needs to read is not the same as the code it changes. We propose Fixer-Guided Localization (FGL): the localizer proposes several localizations, a frozen fixer scores each by how likely it makes a verified patch, and the localizer is trained on these scores with weighted supervised fine-tuning, without running tests and without reinforcement learning. We build the full pipeline on Gemma 4 E4B for the Kaggle Gemma-4 Developer Agent competition, from 1,629 test-verified Kimi K3 trajectories. The FGL target helps the fixer find the bug as often as the teacher's localization while using 27.5% less code. On the development set, one EM round moves the agent in the expected direction compared with a matched control: more tasks reach a patch (53 vs. 46), fewer tasks get stuck reading files that do not exist (43 vs. 54), and more tasks are solved (8 vs. 6). Training also changes how the agent works: trained agents explore about three times more than the base model and write far fewer wrong patches, and the single agent solves up to 11 of 78 tasks, against 8 for the base model. An analysis of 13 evaluation runs identifies what limits a 4B agent under an 8-minute budget (time, repetition loops and edit quality) and gives practical lessons for training small coding agents. All data, code and adapters are publicly available.",
      "upvotes": 59,
      "github_stars": 0,
      "github_repo": "https://github.com/misraj-ai/locfix",
      "project_page": "",
      "comments": 4,
      "org": "Misraj Ai",
      "url": "https://huggingface.co/papers/2611.12164",
      "arxiv_url": "https://arxiv.org/abs/2611.12164",
      "title_ja": "修正者に決定させる：修正者の尤度からコード局所化器を訓練する",
      "summary_ja": "テスト実行なしで、バグ修正モデルが最も「修正しやすい」と感じるコード箇所を特定できるよう学習させる新たな局所化手法。"
    },
    {
      "id": "2611.29338",
      "title": "A Glimpse of Training VLMs as Foundation Models for Robotic Manipulation",
      "abstract": "Recently, GPT-6 Astra demonstrates strong generalization in robot control, yet limited disclosure of its training leaves open how such capabilities can be reproduced. We introduce nanoAstra, an approach to training vision-language models (VLMs) for generalizable manipulation that combines semantic action modeling with capability-preserving supervised fine-tuning (CP-SFT). nanoAstra represents robot behavior as semantic steps composed of reusable, parameterized action primitives, guided by explicit progress descriptions. Meanwhile, CP-SFT uses an explicit robot-specific system prompt to constrain manipulation outputs to a structured action space, aiming to focus adaptation on robot-specific contexts and promote specialization while minimizing interference with broader pretrained capabilities. With this formulation, we train nanoAstra on more than 5,000 hours of robot data together with general VQA data. On RoboTwin 2.0's randomized benchmark, nanoAstra-9B achieves a 17.8% zero-shot success rate, substantially outperforming advanced VLA and WAM baselines as well as similarly sized VLMs. With inference faster than the corresponding motion execution on a single H20 GPU, our model supports action-chunk-like streaming execution that overlaps inference with motion, reducing the robot's idle time from 35.0% to 6.9%.",
      "upvotes": 56,
      "github_stars": 23,
      "github_repo": "https://github.com/Hugo-AGI/nanoAstra",
      "project_page": "https://nanoastra.github.io",
      "comments": 2,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.29338",
      "arxiv_url": "https://arxiv.org/abs/2611.29338",
      "title_ja": "ロボット操作の基盤モデルとしてのVLM訓練の考察",
      "summary_ja": "意味的な行動モデリングと、汎用能力を維持しつつロボット操作に特化させるCP-SFTにより、高い汎用性を持つ制御を実現。"
    },
    {
      "id": "2611.26444",
      "title": "Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation",
      "abstract": "Embodied intelligence aims to let robots perform complex physical tasks with human-like adaptability and reliability, which requires three complementary capabilities: history-based cognitive reasoning, precise and timely physical execution, and the composition of reasoning and execution through environmental feedback. Yet existing benchmarks either evaluate reasoning and execution within the same tasks or assess them separately without their composition, so they reveal little about whether a failure comes from reasoning, execution, or their composition. We introduce Mind2Act World, a diagnostic benchmark of 30 simulated manipulation tasks from five real-world application domains. Each task has three difficulty levels and two scene settings (Clean and Random), yielding 180 configurations. The tasks form three views: Mind tests decisions based on past observations, Act tests precise and timely execution, and Mind2Act combines both in closed-loop tasks where action outcomes guide later decisions. Comparing the three views shows whether a system lacks a capability or fails to compose capabilities it already has. A diagnosis harness further attributes the failed episodes of three representative systems to Mind, Act, or their composition and summarizes each system in a profile card. Our evaluation of multimodal agents, vision-language-action models (VLAs), and world-action models (WAMs) shows that competence in a single view does not carry over to Mind2Act tasks. Even the strongest agent succeeds in 52.7% of Mind and 39.0% of Act episodes but in only 12.0% of Mind2Act episodes. The strongest agent retains task state but struggles with sustained contact, whereas end-to-end policies execute practiced motions but retain little task state. These findings point to composing reasoning and execution through environmental feedback as the main open problem.",
      "upvotes": 56,
      "github_stars": 53,
      "github_repo": "https://github.com/Mind2Act/Mind2Act_World",
      "project_page": "https://mind2act-world.com/",
      "comments": 4,
      "org": "Mind2Act-World",
      "url": "https://huggingface.co/papers/2611.26444",
      "arxiv_url": "https://arxiv.org/abs/2611.26444",
      "title_ja": "Mind2Act World: ロボット操作における知能、物理的行動、およびそれらの合成に関する診断ベンチマーク",
      "summary_ja": "失敗の原因が「推論」「実行」「その連携」のどこにあるかを特定できる、5分野30タスクの評価システムを構築。"
    },
    {
      "id": "2611.21373",
      "title": "WeVisForensics: Self-Evolving Agent for Omni AI-Generated Video Detection",
      "abstract": "Recent advances in video generation call for reliable detection grounded in explicit forensic evidence. However, current methods primarily depend on single-pass chain-of-thought reasoning that overlooks brief or localized artifacts, or on predefined multi-agent workflows that offer limited flexibility in selecting relevant inspections. Even with adaptive investigation, optimizing the investigation policy alone does not directly improve the forensic capabilities of fixed experts. We introduce WeVisForensics, an agentic framework in which a main investigator agent coordinates a self-evolving library of forensic inspector sub-agents spanning visual and audio cues. The investigator learns which artifact type to examine, over which window, and when to conclude, and these interactions provide shared feedback for both levels of agents. Our dual-timescale policy optimization strategy, DTPO, closes this loop through fast reinforcement learning of the investigator and slower refinement of the inspectors, guided by annotated artifact intervals, to report subtle artifacts they once dismissed. Furthermore, we curate ForenCue-30K, combining role-specific forensic annotations and interaction trajectories to supervise individual inspections and their coordination, with an accompanying reinforcement-learning pool. Experiments show that WeVisForensics averages 95.2% detection accuracy across in-domain, out-of-domain and agentic benchmarks, 9.0% above the strongest prior detector, while grounding its verdicts in localized evidence.",
      "upvotes": 56,
      "github_stars": 67,
      "github_repo": "https://github.com/Tencent/WeVisForensics",
      "project_page": "https://tencent.github.io/WeVisForensics",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.21373",
      "arxiv_url": "https://arxiv.org/abs/2611.21373",
      "title_ja": "WeVisForensics: 万能AI生成動画検出のための自己進化型エージェント",
      "summary_ja": "視覚・音声の専門エージェント群を統括する調査官エージェントが、証拠に基づき自己進化しながら偽動画を高精度に検知する。"
    },
    {
      "id": "2611.30662",
      "title": "WeMM-Ecom: Advancing Multimodal Content Understanding for WeChat E-Commerce",
      "abstract": "We present WeMM-Ecom, a family of multimodal large language models that deliver frontier e-commerce capabilities while achieving state-of-the-art general-purpose performance at their respective scales. The family spans five sizes, from a 0.8B dense model to a 35B mixture-of-experts model with 3B active parameters. Our training pipeline begins with two-stage continued pre-training that progressively raises the proportion of e-commerce data within a diverse multimodal data mixture, followed by hybrid-thinking post-training that combines on-policy distillation and reinforcement learning to support both non-thinking and thinking modes. For evaluation, we construct a comprehensive suite of 28 e-commerce benchmarks (23 in-house and five open-source) covering eight business scenarios and complement it with 64 public general-purpose benchmarks. On the e-commerce suite, WeMM-Ecom-35B-A3B surpasses substantially larger open-source flagship models, including Qwen3.8-Flash-Next, HY4, and DeepSeek-V4.1-Flash. On the general-purpose suite, every WeMM-Ecom model surpasses its similarly sized Qwen3.5 counterpart, with the lightweight variants (e.g., WeMM-Ecom-2B) showing clear advantages over leading lightweight models such as Qwen3.5-2B, MiniCPM-V-4.7-1B, and LFM3-VL-2B. Beyond benchmarks, WeMM-Ecom now powers hundreds of production use cases in WeChat, including catalog management, multimodal product search, and livestream commerce, serving billion-scale requests per day. We publicly release all model weights and detail our data curation, training recipe, and benchmark construction to facilitate future work on domain-specialized multimodal models. We have released the model weights and code to facilitate future research at https://github.com/Tencent/WeMM-Ecom.",
      "upvotes": 55,
      "github_stars": 66,
      "github_repo": "https://github.com/Tencent/WeMM-Ecom",
      "project_page": "https://huggingface.co/collections/tencent/wemm-ecom",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.30662",
      "arxiv_url": "https://arxiv.org/abs/2611.30662",
      "title_ja": "WeMM-Ecom: WeChat Eコマースのためのマルチモーダルコンテンツ理解の推進",
      "summary_ja": "EC特化のデータと「思考モード」を導入した学習により、ECタスクと汎用能力の両方で高い性能を発揮するモデル群。"
    },
    {
      "id": "2611.26409",
      "title": "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding",
      "abstract": "Video understanding, particularly with accompanying audio, remains a central challenge in multimodal intelligence. In this report, we introduce WeMM-Video, a family of Chinese-English bilingual omni-modal foundation models spanning 2B, 4B, 9B, and 35B-A3B variants. Centering on joint audio-visual perception and reasoning, WeMM-Video unifies text, image, audio, and video processing within a hybrid-thinking paradigm, seamlessly supporting both a non-thinking instruct mode for fast, direct responses and a thinking mode for explicit step-by-step reasoning. The models are trained on a large-scale multimodal corpus of approximately 1.2 trillion tokens through progressive pre-training and a multi-stage post-training pipeline incorporating multi-teacher OPD, anti-repetition MrDPO, and specialist RL. Evaluated across more than 120 benchmarks, WeMM-Video demonstrates superior performance in omni-modal video understanding and reasoning, while maintaining highly competitive capabilities across general audio, silent video, image, and text tasks. Specifically, in omni-modal video evaluations, our flagship WeMM-Video-35B-A3B establishes a new open-source state of the art, substantially outperforming proprietary models such as Qwen3.5-Omni-Flash and Seed2.0-Mini-0428 while narrowing the gap with the strong Gemini-3.0-Flash, and our compact WeMM-Video-9B surpasses the larger open-source Qwen3-Omni-30B-A3B-Instruct. We publicly release the WeMM-Video family along with our evaluation and reproduction pipeline to foster further research and development in the open-source community.",
      "upvotes": 49,
      "github_stars": 171,
      "github_repo": "https://github.com/Tencent/WeMM-Video",
      "project_page": "https://tencent.github.io/WeMM-Video/",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.26409",
      "arxiv_url": "https://arxiv.org/abs/2611.26409",
      "title_ja": "WeMM-Video: オープンソースの全方位動画理解の最前線へ",
      "summary_ja": "画像・音声・動画を統合し、即答するモードと段階的に思考するモードを使い分ける、日英対応の強力な動画理解モデル群。"
    },
    {
      "id": "2611.30962",
      "title": "Self-Evolving Evaluation Environments for Computer-Use Agents",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet their evaluation remains largely static. Existing benchmarks provide a strong foundation, but fixed difficulty ceilings, limited feature coverage, and coarse aggregate scores progressively weaken their discriminative and diagnostic value. We introduce CUA-SEE, a closed-loop evaluation environment that co-evolves tasks and executable verifiers from rollout evidence. It disentangles three objectives: benchmark evolution expands evaluation scope through cohort-calibrated difficulty and coverage growth; diagnostic evolution increases resolution through agent-conditional capability-boundary probes; and verifier evolution improves precision by translating changing requirements into state-grounded checkpoints with adversarial validation. Across multiple agents, applications, and rounds, CUA-SEE generates challenging, measurable tasks while preserving process-level evidence. Our results position adaptive evaluation as a scalable counterpart to self-evolving agents, continuously tracking what agents can do, where their boundaries lie, and how reliably progress is measured.",
      "upvotes": 48,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2611.30962",
      "arxiv_url": "https://arxiv.org/abs/2611.30962",
      "title_ja": "PC操作エージェントのための自己進化型評価環境",
      "summary_ja": "エージェントの成長に合わせて、評価タスクの難易度や検証コードを自動で進化させ、常に適切な評価指標を提供し続けるシステム。"
    },
    {
      "id": "2611.26629",
      "title": "Posterior Matching Distillation",
      "abstract": "Diffusion distillation accelerates image and video generation by compressing a pretrained teacher's iterative sampling process into a few network evaluations. Distribution-based methods achieve this by matching the student's output distribution to the teacher's. This matching is often driven by reverse-KL objectives, whose mode-seeking bias favors dominant teacher modes at the expense of diversity across samples. We introduce Posterior Matching Distillation (PMD), a new member of the distribution-based distillation family that combines mode-covering posterior sampling with any-step generation. At zero population loss, PMD recovers the teacher's full posterior of clean images at each trained noise level. Its stochastic student supports any-step sampling budgets within the trained timestep grid without further training. To learn these posteriors, PMD matches exponentially reweighted averages of student samples conditioned on a fixed noisy state to corresponding teacher posterior means. Under Gaussian corruption, exponentially tilted posterior mean is a single teacher evaluation at a shifted input. We prove that, matching tilted means over an open neighborhood uniquely identifies the full posterior. PMD thus supervises the entire conditional distribution through a family of mean constraints, without any auxiliary student-score network. Experiments on SDXL and FLUX.2 [klein] 4B demonstrate that PMD achieves the best FID among 4-step methods on both models, while maintaining competitive or leading performance across prompt-alignment and perceptual-quality metrics.",
      "upvotes": 47,
      "github_stars": 19,
      "github_repo": "https://github.com/yesiltepe-hidir/PMD",
      "project_page": "https://pmd-distillation.github.io/",
      "comments": 4,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.26629",
      "arxiv_url": "https://arxiv.org/abs/2611.26629",
      "title_ja": "事後確率マッチング蒸留 (PMD)",
      "summary_ja": "拡散モデルの高速化において、教師モデルの多様性を損なわずに、少ない評価回数で高品質な画像を生成できる蒸留手法。"
    },
    {
      "id": "2611.24636",
      "title": "Clover-35B-A3B-Preview Technical Report",
      "abstract": "We introduce Clover-35B-A3B-Preview (Clover), a mixture-of-experts diffusion language model with 35 billion total parameters and 3 billion activated parameters, supporting thinking-mode generation. Clover adapts Gated Delta Networks to block diffusion by combining recurrent memory of previously generated context with bidirectional softmax attention inside the current block. Historical memory readout competes with current-block tokens in a shared softmax, with learnable block-size calibration and a separate, zero-initialized right-context convolution branch. Clover leads the seven evaluated agent metrics, including 73.6 on SWE-bench Verified and 51.7 on Terminal-Bench 2.1. On internal agent workloads, it reaches a reported generation speed of 680 tokens/s using one NVIDIA GB300 GPU at BF16 precision and batch size one. We organize the evaluation around model quality, drafting and verification costs, and deployment under constrained memory. We also describe a decision-model variant that generates answers to related questions in one denoising pass. On an internal set of 500 groups, joint prediction raises question accuracy from 90.37% to 93.88% and all-correct group accuracy from 65.4% to 77.0%.",
      "upvotes": 45,
      "github_stars": 164,
      "github_repo": "https://github.com/DiffuSpace/Clover-35B-A3B-Preview",
      "project_page": "https://diffuspace.ai/blog/clover-35b/",
      "comments": 4,
      "org": "Diffuspace",
      "url": "https://huggingface.co/papers/2611.24636",
      "arxiv_url": "https://arxiv.org/abs/2611.24636",
      "title_ja": "Clover-35B-A3B-Preview 技術報告",
      "summary_ja": "拡散言語モデルと再帰的メモリを組み合わせ、思考プロセスを伴う生成でSWE-bench等のエージェント評価において最高性能を達成。"
    },
    {
      "id": "2611.30254",
      "title": "Innata-0: A Native Embodied World System with Model-Agent Co-Design",
      "abstract": "The physical world is open-ended, dynamic, and partially observable. While foundation models have advanced embodied intelligence, standalone models struggle with long-horizon execution, and simply integrating models with agents may lead to inconsistencies between planning and physical control. To support reliable and adaptive behaviors in the physical world, we introduce Innata-0, a native embodied world system. Innata-0 jointly designs an embodied world-action model and an agent to combine their complementary strengths. The model, Innata-0-WAM, adopts a tri-tower Mixture-of-Transformers architecture that integrates understanding, prediction, and action generation. The agent, Innata-0-Agent, coordinates long-horizon execution through memory, verification, and recovery. A co-design protocol is further proposed to align model training with agent execution and leverage validated experiences to support subsequent adaptation and model improvement. Extensive evaluations demonstrate strong embodied capabilities across understanding, world prediction, and robotic manipulation. Innata-0 represents our first step toward physical intelligence, and we see it as the beginning of a much longer journey.",
      "upvotes": 44,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://baai-eai.github.io/innata-0/",
      "comments": 3,
      "org": "Beijing Academy of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2611.30254",
      "arxiv_url": "https://arxiv.org/abs/2611.30254",
      "title_ja": "Innata-0: モデルとエージェントの共同設計によるネイティブ身体化ワールドシステム",
      "summary_ja": "理解・予測・行動を統合した3タワー構造モデルと、その特性に最適化されたエージェントにより、物理世界での適応性を向上。"
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
      "title_ja": "ラベルなし動画からのオンポリシー自己蒸留による動画先読み推論の学習",
      "summary_ja": "注釈なしの動画ペアから重要な未来予測スコアを算出し、外部モデルに頼らずに視覚的な先読み能力を高める自己学習枠組み。"
    },
    {
      "id": "2611.26595",
      "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
      "abstract": "Code2Video uses agent-authored 3D proxies to guide video generation, enabling explicit control over structure and dynamics. However, how to construct proxies and prompts for optimal downstream quality remains underexplored, as do the capabilities and limitations of this paradigm. Through controlled experiments and blinded human evaluation, we study proxy granularity, physics simulation, and prompting. The results reveal task-dependent trade-offs: coarse proxies favor natural motion, while medium-grained proxies favor consistency. Physics simulation and proxy-aligned prompting further improve average quality. Guided by these findings, we introduce Coda-DaVinci, a task-adaptive agentic framework for Code2Video generation that selects between proxy-guided and direct generation, adapts modeling granularity to each entity, and coordinates simulation with proxy-grounded prompting. Its multi-agent harness preserves scene assets and guides repairs through visual inspection and independent review. Experiments demonstrate leading instruction following on VTR and scene consistency on R2M, improved physical plausibility over direct generation, and higher visual realism than the compared Code2Video baselines. Long-video evaluations further show gains in event structure and consistency across successive interactions, while revealing limitations in transition stability and adherence to scene settings.",
      "upvotes": 42,
      "github_stars": 46,
      "github_repo": "https://github.com/FrankYang-17/Coda",
      "project_page": "https://coda-davinci.github.io/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.26595",
      "arxiv_url": "https://arxiv.org/abs/2611.26595",
      "title_ja": "Coda-DaVinci: Code2Videoによる動画生成の再考",
      "summary_ja": "3Dプロキシをガイドとして、エージェントがコード経由で動画の物理挙動や構造を精密に制御できるタスク適応型システム。"
    },
    {
      "id": "2611.28649",
      "title": "S-Mind: Internalizing Multi-View Geometry for Spatial Intelligence",
      "abstract": "Spatial intelligence, the ability to reason about 3D space from visual observations, becomes essential as multimodal large language models (MLLMs) move into the physical world. Beyond perceiving each view, it rests on two cornerstones of human cognition: fusing multiple views into one coherent 3D scene and mentally transforming that scene to new viewpoints as reasoning unfolds. Yet our spatial probes reveal that MLLMs largely lack both capabilities, even after spatial fine-tuning. We therefore present S-Mind, which internalizes multi-view geometry within the MLLM through a compact set of spatial tokens. It supervises these tokens to hold the fused 3D scene and re-emits them to re-express this scene from every viewpoint the reasoning adopts. Across four spatial benchmarks, S-Mind improves its Qwen3.5 backbones by up to 22.26 points and surpasses frontier general models such as GPT-6-Astra (+0.45), Kimi-K3.1-Pro (+1.97), and GLM-5.3-Flash (+7.80) in average accuracy. Moreover, the same probes confirm that it acquires both capabilities, reaching fusion and transformation accuracies of 65.11% and 82.17%, against at most 16.02% and 37.28% for the baselines. At inference, S-Mind also runs about 100x faster than a tool-based agent on the same backbone. Instilled through these spatial tokens during training, spatial capability becomes intrinsic to the backbone and persists even when the tokens are withheld, offering a promising path toward spatial intelligence in MLLMs.",
      "upvotes": 41,
      "github_stars": 13,
      "github_repo": "https://github.com/KANABOON1/S-Mind",
      "project_page": "https://kanaboon1.github.io/S-Mind/",
      "comments": 3,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.28649",
      "arxiv_url": "https://arxiv.org/abs/2611.28649",
      "title_ja": "S-Mind: 空間知能のための多視点幾何学の内面化",
      "summary_ja": "複数の視点を統合し3Dシーンとして思考・変換できるよう、モデル内部に専用の空間トークンを組み込み、空間推論能力を向上。"
    },
    {
      "id": "2611.26389",
      "title": "ViDecide: Teaching Video Diffusion Models to Reason and Plan Step by Step",
      "abstract": "Current leading video generation models can synthesize highly realistic videos, while still frequently violating physical and logical constraints in multi-step reasoning and planning, even after training with large-scale reasoning data or existing diffusion RL methods. We attribute these failures to the conventional video training paradigm, which treats a solution as a fixed-length clip rather than a chain of decisions. We present ViDecide, a decision-centric framework that trains video diffusion models to predict state transitions causally and decide when to stop, with a decision-focused training schedule. We further propose Corrective Fine-tuning (CFT), which corrects failed decisions by mapping their noise to the model's own successful continuations, achieving stable improvement without policy-gradient optimization. Across abstract games, planning tasks, and a new benchmark of multi-step robot planning, ViDecide achieves an average strict success rate of 83.8%, far above 23.3% for standard fine-tuning and 67.8% for the strongest prior method, and generalizes to larger puzzles and unseen layouts. Our framework therefore unlocks greater potential for video generation models as reliable reasoners and planners in the visual world. Project page: https://kevin-thu.github.io/ViDecide.",
      "upvotes": 41,
      "github_stars": 13,
      "github_repo": "https://github.com/Kevin-thu/ViDecide",
      "project_page": "https://kevin-thu.github.io/ViDecide/",
      "comments": 3,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.26389",
      "arxiv_url": "https://arxiv.org/abs/2611.26389",
      "title_ja": "ViDecide: 動画拡散モデルに段階的な推論と計画を教える",
      "summary_ja": "動画生成を「決定の連鎖」と捉え、状態遷移の予測と停止判断を学習させることで、物理的・論理的な矛盾を劇的に減らす手法。"
    },
    {
      "id": "2611.26603",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "abstract": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming prior work in all of these dimensions. We release a family of models that define a new Pareto frontier in terms of metric accuracy, sharpness, temporal consistency, and runtime. We release code and weights at https://apple-aiml-research.github.io/ml-depth-pro-2/",
      "upvotes": 40,
      "github_stars": 742,
      "github_repo": "https://github.com/apple-aiml-research/ml-depth-pro-2",
      "project_page": "https://apple-aiml-research.github.io/ml-depth-pro-2/",
      "comments": 3,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2611.26603",
      "arxiv_url": "https://arxiv.org/abs/2611.26603",
      "title_ja": "Depth Pro 2: 鮮明で時間的一貫性のある単眼深度推定",
      "summary_ja": "静止画と動画の両方を処理可能な単一ネットワークにより、境界の鮮明さと時間的な滑らかさを両立した絶対深度推定を実現。"
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
      "title_ja": "「意識」を持つ心の探査：VLMにおける選択的アクセスとグローバルワークスペース",
      "summary_ja": "MC-Lensを用いてVLM内部の中間状態を解析し、視覚と情報の概念がどのように統合・選択されるかを可視化する研究。"
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
      "title_ja": "マスクは物体ではない：3Dガウシアンセグメンテーションのための体積監視",
      "summary_ja": "従来の描画ベースの学習では不完全だった隠れた部位のセグメンテーションを、深度構造を用いた新手法で立体的に改善。"
    },
    {
      "id": "2611.28202",
      "title": "AutoPILOT: A Visual Agent Harness for Real-Time Gameplay",
      "abstract": "Multimodal foundation models can play video games well when the game waits for them, but often fail when it keeps running. We find that much of this gap lies in the harness, which decides what the model sees, what it remembers, and how its outputs become actions over time. Existing harnesses such as VISTA improve the first two, yet turn each model call into at most one action, so the agent acts only as often as its model thinks. We introduce AutoPILOT, which changes the third: in each model call, the model can send a primitive action, start an open-loop macro, or write a closed-loop controller that keeps playing from the screen without further model calls until it hands control back. To evaluate agents in real-time games, we build AFK-Bench, 120 diverse browser games grouped by how they respond to inaction and playable in real time or with the clock paused. With GPT-6.1 Sol under the same budgets, AutoPILOT reaches 68.6% real-time success against 38.3% for VISTA, and on GameWorld it keeps 80.0% in real time while VISTA drops from 84.1% to 42.9%. Its gains hold across models, and it reaches VISTA's final success rate at a fifth of its API cost. Our results suggest that how a harness turns model outputs into actions over time is a central yet underexplored part of agent design, and we hope AutoPILOT and AFK-Bench will serve as a foundation for agents in a world that does not wait.",
      "upvotes": 34,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://autopilot-harness.github.io/",
      "comments": 3,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2611.28202",
      "arxiv_url": "https://arxiv.org/abs/2611.28202",
      "title_ja": "AutoPILOT: リアルタイムゲームプレイのための視覚エージェントハーネス",
      "summary_ja": "推論中の遅延を埋めるため、モデルが動的な「制御コード」を生成し、推論の合間も自律的に操作を継続できる枠組み。"
    },
    {
      "id": "2611.32554",
      "title": "PartAgent: Agentic 3D Part Segmentation via Expert Integration and Closed-Loop Refinement",
      "abstract": "Segmenting a 3D object into semantically meaningful parts requires joint reasoning about geometric structure and semantic context. Pretrained 3D experts provide spatially grounded region proposals, while 2D experts provide semantic cues for identifying object parts. The challenge is to integrate these complementary capabilities into a framework that can both produce meaningful part segmentations and progressively refine them. We present PartAgent, a training-free agentic framework for 3D part segmentation built upon two complementary modules: (i) Structural-Semantic Expert Integration combines regions predicted by the 3D expert with multiview semantic evidence from the 2D expert through image-to-surface correspondences, constructing compositional part partitions at multiple granularities. (ii) Observation-Driven Closed-Loop Partition Refinement observes the current partition and its supporting evidence to select targeted inspection, evidence repair, composition, or reselection actions. It verifies proposed changes and uses the updated state and action outcomes to guide subsequent decisions. On PartObjaverse-Tiny-WT, PartAgent achieves 68.41 mIoU, outperforming the strongest competing method by 8.53 points. Across 3DCoMPaT200, PartNeXt, PartNetE, and PartObjaverse-Tiny, PartAgent achieves the highest mIoU on each dataset, averaging 69.36 across the four datasets, 7.28 points above the highest mean among competing methods.",
      "upvotes": 33,
      "github_stars": 30,
      "github_repo": "https://github.com/yangcaoai/PartAgent_Agent_for_3D_Part_Seg",
      "project_page": "https://yangcaoai.github.io/PartAgent_ProjectPage/",
      "comments": 3,
      "org": "The Hong Kong University of Science and Technology",
      "url": "https://huggingface.co/papers/2611.32554",
      "arxiv_url": "https://arxiv.org/abs/2611.32554",
      "title_ja": "PartAgent: エキスパート統合と閉ループ洗練によるエージェント型3Dパーツセグメンテーション",
      "summary_ja": "3D幾何学と2D意味情報の専門知識を統合し、対話的な修正ループを通じて物体の意味のある部位分割を自動生成する手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "KET-RAG Audit Finds 84% of AI Errors Happen After Retrieval",
      "summary": "Retrieval nails the facts, but reasoning fumbles them. Two cheap inference-time tricks let an 8B model beat an unaugmented 70B at 12x lower cost. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/paper/ket-rag-audit-finds-84-of-ai-errors-happen-after-retrieval?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T12:15:34+09:00",
      "title_ja": "KET-RAG監査：AIエラーの84%は検索後に発生",
      "summary_ja": "AIの誤りの大半は検索後推論で発生。低コストな推論手法により8Bモデルで70B超えの精度を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Ant Group's LingSante-3.1-flash Tops Open Medical AI With 560B Parameters",
      "summary": "Ant Group's inclusionAI drops a 560B-parameter open-weight medical mixture-of-experts model with a one-million-token context under MIT license. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/model/ant-group-s-lingsante-3-1-flash-tops-open-medical-ai-with-560b-parameters?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T11:15:00+09:00",
      "title_ja": "Ant GroupのLingSante-3.1-flashが560Bパラメータで医療AI首位に",
      "summary_ja": "100万トークンの文脈に対応する560Bのオープン医療用MoEモデルがMITライセンスで登場。"
    },
    {
      "lab": "AlphaSignal",
      "title": "University of Catania Beats Gemini 1.5 Pro at Predicting Your Next Touch",
      "summary": "A new pipeline combines gaze trajectories, Set-of-Mark prompting, and biased frame sampling to predict the next object a person will touch in first-person video. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/paper/university-of-catania-beats-gemini-1-5-pro-at-predicting-your-next-touch?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T10:14:04+09:00",
      "title_ja": "カターニア大学、次なる接触予測でGemini 1.5 Proを凌駕",
      "summary_ja": "視線追跡とSoMプロンプトを組み合わせ、一人称視点映像から次に触れる物体を正確に予測する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Sand AI's MAGI-2 Tops Video Leaderboard at One-Seventh ByteDance's Price",
      "summary": "Sand AI's 480B parameter MoE video model ties Dreamina Seedance 2.5 at the top of the image-to-video leaderboard for a seventh of the price. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/sand-ai-s-magi-2-tops-video-leaderboard-at-one-seventh-bytedance-s-price?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T10:13:12+09:00",
      "title_ja": "Sand AIのMAGI-2、ByteDanceの7分の1の価格で動画リーダーボード首位",
      "summary_ja": "480BのMoE動画モデルが、圧倒的低コストで画像から動画への生成リーダーボード首位タイを達成。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Aratako's Drama-3-Japanese Brings Expressive Stage Directions to Open-Weight Speech",
      "summary": "A 36B-parameter Japanese fine-tune of Fish Audio Drama 3 brings tagged emotional control, voice cloning, and caption-based voice design to open weights. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/model/aratako-s-drama-3-japanese-brings-expressive-stage-directions-to-open-weight?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T09:13:47+09:00",
      "title_ja": "AratakoのDrama-3-Japaneseが表情豊かな舞台指示をオープン音声モデルに導入",
      "summary_ja": "感情制御やクローニングが可能な36Bの日本語音声モデルがオープンウェイトで公開。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenCode Lets Developers Generate MP4 Videos Inside Coding Agent Sessions",
      "summary": "The open source coding agent adds an experimental video generation tool, letting you call Grok Imagine and Gemini Omni directly from your coding workflow. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/opencode-lets-developers-generate-mp4-videos-inside-coding-agent-sessions?utm_source=rss&utm_medium=feed",
      "published": "2026-11-26T08:46:40+09:00",
      "title_ja": "OpenCode、コーディングエージェント内でのMP4動画生成を可能に",
      "summary_ja": "コーディング作業中、GrokやGeminiを呼び出し、エージェント上で直接動画生成が可能。"
    },
    {
      "lab": "Hugging Face",
      "title": "Where scientists draw the line on AI agents",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents",
      "published": "2026-11-26T03:52:55+09:00",
      "title_ja": "科学者がAIエージェントに対して引く一線",
      "summary_ja": "科学研究におけるAIエージェントの利用において、科学者が許容する限界点について考察。"
    },
    {
      "lab": "Google Research",
      "title": "Verifiable Social Reasoning for LLM Assistants",
      "summary": "Generative AI",
      "url": "https://research.google/blog/verifiable-social-reasoning-for-llm-assistants/",
      "published": "2026-11-26T02:10:27+09:00",
      "title_ja": "LLMアシスタントのための検証可能な社会的推論",
      "summary_ja": "生成AIを用いた、検証可能性を備えた高度な社会的推論機能の実装についての研究。"
    },
    {
      "lab": "Hugging Face",
      "title": "An Indic Voice Agent with CUGA",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga",
      "published": "2026-11-25T19:22:09+09:00",
      "title_ja": "CUGAを用いたインド系言語音声エージェント",
      "summary_ja": "CUGAを活用し、インド系諸言語に対応した音声エージェントの開発。"
    },
    {
      "lab": "Hugging Face",
      "title": "Hill-climbing Inkling 2 Mini inference on one RTX PRO 6000",
      "summary": "",
      "url": "https://huggingface.co/blog/inkling-2-mini-inference-hillclimb",
      "published": "2026-11-25T09:00:00+09:00",
      "title_ja": "1台のRTX PRO 6000でInkling 2 Miniの推論を最大化",
      "summary_ja": "シングルGPU環境においてInkling 2 Miniモデルの推論性能を最適化する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Microduck Obstacle Avoidance: A Sim2Real Workflow with Isaac Lab and Newton",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/microduck-obstacle-avoidance",
      "published": "2026-11-25T01:34:13+09:00",
      "title_ja": "Microduckの障害物回避：Isaac LabとNewtonを用いたSim2Realワークフロー",
      "summary_ja": "シミュレーションでの学習を実機に適用し、ロボットの障害物回避を実現するワークフロー。"
    },
    {
      "lab": "Google DeepMind",
      "title": "From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity",
      "summary": "Mass Spec Skills empowers scientists using Google Antigravity to interpret tandem mass spectra.",
      "url": "https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/",
      "published": "2026-11-24T22:07:53+09:00",
      "title_ja": "スペクトルから構造へ：Google Antigravityのための質量分析スキルによる分子特定",
      "summary_ja": "Google Antigravityを用いる科学者が、タンデム質量スペクトルを解析し分子を特定可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT-6 models demonstrate intrinsic protein-design capabilities",
      "summary": "GPT-6 models design protein structures and sequences using reasoning and code. Lab tests found evidence of binding across five targets.",
      "url": "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities",
      "published": "2026-11-24T22:00:00+09:00",
      "title_ja": "GPT-6モデルがタンパク質設計における固有の能力を実証",
      "summary_ja": "推論とコードを用いタンパク質構造を設計。実験で5つの標的に対する結合能力が確認された。"
    },
    {
      "lab": "OpenAI",
      "title": "Searching for distant planets with Astra",
      "summary": "See how two amateur astronomers used Codex and Astra to find potential exoplanets in public data from NASA’s Kepler and TESS space telescopes.",
      "url": "https://openai.com/index/searching-for-distant-planets-with-astra",
      "published": "2026-11-24T20:00:00+09:00",
      "title_ja": "Astraを用いた遠方の惑星探査",
      "summary_ja": "アマチュア天文家がCodexとAstraを使い、NASAの公開データから系外惑星候補を発見。"
    },
    {
      "lab": "OpenAI",
      "title": "How Intentful uses dots to make more time for growth",
      "summary": "Marina Petrova’s dot Aria helps research websites and build proposals, while proactively flagging messages and resolving issues.",
      "url": "https://openai.com/business/customer-stories/intentful-dots",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "Intentfulがいかにdotを活用して成長時間を創出しているか",
      "summary_ja": "AIのAriaがウェブ調査や提案書作成、メッセージの優先順位付けを自律的に行い業務を効率化。"
    },
    {
      "lab": "OpenAI",
      "title": "How iFood scales coding agents across 15,000 repositories",
      "summary": "",
      "url": "https://openai.com/business/customer-stories/ifood",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "iFoodが15,000のレポジトリでコーディングエージェントを拡張する方法",
      "summary_ja": "膨大な数のコードレポジトリ全域でAIコーディングエージェントを大規模運用する手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Clay helps sales teams win with Codex and ChatGPT",
      "summary": "ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 models handling the reasoning.",
      "url": "https://openai.com/business/customer-stories/clay-plugins-openai",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "ClayがCodexとChatGPTを活用して営業チームの勝利を支援",
      "summary_ja": "GPT-6の推論能力等を活用し、案件調査やデータに基づいた市場開拓戦略を自動生成。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and Cisco introduce Shirudo",
      "summary": "OpenAI and Cisco introduce Shirudo, an open-source runtime for Linux. It helps teams protect running systems while they roll out patches.",
      "url": "https://openai.com/index/introducing-shirudo",
      "published": "2026-11-24T06:20:00+09:00",
      "title_ja": "OpenAIとCiscoがShirudoを公開",
      "summary_ja": "パッチ適用中のLinuxシステムを保護するオープンソースのランタイムを共同開発。"
    },
    {
      "lab": "Google Research",
      "title": "Supercharging transformer residual connections",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/supercharging-transformer-residual-connections/",
      "published": "2026-11-24T02:21:12+09:00",
      "title_ja": "Transformerの残差接続の高速化",
      "summary_ja": "Transformerモデルの基本構造である残差接続を強化するアルゴリズムと理論の提案。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Finding faster quantum algorithms with agents and formal verification",
      "summary": "Using agent teams and formal verification to improve quantum algorithms for fusion and chemistry.",
      "url": "https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/",
      "published": "2026-11-24T01:59:40+09:00",
      "title_ja": "エージェントと形式検証による高速な量子アルゴリズムの発見",
      "summary_ja": "エージェントチームと形式検証を使い、核融合や化学分野向けの量子アルゴリズムを改善。"
    },
    {
      "lab": "Hugging Face",
      "title": "How to build and maintain an agentic evaluation",
      "summary": "",
      "url": "https://huggingface.co/blog/agentic-evals",
      "published": "2026-11-23T09:00:00+09:00",
      "title_ja": "エージェント評価基盤の構築と維持方法",
      "summary_ja": "AIエージェントの性能を適切に測定し、継続的に評価するためのシステム構築のガイド。"
    },
    {
      "lab": "Google Research",
      "title": "How Google Duplex evolved to also call businesses for you in Gemini",
      "summary": "Generative AI",
      "url": "https://research.google/blog/how-google-duplex-evolved-to-also-call-businesses-for-you-in-gemini/",
      "published": "2026-11-21T08:30:30+09:00",
      "title_ja": "Google DuplexがGemini内でビジネス電話を代行するまでの進化",
      "summary_ja": "Google DuplexがGeminiに統合され、ユーザーの代わりに店舗へ電話をかける機能への進化。"
    },
    {
      "lab": "Apple ML",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "summary": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming…",
      "url": "https://machinelearning.apple.com/research/depth-pro-2-monocular",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Depth Pro 2：鮮明で時間的一貫性のある単眼深度推定",
      "summary_ja": "画像と動画から、境界が鮮明かつ時間的なブレがない高精度な絶対深度をリアルタイム推定。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup",
      "summary": "",
      "url": "https://huggingface.co/blog/inkling2mini",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Inkling 2 Miniが登場：ローカル環境で最先端のパフォーマンスを実現",
      "summary_ja": "ローカルのセットアップ環境で動作する、高性能な最新の小型AIモデルのリリース。"
    },
    {
      "lab": "Google Research",
      "title": "A game you cannot win unless you have a quantum computer",
      "summary": "Quantum",
      "url": "https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/",
      "published": "2026-11-20T05:03:00+09:00",
      "title_ja": "量子コンピュータなしでは勝てないゲーム",
      "summary_ja": "量子計算の優位性を示す、量子コンピュータ特有の能力が必要となるゲームの紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの紹介",
      "summary_ja": "Googleの次世代AIモデル、Gemini 4 Neonの発表。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4が利用可能に",
      "summary_ja": "最新のAIモデルGenie 4の一般提供開始に関する発表。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・スケール型潜在3D表現",
      "summary_ja": "計算負荷を抑えつつ潜在空間の容量を拡張し、複雑な3D形状の細部まで正確にモデル化する手法。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の進歩",
      "summary_ja": "教育革新の一環として、Antigravityの共同作業機能を活用した科学工学分野の支援。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの紹介",
      "summary_ja": "GoogleのAIモデルシリーズに新たに加わったGemini 4 Hydrogenの発表。"
    }
  ]
};
