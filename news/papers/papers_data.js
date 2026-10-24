window.papersData = {
  "updated_at": "2026-10-24 09:22 JST",
  "arxiv": [
    {
      "id": "2610.30920",
      "title": "DConstrain: Compiling Context-Parameterized Transitions for Diffusion Language Model Constrained Decoding",
      "url": "https://arxiv.org/abs/2610.30920",
      "pdf": "https://arxiv.org/pdf/2610.30920",
      "authors": [
        "Shidong Cao",
        "Jing Ma",
        "Wenhao Chai",
        "Yuchen Tian",
        "Lun Du",
        "Da Zheng"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 6 figures, 12 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "DConstrain compiles 100% of BFCL schemas under arbitrary property orders",
      "signals": [],
      "headline": "拡散言語モデルの制約付きデコーディングを高速化するコンパイルフレームワークDConstrain",
      "what": "拡散言語モデル（DLM）向けに、スキーマをコンテキストパラメータ化された遷移プログラムとしてコンパイルする手法です。実行時の状態管理をシンボリックに処理し、トークンの影響に応じたグルーピングを行うことで、モデルのフォワードパスと並行して効率的なグラフ構築を可能にします。",
      "enables": "任意のプロパティ順序において、BFCLベンチマークのデコーディング遅延を6.65倍から46.26倍削減し、DiffusionGemmaの精度を37.27%から81.56%へと大幅に向上させました。",
      "why_it_matters": "DLMの並列デコーディングと複雑な文法制約を両立させる際の計算コストを劇的に抑え、構造化出力の実行可能性を実務レベルに引き上げました。",
      "tags": [
        "拡散モデル",
        "制約付き生成",
        "LLM"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30951",
      "title": "OpenAttention: One Percent Is Enough with Tail Proxies",
      "url": "https://arxiv.org/abs/2610.30951",
      "pdf": "https://arxiv.org/pdf/2610.30951",
      "authors": [
        "Hyunwoo Yu",
        "Jongbeom Lee",
        "Hyunbin Kim",
        "Sungjun Park",
        "Jaemin Choi",
        "Jincheol Yang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages. Project page: https://hyunwoo137.github.io/OpenAttention/ ; Code: https://github.com/hyunwoo137/OpenAttention",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "OpenAttention retains 99% of dense accuracy at a 1% read.",
      "signals": [],
      "headline": "わずか1%のKVキャッシュ読み込みで高精度なAttentionを実現するOpenAttention",
      "what": "Sparse Attentionにおいて、読み込まれない残りのデータ（Tail）を単一の代表トークン（Tail Proxy）に集約して計算に含める手法です。Query-Geometry Clustering（QGC）を用いた効率的なキーの圧縮と、推定誤差に基づくErrorGateによるクラスタ選択を組み合わせたパイプラインを構成しています。",
      "enables": "Llama-3.1-8Bを用いたRULER-32Kにおいて、1%の読み込み率でDense Attentionの99%の精度を維持し、推論ステージを10倍高速化しました。",
      "why_it_matters": "従来手法が5%以下の読み込み率で精度崩壊していた課題を解決し、非常に低いリソースで長いコンテキストを扱うための新たな理論的基盤と実装を提供しています。",
      "tags": [
        "LLM",
        "Sparse Attention",
        "推論加速"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.29102",
      "title": "Diffusion Posterior Sampling with Uncertain Forward Models",
      "url": "https://arxiv.org/abs/2610.29102",
      "pdf": "https://arxiv.org/pdf/2610.29102",
      "authors": [
        "Wentao Shangguan",
        "Vivek K Goyal"
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
      "star_quote": "introduce an uncertainty-aware likelihood (UAL), a Gaussian approximation to the marginal likelihood",
      "signals": [],
      "headline": "不確実な順方向モデルに対応する不確実性考慮型尤度「UAL」による拡散事後サンプリングの改善",
      "what": "ボケカーネルや検出器の応答といった順方向モデル（Forward Model）のパラメータに含まれる不確実性を、周辺尤度のガウス近似を通じてモデリングするUncertainty-Aware Likelihood (UAL)を提案しています。このUALは、事前学習済みの拡散モデルやサンプリングスケジュールを変更することなく、既存のサンプラーに統合可能です。",
      "enables": "ガウスデブラーリングにおいて幾何平均MSEを9%から20%削減し、動作デブラーリングではBlindDPSなどの既存手法を6.2dBから6.4dB上回るアンサンブル平均PSNRを達成しました。パラメータの誤差が再構成結果に吸収される問題を抑制し、逆問題の解法精度を向上させます。",
      "why_it_matters": "従来の拡散事後サンプリングは順方向モデルが正確であることを前提としていましたが、実世界の不完全な観測条件下でも高精度な信号再構成を可能にする実用的なフレームワークを提供します。",
      "tags": [
        "拡散モデル",
        "逆問題",
        "画像再構成"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.28623",
      "title": "Planning under Noise with Neural Operators",
      "url": "https://arxiv.org/abs/2610.28623",
      "pdf": "https://arxiv.org/pdf/2610.28623",
      "authors": [
        "Michael Chen",
        "Hong Chul Nam",
        "Xi Deng",
        "Anima Anandkumar"
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
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We introduce Planning Under Noise (PUN), a neural operator that learns noise-aware value fields for planning in unseen geometries.",
      "signals": [],
      "headline": "不確実な環境下での経路計画を高速化するニューラルオペレータ「PUN」",
      "what": "制御ノイズがある環境での確率的最適制御において、境界条件にNeumann条件とDirichlet条件を組み合わせたPDE（偏微分方程式）を解く手法です。モンテカルロ・ソルバーの結果を学習することで、未知の幾何形状に対する価値場（Value Field）を推定します。",
      "enables": "4Dの再計画ベンチマークにおいて、他のプランナーより3.29倍から32.15倍高速でありながら、ノイズの多い設定で10.7%から60.6%の相対的な成功率向上を達成しました。",
      "why_it_matters": "高次元かつノイズの多い実世界でのナビゲーションにおいて、膨大なサンプリングを必要とする従来の確率的計画法の計算コストを大幅に削減できます。",
      "tags": [
        "ロボティクス",
        "経路計画",
        "ニューラルオペレータ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28626",
      "title": "UniWALM: Unified World Action Language Model for Embodied Robot Control",
      "url": "https://arxiv.org/abs/2610.28626",
      "pdf": "https://arxiv.org/pdf/2610.28626",
      "authors": [
        "Rahul Sajnani",
        "Diego Romeres",
        "Mingyuan Zhang",
        "Kai Gao",
        "Carl Qi",
        "Baichuan Huang"
      ],
      "categories": [
        "cs.RO",
        "cs.AI",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint: 25 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "UniWALM, a unified world-action-language model that learns video, action, and language in a single shared representation",
      "signals": [],
      "headline": "動画・行動・言語を共通表現で統合学習するロボット制御モデル「UniWALM」",
      "what": "複数のモダリティを同期的にデノイジングする単一のバックボーンを用いたモデルです。言語を「メモリ」として自己ループさせることで、外部のプランナーなしで長期的な依存関係を伴うタスクを処理します。",
      "enables": "実世界のアイテム探索タスクにおいて、テキストメモリの生成により成功率を11.1%から61.1%へと大幅に向上させました。これは既存のVLA（Vision-Language-Action）モデルを凌駕する数値です。",
      "why_it_matters": "推論、視覚、行動を別々のコンポーネントとして組み合わせるのではなく、単一のトランスフォーマー内で統合的に扱うことで、記憶が必要な複雑な操作タスクの効率を高めています。",
      "tags": [
        "ロボット制御",
        "VLA",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.30206",
      "title": "MoEZip: Routing-Aware KV Cache Compression for Sparse Mixture-of-Experts LLMs",
      "url": "https://arxiv.org/abs/2610.30206",
      "pdf": "https://arxiv.org/pdf/2610.30206",
      "authors": [
        "Minsang Kim",
        "Seungjun Baek"
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
      "comment": "Annual Conference on Neural Information Processing Systems (NeurIPS) 2026, Accepted",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "MoEZip improves over the SoTA baseline by +24 and +20 points on average on LongBench and RULER",
      "signals": [],
      "headline": "MoEモデル特有のExpert選択への影響を考慮したKVキャッシュ圧縮手法MoEZipの提案",
      "what": "Sparse Mixture-of-Experts (MoE)において、KVキャッシュの削減がExpertのルーティング選択に与える影響を評価し、Fisher情報量行列に基づいた重要度スコアリングを行う手法です。Attentionの重みとルーティングの感度を組み合わせた、MoEアーキテクチャに最適化されたコンテキスト保持戦略を採用しています。",
      "enables": "10%という極端なキャッシュ保持率において、LongBenchとRULERベンチマークで従来手法を平均で24点および20点上回り、スコアをそれぞれ2.3倍と4.9倍に改善しました。",
      "why_it_matters": "従来のLLM圧縮手法では見落とされていた、MoE特有の「キャッシュ削減による推論中のルーティング変化」という品質劣化要因を解決し、長文コンテキスト推論の効率化を実現しています。",
      "tags": [
        "LLM",
        "MoE",
        "KVキャッシュ圧縮"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.31108",
      "title": "DRAFT: Decoding and Reconstructing 3D Room Layouts from fMRI and Camera Trajectories",
      "url": "https://arxiv.org/abs/2610.31108",
      "pdf": "https://arxiv.org/pdf/2610.31108",
      "authors": [
        "Chi-Wei Lee",
        "An-Kai Chen",
        "Cheng-Han Chiang",
        "Yi-Chun Chang",
        "Po-Chih Kuo"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "42 pages, 7 figures, 18 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "reconstructing 3D layouts of held-out scenes using only the known camera trajectories and the fMRI signals",
      "signals": [],
      "headline": "fMRI信号とカメラの軌跡のみから未知の部屋の3Dレイアウトを再構成するDRAFT",
      "what": "視覚的なフレーム情報を使わず、移動中のカメラ軌跡と初期視覚野のfMRI信号のみから室内の3D幾何形状を復元するデコーダーです。急速な視覚変化と低速なfMRI信号のタイムラグを解消するため、ニューラルコードとカメラ移動由来の幾何情報を融合するアプローチをとっています。",
      "enables": "未知の10のシーンにおいて、レイアウトの相関係数（layout r）0.480を達成し、既存の7つのfMRIデコーダーやカメラパスのみの手法を上回る精度を実現しました。",
      "why_it_matters": "人間が見ている空間のメトリックな幾何情報を脳活動から復元する試みであり、視覚再構成技術を静止画から3D空間へと拡張する第一歩となります。",
      "tags": [
        "fMRI",
        "3D再構成",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.31544",
      "title": "Same Luck, Different Choice: Twin-World Credit Assignment for Agentic Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.31544",
      "pdf": "https://arxiv.org/pdf/2610.31544",
      "authors": [
        "Zeropy Surio",
        "Tobias Engel",
        "Mei-Lin Chou",
        "Anika Raman",
        "Samuel Okafor"
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
      "star_quote": "rolls out counterfactual twins that inherit the factual episode's downstream noise",
      "signals": [],
      "headline": "ツインワールドの対照試行により強化学習の報酬割当を効率化するTWICE",
      "what": "Agentic RLにおいて、同じサンプリングノイズを保持したまま異なる行動を選択する「ツインワールド」を構築し、その結果の差分からアドバンテージを推定する手法です。Gumbelノイズをターンごとに固定することで、決定論的な環境下でのカウンターファクチュアルな評価を実現します。",
      "enables": "Qwen2.5-3B/7Bを用いた質問回答タスクでGRPOのスコアを最大5.3ポイント向上させ、VinePPOと比較して補助トークン数を68%削減することに成功しました。",
      "why_it_matters": "サンプリングノイズによる「運」の要素を排除して純粋な意思決定の寄与（クレジット）を評価できるため、高いサンプル効率での強化学習が可能になります。",
      "tags": [
        "強化学習",
        "LLM",
        "クレジット割り当て"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.28771",
      "title": "Motion Equivariant Convolutional LSTM: When Motion Becomes a Gauge Symmetry",
      "url": "https://arxiv.org/abs/2610.28771",
      "pdf": "https://arxiv.org/pdf/2610.28771",
      "authors": [
        "Vahid Hosseinzadeh",
        "T. Anderson Keller",
        "Michael Puthawala"
      ],
      "categories": [
        "cs.LG",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/VahidHosseinzadeh/MELSTM",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "motion becomes a gauge symmetry: a global symmetry made local in time.",
      "signals": [],
      "headline": "物体の動きをゲージ対称性として扱う動作等変性Convolutional LSTM「MELSTM」の開発",
      "what": "シーケンシャルデータ内の「動き」を、空間的な位置のみを変えるゲージ対称性（Gauge Symmetry）と定義し、速度を推定するゲージ場を組み込んだMELSTMを提案しています。Flow equivariantモデルの速度列挙アプローチを拡張し、時間とともに変化する速度の推定を可能にしています。",
      "enables": "従来のConvolutional LSTMやFlow equivariantモデルを上回る精度を実現し、未学習の動きに対しても高い汎化性能を示します。また、パラメータ数を維持したまま、Flow equivariantモデルと比較して状態量を大幅に削減することに成功しました。",
      "why_it_matters": "標準的なRNNでは入力の動きにメモリが追従できない課題がありましたが、この手法は物理的な対称性をアーキテクチャに組み込むことで、カメラのパンや物体の移動を含む動画像処理の効率を抜本的に向上させます。",
      "tags": [
        "コンピュータビジョン",
        "等変性ニューラルネットワーク",
        "動画予測"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.27078",
      "title": "LEAF: LUT-aware Efficient Attention on FPGAs",
      "url": "https://arxiv.org/abs/2610.27078",
      "pdf": "https://arxiv.org/pdf/2610.27078",
      "authors": [
        "Arianna Cox",
        "Chang Sun",
        "Lauri Laatu",
        "Benedikt Maier",
        "Aadeesh Sharma",
        "Leo Rozanov"
      ],
      "categories": [
        "cs.LG",
        "hep-ex"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted for the 9th Workshop on Machine Learning and the Physical Sciences (ML4PS 2026)",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "improves accuracy by 1.8 percentage points while using 2.9 times fewer LUTs than the previous state-of-the-art",
      "signals": [],
      "headline": "FPGAネイティブなLUTベース学習による超低遅延Transformer「LEAF」",
      "what": "FPGAのルックアップテーブル（LUT）を考慮した学習を行う、ナノ秒スケールの推論を実現するTransformer層およびLinformer層です。Attentionブロックの行列ベクトル演算を数式形式で残しつつ、射影層やFFN層をハードウェア親和性の高い形式に変換します。",
      "enables": "ジェットタギングのベンチマークにおいて、既存のサブマイクロ秒Transformerと比較してLUT使用量を2.9倍削減しながら、精度を1.8ポイント向上させました。64粒子のLinformer構成で35nsの推論速度を達成しています。",
      "why_it_matters": "CERNのようなリアルタイムシステムが要求するサブマイクロ秒の制約を満たしつつ、FPGAに収まるサイズで高い表現力を維持できるため、物理実験やエッジデバイスでのLLM応用を加速させます。",
      "tags": [
        "FPGA",
        "エッジ推論",
        "Transformer"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28555",
      "title": "Learning Computational Structure for Sample-Efficient Prediction",
      "url": "https://arxiv.org/abs/2610.28555",
      "pdf": "https://arxiv.org/pdf/2610.28555",
      "authors": [
        "Hangyu Zhou",
        "Constantine Dovrolis",
        "Stephen Mussmann"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "36 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "we introduce Learned Wiring (LeWi): each neuron has a learned low-dimensional embedding, only nearby neurons connect",
      "signals": [],
      "headline": "神経回路の空間組織に着想を得て結合と重みを同時学習する「Learned Wiring」",
      "what": "各ニューロンに低次元の埋め込みを学習させ、近傍のニューロン間のみを接続する「Learned Wiring (LeWi)」を提案しています。高次元データの統計的学習において、隠れた計算構造を効率的に捉えるための手法です。",
      "enables": "32種類の計算グラフを用いたベンチマークにおいて、密なネットワーク（Dense Network）と比較して学習曲線下面積を27%削減し、高いサンプル効率を実現しました。また、17のワールドモデル予測タスクのうち16でベースラインを上回っています。",
      "why_it_matters": "次元の呪いを克服するために疎な組成構造を利用しており、物理的な制御やナビゲーションなど、構造的な依存関係が重要なドメインでの効率的な学習に寄与します。",
      "tags": [
        "機械学習",
        "サンプル効率",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28586",
      "title": "Capable Teacher, Myopic Scorer: Reward-Free Teacher Repair for Agentic On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.28586",
      "pdf": "https://arxiv.org/pdf/2610.28586",
      "authors": [
        "Shu Zhao",
        "Tan Yu"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 5 figures, 13 tables. Project page: https://tree-shu-zhao.github.io/r2s/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "R2S outperforms three state-of-the-art agentic-OPD methods in all twelve teacher-student-environment cells, by 12.8 success points on average",
      "signals": [],
      "headline": "次トークンスコアの近視眼性を解消する蒸留手法「Rollout-to-Scorer Distillation」",
      "what": "エージェントのオンポリシー蒸留において、教師モデルが将来を予測せずに各トークンを評価してしまう「ロールアウト・スコアラー・ギャップ」を解消する手法です。不一致が生じる状態で教師による「やり直し」を行い、その結果に基づいて教師をファインチューニングします。",
      "enables": "3つの環境と複数のモデルを用いた評価において、既存の最先端（SOTA）手法を全ての条件で上回り、平均12.8ポイントの成功率向上を達成しました。報酬設計が困難なタスクでも動作します。",
      "why_it_matters": "教師モデルの評価と実際の行動の乖離を埋めることで、長期的な推論が必要なエージェントタスクにおいて学生モデルがより安定した行動を選択できるようになります。",
      "tags": [
        "LLMエージェント",
        "知識蒸留",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28610",
      "title": "InterWebCoder: Learning Interactive Webpage Generation from Executable Tests via Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.28610",
      "pdf": "https://arxiv.org/pdf/2610.28610",
      "authors": [
        "Jingyu Xiao",
        "Dasen Dai",
        "Yuxuan Wan",
        "Jen-tse Huang",
        "Yintong Huo",
        "Hongyu Zhang"
      ],
      "categories": [
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
        "sota"
      ],
      "star_quote": "InterWebCoder achieves final scores of 48.54 and 48.42 with a 9B backbone, outperforming 30B-level models and Gemini-3.7-Flash",
      "signals": [],
      "headline": "実行可能なテストを用いて対話型Webページ生成を強化する「InterWebCoder」",
      "what": "実世界のインタラクション軌跡を記録し、自己完結型のコードとテストスクリプトを合成するフレームワークです。テスト通過率と視覚的類似度に基づくポリシー最適化（GRPO）を組み合わせ、実行ベースのフィードバックから学習します。",
      "enables": "9BモデルでGemini-3.7-Flashを上回るスコアを達成し、Claude-Sonnet-5に匹敵する性能を示しました。従来のマルチモーダルLLMによる検証と比較して、報酬計算のレイテンシを97%以上削減しています。",
      "why_it_matters": "Webエージェントによる検証を、高速で再現可能な実行テストに置き換えることで、コード生成の精度向上と学習プロセスの大幅な加速を同時に実現しました。",
      "tags": [
        "コード生成",
        "Web開発",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28053",
      "title": "Slots Are Not Speakers: Training-Free Speaker Linking for Frozen Streaming Diarizers",
      "url": "https://arxiv.org/abs/2610.28053",
      "pdf": "https://arxiv.org/pdf/2610.28053",
      "authors": [
        "Aditya Srinivas Menon",
        "Kumarmanas Nethil",
        "Kavya Manohar"
      ],
      "categories": [
        "cs.SD",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Submitted to ICASSP 2027",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "allows a frozen streaming diarizer to track more speakers than it has output slots.",
      "signals": [],
      "headline": "学習不要で動作し、出力スロット数以上の話者を追跡可能にする「Speaker Linking」",
      "what": "固定されたスロット数を持つストリーミング型話者分離（Diarization）モデルのための後処理手法です。スロット内での話者交代を検出し、外部のスピーカーエンコーダーとマッチングすることで、スロット数を超える話者を特定します。",
      "enables": "4スロットのモデルにおいて、スロット数を超える話者が登場する場合のDER（Diarization Error Rate）を36.8%から22.6%へと劇的に改善しました。また、23人の話者が参加する法廷でのcpWERを82.7%から24.4%に低減しました。",
      "why_it_matters": "モデル自体を再学習することなく、実環境の多人数会議やストリーミング配信における話者追跡性能を大幅に拡張できる実用性の高い手法です。",
      "tags": [
        "音声処理",
        "話者分離",
        "ストリーミング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.31309",
      "title": "Extreme Compression of Per-Layer Embeddings via Cross-Layer Latent Vector Quantization",
      "url": "https://arxiv.org/abs/2610.31309",
      "pdf": "https://arxiv.org/pdf/2610.31309",
      "authors": [
        "Jiacheng Liu",
        "Yaxin Luo",
        "Xiaohan Zhao",
        "Peng Sun",
        "Xinyi Shang",
        "Jiacheng Cui"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code at https://github.com/VILA-Lab/optic",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "stores one quantized code tuple per token and decodes it at every layer with a layer-specific affine decoder.",
      "signals": [],
      "headline": "層ごとの埋め込みベクトルを層横断的な潜在量子化で1000倍以上に圧縮するOPTIC",
      "what": "Transformerの各層に埋め込みを持つPer-Layer Embeddings (PLE)に対し、トークンごとに共有されたインデックスコードと層固有のアフィンデコーダーを用いる圧縮手法です。従来のベクトル単位の量子化ではなく、出力パスに適合するようにコードとデコーダーを最適化します。",
      "enables": "Gemma 4 E4Bモデルにおいて、100倍の圧縮率で性能の97.8%を維持し、最大1,002倍の圧縮時でも84.1%の性能を保持しつつ、GPUメモリ消費を29.7%削減しました。",
      "why_it_matters": "モデルの大規模化に伴い増大する埋め込みパラメータのメモリ負担を、推論速度をほぼ損なわずに（遅延0.40%未満）極限まで削減できる実用的な圧縮技術です。",
      "tags": [
        "モデル圧縮",
        "量子化",
        "Transformer"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.31639",
      "title": "Causal Chain of Thought: Mitigating Attention Leakage via Context Isolation",
      "url": "https://arxiv.org/abs/2610.31639",
      "pdf": "https://arxiv.org/pdf/2610.31639",
      "authors": [
        "Gabriele Dominici",
        "Teague McMillan",
        "Fazl Barez",
        "Marc Langheinrich",
        "Martin Gjoreski"
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
      "star_quote": "decomposing problems into a directed acyclic graph of atomic sub-questions, evaluating each node in an isolated context",
      "signals": [],
      "headline": "文脈を隔離した構造的推論によりChain of Thoughtの忠実性を高めるCausalCoT",
      "what": "問題を原子的なサブ質問の有向非巡回グラフ（DAG）に分解し、各ノードをその親ノードの情報のみを含む独立した文脈で評価する推論フレームワークです。これにより、モデルが将来の正解を直接参照して後付けの説明を生成する「Attention Leakage」を防ぎます。",
      "enables": "推論性能を維持したまま、中間ステップの因果的感度（説明の忠実性）を最強のベースラインと比較して平均で12ポイント向上させました。",
      "why_it_matters": "CoTが単なる「それらしい説明」になっている問題を解決し、推論プロセスに因果的な透明性を持たせることで、モデルの判断根拠をより信頼できるものにします。",
      "tags": [
        "LLM",
        "Chain of Thought",
        "因果推論"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30218",
      "title": "JANUS: Agentic Cross-Language Fuzzing Harness Generation for Android Native Libraries",
      "url": "https://arxiv.org/abs/2610.30218",
      "pdf": "https://arxiv.org/pdf/2610.30218",
      "authors": [
        "Xiangyu Zhang",
        "Yucheng Su",
        "Lingling Fan",
        "Yinan Li",
        "Sen Chen"
      ],
      "categories": [
        "cs.SE",
        "cs.CR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Harness Generation, Android Native Libraries, LLM Agent",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "JANUS, the first agentic approach to synthesizing cross-language JNI-aware fuzzing harnesses",
      "signals": [],
      "headline": "Androidネイティブライブラリのファジング用ハーネスを自動生成するエージェントJANUS",
      "what": "Java/KotlinとC/C++を繋ぐJNI境界を越えて、クローズドソースなネイティブライブラリの依存関係を解析し、ファジングに必要なハーネスを自動合成するエージェント手法です。明示的・暗示的な呼び出し依存関係を反復的に解決し、複雑な複合オブジェクトをボトムアップで組み立てます。",
      "enables": "実世界の44のアプリに対し、既存ツールと比較して5.9倍以上の有効なハーネスを生成し、XiaomiやSamsungなどのデバイスで6つの未知の脆弱性を発見しました。",
      "why_it_matters": "解析が困難だったJNI経由のメモリエラーやセキュリティ脆弱性を、AIエージェントによる自律的なワークフローで効率的に発見できる道を開きました。",
      "tags": [
        "セキュリティ",
        "Android",
        "AIエージェント"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30277",
      "title": "Breaking the high-degree barrier in Lehmer's problem with a human-AI discovery loop",
      "url": "https://arxiv.org/abs/2610.30277",
      "pdf": "https://arxiv.org/pdf/2610.30277",
      "authors": [
        "Yuri Chervonyi",
        "Sergei Gukov",
        "Thang Luong"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "36 pages, 6 figures, 7 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "our approach improves upon six previously published values and holds 99.6% of all best known records.",
      "signals": [],
      "headline": "人間とAIの発見ループにより数学上の難問「レーマーの問題」の記録を大幅に更新",
      "what": "数学の未解決問題であるレーマーの問題に対し、AIエージェントによる数値ソルバーのプロトタイピングと大規模な分散探索、人間による仮説検証を組み合わせたアプローチです。一般化ボイド（Generalized Boyd）アルゴリズムという5パラメータの構成法を導出しました。",
      "enables": "次数2000までの全ての偶数次数において、既存の最良記録の99.6%を保持し、6つの既報値を改善する最小マラー測度を持つ多項式の構築に成功しました。",
      "why_it_matters": "AIが単なる計算機ではなく、人間と協力して新しい数学的アルゴリズムや構築法を創出できることを示しており、高難度な数学探求の新たな手法を提示しています。",
      "tags": [
        "AI for Science",
        "数学",
        "LLM"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.29378",
      "title": "Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories",
      "url": "https://arxiv.org/abs/2610.29378",
      "pdf": "https://arxiv.org/pdf/2610.29378",
      "authors": [
        "Boyuan Zheng",
        "Jing Xiong",
        "Chenwei Wu",
        "Hui Shen",
        "Zesen Zhao",
        "Hei Ting Una Chan"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 6 figures, 9 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "At 2 bits, it outperforms every baseline on every benchmark at every model size",
      "signals": [],
      "headline": "自己生成軌跡とDynamic KLを用いた量子化LLMの推論能力回復手法「OnQ」",
      "what": "量子化LLM（Student）が生成した独自のプレフィックスに対して教師モデル（Teacher）が指導を行うオンポリシー蒸留と、トークンの過少・過剰予測を補正するDynamic KLを組み合わせた低ビット量子化復旧パイプラインです。従来の固定応答による教師あり学習で発生していた、系列長が伸びるほど推論の乖離が大きくなる問題を解決します。",
      "enables": "Qwen3の各サイズにおいて、2ビットおよび3ビット量子化で最高精度を達成し、特に長文推論ベンチマークで顕著な改善が見られました。8Bモデルの2ビット量子化では、最強のベースラインを10.26ポイント上回り、応答の短縮や繰り返しエラーの削減も実現しています。",
      "why_it_matters": "モデル圧縮時に発生する「推論能力の喪失」を、推論プロセスそのものを学習に組み込むことで克服しており、リソース制約の厳しい環境での高性能LLMのデプロイを加速させます。",
      "tags": [
        "LLM",
        "モデル量子化",
        "知識蒸留"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.28821",
      "title": "Register Anything Model for Generalizable and Robust Point Cloud Registration",
      "url": "https://arxiv.org/abs/2610.28821",
      "pdf": "https://arxiv.org/pdf/2610.28821",
      "authors": [
        "Zheng Qin",
        "Junhua Xi",
        "Yan Huang",
        "Jiahong Lai",
        "Anwen Huang",
        "Qiong Li"
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
      "comment": "Accepted by NeurIPS 2026. Code and models are available at https://github.com/qinzheng93/RegisterAnything",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Extensive experiments on 12 benchmarks demonstrate state-of-the-art performance",
      "signals": [],
      "headline": "幾何学的正規化により多様な環境に対応する汎用的3D点群レジストレーションモデル「RAM」",
      "what": "屋内、屋外、オブジェクトなどの異なるドメインの3D点群を統合的に扱うRegister Anything Model (RAM)を提案しています。シーンのスケールやノイズの差異を吸収する幾何学的正規化（Geometry-aware normalization）と、局所的な幾何学的整合性をモデル化する効率的なGeometric Transformerを階層的に組み合わせています。",
      "enables": "12のベンチマークにおいて最先端のインライア率とレジストレーションリコールを達成しました。単一ドメインで学習した既存モデルよりも高い汎化性能を示し、未知のドメインに対してもロバストな6自由度変換の推定が可能です。",
      "why_it_matters": "ドメインごとに個別のモデル設計やハイパーパラメータ調整が必要だった従来の課題を解消し、センサーや環境を選ばない汎用的な3D認識基盤としての活用が期待されます。",
      "tags": [
        "3Dコンピュータビジョン",
        "点群レジストレーション",
        "幾何学習"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.29147",
      "title": "VERDICT: Multi-Agent Parallel Modular Verification",
      "url": "https://arxiv.org/abs/2610.29147",
      "pdf": "https://arxiv.org/pdf/2610.29147",
      "authors": [
        "Tengjie Lin",
        "Zhongyi Wang",
        "Haokun Li",
        "Jianwei Yin",
        "Mingshuai Chen"
      ],
      "categories": [
        "cs.SE",
        "cs.LO"
      ],
      "venues": [
        "ICSE"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at ICSE 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "first approach that scales to the complete 20,000-line X.509 parser",
      "signals": [],
      "headline": "LLMを用いた並列的・双方向的な大規模プログラム形式検証フレームワーク「VERDICT」",
      "what": "大規模ソフトウェアの形式検証におけるボトムアップな制約（関数の呼び出し先を先に検証する必要性）を解消するマルチエージェントフレームワークです。各関数に割り当てられたエージェントが仮定に基づき並列に仕様合成を行い、矛盾が生じた場合はコールグラフの上下方向に修正を伝播させる双方向の対立解消メカニズムを備えています。",
      "enables": "既存手法では数日かけても検証できなかった2万行規模のX.509パーサーに対し、わずか数時間でほぼすべての実行時エラーの可能性を排除することに成功しました。従来よりも高品質な仕様を短時間で合成可能です。",
      "why_it_matters": "依存関係による並列化の限界を突破し、大規模で複雑なシステムの形式検証を実用的な時間内に完了させる道を開きました。",
      "tags": [
        "ソフトウェア工学",
        "形式検証",
        "マルチエージェント"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.27815",
      "title": "ProVe: Proposer-Verifier Decoding",
      "url": "https://arxiv.org/abs/2610.27815",
      "pdf": "https://arxiv.org/pdf/2610.27815",
      "authors": [
        "Ziqi Jin",
        "Weiwen Xu",
        "Jiaxi Li",
        "Yujie Zhong",
        "Qi She",
        "Aixin Sun"
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
        "sota"
      ],
      "star_quote": "ProVe-lossless reaches 2.5x average AR throughput without training a separate draft head.",
      "signals": [],
      "headline": "大規模モデルが自身でブロック予測し検証する効率的な推論手法「ProVe」",
      "what": "標準的な自己回帰（AR）モデルをファインチューニングし、1回のフォワードパスで将来のトークンブロックを予測する「Proposer」として動作させ、別のパスで検証を行う手法です。検証器には小型モデルまたはProposer自身を利用できます。",
      "enables": "32Bモデルを用いたProVe-lossless設定で、精度の低下なしに平均2.5倍のスループット向上を達成しました。小型の3B検証器を用いた場合、わずかな精度低下で2.7倍の高速化が可能です。",
      "why_it_matters": "投機的デコーディング（Speculative Decoding）におけるドラフトモデルの役割を大規模モデルに持たせることで、別途ドラフト用のヘッドを学習させる手間を省きつつ、高い推論効率を実現します。",
      "tags": [
        "推論加速",
        "LLM",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28559",
      "title": "Large Flow Language Models",
      "url": "https://arxiv.org/abs/2610.28559",
      "pdf": "https://arxiv.org/pdf/2610.28559",
      "authors": [
        "Arnav Chavan",
        "Chanhyuk Lee",
        "Udbhav Bamba",
        "Jaehoon Yoo",
        "Seunghoon Hong",
        "Aditi Raghunathan"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code available at: https://github.com/lafa-gh/large-flow-lms",
      "hf_upvotes": 10,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "This yields 2.54x the throughput of an AR model at comparable quality, outperforming multi-token prediction",
      "signals": [],
      "headline": "連続フローを言語モデルに適用し高速な並列生成を実現する「Lafa」",
      "what": "8Bパラメータ規模にスケーリングされた、ブロック単位のフローベース言語モデルです。因果的アテンションを持つプレフィックスと、各ブロック内の双方向かつ非同期なフローを組み合わせた設計を採用しています。",
      "enables": "30Bトークン未満の学習データで、自己回帰（AR）モデルと同等以上の性能を達成しつつ、ARモデルの2.54倍のスループットを実現しました。マルチトークン予測（MTP）や離散拡散モデルを上回る性能を示しています。",
      "why_it_matters": "離散拡散モデルでは困難だった数十億パラメータ規模での言語モデリングを効率的に実現し、並列生成と自己投機的デコーディングの両立を可能にしました。",
      "tags": [
        "言語モデル",
        "並列生成",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26938",
      "title": "GRaSP: Latency-Aware Optimization for Geo-Distributed Retrieval-Augmented Generation",
      "url": "https://arxiv.org/abs/2610.26938",
      "pdf": "https://arxiv.org/pdf/2610.26938",
      "authors": [
        "Hardik Ruparel",
        "Raj Kumar Pandey",
        "Pramod Kumar"
      ],
      "categories": [
        "cs.IR",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "SIGIR"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at the 4th International ACM SIGIR Conference on Information Retrieval in the Asia Pacific (SIGIR-AP 2026)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We formalize the Geo-RAG Selection Problem (GRaSP), a drop-in re-scoring layer that decays relevance by latency and adds an optional cost penalty",
      "signals": [],
      "headline": "地理分散型RAGにおいてレイテンシとコストを最適化する再スコアリング層「GRaSP」",
      "what": "地理的に分散したサーバー環境において、検索の質だけでなくWANのレイテンシや転送料金を考慮してドキュメントを選択する手法です。検索結果の適合度をレイテンシで減衰させる欲張りアルゴリズムを用います。",
      "enables": "エンドツーエンドのQAタスクにおいて、適合度のみを優先する場合と比較して、回答精度（EM）の低下をわずか0.062に抑えつつ、コンテキスト取得のレイテンシを43%削減しました。",
      "why_it_matters": "データ所在地やネットワークコストが制約となる実用的なRAGシステムにおいて、追加学習なしで導入でき、パフォーマンスのPareto最適化を可能にします。",
      "tags": [
        "RAG",
        "分散システム",
        "最適化"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26904",
      "title": "Pareto-Optimal RTL Code Generation via Multi-Objective Reinforcement Learning with Large Language Models",
      "url": "https://arxiv.org/abs/2610.26904",
      "pdf": "https://arxiv.org/pdf/2610.26904",
      "authors": [
        "Koki Takeshita",
        "Kenji Uebayashi",
        "Hikaru Tomonari",
        "Masaya Tsunokake",
        "Koichiro Yawata",
        "Tatsuya Sasaki"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at COLM 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose a learning method for LLM-based circuit generation that optimizes, not the quality of a single circuit, but the quality and diversity of the entire circuit set",
      "signals": [],
      "headline": "多目的強化学習により電力・遅延・面積が最適なRTL回路を生成する「MORL-LLM」",
      "what": "ハードウェア設計（RTL）生成において、電力（Power）、性能（Performance）、面積（Area）のトレードオフ（PPA）を最適化する手法です。Hypervolume Contribution（HVC）に基づく報酬関数を用い、多様なPareto最適解を生成するよう学習します。",
      "enables": "PPA最適化を行わないベースラインと比較して、相対的なハイパーボリューム（指標）を13.3ポイント向上させ、単一目的の強化学習よりも多様で高品質な回路セットの生成に成功しました。",
      "why_it_matters": "設計要件に応じて「低電力重視」や「低遅延重視」といった異なる最適化が必要な実務において、AIが設計者に複数の選択肢を提示できる利点があります。",
      "tags": [
        "LLM",
        "ハードウェア設計",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26909",
      "title": "Uncertainty Gates the Gradient: Adaptive Updates for Generalized Few-Shot 3D Segmentation",
      "url": "https://arxiv.org/abs/2610.26909",
      "pdf": "https://arxiv.org/pdf/2610.26909",
      "authors": [
        "Yifei Zhao",
        "Fanyu Zhao",
        "Shengtang Wu",
        "Han Zhang",
        "Ruike Cao",
        "Yinsheng Li"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "On ScanNet200 and ScanNet++ (1-/5-shot), UGA sets new state of the art with an average +3.08 HM IoU over the strongest prior baseline.",
      "signals": [],
      "headline": "不確実性を利用して勾配更新を制御するFew-shot 3Dセグメンテーション「UGA」",
      "what": "少量のサンプルから3D点群のセグメンテーションを行う際、サンプルの信頼度（不確実性）を推定し、勾配の更新をゲート制御する手法です。信頼性の低いサンプルがモデルの最適化軌跡を乱すのを防ぎます。",
      "enables": "ScanNet200およびScanNet++のベンチマークにおいて、最強のベースラインと比較して平均3.08ポイントのHM IoU向上を達成し、新しい状態（SOTA）を記録しました。",
      "why_it_matters": "オクルージョンやノイズが多い3Dデータにおいて、低品質なアノテーションから誤った幾何パターンを学習してしまうリスクを軽減し、ロバストな概念学習を可能にします。",
      "tags": [
        "3Dビジョン",
        "Few-shot学習",
        "セグメンテーション"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27119",
      "title": "PORA: Learning When More Reasoning Pays Off for LLM Agents",
      "url": "https://arxiv.org/abs/2610.27119",
      "pdf": "https://arxiv.org/pdf/2610.27119",
      "authors": [
        "Bo Yan",
        "Qi Zhang",
        "Zhen Tan",
        "Tianlong Chen",
        "Song Wang"
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
      "star_quote": "On BFCL memory, it exceeds the strongest existing method by 17.4--32.9 percentage points.",
      "signals": [],
      "headline": "予算に応じて「思考の深さ」を適応的に選択するLLMエージェント「PORA」",
      "what": "タスクの実行中に「短時間の思考（Short Reasoning）」と「長時間の思考（Long Reasoning）」のどちらが効果的かを判断するコントローラーです。過去の試行から長期的な価値を見積もり、残りの予算と照らし合わせて選択を行います。",
      "enables": "計算予算を節約しながら、コードや数学のタスクにおいて、常に長時間思考する設定と同等以上の性能を達成しました。特に数学ではモデルへのリクエスト数を31.2%削減しつつ精度を維持しています。",
      "why_it_matters": "推論コストやAPI制限がある中で、エージェントが効率的にタスクを完了させるための「思考の資源配分」という重要な課題に対処しています。",
      "tags": [
        "LLMエージェント",
        "推論最適化",
        "計算資源"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27146",
      "title": "PRIMFLOW: Learning Trajectory Primitives for Few-Step Distillation",
      "url": "https://arxiv.org/abs/2610.27146",
      "pdf": "https://arxiv.org/pdf/2610.27146",
      "authors": [
        "Hongyi Fang",
        "Benjia Zhou"
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
      "star_quote": "achieves a T-FID of 20.92 and an HPSv2 score of 28.35 at one NFE, improving both metrics over a trajectory-distillation baseline.",
      "signals": [],
      "headline": "連続的な軌跡プリミティブを学習し、1ステップでの画像生成を強化する「PRIMFLOW」",
      "what": "教師モデルのサンプリング軌跡に沿った累積変位を「軌跡プリミティブ」として学習する蒸留手法です。固定された時間刻みに依存せず、局所的な速度情報から大域的な更新を直接学習します。",
      "enables": "大規模なText-to-Image生成において、わずか1回のネットワーク評価（NFE）でT-FID 20.92を達成し、従来の軌跡蒸留ベースラインを上回る画質と忠実度を実現しました。",
      "why_it_matters": "拡散モデルの推論を極限まで高速化（1ステップ化）しつつ、従来の離散的な予測手法よりも高い精度で教師モデルの挙動を再現できる点が重要です。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "モデル蒸留"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27159",
      "title": "Learned Control Variates for Rare Grid-Outage Estimation at Electric Vehicle Charging Stations",
      "url": "https://arxiv.org/abs/2610.27159",
      "pdf": "https://arxiv.org/pdf/2610.27159",
      "authors": [
        "Sulyman Iyanda",
        "Mansur Arief"
      ],
      "categories": [
        "cs.AI",
        "cs.CE",
        "cs.SY",
        "eess.SY",
        "stat.ML"
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
      "star_quote": "we propose a control variate (CV) built from a learned classifier of the outage, trained on cheap observable features such as temperature and load forecasts.",
      "signals": [],
      "headline": "EV充電による電力網の稀な停電リスクを推定する学習型制御変量法",
      "what": "電気自動車（EV）の急速充電が電力網に負荷をかける際、発生確率の極めて低い大規模停電（レアイベント）を推定する手法です。機械学習モデルを「制御変量（Control Variates）」として利用し、モンテカルロ・シミュレーションの分散を削減します。",
      "enables": "インドネシアのSurabaya市の電力網シミュレーションにおいて、シミュレーション回数を増やすことなく、従来のモンテカルロ法と比較して停電日数の推定誤差を3分の1に削減し、分散の約60%を除去しました。",
      "why_it_matters": "計算コストの高い電力シミュレーターを用いながら、10年に1度といった稀なリスクを精度良く評価できるため、高信頼なインフラ設計に寄与します。",
      "tags": [
        "スマートグリッド",
        "リスク評価",
        "機械学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27200",
      "title": "Preference-Aware Pareto Steering for Multi-Task Speech LLMs",
      "url": "https://arxiv.org/abs/2610.27200",
      "pdf": "https://arxiv.org/pdf/2610.27200",
      "authors": [
        "Liuyuan Jiang",
        "Vishal Sunder",
        "Samuel Thomas",
        "Brian Kingsbury",
        "Jeff Kuo",
        "Lisha Chen"
      ],
      "categories": [
        "cs.CL",
        "cs.SD"
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
      "star_quote": "increases endpoint-inclusive normalized hypervolume by 17.8% over fixed loss weighting.",
      "signals": [],
      "headline": "音声LLMの多タスク性能を動的に調整するPareto最適化学習「EA-SURF」",
      "what": "音声認識、翻訳、タイムスタンプ予測など、複数のタスクを同時に学習する音声LLMにおいて、学習中に損失の重みを適応的に変化させる手法です。ユーザーが望む特定のタスク優先度（Preference）にモデルを誘導します。",
      "enables": "固定された重みで学習する場合と比較して、全タスクの性能バランスを示す正規化ハイパーボリュームを17.8%向上させ、指定した優先度通りの性能分布を達成しました。",
      "why_it_matters": "一つのモデルで複数の機能を担う音声モデルにおいて、デプロイ先の要件（例：翻訳精度を重視したい）に合わせた最適なチューニングを自動化できます。",
      "tags": [
        "音声LLM",
        "多目的最適化",
        "マルチタスク"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27290",
      "title": "TEX: Test-Time Scaling Testing Agents via Execution-based Cross-Validation",
      "url": "https://arxiv.org/abs/2610.27290",
      "pdf": "https://arxiv.org/pdf/2610.27290",
      "authors": [
        "Akash Gokul",
        "Srijan Bansal",
        "Yingbo Zhou",
        "Semih Yavuz"
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
        "sota"
      ],
      "star_quote": "On SWT-Bench Verified, TEX achieves 86.4%, establishing a new state-of-the-art and improving +9.0% over single-agent baselines.",
      "signals": [],
      "headline": "エージェント間の相互実行検証によりコード修正精度を高める「TEX」",
      "what": "複数のエージェントがテストケースとコード修正（パッチ）を並列生成し、お互いの出力をクロス実行して検証するフレームワークです。実行結果のフィードバック行列を用いて、エージェントが自身の解を洗練させます。",
      "enables": "ソフトウェア修正ベンチマークであるSWE-bench Verifiedにおいて、86.4%という新たなSOTAを達成し、単一エージェントのベースラインから9.0%の精度向上を記録しました。",
      "why_it_matters": "単に多くの候補を生成するだけでなく、実行ベースの客観的なフィードバックを共有・活用することで、長期間のタスクにおける推論の信頼性を高めることができます。",
      "tags": [
        "LLMエージェント",
        "コード生成",
        "自己修正"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27558",
      "title": "AnchorRM: Parallel Intra-Batch State Reconstruction with Anchor-Based Residual Memory for Temporal Graph Neural Networks",
      "url": "https://arxiv.org/abs/2610.27558",
      "pdf": "https://arxiv.org/pdf/2610.27558",
      "authors": [
        "Haroon Gharwi",
        "Kai Shu",
        "Yue Dai"
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
      "star_quote": "we propose AnchorRM, an anchor-based residual memory mechanism that reconstructs event-specific intra-batch node states without executing sequential recurrent updates.",
      "signals": [],
      "headline": "バッチ内のノード状態を並列に再構築し高速化する動的グラフ学習「AnchorRM」",
      "what": "時間とともに変化するグラフ（Temporal Graph）の学習において、逐次的なメモリ更新を回避する手法です。バッチ開始時の状態を固定「アンカー」とし、バッチ内の履歴から残差を計算して各イベントの個別状態を並列に推定します。",
      "enables": "動的グラフの学習において、平均6.16倍（最大10.05倍）の高速化と、最大40倍のバッチサイズのスケーリングを達成しました。これにより、予測精度を維持したまま学習効率を大幅に向上させました。",
      "why_it_matters": "メモリベースの動的グラフ学習におけるボトルネックであった「逐次処理による依存関係」を解消し、GPUの並列演算能力を最大限に活用可能にしました。",
      "tags": [
        "グラフニューラルネットワーク",
        "高速化",
        "動的グラフ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27812",
      "title": "SliMOO: Interpretable Multi-Objective Evolutionary Search for LLM Depth Pruning",
      "url": "https://arxiv.org/abs/2610.27812",
      "pdf": "https://arxiv.org/pdf/2610.27812",
      "authors": [
        "Guanchen Li",
        "Yixing Xu",
        "Xuanwu Yin",
        "Dong Li",
        "Emad Barsoum"
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
      "star_quote": "Llama-3.1-70B at 25% sparsity, it improves the math-domain average from 24.33% to 34.40% and the code-domain average from 35.03% to 39.14%.",
      "signals": [],
      "headline": "多目的進化アルゴリズムを用いたLLMの解釈可能な層削除「SliMOO」",
      "what": "LLMの深さを削減（ pruning）する際、タスクごとに重要な層が異なる性質を利用するフレームワークです。層の寄与度を事前にマップ化し、NSGA-IIアルゴリズムを用いて複数のタスク性能を維持するPareto最適な削除パターンを探索します。",
      "enables": "Llama-3.1-70Bを25%疎にした場合、従来の単純な手法と比較して数学ドメインの平均スコアを24.33%から34.40%へ、コードドメインを35.03%から39.14%へと大幅に改善しました。",
      "why_it_matters": "単純なランキングによる層削除では特定のベンチマーク性能が損なわれやすいという課題を、多目的最適化によって解決し、汎用性を保ったままの軽量化を可能にします。",
      "tags": [
        "モデル軽量化",
        "LLM",
        "進化計算"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28355",
      "title": "Beyond the Point Mass: Acceptance-Derived Weights and Distributional Losses for Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.28355",
      "pdf": "https://arxiv.org/pdf/2610.28355",
      "authors": [
        "Tianyu Wu",
        "Zhuohan Wang",
        "Jonathan Geuter",
        "Yu Yao",
        "Weifan Jiang",
        "Chengxi Zhang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/Lucas-TY/D-PAL-SpecForge",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We derive D-PAL (Dynamic Position-wise Acceptance Loss) from the exact expected accepted length, using this overlap as the acceptance signal.",
      "signals": [],
      "headline": "受理率の数理モデルから導出した投機的デコーディングの最適損失「D-PAL」",
      "what": "投機的デコーディングにおけるドラフトモデルの学習手法を改善したものです。ターゲットモデルの分布との「重なり（Overlap）」に基づいて、各トークン位置の重み付けと、ログ受理率（Log Acceptance）に基づく損失関数を導入します。",
      "enables": "Qwen3-4Bをターゲットとした評価において、既存手法のD-PACEを上回る平均受理長とスループットを達成しました。また、Rényiダイバージェンスを用いた損失が受理率の向上に有効であることを示しました。",
      "why_it_matters": "ターゲットモデルの分布を点推定ではなく分布として捉えることで、拒絶サンプリングの理論に合致したより効率的なドラフトモデルの学習が可能になります。",
      "tags": [
        "推論加速",
        "LLM",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27678",
      "title": "PhonoBridge: Error-Aware Phoneme-Mediated EMG-to-Text Reconstruction",
      "url": "https://arxiv.org/abs/2610.27678",
      "pdf": "https://arxiv.org/pdf/2610.27678",
      "authors": [
        "Wen Qiu",
        "Jiacheng Zhang",
        "Xuanda Chen",
        "Siqi Cai",
        "Haizhou Li"
      ],
      "categories": [
        "cs.SD",
        "cs.CL",
        "cs.HC"
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
      "star_quote": "PhonoBridge achieves 24.77% WER, outperforming the previously reported best of 28.27% on the same test split.",
      "signals": [],
      "headline": "音素を媒介としLLMで誤りを補正する筋電位からの発話復元「PhonoBridge」",
      "what": "喉の表面の筋電位（EMG）から「声を出さない会話」をテキスト化する技術です。EMGを直接テキストにするのではなく、一旦「音素」に変換し、その音素列に含まれる誤りをLLMが文脈から補正して最終的なテキストを生成します。",
      "enables": "オープンデータセットにおいて、単語誤り率（WER）を従来の28.27%から24.77%へと改善し、最高精度を更新しました。音素列への人工的なノイズ付加による学習（EPGA）が効果を発揮しています。",
      "why_it_matters": "音声データとEMGデータのペアが少ないという課題を、音素を介することで大量のテキストデータを利用可能にし、かつフロントエンドの認識ミスに強いシステムの構築に成功しました。",
      "tags": [
        "ヒューマンコンピュータインタラクション",
        "音声認識",
        "LLM"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.31329",
      "title": "WeVisOne-VL: Unified Visual Perception from Objects to Pixels",
      "url": "https://arxiv.org/abs/2610.31329",
      "pdf": "https://arxiv.org/pdf/2610.31329",
      "authors": [
        "Tianming Liang",
        "Junyi Pan",
        "Yuxi Li",
        "Canmiao Fu",
        "Zhipeng Huang",
        "Chong Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 221,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲221"
      ],
      "headline": "物体検出からセグメンテーションまでを統一トークン予測で実現するWeVisOne-VL",
      "what": "構造化されたNext-token Predictionを通じて、物体レベル（検出）とピクセルレベル（セグメンテーション）の視覚認識を統合したVLMです。軽量なピクセルデコーダーを専用トークンで統合し、点・ボックス・マスク・アルファマットなど、あらゆる粒度の位置特定をサポートします。",
      "enables": "30以上のベンチマークで物体・ピクセル両レベルのタスクにおいて最先端の性能を達成しつつ、対象が存在しないクエリに対する頑健な拒絶応答も実現しました。",
      "why_it_matters": "一つのモデルでOCRからマット生成まで多様なタスクを高精度にこなせるため、実用的なビジョンシステムの統合を簡素化できます。",
      "tags": [
        "VLM",
        "物体検出",
        "セグメンテーション"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30926",
      "title": "Making MLLM Latents Matter: Factor-Aware Predictive Learning for Cinematic Video Generation",
      "url": "https://arxiv.org/abs/2610.30926",
      "pdf": "https://arxiv.org/pdf/2610.30926",
      "authors": [
        "Songlin Yang",
        "Zhe Wang",
        "Xiaotong Zhao",
        "Xi Wang",
        "Ran Zhang",
        "Shuai Li"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 163,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲163"
      ],
      "headline": "映画的なビデオ生成に向けた要因分離制御とMLLM潜在表現の活用手法FAPL",
      "what": "マルチモーダルLLM（MLLM）の潜在表現をビデオ生成Diffusion Transformer（DiT）で効果的に利用するための学習手法です。MLLMの潜在表現への接地、特定の要因（キャラ、カメラ等）の変更と維持を学習するFactor-span replacement、テキストのみからの時間的推論の3段階で構成されます。",
      "enables": "スパースな入力からのビデオ生成や要因別の編集タスクにおいて、既存手法を一貫して上回る時間的制御と要因の整合性を実現しました。",
      "why_it_matters": "MLLMが持つ高度な理解力をビデオ生成に直接「作用」させるための学習信号を定義し、より意図に沿った映画的な動画作成を可能にします。",
      "tags": [
        "ビデオ生成",
        "MLLM",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30181",
      "title": "Deep Search in Real-World Web Environments",
      "url": "https://arxiv.org/abs/2610.30181",
      "pdf": "https://arxiv.org/pdf/2610.30181",
      "authors": [
        "Xiaomin Yu",
        "Hongliang Chen",
        "Zhe Huang",
        "Shilin Yan",
        "Shao-Rong Su",
        "Xuqiao Ma"
      ],
      "categories": [
        "cs.IR",
        "cs.MM",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 151,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲151"
      ],
      "headline": "リアルなWeb環境での多段階リサーチ能力を評価するベンチマークOpenDS-World",
      "what": "静的な検索ではなく、動的なブラウザ操作、多様なファイル形式の処理、複数ソースからの証拠統合を必要とする、ライブなWeb上でのエンドツーエンドな調査タスク（OpenDS）を定義しました。200の難解なタスクを含むOpenDS-Worldベンチマークを提供します。",
      "enables": "12の最先端モデルを評価した結果、最高精度は39.0%に留まり、長期間の探索管理やツール調整における大きな課題があることが浮き彫りになりました。",
      "why_it_matters": "これまでの検索・回答タスクよりも遥かに実務に近い、自律的なエージェントのWebリサーチ能力を客観的に測定できるプラットフォームとなります。",
      "tags": [
        "AIエージェント",
        "ベンチマーク",
        "Web探索"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.30949",
      "title": "IQuest-Q1: Advancing Foundation Capabilities for Agentic CLI Systems",
      "url": "https://arxiv.org/abs/2610.30949",
      "pdf": "https://arxiv.org/pdf/2610.30949",
      "authors": [
        "A. Jian Yang",
        "An Huang",
        "Bo Dan",
        "Chen Mu",
        "Chengran Yang",
        "Chuan Shi"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "IQuest Report",
      "hf_upvotes": 54,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲54"
      ],
      "headline": "エージェント・コーディング能力に特化した320BパラメータのMoE基盤モデルIQuest-Q1",
      "what": "320Bの総パラメータ（活性15B）を持つSparse MoEモデルで、Stable SplitNormやmuPを用いた安定した事前学習と、ドメイン特化型RLやモデルマージを組み合わせた事後学習で構築されています。CLIシステムやコーディングタスクでのエージェント性能を重視しています。",
      "enables": "複数の学習ステージとカリキュラムを通じて、コーディングと汎用タスクの両方で高い能力を持つオープンソースモデルとして開発されました。",
      "why_it_matters": "大規模なMoEモデルの安定した学習手法と、エージェントとしての実用的な能力を向上させるための包括的なトレーニングパイプラインを提示しています。",
      "tags": [
        "LLM",
        "MoE",
        "コーディング"
      ],
      "fetched_at": "2026-10-24T09:22:43.206231+09:00"
    },
    {
      "id": "2610.29997",
      "title": "DONIC: Generalist Dexterous Bimanual Tracking Control from Human Demonstrations",
      "url": "https://arxiv.org/abs/2610.29997",
      "pdf": "https://arxiv.org/pdf/2610.29997",
      "authors": [
        "Mingze Sun",
        "Ziang Cao",
        "Yuan Fei",
        "Qiankuan Tao",
        "Zihan Wang",
        "Tianqi Liu"
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
      "hf_upvotes": 124,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲124"
      ],
      "headline": "多様な人間動作から学習する汎用型双腕器用操作トラッキング制御「DONIC」",
      "what": "人間によるデモンストレーションデータとPPO、行動クローニングを組み合わせた、双腕の器用な操作のための汎用トラッキングコントローラです。229種類のオブジェクトを含む新しいデータセット「BiHOI」を構築し、物体中心の報酬設計と軌跡内でのメリットを正確に評価するClip-Centered Advantagesを導入しています。",
      "enables": "学習済みのオブジェクトの未知の軌跡で86.79%、未学習のオブジェクトで57.32%の成功率を達成し、既存のベースラインを45ポイント以上上回りました。単一のチェックポイントで、多様なロボットリファレンスに対する協調制御が可能です。",
      "why_it_matters": "片手操作に限定されていた既存手法に対し、接触が複雑な双腕操作において高い汎用性とロバスト性を示した点が重要であり、ロボットによる複雑な作業の自動化に寄与します。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "器用な操作"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.29989",
      "title": "Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2610.29989",
      "pdf": "https://arxiv.org/pdf/2610.29989",
      "authors": [
        "Ruopeng Gao",
        "Yukun Huang",
        "Jiarui Hu",
        "Shuai Wang",
        "Wenbo Hu",
        "Ying Shan"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://hellorpg.github.io/looking-ahead/",
      "hf_upvotes": 112,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲112"
      ],
      "headline": "未来チャンク予測（FCP）の導入による自己回帰ビデオ生成モデルの物理的妥当性の向上",
      "what": "自己回帰的な動画拡散モデルにおいて、近接するフレーム間の視覚的な連続性のみに頼ることを防ぐため、中間コンテキストなしに遠い未来のフレームを予測する補助目的関数「Future Chunk Prediction (FCP)」を提案しています。追加の事前学習済みエンコーダを必要とせず、既存のデノイジング学習と同時に最適化します。",
      "enables": "標準的な自己回帰学習よりも少ない計算予算で、物理的な妥当性が高い動画生成を実現しました。可視化により、FCPがモデル内により構造化された表現空間を形成することが示唆されています。",
      "why_it_matters": "生成された動画の各フレームが「もっともらしく見える」だけでなく、シーン全体の時間的進化や物理現象をより正確に捉えるワールドモデルの構築に貢献します。",
      "tags": [
        "動画生成",
        "拡散モデル",
        "自己回帰モデル"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.28698",
      "title": "Scaling in Games: Continued Pre-Training For Embodied Agents In Diverse Virtual Worlds",
      "url": "https://arxiv.org/abs/2610.28698",
      "pdf": "https://arxiv.org/pdf/2610.28698",
      "authors": [
        "Kuan Zhang",
        "Yukun Chen",
        "Zhihao Yang",
        "Yue Su",
        "Xiangnan Wu",
        "Zirong Chen"
      ],
      "categories": [
        "cs.AI",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://gamescaling.github.io ; Model: https://huggingface.co/THUSI-Lab/GameScaling",
      "hf_upvotes": 48,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲48"
      ],
      "headline": "仮想世界におけるエンボディドAIの継続事前学習：データ・モデルサイズ・多様性のスケーリング法則",
      "what": "Minecraftなどの仮想環境において、データ量、多様性、モデルサイズ（0.8Bから27B）の3つの軸がエージェントの性能と汎化に与える影響を120通りの構成で調査した研究です。追加の事前学習（Continued Pre-training）の効果を多角的に検証しています。",
      "enables": "検証損失と各パラメータの関係を示すスケーリング法則を明らかにし、3D世界において専門モデルやフロンティアモデルに匹敵する性能を達成しました。データ量の増加は一貫して性能を向上させますが、特定ドメインでの学習は遠いドメインへの汎化を低下させる傾向も確認されました。",
      "why_it_matters": "物理世界とは異なる法則を持つ多様な仮想世界において、汎用エージェントを構築するための最適なリソース配分と、現在の模倣学習ベースのアプローチの限界を提示しています。",
      "tags": [
        "エンボディドAI",
        "スケーリング法則",
        "エージェント"
      ],
      "fetched_at": "2026-10-23T09:27:55.712658+09:00"
    },
    {
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "url": "https://arxiv.org/abs/2610.27999",
      "pdf": "https://arxiv.org/pdf/2610.27999",
      "authors": [
        "Jihai Zhang",
        "Runjia Qian",
        "Kaiqin Kong",
        "Biao Jiang",
        "Puyi Wang",
        "Siru Chen"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page, videos, code and models: https://matrix-game-v4-0.github.io/page/",
      "hf_upvotes": 181,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲181"
      ],
      "headline": "軽量エンジンと動画生成モデルによるリアルタイム操作可能な世界「Matrix-Game 4.0」",
      "what": "ゲームの状態管理を行う軽量エンジンと、その出力を高品質な映像に変換する動画生成モデルを分離したシステムです。自然言語による指示でシーンやルールを動的に変更でき、RTX 5090単体での動作を実現しています。",
      "enables": "480pの解像度において、60FPSの安定したゲームプレイと112msの低遅延を実現しました。1ステップのデノイジング設定では最大83FPSのスループットに達します。",
      "why_it_matters": "生成AIによる「プレイ可能な世界」の構築において、計算コストと遅延の壁を克服し、実用的なフレームレートでのインタラクティブな体験を可能にした点が画期的です。",
      "tags": [
        "動画生成",
        "ゲーム開発",
        "リアルタイム推論"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "url": "https://arxiv.org/abs/2610.27628",
      "pdf": "https://arxiv.org/pdf/2610.27628",
      "authors": [
        "Pan Wang",
        "Yihao Hu",
        "Guangyuan Dong",
        "Yitong Lin",
        "Hang Wang",
        "Zimi Liu"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 147,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲147"
      ],
      "headline": "学習時の16倍の長さまで汎化する状態追跡の再帰学習法「PAR」",
      "what": "ループ型言語モデルにおいて、特定のステップ $k$ での出力が最初の $k$ 回の操作結果と一致するように学習し、再帰状態のノルムを一定に保つ手法です。これにより、学習時より遥かに長いステップの実行を可能にします。",
      "enables": "最大32手の移動を学習したQwen2.5-0.5Bモデルにおいて、512手（学習時の16倍）の移動後の状態を95.5%の精度で追跡することに成功しました。これは既存手法の55.7%を大きく上回ります。",
      "why_it_matters": "Chain-of-Thoughtなどの手法が学習データより長い推論で失敗しやすい問題を、進行状況の明示的な整列と状態のスケーリングによって解決し、計算の「深さ」による汎化能力を向上させました。",
      "tags": [
        "LLM",
        "汎化",
        "状態追跡"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "url": "https://arxiv.org/abs/2610.28354",
      "pdf": "https://arxiv.org/pdf/2610.28354",
      "authors": [
        "Rui Gong",
        "Ruoyu Wang",
        "Yalun Dai",
        "Hao Li",
        "Sidi Yang",
        "Qihao Zhao"
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
      "hf_upvotes": 91,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲91"
      ],
      "headline": "コーディングエージェントに空間認知ツールを統合した「S-Agent 2.0」",
      "what": "汎用的なコーディングエージェント（Qwen等）に、3D知覚ツールキットを装備させた空間推論エージェントです。取得した証拠を永続的な「シーンメモリ」に保存し、自然な空間言語で解釈するループを構築します。",
      "enables": "空間推論ベンチマークMMSI-Benchにおいて、ツールなしのモデルから13.9ポイント、専用システムであるSpatialClawから3.9ポイントの性能向上を達成しました。Gemini-3.8-Flashとの組み合わせでも高い性能を示しています。",
      "why_it_matters": "モデル単体での3D理解の限界を、外部ツールとコード実行による「証拠の解釈ループ」で補完することで、複雑な実世界情報の処理能力を大幅に拡張しました。",
      "tags": [
        "LLMエージェント",
        "空間推論",
        "VLM"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28578",
      "title": "Sage-A1.5: From Long-Horizon Execution to Scientific Exploration with Capability Composition",
      "url": "https://arxiv.org/abs/2610.28578",
      "pdf": "https://arxiv.org/pdf/2610.28578",
      "authors": [
        "Wenjie Lou",
        "Tianshuo Peng",
        "Shiyang Feng",
        "Shengji Tang",
        "Runmin Ma",
        "Ruizhe Chen"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Token-plan for Sage-A1.5: https://discovery.intern-ai.org.cn/token-plan/home?tabIndex=0 model checkpoints: https://huggingface.co/InternScience/Sage-A1.5",
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "適応的な役割分担と自己検証を行う35B規模の科学探査エージェント「Sage-A1.5」",
      "what": "長期間のタスク解決のために、タスクの委譲、並列コラボレーション、戦略の自己修正を行う混合エキスパート（MoE）モデルです。単一の回答生成を超え、証拠の検証や科学的な探索を目的とした設計がなされています。",
      "enables": "複数のサブエージェントが独立した文脈で並列に作業することで、干渉を抑えつつ複雑なタスクを効率的に遂行できます。科学的な問いに対して、検査可能な研究成果物を作成することが可能です。",
      "why_it_matters": "AIエージェントの役割を「命令の実行」から「自律的な科学的発見のパートナー」へと拡張し、長時間の推論が必要な高度な研究タスクへの道を開きました。",
      "tags": [
        "LLMエージェント",
        "科学探査",
        "コラボレーション"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28630",
      "title": "SolarRenderer: Few-Step Generative Reference Rendering",
      "url": "https://arxiv.org/abs/2610.28630",
      "pdf": "https://arxiv.org/pdf/2610.28630",
      "authors": [
        "Guian Fang",
        "Shengju Qian",
        "Dongyue Lu",
        "Junchao Huang",
        "Lutao Jiang",
        "Xin Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical Report; 28 pages, 17 figures, 10 tables; Project page at https://enderfga.cn/SolarRenderer Code at https://github.com/Enderfga/SolarRenderer",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "わずか4ステップで構造から高精細動画を生成する「SolarRenderer」",
      "what": "ゲームエンジン等の粗い構造情報を、高品質なビデオに変換する構造条件付きレンダラーです。33B規模のバックボーンに軽量なLoRAを適用し、参照パスを活用することでポーズや点群などの多様な表現に対応します。",
      "enables": "従来の50ステップ必要なサンプリングと比較して12.3倍高速な4ステップでの描画を実現しました。768p解像度のビデオにおいて、ストリーミング再生が可能なリアルタイム性能を達成しています。",
      "why_it_matters": "特定のエンジンに依存せず、かつ11種類の未知の構造表現（スケルトンや図面等）に対しても汎化する高い制御性能を持ち、動画生成の柔軟性と速度を両立させています。",
      "tags": [
        "動画生成",
        "レンダリング",
        "LoRA"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28594",
      "title": "Learning the 4D World through Point Trajectory Forecasting",
      "url": "https://arxiv.org/abs/2610.28594",
      "pdf": "https://arxiv.org/pdf/2610.28594",
      "authors": [
        "Byungwoo Jeon",
        "Sunghwan Hong",
        "Dohyeon Kim",
        "Jonghoon Lee",
        "Jungwoo Park",
        "Inhee Lee"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "43 pages; 14 figures",
      "hf_upvotes": 41,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲41"
      ],
      "headline": "点軌跡の予測を通じて4次元世界を理解するワールドモデル「VPM」",
      "what": "マルチビューの動画履歴と指示を入力とし、将来の映像と「特定の点の3D軌跡」を同時に予測するモデルです。動画生成と同時に物理的な点の動きを学習させることで、3D空間における一貫性を担保します。",
      "enables": "ロボット操作タスクにおいて、動画のみを学習したモデルと比較して、操作の成功率と3D動作の正確性が向上しました。シミュレーションと実環境の両方で高い汎化性能を示しています。",
      "why_it_matters": "見た目の変化（ビデオ生成）を物理的な動き（軌跡）に紐付けることで、より物理的に正しく一貫した「世界の理解」をモデルに獲得させることができ、高度なロボット制御に寄与します。",
      "tags": [
        "ワールドモデル",
        "ロボティクス",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27719",
      "title": "Push-Pull Attentional Anchoring for Diffusion Concept Erasure",
      "url": "https://arxiv.org/abs/2610.27719",
      "pdf": "https://arxiv.org/pdf/2610.27719",
      "authors": [
        "Nattanat Chatthee",
        "Tagon Sompong",
        "Ekapol Chuangsuwanich",
        "Supasorn Suwajanakorn"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "ECCV"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted to ECCV 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "特定の概念のみを副作用なく削除する拡散モデル学習法「PPAA」",
      "what": "クロスアテンション空間において、特定の概念（著作権物、ヌード、芸術家スタイルなど）を押し出す一方、他の概念のセマンティックドリフト（意味の変質）を抑えるためにコサイン類似度で係留（アンカリング）する手法です。",
      "enables": "Stable Diffusion v1.4やFLUXにおいて、ターゲット以外の画質や内容を損なうことなく、特定の有名人やスタイルの生成を効果的に抑制できることを実験で示しました。",
      "why_it_matters": "従来の概念削除手法では無関係な画像生成の質も低下する「過剰な削除」が課題でしたが、本手法は適応的な閾値を用いることで安全かつ高品質なモデルの修正を可能にします。",
      "tags": [
        "拡散モデル",
        "AIの安全性",
        "著作権保護"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28018",
      "title": "P$^3$-VLM: A Point-based Alternative for Grounded 3D Vision-Language Models",
      "url": "https://arxiv.org/abs/2610.28018",
      "pdf": "https://arxiv.org/pdf/2610.28018",
      "authors": [
        "Anna-Maria Halacheva",
        "Jan-Nico Zaech",
        "Sombit Dey",
        "Luc Van Gool",
        "Danda Pani Paudel"
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
      "comment": "NeurIPS 2026, Spotlight",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "バウンディングボックスの「カンニング」を排除した3D視覚モデル「P3-VLM」",
      "what": "従来の3D視覚言語モデル（VLM）がバウンディングボックス座標からカテゴリを推測してしまう問題を指摘し、代わりに「点（Point）」をプロンプトとして使用する手法です。3つの経路（位置、タスク、コンテキスト）を持つ新しいアーキテクチャを提案しています。",
      "enables": "位置指定付きのキャプション生成において、52.1%というSOTAの精度を達成しました。また、ボックス座標がない状況での推論能力が向上し、未知の環境への汎化性能も改善しました。",
      "why_it_matters": "モデルが視覚情報を使わずに座標だけで回答するショートカット学習を防ぐことで、真の視覚空間推論能力を向上させるための重要な指針を提示しています。",
      "tags": [
        "3Dビジョン",
        "VLM",
        "シーン理解"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28479",
      "title": "Claims of emergence in AI should be grounded in information decomposition",
      "url": "https://arxiv.org/abs/2610.28479",
      "pdf": "https://arxiv.org/pdf/2610.28479",
      "authors": [
        "Christoph Riedl",
        "Fernando E. Rosas"
      ],
      "categories": [
        "cs.AI",
        "cs.HC",
        "cs.IT",
        "cs.LG",
        "cs.MA",
        "math.IT"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS Spotlight Paper",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "AIの「創発」を情報量分解の理論で厳密に定義・評価する枠組み",
      "what": "AIシステムや人間とAIのチームにおいて「創発（Emergence）」や「相乗効果」と呼ばれる現象を、情報量分解（Information Decomposition）を用いて形式化する議論です。個々の構成要素からは得られない「相乗的情報量」の有無を判断基準とします。",
      "enables": "アテンションヘッド、自律エージェント、人間とAIのペアなど、異なるスケールのシステムにおける創発の主張を、偽証可能な理論的基準に基づいて比較・検証することを可能にします。",
      "why_it_matters": "これまで曖昧に使われてきた「創発」という言葉に数学的な根拠を与えることで、マルチエージェント系やモデル内部の機能の進化を、客観的に評価・ disputesできるようになります。",
      "tags": [
        "AI理論",
        "情報理論",
        "マルチエージェント"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28480",
      "title": "SuperMimic: Scaling Humanoid Whole-Body Control with One Differentiable World Model",
      "url": "https://arxiv.org/abs/2610.28480",
      "pdf": "https://arxiv.org/pdf/2610.28480",
      "authors": [
        "Qiayuan Liao",
        "Yiyang Shao",
        "Junfeng Long",
        "Kevin Zakka",
        "Roberto Horowitz",
        "Pieter Abbeel"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "CoRL"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at CoRL 2026 (Oral). Project website: https://supermimic.github.io",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "微分可能なワールドモデルにより人型ロボット制御の学習を1000倍高速化",
      "what": "人型ロボットの全身制御（Whole-Body Control）を、シミュレーターのダイナミクスを学習した「微分可能なワールドモデル」上でのバックプロパゲーションを通じて学習する手法です。強化学習の試行錯誤を減らし、解析的な勾配を利用します。",
      "enables": "1台のGPUで3時間の学習を行うだけで、128台のGPUで7日間学習した最先端の強化学習ベースラインを上回る性能を達成しました。GPU時間にして1000倍以上の計算資源削減に成功しています。",
      "why_it_matters": "膨大な計算資源が障壁となっていたヒューマノイドの制御学習を劇的に効率化し、物理環境へのスムーズな移行（Sim-to-Real）と複雑な動作の獲得を容易にします。",
      "tags": [
        "ロボティクス",
        "ワールドモデル",
        "高速学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28615",
      "title": "KoalaGS: Complexity-Aware Continuous Level of Detail for Gaussian Splatting",
      "url": "https://arxiv.org/abs/2610.28615",
      "pdf": "https://arxiv.org/pdf/2610.28615",
      "authors": [
        "Radu Beche",
        "Raoul de Charette"
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
      "comment": "NeurIPS 2026 (Spotlight). Project page https://rdbch.github.io/koalags",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "計算予算に応じた詳細度を連続的に制御する3Dガウススプラッティング「KoalaGS」",
      "what": "3D Gaussian Splattingにおいて、画像の複雑度を事前知識として利用し、リソースの削減時に優先的に残すべき点を決定する手法です。計算予算の変化に応じて、画質が滑らかに劣化（連続的なLoD）するように設計されています。",
      "enables": "予算が削減された低容量の推論においても、シーンの構造を維持しながら高い品質を保つことが可能です。また、プログレッシブなストリーミング配信において滑らかな遷移を実現しました。",
      "why_it_matters": "モバイルデバイスや低スペックな環境での3D描画において、一つの学習済みデータから端末の性能に合わせた最適なレンダリングを動的に提供できる点が実用的です。",
      "tags": [
        "3Dビジョン",
        "Gaussian Splatting",
        "最適化"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.20424",
      "title": "BizBench: Unveiling Hidden Challenges in Deploying Long-Horizon Agents for Real-World Business",
      "abstract": "Existing long-horizon agent benchmarks often emphasize final task success while providing limited assessment of intermediate execution validity. Yet real-world business operations require agents to navigate extensive, potentially outdated or conflicting policies while satisfying critical constraints throughout execution. These requirements are particularly consequential in high-stakes domains such as payments, where intermediate violations can incur financial losses or regulatory consequences regardless of the final outcome. To bridge this evaluation gap, we introduce BizBench, a multi-turn benchmark grounded in real-world procedures from a leading payments company. Its executable environment integrates 789 knowledge documents and 601 discoverable business tools, with consistent policies, states, and tool behavior. The benchmark comprises 50 tasks involving resource constraints, temporal dependencies, prior commitments, and conflicting or outdated guidance. Each task is validated through reference execution, while deterministic checks assess both goal attainment and execution validity without prescribing a single solution path. Experiments reveal substantial limitations even among frontier models: Claude Opus 5 and GPT-6 Sol achieve strict success rates of only 64.0% and 61.3%, respectively. For Qwen3.8-27B, goal attainment reaches 42.0%, but strict success drops to 32.7%, demonstrating how outcome-based evaluation can mask invalid execution. Beyond success rates, DeepSeek-V4.1-Flash averages 191.3 tool calls per run, approximately 70% more than reference executions, revealing substantial execution overhead. Overall, BizBench establishes a testbed for evaluating and advancing long-horizon agents beyond task completion, toward reliable and constraint-compliant execution in complex business environments.",
      "upvotes": 494,
      "github_stars": 38,
      "github_repo": "https://github.com/ant-intl/BizAgentBench",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.20424",
      "arxiv_url": "https://arxiv.org/abs/2610.20424",
      "title_ja": "BizBench: 実世界のビジネスにおける長期間エージェントの隠れた課題を明らかにする",
      "summary_ja": "実世界の決済業務に基づき、最終結果だけでなく中間工程の制約遵守や一貫性を評価可能な、マルチターンの実行環境ベンチマークを提案。"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "abstract": "GPT-6-Astra demonstrates a level of competence in robotic manipulation and navigation that challenges the conventional paradigm of building specialized models for individual tasks and embodiments. In this report, we ask not only how capable GPT-6-Astra is, but what its capabilities imply for the field. First, we probe the limits of standalone GPT-6-Astra. We conduct a large-scale evaluation across 12 representative benchmarks spanning tabletop manipulation, humanoids, mobile platforms, and dexterous hands. Under a unified protocol that allows in-context learning (ICL) from training-set demonstrations and substantially increases the number of execution steps, GPT-6-Astra achieves unprecedented performance (Fig. 1). Future research may focus on improving 1) the generality of ICL 2) cost and execution time, 3) physical-state verification, 4) recovery from irreversible failures, and 5) long-horizon preservation of progress. Second, we study the agentic harness for embodied control. We identify that close-loop coordination between a high-level \"System 2\" reasoner (i.e., GPT-6-Astra) and a low-level \"System 1\" controller (e.g., π0.5) is costly but effective. Third, we examine GPT-6-Astra on real-world deployment. Our experiments on 8 robot configurations reveal substantial gaps: 1) robot demonstrations required for ICL are expensive to collect, and 2) it is implausible to trade longer execution for higher success rates with physical constraints. Fourth, we envision the next generation of embodied benchmarks. We develop a prototype that 1) derives tasks from real-world needs, 2) provides no in-domain demonstrations, and 3) judges agents on a world clock that keeps running while they deliberate. Taken together, our results suggest that GPT-6-Astra has largely crossed the threshold of embodied competence, but not yet that of practical embodied intelligence.",
      "upvotes": 469,
      "github_stars": 258,
      "github_repo": "https://github.com/OpenSenseNova/SenseNova-RoboRSI",
      "project_page": "https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "comments": 2,
      "org": "SenseNova",
      "url": "https://huggingface.co/papers/2610.22471",
      "arxiv_url": "https://arxiv.org/abs/2610.22471",
      "title_ja": "GPT-6-Astraは身体的知性を達成したか？",
      "summary_ja": "GPT-6-Astraのロボット操作・ナビゲーション能力を12の指標で評価。インコンテキスト学習とステップ数増加により、汎用モデルの身体知能の可能性を検証。"
    },
    {
      "id": "2610.28402",
      "title": "StreamEval: Evaluating Interactive Streaming Video Generation Models",
      "abstract": "As streaming video generation advances, enabling real-time interaction with generated video is becoming increasingly important. We introduce StreamEval, a unified benchmark for interactive streaming video generation spanning five tasks: avatar dialogue, avatar performance, world generation, instruction editing, and reference editing. StreamEval comprises 300 scripted test cases lasting 15-300s, each specifying initial assets, incrementally arriving multimodal requests, and explicit requirements for state changes and content preservation. Performance is assessed along four evaluation dimensions: task execution, state consistency, visual fidelity, and audiovisual coordination, instantiated through ten task-specific metrics on a 0-100 scale. Evaluating 37 distinct models across 300 test cases, we find that high visual quality and identity retention do not necessarily coincide with reliable request execution or sustained state consistency. In particular, request execution remains challenging: the highest task-specific scores are 36.90 for Following among seven avatar-performance models, 25.93 for Following in text-conditioned world generation, and 15.00 for Edit Success among three reported reference-editing models. These findings identify reliable request execution under timing and preservation constraints as a central challenge for advancing omni-modal real-time interactive systems. The leaderboard is available at https://streameval.ai",
      "upvotes": 430,
      "github_stars": 195,
      "github_repo": "https://github.com/StreamEval/StreamEval",
      "project_page": "https://streameval.ai/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.28402",
      "arxiv_url": "https://arxiv.org/abs/2610.28402",
      "title_ja": "StreamEval: インタラクティブ・ストリーミング動画生成モデルの評価",
      "summary_ja": "5つの対話型タスクと300のテストケースを用い、実行力、状態の一貫性、視覚的忠実度、音響と映像の調整の4軸で、リアルタイム動画生成モデルを評価。"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "abstract": "Brain encoding models aim to predict neural responses to stimuli. The most widely used approach fits readouts from frozen pretrained backbones. Using neural data to train large models from scratch or fully fine-tune them after task-pretraining has proven difficult because neural data is costly and limited. We show that parameter-efficient fine-tuning (PEFT) enables us to effectively adapt very large pretrained backbones for brain encoding with a small number of trainable parameters. To make it computationally practical, we exploit the backbone's causal structure to predict multiple timepoints in a single pass instead of using sliding windows, significantly reducing feature-extraction cost. This enables efficient fine-tuning of multimodal backbones with up to 104B parameters, the largest model adapted for brain encoding to our knowledge. Trained with a low-rank adapter (LoRA) and a lightweight readout, our approach consistently improves brain encoding performance across nine diverse multimodal backbones. On the same Qwen3-Omni backbone as the prior state-of-the-art (SoTA), our method BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge. We also show the adapted multimodal backbones remain interpretable: modality attribution recovers the canonical sensory topography that prior work often obtains by construction from separate unimodal encoders, and neural adaptation increases the contribution of audio inputs and cross-modal mixing within the backbone. To scale out the number of adapted models, we develop a multi-LoRA kernel that accelerates joint training of multiple LoRAs on a shared backbone. This enables an ensemble of 200+ adapted models that ranks first on the public Algonauts post-challenge leaderboard at the time of writing. Together, our results highlight PEFT as an efficient and powerful paradigm for brain encoding.",
      "upvotes": 245,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.26802",
      "arxiv_url": "https://arxiv.org/abs/2610.26802",
      "title_ja": "脳エンコーディングに向けたパラメータ効率の良い微調整のスケールアップ",
      "summary_ja": "PEFTを用いて巨大な事前学習済みモデルを脳活動予測に適応。因果構造を利用して複数時点を一度に予測することで、計算コストを大幅に削減。"
    },
    {
      "id": "2610.31329",
      "title": "WeVisOne-VL: Unified Visual Perception from Objects to Pixels",
      "abstract": "Existing vision-language models (VLMs) remain unreliable for fine-grained visual perception. In this report, we present WeVisOne-VL (WeChat Vision All-in-One), a powerful VLM that unifies object-level and pixel-level perception through structured next-token prediction. It supports multiple visual tasks including object detection, referring localization, counting, OCR, segmentation, and matting, enabling localization at any user-specific granularity, from points and boxes to masks and alpha mattes. Architecturally, we integrate a lightweight pixel decoder into the VLM via a special <OBJ> token to generate instance-level pixel outputs. We train the model with a three-stage curriculum SFT followed by mixed-task RL. Across over 30 benchmarks, WeVisOne-VL demonstrates leading performance on both object-level and pixel-level tasks, while maintaining robust rejection for object-absent queries. By releasing WeVisOne-VL to the open-source community, we hope to advance VLMs from broad visual understanding toward truly reliable perception systems for real-world deployment.",
      "upvotes": 221,
      "github_stars": 78,
      "github_repo": "https://github.com/Tencent/WeVisOne-VL",
      "project_page": "https://tencent.github.io/WeVisOne-VL",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.31329",
      "arxiv_url": "https://arxiv.org/abs/2610.31329",
      "title_ja": "WeVisOne-VL: 物体からピクセルまでの統一された視覚認識",
      "summary_ja": "構造化トークン予測により、物体検出からセグメンテーションまで多様な粒度の視覚タスクを統一。軽量デコーダ統合によりピクセルレベルの出力を実現。"
    },
    {
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "abstract": "Moving from controllable videos to genuinely playable worlds requires persistent world state, executable game rules, and low-latency interaction. We outline a roadmap for the next generation of Matrix-Game that separates game execution from visual generation through an executable game harness, and introduce Matrix-Game 4.0 as the first system built on this design. A lightweight game engine maintains world state and executes interaction rules, a multimodal coding agent translates player ideas into game code and dynamic scene captions, and a renderer based on autoregressive video model transforms engine-rendered low-poly proxies into detailed visuals, conditioned on dynamic captions and memory references. This framework provides continuous guidance for visual generation and enables natural-language creation and modification of scenes and gameplay. Our renderer is trained on aligned low-poly and high-fidelity video pairs and distilled into a causal generator that generates in four-frame chunks with one or two denoising steps. Together with targeted inference optimizations, Matrix-Game 4.0 enables 480p, 60 FPS gameplay on a single NVIDIA RTX5090 with a key-press-to-display latency of 112ms. Single-step generation achieves 83FPS steady-state throughput with 18.2GiB of peak GPU memory usage. With fixed prompts, steady-state throughput also reaches 67FPS on an RTX5080 and 58FPS on an RTX5070Ti. We demonstrate customizable shooter and driving games with engine-enforced mechanics, and release code, model weights, and low-poly game assets to support research and creation of playable game worlds.",
      "upvotes": 194,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://matrix-game-v4-0.github.io/page/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.27999",
      "arxiv_url": "https://arxiv.org/abs/2610.27999",
      "title_ja": "Matrix-Game 4.0: リアルタイムで遊べるゲーム世界のための動画モデルの活用",
      "summary_ja": "軽量エンジンと動画生成モデルを分離。コーディングエージェントが指示をコード化し、自己回帰動画モデルが詳細なビジュアルを生成するリアルタイム遊戯システム。"
    },
    {
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "abstract": "Reconstructing human activity from egocentric video requires more than recovering individual 3D components: the observer's motion, surrounding geometry, and hand-object interactions must fit together in a consistent world. Achieving this coherence requires both joint reconstruction and aligned supervision, yet existing methods and datasets offer limited support for either. We present EgoXperience, a full-stack paradigm that addresses these needs through data collection, automatic annotation, unified modeling, and benchmarking. Central to EgoXperience is an automatic annotation engine, EgoX-Engine, that couples geometrically verified object tracking with SLAM-based world alignment, yielding consistent supervision for the camera, scene, hands, and objects. This yields EgoX-Data-6M, a 50-hour dataset of task-driven manipulation and locomotion within and across indoor and outdoor environments, with second-level task captions. We carefully select one hour across these activity categories as EgoX-Bench to evaluate joint reconstruction. To translate this supervision into reconstruction, we introduce EgoX, trained with EgoX-Data-6M and complementary annotations from additional public datasets. Given monocular egocentric video and first-frame object masks, our model achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame with a single forward pass. Extensive experiments demonstrate state-of-the-art performance across scene estimation and world-space hand-object pose recovery. Against the strongest evaluated baselines, EgoX reduces camera, hand, and depth errors by 68.9%, 65.6%, and 42.9%, and improves object pose scores by 28.0%.",
      "upvotes": 188,
      "github_stars": 25,
      "github_repo": "https://github.com/Ropedia/EgoXperience",
      "project_page": "https://ropedia.github.io/EgoXperience",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26625",
      "arxiv_url": "https://arxiv.org/abs/2610.26625",
      "title_ja": "EgoXperience: 人間の経験からの世界に根ざした一人称視点表現の学習",
      "summary_ja": "一人称視点映像から3D復元を行うための枠組み。自動注釈エンジンにより、物体追跡とSLAMを統合した幾何学的に整合したデータセットを構築。"
    },
    {
      "id": "2610.26549",
      "title": "Holi-World: Building Holistic World Intelligence from Human-Ego Experience",
      "abstract": "Human egocentric experience offers a rich foundation for learning how the world is organized and how it changes through interaction. Realizing this potential at scale requires turning growing volumes of recordings into learning resources that connect scene structure, object semantics, and interaction histories across viewpoints and time, while reducing dependence on costly manual annotation. We introduce HOLI-WORLD, an integrated ecosystem connecting experience capture, world representation, automated data construction, model learning, and independent evaluation. To sup- port learning at scale, HOLIWORLD-Foundry combines complementary static and dynamic perception to automatically construct world records that connect persistent scene structure and evolving object states with interaction histories and supporting observations. HOLIWORLD-Data organizes these records from approximately 100 self-collected scenes into grounded learning resources, including approximately 80K QA pairs used to train HOLIWORLD-VL-4B. Independent human annotations of heldout recordings form HOLIWORLD-Bench, supporting evaluation of both annotation quality and learned spatial and temporal understanding. Experiments on ScanNet, ScanNet++, Aria Digital Twin, and HOLIWORLD-Bench demonstrate strong performance in static perception and dynamic tracking, while training on HOLIWORLD-Data substantially improves HOLIWORLD-VL-4B's spatial and temporal reasoning on HOLI- WORLD-Bench and EgoDynamic4D. HOLIWORLD provides a practical foundation for expanding learning resources from the continuous flow of human experience and advancing machine understanding of the dynamic world.",
      "upvotes": 172,
      "github_stars": 14,
      "github_repo": "https://github.com/Ropedia/holi-world",
      "project_page": "https://ropedia.github.io/holi-world",
      "comments": 3,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26549",
      "arxiv_url": "https://arxiv.org/abs/2610.26549",
      "title_ja": "Holi-World: 人間の一人称視点経験からの包括的な世界知能の構築",
      "summary_ja": "一人称視点映像からシーン構造や相互作用の履歴を自動構築するエコシステム。静的・動的認識を組み合わせたFoundryにより、大規模な学習リソースを提供。"
    },
    {
      "id": "2610.30926",
      "title": "Making MLLM Latents Matter: Factor-Aware Predictive Learning for Cinematic Video Generation",
      "abstract": "Cinematic video generation requires both temporal inference from limited inputs (i.e., sparse rather than frame-by-frame guidance) and factor-aware control of character, scene, action, and camera. Multimodal large language models (MLLMs) offer useful priors for both capabilities, but their representations are not automatically actionable for video generation: a Video Diffusion Transformer (DiT) may bypass them through native conditioning pathways, and using them does not ensure either factor-aware control or generation-compatible temporal prediction. We propose Factor-Aware Predictive Learning (FAPL), which establishes effective MLLM latent use as a shared prerequisite and then targets the two capabilities with complementary learning signals. First, latent-only generator grounding trains the DiT with a frozen MLLM and connector, strengthening the DiT's use of MLLM latents for generation. Second, for factor-aware control, paired videos specify a target-factor change and non-target preservation, and factor-span replacement trains the DiT to realize this relationship in its output. Third, for temporal inference, text-only and text-plus-complete-video observations share a video target, and the trained DiT is then frozen while the MLLM and connector are optimized through it. This final stage trains limited-input representations for generation while retaining complete-observation reconstruction as a complementary training mode. Extensive experiments demonstrate our consistently better performance on three cinematic video generation tasks (i.e., sparse-to-video, factor-aware editing, and multi-shot generation) over baselines and validate FAPL's contributions to MLLM feature use, temporal control, and factor coordination.",
      "upvotes": 163,
      "github_stars": 1,
      "github_repo": "https://github.com/Songlin1998/ShotVerse2.0",
      "project_page": "https://shotverse.github.io/fapl/",
      "comments": 1,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.30926",
      "arxiv_url": "https://arxiv.org/abs/2610.30926",
      "title_ja": "MLLM潜在変数の活用: 映画のような動画生成のための要素認識型予測学習",
      "summary_ja": "疎な入力から高品質な動画を生成する手法。MLLMの潜在表現を、キャラやカメラ制御などの要素を意識した予測に活用し、DiTでの生成制御を向上。"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "abstract": "Looped language models can run more iterations at test time, but additional iterations need not help them solve longer problems. For sequential state tracking, final-answer supervision does not specify how far each iteration should advance, and repeated updates can change the scale of the recurrent state. We introduce Progress-Aligned Recurrence (PAR), which trains the prediction at iteration k to match the state after the first k operations and rescales recurrent states to their first-iteration norms. On swap-S_5, a Qwen2.5-0.5B model trained on at most 32 moves achieves 95.5\\% mean full-state accuracy at 512 moves, or 16times the training length, compared with 55.7\\% reported for RLT and 0.8\\% for explicit chain of thought on the same backbone. Controlled S_5 ablations show that removing norm anchoring reduces the extrapolation factor from 16times to below 2.2times, and replacing progress-aligned targets with final-answer supervision reduces it to at most 8times. A learned completion readout selects when to answer without a supplied stopping depth. When intermediate labels are unavailable, prefix self-distillation induces the correspondence from shorter problem prefixes using only final answers. The gains apply across sequential state-tracking tasks, establishing the task structure required for depth extrapolation. These findings support training intermediate predictions and state scale together to make additional recurrent depth useful for longer problems.",
      "upvotes": 160,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.27628",
      "arxiv_url": "https://arxiv.org/abs/2610.27628",
      "title_ja": "PAR: 状態追跡における長さの汎化のための進行整合回帰",
      "summary_ja": "ループ型言語モデルの反復を各操作の進捗に合わせる訓練手法。訓練時の16倍の長さのタスクでも、高い状態追跡精度を維持することに成功。"
    },
    {
      "id": "2610.29989",
      "title": "Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation",
      "abstract": "Autoregressive video diffusion models generate videos chunk by chunk, yet producing plausible continuations does not guarantee that they capture how scenes evolve. Under teacher forcing, strong temporal redundancy may allow local visual continuity to serve as a shortcut for current-chunk denoising, reducing the pressure to model visual evolution. We introduce Future Chunk Prediction (FCP), an auxiliary objective jointly optimized with teacher-forced denoising that predicts temporally separated chunks without access to the intervening visual context. Drawing supervision directly from training videos, FCP requires no additional pretrained visual encoder and leaves autoregressive inference unchanged. Our method achieves superior physical plausibility over standard teacher-forced autoregressive training with a lower overall training compute budget, highlighting the effectiveness and efficiency of future-chunk supervision for modeling visual evolution. Intriguingly, our visualizations suggest that FCP fosters a more structured representation space, which may be valuable for building autoregressive world models.",
      "upvotes": 158,
      "github_stars": 80,
      "github_repo": "https://github.com/TencentARC/Looking-Ahead",
      "project_page": "https://hellorpg.github.io/looking-ahead/",
      "comments": 2,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.29989",
      "arxiv_url": "https://arxiv.org/abs/2610.29989",
      "title_ja": "先を見据えて: 自己回帰型動画生成における将来の進化のモデリング",
      "summary_ja": "補助目標「Future Chunk Prediction」を導入し、中間の文脈なしで将来の動画チャンクを予測させることで、動画生成モデルの進化予測能力を向上。"
    },
    {
      "id": "2610.19159",
      "title": "Into the Unknown: Benchmarking AI agents on open scientific research problems",
      "abstract": "Can AI agents carry out research on open scientific problems? We introduce Into the Unknown, a benchmark that provides an agent with a science paper along with a research direction to pursue and tasks it to write a follow-up paper. We work with scientists at US Department of Energy (DOE) national laboratories, who each contribute an unpublished follow-up direction from their own work together with the necessary conditions a submission must meet. While assessing the quality of a follow-up paper is challenging in general, using these conditions to form a rubric makes evaluation more tractable for research problems that have no reference answer. We have nine frontier agents write 15 follow-ups each, spanning quantum computing, plasma physics, computational chemistry, materials science, and scientific machine learning domains. None of the 135 submissions satisfies all the conditions, and 114 fail our integrity check, most often because the paper claims work that was never done or reports numbers that contradict the recorded evidence. Overall, agents readily produce papers that look like follow-ups, but none meets the standard of the domain scientist, leaving substantial headroom. Our code and data are publicly available.",
      "upvotes": 158,
      "github_stars": 20,
      "github_repo": "https://github.com/prometheus-eval/into-the-unknown",
      "project_page": "https://prometheus-eval.github.io/into-the-unknown/viewer/#/",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.19159",
      "arxiv_url": "https://arxiv.org/abs/2610.19159",
      "title_ja": "未知への挑戦: 未解決の科学研究問題におけるAIエージェントのベンチマーク",
      "summary_ja": "未発表の科学研究テーマに対し、AIが続編論文を執筆する能力を評価。専門家が作成したルーブリックに基づき、正解のない研究課題への遂行能力を測定。"
    },
    {
      "id": "2610.30181",
      "title": "Deep Search in Real-World Web Environments",
      "abstract": "Despite substantial progress in Deep Search agents, their ability to conduct end-to-end research in real-world open Web environments remains insufficiently evaluated. Unlike static retrieval settings, information on the real-world Web is distributed across diverse sources, modalities, and heterogeneous formats, often involving complex interaction mechanisms that require agents to autonomously search for, access, and integrate relevant evidence during execution. To address this gap, we introduce the OpenDS task, designed to evaluate agents' ability to perform multi-step deep search in the live, open Web. This task requires agents to autonomously explore the real Web, discover and connect relevant evidence from multiple independent sources through Web search, browser interaction, and evidence processing, and ultimately determine a unique factual answer. Building on this task formulation, we construct OpenDS-World, a benchmark comprising 200 challenging tasks spanning diverse information modalities, heterogeneous file formats, and interactive access requirements, with independent human verification to ensure evidence validity and answer uniqueness. We evaluate 12 frontier models under a unified tool environment and execution protocol. The best-performing model achieves 39.0% accuracy, while human evaluation across 1,000 independent attempts yields 21.1% accuracy. Further analyses of tool usage, search cost, termination behavior, and failure recovery reveal substantial differences in research strategies across models, as well as persistent challenges in tool coordination and long-horizon search management. OpenDS-World provides a unified evaluation platform for systematically assessing and advancing agents' autonomous deep search capabilities in real-world open Web environments.",
      "upvotes": 151,
      "github_stars": 20,
      "github_repo": "https://github.com/Yu-xm/OpenDS",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.30181",
      "arxiv_url": "https://arxiv.org/abs/2610.30181",
      "title_ja": "実世界のWeb環境におけるディープサーチ",
      "summary_ja": "動的なWeb環境でのエンドツーエンドな調査能力を評価するOpenDSタスクを提案。多様なソースを自律的に探索、接続、統合する能力を測定。"
    },
    {
      "id": "2610.29997",
      "title": "DONIC: Generalist Dexterous Bimanual Tracking Control from Human Demonstrations",
      "abstract": "Despite recent progress in dexterous reference tracking, existing models focus primarily on single-hand manipulation and a limited range of interactions, leaving the bimanual dexterous behaviors common in real life unaddressed. The scarcity of contact-rich bimanual manipulation data and the increased complexity of coordinating contacts make developing a generalist bimanual tracker particularly challenging. Therefore, we present 1) DONIC, the first generalist bimanual tracker jointly trained across operation categories and human-motion sources, together with 2) BiHOI, a multi-view dataset of 1,575 sequences spanning 229 objects and emphasizing sustained bimanual interaction, where reconstructed interactions are retargeted into robot references. DONIC combines proximal policy optimization with behavioral cloning in a feedback loop that recycles verified successful executions into training demonstrations. An object-centered per-hand reward maintains object-motion feedback while supervising each hand according to its reference contact role. Clip-Centered Advantages remove reference-dependent advantage offsets while preserving within-trajectory differences. Together, these designs enable one single policy to learn coordinated manipulation across heterogeneous references. Without finetuning, a single checkpoint achieves 86.79% success on unseen trajectories of training objects and 57.32% on held-out objects, surpassing the state-of-the-art bimanual tracking baselines by 77.36 and 45.73 percentage points.",
      "upvotes": 150,
      "github_stars": 34,
      "github_repo": "https://github.com/Ropedia/DONIC",
      "project_page": "https://ropedia.github.io/DONIC/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.29997",
      "arxiv_url": "https://arxiv.org/abs/2610.29997",
      "title_ja": "DONIC: 人間のデモンストレーションからの汎用的な両手器用追跡制御",
      "summary_ja": "接触の多い両手操作を学習した初の汎用トラッカー。多様な物体と相互作用を含む大規模データセットBiHOIを構築し、複雑な両手動作の再現を実現。"
    },
    {
      "id": "2610.26855",
      "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
      "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, Ψ_0, ω-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
      "upvotes": 150,
      "github_stars": 57,
      "github_repo": "https://github.com/Ropedia/ropedia-w0",
      "project_page": "https://ropedia.github.io/ropedia-w0/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26855",
      "arxiv_url": "https://arxiv.org/abs/2610.26855",
      "title_ja": "Ropedia W0: 人間の経験による多様な身体間での移動・操作世界モデルの拡張",
      "summary_ja": "人間とロボットのデータを統合した一人称視点の世界モデル。統一された運動学的表現により、身体の異なるロボット間で移動と操作を横断的に学習。"
    },
    {
      "id": "2610.26659",
      "title": "SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?",
      "abstract": "Spatial intelligence requires agents to actively acquire visual evidence and integrate observations into a coherent representation of the three-dimensional world. Yet spatial question answering offers limited evidence of whether models can construct accurate metric maps through autonomous exploration. We introduce SpatialScout, a benchmark for evaluating vision-language model (VLM) agents on active object-level 3D mapping. SpatialScout comprises 80 diverse indoor scenes containing 3,140 target objects. Given an object inventory, RGB observations, camera calibration, and camera poses, agents control a camera to explore each scene and estimate object centers in a shared coordinate frame. The task requires coordinating viewpoint selection, cross-view association, geometric estimation, and map revision under bounded interaction budgets. Evaluation jointly measures localization accuracy and target coverage through object-scale overlap scores that penalize missing predictions. Experiments with frontier VLMs reveal substantial limitations: the strongest evaluated model, Claude Opus 5.5, achieves a mean overlap score of 41.71%, with 47.23% of targets exceeding an intersection-over-union (IoU) threshold of 0.5 and only 3.25% exceeding 0.9. These results reveal a substantial gap between recovering coarse object layouts and constructing complete, precise metric maps. SpatialScout provides a quantitative testbed for developing agents that build reliable 3D spatial representations through active perception. Code is available at https://github.com/JesseZZZZZ/SpatialScout.",
      "upvotes": 147,
      "github_stars": 9,
      "github_repo": "https://github.com/JesseZZZZZ/SpatialScout",
      "project_page": "https://spatialscout.osslab-pku.org",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2610.26659",
      "arxiv_url": "https://arxiv.org/abs/2610.26659",
      "title_ja": "SpatialScout: VLMエージェントは自律的に3Dシーンを探索しマッピングできるか？",
      "summary_ja": "VLMエージェントの能動的な3Dマッピング能力を評価。80の屋内シーンを舞台に、カメラ操作を通じた物体の中心位置の推定精度を測定するベンチマーク。"
    },
    {
      "id": "2610.28577",
      "title": "Cache Engineering for Agents",
      "abstract": "Large Language Model (LLM) agents can handle increasingly complex tasks, navigating long trajectories of observations and actions. As these trajectories grow, key-value (KV) cache I/O and storage become the dominant cost. Trajectories can also exceed the LLM's maximum context length, requiring control over active cache growth. Prior work uses context engineering to reduce cache size by trimming or summarizing history. However, modifying the trajectory prefix invalidates subsequent cached states and triggers costly re-prefilling of retained context. Task accuracy can also suffer when too little context is retained to limit re-prefill costs. We propose cache engineering as a new scheme. It allows agents to directly control their active KV cache without modifying the trajectory or re-prefilling retained context. Specifically, agents can proactively use drop to exclude selected cache from future attention and repos to adjust retained keys' position encodings. We formalize these cache operations and identify history dependence as a serving challenge: identical token sequences can yield different cache states under different cache operation sequences, making prefix matching insufficient for correct cache reuse. Thus, we co-design the AKV serving engine. It provides a stateless interface compatible with existing serving APIs, while internally managing stateful cache reuse, eviction, and restoration. Experiments show that a tool-response rolling-drop cache policy improves average benchmark scores by 1.7 points and reduces average cost by 27.7%, compared with conventional threshold-triggered summarization. With AKV, it achieves up to 1.2x the output throughput and a 1.5x speedup in P95 request latency. Recursive self-improvement of cache policies further reduces cost by 7.1% over expert design. Our code is at https://github.com/thu-nics/AKV.",
      "upvotes": 139,
      "github_stars": 48,
      "github_repo": "https://github.com/thu-nics/AKV",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/akv/",
      "comments": 1,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.28577",
      "arxiv_url": "https://arxiv.org/abs/2610.28577",
      "title_ja": "エージェントのためのキャッシュ・エンジニアリング",
      "summary_ja": "KVキャッシュをメモリ階層のように管理する新手法。再計算を回避しつつ、長期タスクにおけるスループット向上と、コンテキスト長制限への適応を両立。"
    },
    {
      "id": "2610.21783",
      "title": "Learning to Think and Explore in 3D World",
      "abstract": "We study how vision-language models (VLMs) can learn to think and actively explore in 3D space. Instead of providing multi-view images, videos, or 3D representations to the model, we preserve the native visual encoding of VLMs, i.e., a single image, one at a time, just like humans, and treat the 3D representation only as an environment with which the model can interact through actions (e.g., move left) and observations (rendered images). Each rollout begins from an initial first-person view and a visual question. The model can then iteratively reason, navigate, and reorient its viewpoint before committing to a final answer. Following an initial trajectory-supervised finetuning, we apply reinforcement learning (RL) with rewards driven primarily by final-answer correctness. Crucially, RL provides no direct supervision over which viewpoints the model should visit or which exploration actions it should take. Instead, the model must learn an effective exploration policy solely from the extent to which its interactions improve performance. Across six 3D benchmarks, our model ACT3D achieves an average accuracy of 53.2% that improves its base Qwen model by 22.0% and surpasses proprietary Gemini 3.6 Flash. ACT3D also outperforms existing open-source 3D methods while using 50-70% fewer input frames, and generalizes to unseen domains with an average improvement of 5.9% over its supervised initialization. Further analysis reveals adaptive, question-conditioned exploration. Performance gains over the base model increase from 0.6% on questions answerable from the initial view to 16.3% on those requiring extensive exploration. ACT3D searches for occluded targets, avoids unnecessary exploration, and acquires complementary viewpoints for spatial comparisons. These findings demonstrate that outcome-based RL enables VLMs not only to reason over visual evidence, but also to learn when and how to acquire it.",
      "upvotes": 139,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://williamium3000.github.io/act3d/",
      "comments": 2,
      "org": "University of California at San Diego",
      "url": "https://huggingface.co/papers/2610.21783",
      "arxiv_url": "https://arxiv.org/abs/2610.21783",
      "title_ja": "3D世界で思考し探索することを学ぶ",
      "summary_ja": "VLMが行動と観察を繰り返して3D空間を自律的に探索し、視覚的な質問に答える手法。強化学習を用いて、思考プロセスとナビゲーション戦略を最適化。"
    },
    {
      "id": "2610.21114",
      "title": "Spectral-Spatial Interpretation",
      "abstract": "Post-hoc image explanations usually show where a model looks using spatial heatmaps or indicate which channels matter using global channel scores. These separate views are limiting for multispectral data because channel relevance is often spatially localized and physically meaningful. We introduce Spectral-Spatial Interpretation (SSI), a full-grid attribution method over position-channel players (g,c). For each spatial position, SSI fixes the observed surrounding context, defines a conditional game over the channels at that position, and applies the Shapley value to this local game. The result is a full spectral-spatial attribution matrix rather than a single heatmap or a global channel ranking. SSI has a clear local interpretation. It satisfies Shapley fairness within each position, and aggregating its channel attributions exactly recovers the position-level contextual contrast obtained by replacing that position with the baseline. SSI also differs from context-averaged Owen-style hierarchical accounting, which uses the same position-channel grouping but averages over external spatial coalitions. On HLS Burn Scar, SSI outperforms an MC-Owen estimator across retained attribution metrics while using only about 6% of its evaluation budget. Across CUB-200, EuroSAT, and HLS Burn Scar under both per-channel mean and zero baselines, SSI achieves the best joint deletion and insertion AUC over dense, flat, and rank-1 baselines, yields the strongest spectral hit rates and channel deletion, and leads spatial localization on both annotated datasets. Code is available at https://github.com/AtheavenMa/Spectral-Spatial-Interpretation.",
      "upvotes": 136,
      "github_stars": 18,
      "github_repo": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "project_page": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21114",
      "arxiv_url": "https://arxiv.org/abs/2610.21114",
      "title_ja": "SSI: 分光空間解釈",
      "summary_ja": "多波長データの判定根拠を空間と波長の両面で可視化する手法。各座標のチャンネルに対しシャープレイ値を適用し、物理的意味を持つ詳細な寄与度マップを生成。"
    },
    {
      "id": "2610.26825",
      "title": "MemT-1.0: Towards Memory-Native Evolution",
      "abstract": "Memory-native evolution requires making memory an intrinsic capability of foundation models, enabling them to continuously accumulate and utilize information. To this end, we introduce MemT-1.0, a new architecture of memory foundation models that internalize memory as part of model computation. Building on Metis, MemT-1.0 employs Gated DeltaNet-2 with a stable token-level memory update mechanism within each turn. We further introduce Mixture-of-Storage to scale native memory capacity. Following a deliberate backbone preparation, we develop a two-stage training pipeline consisting of continued pre-training and post-training, supported by 34B tokens of training data and efficient training and inference infrastructure. We release a model family comprising MemT-1.0-Nano and MemT-1.0-Flash, and conduct a comprehensive evaluation of memory and general capabilities. The results show that they outperform the parametric memory baselines on average and remain competitive with retrieval-augmented methods, while largely preserving general capabilities. At a history length of 128K tokens, MemT-1.0-Nano achieves approximately 1.86times end-to-end inference speedup and a 66times reduction in persistent storage relative to full context KV cache. By internalizing retrieved procedural experience, MemT-1.0 improves task success on agentic tasks, providing a practical step toward memory-native evolution.",
      "upvotes": 135,
      "github_stars": 370,
      "github_repo": "https://github.com/MemTensor/MemT-1.0",
      "project_page": "https://huggingface.co/collections/MemTensor/memt-1",
      "comments": 3,
      "org": "MemTensor",
      "url": "https://huggingface.co/papers/2610.26825",
      "arxiv_url": "https://arxiv.org/abs/2610.26825",
      "title_ja": "MemT-1.0: メモリネイティブな進化に向けて",
      "summary_ja": "メモリを計算の一部として内蔵した新アーキテクチャMemT-1.0を提案。Mixture-of-Storageにより容量を拡張し、継続的な情報の蓄積と利用を可能に。"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "abstract": "Experience generated during deployment offers an opportunity for robots to improve policy reliability through learning from their own executions. However, learning through human corrections requires teleoperators to monitor execution and intervene when policies fail, a demand that is difficult to meet as robot fleets grow. We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience to improve a common policy. We realize CEL through failure-guided experience retrieval fine-tuning (FERT), which uses failure contexts from robot executions to retrieve relevant trajectory segments from the fleet's shared successful experience and uses their actions as supervision for policy updates, without collecting additional expert demonstrations or corrective actions. A fault-tolerant asynchronous training system (FATS) coordinates experience collection, policy optimization and policy distribution despite local interruptions within the robot fleet. Across five real-world manipulation tasks, the resulting policies achieve success rates of 93.3-99.2%, evaluated over 120 trials per task on robots excluded from training data collection. With collection time per robot held fixed, larger fleets provide more experience and FERT generally achieves higher success rates across the evaluated sizes. On multi-stage phone packaging, learning with 96 robots increases success from 79.2% to 98.3%. These results support collective experience as a practical basis for scalable robot learning and a path towards improving policy reliability during deployment without collecting additional expert corrective actions.",
      "upvotes": 126,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cel-robot-learning.github.io",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25736",
      "arxiv_url": "https://arxiv.org/abs/2610.25736",
      "title_ja": "フリート経験からの学習: ロボットのための集団学習パラダイム",
      "summary_ja": "複数のロボットが失敗経験を共有し、成功例から関連箇所を検索・学習するCELを提案。人間の介入を減らしつつ、配備後のロボットの信頼性を向上。"
    },
    {
      "id": "2610.18784",
      "title": "Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents",
      "abstract": "Long-horizon agents accumulate progress in persistent task state, yet repeatedly process interaction histories describing how that progress was achieved. This raises a natural question: can long-horizon context instead be organized around reusable progress rather than the history that produced it? In this paper, we introduce CarryOn, an object-oriented context runtime that organizes continuation around reusable task objects. Rather than treating compressed histories or reconstructed accounts of progress as the primary basis for continuation, CarryOn builds a context view from continuation carriers, complementary execution context, and a live tail of recent interactions. A core challenge is keeping this reusable basis valid after its surrounding history is retired: how can CarryOn update the basis without reconstructing the full representation at every fold? CarryOn maintains carrier records across folds, revising affected records against bound evidence and applicable environment checks while carrying forward unaffected records and jointly updating execution context. Experiments on OSWorld 2.0 and BrowseComp-Plus show improved gains of 5.8% and 7.0% while reducing total token usage by 51.9% and 22.9%, respectively. Project page: https://ethannju.github.io/carryon",
      "upvotes": 122,
      "github_stars": 5,
      "github_repo": "https://github.com/Ethannju/carryon",
      "project_page": "https://ethannju.github.io/carryon/",
      "comments": 3,
      "org": "McAuley-Lab",
      "url": "https://huggingface.co/papers/2610.18784",
      "arxiv_url": "https://arxiv.org/abs/2610.18784",
      "title_ja": "Pack Light, CarryOn: 長期間エージェントのためのオブジェクト指向コンテキストの構築",
      "summary_ja": "履歴ではなく、再利用可能なタスクオブジェクトを中心にコンテキストを構成する手法。履歴の肥大化を防ぎつつ、重要な情報を保持して長期タスクを継続。"
    },
    {
      "id": "2610.25078",
      "title": "CoEvo-RSI: When Harnesses Evolve, Which Models Should Follow?",
      "abstract": "Model--harness co-evolution has emerged as a prominent paradigm for recursive self-improving (RSI) agents, jointly evolving their execution scaffolds and intrinsic capabilities. We study the persistent yet often overlooked brain--body mismatch problem in this paradigm, where an evolving harness (body) demands behaviors its model (brain) has not learned or restricts capabilities it already possesses. We introduce CoEvo-RSI, a RSI framework that advances model--harness co-evolution through agent-driven, bidirectional historical inheritance. Drawing on a shared evolutionary archive and execution feedback, a meta-agent coordinates harness development from historical designs with model checkpoint selection or merging and subsequent adaptation under the selected harness, aligning inherited capabilities with evolving execution requirements to reduce brain--body mismatch. Using only supervised fine-tuning (SFT) on its own rejection-sampled trajectories, CoEvo-RSI makes Qwen3.5-9B competitive with larger models across diverse vertical applications, including multi-agent failure attribution, role-aware text-to-SQL, and smart-home instruction following. It surpasses DeepSeek-V4-Pro on TraceElephant (+14.16 agent accuracy) and GLM-5.3 on HomeBench VM (+4.90 success rate), underscoring the need for brain--body alignment and the potential of bidirectional historical inheritance to advance agent co-evolution.",
      "upvotes": 120,
      "github_stars": 8,
      "github_repo": "https://github.com/SuJQ0722/CoEvo-RSI",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25078",
      "arxiv_url": "https://arxiv.org/abs/2610.25078",
      "title_ja": "CoEvo-RSI: ハーネスが進化する時、どのモデルが従うべきか？",
      "summary_ja": "エージェントの実行構造（ハーネス）と能力（モデル）を共に進化させるRSIフレームワーク。歴史的継承と双方向のフィードバックにより、両者の不一致を解消。"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "abstract": "Agents built on vision language models (VLMs) now compete with learned policies on robot manipulation leaderboards. We ask how far a coding agent can go when it controls a robot instead of a computer, and where it stops. Our system, HexaShell, keeps the harness thin: it only turns the agent's commands into robot motion. The agent drives a robot with two arms through one command line. It sees three RGB cameras and knows their calibration. After each failed attempt, the agent reads the log, finds the cause, and writes or fixes small programs called tools. In this way it keeps what it learns as code, as a coding agent does when it fixes a failing test. The tools may use only what the robot observes. They use triangulation to find where objects are, relative to each other and to the gripper. If two cameras see the same point, the point lies where the two camera rays meet. If a point lies on a known plane, such as the table or the top of a block, it lies where its ray meets that plane. When the head camera is not enough, the robot moves a wrist camera to get a second view. We build the tools on only ten layouts of one seed per task, then freeze them and test them on ten new layouts of the same seed. We use Codex with GPT-6-Astra at medium reasoning effort. On all 42 RoboDojo tasks, HexaShell reaches a success rate of 39.7% and a progress score of 48.0, averaged in the same way as the leaderboard. This is a new state of the art on RoboDojo. The limit is contact, not reasoning: pushing reaches 92.5% and memory tasks 65.0%, but tight insertion only 8.3%. When the agent fails, it usually sees the failure but cannot make the motion work. We open source the tools evolved so far at https://github.com/HexaFuture/HexaShell.",
      "upvotes": 119,
      "github_stars": 126,
      "github_repo": "https://github.com/HexaFuture/HexaShell",
      "project_page": "https://hexafuture.ai/home/",
      "comments": 3,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2610.23479",
      "arxiv_url": "https://arxiv.org/abs/2610.23479",
      "title_ja": "HexaShell: ロボットコーディングエージェントとしてのVLMの限界を探る薄いハーネス",
      "summary_ja": "VLMエージェントが失敗から学び、ツール（コード）を自作・修正してロボットを動かすシステム。薄いインターフェースによりVLMの潜在能力と限界を検証。"
    },
    {
      "id": "2610.11942",
      "title": "Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents",
      "abstract": "A login screen that appears after a tap on Sign in is expected; the same screen after a tap on View order is an attack. For GUI agents, safety is therefore a property of the transition rather than of the screen, and a monitor that inspects only screens can be defeated by reusing a legitimate one. Judging a transition requires an expectation of what should have followed the action. Existing GUI world models provide one, but they output it as text, code, or images, so checking it against the observed screen requires a second model to judge the two. We argue that a world model meant for verification should instead predict in the space in which observations are encoded, and present LGWM, a decoder-free, action-conditioned world model that predicts the representation of the next screen directly, trained without semantic annotation on 1.85M real GUI transitions. Verification reduces to a vector comparison, and the same signal reveals whether a mismatch is harmful. We evaluate on RSWT-BENCH, a diagnostic where each credential screen appears under both a legitimate and a hijacked transition, so detectors that see only the screen are at chance by construction. The training-free score reaches 0.987 AUC at 17 ms per decision, on par with the strongest closed-source VLMs and about ten AUC points above generative GUI world models at over three orders of magnitude lower latency. The residual direction reaches 0.953 AUC at separating harmful from benign violations, where prompted VLMs are near chance. Further analyses show that the prediction is a usable future state rather than an anomaly score. World models have mostly served as simulators or planners; our results point to a third role, verification, for which predicting in representation space is the natural design.",
      "upvotes": 115,
      "github_stars": 2,
      "github_repo": "https://github.com/jiamingzhang94/lgwm",
      "project_page": "https://jiamingzhang.netlify.app/lgwm/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.11942",
      "arxiv_url": "https://arxiv.org/abs/2610.11942",
      "title_ja": "正しい画面、誤った遷移: GUIエージェントの検証者としての世界モデル",
      "summary_ja": "GUI操作後の画面遷移が期待通りかを確認する検証モデルLGWMを提案。潜在空間での予測を用いることで、予期せぬ遷移や攻撃を検知し安全性を向上。"
    },
    {
      "id": "2610.26860",
      "title": "OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory",
      "abstract": "Multimodal large language models (MLLMs) have made rapid progress on visual reasoning, yet many tasks require evidence that is difficult to obtain through internal reasoning alone: our controlled study on 22 benchmarks shows that simply increasing the inference budget of the base model yields only modest gains. Such tasks demand grounded perception, external knowledge, and numerical measurements obtained through heterogeneous tools, whose outputs must be made interpretable to the model and retained across reasoning steps. We introduce OpenVLHarness, a multimodal reasoning harness organized around a capability layer and persistent multimodal memory. The capability layer combines task-level tool interfaces with evidence rendering, providing consistent access to heterogeneous backends and converting their outputs into model-readable observations. Persistent multimodal memory retains the corresponding images, structured data, and web references as addressable artifacts throughout each query. A coding interface executes generated programs over stored data, enabling computations that combine results from multiple tools. Together, these mechanisms support an iterative process of acquiring, inspecting, and composing multimodal evidence. Evaluated on 22 benchmarks with eight open and proprietary backbones, OpenVLHarness improves average scores by 9.7-12.6 points over matched no-tool baselines, including +11.2 with Qwen3-VL-8B, +9.7 with Kimi K3, and +9.9 with GPT-6 Astra. With GPT-6 Luna at medium reasoning effort, OpenVLHarness outperforms the base model, Codex, and Visual Sketchpad at maximum effort by 7.7-8.5 points while incurring at most 37% of their model-token cost.",
      "upvotes": 113,
      "github_stars": 210,
      "github_repo": "https://github.com/uclanlp/OpenVLHarness",
      "project_page": "https://openvlharness.github.io/",
      "comments": 1,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2610.26860",
      "arxiv_url": "https://arxiv.org/abs/2610.26860",
      "title_ja": "OpenVLHarness: マルチモデルメモリを用いた実世界の視覚的ツール利用",
      "summary_ja": "推論予算の増加では解決できない複雑な視覚タスクに対し、外部ツールと持続的なメモリを備えたハーネスを提案。22のベンチマークで高い性能を実証。"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "abstract": "Spatial reasoning asks a model to work out where objects are in 3D space, how they relate to one another, and how they move. Agentic VLMs have recently brought large improvements on such tasks by letting the model actively gather evidence with 3D perception tools instead of answering in a single pass. Even so, on many questions the tools return the right evidence and the model still does not arrive at the correct answer: the gap between model and tools, where raw readings become usable conclusions, is left unfilled. We present S-Agent 2.0, a spatial reasoning agent that equips an off-the-shelf general coding agent with a command-line perception toolkit, and we design the interface around one principle: help the VLM close the evidence loop: acquire scene evidence, remember it in a persistent scene memory, and interpret each reading in plain spatial language. This design keeps the full flexibility of a coding agent, and every reading it acts on stays grounded in the tools' geometry. On MMSI-Bench and ReVSI, the toolkit improves a strong open-source model, Qwen3.8-27B, by +13.9 and +20.5 points over the same agent without tools, and a strong closed-source model, Gemini-3.8-Flash, by +11.2 and +9.6 points. With the open backbone S-Agent 2.0 reaches 66.5 on MMSI-Bench and 82.3 on ReVSI, ahead of the specialized system SpatialClaw on the same backbone (62.6 and 74.5), and with Gemini-3.8-Flash it reaches 74.1 and 90.5 against its 67.0 and 79.7. Both tool gains shrink as the backbone grows more capable, but SpatialClaw's shrinks far more on ReVSI, from +13.2 to +2.7, while ours stays at +9.6. S-Agent 2.0 also works across different general coding agent harnesses, such as Codex and Claude Code.",
      "upvotes": 105,
      "github_stars": 28,
      "github_repo": "https://github.com/Ropedia/S-Agent-2.0",
      "project_page": "https://ropedia.github.io/S-Agent-2.0",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.28354",
      "arxiv_url": "https://arxiv.org/abs/2610.28354",
      "title_ja": "S-Agent 2.0: 汎用コーディングエージェントによる空間推論",
      "summary_ja": "既存のコーディングエージェントに3D知覚ツールキットを統合。ツールが返した生の情報を、中間推論ステップを通じて利用可能な結論へ繋ぐ仕組みを設計。"
    },
    {
      "id": "2610.20951",
      "title": "LEV: Thinking Fast and Deep with Looped Decision Models",
      "abstract": "Decision models answer typed questions about an input with one probability per option, computed in a single forward pass without generating text. Like the fast System 1 of dual-process theory, they answer at once, but their depth is fixed at training time, so they spend the same computation on easy and hard questions. Models that reason in generated text can think longer, but they pay for every extra step in decoded tokens. We present LEV, a decision model that thinks deeper by rerunning its layers in a loop instead of generating tokens. LEV builds on a language model pretrained as a loop, reads the options after every loop step and trains all steps jointly, so one checkpoint can answer at any depth. On three looped backbones, accuracy rises with depth on the same weights, mostly on hard questions, and a 2.6B LEV goes from 63.2% at depth one to 76.2% at depth four on JevBench. On-demand depth, set per question by a small stopper with a threshold fitted on unlabelled requests, saves 15% to 24% of the computation at a cost of under one accuracy point, level with or slightly above a fixed mix of depths. On a locked test set, the 1.4B and 3B models are 5.4 to 8.8 points more accurate than dense (non-looped) models and cascades of the same latency below 50 ms.",
      "upvotes": 105,
      "github_stars": 8,
      "github_repo": "https://github.com/OpenLAIR/lev",
      "project_page": "https://openlair.github.io/lev/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.20951",
      "arxiv_url": "https://arxiv.org/abs/2610.20951",
      "title_ja": "LEV: ループ型意思決定モデルによる高速かつ深い思考",
      "summary_ja": "テキスト生成の代わりに層をループ実行することで思考を深める意思決定モデル。問題の難易度に応じて計算量を調整でき、一貫した精度と効率を両立。"
    },
    {
      "id": "2610.23374",
      "title": "MOSS-Image Technical Report",
      "abstract": "Recent closed-source image generation systems can produce diverse visual content from simple compositions to information-dense graphics, yet open-weight text-to-image models still struggle with dense text and intricate layouts. To narrow this gap, we introduce MOSS-Image, an open generation system that combines high-fidelity visual synthesis with intent-aware composition. First, we pretrain a 5B single-stream diffusion transformer (DiT) from scratch with a carefully designed recipe, enabling bilingual long-form text rendering and precise layout control. Second, we develop an intention-aware agentic prompt enhancement (PE) module that translates diverse user requests into detailed content and layout specifications. Together, they enable MOSS-Image to generate text-rich and layout-coherent images. We further introduce LongLongTextBench (LLTB) for evaluating long-form English and Chinese text rendering, and RealLayoutArena (RLA) for end-to-end layout-rich generation. MOSS-Image achieves state-of-the-art performance among open-weight models on LLTB, with an average text coverage of 96.3%. On RLA, MOSS-Image ranks second in the end-to-end system comparison, while its backbone ranks first among generators evaluated with shared enhanced prompts. We will release the model, training recipe, and evaluation framework to support further research and promote the text-to-image community.",
      "upvotes": 96,
      "github_stars": 1595,
      "github_repo": "https://github.com/OpenMOSS/MOSS-Image",
      "project_page": "https://openmoss.ai/MOSS-Image/",
      "comments": 4,
      "org": "OpenMOSS",
      "url": "https://huggingface.co/papers/2610.23374",
      "arxiv_url": "https://arxiv.org/abs/2610.23374",
      "title_ja": "MOSS-Image 技術報告書",
      "summary_ja": "50億パラメータのDiTとプロンプト強化モジュールを組み合わせた画像生成システム。緻密なレイアウト制御と、長文テキストを含む高品質な画像生成を実現。"
    },
    {
      "id": "2610.25690",
      "title": "ScaleNav: Scalable Internet Video Pretraining for Language-Conditioned Local Navigation",
      "abstract": "We study language-conditioned local navigation, where a robot must navigate to a text-specified target visible in its initial observation and stop at the described location. End-to-end navigation policies require diverse training data to generalize across scenes, yet real-robot data is costly to collect and simulated data leaves a sim-to-real gap. Internet egocentric videos offer a scalable source of real-world navigation experience. Our key insight is to learn goal-directed visual dynamics from Internet egocentric videos, and use these dynamics to support robot action generation. To this end, we propose ScaleNav, a unified world-action framework with three-stage training. We first perform instruction-conditioned video pretraining on these videos to learn how observations evolve as the camera approaches instructed targets across diverse real-world scenes. Action alignment then uses action-labeled simulated data to train the model to predict executable action chunks. Joint fine-tuning subsequently optimizes all trainable components together for navigation. ScaleNav achieves success rates of 86.5% on a single-view adaptation of Short-Horizon OVON and 94.9% on our HabitatGS-LN benchmark, outperforming the evaluated baselines on both benchmarks. We further deploy and evaluate ScaleNav on a real quadruped robot, with results supporting the model's ability to generalize to real-world navigation. Code and videos are available at https://zju3dv.github.io/ScaleNav/",
      "upvotes": 91,
      "github_stars": 41,
      "github_repo": "https://github.com/MachEmbodied/ScaleNav",
      "project_page": "https://zju3dv.github.io/ScaleNav/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25690",
      "arxiv_url": "https://arxiv.org/abs/2610.25690",
      "title_ja": "ScaleNav: 言語条件付き局所ナビゲーションのための大規模Web動画事前学習",
      "summary_ja": "Webの一人称視点映像から視覚力学を学習し、指示された地点へ移動するロボット制御に活用。実データ収集のコストを抑えつつ、未知のシーンへの汎化性能を向上。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Cuts Live Internet Access From Frontier Model Training After Security Breach",
      "summary": "OpenAI pulled frontier models offline, built a cached web for them to train in, then turned its own cyber agents loose to break the walls.",
      "url": "https://alphasignal.ai/news/openai-cuts-live-internet-access-from-frontier-model-training-after-security",
      "published": "2026-10-24T04:46:46+09:00",
      "title_ja": "セキュリティ侵害を受けOpenAIがモデル訓練環境のネット接続を遮断",
      "summary_ja": "キャッシュされたWeb環境を構築し、外部接続を遮断したオフライン環境下での訓練やサイバーエージェントによる攻撃耐性検証を実施し、モデルの安全性を強化した。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AIを活用することで、結核の診断やスクリーニングという医療の最前線における課題解決を支援する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Moonshot's Kimi K3.1 Pro Challenges Claude With 2.8 Trillion Parameters",
      "summary": "Moonshot's 2.8T parameter MoE now runs full Unreal projects, parametric CAD, and finance modeling with 65% fewer hallucinations.",
      "url": "https://alphasignal.ai/news/moonshot-s-kimi-k3-1-pro-challenges-claude-with-2-8-trillion-parameters",
      "published": "2026-10-24T02:15:24+09:00",
      "title_ja": "MoonshotのKimi K3.1 Proが2.8兆パラメータでClaudeに挑戦",
      "summary_ja": "2.8兆パラメータのMoEモデルにより、ハルシネーションを65%削減。Unrealプロジェクトの実行やCAD、金融モデリングを可能にする。"
    },
    {
      "lab": "OpenAI",
      "title": "Rapidly scaling online storage to serve over 1 billion ChatGPT users (Part II)",
      "summary": "Learn how OpenAI scaled Habitat with reliable multi-tenancy, global caching, and Azure Cosmos DB to deliver 12× faster reads for ChatGPT.",
      "url": "https://openai.com/index/scaling-storage-one-billion-users-part-two",
      "published": "2026-10-24T02:00:00+09:00",
      "title_ja": "10億人以上のChatGPTユーザーを支えるオンラインストレージの拡張",
      "summary_ja": "Azure Cosmos DBやグローバルキャッシュを活用してHabitatを拡張し、ChatGPTの読み取り速度を12倍高速化した。"
    },
    {
      "lab": "Hugging Face",
      "title": "LitPivot: Developing research ideas through dynamic contextualization within the literature landscape",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/litpivot",
      "published": "2026-10-24T01:15:50+09:00",
      "title_ja": "LitPivot：文献景観の中での動的文脈化による研究アイデアの開発",
      "summary_ja": "既存の文献の文脈を動的に活用することで、新しい研究アイデアの創出を支援するフレームワークを開発した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Comfy-Org Bundles Wan 2.1 Into One Local Video Toolkit With 4.2M Downloads",
      "summary": "Alibaba's open-source video model lands in ComfyUI as a single repackaged bundle, crossing 4.2 million downloads with workflows for text, image, and control-driven generation.",
      "url": "https://alphasignal.ai/news/comfy-org-bundles-wan-2-1-into-one-local-video-toolkit-with-4-2m-downloads",
      "published": "2026-10-24T01:02:24+09:00",
      "title_ja": "ComfyUI向けWan 2.1ローカルビデオツールキットの提供開始",
      "summary_ja": "Alibabaの動画生成モデルをComfyUIに統合。テキストや画像から動画を生成でき、家庭用PCでも動作可能なツールとして配布。 "
    },
    {
      "lab": "AlphaSignal",
      "title": "Cursor's Computer Use Lets Its Coding Agent Click Through Desktop Apps",
      "summary": "Cursor's local agent can now click and type across any desktop app, driving tools like the iOS Simulator to verify the code it writes.",
      "url": "https://alphasignal.ai/news/cursor-s-computer-use-lets-its-coding-agent-click-through-desktop-apps",
      "published": "2026-10-24T00:59:07+09:00",
      "title_ja": "Cursorの「Computer Use」機能がデスクトップアプリの操作を実現",
      "summary_ja": "AIエージェントがデスクトップアプリ上でのクリックや入力を可能にし、iOSシミュレータ等を操作して生成したコードの動作検証を行えるようになった。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's Wan2.2 Animate Lets You Swap Characters Into Any Video",
      "summary": "Alibaba's open-weights character animation model turns a single still image into a video that mimics any performer's motion and expressions, with ComfyUI running it on consumer GPUs.",
      "url": "https://alphasignal.ai/news/alibaba-s-wan2-2-animate-lets-you-swap-characters-into-any-video",
      "published": "2026-10-23T19:02:18+09:00",
      "title_ja": "AlibabaのWan2.2 Animateが人物の動きを任意動画に移植可能に",
      "summary_ja": "1枚の静止画から、特定の人物の動きや表情を再現する動画を生成。オープンウェイトモデルとして提供され、家庭用GPU上のComfyUIで動作する。"
    },
    {
      "lab": "OpenAI",
      "title": "Securing our frontier model training environment",
      "summary": "OpenAI explains how we strengthened containment for frontier model training and evaluation, including offline environments and high-compute red-teaming.",
      "url": "https://openai.com/index/securing-our-frontier-model-training-environment",
      "published": "2026-10-23T19:00:00+09:00",
      "title_ja": "先端モデル訓練環境のセキュリティ確保について",
      "summary_ja": "オフライン環境の構築や、計算資源を駆使したレッドチーミングを通じて、モデルの訓練と評価における封じ込め体制を強化した。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's Z-Image Turbo Tops Open-Weight Rankings on a 16GB GPU",
      "summary": "Alibaba's Tongyi-MAI lab released a 6B text-to-image model that renders photorealistic images in under a second on a 16GB GPU, with Apache 2.0 weights.",
      "url": "https://alphasignal.ai/news/alibaba-s-z-image-turbo-tops-open-weight-rankings-on-a-16gb-gpu",
      "published": "2026-10-23T15:34:37+09:00",
      "title_ja": "AlibabaのZ-Image Turboが16GB GPUで最高性能を記録",
      "summary_ja": "16GBのGPUで1秒未満で実写的な画像を生成できる60億パラメータのテキスト画像生成モデルをApache 2.0ライセンスで公開。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and Poland’s NASK partner to advance AI safety and security",
      "summary": "OpenAI and Poland’s NASK are partnering on AI safety, security, and technical research to strengthen safeguards and support a more resilient digital ecosystem.",
      "url": "https://openai.com/index/openai-nask-ai-safety-security-partnership",
      "published": "2026-10-23T09:00:00+09:00",
      "title_ja": "OpenAIとポーランドNASKがAI安全性とセキュリティで提携",
      "summary_ja": "AIの安全性、セキュリティ、技術研究において協力し、防御策の強化とデジタルエコシステムのレジリエンス向上を目指す。"
    },
    {
      "lab": "Hugging Face",
      "title": "Does Your Model Run on AWS Trainium? Look It Up",
      "summary": "",
      "url": "https://huggingface.co/blog/torch-neuronx-model-support",
      "published": "2026-10-23T09:00:00+09:00",
      "title_ja": "モデルがAWS Trainiumで動作するか確認する方法",
      "summary_ja": "特定のAIモデルがAWSの機械学習特化型チップ「Trainium」で動作可能かどうかを調査・確認する手段を提供。"
    },
    {
      "lab": "Hugging Face",
      "title": "Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox-training",
      "published": "2026-10-23T07:24:34+09:00",
      "title_ja": "ThinkingBoxによるデータベース採点結果のRL報酬化",
      "summary_ja": "データベースの採点結果を強化学習（RL）の報酬として活用し、事後学習を通じてエージェントの性能を向上させる手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Build more responsive apps with the Decisions API",
      "summary": "Fast, focused, low-cost decisions for any application.",
      "url": "https://openai.com/index/decisions-api",
      "published": "2026-10-23T04:00:00+09:00",
      "title_ja": "Decisions APIによる応答性の高いアプリ構築",
      "summary_ja": "あらゆるアプリケーションに対し、高速で焦点の絞られた低コストな意思決定機能を提供する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠被覆を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上のすべての10メートル区画を分類し、森林の種類を詳細に特定する世界地図を作成した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Ensemble forecasting with IBM Granite time-series models",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1",
      "published": "2026-10-22T16:51:31+09:00",
      "title_ja": "IBM Granite時系列モデルによるアンサンブル予測",
      "summary_ja": "IBMのGraniteモデル群を用いて、時系列データに対する高度なアンサンブル予測を行う手法を紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "What FDE means at OpenAI",
      "summary": "What forward deployed engineering means at OpenAI",
      "url": "https://openai.com/index/forward-deployed-engineering-means",
      "published": "2026-10-22T15:00:00+09:00",
      "title_ja": "OpenAIにおけるFDE（前方展開エンジニアリング）の定義",
      "summary_ja": "OpenAIにおける「Forward Deployed Engineering（前方展開エンジニアリング）」が果たす役割と意義を解説。"
    },
    {
      "lab": "OpenAI",
      "title": "Uber brings ChatGPT Work to all employees with OpenAI",
      "summary": "Uber is rolling out ChatGPT Work to more than 30,000 employees, helping teams research, analyze data, create presentations, and complete complex workflows.",
      "url": "https://openai.com/index/uber-chatgpt-work-rollout",
      "published": "2026-10-22T09:00:00+09:00",
      "title_ja": "Uberが全従業員に「ChatGPT Work」を導入",
      "summary_ja": "3万人以上の従業員がChatGPTを利用可能になり、調査、データ分析、資料作成、複雑なワークフローの完遂を支援する。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-relational",
      "published": "2026-10-22T03:26:30+09:00",
      "title_ja": "NVIDIA Kumoが学習なしでリレーショナルデータ分析を実現",
      "summary_ja": "リレーショナルデータに対し、従来の教師あり学習を凌駕する性能をトレーニング不要で発揮する。"
    },
    {
      "lab": "Hugging Face",
      "title": "How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization",
      "published": "2026-10-22T02:35:36+09:00",
      "title_ja": "SLMの語彙の専門化により推論コストを77%削減する方法",
      "summary_ja": "小規模言語モデル（SLM）の語彙を特定用途に特化させることで、実務における推論コストを大幅に抑える手法。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "医療・バイオサイエンス分野において、AIを活用した超音波検査により最前線の妊産婦ケアを支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "自律型実験室に向けたAIエージェントの生物学的実体への接地",
      "summary_ja": "自律的なウェットラボ（実験室）の構築に向け、AIエージェントを生物学的な現実に適応させるための基礎要素を開発。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学分野向けのGoogle Antigravityを活用し、新規の抗菌ペプチドを探索するプロセスを高速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたLLMの推論",
      "summary_ja": "Appleシリコンの統合メモリを活用したMLXフレームワークにより、最新モデルの推論や微調整をローカルかつプライベートな環境で実行可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論による効率的なマルチモーダル検索",
      "summary_ja": "推論を自由記述ではなく既定の選択肢からの「選択」として再構成することで、小規模モデルの推論コストを削減し効率化するフレームワーク。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "ツールの発見：計画と検索のどちらを優先すべきかの研究",
      "summary_ja": "膨大なAPIからツールを探す際、従来の「検索後に計画」する手法に対し、LLMがまずスタブを生成して検索する「計画後に検索」する手法の効果を比較研究。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球規模の課題解決に挑む地理空間AIエージェント",
      "summary_ja": "地球が直面する大きな課題に対処するため、地理空間情報を活用するAIエージェントを実用化する。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "高度なレビュー機能を用いて、専門的な技術文書の内容を詳細に分析する手法。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創造性を増幅する10の方法",
      "summary_ja": "2026年に向けた研究方針として、AIを通じて人間の知性や創造性を拡張するための10のアプローチを提示。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Googleとシンガポール政府が詐欺検知AIモデルを共同開発",
      "summary_ja": "オンデバイスで動作する軽量モデル「Gemma」を使用し、クラウドへのデータ転送なしに個人のチャット内での詐欺メッセージを遮断する。"
    }
  ]
};
