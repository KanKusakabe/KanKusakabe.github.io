window.papersData = {
  "updated_at": "2026-10-02 10:23 JST",
  "arxiv": [
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
      "upvotes": 499,
      "github_stars": 5051,
      "github_repo": "https://github.com/EverMind-AI/Raven",
      "project_page": "https://raven.evermind.ai/",
      "comments": 3,
      "org": "EverMind",
      "url": "https://huggingface.co/papers/2609.33439",
      "arxiv_url": "https://arxiv.org/abs/2609.33439",
      "title_ja": "Raven: 構成可能なエージェント知能のためのハーネスのハーネス",
      "summary_ja": "特定ドメインに縛られない汎用性の高いハーネスを自動構築・進化させる、オープンソースのマルチエージェントエコシステム。"
    },
    {
      "id": "2609.08183",
      "title": "NeoHorse-1: Towards Recursive Self-Improvement via Agentic Post-Training with Routing Harness",
      "abstract": "Recursive self-improvement (RSI) requires a concrete mechanism through which an AI system observes its capabilities and converts that evidence into the next round of learning. We present NeoHorse-1, a family of agent-native models developed to explore this path through agentic post-training. Our system combines a heterogeneous model pool with intelligent routing, recording the predicted capability demand, selected service tier, and subsequent interaction for each user turn. These records are converted into training examples that preserve interleaved reasoning, tool calls, and harness context, and are admitted through structural validation, six-dimensional semantic evaluation, and subscene-level labeling. Routing signals organize supervised fine-tuning into a three-stage curriculum and extend to routing-guided on-policy distillation, where a teacher supervises student-generated responses under the same progression. Capability-guided allocation then converts evaluation feedback into the next training mixture, closing an evaluation-selection-update loop in which what the system learns to do shapes what it learns from next. Across eleven benchmarks covering harness-based agents, tool use, coding, and instruction following, post-training raises the macro-average from 58.94 to 64.87 at 4B and from 65.60 to 69.04 at 9B, substantially narrowing the aggregate gap between the post-trained 4B model and the 9B base model. NeoHorse-1 provides an initial prototype of this feedback-driven process and a path toward harness-mediated RSI across successive iterations.",
      "upvotes": 326,
      "github_stars": 1402,
      "github_repo": "https://github.com/TokenRhythm/NeoHorse",
      "project_page": "https://huggingface.co/collections/TokenRhythm/neohorse-1",
      "comments": 8,
      "org": "TokenRhythm",
      "url": "https://huggingface.co/papers/2609.08183",
      "arxiv_url": "https://arxiv.org/abs/2609.08183",
      "title_ja": "NeoHorse-1: ルーティングハーネスを用いたエージェント的ポストトレーニングによる再帰的自己改善",
      "summary_ja": "エージェント的な学習サイクルを通じて、自己の能力を観察し次世代の学習へと変換する再帰的自己改善モデル。"
    },
    {
      "id": "2609.33325",
      "title": "VisionHOPE: Visual Backbones as Self-Modifying Learning Systems",
      "abstract": "Visual backbones have evolved from Convolutional Neural Networks (CNNs) with local aggregation to Vision Transformers (ViTs) with global interactions, State-Space Models (SSMs) with input-dependent state transitions, and Test-Time Training (TTT) layers that adapt an inner learner while processing an image. Across this progression, visual computation has become increasingly adaptive to each input, yet the rules governing that adaptation remain largely prescribed by the trained backbone. We introduce VisionHOPE, the first generic visual backbone formulated as a self-modifying learning system, in which what the model remembers and how it learns co-evolve within an image. Building on the self-referential construction of Nested Learning (NL), VisionHOPE realizes this co-evolution through five coupled memories that store content, generate key and value representations, and govern learning rate and retention. These memories evolve jointly as visual context accumulates along each scan. However, directly applying the unconstrained self-referential update to a visual backbone leads to instability. We therefore derive a stability-matched step-size control scheme that combines a soft cap on self-referential injection with a spectral clamp on the retained memory transition, and prove that the resulting memory dynamics are non-expansive along each scan. For two-dimensional feature maps, we adapt NL's chunk formulation by aligning chunks with image rows and columns across four directional scans. The proposed VisionHOPE achieves competitive results on ImageNet-1K, COCO, and ADE20K, establishing self-modifying learning systems as a practical foundation for general-purpose visual backbones. The code is available at https://github.com/PSRben/VisionHOPE.",
      "upvotes": 319,
      "github_stars": 391,
      "github_repo": "https://github.com/PSRben/VisionHOPE",
      "project_page": "",
      "comments": 2,
      "org": "Mininglamp Technology",
      "url": "https://huggingface.co/papers/2609.33325",
      "arxiv_url": "https://arxiv.org/abs/2609.33325",
      "title_ja": "VisionHOPE: 自己修飾学習システムとしての視覚バックボーン",
      "summary_ja": "画像処理中にモデルの記憶と学習方法が共進化する、初の自己修飾型学習システムを定式化した汎用視覚バックボーン。"
    },
    {
      "id": "2605.23904",
      "title": "SkillOpt: Executive Strategy for Self-Evolving Agent Skills",
      "abstract": "Agent skills today are hand-crafted, generated one-shot, or evolved through loosely controlled self-revision, none of which behaves like a deep-learning optimizer for the skill, and none of which reliably improves over its starting point under feedback. We argue the skill should instead be trained as the external state of a frozen agent, with the same discipline that makes weight-space optimization reproducible. SkillOpt is, to our knowledge, the first systematic controllable text-space optimizer for agent skills: a separate optimizer model turns scored rollouts into bounded add/delete/replace edits on a single skill document, and an edit is accepted only when it strictly improves a held-out validation score. A textual learning-rate budget, rejected-edit buffer, and epoch-wise slow/meta update make skill training stable while adding zero inference-time model calls at deployment. Across six benchmarks, seven target models, and three execution harnesses (direct chat, Codex, Claude Code), SkillOpt is best or tied on all 52 evaluated (model, benchmark, harness) cells and beats every per-cell competitor among human, one-shot LLM, Trace2Skill, TextGrad, GEPA, and EvoSkill skills. On GPT-5.5 it lifts the average no-skill accuracy by +23.5 points in direct chat, by +24.8 inside the Codex agentic loop, and by +19.1 inside Claude Code. Transfer experiments further show that optimized skill artifacts retain value when moved across model scales, between Codex and Claude Code execution environments, and to a nearby math benchmark without further optimization.",
      "upvotes": 263,
      "github_stars": 17934,
      "github_repo": "https://github.com/microsoft/SkillOpt",
      "project_page": "https://microsoft.github.io/SkillOpt/",
      "comments": 5,
      "org": "Microsoft Research",
      "url": "https://huggingface.co/papers/2605.23904",
      "arxiv_url": "https://arxiv.org/abs/2605.23904",
      "title_ja": "SkillOpt: 自己進化するエージェントスキルのための実行戦略",
      "summary_ja": "エージェントのスキルを外部状態として扱い、スコアに基づきテキストベースで厳密に改善・編集する初の系統的な最適化手法。"
    },
    {
      "id": "2609.33757",
      "title": "YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality",
      "abstract": "Symbolic models make melody, harmony, rhythm, and form explicit but typically stop before a finished recording; audio models produce complete songs while leaving composition implicit. We introduce YuE2, which unifies symbolic and audio music generation at frontier quality through symbolic planning. A single AR-NAR Mixture-of-Transformers (MoT) first writes a readable score specifying melody and harmony, expands it into semantic music tokens, and realizes it as full-song audio. In comparisons using the same checkpoint, experts prefer symbolic planning for overall quality and musicality, with 49.3% of overall preferences versus 34.6% without planning. Experts also favor the unified model over a separate language model and diffusion Transformer. On WildSongBench, YuE2 scores 6.73 on SongBench Global Avg, exceeding all evaluated public baselines. Selecting from eight candidates (best-of-8), YuE2 reaches 6.96, the highest observed mean among all evaluated systems. Expert listening further establishes its competitiveness with proprietary song generators, favoring best-of-8 over Suno v4.5 and yielding nearly balanced preferences against Suno v5. To learn this generation process from recordings without aligned scores, we introduce MERT2 and SheetSage2 to supply semantic and symbolic supervision. MERT2 sets a new state of the art in music representation learning, surpassing previous best results on 14 of 15 MARBLE metrics; SheetSage2 leads 12 of 15 benchmark-metric pairs in our lead-sheet transcription comparison. The same checkpoint follows score edits while largely preserving unedited musical content and generates zero-shot covers without cover-specific training. Its readable score also enables agentic music editing, with external language models translating user feedback into revisions of the composition.",
      "upvotes": 239,
      "github_stars": 10672,
      "github_repo": "https://github.com/multimodal-art-projection/YuE",
      "project_page": "https://map-yue2.github.io/",
      "comments": 3,
      "org": "Multimodal Art Projection",
      "url": "https://huggingface.co/papers/2609.33757",
      "arxiv_url": "https://arxiv.org/abs/2609.33757",
      "title_ja": "YuE2: 記号的・オーディオ音楽生成をフロンティア品質で統合",
      "summary_ja": "記号的プランニングによりメロディ、ハーモニー、リズムを明示的に制御し、フルソングのオーディオ生成までを高品質に統合。"
    },
    {
      "id": "2609.28654",
      "title": "Training Object Permanence in World Models",
      "abstract": "Object permanence and solidity are hallmarks of human cognitive priors. Recent studies show that video generation models, a paradigmatic class of current world models, have begun to show emerged reasoning abilities, making them ideal candidates for building human-like physical intelligence. Do video models have emerged object permanence in them? If not, could we train them with a core-cognition inspired dataset? We introduce WROP (World Reasoning with Object Permanence), a data infrastructure of 150 hand-designed cognitive science inspired tasks, divided into six cognitive categories. We build Blender generators that randomize speed, lighting, camera angle, and other nuisance parameters while preserving each task's cognitive structure, yielding 10,000+ samples per task. We release a 1.5M-sample training corpus and a 300-question exam. On this exam we evaluate 14 video models: 3 reference-to-video, 7 edit, and 4 continuation, among which PWM-WROP, our 16B world model. In a blind pairwise Elo study, PWM-WROP ranks first among continuation models and third overall, behind only a statistical tie between two reference-to-video models. We release the data, exam, model answers, scores, weights, and PWM, our native-PyTorch training stack on AWS Trainium2.",
      "upvotes": 238,
      "github_stars": 417,
      "github_repo": "https://github.com/hokindeng/object-permanence",
      "project_page": "https://www.object-permanence.world/",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2609.28654",
      "arxiv_url": "https://arxiv.org/abs/2609.28654",
      "title_ja": "ワールドモデルにおける物体の永続性訓練",
      "summary_ja": "認知科学に基づく150のタスクを含むWROPデータセットにより、ビデオ生成モデルに物体の永続性や物理的知能を学習させる手法。"
    },
    {
      "id": "2609.24972",
      "title": "RRSI: Regularized Recursive Self-Improvement of Agent Harnesses",
      "abstract": "An LLM agent's capability is largely magnified by its harness, namely the prompts, control flow, tooling, memory, and context management surrounding the frozen backbone model. Recent methods increasingly automate this process by iteratively proposing and selecting component-wise edits of an agent harness, practically establishing a form of recursive self-improvement (RSI) at the agent-system level. However, such recursive evolution may overfit by memorizing the training tasks, showing large in-distribution gains that shrink or even vanish on out-of-distribution benchmarks. We introduce Regularized Recursive Self-Improvement of Agent Harnesses (RRSI), which incorporates the principles of regularizations into harness self-improvement by constraining the evolution candidate proposal and selection. The proposer operates with a temporally annealed budget, limiting how many edits a candidate can bundle, and it encourages unexplored trajectories based on evolution history. The selector is equipped with a critic and a pruner: the critic screens benchmark-specific proposals, while the pruner, removes changes that are too small, too expensive, or no longer useful. Together these constraints favor reusable agent mechanisms over benchmark-specific ones or even noises. Across eight benchmarks spanning coding, agentic workspace and engineering design tasks, RRSI gains up to 14.1 points on the split it evolves against and up to 4.7 points on the five out-of-distribution benchmarks, while producing a harness that runs on 30% fewer policy tokens than the unregularized evolution. Code is available at https://github.com/google-research/rrsi and project page is https://regularized-rsi.com/.",
      "upvotes": 219,
      "github_stars": 1126,
      "github_repo": "https://github.com/google-research/rrsi",
      "project_page": "https://regularized-rsi.com/",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2609.24972",
      "arxiv_url": "https://arxiv.org/abs/2609.24972",
      "title_ja": "RRSI: エージェントハーネスの正則化された再帰的自己改善",
      "summary_ja": "エージェント構成要素の反復進化における過学習を防ぐため、正則化の原則を導入した再帰的自己改善フレームワーク。"
    },
    {
      "id": "2608.23283",
      "title": "Apodex 1.1: Scaling Agentic Intelligence for Complex Work",
      "abstract": "General-purpose language models can reason and synthesize knowledge, but complex work also requires sustained interaction with files, information sources, and executable code, together with state maintenance, failure recovery, and verifiable delivery. We call this working capability: sustained, verifiable progress toward a real-world objective. Apodex 1.1 develops this capability along two complementary dimensions. Environment Scaling expands the diversity and verifiability of executable file, search, and code environments, while Agentic Coordination Scaling trains agents to decompose long-horizon tasks, delegate parallel work, integrate asynchronous results, and replan. A shared execution harness and AgentOS maintain task state and provenance across tools and agents, and training turns environment trajectories and coordination traces into reliable behavior. Across complex professional work, finance, scientific research, mathematics, coding, and search, Apodex 1.1 reaches the leading performance band despite using a substantially smaller model than many frontier systems. The 35B-parameter Apodex 1.1 Mini further retains strong working capability in a locally deployable form. These results ground agentic intelligence in useful, verifiable work completed over time and advance our goal of building a Heavy-Duty Solver for ambitious, long-running tasks.",
      "upvotes": 212,
      "github_stars": 4848,
      "github_repo": "https://github.com/ApodexAI/FrontierAgent",
      "project_page": "https://www.apodex.com/blog/apodex-1.1-scaling-agentic-intelligence-for-complex-work",
      "comments": 3,
      "org": "Apodex",
      "url": "https://huggingface.co/papers/2608.23283",
      "arxiv_url": "https://arxiv.org/abs/2608.23283",
      "title_ja": "Apodex 1.1: 複雑な業務のためのエージェント知能のスケーリング",
      "summary_ja": "環境の多様化とエージェント間の協調スケールにより、長期的なタスクの分解や並列作業の実行、検証可能な成果物の提供を実現。"
    },
    {
      "id": "2509.22186",
      "title": "MinerU2.5: A Decoupled Vision-Language Model for Efficient High-Resolution Document Parsing",
      "abstract": "We introduce MinerU2.5, a 1.2B-parameter document parsing vision-language model that achieves state-of-the-art recognition accuracy while maintaining exceptional computational efficiency. Our approach employs a coarse-to-fine, two-stage parsing strategy that decouples global layout analysis from local content recognition. In the first stage, the model performs efficient layout analysis on downsampled images to identify structural elements, circumventing the computational overhead of processing high-resolution inputs. In the second stage, guided by the global layout, it performs targeted content recognition on native-resolution crops extracted from the original image, preserving fine-grained details in dense text, complex formulas, and tables. To support this strategy, we developed a comprehensive data engine that generates diverse, large-scale training corpora for both pretraining and fine-tuning. Ultimately, MinerU2.5 demonstrates strong document parsing ability, achieving state-of-the-art performance on multiple benchmarks, surpassing both general-purpose and domain-specific models across various recognition tasks, while maintaining significantly lower computational overhead.",
      "upvotes": 180,
      "github_stars": 80947,
      "github_repo": "https://github.com/opendatalab/MinerU",
      "project_page": "https://opendatalab.github.io/MinerU/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2509.22186",
      "arxiv_url": "https://arxiv.org/abs/2509.22186",
      "title_ja": "MinerU2.5: 高解像度文書解析のための効率的なデカップル型視覚言語モデル",
      "summary_ja": "レイアウト分析と内容認識を分離した二段階戦略により、高効率かつ高精度な高解像度文書解析を実現する1.2Bモデル。"
    },
    {
      "id": "2503.11576",
      "title": "SmolDocling: An ultra-compact vision-language model for end-to-end multi-modal document conversion",
      "abstract": "We introduce SmolDocling, an ultra-compact vision-language model targeting end-to-end document conversion. Our model comprehensively processes entire pages by generating DocTags, a new universal markup format that captures all page elements in their full context with location. Unlike existing approaches that rely on large foundational models, or ensemble solutions that rely on handcrafted pipelines of multiple specialized models, SmolDocling offers an end-to-end conversion for accurately capturing content, structure and spatial location of document elements in a 256M parameters vision-language model. SmolDocling exhibits robust performance in correctly reproducing document features such as code listings, tables, equations, charts, lists, and more across a diverse range of document types including business documents, academic papers, technical reports, patents, and forms -- significantly extending beyond the commonly observed focus on scientific papers. Additionally, we contribute novel publicly sourced datasets for charts, tables, equations, and code recognition. Experimental results demonstrate that SmolDocling competes with other Vision Language Models that are up to 27 times larger in size, while reducing computational requirements substantially. The model is currently available, datasets will be publicly available soon.",
      "upvotes": 177,
      "github_stars": 68254,
      "github_repo": "https://github.com/docling-project/docling",
      "project_page": "https://huggingface.co/ds4sd/SmolDocling-256M-preview",
      "comments": 19,
      "org": "IBM Granite",
      "url": "https://huggingface.co/papers/2503.11576",
      "arxiv_url": "https://arxiv.org/abs/2503.11576",
      "title_ja": "SmolDocling: エンドツーエンドのマルチモーダル文書変換のための超小型視覚言語モデル",
      "summary_ja": "新しいDocTags形式を用い、文書の構造・位置・内容を256Mのパラメータでエンドツーエンドに抽出する超小型モデル。"
    },
    {
      "id": "2412.20138",
      "title": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "abstract": "Significant progress has been made in automated problem-solving using societies of agents powered by large language models (LLMs). In finance, efforts have largely focused on single-agent systems handling specific tasks or multi-agent frameworks independently gathering data. However, the multi-agent systems' potential to replicate real-world trading firms' collaborative dynamics remains underexplored. TradingAgents proposes a novel stock trading framework inspired by trading firms, featuring LLM-powered agents in specialized roles such as fundamental analysts, sentiment analysts, technical analysts, and traders with varied risk profiles. The framework includes Bull and Bear researcher agents assessing market conditions, a risk management team monitoring exposure, and traders synthesizing insights from debates and historical data to make informed decisions. By simulating a dynamic, collaborative trading environment, this framework aims to improve trading performance. Detailed architecture and extensive experiments reveal its superiority over baseline models, with notable improvements in cumulative returns, Sharpe ratio, and maximum drawdown, highlighting the potential of multi-agent LLM frameworks in financial trading. TradingAgents is available at https://github.com/TauricResearch/TradingAgents.",
      "upvotes": 148,
      "github_stars": 109465,
      "github_repo": "https://github.com/tauricresearch/tradingagents",
      "project_page": "",
      "comments": 6,
      "org": "",
      "url": "https://huggingface.co/papers/2412.20138",
      "arxiv_url": "https://arxiv.org/abs/2412.20138",
      "title_ja": "TradingAgents: マルチエージェントLLM金融取引フレームワーク",
      "summary_ja": "アナリストやトレーダーなどの専門的役割を持つLLMエージェントが、実世界の投資会社のような協調を行う株式取引システム。"
    },
    {
      "id": "2609.25001",
      "title": "GameHorizon Suite: Multi-Horizon Data and Evaluation in Gameplay",
      "abstract": "Modern video games provide a measurable testbed for AI models, combining abilities of visual understanding, instruction decomposition, goal planning, and precise action control over multiple temporal horizons. Existing datasets and benchmarks, however, either cover a narrow range of games, lack language instructions, or rely on high-variance online rollouts. To address these challenges, we introduce GameHorizon, a unified data and evaluation suite that measures gameplay capabilities at different horizons for diverse model families. GameHorizon Suite consists of three components. First, GameHorizon-Annotator is a scalable and automated annotation pipeline for multi-horizon instructions. Second, utilizing the pipeline, we construct GameHorizon-Data, the first large-scale AAA gameplay dataset with temporally aligned videos, player actions, and multi-horizon instructions. It comprises 5,000 hours of recordings from 21 games, collected by 100 human expert players. Third, we build GameHorizon-Bench with reproducible offline and stepwise online testing. The offline track enables reproducible evaluation using thousands of standardized questions organized into three primary tasks and a series of diagnostic variants, while the online track tests whether offline scores reflect actual gameplay capabilities and localizes failures to specific steps within long-horizon gameplay. Based on our GameHorizon Suite, we evaluate 47 models through more than one million model invocations, revealing a meaningful hierarchy of task difficulty and pronounced differences in model capabilities. Our work can provide a standardized yardstick for evaluating gameplay capabilities across horizons and model families. We will release our dataset, annotator, and benchmark to facilitate future research.",
      "upvotes": 131,
      "github_stars": 436,
      "github_repo": "https://github.com/TencentARC/GameHorizon",
      "project_page": "https://gamehorizon-suite.github.io/",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2609.25001",
      "arxiv_url": "https://arxiv.org/abs/2609.25001",
      "title_ja": "GameHorizon Suite: ゲームプレイにおけるマルチホライゾンデータと評価",
      "summary_ja": "多様な時間軸の指示に基づくゲームプレイ能力を測定するための、自動アノテーションと評価環境を含む統合型スイート。"
    },
    {
      "id": "2608.16157",
      "title": "FreeToken: Efficient Edge-Native MoE Serving with Bandwidth-Adaptive Execution",
      "abstract": "Frontier open-weight models are increasingly available, but serving them still largely assumes datacenter infrastructure. We present FreeToken, an edge-native MoE serving system that treats a personal machine not as a small GPU, but as a unified, elastic inference platform. FreeToken co-designs the full serving stack, including model layout and loading, expert residency, CPU--GPU execution, agentic state reuse, and runtime memory management, around two realities of local AI: agent workloads continuously change their execution pattern, and edge hardware exposes heterogeneous resources whose balance differs from machine to machine. Rather than committing to a fixed offloading strategy, FreeToken continuously maps computation and model state onto the resources actually available. FreeToken supports more than 20 MoE models and real coding and tool-using agents across hardware ranging from an 8GB laptop GPU to a single workstation GPU. More importantly, it changes what these machines can practically serve, from a 35B model on a laptop to a 284B model on a gaming desktop and the 753B GLM-5.2 on a single workstation GPU. FreeToken turns open weights into deployable local software, making the machines users already own a practical platform for frontier-scale intelligence. We release the system at flashml.ai.",
      "upvotes": 112,
      "github_stars": 14074,
      "github_repo": "https://github.com/FlashML-org/FreeToken",
      "project_page": "https://www.flashml.ai/",
      "comments": 2,
      "org": "University of California, Berkeley",
      "url": "https://huggingface.co/papers/2608.16157",
      "arxiv_url": "https://arxiv.org/abs/2608.16157",
      "title_ja": "FreeToken: 帯域幅適応型実行によるエッジネイティブなMoEサービング",
      "summary_ja": "PCの不均一なリソースを柔軟に活用し、エージェントの作業負荷に応じて動的に実行パターンを変えるエッジ端末向け推論システム。"
    },
    {
      "id": "2609.34981",
      "title": "What Makes World Action Models Generalize? An Empirical Study of Test-Time Future Modeling",
      "abstract": "World action models (WAMs) predict the future alongside actions during training. Due to the heavy computation cost of video denoising, whether the future must still be generated during inference is disputed: Explicit WAMs denoise it into clean frames along with every action chunk, whereas Latent WAMs discard it entirely for acceleration. We find that latent WAMs, despite matching explicit ones on in-distribution tasks, fail to retain the generalization benefits that originally motivated WAMs. To demonstrate this, we evaluate generalization along three axes: environmental perturbation, data efficiency, and task generalization. Controlled comparisons with a matched backbone, training data, and budget reveal consistent degradation across all three axes when the action expert no longer conditions on future representations. Further analysis shows that the gap arises almost entirely from the first denoising step: the benefit comes from preparing the future, not generating it. We therefore propose Simple-WAM, which simplifies future modeling into a single forward pass of fully noised video tokens and adapts the training-time noise schedule to this inference behavior. Across simulation and real-world tasks, Simple-WAM achieves the best of both worlds, leading explicit WAMs in generalization performance with efficiency comparable to Latent WAMs. Project Page: https://zrporz.github.io/Simple-WAM-Web/",
      "upvotes": 111,
      "github_stars": 62,
      "github_repo": "https://github.com/LeapLabTHU/Simple-WAM",
      "project_page": "https://zrporz.github.io/Simple-WAM-Web/",
      "comments": 2,
      "org": "Tsinghua-LeapLab",
      "url": "https://huggingface.co/papers/2609.34981",
      "arxiv_url": "https://arxiv.org/abs/2609.34981",
      "title_ja": "世界行動モデルの汎用性を決めるものは何か？推論時未来予測の実証研究",
      "summary_ja": "推論時に未来フレームを生成しない潜在型WAMは、環境変化やデータ効率における汎用性が明示型よりも著しく低いことを実証。"
    },
    {
      "id": "2606.23050",
      "title": "Unlimited OCR Works",
      "abstract": "Recently, end-to-end OCR models, exemplified by DeepSeek OCR, have once again thrust OCR into the spotlight. A widely held view is that employing a large language model (LLM) as the decoder allows the model to leverage the prior distribution of language, leading to improved OCR performance. However, the downside is equally evident: as the output sequence lengthens, the accumulated KV cache drives up memory consumption and progressively slows down generation. This stands in stark contrast to humans, who exhibit no such decline in efficiency during long-horizon copying tasks. In this technical report, we propose Unlimited OCR, a model designed to emulate human parsing working memory. Taking DeepSeek OCR as the baseline, we replace all attention layers in the decoder with our proposed Reference Sliding Window Attention (R-SWA), which reduces attention computation costs while maintaining a constant KV cache throughout the entire decoding process. By combining the high compression rate of DeepSeek OCR's encoder with our constant KV cache design, Unlimited OCR can transcribe dozens of pages of documents in a single forward pass under a standard maximum length of 32K. More importantly, R-SWA is a general-purpose parsing attention mechanism - beyond OCR, it is equally applicable to tasks such as ASR, translation, etc. Codes and model weights are publicly available at http://github.com/baidu/Unlimited-OCR.",
      "upvotes": 91,
      "github_stars": 26581,
      "github_repo": "https://github.com/baidu/Unlimited-OCR",
      "project_page": "",
      "comments": 7,
      "org": "BAIDU",
      "url": "https://huggingface.co/papers/2606.23050",
      "arxiv_url": "https://arxiv.org/abs/2606.23050",
      "title_ja": "Unlimited OCR Works",
      "summary_ja": "人間のワーキングメモリを模倣した動的なKVキャッシュ管理により、長い文書でもメモリ消費を抑え速度を維持するOCRモデル。"
    },
    {
      "id": "2407.16741",
      "title": "OpenDevin: An Open Platform for AI Software Developers as Generalist Agents",
      "abstract": "Software is one of the most powerful tools that we humans have at our disposal; it allows a skilled programmer to interact with the world in complex and profound ways. At the same time, thanks to improvements in large language models (LLMs), there has also been a rapid development in AI agents that interact with and affect change in their surrounding environments. In this paper, we introduce OpenDevin, a platform for the development of powerful and flexible AI agents that interact with the world in similar ways to those of a human developer: by writing code, interacting with a command line, and browsing the web. We describe how the platform allows for the implementation of new agents, safe interaction with sandboxed environments for code execution, coordination between multiple agents, and incorporation of evaluation benchmarks. Based on our currently incorporated benchmarks, we perform an evaluation of agents over 15 challenging tasks, including software engineering (e.g., SWE-Bench) and web browsing (e.g., WebArena), among others. Released under the permissive MIT license, OpenDevin is a community project spanning academia and industry with more than 1.3K contributions from over 160 contributors and will improve going forward.",
      "upvotes": 89,
      "github_stars": 89706,
      "github_repo": "https://github.com/opendevin/opendevin",
      "project_page": "",
      "comments": 7,
      "org": "",
      "url": "https://huggingface.co/papers/2407.16741",
      "arxiv_url": "https://arxiv.org/abs/2407.16741",
      "title_ja": "OpenDevin: 汎用エージェントとしてのAIソフトウェア開発者のためのオープンプラットフォーム",
      "summary_ja": "コード記述、コマンドライン操作、Web閲覧を通じて、人間のように環境と対話するAIソフトウェア開発エージェントの基盤。"
    },
    {
      "id": "2309.06180",
      "title": "Efficient Memory Management for Large Language Model Serving with PagedAttention",
      "abstract": "High throughput serving of large language models (LLMs) requires batching sufficiently many requests at a time. However, existing systems struggle because the key-value cache (KV cache) memory for each request is huge and grows and shrinks dynamically. When managed inefficiently, this memory can be significantly wasted by fragmentation and redundant duplication, limiting the batch size. To address this problem, we propose PagedAttention, an attention algorithm inspired by the classical virtual memory and paging techniques in operating systems. On top of it, we build vLLM, an LLM serving system that achieves (1) near-zero waste in KV cache memory and (2) flexible sharing of KV cache within and across requests to further reduce memory usage. Our evaluations show that vLLM improves the throughput of popular LLMs by 2-4times with the same level of latency compared to the state-of-the-art systems, such as FasterTransformer and Orca. The improvement is more pronounced with longer sequences, larger models, and more complex decoding algorithms. vLLM's source code is publicly available at https://github.com/vllm-project/vllm",
      "upvotes": 75,
      "github_stars": 86094,
      "github_repo": "https://github.com/vllm-project/vllm",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2309.06180",
      "arxiv_url": "https://arxiv.org/abs/2309.06180",
      "title_ja": "PagedAttentionを用いた大規模言語モデルサービングのための効率的なメモリ管理",
      "summary_ja": "OSの仮想メモリ技術に着想を得たアルゴリズムにより、KVキャッシュの断片化をゼロにし、LLMの推論スループットを大幅に向上。"
    },
    {
      "id": "2609.39045",
      "title": "RSIGame: Autonomous Agentic Game Development with Recursive Self-improvement",
      "abstract": "Recent advances in large language models have made automatic game generation increasingly feasible, yet reliably improving generated games beyond a playable version remains challenging. Naive iterative refinement can easily overfit a small set of test cases, producing fragile games with unresolved bugs, missing behaviors, and poor generalization to broader player interactions. We introduce RSIGame, an autonomous agentic game development framework with recursive self-improvement. RSIGame organizes development into complementary local and global loops. Concretely, a local explore-diagnose-improve loop broadly explores the executable game, diagnoses and prioritizes discovered issues, and performs evidence-grounded revision, where an evolving checklist continually accumulates new testing and improvement guidance. A global loop tracks overall quality, preserves the best checkpoint, and detects saturation or regression over long-horizon development. Beyond test-time improvement, RSIGame further internalizes successful development experience into the generator through training. Across 140 GameCraft-Bench tasks, two game engines, and five generators, RSIGame consistently improves game quality under matched development budgets. Notably, experience internalization enables Qwen3.8-27B to reach 61.38 on Godot and 58.53 on Phaser, exceeding GPT-5.5 one-shot scores while reducing Qwen's generation tokens by 11 times.",
      "upvotes": 74,
      "github_stars": 34,
      "github_repo": "https://github.com/WenyiWU0111/RSIGame",
      "project_page": "https://huggingface.co/spaces/RSIGame/rsigame-page",
      "comments": 2,
      "org": "RSIGame",
      "url": "https://huggingface.co/papers/2609.39045",
      "arxiv_url": "https://arxiv.org/abs/2609.39045",
      "title_ja": "RSIGame: 再帰的自己改善による自律型エージェントゲーム開発",
      "summary_ja": "局所的なバグ修正とグローバルな機能拡張のループを組み合わせ、汎用性の高いゲームを自動生成・改善する開発フレームワーク。"
    },
    {
      "id": "2504.19413",
      "title": "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory",
      "abstract": "Large Language Models (LLMs) have demonstrated remarkable prowess in generating contextually coherent responses, yet their fixed context windows pose fundamental challenges for maintaining consistency over prolonged multi-session dialogues. We introduce Mem0, a scalable memory-centric architecture that addresses this issue by dynamically extracting, consolidating, and retrieving salient information from ongoing conversations. Building on this foundation, we further propose an enhanced variant that leverages graph-based memory representations to capture complex relational structures among conversational elements. Through comprehensive evaluations on LOCOMO benchmark, we systematically compare our approaches against six baseline categories: (i) established memory-augmented systems, (ii) retrieval-augmented generation (RAG) with varying chunk sizes and k-values, (iii) a full-context approach that processes the entire conversation history, (iv) an open-source memory solution, (v) a proprietary model system, and (vi) a dedicated memory management platform. Empirical results show that our methods consistently outperform all existing memory systems across four question categories: single-hop, temporal, multi-hop, and open-domain. Notably, Mem0 achieves 26% relative improvements in the LLM-as-a-Judge metric over OpenAI, while Mem0 with graph memory achieves around 2% higher overall score than the base configuration. Beyond accuracy gains, we also markedly reduce computational overhead compared to full-context method. In particular, Mem0 attains a 91% lower p95 latency and saves more than 90% token cost, offering a compelling balance between advanced reasoning capabilities and practical deployment constraints. Our findings highlight critical role of structured, persistent memory mechanisms for long-term conversational coherence, paving the way for more reliable and efficient LLM-driven AI agents.",
      "upvotes": 72,
      "github_stars": 66434,
      "github_repo": "https://github.com/mem0ai/mem0",
      "project_page": "https://mem0.ai/research",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2504.19413",
      "arxiv_url": "https://arxiv.org/abs/2504.19413",
      "title_ja": "Mem0: スケーラブルな長期記憶を備えた実用的なAIエージェントの構築",
      "summary_ja": "継続的な会話から情報を抽出・統合し、グラフ構造を用いて複雑な関係性を保持することで長期的な一貫性を実現する記憶アーキテクチャ。"
    },
    {
      "id": "2508.16279",
      "title": "AgentScope 1.0: A Developer-Centric Framework for Building Agentic Applications",
      "abstract": "Driven by rapid advancements of Large Language Models (LLMs), agents are empowered to combine intrinsic knowledge with dynamic tool use, greatly enhancing their capacity to address real-world tasks. In line with such an evolution, AgentScope introduces major improvements in a new version (1.0), towards comprehensively supporting flexible and efficient tool-based agent-environment interactions for building agentic applications. Specifically, we abstract foundational components essential for agentic applications and provide unified interfaces and extensible modules, enabling developers to easily leverage the latest progress, such as new models and MCPs. Furthermore, we ground agent behaviors in the ReAct paradigm and offer advanced agent-level infrastructure based on a systematic asynchronous design, which enriches both human-agent and agent-agent interaction patterns while improving execution efficiency. Building on this foundation, we integrate several built-in agents tailored to specific practical scenarios. AgentScope also includes robust engineering support for developer-friendly experiences. We provide a scalable evaluation module with a visual studio interface, making the development of long-trajectory agentic applications more manageable and easier to trace. In addition, AgentScope offers a runtime sandbox to ensure safe agent execution and facilitates rapid deployment in production environments. With these enhancements, AgentScope provides a practical foundation for building scalable, adaptive, and effective agentic applications.",
      "upvotes": 69,
      "github_stars": 32643,
      "github_repo": "https://github.com/agentscope-ai/agentscope",
      "project_page": "",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2508.16279",
      "arxiv_url": "https://arxiv.org/abs/2508.16279",
      "title_ja": "AgentScope 1.0: エージェントアプリ構築のための開発者中心フレームワーク",
      "summary_ja": "最新モデルやMCPに対応し、柔軟かつ効率的なツール利用とエージェント間の相互作用をサポートする開発基盤の最新版。"
    },
    {
      "id": "2508.02739",
      "title": "Kronos: A Foundation Model for the Language of Financial Markets",
      "abstract": "The success of large-scale pre-training paradigm, exemplified by Large Language Models (LLMs), has inspired the development of Time Series Foundation Models (TSFMs). However, their application to financial candlestick (K-line) data remains limited, often underperforming non-pre-trained architectures. Moreover, existing TSFMs often overlook crucial downstream tasks such as volatility prediction and synthetic data generation. To address these limitations, we propose Kronos, a unified, scalable pre-training framework tailored to financial K-line modeling. Kronos introduces a specialized tokenizer that discretizes continuous market information into token sequences, preserving both price dynamics and trade activity patterns. We pre-train Kronos using an autoregressive objective on a massive, multi-market corpus of over 12 billion K-line records from 45 global exchanges, enabling it to learn nuanced temporal and cross-asset representations. Kronos excels in a zero-shot setting across a diverse set of financial tasks. On benchmark datasets, Kronos boosts price series forecasting RankIC by 93% over the leading TSFM and 87% over the best non-pre-trained baseline. It also achieves a 9% lower MAE in volatility forecasting and a 22% improvement in generative fidelity for synthetic K-line sequences. These results establish Kronos as a robust, versatile foundation model for end-to-end financial time series analysis. Our pre-trained model is publicly available at https://github.com/shiyu-coder/Kronos.",
      "upvotes": 57,
      "github_stars": 39766,
      "github_repo": "https://github.com/shiyu-coder/Kronos",
      "project_page": "",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2508.02739",
      "arxiv_url": "https://arxiv.org/abs/2508.02739",
      "title_ja": "Kronos: 金融市場言語のための基盤モデル",
      "summary_ja": "連続的な市場データを離散トークン化し、価格動向を維持しつつボラティリティ予測やデータ生成を可能にする金融向け事前学習モデル。"
    },
    {
      "id": "2407.17789",
      "title": "Very Large-Scale Multi-Agent Simulation in AgentScope",
      "abstract": "Recent advances in large language models (LLMs) have opened new avenues for applying multi-agent systems in very large-scale simulations. However, there remain several challenges when conducting multi-agent simulations with existing platforms, such as limited scalability and low efficiency, unsatisfied agent diversity, and effort-intensive management processes. To address these challenges, we develop several new features and components for AgentScope, a user-friendly multi-agent platform, enhancing its convenience and flexibility for supporting very large-scale multi-agent simulations. Specifically, we propose an actor-based distributed mechanism as the underlying technological infrastructure towards great scalability and high efficiency, and provide flexible environment support for simulating various real-world scenarios, which enables parallel execution of multiple agents, centralized workflow orchestration, and both inter-agent and agent-environment interactions among agents. Moreover, we integrate an easy-to-use configurable tool and an automatic background generation pipeline in AgentScope, simplifying the process of creating agents with diverse yet detailed background settings. Last but not least, we provide a web-based interface for conveniently monitoring and managing a large number of agents that might deploy across multiple devices. We conduct a comprehensive simulation to demonstrate the effectiveness of the proposed enhancements in AgentScope, and provide detailed observations and discussions to highlight the great potential of applying multi-agent systems in large-scale simulations. The source code is released on GitHub at https://github.com/modelscope/agentscope to inspire further research and development in large-scale multi-agent simulations.",
      "upvotes": 47,
      "github_stars": 32648,
      "github_repo": "https://github.com/modelscope/agentscope",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2407.17789",
      "arxiv_url": "https://arxiv.org/abs/2407.17789",
      "title_ja": "AgentScopeにおける超大規模マルチエージェントシミュレーション",
      "summary_ja": "アクターベースの分散メカニズムを導入し、数万単位のエージェントが参加する大規模シミュレーションを効率的に実行可能に。"
    },
    {
      "id": "2310.10688",
      "title": "A decoder-only foundation model for time-series forecasting",
      "abstract": "Motivated by recent advances in large language models for Natural Language Processing (NLP), we design a time-series foundation model for forecasting whose out-of-the-box zero-shot performance on a variety of public datasets comes close to the accuracy of state-of-the-art supervised forecasting models for each individual dataset. Our model is based on pretraining a patched-decoder style attention model on a large time-series corpus, and can work well across different forecasting history lengths, prediction lengths and temporal granularities.",
      "upvotes": 46,
      "github_stars": 34044,
      "github_repo": "https://github.com/google-research/timesfm",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2310.10688",
      "arxiv_url": "https://arxiv.org/abs/2310.10688",
      "title_ja": "時系列予測のためのデコーダー専用基盤モデル",
      "summary_ja": "大規模な時系列データセットで学習したアテンションモデルにより、未知のデータに対しても高い精度でゼロショット予測を実現。"
    },
    {
      "id": "2609.37725",
      "title": "Context Language Models",
      "abstract": "We introduce Context Language Models (CLMs), language models that natively manage their own context. We implement this by treating the context as a file and allowing the model to make unrestricted updates to this file. This allows the model to learn what is most important to maintain in context, and naturally extends to multi-agent systems where multiple agent contexts coexist as files. Building CLMs zero-shot with existing models outperforms SOTA context management strategies across a variety of tasks: 11.4% higher accuracy with 21.5% fewer FLOPs on BrowseComp-Plus, 5% higher scores with 59% fewer FLOPs on 12-hour EdgeBench, and 65% greater improvement with the same compute on a 24-hour multi-repository agent-swarm task. Moreover, by shifting context management from external harness control to intrinsic model behavior, CLMs naturally enable both in-context and parametric learning of context-management strategies. We show that CLMs can be steered with natural-language instructions evolved through a standard skill-optimization loop, improving held-out accuracy by up to 35.9 points on a context-management task while reducing compute. We also introduce an online reinforcement learning method for CLMs, improving Qwen3.5-9B performance on BrowseComp-Plus by 47.6% while using 12% fewer FLOPs. Finally, we co-design Suffix Cache Reuse for CLM serving, further reducing server-side compute by 35% relative to standard SGLang at matched performance.",
      "upvotes": 27,
      "github_stars": 277,
      "github_repo": "https://github.com/facebookresearch/context-language-models",
      "project_page": "https://github.com/facebookresearch/context-language-models",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2609.37725",
      "arxiv_url": "https://arxiv.org/abs/2609.37725",
      "title_ja": "Context Language Models (CLMs)",
      "summary_ja": "コンテキストをファイルとして扱い自律的に更新させることで、計算量を抑えつつSOTAを凌駕するコンテキスト管理を実現するモデル。"
    },
    {
      "id": "2606.03264",
      "title": "PaddleOCR-VL-1.6: Expanding the Frontier of Document Parsing with Under-Optimized Region Refinement and Progressive Post-Training",
      "abstract": "We introduce PaddleOCR-VL-1.6, an upgraded compact document parsing model built upon PaddleOCR-VL-1.5. Although PaddleOCR-VL-1.5 establishes a strong 0.9B baseline, its remaining errors concentrate in under-optimized regions where model behavior is unstable, data coverage is sparse, or supervision is unreliable. Rather than expanding the training corpus indiscriminately, PaddleOCR-VL-1.6 introduces a region-aware data optimization framework that identifies weak regions from the previous model, applies targeted enhancement to these regions, and improves the reliability of supervision signals. It further adopts a progressive post-training recipe based on curated data selection and reinforcement learning, pushing model performance to a higher level through staged optimization. PaddleOCR-VL-1.6 achieves a new state-of-the-art score of 96.33% on OmniDocBench v1.6, demonstrates strong competitiveness against top-tier VLMs, and provides a practical post-training recipe for the PaddleOCR-VL series.",
      "upvotes": 26,
      "github_stars": 90487,
      "github_repo": "https://github.com/PaddlePaddle/PaddleOCR",
      "project_page": "https://www.paddleocr.com",
      "comments": 1,
      "org": "PaddlePaddle",
      "url": "https://huggingface.co/papers/2606.03264",
      "arxiv_url": "https://arxiv.org/abs/2606.03264",
      "title_ja": "PaddleOCR-VL-1.6: 領域別最適化と段階的ポストトレーニングによる文書解析の拡張",
      "summary_ja": "弱点となる領域を特定し集中的に強化するデータ最適化フレームワークを導入し、コンパクトながら高精度な文書解析を実現。"
    },
    {
      "id": "2609.05415",
      "title": "UniMate: One Unified Model to Animate Diverse Skeletons",
      "abstract": "Recent advances in automatic rigging now deliver animation-ready 3D assets at scale, yet generating the motion to drive them remains a bottleneck. Existing learned animators are topology-constrained: they rely on category-specific templates or require per-skeleton fine-tuning and reference motions at inference. We present UniMate, a unified foundation model that synthesizes articulated motion for arbitrary skeletons from a rigged 3D asset and a text prompt, with no test-time optimization or per-skeleton retraining. UniMate introduces a topology-aware diffusion transformer, which integrates skeletal topology into attention via three mechanisms: (1) a graph-aware attention bias from pairwise joint relations and geodesic distances; (2) a spectral rotary position embedding generalizing RoPE to arbitrary kinematic trees via the graph Laplacian; and (3) a global topological conditioner attention-pooled from the rest-pose skeleton. We also curate UniML3D, 13,006 motion sequences spanning bipedal, quadrupedal, avian, marine, insectoid, serpentine, and articulated rigid objects with unified canonicalization and text pairing. Trained on this dataset, UniMate outperforms state-of-the-art baselines in quality, generalization, and efficiency, and supports zero-shot cross-topology transfer, in-betweening, expansion, and text-guided editing. Our project page is available at https://linzhanmou.com/unimate/.",
      "upvotes": 18,
      "github_stars": 1019,
      "github_repo": "https://github.com/Friedrich-M/UniMate",
      "project_page": "https://linzhanmou.com/unimate/",
      "comments": 2,
      "org": "Princeton University",
      "url": "https://huggingface.co/papers/2609.05415",
      "arxiv_url": "https://arxiv.org/abs/2609.05415",
      "title_ja": "UniMate: 多様な骨格のアニメーションを統合する単一モデル",
      "summary_ja": "トポロジー対応の拡散トランスフォーマーを用い、任意の骨格を持つ3Dモデルに対してテキストから動きを生成する基盤モデル。"
    },
    {
      "id": "2604.09557",
      "title": "SPEED-Bench: A Unified and Diverse Benchmark for Speculative Decoding",
      "abstract": "Speculative Decoding (SD) has emerged as a critical technique for accelerating Large Language Model (LLM) inference. Unlike deterministic system optimizations, SD performance is inherently data-dependent, meaning that diverse and representative workloads are essential for accurately measuring its effectiveness. Existing benchmarks suffer from limited task diversity, inadequate support for throughput-oriented evaluation, and a reliance on high-level implementations that fail to reflect production environments. To address this, we introduce SPEED-Bench, a comprehensive suite designed to standardize SD evaluation across diverse semantic domains and realistic serving regimes. SPEED-Bench offers a carefully curated Qualitative data split, selected by prioritizing semantic diversity across the data samples. Additionally, it includes a Throughput data split, allowing speedup evaluation across a range of concurrencies, from latency-sensitive low-batch settings to throughput-oriented high-load scenarios. By integrating with production engines like vLLM and TensorRT-LLM, SPEED-Bench allows practitioners to analyze system behaviors often masked by other benchmarks. We highlight this by quantifying how synthetic inputs overestimate real-world throughput, identifying batch-size dependent optimal draft lengths and biases in low-diversity data, and analyzing the caveats of vocabulary pruning in state-of-the-art drafters. We release SPEED-Bench to establish a unified evaluation standard for practical comparisons of SD algorithms.",
      "upvotes": 16,
      "github_stars": 5135,
      "github_repo": "https://github.com/NVIDIA/Model-Optimizer",
      "project_page": "https://huggingface.co/blog/nvidia/speed-bench",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2604.09557",
      "arxiv_url": "https://arxiv.org/abs/2604.09557",
      "title_ja": "SPEED-Bench: 投機的デコーディングのための統合された多様なベンチマーク",
      "summary_ja": "多様なドメインと現実的なサービング環境を網羅し、データ依存性の高い投機的デコーディングの性能を標準化して評価するツール。"
    },
    {
      "id": "2006.15704",
      "title": "PyTorch Distributed: Experiences on Accelerating Data Parallel Training",
      "abstract": "This paper presents the design, implementation, and evaluation of the PyTorch distributed data parallel module. PyTorch is a widely-adopted scientific computing package used in deep learning research and applications. Recent advances in deep learning argue for the value of large datasets and large models, which necessitates the ability to scale out model training to more computational resources. Data parallelism has emerged as a popular solution for distributed training thanks to its straightforward principle and broad applicability. In general, the technique of distributed data parallelism replicates the model on every computational resource to generate gradients independently and then communicates those gradients at each iteration to keep model replicas consistent. Despite the conceptual simplicity of the technique, the subtle dependencies between computation and communication make it non-trivial to optimize the distributed training efficiency. As of v1.5, PyTorch natively provides several techniques to accelerate distributed data parallel, including bucketing gradients, overlapping computation with communication, and skipping gradient synchronization. Evaluations show that, when configured appropriately, the PyTorch distributed data parallel module attains near-linear scalability using 256 GPUs.",
      "upvotes": 12,
      "github_stars": 103594,
      "github_repo": "https://github.com/pytorch/pytorch",
      "project_page": "",
      "comments": 0,
      "org": "",
      "url": "https://huggingface.co/papers/2006.15704",
      "arxiv_url": "https://arxiv.org/abs/2006.15704",
      "title_ja": "PyTorch Distributed: データ並列トレーニングの加速に関する経験",
      "summary_ja": "大規模なデータセットとモデルの学習を効率化する、PyTorchの分散データ並列モジュールの設計と実装、評価に関する知見。"
    },
    {
      "id": "2609.12552",
      "title": "RelateAnything: Real-Time Open-Vocabulary Relation Prediction From Any Inputs",
      "abstract": "Open-vocabulary detection accepts any class list at inference, and promptable segmentation returns regions without class names: the taxonomy has left the model and become an input. Relation prediction has not. Scene-graph models are still trained and evaluated on the 50 or 56 predicates of one annotation style, their relation head conditioned on object labels and so tied to one detector. Three obstacles explain this, none primarily modelling: no relation corpus is both free-text and verified, a label-conditioned architecture cannot accept a vocabulary it was not trained on, and the standard metric rewards agreement with the training corpus, so a larger vocabulary scores as a regression. We present RelateAnything, a 53M-parameter model taking an image and regions from any source and returning scored relations over a predicate vocabulary supplied at inference as strings. Object labels are never an input, so the region source can change without retraining, and the vocabulary is a bank of text embeddings, not a learned classifier. It runs at 20 ms/frame. Training over 19,103 predicates requires positive-unlabeled supervision and a text encoder that separates antonyms, which contrastive encoders embed at cosine 0.95. To supply the supervision we build RA-4M, 474k images and 4.3M relations over 10,102 free-text predicates, generated against numbered box markers and geometrically verified. To measure it we build OV-SGG-Bench, six axes scored across datasets that the priors standard recall rewards cannot satisfy. On three cross-dataset benchmarks and a fourth zero-shot, RelateAnything has 2.3-3.5x the mean recall of the strongest open-vocabulary method of comparable scale, margins that survive a real detector, and leads a 3B-VLM scene-graph model on both metrics at under 2% of its parameters. In-domain measurement overstates transfer gains ~5x. Model, corpus and benchmark are public.",
      "upvotes": 6,
      "github_stars": 803,
      "github_repo": "https://github.com/Maelic/RelateAnything",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2609.12552",
      "arxiv_url": "https://arxiv.org/abs/2609.12552",
      "title_ja": "RelateAnything: 任意の入力からのリアルタイムなオープンボキャブラリ関係予測",
      "summary_ja": "学習済みの語彙に縛られず、自由なテキスト指示に基づいて画像内の物体間の関係をリアルタイムに予測する手法。"
    },
    {
      "id": "2609.34674",
      "title": "HOI-Retarget: Contact-Centric Retargeting for Human-Object Interaction",
      "abstract": "Learning from demonstration (LfD) has enabled humanoid robots to acquire diverse whole-body skills, but extending this paradigm to human-object interaction (HOI) is limited by the availability of robot-compatible interaction references. We present HOI-Retarget, a contact-centric retargeting method that transfers HOI onto a humanoid robot for large-scale motion-data generation. Its windowed trajectory optimization uses every labeled contact as a target in the object frame, balancing body tracking, foot support and smoothness under the robot's kinematic limits. The method can augment a single demonstration across object sizes, absorb contacts reconstructed from monocular video, and extend to several robots manipulating one object. We publicly release the code and the retargeted motion dataset.",
      "upvotes": 1,
      "github_stars": 110,
      "github_repo": "https://github.com/shinben0327/hoi-retarget",
      "project_page": "https://shinben0327.github.io/hoi-retarget/",
      "comments": 0,
      "org": "",
      "url": "https://huggingface.co/papers/2609.34674",
      "arxiv_url": "https://arxiv.org/abs/2609.34674",
      "title_ja": "HOI-Retarget: 人間と物体の相互作用のための接点中心のリターゲティング",
      "summary_ja": "接点情報を維持しながら人間の動きをロボットへ転送し、大規模な相互作用データを生成する最適化手法。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "The eternal complement",
      "summary": "Advanced AI may matter most for the routine work behind breakthrough ideas. Explore why execution could shape the next economy and the pace of progress.",
      "url": "https://openai.com/index/the-eternal-complement",
      "published": "2026-10-02T02:00:00+09:00",
      "title_ja": "永遠の補完物",
      "summary_ja": "高度なAIが画期的なアイデアの背後にある日常業務の実行を担い、経済を加速させる。"
    },
    {
      "lab": "OpenAI",
      "title": "How Albertsons Companies is reimagining retail from the inside out",
      "summary": "Albertsons Cos. is using ChatGPT Enterprise and the OpenAI API to help teams work faster and make grocery shopping easier for millions of customers.",
      "url": "https://openai.com/index/albertsons-reimagining-retail",
      "published": "2026-10-02T01:00:00+09:00",
      "title_ja": "アルバートソンズによる小売業の再構築",
      "summary_ja": "ChatGPT Enterprise等を活用し、チームの業務効率化と顧客の買い物体験向上を実現。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing Olmo-core 3: Open, scalable training infrastructure for large MoEs",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/olmocore3",
      "published": "2026-10-02T00:01:43+09:00",
      "title_ja": "Olmo-core 3の導入：MoE向けオープン学習インフラ",
      "summary_ja": "大規模な混合専門家（MoE）モデル向けに、オープンで拡張可能な学習インフラを導入。"
    },
    {
      "lab": "OpenAI",
      "title": "The Den frees up 10-15 hours a week to grow with ChatGPT Work",
      "summary": "As it opens a new location, the social club prepares grant applications in 2 hours instead of 3 days and liquor-license materials in 3 hours instead of 4 days.",
      "url": "https://openai.com/index/the-den-family-social",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "ChatGPT Workで週10〜15時間を創出する「The Den」",
      "summary_ja": "ソーシャルクラブが助成金申請や免許手続の時間を大幅短縮し、事業成長に注力。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的MLEエージェントに強力な制御機構は必要か？",
      "summary_ja": "複雑な仕組みより、実行環境に直接アクセスできる改善された単純なコーディング能力を調査。"
    },
    {
      "lab": "Apple ML",
      "title": "RLTL;DR: Self-Improvement by Internalizing Self-Generated Feedback",
      "summary": "The common paradigm of reinforcement learning with verifiable rewards (RLVR) is to let agents make multiple attempts at a task, and optimize towards the successful ones. This becomes problematic in the realms of self-improvement, where tasks are so difficult that the agent has a low or even no chance of success, and where there are no teacher models or example solutions to distill from. In this paper, we introduce RLTL;DR. After each failed attempt, we show the policy the verifier outputs and let it write its own feedback, in the form of a single TL;DR insight. The next rollout is conditioned…",
      "url": "https://machinelearning.apple.com/research/rltl-dr-self-improvement",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "RLTL;DR：自己生成フィードバックの内部化による自己改善",
      "summary_ja": "失敗から得た簡潔な洞察を次回の試行に反映させ、難易度の高いタスクで自己改善を実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：フロンティア・インテリジェンスの次なる時代",
      "summary_ja": "次世代の最先端インテリジェンスとして開発されたGemini 4 Argonを紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの紹介",
      "summary_ja": "生物学的機能を維持したまま、AIが生成したタンパク質に電子透かしを入れる技術の概念実証。"
    },
    {
      "lab": "OpenAI",
      "title": "Disrupting a coordinated model-distillation campaign",
      "summary": "Learn how OpenAI disrupted a campaign to extract protected model reasoning and is strengthening defenses against adversarial distillation.",
      "url": "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign",
      "published": "2026-09-30T19:30:00+09:00",
      "title_ja": "組織的なモデル蒸留キャンペーンの阻止",
      "summary_ja": "保護された推論プロセスの抽出を試みる活動を遮断し、敵対的な蒸留に対する防御を強化。"
    },
    {
      "lab": "OpenAI",
      "title": "Helping small businesses put AI to work",
      "summary": "OpenAI is partnering with America’s SBDC to expand hands-on AI training and local support for small businesses, alongside a new report on how small teams are using AI.",
      "url": "https://openai.com/index/helping-small-businesses-put-ai-to-work",
      "published": "2026-09-30T19:00:00+09:00",
      "title_ja": "小規模ビジネスへのAI活用支援",
      "summary_ja": "OpenAIがSBDCと提携し、中小企業向けの実践的なAIトレーニングと地域支援を拡大。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Effectiveness-Fluency Trade-Off in LLM Conditioning: A Systematic Study",
      "summary": "Controlling the output of Large Language Models (LLMs) is a central challenge for their reliable deployment, yet a clear understanding of the involved trade-offs remains elusive. Current approaches to conditioning are often evaluated with a narrow focus on their effectiveness at injecting or removing a target concept, neglecting generation quality. We systematically investigate a range of conditioning methods in both injection and removal scenarios. We find that efficient steering methods frequently achieve conditioning at a steep cost to fluency. Furthermore, we identify a critical yet…",
      "url": "https://machinelearning.apple.com/research/effectiveness-fluency-llm-conditioning",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "LLMコンディショニングにおける有効性と流暢さのトレードオフ",
      "summary_ja": "出力制御手法の多くが、特定概念の注入・除去と引き換えに文章の質を低下させる実態を調査。"
    },
    {
      "lab": "Apple ML",
      "title": "SCLATE: A Substrate for Continual-Learning Agent Training and Evaluation",
      "summary": "Continual-learning agents are systems of models, harnesses, and memory operating over long multi-session horizons. Evaluating and training them requires interleaving tasks with agent-side events such as session stop and start, crons, and memory consolidation. Yet existing benchmarks and training frameworks schedule only the benchmark’s own events, leaving each benchmark and agent pair to build a custom scheduling loop. We present SCLATE, an execution substrate where benchmarks and unmodified agents each add their events to one open event scheduler through an adapter. A hybrid simulated clock…",
      "url": "https://machinelearning.apple.com/research/sclate-agent-training-evaluation",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "SCLATE：継続学習エージェントの訓練・評価用基盤",
      "summary_ja": "ベンチマークとエージェントのイベントを統合し、長期的な継続学習を評価する実行基盤。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning",
      "summary": "",
      "url": "https://huggingface.co/blog/open-tts-leaderboard",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "Open TTS Leaderboard：多言語TTSと音声クローンの評価",
      "summary_ja": "多言語のテキスト読み上げと音声クローニング技術をスケーラブルに評価する指標を導入。"
    },
    {
      "lab": "Google Research",
      "title": "How Diffusion Controller unifies and simplifies AI image generation",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/how-diffusion-controller-unifies-and-simplifies-ai-image-generation/",
      "published": "2026-09-30T03:38:27+09:00",
      "title_ja": "Diffusion ControllerによるAI画像生成の統合と簡略化",
      "summary_ja": "AIによる画像生成プロセスを統合し、簡素化するためのアルゴリズムと理論を提示。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-tabular",
      "published": "2026-09-30T00:30:38+09:00",
      "title_ja": "NVIDIA Kumo Tabular：表形式データ予測の新たな精度・効率性",
      "summary_ja": "表形式データの予測において、精度と効率性の両立を極めた新たな基準を確立。"
    },
    {
      "lab": "Hugging Face",
      "title": "Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source",
      "published": "2026-09-29T22:07:00+09:00",
      "title_ja": "事実だけでなく出典を正確に：MCPエージェントの検証",
      "summary_ja": "MCPエージェントにおいて、情報の事実関係だけでなく出典元も正確に特定する検証手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing GPT-6.1 Sol",
      "summary": "Meet GPT-6.1 Sol: near-Astra intelligence for coding, computer use, and professional work at one-fifth of Astra’s standard API input and output token prices.",
      "url": "https://openai.com/index/introducing-gpt-6-1-sol",
      "published": "2026-09-29T19:00:00+09:00",
      "title_ja": "GPT-6.1 Solの導入",
      "summary_ja": "コーディングやPC操作をこなし、Astraと同等の知能を5分の1の価格で提供する新モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "The Communication Bottleneck: A Round-Trip Study of Tree-Structured Expression Serialization in Language Models",
      "summary": "When language models reason in chain-of-thought or exchange free-text intermediates, they serialize structured information into natural language. How much tree-structured compositional content survives this bottleneck? We propose a round-trip protocol that answers this question empirically for tree-structured expressions. A generator converts a procedurally generated arithmetic expression into a word problem, a separate extractor recovers the expression from the word problem alone, and symbolic equivalence provides an exact oracle. Evaluating all pairwise combinations of sixteen models yields…",
      "url": "https://machinelearning.apple.com/research/communication-bottleneck-serialization",
      "published": "2026-09-29T09:00:00+09:00",
      "title_ja": "通信のボトルネック：LLMにおける木構造の直列化研究",
      "summary_ja": "構造化情報を自然言語に変換する際、どれだけの情報が損失せずに保持されるかを実証分析。"
    },
    {
      "lab": "Hugging Face",
      "title": "Holo4: powering generalist computer-use agents",
      "summary": "",
      "url": "https://huggingface.co/blog/Hcompany/holo4",
      "published": "2026-09-28T18:44:05+09:00",
      "title_ja": "Holo4：汎用的なコンピュータ操作エージェントの強化",
      "summary_ja": "汎用的なコンピュータ操作を行うAIエージェントを支援する基盤技術Holo4。"
    },
    {
      "lab": "Apple ML",
      "title": "Faster Rates for Federated Variational Inequalities",
      "summary": "In this paper, we study federated optimization for solving stochastic variational inequalities (VIs), a problem that has attracted growing attention in recent years. Despite substantial progress, a significant gap remains between existing convergence rates and the state-of-the-art bounds known for federated convex optimization. In this work, we address this limitation by establishing a series of improved convergence rates. First, we show that, for general smooth and monotone variational inequalities, the classical Local Extra SGD algorithm admits tighter guarantees under a refined analysis…",
      "url": "https://machinelearning.apple.com/research/federated-variational-inequalities",
      "published": "2026-09-28T09:00:00+09:00",
      "title_ja": "連合型変分不等式における収束レートの高速化",
      "summary_ja": "連合学習における変分不等式の最適化に対し、従来より厳密な分析で改善された収束性を証明。"
    },
    {
      "lab": "Google Research",
      "title": "Automating coherent long-form video generation",
      "summary": "Generative AI",
      "url": "https://research.google/blog/coherent-long-form-video-generation/",
      "published": "2026-09-25T04:40:00+09:00",
      "title_ja": "一貫性のある長尺動画生成の自動化",
      "summary_ja": "生成AIを用いて、一貫性を保ったまま長時間のビデオを生成するプロセスを自動化。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 3.8 Live with Live Avatar",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-38-live-with-live-avatar/",
      "published": "2026-09-25T01:20:39+09:00",
      "title_ja": "Gemini 3.8 LiveとLive Avatarの導入",
      "summary_ja": "リアルタイム対話が可能なGemini 3.8 Liveに、ライブアバター機能を追加。"
    },
    {
      "lab": "Hugging Face",
      "title": "Accelerating vision-language models with LFM2.5-VL-DSpark",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark",
      "published": "2026-09-24T23:08:57+09:00",
      "title_ja": "LFM2.5-VL-DSparkによる視覚言語モデルの高速化",
      "summary_ja": "最新のアーキテクチャを活用し、画像とテキストを扱う視覚言語モデルの処理速度を向上。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Advancing Private AI Compute with secure, server-side memory",
      "summary": "Introducing private, server-side memory to Private AI Compute for personal AI.",
      "url": "https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/",
      "published": "2026-09-24T01:00:57+09:00",
      "title_ja": "安全なサーバーサイドメモリによるプライベートAI計算の進歩",
      "summary_ja": "個人用AI向けに、サーバーサイドで安全にデータを保持するメモリ機能を導入。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 3.8 text-to-speech says hello",
      "summary": "",
      "url": "https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/",
      "published": "2026-09-24T00:25:14+09:00",
      "title_ja": "Gemini 3.8のテキスト読み上げ機能の開始",
      "summary_ja": "Gemini 3.8において、テキストを音声に変換して出力する機能が利用可能に。"
    },
    {
      "lab": "Google Research",
      "title": "MilleMiglia: A realistic instance generator for middle-mile logistics",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/millemiglia-a-realistic-instance-generator-for-middle-mile-logistics/",
      "published": "2026-09-19T02:46:09+09:00",
      "title_ja": "MilleMiglia：中間物流向けの現実的なインスタンス生成器",
      "summary_ja": "物流の中間区間における課題を解決するための、現実的なシナリオ生成アルゴリズム。"
    },
    {
      "lab": "Google Research",
      "title": "The future of practice: Enabling teachers to create learning interactives with generative UI",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-future-of-practice-enabling-teachers-to-create-learning-interactives-with-generative-ui/",
      "published": "2026-09-18T05:45:00+09:00",
      "title_ja": "教育の未来：生成UIによる学習インターラクティブ教材の作成",
      "summary_ja": "教師が生成UIを活用し、生徒向けの対話型学習コンテンツを自作できるように支援。"
    },
    {
      "lab": "Google Research",
      "title": "Bypassing inference bottlenecks: Accelerating complex AI search with Retrieve-for-Train",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/bypassing-inference-bottlenecks-accelerating-complex-ai-search-with-retrieve-for-train/",
      "published": "2026-09-16T05:00:00+09:00",
      "title_ja": "推論のボトルネック回避：Retrieve-for-Trainによる検索の高速化",
      "summary_ja": "学習時検索の手法を用いて、複雑なAIの検索・推論プロセスを加速させるアルゴリズム。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-3-8-live-and-3-8-live-extended-thinking/",
      "published": "2026-09-16T02:05:57+09:00",
      "title_ja": "Gemini 3.8 LiveおよびLive Extended Thinkingの導入",
      "summary_ja": "リアルタイム対話機能に加え、より深い思考プロセスを可能にする拡張モデルを導入。"
    }
  ]
};
