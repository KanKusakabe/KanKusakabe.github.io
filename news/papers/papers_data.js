window.papersData = {
  "updated_at": "2026-10-03 09:59 JST",
  "arxiv": [
    {
      "id": "2610.00321",
      "title": "CAST: Cost-Aware Speculative Trees from One-Pass Block Drafters",
      "url": "https://arxiv.org/abs/2610.00321",
      "pdf": "https://arxiv.org/pdf/2610.00321",
      "authors": [
        "Jungseob Lee",
        "Sugyeong Eo"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "28 pages, 7 figures, 17 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "CAST is faster than the standard chain in all eight settings, by up to 43%.",
      "signals": [],
      "headline": "CAST: 計算コストと検証時間のトレードオフを最適化し推論を最大43%高速化する木構造投機的デコーディング",
      "what": "投機的デコーディングにおいて、Block Drafterが一度にスコアリングした候補を破棄せず木構造に配置して一括検証する手法です。各環境のレイテンシを動的に測定し、検証にかかる追加コストが期待される利得を上回らない範囲で木の幅を適応的に決定します。",
      "enables": "標準的なチェイン方式と比較して、予測された木幅で最大43%の高速化を実現しました。また、カーネルの境界で検証コストが急増するような特定のデプロイ環境においても、20%の高速化を達成しています。",
      "why_it_matters": "モデルの重みやデコーディングルールを変更せず、デプロイ環境に合わせて推論効率を最大化できるため、実用的な実装が容易です。",
      "tags": [
        "LLM",
        "推論加速",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.00586",
      "title": "Right In-Place (RiP) Convolution: A Simple, General, and Near-Optimal Strategy for Memory-Efficient CNN Inference",
      "url": "https://arxiv.org/abs/2610.00586",
      "pdf": "https://arxiv.org/pdf/2610.00586",
      "authors": [
        "Opegbemi Matthias Busoye",
        "Tolulope Matthew Busoye",
        "Eghonghon-aye Eigbe"
      ],
      "categories": [
        "cs.LG",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "Extended version of a paper accepted at the NeurIPS 2026 Workshop on Global South in AI",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "cuts peak activation memory across eleven MCUNet models by 12.5 to 33.3%",
      "signals": [],
      "headline": "RiP Convolution: マイコンの限られたメモリでCNN推論を実現する高効率なインプレイス畳み込み",
      "what": "CNNの推論において、入力を右詰め（Right-aligned）で読み出し出力を左詰め（Left-aligned）で書き込むことで、メモリ消費を最小化するインプレイス計算手法です。任意のストライド、ダイレーション、パディングに対応し、データの破損を防ぐための最小安全ギャップをO(1)で算出します。",
      "enables": "デュアルバッファリングと比較して平均24.8%のメモリを削減し、Raspberry Pi Pico 1などのメモリ制約が厳しい環境で動作可能なモデル数を拡大しました。演算サイクル数を変えず、ビット単位で同一の出力を維持しています。",
      "why_it_matters": "従来のインプレイス手法に存在したメモリ不足によるデータ破損や、特定のカーネル形状への依存という課題を解消し、組み込みAIのメモリ効率を大幅に高めています。",
      "tags": [
        "CNN",
        "エッジAI",
        "最適化"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01759",
      "title": "PhysDEM: Physics-Defined Energy-Matching Diffusion for Spatiotemporal Field Generation under Scarce Measurements",
      "url": "https://arxiv.org/abs/2610.01759",
      "pdf": "https://arxiv.org/pdf/2610.01759",
      "authors": [
        "Zhenyu Liang",
        "Yining Huang",
        "Yubo Zhao",
        "Jack C. P. Cheng"
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
        "cap",
        "new"
      ],
      "star_quote": "PhysDEM is the first physics-defined diffusion model enabling amortized spatiotemporal field inference without preassembled full-field datasets.",
      "signals": [],
      "headline": "PhysDEM: 物理法則と疎な観測データのみで時空間物理場を生成する拡散モデルフレームワーク",
      "what": "完全なデータセットがない状況下で、支配方程式（PDE）と断片的な観測データから時空間の物理場を生成する拡散モデルです。PDEの残差エネルギーを利用してターゲット分布を構築し、ノイズ除去をエネルギー誘導型の平均補正学習として定式化しています。",
      "enables": "事前構築されたフルフィールドデータセットなしで、複数の妥当な物理場の一貫した復元と効率的なサンプリングを可能にしました。",
      "why_it_matters": "データ収集が困難な物理現象のシミュレーションにおいて、物理法則を直接モデルの生成プロセスに組み込むことで、限られた観測から高精度な推論を実現しています。",
      "tags": [
        "拡散モデル",
        "科学計算",
        "物理AI"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2609.39658",
      "title": "Graph Residual Conjugate Diffusion: SNR-Equalized Heat Flow for Graph Signals",
      "url": "https://arxiv.org/abs/2609.39658",
      "pdf": "https://arxiv.org/pdf/2609.39658",
      "authors": [
        "Jinwei Li",
        "Daniel Tenbrinck"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "23 pages, 2 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "replaces the shared clock of graph heat diffusion with a mode-dependent clock that gives every graph-Fourier mode the same conditional SNR.",
      "signals": [],
      "headline": "GRCD：グラフFourierモードごとにノイズ除去速度を調整するSNR等準化グラフ拡散モデル",
      "what": "GRCDは、グラフ信号（道路交通量や気象データなど）の拡散モデルにおいて、グラフの周波数モードごとに異なる時間軸（クロック）を適用する手法です。全モードのSN比（SNR）を均一に保ちながら拡散・逆拡散を行うことで、学習とサンプリングの効率を向上させます。",
      "enables": "METR-LA交通データなどのベンチマークにおいて、既存の最良手法と比較してサンプリング速度を87%短縮しつつ、生成品質の指標（aMMD）を22〜36倍改善しました。わずか4回の関数評価（NFE）で高品質な生成が可能です。",
      "why_it_matters": "グラフ信号特有の周波数特性（非一様なエネルギー分布）を考慮した拡散プロセスを導入することで、グラフ構造データの生成モデルにおける計算コストと精度のトレードオフを劇的に改善しました。",
      "tags": [
        "拡散モデル",
        "グラフ信号処理",
        "時系列予測"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38201",
      "title": "TomasuLLM: Out-of-Order Speculative Execution for LLM Agents",
      "url": "https://arxiv.org/abs/2609.38201",
      "pdf": "https://arxiv.org/pdf/2609.38201",
      "authors": [
        "Jiangnan Yu",
        "Ceyu Xu",
        "Mengming Li",
        "Shiyu Huang",
        "Yiran Xia",
        "Jian Weng"
      ],
      "categories": [
        "cs.CL",
        "cs.OS",
        "cs.SE"
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
      "star_quote": "We present TomasuLLM, a runtime that executes agent tool calls out of trajectory order while preserving task-execution correctness.",
      "signals": [],
      "headline": "TomasuLLM：依存関係を追跡しツール呼び出しをアウトオブオーダー実行するLLMエージェント",
      "what": "TomasuLLMは、コンパイラやテストスイートなどの長時間実行されるツール呼び出しを、シーケンシャルな軌跡順を待たずに並行実行するランタイムです。Copy-on-Writeサンドボックスでの投機的実行、依存関係の追跡、および検証後のコミットという、アウトオブオーダープロセッサに似たメカニズムをエージェントに導入しています。",
      "enables": "SWE-bench Verifiedで1.31倍、Terminal-Bench 2.0で1.35倍の実行速度向上を達成し、長時間のツール呼び出しによるアイドル時間を大幅に削減しました。4,010件の監査記録において誤ったコミット（False Accepts）はゼロであり、タスク実行の正確性を維持しています。",
      "why_it_matters": "従来のエージェントは逐次的な実行に縛られ、ツール実行中に計算資源がアイドル状態になる課題がありました。本手法は、OSやアーキテクチャの知見をLLMエージェントの推論ワークフローに適用し、一貫性を保ちつつスループットを向上させる新しいアプローチを提示しています。",
      "tags": [
        "LLMエージェント",
        "投機的実行",
        "ソフトウェアエンジニアリング"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38714",
      "title": "Hard-Region Supervision: #1 on the Waymo Open Dataset 2D Video Panoptic Segmentation Leaderboard",
      "url": "https://arxiv.org/abs/2609.38714",
      "pdf": "https://arxiv.org/pdf/2609.38714",
      "authors": [
        "Jinghan Yang"
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
      "star_quote": "ranking first on all three metrics. It is 3.6 wSTQ points ahead of the second entry",
      "signals": [],
      "headline": "Hard-Region Supervision：困難な領域への補助的学習によりビデオパノプティックセグメンテーションで1位を獲得",
      "what": "Waymo Open Datasetのコンテストで優勝した本手法は、ベースラインモデル（DVIS++）が間違えやすい「困難な領域（Hard Region）」を特定し、そこに特化した補助的な予測ヘッドと損失関数を導入します。この補助ヘッドは訓練時にのみ使用され、推論時の計算コストやアーキテクチャを変更することなく精度を高めます。",
      "enables": "WaymoのテストセットにおいてwSTQ 0.3547、mIoU 0.6075を記録し、全指標で1位を獲得しました。ベースラインと比較してwSTQで2.4ポイントの改善、2位のチームに対して3.6ポイントの差をつけています。",
      "why_it_matters": "自動運転のような複雑なシーンにおけるピクセルレベルの認識精度を、モデルの構造を複雑化させるのではなく、学習プロセスの工夫（困難領域への監視）によって向上させた点が実用的です。",
      "tags": [
        "コンピュータビジョン",
        "セグメンテーション",
        "自動運転"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39116",
      "title": "GRC-Pose: Generation-Reconstruction Correspondence for Prior-Free 6D Object Pose Tracking",
      "url": "https://arxiv.org/abs/2609.39116",
      "pdf": "https://arxiv.org/pdf/2609.39116",
      "authors": [
        "Shiyang Liu",
        "Weiquan Lin",
        "Luping Xiao",
        "Jiadong Tang",
        "Yi Yang",
        "Yu Gao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "GRC-Pose achieves state-of-the-art Average Recall and motion retention on HOT3D, improving the latter by 58% over prior art.",
      "signals": [],
      "headline": "GRC-Pose：CADモデルやポーズ注釈なしで未知物体の6Dポーズを追跡する新フレームワーク",
      "what": "GRC-Poseは、事前知識のない未知物体の6Dポーズ追跡を、生成（SAM3DによるCAD生成）と再構成（世界座標系での証拠）の対応付け問題として定式化する手法です。GeoCorr-Matcherによる不確実性考慮の対応点予測と、後方確率に基づくメモリ管理により、遮蔽や視点変化に強い追跡を実現します。",
      "enables": "HOT3Dデータセットにおいて、運動保持（Motion Retention）を従来手法から58%改善し、SOTAの平均再現率を達成しました。また、YCBInEOATなどの古典的ベンチマークでも高い競争力を示しています。",
      "why_it_matters": "特定の物体専用のモデルを事前に用意することなく、ビデオから動的に物体の形状と位置関係を推定できるため、未知の環境で活動するロボットの視覚システムなどに適しています。",
      "tags": [
        "6Dポーズ推定",
        "物体追跡",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39338",
      "title": "Learning Beyond Full Imitation: Task-Preserving Knowledge Distillation",
      "url": "https://arxiv.org/abs/2609.39338",
      "pdf": "https://arxiv.org/pdf/2609.39338",
      "authors": [
        "Qianfeng Yuan",
        "Wenbing Tao"
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
      "star_quote": "our main result is an exact separation between full imitation and conditional learning.",
      "signals": [],
      "headline": "TPKD：正解ラベルへの判別能を損なわずに教師の知識を継承するタスク保存型知識蒸留",
      "what": "Task-Preserving Knowledge Distillation (TPKD)は、教師モデルの予測確率を完全に模倣するのではなく、生徒がすでに獲得している「正解クラスを他より高く評価する能力」を保護する手法です。ラベルに関する勾配を維持しつつ、不正解クラス間の相対的な関係（Conditional gradient）のみを補正して学習させます。",
      "enables": "CIFAR-100で88.05%、CLINC150で93.81%の精度に達し、標準的な知識蒸留をそれぞれ0.47、0.35ポイント上回りました。完全な模倣（KL最小化）が必ずしも最適ではないことを理論的・実験的に示しています。",
      "why_it_matters": "生徒モデルが教師を超え始める際に発生する「過度な模倣による性能低下」を回避できるため、より効率的で高性能なモデル圧縮や知識移転が可能になります。",
      "tags": [
        "知識蒸留",
        "機械学習理論",
        "モデル圧縮"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38926",
      "title": "PrecipJEPA: JEPA-Regularized Future-State Prediction with Motion-Source Rendering for Precipitation Nowcasting",
      "url": "https://arxiv.org/abs/2609.38926",
      "pdf": "https://arxiv.org/pdf/2609.38926",
      "authors": [
        "Yufeng Zhu",
        "Dan Niu",
        "Qiliang Wu",
        "Weiwei Huang",
        "Yixiao Liang",
        "Yongchao Feng"
      ],
      "categories": [
        "cs.MM",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "5 pages, 3 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "PrecipJEPA improves highest-threshold CSI by 118.6% and 35.1%, respectively, over the strongest baselines",
      "signals": [],
      "headline": "PrecipJEPA：JEPAによる履歴学習と運動・ソースレンダリングを組み合わせた降水ナウキャスティング",
      "what": "PrecipJEPAは、レーダーエコーの予測において、マスクされた過去の履歴から特徴を予測するJEPA（Joint-Embedding Predictive Architecture）による補助学習と、将来の運動（動き）とソース（強度変化）を分離して描画するPMSRを組み合わせたモデルです。",
      "enables": "SEVIRおよびMeteoNetデータセットにおいて、高強度降水の予測指標（CSI）を既存の最強ベースラインに対してそれぞれ118.6%および35.1%改善しました。3時間の予測期間全体にわたって高い精度を維持しています。",
      "why_it_matters": "単なる予測誤差の最小化だけでなく、履歴情報の自己教師あり学習を組み込むことで、局所的な強雨構造の維持と長期的な動きの予測の両立を実現しました。気象予測の実用的な精度向上に寄与します。",
      "tags": [
        "降水予測",
        "自己教師あり学習",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2610.01882",
      "title": "Flowing Faster to Coordinate: One-Step Online Multi-Agent Flow Policies",
      "url": "https://arxiv.org/abs/2610.01882",
      "pdf": "https://arxiv.org/pdf/2610.01882",
      "authors": [
        "Zhuoran Li",
        "Yunzhan Li",
        "Xun Wang",
        "Yihan Du",
        "Longbo Huang"
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
      "star_quote": "OMAF consistently achieves superior performance, with up to 3.4x higher returns and 10.5x sample efficiency improvement compared with baseline methods.",
      "signals": [],
      "headline": "OMAF: 反復サンプリングを排除したワンステップFlowモデルによる高効率なマルチエージェント学習",
      "what": "マルチエージェント強化学習（MARL）において、拡散モデルのような表現力を持ちつつ、1ステップで行動を生成できるFlowモデルベースのポリシです。Transformerを利用したFlow Policyと、効率的なパススコア・サロゲートにより、サンプルの効率性と協調行動のキャプチャを両立させます。",
      "enables": "既存手法と比較して、最大3.4倍のリターン向上と10.5倍のサンプル効率改善を達成し、オンライン環境でのリアルタイムな協調制御を可能にしました。",
      "why_it_matters": "生成ポリシの課題であった実行時の高い計算コストを大幅に削減し、複雑なマルチエージェント環境への実用的な適用を可能にしています。",
      "tags": [
        "強化学習",
        "マルチエージェント",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01955",
      "title": "Do Your Own Research: Learning to Forecast by Learning to Search",
      "url": "https://arxiv.org/abs/2610.01955",
      "pdf": "https://arxiv.org/pdf/2610.01955",
      "authors": [
        "Yusuf Afifi",
        "Artur Kiulian",
        "Anton Polishko",
        "Mykola Khandoga",
        "Hamudi Naanaa",
        "Alina Krasnobrizha"
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
        "new",
        "sota"
      ],
      "star_quote": "the trained policy also finishes ahead of every frontier model tested at evidence-based forecasting, including Claude Opus 4.5",
      "signals": [],
      "headline": "Do Your Own Research: 予測精度を高めるための「ウェブ検索と証拠収集」を自律的に学習するLLM",
      "what": "予測市場のデータを用いて、LLMが自らウェブ検索を行い、時間的な制約（カットオフ）を守りながら証拠を集めて未来を予測するエージェント学習手法です。Brierスコアを報酬としたGRPO（Group Relative Policy Optimization）により、情報の探索と精査のスキルを直接最適化します。",
      "enables": "学習後の3Bパラメータモデルは、Claude 4.5 Opusなどの最先端モデルを予測精度で上回り（Brier 0.254 vs 0.256）、推論コストを約20分の1に抑えました。",
      "why_it_matters": "単なる知識の保持ではなく、外部ツールを用いた調査プロセス自体を強化学習で改善することで、専門的な予測タスクにおいて極めて高い効率と精度を実現しています。",
      "tags": [
        "LLM",
        "強化学習",
        "AIエージェント"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2609.39233",
      "title": "MultiTable: A Faster Hash Table at any Physical Load Factor up to and Including One",
      "url": "https://arxiv.org/abs/2609.39233",
      "pdf": "https://arxiv.org/pdf/2609.39233",
      "authors": [
        "Maksym Petkus"
      ],
      "categories": [
        "cs.CR",
        "cs.DS",
        "math.CO",
        "math.PR"
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
      "star_quote": "a stable hash table both materially faster at equal physical memory and more flexible than the SwissTable in its Rust's hashbrown implementation.",
      "signals": [],
      "headline": "MultiTable：Rust標準のhashbrownを超える速度とメモリ効率を実現した新しいハッシュテーブル",
      "what": "MultiTableは、Rustの標準的なハッシュテーブル実装（SwissTable/hashbrown）を凌駕する性能を目指して開発された新しいデータ構造です。負荷率（Load Factor）が1に近づいても性能低下が緩やかであり、リハッシュなしでの拡張や、バケットサイズなどの詳細なパラメータ調整が可能です。",
      "enables": "平均的な構成でhashbrownの2.1倍のスループットを達成し、負のルックアップ（存在しないキーの探索）では最大3.2倍の高速化を実現しました。また、同じメモリ使用量で最大22%多くのキーを保持でき、メモリ効率も改善されています。",
      "why_it_matters": "低レイヤの基本データ構造における性能向上は、あらゆるソフトウェアの基盤を底上げする可能性があります。特に、メモリ制約が厳しくスループットが重視されるシステムプログラミングにおいて、Rustの標準実装に代わる強力な選択肢を提供します。",
      "tags": [
        "データ構造",
        "Rust",
        "最適化"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39914",
      "title": "Cluster Attention Neural Operators for Solving Parametric Partial Differential Equations",
      "url": "https://arxiv.org/abs/2609.39914",
      "pdf": "https://arxiv.org/pdf/2609.39914",
      "authors": [
        "Ming Zhong",
        "Antonio Colanera",
        "Gianluigi Rozza",
        "Zhenya Yan"
      ],
      "categories": [
        "math-ph",
        "cs.AI",
        "cs.LG",
        "math.DS",
        "math.MP"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "30 pages, 9 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "reformulates attention via a novel cross-attention mechanism that dynamically clusters queries",
      "signals": [],
      "headline": "CANO：フル解像度を維持しつつ計算効率を高めたクラスターアテンション神経演算子",
      "what": "偏微分方程式（PDE）の解を高速に求めるためのニューラルオペレータにおいて、クエリを動的にクラスター化しつつキーとバリューのフル解像度を維持する新しいクロスアテンション機構（CANO）を提案しました。これにより、計算コストを抑えながら空間情報の損失を防ぎ、グローバルな相互作用を捉えます。",
      "enables": "Navier-Stokes方程式、翼周りの流れ、塑性変形などの多様なPDEベンチマークでSOTAを達成しました。従来のTransolverなどの手法と比較して、不規則な形状や長期的な時間発展においても低い誤差を維持しています。",
      "why_it_matters": "物理シミュレーションをディープラーニングで代替する際、精度（空間解像度）と速度（アテンションの計算量）のジレンマを解消する有力なアーキテクチャとなります。",
      "tags": [
        "AI for Science",
        "偏微分方程式",
        "アテンション"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.40321",
      "title": "Exponential quantum speedup for $\\mathbb{F}_3^n$-Subset-Sum? Or, rigorous classical algorithms for Binary-Error LWE",
      "url": "https://arxiv.org/abs/2609.40321",
      "pdf": "https://arxiv.org/pdf/2609.40321",
      "authors": [
        "Robin Kothari",
        "Tony Metger",
        "Ryan O'Donnell",
        "Noah Shutty",
        "Kewen Wu"
      ],
      "categories": [
        "quant-ph",
        "cs.CR",
        "cs.DS"
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
        "new"
      ],
      "star_quote": "establish a full sample--time tradeoff that interpolates between exponential and polynomial runtime",
      "signals": [],
      "headline": "量子加速の可能性：F3上のベクトル部分集合和問題に対する新しい量子・古典アルゴリズム",
      "what": "有限体F3上のベクトル部分集合和問題（ゼロになる部分集合を見つける問題）の計算量を研究し、より少ない入力ベクトル数で動作する効率的な量子アルゴリズムを提案しました。また、その過程で暗号学的に重要な「バイナリエラーLWE（Learning-with-Errors）」に対する厳密な古典アルゴリズムも確立しました。",
      "enables": "特定のパラメータ領域（m = εn^2）において、古典的には指数時間が必要とされていた計算を多項式時間で解く量子アルゴリズムの可能性を示し、標数3のケースにおけるサンプル数と計算時間のトレードオフを明らかにしました。",
      "why_it_matters": "耐量子暗号の安全性評価や、量子コンピュータがどのような問題において指数関数的な優位性（量子超越性）を持ち得るかという、計算機科学の根幹に関わる知見を提供します。",
      "tags": [
        "量子コンピューティング",
        "暗号理論",
        "アルゴリズム"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2610.00436",
      "title": "Every Batch Is Its Own Validation Set: Leave-One-Out Gradient Matching for Online Data Selection in LLM Fine-Tuning",
      "url": "https://arxiv.org/abs/2610.00436",
      "pdf": "https://arxiv.org/pdf/2610.00436",
      "authors": [
        "Hongyu Chen",
        "Xinyi Luo",
        "Ming Zhao",
        "Lin Tang",
        "Zihan Xu",
        "Jing Li"
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
        "sota"
      ],
      "star_quote": "LOOM improves on full-batch training by 2.3 and 2.4 points on Llama-3.1-8B",
      "signals": [],
      "headline": "LOOM: 交差検証のように勾配のSN比でバッチを選択しLLM微調整の性能とノイズ耐性を向上",
      "what": "LLMのファインチューニングにおいて、各サンプルを他サンプルの勾配と照合するLeave-One-Out（LOO）型の勾配マッチングにより、学習に最も有用なデータを選択する手法です。勾配のGram行列から対角成分を除去することで、ノイズへの過適合を防ぎ、信号対雑音比（SNR）の高いデータに重み付けを行います。",
      "enables": "Llama-3.1-8BやQwen2.5-7Bにおいて、フルバッチ学習を2.3〜2.4ポイント上回り、注入されたラベルノイズの選択率をベースラインの5分の1以下に抑制しました。",
      "why_it_matters": "ホールドアウトデータ（検証セット）を必要とせず、通常のバックプロパゲーション中に計算可能なため、計算コストを抑えつつオンラインでデータ選択の最適化が可能です。",
      "tags": [
        "LLM",
        "ファインチューニング",
        "データ選択"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.00623",
      "title": "HAWK: Rethinking Multimodal Drafting for Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.00623",
      "pdf": "https://arxiv.org/pdf/2610.00623",
      "authors": [
        "Wenhan Yang",
        "Anirudh Rao",
        "Ashwin Chandra"
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
      "star_quote": "HAWK raises average acceptance length from 3.32 to 4.08 and speedup from 2.19x",
      "signals": [],
      "headline": "HAWK: マルチモーダル情報の圧縮とターゲット予測の変化を学習しLVLM推論を2.6倍高速化",
      "what": "大型視覚言語モデル（LVLM）向けの投機的デコーディング手法で、ターゲットモデルの中間層の隠れ状態を圧縮してDrafterに提供します。さらに、Drafter自身の提案によってターゲットモデルの予測がどう変化するかを考慮したトレーニングを行い、提案の受理率を高めています。",
      "enables": "SmolVLM-256Mを用いた検証で、既存手法のEAGLE-3を上回る2.60倍の高速化を達成し、平均受理トークン長を3.32から4.08へ改善しました。",
      "why_it_matters": "視覚情報の活用が難しかった従来の軽量Drafterの限界を、ターゲット層の動的な結合と圧縮表現の利用によって克服しています。",
      "tags": [
        "LVLM",
        "推論加速",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01210",
      "title": "EgoFound3R: End-to-End Egocentric Hand Reconstruction in World Space with Point-Wise Interaction Attributes",
      "url": "https://arxiv.org/abs/2610.01210",
      "pdf": "https://arxiv.org/pdf/2610.01210",
      "authors": [
        "Hongming Fu",
        "Jingcheng Shi",
        "Wenjia Wang",
        "Binhua Zuo",
        "Bo Zhao"
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
      "star_quote": "reduces the mean per-joint position error (MPJPE) by 43.2%, 22.4%, and 11.6%",
      "signals": [],
      "headline": "EgoFound3R: 一人称視点映像から手とシーンの3D形状と相互作用を同時に復元する統合モデル",
      "what": "単一のパスで世界座標系における手のジオメトリと、接触・距離・可視性などの点単位の相互作用属性を推定するエンドツーエンドモデルです。事前学習済みの幾何学的知見を転移させる構造化プロンプトと、推論コストを抑えるマルチレート設計を統合しています。",
      "enables": "従来手法と比較して手の関節位置エラー（MPJPE）を最大43.2%削減し、同時に約6倍の高いスループットを実現しました。",
      "why_it_matters": "これまで別々のモデルで行われていた手とシーンの推定、属性予測を一元化することで、大規模なアノテーション作業の効率と精度を大幅に向上させます。",
      "tags": [
        "3D復元",
        "コンピュータビジョン",
        "一人称視点"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01510",
      "title": "FedCKA: Representation-Guided Layer Personalization for Federated 3D Perception Across Driving Domains",
      "url": "https://arxiv.org/abs/2610.01510",
      "pdf": "https://arxiv.org/pdf/2610.01510",
      "authors": [
        "Jolle Verhoog",
        "Ali Burak \\\"Unal",
        "Holger Caesar"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 3 figures. Submitted to IEEE ICRA 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FedCKA outperforms established federated baselines, including FedBN, FedRep, and FedSelect, improving average NDS by 7 percentage points over the strongest baseline.",
      "signals": [],
      "headline": "FedCKA: 特徴の類似度に基づきモデルの各層を動的にパーソナライズする連合3D物体検出",
      "what": "自動運転車両などの異なるドメイン間（場所や天候の違い）で3D物体検出を行うための連合学習フレームワークです。Centered Kernel Alignment (CKA)を用いてクライアントのローカルモデルとグローバルモデルの層別類似度を計算し、共有すべき層と個人化すべき層を動的に決定します。",
      "enables": "nuScenesを用いたマルチドメイン評価において、既存の強力な連合学習手法を平均NDSで7ポイント上回る精度を達成しました。",
      "why_it_matters": "従来のような固定されたパーソナライズ比率ではなく、データの乖離に応じて各クライアントが最適な層を選択できるため、多様な環境下でのロバストな認識が可能です。",
      "tags": [
        "連合学習",
        "3D物体検出",
        "自動運転"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01513",
      "title": "Decision Titan: Test-Time Training for Long-Term Memory in Offline Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.01513",
      "pdf": "https://arxiv.org/pdf/2610.01513",
      "authors": [
        "Jude Waide",
        "Robert Lieck"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [
        "ICML (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "Accepted at ICML 2026 Workshop on Decision-Making from Offline Datasets to Online Adaptation: Black-Box Optimization to Reinforcement Learning",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "Decision Titan can learn long-term dependencies with ranges 20x longer than the context window",
      "signals": [],
      "headline": "Decision Titan: テスト時トレーニングにより文脈窓の20倍の長期依存関係を学習する意思決定モデル",
      "what": "オフライン強化学習において、エピソード記憶をニューラルネットワークのパラメータに保存するTest-Time Training (TTT) フレームワークをDecision Transformerに導入した手法です。学習時とテスト時の両方で勾配降下を行い、長い依存関係を動的に記憶します。",
      "enables": "トレーニングデータの1.7倍の長さに汎化し、コンテキストウィンドウの20倍という極めて長い依存関係を学習できることを実証しました。",
      "why_it_matters": "Attentionの計算量やRNNの勾配消失といった従来の長期記憶の課題を、テスト時の適応という新しいアプローチで解決しようとする試みです。",
      "tags": [
        "強化学習",
        "TTT",
        "長期記憶"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01649",
      "title": "CrossGMN: Graph Metanetworks for Cross-Architecture Weight-Space Transformations",
      "url": "https://arxiv.org/abs/2610.01649",
      "pdf": "https://arxiv.org/pdf/2610.01649",
      "authors": [
        "Adir Dayan",
        "Yam Eitan",
        "Haggai Maron"
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
      "star_quote": "Our key idea for addressing this mismatch is to reformulate cross-architecture operators with two inputs",
      "signals": [],
      "headline": "CrossGMN: 異なるアーキテクチャ間でのモデル重みの変換と蒸留を加速するグラフメタネットワーク",
      "what": "あるネットワークの重みを別のアーキテクチャの重みへ変換するGraph Metanetwork (GMN) です。ソースとターゲットのネットワークを統合して処理し、ニューロンの並べ替え（Permutation Symmetry）に対する不変性と等価性を維持しながら、重みの初期化や圧縮を支援します。",
      "enables": "画像分類などのタスクにおいて、知識蒸留のプロセスを最大8.89倍高速化し、再学習なしで異なるデータセットやモデル構成へ転移可能です。",
      "why_it_matters": "モデル圧縮やアップスケーリングなど、構造が変化する設定での重み空間操作を、対称性を考慮した数学的裏付けのもとで実現しています。",
      "tags": [
        "Weight-space",
        "モデル圧縮",
        "グラフニューラルネットワーク"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01781",
      "title": "Q-Learning for Reachability in MEC-Free MDPs",
      "url": "https://arxiv.org/abs/2610.01781",
      "pdf": "https://arxiv.org/pdf/2610.01781",
      "authors": [
        "Lu-Chin Chang",
        "Suguman Bansal"
      ],
      "categories": [
        "cs.AI",
        "cs.LG",
        "cs.LO"
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
      "star_quote": "Quasar, the first model-free algorithm with asymptotic guarantees for reachability on the fragment of MDPs free of non-terminal maximal end components",
      "signals": [],
      "headline": "Quasar: モデルフリーQ学習による到達可能性仕様の最適化とメモリ使用量の劇的な削減",
      "what": "マルコフ決定過程（MDP）における到達可能性（特定の状態に到達すること）を最適化するための、初の漸近収束保証付きモデルフリーQ学習アルゴリズムです。従来のモデルベース手法が必要とした遷移確率の推定を不要にし、TD誤差を用いた更新を行います。",
      "enables": "メモリ消費量を O(|S|^2|A|) から O(|S||A|) へと大幅に削減しつつ、従来手法より数桁少ないサンプル数で最適ポリシに収束することを確認しました。",
      "why_it_matters": "形式手法（到達可能性仕様）と強化学習の融合において、実用的なリソースでの大規模デプロイを可能にする重要なステップです。",
      "tags": [
        "強化学習",
        "Q学習",
        "到達可能性"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2609.38413",
      "title": "VidHarness: Evolving Agent Harnesses for Cost-Efficient Long Video Understanding",
      "url": "https://arxiv.org/abs/2609.38413",
      "pdf": "https://arxiv.org/pdf/2609.38413",
      "authors": [
        "Susan Liang",
        "Jianmin Wu",
        "Daxiang Dong"
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
      "star_quote": "VidHarness sets new state-of-the-art results on LongVideoBench, Video-MME, and Video-Holmes",
      "signals": [],
      "headline": "VidHarness：MCTSを用いて長時間ビデオ理解のためのエージェント構成を自動進化・最適化",
      "what": "VidHarnessは、VLMを制御する「Harness」プログラムのデザインを自動化するフレームワークです。モンテカルロ木探索（MCTS）と不確実性を考慮したマルチフィデリティ検証を組み合わせ、フィードバックに基づいて低コストかつ高精度なビデオ観察戦略を反復的に進化させます。",
      "enables": "LongVideoBenchやVideo-MMEなどのベンチマークでSOTAを記録し、最強の手動設計エージェントを最大11.2ポイント上回りました。また、均一サンプリングと比較して半分以下のフレーム数で、知識集約型のタスクにおいて高い汎化性能を示しています。",
      "why_it_matters": "従来のビデオエージェントは専門家による手動の試行錯誤で設計されていましたが、VidHarnessはこれを自動化し、予算に応じた最適なサンプリング戦略の構築を可能にしました。計算コストと精度のトレードオフを、進化計算と探索によって最適化する実用的な枠組みです。",
      "tags": [
        "ビデオ理解",
        "LLMエージェント",
        "MCTS"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38484",
      "title": "RetroGEF: Dynamic Graph Edit Flow for Single-Step Retrosynthesis",
      "url": "https://arxiv.org/abs/2609.38484",
      "pdf": "https://arxiv.org/pdf/2609.38484",
      "authors": [
        "Xiaozhuang Song",
        "Xuemin Chen",
        "Xinjian Zhao",
        "Yaoyao Xu",
        "Tianshu Yu"
      ],
      "categories": [
        "cs.LG",
        "q-bio.QM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Experiments on representative retrosynthesis benchmarks demonstrate that RetroGEF achieves state-of-the-art performance.",
      "signals": [],
      "headline": "RetroGEF：グラフの編集フローをモデル化しサイズ変更も同時に扱う一段階逆合成生成モデル",
      "what": "RetroGEFは、ターゲット分子から反応物を導き出す一段階逆合成のためのフローベース生成モデルです。分子グラフに対して原子の追加や結合の変更を同じ生成プロセス内で行い、グラフサイズの変動を固定サイズのキャンバスを使わずにモデル化します。",
      "enables": "規定の編集順序を必要とせず、生成プロセスを通じて複雑な分子変換を学習することで、代表的な逆合成ベンチマークにおいてSOTAの性能を達成しました。",
      "why_it_matters": "従来のグラフ変換モデルが直面していた「グラフサイズの動的な変更」という課題に対し、連続的なフローを用いた直接的なグラフ編集というアプローチで解決を試みています。創薬や材料設計における合成経路探索の精度向上に寄与します。",
      "tags": [
        "逆合成",
        "グラフ生成モデル",
        "創薬"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38812",
      "title": "Can Terminal Agents Trust Their Own Verification? Diagnosing and Improving Self-Verification",
      "url": "https://arxiv.org/abs/2609.38812",
      "pdf": "https://arxiv.org/pdf/2609.38812",
      "authors": [
        "Yingfeng Luo",
        "Shaowei Wei",
        "Daixin Wang",
        "Dingyang Lin",
        "Kaiyan Chang",
        "Weiqiao Shan"
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
      "star_codes": [
        "new"
      ],
      "star_quote": "we propose Student-Conditioned Verification Distillation (SCVD), which lets the student first produce a candidate solution and distills a stronger teacher's subsequent verification",
      "signals": [],
      "headline": "SCVD：ターミナル操作エージェントの自己検証能力を教師モデルから蒸留しエラー修復率を向上",
      "what": "ターミナルエージェントの自己検証における弱点が「検証の開始」ではなく「エラーの検出と修復」にあることを突き止め、Student-Conditioned Verification Distillation (SCVD)を提案しました。生徒モデルが生成した候補に対し、強力な教師モデルが行う検証と修復のプロセスを蒸留して学習させます。",
      "enables": "TerminalBench2.1において、ベースラインと比較してPass@1を9.74〜16.85ポイント向上させました。また、従来のフル軌跡蒸留で発生しがちだった、SWE-benchなどの未知ドメインにおける大幅な性能劣化を回避しています。",
      "why_it_matters": "エージェントが「自分で自分の間違いに気づき、直す」プロセスの信頼性を定量化し、それを効率的に強化する手法を確立しました。自律的なデバッグ能力が求められる対話型エージェントの信頼性向上に寄与します。",
      "tags": [
        "LLMエージェント",
        "知識蒸留",
        "自己検証"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38893",
      "title": "Learning Continuous Neural Representation of Stochastic Hybrid Systems",
      "url": "https://arxiv.org/abs/2609.38893",
      "pdf": "https://arxiv.org/pdf/2609.38893",
      "authors": [
        "Sangli Teng",
        "Hang Liu",
        "Koushil Sreenath"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
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
      "star_codes": [
        "new"
      ],
      "star_quote": "SHS can be approximated by an SDE in a higher-dimensional latent space where the sample paths are continuous. The key to this result is to encode different branches of the reset kernel",
      "signals": [],
      "headline": "確率的ハイブリッドシステムを連続的な潜在空間のSDEとして表現する学習手法",
      "what": "不連続なジャンプ（リセット）を含む確率的ハイブリッドシステム（SHS）を、高次元の潜在空間における連続的な確率微分方程式（SDE）として近似する手法を提案しました。異なるリセットの分岐を補助変数でエンコードし、トポロジカルな接着（Gluing）を行うことで、確率分布の進化をリセット項なしで記述します。",
      "enables": "モードのラベル付け、軌跡のセグメンテーション、イベントベースのシミュレーションを必要とせずに、単一の潜在SDEによって複雑なSHSの確率進化を再現することが可能になりました。",
      "why_it_matters": "物理現象や制御システムに見られる不連続な変化を含む動的システムを、深層学習で扱いやすい連続的な枠組みに変換できる理論的・実践的な進展です。",
      "tags": [
        "確率微分方程式",
        "潜在表現学習",
        "力学系"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39082",
      "title": "Shared Phase and Retention Control for Efficient Adaptive Spectral Recurrence",
      "url": "https://arxiv.org/abs/2609.39082",
      "pdf": "https://arxiv.org/pdf/2609.39082",
      "authors": [
        "Wentao Wang",
        "Hengyu Zhong",
        "Yunhan Jiang",
        "Jialiang An",
        "Meng Lu"
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
      "star_quote": "introduce Shared Phase and Retention Control for Efficient Adaptive Spectral Recurrence (SPARC). SPARC employs just two input-dependent scalar signals to coordinate memory",
      "signals": [],
      "headline": "SPARC：2つの共有信号でメモリ保持と位相回転を制御する高効率な適応型スペクトルリカレンス",
      "what": "SPARCは、線形・スペクトルリカレンスモデルにおいて、高次元のメモリ状態をわずか2つの入力依存のスカラー信号（PhaseとRetention）で動的に制御する手法です。各メモリモードに独立した制御を割り当てる代わりに信号を共有することで、制御コストをメモリ容量から切り離しています。",
      "enables": "Walker-Pタスクで9.09%の相対的リターン向上を達成し、NVIDIA Blackwell GPU上でのスキャン処理を従来のRG-LRUと比較して3.1倍〜4.7倍に加速しました。また、並列連想スキャンとリアルタイム回帰学習（RTRL）の両方をサポートします。",
      "why_it_matters": "Transformerの定数メモリ推論版として期待されるリカレントモデルにおいて、表現能力（適応性）と計算効率を高いレベルで両立させました。オンライン学習や長い文脈の処理における実用性が大幅に高まっています。",
      "tags": [
        "リカレントニューラルネットワーク",
        "効率的学習",
        "時系列データ"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38270",
      "title": "VirusCascade: Hijacking Collaborative Reflection in LLM-Powered Recommender Agents",
      "url": "https://arxiv.org/abs/2609.38270",
      "pdf": "https://arxiv.org/pdf/2609.38270",
      "authors": [
        "Yurong Hao",
        "Wen Zhou",
        "Guowei Guan",
        "Tiantong Wu",
        "Fuyao Zhang",
        "Wei Yang Bryan Lim"
      ],
      "categories": [
        "cs.CR",
        "cs.LG",
        "cs.MA"
      ],
      "venues": [
        "NDSS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by NDSS 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "VirusCascade consistently achieves state-of-the-art targeted exposure",
      "signals": [],
      "headline": "VirusCascade：マルチエージェント推薦システムにおける「対話による攻撃の増幅」の脆弱性を指摘",
      "what": "LLMを用いた自律エージェント型の推薦システム（LLM-ARS）における脆弱性を分析しました。単一のエージェントに注入された敵対的な「証拠」が、エージェント間の「協調的内省（Collaborative Reflection）」を通じて論理的な嗜好として正当化され、システム全体に伝播する「VirusCascade」攻撃を提案しています。",
      "enables": "4つの実世界データセットにおいて、ステルス性を保ちつつ特定のアイテムを標的にした露出（E@20）で0.384を達成し、既存の攻撃手法を0.185ポイント上回る強力なプロモーション攻撃が可能であることを示しました。",
      "why_it_matters": "エージェント間の再帰的な対話が、精度の向上だけでなく「攻撃の自己増幅」という新たなセキュリティリスクを生むことを明らかにし、将来の自律型推薦システムの設計に警鐘を鳴らしています。",
      "tags": [
        "推薦システム",
        "LLMエージェント",
        "セキュリティ"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38349",
      "title": "MILO: Automated Harness Discovery via Orchestrated Multi-Agent Evolution",
      "url": "https://arxiv.org/abs/2609.38349",
      "pdf": "https://arxiv.org/pdf/2609.38349",
      "authors": [
        "Prithwish Jana",
        "Mononito Goswami",
        "Hao Liu",
        "Xinyu Li",
        "Langlin Huang",
        "Zhehui Huang"
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
        "sota"
      ],
      "star_quote": "MILO-discovered harnesses outperform eight state-of-the-art harnesses",
      "signals": [],
      "headline": "MILO：マルチエージェント進化アルゴリズムによりエージェントの制御プログラムを自動最適化",
      "what": "MILOは、LLMエージェントの実行・環境操作を制御する「Harness（ハーネス）」のデザインを、複数のエージェント（島）を協調進化させることで自動発見するフレームワークです。失敗した試行を負の証拠として活用する履歴管理、ハーネス全体を書き換える変異エージェント、およびそれらを統括するオーケストレーターで構成されます。",
      "enables": "Terminal-Bench 2.1において、公式リーダーボード1位（83.8%）を上回る86.1%の解決率を達成しました。また、数学的未解決問題（Erdős最小オーバーラップなど）において、現在知られている最良の下界を更新することに成功しました。",
      "why_it_matters": "従来は人間が手動で設計していたエージェントの指示や制御の枠組みを、AI自身がメタ進化的に最適化できることを示しました。特に複雑な長期的タスクや科学的探索におけるエージェントの限界を押し広げます。",
      "tags": [
        "LLMエージェント",
        "進化計算",
        "自動最適化"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38864",
      "title": "AdaOcc: Adaptive 3D Occupancy Prediction for Embodied Tasks",
      "url": "https://arxiv.org/abs/2609.38864",
      "pdf": "https://arxiv.org/pdf/2609.38864",
      "authors": [
        "Jinglong Wang",
        "Yunjie Wang",
        "Zhiyang Zhang",
        "Jiawei He",
        "Ye Yuan",
        "Bo Qiu"
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
      "star_quote": "achieves a new state-of-the-art on Occ-ScanNet with considerable performance",
      "signals": [],
      "headline": "AdaOcc：計算予算やセンサ構成に柔軟に適応するエンボディドAI向け3D占有グリッド予測",
      "what": "ロボットや自動運転などのエンボディドAI向けに、疎なセマンティックポイントを用いて3D空間の占有状態を予測する手法です。入力センサ（RGBカメラ数、LiDAR、深度マップ）や、計算リソース（クエリ数、デコーダ層数）に合わせて動的にモデルの動作を調整できる適応型アーキテクチャを採用しています。",
      "enables": "Occ-ScanNetデータセットにおいてSOTAを更新しました。また、予測された点が有効な占有領域内に存在することを保証する「Containment loss」を導入し、軽量なモデルでも高い幾何学的精度を実現しました。",
      "why_it_matters": "デバイスの計算能力やカメラの故障、視点変更などの実運用上の変化に対して、単一のモデルで柔軟に対応できる実用性の高い3D認識モジュールを提供します。",
      "tags": [
        "3D認識",
        "エンボディドAI",
        "自動運転"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38955",
      "title": "Loop-Free Inverse Reinforcement Learning via Sequential Value Recovery with Q-Score Matching",
      "url": "https://arxiv.org/abs/2609.38955",
      "pdf": "https://arxiv.org/pdf/2609.38955",
      "authors": [
        "Yang chen",
        "Yitan Zhang",
        "Michael Witbrock",
        "Shuyue Hu"
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
      "comment": "Accepted to NeurIPS 2026. 20 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Loop-Free Inverse Reinforcement Learning (LFIRL), a fully offline algorithm",
      "signals": [],
      "headline": "LFIRL：方策最適化のループを排除し拡散モデルを活用した高速・安定な逆強化学習",
      "what": "逆強化学習（IRL）における「報酬学習と方策最適化の繰り返し」を、拡散モデルを活用することで完全に排除した手法です。拡散方策が持つ「Q関数の行動勾配構造」を利用し、報酬学習を連続的な価値回復（Value Recovery）問題として定式化することで、オフラインで逐次的に報酬を抽出します。",
      "enables": "MazeやPush-Tなどのベンチマークにおいて、最速のベースラインと比較して2〜3倍の学習速度向上を達成しました。同時に、報酬の推定精度においてもSOTAと同等以上の性能を維持しています。",
      "why_it_matters": "IRLの最大のボトルネックであった計算負荷と不安定な交互最適化（ループ）を解消した点が革新的です。より大規模で複雑なエキスパートデモンストレーションからの報酬学習を容易にします。",
      "tags": [
        "逆強化学習",
        "拡散モデル",
        "強化学習"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39068",
      "title": "SparseEngine: Sparse-First Inference Engine",
      "url": "https://arxiv.org/abs/2609.39068",
      "pdf": "https://arxiv.org/pdf/2609.39068",
      "authors": [
        "Jitai Hao",
        "Quansheng Gu",
        "Qiang Huang",
        "Jun Yu"
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
      "star_quote": "SparseEngine, a ground-up, sparse-first inference engine",
      "signals": [],
      "headline": "SparseEngine：疎な注意機構を第一級市民として扱う高速なLLM推論エンジン",
      "what": "長文脈処理でのKVキャッシュ肥大化を解決するため、疎な注意機構（Sparse Attention）をネイティブにサポートする推論エンジンです。各手法がKV表現や計算を制御できる共通インターフェースを備え、Chain Cache（履歴からの再開）やPrefix-Cache Pruning（特定領域の削除）などの高度な管理機能を備えています。",
      "enables": "vLLMと比較して、同じ並列数で2.5倍以上のデコード速度、KVエビクション適用時には10倍以上のスループット向上を達成しました。15種類の主要なスパース化手法をサポートし、エージェントベンチマークでも2倍以上の高速化を実現しています。",
      "why_it_matters": "従来は特定の手法に依存していたスパース推論を、汎用的かつ高効率なサービング基盤として実装しました。長文脈を扱うエージェントの実用化におけるメモリと計算のコストを大幅に引き下げます。",
      "tags": [
        "LLM推論",
        "効率化",
        "KVキャッシュ"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39137",
      "title": "ID Balancing: Stable Training of Extremely Sparse MoE via PID-Based Load Control",
      "url": "https://arxiv.org/abs/2609.39137",
      "pdf": "https://arxiv.org/pdf/2609.39137",
      "authors": [
        "Peng Jin",
        "Zihan Qiu",
        "Zekun Wang",
        "Bo Zheng",
        "Yang Xu",
        "Tian Xie"
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
      "star_quote": "Building on this control perspective, we propose ID Balancing, an Integral-Derivative controller.",
      "signals": [],
      "headline": "ID Balancing：PID制御の理論に基づき超大規模・超疎なMoEモデルの学習を安定化",
      "what": "混合エキスパート（MoE）モデルにおけるエキスパート間の負荷不均衡を解消するため、制御理論のPID（比例・積分・微分）コントローラを導入した手法です。従来の補助損失なし手法を積分/比例制御として統合し、誤差の大きさに応じた積分項のスケーリングと、悪化時に作動する微分項により強力なバランス調整を行います。",
      "enables": "768エキスパート、Top-3ルーティングという極めて疎な設定において、既存の最良手法と比較してエキスパート負荷の最大乖離（MaxVio）を50%以上削減しました。パラメータ数を18.9Bから69.9Bにスケールさせても、不均衡を極めて低く抑えられます。",
      "why_it_matters": "MoEの疎度を高めると学習が不安定になるというスケーリングの壁を、古典的かつ堅牢な制御理論で解決しました。より巨大で効率的なMoEモデルを安定して訓練するための重要な技術です。",
      "tags": [
        "MoE",
        "LLM",
        "学習の安定化"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39271",
      "title": "RW-Flow: One-Step Generation on Compact Manifolds via Wasserstein Gradient Flows",
      "url": "https://arxiv.org/abs/2609.39271",
      "pdf": "https://arxiv.org/pdf/2609.39271",
      "authors": [
        "Ualibyek Nurgulan",
        "Seungwoo Yoo",
        "Prin Phunyaphibarn",
        "Minhyuk Sung"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "ICLR"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, ICLR, 2 figures, 11 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "we introduce RW-Flow, a theoretically grounded framework for learning one-step generative models on compact manifolds via Wasserstein gradient flows.",
      "signals": [],
      "headline": "RW-Flow：Wasserstein勾配流に基づき多様体上のデータを1ステップで生成する新手法",
      "what": "地球上の座標やタンパク質のねじれ角など、多様体（Manifold）上のデータを生成するための、Wasserstein勾配流に基づいた1ステップ生成モデルです。シンクホーン・ダイバージェンス誘導の速度場がターゲット分布に一致するための必要十分条件を数学的に示し、識別可能なコスト関数を設計する原則を確立しました。",
      "enables": "地球物理イベントやRNAの構造予測などのベンチマークにおいて、既存の多様体向け1ステップ生成手法をほぼすべての設定で上回る精度を記録しました。拡散モデルのような何百回もの逐次評価を必要とせず、高速なサンプリングが可能です。",
      "why_it_matters": "非ユークリッド空間における高速生成モデルの理論的基盤を強化し、科学データや地理データにおける実用的な生成モデルの構築を可能にしました。",
      "tags": [
        "生成モデル",
        "多様体学習",
        "最適輸送"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39341",
      "title": "Understanding as No-Arbitrage: Bounded Dutch Books as a Definition and Training Objective for Language Models",
      "url": "https://arxiv.org/abs/2609.39341",
      "pdf": "https://arxiv.org/pdf/2609.39341",
      "authors": [
        "Daniel Dragonevskiy"
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
      "comment": "18 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We make this question measurable by defining \"understanding\" through the lens of no-arbitrage.",
      "signals": [],
      "headline": "Arbitr：論理的整合性を「裁定取引」と捉えて学習しLLMの自己矛盾と過信を抑制するフレームワーク",
      "what": "LLMの「理解」を、論理的に関連する主張間で矛盾した確率を提示し利益（利益確定）を許さない「ノーアービトラージ」の原則で定義しました。敵対的なトレーダーがモデルの論理的矛盾を検出しペナルティを与える「Arbitr」フレームワークを導入し、次トークン予測の最適化によって生じる不整合を修正します。",
      "enables": "Qwen2.5やPhi-3.5において、タスクの精度を維持したまま論理的矛盾（搾取可能性）を数桁単位で削減しました。この効果は未学習の論理パターンや異なるモデルファミリーにも転移することを確認しています。",
      "why_it_matters": "「モデルは確率的にトークンを並べているだけで、内容を理解していない」という批判に対し、論理的整合性を測定・改善可能な客観的指標（Dutch Book）として定式化した点が非常にユニークです。",
      "tags": [
        "LLM",
        "信頼性",
        "論理推論"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.40051",
      "title": "Proximal Balancing for Causal Effect Estimation under Unmeasured Confounding",
      "url": "https://arxiv.org/abs/2609.40051",
      "pdf": "https://arxiv.org/pdf/2609.40051",
      "authors": [
        "Yonghan Jung"
      ],
      "categories": [
        "stat.ML",
        "cs.LG",
        "stat.ME"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "50 pages. Code: https://github.com/CausalDataScience/proximal-balancing",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "To address these challenges, we introduce proximal balancing. It carries the classical idea of covariate balancing to confounders that are observed only through proxies",
      "signals": [],
      "headline": "PROBE：未観測の交絡因子をプロキシデータから直接調整し因果効果を推定する新手法",
      "what": "観測データにない未観測の交絡因子が存在する場合でも、プロキシ（代理）変数を用いて因果効果を推定する手法です。交絡因子の潜在変数を明示的に学習する代わりに、処置群と対照群を比較可能にする「低次元の要約統計量」をプロキシから直接学習する「Proximal Balancing」を提案しています。",
      "enables": "高次元のプロキシや画像データ、実世界の複雑なデータセットにおいて、逆問題の解法や潜在変数モデルを必要とせずに、バイアスの少ない因果効果推定が可能になりました。",
      "why_it_matters": "従来のプロキシ手法が抱えていた「逆問題の不安定さ」や「潜在変数モデルの不一致によるバイアス」という課題を回避できるため、医学や政策決定における因果推論の信頼性を高めます。",
      "tags": [
        "因果推論",
        "機械学習",
        "統計的推定"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.40127",
      "title": "Learning Functional Subspaces for Neural Network Compression",
      "url": "https://arxiv.org/abs/2609.40127",
      "pdf": "https://arxiv.org/pdf/2609.40127",
      "authors": [
        "Massimo Bini",
        "Anders Christensen",
        "Stephan Alaniz",
        "Judah Goldfeder",
        "Ole Winther",
        "Yann LeCun"
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
      "star_quote": "At -70% compression, LSP brings Llama-2-7B to 10.9 WikiText-2 perplexity and 42.2% mean zero-shot accuracy, versus 13.3 and 36.0% for the strongest baseline.",
      "signals": [],
      "headline": "LSP：ネットワーク全体の誤差伝播を考慮して学習する低ランク重み圧縮手法",
      "what": "Transformerなどの重み行列を低ランク分解する際、局所的な近似ではなく、ネットワーク全体の出力誤差（KLダイバージェンス）を最小化するように低ランク部分空間をエンドツーエンドで学習する手法です。事前学習済みの重みを固定したまま、直交プロジェクターのみを最適化します。",
      "enables": "Llama-2-7Bの70%圧縮において、最強のベースラインと比較してWikiText-2の困惑度（Perplexity）を13.3から10.9へ、ゼロショット精度を36.0%から42.2%へ大幅に改善しました。また、KVキャッシュのメモリ消費を最大13.5倍削減可能です。",
      "why_it_matters": "従来の局所的な圧縮手法が抱えていた、圧縮率を高めると層を追うごとに誤差が蓄積・増幅するという問題を、グローバルな最適化によって解決しました。モバイルデバイスなどでの大規模モデル運用に直結する技術です。",
      "tags": [
        "モデル圧縮",
        "低ランク近似",
        "Transformer"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.39679",
      "title": "SE-ADD: Self-Evolving Audio Deepfake Detection with Mistake-Driven Supervision",
      "url": "https://arxiv.org/abs/2609.39679",
      "pdf": "https://arxiv.org/pdf/2609.39679",
      "authors": [
        "Rong Wan",
        "Wei Xie",
        "Jiaxi Li",
        "Wenwu Wang",
        "Lu Yin",
        "Yiliao Song"
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
      "star_quote": "reducing the equal error rate (EER) from $36.72\\%$ to $7.52\\%$ for Qwen2-Audio",
      "signals": [],
      "headline": "SE-ADD：自らの「間違い」を教師として未知の偽造音声への適応能力を高める自己進化型検出器",
      "what": "音声ディープフェイク検出（ADD）において、モデル自身の誤分類を「どこを重点的に学習すべきか」のヒントとして活用する自己進化型フレームワークです。誤分類されたサンプルに対して、自己生成したフォレンジック（分析）手がかりを用いた追加の監視（Mistake-Driven Supervision）を行い、LoRAで逐次適応させます。",
      "enables": "未知の攻撃手法に対する等価誤差率（EER）を、Qwen2-Audioで36.72%から7.52%へ、MOSS-Audioで19.93%から3.97%へと劇的に減少させ、新しい攻撃に対する強力な汎化性能を示しました。",
      "why_it_matters": "攻撃手法が次々と進化するADD分野において、固定されたデータセットでの学習の限界を、自身の失敗から学ぶというアプローチで突破しようとしています。",
      "tags": [
        "ディープフェイク検出",
        "自己進化学習",
        "音声AI"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2610.01762",
      "title": "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction",
      "url": "https://arxiv.org/abs/2610.01762",
      "pdf": "https://arxiv.org/pdf/2610.01762",
      "authors": [
        "Xiangyu Zeng",
        "Yuandong Yang",
        "Zhiqiu Zhang",
        "Yuhan Zhu",
        "Xinhao Li",
        "Qingyi Si"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 146,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲146"
      ],
      "headline": "OneStreamer: 事実に基づいた動的な記憶生成によりリアルタイム応答性能を高める動画対話モデル",
      "what": "動画ストリーミングにおいて、詳細な説明（Caption）と要約を自発的に生成・蓄積することで、過去の視覚特徴を再処理せずに記憶として保持する手法です。Proactive Hierarchical Caption Memory (PHCM) により、時間軸に紐づいた詳細な事実をモデル自身が記録します。",
      "enables": "8つのベンチマークにおいて、他の動画対話手法を上回る最高精度を達成しました。過去のQA精度を向上させつつ、リアルタイムの認識性能も維持しています。",
      "why_it_matters": "計算コストの高い過去の全フレーム再処理を避けつつ、LLMが自ら「記憶すべきこと」を選択・記録することで、長時間の動画対話におけるスケーラビリティを確保しています。",
      "tags": [
        "マルチモーダル",
        "動画理解",
        "ストリーミング"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01415",
      "title": "Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States",
      "url": "https://arxiv.org/abs/2610.01415",
      "pdf": "https://arxiv.org/pdf/2610.01415",
      "authors": [
        "Yu Luo",
        "Jiamin Jiang",
        "Yimin Zuo",
        "Xidao Wen",
        "Rongchen Gao",
        "Yongqian Sun"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 69,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲69"
      ],
      "headline": "PoS: 明示的な「信念状態」の管理により複雑なタスクでの行き詰まりを防ぐLLMエージェント",
      "what": "エージェントが過去の履歴を保持するだけでなく、現在の世界の状態と未完了の要件を「明示的な信念（Belief）」として継続的に更新・検証する推論フレームワークです。タスクが進展していない「Belief Trapping」を検出し、そのパターンに応じた回復策を講じます。",
      "enables": "4つの主要なベンチマークにおいて、GPT-4oを含む3つのLLMバックボーン全てで最高性能を記録し、コンテキストの肥大化に対しても高い耐性を示しました。",
      "why_it_matters": "単なる履歴の圧縮ではなく、エージェントが自分の理解を明示的に自己修正することで、長時間の複雑なタスクにおける一貫性と成功率を向上させています。",
      "tags": [
        "AIエージェント",
        "LLM",
        "推論フレームワーク"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.02193",
      "title": "Hierarchical Continuous Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.02193",
      "pdf": "https://arxiv.org/pdf/2610.02193",
      "authors": [
        "Hui Ren",
        "Zihan Li",
        "Chang Liu",
        "Huidong Liu",
        "Alexander Schwing"
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
      "hf_upvotes": 69,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲69"
      ],
      "headline": "HC-DLM: 離散トークンと連続潜在空間を結合し構造的推論と生成性能を高めた階層型拡散言語モデル",
      "what": "トークン生成を連続的な潜在軌道（Latent Trajectory）と結びつけ、単一のノイズ除去プロセスとして定式化した言語モデルです。各ステップで潜在状態からトークンを読み出し、それを足場（Scaffold）として次の潜在状態を更新することで、統計的な依存関係を維持します。",
      "enables": "数独や数学パズルの正解率、および言語モデルのパープレキシティにおいて、従来の離散・連続拡散モデルを同等のパラメータ数で上回る性能を達成しました。",
      "why_it_matters": "並列デコード時のトークン間の独立性という拡散言語モデルの構造的弱点を、階層的な設計によって克服し、グローバルな制約が必要なタスクでの性能を改善しています。",
      "tags": [
        "拡散モデル",
        "自然言語処理",
        "推論"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.02162",
      "title": "World Observer: Joint Actor-Observer Generation for Persistent World Modeling",
      "url": "https://arxiv.org/abs/2610.02162",
      "pdf": "https://arxiv.org/pdf/2610.02162",
      "authors": [
        "Hyunwook Choi",
        "Dahyun Chung",
        "Hyunsung Kim",
        "Siyoon Jin",
        "Jinhyeok Choi",
        "Junyoung Seo"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "World Observer: 視野外に消えた物体の状態変化も持続的にシミュレート可能な動画世界モデル",
      "what": "エージェント自身の視点（Actor）とは別に、シーン全体や特定の領域を監視するパノラマ視点（Observer）を同時に生成する世界モデルです。Actorの視野から外れた物体もObserverによって進化し続け、再入場時にその変化した状態が正しく反映されます。",
      "enables": "視野外でのダイナミクスと3Dの一貫性を大幅に向上させ、現実および合成シーンのベンチマークにおいて高い視覚的忠実度とカメラ制御性を実現しました。",
      "why_it_matters": "従来の「エージェント視点のみ」の世界モデルが抱えていた、見えない場所での状態消失という課題を、視点の分離によって解決しています。",
      "tags": [
        "世界モデル",
        "動画生成",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01509",
      "title": "Sharpening Tax in Post-Training",
      "url": "https://arxiv.org/abs/2610.01509",
      "pdf": "https://arxiv.org/pdf/2610.01509",
      "authors": [
        "Changdae Oh",
        "Qi Zeng",
        "Qi Qi",
        "Andrey Zhmoginov",
        "Deren Lei",
        "Yun He"
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
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "Sharpening Tax: 強化学習後の「解答の多様性低下」を定量化しテスト時のスケーラビリティを改善",
      "what": "LLMの強化学習（RL）が既存の振る舞いを鋭敏化（Sharpening）させ、1回の試行精度（Pass@1）を高める一方で、複数回答（Pass@K）による解決範囲を狭めてしまう現象を「Sharpening Tax」として定義・解析した研究です。この損失を補うため、問題の難易度に応じて温度を調整するPTGSサンプラーを提案しています。",
      "enables": "RL学習後のモデルが、十分な試行回数を与えられた学習前のモデルに敗北するケースを特定し、PTGSを用いることで1回試行の精度と複数試行でのカバー率の両立を可能にしました。",
      "why_it_matters": "RLがモデルの能力を向上させるのか、単に特定の解に絞り込んでいるだけなのかという議論に客観的な指標を与え、より柔軟な推論戦略の必要性を示しています。",
      "tags": [
        "LLM",
        "強化学習",
        "サンプリング"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.00906",
      "title": "ActiveSaddler: Automated Curriculum Learning for Agent Harness Optimization",
      "url": "https://arxiv.org/abs/2610.00906",
      "pdf": "https://arxiv.org/pdf/2610.00906",
      "authors": [
        "Sungho Park",
        "Wonjoong Kim",
        "Jue Zhang",
        "Wook-Shin Han",
        "Pengfei Gao",
        "Chanyoung Park"
      ],
      "categories": [
        "cs.AI",
        "cs.CL",
        "cs.LG",
        "cs.MA",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 16 figures. Project website and code: https://autosaddler-projectpage.github.io/activesaddler/",
      "hf_upvotes": 50,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲50"
      ],
      "headline": "ActiveSaddler: 失敗パターンを学習カリキュラムとして自動構築しエージェントの最適化を加速",
      "what": "LLMエージェントのプロンプトやツール構成を最適化する際、どのシナリオで学習を行うべきかを動的に決定する自動カリキュラム学習手法です。繰り返される失敗を抽象化して多腕バンディット問題としてモデル化し、最も学習効果が高いと思われるシナリオを適応的に選択します。",
      "enables": "GAIA2やTerminal-Bench 2.0において、固定された順序で学習する手法と比較して、テストの正解率（Pass@1）を最大7.5ポイント向上させました。",
      "why_it_matters": "「どう最適化するか」だけでなく「何を使って最適化するか」を自動化することで、エージェントの進化に合わせた効率的なフィードバックループを実現しています。",
      "tags": [
        "AIエージェント",
        "LLM",
        "カリキュラム学習"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.02205",
      "title": "ROWBench: Do Video Models Render What the Program Specifies?",
      "url": "https://arxiv.org/abs/2610.02205",
      "pdf": "https://arxiv.org/pdf/2610.02205",
      "authors": [
        "Zheng-Hui Huang",
        "Guixu Lin",
        "Yu-Ju Tsai",
        "Jian-Kai Zhu",
        "Fengbo Lan",
        "Yu-Lun Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 48,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲48"
      ],
      "headline": "PROWBench: 動画生成モデルがプログラムで指定された細かな相互作用を正しく描写できるかを評価",
      "what": "プログラムで構築されたエピソードを用い、動画生成モデルが指定されたエンティティの状態変化や、視野外を含むイベントを正確に描画できているかを検証するベンチマークです。論理的一致（Logic-Render Alignment）と相互作用の成功率という2つのVLMベースの指標を提供します。",
      "enables": "170のエピソードと600のプロキシ動画を通じて、一人称・三人称視点、長期記憶、同期マルチビューなど、複雑なシナリオでのモデルの忠実度を厳密に評価可能です。",
      "why_it_matters": "視覚的な美しさだけでなく、プログラムで定義された「ルール」にモデルがどこまで従っているかを測定することで、ゲームエンジンとしての応用などに必要な信頼性を評価できます。",
      "tags": [
        "動画生成",
        "世界モデル",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.00574",
      "title": "Make Sparse Rewards Count: Density-Aware Reward Aggregation for Multi-Reward RL",
      "url": "https://arxiv.org/abs/2610.00574",
      "pdf": "https://arxiv.org/pdf/2610.00574",
      "authors": [
        "Tong Zheng",
        "Skylar Zhai",
        "Zhan Cheng",
        "TianMing Sha",
        "Youling Huang",
        "Shuo Zhou"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 8 figures",
      "hf_upvotes": 42,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲42"
      ],
      "headline": "DARA: 複数の報酬間の学習進捗を動的に校正しLLMの強化学習ステップを最大65%削減",
      "what": "複数の報酬（ツール使用の書式、論理の正しさ等）を同時に最適化する際、各報酬の「アクティブな頻度（密度）」に基づいて重みを自動調整する手法です。あまり活性化しない（＝疎な）報酬信号を強化することで、バッチ内での学習バランスを保ちます。",
      "enables": "数学的推論タスクにおいて、既存手法のGDPOと比較して目標の精度に到達するまでの学習ステップ数を最大65%削減し、最終的な性能も維持しました。",
      "why_it_matters": "複数の制約を同時に満たす必要がある複雑な強化学習において、各報酬のバランス調整という手動で行われがちなプロセスを、データに基づき自動化・効率化しています。",
      "tags": [
        "LLM",
        "強化学習",
        "マルチ報酬"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01215",
      "title": "AutoGUIWorld: Image Generators as Visual World Models for GUI Agent",
      "url": "https://arxiv.org/abs/2610.01215",
      "pdf": "https://arxiv.org/pdf/2610.01215",
      "authors": [
        "Cheng Yang",
        "Yifan Wu",
        "Yutao Huang",
        "Zhaohua Zhang",
        "Beiduo Chen",
        "Muxi Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 42,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲42"
      ],
      "headline": "AutoGUIWorld: 実環境なしで画像生成モデルを用いてGUI操作の学習データを合成するフレームワーク",
      "what": "実際のソフトウェアを実行する代わりに、画像生成モデルとプランナーを組み合わせてGUIの操作画面とアクションの結果をシミュレートし、学習用データを合成する手法です。OSの仕様から初期画面を生成し、アクションに応じた画面編集を繰り返すことで軌跡を作成します。",
      "enables": "Ubuntu、Windows、macOS等の約8万件の高品質な操作サンプルを生成し、これを用いた微調整によりOSWorldでのタスクスコアを33.0%から40.8%へ向上させました。",
      "why_it_matters": "多様なソフトウェア環境の構築・実行コストをかけずに、画像生成モデルの視覚的知識を活用してGUIエージェントの学習データを大幅に拡張できる点に意義があります。",
      "tags": [
        "GUIエージェント",
        "データ合成",
        "画像生成"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.02196",
      "title": "InterEvolve: Test-Time Evolution of Reward Programs for Humanoid Loco-Manipulation",
      "url": "https://arxiv.org/abs/2610.02196",
      "pdf": "https://arxiv.org/pdf/2610.02196",
      "authors": [
        "Zhuo Lin",
        "Sirui Xu",
        "Liuyu Bian",
        "Yu-Xiong Wang",
        "Liang-Yan Gui"
      ],
      "categories": [
        "cs.RO",
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 36,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲36"
      ],
      "headline": "InterEvolve: 人型ロボットの「報酬プログラム」をテスト時に進化させ未学習タスクを遂行",
      "what": "ヒューマノイドロボットが既知のスキルを組み合わせて未知のタスクを解くための、テスト時進化（Test-time Evolution）フレームワークです。LLMエージェントがタスクを「報酬プログラム」として定義・修正し、並列シミュレーションでの試行錯誤と数値最適化を通じて最適な動作を導き出します。",
      "enables": "人手で設計した報酬では引き出せなかったロボットの潜在的な能力を引き出し、複雑な障害物回避や実機（Unitree G1）での自律動作を、再学習なしで実現しました。",
      "why_it_matters": "ロボットに新しい動作を教え込むのではなく、既存の「運動の基礎」をLLMが再プログラムすることで、未知の環境やタスクへの即時適応を可能にしています。",
      "tags": [
        "ロボティクス",
        "LLM",
        "強化学習"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01016",
      "title": "Scaling and Distilling Text Embeddings for Better Diffusibility",
      "url": "https://arxiv.org/abs/2610.01016",
      "pdf": "https://arxiv.org/pdf/2610.01016",
      "authors": [
        "Zekai Zhang",
        "Yunjie Tian",
        "Yanjin He",
        "Xiaoyan Zhang",
        "Dongdi Zhao",
        "Qing Qu"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "28 pages, 12 figures. Code is available at https://github.com/la0ka1/diffusing-scaled-text-embeddings",
      "hf_upvotes": 36,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲36"
      ],
      "headline": "拡散言語モデル向けテキスト埋め込みの蒸留により、GPT-2を超える生成品質を達成",
      "what": "連続的なテキスト埋め込みを用いる拡散言語モデル（DLM）において、どの埋め込み空間が最も「拡散に適しているか」を調査した研究です。強力な教師モデルのデコード確率をソフトラベルとして学習する蒸留手法により、単語間の統計的繋がりが強い拡散フレンドリーな潜在空間を構築します。",
      "enables": "提案手法で学習した中規模DLMは、OpenWebTextにおいてGPT-2-Mを超える生成パープレキシティを記録し、より妥当なテキスト生成が可能になりました。",
      "why_it_matters": "拡散モデルを言語に適用する際の最大の課題である「離散トークンと連続空間のギャップ」を、埋め込み層の蒸留という観点から解決しています。",
      "tags": [
        "拡散モデル",
        "自然言語処理",
        "埋め込み"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01009",
      "title": "Helol Tunnel: Covert Channel Exploitation of TLS Extensibility & Privacy Features",
      "url": "https://arxiv.org/abs/2610.01009",
      "pdf": "https://arxiv.org/pdf/2610.01009",
      "authors": [
        "Reza Soosahabi",
        "Rakesh Seal"
      ],
      "categories": [
        "cs.CR"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Best Paper Award Recipient at the 6th Silicon Valley Cybersecurity Conference (SVCC 2025). Keywords: covert channel, malware, data exfiltration, middleboxes, TLS fingerprinting, TLS ossification, network security",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "Helol Tunnel: TLS Client Helloの配置を戦略的に変更しセキュリティ製品を回避する隠し通信路",
      "what": "TLSプロトコルのClient Helloパケット内に、暗号化情報などのパラメータを並べ替えることで情報を埋め込む秘密通信（Covert Channel）手法です。TLSの拡張性維持や指紋認証回避のためにパラメータ順序が一定でないという性質を逆手に取り、検知を回避します。",
      "enables": "次世代ファイアウォール（NGFW）やプロキシを通じた脅威検出を回避しながら、データの流出やコマンド制御（C2）を行うことが可能であることを実証しました。",
      "why_it_matters": "インターネットで広く使われるTLSの仕様とプライバシー機能を悪用する手法であり、ネットワークセキュリティの設計における新たな脆弱性を示唆しています。",
      "tags": [
        "サイバーセキュリティ",
        "ネットワーク",
        "TLS"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01388",
      "title": "Supervising Sound Localization by In-the-wild Egomotion",
      "url": "https://arxiv.org/abs/2610.01388",
      "pdf": "https://arxiv.org/pdf/2610.01388",
      "authors": [
        "Anna Min",
        "Ziyang Chen",
        "Hang Zhao",
        "Andrew Owens"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.MM",
        "cs.SD"
      ],
      "venues": [
        "CVPR"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "CVPR 2025 Highlight (IEEE/CVF Conference on Computer Vision and Pattern Recognition)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "エゴモーション（自己運動）を教師信号として野外映像からバイノーラル音源定位を学習",
      "what": "カメラの移動に伴う音源への相対的な方向変化を、多視覚幾何学で推定したカメラの動きと照合することで、バイノーラル（両耳）音声の定位を学習する手法です。専門的なアノテーションなしで、日常的な動画から音源の位置を予測するモデルを訓練します。",
      "enables": "現実世界の動的なビデオデータから、追加のラベルなしで効果的な音源定位タスクを実行可能なオーディオモデルを構築しました。",
      "why_it_matters": "音の定位学習に不可欠だった高コストな正解ラベルの代わりに、映像から得られる幾何学的な「自己運動」を教師にするという、スケーラブルな学習パラダイムを提案しています。",
      "tags": [
        "コンピュータビジョン",
        "オーディオ解析",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2610.01742",
      "title": "World Motion Models: Flexible Sequence Modeling of SE(3) Trajectories",
      "url": "https://arxiv.org/abs/2610.01742",
      "pdf": "https://arxiv.org/pdf/2610.01742",
      "authors": [
        "Jiahui Lei",
        "Qianqian Wang",
        "Trevor Darrell",
        "Angjoo Kanazawa"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 (Spotlight). Url: https://jiahuilei.com/projects/wmm/",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "World Motion Models: SE(3)軌跡を共通言語として多様な3D運動を統合予測する生成モデル",
      "what": "人、物体、カメラ、ロボットなどのあらゆる運動を、剛体運動を表す「SE(3)ポーズ軌跡」として一元化し、Flow Matchingを用いて生成・予測するモデル（WMM）です。任意の時刻やエンティティの状態をマスクすることで、未来予測、欠損補完、逆運動学などを同一モデルで解きます。",
      "enables": "3Dビジョンとロボット工学の6つの異なるアプリケーションにおいて、強力な汎用性と柔軟性を示し、クロスエンボディメントなモーション変換なども可能にしました。",
      "why_it_matters": "タスクごとに専用モデルを構築するのではなく、空間的な知能の基礎となる「3D世界の動的な推論」を一つのシーケンスモデリング問題として統合している点が革新的です。",
      "tags": [
        "ロボティクス",
        "3Dビジョン",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-03T09:59:50.241778+09:00"
    },
    {
      "id": "2609.39045",
      "title": "RSIGame: Autonomous Agentic Game Development with Recursive Self-improvement",
      "url": "https://arxiv.org/abs/2609.39045",
      "pdf": "https://arxiv.org/pdf/2609.39045",
      "authors": [
        "Wenyi Wu",
        "Minghao Fu",
        "Jieyu You",
        "Kun Zhou",
        "Siqi Liu",
        "Aayush Salvi"
      ],
      "categories": [
        "cs.CL",
        "cs.GT",
        "cs.LG",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 31,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲31"
      ],
      "headline": "RSIGame：再帰的な自己改善ループによりゲーム開発を自動化するエージェントフレームワーク",
      "what": "RSIGameは、ゲーム開発を「局所的な試行・診断・改善ループ」と「全体的な品質管理・保存ループ」の2段階で実行するエージェントシステムです。生成されたゲームを実際に動かし、不具合や挙動の不足をエージェント自身が特定・修正し、その成功体験をモデル自身の知識として内部化（学習）します。",
      "enables": "140種類のゲーム作成タスクにおいて、Qwen3.8-27Bが本手法を用いることでGPT-5.5のワンショット性能を超え、かつ生成トークン数を11分の1に削減することに成功しました。",
      "why_it_matters": "単なるコード生成にとどまらず、実行と検証、そして学習を繰り返すことで、モデルの規模を超えた開発能力を引き出せることを実証しています。",
      "tags": [
        "ゲーム開発",
        "自己改善",
        "LLMエージェント"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38925",
      "title": "Prototype-guided Bilateral Alignment Multimodal Federated Learning",
      "url": "https://arxiv.org/abs/2609.38925",
      "pdf": "https://arxiv.org/pdf/2609.38925",
      "authors": [
        "Tianchi Liao Tianchi_Liao",
        "Lele Fu",
        "Sheng Huang",
        "Qing Hu",
        "Hong-Ning Dai",
        "Chuan Chen"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [
        "ICML"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "28 pages, 16 figures, ICML 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "MFedPBA：不均衡なマルチモーダルデータと異種モデル間での連合学習を実現する双方向アライメント",
      "what": "クライアント間でモデル構造が異なり、かつモダリティ（画像、テキスト等）の分布が偏っている実用的な状況に対応したマルチモーダル連合学習フレームワークです。特徴レベルでの対照学習を用いた空間調整と、意思決定レベルでのエントロピー重み付き集約という「双方向アライメント」を採用しています。",
      "enables": "モデルの不均一性やモダリティの欠損・不均衡がある条件下で、既存のSOTA手法を大幅に上回る頑健な知識共有と高いモデル性能を達成しました。",
      "why_it_matters": "各クライアントが異なるデバイス（性能の異なるモデル）を持ち、持っているデータの種類もバラバラであるという、現実世界の分散学習における主要な課題を解決する手法です。",
      "tags": [
        "連合学習",
        "マルチモーダル学習",
        "分散学習"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    },
    {
      "id": "2609.38991",
      "title": "Anchoring Adversarial Trajectories to Data Manifolds: A Bilevel Transfer Optimization Framework",
      "url": "https://arxiv.org/abs/2609.38991",
      "pdf": "https://arxiv.org/pdf/2609.38991",
      "authors": [
        "Yaohua Liu",
        "Yifan Guo",
        "Jiaxin Gao"
      ],
      "categories": [
        "cs.LG",
        "cs.CR",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 as a Spotlight. 21 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "MABT：敵対的攻撃の軌跡をデータ多様体へ固定し攻撃の転移性を向上させる最適化手法",
      "what": "敵対的転移攻撃において、攻撃を生成する際の勾配がデータの本来の構造（データ多様体）から外れることで特定のモデルに過学習する問題を解決する手法です。敵対的軌跡を意味空間のサブスペースに拘束する「多様体アンカー」と、階層構造を高速に解くヘシアンフリーソルバーを導入しました。",
      "enables": "28種類の攻撃設定において、多様な被害者モデルのアーキテクチャや防御策に対しても、10種類の既存攻撃手法の転移成功率を一貫して向上させることに成功しました。",
      "why_it_matters": "特定のモデルに対する攻撃が他のモデルにも有効（転移）になりやすくなるため、AIモデルの堅牢性評価やセキュリティ上の脆弱性理解において重要な知見となります。",
      "tags": [
        "敵対的攻撃",
        "転移学習",
        "セキュリティ"
      ],
      "fetched_at": "2026-10-02T00:58:20.966811+09:00"
    }
  ],
  "hf": [
    {
      "id": "2609.33439",
      "title": "Raven: The Harness of Harnesses for Composable Agentic Intelligence",
      "abstract": "As large language models advance, AI agents are moving beyond isolated, domain-specific tasks toward long-horizon, cross-domain workflows. This transition exposes two challenges: increasing harness complexity makes manual design difficult to scale, while tighter coupling to specific domains limits the generality of a single harness. The central question thus shifts from how to engineer a stronger harness for one domain to how to autonomously construct specialized harnesses, improve them through experience, and orchestrate them across domains. We introduce Raven, The Harness of Harnesses, an open-source multi-agent ecosystem that automatically constructs and evolves modular harnesses for specific models and domains, treating each executable model--harness pair as a composable unit of intelligence. To support an All-Domain Collaboration Network, its Host Agent decomposes goals, matches subtasks to specialized agents, coordinates execution dependencies, and integrates results, while a host archive and EverOS preserve experience across tasks and Skill Forge makes that experience available as reusable procedures. Our theory establishes sufficient conditions for such composition to expand reliable task coverage beyond that of the available individual agents under a shared resource budget. On complex and long-horizon tasks, Raven significantly outperforms the state-of-the-art agent systems, pushing the frontier of composable agentic intelligence.",
      "upvotes": 513,
      "github_stars": 5067,
      "github_repo": "https://github.com/EverMind-AI/Raven",
      "project_page": "https://raven.evermind.ai/",
      "comments": 3,
      "org": "EverMind",
      "url": "https://huggingface.co/papers/2609.33439",
      "arxiv_url": "https://arxiv.org/abs/2609.33439",
      "title_ja": "Raven: コンポーザブルなエージェント知能のためのハーネスのハーネス",
      "summary_ja": "ドメイン特化型ハーネスを自動構築・進化させ、複数ドメイン間で調整する基盤を提案。"
    },
    {
      "id": "2609.34309",
      "title": "MaLiang-Harness: A Programmable Path to Image and Video Generation",
      "abstract": "Executable programs offer explicit control over how images and videos are constructed, but generating runnable code is only the beginning of visual creation. A program can execute correctly while violating the requested composition, appearance, or motion. We define this discrepancy as the Program-to-Visual (P2V) gap and introduce MaLiang-Harness, a unified framework for organizing MLLM-driven visual generation into a persistent process of construction, inspection, and revision. Its central design is to make the evolving visual program, its construction history, and its verification share a common revision reference. We define the Persistent Executable Generation (PEG) state as preserving programs and task context. Traceable Generation Process (TGP) connects edits to rendered evidence, and Revision-aware Editing and Verification (REV) supports restoration and checks the current revision before completion. Together, these mechanisms coordinate planning, execution, and visual feedback across rendering backends. We evaluate 11 powerful closed-source MLLMs on MaLiang-IBench and four on MaLiang-VBench, measuring generation success, visual quality, and computational cost. GPT-6-Astra achieves 100% generation success on both benchmarks, with 96.0% of image tasks and 76.9% of video tasks meeting all quality thresholds. The comparison also reveals a mismatch between general capability scores and visual generation performance, with similarly scored models differing substantially in their ability to satisfy visual requirements. MaLiang-Harness provides a systematic basis for studying how MLLMs translate executable code into visual outcomes, exposing both the potential of programmable generation and the limitations of general benchmarks as predictors of this ability. The project is available at https://github.com/gulucaptain/MaLiang-Harness.",
      "upvotes": 396,
      "github_stars": 24,
      "github_repo": "https://github.com/gulucaptain/MaLiang-Harness",
      "project_page": "https://gulucaptain.github.io/MaLiang-Harness/",
      "comments": 1,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.34309",
      "arxiv_url": "https://arxiv.org/abs/2609.34309",
      "title_ja": "MaLiang-Harness: 画像・動画生成へのプログラム可能な経路",
      "summary_ja": "生成・検査・修正を共通の参照下で反復し、プログラムと視覚表現の乖離を埋める枠組み。"
    },
    {
      "id": "2609.36012",
      "title": "In-Context Learning for Robots: Methods and Applications",
      "abstract": "General-purpose robots must infer what a new task requires and translate that understanding into appropriate physical action. In-context learning (ICL) for robots supports this process by using demonstrations and interaction to direct existing competence with neural parameters held fixed during deployment. We organize this literature review around the interfaces connecting contextual evidence to execution, distinguishing four families: context-conditioned policies, geometric demonstration transfer, world-model-based control, and skill- and agent-based execution. Comparing these interfaces clarifies their transfer assumptions and the roles of training, correspondence, and memory in making context useful. Across manipulation and navigation, we examine how these mechanisms preserve taught requirements as objects, environments, and execution conditions change. This analysis links method design to evaluation practices that distinguish responsiveness to teaching, physical transfer, and benefits from retained experience. The resulting agenda connects compositional task acquisition and faithful transfer with physical recursive self-improvement, in which experience improves the ability to learn subsequent tasks.",
      "upvotes": 369,
      "github_stars": 15,
      "github_repo": "https://github.com/JethroJames/awesome-robots-icl",
      "project_page": "https://jethrojames.github.io/awesome-robots-icl/",
      "comments": 2,
      "org": "Knowin AI",
      "url": "https://huggingface.co/papers/2609.36012",
      "arxiv_url": "https://arxiv.org/abs/2609.36012",
      "title_ja": "ロボットのためのインコンテクスト学習：手法と応用",
      "summary_ja": "デモや相互作用を通じて、重み固定のままロボットに新タスクを推論させる手法を体系化。"
    },
    {
      "id": "2609.32722",
      "title": "Scaling Properties of Same-Family On-Policy Distillation",
      "abstract": "*Reinforcement learning (RL)* can induce substantial reasoning capabilities in large language models (LLMs), but how much of this capability transfers across model scales, and how quickly, remains unclear. We study the scaling properties of *on-policy distillation (OPD)* across *weak-to-strong*, *same-base*, and *strong-to-weak* teacher--student setups. We find that early OPD training dynamics uniformly exhibit a regular *useful-transfer* regime, in which held-out accuracy (the *gold score*, G) rises approximately linearly in d=mathrm{KL(π_θVert π_{ref})}, the square root of token-level reverse KL divergence from the student initialization. In every observed weak-to-strong pair, the student's peak gold score exceeds its teacher's own, so a compact RL expert can transfer capability to a much larger student via OPD. To estimate OPD outcomes, we fit *power laws* for how G_{peak} and the slope of the useful-transfer regime scale with student and teacher parameter counts and with teacher gold score. These laws show that peak gold score improves with teacher scale only up to roughly the student's scale, and that at a matched gold score smaller teachers transfer better, so a teacher's score alone does not define its supervision value. We also study the scaling effects of two OPD variants, bootstrapping weak-to-strong OPD, and the degree of on-policy supervision.",
      "upvotes": 307,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://colored-dye.github.io/blog/2026/opd-scaling/",
      "comments": 5,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.32722",
      "arxiv_url": "https://arxiv.org/abs/2609.32722",
      "title_ja": "同ファミリー内オンポリシ蒸留のスケール特性",
      "summary_ja": "OPDにおける学生の精度向上は、教師とのKL逆分散の平方根に対し線形に推移する。"
    },
    {
      "id": "2609.36484",
      "title": "The Teacher Is a Direction, Not a Destination: Extrapolating RL-Induced Representation Residuals in On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student to match the teacher's next-token distributions on the student's own trajectories and has yielded substantial empirical gains. Generalized variants allow the student to surpass the teacher by extrapolating an implicit reward in output space. The language-model head, however, attenuates this change anisotropically: much of the change encoded in the teacher's hidden states reaches the logits at a small fraction of its weight, and the sampled-token log-probability ratios on which output-space extrapolation relies inject noise that the extrapolation amplifies, making training unstable. We observe that reinforcement learning (RL) shifts a model's internal representations relative to its base checkpoint, and that the direction of this shift can be measured at every layer. Motivated by this observation, we propose RIDE (RL-Induced Direction Extrapolation), which extrapolates the RL-induced change directly in representation space: at every layer and token position, RIDE computes the residual between the teacher and its pre-RL checkpoint and regresses the student's hidden states toward targets displaced beyond the teacher along this residual. Conditioned on a sampled trajectory, this regression is equivalent to maximizing a linear directional reward defined by the residual under a quadratic penalty centered at the teacher, which makes explicit how the objective moves the student along the RL-induced direction while limiting its deviation from the teacher. Across four base/RL-teacher pairs spanning different scales, architectures, and pre-training lineages, RIDE approaches or exceeds the RL-trained teacher on every pair and is the only method whose mean does so, and it consistently outperforms output-space extrapolation, which degrades the student whenever the teacher is close to its base. Project page: https://github.com/xixixixixxxx/RIDE.",
      "upvotes": 295,
      "github_stars": 4,
      "github_repo": "https://github.com/xixixixixxxx/RIDE",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2609.36484",
      "arxiv_url": "https://arxiv.org/abs/2609.36484",
      "title_ja": "教師は目的地ではなく方向：オンポリシ蒸留におけるRL誘導表現残差の外挿",
      "summary_ja": "出力空間ではなく隠れ状態の残差を外挿し、不安定さを抑えつつ教師を超える蒸留を実現。"
    },
    {
      "id": "2609.31847",
      "title": "Omni-IO Skills: Harnessing Your Agent Omni-Native",
      "abstract": "General-purpose agents can plan, reason, and act over long horizons, yet their production capabilities remain fragmented across text, images, audio, video, documents, 3D assets, and code. Extending a foundation model to additional modalities ties capability growth to costly model updates, while assembling specialist models and tools leaves unresolved how procedures, dependencies, intermediate assets, and cross-turn revisions should be coordinated. We present Omni-IO Skills, a plug-and-play Agent Harness that makes existing agents omni-native through hierarchical Skills, a standardized multimodal execution interface, dependency-aware orchestration, and a persistent Asset Registry. Multi-asset workflows are represented as Declare Execution Graphs, which schedule independent operations concurrently and register successful outputs for downstream and cross-turn reuse across replaceable execution backends. Its 27 Skills cover 38 representative tasks spanning seven artifact modalities and four capability families: understanding, generation, reasoning, and retrieval. On UniM-90, the harness raises the input-support rates of GPT-5.6 Sol and Claude Sonnet 5 from 40.00% and 38.89% to 100%, while increasing relative Semantic--Quality Coupled Score from 26.99 to 74.94 and from 27.82 to 77.78, respectively; Strict Structure Score reaches 100.00 and 99.78. These results establish harness-level capability composition as a practical route to broad, evolvable Omni systems without changing the host agent's reasoning core.",
      "upvotes": 279,
      "github_stars": 38,
      "github_repo": "https://github.com/any2any-mllm/Omni-IO-Skill",
      "project_page": "https://github.com/any2any-mllm/Omni-IO-Skill",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.31847",
      "arxiv_url": "https://arxiv.org/abs/2609.31847",
      "title_ja": "Omni-IO Skills: エージェントをオムニ・ネイティブにする",
      "summary_ja": "多種多様なモダリティやツールを、階層的なスキルと共通の資産管理で統合する仕組み。"
    },
    {
      "id": "2609.38721",
      "title": "UniEvo-VL: An On-policy Self-Distillation Training Recipe for Multimodal Model Self-improvement",
      "abstract": "Modern multimodal models bring generation and understanding into a single unified system, which enables them to provide and learn from their own feedback. Motivated by this unified capacity, we introduce UniEvo-VL, a self-evolving framework for multimodal models to learn from this constructive self-correction feedback during test-time compute. Instead of relying on a separate, often larger, teacher, we leverage their self-critiques as privileged information and ask a single multimodal model to act as both teacher and student with different contexts. The student only sees the vanilla question, while the teacher conditions on the privileged critique. Then training minimizes the per-state divergence between their denoising diffusion distributions over the student's own sampling trajectories. Experiments demonstrate that UniEvo-VL improves the image generation capabilities of multimodal models, while maintaining their sensitivity to additional reflection information. Specifically, we build on top of the open-source Qwen-image-2512 and observe a significant performance gain from 0.747 to 0.808 on GenEval and from 32.97 to 35.53 on GenEval2 Soft-TIFA. Moreover, attempts with more powerful external critics (e.g., GPT5.6-Luna) show that multimodal models with strong judge capabilities can anticipate a higher self-evolving ceiling. Last but not least, mixed text-rendering outcomes show that our self-improvements may not be uniform across different tasks. Our study aims to shed light on the current hot recursive self-improvement research line to enhance the user experience when using multimodal models without external supervision or guidance.",
      "upvotes": 272,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Stanford NLP",
      "url": "https://huggingface.co/papers/2609.38721",
      "arxiv_url": "https://arxiv.org/abs/2609.38721",
      "title_ja": "UniEvo-VL: 多峰性モデル自己改善のためのオンポリシ自己蒸留レシピ",
      "summary_ja": "テスト時に自身の修正フィードバックを特権情報として学習し、自己進化するマルチモーダル。"
    },
    {
      "id": "2609.29233",
      "title": "Post-Training Leaves Behavioral Shadows on Unrelated Decisions",
      "abstract": "We find that language models can transfer capabilities through task-unrelated text. Post-training typically improves language models using task-specific data. Prior work on subliminal learning shows that information about these updates can pass through unrelated generations, but has largely focused on traits or preferences using extensive teacher outputs. We introduce Active Taskless Distillation (ATD), which achieves capability transfer using only a single word from the teacher per prompt. ATD probes the behavioral shadow of post-training by selecting prompts where the teacher and student's shared public ancestor is nearly indifferent between two ordinary words. A student initialized from this ancestor learns solely from the resulting prompt-word pairs, without target-task examples, teacher logits, or teacher parameters. In the primary coding experiment with Qwen2.5-1.5B, 5,664nses yield a 5.34 pp gain on HumanEval+ over an exact nuisance-matched control thadisrupts prompt-resperiments showtransfer in scientific knowledge, commonsense reasoning, and reading comprehensins across additional model generations, sizes, and families. Functional analyses show that the learned sid composable, andthat its strength tracks the teacher's update strength.",
      "upvotes": 271,
      "github_stars": 17,
      "github_repo": "https://github.com/myboker/ATD",
      "project_page": "",
      "comments": 2,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2609.29233",
      "arxiv_url": "https://arxiv.org/abs/2609.29233",
      "title_ja": "事後学習は無関係な決定に振る舞いの影を残す",
      "summary_ja": "タスクに無関係な単一の単語選択を通じて、事後学習の能力を学生モデルへ転移させる手法。"
    },
    {
      "id": "2609.39102",
      "title": "False Frontiers: Diagnosing and Mitigating Co-Cheating in Self-Evolving Search Agents",
      "abstract": "Self-evolving search agents build their own training curricula by jointly optimizing a proposer that generates questions and a solver that answers them. This closed loop introduces a failure mode we call co-cheating: the proposer and solver increasingly agree on shared errors, so internal reward improves without a matching gain in external correctness. A post-hoc audit against source evidence shows co-cheating growing more severe over successive rounds of self-evolution, with pseudo-label correctness stagnating or declining even as the in-loop training signal improves. The most direct mitigation is to verify proposals before training: we introduce multi-sample verification (MSV), which queries the same model three times with the source and three times without it to decide task admission and replace unreliable pseudo-labels. MSV partially reduces false agreement but leaves substantial residual co-cheating and costs six extra labeler generations per candidate. These limitations motivate CrossFit, our main method: it partitions the proposer's source documents into groups A and B; questions generated from A are scored by an auxiliary solver trained only on B, and vice versa. The cross-fitted agreement determines proposer reward, so a same-source pseudo-label cannot be reproduced through the feedback solver, while the original solver's update rule is unchanged. Rerunning the loop with Qwen3.5-4B and Qwen3.5-9B, MSV reduces false-agreement mass from 6.1% to 5.7% and from 8.8% to 7.2%, whereas CrossFit reduces it to 3.0% and 3.7%. Replaying identical proposals with source-excluded feedback further reduces false agreement to 0.4% and 0.1%, isolating feedback ancestry from curriculum changes. Across seven downstream search benchmarks, CrossFit improves average performance over standard coupled self-evolution by 8.8 and 8.4 points and over Search-R1 by 8.7 and 7.8 points at 4B and 9B.",
      "upvotes": 255,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Rutgers University",
      "url": "https://huggingface.co/papers/2609.39102",
      "arxiv_url": "https://arxiv.org/abs/2609.39102",
      "title_ja": "偽のフロンティア：自己進化型検索エージェントにおける共謀の診断と緩和",
      "summary_ja": "出題者と回答者が誤りで一致する共謀を防ぐため、訓練前に複数の検証を行うMSVを導入。"
    },
    {
      "id": "2609.33757",
      "title": "YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality",
      "abstract": "Symbolic models make melody, harmony, rhythm, and form explicit but typically stop before a finished recording; audio models produce complete songs while leaving composition implicit. We introduce YuE2, which unifies symbolic and audio music generation at frontier quality through symbolic planning. A single AR-NAR Mixture-of-Transformers (MoT) first writes a readable score specifying melody and harmony, expands it into semantic music tokens, and realizes it as full-song audio. In comparisons using the same checkpoint, experts prefer symbolic planning for overall quality and musicality, with 49.3% of overall preferences versus 34.6% without planning. Experts also favor the unified model over a separate language model and diffusion Transformer. On WildSongBench, YuE2 scores 6.73 on SongBench Global Avg, exceeding all evaluated public baselines. Selecting from eight candidates (best-of-8), YuE2 reaches 6.96, the highest observed mean among all evaluated systems. Expert listening further establishes its competitiveness with proprietary song generators, favoring best-of-8 over Suno v4.5 and yielding nearly balanced preferences against Suno v5. To learn this generation process from recordings without aligned scores, we introduce MERT2 and SheetSage2 to supply semantic and symbolic supervision. MERT2 sets a new state of the art in music representation learning, surpassing previous best results on 14 of 15 MARBLE metrics; SheetSage2 leads 12 of 15 benchmark-metric pairs in our lead-sheet transcription comparison. The same checkpoint follows score edits while largely preserving unedited musical content and generates zero-shot covers without cover-specific training. Its readable score also enables agentic music editing, with external language models translating user feedback into revisions of the composition.",
      "upvotes": 240,
      "github_stars": 10717,
      "github_repo": "https://github.com/multimodal-art-projection/YuE",
      "project_page": "https://map-yue2.github.io/",
      "comments": 3,
      "org": "Multimodal Art Projection",
      "url": "https://huggingface.co/papers/2609.33757",
      "arxiv_url": "https://arxiv.org/abs/2609.33757",
      "title_ja": "YuE2: シンボリックとオーディオの音楽生成を最高品質で統合",
      "summary_ja": "記譜プログラム作成後に音楽トークン、音声へと展開し、高い音楽性と品質を両立。"
    },
    {
      "id": "2609.33325",
      "title": "VisionHOPE: Visual Backbones as Self-Modifying Learning Systems",
      "abstract": "Visual backbones have evolved from Convolutional Neural Networks (CNNs) with local aggregation to Vision Transformers (ViTs) with global interactions, State-Space Models (SSMs) with input-dependent state transitions, and Test-Time Training (TTT) layers that adapt an inner learner while processing an image. Across this progression, visual computation has become increasingly adaptive to each input, yet the rules governing that adaptation remain largely prescribed by the trained backbone. We introduce VisionHOPE, the first generic visual backbone formulated as a self-modifying learning system, in which what the model remembers and how it learns co-evolve within an image. Building on the self-referential construction of Nested Learning (NL), VisionHOPE realizes this co-evolution through five coupled memories that store content, generate key and value representations, and govern learning rate and retention. These memories evolve jointly as visual context accumulates along each scan. However, directly applying the unconstrained self-referential update to a visual backbone leads to instability. We therefore derive a stability-matched step-size control scheme that combines a soft cap on self-referential injection with a spectral clamp on the retained memory transition, and prove that the resulting memory dynamics are non-expansive along each scan. For two-dimensional feature maps, we adapt NL's chunk formulation by aligning chunks with image rows and columns across four directional scans. The proposed VisionHOPE achieves competitive results on ImageNet-1K, COCO, and ADE20K, establishing self-modifying learning systems as a practical foundation for general-purpose visual backbones. The code is available at https://github.com/PSRben/VisionHOPE.",
      "upvotes": 215,
      "github_stars": 438,
      "github_repo": "https://github.com/PSRben/VisionHOPE",
      "project_page": "",
      "comments": 2,
      "org": "Mininglamp Technology",
      "url": "https://huggingface.co/papers/2609.33325",
      "arxiv_url": "https://arxiv.org/abs/2609.33325",
      "title_ja": "VisionHOPE: 自己修正学習システムとしての視覚バックボーン",
      "summary_ja": "画像処理中にモデルの記憶と学習方法が共進化する、自己書き換え型の汎用視覚バックボーン。"
    },
    {
      "id": "2609.34563",
      "title": "Rethinking Latent Visual Reasoning: Grounding Latent Reasoning in Visual Evidence",
      "abstract": "Latent visual reasoning (LVR) enables multimodal large language models (MLLMs) to perform intermediate computation in continuous latent tokens rather than expressing every reasoning step in words. However, unlike textual CoT, latent reasoning is not directly observable, making it difficult to supervise what latent tokens learn. In this work, we first conduct a thorough analysis of latent-token behavior and identify a latent evidence-credit gap: latent tokens respond only weakly to image perturbations that alter the correct answer. We hypothesize that this issue stems from the lack of explicit supervision during GRPO training. These findings suggest that a final-answer reward provides too little guidance on what visual evidence to preserve or how credit should be assigned across latent tokens. To bridge this gap, we propose ReaLVR, which brings visual-evidence supervision to the model's own free-running latent trajectories. ReaLVR contrasts correct and model-generated wrong answers to determine where stronger supervision is needed, and relevant and mismatched visual evidence to specify what to preserve. Across three model families, ReaLVR consistently outperforms evaluated LVR baselines, achieving the highest five-task average of 63.7% on Qwen2.5-VL-7B. Crucially, we are the first to scale visual reasoning in latent space, showing that our framework continues to deliver robust improvements at frontier model scales up to 235B. Further analyses show more question-sensitive latent-token positions, stronger alignment with relevant visual regions, and greater fixed-context dependence on the most attended latent tokens.",
      "upvotes": 209,
      "github_stars": 14,
      "github_repo": "https://github.com/xixiaouab/ReaLVR-code",
      "project_page": "https://xixiaouab.github.io/projects/ReaLVR/",
      "comments": 2,
      "org": "Amazon",
      "url": "https://huggingface.co/papers/2609.34563",
      "arxiv_url": "https://arxiv.org/abs/2609.34563",
      "title_ja": "潜在視覚推論の再考：潜在推論を視覚的証拠に接地させる",
      "summary_ja": "潜在トークンと視覚的証拠の乖離を分析し、より詳細な監督で潜在推論の精度を向上させる。"
    },
    {
      "id": "2609.35347",
      "title": "Beyond Teacher Assignment: Domain-Normalized Multi-Teacher On-Policy Distillation",
      "abstract": "Reinforcement learning can turn one language model into several specialists, each excellent at a single skill such as mathematics, coding or following instructions, but users need one model with all of these skills. Multi-teacher on-policy distillation (MOPD) merges them by letting the specialists teach one student: the student answers each prompt, and the specialist for that prompt's domain gives feedback on every token. This routing decides which specialist teaches, but not how strongly its feedback moves the shared student. In Qwen3.5 models at three sizes, we find that MOPD's student does not beat one taught by the best single specialist and gains little of the mathematics specialist's advantage. The feedback is unbalanced: instruction-following feedback is several times more spread out than mathematics feedback and dominates the student's updates. We propose Domain-Normalized MOPD (DN-MOPD), which keeps the routing and rescales each domain's feedback by its measured spread. On six public benchmarks, DN-MOPD improves the average score over MOPD at every size, across three random seeds and under two answer-length limits, and recovers most of the lost mathematics gain. Controls with fixed domain weights show that the gain comes mainly from turning down instruction-following feedback rather than turning up mathematics alone, and that fixed weights close to those DN-MOPD measures perform comparably. Combining specialists therefore requires deciding not only which one teaches, but also how strongly its feedback counts.",
      "upvotes": 176,
      "github_stars": 18,
      "github_repo": "https://github.com/LiXin97/DN-MOPD",
      "project_page": "https://lixin.ai/DN-MOPD/",
      "comments": 2,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2609.35347",
      "arxiv_url": "https://arxiv.org/abs/2609.35347",
      "title_ja": "教師の割り当てを超えて：ドメイン正規化マルチ教師オンポリシ蒸留",
      "summary_ja": "複数専門家教師からのフィードバック強度を動的に調整し、学生の全般的性能を底上げ。"
    },
    {
      "id": "2609.34759",
      "title": "PanoVLN: Towards Effective Panoramic Vision-and-Language Navigation",
      "abstract": "Recent vision-language models (VLMs) have advanced vision-and-language navigation (VLN), enabling models to predict navigation actions from visual observations and language instructions. In this work, we explore VLN with panoramic observations and introduce PanoVLN. The motivation is straightforward: more complete visual context should enable better-informed navigation decisions. For example, a panorama can reveal a passage outside a perspective camera's field of view, allowing the model to identify the intended route without additional exploration. However, we find that simply replacing perspective images with panoramas yields only limited gains. Our diagnosis suggests that fully exploiting wider visibility requires modifications to action prediction, training supervision, and visual representation. First, wider visibility supports longer-horizon action planning. We make the model predict longer action sequences, enabling larger turns and subsequent movement from a single panorama. Specifically, we introduce a confidence-guided execution (CGE) strategy that dynamically determines how many predicted actions to execute before replanning. Second, wider visibility also brings more complex route choices. We therefore construct training routes with frequent branching points and clear instructions to provide targeted supervision for route selection. Third, panoramic navigation requires understanding spatial relationships across viewing directions, beyond recognizing individual landmarks. We combine semantic and geometric features from RGB panoramas to capture both scene content and spatial layout without adding visual tokens. With a 4B backbone and RGB-only input, PanoVLN surpasses the previous SOTA by 11.9% and 8.7% in success rate on R2R-CE and RxR-CE Val-Unseen. Real-world experiments on a quadruped further demonstrate faster navigation with fewer pauses than prior VLN methods.",
      "upvotes": 158,
      "github_stars": 36,
      "github_repo": "https://github.com/wangzhen-w/PanoVLN",
      "project_page": "https://wangzhen-w.github.io/PanoVLN/",
      "comments": 1,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.34759",
      "arxiv_url": "https://arxiv.org/abs/2609.34759",
      "title_ja": "PanoVLN: 効果的なパノラマ視覚言語ナビゲーションに向けて",
      "summary_ja": "全方位の視覚情報を活用し、無駄な探索を抑えた効率的なロボットナビゲーションを実現。"
    },
    {
      "id": "2609.31620",
      "title": "FuseReg: Regularizing Layer Fusion Mitigates the Reconstruction-Generation Gap in Representation Autoencoders",
      "abstract": "Representation autoencoders (RAEs) reuse features from a pretrained visual encoder as reconstruction and diffusion latents, integrating strong visual representations into image generation. However, RAEs still need to decide which encoder layers form the shared latent space for the generator and pixel decoder. This choice involves a trade-off. Shallower layers tend to preserve fine pixel details better, while deeper layers tend to yield better generation metrics. A fixed heuristic layer fusion therefore couples two stages that benefit from different information. We introduce FuseReg, which replaces heuristic feature selection with training over random subsets of encoder layers. We theoretically analyze the underlying mechanism: subset sampling explicitly penalizes sensitivity to cross-layer disagreement. On ImageNet-256 with DINOv3-L, a single FuseReg decoder reconstructs from full, sparse, and single-layer fusions without retraining, achieving higher PSNR than decoders specialized to fixed fusions. This flexibility also benefits generation: decoder replacement alone reduces unguided gFID by 27% with an unchanged RAEv2 DiT-XL generator. The same regularization principle extends to diffusion training, with joint regularization of both stages reducing unguided gFID by 29% on DiT-Base. These results show that training downstream models for layer-fusion robustness narrows the reconstruction-generation gap without modifying the pretrained encoder.",
      "upvotes": 157,
      "github_stars": 15,
      "github_repo": "https://github.com/Hongyang-Du/FuseReg",
      "project_page": "https://hongyang-du.github.io/FuseReg/",
      "comments": 3,
      "org": "USC Physical Superintelligence (PSI) Lab",
      "url": "https://huggingface.co/papers/2609.31620",
      "arxiv_url": "https://arxiv.org/abs/2609.31620",
      "title_ja": "FuseReg: 層融合の正規化による表現自己符号化器の再構成・生成ギャップ緩和",
      "summary_ja": "エンコーダ層のランダムなサブセットで訓練し、詳細維持と生成能力のトレードオフを解消。"
    },
    {
      "id": "2610.01762",
      "title": "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction",
      "abstract": "Streaming video LLMs must retain evidence before its relevance to future tasks is known and respond when sufficient evidence becomes available. The challenge is to form reusable factual memory without compromising real-time perception. We introduce OneStreamer, which jointly learns query-independent evidence recording and task response through a shared proactive generation process. Its Proactive Hierarchical Caption Memory (PHCM) produces time-grounded local-detail captions and summaries of completed events. Streaming caption targets supervise the interpretation of observed video prefixes during training. At inference, model-generated records complement a recent visual window, providing reusable factual context without revisiting historical visual features. Proactive State Transition Learning (PSTL) reduces the dominance of repeated waiting states by preserving supervision at all output anchors and selecting representative state-change and state-persistence tokens. We further develop a streaming data synthesis pipeline that aligns output content and timing with available evidence. Combining the resulting streaming captions and QA with cleaned open-source data yields OneStreamer-1M, a broad-coverage streaming video interaction dataset with over one million records spanning diverse tasks. Our 4B model achieves the best results among the compared methods across all eight evaluated streaming video understanding benchmarks. Ablations show that retaining generated captions improves historical QA without degrading real-time perception. PSTL also outperforms dense state supervision while supervising only 27.5% of annotated state tokens. Together, these results support proactive generation as a shared learning interface connecting perception, memory formation, and timely response in streaming video interaction.",
      "upvotes": 146,
      "github_stars": 45,
      "github_repo": "https://github.com/MCG-NJU/OneStreamer",
      "project_page": "https://mcg-nju.github.io/OneStreamer",
      "comments": 1,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2610.01762",
      "arxiv_url": "https://arxiv.org/abs/2610.01762",
      "title_ja": "OneStreamer: ストリーミング動画対話における知覚、記憶、先行的応答の統合",
      "summary_ja": "時間軸に接地した詳細なキャプション記憶を逐次生成し、リアルタイムな動画理解を実現。"
    },
    {
      "id": "2609.32607",
      "title": "VoxMem: Benchmarking Multimodal Memory in Large Audio Language Models",
      "abstract": "Spoken conversational systems must recover information from prior interactions (i.e., memory), yet relevant information in speech extends beyond what was said to who said it, how it was spoken, and what was audible, information that exists only in the audio signal and cannot be recovered from a transcript. Beyond what to remember, memory also demands diverse operations: retrieving a single fact, integrating evidence across turns, tracking an evolving state. Real interactions further unfold across sessions, meaning information accumulates across distinct episodes rather than a single continuous recording. Existing benchmarks fall short on all three dimensions: they focus primarily on lexical content, adopt limited and ad hoc memory operations, and treat memory as a single-session problem. We argue that principled memory evaluation requires jointly characterizing the acoustic evidence to be retained and the operations applied to it, and introduce a taxonomy along these two axes. Building on this taxonomy, we present VoxMem: 3,196 evaluation instances over 34,743 spoken sessions (177 hours) crossing four acoustic evidence types (speech semantics, speaker identity, paralinguistic cues, environmental sound) with four memory operations (information extraction, multi-session reasoning, temporal tracking, and answer refusal), grounded in multi-session histories and stratified across context budgets from 8K to 64K tokens. Evaluating 15 LALMs, no model exceeds 40% at 32K. Models retain what was said far better than who said it, how, or what was audible, a gap that widens for complex operations, grows with history length, and manifests as qualitatively distinct failure modes across evidence types. VoxMem aims to provide a foundation to measure and drive progress on the full scope of spoken conversational memory.",
      "upvotes": 143,
      "github_stars": 3,
      "github_repo": "https://github.com/swagshaw/voxmem",
      "project_page": "https://swagshaw.github.io/voxmem/",
      "comments": 2,
      "org": "The University of Melbourne",
      "url": "https://huggingface.co/papers/2609.32607",
      "arxiv_url": "https://arxiv.org/abs/2609.32607",
      "title_ja": "VoxMem: 大規模音声言語モデルにおけるマルチモーダル記憶の評価",
      "summary_ja": "「誰が、どう話したか」等の非言語的要素を含む音声対話の長期記憶能力を測るベンチマーク。"
    },
    {
      "id": "2609.38288",
      "title": "AREX-2: Advancing Self-Improving Agents through Long-Horizon Reflective Tasks",
      "abstract": "We present AREX-2, an effort to advance the self-improving capability of LLM agents, which we define as the ability to iteratively refine a solution at test time. This ability rests on two complementary capabilities: reflection, which produces a solution better than the current one, and long-horizon execution, which keeps the iteration effective over many rounds. We hypothesize that both capabilities are domain-agnostic, and can therefore be learned in scenarios that are well suited for supervision. Accordingly, we synthesize long-horizon improvement trajectories from machine learning and algorithmic programming tasks, two domains that offer verifiable feedback and reward sustained iteration. Trained on this data, our agent, built on Qwen3.8-27B, achieves strong results on MLE-bench Lite (81.8) and Frontier-CS (70.7), transfers to deep research with 84.0 on BrowseComp, 52.6 on HLE, 92.2 on GAIA, and 93.8 on DeepSearchQA, and keeps improving as its budget of rounds grows. These results show that long-horizon reflective data is an effective route toward self-improving agents.",
      "upvotes": 126,
      "github_stars": 19,
      "github_repo": "https://github.com/VectorSpaceLab/AREX-2",
      "project_page": "https://github.com/VectorSpaceLab/AREX-2",
      "comments": 3,
      "org": "Beijing Academy of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2609.38288",
      "arxiv_url": "https://arxiv.org/abs/2609.38288",
      "title_ja": "AREX-2: 長期反省タスクによる自己改善エージェントの進展",
      "summary_ja": "検証可能なドメインでの訓練を通じ、テスト時に解答を反復修正する汎用的な能力を強化。"
    },
    {
      "id": "2609.32577",
      "title": "Groupwise Agentic Grading and Advantage Redistribution for Code Agent RL",
      "abstract": "Reinforcement learning (RL) for code agents often uses executable tests to provide binary rewards. With these rewards, Group Relative Policy Optimization (GRPO) assigns identical advantages to test-passing trajectories within each rollout group, overlooking differences in implementation quality and adherence to task requirements. This leaves the policy without a learning signal that favors clean, targeted implementations over those containing unnecessary or out-of-scope changes. We introduce GAGAR, a framework for quality-aware credit redistribution in code agent RL. Built on dynamic sampling that retains groups containing both passing and failing trajectories, GAGAR places all trajectories from each group in a shared workspace, where an SFT-trained agentic grader jointly inspects them and ranks the test-passing candidates. Based on this ranking, we downweight lower-ranked trajectories and proportionally rescale the advantages of all test-passing trajectories to restore their original sum. This sum-preserving redistribution retains the relative weights established by quality-based downweighting while shifting credit toward higher-quality implementations. We evaluate GAGAR at industrial scale using pre-RL SFT checkpoints of MiMo-V2.6-Flash (310B total parameters) and MiMo-V2.6-Pro (1.02T total parameters). Controlled code-only Flash experiments show improved code agent performance, reduced trajectory-length growth, and more stable training. We further apply GAGAR in large-scale mixed-task RL with both Flash and Pro. Our results support combining test-based verification with groupwise agentic grading to improve the quality and stability of code agent RL.",
      "upvotes": 126,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Xiaomi MiMo",
      "url": "https://huggingface.co/papers/2609.32577",
      "arxiv_url": "https://arxiv.org/abs/2609.32577",
      "title_ja": "コードエージェントRLのためのグループ単位エージェント採点とアドバンテージ再分配",
      "summary_ja": "テスト成否だけでなく実装の質を評価し、より簡潔で要件に忠実なコード生成を促すRL。"
    },
    {
      "id": "2609.36380",
      "title": "LEGO-Anything: Coding Agents for 3D Scene Reconstruction",
      "abstract": "A 3D scene reconstructed from a single image is most useful when represented not as a rendering or a fixed 3D output, but as an explicit scene program whose execution yields a scene that can be inspected, edited, and queried. We present LEGO-Anything, an Image-to-Code framework in which a coding agent iteratively writes and executes Blender code, inspects scenes and renderings, and revises the program. To evaluate end-to-end scene recovery, we introduce LEGO-Bench, a simulator-grounded benchmark with 208 images from 104 diverse indoor and outdoor scenes. LEGO-Bench separately scores artifact validity, visible-surface geometry, and rendered appearance. Its simulator-grounded design enables extensibility and precise automatic evaluation. Among evaluated agents, GPT-6-astra achieves the strongest overall results, with 53.4% indoor and 39.6% outdoor scores, yet substantial gaps remain between delivering valid scene artifacts and faithfully recovering scene geometry and appearance. Analysis of agent construction trajectories reveals three recurring issues: weak scene initialization, regressive edits during iteration, and unreliable self-evaluation. These findings motivate LEGO-Plugin, a training-free harness plugin for more controlled iterative scene construction, which improves all six evaluated models, with relative gains of up to 62.7% in overall score. Finally, we test whether reconstructed scenes can represent natural images and support vision tasks. In LEGO-World, we derive object detections, instance masks, and relative depth as deterministic queries on scenes reconstructed by GPT-6-astra. These readouts show non-trivial performance across all three tasks but fall well short of specialized vision models, suggesting that program-constructed scenes from current coding agents are a promising but not yet sufficiently precise representation of natural images.",
      "upvotes": 124,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lego-anything.com/",
      "comments": 2,
      "org": "Amazon Web Services",
      "url": "https://huggingface.co/papers/2609.36380",
      "arxiv_url": "https://arxiv.org/abs/2609.36380",
      "title_ja": "LEGO-Anything: 3Dシーン再構成のためのコーディングエージェント",
      "summary_ja": "単一画像からBlenderコードを生成・修正し、編集可能な3Dシーンを構築する。"
    },
    {
      "id": "2609.34981",
      "title": "What Makes World Action Models Generalize? An Empirical Study of Test-Time Future Modeling",
      "abstract": "World action models (WAMs) predict the future alongside actions during training. Due to the heavy computation cost of video denoising, whether the future must still be generated during inference is disputed: Explicit WAMs denoise it into clean frames along with every action chunk, whereas Latent WAMs discard it entirely for acceleration. We find that latent WAMs, despite matching explicit ones on in-distribution tasks, fail to retain the generalization benefits that originally motivated WAMs. To demonstrate this, we evaluate generalization along three axes: environmental perturbation, data efficiency, and task generalization. Controlled comparisons with a matched backbone, training data, and budget reveal consistent degradation across all three axes when the action expert no longer conditions on future representations. Further analysis shows that the gap arises almost entirely from the first denoising step: the benefit comes from preparing the future, not generating it. We therefore propose Simple-WAM, which simplifies future modeling into a single forward pass of fully noised video tokens and adapts the training-time noise schedule to this inference behavior. Across simulation and real-world tasks, Simple-WAM achieves the best of both worlds, leading explicit WAMs in generalization performance with efficiency comparable to Latent WAMs. Project Page: https://zrporz.github.io/Simple-WAM-Web/",
      "upvotes": 121,
      "github_stars": 66,
      "github_repo": "https://github.com/LeapLabTHU/Simple-WAM",
      "project_page": "https://zrporz.github.io/Simple-WAM-Web/",
      "comments": 2,
      "org": "Tsinghua-LeapLab",
      "url": "https://huggingface.co/papers/2609.34981",
      "arxiv_url": "https://arxiv.org/abs/2609.34981",
      "title_ja": "世界行動モデルの汎用性を決めるものは何か？",
      "summary_ja": "推論時に未来画像を明示的に生成することが、環境変化への汎用性維持に不可欠であると指摘。"
    },
    {
      "id": "2609.37200",
      "title": "Adaptive Reward Routing: Dynamic Multi-Reward Optimization for Joint Audio-Video Diffusion via Forward-Process RL",
      "abstract": "Multi-reward guided reinforcement learning (i.e., RL) offers a promising way to improve joint audio-video diffusion models along several complementary objectives, including modality-specific quality, cross-modal semantic alignment, and temporal synchronization. Its effectiveness, however, depends on two quantities that change during training: where reward-driven updates should act, and how competing rewards should be combined. Existing methods tend to rely on fixed routing and reward weights, failing to track evolving model functions. To address these limitations, we propose Adaptive Reward Routing to jointly adapt update locations and reward coordination during forward-process RL (i.e., DiffusionNFT) of joint audio-video diffusion models. Our method consists of two components. (i) Cross-Modal Influence-Guided Routing (Localizing Updates): We use bidirectional cross-attention responses as an efficient proxy for evolving cross-modal influence, dynamically reweighting token-aware losses and scaling gradients across cross-modal layers without additional model interventions. (ii) Preference-Preserving Modality-Aware Reweighting (Coordinating Rewards): We preserve predefined weights as preference priors and use branch-specific reward-gradient interactions as residual corrections after warm-up. This resolves evolving conflicts without letting dominant rewards suppress weak but essential objectives. Extensive experiments demonstrate consistent improvements in modality quality, semantic consistency, and audio-video synchronization over strong RL baselines. Ablations and mechanism analyses further validate the complementary benefits of adaptive update routing and reward coordination.",
      "upvotes": 117,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2609.37200",
      "arxiv_url": "https://arxiv.org/abs/2609.37200",
      "title_ja": "適応的報酬ルーティング：前方プロセスRLによる音画同時拡散の動的多報酬最適化",
      "summary_ja": "音と映像の品質や同期を最適化するため、訓練進度に応じて報酬の重みと更新箇所を調整。"
    },
    {
      "id": "2609.35259",
      "title": "On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics",
      "abstract": "On-policy learning has been argued to reduce catastrophic forgetting, produce sparser parameter updates, and improve generalisation. However, existing comparisons between supervised fine-tuning and reinforcement learning vary many factors simultaneously, making the contribution of rollout policy difficult to isolate. We study the effect of rollout policy in a controlled strong-to-weak distillation setting, by independently varying rollout policy, token-level KL direction, and learning rate across the Llama3 and Qwen2.5 model families and reasoning tasks spanning scientific, medical, and arithmetic domains. Our analysis reveals a nuanced picture of distillation dynamics in which rollout policy does not necessarily play a central role. Instead, token-level KL direction more clearly shapes task performance and output coverage, while learning rate governs forgetting and update sparsity. Analysis of KL gradients and experiments along a continuous student-teacher rollout-policy spectrum explain this pattern: forward KL is remarkably robust to rollout policy, with its performance stable and strong despite changes to the rollout policy, whereas reverse KL is substantially more sensitive and favours student-generated rollouts. On-policy data nevertheless improves generalisation to harder variants of the Countdown arithmetic task under both KL directions, although this advantage does not reliably persist after subsequent RLVR. Our broader conclusions remain robust to removing gradient clipping, using sampled KL estimators, and training on tasks requiring longer reasoning chains. Overall, our results challenge the view that on-policy rollouts are inherently preferable and show that their value depends critically on the objective, evaluation setting, and optimisation hyperparameters.",
      "upvotes": 114,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "University of Cambridge",
      "url": "https://huggingface.co/papers/2609.35259",
      "arxiv_url": "https://arxiv.org/abs/2609.35259",
      "title_ja": "オンポリシかオフポリシか？蒸留ダイナミクスの体系的調査",
      "summary_ja": "ロールアウト方針の影響を制御実験で調査し、KLの方向や学習率との複雑な関係を解明。"
    },
    {
      "id": "2609.39982",
      "title": "Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents",
      "abstract": "Terminal agents act through stochastic model generations, yet the ability to generate a useful action does not ensure its reliable execution. A poor command (e.g., wrong package install) can change the environment in ways that hinder subsequent progress, even when the model could generate a better alternative. We investigate whether allocating test-time compute at the model-harness boundary can improve action reliability and trajectory success, and what makes this allocation effective. To study these questions, we introduce Mid-Harness, which samples and verifies candidate actions before forwarding one for execution, while keeping the generator and harness unchanged. With a TMAX-9B generator, more action sampling yields little benefit under weak verification, whereas a capable verifier can exploit useful alternatives from the same generator. On TerminalBench-Lite, a GPT-5.6 Sol verifier raises Pass@1 from 50.00% for the base agent to 68.03% with 8 sampled actions. When the same TMAX-9B model serves as the verifier, pairwise verification performs best among the evaluated verification mechanisms. Distilling responses from the stronger verifier into TMAX-9B further improves Pass@1, while leaving the action generator unchanged. With TMAX-9B on TerminalBench-Lite, combining action and trajectory scaling reaches higher success at lower estimated token cost than generating more trajectories alone. Mid-Harness also improves performance across additional models, benchmarks, and harnesses. These findings identify action scaling as a promising target for test-time compute scaling in terminal agents.",
      "upvotes": 110,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://byungkwanlee.github.io/MidHarness-page/",
      "comments": 5,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2609.39982",
      "arxiv_url": "https://arxiv.org/abs/2609.39982",
      "title_ja": "Mid-Harness: 端末エージェントにおけるモデルとハーネス間の行動スケーリング",
      "summary_ja": "実行前に候補行動をサンプリング・検証することで、環境を壊さずタスク成功率を向上。"
    },
    {
      "id": "2609.35432",
      "title": "Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence",
      "abstract": "Vision-language-action (VLA) and world-action (WAM) models map observations and instructions directly to robot actions. This directness ties a policy to training: minor layout or viewpoint changes cause failure, and instructions generalize poorly. The root cause lies in representation: task requirements, conditions, progress, and failure recovery are implicitly encoded in action sequences, making them difficult to inspect or revise. Digital coding agents offer a precedent: LLMs call tools, verify results, and revise from feedback as executable code. The same working pattern of explicit state, manageable execution, and revisable procedures underlies generalization and long-horizon execution in the physical world, letting physical experience return as reusable programs, memory, or evidence. We propose Physical Coding, representing task state and execution as code. Code as World records objects, relations, constraints, and progress; Code as Policy organizes planning, verification, recovery, and execution. We build HexaAnything, which calls perception, planning, and control tools, including VLA/WAM policies, and makes in-the-loop decisions from external feedback. Verified traces become data and memory, enabling evolution from tools and Harness to model weights, architectures, and ultimately hardware and task design. On RoboCasa365, HexaAnything improves Composite-Unseen and overall success over XR-1 VLA, and its Harness-trained HexaModel beats the base on every split, indicating code traces internalize physical execution. On PhyBench and a dual-arm AgileX robot, the agent autonomously completes physics experiments and most tabletop tasks, often faster than published results. We observe data, model, and tool self-evolution; future work targets weight internalization, autonomous redesign of architectures, languages, representations, and tasks, and deployment in manufacturing and science.",
      "upvotes": 106,
      "github_stars": 46,
      "github_repo": "https://github.com/HexaFuture/PhysicalCoding",
      "project_page": "https://hexafuture.ai/blog/physical-coding",
      "comments": 2,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2609.35432",
      "arxiv_url": "https://arxiv.org/abs/2609.35432",
      "title_ja": "自己進化するコーディングエージェント：デジタルから物理世界の知能へ",
      "summary_ja": "ロボット操作をコードとして記述・検証・修正することで、高い汎用性と長期実行を実現。"
    },
    {
      "id": "2609.40340",
      "title": "EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery",
      "abstract": "Evolutionary search with large language models (LLMs) can stall when progress requires external knowledge the model lacks. Supplying relevant documents helps, but simply adding web search tool can keep returning the same pages as solutions change. We introduce EvoDuet, a bi-level optimization method that co-evolves solutions and search queries with fixed model parameters. At each iteration, a retrieval gate lets the LLM assess its knowledge gap and choose to retrieve new documents, reuse stored ones, or proceed without them. An inner loop refines queries and ranks documents by the solution scores they are predicted to yield; an outer loop generates candidates in parallel from these documents and records the evaluated outcomes for later searches. Across 21 optimization tasks with one candidate per iteration, EvoDuet raises OpenEvolve's normalized discovery gain from 74.1% to 78.0% with GPT-5.6-Luna and from 61.3% to 82.3% with Gemini-3.8-Flash, whereas Qwen3.5-9B does not benefit. Our best runs surpass the previously reported best scores on eight tasks, including Swap Reduction on Q20 and Rosetta, and match them on three more. EvoDuet also improves with other scaffolds (e.g., Top-K, EvoX) on Sums/Diffs and Denoising, demonstrating its applicability across evolutionary search scaffolds.",
      "upvotes": 104,
      "github_stars": 4,
      "github_repo": "https://github.com/Open-Galapagos/EvoDuet",
      "project_page": "https://open-galapagos.github.io/evoduet_project_page/",
      "comments": 1,
      "org": "Minnesota NLP",
      "url": "https://huggingface.co/papers/2609.40340",
      "arxiv_url": "https://arxiv.org/abs/2609.40340",
      "title_ja": "EvoDuet: 科学的発見のためのWeb検索とタスク解決の二段階共進化",
      "summary_ja": "解法と検索クエリを同時に進化させ、知識不足を適宜Web検索で補いながら問題を解決。"
    },
    {
      "id": "2609.38155",
      "title": "Beyond the Timeline: Augmenting Long-Video Memory with Grounded Entity Biographies",
      "abstract": "Answering questions about long videos often requires connecting events involving the same objects across hours or days. Chronological descriptions and text-derived entities can leave physical identity unresolved: different objects may share a description, while observations of the same object remain disconnected across events. Retrieving relevant events therefore does not necessarily recover the \"biography\" of the particular entity a question concerns. To address this, we introduce Grounded Entity Biographies (GEB), a long-video memory framework that groups visually grounded observations of the same physical instance across clips into retrievable biographies while preserving the context of each moment. During question answering, the biography is retrieved alongside episodic evidence, allowing the model to follow an entity through events using identity links established during memory construction. Evaluations across four benchmarks, including day-long and week-long recordings, demonstrate improvements over prior memory frameworks in both multiple-choice and open-ended question answering. On EgoLifeQA, GEB achieves 72.0% accuracy, 4.4 percentage points above the best published result. Ablations show that grounded identity association and biography reading both contribute to the gains, which additional descriptions alone do not fully recover.",
      "upvotes": 99,
      "github_stars": 53,
      "github_repo": "https://github.com/rhfeiyang/GEB",
      "project_page": "https://geb-video.github.io/",
      "comments": 1,
      "org": "Amazon Science",
      "url": "https://huggingface.co/papers/2609.38155",
      "arxiv_url": "https://arxiv.org/abs/2609.38155",
      "title_ja": "タイムラインを超えて：接地された個体伝記による長尺動画記憶の拡張",
      "summary_ja": "長尺動画内の特定個体の出現を視覚的に紐付け、時間的に離れたイベントを「伝記」で統合。"
    },
    {
      "id": "2609.40325",
      "title": "WorldAuditBench: Interactive 3D World Auditing with Multimodal Agents",
      "abstract": "As interactive 3D worlds are increasingly used to study intelligent behavior, it becomes important to develop efficient pipelines for identifying anomalies in these simulated environments, such as floating objects, traversable walls, or objects inconsistent with the surrounding scene. Multimodal AI systems, including vision-language models (VLMs) and vision-language-action models (VLAs), have shown potential for automating this task. However, 3D world auditing is complex, requiring the close coupling of two distinct capabilities: action, to navigate the 3D world and search for anomalies systematically and efficiently; and visual reasoning, to understand the environment and identify anomalies from multimodal observations. It remains largely unexplored whether multimodal agents can effectively couple these two capabilities, using visual reasoning to identify potential anomalies while taking actions to validate them. In this paper, we introduce WorldAuditBench, a benchmark for 3D world auditing comprising 213 anomaly tasks across 13 environments built with Unreal Engine 5 and Three.js, spanning five anomaly families. We evaluate five frontier models under a fixed exploration budget using two auditing paradigms: VLA-based exploration followed by VLM-based anomaly identification, and an end-to-end VLM agent in which visual reasoning directly guides action selection. Across the evaluated models and two paradigms, success rates range from 6.6% to 42.3%, substantially below human performance (83.4%). Through the task of world auditing, WorldAuditBench provides a testbed for studying how multimodal agents couple action and visual reasoning in interactive 3D environments, while highlighting current limitations in their ability to gather and interpret evidence during exploration.",
      "upvotes": 95,
      "github_stars": 4,
      "github_repo": "https://github.com/UCSB-NLP-Chang/WorldAuditBench",
      "project_page": "https://ucsb-nlp-chang.github.io/WorldAuditBench/",
      "comments": 3,
      "org": "University of California, Santa Barbara",
      "url": "https://huggingface.co/papers/2609.40325",
      "arxiv_url": "https://arxiv.org/abs/2609.40325",
      "title_ja": "WorldAuditBench: マルチモーダルエージェントによる対話型3D世界監査",
      "summary_ja": "3D空間内を探索・推論し、浮遊物や通り抜け可能な壁などの異常を自動検知するベンチ。"
    },
    {
      "id": "2609.37372",
      "title": "Think Before You Score: Thinking Reward Model for Visual Generation",
      "abstract": "Visual reward models are essential for evaluating and improving visual generation models, yet existing approaches typically map task conditions and candidate outputs directly to scalar rewards, leaving implicit what should be evaluated for each individual case. We introduce Think Before You Score, a paradigm that explicitly determines what matters for each case before judging how well the candidate performs. Following this principle, we propose the Thinking Reward Model (TRM), which formulates case-adaptive rubrics, performs rubric-guided assessment, and produces fine-grained pointwise rewards. We further observe that conventional pairwise preference optimization can induce score polarization, and introduce Pairwise Dual-Group Relative Policy Optimization (PD-GRPO), which leverages pairwise supervision to improve reward discrimination while preserving fine-grained pointwise scoring. Extensive experiments on image generation and editing reward-modeling benchmarks demonstrate that TRM achieves state-of-the-art performance among open-source reward models while remaining highly competitive with proprietary alternatives. Moreover, using TRM as a reward for reinforcement learning consistently improves diverse visual generation models, demonstrating that its fine-grained, case-adaptive rewards translate into effective optimization signals for visual generation.",
      "upvotes": 94,
      "github_stars": 32,
      "github_repo": "https://github.com/bxhsort/Thinking_Reward_Model",
      "project_page": "https://bxhsort.github.io/Thinking-Reward-Model/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2609.37372",
      "arxiv_url": "https://arxiv.org/abs/2609.37372",
      "title_ja": "採点前に思考せよ：視覚生成のための思考報酬モデル",
      "summary_ja": "評価基準を個別に思考してから採点することで、より詳細かつ正確な画像評価を実現。"
    },
    {
      "id": "2609.36322",
      "title": "Periodic Weak Spots: Phase Sensitivity from Chunked KV-Cache Compression",
      "abstract": "Chunked KV-cache compression reduces the memory and attention costs of long-context inference by compressing windows of consecutive tokens into fewer cache entries at a fixed stride. Such compression also introduces a new positional coordinate: a token's phase, or its position relative to compression-window boundaries. We uncover a systematic asymmetry in models using such compression: the same information can be easy to retrieve at one phase and difficult at another. We call this periodic variation in retrieval performance phase sensitivity. In large open-weight models with such compression, long-context retrieval accuracy can differ by up to 40 percentage points across phases, revealing periodic weak spots that average benchmark scores can conceal. To investigate this behavior, we pretrain a family of transformers from scratch across multiple KV-compression designs, reproducing phase sensitivity across the variants. Mechanistic analysis using causal interventions in these models reveals phase specialization: different attention components contribute asymmetrically to retrieving information at different source phases. We further analyze idealized retrieval models, showing how gradient flow dynamics may favor sharp phase specialization. Evaluating models with chunked KV-cache compression thus requires measuring across compression phases: high average accuracy can coexist with systematic positional failures.",
      "upvotes": 92,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ultimatejupiter.github.io/blog/periodic-weak-spots/",
      "comments": 3,
      "org": "ByteDance Seed",
      "url": "https://huggingface.co/papers/2609.36322",
      "arxiv_url": "https://arxiv.org/abs/2609.36322",
      "title_ja": "周期的な弱点：チャンク化KVキャッシュ圧縮によるフェーズ感度",
      "summary_ja": "KV圧縮の窓境界との相対位置により、情報の読み取り精度が周期的に激変する現象を特定。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Prime Intellect Launches Prime Inference, Serving 600B Tokens Daily",
      "summary": "Prime Intellect launches its inference platform serving 600B tokens daily, with NVFP4 KV compression, prefill/decode disaggregation, and sub-second TTFT on GB200 NVL72.",
      "url": "https://alphasignal.ai/news/prime-intellect-launches-prime-inference-serving-600b-tokens-daily",
      "published": "2026-10-03T07:17:06+09:00",
      "title_ja": "Prime Intellectが推論プラットフォームPrime Inferenceを開始",
      "summary_ja": "1日6000億トークンを処理し、GB200 NVL72上で1秒未満のTTFTを実現する高速推論基盤。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Meta's Muse Spark Helped Mathematicians Solve Five Open Research Problems",
      "summary": "Meta's Muse Spark worked alongside mathematicians through the standard chat interface to co-author six research papers, five of which answer previously open questions.",
      "url": "https://alphasignal.ai/news/meta-s-muse-spark-helped-mathematicians-solve-five-open-research-problems",
      "published": "2026-10-03T04:11:30+09:00",
      "title_ja": "MetaのMuse Sparkが数学の5つの未解決問題の解決を支援",
      "summary_ja": "数学者が対話型AIを活用し、5つの未解決への回答を含む6つの研究論文を共同執筆。"
    },
    {
      "lab": "OpenAI",
      "title": "A model guide for the GPT-6 family",
      "summary": "Learn how startups can choose GPT-6 models, tune reasoning effort, improve prompts and skills, coordinate tools, and prepare workflows for production.",
      "url": "https://openai.com/index/practical-guide-building-gpt-6",
      "published": "2026-10-03T01:15:00+09:00",
      "title_ja": "GPT-6ファミリー向けモデルガイド",
      "summary_ja": "スタートアップがGPT-6を選択し、推論の取り組みやツール連携を最適化するためのガイド。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google Sends Trillium TPUs to Orbit to Power AI Beyond Earth's Grid",
      "summary": "Google's Project Suncatcher just put four Trillium TPUs into low Earth orbit on a Planet-built satellite, testing whether AI compute can survive and run in space.",
      "url": "https://alphasignal.ai/news/google-sends-trillium-tpus-to-orbit-to-power-ai-beyond-earth-s-grid",
      "published": "2026-10-03T00:53:39+09:00",
      "title_ja": "Googleが地球外AI駆動のためTrillium TPUを軌道上へ送出",
      "summary_ja": "低軌道衛星に4つのTrillium TPUを搭載し、宇宙環境でのAI計算能力の維持を検証。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open-sourcing AstaBrief, the fast report-generation model in Asta",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/astabrief",
      "published": "2026-10-03T00:19:50+09:00",
      "title_ja": "Asta内の高速レポート生成モデル「AstaBrief」をオープンソース化",
      "summary_ja": "Astaで利用されている高速なレポート生成モデルAstaBriefが公開された。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google Moves Gboard's Private AI Training Into Secure Server Enclaves",
      "summary": "Google rebuilt Federated Learning around Trusted Execution Environments, moving gradient computation server-side with externally verifiable differential privacy guarantees.",
      "url": "https://alphasignal.ai/news/google-moves-gboard-s-private-ai-training-into-secure-server-enclaves",
      "published": "2026-10-03T00:18:23+09:00",
      "title_ja": "GoogleがGboardのプライベートAI学習を安全なサーバー領域へ移行",
      "summary_ja": "検証可能な差分プライバシーを保証し、勾配計算をサーバー側の信頼実行環境で実施。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能なプライバシー保護学習に向けて",
      "summary_ja": "モバイルシステムにおいて、連合データからプライバシーを保護しつつ学習する手法の追求。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Gender Bias Audits Across Ten AI Models Reveal Wildly Inconsistent Results",
      "summary": "A new audit of ten frontier models finds gender bias is pervasive but inconsistent, with some systems behaving in opposite directions on identical prompts.",
      "url": "https://alphasignal.ai/news/gender-bias-audits-across-ten-ai-models-reveal-wildly-inconsistent-results",
      "published": "2026-10-02T21:02:05+09:00",
      "title_ja": "10種のAIモデルの性別バイアス監査で極めて不一致な結果が判明",
      "summary_ja": "主要モデルに性別バイアスが蔓延しているが、同一プロンプトでも挙動が逆になるなど不整合。"
    },
    {
      "lab": "AlphaSignal",
      "title": "CopilotKit Ships OpenDots to Give AI Agents Web, Voice, and Slack Access",
      "summary": "CopilotKit released OpenDots, a self-hostable template for persistent AI coworkers with their own computers, Slack access, and voice calls.",
      "url": "https://alphasignal.ai/news/copilotkit-ships-opendots-to-give-ai-agents-web-voice-and-slack-access",
      "published": "2026-10-02T15:14:26+09:00",
      "title_ja": "CopilotKitがAIエージェントにWebやSlackへのアクセス権を与えるOpenDotsを公開",
      "summary_ja": "Slackや音声通話、自身のPC操作が可能な自律型AI同僚を構築できるテンプレート。"
    },
    {
      "lab": "Hugging Face",
      "title": "AutoSynthData: Generating Training Data for Enterprise Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata",
      "published": "2026-10-02T13:01:31+09:00",
      "title_ja": "AutoSynthData：企業向けエージェント用学習データの生成",
      "summary_ja": "エンタープライズ領域のエージェント開発に不可欠な学習データを自動生成する手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Chatham scales its capital markets expertise with OpenAI",
      "summary": "Chatham Financial uses Codex and GPT-5.6 to build technology and redesign workflows, cutting trade validation from 30 minutes to under 4.",
      "url": "https://openai.com/index/chatham-financial",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "ChathamがOpenAIの技術で資本市場の専門知識をスケール",
      "summary_ja": "GPT-5.6等を活用し、取引検証時間を30分から4分未満に短縮するワークフローを構築。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "多言語音声モデルにおける言語識別能力が言語学習を改善",
      "summary_ja": "学習中に言語を識別する力を強めることで、多言語モデル特有の性能不足を解消し精度を向上。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "拡散モデルにおける信頼性の限界",
      "summary_ja": "トークン間の依存関係が拡散モデルの学習分布一致に与える影響と制約についての分析。"
    },
    {
      "lab": "OpenAI",
      "title": "The eternal complement",
      "summary": "Advanced AI may matter most for the routine work behind breakthrough ideas. Explore why execution could shape the next economy and the pace of progress.",
      "url": "https://openai.com/index/the-eternal-complement",
      "published": "2026-10-02T02:00:00+09:00",
      "title_ja": "永遠の補完物",
      "summary_ja": "高度なAIが画期的なアイデアの背後にある定型業務を担うことで、経済と進歩の速度を形成。"
    },
    {
      "lab": "OpenAI",
      "title": "How Albertsons Companies is reimagining retail from the inside out",
      "summary": "Albertsons Cos. is using ChatGPT Enterprise and the OpenAI API to help teams work faster and make grocery shopping easier for millions of customers.",
      "url": "https://openai.com/index/albertsons-reimagining-retail",
      "published": "2026-10-02T01:00:00+09:00",
      "title_ja": "Albertsons Companiesが小売業を内側から再構築する方法",
      "summary_ja": "ChatGPT Enterpriseを活用し、チームの業務高速化と顧客の買い物体験向上を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "The Den frees up 10-15 hours a week to grow with ChatGPT Work",
      "summary": "As it opens a new location, the social club prepares grant applications in 2 hours instead of 3 days and liquor-license materials in 3 hours instead of 4 days.",
      "url": "https://openai.com/index/the-den-family-social",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "The DenがChatGPT Workで週10〜15時間の時間を創出",
      "summary_ja": "助成金申請やライセンス関連書類の作成時間を大幅に短縮し、事業拡大への注力を可能に。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的MLエンジニアリングに強力なエージェント用フレームワークはどこまで必要か",
      "summary_ja": "複雑なオーケストレーターよりも、実行環境に直接アクセスできる単純なモデルの活用を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "RLTL;DR: Self-Improvement by Internalizing Self-Generated Feedback",
      "summary": "The common paradigm of reinforcement learning with verifiable rewards (RLVR) is to let agents make multiple attempts at a task, and optimize towards the successful ones. This becomes problematic in the realms of self-improvement, where tasks are so difficult that the agent has a low or even no chance of success, and where there are no teacher models or example solutions to distill from. In this paper, we introduce RLTL;DR. After each failed attempt, we show the policy the verifier outputs and let it write its own feedback, in the form of a single TL;DR insight. The next rollout is conditioned…",
      "url": "https://machinelearning.apple.com/research/rltl-dr-self-improvement",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "RLTL;DR：自己生成フィードバックの内部化による自己改善",
      "summary_ja": "失敗時に自ら「TL;DR（要約）」形式の洞察を書くことで、正解のない難題を自己改善学習。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "Googleが次世代のフロンティアAIモデルとして「Gemini 4 Argon」を発表。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの導入",
      "summary_ja": "生物学的機能を維持したまま、AI生成タンパク質に電子透かしを入れる技術の概念実証。"
    },
    {
      "lab": "OpenAI",
      "title": "Disrupting a coordinated model-distillation campaign",
      "summary": "Learn how OpenAI disrupted a campaign to extract protected model reasoning and is strengthening defenses against adversarial distillation.",
      "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
      "published": "2026-09-30T19:30:00+09:00",
      "title_ja": "組織的なモデル蒸留キャンペーンの阻止",
      "summary_ja": "OpenAIがモデルの推論過程を抽出しようとする試みを阻止し、防御を強化した事例の詳細。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Effectiveness-Fluency Trade-Off in LLM Conditioning: A Systematic Study",
      "summary": "Controlling the output of Large Language Models (LLMs) is a central challenge for their reliable deployment, yet a clear understanding of the involved trade-offs remains elusive. Current approaches to conditioning are often evaluated with a narrow focus on their effectiveness at injecting or removing a target concept, neglecting generation quality. We systematically investigate a range of conditioning methods in both injection and removal scenarios. We find that efficient steering methods frequently achieve conditioning at a steep cost to fluency. Furthermore, we identify a critical yet…",
      "url": "https://machinelearning.apple.com/research/effectiveness-fluency-llm-conditioning",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "LLMの条件付けにおける有効性と流暢さのトレードオフに関する系統的研究",
      "summary_ja": "概念の操作には成功しても生成の質や流暢さが大幅に低下する、条件付け手法の課題を調査。"
    },
    {
      "lab": "Apple ML",
      "title": "SCLATE: A Substrate for Continual-Learning Agent Training and Evaluation",
      "summary": "Continual-learning agents are systems of models, harnesses, and memory operating over long multi-session horizons. Evaluating and training them requires interleaving tasks with agent-side events such as session stop and start, crons, and memory consolidation. Yet existing benchmarks and training frameworks schedule only the benchmark’s own events, leaving each benchmark and agent pair to build a custom scheduling loop. We present SCLATE, an execution substrate where benchmarks and unmodified agents each add their events to one open event scheduler through an adapter. A hybrid simulated clock…",
      "url": "https://machinelearning.apple.com/research/sclate-agent-training-evaluation",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "SCLATE：継続学習エージェントの訓練と評価のための基盤",
      "summary_ja": "長期・複数セッションにわたるエージェント評価のため、イベント管理を統合する実行基盤。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning",
      "summary": "",
      "url": "https://huggingface.co/blog/open-tts-leaderboard",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "Open TTS Leaderboard：多言語音声合成と音声クローンのスケーラブルな評価",
      "summary_ja": "多言語対応のテキスト読み上げおよび音声クローニング技術を評価するための指標と基準。"
    },
    {
      "lab": "Google Research",
      "title": "How Diffusion Controller unifies and simplifies AI image generation",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/how-diffusion-controller-unifies-and-simplifies-ai-image-generation/",
      "published": "2026-09-30T03:38:27+09:00",
      "title_ja": "Diffusion ControllerがAI画像生成を統合・簡素化する方法",
      "summary_ja": "アルゴリズムと理論を通じて、AIによる画像生成プロセスを統一し簡略化する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-tabular",
      "published": "2026-09-30T00:30:38+09:00",
      "title_ja": "NVIDIA Kumo Tabularが表形式データ予測の精度と効率で新境地を開拓",
      "summary_ja": "表形式データの予測において、高い精度と効率性を両立する新たなベンチマークを確立。"
    },
    {
      "lab": "Hugging Face",
      "title": "Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source",
      "published": "2026-09-29T22:07:00+09:00",
      "title_ja": "事実だけでなくソースを正しく：MCPエージェントのためのソース認識検証",
      "summary_ja": "AIエージェントが情報の正確性だけでなく、参照元（ソース）を正しく特定するための検証手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Holo4: powering generalist computer-use agents",
      "summary": "",
      "url": "https://huggingface.co/blog/Hcompany/holo4",
      "published": "2026-09-28T18:44:05+09:00",
      "title_ja": "Holo4：汎用的なコンピュータ操作エージェントの強化",
      "summary_ja": "コンピュータを自在に操作できる汎用AIエージェントを動かすための強力な基盤技術。"
    },
    {
      "lab": "Google Research",
      "title": "Automating coherent long-form video generation",
      "summary": "Generative AI",
      "url": "https://research.google/blog/coherent-long-form-video-generation/",
      "published": "2026-09-25T04:40:00+09:00",
      "title_ja": "一貫性のある長尺動画生成の自動化",
      "summary_ja": "生成AIを用いて、一貫性を保ちながら長時間のビデオコンテンツを自動生成する技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 3.8 Live with Live Avatar",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-38-live-with-live-avatar/",
      "published": "2026-09-25T01:20:39+09:00",
      "title_ja": "Gemini 3.8 LiveとLive Avatarの導入",
      "summary_ja": "リアルタイムなアバター表示を伴うGemini 3.8のライブ対話機能。"
    }
  ]
};
