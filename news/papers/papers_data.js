window.papersData = {
  "updated_at": "2026-11-18 12:23 JST",
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
    },
    {
      "id": "2611.21079",
      "title": "SemiNovo: Learning Beyond Search-Identified Spectra for De Novo Peptide Sequencing",
      "url": "https://arxiv.org/abs/2611.21079",
      "pdf": "https://arxiv.org/pdf/2611.21079",
      "authors": [
        "Pan Liu",
        "Dongxin Lyu",
        "Yusen Tan",
        "Yifan Li",
        "Hai-tao Yu",
        "Yunhua Zhong"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [
        "KDD"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "13 pages. Accepted as an oral presentation at KDD 2027, AI for Sciences Track",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "SemiNovo：未同定のスペクトルからも学習する半教師ありペプチド配列解析",
      "what": "タンパク質解析におけるペプチド配列決定（DNPS）において、従来の「データベースで正解がわかっているデータ」だけでなく、正解のない膨大な未同定データ（DarkSpec）からも学習する半教師ありフレームワークです。質量制約付きの自己回帰デコードを用いて自己学習を行います。",
      "enables": "従来のデータベース検索に依存した学習データと、実際の解析現場で遭遇するデータの乖離を解消し、複数のベンチマークで既存の最新手法を上回る同定精度を達成しました。",
      "why_it_matters": "「既知のデータ」の枠を超えて、これまで捨てられていた「未同定のデータ」を学習リソースに変えることで、新種のタンパク質発見などの可能性を広げています。",
      "tags": [
        "バイオインフォマティクス",
        "半教師あり学習",
        "深層学習"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.21102",
      "title": "Beyond Family Labels: A Taxonomic Ornstein-Uhlenbeck Prior for Avian 3D Shape Recovery",
      "url": "https://arxiv.org/abs/2611.21102",
      "pdf": "https://arxiv.org/pdf/2611.21102",
      "authors": [
        "Yunchan Jeon",
        "SooGon Kim",
        "Seungwook Kim",
        "CheolWon Lee",
        "Jongmin Lee"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 (Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "鳥類の3D形状復元を改善する「分類学的OU事前分布」：系統樹の距離を学習に導入",
      "what": "単一画像からの鳥の3Dポーズ・形状復元において、生物学的な分類（系統樹）の距離に応じて相関が減衰するOrnstein-Uhlenbeck (OU) 過程に基づいた確率分布を事前分布として導入する手法です。リンネの分類階層を共分散行列に組み込みます。",
      "enables": "学習データが極めて少ない、あるいは未見の鳥類（Long-tail）の3D復元精度を大幅に向上させました。特に「科（Family）」を超えた高次の分類構造を利用することが、未見種への汎化に寄与することを示しました。",
      "why_it_matters": "深層学習の表現学習に、生物学的なドメイン知識（系統学）を幾何学的な制約として組み込むことで、データの希少性を克服しています。",
      "tags": [
        "コンピュータビジョン",
        "3D復元",
        "生物学応用"
      ],
      "fetched_at": "2026-11-18T12:23:38.335755+09:00"
    },
    {
      "id": "2611.18359",
      "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
      "url": "https://arxiv.org/abs/2611.18359",
      "pdf": "https://arxiv.org/pdf/2611.18359",
      "authors": [
        "Grid Robotics",
        ":",
        "Qingfeng Lan",
        "Duo Li",
        "Siyao Li",
        "Yiheng Lyu"
      ],
      "categories": [
        "cs.RO",
        "cs.AI",
        "cs.CL",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project website: https://grid-robotics-official.github.io/agentic-robotics-roadmap",
      "hf_upvotes": 116,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲116"
      ],
      "headline": "エージェント型ロボティクスの定義と実世界自律性へのロードマップ提示",
      "what": "基盤モデルとEmbodied Harnessを組み合わせた「Embodied System 2」を意思決定の核とする、Agentic Roboticsという新パラダイムを定義しています。観測、意図解釈、推論、スキル呼び出し、検証、適応のクローズドループ運用を重視し、物理的制約下での意思決定を議論します。",
      "enables": "デジタルエージェントの原則を物理世界に拡張するための評価フレームワークと研究ロードマップを確立しました。個別のタスクごとにポリシーを訓練するのではなく、オープンワールドで汎用的な推論を検証可能な行動に変換する指針を示しています。",
      "why_it_matters": "急速に発展するロボット基盤モデルに対し、共通の定義と安全性・信頼性を測るための指標を提供し、持続可能な自律性の実現を加速させます。",
      "tags": [
        "ロボティクス",
        "AIエージェント",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.18397",
      "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
      "url": "https://arxiv.org/abs/2611.18397",
      "pdf": "https://arxiv.org/pdf/2611.18397",
      "authors": [
        "Run Luo",
        "Kuan Zhang",
        "Qi Deng",
        "Yukun Chen",
        "Zhihao Yang",
        "Yufei Zhang"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.CV"
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
      "headline": "2D・3Dの境界を越えキーボード・マウス操作を学習した汎用VLAモデル",
      "what": "知覚、メモリ管理、多段階推論を統合したエンドツーエンドのフレームワークGamerを提案しています。数万時間のキーボード・マウス操作ログによる事前学習と、計算コストを抑えるSparse-thinking instruction tuning、安定した多ターン強化学習を特徴とします。",
      "enables": "複雑な3Dオープンワールドゲームにおいて熟練プレイヤーに匹敵する操作効率と汎化性能を実現しました。クラウド・エッジ推論エンジンにより、低レイテンシかつ無制限のコンテキスト実行を可能にしています。",
      "why_it_matters": "物理世界とデジタル世界の双方に共通する操作ログを活用することで、現実世界と仮想空間を横断して活動できる汎用エージェントの可能性を広げました。",
      "tags": [
        "VLAモデル",
        "強化学習",
        "ゲームAI"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.18482",
      "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
      "url": "https://arxiv.org/abs/2611.18482",
      "pdf": "https://arxiv.org/pdf/2611.18482",
      "authors": [
        "Sicheng Feng",
        "Zigeng Chen",
        "Song Wang",
        "Gongfan Fang",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Work in process, website: \\url{https://fscdc.github.io/MMFlash/}",
      "hf_upvotes": 36,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲36"
      ],
      "headline": "視覚依存度に応じた適応的サンプリングによるマルチモーダルLLMの高速化",
      "what": "推測デコード（Speculative Decoding）をVision-Language Model (VLM) に最適化するMMFlashフレームワークを提案しています。視覚入力への依存度が高いトークンの受容率が低いという発見に基づき、それらのトークンを適応的に重視して提案・検証します。",
      "enables": "多様なマルチモーダルベンチマークにおいて、可逆（lossless）なデコード速度を最大3.58倍向上させました。EAGLE-3やDFlashといった既存手法に対し、最大195.4%の速度向上を達成しています。",
      "why_it_matters": "VLM特有のトークン特性（視覚依存性）を定量的指標で明らかにし、それを利用して推論コストを削減する効率的なデコード手法を確立しました。",
      "tags": [
        "VLM",
        "推測デコード",
        "推論高速化"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    },
    {
      "id": "2611.17880",
      "title": "Soteria: Formally Verified Planning with Runtime Enforcement for Safe LLM Agents",
      "url": "https://arxiv.org/abs/2611.17880",
      "pdf": "https://arxiv.org/pdf/2611.17880",
      "authors": [
        "Mike He",
        "Ankush Desai",
        "Sharad Malik",
        "Aarti Gupta"
      ],
      "categories": [
        "cs.AI",
        "cs.SE"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as NeurIPS'26 Oral",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "形式検証済みプランニングによる安全性とタスク達成を両立するLLMエージェント",
      "what": "LLMエージェントの安全性を確保するためのフレームワークSoteriaを提案しています。ツール実行前に構造化されたプランを生成し、形式検証（Formal Verification）を行った上で実行し、実行時も検証済みプランが制約順守とエラー回復をガイドします。",
      "enables": "複数のベンチマークにおいて、制約違反ゼロを維持したまま、既存の最良手法の平均1.7倍というタスク成功率を達成しました。安全性を優先してエージェントが停止してしまう問題（Utilityの低下）を、検証済みプランによる代替経路の提供で解決しています。",
      "why_it_matters": "安全性（Safety）と有用性（Utility）のトレードオフを解消し、ミッションクリティカルな環境でのLLMエージェント活用に道を開く手法です。",
      "tags": [
        "LLMエージェント",
        "形式検証",
        "AI安全性"
      ],
      "fetched_at": "2026-11-17T13:22:22.906915+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.18359",
      "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
      "abstract": "The release of GPT-6 Astra marks the emergence of a new paradigm in robotics: agentic robotics. Within weeks, frontier models with agentic harnesses matched or exceeded task-specific policies on many embodied benchmarks. Instead of training a dedicated policy for each family of tasks, an agentic robotic system applies a foundation model to open-world embodied tasks. It operates in a closed loop: observing the environment, interpreting user intent, reasoning about the task, invoking skills and tools, verifying outcomes, and adapting its strategy. Despite these advances, the community has yet to converge on a shared definition, a reliable evaluation framework, or a research roadmap. We argue that Embodied System 2, realized by a foundation model together with an embodied harness, forms the decision-making core of agentic robotics. Its central challenge is to translate general-purpose reasoning into effective and verifiable actions under physical constraints such as limited reaction time, mechanical limits, unpredictable environment changes, and irreversible consequences. Motivated by this perspective, we propose an evaluation framework that measures both model capabilities and closed-loop system performance. Furthermore, we identify the principles that carry over from digital to physical agents and the challenges that must be addressed to achieve reliable physical autonomy. On top of the Embodied System 2 and the evaluation framework, we envision a research roadmap toward sustained autonomy: the ability to perform work safely and reliably with progressively broader responsibility, from executing individual primitives to fulfilling standing roles.",
      "upvotes": 126,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://grid-robotics-official.github.io/agentic-robotics-roadmap",
      "comments": 5,
      "org": "",
      "url": "https://huggingface.co/papers/2611.18359",
      "arxiv_url": "https://arxiv.org/abs/2611.18359",
      "title_ja": "エージェント・ロボティクスの展望：ロボットの新時代",
      "summary_ja": "基盤モデルを適用し、環境観察から適応までをクローズドループで行う新たなパラダイムを提案。"
    },
    {
      "id": "2611.18397",
      "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
      "abstract": "We introduce Gamer, a generalist agent framework built for long-horizon tasks in complex interactive environments. Its end-to-end architecture combines perception, memory management, and multi-step reasoning. A shared training and deployment pipeline supports interaction with both conventional 2D graphical interfaces and complex 3D simulated worlds. We first continue pre-training on a dataset constructed from tens of thousands of hours of device-level keyboard and mouse interaction. These trajectories span simulated games and embodied environments, allowing the model to learn environmental dynamics across both physical and virtual domains. Sparse-thinking instruction tuning then substantially reduces redundant computation while preserving the reasoning needed for complex decisions. We train the policy for long-horizon interaction with a stable multi-turn reinforcement learning method that addresses finite context windows, accumulated rollout errors, and sparse rewards. For real-time interaction, a cloud-edge inference engine serves numerous simulated game environments concurrently, supports unbounded-context execution, and keeps online inference latency low. Across multiple challenging 3D open-world games, Gamer demonstrates solid generalization and operational efficiency comparable to skilled players. It also achieves competitive results on a range of conventional 2D game benchmarks. These results suggest that even repetitive keyboard and mouse trajectories can support substantial gains from scaling data and learning algorithms. Training on these trajectories helps Gamer learn complex skills more steadily in environments with both physical and digital properties. This approach offers a path toward generalist agents that can interact across digital and physical worlds.",
      "upvotes": 122,
      "github_stars": 492,
      "github_repo": "https://github.com/RainBowLuoCS/Gamer",
      "project_page": "https://mihoyo-gamer.github.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.18397",
      "arxiv_url": "https://arxiv.org/abs/2611.18397",
      "title_ja": "Gamer：長時間リアルタイムゲームエージェントのための汎用VLAモデル",
      "summary_ja": "記憶管理と推論を統合し、2D UIと3Dシミュレーションの両方で動作するエージェント。 "
    },
    {
      "id": "2611.21072",
      "title": "Sage S2.1 Flash Technical Report",
      "abstract": "We introduce Sage S1.5 Flash, a 320-billion-parameter general-purpose mixture-of-experts model designed to reason over scientific evidence and act in interactive environments. Sage Sci-Perception uses dedicated encoders for molecular graphs and biological sequences and represents spectra as ordered patches of measurements. Modality-specific projectors map these representations into the input space of a shared backbone, which processes them alongside text and images. To develop the model's agent capabilities, we construct verifiable environments for tool use, search, and coding, as well as specialized workflows involving machine learning experiments and scientific software. Task completion is checked against execution results, changes in environment state, or submitted artifacts. We evaluate Sage S1.5 Flash on 33 benchmarks across seven domains. In the primary comparison against five baselines, it ranks first on OfficeQA Pro (72.2), MLE-bench Lite (90.3 HumanRank), Harvey LAB, and SpreadsheetBench~2, and second on OSWorld-Verified (85.2), WebArena-Verified (67.6), and DeepResearch Bench~II (54.2). These results show particular strengths in using documentary evidence, producing verifiable workbooks, and carrying out machine learning tasks, alongside competitive performance in desktop and browser workflows that require the model to act on visual feedback.",
      "upvotes": 89,
      "github_stars": 27,
      "github_repo": "https://github.com/InternLM/Sage-S2.1-Flash",
      "project_page": "https://internlm.github.io/Sage-S2.1-Flash/",
      "comments": 4,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2611.21072",
      "arxiv_url": "https://arxiv.org/abs/2611.21072",
      "title_ja": "Sage S2.1 Flash 技術レポート",
      "summary_ja": "科学的証拠の推論と実験ツール操作に特化した、3200億パラメータのMoEモデル。"
    },
    {
      "id": "2611.15789",
      "title": "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender",
      "abstract": "Controllable real-world video generation models can condition on a rendered graybox proxy video, which fixes layout, motion and camera. Coding agents can build such videos by reconstructing a 4D scene in Blender, yet no benchmark checks both these videos and the long, multi-shot scenes behind them. We introduce VibePrevisBench, a benchmark for 4D scene reconstruction: an agent turns a brief into an executable 4D scene and renders its proxy video. Its 242 tasks span four input kinds, including scripts, photos, continuations, and reference videos. Each delivery is scored along two evaluation dimensions. Rule-based Scene Check re-runs the code and compares the exported 4D scene with hidden ground truth facts in nine dimensions. VLM-based Screen Check asks a VLM judge whether the facts that pass can be recognized in the proxy video. We analyze the evaluation results and trajectories of 11 frontier coding agents and identify three key observations. First, multimodal understanding separates the agents, especially in understanding space and camera motion. Second, all agents seem to already master basic camera work and staging, and fail at challenging requests. Third, agents inspect their own renders but fail to correct their errors. Agents thus need better visual understanding of space and camera, explicit checks for challenging requests, and item-by-item verification of renders against the brief.",
      "upvotes": 88,
      "github_stars": 15,
      "github_repo": "https://github.com/vibeprevisbench/vibeprevisbench",
      "project_page": "https://vibeprevisbench.github.io/",
      "comments": 3,
      "org": "Kling-Keye",
      "url": "https://huggingface.co/papers/2611.15789",
      "arxiv_url": "https://arxiv.org/abs/2611.15789",
      "title_ja": "VibePrevisBench：Blenderによる4Dシーン生成エージェントの評価",
      "summary_ja": "指示から実行可能な4Dシーンを構築する能力を、コード実行と可視化の両面で測定する。 "
    },
    {
      "id": "2611.15777",
      "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
      "abstract": "System One models promise fast, general-purpose decision-making without lengthy token generation. However, understanding their capability spectrum and decision reliability requires more than aggregate performance on current benchmarks. Existing evaluations often provide limited insight into the breadth of model capabilities and the reliability of their decisions. We introduce SO-Arena, a benchmark characterizing the capability spectrum and decision reliability of System One models across 11 domains and five capability families. For the capability spectrum, SO-Arena offers evidence-grounded evaluation through reliable sources and manual verification of reference labels against model-visible inputs; fine-grained capability assessment through domain-specific difficulty criteria; and realistic interactive evaluation, where models iteratively execute actions in sandboxes. Reasoning-intensive tasks further enable system one-two comparison. Beyond accuracy, SO-Arena assesses decision reliability through two complementary measures: decision stability under controlled option-set changes and missing-answer recognition when no valid option is available. Evaluations across 21 models reveal that the benefits of scaling and additional reasoning vary substantially across domains. More importantly, strong overall performance does not necessarily imply reliable decision-making: the best-performing System One model ranks only seventh in reliability. Together, these findings highlight the need to characterize capability spectrum and decision reliability as complementary dimensions, providing a systematic view of the strengths and limitations of System One models.",
      "upvotes": 80,
      "github_stars": 26,
      "github_repo": "https://github.com/holdrain/SO-Arena",
      "project_page": "https://lichenlillc.github.io/SO-Arena",
      "comments": 5,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.15777",
      "arxiv_url": "https://arxiv.org/abs/2611.15777",
      "title_ja": "SO-Arena：System 1モデルの能力範囲と信頼性のベンチマーク",
      "summary_ja": "高速な意思決定を行うSystem 1モデルの、11領域における信頼性と能力を多角的に評価。"
    },
    {
      "id": "2611.21003",
      "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
      "abstract": "We present K2-Horizon, a fleet of six fully open language models, from a 0.9B dense model to a 375B-A23B MoE, built for general-purpose reasoning and agentic work across math and science, software engineering, deep research, office automation, and beyond. The models lead or are competitive with strong open models of their size on agentic and coding benchmarks. On the modeling side, to strengthen reasoning, we introduce Mixture-of-Value Attention (MoVA), applying MoE to attention value projections, and softplus attention gating, a more flexible, theoretically motivated gate. Our 36B-A4B model uses both and nearly matches a 32B dense model trained on the same data, with one-seventh the active parameters. We also introduce Uno, lossless diffusion adapters that speed up decoding by up to 2.2x without a separate draft model. Our release follows the LLM360 definition of open source for transparency and reproducibility: the full development history, including intermediate checkpoints from every training stage, pre-training data, training logs, and all training, evaluation, and infrastructure code, notably our production-scale xLLM framework for dense and MoE training and the RL360 reinforcement-learning stack. Beyond the data itself, we release and document in detail every pipeline that built it, the part of model development that open releases most rarely disclose. These pipelines produced roughly 10T synthetic pre-training tokens, showing that synthetic data can be a major ingredient of pre-training at scale. Four of the models share one 22T-token pre-training corpus and recipe, revealing consistent scaling behavior and enabling controlled studies of scale and sparsity. All artifacts are available at https://ifm.ai/k2/",
      "upvotes": 73,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ifm.ai/k2/",
      "comments": 2,
      "org": "Institute of Foundation Models",
      "url": "https://huggingface.co/papers/2611.21003",
      "arxiv_url": "https://arxiv.org/abs/2611.21003",
      "title_ja": "K2-Horizon：オープンソース言語モデルの最前線フリート",
      "summary_ja": "MoVA等の新技術を導入し、研究や事務作業等のエージェント業務に長けたオープンモデル群。"
    },
    {
      "id": "2611.19937",
      "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
      "abstract": "Real-world portfolio management requires converting noisy market observations into coordinated, simultaneous allocations across multiple assets under shared capital constraints. Advances in forecasting models and alpha discovery help identify opportunities. However, traditional pipelines often decouple signal forecasting from portfolio construction, potentially misaligning learning with allocation and execution objectives. We present AllocFlow, an end-to-end flow-matching framework that directly generates joint portfolio allocations from raw multi-asset market histories. To capture dependencies among portfolio positions, AllocFlow employs a cross-asset flow Transformer conditioned on temporal market representations to generate continuous, signed position weights across all instruments jointly. To address the sample inefficiency and instability of learning continuous allocation policies from scratch, we establish a two-stage training scheme: strategy-supervised imitation shapes a structured distribution of candidate portfolios, followed by group-relative reinforcement learning (RL) that refines joint decisions using portfolio-level financial rewards and a frozen policy reference. On hourly cryptocurrency perpetual futures, RL refinement raises the annualized net return of the imitation policy from 27.79% to 51.38% and its Calmar ratio from 0.955 to 4.043, surpassing the teacher strategy on every metric, and AllocFlow reaches a Calmar ratio of 4.90 on six further months of unseen 2026 data without retraining.",
      "upvotes": 68,
      "github_stars": 18,
      "github_repo": "https://github.com/allocflow/AllocFlow",
      "project_page": "https://allocflow.github.io/",
      "comments": 4,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.19937",
      "arxiv_url": "https://arxiv.org/abs/2611.19937",
      "title_ja": "AllocFlow：生データからのエンドツーエンドなポートフォリオ取引生成",
      "summary_ja": "予測と構築を分離せず、複数資産の配分を市場履歴から直接生成するフロー整合フレームワーク。"
    },
    {
      "id": "2611.21218",
      "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
      "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
      "upvotes": 65,
      "github_stars": 38,
      "github_repo": "https://github.com/panuvi/inclusionmed",
      "project_page": "https://inclusionmed.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.21218",
      "arxiv_url": "https://arxiv.org/abs/2611.21218",
      "title_ja": "InclusionMed：包括的なヘルスケアに向けたAIベンチマーク",
      "summary_ja": "多様な役割と能力をカバーするオープンな評価基盤により、医療AIの包括性を測定する。"
    },
    {
      "id": "2611.07222",
      "title": "SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection",
      "abstract": "Tool-using agents act on email, files, and payments, so an instruction hidden in a web page or a shared document can make an agent send data or money to an attacker. Many runtime defenses put a language model on the decision that lets an action through, so the decision depends on a model that may read the attacker's text and adds model calls to every step. Provenance defenses keep the model off the final check but need a model to plan or route each task first. Where an action goes can instead be read from the tools' typed returns: an email's sender or a payment's account arrives in a typed field, while injected instructions arrive as free text. SPILLWAY turns this observation into a deterministic floor with no per-task plan. The check admits a call when each target value that appears in tool output but not in the user's task was returned by a read-only tool in a typed field or is covered by a fixed delegation rule. A deterministic sanitizer removes instruction-like regions its fixed rules match before the model reads them and retains the removed spans as evidence, and a local judge may restore a refused call, never one whose target lies in the removed text. Across three backbones, and seven task suites on one of them, no standard templated injection redirects an action to an attacker's target under SPILLWAY, at the highest observed mean utility and composite scores (NRP, ERS) of the defenses we run under that attack. A forged chat template also produces a raw zero, and mean in-scope attack success under a released reinforcement-learning attacker is .007. SPILLWAY reaches this floor with no defense-triggered backbone re-run and almost no added model call. As personal AI agents act on users' email, files, and payments, SPILLWAY gives them an auditable refusal floor on where their actions go that keeps them useful and holds across backbones.",
      "upvotes": 56,
      "github_stars": 2,
      "github_repo": "https://github.com/saintmachines/spillway",
      "project_page": "https://saintmachines.github.io/spillway/",
      "comments": 2,
      "org": "SAINT Machines",
      "url": "https://huggingface.co/papers/2611.07222",
      "arxiv_url": "https://arxiv.org/abs/2611.07222",
      "title_ja": "SPILLWAY：ツール利用エージェントをプロンプトインジェクションから守る防御手法",
      "summary_ja": "型付けされた戻り値に基づき、モデルを介さず決定論的に宛先の正当性を検証して攻撃を防ぐ。"
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
      "title_ja": "BirdDreams：一貫性のある反応的な走行環境のための視点・BEV動画生成",
      "summary_ja": "視点映像と鳥瞰図映像を同時生成し、周囲の車両運動と自車制御を両立させる世界モデル。"
    },
    {
      "id": "2611.12068",
      "title": "MIRIX-2.0: Multi-Agent Memory System",
      "abstract": "Long-term memory lets LLM agents personalize, stay consistent, and reuse what worked before. Parametric memories need training, consolidation can lose details for good, and keeping every record leaves a growing store to search. We present MIRIX-2.0, a multi-agent memory system designed to be practical, accurate, and efficient at once. It is the most accurate of the compared systems on four of five QA benchmarks. It reaches 91.4% on LoCoMo and 72.6% on LongMemEval-S, where it leads the strongest baseline by 14.3 points, and with AutoDream disabled it gains 31.0 and 22.0 points over HyperMem on single-hop and multi-hop document QA. As procedural memory, it yields the highest mean success among the compared memory methods on ALFWorld and WebShop and reaches 49.2% on MetaClaw-Bench, against 44.0% for MetaClaw's skill library. Six typed memory agents keep complete records as the system of record, and a provenance hypergraph indexes episodic and semantic records with n-ary frames that cite their rows. Retrieval runs under explicit budgets, so the evidence a question inspects does not grow with the history. AutoDream merges duplicate anchors outside the write path without rewriting any record, and it distills task sessions into skills. With AutoDream disabled, MIRIX-2.0 answers faster than HyperMem on all five timed benchmarks. It needs no fine-tuning, runs with closed and open models, and its code is public.",
      "upvotes": 52,
      "github_stars": 3493,
      "github_repo": "https://github.com/Mirix-AI/MIRIX",
      "project_page": "https://mirix.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.12068",
      "arxiv_url": "https://arxiv.org/abs/2611.12068",
      "title_ja": "MIRIX-2.0：マルチエージェント・メモリシステム",
      "summary_ja": "記憶を実用的かつ高精度に管理し、長期的なパーソナライズと文書QAで高い成功率を実現。"
    },
    {
      "id": "2610.40394",
      "title": "Scaling Mathematical Proof Supervision from Structured Textbooks",
      "abstract": "Mathematical supervision for language models is typically flattened into isolated problem-solution pairs, discarding the curricular organization and evidential structure of the original sources. We introduce TOME-Math (Textbook-Oriented Mathematical Evidence), a large-scale corpus that converts 2,118 textbooks spanning the core areas of university-level mathematics subjects into approximately 380K structured proof-supervision records while preserving chapter order, proposition-proof links, dependency references, and source provenance. Leveraging these structural signals, we explore curriculum learning across multiple mathematical subjects and characterize scaling patterns with supervision volume and source breadth. At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate. Our findings highlight structured textbooks as both a scalable source of mathematical supervision and an empirical framework for studying the impact of data organization on mathematical reasoning. We will release the corpus to facilitate further research on structured mathematical supervision.",
      "upvotes": 50,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tome-math.github.io/",
      "comments": 3,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.40394",
      "arxiv_url": "https://arxiv.org/abs/2610.40394",
      "title_ja": "構造化された教科書による数学的証明学習のスケールアップ",
      "summary_ja": "大学レベルの教科書から章の順序や依存関係を保った38万件の証明学習データを構築。"
    },
    {
      "id": "2611.15131",
      "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
      "abstract": "In this report, we introduce the Reciprocal World Model (RWM) and present Duo v1, a full-duplex world model that continuously perceives audiovisual inputs while responding to users in real time. The RWM treats intelligence and physical reality as equally fundamental to what constitutes a world. Existing world models largely focus on simulating the latter, leaving reasoning and decision-making as external controls rather than intrinsic parts of the world itself. In RWM, we identify two equally fundamental capabilities: Intent, which provides the cognition underlying world interactions, and Realization, which generates coherent audio-visual behavior. To realize this formulation, Duo v1 introduces three key technical designs: (1) Leveraging autoregressive modeling for continuous interaction reasoning and participation decisions, rather than restricting it to instruction understanding for diffusion models. (2) Constructing chunk-specific conditions and synchronize tokens across Intent and Realization on a unified timeline. Module-specific attention masks enforce causal dependencies both within and across chunks, preventing access to future inputs. (3) Mitigating distribution shift in both modules through dual rollout distillation, training on autoregressively generated Intent tokens and synthesized audiovisual histories from Realization. Both modules continuously perceive real-time audio, video, and text, enabling full-duplex interaction with spontaneous conversations and interruptions. Beyond conversation, users can share real objects, reshape virtual scenes, guide assistants, or play audiovisual games without mouse or keyboard controls. The release of Duo v1 makes our first step, with the next version coming soon. We look forward to broader exploration of this emerging field.",
      "upvotes": 47,
      "github_stars": 117,
      "github_repo": "https://github.com/inclusionAI/Duo",
      "project_page": "https://duo-v1.github.io/",
      "comments": 3,
      "org": "inclusionAI",
      "url": "https://huggingface.co/papers/2611.15131",
      "arxiv_url": "https://arxiv.org/abs/2611.15131",
      "title_ja": "Duo：フルデュプレックス対話のための相互世界モデル",
      "summary_ja": "意図（認知）と実現（視聴覚生成）を統合し、リアルタイムでの同時対話を実現するモデル。"
    },
    {
      "id": "2611.20218",
      "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
      "abstract": "A coding agent working within a software organization must establish what to build, collaborate with colleagues, and verify what it delivers. We introduce SWE-CoWork, a benchmark comprising 101 development assignments across 101 real repositories, 11 programming languages, and 12 application domains. Each assignment places an agent in a simulated engineering organization with 26 colleagues who have distinct responsibilities, bounded knowledge, and controlled collaboration behavior. Starting from a brief handoff, agents must recover requirements distributed across colleagues and workplace records, reconcile conflicting evidence, and implement changes evaluated by private executable tests. We evaluate eleven models and find a substantial gap between partial implementation and complete task delivery. The two leading models satisfy approximately 63% of fail-to-pass (F2P) tests but complete fewer than 8% of assignments. Providing complete requirements upfront improves F2P by approximately 16 percentage points for Seed Evolving and GPT-6 Astra, yet leaves complete task success unchanged. Requirement-level trajectory analysis reveals failures throughout the delivery process: Claude-Opus-5.5 directs a mean of 93% of first questions about queried cards to their accountable owners across runs but obtains only 64% of colleague-held requirements. Deferred questions go unfollowed, implementations remain incomplete even after requirements are acquired, and 31% of requirements reported as completed fail their tests. These findings highlight sustained requirement tracking, from clarification through implementation, verification, and handoff, as a key challenge for reliable autonomous software engineering.",
      "upvotes": 46,
      "github_stars": 7,
      "github_repo": "https://github.com/TokenWave-AI/swe-cowork-bench",
      "project_page": "https://tokenwave-ai.github.io/swe-cowork-page",
      "comments": 4,
      "org": "Tokenwave.AI",
      "url": "https://huggingface.co/papers/2611.20218",
      "arxiv_url": "https://arxiv.org/abs/2611.20218",
      "title_ja": "SWE-CoWork：組織内デジタル従業員としてのコーディングエージェント評価",
      "summary_ja": "同僚との協力や要件の回収が必要な環境で、エージェントの開発遂行能力を測定する。"
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
      "title_ja": "G-STAR：深層圧縮型自己回帰生成のためのグループスケール・トークン容量",
      "summary_ja": "空間圧縮率に合わせたグループサイズ調整により、高圧縮と高品質な画像生成を両立させる。"
    },
    {
      "id": "2611.16748",
      "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
      "abstract": "Video generation models produce visually realistic videos but still struggle with physical dynamics and causal consistency. Learning from generated videos requires fine-grained physical supervision, yet reliable quality judgments, correction pairs, and controlled variations are difficult to obtain. Large language models (LLMs) possess physical knowledge, but struggle to reliably guide video generation models in producing their training videos. We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models. The harness guides and constrains LLMs throughout video generation, selection, and correction, distilling their physical knowledge into physically consistent videos. The framework supports controllable training-data construction and inference-time video repair. By identifying and correcting failures, PhysLoop marks a key milestone toward recursive self-improvement (RSI) in video generation models with limited human intervention. We release 100K videos spanning diverse, realistic indoor and outdoor scenes, along with generation tools and two evaluation datasets: PhysLoop-Gen and PhysLoop-Repair. We evaluate controllable generation and localized repair on these datasets, respectively, and assess physical behavior on the external Physics-IQ Verified benchmark.",
      "upvotes": 42,
      "github_stars": 41,
      "github_repo": "https://github.com/DAGroup-PKU/PhysLoop",
      "project_page": "https://chenyx24.github.io/PhysLoop-site/",
      "comments": 4,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.16748",
      "arxiv_url": "https://arxiv.org/abs/2611.16748",
      "title_ja": "PhysLoop：物理知識を活用した自己改善型動画生成モデル",
      "summary_ja": "LLMの物理的知識を動画の生成・選択・修正の指針として蒸留し、物理的な正確性を向上。"
    },
    {
      "id": "2611.21607",
      "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
      "abstract": "Frontier Vision-Language Models (VLMs) such as GPT-6 Astra have demonstrated remarkable capabilities in robot control, suggesting that broad pretraining provides knowledge valuable for physical action. Yet most Vision-Language-Action (VLA) policies still rely on much smaller VLM backbones, leaving this potential largely untapped. We ask whether frontier-scale representations can provide a stronger foundation for robot learning. We introduce ScaleVLA, which connects a 552B DeepSeek-V4.1-Flash backbone to a trainable action DiT, and systematically compare VLMs from 2B to 552B under a shared training setup. We evaluate three fundamental capabilities of robot foundation models. In sample efficiency, just 10 demonstrations outperform a 2B backbone trained with 50 (87.8% vs. 85.6%). In generalization, LIBERO-PRO success reaches 45.1%, compared with at most 31.3% for smaller backbones. In precise manipulation, real-world charger insertion improves from 4/10 to 9/10 successes, with gains concentrated in contact-sensitive alignment. Despite its scale, ScaleVLA achieves 216 ms median latency per action chunk. Our findings suggest that frontier VLMs can serve not only as reasoning agents, but also as powerful representational foundations for efficient and generalizable robot policies.",
      "upvotes": 41,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://galaxygeneralrobotics.github.io/scalevla/",
      "comments": 1,
      "org": "galbot",
      "url": "https://huggingface.co/papers/2611.21607",
      "arxiv_url": "https://arxiv.org/abs/2611.21607",
      "title_ja": "ScaleVLA：視覚・言語・行動モデルを5520億パラメータに拡張",
      "summary_ja": "巨大VLMを基盤とすることで、ロボット学習のサンプル効率と汎化性能が向上することを実証。"
    },
    {
      "id": "2611.15844",
      "title": "Open Vision Banana: A Fully Open Recipe for Generative Visual Perception",
      "abstract": "Recent work suggests that pretrained image generators encode real-world understanding beyond image synthesis. Vision Banana exploits this by framing vision tasks as conditional image editing. However, its data, weights, code, and implementation details are not public. We present Open Vision Banana (OVB), a fully open and reproducible recipe for converting pretrained generators into unified multi-task perception systems. Our analyses identify the design choices that matter most for generalization, including color encoding, prompt design, parameter adaptation, and task balancing. These choices interact, so individually helpful choices can hurt when combined with others. Starting from 4B and 9B parameter open-weight base models and using 2.1M-3.8M training pairs from public datasets, OVB surpasses Vision Banana's reported Cityscapes zero-shot performance (73.9 vs. 69.9 mIoU) and rivals state-of-the-art affine-invariant depth estimators. Its non-zero-shot variants come within five points of Vision Banana on referring and reasoning segmentation but remain further behind on instance segmentation. All models largely retain the base model's image-editing abilities. With legend ensembling, we introduce a test-time scaling method for generator-based perception. It segments an image under several class-color legends and fuses the results by majority vote, correcting unstable color-class bindings and improving mIoU by up to 8.7 points on Cityscapes and 15.0 points on COCO-Object without retraining. We release the dataset construction and processing pipeline, the training and evaluation code, as well as the final, intermediate, and ablation checkpoints. Project website: https://openvisionbanana.github.io",
      "upvotes": 40,
      "github_stars": 84,
      "github_repo": "https://github.com/OpenVisionBanana/OpenVisionBanana",
      "project_page": "https://openvisionbanana.github.io/",
      "comments": 3,
      "org": "Fundamental AI Lab at UTN",
      "url": "https://huggingface.co/papers/2611.15844",
      "arxiv_url": "https://arxiv.org/abs/2611.15844",
      "title_ja": "Open Vision Banana：生成型視覚認識のための完全オープンレシピ",
      "summary_ja": "画像生成モデルを多タスク視覚認識システムに変換する、再現可能な設計と手法を公開。"
    },
    {
      "id": "2611.13410",
      "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
      "abstract": "Low-bit quantization reduces the inference cost of LLM agents but can compromise task success. Examining failed rollouts, we find that quantized agents overlook task requirements or environmental conditions, producing environment transitions that diverge from successful full-precision references. Correcting these behavioral divergences remains difficult: offline data may miss the student's failure contexts, while its own rollouts may provide few correct responses in those contexts. We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution. This closed-loop teacher steering produces locally verified behavioral corrections. We internalize these corrections by training the student without guidance to match the steered student's predictions at corrected turns and the full-precision teacher's at other turns, enabling unassisted inference. Across five agentic benchmarks and three models, SteerDistill exceeds the strongest quantized baseline by 1.67--2.18 points in average score under W4A16 and stays within one point of BF16. On τ^2-Bench, it outperforms QeRL by 1.84 percentage points in success rate using 67% fewer training GPU hours and produces shorter successful trajectories than the quantized baselines.",
      "upvotes": 39,
      "github_stars": 14,
      "github_repo": "https://github.com/air-embodied-brain/SteerDistill",
      "project_page": "https://air-embodied-brain.github.io/SteerDistill",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.13410",
      "arxiv_url": "https://arxiv.org/abs/2611.13410",
      "title_ja": "SteerDistill：クローズドループ教師ガイダンスによるエージェントの量子化",
      "summary_ja": "教師モデルが学生の失敗を修正・指導することで、低ビット化による性能低下を抑える手法。"
    },
    {
      "id": "2611.18482",
      "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
      "abstract": "Speculative decoding accelerates generation by letting a lightweight drafter propose tokens for parallel verification by a target model. Diffusion drafters such as DFlash propose an entire token block in a single forward pass, but mainly focus on text-only tasks, leaving multimodal drafting underexplored. To study this setting, we first introduce a metric of token-level visual dependence based on the KL divergence between next-token distributions with and without visual input. We find that acceptance rates decrease from 46% in the lowest visual-dependence quartile to 22% in the highest, with this disparity persisting after multimodal training. Motivated by this observation, we propose MMFlash, a simple and effective framework that adaptively upweights visually dependent tokens that the drafter predicts poorly. For long video inputs, MMFlash further employs sparse attention to reduce redundant attention computation and improve drafting quality. Across various multimodal benchmarks, MMFlash achieves lossless decoding speedups of up to 3.58times, outperforming EAGLE-3 and DFlash by up to 195.4% and 17.1%, respectively.",
      "upvotes": 38,
      "github_stars": 39,
      "github_repo": "https://github.com/fscdc/MMFlash",
      "project_page": "https://fscdc.github.io/MMFlash/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.18482",
      "arxiv_url": "https://arxiv.org/abs/2611.18482",
      "title_ja": "MMFlash：視覚言語モデルのための高速な投機的デコーディング",
      "summary_ja": "視覚依存度に基づくドラフト作成により、マルチモーダル環境下でのデコード速度を向上。"
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
      "title_ja": "Actor, Judge, or Teacher?：長時間エージェントにおける意思決定モデルの理解",
      "summary_ja": "行動が不得手なモデルでも、強化学習の教師役（報酬付与）としては有用になり得ることを解明。"
    },
    {
      "id": "2610.39671",
      "title": "Incentivizing Self-Learning in Large Language Models via Reinforcement Learning",
      "abstract": "Large language models (LLMs) draw on parametric knowledge and retrieval-augmented generation (RAG) to solve knowledge-intensive tasks. Yet problem solving in unfamiliar domains calls for tightly coupled knowledge acquisition and reasoning, beyond factual retrieval and aggregation or learning solely from a preassembled context. We study self-learning -- autonomously retrieving, studying, and applying knowledge from long-form reference materials on the fly. To investigate this capability, we formulate a textbook-based mathematical problem-solving task. LLMs must navigate textbook exposition, learn and apply relevant principles, and construct proofs for exercises, with reference solutions withheld. We introduce a BookNavigator interface to support this human-inspired study process and incentivize self-learning through reinforcement learning (RL) with fine-grained rewards. Experiments show that our method improves performance across in-domain and out-of-domain textbooks and subjects, raising Intern-S2-Preview-35B's overall proof accuracy from 51.5% to 79.5% and outperforming RL-trained textbook-free and fixed-retrieval baselines. These gains extend to complex long-context benchmarks involving different task types, with improvements over the base model of 1.7 and 2.3 percentage points on BrowseComp-Plus and CL-bench, respectively. Together, these findings suggest that RL can foster a domain-agnostic self-learning strategy, highlighting the potential of self-learning from long-form corpora to strengthen broader problem-solving capabilities on complex, long-context tasks.",
      "upvotes": 37,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 8,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.39671",
      "arxiv_url": "https://arxiv.org/abs/2610.39671",
      "title_ja": "強化学習による大規模言語モデルの自己学習促進",
      "summary_ja": "未知の領域で教科書から自律的に知識を習得し、問題解決に適用する能力を強化学習で向上。"
    },
    {
      "id": "2611.12901",
      "title": "Rethinking in Spikes: Mitigating Hallucinations in MDLMs with Step-Aware Decoding",
      "abstract": "Recent advancements in multimodal diffusion language models (MDLMs) have exhibited strong global modeling capabilities through iterative refinement. We observe that mask uncertainty follows an overall downward trend during iterative denoising, while a few denoising steps exhibit localized entropy spikes closely associated with hallucinations. We argue that anomalous steps can be identified by measuring the entropy deviation of each denoising step from its neighboring temporal window. We hypothesize that discrete token commitment discards the distributional information at masked positions, limiting the continued interaction between candidate semantics and the context during entropy spikes. With this goal, we present StepRefine, a plug-and-play decoding strategy that leverages semantic context to achieve reliable denoising. The core of our method lies in a step-aware switch between discrete denoising and latent refinement. The model employs probability-weighted embeddings at entropy spike steps to preserve diverse reasoning hypotheses and performs multiple rounds of continuous refinement. Meanwhile, a refinement controller monitors distributional stability to reduce unnecessary loops and switch the model back to standard discrete denoising. Through extensive experiments, StepRefine demonstrates significant hallucination mitigation across different MDLMs on multimodal benchmarks.",
      "upvotes": 36,
      "github_stars": 20,
      "github_repo": "https://github.com/mdlm-steprefine/mdlm-steprefine",
      "project_page": "",
      "comments": 3,
      "org": "Cornell University",
      "url": "https://huggingface.co/papers/2611.12901",
      "arxiv_url": "https://arxiv.org/abs/2611.12901",
      "title_ja": "Rethinking in Spikes：ステップ認識デコーディングによるMDLMのハルシネーション抑制",
      "summary_ja": "ノイズ除去中のエントロピー急増を検知し、分布情報を保持することで誤生成を軽減する。"
    },
    {
      "id": "2611.17060",
      "title": "Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors",
      "abstract": "Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. Language models have advanced along well-characterized scaling laws; the corresponding question for physical AI is how capability scales with environments and behaviors, which first requires identifying which data to scale and how to produce and reuse such data continuously. To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours). We further show that each capture can be repurposed for robot learning: scenes are converted into physically interactive simulation environments, human motion is retargeted to whole-body robot trajectories, and additional robot behaviors are obtained through virtual teleoperation and automated long-horizon trajectory generation. We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors.",
      "upvotes": 36,
      "github_stars": 32,
      "github_repo": "https://github.com/Ropedia/Ropedia-Xperience-2",
      "project_page": "https://ropedia.com/xperience/2-research/",
      "comments": 7,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2611.17060",
      "arxiv_url": "https://arxiv.org/abs/2611.17060",
      "title_ja": "Ropedia Xperience 2：物理AI環境と行動のスケーリング指標",
      "summary_ja": "物理AIの能力向上に必要な人間行動データと、評価用の対話型環境の最適な比率を研究。"
    },
    {
      "id": "2611.05984",
      "title": "On the Design of Hyper-Connections: Simplification, Stability, and Scalability",
      "abstract": "Hyper-Connections (HC) architectures are increasingly adopted in frontier language models, yet their components remain insufficiently understood and introduce non-negligible training overhead. In this work, we systematically study the HC architecture to understand its components and identify simpler, more efficient designs. We find that learned read/write gating without mixing and unconstrained mixing with fixed gates form two effective interaction groups: either alone achieves performance comparable to mHC. We also identify repeated access to the expanded residual state as a major source of training overhead, even without mixing. These findings lead to SimpleHC, which simplifies the architecture by removing residual mixing and simplifies execution through shared memory access, using the resulting additive structure and shared gate inputs. Layer-specific gates share a group-entry state, enabling batched reads and deferred writes; scalar corrections exactly preserve preceding sublayer output contributions. Our analyses support both the retained residual structure and the design of shared memory access. SimpleHC incurs only 2.4% extra end-to-end training time over a vanilla residual baseline at the largest tested scale. It maintains performance comparable to mHC when scaling from 15B to 30B MoE models, exhibits smoother gradient dynamics during standard training, and remains stable under stress. We hope SimpleHC will encourage a broader pursuit of simplicity in foundation model design, making performance gains more accessible and practical at scale.",
      "upvotes": 31,
      "github_stars": 21,
      "github_repo": "https://github.com/aHapBean/SimpleHC",
      "project_page": "",
      "comments": 4,
      "org": "dots studio",
      "url": "https://huggingface.co/papers/2611.05984",
      "arxiv_url": "https://arxiv.org/abs/2611.05984",
      "title_ja": "ハイパーコネクションの設計：簡素化、安定性、スケーラビリティ",
      "summary_ja": "学習の負荷となっていた構成要素を整理し、同等の性能を維持しつつ効率的な設計を提案。"
    },
    {
      "id": "2611.17834",
      "title": "PaperCritic: Training AI Reviewers to Assess the Soundness of Papers",
      "abstract": "As AI conference submissions grow rapidly, AI reviewers are being considered as an alternative. However, simply imitating human reviewing is problematic because reviewing serves multiple purposes, including evaluating papers' soundness, interestingness, and clarity, the last two of which are subjective. In this work, we focus solely on evaluating soundness, the most important and objective criterion, and define the learning objective as jointly maximizing (1) precision, based on the soundness and substantiveness of review points, and (2) recall, the coverage of high-quality reference review points. Under this problem formulation, we construct a quality-labeled review point dataset, PaperSound-23K, using 1K ICLR submissions and 23K human-written and LLM-generated review points. Using this dataset, we train an AI reviewer model, PaperCritic, through reinforcement learning with the F1 score of precision and recall as the reward. Our experiments show that PaperCritic outperforms frontier models and models trained with other AI reviewer training methods on an in-domain test set. Surprisingly, learning to review ICLR submissions also transfers to reviewing Nature-family papers and even to out-of-domain reviewing tasks (e.g., code review, legal contract review, and feedback on story writing).",
      "upvotes": 28,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.17834",
      "arxiv_url": "https://arxiv.org/abs/2611.17834",
      "title_ja": "PaperCritic：論文の妥当性を評価するAI査読者の訓練",
      "summary_ja": "客観的な妥当性の評価に焦点を絞り、適合率と再現率を最大化するようにAI査読者を訓練。"
    },
    {
      "id": "2611.17331",
      "title": "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models",
      "abstract": "Decoder-only Large View Synthesis Models (LVSMs) with KV-cache have recently achieved state-of-the-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test-Time Training (TTT) layers save computation but sacrifice quality. We propose Test-Time Baking (TTB), a strategy that learns to bake global scene information from cross-view attention into a lightweight MLP, enabling fast and high-fidelity novel-view decoding. The first key is to repurpose the fast-weight MLP of TTT to learn the cross-view attention mapping explicitly from its input-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality. The second key addresses a modality misalignment between context prefilling and novel-view rendering: we disentangle context tokens into camera-only context rendering tokens to serve as TTB input, and context ground-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel-view processing. Our method achieves up to **23x** rendering speedup with quality on par with the state-of-the-art across several benchmarks. Project page: https://test-time-baking.github.io",
      "upvotes": 26,
      "github_stars": 60,
      "github_repo": "https://github.com/NVlabs/DVSM",
      "project_page": "https://test-time-baking.github.io/",
      "comments": 5,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.17331",
      "arxiv_url": "https://arxiv.org/abs/2611.17331",
      "title_ja": "TTB：デコーダ専用視点合成モデルの効率的レンダリング",
      "summary_ja": "シーン情報を軽量MLPに焼き込むことで、高品質を維持したまま高速な新規視点デコードを実現。"
    },
    {
      "id": "2611.17831",
      "title": "V-JEPA-LM: Video-Language Models That Read Dynamics Beyond Static, Text-Aligned Representations",
      "abstract": "World-model video encoders such as V-JEPA learn how scenes change (direction, speed, order, state) from video alone. To answer questions, they are joined to a language model trained on captions and question-answer pairs. But each caption or question names only a few attributes of a clip, so the model learns to retrieve those attributes rather than to read the clip, and the dynamics the encoder carries go unused: on the same items, a linear probe reads speed from frozen V-JEPA features at 87% while the VLM answers at chance. We show where dynamics lives in a frozen encoder: in a subspace shared across videos for predictive encoders such as V-JEPA, but not as a shared component of frame-wise, text-aligned encoders such as SigLIP. We then build counterfactual supervision that makes the language model read it: pixel transformations turn public videos into answer-balanced variants whose answers are set by the transformation and differ only in the change. Trained in a single stage on 4.53M public samples with 32 visual tokens per frame, where open video LLMs use several stages, 9M to 172M samples and 64 to 256 tokens per frame on average, the resulting V-JEPA-LM models (1B to 8B, Qwen3 and Llama) lead every size class in average score across eleven video benchmarks; our 4B model scores 72.1, against 61.1 for the best open 4B and 64.8 for the best open 8B model. A controlled encoder x supervision study shows that the encoder decides what can be read and the supervision what is read: at a matched budget, counterfactual supervision adds 4.5 points on average and 38 on the speed questions of natural benchmarks. Code and models: https://github.com/kkt94/Llama-V-JEPA-LM.",
      "upvotes": 24,
      "github_stars": 4,
      "github_repo": "https://github.com/kkt94/Llama-V-JEPA-LM",
      "project_page": "https://huggingface.co/spaces/kkt94/llama-v-jepa-lm-8b",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.17831",
      "arxiv_url": "https://arxiv.org/abs/2611.17831",
      "title_ja": "V-JEPA-LM：静的な表現を超えて動力を読み取るビデオ言語モデル",
      "summary_ja": "世界モデルのエンコーダが持つ速度や方向の情報を、言語モデルが直接読み取る手法を提示。"
    },
    {
      "id": "2611.07226",
      "title": "Loopback Transformer: Towards a Unified View of Residual Looped Transformers",
      "abstract": "Looped Transformers reduce parameter count by repeatedly applying shared blocks, but parameter sharing alone does not determine how the results of repeated computation are reused. We take the depth-memory view of residual connections and analyze which representation is stored after each block application and how later reads weight it. A full block output contains both its input and its new update, so weighting that output also reweights the history already carried by the input. Reading individual updates instead, with the shared stack's input kept on a separate path, gives separate controls over input strength, total update weight, and allocation across updates. The Loopback Transformer implements these controls: geometric decay sets the total update weight and supplies a recency prior, and attention learns how to allocate that weight. On ClimbMix, Loopback reaches lower validation loss than standard Transformer baselines with 40-75% of their Transformer parameters (excluding token embeddings and the output head) at reference scales from 191M to 3B, with training tokens and executed depth matched. It also has higher mean accuracy over thirteen downstream tasks at 1.4B and 3B. At 191M, 374M, and 778M, it has the lowest validation loss and the highest thirteen-task mean among the standard Transformer and seven looped residual designs.",
      "upvotes": 24,
      "github_stars": 14,
      "github_repo": "https://github.com/yancyou/Loopback",
      "project_page": "https://yancyou.github.io/Loopback_page/",
      "comments": 2,
      "org": "University of Wisconsin - Madison",
      "url": "https://huggingface.co/papers/2611.07226",
      "arxiv_url": "https://arxiv.org/abs/2611.07226",
      "title_ja": "Loopback Transformer：残差ループトランスフォーマーの統一的視点",
      "summary_ja": "共有ブロックの再帰計算において、入力と更新分を別々に制御することで表現能力を高める。"
    },
    {
      "id": "2608.22237",
      "title": "Read Less, Solve More: Token-Efficient Sparse Reading of External Content for AI Agents",
      "abstract": "Web-facing AI agents repeatedly access webpages, documents, repositories, and tool responses, yet reading interfaces often expose entire objects when only sparse evidence is needed. This over-reading increases token and latency costs and can dilute relevant evidence. We present SparseRead, a reusable reading control layer that governs content admission without modifying the agent model. Its Read Intent Protocol tracks evolving needs and source coverage; Adaptive Reader Backends select how evidence is located and exposed; and the Budgeted Read Gate bounds cumulative raw exposure per episode with faithful full-view fallback. A unified Reader interface supports interchangeable evidence acquisition across heterogeneous resources. Across six models, including Claude Opus 5, and five scenarios, SparseRead reduces total tokens by up to 92.9% and wall time by up to 89.0%, preserving or improving task quality in 97% settings. On Web deep-search tasks, it reduces tokens by 31.0--43.0% and task completion time by 23.0--37.0%. Ablations validate the three designs, while integration with three agent frameworks demonstrates portability.",
      "upvotes": 24,
      "github_stars": 91,
      "github_repo": "https://github.com/Liuzedooong/SparseReading",
      "project_page": "https://sparseread.pages.dev/",
      "comments": 12,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2608.22237",
      "arxiv_url": "https://arxiv.org/abs/2608.22237",
      "title_ja": "Read Less, Solve More：AIエージェントのための外部コンテンツの疎な読み取り",
      "summary_ja": "必要な証拠のみを選択的に読み取る制御層により、トークン消費と遅延を大幅に削減する。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Unsloth Shrinks Ornith-1.5-122B to Fit on a Single 48GB GPU",
      "summary": "Unsloth's dynamic GGUF quants shrink Ornith-1.5-122B down to a 40GB file, letting a frontier-class reasoning and coding MoE fit on a single 80GB GPU.",
      "url": "https://alphasignal.ai/news/unsloth-shrinks-ornith-1-5-122b-to-fit-on-a-single-48gb-gpu",
      "published": "2026-11-18T07:00:23+09:00",
      "title_ja": "Unsloth、122Bモデルを単一の48GB GPUで動作可能に",
      "summary_ja": "動的GGUF量子化により、Ornith-1.5-122Bを単一のGPUに収まる40GBまで軽量化し、高度な推論・開発を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-6.2 Astra Tops Leaderboards While Slashing API Costs 20%",
      "summary": "OpenAI drops GPT-6.2 Astra and Sol into ChatGPT Work, Codex, and the API, promising frontier results at a third the cost per task.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-6-2-astra-tops-leaderboards-while-slashing-api-costs-20",
      "published": "2026-11-18T02:54:03+09:00",
      "title_ja": "OpenAI、コストを20%削減しつつ性能を向上させたGPT-6.2 Astraを公開",
      "summary_ja": "GPT-6.2 AstraとSolを投入し、従来比3分の1のコストで業界最高水準の推論結果を提供可能に。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing GPT-6.2 Astra and Sol",
      "summary": "Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower cost across ChatGPT Work, Codex, and the API.",
      "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol",
      "published": "2026-11-18T02:45:00+09:00",
      "title_ja": "GPT-6.2 AstraおよびSolの導入",
      "summary_ja": "プロフェッショナルな出力、コーディング、PC操作性能が向上し、APIやChatGPT Workで低コスト利用が可能に。"
    },
    {
      "lab": "AlphaSignal",
      "title": "SparkLLM's Spark-X2.6-4B Runs Local Agents on 3.54 GB With Adjustable Reasoning",
      "summary": "Spark-X2.6-4B ships as a GGUF-ready on-device agent model with controllable thinking budgets and claims parity with 9B competitors.",
      "url": "https://alphasignal.ai/news/sparkllm-s-spark-x2-6-4b-runs-local-agents-on-3-54-gb-with-adjustable-reasoning",
      "published": "2026-11-18T01:00:04+09:00",
      "title_ja": "SparkLLMのSpark-X2.6-4B、3.54GBで動作するローカルエージェントを実現",
      "summary_ja": "思考予算の調整が可能で、9B級モデルに匹敵する性能を持つGGUF対応のオンデバイス・エージェントモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Nanonets' OCR2 Hits 800K Downloads Turning Scanned Docs Into Structured Markdown",
      "summary": "Nanonets-OCR2-3B is a compact vision-language model that turns messy documents into clean, LLM-ready markdown with semantic tags for tables, equations, signatures, and more.",
      "url": "https://alphasignal.ai/news/nanonets-ocr2-hits-800k-downloads-turning-scanned-docs-into-structured-markdown",
      "published": "2026-11-18T00:30:19+09:00",
      "title_ja": "Nanonets、スキャン文書を構造化Markdownに変換するOCR2を公開",
      "summary_ja": "表、数式、署名などの意味タグを保持し、乱雑な文書をLLMが処理しやすい綺麗なMarkdown形式に変換する小型視覚言語モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Tiny-voca Packs Two AI Voices Into an 18 MB Model for $9",
      "summary": "A 4.5M parameter English TTS model trained only on synthetic speech runs 70x faster than real time on CPU and cost under $10 to build.",
      "url": "https://alphasignal.ai/news/tiny-voca-packs-two-ai-voices-into-an-18-mb-model-for-9",
      "published": "2026-11-17T21:17:03+09:00",
      "title_ja": "Tiny-voca、わずか18MBで2種類の音声を利用可能なAIモデルを開発",
      "summary_ja": "合成音声のみで学習された4.5MパラメータのTTSモデル。CPU上で実時間の70倍速で動作し、10ドル以下で構築可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Infomaniak Fixes TranslateGemma 4B to Run on Standard Production Servers",
      "summary": "Infomaniak repackaged Google's TranslateGemma 4B so it runs cleanly on vLLM and SGLang, adding a delimiter-based language code format for serving.",
      "url": "https://alphasignal.ai/news/infomaniak-fixes-translategemma-4b-to-run-on-standard-production-servers",
      "published": "2026-11-17T18:30:57+09:00",
      "title_ja": "Infomaniak、TranslateGemma 4Bを標準サーバーで動作可能に修正",
      "summary_ja": "GoogleのTranslateGemmaを再構成し、vLLMやSGLangでの円滑な動作とデリミタ形式の言語指定に対応。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing ChatGPT for Sales",
      "summary": "Explore the new Sales plugin and 30+ new and expanded partner plugins in ChatGPT to research prospects, prepare pitches, update your CRM, and move deals forward.",
      "url": "https://openai.com/index/introducing-chatgpt-for-sales",
      "published": "2026-11-17T17:00:00+09:00",
      "title_ja": "ChatGPT for Salesの導入",
      "summary_ja": "見込み客調査やピッチ準備、CRM更新などを支援する新しい営業向けプラグインおよびパートナープラグインを提供。"
    },
    {
      "lab": "OpenAI",
      "title": "Strengthening NATO and allied cyber defenses with AI",
      "summary": "How OpenAI is working with NATO and allied cyber agencies to help trusted defenders find vulnerabilities, test fixes and protect essential systems.",
      "url": "https://openai.com/index/strengthening-nato-allied-cyber-defences-ai",
      "published": "2026-11-17T09:00:00+09:00",
      "title_ja": "AIによるNATOおよび同盟国のサイバー防御の強化",
      "summary_ja": "OpenAIとNATO等が連携し、脆弱性の発見、修正テスト、重要システムの保護にAIを活用して防御側を支援。"
    },
    {
      "lab": "OpenAI",
      "title": "Astra for Law leads in legal intelligence",
      "summary": "Astra for Law ranked first in a launch evaluation spanning 24 areas of law. Every ChatGPT Enterprise customer can now request access.",
      "url": "https://openai.com/index/astra-law-6-2",
      "published": "2026-11-17T09:00:00+09:00",
      "title_ja": "法務特化型AI「Astra for Law」が法的知能で首位を獲得",
      "summary_ja": "24の法分野にわたる評価で1位を記録。ChatGPT Enterpriseユーザー向けにアクセスリクエストの受付を開始。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing OpenAI for Chile",
      "summary": "OpenAI and the Government of Chile are partnering to support responsible AI adoption, build public-sector skills and help local startups develop AI applications.",
      "url": "https://openai.com/index/introducing-openai-for-chile",
      "published": "2026-11-17T09:00:00+09:00",
      "title_ja": "OpenAI for Chileの導入",
      "summary_ja": "チリ政府と提携し、責任あるAIの導入支援、公共部門のスキル向上、現地のスタートアップによるAI応用開発を促進。"
    },
    {
      "lab": "OpenAI",
      "title": "Broadening access to AI for scientists",
      "summary": "We’re expanding our ChatGPT for Academic Researchers program to offer 200,000 researchers worldwide free access to our frontier models.",
      "url": "https://openai.com/index/expanding-chatgpt-for-academic-researchers",
      "published": "2026-11-17T02:00:00+09:00",
      "title_ja": "科学者へのAIアクセスの拡大",
      "summary_ja": "学術研究者向けプログラムを拡張し、世界20万人の研究者に最先端モデルへの無料アクセスを提供。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・拡張可能な潜在3D表現",
      "summary_ja": "計算量やメモリの制約を克服し、複雑な物体の詳細な造形を可能にする新しい3D表現および生成手法を提案。"
    },
    {
      "lab": "Hugging Face",
      "title": "Hugging Face and OpenRouter join forces to make open-weight models easy to run",
      "summary": "",
      "url": "https://huggingface.co/blog/openrouter",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "Hugging FaceとOpenRouterが提携、オープンウェイトモデルの実行を容易に",
      "summary_ja": "両者の協力により、オープンなAIモデルの実行環境をより簡単に利用できる仕組みを構築。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の推進",
      "summary_ja": "教育イノベーションを通じて、科学および工学分野の発展を促進する取り組み。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build a Robot Pick-and-Place Simulation with SimReady Assets",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place",
      "published": "2026-11-14T03:00:39+09:00",
      "title_ja": "SimReadyアセットを用いたロボットのピック・アンド・プレース・シミュレーションの構築",
      "summary_ja": "準備済みのアセットを活用し、ロボットによる部品のピッキングと配置を行うシミュレーション環境を構築。"
    },
    {
      "lab": "Hugging Face",
      "title": "XYBench: Helping with the problem behind the question",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/xybench",
      "published": "2026-11-14T02:02:35+09:00",
      "title_ja": "XYBench：質問の背後にある問題解決を支援",
      "summary_ja": "ユーザーの質問の真意や背後にある課題を適切に捉え、より精度の高い回答を導くためのベンチマーク。"
    },
    {
      "lab": "Hugging Face",
      "title": "llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem",
      "summary": "",
      "url": "https://huggingface.co/blog/ggml-org/llama-cpp-v1",
      "published": "2026-11-13T23:05:22+09:00",
      "title_ja": "llama.cpp v1.0.0：ローカルAIエコシステムの強固な基盤",
      "summary_ja": "ローカル環境でのAI実行を支えるllama.cppが、より安定した基盤としてバージョン1.0.0に到達。"
    },
    {
      "lab": "Hugging Face",
      "title": "LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite",
      "published": "2026-11-13T04:07:35+09:00",
      "title_ja": "LLMネイティブなマークアップ言語「LLMON」がGranite 4.1に搭載",
      "summary_ja": "LLM向けに設計されたマークアップ言語LLMONが、Granite 4.1の3Bおよび8Bモデルで利用可能に。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの導入",
      "summary_ja": "Googleの新しいAIモデル、Gemini 4 Hydrogenを新たに導入。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルのアライメントにおける理論的限界",
      "summary_ja": "KLダイバージェンス制約下での報酬向上の限界を、情報理論的な観点から解明する研究。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Definitive Fine-Tuning Guide for 3D Generation Models",
      "summary": "",
      "url": "https://huggingface.co/blog/3d-lora-finetuning",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "3D生成モデルのための決定版ファインチューニング・ガイド",
      "summary_ja": "3D生成モデルを特定の用途に最適化するための、包括的な微調整手法の解説。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブル端末を用いたCKMリスク評価と個別化コーチング",
      "summary_ja": "ウェアラブルデータを活用し、心血管・腎臓・代謝（CKM）疾患のリスクを特定、個人に合わせた健康指導を実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：DNAの解読を通じて疾患の理解を深める",
      "summary_ja": "DNA配列の変異が特定の細胞や疾患にどのような影響を与えるかを予測する最新技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonの提供開始",
      "summary_ja": "最新のAIモデルであるGemini 4 Carbonが一般に利用可能に。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの導入：複雑なソフトウェアの深層検証における突破口",
      "summary_ja": "AIエージェントが300万行のLean証明コードを記述し、Signalのコア暗号化の検証に成功。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Opening the datasets behind our AI weather models",
      "summary": "Foundational precipitation and geostationary satellite datasets to observe the planet clearly.",
      "url": "https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/",
      "published": "2026-11-10T20:13:04+09:00",
      "title_ja": "AI気象モデルを支えるデータセットの公開",
      "summary_ja": "地球を明確に観測するための降水量および静止気象衛星の基礎データセットを公開。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者の評価：パーソナライズされた執筆スタイル評価におけるLLM Judgeの調査",
      "summary_ja": "ユーザーの好みのスタイルに沿っているかをLLMが判定する際、モデルの組み合わせや推論能力がどう影響するかを分析。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲーティングの重要性：状態空間モデルにおける記憶とインコンテキスト学習",
      "summary_ja": "SSMがTransformerに対し特定のタスクで劣る原因を調査し、ゲーティング機構が性能に与える役割を解明。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的な長文コンテキスト検索のためのWeighted State Souping",
      "summary_ja": "SSMで独立して符号化した文脈を再結合する際、長大で複雑なデータでの劣化を防ぎ、効率的な検索を実現する手法。"
    }
  ]
};
