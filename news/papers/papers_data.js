window.papersData = {
  "updated_at": "2026-10-23 09:27 JST",
  "arxiv": [
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
      "id": "2610.24519",
      "title": "Axiomatic World Modeling for Physics Reasoning",
      "url": "https://arxiv.org/abs/2610.24519",
      "pdf": "https://arxiv.org/pdf/2610.24519",
      "authors": [
        "Xinye Yang",
        "Zhenyang Liu",
        "Yuxuan Wang",
        "Yuanyuan Lei"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "We propose Reinforcement Learning with Axiomatic World Modeling (RLAWM), which optimizes the policy by penalizing divergence",
      "signals": [],
      "headline": "公理的世界モデルとの乖離を罰することで物理推論の精度を高めるRLAWM",
      "what": "物理学の推論においてモデルが勝手に前提を書き換える「モデリング・ドリフト」を防ぐため、公理的世界モデル（AWM）を導入した強化学習手法です。抽象的なモデル構築レベルと、構築された世界内での具現化された推論レベルの2段階で報酬を与えます。",
      "enables": "PhysReasonで12.2ポイント、PHYSICSで5.2ポイントの精度向上を達成し、オリンピックレベルの難問に対しても最強のベースラインを10ポイント上回るゼロショット性能を示しました。",
      "why_it_matters": "単なる計算精度の向上ではなく、モデルが認識している物理的な「世界の公理」を正しく保つことに焦点を当て、物理推論の信頼性を根本から改善しています。",
      "tags": [
        "LLM",
        "物理推論",
        "強化学習"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25600",
      "title": "Vector-Quantized World Model: Latent Feedback Motion Planning for Robot Manipulation",
      "url": "https://arxiv.org/abs/2610.25600",
      "pdf": "https://arxiv.org/pdf/2610.25600",
      "authors": [
        "Xuezhou Xu",
        "Chung-Pang Wang",
        "Zhenzhen Li",
        "Benjamin Riviere"
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
        "cap",
        "new"
      ],
      "star_quote": "we introduce Vector-Quantized World Model (VQ-WM), a latent feedback motion planning framework",
      "signals": [],
      "headline": "離散探索と連続制御を統合した世界モデルによる長期間のロボット操作V-WM",
      "what": "ベクトル量子化された潜在空間上での離散的な長期計画と、連続的な視覚フィードバック制御を統合したフレームワークです。準メトリックとして「初到達時間」の推定値を用いることで、プランナーの抽象化レベルをコントローラーの能力に適合させます。",
      "enables": "「ハノイの塔」パズルにおいて、訓練データに全行程が含まれていなくても、短い操作データからの合成により成功率100%を達成しました。",
      "why_it_matters": "世界モデルを用いた計画において、予測エラーの蓄積と行動の到達可能性という2つの主要な課題を、離散と連続のハイブリッド設計で解決しています。",
      "tags": [
        "ロボティクス",
        "世界モデル",
        "動作計画"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25926",
      "title": "MIRA: A Multimodal Illustrated Deep Research Agent for Controllable Reports",
      "url": "https://arxiv.org/abs/2610.25926",
      "pdf": "https://arxiv.org/pdf/2610.25926",
      "authors": [
        "Hongrui Wu",
        "Kaiwen Tuo",
        "Congcong Wang",
        "Gen Li",
        "Shuai Dong",
        "Xinlei Yu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "33 pages, 8 figures, 9 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "MIRA achieves state-of-the-art performance among open agents on 7 representative, established multimodal-search",
      "signals": [],
      "headline": "マルチモーダル証拠を統合し図説付きレポートを生成するリサーチ・エージェントMIRA",
      "what": "ウェブ検索を通じてテキストと画像の両方の証拠を収集し、ユーザーの要件に合わせた詳細な図説レポートを生成するエージェントです。証拠収集、レポート提出、フィードバックによる修正、最終納品という4つのステージを管理するMIRA-Harnessを核としています。",
      "enables": "Qwen3.6-35B-A3Bを用いた評価において、7つの主要なマルチモーダル検索・エージェントベンチマークで最高性能を達成し、検証可能な証拠を伴う図説レポートの生成を可能にしました。",
      "why_it_matters": "従来の検索エージェントが軽視しがちだった「画像証拠の活用」と「柔軟なレポート構成の制御」を統合した実用的なフレームワークです。",
      "tags": [
        "LLMエージェント",
        "マルチモーダル",
        "深層調査"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
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
      "id": "2610.23904",
      "title": "LVMH: A Meta-Optimization Harness for Long-Video Agent Memory",
      "url": "https://arxiv.org/abs/2610.23904",
      "pdf": "https://arxiv.org/pdf/2610.23904",
      "authors": [
        "Liwei Che",
        "Benlin Liu",
        "Dai Li",
        "Xiangyan Li",
        "Zijian Wu",
        "Changjiang Li"
      ],
      "categories": [
        "cs.CV",
        "cs.MA"
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
      "star_quote": "SEEM with GPT-5 achieves 65.7% average accuracy, surpassing the previous state of the art by 7.7 percentage points",
      "signals": [],
      "headline": "マルチエージェント型コード探索により長時間ビデオのメモリ設計を自動最適化するLVMH",
      "what": "Long Video Meta-memory Harness (LVMH)は、メモリ設計を「回答モデルを固定したマルチオブジェクト・コード探索」として定式化する自動化フレームワークです。実装、独立レビュー、メタメモリ記録の役割を分担させ、最適なコンテキスト管理ポリシーを自動的に発見します。",
      "enables": "Self-Evolving Evidence Memory (SEEM)と呼ばれる効率的なポリシーを導き出し、GPT-5 miniでの評価において従来手法を精度で7.7ポイント上回りつつ、トークン消費量を約32分の1、応答時間を91分の1に削減しました。",
      "why_it_matters": "従来の手動設計によるメモリ管理ポリシーを自動最適化へ置き換え、パフォーマンスとコスト効率のトレードオフを大幅に改善する実用的なアプローチを提示しています。",
      "tags": [
        "LLMエージェント",
        "ビデオ理解",
        "メモリ管理"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.23951",
      "title": "LatLM: Line-Parallel Language Models with Deferred Commitment",
      "url": "https://arxiv.org/abs/2610.23951",
      "pdf": "https://arxiv.org/pdf/2610.23951",
      "authors": [
        "Shaorong Zhang",
        "Shiyuan Li",
        "Longxuan Yu",
        "Greg Ver Steeg"
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
      "star_quote": "we introduce the Lattice Language Model (LatLM), making commitment schedules an adaptive decoding-time choice.",
      "signals": [],
      "headline": "適応的なデコード決定により推論の誤りを防ぐ並列言語モデルLatLM",
      "what": "Lattice Language Model (LatLM)は、複数の行を並列にデコードする際、各トークンの確定タイミングを適応的に遅延させる（Deferred Commitment）手法です。2D因果マスキングを用いたラティス構造により、先行する文脈が不足している場合に決定を保留し、依存関係が解消された段階でコミットします。",
      "enables": "混合依存関係のあるタスクにおいて、固定スケジュールのLCLMが78.5%の精度に留まる中、96.5%の精度を達成し、自己回帰モデルと比較して半分以下のデコードラウンド数で動作します。",
      "why_it_matters": "従来の並列デコードにおける「依存関係を無視した早すぎる決定」によるエラーの蓄積を解消し、推論の正確性と速度の両立を実現しています。",
      "tags": [
        "LLM",
        "並列計算",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.24462",
      "title": "O-SCD++: Replay-Free Online Scene Change Detection via Recursive Evidence Fusion",
      "url": "https://arxiv.org/abs/2610.24462",
      "pdf": "https://arxiv.org/pdf/2610.24462",
      "authors": [
        "Chamuditha Jayanga Galappaththige",
        "Jason Lai",
        "Lloyd Windrim",
        "Timothy Patten",
        "Donald G. Dansereau",
        "Niko Suenderhauf"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page:https://chumsy0725.github.io/O-SCD/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our method improves mean intersection over union from 0.489 to 0.575 and throughput from 11.8 to 25.6 frames per second",
      "signals": [],
      "headline": "再帰的証拠統合によりリプレイ不要で高速・高精度なオンライン・シーン変化検知を実現するO-SCD++",
      "what": "3D Gaussian Splattingを用いたオンライン・シーン変化検知手法で、過去の観測を再利用せずに逐次的に更新する再帰的定式化を採用しています。レンダラーの単一バックワードパスのみで各ガウス分布の状態を更新し、ソートに基づくラベルフリーな閾値決定も組み込んでいます。",
      "enables": "PASLCDデータセットにおいて、mIoUを0.489から0.575へ改善し、スループットも11.8fpsから25.6fpsへと倍増させ、オフライン手法をも上回る精度をリアルタイムで達成しました。",
      "why_it_matters": "計算負荷の高い再最適化（リプレイ）を排除することで、精度と速度のトレードオフを解消し、自律エージェントの実環境での変化検知能力を高めています。",
      "tags": [
        "コンピュータビジョン",
        "3D Gaussian Splatting",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25012",
      "title": "Conjugate Compilation: Self-Improving Agentic Co-Compilation for Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.25012",
      "pdf": "https://arxiv.org/pdf/2610.25012",
      "authors": [
        "Annabelle Sujun Tang",
        "Rohan Mahapatra",
        "Christopher Priebe",
        "Hanyang Xu",
        "Manya Ghobadi",
        "Christopher Rossbach"
      ],
      "categories": [
        "cs.LG",
        "cs.DC",
        "cs.PL"
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
      "star_quote": "We introduce CONJUGATE COMPILATION, which reframes speculative decoding as a cross-model compilation problem",
      "signals": [],
      "headline": "投機的デコードをモデル横断的に共同最適化するConjugate Compilation",
      "what": "投機的デコードにおけるドラフトモデルとターゲットモデルを、別個にコンパイルするのではなく「共有実行環境」として一括でコンパイル・最適化する手法です。LLMエージェントがコード編集と実測を繰り返す自己改善型探索により、最適なカーネル融合やメモリアラインメントを見つけ出します。",
      "enables": "NVIDIA B300およびRTX 5090において、従来の実行方式に対し幾何平均で1.37倍、最大で1.59倍の推論高速化を達成し、GPU利用率も約1.5倍向上しました。",
      "why_it_matters": "モデル間の境界を越えたコンパイラ最適化を可能にすることで、推論パイプライン全体のハードウェア効率を極限まで引き出しています。",
      "tags": [
        "LLM",
        "推論加速",
        "コンパイラ"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26090",
      "title": "RGB--Event Object Detection Across Operating Frequencies via Reliability-Supervised Routing and Asymmetric-Resolution Fusion",
      "url": "https://arxiv.org/abs/2610.26090",
      "pdf": "https://arxiv.org/pdf/2610.26090",
      "authors": [
        "Peijun Shi",
        "Jiannan Zhao",
        "Xiujin Zhu",
        "Zhenguo Lao",
        "Chee-Onn Chow",
        "Wei Ru Wong"
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
      "star_quote": "ERA-Det, sets a new state of the art at 63.2 mAP, 3.7 mAP above FlexEvent",
      "signals": [],
      "headline": "高周波数環境下で信頼性ベースのルーティングを行うRGB--イベント物体検知ERA-Det",
      "what": "フレームカメラの合間にイベントカメラからの情報で高速意思決定（180Hz以上）を行う検出器です。場所ごとに最適なセンサー重みを学習する「信頼性監視ルーティング」と、解像度の異なる両センサーを統合する非対称融合を採用しています。",
      "enables": "DSEC-Detデータセットにおいて、180Hzの高頻度動作時でも精度低下を最小限に抑え、従来手法に対し3.7 mAP向上の63.2 mAPというSOTAを達成しました。",
      "why_it_matters": "自動運転など超高速な反応が求められる場面で、情報が疎になるイベントカメラの弱点をフレーム側の情報で補完しつつ、リアルタイム性能を担保しています。",
      "tags": [
        "物体検知",
        "イベントカメラ",
        "自動運転"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "url": "https://arxiv.org/abs/2610.26625",
      "pdf": "https://arxiv.org/pdf/2610.26625",
      "authors": [
        "Xinhao Ji",
        "Hui En Pang",
        "Hao Li",
        "Kairui Hu",
        "Jiner Wang",
        "Mingze Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 121,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame",
      "signals": [
        "HF ▲121"
      ],
      "headline": "一人称視点ビデオからカメラ・手・物体を世界座標で一括復元するEgoXperience",
      "what": "一人称視点（Egocentric）ビデオから、カメラの動き、周囲の3D形状、手と物体のインタラクションを共通の世界座標系で一元的に再構築する手法です。SLAMと物体トラッキングを統合した自動アノテーションエンジン「EgoX-Engine」で作成した6Mサンプル以上のデータを活用します。",
      "enables": "単一のフォワードパスで、カメラ・手・深度の誤差をそれぞれ68.9%、65.6%、42.9%削減し、既存のベースラインを大幅に上回る一貫した世界構築を実現しました。",
      "why_it_matters": "バラバラに推定されがちだった「自己」「物体」「環境」を、大規模な自動教師あり学習により首尾一貫した一つの3D世界として捉えることに成功しています。",
      "tags": [
        "3D復元",
        "一人称視点理解",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "url": "https://arxiv.org/abs/2610.25736",
      "pdf": "https://arxiv.org/pdf/2610.25736",
      "authors": [
        "Chao Yu",
        "Shu'ang Yu",
        "Hao Lin",
        "Hongzhi Zang",
        "Yuxiang Yan",
        "Chenxi Jiang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 107,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience",
      "signals": [
        "HF ▲107"
      ],
      "headline": "デプロイ中の失敗を共有して共同でポリシーを改善するロボット学習CEL",
      "what": "複数のロボット（フリート）が実稼働中に経験した失敗を共有し、追加の専門家アノテーションなしに自律的に学習するCollective Experience Learning (CEL)パラダイムです。失敗時のコンテキストから共有プールの成功例を検索し、それをもとにポリシーを更新するFERT手法を用います。",
      "enables": "96台のロボットによる共同学習において、多段階のパッキングタスクの成功率を79.2%から98.3%に向上させ、フリート規模の拡大が性能向上に直結することを示しました。",
      "why_it_matters": "人間による介入（遠隔操作）への依存を減らし、デプロイされたロボット群が自己改善を続けるためのスケーラブルな基盤を提供します。",
      "tags": [
        "ロボティクス",
        "フリート学習",
        "自己改善"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "url": "https://arxiv.org/abs/2610.26802",
      "pdf": "https://arxiv.org/pdf/2610.26802",
      "authors": [
        "Zhuofan Josh Ying",
        "Guanglong Sun",
        "Nolan Ho",
        "Kieran Liu",
        "Rui Yang",
        "Andrew Chen"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "38 pages, 13 figures, 20 tables. Code available at https://github.com/zfying/brain-lora",
      "hf_upvotes": 233,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge.",
      "signals": [
        "HF ▲233"
      ],
      "headline": "PEFTにより100B超の超大規模モデルを脳信号エンコーディングに適合させるBrainLoRA",
      "what": "104Bパラメータまでの巨大なマルチモーダルバックボーンを、LoRA（低ランクアダプター）を用いて脳活動予測（Brain Encoding）タスクに最適化する手法です。因果構造を利用して複数のタイムポイントを一括予測し、計算コストを大幅に削減しています。",
      "enables": "Algonauts 2025チャレンジで最高性能を達成し、アンサンブルモデルによってリーダーボード1位を獲得しました。適応後のモデルは脳の感覚トポグラフィを正しく再現する解釈性も備えています。",
      "why_it_matters": "コストのかかる脳データの学習にPEFTを適用することで、超大規模な基盤モデルの持つ表現力を神経科学分野で効率的に活用できることを証明しました。",
      "tags": [
        "神経科学",
        "PEFT",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26337",
      "title": "CIS-Transolver: A Cross-Layer Incremental-State Neural Operator for Fine-Scale Automotive Aerodynamic Flow Prediction",
      "url": "https://arxiv.org/abs/2610.26337",
      "pdf": "https://arxiv.org/pdf/2610.26337",
      "authors": [
        "Jianglong Liu",
        "Zhicheng Zhu",
        "Jia Hao",
        "Liangyue Jia"
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
      "star_quote": "CIS-Transolver achieves the lowest mean relative L2 error among the evaluated methods",
      "signals": [],
      "headline": "層間でのインクリメンタルな状態遷移により微細な流体解析を実現するCIS-Transolver",
      "what": "自動車の空力シミュレーションにおいて、微細な形状周囲の複雑な流れを予測するためのニューラルオペレーターです。局所的な詳細情報を幾何モーメント状態として符号化し、層を跨いで伝播・更新し続けることで、大域的な相関と局所的な詳細の両立を図ります。",
      "enables": "ShapeNet-Carの圧力予測で16.38%、AhmedMLの速度予測で15.60%の相対誤差削減を達成し、評価したすべての空力ベンチマークで最高精度を記録しました。",
      "why_it_matters": "従来手法が苦手としていた「局所的な細かい流れの情報の損失」を防ぐ仕組みを導入し、複雑な形状に対する実用的な空力予測の精度を向上させました。",
      "tags": [
        "流体解析",
        "AI for Science",
        "ニューラルオペレーター"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
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
      "id": "2610.24814",
      "title": "SL-Ground: Sentence-Level Grounding for Fine-Grained Open-Vocabulary Object Detection",
      "url": "https://arxiv.org/abs/2610.24814",
      "pdf": "https://arxiv.org/pdf/2610.24814",
      "authors": [
        "Yang-Syu Li",
        "Cheng-Huan Yang",
        "Chia-Yung Jui",
        "Peggy Joy Lu"
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
      "star_quote": "At the finest car-model granularity, SL-Ground raises AP over the token-level variant from 14.5 to 70.6",
      "signals": [],
      "headline": "文レベルの接地により高精度なオープン語彙物体検知を実現するSL-Ground",
      "what": "従来のトークン単位でのマッチングではなく、カテゴリ説明文全体を一つのベクトルとして符号化して物体クエリと照合するSentence-Level Grounding手法です。属性が複雑に組み合わさった詳細な説明（fine-grained description）に対する検知能力を強化します。",
      "enables": "Stanford Carsベンチマークの最も詳細な階層において、AP（平均精度）を従来の14.5から70.6へと大幅に向上させ、完全語彙学習時には86.0に達しました。",
      "why_it_matters": "オープン語彙検知における「単語の断片化」による情報損失というボトルネックを解消し、複雑な条件指定が必要な実用的な物体検知の精度を向上させます。",
      "tags": [
        "物体検知",
        "オープン語彙",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25474",
      "title": "P(Yes): 15$\\times$ Improvements via Test-Time Scaling of Decision Models",
      "url": "https://arxiv.org/abs/2610.25474",
      "pdf": "https://arxiv.org/pdf/2610.25474",
      "authors": [
        "Lev Stambler"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 5 figures. Interactive version: https://research.tearlabs.ai/pyes-search/ . Code and data: https://github.com/tear-labs/pyes-search",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We add test-time search to frozen decision models, with no training: we show the model a complete proposed answer",
      "signals": [],
      "headline": "テスト時の「Yes」判定の確率探索により、論理パズルの正解数を15倍にするP(Yes)",
      "what": "モデルを学習させることなく、テスト時に提案された回答の正しさを「Yes」と言う確率に基づいて探索・最適化する手法です。個々の回答を1つずつ修正する編集型探索、または複数の回答を同時に更新する結合最適化を用います。",
      "enables": "Qwen3.8-27Bを用いた論理パズル128件の評価で、完全に正解したパズル数を2から30へと15倍に増加させ、正解精度を27.8%から48.5%へ向上させました。",
      "why_it_matters": "モデル内部の自己評価指標を活用するだけで、学習なしに推論時の性能を大幅に引き上げられることを示しており、テスト時計算量（Test-time scaling）の新たな可能性を提示しています。",
      "tags": [
        "LLM",
        "推論時最適化",
        "論理推論"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25523",
      "title": "FracTS: Hierarchical and Autoregressive Time Series Generation",
      "url": "https://arxiv.org/abs/2610.25523",
      "pdf": "https://arxiv.org/pdf/2610.25523",
      "authors": [
        "Jiayu Li",
        "Umair Afzal",
        "Zilong Zhao",
        "Milad Abdollahzadeh",
        "Uzair Javaid",
        "Biplab Sikdar"
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
      "star_quote": "predictive ML utility is averagely improved by 100.0% and 75.0-81.0% for unconditional and conditional time series datasets",
      "signals": [],
      "headline": "階層的・自己回帰的な多変量時系列生成で長期コヒーレンスを実現するFracTS",
      "what": "画像のフラクタル生成に触発され、1次元の時系列データに対して多スケール表現を学習する階層的な自己回帰モデルです。大域的な軌道構造を粗いスケールで、局所的なダイナミクスを細かいスケールで捉えつつ、静的な特徴量も取り込んで生成します。",
      "enables": "5つのデータセットでの実験において、予測精度の有用性が非条件付き生成で100%、条件付き生成で75〜81%改善し、長期の相関保持能力でも従来手法を凌駕しました。",
      "why_it_matters": "従来の自己回帰モデルが抱えていたエラーの蓄積と長期依存関係のモデル化の困難さを、階層的なアプローチによって克服しています。",
      "tags": [
        "時系列生成",
        "自己回帰モデル",
        "データ拡張"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25646",
      "title": "Spherical Fixed-Point Reasoners: Adaptive Loop Halting on the Hypersphere",
      "url": "https://arxiv.org/abs/2610.25646",
      "pdf": "https://arxiv.org/pdf/2610.25646",
      "authors": [
        "Arber Zela",
        "Artavazd Maranjyan",
        "Pol Puigdemont",
        "David Berghaus",
        "Valentyn Boreiko",
        "Volkan Cevher"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 24 figures, 6 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Spherical Fixed-Point Reasoners (SFPRM), which perform the same computation on the unit hypersphere",
      "signals": [],
      "headline": "超球面上での反復演算により適応的に計算量を調整するSpherical Fixed-Point Reasoners",
      "what": "入力を繰り返し重み共有トランスフォーマーに通す際、計算を単位超球面上の測地的操作（geodesic operations）として定義するSFPRMを提案します。従来のユークリッド空間での不動点推論（FPRM）で見られた係数の結合や発散の問題を構造的に解消しています。",
      "enables": "Sudoku-ExtremeやMaze-Hardなどの難解な推論タスクにおいて、それぞれ96.6%、87.9%という高いテスト精度を達成し、既存のFPRMを上回る効率的な計算配分を実現しました。",
      "why_it_matters": "入力の難易度に応じて計算ステップ数を適応的に変化させるメカニズムを数学的に安定させ、解釈可能な幾何学的収束特性をモデルに持たせています。",
      "tags": [
        "LLM",
        "適応的計算",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25675",
      "title": "LIRQuant: An Efficient Locally Isolated Rotation Quantization Method for Large Language Models",
      "url": "https://arxiv.org/abs/2610.25675",
      "pdf": "https://arxiv.org/pdf/2610.25675",
      "authors": [
        "Desheng Xu",
        "Hanglin Li",
        "Tianchen Song",
        "Zhiyong Zhao",
        "Kun Zhan"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to EMNLP 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "demonstrate that LIRQuant achieves state-of-the-art accuracy under the challenging W4A4KV4 setting",
      "signals": [],
      "headline": "感度に応じた局所的な回転量子化でLLMの推論効率を最大化するLIRQuant",
      "what": "外れ値の影響を受けやすいチャンネルを特定し、学習可能な回転をそれらに対して選択的に適用するポストトレーニング量子化（PTQ）手法です。他のチャンネルには軽量な固定回転のみを適用することで、最適化の複雑さを低減します。",
      "enables": "LLaMA-3-8Bを25分、20.3GBのビデオメモリで量子化完了し、推論時にはFP16と比較して最大3.5倍のメモリ節約と2.3倍のプリフィル高速化を達成しました。",
      "why_it_matters": "グローバルな変換一辺倒ではなく、チャンネルの不均質性を考慮することで、高精度かつ低リソースでの大規模言語モデルのデプロイを可能にします。",
      "tags": [
        "LLM",
        "量子化",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25723",
      "title": "Learning to Couple: Context-Adaptive Joint Denoising for Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.25723",
      "pdf": "https://arxiv.org/pdf/2610.25723",
      "authors": [
        "Zilei Shao",
        "Ian Li",
        "Heng Zhao",
        "Kewei Lian",
        "Guy Van den Broeck",
        "Zhe Zeng"
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
      "star_quote": "Codpula sets new state-of-the-art results across a broad suite of reasoning benchmarks",
      "signals": [],
      "headline": "コンテキスト適応型の結合デノイジングにより拡散言語モデルの精度を高めるCodpula",
      "what": "拡散言語モデルにおいて、同時予測されるトークン間の依存関係を明示的にモデル化する手法です。Transformerが生成する潜在変数と、それを結合パラメータに変換する確率推論レイヤー（Codpula）を組み合わせ、コンテキストに応じたトークン間の「結びつき」を調整します。",
      "enables": "数学的推論やコード生成において、既存の拡散言語モデルの精度・レイテンシのパレート境界を更新し、多くのベンチマークで新たなSOTAを記録しました。",
      "why_it_matters": "各ポジションを独立してデノイジングしていた従来の拡散モデルの限界を、条件付き確率推論を導入することで克服し、推論の質と並列性のバランスを最適化しています。",
      "tags": [
        "LLM",
        "拡散モデル",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25742",
      "title": "Functional Cross-layer Experts Routing for One-step Diffusion Distillation",
      "url": "https://arxiv.org/abs/2610.25742",
      "pdf": "https://arxiv.org/pdf/2610.25742",
      "authors": [
        "Zile Huang",
        "Ser-nam Lim"
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
      "star_quote": "Across COCO-10K, DeMoE establishes state-of-the-art fidelity and diversity among single-step models",
      "signals": [],
      "headline": "1ステップ拡散蒸留において層間エキスパートのルーティングを最適化するDeMoE",
      "what": "拡散モデルの1ステップ蒸留において、モデル内部の計算資源を効率化するDeMoEを提案します。常にアクティブな「共有バックボーン」と、必要に応じて呼び出される「条件付きルーティング・エキスパート」を組み合わせ、プロンプトに応じた最適な詳細表現を実現します。",
      "enables": "FLUX.2-4Bを用いた生成において、FFNの幅を80.5%しか使用しないにもかかわらず、50ステップを要する元のモデルと同等以上の画質と正確な計数（counting）能力を1ステップで達成しました。",
      "why_it_matters": "1ステップという極めて制限された推論ステップの中で、どのようにモデル容量を割り当てるべきかという課題に対し、MoE構造を用いた有力な解決策を提示しています。",
      "tags": [
        "画像生成",
        "モデル圧縮",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25763",
      "title": "TrajWAM: An Efficient Trajectory-Guided World Action Model for Dynamic Robotic Manipulation",
      "url": "https://arxiv.org/abs/2610.25763",
      "pdf": "https://arxiv.org/pdf/2610.25763",
      "authors": [
        "Haohan Geng",
        "Sha Zhang",
        "Weishuo Sun",
        "Guanting Ye",
        "Wenhao Yu",
        "Yuang Xie"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "TrajWAM achieves state-of-the-art performance on dynamic object manipulation tasks",
      "signals": [],
      "headline": "軌道予測に基づき高速かつ動的なロボット操作を実現するTrajWAM",
      "what": "対象物の将来の動きをマスク軌道として明示的に予測し、その情報をControlNet経由でビデオモデルに注入してアクションを生成する手法です。ビデオ生成とアクション予測の1ステップ化を実現するために、切り離された蒸留スキームを導入しています。",
      "enables": "動的な物体操作タスクにおいて、1ステップという極低レイテンシでの推論を維持しつつ、物理世界とシミュレーションの両方でSOTA性能を達成しました。",
      "why_it_matters": "視覚的想像（将来予測）と行動生成を強固に結びつけることで、予測エラーが致命的になる動的な操作において高い信頼性と速度を両立しています。",
      "tags": [
        "ロボティクス",
        "世界モデル",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25832",
      "title": "Hihaze: One-Step Diffusion for High-Resolution Real-World Image Dehazing",
      "url": "https://arxiv.org/abs/2610.25832",
      "pdf": "https://arxiv.org/pdf/2610.25832",
      "authors": [
        "Zheng Chen",
        "Yuchen Huang",
        "Xiaoyang Liu",
        "Jue Gong",
        "Linghe Kong",
        "Yulun Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code is available at: https://github.com/zhengchen1999/Hihaze",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "delivers PSNR improvements of 3.62~dB on Dense-Haze and 3.69~dB on NH-HAZE compared with the strongest baselines",
      "signals": [],
      "headline": "1ステップ拡散モデルと大域ガイド付き融合による高解像度画像除霧Hihaze",
      "what": "1ステップでリアルタイムの画像除霧（dehazing）を行う拡散フレームワークです。ヘイズの不均一性を考慮した変調モジュール（ASC、SDA）と、パッチごとの予測の不整合を解消する「大域ガイド付きパッチ融合（GPF）」を特徴とします。",
      "enables": "Dense-Haze等のベンチマークでPSNR値を最大3.69dB改善し、視覚的品質と推論速度の両面で既存のSOTAを凌駕しました。",
      "why_it_matters": "高解像度画像の復元で課題となっていたパッチ間の不一致と計算コストを、効率的なモジュール設計と学習不要の融合手法により解決しています。",
      "tags": [
        "画像復元",
        "拡散モデル",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25929",
      "title": "OmniGround: Strengthening Omni-Modal Temporal Grounding via Attention-Consistency Training",
      "url": "https://arxiv.org/abs/2610.25929",
      "pdf": "https://arxiv.org/pdf/2610.25929",
      "authors": [
        "Zixuan Chen",
        "Depeng Wang",
        "Hao Lin",
        "Ke Xu",
        "Ya Guo",
        "Huijia Zhu"
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
      "star_quote": "OmniGround reaches state-of-the-art omni-modal temporal grounding, including 37.5 mIoU on LongVALE",
      "signals": [],
      "headline": "内部アテンションを基準に位置特定精度を高めるOmniGround",
      "what": "オーディオ・ビデオ・テキストを横断する全方位モーダル（Omni-modal）LLMの時間軸位置特定（Temporal Grounding）を強化する手法です。モデル内部のアテンションが生成されるタイムスタンプよりも正確であるという発見に基づき、アテンションを教師データと整合させる学習（TACG）を行います。",
      "enables": "LongVALEで37.5 mIoU、UnAV-100で35.7 mIoUを達成し、他のタスクの汎用性を維持したまま時間軸の特定精度を大幅に引き上げました。",
      "why_it_matters": "特別なマーカーや追加情報を入力せず、モデルが本来持っている内部証拠を引き出すことで精度を向上させる効率的な学習パラダイムを提案しています。",
      "tags": [
        "マルチモーダル",
        "ビデオ理解",
        "アテンション"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26213",
      "title": "ExMR: Extremity Motion Refinement for Monocular Human Motion Capture",
      "url": "https://arxiv.org/abs/2610.26213",
      "pdf": "https://arxiv.org/pdf/2610.26213",
      "authors": [
        "Tom Wehrbein",
        "Bodo Rosenhahn"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Extended version of the 3DV 2026 paper \"Improving 3D Foot Motion Reconstruction in Markerless Monocular Human Motion Capture\". 17 pages main paper + 4 pages supplementary material. Project page and video: https://twehrbein.github.io/exmr-website/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing hand per-vertex error and ankle joint angle error on MOYO by 19% and 18%, respectively",
      "signals": [],
      "headline": "手足の微細な動きを局所証拠から精密に復元する単眼モーションキャプチャExMR",
      "what": "単眼ビデオから全身だけでなく、手（指）と足の関節の動きを精密に推定するフレームワークです。全身推定後の残差として、手足の局所的なキーポイントや画像特徴を再訪して詳細な回転を補正する「HandMR/FootMR」モジュールを導入しました。",
      "enables": "MOYOデータセット等において、従来手法に対し手の頂点誤差を19%、足首の角度誤差を18%削減し、より自然で正確な動きの復元が可能になりました。",
      "why_it_matters": "全身の統計モデルに依存しすぎて手足の細部がぼやけるという課題を、局所的な画像情報の再評価によって解決しています。",
      "tags": [
        "モーションキャプチャ",
        "コンピュータビジョン",
        "ヒューマンポーズ推定"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25330",
      "title": "Follow the Mixed Groups: Ridge-Tracking Gaussian Sampling for Zero-Variance Web Rollouts",
      "url": "https://arxiv.org/abs/2610.25330",
      "pdf": "https://arxiv.org/pdf/2610.25330",
      "authors": [
        "Tomas Duncun",
        "Jonah Ellison",
        "Owen Pell",
        "Mateo Ruiz",
        "Hanae Fujita",
        "Ingrid Solberg"
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
      "star_quote": "RIDGE keeps the Gaussian curriculum and changes the coordinate, the center, and the width.",
      "signals": [],
      "headline": "報酬の分散を最大化するガウス分布サンプリングによりGRPOの学習を効率化するRIDGE",
      "what": "強化学習手法のGRPOにおいて、回答の正誤が混ざり合い報酬の分散が大きくなるような「学習効率の高い質問」を重点的にサンプリングする手法です。Beta事後分布から導出されたガウス分布の重み付けを用い、すでに正答率が極端に近い問題をスキップします。",
      "enables": "数学の推論タスク等において、従来のGRPOと比較してロールアウト数を約30%削減しつつ、平均正解精度を最大3.4ポイント向上させました。",
      "why_it_matters": "全正解または全不正解の「学習に寄与しない」サンプルへの計算資源投入を避け、限られたコンピューティングリソースを有効活用するサンプリング戦略を提示しています。",
      "tags": [
        "LLM",
        "強化学習",
        "学習効率"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26165",
      "title": "TriTD: Tri-Partite Trajectory-Distribution Distillation for Real-Time Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2610.26165",
      "pdf": "https://arxiv.org/pdf/2610.26165",
      "authors": [
        "Jia Li",
        "Xurui Peng",
        "Haowei Zhu",
        "Tianyu Zhao",
        "Jiexi Wang",
        "Youwei Zheng"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reaching a real-time throughput of 26.8 FPS on a single H100 GPU",
      "signals": [],
      "headline": "リアルタイムな自己回帰ビデオ生成を可能にする3部構成の蒸留フレームワークTriTD",
      "what": "自己回帰ビデオ拡散モデルの累積エラーと推論コストを削減するための3つの蒸留・最適化モジュール（NTD, CGN, OP-DMD）を組み合わせた手法です。ノイズスケジュールの調整により冗長なKVキャッシュの更新を排除し、学習と推論の不整合を抑えます。",
      "enables": "単一のH100 GPU上で26.8 FPSというリアルタイムのスループットを維持しながら、既存のベースラインを超える高品質なビデオ生成を達成しました。",
      "why_it_matters": "ストリーミングビデオ生成などのインタラクティブな用途に耐えうる「画質」と「実行速度」の両立に向けた理論的裏付けと実践的手法を提供しています。",
      "tags": [
        "ビデオ生成",
        "拡散モデル",
        "リアルタイム"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26216",
      "title": "RoAR-VAE: Improving Latent Diffusability through Robust Prediction",
      "url": "https://arxiv.org/abs/2610.26216",
      "pdf": "https://arxiv.org/pdf/2610.26216",
      "authors": [
        "Yang Yue",
        "Fangyun Wei",
        "Yitong Wang",
        "Jinjing Zhao",
        "Henry Zheng",
        "Dong Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code is available at https://github.com/LeapLabTHU/RoAR_VAE",
      "hf_upvotes": 26,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "RobustAlign predicts pretrained semantic features from corrupted latents to preserve high-level structure",
      "signals": [],
      "headline": "頑健な意味・外観予測を通じて拡散モデルの学習効率を高めるRoAR-VAE",
      "what": "拡散モデルの入力となる潜在変数を生成するVAEにおいて、破損した潜在変数からも元の意味的特徴や細部の外観を復元できるように学習させる「Robust Prediction」の原則を導入した手法です。生成に重要な情報を潜在空間の目立つ方向に配置します。",
      "enables": "同等の学習コストで、画像生成ベンチマークのスコアを2.19ポイント向上させ、特にFLUX.1-VAEと比較して小さいテキストの再現精度を16.93ポイント改善しました。",
      "why_it_matters": "単に画像を再構成するだけでなく「後の拡散モデルが学習しやすい形式」で情報を符号化することが生成性能の向上に繋がることを示しています。",
      "tags": [
        "画像生成",
        "VAE",
        "潜在空間"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2610.20424",
      "title": "BizBench: Unveiling Hidden Challenges in Deploying Long-Horizon Agents for Real-World Business",
      "abstract": "Existing long-horizon agent benchmarks often emphasize final task success while providing limited assessment of intermediate execution validity. Yet real-world business operations require agents to navigate extensive, potentially outdated or conflicting policies while satisfying critical constraints throughout execution. These requirements are particularly consequential in high-stakes domains such as payments, where intermediate violations can incur financial losses or regulatory consequences regardless of the final outcome. To bridge this evaluation gap, we introduce BizBench, a multi-turn benchmark grounded in real-world procedures from a leading payments company. Its executable environment integrates 789 knowledge documents and 601 discoverable business tools, with consistent policies, states, and tool behavior. The benchmark comprises 50 tasks involving resource constraints, temporal dependencies, prior commitments, and conflicting or outdated guidance. Each task is validated through reference execution, while deterministic checks assess both goal attainment and execution validity without prescribing a single solution path. Experiments reveal substantial limitations even among frontier models: Claude Opus 5 and GPT-6 Sol achieve strict success rates of only 64.0% and 61.3%, respectively. For Qwen3.8-27B, goal attainment reaches 42.0%, but strict success drops to 32.7%, demonstrating how outcome-based evaluation can mask invalid execution. Beyond success rates, DeepSeek-V4.1-Flash averages 191.3 tool calls per run, approximately 70% more than reference executions, revealing substantial execution overhead. Overall, BizBench establishes a testbed for evaluating and advancing long-horizon agents beyond task completion, toward reliable and constraint-compliant execution in complex business environments.",
      "upvotes": 492,
      "github_stars": 31,
      "github_repo": "https://github.com/ant-intl/BizAgentBench",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.20424",
      "arxiv_url": "https://arxiv.org/abs/2610.20424",
      "title_ja": "BizBench: 実世界ビジネスにおける長期間エージェント展開の隠れた課題を明らかにする",
      "summary_ja": "BizBenchは、実世界のビジネス手順に基づき、中間実行の有効性を評価するベンチマークです。"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "abstract": "GPT-6-Astra demonstrates a level of competence in robotic manipulation and navigation that challenges the conventional paradigm of building specialized models for individual tasks and embodiments. In this report, we ask not only how capable GPT-6-Astra is, but what its capabilities imply for the field. First, we probe the limits of standalone GPT-6-Astra. We conduct a large-scale evaluation across 12 representative benchmarks spanning tabletop manipulation, humanoids, mobile platforms, and dexterous hands. Under a unified protocol that allows in-context learning (ICL) from training-set demonstrations and substantially increases the number of execution steps, GPT-6-Astra achieves unprecedented performance (Fig. 1). Future research may focus on improving 1) the generality of ICL 2) cost and execution time, 3) physical-state verification, 4) recovery from irreversible failures, and 5) long-horizon preservation of progress. Second, we study the agentic harness for embodied control. We identify that close-loop coordination between a high-level \"System 2\" reasoner (i.e., GPT-6-Astra) and a low-level \"System 1\" controller (e.g., π0.5) is costly but effective. Third, we examine GPT-6-Astra on real-world deployment. Our experiments on 8 robot configurations reveal substantial gaps: 1) robot demonstrations required for ICL are expensive to collect, and 2) it is implausible to trade longer execution for higher success rates with physical constraints. Fourth, we envision the next generation of embodied benchmarks. We develop a prototype that 1) derives tasks from real-world needs, 2) provides no in-domain demonstrations, and 3) judges agents on a world clock that keeps running while they deliberate. Taken together, our results suggest that GPT-6-Astra has largely crossed the threshold of embodied competence, but not yet that of practical embodied intelligence.",
      "upvotes": 465,
      "github_stars": 243,
      "github_repo": "https://github.com/OpenSenseNova/SenseNova-RoboRSI",
      "project_page": "https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "comments": 2,
      "org": "SenseNova",
      "url": "https://huggingface.co/papers/2610.22471",
      "arxiv_url": "https://arxiv.org/abs/2610.22471",
      "title_ja": "GPT-6-Astraは具現化された知能を達成したか？",
      "summary_ja": "GPT-6-Astraは、ロボットの操作とナビゲーションにおいて、従来の専門モデルを超える能力を示しました。"
    },
    {
      "id": "2610.28402",
      "title": "StreamEval: Evaluating Interactive Streaming Video Generation Models",
      "abstract": "As streaming video generation advances, enabling real-time interaction with generated video is becoming increasingly important. We introduce StreamEval, a unified benchmark for interactive streaming video generation spanning five tasks: avatar dialogue, avatar performance, world generation, instruction editing, and reference editing. StreamEval comprises 300 scripted test cases lasting 15-300s, each specifying initial assets, incrementally arriving multimodal requests, and explicit requirements for state changes and content preservation. Performance is assessed along four evaluation dimensions: task execution, state consistency, visual fidelity, and audiovisual coordination, instantiated through ten task-specific metrics on a 0-100 scale. Evaluating 37 distinct models across 300 test cases, we find that high visual quality and identity retention do not necessarily coincide with reliable request execution or sustained state consistency. In particular, request execution remains challenging: the highest task-specific scores are 36.90 for Following among seven avatar-performance models, 25.93 for Following in text-conditioned world generation, and 15.00 for Edit Success among three reported reference-editing models. These findings identify reliable request execution under timing and preservation constraints as a central challenge for advancing omni-modal real-time interactive systems. The leaderboard is available at https://streameval.ai",
      "upvotes": 349,
      "github_stars": 90,
      "github_repo": "https://github.com/StreamEval/StreamEval",
      "project_page": "https://streameval.ai/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.28402",
      "arxiv_url": "https://arxiv.org/abs/2610.28402",
      "title_ja": "StreamEval: 対話型ストリーミングビデオ生成モデルの評価",
      "summary_ja": "StreamEvalは、リアルタイム対話型ストリーミングビデオ生成モデルを評価する統一ベンチマークです。"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "abstract": "Brain encoding models aim to predict neural responses to stimuli. The most widely used approach fits readouts from frozen pretrained backbones. Using neural data to train large models from scratch or fully fine-tune them after task-pretraining has proven difficult because neural data is costly and limited. We show that parameter-efficient fine-tuning (PEFT) enables us to effectively adapt very large pretrained backbones for brain encoding with a small number of trainable parameters. To make it computationally practical, we exploit the backbone's causal structure to predict multiple timepoints in a single pass instead of using sliding windows, significantly reducing feature-extraction cost. This enables efficient fine-tuning of multimodal backbones with up to 104B parameters, the largest model adapted for brain encoding to our knowledge. Trained with a low-rank adapter (LoRA) and a lightweight readout, our approach consistently improves brain encoding performance across nine diverse multimodal backbones. On the same Qwen3-Omni backbone as the prior state-of-the-art (SoTA), our method BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge. We also show the adapted multimodal backbones remain interpretable: modality attribution recovers the canonical sensory topography that prior work often obtains by construction from separate unimodal encoders, and neural adaptation increases the contribution of audio inputs and cross-modal mixing within the backbone. To scale out the number of adapted models, we develop a multi-LoRA kernel that accelerates joint training of multiple LoRAs on a shared backbone. This enables an ensemble of 200+ adapted models that ranks first on the public Algonauts post-challenge leaderboard at the time of writing. Together, our results highlight PEFT as an efficient and powerful paradigm for brain encoding.",
      "upvotes": 244,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.26802",
      "arxiv_url": "https://arxiv.org/abs/2610.26802",
      "title_ja": "脳エンコーディングのためのパラメータ効率の良いファインチューニングのスケールアップ",
      "summary_ja": "パラメータ効率の良いファインチューニング(PEFT)により、大規模モデルで脳エンコーディングを可能にしました。"
    },
    {
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "abstract": "Moving from controllable videos to genuinely playable worlds requires persistent world state, executable game rules, and low-latency interaction. We outline a roadmap for the next generation of Matrix-Game that separates game execution from visual generation through an executable game harness, and introduce Matrix-Game 4.0 as the first system built on this design. A lightweight game engine maintains world state and executes interaction rules, a multimodal coding agent translates player ideas into game code and dynamic scene captions, and a renderer based on autoregressive video model transforms engine-rendered low-poly proxies into detailed visuals, conditioned on dynamic captions and memory references. This framework provides continuous guidance for visual generation and enables natural-language creation and modification of scenes and gameplay. Our renderer is trained on aligned low-poly and high-fidelity video pairs and distilled into a causal generator that generates in four-frame chunks with one or two denoising steps. Together with targeted inference optimizations, Matrix-Game 4.0 enables 480p, 60 FPS gameplay on a single NVIDIA RTX5090 with a key-press-to-display latency of 112ms. Single-step generation achieves 83FPS steady-state throughput with 18.2GiB of peak GPU memory usage. With fixed prompts, steady-state throughput also reaches 67FPS on an RTX5080 and 58FPS on an RTX5070Ti. We demonstrate customizable shooter and driving games with engine-enforced mechanics, and release code, model weights, and low-poly game assets to support research and creation of playable game worlds.",
      "upvotes": 190,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://matrix-game-v4-0.github.io/page/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.27999",
      "arxiv_url": "https://arxiv.org/abs/2610.27999",
      "title_ja": "Matrix-Game 4.0: ビデオモデルを活用したリアルタイムのプレイ可能なゲーム世界",
      "summary_ja": "Matrix-Game 4.0は、ゲーム実行と視覚生成を分離し、リアルタイムでプレイ可能な世界を構築します。"
    },
    {
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "abstract": "Reconstructing human activity from egocentric video requires more than recovering individual 3D components: the observer's motion, surrounding geometry, and hand-object interactions must fit together in a consistent world. Achieving this coherence requires both joint reconstruction and aligned supervision, yet existing methods and datasets offer limited support for either. We present EgoXperience, a full-stack paradigm that addresses these needs through data collection, automatic annotation, unified modeling, and benchmarking. Central to EgoXperience is an automatic annotation engine, EgoX-Engine, that couples geometrically verified object tracking with SLAM-based world alignment, yielding consistent supervision for the camera, scene, hands, and objects. This yields EgoX-Data-6M, a 50-hour dataset of task-driven manipulation and locomotion within and across indoor and outdoor environments, with second-level task captions. We carefully select one hour across these activity categories as EgoX-Bench to evaluate joint reconstruction. To translate this supervision into reconstruction, we introduce EgoX, trained with EgoX-Data-6M and complementary annotations from additional public datasets. Given monocular egocentric video and first-frame object masks, our model achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame with a single forward pass. Extensive experiments demonstrate state-of-the-art performance across scene estimation and world-space hand-object pose recovery. Against the strongest evaluated baselines, EgoX reduces camera, hand, and depth errors by 68.9%, 65.6%, and 42.9%, and improves object pose scores by 28.0%.",
      "upvotes": 187,
      "github_stars": 23,
      "github_repo": "https://github.com/Ropedia/EgoXperience",
      "project_page": "https://ropedia.github.io/EgoXperience",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26625",
      "arxiv_url": "https://arxiv.org/abs/2610.26625",
      "title_ja": "EgoXperience: 人間の経験から世界に基づいた自己中心的な表現を学習する",
      "summary_ja": "EgoXperienceは、自己中心的なビデオから人間の活動を再構築するためのデータ収集・アノテーション・モデリングのパラダイムです。"
    },
    {
      "id": "2610.26549",
      "title": "Holi-World: Building Holistic World Intelligence from Human-Ego Experience",
      "abstract": "Human egocentric experience offers a rich foundation for learning how the world is organized and how it changes through interaction. Realizing this potential at scale requires turning growing volumes of recordings into learning resources that connect scene structure, object semantics, and interaction histories across viewpoints and time, while reducing dependence on costly manual annotation. We introduce HOLI-WORLD, an integrated ecosystem connecting experience capture, world representation, automated data construction, model learning, and independent evaluation. To sup- port learning at scale, HOLIWORLD-Foundry combines complementary static and dynamic perception to automatically construct world records that connect persistent scene structure and evolving object states with interaction histories and supporting observations. HOLIWORLD-Data organizes these records from approximately 100 self-collected scenes into grounded learning resources, including approximately 80K QA pairs used to train HOLIWORLD-VL-4B. Independent human annotations of heldout recordings form HOLIWORLD-Bench, supporting evaluation of both annotation quality and learned spatial and temporal understanding. Experiments on ScanNet, ScanNet++, Aria Digital Twin, and HOLIWORLD-Bench demonstrate strong performance in static perception and dynamic tracking, while training on HOLIWORLD-Data substantially improves HOLIWORLD-VL-4B's spatial and temporal reasoning on HOLI- WORLD-Bench and EgoDynamic4D. HOLIWORLD provides a practical foundation for expanding learning resources from the continuous flow of human experience and advancing machine understanding of the dynamic world.",
      "upvotes": 170,
      "github_stars": 13,
      "github_repo": "https://github.com/Ropedia/holi-world",
      "project_page": "https://ropedia.github.io/holi-world",
      "comments": 3,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26549",
      "arxiv_url": "https://arxiv.org/abs/2610.26549",
      "title_ja": "Holi-World: 人間中心の経験から包括的な世界知能を構築する",
      "summary_ja": "HOLI-WORLDは、人間の自己中心的な経験から世界の構造と変化を学習するための統合エコシステムです。"
    },
    {
      "id": "2610.19159",
      "title": "Into the Unknown: Benchmarking AI agents on open scientific research problems",
      "abstract": "Can AI agents carry out research on open scientific problems? We introduce Into the Unknown, a benchmark that provides an agent with a science paper along with a research direction to pursue and tasks it to write a follow-up paper. We work with scientists at US Department of Energy (DOE) national laboratories, who each contribute an unpublished follow-up direction from their own work together with the necessary conditions a submission must meet. While assessing the quality of a follow-up paper is challenging in general, using these conditions to form a rubric makes evaluation more tractable for research problems that have no reference answer. We have nine frontier agents write 15 follow-ups each, spanning quantum computing, plasma physics, computational chemistry, materials science, and scientific machine learning domains. None of the 135 submissions satisfies all the conditions, and 114 fail our integrity check, most often because the paper claims work that was never done or reports numbers that contradict the recorded evidence. Overall, agents readily produce papers that look like follow-ups, but none meets the standard of the domain scientist, leaving substantial headroom. Our code and data are publicly available.",
      "upvotes": 156,
      "github_stars": 20,
      "github_repo": "https://github.com/prometheus-eval/into-the-unknown",
      "project_page": "https://prometheus-eval.github.io/into-the-unknown/viewer/#/",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.19159",
      "arxiv_url": "https://arxiv.org/abs/2610.19159",
      "title_ja": "未知の世界へ: 未解決の科学研究問題におけるAIエージェントのベンチマーク",
      "summary_ja": "Into the Unknownは、AIエージェントが未解決の科学研究問題に取り組む能力を評価するベンチマークです。"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "abstract": "Looped language models can run more iterations at test time, but additional iterations need not help them solve longer problems. For sequential state tracking, final-answer supervision does not specify how far each iteration should advance, and repeated updates can change the scale of the recurrent state. We introduce Progress-Aligned Recurrence (PAR), which trains the prediction at iteration k to match the state after the first k operations and rescales recurrent states to their first-iteration norms. On swap-S_5, a Qwen2.5-0.5B model trained on at most 32 moves achieves 95.5\\% mean full-state accuracy at 512 moves, or 16times the training length, compared with 55.7\\% reported for RLT and 0.8\\% for explicit chain of thought on the same backbone. Controlled S_5 ablations show that removing norm anchoring reduces the extrapolation factor from 16times to below 2.2times, and replacing progress-aligned targets with final-answer supervision reduces it to at most 8times. A learned completion readout selects when to answer without a supplied stopping depth. When intermediate labels are unavailable, prefix self-distillation induces the correspondence from shorter problem prefixes using only final answers. The gains apply across sequential state-tracking tasks, establishing the task structure required for depth extrapolation. These findings support training intermediate predictions and state scale together to make additional recurrent depth useful for longer problems.",
      "upvotes": 155,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.27628",
      "arxiv_url": "https://arxiv.org/abs/2610.27628",
      "title_ja": "PAR: 状態追跡における長さ汎化のための進行度調整反復",
      "summary_ja": "PARは、進行度に合わせて反復を調整することで、状態追跡の長さ汎化を大幅に向上させます。"
    },
    {
      "id": "2610.26855",
      "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
      "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, Ψ_0, ω-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
      "upvotes": 144,
      "github_stars": 44,
      "github_repo": "https://github.com/Ropedia/ropedia-w0",
      "project_page": "https://ropedia.github.io/ropedia-w0/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26855",
      "arxiv_url": "https://arxiv.org/abs/2610.26855",
      "title_ja": "Ropedia W0: 人間の経験でロボットの行動・操作世界モデルをスケーリングする",
      "summary_ja": "Ropedia W0は、人間と多様なロボットに対応する初の自己中心的な行動・操作世界基盤モデルです。"
    },
    {
      "id": "2610.21783",
      "title": "Learning to Think and Explore in 3D World",
      "abstract": "We study how vision-language models (VLMs) can learn to think and actively explore in 3D space. Instead of providing multi-view images, videos, or 3D representations to the model, we preserve the native visual encoding of VLMs, i.e., a single image, one at a time, just like humans, and treat the 3D representation only as an environment with which the model can interact through actions (e.g., move left) and observations (rendered images). Each rollout begins from an initial first-person view and a visual question. The model can then iteratively reason, navigate, and reorient its viewpoint before committing to a final answer. Following an initial trajectory-supervised finetuning, we apply reinforcement learning (RL) with rewards driven primarily by final-answer correctness. Crucially, RL provides no direct supervision over which viewpoints the model should visit or which exploration actions it should take. Instead, the model must learn an effective exploration policy solely from the extent to which its interactions improve performance. Across six 3D benchmarks, our model ACT3D achieves an average accuracy of 53.2% that improves its base Qwen model by 22.0% and surpasses proprietary Gemini 3.6 Flash. ACT3D also outperforms existing open-source 3D methods while using 50-70% fewer input frames, and generalizes to unseen domains with an average improvement of 5.9% over its supervised initialization. Further analysis reveals adaptive, question-conditioned exploration. Performance gains over the base model increase from 0.6% on questions answerable from the initial view to 16.3% on those requiring extensive exploration. ACT3D searches for occluded targets, avoids unnecessary exploration, and acquires complementary viewpoints for spatial comparisons. These findings demonstrate that outcome-based RL enables VLMs not only to reason over visual evidence, but also to learn when and how to acquire it.",
      "upvotes": 138,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://williamium3000.github.io/act3d/",
      "comments": 2,
      "org": "University of California at San Diego",
      "url": "https://huggingface.co/papers/2610.21783",
      "arxiv_url": "https://arxiv.org/abs/2610.21783",
      "title_ja": "3D世界で思考し探索することを学ぶ",
      "summary_ja": "VLMが3D空間で思考し、アクティブに探索することを学習する手法を研究します。"
    },
    {
      "id": "2610.26825",
      "title": "MemT-1.0: Towards Memory-Native Evolution",
      "abstract": "Memory-native evolution requires making memory an intrinsic capability of foundation models, enabling them to continuously accumulate and utilize information. To this end, we introduce MemT-1.0, a new architecture of memory foundation models that internalize memory as part of model computation. Building on Metis, MemT-1.0 employs Gated DeltaNet-2 with a stable token-level memory update mechanism within each turn. We further introduce Mixture-of-Storage to scale native memory capacity. Following a deliberate backbone preparation, we develop a two-stage training pipeline consisting of continued pre-training and post-training, supported by 34B tokens of training data and efficient training and inference infrastructure. We release a model family comprising MemT-1.0-Nano and MemT-1.0-Flash, and conduct a comprehensive evaluation of memory and general capabilities. The results show that they outperform the parametric memory baselines on average and remain competitive with retrieval-augmented methods, while largely preserving general capabilities. At a history length of 128K tokens, MemT-1.0-Nano achieves approximately 1.86times end-to-end inference speedup and a 66times reduction in persistent storage relative to full context KV cache. By internalizing retrieved procedural experience, MemT-1.0 improves task success on agentic tasks, providing a practical step toward memory-native evolution.",
      "upvotes": 133,
      "github_stars": 334,
      "github_repo": "https://github.com/MemTensor/MemT-1.0",
      "project_page": "https://huggingface.co/collections/MemTensor/memt-1",
      "comments": 3,
      "org": "MemTensor",
      "url": "https://huggingface.co/papers/2610.26825",
      "arxiv_url": "https://arxiv.org/abs/2610.26825",
      "title_ja": "MemT-1.0: メモリネイティブな進化に向けて",
      "summary_ja": "MemT-1.0は、メモリをモデル計算の一部として組み込んだ新しいメモリ基盤モデルアーキテクチャです。"
    },
    {
      "id": "2610.26659",
      "title": "SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?",
      "abstract": "Spatial intelligence requires agents to actively acquire visual evidence and integrate observations into a coherent representation of the three-dimensional world. Yet spatial question answering offers limited evidence of whether models can construct accurate metric maps through autonomous exploration. We introduce SpatialScout, a benchmark for evaluating vision-language model (VLM) agents on active object-level 3D mapping. SpatialScout comprises 80 diverse indoor scenes containing 3,140 target objects. Given an object inventory, RGB observations, camera calibration, and camera poses, agents control a camera to explore each scene and estimate object centers in a shared coordinate frame. The task requires coordinating viewpoint selection, cross-view association, geometric estimation, and map revision under bounded interaction budgets. Evaluation jointly measures localization accuracy and target coverage through object-scale overlap scores that penalize missing predictions. Experiments with frontier VLMs reveal substantial limitations: the strongest evaluated model, Claude Opus 5.5, achieves a mean overlap score of 41.71%, with 47.23% of targets exceeding an intersection-over-union (IoU) threshold of 0.5 and only 3.25% exceeding 0.9. These results reveal a substantial gap between recovering coarse object layouts and constructing complete, precise metric maps. SpatialScout provides a quantitative testbed for developing agents that build reliable 3D spatial representations through active perception. Code is available at https://github.com/JesseZZZZZ/SpatialScout.",
      "upvotes": 129,
      "github_stars": 5,
      "github_repo": "https://github.com/JesseZZZZZ/SpatialScout",
      "project_page": "https://spatialscout.osslab-pku.org",
      "comments": 2,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2610.26659",
      "arxiv_url": "https://arxiv.org/abs/2610.26659",
      "title_ja": "SpatialScout: VLMエージェントは3Dシーンを積極的に探索しマッピングできるか？",
      "summary_ja": "SpatialScoutは、VLMエージェントのアクティブなオブジェクトレベル3Dマッピング能力を評価するベンチマークです。"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "abstract": "Experience generated during deployment offers an opportunity for robots to improve policy reliability through learning from their own executions. However, learning through human corrections requires teleoperators to monitor execution and intervene when policies fail, a demand that is difficult to meet as robot fleets grow. We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience to improve a common policy. We realize CEL through failure-guided experience retrieval fine-tuning (FERT), which uses failure contexts from robot executions to retrieve relevant trajectory segments from the fleet's shared successful experience and uses their actions as supervision for policy updates, without collecting additional expert demonstrations or corrective actions. A fault-tolerant asynchronous training system (FATS) coordinates experience collection, policy optimization and policy distribution despite local interruptions within the robot fleet. Across five real-world manipulation tasks, the resulting policies achieve success rates of 93.3-99.2%, evaluated over 120 trials per task on robots excluded from training data collection. With collection time per robot held fixed, larger fleets provide more experience and FERT generally achieves higher success rates across the evaluated sizes. On multi-stage phone packaging, learning with 96 robots increases success from 79.2% to 98.3%. These results support collective experience as a practical basis for scalable robot learning and a path towards improving policy reliability during deployment without collecting additional expert corrective actions.",
      "upvotes": 125,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cel-robot-learning.github.io",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25736",
      "arxiv_url": "https://arxiv.org/abs/2610.25736",
      "title_ja": "フリート経験からの学習: ロボットのための集合的学習パラダイム",
      "summary_ja": "CELは、ロボットが実行経験を共有して共通ポリシーを改善する集合的学習パラダイムです。"
    },
    {
      "id": "2610.29997",
      "title": "DONIC: Generalist Dexterous Bimanual Tracking Control from Human Demonstrations",
      "abstract": "Despite recent progress in dexterous reference tracking, existing models focus primarily on single-hand manipulation and a limited range of interactions, leaving the bimanual dexterous behaviors common in real life unaddressed. The scarcity of contact-rich bimanual manipulation data and the increased complexity of coordinating contacts make developing a generalist bimanual tracker particularly challenging. Therefore, we present 1) DONIC, the first generalist bimanual tracker jointly trained across operation categories and human-motion sources, together with 2) BiHOI, a multi-view dataset of 1,575 sequences spanning 229 objects and emphasizing sustained bimanual interaction, where reconstructed interactions are retargeted into robot references. DONIC combines proximal policy optimization with behavioral cloning in a feedback loop that recycles verified successful executions into training demonstrations. An object-centered per-hand reward maintains object-motion feedback while supervising each hand according to its reference contact role. Clip-Centered Advantages remove reference-dependent advantage offsets while preserving within-trajectory differences. Together, these designs enable one single policy to learn coordinated manipulation across heterogeneous references. Without finetuning, a single checkpoint achieves 86.79% success on unseen trajectories of training objects and 57.32% on held-out objects, surpassing the state-of-the-art bimanual tracking baselines by 77.36 and 45.73 percentage points.",
      "upvotes": 124,
      "github_stars": 20,
      "github_repo": "https://github.com/Ropedia/DONIC",
      "project_page": "https://ropedia.github.io/DONIC/",
      "comments": 1,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.29997",
      "arxiv_url": "https://arxiv.org/abs/2610.29997",
      "title_ja": "DONIC: 人間のデモンストレーションからの汎用両手器用追跡制御",
      "summary_ja": "DONICは、多様な操作カテゴリと人間の動きから学習した初の汎用両手器用トラッカーです。"
    },
    {
      "id": "2610.18784",
      "title": "Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents",
      "abstract": "Long-horizon agents accumulate progress in persistent task state, yet repeatedly process interaction histories describing how that progress was achieved. This raises a natural question: can long-horizon context instead be organized around reusable progress rather than the history that produced it? In this paper, we introduce CarryOn, an object-oriented context runtime that organizes continuation around reusable task objects. Rather than treating compressed histories or reconstructed accounts of progress as the primary basis for continuation, CarryOn builds a context view from continuation carriers, complementary execution context, and a live tail of recent interactions. A core challenge is keeping this reusable basis valid after its surrounding history is retired: how can CarryOn update the basis without reconstructing the full representation at every fold? CarryOn maintains carrier records across folds, revising affected records against bound evidence and applicable environment checks while carrying forward unaffected records and jointly updating execution context. Experiments on OSWorld 2.0 and BrowseComp-Plus show improved gains of 5.8% and 7.0% while reducing total token usage by 51.9% and 22.9%, respectively. Project page: https://ethannju.github.io/carryon",
      "upvotes": 119,
      "github_stars": 5,
      "github_repo": "https://github.com/Ethannju/carryon",
      "project_page": "https://ethannju.github.io/carryon/",
      "comments": 3,
      "org": "McAuley-Lab",
      "url": "https://huggingface.co/papers/2610.18784",
      "arxiv_url": "https://arxiv.org/abs/2610.18784",
      "title_ja": "Pack Light, CarryOn: 長期エージェントのためのオブジェクト指向コンテキストの構築",
      "summary_ja": "CarryOnは、再利用可能なタスクオブジェクトを中心にコンテキストを整理するオブジェクト指向ランタイムです。"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "abstract": "Agents built on vision language models (VLMs) now compete with learned policies on robot manipulation leaderboards. We ask how far a coding agent can go when it controls a robot instead of a computer, and where it stops. Our system, HexaShell, keeps the harness thin: it only turns the agent's commands into robot motion. The agent drives a robot with two arms through one command line. It sees three RGB cameras and knows their calibration. After each failed attempt, the agent reads the log, finds the cause, and writes or fixes small programs called tools. In this way it keeps what it learns as code, as a coding agent does when it fixes a failing test. The tools may use only what the robot observes. They use triangulation to find where objects are, relative to each other and to the gripper. If two cameras see the same point, the point lies where the two camera rays meet. If a point lies on a known plane, such as the table or the top of a block, it lies where its ray meets that plane. When the head camera is not enough, the robot moves a wrist camera to get a second view. We build the tools on only ten layouts of one seed per task, then freeze them and test them on ten new layouts of the same seed. We use Codex with GPT-6-Astra at medium reasoning effort. On all 42 RoboDojo tasks, HexaShell reaches a success rate of 39.7% and a progress score of 48.0, averaged in the same way as the leaderboard. This is a new state of the art on RoboDojo. The limit is contact, not reasoning: pushing reaches 92.5% and memory tasks 65.0%, but tight insertion only 8.3%. When the agent fails, it usually sees the failure but cannot make the motion work. We open source the tools evolved so far at https://github.com/HexaFuture/HexaShell.",
      "upvotes": 118,
      "github_stars": 111,
      "github_repo": "https://github.com/HexaFuture/HexaShell",
      "project_page": "https://hexafuture.ai/home/",
      "comments": 3,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2610.23479",
      "arxiv_url": "https://arxiv.org/abs/2610.23479",
      "title_ja": "HexaShell: VLMエージェントをロボットコーディングエージェントとして利用する薄いハーネス",
      "summary_ja": "HexaShellは、VLMエージェントがロボットを制御する際の限界を探るためのシンプルなシステムです。"
    },
    {
      "id": "2610.25078",
      "title": "CoEvo-RSI: When Harnesses Evolve, Which Models Should Follow?",
      "abstract": "Model--harness co-evolution has emerged as a prominent paradigm for recursive self-improving (RSI) agents, jointly evolving their execution scaffolds and intrinsic capabilities. We study the persistent yet often overlooked brain--body mismatch problem in this paradigm, where an evolving harness (body) demands behaviors its model (brain) has not learned or restricts capabilities it already possesses. We introduce CoEvo-RSI, a RSI framework that advances model--harness co-evolution through agent-driven, bidirectional historical inheritance. Drawing on a shared evolutionary archive and execution feedback, a meta-agent coordinates harness development from historical designs with model checkpoint selection or merging and subsequent adaptation under the selected harness, aligning inherited capabilities with evolving execution requirements to reduce brain--body mismatch. Using only supervised fine-tuning (SFT) on its own rejection-sampled trajectories, CoEvo-RSI makes Qwen3.5-9B competitive with larger models across diverse vertical applications, including multi-agent failure attribution, role-aware text-to-SQL, and smart-home instruction following. It surpasses DeepSeek-V4-Pro on TraceElephant (+14.16 agent accuracy) and GLM-5.3 on HomeBench VM (+4.90 success rate), underscoring the need for brain--body alignment and the potential of bidirectional historical inheritance to advance agent co-evolution.",
      "upvotes": 115,
      "github_stars": 7,
      "github_repo": "https://github.com/SuJQ0722/CoEvo-RSI",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25078",
      "arxiv_url": "https://arxiv.org/abs/2610.25078",
      "title_ja": "CoEvo-RSI: ハーネスが進化するとき、どのモデルが追随すべきか？",
      "summary_ja": "CoEvo-RSIは、モデルとハーネスの共進化をエージェント主導で進める自己改善フレームワークです。"
    },
    {
      "id": "2610.29989",
      "title": "Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation",
      "abstract": "Autoregressive video diffusion models generate videos chunk by chunk, yet producing plausible continuations does not guarantee that they capture how scenes evolve. Under teacher forcing, strong temporal redundancy may allow local visual continuity to serve as a shortcut for current-chunk denoising, reducing the pressure to model visual evolution. We introduce Future Chunk Prediction (FCP), an auxiliary objective jointly optimized with teacher-forced denoising that predicts temporally separated chunks without access to the intervening visual context. Drawing supervision directly from training videos, FCP requires no additional pretrained visual encoder and leaves autoregressive inference unchanged. Our method achieves superior physical plausibility over standard teacher-forced autoregressive training with a lower overall training compute budget, highlighting the effectiveness and efficiency of future-chunk supervision for modeling visual evolution. Intriguingly, our visualizations suggest that FCP fosters a more structured representation space, which may be valuable for building autoregressive world models.",
      "upvotes": 112,
      "github_stars": 52,
      "github_repo": "https://github.com/TencentARC/Looking-Ahead",
      "project_page": "https://hellorpg.github.io/looking-ahead/",
      "comments": 2,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.29989",
      "arxiv_url": "https://arxiv.org/abs/2610.29989",
      "title_ja": "将来を見据えて: 自己回帰ビデオ生成における将来の進化のモデリング",
      "summary_ja": "FCPは、将来のビデオチャンクを予測する補助目的で、自己回帰ビデオ生成の品質を向上させます。"
    },
    {
      "id": "2610.28577",
      "title": "Cache Engineering for Agents",
      "abstract": "Large Language Model (LLM) agents can handle increasingly complex tasks, navigating long trajectories of observations and actions. As these trajectories grow, key-value (KV) cache I/O and storage become the dominant cost. Trajectories can also exceed the LLM's maximum context length, requiring control over active cache growth. Prior work uses context engineering to reduce cache size by trimming or summarizing history. However, modifying the trajectory prefix invalidates subsequent cached states and triggers costly re-prefilling of retained context. Task accuracy can also suffer when too little context is retained to limit re-prefill costs. We propose cache engineering as a new scheme. It allows agents to directly control their active KV cache without modifying the trajectory or re-prefilling retained context. Specifically, agents can proactively use drop to exclude selected cache from future attention and repos to adjust retained keys' position encodings. We formalize these cache operations and identify history dependence as a serving challenge: identical token sequences can yield different cache states under different cache operation sequences, making prefix matching insufficient for correct cache reuse. Thus, we co-design the AKV serving engine. It provides a stateless interface compatible with existing serving APIs, while internally managing stateful cache reuse, eviction, and restoration. Experiments show that a tool-response rolling-drop cache policy improves average benchmark scores by 1.7 points and reduces average cost by 27.7%, compared with conventional threshold-triggered summarization. With AKV, it achieves up to 1.2x the output throughput and a 1.5x speedup in P95 request latency. Recursive self-improvement of cache policies further reduces cost by 7.1% over expert design. Our code is at https://github.com/thu-nics/AKV.",
      "upvotes": 112,
      "github_stars": 29,
      "github_repo": "https://github.com/thu-nics/AKV",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/akv/",
      "comments": 1,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.28577",
      "arxiv_url": "https://arxiv.org/abs/2610.28577",
      "title_ja": "エージェントのためのキャッシュエンジニアリング",
      "summary_ja": "キャッシュエンジニアリングは、LLMエージェントの長いタスク実行におけるキャッシュ効率を向上させる新しい手法です。"
    },
    {
      "id": "2610.26860",
      "title": "OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory",
      "abstract": "Multimodal large language models (MLLMs) have made rapid progress on visual reasoning, yet many tasks require evidence that is difficult to obtain through internal reasoning alone: our controlled study on 22 benchmarks shows that simply increasing the inference budget of the base model yields only modest gains. Such tasks demand grounded perception, external knowledge, and numerical measurements obtained through heterogeneous tools, whose outputs must be made interpretable to the model and retained across reasoning steps. We introduce OpenVLHarness, a multimodal reasoning harness organized around a capability layer and persistent multimodal memory. The capability layer combines task-level tool interfaces with evidence rendering, providing consistent access to heterogeneous backends and converting their outputs into model-readable observations. Persistent multimodal memory retains the corresponding images, structured data, and web references as addressable artifacts throughout each query. A coding interface executes generated programs over stored data, enabling computations that combine results from multiple tools. Together, these mechanisms support an iterative process of acquiring, inspecting, and composing multimodal evidence. Evaluated on 22 benchmarks with eight open and proprietary backbones, OpenVLHarness improves average scores by 9.7-12.6 points over matched no-tool baselines, including +11.2 with Qwen3-VL-8B, +9.7 with Kimi K3, and +9.9 with GPT-6 Astra. With GPT-6 Luna at medium reasoning effort, OpenVLHarness outperforms the base model, Codex, and Visual Sketchpad at maximum effort by 7.7-8.5 points while incurring at most 37% of their model-token cost.",
      "upvotes": 112,
      "github_stars": 188,
      "github_repo": "https://github.com/uclanlp/OpenVLHarness",
      "project_page": "https://openvlharness.github.io/",
      "comments": 1,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2610.26860",
      "arxiv_url": "https://arxiv.org/abs/2610.26860",
      "title_ja": "OpenVLHarness: マルチモーダルメモリによる実世界の視覚エージェントツール使用",
      "summary_ja": "OpenVLHarnessは、ツール使用とマルチモーダルメモリを備えた視覚推論ハーネスで、複雑なタスクに対応します。"
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
      "title_ja": "LEV: ループ型意思決定モデルで高速かつ深く考える",
      "summary_ja": "LEVは、レイヤーをループで再実行することで、トークン生成なしに深く思考できる意思決定モデルです。"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "abstract": "Spatial reasoning asks a model to work out where objects are in 3D space, how they relate to one another, and how they move. Agentic VLMs have recently brought large improvements on such tasks by letting the model actively gather evidence with 3D perception tools instead of answering in a single pass. Even so, on many questions the tools return the right evidence and the model still does not arrive at the correct answer: the gap between model and tools, where raw readings become usable conclusions, is left unfilled. We present S-Agent 2.0, a spatial reasoning agent that equips an off-the-shelf general coding agent with a command-line perception toolkit, and we design the interface around one principle: help the VLM close the evidence loop: acquire scene evidence, remember it in a persistent scene memory, and interpret each reading in plain spatial language. This design keeps the full flexibility of a coding agent, and every reading it acts on stays grounded in the tools' geometry. On MMSI-Bench and ReVSI, the toolkit improves a strong open-source model, Qwen3.8-27B, by +13.9 and +20.5 points over the same agent without tools, and a strong closed-source model, Gemini-3.8-Flash, by +11.2 and +9.6 points. With the open backbone S-Agent 2.0 reaches 66.5 on MMSI-Bench and 82.3 on ReVSI, ahead of the specialized system SpatialClaw on the same backbone (62.6 and 74.5), and with Gemini-3.8-Flash it reaches 74.1 and 90.5 against its 67.0 and 79.7. Both tool gains shrink as the backbone grows more capable, but SpatialClaw's shrinks far more on ReVSI, from +13.2 to +2.7, while ours stays at +9.6. S-Agent 2.0 also works across different general coding agent harnesses, such as Codex and Claude Code.",
      "upvotes": 104,
      "github_stars": 25,
      "github_repo": "https://github.com/Ropedia/S-Agent-2.0",
      "project_page": "https://ropedia.github.io/S-Agent-2.0",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.28354",
      "arxiv_url": "https://arxiv.org/abs/2610.28354",
      "title_ja": "S-Agent 2.0: 汎用コーディングエージェントによる空間推論",
      "summary_ja": "S-Agent 2.0は、汎用コーディングエージェントに空間推論ツールキットを装備し、性能を向上させます。"
    },
    {
      "id": "2610.23374",
      "title": "MOSS-Image Technical Report",
      "abstract": "Recent closed-source image generation systems can produce diverse visual content from simple compositions to information-dense graphics, yet open-weight text-to-image models still struggle with dense text and intricate layouts. To narrow this gap, we introduce MOSS-Image, an open generation system that combines high-fidelity visual synthesis with intent-aware composition. First, we pretrain a 5B single-stream diffusion transformer (DiT) from scratch with a carefully designed recipe, enabling bilingual long-form text rendering and precise layout control. Second, we develop an intention-aware agentic prompt enhancement (PE) module that translates diverse user requests into detailed content and layout specifications. Together, they enable MOSS-Image to generate text-rich and layout-coherent images. We further introduce LongLongTextBench (LLTB) for evaluating long-form English and Chinese text rendering, and RealLayoutArena (RLA) for end-to-end layout-rich generation. MOSS-Image achieves state-of-the-art performance among open-weight models on LLTB, with an average text coverage of 96.3%. On RLA, MOSS-Image ranks second in the end-to-end system comparison, while its backbone ranks first among generators evaluated with shared enhanced prompts. We will release the model, training recipe, and evaluation framework to support further research and promote the text-to-image community.",
      "upvotes": 92,
      "github_stars": 1423,
      "github_repo": "https://github.com/OpenMOSS/MOSS-Image",
      "project_page": "https://openmoss.ai/MOSS-Image/",
      "comments": 3,
      "org": "OpenMOSS",
      "url": "https://huggingface.co/papers/2610.23374",
      "arxiv_url": "https://arxiv.org/abs/2610.23374",
      "title_ja": "MOSS-Image 技術レポート",
      "summary_ja": "MOSS-Imageは、高忠実度の画像合成と意図認識の構成を組み合わせたオープンな画像生成システムです。"
    },
    {
      "id": "2610.25690",
      "title": "ScaleNav: Scalable Internet Video Pretraining for Language-Conditioned Local Navigation",
      "abstract": "We study language-conditioned local navigation, where a robot must navigate to a text-specified target visible in its initial observation and stop at the described location. End-to-end navigation policies require diverse training data to generalize across scenes, yet real-robot data is costly to collect and simulated data leaves a sim-to-real gap. Internet egocentric videos offer a scalable source of real-world navigation experience. Our key insight is to learn goal-directed visual dynamics from Internet egocentric videos, and use these dynamics to support robot action generation. To this end, we propose ScaleNav, a unified world-action framework with three-stage training. We first perform instruction-conditioned video pretraining on these videos to learn how observations evolve as the camera approaches instructed targets across diverse real-world scenes. Action alignment then uses action-labeled simulated data to train the model to predict executable action chunks. Joint fine-tuning subsequently optimizes all trainable components together for navigation. ScaleNav achieves success rates of 86.5% on a single-view adaptation of Short-Horizon OVON and 94.9% on our HabitatGS-LN benchmark, outperforming the evaluated baselines on both benchmarks. We further deploy and evaluate ScaleNav on a real quadruped robot, with results supporting the model's ability to generalize to real-world navigation. Code and videos are available at https://zju3dv.github.io/ScaleNav/",
      "upvotes": 89,
      "github_stars": 41,
      "github_repo": "https://github.com/MachEmbodied/ScaleNav",
      "project_page": "https://zju3dv.github.io/ScaleNav/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25690",
      "arxiv_url": "https://arxiv.org/abs/2610.25690",
      "title_ja": "ScaleNav: 言語条件付きローカルナビゲーションのためのスケーラブルなインターネットビデオ事前学習",
      "summary_ja": "ScaleNavは、インターネットの自己中心的なビデオからロボットの言語条件付きローカルナビゲーションを学習するフレームワークです。"
    },
    {
      "id": "2610.11942",
      "title": "Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents",
      "abstract": "A login screen that appears after a tap on Sign in is expected; the same screen after a tap on View order is an attack. For GUI agents, safety is therefore a property of the transition rather than of the screen, and a monitor that inspects only screens can be defeated by reusing a legitimate one. Judging a transition requires an expectation of what should have followed the action. Existing GUI world models provide one, but they output it as text, code, or images, so checking it against the observed screen requires a second model to judge the two. We argue that a world model meant for verification should instead predict in the space in which observations are encoded, and present LGWM, a decoder-free, action-conditioned world model that predicts the representation of the next screen directly, trained without semantic annotation on 1.85M real GUI transitions. Verification reduces to a vector comparison, and the same signal reveals whether a mismatch is harmful. We evaluate on RSWT-BENCH, a diagnostic where each credential screen appears under both a legitimate and a hijacked transition, so detectors that see only the screen are at chance by construction. The training-free score reaches 0.987 AUC at 17 ms per decision, on par with the strongest closed-source VLMs and about ten AUC points above generative GUI world models at over three orders of magnitude lower latency. The residual direction reaches 0.953 AUC at separating harmful from benign violations, where prompted VLMs are near chance. Further analyses show that the prediction is a usable future state rather than an anomaly score. World models have mostly served as simulators or planners; our results point to a third role, verification, for which predicting in representation space is the natural design.",
      "upvotes": 85,
      "github_stars": 1,
      "github_repo": "https://github.com/jiamingzhang94/lgwm",
      "project_page": "https://jiamingzhang.netlify.app/lgwm/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.11942",
      "arxiv_url": "https://arxiv.org/abs/2610.11942",
      "title_ja": "正しい画面、間違った遷移: GUIエージェントの検証器としての世界モデル",
      "summary_ja": "LGWMは、GUIエージェントの安全性を検証するため、観測空間で遷移を予測する世界モデルです。"
    },
    {
      "id": "2610.26824",
      "title": "SpecMRL: Redesign Matryoshka Representation Learning within Parametric Spectrum",
      "abstract": "Matryoshka Representation Learning (MRL) is designed to support flexible representation sizes by jointly optimizing nested prefixes. While effective, this design lacks an explicit constraint to ensure that the leading portion provides a suitable compact encoding. To address this, we propose SpecMRL, which reorganizes the feature space to enable more effective prefix readout. Specifically, we extend MRL with a parameter-derived spectral basis organized with feature importance. SpecMRL otherwise follows standard MRL, with prefix readout performed in the learned spectral space. Experiments on MTEB show that SpecMRL outperforms MRL at all evaluated reduced dimensions, with larger gains under more aggressive compression. These results suggest that the learned spectral basis better prioritizes informative directions, enabling more effective representation compression. Notably, SpecMRL extends the performance frontier of MRL, surpassing full-dimensional MRL with only half the embedding dimensions.",
      "upvotes": 85,
      "github_stars": 6,
      "github_repo": "https://github.com/CentreChen/Spec-MRL",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.26824",
      "arxiv_url": "https://arxiv.org/abs/2610.26824",
      "title_ja": "SpecMRL: パラメトリックスペクトル内でMatryoshka表現学習を再設計する",
      "summary_ja": "SpecMRLは、特徴空間を再構成し、より効果的なMatryoshka表現学習を実現します。"
    },
    {
      "id": "2610.20556",
      "title": "Speculative Sampling in Interactive Video Generation",
      "abstract": "Interactive video generation commonly relies on small bidirectional chunks to reduce response latency. Yet our preliminary experiments show that larger chunks improve video quality and better utilize GPU parallelism, allowing more latents to be sampled with only a modest increase in sampling time. Motivated by these observations, we propose Speculative Sampling, a strategy that combines the modeling power of large bidirectional windows with the low-latency interaction of small ones. It expands the modeling window by appending noise latents as padding and caches the resulting predictions for reuse when the condition remains unchanged. Predictions are delivered incrementally, while the uncommitted future remains replaceable. Our latency analysis shows that this removes the waiting-time lower bound imposed by chunk boundaries, shifting the optimization focus from reducing chunk size to accelerating per-chunk sampling. Bidirectional window size thus becomes a decision variable for jointly optimizing visual quality and sampling time, rather than a necessary constraint on low-latency interaction. This opens a path to serving large bidirectional models in interactive streaming systems without complex streaming post-training.",
      "upvotes": 84,
      "github_stars": 10,
      "github_repo": "https://github.com/Yubo-Shankui/SpeculativeSampling",
      "project_page": "https://yubo-shankui.github.io/speculative_sampling/",
      "comments": 4,
      "org": "university of science and technology  of china",
      "url": "https://huggingface.co/papers/2610.20556",
      "arxiv_url": "https://arxiv.org/abs/2610.20556",
      "title_ja": "対話型ビデオ生成における投機的サンプリング",
      "summary_ja": "投機的サンプリングは、大規模ウィンドウのモデリング能力と低遅延のインタラクションを組み合わせたビデオ生成戦略です。"
    },
    {
      "id": "2610.28578",
      "title": "Sage-A1.5: From Long-Horizon Execution to Scientific Exploration with Capability Composition",
      "abstract": "In this report, we introduce Sage-A1.5, a 35B Mixture-of-Experts agentic model that builds on A1 to advance long-horizon problem solving through adaptive capability composition. Compared with A1, Sage-A1.5 learns not only to solve individual tasks, but also to organize work and revise its approach during execution. Sage-A1.5 highlights three improvements: agentic orchestration, verification, and open scientific discovery. First, agentic orchestration extends single-agent execution through task delegation and parallel collaboration among subagents with isolated contexts, enabling complex tasks to be decomposed and addressed concurrently and supporting efficient execution while reducing interference across concurrent subagents. Second, agentic verification strengthens long-horizon reliability through progress checking, evidence validation, and reflective strategy revision, allowing the agent to recognize unproductive search paths and pursue alternative approaches. Third, open scientific discovery extends agentic capabilities beyond answering predefined questions to conducting exploratory research, connecting scientific inquiry with interactive analysis and inspectable research artifacts. We showcase these capabilities through complicated agentic tasks and multidisciplinary scientific applications. Besides, we hope Sage-A1.5 provides the community with an accessible foundation for open scientific discovery, offering a practical path from long-horizon task execution to collaborative, verifiable, and inspectable scientific exploration.",
      "upvotes": 69,
      "github_stars": 577,
      "github_repo": "https://github.com/InternScience/Agents-A1",
      "project_page": "https://alpha-innovator.github.io/Sage-A1.5/",
      "comments": 3,
      "org": "Intern Science",
      "url": "https://huggingface.co/papers/2610.28578",
      "arxiv_url": "https://arxiv.org/abs/2610.28578",
      "title_ja": "Sage-A1.5: 長期実行から科学的探索まで、能力の構成による進化",
      "summary_ja": "Sage-A1.5は、適応的な能力構成を通じて長期的な問題解決を促進する35B規模のエージェントモデルです。"
    },
    {
      "id": "2610.26828",
      "title": "Agent World Model in the Wild: Computer-Use Agent Environment Synthesis",
      "abstract": "Agent learning is shifting from learning from human data toward learning through interaction with the world. However, scaling such learning directly in real-world computer systems is challenging and can introduce substantial security risks. We therefore propose Agent World Model in the Wild (WildAWM), a scalable pipeline for synthesizing controllable environments and tasks for training general computer-use agents (CUAs). Whereas existing approaches typically specialize in a single agent interaction interface, we construct executable environments that jointly support graphical user interfaces, model context protocol services, and command-line interfaces, allowing agents to flexibly combine visual interaction, tool use, and code execution. WildAWM is entirely powered by open-source models, demonstrating that high-quality computer-use environments can be generated without proprietary frontier models. Beyond environments, we address three recurring challenges in task synthesis: ensuring solvability, maintaining sufficient difficulty, and producing reliable verifiers, by introducing execution-based quality gates that combine heterogeneous agent rollouts, cross-judge consistency checks, and counterfactual probes of judgment robustness. The resulting pipeline synthesizes 341 long-horizon environment-task pairs that can require over 100 agent steps to solve and remain challenging even for frontier models, with GPT-6-Astra solving only 60% of them. We train two Qwen models of different sizes exclusively in these synthetic worlds. Both models achieve substantial gains across 8 out-of-distribution benchmarks spanning web, claw, and computer-use agents, demonstrating that learning in WildAWM's synthesized worlds generalizes broadly to unseen computer-use tasks. The code is publicly available at https://github.com/MSR-Orchard/WildAWM.",
      "upvotes": 64,
      "github_stars": 69,
      "github_repo": "https://github.com/MSR-Orchard/WildAWM",
      "project_page": "https://msr-orchard.github.io/WildAWM/",
      "comments": 1,
      "org": "Microsoft Research",
      "url": "https://huggingface.co/papers/2610.26828",
      "arxiv_url": "https://arxiv.org/abs/2610.26828",
      "title_ja": "ワイルドなエージェント世界モデル: コンピュータ使用エージェント環境合成",
      "summary_ja": "WildAWMは、汎用コンピュータ使用エージェントを訓練するための、制御可能な環境とタスクを合成するパイプラインです。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "TU Delft's FMER Trains Robot Policies 7x Faster on Sparse Tasks",
      "summary": "FMER swaps diffusion for flow matching in online RL, delivering tractable entropy, mirror descent updates, and up to 7x faster training.",
      "url": "https://alphasignal.ai/news/tu-delft-s-fmer-trains-robot-policies-7x-faster-on-sparse-tasks",
      "published": "2026-10-23T08:30:12+09:00",
      "title_ja": "デルフト工科大学、希薄な報酬タスクでロボット学習を7倍高速化",
      "summary_ja": "FMER手法により、拡散モデルをフローマッチングに置き換え、強化学習の訓練効率を最大7倍向上。"
    },
    {
      "lab": "Hugging Face",
      "title": "Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox-training",
      "published": "2026-10-23T07:24:34+09:00",
      "title_ja": "ThinkingBoxによるDB採点結果のRL報酬化",
      "summary_ja": "データベースの採点結果を強化学習の報酬に変換し、エージェントの事後学習を最適化する手法。"
    },
    {
      "lab": "AlphaSignal",
      "title": "xAI's Grok Reaches Into Your Phone's Calendar and Contacts",
      "summary": "Grok's mobile apps gain on-device access to Calendar, Reminders, Contacts and other phone apps, moving it closer to a full assistant.",
      "url": "https://alphasignal.ai/news/xai-s-grok-reaches-into-your-phone-s-calendar-and-contacts",
      "published": "2026-10-23T07:14:53+09:00",
      "title_ja": "xAIのGrok、スマートフォンのカレンダーや連絡先へアクセス可能に",
      "summary_ja": "モバイルアプリがデバイス内のカレンダーや連絡先に直接アクセスし、フルアシスタント機能に接近。"
    },
    {
      "lab": "OpenAI",
      "title": "Build more responsive apps with the Decisions API",
      "summary": "Fast, focused, low-cost decisions for any application.",
      "url": "https://openai.com/index/decisions-api",
      "published": "2026-10-23T04:00:00+09:00",
      "title_ja": "Decisions APIによるアプリの応答性向上",
      "summary_ja": "あらゆるアプリケーションにおいて、高速かつ低コストで焦点の絞られた意思決定を可能にする。"
    },
    {
      "lab": "Hugging Face",
      "title": "OlmoEarth v1.3: State-of-the-art embeddings for the whole planet",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/olmoearth-v1-3",
      "published": "2026-10-23T01:11:31+09:00",
      "title_ja": "OlmoEarth v1.3：地球全体を対象とした最先端の埋め込みモデル",
      "summary_ja": "地球規模のデータに対して、世界最高水準のパフォーマンスを発揮する地理空間埋め込みモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's Qwen2.5-3B Shrinks to 2.5GB so Anyone Can Run AI Locally",
      "summary": "A 4-bit quantized build of Qwen2.5-3B-Instruct runs chat, coding and long-context tasks on roughly 2.5 GB of VRAM.",
      "url": "https://alphasignal.ai/news/alibaba-s-qwen2-5-3b-shrinks-to-2-5gb-so-anyone-can-run-ai-locally",
      "published": "2026-10-23T01:01:30+09:00",
      "title_ja": "アリババのQwen2.5-3B、2.5GBへ軽量化しローカル実行可能に",
      "summary_ja": "4ビット量子化によりVRAM 2.5GBで動作し、チャットやコーディング、長文読解が可能。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上の10メートル単位の土地を詳細な森林タイプに分類したグローバルマップを構築。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Masakhane's AfrIFact Exposes AI Fact-Checking Failures Across 10 African Languages",
      "summary": "A new multilingual benchmark exposes how embedding models and LLMs fail at fact-checking across 10 African languages, and shows what fixes work.",
      "url": "https://alphasignal.ai/news/masakhane-s-afrifact-exposes-ai-fact-checking-failures-across-10-african",
      "published": "2026-10-22T21:02:52+09:00",
      "title_ja": "AfrIFact：アフリカ10言語におけるAIファクトチェックの失敗を露呈",
      "summary_ja": "新たなベンチマークにより、埋め込みモデル等が特定のアフリカ言語で直面する課題と解決策を提示。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Jackrong's Qwopus V2 Slashes AI Agent Reasoning Time on Local Hardware",
      "summary": "A community fine-tune of Qwen3.8-27B trades a sliver of raw accuracy for shorter reasoning traces, faster decoding, and cleaner Python output in long agent loops.",
      "url": "https://alphasignal.ai/news/jackrong-s-qwopus-v2-slashes-ai-agent-reasoning-time-on-local-hardware",
      "published": "2026-10-22T19:01:21+09:00",
      "title_ja": "Qwopus V2、ローカル環境でのエージェント推論時間を大幅短縮",
      "summary_ja": "Qwen3.8-27Bの微調整により、推論の痕跡を短縮し、高速なデコードとクリーンなコード出力を実現。"
    },
    {
      "lab": "Hugging Face",
      "title": "Ensemble forecasting with IBM Granite time-series models",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1",
      "published": "2026-10-22T16:51:31+09:00",
      "title_ja": "IBM Granite時系列モデルによるアンサンブル予測",
      "summary_ja": "IBM Graniteの時系列モデルを用いたアンサンブル手法による高度な予測技術の紹介。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Recursive SI's Flint Runs a 40B Coding Model on Your Laptop",
      "summary": "Recursive's first model is a 40B mixture-of-experts coder that activates just 2.5B parameters, runs on a MacBook, and was largely designed by an automated research agent.",
      "url": "https://alphasignal.ai/news/recursive-si-s-flint-runs-a-40b-coding-model-on-your-laptop",
      "published": "2026-10-22T15:33:38+09:00",
      "title_ja": "Recursive SIのFlint、ノートPCで40Bのコーディングモデルを実行",
      "summary_ja": "2.5Bのパラメータのみを稼働させるMoE構造により、MacBook上での動作を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "What FDE means at OpenAI",
      "summary": "What forward deployed engineering means at OpenAI",
      "url": "https://openai.com/index/forward-deployed-engineering-means",
      "published": "2026-10-22T15:00:00+09:00",
      "title_ja": "OpenAIにおけるFDE（フォワードデプロイエンジニアリング）の定義",
      "summary_ja": "OpenAIにおけるフォワードデプロイエンジニアリングの役割とその重要性について解説。"
    },
    {
      "lab": "OpenAI",
      "title": "Uber brings ChatGPT Work to all employees with OpenAI",
      "summary": "Uber is rolling out ChatGPT Work to more than 30,000 employees, helping teams research, analyze data, create presentations, and complete complex workflows.",
      "url": "https://openai.com/index/uber-chatgpt-work-rollout",
      "published": "2026-10-22T09:00:00+09:00",
      "title_ja": "Uber、全従業員にOpenAIのChatGPT Workを導入",
      "summary_ja": "3万人以上の従業員がデータ分析やプレゼン作成、複雑なワークフローにChatGPTを活用可能に。"
    },
    {
      "lab": "OpenAI",
      "title": "Broad access through consistent standards",
      "summary": "How OpenAI works with distribution partners to uphold consistent safeguards, support responsible access, and clarify expectations in our Usage Policies.",
      "url": "https://openai.com/index/broad-access-through-consistent-standards",
      "published": "2026-10-22T06:00:00+09:00",
      "title_ja": "一貫した標準を通じた広範なアクセスの提供",
      "summary_ja": "パートナー企業と協力し、安全策の維持や責任あるアクセス、利用ポリシーの明確化に取り組む。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-relational",
      "published": "2026-10-22T03:26:30+09:00",
      "title_ja": "NVIDIA Kumo Relational、学習不要で教師あり機械学習を凌駕",
      "summary_ja": "リレーショナルデータにおいて、追加の訓練を必要とせずに従来の機械学習を上回る性能を発揮。"
    },
    {
      "lab": "Hugging Face",
      "title": "How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization",
      "published": "2026-10-22T02:35:36+09:00",
      "title_ja": "SLMの語彙特化により推論コストを77%削減する方法",
      "summary_ja": "小規模言語モデルの語彙を特定の用途に最適化することで、実運用時の推論コストを大幅に抑制。"
    },
    {
      "lab": "OpenAI",
      "title": "How AT&T is rethinking in-house legal work with OpenAI",
      "summary": "AT&T is working with OpenAI to make legal knowledge easier to access. Learn how its LegalEdge team is rethinking intake and scaling legal judgment.",
      "url": "https://openai.com/index/att-legal",
      "published": "2026-10-22T02:00:00+09:00",
      "title_ja": "AT&T、OpenAIを活用して社内法務業務を再考",
      "summary_ja": "法務知識へのアクセスを容易にし、法的判断のスケールアップと業務プロセスの刷新を図る。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "AI技術を用いた超音波検査の支援により、最前線での妊産婦向けヘルスケアの質を向上させる。"
    },
    {
      "lab": "Hugging Face",
      "title": "Profiling TorchNeuron (Part 1): System-level profiling on AWS Trainium.",
      "summary": "",
      "url": "https://huggingface.co/blog/amazon/profiling-torchneuron-part-1",
      "published": "2026-10-22T01:04:43+09:00",
      "title_ja": "TorchNeuronのプロファイリング（第1部）：AWS Trainiumのシステム分析",
      "summary_ja": "AWS Trainium上でのシステムレベルのプロファイリング手法についての詳細な解説。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI models are coming to Google Cloud",
      "summary": "OpenAI and Google Cloud are bringing frontier models and Codex workflows to Gemini’s Model Garden, available through Google Cloud Marketplace.",
      "url": "https://openai.com/index/openai-models-google-cloud",
      "published": "2026-10-21T21:00:00+09:00",
      "title_ja": "OpenAIのモデルがGoogle Cloudで利用可能に",
      "summary_ja": "Google CloudのModel Gardenを通じて、OpenAIの先端モデルやCodexの活用が可能に。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地：自律的なウェットラボの構築",
      "summary_ja": "自律的なウェットラボの実現に向け、AIエージェントを生物学的な事実に適応させる基盤を構築。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学向けツール「Google Antigravity」を活用し、新規の抗菌ペプチド発見に向けた調査を迅速化。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いた大規模LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、プライベートな環境で最新モデルの推論や微調整を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由生成ではなく選択式に変換するSSR枠組みにより、推論コストを抑えつつ精度を向上。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画か検索か？ツール発見アーキテクチャの規模別研究",
      "summary_ja": "LLMが先に抽象的なスタブを作成する「PtR」手法を検証し、膨大なAPIからの効率的なツール発見を探る。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの実装：地球規模の課題に挑む地理空間エージェント",
      "summary_ja": "地球規模の大きな課題を解決するために、地理空間データを活用するAIエージェントを運用。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewを用いた技術文書の分析",
      "summary_ja": "複雑な技術文書を詳細にレビュー・分析するための、科学的アプローチによる新しい手法の紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の独創性を増幅する10の方法",
      "summary_ja": "2026年に向けた研究指針として、AIが人間の創意工夫を強化するための10のアプローチを提示。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用AIモデルを共同開発",
      "summary_ja": "オンデバイスのGemmaモデルを使用し、クラウドへのデータ送信なしでチャット内の詐欺を検知。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルと言語選択次元によるコードスイッチング検出",
      "summary_ja": "音声から直接複数言語の切り替えを検出する軽量な手法を提案し、学習データの質を向上させる。"
    }
  ]
};
