window.papersData = {
  "updated_at": "2026-10-16 09:08 JST",
  "arxiv": [
    {
      "id": "2610.19625",
      "title": "DAGFormer: Global Topology Prediction for Transformer Cross-Layer Connections",
      "url": "https://arxiv.org/abs/2610.19625",
      "pdf": "https://arxiv.org/pdf/2610.19625",
      "authors": [
        "Xiaocong Yang",
        "Yuren Hao",
        "ChengXiang Zhai"
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
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "propose DAGFormer, a Transformer language model whose cross-layer connections",
      "signals": [],
      "headline": "Transformerの層間接続を動的に最適化し学習効率を向上させるDAGFormer",
      "what": "トポロジー予測器を同時に学習し、標準的な残差接続を超えて、入力トークンに基づいた最適な層間接続を動的に計画するアーキテクチャです。モデル全体のルーティングを一括で決定する点が特徴です。",
      "enables": "1Bパラメータモデルにおいて、従来のTransformerが10Bトークン学習して到達する精度を5Bトークンの学習で上回り、WikiText-2のPerplexityを最大25%改善しました。",
      "why_it_matters": "層間の情報の流れを最適化することで、既存のルーティング手法よりも高いデータ効率と性能、および構造的プルーニングへの耐性を獲得しています。",
      "tags": [
        "Transformer",
        "アーキテクチャ",
        "LLM"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19942",
      "title": "MorphingNet: Symbolic Regression Where the Network Is the Formula",
      "url": "https://arxiv.org/abs/2610.19942",
      "pdf": "https://arxiv.org/pdf/2610.19942",
      "authors": [
        "Jincheng Gao",
        "Jiahe Yi",
        "Shuo Sun"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 1 figure, 9 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "introduce MorphingNet, a network for symbolic regression (SR)",
      "signals": [],
      "headline": "ネットワーク自体が数式として機能し連続最適化が可能な記号回帰手法MorphingNet",
      "what": "関数の形式を学習可能なパラメータとし、指数関数や正弦波などに連続的に変化できるユニットで構成されたネットワークです。学習プロセス全体が連続最適化問題として処理され、最終的に簡潔な数式へと変換されます。",
      "enables": "SRBenchでSOTAを達成し、大規模データにおいて最強の探索ベース手法よりも最大100倍高速に動作し、生成元の数式を正確に復元しました。",
      "why_it_matters": "離散的な数式探索をGPUフレンドリーな密な線形代数に置き換えることで、科学的発見におけるスケーラビリティの問題を解決しています。",
      "tags": [
        "記号回帰",
        "科学的機械学習",
        "GPU加速"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
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
      "id": "2610.19033",
      "title": "How Many Ranks Does a Token Need? A Noise-Floor Squelch for Rank-One LoRA Experts",
      "url": "https://arxiv.org/abs/2610.19033",
      "pdf": "https://arxiv.org/pdf/2610.19033",
      "authors": [
        "Mei Okonkwo",
        "Owen Castellanos",
        "Ingrid Solberg",
        "Yusuf Demirel"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "preprint",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce SQUELCH, a router-free mixture of rank-one experts",
      "signals": [],
      "headline": "LoRAエキスパートの最適なランク数を動的に決定するノイズ除去手法SQUELCHの提案",
      "what": "LoRAの各成分に対するトークンの応答をガウスノイズと見なし、Steinの推定量を用いてトークンごとに最適なソフト閾値を決定する手法です。さらにValue Gram行列を用いた修正ステップにより、冗長な成分を抑制し相補的な成分を活性化させます。",
      "enables": "追加の学習パラメータなしで、LLaMA-3.1-8B等においてLoRAを2.2～3.2ポイント上回り、平均8.6個のコンポーネント活性化で従来のMoE手法を凌駕しました。",
      "why_it_matters": "固定のランク数や学習済みルーターを必要とせず、数学的なリスク一貫性に基づいて推論効率と精度の両立を実現しています。",
      "tags": [
        "LoRA",
        "MoE",
        "推論最適化"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20375",
      "title": "Hypothesis Selection via Weighted Medians",
      "url": "https://arxiv.org/abs/2610.20375",
      "pdf": "https://arxiv.org/pdf/2610.20375",
      "authors": [
        "Liang-Yu Zou"
      ],
      "categories": [
        "cs.DS",
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
        "sota"
      ],
      "star_quote": "The running time improves the dependence on the failure probability from polynomial to logarithmic",
      "signals": [],
      "headline": "重み付き中央値を利用し対数的な失敗確率で最適な仮説を選択する高速アルゴリズム",
      "what": "複数の分布候補からターゲット分布に最も近いものを選択する問題に対し、重み付き中央値を用いた新しいアルゴリズムを提案しています。サンプル複雑度と近似因子の両方で最適性を備えています。",
      "enables": "実行時間の失敗確率への依存度を多項式から対数（log(1/δ)）へと改善し、状態空間のサイズに対して効率的な計算を可能にしました。",
      "why_it_matters": "理論的な計算量上限を達成しつつ、先行研究で未解決だった計算効率の問題を解消したアルゴリズム理論上の進展です。",
      "tags": [
        "アルゴリズム理論",
        "分布推定",
        "統計的学習理論"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
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
      "id": "2610.19139",
      "title": "Online Tokenization with Optimal Delay in Linear Time",
      "url": "https://arxiv.org/abs/2610.19139",
      "pdf": "https://arxiv.org/pdf/2610.19139",
      "authors": [
        "Mina Dalirrooyfard",
        "Christopher Ye"
      ],
      "categories": [
        "cs.DS",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "58 pages, 9 figures, 6 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We give a near-linear time algorithm with optimal delay (up to constant factors).",
      "signals": [],
      "headline": "理論的に最適な遅延と線形時間計算を実現するオンラインBPEトークナイザー",
      "what": "BPEトークン化をストリーミング入力に対してリアルタイムで実行するオンラインアルゴリズムです。「遅延（delay）」という概念を定式化し、最適な遅延を保ちながら入力サイズに依存しない一定のメモリ使用量を実現しました。",
      "enables": "OpenAIのtiktokenと比較して、最初のトークン出力までのレイテンシを7.9～34.8倍改善し、スループットも2.4～7.0倍向上させました。",
      "why_it_matters": "LLMの推論においてボトルネックとなり得る前処理を、理論的な裏付けを持ちつつ劇的に高速化・省メモリ化する実用的な成果です。",
      "tags": [
        "トークナイゼーション",
        "LLM",
        "ストリーミングアルゴリズム"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
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
      "id": "2610.19305",
      "title": "Data-free Multistep Diffusion Distillation",
      "url": "https://arxiv.org/abs/2610.19305",
      "pdf": "https://arxiv.org/pdf/2610.19305",
      "authors": [
        "Ngoc Duy Tran",
        "Kien Do",
        "Duc Thanh Nguyen",
        "Truyen Tran"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 14 figures, 10 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose Progressive Multistep Data-free Distillation (PMDD)",
      "signals": [],
      "headline": "データフリーかつ複数ステップ対応の蒸留手法PMDDによる拡散モデルの高速化",
      "what": "各推論ステップ数に対応する専用の適応ネットワークを割り当てつつ、先行ステップの生成を保護するunforget lossを組み合わせたPMDDを提案しています。単一モデルで複数の推論予算をサポートし、最適化のバイアスを低減します。",
      "enables": "ImageNet 64x64で2ステップ時にFID 1.99を達成し、教師モデル（512ステップ）を上回る品質を、既存手法の約4〜5倍低い計算コストで実現しました。",
      "why_it_matters": "学習データを必要とせず、高品質なマルチステップ生成と計算効率を同時に達成できる実用的な蒸留フレームワークです。",
      "tags": [
        "拡散モデル",
        "モデル蒸留",
        "画像生成"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19364",
      "title": "Dynamic Graph World Modelling: Learning Future Dynamics from Temporal Context",
      "url": "https://arxiv.org/abs/2610.19364",
      "pdf": "https://arxiv.org/pdf/2610.19364",
      "authors": [
        "Bo Li",
        "Yue Yang",
        "Yujin Huang",
        "Siao Liu",
        "David Lemphers",
        "Sara E Rodriguez Gomez"
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
      "star_quote": "propose Dynamic Graph World Modelling (DyG-WM), the first framework",
      "signals": [],
      "headline": "時間的コンテキストから将来のグラフ状態を予測する動的グラフ世界モデルDyG-WM",
      "what": "履歴のノード・関係の軌跡を要約するエンコーダーと、構造変化を捉えるパスシグネチャエンコーダーを備えたフレームワークです。生グラフを再構成せずにターゲットの埋め込み表現を直接予測する目的関数を採用しています。",
      "enables": "12のリンク予測と2つのノード分類データセットにおいて、構造の経時変化を捉えることで高精度な将来予測が可能になりました。",
      "why_it_matters": "ノードと関係の進化を分離・統合して学習する初の世界モデルであり、スパースな将来の観測データに対しても頑健な学習を実現しています。",
      "tags": [
        "グラフニューラルネットワーク",
        "世界モデル",
        "時系列予測"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20331",
      "title": "Are We Overthinking One-Step Generation?",
      "url": "https://arxiv.org/abs/2610.20331",
      "pdf": "https://arxiv.org/pdf/2610.20331",
      "authors": [
        "Woobin Park",
        "Jaeyeon Kim",
        "Yilun Du",
        "Sitan Chen",
        "Bohyung Han"
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
      "star_quote": "introduce Priming Models, a simple two-stage framework",
      "signals": [],
      "headline": "再構成学習と特徴量空間の分布調整によるシンプルで高速な1ステップ画像生成モデル",
      "what": "Priming Modelsと呼ばれる2段階の学習フレームワークで、まず固定ノイズレベルでの再構成（デノイジング）を学習し、その後に特徴量空間での分布学習を行います。複雑な蒸留手法を必要としません。",
      "enables": "ImageNet 256x256において、既存手法の約1/10の計算コストで、1ステップ生成モデルとして最高水準のFID 1.19を達成しました。",
      "why_it_matters": "1ステップ生成における学習の難しさが、単純な再構成学習の先行実施だけで解消できることを示し、学習効率のパレート限界を更新しました。",
      "tags": [
        "画像生成",
        "1ステップ生成",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20400",
      "title": "HRTF Upsampling and Personalization via Neural Operators",
      "url": "https://arxiv.org/abs/2610.20400",
      "pdf": "https://arxiv.org/pdf/2610.20400",
      "authors": [
        "Meenakshi Krishnan",
        "You Zhang",
        "Ramani Duraiswami",
        "C. Phillip Brown"
      ],
      "categories": [
        "cs.SD",
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
        "sota"
      ],
      "star_quote": "18% lower LSD and 43% lower ILD error than the strongest baseline at 100 measurements",
      "signals": [],
      "headline": "ニューラルオペレーターを用いて少数の測定からHRTFを高速・高精度に復元するSPARO",
      "what": "まばらな空間方向の測定値を連続的なHRTFフィールドに写像するニューラルオペレーター手法です。測定値を球面潜在モードに投影し、Transformerで処理した後に任意の方向でデコードします。",
      "enables": "既存手法と比較してLSDを18%、ILD誤差を43%削減しつつ、ニューラルフィールドベースの手法よりも15〜373倍高速な復元を実現しました。",
      "why_it_matters": "個人の耳の形状等に依存するHRTFのパーソナライズにおいて、極めて少ない測定負担で高品質なバイノーラルオーディオを提供可能にします。",
      "tags": [
        "音声信号処理",
        "ニューラルオペレーター",
        "パーソナライゼーション"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19201",
      "title": "Into the LidarVerse: A Real-Time Unified LiDAR World Model Across Tasks and Sensors",
      "url": "https://arxiv.org/abs/2610.19201",
      "pdf": "https://arxiv.org/pdf/2610.19201",
      "authors": [
        "Henry Che",
        "Xuanchi Ren",
        "Sanja Fidler",
        "Shenlong Wang",
        "Laura Leal-Taix\\'e",
        "Shengyu Huang"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 17 figures. Project page: https://research.nvidia.com/labs/sil/projects/lidarverse",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LidarVerse achieves state-of-the-art performance on most reported metrics across all three evaluation protocols",
      "signals": [],
      "headline": "LiDARシミュレーションと予測を統合したリアルタイム世界モデルLidarVerse",
      "what": "LiDARシーケンスを共通の潜在空間にマップするユニバーサルトークナイザーを用いた生成フレームワークです。単一のモデルで、新規シーン生成、ポイントクラウド予測、既存シーンの再シミュレーションの3タスクを統合しています。",
      "enables": "H100 GPU 1枚で11 FPSのリアルタイム動作を実現し、32/64/128ビームの異なるセンサー構成や未知の走査パターンに対しても高い汎用性を示しました。",
      "why_it_matters": "再構成ベースの幾何学的整合性と、生成ベースの多様性を一つのモデルで両立させ、自律走行システム等のクローズドループ評価に貢献します。",
      "tags": [
        "自動運転",
        "LiDAR",
        "世界モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19408",
      "title": "ForkGRPO: Efficient Exploration and Fine-Grained Credit Assignment for Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.19408",
      "pdf": "https://arxiv.org/pdf/2610.19408",
      "authors": [
        "Zhaoyan Jia",
        "Chengwei Zhou",
        "Gourav Datta",
        "Massoud Pedram"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 5 figures. The first two authors contributed equally",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "ForkGRPO, an RL framework that couples efficient exploration with fine-grained segment-level credit assignment.",
      "signals": [],
      "headline": "拡散言語モデルの推論能力を高める効率的な探索と報酬割り当て手法ForkGRPO",
      "what": "高エントロピーな中間状態から複数の継続をサンプリングするForking戦略を用いた強化学習フレームワークです。セグメントレベルでの報酬割り当てと、共有プレフィックスの再利用により効率化を図っています。",
      "enables": "既存のGRPO手法と比較して、生成トークン数を最大27.8%削減しながら、数学や推論のベンチマークで最大1.2ポイントの精度向上を達成しました。",
      "why_it_matters": "拡散モデルベースのLLMにおいて課題であった探索の停滞と報酬の細粒度化を解決し、学習速度と性能の両立を可能にしました。",
      "tags": [
        "強化学習",
        "拡散モデル",
        "推論"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20107",
      "title": "Why Generate a Click? Plug-in Decision Heads for Web Agents",
      "url": "https://arxiv.org/abs/2610.20107",
      "pdf": "https://arxiv.org/pdf/2610.20107",
      "authors": [
        "Chengguang Gan",
        "Yunhao Liang",
        "Hanjun Wei",
        "Qinghao Zhang",
        "Zhixi Cai",
        "Shiwen Ni"
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
      "star_codes": [
        "cap"
      ],
      "star_quote": "Plug-in decision heads on a frozen generator predict the action type, pool the visual tokens inside each numbered box to pick the target",
      "signals": [],
      "headline": "Webエージェントの行動決定をトークン生成から分離するPlug-in Decision Heads",
      "what": "VLMの隠れ状態を直接利用して行動タイプやクリック対象を選択する軽量なヘッドを追加する手法です。確信度が高い場合はヘッドが即座に決定し、低い場合のみ通常のテキスト生成にフォールバックするカスケード構造を持ちます。",
      "enables": "WebArenaでの成功率を最大1.3%向上させつつ、生成トークン数を半分以下に削減しました。また、フリーズされたモデルに適用することで元の性能劣化を防いでいます。",
      "why_it_matters": "Webブラウジングのような構造的選択肢が多いタスクにおいて、冗長なテキスト生成を省略し、効率的かつ高精度なエージェント運用を可能にします。",
      "tags": [
        "Webエージェント",
        "VLM",
        "推論加速"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20586",
      "title": "Continuum Attention",
      "url": "https://arxiv.org/abs/2610.20586",
      "pdf": "https://arxiv.org/pdf/2610.20586",
      "authors": [
        "Afshin Khadangi"
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
      "hf_upvotes": 7,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "replaces discrete key and value lookup with integration over a continuous, piecewise linear memory curve.",
      "signals": [],
      "headline": "離散的なアテンションを連続的な積分に置き換えるContinuum Attention",
      "what": "キーと値のルックアップを区分線形なメモリ曲線上の積分に置き換える新しいアテンション演算子です。クエリが曲線上の指数的な関連性密度を誘発し、閉形式の指数モーメントから正確な正規化アテンションを計算します。",
      "enables": "標準的なSoftmaxやFocal Attentionと比較して、検証データの負の対数尤度を0.02〜0.048 nats/byte低減し、すべての比較で優れた性能を示しました。",
      "why_it_matters": "Transformerのデコーダー構造を維持したまま、離散的なトークン単位の制約を超えたより柔軟な情報の表現と利用を可能にする基礎的な提案です。",
      "tags": [
        "Transformer",
        "アテンション",
        "言語モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20590",
      "title": "Feed-Forward Multi-View Feature Coding for 3D Gaussian Splatting",
      "url": "https://arxiv.org/abs/2610.20590",
      "pdf": "https://arxiv.org/pdf/2610.20590",
      "authors": [
        "Seungmi Choi",
        "Ji-Hyoun Choi",
        "Suhyun Jo",
        "Tae-Gwon Park",
        "Hui Yong Kim"
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
      "star_quote": "MFGS achieves 99.76-99.86% bitrate savings over the generate-then-compress pipeline",
      "signals": [],
      "headline": "3D Gaussian Splattingの幾何と外観を統合的に圧縮するフィードフォワード符号化",
      "what": "入力画像から抽出した多視点特徴を直接コンパクトなビットストリームに符号化し、受信側でGaussian属性を予測するMFGSフレームワークです。幾何と外観の冗長性を同時に活用するレート歪み学習を導入しています。",
      "enables": "既存の圧縮パイプラインと比較して、同等以上の品質で99.76%以上のビットレート削減を達成し、処理速度を約12倍高速化しました。",
      "why_it_matters": "微分不可能な操作を排除したエンドツーエンド学習により、3Dシーンの超効率的な配信とレンダリング予算に応じた動的な品質調整を可能にしました。",
      "tags": [
        "3D Gaussian Splatting",
        "データ圧縮",
        "3D復元"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
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
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "url": "https://arxiv.org/abs/2610.20571",
      "pdf": "https://arxiv.org/pdf/2610.20571",
      "authors": [
        "Weijie Wang",
        "Haomin Zhang",
        "Ye Li",
        "Akide Liu",
        "Zeyu Zhang",
        "Haoyu Zhao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://lhmd.top/atas/, Code: https://github.com/ziplab/ATAS",
      "hf_upvotes": 323,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲323"
      ],
      "headline": "シーンとイベントのメモリ管理により長尺動画の整合性を保つATASフレームワーク",
      "what": "脚本をロケーション、カメラ、イベント時間の参照を含むショット要求に変換し、シーンメモリ（静的幾何）とイベントメモリ（動的観測）を利用して生成を制御するフレームワークです。生成後にメモリを更新・登録する仕組みを持ちます。",
      "enables": "既存の4つの動画生成モデルすべてにおいて、ショット間の一貫性指標を大幅に改善し、ターゲット画像の空間的な再訪問精度において最高スコアを達成しました。",
      "why_it_matters": "プロンプトの受け渡しだけでは不十分だった長尺動画における「同じ場所への戻り」や「過去の出来事の再現」を、明示的なメモリ機構で解決しました。",
      "tags": [
        "動画生成",
        "一貫性",
        "エージェント"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "abstract": "Long-form agentic video generation must turn a screenplay into shots that remain spatially and temporally consistent across nonconsecutive requests. Passing prompts or recent frames between shots does not provide a shared spatial frame for revisiting a scene or a time-indexed record for replaying an earlier event. We present Any Time, Any Space (ATAS), which compiles a screenplay into shot requests with explicit location, camera, and event-time references. Before generation, it retrieves relevant evidence from a scene memory of registered static geometry and an event memory of dynamic observations indexed by scene, event, and time. After generation, ATAS reconstructs and registers the clip. It updates memory only when review and state checks accept the observation, while film delivery remains independent of memory admission. Across four video generators, ATAS improves all reported cross-shot consistency measures and achieves the highest aggregate benchmark score for each backbone. It also outperforms the compared agents and 3D-guided methods on target-image spatial revisit, leads three event-recapture criteria, and receives the highest human ratings on all six criteria. The video results and code are available on our project page: https://lhmd.top/atas/.",
      "upvotes": 323,
      "github_stars": 197,
      "github_repo": "https://github.com/ziplab/ATAS",
      "project_page": "https://lhmd.top/atas/",
      "comments": 1,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.20571",
      "arxiv_url": "https://arxiv.org/abs/2610.20571",
      "title_ja": "Any Time, Any Space: エージェント型ビデオ生成のための世界状態中心フレームワーク",
      "summary_ja": "場所やイベントを記憶するメモリを備え、一貫性を保ちながら長尺ビデオを生成できる。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 314,
      "github_stars": 93,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI: 視覚プリミティブを用いた物理的知能のためのグラウンディング基盤モデル",
      "summary_ja": "座標を語彙として扱い、閉ループ制御に必要な高精度かつ高速な物体特定を可能にする。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 294,
      "github_stars": 173,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space: 多モーダル言語モデルにおける空間ワークスペースの探求",
      "summary_ja": "MLLM内部の線形サブ空間が物体位置をエンコードする「空間ワークスペース」を特定。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 276,
      "github_stars": 76,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva: 第一原理に基づくシステム1モデル",
      "summary_ja": "順序不変性や拡張性を備え、低遅延で構造化された意思決定を行う新しいアーキテクチャ。"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "abstract": "Computer-use agents have demonstrated strong capabilities in interpreting screens and executing keyboard and mouse actions. However, games, with their visually rich worlds and diverse mechanics, remain challenging and offer a demanding next step toward general digital control. Current game-agent learning pipelines often rely on large-scale demonstrations with limited coverage of dynamic game states, while scalable environments for interactive training remain difficult to obtain. We introduce Player-1, a post-training framework for learning game control beyond demonstrations through synthetic experience. We extend the computer-use action space with relative pointer motion, sustained inputs, and composite actions. For supervised initialization, we fine-tune computer-use models on 6,044 curated gameplay trajectories that pair recorded actions with task instructions and visual reasoning. We construct Player-1-Gym, sixteen synthetic 2D and 3D environments designed around control demands shared across games. Programmatically verifiable rewards and randomized observations and control dynamics support multi-environment reinforcement learning with PPO. The resulting Player-1-9B and Player-1-35B-A3B improve MineDojo-300 success over their SFT policies by 27.8 and 17.7 percentage points, respectively. Player-1-9B reaches 38.33% success compared with 12.63% for the strongest evaluated baseline, with further gains over SFT on ViZDoom-10 and GameWorld. Further analyses show that broader synthetic environment coverage improves transfer, while the use of composite actions that combine multiple keyboard and mouse inputs increases during RL. We demonstrate that learning from synthetic experience substantially improves game control beyond supervised initialization, with gains that generalize beyond the RL training suite.",
      "upvotes": 256,
      "github_stars": 75,
      "github_repo": "https://github.com/TencentARC/Player-1",
      "project_page": "https://player-1-project.github.io/",
      "comments": 1,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.20584",
      "arxiv_url": "https://arxiv.org/abs/2610.20584",
      "title_ja": "Player-1: 合成経験からのゲームプレイ学習",
      "summary_ja": "デモ不足を補うため、合成データを用いて相対移動等の複雑な操作を学習する枠組み。"
    },
    {
      "id": "2610.11765",
      "title": "Thinking Inertia: LLMs Keep Thinking When Told Not To",
      "abstract": "Large Language Models (LLMs) increasingly ship with explicit \"thinking modes\", yet their counterpart, \"no-thinking\", has received far less attention. We study LLMs' no-thinking behavior along two axes. a. How to measure no-thinking? Prior work typically defines no-thinking through proxies such as a disabled thinking mode or the absence of long traces. These proxies are unreliable: disabled thinking modes may still emit reasoning, while long traces may contain filler rather than genuine inference. We instead normalize each response into a pre-answer trace and final answer, and evaluate it at three levels: (i) Empty-Thinking Rate for strict answer-only compliance; (ii) instruction-aware Question-Pre-answer Relevance for similarity between the question and pre-answer trace; and (iii) LLM-as-judge Explicit Inference Rate for visible explicit inference. Together, these metrics distinguish answer-only output, relevant but non-inferential text, and explicit inference. b. How does no-thinking vary across tasks and models? We evaluate six prompting interventions on six LLMs across Boolean, multiple-choice, and open-ended questions. We find that explicit no-think controls cannot reliably eliminate visible inference. Models instead exhibit \"Thinking Inertia\": explicit inference persists even under strict controls and becomes more prevalent as the answer space opens. Accuracy remains stable on Boolean and multiple-choice tasks, whereas open-ended tasks reveal a trade-off between answer-only compliance and task accuracy. Rewriting the same questions across answer spaces shows that supplying candidate answers makes answer-only responses easier to produce. These findings establish no-thinking as a non-trivial capability: stopping explicit reasoning cannot be assumed from model settings or instructions alone and deserves systematic evaluation alongside reasoning ability.",
      "upvotes": 243,
      "github_stars": 6,
      "github_repo": "https://github.com/thinking-inertia/code",
      "project_page": "https://thinking-inertia.github.io/",
      "comments": 6,
      "org": "Stanford University",
      "url": "https://huggingface.co/papers/2610.11765",
      "arxiv_url": "https://arxiv.org/abs/2610.11765",
      "title_ja": "思考の慣性: LLMは「考えるな」と言われても考え続ける",
      "summary_ja": "思考モードをオフにしても推論が漏れ出る現象を定義し、その挙動を多角的に評価した。"
    },
    {
      "id": "2610.13521",
      "title": "Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation",
      "abstract": "Multi-teacher on-policy distillation (MOPD) extends on-policy distillation (OPD) by routing domain-specific data to specialized teachers, integrating their capabilities through dense token-level supervision on student-generated trajectories. However, domain routing only distinguishes the supervision sources for different domains; updates from all domains still act on shared parameters. When teachers differ substantially in response style and domain expertise, supervision that is effective in isolation may still lead to persistent gradient conflicts and capability degradation during joint optimization. To address this challenge, we propose Cross-Teacher Guarding for MOPD (Road MOPD), which introduces non-routed teachers as auxiliary cross-domain critics on the same student trajectories and coordinates multi-teacher supervision through token-level credit assignment and gradient updates. Specifically, cross-teacher-guided credit assignment uses teacher agreement to strengthen token-level corrections jointly supported by the teachers and attenuate conflicting signals; preventive multi-teacher gradient projection uses auxiliary gradients from the same trajectories to constrain potentially conflicting updates and adaptively controls projection strength to retain target-domain learning signals. In experiments, Road MOPD mitigates degradation in the disadvantaged domain, gains over 5 percentage points under high conflict, and improves overall performance in low-conflict and three-domain settings.",
      "upvotes": 233,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.13521",
      "arxiv_url": "https://arxiv.org/abs/2610.13521",
      "title_ja": "ドメインルーティングを超えて: 複数教師のオンポリシー蒸留のためのCross-Teacher Guarding",
      "summary_ja": "複数教師の知識を学生に蒸留する際の勾配衝突を防ぎ、各ドメインの性能低下を抑制する。"
    },
    {
      "id": "2610.13361",
      "title": "AgentSWE: Can Coding Agents Build the Agent You Actually Want?",
      "abstract": "As the production of software passes into the hands of software itself, coding agents are increasingly commissioned to build agents fitted to their users' own workflows. This delegation carries a quiet assumption, that the delivered agent will faithfully serve the requirement it was built for, rather than merely appear to. No existing benchmark tests that assumption. We introduce AgentSWE, a benchmark for agent software engineering spanning three stages of the agent development lifecycle: Creation of a complete agent from a natural-language requirement, Editing of production agent codebases, and Optimization toward a measurable target. Each of its 25 tasks is framed as a commission rather than an exam: the builder iterates against a handful of illustrative cases, while acceptance exercises the frozen submission on held-out cases designed to span the full requirement, grading behavior against requirement-derived rubrics under hard pass/fail gates or, for Optimization, against the source benchmark's own objective. Evaluating a range of coding agents across models and harnesses, we find that none comes close to delivering what a requirement asks for: the gap between what a builder demonstrates and what it delivers is the norm, not the corner case. An accompanying empirical analysis of the failure trajectories identifies recurring failure modes, among them overfitting to the visible cases, hollow runtimes behind code that looks complete, and unsupported claims of completion, each a signal by which coding agents can learn to build the agents they are asked for.",
      "upvotes": 226,
      "github_stars": 37,
      "github_repo": "https://github.com/VectorSpaceLab/AgentSWE",
      "project_page": "https://vectorspacelab.github.io/AgentSWE/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.13361",
      "arxiv_url": "https://arxiv.org/abs/2610.13361",
      "title_ja": "AgentSWE: コーディングエージェントは望み通りのエージェントを作れるか？",
      "summary_ja": "要件に基づき動作するエージェントを自律構築・編集・最適化できるかを測るベンチマーク。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 160,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期間の端末インテリジェンスのためのエージェント型データのスケーリング",
      "summary_ja": "試行錯誤や戦略調整を含む長期の行動履歴を構築し、エージェントの自律性を高める。"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 148,
      "github_stars": 130,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART: 拡散モデルの効率的、安定的かつスケーラブルな強化学習",
      "summary_ja": "報酬の集計方法を工夫し、拡散モデルの強化学習における効率性と安定性を両立させた。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 143,
      "github_stars": 123,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 2,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev: ビデオ理解とインタラクションのためのシステム1モデル",
      "summary_ja": "ビデオの理解と意思決定を構造化し、高速な時間特定と選択肢回答を同時に実現する。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 116,
      "github_stars": 92,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex: 都市規模3Dシーンのためのエージェント型空間グラウンディング",
      "summary_ja": "都市空間を探索し、ズームや視点変更を通じて目的の物体を特定するRLベースの手法。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 107,
      "github_stars": 18,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym: 多様な合成ソフトウェア環境によるコンピュータ利用エージェントの学習",
      "summary_ja": "多様なUIと機能を持つソフト環境を自動合成し、エージェントの汎用的な操作能力を養う。"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "abstract": "Long-horizon agents have drawn growing attention for their ability to work autonomously -- from hours to days -- on economically valuable tasks, a capability essential to automated discovery and recursive self-improvement (RSI). Yet open-source models still struggle on long-horizon tasks, largely for lack of both training data and a working recipe, and scaling both is hard: long, complex tasks are difficult to curate and verify, and their rewards are sparse. We address both. First, we introduce Tev-Gym, the first long-horizon agent training dataset with verifiable, dense, progressive rewards -- 1,170 verified task environments across 7 domains. It is built on a latent-world-first approach that first constructs a latent world: a complete and correct hidden specification of the task domain, workflow, and expected state after each step. Each task is then progressively rendered from this specification into an agent-facing environment, enabling controllable complexity and a natural progress metric. Second, we turn this metric into a training recipe: via progress-potential reward shaping (PPRS), we convert progress into a dense per-step reward that improves training efficiency and makes otherwise-intractable tasks trainable. Training with this recipe yields Tev-27B, which achieves substantial gains on the Agents' Last Exam computing and math sciences domains (ALE-CM), matching GPT-6 Astra and Claude Opus 5 at Pass@5. Despite training only on ALE-related data, it generalizes to the Terminal-Bench (TB) 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash, and reaches Claude Opus 4.8-level performance on middle-horizon tasks such as TB 2.1.",
      "upvotes": 100,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tev-agent.github.io/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.18868",
      "arxiv_url": "https://arxiv.org/abs/2610.18868",
      "title_ja": "Tev: 密な進捗報酬を用いた長期エージェント環境のスケーリング",
      "summary_ja": "報酬が希薄な長期タスクに対し、検証可能な密な報酬を含む大規模な学習環境を提供。"
    },
    {
      "id": "2609.39600",
      "title": "GroundAnything: Reconciling Parallel Decoding with Precise Visual Grounding at Flash Speed",
      "abstract": "Autoregressive (AR) grounding models serialize spatial predictions, introducing sequential latency and imposing a causal order on output tokens. We view grounding as visual evidence extraction: objects, locations, and spatial relations are jointly constrained by the image and query, yet their dependencies do not imply an intrinsic left-to-right generation order. This distinction makes bidirectional diffusion a natural fit, allowing spatial hypotheses to emerge in parallel and be jointly refined through iterative denoising. We introduce GroundAnything, a 4B-parameter grounding foundation model that reconciles fast parallel decoding with precise localization through blockwise denoising. Training combines grounding pretraining from public datasets and dedicated data engines, direct AR-to-diffusion conversion with joint AR and diffusion objectives, supervised fine-tuning, and GRPO-based reinforcement post-training. Across 30 grounding benchmarks, our autoregressive variant, GroundAnything-VLM, establishes a new overall state of the art among similarly sized models at 72.42%, remaining competitive with GPT-6 Astra (71.35%). With entropy-guided decoding, GroundAnything also surpasses the prior state of the art at this scale, averaging 61.75% versus 53.32% for the fast MTP-based LocateAnything model. We further explore decoding strategies, showing that an optional self-speculative mode achieves a 4.51times speedup over the AR counterpart with a 0.74 percentage-point drop in COCO F1mIoU. Infrastructure experiments show that progressive inference optimizations translate parallel decoding into practical speedups. These support efficient visual grounding in latency-sensitive real-world systems.",
      "upvotes": 94,
      "github_stars": 46,
      "github_repo": "https://github.com/groundingpi/GroundAnything",
      "project_page": "https://groundingpi.github.io/groundanything/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39600",
      "arxiv_url": "https://arxiv.org/abs/2609.39600",
      "title_ja": "GroundAnything: 高速な並列デコードと精密な視覚グラウンディングの両立",
      "summary_ja": "拡散モデルを用いて、自己回帰的な遅延を排除しつつ精密な物体特定を並列で行う。"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "abstract": "Agents driven by large language models are increasingly deployed on long-horizon tasks, where they use tools and modify real workspaces. How well they perform depends as much on the harness around the model as on the model itself. Existing benchmarks measure downstream task success under a fixed harness, leaving harness engineering itself unexplored. We propose Doc2Harness, a two-stage benchmark that evaluates long-horizon harness engineering directly. In Stage 1, a build model operating inside a fixed builder harness receives an interface-only contract skeleton and a development document that consolidates behavior across twelve frontier harnesses, and then constructs a complete candidate harness in an isolated container. In Stage 2, the frozen candidate harness runs in containers separate from the construction environment, one per test case, and is driven end to end by a scripted mock model. We score each test case using four observable channels, namely the requests sent to the model, the files on disk, the process exit code, and the command output; positive controls rule out vacuous passes. Across nineteen frontier models, each evaluated with three independent builds on 328 test cases, GPT-6 Astra achieves the highest pass rate at 53.05%, while the weakest model reaches 27.44%, a gap of roughly twenty-six percentage points. Even the strongest model fails nearly half of the test cases, and failures cluster around how cross-cutting functionality is split across modules. To our knowledge, Doc2Harness provides the first deterministic benchmark for measuring long-horizon harness engineering.",
      "upvotes": 93,
      "github_stars": 33,
      "github_repo": "https://github.com/YuyaoGe/doc2harness",
      "project_page": "https://geyuyao.com/doc2harness/",
      "comments": 1,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2610.20344",
      "arxiv_url": "https://arxiv.org/abs/2610.20344",
      "title_ja": "Doc2Harness: コーディングエージェントの長期ハーネスエンジニアリングの評価",
      "summary_ja": "文書からエージェントの実行環境（ハーネス）自体を構築できるかを測るベンチマーク。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 90,
      "github_stars": 24,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2: オープンワールドのための再帰的エージェントハーネシング",
      "summary_ja": "未知のタスクに対し、エージェントの実行環境を自律的に進化させる再帰的フレームワーク。"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "abstract": "A robot needs a world model that predicts how its actions will change the scene and a policy that chooses those actions. Models are usually built and evaluated for only one of these roles, and every robot records its actions in its own format. We ask whether one robot world model can serve both roles across different bodies, and what makes this work. We present GreenWAM, a world foundation model for robotics, together with the recipe that produces it: (1) a shared anatomical action space that describes 20 robot families, from bimanual arms to dexterous humanoids, in common joint coordinates; (2) joint training on these families in visual, action-conditioned and world-action modes; and (3) policies that split an action expert off the generator. As a world model, GreenWAM attains top-tier trajectory, depth and 3D accuracy on WorldArena 1.0, ahead of every world-action model and video generator in our comparison. As a policy, it scores among the top entries of the RoboTwin 2.0 leaderboard, reaches the highest zero-shot LIBERO-plus success among the compared methods and is competitive with dedicated vision-language-action and world-action policies on CALVIN and LIBERO. We further adapt GreenWAM to a real humanoid, where it succeeds more often than policies adapted from π_{0.5} and from Cosmos 3 Edge, and distill it into a single-step policy for real-time control. Controlled experiments yield three findings: robot specialization improves world prediction and control together; an action expert helps when split off at the start of adaptation; and keeping world-model modes during policy adaptation preserves robustness to scene changes.",
      "upvotes": 88,
      "github_stars": 5,
      "github_repo": "https://github.com/greenvla/GreenWAM",
      "project_page": "https://greenvla.github.io/GreenWAM/",
      "comments": 2,
      "org": "Sber Robotics Center",
      "url": "https://huggingface.co/papers/2610.18774",
      "arxiv_url": "https://arxiv.org/abs/2610.18774",
      "title_ja": "GreenWAM: ロボティクスのための世界基盤モデル",
      "summary_ja": "多様なロボットで共通の行動空間を用い、予測と制御の両方を1つのモデルで実現。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 88,
      "github_stars": 30,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex: 視覚に根ざした反応的なヒューマノイド制御",
      "summary_ja": "投げられた箱をキャッチするような、動的な物体への高速な全身反応制御を実現。"
    },
    {
      "id": "2610.16794",
      "title": "TPPO: Tracking-Value PPO For Language Model Reasoning",
      "abstract": "Proximal Policy Optimization (PPO) is widely used in reinforcement learning with verifiable rewards for language-model reasoning. While value evolution along trajectory characterizes relative token-level credit, yet standard critics often fail to track it under sparse terminal rewards. To model this evolution, we analyze the relation between successive prefix values and show that they admit a Bayesian decomposition with additive updates in log-odds space. We use this additive structure to construct Tracking-Value PPO (\\method), a cumulative value parameterization that sums position-wise scalar outputs into value logits. These outputs are learned through terminal-outcome supervision on the reconstructed values. \\method improves aggregate mathematical reasoning scores over PPO by 7.0 and 8.4 points on Qwen3-4B-Base and Qwen3-8B-Base, respectively, while improving out-of-distribution generalization. Gains extend to Qwen3-4B, Qwen2.5-Math-1.5B, Qwen3.5-9B and to countdown, and scientific coding tasks. Further analysis shows more accurate tracking of value evolution and more reliable advantage estimates. Our code is publicly available in https://github.com/LINs-lab/TPPO.",
      "upvotes": 78,
      "github_stars": 14,
      "github_repo": "https://github.com/LINs-lab/TPPO",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.16794",
      "arxiv_url": "https://arxiv.org/abs/2610.16794",
      "title_ja": "TPPO: 言語モデル推論のための追跡価値PPO",
      "summary_ja": "希薄な報酬設定下でも、トークンごとの価値の変化を正確に追跡し推論能力を向上させる。"
    },
    {
      "id": "2610.18067",
      "title": "WorkRover: Scaling Long-Horizon Cowork Agent Training Via Recursive Environment Evolution",
      "abstract": "Scaling interactive environments is important for training long-horizon agents through reinforcement learning. These environments often require further testing and refinement after initial generation, and correcting defects in a task may also require updating its work context and verifier. However, existing construction pipelines offer limited support for such iterative refinement while keeping these components aligned. We introduce WorkRover, a framework for training long-horizon cowork agents through recursive environment evolution. Its harness-driven synthesis enables construction agents to jointly build and validate semantically aligned work contexts, executable tasks, and evidence-grounded verifiers, adapting their actions to workspace state and execution feedback rather than following a fixed construction workflow. To support environment evolution, we introduce Factorial Compatibility Replay (FCR), which uses rollout feedback to evaluate combinations of component revisions through dependency-closed replay and selects the smallest validated repair among tested candidates while preserving task requirements and evaluation constraints. To provide finer-grained training signals, we propose Verifier-to-Turn Credit Assignment (VTCA), which augments trajectory-level GRPO advantages with signals from deterministic workspace-progress checks and assigns a bounded share of positive-progress credit to prerequisite turns using recorded tool-output and artifact dependencies. Using WorkRover, we post-train Qwen3.5-35B-A3B to obtain WorkRover-35B-A3B and evaluate it on several cowork-agent benchmarks. Its reported scores exceed those of Qwen3.5-35B-A3B by 26.27 percentage points on JobBench, 29.32 percentage points on OfficeQA Pro, and 413.25 Elo points on GDPval v2. These results suggest that WorkRover offers a promising foundation for scalable training of long-horizon cowork agents.",
      "upvotes": 75,
      "github_stars": 1,
      "github_repo": "https://github.com/workrover/WorkRover",
      "project_page": "https://workrover.github.io/",
      "comments": 2,
      "org": "Nex AGI",
      "url": "https://huggingface.co/papers/2610.18067",
      "arxiv_url": "https://arxiv.org/abs/2610.18067",
      "title_ja": "WorkRover: 再帰的な環境進化による長期共同作業エージェントの学習",
      "summary_ja": "作業コンテキストと検証機を共に構築・改善し、複雑な長期タスクの学習を可能にする。"
    },
    {
      "id": "2610.13021",
      "title": "EmbodiedCLBench: Evaluating Continual Learning for Self-Evolving Embodied Agents",
      "abstract": "Continual learning requires models to accumulate past experience and transfer it to new tasks. Despite substantial research on continual learning, existing work remains largely confined to non-embodied settings, without extending to embodied environments. To address this gap, we introduce EmbodiedCLBench, the first benchmark in embodied simulation for evaluating the continual learning capability of self-evolving agents. With compositional generalization as the core evaluation principle, our benchmark evaluates whether agents can first learn from basic tasks and then recombine the acquired skills to solve complex, unseen advanced tasks. Based on EmbodiedCLBench, we conduct extensive experiments across multiple agent harnesses and learning methods, revealing consistent limitations and distinctive behaviors. Our results show that while advanced tasks can be hardly solved under zero-shot setting, the experience from basic tasks enables consistent improvement. Such benefit from the experience remains stable even if the task complexity increases. However, this improvement does not scale accordingly with the number of learning samples, and current agents cannot extract meaningful information from additional experience. Collectively, our findings highlight continual learning as a fundamental yet underexplored capability, and our benchmark offers valuable resources for designing effective self-evolving agents in embodied environments. Our code and dataset are available at https://pku-value-lab.github.io/EmbodiedCLBench-homepage.",
      "upvotes": 73,
      "github_stars": 16,
      "github_repo": "https://github.com/PKU-VaLuE-Lab/EmbodiedCLBench",
      "project_page": "https://pku-value-lab.github.io/EmbodiedCLBench-homepage/",
      "comments": 3,
      "org": "PKU-VaLuE-Lab",
      "url": "https://huggingface.co/papers/2610.13021",
      "arxiv_url": "https://arxiv.org/abs/2610.13021",
      "title_ja": "EmbodiedCLBench: 自己進化する身体的エージェントの継続学習評価",
      "summary_ja": "基礎スキルを学び、それを組み合わせて未知の複雑タスクを解く継続学習能力を評価。"
    },
    {
      "id": "2610.19789",
      "title": "More Methods, Better Agents? A Reality Check on Self-Distillation in Agentic Reinforcement Learning",
      "abstract": "Self-distillation in agentic reinforcement learning has produced a growing number of methods. However, existing evaluations often reuse published baseline scores under differing experimental conditions, provide few direct comparisons among contemporaneous methods, and give limited attention to training stability and computational cost. These limitations obscure the source of reported gains and the practical strengths and weaknesses of competing methods. Costly agent training further motivates a common basis for comparison. To address these gaps, we compare ten representative methods against GRPO on ALFWorld, ScienceWorld, Search-QA, and WebShop across three model sizes. Our study comprises 132 training runs totaling 12,124.4 recorded H800 GPU-hours, with repeated evaluations over eight rollout seeds for the pretrained backbones and all eleven trained methods. Beyond final task performance, we examine training progress, stability, and measured computational cost. Our evaluation yields three key findings. First, gains over GRPO remain limited in scope, with no method consistently outperforming it across settings. Second, strong final performance can mask unstable training. Third, additional training cost does not consistently translate into better performance. We establish this benchmark to support fair, comprehensive comparison and guide future research toward reliable and cost-effective improvements in agent training. Project page: https://aim-uofa.github.io/Self-Distillation-AgentRL/",
      "upvotes": 72,
      "github_stars": 32,
      "github_repo": "https://github.com/aim-uofa/Self-Distillation-AgentRL",
      "project_page": "https://aim-uofa.github.io/Self-Distillation-AgentRL/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.19789",
      "arxiv_url": "https://arxiv.org/abs/2610.19789",
      "title_ja": "手法が増えればエージェントは良くなるか？エージェント強化学習における自己蒸留の現状確認",
      "summary_ja": "既存の自己蒸留手法を同一条件下で比較し、性能向上や計算コストの真の実態を調査。"
    },
    {
      "id": "2610.14709",
      "title": "Vela: User Behavior as Supervision Sparks LLM Intelligence",
      "abstract": "Large language models are increasingly deployed in applications that act on users' long-term behavior histories, from personal assistants to recommendation and advertising systems. These applications demand the user dimension of LLM intelligence: inferring a person's preferences, intent, and likely future actions from weeks to years of behavior data. Yet current models are trained on static text or synthetic data, neither of which captures how user behavior evolves over time. Real-world behavior records, already available at scale on content platforms and in personal-assistant agents, offer a natural supervisory signal. We propose user behavior as supervision and introduce Vela, a framework that converts real user behavior data into trainable tasks and trajectories. From the anonymized behavior records of 100,000 users, Vela generates 100,000 tasks across 91 real-world task templates; difficulty-based filtering and trajectory acceptance criteria retain approximately 75,000 tasks with selected training trajectories. Fine-tuning Qwen3.6-35B-A3B on these trajectories improves performance over the base model by up to 11.5 points on user-related tasks and by an average of 4 points on general benchmarks. Training on more user behavior data further improves user-related performance, and reinforcement learning after fine-tuning outperforms reinforcement learning from the base model by up to 7.7 points. These gains suggest that real-world user behavior is a scalable source of supervision for both user-centered capabilities and the broader intelligence of LLMs.",
      "upvotes": 71,
      "github_stars": 17,
      "github_repo": "https://github.com/AllSpark-Research/Vela",
      "project_page": "https://allspark-research.github.io/Vela/",
      "comments": 6,
      "org": "AllSpark Research",
      "url": "https://huggingface.co/papers/2610.14709",
      "arxiv_url": "https://arxiv.org/abs/2610.14709",
      "title_ja": "Vela: ユーザー行動を教師信号としてLLMの知能を引き出す",
      "summary_ja": "長期的なユーザーの行動履歴を学習データとして使い、好みや意図の推論能力を高める。"
    },
    {
      "id": "2610.13990",
      "title": "DoSA: Dots Sparse Attention",
      "abstract": "Sparse attention visits few keys, yet finding them can still require scoring every key with every indexer head. We introduce DoSA (Dots Sparse Attention), a lossless method for making this computation conditional while preserving exact token selection. Its central observation is that Top-K selection requires sufficient evidence to reject a candidate, not necessarily its full score. A seed set supplies a lower bound on the winning threshold. Nonnegative head projections and joint residual bounds upper-bound positive contributions, while activation-informed aggregation bounds the magnitude subtracted by negative heads. The certificate directs full scoring toward candidates that remain eligible; exact-score filtering further reduces writeback and selection work. We establish the certificate and its exact-selection conditions, and analyze how geometry and selection margins govern its effectiveness. Our GPU implementation accelerates the complete Indexer by up to 2.74 times over SGLang and 1.69 times over LiteTopK across English, Chinese, and code workloads. End-to-end evaluation on GLM-5.2 and DeepSeek-V3.2 achieves up to 1.94 times and 1.50 times time-to-first-token speedups over the two baselines, respectively.",
      "upvotes": 71,
      "github_stars": 26,
      "github_repo": "https://github.com/llm-sys/flash-indexer",
      "project_page": "",
      "comments": 1,
      "org": "dots studio",
      "url": "https://huggingface.co/papers/2610.13990",
      "arxiv_url": "https://arxiv.org/abs/2610.13990",
      "title_ja": "DoSA: ドット・スパース・アテンション",
      "summary_ja": "精度の損失なしに、計算を条件付きにすることで注意機構の計算量を削減する手法。"
    },
    {
      "id": "2610.20572",
      "title": "Recovering Reliable Supervision via Critique-Guided On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student model on its own rollouts with token-level supervision from a teacher, assuming that the teacher can reach a correct answer from any prefix the student writes. We call this property the recoverability of the teacher and show it fails on incorrect rollouts: the teacher follows student errors, although it recognizes them. We propose CriticOPD, using error recognition to restore recoverability. The teacher critiques an incorrect rollout, allowing the student to rewrite its solution following the error. The resulting output, including the critique as privileged information, is scored by the teacher while the student uses the revision without the critique for training. On two Qwen3 students and six mathematical reasoning benchmarks, CriticOPD improves OPD, with the largest gains on competition problems.",
      "upvotes": 70,
      "github_stars": 2,
      "github_repo": "https://github.com/kzhao5/CriticOPD",
      "project_page": "https://kzhao5.github.io/CriticOPD-website/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.20572",
      "arxiv_url": "https://arxiv.org/abs/2610.20572",
      "title_ja": "批判ガイド付きオンポリシー蒸留による信頼性の高い教師信号の回復",
      "summary_ja": "学生の間違いを教師が批判・修正させることで、学習効率を高める蒸留手法を提案。"
    },
    {
      "id": "2610.16811",
      "title": "X-Ragent: Tool-Augmented Reinforcement Learning for Evidence-Grounded Chest X-Ray Reasoning",
      "abstract": "Chest X-ray (CXR) interpretation often requires integrating visual findings with task-specific evidence rather than relying on direct visual recognition alone. While tool-augmented medical agents can supply such evidence via external modules, they often lack explicit mechanisms for learning when auxiliary evidence is needed and for preventing inapplicable quantitative evidence from entering diagnostic reasoning. To address this, we propose X-Ragent, a post-training framework for tool-augmented reinforcement learning that decouples learned auxiliary-evidence seeking from validity-gated quantitative measurement acquisition for evidence-grounded CXR reasoning. We construct Rad-CoT, a 7.7K-sample corpus combining causally ordered tool-augmented trajectories with report-style diagnostic reasoning, and use it to initialize Qwen3-VL-8B via agentic supervised fine-tuning (SFT). We then optimize the policy with Group Relative Policy Optimization (GRPO) using an accuracy-gated reward that applies process-level terms for measurement consistency and auxiliary-tool cost only to correct trajectories, preventing plausible process behavior from compensating for an incorrect diagnosis. Across three CXR benchmarks, X-Ragent achieves the strongest results, including an 8.6-point improvement on the fully held-out ChestAgentBench. By seeking evidence selectively and admitting only valid measurements, X-Ragent supports more faithful and evidence-grounded CXR reasoning.",
      "upvotes": 68,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.16811",
      "arxiv_url": "https://arxiv.org/abs/2610.16811",
      "title_ja": "X-Ragent: 根拠に基づく胸部X線推論のためのツール拡張強化学習",
      "summary_ja": "外部ツールから必要な証拠のみを選択的に取得し、診断推論に統合する医療エージェント。"
    },
    {
      "id": "2610.07987",
      "title": "VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs",
      "abstract": "Multimodal large language models have become the dominant paradigm for visual understanding, but incur substantial costs by encoding inputs into dense, fixed-size patch tokens. However, visual information is unevenly distributed: some regions require fine-grained detail, while others admit compact representations. Downsampling sacrifices this detail, while existing token pruning and adaptive approaches remain limited in content-adaptive granularity, task generalization, and integration with modern MLLMs and serving infrastructure. Overcoming these limitations calls for foundation models that learn, end to end, where-and at what granularity-to allocate visual representations, a native capability we term elastic visual representation weaving. We introduce VisionWeave, establishing this capability in frontier-level MLLMs through large-scale training. It combines two components: a gated spatial pooler constructs coarse-grained representations alongside native fine-grained representations within a shared MRoPE coordinate, while a granularity router learns their content-adaptive allocation. Through self-distillation alone, we validate this capability on Qwen3.5-4B and scale to Qwen3.8-27B with over 30K A100 GPU-hours. Based on Qwen3.8-27B, VisionWeave adaptively adjusts token savings to visual content, saving 43.0% tokens on average while retaining 98.9% native performance across eight benchmarks, versus only 88% performance preserved for token pruning baselines with a fixed 50% savings target. Extensive evaluations confirm robust efficiency-quality trade-offs across diverse tasks, resolutions and video frames. When deployed on SGLang serving engine, our method achieves a 2.3x throughput gain while reducing mean TTFT by 54.4% and mean TPOT by 60.6%. Together, we believe these results position elastic visual weaving as a promising capability for next-generation multimodal models.",
      "upvotes": 68,
      "github_stars": 75,
      "github_repo": "https://github.com/FFY0/VisionWeave",
      "project_page": "",
      "comments": 2,
      "org": "Qwen",
      "url": "https://huggingface.co/papers/2610.07987",
      "arxiv_url": "https://arxiv.org/abs/2610.07987",
      "title_ja": "VisionWeave: MLLMのネイティブ機能として柔軟な視覚表現を織りなす",
      "summary_ja": "画像領域ごとに最適な粒度でトークンを割り当て、効率と精度を両立する視覚表現手法。"
    },
    {
      "id": "2610.15166",
      "title": "ExeWorldBench: Benchmarking Code-Based Executable 3D World Modeling",
      "abstract": "Coding agents are increasingly evolving beyond reproducing what a world looks like toward constructing executable worlds that capture how a world works. This shift calls for executable world modeling, which integrates two core capabilities: world understanding, reasoning about the underlying structural, mechanical, and causal principles of a world, and executable realization, translating that understanding into a code-based system whose behavior emerges from physical interactions. However, existing benchmarks provide only fragmented evaluations centered on physical reasoning, visual fidelity, or behavioral correctness, leaving the integration of these capabilities insufficiently assessed. To bridge this gap, we introduce ExeWorldBench, to our knowledge the first benchmark to comprehensively evaluate world understanding and executable realization through code-based 3D world construction. ExeWorldBench comprises three progressively challenging tasks: Mechanism Executability, which evaluates the realization of individual mechanisms from visual observations; Compositional Executability, which extends to multi-stage systems with spatial, mechanical, and causal dependencies; and Intent-Driven Executable World Synthesis, which requires constructing executable worlds from high-level goals and physical requirements. Extensive experiments on frontier models reveal substantial limitations in executable world modeling, offering insights into the development of more physically grounded and causally coherent world construction systems.",
      "upvotes": 67,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://helen1p.github.io/ExeWorldBench/",
      "comments": 3,
      "org": "University of Science and Technology of China",
      "url": "https://huggingface.co/papers/2610.15166",
      "arxiv_url": "https://arxiv.org/abs/2610.15166",
      "title_ja": "ExeWorldBench: コードベースの実行可能な3D世界モデリングのベンチマーク",
      "summary_ja": "物理法則に従って動く「実行可能な世界」をコードで構築できるかを総合的に評価する。"
    },
    {
      "id": "2610.12818",
      "title": "LeWAM: End-to-End World and Action Modeling with JEPAs",
      "abstract": "Joint-embedding predictive architectures (JEPAs) learn compact latent world models without pixel reconstruction. Existing JEPA pipelines typically train visual representations and action-conditioned dynamics before adding a control policy or solver. We introduce LeWAM, an end-to-end JEPA for control with: (1) a joint training objective over next latent state prediction and action flow matching, and (2) an isotropic Gaussian constraint on the latent state, enabling a single model to support direct policy execution and efficient planning by evaluating sampled actions with its learned latent dynamics. Compared with prior JEPAs in visual planning, LeWAM improves success rate from 28.6% to 89.7% on contact-rich tasks and from 10.9% to 46.2% on long-horizon tasks, and plans 32.3 times faster. On behavior cloning tasks in simulation and physical robots, LeWAM is also competitive with established methods. Interpretability analyses show that LeWAM learns control-relevant representations and action distributions effectively guiding test-time planning and control.",
      "upvotes": 65,
      "github_stars": 237,
      "github_repo": "https://github.com/MinghaoFu/lewam",
      "project_page": "https://le-wam.github.io/",
      "comments": 2,
      "org": "LeWAM",
      "url": "https://huggingface.co/papers/2610.12818",
      "arxiv_url": "https://arxiv.org/abs/2610.12818",
      "title_ja": "LeWAM: JEPAを用いたエンドツーエンドの世界・行動モデリング",
      "summary_ja": "潜在空間での予測と行動生成を統合し、効率的な計画と高い成功率を実現した制御モデル。"
    }
  ],
  "labs": [
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
      "published": "2026-10-16T05:34:01+09:00",
      "title_ja": "Granite Switch 4.1：1つのエンドポイントでチャット、意思決定、音声に対応",
      "summary_ja": "チャットや意思決定、音声機能を1つのエンドポイントから利用可能なGranite Switch 4.1を公開。"
    },
    {
      "lab": "OpenAI",
      "title": "Bringing GPT-Rosalind to academic research labs",
      "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
      "url": "https://openai.com/index/introducing-the-rosalind-academic-plan",
      "published": "2026-10-16T04:00:00+09:00",
      "title_ja": "GPT-Rosalindを学術研究室へ導入",
      "summary_ja": "ライフサイエンス研究推進のため、資格のある学術研究室にGPT-Rosalind等へのアクセスを提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-Live-1.1 Adds Multilingual Voices and Fixes Repetitive Tool-Call Audio",
      "summary": "OpenAI's updated voice model adds new voices across six languages, more natural accents, and fewer awkward silences while searching.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-live-1-1-adds-multilingual-voices-and-fixes-repetitive-tool-call",
      "published": "2026-10-16T03:19:54+09:00",
      "title_ja": "OpenAIのGPT-Live-1.1が多言語音声を追加し、繰り返し問題を修正",
      "summary_ja": "6言語の新しい音声と自然なアクセントを追加。検索中の不自然な沈黙や音声の繰り返しも改善。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Cheng Lou's Handwired Compiles JavaScript Directly Into Neural Networks Without Training",
      "summary": "A compiler converts if-else and loops into frozen matrix weights, producing exact, differentiable neural nets that run JavaScript programs in a browser.",
      "url": "https://alphasignal.ai/news/cheng-lou-s-handwired-compiles-javascript-directly-into-neural-networks-without",
      "published": "2026-10-16T03:19:37+09:00",
      "title_ja": "JavaScriptを学習なしでニューラルネットワークに直接コンパイルする「Handwired」",
      "summary_ja": "JSの制御構文を固定された行列の重みに変換し、ブラウザで動作する微分可能なNWを生成。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Meta Drops Muse Spark Open, an 816B Open-Weight Model Rivaling Closed AI Giants",
      "summary": "Meta's new 816B parameter mixture-of-experts model targets long-horizon coding and agentic work, with open weights that fit on two Mac Studios.",
      "url": "https://alphasignal.ai/news/meta-drops-muse-spark-open-an-816b-open-weight-model-rivaling-closed-ai-giants",
      "published": "2026-10-16T02:08:04+09:00",
      "title_ja": "Metaが商用モデルに匹敵する816Bのオープン重みモデル「Muse Spark Open」を公開",
      "summary_ja": "長期間のコーディングやエージェント業務に特化。Mac Studio 2台で動作する816BのMoEモデル。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用Google Antigravityを活用し、新規抗菌ペプチドの探索プロセスを加速させる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenBMB's MiniCPM-V 4.7 Runs a 35B Vision Model on Your Phone",
      "summary": "OpenBMB's MiniCPM-V 4.7 packs 35B parameters into a mixture-of-experts vision model that runs on an iPhone at 13+ tokens per second.",
      "url": "https://alphasignal.ai/news/openbmb-s-minicpm-v-4-7-runs-a-35b-vision-model-on-your-phone",
      "published": "2026-10-16T00:02:18+09:00",
      "title_ja": "OpenBMBのMiniCPM-V 4.7：35Bのビジョンモデルがスマートフォンで動作",
      "summary_ja": "35BのMoEビジョンモデルがiPhone上で動作。秒間13トークン以上の速度を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Pays PhDs $500K Annually to Find Claude's Blind Spots",
      "summary": "Anthropic is paying PhDs up to $167K for four months to turn their domain expertise into training data and evaluations for Claude.",
      "url": "https://alphasignal.ai/news/anthropic-pays-phds-500k-annually-to-find-claude-s-blind-spots",
      "published": "2026-10-15T22:14:22+09:00",
      "title_ja": "Anthropic、Claudeの弱点発見のため博士号保持者に年換算50万ドルの報酬",
      "summary_ja": "専門知識を学習データや評価に活用するため、4ヶ月で最大16.7万ドルの報酬を博士号保持者に支払う。"
    },
    {
      "lab": "OpenAI",
      "title": "Teaching students to think and learn through questions",
      "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
      "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
      "published": "2026-10-15T22:00:00+09:00",
      "title_ja": "問いかけを通じて学生の思考と学習を導く",
      "summary_ja": "教育者向けAIツールや、教師によるアクティブ・ラーニング支援を助ける「学習モード」を公開。"
    },
    {
      "lab": "AlphaSignal",
      "title": "TypeSafe AI's Jev 1.14 Brings Vision and 256K Context to Typed Decisions",
      "summary": "TypeSafe AI ships Jev 1.14 with image inputs, a bounding box primitive, and 4x longer context, all behind opt-in danger zone headers.",
      "url": "https://alphasignal.ai/news/typesafe-ai-s-jev-1-14-brings-vision-and-256k-context-to-typed-decisions",
      "published": "2026-10-15T10:02:12+09:00",
      "title_ja": "TypeSafe AIのJev 1.14：型安全な意思決定に画像入力と256Kコンテキストを導入",
      "summary_ja": "画像入力、バウンディングボックス用プリミティブ、4倍に拡張されたコンテキストをJev 1.14で提供。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたローカル・分散大規模LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、プライベートな環境で最新モデルの推論や微調整が可能。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由記述ではなく既定の候補からの「選択」として再構成し、小規模モデルの推論コストを削減。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か、検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMが先に抽象的なスタブを生成してからツールを検索する「PtR」パラダイムの有効性を評価。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Muse Spark Open: open-weight frontier multimodal mixture-of-experts model from Meta",
      "summary": "",
      "url": "https://huggingface.co/blog/meta-muse-spark-open",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Metaのオープン重みフロンティア・マルチモーダルMoEモデル「Muse Spark Open」",
      "summary_ja": "Metaから登場した、オープンな重みを持つ最先端のマルチモーダル混合専門家（MoE）モデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome FLUX.3 Image Klein in Diffusers",
      "summary": "",
      "url": "https://huggingface.co/blog/flux-3",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "DiffusersにFLUX.3 Image Kleinが登場",
      "summary_ja": "画像生成モデル「FLUX.3 Image Klein」がDiffusersライブラリで利用可能に。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球規模の課題に挑む：地球AIのための地理空間エージェントの活用",
      "summary_ja": "地球が直面する大きな課題を解決するため、地理空間情報を扱うエージェント技術を投入。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewを用いて、科学全般における技術的な文書の分析を実施。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創意工夫を増幅させる10の方法",
      "summary_ja": "2026年に向け、AI技術を用いて人間の創造性を高めるための10の取り組みを紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "HiRO-ACEv2: Simulating extreme weather at 3 km resolution for a fraction of the cost",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/hiro-acev2",
      "published": "2026-10-15T01:12:42+09:00",
      "title_ja": "HiRO-ACEv2：極端気象を3km解像度かつ低コストでシミュレーション",
      "summary_ja": "従来よりも大幅に低いコストで、3kmの高解像度による極端な気象のシミュレーションを実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Amp puts AI agents to work beyond code with OpenAI models",
      "summary": "See how Amp pushes the frontier of what agents can do with GPT-6 Astra, Ultrafast, GPT-Live-1, and Sign in with ChatGPT.",
      "url": "https://openai.com/index/amp-beyond-coding",
      "published": "2026-10-14T21:00:00+09:00",
      "title_ja": "AmpがOpenAIモデルを活用し、コード以外の領域でAIエージェントを稼働",
      "summary_ja": "GPT-6 Astra等の最新モデルを活用し、エージェントが実行できるタスクの限界を押し広げる。"
    },
    {
      "lab": "OpenAI",
      "title": "SentinelOne cuts malware analysis from weeks to hours",
      "summary": "With OpenAI Daybreak, SentinelOne cuts weeks of malware analysis to hours, creating capacity to investigate more threats.",
      "url": "https://openai.com/index/sentinelone",
      "published": "2026-10-14T21:00:00+09:00",
      "title_ja": "SentinelOne、マルウェア分析時間を数週間から数時間に短縮",
      "summary_ja": "OpenAI Daybreakの活用により、分析期間を大幅短縮し、より多くの脅威調査を可能に。"
    },
    {
      "lab": "OpenAI",
      "title": "How Third Moment Research runs 10,000 agents for 36+ hours",
      "summary": "With GPT-6 Astra and GPT-6.1 Sol, Codex, and Daybreak for cybersecurity, this AI lab builds agents that focus for days and improve with use.",
      "url": "https://openai.com/index/third-moment-research",
      "published": "2026-10-14T16:00:00+09:00",
      "title_ja": "Third Moment Researchが1万のエージェントを36時間以上稼働させる方法",
      "summary_ja": "GPT-6 Astra等を使い、数日間集中してタスクを遂行し、自己改善するサイバーセキュリティエージェントを構築。"
    },
    {
      "lab": "OpenAI",
      "title": "How Block is building AI-powered security with OpenAI technology",
      "summary": "Block is building AI-powered security with OpenAI. Its security team investigates threats faster and proposes patches in minutes.",
      "url": "https://openai.com/index/block-ai-powered-security",
      "published": "2026-10-14T16:00:00+09:00",
      "title_ja": "BlockがOpenAI技術でAI駆動のセキュリティを構築する方法",
      "summary_ja": "脅威の調査を迅速化し、数分以内にパッチ案を作成するAIセキュリティ体制を構築。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用の微調整AIモデル開発で協力",
      "summary_ja": "デバイス上の軽量なGemmaモデルを使用し、クラウドにデータを送らず非公開チャットの詐欺を阻止。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルにおける言語選択的次元によるコードスイッチング検出",
      "summary_ja": "音声から直接多言語混在を検出する軽量な手法。テキスト変換なしで効率的に学習データを収集。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モダリティ対応マスク拡散モデルの設計空間",
      "summary_ja": "テキスト、画像、音声を統合した初の3モダリティ対応拡散モデル。スケーリング則や混合比率を分析。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "新モデル「Gemini 4 Argon」の開発における安全性と責任あるアプローチについての解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Run fast, private agents on-device with LFM2.5-24B-A2B",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b",
      "published": "2026-10-14T02:05:48+09:00",
      "title_ja": "LFM2.5-24B-A2Bによる高速・プライベートなデバイス上エージェントの実行",
      "summary_ja": "デバイス上でプライバシーを保ちながら高速に動作する24B規模のエージェント機能を提供。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon for Robotics",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-for-robotics/",
      "published": "2026-10-14T01:01:58+09:00",
      "title_ja": "ロボット工学のためのGemini 4 Argon",
      "summary_ja": "ロボット分野におけるGemini 4 Argonの活用可能性とその応用についての紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: Built to solve your hardest problems",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-argon/",
      "published": "2026-10-14T01:01:52+09:00",
      "title_ja": "Gemini 4 Argon：最も困難な問題を解決するために構築",
      "summary_ja": "極めて困難な課題の解決を目的として設計された最新モデル「Gemini 4 Argon」の概要。"
    }
  ]
};
