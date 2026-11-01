window.papersData = {
  "updated_at": "2026-11-01 09:47 JST",
  "arxiv": [
    {
      "id": "2610.40503",
      "title": "Algebraic World Model: From Exploration to Proofs",
      "url": "https://arxiv.org/abs/2610.40503",
      "pdf": "https://arxiv.org/pdf/2610.40503",
      "authors": [
        "Guancheng Pan",
        "Qixin Tan",
        "Yang Yuan",
        "Andrew Chi-Chih Yao"
      ],
      "categories": [
        "cs.AI",
        "cs.LO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "29 pages, 9 figures, 14 tables. Project page: https://ephemeral6.github.io/awm-site/. Ancillary files contain the Lean 4 model of the running example lp85",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "Algebraic World Model (AWM), a framework that turns interaction with unfamiliar environments into explicit mathematical models supporting formal reasoning.",
      "signals": [],
      "headline": "未知の環境の法則を数学的な世界モデルとして抽出し、Lean 4で到達不可能性を証明",
      "what": "Algebraic World Model (AWM) を導入し、環境との対話から実行可能なPython仮説を生成し、それを圏論的変換によって簡略化した上でLean 4形式の証明に変換します。これにより、単なるシミュレーションを超えた厳密な形式論理による推論を可能にします。",
      "enables": "既存のLLM（Claude Opus等）が解けなかった「到達不可能なゲームレベル」において、全試行でカーネルチェック済みの不可能性証明を生成しました。",
      "why_it_matters": "AIが未知のルールを自ら形式化し、数学的な厳密さを持って「何が不可能か」を証明できることを示した重要な成果です。",
      "tags": [
        "世界モデル",
        "形式検証",
        "数学的推論"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38334",
      "title": "Optimal Regret for Communication-Efficient Decentralized Online Learning",
      "url": "https://arxiv.org/abs/2610.38334",
      "pdf": "https://arxiv.org/pdf/2610.38334",
      "authors": [
        "Sifan Yang",
        "Wenhao Yang",
        "Wei Jiang",
        "Yuanyu Wan",
        "Lijun Zhang"
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
        "new",
        "sota"
      ],
      "star_quote": "we first develop Ascent-gossip, which combines an online compression strategy with a Chebyshev recursion and attains a faster consensus rate than existing compressed gossip methods.",
      "signals": [],
      "headline": "通信効率の高い分散型オンライン学習において最適なリグレット下界を達成",
      "what": "通信コストを抑えるためのメッセージ圧縮を伴う分散型オンライン凸最適化において、Ascent-gossipという新しいコンセンサス手法を提案しました。チェビシェフ再帰とオンライン圧縮を組み合わせることで、既存手法よりも高速にネットワーク全体の情報を共有します。",
      "enables": "凸関数および強凸関数において、理論的な下界と一致する（対数因子を除き最適な）リグレット境界を達成しました。",
      "why_it_matters": "分散環境での機械学習における通信ボトルネックを解消しつつ、理論的に最良の学習効率を保証した点が重要です。",
      "tags": [
        "分散学習",
        "最適化理論",
        "通信効率"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38255",
      "title": "ParaTTT: Parallelizing Test-Time Training Layers with Deep Memories",
      "url": "https://arxiv.org/abs/2610.38255",
      "pdf": "https://arxiv.org/pdf/2610.38255",
      "authors": [
        "Noel Loo",
        "Neehal Tumma",
        "T. Konstantin Rusch",
        "Mathias Lechner",
        "Alexander Amini",
        "Daniela Rus"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "34 pages, 7 figures. Project repository: https://github.com/ntumm120/paraTTT",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce ParaTTT (PTTT), an algorithm for parallelizing arbitrarily deep nonlinear memories by iteratively refining estimates of the inner-loop gradient trajectory.",
      "signals": [],
      "headline": "テストタイムトレーニング層の並列化により、非線形メモリの推論と学習を大幅に高速化",
      "what": "テストタイムトレーニング（TTT）層の非線形メモリ更新を、隠れ層の勾配軌跡を反復的に推定することで並列化するParaTTTを提案しました。順方向パス、Gated Delta Ruleパス、逆方向パスの3段階をチャンク並列で実行することで、シーケンシャルな更新を回避しています。",
      "enables": "従来のTTT-MLPと比較して、4Kコンテキストでの軌跡評価を32倍、340Mパラメータモデルの訓練を4.9倍高速化しました。",
      "why_it_matters": "Mamba-2などの線形再帰モデルよりも表現力が高い非線形メモリを、Transformerに近い効率で並列実行できる道を開いた技術です。",
      "tags": [
        "テストタイムトレーニング",
        "並列計算",
        "LLM"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39435",
      "title": "Verifiable LLM-Guided Focal SMT Solving for Quantified Arrays",
      "url": "https://arxiv.org/abs/2610.39435",
      "pdf": "https://arxiv.org/pdf/2610.39435",
      "authors": [
        "Kunhang Lv",
        "Rui Han",
        "Fuqi Jia",
        "Yuhang Dong",
        "Feifei Ma",
        "Jian Zhang"
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
        "cap"
      ],
      "star_quote": "LinguaArray solves up to 69.1% of instances and increases solved-instance counts by 105%--397%",
      "signals": [],
      "headline": "LLMの推論をSMTソルバの検証プロセスに組み込み、配列論理の解法能力を向上",
      "what": "LLMに問題のセマンティックな構造を分析させ、重要な項（Semantic Focus Set）を提案させることでソルバをガイドするLinguaArrayを提案しました。LLMの出力はそのまま信じるのではなく、従来のSMTソルバが検証可能な範囲でのみ使用されます。",
      "enables": "既存のSMTソルバ単体では解けなかった問題を含め、解決可能なインスタンス数を105%から397%増加させました。",
      "why_it_matters": "LLMの「直感」をソルバの「厳密な検証」と組み合わせることで、信頼性を損なわずに形式的手法の限界を拡張しています。",
      "tags": [
        "LLM",
        "形式検証",
        "SMTソルバ"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.40002",
      "title": "How Much Should a VLA Trust Its Reasoning? Step-Level Guidance as a Measured Action-Value Function",
      "url": "https://arxiv.org/abs/2610.40002",
      "pdf": "https://arxiv.org/pdf/2610.40002",
      "authors": [
        "Dabin Seo",
        "Eunhyek Joa"
      ],
      "categories": [
        "cs.RO",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "6 pages, 2 figures, 4 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "sets a new state of the art among published methods: 8.135159 rater feedback score",
      "signals": [],
      "headline": "VLAポリシーの推論ステップに対する信頼度を、Q学習ベースのガイダンスで適応的に制御",
      "what": "推論トレースを生成するVision-Language-Action (VLA) モデルにおいて、推論が行動決定に与える影響度（ガイダンスの重み）を状況に応じて調整するQ-adaptive guidanceを提案しました。重みの選択をマルコフ決定過程と見なし、批判者（Critic）を用いて最適な重みを推定します。",
      "enables": "Waymoの自動運転ベンチマークにおいて、固定の重みや従来の強化学習手法を上回るSOTA（最先端）のフィードバックスコア8.13を達成しました。",
      "why_it_matters": "LLMの「推論（思考）」が常に正しいとは限らないという前提に立ち、推論をどれだけ行動に反映させるべきかを理論的に最適化した点が特徴です。",
      "tags": [
        "VLAモデル",
        "自動運転",
        "強化学習"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.40528",
      "title": "NEOPIC: A Neural Operator Framework for Particle-based Kinetic Plasma Simulations",
      "url": "https://arxiv.org/abs/2610.40528",
      "pdf": "https://arxiv.org/pdf/2610.40528",
      "authors": [
        "Sriramkrishnan Muralikrishnan",
        "Chelsea Maria John",
        "Jeffrey Kelling",
        "Michael Bussmann",
        "Robert Speck",
        "Paul Gibbon"
      ],
      "categories": [
        "math.NA",
        "cs.LG",
        "cs.NA",
        "physics.comp-ph",
        "physics.plasm-ph"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "84 pages, 19 figures, 3 tables. Code: https://github.com/srikrrish/operator_learning (tags neopic-arxiv-v1, neopic-arxiv-v1-nufft); analysis scripts: https://github.com/NEOPIC-framework/neopic-paper-scripts",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "a neural operator that acts directly on the empirical measure of the particles, rather than on a grid",
      "signals": [],
      "headline": "格子を使わず粒子データを直接扱うニューラルオペレータによるプラズマシミュレーション",
      "what": "プラズマ粒子のシミュレーションにおいて、格子（グリッド）を介さず粒子の測度から直接電磁場を計算するNEOPICを提案しました。粒子ノイズをエリアシングなしで扱い、計算量は粒子数に対して線形（O(Np)）にスケールします。",
      "enables": "2次元および3次元の電磁プラズマ解析において、トレーニング期間の2倍の時間ステップまで安定して計算を継続できることを確認しました。",
      "why_it_matters": "従来のParticle-in-Cell手法における格子の依存性を排除し、物理現象のノイズを正則化として利用する新しい物理学習の枠組みを提供します。",
      "tags": [
        "科学計算",
        "プラズマ物理",
        "ニューラルオペレータ"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39302",
      "title": "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
      "url": "https://arxiv.org/abs/2610.39302",
      "pdf": "https://arxiv.org/pdf/2610.39302",
      "authors": [
        "Randall Balestriero",
        "Yann LeCun"
      ],
      "categories": [
        "cs.AI",
        "cs.CV",
        "stat.ML"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 53,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We turn the hypothesis into a theorem. First, we prove a \\emph{Platonic Representation Theorem}",
      "signals": [
        "HF ▲53"
      ],
      "headline": "マルチモーダルモデルが「プラトン的な世界表現」に収束するための理論的証明",
      "what": "異なるモダリティ（画像とテキスト等）のモデルが同じ世界表現を学習するという「プラトン的表現仮説」を、Joint-Embedding Predictive Architectures (JEPA) を用いて定理として証明しました。適切な「良い視点（ペア）」があれば、LLMのような次トークン予測よりも効率的に共有表現を学習できることを示しています。",
      "enables": "次トークン予測に比べて42倍少ないサンプル数で同等の位置合わせを実現し、画像ペアなしでImageNet-100のゼロショット精度64%を達成しました。",
      "why_it_matters": "モデルを巨大化させるだけでなく、データの「視点」の与え方が表現の質の決定要因であることを理論と実験の両面で示した重要な知見です。",
      "tags": [
        "表現学習",
        "マルチモーダル",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.37818",
      "title": "GOFish: Full Field-of-View Gaussian Splatting and Mesh Extraction",
      "url": "https://arxiv.org/abs/2610.37818",
      "pdf": "https://arxiv.org/pdf/2610.37818",
      "authors": [
        "Allen Tu",
        "Meher Gitika Karumuri",
        "Shifan Zhu",
        "Hailing Wang",
        "Yen-Liang Lin",
        "David Held"
      ],
      "categories": [
        "cs.CV",
        "cs.GR",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://3dgofish.github.io/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "GOFish improves PSNR over the best prior method by 2.28 and 1.97 dB, respectively.",
      "signals": [],
      "headline": "魚眼画像から180度を超える広視野角の3D Gaussian Splattingとメッシュ抽出を実現",
      "what": "魚眼レンズ特有の歪みや周辺減光を考慮したGOFishを提案し、180度を超える視野角（FoV）のレンダリングとメッシュ抽出を同時に行います。Calibrated Mip FilteringとWide-Angle Appearance Modelingを導入することで、広角画像特有のボケや光量低下が再構成品質に悪影響を与えるのを防いでいます。",
      "enables": "200度以上の広視野角ベンチマークにおいて、従来手法をPSNRで最大2.28dB上回り、LiDARなしで衝突判定が可能なデジタルツインをリアルタイムで構築できます。",
      "why_it_matters": "従来のGaussian Splattingはピンホールカメラモデルに依存していましたが、ロボットや自動運転で一般的な魚眼レンズの全視野を直接扱えるようになった点が重要です。",
      "tags": [
        "3D Gaussian Splatting",
        "コンピュータビジョン",
        "デジタルツイン"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.37823",
      "title": "Learning Without Clocks: Partition-Invariant Neural Network",
      "url": "https://arxiv.org/abs/2610.37823",
      "pdf": "https://arxiv.org/pdf/2610.37823",
      "authors": [
        "Han Wang",
        "Jingyuan Bao",
        "Juntao Wu",
        "Saiao Zhou",
        "Yuman Nie"
      ],
      "categories": [
        "cs.LG",
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
      "star_quote": "We construct the minimal TM layer, a learnable, provably Lipschitz generalization of the Hassenstein-Reichardt correlator",
      "signals": [],
      "headline": "サンプリングの間隔や順序に依存しない、時間連続的なイベント駆動型ニューラルネットワーク",
      "what": "イベントカメラ等の非同期データを扱うため、イベント間の時間差を閉じた形式で記述し、処理順序や時間刻みに依存しないPartition-Invariant Neural Networkを提案しました。同時発生イベントの交換可能性（Commutation）を数学的に証明し、これを満たすClock-Free Event（CFE）レイヤーを構築しています。",
      "enables": "音声コマンド認識などのタスクにおいて、従来の加法的な状態更新モデルを最大30.6ポイント上回る精度を達成しました。",
      "why_it_matters": "従来はイベントデータを固定時間のフレームに区切る必要がありましたが、本手法は時間解像度の変化に対してロバストであり、物理的な時間スケールに直接対応した学習を可能にします。",
      "tags": [
        "イベントカメラ",
        "ニューラルネットワーク",
        "時系列データ"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38084",
      "title": "CADENCE: Distributional Next-Transaction Forecasting for Business Cash-Flow Underwriting",
      "url": "https://arxiv.org/abs/2610.38084",
      "pdf": "https://arxiv.org/pdf/2610.38084",
      "authors": [
        "Alexander Wu",
        "Jingchao Huang"
      ],
      "categories": [
        "cs.LG",
        "q-fin.RM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 9 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "CADENCE improves one-day timing accuracy by 93.3% and next-event F1 by 6.7%",
      "signals": [],
      "headline": "中小企業のキャッシュフロー予測をカレンダー対応のTransformerで高精度化",
      "what": "取引をトークンとして扱い、次回の支払い金額とタイミングの確率分布を予測するカレンダー対応モデルCADENCEを開発しました。外部ラベル付け器と固定されたテキストエンコーダを組み合わせることで、履歴が短い取引先に対してもセマンティックな情報を活用して予測を行います。",
      "enables": "既存のFFTベースのベースラインと比較して、1日のタイミング精度を93.3%向上させ、融資承認率を18.2%向上させつつ損失率を維持することに成功しました。",
      "why_it_matters": "不規則なスケジュールを持つ中小企業の収支を、解釈可能な確率分布として出力できるため、金融の実務における与信判断の自動化に直接貢献します。",
      "tags": [
        "金融AI",
        "Transformer",
        "予測モデル"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38439",
      "title": "Predict the Reward, Not the World: World Reward Models for ML Agents",
      "url": "https://arxiv.org/abs/2610.38439",
      "pdf": "https://arxiv.org/pdf/2610.38439",
      "authors": [
        "Yuxiao Lee",
        "Zherui Yang",
        "Fan Liu",
        "Hao Liu"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose World Reward Models (WRMs), which learn from real execution results to choose directly which candidate will perform better, without predicting any intermediate outcome.",
      "signals": [],
      "headline": "実行結果そのものではなく、報酬の優劣を直接予測する「World Reward Models」",
      "what": "プログラム生成エージェントにおいて、コードの実行結果（出力）を予測する代わりに、複数の候補のうちどちらが優れた報酬を得るかを直接予測する手法（WRM）を提案しました。ForeCriticという9Bパラメータのモデルを構築し、実行結果のペアを用いて学習させています。",
      "enables": "エージェントのタスク実行時間を4.4〜7.5倍短縮しつつ、成功スコアを維持または向上させることに成功しました。",
      "why_it_matters": "重いコード実行をシミュレートする「世界モデル」の代わりに、意思決定に特化した「報酬モデル」を用いることで、LLMエージェントの探索効率を劇的に改善します。",
      "tags": [
        "LLMエージェント",
        "報酬モデル",
        "コード生成"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38657",
      "title": "Explore Where It Matters: Targeted Exploration for Efficient Rover Adaptation",
      "url": "https://arxiv.org/abs/2610.38657",
      "pdf": "https://arxiv.org/pdf/2610.38657",
      "authors": [
        "Jacob Levy",
        "Arthur Bouton",
        "Tristan D. Hassler",
        "Hari Nayar",
        "David Fridovich-Keil"
      ],
      "categories": [
        "cs.RO",
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Conference on Robot Learning 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "TERRA reaches approximately 90% slope-climbing success within five trials under severe out-of-distribution pretraining conditions",
      "signals": [],
      "headline": "報酬に関連するモデル誤差を優先的に探索し、惑星探査ローバーの不整地適応を高速化",
      "what": "オンライン適応フレームワークTERRAを提案し、報酬に直結する予測誤差がどこで発生するかを予測して探索をガイドします。シミュレーションで学習した世界モデルを、展開時に得られる少数のデータで報酬加重損失を用いて更新します。",
      "enables": "Marsシミュラント（火星模擬土壌）の斜面において、実機のローバーが3〜5回の試行で適切な locomotion（移動）を獲得することに成功しました。",
      "why_it_matters": "試行錯誤の回数が限られる極限環境において、タスク遂行に不可欠なデータのみを効率的に収集してモデルを修正できる実用的な手法です。",
      "tags": [
        "ロボティクス",
        "オンライン適応",
        "強化学習"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38210",
      "title": "GAAC: Lossless KV Compression for Bandwidth-Efficient LLM Inference on Personal Devices",
      "url": "https://arxiv.org/abs/2610.38210",
      "pdf": "https://arxiv.org/pdf/2610.38210",
      "authors": [
        "Yipin Guo",
        "Arun M George",
        "Siddharth Joshi"
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
      "star_quote": "GAAC achieves 1.405-1.407$\\times$ lossless BF16 KV compression.",
      "signals": [],
      "headline": "LLM推論時のKVキャッシュを可逆圧縮し、メモリ帯域のボトルネックを解消",
      "what": "指数の冗長性を利用したGAAC（Group-Adaptive Additive Codec）という可逆圧縮システムを提案しました。BF16形式の値を1ビットも損なうことなく圧縮したまま保持し、アテンション計算時にタイル単位でオンザフライ復元を行います。",
      "enables": "BF16のKVキャッシュを約1.4倍に可逆圧縮し、NVIDIA GPU上でデコード速度を最大1.15倍、スループットを13-29%向上させました。",
      "why_it_matters": "メモリ容量が限られる個人用デバイスやエッジ環境において、精度を落とさずに長文脈のLLM推論を高速化できる実用的な技術です。",
      "tags": [
        "LLM推論",
        "KVキャッシュ",
        "データ圧縮"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38687",
      "title": "Deogen: Automatic Benchmark Generation for Reasoning over Policies",
      "url": "https://arxiv.org/abs/2610.38687",
      "pdf": "https://arxiv.org/pdf/2610.38687",
      "authors": [
        "Sam Kouteili",
        "William Liang",
        "Keeran Murray",
        "Adriana Zhou",
        "Ramesh Viswanathan",
        "Scott Shapiro"
      ],
      "categories": [
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
        "new"
      ],
      "star_quote": "DeoGen, a scalable, automatic, and parametrizable benchmark generator for deontic reasoning.",
      "signals": [],
      "headline": "政策やルールに基づく法的推論能力を評価するベンチマークの自動生成フレームワーク",
      "what": "DeoGenは、ルールを1次論理に形式化し、決定木から多様な判定シナリオを自動生成するツールです。正解が確定しているケースだけでなく、情報不足により判定を保留すべきケースも組み込むことで、LLMの「知ったかぶり」を評価できます。",
      "enables": "最先端のLLMでも、情報不足の場合に適切に回答を控えることができる割合は22-40%にとどまることを明らかにしました。",
      "why_it_matters": "法的判断などの規制が厳しい分野でのLLM評価を、人手を使わずに大規模かつ体系的に行えるようにします。",
      "tags": [
        "LLM評価",
        "法的推論",
        "データセット生成"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39308",
      "title": "Unlimited OCR Works 2",
      "url": "https://arxiv.org/abs/2610.39308",
      "pdf": "https://arxiv.org/pdf/2610.39308",
      "authors": [
        "Shu Wei",
        "Jingjing Wu",
        "Qunyi Xie",
        "Lingshu Zhang",
        "Xiangcheng Du",
        "Yannian Fu"
      ],
      "categories": [
        "cs.CL",
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
      "star_quote": "Unlimited OCR 2 achieves 7.0$\\times$ and 5.6$\\times$ per-step speedups over Full Attention and R-SWA",
      "signals": [],
      "headline": "100ページ超の長尺文書を一定のメモリコストで高速に解析するOCR 2.0技術",
      "what": "Unlimited OCR 2は、Sparse Reference Sliding Window Attention (SR-SWA) を採用し、デコーダのアテンション範囲を一定に制限します。これにより、文書が長くなっても計算コストやメモリ消費が増大しない「人間が現在見ている箇所だけを書き写す」ような動作を実現しています。",
      "enables": "100ページ規模の解析において、フルアテンション比で7倍の高速化を達成し、長尺文書解析ベンチマークでSOTAを記録しました。",
      "why_it_matters": "従来のモデルでは不可能だった数百ページにわたる一括の文書解析を、一般的なGPUメモリの範囲で、かつ高速に実行可能にします。",
      "tags": [
        "OCR",
        "長文解析",
        "Transformer"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39417",
      "title": "Well-Specified and Well-Tested? Assessing SWE-bench-Style Datasets with a Self-Evolving Agent",
      "url": "https://arxiv.org/abs/2610.39417",
      "pdf": "https://arxiv.org/pdf/2610.39417",
      "authors": [
        "Zhonghao Jiang",
        "Xuyang Zheng",
        "Yanfu Yan",
        "Zhongxin Liu",
        "Lingfeng Bao",
        "Shuiguang Deng"
      ],
      "categories": [
        "cs.SE",
        "cs.AI",
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
      "star_quote": "ExLabel maintains an evolving experience bank that distills cross-instance knowledge",
      "signals": [],
      "headline": "コーディングエージェントの評価データセットを、LLMベースの経験学習で自動クリーニング",
      "what": "SWE-benchなどのソフトウェアエンジニアリング用データセットの品質を向上させるため、ExLabelという自己進化型アシスタントを提案しました。過去の評価経験を「経験バンク」に蓄積し、タスクの明確さやテストの網羅性を文脈に応じて適応的に判断します。",
      "enables": "Pythonおよびマルチリンガル環境において、既存のクレンジング手法を最大49.9%上回るF1スコアで高品質な学習データを抽出しました。",
      "why_it_matters": "実世界のバグ修正データセットには不正確なラベルが多く含まれますが、これを高精度に自動修正・抽出することで、モデルの学習効率を底上げします。",
      "tags": [
        "ソフトウェア工学",
        "LLMエージェント",
        "データセット管理"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39663",
      "title": "AB-Attention: Accurate Block Attention for Accelerating Video Diffusion Transformers",
      "url": "https://arxiv.org/abs/2610.39663",
      "pdf": "https://arxiv.org/pdf/2610.39663",
      "authors": [
        "Bin Xu",
        "Mo Zhang",
        "Zhengfeiyang Zhang",
        "Xinfeng Yang",
        "Yixing Ma",
        "Wei Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 5 figures, 3 tables",
      "hf_upvotes": 4,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "AB-Attention skips 89--92\\% of attention, whereas the baselines compute 1.8--3.6$\\times$ as much",
      "signals": [],
      "headline": "動画生成Transformerのアテンションを9割削減し、推論速度を2倍以上に高速化",
      "what": "AB-Attentionは、追加の訓練を必要とせずにアテンション計算を疎（sparse）にする手法です。クエリブロック内でのクラスタリング（IBCS）と確率加重サンプリング（SIP）により、重要なキー/値のみを選択して計算することで、全結合アテンションを精度良く近似します。",
      "enables": "Wan2.1やHunyuanVideoなどのモデルにおいて、アテンションの89-92%をスキップしながら、2.23倍の高速化と最大4.4dBのPSNR向上を達成しました。",
      "why_it_matters": "計算コストが膨大な動画生成DiTにおいて、品質を維持（あるいは向上）させたまま劇的に計算量を削減できる実用的な手法です。",
      "tags": [
        "動画生成",
        "Diffusion Model",
        "高速化"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39931",
      "title": "Low-Bit GDN Recurrent-State Quantization: Global Gradient-aware Allocation and Pure-Write Sliding Windows",
      "url": "https://arxiv.org/abs/2610.39931",
      "pdf": "https://arxiv.org/pdf/2610.39931",
      "authors": [
        "Qinghang Huang",
        "Xuchu Huang",
        "Xunzhao Yin"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 13 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "GGA allocation alone improves over STEPQuant@4 by 19.48/29.84 percentage points.",
      "signals": [],
      "headline": "線形アテンションの再帰状態を低ビット量子化しつつ、長文推論の劣化を抑制",
      "what": "Gated DeltaNetなどの再帰状態を低ビットで保持するためのGGA（勾配考慮型ビット割り当て）とPW（純粋書き込みスライディングウィンドウ）を提案しました。重要なヘッドに優先的にビットを配分し、最新の情報を量子化誤差のないFP8ウィンドウで保持してから圧縮状態にマージします。",
      "enables": "Qwen3.5-9Bにおいて、従来の量子化手法をタスク平均で41.21ポイント上回り、量子化による「無意味な長文出力」の抑制にも成功しました。",
      "why_it_matters": "長文推論においてボトルネックとなるKV状態を大幅に圧縮しつつ、推論品質を維持するための重要な手法です。",
      "tags": [
        "LLM",
        "モデル量子化",
        "長文推論"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39633",
      "title": "Intrinsic Distribution Matching",
      "url": "https://arxiv.org/abs/2610.39633",
      "pdf": "https://arxiv.org/pdf/2610.39633",
      "authors": [
        "Deyuan Liu",
        "Yansen Han",
        "Kaiwen Zheng",
        "Jun Xie",
        "Jiacheng Liu",
        "Zhenglin Cheng"
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
      "hf_upvotes": 238,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲238"
      ],
      "headline": "EMAコピーを用いた特徴量の一致により、少数ステップの画像生成品質を向上",
      "what": "Intrinsic Distribution Matching (IDM) は、生成器のEMA（指数移動平均）コピーの特徴量を用いて、生成分布と参照分布のモーメントを強制的に一致させる手法です。外部の画像エンコーダを必要とせず、自身の生成プロセスから得られる統計量を利用します。",
      "enables": "1〜2ステップの画像生成において、LongText-BenchでSOTAを達成し、プロンプトへの忠実度と詳細の再現性を大幅に向上させました。",
      "why_it_matters": "蒸留ベースの高速な画像生成モデルにおいて、追加の計算リソースを抑えつつ分布のズレを補正する効率的なアプローチです。",
      "tags": [
        "画像生成",
        "蒸留",
        "Diffusion Model"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38568",
      "title": "A-RSI: Adaptive Task Refresh for Zero-Data Multimodal Self-Improvement",
      "url": "https://arxiv.org/abs/2610.38568",
      "pdf": "https://arxiv.org/pdf/2610.38568",
      "authors": [
        "Yu Liu",
        "Youxing Li",
        "Yuedong Tan",
        "Zhiwei Yang",
        "Zihan Su",
        "Hanqi Feng"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 150,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲150"
      ],
      "headline": "外部データなしでモデル自らが学習信号の低下を検知し、タスクを更新する自己改善法",
      "what": "Recursive Self-Improvement (RSI) において、モデルが自身の学習ログから「現在のタスクから学べるものがなくなった時期」を自動判断するA-RSIを提案しました。モデル自身がプログラムを介して生成した問題と、そのプログラムが導く客観的な正解を用いて学習を継続します。",
      "enables": "外部データや人間によるラベルを一切使わずに、11種類のベンチマーク平均スコアを57.77から61.05へ向上させました。",
      "why_it_matters": "モデルがいつ、何を新しく学ぶべきかを自律的に判断する「自己改善の自律化」に向けた重要なステップです。",
      "tags": [
        "自己改善",
        "LLM",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39301",
      "title": "Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities",
      "url": "https://arxiv.org/abs/2610.39301",
      "pdf": "https://arxiv.org/pdf/2610.39301",
      "authors": [
        "Yunhang Shen",
        "Zhangquan Chen",
        "Xiaotian Li",
        "Zhongpeng Cai",
        "Qing Zhou",
        "Zekai Zhang"
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
      "headline": "全モダリティを単一のエンコーダとスキーマで構造化データに変換する全能パーサー",
      "what": "文書、画像、音声、動画のすべてを、共有の時空座標系と単一のスキーマ（OmniSchema）で構造化データへ変換するYoutu-Parsing-Omniを開発しました。OmniSchema-Aware On-Policy Distillation (OSAD) という自己進化型の学習手法により、10種類の解析タスクを統合しています。",
      "enables": "5Bパラメータの単一モデルで、文書・図表・楽譜・化学式などの多様な解析ベンチマークにおいて、専用モデルを上回るSOTAを達成しました。",
      "why_it_matters": "モダリティごとに異なるモデルを用意する手間を省き、エージェントが「見て、聞き、読む」ための統一された知覚レイヤーを提供します。",
      "tags": [
        "マルチモーダル解析",
        "文書構造化",
        "LLM"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.40614",
      "title": "L3G-World: Real-Time Infinite World Generation with Latent 3D Gaussian Memory",
      "url": "https://arxiv.org/abs/2610.40614",
      "pdf": "https://arxiv.org/pdf/2610.40614",
      "authors": [
        "Jinhyeok Choi",
        "JoungBin Lee",
        "Jongmin Lee",
        "Minkyeong Jeon",
        "Jiyoung Kim",
        "Kaeun Han"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://cvlab-kaist.github.io/L3G-World/",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "潜在空間の3D Gaussianをメモリとして活用し、無限の世界をリアルタイムに生成",
      "what": "L3G-Worldは、3D Gaussian Splattingをビデオ生成DiTの潜在空間に組み込んだ世界モデルです。新しく観測された領域にのみGaussianを生成・更新することで、生成距離に関わらずメモリ効率を維持し、VAEの再エンコードなしで高速にレンダリングします。",
      "enables": "従来手法の約359倍高速なメモリレンダリングにより、毎秒9フレーム（9 FPS）でのリアルタイムかつ空間的に一貫した無限世界生成を可能にしました。",
      "why_it_matters": "インタラクティブなゲームやシミュレーションにおいて、過去に訪れた場所の整合性を保ちながら、広大な世界を遅延なく生成し続けることができます。",
      "tags": [
        "世界モデル",
        "3D Gaussian Splatting",
        "動画生成"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38314",
      "title": "CHORD: Cross-Model Hallucination Detection via Relational Graph Discrimination",
      "url": "https://arxiv.org/abs/2610.38314",
      "pdf": "https://arxiv.org/pdf/2610.38314",
      "authors": [
        "Yongxin Deng (University of Technology Sydney)",
        "Zhen Fang (University of Technology Sydney)",
        "Guansong Pang (Singapore Management University)",
        "Sharon Li (University of Wisconsin-Madison)",
        "Ling Chen (University of Technology Sydney)"
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
      "comment": "Accepted to NeurIPS 2026 as a Spotlight paper. 64 pages, 14 figures, 7 tables",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "モデル間の内部表現の違いをグラフ構造で捉え、未学習のLLMの幻覚を検出",
      "what": "異なるLLM間でも共通する「層・トークン・特徴量間の関係性」をグラフとして表現し、幻覚を検出するフレームワークCHORDを提案しました。セマンティックな不一致を避け、メタ学習を通じてモデル固有の特性に依存しない転移可能な検出信号を抽出します。",
      "enables": "特定のモデルで学習した検出器を、全く異なるアーキテクチャの未知のターゲットモデルに適用した際、従来手法を凌駕する汎化性能を示しました。",
      "why_it_matters": "新しいモデルが登場するたびに検出器を作り直す必要がなく、モデル横断的に利用可能な信頼性評価ツールとしての活用が期待されます。",
      "tags": [
        "幻覚検出",
        "LLM",
        "グラフニューラルネットワーク"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.38320",
      "title": "SSQA: Sibling-Selective Quadtree Attention for Hierarchical Modeling in Perception Tasks",
      "url": "https://arxiv.org/abs/2610.38320",
      "pdf": "https://arxiv.org/pdf/2610.38320",
      "authors": [
        "Yufan Chen",
        "Arnav Bali",
        "Angela Liu",
        "Laura Zheng",
        "Ming C. Lin"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "ICRA"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "8 pages, 6 figures, 4 tables. Published at ICRA 2026 (oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "四分木構造のアテンションにより、ドローンや自動運転の知覚を線形時間で高速化",
      "what": "画像トークンを階層的な四分木（Quadtree）としてモデル化し、兄弟ノード間での選択的な注目を行うSSQA（Sibling-Selective Quadtree Attention）を提案しました。画像が持つ軸に沿った構造的プライアを活用し、計算量をトークン数に対して線形に抑えます。",
      "enables": "Mamba 2や既存のQuadtree Attentionよりも計算コストを抑えつつ、同等以上の認識精度を達成しました。",
      "why_it_matters": "計算リソースが極めて限られるドローンや車載エッジデバイスにおいて、高解像度の視覚情報をリアルタイムで階層的に処理するための基盤技術となります。",
      "tags": [
        "ロボティクス",
        "コンピュータビジョン",
        "アテンション"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.39247",
      "title": "SocialArena: Evaluating Social Intelligence in Large Language Models",
      "url": "https://arxiv.org/abs/2610.39247",
      "pdf": "https://arxiv.org/pdf/2610.39247",
      "authors": [
        "Zongqi Wang",
        "Rui Wang",
        "Yuchuan Wu",
        "Hua Yang",
        "Bingxue Qiu",
        "Tianle Gu"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "EMNLP 2026 oral",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "ロールプレイングと「心の声」を通じてLLMの社会的知性を評価するベンチマーク",
      "what": "社会的知性を「役割演技」「心の状態の推論」「行動の推論」の3軸で定義し、キャラクターの思考プロセスを明示させた対話形式で評価するSocialArenaを構築しました。13万ドル以上を投じて訓練された人間アノテーターによる、アリーナ形式の比較評価を採用しています。",
      "enables": "LLMが人間のような複雑な社会的文脈をどの程度理解し、適切に振る舞えるかを定量化し、モデルごとの改善点を浮き彫りにしました。",
      "why_it_matters": "メンタルケアや教育など、高度な対人能力が求められる分野でのLLM活用に向けた、信頼性の高い評価基準を提供します。",
      "tags": [
        "LLM評価",
        "社会的知性",
        "データセット"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    },
    {
      "id": "2610.40653",
      "title": "Micro-Edits: Computational Support for Fine-Scale Edits in Film",
      "url": "https://arxiv.org/abs/2610.40653",
      "pdf": "https://arxiv.org/pdf/2610.40653",
      "authors": [
        "Nhan Tran",
        "Hijung Valentina Shin",
        "Abe Davis",
        "Mackenzie Leake"
      ],
      "categories": [
        "cs.HC",
        "cs.CV"
      ],
      "venues": [
        "UIST"
      ],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "UIST 2026 Best Paper Honorable Mention. Project page: https://microedits.github.io/",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "映画編集におけるフレーム単位の「微細な調整」をAIと最適化で支援",
      "what": "沈黙の長さや反応のタイミングといった、映画の表現力を左右するフレーム単位の編集（Micro-Edits）を支援するツールを開発しました。編集者の意図（ナラティブ目標）を数学的に定式化し、AIによる最適化を用いて、低レベルな手作業を簡略化します。",
      "enables": "プロの編集者との調査に基づき、従来のツールでは数時間を要していた緻密なタイミング調整やカットの探索を効率化しました。",
      "why_it_matters": "AIを単純な自動編集ではなく、編集者の創造的な意図をより細密に具現化するための「筆」として活用する、人間中心のデザイン事例です。",
      "tags": [
        "ヒューマンコンピュータインタラクション",
        "ビデオ編集",
        "クリエイティブAI"
      ],
      "fetched_at": "2026-10-31T10:27:58.854744+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.32285",
      "title": "Trial by Trace: Benchmarking AI Agent Harnesses for Reliability and Failure Attribution",
      "abstract": "LLM agents are increasingly used to solve real-world problems, and their effectiveness depends on both the underlying models and the harnesses that support their operation. However, most existing benchmarks focus on model capabilities and overall agent performance, with limited attention to the evaluation of agent harnesses. To address this gap, we introduce TraceTrial-Bench, which organizes harness reliability into seven components covering context, execution, governance, lifecycle, observability, tools, and verification. We construct 95 expert-level, mechanism-oriented tasks with executable or state-based ground truth to support semantically equivalent comparisons while preserving the native behavior of each harness. We design a Trajectory Tracing (TT) module to capture agent execution traces and introduce a two-layer evaluation framework that separately assesses agent performance and harness reliability. In addition, we design a Multi-source Evidence Acquisition (MEA) module to provide evidence from the agent context, harness, and execution environment for LLM-based evaluation, and develop a Failure Attribution (FA) module that uses explicit mechanism chains to support attribution at the run level. Across 4 harnesses, 9 models, and 95 tasks, our evaluation of 3,420 runs yields macro-averaged harness scores ranging from 59.8% to 72.0%, while 31.1% of runs achieve task success despite failing at least one harness criterion. TraceTrial-Bench provides an auditable and reproducible foundation for comparing agent harnesses, diagnosing their failures, and studying how harness design interacts with model behavior.",
      "upvotes": 201,
      "github_stars": 23,
      "github_repo": "https://github.com/TraceLite-AI/TraceTrial-Bench",
      "project_page": "https://tracelite.ai/trial-by-trace.html",
      "comments": 6,
      "org": "TraceLite AI",
      "url": "https://huggingface.co/papers/2610.32285",
      "arxiv_url": "https://arxiv.org/abs/2610.32285",
      "title_ja": "Trial by Trace: AIエージェント基盤の信頼性と失敗要因分析のためのベンチマーク",
      "summary_ja": "エージェント基盤の信頼性を7要素で評価し、95個のタスクを通じてエージェント自体の能力と基盤の役割を分離して検証可能にするベンチマークを提案。"
    },
    {
      "id": "2610.37381",
      "title": "PDRVLA: A Vision-Language-Action Model with Physical Dynamics Representations",
      "abstract": "Vision--Language--Action (VLA) models generate robot actions from visual observations and language instructions, but their understanding of physical dynamics remains limited. Video world models can capture scene dynamics, yet generating future videos introduces high latency into the control loop. We introduce PDRVLA, whose lightweight Physical Dynamics Module extracts physical tokens from vision--language features to condition action generation without online video generation. The module learns through direct prediction of future RGB, depth, and optical-flow features, with auxiliary supervision through a frozen pretrained video world model. Training relies entirely on publicly available data, expanded through human-to-robot synthesis, subtask annotation, and embodied chain-of-thought (ECoT) annotation. Across four simulation benchmarks, PDRVLA achieves success rates of 99.3% on LIBERO, 89.9% on LIBERO-Plus, 93.6% on RoboTwin~2.0, and 81.5% on SimplerEnv. Ablations show improved future prediction with world-model supervision and evaluate how subtask conditioning, future object-pose supervision, and ECoT training affect action success.",
      "upvotes": 149,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37381",
      "arxiv_url": "https://arxiv.org/abs/2610.37381",
      "title_ja": "PDRVLA: 物理ダイナミクス表現を備えた視覚・言語・アクションモデル",
      "summary_ja": "軽量な物理ダイナミクスモジュールにより、オンラインでの動画生成なしに未来の物理状態を予測し、正確なロボット操作を可能にするVLAモデル。"
    },
    {
      "id": "2610.36729",
      "title": "Hy-Nomas: Towards Free-form Interactive World Generation",
      "abstract": "Interactive world generation requires models to follow successive commands while preserving relevant history and action consequences. We present Hy-Nomas, a video world model with an 8B diffusion backbone that supports free-form text instructions and continuous camera control across multiple interaction turns. It generates variable-length segments conditioned on current inputs and cached history. Our central design aligns structured video captions with action-aware causal attention: descriptive context remains accessible across segments, while action instructions are restricted to their intended temporal windows. A vision-language Prompt Enhancer (PE) translates user requests and multimodal interaction histories into structured conditions for the next segment. A multi-stage curriculum progressively introduces causal generation, text interaction, camera control, and training on model-generated histories, followed by diffusion distillation. In human evaluation, Hy-Nomas shows superior performance over existing world models. We release model weights, code and benchmarks, together with a lightweight adaptation workflow, to support reproducible research on interactive world generation.",
      "upvotes": 123,
      "github_stars": 427,
      "github_repo": "https://github.com/Tencent-Hunyuan/Hy-Nomas",
      "project_page": "https://hy-nomas.hy.tencent.com/",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.36729",
      "arxiv_url": "https://arxiv.org/abs/2610.36729",
      "title_ja": "Hy-Nomas: 自由形式の対話的世界生成に向けて",
      "summary_ja": "自由なテキスト指示と継続的なカメラ制御に対応し、過去の履歴や行動の結果を保持しながら一貫した動画生成を行う8B規模の拡散世界モデル。"
    },
    {
      "id": "2610.35845",
      "title": "Work Agents: Systems, Capabilities, and Optimization",
      "abstract": "As foundation models evolve from information generation to digital work execution, agents are increasingly capable of completing complex tasks across tools, applications, and workflows. However, existing research lacks a unified perspective on how agents reliably accomplish delegated work. To address this gap, we present a work-centric, system-level perspective that views work agents as systems combining foundation models and runtime harnesses to execute tasks in stateful workspaces and deliver verifiable outcomes. We introduce two complementary dimensions, work persistence and work openness, to characterize working conditions, and classify digital work into five forms according to task scope and organization. Building on this framework, we identify five core capability families required for reliable work execution and examine approaches to model optimization, harness optimization, and their joint optimization. We further analyze existing evaluation methods and metrics from the perspective of work outcomes. Finally, we discuss future research directions, including sustained work delegation, adaptation to open environments, and the interaction between work execution and capability improvement. This paper provides a unified framework for understanding, optimizing, and evaluating work agents, supporting the development of systems capable of delivering reliable, verifiable, and practically valuable work outcomes.",
      "upvotes": 115,
      "github_stars": 70,
      "github_repo": "https://github.com/EnjunDu/awesome-working-agent",
      "project_page": "https://enjundu.com/blog/working_agents",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.35845",
      "arxiv_url": "https://arxiv.org/abs/2610.35845",
      "title_ja": "Work Agents: システム、能力、および最適化",
      "summary_ja": "AIエージェントを基盤モデルとランタイムの統合システムと捉え、デジタルワークの永続性や開放性に基づき5つの形態に分類・整理した体系的視点の提示。"
    },
    {
      "id": "2610.35684",
      "title": "OmniShowcase: Omnidirectional Subject-Consistent Video Generation from Multi-View Images",
      "abstract": "Generating videos of a specific subject from a few reference images remains challenging when the camera reveals surfaces that are not visible in the input. Early subject-to-video (S2V) methods condition on a single reference image and must therefore infer the subject's unseen appearance and geometry as the viewpoint changes. To address this limitation, recent methods extend S2V to multiple reference views, providing more information about the subject from different viewpoints. However, they do not explicitly specify the 3D structure that connects these observations. In addition, existing training data do not guarantee that viewpoint changes preserve the same underlying 3D subject. We present OmniShowcase, built on two components: (i) a fully automated data synthesis pipeline that produces training videos along diverse camera trajectories, with viewpoint variation driven by underlying subject geometry, even spanning full 360-degree orbits; and (ii) a geometry-conditioning method that provides the video model with a turntable of surface-normal maps reconstructed from the reference views without requiring temporal alignment with the generated frames. We construct Showcase-4K, a corpus of 3D-asset-based videos covering twelve camera motions across 88 trajectory configurations with reconstruction-derived surface-normal conditioning, and ShowcaseBench, a held-out evaluation set with the source meshes and camera parameters used to render each video. Experiments show state-of-the-art subject identity and 3D consistency while maintaining competitive video quality and motion. Project page: justin4ai.github.io/OmniShowcase",
      "upvotes": 107,
      "github_stars": 11,
      "github_repo": "https://github.com/justin4ai/OmniShowcase",
      "project_page": "https://justin4ai.github.io/OmniShowcase/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.35684",
      "arxiv_url": "https://arxiv.org/abs/2610.35684",
      "title_ja": "OmniShowcase: 多視点画像からの全方位・被写体一貫性ビデオ生成",
      "summary_ja": "少数の参照画像から被写体の一貫性を保ちつつ、入力に含まれない角度からの外見や幾何構造を3D情報を活用して正確に生成する手法。"
    },
    {
      "id": "2610.32749",
      "title": "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes",
      "abstract": "Streaming audio-visual target speaker extraction (AVTSE) is essential for latency-sensitive applications. However, current causal systems face two coupled gaps. First, standard benchmarks fix the number of speakers at two and ignore the near-/far-field interference, reverberation, and sudden noise of real scenes. Second, high-performance causal architectures are too heavy for edge deployment. Lightweight alternatives try to reclaim capacity by repeatedly invoking a small separator, which offsets the savings. To address the first gap, we release RealSSA, a realistic AVTSE benchmark consisting of RealSSA-Sim and RealSSA-Real. RealSSA-Sim provides controllable simulated scenes with 1--5 dynamic near-field interfering speakers; scenes with far-field interference additionally include 10--15 far-field interfering speakers. RealSSA-Real provides a held-out real-recorded evaluation set. To address the second gap, we propose Falcon, a causal AVTSE method. Its Separator performs multi-scale time-frequency separation in a single encoder--decoder pass. We train Falcon with an encoder-space speaker contrastive loss. This loss suppresses near-field leakage at zero inference cost and transfers across backbones. Falcon achieves state-of-the-art extraction quality on RealSSA-Sim, LRS2-2Mix, LRS3-2Mix, and VoxCeleb2-2Mix. Compared with the causal AV-TFGridNet baseline, it cuts parameters by 91.9%, computation by 20.2 times, and GPU inference latency by 11.1 times. Code and demo are available at https://cslikai.cn/Falcon/.",
      "upvotes": 107,
      "github_stars": 36,
      "github_repo": "https://github.com/JusperLee/Falcon",
      "project_page": "https://cslikai.cn/Falcon/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.32749",
      "arxiv_url": "https://arxiv.org/abs/2610.32749",
      "title_ja": "実世界の音響シーンにおける効率的なストリーミング型音響・視覚標的話者抽出",
      "summary_ja": "ノイズや多人数話者が存在する実環境を再現したベンチマークを公開し、エッジ端末でも動作する低遅延かつ高性能な標的話者抽出システムを開発。"
    },
    {
      "id": "2610.34662",
      "title": "StreamVibe: Proactive Video Agents for Evolving User Intent",
      "abstract": "Vision-language models are shifting from offline passive understanding toward online proactive interaction. However, prevailing methods largely rely on explicit requests while miss the implicit user intent (e.g., \"where should I click next?\" while a user navigate a website), meanwhile fail to update the state simultaneously as user requests might update continuously. These limitations make them less suited to intent-aware interaction in practical. To address these challenges, we introduce StreamVibe-Bench, a new benchmark serving as testbed for user intent interaction, with 4.1K evaluation samples and 85K training samples spanning explicit, implicit, and dynamic intents. Building on this benchmark, we develop StreamVibe-VL, a streaming proactive model that infers implicit user intents from continuous observations and dynamically tailors its interactions as these intents evolve. We further introduce StreamVibe-Harness, which maintains user intents as persistent states with a fleixble lifecycles via a hierarchical memory to track the latest user intent and environmental state. Our experiments reveal three key findings: (i) StreamVibe-VL preserves strong general video understanding while improving response timing and answer quality by 10.7% over other baselines; (ii) existing proactive models remain limited in understanding user intent and deciding when to respond, especially under implicit and dynamic intents; and (iii) StreamVibe-Harness further improves response consistency and adaptation over sustained interaction, resulting in a 12.3% gain in proactive interaction.",
      "upvotes": 101,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.34662",
      "arxiv_url": "https://arxiv.org/abs/2610.34662",
      "title_ja": "StreamVibe: 変化するユーザー意図に対応する先読み型ビデオエージェント",
      "summary_ja": "ユーザーの明示的な要求だけでなく、操作中の暗黙的かつ動的な意図を先読みして対話を行うための新たなベンチマークとデータセットを導入。"
    },
    {
      "id": "2610.36671",
      "title": "Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs",
      "abstract": "Diffusion vision-language models (DVLMs) process their entire input at every denoising step. Since visual tokens make up 89-97% of this input on the benchmarks we study, most of the decoding computation is spent repeatedly processing the same image. Visual token pruning methods partially relieve this burden by removing part of the visual tokens, but they lose the removed information and still process the remaining image at every step. To measure how often the image is actually needed, we compare LLaDA-V's predictions with and without the image at every decoding step and find that removing the image changes a token being unmasked at only 22.8% of steps on average and at as few as 7.9%. We therefore propose LOWN, a decoding method that decides at every step whether to process the image and how many tokens to unmask. LOWN predicts the masked tokens without the image and processes the image only when this prediction disagrees with the last image-conditioned prediction. Agreement certifies the earlier prediction for reuse, and the number of certified tokens sets how many are unmasked in that step. We further observe that the need for the image differs across benchmarks, so LOWN's adaptive decision is needed rather than a fixed schedule. Without training or a tuned threshold, LOWN retains 99.6% of LLaDA-V's score on ten benchmarks at 35.3% of the decoding FLOPs on average. LOWN also generalizes across LLaDA-based DVLMs, composes orthogonally with visual token pruning, and runs under key-value caching for further efficiency gains. Code and project page are available at https://hyeon9698.github.io/LOWN/",
      "upvotes": 98,
      "github_stars": 12,
      "github_repo": "https://github.com/hyeon9698/LOWN",
      "project_page": "https://hyeon9698.github.io/LOWN/",
      "comments": 3,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.36671",
      "arxiv_url": "https://arxiv.org/abs/2610.36671",
      "title_ja": "Look Only When Needed: 効率的な拡散VLMのための証明書ガイド付き視覚ルーティング",
      "summary_ja": "画像処理が不要なステップを特定し、視覚トークンの処理を適宜スキップすることで、性能を維持しつつ計算量を大幅に削減する推論手法を提案。"
    },
    {
      "id": "2610.34467",
      "title": "DynaFlow: Learning Free-Form Multi-Agent Orchestration",
      "abstract": "Multi-agent systems often rely on predefined collaboration structures, limiting their ability to adapt to diverse task requirements. We introduce DynaFlow, a framework that integrates free-form executable workflow synthesis into the action space of the main agent. The agent decides when collaboration is needed and generates task-specific programs that coordinate sub-agents through sequential or parallel execution, structured information exchange, and verification. Execution results and traces inform subsequent actions, enabling the agent to adapt collaboration as reasoning progresses. We train only the main agent through supervised fine-tuning on distilled trajectories, followed by refinement on examples filtered for unsupported premises, biased verification, and information-flow defects. All sub-agents remain fixed, separating orchestration learning from executor capability improvement. Across six benchmarks spanning mathematical reasoning, scientific question answering, and multi-hop retrieval, DynaFlow achieves 88.08% overall accuracy in Forced mode, outperforming the strongest evaluated baseline by 10.90 percentage points with the same Qwen3.5-27B backbone. Workflow analysis finds more explicit use, verification, and refinement of upstream outputs after training, highlighting cross-stage information flow as a key dimension of multi-agent orchestration.",
      "upvotes": 96,
      "github_stars": 187,
      "github_repo": "https://github.com/amiya-special/Dynaflow",
      "project_page": "https://amiya-special.github.io/DynaFlow-website",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.34467",
      "arxiv_url": "https://arxiv.org/abs/2610.34467",
      "title_ja": "DynaFlow: 自由形式のマルチエージェント・オーケストレーション学習",
      "summary_ja": "メインエージェントが必要に応じてタスク固有の連携ワークフローをコードとして動的に生成・実行し、柔軟に他エージェントを指揮するフレームワーク。"
    },
    {
      "id": "2610.34073",
      "title": "Memory Tax: Dissecting the Net Value of Agent Memory",
      "abstract": "Memory is increasingly used in long-horizon agents, yet the net value of building memory over direct retrieval from raw history remains largely unclear. Through a large-scale evaluation across multiple benchmarks and model backbones, we find many dedicated memory systems underperform naive RAG in many cases, indicating a negative net value. Taking RAG as a reference, we dissect the net value of memory into the gains and losses over direct retrieval, termed memory benefit and memory tax. These gains and losses arise because memory process changes how the raw information is organized and accessed. We view such changes as the double-edged deviations from the raw history. They are originally designed and introduced to benefit the task, for example by reorganizing facts or distilling preferences, but some may also remove or obscure evidence, giving rise to memory tax. Since memory benefit reflects the expected gains of its design, we then focus more on the overlooked memory tax, study how it arises from the system and evaluation side, and generalize the concept to more application scenarios of memory. We hope the notion of memory tax can provide a new lens and shift more attention from standalone performance to the net value of memory, informing more reliable memory designs and evaluations. We will open-source the code and results to the community. Project Page: https://hexuan21.github.io/MemoryTax/",
      "upvotes": 91,
      "github_stars": 16,
      "github_repo": "https://github.com/hexuan21/MemoryTax",
      "project_page": "https://hexuan21.github.io/MemoryTax/",
      "comments": 5,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2610.34073",
      "arxiv_url": "https://arxiv.org/abs/2610.34073",
      "title_ja": "Memory Tax: エージェントメモリの正味価値の解剖",
      "summary_ja": "専用メモリシステムと単純なRAGを比較し、情報の再構成に伴う利点と損失（メモリ税）を分析することで、メモリの有効性を大規模に検証。"
    },
    {
      "id": "2610.24520",
      "title": "HABIT-Bench: Evaluating Habit Induction from Longitudinal Weak Evidence in Agent Memory",
      "abstract": "In long-term interactions with large language model (LLM) agents, users reveal habits through their choices and actions. These habits capture implicit user information that agents must infer across conversations. However, individual observations may provide only partial evidence about a habit or when it applies. Retaining past interactions alone does not ensure that agents can infer habits and apply them appropriately. We introduce HABIT-Bench to evaluate how well agent memory systems infer habits from weak evidence and apply them to later requests. We construct synthetic user histories from task-oriented dialogue data and controlled habit graphs. The histories span hundreds of sessions across food, finance, software, and travel. Four-choice tasks assess agents' ability to infer user habits and apply them appropriately. They include temporary exceptions, changes in habits, and suggestions that users have not accepted. Sampled tasks undergo independent human review. We evaluate eight memory methods with Qwen3-235B-A22B and GLM-5.3-Flash. The best-performing memory method achieves 33.61\\% macro accuracy across the four domains. Performance remains limited even when annotated evidence is supplied directly. These results expose a persistent gap between access to past interactions and the ability to infer and appropriately use user habits.",
      "upvotes": 90,
      "github_stars": 4,
      "github_repo": "https://github.com/LUMIA-Group/habit-bench",
      "project_page": "https://hollyming.github.io/habit-bench-site/",
      "comments": 7,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.24520",
      "arxiv_url": "https://arxiv.org/abs/2610.24520",
      "title_ja": "HABIT-Bench: エージェントメモリにおける長期的な弱い証拠からの習慣推論の評価",
      "summary_ja": "断片的な情報からユーザーの潜在的な習慣を推論し、それを後の対話や行動に正しく適用できるかを測定する長期記憶評価用ベンチマーク。"
    },
    {
      "id": "2610.36068",
      "title": "Rollback: Experience Backtracking in World Models for Policy Improvement",
      "abstract": "Action-conditioned world models offer a scalable alternative to costly real-world interaction for improving robot policies. However, existing world-model-based methods largely treat world models as forward-only surrogates of the physical environment, leaving untapped a capability no physical environment affords: rewinding to past decision points to explore counterfactual futures. We introduce Rollback, a policy improvement paradigm that turns world models from passive simulators into counterfactual engines: it rolls back to critical decision points, branches into alternative actions, and contrasts their outcomes to attribute success to individual decisions. This concentrates imagination where it matters most and distills counterfactual outcomes into fine-grained, action-level supervision without a separately learned value model. We build a scalable training system that unifies distributed world-model search with asynchronous real-robot execution, forming a self-reinforcing cycle: real-world experience continually sharpens the world model, and a sharper world model in turn drives further policy improvement. We term the world-model side of this cycle test-time physics grounding, a capability that hand-built physics simulators lack: while the world model serves as the training environment, real transitions from the policy it trains correct its dynamics through a lightweight LoRA pipeline. Experiments on three challenging real-world tasks show that Rollback improves success rates over the strongest baseline by an absolute 10.67%, 11.11%, and 11.85% on block extraction, ball tossing, and tabletop curling, respectively, while achieving more stable improvement throughout training. Although initialized from teleoperated demonstrations far below human level, Rollback surpasses the average success rate of human players on both ball tossing and tabletop curling within 8 hours of training.",
      "upvotes": 84,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://rollback-wm.github.io/",
      "comments": 2,
      "org": "AgiBot World",
      "url": "https://huggingface.co/papers/2610.36068",
      "arxiv_url": "https://arxiv.org/abs/2610.36068",
      "title_ja": "Rollback: 方策改善のための世界モデルにおける経験バックトラッキング",
      "summary_ja": "世界モデル内で過去の決定点に戻り、別の行動（反実仮想）を試行・比較することで、成功の要因を特定し効率的にロボットの方策を改善する手法。"
    },
    {
      "id": "2610.34283",
      "title": "ChronoReplay: One Answer Interface Is Not Enough for Streaming Spatial Intelligence",
      "abstract": "Training a spatial VLM to answer which side an object lies on does not require it to preserve the metric displacement that determines that answer, while supervision for a distance estimate may leave categorical relations largely unconstrained. When post-training emphasizes one readout, improvements can therefore concentrate on that interface while transfer to others remains weak or even degrades; we call this observed specialization interface lock-in. ChronoReplay addresses it by replaying heterogeneous spatial supervision as chronologically ordered episodes, retaining source-native targets, and balancing supervision across families. Under the same observation access, a single ChronoReplay checkpoint improves OVO-S-Bench, OST-Bench, and UCS-Bench together, including a 13.41-point gain on OST-Bench, and achieves the highest three-benchmark mean among the supervision settings compared here. Same-data controls further separate the ingredients of this transfer: answer serialization redistributes gains across OST and UCS, family-balanced learning improves over ordinary joint SFT and natural turn weighting, and chronological replay exceeds a shifted-order control by about 2.41 OST points across two paired seeds. Adaptive frame selection then changes evidence access while keeping the trained model fixed, providing an additional inference-time gain at lower visual cost. Streaming spatial performance depends on what distinctions supervision preserves, how heterogeneous histories are organized during learning, and what causal evidence inference makes available at test time.",
      "upvotes": 76,
      "github_stars": 26,
      "github_repo": "https://github.com/yihaohu0118/ChronoReplay",
      "project_page": "https://yihaohu0118.github.io/ChronoReplay/",
      "comments": 2,
      "org": "LINs lab",
      "url": "https://huggingface.co/papers/2610.34283",
      "arxiv_url": "https://arxiv.org/abs/2610.34283",
      "title_ja": "ChronoReplay: ストリーミング空間知能に単一の回答インターフェースは不十分である",
      "summary_ja": "特定の空間回答形式に特化してしまう課題に対し、多様な空間教師データを時系列エピソードとしてリプレイ学習させることで、汎用的な空間認識を実現。"
    },
    {
      "id": "2610.33966",
      "title": "InteractiveWorld: A Verifiable Human-Centric Environment for Building Better Interactive MLLM Assistants",
      "abstract": "People have long dreamed of an assistant that is always there to guide them and remind what they forget, from new dishes to lost keys. Powered by multimodal large language models (MLLMs), egocentric AI assistants on wearable devices are bringing this dream within reach: they see what the user sees and give instructions for user's physical work when necessary. However, testing such assistance is challenging and usually requires real people. The expensive and rare real interaction data leaves a key question unanswered: Can today's MLLMs truly help people in physical world? To answer this question, we propose InteractiveWorld, the first verifiable environment for closed-loop interaction between human and AI assistant. Unlike existing robot-centric simulators, InteractiveWorld lets the assistant guide a human agent who observes the scene, understands instructions, and acts independently. It thus realistically simulates how AI assistant collaborates with human: the assistant instructs, the human acts, and the environment executes actions and updates what they see next. Building on it, we introduce InteractiveBench, the first dynamic benchmark for egocentric AI assistants, with 120 multi-turn tasks across six categories. In each task, the assistant guides the human in real time, and every instruction shapes the outcome, which is scored by verifiable, state-based rewards. Experiments with 12 frontier MLLMs show they are still far from reliable assistants. Even the strongest model, Claude Fable 5.1, achieves at most 20% and 25% on long-horizon Guidance and Planning tasks, respectively. Overall, our work offers a verifiable platform and a rigorous evaluation set, laying a solid foundation for research on interactive MLLM assistants that truly help people in the physical world.",
      "upvotes": 76,
      "github_stars": 132,
      "github_repo": "https://github.com/facebookresearch/InteractiveWorld",
      "project_page": "https://meta-interactiveworld.github.io/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.33966",
      "arxiv_url": "https://arxiv.org/abs/2610.33966",
      "title_ja": "InteractiveWorld: インタラクティブなMLLMアシスタント構築のための検証可能な人間中心環境",
      "summary_ja": "一人称視点映像に基づき、ユーザーの物理的な作業を支援するマルチモーダルLLMの性能を、閉ループ対話を通じて自動検証できるシミュレーション環境。"
    },
    {
      "id": "2610.39301",
      "title": "Youtu-Parsing-Omni: One Encoder, One Schema, All Modalities",
      "abstract": "We present Youtu-Parsing-Omni, an omni-modal parser that converts documents, images, audio, and video into structured records grounded in space and time, providing a perception layer for agents that read, locate, and cite evidence across modalities. Its design rests on one encoder for every modality and one schema for every task. Youtu-Omni-Encoder, initialized from a pre-trained language model to strengthen text reading, encodes all modalities with shared weights in a unified space-time coordinate system, and a few fusion layers let video frames attend to concurrent audio, bringing cross-modal fusion and temporal alignment into perception itself. OmniSchema unifies the outputs of all ten parsing tasks, allowing a single self-evolving post-training procedure, OmniSchema-Aware On-Policy Distillation (OSAD), to provide a shared token-role-based objective across tasks. In each round, the model is trained on its own rollouts against token-level targets from a reference-conditioned copy of itself, which is then refreshed with the trained weights, so that the parser and its supervision co-evolve. With a single 5 B-parameter checkpoint, Youtu-Parsing-Omni achieves state-of-the-art performance on OmniDocBench v1.6 (96.96 Overall) and leads all open-weight models on OmniParsingBench (75.08 Avg.), with its advantage concentrated on audio and video. It also achieves the best overall chart-parsing score (95.02) and the highest exact chemical-fingerprint agreement among compared systems, and matches a dedicated optical-music model in character-level transcription of typeset sheet music while staying far ahead of general-purpose systems. Code and model weights are publicly available.",
      "upvotes": 68,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://github.com/TencentCloudADP/youtu-parsing/tree/main/youtu_parsing_omni",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.39301",
      "arxiv_url": "https://arxiv.org/abs/2610.39301",
      "title_ja": "Youtu-Parsing-Omni: 一つのエンコーダ、一つのスキーマ、全モダリティ",
      "summary_ja": "文書、画像、音声、動画を共通の座標系とスキーマで構造化データに変換し、時間・空間的な根拠を伴う認識を可能にする全モダリティ対応パーサー。"
    },
    {
      "id": "2610.30932",
      "title": "UserArena: Benchmarking Interactive User Simulation for Long-Horizon Shopping Agents",
      "abstract": "Agentic recommendation pursues shopper goals through sequences of context-dependent decisions. Developing and evaluating such policies requires faithful recommendation world models that capture both the interactive shopping environment and users' behavioral responses over long interactions. Existing resources rarely provide long-horizon, fine-grained real-user trajectories or support trajectory-level evaluation and offline validation against production A/B results. We introduce UserArena, a real-world e-commerce interactive benchmark containing 64,729 session trajectories from 11,010 users, spanning 566,102 items and 13 action types. UserArena pairs these trajectories with an interactive environment and supports offline validation against outcomes from a controlled production A/B test, enabling five-level evaluation from output validity and local decisions to sequential behavior, personalization, and outcomes. To improve simulator fidelity over these long-horizon interactions, we further propose On-Policy Trajectory Distillation (OPTD), which uses trajectory-level intent to provide dense teacher targets on student-generated rollouts. Experiments show that OPTD achieves the strongest overall fidelity among the evaluated simulators under UserArena's evaluation protocol and most closely reproduces the production policy effect in offline simulation.",
      "upvotes": 63,
      "github_stars": 10,
      "github_repo": "https://github.com/RecGPT-Team/UserArena",
      "project_page": "https://recgpt-team.github.io/UserArena-Page/",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.30932",
      "arxiv_url": "https://arxiv.org/abs/2610.30932",
      "title_ja": "UserArena: 長期ショッピングエージェントのための対話型ユーザーシミュレーション評価",
      "summary_ja": "実世界の膨大な購買データに基づき、長期的な対話におけるユーザーの反応を忠実に再現してエージェントの推薦方策を評価できるベンチマーク。"
    },
    {
      "id": "2610.38568",
      "title": "A-RSI: Adaptive Task Refresh for Zero-Data Multimodal Self-Improvement",
      "abstract": "Recursive self-improvement requires models not only to acquire useful training experience, but also to decide when their current experience has ceased to be useful. Existing methods often focus on what experience to generate next, while paying less attention to when fresh experience should be introduced. Many also construct training targets through self-consistency or majority voting, making supervision depend on the model's own uncertain predictions. We address these two questions separately: training dynamics determine when to acquire new experience, while the answers to new tasks remain independently checkable. A-RSI monitors reward variation and accuracy in training logs to refresh a task pool when its learning signal declines, without consulting validation or test scores. A static library of model-authored programs produces multimodal questions and derives their reference answers; we specify the task-generation contract, automatically verify chosen properties of the reward and refresh rules, and separately audit the generated answers. The training loop uses no external training examples or human-written answer labels. On the primary eleven-benchmark suite, A-RSI raises the performance average from 57.77 to 61.05 with 800 fresh tasks.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://seerray-lab.github.io/A-RSI/",
      "comments": 4,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.38568",
      "arxiv_url": "https://arxiv.org/abs/2610.38568",
      "title_ja": "A-RSI: ゼロデータ・マルチモーダル自己改善のための適応的タスクリフレッシュ",
      "summary_ja": "学習の停滞を自動検知して新たなタスクを導入し、外部データなしでモデルが自身の予測を検証・学習し続けることで性能を高める自己改善手法。"
    },
    {
      "id": "2610.37666",
      "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
      "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a fundamental trade-off between scalable data and explicit action grounding. We introduce ThinkWorld, a VLA learning framework that grounds action reasoning in world dynamics and strengthens it through reinforcement learning with world imagination. ThinkWorld represents each action thought as a Chain-of-Dynamics (CoD), a sequence of discrete motion tokens that captures the intermediate dynamics connecting the current world to a future state and serves as a common action representation across embodiments. We first initialize CoD with action-labeled demonstrations, then predict the future induced by each CoD and reinforce those whose predictions better match the observed outcome. This enables videos without action annotations to provide direct supervision from observed state transitions, allowing human and robot experience to refine the same reasoning space. Experiments in simulation and on real robots demonstrate effective human-to-robot transfer and strong generalization to unseen tasks and environments.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://thinkworld-project.github.io/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.37666",
      "arxiv_url": "https://arxiv.org/abs/2610.37666",
      "title_ja": "ThinkWorld: 世界の想像がダイナミクス連鎖思考を強化する",
      "summary_ja": "ロボット操作において、行動を物理的変化の連鎖（CoD）として捉え、世界モデル内での想像と強化学習を組み合わせて汎用的な推論能力を向上させる手法。"
    },
    {
      "id": "2610.39302",
      "title": "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
      "abstract": "Whether models trained on different modalities converge to the same representation of the world is central to AI. The Platonic Representation Hypothesis (PRH) conjectures that they do as they scale, but without a proof it offers neither a guarantee nor a recipe. We turn the hypothesis into a theorem. First, we prove a Platonic Representation Theorem: Joint-Embedding Predictive Architectures (JEPAs) trained separately on any number of modalities learn the same representation up to one rotation whenever their positive pairs are two observations of one scene--good views--and their misalignment is bounded otherwise. Second, we show that next-token prediction is a JEPA with bad views, parts of a single document, which explains why language models align with vision only through scale. Third, we validate the theory from 145k captions to the texts of 940M web images, and uncover a scaling law of alignment that predicts unseen runs within seed noise. Good views need 42 times fewer training samples than next-token prediction on the same corpus to reach the same alignment, and a 109M-parameter text JEPA aligns with DINOv2 and CLIP's image encoders better than every language model we evaluated, up to 72B parameters, and than CLIP's text encoder: next-token prediction is a remarkably inefficient route to platonic representations. As a showcase, one rotation turns separately trained encoders into an image captioner (CIDEr .838 on COCO). Even that rotation needs no pair: on the latest pair-free benchmark, our text JEPA beats every zero-shot accuracy reported with language models up to 8B parameters, e.g., 64\\% against at most 56\\% top-5 on ImageNet-100. Positive views, and not scale alone, are thus the lever to build platonic representations.",
      "upvotes": 58,
      "github_stars": 36,
      "github_repo": "https://github.com/galilai-group/prh-proof",
      "project_page": "https://github.com/galilai-group/prh-proof",
      "comments": 4,
      "org": "galilai-group",
      "url": "https://huggingface.co/papers/2610.39302",
      "arxiv_url": "https://arxiv.org/abs/2610.39302",
      "title_ja": "JEPAを用いたプラトン的表現仮説の証明と改善",
      "summary_ja": "異なるモダリティで学習したモデルが同一の表現に収束するという仮説を数学的に証明し、次トークン予測よりもJEPAが理想的な表現に近いことを提示。"
    },
    {
      "id": "2610.33956",
      "title": "Continual Learning Exam: Benchmarking Long-Horizon RSI and Experiential Learning in LLM Agents",
      "abstract": "Continual learning is the ability of LLM agents to improve over time by acquiring, refining, and applying knowledge from experience while retaining useful prior knowledge. It is essential for agents learning over long time horizons, yet current evaluations largely assess individual task performance rather than improvement through accumulated experience. We introduce Continual Learning Exam (CLE), a large-scale benchmark developed by 50+ domain experts to measure experience-driven improvement in realistic professional workflows. CLE comprises 120 human-authored tasks, each organised as a five-level ladder, yielding 600 levels spanning 89 professional roles across 12 occupational domains. Agents must pass each level to unlock the next, with later levels building on experience accumulated during earlier assignments. An evaluation agent assesses each submission against human-authored rubrics. We compare a single-submission setting with one that provides diagnostic feedback after failure and allows one revision. Across 17 harness-model configurations using frontier LLMs, feedback and revision yield a median completion gain of 5.3 percentage points. Yet the best-performing system clears only 47.7% of levels and completes all five levels in just 23.3% of tasks, highlighting the difficulty of sustained learning from experience for existing frontier LLMs. As such, the dataset can also be used to post-train LLMs to strengthen their continual learning capabilities.",
      "upvotes": 58,
      "github_stars": 11,
      "github_repo": "https://github.com/haoyu-zhao/Continual-Learning-Exam",
      "project_page": "https://haoyu-zhao.github.io/CLE/index.html",
      "comments": 2,
      "org": "University College London",
      "url": "https://huggingface.co/papers/2610.33956",
      "arxiv_url": "https://arxiv.org/abs/2610.33956",
      "title_ja": "Continual Learning Exam: LLMエージェントにおける長期間の自己改善と経験学習の評価",
      "summary_ja": "50人以上の専門家が作成した120のタスクを用い、エージェントが経験を通じて知識を蓄積し、長期的に能力を向上させられるかを測定するベンチマーク。"
    },
    {
      "id": "2610.31162",
      "title": "HiSTEVE 1.0: Harnessing Human-Interface VLA Agents for Open-World Games",
      "abstract": "Building virtual embodied agents that operate in open-ended games like human players is a long-standing goal requiring both long-horizon autonomy and reliable native-interface control. As a procedurally generated open world, Minecraft provides a natural testbed for studying the integration of these capabilities. Existing agents typically provide either native visuomotor control without long-horizon autonomy or high-level planning executed through environment APIs or predefined skills. To bridge this gap, we propose HiSTEVE, a hierarchical VLA agent with a capability-aware agent harness. At the orchestration level, we equip the harness with structured memory for tracking progress and a VLM planner for selecting subtasks within the VLA's capabilities. To reliably determine subtask completion, we further introduce a policy-coupled task completion state detector that conditions on VLA policy context to signal candidate completion. At the control level, a single VLA executes all subtasks with vision-only perception and native keyboard-and-mouse actions. To mitigate interference between heterogeneous GUI and non-GUI interactions, we introduce regime-specific RMSNorm branches and separate mouse-movement token embeddings. We also train the VLA through world knowledge injection, imitation learning, and reinforcement learning with environment feedback to improve reliability and recovery. HiSTEVE achieves state-of-the-art atomic-task performance, scoring 85.0% on MineStudio Bench and a 37.4% average success rate on OpenHA, while also completing long-horizon tasks such as crafting an iron pickaxe from scratch like human players.",
      "upvotes": 57,
      "github_stars": 2,
      "github_repo": "https://github.com/Andytonglove/HiSTEVE-1.0",
      "project_page": "",
      "comments": 4,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.31162",
      "arxiv_url": "https://arxiv.org/abs/2610.31162",
      "title_ja": "HiSTEVE 1.0: オープンワールドゲームにおける人間インターフェースVLAエージェントの活用",
      "summary_ja": "Minecraftにおいて、長期的な計画とキーボード・マウス操作による低レベル制御を階層的なVLA構造で統合し、人間に近いプレイを実現。"
    },
    {
      "id": "2610.37230",
      "title": "TAO: Tool-Aware Joint Scheduling for LLM-Based Agentic Serving",
      "abstract": "Agentic services alternate between model inference on clustered GPUs and external tools on distributed CPUs. In this scenario, existing systems (1) overlook tool-return readiness in service evaluation, wasting limited resources, and (2) use heuristic strategies to decide admission and placement on GPUs, resulting in suboptimal scheduling decisions. To bridge this gap, we present TAO, a tool-aware joint scheduling framework for LLM-based agentic serving. Its value interface combines near-term tool readiness, node-specific cache credit with time-aware decay, and token footprint; a dynamic program jointly selects and places waiting sessions under capacity constraints. Across the 12 reported model-workload-concurrency settings, TAO reduces latency by up to 26.8%, reduces mean time to first token (TTFT) by up to 36.3%, and increases decode throughput by up to 29.5% relative to the best evaluated state-of-the-art baseline for each metric.",
      "upvotes": 56,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "AIOR",
      "url": "https://huggingface.co/papers/2610.37230",
      "arxiv_url": "https://arxiv.org/abs/2610.37230",
      "title_ja": "TAO: LLMベースのエージェント実行のためのツール考慮型ジョイントスケジューリング",
      "summary_ja": "ツールの応答待ち時間やGPUキャッシュの状態を考慮し、動的計画法を用いてエージェントの推論リクエストを効率的に配置・実行するフレームワーク。"
    },
    {
      "id": "2610.21240",
      "title": "Representation Redistribution in Sparse Autoencoders",
      "abstract": "Sparse autoencoders (SAEs) decompose language model activations into sparse features, but prompt transformations designed to preserve the underlying request can redistribute activity across them. A feature change observed on one transformed prompt need not recur, and even a recurring change need not affect a downstream computation. We introduce the redistribution sensitivity score (RSS), which identifies large feature responses that recur in a consistent direction, and evaluate the resulting supports on variants excluded from selection. Across 27 pretrained SAEs spanning eight language models, the tested prompt transformations produce a reproducible redistribution profile on these excluded variants. We then separate recurring representation change from signed readout contribution and decision failure. For a fixed linear readout, an exact decomposition shows how response magnitude, readout coefficients, directional alignment, and the clean margin determine downstream consequences. In two frozen safety readouts, combining RSS support erosion with the full clean margin yields recurrent failure AUROCs of 0.935 and 0.958 using median supports of 20 and 19 features, compared with 0.965 and 0.964 using full erosion. RSS therefore provides a way to identify recurring sparse representation changes and quantify their contribution to a downstream readout without equating representation change with failure. Code is available at https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "upvotes": 56,
      "github_stars": 2,
      "github_repo": "https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "project_page": "https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21240",
      "arxiv_url": "https://arxiv.org/abs/2610.21240",
      "title_ja": "稀疎自己符号化器（SAE）における表現の再分配",
      "summary_ja": "プロンプトの表現を変えた際に特徴量の活動がどう変化するかをRSS指標で分析し、LLM内部で再現性の高い特徴の再分配が起きていることを解明。"
    },
    {
      "id": "2610.32965",
      "title": "RynnUnify: Towards Unified Embodied Brain",
      "abstract": "We introduce RynnUnify, a 16B unified embodied model that combines strong embodied understanding with long-horizon visual planning through interleaved video--language reasoning. With capabilities spanning spatial reasoning, physical prediction, and grounding, RynnUnify connects an understanding of the physical world with visual anticipation of how it evolves across successive subtasks. Building on these capabilities, we further develop an agentic extension through reinforcement learning to selectively use video predictions for reasoning about unobserved states and interaction outcomes. We also develop a world-action extension of the full RynnUnify model, translating its understanding and prediction capabilities into robot control. To evaluate these capabilities, we introduce Rynn-VP and Rynn-GEU for long-horizon visual planning and anticipatory reasoning. Experiments show that RynnUnify achieves the highest average embodied understanding score among the evaluated unified multimodal models and improves the Rynn-VP overall score by 9.75 points over Cosmos 3 Nano. Its agentic extension improves the Rynn-GEU average by 6.0 points over direct reasoning, while the world-action extension achieves 51.5\\% success on 20 selected composite RoboCasa365 tasks and 46.7\\% average success across three real-robot tasks. Together, these results establish RynnUnify as a shared foundation for embodied understanding, visual planning, and robot control, taking a step toward a unified embodied brain.",
      "upvotes": 53,
      "github_stars": 69,
      "github_repo": "https://github.com/alibaba-damo-academy/RynnUnify",
      "project_page": "https://alibaba-damo-academy.github.io/RynnUnify.github.io/",
      "comments": 2,
      "org": "DAMO Academy",
      "url": "https://huggingface.co/papers/2610.32965",
      "arxiv_url": "https://arxiv.org/abs/2610.32965",
      "title_ja": "RynnUnify: 統一された身体知能脳に向けて",
      "summary_ja": "16B規模のモデルで物理予測と視覚計画を統合し、強化学習を用いて未観測状態の推論や長期的なタスク遂行、ロボット操作を可能にする統一モデル。"
    },
    {
      "id": "2610.37341",
      "title": "CodeCap-Bench: Can Code Serve as a Good Video Caption?",
      "abstract": "Video captioning aims to preserve visual information through compact descriptions, predominantly using natural language. However, precisely expressing fine-grained spatial structures and temporal dynamics in natural language often leads to lengthy and potentially ambiguous descriptions. In this work, we explore Code as Video Caption, a paradigm where executable programs serve as a complementary representation of visual content through graphical primitives, layout rules, and functions of time. To examine whether code captions effectively preserve video information, we compare them with natural language captions on downstream question answering and video reconstruction tasks. Our results show that code captions achieve superior reasoning accuracy and reconstruction fidelity. Despite these advantages, realizing the potential of code captioning depends on whether current multimodal large language models (MLLMs) can generate faithful code captions. To systematically assess this capability, we introduce CodeCap-Bench, which comprises 323 videos spanning five categories of structured 2D content, along with fine-grained annotations and a multi-level evaluation framework. Extensive experiments reveal that while leading proprietary MLLMs demonstrate promising code captioning capabilities, they still struggle to faithfully capture complex temporal dynamics, with open-source models lagging substantially behind.",
      "upvotes": 52,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://codecap-bench.github.io/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37341",
      "arxiv_url": "https://arxiv.org/abs/2610.37341",
      "title_ja": "CodeCap-Bench: コードは優れた動画キャプションになり得るか？",
      "summary_ja": "動画の内容を自然言語ではなく、幾何プリミティブや時間関数を含む「実行可能なコード」で表現することで、空間・時間情報をより正確に保持する試み。"
    },
    {
      "id": "2610.34415",
      "title": "Spatial Audio Generation and Editing with Executable Plans and Self-Distilling Transfusion",
      "abstract": "Spatial audio authoring coordinates source decisions with soundfield synthesis. For editing, plans specify what to change and retain, while reference audio supplies further acoustic detail. We present AMBIT, a unified framework for native First-Order Ambisonics (FOA) generation and editing with three connected contributions. First, a shared Transfusion backbone couples autoregressive planning with rectified-flow rendering through executable ScenePlans that specify source content, activity, and 3D trajectories. For editing, the plan describes the full target scene, including retained sources; contrastive features ground the requested change, while full reference latents supply residual acoustic detail for preservation. Second, an FOA-aware continuous VAE combines shared-decoder omnidirectional recovery, asymmetric grouped KL, and spatial covariance matching to preserve content and inter-channel structure. Third, joint Transfusion on-policy self-distillation (OPSD) refines planning on student-generated prefixes and rendering at sampling states reached under student plans, with target-conditioned teachers supervising both modes of the shared student. Evaluations across speech, music, and sound show improved generation content and spatial quality, acoustic fidelity during instruction-guided editing, and unedited-source preservation over the compared baselines. Project page: https://wjm-george.github.io/AMBIT/",
      "upvotes": 50,
      "github_stars": 20,
      "github_repo": "https://github.com/WJM-George/AMBIT",
      "project_page": "https://wjm-george.github.io/AMBIT/",
      "comments": 2,
      "org": "NoizAI",
      "url": "https://huggingface.co/papers/2610.34415",
      "arxiv_url": "https://arxiv.org/abs/2610.34415",
      "title_ja": "実行可能なプランと自己蒸留Transfusionによる空間オーディオの生成と編集",
      "summary_ja": "3D軌道などの実行可能なプランに基づき、高品質な立体音響を生成・編集できるフレームワーク「AMBIT」を提案。"
    },
    {
      "id": "2610.33135",
      "title": "WorldCast: World-Consistent Character Video Generation with Large-Angle Camera Control",
      "abstract": "Precise camera control is essential for cinematic character video generation, yet existing methods struggle to follow large-angle trajectories with combined rotation, translation, and radius variation from arbitrary initial azimuths. Such viewpoint changes also reveal character regions unseen in the initial frame, causing geometric distortions, appearance degradation, and identity drift. To systematically study these coupled challenges, we introduce CLACT, a large-scale Character-centric dataset and benchmark covering diverse Large-Angle Camera Trajectories, with accurate camera geometry and multi-view character observations for training and evaluation. We further propose WorldCast, a framework for world-consistent character video generation under diverse large-angle camera motions. Specifically, we back-project the initial frame into a 3D point cloud using estimated depth, align the point-cloud scale with the target camera trajectory, and render it along the trajectory to obtain explicit geometric guidance and coverage masks. To complement the incomplete character information, we introduce Geometry-Aligned Memory Attention (GAMA). Using relative camera poses estimated jointly from the initial frame and multi-view character anchors, we express anchor and target-view geometry in a common coordinate frame. GAMA uses this geometric alignment to guide the retrieval and injection of view-relevant character features during generation. Evaluations across diverse large-angle camera trajectories demonstrate accurate trajectory following while preserving character geometry, appearance, and identity.",
      "upvotes": 49,
      "github_stars": 54,
      "github_repo": "https://github.com/PixCtrol/WorldCast",
      "project_page": "https://pixctrol.github.io/WorldCast/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.33135",
      "arxiv_url": "https://arxiv.org/abs/2610.33135",
      "title_ja": "WorldCast: 広角カメラ制御を伴う世界一貫性のあるキャラクタービデオ生成",
      "summary_ja": "大幅な視点変更を伴うカメラ操作下でも、被写体の形状や外見を崩さずに一貫性を保ったキャラクター動画を生成する手法と大規模データセットを提示。"
    },
    {
      "id": "2610.32253",
      "title": "RSIHub: A Composable Framework for Agent-Evolution Methods",
      "abstract": "Agent-evolution methods use execution feedback to improve prompts, skills, tools, and orchestration, but their implementations often rebuild the same experimental machinery. We present RSIHub, an open-source framework for building, comparing, and extending these methods on shared infrastructure. Recipes compose reusable operators and declare mutable resources; RSIHub supplies execution, evaluation, recovery, and lineage. Researchers can focus on evolution policy while evaluation stays outside the mutable surface and results remain tied to candidates and evaluation conditions. We instantiate AHE, Hyperagents, A-Evolve, and GEPA without modifying the framework core, keeping method-specific logic in recipes and operators. We evaluate them with MiniSWE and Codex on Terminal Bench 2 and τ^3 Banking under fixed model and evaluator configurations. The largest observed overall pass@1 gain is 13.5 percentage points, while method rankings vary across settings and optimization gains do not always transfer to held-out tasks. RSIHub provides a common protocol for comparing evolution policies, inspectable candidate histories, and reusable components for developing new methods.",
      "upvotes": 49,
      "github_stars": 307,
      "github_repo": "https://github.com/simple-agent-lab/RSIHub",
      "project_page": "https://simpleagentlab.com/rsihub",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2610.32253",
      "arxiv_url": "https://arxiv.org/abs/2610.32253",
      "title_ja": "RSIHub: エージェント進化手法のための構成可能なフレームワーク",
      "summary_ja": "プロンプトやスキルの自己進化手法を共通基盤で構築・比較できるオープンソースツールを提供し、研究者が進化アルゴリズムの開発に集中できる環境を構築。"
    },
    {
      "id": "2610.36456",
      "title": "LociArt: A Unified Paradigm for Free-Style Local Video Stylization",
      "abstract": "Video stylization typically transforms entire scenes, while local artistic editing requires precise region--style association, spatial control, and temporal consistency. We introduce LociArt, a unified paradigm for free-style local video stylization that explicitly specifies where to stylize and what style to apply while preserving non-target content. At its core, GRNStyle builds on Generative Refinement Networks (GRN) and introduces a polar style-aware mask that embeds style identities as equal-norm directions within selected regions. Complementary representation--geometry conditioning combines encoded mask features with raw-mask spatial support, integrating spatiotemporal context with geometric control. To provide paired supervision, we develop an automated pipeline combining global stylization, video object removal, matting, and compositing, and construct the LociArt-100K Dataset with 100K local stylization pairs. We further establish the LociArt Benchmark, comprising 80 source videos and 84 target masks covering 168 foreground/background stylization cases, with a Style Prototype Similarity (SPS) evaluation scheme for regional style quality and complementary measures of non-target preservation and temporal consistency. Experiments show that GRNStyle outperforms existing methods in regional style quality and spatial control while maintaining strong temporal consistency. Qualitative examples further illustrate joint stylization of multiple regions with the same or different learned styles, despite training only on single-region, single-style pairs. Together, these components provide a unified foundation for learning and evaluating controllable local video stylization. Project page: https://higherhu.github.io/lociart/.",
      "upvotes": 48,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://higherhu.github.io/lociart/",
      "comments": 2,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.36456",
      "arxiv_url": "https://arxiv.org/abs/2610.36456",
      "title_ja": "LociArt: 自由なスタイルの局所的動画スタイル転送のための統一パラダイム",
      "summary_ja": "動画内の特定領域のみに任意のスタイルを適用しつつ、周囲の背景や時間的一貫性を高精度に維持できる新たな生成・編集手法を提案。"
    },
    {
      "id": "2610.33568",
      "title": "Trajectory2Gym: Decision-Grounded Compositional Interaction Synthesis for Tool-Use Agents",
      "abstract": "Successful tool-use trajectories are not necessarily useful supervision. Even successful interactions may underrepresent multi-step dependencies or contain actions that are unjustified by the information visible to the agent at decision time. We identify two coupled requirements for effective trajectory supervision: compositional coverage, so that important observation-action dependencies are represented, and decision grounding, so that each supervised action is supported by the learner-visible interaction history. We introduce Trajectory2Gym, which constructs executable interactions around under-supported compositional structures and derives supervision only from grounded decisions in their realized executions. Structural-support selection allocates the resulting experience, while parent-normalized supervised fine-tuning preserves the semantic interaction as the unit of training weight. This reframes trajectory generation as the deliberate construction of learnable interaction experience, rather than the collection of successful trajectories. Across five Qwen3 scales, Trajectory2Gym improves Tau1, Tau2, and BFCL at every tested scale, increasing the equal-weight three-benchmark mean by 16.9-29.8 percentage points. The gains are strongest in stateful and multi-turn interaction, where later decisions depend on earlier observations and feedback. Our results suggest that scaling tool-use agents depends not only on collecting more successful trajectories, but on constructing interactions whose dependencies are represented and whose decisions are learnable from the agent's visible history.",
      "upvotes": 48,
      "github_stars": 30,
      "github_repo": "https://github.com/yihaohu0118/Trajectory2Gym",
      "project_page": "https://yihaohu0118.github.io/Trajectory2Gym-page/",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.33568",
      "arxiv_url": "https://arxiv.org/abs/2610.33568",
      "title_ja": "Trajectory2Gym: ツール利用エージェントのための意思決定根拠に基づいた構成的対話合成",
      "summary_ja": "成功事例だけでなく、その時点で可視化された情報に基づき正当化される行動のみを教師データとして抽出・生成することで、学習効率を高める手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Liquid AI's LFM3 Squeezes Multimodal AI Into 1GB on Local Hardware",
      "summary": "Liquid AI's LFM3 family packs text, vision, audio, omni, and decision models into six 2B-class checkpoints built from one tri-hybrid backbone.",
      "url": "https://alphasignal.ai/news/liquid-ai-s-lfm3-squeezes-multimodal-ai-into-1gb-on-local-hardware",
      "published": "2026-11-01T03:40:23+09:00",
      "title_ja": "Liquid AI、LFM3により1GBのローカル環境でマルチモーダルAIを実現",
      "summary_ja": "単一のハイブリッド基盤から構築された2Bクラスの6つのモデル群により、テキストや画像、音声などを1GBのローカル環境に収めた。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Unsloth Shrinks Qwen-Image-2.1-Turbo to 2.47 GB for Consumer GPUs",
      "summary": "Unsloth packaged Qwen's 8-step distilled image model as GGUF quants, letting the 7B generator run from under 3GB up to full F16 on consumer hardware.",
      "url": "https://alphasignal.ai/news/unsloth-shrinks-qwen-image-2-1-turbo-to-2-47-gb-for-consumer-gpus",
      "published": "2026-11-01T01:00:24+09:00",
      "title_ja": "UnslothがQwen-Image-2.1-Turboを2.47GBに縮小、一般向けGPUに対応",
      "summary_ja": "Qwenの画像を生成する7Bモデルを量子化し、3GB未満のビデオメモリで動作可能にすることで、一般のハードウェアでの実行を容易にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Sperid Labs' Idol Turns a Single Photo Into a Million-Gaussian 3D Asset",
      "summary": "Sperid Labs released Idol, an Apache 2.0 image-to-3D model that generates up to 1M Gaussian splats in seconds on consumer GPUs.",
      "url": "https://alphasignal.ai/news/sperid-labs-idol-turns-a-single-photo-into-a-million-gaussian-3d-asset",
      "published": "2026-10-31T21:33:36+09:00",
      "title_ja": "Sperid Labs、1枚の写真から100万ガウシアンの3D資産を生成する「Idol」を公開",
      "summary_ja": "1枚の画像から、最大100万のガウス・スプラッティングによる3Dモデルを一般向けGPUを用いて数秒で生成できるApache 2.0モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Agent Sprite Forge Automates 2D Game Characters From One Approved Still",
      "summary": "Agent Sprite Forge 0.4 turns one approved character still into a full game-ready sprite set with animations, loops, and engine exports.",
      "url": "https://alphasignal.ai/news/agent-sprite-forge-automates-2d-game-characters-from-one-approved-still",
      "published": "2026-10-31T21:03:58+09:00",
      "title_ja": "Agent Sprite Forge、1枚の静止画から2Dゲームキャラクター制作を自動化",
      "summary_ja": "承認された1枚のキャラクター静止画から、アニメーションやループ処理、エンジン書き出しが可能なゲーム用スプライト一式を自動生成する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Mainplane Gives Coding Agents Searchable Memory to Beat Context Limits",
      "summary": "Mainplane is an open-source agent harness that replaces lossy context compaction with full-session retrieval, cutting cost and latency on long-running agent runs.",
      "url": "https://alphasignal.ai/news/mainplane-gives-coding-agents-searchable-memory-to-beat-context-limits",
      "published": "2026-10-31T15:20:38+09:00",
      "title_ja": "Mainplane、コーディングエージェントにコンテキスト制限を克服する検索可能メモリを提供",
      "summary_ja": "情報を失うコンテキスト圧縮の代わりに全セッション検索を採用し、長時間のエージェント実行におけるコストと遅延を削減するオープンソース基盤。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Agents Snuck Harmful Behavior Past Its Own Safety Monitor",
      "summary": "Anthropic set thousands of Claude agents loose to generate training data that slips past safety monitors but still produces misaligned models.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-agents-snuck-harmful-behavior-past-its-own-safety-monitor",
      "published": "2026-10-31T10:59:06+09:00",
      "title_ja": "AnthropicのClaudeエージェントが自社の安全監視をすり抜ける有害な挙動を生成",
      "summary_ja": "安全監視を回避しつつ整合性の欠けたモデルを生成する訓練データを作成させることで、監視網をすり抜ける有害な挙動を特定した。"
    },
    {
      "lab": "Hugging Face",
      "title": "nemotron-halloween",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-halloween",
      "published": "2026-10-31T02:57:24+09:00",
      "title_ja": "nemotron-halloween",
      "summary_ja": "（本文に具体的な機能や詳細の記載なし）"
    },
    {
      "lab": "OpenAI",
      "title": "Making it easier for websites to express AI training preferences",
      "summary": "OpenAI will honor a shared robots.txt signal to help website operators communicate their AI training preferences to participating providers.",
      "url": "https://openai.com/index/helping-websites-express-ai-training-preferences",
      "published": "2026-10-30T18:30:00+09:00",
      "title_ja": "OpenAI、WebサイトがAI学習の好みを表明しやすくする仕組みを導入",
      "summary_ja": "共有のrobots.txtシグナルを尊重することで、Webサイト運営者がAI学習に関する設定を参加プロバイダーに伝えられるようにした。"
    },
    {
      "lab": "OpenAI",
      "title": "Community safety report and new protections for teens",
      "summary": "OpenAI is strengthening violence prevention in ChatGPT with expanded safeguards, earlier interventions, and a new commitment to public safety reporting.",
      "url": "https://openai.com/index/community-safety-report-and-new-protections-for-teens",
      "published": "2026-10-30T18:00:00+09:00",
      "title_ja": "コミュニティの安全報告と若者向けの新しい保護策",
      "summary_ja": "ChatGPTにおける暴力防止策を強化し、早期介入の拡大や公共の安全に関する定期的な報告を行う新たな取り組みを導入した。"
    },
    {
      "lab": "OpenAI",
      "title": "Fair use benefits everyone",
      "summary": "OpenAI shares excerpts from court briefs by creators, academics, accessibility advocates, and legal experts, among others, on how fair use supports AI training and innovation.",
      "url": "https://openai.com/index/fair-use-benefits-everyone",
      "published": "2026-10-30T09:00:00+09:00",
      "title_ja": "フェアユースがすべての人にもたらす利益",
      "summary_ja": "クリエイターや法律専門家らの意見書を引用し、フェアユースがAIのトレーニングと革新をどのように支えているかを共有した。"
    },
    {
      "lab": "OpenAI",
      "title": "An updated Model Spec for more capable and beneficial AI",
      "summary": "OpenAI’s updated Model Spec outlines five core values to guide more capable AI toward sound judgment, human agency, and faithfulness to human intent.",
      "url": "https://openai.com/index/updated-model-spec",
      "published": "2026-10-30T02:00:00+09:00",
      "title_ja": "より有能で有益なAIを目指す更新版「Model Spec」",
      "summary_ja": "高度なAIが健全な判断を下し、人間の主体性や意図に忠実であるよう導くための5つの核となる価値観を概説した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1.1 — Update models like you update software",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1",
      "published": "2026-10-29T22:37:07+09:00",
      "title_ja": "Granite Switch 4.1.1 — ソフトウェアのようにモデルを更新",
      "summary_ja": "（本文に詳細な機能説明なし）"
    },
    {
      "lab": "OpenAI",
      "title": "How we detect frontier model misalignment",
      "summary": "OpenAI uses layered monitoring to detect frontier model misalignment and unauthorized agent behavior so responders can intervene before incidents escalate.",
      "url": "https://openai.com/index/how-we-detect-frontier-model-misalignment",
      "published": "2026-10-29T18:00:00+09:00",
      "title_ja": "フロンティアモデルの不整合を検出する方法",
      "summary_ja": "層状のモニタリングを使用してモデルの不整合や未承認のエージェント行動を検出し、インシデントが拡大する前に介入を可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "How Ropes & Gray is developing AI for transactional diligence",
      "summary": "Ropes & Gray is developing AI for transactional diligence with OpenAI. Lawyers review grouped documents, summaries, and reports before advising clients.",
      "url": "https://openai.com/index/ropes-gray-ai-diligence",
      "published": "2026-10-29T16:00:00+09:00",
      "title_ja": "Ropes & Gray、OpenAIと取引デューデリジェンス用AIを開発",
      "summary_ja": "弁護士がAIの生成した文書グループ、要約、レポートを確認してからクライアントに助言を行う、取引調査のためのAI活用を進めている。"
    },
    {
      "lab": "Hugging Face",
      "title": "Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready",
      "summary": "",
      "url": "https://huggingface.co/blog/announcing-project-protostar",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Project ProtoStarの発表：公的資金による科学をAI対応に",
      "summary_ja": "（本文に具体的な機能や詳細の記載なし）"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Le Chonk: Mistral Large 4 on Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/mistral-large4",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Hugging FaceにMistral Large 4（Le Chonk）が登場",
      "summary_ja": "（本文に具体的な機能や詳細の記載なし）"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing AnySpeechRecognizer and AnyDecisionModel: Open Models for Speech and Decisions on Apple Platforms",
      "summary": "",
      "url": "https://huggingface.co/blog/anydecisionmodel",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Appleプラットフォーム向けのオープンな音声・意思決定モデルが登場",
      "summary_ja": "Appleプラットフォーム上で動作する音声認識モデルAnySpeechRecognizerと、意思決定モデルAnyDecisionModelを発表。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代のフロンティアモデル",
      "summary_ja": "（本文に具体的な機能や詳細の記載なし）"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "sleepフレームワーク：LLMが継続学習で知識を保持するための新手法",
      "summary_ja": "継続学習においてLLMが知識を保持し続けるための新しい仕組みを提案する教育イノベーション。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build specialized multimodal models with LFM3",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm3",
      "published": "2026-10-28T02:16:52+09:00",
      "title_ja": "LFM3による特化型マルチモーダルモデルの構築",
      "summary_ja": "（本文に具体的な機能や詳細の記載なし）"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイムシミュレーションにおいて、これまでにないリアリズムを実現する新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成を事前学習に用いたリアルタイムなガウシアン頭部アニメーション",
      "summary_ja": "少数の画像と表情信号から3Dの頭部をリアルタイムで動かす手法。個別の形状構築と実行時のアニメーション予測を分離し、高画質と高速化を両立。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AIを活用して、結核の診断・検査現場に基盤モデルを導入する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上のすべての10メートル区画を、異なる森林タイプに分類したグローバルな地図を作成。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波による現場の母体ケアの強化",
      "summary_ja": "ヘルスケアおよびバイオサイエンス分野において、AI支援の超音波技術を用いて現場での妊産婦ケアを支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地させる：自律型ウェットラボの構成要素",
      "summary_ja": "科学分野において、自律的なウェットラボ（実験室）を構築するための基礎となるAIエージェントの仕組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学向けのGoogle Antigravityを用いて、新しい抗菌ペプチドの探索プロセスを高速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたローカルおよび分散LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用したMLXフレームワークにより、プライベートな環境での最新モデルの推論や微調整を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論（SSR）：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由形式の生成ではなく「選択」として再定義し、小型モデルにおける推論コストの削減と効率化を図るフレームワーク。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMがスタブを生成してから検索する手法と、検索後に計画を立てる従来手法を比較研究し、膨大なツール定義を扱う効率的な方法を調査。"
    }
  ]
};
