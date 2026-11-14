window.papersData = {
  "updated_at": "2026-11-14 11:01 JST",
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
      "id": "2611.13172",
      "title": "Continuous Angular Control in Text-to-Image Generation via Geometric Token Encoding",
      "url": "https://arxiv.org/abs/2611.13172",
      "pdf": "https://arxiv.org/pdf/2611.13172",
      "authors": [
        "Furkan G\\\"uzelant",
        "Basavaraj Sunagad",
        "Aysegul Dundar",
        "Adam Kortylewski"
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
        "cap"
      ],
      "star_quote": "Text-to-image diffusion models can render a photorealistic analog clock but cannot control the time it displays.",
      "signals": [],
      "headline": "幾何学的トークン符号化によるテキストからのアナログ時計・円グラフ生成の角度制御",
      "what": "拡散モデルにおいて角度情報を直接条件付ける幾何学的トークン符号化フレームワークです。角度を周期的なsine-cosine特徴量としてエンコードし、Stochastic Localization Relaxation（SLR）を用いて特定のオブジェクト部位への空間的接地を実現します。",
      "enables": "アナログ時計の生成において、従来モデルが1%未満だったAcc@6度を63-78%まで向上させ、指定した時刻の正確な描写を可能にしました。また、円グラフの断片生成においても89.5%の精度を達成しています。",
      "why_it_matters": "従来は10:10のような頻出パターンに陥っていた幾何学的制約のある画像生成において、追加のレイアウト入力を必要とせずに高精度な制御が可能になります。",
      "tags": [
        "画像生成",
        "拡散モデル"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.13180",
      "title": "X Marks the Spot: Diffusion for Image Geolocalization with Location Representations",
      "url": "https://arxiv.org/abs/2611.13180",
      "pdf": "https://arxiv.org/pdf/2611.13180",
      "authors": [
        "Brian Wei",
        "Chih-Chuan Hsu",
        "Tianyi Gao",
        "Daniel Cher",
        "Eric Xing",
        "Danielle Beaulieu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 9 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "DIG consistently outperforms coordinate-based generative models and sets a new state of the art for parametric geolocalization",
      "signals": [],
      "headline": "位置符号化器の潜在空間を利用した拡散モデルによる高精度な画像ジオローカリゼーション",
      "what": "位置符号化器の潜在空間で動作する潜在拡散モデルDIGを提案する手法です。凍結された位置符号化器と、埋め込みを座標に変換するLocation Autoencoder（LAE）を組み合わせることで、意味的に安定した位置推論を行います。",
      "enables": "OSV-5MやIm2GPS3kなどのベンチマークで、パラメトリックなジオローカリゼーションにおけるSOTAを達成しました。生成モデルとして初めて検索ベースの手法を凌駕し、世界規模でキロメートル単位の精度を実現しています。",
      "why_it_matters": "従来の座標を直接予測する手法の不安定さを解消し、画像から撮影場所を特定するタスクにおいて生成アプローチの有効性を示しました。",
      "tags": [
        "コンピュータビジョン",
        "拡散モデル"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14421",
      "title": "Earlybird: Predictive Streaming Speech Recognition in 29M Parameters",
      "url": "https://arxiv.org/abs/2611.14421",
      "pdf": "https://arxiv.org/pdf/2611.14421",
      "authors": [
        "Sahil Mahendrakar"
      ],
      "categories": [
        "cs.SD",
        "cs.CL",
        "eess.AS"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "9 pages, 3 figures, 6 tables. Model: https://huggingface.co/sahilmahendrakar/Earlybird-29M",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "69% of words are predicted correctly before they end, against 3-25% for the other models.",
      "signals": [],
      "headline": "発話終了前に単語を予測する29Mパラメータの軽量ストリーミング音声認識モデル",
      "what": "途切れた音声から次の単語を予測学習する、2900万パラメータの超軽量音声認識モデルEarlybirdです。現在発話中の単語だけでなく、続く2単語の予測を同時に行い、自信度（Confidence）を算出します。",
      "enables": "中央値で発話終了の90ms前に単語を正しく出力することが可能になり、既存のストリーミングモデル（終了後90〜400ms）を大きく上回る応答性を実現しました。LibriSpeech等のデータセットで、69%の単語を終了前に正解しています。",
      "why_it_matters": "音声エージェントの反応速度をミリ秒単位で改善し、ユーザー体験を向上させるための極めて低遅延なフロントエンドとして機能します。",
      "tags": [
        "音声認識",
        "リアルタイム"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14210",
      "title": "Tree-Ising: Repairing Language Models with Bit-Level Ising Edits",
      "url": "https://arxiv.org/abs/2611.14210",
      "pdf": "https://arxiv.org/pdf/2611.14210",
      "authors": [
        "Hadi Salloum",
        "Ammar Ali"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 77,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We decompose this objective exactly into independent QUBO (Ising) problems, one per output row, which we solve on a GPU using simulated annealing",
      "signals": [
        "HF ▲77"
      ],
      "headline": "重み空間の離散最適化によるLLMの推論バグ修正手法Tree-Ising",
      "what": "LLMの重みを直接書き換えて修正するTree-Isingを提案しています。モデルの修正をBF16ビットレベルの離散最適化問題として定式化し、各行の重み修正を独立したQUBO（Ising）問題に分解して、シミュレーテッド・アニーリングや量子インスパイア技術で解きます。",
      "enables": "Qwen3.5-0.8Bの数学推論能力を、勾配計算なしで大幅に向上（MATH-500で7.9%から54.6%へ）させました。LLMエージェントによる修正手法と比較して、計算コストを大幅に抑えつつ（約0.90ドルのGPU時間）、より少ない重み変更で高い精度を達成しています。",
      "why_it_matters": "バックプロパゲーションや再学習を必要とせず、訓練データが限られた状況でもモデルの特定の欠陥を直接かつ効率的に「修理」できる可能性を示しました。",
      "tags": [
        "LLM",
        "最適化"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
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
      "id": "2611.13437",
      "title": "5G CATS: 5G-Based Cryptographic Authorization Against Trafficking of Semiconductor Devices",
      "url": "https://arxiv.org/abs/2611.13437",
      "pdf": "https://arxiv.org/pdf/2611.13437",
      "authors": [
        "Sreevikram Rajaraman",
        "Derek Ladd",
        "Nicholas Heinrich-Barna",
        "Srinivas Shakkottai",
        "Jeyavijayan Rajendran"
      ],
      "categories": [
        "cs.CR",
        "cs.NI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 5 figures, 4 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "pairs a co-packaged 5G radio, cryptographic engine, and hardware interlock on the GPU package with 5G Ultra-Reliable Low-Latency Communication",
      "signals": [],
      "headline": "5G URLLCを活用したAIチップの輸出管理のための暗号学的位置認証システム",
      "what": "5Gの超高信頼低遅延通信（URLLC）とGPUパッケージ内の暗号エンジンを組み合わせた位置認証システム5G CATSです。ホストソフトウェアやPCIeバスを介さず、5G無線リンクをチップ内で直接終端させることで検証パスから不確実性を排除します。",
      "enables": "300km離れた場所からのファイバー中継による偽装を完全に拒否し、従来手法と比較して物理的な偽装が可能な距離を大幅に縮小しました。シミュレーションにおいて、デフォルトの5G通信よりも10倍狭い往復遅延の広がり（2.60 ms）を達成しています。",
      "why_it_matters": "AIアクセラレータの物理的な動作場所を厳格に制限する必要がある輸出管理において、通信遅延の揺らぎを突いた攻撃を防ぐハードウェアレベルの解決策を提供します。",
      "tags": [
        "ハードウェアセキュリティ",
        "5G"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.13494",
      "title": "Route-Time Conflict Maps for Cooperative End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.13494",
      "pdf": "https://arxiv.org/pdf/2611.13494",
      "authors": [
        "Haohua Que",
        "Mingkai Liu",
        "Tianle Zhu",
        "Zhipeng Bao",
        "Yiping Li",
        "Handong Yao"
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
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "When2Go sets the state of the art on three closed-loop CARLA benchmarks: 97.8 and 90.7 driving score on InterDrive",
      "signals": [],
      "headline": "ルート・タイム競合マップを用いた協調型エンドツーエンド自動運転システム",
      "what": "車両間で知覚情報だけでなく意図（走行計画）を共有する協調型自動運転システムWhen2Goです。受信した他車の計画を自車のルート上の占有マップ（Route-Time Conflict Map）として描画し、優先権ルールに基づくOrder Gateで交差時の優先順位を決定します。",
      "enables": "CARLAベンチマークにおいて、交通流があるInterDriveでの走行スコアを90.7（従来最高78.9）に向上させ、95.0%の車両が無衝突で走行することに成功しました。これにより、協調不足によるデッドロックや衝突が減少します。",
      "why_it_matters": "SAE J3216のClass B以上に相当する意図共有を実現することで、単独の計画では解決が困難な複雑な交差点等での協調性能を向上させます。",
      "tags": [
        "自動運転",
        "マルチエージェント"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.13808",
      "title": "FastWild-GS: Minutes-Scale In-the-Wild Gaussian Splatting via Compact Per-Image Appearance Adaptation",
      "url": "https://arxiv.org/abs/2611.13808",
      "pdf": "https://arxiv.org/pdf/2611.13808",
      "authors": [
        "Donghun Ryu",
        "Seokhyun Kim",
        "Minhyeok Lee"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 6 figures, 13 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FastWild-GS trains in 8.8 minutes per scene with the lowest LPIPS among the compared methods, 23x faster than AsymGS",
      "signals": [],
      "headline": "外観適応トークンを用いた野外画像からの高速な3D Gaussian Splatting手法",
      "what": "照明や露出が異なる野外画像群から数分で3Dシーンを再構成するFastWild-GSです。各画像を128次元の外観トークンで表現し、小さなMLPで各Gaussianの色を予測することで、Spherical Harmonicsを置き換えつつ外観の差異を吸収します。",
      "enables": "シーンあたり8.8〜9.7分という高速な学習を実現し、LPIPS等の画質指標で既存の低速な手法（AsymGS等）と同等以上の性能を達成しました。従来数時間を要していた最適化を20倍以上高速化しています。",
      "why_it_matters": "インターネット上の多様な写真から高品質な3Dモデルを生成する際の実用的な計算コストを大幅に削減します。",
      "tags": [
        "3D再構成",
        "Gaussian Splatting"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14136",
      "title": "HaiRuo: Forecasting Ocean Eddies as Fields and Objects with a Satellite-Altimetry Foundation Model",
      "url": "https://arxiv.org/abs/2611.14136",
      "pdf": "https://arxiv.org/pdf/2611.14136",
      "authors": [
        "Xukun Qin",
        "Haochen Sun",
        "Yuyang Tian",
        "Ge Chen"
      ],
      "categories": [
        "cs.LG",
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
      "star_quote": "HaiRuo improves on fourteen methods on every endpoint (25.2 vs. 30.6 km 15-day centre error, -18%)",
      "signals": [],
      "headline": "衛星高度計基盤モデルHaiRuoによる海洋中規模渦の場と個体の同時予測",
      "what": "24年分の衛星観測データで事前学習した10.5億パラメータの基盤モデルHaiRuo-1Bと、ラグランジュ的デコーダXuanJiを組み合わせた海洋予測システムです。15日間の海面水位・流速の「場」の予測と、個々の渦の「軌跡」の予測を一度のフォワードパスで行います。",
      "enables": "15日後の渦中心誤差を既存手法より18%削減（25.2 km vs 30.6 km）し、特に長期予測において37-43%の誤差削減を達成しました。エルニーニョ等の変動下でも安定した予測精度を維持します。",
      "why_it_matters": "海洋エネルギーの多くを担う中規模渦の挙動を、物理モデルに基づく後処理なしに直接かつ高精度に予測できるAI基盤を構築しました。",
      "tags": [
        "地球科学",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
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
    },
    {
      "id": "2611.14033",
      "title": "Few-Step Streaming Video Generation via Condition Shifting",
      "url": "https://arxiv.org/abs/2611.14033",
      "pdf": "https://arxiv.org/pdf/2611.14033",
      "authors": [
        "Deyuan Liu",
        "Jungang Li",
        "Kaiwen Zheng",
        "Kai Jiang",
        "Jintao Chen",
        "Yaole Wang"
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
      "hf_upvotes": 67,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲67"
      ],
      "headline": "Condition Shiftingを用いた少ステップ・ストリーミング動画生成の効率化",
      "what": "少ステップ（Few-step）での動画生成を最適化するAPEX手法です。生成器内部で条件をずらした入力を与えるCondition Shiftingにより、独立したディスクリミネータ・ネットワークなしで分布の速度場を推定し、学習時のメモリ消費と計算時間を削減します。",
      "enables": "既存のS2-Avatarと比較して、動画指示への追従性（Progressive trackで3.856 vs 3.831）と視覚的な美しさを向上させました。また、DMD手法と比較してピークGPUメモリを4.4%削減し、学習速度を9.2%高速化しています。",
      "why_it_matters": "高品質なストリーミング動画生成において、計算リソースを抑えつつ指示追従性と画質を両立させる効率的な蒸留プロトコルを提供します。",
      "tags": [
        "動画生成",
        "効率化"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14320",
      "title": "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents",
      "url": "https://arxiv.org/abs/2611.14320",
      "pdf": "https://arxiv.org/pdf/2611.14320",
      "authors": [
        "Yukyeong Lee",
        "Yumin Choi",
        "Jinheon Baek",
        "Sung Ju Hwang"
      ],
      "categories": [
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Submitted to ACL Rolling Review (October 2026 cycle); under review",
      "hf_upvotes": 52,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲52"
      ],
      "headline": "根拠履歴の紐付けにより外部メモリ起因の性能劣化を防ぐWikiTrace",
      "what": "LLMエージェントが過去の経験（レッスン）を再利用する際、その元となった実行軌跡（Trajectory）と紐付けて管理するWikiTraceシステムです。エージェントは抽象化された知見だけでなく、必要に応じて元の生データまで遡って情報の正確性を検証できます。",
      "enables": "メモリ情報の誤読や誤用によってエージェントの性能が逆に低下する「メモリ誘発性劣化」を抑制しました。5つのベンチマークにおいて、既存のメモリ管理手法を一貫して上回る性能を示しています。",
      "why_it_matters": "エージェントが経験から学ぶ過程で生じる「誤った教訓」の影響を最小限にし、長期的な運用における信頼性を高めます。",
      "tags": [
        "LLMエージェント",
        "外部メモリ"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.12940",
      "title": "Reinforcement Learning based control of Cancer Chemotherapy treatments",
      "url": "https://arxiv.org/abs/2611.12940",
      "pdf": "https://arxiv.org/pdf/2611.12940",
      "authors": [
        "Jayakody Kankanamalage Chamani Shiranthika"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Masters thesis at the National Taipei University. Received the IEEE Taipei Section, Best Masters thesis award in 2021",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "オフライン強化学習を用いたがん化学療法の最適治療スケジューリング",
      "what": "がん化学療法の動的治療計画を最適化するために、保守的Q学習（Conservative Q-learning）などのオフライン強化学習手法を適用した研究です。実際のヒト大腸がんの臨床データを用い、データ駆動型のアプローチで治療方針を生成します。",
      "enables": "シミュレーションおよび実臨床データを用いた評価において、従来のQ学習やオンライン手法よりも効果的な治療スケジューリングが可能であることを示しました。若手腫瘍医の意思決定を支援するモデルとして機能します。",
      "why_it_matters": "患者個別の状態に合わせた精密医療において、過去の観察データのみから安全かつ最適な治療プロトコルを導き出すための枠組みを提示しています。",
      "tags": [
        "強化学習",
        "医療AI"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.13213",
      "title": "Before Words, Beyond Speech: Evaluating Nonverbal Social Reasoning in Early Childhood",
      "url": "https://arxiv.org/abs/2611.13213",
      "pdf": "https://arxiv.org/pdf/2611.13213",
      "authors": [
        "Marie Amale Huynh",
        "Laura Bravo-S\\'anchez",
        "Lauren Klein",
        "Nick Haber",
        "Philip Fisher",
        "Serena Yeung-Levy"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as NeurIPS 2026 Spotlight paper. Project page at \\hyperlink{https://laubravo.github.io/nest_website/}{this URL}",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "乳幼児期の非言語的社会的相互作用を評価するビデオ理解ベンチマークNEST",
      "what": "乳幼児の視線、ジェスチャー、身体接触などの非言語的なやり取りを対象とした初の子ども中心ベンチマークNESTを提案しています。文脈、行動、対人関係、記述の4段階で構成される構成的な評価スキーマを導入しています。",
      "enables": "最新のVision-Language Models（VLMs）を評価した結果、文脈認識は高いものの、具体的な行動や対人関係の読み取りにおいて大きな性能低下があることを明らかにしました。特に時間的な感度や結果の推論に課題があることが特定されました。",
      "why_it_matters": "会話中心の大人向けデータに偏っていたビデオ理解モデルの評価を、発達心理学的に重要な非言語的コミュニケーション領域へと拡張します。",
      "tags": [
        "コンピュータビジョン",
        "VLM"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14134",
      "title": "Right for the Wrong Reasons? Evaluating Plausibility and Behavioral Change in Explanation-Guided Learning",
      "url": "https://arxiv.org/abs/2611.14134",
      "pdf": "https://arxiv.org/pdf/2611.14134",
      "authors": [
        "David Dembinsky",
        "Adriano Lucieri",
        "Andreas Dengel"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at EXPLAINS 2026 (Best Student Paper Award). Pre-review manuscript",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "説明ガイド付き学習における説明の妥当性と予測行動の変化の乖離の分析",
      "what": "モデルの説明（Rationale）を人間の根拠に近づける説明ガイド付き学習（EGL）の効果を、合成ショートカットデータセットを用いて多角的に検証した研究です。根拠に基づくデータ拡張や属性制約などの異なる目的関数が、予測行動の頑健性に与える影響を分析します。",
      "enables": "説明の妥当性が向上しても、必ずしもモデルの意思決定戦略（ショートカットへの依存）が改善されるわけではないことを示しました。特に属性制約は説明の外見を整える効果は高いものの、行動の修正には限定的であることを明らかにしました。",
      "why_it_matters": "モデルが「正しい理由で正しい判断をしているか」を評価する際、説明の一致度だけでなく行動レベルの指標を併用することの重要性を提起しています。",
      "tags": [
        "機械学習",
        "説明可能性"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14483",
      "title": "Mechanistic Interpretability Needs a Logic of Inference",
      "url": "https://arxiv.org/abs/2611.14483",
      "pdf": "https://arxiv.org/pdf/2611.14483",
      "authors": [
        "Zhimin Hu",
        "Chen Jiang",
        "Hanbo Xie",
        "N. Apurva Ratan Murty",
        "Sashank Varma"
      ],
      "categories": [
        "cs.CL",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 Interp4Discovery (Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "メカニズム解釈性（MI）を厳密な科学的推論にするための5つの原則",
      "what": "ニューラルネットワーク内部の計算メカニズムを解明するメカニズム解釈性（MI）において、観察結果から結論を導くための論理的枠組みを提案しています。神経科学との並行的な取り組みを参考に、推論のボトルネックを解消するための再帰的な論理構造を定義します。",
      "enables": "局所的な解釈結果を累積的な知識へと変換し、モデルを超えた領域でも検証可能な仮説を生成するための体系的な手順を提供します。",
      "why_it_matters": "MIの手法が洗練される中で、単なる観察に留まらず、科学的に強固な「メカニズムの説明」を確立するための学術的土台を築きます。",
      "tags": [
        "解釈可能性",
        "機械学習"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    },
    {
      "id": "2611.14504",
      "title": "Emergent Biological Capabilities in a Foundation Model for Molecular Interactions",
      "url": "https://arxiv.org/abs/2611.14504",
      "pdf": "https://arxiv.org/pdf/2611.14504",
      "authors": [
        "Adi Mashiach"
      ],
      "categories": [
        "cs.LG",
        "q-bio.BM"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 (Main Track, Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "分子相互作用の基盤モデルBonbonにおけるゼロショットでの生物学的機能の創発",
      "what": "3.2兆トークンのタンパク質-リガンド配列ペアで事前学習した、構造情報を用いない基盤モデルBonbonです。モデルスケールを16億パラメータまで拡大することで、作用機序や結合部位の特定などの高度な機能が創発（Emergence）することを確認しました。",
      "enables": "構造座標なしの配列情報のみから、結合親和性予測において既存のco-folding手法より5桁高速な処理を実現しました。ウェットラボでの検証では、未知の疾患標的に対して61.5%のヒット率で新規化合物を発見しています。",
      "why_it_matters": "大規模なラベルなしデータを用いたスケーリングが、物理的な構造情報に頼らずとも複雑な生物学的相互作用を理解し、創薬を加速させる可能性を実証しました。",
      "tags": [
        "バイオインフォマティクス",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-12T11:45:26.216298+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.12806",
      "title": "Learning Heterogeneous Tactile Representation for General Dexterous Manipulation",
      "abstract": "Tactile sensing is an indispensable modality for contact-rich dexterous manipulation, a capability that hints at the ultimate frontiers of embodied intelligence. However, commercially available tactile sensors are still at a relatively early stage of development, with each type of sensor offering irreplaceable strengths alongside its own drawbacks. A key challenge is thus to free tactile understanding from sensor-specific physics, so that embodied models can effectively leverage heterogeneous tactile data. To this end, we develop LingBot-Touch, a tactile foundation model characterized by the following properties. (i) Our model yields a unified representation across different tactile sensors (i.e., piezoresistive, magnetic, and visuotactile sensors), and is easily extensible to new sensor types. (ii) The resulting tactile tokens are plug-and-play: they can be seamlessly integrated into policy models across paradigms, from diffusion policy to vision-language-action (VLA) models such as π_{0.5} and LingBot-VLA, consistently enhancing manipulation dexterity. (iii) Extensive experiments, spanning simulation and real-robot deployments across multiple hardware platforms, demonstrate that our tactile representation substantially benefits complex manipulation tasks while maintaining strong computational efficiency. We believe the findings in this work demonstrate the potential of leveraging cross-sensor data to scale tactile learning, and offer encouraging insights for the design of future hardware and embodied models.",
      "upvotes": 102,
      "github_stars": 484,
      "github_repo": "https://github.com/Robbyant/lingbot-touch",
      "project_page": "https://technology.robbyant.com/lingbot-touch",
      "comments": 2,
      "org": "Robbyant",
      "url": "https://huggingface.co/papers/2611.12806",
      "arxiv_url": "https://arxiv.org/abs/2611.12806",
      "title_ja": "多様な触覚表現を学習する汎用器用操作モデル",
      "summary_ja": "多種多様な触覚センサのデータを統合し、センサ特有の物理特性に依存しない統一表現を実現する基盤モデルを提案。"
    },
    {
      "id": "2611.06043",
      "title": "Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription",
      "abstract": "Streaming speech recognition is increasingly consumed by machines, such as translators and voice agents, that act on each token as it appears. A token that is later revised costs wasted work or a wrong action. In this work, we present Confucius4-R2T2 (short for Real Real-Time Transcription), a stable-prefix streaming ASR model that never modifies its earlier output while maintaining high accuracy and low latency. R2T2 is obtained by post-training Qwen3-ASR-1.7B on 1,500 hours of Chinese and English audio while freezing its pre-trained audio encoder and projector. The adaptation is based on the concept of Longest Stable Prefix (LSP), a new notion that we introduce in this work. We prove that LSP is monotone under the prefix order, consistent with the full-audio output, and maximal among labels that equal a whole earlier output. Learning from LSP labels converts a full-context model into a stable-prefix streaming one without any architectural change. Extensive evaluations show that R2T2 brings streaming recognition close to the base model's full-context quality while delivering stable text with low emission lag. Its gains extend beyond the post-training languages, demonstrating a practical path from full-context ASR to stable streaming. We open-source the model weights and code at https://huggingface.co/netease-youdao/Confucius4-R2T2 and https://github.com/netease-youdao/Confucius4-R2T2.",
      "upvotes": 93,
      "github_stars": 890,
      "github_repo": "https://github.com/netease-youdao/Confucius4-R2T2",
      "project_page": "https://r2t2.ai/",
      "comments": 2,
      "org": "Netease Youdao",
      "url": "https://huggingface.co/papers/2611.06043",
      "arxiv_url": "https://arxiv.org/abs/2611.06043",
      "title_ja": "実時間転記のための安定プレフィックス・ストリーミングASRモデル",
      "summary_ja": "過去の出力を一切修正せず、高い精度と低遅延を維持したまま逐次的に音声をテキスト化する新しい学習手法を導入。"
    },
    {
      "id": "2611.14033",
      "title": "Few-Step Streaming Video Generation via Condition Shifting",
      "abstract": "Few-step sampling reduces the cost of streaming video generation. Distribution Matching Distillation (DMD) supervises few-step generators with a separate fake-score network, which adds training memory and computation and must track the evolving generator. We extend APEX to streaming video by using condition shifting to estimate the velocity field of the generated distribution within the generator. The original text condition selects generation, while a shifted condition selects fake estimation using the same parameters. This removes the independent fake network while retaining S2-Avatar's frozen reference teacher, Self-Replay Forcing, and perceptual regularization. We evaluate APEX on 180-second videos using three backbone evaluations per block and a one-step spatial Refiner, with a 70-case human study and a 320-case StreamAV-Bench comparison. Compared with S2-Avatar, APEX achieves higher video instruction fulfillment on the Progressive track (3.856 versus 3.831) and higher visual aesthetics across both tracks (0.641898 versus 0.632606). Human raters favor APEX most strongly on instruction following, with +30.0% net preference, followed by consistency and video quality at +4.3% each. Motion quality favors S2-Avatar, audiovisual synchronization is predominantly tied, and usability is unchanged. Separate measurements under matched training settings show 4.4% lower peak allocated GPU memory per GPU and 9.2% shorter mean iteration time than DMD.",
      "upvotes": 88,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.vidu.com/vidu-stream/avatar",
      "comments": 2,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.14033",
      "arxiv_url": "https://arxiv.org/abs/2611.14033",
      "title_ja": "条件シフトを用いた数ステップ・ストリーミング動画生成",
      "summary_ja": "独立した評価ネットワークなしで生成分布を推定し、少ない計算量で効率的かつ高品質なストリーミング動画生成を実現。"
    },
    {
      "id": "2611.15777",
      "title": "SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models",
      "abstract": "System One models promise fast, general-purpose decision-making without lengthy token generation. However, understanding their capability spectrum and decision reliability requires more than aggregate performance on current benchmarks. Existing evaluations often provide limited insight into the breadth of model capabilities and the reliability of their decisions. We introduce SO-Arena, a benchmark characterizing the capability spectrum and decision reliability of System One models across 11 domains and five capability families. For the capability spectrum, SO-Arena offers evidence-grounded evaluation through reliable sources and manual verification of reference labels against model-visible inputs; fine-grained capability assessment through domain-specific difficulty criteria; and realistic interactive evaluation, where models iteratively execute actions in sandboxes. Reasoning-intensive tasks further enable system one-two comparison. Beyond accuracy, SO-Arena assesses decision reliability through two complementary measures: decision stability under controlled option-set changes and missing-answer recognition when no valid option is available. Evaluations across 21 models reveal that the benefits of scaling and additional reasoning vary substantially across domains. More importantly, strong overall performance does not necessarily imply reliable decision-making: the best-performing System One model ranks only seventh in reliability. Together, these findings highlight the need to characterize capability spectrum and decision reliability as complementary dimensions, providing a systematic view of the strengths and limitations of System One models.",
      "upvotes": 74,
      "github_stars": 24,
      "github_repo": "https://github.com/holdrain/SO-Arena",
      "project_page": "https://lichenlillc.github.io/SO-Arena",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.15777",
      "arxiv_url": "https://arxiv.org/abs/2611.15777",
      "title_ja": "SO-Arena：System Oneモデルの能力範囲と信頼性の評価",
      "summary_ja": "高速な意思決定を行うSystem Oneモデルの能力と信頼性を、11の領域にわたり根拠に基づいた検証で測定するベンチマーク。"
    },
    {
      "id": "2611.03953",
      "title": "P^2-MOPD: Accelerating Multi-Teacher On-Policy Distillation via Parameter Priors",
      "abstract": "Multi-teacher on-policy distillation consolidates expert capabilities by supervising student-generated trajectories, whereas task arithmetic offers a training-free alternative through linear parameter combinations. We view the linear combination of student and expert parameters as a single differentiable model and propose P^2-MOPD, which jointly optimizes the mixing coefficients and the student weights under the same on-policy distillation objective. Unlike task arithmetic, which stays within the span of the frozen student and expert parameters for any choice of merging coefficients, P^2-MOPD keeps the student trainable, so the experts act as parameter priors without confining it to this span. Across four domains at 1.7B and 4B scales, P^2-MOPD achieves faster and more balanced recovery than MOPD from the same initialization, surpassing its final average recovery in half the training steps. At the end of training, our 1.7B model reaches 94.7% average recovery, versus 80.9% for MOPD.",
      "upvotes": 70,
      "github_stars": 18,
      "github_repo": "https://github.com/SinuoWang/P2-MOPD",
      "project_page": "",
      "comments": 8,
      "org": "StepFun",
      "url": "https://huggingface.co/papers/2611.03953",
      "arxiv_url": "https://arxiv.org/abs/2611.03953",
      "title_ja": "パラメータ事前分布を用いた複数教師オンポリシー蒸留の加速",
      "summary_ja": "教師モデルをパラメータ事前分布として活用し、学習中の学生モデルの重みと混合係数を同時最適化して知識集約を効率化。"
    },
    {
      "id": "2611.08264",
      "title": "SplatAnything: Gaussian Spacing Normalization for Feed-forward 3DGS across Arbitrary Scenes",
      "abstract": "We identify a key limitation of existing feed-forward 3DGS methods: Gaussian attributes are typically predicted in a radial-distance-normalized space that canonicalizes a global radial statistic of the reconstructed geometry, while the spacing between neighboring Gaussian centers can still vary substantially across scene scales and camera configurations. This mismatch induces systematic shifts in Gaussian-scale targets, leading to ambiguous supervision. To address this, we propose SplatAnything with Gaussian Spacing Normalization (GSNorm), which canonicalizes a robust scene-level statistic of Gaussian spacing to provide a more consistent spatial reference for Gaussian prediction. To rigorously assess our method, we further establish a systematic benchmark spanning diverse datasets, input sparsity levels, and challenging extrapolated viewpoints. Extensive experiments demonstrate that SplatAnything achieves state-of-the-art performance, with particularly strong gains under substantial variations in scene scale and viewpoint.",
      "upvotes": 69,
      "github_stars": 218,
      "github_repo": "https://github.com/zju3dv/SplatAnything",
      "project_page": "https://zju3dv.github.io/SplatAnything/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2611.08264",
      "arxiv_url": "https://arxiv.org/abs/2611.08264",
      "title_ja": "SplatAnything：任意シーン対応のフィードフォワード3DGS用正規化",
      "summary_ja": "ガウス間隔正規化を導入し、シーンのスケールやカメラ構成に依存せず一貫した3Dガウス予測を可能にする手法を提案。"
    },
    {
      "id": "2611.14320",
      "title": "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents",
      "abstract": "External memory enables LLM agents to improve from experience by distilling trajectories of past tasks into concise lessons for new tasks. However, memory can also lead to memory-induced degradation, where an agent fails on tasks it would solve without memory, often because it follows a lesson that is incorrect, or misapplies or misreads a valid one. This is because lessons are inferred from trajectories labeled only with task success or failure, yet are typically provided without the trajectories they came from, leaving the agent no way to check them. To address this, we introduce WikiTrace, an evidence-linked memory system designed to let agents check each lesson against its original trajectory. Specifically, motivated by the finding that a trajectory often still holds the evidence needed to catch an erroneous lesson, WikiTrace stores each lesson as a concise insight linked to a summary of why its trajectory succeeded or failed and to the raw trajectory itself. Then, on a new task, the agent starts from all insights and, whenever one lacks details needed to act, conflicts with another, or comes from a failed task, descends through its links with terminal tools to fill in missing details or correct the insight before acting. We validate WikiTrace on five agentic benchmarks, showing that it consistently outperforms existing memory approaches and a baseline given the same insights alone, while also reducing memory-induced degradation. Our code is available at https://github.com/yukyeongleee/wikitrace",
      "upvotes": 66,
      "github_stars": 19,
      "github_repo": "https://github.com/yukyeongleee/wikitrace",
      "project_page": "https://yukyeongleee.github.io/wikitrace/",
      "comments": 7,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.14320",
      "arxiv_url": "https://arxiv.org/abs/2611.14320",
      "title_ja": "根拠にリンクされたメモリによるLLMエージェントの劣化抑制",
      "summary_ja": "過去の教訓と元の行動履歴を紐付けるWikiTraceにより、エージェントが誤った知識に従うのを防ぎ性能低下を回避。"
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
      "title_ja": "WorldFoundry：ワールドインテリジェンスのための統一基盤",
      "summary_ja": "行動や介入に対し因果的に整合した応答と永続的な状態維持を行う、動的な生成世界モデルの定義と基盤を提示。"
    },
    {
      "id": "2611.12762",
      "title": "Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery",
      "abstract": "We introduce Sage-Taiyi, a metacognition-inspired architecture that uses accumulated scientific understanding to guide what to investigate next and how to investigate it. Through explicit monitoring and control, the system revises its understanding of evidence, assumptions, and unresolved questions, then uses these assessments to adapt research targets and select reusable reasoning methods. On Taiyi-Bench, an AI co-scientist ideation benchmark comprising 265 tasks from 50 papers across ten disciplines, Sage-Taiyi ranks first on all eight metrics of historical rediscovery and open-ended ideation, achieving an Overall score of 54.0 compared with 47.9 for the strongest baseline, AI Scientist-v2. It also performs well on two external scientific ideation benchmarks. Five expert-guided collaborations further connect its proposals to experimental and computational validation across chemistry, materials science, and engineering. In chemistry, reaction-condition optimization raises the yield of cobalt-catalyzed carbonylation from trace amounts to 84% and photocatalytic allylic amination from 13% to 69%. These results support metacognitive regulation as an approach to scientific ideation and its progression toward practical validation.",
      "upvotes": 57,
      "github_stars": 18,
      "github_repo": "https://github.com/Alpha-Innovator/Sage-Taiyi",
      "project_page": "https://alpha-innovator.github.io/Sage-Taiyi/",
      "comments": 2,
      "org": "Shanghai AI Laboratory",
      "url": "https://huggingface.co/papers/2611.12762",
      "arxiv_url": "https://arxiv.org/abs/2611.12762",
      "title_ja": "Sage-Taiyi：科学的発見のためのメタ認知的アーキテクチャ",
      "summary_ja": "蓄積した知見に基づき調査対象や手法を自ら調整・改善し、科学的アイデア創出において既存手法を上回る性能を達成。"
    },
    {
      "id": "2611.12885",
      "title": "World In-Context Learning for Agentic Robot Manipulation",
      "abstract": "Trained action policies write manipulation skill into network weights, tying what is learned to the distribution it is learned from. In-context learning (ICL) avoids this coupling but has not matched trained policies, because a demonstration recorded in another scene carries no feedback from the world the robot currently faces. We observe that what an agent learns in context is semantic, recording task steps and object roles rather than visual appearance, so experience gathered in one world transfers to another. Based on this insight, we propose World In-Context Learning (WICL), a paradigm in which a frozen model starts from a demonstration, rehearses the task in a world such as a simulator, and writes the feedback into its context rather than its weights. We build RoboScript, a modular infrastructure that implements WICL for agentic manipulation. From a single demonstration, RoboScript learns each task through rehearsal in simulation, freezes the learned knowledge as a Task Memory, and deploys the frozen memory on new scenes with data isolation that ensures every deployment input is available on a real robot. On all 50 tasks of RoboTwin 2.0, RoboScript reaches 83.4% mean success across clean and randomized settings with one demonstration per task and no gradient updates, exceeding the strongest trained action policy by over 20 points. The method generalizes across visual distributions, improves through reflection, scales with the foundation model, and transfers to a physical dual-arm robot through cross-embodiment memory adaptation. With a world in the loop, a robot can learn a manipulation task in its context as well as it learns one in its weights. All code is available at https://github.com/ArcheOne-AI/RoboScript",
      "upvotes": 56,
      "github_stars": 170,
      "github_repo": "https://github.com/ArcheOne-AI/RoboScript",
      "project_page": "https://archeone-ai.github.io/RoboScript/",
      "comments": 3,
      "org": "ArcheOne-AI",
      "url": "https://huggingface.co/papers/2611.12885",
      "arxiv_url": "https://arxiv.org/abs/2611.12885",
      "title_ja": "ロボット操作のためのコンテキスト内世界学習",
      "summary_ja": "シミュレータ等の別環境でタスクを試行し、その意味的な経験を未知の環境に転移させることで、学習なしでの操作を実現。"
    },
    {
      "id": "2611.09124",
      "title": "Toward the Era of Agentic Embodied Intelligence",
      "abstract": "Foundation models increasingly guide robot actions, yet sustained autonomy requires efficient control and failure recovery. We introduce A2-MEAS, an embodied multi-agent framework built around code as a scaling interface. Learned correction codes combine corrective language, spatial evidence, execution history, and action proposals. MetaBrain provides training supervision and runtime guidance. A correction encoder and adapter absorb this knowledge into policy weights during training, while fresh codes adapt behavior with frozen weights at deployment. The action model, A2-WLA, adds motion-aware history and a latent world model to a vision-language-action policy. Surprisingly, this simple design with action pretraining and task specialization reaches 0.5755 Q-score on the 50-task BEHAVIOR 2026 public subset before online correction, 2.21x the 2025 winner's reported 0.2605 across different benchmark editions and training configurations. On all 100 BEHAVIOR 2026 public tasks, A2-MEAS achieves 0.6411 Q-score and 45.40% task success. On RoboTwin 2.0, A2-WLA achieves 93.98% average success, rising to 95.05% with the complete system. Across 12 real-robot tasks in five household settings, A2-WLA achieves 57.92% average success versus 26.67% for pi0.5. In long-horizon pour-over coffee preparation, a history-conditioned adapter raises post-failure completion at two filter-handling steps from 14% to 94% and from 8% to 82%, compared with A2-WLA retries. Our training infrastructure delivers 427.1 samples per second, 4.03x the throughput of a pi0.5 reference implementation on matched hardware. We will release the system, models, training scripts, and infrastructure to support efficient embodied learning.",
      "upvotes": 53,
      "github_stars": 23,
      "github_repo": "https://github.com/AutoLab-SAI-SJTU/A2MEAS",
      "project_page": "https://a2-meas.github.io/",
      "comments": 3,
      "org": "AutoLab",
      "url": "https://huggingface.co/papers/2611.09124",
      "arxiv_url": "https://arxiv.org/abs/2611.09124",
      "title_ja": "エージェント型身体知能の時代へ",
      "summary_ja": "修正コードと潜伏世界モデルを活用し、自律的な行動制御と失敗からの回復を可能にする身体化マルチエージェント枠組み。"
    },
    {
      "id": "2611.11995",
      "title": "Infrathon: Benchmarking Language Agents for Real-World, Long-Horizon AI Infra Optimization",
      "abstract": "In this work, we study whether frontier agent can continually improve real-world AI infrastructure over long horizons. We introduce Infrathon, a benchmark of diverse, long-horizon AI infrastructure optimization tasks across different levels. We evaluate six models across 150 runs with 24-hour budgets, totaling over 10,000 GPU-hours. Our results show that model rankings vary with the evaluation horizon, while 135 of the 150 runs achieve further improvements during the second half of their budgets. These findings indicate that shorter evaluations can overlook both optimization gains and changes in relative model performance. We also find agents can discover solutions that outperform human-designed baselines: Claude Opus 5.5 increases the mean KV-cache compression ratio from 6.82% with the human-designed Quant-VideoGen codec to 19.86%. Analysis of agent trajectories identifies task violations, unreliable testing, and premature completion as barriers to sustained improvement. Together, Our Infrathon framework provide resources for constructing long-horizon tasks, evaluating frontier agents, and discovering good infrastructure solutions.",
      "upvotes": 47,
      "github_stars": 27,
      "github_repo": "https://github.com/InfrathonX/Infrathon",
      "project_page": "https://infrathonx.github.io/",
      "comments": 10,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2611.11995",
      "arxiv_url": "https://arxiv.org/abs/2611.11995",
      "title_ja": "Infrathon：AIインフラ最適化の長期ベンチマーク",
      "summary_ja": "24時間の予算内でAIインフラを最適化する能力を評価し、短期間の評価では見落とされる長期的な性能変化を分析。"
    },
    {
      "id": "2611.14815",
      "title": "BirdDreams: Joint Perspective and BEV Video Generation for a Plausible, Reactive Driving World Model",
      "abstract": "Driving world models aim to simulate how a scene unfolds under different ego actions. This requires plausible motion of surrounding vehicles as well as precise ego-trajectory control. Learning vehicle motion from perspective video alone is challenging because motion is entangled with appearance and vehicles can be occluded. Prior work therefore conditions video generation on layouts that specify vehicle motion, providing control over surrounding vehicles but requiring their future trajectories as inputs. We introduce BirdDreams, an autoregressive driving world model that jointly generates perspective video and a schematic bird's-eye-view (BEV) video, making scene layout part of the predicted future. The BEV, rendered from scene annotations for training, depicts roads and vehicles as simple shapes at a fixed metric scale, providing a top-down view of their positions and motion with reduced occlusion between vehicles. Perspective video, by contrast, retains scene details that the BEV omits, such as traffic signals and object appearance. Joint attention between two video diffusion transformers, one per stream, lets each stream inform the other during generation. The predicted BEV also provides a geometric interface for ego control: we translate and rotate its latest frame along an input ego trajectory and use the resulting frames as a soft condition that shows how the scene would appear to move if only the ego vehicle moved. At inference, BirdDreams generates both videos from a single camera image without requiring an HD map or vehicle-state inputs. On PhysicalAI-AV and nuScenes, BirdDreams follows input ego trajectories more faithfully than prior driving world models and generates more plausible ego motion without ego-action conditioning. Human evaluation shows that BirdDreams outperforms a perspective-only baseline in generating realistic surrounding-vehicle behavior.",
      "upvotes": 46,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://research.nvidia.com/labs/sil/projects/birddreams/",
      "comments": 1,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.14815",
      "arxiv_url": "https://arxiv.org/abs/2611.14815",
      "title_ja": "BirdDreams：客観視点と俯瞰視点を統合した動画生成",
      "summary_ja": "主観映像と俯瞰図を同時に生成することで、周囲の車両の動きを矛盾なく制御・予測できる運転世界モデルを構築。"
    },
    {
      "id": "2611.14210",
      "title": "Tree-Ising: Repairing Language Models with Bit-Level Ising Edits",
      "abstract": "Weight-space programming, introduced in recent MIT work by Takehi et al., enables a frontier LLM agent to read a network's weights and write a repair. Their GPT-6 Astra agent corrected the reasoning loops of Qwen3.5-0.8B without gradients, using 158 agent turns, 89.7 million tokens, and 50 forward-pass requests. Our method, Tree-Ising, casts this repair as a sparse discrete optimization problem over the model's own BF16 weights. Forward statistics define an objective that weakens a loop direction, strengthens a concluding direction, and preserves the layer's output on productive tokens. Within a state-tree representation, where lossless BF16 storage acts as a special case, the admissible edits are sign flips and exponent shifts that preserve all shared group exponents and mantissas. We decompose this objective exactly into independent QUBO (Ising) problems, one per output row, which we solve on a GPU using simulated annealing or quantum-inspired simulated bifurcation. On the agent's two layers, Tree-Ising achieves 54.6% on MATH-500, outperforming the agent's edit (51.7%) under the same evaluation protocol, while the base model scores 7.9% as reported. The simulated bifurcation solver yields a statistically indistinguishable repair at 55.1%. Both solvers outperform the agent edit across all five math benchmarks, with statistically significant improvements on MATH-500 and GSM8K after correcting for multiple comparisons. Our approach modifies 13% to 17% fewer weights and reduces BF16 bit flips by a factor of 2.2 to 2.3. It requires only four forward-pass requests and zero LLM tokens, with the annealing recipe costing about $0.90 in GPU time. On Qwen3.5-2B, with layers and dose selected using only the base model, the same recipe increases greedy GSM8K accuracy from 21.6% to 69.4%. As a proof of concept, we execute an eight-variable repair subproblem using QAOA on an IBM Heron processor.",
      "upvotes": 45,
      "github_stars": 11,
      "github_repo": "https://github.com/TheQuantumGOAT/Tree-Ising",
      "project_page": "",
      "comments": 6,
      "org": "",
      "url": "https://huggingface.co/papers/2611.14210",
      "arxiv_url": "https://arxiv.org/abs/2611.14210",
      "title_ja": "Tree-Ising：ビットレベルの編集による言語モデルの修復",
      "summary_ja": "モデルの重みを直接最適化し、勾配計算なしで推論のループ解消や出力の質の改善を行う新しい重み空間修復手法。"
    },
    {
      "id": "2610.40394",
      "title": "Scaling Mathematical Proof Supervision from Structured Textbooks",
      "abstract": "Mathematical supervision for language models is typically flattened into isolated problem-solution pairs, discarding the curricular organization and evidential structure of the original sources. We introduce TOME-Math (Textbook-Oriented Mathematical Evidence), a large-scale corpus that converts 2,118 textbooks spanning the core areas of university-level mathematics subjects into approximately 380K structured proof-supervision records while preserving chapter order, proposition-proof links, dependency references, and source provenance. Leveraging these structural signals, we explore curriculum learning across multiple mathematical subjects and characterize scaling patterns with supervision volume and source breadth. At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate. Our findings highlight structured textbooks as both a scalable source of mathematical supervision and an empirical framework for studying the impact of data organization on mathematical reasoning. We will release the corpus to facilitate further research on structured mathematical supervision.",
      "upvotes": 44,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tome-math.github.io/",
      "comments": 3,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.40394",
      "arxiv_url": "https://arxiv.org/abs/2610.40394",
      "title_ja": "構造化教科書による数学証明学習のスケールアップ",
      "summary_ja": "2,000冊以上の教科書の構造を維持したまま証明データ化し、科目間のカリキュラム学習やスケール則を検証。"
    },
    {
      "id": "2611.16748",
      "title": "PhysLoop: Harnessing LLMs' Physics Awareness for Self-Improving Video Generation Models",
      "abstract": "Video generation models produce visually realistic videos but still struggle with physical dynamics and causal consistency. Learning from generated videos requires fine-grained physical supervision, yet reliable quality judgments, correction pairs, and controlled variations are difficult to obtain. Large language models (LLMs) possess physical knowledge, but struggle to reliably guide video generation models in producing their training videos. We present PhysLoop, a unified harness designed to support physically grounded self-improvement in video generation models. The harness guides and constrains LLMs throughout video generation, selection, and correction, distilling their physical knowledge into physically consistent videos. The framework supports controllable training-data construction and inference-time video repair. By identifying and correcting failures, PhysLoop marks a key milestone toward recursive self-improvement (RSI) in video generation models with limited human intervention. We release 100K videos spanning diverse, realistic indoor and outdoor scenes, along with generation tools and two evaluation datasets: PhysLoop-Gen and PhysLoop-Repair. We evaluate controllable generation and localized repair on these datasets, respectively, and assess physical behavior on the external Physics-IQ Verified benchmark.",
      "upvotes": 42,
      "github_stars": 32,
      "github_repo": "https://github.com/DAGroup-PKU/PhysLoop",
      "project_page": "https://chenyx24.github.io/PhysLoop-site/",
      "comments": 3,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.16748",
      "arxiv_url": "https://arxiv.org/abs/2611.16748",
      "title_ja": "PhysLoop：LLMの物理知識による動画生成モデルの自己改善",
      "summary_ja": "LLMの物理的知識を用いて生成動画を評価・修正し、その結果を蒸留することで動画モデルの物理的整合性を向上。"
    },
    {
      "id": "2611.08175",
      "title": "PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?",
      "abstract": "Automating printed circuit board (PCB) routing requires coordinating board-level connectivity decisions with geometric execution under strict design rules. Although recent agents can interact with native routing tools, reliable routing on complex boards remains challenging. We present PCBRouteAgent, a multimodal PCB routing agent inspired by how human engineers coordinate global strategy with local execution. A Global Routing Planner combines board images and structured electrical and geometric information to specify connection topology, routing order, corridors, and layer transitions. A Detailed Routing Executor realizes these guides through KiCad's native routing engine and performs bounded local recovery. Unresolved failures are returned as structured feedback, enabling targeted guide revisions while preserving accepted routes. We evaluate PCBRouteAgent on 247 synthetic and real-world boards from four PCBWorld-Bench test splits. It achieves clean-pass rates of 100%, 94.9%, 100%, and 40% on D2, D3-A, D3-B, and D3-C, respectively. On the three real-world subsets, PCBRouteAgent outperforms the best evaluated baseline in clean-pass rate by 13.9, 36, and 10 percentage points, respectively.",
      "upvotes": 42,
      "github_stars": 61,
      "github_repo": "https://github.com/chip-ai-agent/PCBRouteAgent",
      "project_page": "https://chip-ai-agent.github.io/research/pcbrouteagent/",
      "comments": 8,
      "org": "",
      "url": "https://huggingface.co/papers/2611.08175",
      "arxiv_url": "https://arxiv.org/abs/2611.08175",
      "title_ja": "PCBRouteAgent：PCB配線設計エージェントの可能性",
      "summary_ja": "大局的な配線戦略と局所的な幾何実行を連携させ、人間のように複雑なプリント基板の配線設計を行うマルチモーダルAI。"
    },
    {
      "id": "2611.13004",
      "title": "G-STAR: Group-Scaled Token Capacity for Deeply Compressed Autoregressive Generation",
      "abstract": "Discrete autoregressive models offer a scalable framework for image generation. However, they face a fundamental trade-off: long token sequences preserve representation quality but slow generation, while aggressive spatial compression reduces representation capacity. Based on product quantization, we show that, under a fixed nominal information budget, group size should scale quadratically with the per-axis spatial compression factor. Building on this principle, we propose GSTAR, a spatial--group co-scaling framework that enables \\(32\\times\\) and even effective \\(64\\times\\) compression while preserving strong reconstruction, understanding, and generation performance. Since larger groups introduce intra-group dependencies that must be modeled efficiently, we analyze their impact on inference latency and generation quality and introduce a semi-autoregressive decoder that combines parallel feature computation with lightweight causal modeling. With these designs, our highly compressed models perform competitively with leading models across five representative text-to-image benchmarks (GenEval, DPG-Bench, PRISM, LongText-Bench, and Qwen-Image-Bench). At \\(1024\\times1024\\) resolution, our model delivers a \\(20\\times\\) speedup over prior discrete autoregressive models, generating each image in 2.5 seconds on a single NVIDIA H200. Together, these results show that highly compressed discrete representations can enable high-quality autoregressive generation at low latency.",
      "upvotes": 41,
      "github_stars": 24,
      "github_repo": "https://github.com/DAGroup-PKU/G-STAR",
      "project_page": "https://dagroup-pku.github.io/G-STAR/",
      "comments": 2,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2611.13004",
      "arxiv_url": "https://arxiv.org/abs/2611.13004",
      "title_ja": "G-STAR：高度圧縮型自己回帰生成のためのグループスケール拡張",
      "summary_ja": "空間圧縮率に合わせてグループサイズを拡大する設計により、32〜64倍の高圧縮下でも高品質な画像生成と理解を実現。"
    },
    {
      "id": "2611.04720",
      "title": "OneTrans-GSR: A Generative Slate Ranking Paradigm Unifying Reranking and Mix-Ranking with One Autoregressive Transformer",
      "abstract": "Industrial recommender systems allocate substantial computation to pointwise candidate scoring, yet separate reranking and mix-ranking stages still assemble the final exposure slate using hand-crafted rules and specialized low-capacity models. Mix-ranking combines product cards, short videos, livestreams, and advertising cards supplied by distinct upstream business channels. Although these rules and models encode valuable domain knowledge, they are inherently limited in leveraging additional data and computation. They constrain the combinatorial space of candidate slates and determine objective trade-offs through manual tuning. To enable scalable and effective slate generation, we reformulate reranking and mix-ranking as a unified learning problem whose performance can improve with computation. Specifically, we instantiate this formulation across the reranking and mix-ranking stages and propose OneTrans-GSR, a single decoder-only policy that extends our deployed OneTrans backbone to generate the exposure slate end-to-end. During training, a reward model evaluates complete slates and guides reinforcement learning toward slate-level and long-term objectives. During decoding, business constraints are explicitly enforced. Offline evaluation shows that slate quality consistently improves as reward-model and policy compute increase. Deployed in a large-scale industrial recommendation system, OneTrans-GSR mixes heterogeneous content types within a unified slate. In online A/B tests, it improves GMV/u by 2.63%, advertiser value by 2.06%, and repurchase rate by 2.03%, while reducing end-to-end latency across the reranking and mix-ranking stages by 13%. These results mark a paradigm shift in slate generation: moving beyond human-engineered heuristics toward a general learned policy creates a scalable path for further algorithmic optimization and compute-driven improvement.",
      "upvotes": 41,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2611.04720",
      "arxiv_url": "https://arxiv.org/abs/2611.04720",
      "title_ja": "OneTrans-GSR：統一トランスフォーマーによる推薦順位付け",
      "summary_ja": "手動ルールや分離されたモデルを統合し、多様なコンテンツを一つの自己回帰モデルで最適に並べる推薦パラダイム。"
    },
    {
      "id": "2611.12886",
      "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
      "abstract": "Agentic reinforcement learning (RL) and multi-teacher on-policy distillation (MOPD) offer complementary routes to post-training. For visual agents, however, tool use presents two related challenges. Models may overlook useful tool-returned observations, while poorly grounded actions can limit the evidence available for subsequent distillation. We introduce Reframe, a post-training framework that treats the observation state, rather than only the output distribution, as an object of alignment. First, Ground-Drop-GRPO (GD-GRPO) trains spatial and temporal specialists with evidence-aware rewards and stochastic removal of the original visual input, encouraging them to acquire grounded evidence and use the returned observations. Second, Observation-Gated-MOPD (OG-MOPD) replaces deficient tool actions with canonical ones mid-rollout and resumes distillation from the repaired observation. The two stages complement each other, as learning to rely on tool-returned observations can help the policy benefit from observation repair. Neither stage requires a task-specific SFT cold start. Extensive experiments over 14 image and video benchmarks demonstrate that Reframe outperforms both Mix-RL and vanilla MOPD. Ablation results show that GD-GRPO increases observation dependence and tool gain compared with outcome-based GRPO.",
      "upvotes": 40,
      "github_stars": 35,
      "github_repo": "https://github.com/EliYuan30/Reframe",
      "project_page": "",
      "comments": 3,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2611.12886",
      "arxiv_url": "https://arxiv.org/abs/2611.12886",
      "title_ja": "Reframe：観測状態の整合に基づくマルチ教師オンポリシー蒸留",
      "summary_ja": "ツールの出力などの観測状態を整合対象とすることで、視覚的エージェントの根拠に基づいた推論能力を強化。"
    },
    {
      "id": "2611.13001",
      "title": "One Table, Many Queries: Benchmarking Generalist Tabular Models Across Generation, Imputation, and Prediction",
      "abstract": "Generation, imputation, and prediction query different aspects of the same tabular distribution, but are usually evaluated separately. This leaves unclear which capabilities they share, how their training objectives interact, and whether one model can perform all three well. We introduce the One Table Benchmark (), spanning 56 datasets, 46 registered methods, and 20 capability axes under aligned data splits and explicit task contracts. We compare task ranks on aligned support, train five backbones under all seven non-empty objective combinations on five datasets with three seeds, and contrast fixed-model profiles with specialist portfolios. Rank comparisons connect imputation and prediction through numerical recovery and dependence preservation, and link generation to both through predictive utility; distributional fidelity follows different, sometimes opposing, rankings. Objective interventions show the largest pooled gains from including the recipient's own objective. Generation has the broadest coverage of positive pooled auxiliary effects, while prediction shows potential to improve imputation and synthetic-data utility, with responses that vary across backbones. Cross-addition effects reveal that objective benefits need not add and depend on the objectives already present. Fixed-model comparisons expose corresponding utility--fidelity trade-offs: some generalists surpass specialist portfolios on utility, while fidelity continues to favor specialization. Frozen foundation models show strong prediction and numerical point imputation, together with promising synthetic-data utility, highlighting their potential across all three tasks. These findings motivate unified tabular models that share useful conditional information while improving categorical reconstruction and faithful joint sampling.",
      "upvotes": 38,
      "github_stars": 1,
      "github_repo": "https://github.com/limix-ldm-ai/OTBench",
      "project_page": "",
      "comments": 7,
      "org": "Stable AI",
      "url": "https://huggingface.co/papers/2611.13001",
      "arxiv_url": "https://arxiv.org/abs/2611.13001",
      "title_ja": "One Table, Many Queries：汎用表形式モデルの統合ベンチマーク",
      "summary_ja": "生成、補完、予測という異なる表形式タスク間の能力共有や学習目的の相互作用を、56のデータセットで包括的に評価。"
    },
    {
      "id": "2611.15131",
      "title": "Duo: A Reciprocal World Model for Full-Duplex Interaction",
      "abstract": "In this report, we introduce the Reciprocal World Model (RWM) and present Duo v1, a full-duplex world model that continuously perceives audiovisual inputs while responding to users in real time. The RWM treats intelligence and physical reality as equally fundamental to what constitutes a world. Existing world models largely focus on simulating the latter, leaving reasoning and decision-making as external controls rather than intrinsic parts of the world itself. In RWM, we identify two equally fundamental capabilities: Intent, which provides the cognition underlying world interactions, and Realization, which generates coherent audio-visual behavior. To realize this formulation, Duo v1 introduces three key technical designs: (1) Leveraging autoregressive modeling for continuous interaction reasoning and participation decisions, rather than restricting it to instruction understanding for diffusion models. (2) Constructing chunk-specific conditions and synchronize tokens across Intent and Realization on a unified timeline. Module-specific attention masks enforce causal dependencies both within and across chunks, preventing access to future inputs. (3) Mitigating distribution shift in both modules through dual rollout distillation, training on autoregressively generated Intent tokens and synthesized audiovisual histories from Realization. Both modules continuously perceive real-time audio, video, and text, enabling full-duplex interaction with spontaneous conversations and interruptions. Beyond conversation, users can share real objects, reshape virtual scenes, guide assistants, or play audiovisual games without mouse or keyboard controls. The release of Duo v1 makes our first step, with the next version coming soon. We look forward to broader exploration of this emerging field.",
      "upvotes": 37,
      "github_stars": 27,
      "github_repo": "https://github.com/inclusionAI/Duo",
      "project_page": "https://duo-v1.github.io/",
      "comments": 1,
      "org": "inclusionAI",
      "url": "https://huggingface.co/papers/2611.15131",
      "arxiv_url": "https://arxiv.org/abs/2611.15131",
      "title_ja": "Duo：全二重対話のための双方向世界モデル",
      "summary_ja": "視聴覚情報の知覚と意思決定、行動生成を統合し、ユーザーとリアルタイムでやり取りできる全二重インタラクションを実現。"
    },
    {
      "id": "2610.42148",
      "title": "Flide: Accelerating Decision Inference with Exact State Forking",
      "abstract": "Decision models such as Jev have emerged as a highly promising paradigm for LLM agent systems, providing lightweight and reliable categorical reasoning for rapid System One execution. However, existing generation-oriented inference engines fail to support these workloads effectively, suffering from severe prefix recomputation overheads or distorted output probabilities. To address this challenge, we propose Flide, an efficient and exact inference engine that decouples the logical tree structure of a decision request from its physical execution within a single flattened token stream. Through ForkAttention, Flide navigates request dependencies using GPU-resident indices across both standard attention and recurrent Gated DeltaNet layers, guaranteeing in exact arithmetic that every query branch evaluates identically to an isolated forward pass. By expressing branch topologies directly in GPU-resident metadata, Flide accommodates diverse request mixtures with a compact set of pre-recorded execution graphs while enabling expanding agent histories to resume from checkpoints saved in earlier passes. Extensive evaluations on public hybrid and decision models demonstrate that Flide answers queries up to 9.5 times faster than vLLM and SGLang while staying closest to a float32 reference in total variation distance. By unifying physical execution throughput with mathematical exactness, Flide establishes a principled foundation for scalable, latency-critical decision intelligence in agent systems.",
      "upvotes": 36,
      "github_stars": 486,
      "github_repo": "https://github.com/OmniJev/Flide",
      "project_page": "https://flide.org/",
      "comments": 6,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.42148",
      "arxiv_url": "https://arxiv.org/abs/2610.42148",
      "title_ja": "Flide：正確な状態分岐による意思決定推論の加速",
      "summary_ja": "論理的な木構造と物理的な実行を分離する新しい推論エンジンにより、プレフィックス再計算なしで高速な意思決定を実現。"
    },
    {
      "id": "2611.13410",
      "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
      "abstract": "Low-bit quantization reduces the inference cost of LLM agents but can compromise task success. Examining failed rollouts, we find that quantized agents overlook task requirements or environmental conditions, producing environment transitions that diverge from successful full-precision references. Correcting these behavioral divergences remains difficult: offline data may miss the student's failure contexts, while its own rollouts may provide few correct responses in those contexts. We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution. This closed-loop teacher steering produces locally verified behavioral corrections. We internalize these corrections by training the student without guidance to match the steered student's predictions at corrected turns and the full-precision teacher's at other turns, enabling unassisted inference. Across five agentic benchmarks and three models, SteerDistill exceeds the strongest quantized baseline by 1.67--2.18 points in average score under W4A16 and stays within one point of BF16. On τ^2-Bench, it outperforms QeRL by 1.84 percentage points in success rate using 67% fewer training GPU hours and produces shorter successful trajectories than the quantized baselines.",
      "upvotes": 35,
      "github_stars": 10,
      "github_repo": "https://github.com/air-embodied-brain/SteerDistill",
      "project_page": "https://air-embodied-brain.github.io/SteerDistill",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.13410",
      "arxiv_url": "https://arxiv.org/abs/2611.13410",
      "title_ja": "SteerDistill：閉ループ教師誘導によるLLMエージェントの量子化",
      "summary_ja": "教師モデルが学生モデルの失敗を修正するように誘導し、量子化によるエージェントの行動のズレを効果的に抑制。"
    },
    {
      "id": "2611.12426",
      "title": "dNaViT: Discrete Codes are General-Purpose Visual Representations",
      "abstract": "Discrete autoregressive modeling, notably through next-token prediction, has become a cornerstone of modern language models. Extending this paradigm to vision allows visual and language models to converge on a unified framework, thereby fostering shared methodology and infrastructure. This work investigates a central question: how far can a finite discrete vocabulary go in representing the richness of the visual world? We present dNaViT, a Discrete Native-resolution Vision Transformer that produces discrete visual primitives analogous to language tokens. Built upon a frozen pretrained encoder, dNaViT applies lightweight residual modulation with a dual-branch objective to inject reconstruction-aware cues into semantic features. By leveraging grouped product quantization, it scales discrete capacity without inflating spatial sequence lengths, while a balanced training recipe maintains both semantic and pixel-level information. Consequently, dNaViT functions as a versatile discrete visual tokenizer, enabling unified encoding across downstream tasks alongside high-fidelity image decoding. Extensive evaluations show that dNaViT matches or exceeds task-specific baselines across 12 visual understanding benchmarks, 4 generation benchmarks, and an image editing benchmark. These findings demonstrate that a compact discrete vocabulary can serve as a universal visual currency and unlock the full potential of fully unified, native multimodal methodology.",
      "upvotes": 34,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lixiaotong97.github.io/dNaViT/",
      "comments": 3,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2611.12426",
      "arxiv_url": "https://arxiv.org/abs/2611.12426",
      "title_ja": "dNaViT：汎用的な視覚表現としての離散コード",
      "summary_ja": "視覚情報を言語トークンのような離散的なプリミティブとして扱い、統一的な枠組みで高品質な画像再構成と生成を実現。"
    },
    {
      "id": "2611.06808",
      "title": "LLMs Don't Know What They Know: Benchmarking Temporal Self-Knowledge for Financial Backtesting",
      "abstract": "Financial backtests of large language models (LLMs) are meaningful only if the model did not already know the outcomes it is asked to predict. Practitioners guard against this by trusting a vendor's stated knowledge cutoff, by asking the model what it knows, or by instructing it to answer as of a past date. To verify whether any of these safeguards can be trusted, we introduce FinDendro, a benchmark of 2,226 dated U.S. facts from 1999 to 2026, covering monthly macroeconomic series, month-end stock prices and Federal Reserve decisions. Each fact yields four prompts: a value question, Recall and Predict questions that pair each candidate value with a claim of knowing or guessing without a declared date, and a Predict question with a historical declared date. Controls for persistence and dominant outcomes keep chance accuracy near 0.27. Results show that for most frontier models, self-reports understate knowledge. GPT-5 answers 76% of controlled facts correctly but claims to know 38%, and answers 61% of the facts it says it does not know. Knowledge claims can persist beyond the measured knowledge boundary, by up to seven quarters, and a declared date removes most of the claims of prior knowledge while leaving accuracy unchanged. Backtests inside a model's training window therefore cannot be certified leak-free by self-report, instruction or stated cutoff. These findings motivate behavioral measurement of temporal knowledge boundaries, and FinDendro provides a benchmark and procedure for selecting backtest periods based on demonstrated factual knowledge.",
      "upvotes": 34,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://huggingface.co/spaces/TheFinAI/FinDendro",
      "comments": 3,
      "org": "The Fin AI",
      "url": "https://huggingface.co/papers/2611.06808",
      "arxiv_url": "https://arxiv.org/abs/2611.06808",
      "title_ja": "LLMは自らの知識を知っているか：金融バックテストの自己知識検証",
      "summary_ja": "LLMが過去の金融情報を事前に知っているかを測定するベンチマークにより、日付指定などの知識遮断策の有効性を検証。"
    },
    {
      "id": "2611.11558",
      "title": "InfraRSI: Harnessing Recursive Self-Improvement for Training Infrastructure",
      "abstract": "While Recursive Self-Improvement (RSI) accelerates isolated algorithm and kernel synthesis, distributed LLM training depends on tightly coupled launch settings, operator kernels, and communication schedules, where single edits often hit out-of-memory (OOM) boundaries, compiler conflicts, measurement jitter, or silent numerical drift. We present InfraRSI, the agentic harness that turns open-ended human commands into verified training optimizations via a five-stage workflow: init locks editable scope and a fixed task contract over workload, loss, and timing invariants to prevent reward hacking, doctor profiles baseline phases and calibrates cluster noise, run co-optimizes launch knobs and code patches before re-verifying top candidates against the baseline and logging findings to a cross-hardware experience bank, and report and apply audit source paths, track failed-trial costs, and commit promoted changes. Rather than stepping greedily from a single incumbent, InfraRSI initializes from diverse experience-seeded configurations and fits global execution-time and censored peak-memory models across all trials, including OOMs. Using these models, it prices per-setting memory costs, revises miscalibrated LLM priors from live runs, and pairs memory-hungry optimizations with memory savers and verified code patches. Across four single- and multi-node dense and Mixture-of-Experts (MoE) LLM workloads, InfraRSI achieves a speedup of up to 2.75times and lifts mean Model FLOPs Utilization (MFU) from 17.4% to 30.0%, outperforming existing tuners and coding agents while transferring experience across GPUs. As it improves training infrastructure efficiency, InfraRSI forms a two-level Recursive Self-Improvement loop---revising priors online within runs and distilling experience across clusters---to push foundation model scaling.",
      "upvotes": 33,
      "github_stars": 68,
      "github_repo": "https://github.com/TokenRhythm/InfraRSI",
      "project_page": "https://infrarsi.github.io/",
      "comments": 6,
      "org": "TokenRhythm",
      "url": "https://huggingface.co/papers/2611.11558",
      "arxiv_url": "https://arxiv.org/abs/2611.11558",
      "title_ja": "InfraRSI：学習インフラのための再帰的自己改善",
      "summary_ja": "分散学習における複雑な設定やコードをエージェントが自動で最適化・検証し、効率的な学習環境を構築する仕組み。"
    },
    {
      "id": "2611.08452",
      "title": "ReproBridge: Building Reproducibility into ML Research Artifacts",
      "abstract": "Reproducing machine learning experiments requires reconstructing procedures from information scattered across papers, released code, and supporting artifacts. For coding agents, reproduction success can therefore depend on their ability to fill in missing details, rather than on the released artifacts alone. We ask whether preserving recovered procedures and decisions improves subsequent independent reproduction. We define a standardized artifact design comprising a refined codebase, environment setup, experiment launchers, and a reproduction guide, and introduce ReproBridge, an agent workflow for constructing these refined reproducible artifacts. ReproBridge-Bench provides 1,029 tasks from 387 experiments across 36 papers, anchored by five human-verified reference scores per task. Agents attempt tasks in fresh sessions with raw code or refined artifacts; a separate Auditor checks execution evidence. Across four evaluated models, refined artifacts raise mean reproduction success from 76.4% to 92.6% and reduce downstream API spending by 19.7% on average. The cross-model success-rate spread narrows from 21.6 to 3.9 percentage points, with all four models achieving mean success rates above 90%. Removing any component reduces success in the ablation study, with the largest losses from code and environment removal. These results suggest that preserving execution knowledge helps even models with lower raw-code success reproduce experiments more reliably and at lower API cost.",
      "upvotes": 32,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://wyyyb.github.io/reprobridge_website/",
      "comments": 3,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.08452",
      "arxiv_url": "https://arxiv.org/abs/2611.08452",
      "title_ja": "ReproBridge：機械学習研究成果の再現性構築",
      "summary_ja": "論文等から不足情報を補完し、実行ガイドを含む再現可能な成果物を自動生成するエージェントワークフローを提案。"
    },
    {
      "id": "2611.06856",
      "title": "LongBanana: An Expert-Verified Benchmark for Long-Context Multi-Reference Image Synthesis",
      "abstract": "We introduce LongBanana, to our knowledge the first expert-designed and expert-verified benchmark for long-context multi-reference image synthesis in the age of agent-driven image generation. The task requires retrieving dispersed visual evidence, rejecting distractors, binding entities and relations, and composing one coherent final image from multiple references. LongBanana contains 90 carefully designed tasks organized by a 3-by-3 taxonomy; each task includes about 32 reference images, 20 constraints, and 50 evaluation items, yielding 4,670 expert-specified atomic evaluation items in total. Its graph-grounded evaluation design instantiates each task with reference images and an entity-relation graph, then converts node, edge, and whole-graph obligations into checklist items for Content Fidelity, Relational Binding, and Global Constraint Satisfaction. Reviewed expert labels include a 15% double-labeled subset with 89.4% exact agreement and 0.83 quadratic weighted kappa. We further introduce LongBanana-Gen, an agent-harness framework for long-horizon image generation; experiments show that minimal agent harnesses improve over direct generation, while a ReAct-Plan-Exec-Reflect (RPR) workflow yields harness-dependent gains by strengthening evidence grounding and repair. Together, LongBanana provides an auditable testbed for measuring dense visual evidence use and a shared target for developing stronger agent-driven image-generation systems. Code and data are available at the project page: https://long-banana.com/.",
      "upvotes": 32,
      "github_stars": 3,
      "github_repo": "https://github.com/KlingAIResearch/LongBanana",
      "project_page": "https://klingairesearch.github.io/LongBanana/",
      "comments": 3,
      "org": "Kolors Team, Kuaishou Technology",
      "url": "https://huggingface.co/papers/2611.06856",
      "arxiv_url": "https://arxiv.org/abs/2611.06856",
      "title_ja": "LongBanana：長文コンテキスト多参照画像生成ベンチマーク",
      "summary_ja": "多数の参照画像と制約から矛盾のない一枚の画像を生成する能力を、専門家が詳細に評価する高難度ベンチマーク。"
    },
    {
      "id": "2610.39671",
      "title": "Incentivizing Self-Learning in Large Language Models via Reinforcement Learning",
      "abstract": "Large language models (LLMs) draw on parametric knowledge and retrieval-augmented generation (RAG) to solve knowledge-intensive tasks. Yet problem solving in unfamiliar domains calls for tightly coupled knowledge acquisition and reasoning, beyond factual retrieval and aggregation or learning solely from a preassembled context. We study self-learning -- autonomously retrieving, studying, and applying knowledge from long-form reference materials on the fly. To investigate this capability, we formulate a textbook-based mathematical problem-solving task. LLMs must navigate textbook exposition, learn and apply relevant principles, and construct proofs for exercises, with reference solutions withheld. We introduce a BookNavigator interface to support this human-inspired study process and incentivize self-learning through reinforcement learning (RL) with fine-grained rewards. Experiments show that our method improves performance across in-domain and out-of-domain textbooks and subjects, raising Intern-S2-Preview-35B's overall proof accuracy from 51.5% to 79.5% and outperforming RL-trained textbook-free and fixed-retrieval baselines. These gains extend to complex long-context benchmarks involving different task types, with improvements over the base model of 1.7 and 2.3 percentage points on BrowseComp-Plus and CL-bench, respectively. Together, these findings suggest that RL can foster a domain-agnostic self-learning strategy, highlighting the potential of self-learning from long-form corpora to strengthen broader problem-solving capabilities on complex, long-context tasks.",
      "upvotes": 31,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 8,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.39671",
      "arxiv_url": "https://arxiv.org/abs/2610.39671",
      "title_ja": "強化学習によるLLMの自律学習の促進",
      "summary_ja": "外部の長い参考資料を自ら読み解き、未知の数学問題の解法や証明を構築する「自律学習」の能力を強化学習で研究。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Code Lets Developers Theme Their AI Coding Desktop",
      "summary": "Anthropic rolled out custom theming for Claude Code in the desktop app, letting you restyle colors and drop in animated backdrops through mods.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-code-lets-developers-theme-their-ai-coding-desktop",
      "published": "2026-11-14T08:59:59+09:00",
      "title_ja": "AnthropicのClaude Code、AIコーディング用デスクトップのテーマ設定が可能に",
      "summary_ja": "デスクトップ版Claude Codeで色の変更やアニメーション背景の設定などカスタムテーマ機能が追加。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Upgrades Claude Code Projects to Run Parallel AI Workers Hands-Free",
      "summary": "Anthropic ships a proactive coordinator, shareable read-only threads, reminders, and /btw and /fork slash commands to Claude Code Projects.",
      "url": "https://alphasignal.ai/news/anthropic-upgrades-claude-code-projects-to-run-parallel-ai-workers-hands-free",
      "published": "2026-11-14T07:51:01+09:00",
      "title_ja": "AnthropicがClaude Code Projectsをアップグレード、AIワーカーの並列実行が可能に",
      "summary_ja": "調整機能や共有用スレッド、新たなスラッシュコマンド等を搭載し、ハンズフリーでの並列処理を支援。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の進展",
      "summary_ja": "Antigravityのチームワーク機能を活用し、教育分野におけるイノベーションを推進する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build a Robot Pick-and-Place Simulation with SimReady Assets",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place",
      "published": "2026-11-14T03:00:39+09:00",
      "title_ja": "SimReadyアセットを用いたロボットのピックアンドプレース・シミュレーションの構築",
      "summary_ja": "SimReadyアセットを活用して、ロボットが物を掴んで配置するシミュレーション環境を構築。"
    },
    {
      "lab": "Hugging Face",
      "title": "XYBench: Helping with the problem behind the question",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/xybench",
      "published": "2026-11-14T02:02:35+09:00",
      "title_ja": "XYBench：質問の背後にある問題解決を支援",
      "summary_ja": "質問の根本にある課題を特定し、解決をサポートするためのベンチマーク。 "
    },
    {
      "lab": "OpenAI",
      "title": "Introducing ChatGPT Wallet",
      "summary": "Introducing ChatGPT Wallet, a secure way for agents in ChatGPT Work, Codex, and dots to complete purchases with user approval and existing card protections.",
      "url": "https://openai.com/index/introducing-chatgpt-wallet",
      "published": "2026-11-14T00:00:00+09:00",
      "title_ja": "ChatGPT Walletの導入",
      "summary_ja": "ChatGPT内のエージェントが、ユーザーの承認や既存のカード保護のもとで安全に商品を購入できる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "DeepSeek Packs Search, Files, and Safety Into deepseek-flash at 88% Below GPT-4o",
      "summary": "DeepSeek ported the full App stack (search, file parsing, URL reading, safety, OCR, ASR, TTS) into its API with server-side tool handling.",
      "url": "https://alphasignal.ai/news/deepseek-packs-search-files-and-safety-into-deepseek-flash-at-88-below-gpt-4o",
      "published": "2026-11-13T23:24:44+09:00",
      "title_ja": "DeepSeekが検索・ファイル解析・安全機能を統合したdeepseek-flashを公開",
      "summary_ja": "OCRや音声認識等の機能を統合し、サーバー側ツール処理によりGPT-4oより88%安価に提供。"
    },
    {
      "lab": "Hugging Face",
      "title": "llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem",
      "summary": "",
      "url": "https://huggingface.co/blog/ggml-org/llama-cpp-v1",
      "published": "2026-11-13T23:05:22+09:00",
      "title_ja": "llama.cpp v1.0.0：ローカルAIエコシステムの強力な基盤",
      "summary_ja": "ローカル環境でのAI活用において、より強固な基盤となるllama.cppのバージョン1.0.0が登場。"
    },
    {
      "lab": "AlphaSignal",
      "title": "UnvibeCode Turns Messy AI-Generated Codebases Into Navigable Business Maps",
      "summary": "A trending open-source tool reverse-engineers messy repositories into business workflows, connected code maps, and evidence-backed risk findings.",
      "url": "https://alphasignal.ai/news/unvibecode-turns-messy-ai-generated-codebases-into-navigable-business-maps",
      "published": "2026-11-13T23:00:55+09:00",
      "title_ja": "UnvibeCodeが乱雑なAI生成コードをビジネスワークフローへ変換",
      "summary_ja": "煩雑なリポジトリをリバースエンジニアリングし、業務フロー図やリスク発見に変換するオープンソースツール。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Claude Code Gets a Risk-Gated Stock Trading Toolkit With 4,000 Stars",
      "summary": "A Claude Code skill pack turns market review, risk gates, position sizing, and trade journaling into reproducible workflows for individual investors.",
      "url": "https://alphasignal.ai/news/claude-code-gets-a-risk-gated-stock-trading-toolkit-with-4-000-stars",
      "published": "2026-11-13T21:07:45+09:00",
      "title_ja": "Claude Codeに4000スター超の株式取引ツールキットが登場",
      "summary_ja": "市場分析やリスク管理、ポジションサイジング等を再現可能なワークフローにする投資家用スキルパック。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Cactus Compute's Mirage Squeezes Six Vision Tasks Into a 22 MB Phone Model",
      "summary": "Cactus Compute's Mirage packs scene description, detection, OCR, segmentation and structured extraction into a 22 MB model that runs on-device in 74 ms.",
      "url": "https://alphasignal.ai/news/cactus-compute-s-mirage-squeezes-six-vision-tasks-into-a-22-mb-phone-model",
      "published": "2026-11-13T18:05:11+09:00",
      "title_ja": "Cactus ComputeのMirage、6つの視覚タスクを22MBのモデルに凝縮",
      "summary_ja": "シーン記述やOCR、セグメンテーション等の機能を、スマホ上で74msで動作する極小モデルに集約。"
    },
    {
      "lab": "OpenAI",
      "title": "Shield helps technicians hand off legacy portal work with OpenAI",
      "summary": "Shield uses OpenAI to help IT technicians hand off work in legacy portals. Its Forge agents navigate systems so technicians can focus on issues needing their judgment.",
      "url": "https://openai.com/business/customer-stories/shield",
      "published": "2026-11-13T17:00:00+09:00",
      "title_ja": "ShieldがOpenAIを活用し、レガシーポータル業務の技術的な引き継ぎを支援",
      "summary_ja": "Forgeエージェントがレガシーシステムを操作し、技術者が判断に集中できるよう業務引き継ぎをサポート。"
    },
    {
      "lab": "OpenAI",
      "title": "How Amplitude ships product improvements in 1–2 days with OpenAI",
      "summary": "Built primarily on OpenAI models, Amplitude’s proactive product agent, Wave, identifies what to build, helps teams ship changes with coding agents, and measures the impact.",
      "url": "https://openai.com/business/customer-stories/amplitude",
      "published": "2026-11-13T05:00:00+09:00",
      "title_ja": "AmplitudeがOpenAIを活用し製品改善を1〜2日で出荷する方法",
      "summary_ja": "OpenAI搭載のエージェント「Wave」が、構築すべき機能の特定からコード作成、影響測定までを支援。"
    },
    {
      "lab": "Hugging Face",
      "title": "LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite",
      "published": "2026-11-13T04:07:35+09:00",
      "title_ja": "LLMネイティブなマークアップ言語「LLMON」がGranite 4.1に搭載",
      "summary_ja": "3Bおよび8BモデルのGranite 4.1で、LLMに最適化されたマークアップ言語LLMONが利用可能。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの紹介",
      "summary_ja": "GoogleのAIモデルGemini 4 Hydrogenの導入について。"
    },
    {
      "lab": "OpenAI",
      "title": "Gondola doubles revenue as its team builds more with Codex",
      "summary": "Gondola helps creatives get credit and get hired, with Codex raising its lead engineer’s output by 50% and ChatGPT simplifying daily work.",
      "url": "https://openai.com/business/customer-stories/gondola",
      "published": "2026-11-12T21:00:00+09:00",
      "title_ja": "GondolaがCodex活用によりエンジニアの生産性を高め収益を倍増",
      "summary_ja": "Codexの導入により主任エンジニアのアウトプットが50%向上し、クリエイターの雇用支援が加速。"
    },
    {
      "lab": "OpenAI",
      "title": "Holiday Extras is rethinking what it can build with Codex",
      "summary": "With Codex, Holiday Extras is turning customer expertise into better apps, higher booking conversion and new possibilities for growth.",
      "url": "https://openai.com/business/customer-stories/holidays-extras-codex",
      "published": "2026-11-12T18:30:00+09:00",
      "title_ja": "Holiday ExtrasがCodexで構築の可能性を再考",
      "summary_ja": "Codexを活用して顧客の専門知識をアプリに反映し、予約率の向上や新たな成長機会を創出。"
    },
    {
      "lab": "OpenAI",
      "title": "Supporting research on AI and children’s safety",
      "summary": "OpenAI commits $2 million to research on AI and children’s safety. The work supports shared tools to measure risks and opportunities for young people.",
      "url": "https://openai.com/index/children-first-declaration",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "AIと子供の安全に関する研究を支援",
      "summary_ja": "OpenAIが200万ドルを投じ、子供にとってのリスクと機会を測定するための共有ツールの開発を支援。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルのアライメントにおける理論的限界",
      "summary_ja": "KLダイバージェンス制約下での報酬改善の限界を、情報理論的な観点から解明する研究。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Definitive Fine-Tuning Guide for 3D Generation Models",
      "summary": "",
      "url": "https://huggingface.co/blog/3d-lora-finetuning",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "3D生成モデルの決定版ファインチューニング・ガイド",
      "summary_ja": "3D生成モデルを特定の用途に合わせて微調整（ファインチューニング）するための包括的な解説。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブル端末を用いたCKMリスク評価とパーソナライズ指導",
      "summary_ja": "ウェアラブル技術を活用し、心血管・腎臓・代謝のリスク分析に基づいた個別コーチングを実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：疾患理解のため細胞によるDNA解読を解明",
      "summary_ja": "DNA配列とその変異が特定の細胞タイプや疾患にどのような影響を与えるかを予測する技術。"
    },
    {
      "lab": "Hugging Face",
      "title": "BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model",
      "summary": "",
      "url": "https://huggingface.co/blog/qvac/botpsy",
      "published": "2026-11-11T14:01:16+09:00",
      "title_ja": "BotPsy：10億パラメータ未満の言語モデルによるオンデバイス個人秘書",
      "summary_ja": "デバイス上で動作する軽量なエージェント型言語モデルを用いた、個人向けアシスタントの構築。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonの提供開始",
      "summary_ja": "GoogleのAIモデルGemini 4 Carbonが利用可能になった。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの導入：複雑なソフトウェア検証の突破口",
      "summary_ja": "AlphaProof CodeがSignalの暗号化検証のために300万行の証明コードをLeanで記述。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Opening the datasets behind our AI weather models",
      "summary": "Foundational precipitation and geostationary satellite datasets to observe the planet clearly.",
      "url": "https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/",
      "published": "2026-11-10T20:13:04+09:00",
      "title_ja": "AI気象モデルの基盤となるデータセットを公開",
      "summary_ja": "地球を鮮明に観測するための、降水量および静止気象衛星の基礎データセットをオープン化。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者の評価：パーソナライズされた執筆スタイル評価におけるLLM Judgeの調査",
      "summary_ja": "ユーザー好みの文体（陽気な表現など）をAIが正しく評価できているかを検証する研究。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲーティングの重要性：状態空間モデルにおける記憶とインコンテキスト学習",
      "summary_ja": "状態空間モデル（SSM）がTransformerに及ばない理由を、ゲート機構の役割から解明。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的なロングコンテキスト検索のためのWeighted State Souping",
      "summary_ja": "状態空間モデルにおいて、複数の状態エンコーディングを再構成して長い文脈を扱う際の手法の改善。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorerで世界の言語を探索する",
      "summary_ja": "自然言語処理技術を用いて、世界の多様な言語を調査・探索するプロジェクト。"
    }
  ]
};
