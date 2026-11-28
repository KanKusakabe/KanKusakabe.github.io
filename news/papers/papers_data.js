window.papersData = {
  "updated_at": "2026-11-28 12:46 JST",
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
      "id": "2611.33527",
      "title": "Casper: A Projection-Based Neurosymbolic Layer for Scalable & Guaranteed Constraint Satisfaction",
      "url": "https://arxiv.org/abs/2611.33527",
      "pdf": "https://arxiv.org/pdf/2611.33527",
      "authors": [
        "Lohith Konathala",
        "Luca Andolfi",
        "Eleonora Giunchiglia"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "Casper casts constraint satisfaction as a closed-form Euclidean projection onto the constraint-feasible region, computable in a single forward pass.",
      "signals": [
        "Oral等"
      ],
      "headline": "ユークリッド射影により制約の100%遵守を保証する神経記号論的レイヤーCasper",
      "what": "制約充足を制約可能領域への閉形式のユークリッド射影として定式化した、微分可能かつ自動化された神経記号論的レイヤーです。推論時に1回のフォワードパスで計算可能であり、既存のあらゆるニューラル予測器と組み合わせることができます。",
      "enables": "Warcraftの経路探索（30x30グリッド）において、既存手法がタイムアウトや低い有効率（7%未満）に留まる中、100%の有効なパス生成を大規模に実現しました。",
      "why_it_matters": "制約の厳密な遵守が求められる実世界のタスクに対し、近似ではなく保証を伴う解を、推論速度を犠牲にせずに提供します。",
      "tags": [
        "神経記号論",
        "制約充足",
        "微分可能最適化"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
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
      "id": "2611.33259",
      "title": "Fast and Scalable Abstract Interpretation for Deep Neural Networks",
      "url": "https://arxiv.org/abs/2611.33259",
      "pdf": "https://arxiv.org/pdf/2611.33259",
      "authors": [
        "Avaljot Singh",
        "Dushyant Bharadwaj",
        "Yasmin Chandini Sarita",
        "Heng Zhong",
        "Charith Mendis",
        "Gagandeep Singh"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "Scepter handles networks with up to 153x as many neurons as the largest completed by the corresponding baselines.",
      "signals": [],
      "headline": "構造セマンティクスによる深層ニューラルネットワークの高速・スケーラブルな抽象解釈フレームワーク",
      "what": "中間抽象値の構造を決定し、数値評価を遅延させる構造セマンティクスを用いることで、抽象解釈器を特化させるScepterを提案しています。これにより、連続する操作の計算を統合し、実行可能なテンソルプログラムを生成します。",
      "enables": "既存手法と比較して、最大153倍の規模のニューロンを持つネットワークを処理でき、ResNet50やVGG-16でのDeepPoly解析を完遂しました。GPU上での幾何平均速度向上は11.9倍から44.4倍に達し、ピークメモリも平均2.6倍削減されます。",
      "why_it_matters": "これまで計算コストの高さから小規模モデルに限定されていた厳密な安全性・特性検証を、大規模な実用モデルに適用可能にします。",
      "tags": [
        "形式手法",
        "DNN検証",
        "抽象解釈"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34657",
      "title": "Counting Beyond Frames: Codec Motion Tells Frozen Diffusion VLMs How Many",
      "url": "https://arxiv.org/abs/2611.34657",
      "pdf": "https://arxiv.org/pdf/2611.34657",
      "authors": [
        "Zhuoqin Li",
        "Jiayu Ding",
        "Ge Li"
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
      "star_quote": "We are the first to show that this motion provides direct evidence for the count: a candidate count is a testable motion hypothesis",
      "signals": [],
      "headline": "ビデオコーデックの動き情報を活用しVLMの計数能力を劇的に向上させるCoDiCount",
      "what": "ビデオコーデックが記録しているブロック置換（動きベクトル）を直接的な証拠として利用し、計数タスクを解決する学習不要のフレームワークです。拡散ベースのVision-Language Model（dVLM）のデノイジング過程において、計数メッセージを用いて確率を再重み付けします。",
      "enables": "7Bのモデルでありながら、MotionBenchにおいてGPT-5.1やGemini-2.5-Proを凌駕し、TOMATOベンチマークでGPT-4oを上回る精度を達成しました。",
      "why_it_matters": "VLMが苦手とする「動的な事象の計数」に対し、追加学習なしで、既存の圧縮ビデオデータが持つ情報を活用する効率的なアプローチを提示しています。",
      "tags": [
        "VLM",
        "ビデオ理解",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
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
      "id": "2611.33236",
      "title": "KiRA: Kronecker Input-Gated Rank Adaptation for Parameter-Efficient Fine-Tuning of Pretrained Models",
      "url": "https://arxiv.org/abs/2611.33236",
      "pdf": "https://arxiv.org/pdf/2611.33236",
      "authors": [
        "Akil Ahmad Taki",
        "Shaikh Anowarul Fattah"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "the update $\\Delta W$ is the Kronecker product of a frozen random $p\\times p$ matrix $A$ and a trainable factor $M(x)$, which overcomes the rank ceiling",
      "signals": [],
      "headline": "Kronecker積を用いた低ランク制約を超越する高効率パラメータ微調整手法KiRA",
      "what": "学習済みモデルの微調整において、低ランク行列の積の代わりに、固定されたランダム行列と学習可能な因子のKronecker積を用いる手法です。入力ゲートg(x)により、入力サンプルごとに適応的なランク調整を動的に行います。",
      "enables": "LoRAと比較して学習パラメータ数を8.7〜9.7倍削減しながら、6つの医療画像・言語ベンチマークで最高スコアを達成しました。",
      "why_it_matters": "従来のPEFT手法における「低ランクの天井」を打破し、タスクごとに最適な表現能力を少ないパラメータで提供できるため、エッジデバイス等での効率的な展開に寄与します。",
      "tags": [
        "PEFT",
        "LoRA",
        "微調整"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.33716",
      "title": "Flipping the Coins: Training Physical Simulators through Hard Switches",
      "url": "https://arxiv.org/abs/2611.33716",
      "pdf": "https://arxiv.org/pdf/2611.33716",
      "authors": [
        "Tianrun Gao",
        "Ruiqi Feng",
        "Haomin Wen",
        "Tailin Wu",
        "Liangqiong Qu",
        "Xiaomeng Huang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages (13 main + appendix), 4 figures, 15 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "we introduce EventFlip, which flips a near-threshold switch from a stored state, replays the original solver, and measures the loss difference",
      "signals": [],
      "headline": "ハードスイッチを含む物理シミュレータの偏りのない勾配学習を実現するEventFlip",
      "what": "物理エンジンの不連続な挙動（ハードスイッチ）に対し、スイッチの切り替え前後での差分を測定し、連続的なパス勾配とジャンプ項を組み合わせた不偏勾配推定量を提供します。閾値に微小なガウスノイズを加え、確率的な二値決定としてモデル化します。",
      "enables": "電力網の連鎖解裂や爆轟波のシミュレーションにおいて、最強のベースラインと比較して誤差を1.4〜1.5倍削減し、すべてのタスクで最小エラーを記録しました。",
      "why_it_matters": "物理法則に基づくハイブリッドシミュレータの学習において、自動微分が扱えなかった不連続な事象の最適化を正確に行えるようになります。",
      "tags": [
        "物理シミュレーション",
        "自動微分",
        "強化学習"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34756",
      "title": "Collect for Coverage, Replay with Evidence: Adaptive and Efficient On-Policy Distillation for Long-Horizon Agents",
      "url": "https://arxiv.org/abs/2611.34756",
      "pdf": "https://arxiv.org/pdf/2611.34756",
      "authors": [
        "Haowen Hou",
        "Gen Li",
        "Ruilin Li",
        "Yicheng Liu",
        "Zhen Huang",
        "Shuai Dong"
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
      "comment": "15 pages",
      "hf_upvotes": 2,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On SWE-bench Verified, it raises task success to 59.5%",
      "signals": [],
      "headline": "証拠に基づくリプレイと学生主導の収集による長期間エージェントの効率的・適応的な方策蒸留",
      "what": "長期間（Long-horizon）タスクにおいて、現在の学生モデルから生成した履歴に教師モデルが補完を行う「学生シード型収集」と、実行結果の証拠に基づいて重要なターンを選択する「後知恵リプレイ割り当て」を組み合わせたCARE-OPDを提案しています。",
      "enables": "SWE-bench Verifiedにおいて、タスク成功率を59.5%まで高めつつ、従来のオンライン方策蒸留と比較して学習時間を45%、環境アクション数を44%削減しました。",
      "why_it_matters": "ソフトウェアエンジニアリング等の複雑なタスクにおいて、高コストな環境インタラクションを最小限に抑えつつ、効率的にエージェントを強化できます。",
      "tags": [
        "LLMエージェント",
        "方策蒸留",
        "強化学習"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34776",
      "title": "DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity",
      "url": "https://arxiv.org/abs/2611.34776",
      "pdf": "https://arxiv.org/pdf/2611.34776",
      "authors": [
        "Hong Liu",
        "Rui Cen",
        "Junhan Shi",
        "Lin Niu",
        "Runzhi Fan",
        "Zhaojing Zhou"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Its throughput is 62% and 81% higher on two 64K sets.",
      "signals": [],
      "headline": "ターゲットモデルのスパース構造を共有しロングコンテキスト推論を高速化するDFly2",
      "what": "ターゲットモデル（DeepSeek-V4等）が持つスパースアテンションのKVキャッシュと選択されたインデックスをドラフトモデルがそのまま共有する、スペック解析デコーディング手法です。ドラフトモデル独自のキャッシュ保持やスコアリングパスを不要にします。",
      "enables": "ロングコンテキストやエージェント関連のワークロードにおいて、既存手法に対し受容率を10.0%〜31.5%向上させ、DS-V4.1-Flashでのスループットを最大81%改善しました。",
      "why_it_matters": "スパースな大規模モデルにおけるメモリ帯域と計算のボトルネックを解消し、長大なコンテキストでのリアルタイム推論を現実的なものにします。",
      "tags": [
        "推論加速",
        "スパースアテンション",
        "スペック解析デコーディング"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34903",
      "title": "ProbFaS: Probabilistic Video Frame Selection for MLLMs via Multi-Fidelity Calibration",
      "url": "https://arxiv.org/abs/2611.34903",
      "pdf": "https://arxiv.org/pdf/2611.34903",
      "authors": [
        "Tianru Zhang",
        "Mayank Nautiyal",
        "Hugo Eidmann",
        "Prashant Singh",
        "Ekta Vats"
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
      "star_quote": "ProbFaS is the most accurate among fourteen state-of-the-art training-free selectors",
      "signals": [],
      "headline": "マルチフィデリティ・ガウス過程による長尺動画の重要なフレームを特定するProbFaS",
      "what": "低コストだがバイアスのある画像・テキスト整合性（ITA）スコアと、高コストだが正確なMLLMの判断をコ・クリギング（多忠実度ガウス過程）で統合し、最適なフレームを選択する確率的パイプラインです。MLLMの内部的なYes/No判断を校正信号として利用します。",
      "enables": "Video-MME等の主要ベンチマークにおいて、32フレームの選択で既存の128フレーム選択や768フレームの均等サンプリングを上回る精度を達成しました。",
      "why_it_matters": "計算リソースが限られるMLLMにおいて、情報を損失することなく入力トークン数を劇的に削減できるため、長尺動画理解の実用性が高まります。",
      "tags": [
        "MLLM",
        "ビデオ理解",
        "フレーム選択"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.33805",
      "title": "SpiderSkel: Sub-Pixel Multi-Tangent 2D Skeletonization from Inscribed-Disc Geometry",
      "url": "https://arxiv.org/abs/2611.33805",
      "pdf": "https://arxiv.org/pdf/2611.33805",
      "authors": [
        "Zhexian Zhou",
        "Lian Ren",
        "Xiao Feng",
        "Sebastian Scherer"
      ],
      "categories": [
        "eess.IV",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages, 4 figures, 5 tables, plus 6 pages of supplementary material. Submitted to IEEE Transactions on Image Processing",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "every variant is Pareto-optimal with respect to all twenty-two baselines",
      "signals": [],
      "headline": "内接円幾何に基づき位相と再構成精度を保証するサブピクセル2Dスケルトン化手法SpiderSkel",
      "what": "バイナリ形状をコンパクトな内側表現（スケルトン）に変換する手法で、正確なユークリッド距離変換と内接円の接点配置を利用してサブピクセル位置を特定します。成分や穴のトポロジー維持を理論的に保証し、接続性を確保したまま削減を行います。",
      "enables": "11,000枚以上の画像ベンチマークにおいて、22の既存手法を上回る再構成精度（Dice係数）と削減率を達成しました。また、エディット後の再計算を平均15.4〜18.1msで完了する高速性を持ちます。",
      "why_it_matters": "医療画像やインフラ診断における微細な形状解析において、解像度の損失なしに数学的に正しい構造抽出が可能になります。",
      "tags": [
        "画像処理",
        "スケルトン化",
        "サブピクセル解析"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.33812",
      "title": "KnitNet: Learning to Search at Inference Time for Exact RNA Inverse Design",
      "url": "https://arxiv.org/abs/2611.33812",
      "pdf": "https://arxiv.org/pdf/2611.33812",
      "authors": [
        "Antonia Panescu",
        "Xin Wang",
        "Haoran Xu",
        "Qingyu Chen",
        "Carlos Oliver",
        "Rex Ying"
      ],
      "categories": [
        "q-bio.BM",
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
        "cap"
      ],
      "star_quote": "KnitNet is the first method to achieve exact computational matches for all complex, pseudoknotted structures.",
      "signals": [],
      "headline": "フィードバック学習による検索で正確なRNA逆設計を実現するKnitNet",
      "what": "特定の構造に折り畳まれるRNA塩基配列を探索する際、検証器（Verifier）からのフィードバックを用いてシーケンスを洗練させる推論時スケーリングフレームワークです。ミスマッチした構造から塩基間の依存関係を推論し、修正戦略を動的に適応させます。",
      "enables": "5つの主要ベンチマークにおいて、従来のサンプリング手法より70%少ない時間で解の発見率を平均21ポイント向上させ、OpenKnot57の複雑な疑似ノット構造すべてで正確な一致を達成しました。",
      "why_it_matters": "学習済み生成モデルの限界を超え、推論時の計算量を増やすことでより困難なRNA設計問題を解決する「推論時スケーリング」の有効性を示しています。",
      "tags": [
        "バイオインフォマティクス",
        "RNA設計",
        "推論時スケーリング"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34277",
      "title": "Beat This! Live - Online Beat and Downbeat Tracking by Predicting the Future",
      "url": "https://arxiv.org/abs/2611.34277",
      "pdf": "https://arxiv.org/pdf/2611.34277",
      "authors": [
        "B\\'ank Juh\\'asz",
        "Gerhard Widmer",
        "Jan Schl\\\"uter"
      ],
      "categories": [
        "cs.SD",
        "cs.LG",
        "eess.AS"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at the 27th International Society for Music Information Retrieval Conference (ISMIR), 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "F1-score improves from 80.6 to 86.7 for beats and 56.5 to 74.1 for downbeats",
      "signals": [],
      "headline": "未来予測により低遅延かつ高精度なリアルタイムビート追跡を実現するBeat This! Live",
      "what": "最新のオフラインビート追跡モデルをリアルタイム・ストリーミング向けに因果（Causal）化したモデルです。時間的にシフトさせたラベルを用いて学習することで、現在のフレームよりわずかに先の予測を行い、レイテンシ削減とピーク検出の精度向上を両立させています。",
      "enables": "GTZANデータセットにおいて、既存のSOTAであるBeatNet+と比較し、ビートのF1スコアを80.6から86.7へ、ダウンビートを56.5から74.1へと大幅に向上させました。",
      "why_it_matters": "音楽のライブ演奏やDJプレイ等のリアルタイム性が要求される現場において、プロレベルの精度でビート同期を可能にします。",
      "tags": [
        "オーディオ処理",
        "ビート追跡",
        "リアルタイム"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
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
      "id": "2611.34280",
      "title": "Escapingthe instruction blackhole of vision-language-action policies via optimal-transport wormholes",
      "url": "https://arxiv.org/abs/2611.34280",
      "pdf": "https://arxiv.org/pdf/2611.34280",
      "authors": [
        "Xuetao Li",
        "Chen Liu",
        "Jing Wu",
        "Sheng Liu",
        "Miao Li"
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
        "cap",
        "new"
      ],
      "star_quote": "We propose Wormhole, a training-free plug-in that relocates the robot instead of re-instructing it: optimal transport selects an approach-phase state of the new task",
      "signals": [],
      "headline": "指示変更への追従不能問題を「ワームホール」転送で解決するロボット制御手法Wormhole",
      "what": "VLA（視覚・言語・行動）ポリシーが一度特定のタスクを開始すると新しい指示を無視する現象（指示ブラックホール）を解決するため、ロボットの状態を新タスクの開始フェーズに最適な輸送（Optimal Transport）を用いて再配置する、学習不要のプラグインです。",
      "enables": "LIBEROベンチマークにおいて、タスク実行中の指示変更による成功率を1.2%以下から93.1%へと劇的に改善しました。",
      "why_it_matters": "人間との協調において不可欠な「途中で指示を変える」という柔軟性を、ポリシーの再学習なしで既存のロボット制御系に付与できます。",
      "tags": [
        "ロボティクス",
        "VLA",
        "最適輸送"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.33985",
      "title": "MolGPAO: Molecular Generative Pre-trained Autoregressive Octree with Speculative Decoding and Sub-Millisecond Seam Healing for 3D Molecules",
      "url": "https://arxiv.org/abs/2611.33985",
      "pdf": "https://arxiv.org/pdf/2611.33985",
      "authors": [
        "Shangqian Chen",
        "Guojiang Zhao",
        "Zheng Cheng",
        "Jiankun Wang",
        "Hongshuai Wang",
        "Zhifeng Gao"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "q-bio.BM"
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
      "star_quote": "MolGPAO lifts drug-scale valid-connected yield 6.78x (12.7% to 86.2%, 99.83% atom stability), runs 7.3x faster (or 1.65x faster at 2.0x yield) than 100-step FlowMol",
      "signals": [],
      "headline": "3D分子生成における原子安定性と推論速度を両立する自己回帰型八分木モデルMolGPAO",
      "what": "3D八分木（Octree）を用いた自己回帰生成に、スペック解析デコーディングとMortonシームの修復技術を導入したアーキテクチャです。共有の批判モデル（Critic）とSE(3)不変なリファイナーを統合し、幾何学的平衡と原子価の安定性を確保します。",
      "enables": "GEOM-Drugs等のデータセットで、有効な結合を持つ分子の生成率を6.78倍（12.7%から86.2%へ）向上させ、FlowMolに対し7.3倍の高速化を達成しました。",
      "why_it_matters": "拡散モデルやフローモデルといった計算負荷の高い手法に代わり、大規模な創薬ターゲット分子を高速かつ正確に生成する実用的な手段を提供します。",
      "tags": [
        "分子生成",
        "3D構造",
        "創薬AI"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34092",
      "title": "Improving Tail-Augmented Speculative Drafting with Hidden State Mixing and Gradient Detach",
      "url": "https://arxiv.org/abs/2611.34092",
      "pdf": "https://arxiv.org/pdf/2611.34092",
      "authors": [
        "Yaniv Galron",
        "Rabeeh Karimi Mahabadi",
        "Maor Ashkenazi",
        "Roger Waleffe",
        "Talor Abramovich",
        "Tiyasa Mitra"
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
      "star_quote": "Hidden State Mixing (HSM) samples among backbone and MTP hidden states aligned to the same prediction target, exposing the drafter to mixtures of states",
      "signals": [],
      "headline": "隠れ状態の混合と勾配切断によりスペック解析デコーディングの受容率を向上させる学習手法",
      "what": "マルチトークン予測（MTP）モジュールの学習において、バックボーンとMTPの隠れ状態をサンプリングして混合するHidden State Mixing（HSM）と、特定のパスの勾配を遮断するHidden State Gradient Detach（HSGD）を提案しています。推論コストを増やさずに、学習と推論の不一致を解消します。",
      "enables": "Qwen3やDeepSeek-V4-Pro等において、平均受容長を最大52.2%改善し、既存のEAGLE-3と比較して学習時のピークメモリを48%削減しました。",
      "why_it_matters": "LLMの推論加速に不可欠なスペック解析デコーディングの効率を、追加のハードウェアリソースなしで向上させることができます。",
      "tags": [
        "推論加速",
        "スペック解析デコーディング",
        "LLM"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34912",
      "title": "LiveVAE: Causal Window Attention Makes Efficient Streaming Video VAE",
      "url": "https://arxiv.org/abs/2611.34912",
      "pdf": "https://arxiv.org/pdf/2611.34912",
      "authors": [
        "Jiachen An",
        "Sijie Zhao",
        "Le Li",
        "Hongyu Liu",
        "Zhiyuan Li",
        "Tianyu Yang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://livevae.github.io/ Code: https://github.com/MeiGen-AI/LiveVAE",
      "hf_upvotes": 3,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LiveVAE achieves 5.2-6.2x faster encoding and 3.0-3.3x faster decoding",
      "signals": [],
      "headline": "因果ウィンドウアテンションによりストリーミング対応の高速ビデオVAEを実現するLiveVAE",
      "what": "ビデオVAEの符号化・復号化において、局所的な時空間近傍のみに依存する因果ウィンドウアテンションを採用したアーキテクチャです。事前学習済みVAEの潜在空間を維持するための蒸留と微調整を経て、ドロップインで置き換え可能なモジュールとして構築されます。",
      "enables": "公式のVAEと比較して、符号化で5.2〜6.2倍、復号化で3.0〜3.3倍の高速化を達成し、専用インフラとの組み合わせで最大13.4倍の高速化を実現しました。",
      "why_it_matters": "ビデオ生成・編集パイプラインにおける主要な遅延要因であったVAEを、メモリ効率の高いストリーミング処理可能にすることで、インタラクティブな用途への道を拓きます。",
      "tags": [
        "VAE",
        "ビデオ生成",
        "ストリーミング"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34183",
      "title": "Lightweight Reasoning Transfer via Chain-of-Thought Vector Projection",
      "url": "https://arxiv.org/abs/2611.34183",
      "pdf": "https://arxiv.org/pdf/2611.34183",
      "authors": [
        "Yulin Qi",
        "Shuo Xu",
        "Shuxia Lin",
        "Qingjian Ni",
        "Xu Yang",
        "Xin Geng"
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
      "star_quote": "We study projected cross-model Chain-of-Thought (CoT) Vector transfer, a two-stage approach that keeps both models frozen.",
      "signals": [],
      "headline": "軽量な線形プロジェクタによる大規模モデルから小規模モデルへの思考連鎖（CoT）能力の転送",
      "what": "教師モデルから抽出したCoTベクトル（推論タスクの特性を捉えたベクトル）を、線形プロジェクタを介して凍結された学生モデルの残差空間に注入する手法です。学生モデルの学習には教師の出力や中間トレースを必要とせず、少量の最終回答ラベルのみを使用します。",
      "enables": "GSM8KやMATHベンチマークにおいて、学生モデルの精度を10.37〜21.98ポイント向上させ、コード生成においてもQwen2.5-7Bの性能を有意に引き上げました。",
      "why_it_matters": "モデルを凍結したまま、極めて軽量な適応レイヤーを追加するだけで、小規模モデルに高度な推論能力を付与できる実用的な手段となります。",
      "tags": [
        "LLM",
        "知識蒸留",
        "思考連鎖"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34777",
      "title": "When Every Rollout Fails: Splicing Learner-Conditioned Options into Long-Horizon Agent RL",
      "url": "https://arxiv.org/abs/2611.34777",
      "pdf": "https://arxiv.org/pdf/2611.34777",
      "authors": [
        "Haowen Hou",
        "Yicheng Liu",
        "Zhen Huang",
        "Jiaqi Wang"
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
      "comment": "16 pages",
      "hf_upvotes": 2,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce SPLICE, which constructs local training targets from failed current-policy trajectories online.",
      "signals": [],
      "headline": "報酬ゼロの失敗軌道から学習ターゲットを合成する長期間エージェント強化手法SPLICE",
      "what": "すべてのサンプリング結果が失敗（報酬ゼロ）となる困難なタスクにおいて、失敗した軌道から適切なスライスポイントを選び、プロポーザルモデルを用いて部分的な解（オプション）を合成・注入する手法です。その後の成功確率を推定し、価値の高い遷移を学習ターゲットとして利用します。",
      "enables": "SWE-bench VerifiedやDeep Researchタスクにおいて、標準的なGRPO手法を2.8〜9.8ポイント上回り、元々失敗していた課題のクリア率を10.8ポイント向上させました。",
      "why_it_matters": "報酬が極めて疎な長期間タスクにおいて、外部の完全な正解データに頼りすぎることなく、自己改善ループを回すことが可能になります。",
      "tags": [
        "強化学習",
        "LLMエージェント",
        "自己改善"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
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
      "id": "2611.34849",
      "title": "Real2SimLab: A Unified Platform for Real-to-Simulation Transfer",
      "url": "https://arxiv.org/abs/2611.34849",
      "pdf": "https://arxiv.org/pdf/2611.34849",
      "authors": [
        "Yongchang Zhang",
        "Jie Huang",
        "Yunhe Ni",
        "Ningyu Zhou",
        "Guangyu Zhao",
        "Ruixun Liu"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://real2simhub.github.io/",
      "hf_upvotes": 107,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲107"
      ],
      "headline": "現実世界の映像からシミュレーションを構築するReal-to-Sim研究の統合プラットフォーム",
      "what": "ビデオ録画からシミュレーションプログラムを生成するエージェントを評価・学習するための統一プラットフォームです。異なるベンチマーク間の入出力とスコアリングを統合し、データ汚染を排除した学習データ生成パイプラインを提供します。",
      "enables": "現在47のコーディングエージェントと6つのベンチマークをサポートし、300本近い論文をまとめたリサーチマップも提供しています。",
      "why_it_matters": "バラバラだったReal-to-Sim評価指標を共通化することで、ロボティクスやデジタルツイン分野の開発効率を向上させます。",
      "tags": [
        "ロボティクス",
        "シミュレーション",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34575",
      "title": "Sage-Med: Scaling Medical Multimodal Intelligence",
      "url": "https://arxiv.org/abs/2611.34575",
      "pdf": "https://arxiv.org/pdf/2611.34575",
      "authors": [
        "Med Team",
        "Ming Hu",
        "Cheng Tang",
        "Wei Li",
        "Rongbin Li",
        "Feilong Tang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "101 pages",
      "hf_upvotes": 89,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲89"
      ],
      "headline": "322M件の記録と段階的学習による医療用マルチモーダルLLM、Sage-Med",
      "what": "3億件を超える医療データを用いた事前学習、段階的な教師あり微調整、適応的強化学習を組み合わせた35Bパラメータ（3Bアクティブ）の混合専門家（MoE）モデルです。視覚的知覚と医療言語能力を同時にスケールさせるカリキュラムを導入しています。",
      "enables": "31の公開ベンチマークで平均58.26%を記録し、既存のSOTAであるHulu-Med-235BやIntern-S2-Previewを上回り、GPT-6.2-Sol等のプロプライエタリモデルに迫る性能を示しました。",
      "why_it_matters": "医療分野におけるMLLMのスケーリング則を検証し、臨床ワークフローや複雑な診断推論に向けた具体的な学習レシピとベンチマークを提示しています。",
      "tags": [
        "医療AI",
        "MLLM",
        "スケーリング則"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34923",
      "title": "Mixture-of-Loops Transformer",
      "url": "https://arxiv.org/abs/2611.34923",
      "pdf": "https://arxiv.org/pdf/2611.34923",
      "authors": [
        "Lianghui Zhu",
        "Shijie Wang",
        "Xinggang Wang",
        "Jinze Bai",
        "Bo Wang",
        "Xiang Bai"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code is available at https://github.com/hustvl/MoLT",
      "hf_upvotes": 66,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲66"
      ],
      "headline": "層の再利用とメモリ機構により効率と表現力を両立するMixture-of-Loops Transformer",
      "what": "トランスフォーマーの層をループ（再利用）させるアーキテクチャに、層間やループ間でKVキャッシュを選択的に記憶・再利用するMoLA（Mixture-of-Loops Attention）を導入したモデルです。効率重視のMoLT-KVと表現力重視のMoLT-Rの2つのバリエーションがあります。",
      "enables": "400Bトークンの事前学習において、OLMo3に対し700Mモデルで1.7倍のトークン効率を達成し、3B MoEモデルでも10のドメインでPerplexityと精度を改善しました。",
      "why_it_matters": "モデルサイズを抑えつつ、深層モデルに匹敵する表現力を獲得できるため、推論効率と精度のトレードオフを改善する新しい設計指針となります。",
      "tags": [
        "アーキテクチャ",
        "Transformer",
        "効率化"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34237",
      "title": "VibeVideoAgent: Closing the Perceptual Loop for Code-Driven Video Generation",
      "url": "https://arxiv.org/abs/2611.34237",
      "pdf": "https://arxiv.org/pdf/2611.34237",
      "authors": [
        "Xuanyu Zheng",
        "Luoyuan Zhang",
        "Yancheng Long",
        "Haoyang Xu",
        "Muxi Diao",
        "Yuzhe Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 55,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲55"
      ],
      "headline": "コード生成によるビデオ制作の「見えないミス」を感知・修正するVibeVideoAgent",
      "what": "プログラム実行によるビデオ生成において、レンダリングされた中間ドラフトのマルチモーダルな検証をループに組み込むフレームワークです。同期のずれや視覚的な重なりなどのランタイムエラーにならない問題を、軽量な知覚プロトコルを通じてコード修正に反映させます。",
      "enables": "Claude 5.5 OpusやGPT-6 Astraを用いた実験で、特に音画同期（+0.56ポイント）を含むAV品質スコアを大幅に改善しました。",
      "why_it_matters": "コード駆動型ビデオ生成における、視覚的なフィードバックの欠如という課題を解決し、より精緻な編集と高品質なビデオ制作を自動化します。",
      "tags": [
        "ビデオ生成",
        "LLMエージェント",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34051",
      "title": "Stable Gated DeltaNet-2: Understanding and Mitigating Recurrent State Instability",
      "url": "https://arxiv.org/abs/2611.34051",
      "pdf": "https://arxiv.org/pdf/2611.34051",
      "authors": [
        "Xichong Zhang",
        "Xixuan Hao",
        "Zhichen Liu",
        "Le Zhou",
        "Zeyu Zhang",
        "Boyu Chen"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 47,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲47"
      ],
      "headline": "対称的な消去機構により再帰状態の不安定性を解消したStable Gated DeltaNet-2",
      "what": "線形アテンションベースのモデルGDN-2における、ロングコンテキスト学習時の不安定性を理論的に解析し修正したモデルです。書き換え操作における非正規な演算子が引き起こす指数的増大を防ぐため、対称的な消去（Symmetric Erasure）と減衰調整された残差書き込みを採用しました。",
      "enables": "1.6Bパラメータモデルにおいて、安定した学習を維持しつつ、128KコンテキストのRULERスコアをGDN-2から6.80ポイント向上させ、9つの下流タスクの精度も改善しました。",
      "why_it_matters": "RNN的な線形複雑度を持つモデルを大規模かつ長コンテキストで安定して学習させるための理論的基盤と実用的実装を提供します。",
      "tags": [
        "線形アテンション",
        "RNN",
        "ロングコンテキスト"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.34941",
      "title": "Improving and Expanding Video Editing Capabilities Without Videos",
      "url": "https://arxiv.org/abs/2611.34941",
      "pdf": "https://arxiv.org/pdf/2611.34941",
      "authors": [
        "Ji Xie",
        "Yanhao Jia",
        "Xiangpeng Yang",
        "Martin Q. Ma",
        "Sihan Xu",
        "Erik Cambria"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 44,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲44"
      ],
      "headline": "画像編集モデルの能力を動画なしでビデオ編集に転送するI2VT手法",
      "what": "画像編集モデルの高度な編集能力を、ペア動画データなしでビデオ編集モデルに転送するImage-to-Video Transfer (I2VT)を提案しています。ビデオモデルに1フレームの動画として画像を編集させ、その際のデノイジングを画像モデルでガイドすることで学習を行います。",
      "enables": "アクション変更や表情変更、照明変更などの新しいタスクにおいて、時間的な整合性を保ちながら既存のビデオ編集モデルの能力を拡張し、OpenVE++ベンチマークでSOTAを達成しました。",
      "why_it_matters": "収集が極めて困難な「編集前後のペア動画」を必要とせず、豊富な画像編集データのみから高度なビデオ編集機能を構築できるため、制作現場のニーズに迅速に対応可能です。",
      "tags": [
        "画像編集",
        "ビデオ編集",
        "知識転送"
      ],
      "fetched_at": "2026-11-27T12:59:01.344915+09:00"
    },
    {
      "id": "2611.32884",
      "title": "Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe",
      "url": "https://arxiv.org/abs/2611.32884",
      "pdf": "https://arxiv.org/pdf/2611.32884",
      "authors": [
        "Richmond Sin Jing Xuan",
        "Peilin Feng",
        "Wenbin Wang",
        "Soujanya Poria"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 97,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲97"
      ],
      "headline": "RLVB: 確証が得られるまで行動を待つ「怠惰」を解消する強化学習手法",
      "what": "AIエージェントが十分な証拠がないまま回答を急ぐ「怠惰（laziness）」を改善するため、シミュレータが計算した事後確率（確信度）に基づいて報酬を与える手法です。証拠が不十分な間は探索を続け、十分になった時のみ回答することを学習させます。",
      "enables": "3つのパズルベンチマークにおいて平均17.1%の精度向上を達成しました。学習後のエージェントは、根拠が不十分な状態で回答する割合が従来の3-68%から0.1-2.2%へと劇的に減少しました。",
      "why_it_matters": "単なる正誤報酬ではなく、推論のプロセスにおける「確信のタイミング」を教えることで、より信頼性の高いエージェント行動を実現しました。",
      "tags": [
        "AIエージェント",
        "強化学習",
        "信頼性"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    },
    {
      "id": "2611.31286",
      "title": "The Industrialization of Noise: Why Automated Proof-Solving is the Same Old Dead End",
      "url": "https://arxiv.org/abs/2611.31286",
      "pdf": "https://arxiv.org/pdf/2611.31286",
      "authors": [
        "Richard DeMillo",
        "Richard Lipton"
      ],
      "categories": [
        "cs.CR",
        "cs.AI",
        "cs.LO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "9 pages",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HN 68pt"
      ],
      "headline": "「ノイズの工業化」：自動証明生成が数学のエコシステムに与える影響への批判的考察",
      "what": "OpenAIが発表した大量の自動生成証明（722件の論文、372個の未解決問題への回答）を、数学の社会プロセス（理解、批評、直感の共有）の観点から批判的に分析した論考です。人間が理解できない「死んだ論理的遺物」の大量生産を、知的環境汚染と定義しています。",
      "enables": "機械的な問題解決が、必ずしも数学的知識の増進には繋がらないことを構造的な3つの柱（仕様、退行、有用性）から論理的に示しました。自動化された証明の氾濫が、人間の有限な注意力を削ぐリスクを指摘しています。",
      "why_it_matters": "AIによる科学的発見の加速が謳われる中、知識の「検証」と「理解」という人間中心のプロセスの重要性を再定義し、今後のAI活用のあり方に警鐘を鳴らしました。",
      "tags": [
        "AI哲学",
        "数学",
        "AIの影響"
      ],
      "fetched_at": "2026-11-26T13:00:29.957152+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.29897",
      "title": "Motion Mamba 2.0: Autoregressive Diffusion Mamba for Long-Horizon Humanoid Control",
      "abstract": "Long-horizon, real-time controllable motion generation is essential for interactive animation and humanoid robotics, where an agent must respond to changing instructions and spatial goals while moving. Existing autoregressive diffusion methods generate motion incrementally, but bounded attention caches limit access to distant history, while repeated denoising introduces substantial inference overhead. We present Motion Mamba 2.0, a Mamba-based root-body diffusion architecture that integrates local attention, resumable recurrent states, and persistent content memory (PCM) for long-horizon controllable motion generation. PCM transforms compressed motion history from Mamba recurrent states, together with state changes and text-conditioned features, into dynamically updated content slots accessible to local attention. To enable efficient inference, we further develop an execution scheme tailored to this architecture, combining CUDA Graph replay, fused kernels, and execution-flow simplification while preserving the canonical history update. Evaluations on retargeted HiPHI demonstrate accurate terminal control over rollouts of up to 39.52 s, while short-horizon comparisons on BONES Seed and retargeted HumanML3D show that the model also retains strong spatial control and text-motion matching. On an RTX 4090, the optimized execution reduces median complete-window latency from 1685.35 to 276.14 ms, achieving a median paired speedup of 6.138times while preserving identical outputs and committed states in the tested rollouts. Moreover, we conduct extensive real-world evaluation on the Unitree G1, demonstrating sequential text-guided action composition, expressive motion, and interactive locomotion through keyboard and mouse control.",
      "upvotes": 228,
      "github_stars": 43,
      "github_repo": "https://github.com/AIGeeksGroup/MotionMamba2.0",
      "project_page": "https://aigeeksgroup.github.io/MotionMamba2.0/",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.29897",
      "arxiv_url": "https://arxiv.org/abs/2611.29897",
      "title_ja": "Motion Mamba 2.0: 長期間ヒューマノイド制御のための自己回帰拡散Mamba",
      "summary_ja": "Mamba基盤の建築により、過去の履歴を効率的に保持しリアルタイムかつ長期間の制御可能なモーション生成を実現。"
    },
    {
      "id": "2611.34051",
      "title": "Stable Gated DeltaNet-2: Understanding and Mitigating Recurrent State Instability",
      "abstract": "Linear attention offers an efficient solution for long-sequence modeling via linear complexity and fixed-size recurrent states. Gated DeltaNet-2 (GDN-2) introduces independent channel-wise control over erasure and writing, enhancing state-update expressiveness and in-context retrieval, yet it suffers from training failures during long-context training. We trace these failures to the asymmetry between reading and modification directions during erasure, which yields non-normal erase operators whose directional gains accumulate across tokens, triggering exponential state growth even without new writes. To resolve this, we propose , employing symmetric erasure to ensure non-expansive state propagation and decay-regulated residual writing to preserve writing flexibility. Theoretically, we establish an O(T) upper bound on recurrent state growth while retaining chunkwise parallel computation. Experiments on ~1.6B parameter models show that achieves stable training alongside improved long-context retrieval. Compared to GDN-2, it boosts the 128K average RULER score by 6.80 points in the recurrent setting and average accuracy across nine downstream tasks by 0.62 points in the hybrid setting.",
      "upvotes": 128,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "MemTensor",
      "url": "https://huggingface.co/papers/2611.34051",
      "arxiv_url": "https://arxiv.org/abs/2611.34051",
      "title_ja": "Stable Gated DeltaNet-2: 再帰状態の不安定性の理解と緩和",
      "summary_ja": "線形アテンションにおける状態の指数増幅を特定し、対称消去法を導入することで長文脈訓練時の安定性を向上。"
    },
    {
      "id": "2611.31201",
      "title": "Embo-Harness: Towards Understanding Frontier-Model-as-Policy Harness",
      "abstract": "Frontier multimodal models exhibit extraordinary generalization in generating robot actions from observations and instructions, enabling a new paradigm in which they serve directly as policies within closed-loop robotic harnesses. However, the design principles of such harnesses, and the capabilities underlying their strong performance, remain unclear. We present Embo-Harness, a framework for systematically studying frontier-model-as-policy harnesses. We investigate four components of the robotic agentic loop, namely, prompting, planning, action execution, and tool use, and distill six empirical findings into a practical recipe. This recipe prioritizes interfaces that exploit the model's native visual reasoning and tool-use capabilities over handcrafted plans, skills, or action priors, and identifies effective choices for action representation, chunking, reasoning effort, visual observations, short multi-action sequences, and policy refinement. On RoboLab-120, Embo-Harness achieves an 83.3\\% success rate, outperforming the strongest reported baseline by 26.2 percentage points. It also succeeds in 15 of 20 zero-shot trials across four real-world manipulation tasks. Beyond performance, controlled interventions indicate that the studied model depends more strongly on accurate spatial target estimation than on explicit low-level joint or trajectory generation. These results provide both a practical recipe for building strong frontier-model-as-policy harnesses and a clearer account of the capabilities that drive their performance.",
      "upvotes": 106,
      "github_stars": 75,
      "github_repo": "https://github.com/DravenALG/Embo-Harness",
      "project_page": "https://dravenalg.github.io/projects/Embo-Harness/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.31201",
      "arxiv_url": "https://arxiv.org/abs/2611.31201",
      "title_ja": "Embo-Harness: フロンティアモデルを方策として活用するハーネスの理解に向けて",
      "summary_ja": "マルチモーダルモデルを直接ロボット方策とするためのフレームワークを構築し、最適な設計指針を導出。"
    },
    {
      "id": "2611.34232",
      "title": "OS-Omni: Benchmarking Generalist Computer-Using Agents on Long-Horizon Workflows Across Platforms",
      "abstract": "Computer-using agents are increasingly expected to complete realistic user goals rather than isolated GUI actions. However, existing benchmarks typically isolate web, mobile, or desktop environments, leaving it unclear whether a single generalist agent can execute long-horizon workflows that span multiple operating systems and persistent application states. We introduce OS-Omni, a live cross-platform benchmark and execution environment for evaluating computer-using agents across Windows, Ubuntu, macOS, iOS, Android, and Web environments. OS-Omni is released in versioned waves of 300 tasks each; this paper focuses on the first release, v1, which contains 48 tasks per platform and 12 cross-platform workflows that pair a desktop with an Android phone. OS-Omni provides reproducible initialization, platform-specific adapters, trajectory logging, and executable final-state evaluators, and includes controlled service-backed applications for workflows involving account, cart, budget, calendar, message, and other persistent state. Human studies show that OS-Omni tasks require 67.54 interaction steps, substantially exceeding OSWorld references of 15.0 steps. On v1, the strongest evaluated agent, Claude Opus 5.5, reaches 68.5% average success, trailing the 77.3% human reference by 8.8 points; the gap is uneven across platforms, with frontier models exceeding humans on Linux but trailing them by more than 25 points on iOS and macOS. These results indicate that current agents remain far from platform-robust, long-horizon computer use, especially when success requires sustained state tracking and durable final-state changes.",
      "upvotes": 104,
      "github_stars": 102,
      "github_repo": "https://github.com/OS-Copilot/OS-Omni",
      "project_page": "https://os-copilot.github.io/OS-Omni-Home/",
      "comments": 3,
      "org": "Touchstone AI",
      "url": "https://huggingface.co/papers/2611.34232",
      "arxiv_url": "https://arxiv.org/abs/2611.34232",
      "title_ja": "OS-Omni: OS横断・長期間ワークフローにおける汎用コンピュータ操作エージェントの評価",
      "summary_ja": "Windows、macOS、スマホOS等を含む、複数OSを跨いだ複雑な実務を遂行できるかを評価する新ベンチマーク。"
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
      "title_ja": "cmHC: 幾何学的収縮によるハイパーコネクションのストリーム混合の調整",
      "summary_ja": "残差流の混合における過不足のトレードオフを理論化し、最適な混合状態を維持する新しい幾何学的収縮手法を提案。"
    },
    {
      "id": "2611.30634",
      "title": "Rewirable Circuits in Transformers with Loom Attention",
      "abstract": "We propose loom attention, which allows a Transformer to dynamically rewire its circuits at every token by interweaving a head's vertical attention over the outputs of earlier heads (to obtain its query, key and value) with its horizontal attention over tokens. We instantiate vertical attention efficiently with normalized and gated linear attention over a per-token matrix memory, which stores the compressed head outputs and serves as a second residual stream. This yields LoomFormer, a dual-stream architecture that splits control and content between the vector and matrix streams. Across model sizes and training token budgets in language modeling and downstream tasks, LoomFormer matches Transformers trained with over 3x compute and recent residual-stream baselines (HC/mHC, MUDDFormer, AttnRes) trained with ~1.7-2.8x. For example, trained on the same 300B tokens with only 2% extra FLOPs, LoomPythia-2.8B achieves ~1.6x the average downstream gain of mHC-Pythia-2.8B over Pythia-2.8B, and matches (0-shot) or surpasses (5-shot) Pythia-12B. Code is available at https://github.com/Caiyun-AI/LoomFormer",
      "upvotes": 93,
      "github_stars": 22,
      "github_repo": "https://github.com/Caiyun-AI/LoomFormer",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.30634",
      "arxiv_url": "https://arxiv.org/abs/2611.30634",
      "title_ja": "Loom AttentionによるTransformerの回路再配線",
      "summary_ja": "ヘッド間の垂直方向のアテンションを導入し、トークンごとに動的な回路の組み換えを可能にする新アーキテクチャ。"
    },
    {
      "id": "2611.30989",
      "title": "WorldLeague: Benchmarking Physical Agency",
      "abstract": "AI systems can now operate Blender, follow instructions in complex video games, and manipulate objects with robot arms. What range of physical goals can today's AI systems achieve autonomously? Answering this question requires testing systems on tasks that demand different combinations of perception, memory, planning, and action. We introduce WorldLeague, a benchmark that compares AI systems on a common set of 60 simulated robot tasks by measuring progress toward each task's physical goal from the robot's trajectory. Robots explore scenes to gather evidence in WorldSeek, rearrange objects in WorldShape, and adapt to changes in WorldShift. Tying these goals to a single control interface limits which AI systems can be compared. In WorldLeague, vision-language models (VLMs) choose targets and motions, while vision-language-action models (VLAs) and world-action models (WAMs) use their native controls. For each of six capability dimensions, we measure how much progress a system makes toward its goals (Interactive Score) and how often it achieves them (physical success rate). Together, these measures form the system's Physical Agency Profile. Among 13 representative AI systems, Claude Fable 5.2 achieves 13 of the 60 goals and earns the highest mean Interactive Score (28.58/100). Fable leads in four dimensions, while GPT-6.1-Sol and GPT-6-Astra tie for first on rule-following tasks. Even when VLMs answer every final question correctly, they receive an Interactive Score of zero in 71.8\\% of those episodes. WorldLeague gives Embodied AI, Physical AI, and Agentic AI a shared basis for comparing what AI systems achieve autonomously, from partial progress toward a physical goal to full goal completion. Project Webpage: https://xyangzhou.github.io/WorldLeague",
      "upvotes": 86,
      "github_stars": 22,
      "github_repo": "https://github.com/xyangzhou/WorldLeague",
      "project_page": "https://xyangzhou.github.io/WorldLeague/",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.30989",
      "arxiv_url": "https://arxiv.org/abs/2611.30989",
      "title_ja": "WorldLeague: 物理的エージェンシーのベンチマーク",
      "summary_ja": "多様なシミュレーション環境下で、AIが知覚・計画・行動を通じて物理的な目標を自律的に達成できるかを測定。"
    },
    {
      "id": "2611.34575",
      "title": "Sage-Med: Scaling Medical Multimodal Intelligence",
      "abstract": "Establishing effective scaling laws for medical multimodal large language models (MLLMs) remains a persistent and fundamental challenge. Our systematic evaluation shows that existing medical MLLMs tend to underperform frontier general-purpose MLLMs across a range of medical tasks, while scaling model size primarily improves text capabilities rather than multimodal perception, and enabling reasoning modes fails to close this visual gap. To investigate how medical multimodal intelligence scales in practice, we introduce Sage-Med-Preview, a 35B-parameter medical multimodal model with 3B activated parameters, built by combining stage-specific curation over 322.7 million candidate records with a progressive training curriculum spanning medical pretraining, staged supervised fine-tuning, and adaptive reinforcement learning. Across this curriculum, progressive supervised refinement and adaptive reinforcement learning yield consistent stage-wise gains, substantially advancing both specialized visual understanding and medical language capabilities. Evaluated against 77 competing models across 238 clinical tasks spanning 61 public and 13 private multi-center benchmarks in more than 40 modalities, Sage-Med-Preview achieves an average score of 58.26% on the 31 public multimodal benchmarks. It outperforms the state-of-the-art open-source medical model Hulu-Med-235B-A22B at 50.99% and the general scientific model Intern-S2-Preview at 52.24%, and approaches the advanced proprietary model GPT-6.2-Sol across multiple tasks such as comprehensive multimodal understanding, report generation, and visual grounding. Although substantial challenges remain in complex medical reasoning and multi-step clinical workflows, this report provides empirical evidence, actionable data and training recipes, and a rigorous benchmark toward scalable clinical multimodal intelligence.",
      "upvotes": 81,
      "github_stars": 27,
      "github_repo": "https://github.com/Sage-Med/Sage-Med-Preview",
      "project_page": "https://sage-med-preview.github.io/",
      "comments": 2,
      "org": "Shanghai AI Laboratory",
      "url": "https://huggingface.co/papers/2611.34575",
      "arxiv_url": "https://arxiv.org/abs/2611.34575",
      "title_ja": "Sage-Med: 医療マルチモーダル知能のスケーリング",
      "summary_ja": "3.2億件の記録と段階的なデータ選別により、汎用モデルを凌駕する高い知覚・推論能力を持つ医療用MLLMを構築。"
    },
    {
      "id": "2611.34923",
      "title": "Mixture-of-Loops Transformer",
      "abstract": "Looped Transformers boost expressivity by reusing shared layers across loops, yet at the cost of efficiency. Pushing their expressivity-efficiency frontier requires rethinking the core mechanism connecting adjacent loops: What should be passed as a Transformer loops? We introduce Mixture-of-Loops Transformer (MoLT), whose Mixture-of-Loops Attention (MoLA) uses keys and values (KV) as memory for selective reuse across depths and loops. Under loop residual, MoLT-R retains the residual stream and reads local KV across loops for expressivity. Under loop KV, MoLT-KV instead restarts from embeddings and reads current-loop local KV with preceding-loop memory KV at earlier positions for efficiency. MoLT-KV eliminates same-position cross-loop dependence and, paired with loop forcing for parallel training, unlocks single-traversal Mixture-of-Loops (MoL) decoding beyond the training loop horizon. To balance efficiency and quality, we introduce U-shaped MoLT (U-MoLT), which separates memory construction from prediction readout and skips unused decoder traversals without changing predictions. In 400B-token pretraining, U-MoLT outperforms OLMo3 across 700M/1.5B dense and 3B MoE models, achieving 1.7x validation cross-entropy (CE) token efficiency at 700M while improving 3B MoE 10-domain perplexity by 0.75 and 10-task accuracy by 2.1 percentage points. In 100B-token continued pretraining of Qwen3.5-0.8B-Base, our U-MoLT adaptation lowers CE on all 11 domains over the matched baseline with 1.4x mean token efficiency. At inference, U-MoLT with MoL-Hybrid-2 matches non-looped OLMo3 latency at 996.6 vs. 1,000.6 ms on S-size (~113M) models. Code is available at https://github.com/hustvl/MoLT",
      "upvotes": 74,
      "github_stars": 97,
      "github_repo": "https://github.com/hustvl/MoLT",
      "project_page": "https://github.com/hustvl/MoLT",
      "comments": 2,
      "org": "ByteDance Seed",
      "url": "https://huggingface.co/papers/2611.34923",
      "arxiv_url": "https://arxiv.org/abs/2611.34923",
      "title_ja": "Mixture-of-Loops Transformer",
      "summary_ja": "KVキャッシュを層やループ間で選択的に再利用する機構により、高い表現力と推論効率の両立を実現。"
    },
    {
      "id": "2611.30844",
      "title": "DyLoMo-DiT: Dynamic Looped Mixture-of-Experts Diffusion Transformers",
      "abstract": "Diffusion Transformers (DiTs) scale model capacity by increasing both parameter count and computation. Mixture-of-Experts (MoE) variants expand parameter capacity while keeping per-token computation roughly fixed, but still require substantial parameter storage. In this paper, we propose Dynamic Looped MoE DiT (DyLoMo-DiT), which reuses parameters rather than adding them: a weight-shared loop repeatedly applies the middle layers, while sparse experts allocate parameter capacity across tokens. This design deepens the network without adding parameters, freeing the parameter budget for other uses, such as more experts or more distinct layers. It also allocates compute dynamically, varying the number of passes across noise levels. Experiments show that DyLoMo-DiT makes more effective use of parameter and compute budgets, with further gains from assigning more passes to low-noise steps. On ImageNet 256times256, DyLoMo-DiT reduces FID by 11-24% relative to DiT and 36-56% relative to DiT-MoE at matched parameter and compute budgets. For text-to-image generation, a scaled DyLoMo-DiT achieves a higher GenEval score than FLUX.1 (0.714 vs. 0.673), with less than one tenth of its active parameters (1.05B vs. 12B).",
      "upvotes": 73,
      "github_stars": 49,
      "github_repo": "https://github.com/OneBoxCream/DyLoMo-DiT",
      "project_page": "https://oneboxcream.github.io/DyLoMo-DiT/",
      "comments": 5,
      "org": "",
      "url": "https://huggingface.co/papers/2611.30844",
      "arxiv_url": "https://arxiv.org/abs/2611.30844",
      "title_ja": "DyLoMo-DiT: 動的ループ型混合専門家拡散Transformer",
      "summary_ja": "中間層をループさせて再利用しつつMoEで計算を効率化することで、パラメータを増やさずにモデルを深化。"
    },
    {
      "id": "2611.31205",
      "title": "ACAP: Asynchronous Coding Agents for Efficient Robot Control",
      "abstract": "Coding agents can construct and revise robot behavior during execution, but using one agent for the whole robot can delay otherwise independent work. We introduce Asynchronous Coding Agents as Policy (ACAP), an asynchronous framework that organizes one robot as a team of persistent agents. Each member reasons and acts for a configurable control group, such as an arm with its gripper or the torso and chassis, enabling asynchronous reasoning and execution. However, different robot components often have physical dependencies that require coordination. To address this challenge, ACAP introduces a hyper-agent that assigns tasks, coordinates dependencies, and dynamically allocates control between the lead and member agents. This allows independent work to progress concurrently while supporting tightly coupled manipulation when necessary. Across 72 real-world rollouts covering 25 task/platform settings, ACAP reduces task-balanced time cost by 28.2% compared with a single-agent Direct Policy, with improvements across Fully Parallel, Parallel-Sequential, and Collaborative tasks. Across all eight Collaborative settings, ACAP also achieves lower mean time cost than Fixed Delegation, where only member agents can control their assigned groups. An additional 90-rollout study shows lower mean 30-minute-capped time cost than Direct on all six tasks. We further demonstrate mobile manipulation using the same member interface for chassis and torso control. We present the framework and a real-world rollout dataset containing observations, generated programs, actions, and feedback to support research on how coding agents reason and act in the physical world.",
      "upvotes": 67,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://projects.zxhezexin.com/acap",
      "comments": 3,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.31205",
      "arxiv_url": "https://arxiv.org/abs/2611.31205",
      "title_ja": "ACAP: 効率的なロボット制御のための非同期コーディングエージェント",
      "summary_ja": "ロボットの各部位を独立したエージェントが制御する非同期型フレームワークにより、高速で柔軟な行動生成を実現。"
    },
    {
      "id": "2611.25403",
      "title": "Antom 3-in-1 Transformer: A Payment Foundation Model",
      "abstract": "We report the development of Antom 3-in-1 Transformer, a payment foundation model that integrates sequence, tabular, and graph representations for payment risk detection. The model contains approximately 7B parameters, with approximately 1.7B activated per task route. Antom 3-in-1 Transformer is pretrained to learn reusable behavioral and relational representations, primarily on Ant International's internal payment data. In a cross-business transfer experiment, pretraining improves the target business metric by 34.5% over the same architecture trained from scratch. With only 25% of the training labels, the pretrained model outperforms the full-label scratch baseline in Average Precision (AP) and Recall@0.5% on different merchant domains. In a four-month online experiment on Ant International's billion-scale payment platform, the model reduced the overall loss rate by 37.88% relative to XGB-Online.",
      "upvotes": 67,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2611.25403",
      "arxiv_url": "https://arxiv.org/abs/2611.25403",
      "title_ja": "Antom 3-in-1 Transformer: 決済基盤モデル",
      "summary_ja": "系列、表形式、グラフの表現を統合した70億パラメータのモデルで、決済リスク検知の大幅な精度向上を達成。"
    },
    {
      "id": "2611.32884",
      "title": "Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe",
      "abstract": "AI agents working on long tasks often commit to an answer before they have enough evidence, a behavior called laziness. In our evaluations, they frequently commit even while their stated belief still names several possible answers. An outcome reward at the end of the episode scores only the final answer, so it cannot teach the agent when to commit, because a lucky guess receives the same reward as an answer backed by evidence. During training, however, the simulator can compute the exact posterior over the answer at every step and tell whether the evidence is already enough. We propose Reinforcement Learning with Verifiable Beliefs (RLVB), which rewards the agent for taking further steps while this posterior still allows several answers and for committing once the evidence is sufficient. The reward needs no judge, critic or reward model, and it never reads the belief line the agent writes before each action. We also introduce Pro Worlds, a benchmark of visual puzzles where the agent views a large world through a small window. We evaluate three vision-language models on three benchmarks, two of which are never seen in training. RLVB improves the base model in all nine settings, by 17.1% on average. Under the outcome reward, GRPO and PPO fall below the base model on average. RLVB also outperforms PPO with a process reward from an LLM judge by 9.3% on average while using 1.6 times fewer GPU-hours. The trained agent answers with sufficient evidence in 51%, 12% and 74% of the episodes on the three benchmarks, against 8%, 0.4% and 36% for the base model. Its accuracy gain therefore comes from answering more often at high levels of evidence. The belief line shows how the agent reaches this evidence: it acts on its own belief. It commits at only 0.1 to 2.2% of the turns at which the evidence is insufficient and its line still names several answers, against 3 to 68% for the base model.",
      "upvotes": 65,
      "github_stars": 27,
      "github_repo": "https://github.com/declare-lab/RLVB",
      "project_page": "https://declare-lab.github.io/RLVB/?case=tabletop_cups&m=rlvb_grpo&s=0",
      "comments": 10,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.32884",
      "arxiv_url": "https://arxiv.org/abs/2611.32884",
      "title_ja": "怠惰なエージェントは自らの信念に反して答える: 検証可能な信念を用いた強化学習による改善",
      "summary_ja": "証拠が不十分なまま回答を急ぐ「怠惰」を、内部的な信念状態に基づく報酬設計によって抑制し、精度を向上。"
    },
    {
      "id": "2611.28947",
      "title": "Don't Sleep, Keep Watch: Proactive Perception for Computer-Use Agents",
      "abstract": "Computer-use agents (CUAs) built on vision-language models are increasingly entrusted with long-horizon tasks in live desktop, web, and mobile environments, where the screen keeps changing on its own. However, current CUAs lack real-time situational awareness: they perceive the environment through discrete snapshots, and the substantial inference latency of VLMs, compounded by highly dynamic interfaces, opens a perception-action gap in which the observed state frequently becomes stale before the corresponding action is executed. To bridge this gap, we present NightWatch, a plug-and-play framework that endows any CUA with continuous, temporally grounded perception without changing the agent's model, prompt, or action space. NightWatch couples the VLM agent with NightWatch-0.8B, a lightweight System-1 model that performs streaming monitoring of the interface state and keeps the agent synchronized with the evolving environment at low computational cost and latency, thereby grounding each decision in the current state rather than an outdated snapshot and reducing both stale actions and idle waiting while preserving task success. Experiments on desktop and dynamic web environments (OSWorld-Verified and DynaCU-Bench) show that NightWatch, driven by a watcher of only 0.8B parameters, reduces non-reasoning wall-clock time by 33% and wasted time by 53% on OSWorld while keeping task success on par, raises success on DynaCU-Bench from 39.5% to 44.2% with the large VLM agent, and is more efficient than passive-watching baselines such as AOI and PUSV under the same screenshot-only input, as well as a System-1 decision model more than 30times its size. Overall, NightWatch demonstrates that the timing of perception is as critical as its content, marking a step toward agents that maintain continuous awareness of their environment rather than perceiving it turn by turn.",
      "upvotes": 65,
      "github_stars": 4,
      "github_repo": "https://github.com/SuJQ0722/NightWatch",
      "project_page": "https://sujq0722.github.io/NightWatch/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.28947",
      "arxiv_url": "https://arxiv.org/abs/2611.28947",
      "title_ja": "Don't Sleep, Keep Watch: コンピュータ操作エージェントのための能動的知覚",
      "summary_ja": "推論遅延による知覚と行動のズレを防ぐため、追加の訓練なしで画面の動的変化を継続的に追跡する手法を提案。"
    },
    {
      "id": "2611.27963",
      "title": "Non-penetrating World Models",
      "abstract": "We study a new problem of preventing object penetration in interactive video world models. To understand how existing models handle this, we introduce NoPeBench, a benchmark that evaluates how world models respond to physical obstacles. Our evaluation reveals that none of the open-source models can reliably prevent such failures. Surprisingly, however, these models already encode the information needed to predict such violations. We find that the hidden states of diffusion transformers (DiTs) can predict whether a candidate action will penetrate an obstacle. Building on this, we introduce NoPeWorld, a lightweight framework that detects and prevents penetration. Specifically, we train a small prediction head on top of a frozen DiT's hidden states to read out if a candidate action is safe or not. Unsafe actions are then replaced with safe ones that best preserve the original intent. Despite its simplicity, NoPeWorld substantially reduces the physical violation rate, averaged over six video world models, from 74% to 16%. Remarkably, our method shows zero-shot generalization to open-domain imagery, third-person viewpoints, and moving obstacles. We publicly release our code, the NoPeBench benchmark, and model weights. Project Page: https://nopeworld.github.io .",
      "upvotes": 63,
      "github_stars": 72,
      "github_repo": "https://github.com/yuhangdai427/NoPeWorld",
      "project_page": "https://nopeworld.github.io/",
      "comments": 4,
      "org": "The Hong Kong Polytechnic University",
      "url": "https://huggingface.co/papers/2611.27963",
      "arxiv_url": "https://arxiv.org/abs/2611.27963",
      "title_ja": "非貫通型ワールドモデル",
      "summary_ja": "物体同士のめり込みを防ぐ新指標を提案し、行動が物理的な障害を貫通するかを予測・修正する軽量な枠組みを導入。"
    },
    {
      "id": "2611.30013",
      "title": "3AGameFactory-Motion: Agentic Rigging and Reliable Complex Motion Generation for Diverse 3D Assets",
      "abstract": "Animating arbitrary 3D assets from instructions requires both structural inference and motion control, yet existing motion benchmarks mostly cover conventional human or animal skeletons with simple instructions. We introduce DivDynBench, which evaluates rigging and motion generation across six morphology categories, with instructions requiring multi-phase part coordination and explicit timing, angle, repetition, and trajectory constraints. With large language models, we systematically compare three common paradigms: specialized motion generation, video generation followed by motion recovery, and direct agent-driven generation. We analyze their control capabilities, cross-morphology adaptability, and generation costs. Guided by this comparison, we propose an Agentic Motion Framework in which an agent writes compact parametric skeleton and motion programs, and a deterministic executor performs rigging, kinematic solving, and geometric correction. Compact parameter control reduces generation overhead and improves rigging reliability and motion-control accuracy, providing practical guidance for deploying complex 3D motion generation.",
      "upvotes": 62,
      "github_stars": 1430,
      "github_repo": "https://github.com/OpenDCAI/GameFactory-3A",
      "project_page": "",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2611.30013",
      "arxiv_url": "https://arxiv.org/abs/2611.30013",
      "title_ja": "3AGameFactory-Motion: 多様な3D資産のためのエージェントによるリギングと複雑なモーション生成",
      "summary_ja": "多様な骨格構造を持つ3Dモデルに対し、エージェントによる自動リギングと制約付きの複雑なアニメーション生成を実現。"
    },
    {
      "id": "2611.12164",
      "title": "Let the Fixer Decide: Training a Code Localizer from the Fixer's Likelihood",
      "abstract": "Code localizers are usually trained to predict the files a reference patch edits, but the code a fixer needs to read is not the same as the code it changes. We propose Fixer-Guided Localization (FGL): the localizer proposes several localizations, a frozen fixer scores each by how likely it makes a verified patch, and the localizer is trained on these scores with weighted supervised fine-tuning, without running tests and without reinforcement learning. We build the full pipeline on Gemma 4 E4B for the Kaggle Gemma-4 Developer Agent competition, from 1,629 test-verified Kimi K3 trajectories. The FGL target helps the fixer find the bug as often as the teacher's localization while using 27.5% less code. On the development set, one EM round moves the agent in the expected direction compared with a matched control: more tasks reach a patch (53 vs. 46), fewer tasks get stuck reading files that do not exist (43 vs. 54), and more tasks are solved (8 vs. 6). Training also changes how the agent works: trained agents explore about three times more than the base model and write far fewer wrong patches, and the single agent solves up to 11 of 78 tasks, against 8 for the base model. An analysis of 13 evaluation runs identifies what limits a 4B agent under an 8-minute budget (time, repetition loops and edit quality) and gives practical lessons for training small coding agents. All data, code and adapters are publicly available.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "https://github.com/misraj-ai/locfix",
      "project_page": "",
      "comments": 7,
      "org": "Misraj Ai",
      "url": "https://huggingface.co/papers/2611.12164",
      "arxiv_url": "https://arxiv.org/abs/2611.12164",
      "title_ja": "Let the Fixer Decide: 修正器の尤度を用いたコード位置特定器の学習",
      "summary_ja": "修正器が必要とするコードを予測するように特定器を訓練し、少ないコンテキストでバグ発見率を維持する手法。"
    },
    {
      "id": "2611.34813",
      "title": "Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners Than Video Models",
      "abstract": "Video generation models are increasingly evaluated as visual reasoners: given a first frame and a natural-language prompt, can the model produce the video in which the specified task is carried out? The paradigm is considered advantageous because the reasoning is native to the visual medium, unfolding directly in the frames rather than through language or code. Whether this native route is in fact the more reliable path to visual reasoning has not been tested against a symbolic alternative under the same conditions. We therefore pose the same tasks, with identical inputs, output specification and evaluator, to both media: rather than denoising pixels, a coding agent writes a program that renders the answer video, which an unmodified rule-based evaluator scores. On VBVR-Pro-Bench (Xu et al., 2026), a 500-instance suite spanning five cognitive categories with symbolic ground truth, the agent receives the same first frame and prompt as the video model, with no access to ground truth, metadata or generation models, and one attempt per instance. Three closed-model agents (Codex with gpt-6-astra, Claude Code with Fable 5.1 and Gemini CLI with Gemini 3.1 Pro) score 0.923, 0.894 and 0.893, each more than 0.22 above the strongest video model. Among 23 runnable open-weight models, the best, GLM-5, reaches 0.572, above all video models except the RL-trained one. Together, we show that for tasks whose solutions can be computed from a first frame and a prompt, program synthesis is currently a substantially more reliable route to visual reasoning than video generation. We further distinguish depictive programs, which navigate the image to recover a transferable scheme, from propositional programs, which operate on hard-coded values, revealing how visual reasoning unfolds in agent-written programs and what it implies for its nature of reasoning in general.",
      "upvotes": 59,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://solve-vision-with-code.com/",
      "comments": 5,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.34813",
      "arxiv_url": "https://arxiv.org/abs/2611.34813",
      "title_ja": "コードで視覚を解く: コーディングエージェントは動画モデルよりも強力な視覚的推論者である",
      "summary_ja": "動画生成による推論よりも、プログラムを書いて描画するアプローチの方が、物理的な推論において高い信頼性を示すことを実証。"
    },
    {
      "id": "2611.34237",
      "title": "VibeVideoAgent: Closing the Perceptual Loop for Code-Driven Video Generation",
      "abstract": "Code-driven video generation asks a coding agent to write and run rendering programs. This gives exact control over typography, data visualizations, synchronized audio, and multi-shot scenes, and it leaves an editable project behind. A program that exits cleanly can still render overlapping labels, a camera aimed away from its subject, broken object interactions, or narration that drifts out of sync, and none of these raise a runtime error. Feeding rendered frames and audio back into the coding session bloats its long-horizon context, while critiquing only the finished full-resolution render turns early design mistakes into costly rewrites. We introduce VibeVideoAgent, a training-free framework that lets coding agents inspect their drafts throughout production. Multimodal perception runs in short-lived contexts kept apart from the coder and returns compact, grounded Findings. Seven primitives operate on a unified multi-clock representation of assets and drafts: they explore media from coarse to fine, verify quoted requirements with evidence from every required modality, compare a draft with a reference or an earlier revision on separate clocks, and measure stream signals locally. A lightweight staged protocol has the agent test its riskiest decision on a minimal preview first. On all 239 VibeVideoBench tasks, with matched agent runtimes and a fixed perception model, VibeVideoAgent improves holistic audiovisual quality (L3) for Claude Opus 5.5 (4.03 -> 4.43, while L2 rubric compliance rises from 98.87% to 99.35%), GPT-6 Astra (4.03 -> 4.27), and Claude Sonnet 5.5 (3.97 -> 4.10), with the largest gains in audio-visual synchronization (up to +0.56). Controlled ablations show that each component contributes, and trajectory audits show that the granularity of code edits governs the trade-off between rubric adherence and perceptual quality.",
      "upvotes": 58,
      "github_stars": 12,
      "github_repo": "https://github.com/Kling-Keye/VibeVideoAgent",
      "project_page": "",
      "comments": 5,
      "org": "Kling-Keye",
      "url": "https://huggingface.co/papers/2611.34237",
      "arxiv_url": "https://arxiv.org/abs/2611.34237",
      "title_ja": "VibeVideoAgent: コード駆動型動画生成のための知覚ループの閉合",
      "summary_ja": "レンダリング結果をフィードバックしてプログラムを修正することで、意図に沿った正確な動画作成を可能にする仕組み。"
    },
    {
      "id": "2611.31619",
      "title": "What a Forecasting Leaderboard Can Establish: Resolution Reporting for Zero-Shot Time-Series Models",
      "abstract": "A foundation model for time series is pretrained once and then asked to forecast series it has never seen, so the evidence for it is its score on held-out datasets. Such datasets are scarce, and a few public leaderboards carry most comparisons, yet none of them states how small a difference its datasets can detect. We call that quantity the resolution of a board and introduce Vernier, a tool that computes it from the files a board already publishes. Vernier also reports which entries a board cannot separate from its leader and whether its order changes when unrelated parties submit. GIFT-Eval resolves 6.8 rank places, and its displayed neighbours sit 0.91 apart. The ten places of its top ten hold fewer than two resolvable steps. fev-bench, Chronos Benchmark II and TIME show the same pattern: their resolution is 3.6 to 19 times the gap between neighbours. With each of its 2,554 series as an independent source, BOOM is the one board that resolves its top ten. Below the resolution the order depends on who else submitted: across four boards, rules that rank against the pool reversed 43 top-ten pairs with neither entry rerun, in one update in seven. Boards also do not record how much history a model receives. On 70 configurations, shortening it raised the error of three of four open models, two of them by 15%. We release Vernier, which runs this report with one command on any leaderboard that publishes per-dataset scores: https://github.com/therealram18/vernier",
      "upvotes": 57,
      "github_stars": 10,
      "github_repo": "https://github.com/therealram18/vernier",
      "project_page": "",
      "comments": 5,
      "org": "",
      "url": "https://huggingface.co/papers/2611.31619",
      "arxiv_url": "https://arxiv.org/abs/2611.31619",
      "title_ja": "予測リーダーボードが確立できること: ゼロショット時系列モデルの解像度報告",
      "summary_ja": "時系列予測モデルの評価サイトがどの程度の性能差を識別可能かを定量化するツール「Vernier」を提案。"
    },
    {
      "id": "2611.30662",
      "title": "WeMM-Ecom: Advancing Multimodal Content Understanding for WeChat E-Commerce",
      "abstract": "We present WeMM-Ecom, a family of multimodal large language models that deliver frontier e-commerce capabilities while achieving state-of-the-art general-purpose performance at their respective scales. The family spans five sizes, from a 0.8B dense model to a 35B mixture-of-experts model with 3B active parameters. Our training pipeline begins with two-stage continued pre-training that progressively raises the proportion of e-commerce data within a diverse multimodal data mixture, followed by hybrid-thinking post-training that combines on-policy distillation and reinforcement learning to support both non-thinking and thinking modes. For evaluation, we construct a comprehensive suite of 28 e-commerce benchmarks (23 in-house and five open-source) covering eight business scenarios and complement it with 64 public general-purpose benchmarks. On the e-commerce suite, WeMM-Ecom-35B-A3B surpasses substantially larger open-source flagship models, including Qwen3.8-Flash-Next, HY4, and DeepSeek-V4.1-Flash. On the general-purpose suite, every WeMM-Ecom model surpasses its similarly sized Qwen3.5 counterpart, with the lightweight variants (e.g., WeMM-Ecom-2B) showing clear advantages over leading lightweight models such as Qwen3.5-2B, MiniCPM-V-4.7-1B, and LFM3-VL-2B. Beyond benchmarks, WeMM-Ecom now powers hundreds of production use cases in WeChat, including catalog management, multimodal product search, and livestream commerce, serving billion-scale requests per day. We publicly release all model weights and detail our data curation, training recipe, and benchmark construction to facilitate future work on domain-specialized multimodal models. We have released the model weights and code to facilitate future research at https://github.com/Tencent/WeMM-Ecom.",
      "upvotes": 54,
      "github_stars": 77,
      "github_repo": "https://github.com/Tencent/WeMM-Ecom",
      "project_page": "https://huggingface.co/collections/tencent/wemm-ecom",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.30662",
      "arxiv_url": "https://arxiv.org/abs/2611.30662",
      "title_ja": "WeMM-Ecom: WeChat電子商取引のためのマルチモーダルコンテンツ理解の推進",
      "summary_ja": "EC特化データと強化学習を組み合わせ、EC業務に特化した高い推論・理解能力を持つマルチモーダルLLM群を開発。"
    },
    {
      "id": "2611.30962",
      "title": "Self-Evolving Evaluation Environments for Computer-Use Agents",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet their evaluation remains largely static. Existing benchmarks provide a strong foundation, but fixed difficulty ceilings, limited feature coverage, and coarse aggregate scores progressively weaken their discriminative and diagnostic value. We introduce CUA-SEE, a closed-loop evaluation environment that co-evolves tasks and executable verifiers from rollout evidence. It disentangles three objectives: benchmark evolution expands evaluation scope through cohort-calibrated difficulty and coverage growth; diagnostic evolution increases resolution through agent-conditional capability-boundary probes; and verifier evolution improves precision by translating changing requirements into state-grounded checkpoints with adversarial validation. Across multiple agents, applications, and rounds, CUA-SEE generates challenging, measurable tasks while preserving process-level evidence. Our results position adaptive evaluation as a scalable counterpart to self-evolving agents, continuously tracking what agents can do, where their boundaries lie, and how reliably progress is measured.",
      "upvotes": 52,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2611.30962",
      "arxiv_url": "https://arxiv.org/abs/2611.30962",
      "title_ja": "コンピュータ操作エージェントのための自己進化型評価環境",
      "summary_ja": "エージェントの成長に合わせて、評価タスクと検証プログラムを自動で進化させるクローズドループ型ベンチマーク。"
    },
    {
      "id": "2611.34941",
      "title": "Improving and Expanding Video Editing Capabilities Without Videos",
      "abstract": "Image editing models can follow a wide range of instructions, but video editing models still lag behind, limited in part by the difficulty of collecting paired source and edited videos. Is it possible to transfer advanced image editing capabilities to video editors without new paired videos? We introduce Image-to-Video Transfer (I2VT), which improves pretrained video editors and expands them to new editing tasks using an image editor. It enables efficient post-training with no architectural changes and no new videos, using only individual images. Our key idea is to let the video editor role-play as an image editor: it edits an image as a one-frame video, with the image editor guiding the video editor's predictions at each denoising step. Although the video editor sees only single images during training, at test time it applies the improved and expanded capabilities to whole video clips while preserving temporal consistency. To push the boundaries of video editing, we introduce OpenVE++, an extension of OpenVE-Bench that adds four new editing tasks useful for video production, including action changes, expression changes, body movements, and scene relighting. Our experiments across three different video editors show that I2VT improves existing editing capabilities and expands them to new tasks, and our models achieve state-of-the-art (SOTA) performance on both OpenVE-Bench and OpenVE++.",
      "upvotes": 46,
      "github_stars": 45,
      "github_repo": "https://github.com/HorizonWind2004/i2v-transfer",
      "project_page": "https://i2v-transfer.github.io/",
      "comments": 3,
      "org": "Carnegie Mellon University School of Computer Science",
      "url": "https://huggingface.co/papers/2611.34941",
      "arxiv_url": "https://arxiv.org/abs/2611.34941",
      "title_ja": "動画なしでの動画編集機能の改善と拡張",
      "summary_ja": "画像編集モデルの知識を動画編集モデルに転移させることで、追加の動画データなしに高度な動画編集を可能にする手法。"
    },
    {
      "id": "2611.29338",
      "title": "A Glimpse of Training VLMs as Foundation Models for Robotic Manipulation",
      "abstract": "Recently, GPT-6 Astra demonstrates strong generalization in robot control, yet limited disclosure of its training leaves open how such capabilities can be reproduced. We introduce nanoAstra, an approach to training vision-language models (VLMs) for generalizable manipulation that combines semantic action modeling with capability-preserving supervised fine-tuning (CP-SFT). nanoAstra represents robot behavior as semantic steps composed of reusable, parameterized action primitives, guided by explicit progress descriptions. Meanwhile, CP-SFT uses an explicit robot-specific system prompt to constrain manipulation outputs to a structured action space, aiming to focus adaptation on robot-specific contexts and promote specialization while minimizing interference with broader pretrained capabilities. With this formulation, we train nanoAstra on more than 5,000 hours of robot data together with general VQA data. On RoboTwin 2.0's randomized benchmark, nanoAstra-9B achieves a 17.8% zero-shot success rate, substantially outperforming advanced VLA and WAM baselines as well as similarly sized VLMs. With inference faster than the corresponding motion execution on a single H20 GPU, our model supports action-chunk-like streaming execution that overlaps inference with motion, reducing the robot's idle time from 35.0% to 6.9%.",
      "upvotes": 46,
      "github_stars": 35,
      "github_repo": "https://github.com/Hugo-AGI/nanoAstra",
      "project_page": "https://nanoastra.github.io",
      "comments": 2,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.29338",
      "arxiv_url": "https://arxiv.org/abs/2611.29338",
      "title_ja": "ロボット操作のための基盤モデルとしてのVLM訓練の展望",
      "summary_ja": "ロボットの挙動を意味的なステップで表現し、構造化された行動空間で学習させることで汎用的な操作能力を獲得。"
    },
    {
      "id": "2611.30254",
      "title": "Innata-0: A Native Embodied World System with Model-Agent Co-Design",
      "abstract": "The physical world is open-ended, dynamic, and partially observable. While foundation models have advanced embodied intelligence, standalone models struggle with long-horizon execution, and simply integrating models with agents may lead to inconsistencies between planning and physical control. To support reliable and adaptive behaviors in the physical world, we introduce Innata-0, a native embodied world system. Innata-0 jointly designs an embodied world-action model and an agent to combine their complementary strengths. The model, Innata-0-WAM, adopts a tri-tower Mixture-of-Transformers architecture that integrates understanding, prediction, and action generation. The agent, Innata-0-Agent, coordinates long-horizon execution through memory, verification, and recovery. A co-design protocol is further proposed to align model training with agent execution and leverage validated experiences to support subsequent adaptation and model improvement. Extensive evaluations demonstrate strong embodied capabilities across understanding, world prediction, and robotic manipulation. Innata-0 represents our first step toward physical intelligence, and we see it as the beginning of a much longer journey.",
      "upvotes": 45,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://baai-eai.github.io/innata-0/",
      "comments": 3,
      "org": "Beijing Academy of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2611.30254",
      "arxiv_url": "https://arxiv.org/abs/2611.30254",
      "title_ja": "Innata-0: モデル・エージェントの共設計によるネイティブな身体的ワールドシステム",
      "summary_ja": "世界予測モデルと制御エージェントを密に統合したアーキテクチャにより、物理世界での一貫した長期行動を実現。"
    },
    {
      "id": "2611.24636",
      "title": "Clover-35B-A3B-Preview Technical Report",
      "abstract": "We introduce Clover-35B-A3B-Preview (Clover), a mixture-of-experts diffusion language model with 35 billion total parameters and 3 billion activated parameters, supporting thinking-mode generation. Clover adapts Gated Delta Networks to block diffusion by combining recurrent memory of previously generated context with bidirectional softmax attention inside the current block. Historical memory readout competes with current-block tokens in a shared softmax, with learnable block-size calibration and a separate, zero-initialized right-context convolution branch. Clover leads the seven evaluated agent metrics, including 73.6 on SWE-bench Verified and 51.7 on Terminal-Bench 2.1. On internal agent workloads, it reaches a reported generation speed of 680 tokens/s using one NVIDIA GB300 GPU at BF16 precision and batch size one. We organize the evaluation around model quality, drafting and verification costs, and deployment under constrained memory. We also describe a decision-model variant that generates answers to related questions in one denoising pass. On an internal set of 500 groups, joint prediction raises question accuracy from 90.37% to 93.88% and all-correct group accuracy from 65.4% to 77.0%.",
      "upvotes": 45,
      "github_stars": 170,
      "github_repo": "https://github.com/DiffuSpace/Clover-35B-A3B-Preview",
      "project_page": "https://diffuspace.ai/blog/clover-35b/",
      "comments": 4,
      "org": "Diffuspace",
      "url": "https://huggingface.co/papers/2611.24636",
      "arxiv_url": "https://arxiv.org/abs/2611.24636",
      "title_ja": "Clover-35B-A3B-Preview 技術報告",
      "summary_ja": "拡散言語モデルと回帰メモリを組み合わせた350億パラメータのMoEモデルで、高度なエージェント推論性能を達成。"
    },
    {
      "id": "2611.33144",
      "title": "PyRUA-Dex: Learning Programmatic Policies for Dexterous Bimanual Manipulation with Coding Agents",
      "abstract": "Learning for dexterous manipulation is limited by the scarcity of high-quality demonstrations: retargeting from human video is imprecise, teleoperation gives no force feedback to the operator, and exoskeleton-based collection is hard to scale up. We present PyRUA-Dex, a framework that enables coding agents to develop dexterous manipulation through programmatic policy, without the need of demonstrations. The programmatic policy is developed in two stages: during exploration, multiple agents explore in parallel for task skills and ways to compose them, and a distilling agent condenses the successful attempts into a task library and one program. During refinement, this program is improved through randomized layouts for enhanced robustness and execution efficiency. In simulated environments, PyRUA-Dex achieves SOTA on Bench2Dex with a score of 72.9 and reaches 81.0% success on DexJoCo under full randomization, ahead of every trained policy on both benchmarks. In real world experiments on a bimanual platform with two 22-DoF hands, PyRUA-Dex learns to play piano, write calligraphy, and other tasks efficiently: learning a new piece from sheet music takes as little as 30 minutes. These results suggest that PyRUA-Dex is an effective framework for developing dexterous manipulation policies with coding agents in the absence of high quality dexterous manipulation demonstrations.",
      "upvotes": 43,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://vme0522.github.io/PyRUA-Dex/",
      "comments": 3,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.33144",
      "arxiv_url": "https://arxiv.org/abs/2611.33144",
      "title_ja": "PyRUA-Dex: コーディングエージェントを用いた巧緻な双腕操作のためのプログラム方策の学習",
      "summary_ja": "実演データを用いず、エージェントが試行錯誤して作成したプログラムを洗練させることで高度な指先操作を学習。"
    },
    {
      "id": "2611.26954",
      "title": "Learning Video Foresight Reasoning from Unlabeled Videos via On-Policy Self-Distillation",
      "abstract": "Video foresight reasoning requires vision-language models to anticipate future events or next actions from currently observed videos. Existing methods fit future captions, rationales, or full visual states, but face two limitations. First, they rely on annotations or external large models for supervision, limiting scalability. We address this with an on-policy self-distillation framework that turns past-future video pairs into a natural self-supervised signal without extra annotations or LLM supervision. Second, they treat the whole future clip as equally valuable, although most of it is irrelevant context information. We address this by defining a foresight score, from which we obtain a contrastive privilege advantage that drives the model to learn the most valuable future information. Since the score is intractable, we optimize a tractable lower-bound surrogate that interpolates this advantage, computed between the true and a random reference future, with a teacher-student distillation advantage; together, they amplify decision-relevant content information and suppress irrelevant context information. We call the resulting framework Future-OPSD. On open-ended prediction and closed-ended planning, Future-OPSD improves base models by up to 14.2 and 15.9 points without compromising general video understanding. Code will be available at https://jingchensun.github.io/future-opsd/",
      "upvotes": 43,
      "github_stars": 16,
      "github_repo": "https://github.com/Jingchensun/future-opsd",
      "project_page": "https://jingchensun.github.io/future-opsd/",
      "comments": 3,
      "org": "University at Buffalo",
      "url": "https://huggingface.co/papers/2611.26954",
      "arxiv_url": "https://arxiv.org/abs/2611.26954",
      "title_ja": "ラベルなし動画からのオンポリシー自己蒸留による動画先読み推論の学習",
      "summary_ja": "アノテーションなしで動画の過去と未来を比較し、重要な変化のみを予測対象とするスコアリング手法で効率的に学習。"
    },
    {
      "id": "2611.26389",
      "title": "ViDecide: Teaching Video Diffusion Models to Reason and Plan Step by Step",
      "abstract": "Current leading video generation models can synthesize highly realistic videos, while still frequently violating physical and logical constraints in multi-step reasoning and planning, even after training with large-scale reasoning data or existing diffusion RL methods. We attribute these failures to the conventional video training paradigm, which treats a solution as a fixed-length clip rather than a chain of decisions. We present ViDecide, a decision-centric framework that trains video diffusion models to predict state transitions causally and decide when to stop, with a decision-focused training schedule. We further propose Corrective Fine-tuning (CFT), which corrects failed decisions by mapping their noise to the model's own successful continuations, achieving stable improvement without policy-gradient optimization. Across abstract games, planning tasks, and a new benchmark of multi-step robot planning, ViDecide achieves an average strict success rate of 83.8%, far above 23.3% for standard fine-tuning and 67.8% for the strongest prior method, and generalizes to larger puzzles and unseen layouts. Our framework therefore unlocks greater potential for video generation models as reliable reasoners and planners in the visual world. Project page: https://kevin-thu.github.io/ViDecide.",
      "upvotes": 42,
      "github_stars": 18,
      "github_repo": "https://github.com/Kevin-thu/ViDecide",
      "project_page": "https://kevin-thu.github.io/ViDecide/",
      "comments": 3,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.26389",
      "arxiv_url": "https://arxiv.org/abs/2611.26389",
      "title_ja": "ViDecide: 動画拡散モデルに段階的な推論と計画を教える",
      "summary_ja": "動画生成を決定の連鎖と捉え、状態遷移を因果的に予測し適切なタイミングで終了を判断するよう学習させる手法。"
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
      "title_ja": "S-Mind: 空間知能のためのマルチビュー幾何学の内部化",
      "summary_ja": "複数視点の統合や視点変換能力をモデル内に「空間トークン」として構築し、高い3D空間推論能力をMLLMに付与。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Spec²R Repairs Supervised Vision Transformers to Boost Robustness by 23.7%",
      "summary": "A spectral analysis pinpoints MLP layers as the reason supervised Vision Transformers lack DINO-style object-aligned features, and fixes it with lightweight fine-tuning. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/paper/spec2r-repairs-supervised-vision-transformers-to-boost-robustness-by-23-7?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T11:09:19+09:00",
      "title_ja": "Spec²RによるVision Transformerの頑健性向上",
      "summary_ja": "MLP層のスペクトル解析と微調整により、ViTの物体整合機能を改善し頑健性を23.7%向上。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Hearthscale Shrinks MiniMax H3-Image's 33B Model to Fit Consumer GPUs",
      "summary": "Hearthscale shipped GGUF quantizations of MiniMax H3-Image that squeeze the 33B diffusion transformer into 8.8 to 21.4 GB for local 4K generation. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/model/hearthscale-shrinks-minimax-h3-image-s-33b-model-to-fit-consumer-gpus?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T10:09:07+09:00",
      "title_ja": "HearthscaleによるMiniMax H3-Imageの軽量化",
      "summary_ja": "33BモデルをGGUF量子化し、8.8〜21.4GBのVRAMで4K画像生成を可能にする。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Daniel White's Sprite Stacking Turns Four Pixel-Art Views Into Rotatable 3D Game Assets",
      "summary": "A new agent skill pipes four pixel art views into a voxel carver and spits out spinnable fake-3D sprites, with a browser viewer and export sheet included. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/repo/daniel-white-s-sprite-stacking-turns-four-pixel-art-views-into-rotatable-3d?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T09:09:04+09:00",
      "title_ja": "Daniel WhiteのSprite Stackingによる3Dアセット生成",
      "summary_ja": "4方向のピクセルアートから、回転可能な疑似3Dボクセル資産を生成・エクスポートする。"
    },
    {
      "lab": "AlphaSignal",
      "title": "NYU's Look Back Beats REINFORCE by 57% Using Counterfactual World Models",
      "summary": "A new policy gradient method uses counterfactual world models to separate action effects from environmental luck, cutting variance in noisy, complex environments. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/paper/nyu-s-look-back-beats-reinforce-by-57-using-counterfactual-world-models?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T08:09:02+09:00",
      "title_ja": "NYUによるLook Back手法：REINFORCEを57%上回る性能",
      "summary_ja": "反事実的世界モデルを用いて環境の運と行動の影響を分離し、複雑な環境での分散を抑制。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Microsoft Drops WavLM Base+ SV to Verify Speakers With 0.60% Error Rate",
      "summary": "Microsoft's WavLM Base+ fine-tuned for speaker verification is available on Hugging Face, giving builders a drop-in encoder for voice identity tasks. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/model/microsoft-drops-wavlm-base-sv-to-verify-speakers-with-0-60-error-rate?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T07:08:59+09:00",
      "title_ja": "Microsoftが話者確認モデルWavLM Base+ SVを公開",
      "summary_ja": "0.60%の誤り率を達成した、Hugging Faceで利用可能な話者識別用エンコーダー。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenCode Rune Rebuilds Its Desktop Client in Rust for 100x Faster Performance",
      "summary": "OpenCode ships an early dev build of its Rust-based desktop client, ditching Electron for native GPU rendering across Mac, Windows, Linux, and the browser. Get AlphaSignal’s 5-minute AI brief, free every weekday morning",
      "url": "https://alphasignal.ai/news/opencode-rune-rebuilds-its-desktop-client-in-rust-for-100x-faster-performance?utm_source=rss&utm_medium=feed",
      "published": "2026-11-28T06:51:53+09:00",
      "title_ja": "OpenCode RuneのRustによるデスクトップクライアント刷新",
      "summary_ja": "ElectronからRust製ネイティブGPUレンダリングに移行し、100倍の高速化を実現。"
    },
    {
      "lab": "Hugging Face",
      "title": "Taking Trainium3 to the Track: Generating Videos with LTX-2.5",
      "summary": "",
      "url": "https://huggingface.co/blog/video-trainium3",
      "published": "2026-11-27T09:00:00+09:00",
      "title_ja": "Trainium3を用いたLTX-2.5による動画生成",
      "summary_ja": "AWSの最新AIチップTrainium3を活用し、LTX-2.5モデルでの動画生成を実証。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing the llama.cpp benchmark dashboard for AMD Ryzen and Radeon",
      "summary": "",
      "url": "https://huggingface.co/blog/ggml-org/llamacpp-amd-bench",
      "published": "2026-11-26T20:37:17+09:00",
      "title_ja": "AMD Ryzen/Radeon向けllama.cppベンチマークダッシュボード",
      "summary_ja": "AMD製CPU・GPUにおけるllama.cppの性能を可視化するダッシュボードの紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Building on Nemotron 3.5 Parse: Open Data, Fine-Tuning, and Faster Inference",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin",
      "published": "2026-11-26T14:05:36+09:00",
      "title_ja": "Nemotron 3.5 Parseの活用：オープンデータと高速推論",
      "summary_ja": "Nemotron 3.5 Parseを用いたデータ解析、微調整、推論の高速化手法を解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Swarms, Flocks, Gangs: How to build, train, and evaluate multi-agent systems",
      "summary": "",
      "url": "https://huggingface.co/blog/training-swarms",
      "published": "2026-11-26T09:00:00+09:00",
      "title_ja": "マルチエージェントシステムの構築・訓練・評価ガイド",
      "summary_ja": "SwarmsやFlocks等のマルチエージェント系をどう構築し評価するかについての解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Where scientists draw the line on AI agents",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents",
      "published": "2026-11-26T03:52:55+09:00",
      "title_ja": "科学者がAIエージェントに引く境界線",
      "summary_ja": "科学研究においてAIエージェントの活用をどこまで許容すべきかの指針や議論の紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Verifiable Social Reasoning for LLM Assistants",
      "summary": "Generative AI",
      "url": "https://research.google/blog/verifiable-social-reasoning-for-llm-assistants/",
      "published": "2026-11-26T02:10:27+09:00",
      "title_ja": "LLMアシスタント向けの検証可能な社会的推論",
      "summary_ja": "生成AIにおいて、検証可能な形での社会的推論をLLMに行わせるための手法の紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "An Indic Voice Agent with CUGA",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga",
      "published": "2026-11-25T19:22:09+09:00",
      "title_ja": "CUGAを用いたインド音声エージェント",
      "summary_ja": "CUGAテクノロジーを活用した、インドの諸言語に対応する音声対話エージェントの構築。"
    },
    {
      "lab": "Google DeepMind",
      "title": "From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity",
      "summary": "Mass Spec Skills empowers scientists using Google Antigravity to interpret tandem mass spectra.",
      "url": "https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/",
      "published": "2026-11-24T22:07:53+09:00",
      "title_ja": "Google Antigravityによる質量分析スキルでの分子特定",
      "summary_ja": "タンデム質量分析スペクトルの解釈を支援し、科学者が分子構造を特定するのを助ける。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT-6 models demonstrate intrinsic protein-design capabilities",
      "summary": "GPT-6 models design protein structures and sequences using reasoning and code. Lab tests found evidence of binding across five targets.",
      "url": "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities",
      "published": "2026-11-24T22:00:00+09:00",
      "title_ja": "GPT-6モデルによるタンパク質設計能力の検証",
      "summary_ja": "GPT-6が推論とコードを用いてタンパク質を設計。実験で5つの標的への結合が確認された。"
    },
    {
      "lab": "OpenAI",
      "title": "Searching for distant planets with Astra",
      "summary": "See how two amateur astronomers used Codex and Astra to find potential exoplanets in public data from NASA’s Kepler and TESS space telescopes.",
      "url": "https://openai.com/index/searching-for-distant-planets-with-astra",
      "published": "2026-11-24T20:00:00+09:00",
      "title_ja": "Astraを用いた遠方の惑星探索",
      "summary_ja": "CodexとAstraを活用し、NASAの公開データからアマチュアが系外惑星候補を発見。"
    },
    {
      "lab": "OpenAI",
      "title": "How Intentful uses dots to make more time for growth",
      "summary": "Marina Petrova’s dot Aria helps research websites and build proposals, while proactively flagging messages and resolving issues.",
      "url": "https://openai.com/business/customer-stories/intentful-dots",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "Intentfulの「dot」による成長時間の創出",
      "summary_ja": "AIのAriaが調査、提案書作成、重要メッセージの通知等を代行し、業務を効率化する。"
    },
    {
      "lab": "OpenAI",
      "title": "How iFood scales coding agents across 15,000 repositories",
      "summary": "",
      "url": "https://openai.com/business/customer-stories/ifood",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "iFoodによる15,000リポジトリへのコーディングエージェント適用",
      "summary_ja": "大規模なコードベースにおいて、AIコーディングエージェントをいかに展開・拡張するか。"
    },
    {
      "lab": "OpenAI",
      "title": "Clay helps sales teams win with Codex and ChatGPT",
      "summary": "ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 models handling the reasoning.",
      "url": "https://openai.com/business/customer-stories/clay-plugins-openai",
      "published": "2026-11-24T09:00:00+09:00",
      "title_ja": "ClayによるCodexとChatGPTを活用したセールス支援",
      "summary_ja": "GPT-6の推論機能等を使い、取引調査やデータに基づく営業戦略の立案を自動化する。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and Cisco introduce Shirudo",
      "summary": "OpenAI and Cisco introduce Shirudo, an open-source runtime for Linux. It helps teams protect running systems while they roll out patches.",
      "url": "https://openai.com/index/introducing-shirudo",
      "published": "2026-11-24T06:20:00+09:00",
      "title_ja": "OpenAIとCiscoによるLinux向けランタイム「Shirudo」",
      "summary_ja": "パッチ適用中の実行システムを保護する、オープンソースのLinux向けランタイム。"
    },
    {
      "lab": "Google Research",
      "title": "Supercharging transformer residual connections",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/supercharging-transformer-residual-connections/",
      "published": "2026-11-24T02:21:12+09:00",
      "title_ja": "Transformerの残差接続の強化",
      "summary_ja": "Transformerアーキテクチャにおける残差接続を改良する理論的・アルゴリズム的アプローチ。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Finding faster quantum algorithms with agents and formal verification",
      "summary": "Using agent teams and formal verification to improve quantum algorithms for fusion and chemistry.",
      "url": "https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/",
      "published": "2026-11-24T01:59:40+09:00",
      "title_ja": "エージェントと形式検証による量子アルゴリズムの高速化",
      "summary_ja": "核融合や化学分野の量子アルゴリズムを、AIエージェントと検証技術で改善する。"
    },
    {
      "lab": "Google Research",
      "title": "How Google Duplex evolved to also call businesses for you in Gemini",
      "summary": "Generative AI",
      "url": "https://research.google/blog/how-google-duplex-evolved-to-also-call-businesses-for-you-in-gemini/",
      "published": "2026-11-21T08:30:30+09:00",
      "title_ja": "Google DuplexのGeminiへの進化と店舗電話代行",
      "summary_ja": "Geminiにおいて、ユーザーに代わってビジネス店舗へ電話をかける機能の進化を紹介。"
    },
    {
      "lab": "Apple ML",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "summary": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming…",
      "url": "https://machinelearning.apple.com/research/depth-pro-2-monocular",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Depth Pro 2：鮮明で一貫性のある単眼深度推定",
      "summary_ja": "画像と動画から、境界が鮮明で時間的一貫性のある正確な深度マップをフル解像度で生成。"
    },
    {
      "lab": "Google Research",
      "title": "A game you cannot win unless you have a quantum computer",
      "summary": "Quantum",
      "url": "https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/",
      "published": "2026-11-20T05:03:00+09:00",
      "title_ja": "量子コンピュータなしでは勝てないゲーム",
      "summary_ja": "量子的な優位性を示すための、量子計算機のみが勝利可能なゲーム理論的課題の紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの導入",
      "summary_ja": "Googleの最新AIモデルシリーズ「Gemini 4 Neon」の発表と特徴の紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4の提供開始",
      "summary_ja": "最新の生成モデルGenie 4が利用可能になり、新たな機能や性能が提供される。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・拡張可能な潜在3D表現",
      "summary_ja": "計算コストを抑えつつ潜在容量を拡張し、複雑な3Dオブジェクトの微細な詳細を再現。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの「/teamwork」による科学・工学の推進",
      "summary_ja": "教育革新において、Antigravityの連携機能を用いて科学・工学研究を加速させる。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの導入",
      "summary_ja": "Googleの次世代AIモデル「Gemini 4 Hydrogen」の発表と機能概要。"
    }
  ]
};
