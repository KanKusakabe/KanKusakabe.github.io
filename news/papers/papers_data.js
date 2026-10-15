window.papersData = {
  "updated_at": "2026-10-15 09:20 JST",
  "arxiv": [
    {
      "id": "2610.17780",
      "title": "Full-duplex Spoken Language Modeling with Discrete Diffusion",
      "url": "https://arxiv.org/abs/2610.17780",
      "pdf": "https://arxiv.org/pdf/2610.17780",
      "authors": [
        "Chen Chen",
        "Pin-Jui Ku",
        "Ankita Pasad",
        "Ante Juki\\'c",
        "Zhehuai Chen",
        "Boris Ginsburg"
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
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "semantic computation is no longer bounded by the perception audio frame rate, allowing intelligence and responsiveness to improve simultaneously.",
      "signals": [],
      "headline": "離散拡散モデルにより思考と発話を並行処理する全二重音声言語モデルDiffuplex",
      "what": "「いつ言うか」と「何を言うか」の学習を分離し、ユーザーの音声を追跡しながら並行して応答内容を生成・洗練する離散拡散ベースの音声エージェントです。逐次的に生成する自己回帰モデルとは異なり、応答生成と思考を並行して実行できます。",
      "enables": "1秒あたり平均1872トークンという圧倒的なデコード速度を実現しつつ、既存の全二重（フルデュプレックス）モデルと同等の低遅延と、より高い言語的知性を両立しました。",
      "why_it_matters": "リアルタイムの対話応答性と、深い思考（論理的推論）を伴う高度な言語処理を同時に提供する、新しい音声対話エージェントのパラダイムを提示しています。",
      "tags": [
        "音声AI",
        "拡散モデル",
        "リアルタイム対話"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18167",
      "title": "Beyond Planning: Differentiable Control-in-the-loop End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.18167",
      "pdf": "https://arxiv.org/pdf/2610.18167",
      "authors": [
        "Zhidong Wang",
        "Zirui Li",
        "Zitong Shan",
        "Zhiqi Mao",
        "Qihang Huang",
        "Zhan Chen"
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
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "On the closed-loop Bench2Drive benchmark, DIVA achieves a driving score of 86.7, surpassing the widely adopted state-of-the-art approach by 3.3 points",
      "signals": [],
      "headline": "微分可能な車両ダイナミクスを訓練ループに組み込んだ自動運転DIVA",
      "what": "計画（プランニング）から制御（コントロール）までを、微分可能な一連のチェインとして統合したエンドツーエンドの自動運転手法です。アクチュエータレベルの車両モデルを組み込み、車両の実際の状態に基づいて直接学習することで、非微分な制御器による勾配の断絶を解消しています。",
      "enables": "Bench2DriveベンチマークでSOTAを達成しつつ、乗り心地（Jerk）を約半分に、ブレーキの頻繁な切り替えを64%削減し、滑らかな走行を実現しました。",
      "why_it_matters": "「計画して終わり」ではなく、実際の車両の動きから知覚ネットワークまで誤差を逆伝播させることで、シミュレーションと実機の乖離に強い堅牢な走行モデルを実現しています。",
      "tags": [
        "自動運転",
        "エンドツーエンド学習",
        "微分可能制御"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18604",
      "title": "LLM2R: From Large Language Models to 3D Reassemblers",
      "url": "https://arxiv.org/abs/2610.18604",
      "pdf": "https://arxiv.org/pdf/2610.18604",
      "authors": [
        "Zhouhan Zhong",
        "Qiuhong Shen",
        "Xingyi Yang",
        "Jinyi Xu",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 5 figures, 7 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We present LLM2R, which casts part assembly as sequence modeling with a pretrained decoder-only large language model (LLM)",
      "signals": [],
      "headline": "3Dパーツの組み立てを単一パスのシーケンスモデリングとして解くLLM2R",
      "what": "バラバラの3Dパーツを組み立てるタスクを、事前学習済みのデコーダ専用LLMを用いた系列処理として定式化したモデルです。全パーツの幾何トークンを連結してLLMに入力し、末尾に追加した「サマリートークン」で全体の構造を把握しながら、すべてのパーツのポーズ（回転・移動）を一度に予測します。",
      "enables": "パーツ数が増えるほど優位性が増し、100個のパーツ組み立てにおいて既存手法を30ポイント以上上回る精度を達成しました。また、未学習のカテゴリに対しても高いゼロショット性能を示します。",
      "why_it_matters": "パーツ間の関係性を繰り返し計算する従来手法の非効率性を克服し、LLMの持つコンテキスト理解能力を3D幾何学的な組み立て推論に転用した点が独創的です。",
      "tags": [
        "3Dビジョン",
        "LLM応用",
        "形状組み立て"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18845",
      "title": "The Last Remote Sensing Model Built by Humans? Casting Any Earth Observation Task as Recursive Self-Improvement",
      "url": "https://arxiv.org/abs/2610.18845",
      "pdf": "https://arxiv.org/pdf/2610.18845",
      "authors": [
        "Sijie Zhao",
        "Zeqi Zhou",
        "Heli Qi",
        "Xuanchao Fu",
        "Zhuo Zheng",
        "Junshi Xia"
      ],
      "categories": [
        "cs.CV",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Ongoing project",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "This establishes a new paradigm for EO, in which people design harnesses and verifiers and agents build the models",
      "signals": [],
      "headline": "検証可能なタスクをエージェントが自己改善して構築する次世代のリモートセンシング",
      "what": "人間がモデルを設計する代わりに、タスクの成功条件（検証器）と利用可能なデータ（ハーネス）を定義し、コーディングエージェントにモデル構築と再帰的な自己改善を行わせるパラダイムです。光学画像や多スペクトル画像など、異なる地球観測（EO）タスクに汎用的に対応します。",
      "enables": "4つの主要なEOベンチマークにおいて、わずか1%の学習ラベルで既存のSOTAモデルを凌駕する精度を達成しました。",
      "why_it_matters": "「人間がレシピを書く」というこれまでのモデル構築の常識を覆し、エージェントの能力向上に比例して観測モデルも自動進化する仕組みを構築しました。",
      "tags": [
        "リモートセンシング",
        "AIエージェント",
        "自己改善"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.13015",
      "title": "Generalized Proximal Policy Optimization: Unifying LLM RL Algorithms from the Perspective of Divergence",
      "url": "https://arxiv.org/abs/2610.13015",
      "pdf": "https://arxiv.org/pdf/2610.13015",
      "authors": [
        "Zhicheng Cai",
        "Xinyuan Guo",
        "Hanlin Wu",
        "Weinan Dai",
        "Yuyan Zhou",
        "Wei-Ying Ma"
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
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "The best-performing GPPO instantiation surpasses standard GRPO by up to 50% and 14% on math and coding, delivering SOTA performance.",
      "signals": [],
      "headline": "f-divergenceの視点でLLMの強化学習を統一するGPPOフレームワークの提案",
      "what": "PPOにおけるクリッピングが探索を阻害する問題を解決するため、f-divergenceの信頼領域理論に基づき強化学習アルゴリズムを統一したGeneralized Proximal Policy Optimization (GPPO)です。異なるf-divergenceがもたらす幾何学的特性と、従来のモンテカルロ法より高精度な推論トポロジーを組み合わせた二次元の設計空間を定義しています。",
      "enables": "数学とコーディングのベンチマークにおいて標準的なGRPOを最大50%上回る性能を達成し、DAPOやDPPOといった既存のPPO変種を特殊なケースとして包含することに成功しました。",
      "why_it_matters": "ヒューリスティックな修正に頼っていたLLMの強化学習に対し、数学的に裏付けられた統一的な設計指針を提供し、効率的な探索と学習の安定化を両立させています。",
      "tags": [
        "LLM",
        "強化学習",
        "PPO"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13020",
      "title": "Trajectory-Aware Policy Optimization: Closing the State Distribution Gap in Long-Horizon LLM RL",
      "url": "https://arxiv.org/abs/2610.13020",
      "pdf": "https://arxiv.org/pdf/2610.13020",
      "authors": [
        "Zhicheng Cai",
        "Weinan Dai",
        "Yuyan Zhou",
        "Wei-Ying Ma",
        "Ya-Qin Zhang",
        "Hao Zhou"
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
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "TAPO significantly surpasses existing LLM RL algorithms across eight competition-level benchmarks, achieving up to 48% and 12% improvement over GRPO",
      "signals": [],
      "headline": "長期間の推論における状態分布のズレを補正するTAPOによるLLM強化学習の安定化",
      "what": "長期間の自己回帰生成におけるローカルな誤差が軌跡全体で蓄積する問題に対し、オフポリシーの方策勾配から理論的に導出した状態分布補正を導入したTrajectory-Aware Policy Optimization (TAPO)です。幾何平均エスティメータによる分散低減と、系列長に応じた動的なクリッピングを組み合わせています。",
      "enables": "数学的推論でGRPOと比較して最大48%の向上を達成し、長期間のタスクにおける学習の不安定性や崩壊を大幅に抑制しました。",
      "why_it_matters": "従来のトークン単位や系列単位の制御では見落とされていた「軌跡誘発的な分布のズレ」を明示的に補正することで、複雑な推論タスクの学習効率を高めています。",
      "tags": [
        "LLM",
        "強化学習",
        "推論"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13325",
      "title": "Taking Tokenization off the Host for Agentic LLM Serving",
      "url": "https://arxiv.org/abs/2610.13325",
      "pdf": "https://arxiv.org/pdf/2610.13325",
      "authors": [
        "Mohammad Siavashi",
        "Pascal Schwinte",
        "Ali Banaei",
        "Gerald Q. Maguire Jr.",
        "Marco Chiesa",
        "Dejan Kosti\\'c"
      ],
      "categories": [
        "cs.DC",
        "cs.CL",
        "cs.LG",
        "cs.PF"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "We present GraphTok, a GPU tokenizer that runs the entire encoding pipeline, from pre-tokenization through byte-pair encoding (BPE) merging to token-ID assembly",
      "signals": [],
      "headline": "GPU上でトークナイゼーションを完結させLLM推論の初期遅延を削減するGraphTok",
      "what": "プレトークナイゼーションからBPEマージまでの一連の処理を、単一のCUDAグラフとしてGPU上で実行する高速トークナイザです。CPUとGPUのデータ転送やCPU側の処理負荷を排除し、既存のvLLMやNVIDIA Dynamoに統合可能な設計となっています。",
      "enables": "Llama 3において最速のCPUトークナイザより4.7〜6.0倍高速に動作し、長いコンテキストを扱うエージェント用途でTTFT（最初のトークン生成までの時間）を2倍以上改善しました。",
      "why_it_matters": "プレフィックスキャッシュにより無視できるようになったプリフィル段階において、新たなボトルネックとなっていたCPUトークナイゼーションの問題を解消し、システム全体のキャパシティを大幅に向上させます。",
      "tags": [
        "LLM",
        "GPU計算",
        "推論最適化"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.14228",
      "title": "Latent World Action Model for GUI Agents",
      "url": "https://arxiv.org/abs/2610.14228",
      "pdf": "https://arxiv.org/pdf/2610.14228",
      "authors": [
        "Seungjun Yu",
        "Hojun Choi",
        "Seojeong Park",
        "Jaeyo Shin",
        "Hyunjung Shim"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.HC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 11,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves up to 31.9% and 40.6% relative gains in success rate over pixel-space world models",
      "signals": [],
      "headline": "潜在空間での予測によりGUIエージェントの推論速度を大幅に向上させるLatent World Action Model",
      "what": "GUI操作における将来画面の予測対象を、ピクセル空間での再構成から潜在空間（Latent Space）でのアクション誘起情報へと変更した手法です。共有表現を持つマルチモーダルモデルを活用し、アクション選択と次状態予測を同時に行う2つの専用ヘッドを備えています。",
      "enables": "ピクセル空間ベースのモデルと比較して、推論レイテンシを最大98.9%削減しつつ、成功率をオフライン設定で31.9%、オンライン設定で40.6%向上させました。",
      "why_it_matters": "従来の画面生成手法が抱えていた高い計算コストと、将来状態を現状態と誤認する「アイデンティティ・ショートカット」問題を、潜在空間でのアクション認識対照学習によって解消しています。",
      "tags": [
        "GUIエージェント",
        "マルチモーダルLLM",
        "ワールドモデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.14261",
      "title": "BigCell: Generating Gigapixel Whole-Slide Images",
      "url": "https://arxiv.org/abs/2610.14261",
      "pdf": "https://arxiv.org/pdf/2610.14261",
      "authors": [
        "Srikar Yellapragada",
        "Alexandros Graikos",
        "Zilinghan Li",
        "Kostas Triaridis",
        "Tarak Nath Nandi",
        "Ji Dong K Bai"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026. Project page: https://histodiffusion.github.io/docs/projects/bigcell/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "BigCell, the first approach to generate coherent whole-slide histopathology images at native gigapixel resolution",
      "signals": [],
      "headline": "ギガピクセル解像度の病理全スライド画像を生成可能な初の拡散モデルBigCell",
      "what": "12万枚以上の公開全スライド画像（WSI）で学習された、ネイティブなギガピクセル解像度で一貫性のある病理画像を生成するFlow-matching Transformerです。病理基盤モデルの埋め込みを条件とし、推論時には適応的スケジューリングを用いたスライディングウィンドウ・パイプラインを採用しています。",
      "enables": "最大32,768×32,768ピクセルの画像生成を可能にし、従来のタイル生成器を忠実度で上回るとともに、合成データによる拡張で少数ショット分類の性能を最大18%改善しました。",
      "why_it_matters": "パッチ単位ではなく、臨床診断報告書が扱うスライド単位の解像度で一貫した画像を生成できるようになったことで、診断精度の向上やデータ不足の解消に寄与します。",
      "tags": [
        "画像生成",
        "医療AI",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15112",
      "title": "Drive3R: Block-wise Streaming Geometric Foundation Models for Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.15112",
      "pdf": "https://arxiv.org/pdf/2610.15112",
      "authors": [
        "Tianyi Yang",
        "Haojun Yang",
        "Jipeng Xiao",
        "Xuesong Chen",
        "Shaoshuai Shi",
        "Li Jiang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 6 figures, 4 tables. Project page: https://silence-ai423.github.io/Drive3R/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "on nuScenes, it improves over the recent DVGT-2 baseline from 0.1806 to 0.1081 in AbsRel",
      "signals": [],
      "headline": "自動運転の長期間シーケンスを高品質に3D再構成するブロック単位ストリーミングモデルDrive3R",
      "what": "自動運転用の動的シーンを再構成するためのブロック単位ストリーミング幾何基盤モデルです。完全な双方向アテンションの計算量を抑えるブロック単位因果アテンションと、長期的なドリフトを抑制する信頼度ベースの再アンカリング機構を備えています。",
      "enables": "nuScenesデータセットにおいて、位置誤差（ATE）を1.5812から0.9092へ大幅に低減し、ポイントクラウドの精度と軌道の安定性を飛躍的に向上させました。",
      "why_it_matters": "GPUメモリの制限や計算量の問題を解決し、メモリ効率を維持しながら長時間の走行シーケンスに対して一貫性のある3Dシミュレーション環境を提供できます。",
      "tags": [
        "自動運転",
        "3D再構成",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15287",
      "title": "ASM-6D: Fast Certified Pose-Shape Inference with Complete Correspondence Flow Maps",
      "url": "https://arxiv.org/abs/2610.15287",
      "pdf": "https://arxiv.org/pdf/2610.15287",
      "authors": [
        "Ho Jin Choi",
        "Minku Kim",
        "Nadia Figueroa"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, project page: https://asm6d-project.github.io/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ASM-6D achieves state-of-the-art performance on ROPE and HouseCat6D benchmarks.",
      "signals": [],
      "headline": "生成的な幾何予測によりリアルタイムで物体の姿勢と形状を推定するASM-6D",
      "what": "RGB-D画像から、隠蔽領域を含む完全な3D対応関係の候補を生成的に予測し、カテゴリレベルのActive Shape Model（ASM）と統合する手法です。姿勢推定を9つの変数に集約された最適化問題として定式化し、バッチ処理による高速な評価を可能にしています。",
      "enables": "ROPEおよびHouseCat6DベンチマークでSOTAを達成し、6–38 Hzのリアルタイム速度で姿勢推定、形状補完、追跡、ロボット把持をサポートします。",
      "why_it_matters": "物体モデルを事前に持たない環境において、生成的な対応予測と効率的な最適化を組み合わせることで、速度と精度の両立を実現しています。",
      "tags": [
        "姿勢推定",
        "ロボット",
        "3Dビジョン"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17730",
      "title": "DT-LoRA: Reaching Beyond the Tangent Space of Low-Rank Adaptation",
      "url": "https://arxiv.org/abs/2610.17730",
      "pdf": "https://arxiv.org/pdf/2610.17730",
      "authors": [
        "Yangming Zhang",
        "Ling Yi",
        "Datong Li",
        "Jinliang Ding",
        "Xiaojie Wang",
        "Tiecheng Song"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 2 figures, 11 tables. Code: https://github.com/Snipine/DT-LoRA",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose Dynamic Tangent LoRA (DT-LoRA), which partitions a fixed rank budget into a stable branch and a dynamic branch to capture the principal residual gradient directions.",
      "signals": [],
      "headline": "勾配の残差成分を動的にキャプチャしLoRAの性能限界を超えるDT-LoRA",
      "what": "低ランク適応（LoRA）がフル微調整に及ばない理由が、更新が接空間（Tangent Space）に縛られ、重要な勾配成分が切り捨てられるためであることを突き止めた手法です。固定されたランク予算を安定ブランチと動的ブランチに分割し、残差勾配の主要な方向を動的に捉えます。",
      "enables": "推論コストを増やさずにLoRAやその変種を安定的に上回り、特にオープン語彙のドメイン汎化などの難易度の高いタスクでSOTAを達成しました。",
      "why_it_matters": "LoRAの数学的な制約を明らかにするとともに、マトリックスフリーなランダム化SVDを用いることで計算負荷を抑えつつ、フル微調整に近い性能を追求しています。",
      "tags": [
        "LoRA",
        "モデル微調整",
        "効率的学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.13232",
      "title": "FPD-Drive: Future Policy Distillation for End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.13232",
      "pdf": "https://arxiv.org/pdf/2610.13232",
      "authors": [
        "Li-Heng Chen",
        "Qifeng Chen",
        "Chengwei Wu",
        "Yingjie Zhang",
        "Sheng Yang",
        "Hongbo Fu"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieving SOTA performance among the compared methods on both benchmarks. Zero-shot closed-loop evaluation on HUGSIM further yields an HD-Score of 45.1",
      "signals": [],
      "headline": "将来の知識を蒸留して自動運転方策の安全性と多様性を向上させるFPD-Drive",
      "what": "記録された将来の観測データにアクセスできる教師モデルから、多様で高品質な軌跡ターゲットを生徒モデルへ移転する「Future-Privileged Multi-Target Distillation」を採用したエンドツーエンドのプランナーです。安全候補と不安全候補のランキングエラーを修正するSafety-Aware Score Correctionも導入されています。",
      "enables": "NAVSIMベンチマークにおいてPDMSスコア95.5を達成し、単一の走行ログのみに基づく学習に比べて、代替的な有効行動の学習と安全性の選択精度が向上しました。",
      "why_it_matters": "特権的な将来情報を用いて学習時の監視信号を拡張することで、推論時に将来予測を行わずに高度な判断が可能な軽量な方策を実現しています。",
      "tags": [
        "自動運転",
        "蒸留",
        "エンドツーエンド学習"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13317",
      "title": "SBNO : Schr\\\"odinger Bridge Neural Operator for the Forward and Inverse Problems under Missing Information",
      "url": "https://arxiv.org/abs/2610.13317",
      "pdf": "https://arxiv.org/pdf/2610.13317",
      "authors": [
        "Jaehyeon Park",
        "Inhyeok Jeong",
        "Noseong Park"
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
      "comment": "NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce SBNO, an equation-free paired-data diffusion bridge matching framework that learns conditional operators for both forward and inverse PDE problems",
      "signals": [],
      "headline": "不完全な観測データから物理現象を再構成するシュレディンガー橋ニューラルオペレータ",
      "what": "偏微分方程式（PDE）の順問題および逆問題を解くための、方程式を必要としない拡散ブリッジマッチングフレームワークSBNOです。シュレディンガー橋を用いて入力と解のペアを時間依存のドリフトとして学習し、スパースな観測データからの確定的再構成を可能にします。",
      "enables": "わずか5%の観測データでも高い精度を維持しつつ、従来のガイド付き拡散モデルと比較して実行速度を9.7倍以上に高速化し、メモリ消費量を4.3分の1以下に削減しました。",
      "why_it_matters": "物理法則が未知、あるいは観測が極めて限定的な実用環境下において、高速かつ軽量に物理現象のシミュレーションとパラメータ推定を行える点に意義があります。",
      "tags": [
        "ニューラルオペレータ",
        "拡散モデル",
        "科学計算"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.15028",
      "title": "UltraBERT: Beyond the Limit of BERT Pre-Training",
      "url": "https://arxiv.org/abs/2610.15028",
      "pdf": "https://arxiv.org/pdf/2610.15028",
      "authors": [
        "Jungwoo Park",
        "Taewhoo Lee",
        "Jaewoo Kang"
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
      "hf_upvotes": 52,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "first encoder to achieve state of the art on both classification and retrieval tasks, reaching 91.0 on GLUE and 47.7 on BEIR",
      "signals": [
        "HF ▲52"
      ],
      "headline": "分類と検索の両タスクでSOTAを達成する双方向エンコーダUltraBERT",
      "what": "BERTの事前学習レシピを現代の大規模言語モデル（LLM）の知見で再設計したモデルです。バッチ内で低マスキング率と高マスキング率に異なる言語モデルヘッドを割り当て、蒸留とプルーニングの効果をマスキング率に応じて最適化しています。",
      "enables": "GLUEで91.0、BEIRで47.7を達成し、これまで両立が困難だった分類タスクと情報検索タスクの両方で最高水準の性能を単一モデルで実現しました。",
      "why_it_matters": "エンコーダの性能限界を探索し、計算資源の割り当て、マスキング率の設計、知識蒸留に関する原理的な指針を提示しています。",
      "tags": [
        "LLM",
        "自然言語処理",
        "事前学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18067",
      "title": "WorkRover: Scaling Long-Horizon Cowork Agent Training Via Recursive Environment Evolution",
      "url": "https://arxiv.org/abs/2610.18067",
      "pdf": "https://arxiv.org/pdf/2610.18067",
      "authors": [
        "Hang He",
        "Linting Wang",
        "Guanming Liu",
        "Bo Mao",
        "Jinxiu Liu",
        "Yiran Suo"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://workrover.github.io/",
      "hf_upvotes": 64,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Its reported scores exceed those of Qwen3.5-35B-A3B by 26.27 percentage points on JobBench",
      "signals": [
        "HF ▲64"
      ],
      "headline": "環境の再帰的進化により長期間の共同作業エージェントを育成するWorkRover",
      "what": "報酬設計やタスク環境自体をAIエージェントに共同構築・修正させることで、複雑な共同作業エージェントを訓練するフレームワークです。ロールアウトの結果から構成要素の修正案を評価・選択するFactorial Compatibility Replay（FCR）などの機構を備えています。",
      "enables": "Qwen3.5-35Bベースのモデルにおいて、JobBenchで26.27ポイント、OfficeQA Proで29.32ポイントの性能向上を達成し、長期間のタスク遂行能力を大幅に強化しました。",
      "why_it_matters": "タスクの難易度や検証ルールを学習の進行に合わせて動的に進化させることで、人手による設計の限界を超えたスケーラブルな訓練環境を提供します。",
      "tags": [
        "強強化学習",
        "エージェント訓練",
        "タスク自動生成"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15760",
      "title": "Hyperbolic Time Series Forecasting with Learnable Decomposition and Manifold Dynamics",
      "url": "https://arxiv.org/abs/2610.15760",
      "pdf": "https://arxiv.org/pdf/2610.15760",
      "authors": [
        "Sarang Rajendra Patil",
        "Vishal Fenn",
        "Mengjia Xu"
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
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "HyperForecast, the first long-term time series forecasting (LTSF) framework operating in hyperbolic space.",
      "signals": [],
      "headline": "双曲幾何学を用いて時系列のマルチスケール構造を捉えるHyperForecast",
      "what": "時系列データに含まれるトレンド（低周波）からノイズ（高周波）までの階層構造を、指数関数的な容量を持つ双曲空間（ポアンカレ球）で表現する初の長期予測フレームワークです。低周波成分を原点付近、高周波成分を境界付近に配置し、測地線に沿ったダイナミクスとして将来を予測します。",
      "enables": "11種類の主要な長期予測ベンチマークのうち9つでSOTAを達成し、特に長期の予測において平均二乗誤差を最大58%削減しました。",
      "why_it_matters": "従来のユークリッド空間では表現しきれなかった時系列の複雑な周波数階層を、双曲幾何という適切な数学的枠組みでモデル化した点が独創的です。",
      "tags": [
        "時系列予測",
        "双曲幾何学",
        "ディープラーニング"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15299",
      "title": "WisdomNet: trustable machine learning toward error-free classification",
      "url": "https://arxiv.org/abs/2610.15299",
      "pdf": "https://arxiv.org/pdf/2610.15299",
      "authors": [
        "Truong X. Tran",
        "Ramazan S. Aygun"
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
      "star_codes": [
        "cap"
      ],
      "star_quote": "it is possible to develop a classifier with 0% misclassification error.",
      "signals": [],
      "headline": "共役ニューロンの導入により誤分類エラーを0%に抑える学習フレームワークWisdomNet",
      "what": "モデルが確信を持てない場合に判断を拒否または人間へ委ねる「信頼可能な学習（trustable learning）」を実現するニューラルネットワーク構造です。データが正しく分類できるかを判定する「共役ニューロン（conjugate neuron）」を追加し、既存のMLPやCNN、深層学習モデルに適用可能です。",
      "enables": "複数のデータセットにおいて、約10%程度の拒否率を維持しながら、分類誤り率を0%にまで削減できることを示しました。",
      "why_it_matters": "医療や自動運転など、誤分類が致命的な問題となる領域において、機械学習モデルの信頼性を担保するための実用的なアプローチを提供します。",
      "tags": [
        "機械学習",
        "信頼性",
        "分類"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15330",
      "title": "BaT-SAM: Introducing Inductive Bias into SAM via a Mixture of Convolutional Experts for Brain Tumor Segmentation",
      "url": "https://arxiv.org/abs/2610.15330",
      "pdf": "https://arxiv.org/pdf/2610.15330",
      "authors": [
        "Sumiaya Jannat",
        "Md Mahedi Hasan",
        "Md Shamimul Islam",
        "Md Nur Hossain"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "On the BRISC2025 benchmark, BaT-SAM achieves a weighted mean IoU of 0.832",
      "signals": [],
      "headline": "畳み込みエキスパートの混合により脳腫瘍セグメンテーションを高精度化するBaT-SAM",
      "what": "Segment Anything Model（SAM）の凍結されたViTエンコーダに、局所的な帰納バイアスを注入するパラメータ効率の高いアダプター手法です。Conv-LoRAを介してマルチスケールな畳み込みエキスパートを sparsely gated mixture として導入し、プロンプト不要の自己プロンプト・ボックス回帰器を備えています。",
      "enables": "500万パラメータ未満の微調整で、BRISC2025ベンチマークにおいて平均IoU 0.832を達成し、未知のデータセットに対しても高い汎化性能を示しました。",
      "why_it_matters": "医療画像のようなViTが苦手とする局所的な詳細把握が必要なタスクにおいて、SAMを完全自動かつ効率的に適応させることに成功しています。",
      "tags": [
        "医療画像",
        "セグメンテーション",
        "SAM"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15603",
      "title": "CondMSP: Condition-Informed and Resource-Aware Inorganic Materials Synthesis Planning",
      "url": "https://arxiv.org/abs/2610.15603",
      "pdf": "https://arxiv.org/pdf/2610.15603",
      "authors": [
        "Heewoong Noh",
        "Gyoung S. Na",
        "Elton Pan",
        "Namkyeong Lee",
        "Chanyoung Park"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose CondMSP, which extends MSP from recipe prediction to execution-aware planning.",
      "signals": [],
      "headline": "無機材料の合成計画において条件予測とリソース配分を統合するCondMSP",
      "what": "材料発見から実験実現までをつなぐため、温度・時間・雰囲気などのプロセス条件を予測し、それを文脈として操作シーケンスを生成するフレームワークです。予測された条件に基づき、限られた実験リソース（加熱炉）を効率的に配分する制約付き最適化も行います。",
      "enables": "シミュレーション環境下において、参照レシピの再現率を27.9%から32.9%に向上させ、酸化物以外の広範な化学領域への汎化能力も実証しました。",
      "why_it_matters": "単なるレシピ予測を超えて、実際の実験リソース制約を考慮した実行可能な合成計画をAIが立案できるようにした点が画期的です。",
      "tags": [
        "材料科学",
        "AIによる計画",
        "材料合成"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15638",
      "title": "MERIT: Scaling KG Foundation Models with Relation Transformers",
      "url": "https://arxiv.org/abs/2610.15638",
      "pdf": "https://arxiv.org/pdf/2610.15638",
      "authors": [
        "Cosimo Gregucci",
        "Daniel Hernandez",
        "Antonio Vergari",
        "Steffen Staab"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "we design MERIT, the first KGFM with a transformer relation encoder",
      "signals": [],
      "headline": "Transformerベースのエンコーダで知識グラフ推論を100倍高速化するMERIT",
      "what": "未知のグラフに対してもゼロショットでリンク予測が可能な知識グラフ基盤モデル（KGFM）です。従来のメッセージパッシングやランダムウォークに代わり、関係名（Relation）同士が直接アテンションを行うTransformerエンコーダを初めて採用しました。",
      "enables": "56個のベンチマークにおいて、既存のSOTAモデルと同等のMRRを維持しつつ、推論速度をFLOCKと比較して100倍以上高速化しました。",
      "why_it_matters": "知識グラフ推論における計算コストのボトルネックを解消し、より複雑なクエリ回答タスクへの基盤モデルの適用を可能にしました。 ",
      "tags": [
        "知識グラフ",
        "Transformer",
        "基盤モデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16143",
      "title": "All-St3R SLAM: Real-time RGB Dynamic SLAM with Pixel-wise Motion Masking",
      "url": "https://arxiv.org/abs/2610.16143",
      "pdf": "https://arxiv.org/pdf/2610.16143",
      "authors": [
        "Yewon Kim",
        "Paul Hongsuck Seo",
        "Sang Chul Ahn"
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
      "comment": "Accepted to the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2026. Project Page: https://yellowon0103.github.io/all-st3r-slam/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "precisely removes moving objects at the pixel level without relying on predefined labels",
      "signals": [],
      "headline": "動的な環境下でリアルタイムにピクセル単位の移動物体除去を行うAll-St3R SLAM",
      "what": "RGB入力のみを使用し、DUSt3Rによる自己運動予測とAll-Trackerによるポイント追跡の乖離を分析することで、実際に移動しているピクセルを特定し除去するSLAMフレームワークです。物体レベルのマスクではなくピクセルレベルで判定するため、一時的に静止している部分は追跡に利用できます。",
      "enables": "既存の高密度動的SLAMが0.5–3 FPSであるのに対し、約10 FPSというリアルタイム性能を達成し、動的物体によるトラッキングエラーを劇的に改善しました。",
      "why_it_matters": "セグメンテーションモデルやラベルに依存せず、動的な環境での自律移動システムの自己位置推定と地図作成の精度を、実用的な速度で向上させています。",
      "tags": [
        "SLAM",
        "動的環境",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16165",
      "title": "Think Before You Speak: Enabling Training-Free Latent Communication Between Language Models",
      "url": "https://arxiv.org/abs/2610.16165",
      "pdf": "https://arxiv.org/pdf/2610.16165",
      "authors": [
        "Rishi Khare"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at the 2nd Workshop on Efficient Reasoning at COLM 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "directly sharing the key-value (KV) cache between language models can enable efficient latent collaboration",
      "signals": [],
      "headline": "KVキャッシュの線形補間により異なるLLM間で訓練不要な潜在通信を行うCacheFuse",
      "what": "複数の言語モデル（LLM）間でテキストを介さず、潜在的な情報（KVキャッシュ）を直接共有して連携させる手法です。モデルサイズが異なる異種モデル間であっても、アダプターの追加学習なしに、線形補間によって上流モデルのKVキャッシュを下流モデルに統合します。",
      "enables": "シングルモデルと比較して精度を最大8.6ポイント向上させ、従来のテキストベース通信に比べ推論開始までの時間（TTFT）を最大12.2倍高速化しました。",
      "why_it_matters": "通信ボトルネックと遅延を大幅に削減し、異なる特性を持つモデル同士が「思考の途中経過」を共有して効率的に協調する道を開きました。",
      "tags": [
        "LLM",
        "マルチエージェント",
        "推論加速"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16641",
      "title": "What Limits Cross-Task Generalization in World Action Models?",
      "url": "https://arxiv.org/abs/2610.16641",
      "pdf": "https://arxiv.org/pdf/2610.16641",
      "authors": [
        "Chen Zhao",
        "Zipeng Ye",
        "Yihan Lin",
        "Yuchen Xie",
        "Jing Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "34 pages, 10 figures, under review in ICLR 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We therefore introduce the vision-to-action (VITA) loss, which passes generated futures through the frozen AoE and penalizes discrepancies in the recovered actions",
      "signals": [],
      "headline": "視覚とアクションの整合性を高める損失関数によりワールドモデルの汎化性能を改善",
      "what": "ワールドアクションモデル（WAM）が生成する将来予測と、実際に必要なアクションのズレを分析し、それを修正するためのVITA損失を提案しています。固定された逆ダイナミクスモデル（IDM）を通して生成画像をアクション空間へ写像し、本来の動作との不一致を最小化するように学習を誘導します。",
      "enables": "未知のタスクにおいて、生成画像からの実行成功率をほぼ0%から47.0%へと劇的に引き上げ、既存の3つのベンチマークすべてで制御性能を向上させました。",
      "why_it_matters": "単なる見かけの美しさ（ピクセル再現）ではなく、ロボット操作にとって重要な幾何学的詳細（グリッパーと物体の接触など）に生成能力を集中させるべきであることを示しました。",
      "tags": [
        "ロボット学習",
        "ワールドモデル",
        "逆ダイナミクス"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17407",
      "title": "Cross-View Time-Frequency Diffusion for Extreme-Aware Time-Series Generation",
      "url": "https://arxiv.org/abs/2610.17407",
      "pdf": "https://arxiv.org/pdf/2610.17407",
      "authors": [
        "Lin Jiang",
        "Rongchao Xu",
        "Guang Wang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "42 pages, 17 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "CrossTF improves extreme fidelity by 26.1% and overall performance by 7.4% relative to the strongest baselines.",
      "signals": [],
      "headline": "時間と周波数の両視点の差を利用して極端現象の予測精度を高めるCrossTF",
      "what": "稀に発生するが影響の大きい「極端現象」を含む時系列データを生成するための拡散モデルフレームワークです。時間ドメインと周波数ドメインのデノイザーの推定値の差が、極端現象の再現性に敏感であるという発見に基づき、学習後半のステップで両ドメインの出力を適応的に融合させます。",
      "enables": "11種類のベースラインと比較して、極端現象の再現精度を26.1%向上させ、全体的な時系列データの生成品質も7.4%改善しました。",
      "why_it_matters": "既存手法のように複雑な損失関数や特殊な表現を必要とせず、2つの視点の乖離を調整するという軽量な最適化で極端現象を捉えられるようにした点が重要です。",
      "tags": [
        "時系列生成",
        "拡散モデル",
        "極端現象"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18025",
      "title": "SHELDON: Reasoning through Dual Search over Hypothesis and Observation Spaces",
      "url": "https://arxiv.org/abs/2610.18025",
      "pdf": "https://arxiv.org/pdf/2610.18025",
      "authors": [
        "Harshit Joshi",
        "Priyank Shethia",
        "Monica S. Lam"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages main text, 34 total. Preprint",
      "hf_upvotes": 1,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Across diagnosis, abstract reasoning, and optimization benchmarks, SHELDON outperforms evaluated baselines by up to 26.7 points.",
      "signals": [],
      "headline": "仮説と観察の空間を個別に探索し科学的発見能力を高めるSHELDON",
      "what": "科学的発見のプロセスに習い、LLMの中に「仮説空間」と「観察空間」を独立して表現し、それらを共同で探索させる推論フレームワークです。現在の仮説では説明できない観察を積極的に探し出すことで、仮説の局所的な改善にとどまらない飛躍的な発見を促します。",
      "enables": "診断、抽象推論、最適化のベンチマークにおいて既存手法を最大26.7ポイント上回り、発見される解決策の多様性も4.5倍向上しました。",
      "why_it_matters": "テストタイムの計算量を増やす（Test-time scaling）際に、単なる反復推論ではなく、科学的手法に基づいた構造的な探索を行う有効性を示しています。",
      "tags": [
        "科学的推論",
        "LLM",
        "発見アルゴリズム"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18430",
      "title": "FedGraph: Defending Federated Large Language Model Fine-Tuning Against Backdoor Attacks via Graph-Based Aggregation",
      "url": "https://arxiv.org/abs/2610.18430",
      "pdf": "https://arxiv.org/pdf/2610.18430",
      "authors": [
        "Xi Chen",
        "Chunyi Zhou",
        "Rui Zeng",
        "Xiaogang Xu",
        "Zhe Liu",
        "Shouling Ji"
      ],
      "categories": [
        "cs.CR",
        "cs.AI"
      ],
      "venues": [
        "ICLR (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "Accepted at the ICLR 2026 Workshop on Principled Design for Trustworthy AI. This is an author-owned preprint, not the official proceedings version",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "It consistently reduces attack success rates to below 10% while achieving high detection accuracy (95.5% on average)",
      "signals": [],
      "headline": "グラフベースの集約により連合学習におけるLLMのバックドア攻撃を防ぐFedGraph",
      "what": "複数のクライアントが協力してLLMを微調整する連合学習において、悪意のある更新を検知・排除するフレームワークです。クライアント間の更新の類似性をグラフ構造としてモデル化し、正常な更新と「不自然に一貫した」攻撃用更新を分離する特徴量を抽出します。",
      "enables": "バックドア攻撃の成功率を10%未満に抑えつつ、95.5%という高い検知精度と2.33%という極めて低い誤検知率を達成しました。",
      "why_it_matters": "高次元なパラメータ空間では困難だった、巧妙に隠されたバックドア更新の検知を、グラフ理論を用いた構造的分析によって実現しました。",
      "tags": [
        "連合学習",
        "サイバーセキュリティ",
        "LLM"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18568",
      "title": "WAVE-0: Bridging VLA Policies and WAMs with Lightweight Latent Future Prediction",
      "url": "https://arxiv.org/abs/2610.18568",
      "pdf": "https://arxiv.org/pdf/2610.18568",
      "authors": [
        "Haomin Wang",
        "Anqiong Ji",
        "Ke Wang",
        "Zhongshan Liu",
        "Ru Ying",
        "Ran Zheng"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 22,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "WAVE-0 achieves success rates of 91.47% on RoboTwin 2.0 and 98.7% on LIBERO",
      "signals": [],
      "headline": "軽量な潜在将来予測によりVLA政策とワールドモデルを融合するWAVE-0",
      "what": "視覚と言語、アクションを統合したVLAモデルに、将来の環境変化を予測する2億5700万パラメータの軽量なワールドモデルを組み合わせたフレームワークです。ビデオ生成のような高コストな処理を避け、アクションプランから将来の潜在表現を直接予測し、それをアクション生成の条件とします。",
      "enables": "RoboTwin 2.0で91.47%、LIBEROで98.7%という高い成功率を達成し、実環境タスクでも従来手法の38.3%から73.3%へと大幅な改善を示しました。",
      "why_it_matters": "大規模なビデオ事前学習に頼らず、予測された「行動の結果」を直接アクション決定に反映させることで、複雑な操作の汎化性能を高めています。",
      "tags": [
        "ロボット操作",
        "VLA",
        "潜在ワールドモデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.14507",
      "title": "MontageFlow: Physically Valid High Fidelity EEG Generation",
      "url": "https://arxiv.org/abs/2610.14507",
      "pdf": "https://arxiv.org/pdf/2610.14507",
      "authors": [
        "Sudarshan Regmi",
        "Nabaraj Subedi",
        "Arvind Pillai",
        "Yu Yvonne Wu",
        "Yuliang Chen",
        "Michael V. Heinz"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/sudarshanregmi/MontageFlow",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "MontageFlow, a flow-matching model that enforces these identities by restricting its output to signals that satisfy them.",
      "signals": [],
      "headline": "物理的な電位恒等式を強制することで忠実度を高めるEEG生成モデルMontageFlow",
      "what": "臨床脳波（EEG）データ生成において、各チャンネル間の電位差が満たすべき物理的な線形恒等式を、Flow-matchingの出力段階で強制的に遵守させる手法です。全体的な生理学的状態をエンコードし、潜在空間からの事前分布と組み合わせて条件付けを行います。",
      "enables": "物理的に妥当な信号生成を保証しつつ、生成の忠実度を示す指標（TS-FID）で既存手法の1.6–3.6倍という大幅な改善を実現しました。",
      "why_it_matters": "従来の生成モデルが見落としていた「EEGは任意多チャンネル信号ではなく、物理法則に従う」という点に注目し、データの質と正当性を同時に引き上げました。",
      "tags": [
        "脳波データ",
        "生成モデル",
        "バイオメディカル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.14734",
      "title": "Align-VAE: Aligning Attention and Geometry in VecSet VAEs for 3D Reconstruction",
      "url": "https://arxiv.org/abs/2610.14734",
      "pdf": "https://arxiv.org/pdf/2610.14734",
      "authors": [
        "Huaizhi Qu",
        "Mingxin Yang",
        "Xintong Han",
        "Fangneng Zhan",
        "Chunchao Guo"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "On the ABO dataset, Align-VAE reduces Chamfer distance by 26.6% compared to the standard VecSet VAE.",
      "signals": [],
      "headline": "アテンションと幾何学の不整合を解消し3D再構成を精緻化するAlign-VAE",
      "what": "3D形状を潜在トークンのセットとして表現するVecSet VAEにおいて、トークンと実際の幾何構造のズレを解消する4つの改良を加えたモデルです。距離に基づいたクロスアテンションや法線情報の不整合解消、およびポアソン方程式に着想を得た正則化を導入しています。",
      "enables": "ABOデータセットにおいて、標準的なVecSet VAEと比較して形状再現誤差（Chamfer distance）を26.6%削減しました。",
      "why_it_matters": "セットベースのVAEが抱えていた、潜在表現と空間幾何の関係性が不明瞭という課題に対し、幾何学的な一貫性を持たせる設計指針を示しています。",
      "tags": [
        "3D再構成",
        "VAE",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.14840",
      "title": "Push the Limit: Learning High-Speed Sprinting and Aggressive Cornering on a Full-Scale Humanoid",
      "url": "https://arxiv.org/abs/2610.14840",
      "pdf": "https://arxiv.org/pdf/2610.14840",
      "authors": [
        "Huaxing Huang",
        "Ruidong Li",
        "Jinchao Han",
        "Ziyang Dong",
        "Wenhao Cui"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "CoRL"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to the 10th Conference on Robot Learning (CoRL 2026). 16 pages, 5 figures, 7 tables. Video: https://youtu.be/YWf62XkiApc",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "enables a full-scale bipedal humanoid to sprint at over 7 m/s with motion-prior-guided gait",
      "signals": [],
      "headline": "大型ヒューマノイドによる時速7m超の全力疾走と急旋回を実現した学習フレームワーク",
      "what": "周期的な足の接地による高周波な振動を処理するため、マルチヘッド・アテンション（MHA）を用いた時間的エンコーディングと、振動の影響を受けない低周波な進行方向報酬を設計した強化学習手法です。また、スキルごとに条件付けられた複数の判別器（MAMP）で動作の質を制御します。",
      "enables": "等身大の二足歩行ロボットにおいて、7m/s以上のスプリント走行と、上体を25度傾けた高速な急旋回をシミュレーションおよび実機で安定して実現しました。",
      "why_it_matters": "高精度な参照動作の追従と、限界速度域での動的なバランス制御という、これまでトレードオフの関係にあった課題を解決しています。",
      "tags": [
        "ヒューマノイド",
        "強化学習",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.14871",
      "title": "MORE: Learning Motion-Oriented Registers for Driving World Models and Planning",
      "url": "https://arxiv.org/abs/2610.14871",
      "pdf": "https://arxiv.org/pdf/2610.14871",
      "authors": [
        "Yingdong Gu",
        "Haoyu Wang",
        "Shaocheng Yan",
        "Zhenjun Zhao",
        "Hao Han",
        "Pengcheng Shi"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "On NAVSIM-v2, MORE outperforms the state of the art by 1.6 in EPDMS",
      "signals": [],
      "headline": "運動指向のレジスタ学習により効率的な自動運転ワールドモデルを構築するMORE",
      "what": "ビデオ事前学習の段階で、エゴモーション（自己運動）が注入された少数の「運動指向レジスタ」を学習するV-JEPAフレームワークです。稠密なグリッド特徴ではなく、このコンパクトなレジスタ空間を介して将来の予測や軌道計画を行う共有インターフェースとして機能させます。",
      "enables": "NAVSIM-v2においてSOTAを更新し、既存のDriveLaWと比較して推論遅延を10分の1に削減し、極めて高い計算効率を達成しました。",
      "why_it_matters": "視覚的エンコーダから継承した稠密な特徴を後から加工するのではなく、最初から「動き」に適した状態表現を学習させることの重要性を実証しました。",
      "tags": [
        "自動運転",
        "ワールドモデル",
        "事前学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15159",
      "title": "Beyond Adjacent Layers: Graph-Guided Layer Fusion for Compressing Large Language Models",
      "url": "https://arxiv.org/abs/2610.15159",
      "pdf": "https://arxiv.org/pdf/2610.15159",
      "authors": [
        "Muhammad Usama",
        "Yeoreum Jung"
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
      "comment": "Accepted at NeurIPS 2026. Code: https://github.com/Usama1002/fcm-layer-fusion",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FCM lowers mean perplexity below ShortGPT on twelve of thirteen models, significantly on ten",
      "signals": [],
      "headline": "非隣接レイヤーの機能的類似性を利用しLLMを効率的に圧縮するFCM",
      "what": "大規模言語モデル（LLM）のレイヤー間の全ペア類似度をグラフ化し、コミュニティ検出を用いて機能的に等価なレイヤー群（非隣接を含む）を特定して統合する手法です。統合後、LoRAを用いた回復トレーニングを行い、パラメータ数を削減します。",
      "enables": "Qwen2.5-7Bにおいて、性能を維持しつつパラメータを46%削減し、VRAM使用量を42%抑え、デコードのスループットを84%向上させました。",
      "why_it_matters": "従来の「隣り合うレイヤーのみを統合する」という仮定を覆し、モデル全体に分散している冗長性を活用することで、より高度な圧縮が可能であることを示しました。",
      "tags": [
        "LLM圧縮",
        "効率化",
        "グラフアルゴリズム"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15171",
      "title": "LexiCan: Lexicographic Canonicalization of Point Clouds for Machine Learning Applications",
      "url": "https://arxiv.org/abs/2610.15171",
      "pdf": "https://arxiv.org/pdf/2610.15171",
      "authors": [
        "Daniel Sanchez",
        "Djordje Mihajlovic",
        "Federica Valeau",
        "Luka Beni\\'c",
        "Raghuwansh Raj",
        "Soutrik Sarangi"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "we introduce LexiCan, a canonicalization that is provably invariant under either $O(3)$ or $SO(3)$",
      "signals": [],
      "headline": "3D点群データの回転不変性を保証しMLモデルの性能を高めるLexiCan",
      "what": "3D点群や分子構造の回転・置換の曖昧さを解消するための辞書式正準化（Canonicalization）手法です。点群を一意の表現に変換することで、通常のTransformerなどがそのまま幾何情報を保持して動作できるようにします。",
      "enables": "QM9データセット等の物性予測において、既存手法よりも高い不変性を保持しつつ、数桁高速な処理速度と、不連続性の少ない安定した表現を実現しました。",
      "why_it_matters": "不変ニューラルネットワークをゼロから設計し直すことなく、標準的なアーキテクチャで幾何学的に正しい3D処理を行うための基盤技術となります。",
      "tags": [
        "3D点群",
        "回転不変性",
        "分子構造予測"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15185",
      "title": "DeltaNet-PC: Test-Time Memory Without Backpropagation Through Time",
      "url": "https://arxiv.org/abs/2610.15185",
      "pdf": "https://arxiv.org/pdf/2610.15185",
      "authors": [
        "Todd Morrill",
        "Richard Zemel"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "treating the per-step memory update $\\Delta S_t$ as a latent variable, as opposed to a slow weight",
      "signals": [],
      "headline": "BPTTを使わずにテストタイムの系列記憶を実現するDeltaNet-PC",
      "what": "大容量メモリを必要とする「通時逆伝播（BPTT）」を使わず、予測符号化（Predictive Coding）を用いて系列情報をリアルタイムで記憶する手法です。メモリ更新を潜在変数として扱い、エネルギー関数の局所的な最適化によって逐次的にデータを保存・取得します。",
      "enables": "単一・複数シーケンスの保存や、キー・バリュー形式の連想記憶において100%の再現精度を達成し、Transformerの注意機構に近い機能を低メモリコストで実現しました。",
      "why_it_matters": "脳の学習プロセスに近い局所更新のみで、高度な系列情報の記憶と文脈推論が可能であることを数学的・実証的に示しました。",
      "tags": [
        "予測符号化",
        "系列学習",
        "オンデバイス学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15394",
      "title": "WUSPruner: Second-Moment-Optimal Transforms for Structured Pruning",
      "url": "https://arxiv.org/abs/2610.15394",
      "pdf": "https://arxiv.org/pdf/2610.15394",
      "authors": [
        "Shengkun Tang",
        "Dan Alistarh",
        "Zhiqiang Shen"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "WUS transform minimizes the local reconstruction loss over all invertible changes of basis.",
      "signals": [],
      "headline": "二次モーメント変換によりLLMの構造的プルーニングを最適化するWUSPruner",
      "what": "LLMの不要な次元を削除する際、どの「基底」で行うのが最適かを数理的に導出し、重みとアクティベーションの統計量から導かれるWUS変換を適用する手法です。この変換により、削除に伴う局所的な再構成誤差が最小化される基底空間でプルーニングを実行します。",
      "enables": "LlamaやQwen（8B–72B）において、従来の構造的プルーニング手法を性能で上回りつつ、実用的な推論遅延とメモリ使用量の削減を実現しました。",
      "why_it_matters": "単に「重みが小さい次元を消す」のではなく、誤差を最小化するための数学的に最適な座標系を選択するという新しいアプローチを提案しています。",
      "tags": [
        "LLM圧縮",
        "プルーニング",
        "推論加速"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15429",
      "title": "World Modeling through Spectral Alignment",
      "url": "https://arxiv.org/abs/2610.15429",
      "pdf": "https://arxiv.org/pdf/2610.15429",
      "authors": [
        "Holger Molin",
        "William Peng",
        "Marco Bagatella",
        "Randall Balestriero"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "SpecWM, a JEPA framework that explicitly specifies desired relationships between observations",
      "signals": [],
      "headline": "スペクトル整列により潜在ワールドモデルの表現を意図的に操作するSpecWM",
      "what": "ワールドモデルが観測データのどの情報を保存すべきかを、類似度カーネルを用いたスペクトル表現学習として定式化した手法です。物理状態の保存から、時間的順序のみに基づく自己監督型学習まで、カーネルの選択によってモデルの「幾何」を制御します。",
      "enables": "OGBench等のプランニングタスクにおいて、既存の潜在ワールドモデル（LeWorldModel）の成功率を52%から68%へ、別の設定では29%から51%へと大幅に向上させました。",
      "why_it_matters": "ワールドモデルが何を捉えるべきかを明示的に「スペクトルの整列」として指定できるため、制御タスクに適した表現を系統的に抽出可能です。",
      "tags": [
        "ワールドモデル",
        "表現学習",
        "ロボット制御"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15932",
      "title": "DiffNash: Finding Nash Equilibrium in High-Dimensional Continuous Action Spaces with Diffusion Policies",
      "url": "https://arxiv.org/abs/2610.15932",
      "pdf": "https://arxiv.org/pdf/2610.15932",
      "authors": [
        "Haichuan Wang",
        "Anagha Satish",
        "Jiale Zheng",
        "Saisneha Ghatti",
        "Lingkai Kong",
        "Kai Wang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.GT",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "41 pages, 11 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "derive an unbiased estimator of the difference between current and past policies' Evidence Lower Bounds",
      "signals": [],
      "headline": "拡散ポリシーを用いて高次元連続ゲームのナッシュ均衡を算出するDiffNash",
      "what": "高次元かつ多峰性（マルチモーダル）な戦略分布を扱う必要があるゲーム理論的な均衡計算に、拡散モデルを導入した手法です。サンプルの再利用（リプレイバッファ）に伴う分布のズレを補正する、スコアマッチング目的関数の重み付け手法を新たに開発しました。",
      "enables": "森林保護ゲームや連続Colonel Blottoゲームにおいて、最強のベースラインと比較してナッシュギャップを最大35.6%縮小することに成功しました。",
      "why_it_matters": "従来のニューラルネットワークでは表現が難しかった複雑な混合戦略を、拡散モデルによって正確に捉えられるようにした点が重要です。",
      "tags": [
        "ゲーム理論",
        "拡散モデル",
        "ナッシュ均衡"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.15996",
      "title": "Dissipative Lagrangian Neural Networks for the Interpretable Modelling of Passive Mechanical Systems",
      "url": "https://arxiv.org/abs/2610.15996",
      "pdf": "https://arxiv.org/pdf/2610.15996",
      "authors": [
        "Rob Seabourne",
        "Alice Cicirello"
      ],
      "categories": [
        "cs.LG",
        "cs.CE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "novel parametrisation of dissipative forces that (i) is structurally constrained to be dissipative",
      "signals": [],
      "headline": "物理構造を制約として組み込み散逸系を学習するdLNN",
      "what": "機械システムの保守的な動特性（保存系）とエネルギーを失う動特性（散逸系）を個別に学習する手法です。摩擦や減衰などの散逸力を、物理的なパスビティ（受動性）を保証するように構造的に制約したニューラルネットワークでモデル化します。",
      "enables": "カオス的な二重振り子や産業用ロボットの軌道予測において、データの少ない状況でも高い汎化性能と予測精度を示しました。また、学習した内容を数式として抽出する記号的蒸留もサポートします。",
      "why_it_matters": "純粋なブラックボックスモデルとは異なり、物理的な解釈性と厳密なエネルギー保存・散逸の性質をモデルに持たせることができます。",
      "tags": [
        "物理計算",
        "システム同定",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16298",
      "title": "Memory-Efficient Integer-Only Training of Deep Neural Networks",
      "url": "https://arxiv.org/abs/2610.16298",
      "pdf": "https://arxiv.org/pdf/2610.16298",
      "authors": [
        "Hazem Hesham Yousef Shalby",
        "Fabrizio Pittorino",
        "Manuel Roveri"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "demonstrating for the first time that training neural networks with INT8 tensors and integer arithmetic",
      "signals": [],
      "headline": "すべての計算をINT8で行いメモリ消費を4分の1にする整数専用学習アルゴリズム",
      "what": "重み、勾配、アクティベーションのすべてをINT8で保持し、順伝播から逆伝播、最適化更新までの全工程を整数演算のみで完結させる手法です。指数部を独立して追跡する独自ブロックを組み合わせることで、精度の劣化を防ぎます。",
      "enables": "ResNetやViTなどの標準的なCNN・Transformerにおいて、FP32での学習と比較してメモリ消費を約4分の1に抑えつつ、ImageNet等で競争力のある精度を達成しました。",
      "why_it_matters": "従来は一部に浮動小数点演算を残す必要があった「低精度学習」を、完全に整数演算のみで実現し、リソースの限られた環境での大規模学習を可能にしました。",
      "tags": [
        "低精度演算",
        "メモリ効率化",
        "INT8学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16443",
      "title": "RAP-WAM: Learning World-Action Models through Predictive Rehearsal and Action Perturbations",
      "url": "https://arxiv.org/abs/2610.16443",
      "pdf": "https://arxiv.org/pdf/2610.16443",
      "authors": [
        "Yuanpeng He",
        "Ceyao Zhang",
        "Fangjing Li",
        "Kefei Zhu",
        "Lijian Li",
        "Yueheng Li"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "exceeding the strongest of five baselines by 37.67 percentage points.",
      "signals": [],
      "headline": "予測リハーサルとアクション摂動によりビデオ基盤モデルをロボット制御に適応させるRAP-WAM",
      "what": "ビデオ生成の事前学習済みモデルをロボット制御に転用するための手法です。モデル生成データを用いた「予測リハーサル」と、アクションに微小な変化（摂動）を与えてビデオ予測の変化を測定する手法を組み合わせ、視覚的なフィードバックをアクション学習に効率よく反映させます。",
      "enables": "15種類の実機ロボットタスクにおいて、89.0%という高い平均成功率を記録し、既存の5つのベースラインを最大37.67ポイント上回りました。",
      "why_it_matters": "追加の具現化（Embodied）データによる大規模な中間学習を必要とせず、ビデオ生成能力を直接的かつ効果的にアクションへと結びつけています。",
      "tags": [
        "ロボット制御",
        "ビデオ生成",
        "ワールドモデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16455",
      "title": "GHOST: Geometry-Constrained Hybrid Diffusion for Open-Vocabulary 3D Scene Graph Generation",
      "url": "https://arxiv.org/abs/2610.16455",
      "pdf": "https://arxiv.org/pdf/2610.16455",
      "authors": [
        "Changqun Feng",
        "Wangxiandi Yin",
        "Xin Hu",
        "Ruiting Dai",
        "Feiyang Yang",
        "Jielei Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages. Accepted at ACM MM 2026 (34th ACM International Conference on Multimedia)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "including over 17-point gains over RelationField on spatial predicates.",
      "signals": [],
      "headline": "幾何学的制約を導入した拡散モデルによる3Dシーングラフ生成フレームワークGHOST",
      "what": "3Dシーン内の物体間の関係（述語）を抽出する際、言語の類似性だけでなく、厳密な幾何学的整合性を考慮する手法です。述語の埋め込みを微分可能な幾何制約に写像し、ノードの配置修正と述語の予測を同時にデノイジングプロセスで行います。",
      "enables": "3DSSGデータセットにおいて、従来のオープン語彙手法（RelationFieldなど）を空間的述語の精度で17ポイント以上上回るSOTAを達成しました。",
      "why_it_matters": "言語的な「共生関係」に頼りがちだった従来手法の欠点を克服し、物理的に妥当な物体間関係を3D空間内で推論できるようになった点が重要です。",
      "tags": [
        "3Dシーングラフ",
        "拡散モデル",
        "空間推論"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.16523",
      "title": "EAU: Environment-Agent-User Co-evolution for Training User-Centric Agents",
      "url": "https://arxiv.org/abs/2610.16523",
      "pdf": "https://arxiv.org/pdf/2610.16523",
      "authors": [
        "Min Cai",
        "Dan Zhang",
        "Gao Xing",
        "Libin Ma",
        "Zhaohui Xu",
        "Xi Ye"
      ],
      "categories": [
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
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We instead introduce EAU, a meta-agent framework for environment--agent--user co-evolution.",
      "signals": [],
      "headline": "環境・エージェント・ユーザーの共進化によりマルチターンRLを安定化させるEAU",
      "what": "LLMエージェントの訓練において、エージェントだけでなく、ユーザーシミュレータや環境の動特性、報酬設計までも同時に進化（メタ学習）させるフレームワークです。訓練中の失敗を監視し、シミュレータの挙動や環境の検証器を動的に修正・差し替えます。",
      "enables": "3つのベンチマークにおいて既存の強化学習手法を15%以上上回り、特に複雑なタスクの完了率を最大36.7%向上させました。",
      "why_it_matters": "訓練対象のポリシーだけでなく、それを取り巻くシミュレーション環境全体を適応させることで、対話型エージェントの学習における不安定性を解消しています。",
      "tags": [
        "強化学習",
        "LLMエージェント",
        "メタ学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17015",
      "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
      "url": "https://arxiv.org/abs/2610.17015",
      "pdf": "https://arxiv.org/pdf/2610.17015",
      "authors": [
        "Hao Yu",
        "Haoyu Chen",
        "Hui Wei",
        "Yan Jiang",
        "Nicu Sebe",
        "Guoying Zhao"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce DIME, a differential masked autoencoder for large-scale facial representation learning.",
      "signals": [],
      "headline": "同一人物の画像ペアの差分から細かな表情変化を抽出する顔表現学習DIME",
      "what": "同一人物の画像ペアを用いて、共通するアイデンティティや照明条件を相殺し、顔のわずかな変化（表情、Action Unitなど）のみを抽出する微分マスクオートエンコーダ（MAE）です。2000万枚の大規模な顔画像データセットで自己教師あり学習を行います。",
      "enables": "Action Unit（AU）の検出性能において、学習データ量を増やすほど性能が着実に向上し（従来のMAEでは頭打ちになる傾向があった）、複数の顔分析タスクで専門手法を上回りました。",
      "why_it_matters": "人物のアイデンティティ情報に支配されがちな顔表現学習において、表情などの細微な変化を効率的にスケーリングさせる手法を確立しました。",
      "tags": [
        "顔認識",
        "表現学習",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17456",
      "title": "Compositional RL: Evaluating and Training LLMs for Collaborative Reasoning",
      "url": "https://arxiv.org/abs/2610.17456",
      "pdf": "https://arxiv.org/pdf/2610.17456",
      "authors": [
        "Shangbin Feng",
        "Yulia Tsvetkov",
        "Jan Kautz",
        "David Acuna"
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
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We then propose compositional reinforcement learning (C-RL), which trains a policy inside a live multi-model system",
      "signals": [],
      "headline": "モデルの単体性能ではなく協力時の貢献度を報酬として学習させるCompositional RL",
      "what": "複数のモデルが協力してタスクを解くシステムにおいて、各モデルの「単体での正解率」ではなく、システム全体への「貢献度（協力ゲーム理論に基づくShapley値の近似）」を報酬として強化学習（C-RL）を行う手法です。",
      "enables": "コーディングや科学的発見など24の設定のうち21で最高性能を達成し、システム全体の性能を平均4.0–5.4ポイント（従来比約3倍の伸び）引き上げました。",
      "why_it_matters": "単体ベンチマークでは優秀でも協力時には価値が低いモデルの存在を指摘し、実際のデプロイ環境に即した「他者と協力して成果を出す」ための学習パラダイムを提示しました。",
      "tags": [
        "マルチエージェント",
        "強化学習",
        "LLM評価"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17959",
      "title": "Virtual Head Attention",
      "url": "https://arxiv.org/abs/2610.17959",
      "pdf": "https://arxiv.org/pdf/2610.17959",
      "authors": [
        "Xibo Ding",
        "Guoxia Wang",
        "Jinle Zeng",
        "Jiabin Yang",
        "Sirui Tao",
        "Chao Yang"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Published as a main conference paper at NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose Virtual Head Attention (VHA), which simultaneously improves all three vertices",
      "signals": [],
      "headline": "Virtual Head Attention：計算コストとキャッシュサイズを抑えつつモデル品質を向上させる新アーキテクチャ",
      "what": "KVキャッシュ、計算コスト、モデル品質のトレードオフを解消するため、Q PremixとLinear Postmixという2つの軽量な線形演算を導入した手法です。これにより、少数の物理ヘッドから仮想的な多様性を復元し、既存のGQA最適化を維持したまま推論効率を高めます。",
      "enables": "従来のGQA-8と比較してKVキャッシュを4倍削減し、トレーニングおよびプレフィルのFLOPsを最大7.9%低減しつつ、ベンチマークスコアを最大0.81%向上させました。",
      "why_it_matters": "MLAやMFAといった既存のキャッシュ圧縮手法が抱えていた品質低下や計算コスト増大の問題を、推論時に標準的なGQAへと変換可能な軽量な設計で解決しています。",
      "tags": [
        "LLM",
        "Attention",
        "推論最適化"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18342",
      "title": "CityCode: Building Agent-Operable 3D Cities from Sparse Aerial Observations",
      "url": "https://arxiv.org/abs/2610.18342",
      "pdf": "https://arxiv.org/pdf/2610.18342",
      "authors": [
        "Jiahui Sun",
        "Ran Bi",
        "Yifei Liu",
        "Xiaolong Zhou",
        "Yishuo Xu",
        "Yuanqi Li"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages, 4 figures;",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "CityCode supports continued querying, editing, planning, and historical restoration",
      "signals": [],
      "headline": "CityCode：疎な航空画像からエージェントが操作・編集可能なコードベースの3D都市モデルを構築",
      "what": "1枚の低高度航空画像とカメラパラメータから、メートルスケールの建物、道路幾何、接続性を含むインスタンスレベルの3D都市を生成する手法です。構築された都市はCityCodeというコードベースの状態として永続化され、エージェントによるクエリ、編集、履歴復元に対応します。",
      "enables": "CitySample-Aerial等の実験で、ベースラインを上回る幾何学的精度と視覚的忠実度を達成し、50ステップに及ぶ長長期のタスクチェーンにおいて都市状態の継続的な更新を可能にしました。",
      "why_it_matters": "高密度な再構成を繰り返すことなく、都市のトポロジーや意味論をコードとして保持することで、都市規模の空間知能エージェントに向けた環境構築を実現しています。",
      "tags": [
        "コンピュータビジョン",
        "3D再構成",
        "自律エージェント"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18374",
      "title": "SchemaPose: RGB-Based Category-Level Pose Estimation with Parametric Category Schema",
      "url": "https://arxiv.org/abs/2610.18374",
      "pdf": "https://arxiv.org/pdf/2610.18374",
      "authors": [
        "Shuang Wu",
        "Jiude Wei",
        "Cewu Lu",
        "Jianhua Sun"
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
      "comment": "Accepted at NeurIPS 2026. Project page: https://souglad21.github.io/SchemaPose/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SchemaPose achieves state-of-the-art performance among RGB-based methods",
      "signals": [],
      "headline": "SchemaPose：パラメトリックなカテゴリ・スキーマを用いたRGB画像からの9D姿勢推定",
      "what": "RGB画像のみからカテゴリレベルの9D姿勢（3D並進、回転、サイズ）を推定するため、カテゴリ共有の規則性と個体差を明示的にモデル化するSchemaPoseを提案しています。スキーマ変数を推論し、クエリベースのフレームワーク内で姿勢予測をガイドするエンドツーエンドの構成をとっています。",
      "enables": "RGBのみの条件下で物体インスタンス間の形状のばらつきを効果的に学習し、合成およびリアルデータにおいて最先端の推定精度を達成しました。",
      "why_it_matters": "直接的な幾何学的制約がないRGB設定において、スキーマという明示的な構造を導入することで、未見のインスタンスに対する汎化性能を向上させています。",
      "tags": [
        "コンピュータビジョン",
        "姿勢推定",
        "9D Pose"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18729",
      "title": "Segment Where You Look: Attention as the Interface Between Language Models and Segmenters",
      "url": "https://arxiv.org/abs/2610.18729",
      "pdf": "https://arxiv.org/pdf/2610.18729",
      "authors": [
        "Eslam Abdelrahman",
        "Hamza Omar Alkaf",
        "Yuheng Li",
        "Siddharth Srinivasan Iyer",
        "Nanxuan Zhao",
        "Eli Shechtman"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "AttnSeg improves ReasonSeg by 6.4 gIoU and GS-Eval by 10.2",
      "signals": [],
      "headline": "AttnSeg：VLMの注意機構を直接デコーダのプロンプトとして利用する高精度な領域分割手法",
      "what": "セグメンテーションVLMにおいて、従来の[SEG]トークンの隠れ状態ではなく、そのトークンが画像パッチに対して持つ注意重み（Attention）をデコーダへの入力として使用する手法です。学習された注意ヘッドの線形結合を空間的なプロンプトとして活用し、注意ガイド目的関数で直接教師あり学習を行います。",
      "enables": "既存のSa2VAモデルに適用した場合、ReasonSegで6.4 gIoU、GS-Evalで10.2 gIoUの精度向上を実現し、特に物体の一部や複数個体の切り出しにおいて顕著な効果を示しました。",
      "why_it_matters": "VLMが内部で既に計算している情報の豊富な空間信号を再利用することで、隠れ状態の圧縮による情報欠落を防ぎ、パラメータ効率の良いセグメンテーション性能向上を可能にしています。",
      "tags": [
        "VLM",
        "セグメンテーション",
        "Attention"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18861",
      "title": "Hybrid Reasoning Agents",
      "url": "https://arxiv.org/abs/2610.18861",
      "pdf": "https://arxiv.org/pdf/2610.18861",
      "authors": [
        "Jiaru Zou",
        "Yunzhe Qi",
        "Sirui Chen",
        "Federico Bianchi",
        "Shang Zhu",
        "Pan Lu"
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
      "comment": "45 pages, 12 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "HybridAgent consistently improves performance by 10.4%",
      "signals": [],
      "headline": "HybridAgents：潜在空間での思考とテキストベースの相互作用を動的に切り替える推論エージェント",
      "what": "潜在空間での高速な推論と、外部ツール利用のためのテキストベースの思考をシームレスに行き来するHybridAgentsを提案しています。HybridLinkによるモード遷移と連続的なワーキングメモリにより、透明性を保ちつつ効率的な推論を実現する学習アルゴリズム（HybridSFT/HybridRL）を導入しています。",
      "enables": "11のベンチマークにおいて既存の最先端エージェントより性能を10.4%向上させつつ、トークン消費を最大54.7%削減し、推論速度を最大2.6倍に加速させました。",
      "why_it_matters": "「考える（潜在）」と「話す（テキスト）」を動的に切り替えることで、推論のコスト効率と外部ツールへの適応力を両立させています。",
      "tags": [
        "LLM",
        "自律エージェント",
        "推論効率化"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.13117",
      "title": "Forward Dynamics Models",
      "url": "https://arxiv.org/abs/2610.13117",
      "pdf": "https://arxiv.org/pdf/2610.13117",
      "authors": [
        "Zipei Ma",
        "Junzhe Jiang",
        "Jiahui Zhang",
        "Juntong Zhang",
        "Chun Gu",
        "Bozhou Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://logosroboticsgroup.github.io/FDM/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieving a state-of-the-art 99.4% average success rate on LIBERO and absolute gains of up to 13% over VLA and WAM methods on real-world tasks.",
      "signals": [],
      "headline": "将来状態の予測を方策学習の教師信号として活用するロボット制御モデルFDM",
      "what": "アクション予測と将来の空間状態予測を結合し、アクション特徴量を条件として将来予測を行うForward Dynamics Models (FDM)です。推論時には将来予測の生成ステップをスキップしつつ、学習時には正解の将来状態をアクション学習の教師信号として利用する構造を持ちます。",
      "enables": "LIBEROベンチマークで99.4%という最高水準の成功率を記録し、推論コストを抑えながら従来のVLAやWAMを最大13%上回る性能を実機ロボットで示しました。",
      "why_it_matters": "将来予測の誤差がアクションに伝播するのを防ぎつつ、視覚的フィードバックを方策の質向上に直接結びつける「action-to-future」パラダイムを確立しました。",
      "tags": [
        "ロボティクス",
        "VLA",
        "世界モデル"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12657",
      "title": "Kronecker Product Attention: Memory-Efficient KV Compression via Structured Factorization",
      "url": "https://arxiv.org/abs/2610.12657",
      "pdf": "https://arxiv.org/pdf/2610.12657",
      "authors": [
        "Bahareh Nikpour",
        "Hossein Rajabzadeh",
        "Maryam Dialameh",
        "Vahid Partovi Nia",
        "Parsa Omidi"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "KPA matches or exceeds TPA, MHA, MQA, GQA, and MLA across four model scales",
      "signals": [],
      "headline": "クロネッカー積を用いてKVキャッシュを10倍圧縮するKronecker Product Attention",
      "what": "キー（Key）とバリュー（Value）のアクティベーションを、トークンに依存する小型行列のクロネッカー積の和として表現するアテンション機構です。構造化された回転位置エンコーディング（RoPE）を適用することで、RoPEの相対位置特性を維持しながら圧縮を行うことができます。",
      "enables": "KVキャッシュを最大10倍圧縮しながら、MHA、GQA、MLAなどの既存手法と同等以上の精度を複数のベンチマークで達成しました。",
      "why_it_matters": "表現力を犠牲にすることなくKVキャッシュの増大を抑制でき、メモリ制約の厳しい環境での長文生成の効率化に寄与します。",
      "tags": [
        "LLM",
        "アテンション機構",
        "KVキャッシュ"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12848",
      "title": "Reinforcement Learning via Fixed-point Flow Matching",
      "url": "https://arxiv.org/abs/2610.12848",
      "pdf": "https://arxiv.org/pdf/2610.12848",
      "authors": [
        "Denis Blessing",
        "Onur Celik",
        "Gerhard Neumann"
      ],
      "categories": [
        "cs.LG",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose fixed-point flow matching (FFM), a data-free procedure for training",
      "signals": [],
      "headline": "不動点反復により教師データなしでフローベースの方策を学習するFFM",
      "what": "最大エントロピー強化学習におけるフロー方策の学習を、データ不要の不動点反復として定式化するFixed-point Flow Matching (FFM)です。クリティックのアクション勾配を回帰ターゲットとして利用し、フロー・マッチング形式で方策を更新します。",
      "enables": "オフラインからオンラインへのファインチューニングを効果的に行い、学習データがない状態からでも表現力の高い多峰性の分布を持つ方策を効率的に学習可能です。",
      "why_it_matters": "オンライン強化学習においてフローベースの方策を直接学習・調整するための理論的な手法を確立し、複雑な行動分布の表現を可能にしました。",
      "tags": [
        "強化学習",
        "フロー・マッチング",
        "生成モデル"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13257",
      "title": "CAST: Credit Alignment for Cross-Tokenizer On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.13257",
      "pdf": "https://arxiv.org/pdf/2610.13257",
      "authors": [
        "Jingru Yang",
        "Jinhang Wu",
        "Minjing Shi",
        "Shengfeng He",
        "Xuyan Li",
        "Man Tan"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 8 figures, 11 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose CAST (Chunk-aware credit Assignment with Selective Token Anchoring)",
      "signals": [],
      "headline": "異なるトークナイザ間の蒸留において学習信号の割り当てを最適化するCAST",
      "what": "教師と生徒のトークナイザが異なる場合の強化学習ベースの蒸留において、テキストチャンク単位の報酬をトークン単位の更新に分配する手法です。予測の不確実性に基づいて報酬を重み付けし、対応する教師信号がない箇所には初期方策へのアンカー制約を課します。",
      "enables": "QwenからLlamaへの蒸留において数学やコードのベンチマークで最大2.45ポイントの精度向上を実現し、トークナイザの壁を越えた知識移転を効率化しました。",
      "why_it_matters": "既存のオンポリシー蒸留における「報酬の割当問題」を解消し、より高性能なモデルから異なる構造を持つ軽量モデルへの効率的な知識移転を可能にします。",
      "tags": [
        "LLM",
        "知識蒸留",
        "トークナイゼーション"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "url": "https://arxiv.org/abs/2610.18773",
      "pdf": "https://arxiv.org/pdf/2610.18773",
      "authors": [
        "Qi Li",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 266,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲266"
      ],
      "headline": "Jeva：決定問題の構造的要件を満たしキャッシュ再利用も可能なSystem One意思決定モデル",
      "what": "直感的な低遅延の意思決定を対象に、回答の欠如の認識、順序不変性、選択肢数のスケーラビリティ、キャッシュ可能性の4つの要件を満たすアーキテクチャです。リクエストと選択肢を独立して表現し、不変な選択肢メモリに対してリクエスト状態を洗練させる設計を採用しています。",
      "enables": "数千の選択肢へのスケーリングを可能にし、リクエストに依存しない選択肢表現のキャッシュにより、精度を維持したまま推論レイテンシを大幅に削減しました。",
      "why_it_matters": "従来の自己回帰的なテキスト出力による意思決定が抱えていた、選択肢の提示順序によるバイアスや冗長な再計算の問題を根本から解消しています。",
      "tags": [
        "意思決定",
        "推論最適化",
        "LLM"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "url": "https://arxiv.org/abs/2610.17953",
      "pdf": "https://arxiv.org/pdf/2610.17953",
      "authors": [
        "Guanting Dong",
        "Xinyu Yang",
        "Jiajie Jin",
        "Yuyang Hu",
        "Xiaoshuai Song",
        "Yifei Chen"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Working in progress",
      "hf_upvotes": 193,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲193"
      ],
      "headline": "Agent-Reflex：ノイズの多い環境下での自己反省と失敗からの回復を教示する訓練フレームワーク",
      "what": "エージェントが能動的に自己反省（Reflection）を行う能力を養うための3段階の学習手法です。環境摂動を通じたスキルの発見（RSD）、反省スキルの教師あり微調整（ReSFT）、およびノイズ環境下での強化学習（ORPO）を組み合わせています。",
      "enables": "長期間のツール利用ベンチマークで58.6、ノイズ耐性を評価するAgentNoiseBenchで29.1のスコアを記録し、既存のベースラインを有意に上回りました。",
      "why_it_matters": "実際の運用で発生するツールのエラーやユーザーの介入に対して、エージェントが自律的に状況を判断し、修正行動をとるための体系的な学習レシピを提供しています。",
      "tags": [
        "自律エージェント",
        "強化学習",
        "LLM"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "url": "https://arxiv.org/abs/2610.18615",
      "pdf": "https://arxiv.org/pdf/2610.18615",
      "authors": [
        "Yuhan Zhu",
        "Xiangyu Zeng",
        "Qingyi Si",
        "Chenxu Yang",
        "Yifei Li",
        "Luozheng Qin"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "23 pages. Project page: https://mcg-nju.github.io/VideoJev",
      "hf_upvotes": 193,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲193"
      ],
      "headline": "VideoJev：ビデオ理解と意思決定を構造化タスクとして統合した低遅延System Oneモデル",
      "what": "自己回帰的なデコードを、時間区間やテキスト選択肢をスコアリングする共有ヘッドに置き換えることで、ビデオQAと時間的局所化を統一したモデルです。同一のビデオに対する複数のクエリを効率的に処理するキャッシュ推論および同時推論機能を備えています。",
      "enables": "時間的局所化においてmIoUを最大10.8ポイント向上させつつ推論を約3倍に高速化し、ビデオQAでは100倍以上の推論加速を達成しました。",
      "why_it_matters": "ビデオエージェントが長時間映像から即座に判断を下す必要がある場面において、構造化された出力とキャッシュの活用により実用的な速度と精度を実現しています。",
      "tags": [
        "ビデオ理解",
        "意思決定",
        "VLM"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "url": "https://arxiv.org/abs/2610.18356",
      "pdf": "https://arxiv.org/pdf/2610.18356",
      "authors": [
        "Yu Wang",
        "Rui Dai",
        "Wei Chen",
        "Yi Wang",
        "Bo Dang",
        "Kaikui Liu"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "NeurIPS 2026. 23 pages, 10 figures. Code: https://github.com/AMAP-ML/Urbex",
      "hf_upvotes": 110,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲110"
      ],
      "headline": "Urbex：都市規模の3Dシーンにおいて能動的な探索を通じて対象物を特定するエージェント的フレームワーク",
      "what": "広大な都市3D空間での物体特定（Grounding）を、全候補のランキングではなく、VLMエージェントによる能動的な空間探索（視点移動、ズーム、レンダリング等）として定式化した手法です。強化学習により、探索ポリシーを最適化しています。",
      "enables": "CityReferベンチマークにおいて、事前の物体候補（提案箱）なしで最高のHit@1とIoUを達成し、従来のランキング手法よりも大幅に高速な処理を実現しました。",
      "why_it_matters": "都市規模の膨大なデータに対して事前に候補を抽出する計算コストを回避し、エージェントが能動的に必要な情報を集めて特定するという効率的なアプローチを提示しています。",
      "tags": [
        "コンピュータビジョン",
        "3D Grounding",
        "強化学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "url": "https://arxiv.org/abs/2610.18868",
      "pdf": "https://arxiv.org/pdf/2610.18868",
      "authors": [
        "Wenbo Hu",
        "Shraman Pramanick",
        "Krishna Kumar Singh",
        "Nanyun Peng",
        "Kai-Wei Chang",
        "Yong Jae Lee"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "https://tev-agent.github.io/",
      "hf_upvotes": 86,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲86"
      ],
      "headline": "Tev：高密度な報酬設計により長期間タスクを学習可能にするエージェント訓練手法とデータセット",
      "what": "数時間に及ぶような長期間のタスク学習を促進するため、1,170の検証可能なタスク環境と高密度な「進捗報酬」を含むTev-Gymデータセット、および進捗ポテンシャルに基づく報酬整形（PPRS）を提案しています。タスクの期待状態を潜在世界（Latent World）として定義し、そこから環境を生成することで進捗の定量的測定を可能にしました。",
      "enables": "開発されたTev-27Bモデルは、Agents' Last Exam (ALE-CM) においてGPT-6 AstraやClaude Opus 5に匹敵する性能に達し、未見のタスクに対しても高い汎化性能を示しました。",
      "why_it_matters": "従来の長期間タスクにおける「報酬の疎さ（Sparse rewards）」という根本的な課題に対し、検証可能な進捗指標を導入することで、大規模な学習と自己改善への道を拓いています。",
      "tags": [
        "LLM",
        "自律エージェント",
        "強化学習"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "url": "https://arxiv.org/abs/2610.18774",
      "pdf": "https://arxiv.org/pdf/2610.18774",
      "authors": [
        "Gennady Sidorov",
        "Valerii Kornilov",
        "Denis Grankin",
        "Polina Fedotova",
        "Aleksey Postnikov"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical report. Project page: https://greenvla.github.io/GreenWAM",
      "hf_upvotes": 82,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲82"
      ],
      "headline": "GreenWAM：多様なロボット形態に共通して利用可能な世界モデル兼方策基盤モデル",
      "what": "20種類の異なるロボットファミリーを共通の解剖学的アクション空間で扱うロボット基盤モデルです。視覚予測、アクション条件付き、および世界アクションモードでの共同学習を行い、世界モデルとしての予測能力と制御ポリシーとしての実行能力を両立させています。",
      "enables": "WorldArena 1.0でトップクラスの軌道・深度精度を達成し、実機のヒューマノイドロボットを含む複数の環境で専用モデルに匹敵、あるいは凌駕する成功率を記録しました。",
      "why_it_matters": "個別のロボットごとにモデルを作るのではなく、異なる身体構造を持つロボット間で知識を共有できる世界モデルが、予測と制御の両面で有効であることを示しています。",
      "tags": [
        "ロボティクス",
        "世界モデル",
        "基盤モデル"
      ],
      "fetched_at": "2026-10-15T09:20:43.427427+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 312,
      "github_stars": 122,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART: 効率的、安定かつ拡張可能な拡散モデルの強化",
      "summary_ja": "プロンプトごとの報酬集約により、拡散モデルを安定かつ効率的にオンライン強化学習できる新手法DiffusionARTを提案。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 287,
      "github_stars": 173,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space: マルチモーダル言語モデルにおける空間ワークスペースの探索",
      "summary_ja": "MLLM内部に座標を符号化する線形部分空間S-Spaceを発見し、これが内在的な空間推論のワークスペースであることを解明。"
    },
    {
      "id": "2610.12374",
      "title": "AgentGarten: Code Worlds for Evolving Agents",
      "abstract": "Interactive virtual worlds allow agents to learn through exploration and interaction. What agents can learn is bounded by the environments they practice in, which must be faithful, with consistent state, rules, and dynamics, and realistic, with observations that follow the real-world visual distributions. Achieving both across diverse worlds remains a bottleneck. We introduce AgentGarten, a framework that couples simulators and game engines with a shared neural renderer to build real-time interactive environments. Its simulation backends maintain persistent world state and execute program-defined interaction rules, while the renderer generates visual observations from structured conditions exported through a common interface. To build the neural renderer, we adapt a pretrained video model to geometry conditions, distill it with our proposed Adversarial Forcing, and optimize inference for real-time interaction. Adversarial Forcing makes history prefilling differentiable through exact replay, so that losses on later predictions update how the renderer encodes prior observations, and adds real-data adversarial supervision to improve its visual quality. In AgentGarten, agents perceive the world through visual observations, interact with it in real time, and improve by distilling each round of experience into playbooks that subsequent agents inherit and refine. Our empirical study demonstrates a substantial gain in learning efficiency, with agents learning from just 4 rounds compared with millions for a conventional reinforcement learning counterpart. As new worlds can be written as code and rendered through the same interface, environments can scale in both number and difficulty alongside their agents, a step toward agents that keep evolving through interactive experience.",
      "upvotes": 286,
      "github_stars": 183,
      "github_repo": "https://github.com/MirroS-Lab/AgentGarten",
      "project_page": "https://mirros-lab.github.io/agent-garten/",
      "comments": 4,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.12374",
      "arxiv_url": "https://arxiv.org/abs/2610.12374",
      "title_ja": "AgentGarten: エージェント進化のためのコードワールド",
      "summary_ja": "シミュレータとニューラルレンダリングを統合し、プログラム定義の規則と現実的な視覚情報を備えた対話型環境を構築する枠組み。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 266,
      "github_stars": 63,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 1,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva: 第一原理からのシステム1モデル",
      "summary_ja": "並べ替え不変性や拡張性を備え、推論過程のキャッシュも可能な意思決定に特化した新しいアーキテクチャJevaを導入。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 266,
      "github_stars": 70,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI: 視覚プリミティブによる物理的知能に向けたグラウンディング基盤モデル",
      "summary_ja": "共有語彙内の量子化座標として点やボックスを生成し、高速かつ精密な対象特定を実現する4B規模のグラウンディング基盤モデル。"
    },
    {
      "id": "2610.11765",
      "title": "Thinking Inertia: LLMs Keep Thinking When Told Not To",
      "abstract": "Large Language Models (LLMs) increasingly ship with explicit \"thinking modes\", yet their counterpart, \"no-thinking\", has received far less attention. We study LLMs' no-thinking behavior along two axes. a. How to measure no-thinking? Prior work typically defines no-thinking through proxies such as a disabled thinking mode or the absence of long traces. These proxies are unreliable: disabled thinking modes may still emit reasoning, while long traces may contain filler rather than genuine inference. We instead normalize each response into a pre-answer trace and final answer, and evaluate it at three levels: (i) Empty-Thinking Rate for strict answer-only compliance; (ii) instruction-aware Question-Pre-answer Relevance for similarity between the question and pre-answer trace; and (iii) LLM-as-judge Explicit Inference Rate for visible explicit inference. Together, these metrics distinguish answer-only output, relevant but non-inferential text, and explicit inference. b. How does no-thinking vary across tasks and models? We evaluate six prompting interventions on six LLMs across Boolean, multiple-choice, and open-ended questions. We find that explicit no-think controls cannot reliably eliminate visible inference. Models instead exhibit \"Thinking Inertia\": explicit inference persists even under strict controls and becomes more prevalent as the answer space opens. Accuracy remains stable on Boolean and multiple-choice tasks, whereas open-ended tasks reveal a trade-off between answer-only compliance and task accuracy. Rewriting the same questions across answer spaces shows that supplying candidate answers makes answer-only responses easier to produce. These findings establish no-thinking as a non-trivial capability: stopping explicit reasoning cannot be assumed from model settings or instructions alone and deserves systematic evaluation alongside reasoning ability.",
      "upvotes": 223,
      "github_stars": 5,
      "github_repo": "https://github.com/thinking-inertia/code",
      "project_page": "https://thinking-inertia.github.io/",
      "comments": 4,
      "org": "Stanford University",
      "url": "https://huggingface.co/papers/2610.11765",
      "arxiv_url": "https://arxiv.org/abs/2610.11765",
      "title_ja": "思考の慣性：LLMは「考えるな」と言われても考え続ける",
      "summary_ja": "「思考なし」モードでも推論が漏れ出る「思考の慣性」現象を定義し、厳密な回答のみの遵守率などを測定する評価手法を提案。"
    },
    {
      "id": "2610.13361",
      "title": "AgentSWE: Can Coding Agents Build the Agent You Actually Want?",
      "abstract": "As the production of software passes into the hands of software itself, coding agents are increasingly commissioned to build agents fitted to their users' own workflows. This delegation carries a quiet assumption, that the delivered agent will faithfully serve the requirement it was built for, rather than merely appear to. No existing benchmark tests that assumption. We introduce AgentSWE, a benchmark for agent software engineering spanning three stages of the agent development lifecycle: Creation of a complete agent from a natural-language requirement, Editing of production agent codebases, and Optimization toward a measurable target. Each of its 25 tasks is framed as a commission rather than an exam: the builder iterates against a handful of illustrative cases, while acceptance exercises the frozen submission on held-out cases designed to span the full requirement, grading behavior against requirement-derived rubrics under hard pass/fail gates or, for Optimization, against the source benchmark's own objective. Evaluating a range of coding agents across models and harnesses, we find that none comes close to delivering what a requirement asks for: the gap between what a builder demonstrates and what it delivers is the norm, not the corner case. An accompanying empirical analysis of the failure trajectories identifies recurring failure modes, among them overfitting to the visible cases, hollow runtimes behind code that looks complete, and unsupported claims of completion, each a signal by which coding agents can learn to build the agents they are asked for.",
      "upvotes": 206,
      "github_stars": 36,
      "github_repo": "https://github.com/VectorSpaceLab/AgentSWE",
      "project_page": "https://vectorspacelab.github.io/AgentSWE/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.13361",
      "arxiv_url": "https://arxiv.org/abs/2610.13361",
      "title_ja": "AgentSWE: コーディングエージェントは望み通りのエージェントを作れるか？",
      "summary_ja": "自然言語の要求からエージェントを構築・編集・最適化する能力を測定する、エージェント開発ライフサイクルに特化したベンチマーク。"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "abstract": "Large language models have evolved from single-turn chatbots into interactive agents capable of long-horizon reasoning. In real deployments, MCP tool services can return noisy feedback and users may intervene to correct the agent, but existing methods provide limited supervision for reflection learning and failure recovery. To bridge this gap, we propose Agent-Reflex, a general training framework for incentivizing proactive reflection in agents. Specifically, Agent-Reflex comprises three stages. First, Environment Reflection Skill Discovery (RSD) injects grounded tool-feedback perturbations into environment scaling, samples a capability-diverse LLM pool, mines matched success-failure pairs, and summarizes reusable reflection meta-skills. Building on this skill library, we then apply Reflective Supervised Fine-Tuning (ReSFT) that converts each skill into supervision for self-reflection, skill recovery, and user-centric correction, strengthening complementary reflective behaviors. Finally, we propose On-Policy Reflective Policy Optimization (ORPO) to combine agentic reinforcement learning under noisy interactions with reflection-guided on-policy distillation to further elicit proactive reflection. Built on Qwen3-8B, Agent-Reflex reaches 58.6 overall on five long-horizon tool-use benchmarks and 29.1 on AgentNoiseBench, surpassing strong environment-scaling and reflection baselines. Experiments on six challenging agent benchmark suites demonstrate the effectiveness of Agent-Reflex. Further analyses show that Agent-Reflex improves agents' robustness to noise while maintaining stable training dynamics, supporting scalable agent training. Our code is available at https://github.com/RUC-NLPIR/Agent-Reflex.",
      "upvotes": 193,
      "github_stars": 55,
      "github_repo": "https://github.com/RUC-NLPIR/Agent-Reflex",
      "project_page": "",
      "comments": 1,
      "org": "NLPIR Lab @ RUC",
      "url": "https://huggingface.co/papers/2610.17953",
      "arxiv_url": "https://arxiv.org/abs/2610.17953",
      "title_ja": "Agent-Reflex: 言語エージェントに内省的な行動を教える",
      "summary_ja": "環境の不確実性やユーザーの介入から失敗を学習し、能動的な内省と回復を促す3段階の強化学習フレームワーク。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 193,
      "github_stars": 52,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 1,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev: 動画理解と対話のためのシステム1モデル",
      "summary_ja": "動画内の時間区間や選択肢を直接スコアリングすることで、効率的な時間的グラウンディングとQAを統合した意思決定モデル。"
    },
    {
      "id": "2610.08215",
      "title": "Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?",
      "abstract": "Learning from experience is essential for LLM agents to adapt to unfamiliar and dynmaic environments. Evaluating this ability is therefore important for understanding how effectively agents acquire and use new knowledge. Existing benchmarks have sought to evaluate this ability, but they primarily evaluate tasks whose rules are provided in the instructions or already familiar to pretrained models, making it difficult to distinguish learning from interactions from reasoning with existing knowledge. To address this, we introduce Learn2Play Bench, a benchmark of newly designed text-based games, whose rules are novel or counterintuitive, requiring agents to acquire knowledge through interaction rather than rely solely on pretrained knowledge. These games provide reproducible feedback and automatic scoring, enabling controlled evaluation of learning across repeated attempts. We also vary game instances to test whether agents can apply what they have learned to new situations. Therefore, we evaluate how backbone models, self-evolving methods, and agent harnesses affect agents' learning ability, revealing three findings: (1) Experience retention: Retaining complete records of actions and feedback can support more effective learning than summarizing these experiences into rules or strategies. (2) Human agent gap: Top-performing human players achieve higher peak scores than the evaluated agents. Human explore more varied strategies, and repeat actions less. (3) Harness matters: With the backbone fixed, changing the harness can improve performance while reducing estimated inference cost. Together, these findings provide insights into how LLM agents learn from experience and suggest directions for future work to improve their learning ability. Project website: https://liushiliushi.github.io/learn2play-bench-website/",
      "upvotes": 153,
      "github_stars": 12,
      "github_repo": "https://github.com/liushiliushi/Learn2Play-Bench",
      "project_page": "https://liushiliushi.github.io/learn2play-bench-website/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.08215",
      "arxiv_url": "https://arxiv.org/abs/2610.08215",
      "title_ja": "Learn2Play Bench: LLMエージェントは未知の環境での経験から学習できるか？",
      "summary_ja": "既存知識が通用しない独自のルールを持つテキストゲームを通じ、エージェントが相互作用から新たな知識を獲得する能力を評価。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 149,
      "github_stars": 26,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex: 視覚的に接地された反応的なヒューマノイド制御",
      "summary_ja": "一人称視点からの物体の動的な予測に基づき、投げられた箱を全身で受け止めるような反応的動作をリアルタイムで実現。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 141,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期間の端末知能に向けたエージェント・データのスケーリング",
      "summary_ja": "試行錯誤やフィードバックへの適応を含む、実社会の複雑なタスクを解くための高品質な長期間の実行軌跡データを構築。"
    },
    {
      "id": "2610.12242",
      "title": "TokenRouter: Efficient Serving System for Token-Level LLM Routing",
      "abstract": "Large language model (LLM) routing distributes inference work across different models, advancing the cost-quality Pareto frontier of LLM serving. While coarse-grained routing at the session or query level has been widely adopted in production systems, recent algorithmic work shows that fine-grained token-level routing can yield substantial efficiency and quality gains. However, efficiently serving token-level routed inference poses significant challenges to existing systems. Built on single-LLM assumptions, current systems suffer from severe step desynchronization and frequent batch admission delays under token-level routing, and they also impose high implementation complexity on developers. To address these challenges, we design TokenRouter, an efficient and developer-friendly serving system for token-level routed LLM inference. TokenRouter follows the principle of request-centric programming, model-centric execution: developers describe routing logic from the perspective of a single request, while the runtime launches a subserver for each LLM and dispatches requests asynchronously. Each subserver employs a delayed-batching scheduler, whose optimal hyperparameters are derived from a mathematical throughput model of the system. Across diverse routing algorithms, workloads, and model pairs, TokenRouter achieves 2.01-64.15x higher decoding throughput than existing systems, substantially advancing the serving efficiency of token-level LLM routing. Our code is available at https://github.com/thu-nics/TokenRouter.",
      "upvotes": 138,
      "github_stars": 58,
      "github_repo": "https://github.com/thu-nics/TokenRouter",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/tokenrouter/",
      "comments": 2,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.12242",
      "arxiv_url": "https://arxiv.org/abs/2610.12242",
      "title_ja": "TokenRouter: トークンレベルのLLMルーティングのための効率的な提供システム",
      "summary_ja": "複数のモデル間でトークン単位の推論を割り振る際の同期遅延や複雑さを解消し、コストと品質の最適化を支える配信システム。"
    },
    {
      "id": "2610.06100",
      "title": "From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation",
      "abstract": "Realistic environment replicas are increasingly valuable for training and evaluating LLM agents, yet the original systems may be inaccessible or impractical to reproduce. We explore agentic language world modeling: rather than rebuilding an executable environment, a world model agent serves as the environment for a task agent and supports faithful and stateful simulation. We instantiate this paradigm with Trace2Env, a learning-free framework for settings where the original system is unavailable but historical interaction traces remain accessible. Trace2Env reconstructs these traces into a reusable environment worldbook containing environment schemas, grounded evidence, and induced behavioral knowledge. At runtime, the world model agent actively consults the worldbook together with persistent episodic state to infer each action's observation and lasting state effects. Across nine environments, Trace2Env improves both next-observation fidelity and long-horizon interaction consistency over conventional prompt-based LWMs. In multi-turn interaction, task agent actions generated against Trace2Env remain valid more often when replayed in the real environment, indicating that its simulated dynamics better preserve the consequences of earlier actions across successive turns. These results establish agentic language world modeling as an alternative direction for building realistic environment replicas without reconstructing the original executable system.",
      "upvotes": 116,
      "github_stars": 61,
      "github_repo": "https://github.com/ruyue0001/trace2env",
      "project_page": "https://quanyulong.net/trace2env/",
      "comments": 2,
      "org": "Nanyang Technological University Singapore",
      "url": "https://huggingface.co/papers/2610.06100",
      "arxiv_url": "https://arxiv.org/abs/2610.06100",
      "title_ja": "Trace2Env: 対話履歴からのエージェント言語世界モデルによる環境シミュレーション",
      "summary_ja": "実行環境が不在でも、過去の対話ログから状態を持つ仮想環境を再構築し、エージェントの訓練や評価を可能にする手法。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 110,
      "github_stars": 79,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex: 都市規模の3Dシーンに対するエージェント空間グラウンディング",
      "summary_ja": "都市規模の3Dシーンを対話型環境と見なし、能動的な視点移動と検索によって物体を特定する強化学習ベースの枠組み。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 102,
      "github_stars": 18,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym: 合成ソフトウェア環境によるコンピュータ操作エージェントの訓練拡張",
      "summary_ja": "多様なインターフェースと検証可能な機能を持つGUI環境を自動合成し、エージェントの汎化性能を向上させるパイプライン。"
    },
    {
      "id": "2610.11959",
      "title": "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement",
      "abstract": "Reinforcement learning (RL) is the central training paradigm for advancing large foundation models towards self-improvement. This report introduces the MiMo-V2.6 series, an omni-modal family that pushes the frontier of model intelligence by scaling RL compute. Prior to RL, we conduct mid-training on a broad multimodal corpus to provide ample exploration space, and build a solid infrastructure on the pretrained hybrid-SWA architecture to support subsequent scale-up. We scale RL compute along three dimensions: (1) larger batches and higher throughput, with an asynchronous training that consumes 1,568 samples and 2.7-3.7B tokens per step at context lengths of up to 1M; (2) more diverse and complex environments, spanning code, general, visual, and cyber domains under a mixture of agent harnesses; and (3) more grader compute, via groupwise agentic grading that yields more accurate reward signals for long-horizon tasks and steers the model towards shorter, more token-efficient solutions. To keep training stable at scale, we freeze the MoE router and establish a multi-layer defense against reward hacking. We further build infrastructure for mixed-task agentic RL, including a unified trajectory representation, high-concurrency multi-framework rollout, decoupled control and data planes, and training-inference consistency. We open-source the training dynamics, RL environments, and RL framework to facilitate reproduction and further research on scaled RL and model self-improvement.",
      "upvotes": 90,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Xiaomi MiMo",
      "url": "https://huggingface.co/papers/2610.11959",
      "arxiv_url": "https://arxiv.org/abs/2610.11959",
      "title_ja": "MiMo-V2.6: 自己改善に向けた強化学習のスケーリング",
      "summary_ja": "大規模なマルチモーダルコーパスとRL計算のスケーリングにより、100万トークンの文脈に対応する自己改善型基盤モデル。"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "abstract": "Long-horizon agents have drawn growing attention for their ability to work autonomously -- from hours to days -- on economically valuable tasks, a capability essential to automated discovery and recursive self-improvement (RSI). Yet open-source models still struggle on long-horizon tasks, largely for lack of both training data and a working recipe, and scaling both is hard: long, complex tasks are difficult to curate and verify, and their rewards are sparse. We address both. First, we introduce Tev-Gym, the first long-horizon agent training dataset with verifiable, dense, progressive rewards -- 1,170 verified task environments across 7 domains. It is built on a latent-world-first approach that first constructs a latent world: a complete and correct hidden specification of the task domain, workflow, and expected state after each step. Each task is then progressively rendered from this specification into an agent-facing environment, enabling controllable complexity and a natural progress metric. Second, we turn this metric into a training recipe: via progress-potential reward shaping (PPRS), we convert progress into a dense per-step reward that improves training efficiency and makes otherwise-intractable tasks trainable. Training with this recipe yields Tev-27B, which achieves substantial gains on the Agents' Last Exam computing and math sciences domains (ALE-CM), matching GPT-6 Astra and Claude Opus 5 at Pass@5. Despite training only on ALE-related data, it generalizes to the Terminal-Bench (TB) 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash, and reaches Claude Opus 4.8-level performance on middle-horizon tasks such as TB 2.1.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tev-agent.github.io/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.18868",
      "arxiv_url": "https://arxiv.org/abs/2610.18868",
      "title_ja": "Tev: 密な進捗報酬を用いた長期間エージェント環境のスケーリング",
      "summary_ja": "検証可能な密な報酬を備えた1,170の環境を含む、長時間タスクのエージェント訓練のための初の大規模データセット。"
    },
    {
      "id": "2610.12126",
      "title": "SuperNav: An Agentic Navigation System for Any Task in Any Scene",
      "abstract": "General-purpose service robots need navigation systems that can handle diverse human requests in unfamiliar environments, combining task generality with scene generality. Some existing methods fine-tune multimodal large language models (MLLMs) to predict navigation actions, making their behavior dependent on the coverage of navigation training data and potentially limiting generalization to new requests and environments. Our key insight is to let the MLLM focus on interpreting requests, understanding scenes, and making decisions while preserving its general-purpose capabilities and delegating motion execution to navigation tools. To realize this idea, we introduce SuperNav, which equips a pretrained MLLM with a specialized agent harness without navigation-specific fine-tuning of the MLLM. Our harness supports these decisions with Navigation Skills, agent-oriented Tools for physical interaction, and task-progress and context management. A unified visual-point interface connects decision-making to motion by allowing the model to specify destinations directly in images and revise its decisions from execution feedback. Together, these components support sustained navigation across different task requirements and environments. SuperNav outperforms four evaluated baselines on instance-level, multi-object, and demand-driven tasks. Category-level evaluation on HM3D and deployment on a real quadruped robot further demonstrate its applicability across environments. Project Page: https://zju3dv.github.io/SuperNav/",
      "upvotes": 85,
      "github_stars": 167,
      "github_repo": "https://github.com/zju3dv/SuperNav",
      "project_page": "https://zju3dv.github.io/SuperNav/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.12126",
      "arxiv_url": "https://arxiv.org/abs/2610.12126",
      "title_ja": "SuperNav: あらゆるシーンのあらゆるタスクに対応するエージェント航法システム",
      "summary_ja": "MLLMを意思決定に専念させ、動作実行を既存の航法ツールに委ねることで、未知のシーンや要求に汎化する移動ロボットシステム。"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "abstract": "A robot needs a world model that predicts how its actions will change the scene and a policy that chooses those actions. Models are usually built and evaluated for only one of these roles, and every robot records its actions in its own format. We ask whether one robot world model can serve both roles across different bodies, and what makes this work. We present GreenWAM, a world foundation model for robotics, together with the recipe that produces it: (1) a shared anatomical action space that describes 20 robot families, from bimanual arms to dexterous humanoids, in common joint coordinates; (2) joint training on these families in visual, action-conditioned and world-action modes; and (3) policies that split an action expert off the generator. As a world model, GreenWAM attains top-tier trajectory, depth and 3D accuracy on WorldArena 1.0, ahead of every world-action model and video generator in our comparison. As a policy, it scores among the top entries of the RoboTwin 2.0 leaderboard, reaches the highest zero-shot LIBERO-plus success among the compared methods and is competitive with dedicated vision-language-action and world-action policies on CALVIN and LIBERO. We further adapt GreenWAM to a real humanoid, where it succeeds more often than policies adapted from π_{0.5} and from Cosmos 3 Edge, and distill it into a single-step policy for real-time control. Controlled experiments yield three findings: robot specialization improves world prediction and control together; an action expert helps when split off at the start of adaptation; and keeping world-model modes during policy adaptation preserves robustness to scene changes.",
      "upvotes": 82,
      "github_stars": 4,
      "github_repo": "https://github.com/greenvla/GreenWAM",
      "project_page": "https://greenvla.github.io/GreenWAM/",
      "comments": 1,
      "org": "Sber Robotics Center",
      "url": "https://huggingface.co/papers/2610.18774",
      "arxiv_url": "https://arxiv.org/abs/2610.18774",
      "title_ja": "GreenWAM: ロボティクスのための世界基盤モデル",
      "summary_ja": "共通の関節座標系を用いて20種類のロボットを統合し、視覚予測と行動制御の両方を一貫して実行できる世界モデル。"
    },
    {
      "id": "2610.09326",
      "title": "VIS-Ground: Video Interactive Storytelling with Contextual Grounding",
      "abstract": "Video interactive storytelling enables viewers to actively steer how a video unfolds. However, once we allow viewers to intervene during generation, a new challenge arises: The viewer's request can have latent dependencies on both the grounding source and the current rendered video state. These dependencies may not be explicitly stated in any individual input, but emerge only when the source, rendered history, and new viewer intent are considered jointly. Existing interactive video generation systems primarily emphasize following viewer instructions, while source-grounded video generation methods focus on aligning generated content with an external narrative or knowledge source. This leaves a fundamental question underexplored: What context should a generation model ground on during interactive continuation, and how can heterogeneous, unstructured inputs be transformed into such grounding context? In this work, we formulate contextual grounding as the process of transforming heterogeneous input context into an executable constraint model for video generation. To address this challenge, we introduce VIS-Ground, which performs Structured Context Abstraction to recover grounded states and cross-context dependencies, Generation Constraints Induction to project relevant dependencies into candidate-specific constraints, and Constrained Video Generation to enforce these constraints through planning, verification, revision, and rendering. Across three video generation backbones, VIS-Ground consistently achieves the highest overall composite score, reaching an average absolute improvement of 10.3 points over the strongest per-backbone baselines. Detailed analysis further shows gains across both narrative and knowledge grounding, and reveals remaining challenges in dependency extraction, and faithful realization during video rendering.",
      "upvotes": 82,
      "github_stars": 4,
      "github_repo": "https://github.com/vis-ground/code",
      "project_page": "https://vis-ground.github.io",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.09326",
      "arxiv_url": "https://arxiv.org/abs/2610.09326",
      "title_ja": "VIS-Ground: 文脈的グラウンディングを用いたビデオ対話型ストーリーテリング",
      "summary_ja": "動画生成プロセスに視聴者が介介入する際、提供された素材と生成済みの履歴、新たな意図を統合して一貫性を保つ手法。"
    },
    {
      "id": "2610.18860",
      "title": "AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards",
      "abstract": "Generating information-rich visual artifacts such as slides, posters, and dashboards as code is appealing because the outputs are structured, editable, and verifiable. Yet code models cannot see how their choices of layout and color come together on the canvas, often limiting spatial planning and aesthetic quality. Image generators excel at visual design but can misrender requested content, making their outputs unreliable targets for direct reproduction. We therefore introduce AesCode, which generates code grounded in the content prompt while using an image generated from the same prompt as an aesthetic guidance. To do so, AesCode represents the target as a design graph that describes the whole canvas and makes each property attributable. From this graph, we derive complementary cross-modal rewards: deterministic verifiers score properties parsable from code and rendering, while a VLM judge assesses the non-parsable ones with a sample-specific Visual Graph Rubric (VGR) tied to graph elements and relations. We optimize these decoupled rewards through reinforcement learning with per-channel normalization to jointly improve spatial planning, aesthetic quality, and verifiable correctness. To evaluate this setting, we build a benchmark that scores verifiable correctness and visual quality separately, with visual scores highly consistent with human judgments. We find that reference images substantially improve the visual quality of code generated by existing models, and ablations show that AesCode benefits from references both as model input and as a source of visual rewards. Relative to same-scale Qwen3-VL baselines given the same references, AesCode-8B and AesCode-32B improve visual quality by 31.1 and 22.4 percentage points, reaching scores comparable to those of closed-source frontier models such as GPT-5.5 and Claude Opus 4.8.",
      "upvotes": 79,
      "github_stars": 62,
      "github_repo": "https://github.com/microsoft/AesCode",
      "project_page": "https://microsoft.github.io/AesCode/",
      "comments": 1,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.18860",
      "arxiv_url": "https://arxiv.org/abs/2610.18860",
      "title_ja": "AesCode: 分離型クロスモーダル報酬による審美的なコード生成",
      "summary_ja": "プロンプトから生成した画像を審美的なガイドとして使い、レイアウトや配色に優れたコード（スライド等）を生成する手法。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 77,
      "github_stars": 10,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2: オープンワールドのための再帰的なエージェント・ハーネス最適化",
      "summary_ja": "検証器のない未知のタスクでも、再帰的な自己改善を通じてエージェントの実行環境（ハーネス）を自動進化させる枠組み。"
    },
    {
      "id": "2609.39600",
      "title": "GroundAnything: Reconciling Parallel Decoding with Precise Visual Grounding at Flash Speed",
      "abstract": "Autoregressive (AR) grounding models serialize spatial predictions, introducing sequential latency and imposing a causal order on output tokens. We view grounding as visual evidence extraction: objects, locations, and spatial relations are jointly constrained by the image and query, yet their dependencies do not imply an intrinsic left-to-right generation order. This distinction makes bidirectional diffusion a natural fit, allowing spatial hypotheses to emerge in parallel and be jointly refined through iterative denoising. We introduce GroundAnything, a 4B-parameter grounding foundation model that reconciles fast parallel decoding with precise localization through blockwise denoising. Training combines grounding pretraining from public datasets and dedicated data engines, direct AR-to-diffusion conversion with joint AR and diffusion objectives, supervised fine-tuning, and GRPO-based reinforcement post-training. Across 30 grounding benchmarks, our autoregressive variant, GroundAnything-VLM, establishes a new overall state of the art among similarly sized models at 72.42%, remaining competitive with GPT-6 Astra (71.35%). With entropy-guided decoding, GroundAnything also surpasses the prior state of the art at this scale, averaging 61.75% versus 53.32% for the fast MTP-based LocateAnything model. We further explore decoding strategies, showing that an optional self-speculative mode achieves a 4.51times speedup over the AR counterpart with a 0.74 percentage-point drop in COCO F1mIoU. Infrastructure experiments show that progressive inference optimizations translate parallel decoding into practical speedups. These support efficient visual grounding in latency-sensitive real-world systems.",
      "upvotes": 73,
      "github_stars": 42,
      "github_repo": "https://github.com/groundingpi/GroundAnything",
      "project_page": "https://groundingpi.github.io/groundanything/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39600",
      "arxiv_url": "https://arxiv.org/abs/2609.39600",
      "title_ja": "GroundAnything: 超高速な精密視覚グラウンディングと並列デコードの両立",
      "summary_ja": "双方向拡散モデルを用いることで、自己回帰的な遅延を排除し、並列かつ高精度に対象を特定する4B規模の基盤モデル。"
    },
    {
      "id": "2610.13021",
      "title": "EmbodiedCLBench: Evaluating Continual Learning for Self-Evolving Embodied Agents",
      "abstract": "Continual learning requires models to accumulate past experience and transfer it to new tasks. Despite substantial research on continual learning, existing work remains largely confined to non-embodied settings, without extending to embodied environments. To address this gap, we introduce EmbodiedCLBench, the first benchmark in embodied simulation for evaluating the continual learning capability of self-evolving agents. With compositional generalization as the core evaluation principle, our benchmark evaluates whether agents can first learn from basic tasks and then recombine the acquired skills to solve complex, unseen advanced tasks. Based on EmbodiedCLBench, we conduct extensive experiments across multiple agent harnesses and learning methods, revealing consistent limitations and distinctive behaviors. Our results show that while advanced tasks can be hardly solved under zero-shot setting, the experience from basic tasks enables consistent improvement. Such benefit from the experience remains stable even if the task complexity increases. However, this improvement does not scale accordingly with the number of learning samples, and current agents cannot extract meaningful information from additional experience. Collectively, our findings highlight continual learning as a fundamental yet underexplored capability, and our benchmark offers valuable resources for designing effective self-evolving agents in embodied environments. Our code and dataset are available at https://pku-value-lab.github.io/EmbodiedCLBench-homepage.",
      "upvotes": 72,
      "github_stars": 16,
      "github_repo": "https://github.com/PKU-VaLuE-Lab/EmbodiedCLBench",
      "project_page": "https://pku-value-lab.github.io/EmbodiedCLBench-homepage/",
      "comments": 3,
      "org": "PKU-VaLuE-Lab",
      "url": "https://huggingface.co/papers/2610.13021",
      "arxiv_url": "https://arxiv.org/abs/2610.13021",
      "title_ja": "EmbodiedCLBench: 自己進化する実体化エージェントの継続学習評価",
      "summary_ja": "基礎的なタスクで得たスキルを再構成して未知の複雑なタスクを解けるか、実体化シミュレーション環境で継続学習能力を測定。"
    },
    {
      "id": "2610.16794",
      "title": "TPPO: Tracking-Value PPO For Language Model Reasoning",
      "abstract": "Proximal Policy Optimization (PPO) is widely used in reinforcement learning with verifiable rewards for language-model reasoning. While value evolution along trajectory characterizes relative token-level credit, yet standard critics often fail to track it under sparse terminal rewards. To model this evolution, we analyze the relation between successive prefix values and show that they admit a Bayesian decomposition with additive updates in log-odds space. We use this additive structure to construct Tracking-Value PPO (\\method), a cumulative value parameterization that sums position-wise scalar outputs into value logits. These outputs are learned through terminal-outcome supervision on the reconstructed values. \\method improves aggregate mathematical reasoning scores over PPO by 7.0 and 8.4 points on Qwen3-4B-Base and Qwen3-8B-Base, respectively, while improving out-of-distribution generalization. Gains extend to Qwen3-4B, Qwen2.5-Math-1.5B, Qwen3.5-9B and to countdown, and scientific coding tasks. Further analysis shows more accurate tracking of value evolution and more reliable advantage estimates. Our code is publicly available in https://github.com/LINs-lab/TPPO.",
      "upvotes": 71,
      "github_stars": 13,
      "github_repo": "https://github.com/LINs-lab/TPPO",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.16794",
      "arxiv_url": "https://arxiv.org/abs/2610.16794",
      "title_ja": "TPPO: 言語モデル推論のためのトラッキング・バリューPPO",
      "summary_ja": "疎な報酬下でもトークンごとの価値の変化を正確に追跡できるよう、累積的な価値パラメトリ化を導入したPPOの改良。"
    },
    {
      "id": "2610.14709",
      "title": "Vela: User Behavior as Supervision Sparks LLM Intelligence",
      "abstract": "Large language models are increasingly deployed in applications that act on users' long-term behavior histories, from personal assistants to recommendation and advertising systems. These applications demand the user dimension of LLM intelligence: inferring a person's preferences, intent, and likely future actions from weeks to years of behavior data. Yet current models are trained on static text or synthetic data, neither of which captures how user behavior evolves over time. Real-world behavior records, already available at scale on content platforms and in personal-assistant agents, offer a natural supervisory signal. We propose user behavior as supervision and introduce Vela, a framework that converts real user behavior data into trainable tasks and trajectories. From the anonymized behavior records of 100,000 users, Vela generates 100,000 tasks across 91 real-world task templates; difficulty-based filtering and trajectory acceptance criteria retain approximately 75,000 tasks with selected training trajectories. Fine-tuning Qwen3.6-35B-A3B on these trajectories improves performance over the base model by up to 11.5 points on user-related tasks and by an average of 4 points on general benchmarks. Training on more user behavior data further improves user-related performance, and reinforcement learning after fine-tuning outperforms reinforcement learning from the base model by up to 7.7 points. These gains suggest that real-world user behavior is a scalable source of supervision for both user-centered capabilities and the broader intelligence of LLMs.",
      "upvotes": 69,
      "github_stars": 14,
      "github_repo": "https://github.com/AllSpark-Research/Vela",
      "project_page": "https://allspark-research.github.io/Vela/",
      "comments": 5,
      "org": "AllSpark Research",
      "url": "https://huggingface.co/papers/2610.14709",
      "arxiv_url": "https://arxiv.org/abs/2610.14709",
      "title_ja": "Vela: ユーザー行動の監視がLLMの知性を加速させる",
      "summary_ja": "長期にわたるユーザーの行動履歴を教師信号として学習し、嗜好や未来の行動を予測する能力を高めるフレームワーク。"
    },
    {
      "id": "2610.12299",
      "title": "Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction",
      "abstract": "Egocentric world models predict first-person observations conditioned on an agent's actions, but most focus on a single agent. Real embodied settings often involve multiple agents that act and interact within a shared environment. Existing multi-agent world models rely on coarse actions like locomotion, camera control, or discrete commands, leaving fine-grained embodied interactions underexplored. We formulate multi-agent egocentric world modeling as synchronized ego-stream generation for multiple agents interacting through fine-grained actions in a shared world. This requires cross-view action consistency, shared-environment consistency, and consistent propagation of interaction-induced state updates. We propose Multi-agent Egocentric World Model (ME-World), which jointly denoises multiple ego streams in a shared token sequence, conditions each stream on all agents' target-view poses, and grounds generation with shared environment memory. We train and evaluate on real and synthetic multi-agent data and introduce shared-world consistency metrics for environment, update, and identity consistency. Experiments show ME-World improves shared-world consistency, action control, identity preservation, and video quality over existing methods.",
      "upvotes": 68,
      "github_stars": 20,
      "github_repo": "https://github.com/cvlab-kaist/ME-World",
      "project_page": "https://cvlab-kaist.github.io/ME-World/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.12299",
      "arxiv_url": "https://arxiv.org/abs/2610.12299",
      "title_ja": "詳細な身体的相互作用を伴うマルチエージェント一人称世界モデル",
      "summary_ja": "共有環境内で複数のエージェントが相互作用する様子を、一貫性のある一人称視点映像として同期生成する世界モデル。"
    },
    {
      "id": "2610.16811",
      "title": "X-Ragent: Tool-Augmented Reinforcement Learning for Evidence-Grounded Chest X-Ray Reasoning",
      "abstract": "Chest X-ray (CXR) interpretation often requires integrating visual findings with task-specific evidence rather than relying on direct visual recognition alone. While tool-augmented medical agents can supply such evidence via external modules, they often lack explicit mechanisms for learning when auxiliary evidence is needed and for preventing inapplicable quantitative evidence from entering diagnostic reasoning. To address this, we propose X-Ragent, a post-training framework for tool-augmented reinforcement learning that decouples learned auxiliary-evidence seeking from validity-gated quantitative measurement acquisition for evidence-grounded CXR reasoning. We construct Rad-CoT, a 7.7K-sample corpus combining causally ordered tool-augmented trajectories with report-style diagnostic reasoning, and use it to initialize Qwen3-VL-8B via agentic supervised fine-tuning (SFT). We then optimize the policy with Group Relative Policy Optimization (GRPO) using an accuracy-gated reward that applies process-level terms for measurement consistency and auxiliary-tool cost only to correct trajectories, preventing plausible process behavior from compensating for an incorrect diagnosis. Across three CXR benchmarks, X-Ragent achieves the strongest results, including an 8.6-point improvement on the fully held-out ChestAgentBench. By seeking evidence selectively and admitting only valid measurements, X-Ragent supports more faithful and evidence-grounded CXR reasoning.",
      "upvotes": 66,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.16811",
      "arxiv_url": "https://arxiv.org/abs/2610.16811",
      "title_ja": "X-Ragent: 証拠に基づく胸部X線推論のためのツール拡張強化学習",
      "summary_ja": "補助的な証拠が必要な時を学習し、有効な定量的測定値のみを診断に反映させるツール拡張型の医療用推論エージェント。"
    },
    {
      "id": "2610.13990",
      "title": "DoSA: Dots Sparse Attention",
      "abstract": "Sparse attention visits few keys, yet finding them can still require scoring every key with every indexer head. We introduce DoSA (Dots Sparse Attention), a lossless method for making this computation conditional while preserving exact token selection. Its central observation is that Top-K selection requires sufficient evidence to reject a candidate, not necessarily its full score. A seed set supplies a lower bound on the winning threshold. Nonnegative head projections and joint residual bounds upper-bound positive contributions, while activation-informed aggregation bounds the magnitude subtracted by negative heads. The certificate directs full scoring toward candidates that remain eligible; exact-score filtering further reduces writeback and selection work. We establish the certificate and its exact-selection conditions, and analyze how geometry and selection margins govern its effectiveness. Our GPU implementation accelerates the complete Indexer by up to 2.74 times over SGLang and 1.69 times over LiteTopK across English, Chinese, and code workloads. End-to-end evaluation on GLM-5.2 and DeepSeek-V3.2 achieves up to 1.94 times and 1.50 times time-to-first-token speedups over the two baselines, respectively.",
      "upvotes": 66,
      "github_stars": 21,
      "github_repo": "https://github.com/llm-sys/flash-indexer",
      "project_page": "",
      "comments": 1,
      "org": "dots studio",
      "url": "https://huggingface.co/papers/2610.13990",
      "arxiv_url": "https://arxiv.org/abs/2610.13990",
      "title_ja": "DoSA: ドット・スパース・アテンション",
      "summary_ja": "計算の境界条件を利用して全スコアを計算せずにTop-Kのキーを正確に特定する、情報の欠落がない高速な注意機構。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Princeton Researchers Fix Costly AI Training Mistakes With 100x Smaller Learning Rates",
      "summary": "A new study shows that proxy models used to pick pretraining data can flip their verdicts with tiny learning rate changes, with a simple fix.",
      "url": "https://alphasignal.ai/news/princeton-researchers-fix-costly-ai-training-mistakes-with-100x-smaller",
      "published": "2026-10-15T09:00:18+09:00",
      "title_ja": "プリンストン大の研究者、100倍小さい学習率でAIトレーニングの失敗を修正",
      "summary_ja": "データ選択用のプロキシモデルが学習率の僅かな変化で判定を覆す問題を簡単な方法で改善。"
    },
    {
      "lab": "AlphaSignal",
      "title": "SoSBench Catches DeepSeek-R1 Leaking Dangerous Science at 84.9%",
      "summary": "A new regulation-grounded benchmark exposes how frontier models leak hazardous scientific knowledge, with Deepseek-R1 violating safety policies 84.9% of the time.",
      "url": "https://alphasignal.ai/news/sosbench-catches-deepseek-r1-leaking-dangerous-science-at-84-9",
      "published": "2026-10-15T08:26:04+09:00",
      "title_ja": "SoSBenchによりDeepSeek-R1の危険な科学情報の漏洩が判明",
      "summary_ja": "新指標により、DeepSeek-R1が安全ポリシーに84.9%違反して有害知識を漏洩することを特定。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Code Now Runs Nested Sessions and Saves Dev Environments",
      "summary": "Claude Code desktop app adds nested parallel sessions, saved environments, a session recap card, and a /btw command for side questions.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-code-now-runs-nested-sessions-and-saves-dev-environments",
      "published": "2026-10-15T04:01:14+09:00",
      "title_ja": "AnthropicのClaude Codeがネストしたセッションと開発環境の保存に対応",
      "summary_ja": "並列セッション、環境保存、セッション要約カード、サイド質問用のコマンド等が追加。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Opens Claude Tracing so Developers Can Debug AI Agent Failures",
      "summary": "Anthropic's Claude Platform now emits OpenTelemetry traces from the Messages API, Managed Agents, and SDKs so you can debug agents in your existing observability stack.",
      "url": "https://alphasignal.ai/news/anthropic-opens-claude-tracing-so-developers-can-debug-ai-agent-failures",
      "published": "2026-10-15T02:25:25+09:00",
      "title_ja": "AnthropicがAIエージェントの失敗をデバッグ可能なClaude Tracingを公開",
      "summary_ja": "APIやSDKからトレース情報の出力が可能になり、既存の監視ツールでデバッグが行える。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:34+09:00",
      "title_ja": "Research@ 2026：人間の創意工夫を増幅する10の方法",
      "summary_ja": "科学全般において人間の能力を拡張するための10のアプローチを紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの活用：地球規模の課題に挑む地理空間エージェント",
      "summary_ja": "地球規模の重要な課題を解決するために地理空間データを扱うAIエージェントを導入。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewを用いて複雑な技術文書を詳細に分析し、内容の理解を深める。"
    },
    {
      "lab": "Hugging Face",
      "title": "HiRO-ACEv2: Simulating extreme weather at 3 km resolution for a fraction of the cost",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/hiro-acev2",
      "published": "2026-10-15T01:12:42+09:00",
      "title_ja": "HiRO-ACEv2：極端気象を低コストかつ3kmの解像度でシミュレーション",
      "summary_ja": "従来の数分の一のコストで、3kmの高解像度による異常気象のシミュレーションを実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google DeepMind Shrinks Gemma 4 E4B to 5GB Without Losing Reasoning Power",
      "summary": "Google released quantization-aware trained Q4_0 GGUF checkpoints of Gemma 4 E4B, delivering near-bfloat16 quality in a 5.15 GB on-device package.",
      "url": "https://alphasignal.ai/news/google-deepmind-shrinks-gemma-4-e4b-to-5gb-without-losing-reasoning-power",
      "published": "2026-10-15T00:29:21+09:00",
      "title_ja": "Google DeepMind、推論力を維持したままGemma 4 E4Bを5GBに縮小",
      "summary_ja": "量子化トレーニングにより、5.15GBのサイズで元の精度に近い品質をオンデバイスで実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Amp puts AI agents to work beyond code with OpenAI models",
      "summary": "See how Amp pushes the frontier of what agents can do with GPT-6 Astra, Ultrafast, GPT-Live-1, and Sign in with ChatGPT.",
      "url": "https://openai.com/index/amp-beyond-coding",
      "published": "2026-10-14T21:00:00+09:00",
      "title_ja": "AmpがOpenAIモデルを活用しコード生成以外の領域でAIエージェントを運用",
      "summary_ja": "GPT-6 Astra等の最新モデルを用いて、エージェントができることの限界を押し広げる。"
    },
    {
      "lab": "OpenAI",
      "title": "SentinelOne cuts malware analysis from weeks to hours",
      "summary": "With OpenAI Daybreak, SentinelOne cuts weeks of malware analysis to hours, creating capacity to investigate more threats.",
      "url": "https://openai.com/index/sentinelone",
      "published": "2026-10-14T21:00:00+09:00",
      "title_ja": "SentinelOneがマルウェア分析期間を週間単位から時間単位へ短縮",
      "summary_ja": "OpenAI Daybreakの活用により、数週間かかっていた分析を数時間に短縮し調査効率を向上。"
    },
    {
      "lab": "AlphaSignal",
      "title": "ConvNeXt-Tiny Hits 84% Accuracy With 750K Downloads on Hugging Face",
      "summary": "A 28M-parameter ConvNeXt variant trained on an 11,821-class ImageNet subset hits 84.2% top-1 while pushing 2,400+ images per second on a single RTX 3090.",
      "url": "https://alphasignal.ai/news/convnext-tiny-hits-84-accuracy-with-750k-downloads-on-hugging-face",
      "published": "2026-10-14T18:29:29+09:00",
      "title_ja": "ConvNeXt-Tinyが84%の精度を達成しHugging Faceで75万DLを記録",
      "summary_ja": "軽量な28Mパラメータで、RTX 3090にて秒間2400枚以上の高速処理と高精度を両立。"
    },
    {
      "lab": "OpenAI",
      "title": "How Third Moment Research runs 10,000 agents for 36+ hours",
      "summary": "With GPT-6 Astra and GPT-6.1 Sol, Codex, and Daybreak for cybersecurity, this AI lab builds agents that focus for days and improve with use.",
      "url": "https://openai.com/index/third-moment-research",
      "published": "2026-10-14T16:00:00+09:00",
      "title_ja": "Third Moment Researchが1万のエージェントを36時間以上稼働させる方法",
      "summary_ja": "最新のGPT-6モデル群を活用し、数日間集中して自己改善し続けるサイバーセキュリティ用エージェントを構築。"
    },
    {
      "lab": "OpenAI",
      "title": "How Block is building AI-powered security with OpenAI technology",
      "summary": "Block is building AI-powered security with OpenAI. Its security team investigates threats faster and proposes patches in minutes.",
      "url": "https://openai.com/index/block-ai-powered-security",
      "published": "2026-10-14T16:00:00+09:00",
      "title_ja": "BlockがOpenAIの技術でAI駆動のセキュリティを構築する方法",
      "summary_ja": "脅威調査の迅速化と、数分でのパッチ提案が可能なAI搭載セキュリティシステムを構築。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府が詐欺検出用の微調整AIモデルを共同開発",
      "summary_ja": "軽量なGemmaモデルを使い、データをクラウドに送らずデバイス上で会話型詐欺を遮断。"
    },
    {
      "lab": "OpenAI",
      "title": "The EU’s next chapter in AI is agentic",
      "summary": "New analysis shows how agentic AI adoption is growing across EU enterprises and small businesses—and where deeper use could unlock more value.",
      "url": "https://openai.com/index/the-eus-next-chapter-in-ai-is-agentic",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "EUにおけるAIの次章はエージェント型へ",
      "summary_ja": "EUの企業におけるエージェント型AIの普及状況と、更なる活用による価値創出の可能性を分析。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モーダル・マスクド拡散モデルの設計空間",
      "summary_ja": "テキスト、画像、音声をゼロから事前学習した初の3モーダル拡散モデルを導入。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルの言語選択次元によるコードスイッチング検出",
      "summary_ja": "音声から直接、複数言語が混在する箇所を検出する軽量な手法を提案。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "次世代モデルGemini 4 Argonにおける安全性と責任ある開発体制についての詳述。"
    },
    {
      "lab": "Hugging Face",
      "title": "Run fast, private agents on-device with LFM2.5-24B-A2B",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b",
      "published": "2026-10-14T02:05:48+09:00",
      "title_ja": "LFM2.5-24B-A2Bによる高速・プライベートなオンデバイス・エージェントの実行",
      "summary_ja": "高性能なモデルを用いて、プライバシーを確保しつつデバイス上で高速にエージェントを動かす。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon for Robotics",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-for-robotics/",
      "published": "2026-10-14T01:01:58+09:00",
      "title_ja": "ロボット工学のためのGemini 4 Argon",
      "summary_ja": "最新モデルGemini 4 Argonをロボット分野に応用し、高度な制御や理解を実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: Built to solve your hardest problems",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-argon/",
      "published": "2026-10-14T01:01:52+09:00",
      "title_ja": "Gemini 4 Argon：最も困難な問題を解決するために構築",
      "summary_ja": "非常に難易度の高い課題を解決するために設計された新世代モデルの紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "Higgsfield takes AI video from 1 minute to over 10",
      "summary": "Higgsfield brings creators longer videos with GPT-6 Astra, precise visuals with GPT-Image-2.5, and a path to voice filmmaking with GPT-Live.",
      "url": "https://openai.com/index/higgsfield-longer-videos-voice",
      "published": "2026-10-13T21:00:00+09:00",
      "title_ja": "HiggsfieldがAI動画の長さを1分から10分以上に延長",
      "summary_ja": "最新のGPTモデル群を活用し、正確な描写と音声を含む長尺の動画制作を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Mix, Don't Tune: Bilingual Pre-Training Outperforms Hyperparameter Search in Data-Constrained Settings",
      "summary": "For most languages of the world, language model pre-training operates in a data-constrained regime where models must repeat their training data many times, degrading generalization. Two remedies exist: aggressive hyperparameter tuning such as high weight decay, and mixing in data from a high-resource auxiliary language to directly aid the low-resource target. While hyperparameter tuning regularizes the model by shrinking weights to restrict network capacity, auxiliary data mixing uses a tunable mixing ratio to expand the training distribution and diversify the training signal with new…",
      "url": "https://machinelearning.apple.com/research/mix-dont-tune",
      "published": "2026-10-13T09:00:00+09:00",
      "title_ja": "Mix, Don't Tune：データ制約下でハイパラ検索を凌駕するバイリンガル事前学習",
      "summary_ja": "低リソース言語の学習において、調整よりも多言語データの混合が汎用性を高めることを証明。"
    },
    {
      "lab": "Apple ML",
      "title": "Large Language Models for Machine Translation Quality Annotation: Humans and Models Are Both Challenged",
      "summary": "Large Language Models (LLMs) are considered to be a more efficient and cost-effective alternative to human judgment for Machine Translation (MT) evaluation. With MT evaluation spanning a large number of language pairs, domains and levels of annotation granularity, LLMs must be thoroughly evaluated across these dimensions before being reliably used as alternatives to human evaluation. In this paper, we evaluate the performance of LLMs for two prominent MT quality evaluation schemes: Multidimensional Quality Metrics (MQM) and Error Span Annotation (ESA) by comparing their agreement with human…",
      "url": "https://machinelearning.apple.com/research/llm-translation-quality-annotation",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "機械翻訳の品質注釈におけるLLM：人間とモデル双方への挑戦",
      "summary_ja": "翻訳評価においてLLMが人間の代替となるか、様々な言語ペアや評価指標で性能を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "Minions: A Dynamic and Distributed Virtual GPU Cloud Built on Idle Apple Silicon Devices",
      "summary": "The increasing demand for GPU-accelerated machine learning inference has exposed limitations in centralized GPU infrastructures, including high cost, limited elasticity, and long wait times under resource constraints. At the same time, modern Apple Silicon–based macOS devices are equipped with powerful GPUs that remain largely idle during normal usage. This paper presents Minions, a dynamic and distributed virtual GPU cloud that aggregates idle Apple Silicon GPUs across macOS devices to execute large-scale machine learning inference workloads. Minions enables teams to leverage existing…",
      "url": "https://machinelearning.apple.com/research/distributed-gpu-cloud",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "Minions：休止中のApple Siliconデバイスで構築する動的分散仮想GPUクラウド",
      "summary_ja": "Macデバイスの空きGPU資源を統合し、安価で弾力的な推論ワークロードの実行を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Self-Compacting Language Model Agents",
      "summary": "Long agent traces composed of chains of thought and tool calls accumulate stale content that anchor subsequent generations, and eventually outgrow the context window. Existing scaffolds mitigate it with fixed-interval compaction triggered at a token threshold. Such triggers pay no heed to trajectory structure, risking discard of partial results mid-derivation or mid-search.  We propose SELFCOMPACT, a scaffold that allows the model itself to decide when and how to compact. Specifically, it pairs two inference-time elements: (i) a compaction tool the model invokes to summarize the accumulated…",
      "url": "https://machinelearning.apple.com/research/self-compacting-language-agents",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "自己圧縮型言語モデルエージェント",
      "summary_ja": "モデル自身が最適なタイミングで履歴を要約・圧縮し、文脈制限の問題を回避する手法を提案。"
    },
    {
      "lab": "Hugging Face",
      "title": "The model that didn't exist, so you made it yourself",
      "summary": "",
      "url": "https://huggingface.co/blog/building-with-ml-intern",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "存在しなかったから、あなたが自分で作ったモデル",
      "summary_ja": "ユーザーが必要なモデルを自ら作成・カスタマイズする取り組みについての紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "より良い成果は、常により良い労働者を意味するか？",
      "summary_ja": "AIによる成果の向上が、それを行う労働者の評価や定義にどう影響するかを考察。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing Falcon ASR",
      "summary": "",
      "url": "https://huggingface.co/blog/tiiuae/falcon-asr",
      "published": "2026-10-07T22:21:03+09:00",
      "title_ja": "Falcon ASRの導入",
      "summary_ja": "Falconシリーズに新たに加わった、高性能な自動音声認識（ASR）機能の紹介。"
    }
  ]
};
