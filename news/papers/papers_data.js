window.papersData = {
  "updated_at": "2026-11-02 10:21 JST",
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
      "id": "2610.37381",
      "title": "PDRVLA: A Vision-Language-Action Model with Physical Dynamics Representations",
      "abstract": "Vision--Language--Action (VLA) models generate robot actions from visual observations and language instructions, but their understanding of physical dynamics remains limited. Video world models can capture scene dynamics, yet generating future videos introduces high latency into the control loop. We introduce PDRVLA, whose lightweight Physical Dynamics Module extracts physical tokens from vision--language features to condition action generation without online video generation. The module learns through direct prediction of future RGB, depth, and optical-flow features, with auxiliary supervision through a frozen pretrained video world model. Training relies entirely on publicly available data, expanded through human-to-robot synthesis, subtask annotation, and embodied chain-of-thought (ECoT) annotation. Across four simulation benchmarks, PDRVLA achieves success rates of 99.3% on LIBERO, 89.9% on LIBERO-Plus, 93.6% on RoboTwin~2.0, and 81.5% on SimplerEnv. Ablations show improved future prediction with world-model supervision and evaluate how subtask conditioning, future object-pose supervision, and ECoT training affect action success.",
      "upvotes": 153,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37381",
      "arxiv_url": "https://arxiv.org/abs/2610.37381",
      "title_ja": "PDRVLA: 物理動力学表現を備えた視覚・言語・行動モデル",
      "summary_ja": "軽量な物理動力学モジュールにより、オンラインの動画生成なしで将来の物理的特徴を予測し、ロボットの行動生成を物理法則に適合させることができる。"
    },
    {
      "id": "2610.35684",
      "title": "OmniShowcase: Omnidirectional Subject-Consistent Video Generation from Multi-View Images",
      "abstract": "Generating videos of a specific subject from a few reference images remains challenging when the camera reveals surfaces that are not visible in the input. Early subject-to-video (S2V) methods condition on a single reference image and must therefore infer the subject's unseen appearance and geometry as the viewpoint changes. To address this limitation, recent methods extend S2V to multiple reference views, providing more information about the subject from different viewpoints. However, they do not explicitly specify the 3D structure that connects these observations. In addition, existing training data do not guarantee that viewpoint changes preserve the same underlying 3D subject. We present OmniShowcase, built on two components: (i) a fully automated data synthesis pipeline that produces training videos along diverse camera trajectories, with viewpoint variation driven by underlying subject geometry, even spanning full 360-degree orbits; and (ii) a geometry-conditioning method that provides the video model with a turntable of surface-normal maps reconstructed from the reference views without requiring temporal alignment with the generated frames. We construct Showcase-4K, a corpus of 3D-asset-based videos covering twelve camera motions across 88 trajectory configurations with reconstruction-derived surface-normal conditioning, and ShowcaseBench, a held-out evaluation set with the source meshes and camera parameters used to render each video. Experiments show state-of-the-art subject identity and 3D consistency while maintaining competitive video quality and motion. Project page: justin4ai.github.io/OmniShowcase",
      "upvotes": 135,
      "github_stars": 11,
      "github_repo": "https://github.com/justin4ai/OmniShowcase",
      "project_page": "https://justin4ai.github.io/OmniShowcase/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.35684",
      "arxiv_url": "https://arxiv.org/abs/2610.35684",
      "title_ja": "OmniShowcase: 多視点画像からの全方位・被写体一貫性のある動画生成",
      "summary_ja": "複数の参照視点画像から被写体の3D構造を明示的に指定することで、視点変化に伴う未確認部分の幾何学的・外見的な一貫性を保った動画生成を可能にする。"
    },
    {
      "id": "2610.32749",
      "title": "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes",
      "abstract": "Streaming audio-visual target speaker extraction (AVTSE) is essential for latency-sensitive applications. However, current causal systems face two coupled gaps. First, standard benchmarks fix the number of speakers at two and ignore the near-/far-field interference, reverberation, and sudden noise of real scenes. Second, high-performance causal architectures are too heavy for edge deployment. Lightweight alternatives try to reclaim capacity by repeatedly invoking a small separator, which offsets the savings. To address the first gap, we release RealSSA, a realistic AVTSE benchmark consisting of RealSSA-Sim and RealSSA-Real. RealSSA-Sim provides controllable simulated scenes with 1--5 dynamic near-field interfering speakers; scenes with far-field interference additionally include 10--15 far-field interfering speakers. RealSSA-Real provides a held-out real-recorded evaluation set. To address the second gap, we propose Falcon, a causal AVTSE method. Its Separator performs multi-scale time-frequency separation in a single encoder--decoder pass. We train Falcon with an encoder-space speaker contrastive loss. This loss suppresses near-field leakage at zero inference cost and transfers across backbones. Falcon achieves state-of-the-art extraction quality on RealSSA-Sim, LRS2-2Mix, LRS3-2Mix, and VoxCeleb2-2Mix. Compared with the causal AV-TFGridNet baseline, it cuts parameters by 91.9%, computation by 20.2 times, and GPU inference latency by 11.1 times. Code and demo are available at https://cslikai.cn/Falcon/.",
      "upvotes": 135,
      "github_stars": 40,
      "github_repo": "https://github.com/JusperLee/Falcon",
      "project_page": "https://cslikai.cn/Falcon/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.32749",
      "arxiv_url": "https://arxiv.org/abs/2610.32749",
      "title_ja": "実世界の音響シーンに向けた効率的なストリーミング型視覚・音響ターゲット話者抽出",
      "summary_ja": "実環境を模擬した新ベンチマークRealSSAを提供し、複雑なノイズ下でもエッジデバイスで動作可能な軽量かつ高性能なターゲット話者抽出を実現する。"
    },
    {
      "id": "2610.36729",
      "title": "Hy-Nomas: Towards Free-form Interactive World Generation",
      "abstract": "Interactive world generation requires models to follow successive commands while preserving relevant history and action consequences. We present Hy-Nomas, a video world model with an 8B diffusion backbone that supports free-form text instructions and continuous camera control across multiple interaction turns. It generates variable-length segments conditioned on current inputs and cached history. Our central design aligns structured video captions with action-aware causal attention: descriptive context remains accessible across segments, while action instructions are restricted to their intended temporal windows. A vision-language Prompt Enhancer (PE) translates user requests and multimodal interaction histories into structured conditions for the next segment. A multi-stage curriculum progressively introduces causal generation, text interaction, camera control, and training on model-generated histories, followed by diffusion distillation. In human evaluation, Hy-Nomas shows superior performance over existing world models. We release model weights, code and benchmarks, together with a lightweight adaptation workflow, to support reproducible research on interactive world generation.",
      "upvotes": 122,
      "github_stars": 442,
      "github_repo": "https://github.com/Tencent-Hunyuan/Hy-Nomas",
      "project_page": "https://hy-nomas.hy.tencent.com/",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.36729",
      "arxiv_url": "https://arxiv.org/abs/2610.36729",
      "title_ja": "Hy-Nomas: 自由形式のインタラクティブな世界生成に向けて",
      "summary_ja": "構造化された動画キャプションと因果的注意機構を統合し、自由なテキスト指示と連続的なカメラ制御に従った一貫性のある多ターン世界生成を実現する。"
    },
    {
      "id": "2610.35845",
      "title": "Work Agents: Systems, Capabilities, and Optimization",
      "abstract": "As foundation models evolve from information generation to digital work execution, agents are increasingly capable of completing complex tasks across tools, applications, and workflows. However, existing research lacks a unified perspective on how agents reliably accomplish delegated work. To address this gap, we present a work-centric, system-level perspective that views work agents as systems combining foundation models and runtime harnesses to execute tasks in stateful workspaces and deliver verifiable outcomes. We introduce two complementary dimensions, work persistence and work openness, to characterize working conditions, and classify digital work into five forms according to task scope and organization. Building on this framework, we identify five core capability families required for reliable work execution and examine approaches to model optimization, harness optimization, and their joint optimization. We further analyze existing evaluation methods and metrics from the perspective of work outcomes. Finally, we discuss future research directions, including sustained work delegation, adaptation to open environments, and the interaction between work execution and capability improvement. This paper provides a unified framework for understanding, optimizing, and evaluating work agents, supporting the development of systems capable of delivering reliable, verifiable, and practically valuable work outcomes.",
      "upvotes": 116,
      "github_stars": 70,
      "github_repo": "https://github.com/EnjunDu/awesome-working-agent",
      "project_page": "https://enjundu.com/blog/working_agents",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.35845",
      "arxiv_url": "https://arxiv.org/abs/2610.35845",
      "title_ja": "Work Agents: システム、能力、および最適化",
      "summary_ja": "デジタル作業を実行するエージェントを、基盤モデルと実行環境を組み合わせた「システム」として定義し、持続性と開放性の観点からその動作条件を体系化した。"
    },
    {
      "id": "2610.36671",
      "title": "Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs",
      "abstract": "Diffusion vision-language models (DVLMs) process their entire input at every denoising step. Since visual tokens make up 89-97% of this input on the benchmarks we study, most of the decoding computation is spent repeatedly processing the same image. Visual token pruning methods partially relieve this burden by removing part of the visual tokens, but they lose the removed information and still process the remaining image at every step. To measure how often the image is actually needed, we compare LLaDA-V's predictions with and without the image at every decoding step and find that removing the image changes a token being unmasked at only 22.8% of steps on average and at as few as 7.9%. We therefore propose LOWN, a decoding method that decides at every step whether to process the image and how many tokens to unmask. LOWN predicts the masked tokens without the image and processes the image only when this prediction disagrees with the last image-conditioned prediction. Agreement certifies the earlier prediction for reuse, and the number of certified tokens sets how many are unmasked in that step. We further observe that the need for the image differs across benchmarks, so LOWN's adaptive decision is needed rather than a fixed schedule. Without training or a tuned threshold, LOWN retains 99.6% of LLaDA-V's score on ten benchmarks at 35.3% of the decoding FLOPs on average. LOWN also generalizes across LLaDA-based DVLMs, composes orthogonally with visual token pruning, and runs under key-value caching for further efficiency gains. Code and project page are available at https://hyeon9698.github.io/LOWN/",
      "upvotes": 104,
      "github_stars": 14,
      "github_repo": "https://github.com/hyeon9698/LOWN",
      "project_page": "https://hyeon9698.github.io/LOWN/",
      "comments": 3,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.36671",
      "arxiv_url": "https://arxiv.org/abs/2610.36671",
      "title_ja": "Look Only When Needed: 効率的な拡散VLMのための証明書ガイド型視覚ルーティング",
      "summary_ja": "デコード中に画像が必要なステップのみを特定して視覚処理を行うことで、情報の損失を抑えつつ拡散視覚言語モデルの計算コストを大幅に削減する。"
    },
    {
      "id": "2610.34662",
      "title": "StreamVibe: Proactive Video Agents for Evolving User Intent",
      "abstract": "Vision-language models are shifting from offline passive understanding toward online proactive interaction. However, prevailing methods largely rely on explicit requests while miss the implicit user intent (e.g., \"where should I click next?\" while a user navigate a website), meanwhile fail to update the state simultaneously as user requests might update continuously. These limitations make them less suited to intent-aware interaction in practical. To address these challenges, we introduce StreamVibe-Bench, a new benchmark serving as testbed for user intent interaction, with 4.1K evaluation samples and 85K training samples spanning explicit, implicit, and dynamic intents. Building on this benchmark, we develop StreamVibe-VL, a streaming proactive model that infers implicit user intents from continuous observations and dynamically tailors its interactions as these intents evolve. We further introduce StreamVibe-Harness, which maintains user intents as persistent states with a fleixble lifecycles via a hierarchical memory to track the latest user intent and environmental state. Our experiments reveal three key findings: (i) StreamVibe-VL preserves strong general video understanding while improving response timing and answer quality by 10.7% over other baselines; (ii) existing proactive models remain limited in understanding user intent and deciding when to respond, especially under implicit and dynamic intents; and (iii) StreamVibe-Harness further improves response consistency and adaptation over sustained interaction, resulting in a 12.3% gain in proactive interaction.",
      "upvotes": 95,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.34662",
      "arxiv_url": "https://arxiv.org/abs/2610.34662",
      "title_ja": "StreamVibe: 変化するユーザー意図に対応する能動的ビデオエージェント",
      "summary_ja": "明示的な要求だけでなく、状況から推測される潜在的な意図や逐次変化する指示に対応するための新しいベンチマークと、それに対応可能な能動的相互作用モデルを提案。"
    },
    {
      "id": "2610.37230",
      "title": "TAO: Tool-Aware Joint Scheduling for LLM-Based Agentic Serving",
      "abstract": "Agentic services alternate between model inference on clustered GPUs and external tools on distributed CPUs. In this scenario, existing systems (1) overlook tool-return readiness in service evaluation, wasting limited resources, and (2) use heuristic strategies to decide admission and placement on GPUs, resulting in suboptimal scheduling decisions. To bridge this gap, we present TAO, a tool-aware joint scheduling framework for LLM-based agentic serving. Its value interface combines near-term tool readiness, node-specific cache credit with time-aware decay, and token footprint; a dynamic program jointly selects and places waiting sessions under capacity constraints. Across the 12 reported model-workload-concurrency settings, TAO reduces latency by up to 26.8%, reduces mean time to first token (TTFT) by up to 36.3%, and increases decode throughput by up to 29.5% relative to the best evaluated state-of-the-art baseline for each metric.",
      "upvotes": 92,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "AIOR",
      "url": "https://huggingface.co/papers/2610.37230",
      "arxiv_url": "https://arxiv.org/abs/2610.37230",
      "title_ja": "TAO: LLMベースのエージェント提供のためのツール認識型ジョイントスケジューリング",
      "summary_ja": "外部ツールの準備状況やキャッシュ、トークン消費量を考慮した動的計画法により、LLMエージェントサービスの推論とツール実行の最適なスケジューリングを実現する。"
    },
    {
      "id": "2610.36068",
      "title": "Rollback: Experience Backtracking in World Models for Policy Improvement",
      "abstract": "Action-conditioned world models offer a scalable alternative to costly real-world interaction for improving robot policies. However, existing world-model-based methods largely treat world models as forward-only surrogates of the physical environment, leaving untapped a capability no physical environment affords: rewinding to past decision points to explore counterfactual futures. We introduce Rollback, a policy improvement paradigm that turns world models from passive simulators into counterfactual engines: it rolls back to critical decision points, branches into alternative actions, and contrasts their outcomes to attribute success to individual decisions. This concentrates imagination where it matters most and distills counterfactual outcomes into fine-grained, action-level supervision without a separately learned value model. We build a scalable training system that unifies distributed world-model search with asynchronous real-robot execution, forming a self-reinforcing cycle: real-world experience continually sharpens the world model, and a sharper world model in turn drives further policy improvement. We term the world-model side of this cycle test-time physics grounding, a capability that hand-built physics simulators lack: while the world model serves as the training environment, real transitions from the policy it trains correct its dynamics through a lightweight LoRA pipeline. Experiments on three challenging real-world tasks show that Rollback improves success rates over the strongest baseline by an absolute 10.67%, 11.11%, and 11.85% on block extraction, ball tossing, and tabletop curling, respectively, while achieving more stable improvement throughout training. Although initialized from teleoperated demonstrations far below human level, Rollback surpasses the average success rate of human players on both ball tossing and tabletop curling within 8 hours of training.",
      "upvotes": 82,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://rollback-wm.github.io/",
      "comments": 2,
      "org": "AgiBot World",
      "url": "https://huggingface.co/papers/2610.36068",
      "arxiv_url": "https://arxiv.org/abs/2610.36068",
      "title_ja": "Rollback: 方策改善のための世界モデルにおける経験バックトラッキング",
      "summary_ja": "世界モデルを過去の分岐点まで「巻き戻し」て別の行動を試す反実仮想的な検証を行うことで、物理環境では不可能な効率的なロボット方策の改善を可能にする。"
    },
    {
      "id": "2610.34283",
      "title": "ChronoReplay: One Answer Interface Is Not Enough for Streaming Spatial Intelligence",
      "abstract": "Training a spatial VLM to answer which side an object lies on does not require it to preserve the metric displacement that determines that answer, while supervision for a distance estimate may leave categorical relations largely unconstrained. When post-training emphasizes one readout, improvements can therefore concentrate on that interface while transfer to others remains weak or even degrades; we call this observed specialization interface lock-in. ChronoReplay addresses it by replaying heterogeneous spatial supervision as chronologically ordered episodes, retaining source-native targets, and balancing supervision across families. Under the same observation access, a single ChronoReplay checkpoint improves OVO-S-Bench, OST-Bench, and UCS-Bench together, including a 13.41-point gain on OST-Bench, and achieves the highest three-benchmark mean among the supervision settings compared here. Same-data controls further separate the ingredients of this transfer: answer serialization redistributes gains across OST and UCS, family-balanced learning improves over ordinary joint SFT and natural turn weighting, and chronological replay exceeds a shifted-order control by about 2.41 OST points across two paired seeds. Adaptive frame selection then changes evidence access while keeping the trained model fixed, providing an additional inference-time gain at lower visual cost. Streaming spatial performance depends on what distinctions supervision preserves, how heterogeneous histories are organized during learning, and what causal evidence inference makes available at test time.",
      "upvotes": 74,
      "github_stars": 36,
      "github_repo": "https://github.com/yihaohu0118/ChronoReplay",
      "project_page": "https://yihaohu0118.github.io/ChronoReplay/",
      "comments": 2,
      "org": "LINs lab",
      "url": "https://huggingface.co/papers/2610.34283",
      "arxiv_url": "https://arxiv.org/abs/2610.34283",
      "title_ja": "ChronoReplay: ストリーミング空間知能には単一の回答インターフェースでは不十分である",
      "summary_ja": "多様な空間的監視情報を時系列エピソードとして再生し学習することで、特定形式の回答への過学習を防ぎ、位置関係と絶対距離の両方を正確に捉える空間知能を実現する。"
    },
    {
      "id": "2610.39302",
      "title": "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
      "abstract": "Whether models trained on different modalities converge to the same representation of the world is central to AI. The Platonic Representation Hypothesis (PRH) conjectures that they do as they scale, but without a proof it offers neither a guarantee nor a recipe. We turn the hypothesis into a theorem. First, we prove a Platonic Representation Theorem: Joint-Embedding Predictive Architectures (JEPAs) trained separately on any number of modalities learn the same representation up to one rotation whenever their positive pairs are two observations of one scene--good views--and their misalignment is bounded otherwise. Second, we show that next-token prediction is a JEPA with bad views, parts of a single document, which explains why language models align with vision only through scale. Third, we validate the theory from 145k captions to the texts of 940M web images, and uncover a scaling law of alignment that predicts unseen runs within seed noise. Good views need 42 times fewer training samples than next-token prediction on the same corpus to reach the same alignment, and a 109M-parameter text JEPA aligns with DINOv2 and CLIP's image encoders better than every language model we evaluated, up to 72B parameters, and than CLIP's text encoder: next-token prediction is a remarkably inefficient route to platonic representations. As a showcase, one rotation turns separately trained encoders into an image captioner (CIDEr .838 on COCO). Even that rotation needs no pair: on the latest pair-free benchmark, our text JEPA beats every zero-shot accuracy reported with language models up to 8B parameters, e.g., 64\\% against at most 56\\% top-5 on ImageNet-100. Positive views, and not scale alone, are thus the lever to build platonic representations.",
      "upvotes": 66,
      "github_stars": 56,
      "github_repo": "https://github.com/galilai-group/prh-proof",
      "project_page": "https://github.com/galilai-group/prh-proof",
      "comments": 4,
      "org": "galilai-group",
      "url": "https://huggingface.co/papers/2610.39302",
      "arxiv_url": "https://arxiv.org/abs/2610.39302",
      "title_ja": "JEPAを用いたプラトン表現仮説の証明と改善",
      "summary_ja": "異なるモダリティから得た情報の予測学習が共通の表現に収束することを理論的に証明し、次トークン予測が抱える視覚情報の欠落などの課題を数理的に明らかにした。"
    },
    {
      "id": "2610.38568",
      "title": "A-RSI: Adaptive Task Refresh for Zero-Data Multimodal Self-Improvement",
      "abstract": "Recursive self-improvement requires models not only to acquire useful training experience, but also to decide when their current experience has ceased to be useful. Existing methods often focus on what experience to generate next, while paying less attention to when fresh experience should be introduced. Many also construct training targets through self-consistency or majority voting, making supervision depend on the model's own uncertain predictions. We address these two questions separately: training dynamics determine when to acquire new experience, while the answers to new tasks remain independently checkable. A-RSI monitors reward variation and accuracy in training logs to refresh a task pool when its learning signal declines, without consulting validation or test scores. A static library of model-authored programs produces multimodal questions and derives their reference answers; we specify the task-generation contract, automatically verify chosen properties of the reward and refresh rules, and separately audit the generated answers. The training loop uses no external training examples or human-written answer labels. On the primary eleven-benchmark suite, A-RSI raises the performance average from 57.77 to 61.05 with 800 fresh tasks.",
      "upvotes": 66,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://seerray-lab.github.io/A-RSI/",
      "comments": 4,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.38568",
      "arxiv_url": "https://arxiv.org/abs/2610.38568",
      "title_ja": "A-RSI: ゼロデータ・マルチモーダル自己改善のための適応的タスク更新",
      "summary_ja": "モデルの訓練ログから報酬の変化と精度を監視し、新しい経験が必要なタイミングを自動判断することで、外部データなしで効率的にマルチモーダルモデルを自己改善させる。"
    },
    {
      "id": "2610.37666",
      "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
      "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a fundamental trade-off between scalable data and explicit action grounding. We introduce ThinkWorld, a VLA learning framework that grounds action reasoning in world dynamics and strengthens it through reinforcement learning with world imagination. ThinkWorld represents each action thought as a Chain-of-Dynamics (CoD), a sequence of discrete motion tokens that captures the intermediate dynamics connecting the current world to a future state and serves as a common action representation across embodiments. We first initialize CoD with action-labeled demonstrations, then predict the future induced by each CoD and reinforce those whose predictions better match the observed outcome. This enables videos without action annotations to provide direct supervision from observed state transitions, allowing human and robot experience to refine the same reasoning space. Experiments in simulation and on real robots demonstrate effective human-to-robot transfer and strong generalization to unseen tasks and environments.",
      "upvotes": 66,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://thinkworld-project.github.io/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.37666",
      "arxiv_url": "https://arxiv.org/abs/2610.37666",
      "title_ja": "ThinkWorld: 世界の想像がダイナミクス・チェイン推論を強化する",
      "summary_ja": "行動の思考を離散モーションの連鎖として表現し、想像した世界の物理変化との不整合を強化学習で最小化することで、人間動画からロボット操作の一般化能力を獲得する。"
    },
    {
      "id": "2610.33966",
      "title": "InteractiveWorld: A Verifiable Human-Centric Environment for Building Better Interactive MLLM Assistants",
      "abstract": "People have long dreamed of an assistant that is always there to guide them and remind what they forget, from new dishes to lost keys. Powered by multimodal large language models (MLLMs), egocentric AI assistants on wearable devices are bringing this dream within reach: they see what the user sees and give instructions for user's physical work when necessary. However, testing such assistance is challenging and usually requires real people. The expensive and rare real interaction data leaves a key question unanswered: Can today's MLLMs truly help people in physical world? To answer this question, we propose InteractiveWorld, the first verifiable environment for closed-loop interaction between human and AI assistant. Unlike existing robot-centric simulators, InteractiveWorld lets the assistant guide a human agent who observes the scene, understands instructions, and acts independently. It thus realistically simulates how AI assistant collaborates with human: the assistant instructs, the human acts, and the environment executes actions and updates what they see next. Building on it, we introduce InteractiveBench, the first dynamic benchmark for egocentric AI assistants, with 120 multi-turn tasks across six categories. In each task, the assistant guides the human in real time, and every instruction shapes the outcome, which is scored by verifiable, state-based rewards. Experiments with 12 frontier MLLMs show they are still far from reliable assistants. Even the strongest model, Claude Fable 5.1, achieves at most 20% and 25% on long-horizon Guidance and Planning tasks, respectively. Overall, our work offers a verifiable platform and a rigorous evaluation set, laying a solid foundation for research on interactive MLLM assistants that truly help people in the physical world.",
      "upvotes": 56,
      "github_stars": 161,
      "github_repo": "https://github.com/facebookresearch/InteractiveWorld",
      "project_page": "https://meta-interactiveworld.github.io/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.33966",
      "arxiv_url": "https://arxiv.org/abs/2610.33966",
      "title_ja": "InteractiveWorld: インタラクティブなMLLMアシスタント構築のための検証可能な人間中心環境",
      "summary_ja": "物理世界での家事などの作業中にAIが適切な指示や助言を行えるかを、クローズドループのシミュレーション環境を通じて客観的かつ自動的に検証することを可能にする。"
    },
    {
      "id": "2610.31670",
      "title": "Sensorimotor Alignment: A Platonic Proxy for Embodied Policy Success",
      "abstract": "Robot foundation models are typically evaluated through costly closed-loop rollouts, motivating low-cost offline proxies for model capability. The Platonic Representation Hypothesis (PRH) suggests that as representations improve, modalities such as vision and language converge toward a shared statistical model of reality. We ask whether motion trajectories form another such modality: as embodied models become more capable, should their sensory representations converge toward the structure of physical motion? To test this, we propose Sensorimotor Alignment (S^2), a training-free offline metric that measures how well a model's sensory representation aligns with the geometry of physical motion. We find that S^2 correlates positively with downstream robot task success across model families, making it a low-cost offline proxy for prioritizing models before closed-loop evaluation. S^2 can also identify promising vision-language model (VLM) backbones before costly fine-tuning into vision-language-action models (VLAs). Beyond this correlation, S^2 offers representation-level explanations for phenomena observed in VLAs and world action models (WAMs). With S^2, we extend PRH to robotics and make sensorimotor alignment measurable, offering a low-cost, representation-level view of robot foundation models that closed-loop success rates alone cannot reveal.",
      "upvotes": 54,
      "github_stars": 8,
      "github_repo": "https://github.com/yunfeixie233/sensorimotor-alignment",
      "project_page": "https://yunfeixie233.github.io/s2/",
      "comments": 2,
      "org": "Rice University",
      "url": "https://huggingface.co/papers/2610.31670",
      "arxiv_url": "https://arxiv.org/abs/2610.31670",
      "title_ja": "感覚運動アライメント: ロボット方策の成功を測るプラトン的プロキシ",
      "summary_ja": "感覚表現が物理運動の幾何学的構造とどれだけ一致しているかを測定することで、実機での検証なしにロボットモデルの能力を評価できる訓練不要のオフライン指標を提案。"
    },
    {
      "id": "2610.32285",
      "title": "Trial by Trace: Benchmarking AI Agent Harnesses for Reliability and Failure Attribution",
      "abstract": "LLM agents are increasingly used to solve real-world problems, and their effectiveness depends on both the underlying models and the harnesses that support their operation. However, most existing benchmarks focus on model capabilities and overall agent performance, with limited attention to the evaluation of agent harnesses. To address this gap, we introduce TraceTrial-Bench, which organizes harness reliability into seven components covering context, execution, governance, lifecycle, observability, tools, and verification. We construct 95 expert-level, mechanism-oriented tasks with executable or state-based ground truth to support semantically equivalent comparisons while preserving the native behavior of each harness. We design a Trajectory Tracing (TT) module to capture agent execution traces and introduce a two-layer evaluation framework that separately assesses agent performance and harness reliability. In addition, we design a Multi-source Evidence Acquisition (MEA) module to provide evidence from the agent context, harness, and execution environment for LLM-based evaluation, and develop a Failure Attribution (FA) module that uses explicit mechanism chains to support attribution at the run level. Across 4 harnesses, 9 models, and 95 tasks, our evaluation of 3,420 runs yields macro-averaged harness scores ranging from 59.8% to 72.0%, while 31.1% of runs achieve task success despite failing at least one harness criterion. TraceTrial-Bench provides an auditable and reproducible foundation for comparing agent harnesses, diagnosing their failures, and studying how harness design interacts with model behavior.",
      "upvotes": 53,
      "github_stars": 23,
      "github_repo": "https://github.com/TraceLite-AI/TraceTrial-Bench",
      "project_page": "https://tracelite.ai/trial-by-trace.html",
      "comments": 6,
      "org": "TraceLite AI",
      "url": "https://huggingface.co/papers/2610.32285",
      "arxiv_url": "https://arxiv.org/abs/2610.32285",
      "title_ja": "Trial by Trace: AIエージェント実行環境の信頼性と失敗原因特定のためのベンチマーク",
      "summary_ja": "モデルだけでなく、実行環境（ハーネス）の信頼性を検証・監視などの7要素で評価するベンチマークを構築し、エージェントの失敗がどこに起因するかを詳細に分析可能にする。"
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
      "title_ja": "CodeCap-Bench: コードは優れたビデオキャプションになり得るか？",
      "summary_ja": "実行可能なコードを動画記述形式として採用し、自然言語では曖昧になりがちな空間構造や時間的変化を精密に表現することで、動画再構成などのタスク精度を向上させる。"
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
      "title_ja": "実行可能なプランと自己蒸留Transfusionによる立体音響の生成と編集",
      "summary_ja": "音源の軌跡などを含むシーンプランを介して、3D音響の生成と既存音源の保持・変更を伴う編集を一貫して行えるフレームワークAMBITを開発した。"
    },
    {
      "id": "2610.33135",
      "title": "WorldCast: World-Consistent Character Video Generation with Large-Angle Camera Control",
      "abstract": "Precise camera control is essential for cinematic character video generation, yet existing methods struggle to follow large-angle trajectories with combined rotation, translation, and radius variation from arbitrary initial azimuths. Such viewpoint changes also reveal character regions unseen in the initial frame, causing geometric distortions, appearance degradation, and identity drift. To systematically study these coupled challenges, we introduce CLACT, a large-scale Character-centric dataset and benchmark covering diverse Large-Angle Camera Trajectories, with accurate camera geometry and multi-view character observations for training and evaluation. We further propose WorldCast, a framework for world-consistent character video generation under diverse large-angle camera motions. Specifically, we back-project the initial frame into a 3D point cloud using estimated depth, align the point-cloud scale with the target camera trajectory, and render it along the trajectory to obtain explicit geometric guidance and coverage masks. To complement the incomplete character information, we introduce Geometry-Aligned Memory Attention (GAMA). Using relative camera poses estimated jointly from the initial frame and multi-view character anchors, we express anchor and target-view geometry in a common coordinate frame. GAMA uses this geometric alignment to guide the retrieval and injection of view-relevant character features during generation. Evaluations across diverse large-angle camera trajectories demonstrate accurate trajectory following while preserving character geometry, appearance, and identity.",
      "upvotes": 50,
      "github_stars": 54,
      "github_repo": "https://github.com/PixCtrol/WorldCast",
      "project_page": "https://pixctrol.github.io/WorldCast/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.33135",
      "arxiv_url": "https://arxiv.org/abs/2610.33135",
      "title_ja": "WorldCast: 広角カメラ制御による世界一貫性のあるキャラクター動画生成",
      "summary_ja": "大規模な広角カメラ軌道データセットを活用し、複雑なカメラワーク下でもキャラクターの外見や幾何学的整合性を損なわずに動画を生成する手法を提案。"
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
      "title_ja": "LociArt: 自由形式のローカルビデオスタイライゼーションのための統一パラダイム",
      "summary_ja": "特定の領域に任意のスタイルを適用する際、極座標的なマスク埋め込みと時空間的な幾何条件付けにより、非対象領域を維持しながら一貫性のあるスタイル変換を実現する。"
    },
    {
      "id": "2610.33512",
      "title": "Eat Your Precision: Precision Objective Mitigates Reward Hacking in Rubric-based RL",
      "abstract": "Rubric-based rewards enable effective reinforcement learning on non-verifiable tasks. However, because these rewards are typically defined as a weighted measure of rubric coverage, models are trained primarily to maximize a recall objective. As a result, RL-trained models produce responses that are more complete but also more verbose and contain more unnecessary or factually incorrect content, leading them to be less preferred than responses from the base model. To address this issue, we present the FORK reward, which jointly optimizes recall and a novel precision objective, which requires each unit of a model response to be both necessary and factually correct, as measured by rubric-driven necessity credits and a factual-correctness grader, respectively. Our experimental results show that FORK outperforms existing rubric-based RL methods and achieves Pareto-optimal performance that balances rubric coverage and overall response quality. Compared to the original recall-based reward, FORK substantially improves precision and reduces response length while achieving similar rubric coverage, which leads to significantly higher win rate compared to the base policy (e.g., from 10.6% to 68.0% on RubricHub-Medical and from 22.1% to 74.1% on HealthBench).",
      "upvotes": 47,
      "github_stars": 2,
      "github_repo": "https://github.com/JHKim631/FORK",
      "project_page": "",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.33512",
      "arxiv_url": "https://arxiv.org/abs/2610.33512",
      "title_ja": "Eat Your Precision: ルーブリックベースのRLにおける報酬ハッキングを緩和する精度目標",
      "summary_ja": "回答の網羅性だけでなく、各記述が必要かつ事実として正しいかを評価する「精度報酬」を導入することで、強化学習特有の長文化や事実誤認を抑制し選好度を高める。"
    },
    {
      "id": "2610.34467",
      "title": "DynaFlow: Learning Free-Form Multi-Agent Orchestration",
      "abstract": "Multi-agent systems often rely on predefined collaboration structures, limiting their ability to adapt to diverse task requirements. We introduce DynaFlow, a framework that integrates free-form executable workflow synthesis into the action space of the main agent. The agent decides when collaboration is needed and generates task-specific programs that coordinate sub-agents through sequential or parallel execution, structured information exchange, and verification. Execution results and traces inform subsequent actions, enabling the agent to adapt collaboration as reasoning progresses. We train only the main agent through supervised fine-tuning on distilled trajectories, followed by refinement on examples filtered for unsupported premises, biased verification, and information-flow defects. All sub-agents remain fixed, separating orchestration learning from executor capability improvement. Across six benchmarks spanning mathematical reasoning, scientific question answering, and multi-hop retrieval, DynaFlow achieves 88.08% overall accuracy in Forced mode, outperforming the strongest evaluated baseline by 10.90 percentage points with the same Qwen3.5-27B backbone. Workflow analysis finds more explicit use, verification, and refinement of upstream outputs after training, highlighting cross-stage information flow as a key dimension of multi-agent orchestration.",
      "upvotes": 47,
      "github_stars": 199,
      "github_repo": "https://github.com/amiya-special/Dynaflow",
      "project_page": "https://amiya-special.github.io/DynaFlow-website",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.34467",
      "arxiv_url": "https://arxiv.org/abs/2610.34467",
      "title_ja": "DynaFlow: 自由形式のマルチエージェントオーケストレーションの学習",
      "summary_ja": "必要に応じて最適なワークフローをエージェントが自ら生成・実行し、複数のサブエージェントを動的に連携させることで、多様なタスクに柔軟に適応する仕組みを開発した。"
    },
    {
      "id": "2610.33956",
      "title": "Continual Learning Exam: Benchmarking Long-Horizon RSI and Experiential Learning in LLM Agents",
      "abstract": "Continual learning is the ability of LLM agents to improve over time by acquiring, refining, and applying knowledge from experience while retaining useful prior knowledge. It is essential for agents learning over long time horizons, yet current evaluations largely assess individual task performance rather than improvement through accumulated experience. We introduce Continual Learning Exam (CLE), a large-scale benchmark developed by 50+ domain experts to measure experience-driven improvement in realistic professional workflows. CLE comprises 120 human-authored tasks, each organised as a five-level ladder, yielding 600 levels spanning 89 professional roles across 12 occupational domains. Agents must pass each level to unlock the next, with later levels building on experience accumulated during earlier assignments. An evaluation agent assesses each submission against human-authored rubrics. We compare a single-submission setting with one that provides diagnostic feedback after failure and allows one revision. Across 17 harness-model configurations using frontier LLMs, feedback and revision yield a median completion gain of 5.3 percentage points. Yet the best-performing system clears only 47.7% of levels and completes all five levels in just 23.3% of tasks, highlighting the difficulty of sustained learning from experience for existing frontier LLMs. As such, the dataset can also be used to post-train LLMs to strengthen their continual learning capabilities.",
      "upvotes": 45,
      "github_stars": 11,
      "github_repo": "https://github.com/haoyu-zhao/Continual-Learning-Exam",
      "project_page": "https://haoyu-zhao.github.io/CLE/index.html",
      "comments": 2,
      "org": "University College London",
      "url": "https://huggingface.co/papers/2610.33956",
      "arxiv_url": "https://arxiv.org/abs/2610.33956",
      "title_ja": "Continual Learning Exam: LLMエージェントにおける長期的自己改善と経験学習のベンチマーク",
      "summary_ja": "5段階の難易度を持つ120の専門的タスクを通じ、エージェントが過去の経験を蓄積・応用して長期的に能力を向上させられるかを測定する大規模な評価指標を構築。"
    },
    {
      "id": "2601.15351",
      "title": "OmniSpectra: A Unified Foundation Model for Universal Spectra Representation Learning",
      "abstract": "Standard sequence models encode position by token rank rather than physical coordinate, typically forcing practitioners to destructively resample continuous physical signals such as spectra observed across heterogeneous instruments. We identify this coordinate mismatch as a structural limitation in cross-instrument representation learning, and propose OmniSpectra, a wavelength-native foundation model for spectral representation learning: a continuous-coordinate masked autoencoder that discards the integer pixel indexing of sequence modeling. Mapping physical coordinates to a logarithmic basis turns the multiplicative scaling induced by cosmological redshift into a uniform additive shift. In continuous rotary position embeddings, this shared shift cancels from relative token distances rather than producing grid-dependent positional distortion. We further counter the spectral bias inherent to implicit neural decoders with a physics-grounded, resolution-gated Fourier decoder that provides anti-aliasing. Pretrained on eight surveys and benchmarked against seven baselines, our model reaches state-of-the-art performance with only 12.2M parameters while outperforming substantially larger models, indicating that encoding physical structure can substitute for parameter scale.",
      "upvotes": 44,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2601.15351",
      "arxiv_url": "https://arxiv.org/abs/2601.15351",
      "title_ja": "OmniSpectra: 普遍的なスペクトル表現学習のための統一基盤モデル",
      "summary_ja": "物理的な波長座標を直接扱うマスク付き自己符号化器により、異なる測定機器間の仕様差を吸収し、再サンプリングなしで高精度なスペクトル解析を可能にする。"
    },
    {
      "id": "2610.36077",
      "title": "The Trinity:Capability-Driven Recursive Self-Improvement for Multimodal Agents",
      "abstract": "Multimodal intelligence can be viewed as human-guided co-evolution between worlds and agents through interaction. However, scaling this process faces two bottlenecks: constructing heterogeneous, verifiable environments is costly, and manual Harness iteration cannot keep pace with growing task diversity and complexity. A key insight is that tasks with different modalities and surface forms can share the same underlying capability requirements. We therefore introduce The Trinity, a recursive self-improvement framework coupling world generation with Harness evolution through three roles: Creator, Explorer, and Evolver. Drawing on verified execution trajectories, Evolver shifts the basis of task organization from surface categories to shared requirements, reorganizing the original task tree into a hierarchical capability tree. We introduce Capability-Driven Real2Sim2Real: for heterogeneous tasks at the same node, Creator abstracts their common requirements into simplified, verifiable simulated worlds for capability learning, while evaluation on original tasks measures transfer. Along this capability tree, Explorer progressively evolves reusable capability modules through selective inheritance, forming a Harness tree whose validated updates accumulate across iterations within a fixed topology. The resulting Harnesses specialize in different capabilities, motivating a Capability-Aware Harness Router that uses public task information to select compatible module configurations from the tree. Our evolved Harnesses improve mean performance by 34 points across 28 training benchmarks and 26 points across 18 unseen benchmarks, including two real-world embodied tasks.",
      "upvotes": 44,
      "github_stars": 42,
      "github_repo": "https://github.com/InfRec-Cardinal/The-Trinity",
      "project_page": "https://trinity-rsi.github.io/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.36077",
      "arxiv_url": "https://arxiv.org/abs/2610.36077",
      "title_ja": "The Trinity: マルチモーダルエージェントのための能力駆動型再帰的自己改善",
      "summary_ja": "世界生成、環境探索、進化の3つの役割を連携させ、検証済みの実行軌跡から環境自体を適応的に進化させることで、複雑なタスクに対するエージェントの能力を自律的に高める。"
    },
    {
      "id": "2610.33568",
      "title": "Trajectory2Gym: Decision-Grounded Compositional Interaction Synthesis for Tool-Use Agents",
      "abstract": "Successful tool-use trajectories are not necessarily useful supervision. Even successful interactions may underrepresent multi-step dependencies or contain actions that are unjustified by the information visible to the agent at decision time. We identify two coupled requirements for effective trajectory supervision: compositional coverage, so that important observation-action dependencies are represented, and decision grounding, so that each supervised action is supported by the learner-visible interaction history. We introduce Trajectory2Gym, which constructs executable interactions around under-supported compositional structures and derives supervision only from grounded decisions in their realized executions. Structural-support selection allocates the resulting experience, while parent-normalized supervised fine-tuning preserves the semantic interaction as the unit of training weight. This reframes trajectory generation as the deliberate construction of learnable interaction experience, rather than the collection of successful trajectories. Across five Qwen3 scales, Trajectory2Gym improves Tau1, Tau2, and BFCL at every tested scale, increasing the equal-weight three-benchmark mean by 16.9-29.8 percentage points. The gains are strongest in stateful and multi-turn interaction, where later decisions depend on earlier observations and feedback. Our results suggest that scaling tool-use agents depends not only on collecting more successful trajectories, but on constructing interactions whose dependencies are represented and whose decisions are learnable from the agent's visible history.",
      "upvotes": 44,
      "github_stars": 41,
      "github_repo": "https://github.com/yihaohu0118/Trajectory2Gym",
      "project_page": "https://yihaohu0118.github.io/Trajectory2Gym-page/",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.33568",
      "arxiv_url": "https://arxiv.org/abs/2610.33568",
      "title_ja": "Trajectory2Gym: ツール利用エージェントのための意思決定に基づいた構成的相互作用合成",
      "summary_ja": "利用可能な情報に基づいた根拠ある判断のみを教師データとして抽出し、複雑な操作の依存関係を網羅する相互作用を合成することで、高品質なツール利用の学習を可能にする。"
    },
    {
      "id": "2610.34186",
      "title": "HuGe: Scaling Humanoid Generalist Vision-Language-Action Models with Egocentric Experience",
      "abstract": "Extending Vision-Language-Action models (VLAs) to humanoid robots requires coordinated whole-body control and diverse demonstrations that are costly to collect in real-world scenarios. Although egocentric human demonstrations provide a complementary source of task experience, differences in visual embodiment and missing robot proprioception complicate transfer to humanoid policies. To address these challenges, we introduce HuGe, a family of Humanoid Generalist VLAs pre-trained on over 2,000 hours of egocentric human and robot data. Specifically, HuGe employs three existing representative VLA architectures to predict latent motion tokens for a pretrained whole-body controller, together with hand-control signals. Based on this, we introduce a three-stage training pipeline that combines egocentric pre-training, humanoid adaptation, and downstream fine-tuning. To facilitate transfer across embodiments, we construct pseudo-proprioceptive states through simulation playback during pre-training and modify arm appearance in egocentric observations through re-rendering during downstream fine-tuning. With this pipeline, HuGe achieves the state-of-the-art on simulation benchmark HumanoidArena. Furthermore, real-world experiments on the Unitree G1 indicate that augmenting robot demonstrations with visually adapted egocentric demonstrations significantly increases success on a pick-and-drop task.",
      "upvotes": 43,
      "github_stars": 13,
      "github_repo": "https://github.com/yliu-cs/HuGe",
      "project_page": "https://yliu-cs.github.io/HuGe",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.34186",
      "arxiv_url": "https://arxiv.org/abs/2610.34186",
      "title_ja": "HuGe: 一人称視点経験によるヒューマノイド汎用VLAモデルのスケーリング",
      "summary_ja": "2,000時間以上の一人称視点データで学習し、視覚的な体の違いや感覚情報の欠如を克服して、ヒューマノイドロボットの全身制御を可能にする汎用モデルを開発。"
    },
    {
      "id": "2610.40614",
      "title": "L3G-World: Real-Time Infinite World Generation with Latent 3D Gaussian Memory",
      "abstract": "Interactive world models generate visual content conditioned on user actions, yet maintaining spatial consistency over long-horizon exploration in real time remains challenging. Existing approaches rely on either temporal context or explicit 3D memory, both of which scale poorly because memory grows with the length of the generated stream. Moreover, explicit 3D memories condition latent video generators by re-encoding RGB renderings, which precludes real-time generation. In this paper, we introduce a Latent 3D Gaussian Memory (L3G) that combines the efficiency of feed-forward reconstruction with a compact, rapidly renderable scene representation. Building on this memory, we propose L3G-World, in which a memory updater and a video diffusion transformer (DiT) alternate autoregressively to generate spatially consistent worlds. The memory updater spawns Gaussians in newly observed regions and refines existing ones, so that the memory grows with scene extent rather than stream length. Each Gaussian further stores a VAE latent feature, allowing the memory to be rendered directly into the DiT's latent space without VAE re-encoding. Experiments show that L3G-World achieves state-of-the-art generation quality and long-horizon spatial consistency, with up to 38.6times fewer 3D primitives, 3.2times faster memory updates, and 359times faster memory rendering relative to the most efficient prior 3D-memory baseline for each metric, enabling real-time world generation at 9 FPS.",
      "upvotes": 42,
      "github_stars": 35,
      "github_repo": "https://github.com/cvlab-kaist/L3G-World",
      "project_page": "https://cvlab-kaist.github.io/L3G-World/",
      "comments": 5,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.40614",
      "arxiv_url": "https://arxiv.org/abs/2610.40614",
      "title_ja": "L3G-World: 潜在3Dガウスメモリによるリアルタイムの無限世界生成",
      "summary_ja": "生成された情報をコンパクトな3Dガウス表現の潜在空間に保存し、それを直接参照して動画を生成することで、長期の探索でも空間的一貫性を保ちつつリアルタイム動作を実現する。"
    },
    {
      "id": "2610.32195",
      "title": "Principia: Test-Time Hypotheses to Principle Construction for Scientific Discovery",
      "abstract": "Scientific discovery requires identifying the scientific principles underlying observed phenomena to guide further investigation. As these empirical principles are often unknown in complex discovery processes, they are constructed via a hypotheses-to-principle pipeline to obtain recurring causalities from progressively accumulated observations during test-time discovery. However, constructing this knowledge requires substantial domain expertise, time, and effort, making this translation stage a bottleneck for scientific discovery. To address this limitation, we propose Principia, an LLM-based framework that constructs and continually refines scientific principles at test time. Drawing on how human researchers develop principles, Principia forms comparative causal hypotheses from related inputs and their observed outcomes, then synthesizes recurring relationships across these hypotheses into inductive principles. By applying the constructed hypotheses and inductive principles to the task, it obtains new observations, revises the hypotheses used based on these new observations, and reconstructs principles from the updated hypotheses, allowing scientific knowledge to continuously evolve throughout test-time discovery. Across benchmarks spanning molecular optimization, protein engineering, gene perturbation, and molecular property prediction, Principia outperforms baselines relying on internal knowledge, external sources, or experience summaries, while generating principles that are plausible and consistent with the scientific literature, demonstrating its effectiveness in constructing and refining task-specific hypotheses and principles at test time for scientific discovery. Our code is available at https://github.com/DongkiKim95/Principia.",
      "upvotes": 42,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.32195",
      "arxiv_url": "https://arxiv.org/abs/2610.32195",
      "title_ja": "Principia: 科学的発見のためのテストタイムにおける仮説から原理への構築",
      "summary_ja": "観測データから因果関係を抽出して科学的原理を構築・洗練するプロセスをLLMで自動化し、複雑な科学的発見のボトルネックとなる人間による知識化作業を支援する。"
    },
    {
      "id": "2610.24520",
      "title": "HABIT-Bench: Evaluating Habit Induction from Longitudinal Weak Evidence in Agent Memory",
      "abstract": "In long-term interactions with large language model (LLM) agents, users reveal habits through their choices and actions. These habits capture implicit user information that agents must infer across conversations. However, individual observations may provide only partial evidence about a habit or when it applies. Retaining past interactions alone does not ensure that agents can infer habits and apply them appropriately. We introduce HABIT-Bench to evaluate how well agent memory systems infer habits from weak evidence and apply them to later requests. We construct synthetic user histories from task-oriented dialogue data and controlled habit graphs. The histories span hundreds of sessions across food, finance, software, and travel. Four-choice tasks assess agents' ability to infer user habits and apply them appropriately. They include temporary exceptions, changes in habits, and suggestions that users have not accepted. Sampled tasks undergo independent human review. We evaluate eight memory methods with Qwen3-235B-A22B and GLM-5.3-Flash. The best-performing memory method achieves 33.61\\% macro accuracy across the four domains. Performance remains limited even when annotated evidence is supplied directly. These results expose a persistent gap between access to past interactions and the ability to infer and appropriately use user habits.",
      "upvotes": 39,
      "github_stars": 4,
      "github_repo": "https://github.com/LUMIA-Group/habit-bench",
      "project_page": "https://hollyming.github.io/habit-bench-site/",
      "comments": 7,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.24520",
      "arxiv_url": "https://arxiv.org/abs/2610.24520",
      "title_ja": "HABIT-Bench: エージェントの記憶における長期的な弱い証拠からの習慣推論の評価",
      "summary_ja": "断片的な対話履歴からユーザーの潜在的な「習慣」を推論し、その後のサービスに適切に反映できるかを評価するための長期記憶ベンチマークを提案。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "AutoTrust's Qwen3.8 Drafter Hits 48 tok/s, Nearly 4x Faster on DGX Spark",
      "summary": "A community-tuned drafter for Qwen3.8-27B's NVFP4 build pushes DGX Spark decode from 12.5 to 48.2 tokens per second, bit-exact lossless.",
      "url": "https://alphasignal.ai/news/autotrust-s-qwen3-8-drafter-hits-48-tok-s-nearly-4x-faster-on-dgx-spark",
      "published": "2026-11-02T07:00:34+09:00",
      "title_ja": "Qwen3.8向けAutoTrust Drafter、DGX Sparkで約4倍の高速化を実現",
      "summary_ja": "コミュニティ調整のDrafterにより、27Bモデルのデコード速度が12.5から48.2 tok/sへ向上し、ロスレスな高速化を達成した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Third Intelligence's Haas-ja-v1.0 Beats GPT-Transcribe on Japanese Speech at 75x Lower Cost",
      "summary": "A Japanese ASR model from Third Intelligence hits 6.12% CER at roughly 1/70th the cost of GPT-Transcribe, matching commercial APIs.",
      "url": "https://alphasignal.ai/news/third-intelligence-s-haas-ja-v1-0-beats-gpt-transcribe-on-japanese-speech-at",
      "published": "2026-11-02T03:40:10+09:00",
      "title_ja": "Third IntelligenceのHaas-ja-v1.0、GPT-Transcribeの1/70のコストで同等精度を実現",
      "summary_ja": "日本語音声認識において、CER 6.12%を達成しながら、商用APIやGPT-Transcribeと比較して圧倒的な低コスト化に成功した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenGVLab's InternVL2-1B Beats Larger 4B Vision Models at Under 2GB",
      "summary": "OpenGVLab released InternVL2-1B, a sub-billion-parameter vision language model pairing InternViT-300M with Qwen2-0.5B for edge-friendly multimodal reasoning.",
      "url": "https://alphasignal.ai/news/opengvlab-s-internvl2-1b-beats-larger-4b-vision-models-at-under-2gb",
      "published": "2026-11-02T01:00:26+09:00",
      "title_ja": "OpenGVLab、2GB未満で動作し4Bモデルを凌駕するInternVL2-1Bを公開",
      "summary_ja": "10億パラメータ未満の軽量な視覚言語モデルであり、エッジデバイスでの効率的なマルチモーダル推論を可能にする。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Scenario Labs Opens MIT Agent Skills Library Covering 70+ AI Creative Tools",
      "summary": "Scenario Labs open-sourced 70+ Agent Skills that teach Claude, Cursor, and Codex to generate production-ready images, video, audio, and 3D through MCP.",
      "url": "https://alphasignal.ai/news/scenario-labs-opens-mit-agent-skills-library-covering-70-ai-creative-tools",
      "published": "2026-11-01T21:03:58+09:00",
      "title_ja": "Scenario Labs、70以上のAI制作ツール用MITエージェントスキルライブラリを公開",
      "summary_ja": "ClaudeやCursor等がMCPを通じて画像・動画・3D等の高品質なコンテンツを生成できるようにするスキルをオープンソース化した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Sharp-Spark Squeezes a 4B Coding AI Into 6 GB GPUs",
      "summary": "A tuned imatrix GGUF repack of Spark-X2.5-4B lands a 4B coder on 6 GB GPUs with usable speed at 131k context.",
      "url": "https://alphasignal.ai/news/sharp-spark-squeezes-a-4b-coding-ai-into-6-gb-gpus",
      "published": "2026-11-01T19:00:27+09:00",
      "title_ja": "Sharp-Spark、4BコーディングAIを6GBのGPUで動作可能に",
      "summary_ja": "GGUF形式の最適化により、40億パラメータのコーディングモデルを131kのコンテキストを維持したまま、メモリ制限のあるGPUで動作させる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Amazon's Chronos-Bolt Mini Runs 250x Faster With Zero Training Required",
      "summary": "Amazon's 21M-parameter time series foundation model delivers zero-shot forecasts up to 250x faster than original Chronos while beating specialized baselines.",
      "url": "https://alphasignal.ai/news/amazon-s-chronos-bolt-mini-runs-250x-faster-with-zero-training-required",
      "published": "2026-11-01T18:22:06+09:00",
      "title_ja": "AmazonのChronos-Bolt Mini、トレーニング不要で250倍の高速化を実現",
      "summary_ja": "2100万パラメータの時系列基盤モデルで、既存のChronosより最大250倍速く、ゼロショットで高精度な予測を実行できる。"
    },
    {
      "lab": "Hugging Face",
      "title": "nemotron-halloween",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-halloween",
      "published": "2026-10-31T02:57:24+09:00",
      "title_ja": "nemotron-halloween",
      "summary_ja": "NVIDIAのNemotronに関連するハロウィン向けのプロジェクト。"
    },
    {
      "lab": "OpenAI",
      "title": "Making it easier for websites to express AI training preferences",
      "summary": "OpenAI will honor a shared robots.txt signal to help website operators communicate their AI training preferences to participating providers.",
      "url": "https://openai.com/index/helping-websites-express-ai-training-preferences",
      "published": "2026-10-30T18:30:00+09:00",
      "title_ja": "WebサイトがAI学習の基本設定を提示しやすくするための取り組み",
      "summary_ja": "OpenAIは共通のrobots.txt信号を尊重し、Webサイト運営者がAI学習に関する設定を各プロバイダーに伝えられるよう支援する。"
    },
    {
      "lab": "OpenAI",
      "title": "Community safety report and new protections for teens",
      "summary": "OpenAI is strengthening violence prevention in ChatGPT with expanded safeguards, earlier interventions, and a new commitment to public safety reporting.",
      "url": "https://openai.com/index/community-safety-report-and-new-protections-for-teens",
      "published": "2026-10-30T18:00:00+09:00",
      "title_ja": "コミュニティ安全報告と10代向けの新しい保護機能",
      "summary_ja": "ChatGPTにおける暴力防止機能を強化し、早期介入や公開安全報告への取り組みを通じて、特に若年層の安全保護を拡充する。"
    },
    {
      "lab": "OpenAI",
      "title": "Fair use benefits everyone",
      "summary": "OpenAI shares excerpts from court briefs by creators, academics, accessibility advocates, and legal experts, among others, on how fair use supports AI training and innovation.",
      "url": "https://openai.com/index/fair-use-benefits-everyone",
      "published": "2026-10-30T09:00:00+09:00",
      "title_ja": "フェアユースがもたらす全ての利用者への利益",
      "summary_ja": "クリエイターや専門家らの見解を通じ、フェアユースがいかにAIの学習やイノベーション、アクセシビリティを支えているかを説明する。"
    },
    {
      "lab": "OpenAI",
      "title": "An updated Model Spec for more capable and beneficial AI",
      "summary": "OpenAI’s updated Model Spec outlines five core values to guide more capable AI toward sound judgment, human agency, and faithfulness to human intent.",
      "url": "https://openai.com/index/updated-model-spec",
      "published": "2026-10-30T02:00:00+09:00",
      "title_ja": "有益なAIの実現に向けたモデルスペックの更新",
      "summary_ja": "AIが健全な判断を下し、人間の意図に忠実であるための5つのコアバリューを概説し、より有能で有益なモデルの指針を示す。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1.1 — Update models like you update software",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1",
      "published": "2026-10-29T22:37:07+09:00",
      "title_ja": "Granite Switch 4.1.1 — ソフトウェアのようにモデルを更新",
      "summary_ja": "ソフトウェアのアップデートと同様の手法でAIモデルを更新できる、Granite Switchの最新バージョン。"
    },
    {
      "lab": "OpenAI",
      "title": "How we detect frontier model misalignment",
      "summary": "OpenAI uses layered monitoring to detect frontier model misalignment and unauthorized agent behavior so responders can intervene before incidents escalate.",
      "url": "https://openai.com/index/how-we-detect-frontier-model-misalignment",
      "published": "2026-10-29T18:00:00+09:00",
      "title_ja": "フロンティアモデルの不整合を検出する方法",
      "summary_ja": "モデルの不整合や不正なエージェント行動を検出するため、層状の監視体制を構築し、問題が拡大する前に介入できるようにする。"
    },
    {
      "lab": "OpenAI",
      "title": "How Ropes & Gray is developing AI for transactional diligence",
      "summary": "Ropes & Gray is developing AI for transactional diligence with OpenAI. Lawyers review grouped documents, summaries, and reports before advising clients.",
      "url": "https://openai.com/index/ropes-gray-ai-diligence",
      "published": "2026-10-29T16:00:00+09:00",
      "title_ja": "Ropes & Grayによる取引デューデリジェンス用AIの開発",
      "summary_ja": "OpenAIと提携し、弁護士が文書の要約やレポートをレビューしてクライアントに助言を行う、効率的な調査用AIを開発している。"
    },
    {
      "lab": "Hugging Face",
      "title": "Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready",
      "summary": "",
      "url": "https://huggingface.co/blog/announcing-project-protostar",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Project ProtoStarの発表：公的資金による科学研究をAI対応に",
      "summary_ja": "公的研究機関による科学的成果をAIが活用しやすい形式に整備することを目的とした、Project ProtoStarを開始する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Le Chonk: Mistral Large 4 on Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/mistral-large4",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Le Chonkへようこそ：Mistral Large 4がHugging Faceに登場",
      "summary_ja": "Mistralの最新モデル「Mistral Large 4」がHugging Faceプラットフォームで利用可能になった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing AnySpeechRecognizer and AnyDecisionModel: Open Models for Speech and Decisions on Apple Platforms",
      "summary": "",
      "url": "https://huggingface.co/blog/anydecisionmodel",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "AnySpeechRecognizerとAnyDecisionModel：Appleプラットフォーム向けオープンモデル",
      "summary_ja": "Appleデバイス上で動作する、音声認識および意思決定のためのオープンなAIモデルを紹介する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代フロンティアモデル",
      "summary_ja": "Googleの次世代フロンティアモデルであるGemini 4 Carbonに関する発表。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "Sleep Framework：継続学習においてLLMの知識を保持する新手法",
      "summary_ja": "LLMが新しい学習を続けながらも過去の知識を保持し続けるための、教育イノベーションに基づく新しいフレームワーク。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build specialized multimodal models with LFM3",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm3",
      "published": "2026-10-28T02:16:52+09:00",
      "title_ja": "LFM3による特化型マルチモーダルモデルの構築",
      "summary_ja": "LFM3を使用して、特定の用途に合わせた独自のマルチモーダルモデルを構築する方法を紹介する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：次世代の世界シミュレーション",
      "summary_ja": "リアルタイム・シミュレーションにおいて、かつてないほどのリアリズムを実現する新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイムなガウス型頭部アニメーション",
      "summary_ja": "数枚の画像と表情信号から、3Dの人物頭部をリアルタイムでアニメーション化する、忠実度と速度を両立した新手法。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "基盤モデルを結核スクリーニングの最前線へ",
      "summary_ja": "生成AIを活用して、医療の最前線における結核のスクリーニング検査を支援する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠被覆を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上のあらゆる10メートル区画を特定の森林タイプに分類した、詳細な世界地図を作成した。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "ヘルスケア分野において、AI技術を用いて妊産婦への最前線での医療支援を強化する取り組み。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントの生物学的現実性への接地：自律型ウェットラボの構築ブロック",
      "summary_ja": "AIエージェントを生物学的な事実に適合させ、自律的な実験室（ウェットラボ）を実現するための基盤を構築する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用Google Antigravityを活用し、新しい抗菌ペプチドの探索プロセスを高速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたローカルおよび分散LLM推論",
      "summary_ja": "Appleシリコンの統一メモリを活かし、Mac環境でプライバシーを保ちながら最新モデルの推論や微調整を行えるようにする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を「生成」ではなく「選択」として再定義し、小型モデルの推論コスト削減と、定型的な判断の精度向上を実現する枠組み。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か、検索が先か？ツール発見アーキテクチャの規模研究",
      "summary_ja": "LLMが先に抽象的なスタブを生成してから検索する手法（PtR）と、従来手法を比較し、膨大なAPIからの効率的な発見方法を研究する。"
    }
  ]
};
