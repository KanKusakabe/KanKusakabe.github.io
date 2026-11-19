window.papersData = {
  "updated_at": "2026-11-19 11:58 JST",
  "arxiv": [
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
      "id": "2611.17438",
      "title": "Real-Time Diffusion Relighting as a Neural Sensor: Closing the Low-Light Domain Gap for Robotic Perception",
      "url": "https://arxiv.org/abs/2611.17438",
      "pdf": "https://arxiv.org/pdf/2611.17438",
      "authors": [
        "Shengjie Xu",
        "Alexander Gao",
        "Anshul Rai",
        "Dae Yeol Lee",
        "Guan-Ming Su",
        "Ming C. Lin"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "IROS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 5 figures. Accepted to IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026. Project page: https://shengjie-xu.com/conferences/2026_IROS_neural-sensor/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Our method sets a new state-of-the-art performance on the ExDark low-light benchmark with 87.1% mAP",
      "signals": [],
      "headline": "ロボット制御ループに生成モデルを統合し低照度環境での認識率を大幅に向上",
      "what": "Real-Time Diffusion RelightingをGenerative Neural Sensorとして制御ループに組み込み、照明を信号処理ではなく生成的な事前分布として扱う手法です。高レイテンシな拡散モデルによる意味復元を、低レイテンシな制御から切り離した並列アーキテクチャで実行します。",
      "enables": "ExDarkベンチマークで87.1% mAPというSOTAを達成し、CARLAシミュレーターでのナビゲーション任務で100%の完走率を記録しました。検出信頼度の低下をトリガーに背景スレッドで拡散モデルを起動することで、計算負荷を抑えつつ認識の不確実性を解消します。",
      "why_it_matters": "従来のオフライン向け低照度画像補正（LLIE）とは異なり、リアルタイムのロボット制御に生成AIを組み込めることを実証した点に大きな意義があります。",
      "tags": [
        "拡散モデル",
        "ロボット認識",
        "低照度補正"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.17730",
      "title": "ERA: Error-Resistant Autonomous Object Navigation with Predicted Depth",
      "url": "https://arxiv.org/abs/2611.17730",
      "pdf": "https://arxiv.org/pdf/2611.17730",
      "authors": [
        "Shunyang Huang",
        "Shuo Wang",
        "Wenyuan Xie",
        "Mingyu Lin",
        "Yue Ding",
        "Hongtao Lu"
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
        "sota"
      ],
      "star_quote": "On three benchmarks, ERA achieves state-of-the-art performance among training-free methods without depth sensors.",
      "signals": [],
      "headline": "RGB画像からの予測深度によるエラー耐性を持った自律オブジェクトナビゲーション",
      "what": "深度センサーを使わず、RGB画像と自己位置推定から予測した幾何情報を活用するObject NavigationシステムERAを提案しています。「Move with Error」というパラダイムに基づき、移動によって得られる新たな視点から地図上のエラーを修正し、到達可能な視点からの探索を継続します。",
      "enables": "深度センサーなしの学習不要な手法においてSOTAを達成し、既存のVLFMの成功率を10.8%から61.7%へと大幅に向上させました。予測深度特有の視点依存エラーを、修正可能な占有格子地図と検証プロセスによって克服しています。",
      "why_it_matters": "高価な深度センサーに頼らず、予測モデルの不完全さをアルゴリズム側で許容・修正しながらタスクを遂行する実用的なアプローチを示しています。",
      "tags": [
        "ロボットナビゲーション",
        "深度推定",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
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
    },
    {
      "id": "2611.21083",
      "title": "Think2Listen: Evidence-Centric Learning For Agentic Audio Understanding With LALMS",
      "url": "https://arxiv.org/abs/2611.21083",
      "pdf": "https://arxiv.org/pdf/2611.21083",
      "authors": [
        "Jin Wang",
        "Liang Lin",
        "Kaiwen Luo",
        "Weiliu Wang",
        "Yuxuan Li",
        "Zengxin Han"
      ],
      "categories": [
        "cs.SD",
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
      "star_quote": "Think2Listen, an evidence-centric learning framework for agentic audio understanding",
      "signals": [],
      "headline": "Think2Listen：証拠に基づいた能動的な音声理解を行うLALMエージェント",
      "what": "大規模音声言語モデル（LALM）において、単に音を認識するだけでなく、「不確実な判断を解消するためにどの音響的な証拠を探すべきか」を能動的に思考する学習フレームワークです。反復的な推論と、特定の音響的手がかりを求める対話を繰り返します。",
      "enables": "7つの音声カテゴリにわたるベンチマークで、既存の音声エージェントを5.08%〜17.67%上回る精度を達成しました。音声、音楽、会話の混在する複雑なシーンでの推論能力が向上しています。",
      "why_it_matters": "「聞こえるものを説明する」段階から、「目的のために必要な音を探し出し、推論の根拠にする」段階へと音声AIを進化させています。",
      "tags": [
        "音声理解",
        "AIエージェント",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21175",
      "title": "A COMPASS to the Galaxy: Joint nucleosynthetic yield set comparison and parameter inference in Galactic chemical evolution",
      "url": "https://arxiv.org/abs/2611.21175",
      "pdf": "https://arxiv.org/pdf/2611.21175",
      "authors": [
        "Berkay G\\\"unes",
        "Giuseppe Viterbo",
        "Sven Buder",
        "Tobias Buck"
      ],
      "categories": [
        "astro-ph.GA",
        "astro-ph.IM",
        "cs.LG",
        "physics.data-an"
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
      "star_quote": "amortized joint Bayesian model comparison and parameter inference for GCE models",
      "signals": [],
      "headline": "銀河化学進化モデルのベイズ推論を高速化するCOMPASS：シミュレーションベースの統合解析",
      "what": "星の元素合成と観測される元素組成パターンを結びつける銀河化学進化（GCE）モデルのための推論フレームワークです。拡散モデルとTransformerを用いて、シミュレーションから直接、事後分布と尤度を学習し、複数の理論モデルの比較とパラメータ推定を同時に行います。",
      "enables": "天の川銀河のデータに適用し、特定の元素合成モデル（NuGrid+IllustrisTNG）が最も妥当であることを特定しました。従来のシミュレーションベース推論（SBI）と比較して、計算コストを数桁削減しています。",
      "why_it_matters": "複雑な物理シミュレーションを伴う宇宙論的な解析において、計算負荷の高い尤度計算を介さずに、大規模データから精密な科学的知見を導き出せます。",
      "tags": [
        "宇宙物理学",
        "ベイズ推論",
        "拡散モデル"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19276",
      "title": "ReCALM: A Residual-enhanced Crowdsourced Analytic Learning Mechanism for Distributed Continual Service Construction",
      "url": "https://arxiv.org/abs/2611.19276",
      "pdf": "https://arxiv.org/pdf/2611.19276",
      "authors": [
        "Kejia Fan",
        "Yajiang Huang",
        "Jianheng Tang",
        "Jinfeng Xu",
        "Huiping Zhuang",
        "Anfeng Liu"
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
      "star_quote": "we develop gradient-free residual blocks for ReCALM with closed-form solutions",
      "signals": [],
      "headline": "ReCALM：勾配なしの解析的学習による分散・継続的なAIサービス構築メカニズム",
      "what": "分散したワーカーからのデータを統合してモデルを更新する際、勾配ベースのバックプロパゲーションを使わずに、閉形式解（Closed-form solution）を再帰的に求める「解析的学習」手法です。ResNetに着想を得た「解析的残差ブロック」を導入し、深い階層構造を実現しています。",
      "enables": "従来の単層解析的学習に比べ、20層の構成で精度を約9.8%向上させました。同時に、勾配ベースのベースラインと比較して、計算コストを94%以上削減しています。",
      "why_it_matters": "継続学習で問題となる「破滅的忘却」を数学的な不変性によって回避しつつ、軽量な計算で深層学習と同等の表現力を獲得できる新しいパラダイムです。",
      "tags": [
        "継続学習",
        "分散学習",
        "解析的学習"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20404",
      "title": "Latent Feedback Is a Compute and Data Amplifier",
      "url": "https://arxiv.org/abs/2611.20404",
      "pdf": "https://arxiv.org/pdf/2611.20404",
      "authors": [
        "Benhao Huang",
        "Chaitanya Dwivedi",
        "Xuezhe Ma",
        "Alexander Moreno",
        "Hector Liu"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "23 pages. Code: https://github.com/ifm-ai/LoRM",
      "hf_upvotes": 6,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Latent feedback, which feeds each token's top-layer state into the next token's input, is another way to spend that compute",
      "signals": [],
      "headline": "Latent Feedback：トークン間の潜在状態の再利用による計算量とデータ効率の増幅",
      "what": "トランスフォーマーにおいて、各トークンの最上位レイヤーの潜在状態を次のトークンの入力にフィードバックする手法です。同じ計算予算を、単純な「エポック数の増加」に費やすのではなく、このフィードバック機構に割り当てて効果を検証しました。",
      "enables": "最大で計算量の48%、ユニークなデータ量の47%を削減しつつ、標準的なトランスフォーマーと同じ損失に到達可能です。この効果はモデルサイズを大きくしても持続することがスケーリング則によって示されています。",
      "why_it_matters": "高品質なデータの枯渇が懸念される中で、限られたデータをより深く「使い倒す」ための、計算資源の新しい配分戦略を提示しています。",
      "tags": [
        "モデルアーキテクチャ",
        "スケーリング則",
        "学習効率化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20635",
      "title": "Contrastive Activation-Guided Zeroth-Order Preference Optimisation for Memory-Efficient LLM Alignment",
      "url": "https://arxiv.org/abs/2611.20635",
      "pdf": "https://arxiv.org/pdf/2611.20635",
      "authors": [
        "Weiyun Huang",
        "Alessio Galatolo"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "Accepted at AXIOM Workshop @ NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Contrastive Activation-guided Zeroth-Order Direct Preference Optimisation (CA-ZODPO), which constructs a low-rank search subspace from the activation discrepancy",
      "signals": [],
      "headline": "CA-ZODPO：メモリ消費を約60%削減する、アクティベーション誘導型の零次順序好みの最適化",
      "what": "LLMの人間好みの整合（Alignment）において、誤差逆伝播（バックプロパゲーション）を行わない零次順序（ZO）最適化をDPOに適用した手法です。選好ペア間のアクティベーションの差から低ランクの部分空間を構築し、その中で効率的に探索を行います。",
      "enables": "2048トークンの長さにおいて、ピークGPUメモリを約59%削減しました。精度面でも、通常のDPOに匹敵する性能を維持しつつ、従来の零次順序手法（ZO-DPO）を上回ります。",
      "why_it_matters": "巨大なモデルを限られたVRAMで学習・微調整する際のボトルネックであるアクティベーションメモリの問題を解決し、大規模モデルの効率的な整合を実現します。",
      "tags": [
        "LLM",
        "メモリ節約",
        "最適化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20737",
      "title": "CLIFT: Contrastive LiDAR Instance Features for 3D Pedestrian Tracking",
      "url": "https://arxiv.org/abs/2611.20737",
      "pdf": "https://arxiv.org/pdf/2611.20737",
      "authors": [
        "German Devchich",
        "Timur Akhtyamov",
        "Denis Fatykhoph",
        "Gonzalo Ferrer"
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
      "star_quote": "On the JRDB 3D tracking leaderboard our LiDAR-only tracker ranks first on HOTA (38.58) and IDF1 (37.99), 13.04 and 9.30 points above the next pub- lished method",
      "signals": [],
      "headline": "CLIFT：LiDAR物体検出器をそのままトラッカーに変えるインスタンス対照学習",
      "what": "3D LiDAR検出器の内部ボクセル特徴量に、インスタンスレベルの対照学習（Contrastive learning）目的関数を追加する手法です。個別の追跡モデルを必要とせず、検出器がすでに出力している特徴量間のコサイン類似度のみでフレーム間のマッチングを行います。",
      "enables": "JRDB 3Dトラッキングリーダーボードにおいて、HOTAおよびIDF1スコアで1位を獲得し、既存の公開手法を大幅に（9.3〜13.0ポイント）引き離しました。",
      "why_it_matters": "検出器のバックボーンを問わず適用可能で、複雑な運動モデルや外部の再識別ネットワークなしで高性能な追跡を実現できる汎用性の高いアプローチです。",
      "tags": [
        "3D物体追跡",
        "LiDAR",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21372",
      "title": "Learning What Pairs Miss for Higher-Order Multimodal Alignment",
      "url": "https://arxiv.org/abs/2611.21372",
      "pdf": "https://arxiv.org/pdf/2611.21372",
      "authors": [
        "Kunyu Zhang",
        "Shenghui Feng",
        "Xiangjie Shi",
        "Zeqing Wang",
        "Yingxu Wang"
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
      "star_quote": "we propose CHORD (Contrastive Higher-Order Residuals with Decoys), which trains a residual against decoys drawn from a calibrated pairwise model",
      "signals": [],
      "headline": "CHORD：ペア間の情報だけでは足りない「高次」のマルチモーダル整合を学習する",
      "what": "3つ以上のモダリティ（画像、テキスト、音声など）を統合する際、従来のペア単位の比較（画像-テキスト、画像-音声など）では捉えきれない、全要素が揃って初めて成立する意味的関係（高次残差）を学習する手法です。",
      "enables": "3つのモダリティが揃わないと解けないM3-Mixベンチマークにおいて、最強のベースラインを21.2ポイント上回る精度向上を達成しました。再学習なしで既存の検索モデルの性能も向上させられます。",
      "why_it_matters": "多くのマルチモーダルモデルが「結局はペア同士の比較」に終始している現状を打破し、真の意味での多モーダル統合学習を実現しています。",
      "tags": [
        "マルチモーダル",
        "対照学習",
        "表現学習"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21486",
      "title": "Differentiable Exact Learning",
      "url": "https://arxiv.org/abs/2611.21486",
      "pdf": "https://arxiv.org/pdf/2611.21486",
      "authors": [
        "Hristo Papazov",
        "Francesco D'Angelo",
        "Nicolas Flammarion"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.FL",
        "stat.ML"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted in NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Differentiable Finite-State Transducers (DFSTs) which use multilinear updates, support log-parallel training, and emulate arbitrary finite-state controllers",
      "signals": [],
      "headline": "Differentiable Exact Learning：無限の外部環境との相互作用による極端な長さへの汎化",
      "what": "微分可能な有限状態トランスデューサ（DFST）と、記憶容量の制限がない外部環境を組み合わせた学習フレームワークです。内部状態が隠されたエキスパートの行動軌跡（PTO）のみから、アルゴリズムの内部論理を学習します。",
      "enables": "算術演算や万能シミュレーションタスクにおいて、学習時よりも圧倒的に長い入力に対しても正解し続ける「極端な長さへの汎化（Extreme Length Generalization）」を実現しました。学習されたモデルから、解釈可能な離散アルゴリズムを抽出することも可能です。",
      "why_it_matters": "ニューラルモデルが単なるパターンマッチングを超えて、コンピュータサイエンスの基本原理である有限状態制御と外部メモリの関係を「正確に」学習できることを示しています。",
      "tags": [
        "アルゴリズム学習",
        "汎化性能",
        "記号的推論"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.18143",
      "title": "DRA-HTR: Disentangling Representation and Adaptation for Handwritten Text Recognition",
      "url": "https://arxiv.org/abs/2611.18143",
      "pdf": "https://arxiv.org/pdf/2611.18143",
      "authors": [
        "Gayan H. Pathirage",
        "Florent Imbert",
        "Denis Coquenet",
        "Elisa H. Barney Smith"
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
      "star_quote": "The recognition model achieves state-of-the-art performance on four datasets and competitive results on the remaining three.",
      "signals": [],
      "headline": "表現の分離と生成ドメイン適応による手書き文字認識の精度と堅牢性の向上",
      "what": "DRANetを基盤とし、ソースドメインでの事前学習とターゲットドメインの視覚的特徴への無向学習ドメイン適応を組み合わせたDRA-HTRを提案しています。さらにLLMを用いた事後補正（DRAL-HTR）を導入し、視覚的な適応を言語的な適応で補完します。",
      "enables": "7つの手書き文字データセットにおいて、平均文字誤り率（CER）を13.52ポイント削減し、標準偏差を7.23から1.11に抑えることで高い安定性を実現しました。特に歴史的な文書などアノテーションが不足しているドメインでの認識精度が向上しています。",
      "why_it_matters": "スタイルの変動や劣化が激しい手書き文字認識において、生成モデルによるドメイン適応がドメインシフトの克服に極めて有効であることを示しました。",
      "tags": [
        "手書き文字認識",
        "ドメイン適応",
        "LLM"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.18350",
      "title": "MaskSCD: Bitemporal Mask Classification for Semantic Change Detection in Remote Sensing Images",
      "url": "https://arxiv.org/abs/2611.18350",
      "pdf": "https://arxiv.org/pdf/2611.18350",
      "authors": [
        "Weikang Yu",
        "Pedram Ghamisi"
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
      "star_quote": "MaskSCD achieves the best separated kappa, semantic change $F_1$ and transition $F_1$ on all three datasets",
      "signals": [],
      "headline": "2時期の画像ペアをマスク分類として扱うセマンティック変化検知手法",
      "what": "Semantic Change Detection (SCD) を2時期のラベルペア画像のマスク分類問題として定式化するMaskSCDを提案しています。bitemporal masked-attention transformer decoderを用い、各セグメントに対して2時期共通のマスクと、各時期ごとのクラスを予測します。",
      "enables": "変化マップとセマンティックマップの不一致を原理的に解消し、既存手法で約30%存在していた矛盾したピクセル判定をゼロにしました。SECONDやHi-UCDなどのベンチマークで、最強の競合モデルをmean separated kappaで約5ポイント上回る性能を示しています。",
      "why_it_matters": "従来のように変化検知とクラス分類を別々のデコーダーで行うのではなく、統合されたマスク分類として扱うことで、一貫性と精度の両立を実現しました。",
      "tags": [
        "変化検知",
        "リモートセンシング",
        "セマンティックセグメンテーション"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.18519",
      "title": "Box-conditional Hypothesis Testing for Out-of-Distribution Object Detection",
      "url": "https://arxiv.org/abs/2611.18519",
      "pdf": "https://arxiv.org/pdf/2611.18519",
      "authors": [
        "Donghoon Lee",
        "Jusung Park",
        "Shinjin Kang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 7 figures, 13 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On the standard benchmark, PLUM reaches the highest AUROC among the compared methods without external models",
      "signals": [],
      "headline": "バウンディングボックスの属性を考慮した仮説検定による未知物体検知",
      "what": "物体検出におけるOut-of-Distribution (OOD) 検知を、検出ボックスのサイズや画像境界との接触状態を考慮した仮説検定として扱う手法PLUMを提案しています。バックボーンの最終ステージのフューチャをプーリングし、同じ条件の分布内（ID）データとの距離を順位付けすることでスコアリングします。",
      "enables": "追加の学習や外部モデルなしで、PASCAL-VOCで94.5、BDD100Kで97.5という高いAUROCを達成しました。ボックスのサイズによって変化する帰無分布を適切に扱うことで、従来のスコアでは隠れていた分離性を引き出しています。",
      "why_it_matters": "モデルを再学習することなく、検出結果のメタ情報（サイズ等）を統計的に活用するだけで、実稼働環境での信頼性を大幅に高められる点に価値があります。",
      "tags": [
        "物体検出",
        "OOD検知",
        "信頼性"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.17412",
      "title": "WETW: Learning Pair-Specific Weighted Euclidean Distances for Efficient DTW Search",
      "url": "https://arxiv.org/abs/2611.17412",
      "pdf": "https://arxiv.org/pdf/2611.17412",
      "authors": [
        "Christos Panourgias",
        "Qitong Wang",
        "George Tzagkarakis",
        "Themis Palpanas"
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
      "star_quote": "WETW-FV is 11.4x faster than the fastest exact method among the UCR Suite, lower bounds and MESSI-DTW, at a mean recall@10 of 0.93",
      "signals": [],
      "headline": "動的時間伸縮（DTW）をペア適応型の重み付きユークリッド距離で高速近似",
      "what": "DTWがアライメント後の座標におけるユークリッド距離であるという観点に基づき、ペアごとに埋め込み次元の重みを予測するWeighted Euclidean Time Warping (WETW) を提案しています。マルチスケール特徴抽出器WESEEとランキング正則化を組み合わせたfilter-and-verifyパイプラインを構築します。",
      "enables": "既存の最速手法と比較して11.4倍、4.8万点の長い系列では40倍の検索速度を達成しつつ、高いリコール（recall@10=0.93）を維持しました。固定ルールでの比較を避け、ペアごとに適応的な重み付けを行うことで近似精度を向上させています。",
      "why_it_matters": "計算コストが課題だったDTW検索において、学習ベースの近似と厳密な検証を組み合わせることで、大規模データセットへの適用を現実的にしました。",
      "tags": [
        "時系列解析",
        "類似性検索",
        "機械学習"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.22115",
      "title": "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks",
      "url": "https://arxiv.org/abs/2611.22115",
      "pdf": "https://arxiv.org/pdf/2611.22115",
      "authors": [
        "Xingchen AGI Lab",
        ":",
        "Baotian Hu",
        "Bingkai Yang",
        "Boyang Wang",
        "Changzai Pan"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 151,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲151"
      ],
      "headline": "国産チップとフレームワークに最適化された285Bパラメータの推論・エージェントモデルXing 4",
      "what": "HuaweiのAscend 910CチップとMindSporeフレームワークに最適化された、大規模言語モデルXing 4の開発報告です。疎なアクティベーション（MoE）や投機的デコード、非同期実行プラットフォームTeleGymなどを通じて、システムとモデルの両面から性能を追求しています。",
      "enables": "8,192個のAscendチップ上での285Bモデルの事前学習を支えるインフラを構築し、AppWorldなどのエージェントタスクで高い性能を示しました。",
      "why_it_matters": "特定のハードウェアアーキテクチャに特化したシステムエンジニアリングにより、超大規模モデルの効率的な学習と実行を実現する道筋を示しています。",
      "tags": [
        "LLM",
        "システム基盤",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22055",
      "title": "Weight-Space Programming Doesn't Need Transformers",
      "url": "https://arxiv.org/abs/2611.22055",
      "pdf": "https://arxiv.org/pdf/2611.22055",
      "authors": [
        "Hyunjong Ok",
        "Jaeho Lee"
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
      "comment": "Preprint (Work in progress)",
      "hf_upvotes": 50,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲50"
      ],
      "headline": "勾配学習を使わない「重み空間プログラミング」における、Transformerを超えた効率的構造の発見",
      "what": "LLMにニューラルネットワークの「重み」を直接書かせる（Weight-Space Programming）際、従来のTransformer構造ではなく、連想メモリベースのシンプルな構造の方が適していることを示した研究です。LLM自身にモデル構造を設計させ、事実を疎なテーブルとして記述させます。",
      "enables": "LLMが設計したモデルは、同等のLLMが書いたTransformerと比較して、1,800分の1のパラメータ数でより高い精度を達成し、GPU上で最大17倍高速に動作しました。",
      "why_it_matters": "「勾配降下法に適した構造」と「LLMが理解・記述しやすい構造」が異なることを示唆しており、将来のモデル構築の新しいあり方を提示しています。",
      "tags": [
        "LLM",
        "アーキテクチャ設計",
        "次世代AI"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.21072",
      "title": "Sage S2.1 Flash Technical Report",
      "url": "https://arxiv.org/abs/2611.21072",
      "pdf": "https://arxiv.org/pdf/2611.21072",
      "authors": [
        "Kun Cai",
        "Haodong Chen",
        "Guangran Cheng",
        "Qingxiu Cheng",
        "Xu Dai",
        "Guanting Dong"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "website: https://internlm.github.io/Sage-S2.1-Flash",
      "hf_upvotes": 89,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲89"
      ],
      "headline": "Sage S2.1 Flash：科学的証拠の推論と環境操作に特化した320B混合エキスパートモデル",
      "what": "科学的な証拠（分子グラフ、生物学的配列、スペクトルデータなど）を処理するための専用エンコーダーを備え、ツール使用や環境操作も可能な320BパラメータのMoEモデルです。検証可能な環境でのトレーニングを通じて、コード生成や実験ワークフローの自律的な実行を学習しています。",
      "enables": "OfficeQA Pro、MLE-bench Liteなどの4つの科学・実務ベンチマークで1位、OSWorldなどの3つのエージェントタスクで2位を獲得しました。特に機械学習タスクの実行や、視覚的なフィードバックに基づいたデスクトップ操作に強みを持ちます。",
      "why_it_matters": "汎用的なLLMの能力に加え、専門的な科学データとインタラクティブな環境操作能力を高度に統合した、科学研究支援エージェントの先駆けとなるモデルです。",
      "tags": [
        "科学用AI",
        "AIエージェント",
        "MoE"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21003",
      "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
      "url": "https://arxiv.org/abs/2611.21003",
      "pdf": "https://arxiv.org/pdf/2611.21003",
      "authors": [
        "K2 Team",
        "Zhengzhong Liu",
        "Haonan Li",
        "Xuezhe Ma",
        "Alexander Moreno",
        "Subham Sekhar Sahoo"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 73,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲73"
      ],
      "headline": "K2-Horizon：合成データ10兆トークンを活用した375B MoEを含む完全オープンLLM群",
      "what": "0.9Bから375B（A23B）までの6つのモデルを含む、開発履歴、ログ、データパイプラインまでを完全公開したLLMファミリーです。アテンションの価値投影にMoEを適用した「MoVA」や、デコードを最大2.2倍高速化する「Uno」などの新技術を導入しています。",
      "enables": "36B（A4B）モデルが、7倍のアクティブパラメータを持つ32B密モデルに匹敵する性能を達成しました。22兆トークンの事前学習コーパスのうち約半分（10兆）に合成データを使用し、その有効性を実証しています。",
      "why_it_matters": "単なる重みの公開にとどまらず、合成データ生成を含む全開発プロセスの透明性と再現性を確保しており、大規模モデル開発の民主化に貢献しています。",
      "tags": [
        "LLM",
        "オープンソース",
        "MoE"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19937",
      "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
      "url": "https://arxiv.org/abs/2611.19937",
      "pdf": "https://arxiv.org/pdf/2611.19937",
      "authors": [
        "Annan Wang",
        "Yuchen Xie",
        "Yu Cen",
        "Leon Liangyu Chen",
        "Qianyu Julie Zhu",
        "Xin Li"
      ],
      "categories": [
        "cs.LG",
        "q-fin.TR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://allocflow.github.io/",
      "hf_upvotes": 68,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲68"
      ],
      "headline": "AllocFlow：市場データからポートフォリオ配分を直接生成するフローマッチング手法",
      "what": "生の市場履歴から複数の資産への投資配分（アロケーション）をエンドツーエンドで直接生成するフレームワークです。資産間の依存関係を捉えるCross-asset Flow Transformerと、模倣学習、そして財務報酬に基づく強化学習を組み合わせた二段階の学習を行います。",
      "enables": "仮想通貨の先物市場において、模倣学習のみの場合（27.79%）と比較して、年利51.38%という高いリターンを達成しました。リスク調整後リターンを示すCalmar比も大幅に向上しています。",
      "why_it_matters": "「価格予測」と「ポートフォリオ構築」を分離せず、直接「最適な行動（配分）」を学習することで、金融実務における意思決定の最適化を可能にしています。",
      "tags": [
        "金融AI",
        "強化学習",
        "フローマッチング"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21218",
      "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
      "url": "https://arxiv.org/abs/2611.21218",
      "pdf": "https://arxiv.org/pdf/2611.21218",
      "authors": [
        "The InclusionMed Collaboration"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 8 figures, 10 tables. Project website: https://inclusionmed.ai/",
      "hf_upvotes": 65,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲65"
      ],
      "headline": "InclusionMed：多様な役割と能力を評価するインクルーシブな医療AIベンチマーク",
      "what": "患者、医師、看護師といった異なる医療役割と、診断、コミュニケーション、意思決定などのAI能力を体系的に整理した、医療AIの評価イニシアチブです。5つの厳選されたベンチマークからなる「InclusionMed Atlas」を通じて、モデルの多角的な性能を測定します。",
      "enables": "最先端LLMの評価により、多くのモデルが臨床的な意思決定よりも患者とのコミュニケーションにおいて高いスコアを出す傾向があることを明らかにしました。また、推論コストと性能の相関がタスクによって異なることも示しています。",
      "why_it_matters": "単一の正解率だけでは測れない、実際の医療現場で求められる「多様なニーズへの対応力」を公平に評価するための基準を提供しています。",
      "tags": [
        "医療AI",
        "ベンチマーク",
        "公平性評価"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.20218",
      "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
      "url": "https://arxiv.org/abs/2611.20218",
      "pdf": "https://arxiv.org/pdf/2611.20218",
      "authors": [
        "Xinping Lei",
        "Minghao Liu",
        "Ruijie Zhu",
        "Xiaohui Hu",
        "Xingqiao Li",
        "Ao Zhang"
      ],
      "categories": [
        "cs.SE",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "SWE-CoWork：エンジニア組織での協調作業をシミュレートする自律コーディング評価基盤",
      "what": "コーディングエージェントを「デジタル従業員」として評価するためのベンチマークです。101のリポジトリと、異なる役割を持つ26人の仮想同僚が設定された環境で、要件の収集から実装、検証までのプロセス全体を評価します。",
      "enables": "最新モデルでも、部分的な実装は63%できるものの、課題全体を完遂できる割合は8%以下にとどまることを浮き彫りにしました。同僚からの情報収集が64%しか成功せず、要件追跡に大きな課題があることが分かりました。",
      "why_it_matters": "単一の関数作成やバグ修正ではなく、現実の組織で働く際に不可欠な「コミュニケーションと要件管理」という観点からAIの限界を定義しています。",
      "tags": [
        "ソフトウェア工学",
        "AIエージェント",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21607",
      "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
      "url": "https://arxiv.org/abs/2611.21607",
      "pdf": "https://arxiv.org/pdf/2611.21607",
      "authors": [
        "Ruixi Yu",
        "Dairu Liu",
        "Xuchuan Chen",
        "Zekun Qi",
        "Zekai Li",
        "Zhuo Cao"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Tech Report",
      "hf_upvotes": 41,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲41"
      ],
      "headline": "ScaleVLA：552Bパラメータまでスケールさせた視覚・言語・行動（VLA）ロボットモデル",
      "what": "552Bの巨大なVLM（DeepSeek-V4.1-Flash）をバックボーンに採用し、ロボット操作用のAction DiTを結合したVLAモデルです。モデルサイズがロボットの学習効率、汎化性能、精密操作に与える影響を2Bから552Bの範囲で調査しました。",
      "enables": "わずか10個のデモンストレーションで、2Bモデルが50個で学習した場合の精度を上回る高いサンプル効率を達成しました。実世界の充電器挿入タスクでも、成功率を4/10から9/10へと向上させています。",
      "why_it_matters": "超大規模なVLMが持つ表現力が、ロボットの物理的な精密操作や未知の環境への汎化においても極めて強力な基礎（Foundation）になることを実証しました。",
      "tags": [
        "ロボット",
        "VLAモデル",
        "スケーリング"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19218",
      "title": "Neural Dual Bounds: Valid-by-Construction JGLP Warm-Starts for MAP and Constrained MAP",
      "url": "https://arxiv.org/abs/2611.19218",
      "pdf": "https://arxiv.org/pdf/2611.19218",
      "authors": [
        "Akshay Vyas",
        "Shivvrat Arya",
        "Brij Malhotra",
        "Tahrima Rahman",
        "Vibhav Gogate",
        "Nicholas Ruozzi"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 (Spotlight). 40 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "Neural Dual Bounds：単一の順伝播でMAP推論の厳密な上界を決定論的に導出",
      "what": "確率的グラフィカルモデルにおけるMAP推論において、ニューラルネットワークの1回の順伝播で、数学的に有効な（Valid）上界を算出するフレームワークです。自己教師あり学習を用いて、双対目的関数を最小化するようにネットワークを訓練します。",
      "enables": "従来の最適化手法（JGLP）のウォームスタートとして利用することで、ゼロから開始する場合よりも数桁タイトな（精度の高い）初期値を、推論時の調整なしで得ることが可能になりました。",
      "why_it_matters": "反復計算が必要だった複雑な推論問題に対し、深層学習を用いて高速かつ数学的保証のある初期解を与える、最適化と学習の融合手法です。",
      "tags": [
        "グラフィカルモデル",
        "MAP推論",
        "最適化"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.19747",
      "title": "How Far Is Too Far? Object Recognition Declines Monotonically with Semantic Distance",
      "url": "https://arxiv.org/abs/2611.19747",
      "pdf": "https://arxiv.org/pdf/2611.19747",
      "authors": [
        "Domenic Bersch",
        "Hai Van Tran",
        "Gemma Roig"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "物体認識精度は背景との「意味的距離」に比例して低下する：ImageNet-OOC1kによる分析",
      "what": "物体と背景の意味的な矛盾（文脈の不一致）が認識に与える影響を、連続的な指標で制御・測定できるベンチマーク「ImageNet-OOC1k」を導入しました。CNNやViT、VLMを含む35のモデルを対象に、その感度を分析しました。",
      "enables": "物体と背景の意味的距離が広がるにつれ、すべてのモデルで認識精度が単調に低下することを明らかにしました。ViTの内部解析により、パッチレベルでは物体を捉えていても、最終的な予測に統合できない「集約の失敗」が原因の一つであることを突き止めました。",
      "why_it_matters": "文脈依存性を単なる「例外」ではなく、連続的で予測可能な特性として定義し、画像認識モデルの構造的な弱点を診断可能にしています。",
      "tags": [
        "コンピュータビジョン",
        "物体認識",
        "頑健性"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.22115",
      "title": "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks",
      "abstract": "We present Xing 4, a series of large language models that extends the TeleChat lineage through coordinated advances in model architecture and training infrastructure on Ascend. This report describes the design principles and systems engineering behind the series, spanning architecture selection, large-scale pretraining, and reasoning and agentic post-training. We study how sparse activation, attention design, model depth and width, and speculative decoding balance model capacity with computation, memory access, and execution overhead. Our pretraining infrastructure builds on MindSpore HyperParallel, combining topology-aware hybrid sharding, efficient distributed optimizer execution, and coordinated management of long-sequence workloads and activation memory. CPU affinity and core isolation further reduce host scheduling interference. Together, these mechanisms support the pretraining of a 285B-parameter model on 8,192 Ascend 910C cards, providing a concrete setting for the architectural and systems studies. For post-training, we introduce TeleGym, a unified agent execution platform that connects execution, evaluation, and trajectory construction to policy optimization. Disaggregated asynchronous execution, bounded oversampling, and partial rollout accommodate heterogeneous task durations while preserving trajectory continuity across policy updates. Together, these advances establish an Ascend-oriented training foundation for the continued development of Xing 4 across model scales and increasingly demanding reasoning and agent workloads.",
      "upvotes": 151,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://github.com/XingChen-AGI",
      "comments": 3,
      "org": "XingChen-AGI",
      "url": "https://huggingface.co/papers/2611.22115",
      "arxiv_url": "https://arxiv.org/abs/2611.22115",
      "title_ja": "TeleChat to Xing4: 国産チップとフレームワークにおける先端エージェントモデルの進化",
      "summary_ja": "AscendチップとMindSporeを活用し、推論やエージェント能力を強化した大規模言語モデルシリーズ「Xing 4」の設計と訓練基盤を提案。"
    },
    {
      "id": "2611.18397",
      "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
      "abstract": "We introduce Gamer, a generalist agent framework built for long-horizon tasks in complex interactive environments. Its end-to-end architecture combines perception, memory management, and multi-step reasoning. A shared training and deployment pipeline supports interaction with both conventional 2D graphical interfaces and complex 3D simulated worlds. We first continue pre-training on a dataset constructed from tens of thousands of hours of device-level keyboard and mouse interaction. These trajectories span simulated games and embodied environments, allowing the model to learn environmental dynamics across both physical and virtual domains. Sparse-thinking instruction tuning then substantially reduces redundant computation while preserving the reasoning needed for complex decisions. We train the policy for long-horizon interaction with a stable multi-turn reinforcement learning method that addresses finite context windows, accumulated rollout errors, and sparse rewards. For real-time interaction, a cloud-edge inference engine serves numerous simulated game environments concurrently, supports unbounded-context execution, and keeps online inference latency low. Across multiple challenging 3D open-world games, Gamer demonstrates solid generalization and operational efficiency comparable to skilled players. It also achieves competitive results on a range of conventional 2D game benchmarks. These results suggest that even repetitive keyboard and mouse trajectories can support substantial gains from scaling data and learning algorithms. Training on these trajectories helps Gamer learn complex skills more steadily in environments with both physical and digital properties. This approach offers a path toward generalist agents that can interact across digital and physical worlds.",
      "upvotes": 131,
      "github_stars": 701,
      "github_repo": "https://github.com/RainBowLuoCS/Gamer",
      "project_page": "https://mihoyo-gamer.github.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.18397",
      "arxiv_url": "https://arxiv.org/abs/2611.18397",
      "title_ja": "Gamer: 長期タスク対応のリアルタイム・ゲームエージェント向け汎用視覚・言語・行動基盤モデル",
      "summary_ja": "知覚・メモリ・推論を統合し、2D・3Dの複雑なゲーム環境で長期的なタスクを遂行可能な汎用エージェントフレームワーク。"
    },
    {
      "id": "2611.18359",
      "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
      "abstract": "The release of GPT-6 Astra marks the emergence of a new paradigm in robotics: agentic robotics. Within weeks, frontier models with agentic harnesses matched or exceeded task-specific policies on many embodied benchmarks. Instead of training a dedicated policy for each family of tasks, an agentic robotic system applies a foundation model to open-world embodied tasks. It operates in a closed loop: observing the environment, interpreting user intent, reasoning about the task, invoking skills and tools, verifying outcomes, and adapting its strategy. Despite these advances, the community has yet to converge on a shared definition, a reliable evaluation framework, or a research roadmap. We argue that Embodied System 2, realized by a foundation model together with an embodied harness, forms the decision-making core of agentic robotics. Its central challenge is to translate general-purpose reasoning into effective and verifiable actions under physical constraints such as limited reaction time, mechanical limits, unpredictable environment changes, and irreversible consequences. Motivated by this perspective, we propose an evaluation framework that measures both model capabilities and closed-loop system performance. Furthermore, we identify the principles that carry over from digital to physical agents and the challenges that must be addressed to achieve reliable physical autonomy. On top of the Embodied System 2 and the evaluation framework, we envision a research roadmap toward sustained autonomy: the ability to perform work safely and reliably with progressively broader responsibility, from executing individual primitives to fulfilling standing roles.",
      "upvotes": 127,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://grid-robotics-official.github.io/agentic-robotics-roadmap",
      "comments": 5,
      "org": "Grid Robotics",
      "url": "https://huggingface.co/papers/2611.18359",
      "arxiv_url": "https://arxiv.org/abs/2611.18359",
      "title_ja": "エージェント・ロボティクスの展望：ロボットシステムの新しい時代",
      "summary_ja": "GPT-6 Astraの登場を機に、基盤モデルを開ループではなく閉ループでロボット制御に適用する「エージェント・ロボティクス」の概念と課題を整理。"
    },
    {
      "id": "2611.21218",
      "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
      "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
      "upvotes": 97,
      "github_stars": 67,
      "github_repo": "https://github.com/panuvi/inclusionmed",
      "project_page": "https://inclusionmed.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.21218",
      "arxiv_url": "https://arxiv.org/abs/2611.21218",
      "title_ja": "InclusionMed: 包摂的なヘルスケアのためのAIベンチマーク",
      "summary_ja": "医療AIの多様性と包摂性を評価するため、3つの役割と能力軸で整理されたオープンな評価指標と診断推論用ベンチマークを提供。"
    },
    {
      "id": "2611.21072",
      "title": "Sage S2.1 Flash Technical Report",
      "abstract": "We introduce Sage S1.5 Flash, a 320-billion-parameter general-purpose mixture-of-experts model designed to reason over scientific evidence and act in interactive environments. Sage Sci-Perception uses dedicated encoders for molecular graphs and biological sequences and represents spectra as ordered patches of measurements. Modality-specific projectors map these representations into the input space of a shared backbone, which processes them alongside text and images. To develop the model's agent capabilities, we construct verifiable environments for tool use, search, and coding, as well as specialized workflows involving machine learning experiments and scientific software. Task completion is checked against execution results, changes in environment state, or submitted artifacts. We evaluate Sage S1.5 Flash on 33 benchmarks across seven domains. In the primary comparison against five baselines, it ranks first on OfficeQA Pro (72.2), MLE-bench Lite (90.3 HumanRank), Harvey LAB, and SpreadsheetBench~2, and second on OSWorld-Verified (85.2), WebArena-Verified (67.6), and DeepResearch Bench~II (54.2). These results show particular strengths in using documentary evidence, producing verifiable workbooks, and carrying out machine learning tasks, alongside competitive performance in desktop and browser workflows that require the model to act on visual feedback.",
      "upvotes": 95,
      "github_stars": 32,
      "github_repo": "https://github.com/InternLM/Sage-S2.1-Flash",
      "project_page": "https://internlm.github.io/Sage-S2.1-Flash/",
      "comments": 4,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2611.21072",
      "arxiv_url": "https://arxiv.org/abs/2611.21072",
      "title_ja": "Sage S2.1 Flash テクニカルレポート",
      "summary_ja": "科学的証拠の推論とツール実行が可能な、3200億パラメータを持つ科学特化型の汎用混合専門家（MoE）モデルを提示。"
    },
    {
      "id": "2611.17621",
      "title": "AscendGYM: A Cost-Aware Kernel Optimization Benchmark for Real-World Workloads on Ascend NPUs",
      "abstract": "Kernel optimization is essential for efficient large language model (LLM) training and inference on Ascend NPUs. Existing Ascend kernel benchmarks primarily focus on kernel generation, with less emphasis on the ability of agents to optimize existing implementations under input configurations drawn from real workloads. To address this requirement, we introduce AscendGYM, a benchmark whose initial suite comprises 48 kernels across three difficulty levels. Each kernel is paired with test cases whose data types and tensor shapes are collected from real-world training and inference tasks. Consequently, performance improvements on AscendGYM map directly to the corresponding workloads. In terms of usability, two evaluation modes are supported in AscendGYM: model evaluation and model-harness evaluation. The kernel optimization capabilities of both trained models and custom agents are allowed to be measured. It provides a complete execution environment that closely reproduces how Ascend kernels are invoked in practical pipelines. For model evaluation, it additionally includes a built-in harness equipped with search orchestration and experience accumulation. Finally, we propose a new metric, the Speedup-Token Score (STS), which quantifies performance gains relative to token cost. By jointly considering speedup and cost, STS enables the assessment of practical kernel optimization capability of a model or harness under an acceptable budget. AscendGYM is available at https://github.com/SLAI-AITP/AscendGYM.",
      "upvotes": 91,
      "github_stars": 32,
      "github_repo": "https://github.com/SLAI-AITP/AscendGYM",
      "project_page": "https://slai-aitp.github.io/AscendGYM/",
      "comments": 3,
      "org": "SLAI-AITP",
      "url": "https://huggingface.co/papers/2611.17621",
      "arxiv_url": "https://arxiv.org/abs/2611.17621",
      "title_ja": "AscendGYM: Ascend NPU上の実ワークロードに対するコスト意識型カーネル最適化ベンチマーク",
      "summary_ja": "実際のLLM訓練・推論から得た構成を用いて、AIエージェントによる既存カーネルの最適化能力を直接評価するベンチマーク。"
    },
    {
      "id": "2611.15789",
      "title": "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender",
      "abstract": "Controllable real-world video generation models can condition on a rendered graybox proxy video, which fixes layout, motion and camera. Coding agents can build such videos by reconstructing a 4D scene in Blender, yet no benchmark checks both these videos and the long, multi-shot scenes behind them. We introduce VibePrevisBench, a benchmark for 4D scene reconstruction: an agent turns a brief into an executable 4D scene and renders its proxy video. Its 242 tasks span four input kinds, including scripts, photos, continuations, and reference videos. Each delivery is scored along two evaluation dimensions. Rule-based Scene Check re-runs the code and compares the exported 4D scene with hidden ground truth facts in nine dimensions. VLM-based Screen Check asks a VLM judge whether the facts that pass can be recognized in the proxy video. We analyze the evaluation results and trajectories of 11 frontier coding agents and identify three key observations. First, multimodal understanding separates the agents, especially in understanding space and camera motion. Second, all agents seem to already master basic camera work and staging, and fail at challenging requests. Third, agents inspect their own renders but fail to correct their errors. Agents thus need better visual understanding of space and camera, explicit checks for challenging requests, and item-by-item verification of renders against the brief.",
      "upvotes": 87,
      "github_stars": 17,
      "github_repo": "https://github.com/vibeprevisbench/vibeprevisbench",
      "project_page": "https://vibeprevisbench.github.io/",
      "comments": 3,
      "org": "Kling-Keye",
      "url": "https://huggingface.co/papers/2611.15789",
      "arxiv_url": "https://arxiv.org/abs/2611.15789",
      "title_ja": "VibePrevisBench: Blenderでの4Dシーン生成に向けたエージェント型コーディングの評価",
      "summary_ja": "指示から実行可能なBlender用4Dシーンコードを生成し、レンダリング結果とシーン構造の両面から評価する242個のタスク群。"
    },
    {
      "id": "2611.21003",
      "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
      "abstract": "We present K2-Horizon, a fleet of six fully open language models, from a 0.9B dense model to a 375B-A23B MoE, built for general-purpose reasoning and agentic work across math and science, software engineering, deep research, office automation, and beyond. The models lead or are competitive with strong open models of their size on agentic and coding benchmarks. On the modeling side, to strengthen reasoning, we introduce Mixture-of-Value Attention (MoVA), applying MoE to attention value projections, and softplus attention gating, a more flexible, theoretically motivated gate. Our 36B-A4B model uses both and nearly matches a 32B dense model trained on the same data, with one-seventh the active parameters. We also introduce Uno, lossless diffusion adapters that speed up decoding by up to 2.2x without a separate draft model. Our release follows the LLM360 definition of open source for transparency and reproducibility: the full development history, including intermediate checkpoints from every training stage, pre-training data, training logs, and all training, evaluation, and infrastructure code, notably our production-scale xLLM framework for dense and MoE training and the RL360 reinforcement-learning stack. Beyond the data itself, we release and document in detail every pipeline that built it, the part of model development that open releases most rarely disclose. These pipelines produced roughly 10T synthetic pre-training tokens, showing that synthetic data can be a major ingredient of pre-training at scale. Four of the models share one 22T-token pre-training corpus and recipe, revealing consistent scaling behavior and enabling controlled studies of scale and sparsity. All artifacts are available at https://ifm.ai/k2/",
      "upvotes": 84,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ifm.ai/k2/",
      "comments": 2,
      "org": "Institute of Foundation Models",
      "url": "https://huggingface.co/papers/2611.21003",
      "arxiv_url": "https://arxiv.org/abs/2611.21003",
      "title_ja": "K2-Horizon: オープンソース言語モデルの最先端フリート",
      "summary_ja": "MoVA等の新技術を導入し、数学・科学・コーディング・エージェント業務で高性能を発揮する0.9Bから375Bまでのオープンモデル群。"
    },
    {
      "id": "2611.19937",
      "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
      "abstract": "Real-world portfolio management requires converting noisy market observations into coordinated, simultaneous allocations across multiple assets under shared capital constraints. Advances in forecasting models and alpha discovery help identify opportunities. However, traditional pipelines often decouple signal forecasting from portfolio construction, potentially misaligning learning with allocation and execution objectives. We present AllocFlow, an end-to-end flow-matching framework that directly generates joint portfolio allocations from raw multi-asset market histories. To capture dependencies among portfolio positions, AllocFlow employs a cross-asset flow Transformer conditioned on temporal market representations to generate continuous, signed position weights across all instruments jointly. To address the sample inefficiency and instability of learning continuous allocation policies from scratch, we establish a two-stage training scheme: strategy-supervised imitation shapes a structured distribution of candidate portfolios, followed by group-relative reinforcement learning (RL) that refines joint decisions using portfolio-level financial rewards and a frozen policy reference. On hourly cryptocurrency perpetual futures, RL refinement raises the annualized net return of the imitation policy from 27.79% to 51.38% and its Calmar ratio from 0.955 to 4.043, surpassing the teacher strategy on every metric, and AllocFlow reaches a Calmar ratio of 4.90 on six further months of unseen 2026 data without retraining.",
      "upvotes": 72,
      "github_stars": 26,
      "github_repo": "https://github.com/allocflow/AllocFlow",
      "project_page": "https://allocflow.github.io/",
      "comments": 4,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.19937",
      "arxiv_url": "https://arxiv.org/abs/2611.19937",
      "title_ja": "AllocFlow: 生の市場データからのエンドツーエンドなポートフォリオ取引アクション生成",
      "summary_ja": "予測と構築を統合し、フローマッチングを用いて複数資産の同時配分を履歴データから直接生成するエンドツーエンドのフレームワーク。"
    },
    {
      "id": "2611.15777",
      "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
      "abstract": "System One models promise fast, general-purpose decision-making without lengthy token generation. However, understanding their capability spectrum and decision reliability requires more than aggregate performance on current benchmarks. Existing evaluations often provide limited insight into the breadth of model capabilities and the reliability of their decisions. We introduce SO-Arena, a benchmark characterizing the capability spectrum and decision reliability of System One models across 11 domains and five capability families. For the capability spectrum, SO-Arena offers evidence-grounded evaluation through reliable sources and manual verification of reference labels against model-visible inputs; fine-grained capability assessment through domain-specific difficulty criteria; and realistic interactive evaluation, where models iteratively execute actions in sandboxes. Reasoning-intensive tasks further enable system one-two comparison. Beyond accuracy, SO-Arena assesses decision reliability through two complementary measures: decision stability under controlled option-set changes and missing-answer recognition when no valid option is available. Evaluations across 21 models reveal that the benefits of scaling and additional reasoning vary substantially across domains. More importantly, strong overall performance does not necessarily imply reliable decision-making: the best-performing System One model ranks only seventh in reliability. Together, these findings highlight the need to characterize capability spectrum and decision reliability as complementary dimensions, providing a systematic view of the strengths and limitations of System One models.",
      "upvotes": 72,
      "github_stars": 27,
      "github_repo": "https://github.com/holdrain/SO-Arena",
      "project_page": "https://lichenlillc.github.io/SO-Arena",
      "comments": 5,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.15777",
      "arxiv_url": "https://arxiv.org/abs/2611.15777",
      "title_ja": "SO-Arena: システム1モデルの能力スペクトルと信頼性のベンチマーク",
      "summary_ja": "高速な意思決定を行う「システム1モデル」の信頼性と能力の幅を、11ドメインにわたり根拠に基づいて詳細に評価する指標。"
    },
    {
      "id": "2611.14815",
      "title": "BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model",
      "abstract": "Driving world models aim to simulate how a scene unfolds under different ego actions. This requires plausible motion of surrounding vehicles as well as precise ego-trajectory control. Learning vehicle motion from perspective video alone is challenging because motion is entangled with appearance and vehicles can be occluded. Prior work therefore conditions video generation on layouts that specify vehicle motion, providing control over surrounding vehicles but requiring their future trajectories as inputs. We introduce BirdDreams, an autoregressive driving world model that jointly generates perspective video and a schematic bird's-eye-view (BEV) video, making scene layout part of the predicted future. The BEV, rendered from scene annotations for training, depicts roads and vehicles as simple shapes at a fixed metric scale, providing a top-down view of their positions and motion with reduced occlusion between vehicles. Perspective video, by contrast, retains scene details that the BEV omits, such as traffic signals and object appearance. Joint attention between two video diffusion transformers, one per stream, lets each stream inform the other during generation. The predicted BEV also provides a geometric interface for ego control: we translate and rotate its latest frame along an input ego trajectory and use the resulting frames as a soft condition that shows how the scene would appear to move if only the ego vehicle moved. At inference, BirdDreams generates both videos from a single camera image without requiring an HD map or vehicle-state inputs. On PhysicalAI-AV and nuScenes, BirdDreams follows input ego trajectories more faithfully than prior driving world models and generates more plausible ego motion without ego-action conditioning. Human evaluation shows that BirdDreams outperforms a perspective-only baseline in generating realistic surrounding-vehicle behavior.",
      "upvotes": 56,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://research.nvidia.com/labs/sil/projects/birddreams/",
      "comments": 3,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.14815",
      "arxiv_url": "https://arxiv.org/abs/2611.14815",
      "title_ja": "BirdDreams: 妥当で反応的な運転ワールドモデルのための視点・BEVビデオ同時生成",
      "summary_ja": "周囲の車両挙動と自車制御を両立させるため、通常の視点映像と俯瞰図（BEV）を自己回帰的に同時生成する運転ワールドモデル。"
    },
    {
      "id": "2611.12068",
      "title": "MIRIX-2.0: Multi-Agent Memory System",
      "abstract": "Long-term memory lets LLM agents personalize, stay consistent, and reuse what worked before. Parametric memories need training, consolidation can lose details for good, and keeping every record leaves a growing store to search. We present MIRIX-2.0, a multi-agent memory system designed to be practical, accurate, and efficient at once. It is the most accurate of the compared systems on four of five QA benchmarks. It reaches 91.4% on LoCoMo and 72.6% on LongMemEval-S, where it leads the strongest baseline by 14.3 points, and with AutoDream disabled it gains 31.0 and 22.0 points over HyperMem on single-hop and multi-hop document QA. As procedural memory, it yields the highest mean success among the compared memory methods on ALFWorld and WebShop and reaches 49.2% on MetaClaw-Bench, against 44.0% for MetaClaw's skill library. Six typed memory agents keep complete records as the system of record, and a provenance hypergraph indexes episodic and semantic records with n-ary frames that cite their rows. Retrieval runs under explicit budgets, so the evidence a question inspects does not grow with the history. AutoDream merges duplicate anchors outside the write path without rewriting any record, and it distills task sessions into skills. With AutoDream disabled, MIRIX-2.0 answers faster than HyperMem on all five timed benchmarks. It needs no fine-tuning, runs with closed and open models, and its code is public.",
      "upvotes": 52,
      "github_stars": 3499,
      "github_repo": "https://github.com/Mirix-AI/MIRIX",
      "project_page": "https://mirix.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.12068",
      "arxiv_url": "https://arxiv.org/abs/2611.12068",
      "title_ja": "MIRIX-2.0: マルチエージェント・メモリシステム",
      "summary_ja": "LLMエージェント向けに、正確かつ効率的に長期記憶を管理・再利用し、QAや手続き型メモリのベンチマークで高い成功率を達成するシステム。"
    },
    {
      "id": "2611.20218",
      "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
      "abstract": "A coding agent working within a software organization must establish what to build, collaborate with colleagues, and verify what it delivers. We introduce SWE-CoWork, a benchmark comprising 101 development assignments across 101 real repositories, 11 programming languages, and 12 application domains. Each assignment places an agent in a simulated engineering organization with 26 colleagues who have distinct responsibilities, bounded knowledge, and controlled collaboration behavior. Starting from a brief handoff, agents must recover requirements distributed across colleagues and workplace records, reconcile conflicting evidence, and implement changes evaluated by private executable tests. We evaluate eleven models and find a substantial gap between partial implementation and complete task delivery. The two leading models satisfy approximately 63% of fail-to-pass (F2P) tests but complete fewer than 8% of assignments. Providing complete requirements upfront improves F2P by approximately 16 percentage points for Seed Evolving and GPT-6 Astra, yet leaves complete task success unchanged. Requirement-level trajectory analysis reveals failures throughout the delivery process: Claude-Opus-5.5 directs a mean of 93% of first questions about queried cards to their accountable owners across runs but obtains only 64% of colleague-held requirements. Deferred questions go unfollowed, implementations remain incomplete even after requirements are acquired, and 31% of requirements reported as completed fail their tests. These findings highlight sustained requirement tracking, from clarification through implementation, verification, and handoff, as a key challenge for reliable autonomous software engineering.",
      "upvotes": 51,
      "github_stars": 14,
      "github_repo": "https://github.com/TokenWave-AI/swe-cowork-bench",
      "project_page": "https://tokenwave-ai.github.io/swe-cowork-page",
      "comments": 4,
      "org": "Tokenwave.AI",
      "url": "https://huggingface.co/papers/2611.20218",
      "arxiv_url": "https://arxiv.org/abs/2611.20218",
      "title_ja": "SWE-CoWork: 組織内のデジタル従業員としてのコーディングエージェントのベンチマーク",
      "summary_ja": "仮想組織内の同僚と対話し、分散した要件の回収や矛盾の解決を経て開発・検証を行うエージェントの実践的な能力を測る指標。"
    },
    {
      "id": "2611.22055",
      "title": "Weight-Space Programming Doesn't Need Transformers",
      "abstract": "Standard neural architectures such as the Transformer were chosen because they train well with gradient descent and run fast on GPUs. In weight-space programming, a large language model (LLM) writes target weights by hand without gradient-based training, so those reasons no longer apply. Should we keep the Transformer? Given minimal guidance, ten labeled examples, and a sandbox, mainly on multiple-choice questions, we task three frontier LLMs with either generating the weights of a fixed architecture or designing the architecture themselves. When free to design, all three compile plain-text facts into a sparse table queried by a fixed procedure, reaching up to 54.4% test accuracy. An LLM-designed model achieves higher test accuracy than the most accurate released Transformer that the same LLM wrote while using about 1,800x fewer parameters. Without gradients, they choose a table, in which the LLM can state what each weight means and can find and rewrite a wrong one. Each wrong answer points to one row, and removing a row changes about one other answer. From this, we propose an associative-memory-based model up to 17x faster on GPUs than a same-sized Transformer. We also test pretrained weights, other benchmarks, and tasks where models generate answers. Pretrained LLMs remain more accurate; the claim concerns which structure to build when writing weights.",
      "upvotes": 50,
      "github_stars": 35,
      "github_repo": "https://github.com/effl-lab/Weight-Space-Programming",
      "project_page": "https://wsp-no-transformer.github.io/",
      "comments": 3,
      "org": "Pohang University of Science and Technology",
      "url": "https://huggingface.co/papers/2611.22055",
      "arxiv_url": "https://arxiv.org/abs/2611.22055",
      "title_ja": "重み空間プログラミングにTransformerは不要である",
      "summary_ja": "LLMが学習なしで対象モデルの重みを直接書き出す際、LLM自身が設計した疎なテーブル構造の方が既存のTransformer構造より高精度であると指摘。"
    },
    {
      "id": "2611.15131",
      "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
      "abstract": "In this report, we introduce the Reciprocal World Model (RWM) and present Duo v1, a full-duplex world model that continuously perceives audiovisual inputs while responding to users in real time. The RWM treats intelligence and physical reality as equally fundamental to what constitutes a world. Existing world models largely focus on simulating the latter, leaving reasoning and decision-making as external controls rather than intrinsic parts of the world itself. In RWM, we identify two equally fundamental capabilities: Intent, which provides the cognition underlying world interactions, and Realization, which generates coherent audio-visual behavior. To realize this formulation, Duo v1 introduces three key technical designs: (1) Leveraging autoregressive modeling for continuous interaction reasoning and participation decisions, rather than restricting it to instruction understanding for diffusion models. (2) Constructing chunk-specific conditions and synchronize tokens across Intent and Realization on a unified timeline. Module-specific attention masks enforce causal dependencies both within and across chunks, preventing access to future inputs. (3) Mitigating distribution shift in both modules through dual rollout distillation, training on autoregressively generated Intent tokens and synthesized audiovisual histories from Realization. Both modules continuously perceive real-time audio, video, and text, enabling full-duplex interaction with spontaneous conversations and interruptions. Beyond conversation, users can share real objects, reshape virtual scenes, guide assistants, or play audiovisual games without mouse or keyboard controls. The release of Duo v1 makes our first step, with the next version coming soon. We look forward to broader exploration of this emerging field.",
      "upvotes": 46,
      "github_stars": 140,
      "github_repo": "https://github.com/inclusionAI/Duo",
      "project_page": "https://duo-v1.github.io/",
      "comments": 3,
      "org": "inclusionAI",
      "url": "https://huggingface.co/papers/2611.15131",
      "arxiv_url": "https://arxiv.org/abs/2611.15131",
      "title_ja": "Duo: 全二重インタラクションのための相互ワールドモデル",
      "summary_ja": "意図（認知）と実現（生成）を統合し、視聴覚入力を知覚しながらユーザーにリアルタイムで応答可能な全二重型ワールドモデル。"
    },
    {
      "id": "2611.13004",
      "title": "G-STAR: Group-Scaled Token Capacity for Deeply Compressed Autoregressive Generation",
      "abstract": "Discrete autoregressive models offer a scalable framework for image generation. However, they face a fundamental trade-off: long token sequences preserve representation quality but slow generation, while aggressive spatial compression reduces representation capacity. Based on product quantization, we show that, under a fixed nominal information budget, group size should scale quadratically with the per-axis spatial compression factor. Building on this principle, we propose GSTAR, a spatial--group co-scaling framework that enables \\(32\\times\\) and even effective \\(64\\times\\) compression while preserving strong reconstruction, understanding, and generation performance. Since larger groups introduce intra-group dependencies that must be modeled efficiently, we analyze their impact on inference latency and generation quality and introduce a semi-autoregressive decoder that combines parallel feature computation with lightweight causal modeling. With these designs, our highly compressed models perform competitively with leading models across five representative text-to-image benchmarks (GenEval, DPG-Bench, PRISM, LongText-Bench, and Qwen-Image-Bench). At \\(1024\\times1024\\) resolution, our model delivers a \\(20\\times\\) speedup over prior discrete autoregressive models, generating each image in 2.5 seconds on a single NVIDIA H200. Together, these results show that highly compressed discrete representations can enable high-quality autoregressive generation at low latency.",
      "upvotes": 46,
      "github_stars": 30,
      "github_repo": "https://github.com/DAGroup-PKU/G-STAR",
      "project_page": "https://dagroup-pku.github.io/G-STAR/",
      "comments": 3,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2611.13004",
      "arxiv_url": "https://arxiv.org/abs/2611.13004",
      "title_ja": "G-STAR: 深く圧縮された自己回帰生成のためのグループスケール・トークン容量",
      "summary_ja": "積量子化に基づきグループサイズを最適化することで、画像生成において32倍以上の高い圧縮率と高品質な再構成・理解を両立する手法。"
    },
    {
      "id": "2611.19800",
      "title": "Multi-Branch Transformer",
      "abstract": "Transformer language models are commonly scaled by making their blocks wider or stacking them deeper. In this work, we explore a complementary path: branching, the parallel composition of full Transformer blocks. We introduce the Multi-Branch Transformer (MBT), which processes the input through shared initial layers, executes independently parameterized branches of sequential blocks in parallel, and fuses their outputs before shared final layers. At comparable training compute, we study three MBT variants: Wide-Shallow preserves block width, Narrow-Deep preserves sequential depth, and Balanced interpolates between them. In controlled pretraining experiments at four mixture-of-experts scales (0.8B to 2.1B total parameters), 2-branch Wide-Shallow MBTs consistently outperform sequential Transformers under matched parameter and training-compute budgets. Balanced MBTs improve further and retain comparable quality as the number of branches increases. To improve inference efficiency at long contexts, we introduce Joint-KV, which constructs a shared KV cache from branch representations at each depth. Our final recipe combines Balanced MBTs with Joint-KV, supported by an inference engine that exploits branch grouping and shared-cache reuse. Fitted scaling curves indicate that standard Transformers require up to 1.26x as much training body compute to match our final models' validation loss. These models reduce full-model KV-cache storage by up to 34% and deliver up to 51.4% higher decoding throughput on a single H200 GPU. Ablation studies show that branching yields gains beyond changes in width and depth, enables an effective KV-sharing strategy (Joint-KV), remains robust across fusion functions, and performs best in the middle layers. These findings show that branching offers a practical path for scaling language models toward both better modeling quality and faster inference.",
      "upvotes": 45,
      "github_stars": 5,
      "github_repo": "https://github.com/GaotangLi/Multi-Branch-Transformer",
      "project_page": "https://gaotangli.github.io/project_page/Multi-Branch-Transformer/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.19800",
      "arxiv_url": "https://arxiv.org/abs/2611.19800",
      "title_ja": "マルチブランチ・Transformer",
      "summary_ja": "Transformerブロックを直列ではなく並列に配置（ブランチ化）することで、同じ計算予算でより効率的にモデルを拡張・学習させる手法。"
    },
    {
      "id": "2611.07222",
      "title": "SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection",
      "abstract": "Tool-using agents act on email, files, and payments, so an instruction hidden in a web page or a shared document can make an agent send data or money to an attacker. Many runtime defenses put a language model on the decision that lets an action through, so the decision depends on a model that may read the attacker's text and adds model calls to every step. Provenance defenses keep the model off the final check but need a model to plan or route each task first. Where an action goes can instead be read from the tools' typed returns: an email's sender or a payment's account arrives in a typed field, while injected instructions arrive as free text. SPILLWAY turns this observation into a deterministic floor with no per-task plan. The check admits a call when each target value that appears in tool output but not in the user's task was returned by a read-only tool in a typed field or is covered by a fixed delegation rule. A deterministic sanitizer removes instruction-like regions its fixed rules match before the model reads them and retains the removed spans as evidence, and a local judge may restore a refused call, never one whose target lies in the removed text. Across three backbones, and seven task suites on one of them, no standard templated injection redirects an action to an attacker's target under SPILLWAY, at the highest observed mean utility and composite scores (NRP, ERS) of the defenses we run under that attack. A forged chat template also produces a raw zero, and mean in-scope attack success under a released reinforcement-learning attacker is .007. SPILLWAY reaches this floor with no defense-triggered backbone re-run and almost no added model call. As personal AI agents act on users' email, files, and payments, SPILLWAY gives them an auditable refusal floor on where their actions go that keeps them useful and holds across backbones.",
      "upvotes": 43,
      "github_stars": 5,
      "github_repo": "https://github.com/saintmachines/spillway",
      "project_page": "https://saintmachines.github.io/spillway/",
      "comments": 2,
      "org": "SAINT Machines",
      "url": "https://huggingface.co/papers/2611.07222",
      "arxiv_url": "https://arxiv.org/abs/2611.07222",
      "title_ja": "SPILLWAY: プロンプトインジェクションからツール利用エージェントを守るためのターゲット承認と無害化の分離",
      "summary_ja": "ツールの戻り値の型を利用し、インジェクションを決定論的に阻止することで、LLMへの追加呼び出しなしで安全なアクション実行を保証する手法。"
    },
    {
      "id": "2611.16748",
      "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
      "abstract": "Video generation models produce visually realistic videos but still struggle with physical dynamics and causal consistency. Learning from generated videos requires fine-grained physical supervision, yet reliable quality judgments, correction pairs, and controlled variations are difficult to obtain. Large language models (LLMs) possess physical knowledge, but struggle to reliably guide video generation models in producing their training videos. We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models. The harness guides and constrains LLMs throughout video generation, selection, and correction, distilling their physical knowledge into physically consistent videos. The framework supports controllable training-data construction and inference-time video repair. By identifying and correcting failures, PhysLoop marks a key milestone toward recursive self-improvement (RSI) in video generation models with limited human intervention. We release 100K videos spanning diverse, realistic indoor and outdoor scenes, along with generation tools and two evaluation datasets: PhysLoop-Gen and PhysLoop-Repair. We evaluate controllable generation and localized repair on these datasets, respectively, and assess physical behavior on the external Physics-IQ Verified benchmark.",
      "upvotes": 42,
      "github_stars": 42,
      "github_repo": "https://github.com/DAGroup-PKU/PhysLoop",
      "project_page": "https://chenyx24.github.io/PhysLoop-site/",
      "comments": 4,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.16748",
      "arxiv_url": "https://arxiv.org/abs/2611.16748",
      "title_ja": "PhysLoop: 動画生成モデルの自己改善に向けたLLMの物理認識の活用",
      "summary_ja": "物理法則に忠実な動画を生成するため、LLMの物理知識を用いて動画の生成・選択・修正をガイドし、モデルを自己改善させるフレームワーク。"
    },
    {
      "id": "2611.21099",
      "title": "ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models",
      "abstract": "Frontier multimodal models can now control robots zero-shot from images, yet many manipulation tasks depend on contact forces that images cannot show. Bringing force to an API-only frozen model raises two challenges. First, contact evolves much faster than an API model can decide, so the system must close the loop on force beneath the model. Second, a frozen model cannot interpret raw force streams, so force must be returned in a form the model can reason about. Therefore, we present ForceHarness, a harness that lets frozen models use force without demonstrations or finetuning. After calibrating hand force from a wrist sensor or joint torques alone, ForceHarness addresses the first challenge with self-terminating force primitives that regulate force on their own and return at a contact event. To address the second challenge, a physics translation layer turns each force trace into physical quantities with uncertainty as the tool result. To evaluate ForceHarness against expert force controllers and learned policies under identical conditions, we also build HiddenPhys, a seven-task MuJoCo benchmark with hidden physical variables. On a real arm without a wrist force sensor, ForceHarness raises the zero-shot success rate of GPT-6 Astra from 3.3% to 90.0%. In simulation, it adds 17.5 percentage points on the public ForceBench suite and 34.3 percentage points on HiddenPhys, surpassing force-aware policies trained on demonstrations on both benchmarks and matching hand-written expert controllers on HiddenPhys. Ablations further show that smaller models make significantly better decisions when given physical quantities rather than raw force values.",
      "upvotes": 40,
      "github_stars": 32,
      "github_repo": "https://github.com/showlab/ForceHarness",
      "project_page": "https://showlab.github.io/ForceHarness/",
      "comments": 3,
      "org": "Show Lab",
      "url": "https://huggingface.co/papers/2611.21099",
      "arxiv_url": "https://arxiv.org/abs/2611.21099",
      "title_ja": "ForceHarness: 凍結された先端モデルを力覚に基づく行動と物理に適応させる",
      "summary_ja": "追加学習なしで、凍結されたマルチモーダルモデルがロボットの力覚情報を解釈・制御できるようにし、繊細な接触を伴う操作を実現する仕組み。"
    },
    {
      "id": "2611.15844",
      "title": "Open Vision Banana: A Fully Open Recipe for Generative Visual Perception",
      "abstract": "Recent work suggests that pretrained image generators encode real-world understanding beyond image synthesis. Vision Banana exploits this by framing vision tasks as conditional image editing. However, its data, weights, code, and implementation details are not public. We present Open Vision Banana (OVB), a fully open and reproducible recipe for converting pretrained generators into unified multi-task perception systems. Our analyses identify the design choices that matter most for generalization, including color encoding, prompt design, parameter adaptation, and task balancing. These choices interact, so individually helpful choices can hurt when combined with others. Starting from 4B and 9B parameter open-weight base models and using 2.1M-3.8M training pairs from public datasets, OVB surpasses Vision Banana's reported Cityscapes zero-shot performance (73.9 vs. 69.9 mIoU) and rivals state-of-the-art affine-invariant depth estimators. Its non-zero-shot variants come within five points of Vision Banana on referring and reasoning segmentation but remain further behind on instance segmentation. All models largely retain the base model's image-editing abilities. With legend ensembling, we introduce a test-time scaling method for generator-based perception. It segments an image under several class-color legends and fuses the results by majority vote, correcting unstable color-class bindings and improving mIoU by up to 8.7 points on Cityscapes and 15.0 points on COCO-Object without retraining. We release the dataset construction and processing pipeline, the training and evaluation code, as well as the final, intermediate, and ablation checkpoints. Project website: https://openvisionbanana.github.io",
      "upvotes": 40,
      "github_stars": 102,
      "github_repo": "https://github.com/OpenVisionBanana/OpenVisionBanana",
      "project_page": "https://openvisionbanana.github.io/",
      "comments": 3,
      "org": "Fundamental AI Lab at UTN",
      "url": "https://huggingface.co/papers/2611.15844",
      "arxiv_url": "https://arxiv.org/abs/2611.15844",
      "title_ja": "Open Vision Banana: 生成的視覚知覚のための完全オープンなレシピ",
      "summary_ja": "画像生成モデルを多タスクの知覚システムに変換する手法を分析し、再現可能なオープンなデータ・重み・コードとして提供。"
    },
    {
      "id": "2611.18482",
      "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
      "abstract": "Speculative decoding accelerates generation by letting a lightweight drafter propose tokens for parallel verification by a target model. Diffusion drafters such as DFlash propose an entire token block in a single forward pass, but mainly focus on text-only tasks, leaving multimodal drafting underexplored. To study this setting, we first introduce a metric of token-level visual dependence based on the KL divergence between next-token distributions with and without visual input. We find that acceptance rates decrease from 46% in the lowest visual-dependence quartile to 22% in the highest, with this disparity persisting after multimodal training. Motivated by this observation, we propose MMFlash, a simple and effective framework that adaptively upweights visually dependent tokens that the drafter predicts poorly. For long video inputs, MMFlash further employs sparse attention to reduce redundant attention computation and improve drafting quality. Across various multimodal benchmarks, MMFlash achieves lossless decoding speedups of up to 3.58times, outperforming EAGLE-3 and DFlash by up to 195.4% and 17.1%, respectively.",
      "upvotes": 39,
      "github_stars": 42,
      "github_repo": "https://github.com/fscdc/MMFlash",
      "project_page": "https://fscdc.github.io/MMFlash/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.18482",
      "arxiv_url": "https://arxiv.org/abs/2611.18482",
      "title_ja": "MMFlash: 視覚言語モデルのための高速投機的デコーディング",
      "summary_ja": "視覚依存度に応じた適応的なトークン生成を行うことで、視覚と言語の両方が混在するマルチモーダルタスクでの推論を高速化する手法。"
    },
    {
      "id": "2611.17167",
      "title": "Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents",
      "abstract": "Decision models answer a question with a typed output, such as a choice among options with a probability for each, so one model can choose an agent's actions, evaluate actions already taken, or score every action to teach a policy with reinforcement learning. Prior work has studied them mainly as actors, judging their usefulness by how well they act. We ask whether a decision model that acts poorly can still teach well. We compare three decision models and three general LLMs as actors and judges on ALFWorld, and use JEV as a teacher on ALFWorld and WebShop. As actors, all six models are pulled away from a subgoal that must come first by an easier one. As judges that see the whole trajectory, the same models credit the steps toward that subgoal, and asking whether each action helped, rather than whether the task will succeed, separates useful from useless actions. As a teacher, JEV raises a Qwen2.5-1.5B policy over GRPO from 72.8% to 82.9% success on ALFWorld and from 56.8% to 71.4% on WebShop. These results suggest that a poor actor can still teach well, because judging an action after the episode ends reveals the consequences that acting must anticipate. Code is available at https://github.com/ZJU-REAL/decision-agents.",
      "upvotes": 38,
      "github_stars": 49,
      "github_repo": "https://github.com/ZJU-REAL/decision-agents",
      "project_page": "https://zjureal.com/decision-agents/",
      "comments": 6,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2611.17167",
      "arxiv_url": "https://arxiv.org/abs/2611.17167",
      "title_ja": "アクター、判定者、それとも教師？長期エージェントにおける意思決定モデルの理解",
      "summary_ja": "モデル自身の行動精度が低くても、行動の評価者や教師として活用した場合には優れた学習効果を発揮することを実証。"
    },
    {
      "id": "2611.21607",
      "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
      "abstract": "Frontier Vision-Language Models (VLMs) such as GPT-6 Astra have demonstrated remarkable capabilities in robot control, suggesting that broad pretraining provides knowledge valuable for physical action. Yet most Vision-Language-Action (VLA) policies still rely on much smaller VLM backbones, leaving this potential largely untapped. We ask whether frontier-scale representations can provide a stronger foundation for robot learning. We introduce ScaleVLA, which connects a 552B DeepSeek-V4.1-Flash backbone to a trainable action DiT, and systematically compare VLMs from 2B to 552B under a shared training setup. We evaluate three fundamental capabilities of robot foundation models. In sample efficiency, just 10 demonstrations outperform a 2B backbone trained with 50 (87.8% vs. 85.6%). In generalization, LIBERO-PRO success reaches 45.1%, compared with at most 31.3% for smaller backbones. In precise manipulation, real-world charger insertion improves from 4/10 to 9/10 successes, with gains concentrated in contact-sensitive alignment. Despite its scale, ScaleVLA achieves 216 ms median latency per action chunk. Our findings suggest that frontier VLMs can serve not only as reasoning agents, but also as powerful representational foundations for efficient and generalizable robot policies.",
      "upvotes": 36,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://galaxygeneralrobotics.github.io/scalevla/",
      "comments": 2,
      "org": "galbot",
      "url": "https://huggingface.co/papers/2611.21607",
      "arxiv_url": "https://arxiv.org/abs/2611.21607",
      "title_ja": "ScaleVLA: 5520億パラメータへの視覚・言語・行動モデルのスケールアップ",
      "summary_ja": "巨大なDeepSeek-V4.1-Flashをバックボーンに使用し、モデル規模がロボットの学習効率や汎化性能を大幅に向上させることを確認。"
    },
    {
      "id": "2611.17060",
      "title": "Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors",
      "abstract": "Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. Language models have advanced along well-characterized scaling laws; the corresponding question for physical AI is how capability scales with environments and behaviors, which first requires identifying which data to scale and how to produce and reuse such data continuously. To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours). We further show that each capture can be repurposed for robot learning: scenes are converted into physically interactive simulation environments, human motion is retargeted to whole-body robot trajectories, and additional robot behaviors are obtained through virtual teleoperation and automated long-horizon trajectory generation. We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors.",
      "upvotes": 35,
      "github_stars": 37,
      "github_repo": "https://github.com/Ropedia/Ropedia-Xperience-2",
      "project_page": "https://ropedia.com/xperience/2-research/",
      "comments": 7,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2611.17060",
      "arxiv_url": "https://arxiv.org/abs/2611.17060",
      "title_ja": "Ropedia Xperience 2: 物理AIの環境と行動をスケーリングするためのゴールドスタンダード",
      "summary_ja": "ロボット制御の頑健性向上に向け、人間によるデモンストレーションと双方向的な評価環境を統合した、物理AIのスケーリング用リソース。"
    },
    {
      "id": "2611.15348",
      "title": "Breath-Dx: A Time Series Classification Benchmark for Disease Screening with eNose",
      "abstract": "Electronic nose (eNose) technology offers a portable, non-invasive route for disease screening via exhaled breath analysis. However, progress in the field is hindered by the lack of systematic benchmarks that compare machine learning methods under realistic conditions, particularly sensor drift, a known but rarely quantified failure mode. Most existing studies rely on small, private datasets with inconsistent protocols, rendering results non-comparable and slowing progress. We introduce Breath-Dx, the first comprehensive benchmark of time series classification methods for breath-based disease screening. Our work leverages the Scent of Health (S-OH) dataset, the largest public clinical eNose collection to date, comprising 1,234 patients across nine diagnostic groups, each providing a 17-channel multivariate time series with explicit temporal train/test splits that account for sensor drift. We systematically evaluate 10 methods spanning four families: feature-based tabular learners, convolution-based models, graph-based, and time series architectures. All methods degrade significantly under temporal validation (0.05-0.12 AUC drop compared to random cross-validation), confirming that drift embeds a strong temporal signal. Under this realistic evaluation, the best methods achieve ROC AUC of 0.74-0.76 for some lung conditions, though others remain near chance. Recurrent architectures show the most consistent performance across diseases, while specialized time series methods achieve the highest peak results. Demographic confounders matter: breath signals provide independent diagnostic value for some conditions but add little beyond age for others. We release the S-OH dataset, all temporal splits, evaluation protocols, and code to enable reproducible research and accelerate progress in clinical breathomics.",
      "upvotes": 32,
      "github_stars": 5,
      "github_repo": "https://github.com/ivanpodd/Breath-Dx",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.15348",
      "arxiv_url": "https://arxiv.org/abs/2611.15348",
      "title_ja": "Breath-Dx: eNoseを用いた疾患スクリーニングのための時系列分類ベンチマーク",
      "summary_ja": "電子鼻による呼気分析を標準化するため、最大級の公開データを用い、センサードリフト等の実用的課題を考慮した初の網羅的ベンチマーク。"
    },
    {
      "id": "2611.17834",
      "title": "PaperCritic: Training AI Reviewers to Assess the Soundness of Papers",
      "abstract": "As AI conference submissions grow rapidly, AI reviewers are being considered as an alternative. However, simply imitating human reviewing is problematic because reviewing serves multiple purposes, including evaluating papers' soundness, interestingness, and clarity, the last two of which are subjective. In this work, we focus solely on evaluating soundness, the most important and objective criterion, and define the learning objective as jointly maximizing (1) precision, based on the soundness and substantiveness of review points, and (2) recall, the coverage of high-quality reference review points. Under this problem formulation, we construct a quality-labeled review point dataset, PaperSound-23K, using 1K ICLR submissions and 23K human-written and LLM-generated review points. Using this dataset, we train an AI reviewer model, PaperCritic, through reinforcement learning with the F1 score of precision and recall as the reward. Our experiments show that PaperCritic outperforms frontier models and models trained with other AI reviewer training methods on an in-domain test set. Surprisingly, learning to review ICLR submissions also transfers to reviewing Nature-family papers and even to out-of-domain reviewing tasks (e.g., code review, legal contract review, and feedback on story writing).",
      "upvotes": 32,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.17834",
      "arxiv_url": "https://arxiv.org/abs/2611.17834",
      "title_ja": "PaperCritic: 論文の妥当性を評価するAI査読者の訓練",
      "summary_ja": "客観的な「妥当性」に焦点を絞り、適合率と再現率を最大化するように設計された高品質なデータセットを用いてAI査読者を訓練する手法。"
    },
    {
      "id": "2611.18856",
      "title": "Self-Improvement Memory Enables Continual Recursive Self-Improvement",
      "abstract": "Harness optimization is often studied with a fixed policy model and benchmark. When either changes, the optimizer must decide which parts of an evolved harness to reuse or revise, but the harness alone may not explain why earlier edits were made or how they performed. In this work, we study Continual Recursive Self-Improvement (CRSI), a setting for continuing existing harness-optimization methods across compatible benchmarks or policy models. We propose Self-Improvement Memory (SIM) for the harness optimizer, rather than the task-solving policy. SIM groups edits by recurring harness problem and records their rationale, predicted and observed outcomes, and evaluation context. New attempts extend this history as optimization continues. In our experiments across four domains, SIM achieves higher final scores than harness-only and root-cause-only continuation in cross-dataset and pairwise cross-model comparisons. Across ten independent source runs in coding, paired continuations with SIM improve final scores by an average of 2.36 points over harness-only continuation (p=0.003).",
      "upvotes": 31,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.18856",
      "arxiv_url": "https://arxiv.org/abs/2611.18856",
      "title_ja": "自己改善メモリによる継続的再帰的自己改善の実現",
      "summary_ja": "エージェントの構成（ハーネス）の最適化履歴をメモリに記録し、モデルや課題が変わっても過去の試行錯誤を再利用して改善を続ける手法。"
    },
    {
      "id": "2611.05984",
      "title": "On the Design of Hyper-Connections: Simplification, Stability, and Scalability",
      "abstract": "Hyper-Connections (HC) architectures are increasingly adopted in frontier language models, yet their components remain insufficiently understood and introduce non-negligible training overhead. In this work, we systematically study the HC architecture to understand its components and identify simpler, more efficient designs. We find that learned read/write gating without mixing and unconstrained mixing with fixed gates form two effective interaction groups: either alone achieves performance comparable to mHC. We also identify repeated access to the expanded residual state as a major source of training overhead, even without mixing. These findings lead to SimpleHC, which simplifies the architecture by removing residual mixing and simplifies execution through shared memory access, using the resulting additive structure and shared gate inputs. Layer-specific gates share a group-entry state, enabling batched reads and deferred writes; scalar corrections exactly preserve preceding sublayer output contributions. Our analyses support both the retained residual structure and the design of shared memory access. SimpleHC incurs only 2.4% extra end-to-end training time over a vanilla residual baseline at the largest tested scale. It maintains performance comparable to mHC when scaling from 15B to 30B MoE models, exhibits smoother gradient dynamics during standard training, and remains stable under stress. We hope SimpleHC will encourage a broader pursuit of simplicity in foundation model design, making performance gains more accessible and practical at scale.",
      "upvotes": 30,
      "github_stars": 21,
      "github_repo": "https://github.com/aHapBean/SimpleHC",
      "project_page": "",
      "comments": 4,
      "org": "dots studio",
      "url": "https://huggingface.co/papers/2611.05984",
      "arxiv_url": "https://arxiv.org/abs/2611.05984",
      "title_ja": "ハイパーコネクションの設計について：単純化、安定性、およびスケーラビリティ",
      "summary_ja": "先端LLMで採用されるHCアーキテクチャの構成要素を分析し、性能を維持しつつ訓練コストを削減する簡素化された「SimpleHC」を提案。"
    },
    {
      "id": "2611.17331",
      "title": "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models",
      "abstract": "Decoder-only Large View Synthesis Models (LVSMs) with KV-cache have recently achieved state-of-the-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test-Time Training (TTT) layers save computation but sacrifice quality. We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding. The first key is to repurpose the fast-weight MLP of TTT to learn the cross-view attention mapping explicitly from its input-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality. The second key addresses a modality misalignment between context prefilling and novel-view rendering: we disentangle context tokens into camera-only context rendering tokens to serve as TTB input, and context ground-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel-view processing. Our method achieves up to **23x** rendering speedup with quality on par with the state-of-the-art across several benchmarks. Project page: https://test-time-baking.github.io",
      "upvotes": 27,
      "github_stars": 68,
      "github_repo": "https://github.com/NVlabs/DVSM",
      "project_page": "https://test-time-baking.github.io/",
      "comments": 5,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.17331",
      "arxiv_url": "https://arxiv.org/abs/2611.17331",
      "title_ja": "TTB: デコーダー専用視点合成モデルの効率的レンダリングのためのテスト時ベイキング",
      "summary_ja": "注意機構の情報を軽量なMLPに焼き付ける（ベイキング）ことで、高い品質を保ちながら高速な新規視点画像のレンダリングを可能にする手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "MIT Researchers Show Wrong AI Thresholds Quadruple Insurance Tail Risk",
      "summary": "A revised MIT/Oxford paper shows that tuning AI classifiers for accuracy can quadruple worst-case liability, and proposes insurance contracts that force safer decision thresholds.",
      "url": "https://alphasignal.ai/news/mit-researchers-show-wrong-ai-thresholds-quadruple-insurance-tail-risk",
      "published": "2026-11-19T10:15:30+09:00",
      "title_ja": "AIの分類閾値が保険のリスクを4倍にするというMITの研究結果",
      "summary_ja": "精度重視のAI調整が負債を激増させることを示し、安全な閾値を強制する保険契約を提案。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Prices $81B IPO, Valuing Claude's Maker at $1.5 Trillion",
      "summary": "Anthropic priced its upsized IPO at $83 a share, above its range. The $81.3 billion raise is the largest on record and values the Claude maker at about $1.5 trillion.",
      "url": "https://alphasignal.ai/news/anthropic-prices-81b-ipo-valuing-claude-s-maker-at-1-5-trillion",
      "published": "2026-11-19T08:29:00+09:00",
      "title_ja": "Anthropicが810億ドルのIPOを決定、時価総額1.5兆ドルに",
      "summary_ja": "Claude開発元が史上最大規模の資金調達を実施し、企業価値は約1.5兆ドルに到達。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの発表",
      "summary_ja": "GoogleがGemini 4シリーズの新たなモデルである「Neon」を発表した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google DeepMind's Gemini 4 Neon Targets Complex Agent Workflows at 61 Intelligence Score",
      "summary": "Google's new Gemini 4 Neon sits between Carbon and Hydrogen. It scores 61 on the Artificial Analysis Intelligence Index, just above Carbon, at $3/$15 per million tokens.",
      "url": "https://alphasignal.ai/news/google-deepmind-s-gemini-4-neon-targets-complex-agent-workflows-at-61",
      "published": "2026-11-19T06:34:04+09:00",
      "title_ja": "Google DeepMind、複雑なエージェント業務向けのGemini 4 Neonを発表",
      "summary_ja": "知能指数61を記録し、CarbonとHydrogenの中間に位置する低価格モデルが登場。"
    },
    {
      "lab": "Hugging Face",
      "title": "DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency",
      "summary": "",
      "url": "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin",
      "published": "2026-11-19T04:54:56+09:00",
      "title_ja": "DaisyRose-27B：ポストトレーニング効率の限界に挑む",
      "summary_ja": "学習後の効率化を追求した新しい27BパラメータのAIモデルの最前線を紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Why your fine-tuning job takes longer than the FLOPs say",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time",
      "published": "2026-11-19T03:53:43+09:00",
      "title_ja": "ファインチューニングがFLOPsの理論値より時間がかかる理由",
      "summary_ja": "AIモデルの微調整作業において、計算量（FLOPs）の数値以上に時間を要する要因を解説。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4が利用可能に",
      "summary_ja": "新しい生成AIモデルである「Genie 4」の一般提供が開始された。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's Models Rewrote AMD's GPU Circuits and Gained 14% in Five Months",
      "summary": "OpenAI's models found up to 14% power, performance and area gains in AMD's flagship GPU design in under five months, and AMD has already sent some of those changes to manufacturing.",
      "url": "https://alphasignal.ai/news/openai-s-models-rewrote-amd-s-gpu-circuits-and-gained-14-in-five-months",
      "published": "2026-11-19T02:05:52+09:00",
      "title_ja": "OpenAIのモデルがAMDのGPU回路を再設計し14%の性能向上を実現",
      "summary_ja": "AIがAMDの主力GPU設計を改善し、電力効率・性能・面積で14%の利得を発見、製造へ。"
    },
    {
      "lab": "Hugging Face",
      "title": "Time-Series Models in the Streamhouse: A New Frontier and Use Cases",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse",
      "published": "2026-11-19T00:00:23+09:00",
      "title_ja": "Streamhouseにおける時系列モデル：新たなフロンティアとユースケース",
      "summary_ja": "データ基盤Streamhouse上で時系列モデルを活用する新技術と活用事例についての解説。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Microsoft's PyRIT 1.2.0 Brings Open-Source AI Red-Teaming to CLI and Browser",
      "summary": "PyRIT 1.2.0 combines a command-line scanner, a browser GUI and a Python attack framework, so teams can rerun the same AI red-team tests continuously.",
      "url": "https://alphasignal.ai/news/microsoft-s-pyrit-1-2-0-brings-open-source-ai-red-teaming-to-cli-and-browser",
      "published": "2026-11-18T23:00:31+09:00",
      "title_ja": "Microsoft、AIレッドチーミング用ツールPyRIT 1.2.0を公開",
      "summary_ja": "CLIやブラウザからAIの脆弱性テストを継続的に実行できるオープンソース枠組みが登場。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Open-Source Sellbird Runs AI Sales Outreach on a $7 Subscription",
      "summary": "Sellbird, an open-source AI sales agent that runs on a Claude or ChatGPT subscription you already pay for, is climbing GitHub's trending list with 6.4k stars.",
      "url": "https://alphasignal.ai/news/open-source-sellbird-runs-ai-sales-outreach-on-a-7-subscription",
      "published": "2026-11-18T21:03:40+09:00",
      "title_ja": "月額7ドルでAI営業を行うオープンソースのSellbird",
      "summary_ja": "既存のChatGPT等の契約で動作し、GitHubで注目を集めるAI営業エージェント。"
    },
    {
      "lab": "OpenAI",
      "title": "The Silent Consensus",
      "summary": "Dean Ball, Head of Strategic Futures at OpenAI, examines how more capable AI could reshape society and how people can retain control of their institutions.",
      "url": "https://openai.com/index/the-silent-consensus",
      "published": "2026-11-18T19:00:00+09:00",
      "title_ja": "沈黙のコンセンサス",
      "summary_ja": "AIの能力向上が社会をどう変えるか、人間がいかに制度の制御を維持すべきかを考察。"
    },
    {
      "lab": "OpenAI",
      "title": "Research acceleration: The jagged frontier",
      "summary": "OpenAI measures how coding agents are accelerating AI research, where their performance remains uneven, and what this signals about recursive self-improvement.",
      "url": "https://openai.com/index/research-acceleration-jagged-frontier",
      "published": "2026-11-18T17:00:00+09:00",
      "title_ja": "研究の加速：不均一なフロンティア",
      "summary_ja": "コーディングエージェントがAI研究をどう加速させ、再帰的自己改善にどう繋がるかを測定。"
    },
    {
      "lab": "OpenAI",
      "title": "How Sumitomo Life’s leaders helped teams adopt ChatGPT Enterprise",
      "summary": "Sumitomo Life uses ChatGPT Enterprise to research insurers, prepare proposals, and draft code for investment analysis. Early use by executives helped drive adoption.",
      "url": "https://openai.com/business/customer-stories/sumitomo-life",
      "published": "2026-11-18T17:00:00+09:00",
      "title_ja": "住友生命におけるChatGPT Enterprise導入の成功事例",
      "summary_ja": "保険リサーチや提案書作成、投資分析コード作成に活用。役員主導でチームへの普及を促進。"
    },
    {
      "lab": "OpenAI",
      "title": "Inside the Codex sandbox",
      "summary": "See how Codex runs commands on your machine while enforcing the filesystem and network limits you control across macOS, Linux, and Windows.",
      "url": "https://openai.com/index/inside-the-codex-sandbox",
      "published": "2026-11-18T17:00:00+09:00",
      "title_ja": "Codexサンドボックスの内部構造",
      "summary_ja": "OS間のファイルシステムやネットワーク制限を守りつつ、ローカルでコマンドを実行する仕組み。"
    },
    {
      "lab": "OpenAI",
      "title": "Managing frontier AI risk: From training to deployment",
      "summary": "OpenAI explains how it manages frontier AI risk from training through deployment with model alignment, sandboxing, blocking safeguards, and monitoring.",
      "url": "https://openai.com/index/managing-frontier-ai-risk",
      "published": "2026-11-18T15:00:00+09:00",
      "title_ja": "最先端AIのリスク管理：学習から展開まで",
      "summary_ja": "アライメントやサンドボックス、監視機能等を通じて最先端AIのリスクを管理する方法を解説。"
    },
    {
      "lab": "OpenAI",
      "title": "Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT",
      "summary": "Le Groupe Figaro and OpenAI partner to bring Le Figaro’s journalism to ChatGPT through summaries and excerpts, with links to original stories.",
      "url": "https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "Le Groupe FigaroとOpenAIが提携、ChatGPTで記事提供へ",
      "summary_ja": "Le FigaroのジャーナリズムをChatGPT上で要約や抜粋として提供し、原文へのリンクを設置。"
    },
    {
      "lab": "Hugging Face",
      "title": "180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers",
      "summary": "",
      "url": "https://huggingface.co/blog/moe-expert-streaming",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "180Bパラメータ、32GB RAM：MoE推論の限界への挑戦",
      "summary_ja": "Transformersを用いて、限られたメモリで巨大な混合エキスパートモデルを動かす技術。"
    },
    {
      "lab": "Hugging Face",
      "title": "Rumble-2-Flash: an open 0.5B speech model for 40+ languages",
      "summary": "",
      "url": "https://huggingface.co/blog/rumble-2-flash",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "Rumble-2-Flash：40言語以上に対応した0.5Bの軽量音声モデル",
      "summary_ja": "40以上の言語に対応し、高速動作を可能にするオープンな小型音声AIモデルを紹介。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・スケール可能な潜在3D表現",
      "summary_ja": "計算コストを抑えつつ、複雑な3D物体の詳細な造形を可能にする新しい潜在表現手法の提案。"
    },
    {
      "lab": "Hugging Face",
      "title": "Hugging Face and OpenRouter join forces to make open-weight models easy to run",
      "summary": "",
      "url": "https://huggingface.co/blog/openrouter",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "Hugging FaceとOpenRouterが提携、オープンモデルをより実行しやすく",
      "summary_ja": "両者の協力により、オープンウェイトのAIモデルの実行と利用の簡便化を目指す。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の進歩",
      "summary_ja": "教育イノベーションを通じ、科学や工学分野の発展を支援する取り組みについての紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの導入",
      "summary_ja": "GoogleがGemini 4シリーズのラインナップとして「Hydrogen」を新たに発表。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルアライメントの理論的限界",
      "summary_ja": "報酬改善とKLダイバージェンス制約の関係など、モデル調整における情報理論的な限界を特定。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブル端末によるCKMリスク評価と個別コーチング",
      "summary_ja": "心臓・腎臓・代謝（CKM）疾患のリスクをウェアラブルで可視化し、健康管理に役立てる手法。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：細胞がDNAを読み取る仕組みを解読し疾患を理解する",
      "summary_ja": "DNA配列の変化が特定の細胞や疾患にどう影響するかを予測し、疾患の理解を深める技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonが利用可能に",
      "summary_ja": "Googleの新しいAIモデル、Gemini 4 Carbonが一般向けに提供開始された。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの発表：複雑なソフトウェア検証の突破口",
      "summary_ja": "Signalの暗号化基盤を検証するため、AIがLean言語で300万行の証明コードを記述。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者を評価する：パーソナライズされた執筆スタイル評価におけるLLM判別器の調査",
      "summary_ja": "特定の書き方に従っているかをLLMが正しく判定できるか、その推論能力や性能を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "状態空間モデル（SSM）におけるゲート機構の重要性",
      "summary_ja": "Transformerに代わるSSMの成功と失敗の鍵が、文脈内学習や検索を支えるゲート機構にあると指摘。"
    }
  ]
};
