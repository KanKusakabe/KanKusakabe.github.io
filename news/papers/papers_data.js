window.papersData = {
  "updated_at": "2026-11-16 10:38 JST",
  "arxiv": [
    {
      "id": "2611.14916",
      "title": "CuEVM: Scaling Smart Contract Execution on GPUs",
      "url": "https://arxiv.org/abs/2611.14916",
      "pdf": "https://arxiv.org/pdf/2611.14916",
      "authors": [
        "Nhut-Minh Ho",
        "Tien Tuan Anh Dinh",
        "Quang Trung Ta",
        "Fredrik Svantes",
        "Xiaokui Xiao",
        "Beng Chin Ooi"
      ],
      "categories": [
        "cs.DC",
        "cs.CR",
        "cs.DB"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted for publication in the Proceedings of the IEEE International Conference on Data Engineering 2027 (ICDE 2027). DOI to be updated",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new",
        "sota"
      ],
      "star_quote": "outperforming existing baselines by up to two orders of magnitude.",
      "signals": [],
      "headline": "GPUネイティブな実行エンジンCuEVMによるスマートコントラクト実行の超高速化",
      "what": "Ethereum Virtual Machine (EVM) の実行を大規模並列データ処理として再構築した、GPUネイティブな実行エンジンです。ホストCPUに依存せず、独自のデータ構造とGPU対応スケジューリングにより、GPU上で直接スマートコントラクトを完全なセマンティクスで実行します。",
      "enables": "単一の民生用GPUで、毎秒800万回以上のERC-20トークン送金を実行し、既存手法を最大2桁上回りました。また、本エンジンを利用したファザーは、毎秒100万回以上のエンドツーエンド実行を達成しています。",
      "why_it_matters": "ブロックチェーンの逐次実行ボトルネックを解消し、特にセキュリティテスト（ファジング）などの大量の実行を必要とするワークロードの効率を飛躍的に高めました。",
      "tags": [
        "ブロックチェーン",
        "GPU並列計算",
        "セキュリティ"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.14894",
      "title": "Machine Learning Moment Closure for the Boltzmann Transport Equation: Enforcing Hyperbolicity",
      "url": "https://arxiv.org/abs/2611.14894",
      "pdf": "https://arxiv.org/pdf/2611.14894",
      "authors": [
        "Bongseok Kim",
        "Jiahao Zhang",
        "Guang Lin"
      ],
      "categories": [
        "cs.LG",
        "cs.NA",
        "math.NA"
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
      "star_quote": "first data-driven closure for multidimensional Hermite moment systems of the linear Boltzmann equation that is hyperbolic by construction.",
      "signals": [],
      "headline": "多次元ボルツマン輸送方程式において双曲性を保証する初のデータ駆動型クロージャ",
      "what": "高価なボルツマン輸送方程式の計算を、有限個の速度モーメントで近似するモーメント法のためのクロージャ技術です。すべての空間方向で共有される対称正定値なシンメトライザを学習するニューラルネットワークを開発し、多次元ハミルトン系における双曲性を構造的に保証しました。",
      "enables": "2次元の輸送実験において、10個のモーメントを持つ第3次システムで安定した計算を維持し、従来の136モーメントを用いたP15切断よりも高い精度を達成しました。密度誤差は、同じモーメント数を持つP3切断と比較して約2桁小さくなっています。",
      "why_it_matters": "データ駆動型クロージャにおける不安定性の原因であった非物理的な特性速度を排除し、低次元の輸送方程式を維持しつつ、多次元問題への適用を可能にしました。",
      "tags": [
        "数値計算",
        "物理シミュレーション",
        "機械学習"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15155",
      "title": "PRELUDE: Separating Common Components from Target-Specific Dependencies for Multivariate Time Series Forecasting",
      "url": "https://arxiv.org/abs/2611.15155",
      "pdf": "https://arxiv.org/pdf/2611.15155",
      "authors": [
        "Dongqing Song",
        "Jianyu Xu",
        "Haobin Ding",
        "Xinyi Guo",
        "Jiahao Du",
        "Ruiqi He"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 5 figures, 5 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "attains the best MSE on 23 of the 24 short-horizon and air-quality settings and reduces the average MSE by 6.1% relative to the strongest baseline.",
      "signals": [],
      "headline": "多変量時系列予測における共通成分とターゲット固有の依存関係を分離するPRELUDEフレームワーク",
      "what": "既存の多変量時系列モデルが陥る「擬似的な依存関係」を排除するため、共通成分と各変数間の依存関係を分離して学習する手法です。共通成分は断面プーリングと複数因子を用いて推定し、依存関係はプリホワイトニング（前処理による白色化）後のイノベーション空間での先行・遅行関係から読み取ります。",
      "enables": "16のリアルタイムデータセットを用いた実験で、最強のベースラインと比較して平均MSEを6.1%削減しました。特に短期間予測や空気質予測の24設定中23個で最良のMSEを達成しています。",
      "why_it_matters": "多変量モデルの利得が変数間の真の相互作用ではなく共通成分に由来するという混同を理論的・実験的に示し、それぞれの特性に合わせた処理を導入しました。",
      "tags": [
        "時系列予測",
        "多変量解析",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.17141",
      "title": "ISLA: A Coordinate-Free, Measure-Weighted Transformer for Boundary-Driven PDEs",
      "url": "https://arxiv.org/abs/2611.17141",
      "pdf": "https://arxiv.org/pdf/2611.17141",
      "authors": [
        "Peter Sharpe"
      ],
      "categories": [
        "cs.LG",
        "cs.CE",
        "math-ph",
        "math.MP",
        "physics.flu-dyn"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "48 pages, 14 figures, 26 tables. Companion paper to \"AeroZoo: A Benchmark of Well-Posed Flow Problems for Foundation Models of Aerodynamics\" (Sharpe et al., 2026)",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "ISLA is equivariant to rigid motions and reflections, invariant to the units of its declared data, and consistent under mesh refinement",
      "signals": [],
      "headline": "座標系や単位、メッシュに依存しない境界駆動型偏微分方程式の代理モデルISLA",
      "what": "物理的な不変性を保持するため、座標値を直接扱わず距離と角度のみを入力とするInvariant Slice Attention (ISLA) を提案しました。すべての演算を求積法（quadrature）として構築し、境界条件を正確に読み取ることで、剛体運動に対する等変性とメッシュ細分化に対する整合性を備えたトランスフォーマーです。",
      "enables": "AeroZooベンチマークにおいて、速度と圧力の誤差が既存手法の少なくとも3.1倍および3.3倍低減しました。また、モデルの回転やリサンプリングを行っても、従来モデルのように誤差が劇的に増大することなく、安定した精度を維持します。",
      "why_it_matters": "ニューラルネットワークによる物理シミュレーションの代理モデルが直面していた、座標系やメッシュの変化に弱いという課題を解消しました。",
      "tags": [
        "物理AI",
        "トランスフォーマー",
        "流体力学"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15642",
      "title": "Differential Backpack Language Models: Sense Inhibition via Signed Contextualization Weights",
      "url": "https://arxiv.org/abs/2611.15642",
      "pdf": "https://arxiv.org/pdf/2611.15642",
      "authors": [
        "Konstantinos Skianis",
        "Giannis Nikolentzos",
        "Polykarpos Meladianos",
        "Michalis Vazirgiannis"
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
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "relax the latter by computing the sense weights with differential attention, a difference of two softmax maps with a learned per-sense gain",
      "signals": [],
      "headline": "文脈に応じた負の重みを可能にし、語義の抑制を可能にしたDifferential Backpackモデル",
      "what": "非文脈的な語義ベクトルの線形結合で予測を行うBackpack言語モデルに対し、差分アテンション（Differential Attention）を導入して重みを負の値まで拡張した手法です。これにより、文脈に応じて特定の語義を能動的に「抑制（Inhibition）」することが可能になりました。",
      "enables": "WikiText-103においてTransformerとのパープレキシティの差を31%縮小し、ゼロショットの文中の類似性評価では最大33%の性能向上を実現しました。例えば、金融の文脈で「bank」という単語の「川の堤防」という意味の重みを負の値（-0.50）に制御できます。",
      "why_it_matters": "Backpackモデルの高い解釈可能性を維持したまま、Transformerに近い性能を実現し、特定の語義が推論に与える影響を正確に特定・制御できることを示しました。",
      "tags": [
        "LLM",
        "自然言語処理",
        "解釈可能性"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16934",
      "title": "Time Flies When You Parallelise: Pareto-efficient Time Series Foundation Models with Linear Recurrences",
      "url": "https://arxiv.org/abs/2611.16934",
      "pdf": "https://arxiv.org/pdf/2611.16934",
      "authors": [
        "Torben Berndt",
        "Lingyi Yang",
        "Federico Nardi",
        "Yi Heng Lim",
        "AJ Shears",
        "Benjamin Walker"
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
      "star_quote": "ci-proto XL sets a new state of the art among time series foundation models.",
      "signals": [],
      "headline": "線形再帰を用いたパレート効率の高い時系列基盤モデルci-proto",
      "what": "Mamba-3をベースとした時系列基盤モデルで、線形状態再帰を用いることで訓練時の時間並列計算と推論時の線形スケーリングを両立したアーキテクチャです。再帰的な時間処理と変数間のアテンションを交互に配置し、多変量の確率的予測に対応しています。",
      "enables": "fev-benchの100の予測タスクにおいて、ci-proto XLが時系列基盤モデルとして新たなSOTAを記録しました。パラメータ数や実行時間に対する精度（quantile lossやMASE）において、パレート境界を独占する効率性を示しています。",
      "why_it_matters": "自己アテンションの計算量（2乗コスト）と非線形再帰の並列化の困難さを解決し、長大な時系列データに対する高効率な基盤モデルを実現しました。",
      "tags": [
        "時系列予測",
        "Mamba",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.14592",
      "title": "Multi-Step Underwater Acoustic Channel Prediction via Dual-Domain Structure Preservation and Pretrained Transformer",
      "url": "https://arxiv.org/abs/2611.14592",
      "pdf": "https://arxiv.org/pdf/2611.14592",
      "authors": [
        "Mingjie Cao",
        "Gewei Zhang",
        "Deqing Wang",
        "Lizhao You",
        "Fei-Yun Wu",
        "Liqun Fu"
      ],
      "categories": [
        "cs.SD",
        "cs.AI",
        "cs.LG",
        "eess.SP"
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
      "star_quote": "reductions of 88.53% and 85.15%, respectively, relative to the most recent baseline.",
      "signals": [],
      "headline": "水中音響チャネル予測のための学習済みモデルを用いた複数ステップ予測フレームワーク",
      "what": "水中通信における将来のチャネル状態を、マルチドメイン特徴抽出と学習済みTransformerを組み合わせて予測するLLM4UACPを提案しました。再帰的な予測（Rollout）を避け、Butterfly Orthogonal Fine-tuningを用いて一度のパスで複数ステップを予測することで誤差の蓄積を防ぎます。",
      "enables": "実測された水中チャネルデータにおいて、最新のベースラインと比較して正規化平均二乗誤差（NMSE）を最大88.53%削減しました。0.11Mという少ない学習パラメータで、限定的なデータや未知のデータセットに対しても頑健な性能を示します。",
      "why_it_matters": "信号伝搬遅延が大きくデータの取得が困難な水中環境において、高精度かつ効率的なマルチステップ予測を可能にしました。",
      "tags": [
        "水中通信",
        "時系列予測",
        "転移学習"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15153",
      "title": "MatrixSplat: Matrix-Parallel and Feature-Scalable 3D Gaussian Splatting Rendering on GPUs",
      "url": "https://arxiv.org/abs/2611.15153",
      "pdf": "https://arxiv.org/pdf/2611.15153",
      "authors": [
        "Yangming Zhang",
        "Siyi Wu",
        "Jian Wang",
        "Bingzhe Li",
        "Wei Niu",
        "Sheng Di"
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
      "comment": "Accepted to NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "MatrixSplat, a matrix-parallel rendering framework for feature-scalable 3DGS on modern GPUs.",
      "signals": [],
      "headline": "Tensor Coreを最適活用し高次元特徴量を高速描画するMatrixSplat",
      "what": "3D Gaussian Splatting (3DGS) の描画パイプラインを、現代のGPUアーキテクチャに合わせて行列演算ベースに刷新したフレームワークです。順序に依存しない重み付き蓄積式を採用し、タイルベースの演算をTensor Coreの行列積演算（MMA）にマッピングすることで、高次元の特徴量描画を効率化しました。",
      "enables": "従来の3DGSと比較して最大3.8倍、高次元特徴量のレンダリングカーネル時間については最大36.7倍の高速化を達成しました。既存の高速レンダラーに統合した場合でも、さらに1.69〜2.84倍の速度向上が得られます。",
      "why_it_matters": "3DGSがこれまで苦手としていた、高次元のセマンティック特徴やマルチモーダルデータのリアルタイム描画において、ハードウェアの性能を最大限に引き出す手法を確立しました。",
      "tags": [
        "3Dビジョン",
        "3D Gaussian Splatting",
        "GPU演算"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15178",
      "title": "HyperSkill: Training-Free Omnimodal GRPO via Hypergraph-Indexed Skill-Library Evolution",
      "url": "https://arxiv.org/abs/2611.15178",
      "pdf": "https://arxiv.org/pdf/2611.15178",
      "authors": [
        "Haoran Luo",
        "Shangkai Lin",
        "Jinyang Wu",
        "Xinliang Zhou",
        "Luu Anh Tuan"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by NeurIPS 2026 main conference",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "HyperSkill is best or tied on every dataset and beats the best baseline by 13.0 average F1 points while keeping the backbone frozen.",
      "signals": [],
      "headline": "バックボーンを固定したまま論理的なスキルライブラリを更新するHyperSkill",
      "what": "モデルの重みを更新せず、ハイパーグラフで表現された「スキルライブラリ」を編集することで学習を行うトレーニングフリーなGRPO（Group Relative Policy Optimization）フレームワークです。成功・失敗から抽出されたスキルを、ゲート付きハイパーグラフ検索によって推論時に注入します。",
      "enables": "11のテキストおよびマルチモーダルベンチマークにおいて、ベースラインを平均13.0 F1ポイント上回るスコアを記録しました。また、スキルの追加・削除が可聴（Auditable）な形式で行えるため、モデルの挙動を直接編集可能です。",
      "why_it_matters": "LLMの強化学習における「破滅的忘却」や高い計算コストを回避しつつ、推論時の制御性と性能を大幅に向上させました。",
      "tags": [
        "LLM",
        "強化学習",
        "知識グラフ"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15309",
      "title": "Where Autonomy Belongs: A Separation of Powers for Agentic Program Evolution",
      "url": "https://arxiv.org/abs/2611.15309",
      "pdf": "https://arxiv.org/pdf/2611.15309",
      "authors": [
        "Zhengyang Ai",
        "Tong Liu",
        "Jingxian Tang",
        "Xiaobing Du",
        "Tao Xiao",
        "Fengshi Zhang"
      ],
      "categories": [
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "58 pages, 26 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "EvoTrias sets a new state of the art on mathematical, systems, and algorithm-design benchmarks.",
      "signals": [],
      "headline": "統治・提案・判定の権限を分離し、エージェントによるプログラム進化を安定化させるEvoTrias",
      "what": "LLMによるプログラム進化プロセスを、「構造化された統治（Govern）」、「オープンな提案（Propose）」、「保護された判定（Judge）」の3つの権限に分離したアーキテクチャです。各機能が独立した権限を持ち、型定義されたコントラクトのみを介して通信することで、評価の信頼性と探索の自律性を高めます。",
      "enables": "数学やアルゴリズム設計のベンチマークでSOTAを達成しました。提案機能を分離したことで、68万行規模の産業用リポジトリにおける進化にも対応可能になり、さらにトークンコストを64%削減することに成功しました。",
      "why_it_matters": "エージェント自身の提案に判定が引きずられる問題や、大規模コードへの対応の難しさを、政治的な三権分立に倣った分離構造によって解決しました。",
      "tags": [
        "AIエージェント",
        "自動プログラミング",
        "ソフトウェア工学"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16039",
      "title": "Improved Elastic Weight Consolidation as an Optimization Constraint for Continual Learning",
      "url": "https://arxiv.org/abs/2611.16039",
      "pdf": "https://arxiv.org/pdf/2611.16039",
      "authors": [
        "Davide Wiest"
      ],
      "categories": [
        "cs.LG",
        "stat.ML"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 7 figures. Code: https://github.com/Axym-Labs/iewc",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "uniform IEWC improves ImageNet-R accuracy over matched EWC by 2.00 percentage points (95% CI 0.93-3.07).",
      "signals": [],
      "headline": "継続学習における勾配スケールの偏りを解消したIEWC（Improved Elastic Weight Consolidation）",
      "what": "古いタスクの知識を保護する手法であるEWCを、最適化制約（CLOC）の観点から再定義・改善した手法です。従来のEWCが損失勾配の大きさに依存してサンプルを重み付けしていた問題を特定し、損失レベルセットの一次近似に基づいて出力の変化をペナルティ化するよう変更しました。",
      "enables": "画像分類、セグメンテーション、言語、拡散モデルなど多岐にわたるタスクでEWCを上回る性能を示しました。ImageNet-Rの精度評価では、従来のEWCと比較して2.00%の精度向上を達成しています。",
      "why_it_matters": "正則化ベースの継続学習における根本的な欠陥を理論的に修正し、特定のデータに偏らないより安定した知識保持を可能にしました。",
      "tags": [
        "継続学習",
        "最適化",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16219",
      "title": "GC-MoE on SM120: Overlapping Expert-Parallel Token Dispatch with Warp-Level FP8xFP4 Block-Scaled MMA on Consumer Blackwell",
      "url": "https://arxiv.org/abs/2611.16219",
      "pdf": "https://arxiv.org/pdf/2611.16219",
      "authors": [
        "Yong Li",
        "Haoyu Wang",
        "Kan Liu",
        "Tao Lan"
      ],
      "categories": [
        "cs.DC",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 10 tables, 6 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "the operator is 1.522x and 1.387x faster than the FlashInfer CuTe DSL W4A8 MegaMoE",
      "signals": [],
      "headline": "民生用Blackwell GPU上でMoEデコーディングを高速化するGC-MoEの実装",
      "what": "民生用Blackwell（SM120）向けのMixture-of-Experts（MoE）デコーディング高速化技術です。ハードウェア固有の制限がある中、FP8のアクティベーションとFP4の重みを用いたブロック単位のスケーリング行列演算（MMA）を実装し、トークン転送と計算のオーバーラップを最適化しました。",
      "enables": "8枚のRTX PRO 5000を用いた環境で、FlashInferやCakeなどの主要なライブラリと比較して最大1.522倍の高速化を達成しました。推論時のレイテンシを大幅に削減しつつ、高い数値的精度（余弦類似度0.9999997以上）を維持しています。",
      "why_it_matters": "データセンター向けではない民生用GPUの計算資源を最大限に引き出し、大規模なMoEモデルの効率的な推論を実現しました。",
      "tags": [
        "MoE",
        "GPU最適化",
        "推論アクセラレーション"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16010",
      "title": "Iris-Z: Scaling One Generative Model Past Specialist Geometry Models",
      "url": "https://arxiv.org/abs/2611.16010",
      "pdf": "https://arxiv.org/pdf/2611.16010",
      "authors": [
        "Alejandro Ca\\~nada",
        "Chema Garabito"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 9 figures, 6 tables. Code and models: https://github.com/speridlabs/iris-z-sdk",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "surpasses state-of-the-art specialists on established depth benchmarks while keeping the generative abilities of the backbone",
      "signals": [],
      "headline": "単一の生成モデルで汎用的な視覚知能を実現し、専用の幾何学モデルの性能を上回るIris-Z",
      "what": "単一のバックボーンで画像生成、デノイジング、画像理解、および深度（Depth）推定を同時に処理する汎用的な生成モデルです。タスク専用のアーキテクチャやレイヤーを追加せず、スケーリングによって画像と深度の同時生成や、写真からの深度推定、任意の深度への描き込みを実現します。",
      "enables": "十分なスケーリングにより、既存の深度推定専用のSOTAモデルをベンチマークで上回る性能を達成しました。同時に、ベースとなったモデルの画像生成能力も損なわず維持しています。",
      "why_it_matters": "コンピュータビジョンや3D理解の分野においても、タスク専用設計ではなく汎用アーキテクチャのスケールアップが有効であることを証明しました。",
      "tags": [
        "画像生成",
        "コンピュータビジョン",
        "3D理解"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.17194",
      "title": "eDMD: Endpoint Distribution Matching for Few-Step Diffusion Distillation",
      "url": "https://arxiv.org/abs/2611.17194",
      "pdf": "https://arxiv.org/pdf/2611.17194",
      "authors": [
        "Tong Zhao",
        "Xianfang Zeng",
        "Yucheng Han",
        "Ruoyu Wang",
        "Mingkun Lei",
        "Gang Yu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code Link: see https://github.com/Westlake-AGI-Lab/eDMD",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "eDMD consistently outperforms existing distribution matching methods for 4-step generation.",
      "signals": [],
      "headline": " studentの最終出力のみを用いて高精度に蒸留するeDMD（Endpoint Distribution Matching）",
      "what": "拡散モデルの数ステップへの蒸留において、中間状態ではなく studentの「最終的な出力」のみを教師モデルの分布と一致させる手法です。単一の共有フェイクスコアモデルを用いて studentの全デノイジングステップを補正し、さらに複数ステップの軌跡を用いた高精度な教師（Precise Teacher）を導入しています。",
      "enables": "SD3-MediumやFLUX.2-klein、Qwen-Image-2.1などの最新モデルにおいて、4ステップ生成で既存の分布マッチング手法を安定して上回る品質を実現しました。",
      "why_it_matters": "中間ステップの分布の不一致が studentの学習信号を歪めるという問題を解決し、より少ないステップで高品質な画像を生成するための理論的保証を提供しました。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "モデル蒸留"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16255",
      "title": "HybridCT: ML Accelerated Tomography for Climate Relevant 3D Cloud Observations",
      "url": "https://arxiv.org/abs/2611.16255",
      "pdf": "https://arxiv.org/pdf/2611.16255",
      "authors": [
        "Linda Forster",
        "Nicholas J. LaHaye",
        "Marcin J. Kurowski",
        "Anna Jungbluth",
        "Bernhard Mayer",
        "Anthony B. Davis"
      ],
      "categories": [
        "physics.ao-ph",
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
        "cap"
      ],
      "star_quote": "HybridCT thus provides a scalable route toward large-scale observations of 3D cloud structure",
      "signals": [],
      "headline": "機械学習による加速で雲の3次元構造を高速に復元するHybridCT",
      "what": "パッシブな多角観測画像から雲の3次元的な消散係数を復元する断層撮影（トモグラフィ）手法です。ニューラルネットワークによるエミュレータが放射輝度を光学厚さに変換し、その投影結果を代数的再構成法（SART）で高速に反転させるハイブリッド構成をとっています。",
      "enables": "従来の物理ベース手法（AT3D）では約30分かかっていた計算を3.5秒で完了させ、500倍以上の高速化を達成しました。また、復元精度の指標であるRMSEも22.7 km⁻¹から13.3 km⁻¹へと改善しました。",
      "why_it_matters": "気候予測の大きな不確実性要因である雲の3次元構造を大規模かつリアルタイムに観測・解析する道を拓きました。",
      "tags": [
        "気象観測",
        "コンピュータビジョン",
        "科学計算"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16822",
      "title": "A Class of Bayesian Conjugate Distributions on $SE_n(3)$ for Motion Estimation",
      "url": "https://arxiv.org/abs/2611.16822",
      "pdf": "https://arxiv.org/pdf/2611.16822",
      "authors": [
        "Shijie Wang",
        "Haichao Gui",
        "Rui Zhong"
      ],
      "categories": [
        "stat.ME",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "enabling exact closed-form Bayesian inference.",
      "signals": [],
      "headline": "剛体運動の不確かさを表現するSE_n(3)上のベイズ共役分布（BCD）の提案",
      "what": "拡張特殊欧州群SE_n(3)上での運動推定と不確かさ表現のための、新たなベイズ共役分布（BCD）のクラスを提案しました。局所座標の特異点を避けつつ、観測分布に対して共役性を持たせることで、ベイズ推論を厳密な閉形式（Closed-form）で実行できます。",
      "enables": "UAV（無人航空機）の姿勢および速度推定において、従来の Lie群ベースの拡張カルマンフィルタを上回る精度と収束性を示しました。不確実性が大きい初期状態やノイズの多い環境でも、正確な状態推定を維持します。",
      "why_it_matters": "ロボット工学や航空宇宙分野において、非線形な回転・併進運動の不確かさを数学的に厳密かつ効率的に扱う手法を確立しました。",
      "tags": [
        "ロボティクス",
        "ベイズ統計",
        "運動推定"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15777",
      "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
      "url": "https://arxiv.org/abs/2611.15777",
      "pdf": "https://arxiv.org/pdf/2611.15777",
      "authors": [
        "Lichen Li",
        "Ziping Dong",
        "Sicheng Feng",
        "Qi Li",
        "Xinchao Wang"
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
      "comment": "32 pages, 10 figures, 7 tables. Project page: https://lichenlillc.github.io/SO-Arena",
      "hf_upvotes": 74,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲74"
      ],
      "headline": "System One（高速思考）モデルの能力と信頼性を評価するベンチマークSO-Arena",
      "what": "長い推論ステップを介さない「System One」モデルの、11ドメインにわたる能力と信頼性を評価するベンチマークです。正解ラベルの厳密な検証、難易度別の評価、サンドボックス内での対話的実行、および選択肢の変更に対する「決定の安定性」などを多角的に測定します。",
      "enables": "21種類のモデルを評価した結果、スケーリング則がドメインごとに異なることや、高い正解率が必ずしも意思決定の安定性を保証しないことを明らかにしました（最高性能のモデルが信頼性では7位）。",
      "why_it_matters": "単なる回答の正否だけでなく、モデルが「なぜ・どれだけ確実に」その回答を選んでいるかという信頼性の側面を可視化しました。",
      "tags": [
        "LLM",
        "ベンチマーク",
        "信頼性評価"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.14815",
      "title": "BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model",
      "url": "https://arxiv.org/abs/2611.14815",
      "pdf": "https://arxiv.org/pdf/2611.14815",
      "authors": [
        "Junyoung Seo",
        "Jaewoo Seo",
        "Seungryong Kim",
        "Laura Leal-Taix\\'e",
        "Xiuming Zhang",
        "Seung Wook Kim"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://research.nvidia.com/labs/sil/projects/birddreams/",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "鳥瞰図と一人称視点のビデオを同時生成する自動運転世界モデルBirdDreams",
      "what": "単一のカメラ画像から、一人称視点の映像と鳥瞰図（BEV）映像を同時に自動再帰的に生成する自動運転世界モデルです。BEV生成が道路や車両の動きを物理的スケールで捉え、その情報がアテンション機構を通じて一人称視点の詳細な生成にフィードバックされます。",
      "enables": "従来の視点のみを生成するモデルよりも正確に自車の軌跡をたどり、周囲の車両の挙動もより現実的にシミュレートできるようになりました。HDマップや周辺車両の状態入力なしで推論可能です。",
      "why_it_matters": "オクルージョンや見かけの歪みに左右されにくいBEVを介在させることで、物理的に一貫した走行環境のシミュレーションを実現しました。",
      "tags": [
        "自動運転",
        "世界モデル",
        "動画生成"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16748",
      "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
      "url": "https://arxiv.org/abs/2611.16748",
      "pdf": "https://arxiv.org/pdf/2611.16748",
      "authors": [
        "Yuxuan Chen",
        "Xiaojie Li",
        "Hao Chen",
        "Juncheng Ma",
        "Kewei Zhang",
        "Zhongjing Du"
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
      "hf_upvotes": 42,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲42"
      ],
      "headline": "LLMの物理知識を活用して動画生成モデルを自己改善させるPhysLoop",
      "what": "LLMが持つ物理的な知識を動画生成モデルの改善に活用するフレームワークです。LLMをガイドとして使い、生成された動画の物理的な妥当性を判定・修正させることで、高品質な学習データセットの構築や、推論時の動画修復を自動的に行います。",
      "enables": "10万件の物理的に整合性の取れた動画データセットを構築しました。これにより、人間の介入を最小限に抑えつつ、物理現象や因果関係の表現が不自然な動画を自動的に特定し、修正することが可能になりました。",
      "why_it_matters": "動画生成モデルが直面している「物理的な不自然さ」を、LLMを教師役とした自己改善ループ（RSI）によって解消する手法を提示しました。",
      "tags": [
        "動画生成",
        "LLM",
        "自己改善"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15131",
      "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
      "url": "https://arxiv.org/abs/2611.15131",
      "pdf": "https://arxiv.org/pdf/2611.15131",
      "authors": [
        "Hengyuan Cao",
        "Biao Gong",
        "Guoshan Lu",
        "Qiyuan Zhang",
        "Lin Liu",
        "Yiding Tian"
      ],
      "categories": [
        "cs.CV",
        "cs.SD"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "https://duo-v1.github.io/",
      "hf_upvotes": 37,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲37"
      ],
      "headline": "リアルタイムな双方向対話を実現するフルデュプレックス世界モデルDuo v1",
      "what": "視聴覚情報の知覚とレスポンス生成を同時に行う「Reciprocal World Model（RWM）」に基づく対話モデルです。自己再帰モデルを用いてインタラクションの推論を行い、Intent（意図）とRealization（具現化）のトークンを共通の時間軸上で同期させることで、自然な割り込みやリアルタイム応答を可能にします。",
      "enables": "ユーザーが話している最中に反応したり、カメラで共有した物体をリアルタイムで操作・変更したりといった高度な双方向対話を、キーボード操作なしで実現しました。",
      "why_it_matters": "従来の「指示を受けてから生成する」一方通行のモデルではなく、人間のような動的で連続的な相互作用を可能にする新しい世界モデルの形を示しました。",
      "tags": [
        "マルチモーダル",
        "リアルタイム対話",
        "世界モデル"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.15348",
      "title": "Breath-Dx: A Time Series Classification Benchmark for Disease Screening with eNose",
      "url": "https://arxiv.org/abs/2611.15348",
      "pdf": "https://arxiv.org/pdf/2611.15348",
      "authors": [
        "Ivan Poddiakov",
        "Ivan Kruzhilov",
        "Galina Zubkova",
        "Svetlana Erofeeva",
        "Andrey Savchenko",
        "Pavel Blinov"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "IEEE ICDM 2026 - Best Paper Runner-Up (Applied Track)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "電子鼻による疾患スクリーニングのための時系列分類ベンチマークBreath-Dx",
      "what": "呼気分析を行う電子鼻（eNose）技術を用いて、疾患を特定するための時系列分類ベンチマークです。最大級の公開データセットScent of Healthを用い、センサーの経時的な劣化（ドリフト）を考慮した時間分割による評価プロトコルを定義しました。",
      "enables": "10種類の手法を評価し、再帰的アーキテクチャが肺疾患などでAUC 0.74〜0.76の精度を達成することを確認しました。一方で、ランダムな分割に比べ時間分割評価ではAUCが0.05〜0.12低下し、実務におけるセンサー劣化の影響を定量化しました。",
      "why_it_matters": "これまで統一されていなかったeNoseの研究における評価基準を確立し、センサードリフトという実用上の大きな課題を克服するための基盤を提供しました。",
      "tags": [
        "医療AI",
        "時系列データ",
        "センサー技術"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16065",
      "title": "Tokenized Reward Systems for Federated Learning: The Privacy vs. Fairness Tradeoff",
      "url": "https://arxiv.org/abs/2611.16065",
      "pdf": "https://arxiv.org/pdf/2611.16065",
      "authors": [
        "Andreas Sendros",
        "Nikolaos Pavlidis",
        "Vasilios Perifanis",
        "Pavlos S. Efraimidis"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CR"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 3 figures, 5 tables. Accepted at the 12th Balkan Conference in Informatics (BCI 2026), Best Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "連合学習の報酬分配におけるプライバシーと公平性のトレードオフを解明",
      "what": "連合学習において、参加者への報酬を分配するスマートコントラクトの設計と評価を行いました。個々の貢献スコアを公開する方式と、ゼロ知識証明（ZK）を用いてスコアを隠すプライバシー保護方式を比較し、攻撃者に対する頑健性を分析しました。",
      "enables": "プライバシー保護を優先するとシステムの頑健性が著しく低下し、攻撃者が獲得する報酬が倍増することを明らかにしました。モデルが収束するにつれて、正当な更新とノイズの区別が困難になり、攻撃者が報酬を独占する「後期の崩壊」が発生することを証明しました。",
      "why_it_matters": "ブロックチェーンを用いたインセンティブ設計において、暗号学的な安全性が必ずしも経済的・運用的な公平性を保証しないという重要な限界を提示しました。",
      "tags": [
        "連合学習",
        "ブロックチェーン",
        "プライバシー"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16356",
      "title": "DIAGNO: Diagonal Spherical Neural Operators for Heterogeneous Earth Dynamics Modeling",
      "url": "https://arxiv.org/abs/2611.16356",
      "pdf": "https://arxiv.org/pdf/2611.16356",
      "authors": [
        "Herui Li",
        "Bin Lu",
        "Haonan Qi",
        "Lei Zhou",
        "Luoyi Fu",
        "Xinbing Wang"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "35 pages, 13 figures, 8 tables. Accepted at NeurIPS 2026 (Main Track, Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "地球規模の不均質な動態を球面スペクトル空間で捉える気象予測モデルDIAGNO",
      "what": "地球の球面幾何学に最適化されたDiagonal Spherical Neural Operatorsです。従来のモデルが仮定していた「回転等変性（均質なシステム）」の制約を取り払い、スペクトルモード間の相互作用を直接計算することで、地域ごとの不均一な気象・海洋変化を正確にモデル化します。",
      "enables": "大気・海洋の再解析データを用いた多ステップ予測において、既存のSOTAを上回る性能を達成しました。また、気候の異常値（アノマリー）の特定や物理的一貫性の維持においても高い忠実度を示しました。",
      "why_it_matters": "地球を「一様な球体」として扱う理想化を脱し、現実の複雑で不均一な地球ダイナミクスをネイティブに扱える演算子を実現しました。",
      "tags": [
        "気象予測",
        "科学計算",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16487",
      "title": "HeMeR: Heterogeneous Memory Reconciliation for Embodied Agents via Structured KV Reuse",
      "url": "https://arxiv.org/abs/2611.16487",
      "pdf": "https://arxiv.org/pdf/2611.16487",
      "authors": [
        "Saehun Chun",
        "Wonje Choi",
        "Jinwoo Jang",
        "Taeyoon Kwack",
        "Honguk Woo"
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
      "comment": "Accepted at NeurIPS 2026 (Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "動的に変化する記憶コンテキストのKVキャッシュを効率的に再利用するHeMeR",
      "what": "エージェントが持つ複数の記憶モジュール（宣言的・手続き的・ワーキングメモリ）が更新される際、変更されていない内容のKVキャッシュを特定して再利用（Reconciliation）するフレームワークです。推論ごとにすべてのコンテキストを再計算するのではなく、更新された差分のみを処理します。",
      "enables": "実環境のロボット展開において、タスク成功率83.20%を維持しつつ、ステップあたりの推論時間を2.94秒から1.87秒に短縮しました。メモリ内容が進化し続ける長期的な対話や操作においても、安定した推論速度を提供します。",
      "why_it_matters": "メモリを活用するエージェントの推論コストを大幅に削減し、リアルタイム性が要求される物理的なロボット操作などへの適用を容易にしました。",
      "tags": [
        "AIエージェント",
        "ロボティクス",
        "推論加速"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.16560",
      "title": "When and How SignSGD Outperforms SGD: A Functional Scaling Law Perspective",
      "url": "https://arxiv.org/abs/2611.16560",
      "pdf": "https://arxiv.org/pdf/2611.16560",
      "authors": [
        "Zilin Wang",
        "Binghui Li",
        "Jia-Nan Wang",
        "Lean Wang",
        "Jinbo Wang",
        "Lei Wu"
      ],
      "categories": [
        "stat.ML",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 as a spotlight paper",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "SignSGDがSGDを凌駕する条件を機能的スケーリング則から解明",
      "what": "勾配の符号のみを用いるSignSGDの学習ダイナミクスを、機能的スケーリング則（FSL）を用いて解析しました。勾配ノイズが符号演算を平滑化し、ヘッシアンの特性を変化させる「ノイズ誘起プレコンディショニング」というメカニズムを定式化しました。",
      "enables": "SignSGDが、困難なタスク（Hard-task）においてSGDよりも高いデータ効率を達成することを理論的に示しました。また、大規模なバッチサイズを使用しても効率が低下しにくく、最適化ステップ数を削減できることを証明しました。",
      "why_it_matters": "LLMの事前学習などで注目されるSignSGDの挙動を、バッチサイズやタスクの難易度と関連付けて説明する理論的枠組みを提供しました。",
      "tags": [
        "機械学習理論",
        "最適化",
        "LLM"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.17287",
      "title": "Negative-Only Policy Optimization for One-Sided Verifiable Rewards",
      "url": "https://arxiv.org/abs/2611.17287",
      "pdf": "https://arxiv.org/pdf/2611.17287",
      "authors": [
        "Jiacheng Xu",
        "Shuo He",
        "Fuxiang Zhang",
        "Chaojie Wang",
        "Bo An"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
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
      "headline": "偽陽性の多い報酬環境でも負例のみを用いて方策を最適化するNOPO",
      "what": "検証機（Verifier）が「間違い」は確実に指摘できるが「正解」は確信できない、片側検証（One-sided Verifiability）環境向けの学習手法です。正解候補を直接強化せず、確実に否定された負例（Verified Negatives）のみを抑制し、非否定例の割合に応じて更新を調整します。",
      "enables": "コード生成、論理推論、数学ベンチマークにおいて、完全な報酬が得られない状況下で既存の強化学習手法を上回るPass@kスコアを記録しました。推論時の計算量スケーリングや他のベンチマークへの転送においても高い性能を維持します。",
      "why_it_matters": "部分的なチェックをすり抜けるショートカット学習（報酬ハック）を効果的に防ぎ、現実的な検証環境での強化学習の信頼性を高めました。",
      "tags": [
        "強化学習",
        "LLM",
        "プログラム生成"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    },
    {
      "id": "2611.17331",
      "title": "TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models",
      "url": "https://arxiv.org/abs/2611.17331",
      "pdf": "https://arxiv.org/pdf/2611.17331",
      "authors": [
        "Chin-Yang Lin",
        "Ryo Hachiuma",
        "Jaesung Choe",
        "Min-Hung Chen",
        "Yu-Chiang Frank Wang",
        "Yen-Yu Lin"
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
      "comment": "NeurIPS 2026 (Spotlight). Project page: https://test-time-baking.github.io",
      "hf_upvotes": 20,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "Decoder-only視点合成モデルを23倍高速化するテスト時ベイク技術（TTB）",
      "what": "3D形状を復元せずに新しい視点を生成するLarge View Synthesis Models (LVSMs) のための高速化手法です。推論時に、グローバルなシーン情報を軽量なMLPに「焼き付ける（Baking）」ことで、計算負荷の高いクロスビューアテンションを代替します。",
      "enables": "最新のSOTAモデルと同等の描画品質を維持しながら、最大23倍のレンダリング高速化を達成しました。カメラ情報と画像情報を分離して扱うことで、少ない学習データでも高品質な出力を可能にします。",
      "why_it_matters": "高品質だが推論が重かったDecoder-only型の視点合成モデルを、リアルタイムアプリケーションで利用可能なレベルまで高速化しました。",
      "tags": [
        "コンピュータビジョン",
        "3D生成",
        "推論加速"
      ],
      "fetched_at": "2026-11-14T11:01:11.446762+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.15777",
      "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
      "abstract": "System One models promise fast, general-purpose decision-making without lengthy token generation. However, understanding their capability spectrum and decision reliability requires more than aggregate performance on current benchmarks. Existing evaluations often provide limited insight into the breadth of model capabilities and the reliability of their decisions. We introduce SO-Arena, a benchmark characterizing the capability spectrum and decision reliability of System One models across 11 domains and five capability families. For the capability spectrum, SO-Arena offers evidence-grounded evaluation through reliable sources and manual verification of reference labels against model-visible inputs; fine-grained capability assessment through domain-specific difficulty criteria; and realistic interactive evaluation, where models iteratively execute actions in sandboxes. Reasoning-intensive tasks further enable system one-two comparison. Beyond accuracy, SO-Arena assesses decision reliability through two complementary measures: decision stability under controlled option-set changes and missing-answer recognition when no valid option is available. Evaluations across 21 models reveal that the benefits of scaling and additional reasoning vary substantially across domains. More importantly, strong overall performance does not necessarily imply reliable decision-making: the best-performing System One model ranks only seventh in reliability. Together, these findings highlight the need to characterize capability spectrum and decision reliability as complementary dimensions, providing a systematic view of the strengths and limitations of System One models.",
      "upvotes": 137,
      "github_stars": 26,
      "github_repo": "https://github.com/holdrain/SO-Arena",
      "project_page": "https://lichenlillc.github.io/SO-Arena",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.15777",
      "arxiv_url": "https://arxiv.org/abs/2611.15777",
      "title_ja": "SO-Arena：システム1モデルの能力範囲と信頼性のベンチマーキング",
      "summary_ja": "11領域にわたる評価を通じ、高速な意思決定を行うシステム1モデルの能力と信頼性を多角的に測定する。"
    },
    {
      "id": "2611.12806",
      "title": "Learning Heterogeneous Tactile Representation for General Dexterous Manipulation",
      "abstract": "Tactile sensing is an indispensable modality for contact-rich dexterous manipulation, a capability that hints at the ultimate frontiers of embodied intelligence. However, commercially available tactile sensors are still at a relatively early stage of development, with each type of sensor offering irreplaceable strengths alongside its own drawbacks. A key challenge is thus to free tactile understanding from sensor-specific physics, so that embodied models can effectively leverage heterogeneous tactile data. To this end, we develop LingBot-Touch, a tactile foundation model characterized by the following properties. (i) Our model yields a unified representation across different tactile sensors (i.e., piezoresistive, magnetic, and visuotactile sensors), and is easily extensible to new sensor types. (ii) The resulting tactile tokens are plug-and-play: they can be seamlessly integrated into policy models across paradigms, from diffusion policy to vision-language-action (VLA) models such as π_{0.5} and LingBot-VLA, consistently enhancing manipulation dexterity. (iii) Extensive experiments, spanning simulation and real-robot deployments across multiple hardware platforms, demonstrate that our tactile representation substantially benefits complex manipulation tasks while maintaining strong computational efficiency. We believe the findings in this work demonstrate the potential of leveraging cross-sensor data to scale tactile learning, and offer encouraging insights for the design of future hardware and embodied models.",
      "upvotes": 104,
      "github_stars": 605,
      "github_repo": "https://github.com/Robbyant/lingbot-touch",
      "project_page": "https://technology.robbyant.com/lingbot-touch",
      "comments": 2,
      "org": "Robbyant",
      "url": "https://huggingface.co/papers/2611.12806",
      "arxiv_url": "https://arxiv.org/abs/2611.12806",
      "title_ja": "LingBot-Touch：汎用的な器用な操作のための異種触覚表現の学習",
      "summary_ja": "異なる物理特性を持つ複数の触覚センサーから統一的な表現を抽出し、多様なロボット操作に応用可能な基盤モデルを提案。"
    },
    {
      "id": "2611.14033",
      "title": "Few-Step Streaming Video Generation via Condition Shifting",
      "abstract": "Few-step sampling reduces the cost of streaming video generation. Distribution Matching Distillation (DMD) supervises few-step generators with a separate fake-score network, which adds training memory and computation and must track the evolving generator. We extend APEX to streaming video by using condition shifting to estimate the velocity field of the generated distribution within the generator. The original text condition selects generation, while a shifted condition selects fake estimation using the same parameters. This removes the independent fake network while retaining S2-Avatar's frozen reference teacher, Self-Replay Forcing, and perceptual regularization. We evaluate APEX on 180-second videos using three backbone evaluations per block and a one-step spatial Refiner, with a 70-case human study and a 320-case StreamAV-Bench comparison. Compared with S2-Avatar, APEX achieves higher video instruction fulfillment on the Progressive track (3.856 versus 3.831) and higher visual aesthetics across both tracks (0.641898 versus 0.632606). Human raters favor APEX most strongly on instruction following, with +30.0% net preference, followed by consistency and video quality at +4.3% each. Motion quality favors S2-Avatar, audiovisual synchronization is predominantly tied, and usability is unchanged. Separate measurements under matched training settings show 4.4% lower peak allocated GPU memory per GPU and 9.2% shorter mean iteration time than DMD.",
      "upvotes": 89,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.vidu.com/vidu-stream/avatar",
      "comments": 3,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.14033",
      "arxiv_url": "https://arxiv.org/abs/2611.14033",
      "title_ja": "条件シフトによる少数ステップのストリーミングビデオ生成",
      "summary_ja": "独立した判別ネットワークを排除し、条件シフトを用いた速度場推定により低コストで高品質な長時間動画を生成する。"
    },
    {
      "id": "2611.14320",
      "title": "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents",
      "abstract": "External memory enables LLM agents to improve from experience by distilling trajectories of past tasks into concise lessons for new tasks. However, memory can also lead to memory-induced degradation, where an agent fails on tasks it would solve without memory, often because it follows a lesson that is incorrect, or misapplies or misreads a valid one. This is because lessons are inferred from trajectories labeled only with task success or failure, yet are typically provided without the trajectories they came from, leaving the agent no way to check them. To address this, we introduce WikiTrace, an evidence-linked memory system designed to let agents check each lesson against its original trajectory. Specifically, motivated by the finding that a trajectory often still holds the evidence needed to catch an erroneous lesson, WikiTrace stores each lesson as a concise insight linked to a summary of why its trajectory succeeded or failed and to the raw trajectory itself. Then, on a new task, the agent starts from all insights and, whenever one lacks details needed to act, conflicts with another, or comes from a failed task, descends through its links with terminal tools to fill in missing details or correct the insight before acting. We validate WikiTrace on five agentic benchmarks, showing that it consistently outperforms existing memory approaches and a baseline given the same insights alone, while also reducing memory-induced degradation. Our code is available at https://github.com/yukyeongleee/wikitrace",
      "upvotes": 68,
      "github_stars": 29,
      "github_repo": "https://github.com/yukyeongleee/wikitrace",
      "project_page": "https://yukyeongleee.github.io/wikitrace/",
      "comments": 8,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.14320",
      "arxiv_url": "https://arxiv.org/abs/2611.14320",
      "title_ja": "証拠連結メモリ：LLMエージェントにおけるメモリ起因の性能低下の抑制",
      "summary_ja": "過去の教訓を元の実行トレースと紐付けることで、エージェントが誤った教訓を鵜呑みにせず検証できる仕組みを導入。"
    },
    {
      "id": "2611.12762",
      "title": "Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery",
      "abstract": "We introduce Sage-Taiyi, a metacognition-inspired architecture that uses accumulated scientific understanding to guide what to investigate next and how to investigate it. Through explicit monitoring and control, the system revises its understanding of evidence, assumptions, and unresolved questions, then uses these assessments to adapt research targets and select reusable reasoning methods. On Taiyi-Bench, an AI co-scientist ideation benchmark comprising 265 tasks from 50 papers across ten disciplines, Sage-Taiyi ranks first on all eight metrics of historical rediscovery and open-ended ideation, achieving an Overall score of 54.0 compared with 47.9 for the strongest baseline, AI Scientist-v2. It also performs well on two external scientific ideation benchmarks. Five expert-guided collaborations further connect its proposals to experimental and computational validation across chemistry, materials science, and engineering. In chemistry, reaction-condition optimization raises the yield of cobalt-catalyzed carbonylation from trace amounts to 84% and photocatalytic allylic amination from 13% to 69%. These results support metacognitive regulation as an approach to scientific ideation and its progression toward practical validation.",
      "upvotes": 59,
      "github_stars": 18,
      "github_repo": "https://github.com/Alpha-Innovator/Sage-Taiyi",
      "project_page": "https://alpha-innovator.github.io/Sage-Taiyi/",
      "comments": 3,
      "org": "Shanghai AI Laboratory",
      "url": "https://huggingface.co/papers/2611.12762",
      "arxiv_url": "https://arxiv.org/abs/2611.12762",
      "title_ja": "Sage-Taiyi：科学的発見のためのメタ認知的アーキテクチャ",
      "summary_ja": "科学的理解を自己監視・制御し、次に調査すべき対象を適応的に選択することで、既存手法を上回る科学的発想力を実現。"
    },
    {
      "id": "2611.10771",
      "title": "WorldFoundry: Towards Unified Infrastructure for World Intelligence",
      "abstract": "Visual generative models increasingly blur the line between synthesizing observations and simulating environments. Yet visual plausibility alone does not constitute successful world modeling: compelling outputs may lack persistent state, physical dynamics, or causally consistent responses to interactions. We define a generative world model as a predictive dynamical system that maintains a persistent, history-conditioned representation of an environment, updates that representation in response to actions or interventions, and generates temporally coherent trajectories that reflect outcomes under observed and counterfactual interventions. From this definition, we derive an intelligence-oriented framework spanning perceptual grounding, persistent state modeling, controllable transformation, dynamics-aware prediction, and closed-loop interaction. We present WorldFoundry, open-source infrastructure for reproducible inference and evaluation across video, 3D and 4D, embodied action, and interactive world systems. WorldFoundry unifies model and benchmark discovery, runtime and asset preparation, execution orchestration, artifact management, and interactive visualization, while modality-specific adapters preserve native inputs, execution semantics, output representations, and evaluation protocols. Explicit manifests, durable artifact contracts, and evidence-aware scorecards separate execution readiness from evaluative claims, making each claim traceable to its supporting artifacts. The catalog contains 270 model entries, 74 benchmarks, and 62 registered metric entries, with readiness and execution evidence recorded separately. WorldFoundry enables reproducible comparison of persistent, controllable dynamics across heterogeneous systems, advancing the field from perceptual synthesis toward measurable world intelligence.",
      "upvotes": 58,
      "github_stars": 352,
      "github_repo": "https://github.com/OpenEnvision/WorldFoundry",
      "project_page": "https://openenvision.org/WorldFoundry/",
      "comments": 2,
      "org": "OpenEnvision",
      "url": "https://huggingface.co/papers/2611.10771",
      "arxiv_url": "https://arxiv.org/abs/2611.10771",
      "title_ja": "WorldFoundry：世界知能のための統一インフラに向けて",
      "summary_ja": "物理的な一貫性と持続的な状態を持ち、相互作用に反応する動的なシステムとしての「生成的世界モデル」を定義。"
    },
    {
      "id": "2611.12885",
      "title": "World In-Context Learning for Agentic Robot Manipulation",
      "abstract": "Trained action policies write manipulation skill into network weights, tying what is learned to the distribution it is learned from. In-context learning (ICL) avoids this coupling but has not matched trained policies, because a demonstration recorded in another scene carries no feedback from the world the robot currently faces. We observe that what an agent learns in context is semantic, recording task steps and object roles rather than visual appearance, so experience gathered in one world transfers to another. Based on this insight, we propose World In-Context Learning (WICL), a paradigm in which a frozen model starts from a demonstration, rehearses the task in a world such as a simulator, and writes the feedback into its context rather than its weights. We build RoboScript, a modular infrastructure that implements WICL for agentic manipulation. From a single demonstration, RoboScript learns each task through rehearsal in simulation, freezes the learned knowledge as a Task Memory, and deploys the frozen memory on new scenes with data isolation that ensures every deployment input is available on a real robot. On all 50 tasks of RoboTwin 2.0, RoboScript reaches 83.4% mean success across clean and randomized settings with one demonstration per task and no gradient updates, exceeding the strongest trained action policy by over 20 points. The method generalizes across visual distributions, improves through reflection, scales with the foundation model, and transfers to a physical dual-arm robot through cross-embodiment memory adaptation. With a world in the loop, a robot can learn a manipulation task in its context as well as it learns one in its weights. All code is available at https://github.com/ArcheOne-AI/RoboScript",
      "upvotes": 57,
      "github_stars": 274,
      "github_repo": "https://github.com/ArcheOne-AI/RoboScript",
      "project_page": "https://archeone-ai.github.io/RoboScript/",
      "comments": 4,
      "org": "ArcheOne-AI",
      "url": "https://huggingface.co/papers/2611.12885",
      "arxiv_url": "https://arxiv.org/abs/2611.12885",
      "title_ja": "ロボット操作のためのコンテキスト内学習「WICL」",
      "summary_ja": "実世界のデモからタスクのセマンティクスを抽出し、シミュレータでのリハーサルを経て未知の環境へスキルを転移させる。"
    },
    {
      "id": "2611.11995",
      "title": "Infrathon: Benchmarking Language Agents for Real-World, Long-Horizon AI Infra Optimization",
      "abstract": "In this work, we study whether frontier agent can continually improve real-world AI infrastructure over long horizons. We introduce Infrathon, a benchmark of diverse, long-horizon AI infrastructure optimization tasks across different levels. We evaluate six models across 150 runs with 24-hour budgets, totaling over 10,000 GPU-hours. Our results show that model rankings vary with the evaluation horizon, while 135 of the 150 runs achieve further improvements during the second half of their budgets. These findings indicate that shorter evaluations can overlook both optimization gains and changes in relative model performance. We also find agents can discover solutions that outperform human-designed baselines: Claude Opus 5.5 increases the mean KV-cache compression ratio from 6.82% with the human-designed Quant-VideoGen codec to 19.86%. Analysis of agent trajectories identifies task violations, unreliable testing, and premature completion as barriers to sustained improvement. Together, Our Infrathon framework provide resources for constructing long-horizon tasks, evaluating frontier agents, and discovering good infrastructure solutions.",
      "upvotes": 52,
      "github_stars": 37,
      "github_repo": "https://github.com/InfrathonX/Infrathon",
      "project_page": "https://infrathonx.github.io/",
      "comments": 10,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2611.11995",
      "arxiv_url": "https://arxiv.org/abs/2611.11995",
      "title_ja": "Infrathon：実世界の長期的なAIインフラ最適化ベンチマーク",
      "summary_ja": "24時間の予算内でAIインフラの最適化能力を測定し、長期評価がモデル性能の真の差を明らかにすることを示す。"
    },
    {
      "id": "2611.14815",
      "title": "BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model",
      "abstract": "Driving world models aim to simulate how a scene unfolds under different ego actions. This requires plausible motion of surrounding vehicles as well as precise ego-trajectory control. Learning vehicle motion from perspective video alone is challenging because motion is entangled with appearance and vehicles can be occluded. Prior work therefore conditions video generation on layouts that specify vehicle motion, providing control over surrounding vehicles but requiring their future trajectories as inputs. We introduce BirdDreams, an autoregressive driving world model that jointly generates perspective video and a schematic bird's-eye-view (BEV) video, making scene layout part of the predicted future. The BEV, rendered from scene annotations for training, depicts roads and vehicles as simple shapes at a fixed metric scale, providing a top-down view of their positions and motion with reduced occlusion between vehicles. Perspective video, by contrast, retains scene details that the BEV omits, such as traffic signals and object appearance. Joint attention between two video diffusion transformers, one per stream, lets each stream inform the other during generation. The predicted BEV also provides a geometric interface for ego control: we translate and rotate its latest frame along an input ego trajectory and use the resulting frames as a soft condition that shows how the scene would appear to move if only the ego vehicle moved. At inference, BirdDreams generates both videos from a single camera image without requiring an HD map or vehicle-state inputs. On PhysicalAI-AV and nuScenes, BirdDreams follows input ego trajectories more faithfully than prior driving world models and generates more plausible ego motion without ego-action conditioning. Human evaluation shows that BirdDreams outperforms a perspective-only baseline in generating realistic surrounding-vehicle behavior.",
      "upvotes": 51,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://research.nvidia.com/labs/sil/projects/birddreams/",
      "comments": 3,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.14815",
      "arxiv_url": "https://arxiv.org/abs/2611.14815",
      "title_ja": "BirdDreams：一貫性のある反応型運転世界モデルのための視点・BEV動画同時生成",
      "summary_ja": "主観映像と鳥瞰図（BEV）を同時に自己回帰生成することで、周囲の車両の動きを正確に制御・予測する運転モデル。"
    },
    {
      "id": "2610.40394",
      "title": "Scaling Mathematical Proof Supervision from Structured Textbooks",
      "abstract": "Mathematical supervision for language models is typically flattened into isolated problem-solution pairs, discarding the curricular organization and evidential structure of the original sources. We introduce TOME-Math (Textbook-Oriented Mathematical Evidence), a large-scale corpus that converts 2,118 textbooks spanning the core areas of university-level mathematics subjects into approximately 380K structured proof-supervision records while preserving chapter order, proposition-proof links, dependency references, and source provenance. Leveraging these structural signals, we explore curriculum learning across multiple mathematical subjects and characterize scaling patterns with supervision volume and source breadth. At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate. Our findings highlight structured textbooks as both a scalable source of mathematical supervision and an empirical framework for studying the impact of data organization on mathematical reasoning. We will release the corpus to facilitate further research on structured mathematical supervision.",
      "upvotes": 49,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tome-math.github.io/",
      "comments": 3,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.40394",
      "arxiv_url": "https://arxiv.org/abs/2610.40394",
      "title_ja": "構造化教科書からの数学的証明監督のスケーリング",
      "summary_ja": "2,000冊以上の数学教科書を構造化し、証明の依存関係やカリキュラム順序を保持した大規模データセットを構築。"
    },
    {
      "id": "2611.16748",
      "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
      "abstract": "Video generation models produce visually realistic videos but still struggle with physical dynamics and causal consistency. Learning from generated videos requires fine-grained physical supervision, yet reliable quality judgments, correction pairs, and controlled variations are difficult to obtain. Large language models (LLMs) possess physical knowledge, but struggle to reliably guide video generation models in producing their training videos. We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models. The harness guides and constrains LLMs throughout video generation, selection, and correction, distilling their physical knowledge into physically consistent videos. The framework supports controllable training-data construction and inference-time video repair. By identifying and correcting failures, PhysLoop marks a key milestone toward recursive self-improvement (RSI) in video generation models with limited human intervention. We release 100K videos spanning diverse, realistic indoor and outdoor scenes, along with generation tools and two evaluation datasets: PhysLoop-Gen and PhysLoop-Repair. We evaluate controllable generation and localized repair on these datasets, respectively, and assess physical behavior on the external Physics-IQ Verified benchmark.",
      "upvotes": 46,
      "github_stars": 37,
      "github_repo": "https://github.com/DAGroup-PKU/PhysLoop",
      "project_page": "https://chenyx24.github.io/PhysLoop-site/",
      "comments": 4,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.16748",
      "arxiv_url": "https://arxiv.org/abs/2611.16748",
      "title_ja": "PhysLoop：LLMの物理知識を活用した自己改善型動画生成モデル",
      "summary_ja": "LLMの物理知識を用いて動画生成の選択と修正をガイドし、物理的に整合性のある動画生成能力を自己改善させる。"
    },
    {
      "id": "2611.14210",
      "title": "Tree-Ising: Repairing Language Models with Bit-Level Ising Edits",
      "abstract": "Weight-space programming, introduced in recent MIT work by Takehi et al., enables a frontier LLM agent to read a network's weights and write a repair. Their GPT-6 Astra agent corrected the reasoning loops of Qwen3.5-0.8B without gradients, using 158 agent turns, 89.7 million tokens, and 50 forward-pass requests. Our method, Tree-Ising, casts this repair as a sparse discrete optimization problem over the model's own BF16 weights. Forward statistics define an objective that weakens a loop direction, strengthens a concluding direction, and preserves the layer's output on productive tokens. Within a state-tree representation, where lossless BF16 storage acts as a special case, the admissible edits are sign flips and exponent shifts that preserve all shared group exponents and mantissas. We decompose this objective exactly into independent QUBO (Ising) problems, one per output row, which we solve on a GPU using simulated annealing or quantum-inspired simulated bifurcation. On the agent's two layers, Tree-Ising achieves 54.6% on MATH-500, outperforming the agent's edit (51.7%) under the same evaluation protocol, while the base model scores 7.9% as reported. The simulated bifurcation solver yields a statistically indistinguishable repair at 55.1%. Both solvers outperform the agent edit across all five math benchmarks, with statistically significant improvements on MATH-500 and GSM8K after correcting for multiple comparisons. Our approach modifies 13% to 17% fewer weights and reduces BF16 bit flips by a factor of 2.2 to 2.3. It requires only four forward-pass requests and zero LLM tokens, with the annealing recipe costing about $0.90 in GPU time. On Qwen3.5-2B, with layers and dose selected using only the base model, the same recipe increases greedy GSM8K accuracy from 21.6% to 69.4%. As a proof of concept, we execute an eight-variable repair subproblem using QAOA on an IBM Heron processor.",
      "upvotes": 46,
      "github_stars": 14,
      "github_repo": "https://github.com/TheQuantumGOAT/Tree-Ising",
      "project_page": "",
      "comments": 6,
      "org": "",
      "url": "https://huggingface.co/papers/2611.14210",
      "arxiv_url": "https://arxiv.org/abs/2611.14210",
      "title_ja": "Tree-Ising：ビットレベルのイジング編集による言語モデルの修復",
      "summary_ja": "モデルの重みを離散最適化問題として扱い、勾配を用いずに特定の推論ループなどの不具合を直接修正する手法。"
    },
    {
      "id": "2611.13004",
      "title": "G-STAR: Group-Scaled Token Capacity for Deeply Compressed Autoregressive Generation",
      "abstract": "Discrete autoregressive models offer a scalable framework for image generation. However, they face a fundamental trade-off: long token sequences preserve representation quality but slow generation, while aggressive spatial compression reduces representation capacity. Based on product quantization, we show that, under a fixed nominal information budget, group size should scale quadratically with the per-axis spatial compression factor. Building on this principle, we propose GSTAR, a spatial--group co-scaling framework that enables \\(32\\times\\) and even effective \\(64\\times\\) compression while preserving strong reconstruction, understanding, and generation performance. Since larger groups introduce intra-group dependencies that must be modeled efficiently, we analyze their impact on inference latency and generation quality and introduce a semi-autoregressive decoder that combines parallel feature computation with lightweight causal modeling. With these designs, our highly compressed models perform competitively with leading models across five representative text-to-image benchmarks (GenEval, DPG-Bench, PRISM, LongText-Bench, and Qwen-Image-Bench). At \\(1024\\times1024\\) resolution, our model delivers a \\(20\\times\\) speedup over prior discrete autoregressive models, generating each image in 2.5 seconds on a single NVIDIA H200. Together, these results show that highly compressed discrete representations can enable high-quality autoregressive generation at low latency.",
      "upvotes": 45,
      "github_stars": 27,
      "github_repo": "https://github.com/DAGroup-PKU/G-STAR",
      "project_page": "https://dagroup-pku.github.io/G-STAR/",
      "comments": 3,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2611.13004",
      "arxiv_url": "https://arxiv.org/abs/2611.13004",
      "title_ja": "G-STAR：高度に圧縮された自己回帰生成のためのグループスケール・トークン容量",
      "summary_ja": "空間圧縮率に合わせてグループサイズを調整することで、高い再構成性能を維持しつつ32〜64倍の画像圧縮を実現。"
    },
    {
      "id": "2611.15131",
      "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
      "abstract": "In this report, we introduce the Reciprocal World Model (RWM) and present Duo v1, a full-duplex world model that continuously perceives audiovisual inputs while responding to users in real time. The RWM treats intelligence and physical reality as equally fundamental to what constitutes a world. Existing world models largely focus on simulating the latter, leaving reasoning and decision-making as external controls rather than intrinsic parts of the world itself. In RWM, we identify two equally fundamental capabilities: Intent, which provides the cognition underlying world interactions, and Realization, which generates coherent audio-visual behavior. To realize this formulation, Duo v1 introduces three key technical designs: (1) Leveraging autoregressive modeling for continuous interaction reasoning and participation decisions, rather than restricting it to instruction understanding for diffusion models. (2) Constructing chunk-specific conditions and synchronize tokens across Intent and Realization on a unified timeline. Module-specific attention masks enforce causal dependencies both within and across chunks, preventing access to future inputs. (3) Mitigating distribution shift in both modules through dual rollout distillation, training on autoregressively generated Intent tokens and synthesized audiovisual histories from Realization. Both modules continuously perceive real-time audio, video, and text, enabling full-duplex interaction with spontaneous conversations and interruptions. Beyond conversation, users can share real objects, reshape virtual scenes, guide assistants, or play audiovisual games without mouse or keyboard controls. The release of Duo v1 makes our first step, with the next version coming soon. We look forward to broader exploration of this emerging field.",
      "upvotes": 43,
      "github_stars": 60,
      "github_repo": "https://github.com/inclusionAI/Duo",
      "project_page": "https://duo-v1.github.io/",
      "comments": 3,
      "org": "inclusionAI",
      "url": "https://huggingface.co/papers/2611.15131",
      "arxiv_url": "https://arxiv.org/abs/2611.15131",
      "title_ja": "Duo：フルデュプレックス対話のための相互世界モデル",
      "summary_ja": "意図（認知）と実現（生成）を統合し、視聴覚入力を継続的に知覚しながらリアルタイムで応答可能な世界モデル。"
    },
    {
      "id": "2611.12886",
      "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
      "abstract": "Agentic reinforcement learning (RL) and multi-teacher on-policy distillation (MOPD) offer complementary routes to post-training. For visual agents, however, tool use presents two related challenges. Models may overlook useful tool-returned observations, while poorly grounded actions can limit the evidence available for subsequent distillation. We introduce Reframe, a post-training framework that treats the observation state, rather than only the output distribution, as an object of alignment. First, Ground-Drop-GRPO (GD-GRPO) trains spatial and temporal specialists with evidence-aware rewards and stochastic removal of the original visual input, encouraging them to acquire grounded evidence and use the returned observations. Second, Observation-Gated-MOPD (OG-MOPD) replaces deficient tool actions with canonical ones mid-rollout and resumes distillation from the repaired observation. The two stages complement each other, as learning to rely on tool-returned observations can help the policy benefit from observation repair. Neither stage requires a task-specific SFT cold start. Extensive experiments over 14 image and video benchmarks demonstrate that Reframe outperforms both Mix-RL and vanilla MOPD. Ablation results show that GD-GRPO increases observation dependence and tool gain compared with outcome-based GRPO.",
      "upvotes": 41,
      "github_stars": 37,
      "github_repo": "https://github.com/EliYuan30/Reframe",
      "project_page": "",
      "comments": 3,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2611.12886",
      "arxiv_url": "https://arxiv.org/abs/2611.12886",
      "title_ja": "Reframe：視覚的推論エージェントのための観測整合マルチティーチャー・オンポリシー蒸留",
      "summary_ja": "ツールの観測結果に注目させる報酬設計と入力を一部除去する学習により、視覚情報の根拠に基づいた行動を強化。"
    },
    {
      "id": "2611.13410",
      "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
      "abstract": "Low-bit quantization reduces the inference cost of LLM agents but can compromise task success. Examining failed rollouts, we find that quantized agents overlook task requirements or environmental conditions, producing environment transitions that diverge from successful full-precision references. Correcting these behavioral divergences remains difficult: offline data may miss the student's failure contexts, while its own rollouts may provide few correct responses in those contexts. We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution. This closed-loop teacher steering produces locally verified behavioral corrections. We internalize these corrections by training the student without guidance to match the steered student's predictions at corrected turns and the full-precision teacher's at other turns, enabling unassisted inference. Across five agentic benchmarks and three models, SteerDistill exceeds the strongest quantized baseline by 1.67--2.18 points in average score under W4A16 and stays within one point of BF16. On τ^2-Bench, it outperforms QeRL by 1.84 percentage points in success rate using 67% fewer training GPU hours and produces shorter successful trajectories than the quantized baselines.",
      "upvotes": 39,
      "github_stars": 13,
      "github_repo": "https://github.com/air-embodied-brain/SteerDistill",
      "project_page": "https://air-embodied-brain.github.io/SteerDistill",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.13410",
      "arxiv_url": "https://arxiv.org/abs/2611.13410",
      "title_ja": "SteerDistill：教師によるクローズドループ制御を用いたLLMエージェントの量子化",
      "summary_ja": "量子化によるエージェントの行動の逸脱を、高精度な教師モデルがリアルタイムで修正・ガイドすることで精度を維持。"
    },
    {
      "id": "2611.13001",
      "title": "One Table, Many Queries: Benchmarking Generalist Tabular Models Across Generation, Imputation, and Prediction",
      "abstract": "Generation, imputation, and prediction query different aspects of the same tabular distribution, but are usually evaluated separately. This leaves unclear which capabilities they share, how their training objectives interact, and whether one model can perform all three well. We introduce the One Table Benchmark (), spanning 56 datasets, 46 registered methods, and 20 capability axes under aligned data splits and explicit task contracts. We compare task ranks on aligned support, train five backbones under all seven non-empty objective combinations on five datasets with three seeds, and contrast fixed-model profiles with specialist portfolios. Rank comparisons connect imputation and prediction through numerical recovery and dependence preservation, and link generation to both through predictive utility; distributional fidelity follows different, sometimes opposing, rankings. Objective interventions show the largest pooled gains from including the recipient's own objective. Generation has the broadest coverage of positive pooled auxiliary effects, while prediction shows potential to improve imputation and synthetic-data utility, with responses that vary across backbones. Cross-addition effects reveal that objective benefits need not add and depend on the objectives already present. Fixed-model comparisons expose corresponding utility--fidelity trade-offs: some generalists surpass specialist portfolios on utility, while fidelity continues to favor specialization. Frozen foundation models show strong prediction and numerical point imputation, together with promising synthetic-data utility, highlighting their potential across all three tasks. These findings motivate unified tabular models that share useful conditional information while improving categorical reconstruction and faithful joint sampling.",
      "upvotes": 39,
      "github_stars": 2,
      "github_repo": "https://github.com/limix-ldm-ai/OTBench",
      "project_page": "",
      "comments": 7,
      "org": "Stable AI",
      "url": "https://huggingface.co/papers/2611.13001",
      "arxiv_url": "https://arxiv.org/abs/2611.13001",
      "title_ja": "One Table, Many Queries：生成・補完・予測にわたる汎用表形式モデルの評価",
      "summary_ja": "表形式データの生成、欠損補完、予測の3タスクを統一的に評価し、共有される能力や学習目的の相互作用を解明。"
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
      "title_ja": "強化学習によるLLMの自己学習能力の向上",
      "summary_ja": "長大な参考資料を自律的に検索・学習・適用して数学的証明を行う、知識獲得と推論が結合した自己学習を研究。"
    },
    {
      "id": "2611.15844",
      "title": "Open Vision Banana: A Fully Open Recipe for Generative Visual Perception",
      "abstract": "Recent work suggests that pretrained image generators encode real-world understanding beyond image synthesis. Vision Banana exploits this by framing vision tasks as conditional image editing. However, its data, weights, code, and implementation details are not public. We present Open Vision Banana (OVB), a fully open and reproducible recipe for converting pretrained generators into unified multi-task perception systems. Our analyses identify the design choices that matter most for generalization, including color encoding, prompt design, parameter adaptation, and task balancing. These choices interact, so individually helpful choices can hurt when combined with others. Starting from 4B and 9B parameter open-weight base models and using 2.1M-3.8M training pairs from public datasets, OVB surpasses Vision Banana's reported Cityscapes zero-shot performance (73.9 vs. 69.9 mIoU) and rivals state-of-the-art affine-invariant depth estimators. Its non-zero-shot variants come within five points of Vision Banana on referring and reasoning segmentation but remain further behind on instance segmentation. All models largely retain the base model's image-editing abilities. With legend ensembling, we introduce a test-time scaling method for generator-based perception. It segments an image under several class-color legends and fuses the results by majority vote, correcting unstable color-class bindings and improving mIoU by up to 8.7 points on Cityscapes and 15.0 points on COCO-Object without retraining. We release the dataset construction and processing pipeline, the training and evaluation code, as well as the final, intermediate, and ablation checkpoints. Project website: https://openvisionbanana.github.io",
      "upvotes": 36,
      "github_stars": 45,
      "github_repo": "https://github.com/OpenVisionBanana/OpenVisionBanana",
      "project_page": "https://openvisionbanana.github.io/",
      "comments": 3,
      "org": "Fundamental AI Lab at UTN",
      "url": "https://huggingface.co/papers/2611.15844",
      "arxiv_url": "https://arxiv.org/abs/2611.15844",
      "title_ja": "Open Vision Banana：生成的な視覚知覚のための完全オープンなレシピ",
      "summary_ja": "画像生成モデルをマルチタスク知覚システムへ変換するための最適な設計選択肢を特定し、再現可能な手法を公開。"
    },
    {
      "id": "2610.42148",
      "title": "Flide: Accelerating Decision Inference with Exact State Forking",
      "abstract": "Decision models such as Jev have emerged as a highly promising paradigm for LLM agent systems, providing lightweight and reliable categorical reasoning for rapid System One execution. However, existing generation-oriented inference engines fail to support these workloads effectively, suffering from severe prefix recomputation overheads or distorted output probabilities. To address this challenge, we propose Flide, an efficient and exact inference engine that decouples the logical tree structure of a decision request from its physical execution within a single flattened token stream. Through ForkAttention, Flide navigates request dependencies using GPU-resident indices across both standard attention and recurrent Gated DeltaNet layers, guaranteeing in exact arithmetic that every query branch evaluates identically to an isolated forward pass. By expressing branch topologies directly in GPU-resident metadata, Flide accommodates diverse request mixtures with a compact set of pre-recorded execution graphs while enabling expanding agent histories to resume from checkpoints saved in earlier passes. Extensive evaluations on public hybrid and decision models demonstrate that Flide answers queries up to 9.5 times faster than vLLM and SGLang while staying closest to a float32 reference in total variation distance. By unifying physical execution throughput with mathematical exactness, Flide establishes a principled foundation for scalable, latency-critical decision intelligence in agent systems.",
      "upvotes": 36,
      "github_stars": 508,
      "github_repo": "https://github.com/OmniJev/Flide",
      "project_page": "https://flide.org/",
      "comments": 6,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.42148",
      "arxiv_url": "https://arxiv.org/abs/2610.42148",
      "title_ja": "Flide：正確な状態フォークによる意思決定推論の加速",
      "summary_ja": "意思決定リクエストの論理構造と物理実行を分離し、重複計算を排除することでエージェントの推論を高速化。"
    },
    {
      "id": "2611.12426",
      "title": "dNaViT: Discrete Codes are General-Purpose Visual Representations",
      "abstract": "Discrete autoregressive modeling, notably through next-token prediction, has become a cornerstone of modern language models. Extending this paradigm to vision allows visual and language models to converge on a unified framework, thereby fostering shared methodology and infrastructure. This work investigates a central question: how far can a finite discrete vocabulary go in representing the richness of the visual world? We present dNaViT, a Discrete Native-resolution Vision Transformer that produces discrete visual primitives analogous to language tokens. Built upon a frozen pretrained encoder, dNaViT applies lightweight residual modulation with a dual-branch objective to inject reconstruction-aware cues into semantic features. By leveraging grouped product quantization, it scales discrete capacity without inflating spatial sequence lengths, while a balanced training recipe maintains both semantic and pixel-level information. Consequently, dNaViT functions as a versatile discrete visual tokenizer, enabling unified encoding across downstream tasks alongside high-fidelity image decoding. Extensive evaluations show that dNaViT matches or exceeds task-specific baselines across 12 visual understanding benchmarks, 4 generation benchmarks, and an image editing benchmark. These findings demonstrate that a compact discrete vocabulary can serve as a universal visual currency and unlock the full potential of fully unified, native multimodal methodology.",
      "upvotes": 35,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lixiaotong97.github.io/dNaViT/",
      "comments": 3,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2611.12426",
      "arxiv_url": "https://arxiv.org/abs/2611.12426",
      "title_ja": "dNaViT：汎用的な視覚表現としての離散コード",
      "summary_ja": "視覚情報を言語トークンのような離散的なプリミティブとして扱い、言語モデルと統一された枠組みでの学習を可能にする。"
    },
    {
      "id": "2611.17167",
      "title": "Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents",
      "abstract": "Decision models answer a question with a typed output, such as a choice among options with a probability for each, so one model can choose an agent's actions, evaluate actions already taken, or score every action to teach a policy with reinforcement learning. Prior work has studied them mainly as actors, judging their usefulness by how well they act. We ask whether a decision model that acts poorly can still teach well. We compare three decision models and three general LLMs as actors and judges on ALFWorld, and use JEV as a teacher on ALFWorld and WebShop. As actors, all six models are pulled away from a subgoal that must come first by an easier one. As judges that see the whole trajectory, the same models credit the steps toward that subgoal, and asking whether each action helped, rather than whether the task will succeed, separates useful from useless actions. As a teacher, JEV raises a Qwen2.5-1.5B policy over GRPO from 72.8% to 82.9% success on ALFWorld and from 56.8% to 71.4% on WebShop. These results suggest that a poor actor can still teach well, because judging an action after the episode ends reveals the consequences that acting must anticipate. Code is available at https://github.com/ZJU-REAL/decision-agents.",
      "upvotes": 34,
      "github_stars": 46,
      "github_repo": "https://github.com/ZJU-REAL/decision-agents",
      "project_page": "https://zjureal.com/decision-agents/",
      "comments": 5,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2611.17167",
      "arxiv_url": "https://arxiv.org/abs/2611.17167",
      "title_ja": "アクター、ジャッジ、それともティーチャー？ 長期エージェントにおける意思決定モデルの理解",
      "summary_ja": "自身の行動が未熟な意思決定モデルでも、他者の評価や強化学習の教師役としては優れた能力を発揮しうることを解明。"
    },
    {
      "id": "2611.11558",
      "title": "InfraRSI: Harnessing Recursive Self-Improvement for Training Infrastructure",
      "abstract": "While Recursive Self-Improvement (RSI) accelerates isolated algorithm and kernel synthesis, distributed LLM training depends on tightly coupled launch settings, operator kernels, and communication schedules, where single edits often hit out-of-memory (OOM) boundaries, compiler conflicts, measurement jitter, or silent numerical drift. We present InfraRSI, the agentic harness that turns open-ended human commands into verified training optimizations via a five-stage workflow: init locks editable scope and a fixed task contract over workload, loss, and timing invariants to prevent reward hacking, doctor profiles baseline phases and calibrates cluster noise, run co-optimizes launch knobs and code patches before re-verifying top candidates against the baseline and logging findings to a cross-hardware experience bank, and report and apply audit source paths, track failed-trial costs, and commit promoted changes. Rather than stepping greedily from a single incumbent, InfraRSI initializes from diverse experience-seeded configurations and fits global execution-time and censored peak-memory models across all trials, including OOMs. Using these models, it prices per-setting memory costs, revises miscalibrated LLM priors from live runs, and pairs memory-hungry optimizations with memory savers and verified code patches. Across four single- and multi-node dense and Mixture-of-Experts (MoE) LLM workloads, InfraRSI achieves a speedup of up to 2.75times and lifts mean Model FLOPs Utilization (MFU) from 17.4% to 30.0%, outperforming existing tuners and coding agents while transferring experience across GPUs. As it improves training infrastructure efficiency, InfraRSI forms a two-level Recursive Self-Improvement loop---revising priors online within runs and distilling experience across clusters---to push foundation model scaling.",
      "upvotes": 33,
      "github_stars": 80,
      "github_repo": "https://github.com/TokenRhythm/InfraRSI",
      "project_page": "https://infrarsi.github.io/",
      "comments": 6,
      "org": "TokenRhythm",
      "url": "https://huggingface.co/papers/2611.11558",
      "arxiv_url": "https://arxiv.org/abs/2611.11558",
      "title_ja": "InfraRSI：訓練インフラのための再帰的自己改善",
      "summary_ja": "分散訓練の複雑な設定やコードをエージェントが検証・最適化し、人間による手動調整を超える訓練効率を実現。"
    },
    {
      "id": "2611.08452",
      "title": "ReproBridge: Building Reproducibility into ML Research Artifacts",
      "abstract": "Reproducing machine learning experiments requires reconstructing procedures from information scattered across papers, released code, and supporting artifacts. For coding agents, reproduction success can therefore depend on their ability to fill in missing details, rather than on the released artifacts alone. We ask whether preserving recovered procedures and decisions improves subsequent independent reproduction. We define a standardized artifact design comprising a refined codebase, environment setup, experiment launchers, and a reproduction guide, and introduce ReproBridge, an agent workflow for constructing these refined reproducible artifacts. ReproBridge-Bench provides 1,029 tasks from 387 experiments across 36 papers, anchored by five human-verified reference scores per task. Agents attempt tasks in fresh sessions with raw code or refined artifacts; a separate Auditor checks execution evidence. Across four evaluated models, refined artifacts raise mean reproduction success from 76.4% to 92.6% and reduce downstream API spending by 19.7% on average. The cross-model success-rate spread narrows from 21.6 to 3.9 percentage points, with all four models achieving mean success rates above 90%. Removing any component reduces success in the ablation study, with the largest losses from code and environment removal. These results suggest that preserving execution knowledge helps even models with lower raw-code success reproduce experiments more reliably and at lower API cost.",
      "upvotes": 33,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://wyyyb.github.io/reprobridge_website/",
      "comments": 3,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.08452",
      "arxiv_url": "https://arxiv.org/abs/2611.08452",
      "title_ja": "ReproBridge：機械学習研究成果物への再現性の組み込み",
      "summary_ja": "コーディングエージェントを用いて研究コードを標準化・整理し、第三者が容易に実験を再現できる仕組みを構築。"
    },
    {
      "id": "2611.17060",
      "title": "Ropedia Xperience 2: A Gold Standard for Scaling Physical AI Environments and Behaviors",
      "abstract": "Large foundation models such as GPT-6 Astra and Claude Fable 5.1 have recently been shown to control robots directly from visual observations. They nevertheless remain brittle on long-horizon, contact-rich tasks in real-world environments. Further progress depends on two complementary resources: demonstrations of human behavior that supervise how tasks are performed, and interactive environments in which policies can be rolled out, evaluated, and improved in closed loop. Language models have advanced along well-characterized scaling laws; the corresponding question for physical AI is how capability scales with environments and behaviors, which first requires identifying which data to scale and how to produce and reuse such data continuously. To address this question, we introduce Ropedia Xperience 2, comprising 1,589 released metric-scale 3D scans and a collection of 4,230 egocentric recordings of 74 tasks (131 hours). We further show that each capture can be repurposed for robot learning: scenes are converted into physically interactive simulation environments, human motion is retargeted to whole-body robot trajectories, and additional robot behaviors are obtained through virtual teleoperation and automated long-horizon trajectory generation. We propose this joint capture of environments and behaviors as a gold standard for physical AI data collection, laying a data foundation for establishing scaling laws over environments and behaviors.",
      "upvotes": 30,
      "github_stars": 22,
      "github_repo": "https://github.com/Ropedia/Ropedia-Xperience-2",
      "project_page": "https://ropedia.com/xperience/2-research/",
      "comments": 4,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2611.17060",
      "arxiv_url": "https://arxiv.org/abs/2611.17060",
      "title_ja": "Ropedia Xperience 2：物理AIの環境と行動のスケーリングにおけるゴールドスタンダード",
      "summary_ja": "物理AIの能力向上のため、人間の行動デモと対話的なシミュレーション環境をどの程度スケールすべきかを定義。"
    },
    {
      "id": "2611.12177",
      "title": "Embodied First Exam",
      "abstract": "Early successes on agentic robotics point to a potential paradigm shift toward using coding agents to control robots. Existing robotics benchmarks are built around visuomotor policy learning, leaving it open whether coding agents can reliably control diverse robots under physical-world constraints. We therefore introduce the Embodied First Exam, a unified, comprehensive, and agent-native evaluation framework where coding agents can choose their own control approach: direct control, code to control, or train a policy to control. We hope it serves as a first exam for coding agents before they enter the physical world, with 1,156 tasks in 35 suites on 47 robots, including 9 new suites that go beyond pick-and-place to spatial puzzles, dexterous manipulation, multi-robot interaction, dynamic whole-body control, and sim-to-sim engineering. Each task can be run in up to three evaluation settings. The Standard Setting mimics the real world: the agent receives only sensor observations and, by default, cannot reset the environment. Its Realtime variant keeps the environment running while the agent reasons. The Privileged Setting gives the agent access to the full simulator state and unlimited resets, allowing it to search for an oracle solution for training purposes. Success rates in this setting serve as an approximate upper bound. On the 456 core tasks, the strongest of eight agents, GPT-6 Astra in Codex, achieves a success rate of 34% in the Standard Setting, leaving much room for improvement. To see where agents fail, we label the stage at which failed attempts go wrong and compare failures across agents, settings, and stage categories.",
      "upvotes": 30,
      "github_stars": 279,
      "github_repo": "https://github.com/mll-lab-nu/embodied-first-exam",
      "project_page": "https://www.embodied-first-exam.ai/",
      "comments": 4,
      "org": "MLL Lab",
      "url": "https://huggingface.co/papers/2611.12177",
      "arxiv_url": "https://arxiv.org/abs/2611.12177",
      "title_ja": "Embodied First Exam：物理世界へ進むエージェントのための統一試験",
      "summary_ja": "多様なロボットをコードで制御するエージェントに対し、物理的な制約下での制御・学習能力を問う総合評価。"
    },
    {
      "id": "2611.10649",
      "title": "MACaQ: Fast, Model Agnostic Calibrated Quantization for Low-Precision Weights and Activations",
      "abstract": "Weight-activation quantization can reduce the memory and compute cost of neural-network inference, but recent methods often require expensive optimization and architecture-specific propagation of basis transforms across layers. We introduce MACaQ, an MXFP4 W4A4 post-training quantization method that treats every linear layer independently. MACaQ applies a per-channel scale and a block-Hadamard transform online to each layer's activations, while absorbing the corresponding inverse transforms into its weights. Retaining these transforms online avoids cross-layer dependencies and enables a simple streaming implementation of the quantization process, in which only one layer must reside in memory at a time. To improve over round-to-nearest quantization, we introduce Flip-Refinement, a Hessian-aware coordinate-descent procedure that greedily moves individual FP4 codes to adjacent representable values. Despite executing the activation transforms at inference time, MACaQ adds only 2.3% end-to-end overhead over pure MXFP4 on Qwen3-32B in vLLM. MACaQ reaches lower perplexity than DuQuant++ and MR-GPTQ, and already matches their best perplexity on Llama-3-8B in 11 times less quantization time. We further apply MACaQ without architecture-specific modifications to an image diffusion model, illustrating the generality of its layer-local design and show quantization of a 122B parameter model in 64 minutes, using only 32.5GB GPU RAM.",
      "upvotes": 30,
      "github_stars": 312,
      "github_repo": "https://github.com/huawei-csl/MACaQ",
      "project_page": "https://huawei-csl.com/blog/macaq/",
      "comments": 2,
      "org": "HUAWEI Computing Systems Lab",
      "url": "https://huggingface.co/papers/2611.10649",
      "arxiv_url": "https://arxiv.org/abs/2611.10649",
      "title_ja": "MACaQ：低精度な重み・アクティベーションのための高速・モデル非依存の校正済み量子化",
      "summary_ja": "各層を独立に処理し、オンラインでアダマール変換等を適用することで、層間の依存なしに高品質な4bit量子化を実現。"
    },
    {
      "id": "2611.05984",
      "title": "On the Design of Hyper-Connections: Simplification, Stability, and Scalability",
      "abstract": "Hyper-Connections (HC) architectures are increasingly adopted in frontier language models, yet their components remain insufficiently understood and introduce non-negligible training overhead. In this work, we systematically study the HC architecture to understand its components and identify simpler, more efficient designs. We find that learned read/write gating without mixing and unconstrained mixing with fixed gates form two effective interaction groups: either alone achieves performance comparable to mHC. We also identify repeated access to the expanded residual state as a major source of training overhead, even without mixing. These findings lead to SimpleHC, which simplifies the architecture by removing residual mixing and simplifies execution through shared memory access, using the resulting additive structure and shared gate inputs. Layer-specific gates share a group-entry state, enabling batched reads and deferred writes; scalar corrections exactly preserve preceding sublayer output contributions. Our analyses support both the retained residual structure and the design of shared memory access. SimpleHC incurs only 2.4% extra end-to-end training time over a vanilla residual baseline at the largest tested scale. It maintains performance comparable to mHC when scaling from 15B to 30B MoE models, exhibits smoother gradient dynamics during standard training, and remains stable under stress. We hope SimpleHC will encourage a broader pursuit of simplicity in foundation model design, making performance gains more accessible and practical at scale.",
      "upvotes": 29,
      "github_stars": 21,
      "github_repo": "https://github.com/aHapBean/SimpleHC",
      "project_page": "",
      "comments": 4,
      "org": "dots studio",
      "url": "https://huggingface.co/papers/2611.05984",
      "arxiv_url": "https://arxiv.org/abs/2611.05984",
      "title_ja": "Hyper-Connectionsの設計：簡素化、安定性、およびスケーラビリティ",
      "summary_ja": "フロンティアLLMで採用されるHCアーキテクチャの構成要素を精査し、より簡素で効率的なSimpleHCを提案。"
    },
    {
      "id": "2611.14309",
      "title": "MMDM: Measuring Massive Multitask Decision Making",
      "abstract": "System-1 Decision Models directly make structured probabilistic decisions over query-specified options given a state in a single forward pass, without autoregressively generating reasoning trajectories or textual responses. Recent evaluations cover diverse tasks but often rely on existing benchmarks, where prior exposure to test material can obscure generalization. Moreover, real-world decision making often involves long contexts, large option spaces, and complex logical dependencies, challenges that existing benchmarks do not adequately capture together. Thus, we introduce MMDM (Massive Multitask Decision Making), a benchmark of 5,448 high-quality questions across 16 task categories, combining newly constructed tasks with source-grounded recompositions and rewrites for single-select, multi-select, and soft-label decision making in fresh contexts. It covers realistic scenarios such as agent state tracking, tool and skill selection, preference judgments, and rubric scoring, with option spaces ranging from 2 to 1,024 and inputs extending to 64,817 tokens. With MMDM, we conduct a comprehensive quantitative evaluation of 28 decision models, showing that many perform well on common knowledge yet struggle with interdependent options, constrained decisions, and multi-select tasks. For example, Perplexity Decider-V1.2 reaches 78.75% Hard Single-select Accuracy on world knowledge, but only 53.95% on option logic and 47.95% on constraint planning, while the best Hard Multi-select Accuracy across all models is 36.81%. These results highlight joint reasoning, constraint-aware selection, and complete multi-select recovery as key priorities for decision model development, with MMDM providing a testbed for measuring this progress.",
      "upvotes": 28,
      "github_stars": 10,
      "github_repo": "https://github.com/mmdm-benchmark/mmdm",
      "project_page": "https://mmdm-benchmark.github.io/",
      "comments": 3,
      "org": "The Chinese University of Hong Kong",
      "url": "https://huggingface.co/papers/2611.14309",
      "arxiv_url": "https://arxiv.org/abs/2611.14309",
      "title_ja": "MMDM：大規模マルチタスク意思決定の測定",
      "summary_ja": "長い文脈や複雑な論理依存を含む16カテゴリの質問を通じ、システム1意思決定モデルの真の汎用能力を測定。"
    },
    {
      "id": "2611.07464",
      "title": "FINCOSMOS: An Open-World Evaluation Paradigm for Agents in Finance",
      "abstract": "Language agents increasingly work for users on the open Web, and finance is where trusting them is hardest. The data must come from the Web, the strategy lives in the user's head, and correctness depends on time, so an agent can fail silently: a strategy the user never asked for, unverified data, or a backtest that uses the future yields a report as convincing as a correct one. Existing benchmarks close the world somewhere, fixing the task, the data, or the timeline, and thereby remove these failures instead of measuring them. We introduce FINCOSMOS, an open-world evaluation paradigm for agents doing financial work. A simulated user holds a hidden strategy sampled from a compositional grammar and reveals it only when asked. The agent receives no data, so it must acquire data from the Web, build its own backtest under a data cutoff, and deliver verifiable results. Grading needs no reference answer. Programs verify point-in-time correctness and recompute every reported metric, the delivered strategy is checked against the hidden specification, and a run is accepted only when the user is satisfied and none of 15 veto checks fails. Across four coding agents and a model without tools in 150 sessions, no session is accepted: every session that the simulated user signed off fails a program check, and agents raise only 54--64\\% of the details they were not told. Human experts attribute 88.33\\% of failures to the agents. With FINCOSMOS feedback, an agent with persistent memory learned all ten tasks.",
      "upvotes": 26,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://huggingface.co/spaces/YupengCao/FinCosmos",
      "comments": 4,
      "org": "The Fin AI",
      "url": "https://huggingface.co/papers/2611.07464",
      "arxiv_url": "https://arxiv.org/abs/2611.07464",
      "title_ja": "FINCOSMOS：金融エージェントのためのオープンワールド評価パラダイム",
      "summary_ja": "タスクやデータが固定されない現実的なWeb環境を想定し、金融エージェントの潜在的な失敗や信頼性を評価。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "A step toward defining the Standard Model on a lattice",
      "summary": "Explore a candidate nonperturbative lattice definition of the Standard Model and how GPT-6 Astra helped turn the idea into a detailed proof.",
      "url": "https://openai.com/index/step-toward-defining-the-standard-model",
      "published": "2026-11-16T07:00:01+09:00",
      "title_ja": "格子上の標準模型の定義に向けた一歩",
      "summary_ja": "GPT-6 Astraを活用し、非摂動的な格子標準模型の定義の詳細な証明を構築した。"
    },
    {
      "lab": "OpenAI",
      "title": "Our new blog for science",
      "summary": "The OpenAI science blog shares new findings, practical methods, and firsthand accounts from researchers using AI to advance scientific discovery.",
      "url": "https://openai.com/index/our-new-blog-for-science",
      "published": "2026-11-16T07:00:00+09:00",
      "title_ja": "科学のための新しいブログ",
      "summary_ja": "AIを活用して科学的発見を促進する研究者の新しい知見や実践的な手法を紹介する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Open-Source Veyra Hits 2.7k Stars Upscaling PS5 and Xbox Streams to 120 FPS",
      "summary": "Veyra is an open source Windows tool that pipes PS5, Xbox, capture cards and local video through DLSS, FSR and AI denoisers in real time.",
      "url": "https://alphasignal.ai/news/open-source-veyra-hits-2-7k-stars-upscaling-ps5-and-xbox-streams-to-120-fps",
      "published": "2026-11-16T02:14:34+09:00",
      "title_ja": "オープンソースVeyraが2.7kスターを獲得、ゲーム配信を120 FPSに向上",
      "summary_ja": "PS5等の映像をDLSSやAIデノイザーでリアルタイム処理し120 FPS化する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's Whisper large-v3 Runs Locally Under 1GB Without Python",
      "summary": "A GGUF-packaged Whisper large-v3 built for transcribe.cpp hits 1.81% WER on LibriSpeech and runs on a laptop in under 1 GB.",
      "url": "https://alphasignal.ai/news/openai-s-whisper-large-v3-runs-locally-under-1gb-without-python",
      "published": "2026-11-16T01:00:31+09:00",
      "title_ja": "OpenAIのWhisper large-v3がPythonなし、1GB未満でローカル動作",
      "summary_ja": "GGUF形式で軽量化され、ノートPC上で高い認識精度を保ちつつ省メモリで動作する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Krea's Open Krea 2 Raw Spawns 1M-Download Community LoRA in Weeks",
      "summary": "A community-trained LoRA for Krea 2 focused on Asian character generation has crossed one million downloads, pulling the open-weights base model into the spotlight.",
      "url": "https://alphasignal.ai/news/krea-s-open-krea-2-raw-spawns-1m-download-community-lora-in-weeks",
      "published": "2026-11-16T00:25:39+09:00",
      "title_ja": "Krea 2用LoRAが数週間で100万ダウンロードを記録",
      "summary_ja": "アジア系キャラ生成に特化したコミュニティ製LoRAが人気を博し、ベースモデルを牽引。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Osaurus Ships Diplodocus to Handle PDFs and Spreadsheets on Local Hardware",
      "summary": "Osaurus released Diplodocus preview 4 as llama.cpp GGUF files, a 9B finance and spreadsheet assistant built on K2-Horizon-7B with tool use.",
      "url": "https://alphasignal.ai/news/osaurus-ships-diplodocus-to-handle-pdfs-and-spreadsheets-on-local-hardware",
      "published": "2026-11-15T18:31:30+09:00",
      "title_ja": "Osaurus、PDFやスプレッドシートを扱うDiplodocusを公開",
      "summary_ja": "ツール使用機能を備えた9Bの金融・事務支援AIをローカル実行可能な形式で提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "agentes.chat Turns Team Chat Into an Open-Source AI Agent Control Plane",
      "summary": "A self-hosted Slack clone where Claude, Codex, Gemini and Grok agents join channels as teammates, with approvals, budgets and MCP tools",
      "url": "https://alphasignal.ai/news/agentes-chat-turns-team-chat-into-an-open-source-ai-agent-control-plane",
      "published": "2026-11-15T09:08:59+09:00",
      "title_ja": "agentes.chatがチームチャットをAIエージェントの制御盤に変える",
      "summary_ja": "ClaudeやGemini等のAIをSlack風環境に統合し、予算管理やツール連携が可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "VieNeu-TTS v3 Turbo Runs Vietnamese Voice Cloning on a Consumer GPU",
      "summary": "A from-scratch Vietnamese TTS hits 48 kHz audio, instant voice cloning, and real-time CPU inference with an OpenAI-compatible streaming API.",
      "url": "https://alphasignal.ai/news/vieneu-tts-v3-turbo-runs-vietnamese-voice-cloning-on-a-consumer-gpu",
      "published": "2026-11-15T09:04:56+09:00",
      "title_ja": "VieNeu-TTS v3 Turboがベトナム語の音声クローニングを実現",
      "summary_ja": "消費者向けGPUで動作し、リアルタイムで高品質なベトナム語の音声合成と複製が可能。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の進展",
      "summary_ja": "教育イノベーションを通じて科学・工学分野の発展を促進する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build a Robot Pick-and-Place Simulation with SimReady Assets",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place",
      "published": "2026-11-14T03:00:39+09:00",
      "title_ja": "SimReadyアセットを用いたロボットのピック・アンド・プレース・シミュレーションの構築",
      "summary_ja": "SimReadyアセットを活用し、ロボットのピッキング動作のシミュレーションを構築できる。"
    },
    {
      "lab": "Hugging Face",
      "title": "XYBench: Helping with the problem behind the question",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/xybench",
      "published": "2026-11-14T02:02:35+09:00",
      "title_ja": "XYBench：質問の背景にある問題の解決を支援",
      "summary_ja": "質問の背後にある根本的な課題を特定し、解決に向けた支援を行う。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing ChatGPT Wallet",
      "summary": "Introducing ChatGPT Wallet, a secure way for agents in ChatGPT Work, Codex, and dots to complete purchases with user approval and existing card protections.",
      "url": "https://openai.com/index/introducing-chatgpt-wallet",
      "published": "2026-11-14T00:00:00+09:00",
      "title_ja": "ChatGPT Walletの導入",
      "summary_ja": "AIエージェントがユーザーの承認を得て安全に商品購入を行える決済機能を導入した。"
    },
    {
      "lab": "Hugging Face",
      "title": "llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem",
      "summary": "",
      "url": "https://huggingface.co/blog/ggml-org/llama-cpp-v1",
      "published": "2026-11-13T23:05:22+09:00",
      "title_ja": "llama.cpp v1.0.0：ローカルAIエコシステムの強固な基盤",
      "summary_ja": "ローカル環境におけるAI活用のためのより強力な基盤としてバージョン1.0.0を公開。"
    },
    {
      "lab": "OpenAI",
      "title": "Shield helps technicians hand off legacy portal work with OpenAI",
      "summary": "Shield uses OpenAI to help IT technicians hand off work in legacy portals. Its Forge agents navigate systems so technicians can focus on issues needing their judgment.",
      "url": "https://openai.com/business/customer-stories/shield",
      "published": "2026-11-13T17:00:00+09:00",
      "title_ja": "ShieldがOpenAIを用いてレガシーポータルの引き継ぎを支援",
      "summary_ja": "AIエージェントが古いシステムを操作し、IT技術者が重要な判断に集中できる環境を作る。"
    },
    {
      "lab": "OpenAI",
      "title": "How Amplitude ships product improvements in 1–2 days with OpenAI",
      "summary": "Built primarily on OpenAI models, Amplitude’s proactive product agent, Wave, identifies what to build, helps teams ship changes with coding agents, and measures the impact.",
      "url": "https://openai.com/business/customer-stories/amplitude",
      "published": "2026-11-13T05:00:00+09:00",
      "title_ja": "AmplitudeがOpenAIで製品改善を1〜2日で出荷する方法",
      "summary_ja": "AIエージェントが課題特定、実装、効果測定を担い、開発サイクルを大幅に高速化する。"
    },
    {
      "lab": "Hugging Face",
      "title": "LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite",
      "published": "2026-11-13T04:07:35+09:00",
      "title_ja": "LLMON：Granite 4.1 3Bおよび8Bに搭載されたLLMネイティブなマークアップ言語",
      "summary_ja": "LLM向けに設計されたマークアップ言語がGraniteの最新モデルに採用された。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの紹介",
      "summary_ja": "次世代AIモデルであるGemini 4 Hydrogenを新たに導入した。"
    },
    {
      "lab": "OpenAI",
      "title": "Gondola doubles revenue as its team builds more with Codex",
      "summary": "Gondola helps creatives get credit and get hired, with Codex raising its lead engineer’s output by 50% and ChatGPT simplifying daily work.",
      "url": "https://openai.com/business/customer-stories/gondola",
      "published": "2026-11-12T21:00:00+09:00",
      "title_ja": "GondolaがCodexの活用で収益を倍増",
      "summary_ja": "Codexによりエンジニアの生産性が50%向上し、クリエイター支援事業の収益が改善。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルのアライメントにおける理論的限界",
      "summary_ja": "KL正規化アライメントにおける報酬改善の情報理論的限界を数学的に定義する。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Definitive Fine-Tuning Guide for 3D Generation Models",
      "summary": "",
      "url": "https://huggingface.co/blog/3d-lora-finetuning",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "3D生成モデルの決定版ファインチューニングガイド",
      "summary_ja": "3D生成AIモデルを最適化するための詳細な微調整手法を解説する。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブル端末を用いた心血管・腎臓・代謝（CKM）リスク分析と個別指導",
      "summary_ja": "ウェアラブルデバイスのデータを活用し、パーソナライズされた健康指導を可能にする。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：細胞のDNA読み取りを解読し疾患を理解する",
      "summary_ja": "DNA配列の変異が特定の細胞や疾患に与える影響を予測し、病気の理解を深める。"
    },
    {
      "lab": "Hugging Face",
      "title": "BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model",
      "summary": "",
      "url": "https://huggingface.co/blog/qvac/botpsy",
      "published": "2026-11-11T14:01:16+09:00",
      "title_ja": "BotPsy：10億パラメータ未満のエージェント言語モデルを搭載した端末内アシスタント",
      "summary_ja": "小型の言語モデルを用いて、デバイス上で動作するパーソナルアシスタントを実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonが利用可能に",
      "summary_ja": "最新のAIモデルであるGemini 4 Carbonの提供を開始した。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの導入：複雑なソフトウェア検証の突破口",
      "summary_ja": "AIがSignalの暗号化検証のために300万行の証明コードを作成し、安全性を実証した。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Opening the datasets behind our AI weather models",
      "summary": "Foundational precipitation and geostationary satellite datasets to observe the planet clearly.",
      "url": "https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/",
      "published": "2026-11-10T20:13:04+09:00",
      "title_ja": "AI気象モデルの背景にあるデータセットを公開",
      "summary_ja": "地球観測を支える基礎的な降水データや静止衛星データセットをオープン化。 "
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者の評価：パーソナライズされた執筆スタイル評価におけるLLM Judgeの調査",
      "summary_ja": "LLMがユーザー個別の執筆スタイルをどの程度正確に評価できるかを多角的に検証した。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲーティングの重要性：状態空間モデルにおける記憶とインコンテキスト学習",
      "summary_ja": "SSMがTransformerに劣る要因を分析し、ゲーティング機構が性能に与える影響を解明。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的な長文脈検索のためのWeighted State Souping",
      "summary_ja": "SSMの各状態を重み付けして統合することで、長い文脈でも精度の高い検索を可能にする。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorerで世界の言語を探索する",
      "summary_ja": "自然言語処理技術を用いて、世界中の多様な言語を調査・探索可能にする。"
    }
  ]
};
