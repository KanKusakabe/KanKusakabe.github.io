window.papersData = {
  "updated_at": "2026-11-20 11:53 JST",
  "arxiv": [
    {
      "id": "2611.24738",
      "title": "Jeveration: System One Models Now Generate",
      "url": "https://arxiv.org/abs/2611.24738",
      "pdf": "https://arxiv.org/pdf/2611.24738",
      "authors": [
        "Yuhe Liu",
        "Qi Li",
        "Shihua Zhang",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 114,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new",
        "sota"
      ],
      "star_quote": "Jeveration generates a 512x512 image in 78 ms, up to 122x faster than existing unified models",
      "signals": [
        "HF ▲114"
      ],
      "headline": "1回のフォワードパスで画像生成・編集・密度予測を行う統合モデルJeveration",
      "what": "高速な並列予測を行うSystem Oneモデル（Jev）を画像生成に拡張した手法です。位置間で共有されるランダム状態を条件付けに用いることで、単一のパスでグローバルな一貫性を保った画像生成、画像変換、およびセグメンテーションなどの密度予測を同時にサポートします。",
      "enables": "512x512の画像をわずか78msで生成し、既存の統合モデルと比較して最大122倍の高速化を実現しながら、競争力のある画質を維持しました。",
      "why_it_matters": "拡散モデルのような反復的なサンプリングを必要とせず、単一のモデルで多様なビジョンタスクを極めて高速に実行できる点に意義があります。",
      "tags": [
        "画像生成",
        "コンピュータビジョン",
        "高速推論"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.18564",
      "title": "Check Token: Real-Time Self-Verification and Precise Truncation in LLM Reasoning",
      "url": "https://arxiv.org/abs/2611.18564",
      "pdf": "https://arxiv.org/pdf/2611.18564",
      "authors": [
        "Fei Ding",
        "Yongkang Zhang",
        "Yuhao Liao",
        "Zijian Zeng",
        "Huiming Yang"
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
      "star_quote": "We propose the check token, establishing built-in self-verification for language model generation streams for the first time",
      "signals": [],
      "headline": "LLM推論の自己検証を実現するcheck token：推論エラーのリアルタイム検出と再生成",
      "what": "ECCメモリのパリティビットに着想を得て、語彙に「check token」という特殊なマーカーを追加し、モデル自身が任意のタイミングで自己検証（分析、特定、切り捨て、書き換え）を起動する手法です。推論内容は含まない機能的なトークンであり、オーバーヘッドは約13%に抑えられています。",
      "enables": "HMMT25ベンチマークで+10.8ポイントの精度向上を達成し、Best-of-8手法と比較して88倍のトークン効率を実現しました。推論チェーンが長くなるほど、誤りが発生した直後に処理を中断・修正できる正確な切り捨ての利点が顕著になります。",
      "why_it_matters": "生成が完了した後に外部から検証する既存手法とは異なり、推論プロセスの中にリアルタイムな自己修正機能を組み込んだ点が独創的です。",
      "tags": [
        "LLM",
        "推論効率化",
        "自己検証"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21114",
      "title": "VAE Rhythm: Temporal Decoding Traces for AI-Generated Video Detection",
      "url": "https://arxiv.org/abs/2611.21114",
      "pdf": "https://arxiv.org/pdf/2611.21114",
      "authors": [
        "Ke Sun",
        "Shuwei Li",
        "Haiyang Mei",
        "Mike Zheng Shou"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 7 figures. Project page: https://showlab.github.io/vae-rhythm",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "Most video generators decode latents with a 3D causal VAE that groups consecutive frames in time, so the fidelity of generated frames rises and falls periodically",
      "signals": [],
      "headline": "ビデオ生成AIの痕跡「VAE Rhythm」：周期的な誤差パターンによる生成動画の検知",
      "what": "多くの動画生成AIが採用している3D causal VAEの構造に起因する、フレームごとの復元精度の周期的な変動（VAE Rhythm）を検知する手法です。既存のVAEを用いて再構成誤差を測定するだけで、学習なしで生成動画を識別できます。",
      "enables": "SoraやKling 3.0を含む31の生成モデルにおいて、周期的な痕跡を発見しました。ゼロショットでの検知性能で既存の15のベースラインを上回り、他の検知器と組み合わせることでAUROCを最大23.7%向上させます。",
      "why_it_matters": "見た目のアーティファクト（不自然さ）が消えていく中で、生成パイプラインの構造自体が残す避けられない物理的痕跡に着目した点が画期的です。",
      "tags": [
        "生成AI検知",
        "動画解析",
        "偽造検出"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21599",
      "title": "Hyperlyve: Parallelized Enumeration and Exact Lyapunov Stability Certification for Deep ReLU Networks",
      "url": "https://arxiv.org/abs/2611.21599",
      "pdf": "https://arxiv.org/pdf/2611.21599",
      "authors": [
        "Brian Yarbrough",
        "Jesse Wayment",
        "Jingbo Wang",
        "Philip E. Par\\'{e}",
        "Shreyas Sundaram"
      ],
      "categories": [
        "eess.SY",
        "cs.CG",
        "cs.LG",
        "cs.LO",
        "cs.SY",
        "math.DS"
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
      "star_quote": "Hyperlyve enumerates ReLU networks over 150-times faster than competing tools",
      "signals": [],
      "headline": "Hyperlyve：深層ReLUネットワークを用いた動的システムの安定性を150倍高速に証明",
      "what": "ニューラルネットワーク制御を含む非線形動的システムの漸近安定性を数学的に証明するためのフレームワークです。ReLU活性化関数によって分割される多面体領域を並列アルゴリズムで列挙し、各領域でリアプノフ条件が満たされるかを厳密に検証します。",
      "enables": "既存の検証ツールと比較して150倍以上の高速化を達成し、これまで解析困難だった複雑なシステムの安定性証明を可能にしました。また、この問題の計算複雑性がco-NP完全であることを初めて特徴づけました。",
      "why_it_matters": "自動運転やロボット制御などの安全性が極めて重要な分野において、ニューラルネットワークの動作を近似なしで厳密に保証できる実用的ツールとなります。",
      "tags": [
        "形式検証",
        "制御理論",
        "安全AI"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.24541",
      "title": "Fuse Before Reconstruct: A Novel Reconstruction Paradigm for Multimodal Industrial Anomaly Detection",
      "url": "https://arxiv.org/abs/2611.24541",
      "pdf": "https://arxiv.org/pdf/2611.24541",
      "authors": [
        "Zhi Li",
        "Hanyu Wang",
        "Qiyu Chen",
        "Fei Shen",
        "Zhengtao Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint before peer review. Includes supplementary material. Code: https://github.com/LiZhi-CASIA/FBR",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "surpassing previous state-of-the-art methods by +2.9% and +4.1%, respectively.",
      "signals": [],
      "headline": "特徴融合を再構成の前に行う産業用異常検知の新パラダイム「Fuse Before Reconstruct」",
      "what": "画像と点群のマルチモーダルデータを用いた異常検知において、特徴の融合を再構成処理の前に行うFuse Before Reconstruct (FBR) パラダイムを提案しています。双方向クロスモーダルアテンションとピクセル単位のゲート付き融合により、モダリティ間の相補性を最大限に活用します。",
      "enables": "MVTec 3D-ADで98.3%、Eyecandiesで92.6%のI-AUROCを達成し、既存のSOTA手法をそれぞれ2.9%、4.1%更新しました。",
      "why_it_matters": "従来の再構成手法における「モダリティ間の情報不足」や「一対多の曖昧なマッピング」という課題を、特徴融合を先行させることで解決しています。",
      "tags": [
        "異常検知",
        "マルチモーダル",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24689",
      "title": "Stealing Exact Training Data from Other Clients during Federated Learning",
      "url": "https://arxiv.org/abs/2611.24689",
      "pdf": "https://arxiv.org/pdf/2611.24689",
      "authors": [
        "Omkar Shrikanth",
        "Soham Dambalkar",
        "Parag Jyoti Pal",
        "Advik Raj Basani",
        "Arnab K. Paul"
      ],
      "categories": [
        "cs.LG",
        "cs.CR",
        "cs.DC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint. 22 pages, 21 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We show, for the first time, exact sentence recovery, with 100% precision",
      "signals": [],
      "headline": "連合学習において他クライアントの正確な訓練データを盗み出す新しい勾配反転攻撃",
      "what": "連合学習の勾配更新情報から元データを復元する、反復的なループを用いた勾配反転攻撃パイプラインです。あるラウンドで復元に成功した文を勾配から差し引くことで、残りの文の信号を浮かび上がらせ、複数のクライアントが混ざった勾配から個別のデータを特定します。",
      "enables": "モデルの隠れ層次元の4倍までのトークンが含まれる集計データから、最大80.2%の文を100%の精度で正確に復元することに初めて成功しました。",
      "why_it_matters": "従来の攻撃では困難だった「複数クライアントが混ざった状態からの正確なテキスト復元」が可能であることを示し、連合学習のプライバシーリスクを浮き彫りにしています。",
      "tags": [
        "セキュリティ",
        "連合学習",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24830",
      "title": "A Foundation Model to Measure and Predict Human Behaviour",
      "url": "https://arxiv.org/abs/2611.24830",
      "pdf": "https://arxiv.org/pdf/2611.24830",
      "authors": [
        "Haoran Ye",
        "Tianrui Huo",
        "Hangzhen Li",
        "Xin Zhang",
        "Guojie Song"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.HC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "48 pages, 6 figures",
      "hf_upvotes": 2,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "It predicts individual behaviour more accurately than frontier LLMs (up to 28.4% relative improvement).",
      "signals": [],
      "headline": "人間の心理状態と行動を高い精度で予測する基盤モデルChiron",
      "what": "心理学的構成概念の表現、個人の行動予測、および人口統計的な応答分布の調整を同時に行うためにLLMを微調整した基盤モデルです。36の行動ドメインと78の社会科学実験を含む大規模なデータセットで学習されています。",
      "enables": "既存のLLMと比較して個人の行動予測精度が最大28.4%向上し、社会科学実験のシミュレーションにおける効果量の推定誤差を82.2%〜94.3%削減しました。",
      "why_it_matters": "従来のLLMが抱えていた「人間らしさの歪み」を解消し、心理測定や社会科学研究に利用可能な信頼性の高い計算モデルを提供します。",
      "tags": [
        "心理学AI",
        "LLM",
        "行動科学"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24637",
      "title": "Hypnos: A Dual-Phase End-to-End Platform for Scalable Continual Learning at the Edge",
      "url": "https://arxiv.org/abs/2611.24637",
      "pdf": "https://arxiv.org/pdf/2611.24637",
      "authors": [
        "Guilherme Guedes",
        "Marco Apolinario Lainez",
        "Charlotte Frenkel"
      ],
      "categories": [
        "cs.AR",
        "cs.AI",
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
      "star_quote": "It sets a new state-of-the-art accuracy of 78.6%-81.6% for edge CL systems",
      "signals": [],
      "headline": "覚醒と睡眠のサイクルを模倣したエッジデバイス向け継続学習プラットフォームHypnos",
      "what": "脳の覚醒（低負荷な適応）と睡眠（長期的な記憶定着）に着想を得た、エッジ向けの継続学習システムです。覚醒時はMCU上で勾配を使わないプロトタイプ更新を行い、睡眠時は充電器側のリソースを用いてリハーサルベースの勾配更新を行います。",
      "enables": "CORe50ベンチマークにおいて、既存手法より22倍少ない計算量で78.6%〜81.6%というSOTAの精度を達成しました。",
      "why_it_matters": "電力とメモリに制約があるエッジデバイスにおいて、プライバシーを保ちつつ動的なデータ変化に適応するための実用的なアーキテクチャを提示しています。",
      "tags": [
        "継続学習",
        "エッジコンピューティング",
        "組み込み"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.22124",
      "title": "FrameSeg3D: Learned Local Frames for Segmenting Small Parts on High-Resolution 3D Scans",
      "url": "https://arxiv.org/abs/2611.22124",
      "pdf": "https://arxiv.org/pdf/2611.22124",
      "authors": [
        "Xinwen Zhang",
        "Tongyan Wang",
        "Huawei Lin"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 6 figures, 16 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "outperforms state-of-the-art methods on hand scans (mean Dice 0.970 on nails)",
      "signals": [],
      "headline": "高解像度3Dスキャン上の微小部位を、局所座標系の予測により高精度にセグメンテーションする手法",
      "what": "手のスキャンにおける爪や口腔スキャンにおける歯など、微小な部位のセグメンテーションのために、まず部位の中心と向き（局所フレーム）を予測し、その視点から高解像度で再描画して処理するFrameSeg3Dを提案しています。スキャン全体を一度に処理する際の解像度不足や視点の歪みの問題を回避します。",
      "enables": "爪のセグメンテーションでmean Dice 0.970、歯のセグメンテーションでIoU 96.5を達成し、既存のSOTA手法を上回る精度を実現しました。",
      "why_it_matters": "計算資源の制約による解像度の低下を防ぎ、部位の向きやスケールを正規化することで、少数のラベルデータからでも高精度な学習が可能になります。",
      "tags": [
        "3Dビジョン",
        "セグメンテーション",
        "医療画像処理"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22231",
      "title": "From Temperature-Limited to Battery-Limited Legged Locomotion",
      "url": "https://arxiv.org/abs/2611.22231",
      "pdf": "https://arxiv.org/pdf/2611.22231",
      "authors": [
        "Rapha\\\"el S\\'egas",
        "Bal\\'azs Opra",
        "L\\'eo Ghafari",
        "Thomas Stewart"
      ],
      "categories": [
        "cs.RO",
        "cs.LG",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "9 pages, 7 figures, 2 tables. Supplementary video in the ancillary files. Dataset: https://doi.org/10.5281/zenodo.24274994",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "turns sustained locomotion from temperature-limited to battery-limited",
      "signals": [],
      "headline": "モータの熱制約を考慮した強化学習により、脚式ロボットの歩行時間をバッテリー限界まで延長",
      "what": "モータの温度を直接観測せず、トルクと関節速度から推定される熱モデル（13ノードのRCネットワーク）に基づき、将来の収束温度（漸近線）を報酬関数に組み込む強化学習手法です。ロボットが過熱する前に熱を分散させる歩容を学習させます。",
      "enables": "Unitree Go2において、熱による停止（シャットダウン）を回避し、走行距離を1.1km（19分）から10.0km（174分、バッテリー枯渇まで）へと大幅に延長しました。",
      "why_it_matters": "脚式ロボットの実運用におけるボトルネックがバッテリー容量ではなく、モータの熱であることを指摘し、それを制御層で解決する実用的なアプローチを提示しています。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "システム制御"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22355",
      "title": "SandBAR: A Band-Asymmetric Architecture for Underwater Image Restoration with Removable Frequency Scaffolding",
      "url": "https://arxiv.org/abs/2611.22355",
      "pdf": "https://arxiv.org/pdf/2611.22355",
      "authors": [
        "Yanzi Liu",
        "Haoran Hou",
        "Jiachi Tong",
        "Shen Chen",
        "Shuang Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to WACV 2027. Camera-ready version. 9 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "establishes a new three-domain mean state of the art on the benchmark family",
      "signals": [],
      "headline": "周波数特性の非対称性を利用した水中画像復元アーキテクチャSandBAR",
      "what": "水中画像の劣化が低周波（色かぶり）と高周波（局所的なボケ）で異なる性質を持つことに着目した、帯域非対称（Band-Asymmetric）な復元アーキテクチャです。SPARKモジュールにより、低周波には広範な色の修正を、高周波には軽量な詳細復元を並列に適用します。",
      "enables": "主要な3つの水中画像ベンチマーク（EUVP, LSUI, UIEB）において、既存手法を約1.0 dB上回る新たなSOTAを達成しました。",
      "why_it_matters": "水中特有の光学現象を物理的な特性に合わせてモデル化しており、推論時の計算負荷を増やすことなく高い復元性能を実現しています。",
      "tags": [
        "画像復元",
        "水中画像処理",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22737",
      "title": "Proximal Targets: Training Looped Refiners on Problems with Many Correct Answers",
      "url": "https://arxiv.org/abs/2611.22737",
      "pdf": "https://arxiv.org/pdf/2611.22737",
      "authors": [
        "Syed Affan Daimi"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose the proximal target: train each pass toward the correct answer nearest to its own input",
      "signals": [],
      "headline": "正解が複数存在する問題において、入出力間の距離に基づく学習により推論を収束させる手法",
      "what": "数独やグラフ彩色など、正解が複数ある反復型の推論モデル（Looped Refiner）のためのProximal Target学習法です。出力を特定の固定された一正解に近づけるのではなく、現在の入力に最も近い正解をターゲットに設定することで、平均化による不正解状態への陥りを防ぎます。",
      "enables": "数独において、標準的な学習では2.5%だった正解率を98.8%まで向上させ、10,000以上の正解がある疎な問題でも高い性能を示しました。",
      "why_it_matters": "反復的な推論モデルにおいて「多義性」が学習を不安定化させるという理論的課題を解決し、推論の収束性を保証する新しい枠組みを提供します。",
      "tags": [
        "AI",
        "推論",
        "強化学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22955",
      "title": "ResoLUT: Distilling Residual Networks into Lookup-Table Networks",
      "url": "https://arxiv.org/abs/2611.22955",
      "pdf": "https://arxiv.org/pdf/2611.22955",
      "authors": [
        "Katarzyna Fojcik",
        "Aidas Mikalauskas",
        "Matthias Kampa",
        "Renaldas Zioma",
        "Jogundas Armaitis"
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
        "sota"
      ],
      "star_quote": "best results of logic and lookup-table networks on CIFAR-10 and CIFAR-100",
      "signals": [],
      "headline": "ResNetをルックアップテーブルの木に蒸留し、FPGAでの超高速推論を実現するResoLUT",
      "what": "学習済みのResNetを、多ビットの残差接続（residual stream）を維持したまま、ルックアップテーブル（LUT）の木構造へと層ごとに蒸留する手法です。論理ネットワークでありながら、ディープな階層構造と数値精度を両立させます。",
      "enables": "CIFAR-100で78.87%の精度を達成し、FPGA実装において毎秒18万9千枚という極めて高いスループットを記録しました。",
      "why_it_matters": "論理回路ベースのネットワークにおいて課題だった深層化と精度の両立を実現し、エッジデバイスやFPGAでのAI実装の可能性を広げました。",
      "tags": [
        "モデル圧縮",
        "FPGA",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.18916",
      "title": "Simplify, Agree, Distill: Label-Free Self-Distillation with Stepping Stones",
      "url": "https://arxiv.org/abs/2611.18916",
      "pdf": "https://arxiv.org/pdf/2611.18916",
      "authors": [
        "Dingyang Chen",
        "Jinfeng Xiao",
        "Zhenyu Zhang",
        "William Hu",
        "Ziyu Wang",
        "Yang Liu"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Without thinking mode, it gains 13.2 and 22.7 points, 2.5 and 2.7 times the gains of OPSD with ground-truth solutions.",
      "signals": [],
      "headline": "ラベル不要の自己蒸留手法STONE：簡単な中間問題を「踏み石」として数学的推論能力を向上",
      "what": "正解ラベルを使わず、モデル自身が生成した「stepping stones（踏み石）」と呼ばれる簡単な関連問題を通じて自己蒸留を行う手法です。モデルが一貫して解ける問題の解答プロセス（思考過程）を教師データとし、最終的な答えを除いた状態で学生モデルに学習させます。",
      "enables": "Qwen3-8Bにおいて、正解ラベルを用いた従来の自己蒸留（OPSD）の2.7倍に相当する22.7ポイントの精度向上を達成しました。推論時の追加コンテキストやモデル呼び出しを必要としません。",
      "why_it_matters": "難解な問題で合意（Voting）が失敗するという従来のラベルフリー手法の課題を、解きやすい関連問題への「合意の移動」によって克服しています。",
      "tags": [
        "自己蒸留",
        "数学的推論",
        "LLM"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20119",
      "title": "CECAR: Cache & Expert Co-Aware Routing Accelerates On-Device Inference of MoE LLMs",
      "url": "https://arxiv.org/abs/2611.20119",
      "pdf": "https://arxiv.org/pdf/2611.20119",
      "authors": [
        "Byeongju Kim",
        "Hoonki Lee",
        "Byungjun Kim",
        "Inyul Ra",
        "Yongjin Kim",
        "Yongseong Lee"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to NeurIPS 2026. 24 pages, 5 figures, 19 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "delivering a 4.5x speedup over conventional MoE inference and exceeding the decode speed of baselines",
      "signals": [],
      "headline": "MoEモデルのオンデバイス推論を高速化するCECAR：キャッシュ再利用予測に基づく動的ルーティング",
      "what": "リソース制約のあるデバイスでMixture-of-Experts (MoE)を実行するための、キャッシュ管理とエキスパートのルーティングを統合したシステムです。機械学習を用いて各エキスパートの再利用距離を予測し、メモリ上にある（または再利用に近い）エキスパートを優先的に選択するようにルーティングを調整します。",
      "enables": "VRAMが16GBのコンシューマ向けGPUにおいて、Qwen3-30B-A3Bモデルで12.5 tokens/sの推論速度を達成し、従来手法から4.5倍の高速化を実現しました。",
      "why_it_matters": "モデル全体をメモリに乗せられない環境でも、SSDからのロード待ちを抑えつつ高いスループットを維持できる実用的なシステムです。",
      "tags": [
        "MoE",
        "オンデバイス推論",
        "キャッシュ最適化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.23339",
      "title": "Optimize the Cob, Then the Kernel: Optimizing Beam Search for Generative Recommendation Inference",
      "url": "https://arxiv.org/abs/2611.23339",
      "pdf": "https://arxiv.org/pdf/2611.23339",
      "authors": [
        "Shing Wai Pun",
        "Kai Wu",
        "Pengfei Xia",
        "Hui Zang",
        "Wei Guo",
        "Yong Liu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our approach reduces end-to-end latency by up to 25x over vLLM on Ascend NPUs",
      "signals": [],
      "headline": "Generative Recommendationの推論をTree Attentionと静的KV管理で最大25倍高速化",
      "what": "Generative Recommendation（GR）特有の長い入力と広いBeam Search、短い出力という特性に最適化した推論エンジンです。Tree AttentionによるKVキャッシュアクセスの重複排除に加え、静的なKVキャッシュ割り当てやTorchAirによるグラフコンパイル、語彙制約デコードなどを統合しています。",
      "enables": "カスタムカーネルを使用せずに、Ascend NPU上でvLLMに対し最大25倍の推論レイテンシ削減を実現し、最新のカスタムカーネル手法に匹敵する性能を達成しました。",
      "why_it_matters": "LLMサービングの既存手法であるvLLMなどはGRの推論特性に対して冗長な処理が多く、個別のカーネル開発の前にパイプライン全体をホリスティックに最適化する重要性を示しています。",
      "tags": [
        "推論加速",
        "推薦システム",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23581",
      "title": "ExiST: Existence-Aware Self-Training for Semi-Supervised Multi-Organ Segmentation",
      "url": "https://arxiv.org/abs/2611.23581",
      "pdf": "https://arxiv.org/pdf/2611.23581",
      "authors": [
        "Maxx Richard Rahman",
        "Prakhar Kumar",
        "Wolfgang Maass"
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
      "star_quote": "ExiST outperforms the current state-of-the-art methods and reaches 77.1 mean Dice",
      "signals": [],
      "headline": "多臓器セグメンテーションにおける「臓器の欠如」を考慮した自己学習手法ExiST",
      "what": "半教師あり学習において、教師モデルが小さな臓器を見逃した際に背景として誤学習してしまう問題を解決する「Existence-aware Self-Training (ExiST)」を提案しています。臓器が未検出の場合は「不在」ではなく「未解決」として扱い、セット値ターゲットを用いたマージナルクロスエントロピー損失で学習します。",
      "enables": "AMOSデータセットにおいて5%のラベル付きデータで75.9 mean Dice、Synapseにおいて20%のデータで77.1 mean Diceを達成し、従来手法を上回りました。",
      "why_it_matters": "ラベル付きデータが少ない環境での微小臓器の消失というセルフトレーニング特有の失敗モードを、不確実性の明示的な扱いによって克服しています。",
      "tags": [
        "画像分割",
        "半教師あり学習",
        "医療AI"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23633",
      "title": "Option-GRPO: Hierarchical RL Against AI Slop in Code Generation for Unseen SDKs",
      "url": "https://arxiv.org/abs/2611.23633",
      "pdf": "https://arxiv.org/pdf/2611.23633",
      "authors": [
        "Prashank Kadam"
      ],
      "categories": [
        "cs.SE",
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to Findings of EACL 2027. 27 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Option-GRPO, a hierarchical reinforcement learning framework that adapts a code LLM",
      "signals": [],
      "headline": "階層型RL「Option-GRPO」による未知のSDK向けコード生成の効率化と冗長性排除",
      "what": "学習データに含まれない未知のSDKに対して、ソースコードのみから適応する階層型強化学習フレームワークです。SDKの構造から再利用可能なパターンを「Option」として定義し、機能の正当性とコードのエレガンス（冗長性の排除）を同時に最適化します。",
      "enables": "12種類の未知のSDKにおいて、標準的なGRPOを8.7ポイント上回る61.4%のpass@1を達成し、API呼び出し回数を34.7%削減、コード長を27%短縮しました。",
      "why_it_matters": "機能的には正しいが冗長で非効率な「AI slop」と呼ばれるコード生成の問題に対し、階層的な報酬設計と行動空間の定義によって直接アプローチしています。",
      "tags": [
        "LLM",
        "コード生成",
        "強化学習"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23896",
      "title": "Kernel Ridge Attention: Nonlinear Memory with Selective Forgetting",
      "url": "https://arxiv.org/abs/2611.23896",
      "pdf": "https://arxiv.org/pdf/2611.23896",
      "authors": [
        "Haowei Chen",
        "Yichen Wang",
        "Congfu Xu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Kernel Ridge Attention (KRA) is a recurrent sequence mixer",
      "signals": [],
      "headline": "非線形メモリと選択的忘却を備えた再帰型シーケンスミキサーKernel Ridge Attention",
      "what": "学習された非線形特徴量と共分散ガイド付きのメモリ更新を組み合わせた新しいアーキテクチャです。再帰的なリッジ回帰を用いて関連性を保存し、Ornstein-Uhlenbeck遷移によってコンテンツ依存の保持と忘却を制御します。",
      "enables": "推論状態のサイズをコンテキスト長に依存せず一定に保ちつつ、Attentionや既存の再帰型モデルを上回る予測精度と連想想起能力を実現しました。",
      "why_it_matters": "Attentionの表現力とRNNの効率性を、カーネル解釈が可能な数理的基盤に基づいて統合しており、スケーラブルな長系列処理の新たな選択肢となります。",
      "tags": [
        "アーキテクチャ",
        "RNN",
        "Attention"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24011",
      "title": "WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation",
      "url": "https://arxiv.org/abs/2611.24011",
      "pdf": "https://arxiv.org/pdf/2611.24011",
      "authors": [
        "Junlin Long",
        "Xu Deng",
        "Yiran Wang",
        "Yue Yang",
        "Yang Zhao",
        "Zeyu Zhang"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/AIGeeksGroup/WAM-Policy, Website: https://aigeeksgroup.github.io/WAM-Policy/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "yet no existing policy for it follows language instructions.",
      "signals": [],
      "headline": "四足歩行ロボットの言語指示による物体操作を実現するWAM-Policy",
      "what": "アーム型ロボット用のWorld Action Model (WAM) を四足歩行ロボットに転移・適応させる2段階の学習フレームワークです。オンポリシー自己蒸留（OPSD）による高速化と、強化学習およびマルチティーチャー蒸留による性能向上を組み合わせています。",
      "enables": "シミュレーション環境の10タスクにおいて85.0%の成功率を達成し、実機のUnitree Go2 Airへのデプロイにも成功しました。また、推論速度を元のモデルより14倍高速化しました。",
      "why_it_matters": "既存の言語指示対応モデルが少なかった四足歩行ロボットのloco-manipulationにおいて、アーム用モデルの知識を効率的に転移し、かつエッジデプロイ可能な速度を実現しています。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "蒸留"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24576",
      "title": "Late Entry in Looped Language Models",
      "url": "https://arxiv.org/abs/2611.24576",
      "pdf": "https://arxiv.org/pdf/2611.24576",
      "authors": [
        "Ziqi Jin",
        "Jiaxi Li",
        "Weiwen Xu",
        "Aixin Sun"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 9 figures",
      "hf_upvotes": 9,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "late entry, where new tokens skip initial passes and enter directly into the final",
      "signals": [],
      "headline": "Looped LMの推論を最大12.5倍高速化するLate EntryとWake Verification",
      "what": "重み共有ブロックを繰り返すLooped LMにおいて、新しいトークンが初期のパスをスキップして後半のパスから直接処理に入る「Late Entry」手法を提案しています。過去のトークンが深層パスを並行して完了させるWake Verificationを組み合わせることで、精度の低下を抑えつつ高速化します。",
      "enables": "Ouro-2.6Bモデルで5.2倍から6.8倍、Huginn-3.5B (T=64) では最大12.5倍の推論高速化を達成しました。",
      "why_it_matters": "モデルの深さを再帰回数で制御するLooped LM特有の柔軟性を活用し、精度の維持と推論レイテンシの劇的な削減を両立させるシステム的なアプローチです。",
      "tags": [
        "LLM",
        "推論加速",
        "Looped Transformer"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24872",
      "title": "MicroAssert: Microarchitecture-Aware Structured Assertion Generation for CPU Verification",
      "url": "https://arxiv.org/abs/2611.24872",
      "pdf": "https://arxiv.org/pdf/2611.24872",
      "authors": [
        "Hongqin Lyu",
        "Yonghao Wang",
        "Zhiteng Chao",
        "Wenxing Li",
        "Tiancheng Wang",
        "Evangeline F. Y. Young"
      ],
      "categories": [
        "cs.AR",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "7 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "MicroAssert achieves 100% syntax correctness and complete branch, statement, and toggle coverage",
      "signals": [],
      "headline": "CPU検証におけるマイクロアーキテクチャを考慮したアサーション生成「MicroAssert」",
      "what": "RTL（ハードウェア記述言語）から機能領域を直接特定し、構造化された契約と検証プリミティブを通じてCPUのアサーションを自動生成するフレームワークです。カバレッジガイド付きのフィードバックを用いて、検証の網羅性を段階的に向上させます。",
      "enables": "5つのRISC-V CPUでの評価において、100%の構文正当性と高い分岐カバレッジを達成し、既存手法より最大3.5倍高いエラー検出率を示しました。",
      "why_it_matters": "従来の自動生成手法が苦手としていた、CPU内部の複雑なマイクロアーキテクチャ挙動や領域間の相互作用を捉えた検証が可能になります。",
      "tags": [
        "ハードウェア検証",
        "CPU設計",
        "形式検証"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23731",
      "title": "RecallFlow: Episodic Memory as the Source Distribution of Generative Robot Policies",
      "url": "https://arxiv.org/abs/2611.23731",
      "pdf": "https://arxiv.org/pdf/2611.23731",
      "authors": [
        "Xuji Zhang",
        "Qilin Zhong",
        "Zichen Zhang",
        "Wei Zhai",
        "Jian Di",
        "Kun Li"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 7 figures, 17 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "RecallFlow achieves a state-of-the-art average success rate of 80.4% on the public MIKASA-Robo memory benchmark",
      "signals": [],
      "headline": "エピソード記憶をソース分布として利用し記憶依存の操作を安定させるRecallFlow",
      "what": "ロボットの視覚運動学習において、ガウスノイズの代わりにエピソード記憶から生成した分布を初期状態として用いるFlow-basedモデルです。「Recall-Relocalization」により記憶内のターゲットと現在の視界を紐付け、適切なアクションの近くからサンプリングを開始します。",
      "enables": "MIKASA-RoboメモリベンチマークでSOTAとなる80.4%の成功率を記録し、実機ロボットのタスクでも既存の最強のベースラインを18.8ポイント上回りました。",
      "why_it_matters": "長い履歴情報を条件として与えるだけの従来手法で発生していた「偽の相関」や「記憶負荷増大による精度の低下」という問題を、生成の起点自体を変えることで解決しています。",
      "tags": [
        "ロボティクス",
        "模倣学習",
        "メモリシステム"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23813",
      "title": "SWIFT: Slow World, Instant Freshness, and Timely Action for Asynchronous Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.23813",
      "pdf": "https://arxiv.org/pdf/2611.23813",
      "authors": [
        "Jiazhe Wang",
        "Tianyi Yang",
        "Ruihang Li",
        "Fan Lu",
        "Xianming Zeng",
        "Jianyun Xu"
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
      "star_quote": "SWIFT achieves the best results among compared world-action methods, establishing a favorable accuracy-latency trade-off.",
      "signals": [],
      "headline": "非同期処理により鮮度とリアルタイム性を両立する自動運転システムSWIFT",
      "what": "ワールドモデルの更新を操作のクリティカルパスから切り離した非同期アーキテクチャです。バックグラウンドでVideo DiTが未来の環境を予測し、フォアグラウンドの軽量なAction DiTが最新の視覚フィードバックと組み合わせて即座に判断を下します。",
      "enables": "NAVSIMベンチマークで94.2 PDMSを達成しつつ、109.9msのフォアグラウンドレイテンシを実現し、精度と速度の優れたトレードオフを確立しました。",
      "why_it_matters": "高負荷な生成モデルを自動運転に組み込む際の課題である「推論中の環境変化」と「制御の遅延」を、予測的なワールドコンテキストと高速なアクション決定の分離によって解決しています。",
      "tags": [
        "自動運転",
        "ワールドモデル",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23822",
      "title": "Mapping the Design Space of Feature Sampling for Optical Flow",
      "url": "https://arxiv.org/abs/2611.23822",
      "pdf": "https://arxiv.org/pdf/2611.23822",
      "authors": [
        "Liping Zhang"
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
      "star_quote": "SAGE reduces the end-point error (EPE) by 24.2% and 16.4% on Sintel clean and final",
      "signals": [],
      "headline": "画素ごとに最適なサンプリング領域を学習するオプティカルフロー推定手法SAGE",
      "what": "オプティカルフロー推定における特徴サンプリングを改善する手法（Sampling with Anisotropic Gaussian Expectation）です。一律のサンプリングではなく、各画素の領域特性に合わせて異方性ガウス期待値を用いたサンプリング範囲と方向を適応的に学習します。",
      "enables": "計算量の増加をわずか1.5%に抑えつつ、Sintelデータセットでのエンドポイントエラー（EPE）を最大24.2%削減し、ゼロショットのドメイン間汎化性能を大幅に向上させました。",
      "why_it_matters": "従来手法の固定的なサンプリングが冗長または不十分であった点を指摘し、サンプリングの形状自体を分析・設計可能な変数として扱えるようにしました。",
      "tags": [
        "コンピュータビジョン",
        "オプティカルフロー",
        "サンプリング"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24104",
      "title": "SCOPE: Single-Cell Omics Prediction from Histology via RNA-Protein Prior Enhancement",
      "url": "https://arxiv.org/abs/2611.24104",
      "pdf": "https://arxiv.org/pdf/2611.24104",
      "authors": [
        "Leyang Tao",
        "Xuan Gong",
        "Luyuan Xie",
        "Arjun Beniwal",
        "Yuqi Tan",
        "Kun-Hsing Yu"
      ],
      "categories": [
        "cs.CV",
        "q-bio.GN"
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
      "star_quote": "SCOPE improves the average RNA Pearson correlation over the strongest baseline by 8.8%.",
      "signals": [],
      "headline": "RNAとタンパク質の相関知識を活用して病理画像から単一細胞情報を予測するSCOPE",
      "what": "H&E染色画像から細胞単位のRNAおよびタンパク質含有量を予測するフレームワークです。RNAとタンパク質の間の生物学的な相関関係を事前知識（RNA-protein prior）として取り込み、限られた教師データでも相互に知識を転移させる設計となっています。",
      "enables": "16臓器にわたるデータセットでRNA予測の相関係数を8.8%改善し、学習に含まれていない未知のマーカーに対しても11.9%の精度向上を達成しました。",
      "why_it_matters": "高品質なシングルセルデータの不足という課題に対し、マルチモーダルな生物学的知見をモデルに組み込むことで、空間オミクス解析の適用範囲を大幅に広げています。",
      "tags": [
        "バイオ情報学",
        "コンピュータビジョン",
        "医療AI"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24206",
      "title": "GALA: Gallery-Level Alignment for Real-Life Vision Decoding from EEG",
      "url": "https://arxiv.org/abs/2611.24206",
      "pdf": "https://arxiv.org/pdf/2611.24206",
      "authors": [
        "Philippe Forest",
        "Giulia Lioi",
        "Mai Pham Quyen",
        "Alix Lamouroux",
        "Javen Shi",
        "Adrien Merlini"
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
        "sota"
      ],
      "star_quote": "GALA is the most accurate label-free method in every setting, 6.6 points above the best competing method",
      "signals": [],
      "headline": "ラベルなしデータで新しいユーザーに適応するEEG視覚デコード手法GALA",
      "what": "脳波（EEG）から見ている画像を解読する際に、新しいユーザーに対してラベルなしのデータのみでキャリブレーションを行う手法です。候補となる画像のギャラリーと蓄積されるユーザーのEEG埋め込みを、Sinkhorn-Procrustesアラインメントなどを用いて自動的に整合させます。",
      "enables": "THINGS-EEG-2において、53分間の使用（ラベルなし）で、未知の被験者に対するTop-1精度を28%から67%まで引き上げました。",
      "why_it_matters": "被験者ごとにラベル付きデータを収集する手間を省けるため、実用的なブレイン・コンピュータ・インターフェース（BCI）の普及を大きく後押しします。",
      "tags": [
        "BCI",
        "EEG",
        "ドメイン適応"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24301",
      "title": "LoopCache: Accelerating Long-Context Self-Speculative Decoding for Looped Transformers",
      "url": "https://arxiv.org/abs/2611.24301",
      "pdf": "https://arxiv.org/pdf/2611.24301",
      "authors": [
        "Zizhuo Fu",
        "Haochen Huang",
        "Shengxuan Qiu",
        "Linye Wei",
        "Ziyu Tang",
        "Runsheng Wang"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LoopCache achieves average 10.25x and 14.56x speedup over WFD and LoopSpec.",
      "signals": [],
      "headline": "Looped Transformerの推論を最大14倍高速化するLoopCache",
      "what": "重みを共有する再帰型Looped Transformerに特化した自己投機的デコード（Self-Speculative Decoding）手法です。確信度に基づく動的なドラフト更新と、KVキャッシュを循環させてメモリトラフィックを削減するCyclic KV Cache戦略を導入しています。",
      "enables": "既存の高速化手法であるWaveFront DecodingやLoopSpecと比較して、平均で10.25倍から14.56倍のスピードアップを達成しました。",
      "why_it_matters": "長いコンテキストを扱う際の最大のボトルネックであるKVキャッシュのメモリ転送量に対し、モデル構造を活かした循環的な管理手法で抜本的な改善をもたらしています。",
      "tags": [
        "LLM",
        "推論加速",
        "Looped Transformer"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24310",
      "title": "Proprioceptive Simultaneous Base and Terrain Elevation Estimation for Legged Robot Locomotion",
      "url": "https://arxiv.org/abs/2611.24310",
      "pdf": "https://arxiv.org/pdf/2611.24310",
      "authors": [
        "Michael Maravgakis",
        "Stylianos Piperakis",
        "Panos Trahanias"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 12 Figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing the absolute trajectory error by 22.1% relative to the best of three state-of-the-art proprioceptive estimators.",
      "signals": [],
      "headline": "地形をランドマークとして扱い垂直ドリフトを抑制する脚式ロボット推定法SBEE",
      "what": "視覚が使えない環境での脚式ロボット向けに、地形自体を永続的なランドマークとして扱う推定フレームワークです。Invariant Kalman Filterによるフローティングベース推定とグリッドベースの標高マップを双方向ループで結合し、足跡からの高さ計測で自己位置の垂直軸を補正します。オープンソースとして公開されています。",
      "enables": "ANYmal-Dでの実験において、従来のSOTAな自己固有感覚推定手法と比較して、絶対軌道誤差を22.1%削減することに成功しました。",
      "why_it_matters": "カメラやLiDARが機能しない環境で特に問題となる垂直方向のドリフトを、地面との接触情報のみを用いて効果的に抑えることができる実用的な手法です。",
      "tags": [
        "ロボティクス",
        "自己位置推定",
        "制御"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24431",
      "title": "Let a Small Model Read First: Faster Prefill for Long Interleaved Image-Text Inputs",
      "url": "https://arxiv.org/abs/2611.24431",
      "pdf": "https://arxiv.org/pdf/2611.24431",
      "authors": [
        "Xiaolin Lin",
        "Kai-Chiang Wu",
        "Bing Li",
        "Grace Li Zhang"
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
      "star_quote": "SkimPrefill speeds up the prefill of Qwen3.5-9B, Gemma-4-12B and Qwen3-VL-32B by 3.7 times, 11.6 time and 8.2 times",
      "signals": [],
      "headline": "小型モデルが先行して重要箇所を特定する長文VLM推論加速法SkimPrefill",
      "what": "長い画像・テキスト混在入力に対し、まず超軽量なハイブリッドモデル（Qwen3.5-0.8Bなど）が低解像度の画像を用いて入力をスキャンする手法です。特定のAttentionヘッドが質問に関係する重要な画像や段落を特定し、その部分だけをターゲットの大型モデルに渡します。",
      "enables": "128Kトークンの入力において、精度の低下を抑えつつ、Qwen3.5-9BやGemma-4-12BのPrefill速度を3.7倍から11.6倍に高速化しました。",
      "why_it_matters": "VLMの長文入力におけるPrefillの待ち時間を、学習不要なセレクターと小型モデルの効率的な「拾い読み」によって大幅に短縮しています。",
      "tags": [
        "VLM",
        "推論加速",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24708",
      "title": "F$^3$: What Makes Good Experience in World-Action Models?",
      "url": "https://arxiv.org/abs/2611.24708",
      "pdf": "https://arxiv.org/pdf/2611.24708",
      "authors": [
        "Zihe Huang",
        "Sirui Zhou",
        "Haozhi Han",
        "Ruge Zhang",
        "Teng Ma",
        "Tao Ma"
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
      "star_quote": "over native Cosmos 3 Nano, it raises success by 12.0 pp and 10.8 pp",
      "signals": [],
      "headline": "自身の経験を「Form・Fit・Fusion」で活用し性能を高めるWorld-Action Model",
      "what": "World-Action Model (WAM) が自身の過去の経験（成功・失敗の両方）を効果的に利用するための学習・推論フレームワークです。経験を要約された操作記録に変換し（Form）、その有用性を予測し（Fit）、アクションの事前知識として統合（Fusion）します。",
      "enables": "MolmoSpacesなどのベンチマークで、ネイティブモデルに対して成功率を約12ポイント向上させ、成功までのステップ数を約12%削減しました。",
      "why_it_matters": "単に過去のロールアウトを文脈として与えるだけでは逆に性能が下がることもあるという問題に対し、経験をどのように抽出し、いつ、どこで使うべきかを明示した手法です。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24805",
      "title": "Edge-Efficient Joint RAW Image Compression and Restoration for Smart Wearable Devices",
      "url": "https://arxiv.org/abs/2611.24805",
      "pdf": "https://arxiv.org/pdf/2611.24805",
      "authors": [
        "Yunong Sun",
        "Sicheng Chen",
        "Fei Xia"
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
      "star_quote": "On SIDD, our method improves PSNR by more than 1.5 dB over cascaded baselines",
      "signals": [],
      "headline": "ウェアラブルデバイス向けの軽量RAW画像圧縮・復元フレームワークCRAW",
      "what": "スマートグラス等のリソース制約が厳しいデバイス向けに、RAW画像の圧縮と復元を共同最適化する非対称フレームワークです。デバイス側の軽量なエンコーダでノイズ混じりのRAWデータを圧縮し、バックエンドの強力なデコーダでノイズ除去とデモザイクを同時に行います。",
      "enables": "SIDDデータセットにおいて、従来の圧縮・復元を個別に行う手法よりも1.5dB高いPSNRを達成し、NPU上での推論を既存の復元モデルより27.6倍高速化しました。",
      "why_it_matters": "エッジでの計算負荷と通信コストのトレードオフに対し、センサーノイズをビットレートとして消費しない「復元を前提とした圧縮」というアプローチで解決しています。",
      "tags": [
        "画像処理",
        "エッジコンピューティング",
        "データ圧縮"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23352",
      "title": "Streaming Generative Video Compression with Embedding Alignment and In-Context Propagation",
      "url": "https://arxiv.org/abs/2611.23352",
      "pdf": "https://arxiv.org/pdf/2611.23352",
      "authors": [
        "Zhitao Wang",
        "Hengyu Man",
        "Han Liu",
        "Wenrui Li",
        "Debin Zhao",
        "Xiaopeng Fan"
      ],
      "categories": [
        "eess.IV",
        "cs.CV",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 18 figures, 5 tables, including supplementary material",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SGVC achieves competitive rate-perception performance, with average BD-rate savings of 71.97% over S$^2$VC",
      "signals": [],
      "headline": "Diffusion Transformerを用いた超低ビットレート動画圧縮手法SGVC",
      "what": "事前学習済みのVideo DiTを因果的なピクセル空間のリファイナーとして適応させる動画圧縮フレームワークです。Embedding Alignmentによる特徴量の整合と、過去の生成コンテキストを再利用するIn-Context Propagationにより、遅延を抑えた逐次的な復号を実現します。",
      "enables": "従来の生成型動画圧縮手法であるS2VCと比較して、DISTS指標に基づき平均71.97%のBD-rate削減を達成しました。",
      "why_it_matters": "計算コストの高いVAEデコーダーをバイパスし、DiTの強力な生成能力をストリーミング形式で活用することで、知覚品質の高い超低ビットレート圧縮を実用化に近づけています。",
      "tags": [
        "動画圧縮",
        "生成AI",
        "Diffusion Model"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23728",
      "title": "AdaS-ViT: Test-Time Adaptive Routing for Spiking Vision Transformers with Ultra-High Energy Efficiency",
      "url": "https://arxiv.org/abs/2611.23728",
      "pdf": "https://arxiv.org/pdf/2611.23728",
      "authors": [
        "Zecheng Hao",
        "Zihan Huang",
        "Shenghao Xie",
        "Jiyuan Zhang",
        "Zhaofei Yu",
        "Tiejun Huang"
      ],
      "categories": [
        "cs.NE",
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
        "sota"
      ],
      "star_quote": "attains an accuracy-per-energy ratio of 32$\\times$ to 72$\\times$, operating in an economical inference regime",
      "signals": [],
      "headline": "テストタイムの適応的ルーティングで超低消費電力を実現したAdaS-ViT",
      "what": "スパイクニューラルネットワーク（SNN）を用いたVision Transformerにおいて、アテンションスコアに基づきトークンごとに発火パターンを適応的に切り替える手法（AdaE-IF）を提案しています。重要な領域には精細なパターン、それ以外には省電力なパターンを割り当てます。",
      "enables": "ImageNet-1kにおいて、1画像あたりわずか1.02〜2.45mJのエネルギー消費で高い精度を維持し、精度対電力比を既存の32倍〜72倍に向上させました。",
      "why_it_matters": "計算の冗長性を排除する適応的ルーティングをSNNに導入し、エッジAI等で重要となるエネルギー効率の限界を大幅に押し広げています。",
      "tags": [
        "SNN",
        "Vision Transformer",
        "低消費電力"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.21880",
      "title": "Cancellation-Free Constrained SquareCB for Safe Controller Selection",
      "url": "https://arxiv.org/abs/2611.21880",
      "pdf": "https://arxiv.org/pdf/2611.21880",
      "authors": [
        "Kartik Pandit",
        "Sourav Ganguly",
        "Arnob Ghosh"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "stat.ML"
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
      "star_quote": "the violation is 6 to 9 times lower than that of primal-dual and virtual-queue baselines",
      "signals": [],
      "headline": "制約付きコンテキスチュアルバンディットにおける予算超過を抑制する安全なコントローラ選択手法",
      "what": "予算制約付きのコンテキスチュアルバンディットにおいて、SquareCBアルゴリズムに推定コストに基づく整流化された重みを導入する手法です。既存のラグランジュ乗数法とは異なり、各ラウンドで推定コストが予算を超えた場合のみ、予算内に戻すための最小限の修正を行います。",
      "enables": "ドローンやビル管理の制御において、既存のベースラインと比較して違反を6〜9倍低減しつつ、同等以上の累積報酬（regret）を維持できます。",
      "why_it_matters": "従来のラグランジュ乗数法では累積的な違反が許容される傾向にありましたが、本手法は各ステップでの安全性が求められる実システムの制御において、より高い安全性を提供します。",
      "tags": [
        "強化学習",
        "オンライン学習",
        "制御理論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.21917",
      "title": "Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention",
      "url": "https://arxiv.org/abs/2611.21917",
      "pdf": "https://arxiv.org/pdf/2611.21917",
      "authors": [
        "Wenhe Zhang",
        "Boxing Chen"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 8 figures, 20 tables. Code: https://github.com/zhangwenhe1007/blind-attention-heads",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "lifts multi-key retrieval accuracy from 54.1 to 97.5%, level with full attention",
      "signals": [],
      "headline": "Sparse Attentionにおける特定の「盲目なヘッド」の特定と修正による長文読解能力の回復",
      "what": "Sparse Attentionモデルが長文コンテキストの検索精度を落とす原因を、情報の希釈を引き起こす特定の「盲目なヘッド（blind heads）」にあると突き止めた診断・修復手法です。これらのヘッドを特定し、そこだけFull Attentionに戻す、あるいは4-bitのスカラーを用いることで精度を改善します。",
      "enables": "MiniCPM4.1-8Bにおいて、マルチキー検索精度を54.1%からFull Attentionと同等の97.5%まで引き上げ、推論速度のメリットを維持したまま精度を回復させました。",
      "why_it_matters": "すべてのトークンに注意を向けるのではなく、ボトルネックとなっている極少数のヘッド（KVヘッドの数%）に焦点を当てるだけで、長文処理性能が劇的に改善することを示しています。",
      "tags": [
        "LLM",
        "効率化",
        "自然言語処理"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22244",
      "title": "PhyVGGT: Feed-Forward Articulated Object Reconstruction from Monocular Videos",
      "url": "https://arxiv.org/abs/2611.22244",
      "pdf": "https://arxiv.org/pdf/2611.22244",
      "authors": [
        "Qi Shao",
        "Zhihao Cao",
        "Shuhao Zhai",
        "Anh Nguyen",
        "Hong Liang",
        "Baoru Huang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 5 figures, 7 tables. Project page: https://phyvggt.github.io",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves state-of-the-art monocular performance across five benchmarks",
      "signals": [],
      "headline": "単眼ビデオからの可動部位・関節パラメータを含む3D多関節オブジェクトの高速再構成",
      "what": "単一の動画像から、3Dの可動パーツ、関節パラメータ、未学習のポーズをワンパスで推定するPhyVGGTフレームワークです。3D基盤モデルを活用しつつ、静止した土台（ベース）に対する相対的な幾何学的特徴と運動の不確実性（Bingham prior）をデコードすることで、関節軸とピボットを閉形式で算出します。",
      "enables": "48フレームのビデオを6.8秒で処理でき、数時間を要する従来のシーン最適化手法を上回る精度と圧倒的な速度を両立しました。",
      "why_it_matters": "外部の奥行き情報やカメラポーズを必要とせず、単眼カメラのみでロボット操作やデジタルツインに必要な多関節モデルを効率的に生成できます。",
      "tags": [
        "3D再構成",
        "コンピュータビジョン",
        "ロボティクス"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23022",
      "title": "Dissecting the GPU Load/Store Unit and Exposing Its Security Risks",
      "url": "https://arxiv.org/abs/2611.23022",
      "pdf": "https://arxiv.org/pdf/2611.23022",
      "authors": [
        "Wenbo Han",
        "Pierre Talbot"
      ],
      "categories": [
        "cs.AR",
        "cs.CR"
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
      "star_quote": "we recover a full AES-128 key under the threat model of prior GPU AES timing attacks.",
      "signals": [],
      "headline": "GPUのLoad/Storeユニットの構造解明と、それを通じた新たなセキュリティ脆弱性の指摘",
      "what": "NVIDIA GPUのLoad/Store Unit（LSU）の内部挙動をリバースエンジニアリングし、メモリアクセスの競合がサイク単位でどのように発生するかを詳細に分析した研究です。アドレス依存のバンク競合やタグ検索が、情報の漏洩やプロセスの飢餓状態を引き起こすことを示しました。",
      "enables": "特定のワープを長時間待機させることで、他のプロセスのcuBLAS行列演算をA100上で最大750倍遅延させたり、暗号鍵（AES-128）を特定したりすることが可能であることを実証しました。",
      "why_it_matters": "GPUのアーキテクチャレベルでの脆弱性を明らかにし、マルチプロセス共有環境におけるセキュリティ対策の必要性を警鐘しています。",
      "tags": [
        "ハードウェア",
        "セキュリティ",
        "GPU"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23102",
      "title": "CADENCE: Learning Acyclic Gaits for Model-Based Quadruped Locomotion",
      "url": "https://arxiv.org/abs/2611.23102",
      "pdf": "https://arxiv.org/pdf/2611.23102",
      "authors": [
        "Owen Sullivan",
        "Sourav Selvaraj",
        "Mahdi Agheli"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 8 figures, 2 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "The policy we analyzed developed an acyclic gait, with no fixed period or stepping order",
      "signals": [],
      "headline": "歩行スケジュールに縛られない、非周期的な歩容を学習する4足歩行ロボット制御手法",
      "what": "従来の4足歩行コントローラのような固定された周期（トロットなど）を持たず、状況に応じて最適な脚を最適なタイミングで踏み出すCADENCEを提案しています。強化学習によるステッププランナーと凸モデル予測制御（MPC）を組み合わせ、非周期的な歩容を動的に生成します。",
      "enables": "穴の空いた足場（空隙率49%）などの困難な地形で、従来の周期的なコントローラ（43.0%）を大きく上回る72.9%の成功率を達成しました。",
      "why_it_matters": "環境の制約に合わせて柔軟に歩行パターンを変化させることが可能になり、不整地におけるロボットの走破能力を向上させます。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "モデル予測制御"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.21791",
      "title": "Regularized Score Centering",
      "url": "https://arxiv.org/abs/2611.21791",
      "pdf": "https://arxiv.org/pdf/2611.21791",
      "authors": [
        "Hao Bai",
        "Chenlu Ye",
        "Xuanchang Zhang",
        "Aviral Kumar",
        "Tong Zhang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 4,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "it achieves top performance across all six agentic tasks, improving by 14.3% on AppWorld",
      "signals": [],
      "headline": "非同期強化学習の安定性を向上させる正規化スコアセンタリング手法（RSC）",
      "what": "オフポリシー強化学習における報酬ベースラインの影響を排除するScore Centering（SC）に、行動ポリシーとの乖離を抑える逆KLダイバージェンス制約を加えた手法です。学習データの古さや推論時のミスマッチによる不安定性を緩和します。",
      "enables": "AppWorldなどのエージェント系タスクにおいて、既存の最強のベースラインと比較して最大14.3%の向上、BabyAIでは9.9倍のスコアを達成しました。",
      "why_it_matters": "LLMを用いたエージェント学習において不可欠な、非同期・オフポリシー環境での学習効率と安定性を同時に改善する重要な知見を提供します。",
      "tags": [
        "強化学習",
        "LLM",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22415",
      "title": "SpatialMind: Adaptive Multi-Level Geometric Fusion for Spatial Reasoning in Multimodal Large Language Models",
      "url": "https://arxiv.org/abs/2611.22415",
      "pdf": "https://arxiv.org/pdf/2611.22415",
      "authors": [
        "Shibin Zhao",
        "Hao Tan",
        "Fan Yang",
        "Haixin Wang",
        "Feilong Chen",
        "Yidong Ma"
      ],
      "categories": [
        "cs.CV",
        "cs.CG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Includes supplementary material. Code available at https://github.com/zhaosb-star/SpatialMind",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "attaining a state-of-the-art score of 72.3 on VSI-Bench",
      "signals": [],
      "headline": "タスクに応じた幾何学的粒度の適応的統合によるMLLMの3D空間推論能力の向上",
      "what": "マルチモーダルLLMにおいて、距離推定や経路計画といった異なるレベルのタスクに必要な幾何学情報の細かさを動的に調整するSpatialMindフレームワークです。指示、視覚、幾何学情報の各条件に基づいてゲートが作動し、最適な深さの幾何学特徴をLLMに融合します。",
      "enables": "3D空間推論ベンチマークのVSI-Benchにおいて、SOTAとなるスコア72.3を記録しました。",
      "why_it_matters": "一律に幾何学情報を与えるのではなく、タスクの要求に合わせて「粒度を使い分ける」という人間の認知に近いアプローチで、LLMの3D理解を深めました。",
      "tags": [
        "マルチモーダルLLM",
        "3D理解",
        "空間推論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22508",
      "title": "Reliability-Driven Feature Correction for Hyperspectral and LiDAR Classification",
      "url": "https://arxiv.org/abs/2611.22508",
      "pdf": "https://arxiv.org/pdf/2611.22508",
      "authors": [
        "Lianming Zhang",
        "Xiaolu Wang",
        "Qiya Song",
        "Jinyang Liu",
        "Renwei Dian",
        "Xudong Kang"
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
      "star_quote": "we propose ReDF, a reliability-driven framework that quantifies the reliability of each modality's features at each spatial location",
      "signals": [],
      "headline": "信頼度駆動型の特徴量補正による、ハイパースペクトルとLiDARデータの高精度分類",
      "what": "異なるセンサーから得られる情報の信頼性を各空間地点で定量化し、それをガイドとして情報の補正と統合を行うReDFフレームワークです。一方のセンサー情報が曖昧な場合に、他方の確実な情報を用いて補正する双方向のメカニズムを備えています。",
      "enables": "土地利用分類において、従来のハイパースペクトル・LiDAR統合手法を超える平均正解率とKappa係数を達成しました。",
      "why_it_matters": "異種センサーのデータの単純な結合ではなく、データの「不確かさ」を明示的に扱うことで、複雑な地表条件でも安定した認識を可能にします。",
      "tags": [
        "リモートセンシング",
        "画像分類",
        "マルチモーダル学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22549",
      "title": "Physically Admissible Generative Flow Matching for Sparse Flow Reconstruction",
      "url": "https://arxiv.org/abs/2611.22549",
      "pdf": "https://arxiv.org/pdf/2611.22549",
      "authors": [
        "Yuhao Wang",
        "Yuanxi Peng"
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
      "star_quote": "We introduce Feasible Subspace Consistency (FSC), a framework that preserves physical admissibility as an invariant of continuous generative dynamics",
      "signals": [],
      "headline": "物理的保存則を常に満たしながら流体場を再構成する、FSCを用いたFlow Matching",
      "what": "疎な観測データから流体の全速度場を再構成する際、生成過程のあらゆるステップで物理的制約（非圧縮性、境界条件）を数学的に保証するFeasible Subspace Consistency (FSC) フレームワークです。潜在空間上の輸送問題を解くことで、出力の物理的正当性を保ちます。",
      "enables": "疎なデータからの再構成において、グローバル誤差を最大50%削減しつつ、物理的にあり得ない歪みのない、信頼性の高い不確実性推定を可能にしました。",
      "why_it_matters": "深層学習による流体予測において、事後的な修正ではなく「物理的に妥当な解しか生成しない」という強固な制約を組み込んだ点が画期的です。",
      "tags": [
        "流体力学",
        "生成モデル",
        "科学技術計算"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22650",
      "title": "Must You See Fakes to Catch Fakes? Language Says What to Look For, Real Images What to Ignore",
      "url": "https://arxiv.org/abs/2611.22650",
      "pdf": "https://arxiv.org/pdf/2611.22650",
      "authors": [
        "Tianchi Xu",
        "Yuxuan Zhou",
        "Yuheng Zhang",
        "Yanan Guan",
        "Tao Dai",
        "Shu-Tao Xia"
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
      "star_quote": "reaches a mean AUC of 98.2% with MoE-ViE, 4.2 points above the best existing detector",
      "signals": [],
      "headline": "生成画像を使わずにAI生成画像を検知する、テキスト誘導型検知手法SaySee",
      "what": "特定のジェネレータで生成された画像で訓練するのではなく、テキスト記述から「生成らしさ」の方向を定義し、実画像でフォーマットの偏りを補正する、訓練不要（training-free）の検知手法です。ビジョン基盤モデルが既に持つ「生成画像」の概念をテキストで引き出します。",
      "enables": "24種類の評価データセットにおいて、最新のジェネレータに対しても平均AUC 98.2%という、既存手法を4.2ポイント上回る高い汎用性を実現しました。",
      "why_it_matters": "特定のモデルに対する過学習を防ぎ、未知のジェネレータや画像形式に対しても頑健な検知が可能になります。",
      "tags": [
        "フェイク検知",
        "コンピュータビジョン",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22728",
      "title": "LoopZip: Visual Token Compression for Efficient Looped Vision-Language Models",
      "url": "https://arxiv.org/abs/2611.22728",
      "pdf": "https://arxiv.org/pdf/2611.22728",
      "authors": [
        "Weizhong Huang",
        "Zhicheng Liu",
        "Yan Zhang",
        "Fei Chao",
        "Xiawu Zheng",
        "Liujuan Cao"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose LoopZip, a training-free visual token compression algorithm addressing both issues.",
      "signals": [],
      "headline": "反復計算を行う視覚言語モデル向けの効率的なトークン圧縮アルゴリズムLoopZip",
      "what": "計算を繰り返すLooped VLMにおいて、計算コストとメモリ使用量を削減するための訓練不要なトークン圧縮手法です。最初の数回の呼び出しでの注目度（Attention）を平均化して重要なトークンを選別し、出力の偏差を最小化する補正を行います。",
      "enables": "性能を維持したままトークンの50%を削減し、GPUメモリ消費を約58%削減、エンドツーエンドの推論速度を2.01〜2.47倍に高速化しました。",
      "why_it_matters": "モデルの層を共通化してパラメータを減らすLoopedモデルの利点を、計算効率の面でもさらに最大化する手法です。",
      "tags": [
        "モデル圧縮",
        "マルチモーダルLLM",
        "効率化推論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22782",
      "title": "PANO: Parallel Latent Space Neural Operator for Solving PDEs",
      "url": "https://arxiv.org/abs/2611.22782",
      "pdf": "https://arxiv.org/pdf/2611.22782",
      "authors": [
        "Zijiang Yang",
        "Xiaomeng Wu",
        "Chen Kuang",
        "Dongmei Fu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 24 figures, 23 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "demonstrate that PANO achieves state-of-the-art performance",
      "signals": [],
      "headline": "並列潜在空間を用いたニューラルオペレータによる大規模PDE問題の高精度解法",
      "what": "偏微分方程式（PDE）を解く際に、複数の独立した「並列潜在空間」で物理的相互作用を学習し、それらを統合して結果を予測するPANO手法です。単一の圧縮パターンに依存せず、多様な物理情報を保持することを可能にします。",
      "enables": "航空機の揚力係数予測で21.4%以上、成形加工の歪み予測で28.3%以上のエラー削減を達成し、多くのベンチマークでSOTAを記録しました。",
      "why_it_matters": "複雑な幾何形状や大規模な観測データを持つ物理現象に対して、Transformerベースのモデルをより効果的に適用できるようにしました。",
      "tags": [
        "PDE",
        "ニューラルオペレータ",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23001",
      "title": "NVIDIA Kumo Tabular: Pushing the Accuracy-Efficiency Frontier for Tabular Prediction",
      "url": "https://arxiv.org/abs/2611.23001",
      "pdf": "https://arxiv.org/pdf/2611.23001",
      "authors": [
        "Jingang Qu",
        "Valter Hudovernik",
        "Martin Jurkovi\\v{c}",
        "Cedric Lorenz",
        "David Holzm\\\"uller",
        "Federico Lopez"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 13 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Kumo Tabular-L ranks first on eight benchmarks: TabArena, TALENT, BeyondArena",
      "signals": [],
      "headline": "テーブルデータ専用の基盤モデルKumo Tabularによる超高速・高精度な予測",
      "what": "分類・回帰タスク向けの、追加学習なしで即座に使用できるテーブルデータ用基盤モデル（最大2.1億パラメータ）です。人工的に生成されたテーブルデータで事前学習され、行の埋め込みとコンテキスト内学習（In-Context Learning）を用いて予測を行います。",
      "enables": "8つの主要なベンチマークで1位を獲得し、既存の有力モデル（TabPFNなど）と比較して1.7倍から36倍高速な推論を実現しました。",
      "why_it_matters": "10万列を超えるような大規模なテーブルや、テキスト・画像が混在する複雑なデータにも対応でき、実務におけるテーブルデータ解析を効率化します。",
      "tags": [
        "テーブルデータ",
        "基盤モデル",
        "機械学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.18723",
      "title": "Acting by Intent, Reacting by Sight: Visual Conditioned Reflexes for Real-Time VLM Agents",
      "url": "https://arxiv.org/abs/2611.18723",
      "pdf": "https://arxiv.org/pdf/2611.18723",
      "authors": [
        "Qiancheng Zhou",
        "Wenhua Zhang"
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
        "cap"
      ],
      "star_quote": "ViCoR reduces average per-action decision latency by 2.6x (from 14.0 s to 5.4 s) and cuts token consumption by 36.9%",
      "signals": [],
      "headline": "VLMエージェントに「条件反射」を導入するViCoR：リアルタイム環境での遅延を2.6倍削減",
      "what": "熟考を行うメインのVLMと、軽量で高速な視覚反射ブランチを組み合わせた制御フレームワークです。メインVLMが状況に応じた反射ルールを定義し、反射ブランチが生の視覚情報と動きのヒューリスティックを用いて、サブ秒単位で最終的な行動決定を下します。",
      "enables": "高頻度な反応の67.8%を反射ブランチにオフロードすることで、平均決定遅延を14.0秒から5.4秒へと2.6倍削減し、トークン消費を36.9%カットしました。GameWorldベンチマークの17タイトルで成功率が+11.8%向上しています。",
      "why_it_matters": "思考時間の長いVLMの弱点であるリアルタイム性を、人間の意識と反射の仕組みを模倣することで解決しています。",
      "tags": [
        "VLM",
        "自律エージェント",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.18769",
      "title": "Gradient-Guided Hardware-Native MIXFP4",
      "url": "https://arxiv.org/abs/2611.18769",
      "pdf": "https://arxiv.org/pdf/2611.18769",
      "authors": [
        "Jian-Jia Chen",
        "Brian J. Chan",
        "Wen-Hung Lee",
        "Yi-Ting Li",
        "Po-Shen Chen",
        "Kuan-Te Kuo"
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
      "star_quote": "FlipQuant at 16 x 64 closes 42.5% of NVFP4's PPL gap to BF16 on average",
      "signals": [],
      "headline": "Blackwell向け4ビット量子化手法FlipQuant：ハードウェア互換性を保ちつつ精度差を42.5%改善",
      "what": "NVIDIA BlackwellのTensor Coreでサポートされる4ビット（W4A4）推論において、タイル単位でE2M1またはE0M3のフォーマットを選択する手法です。エンドツーエンドの勾配を用いて、BF16の教師モデルとのKLダイバージェンスを最小化するようにフォーマットのバイナリマップを学習します。",
      "enables": "既存のNVFP4がBF16に対して持つパープレキシティの乖離を、平均で42.5%解消しました。専用カーネルの実装により、GEMMの実行オーバーヘッドはわずか1.9%以下に抑えられています。",
      "why_it_matters": "ハードウェアの制約（タイル単位の命令実行）と量子化精度のトレードオフを、微分可能な最適化によって解決した実用的なアプローチです。",
      "tags": [
        "量子化",
        "GPU",
        "LLM推論"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19261",
      "title": "dit.xpu : Taming DiT Sparse Inference on Mobile SoCs",
      "url": "https://arxiv.org/abs/2611.19261",
      "pdf": "https://arxiv.org/pdf/2611.19261",
      "authors": [
        "Jiayu Chen",
        "Jinye Hu",
        "Maoliang Li",
        "Anqian Cen",
        "Hailong Zou",
        "Zihao Zheng"
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
      "star_quote": "DiT.XPU achieves up to 1.56x end-to-end denoising speedup over the Hexagon-NPU backend and 11.5x attention-kernel speedup",
      "signals": [],
      "headline": "モバイルSoCでのDiT推論を高速化するDiT.XPU：タイルアライメントと異種演算器の協調",
      "what": "Diffusion Transformer（DiT）をモバイルデバイスのNPUとGPUで効率的に実行するためのフレームワークです。タイル単位のスパースアテンションと、デノイジングステップ間で緩やかに変化する残差を利用したアンカーベースの誤差補正を組み合わせています。",
      "enables": "Snapdragon搭載スマートフォンにおいて、Hexagon NPUバックエンドに対して最大1.56倍のエンドツーエンド高速化を実現し、アテンションカーネル単体では既存手法の11.5倍の速度を達成しました。",
      "why_it_matters": "DiTの計算コストが高い高解像度画像生成において、モバイルハードウェアの特性（NPUの規則的なアクセス推奨）に合わせたスパース化を実現しています。",
      "tags": [
        "画像生成",
        "エッジAI",
        "推論最適化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19287",
      "title": "VLN-Flash: Parallel Action Decoding with Adaptive Execution for Vision-and-Language Navigation",
      "url": "https://arxiv.org/abs/2611.19287",
      "pdf": "https://arxiv.org/pdf/2611.19287",
      "authors": [
        "Ruizhe Xie",
        "Honghua Chen",
        "Binglin Wang",
        "Tong Guo",
        "Xu Tang",
        "Puti Yan"
      ],
      "categories": [
        "cs.RO",
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
      "star_quote": "We introduce VLN-Flash, a training-free decoder that evaluates the complete action-prefix tree in a single forward pass.",
      "signals": [],
      "headline": "VLN-Flash：視覚言語ナビゲーションにおける並列行動デコードと適応的実行",
      "what": "ロボットの自律移動（VLN）において、将来の行動シーケンスの候補を1回のフォワードパスで並列評価する学習不要のデコーダーです。各ステップの予測スコアの確信度（margin）に基づき、次の観測を行う前に実行すべき行動数を動的に決定します。",
      "enables": "Uni-NaVidやStreamVLNなどのモデルにおいて、従来の自己回帰的デコードと比較して約3倍の高速化を実現しました。R2R-CEベンチマークでは成功率が最大2.7ポイント向上しています。",
      "why_it_matters": "1ステップずつ予測と観測を繰り返すことによる待機時間を削減し、ロボットのリアルタイムな移動性能を向上させています。",
      "tags": [
        "ロボット",
        "ナビゲーション",
        "高速デコード"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19796",
      "title": "The Sense Paradigm for World Models",
      "url": "https://arxiv.org/abs/2611.19796",
      "pdf": "https://arxiv.org/pdf/2611.19796",
      "authors": [
        "Haidong Hu"
      ],
      "categories": [
        "cs.LG"
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
      "star_quote": "On four pixel environments, the return distance learned by Sense detects irreversible transitions with an AUC between 0.95 and 1.00",
      "signals": [],
      "headline": "世界モデルの崩壊を防ぎ不可逆性を検知するSense損失：有向距離による潜在空間の学習",
      "what": "潜在空間における未来予測モデル（Latent World Model）において、ターゲットネットワークなどの複雑な仕組みの代わりに、一方向の距離（有向距離）を用いた単一のクロスエントロピー損失（Sense loss）を導入する手法です。",
      "enables": "不可逆な遷移（後戻りできない状態変化）の検知においてAUC 0.95〜1.00という高い精度を達成し、複雑なナビゲーションタスクであるTwoRoomで100%の成功率を記録しました。",
      "why_it_matters": "従来の手法では困難だった「潜在空間における意味のある距離」の学習を可能にし、物理的な不可逆性を理解する世界モデルを実現しています。",
      "tags": [
        "世界モデル",
        "強強化学習",
        "潜在表現学習"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20521",
      "title": "LINK: Lightweight and Inductive Node-to-Node Propagation Rule Learning for Traffic Kriging",
      "url": "https://arxiv.org/abs/2611.20521",
      "pdf": "https://arxiv.org/pdf/2611.20521",
      "authors": [
        "You Shang",
        "Yu-Kwan Ching",
        "Weifeng Su",
        "Guanyao Li",
        "Ruiyuan Li",
        "Gary Shueng-Han Chan"
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
      "star_quote": "Compared with the strongest baseline on each subset, LINK achieves an average MAE reduction of 54.7% over original baselines.",
      "signals": [],
      "headline": "交通状態推定のLINK：ノード間伝搬ルールを明示的に学習する軽量な交通クリンギング",
      "what": "観測データのない地点の交通情報を推定する「交通クリンギング」において、ノード間の遷移ルールを明示的に学習するパラダイムです。スペクトル領域と時間領域の両方で伝搬を行うSpectral Propagation Networkを導入しています。",
      "enables": "既存の最新手法と比較して、平均誤差（MAE）を54.7%削減しつつ、学習時間を66.5%、推論時間を86.6%短縮することに成功しました。",
      "why_it_matters": "グラフニューラルネットワークによる暗黙的な集約ではなく、物理的な交通流に近い伝搬ルールを直接モデル化することで、精度と効率を両立しています。",
      "tags": [
        "交通工学",
        "グラフニューラルネットワーク",
        "時系列予測"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20846",
      "title": "EDITORS Know Your Style! Editing LoRA Subspaces for Stylistic Attribution and Imitation",
      "url": "https://arxiv.org/abs/2611.20846",
      "pdf": "https://arxiv.org/pdf/2611.20846",
      "authors": [
        "Zixuan Wang",
        "Gregory Kang Ruey Lau",
        "Xiao Tian",
        "Jue Fan",
        "Caroline Chaux",
        "Bryan Kian Hsiang Low"
      ],
      "categories": [
        "cs.CL",
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
      "star_quote": "EDITORS achieves state-of-the-art accuracy, outperforming the strongest existing baseline by up to 29%.",
      "signals": [],
      "headline": "執筆スタイルと内容を分離するEDITORS：LoRA部分空間の編集による著者特定と模倣",
      "what": "大規模言語モデルにおいて、文章の「スタイル」と「内容」の絡まりを解消するためのフレームワークです。まず内容に特化したLoRA部分空間を特定し、その方向へのアクティベーションを抑制（収縮）させながら、スタイル専用のLoRAアダプターを学習させます。",
      "enables": "著者特定（AA）タスクにおいて、既存の最強のベースラインを最大29%上回る精度を達成しました。スタイル模倣（SI）においても、内容の指示に従いつつ特定の著者の文体を忠実に再現できます。",
      "why_it_matters": "モデルが単語などの内容に引きずられてスタイルを誤認・学習する問題を、幾何学的な部分空間操作によって解決しています。",
      "tags": [
        "自然言語処理",
        "LoRA",
        "スタイル転送"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20969",
      "title": "AutoDiDact: Input Reduction over Inferred Structure",
      "url": "https://arxiv.org/abs/2611.20969",
      "pdf": "https://arxiv.org/pdf/2611.20969",
      "authors": [
        "Aarush Kumbhakern",
        "Rahul Gopinath"
      ],
      "categories": [
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "33 pages, including appendices. Replication package: https://doi.org/10.5281/zenodo.24164465",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "a neutral word and delimiter pairs suffice, and both can be inferred from the failing input by asking only what delta debugging already asks its oracle",
      "signals": [],
      "headline": "AutoDiDact：文法知識なしで入力データを構造的に最小化するデルタデバッグ",
      "what": "プログラムのクラッシュを引き起こす最小の入力を自動で見つける手法において、文法定義（Grammar）を必要とせずに、入力内の区切り文字やトークン構造をオラクルへの問い合わせだけで推論し、構造化された削減を行うシステムです。",
      "enables": "従来のバイトレベルのデルタデバッグと比較して、出力サイズを83%削減し、オラクル呼び出し回数を37%減らしました。10KiB以上の入力では、98%のサイズ削減を達成しています。",
      "why_it_matters": "独自のフォーマットや文法が未定義のデータに対しても、構造を考慮した高度なデバッグ（最小化）が適用可能になります。",
      "tags": [
        "ソフトウェアテスト",
        "デバッグ",
        "自動化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21085",
      "title": "State-Message Interaction Adapter for Cross-Domain Few-Shot Segmentation",
      "url": "https://arxiv.org/abs/2611.21085",
      "pdf": "https://arxiv.org/pdf/2611.21085",
      "authors": [
        "Hang Xing",
        "Yan Xia",
        "Yongjiang Liu",
        "Siqi Zhang",
        "Xueming Ding"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 9 figures, 7 tables, including the appendix",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "surpassing the strongest prior methods by +3.61 and +3.93 percentage points.",
      "signals": [],
      "headline": "ドメインを跨ぐ数枚の画像から領域分割を学習するSMIA：DINOv3を活用した適応手法",
      "what": "少数のアノテーション済み画像を用いて、自然画像で学習されたエンコーダー（DINOv3）を医療や産業ドメインに適応させる手法です。アテンションのヘッドごとの「メッセージ」とトークンの「状態」の相互作用を低ランク双線形写像で学習し、特徴量を精緻化します。",
      "enables": "医療・産業用の20のタスクにわたり、5ショットで77.40%の平均mIoUを達成し、既存のLoRAやAdaptFormerなどのパラメータ効率の良い適応手法を精度・再現率のバランスで上回りました。",
      "why_it_matters": "凍結された強力な事前学習モデルの内部表現（メッセージ）を、ごくわずかな追加パラメータ（0.51M）で効果的に再利用する道を開いています。",
      "tags": [
        "画像セグメンテーション",
        "Few-shot学習",
        "ドメイン適応"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21302",
      "title": "D\\'ej\\`a-Events: Multi-view 3D Geometry with Event Cameras via Sparsity-Aware Adaptive Gating",
      "url": "https://arxiv.org/abs/2611.21302",
      "pdf": "https://arxiv.org/pdf/2611.21302",
      "authors": [
        "Arda Cinar Demirtas",
        "Pablo Varela Bernal",
        "Marc Pollefeys",
        "Sunghwan Hong"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On DSEC it halves the error of the strongest baseline (0.15 vs. 0.30 AbsRel) with about a tenth of its parameters.",
      "signals": [],
      "headline": "Déjà-Events：イベントカメラを用いた3D幾何構造推定とスパース適応型ゲート",
      "what": "イベントカメラ（輝度変化のみを記録）のデータから、単一のフォワードパスでデプス、カメラポーズ、ポイントマップを推定するモデルです。RGBベースの強力な教師モデルから知識蒸留を行い、データの疎密に合わせて計算を調整する「スパース認識適応型ゲート」を導入しています。",
      "enables": "DSECデータセットにおいて、既存の最強のベースラインの半分（AbsRel 0.15）にエラーを削減しました。使用パラメータ数も既存手法の約1/10と非常に軽量です。",
      "why_it_matters": "3Dラベルが不足しているイベントカメラ分野において、大量にあるRGBモデルの知識を、データの疎密という物理的特性を考慮しつつ効率的に転移させています。",
      "tags": [
        "コンピュータビジョン",
        "3D再構成",
        "イベントカメラ"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21373",
      "title": "WeVisForensics: Self-Evolving Agent for Omni AI-Generated Video Detection",
      "url": "https://arxiv.org/abs/2611.21373",
      "pdf": "https://arxiv.org/pdf/2611.21373",
      "authors": [
        "Yipeng Du",
        "Yuxi Li",
        "Ying Zhang",
        "Chong Sun",
        "Chen Li",
        "Jing Lyu"
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
      "star_quote": "averages 95.2% detection accuracy across in-domain, out-of-domain and agentic benchmarks, 9.0% above the strongest prior detector",
      "signals": [],
      "headline": "WeVisForensics：自己進化するエージェントによる証拠に基づいたAI動画検知",
      "what": "視覚・音声のアーティファクト（不自然な箇所）を専門に調査する複数の「インスペクター・エージェント」を、メインの調査エージェントが統括するフレームワークです。強化学習（DTPO）を用いて、どの箇所の何を調べるべきかの戦略と、各専門エージェントの調査能力を同時に進化させます。",
      "enables": "広範なベンチマークで平均95.2%の検知精度を達成し、既存手法を9.0%上回りました。単に「生成か本物か」を判定するだけでなく、局所的な証拠（アーティファクトの位置など）を提示できます。",
      "why_it_matters": "複雑化する生成動画に対し、静的なモデルではなく、適応的に証拠を探し出すエージェント的なアプローチをとることで、高い精度と説明性を両立しています。",
      "tags": [
        "生成AI検知",
        "AIエージェント",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.18895",
      "title": "Lasso: Towards Sustainable AI-Generated Media Detection with Intel QAT On-Chip Compression",
      "url": "https://arxiv.org/abs/2611.18895",
      "pdf": "https://arxiv.org/pdf/2611.18895",
      "authors": [
        "Darsh Asher",
        "Joshua Kalyanapu",
        "Kaushal Mhapsekar",
        "Bita Aslrousta",
        "Amna Hassan",
        "Debayan Sengupta"
      ],
      "categories": [
        "cs.AR",
        "cs.AI",
        "cs.CR",
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
      "star_quote": "Detection takes 0.74 microseconds, a speedup of at least 83,784x across five baselines.",
      "signals": [],
      "headline": "Intel QATハードウェアの圧縮遅延を利用したAI生成コンテンツの超高速検知「Lasso」",
      "what": "Intelの圧縮アクセラレータ（QAT）の処理時間が、入力データの構造に依存するという特性を逆手にとった検知手法です。AIが生成したデータと人間が作成したデータの構造的差異を、ハードウェアの実行時間という「物理量」として測定します。",
      "enables": "テキスト検知において、既存手法（Binocularsなど）の8万倍以上の高速化を達成し、消費電力を99%以上削減しました。また、1つの手法でテキスト、画像、動画、コードの4つのモダリティに対応可能です。",
      "why_it_matters": "従来は膨大な計算資源を必要としたAI検知を、汎用ハードウェアのサイドチャネル情報を利用することで、エッジデバイスでも可能な超低コスト処理に変えています。",
      "tags": [
        "生成AI検知",
        "ハードウェアセキュリティ",
        "エッジコンピューティング"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20613",
      "title": "Noise-Aware Testing of NISQ Quantum Programs: Self-Baseline Oracle with a Controlled False-Positive Rate",
      "url": "https://arxiv.org/abs/2611.20613",
      "pdf": "https://arxiv.org/pdf/2611.20613",
      "authors": [
        "Mir Mohammad Yousuf",
        "Shabir Ahmad Sofi"
      ],
      "categories": [
        "quant-ph",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "53 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "the oracle's false-positive rate is a level set in advance",
      "signals": [],
      "headline": "ノイズのある量子プログラム向けの自己校正型テスト：誤検知率を制御可能なオラクル",
      "what": "ノイズの多い中規模量子デバイス（NISQ）上で動作するプログラムの正誤を判定するためのテストフレームワークです。信頼できる参照プログラムの実行結果を動的な「自己ベースライン」とし、Jensen-Shannonダイバージェンスの分位点を用いて判定しきい値を決定します。",
      "enables": "従来の固定しきい値では36-74%もあった誤検知率（False Positive Rate）を、指定したレベル（α=10^-3）通りの0.0011に抑えることに成功しました。IBM Heron実機でのテストでも高い故障検知性能を示しています。",
      "why_it_matters": "ハードウェアノイズとプログラムのバグを統計的に区別することで、量子ソフトウェア開発における信頼性の高いデバッグを可能にします。",
      "tags": [
        "量子計算",
        "ソフトウェアテスト",
        "ノイズ対策"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.22115",
      "title": "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks",
      "abstract": "We present Xing 4, a series of large language models that extends the TeleChat lineage through coordinated advances in model architecture and training infrastructure on Ascend. This report describes the design principles and systems engineering behind the series, spanning architecture selection, large-scale pretraining, and reasoning and agentic post-training. We study how sparse activation, attention design, model depth and width, and speculative decoding balance model capacity with computation, memory access, and execution overhead. Our pretraining infrastructure builds on MindSpore HyperParallel, combining topology-aware hybrid sharding, efficient distributed optimizer execution, and coordinated management of long-sequence workloads and activation memory. CPU affinity and core isolation further reduce host scheduling interference. Together, these mechanisms support the pretraining of a 285B-parameter model on 8,192 Ascend 910C cards, providing a concrete setting for the architectural and systems studies. For post-training, we introduce TeleGym, a unified agent execution platform that connects execution, evaluation, and trajectory construction to policy optimization. Disaggregated asynchronous execution, bounded oversampling, and partial rollout accommodate heterogeneous task durations while preserving trajectory continuity across policy updates. Together, these advances establish an Ascend-oriented training foundation for the continued development of Xing 4 across model scales and increasingly demanding reasoning and agent workloads.",
      "upvotes": 160,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://github.com/XingChen-AGI",
      "comments": 3,
      "org": "XingChen-AGI",
      "url": "https://huggingface.co/papers/2611.22115",
      "arxiv_url": "https://arxiv.org/abs/2611.22115",
      "title_ja": "TeleChat to Xing4: 国産チップとフレームワークでのフロンティア・エージェントモデルの進展",
      "summary_ja": "AscendチップとMindSporeを活用し、推論やエージェント能力を強化した大規模言語モデルシリーズXing 4を開発。"
    },
    {
      "id": "2611.18397",
      "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
      "abstract": "We introduce Gamer, a generalist agent framework built for long-horizon tasks in complex interactive environments. Its end-to-end architecture combines perception, memory management, and multi-step reasoning. A shared training and deployment pipeline supports interaction with both conventional 2D graphical interfaces and complex 3D simulated worlds. We first continue pre-training on a dataset constructed from tens of thousands of hours of device-level keyboard and mouse interaction. These trajectories span simulated games and embodied environments, allowing the model to learn environmental dynamics across both physical and virtual domains. Sparse-thinking instruction tuning then substantially reduces redundant computation while preserving the reasoning needed for complex decisions. We train the policy for long-horizon interaction with a stable multi-turn reinforcement learning method that addresses finite context windows, accumulated rollout errors, and sparse rewards. For real-time interaction, a cloud-edge inference engine serves numerous simulated game environments concurrently, supports unbounded-context execution, and keeps online inference latency low. Across multiple challenging 3D open-world games, Gamer demonstrates solid generalization and operational efficiency comparable to skilled players. It also achieves competitive results on a range of conventional 2D game benchmarks. These results suggest that even repetitive keyboard and mouse trajectories can support substantial gains from scaling data and learning algorithms. Training on these trajectories helps Gamer learn complex skills more steadily in environments with both physical and digital properties. This approach offers a path toward generalist agents that can interact across digital and physical worlds.",
      "upvotes": 138,
      "github_stars": 845,
      "github_repo": "https://github.com/RainBowLuoCS/Gamer",
      "project_page": "https://mihoyo-gamer.github.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.18397",
      "arxiv_url": "https://arxiv.org/abs/2611.18397",
      "title_ja": "Gamer: 長期タスク対応のリアルタイム・ゲームエージェント向け汎用視覚・言語・行動基盤モデル",
      "summary_ja": "数万時間の操作データから学習し、2D・3Dの複雑なゲーム環境で推論と行動を完結させる汎用エージェント。"
    },
    {
      "id": "2611.18359",
      "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
      "abstract": "The release of GPT-6 Astra marks the emergence of a new paradigm in robotics: agentic robotics. Within weeks, frontier models with agentic harnesses matched or exceeded task-specific policies on many embodied benchmarks. Instead of training a dedicated policy for each family of tasks, an agentic robotic system applies a foundation model to open-world embodied tasks. It operates in a closed loop: observing the environment, interpreting user intent, reasoning about the task, invoking skills and tools, verifying outcomes, and adapting its strategy. Despite these advances, the community has yet to converge on a shared definition, a reliable evaluation framework, or a research roadmap. We argue that Embodied System 2, realized by a foundation model together with an embodied harness, forms the decision-making core of agentic robotics. Its central challenge is to translate general-purpose reasoning into effective and verifiable actions under physical constraints such as limited reaction time, mechanical limits, unpredictable environment changes, and irreversible consequences. Motivated by this perspective, we propose an evaluation framework that measures both model capabilities and closed-loop system performance. Furthermore, we identify the principles that carry over from digital to physical agents and the challenges that must be addressed to achieve reliable physical autonomy. On top of the Embodied System 2 and the evaluation framework, we envision a research roadmap toward sustained autonomy: the ability to perform work safely and reliably with progressively broader responsibility, from executing individual primitives to fulfilling standing roles.",
      "upvotes": 133,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://grid-robotics-official.github.io/agentic-robotics-roadmap",
      "comments": 5,
      "org": "Grid Robotics",
      "url": "https://huggingface.co/papers/2611.18359",
      "arxiv_url": "https://arxiv.org/abs/2611.18359",
      "title_ja": "エージェント・ロボティクスの展望：ロボットシステムの新しい時代",
      "summary_ja": "基盤モデルを閉ループで適用し、多様なオープンワールド環境に適応する「エージェント・ロボティクス」の概念と展望を提示。"
    },
    {
      "id": "2611.24738",
      "title": "Jeveration: System One Models Now Generate",
      "abstract": "System One models such as Jev return decisions through fast, parallel prediction. In this paper, we introduce Jeveration, showing that the same decision paradigm can also generate high-quality images in a single forward pass. Jeveration builds on a frozen vision-language model, repurposing its visual-semantic knowledge for holistic image generation. The key challenge is to maintain global consistency. A single prompt admits many valid images, yet parallel predictions must converge on a coherent whole. We therefore condition all positions on a shared random state to coordinate parallel predictions, so that each draw yields a different but coherent image. Since the model tends to ignore this state under direct image supervision, we first learn a distribution over discrete image codes to guide single-pass generation. Beyond text-to-image generation, we further unify image-to-image generation and dense prediction within the same architecture, so that one checkpoint supports all three tasks, each in one forward pass. Experiments show that Jeveration generates a 512x512 image in 78 ms, up to 122x faster than existing unified models, while maintaining competitive image quality and dense prediction performance.",
      "upvotes": 114,
      "github_stars": 41,
      "github_repo": "https://github.com/Carol-lyh/Jeveration",
      "project_page": "https://carol-lyh.github.io/Jeveration/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.24738",
      "arxiv_url": "https://arxiv.org/abs/2611.24738",
      "title_ja": "Jeveration: システム1モデルによる画像生成の実現",
      "summary_ja": "凍結された視覚言語モデルを再利用し、1回のフォワードパスで整合性のある高品質な画像を生成する手法を提案。"
    },
    {
      "id": "2611.21218",
      "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
      "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
      "upvotes": 104,
      "github_stars": 70,
      "github_repo": "https://github.com/panuvi/inclusionmed",
      "project_page": "https://inclusionmed.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.21218",
      "arxiv_url": "https://arxiv.org/abs/2611.21218",
      "title_ja": "InclusionMed: 包摂的なヘルスケアのためのAIベンチマーク",
      "summary_ja": "多様な役割や能力にわたる評価指標を整理し、医療AIの公平性と診断能力を測定するための包括的ベンチマークを構築。"
    },
    {
      "id": "2611.21072",
      "title": "Sage S2.1 Flash Technical Report",
      "abstract": "We introduce Sage S1.5 Flash, a 320-billion-parameter general-purpose mixture-of-experts model designed to reason over scientific evidence and act in interactive environments. Sage Sci-Perception uses dedicated encoders for molecular graphs and biological sequences and represents spectra as ordered patches of measurements. Modality-specific projectors map these representations into the input space of a shared backbone, which processes them alongside text and images. To develop the model's agent capabilities, we construct verifiable environments for tool use, search, and coding, as well as specialized workflows involving machine learning experiments and scientific software. Task completion is checked against execution results, changes in environment state, or submitted artifacts. We evaluate Sage S1.5 Flash on 33 benchmarks across seven domains. In the primary comparison against five baselines, it ranks first on OfficeQA Pro (72.2), MLE-bench Lite (90.3 HumanRank), Harvey LAB, and SpreadsheetBench~2, and second on OSWorld-Verified (85.2), WebArena-Verified (67.6), and DeepResearch Bench~II (54.2). These results show particular strengths in using documentary evidence, producing verifiable workbooks, and carrying out machine learning tasks, alongside competitive performance in desktop and browser workflows that require the model to act on visual feedback.",
      "upvotes": 96,
      "github_stars": 35,
      "github_repo": "https://github.com/InternLM/Sage-S2.1-Flash",
      "project_page": "https://internlm.github.io/Sage-S2.1-Flash/",
      "comments": 4,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2611.21072",
      "arxiv_url": "https://arxiv.org/abs/2611.21072",
      "title_ja": "Sage S2.1 Flash テクニカルレポート",
      "summary_ja": "分子グラフや生物学的配列を扱う専用エンコーダを備え、科学的推論とツール使用能力に特化した320BのMoEモデル。"
    },
    {
      "id": "2611.17621",
      "title": "AscendGYM: A Cost-Aware Kernel Optimization Benchmark for Real-World Workloads on Ascend NPUs",
      "abstract": "Kernel optimization is essential for efficient large language model (LLM) training and inference on Ascend NPUs. Existing Ascend kernel benchmarks primarily focus on kernel generation, with less emphasis on the ability of agents to optimize existing implementations under input configurations drawn from real workloads. To address this requirement, we introduce AscendGYM, a benchmark whose initial suite comprises 48 kernels across three difficulty levels. Each kernel is paired with test cases whose data types and tensor shapes are collected from real-world training and inference tasks. Consequently, performance improvements on AscendGYM map directly to the corresponding workloads. In terms of usability, two evaluation modes are supported in AscendGYM: model evaluation and model-harness evaluation. The kernel optimization capabilities of both trained models and custom agents are allowed to be measured. It provides a complete execution environment that closely reproduces how Ascend kernels are invoked in practical pipelines. For model evaluation, it additionally includes a built-in harness equipped with search orchestration and experience accumulation. Finally, we propose a new metric, the Speedup-Token Score (STS), which quantifies performance gains relative to token cost. By jointly considering speedup and cost, STS enables the assessment of practical kernel optimization capability of a model or harness under an acceptable budget. AscendGYM is available at https://github.com/SLAI-AITP/AscendGYM.",
      "upvotes": 92,
      "github_stars": 32,
      "github_repo": "https://github.com/SLAI-AITP/AscendGYM",
      "project_page": "https://slai-aitp.github.io/AscendGYM/",
      "comments": 3,
      "org": "SLAI-AITP",
      "url": "https://huggingface.co/papers/2611.17621",
      "arxiv_url": "https://arxiv.org/abs/2611.17621",
      "title_ja": "AscendGYM: Ascend NPU上の実ワークロードに向けたコスト意識型カーネル最適化ベンチマーク",
      "summary_ja": "実際のLLM学習・推論時のデータ形状を用い、Ascend NPU向けカーネルの最適化能力を評価するベンチマークを導入。"
    },
    {
      "id": "2611.15789",
      "title": "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender",
      "abstract": "Controllable real-world video generation models can condition on a rendered graybox proxy video, which fixes layout, motion and camera. Coding agents can build such videos by reconstructing a 4D scene in Blender, yet no benchmark checks both these videos and the long, multi-shot scenes behind them. We introduce VibePrevisBench, a benchmark for 4D scene reconstruction: an agent turns a brief into an executable 4D scene and renders its proxy video. Its 242 tasks span four input kinds, including scripts, photos, continuations, and reference videos. Each delivery is scored along two evaluation dimensions. Rule-based Scene Check re-runs the code and compares the exported 4D scene with hidden ground truth facts in nine dimensions. VLM-based Screen Check asks a VLM judge whether the facts that pass can be recognized in the proxy video. We analyze the evaluation results and trajectories of 11 frontier coding agents and identify three key observations. First, multimodal understanding separates the agents, especially in understanding space and camera motion. Second, all agents seem to already master basic camera work and staging, and fail at challenging requests. Third, agents inspect their own renders but fail to correct their errors. Agents thus need better visual understanding of space and camera, explicit checks for challenging requests, and item-by-item verification of renders against the brief.",
      "upvotes": 87,
      "github_stars": 18,
      "github_repo": "https://github.com/vibeprevisbench/vibeprevisbench",
      "project_page": "https://vibeprevisbench.github.io/",
      "comments": 3,
      "org": "Kling-Keye",
      "url": "https://huggingface.co/papers/2611.15789",
      "arxiv_url": "https://arxiv.org/abs/2611.15789",
      "title_ja": "VibePrevisBench: Blenderを用いた4Dシーン生成のエージェント・コーディング評価",
      "summary_ja": "指示からBlenderのコードを生成し、4Dシーンの構築とプロキシビデオのレンダリングを行う能力を評価する指標。"
    },
    {
      "id": "2611.21003",
      "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
      "abstract": "We present K2-Horizon, a fleet of six fully open language models, from a 0.9B dense model to a 375B-A23B MoE, built for general-purpose reasoning and agentic work across math and science, software engineering, deep research, office automation, and beyond. The models lead or are competitive with strong open models of their size on agentic and coding benchmarks. On the modeling side, to strengthen reasoning, we introduce Mixture-of-Value Attention (MoVA), applying MoE to attention value projections, and softplus attention gating, a more flexible, theoretically motivated gate. Our 36B-A4B model uses both and nearly matches a 32B dense model trained on the same data, with one-seventh the active parameters. We also introduce Uno, lossless diffusion adapters that speed up decoding by up to 2.2x without a separate draft model. Our release follows the LLM360 definition of open source for transparency and reproducibility: the full development history, including intermediate checkpoints from every training stage, pre-training data, training logs, and all training, evaluation, and infrastructure code, notably our production-scale xLLM framework for dense and MoE training and the RL360 reinforcement-learning stack. Beyond the data itself, we release and document in detail every pipeline that built it, the part of model development that open releases most rarely disclose. These pipelines produced roughly 10T synthetic pre-training tokens, showing that synthetic data can be a major ingredient of pre-training at scale. Four of the models share one 22T-token pre-training corpus and recipe, revealing consistent scaling behavior and enabling controlled studies of scale and sparsity. All artifacts are available at https://ifm.ai/k2/",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ifm.ai/k2/",
      "comments": 2,
      "org": "Institute of Foundation Models",
      "url": "https://huggingface.co/papers/2611.21003",
      "arxiv_url": "https://arxiv.org/abs/2611.21003",
      "title_ja": "K2-Horizon: オープンソース言語モデルのフロンティア・フリート",
      "summary_ja": "MoVA等の新技術を導入し、数学・科学・研究開発などのエージェント作業に特化した0.9Bから375Bのモデル群。"
    },
    {
      "id": "2611.19937",
      "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
      "abstract": "Real-world portfolio management requires converting noisy market observations into coordinated, simultaneous allocations across multiple assets under shared capital constraints. Advances in forecasting models and alpha discovery help identify opportunities. However, traditional pipelines often decouple signal forecasting from portfolio construction, potentially misaligning learning with allocation and execution objectives. We present AllocFlow, an end-to-end flow-matching framework that directly generates joint portfolio allocations from raw multi-asset market histories. To capture dependencies among portfolio positions, AllocFlow employs a cross-asset flow Transformer conditioned on temporal market representations to generate continuous, signed position weights across all instruments jointly. To address the sample inefficiency and instability of learning continuous allocation policies from scratch, we establish a two-stage training scheme: strategy-supervised imitation shapes a structured distribution of candidate portfolios, followed by group-relative reinforcement learning (RL) that refines joint decisions using portfolio-level financial rewards and a frozen policy reference. On hourly cryptocurrency perpetual futures, RL refinement raises the annualized net return of the imitation policy from 27.79% to 51.38% and its Calmar ratio from 0.955 to 4.043, surpassing the teacher strategy on every metric, and AllocFlow reaches a Calmar ratio of 4.90 on six further months of unseen 2026 data without retraining.",
      "upvotes": 72,
      "github_stars": 32,
      "github_repo": "https://github.com/allocflow/AllocFlow",
      "project_page": "https://allocflow.github.io/",
      "comments": 4,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.19937",
      "arxiv_url": "https://arxiv.org/abs/2611.19937",
      "title_ja": "AllocFlow: 生の市場データからのエンドツーエンド・ポートフォリオ取引生成",
      "summary_ja": "フローマッチングを用い、市場履歴から複数資産の最適な配分を直接生成することで、予測と執行の乖離を解消する手法。"
    },
    {
      "id": "2611.22055",
      "title": "Weight-Space Programming Doesn't Need Transformers",
      "abstract": "Standard neural architectures such as the Transformer were chosen because they train well with gradient descent and run fast on GPUs. In weight-space programming, a large language model (LLM) writes target weights by hand without gradient-based training, so those reasons no longer apply. Should we keep the Transformer? Given minimal guidance, ten labeled examples, and a sandbox, mainly on multiple-choice questions, we task three frontier LLMs with either generating the weights of a fixed architecture or designing the architecture themselves. When free to design, all three compile plain-text facts into a sparse table queried by a fixed procedure, reaching up to 54.4% test accuracy. An LLM-designed model achieves higher test accuracy than the most accurate released Transformer that the same LLM wrote while using about 1,800x fewer parameters. Without gradients, they choose a table, in which the LLM can state what each weight means and can find and rewrite a wrong one. Each wrong answer points to one row, and removing a row changes about one other answer. From this, we propose an associative-memory-based model up to 17x faster on GPUs than a same-sized Transformer. We also test pretrained weights, other benchmarks, and tasks where models generate answers. Pretrained LLMs remain more accurate; the claim concerns which structure to build when writing weights.",
      "upvotes": 54,
      "github_stars": 45,
      "github_repo": "https://github.com/effl-lab/Weight-Space-Programming",
      "project_page": "https://wsp-no-transformer.github.io/",
      "comments": 3,
      "org": "Pohang University of Science and Technology",
      "url": "https://huggingface.co/papers/2611.22055",
      "arxiv_url": "https://arxiv.org/abs/2611.22055",
      "title_ja": "重み空間プログラミングにTransformerは不要である",
      "summary_ja": "LLMが直接モデルの重みを書く設定では、Transformerより疎なテーブル構造の方が高い精度を達成することを示唆。"
    },
    {
      "id": "2611.12068",
      "title": "MIRIX-2.0: Multi-Agent Memory System",
      "abstract": "Long-term memory lets LLM agents personalize, stay consistent, and reuse what worked before. Parametric memories need training, consolidation can lose details for good, and keeping every record leaves a growing store to search. We present MIRIX-2.0, a multi-agent memory system designed to be practical, accurate, and efficient at once. It is the most accurate of the compared systems on four of five QA benchmarks. It reaches 91.4% on LoCoMo and 72.6% on LongMemEval-S, where it leads the strongest baseline by 14.3 points, and with AutoDream disabled it gains 31.0 and 22.0 points over HyperMem on single-hop and multi-hop document QA. As procedural memory, it yields the highest mean success among the compared memory methods on ALFWorld and WebShop and reaches 49.2% on MetaClaw-Bench, against 44.0% for MetaClaw's skill library. Six typed memory agents keep complete records as the system of record, and a provenance hypergraph indexes episodic and semantic records with n-ary frames that cite their rows. Retrieval runs under explicit budgets, so the evidence a question inspects does not grow with the history. AutoDream merges duplicate anchors outside the write path without rewriting any record, and it distills task sessions into skills. With AutoDream disabled, MIRIX-2.0 answers faster than HyperMem on all five timed benchmarks. It needs no fine-tuning, runs with closed and open models, and its code is public.",
      "upvotes": 54,
      "github_stars": 3504,
      "github_repo": "https://github.com/Mirix-AI/MIRIX",
      "project_page": "https://mirix.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.12068",
      "arxiv_url": "https://arxiv.org/abs/2611.12068",
      "title_ja": "MIRIX-2.0: マルチエージェント・メモリシステム",
      "summary_ja": "正確かつ効率的な長期記憶管理により、LLMエージェントのパーソナライズと文書回答の精度を大幅に向上させるシステム。"
    },
    {
      "id": "2611.20218",
      "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
      "abstract": "A coding agent working within a software organization must establish what to build, collaborate with colleagues, and verify what it delivers. We introduce SWE-CoWork, a benchmark comprising 101 development assignments across 101 real repositories, 11 programming languages, and 12 application domains. Each assignment places an agent in a simulated engineering organization with 26 colleagues who have distinct responsibilities, bounded knowledge, and controlled collaboration behavior. Starting from a brief handoff, agents must recover requirements distributed across colleagues and workplace records, reconcile conflicting evidence, and implement changes evaluated by private executable tests. We evaluate eleven models and find a substantial gap between partial implementation and complete task delivery. The two leading models satisfy approximately 63% of fail-to-pass (F2P) tests but complete fewer than 8% of assignments. Providing complete requirements upfront improves F2P by approximately 16 percentage points for Seed Evolving and GPT-6 Astra, yet leaves complete task success unchanged. Requirement-level trajectory analysis reveals failures throughout the delivery process: Claude-Opus-5.5 directs a mean of 93% of first questions about queried cards to their accountable owners across runs but obtains only 64% of colleague-held requirements. Deferred questions go unfollowed, implementations remain incomplete even after requirements are acquired, and 31% of requirements reported as completed fail their tests. These findings highlight sustained requirement tracking, from clarification through implementation, verification, and handoff, as a key challenge for reliable autonomous software engineering.",
      "upvotes": 51,
      "github_stars": 15,
      "github_repo": "https://github.com/TokenWave-AI/swe-cowork-bench",
      "project_page": "https://tokenwave-ai.github.io/swe-cowork-page",
      "comments": 4,
      "org": "Tokenwave.AI",
      "url": "https://huggingface.co/papers/2611.20218",
      "arxiv_url": "https://arxiv.org/abs/2611.20218",
      "title_ja": "SWE-CoWork: 組織内のデジタル従業員としてのコーディング・エージェントの評価",
      "summary_ja": "仮想の同僚との協力や要件の整理が必要な、実際の開発組織を模した環境でのコーディング能力を測定するベンチマーク。"
    },
    {
      "id": "2611.19800",
      "title": "Multi-Branch Transformer",
      "abstract": "Transformer language models are commonly scaled by making their blocks wider or stacking them deeper. In this work, we explore a complementary path: branching, the parallel composition of full Transformer blocks. We introduce the Multi-Branch Transformer (MBT), which processes the input through shared initial layers, executes independently parameterized branches of sequential blocks in parallel, and fuses their outputs before shared final layers. At comparable training compute, we study three MBT variants: Wide-Shallow preserves block width, Narrow-Deep preserves sequential depth, and Balanced interpolates between them. In controlled pretraining experiments at four mixture-of-experts scales (0.8B to 2.1B total parameters), 2-branch Wide-Shallow MBTs consistently outperform sequential Transformers under matched parameter and training-compute budgets. Balanced MBTs improve further and retain comparable quality as the number of branches increases. To improve inference efficiency at long contexts, we introduce Joint-KV, which constructs a shared KV cache from branch representations at each depth. Our final recipe combines Balanced MBTs with Joint-KV, supported by an inference engine that exploits branch grouping and shared-cache reuse. Fitted scaling curves indicate that standard Transformers require up to 1.26x as much training body compute to match our final models' validation loss. These models reduce full-model KV-cache storage by up to 34% and deliver up to 51.4% higher decoding throughput on a single H200 GPU. Ablation studies show that branching yields gains beyond changes in width and depth, enables an effective KV-sharing strategy (Joint-KV), remains robust across fusion functions, and performs best in the middle layers. These findings show that branching offers a practical path for scaling language models toward both better modeling quality and faster inference.",
      "upvotes": 44,
      "github_stars": 12,
      "github_repo": "https://github.com/GaotangLi/Multi-Branch-Transformer",
      "project_page": "https://gaotangli.github.io/project_page/Multi-Branch-Transformer/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.19800",
      "arxiv_url": "https://arxiv.org/abs/2611.19800",
      "title_ja": "Multi-Branch Transformer: マルチブランチ・トランスフォーマー",
      "summary_ja": "層を積み重ねる代わりにTransformerブロックを並列に構成し、学習効率とモデル性能を向上させる新たな拡張手法。"
    },
    {
      "id": "2611.07222",
      "title": "SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection",
      "abstract": "Tool-using agents act on email, files, and payments, so an instruction hidden in a web page or a shared document can make an agent send data or money to an attacker. Many runtime defenses put a language model on the decision that lets an action through, so the decision depends on a model that may read the attacker's text and adds model calls to every step. Provenance defenses keep the model off the final check but need a model to plan or route each task first. Where an action goes can instead be read from the tools' typed returns: an email's sender or a payment's account arrives in a typed field, while injected instructions arrive as free text. SPILLWAY turns this observation into a deterministic floor with no per-task plan. The check admits a call when each target value that appears in tool output but not in the user's task was returned by a read-only tool in a typed field or is covered by a fixed delegation rule. A deterministic sanitizer removes instruction-like regions its fixed rules match before the model reads them and retains the removed spans as evidence, and a local judge may restore a refused call, never one whose target lies in the removed text. Across three backbones, and seven task suites on one of them, no standard templated injection redirects an action to an attacker's target under SPILLWAY, at the highest observed mean utility and composite scores (NRP, ERS) of the defenses we run under that attack. A forged chat template also produces a raw zero, and mean in-scope attack success under a released reinforcement-learning attacker is .007. SPILLWAY reaches this floor with no defense-triggered backbone re-run and almost no added model call. As personal AI agents act on users' email, files, and payments, SPILLWAY gives them an auditable refusal floor on where their actions go that keeps them useful and holds across backbones.",
      "upvotes": 44,
      "github_stars": 5,
      "github_repo": "https://github.com/saintmachines/spillway",
      "project_page": "https://saintmachines.github.io/spillway/",
      "comments": 3,
      "org": "SAINT Machines",
      "url": "https://huggingface.co/papers/2611.07222",
      "arxiv_url": "https://arxiv.org/abs/2611.07222",
      "title_ja": "SPILLWAY: プロンプトインジェクションからツール使用エージェントを守る防御手法",
      "summary_ja": "ツールの戻り値の型情報を利用し、非決定的なモデル判定を介さずに不正な命令の実行を阻止する確定的な防御策。"
    },
    {
      "id": "2611.21099",
      "title": "ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models",
      "abstract": "Frontier multimodal models can now control robots zero-shot from images, yet many manipulation tasks depend on contact forces that images cannot show. Bringing force to an API-only frozen model raises two challenges. First, contact evolves much faster than an API model can decide, so the system must close the loop on force beneath the model. Second, a frozen model cannot interpret raw force streams, so force must be returned in a form the model can reason about. Therefore, we present ForceHarness, a harness that lets frozen models use force without demonstrations or finetuning. After calibrating hand force from a wrist sensor or joint torques alone, ForceHarness addresses the first challenge with self-terminating force primitives that regulate force on their own and return at a contact event. To address the second challenge, a physics translation layer turns each force trace into physical quantities with uncertainty as the tool result. To evaluate ForceHarness against expert force controllers and learned policies under identical conditions, we also build HiddenPhys, a seven-task MuJoCo benchmark with hidden physical variables. On a real arm without a wrist force sensor, ForceHarness raises the zero-shot success rate of GPT-6 Astra from 3.3% to 90.0%. In simulation, it adds 17.5 percentage points on the public ForceBench suite and 34.3 percentage points on HiddenPhys, surpassing force-aware policies trained on demonstrations on both benchmarks and matching hand-written expert controllers on HiddenPhys. Ablations further show that smaller models make significantly better decisions when given physical quantities rather than raw force values.",
      "upvotes": 42,
      "github_stars": 46,
      "github_repo": "https://github.com/showlab/ForceHarness",
      "project_page": "https://showlab.github.io/ForceHarness/",
      "comments": 3,
      "org": "Show Lab",
      "url": "https://huggingface.co/papers/2611.21099",
      "arxiv_url": "https://arxiv.org/abs/2611.21099",
      "title_ja": "ForceHarness: 凍結されたフロンティアモデルへの力覚の統合",
      "summary_ja": "追加学習なしで、凍結されたマルチモーダルモデルが接触力を理解し、ロボットの微細な操作を制御できるようにする仕組み。"
    },
    {
      "id": "2611.18482",
      "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
      "abstract": "Speculative decoding accelerates generation by letting a lightweight drafter propose tokens for parallel verification by a target model. Diffusion drafters such as DFlash propose an entire token block in a single forward pass, but mainly focus on text-only tasks, leaving multimodal drafting underexplored. To study this setting, we first introduce a metric of token-level visual dependence based on the KL divergence between next-token distributions with and without visual input. We find that acceptance rates decrease from 46% in the lowest visual-dependence quartile to 22% in the highest, with this disparity persisting after multimodal training. Motivated by this observation, we propose MMFlash, a simple and effective framework that adaptively upweights visually dependent tokens that the drafter predicts poorly. For long video inputs, MMFlash further employs sparse attention to reduce redundant attention computation and improve drafting quality. Across various multimodal benchmarks, MMFlash achieves lossless decoding speedups of up to 3.58times, outperforming EAGLE-3 and DFlash by up to 195.4% and 17.1%, respectively.",
      "upvotes": 41,
      "github_stars": 45,
      "github_repo": "https://github.com/fscdc/MMFlash",
      "project_page": "https://fscdc.github.io/MMFlash/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.18482",
      "arxiv_url": "https://arxiv.org/abs/2611.18482",
      "title_ja": "MMFlash: 視覚言語モデル向けの高速な投機的デコード",
      "summary_ja": "視覚依存度に基づく新しい指標を提案し、画像入力がある環境下でのデコード速度を最適化したマルチモーダル手法。"
    },
    {
      "id": "2611.21607",
      "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
      "abstract": "Frontier Vision-Language Models (VLMs) such as GPT-6 Astra have demonstrated remarkable capabilities in robot control, suggesting that broad pretraining provides knowledge valuable for physical action. Yet most Vision-Language-Action (VLA) policies still rely on much smaller VLM backbones, leaving this potential largely untapped. We ask whether frontier-scale representations can provide a stronger foundation for robot learning. We introduce ScaleVLA, which connects a 552B DeepSeek-V4.1-Flash backbone to a trainable action DiT, and systematically compare VLMs from 2B to 552B under a shared training setup. We evaluate three fundamental capabilities of robot foundation models. In sample efficiency, just 10 demonstrations outperform a 2B backbone trained with 50 (87.8% vs. 85.6%). In generalization, LIBERO-PRO success reaches 45.1%, compared with at most 31.3% for smaller backbones. In precise manipulation, real-world charger insertion improves from 4/10 to 9/10 successes, with gains concentrated in contact-sensitive alignment. Despite its scale, ScaleVLA achieves 216 ms median latency per action chunk. Our findings suggest that frontier VLMs can serve not only as reasoning agents, but also as powerful representational foundations for efficient and generalizable robot policies.",
      "upvotes": 37,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://galaxygeneralrobotics.github.io/scalevla/",
      "comments": 2,
      "org": "galbot",
      "url": "https://huggingface.co/papers/2611.21607",
      "arxiv_url": "https://arxiv.org/abs/2611.21607",
      "title_ja": "ScaleVLA: 視覚・言語・行動モデルを5520億パラメータにスケールアップ",
      "summary_ja": "超大規模なVLMバックボーンと行動生成モデルを統合し、ロボット学習におけるスケーリングの効果を実証。"
    },
    {
      "id": "2611.23068",
      "title": "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements",
      "abstract": "Agent evolution follows a simple loop: a proposer writes candidate artifacts (prompts, skills, memories) and selection accepts those that score higher. This loop has shown promise, yet practitioners face a puzzle: methods trade wins across papers, and evolution often fails to bootstrap on certain tasks. We trace this puzzle to the Resolution Hypothesis: agent evolution stalls not because methods fail to propose better artifacts, but because noisy evaluations cannot reliably identify them. Across seven evolution methods and six models (over 10M LLM calls), we find support for the hypothesis at both levels where evaluation scores are used. At the candidate level (choosing artifacts), helpful candidate artifacts exist, but selection is no better than random at telling them from harmful ones, so errors accumulate across rounds. At the method level (ranking methods), typical margins of a few percentage points are smaller than the difference between two independent runs of the same method, so published rankings often rest on luck. Together, these findings indicate that agent evolution is often bottlenecked by reliably identifying improvements. This calls for a shift in how we develop and evaluate self-improving agents, from designing ever more candidate improvement systems to making true improvements detectable and accumulable.",
      "upvotes": 35,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lineshogan.github.io/resolution-hypothesis/",
      "comments": 4,
      "org": "ShanghaiTech University",
      "url": "https://huggingface.co/papers/2611.23068",
      "arxiv_url": "https://arxiv.org/abs/2611.23068",
      "title_ja": "解像度仮説：エージェント進化の鍵は改善箇所の特定にある",
      "summary_ja": "エージェントの自己進化が停滞する原因は、評価のノイズにより微小な改善を正しく識別できないことにあると分析。"
    },
    {
      "id": "2611.21366",
      "title": "ALIVE: Making Streaming Video Models Interactive",
      "abstract": "Streaming video LLMs can continuously observe the world, yet often handle user requests in isolation. We introduce ALIVE, an interactive streaming video model supporting proactive monitoring, streaming task coordination, and feedback-seeking interaction. We construct ALIVE-SFT-288K and ALIVE-RL-3K for two-stage training. Contrastive supervised fine-tuning teaches when and how to respond, while reinforcement learning with Behavior-Aligned Credit Assignment (BACA) combines trajectory-level and local advantages to refine decisions, responses, and silence across multi-turn interactions. We also introduce FSI-Bench to evaluate feedback seeking and subsequent task completion. ALIVE achieves the highest overall scores among the compared models on four public benchmarks and FSI-Bench, demonstrating strong streaming understanding and interactive capabilities.",
      "upvotes": 33,
      "github_stars": 15,
      "github_repo": "https://github.com/lijinzhao30/ALIVE",
      "project_page": "https://lijinzhao30.github.io/ALIVE/",
      "comments": 3,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.21366",
      "arxiv_url": "https://arxiv.org/abs/2611.21366",
      "title_ja": "ALIVE: ストリーミングビデオモデルにインタラクティブ性を付与する",
      "summary_ja": "継続的な映像監視とユーザーとの双方向対話を可能にし、適切なタイミングで応答や確認を行うストリーミングモデル。"
    },
    {
      "id": "2611.18856",
      "title": "Self-Improvement Memory Enables Continual Recursive Self-Improvement",
      "abstract": "Harness optimization is often studied with a fixed policy model and benchmark. When either changes, the optimizer must decide which parts of an evolved harness to reuse or revise, but the harness alone may not explain why earlier edits were made or how they performed. In this work, we study Continual Recursive Self-Improvement (CRSI), a setting for continuing existing harness-optimization methods across compatible benchmarks or policy models. We propose Self-Improvement Memory (SIM) for the harness optimizer, rather than the task-solving policy. SIM groups edits by recurring harness problem and records their rationale, predicted and observed outcomes, and evaluation context. New attempts extend this history as optimization continues. In our experiments across four domains, SIM achieves higher final scores than harness-only and root-cause-only continuation in cross-dataset and pairwise cross-model comparisons. Across ten independent source runs in coding, paired continuations with SIM improve final scores by an average of 2.36 points over harness-only continuation (p=0.003).",
      "upvotes": 33,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 6,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.18856",
      "arxiv_url": "https://arxiv.org/abs/2611.18856",
      "title_ja": "自己改善メモリによる継続的な再帰的自己改善",
      "summary_ja": "エージェント最適化の履歴と理由を記録するメモリにより、異なるモデルや課題を跨いでの継続的な改善を可能にする手法。"
    },
    {
      "id": "2611.15348",
      "title": "Breath-Dx: A Time Series Classification Benchmark for Disease Screening with eNose",
      "abstract": "Electronic nose (eNose) technology offers a portable, non-invasive route for disease screening via exhaled breath analysis. However, progress in the field is hindered by the lack of systematic benchmarks that compare machine learning methods under realistic conditions, particularly sensor drift, a known but rarely quantified failure mode. Most existing studies rely on small, private datasets with inconsistent protocols, rendering results non-comparable and slowing progress. We introduce Breath-Dx, the first comprehensive benchmark of time series classification methods for breath-based disease screening. Our work leverages the Scent of Health (S-OH) dataset, the largest public clinical eNose collection to date, comprising 1,234 patients across nine diagnostic groups, each providing a 17-channel multivariate time series with explicit temporal train/test splits that account for sensor drift. We systematically evaluate 10 methods spanning four families: feature-based tabular learners, convolution-based models, graph-based, and time series architectures. All methods degrade significantly under temporal validation (0.05-0.12 AUC drop compared to random cross-validation), confirming that drift embeds a strong temporal signal. Under this realistic evaluation, the best methods achieve ROC AUC of 0.74-0.76 for some lung conditions, though others remain near chance. Recurrent architectures show the most consistent performance across diseases, while specialized time series methods achieve the highest peak results. Demographic confounders matter: breath signals provide independent diagnostic value for some conditions but add little beyond age for others. We release the S-OH dataset, all temporal splits, evaluation protocols, and code to enable reproducible research and accelerate progress in clinical breathomics.",
      "upvotes": 33,
      "github_stars": 5,
      "github_repo": "https://github.com/ivanpodd/Breath-Dx",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.15348",
      "arxiv_url": "https://arxiv.org/abs/2611.15348",
      "title_ja": "Breath-Dx: 電子鼻による病気スクリーニングのための時系列分類ベンチマーク",
      "summary_ja": "呼気分析による病気診断のための最大級のデータセットを整備し、センサーのドリフト等を考慮した実用的な評価指標。"
    },
    {
      "id": "2611.17834",
      "title": "PaperCritic: Training AI Reviewers to Assess the Soundness of Papers",
      "abstract": "As AI conference submissions grow rapidly, AI reviewers are being considered as an alternative. However, simply imitating human reviewing is problematic because reviewing serves multiple purposes, including evaluating papers' soundness, interestingness, and clarity, the last two of which are subjective. In this work, we focus solely on evaluating soundness, the most important and objective criterion, and define the learning objective as jointly maximizing (1) precision, based on the soundness and substantiveness of review points, and (2) recall, the coverage of high-quality reference review points. Under this problem formulation, we construct a quality-labeled review point dataset, PaperSound-23K, using 1K ICLR submissions and 23K human-written and LLM-generated review points. Using this dataset, we train an AI reviewer model, PaperCritic, through reinforcement learning with the F1 score of precision and recall as the reward. Our experiments show that PaperCritic outperforms frontier models and models trained with other AI reviewer training methods on an in-domain test set. Surprisingly, learning to review ICLR submissions also transfers to reviewing Nature-family papers and even to out-of-domain reviewing tasks (e.g., code review, legal contract review, and feedback on story writing).",
      "upvotes": 33,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.17834",
      "arxiv_url": "https://arxiv.org/abs/2611.17834",
      "title_ja": "PaperCritic: 論文の妥当性を評価するAI査読者の訓練",
      "summary_ja": "主観を排し論文の「妥当性」の評価に特化することで、精度の高いAI査読を実現するための学習データと評価手法。"
    },
    {
      "id": "2611.23226",
      "title": "FastFrames: Video Generation at Interactive Latency",
      "abstract": "Autoregressive video diffusion models generate frames based on new observations and inputs, making them a promising medium for interactive visual experiences. However, existing models are orders of magnitude too slow for fluid interaction. This paper introduces FastFrames, a family of fast autoregressive video diffusion models that achieves interactive latency without compromising quality. We profile the inference pipeline of state-of-the-art models and find that operations often treated as fixed implementation details, such as VAE decoding and KV cache updates, in fact account for over half of end-to-end inference latency. We challenge the assumption that these components are indispensable and replace them with lightweight alternatives. Our 1.3B variant runs at 36 ms per frame, or 28 responses per second (RPS), on a single B200 GPU while matching the generation quality of a state-of-the-art model that is nearly 8x slower. Our 14B variant runs at 45 ms per frame, or 22 RPS, on an 8x B200 GPU node and yields significantly better visual quality and realism. We show that FastFrames enables real-time interaction in applications such as camera-conditioned and physics-conditioned video generation.",
      "upvotes": 29,
      "github_stars": 67,
      "github_repo": "https://github.com/apple-aiml-research/ml-fastframes",
      "project_page": "https://apple-aiml-research.github.io/ml-fastframes/",
      "comments": 6,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2611.23226",
      "arxiv_url": "https://arxiv.org/abs/2611.23226",
      "title_ja": "FastFrames: インタラクティブな遅延でのビデオ生成",
      "summary_ja": "VAEデコードやKVキャッシュ更新の高速化により、対話型アプリで利用可能なレベルまでビデオ生成の遅延を削減。"
    },
    {
      "id": "2611.11318",
      "title": "PROLA: Principal-Orthogonal Low-rank Adaptation for Predictive Spatiotemporal Weather Downscaling",
      "abstract": "High-resolution weather prediction is important for resolving local atmospheric patterns missed by coarse global forecasts. Large pretrained weather backbones have improved global forecasting, but adapting them to produce future high-resolution fields from recent coarse states remains challenging and costly. We formulate this setting as Predictive Spatiotemporal Weather Downscaling (PSWD), a task that jointly refines spatial and temporal resolution while predicting future high-resolution trajectories. To this end, we propose a framework that decomposes prediction into spatial and temporal stages using a shared pretrained backbone, fixed numerical scaffolds, and lightweight residual heads. For backbone adaptation, we introduce PROLA (PRincipal-Orthogonal Low-rank Adaptation), which allocates a fixed low-rank budget between pretrained weights' principal directions and their orthogonal complement. PROLA further rescales rank-1 optimizer updates using gradient signals, improving adaptation without increasing trainable rank. Experiments in the PSWD setting show that PROLA outperforms representative low-rank adaptation baselines. Further experiments across diverse datasets and tasks support the broader applicability of PROLA, showing that its benefits extend beyond the primary weather downscaling setting.",
      "upvotes": 27,
      "github_stars": 2,
      "github_repo": "https://github.com/yms020615/PROLA",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.11318",
      "arxiv_url": "https://arxiv.org/abs/2611.11318",
      "title_ja": "PROLA: 予測的時空気象ダウンスケーリングのための主成分直交低ランク適応",
      "summary_ja": "粗い気象データから将来の高解像度な予測を生成するため、時空情報を効率的に扱う軽量な適応フレームワーク。"
    },
    {
      "id": "2611.17831",
      "title": "V-JEPA-LM: Video-Language Models That Read Dynamics Beyond Static, Text-Aligned Representations",
      "abstract": "World-model video encoders such as V-JEPA learn how scenes change (direction, speed, order, state) from video alone. To answer questions, they are joined to a language model trained on captions and question-answer pairs. But each caption or question names only a few attributes of a clip, so the model learns to retrieve those attributes rather than to read the clip, and the dynamics the encoder carries go unused: on the same items, a linear probe reads speed from frozen V-JEPA features at 87% while the VLM answers at chance. We show where dynamics lives in a frozen encoder: in a subspace shared across videos for predictive encoders such as V-JEPA, but not as a shared component of frame-wise, text-aligned encoders such as SigLIP. We then build counterfactual supervision that makes the language model read it: pixel transformations turn public videos into answer-balanced variants whose answers are set by the transformation and differ only in the change. Trained in a single stage on 4.53M public samples with 32 visual tokens per frame, where open video LLMs use several stages, 9M to 172M samples and 64 to 256 tokens per frame on average, the resulting V-JEPA-LM models (1B to 8B, Qwen3 and Llama) lead every size class in average score across eleven video benchmarks; our 4B model scores 72.1, against 61.1 for the best open 4B and 64.8 for the best open 8B model. A controlled encoder x supervision study shows that the encoder decides what can be read and the supervision what is read: at a matched budget, counterfactual supervision adds 4.5 points on average and 38 on the speed questions of natural benchmarks. Code and models: https://github.com/kkt94/Llama-V-JEPA-LM.",
      "upvotes": 26,
      "github_stars": 6,
      "github_repo": "https://github.com/kkt94/Llama-V-JEPA-LM",
      "project_page": "https://huggingface.co/spaces/kkt94/llama-v-jepa-lm-8b",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.17831",
      "arxiv_url": "https://arxiv.org/abs/2611.17831",
      "title_ja": "V-JEPA-LM: 静的なテキスト表現を超えて動態を読み取るビデオ言語モデル",
      "summary_ja": "テキストに依存せず、ビデオエンコーダが持つ物理的な「動き」の情報を言語モデルが直接引き出すための手法。"
    },
    {
      "id": "2611.07226",
      "title": "Loopback Transformer: Towards a Unified View of Residual Looped Transformers",
      "abstract": "Looped Transformers reduce parameter count by repeatedly applying shared blocks, but parameter sharing alone does not determine how the results of repeated computation are reused. We take the depth-memory view of residual connections and analyze which representation is stored after each block application and how later reads weight it. A full block output contains both its input and its new update, so weighting that output also reweights the history already carried by the input. Reading individual updates instead, with the shared stack's input kept on a separate path, gives separate controls over input strength, total update weight, and allocation across updates. The Loopback Transformer implements these controls: geometric decay sets the total update weight and supplies a recency prior, and attention learns how to allocate that weight. On ClimbMix, Loopback reaches lower validation loss than standard Transformer baselines with 40-75% of their Transformer parameters (excluding token embeddings and the output head) at reference scales from 191M to 3B, with training tokens and executed depth matched. It also has higher mean accuracy over thirteen downstream tasks at 1.4B and 3B. At 191M, 374M, and 778M, it has the lowest validation loss and the highest thirteen-task mean among the standard Transformer and seven looped residual designs.",
      "upvotes": 26,
      "github_stars": 15,
      "github_repo": "https://github.com/yancyou/Loopback",
      "project_page": "https://yancyou.github.io/Loopback_page/",
      "comments": 2,
      "org": "University of Wisconsin - Madison",
      "url": "https://huggingface.co/papers/2611.07226",
      "arxiv_url": "https://arxiv.org/abs/2611.07226",
      "title_ja": "Loopback Transformer: 残差ループ型Transformerの統一的視点",
      "summary_ja": "ブロックの繰り返し適用における入力と更新値の再利用を分析し、計算の重み付けを柔軟に制御する新しい構成を提案。"
    },
    {
      "id": "2611.24154",
      "title": "Game2Player: Scaling Gameplay Experience for Visual Agents through Environment-Player Co-Development",
      "abstract": "Games are a rich testbed for visual agents, demanding perception, long-horizon planning, and precise control. However, collecting human gameplay is costly, and learning from gameplay videos requires inferring missing actions. Existing datasets also cover a limited range of games, often without explicit tasks or verifiable outcomes. To address these gaps, we introduce Game2Player, a framework that co-develops game environments and players to collect diverse and verifiable gameplay experience at scale. In the Game2Player loop, a Builder agent adapts existing web games, exposes their internal state, and defines tasks with state-based progress measures and success checks. A Coding Player and a VLM Player then attempt the tasks and report problems to the Builder for repair, so that play serves as both environment validation and training data collection. With Game2Player, we build 568 verified web games with 3,436 tasks, collect 15.7K trajectories (307 hours of gameplay), and hold out 50 games as the benchmark PlayerBench. To evaluate the collected experience as training data, we train VLM agents with progress-weighted SFT, assigning greater weight to steps that advance task progress. Game2Player-9B improves progress from 14.3% to 31.2% on PlayerBench and from 30.0% to 53.1% on the external GameWorld benchmark. More broadly, our work suggests a path for visual agents to scale their gameplay experience by building, verifying, and learning from existing game worlds.",
      "upvotes": 25,
      "github_stars": 22,
      "github_repo": "https://github.com/game2player/Game2Player",
      "project_page": "https://game2player.github.io/",
      "comments": 3,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2611.24154",
      "arxiv_url": "https://arxiv.org/abs/2611.24154",
      "title_ja": "Game2Player: 環境とプレイヤーの共同開発による視覚エージェント体験の拡張",
      "summary_ja": "ゲーム環境の自動構築とAIプレイヤーによる試行を繰り返すことで、検証可能なプレイデータを大規模に収集する枠組み。"
    },
    {
      "id": "2611.23143",
      "title": "TCP4D: A Unified Tool-Center-Point Tracking and Generation Model for Robot Manipulation",
      "abstract": "Robot manipulation videos provide a rich visual experience, yet recovering robot action and gripper-state annotations from RGB observations still remains challenging. Using the embodiment-agnostic tool-center-point (TCP) pose as the action space, we present TCP4D, a unified model in which a shared 4D scene representation both tracks observed TCP motion and generates future TCP trajectories. Given a monocular video and initial 2D TCP queries, the tracker directly recovers metric TCP poses in SE(3) and gripper states alongside scene geometry and camera parameters. The generator samples local features from the same 4D representation along the recovered TCP tracks, then combines them with robot observations and language instructions to predict future TCP states. Our new cross-embodiment augmentation pipeline converts existing RGB videos into demonstrations for alternative embodiments by retargeting the recovered motion and synthesizing the corresponding observations, without recorded source-robot states. Experiments show that the tracker achieves absolute trajectory errors of 7.60 and 16.07 mm on DROID and RoboLab and adapts to a new embodiment with only ten demonstrations. The generator achieves 69.19% mean success on RoboTwin and outperforms well-established policy models on two real-world tasks, while joint training on source and augmented demonstrations improves target-robot success by 41.5% over augmented-only training.",
      "upvotes": 24,
      "github_stars": 20,
      "github_repo": "https://github.com/Livioni/TCP4D",
      "project_page": "https://livioni.github.io/TCP4D/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.23143",
      "arxiv_url": "https://arxiv.org/abs/2611.23143",
      "title_ja": "TCP4D: ロボット操作のための統一的ツールセンターポイント追跡・生成モデル",
      "summary_ja": "単眼ビデオからロボットの手先の動きを追跡し、将来の動作を生成する共通の4D表現を用いた操作モデル。"
    },
    {
      "id": "2611.24654",
      "title": "CurvDelta: Low-Curvature Delta Modeling For Surgical Learning and Unlearning",
      "abstract": "A central challenge in adapting large language models (LLMs) is capability preservation: an adaptation can achieve its target while degrading general capabilities. We introduce CurvDelta, a scalable framework that incorporates the preservation constraint into the parameterization of the model update. By analyzing the local geometry of the preservation constraint around the pre-adaptation model, CurvDelta constructs a low-curvature space in which parameter updates leave the preservation loss nearly invariant. We make its construction practical for LLMs through Kronecker-factored approximate curvature (K-FAC) and a factorized projection. We also introduce CurvLoRA, a low-rank variant within the same preservation geometry, designed for more efficient adaptation. Both methods apply to preservation-constrained adaptation tasks such as capability learning and selective unlearning. We evaluate our methods on mathematical reasoning, code generation, and knowledge unlearning. For mathematical reasoning and code generation, our approaches achieve competitive downstream performance while better preserving general capabilities, offering a favorable acquisition--retention trade-off relative to the baselines. For knowledge unlearning, our main results on TOFU and MUSE show a better balance between targeted forgetting and knowledge retention than the baselines, with retention performance close to the from-scratch retraining reference.",
      "upvotes": 22,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://xiaozi-max.github.io/CurvDelta/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.24654",
      "arxiv_url": "https://arxiv.org/abs/2611.24654",
      "title_ja": "CurvDelta: 外科的学習と忘却のための低曲率デルタモデリング",
      "summary_ja": "既存の能力を損なわずにモデルを適応させるため、曲率に基づき汎用性能への影響が少ない領域で重みを更新する手法。"
    }
  ],
  "labs": [
    {
      "lab": "Google Research",
      "title": "A game you cannot win unless you have a quantum computer",
      "summary": "Quantum",
      "url": "https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/",
      "published": "2026-11-20T05:03:00+09:00",
      "title_ja": "量子コンピュータがなければ勝てないゲーム",
      "summary_ja": "量子コンピュータを活用することで初めて勝利が可能になるゲーム環境の紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "How OpenAI’s Performance Factory keeps ChatGPT fast",
      "summary": "Learn how OpenAI built the Performance Factory, a system of Codex-powered workflows that finds and fixes performance issues to help keep ChatGPT fast.",
      "url": "https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast",
      "published": "2026-11-19T17:00:00+09:00",
      "title_ja": "OpenAIのPerformance FactoryがChatGPTを高速に保つ仕組み",
      "summary_ja": "Codex搭載ワークフローを用いて性能問題を修正し、ChatGPTの速度を維持する。 "
    },
    {
      "lab": "OpenAI",
      "title": "Deploying Daybreak Red",
      "summary": "Explore a reference architecture for supervised security investigations with Daybreak Red, including safety controls, setup, and monitoring.",
      "url": "https://openai.com/business/learn/deploying-daybreak-red",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "Daybreak Redのデプロイ",
      "summary_ja": "監視下のセキュリティ調査に向けたDaybreak Redのリファレンスアーキテクチャ。"
    },
    {
      "lab": "OpenAI",
      "title": "See PR scans in action",
      "summary": "Watch a walkthrough of PR scans and see how the presenter reviews scan results in a pull request workflow.",
      "url": "https://openai.com/business/learn/pr-scans-demo",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "PRスキャンの実演",
      "summary_ja": "プルリクエストのワークフローにおけるスキャン結果の確認方法についての解説動画。"
    },
    {
      "lab": "OpenAI",
      "title": "Explore the Codex Security Plugin",
      "summary": "Watch a demo of the Codex Security Plugin and see the workflow in action, from getting started to reviewing the results shown in the recording.",
      "url": "https://openai.com/business/learn/codex-security-plugin-demo",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "Codexセキュリティプラグインの探索",
      "summary_ja": "Codexセキュリティプラグインのセットアップから結果確認までのデモ動画。"
    },
    {
      "lab": "OpenAI",
      "title": "Get started with Daybreak Blue",
      "summary": "Watch a walkthrough of onboarding to Daybreak Blue, with a closer look at the setup experience and how to get started.",
      "url": "https://openai.com/business/learn/daybreak-blue-onboarding-demo",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "Daybreak Blueの導入ガイド",
      "summary_ja": "Daybreak Blueのオンボーディング体験やセットアップ手順を動画で紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの紹介",
      "summary_ja": "Gemini 4 Neonの新しいAIモデル機能についての発表。"
    },
    {
      "lab": "Hugging Face",
      "title": "DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency",
      "summary": "",
      "url": "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin",
      "published": "2026-11-19T04:54:56+09:00",
      "title_ja": "DaisyRose-27B：事後学習効率の限界に挑む",
      "summary_ja": "事後学習の効率性を向上させた270億パラメータのモデルについての紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Why your fine-tuning job takes longer than the FLOPs say",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time",
      "published": "2026-11-19T03:53:43+09:00",
      "title_ja": "ファインチューニングがFLOPsの計算より時間がかかる理由",
      "summary_ja": "微調整の実行時間が理論上の演算量（FLOPs）を超える要因についての技術解説。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4が利用可能に",
      "summary_ja": "最新のGenie 4モデルが提供開始されたことの通知。"
    },
    {
      "lab": "Hugging Face",
      "title": "Time-Series Models in the Streamhouse: A New Frontier and Use Cases",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse",
      "published": "2026-11-19T00:00:23+09:00",
      "title_ja": "Streamhouseにおける時系列モデル：新境地とユースケース",
      "summary_ja": "ストリームハウス環境での時系列モデル活用に関する新技術と具体的な事例の紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "The Silent Consensus",
      "summary": "Dean Ball, Head of Strategic Futures at OpenAI, examines how more capable AI could reshape society and how people can retain control of their institutions.",
      "url": "https://openai.com/index/the-silent-consensus",
      "published": "2026-11-18T19:00:00+09:00",
      "title_ja": "サイレント・コンセンサス",
      "summary_ja": "AIの進化が社会をどう変え、人間がいかに組織の制御を維持すべきかの考察。"
    },
    {
      "lab": "Hugging Face",
      "title": "180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers",
      "summary": "",
      "url": "https://huggingface.co/blog/moe-expert-streaming",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "180Bパラメータと32GB RAM：MoE推論を極限まで高める",
      "summary_ja": "Transformersを用いて、1800億パラメータのMoEモデル推論の限界を追求。"
    },
    {
      "lab": "Hugging Face",
      "title": "Rumble-2-Flash: an open 0.5B speech model for 40+ languages",
      "summary": "",
      "url": "https://huggingface.co/blog/rumble-2-flash",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "Rumble-2-Flash：40言語以上に対応した0.5B音声モデル",
      "summary_ja": "多言語に対応したオープンな5億パラメータの軽量音声モデルの発表。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・スケール型潜在3D表現",
      "summary_ja": "潜在容量の制限を克服し、複雑な3Dシーンの細部まで表現可能にする新手法の提案。"
    },
    {
      "lab": "Hugging Face",
      "title": "Hugging Face and OpenRouter join forces to make open-weight models easy to run",
      "summary": "",
      "url": "https://huggingface.co/blog/openrouter",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "Hugging FaceとOpenRouterが提携しオープンウェイトモデルの実行を容易に",
      "summary_ja": "両者の協力により、公開重みモデルを簡単に実行できる環境を提供。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkで科学と工学を進展させる",
      "summary_ja": "教育イノベーションを通じた科学・工学分野でのチームワークと研究の促進。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの紹介",
      "summary_ja": "Gemini 4 Hydrogenモデルのリリースに関する公式発表。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルアライメントの理論的限界",
      "summary_ja": "KL正則化アライメントにおける報酬改善の情報理論的な限界値を解明。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブルを用いたCKMリスク評価とパーソナライズコーチング",
      "summary_ja": "心血管・腎・代謝リスクをウェアラブル端末で分析し、個別指導を可能にする技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：DNAの読み取り解読による疾患理解",
      "summary_ja": "DNA配列の変異が特定の細胞や疾患に与える影響を予測する新モデル。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonが利用可能に",
      "summary_ja": "最新のGemini 4 Carbonモデルの提供開始に関する通知。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの紹介：複雑なソフトウェアの深層検証の突破口",
      "summary_ja": "Signalの暗号化検証のため、Lean言語で300万行の証明を記述したAIエージェント。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者を評価する：個人向けの執筆スタイル評価におけるLLM判別器の調査",
      "summary_ja": "特定の執筆スタイルの準拠度を評価するLLM判別器の性能と課題についての検証。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲート機構の重要性：状態空間モデルにおける記憶対コンテキスト内学習",
      "summary_ja": "SSMの成功と失敗の要因が、ゲート機構の役割を調査することで説明可能であることを提示。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的な長いコンテキスト検索のための重み付きState Souping",
      "summary_ja": "SSMの各状態エンコーディングを安価に再結合し、長い文脈での検索性能を向上させる手法。"
    },
    {
      "lab": "Apple ML",
      "title": "Understanding Private Evolution as Learning-Augmented Clustering",
      "summary": "Private Evolution (PE) is a differentially private algorithm for synthetic data generation. While it can be viewed as a Wasserstein learning algorithm, it performs much better in practice than worst-case Wasserstein analyses would predict. We recast PE as generative model-augmented Wasserstein learning. We show theoretically that when we take into account the use of a generative model that is able to capture something about the true distribution, then we can obtain much better performance bounds. For example, if the generator gives samples in the same low-dimensional space as the distribution…",
      "url": "https://machinelearning.apple.com/research/private-evolution-clustering",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "学習拡張クラスタリングとしてのPrivate Evolutionの理解",
      "summary_ja": "合成データ生成アルゴリズムPEを、生成モデル拡張ワッサースタイン学習として再定義。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorerで世界の言語を探索する",
      "summary_ja": "自然言語処理技術を用いて世界の多種多様な言語を調査・探索するプロジェクト。"
    },
    {
      "lab": "Berkeley BAIR",
      "title": "BAIR at CoRL 2026",
      "summary": "The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. BAIR faculty, postdocs and students will be presenting research at various sessions, including an Early Career Keynote from Professor Negar Mehr. See below for the full schedule of sessions with BAIR members, including papers co-authored with collaborators at other universities and companies. November 9–12, 2026 Austin, Texas All times CST · UTC−6 33 Main-conference papers 4 Late-breaking results (LBR) posters 10 Orals & spotlights 3 orals · 7 spotlights 4 Days of research November 9–12 Mon Nov 9 Tue Nov",
      "url": "http://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/",
      "published": "2026-11-09T18:00:00+09:00",
      "title_ja": "CoRL 2026におけるBAIR",
      "summary_ja": "ロボット学習会議CoRLでのBAIRメンバーによる研究発表とセッションスケジュール。"
    },
    {
      "lab": "Google Research",
      "title": "Detecting signs of hypertension using wearable sensors",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
      "published": "2026-11-06T01:01:08+09:00",
      "title_ja": "ウェアラブルセンサーを用いた高血圧の兆候の検出",
      "summary_ja": "ウェアラブル端末のデータから高血圧の予兆を検知する健康・バイオサイエンス技術。"
    }
  ]
};
