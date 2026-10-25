window.papersData = {
  "updated_at": "2026-10-25 09:05 JST",
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
    }
  ],
  "hf": [
    {
      "id": "2610.21114",
      "title": "Spectral-Spatial Interpretation",
      "abstract": "Post-hoc image explanations usually show where a model looks using spatial heatmaps or indicate which channels matter using global channel scores. These separate views are limiting for multispectral data because channel relevance is often spatially localized and physically meaningful. We introduce Spectral-Spatial Interpretation (SSI), a full-grid attribution method over position-channel players (g,c). For each spatial position, SSI fixes the observed surrounding context, defines a conditional game over the channels at that position, and applies the Shapley value to this local game. The result is a full spectral-spatial attribution matrix rather than a single heatmap or a global channel ranking. SSI has a clear local interpretation. It satisfies Shapley fairness within each position, and aggregating its channel attributions exactly recovers the position-level contextual contrast obtained by replacing that position with the baseline. SSI also differs from context-averaged Owen-style hierarchical accounting, which uses the same position-channel grouping but averages over external spatial coalitions. On HLS Burn Scar, SSI outperforms an MC-Owen estimator across retained attribution metrics while using only about 6% of its evaluation budget. Across CUB-200, EuroSAT, and HLS Burn Scar under both per-channel mean and zero baselines, SSI achieves the best joint deletion and insertion AUC over dense, flat, and rank-1 baselines, yields the strongest spectral hit rates and channel deletion, and leads spatial localization on both annotated datasets. Code is available at https://github.com/AtheavenMa/Spectral-Spatial-Interpretation.",
      "upvotes": 548,
      "github_stars": 21,
      "github_repo": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "project_page": "https://github.com/AtheavenMa/Spectral-Spatial-Interpretation",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21114",
      "arxiv_url": "https://arxiv.org/abs/2610.21114",
      "title_ja": "Spectral-Spatial Interpretation (SSI)",
      "summary_ja": "多スペクトル画像の特定位置における波長チャンネルの寄与度を、空間コンテキストを固定したシャプレイ値により全グリッド形式で可視化・解釈できる。"
    },
    {
      "id": "2610.20424",
      "title": "BizBench: Unveiling Hidden Challenges in Deploying Long-Horizon Agents for Real-World Business",
      "abstract": "Existing long-horizon agent benchmarks often emphasize final task success while providing limited assessment of intermediate execution validity. Yet real-world business operations require agents to navigate extensive, potentially outdated or conflicting policies while satisfying critical constraints throughout execution. These requirements are particularly consequential in high-stakes domains such as payments, where intermediate violations can incur financial losses or regulatory consequences regardless of the final outcome. To bridge this evaluation gap, we introduce BizBench, a multi-turn benchmark grounded in real-world procedures from a leading payments company. Its executable environment integrates 789 knowledge documents and 601 discoverable business tools, with consistent policies, states, and tool behavior. The benchmark comprises 50 tasks involving resource constraints, temporal dependencies, prior commitments, and conflicting or outdated guidance. Each task is validated through reference execution, while deterministic checks assess both goal attainment and execution validity without prescribing a single solution path. Experiments reveal substantial limitations even among frontier models: Claude Opus 5 and GPT-6 Sol achieve strict success rates of only 64.0% and 61.3%, respectively. For Qwen3.8-27B, goal attainment reaches 42.0%, but strict success drops to 32.7%, demonstrating how outcome-based evaluation can mask invalid execution. Beyond success rates, DeepSeek-V4.1-Flash averages 191.3 tool calls per run, approximately 70% more than reference executions, revealing substantial execution overhead. Overall, BizBench establishes a testbed for evaluating and advancing long-horizon agents beyond task completion, toward reliable and constraint-compliant execution in complex business environments.",
      "upvotes": 494,
      "github_stars": 48,
      "github_repo": "https://github.com/ant-intl/BizAgentBench",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.20424",
      "arxiv_url": "https://arxiv.org/abs/2610.20424",
      "title_ja": "BizBench: 実世界のビジネスにおける長期エージェントの隠れた課題",
      "summary_ja": "決済業務等の実手順に基づく環境で、最終的な成功だけでなく、規程遵守や制約維持といった実行過程の妥当性を評価可能な長期マルチターンベンチマーク。"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "abstract": "GPT-6-Astra demonstrates a level of competence in robotic manipulation and navigation that challenges the conventional paradigm of building specialized models for individual tasks and embodiments. In this report, we ask not only how capable GPT-6-Astra is, but what its capabilities imply for the field. First, we probe the limits of standalone GPT-6-Astra. We conduct a large-scale evaluation across 12 representative benchmarks spanning tabletop manipulation, humanoids, mobile platforms, and dexterous hands. Under a unified protocol that allows in-context learning (ICL) from training-set demonstrations and substantially increases the number of execution steps, GPT-6-Astra achieves unprecedented performance (Fig. 1). Future research may focus on improving 1) the generality of ICL 2) cost and execution time, 3) physical-state verification, 4) recovery from irreversible failures, and 5) long-horizon preservation of progress. Second, we study the agentic harness for embodied control. We identify that close-loop coordination between a high-level \"System 2\" reasoner (i.e., GPT-6-Astra) and a low-level \"System 1\" controller (e.g., π0.5) is costly but effective. Third, we examine GPT-6-Astra on real-world deployment. Our experiments on 8 robot configurations reveal substantial gaps: 1) robot demonstrations required for ICL are expensive to collect, and 2) it is implausible to trade longer execution for higher success rates with physical constraints. Fourth, we envision the next generation of embodied benchmarks. We develop a prototype that 1) derives tasks from real-world needs, 2) provides no in-domain demonstrations, and 3) judges agents on a world clock that keeps running while they deliberate. Taken together, our results suggest that GPT-6-Astra has largely crossed the threshold of embodied competence, but not yet that of practical embodied intelligence.",
      "upvotes": 473,
      "github_stars": 266,
      "github_repo": "https://github.com/OpenSenseNova/SenseNova-RoboRSI",
      "project_page": "https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "comments": 2,
      "org": "SenseNova",
      "url": "https://huggingface.co/papers/2610.22471",
      "arxiv_url": "https://arxiv.org/abs/2610.22471",
      "title_ja": "GPT-6-Astraは身体知能を達成したか？",
      "summary_ja": "GPT-6-Astraが、12種の広範なロボット操作・移動ベンチマークにおいて、特殊モデルを凌駕する汎用的な身体知能と高い性能を示すことを検証。"
    },
    {
      "id": "2610.28402",
      "title": "StreamEval: Evaluating Interactive Streaming Video Generation Models",
      "abstract": "As streaming video generation advances, enabling real-time interaction with generated video is becoming increasingly important. We introduce StreamEval, a unified benchmark for interactive streaming video generation spanning five tasks: avatar dialogue, avatar performance, world generation, instruction editing, and reference editing. StreamEval comprises 300 scripted test cases lasting 15-300s, each specifying initial assets, incrementally arriving multimodal requests, and explicit requirements for state changes and content preservation. Performance is assessed along four evaluation dimensions: task execution, state consistency, visual fidelity, and audiovisual coordination, instantiated through ten task-specific metrics on a 0-100 scale. Evaluating 37 distinct models across 300 test cases, we find that high visual quality and identity retention do not necessarily coincide with reliable request execution or sustained state consistency. In particular, request execution remains challenging: the highest task-specific scores are 36.90 for Following among seven avatar-performance models, 25.93 for Following in text-conditioned world generation, and 15.00 for Edit Success among three reported reference-editing models. These findings identify reliable request execution under timing and preservation constraints as a central challenge for advancing omni-modal real-time interactive systems. The leaderboard is available at https://streameval.ai",
      "upvotes": 442,
      "github_stars": 283,
      "github_repo": "https://github.com/StreamEval/StreamEval",
      "project_page": "https://streameval.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.28402",
      "arxiv_url": "https://arxiv.org/abs/2610.28402",
      "title_ja": "StreamEval: インタラクティブ・ストリーミング動画生成モデルの評価",
      "summary_ja": "対話や指示編集など5つのタスクを通じ、リアルタイム生成動画の実行力、状態の一貫性、視覚的忠実度、音画同期を評価する統一ベンチマーク。"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "abstract": "Brain encoding models aim to predict neural responses to stimuli. The most widely used approach fits readouts from frozen pretrained backbones. Using neural data to train large models from scratch or fully fine-tune them after task-pretraining has proven difficult because neural data is costly and limited. We show that parameter-efficient fine-tuning (PEFT) enables us to effectively adapt very large pretrained backbones for brain encoding with a small number of trainable parameters. To make it computationally practical, we exploit the backbone's causal structure to predict multiple timepoints in a single pass instead of using sliding windows, significantly reducing feature-extraction cost. This enables efficient fine-tuning of multimodal backbones with up to 104B parameters, the largest model adapted for brain encoding to our knowledge. Trained with a low-rank adapter (LoRA) and a lightweight readout, our approach consistently improves brain encoding performance across nine diverse multimodal backbones. On the same Qwen3-Omni backbone as the prior state-of-the-art (SoTA), our method BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge. We also show the adapted multimodal backbones remain interpretable: modality attribution recovers the canonical sensory topography that prior work often obtains by construction from separate unimodal encoders, and neural adaptation increases the contribution of audio inputs and cross-modal mixing within the backbone. To scale out the number of adapted models, we develop a multi-LoRA kernel that accelerates joint training of multiple LoRAs on a shared backbone. This enables an ensemble of 200+ adapted models that ranks first on the public Algonauts post-challenge leaderboard at the time of writing. Together, our results highlight PEFT as an efficient and powerful paradigm for brain encoding.",
      "upvotes": 246,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.26802",
      "arxiv_url": "https://arxiv.org/abs/2610.26802",
      "title_ja": "脳エンコーディングのためのパラメータ効率的な微調整のスケールアップ",
      "summary_ja": "PEFTを用いて巨大な事前学習モデルを少量の脳活動データに適応させ、因果構造の活用により複数時点を一度に予測することで計算コストを大幅に削減する。"
    },
    {
      "id": "2610.31329",
      "title": "WeVisOne-VL: Unified Visual Perception from Objects to Pixels",
      "abstract": "Existing vision-language models (VLMs) remain unreliable for fine-grained visual perception. In this report, we present WeVisOne-VL (WeChat Vision All-in-One), a powerful VLM that unifies object-level and pixel-level perception through structured next-token prediction. It supports multiple visual tasks including object detection, referring localization, counting, OCR, segmentation, and matting, enabling localization at any user-specific granularity, from points and boxes to masks and alpha mattes. Architecturally, we integrate a lightweight pixel decoder into the VLM via a special <OBJ> token to generate instance-level pixel outputs. We train the model with a three-stage curriculum SFT followed by mixed-task RL. Across over 30 benchmarks, WeVisOne-VL demonstrates leading performance on both object-level and pixel-level tasks, while maintaining robust rejection for object-absent queries. By releasing WeVisOne-VL to the open-source community, we hope to advance VLMs from broad visual understanding toward truly reliable perception systems for real-world deployment.",
      "upvotes": 232,
      "github_stars": 107,
      "github_repo": "https://github.com/Tencent/WeVisOne-VL",
      "project_page": "https://tencent.github.io/WeVisOne-VL",
      "comments": 2,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.31329",
      "arxiv_url": "https://arxiv.org/abs/2610.31329",
      "title_ja": "WeVisOne-VL: オブジェクトからピクセルまで統合された視覚知覚",
      "summary_ja": "構造化された次トークン予測と軽量デコーダにより、物体検出からセグメンテーション、マッティングまでを任意の粒度で統一的に実行可能なVLM。"
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
      "title_ja": "",
      "summary_ja": "軽量エンジンと動画生成モデルを分離し、プレイヤーのアイデアを即座にコード化・可視化することで、低遅延で双方向なプレイ可能世界を構築する。"
    },
    {
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "abstract": "Reconstructing human activity from egocentric video requires more than recovering individual 3D components: the observer's motion, surrounding geometry, and hand-object interactions must fit together in a consistent world. Achieving this coherence requires both joint reconstruction and aligned supervision, yet existing methods and datasets offer limited support for either. We present EgoXperience, a full-stack paradigm that addresses these needs through data collection, automatic annotation, unified modeling, and benchmarking. Central to EgoXperience is an automatic annotation engine, EgoX-Engine, that couples geometrically verified object tracking with SLAM-based world alignment, yielding consistent supervision for the camera, scene, hands, and objects. This yields EgoX-Data-6M, a 50-hour dataset of task-driven manipulation and locomotion within and across indoor and outdoor environments, with second-level task captions. We carefully select one hour across these activity categories as EgoX-Bench to evaluate joint reconstruction. To translate this supervision into reconstruction, we introduce EgoX, trained with EgoX-Data-6M and complementary annotations from additional public datasets. Given monocular egocentric video and first-frame object masks, our model achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame with a single forward pass. Extensive experiments demonstrate state-of-the-art performance across scene estimation and world-space hand-object pose recovery. Against the strongest evaluated baselines, EgoX reduces camera, hand, and depth errors by 68.9%, 65.6%, and 42.9%, and improves object pose scores by 28.0%.",
      "upvotes": 189,
      "github_stars": 25,
      "github_repo": "https://github.com/Ropedia/EgoXperience",
      "project_page": "https://ropedia.github.io/EgoXperience",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26625",
      "arxiv_url": "https://arxiv.org/abs/2610.26625",
      "title_ja": "EgoXperience: 人間の経験からの世界に根ざした一人称表現学習",
      "summary_ja": "幾何学的に検証された物体追跡とSLAMを組み合わせた自動アノテーションにより、一貫した3D世界における一人称視点のアクティビティを再構成・学習する。"
    },
    {
      "id": "2610.24738",
      "title": "Editing Images into Reusable Layers via Compositional Edit-Prior Distillation",
      "abstract": "High-quality image editing requires precise modification of target regions while preserving the content of unrelated regions. Existing editing models produce flattened outputs that limit precise local manipulation and layer reuse, while decomposition methods typically optimize layer recovery separately from instruction-driven editing. To this end, we introduce LayerEditor, a unified framework that couples instruction-guided image editing with controllable generation of reusable RGBA layers. At its core, In-Context RGB-Alpha Token Modeling jointly represents the edited canvas and an ordered sequence of RGB-Alpha layers within a single token sequence, enabling semantic edits and explicit control over individual layer content. To retain the pretrained model's editing capability during adaptation to layered outputs, we propose Compositional Edit-Prior Distillation, which transfers its editing prior to both the edited canvas and the image composed from the predicted layers. To support training and evaluation, we construct LayerEditor-100K, a large-scale paired image-editing dataset with ordered RGBA layer annotations, and introduce dedicated benchmarks for layered editing. Extensive experiments demonstrate that LayerEditor maintains strong editing fidelity while generating accurate RGBA layers, supporting both flexible layer-level manipulation and multi-layer decomposition.",
      "upvotes": 175,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.24738",
      "arxiv_url": "https://arxiv.org/abs/2610.24738",
      "title_ja": "LayerEditor: 組成的な編集事前知識の蒸留による再利用可能なレイヤーへの画像編集",
      "summary_ja": "編集後の画像とRGBAレイヤーを同一トークン配列で扱う手法により、指示に基づいた画像編集と、背景から独立した再利用可能な部品生成を同時に実現する。"
    },
    {
      "id": "2610.11942",
      "title": "Right Screen, Wrong Transition: World Models as Verifiers for GUI Agents",
      "abstract": "A login screen that appears after a tap on Sign in is expected; the same screen after a tap on View order is an attack. For GUI agents, safety is therefore a property of the transition rather than of the screen, and a monitor that inspects only screens can be defeated by reusing a legitimate one. Judging a transition requires an expectation of what should have followed the action. Existing GUI world models provide one, but they output it as text, code, or images, so checking it against the observed screen requires a second model to judge the two. We argue that a world model meant for verification should instead predict in the space in which observations are encoded, and present LGWM, a decoder-free, action-conditioned world model that predicts the representation of the next screen directly, trained without semantic annotation on 1.85M real GUI transitions. Verification reduces to a vector comparison, and the same signal reveals whether a mismatch is harmful. We evaluate on RSWT-BENCH, a diagnostic where each credential screen appears under both a legitimate and a hijacked transition, so detectors that see only the screen are at chance by construction. The training-free score reaches 0.987 AUC at 17 ms per decision, on par with the strongest closed-source VLMs and about ten AUC points above generative GUI world models at over three orders of magnitude lower latency. The residual direction reaches 0.953 AUC at separating harmful from benign violations, where prompted VLMs are near chance. Further analyses show that the prediction is a usable future state rather than an anomaly score. World models have mostly served as simulators or planners; our results point to a third role, verification, for which predicting in representation space is the natural design.",
      "upvotes": 175,
      "github_stars": 3,
      "github_repo": "https://github.com/jiamingzhang94/lgwm",
      "project_page": "https://jiamingzhang.netlify.app/lgwm/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.11942",
      "arxiv_url": "https://arxiv.org/abs/2610.11942",
      "title_ja": "LGWM: GUIエージェントの検証者としての世界モデル",
      "summary_ja": "画面単体ではなく遷移の正当性を判断するため、エージェントの行動後の状態を潜在空間で予測し、実際の画面と比較して安全性を監視するデコーダモデル。"
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
      "title_ja": "Holi-World: 人間の一人称経験からの包括的な世界知能の構築",
      "summary_ja": "手動アノテーションを抑えつつ、一人称映像からシーン構造、物体意味論、相互作用履歴を自動構築し、大規模な世界表現の学習を可能にするエコシステム。"
    },
    {
      "id": "2610.29989",
      "title": "Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation",
      "abstract": "Autoregressive video diffusion models generate videos chunk by chunk, yet producing plausible continuations does not guarantee that they capture how scenes evolve. Under teacher forcing, strong temporal redundancy may allow local visual continuity to serve as a shortcut for current-chunk denoising, reducing the pressure to model visual evolution. We introduce Future Chunk Prediction (FCP), an auxiliary objective jointly optimized with teacher-forced denoising that predicts temporally separated chunks without access to the intervening visual context. Drawing supervision directly from training videos, FCP requires no additional pretrained visual encoder and leaves autoregressive inference unchanged. Our method achieves superior physical plausibility over standard teacher-forced autoregressive training with a lower overall training compute budget, highlighting the effectiveness and efficiency of future-chunk supervision for modeling visual evolution. Intriguingly, our visualizations suggest that FCP fosters a more structured representation space, which may be valuable for building autoregressive world models.",
      "upvotes": 167,
      "github_stars": 91,
      "github_repo": "https://github.com/TencentARC/Looking-Ahead",
      "project_page": "https://hellorpg.github.io/looking-ahead/",
      "comments": 2,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.29989",
      "arxiv_url": "https://arxiv.org/abs/2610.29989",
      "title_ja": "Looking Ahead: 自己回帰動画生成における将来の進化のモデリング",
      "summary_ja": "中間コンテキストなしで将来のチャンクを予測する補助損失（FCP）により、局所的な連続性だけでなく、シーン全体の時間的進化を捉える動画生成を実現する。"
    },
    {
      "id": "2610.30926",
      "title": "Making MLLM Latents Matter: Factor-Aware Predictive Learning for Cinematic Video Generation",
      "abstract": "Cinematic video generation requires both temporal inference from limited inputs (i.e., sparse rather than frame-by-frame guidance) and factor-aware control of character, scene, action, and camera. Multimodal large language models (MLLMs) offer useful priors for both capabilities, but their representations are not automatically actionable for video generation: a Video Diffusion Transformer (DiT) may bypass them through native conditioning pathways, and using them does not ensure either factor-aware control or generation-compatible temporal prediction. We propose Factor-Aware Predictive Learning (FAPL), which establishes effective MLLM latent use as a shared prerequisite and then targets the two capabilities with complementary learning signals. First, latent-only generator grounding trains the DiT with a frozen MLLM and connector, strengthening the DiT's use of MLLM latents for generation. Second, for factor-aware control, paired videos specify a target-factor change and non-target preservation, and factor-span replacement trains the DiT to realize this relationship in its output. Third, for temporal inference, text-only and text-plus-complete-video observations share a video target, and the trained DiT is then frozen while the MLLM and connector are optimized through it. This final stage trains limited-input representations for generation while retaining complete-observation reconstruction as a complementary training mode. Extensive experiments demonstrate our consistently better performance on three cinematic video generation tasks (i.e., sparse-to-video, factor-aware editing, and multi-shot generation) over baselines and validate FAPL's contributions to MLLM feature use, temporal control, and factor coordination.",
      "upvotes": 165,
      "github_stars": 1,
      "github_repo": "https://github.com/Songlin1998/ShotVerse2.0",
      "project_page": "https://shotverse.github.io/fapl/",
      "comments": 2,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.30926",
      "arxiv_url": "https://arxiv.org/abs/2610.30926",
      "title_ja": "FAPL: 映画的動画生成のための要因を考慮した予測学習",
      "summary_ja": "MLLMの潜在表現を、キャラクターやカメラ等の要因制御と互換性のある形式で学習・活用し、疎なガイダンスからでも一貫性のある映画的動画を生成する。"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "abstract": "Looped language models can run more iterations at test time, but additional iterations need not help them solve longer problems. For sequential state tracking, final-answer supervision does not specify how far each iteration should advance, and repeated updates can change the scale of the recurrent state. We introduce Progress-Aligned Recurrence (PAR), which trains the prediction at iteration k to match the state after the first k operations and rescales recurrent states to their first-iteration norms. On swap-S_5, a Qwen2.5-0.5B model trained on at most 32 moves achieves 95.5\\% mean full-state accuracy at 512 moves, or 16times the training length, compared with 55.7\\% reported for RLT and 0.8\\% for explicit chain of thought on the same backbone. Controlled S_5 ablations show that removing norm anchoring reduces the extrapolation factor from 16times to below 2.2times, and replacing progress-aligned targets with final-answer supervision reduces it to at most 8times. A learned completion readout selects when to answer without a supplied stopping depth. When intermediate labels are unavailable, prefix self-distillation induces the correspondence from shorter problem prefixes using only final answers. The gains apply across sequential state-tracking tasks, establishing the task structure required for depth extrapolation. These findings support training intermediate predictions and state scale together to make additional recurrent depth useful for longer problems.",
      "upvotes": 162,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.27628",
      "arxiv_url": "https://arxiv.org/abs/2610.27628",
      "title_ja": "PAR: 状態追跡における長さ汎化のための進捗調整型再帰",
      "summary_ja": "再帰ステップを操作の進捗に合わせ、隠れ状態のノルムを調整することで、学習時より遥かに長いシーケンスでも高い状態追跡精度を維持できる。"
    },
    {
      "id": "2610.26659",
      "title": "SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?",
      "abstract": "Spatial intelligence requires agents to actively acquire visual evidence and integrate observations into a coherent representation of the three-dimensional world. Yet spatial question answering offers limited evidence of whether models can construct accurate metric maps through autonomous exploration. We introduce SpatialScout, a benchmark for evaluating vision-language model (VLM) agents on active object-level 3D mapping. SpatialScout comprises 80 diverse indoor scenes containing 3,140 target objects. Given an object inventory, RGB observations, camera calibration, and camera poses, agents control a camera to explore each scene and estimate object centers in a shared coordinate frame. The task requires coordinating viewpoint selection, cross-view association, geometric estimation, and map revision under bounded interaction budgets. Evaluation jointly measures localization accuracy and target coverage through object-scale overlap scores that penalize missing predictions. Experiments with frontier VLMs reveal substantial limitations: the strongest evaluated model, Claude Opus 5.5, achieves a mean overlap score of 41.71%, with 47.23% of targets exceeding an intersection-over-union (IoU) threshold of 0.5 and only 3.25% exceeding 0.9. These results reveal a substantial gap between recovering coarse object layouts and constructing complete, precise metric maps. SpatialScout provides a quantitative testbed for developing agents that build reliable 3D spatial representations through active perception. Code is available at https://github.com/JesseZZZZZ/SpatialScout.",
      "upvotes": 160,
      "github_stars": 9,
      "github_repo": "https://github.com/JesseZZZZZ/SpatialScout",
      "project_page": "https://spatialscout.osslab-pku.org",
      "comments": 3,
      "org": "Peking University",
      "url": "https://huggingface.co/papers/2610.26659",
      "arxiv_url": "https://arxiv.org/abs/2610.26659",
      "title_ja": "SpatialScout: VLMエージェントは3Dシーンを能動的に探索・マッピングできるか？",
      "summary_ja": "80の屋内シーンにおいて、VLMエージェントが自律的にカメラを操作し、物体中心を共通座標系で推定する能動的3Dマッピング能力を評価する指標。"
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
      "title_ja": "Into the Unknown: 未解決の科学的研究問題におけるAIエージェントのベンチマーク",
      "summary_ja": "未発表の科学論文と研究方向を与え、専門家が設定した評価基準に沿って後続論文を執筆させることで、AIの科学的研究遂行能力を測定する。"
    },
    {
      "id": "2610.29997",
      "title": "DONIC: Generalist Dexterous Bimanual Tracking Control from Human Demonstrations",
      "abstract": "Despite recent progress in dexterous reference tracking, existing models focus primarily on single-hand manipulation and a limited range of interactions, leaving the bimanual dexterous behaviors common in real life unaddressed. The scarcity of contact-rich bimanual manipulation data and the increased complexity of coordinating contacts make developing a generalist bimanual tracker particularly challenging. Therefore, we present 1) DONIC, the first generalist bimanual tracker jointly trained across operation categories and human-motion sources, together with 2) BiHOI, a multi-view dataset of 1,575 sequences spanning 229 objects and emphasizing sustained bimanual interaction, where reconstructed interactions are retargeted into robot references. DONIC combines proximal policy optimization with behavioral cloning in a feedback loop that recycles verified successful executions into training demonstrations. An object-centered per-hand reward maintains object-motion feedback while supervising each hand according to its reference contact role. Clip-Centered Advantages remove reference-dependent advantage offsets while preserving within-trajectory differences. Together, these designs enable one single policy to learn coordinated manipulation across heterogeneous references. Without finetuning, a single checkpoint achieves 86.79% success on unseen trajectories of training objects and 57.32% on held-out objects, surpassing the state-of-the-art bimanual tracking baselines by 77.36 and 45.73 percentage points.",
      "upvotes": 156,
      "github_stars": 39,
      "github_repo": "https://github.com/Ropedia/DONIC",
      "project_page": "https://ropedia.github.io/DONIC/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.29997",
      "arxiv_url": "https://arxiv.org/abs/2610.29997",
      "title_ja": "DONIC: 人間のデモからの汎用的で器用な両手追跡制御",
      "summary_ja": "1,500以上の複雑な両手操作データセットを用い、人間の動作から多様な物体に対する両手での器用な操作を再現・追跡できる汎用モデル。"
    },
    {
      "id": "2610.30181",
      "title": "Deep Search in Real-World Web Environments",
      "abstract": "Despite substantial progress in Deep Search agents, their ability to conduct end-to-end research in real-world open Web environments remains insufficiently evaluated. Unlike static retrieval settings, information on the real-world Web is distributed across diverse sources, modalities, and heterogeneous formats, often involving complex interaction mechanisms that require agents to autonomously search for, access, and integrate relevant evidence during execution. To address this gap, we introduce the OpenDS task, designed to evaluate agents' ability to perform multi-step deep search in the live, open Web. This task requires agents to autonomously explore the real Web, discover and connect relevant evidence from multiple independent sources through Web search, browser interaction, and evidence processing, and ultimately determine a unique factual answer. Building on this task formulation, we construct OpenDS-World, a benchmark comprising 200 challenging tasks spanning diverse information modalities, heterogeneous file formats, and interactive access requirements, with independent human verification to ensure evidence validity and answer uniqueness. We evaluate 12 frontier models under a unified tool environment and execution protocol. The best-performing model achieves 39.0% accuracy, while human evaluation across 1,000 independent attempts yields 21.1% accuracy. Further analyses of tool usage, search cost, termination behavior, and failure recovery reveal substantial differences in research strategies across models, as well as persistent challenges in tool coordination and long-horizon search management. OpenDS-World provides a unified evaluation platform for systematically assessing and advancing agents' autonomous deep search capabilities in real-world open Web environments.",
      "upvotes": 154,
      "github_stars": 23,
      "github_repo": "https://github.com/Yu-xm/OpenDS",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.30181",
      "arxiv_url": "https://arxiv.org/abs/2610.30181",
      "title_ja": "Deep Search in Real-World Web Environments",
      "summary_ja": "生きたウェブ環境において、エージェントが自律的に探索、情報統合、複雑な相互作用を行い、多ステップの深い調査を実行できるかを評価するタスク。"
    },
    {
      "id": "2610.26855",
      "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
      "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, Ψ_0, ω-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
      "upvotes": 150,
      "github_stars": 72,
      "github_repo": "https://github.com/Ropedia/ropedia-w0",
      "project_page": "https://ropedia.github.io/ropedia-w0/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26855",
      "arxiv_url": "https://arxiv.org/abs/2610.26855",
      "title_ja": "Ropedia W0: 人間の経験を用いた異なる身体間での移動操作世界モデルのスケーリング",
      "summary_ja": "人間と多様なロボットのデータを統一的な運動学的表現で統合し、移動と操作を同時に予測・制御可能にする大規模な一人称視点世界基盤モデル。"
    },
    {
      "id": "2610.28577",
      "title": "Cache Engineering for Agents",
      "abstract": "Large Language Model (LLM) agents can handle increasingly complex tasks, navigating long trajectories of observations and actions. As these trajectories grow, key-value (KV) cache I/O and storage become the dominant cost. Trajectories can also exceed the LLM's maximum context length, requiring control over active cache growth. Prior work uses context engineering to reduce cache size by trimming or summarizing history. However, modifying the trajectory prefix invalidates subsequent cached states and triggers costly re-prefilling of retained context. Task accuracy can also suffer when too little context is retained to limit re-prefill costs. We propose cache engineering as a new scheme. It allows agents to directly control their active KV cache without modifying the trajectory or re-prefilling retained context. Specifically, agents can proactively use drop to exclude selected cache from future attention and repos to adjust retained keys' position encodings. We formalize these cache operations and identify history dependence as a serving challenge: identical token sequences can yield different cache states under different cache operation sequences, making prefix matching insufficient for correct cache reuse. Thus, we co-design the AKV serving engine. It provides a stateless interface compatible with existing serving APIs, while internally managing stateful cache reuse, eviction, and restoration. Experiments show that a tool-response rolling-drop cache policy improves average benchmark scores by 1.7 points and reduces average cost by 27.7%, compared with conventional threshold-triggered summarization. With AKV, it achieves up to 1.2x the output throughput and a 1.5x speedup in P95 request latency. Recursive self-improvement of cache policies further reduces cost by 7.1% over expert design. Our code is at https://github.com/thu-nics/AKV.",
      "upvotes": 149,
      "github_stars": 56,
      "github_repo": "https://github.com/thu-nics/AKV",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/akv/",
      "comments": 1,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.28577",
      "arxiv_url": "https://arxiv.org/abs/2610.28577",
      "title_ja": "Cache Engineering for Agents",
      "summary_ja": "履歴が増大するエージェントにおいて、KVキャッシュを部分的に切り詰めつつ再計算コストを最小限に抑え、精度を保ちながら長期の推論を効率化する技術。"
    },
    {
      "id": "2610.21783",
      "title": "Learning to Think and Explore in 3D World",
      "abstract": "We study how vision-language models (VLMs) can learn to think and actively explore in 3D space. Instead of providing multi-view images, videos, or 3D representations to the model, we preserve the native visual encoding of VLMs, i.e., a single image, one at a time, just like humans, and treat the 3D representation only as an environment with which the model can interact through actions (e.g., move left) and observations (rendered images). Each rollout begins from an initial first-person view and a visual question. The model can then iteratively reason, navigate, and reorient its viewpoint before committing to a final answer. Following an initial trajectory-supervised finetuning, we apply reinforcement learning (RL) with rewards driven primarily by final-answer correctness. Crucially, RL provides no direct supervision over which viewpoints the model should visit or which exploration actions it should take. Instead, the model must learn an effective exploration policy solely from the extent to which its interactions improve performance. Across six 3D benchmarks, our model ACT3D achieves an average accuracy of 53.2% that improves its base Qwen model by 22.0% and surpasses proprietary Gemini 3.6 Flash. ACT3D also outperforms existing open-source 3D methods while using 50-70% fewer input frames, and generalizes to unseen domains with an average improvement of 5.9% over its supervised initialization. Further analysis reveals adaptive, question-conditioned exploration. Performance gains over the base model increase from 0.6% on questions answerable from the initial view to 16.3% on those requiring extensive exploration. ACT3D searches for occluded targets, avoids unnecessary exploration, and acquires complementary viewpoints for spatial comparisons. These findings demonstrate that outcome-based RL enables VLMs not only to reason over visual evidence, but also to learn when and how to acquire it.",
      "upvotes": 140,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://williamium3000.github.io/act3d/",
      "comments": 2,
      "org": "University of California at San Diego",
      "url": "https://huggingface.co/papers/2610.21783",
      "arxiv_url": "https://arxiv.org/abs/2610.21783",
      "title_ja": "3D世界における思考と探索の学習",
      "summary_ja": "一度に1枚の画像のみを観察するVLMが、3D環境内で能動的に移動・推論・視点変更を行い、最終的な回答を導き出すための強化学習手法。"
    },
    {
      "id": "2610.26825",
      "title": "MemT-1.0: Towards Memory-Native Evolution",
      "abstract": "Memory-native evolution requires making memory an intrinsic capability of foundation models, enabling them to continuously accumulate and utilize information. To this end, we introduce MemT-1.0, a new architecture of memory foundation models that internalize memory as part of model computation. Building on Metis, MemT-1.0 employs Gated DeltaNet-2 with a stable token-level memory update mechanism within each turn. We further introduce Mixture-of-Storage to scale native memory capacity. Following a deliberate backbone preparation, we develop a two-stage training pipeline consisting of continued pre-training and post-training, supported by 34B tokens of training data and efficient training and inference infrastructure. We release a model family comprising MemT-1.0-Nano and MemT-1.0-Flash, and conduct a comprehensive evaluation of memory and general capabilities. The results show that they outperform the parametric memory baselines on average and remain competitive with retrieval-augmented methods, while largely preserving general capabilities. At a history length of 128K tokens, MemT-1.0-Nano achieves approximately 1.86times end-to-end inference speedup and a 66times reduction in persistent storage relative to full context KV cache. By internalizing retrieved procedural experience, MemT-1.0 improves task success on agentic tasks, providing a practical step toward memory-native evolution.",
      "upvotes": 139,
      "github_stars": 390,
      "github_repo": "https://github.com/MemTensor/MemT-1.0",
      "project_page": "https://huggingface.co/collections/MemTensor/memt-1",
      "comments": 3,
      "org": "MemTensor",
      "url": "https://huggingface.co/papers/2610.26825",
      "arxiv_url": "https://arxiv.org/abs/2610.26825",
      "title_ja": "MemT-1.0: メモリネイティブな進化に向けて",
      "summary_ja": "モデル計算の一部としてメモリを内面化するアーキテクチャを採用し、情報の蓄積と利用を連続的に行うことができるメモリ基盤モデル。"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "abstract": "Experience generated during deployment offers an opportunity for robots to improve policy reliability through learning from their own executions. However, learning through human corrections requires teleoperators to monitor execution and intervene when policies fail, a demand that is difficult to meet as robot fleets grow. We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience to improve a common policy. We realize CEL through failure-guided experience retrieval fine-tuning (FERT), which uses failure contexts from robot executions to retrieve relevant trajectory segments from the fleet's shared successful experience and uses their actions as supervision for policy updates, without collecting additional expert demonstrations or corrective actions. A fault-tolerant asynchronous training system (FATS) coordinates experience collection, policy optimization and policy distribution despite local interruptions within the robot fleet. Across five real-world manipulation tasks, the resulting policies achieve success rates of 93.3-99.2%, evaluated over 120 trials per task on robots excluded from training data collection. With collection time per robot held fixed, larger fleets provide more experience and FERT generally achieves higher success rates across the evaluated sizes. On multi-stage phone packaging, learning with 96 robots increases success from 79.2% to 98.3%. These results support collective experience as a practical basis for scalable robot learning and a path towards improving policy reliability during deployment without collecting additional expert corrective actions.",
      "upvotes": 131,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cel-robot-learning.github.io",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25736",
      "arxiv_url": "https://arxiv.org/abs/2610.25736",
      "title_ja": "Learning from Fleet Experience: ロボットのための集団学習パラダイム",
      "summary_ja": "配備されたロボット群の失敗文脈から、共有された成功体験の関連セグメントを検索・微調整することで、人間の介入手間を抑えて方策の信頼性を向上させる。"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "abstract": "Agents built on vision language models (VLMs) now compete with learned policies on robot manipulation leaderboards. We ask how far a coding agent can go when it controls a robot instead of a computer, and where it stops. Our system, HexaShell, keeps the harness thin: it only turns the agent's commands into robot motion. The agent drives a robot with two arms through one command line. It sees three RGB cameras and knows their calibration. After each failed attempt, the agent reads the log, finds the cause, and writes or fixes small programs called tools. In this way it keeps what it learns as code, as a coding agent does when it fixes a failing test. The tools may use only what the robot observes. They use triangulation to find where objects are, relative to each other and to the gripper. If two cameras see the same point, the point lies where the two camera rays meet. If a point lies on a known plane, such as the table or the top of a block, it lies where its ray meets that plane. When the head camera is not enough, the robot moves a wrist camera to get a second view. We build the tools on only ten layouts of one seed per task, then freeze them and test them on ten new layouts of the same seed. We use Codex with GPT-6-Astra at medium reasoning effort. On all 42 RoboDojo tasks, HexaShell reaches a success rate of 39.7% and a progress score of 48.0, averaged in the same way as the leaderboard. This is a new state of the art on RoboDojo. The limit is contact, not reasoning: pushing reaches 92.5% and memory tasks 65.0%, but tight insertion only 8.3%. When the agent fails, it usually sees the failure but cannot make the motion work. We open source the tools evolved so far at https://github.com/HexaFuture/HexaShell.",
      "upvotes": 122,
      "github_stars": 138,
      "github_repo": "https://github.com/HexaFuture/HexaShell",
      "project_page": "https://hexafuture.ai/home/",
      "comments": 3,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2610.23479",
      "arxiv_url": "https://arxiv.org/abs/2610.23479",
      "title_ja": "HexaShell: ロボットコーディングエージェントとしてのVLMの限界を探る",
      "summary_ja": "VLMエージェントが2本腕ロボットをコマンドラインで制御し、失敗から原因を特定して再利用可能なツール（コード）を自作・修正して学習する薄い基盤系。"
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
      "title_ja": "Pack Light, CarryOn: 長期実行エージェントのためのオブジェクト指向コンテキスト",
      "summary_ja": "冗長な履歴の代わりに、タスクの進捗状況を「再利用可能なオブジェクト」として整理して保持することで、長期タスクのコンテキスト管理を効率化する。"
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
      "title_ja": "CoEvo-RSI: 実行基盤の進化に伴うモデルの自己改善",
      "summary_ja": "エージェントの実行フレームワーク（体）とモデル能力（脳）を同期させて進化させ、過去の設計資産を引き継ぐことで双方向的な自己改善を実現する枠組み。"
    },
    {
      "id": "2610.26860",
      "title": "OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory",
      "abstract": "Multimodal large language models (MLLMs) have made rapid progress on visual reasoning, yet many tasks require evidence that is difficult to obtain through internal reasoning alone: our controlled study on 22 benchmarks shows that simply increasing the inference budget of the base model yields only modest gains. Such tasks demand grounded perception, external knowledge, and numerical measurements obtained through heterogeneous tools, whose outputs must be made interpretable to the model and retained across reasoning steps. We introduce OpenVLHarness, a multimodal reasoning harness organized around a capability layer and persistent multimodal memory. The capability layer combines task-level tool interfaces with evidence rendering, providing consistent access to heterogeneous backends and converting their outputs into model-readable observations. Persistent multimodal memory retains the corresponding images, structured data, and web references as addressable artifacts throughout each query. A coding interface executes generated programs over stored data, enabling computations that combine results from multiple tools. Together, these mechanisms support an iterative process of acquiring, inspecting, and composing multimodal evidence. Evaluated on 22 benchmarks with eight open and proprietary backbones, OpenVLHarness improves average scores by 9.7-12.6 points over matched no-tool baselines, including +11.2 with Qwen3-VL-8B, +9.7 with Kimi K3, and +9.9 with GPT-6 Astra. With GPT-6 Luna at medium reasoning effort, OpenVLHarness outperforms the base model, Codex, and Visual Sketchpad at maximum effort by 7.7-8.5 points while incurring at most 37% of their model-token cost.",
      "upvotes": 117,
      "github_stars": 230,
      "github_repo": "https://github.com/uclanlp/OpenVLHarness",
      "project_page": "https://openvlharness.github.io/",
      "comments": 1,
      "org": "Apple",
      "url": "https://huggingface.co/papers/2610.26860",
      "arxiv_url": "https://arxiv.org/abs/2610.26860",
      "title_ja": "OpenVLHarness: 多モードメモリを備えた実世界視覚エージェントのツール利用",
      "summary_ja": "内部推論だけでは困難な視覚課題に対し、計測器等の外部ツールとそれらの出力を保持するメモリを統合し、解釈可能な推論ステップを実行する基盤。"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "abstract": "Spatial reasoning asks a model to work out where objects are in 3D space, how they relate to one another, and how they move. Agentic VLMs have recently brought large improvements on such tasks by letting the model actively gather evidence with 3D perception tools instead of answering in a single pass. Even so, on many questions the tools return the right evidence and the model still does not arrive at the correct answer: the gap between model and tools, where raw readings become usable conclusions, is left unfilled. We present S-Agent 2.0, a spatial reasoning agent that equips an off-the-shelf general coding agent with a command-line perception toolkit, and we design the interface around one principle: help the VLM close the evidence loop: acquire scene evidence, remember it in a persistent scene memory, and interpret each reading in plain spatial language. This design keeps the full flexibility of a coding agent, and every reading it acts on stays grounded in the tools' geometry. On MMSI-Bench and ReVSI, the toolkit improves a strong open-source model, Qwen3.8-27B, by +13.9 and +20.5 points over the same agent without tools, and a strong closed-source model, Gemini-3.8-Flash, by +11.2 and +9.6 points. With the open backbone S-Agent 2.0 reaches 66.5 on MMSI-Bench and 82.3 on ReVSI, ahead of the specialized system SpatialClaw on the same backbone (62.6 and 74.5), and with Gemini-3.8-Flash it reaches 74.1 and 90.5 against its 67.0 and 79.7. Both tool gains shrink as the backbone grows more capable, but SpatialClaw's shrinks far more on ReVSI, from +13.2 to +2.7, while ours stays at +9.6. S-Agent 2.0 also works across different general coding agent harnesses, such as Codex and Claude Code.",
      "upvotes": 106,
      "github_stars": 28,
      "github_repo": "https://github.com/Ropedia/S-Agent-2.0",
      "project_page": "https://ropedia.github.io/S-Agent-2.0",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.28354",
      "arxiv_url": "https://arxiv.org/abs/2610.28354",
      "title_ja": "S-Agent 2.0: 汎用コーディングエージェントによる空間推論",
      "summary_ja": "汎用的なコーディングエージェントに3D知覚ツールキットを持たせ、センサー値の読み取りから結論導出までのギャップをコード実行により埋める空間推論手法。"
    },
    {
      "id": "2610.20951",
      "title": "LEV: Thinking Fast and Deep with Looped Decision Models",
      "abstract": "Decision models answer typed questions about an input with one probability per option, computed in a single forward pass without generating text. Like the fast System 1 of dual-process theory, they answer at once, but their depth is fixed at training time, so they spend the same computation on easy and hard questions. Models that reason in generated text can think longer, but they pay for every extra step in decoded tokens. We present LEV, a decision model that thinks deeper by rerunning its layers in a loop instead of generating tokens. LEV builds on a language model pretrained as a loop, reads the options after every loop step and trains all steps jointly, so one checkpoint can answer at any depth. On three looped backbones, accuracy rises with depth on the same weights, mostly on hard questions, and a 2.6B LEV goes from 63.2% at depth one to 76.2% at depth four on JevBench. On-demand depth, set per question by a small stopper with a threshold fitted on unlabelled requests, saves 15% to 24% of the computation at a cost of under one accuracy point, level with or slightly above a fixed mix of depths. On a locked test set, the 1.4B and 3B models are 5.4 to 8.8 points more accurate than dense (non-looped) models and cascades of the same latency below 50 ms.",
      "upvotes": 105,
      "github_stars": 9,
      "github_repo": "https://github.com/OpenLAIR/lev",
      "project_page": "https://openlair.github.io/lev/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.20951",
      "arxiv_url": "https://arxiv.org/abs/2610.20951",
      "title_ja": "LEV: ループ型意思決定モデルによる「速い思考」と「深い思考」",
      "summary_ja": "テキスト生成ではなくモデルの層をループ実行することで、難易度に応じて計算量を調整し、少ないトークン消費で深い意思決定を行う手法。"
    },
    {
      "id": "2610.23374",
      "title": "MOSS-Image Technical Report",
      "abstract": "Recent closed-source image generation systems can produce diverse visual content from simple compositions to information-dense graphics, yet open-weight text-to-image models still struggle with dense text and intricate layouts. To narrow this gap, we introduce MOSS-Image, an open generation system that combines high-fidelity visual synthesis with intent-aware composition. First, we pretrain a 5B single-stream diffusion transformer (DiT) from scratch with a carefully designed recipe, enabling bilingual long-form text rendering and precise layout control. Second, we develop an intention-aware agentic prompt enhancement (PE) module that translates diverse user requests into detailed content and layout specifications. Together, they enable MOSS-Image to generate text-rich and layout-coherent images. We further introduce LongLongTextBench (LLTB) for evaluating long-form English and Chinese text rendering, and RealLayoutArena (RLA) for end-to-end layout-rich generation. MOSS-Image achieves state-of-the-art performance among open-weight models on LLTB, with an average text coverage of 96.3%. On RLA, MOSS-Image ranks second in the end-to-end system comparison, while its backbone ranks first among generators evaluated with shared enhanced prompts. We will release the model, training recipe, and evaluation framework to support further research and promote the text-to-image community.",
      "upvotes": 98,
      "github_stars": 1720,
      "github_repo": "https://github.com/OpenMOSS/MOSS-Image",
      "project_page": "https://openmoss.ai/MOSS-Image/",
      "comments": 4,
      "org": "OpenMOSS",
      "url": "https://huggingface.co/papers/2610.23374",
      "arxiv_url": "https://arxiv.org/abs/2610.23374",
      "title_ja": "MOSS-Image 技術報告書",
      "summary_ja": "50億パラメータの拡散トランスフォーマーと意図把握エージェントを組み合わせ、複雑なレイアウトや密集したテキストを正確に描画するオープンな画像生成システム。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Comfy-Org Makes Black Forest Labs' FLUX.2 Dev Ready to Run Locally",
      "summary": "Black Forest Labs' 32B open-weight image model lands in ComfyUI with FP8 weights, a 24B Mistral text encoder, and 10-image multi-reference editing.",
      "url": "https://alphasignal.ai/news/comfy-org-makes-black-forest-labs-flux-2-dev-ready-to-run-locally",
      "published": "2026-10-25T07:02:50+09:00",
      "title_ja": "Comfy-OrgがFLUX.2 Devのローカル実行に対応",
      "summary_ja": "320億パラメータのFLUX.2をFP8重みでComfyUIに対応。マルチリファレンス編集やローカル実行が可能に。"
    },
    {
      "lab": "AlphaSignal",
      "title": "vLLM Matches DeepSeek's DeepInfer and Scales 7.9x Across 72 GPUs",
      "summary": "vLLM matches DeepSeek's own inference engine on V4.1-Flash and scales to 954K tokens/s per GPU on a GB300 NVL72 rack.",
      "url": "https://alphasignal.ai/news/vllm-matches-deepseek-s-deepinfer-and-scales-7-9x-across-72-gpus",
      "published": "2026-10-25T02:59:51+09:00",
      "title_ja": "vLLMがDeepSeekの推論エンジンに匹敵、72個のGPUで7.9倍に拡張",
      "summary_ja": "vLLMがDeepSeekの独自エンジンと同等の性能を達成。GB300 NVL72構成でGPUあたり毎秒95.4万トークンを実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Comfy-Org's Qwen-Image-Edit Bundle Hits 1.68M Downloads With Smarter Editing",
      "summary": "Comfy-Org's drop-in bundle of repackaged Qwen-Image-Edit checkpoints for ComfyUI crossed 1.68M downloads, now covering the 2511 refresh and five LoRAs.",
      "url": "https://alphasignal.ai/news/comfy-org-s-qwen-image-edit-bundle-hits-1-68m-downloads-with-smarter-editing",
      "published": "2026-10-25T01:02:53+09:00",
      "title_ja": "Comfy-OrgのQwen-Image-Editバンドルが168万ダウンロードを突破",
      "summary_ja": "ComfyUI向けQwen-Image-Editが、2511リフレッシュ版と5つのLoRAをカバーする賢い編集機能を提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "ISTA-DASLab Squeezes DeepSeek's 763B Model onto a 12 GB GPU",
      "summary": "ISTA-DASLab shrinks DeepSeek-V4.1-Flash-1017 to under 2 bits per weight, letting a 763B MoE run locally on a single 12GB consumer GPU.",
      "url": "https://alphasignal.ai/news/ista-daslab-squeezes-deepseek-s-763b-model-onto-a-12-gb-gpu",
      "published": "2026-10-24T21:34:07+09:00",
      "title_ja": "ISTA-DASLab、DeepSeekの763Bモデルを12GBのGPUで動作可能に",
      "summary_ja": "モデルを重みあたり2ビット未満に圧縮し、7630億パラメータのMoEモデルを一般向けの12GB GPUでローカル実行可能にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Datawhale Rebuilds Stanford's CS336 Into a Chinese Open-Source LLM Course",
      "summary": "A Chinese-language adaptation of Stanford's CS336 bundles 16 chapters and 6 hands-on assignments covering the full LLM stack, from BPE to GRPO.",
      "url": "https://alphasignal.ai/news/datawhale-rebuilds-stanford-s-cs336-into-a-chinese-open-source-llm-course",
      "published": "2026-10-24T21:06:14+09:00",
      "title_ja": "Datawhale、スタンフォード大学のCS336を中国語のオープンソースLLM講座として再構築",
      "summary_ja": "BPEからGRPOまでLLMスタック全体を網羅。16の章と6つの実践課題からなる中国語の適応版コースを提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Comfy-Org Rescues Stable Diffusion 1.5 With 1.5M-Download Mirror",
      "summary": "Comfy-Org has published a repackaged archive of Stable Diffusion v1.5 on Hugging Face, preserving the original weights after RunwayML pulled its page.",
      "url": "https://alphasignal.ai/news/comfy-org-rescues-stable-diffusion-1-5-with-1-5m-download-mirror",
      "published": "2026-10-24T19:02:32+09:00",
      "title_ja": "Comfy-OrgがStable Diffusion 1.5のミラーを公開しアーカイブを救済",
      "summary_ja": "RunwayMLが公開を停止したStable Diffusion v1.5のオリジナル重みを再パッケージ化してHugging Faceで保存。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AIを活用し、結核スクリーニングという医療の最前線における基盤モデルの適用を推進する。"
    },
    {
      "lab": "OpenAI",
      "title": "Rapidly scaling online storage to serve over 1 billion ChatGPT users (Part II)",
      "summary": "Learn how OpenAI scaled Habitat with reliable multi-tenancy, global caching, and Azure Cosmos DB to deliver 12× faster reads for ChatGPT.",
      "url": "https://openai.com/index/scaling-storage-one-billion-users-part-two",
      "published": "2026-10-24T02:00:00+09:00",
      "title_ja": "10億人以上のChatGPTユーザーを支えるオンラインストレージの急速な拡張（第2部）",
      "summary_ja": "Azure Cosmos DB等の活用により、Habitatの読み取り速度を12倍向上させ、大規模なマルチテナント環境を構築。"
    },
    {
      "lab": "Hugging Face",
      "title": "LitPivot: Developing research ideas through dynamic contextualization within the literature landscape",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/litpivot",
      "published": "2026-10-24T01:15:50+09:00",
      "title_ja": "LitPivot：文献景観の中での動的な文脈化による研究アイデアの開発",
      "summary_ja": "既存の文献の状況に合わせて研究内容を動的に文脈化し、研究アイデアを発展させる手法を開発。"
    },
    {
      "lab": "OpenAI",
      "title": "Securing our frontier model training environment",
      "summary": "OpenAI explains how we strengthened containment for frontier model training and evaluation, including offline environments and high-compute red-teaming.",
      "url": "https://openai.com/index/securing-our-frontier-model-training-environment",
      "published": "2026-10-23T19:00:00+09:00",
      "title_ja": "フロンティアモデルのトレーニング環境のセキュリティ保護",
      "summary_ja": "オフライン環境の構築や計算負荷の高いレッドチーミング等により、次世代モデルの訓練と評価の封じ込めを強化。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and Poland’s NASK partner to advance AI safety and security",
      "summary": "OpenAI and Poland’s NASK are partnering on AI safety, security, and technical research to strengthen safeguards and support a more resilient digital ecosystem.",
      "url": "https://openai.com/index/openai-nask-ai-safety-security-partnership",
      "published": "2026-10-23T09:00:00+09:00",
      "title_ja": "OpenAIとポーランドNASK、AIの安全性とセキュリティ推進で提携",
      "summary_ja": "AIの安全性、セキュリティ、技術研究で協力し、デジタルエコシステムの耐性を強化するための保護策を構築する。"
    },
    {
      "lab": "Hugging Face",
      "title": "Does Your Model Run on AWS Trainium? Look It Up",
      "summary": "",
      "url": "https://huggingface.co/blog/torch-neuronx-model-support",
      "published": "2026-10-23T09:00:00+09:00",
      "title_ja": "あなたのモデルはAWS Trainiumで動作するか？検索ツールを公開",
      "summary_ja": "特定のAIモデルがAWSの機械学習特化型チップ「Trainium」で実行可能かどうかを簡単に確認できる。"
    },
    {
      "lab": "Hugging Face",
      "title": "Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox-training",
      "published": "2026-10-23T07:24:34+09:00",
      "title_ja": "データベース採点をRL報酬に：ThinkingBoxによる事後学習エージェント",
      "summary_ja": "データベースの採点結果を強化学習の報酬として活用し、推論能力を持つAIエージェントの事後学習を実現する。"
    },
    {
      "lab": "OpenAI",
      "title": "Build more responsive apps with the Decisions API",
      "summary": "Fast, focused, low-cost decisions for any application.",
      "url": "https://openai.com/index/decisions-api",
      "published": "2026-10-23T04:00:00+09:00",
      "title_ja": "Decisions APIによる応答性の高いアプリ構築",
      "summary_ja": "あらゆるアプリケーションにおいて、高速かつ低コストで焦点を絞った意思決定機能の実装を可能にする。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠被覆を超えて：世界の森林タイプをマッピング",
      "summary_ja": "地球上の全陸地を10メートル単位の精度で分類し、詳細な森林タイプを特定するグローバルマップを提供。"
    },
    {
      "lab": "Hugging Face",
      "title": "Ensemble forecasting with IBM Granite time-series models",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1",
      "published": "2026-10-22T16:51:31+09:00",
      "title_ja": "IBM Granite時系列モデルによるアンサンブル予測",
      "summary_ja": "IBM Graniteの時系列モデルを用いたアンサンブル手法により、精度の高い予測を実現する。"
    },
    {
      "lab": "OpenAI",
      "title": "What FDE means at OpenAI",
      "summary": "What forward deployed engineering means at OpenAI",
      "url": "https://openai.com/index/forward-deployed-engineering-means",
      "published": "2026-10-22T15:00:00+09:00",
      "title_ja": "OpenAIにおけるFDE（前方展開エンジニアリング）の定義",
      "summary_ja": "OpenAIにおける「Forward Deployed Engineering」の役割とその業務内容について詳説。"
    },
    {
      "lab": "OpenAI",
      "title": "Uber brings ChatGPT Work to all employees with OpenAI",
      "summary": "Uber is rolling out ChatGPT Work to more than 30,000 employees, helping teams research, analyze data, create presentations, and complete complex workflows.",
      "url": "https://openai.com/index/uber-chatgpt-work-rollout",
      "published": "2026-10-22T09:00:00+09:00",
      "title_ja": "Uber、OpenAIと提携し全従業員にChatGPT Workを導入",
      "summary_ja": "3万人以上の従業員がChatGPTを利用し、データ分析やプレゼン作成、複雑なワークフローの実行を効率化する。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-relational",
      "published": "2026-10-22T03:26:30+09:00",
      "title_ja": "NVIDIA Kumo、学習不要でリレーショナルデータの機械学習性能を凌駕",
      "summary_ja": "リレーショナルデータに対して、従来の教師あり学習よりも優れた性能をトレーニングなしで発揮する。"
    },
    {
      "lab": "Hugging Face",
      "title": "How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization",
      "published": "2026-10-22T02:35:36+09:00",
      "title_ja": "SLMの語彙専門化により推論コストを77%削減する方法",
      "summary_ja": "小規模言語モデル（SLM）の語彙を特定の用途に特化させることで、実際のアプリケーションにおける推論コストを大幅削減。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による最前線の産科ケアの強化",
      "summary_ja": "AIを活用した超音波検査支援により、産科医療におけるフロントラインのケアをサポートする技術を紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地：自律型ウェットラボの構成要素",
      "summary_ja": "自律的なウェットラボの構築に向け、AIエージェントを生物学的な現実に基づかせるための基礎要素を解説。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityで抗菌ペプチドの探索を加速",
      "summary_ja": "科学用ツール「Google Antigravity」を活用し、新たな抗菌ペプチドの発見プロセスを高速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたLLMのローカル・分散推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、最新のAIモデルの推論や微調整をローカルかつプライベートな環境で実行可能。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由記述ではなく選択式にするSSRを導入。推論コストを抑えつつ、小規模モデルでも的確なアクションを生成可能。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画か検索か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMがスタブを生成してから検索する「PtR」手法を研究。大量のツールから最適なAPIを効率的に発見する。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの活用：地球規模の課題を解決する地理空間エージェント",
      "summary_ja": "地理空間情報を扱うAIエージェントを活用し、地球上の大きな課題解決に取り組む事例を紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewという手法を用いて、複雑な技術文書の内容を詳細に分析する科学的アプローチを解説。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創意工夫を増幅させる10の方法",
      "summary_ja": "2026年に向け、AI研究がいかに人間の創造性を高め、支援していくかを示す10の指針を提示。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用の微調整AIモデルを構築",
      "summary_ja": "軽量モデルGemmaを使い、データをクラウドに送らずにデバイス上でプライベートチャット内の詐欺を検知する。"
    }
  ]
};
