window.papersData = {
  "updated_at": "2026-11-03 12:22 JST",
  "arxiv": [
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
      "id": "2610.42053",
      "title": "REA: A Routed Embodied Agent Runtime for Asynchronous Brain-Cerebellum Control",
      "url": "https://arxiv.org/abs/2610.42053",
      "pdf": "https://arxiv.org/pdf/2610.42053",
      "authors": [
        "Pengfei Zhou",
        "Yixing Ma",
        "Zhengfeiyang Zhang",
        "Haoyuan Chen",
        "Zhenglin Wan",
        "Hexin Wang"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "32 pages, 14 figures",
      "hf_upvotes": 68,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲68"
      ],
      "headline": "思考する「脳」と反射する「小脳」を非同期に連携させ、失敗から自律復帰するロボット実行環境",
      "what": "高レベル推論を行う基盤モデル（System 2）と、高速な制御ポリシー（System 0）を非同期に統合するランタイムREAを提案しています。ルートメモリによる成功予測と境界トリガーによる判断ゲートにより、制御ステップを止めることなく「脳」への問い合わせを管理します。",
      "enables": "LIBERO-Proの60タスクにおいて95.9%の成功率を達成し、制御ステップを25%、制御時間を17%削減しました。実機の人型ロボットUnitree G1への転送にも成功しています。",
      "why_it_matters": "推論が遅い基盤モデルと高速な制御を、単純なフォールバックではない洗練された「非同期連携」によって両立させた点が実用上の大きな進歩です。",
      "tags": [
        "ロボット制御",
        "基盤モデル",
        "自律エージェント"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.40738",
      "title": "Apriel Voice 27B Preview: An Open Model for Speech, Reasoning, and Tool Use",
      "url": "https://arxiv.org/abs/2610.40738",
      "pdf": "https://arxiv.org/pdf/2610.40738",
      "authors": [
        "Aman Tiwari",
        "Akshay Kalkunte",
        "Akintunde Oladipo",
        "Jash Shah",
        "Tara Bogavelli",
        "Hoang Nguyen"
      ],
      "categories": [
        "cs.SD",
        "cs.CL",
        "cs.LG",
        "eess.AS"
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
      "headline": "音声・テキスト・画像を統合し、思考とツール利用が可能な27Bパラメータのオープン音声モデル",
      "what": "Gemma 4 26B-A4Bをベースに開発された、音声認識だけでなく推論やツール利用も可能な音声・言語モデルです。2段階の学習手順により、音声インターフェースの確立と、教師モデルからの蒸留を含むバックボーンの適応を行っています。",
      "enables": "Big Bench Audioで98.90という高いスコアを記録し、平均レイテンシ1.91秒で対話型音声インタラクションをサポートします。",
      "why_it_matters": "個別の対話モデルを必要とせず、共有された推論バックボーンで直接音声を処理し、ツール呼び出しまで実行できるオープンな高性能モデルである点が価値です。",
      "tags": [
        "音声AI",
        "マルチモーダルLLM",
        "音声対話"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41114",
      "title": "Predicting Human-Gain Curves under Local Proxy Optimization from Repeated Ratings",
      "url": "https://arxiv.org/abs/2610.41114",
      "pdf": "https://arxiv.org/pdf/2610.41114",
      "authors": [
        "Moonwon Choi",
        "Kisung Nam",
        "Seunggeun Lee"
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
      "comment": "10-page main paper, 65 pages including references and supplementary material. Accepted as a Spotlight at NeurIPS 2026. Code: https://github.com/pacifiic/local-proxy-diagnostics",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "最適化前に「プロキシ指標がどれだけ人間評価と一致するか」を予測する診断手法 PACE",
      "what": "PACE (Proxy Alignment and Curvature Expansion)は、少数の繰り返し人間評価を用いて、特定のプロキシ指標を最適化した際の人間評価の向上曲線（Human-gain curve）を予測する手法です。1次の一致度と2次の補正をモデル化し、KL正則化下の挙動を推定します。",
      "enables": "最適化を実行する前に、過度な最適化が人間評価の低下を招く「Goodhartの法則」の影響を事前に診断し、予測誤差を従来手法より低減しました。",
      "why_it_matters": "RLHFなどでプロキシ（報酬モデル）を最適化する際、実際の報酬がどこで飽和あるいは劣化するかを予測するための診断ツールとして機能します。",
      "tags": [
        "報酬モデル",
        "RLHF",
        "アライメント"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    },
    {
      "id": "2610.41337",
      "title": "Bayesian PET Reconstruction with Learned Flow Matching Priors via Langevin Sampling",
      "url": "https://arxiv.org/abs/2610.41337",
      "pdf": "https://arxiv.org/pdf/2610.41337",
      "authors": [
        "Hengjia Ran",
        "Huafeng Liu",
        "Bo Zhao"
      ],
      "categories": [
        "eess.IV",
        "cs.CV"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Selected as the Best Student Paper Award for 2026 IVMSP",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "フローマッチングによる生成モデルを事前分布として活用した、高精度なベイズ的PET画像再構成",
      "what": "PET（陽電子放出断層撮影）の画像再構成をベイズ推論として定式化し、フローマッチングから学習した高品質な生成事前分布を組み込んだフレームワークです。Unadjusted Langevin Algorithmを用いて潜在空間での後方サンプリングを行い、画像を生成します。",
      "enables": "低線量撮影などの困難な条件下でも、従来手法や最新の深層学習ベースの手法を上回る再構成精度を達成し、同時に後方不確実性の定量化も可能にしました。",
      "why_it_matters": "生成AIの強力な表現能力を、医療画像の再構成という物理的な逆問題の解決と不確実性評価に直接応用した点が重要です。",
      "tags": [
        "医療画像",
        "フローマッチング",
        "ベイズ推論"
      ],
      "fetched_at": "2026-11-03T12:22:05.997804+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.37381",
      "title": "PDRVLA: A Vision-Language-Action Model with Physical Dynamics Representations",
      "abstract": "Vision--Language--Action (VLA) models generate robot actions from visual observations and language instructions, but their understanding of physical dynamics remains limited. Video world models can capture scene dynamics, yet generating future videos introduces high latency into the control loop. We introduce PDRVLA, whose lightweight Physical Dynamics Module extracts physical tokens from vision--language features to condition action generation without online video generation. The module learns through direct prediction of future RGB, depth, and optical-flow features, with auxiliary supervision through a frozen pretrained video world model. Training relies entirely on publicly available data, expanded through human-to-robot synthesis, subtask annotation, and embodied chain-of-thought (ECoT) annotation. Across four simulation benchmarks, PDRVLA achieves success rates of 99.3% on LIBERO, 89.9% on LIBERO-Plus, 93.6% on RoboTwin~2.0, and 81.5% on SimplerEnv. Ablations show improved future prediction with world-model supervision and evaluate how subtask conditioning, future object-pose supervision, and ECoT training affect action success.",
      "upvotes": 155,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37381",
      "arxiv_url": "https://arxiv.org/abs/2610.37381",
      "title_ja": "PDRVLA: 物理ダイナミクス表現を備えた視覚・言語・行動モデル",
      "summary_ja": "軽量な物理モジュールにより、動画生成なしで将来の物理的特徴を予測し、物理現象を理解したロボットの行動生成を低遅延で実現する。"
    },
    {
      "id": "2610.35684",
      "title": "OmniShowcase: Omnidirectional Subject-Consistent Video Generation from Multi-View Images",
      "abstract": "Generating videos of a specific subject from a few reference images remains challenging when the camera reveals surfaces that are not visible in the input. Early subject-to-video (S2V) methods condition on a single reference image and must therefore infer the subject's unseen appearance and geometry as the viewpoint changes. To address this limitation, recent methods extend S2V to multiple reference views, providing more information about the subject from different viewpoints. However, they do not explicitly specify the 3D structure that connects these observations. In addition, existing training data do not guarantee that viewpoint changes preserve the same underlying 3D subject. We present OmniShowcase, built on two components: (i) a fully automated data synthesis pipeline that produces training videos along diverse camera trajectories, with viewpoint variation driven by underlying subject geometry, even spanning full 360-degree orbits; and (ii) a geometry-conditioning method that provides the video model with a turntable of surface-normal maps reconstructed from the reference views without requiring temporal alignment with the generated frames. We construct Showcase-4K, a corpus of 3D-asset-based videos covering twelve camera motions across 88 trajectory configurations with reconstruction-derived surface-normal conditioning, and ShowcaseBench, a held-out evaluation set with the source meshes and camera parameters used to render each video. Experiments show state-of-the-art subject identity and 3D consistency while maintaining competitive video quality and motion. Project page: justin4ai.github.io/OmniShowcase",
      "upvotes": 141,
      "github_stars": 11,
      "github_repo": "https://github.com/justin4ai/OmniShowcase",
      "project_page": "https://justin4ai.github.io/OmniShowcase/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.35684",
      "arxiv_url": "https://arxiv.org/abs/2610.35684",
      "title_ja": "OmniShowcase: 多視点画像からの全方位被写体一貫性動画生成",
      "summary_ja": "少数の参照画像から、視点変更時でも被写体の3D構造と外観の整合性を保ち、未見の背面なども含めた高品質な動画を生成できる。"
    },
    {
      "id": "2610.32749",
      "title": "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes",
      "abstract": "Streaming audio-visual target speaker extraction (AVTSE) is essential for latency-sensitive applications. However, current causal systems face two coupled gaps. First, standard benchmarks fix the number of speakers at two and ignore the near-/far-field interference, reverberation, and sudden noise of real scenes. Second, high-performance causal architectures are too heavy for edge deployment. Lightweight alternatives try to reclaim capacity by repeatedly invoking a small separator, which offsets the savings. To address the first gap, we release RealSSA, a realistic AVTSE benchmark consisting of RealSSA-Sim and RealSSA-Real. RealSSA-Sim provides controllable simulated scenes with 1--5 dynamic near-field interfering speakers; scenes with far-field interference additionally include 10--15 far-field interfering speakers. RealSSA-Real provides a held-out real-recorded evaluation set. To address the second gap, we propose Falcon, a causal AVTSE method. Its Separator performs multi-scale time-frequency separation in a single encoder--decoder pass. We train Falcon with an encoder-space speaker contrastive loss. This loss suppresses near-field leakage at zero inference cost and transfers across backbones. Falcon achieves state-of-the-art extraction quality on RealSSA-Sim, LRS2-2Mix, LRS3-2Mix, and VoxCeleb2-2Mix. Compared with the causal AV-TFGridNet baseline, it cuts parameters by 91.9%, computation by 20.2 times, and GPU inference latency by 11.1 times. Code and demo are available at https://cslikai.cn/Falcon/.",
      "upvotes": 136,
      "github_stars": 43,
      "github_repo": "https://github.com/JusperLee/Falcon",
      "project_page": "https://cslikai.cn/Falcon/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.32749",
      "arxiv_url": "https://arxiv.org/abs/2610.32749",
      "title_ja": "現実世界の音響シーンにおける効率的なストリーミング映像・音声標的話者抽出",
      "summary_ja": "現実的な騒音や反響を含む新ベンチマークRealSSAを公開し、計算負荷の低い分離器で低遅延かつ高精度な話者抽出を可能にする。"
    },
    {
      "id": "2610.36671",
      "title": "Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs",
      "abstract": "Diffusion vision-language models (DVLMs) process their entire input at every denoising step. Since visual tokens make up 89-97% of this input on the benchmarks we study, most of the decoding computation is spent repeatedly processing the same image. Visual token pruning methods partially relieve this burden by removing part of the visual tokens, but they lose the removed information and still process the remaining image at every step. To measure how often the image is actually needed, we compare LLaDA-V's predictions with and without the image at every decoding step and find that removing the image changes a token being unmasked at only 22.8% of steps on average and at as few as 7.9%. We therefore propose LOWN, a decoding method that decides at every step whether to process the image and how many tokens to unmask. LOWN predicts the masked tokens without the image and processes the image only when this prediction disagrees with the last image-conditioned prediction. Agreement certifies the earlier prediction for reuse, and the number of certified tokens sets how many are unmasked in that step. We further observe that the need for the image differs across benchmarks, so LOWN's adaptive decision is needed rather than a fixed schedule. Without training or a tuned threshold, LOWN retains 99.6% of LLaDA-V's score on ten benchmarks at 35.3% of the decoding FLOPs on average. LOWN also generalizes across LLaDA-based DVLMs, composes orthogonally with visual token pruning, and runs under key-value caching for further efficiency gains. Code and project page are available at https://hyeon9698.github.io/LOWN/",
      "upvotes": 125,
      "github_stars": 16,
      "github_repo": "https://github.com/hyeon9698/LOWN",
      "project_page": "https://hyeon9698.github.io/LOWN/",
      "comments": 3,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.36671",
      "arxiv_url": "https://arxiv.org/abs/2610.36671",
      "title_ja": "必要な時だけ見る：拡散VLMの効率化のための証明書ガイド付き視覚ルーティング",
      "summary_ja": "画像処理が不要なステップを特定し、デコード工程の多くで画像入力をスキップすることで、出力を維持しつつ計算コストを大幅に削減する。"
    },
    {
      "id": "2610.36729",
      "title": "Hy-Nomas: Towards Free-form Interactive World Generation",
      "abstract": "Interactive world generation requires models to follow successive commands while preserving relevant history and action consequences. We present Hy-Nomas, a video world model with an 8B diffusion backbone that supports free-form text instructions and continuous camera control across multiple interaction turns. It generates variable-length segments conditioned on current inputs and cached history. Our central design aligns structured video captions with action-aware causal attention: descriptive context remains accessible across segments, while action instructions are restricted to their intended temporal windows. A vision-language Prompt Enhancer (PE) translates user requests and multimodal interaction histories into structured conditions for the next segment. A multi-stage curriculum progressively introduces causal generation, text interaction, camera control, and training on model-generated histories, followed by diffusion distillation. In human evaluation, Hy-Nomas shows superior performance over existing world models. We release model weights, code and benchmarks, together with a lightweight adaptation workflow, to support reproducible research on interactive world generation.",
      "upvotes": 123,
      "github_stars": 461,
      "github_repo": "https://github.com/Tencent-Hunyuan/Hy-Nomas",
      "project_page": "https://hy-nomas.hy.tencent.com/",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.36729",
      "arxiv_url": "https://arxiv.org/abs/2610.36729",
      "title_ja": "Hy-Nomas: 自由形式のインタラクティブな世界生成に向けて",
      "summary_ja": "自由なテキスト指示とカメラ制御に対応し、過去の履歴や行動の結果を保持しながら、一貫性のある対話的な動画世界を継続的に生成できる。"
    },
    {
      "id": "2610.36545",
      "title": "FrameForge: Harnessing Priors of Video Foundation Models for Unified Image Generation",
      "abstract": "Unified conditional image generation requires a single model to preserve different aspects of a visual input while producing a target image that follows textual guidance. Pretrained video models provide a promising foundation by encoding visual transformations across time, yet existing approaches typically assign the condition and target to fixed temporal positions. We observe that condition-target relationships vary substantially across generation tasks, while video models naturally encode visual transformations at different temporal scales. This motivates us to model conditional generation through input-adaptive virtual temporal relations. We propose FrameForge, which captures two complementary aspects of such relations. Mixture of Temporal Experts (MoTE) models how far the target lies from the condition by dynamically selecting temporal RoPE experts with different virtual intervals. Chain of Temporal Reasoning (CoTR) models how the condition is transformed into the target through a latent intermediate state, with a reasoning-bottleneck attention mask encouraging information propagation through this pathway. Experiments on DreamBench, COCO2017, and GEdit-Bench show that FrameForge achieves superior performance in subject-driven generation, canny-to-image generation, and image editing among the compared methods.",
      "upvotes": 112,
      "github_stars": 3,
      "github_repo": "https://github.com/Lyne1/FrameForge",
      "project_page": "https://lyne1.github.io/FrameForge-page/",
      "comments": 3,
      "org": "FrameX-AI",
      "url": "https://huggingface.co/papers/2610.36545",
      "arxiv_url": "https://arxiv.org/abs/2610.36545",
      "title_ja": "FrameForge: 統一画像生成のためのビデオ基盤モデルの事前学習の活用",
      "summary_ja": "ビデオモデルが持つ時間的な視覚変換能力を応用し、タスクに合わせて時間関係を適応させることで、多様な条件からの画像生成を1つのモデルで実現する。"
    },
    {
      "id": "2610.29927",
      "title": "Your Benchmark Is an Empirical Measure Over Difficulty",
      "abstract": "A benchmark is not merely a collection of test questions; it naturally induces an empirical measure over difficulty. In this work, we develop this measure-based view of benchmark evaluation. This perspective allows us to identify and formalize two central failure modes: measure mismatch, where the benchmark difficulty distribution differs from the intended difficulty distribution, and coverage gaps, where uncovered regions along the difficulty axis prevent benchmarks from detecting meaningful localized training progress. We propose two diagnostic metrics that capture these two failure modes and provide rigorous theoretical guarantees. Empirically, we analyze 25 popular benchmarks spanning 7 domains using carefully estimated item difficulties. Our results show that many benchmarks implicitly overweight certain difficulty regions, so their leaderboard conclusions should be interpreted with caution; others leave substantial portions of the difficulty axis uncovered, limiting their ability to monitor the model improvement process. Finally, we turn diagnosis into action by introducing BenchFill, a simple difficulty-targeted item rewriting algorithm that effectively reduces local coverage gaps.",
      "upvotes": 112,
      "github_stars": 62,
      "github_repo": "https://github.com/ASTRAL-Group/benchmark-difficulty-measure",
      "project_page": "https://benchmark-difficulty-measure.github.io/",
      "comments": 3,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2610.29927",
      "arxiv_url": "https://arxiv.org/abs/2610.29927",
      "title_ja": "ベンチマークは難易度に関する経験的尺度である",
      "summary_ja": "ベンチマークを難易度の尺度として捉え、評価の偏りや学習進捗の検出漏れを特定する2つの新指標を提案し、既存の25のベンチマークを分析した。"
    },
    {
      "id": "2610.37230",
      "title": "TAO: Tool-Aware Joint Scheduling for LLM-Based Agentic Serving",
      "abstract": "Agentic services alternate between model inference on clustered GPUs and external tools on distributed CPUs. In this scenario, existing systems (1) overlook tool-return readiness in service evaluation, wasting limited resources, and (2) use heuristic strategies to decide admission and placement on GPUs, resulting in suboptimal scheduling decisions. To bridge this gap, we present TAO, a tool-aware joint scheduling framework for LLM-based agentic serving. Its value interface combines near-term tool readiness, node-specific cache credit with time-aware decay, and token footprint; a dynamic program jointly selects and places waiting sessions under capacity constraints. Across the 12 reported model-workload-concurrency settings, TAO reduces latency by up to 26.8%, reduces mean time to first token (TTFT) by up to 36.3%, and increases decode throughput by up to 29.5% relative to the best evaluated state-of-the-art baseline for each metric.",
      "upvotes": 96,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "AIOR",
      "url": "https://huggingface.co/papers/2610.37230",
      "arxiv_url": "https://arxiv.org/abs/2610.37230",
      "title_ja": "TAO: LLMベースのエージェント提供のためのツールを考慮した共同スケジューリング",
      "summary_ja": "LLM推論と外部ツールの実行を統合的に管理し、ツールの完了待ちやキャッシュ状態を考慮した動的計画法により、システム全体の処理能力を最適化する。"
    },
    {
      "id": "2610.22740",
      "title": "R^2Orch: Recursive Self-Improvement for Agent Orchestration via Self-Play within a Skill-Internalization Loop",
      "abstract": "In recent years, agentic orchestration has been widely applied to solve complex human tasks. However, existing orchestration learning still faces key challenges, including hand-designed curricula, advantage collapse when a task's rollouts all reach the same outcome, and unreliable evaluation signals that judge each skill by one noisy score. To address these challenges, we propose R^2Orch, a new paradigm of Recursive Self-Play Orchestration: an inner loop of self-play that improves the orchestrator on self-chosen tasks, and an outer loop that improves how the inner loop improves. To support this paradigm, we introduce Recursive Learnability, a training objective that rewards a Proposer for choosing tasks whose rollouts keep reaching different outcomes as skills are withdrawn. Built on this objective, we further propose Skill Withdrawal, in which the outer loop withdraws each skill once a controlled evaluation within self-play shows that the orchestrator performs as well without it. Moreover, the two loops form one cycle: failures are distilled into skills, skills into parameters, and withdrawals lead the Proposer to new failures, so the orchestrator moves toward zero-skill deployment. Experimental results on twelve datasets show that R^2Orch consistently outperforms baselines across question answering, math, code, and interactive tasks. Our code is available at https://github.com/beita6969/R2Orch.",
      "upvotes": 90,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Chinese University of Hong Kong, Shenzhen",
      "url": "https://huggingface.co/papers/2610.22740",
      "arxiv_url": "https://arxiv.org/abs/2610.22740",
      "title_ja": "R^2Orch: スキル内部化ループ内の自己対戦によるエージェントオーケストレーションの再帰的自己改善",
      "summary_ja": "内側のループで自己対戦によりエージェントを改善し、外側のループでその改善プロセス自体を改善する手法により、複雑なタスクの解決能力を高める。"
    },
    {
      "id": "2610.38568",
      "title": "A-RSI: Adaptive Task Refresh for Zero-Data Multimodal Self-Improvement",
      "abstract": "Recursive self-improvement requires models not only to acquire useful training experience, but also to decide when their current experience has ceased to be useful. Existing methods often focus on what experience to generate next, while paying less attention to when fresh experience should be introduced. Many also construct training targets through self-consistency or majority voting, making supervision depend on the model's own uncertain predictions. We address these two questions separately: training dynamics determine when to acquire new experience, while the answers to new tasks remain independently checkable. A-RSI monitors reward variation and accuracy in training logs to refresh a task pool when its learning signal declines, without consulting validation or test scores. A static library of model-authored programs produces multimodal questions and derives their reference answers; we specify the task-generation contract, automatically verify chosen properties of the reward and refresh rules, and separately audit the generated answers. The training loop uses no external training examples or human-written answer labels. On the primary eleven-benchmark suite, A-RSI raises the performance average from 57.77 to 61.05 with 800 fresh tasks.",
      "upvotes": 85,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://seerray-lab.github.io/A-RSI/",
      "comments": 4,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.38568",
      "arxiv_url": "https://arxiv.org/abs/2610.38568",
      "title_ja": "A-RSI: ゼロデータ・マルチモーダル自己改善のための適応的タスクリフレッシュ",
      "summary_ja": "モデルの学習ログから報酬の変動を監視し、現在のデータが有用でなくなったタイミングを自動判断して新しいタスクに更新することで、自律的な性能向上を実現する。"
    },
    {
      "id": "2610.36068",
      "title": "Rollback: Experience Backtracking in World Models for Policy Improvement",
      "abstract": "Action-conditioned world models offer a scalable alternative to costly real-world interaction for improving robot policies. However, existing world-model-based methods largely treat world models as forward-only surrogates of the physical environment, leaving untapped a capability no physical environment affords: rewinding to past decision points to explore counterfactual futures. We introduce Rollback, a policy improvement paradigm that turns world models from passive simulators into counterfactual engines: it rolls back to critical decision points, branches into alternative actions, and contrasts their outcomes to attribute success to individual decisions. This concentrates imagination where it matters most and distills counterfactual outcomes into fine-grained, action-level supervision without a separately learned value model. We build a scalable training system that unifies distributed world-model search with asynchronous real-robot execution, forming a self-reinforcing cycle: real-world experience continually sharpens the world model, and a sharper world model in turn drives further policy improvement. We term the world-model side of this cycle test-time physics grounding, a capability that hand-built physics simulators lack: while the world model serves as the training environment, real transitions from the policy it trains correct its dynamics through a lightweight LoRA pipeline. Experiments on three challenging real-world tasks show that Rollback improves success rates over the strongest baseline by an absolute 10.67%, 11.11%, and 11.85% on block extraction, ball tossing, and tabletop curling, respectively, while achieving more stable improvement throughout training. Although initialized from teleoperated demonstrations far below human level, Rollback surpasses the average success rate of human players on both ball tossing and tabletop curling within 8 hours of training.",
      "upvotes": 83,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://rollback-wm.github.io/",
      "comments": 2,
      "org": "AgiBot World",
      "url": "https://huggingface.co/papers/2610.36068",
      "arxiv_url": "https://arxiv.org/abs/2610.36068",
      "title_ja": "Rollback: 方策改善のためのワールドモデルにおける経験バックトラッキング",
      "summary_ja": "ワールドモデル内で過去の決定点まで巻き戻し、別の行動をとった場合の帰結を比較・探索することで、実環境を使わずに効率的なロボット方策の改善を可能にする。"
    },
    {
      "id": "2610.34283",
      "title": "ChronoReplay: One Answer Interface Is Not Enough for Streaming Spatial Intelligence",
      "abstract": "Training a spatial VLM to answer which side an object lies on does not require it to preserve the metric displacement that determines that answer, while supervision for a distance estimate may leave categorical relations largely unconstrained. When post-training emphasizes one readout, improvements can therefore concentrate on that interface while transfer to others remains weak or even degrades; we call this observed specialization interface lock-in. ChronoReplay addresses it by replaying heterogeneous spatial supervision as chronologically ordered episodes, retaining source-native targets, and balancing supervision across families. Under the same observation access, a single ChronoReplay checkpoint improves OVO-S-Bench, OST-Bench, and UCS-Bench together, including a 13.41-point gain on OST-Bench, and achieves the highest three-benchmark mean among the supervision settings compared here. Same-data controls further separate the ingredients of this transfer: answer serialization redistributes gains across OST and UCS, family-balanced learning improves over ordinary joint SFT and natural turn weighting, and chronological replay exceeds a shifted-order control by about 2.41 OST points across two paired seeds. Adaptive frame selection then changes evidence access while keeping the trained model fixed, providing an additional inference-time gain at lower visual cost. Streaming spatial performance depends on what distinctions supervision preserves, how heterogeneous histories are organized during learning, and what causal evidence inference makes available at test time.",
      "upvotes": 75,
      "github_stars": 52,
      "github_repo": "https://github.com/yihaohu0118/ChronoReplay",
      "project_page": "https://yihaohu0118.github.io/ChronoReplay/",
      "comments": 2,
      "org": "LINs lab",
      "url": "https://huggingface.co/papers/2610.34283",
      "arxiv_url": "https://arxiv.org/abs/2610.34283",
      "title_ja": "ChronoReplay: ストリーミング空間知能には単一の回答インターフェースだけでは不十分である",
      "summary_ja": "多様な空間的教師信号を時系列エピソードとして再生学習することで、特定の回答形式への特化を防ぎ、距離推定やカテゴリー関係の把握をバランスよく向上させる。"
    },
    {
      "id": "2610.39302",
      "title": "Proving and Improving the Platonic Representation Hypothesis with JEPAs",
      "abstract": "Whether models trained on different modalities converge to the same representation of the world is central to AI. The Platonic Representation Hypothesis (PRH) conjectures that they do as they scale, but without a proof it offers neither a guarantee nor a recipe. We turn the hypothesis into a theorem. First, we prove a Platonic Representation Theorem: Joint-Embedding Predictive Architectures (JEPAs) trained separately on any number of modalities learn the same representation up to one rotation whenever their positive pairs are two observations of one scene--good views--and their misalignment is bounded otherwise. Second, we show that next-token prediction is a JEPA with bad views, parts of a single document, which explains why language models align with vision only through scale. Third, we validate the theory from 145k captions to the texts of 940M web images, and uncover a scaling law of alignment that predicts unseen runs within seed noise. Good views need 42 times fewer training samples than next-token prediction on the same corpus to reach the same alignment, and a 109M-parameter text JEPA aligns with DINOv2 and CLIP's image encoders better than every language model we evaluated, up to 72B parameters, and than CLIP's text encoder: next-token prediction is a remarkably inefficient route to platonic representations. As a showcase, one rotation turns separately trained encoders into an image captioner (CIDEr .838 on COCO). Even that rotation needs no pair: on the latest pair-free benchmark, our text JEPA beats every zero-shot accuracy reported with language models up to 8B parameters, e.g., 64\\% against at most 56\\% top-5 on ImageNet-100. Positive views, and not scale alone, are thus the lever to build platonic representations.",
      "upvotes": 71,
      "github_stars": 128,
      "github_repo": "https://github.com/galilai-group/prh-proof",
      "project_page": "https://github.com/galilai-group/prh-proof",
      "comments": 4,
      "org": "galilai-group",
      "url": "https://huggingface.co/papers/2610.39302",
      "arxiv_url": "https://arxiv.org/abs/2610.39302",
      "title_ja": "JEPAによるプラトン的表現仮説の証明と改善",
      "summary_ja": "異なるモダリティで学習したモデルの表現が収束するという仮説を、JEPAを用いることで数学的に証明し、次トークン予測の限界を理論的に示した。"
    },
    {
      "id": "2610.42053",
      "title": "REA: A Routed Embodied Agent Runtime for Asynchronous Brain-Cerebellum Control",
      "abstract": "Foundation models are becoming remarkably reliable at high-level reasoning, yet they remain too slow and costly to serve as fine-grained controllers. Conversely, fast policies like VLAs and whole-body controllers offer more efficient reflexes, but struggle to generalize. While pairing a deliberative brain (foundation models) with a reactive cerebellum (fast policies) seems natural for embodied systems, two obstacles remain: methods are built and scored on incompatible stacks, and their asynchronous coordination is difficult. For example, an agent that calls the VLA in the agentic loop can stall the fast execution, while a VLA that calls the agent on errors tends to re-trigger fallbacks repeatedly or completely miss silent failures. To address this, we propose REA (Routed Embodied Agent), a unified runtime where a deliberative System 2, an embodied router System 1 and reactive System 0 policies cooperate under a single golden rule - no running policy waits on the brain. Instead of querying the brain at each failure, REA employs a route memory that stores each policy's measured success ahead of time, a boundary-triggered judge gate that consults the brain on policy execution, and a shared-budget escalation ladder for bounded recovery. Evaluated on 3,000 test episodes across 60 LIBERO-Pro tasks, REA reaches 95.9% success and beats the best single-agent baseline in its own policy pool (94.7%) while reducing control steps by 25% and control time by 17%. In a separate 100-episode RoboTwin 2.0 study, REA achieves 84% success with VLA policies and 86% with VLA+code, compared with 80% for the strongest single VLA baseline MEDex. These results demonstrate learned and programmatic policies operating within the same runtime. REA also transfers to BEHAVIOR-1K and a real Unitree G1 humanoid, achieving the highest observed success among the compared methods.",
      "upvotes": 68,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://mikeeeeeeeeeeeeee.github.io/REA/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.42053",
      "arxiv_url": "https://arxiv.org/abs/2610.42053",
      "title_ja": "REA: 非同期的な脳・小脳制御のためのルーティングされた身体化エージェント実行環境",
      "summary_ja": "思考を担う低速な「脳（LLM）」と反射を担う高速な「小脳（VLA）」を非同期に統合し、複雑な推論と機敏な行動を両立させる実行フレームワークを提案する。"
    },
    {
      "id": "2610.37666",
      "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
      "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a fundamental trade-off between scalable data and explicit action grounding. We introduce ThinkWorld, a VLA learning framework that grounds action reasoning in world dynamics and strengthens it through reinforcement learning with world imagination. ThinkWorld represents each action thought as a Chain-of-Dynamics (CoD), a sequence of discrete motion tokens that captures the intermediate dynamics connecting the current world to a future state and serves as a common action representation across embodiments. We first initialize CoD with action-labeled demonstrations, then predict the future induced by each CoD and reinforce those whose predictions better match the observed outcome. This enables videos without action annotations to provide direct supervision from observed state transitions, allowing human and robot experience to refine the same reasoning space. Experiments in simulation and on real robots demonstrate effective human-to-robot transfer and strong generalization to unseen tasks and environments.",
      "upvotes": 67,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://thinkworld-project.github.io/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.37666",
      "arxiv_url": "https://arxiv.org/abs/2610.37666",
      "title_ja": "ThinkWorld: 世界の想像がダイナミクスの連鎖推論を強化する",
      "summary_ja": "行動を離散的な動きの連鎖として捉え、ワールドモデルを用いた強化学習によって「世界の動き」を想像させることで、ラベルのない人間動画からもロボット操作を学習できる。"
    },
    {
      "id": "2610.37161",
      "title": "WorkFactory: Turning Professional Intents into Executable Work for Scalable Agent Training",
      "abstract": "Scaling supervised training for working agents requires diverse professional tasks that yield reliable expert demonstrations. However, missing or inconsistent task information can obstruct teacher execution and weaken the resulting supervision. We propose WorkFactory, a scalable framework for constructing coherent and executable professional tasks. Starting from professional intents, information-level planning builds an information support graph to guide task instantiation, explicitly representing the dependencies and locations of information required for the intended outputs. Probe executions then identify support failures and guide repairs while preserving the intended work. We construct 112,686 tasks spanning 612 occupations and use the collected teacher trajectories to fine-tune Qwen models at 4B, 27B, and 35B-A3B scales, yielding the WorkPilot family. All three models improve over their respective base models across four professional-work benchmarks, with WorkPilot-35B-A3B improving from 879 to 1565 Elo on GDPval-AA v2.1. Scaling analyses reveal model-dependent diminishing returns, with execution length first increasing and then decreasing. Controlled component analyses show that planning and repair reduce probe-diagnosed task environment defects and improve downstream performance. The data and models are available at https://github.com/IQuestLab/WorkFactory.",
      "upvotes": 64,
      "github_stars": 19,
      "github_repo": "https://github.com/IQuestLab/WorkFactory",
      "project_page": "",
      "comments": 6,
      "org": "IQuest",
      "url": "https://huggingface.co/papers/2610.37161",
      "arxiv_url": "https://arxiv.org/abs/2610.37161",
      "title_ja": "WorkFactory: プロフェッショナルな意図を実行可能な業務に変換するスケーラブルなエージェント訓練",
      "summary_ja": "専門的な意図から依存関係を整理した情報グラフを構築し、実行検証と修正を繰り返すことで、高品質な訓練データとなる一貫した業務タスクを大量に生成する。"
    },
    {
      "id": "2610.31670",
      "title": "Sensorimotor Alignment: A Platonic Proxy for Embodied Policy Success",
      "abstract": "Robot foundation models are typically evaluated through costly closed-loop rollouts, motivating low-cost offline proxies for model capability. The Platonic Representation Hypothesis (PRH) suggests that as representations improve, modalities such as vision and language converge toward a shared statistical model of reality. We ask whether motion trajectories form another such modality: as embodied models become more capable, should their sensory representations converge toward the structure of physical motion? To test this, we propose Sensorimotor Alignment (S^2), a training-free offline metric that measures how well a model's sensory representation aligns with the geometry of physical motion. We find that S^2 correlates positively with downstream robot task success across model families, making it a low-cost offline proxy for prioritizing models before closed-loop evaluation. S^2 can also identify promising vision-language model (VLM) backbones before costly fine-tuning into vision-language-action models (VLAs). Beyond this correlation, S^2 offers representation-level explanations for phenomena observed in VLAs and world action models (WAMs). With S^2, we extend PRH to robotics and make sensorimotor alignment measurable, offering a low-cost, representation-level view of robot foundation models that closed-loop success rates alone cannot reveal.",
      "upvotes": 56,
      "github_stars": 8,
      "github_repo": "https://github.com/yunfeixie233/sensorimotor-alignment",
      "project_page": "https://yunfeixie233.github.io/s2/",
      "comments": 2,
      "org": "Rice University",
      "url": "https://huggingface.co/papers/2610.31670",
      "arxiv_url": "https://arxiv.org/abs/2610.31670",
      "title_ja": "センサリモータ・アライメント：身体化方策の成功のためのプラトン的プロキシ",
      "summary_ja": "実機での評価なしに、視覚表現が物理的な運動構造とどれだけ一致しているかを測定することで、ロボットモデルの性能を低コストで推定する学習不要の指標を提案する。"
    },
    {
      "id": "2610.39497",
      "title": "Does Scaling Toward AGI Depend on What System-1 Lets System-2 Execute?",
      "abstract": "Progress toward artificial general intelligence (AGI) has largely relied on scaling a resource-intensive executive, System-2, through larger models, more data and compute, longer reasoning, and more agents. We ask whether the next stage may come instead from co-designing it with System-1, a lightweight, semantically aware predictor that evaluates candidate interactions before execution, so that System-2 acts only on those worth their cost. Our answer is a qualified yes. We study conditional interaction, a predict--gate--execute--update loop: System-1 estimates each candidate's utility, System-2 executes those admitted by an adaptive threshold, and the outcomes update System-1. The loop spans training, test-time reasoning, adaptive decision-making, and agentic tool use, with utility and cost defined by the application. Under ideal screening and equal execution costs, execution compute falls by a factor approaching 1/ρ_u, where ρ_u is the density of utility-relevant interactions (cost-weighted when costs differ); prediction errors, exploration, and distribution shift reduce the saving. We bound selection regret by predictor error and the utility margin. These results motivate our central hypothesis: ρ_u is a measurable coordinate of scaling efficiency and makes informative compute a better description of scaling than total compute.",
      "upvotes": 55,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cheemswang.github.io/blogs/sys1-sys2-codesign.html",
      "comments": 1,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2610.39497",
      "arxiv_url": "https://arxiv.org/abs/2610.39497",
      "title_ja": "AGIへのスケーリングは、システム1がシステム2に何を遂行させるかに依存するか？",
      "summary_ja": "軽量な「システム1」が各行動の有用性を予測し、価値が高い場合のみ重い「システム2」を動かす仕組みにより、計算資源を節約しつつ効率的に性能を向上させる。"
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
      "summary_ja": "実行可能なプログラムを動画の記述として用いる手法を提案し、自然言語よりも空間構造や動的な変化を精密に表現できることを質問回答や動画再構成で検証した。"
    },
    {
      "id": "2610.40614",
      "title": "L3G-World: Real-Time Infinite World Generation with Latent 3D Gaussian Memory",
      "abstract": "Interactive world models generate visual content conditioned on user actions, yet maintaining spatial consistency over long-horizon exploration in real time remains challenging. Existing approaches rely on either temporal context or explicit 3D memory, both of which scale poorly because memory grows with the length of the generated stream. Moreover, explicit 3D memories condition latent video generators by re-encoding RGB renderings, which precludes real-time generation. In this paper, we introduce a Latent 3D Gaussian Memory (L3G) that combines the efficiency of feed-forward reconstruction with a compact, rapidly renderable scene representation. Building on this memory, we propose L3G-World, in which a memory updater and a video diffusion transformer (DiT) alternate autoregressively to generate spatially consistent worlds. The memory updater spawns Gaussians in newly observed regions and refines existing ones, so that the memory grows with scene extent rather than stream length. Each Gaussian further stores a VAE latent feature, allowing the memory to be rendered directly into the DiT's latent space without VAE re-encoding. Experiments show that L3G-World achieves state-of-the-art generation quality and long-horizon spatial consistency, with up to 38.6times fewer 3D primitives, 3.2times faster memory updates, and 359times faster memory rendering relative to the most efficient prior 3D-memory baseline for each metric, enabling real-time world generation at 9 FPS.",
      "upvotes": 51,
      "github_stars": 55,
      "github_repo": "https://github.com/cvlab-kaist/L3G-World",
      "project_page": "https://cvlab-kaist.github.io/L3G-World/",
      "comments": 5,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.40614",
      "arxiv_url": "https://arxiv.org/abs/2610.40614",
      "title_ja": "L3G-World: 潜在3Dガウスメモリによるリアルタイムの無限世界生成",
      "summary_ja": "潜在空間での3Dガウシアン表現をメモリとして活用することで、長期の探索においても空間的な整合性を保ちながら、リアルタイムに未知の景観を生成し続けられる。"
    },
    {
      "id": "2610.36456",
      "title": "LociArt: A Unified Paradigm for Free-Style Local Video Stylization",
      "abstract": "Video stylization typically transforms entire scenes, while local artistic editing requires precise region--style association, spatial control, and temporal consistency. We introduce LociArt, a unified paradigm for free-style local video stylization that explicitly specifies where to stylize and what style to apply while preserving non-target content. At its core, GRNStyle builds on Generative Refinement Networks (GRN) and introduces a polar style-aware mask that embeds style identities as equal-norm directions within selected regions. Complementary representation--geometry conditioning combines encoded mask features with raw-mask spatial support, integrating spatiotemporal context with geometric control. To provide paired supervision, we develop an automated pipeline combining global stylization, video object removal, matting, and compositing, and construct the LociArt-100K Dataset with 100K local stylization pairs. We further establish the LociArt Benchmark, comprising 80 source videos and 84 target masks covering 168 foreground/background stylization cases, with a Style Prototype Similarity (SPS) evaluation scheme for regional style quality and complementary measures of non-target preservation and temporal consistency. Experiments show that GRNStyle outperforms existing methods in regional style quality and spatial control while maintaining strong temporal consistency. Qualitative examples further illustrate joint stylization of multiple regions with the same or different learned styles, despite training only on single-region, single-style pairs. Together, these components provide a unified foundation for learning and evaluating controllable local video stylization. Project page: https://higherhu.github.io/lociart/.",
      "upvotes": 49,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://higherhu.github.io/lociart/",
      "comments": 2,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.36456",
      "arxiv_url": "https://arxiv.org/abs/2610.36456",
      "title_ja": "LociArt: フリースタイルのローカルな動画スタイル変換のための統一パラダイム",
      "summary_ja": "特定の領域にのみ任意のスタイルを適用しつつ、背景や時間的な一貫性を維持する手法を提案し、精密な空間制御とスタイル指定を両立した動画編集を実現する。"
    },
    {
      "id": "2610.36077",
      "title": "The Trinity:Capability-Driven Recursive Self-Improvement for Multimodal Agents",
      "abstract": "Multimodal intelligence can be viewed as human-guided co-evolution between worlds and agents through interaction. However, scaling this process faces two bottlenecks: constructing heterogeneous, verifiable environments is costly, and manual Harness iteration cannot keep pace with growing task diversity and complexity. A key insight is that tasks with different modalities and surface forms can share the same underlying capability requirements. We therefore introduce The Trinity, a recursive self-improvement framework coupling world generation with Harness evolution through three roles: Creator, Explorer, and Evolver. Drawing on verified execution trajectories, Evolver shifts the basis of task organization from surface categories to shared requirements, reorganizing the original task tree into a hierarchical capability tree. We introduce Capability-Driven Real2Sim2Real: for heterogeneous tasks at the same node, Creator abstracts their common requirements into simplified, verifiable simulated worlds for capability learning, while evaluation on original tasks measures transfer. Along this capability tree, Explorer progressively evolves reusable capability modules through selective inheritance, forming a Harness tree whose validated updates accumulate across iterations within a fixed topology. The resulting Harnesses specialize in different capabilities, motivating a Capability-Aware Harness Router that uses public task information to select compatible module configurations from the tree. Our evolved Harnesses improve mean performance by 34 points across 28 training benchmarks and 26 points across 18 unseen benchmarks, including two real-world embodied tasks.",
      "upvotes": 47,
      "github_stars": 46,
      "github_repo": "https://github.com/InfRec-Cardinal/The-Trinity",
      "project_page": "https://trinity-rsi.github.io/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.36077",
      "arxiv_url": "https://arxiv.org/abs/2610.36077",
      "title_ja": "The Trinity: マルチモーダルエージェントのための能力主導の再帰的自己改善",
      "summary_ja": "生成・探索・進化の3つの役割を連携させ、検証済みの実行結果に基づいて世界生成とタスクの難易度向上を繰り返すことで、エージェントの能力を自律的に高める。"
    },
    {
      "id": "2610.34186",
      "title": "HuGe: Scaling Humanoid Generalist Vision-Language-Action Models with Egocentric Experience",
      "abstract": "Extending Vision-Language-Action models (VLAs) to humanoid robots requires coordinated whole-body control and diverse demonstrations that are costly to collect in real-world scenarios. Although egocentric human demonstrations provide a complementary source of task experience, differences in visual embodiment and missing robot proprioception complicate transfer to humanoid policies. To address these challenges, we introduce HuGe, a family of Humanoid Generalist VLAs pre-trained on over 2,000 hours of egocentric human and robot data. Specifically, HuGe employs three existing representative VLA architectures to predict latent motion tokens for a pretrained whole-body controller, together with hand-control signals. Based on this, we introduce a three-stage training pipeline that combines egocentric pre-training, humanoid adaptation, and downstream fine-tuning. To facilitate transfer across embodiments, we construct pseudo-proprioceptive states through simulation playback during pre-training and modify arm appearance in egocentric observations through re-rendering during downstream fine-tuning. With this pipeline, HuGe achieves the state-of-the-art on simulation benchmark HumanoidArena. Furthermore, real-world experiments on the Unitree G1 indicate that augmenting robot demonstrations with visually adapted egocentric demonstrations significantly increases success on a pick-and-drop task.",
      "upvotes": 44,
      "github_stars": 14,
      "github_repo": "https://github.com/yliu-cs/HuGe",
      "project_page": "https://yliu-cs.github.io/HuGe",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.34186",
      "arxiv_url": "https://arxiv.org/abs/2610.34186",
      "title_ja": "HuGe: 一人称視点経験を用いたヒューマノイド汎用VLAモデルのスケーリング",
      "summary_ja": "2,000時間以上の一人称視点の人間とロボットのデータを学習し、全身制御器と連携させることで、ヒューマノイドロボットの多様なタスク実行能力を向上させる。"
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
      "title_ja": "OmniSpectra: 普遍的な分光表現学習のための統一基盤モデル",
      "summary_ja": "連続的な波長座標を直接扱うマスク付きオートエンコーダにより、異なる測定機器由来の分光データを再サンプリングなしで統合学習できる基盤モデルを開発した。"
    },
    {
      "id": "2610.32411",
      "title": "A Broader Look into MLLM's Retrieval Heads",
      "abstract": "Locating relevant evidence in long inputs is a core capability of Multimodal Large Language Models. Prior studies attribute this capability to retrieval heads, a sparse set of attention heads that transfer information from the context to the output. However, these analyses are confined to a limited set of modalities and the corresponding models. Moreover, how retrieval heads can be leveraged to enhance the model calls for further exploration. In this paper, we ask whether this mechanism expands together with the input modalities of the model. Taking audio-visual input as a newly added modality, we construct paired inputs in which the same answer is either spoken or shown on screen. With the evidence content fixed, retrieval heads remain sparse in the new modality and are shared to a large extent across modalities. Across 18 language, vision-language, and omni-modal checkpoints, omni-modal models largely preserve the retrieval heads of their backbones. Ablating these heads eliminates nearly all audio-visual retrieval. The heads shared across modalities make up fewer than 2\\% of all heads, yet ablating them also degrades document understanding, spatial perception, and visual mathematics. Building on these findings, we turn retrieval heads into a target of optimization by training their attention with a ranking objective. This raises the page Recall@1 of Qwen3-VL-8B on MMDocIR by 6.03 points and improves document retrieval across three model families. Functional attention heads can thus serve both as a lens on multimodal models and as a target for improving them.",
      "upvotes": 42,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://qdcassie-li.github.io/MLLM-Retrieval-heads/",
      "comments": 2,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.32411",
      "arxiv_url": "https://arxiv.org/abs/2610.32411",
      "title_ja": "MLLMの検索ヘッドに関する広範な調査",
      "summary_ja": "長大なマルチモーダル入力から情報を引き出す「検索ヘッド」の仕組みを分析し、音声や映像などの新モダリティにおいても同様のメカニズムが機能することを明らかにした。"
    },
    {
      "id": "2610.40599",
      "title": "HairDeck: Animation-Ready Stylized Hair Cards from a Single Image",
      "abstract": "The hair of stylized characters in games and avatars is built from hair cards: artist-placed ribbons whose geometry is the visible hair, animated by spring bones. Existing image-based methods produce realistic hair or a single fused mesh, while CHARM, the only generator of stylized hair cards, decodes a hairstyle autoregressively as a long sequence of control points. Observing that a card hairstyle is an unordered set of artist-defined primitives, we propose HairDeck, which generates it as one: each card is a single token, and a set diffusion transformer denoises all cards together. From a single image, HairDeck generates the cards and the spring-bone chains that drive them, yielding an animatable asset that exports to ready-to-use downstream formats. On CHARM's own test set, it lowers Chamfer distance by 44% and card-orientation error by more than half while running 33 times faster, and from single images it outperforms CHARM, image-to-3D pipelines and strand-based methods. Project page: https://hyzcluster.github.io/HairDeck",
      "upvotes": 41,
      "github_stars": 730,
      "github_repo": "https://github.com/hyz317/HairDeck",
      "project_page": "https://hyzcluster.github.io/HairDeck/",
      "comments": 2,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2610.40599",
      "arxiv_url": "https://arxiv.org/abs/2610.40599",
      "title_ja": "HairDeck: 単一画像からのアニメーション準備が整った様式化されたヘアカード生成",
      "summary_ja": "1枚の画像から、ゲームキャラ等に不可欠な「ヘアカード」の構造とアニメーション用の骨組みを、セット拡散トランスフォーマーを用いて一括生成する。"
    },
    {
      "id": "2610.33106",
      "title": "VibeGame: Prompt-to-Game Development with AI-Native Engine and Self-Evolving Adversarial Agent Team",
      "abstract": "Large language model agents have enabled software development through natural-language interaction, but extending this paradigm to end-to-end game development remains challenging. Building a playable game requires coordinating code, scenes, assets, animations, physics, and configurations, while allowing developers to validate their integrated behavior through interactive testing. We introduce VibeGame, a framework for creating complete 2D game projects from natural-language prompts and optional reference images. Its AI-native game engine represents project state as schema-validated structured text and provides frame-synchronous runtime control, enabling agents to inspect game states, execute actions, and verify behavior at their own pace. Built upon this interface, we design an Adversarial Agent Team of eight specialized agents to separate implementation from review, so that problems are found and fixed through multi-round loops. For each conducted and accepted project, we further introduce a training-free self-evolution mechanism to distill it into reusable skeletons, modules, and collaboration contracts for future development. We evaluate prompt-assets-to-game (PA2G), where agents are given an asset library, and prompt-to-game (P2G), where agents generate their own art. On a GameCraft-Bench subset, VibeGame in P2G consistently outperforms a range of agent harnesses in either P2G or PA2G with the same underlying model, including GPT-6.1-Sol.",
      "upvotes": 40,
      "github_stars": 353,
      "github_repo": "https://github.com/tettethu/VibeGame",
      "project_page": "https://vibegame.tettet.org",
      "comments": 2,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2610.33106",
      "arxiv_url": "https://arxiv.org/abs/2610.33106",
      "title_ja": "VibeGame: AIネイティブエンジンと自己進化型対戦エージェントチームによるプロンプトからのゲーム開発",
      "summary_ja": "自然言語から2Dゲームを構築・実行・テストできるAI専用エンジンを開発し、エージェント同士の対戦テストを通じてゲーム性を自律的に改善する仕組みを構築した。"
    },
    {
      "id": "2610.24520",
      "title": "HABIT-Bench: Evaluating Habit Induction from Longitudinal Weak Evidence in Agent Memory",
      "abstract": "In long-term interactions with large language model (LLM) agents, users reveal habits through their choices and actions. These habits capture implicit user information that agents must infer across conversations. However, individual observations may provide only partial evidence about a habit or when it applies. Retaining past interactions alone does not ensure that agents can infer habits and apply them appropriately. We introduce HABIT-Bench to evaluate how well agent memory systems infer habits from weak evidence and apply them to later requests. We construct synthetic user histories from task-oriented dialogue data and controlled habit graphs. The histories span hundreds of sessions across food, finance, software, and travel. Four-choice tasks assess agents' ability to infer user habits and apply them appropriately. They include temporary exceptions, changes in habits, and suggestions that users have not accepted. Sampled tasks undergo independent human review. We evaluate eight memory methods with Qwen3-235B-A22B and GLM-5.3-Flash. The best-performing memory method achieves 33.61\\% macro accuracy across the four domains. Performance remains limited even when annotated evidence is supplied directly. These results expose a persistent gap between access to past interactions and the ability to infer and appropriately use user habits.",
      "upvotes": 39,
      "github_stars": 4,
      "github_repo": "https://github.com/LUMIA-Group/habit-bench",
      "project_page": "https://hollyming.github.io/habit-bench-site/",
      "comments": 10,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.24520",
      "arxiv_url": "https://arxiv.org/abs/2610.24520",
      "title_ja": "HABIT-Bench: エージェントのメモリにおける長期的な弱い証拠からの習慣誘導の評価",
      "summary_ja": "断片的な情報からユーザーの隠れた習慣を推測し、後の対話に反映できるかを測るベンチマークを導入し、長期的な記憶システムの推論能力を評価する。"
    },
    {
      "id": "2610.22543",
      "title": "On the SPOT: Enhancing Speculative Decoding for Diffusion Language Models via Commit-Order Prediction",
      "abstract": "Diffusion language models (DLMs) promise parallel text generation, but in practice face an unresolved speed-quality trade-off. Exact decoding fills in only one masked position per model pass, while faster multi-token decoding schemes are lossy. Speculative decoding is the standard lossless acceleration for autoregressive models. However, it does not transfer directly to DLMs, which must choose both what to generate and where. We show that this order is the missing piece: the model's own predictions from the previous pass already give the right token at over 90% of positions, but not which position comes next. We introduce Speculating Positions Order Trajectory (SPOT), a 0.62M-parameter model that reads only the target's output distributions, predicts this order and proposes a tree of candidate continuations, which the target verifies in a single pass by state equality. Coupled-noise match, which shares Gumbel noise between drafter and target, keeps this verification exact at any temperature. This approach also inspired us to introduce SPOT-Sets for dynamic threshold decoding, where a pass commits several positions: SPOT-Sets drafts whole commit sets together with their tokens. Our comprehensive experiments show that SPOT cuts target passes by up to 6.8times and reaches up to 3.4times the throughput of standard decoding on SDAR-8B, matching or beating the calibrated and training-free drafting baselines in every task and budget at T=0 and T=1. In addition, we show that SPOT's learned drafter transfers across models, demonstrating successful transfer across six different DLMs; with a light calibration, the SPOT-Sets drafter transfers as well. On top of dynamic threshold decoding, SPOT-Sets improves the throughput of SDAR-8B by 59% on average over the threshold decoder alone. Project page: https://eliezer318.github.io/SPOT-dLLM/",
      "upvotes": 38,
      "github_stars": 9,
      "github_repo": "https://github.com/Eliezer318/SPOT-dLLM",
      "project_page": "https://eliezer318.github.io/SPOT-dLLM/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.22543",
      "arxiv_url": "https://arxiv.org/abs/2610.22543",
      "title_ja": "On the SPOT: 確定順序予測による拡散言語モデルの投機的デコーディングの強化",
      "summary_ja": "拡散言語モデルにおいて「次にどの位置を確定させるか」の順序を予測する小型モデルを導入することで、品質を損なわずに推論速度を大幅に向上させる。"
    },
    {
      "id": "2610.33624",
      "title": "RSI Arena: Towards Recursive Self-Improvement with Human Feedback",
      "abstract": "Can AI agents autonomously train useful language models and improve them using feedback from users? We introduce RSI Arena, a two-stage study of autonomous post-training as a step toward recursive self-improvement. Ten frontier models act as training agents, each starting from NVIDIA Nemotron 3.5 Lightning 30B-A3B Base. During a six-day first stage, each agent has 1,000 GPU-hours and $300 in API credit on a shared 64-GPU cluster, independently selecting data, implementing training procedures, and choosing checkpoints. We evaluate their models on 20 benchmarks and through blind human evaluations. All ten agents produce working assistants, with the strongest model, trained by GPT-6 Astra, closing a median of 76% of the base-to-Instruct gap across 12 capability benchmarks. Its human-preference rating is also close to NVIDIA Instruct after statistical adjustment for answer length and formatting. In Stage 2, each agent receives the comparison records and votes involving its Stage 1 model and is given three additional days for further training. Using NVIDIA Instruct as a common reference across the two evaluation rounds, we observe an improvement from Stage 1 to Stage 2 in the style-adjusted relative rating of eight of the ten models. We show that benchmark gains were modest, with no clear link to preference gains, while some agents encouraged longer responses and one model showed increased harmful compliance on StrongREJECT. RSI Arena provides an auditable setting for studying how human feedback can guide autonomous model development. It takes a step toward recursive self-improvement with human feedback (RSIHF), in which people help define what improvement means for the AI systems they use.",
      "upvotes": 37,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://rsiarena.org",
      "comments": 2,
      "org": "RSI Arena",
      "url": "https://huggingface.co/papers/2610.33624",
      "arxiv_url": "https://arxiv.org/abs/2610.33624",
      "title_ja": "RSI Arena: 人間のフィードバックを伴う再帰的自己改善に向けて",
      "summary_ja": "10種のLLMが自律的に学習データ選択や訓練を実施し、人間によるブラインドテストで実用的なアシスタント性能を競うことで、自己改善の可能性を実証した。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's Pando Cuts Push Latency 80% Serving a Petabyte of Git Daily",
      "summary": "OpenAI built Pando, a Git-compatible backend that cut push latency ~80% and now moves nearly a petabyte of Git traffic daily across its monorepo.",
      "url": "https://alphasignal.ai/news/openai-s-pando-cuts-push-latency-80-serving-a-petabyte-of-git-daily",
      "published": "2026-11-03T09:09:30+09:00",
      "title_ja": "OpenAI、Gitバックエンド「Pando」でプッシュの遅延を80%削減",
      "summary_ja": "Git互換のPandoを構築し、巨大リポジトリのプッシュ遅延を80%削減。毎日1PB近い通信を処理可能にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Pays $500K to Lure Professors and Founders Into AI Safety",
      "summary": "Anthropic opens a paid residency paying up to $500K for senior technical talent to pivot into AI safety research, no ML background required.",
      "url": "https://alphasignal.ai/news/anthropic-pays-500k-to-lure-professors-and-founders-into-ai-safety",
      "published": "2026-11-03T04:51:45+09:00",
      "title_ja": "Anthropic、AI安全研究への転身を促す最大50万ドルのレジデンスを開始",
      "summary_ja": "シニア技術者がAI安全分野へ転向するための有給レジデンスを開設。ML背景不要で最大50万ドルを支給する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Message Threads Cut Agent Request Size from 800 KB to 1.8 KB",
      "summary": "Anthropic's Messages API now caches conversations server side, cutting payload sizes from 800KB to 1.8KB and median time to first token by 35% on long sessions.",
      "url": "https://alphasignal.ai/news/anthropic-s-message-threads-cut-agent-request-size-from-800-kb-to-1-8-kb",
      "published": "2026-11-03T04:06:08+09:00",
      "title_ja": "AnthropicのMessage Threads、エージェントの要求サイズを800KBから1.8KBに削減",
      "summary_ja": "サーバー側で会話をキャッシュし、通信量を大幅削減。長時間セッションの初回トークン生成時間を35%高速化した。"
    },
    {
      "lab": "OpenAI",
      "title": "Rewarding defenders with bigger bug bounties",
      "summary": "OpenAI is raising Security Bug Bounty rewards and introducing report quality, loyalty, and priority campaign bonuses for independent security researchers.",
      "url": "https://openai.com/index/rewarding-defenders-with-bigger-bug-bounties",
      "published": "2026-11-03T03:00:00+09:00",
      "title_ja": "OpenAI、セキュリティ研究者向けのバグ報酬金を増額",
      "summary_ja": "セキュリティバグ報酬を引き上げ、報告の質や継続性、優先キャンペーンに応じた追加ボーナス制度を導入した。"
    },
    {
      "lab": "OpenAI",
      "title": "Preparing our next security sprint to harden OpenAI",
      "summary": "OpenAI is preparing its next internal security sprint with Cathedral Systems to test and strengthen its defenses using AI.",
      "url": "https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai",
      "published": "2026-11-03T03:00:00+09:00",
      "title_ja": "OpenAI、防御を強化する次回のセキュリティスプリントを準備中",
      "summary_ja": "Cathedral Systemsと共に、AIを活用して内部防御システムをテスト・強化するセキュリティスプリントを準備している。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's LifeVal Judges AI on Real-Life Errands, Not Just Coding",
      "summary": "OpenAI's new LifeVal benchmark measures how well models handle messy, personal errands like finding childcare, meal planning, and dealing with government services.",
      "url": "https://alphasignal.ai/news/openai-s-lifeval-judges-ai-on-real-life-errands-not-just-coding",
      "published": "2026-11-03T02:27:26+09:00",
      "title_ja": "OpenAI、実生活の用事遂行能力を測る新ベンチマーク「LifeVal」を公開",
      "summary_ja": "育児探しや食事計画、行政手続きなど、コーディングではなく日常的な雑用をAIがどれだけこなせるかを測定する。"
    },
    {
      "lab": "OpenAI",
      "title": "Scaling Git at OpenAI",
      "summary": "How OpenAI built Pando, a Git-compatible backend designed for the scale of development that Codex makes possible.",
      "url": "https://openai.com/index/scaling-git-at-openai",
      "published": "2026-11-03T00:30:00+09:00",
      "title_ja": "OpenAIにおけるGitのスケール手法",
      "summary_ja": "Codexが可能にした大規模開発のスケールに対応するため、Git互換の独自バックエンド「Pando」を構築した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Edge0's Audio8 Clones Any Voice Across 23 Languages With Just 600M Parameters",
      "summary": "Edge0 released a 0.6B text-to-speech model with zero-shot voice cloning, 23-language support, and competitive accuracy against models up to 8x larger.",
      "url": "https://alphasignal.ai/news/edge0-s-audio8-clones-any-voice-across-23-languages-with-just-600m-parameters",
      "published": "2026-11-03T00:03:00+09:00",
      "title_ja": "Edge0、23言語対応で声の複製が可能な小型モデル「Audio8」を発表",
      "summary_ja": "わずか6億パラメータでゼロショット音声複製に対応。23言語をサポートし、最大8倍大きいモデルに匹敵する精度を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing the Grid Protectors Program",
      "summary": "OpenAI’s Grid Protectors Program will work with utilities to help future compute campuses support grid reliability and protect consumer electricity costs.",
      "url": "https://openai.com/index/grid-protectors-program",
      "published": "2026-11-03T00:00:00+09:00",
      "title_ja": "OpenAI、電力網の信頼性を守る「Grid Protectors」プログラムを発表",
      "summary_ja": "公益事業体と協力し、将来の計算拠点による電力網への負荷を軽減し、消費者の電気代上昇を防ぐ取り組みを行う。"
    },
    {
      "lab": "AlphaSignal",
      "title": "A Developer Compiled a Full RISC-V CPU Into Qwen3.5's Weights",
      "summary": "A Qwen3.5-4B variant compiles a 32-bit RISC-V processor directly into its weights, turning Gated DeltaNet layers into addressable RAM.",
      "url": "https://alphasignal.ai/news/a-developer-compiled-a-full-risc-v-cpu-into-qwen3-5-s-weights",
      "published": "2026-11-02T21:48:50+09:00",
      "title_ja": "開発者がQwen3.5の重み内にRISC-V CPUをコンパイル",
      "summary_ja": "Qwen3.5-4Bの重み内に32ビットRISC-Vプロセッサを組み込み、Gated DeltaNet層をRAMとして動作させた。"
    },
    {
      "lab": "OpenAI",
      "title": "LifeVal",
      "summary": "Introducing LifeVal, a benchmark measuring how well AI helps people complete everyday tasks, from finding childcare to managing finances and government paperwork.",
      "url": "https://openai.com/index/lifeval",
      "published": "2026-11-02T18:00:00+09:00",
      "title_ja": "LifeVal：日常業務のAI遂行能力を測るベンチマーク",
      "summary_ja": "育児、財務管理、行政書類の処理など、人々が日々行うタスクをAIがどの程度支援できるかを測定する指標。"
    },
    {
      "lab": "OpenAI",
      "title": "Qodo builds context into AI code review with Codex",
      "summary": "Qodo brings company knowledge and coding standards into Codex, helping developers catch P0 issues across repositories before opening a pull request.",
      "url": "https://openai.com/index/qodo-codex-plugin",
      "published": "2026-11-02T09:00:00+09:00",
      "title_ja": "Qodo、Codexを用いたAIコードレビューに文脈を統合",
      "summary_ja": "企業の知識や規約をCodexに組み込み、プルリクエスト前にリポジトリ横断で重大な問題を検出可能にする。"
    },
    {
      "lab": "Hugging Face",
      "title": "nemotron-halloween",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-halloween",
      "published": "2026-10-31T02:57:24+09:00",
      "title_ja": "nemotron-halloween",
      "summary_ja": "（本文詳細なし）"
    },
    {
      "lab": "Google DeepMind",
      "title": "Speeding up planning decisions with AI",
      "summary": "Google DeepMind and UK government work together to reduce planning assessment times",
      "url": "https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/",
      "published": "2026-10-30T23:18:30+09:00",
      "title_ja": "Google DeepMind、AIで都市計画の意思決定を迅速化",
      "summary_ja": "英国政府と協力し、AIを活用して都市計画の審査にかかる時間の短縮に取り組んでいる。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1.1 — Update models like you update software",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1",
      "published": "2026-10-29T22:37:07+09:00",
      "title_ja": "Granite Switch 4.1.1 — ソフトウェアのようにモデルを更新",
      "summary_ja": "ソフトウェアのアップデートと同様の手法でAIモデルを更新可能なGranite Switch 4.1.1を発表。"
    },
    {
      "lab": "Hugging Face",
      "title": "Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready",
      "summary": "",
      "url": "https://huggingface.co/blog/announcing-project-protostar",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Project ProtoStar発表：公的資金による科学をAI対応に",
      "summary_ja": "公的資金による科学研究の成果をAIが学習・活用しやすい形式に整備するプロジェクトを開始。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Le Chonk: Mistral Large 4 on Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/mistral-large4",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Hugging FaceにMistral Large 4「Le Chonk」が登場",
      "summary_ja": "Mistral Large 4（コードネーム：Le Chonk）がHugging Faceプラットフォームで利用可能になった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing AnySpeechRecognizer and AnyDecisionModel: Open Models for Speech and Decisions on Apple Platforms",
      "summary": "",
      "url": "https://huggingface.co/blog/anydecisionmodel",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Appleプラットフォーム向けの音声認識・意思決定オープンモデル発表",
      "summary_ja": "AnySpeechRecognizerとAnyDecisionModelという、Apple環境で動作するオープンな音声・意思決定モデルを導入。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代のフロンティアモデル",
      "summary_ja": "Googleの次世代フロンティアモデルであるGemini 4 Carbonについて発表。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "sleepフレームワーク：継続学習でLLMの知識を保持する新手法",
      "summary_ja": "LLMが新しいことを学び続けても過去の知識を忘れないようにするための新しい教育イノベーション手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build specialized multimodal models with LFM3",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm3",
      "published": "2026-10-28T02:16:52+09:00",
      "title_ja": "LFM3による特化型マルチモーダルモデルの構築",
      "summary_ja": "LFM3を使用して、特定の用途に特化したマルチモーダルAIモデルを構築する方法について解説。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイムシミュレーションにおいて、かつてない現実感を実現する新しい世界モデルGenie 4を発表。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイムな3D頭部アニメーション",
      "summary_ja": "少数の画像と表情信号から3Dの人物頭部をリアルタイムでアニメーション化する。忠実度と実行速度を両立した。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AIや基盤モデルを、結核診断のスクリーニング現場に活用する取り組みについて。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上の全陸地を10メートル単位で区分し、森林の種類を詳細に分類した世界地図を作成。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "AIを活用した超音波検査技術により、最前線の現場における妊産婦への医療提供を支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に根付かせる：自律型ウェットラボの構成要素",
      "summary_ja": "自律的な実験室（ウェットラボ）の実現に向け、AIエージェントに生物学的な基礎知識を統合する手法。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用ツール「Google Antigravity」を活用し、新しい抗菌ペプチドの発見プロセスを迅速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上のMLXとRDMAによる大規模LLM推論",
      "summary_ja": "Appleシリコンの統一メモリを活用し、Mac上で最新モデルの推論や微調整をローカルかつ高速に行う手法を解説。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントへ",
      "summary_ja": "推論を自由生成ではなく候補からの「選択」に置き換えるSSR枠組みを導入。推論コストを抑えつつ精度を向上させる。"
    }
  ]
};
