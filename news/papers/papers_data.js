window.papersData = {
  "updated_at": "2026-10-17 09:12 JST",
  "arxiv": [
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "url": "https://arxiv.org/abs/2610.22276",
      "pdf": "https://arxiv.org/pdf/2610.22276",
      "authors": [
        "Luozheng Qin",
        "Yuhan Zhu",
        "Changhai Zhou",
        "Qian Qiao",
        "Jun Gao",
        "Yuhua Zhou"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 7 figures, 27 tables. Code: https://github.com/Fr0zenCrane/MJev-Spatial",
      "hf_upvotes": 141,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves the highest overall score (65.64%) among eight tested models",
      "signals": [
        "HF ▲141"
      ],
      "headline": "VLMの内部アテンションを用いた分類ベースの高速な空間知能モデルMJev-Spatial",
      "what": "空間的な位置関係や距離、座標の予測を自由形式のテキスト生成ではなく、事前学習済みのバックボーンのアテンション（QueryとKey）を利用した統一的な分類タスクとして解く手法です。自己回帰的なデコードを排除し、単一のフォワードパスで判断を行います。",
      "enables": "Qwen3.5-4Bをベースとし、空間ベンチマークにおいて従来モデルを上回る最高スコア（65.64%）を記録しました。推論速度はベースモデルより5.6倍、最も速い自己回帰ベースラインよりも2.5倍高速です。",
      "why_it_matters": "低遅延が求められる物理世界でのインタラクションにおいて、VLMを生成器ではなく決定器として効率的に利用するSystem 1的なアプローチを提示しています。",
      "tags": [
        "VLM",
        "空間知能",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20901",
      "title": "TGrasp6D: Task-Informed Vision-Language Priors and Pose Refinement enable Zero-Shot Task-Oriented 6DoF Grasping",
      "url": "https://arxiv.org/abs/2610.20901",
      "pdf": "https://arxiv.org/pdf/2610.20901",
      "authors": [
        "Manav Kulshrestha",
        "Apoorva Vashisth",
        "Damon Conover",
        "Aniket Bera"
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
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "Our approach achieves state-of-the-art success rate of 94% on the TaskGrasp dataset, with the best baseline at 74%.",
      "signals": [],
      "headline": "VLMの事前知識を活用したゼロショットでのタスク指向型6自由度グリッピング生成",
      "what": "RGB-D画像からタスクに適したセマンティック・アフォーダンスを推論し、初期のタスク指向型プリオールを生成する手法です。このプリオールを衝突回避のための6自由度ポーズ最適化によって洗練させることで、特定のタスクに合致した把持姿勢を決定します。",
      "enables": "TaskGraspデータセットにおいて、既存の最良手法の成功率74%を大きく上回る94%の最先端（SOTA）性能を達成しました。実機のFranka Research 3ロボットにおいても、未知の物体に対するゼロショットでの汎化性能を実証しています。",
      "why_it_matters": "手動アノテーションされたデータセットに依存せず、画像と言語の事前知識から「ナイフを切るために持つか、渡すために持つか」といった文脈に応じた把持を可能にします。",
      "tags": [
        "ロボティクス",
        "VLM",
        "物体把持"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
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
      "id": "2610.20637",
      "title": "Expanding Attention: A Taylor-Series Route to Linear-Time Transformers with a Fixed Number of Recurrent States",
      "url": "https://arxiv.org/abs/2610.20637",
      "pdf": "https://arxiv.org/pdf/2610.20637",
      "authors": [
        "Zicong Huang"
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
        "new"
      ],
      "star_quote": "We expand the exponential kernel of attention into a truncated Taylor series of $n$ terms and factorize each term into a tensor-power inner product",
      "signals": [],
      "headline": "テイラー展開によるアテンションの線形化と固定次元のリカレント状態による定数時間デコード",
      "what": "Exponential Kernelをn項のテイラー展開で近似し、各項をテンソル積の形式で分解することで、因果的履歴をn個の固定サイズのリカレント状態に集約する手法です。これによりコンテキスト長に関わらず、各トークンの更新をランク1の外積で行うことが可能になります。",
      "enables": "コンテキスト長65,536において、Softmaxベースの手法と比較してデコードのレイテンシを76.0倍高速化し、7.3μsの一定時間で処理できます。計算コストは項数nに対して組み合わせ的に増加しますが、n=3で十分な精度が得られることを示しました。",
      "why_it_matters": "従来手法の二次的な計算複雑性を排除しつつ、リカレント状態への圧縮を損失なし（float64精度）で行える理論的枠組みを提供し、超長文コンテキストの効率的な処理を可能にします。",
      "tags": [
        "Transformer",
        "線形アテンション",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21404",
      "title": "Multi-Reward Hacking: From Aggregation-Induced Drift to Trust-Anchored Defense",
      "url": "https://arxiv.org/abs/2610.21404",
      "pdf": "https://arxiv.org/pdf/2610.21404",
      "authors": [
        "Yushu Li",
        "Jiin Woo",
        "Xiaoxiao Li",
        "Youngsuk Park"
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
        "new"
      ],
      "star_quote": "We propose Trust-Anchored Gating (TAG), which first elects an anchor channel based on the policy drift induced by optimizing each channel alone",
      "signals": [],
      "headline": "複数報酬の最適化における報酬ハッキングを防ぐTrust-Anchored Gating手法",
      "what": "主報酬（正確性など）と補助報酬（簡潔さなど）を組み合わせる際、補助報酬が容易に得られる場合に発生する「報酬ハッキング」を理論的に分析し、それに対処するTAG手法を提案しています。TAGは主報酬の充足状況に基づいて補助報酬のクレジットを制御します。",
      "enables": "Qwen3-4Bを用いた数学およびプログラム合成のタスクにおいて、単純な加算型の報酬集計が性能を大幅に低下させる（Pass@4が0.220）のに対し、TAGは高い性能（0.581）を維持しつつ、応答長を44%短縮することに成功しました。",
      "why_it_matters": "複数の報酬関数を用いた事後学習における不安定性の原因を特定し、ハイパーパラメータ調整に依存せず構造的に報酬ハッキングを抑制する実用的な枠組みを提供します。",
      "tags": [
        "LLM",
        "強化学習",
        "報酬設計"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22232",
      "title": "WaveLLM: Wavelet-Domain LLM Entropy Modeling for Lossless Image Compression",
      "url": "https://arxiv.org/abs/2610.22232",
      "pdf": "https://arxiv.org/pdf/2610.22232",
      "authors": [
        "Yue Yu",
        "Bowei Kang",
        "Changsheng Gao",
        "Dong Liu",
        "Xiaoyan Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at ACM Multimedia 2026 (MM '26). 10 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "WaveLLM achieves 2.51, 2.24, and 2.27 bpsp on Kodak, CLIC.pro, and DIV2K",
      "signals": [],
      "headline": "ウェーブレット領域でのLLMエントロピーモデリングによる可逆画像圧縮の効率化",
      "what": "画像をマルチレベルのウェーブレットサブバンドに分解し、構造化・統計的均質化されたデータをLlama-3.2ベースのLLMで自己回帰的に確率推定する手法です。数値シンボルを扱うための専用インターフェースと、サブバンドに適応するためのタスク適応プロンプトを導入しています。",
      "enables": "Kodak、CLIC.pro、DIV2Kの各ベンチマークで、それぞれ2.51、2.24、2.27 bpspを達成しました。これは同じウェーブレット変換を使用するPixelCNNベースの手法を約0.4 bpsp上回り、既存のLLMベースの圧縮手法の中でも最高水準です。",
      "why_it_matters": "ピクセルや残差を直接シリアル化する従来のLLMベース手法の予測困難性を、信号処理的な知見（ウェーブレット分解）と組み合わせることで解決しました。",
      "tags": [
        "画像圧縮",
        "LLM",
        "ウェーブレット変換"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22306",
      "title": "ARC-SORT: Adaptive, Robust, Compensated Multi-Object Tracking with Interacting Multiple Models",
      "url": "https://arxiv.org/abs/2610.22306",
      "pdf": "https://arxiv.org/pdf/2610.22306",
      "authors": [
        "Girish Kumar Adari"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 4 figures, 13 tables; supplementary material included as appendix; qualitative video as ancillary file",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ARC-SORT reaches 81.82 HOTA on the SportsMOT test set",
      "signals": [],
      "headline": "不確実性に基づき探索領域を適応させるスポーツ放送向け高速多物体追跡ARC-SORT",
      "what": "学習不要でリアルタイム動作するTracking-by-detection手法で、IMMカルマンフィルタが算出する予測共分散を用いて探索領域（Expansion IoU）を動的に調整します。交差時のID取り違えを事後的に1回だけ修正する機構や、画面外からの再登場を外見のみで紐付ける機能を備えています。",
      "enables": "SportsMOTテストセットにおいて81.82 HOTAを達成し、全69エントリの中で最も少ないIDスイッチ数を記録しました。ラップトップのRTX 3060で50fpsの動作が可能です。",
      "why_it_matters": "カメラのパン・ズームや選手の急な動きが激しいスポーツ映像において、予測の不確実性を自己測定して追跡動作に反映させる手法の有効性を示しました。",
      "tags": [
        "多物体追跡",
        "コンピュータビジョン",
        "リアルタイム"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22035",
      "title": "ETH: Data-Balanced Heterogeneous Pipeline Parallelism for Training Large Models",
      "url": "https://arxiv.org/abs/2610.22035",
      "pdf": "https://arxiv.org/pdf/2610.22035",
      "authors": [
        "Mianjie Yu",
        "Zhongmin Zhao",
        "Zizhao Mo",
        "Jianxiong Liao",
        "Wenxuan Li",
        "Yulin Qiao"
      ],
      "categories": [
        "cs.DC",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 14 figures. Accepted at USENIX NSDI 2027",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ETH achieves up to 2x training speedup",
      "signals": [],
      "headline": "異種ハードウェア混在環境での学習を最適化するデータバランス型パイプライン並列ETH",
      "what": "性能の異なるGPUが混在するクラスタにおいて、パイプラインステージ間およびステージ内の負荷を階層的に最適化する学習システムです。ブロック単位の勾配集約により、非対称なAll-Reduceによる通信オーバーヘッドを軽減します。",
      "enables": "既存の最先端システムと比較して、最大2倍の学習スピードアップを達成し、最適な構成を探すためのサーチコストを最大56倍削減しました。",
      "why_it_matters": "従来の「レイヤー数を変える」だけの粗い負荷分散に対し、より細かい粒度でのデータバランス調整を可能にし、メモリ制約と計算効率を両立させました。",
      "tags": [
        "分散学習",
        "パイプライン並列",
        "異種コンピューティング"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
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
      "id": "2610.20681",
      "title": "IneqAgent: Agentic Inequality Proving in Lean with Symbolic Computation",
      "url": "https://arxiv.org/abs/2610.20681",
      "pdf": "https://arxiv.org/pdf/2610.20681",
      "authors": [
        "Gaolei He",
        "Jinhui Li",
        "Ruobing Zuo",
        "Xia Zeng",
        "Zhengfeng Yang"
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
        "cap",
        "sota"
      ],
      "star_quote": "solves 175 of 186 problems (94.09%), achieving the highest overall success rate",
      "signals": [],
      "headline": "LLMの推論と数式処理を統合したLean4用不等式証明エージェントIneqAgent",
      "what": "Lean4での不等式証明において、LLMによる推論と、Sum-of-Squares法やBernstein多項式などの数式処理バックエンドをMCTS（モンテカルロ木探索）で統合したエージェントです。数式処理の結果から証明書を自動生成し、Leanの証明コードに組み込みます。",
      "enables": "4つのベンチマークで186問中175問（94.09%）を解決し、評価手法の中で最高の成功率を達成しました。また、Dittert予想やHolens-Djokovic不等式に関連する未解決数学問題の証明にも成功しています。",
      "why_it_matters": "LLMの直感的な推論と数式処理の厳密性を組み合わせることで、従来の自動定理証明機では困難だった複雑な不等式の形式的証明を可能にしました。",
      "tags": [
        "AI for Science",
        "自動定理証明",
        "Lean"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
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
      "id": "2610.20682",
      "title": "TurboMamba: Faster Inference, Faster Training, and Better Prediction with Lexical Memory",
      "url": "https://arxiv.org/abs/2610.20682",
      "pdf": "https://arxiv.org/pdf/2610.20682",
      "authors": [
        "Hanxin Zhang"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "TurboMamba achieves the lowest mean test prediction loss (negative log-likelihood, NLL) among all twelve models.",
      "signals": [],
      "headline": "グローバルなMamba-3とローカルなTransformerを統合した高速推論モデルTurboMamba",
      "what": "トークンブロックごとに実行されるグローバルなMamba-3モデルと、そのコンテキストを利用して次トークンを予測する小型Transformerを組み合わせたアーキテクチャです。直前ブロックの最終トークンへの直接アクセスや、最近のトークン頻度に基づく混合モデルなどの軽量な拡張が含まれています。",
      "enables": "Mamba-3と比較して平均テスト予測損失（NLL）を9.4%低減し、学習スループットを2.60倍、バッチ推論のレイテンシを3.12倍高速化しました。JambaやZambaのバリアントに対しても大幅な精度向上と速度向上を達成しています。",
      "why_it_matters": "SSM（状態空間モデル）とTransformerのハイブリッド構造を最適化し、推論効率と予測精度のトレードオフを大幅に改善した実用的な構成を提案しています。",
      "tags": [
        "LLM",
        "Mamba",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21059",
      "title": "NOMAI: Scalable Federated Learning with Private Weights",
      "url": "https://arxiv.org/abs/2610.21059",
      "pdf": "https://arxiv.org/pdf/2610.21059",
      "authors": [
        "Yiyi Sun",
        "Mushtari Sadia",
        "Amrita Roy Chowdhury"
      ],
      "categories": [
        "cs.CR"
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
      "star_quote": "achieving three orders-of-magnitude improvements over prior work while seamlessly supporting populations of over 106 users.",
      "signals": [],
      "headline": "マルチコミッティMPCによる数百万ユーザー規模のプライバシー保護型連合学習システム",
      "what": "マルチコミッティMPCアーキテクチャとPacked Shamir秘密分散を組み合わせた、スケーラブルな秘密計算ベースの連合学習システムです。モデルのプライバシー、データのプライバシー、および整合性の3つの性質を同時に保証し、悪意のある攻撃者が存在する設定にも対応します。",
      "enables": "100万ユーザー以上の規模をサポートし、MNISTの学習において1イテレーションあたりのユーザー側計算時間を350ms（半誠実モデル）から700ms（悪意のあるモデル）未満に抑制しました。これは従来手法と比較して3桁以上の改善です。",
      "why_it_matters": "MPCベースの連合学習が、プライバシーや完全性を損なうことなく、現実世界の数百万規模のデプロイに耐えうる計算コストで実行可能であることを初めて示しました。",
      "tags": [
        "連合学習",
        "プライバシー",
        "MPC"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21132",
      "title": "Trajectory Prediction Method for person under WSN with Hierarchical Envelope Adversarial Domain Adaptation",
      "url": "https://arxiv.org/abs/2610.21132",
      "pdf": "https://arxiv.org/pdf/2610.21132",
      "authors": [
        "Wenqian Jiang",
        "Qifeng Sun",
        "Xiaosong Gao",
        "Xin Zou",
        "Xingrui Ni",
        "Yuan Hu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ADE and FDE metrics reduced by 17.6% and 19.1% respectively.",
      "signals": [],
      "headline": "階層的ドメイン適応と疎密結合モデルによる歩行者軌道予測の精度向上",
      "what": "「エンベロープ・サンプル」を用いたグラフ構造の構築と、局所的および大域的な戦略を統合した敵対的ドメイン適応を組み合わせた軌道予測モデル（HEADA-LTCTPM）です。歩行者間の多様な相互作用とシナリオ間のドメインシフトに動的に適応します。",
      "enables": "公開データセットにおいて、既存のベースラインと比較してADE（平均変位誤差）を17.6%、FDE（最終変位誤差）を19.1%削減し、高い予測精度を達成しました。計算時間は実用的な要件を満たしています。",
      "why_it_matters": "特定の統計指標に依存する従来のドメイン適応の限界を克服し、複雑で動的な環境における歩行者予測のロバスト性を高めました。",
      "tags": [
        "軌道予測",
        "ドメイン適応",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22362",
      "title": "CoDA: Co-Evolution of Data Engines and Action Policies",
      "url": "https://arxiv.org/abs/2610.22362",
      "pdf": "https://arxiv.org/pdf/2610.22362",
      "authors": [
        "Tianjiao Yu",
        "Zhilin Ou",
        "Yifan Shen",
        "Xinzhuo Li",
        "Yuanzhe Liu",
        "Onkar Kishor Susladkar"
      ],
      "categories": [
        "cs.RO",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Website: https://plan-lab.github.io/projects/coda/",
      "hf_upvotes": 9,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce CoDA, a framework in which a simulation data engine and an action policy",
      "signals": [],
      "headline": "シミュレーション環境と行動ポリシーを相互進化させるロボット学習枠組みCoDA",
      "what": "VLMクリティックによるポリシーの失敗診断をシミュレーション生成プログラムに変換し、失敗を克服するための学習を繰り返す共進化フレームワークです。診断結果をポテンシャル関数に変換して報酬を整形するText2potential手法を導入しています。",
      "enables": "4つの操作タスク群において、教師あり微調整後の未知環境（OOD）成功率5.3%を27.6%まで向上させました。LIBERO-Proでは、指示の変動に対する成功率を1%から76%に引き上げました。",
      "why_it_matters": "単に物理的に妥当なシミュレーションを増やすのではなく、ポリシーの弱点に焦点を当てた難易度の高い環境と適切な報酬を自動生成することで学習効率を高めています。",
      "tags": [
        "ロボティクス",
        "シミュレーション",
        "強化学習"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22369",
      "title": "SoftCache: Adaptive Step Size Caching for Diffusion Transformers",
      "url": "https://arxiv.org/abs/2610.22369",
      "pdf": "https://arxiv.org/pdf/2610.22369",
      "authors": [
        "Shimon Malnick",
        "Nadav Orenstein",
        "Ohad Fried",
        "Shai Avidan"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://malnick.net/softcache",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose SoftCache, which performs soft caching: instead of a binary switch",
      "signals": [],
      "headline": "拡散モデルのキャッシュ残量を活用した適応型ステップサイズ制御SoftCache",
      "what": "Diffusion Transformerの各ステップでの計算を再利用する際、キャッシュの「鮮度（スタレネス）」信号を単なる切り替えスイッチとしてではなく、次のジャンプ幅を決定する指標として利用する手法です。キャッシュに余裕があるときは大きくスキップし、更新が近づくとステップを小さくします。",
      "enables": "FLUX、HunyuanVideo、Wan2.1などの最新モデルにおいて、3.5倍から6.9倍の高速化を達成しつつ、既存のキャッシング手法を上回る忠実度指標を記録しました。追加の学習やモデルごとの設定変更は不要です。",
      "why_it_matters": "従来の「使うか使わないか」の二値的なキャッシュ制御を連続的なステップ制御に拡張し、生成品質を維持したまま計算量を大幅に削減しました。",
      "tags": [
        "拡散モデル",
        "キャッシュ",
        "推論高速化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22371",
      "title": "Gen4P: Video Generators are 4D Perceivers",
      "url": "https://arxiv.org/abs/2610.22371",
      "pdf": "https://arxiv.org/pdf/2610.22371",
      "authors": [
        "Yitong Xia",
        "Zeren Jiang",
        "Chuanxia Zheng"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://gen4p.github.io/",
      "hf_upvotes": 4,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "pretrained video generator can be repurposed into a feed-forward 4D perceiver",
      "signals": [],
      "headline": "ビデオ生成モデルを4次元知覚モデルに転用するフレームワークGen4P",
      "what": "事前学習済みのビデオ生成モデルの重みを固定し、単一のエンコーダパスと軽量なデコーダを介して3Dポイント追跡、深度推定、カメラ姿勢推定などの4D属性を抽出する手法です。反復的なデノイジングを行わず、クエリベースで必要な情報をオンデマンドで取得します。",
      "enables": "3Dポイント追跡やビデオ深度推定などのタスクで、最先端またはそれに匹敵する性能を達成しました。追加の学習パラメータなしで、ビデオ深度LoRAを幾何プリオールとして組み込むことが可能です。",
      "why_it_matters": "ビデオ生成学習を通じてモデルが獲得した「世界の物理的構造に関する理解」を知覚タスクに直接転用できることを示しました。",
      "tags": [
        "ビデオ生成",
        "3D復元",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21773",
      "title": "CF-AVSS: A Coarse-to-Fine Audio-Visual Speech Separation Framework with Target-Speaker Refinement and Post-Fusion for Real-World AVSE Challenge",
      "url": "https://arxiv.org/abs/2610.21773",
      "pdf": "https://arxiv.org/pdf/2610.21773",
      "authors": [
        "Longjie Luo",
        "Zhongshu Hou",
        "Yuepeng Li",
        "Gang Yang",
        "Shidong Shang",
        "Fan Zhou"
      ],
      "categories": [
        "cs.SD",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by ISCSLP 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our system tied for first place on Track 1 and ranked second on Track 2",
      "signals": [],
      "headline": "ターゲット話者の洗練と融合を用いた二段階オーディオ・ビジュアル音声分離",
      "what": "視覚情報を用いてターゲット話者の音声を分離・強調する2段階フレームワークです。第1段階で妨害音を抑制し、第2段階でオリジナルの混合音と中間結果を入力としてターゲット話者の音声を詳細に復元・洗練します。",
      "enables": "ISCSLP 2026 Real-World AVSE Challengeにおいて、Track 1で同率1位、Track 2で2位を獲得し、両トラックで最低の文字誤り率（CER 12.31%および14.79%）を達成しました。",
      "why_it_matters": "残響やノイズ、話者の重なりが激しい実環境下での音声強調において、視覚キューと多段階の洗練プロセスを組み合わせる有効性を証明しました。",
      "tags": [
        "音声分離",
        "マルチモーダル",
        "音声強調"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20822",
      "title": "Temporal Specification Guidance for Text-to-Video Generation",
      "url": "https://arxiv.org/abs/2610.20822",
      "pdf": "https://arxiv.org/pdf/2610.20822",
      "authors": [
        "Avishree Khare",
        "Hideki Okamoto",
        "Bardh Hoxha",
        "Georgios Fainekos",
        "Rajeev Alur"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "representing these requirements as specifications in a formal Temporal Logic",
      "signals": [],
      "headline": "時相論理仕様を用いたテキスト・ビデオ生成の順序・タイミング制御技術TSG",
      "what": "ビデオ生成時のオブジェクトの出現順序やタイミングの要求を「時相論理（Temporal Logic）」の仕様として記述し、推論時にデノイジングの方向をガイドする手法です。ビデオとテキストのアテンション履歴から微分可能なスコアを算出し、勾配を用いて制御を行います。",
      "enables": "追加の学習や外部分類器なしで、既存の5つのビデオ生成モデルにおいて、仕様の充足精度を9.5〜20ポイント向上させました。オブジェクトの登場順や状態遷移などの時間的制約を正確に反映できます。",
      "why_it_matters": "自然言語だけでは曖昧になりがちなビデオの時系列的な制御を、論理学の形式言語を用いることで厳密かつ柔軟に行えるようにしました。",
      "tags": [
        "ビデオ生成",
        "時相論理",
        "制御可能性"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21125",
      "title": "Noise-Space Reward Alignment for Few-Step Generative Models",
      "url": "https://arxiv.org/abs/2610.21125",
      "pdf": "https://arxiv.org/pdf/2610.21125",
      "authors": [
        "Woocheol Shin",
        "Taeyoung Yun",
        "Jiwon Sung",
        "Hyeongyu Kang",
        "Jeongmin Park",
        "Jaewoo Lee"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://shin-woocheol.github.io/npo/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "learn an amortized flow policy over the initial noise space of the generator.",
      "signals": [],
      "headline": "ノイズ空間でのポリシー最適化による数ステップ生成モデルの報酬アライメント",
      "what": "数ステップで生成を完了するモデルにおいて、モデルの重みを固定したまま、初期ノイズ空間上で報酬が高い方向へ分布を変換する「フローポリシー」を学習する手法（NPO）です。生成器の知識を保ちつつ、報酬と品質のトレードオフを最適化します。",
      "enables": "画像、言語、タンパク質構造生成の各ドメインで、直接的なファインチューニングよりも優れた品質を維持しつつ、テスト時の探索手法（Best-of-Nなど）と比較して16〜549倍低い推論コストで同等の報酬値を達成しました。",
      "why_it_matters": "学習コストが高い数ステップ生成モデルに対し、生成品質を損なう「報酬の過剰最適化」を避けながら、効率的に望ましい属性（報酬）へ誘導することを可能にします。",
      "tags": [
        "生成モデル",
        "強化学習",
        "アライメント"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21202",
      "title": "UltraDiff: Transferring High-Fidelity Priors to Compressed Latent Spaces for High-Resolution Image Generation",
      "url": "https://arxiv.org/abs/2610.21202",
      "pdf": "https://arxiv.org/pdf/2610.21202",
      "authors": [
        "Jingjing Ren",
        "Haitian Zheng",
        "Haoyu Chen",
        "Connelly Barnes",
        "Zhifei Zhang",
        "Yuqian Zhou"
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
      "star_quote": "joint latent diffusion learning followed by marginal score distillation.",
      "signals": [],
      "headline": "高圧縮潜在空間への高精細プリオール転送による超解像画像生成UltraDiff",
      "what": "圧縮率の高い潜在空間（f32）で生じる情報損失を、標準的な空間（f8）のモデルから蒸留することで解決するフレームワークです。デュアルブランチのDiT（MixTeacher）を用いて共有アテンションにより曖昧さを解消し、ベクトル場蒸留によってアーティファクトを除去します。",
      "enables": "f8レベルの高品質を維持しつつ、A100 GPU 1枚を用いて2K画像を6.2秒で生成できます。これはベースラインのf8モデルと比較して40倍以上の高速化です。",
      "why_it_matters": "高解像度画像生成における「計算コスト」と「生成品質」のトレードオフを、異なる圧縮率の潜在空間を橋渡しする学習手法によって解消しました。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "蒸留"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21325",
      "title": "CertEx: Exact Visual Retrieval at Scale by Certified Exclusion",
      "url": "https://arxiv.org/abs/2610.21325",
      "pdf": "https://arxiv.org/pdf/2610.21325",
      "authors": [
        "Dongfang Zhao"
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
      "star_quote": "7.1$\\times$ to 18.0$\\times$ the throughput of the fastest cuVS search",
      "signals": [],
      "headline": "下界プロジェクションを用いたGPUでの厳密なk近傍検索手法CertEx",
      "what": "高次元ベクトル検索において、低精度（half precision）での下界プロジェクションによる「除外の証明」を行い、厳密な距離計算が必要な候補を大幅に絞り込む手法です。Tensor Coreを利用したドット積に丸め誤差の証明を組み込むことで、数学的な厳密性を保証します。",
      "enables": "最大1億件のデータセットにおいて、全Queryで厳密な解（Recall=1.0）を返しつつ、最速のGPU検索ライブラリ（cuVS）の7.1倍から18.0倍のスループットを達成しました。",
      "why_it_matters": "近似検索（ANN）の精度低下を許容できない用途（重複検知やLLMのメモリなど）において、厳密検索を近似検索に近い速度で実行できる実用的な手段を提供します。",
      "tags": [
        "ベクトル検索",
        "kNN",
        "GPU計算"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21337",
      "title": "Does On-Policy Distillation Need to Complete Every Rollout?",
      "url": "https://arxiv.org/abs/2610.21337",
      "pdf": "https://arxiv.org/pdf/2610.21337",
      "authors": [
        "Zhengxin Zhang",
        "Maosen Tang",
        "Ning Wang",
        "Changhao Li",
        "Jingren Zhou",
        "Bo Dai"
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
      "star_quote": "correcting the resulting sampling bias with blockwise inverse-probability weighting",
      "signals": [],
      "headline": "ロールアウトの確率的打ち切りによるポリシー蒸留の効率化手法STOPD",
      "what": "教師モデルから生徒モデルへ知識を移転する際、生徒のロールアウトをランダムな位置で打ち切り、発生するサンプリングバイアスをブロック単位の逆確率重み付け（IPW）で補正する手法です。全てのトークンを生成し切ることなく学習を進めます。",
      "enables": "生成トークン数を25〜48%削減しつつ、従来の蒸留手法と同等の精度を維持し、全体的な学習速度を1.3〜2.2倍高速化しました。数学、コード、対話などの多様なドメインで有効性が確認されています。",
      "why_it_matters": "計算コストが非常に高い「生徒の生成に基づく事後学習」において、期待値を維持したまま計算量を削減する理論的根拠に基づいた高速化手法を提案しています。",
      "tags": [
        "LLM",
        "蒸留",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21340",
      "title": "Dimension-Free PAC-Bayes Generalization for Deep Neural Networks via Dirichlet Processes",
      "url": "https://arxiv.org/abs/2610.21340",
      "pdf": "https://arxiv.org/pdf/2610.21340",
      "authors": [
        "Sumit Vashishtha"
      ],
      "categories": [
        "stat.ML",
        "cs.LG",
        "math.ST",
        "stat.TH"
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
      "star_quote": "shifting prior specification from internal parameters to the non-parametric space",
      "signals": [],
      "headline": "ディリクレ過程を用いたニューラルネットワークのパラメータ数に依存しない汎化境界",
      "what": "従来のPAC-Bayes理論がパラメータ空間に事前分布を置いていたのに対し、データの分布空間上にディリクレ過程（DP）を用いた事前分布を定義する新しい理論です。データ処理不等式を用いて、パラメータ空間の相対エントロピーをデータ空間のDPダイバージェンスで抑え込みます。",
      "enables": "MNISTを用いた実験で、420万パラメータの深層学習モデルに対し、従来の境界が1,000%を超える（意味をなさない）のに対し、8.8%〜9.4%という極めてタイトで有効な汎化証明を与えました。",
      "why_it_matters": "「モデルが巨大化しても汎化性能が悪化しない」という現代の深層学習の挙動を、パラメータ数に依存しない形で数学的に証明できる道を開きました。",
      "tags": [
        "機械学習理論",
        "汎化性能",
        "ベイズ"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21634",
      "title": "Anchor3DGS: Feed-Forward 3D Gaussian Splatting with Compact Anchor-Based Representation",
      "url": "https://arxiv.org/abs/2610.21634",
      "pdf": "https://arxiv.org/pdf/2610.21634",
      "authors": [
        "Sheng Ye",
        "Jiangke Lin",
        "Fudong Wang",
        "Yi Yuan",
        "Zhen-Hui Dong",
        "Yong-Jin Liu"
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
      "comment": "NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Anchor3DGS achieves state-of-the-art novel view synthesis quality",
      "signals": [],
      "headline": "アンカーベースの表現による効率的なフィードフォワード3D Gaussian Splatting",
      "what": "ピクセル単位でガウス分布を予測する代わりに、シーン内の幾何学的複雑さに応じてアンカー（3D点）を配置し、そこからローカルなガウス分布を生成する手法です。情報の量（エントロピー）に基づいてアンカーを集中させ、疎密のある効率的な表現を実現します。",
      "enables": "既存の手法と比較して、ガウス分布の数を10分の1に削減しながら、同等以上の高品質な新規視点合成を達成しました。ポーズ情報が未知の状態からの再構成も可能です。",
      "why_it_matters": "入力解像度やビュー数に依存してデータ量が増大する従来の課題を克服し、コンパクトで計算効率の高い3Dシーン表現を可能にします。",
      "tags": [
        "3DGS",
        "3D復元",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22352",
      "title": "SUPRA-TEX: 3D Generation with Super-Aligned Texture",
      "url": "https://arxiv.org/abs/2610.22352",
      "pdf": "https://arxiv.org/pdf/2610.22352",
      "authors": [
        "Chen Yang",
        "Jiemin Fang",
        "Fanpeng Meng",
        "Zihao Huang",
        "Jichen Pang",
        "Guanjun Wu"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://supra-3d.github.io/supratex/",
      "hf_upvotes": 7,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SUPRA-Tex achieves SOTA performance in both geometry-conditioned texturing",
      "signals": [],
      "headline": "1枚の画像から高品質なPBRテクスチャを生成・補完するSUPRA-TEX",
      "what": "単一画像から3Dメッシュに対して物理ベースレンダリング（PBR）用のテクスチャを適用する手法です。見える部分のPBRマップ推定、表面アライメント、見えない部分の3D補完の3つの工程に分離し、Flow Transformerを用いて一貫性のあるテクスチャを生成します。",
      "enables": "入力画像に忠実な「WYSIWYG（見たままが得られる）」品質を維持しつつ、見えない背面なども一貫性を保って補完します。商用システムに匹敵、あるいは一部上回るテクスチャ品質を公開データのみの学習で達成しました。",
      "why_it_matters": "画像と3Dの一貫性不足や細部の消失という既存の課題を、工程の明示的な分離と参照画像をアンカーとして保持するアーキテクチャにより解決しました。",
      "tags": [
        "3D生成",
        "テクスチャ生成",
        "PBR"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2610.18829",
      "title": "OmniCompass: A Holistic Benchmark for Omni-Modal Video Grounding and Understanding",
      "abstract": "With the rapid development of multimodal large language models (MLLMs), evaluating their video understanding capabilities has become increasingly important. Existing video understanding benchmarks cover only part of the evaluation dimensions, limiting systematic diagnosis of omni-modal video understanding. We introduce OmniCompass, a holistic benchmark for omni-modal video grounding and understanding. OmniCompass defines two evaluation tracks: OmniCompass-VL assesses vision-language models on tasks requiring visual evidence, while OmniCompass-AV assesses omni-modal models on tasks requiring joint audio-visual evidence. Each track includes three complementary tasks: temporal grounding (TG), spatial grounding (SG), and question answering (QA), assessing when a referenced target appears, where it is, and what happens. QA covers five perception and three reasoning categories in OmniCompass-VL, and three perception and two reasoning categories in OmniCompass-AV. OmniCompass-VL contains 820 videos and 2,460 instances across domains and three duration types: short, medium, and long. A narrative- and audio-rich subset forms OmniCompass-AV with 240 videos and 720 instances. Each instance is evaluated under two paired settings: text-only and text+image, specifying the same target through text and visual-language guidance. All instances are manually annotated with multi-round quality verification. Evaluations of 50 MLLMs show that open-source models still lag behind proprietary counterparts, particularly in audio-visual understanding. Precise temporal and spatial grounding remains challenging even for leading models, and their predictions still exhibit inconsistencies across the paired target specifications.",
      "upvotes": 566,
      "github_stars": 60,
      "github_repo": "https://github.com/PolyU-VCLab/OmniCompass",
      "project_page": "https://omnicompass.netlify.app/",
      "comments": 3,
      "org": "VCLab",
      "url": "https://huggingface.co/papers/2610.18829",
      "arxiv_url": "https://arxiv.org/abs/2610.18829",
      "title_ja": "OmniCompass: オムニモーダル動画接地と理解のための統合ベンチマーク",
      "summary_ja": "視覚と言語、または音声と視覚の統合が必要なタスクを定義し、MLLMの多角的な動画理解能力を系統的に診断できる。"
    },
    {
      "id": "2610.21601",
      "title": "Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation",
      "abstract": "Policy-shift distillation reuses the difference between a teacher's log probabilities before and after reinforcement learning (RL) as supervision on student-generated trajectories. However, this endpoint policy shift cannot reveal whether local action preferences evolved consistently during teacher training. The same endpoint shift can result from early and late shifts that reinforce or partially cancel each other. We investigate whether agreement between early and late teacher policy shifts can guide selective transfer. We introduce Waypoint-guided On-Policy Distillation (Waypoint-OPD), which uses an intermediate teacher checkpoint from the same RL run to compare early and late shifts in relative action preferences at student-visited prefixes. We gate the endpoint shift according to the directional agreement between the early and late shifts, suppressing it when they point in opposing directions. Compared with endpoint-only transfer, our method requires only one additional frozen-teacher scoring pass. Using RL-trained Qwen3-4B teachers, we evaluate our method with Qwen3-8B, Qwen3-14B, and Qwen3-30B-A3B as student models in mathematical and code reasoning. In all six domain--student settings, Waypoint-OPD achieves the highest domain-average score among the compared distillation methods. Ablations with the Qwen3-8B student show that removing or shuffling gates reduces mathematical reasoning performance. These results support the use of directional agreement between early and late teacher policy shifts to weight the endpoint shift during student training.",
      "upvotes": 451,
      "github_stars": 3,
      "github_repo": "https://github.com/hhhbxloveai/WaypointOPD",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21601",
      "arxiv_url": "https://arxiv.org/abs/2610.21601",
      "title_ja": "Waypoint-OPD: ゲート付きオンポリシー蒸留によるRL誘導型方策シフトの転移",
      "summary_ja": "強化学習の中間チェックポイントを利用し、局所的な行動嗜好の変化の一貫性を評価することで、生徒モデルへの効果的な知識転移を実現する。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 348,
      "github_stars": 153,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 3,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev: 動画理解とインタラクションのためのSystem 1モデル",
      "summary_ja": "自己回帰的デコードをスコアリングに置き換えることで、動画の時間的接地と多肢選択回答を統合し、エージェントが即座に利用できる効率的な意思決定を可能にする。"
    },
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "abstract": "Long-form agentic video generation must turn a screenplay into shots that remain spatially and temporally consistent across nonconsecutive requests. Passing prompts or recent frames between shots does not provide a shared spatial frame for revisiting a scene or a time-indexed record for replaying an earlier event. We present Any Time, Any Space (ATAS), which compiles a screenplay into shot requests with explicit location, camera, and event-time references. Before generation, it retrieves relevant evidence from a scene memory of registered static geometry and an event memory of dynamic observations indexed by scene, event, and time. After generation, ATAS reconstructs and registers the clip. It updates memory only when review and state checks accept the observation, while film delivery remains independent of memory admission. Across four video generators, ATAS improves all reported cross-shot consistency measures and achieves the highest aggregate benchmark score for each backbone. It also outperforms the compared agents and 3D-guided methods on target-image spatial revisit, leads three event-recapture criteria, and receives the highest human ratings on all six criteria. The video results and code are available on our project page: https://lhmd.top/atas/.",
      "upvotes": 341,
      "github_stars": 232,
      "github_repo": "https://github.com/ziplab/ATAS",
      "project_page": "https://lhmd.top/atas/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.20571",
      "arxiv_url": "https://arxiv.org/abs/2610.20571",
      "title_ja": "Any Time, Any Space: エージェント型動画生成のための世界状態中心フレームワーク",
      "summary_ja": "脚本を空間・時間参照付きのショット要求に変換し、シーンとイベントのメモリから情報を検索することで、長尺動画の一貫性を維持する。"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "abstract": "Computer-use agents have demonstrated strong capabilities in interpreting screens and executing keyboard and mouse actions. However, games, with their visually rich worlds and diverse mechanics, remain challenging and offer a demanding next step toward general digital control. Current game-agent learning pipelines often rely on large-scale demonstrations with limited coverage of dynamic game states, while scalable environments for interactive training remain difficult to obtain. We introduce Player-1, a post-training framework for learning game control beyond demonstrations through synthetic experience. We extend the computer-use action space with relative pointer motion, sustained inputs, and composite actions. For supervised initialization, we fine-tune computer-use models on 6,044 curated gameplay trajectories that pair recorded actions with task instructions and visual reasoning. We construct Player-1-Gym, sixteen synthetic 2D and 3D environments designed around control demands shared across games. Programmatically verifiable rewards and randomized observations and control dynamics support multi-environment reinforcement learning with PPO. The resulting Player-1-9B and Player-1-35B-A3B improve MineDojo-300 success over their SFT policies by 27.8 and 17.7 percentage points, respectively. Player-1-9B reaches 38.33% success compared with 12.63% for the strongest evaluated baseline, with further gains over SFT on ViZDoom-10 and GameWorld. Further analyses show that broader synthetic environment coverage improves transfer, while the use of composite actions that combine multiple keyboard and mouse inputs increases during RL. We demonstrate that learning from synthetic experience substantially improves game control beyond supervised initialization, with gains that generalize beyond the RL training suite.",
      "upvotes": 332,
      "github_stars": 100,
      "github_repo": "https://github.com/TencentARC/Player-1",
      "project_page": "https://player-1-project.github.io/",
      "comments": 3,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.20584",
      "arxiv_url": "https://arxiv.org/abs/2610.20584",
      "title_ja": "Player-1: 合成体験からのゲームプレイ学習",
      "summary_ja": "ポインタの相対移動や持続入力を含む行動空間を拡張し、デモンストレーションに頼らず合成体験を通じて高度なゲーム操作を学習するフレームワーク。"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 316,
      "github_stars": 137,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART: 拡散モデルの効率的かつ安定、スケーラブルな強化学習",
      "summary_ja": "各プロンプトの報酬を統合して更新を導く手法により、拡散モデルのRLにおける効率的な報酬割り当てと学習の安定化を両立させる。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 315,
      "github_stars": 102,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI: 視覚プリミティブを用いた物理的知能に向けた接地基盤モデル",
      "summary_ja": "座標をトークンとして扱うことで、雑多な環境や微小な物体に対しても高速かつ正確な接地を可能にし、クローズドループ制御を支援する4B基盤モデル。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 296,
      "github_stars": 174,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space: マルチモーダル言語モデルにおける空間ワークスペースの探索",
      "summary_ja": "MLLM内部に存在する、物体の座標を連続的に符号化する線形表現サブスペースを特定し、それが内部的な空間推論の場として機能することを解明した。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 291,
      "github_stars": 83,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva: 第一原理からのSystem 1モデル",
      "summary_ja": "不確実性の区別や選択肢の順序不変性などを備えた意思決定ネイティブな構造を採用し、低遅延で構造的に正しい意思決定を実現するアーキテクチャ。"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "abstract": "Computer use has reached a turning point: the focus is expanding from GUI-only interaction to systems that complete tasks on users' computers through visual and programmatic interfaces. We define a generalist computer-use agent (GCUA) as a system in which the model chooses how to observe, act, and organize its work across visual and programmatic interfaces. Yet frontier implementations, such as GPT-6 Astra's computer-use system, remain largely closed, limiting systematic study of their design. We introduce Open Generalist CUA (OpenGCUA), an ongoing project to develop and open the full stack for GCUAs with the community. This report presents the first release of OpenGCUA. Code execution is a key feature of our agent design: it lets intermediate results determine subsequent operations and enables models to apply their existing programming capabilities directly to computer interaction. We also propose harness-to-model decision transfer, moving selected observations and task-state decisions from fixed harness rules to the model. On OSWorld-v2, our full configuration improves task scores across all eight evaluated models, including GPT-6 Astra and Claude Opus 5, raising mean partial score by +19.6 points and reducing reported steps per task by an average of 53.0% relative to batched GUI-only execution. We release our implementation and prompts, evaluation trajectories from all eight models, and preliminary versions of a real-device harness and a cross-device SDK. The harness addresses real-device challenges not fully captured by benchmarks, while the SDK provides a common programming interface across computers, mobiles and browsers. Across four real macOS tasks under our real-device harness, selected Qwen3.8-Max runs use 19.4 times as many reported reasoning tokens as GPT-6 Astra, highlighting substantial differences between models in real-device execution efficiency.",
      "upvotes": 270,
      "github_stars": 26,
      "github_repo": "https://github.com/Tongyi-MAI/OpenGCUA",
      "project_page": "https://tongyi-mai.github.io/OpenGCUA/",
      "comments": 3,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.22200",
      "arxiv_url": "https://arxiv.org/abs/2610.22200",
      "title_ja": "OpenGCUA: 汎用コンピュータ操作のための完全オープンスタックに向けて",
      "summary_ja": "視覚とプログラムの両面からPC操作を行うエージェントの開発を促進するため、実行環境からモデルまでを含む完全なオープンスタックを構築・提供する。"
    },
    {
      "id": "2610.11765",
      "title": "Thinking Inertia: LLMs Keep Thinking When Told Not To",
      "abstract": "Large Language Models (LLMs) increasingly ship with explicit \"thinking modes\", yet their counterpart, \"no-thinking\", has received far less attention. We study LLMs' no-thinking behavior along two axes. a. How to measure no-thinking? Prior work typically defines no-thinking through proxies such as a disabled thinking mode or the absence of long traces. These proxies are unreliable: disabled thinking modes may still emit reasoning, while long traces may contain filler rather than genuine inference. We instead normalize each response into a pre-answer trace and final answer, and evaluate it at three levels: (i) Empty-Thinking Rate for strict answer-only compliance; (ii) instruction-aware Question-Pre-answer Relevance for similarity between the question and pre-answer trace; and (iii) LLM-as-judge Explicit Inference Rate for visible explicit inference. Together, these metrics distinguish answer-only output, relevant but non-inferential text, and explicit inference. b. How does no-thinking vary across tasks and models? We evaluate six prompting interventions on six LLMs across Boolean, multiple-choice, and open-ended questions. We find that explicit no-think controls cannot reliably eliminate visible inference. Models instead exhibit \"Thinking Inertia\": explicit inference persists even under strict controls and becomes more prevalent as the answer space opens. Accuracy remains stable on Boolean and multiple-choice tasks, whereas open-ended tasks reveal a trade-off between answer-only compliance and task accuracy. Rewriting the same questions across answer spaces shows that supplying candidate answers makes answer-only responses easier to produce. These findings establish no-thinking as a non-trivial capability: stopping explicit reasoning cannot be assumed from model settings or instructions alone and deserves systematic evaluation alongside reasoning ability.",
      "upvotes": 247,
      "github_stars": 6,
      "github_repo": "https://github.com/thinking-inertia/code",
      "project_page": "https://thinking-inertia.github.io/",
      "comments": 6,
      "org": "Stanford University",
      "url": "https://huggingface.co/papers/2610.11765",
      "arxiv_url": "https://arxiv.org/abs/2610.11765",
      "title_ja": "思考の慣性: LLMは思考を止めるよう指示されても考え続ける",
      "summary_ja": "「思考モード」をオフにした状態でもLLMが内部的に推論を行ってしまう現象を定義し、それを定量的・定性的に評価するための新しい指標を提案した。"
    },
    {
      "id": "2610.13521",
      "title": "Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation",
      "abstract": "Multi-teacher on-policy distillation (MOPD) extends on-policy distillation (OPD) by routing domain-specific data to specialized teachers, integrating their capabilities through dense token-level supervision on student-generated trajectories. However, domain routing only distinguishes the supervision sources for different domains; updates from all domains still act on shared parameters. When teachers differ substantially in response style and domain expertise, supervision that is effective in isolation may still lead to persistent gradient conflicts and capability degradation during joint optimization. To address this challenge, we propose Cross-Teacher Guarding for MOPD (Road MOPD), which introduces non-routed teachers as auxiliary cross-domain critics on the same student trajectories and coordinates multi-teacher supervision through token-level credit assignment and gradient updates. Specifically, cross-teacher-guided credit assignment uses teacher agreement to strengthen token-level corrections jointly supported by the teachers and attenuate conflicting signals; preventive multi-teacher gradient projection uses auxiliary gradients from the same trajectories to constrain potentially conflicting updates and adaptively controls projection strength to retain target-domain learning signals. In experiments, Road MOPD mitigates degradation in the disadvantaged domain, gains over 5 percentage points under high conflict, and improves overall performance in low-conflict and three-domain settings.",
      "upvotes": 242,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.13521",
      "arxiv_url": "https://arxiv.org/abs/2610.13521",
      "title_ja": "ドメイン別監督を超えて: マルチ教師オンポリシー蒸留のための教師間ガード",
      "summary_ja": "複数の専門教師モデルから蒸留する際の勾配競合を防ぐため、教師間の矛盾を検出して安全な更新方向を維持する「Road MOPD」を提案した。"
    },
    {
      "id": "2610.13361",
      "title": "AgentSWE: Can Coding Agents Build the Agent You Actually Want?",
      "abstract": "As the production of software passes into the hands of software itself, coding agents are increasingly commissioned to build agents fitted to their users' own workflows. This delegation carries a quiet assumption, that the delivered agent will faithfully serve the requirement it was built for, rather than merely appear to. No existing benchmark tests that assumption. We introduce AgentSWE, a benchmark for agent software engineering spanning three stages of the agent development lifecycle: Creation of a complete agent from a natural-language requirement, Editing of production agent codebases, and Optimization toward a measurable target. Each of its 25 tasks is framed as a commission rather than an exam: the builder iterates against a handful of illustrative cases, while acceptance exercises the frozen submission on held-out cases designed to span the full requirement, grading behavior against requirement-derived rubrics under hard pass/fail gates or, for Optimization, against the source benchmark's own objective. Evaluating a range of coding agents across models and harnesses, we find that none comes close to delivering what a requirement asks for: the gap between what a builder demonstrates and what it delivers is the norm, not the corner case. An accompanying empirical analysis of the failure trajectories identifies recurring failure modes, among them overfitting to the visible cases, hollow runtimes behind code that looks complete, and unsupported claims of completion, each a signal by which coding agents can learn to build the agents they are asked for.",
      "upvotes": 232,
      "github_stars": 40,
      "github_repo": "https://github.com/VectorSpaceLab/AgentSWE",
      "project_page": "https://vectorspacelab.github.io/AgentSWE/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.13361",
      "arxiv_url": "https://arxiv.org/abs/2610.13361",
      "title_ja": "AgentSWE: コーディングエージェントは望み通りのエージェントを構築できるか？",
      "summary_ja": "自然言語の要求からエージェントを新規作成・編集・最適化する能力を評価する、エージェント開発ライフサイクル全般を網羅したベンチマーク。"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "abstract": "Existing agent benchmarks typically evaluate agents on well-specified tasks defined by issue reports, specifications, or task tickets. Real-world customer delivery is different: forward-deployed engineers (FDEs) must clarify ambiguous requirements, work in live systems, and uncover unstated constraints. We introduce FDE-Gym, a benchmark of 95 end-to-end delivery tasks from 20 customer scenarios across 18 sectors, each adapted by industry experts from real-world delivery projects. In simulated customer environments with scripted stakeholders and modifiable customer systems, agents interact with stakeholders and operate on production-like systems to deliver working solutions. FDE-Gym scores a delivery by how much it improves the customer's own success metric, normalized between 0 (unchanged system) and 1 (reference solution), with penalties for stakeholder interactions (messages, trial runs, and waiting time). An online platform lets humans practice FDE skills under the same grading criteria. We evaluate 13 model configurations from seven providers. In the realistic setting, where unstated constraints must be discovered, the best configuration achieves a mean FDE-Gym score of 0.56 and resolves only 14 of the 95 tasks (a score of at least 0.8 with no incident). Discovering unstated constraints is the primary bottleneck: performance drops sharply when models must uncover them without explicit guidance. Yet information discovery alone does not account for the gap: even on the 23 tasks where the best configuration obtains every key fact from stakeholders, it reaches a normalized business uplift of 0.8 or above on only 10. These results reveal a substantial gap between solving well-specified tasks and delivering effective AI systems for real customers.",
      "upvotes": 229,
      "github_stars": 97,
      "github_repo": "https://github.com/deeplethe/fde-gym",
      "project_page": "https://fde-gym.com/paper",
      "comments": 1,
      "org": "DeepLethe",
      "url": "https://huggingface.co/papers/2610.22350",
      "arxiv_url": "https://arxiv.org/abs/2610.22350",
      "title_ja": "FDE-Gym: AIデリバリーのラストワンマイル",
      "summary_ja": "曖昧な要件定義やライブシステムでの運用など、実世界のエンジニアが直面する複雑な顧客導入シナリオにおけるエージェントの対応力を評価する。"
    },
    {
      "id": "2610.17665",
      "title": "RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment",
      "abstract": "Can vision-language models turn 2D observations into 3D understanding that supports precise action? This requires inferring object geometry, anticipating the effects of rotation, and refining actions through visual feedback. We introduce RoTA-Bench to evaluate these abilities through interactive 3D-to-2D projection alignment. Given a target silhouette, a model observes a rotated object and chooses successive rotations to recover the target projection within a limited action budget. Our automated pipeline constructs silhouette-preserving 3D objects from 2D icons and uses reversible initialization to guarantee solvability, yielding 674 tasks and a stratified 100-task test set. Empirically, we find that (i) a substantial human-model gap persists: GPT-5.6-Sol succeeds on only 17% of tasks, whereas 20 undergraduate participants collectively complete the test set four times with a 100% success rate; (ii) image-space and pose-space progress can diverge: at matched states, the model more often improves silhouette overlap while worsening pose alignment than humans (19.4% vs. 10.9%); and (iii) fine-grained control is sensitive to interaction history: removing it leaves 96.8% of the model's actions at a coarse 30-degree step size and sharply reduces observed task success. These findings highlight the challenge of converting visual evidence into precise 3D control, beyond recognizing or matching individual images.",
      "upvotes": 198,
      "github_stars": 3,
      "github_repo": "https://github.com/MAC-AutoML/RoTA-Bench",
      "project_page": "https://www.modelscope.cn/studios/san2333333/rotabench-anon?mode=full&app_path=%2Fportal",
      "comments": 1,
      "org": "MAC-AutoML",
      "url": "https://huggingface.co/papers/2610.17665",
      "arxiv_url": "https://arxiv.org/abs/2610.17665",
      "title_ja": "RoTA-Bench: 対話的投影アライメントによる3D空間推論の評価",
      "summary_ja": "2Dのシルエット目標に一致するように物体を回転させるタスクを通じて、VLMが2D観測から物体の3D構造を理解し操作できるかを検証する。"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "abstract": "Large language models have evolved from single-turn chatbots into interactive agents capable of long-horizon reasoning. In real deployments, MCP tool services can return noisy feedback and users may intervene to correct the agent, but existing methods provide limited supervision for reflection learning and failure recovery. To bridge this gap, we propose Agent-Reflex, a general training framework for incentivizing proactive reflection in agents. Specifically, Agent-Reflex comprises three stages. First, Environment Reflection Skill Discovery (RSD) injects grounded tool-feedback perturbations into environment scaling, samples a capability-diverse LLM pool, mines matched success-failure pairs, and summarizes reusable reflection meta-skills. Building on this skill library, we then apply Reflective Supervised Fine-Tuning (ReSFT) that converts each skill into supervision for self-reflection, skill recovery, and user-centric correction, strengthening complementary reflective behaviors. Finally, we propose On-Policy Reflective Policy Optimization (ORPO) to combine agentic reinforcement learning under noisy interactions with reflection-guided on-policy distillation to further elicit proactive reflection. Built on Qwen3-8B, Agent-Reflex reaches 58.6 overall on five long-horizon tool-use benchmarks and 29.1 on AgentNoiseBench, surpassing strong environment-scaling and reflection baselines. Experiments on six challenging agent benchmark suites demonstrate the effectiveness of Agent-Reflex. Further analyses show that Agent-Reflex improves agents' robustness to noise while maintaining stable training dynamics, supporting scalable agent training. Our code is available at https://github.com/RUC-NLPIR/Agent-Reflex.",
      "upvotes": 197,
      "github_stars": 76,
      "github_repo": "https://github.com/RUC-NLPIR/Agent-Reflex",
      "project_page": "",
      "comments": 3,
      "org": "NLPIR Lab @ RUC",
      "url": "https://huggingface.co/papers/2610.17953",
      "arxiv_url": "https://arxiv.org/abs/2610.17953",
      "title_ja": "Agent-Reflex: エージェントに内省的な行動を教える",
      "summary_ja": "ツールの失敗やユーザーの介入から自律的に原因を分析し、行動を修正する「積極的な内省」を学習させるための汎用的な訓練フレームワーク。"
    },
    {
      "id": "2610.18813",
      "title": "Self-Evolving Agent Harness",
      "abstract": "Harness self-evolution revises an agent's software scaffolding, including prompts, memory, workflows, and executable components, while keeping model weights fixed. We formalize a feedback-driven process in which accepted revisions persist across runs. The framework separates update targets from proposal and admission mechanisms. It distinguishes changes to interpreted state from revisions to tools and code, repository-level control logic, and plugin composition. We characterize search through evolutionary optimization and examine its reliability through continual PAC-learning. Under explicit assumptions, the analysis yields an expected generalization bound, a retention bound conditional on historical regression budgets, and a high-probability admission rule using fresh, independent validation data. We examine how persistent harness revisions affect knowledge sharing and organizational workflows, with implications for scientific reliability, physical safety, and institutional accountability. Cases from prior work illustrate model--harness co-design, distributed execution, and plugin reuse. Reliable deployment requires continual validation as task distributions and evaluators change, with independent safeguards for learning, runtime privileges, and consequential actions. We provide a comprehensive 66-page discussion of related work, theory, algorithms, evaluation, applications, and the broader impact of Harness RSI, together with continuously updated code and supplementary materials, at https://github.com/zgcagi/Harness-RSI.",
      "upvotes": 188,
      "github_stars": 43,
      "github_repo": "https://github.com/zgcagi/Harness-RSI",
      "project_page": "https://zgcagi.github.io/Harness-RSI/",
      "comments": 5,
      "org": "ZGCAGI",
      "url": "https://huggingface.co/papers/2610.18813",
      "arxiv_url": "https://arxiv.org/abs/2610.18813",
      "title_ja": "Self-Evolving Agent Harness: 自己進化するエージェント・ハーネス",
      "summary_ja": "モデルの重みを変えずに、プロンプトやワークフローなどの周辺ソフトウェア構造をフィードバックに基づいて自動的に改善し続ける枠組み。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 161,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期ターミナルインテリジェンスのためのエージェント型データのスケーリング",
      "summary_ja": "探索、戦略調整、成果物作成を含む実世界の専門的業務を模した長尺の行動軌跡データを生成し、自律的な問題解決能力を高める手法を提案した。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 153,
      "github_stars": 32,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex: 視覚的に接地された反応型ヒューマノイド制御",
      "summary_ja": "飛んでくる箱をキャッチするなどのタスクを通じ、一人称視点から物体の動的な変化に即座に反応する、全身協調型の視覚反応制御を研究する。"
    },
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "abstract": "Spatial intelligence lets an agent perceive and act in the physical world, and many of its judgments must be made at interaction rates: which spatial relation holds, how far an object is, or where to place it. Vision-language models (VLMs) produce these answers by free-form text generation, paying for autoregressive decoding and answer parsing even though the output space is compact: one of a few options, a scalar, or a 2D point. In light of this, we introduce MJev-Spatial, a System 1 multimodal decision model that tackles all three types of spatial understanding tasks within a unified classification framework. Specifically, MJev-Spatial treats each candidate as a class and scores it using the backbone's pretrained query and key projections, without adding parameters. The candidates are the given options for choice tasks, or value bins and image regions refined through coarse-to-fine classification for numerical and point prediction, respectively. At inference, each classification decision takes a single forward pass and generates no answer tokens. To train on heterogeneous spatial data efficiently, we supervise all coarse-to-fine stages jointly with teacher forcing in one forward pass, and combine this with length-aware global batching and cross-GPU load balancing, raising training throughput by 30.8% over the original batching strategy. Built on Qwen3.5-4B and trained on 12.3M question-answer pairs converted from existing spatial datasets, MJev-Spatial achieves the highest overall score (65.64%) among eight tested models, ranks first on seven of twelve benchmarks, and outperforms its unmodified autoregressive base model on all twelve, while running 2.5 times faster than the fastest autoregressive baseline and 5.6 times faster than the base model.",
      "upvotes": 141,
      "github_stars": 7,
      "github_repo": "https://github.com/Fr0zenCrane/MJev-Spatial",
      "project_page": "https://fr0zencrane.github.io/mjev-spatial-project/",
      "comments": 1,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.22276",
      "arxiv_url": "https://arxiv.org/abs/2610.22276",
      "title_ja": "MJev-Spatial: ネイティブ注意マッチングによるSystem 1空間知能",
      "summary_ja": "空間関係、距離、座標予測を統一的な分類問題として扱い、注意機構のスコアを利用することで、高速かつ正確な空間推論を実現するモデル。"
    },
    {
      "id": "2610.14993",
      "title": "Learning Where to Split: Dynamic Band Splitting for Audio Source Separation",
      "abstract": "Audio source separation models must preserve fine spectral structure while keeping the cost of the separator tractable. Band-split architectures reduce this cost by manually partitioning the spectrum into predefined frequency bands and encoding each band as a token, but the same boundaries are used for every mixture. Because informative spectral structure varies with source content, fixed boundaries can merge discriminative components or spend tokens where little resolution is needed. We introduce Dynamic Band Splitting (DBS), an end-to-end framework that adapts boundary locations and band widths to each mixture under a fixed band-token budget. DBS predicts content-conditioned boundary scores within frequency blocks, selects a prescribed number of boundaries using hard Top-K, and applies content-dependent pooling to obtain compact band tokens. After separation, it smooths and expands these tokens to the original STFT grid, refines them along frequency, and decodes complex masks with a frequency-shared head. DBS improved separation over the corresponding static models on DnR v2, MUSDB18-HQ, and EchoSet, with DBS-BSRNN achieving relative gain of 29.0% in average SI-SDR on DnR v2. These results and boundary analyses on DnR v2 show that content-adaptive frequency partitioning benefits multiple separator backbones under a fixed band-token budget. Code and audio demos are available at https://cslikai.cn/Dynamic-Band-Splitting",
      "upvotes": 131,
      "github_stars": 19,
      "github_repo": "https://github.com/JusperLee/Dynamic-Band-Splitting",
      "project_page": "https://cslikai.cn/Dynamic-Band-Splitting/",
      "comments": 1,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.14993",
      "arxiv_url": "https://arxiv.org/abs/2610.14993",
      "title_ja": "分割場所の学習: 音源分離のための動的バンド分割",
      "summary_ja": "入力音源の内容に応じて周波数帯域の分割位置と幅を適応的に変化させることで、計算コストを抑えつつ精緻なスペクトル構造を保持する分離フレームワーク。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 121,
      "github_stars": 97,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex: 都市規模3Dシーンのためのエージェント型空間接地",
      "summary_ja": "都市規模の広大なシーンにおいて、エージェントが能動的に視点を切り替えたりズームしたりしながら対象物を探索・特定する能動的検索手法を提案。"
    },
    {
      "id": "2610.18860",
      "title": "AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards",
      "abstract": "Generating information-rich visual artifacts such as slides, posters, and dashboards as code is appealing because the outputs are structured, editable, and verifiable. Yet code models cannot see how their choices of layout and color come together on the canvas, often limiting spatial planning and aesthetic quality. Image generators excel at visual design but can misrender requested content, making their outputs unreliable targets for direct reproduction. We therefore introduce AesCode, which generates code grounded in the content prompt while using an image generated from the same prompt as an aesthetic guidance. To do so, AesCode represents the target as a design graph that describes the whole canvas and makes each property attributable. From this graph, we derive complementary cross-modal rewards: deterministic verifiers score properties parsable from code and rendering, while a VLM judge assesses the non-parsable ones with a sample-specific Visual Graph Rubric (VGR) tied to graph elements and relations. We optimize these decoupled rewards through reinforcement learning with per-channel normalization to jointly improve spatial planning, aesthetic quality, and verifiable correctness. To evaluate this setting, we build a benchmark that scores verifiable correctness and visual quality separately, with visual scores highly consistent with human judgments. We find that reference images substantially improve the visual quality of code generated by existing models, and ablations show that AesCode benefits from references both as model input and as a source of visual rewards. Relative to same-scale Qwen3-VL baselines given the same references, AesCode-8B and AesCode-32B improve visual quality by 31.1 and 22.4 percentage points, reaching scores comparable to those of closed-source frontier models such as GPT-5.5 and Claude Opus 4.8.",
      "upvotes": 120,
      "github_stars": 84,
      "github_repo": "https://github.com/microsoft/AesCode",
      "project_page": "https://microsoft.github.io/AesCode/",
      "comments": 2,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.18860",
      "arxiv_url": "https://arxiv.org/abs/2610.18860",
      "title_ja": "AesCode: 分離されたクロスモーダル報酬による審美的コード生成",
      "summary_ja": "プロンプトから生成された画像を視覚的ガイドとして利用し、レイアウトや配色に優れた編集可能なビジュアルコンテンツのコードを生成する手法。"
    },
    {
      "id": "2610.20341",
      "title": "InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views",
      "abstract": "Feed-forward Gaussian reconstruction builds 3D scenes directly from input images for novel view rendering, but learning Gaussian attributes from predicted geometry for high-quality rendering under large viewpoint changes remains challenging. We analyze limitations in Gaussian attribute learning and introduce InfiniSplat v2, which improves rendering quality through architectural and training changes. Our method decouples geometry and attribute prediction with a frozen geometry branch, aligns predicted Gaussians using ground-truth camera poses during training, and adopts large-angle target view supervision. Across six datasets, the feed-forward outputs of the same trained model achieve state-of-the-art mean LPIPS and DISTS among the evaluated methods in both pose-conditioned and pose-free settings. In the pose-conditioned setting, mean LPIPS and DISTS decrease by 25.8% and 32.9%, respectively, compared with the strongest evaluated baselines. We further find that opacity learned with only image reconstruction supervision suppresses geometrically inconsistent points. Project page: https://zju3dv.github.io/InfiniSplat2/",
      "upvotes": 114,
      "github_stars": 376,
      "github_repo": "https://github.com/zju3dv/InfiniSplat",
      "project_page": "https://zju3dv.github.io/InfiniSplat2/",
      "comments": 1,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.20341",
      "arxiv_url": "https://arxiv.org/abs/2610.20341",
      "title_ja": "InfiniSplat v2: あらゆる視点からのフィードフォワード3DGSの分析と改善",
      "summary_ja": "幾何構造と属性予測を分離し、訓練時のカメラポーズ整列を改善することで、大きな視点変化の下でも高品質な3Dシーン再構成を実現する。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 109,
      "github_stars": 18,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym: 多様な合成ソフトウェア環境による操作エージェント訓練のスケーリング",
      "summary_ja": "多様なUIと実行機能を備えたGUIソフトウェア環境を自動合成し、エージェントが特定のアプリに過学習することなく汎用的なPC操作を学べる環境を提供。"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "abstract": "Long-horizon agents have drawn growing attention for their ability to work autonomously -- from hours to days -- on economically valuable tasks, a capability essential to automated discovery and recursive self-improvement (RSI). Yet open-source models still struggle on long-horizon tasks, largely for lack of both training data and a working recipe, and scaling both is hard: long, complex tasks are difficult to curate and verify, and their rewards are sparse. We address both. First, we introduce Tev-Gym, the first long-horizon agent training dataset with verifiable, dense, progressive rewards -- 1,170 verified task environments across 7 domains. It is built on a latent-world-first approach that first constructs a latent world: a complete and correct hidden specification of the task domain, workflow, and expected state after each step. Each task is then progressively rendered from this specification into an agent-facing environment, enabling controllable complexity and a natural progress metric. Second, we turn this metric into a training recipe: via progress-potential reward shaping (PPRS), we convert progress into a dense per-step reward that improves training efficiency and makes otherwise-intractable tasks trainable. Training with this recipe yields Tev-27B, which achieves substantial gains on the Agents' Last Exam computing and math sciences domains (ALE-CM), matching GPT-6 Astra and Claude Opus 5 at Pass@5. Despite training only on ALE-related data, it generalizes to the Terminal-Bench (TB) 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash, and reaches Claude Opus 4.8-level performance on middle-horizon tasks such as TB 2.1.",
      "upvotes": 105,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tev-agent.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.18868",
      "arxiv_url": "https://arxiv.org/abs/2610.18868",
      "title_ja": "Tev: 密な進捗報酬による長期エージェント環境のスケーリング",
      "summary_ja": "検証可能な密な進捗報酬を備えた1,000以上の長期タスク環境を構築し、報酬が疎になりがちな複雑な自律業務の学習を促進する。"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "abstract": "Agents driven by large language models are increasingly deployed on long-horizon tasks, where they use tools and modify real workspaces. How well they perform depends as much on the harness around the model as on the model itself. Existing benchmarks measure downstream task success under a fixed harness, leaving harness engineering itself unexplored. We propose Doc2Harness, a two-stage benchmark that evaluates long-horizon harness engineering directly. In Stage 1, a build model operating inside a fixed builder harness receives an interface-only contract skeleton and a development document that consolidates behavior across twelve frontier harnesses, and then constructs a complete candidate harness in an isolated container. In Stage 2, the frozen candidate harness runs in containers separate from the construction environment, one per test case, and is driven end to end by a scripted mock model. We score each test case using four observable channels, namely the requests sent to the model, the files on disk, the process exit code, and the command output; positive controls rule out vacuous passes. Across nineteen frontier models, each evaluated with three independent builds on 328 test cases, GPT-6 Astra achieves the highest pass rate at 53.05%, while the weakest model reaches 27.44%, a gap of roughly twenty-six percentage points. Even the strongest model fails nearly half of the test cases, and failures cluster around how cross-cutting functionality is split across modules. To our knowledge, Doc2Harness provides the first deterministic benchmark for measuring long-horizon harness engineering.",
      "upvotes": 102,
      "github_stars": 61,
      "github_repo": "https://github.com/YuyaoGe/doc2harness",
      "project_page": "https://geyuyao.com/doc2harness/",
      "comments": 1,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2610.20344",
      "arxiv_url": "https://arxiv.org/abs/2610.20344",
      "title_ja": "Doc2Harness: コーディングエージェントの長期ハーネス構築ベンチマーク",
      "summary_ja": "仕様書からエージェントの実行環境（ハーネス）そのものを構築する能力を評価し、開発ツール自体の自動エンジニアリングを測定する。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 101,
      "github_stars": 174,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2: オープンワールドのための再帰的エージェント・ハーネシング",
      "summary_ja": "正解データのない未知のタスクに対しても、階層的な推論と再帰的な自己改善を通じて、最適なエージェント実行環境を動的に構築・進化させる。"
    },
    {
      "id": "2610.22341",
      "title": "3DCodeVerse: Exploring 3D Worlds as Code",
      "abstract": "We introduce 3DCodeVerse, a research ecosystem that enables coding agents to create editable and verifiable 3D content at scale. 3DCodeVerse comprises large-scale, high-quality datasets of executable 3D code, a coding harness for spatial reasoning and automated verification, and practical guidance for 3D coding. First, we construct 3DCodeVerse-2M, a large-scale curated dataset of standalone 3D executable code. We build this corpus by collecting open-source data, converting specialized representations, and generating new programs with coding agents. Each program is packaged with the source files and associated assets required for execution in its declared environment, along with available descriptions and verification records. Second, we develop the 3DCodeVerse Harness, a multi-agent directed acyclic graph framework for generating and refining 3D content. It uses execution checks, spatial measurements, and visual feedback to automatically evaluate and revise generated programs without human feedback during generation. Third, we conduct systematic empirical studies of 3D coding, establishing baselines with fine-tuned open models and deriving practical guidance through component-level analyses of our harness. Extensive experiments demonstrate that fine-tuning on our dataset significantly improves the 3D coding capabilities of open-source models. Notably, our 3DCodeVerse harness achieves a 90% win rate against Claude Design (3D Object) in pairwise human evaluations, when both are utilized by Claude Opus 5.5.",
      "upvotes": 99,
      "github_stars": 40,
      "github_repo": "https://github.com/gaoypeng/3dcodeverse",
      "project_page": "https://3dcodeverse.com/",
      "comments": 1,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2610.22341",
      "arxiv_url": "https://arxiv.org/abs/2610.22341",
      "title_ja": "3DCodeVerse: コードとしての3D世界の探索",
      "summary_ja": "200万件規模の実行可能な3D生成コードデータセットと、空間推論・自動検証用の環境を整備し、コードによる3Dコンテンツ作成を支援するエコシステム。"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "abstract": "A robot needs a world model that predicts how its actions will change the scene and a policy that chooses those actions. Models are usually built and evaluated for only one of these roles, and every robot records its actions in its own format. We ask whether one robot world model can serve both roles across different bodies, and what makes this work. We present GreenWAM, a world foundation model for robotics, together with the recipe that produces it: (1) a shared anatomical action space that describes 20 robot families, from bimanual arms to dexterous humanoids, in common joint coordinates; (2) joint training on these families in visual, action-conditioned and world-action modes; and (3) policies that split an action expert off the generator. As a world model, GreenWAM attains top-tier trajectory, depth and 3D accuracy on WorldArena 1.0, ahead of every world-action model and video generator in our comparison. As a policy, it scores among the top entries of the RoboTwin 2.0 leaderboard, reaches the highest zero-shot LIBERO-plus success among the compared methods and is competitive with dedicated vision-language-action and world-action policies on CALVIN and LIBERO. We further adapt GreenWAM to a real humanoid, where it succeeds more often than policies adapted from π_{0.5} and from Cosmos 3 Edge, and distill it into a single-step policy for real-time control. Controlled experiments yield three findings: robot specialization improves world prediction and control together; an action expert helps when split off at the start of adaptation; and keeping world-model modes during policy adaptation preserves robustness to scene changes.",
      "upvotes": 98,
      "github_stars": 5,
      "github_repo": "https://github.com/greenvla/GreenWAM",
      "project_page": "https://greenvla.github.io/GreenWAM/",
      "comments": 3,
      "org": "Sber Robotics Center",
      "url": "https://huggingface.co/papers/2610.18774",
      "arxiv_url": "https://arxiv.org/abs/2610.18774",
      "title_ja": "GreenWAM: ロボティクスのための世界基盤モデル",
      "summary_ja": "共通の解剖学的行動空間を定義し、20種類以上のロボット種を跨いで視覚的予測と行動決定の両方を一貫して行える汎用的な世界モデルを提案。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "OT-RED Merges Distributed AI Models Across Hospitals With One Upload",
      "summary": "A one-shot optimal transport method aggregates independently trained mixture-of-experts models into a single global estimator without pooling raw data.",
      "url": "https://alphasignal.ai/news/ot-red-merges-distributed-ai-models-across-hospitals-with-one-upload",
      "published": "2026-10-17T09:01:08+09:00",
      "title_ja": "OT-RED：1回のアプロードで病院間の分散型AIモデルを統合",
      "summary_ja": "Mixture-of-Expertsモデルを生データ共有なしで単一の推定器に統合する手法。"
    },
    {
      "lab": "AlphaSignal",
      "title": "xAI's Grok Bot Runs Tasks 3x Faster and Trades Stocks on Your Behalf",
      "summary": "Grok Bot ships a speed and polish pass, now runs computer tasks 3x faster, reads X Chat, and opens its connector marketplace to third parties.",
      "url": "https://alphasignal.ai/news/xai-s-grok-bot-runs-tasks-3x-faster-and-trades-stocks-on-your-behalf",
      "published": "2026-10-17T04:55:28+09:00",
      "title_ja": "xAIのGrok Botが3倍高速化、ユーザーに代わって株取引も可能に",
      "summary_ja": "処理速度が3倍に向上。Xのチャット閲覧やサードパーティ向けコネクタの開放に対応。"
    },
    {
      "lab": "OpenAI",
      "title": "How Itaú is building generative AI for its entire customer base",
      "summary": "With ia.i, a conversational interface, and the IARA governance platform, Itaú is applying its AI First strategy to customers and employees — in one of Brazil’s most regulated sectors.",
      "url": "https://openai.com/index/itau-generative-ai",
      "published": "2026-10-17T04:00:00+09:00",
      "title_ja": "ブラジル大手銀Itaúによる全顧客向け生成AIの構築事例",
      "summary_ja": "規制の厳しい金融分野で、対話型UIと統制プラットフォームによりAI戦略を展開。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "生物学的現実にAIエージェントを接地：自律型ウェットラボの構成要素",
      "summary_ja": "AIエージェントを生物学的現実に適応させ、自律的なウェットラボ構築の基盤とする試み。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Mythos 5 Cuts Quantum Circuit Gates by 17x",
      "summary": "Anthropic's STEM Fellows gave Claude Mythos 5 plain-language briefs for eight quantum circuits, and it beat the best published designs, sometimes by over 10x.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-mythos-5-cuts-quantum-circuit-gates-by-17x",
      "published": "2026-10-17T02:47:58+09:00",
      "title_ja": "AnthropicのClaude Mythos 5、量子回路のゲート数を1/17に削減",
      "summary_ja": "自然言語の指示から量子回路を設計し、既存の設計を大幅に上回る効率化を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Cite Pretrain Teaches AI to Remember Sources Without Searching the Web",
      "summary": "A new training recipe called Active Indexing teaches LLMs to cite the documents they learned from, no retriever required at inference time.",
      "url": "https://alphasignal.ai/news/cite-pretrain-teaches-ai-to-remember-sources-without-searching-the-web",
      "published": "2026-10-16T21:00:30+09:00",
      "title_ja": "Cite Pretrain：ウェブ検索なしで情報源を記憶するAI学習法",
      "summary_ja": "推論時の検索を使わず、学習に使った文書を自律的に引用可能にする新しい訓練手法。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Open Turkish Speech Model wav2vec2-xls-r Quietly Hits 900,000 Downloads",
      "summary": "A community-fine-tuned Turkish speech recognition model built on Meta's XLS-R backbone has quietly crossed 893K downloads on Hugging Face.",
      "url": "https://alphasignal.ai/news/open-turkish-speech-model-wav2vec2-xls-r-quietly-hits-900-000-downloads",
      "published": "2026-10-16T18:29:37+09:00",
      "title_ja": "トルコ語音声モデル「wav2vec2-xls-r」のダウンロード数が90万回に到達",
      "summary_ja": "MetaのXLS-Rを基盤に構築されたトルコ語音声認識モデルがコミュニティで普及。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Scotland's EV Charging Gap Is About Income, Not Driveways",
      "summary": "A causal inference study on Scottish households shows income, not driveways, is the real gatekeeper to EV adoption, with standard models overstating the parking effect.",
      "url": "https://alphasignal.ai/news/scotland-s-ev-charging-gap-is-about-income-not-driveways",
      "published": "2026-10-16T15:00:16+09:00",
      "title_ja": "スコットランドのEV普及の壁は車庫ではなく所得の差",
      "summary_ja": "因果推論による調査で、EV導入の決定打が駐車場環境ではなく収入であると判明。"
    },
    {
      "lab": "Hugging Face",
      "title": "Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining",
      "published": "2026-10-16T10:44:47+09:00",
      "title_ja": "インド諸語の事前学習スケーリング：2.8兆トークンと公開データ生成パイプライン",
      "summary_ja": "膨大なトークン量とデータ生成の仕組みを活用し、インド諸語のAI学習を加速。"
    },
    {
      "lab": "OpenAI",
      "title": "Stack Overflow for Agents triples signups with ChatGPT plugin",
      "summary": "Two engineers shipped Stack Overflow for Agents in a few weeks with Codex, and its ChatGPT plugin helped drive up to 10× growth in agent creation.",
      "url": "https://openai.com/index/stack-overflow-chatgpt-plugin",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Stack Overflow for AgentsがChatGPTプラグインで登録者3倍増",
      "summary_ja": "Codexを用いて短期間で開発され、エージェント作成数の10倍成長に貢献。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Beam: a 501B open model you can own, customize, and scale",
      "summary": "",
      "url": "https://huggingface.co/blog/reflection-beam",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Beam：所有・カスタマイズ・拡張が可能な501Bオープンモデルが登場",
      "summary_ja": "ユーザー自身が所有し、用途に合わせて自由に拡張できる5,010億パラメータのモデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
      "published": "2026-10-16T05:34:01+09:00",
      "title_ja": "Granite Switch 4.1：チャット・意思決定・音声を1つのエンドポイントで",
      "summary_ja": "単一のインターフェースから対話、論理的決定、音声処理の各機能を提供。"
    },
    {
      "lab": "OpenAI",
      "title": "Bringing GPT-Rosalind to academic research labs",
      "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
      "url": "https://openai.com/index/introducing-the-rosalind-academic-plan",
      "published": "2026-10-16T04:00:00+09:00",
      "title_ja": "GPT-Rosalindを学術研究室へ導入",
      "summary_ja": "生命科学研究を支援するため、適格な研究室へGPT-Rosalindへのアクセスを提供。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる新規抗菌ペプチド探索の加速",
      "summary_ja": "科学用Google Antigravityを活用し、新しい抗菌ペプチドの発見効率を向上。"
    },
    {
      "lab": "OpenAI",
      "title": "Teaching students to think and learn through questions",
      "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
      "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
      "published": "2026-10-15T22:00:00+09:00",
      "title_ja": "問いかけを通じて生徒の思考と学習を促す教育支援",
      "summary_ja": "教師が能動的な段階的学習をサポートするためのAI機能と教育者向けツールを提供。"
    },
    {
      "lab": "OpenAI",
      "title": "Sullivan & Cromwell brings legal expertise into agreement review",
      "summary": "In collaboration with OpenAI, Sullivan & Cromwell developed Agreement Analyzer, an AI tool for identifying issues in a draft agreement.",
      "url": "https://openai.com/index/sullivan-cromwell",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Sullivan & Cromwellが契約書レビューに法的知見を導入",
      "summary_ja": "OpenAIとの提携で、契約書案の問題点を特定するAI「Agreement Analyzer」を開発。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "MLXとRDMAを用いたMac Studio上でのLLMローカル分散推論",
      "summary_ja": "Appleシリコンの統合メモリを活かし、非公開環境で最新AIモデルの推論や微調整が可能。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントへ",
      "summary_ja": "推論を自由生成ではなく候補からの選択肢制にすることで、推論コストを抑え精度を向上。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャのスケーリング調査",
      "summary_ja": "LLMが先に抽象的なスタブを生成してツールを検索する「PtR」手法の有効性を検証。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Muse Spark Open: open-weight frontier multimodal mixture-of-experts model from Meta",
      "summary": "",
      "url": "https://huggingface.co/blog/meta-muse-spark-open",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Metaから公開重みの最先端マルチモーダル混合専門家モデル「Muse Spark Open」が登場",
      "summary_ja": "Metaが開発した、高い性能を持つオープンなマルチモーダル混合専門家（MoE）モデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome FLUX.3 Image Klein in Diffusers",
      "summary": "",
      "url": "https://huggingface.co/blog/flux-3",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Diffusersに画像生成モデル「FLUX.3 Image Klein」が追加",
      "summary_ja": "ライブラリ「Diffusers」にて、最新のFLUX.3画像生成モデルが利用可能に。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球規模の課題に挑む「Earth AI」地理空間エージェントの活用",
      "summary_ja": "地理空間データを活用するAIエージェントにより、地球上の重大な問題解決を目指す。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewを用いた技術文書の解析",
      "summary_ja": "Deep Reviewを活用して、複雑な技術文書を詳細に分析する手法。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創造性を増幅する10の方法",
      "summary_ja": "AIを通じて人間の独創性や能力をさらに引き出すための10の指針。"
    },
    {
      "lab": "Hugging Face",
      "title": "HiRO-ACEv2: Simulating extreme weather at 3 km resolution for a fraction of the cost",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/hiro-acev2",
      "published": "2026-10-15T01:12:42+09:00",
      "title_ja": "HiRO-ACEv2：低コストで3km解像度の異常気象シミュレーションを実現",
      "summary_ja": "従来よりも大幅に低いコストで、高精細な極端気象の予測シミュレーションを可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "Amp puts AI agents to work beyond code with OpenAI models",
      "summary": "See how Amp pushes the frontier of what agents can do with GPT-6 Astra, Ultrafast, GPT-Live-1, and Sign in with ChatGPT.",
      "url": "https://openai.com/index/amp-beyond-coding",
      "published": "2026-10-14T21:00:00+09:00",
      "title_ja": "AmpがOpenAIモデルを活用しコード生成を超えたエージェントを構築",
      "summary_ja": "GPT-6 Astra等の最新モデルを使い、多様な業務を遂行するエージェントの境界を拡張。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用の微調整モデルを開発",
      "summary_ja": "クラウドへのデータ流出なしに、端末上の軽量モデルでチャット内の詐欺を阻止する。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルを用いた言語切り替え（コードスイッチング）の検出",
      "summary_ja": "テキスト変換なしで音声から直接、複数言語が混在する発話を特定する軽量な手法。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モーダル・マスク拡散モデルの設計空間",
      "summary_ja": "テキスト、画像、音声を統合して一から学習した初の3モーダル拡散モデルを提案。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "Gemini 4 Argonの開発において、安全性と社会的責任を優先するための取り組み。"
    }
  ]
};
