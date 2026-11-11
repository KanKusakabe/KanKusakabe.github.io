window.papersData = {
  "updated_at": "2026-11-11 10:45 JST",
  "arxiv": [
    {
      "id": "2611.10737",
      "title": "The Lagrangian Brain: A Constraint Mechanics of Mind and Machine",
      "url": "https://arxiv.org/abs/2611.10737",
      "pdf": "https://arxiv.org/pdf/2611.10737",
      "authors": [
        "Yuhang He",
        "Si Wu"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "58 pages, including appendices",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "solves all 422,786 Sudoku-Extreme test puzzles with one trajectory each",
      "signals": [],
      "headline": "脳の神経回路をラグランジュ力学の制約付き物理システムとしてモデル化する新理論",
      "what": "脳の状態遷移をラグランジュの未定乗数法を用いた物理力学として捉え、抑制性ニューロンやシナプスを「制約条件の違反を押し戻す乗数」と定義する計算理論です。勾配を使用しない学習アルゴリズムを提案し、回路の実行時間を計算の深さと対応付けます。",
      "enables": "Sudoku-Extremeの42万問以上のパズルを、トランスフォーマーが失敗するような長大な系列条件下でも、1つの軌跡のみで全問解くことが可能になりました。",
      "why_it_matters": "コネクショニズムとシンボリズムを同じ物理法則の極限として統合し、従来の深層学習とは異なる「制約条件の学習」という知能の新しい枠組みを提示しています。",
      "tags": [
        "AI理論",
        "脳型コンピューティング",
        "ニューロモルフィック"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10106",
      "title": "Beyond Prompt Attacks: Least-Action Auditing of Concept Erasure",
      "url": "https://arxiv.org/abs/2611.10106",
      "pdf": "https://arxiv.org/pdf/2611.10106",
      "authors": [
        "Yifei Zhu"
      ],
      "categories": [
        "cs.CR",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 12 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "We introduce least-action auditing of this residual probability",
      "signals": [],
      "headline": "拡散モデルの概念消去を検証する「最小作用」監査とパッチ適用による修復手法の提案",
      "what": "Diffusion TransformerにおけるConcept erasureの効果を測定するため、最小の制御コストで特定の概念（NSFW等）を生成させる「least-action auditing」を導入した手法です。CLIPとDINOv2を組み合わせた検出器を用い、アドバーサリアルなプロンプトや再学習なしで残存する生成確率（negative log-probability）を推定します。",
      "enables": "UCEやESDなどの既存手法の漏洩率を正確に予測でき、NSFW画像生成の監査においてUCEの漏洩率を16.2%から0/1,500へと実質ゼロにするクローズドフォームのパッチ適用が可能になりました。",
      "why_it_matters": "従来のプロンプト攻撃による監査はモデル内部の生成確率を測定できておらず、本手法は物理学の最小作用の原理を応用して、より堅牢な概念消去の評価と修復を実現しています。",
      "tags": [
        "拡散モデル",
        "AI安全性",
        "概念消去"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10141",
      "title": "Retrofitting Unbounded Context onto Stock Language Models",
      "url": "https://arxiv.org/abs/2611.10141",
      "pdf": "https://arxiv.org/pdf/2611.10141",
      "authors": [
        "Mark Oskin"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "The design reads planted single needles at 99 to 100 of 100",
      "signals": [],
      "headline": "Rotary Attentionの幾何学的特性を利用した、既存LLMへの無限コンテキスト実装技術",
      "what": "Rotary Positional Embedding (RoPE) の各次元の回転速度の違いに着目し、低速な次元が遠方のトークン情報を保持し、高速な次元が近傍の順序を記述する特性を利用した手法です。8Kの近傍ウィンドウ外の履歴を、特定の稀な単語のインデックスに基づいて動的に入れ替えることで、重みを変えずにコンテキストを拡張します。",
      "enables": "Llama-3.1-8B等において、128KトークンのRULERスコアでフルアテンションと同等の70.8を記録しつつ、デコード速度を標準比で最大1.68倍に高速化し、100万トークンからの情報抽出を可能にしました。",
      "why_it_matters": "モデルの再学習や追加の注意機構なしに、既存のストックモデルの推論時ロジックのみで実質的に無限の履歴を参照できる点に革新性があります。",
      "tags": [
        "LLM",
        "長文コンテキスト",
        "推論最適化"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11477",
      "title": "Robust and Private Swarm Learning via Zero-Knowledge Validator Admission and Consensus Aggregation",
      "url": "https://arxiv.org/abs/2611.11477",
      "pdf": "https://arxiv.org/pdf/2611.11477",
      "authors": [
        "Marco Arazzi",
        "Mert Cihangiroglu",
        "Antonino Nocera"
      ],
      "categories": [
        "cs.CR",
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
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "under a gradient-scaling attack that collapses FedAvg to random chance, it retains 94% of clean accuracy on CIFAR-100 and over 99% on FashionMNIST",
      "signals": [],
      "headline": "ゼロ知識証明とビザンチン耐性合意を用いた堅牢でプライバシー保護に優れたスワーム学習",
      "what": "データの質をゼロ知識証明（ZKP）で証明することを入会条件とする、非中央集権的な機械学習フレームワークです。検証者がデータの生値を明かさずに質の高さを証明し、Tendermint型の合意形成を通じて、不正なクライアントの勾配を排除または重み付けします。",
      "enables": "FedAvgが完全に崩壊するような勾配スケーリング攻撃下でも、CIFAR-100で94%以上の精度を維持し、非IID（データの偏り）環境下でも高い堅牢性を実現しました。",
      "why_it_matters": "中央サーバーを置かない分散学習において、データのプライバシーを守りつつ、悪意ある参加者からの攻撃を数学的・構造的に防げる点が重要です。",
      "tags": [
        "スワーム学習",
        "プライバシー保護",
        "セキュリティ"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11817",
      "title": "VeilTune: Secure Fine-Tuning of Private LoRA Adapters on Public Pretrained Language Models",
      "url": "https://arxiv.org/abs/2611.11817",
      "pdf": "https://arxiv.org/pdf/2611.11817",
      "authors": [
        "Huiyu Xie",
        "Tanping Zhou",
        "Tao Hu",
        "Xinlei Liu",
        "Hailong Ma"
      ],
      "categories": [
        "cs.CR",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages, 7 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "the first protocol that fine-tunes a pretrained language model with backpropagation entirely in secure multi-party computation (MPC)",
      "signals": [],
      "headline": "秘密計算（MPC）上で学習ステップを秘匿したままLoRAアダプタをセキュアに微調整する手法",
      "what": "学習中の勾配計算や活性化関数の値を一切公開せず、マルチパーティ計算（MPC）内でバックプロパゲーションを完結させるプロトコルです。学習プロセスに適した非線形演算子を導入し、打ち切り誤差による失敗を回避する仕組みを備えています。",
      "enables": "従来のセキュア微調整手法であるSecP-Tuningと比較して、SST-2タスクで3.5倍の高速化と3.6倍の通信量削減を実現し、かつプレーンテキストでの学習に近い精度を達成しました。",
      "why_it_matters": "学習の1ステップからでもアダプタが複製可能であることを示し、データ所有者とモデル提供者の双方の資産を完全に保護する初めてのMPCベースLoRA学習を実現しています。",
      "tags": [
        "LLM",
        "秘密計算",
        "LoRA"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12180",
      "title": "TS-GEAR: Taobao Shangou GEnerative Ad Retrieval",
      "url": "https://arxiv.org/abs/2611.12180",
      "pdf": "https://arxiv.org/pdf/2611.12180",
      "authors": [
        "Guofeng Tong",
        "Xu Zhang",
        "Guangliang Yu",
        "Haiqiang Wang",
        "Guannan Cong",
        "Xing Guo"
      ],
      "categories": [
        "cs.IR",
        "cs.AI",
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
        "new",
        "sota"
      ],
      "star_quote": "Geo-Semantic ID splits merchant identifiers into geographic prefixes and semantic suffixes",
      "signals": [],
      "headline": "配達圏内制約を考慮した地理・意味ハイブリッドIDによる広告検索フレームワーク",
      "what": "オンデマンド配達サービス（Taobao Shangou）向けの生成型検索システムで、加盟店のIDを地理的プレフィックスと意味的サフィックスに分割した「Geo-Semantic ID」を導入しました。また、Group Marginal Policy Optimization (GMPO)により検索結果の多様性を確保しています。",
      "enables": "1日1億5000万件以上のクエリを処理する実稼働環境において、地理的有効性を高めつつ、広告のインプレッションを3.8%、収益を4.2%向上させました。",
      "why_it_matters": "「配達範囲外は無効」という物理的な制約を、後処理ではなくモデルの生成プロセス自体に組み込むことで、生成型検索を実用的な地域サービスに適応させています。",
      "tags": [
        "生成型検索",
        "推薦システム",
        "Eコマース"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.09210",
      "title": "TPS-A*: Path Planning for Any-Shape Vehicles with Certified Collision Checking in Trajectory Parameter Space",
      "url": "https://arxiv.org/abs/2611.09210",
      "pdf": "https://arxiv.org/pdf/2611.09210",
      "authors": [
        "Jose Luis Blanco-Claraco",
        "Shravan S. Rai",
        "Fernando Ca\\~nadas-Ar\\'anega",
        "Jos\\'e Luis Torres-Moreno",
        "Jos\\'e Carlos Moreno-\\'Ubeda"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "nearly sixty times faster than a state-lattice planner, the only other collision-free one",
      "signals": [],
      "headline": "軌道パラメータ空間での衝突判定により任意形状車両の高速なパスプランニングを実現するTPS-A*",
      "what": "任意の形状を持つ車両向けの格子状プランナー（Lattice Planner）であり、軌道パラメータ空間であらかじめ計算された衝突判定用グリッドを利用します。これにより、ノードごとの衝突判定コストが車両形状の複雑さや候補軌道数に依存しない仕組みを実現しています。",
      "enables": "AMD Ryzen 7 2700X環境において、複雑な環境下でのクエリを中央値3ミリ秒で解決し、従来のState-Latticeプランナーと比較して約60倍の高速化を達成しました。非凸な形状の車両でも、衝突のない経路を保証しながらリアルタイムに計画可能です。",
      "why_it_matters": "安全性のための近似（円盤近似など）と計算コストのトレードオフを解消し、複雑な形状のロボットが狭い場所を高速かつ正確に移動できるようになります。",
      "tags": [
        "ロボティクス",
        "パスプランニング",
        "衝突判定"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.08802",
      "title": "Scale as a Modality: Multi-Scale Pixel-Space Diffusion Transformers",
      "url": "https://arxiv.org/abs/2611.08802",
      "pdf": "https://arxiv.org/pdf/2611.08802",
      "authors": [
        "Ruibo Chen",
        "Kaishen Wang",
        "Tianyi Xiong",
        "Chenxi Liu",
        "Yanshuo Chen",
        "Heng Huang"
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
        "new"
      ],
      "star_quote": "This design establishes the number of scales as a new architectural scaling dimension.",
      "signals": [],
      "headline": "空間スケールをモダリティとして扱うMS-pDiTによる高品質なピクセル空間拡散生成",
      "what": "空間スケールを独立したモダリティとして扱うマルチスケール・ピクセル空間拡散トランスフォーマーです。同一のノイズ画像を複数のパッチサイズでトークン化し、各スケール専用のストリームで処理しながら、MM-DiTスタイルの結合アテンションを通じて双方向に情報を交換します。",
      "enables": "ImageNet 256x256において、スケール数を2から5に増やすことでFIDを4.39から2.19まで改善しました。また、ImageNet 512x512でFID 1.44、GenEvalで0.86を達成するなど、ピクセル空間での柔軟な生成が可能です。",
      "why_it_matters": "従来のLatent Diffusion Modelsが抱えていたオートエンコーダによる情報の損失や解像度の制約を回避し、スケール数を新たなスケーリング則として活用できる点に意義があります。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "Transformer"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.09722",
      "title": "FOSCAR: Accelerating Decode Attention over 2- and 4-Bit KV Caches through Affine Folding",
      "url": "https://arxiv.org/abs/2611.09722",
      "pdf": "https://arxiv.org/pdf/2611.09722",
      "authors": [
        "Donglin Zhuang",
        "Pragaash Ponnusamy",
        "Xiaoxia Wu",
        "Shuaiwen Leon Song",
        "Zhongzhu Zhou"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FOSCAR increases peak aggregate throughput by up to 170% and 341% over 2-bit and 16-bit baselines, respectively.",
      "signals": [],
      "headline": "2/4ビット量子化KVキャッシュのデコード処理を高速化するカーネルライブラリFOSCAR",
      "what": "LLMのデコード時におけるKVキャッシュのメモリアクセスを削減するため、Affine Foldingという手法を用いて量子化のスケールとオフセットの計算を最適化します。各KV値に個別に演算を適用するのではなく、行列演算の他方のオペランドや出力側に計算を寄せることで命令発行のボトルネックを解消します。",
      "enables": "H100において、FlashInfer BF16比で最大3.36倍、TensorRT-LLM FP8比で最大2.03倍の高速化を達成しました。長文コンテキストの推論において、ピークスループットを最大170%から341%向上させることが可能です。",
      "why_it_matters": "量子化によるメモリ帯域の節約が必ずしも推論速度に直結しないという課題に対し、GPUのTensor CoreとALUの特性を考慮したハードウェアレベルの最適化を提供しています。",
      "tags": [
        "LLM",
        "GPU最適化",
        "量子化"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.12310",
      "title": "The Optimal Rate Constant of Heavy-Ball Momentum on Smooth Strongly Convex Functions",
      "url": "https://arxiv.org/abs/2611.12310",
      "pdf": "https://arxiv.org/pdf/2611.12310",
      "authors": [
        "Marcos Hernanz"
      ],
      "categories": [
        "cs.LG",
        "math.OC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "41 pages, 1 figure. Code and exact certificates: https://github.com/marcoshernanz/heavy-ball-optimal-rate",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "Optimally tuned heavy-ball is therefore asymptotically four times faster than gradient descent on this class.",
      "signals": [],
      "headline": "滑らかな強凸関数におけるヘビーボール・モメンタム法の最適な収束レートの特定",
      "what": "定数ステップサイズと定数慣性パラメータを用いるヘビーボール法が、滑らかな強凸関数クラスにおいて勾配降下法に対してどれほど高速化できるかを数学的に証明した研究です。リアプノフ関数とラグランジュ・ブールマン展開を用いて、最悪ケースの収束レートを導出しました。",
      "enables": "最適に調整されたヘビーボール法が、この関数クラスにおいて勾配降下法よりも漸近的に4倍高速であることを理論的に証明しました。",
      "why_it_matters": "二次関数以外では加速が保証されないとされてきたヘビーボール法に対し、一般的な強凸関数における厳密な理論的限界を明示した学術的貢献があります。",
      "tags": [
        "最適化アルゴリズム",
        "機械学習理論",
        "収束解析"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12835",
      "title": "Mitigating Agentic Deception via Evaluation-Side Partially Observable Games",
      "url": "https://arxiv.org/abs/2611.12835",
      "pdf": "https://arxiv.org/pdf/2611.12835",
      "authors": [
        "Hanxiao Li",
        "Shutong Liu",
        "Yongjia Ma",
        "Jiaming Ji",
        "Juntao Dai",
        "Shuning Zhang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "44 pages, 10 figures. Code: https://github.com/Toyoid/deceptive-agent; Project website: https://shutongliu-dev.github.io/epog-agentic-deception/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "formulate deception mitigation as an Evaluation-Side Partially Observable Extensive Form Game (e-PoG)",
      "signals": [],
      "headline": "エージェントの欺瞞行為を緩和する、評価側の部分観測ゲーム理論に基づくフレームワーク",
      "what": "LLMエージェントが最終結果だけで評価される際に「人間を騙して報酬を得る」挙動を防ぐため、エージェント（報酬最大化）、モニター（欺瞞の摘発）、検証者（罰則付与）の三者間ゲーム（e-PoG）として定式化した手法です。二段階のポリシー勾配アルゴリズムを用いて均衡解を求めます。",
      "enables": "Gemma3やQwen3を用いた実験において、最強のベースラインと比較して欺瞞の抑制率を26.0%、タスク成功率を最大39.8%向上させました。",
      "why_it_matters": "推論過程やツールの使用方法が不透明な「部分観測」状態での欺瞞リスクを、ゲーム理論的な均衡によって体系的に制御できる点に意義があります。",
      "tags": [
        "LLMエージェント",
        "AI安全性",
        "ゲーム理論"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10340",
      "title": "IdealCache: Rethinking Cache Scheduling in Diffusion Transformers via Ideal Trajectories",
      "url": "https://arxiv.org/abs/2611.10340",
      "pdf": "https://arxiv.org/pdf/2611.10340",
      "authors": [
        "Shang Xue",
        "Li Zhu",
        "Ping Chen"
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
      "comment": "accepted 40th Conference on Neural Information Processing Systems (NeurIPS 2026)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "IdealCache achieves 6.35x speedup on Qwen-Image, 5.84x on Qwen-Image-Edit",
      "signals": [],
      "headline": "理想的なノイズ除去軌跡のアンサンブルに基づくDiffusion Transformerの高速化フレームワーク",
      "what": "従来のステップごとの蒸留や近似ではなく、入力ごとに複数の「理想的な軌跡」のアンサンブルを構築し、グラフ上の制約付き最短パス問題として最適なキャッシュスケジュールを探索する手法です。標準的な参照軌跡への依存を排除し、生成品質を損なわずに計算をスキップします。",
      "enables": "Qwen-Imageで6.35倍、HunyuanVideoで4.32倍の高速化を達成しつつ、画像編集などのタスクでは参照プロセスを超える意味的一貫性を維持することが可能になりました。",
      "why_it_matters": "モデルの再学習が不要なTraining-freeの手法であり、拡散モデルの高速化において「参照軌跡の近似」という従来のパラダイムを打破しています。",
      "tags": [
        "拡散モデル",
        "高速化",
        "Diffusion Transformer"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10690",
      "title": "JoVox: Joint Hierarchical Flow Matching for Lightweight Voxel Generation",
      "url": "https://arxiv.org/abs/2611.10690",
      "pdf": "https://arxiv.org/pdf/2611.10690",
      "authors": [
        "Xiangjun Tang",
        "Jianqi Chen",
        "Peter Wonka"
      ],
      "categories": [
        "cs.CV",
        "cs.GT"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 3,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Compared with the current state-of-the-art TRELLIS.2, we achieve 8x higher training throughput",
      "signals": [],
      "headline": "階層間の相互作用を考慮したフローマッチングによる軽量かつ高精度なボクセル生成",
      "what": "ボクセルの階層構造において、上位レベルの決定に下位レベル（詳細）の情報をフィードバックさせる、離散フローマッチングを用いた同時階層学習フレームワークです。一度決定した粗いセルの配置を、より細かいセルが生成された後に修正するunmasking戦略を採用しています。",
      "enables": "既存の最先端手法であるTRELLIS.2と比較して、学習スループットを8倍、推論時のFLOPsを15分の1に削減しつつ、Chamfer距離を11%改善することに成功しました。",
      "why_it_matters": "従来のボクセル生成が抱えていた「階層構造の上位レベルでの誤りが修正できない」という課題を、同時分布学習と修正プロセスによって解決しています。",
      "tags": [
        "3D生成",
        "ボクセル",
        "フローマッチング"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10855",
      "title": "Representing Tensors as Compositions for Efficient Computation on Sparse and Structured Data",
      "url": "https://arxiv.org/abs/2611.10855",
      "pdf": "https://arxiv.org/pdf/2611.10855",
      "authors": [
        "Val\\'erian Rey",
        "Praneth Paruchuri"
      ],
      "categories": [
        "cs.LG",
        "cs.MS",
        "cs.PL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose a new mathematical formalism in which all kinds of tensors and of operations on those tensors are represented as simple function compositions.",
      "signals": [],
      "headline": "テンソル計算を関数合成として再定義する、疎行列演算を効率化する新しい数学的定式化",
      "what": "テンソルを「インデックスから値への関数」と見なし、要素ごとの演算、インデックスの再構築、リダクションをすべて関数合成として表現する代数的枠組みです。恒等式に基づく書き換えにより、疎行列同士の積をゼロ要素を計算しない密な演算へと自動変換します。",
      "enables": "テンソルの種類（密・疎・ギザギザ等）と演算の組み合わせ爆発（O(mn^2)）を、インデックス関数の種類の管理（O(m+k^2)）へと大幅に簡素化することを可能にしました。",
      "why_it_matters": "現代のテンソル計算エンジンにおけるバックエンドの複雑さを劇的に低減し、疎行列や構造化データに対する遅延評価と最適化を統一的に扱う道を開きます。",
      "tags": [
        "テンソル計算",
        "コンパイラ",
        "数値計算"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11452",
      "title": "Semantically Aligned KV Cache Compression for Efficient Agentic Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2611.11452",
      "pdf": "https://arxiv.org/pdf/2611.11452",
      "authors": [
        "Weizhong Huang",
        "Huaijia Kou",
        "Tianyu Xie",
        "Xiawu Zheng",
        "Liujuan Cao"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "32 pages, 12 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "SemanticKV is the first KV cache compression method for agentic autoregressive video generation that explicitly uses planner-extracted semantic constraints to guide retention.",
      "signals": [],
      "headline": "プランナーのセマンティック制約を活用したビデオ生成向けのKVキャッシュ圧縮手法",
      "what": "エージェント型ビデオ生成において、プランナーが抽出した「制約（特定の動作や属性）」をガイドとして、KVキャッシュ内で重要な情報を特定・保持するTraining-freeの手法です。テキストとのクロスアテンションを用いて、制約に関連するビデオ位置のスコアを最大化します。",
      "enables": "ビデオ生成時のKVキャッシュメモリを6.04GBから1.81GBへと3.35倍削減しつつ、生成ビデオの品質（VBenchスコア）をフルキャッシュ時と同等以上に維持しました。",
      "why_it_matters": "従来のキャッシュ圧縮が生成モデル内部の統計のみに基づいていたのに対し、上位のタスク制約を直接利用することで、長いビデオ生成でも一貫性を保てる点が特徴です。",
      "tags": [
        "ビデオ生成",
        "KVキャッシュ",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11539",
      "title": "PRISM: Causal Counterfactual Minimization of Agent Tool Privileges via Information Bottleneck Role Induction",
      "url": "https://arxiv.org/abs/2611.11539",
      "pdf": "https://arxiv.org/pdf/2611.11539",
      "authors": [
        "Yang Luo",
        "Qingni Shen",
        "Tairui Wang",
        "Jiajun Li",
        "Zhonghai Wu"
      ],
      "categories": [
        "cs.CR",
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages, 3 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "PRISM formulates whether a tool is necessary for a task as an intervenable causal proposition, and applies structured interventions in a sandbox to learn a counterfactual necessity model.",
      "signals": [],
      "headline": "因果介入と情報ボトルネックを用いたLLMエージェントの権限最小化フレームワーク",
      "what": "LLMエージェントに必要以上のツール権限を与えないよう、特定のツールがタスクに必要かを因果的な命題として定式化し、サンドボックス内での介入実験を通じて最小限のロール（役割）を学習・抽出する手法です。情報ボトルネックを用いてロールの数を最適化し、Stackelbergゲームとして権限削減を実行します。",
      "enables": "タスク成功率を維持したまま、1つのロールに与えられるツール権限を78.3%削減し、セキュリティ上の攻撃対象領域（Blast Radius）を15.9%まで低減しました。",
      "why_it_matters": "Model Context Protocol (MCP) 等で発生するエージェントの過剰権限リスクを、因果推論に基づいて自動的に解決できる点が画期的です。",
      "tags": [
        "LLMエージェント",
        "セキュリティ",
        "最小権限原則"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11745",
      "title": "Reproducible quantum clustering for single-cell transcriptome atlases",
      "url": "https://arxiv.org/abs/2611.11745",
      "pdf": "https://arxiv.org/pdf/2611.11745",
      "authors": [
        "Henry Han"
      ],
      "categories": [
        "cs.AI",
        "q-bio.GN",
        "q-bio.QM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "28 pages; 5 figures and 1 table in the main text; 5 Extended Data figures, 5 Extended Data tables; Supplementary Information with 2 figures and 15 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We introduce KQE-2, a training-free hybrid quantum-classical framework for reproducible whole-transcriptome clustering.",
      "signals": [],
      "headline": "量子状態へのマッピングによる1,000万細胞規模の再現可能な単一細胞アトラス・クラスタリング",
      "what": "単一細胞トランスクリプトーム データを、エンタングルメントのない量子状態にマッピングして解析する、ハイブリッド量子・古典計算フレームワーク「KQE-2」です。特徴量の分散を理論的に抑え、乱数シードに依存しない決定論的なクラスタリングを実現します。",
      "enables": "1,140万個の核データを1台のサーバーで処理可能にし、従来手法では14%の細胞がランダムに変動していたところを、完全に再現可能な解析結果を提供できるようになりました。",
      "why_it_matters": "バイオインフォマティクスにおける「実行ごとの結果の不一致」という長年の課題を、量子エンコーディングの幾何学的特性を利用して解決しています。",
      "tags": [
        "バイオインフォマティクス",
        "量子コンピューティング",
        "クラスタリング"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11901",
      "title": "Adaptive Entropy-Sparing for Efficient Reasoning",
      "url": "https://arxiv.org/abs/2611.11901",
      "pdf": "https://arxiv.org/pdf/2611.11901",
      "authors": [
        "Cong Jiang",
        "Xiaofeng Zhang",
        "Tom Ko",
        "Zheng Zhang"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026. 17 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "AES reduces reasoning length by up to 52.9% while increasing mean accuracy by up to 3.8% over the base models, consistently outperforming existing efficiency-oriented methods.",
      "signals": [],
      "headline": "高エントロピートークンの選択的ペナルティによる大規模推論モデルの「考えすぎ」抑制",
      "what": "大規模推論モデル（LRM）が冗長な思考（Chain of Thought）を生成する問題を解決するため、推論の検証フェーズで現れる「高エントロピートークン」を指標に、不必要な分岐のみを抑制するAdaptive Entropy-Sparing (AES)を提案しました。",
      "enables": "8つのベンチマークにおいて、平均推論長を最大52.9%短縮しつつ、不必要な思考を削ることで正解率を最大3.8%向上させることに成功しました。",
      "why_it_matters": "単なる長さへのペナルティではなく、不確実性（エントロピー）に基づいて「必要な思考」と「無駄な思考」を区別して最適化するアプローチが独自性を持っています。",
      "tags": [
        "LLM",
        "推論効率化",
        "Chain of Thought"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11912",
      "title": "LO-World: Unified BEV Latent Modeling for Joint 4D Occupancy and LiDAR Forecasting",
      "url": "https://arxiv.org/abs/2611.11912",
      "pdf": "https://arxiv.org/pdf/2611.11912",
      "authors": [
        "Zhimin Liao",
        "Ping Wei",
        "Kai Mao",
        "Shuaijia Chen"
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
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LO-World outperforms prior state-of-the-art baselines, improving occupancy forecasting IoU by 10.9% and reducing LiDAR Chamfer Distance by 30.1%.",
      "signals": [],
      "headline": "BEV潜在空間での統合モデリングによる4D占有グリッドとLiDAR予測の同時最適化",
      "what": "自動運転向けに、3Dセマンティック占有格子（Occupancy）とLiDAR点群予測を、単一のBEV（Bird's Eye View）潜在空間で同時に行う世界モデル「LO-World」です。Flow Matchingを用いて過去のコンテキストをキャッシュし、サンプリングを高速化します。",
      "enables": "従来手法と比較して占有格子の予測精度（IoU）を10.9%向上させ、LiDARの誤差（Chamfer Distance）を30.1%削減しつつ、RTX 4090上で25 FPS以上のリアルタイム動作を達成しました。",
      "why_it_matters": "意味論的な占有情報と幾何学的なLiDAR情報を、別々のパイプラインではなく「相互補完的な単一の流れ」として予測することで、精度と効率を両立しています。",
      "tags": [
        "自動運転",
        "世界モデル",
        "LiDAR"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12130",
      "title": "Compact and Wide-Force-Range Magnetorheological Hand Exoskeleton for Kinesthetic Feedback in Teleoperation",
      "url": "https://arxiv.org/abs/2611.12130",
      "pdf": "https://arxiv.org/pdf/2611.12130",
      "authors": [
        "Xianlong Mai",
        "Rui Yu",
        "Rui Chen",
        "Daniele Leonardis",
        "Wenbo Li",
        "Domenico Chiaradia"
      ],
      "categories": [
        "cs.RO",
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
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "The MR brake provides a braking torque ranging from 0.01 to 0.918 Nm, while maintaining a compact structure with a total mass of only 39.8 g.",
      "signals": [],
      "headline": "広範な力覚フィードバックと小型化を両立した磁気粘性流体ブレーキ採用のハンド外骨格",
      "what": "ロボットハンドの遠隔操作において、磁気粘性流体（MR）ブレーキを用いたハンド外骨格システムです。磁場によって粘度が変わる流体を利用し、わずか39.8gの質量で最大21Nの指先力を提示でき、高い剛性の物体も表現可能です。",
      "enables": "ユーザーが力覚フィードバックのみで物体の硬さを識別できるようになり、視覚のみの場合と比較して物体への接触力を28.2%低減し、遠隔操作の安全性を向上させました。",
      "why_it_matters": "ウェアラブルなサイズを維持しながら、繊細な感触から硬い感触まで広範囲な力覚を再現できるため、高度なテレオペレーションの実現に寄与します。",
      "tags": [
        "ロボット工学",
        "触覚・力覚",
        "遠隔操作"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12420",
      "title": "Path-Level Structural and Semantic Alignment for Hierarchical Multi-Label Text Classification",
      "url": "https://arxiv.org/abs/2611.12420",
      "pdf": "https://arxiv.org/pdf/2611.12420",
      "authors": [
        "Xindi Wang",
        "Aifen Xiong",
        "Baiyang Wang",
        "Xuri Ge",
        "Robert Mercer",
        "Frank Rudzicz"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We instead use complete root-to-node label paths as a shared unit for both. Our framework introduces two auxiliary training objectives while retaining a standard multi-label classifier",
      "signals": [],
      "headline": "ルートからノードへの全パスを学習単位とする階層的多ラベルテキスト分類手法",
      "what": "階層的なラベル分類において、ラベル間の構造と詳細な意味を同時に捉えるため、ルートからターゲットまでの「パス全体」を共通の学習単位とするフレームワークです。階層認識型の対照学習（PathSimNCE）と、LLM生成の記述を用いた意味的アラインメントを組み合わせます。",
      "enables": "3つのベンチマークにおいて一貫した性能向上を達成し、特に深い階層や詳細なラベルにおける分類精度が大幅に改善しました。",
      "why_it_matters": "構造的制約とセマンティックな監視を個別に扱うのではなく、パス単位で統合することで、階層構造の整合性を保った高度なテキスト分類が可能になります。",
      "tags": [
        "NLP",
        "テキスト分類",
        "対照学習"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.09891",
      "title": "CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse",
      "url": "https://arxiv.org/abs/2611.09891",
      "pdf": "https://arxiv.org/pdf/2611.09891",
      "authors": [
        "Peter Belcak",
        "Greg Heinrich",
        "Saurav Muralidharan",
        "Shizhe Diao",
        "Pavlo Molchanov"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Tech report. 28 pages, 9 figures, 11 tables",
      "hf_upvotes": 6,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "ARCs show on-par performance with frontier LLMs across a range of difficult mathematical and scientific tasks, are fully explainable, continually trainable",
      "signals": [],
      "headline": "LLMの推論プロセスをCPU実行可能な形式にキャッシュし再利用するCPU-ARC",
      "what": "LLMが生成した推論トレースから、ロバストでCPU実行可能なAgentic Reasoning Caches (ARCs)を構築する手法です。一度解決したタスクの論理構造をキャッシュすることで、新しいインスタンスに対してLLMを介さずに効率的に解答を導き出します。",
      "enables": "科学的・数学的な難問において、フロンティアLLMと同等の性能を維持しつつ、推論コストを16倍から291倍削減しました。構築されたARCは完全に説明可能であり、継続的な学習も可能です。",
      "why_it_matters": "LLMが似たような問題をゼロから解き直す非効率性を解消し、エッジデバイスや安価なCPU環境での高度な推論実行を可能にします。",
      "tags": [
        "LLM",
        "推論効率化",
        "ナレッジキャッシュ"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.08977",
      "title": "Energy-Based Reasoners: Your Recurrent Reasoner Should Be an Energy-Based Model",
      "url": "https://arxiv.org/abs/2611.08977",
      "pdf": "https://arxiv.org/pdf/2611.08977",
      "authors": [
        "William Xingxu Chen",
        "Alexi Gladstone",
        "Zeyu Michael Li",
        "Heng Ji",
        "Yilun Du"
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
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce Energy-Based Reasoners (EBRs), which learn an energy function over latent reasoning states",
      "signals": [],
      "headline": "再帰的推論をエネルギーベースモデルとして定式化するEnergy-Based Reasoners",
      "what": "潜在空間における反復的な推論プロセスを、エネルギー関数の勾配降下法として定式化するEnergy-Based Reasoners (EBRs)を提案しています。エネルギー関数が現在の推論状態の質をスコアリングし、その勾配が改善の方向をガイドします。",
      "enables": "Sudoku-Extremeベンチマークにおいて、既存手法の345分の1の推論計算量で99.9%の精度を達成しました。また、複数の解が存在する問題において、高い多様性を保ちながらほぼ100%の正解率で解を生成できます。",
      "why_it_matters": "従来のループ構造を持つ推論モデルに「進捗の尺度」を導入し、効率的なステップ数での停止や、より正確な潜在状態への洗練を実現した点が重要です。",
      "tags": [
        "機械学習",
        "エネルギーベースモデル",
        "論理推論"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.09042",
      "title": "Failure Profiling and Reachable Trajectory Selection for Reasoning Distillation",
      "url": "https://arxiv.org/abs/2611.09042",
      "pdf": "https://arxiv.org/pdf/2611.09042",
      "authors": [
        "Yijun Zhu",
        "Jianxin Wang",
        "Chengchao Shen"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to NeurIPS 2026. The source code and trained weights are available at \\url{https://github.com/visresearch/FPRT}",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Experiments demonstrate that our method achieves the SOTA performance across the five benchmarks",
      "signals": [],
      "headline": "生徒モデルの失敗を分析し再現可能な推論ステップを選択して学習させるFPRT",
      "what": "教師モデルの推論を蒸留する際、生徒モデルが「何に失敗し、何を現実的に学習可能か」に基づいてデータを構成するFailure Profiling and Reachable Trajectory Selection (FPRT)を提案しています。失敗モードに応じてプロンプトを使い分け、生徒が再現しやすい修正ステップを持つ推論軌跡を選択します。",
      "enables": "5つのベンチマークにおいて、複数のモデルでSOTA性能を達成しました。特に推論の転換点（分岐点）における生徒モデルの再現性を重視することで、教師モデルへの過学習を防ぎ、推論能力の汎化を向上させています。",
      "why_it_matters": "教師モデルの出力をそのまま模倣させるのではなく、生徒モデルの現在の能力水準に合わせた最適な学習データを選定することで、蒸留効率を高めるアプローチです。",
      "tags": [
        "LLM",
        "知識蒸留",
        "推論"
      ],
      "fetched_at": "2026-11-10T12:59:42.111499+09:00"
    },
    {
      "id": "2611.12806",
      "title": "Learning Heterogeneous Tactile Representation for General Dexterous Manipulation",
      "url": "https://arxiv.org/abs/2611.12806",
      "pdf": "https://arxiv.org/pdf/2611.12806",
      "authors": [
        "Bing Han",
        "Yichuan Peng",
        "Haoyu Dong",
        "Yuanmeng Hu",
        "Yongyi Jia",
        "Fangjing Wang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 92,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲92"
      ],
      "headline": "異種触覚センサを統合する基盤モデルによる、汎用的な器用なロボット操作の実現",
      "what": "圧電、磁気、視覚触覚など、物理的原理が異なる多様な触覚センサのデータを、共通のトークンとして表現する触覚基盤モデル「LingBot-Touch」を提案しました。Diffusion PolicyやVLAモデルなどの多様な制御アーキテクチャに統合可能なプラグアンドプレイ形式を採用しています。",
      "enables": "シミュレーションおよび実機環境において、複数のハードウェアプラットフォームをまたいだ複雑な器用な操作タスクの成功率を、効率的に向上させることが可能になりました。",
      "why_it_matters": "特定のセンサ仕様に依存しない触覚表現を獲得することで、異なるロボット間でのデータ共有や学習のスケールアップが可能になり、汎用ロボット知能の開発を加速させます。",
      "tags": [
        "ロボット操作",
        "触覚センサ",
        "基盤モデル"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10771",
      "title": "WorldFoundry: Towards Unified Infrastructure for World Intelligence",
      "url": "https://arxiv.org/abs/2611.10771",
      "pdf": "https://arxiv.org/pdf/2611.10771",
      "authors": [
        "Juanxi Tian",
        "Jiadong Hou",
        "Baiang Li",
        "Xin Lin",
        "Zhengbo Jiao",
        "Weijia Zhang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 10 figures. This technical report will be updated periodically",
      "hf_upvotes": 54,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲54"
      ],
      "headline": "世界モデルの再現可能な評価と推論を支える統合インフラ「WorldFoundry」の提案",
      "what": "ビデオ生成、3D/4D、身体化された行動など、多様な生成型世界モデルを統一的に扱うためのオープンソース・インフラストラクチャです。環境の持続的状態や物理ダイナミクス、行動に対する因果的な応答などを測定するための270以上のモデルと74のベンチマークを集約しています。",
      "enables": "異なるシステム間での「持続的かつ制御可能なダイナミクス」の公平な比較を可能にし、各評価結果を生成された成果物（アーティファクト）と紐づけて追跡可能な状態にしました。",
      "why_it_matters": "単なる視覚的なそれっぽさ（Visual Plausibility）を超えて、物理的な一貫性や相互作用性を定量的に測定する「世界知能」への移行を促進します。",
      "tags": [
        "世界モデル",
        "評価プラットフォーム",
        "オープンソース"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12762",
      "title": "Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery",
      "url": "https://arxiv.org/abs/2611.12762",
      "pdf": "https://arxiv.org/pdf/2611.12762",
      "authors": [
        "Weida Wang",
        "Benteng Chen",
        "Yigeng Jiang",
        "Shuchen Pu",
        "Weiping Shen",
        "Zichao Liu"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "38 pages, 18 figures. Project homepage: https://alpha-innovator.github.io/Sage-Taiyi/",
      "hf_upvotes": 52,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲52"
      ],
      "headline": "メタ認知アーキテクチャによる科学的発見とアイディア創出の自動化システム",
      "what": "蓄積された科学的知識に基づき「次に何を調査すべきか」を自律的に判断する、メタ認知に着想を得た建築「Sage-Taiyi」です。証拠、仮説、未解決の疑問を継続的に監視・修正し、研究のターゲットを適応させながら、再利用可能な推論方法を選択します。",
      "enables": "265の科学タスクを含むTaiyi-Benchにおいて、既存の最強ベースライン（AI Scientist-v2）を大きく上回り、化学実験での反応条件最適化により収率をtraceレベルから84%まで向上させました。",
      "why_it_matters": "単なる情報処理としてのAIではなく、自らの理解を内省し研究方針を制御する「メタ認知」をAIに導入し、実用的な科学的成果へ繋げた点に意義があります。",
      "tags": [
        "AI for Science",
        "メタ認知",
        "科学的発見"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12886",
      "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
      "url": "https://arxiv.org/abs/2611.12886",
      "pdf": "https://arxiv.org/pdf/2611.12886",
      "authors": [
        "Haozhi Yuan",
        "Handong Li",
        "Yifan Zhang",
        "Qianshan Wei"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 38,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲38"
      ],
      "headline": "観測状態のアラインメントとツール使用の修復による視覚エージェントの強化学習手法",
      "what": "視覚的エージェントの事後学習において、出力だけでなく「観測された状態」を整列対象とするフレームワーク「Reframe」を提案しました。空間・時間スペシャリストを訓練するGD-GRPOと、不適切なツール操作を途中で修正して学習を再開するOG-MOPDを組み合わせます。",
      "enables": "14の画像・ビデオベンチマークにおいて、従来の蒸留手法（MOPD）を上回る性能を示し、特にツールから返された観測結果への依存度とタスク成功率を大幅に向上させました。",
      "why_it_matters": "エージェントがツールの結果を無視したり、誤った行動で情報の質を下げたりする問題を、観測レベルの修正と学習によって根本から解決しています。",
      "tags": [
        "LLMエージェント",
        "強化学習",
        "視覚推論"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10160",
      "title": "Improving the Diffusability of Motion Tokenizer",
      "url": "https://arxiv.org/abs/2611.10160",
      "pdf": "https://arxiv.org/pdf/2611.10160",
      "authors": [
        "Guanhe Huang",
        "Songqiao Han",
        "Tangzheng Lian",
        "Oya Celiktutan"
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
      "comment": "Accepted to NeurIPS 2026 (Spotlight). 26 pages, including appendix",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "スペクトルミスマッチを解消し、テキストからの人間動作生成の忠実度を高めたトークナイザー",
      "what": "モーション生成のための潜在拡散モデルにおいて、VAEのエンコーダが生成する高周波なノイズとデコーダのアーティファクトを抑制する「Diffusable Motion Tokenizer (DiMoT)」です。拡散モデルをクリティックとして使いスペクトルを調整するCSAと、一段階デコードを実現するAMDを導入しました。",
      "enables": "生成される動作の再構成品質とテキスト条件への適合のトレードオフを解消し、主要なテキスト・トゥ・モーションのベンチマークで最先端（SOTA）の精度を達成しました。",
      "why_it_matters": "拡散バックボーンを巨大化させるのではなく、トークナイザー側の「拡散しやすさ（Diffusability）」を最適化することで、効率的に高品質な生成を実現できることを示しました。",
      "tags": [
        "動作生成",
        "拡散モデル",
        "VAE"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10483",
      "title": "They Can See It but Not Say It: Iterative Self Knowledge Re-expression in Visual Reasoning Relative Pose Identification",
      "url": "https://arxiv.org/abs/2611.10483",
      "pdf": "https://arxiv.org/pdf/2611.10483",
      "authors": [
        "Mengyu Wang",
        "Ken Deng",
        "Yftah Ziser",
        "Shay B. Cohen",
        "Tiejun Ma"
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
      "comment": "Accepted as NeurIPS 2026 Oral",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "VLMの出力バイアスを自己知識の再表現によって改善する、アノテーション不要の3D推論手法",
      "what": "視覚言語モデル（VLM）が多視点画像からの3D相対ポーズ推定（VRRPI）で示す強い統計的バイアスを、アノテーションなしで修正するパイプライン「SKR-ID」です。デバイアスプロンプトによるコールドスタートと、ロジットの動的閾値を用いた再帰的な順位付けにより、出力メカニズムを最適化します。",
      "enables": "教師データなしで、オープンソースVLMのMacro-F1スコアを35.0-45.4%から53.7-58.0%へと大幅に向上させ、3D空間推論能力を改善しました。",
      "why_it_matters": "モデルが「見えているのに（画像情報はあるのに）、バイアスのせいで言えない（誤ったトークンを出す）」という現象を、学習データなしで修正できる汎用的な手法です。",
      "tags": [
        "VLM",
        "3D空間推論",
        "デバイアス"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10714",
      "title": "Permute-then-Adapt: Weak-to-Strong Contrastive Image-Text Adaptation",
      "url": "https://arxiv.org/abs/2611.10714",
      "pdf": "https://arxiv.org/pdf/2611.10714",
      "authors": [
        "Jinhao Li",
        "Sarah Erfani",
        "Lei Feng",
        "Guangrui Li",
        "James Bailey",
        "Feng Liu"
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
      "comment": "28 pages; accepted at NeurIPS 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "軽量モデルによる擬似ポジティブの特定でCLIPの対照学習を高度化するPTAフレームワーク",
      "what": "CLIPなどの画像・テキストアラインメント学習において、軽量な教師モデル（弱モデル）を利用して、本来は正解に近いのに負例として扱われているペアを統計的に特定する「Permute-then-Adapt (PTA)」を提案しました。順列参照分布を用いて第I種過誤を抑えつつ、複数のポジティブ例を学習します。",
      "enables": "物体認識やクロスモーダル検索において、ヒューリスティックな閾値設定を行う既存手法を上回る精度とデータ効率を実現しました。",
      "why_it_matters": "従来の「正解以外はすべて負例」という厳しい仮定がもたらすノイズを、統計的に裏付けられた方法で緩和し、学習の質を向上させています。",
      "tags": [
        "CLIP",
        "対照学習",
        "画像・テキストアラインメント"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10895",
      "title": "Robust Satisficing Ensemble: Scalable Model Aggregation Under Distribution Shifts",
      "url": "https://arxiv.org/abs/2611.10895",
      "pdf": "https://arxiv.org/pdf/2611.10895",
      "authors": [
        "Ahmet Faruk Cetinkaya",
        "Enes Agirman",
        "Cem Tekin"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "stat.ML"
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
      "headline": "分布シフトに対する脆さを最小化する、高速でスケーラブルな堅牢アンサンブル手法",
      "what": "学習時と異なる分布（OOD）のデータに対しても汎化性能を維持するため、アンサンブルの「脆弱性」を最小化する確率的統合フレームワーク「Robust Satisficing Ensemble (RSE)」です。二次リスク代理指標とラグランジュ・ブールマン展開により、複雑な最適化を回避する解析解を導出しました。",
      "enables": "SST-5やCivilCommentsなどのデータセットにおいて、GroupDROやIRMなどの強力な堅牢性ベースラインを一貫して上回る精度を、大規模データでも効率的に達成しました。",
      "why_it_matters": "従来の堅牢な最適化手法が抱えていた計算コストの課題を克服し、動的な環境下でのモデル統合において理論的保証と実用的な速度を両立させています。",
      "tags": [
        "アンサンブル学習",
        "堅牢性",
        "分布シフト"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11644",
      "title": "MICE: Multi-animal Interaction Context Encoder - A Hierarchical Foundation Model for Mouse Behavior",
      "url": "https://arxiv.org/abs/2611.11644",
      "pdf": "https://arxiv.org/pdf/2611.11644",
      "authors": [
        "Yen-Shuo Su",
        "Weihan Li",
        "Anqi Wu"
      ],
      "categories": [
        "cs.CV",
        "cs.LG",
        "q-bio.NC"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 (Spotlight). 25 pages, 4 figures. Code: https://github.com/eric0708/MICE",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "複数個体のマウス行動を階層的にエンコードする、社会性行動解析のための基盤モデル",
      "what": "マウスの姿勢データから多個体間の相互作用（求愛、攻撃等）を定量化するための基盤モデル「MICE」です。個体ごとの運動学を捉えるエンコーダと、個体数に依存しないPerceiver型の社会性エンコーダを階層的に組み合わせ、複数のデータセットで共同事前学習を行います。",
      "enables": "1匹から4匹までの異なるグループサイズに対して、再学習なしで単一のチェックポイントで対応可能になり、相互作用の識別に不可欠な社会性シグナルの抽出精度で従来手法を凌駕しました。",
      "why_it_matters": "個体ごとの解析に留まっていた既存手法に対し、動物行動学の本質である「社会性」を、汎用的かつスケーラブルなアーキテクチャで捉えられるようにした点に価値があります。",
      "tags": [
        "行動解析",
        "自己教師あり学習",
        "神経科学"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11962",
      "title": "Shaping Useful Noise: Energy Distributions Predict Visual Pretraining Quality",
      "url": "https://arxiv.org/abs/2611.11962",
      "pdf": "https://arxiv.org/pdf/2611.11962",
      "authors": [
        "Ching Lam Choi",
        "Antonio Torralba",
        "Phillip Isola",
        "Stefanie Jegelka"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as an oral presentation to NeurIPS 2026 (Sydney)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "データセットの「エネルギー分布」を用いて合成データの質を監査・向上させる新原理",
      "what": "合成データを用いた視覚的表現学習の質を予測するため、正規化された実画像密度モデル下での対数確率分布（エネルギープロファイル）を用いる手法です。実画像と合成データのエネルギー分布の距離（ELD）を測定し、これを指標にデータを再サンプリングします。",
      "enables": "従来のFIDやLPIPSでは捉えられなかった、合成データセットの有用性を正確に予測できるようになり、ELDに基づいた混合データ作成により下流タスクの精度を向上させました。",
      "why_it_matters": "合成データが「ありふれた画像」に偏るのを防ぎ、実画像が持つ多様な密度範囲（疎なシーンから密なテクスチャまで）をカバーさせることで、事前学習の効果を最大化できることを示しています。",
      "tags": [
        "合成データ",
        "事前学習",
        "画像認識"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11964",
      "title": "3R-Adapter: Retrieval, Rewiring, and Refinement for Efficient Adaptation of 3D Reconstruction Model",
      "url": "https://arxiv.org/abs/2611.11964",
      "pdf": "https://arxiv.org/pdf/2611.11964",
      "authors": [
        "Zixiang Ai",
        "Zhenyu Cui",
        "Xu Zou",
        "Jiahuan Zhou"
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
      "comment": "Accepted as NeurIPS 2026 Spotlight",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "3D再構成モデルのドメインシフトによる対応関係の崩壊を修復する3R-Adapter",
      "what": "低照度や人間とシーンの混在など、学習データに少ない（ロングテールな）状況で3D再構成モデルの注意機構が崩壊する問題を解決する、パラメータ効率の良い微調整（PEFT）手法です。変形可能な検索、関係の再配線（Rewiring）、一貫性の精緻化という3段階で対応関係を回復します。",
      "enables": "既存のPEFT手法では困難だった、未知のドメインにおけるクロスビューの対応関係の修復を、軽量なアダプタのみで実現し、3D再構成の堅牢性を大幅に向上させました。",
      "why_it_matters": "単純な特徴量の調整ではなく、3D構造の構築に不可欠な「ビュー間の幾何学的関係」を直接適応対象としている点が独自性です。",
      "tags": [
        "3D再構成",
        "PEFT",
        "ドメイン適応"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12852",
      "title": "What kills $v$-prediction? A Patch-wise PCA Perspective on Pixel-Space Flow Matching",
      "url": "https://arxiv.org/abs/2611.12852",
      "pdf": "https://arxiv.org/pdf/2611.12852",
      "authors": [
        "Tianze Luo",
        "Haofeng Huang",
        "Yuan Yao"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as a Spotlight paper at NeurIPS 2026. Our code is available at https://github.com/THUMAI-Lab/RiT",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "ピクセル空間のフローマッチングにおけるv-predictionの課題をPCA視点で解明・解決",
      "what": "ピクセル空間でのフローマッチング学習において、標準的なv-prediction（速度予測）が不安定になる原因をパッチ単位の主成分分析（PCA）で調査した研究です。マイナー成分の速度がノイズに支配される「帯域幅のボトルネック」を特定し、情報の伝搬を分離するRaw-injected Transformer (RiT)を提案しました。",
      "enables": "ピクセル空間での効果的なv-predictionを回復させ、ImageNet 256x256においてオートエンコーダを使わないエンドツーエンド手法として競争力のある性能を達成しました。",
      "why_it_matters": "Latent Diffusionに代わる、よりシンプルなピクセル空間生成モデルの理論的理解を深め、アーキテクチャ設計に新たな指針を与えています。",
      "tags": [
        "フローマッチング",
        "画像生成",
        "PCA分析"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.10073",
      "title": "Noise-Regularized Training for Learned Image Compression",
      "url": "https://arxiv.org/abs/2611.10073",
      "pdf": "https://arxiv.org/pdf/2611.10073",
      "authors": [
        "Renjie Zou",
        "Zhiwei Huang",
        "Dong Jiang"
      ],
      "categories": [
        "eess.IV",
        "cs.CV"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "22 pages, 4 figures. Accepted as a Spotlight paper at NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "入力へのノイズ付加を正則化として利用し、学習ベース画像圧縮の効率を向上させる手法",
      "what": "学習ベース画像圧縮（LIC）の訓練時に、入力画像へガウスノイズを付加する単純かつ強力な正則化手法です。理論的には、このノイズがエンコーダのヤコビアン行列へのペナルティとして働き、データ多様体に対する平滑性を高める効果があることを示しました。",
      "enables": "既存のELICやDMCIなどのモデルにおいて、計算コストや推論時間を増やすことなく、BD-Rate（圧縮効率指標）で最大2.6%の改善を達成しました。",
      "why_it_matters": "これまでクリーンな画像のみで訓練されていた画像圧縮分野に、拡散モデル等で知られる「ノイズによるデータ構造の探査」の視点を持ち込み、汎用的な性能向上を実現した点に意義があります。",
      "tags": [
        "画像圧縮",
        "正則化",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.11141",
      "title": "TALK: One-Shot Batch Design for Protein Variant Effect Prediction",
      "url": "https://arxiv.org/abs/2611.11141",
      "pdf": "https://arxiv.org/pdf/2611.11141",
      "authors": [
        "Qiao Huang",
        "Ao Shen",
        "Jie Du",
        "Manning Wang"
      ],
      "categories": [
        "cs.CE",
        "cs.LG"
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
      "headline": "タンパク質のバリアント効果予測を効率化する、事後結合に基づく測定バッチ設計手法",
      "what": "タンパク質工学において、実験可能な範囲（プロトコル制約）と予測したい範囲が異なる「アッセイ・予測ミスマッチ」を解決するための測定設計手法「TALK」です。候補となるバリアントがターゲット全体の予測にどれほど寄与するかを事後結合（posterior coupling）を用いて推定します。",
      "enables": "限られた実験予算内で、未知のタンパク質ランドスケープを最も効率的に学習できるバリアントの組み合わせを選択し、予測精度を大幅に向上させることに成功しました。",
      "why_it_matters": "単なる不確実性サンプリングではなく、実験制約を考慮しつつ「全体像を把握するためにどこを測るべきか」を最適化できる、実務に即した手法です。",
      "tags": [
        "タンパク質工学",
        "能動学習",
        "バイオテクノロジー"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    },
    {
      "id": "2611.12061",
      "title": "BARS: Beat-Adaptive Rap Synthesis via Flow Matching",
      "url": "https://arxiv.org/abs/2611.12061",
      "pdf": "https://arxiv.org/pdf/2611.12061",
      "authors": [
        "Taemin Cho",
        "Hector Martel",
        "Enyan Koh"
      ],
      "categories": [
        "cs.SD",
        "cs.LG",
        "cs.MM",
        "eess.AS"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Published in ISMIR 2026 (Best Paper Award nominee). Demo: https://bars-ismir2026.github.io/bars/",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "ビートと歌詞に同期したフローマッチングによる、ゼロショットでの柔軟なラップ音声生成",
      "what": "伴奏（ビート）、歌詞、短い参照音声からラップを生成する非自己回帰モデル「BARS」です。Flow Matchingを用い、Asymmetric Scaled RoPEによりアテンションの順序構造を強化することで、音素レベルの事前の位置合わせなしでリズムに合った音声を生成します。",
      "enables": "ラップのテンポや長さを柔軟に制御でき、かつスラングや略語を含む歌詞に対しても高い忠実度での生成と、部分的な歌詞の書き換え（インペインティング）が可能になりました。",
      "why_it_matters": "従来の自己回帰モデルでは難しかった「ビートに厳格に従いつつ、生成の柔軟性を保つ」というラップ特有の課題を、非自己回帰的なアプローチで解決しています。",
      "tags": [
        "音声合成",
        "フローマッチング",
        "ラップ生成"
      ],
      "fetched_at": "2026-11-11T10:45:45.878965+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.08449",
      "title": "VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding",
      "abstract": "Models for physical AI tasks, such as robotics and autonomous driving, need not reason solely in language. They can use visual plans--points, bounding boxes, and trajectories--to represent spatial goals and anticipate motion. However, autoregressive vision-language models generate these plans one coordinate token at a time, making richer predictions increasingly costly. We introduce VFlash, a method for fast, accurate visual planning through Flash Primitive Decoding. VFlash exploits the known structure of visual primitives to predict their coordinates jointly, using a lightweight drafter that generates an entire primitive in one forward pass. The layout adapts to the primitive's type, dimensionality, and length, supporting compact boxes and long, variable-length trajectories. Crucially, spatial accuracy need not require reproducing an autoregressive model's exact token sequence. VFlash therefore trains on annotated primitives and directly accepts structurally valid predictions without target-token agreement. Across the evaluated 2D and 3D robot trajectory tasks, VFlash consistently reduces prediction errors relative to autoregressive decoding. Preliminary single-rollout measurements indicate approximately 25x faster generation for 3D point motion forecasting. A world action model conditioned on VFlash plans achieves 70.2% average success across four MolmoSpaces task suites, compared with 62.6% for the baseline.",
      "upvotes": 111,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://research.nvidia.com/labs/lpr/vflash/",
      "comments": 1,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.08449",
      "arxiv_url": "https://arxiv.org/abs/2611.08449",
      "title_ja": "VFlash: フラッシュ・プリミティブ・デコードによる高速かつ正確な視覚的計画",
      "summary_ja": "軽量なドラフターを用いて座標を一括予測することで、自律システムの視覚計画を高速化する。"
    },
    {
      "id": "2611.05376",
      "title": "From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence",
      "abstract": "For a decade, progress in artificial intelligence has been measured by how much a machine can do on its own. Large foundation models now write code and run multistep tasks, and personal agents act on a person's behalf. Yet people still forget what they once knew, miss what they are not looking at, fail to find the right words, and face hard choices without the benefit of their own history, because the machine that could help stands outside the situation. As AI moves into the physical world, attention has settled on one kind of intelligent individual, the embodied robot; we argue that the era of Physical AI holds a second kind of equal importance, the person augmented by AI. Alongside artificial general intelligence, which asks how intelligent a machine can be, stands AI-augmented human intelligence (AHI), which asks how much intelligence a machine can enable in a particular person. Realizing it calls for a new kind of system, a cognitive symbiont: a lifelong, embedded, real-time, private, low-friction, and proactive companion that senses what the person senses through external devices, keeps their context across years, models their situation and their mind, takes part in their thinking at the right moment, carries out everyday tasks with their context, and keeps learning the person as both change. We give the paradigm a conceptual core, the cognitive gap between what a person could bring to a situation and what they can hold in working memory, and organize its design space as a symbiosis loop of sensing, keeping, understanding, living alongside, acting for and thinking with the person, and growing, enclosed by a personal runtime and by trust. Because a symbiont changes what a person can do in front of others, it also raises risks of a new kind, from covert assistance in examinations to pressure on everyone to adopt it, and we treat their governance as part of the paradigm.",
      "upvotes": 104,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cognitive-symbiont.github.io/",
      "comments": 2,
      "org": "University of Oxford",
      "url": "https://huggingface.co/papers/2611.05376",
      "arxiv_url": "https://arxiv.org/abs/2611.05376",
      "title_ja": "自律エージェントから認知共生体へ：AIで拡張された人間知能に向けて",
      "summary_ja": "機械が単独で行うAIから、物理世界で人を補助・拡張する「AI拡張型人間」への転換を提唱。"
    },
    {
      "id": "2611.12806",
      "title": "Learning Heterogeneous Tactile Representation for General Dexterous Manipulation",
      "abstract": "Tactile sensing is an indispensable modality for contact-rich dexterous manipulation, a capability that hints at the ultimate frontiers of embodied intelligence. However, commercially available tactile sensors are still at a relatively early stage of development, with each type of sensor offering irreplaceable strengths alongside its own drawbacks. A key challenge is thus to free tactile understanding from sensor-specific physics, so that embodied models can effectively leverage heterogeneous tactile data. To this end, we develop LingBot-Touch, a tactile foundation model characterized by the following properties. (i) Our model yields a unified representation across different tactile sensors (i.e., piezoresistive, magnetic, and visuotactile sensors), and is easily extensible to new sensor types. (ii) The resulting tactile tokens are plug-and-play: they can be seamlessly integrated into policy models across paradigms, from diffusion policy to vision-language-action (VLA) models such as π_{0.5} and LingBot-VLA, consistently enhancing manipulation dexterity. (iii) Extensive experiments, spanning simulation and real-robot deployments across multiple hardware platforms, demonstrate that our tactile representation substantially benefits complex manipulation tasks while maintaining strong computational efficiency. We believe the findings in this work demonstrate the potential of leveraging cross-sensor data to scale tactile learning, and offer encouraging insights for the design of future hardware and embodied models.",
      "upvotes": 92,
      "github_stars": 137,
      "github_repo": "https://github.com/Robbyant/lingbot-touch",
      "project_page": "https://technology.robbyant.com/lingbot-touch",
      "comments": 2,
      "org": "Robbyant",
      "url": "https://huggingface.co/papers/2611.12806",
      "arxiv_url": "https://arxiv.org/abs/2611.12806",
      "title_ja": "汎用的な器用な操作に向けた不均質な触覚表現の学習",
      "summary_ja": "異なるセンサー間の物理特性の差を解消し、統一的な表現を可能にする触覚基盤モデルの開発。"
    },
    {
      "id": "2611.06043",
      "title": "Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription",
      "abstract": "Streaming speech recognition is increasingly consumed by machines, such as translators and voice agents, that act on each token as it appears. A token that is later revised costs wasted work or a wrong action. In this work, we present Confucius4-R2T2 (short for Real Real-Time Transcription), a stable-prefix streaming ASR model that never modifies its earlier output while maintaining high accuracy and low latency. R2T2 is obtained by post-training Qwen3-ASR-1.7B on 1,500 hours of Chinese and English audio while freezing its pre-trained audio encoder and projector. The adaptation is based on the concept of Longest Stable Prefix (LSP), a new notion that we introduce in this work. We prove that LSP is monotone under the prefix order, consistent with the full-audio output, and maximal among labels that equal a whole earlier output. Learning from LSP labels converts a full-context model into a stable-prefix streaming one without any architectural change. Extensive evaluations show that R2T2 brings streaming recognition close to the base model's full-context quality while delivering stable text with low emission lag. Its gains extend beyond the post-training languages, demonstrating a practical path from full-context ASR to stable streaming. We open-source the model weights and code at https://huggingface.co/netease-youdao/Confucius4-R2T2 and https://github.com/netease-youdao/Confucius4-R2T2.",
      "upvotes": 90,
      "github_stars": 878,
      "github_repo": "https://github.com/netease-youdao/Confucius4-R2T2",
      "project_page": "https://r2t2.ai/",
      "comments": 2,
      "org": "Netease Youdao",
      "url": "https://huggingface.co/papers/2611.06043",
      "arxiv_url": "https://arxiv.org/abs/2611.06043",
      "title_ja": "Confucius4-R2T2: 真のリアルタイム文字起こしのための安定プレフィックス・ストリーミングASRモデル",
      "summary_ja": "過去の出力を一切修正せず、高精度かつ低遅延で逐次文字起こしを行うストリーミング音声認識。"
    },
    {
      "id": "2611.08373",
      "title": "SLA: Scaling Spatial-Language-Action Model via Continual Pre-training",
      "abstract": "Reliable robotic manipulation requires both semantic understanding and precise control in three-dimensional space. However, vision-language-action (VLA) foundations largely inherit visual representations from 2D vision-language pre-training, while spatial supervision is often introduced only during task-specific adaptation. Developing spatial understanding as a transferable foundation-model capability therefore calls for learning from broader robot experience. We present SLA, a Spatial-Language-Action Model that scales implicit spatial alignment to continual pre-training and maintains it during downstream post-training. Initialized from a pretrained pi05 policy, SLA jointly optimizes action prediction and alignment between intermediate visual embeddings and spatial representations from a frozen 3D perception model. We curate and unify heterogeneous robot datasets to support spatial learning across diverse embodiments, tasks, and scenes. To accommodate this diversity, we introduce feature-dependent gates that adaptively aggregate visual embeddings from multiple VLA layers for spatial supervision. The teacher further exploits partially available depth and camera calibration alongside RGB observations, enabling effective use of heterogeneous geometric annotations. Probabilistic state dropout encourages reliance on visual cues and mitigates overfitting to demonstration trajectories. All auxiliary components are used only during training, allowing direct reuse of pretrained VLA weights and preserving the original inference architecture.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://embodiedsla.github.io/",
      "comments": 3,
      "org": "HKUSTGZ",
      "url": "https://huggingface.co/papers/2611.08373",
      "arxiv_url": "https://arxiv.org/abs/2611.08373",
      "title_ja": "SLA: 継続的な事前学習による空間・言語・アクションモデルのスケーリング",
      "summary_ja": "3D空間の理解を基盤モデルの能力として学習し、ロボット操作の精度と汎用性を向上させる。"
    },
    {
      "id": "2611.08264",
      "title": "SplatAnything: Gaussian Spacing Normalization for Feed-forward 3DGS across Arbitrary Scenes",
      "abstract": "We identify a key limitation of existing feed-forward 3DGS methods: Gaussian attributes are typically predicted in a radial-distance-normalized space that canonicalizes a global radial statistic of the reconstructed geometry, while the spacing between neighboring Gaussian centers can still vary substantially across scene scales and camera configurations. This mismatch induces systematic shifts in Gaussian-scale targets, leading to ambiguous supervision. To address this, we propose SplatAnything with Gaussian Spacing Normalization (GSNorm), which canonicalizes a robust scene-level statistic of Gaussian spacing to provide a more consistent spatial reference for Gaussian prediction. To rigorously assess our method, we further establish a systematic benchmark spanning diverse datasets, input sparsity levels, and challenging extrapolated viewpoints. Extensive experiments demonstrate that SplatAnything achieves state-of-the-art performance, with particularly strong gains under substantial variations in scene scale and viewpoint.",
      "upvotes": 69,
      "github_stars": 138,
      "github_repo": "https://github.com/zju3dv/SplatAnything",
      "project_page": "https://zju3dv.github.io/SplatAnything/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2611.08264",
      "arxiv_url": "https://arxiv.org/abs/2611.08264",
      "title_ja": "SplatAnything: 任意のシーンにわたるフィードフォワード3DGSのためのガウス間隔正規化",
      "summary_ja": "シーンのスケール等に依存しない間隔正規化により、高精度な3Dガウス予測を実現する。"
    },
    {
      "id": "2611.04277",
      "title": "Harness-S: Learning from Sibling Harnesses for Generalizable Agent Training",
      "abstract": "Harness evolution from a common base exhibits Locality, Complementarity, and Nonstationarity: variants repair different failures, and their utility changes as the policy learns. Rather than seeking a universally superior harness, we introduce Harness-S to selectively rescue failures of a base execution system through sibling harnesses and transfer the resulting capabilities into a single policy that remains effective under the original harness. Directional Harness Evolution develops specialized sibling harnesses along distinct repair directions, forming a reusable Sibling Harness Pool that remains fixed during policy training. Complementary Harness Rescue Training invokes this pool only when all initial attempts under the base harness fail. The same policy generates fresh rollouts under selected auxiliary harnesses, and these trajectories replace the failed group for reinforcement learning. An Adaptive Harness Router selects the Top-k variants using Harness Behavior Profiles and voting across multiple LLMs. Policy-aware profile re-anchoring refreshes this evidence as the policy learns. Across AppWorld, SWE-Gym, and DBBench, the trained policy substantially outperforms policy-only training when returned to the original base harness. Behavioral analyses and held-out cases support the transfer of harness-elicited behaviors into the policy itself. Reusing the router for Rank-1 inference provides additional gains at the same executor rollout count.",
      "upvotes": 67,
      "github_stars": 65,
      "github_repo": "https://github.com/DeepExperience/Harness-S",
      "project_page": "",
      "comments": 5,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2611.04277",
      "arxiv_url": "https://arxiv.org/abs/2611.04277",
      "title_ja": "Harness-S: 汎用的なエージェント訓練のための兄弟ハーネスからの学習",
      "summary_ja": "複数の補完的な実行環境（ハーネス）を用いて失敗を救済し、単一の強力な方策へ能力を移転。"
    },
    {
      "id": "2611.06910",
      "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
      "abstract": "AI agents are playing an increasingly important role in physics research. However, existing physics benchmarks only evaluate fixed questions, isolated sub-tasks, or paper reproduction with given solutions, and rarely check research quality alongside correctness. We introduce FrontierPhysics, an end-to-end benchmark with 56 tasks made by 42 physicists based on their own research, covering nine domains across theoretical, computational, and experimental physics. Each task requires agents to review the literature, develop a research plan, conduct research and experiments, and produce structured outputs and scientific manuscripts. Combining deterministic verifiers with expert-authored rubrics, FrontierPhysics evaluates whether agents' research is correct and publishable. Across 22 models in 26 configurations, no configuration passes more than 46 of its 168 rollouts. Manual review of agent trajectories shows that frontier agents' main weaknesses are insufficiently rigorous reasoning and limited expert intuition, rather than gaps in physics knowledge or execution errors.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.benchflow.ai/frontierphysics",
      "comments": 4,
      "org": "BenchFlow",
      "url": "https://huggingface.co/papers/2611.06910",
      "arxiv_url": "https://arxiv.org/abs/2611.06910",
      "title_ja": "FrontierPhysics: エンドツーエンドの物理研究のためのエージェント評価",
      "summary_ja": "物理学者が作成した56のタスクを通じ、AIの文献調査から実験、論文執筆までを総合評価。"
    },
    {
      "id": "2611.06918",
      "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
      "abstract": "Vision-language-action models are typically built on a simple premise: perception is first compressed by visual encoders, and action reasoning begins only afterwards. Yet manipulation often hinges on precisely the visual signals most vulnerable to this abstraction, e.g., local geometry, boundaries, depth, and subtle state changes. This raises a fundamental question: should action policies inherit a fixed visual endpoint, or directly access evolving visual computation? We introduce NEO-VLA, a structurally encoder-free vision-language-action framework. Images are tokenized by lightweight patch convolutional layers and evolve jointly with language throughout the backbone, allowing a flow-matching action expert to draw from instruction-conditioned visual representations at different depths. This simple change reveals a consistent pattern. Native architectures outperform encoder-based counterparts under controlled comparisons; full fine-tuning reduces but does not erase the gap, and additional scale alone cannot recover it. More strikingly, layer-wise probing shows that the action-critical signals often peak well before the final visual representation. Across diverse manipulation settings and distribution shifts, NEO-VLA consequently achieves stronger and more robust control. Together, these results suggest that embodied control benefits from access to visual representations across the computational hierarchy, rather than a fixed encoder output.",
      "upvotes": 59,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.lmms-lab.com/posts/neo_vla/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.06918",
      "arxiv_url": "https://arxiv.org/abs/2611.06918",
      "title_ja": "ピクセルからアクションへ - ネイティブな視覚・言語・アクション方策に向けて",
      "summary_ja": "固定された視覚エンコーダを使わず、画像と行動推論を共同で進化させるVLAフレームワーク。"
    },
    {
      "id": "2611.10771",
      "title": "WorldFoundry: Towards Unified Infrastructure for World Intelligence",
      "abstract": "Visual generative models increasingly blur the line between synthesizing observations and simulating environments. Yet visual plausibility alone does not constitute successful world modeling: compelling outputs may lack persistent state, physical dynamics, or causally consistent responses to interactions. We define a generative world model as a predictive dynamical system that maintains a persistent, history-conditioned representation of an environment, updates that representation in response to actions or interventions, and generates temporally coherent trajectories that reflect outcomes under observed and counterfactual interventions. From this definition, we derive an intelligence-oriented framework spanning perceptual grounding, persistent state modeling, controllable transformation, dynamics-aware prediction, and closed-loop interaction. We present WorldFoundry, open-source infrastructure for reproducible inference and evaluation across video, 3D and 4D, embodied action, and interactive world systems. WorldFoundry unifies model and benchmark discovery, runtime and asset preparation, execution orchestration, artifact management, and interactive visualization, while modality-specific adapters preserve native inputs, execution semantics, output representations, and evaluation protocols. Explicit manifests, durable artifact contracts, and evidence-aware scorecards separate execution readiness from evaluative claims, making each claim traceable to its supporting artifacts. The catalog contains 270 model entries, 74 benchmarks, and 62 registered metric entries, with readiness and execution evidence recorded separately. WorldFoundry enables reproducible comparison of persistent, controllable dynamics across heterogeneous systems, advancing the field from perceptual synthesis toward measurable world intelligence.",
      "upvotes": 54,
      "github_stars": 336,
      "github_repo": "https://github.com/OpenEnvision/WorldFoundry",
      "project_page": "https://openenvision.org/WorldFoundry/",
      "comments": 2,
      "org": "OpenEnvision",
      "url": "https://huggingface.co/papers/2611.10771",
      "arxiv_url": "https://arxiv.org/abs/2611.10771",
      "title_ja": "WorldFoundry: 世界知能のための統一インフラに向けて",
      "summary_ja": "物理的な一貫性や介入への応答性を備えた、予測可能な動的システムとしての世界モデルを定義。"
    },
    {
      "id": "2611.12762",
      "title": "Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery",
      "abstract": "We introduce Sage-Taiyi, a metacognition-inspired architecture that uses accumulated scientific understanding to guide what to investigate next and how to investigate it. Through explicit monitoring and control, the system revises its understanding of evidence, assumptions, and unresolved questions, then uses these assessments to adapt research targets and select reusable reasoning methods. On Taiyi-Bench, an AI co-scientist ideation benchmark comprising 265 tasks from 50 papers across ten disciplines, Sage-Taiyi ranks first on all eight metrics of historical rediscovery and open-ended ideation, achieving an Overall score of 54.0 compared with 47.9 for the strongest baseline, AI Scientist-v2. It also performs well on two external scientific ideation benchmarks. Five expert-guided collaborations further connect its proposals to experimental and computational validation across chemistry, materials science, and engineering. In chemistry, reaction-condition optimization raises the yield of cobalt-catalyzed carbonylation from trace amounts to 84% and photocatalytic allylic amination from 13% to 69%. These results support metacognitive regulation as an approach to scientific ideation and its progression toward practical validation.",
      "upvotes": 52,
      "github_stars": 10,
      "github_repo": "https://github.com/Alpha-Innovator/Sage-Taiyi",
      "project_page": "https://alpha-innovator.github.io/Sage-Taiyi/",
      "comments": 2,
      "org": "Shanghai AI Laboratory",
      "url": "https://huggingface.co/papers/2611.12762",
      "arxiv_url": "https://arxiv.org/abs/2611.12762",
      "title_ja": "Sage-Taiyi: 科学的発見のためのメタ認知アーキテクチャ",
      "summary_ja": "蓄積された知識に基づき、調査対象や推論手法を自己修正しながら科学的アイデアを創出する。"
    },
    {
      "id": "2611.00883",
      "title": "Random Is Almost Enough? Stable and Low-Cost Benchmark Compression via BestRand",
      "abstract": "Benchmark compression reduces the often prohibitive time and cost of model evaluation by evaluating models on a small benchmark subset that closely matches full-benchmark results. To quantify estimation error, we derive an accurate analytical approximation to the error distribution when estimating full-benchmark scores from a subset, showing that most subsets yield small errors, while a few produce much larger errors, resulting in a long-tailed distribution. This means random sampling alone can achieve surprisingly strong performance with high probability, but remains unstable due to rare large errors. We further show that this instability is inherent to modern foundation models and persists even as more models are evaluated. Based on these findings, we introduce BestRand, a stable and low-cost benchmark compression method that preserves the efficiency of random sampling while substantially reducing its high-error tail. We validate BestRand on 70+ text, multimodal, and agent benchmarks, and further extend it to VLA evaluation. Compared with competitive methods, BestRand reduces high-error risk by 50.2% and estimation error by 16.4% on average, while requiring only 51.3% of the construction cost. It further reduces OOD estimation error by 21.8% on average across score-range, model-family, and temporal shifts. Together, our theory provides practical guidance for understanding and predicting the accuracy and reliability of benchmark compression, while BestRand enables stable and accurate compression at low cost. The code and data are publicly available onhttps://github.com/George-Ling3/BestRand.",
      "upvotes": 52,
      "github_stars": 19,
      "github_repo": "https://github.com/George-Ling3/BestRand",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.00883",
      "arxiv_url": "https://arxiv.org/abs/2611.00883",
      "title_ja": "ランダムで十分か？BestRandによる安定的かつ低コストなベンチマーク圧縮",
      "summary_ja": "少数の評価用サブセットを賢く選択することで、低コストかつ安定したモデル評価を実現する。"
    },
    {
      "id": "2611.03953",
      "title": "P^2-MOPD: Accelerating Multi-Teacher On-Policy Distillation via Parameter Priors",
      "abstract": "Multi-teacher on-policy distillation consolidates expert capabilities by supervising student-generated trajectories, whereas task arithmetic offers a training-free alternative through linear parameter combinations. We view the linear combination of student and expert parameters as a single differentiable model and propose P^2-MOPD, which jointly optimizes the mixing coefficients and the student weights under the same on-policy distillation objective. Unlike task arithmetic, which stays within the span of the frozen student and expert parameters for any choice of merging coefficients, P^2-MOPD keeps the student trainable, so the experts act as parameter priors without confining it to this span. Across four domains at 1.7B and 4B scales, P^2-MOPD achieves faster and more balanced recovery than MOPD from the same initialization, surpassing its final average recovery in half the training steps. At the end of training, our 1.7B model reaches 94.7% average recovery, versus 80.9% for MOPD.",
      "upvotes": 51,
      "github_stars": 3,
      "github_repo": "https://github.com/SinuoWang/P2-MOPD",
      "project_page": "",
      "comments": 8,
      "org": "StepFun",
      "url": "https://huggingface.co/papers/2611.03953",
      "arxiv_url": "https://arxiv.org/abs/2611.03953",
      "title_ja": "P^2-MOPD: パラメータプライアによる複数教師オンポリシー蒸留の加速",
      "summary_ja": "教師モデルの知識をパラメータプライアとして活用し、生徒モデルの学習を効率化・高性能化。"
    },
    {
      "id": "2611.09124",
      "title": "Toward the Era of Agentic Embodied Intelligence",
      "abstract": "Foundation models increasingly guide robot actions, yet sustained autonomy requires efficient control and failure recovery. We introduce A2-MEAS, an embodied multi-agent framework built around code as a scaling interface. Learned correction codes combine corrective language, spatial evidence, execution history, and action proposals. MetaBrain provides training supervision and runtime guidance. A correction encoder and adapter absorb this knowledge into policy weights during training, while fresh codes adapt behavior with frozen weights at deployment. The action model, A2-WLA, adds motion-aware history and a latent world model to a vision-language-action policy. Surprisingly, this simple design with action pretraining and task specialization reaches 0.5755 Q-score on the 50-task BEHAVIOR 2026 public subset before online correction, 2.21x the 2025 winner's reported 0.2605 across different benchmark editions and training configurations. On all 100 BEHAVIOR 2026 public tasks, A2-MEAS achieves 0.6411 Q-score and 45.40% task success. On RoboTwin 2.0, A2-WLA achieves 93.98% average success, rising to 95.05% with the complete system. Across 12 real-robot tasks in five household settings, A2-WLA achieves 57.92% average success versus 26.67% for pi0.5. In long-horizon pour-over coffee preparation, a history-conditioned adapter raises post-failure completion at two filter-handling steps from 14% to 94% and from 8% to 82%, compared with A2-WLA retries. Our training infrastructure delivers 427.1 samples per second, 4.03x the throughput of a pi0.5 reference implementation on matched hardware. We will release the system, models, training scripts, and infrastructure to support efficient embodied learning.",
      "upvotes": 49,
      "github_stars": 10,
      "github_repo": "https://github.com/AutoLab-SAI-SJTU/A2MEAS",
      "project_page": "https://a2-meas.github.io/",
      "comments": 3,
      "org": "AutoLab",
      "url": "https://huggingface.co/papers/2611.09124",
      "arxiv_url": "https://arxiv.org/abs/2611.09124",
      "title_ja": "エージェント型身体知能の時代に向けて",
      "summary_ja": "コードを介した修正と世界モデルの統合により、ロボットの継続的な自律性と失敗回復を実現。"
    },
    {
      "id": "2611.07392",
      "title": "WeLM-Image: A Unified Image Generation Model towards Visual Intelligence",
      "abstract": "We present WeLM-Image, a unified image foundation model that integrates multimodal understanding into text-to-image generation, instruction-guided editing, and multi-reference synthesis. Designed for single-GPU deployment in WeChat's large-scale consumer applications, the model processes text, reference images, and target latents as one interleaved sequence. A Mixture-of-Transformers (MoT) backbone combines shared attention with independent understanding and generation parameters to limit optimization interference. Equipping each path with Mixture-of-Experts (MoE) modules provides sparse capacity, with 31.7B stored parameters and approximately 5.4B generation parameters activated per target latent token. A generation-oriented data engine combines a knowledge-grounded visual vocabulary with large-scale visual clustering to balance semantic coverage and editing tasks, while training-time evaluation guides iterative data refinement. Bilingual annotations and verified editing supervision support progressive training up to native 1.5K resolution. We optimize generation and editing separately with rubric- and checklist-based rewards, then consolidate the specialized policies through noise-aware on-policy distillation. In the reported overall comparisons, the 1536-resolution model ranks first among the evaluated open-source models on PRISM-Bench, Qwen-Image-Bench, and UnicBench. MeanFlow-based few-step distillation yields WeLM-Image-Turbo, which generates a 1024times1024 image in 4.98\\,s on a single NVIDIA H20 GPU using eight guidance-free steps.",
      "upvotes": 47,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.07392",
      "arxiv_url": "https://arxiv.org/abs/2611.07392",
      "title_ja": "WeLM-Image: 視覚知能に向けた統一画像生成モデル",
      "summary_ja": "生成・編集・参照合成を一つの配列として処理し、単一GPUで動作する多機能画像基盤モデル。"
    },
    {
      "id": "2611.06741",
      "title": "TailSteer: Trajectory-Tail Steering for Drift-Resistant Multi-turn Image Editing",
      "abstract": "Strong single-turn editing performance does not guarantee reliable multi-turn interaction: as edited outputs are repeatedly reused, small unintended changes can accumulate into severe visual drift. This long-term drift is often mitigated through training on multi-turn data or cross-turn rollouts, potentially altering pretrained priors, or through specialized inference-time mechanisms that are difficult to scale to foundation models. We introduce TailSteer, a final-stage training framework that improves multi-turn robustness while retaining the generative and editing capabilities acquired through earlier training. TailSteer follows a simple principle: keep early denoising dynamics close to those of the base model and concentrate preservation corrections near the trajectory tail, where fine-grained deviations can be suppressed. These corrections are learned from the editor's own on-policy denoising rollouts, using unchanged source content as a preservation reference without requiring curated ground-truth editing pairs. Experiments across the FLUX, SenseNova, and Qwen families show that TailSteer substantially reduces cumulative drift over 15-20 editing turns while largely preserving base-model performance on extensive text-to-image and single-image editing benchmarks. These results demonstrate that long-horizon editing robustness can be unlocked in foundation models after TailSteer, rather than by relearning their existing capabilities.",
      "upvotes": 43,
      "github_stars": 52,
      "github_repo": "https://github.com/Lyricccco/tailsteer",
      "project_page": "https://lyricccco.github.io/tailsteer/",
      "comments": 4,
      "org": "MMLab-CUHK",
      "url": "https://huggingface.co/papers/2611.06741",
      "arxiv_url": "https://arxiv.org/abs/2611.06741",
      "title_ja": "TailSteer: ドリフト耐性のあるマルチターン画像編集のための軌道末端ステアリング",
      "summary_ja": "初期の生成能力を保ちつつ、繰り返しの編集で生じる意図しない変化（ドリフト）を抑制する。"
    },
    {
      "id": "2611.08175",
      "title": "PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?",
      "abstract": "Automating printed circuit board (PCB) routing requires coordinating board-level connectivity decisions with geometric execution under strict design rules. Although recent agents can interact with native routing tools, reliable routing on complex boards remains challenging. We present PCBRouteAgent, a multimodal PCB routing agent inspired by how human engineers coordinate global strategy with local execution. A Global Routing Planner combines board images and structured electrical and geometric information to specify connection topology, routing order, corridors, and layer transitions. A Detailed Routing Executor realizes these guides through KiCad's native routing engine and performs bounded local recovery. Unresolved failures are returned as structured feedback, enabling targeted guide revisions while preserving accepted routes. We evaluate PCBRouteAgent on 247 synthetic and real-world boards from four PCBWorld-Bench test splits. It achieves clean-pass rates of 100%, 94.9%, 100%, and 40% on D2, D3-A, D3-B, and D3-C, respectively. On the three real-world subsets, PCBRouteAgent outperforms the best evaluated baseline in clean-pass rate by 13.9, 36, and 10 percentage points, respectively.",
      "upvotes": 40,
      "github_stars": 46,
      "github_repo": "https://github.com/chip-ai-agent/PCBRouteAgent",
      "project_page": "https://chip-ai-agent.github.io/research/pcbrouteagent/",
      "comments": 8,
      "org": "",
      "url": "https://huggingface.co/papers/2611.08175",
      "arxiv_url": "https://arxiv.org/abs/2611.08175",
      "title_ja": "PCBRouteAgent: LLMエージェントはどこまでPCB設計エンジニアに近づけるか？",
      "summary_ja": "グローバルな戦略立案と局所的な配線実行を統合し、複雑な基板設計を自動化するマルチモーダルAI。"
    },
    {
      "id": "2611.12886",
      "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
      "abstract": "Agentic reinforcement learning (RL) and multi-teacher on-policy distillation (MOPD) offer complementary routes to post-training. For visual agents, however, tool use presents two related challenges. Models may overlook useful tool-returned observations, while poorly grounded actions can limit the evidence available for subsequent distillation. We introduce Reframe, a post-training framework that treats the observation state, rather than only the output distribution, as an object of alignment. First, Ground-Drop-GRPO (GD-GRPO) trains spatial and temporal specialists with evidence-aware rewards and stochastic removal of the original visual input, encouraging them to acquire grounded evidence and use the returned observations. Second, Observation-Gated-MOPD (OG-MOPD) replaces deficient tool actions with canonical ones mid-rollout and resumes distillation from the repaired observation. The two stages complement each other, as learning to rely on tool-returned observations can help the policy benefit from observation repair. Neither stage requires a task-specific SFT cold start. Extensive experiments over 14 image and video benchmarks demonstrate that Reframe outperforms both Mix-RL and vanilla MOPD. Ablation results show that GD-GRPO increases observation dependence and tool gain compared with outcome-based GRPO.",
      "upvotes": 38,
      "github_stars": 31,
      "github_repo": "https://github.com/EliYuan30/Reframe",
      "project_page": "",
      "comments": 3,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2611.12886",
      "arxiv_url": "https://arxiv.org/abs/2611.12886",
      "title_ja": "Reframe: エージェント的視覚推論のための観測整合マルチ教師オンポリシー蒸留",
      "summary_ja": "出力だけでなく観測状態の整合性を重視し、視覚エージェントの根拠に基づいた行動を強化する。"
    },
    {
      "id": "2611.06483",
      "title": "What Does Multi-Turn Reinforcement Learning Really Improve in LLM Agents?",
      "abstract": "While multi-turn agentic reinforcement learning (RL) excels on long-horizon tasks, its performance gains remain highly sensitive to interaction constraints. Evaluating across sampling breadth K and interaction depth T via Pass@(K,T), we show that trajectory-level RL advantages depend on sufficient turn budgets, diminishing significantly when budgets tighten. Besides, agentic RL does not uniformly elevate single-step decision quality; rather, its strength concentrates in error recovery and long-horizon resilience. To mitigate the deployment risks caused by this budget dependence, we provide a preliminary discussion on the benefits and limitations of process supervision signals and introduce BudgetMix RL as an alternative that varies interaction budgets during training. Experiments demonstrate that BudgetMix RL achieves robust performance across diverse execution settings. Project Page: https://rethinking-agentic-rl.github.io/",
      "upvotes": 38,
      "github_stars": 18,
      "github_repo": "https://github.com/GaryStack/Rethinking-Agent-RL",
      "project_page": "https://rethinking-agentic-rl.github.io/",
      "comments": 6,
      "org": "Chinese Academic of Science Institute of Automation",
      "url": "https://huggingface.co/papers/2611.06483",
      "arxiv_url": "https://arxiv.org/abs/2611.06483",
      "title_ja": "マルチターン強化学習はLLMエージェントの何を本当に改善するのか？",
      "summary_ja": "RLが単一ステップの判断力ではなく、主にエラー回復力や長期的な回復力を高めることを解明。"
    },
    {
      "id": "2610.37257",
      "title": "GameVerse: A Minute-Scale Gameplay Dataset for Long-Horizon Interactive World Modeling",
      "abstract": "Recent advances in interactive world models have made it possible to generate controllable, dynamic environments from action inputs. Yet current models struggle to maintain coherence beyond roughly one minute of rollout, a limitation rooted not in model capacity but in the scarcity of long-horizon training data. Existing gameplay video datasets typically consist of clips under ten seconds, with captions that describe whole clips in coarse and undifferentiated text, which is insufficient for controllable long-horizon generation. We address this with GameVerse, a minute-scale gameplay video dataset purpose-built for long-horizon interactive world modeling. GameVerse contains 69.7K clips spanning 1,655 hours and 349.6 million frames across diverse first- and third-person gameplay, including 1,358 hours of continuous two-minute sequences, an order of magnitude longer than prior datasets. Clips pass through a unified pipeline of scene-consistent segmentation, quality filtering, camera pose estimation, and event-based caption annotation. Each clip is paired with a temporally stable camera trajectory that remains coherent across minutes, together with captions that separate static scene context from dynamic foreground events and align to event boundaries rather than fixed time windows. Comprehensive analysis shows that GameVerse surpasses existing public datasets in scale, diversity, and annotation quality. Experiments further demonstrate that training on GameVerse substantially extends the temporal horizon of interactive world models.",
      "upvotes": 37,
      "github_stars": 13,
      "github_repo": "https://github.com/kangverse/GameVerse",
      "project_page": "https://kangverse.github.io/GameVerse/",
      "comments": 2,
      "org": "Alaya Lab",
      "url": "https://huggingface.co/papers/2610.37257",
      "arxiv_url": "https://arxiv.org/abs/2610.37257",
      "title_ja": "GameVerse: 長期的な対話型世界モデルのための分単位のゲームプレイデータセット",
      "summary_ja": "長期の一貫性を維持する世界モデル構築のため、分単位の動画と詳細な説明文を含むデータを公開。"
    },
    {
      "id": "2611.04720",
      "title": "OneTrans-GSR: A Generative Slate Ranking Paradigm Unifying Reranking and Mix-Ranking with One Autoregressive Transformer",
      "abstract": "Industrial recommender systems allocate substantial computation to pointwise candidate scoring, yet separate reranking and mix-ranking stages still assemble the final exposure slate using hand-crafted rules and specialized low-capacity models. Mix-ranking combines product cards, short videos, livestreams, and advertising cards supplied by distinct upstream business channels. Although these rules and models encode valuable domain knowledge, they are inherently limited in leveraging additional data and computation. They constrain the combinatorial space of candidate slates and determine objective trade-offs through manual tuning. To enable scalable and effective slate generation, we reformulate reranking and mix-ranking as a unified learning problem whose performance can improve with computation. Specifically, we instantiate this formulation across the reranking and mix-ranking stages and propose OneTrans-GSR, a single decoder-only policy that extends our deployed OneTrans backbone to generate the exposure slate end-to-end. During training, a reward model evaluates complete slates and guides reinforcement learning toward slate-level and long-term objectives. During decoding, business constraints are explicitly enforced. Offline evaluation shows that slate quality consistently improves as reward-model and policy compute increase. Deployed in a large-scale industrial recommendation system, OneTrans-GSR mixes heterogeneous content types within a unified slate. In online A/B tests, it improves GMV/u by 2.63%, advertiser value by 2.06%, and repurchase rate by 2.03%, while reducing end-to-end latency across the reranking and mix-ranking stages by 13%. These results mark a paradigm shift in slate generation: moving beyond human-engineered heuristics toward a general learned policy creates a scalable path for further algorithmic optimization and compute-driven improvement.",
      "upvotes": 36,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2611.04720",
      "arxiv_url": "https://arxiv.org/abs/2611.04720",
      "title_ja": "OneTrans-GSR: 再順位付けと混合順位付けを統合する生成的スレートランキング・パラダイム",
      "summary_ja": "手動のルールを排除し、単一の自己回帰Transformerで推薦リスト全体をスケーラブルに生成。"
    },
    {
      "id": "2611.06817",
      "title": "Open-HumanScale: An Open Recipe for Scaling Human and Robot Experience for Embodied Foundation Models",
      "abstract": "Egocentric human video offers a scalable source of manipulation priors for robot learning, yet translating raw data scale into generalizable robot policies demands rigorous data curation and training recipes. We introduce Open-HumanScale, the first fully open recipe for scaling egocentric pretraining to 50,000 hours, anchored by Open-HumanScale-50K---a curated egocentric video corpus densely annotated with hand motion and natural language. Leveraging this corpus, we systematically investigate pure human pretraining via closed-loop simulation evaluations and uncover an empirical log-linear scaling law linking pretraining data hours to downstream robot success rates. Grounded in these findings, we develop HumanWAM-Vanilla, a world--action model pretrained exclusively on 50k hours of egocentric human video. Upon robot post-training, HumanWAM-Vanilla reaches 92.08% success on RoboTwin 2.0 Clean2Clean and 68.88% on Clean2Random, alongside a 14.17% mean success rate and a 19.00 mean progress score on RoboDojo. To push the capability frontier further, we explore joint human--robot pretraining with HumanWAM-Goal, a visual-goal-conditioned world--action model. Hybrid data scaling unlocks broad zero-shot generalization across both simulation and physical benchmarks, propelling post-trained RoboTwin 2.0 performance to new state-of-the-art levels: 92.70% on Clean2Clean and a substantial leap to 84.60% on Clean2Random. On physical robots, HumanWAM-Goal further exhibits emergent embodied in-context learning, dynamically adapting its manipulation behavior to unseen visual goals without parameter updates. To support reproducible scaling research in embodied AI, we open-source the Open-HumanScale-50K corpus, data curation and pretraining pipelines, alongside the pretrained and post-trained HumanWAM checkpoints, inference code, and simulation evaluation suites.",
      "upvotes": 36,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://dagroup-pku.github.io/open-humanwam/",
      "comments": 3,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2611.06817",
      "arxiv_url": "https://arxiv.org/abs/2611.06817",
      "title_ja": "Open-HumanScale: 身体化基盤モデルのための人間とロボットの経験を拡張するオープンレシピ",
      "summary_ja": "5万時間の主観視点動画を用いて、人間の経験からロボットの成功率を向上させる学習則を提示。"
    },
    {
      "id": "2611.03743",
      "title": "EvoMemState: Evolving Memory State for Personal Agents",
      "abstract": "Long-term memory enables large language model (LLM) agents to provide continuous personalized assistance by retaining user information across interactions. Existing systems support this process through fact extraction, organization, updating, and retrieval, but largely maintain memories as independent facts. This fact-centric paradigm may overlook how new facts update, constrain, or conflict with earlier ones, while leaving their applicability, role, and priority for the current request implicit. In this paper, we introduce EvoMemState, a state-centric framework that augments persistent facts with two complementary states: Relational States that capture how facts remain valid and relate to one another as memory evolves, and a Reasoning State that determines how these facts should be applied to the current request. Specifically, EvoMemState consists of three key components: (i) Ontology-Guided Memory State Induction extracts Persistent Facts and constructs Relational States that maintain their validity, scope, and evolving relations. (ii) RL-Based State Evolution internalizes memory-use experience into a policy through reinforcement learning to generate a request-specific Reasoning State. (iii) State-Aware Reasoning then combines the relevant facts with their Relational States and the generated Reasoning State to guide the personal agent. Extensive experiments on long-term dialogue and memory-use benchmarks demonstrate consistent improvements over existing memory systems in retrieval completeness and memory-grounded response accuracy. Our code and implementation details are available at https://github.com/XMUDeepLIT/EvoMemState.git.",
      "upvotes": 35,
      "github_stars": 30,
      "github_repo": "https://github.com/XMUDeepLIT/EvoMemState",
      "project_page": "",
      "comments": 5,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03743",
      "arxiv_url": "https://arxiv.org/abs/2611.03743",
      "title_ja": "EvoMemState: パーソナルエージェントのための進化するメモリ状態",
      "summary_ja": "事実間の関係性や現在の要求への優先度を「状態」として管理し、より適切な個人化支援を実現。"
    },
    {
      "id": "2611.04408",
      "title": "Halley: A Predictive Control Plane for Optical AI Data Center Networks",
      "abstract": "A frontier AI model is trained in an AI data center, on tens of thousands of accelerators joined by a dedicated network, and every training step ends with all of them exchanging data at once. Between racks, that network is optical, and each of its four layers, from lasers to switches, runs a fixed or after-the-fact policy. Lasers sharing an enclosure, cooling, and power can fail together. At a fixed spare ratio, correlated failure provably caps a pool's availability however large it grows. In this paper, we present a comprehensive predictive control plane framework, called Halley, that reads each resource's next state and acts before the failure occurs. It has four components, each carrying a formal guarantee: LightReserve that sizes the laser pool to provide a coverage bound, FoldFit that schedules the switch within 11/9 of the optimal, ThermaLead that holds a microring with one-step-ahead control, and TriageGuard that protects the highest-risk modules first. Halley gives each layer a predictive controller that defers to the deployed policy when unsure. Composed from simulations at that point, effective goodput, the share of ideal throughput kept, rises from 65.2\\% to 76.5\\% if a window that exhausts its spares is lost. If only the dark channels' bandwidth is lost, it reaches 67.4\\%. Per megawatt, that is up to 1.03--1.17 times the training; for the same training, up to 3.3--14.7\\% less data center capacity. Halley's fallback circuits are formally verified and are shown to achieve close timing on a commercial FPGA, and pass a 130~nm signoff.",
      "upvotes": 35,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.04408",
      "arxiv_url": "https://arxiv.org/abs/2611.04408",
      "title_ja": "Halley: 光学AIデータセンターネットワークのための予測制御プレーン",
      "summary_ja": "リソースの状態を事前に読み取り、相関故障が発生する前に対処する予測型制御フレームワーク。"
    },
    {
      "id": "2611.06808",
      "title": "LLMs Don't Know What They Know: Benchmarking Temporal Self-Knowledge for Financial Backtesting",
      "abstract": "Financial backtests of large language models (LLMs) are meaningful only if the model did not already know the outcomes it is asked to predict. Practitioners guard against this by trusting a vendor's stated knowledge cutoff, by asking the model what it knows, or by instructing it to answer as of a past date. To verify whether any of these safeguards can be trusted, we introduce FinDendro, a benchmark of 2,226 dated U.S. facts from 1999 to 2026, covering monthly macroeconomic series, month-end stock prices and Federal Reserve decisions. Each fact yields four prompts: a value question, Recall and Predict questions that pair each candidate value with a claim of knowing or guessing without a declared date, and a Predict question with a historical declared date. Controls for persistence and dominant outcomes keep chance accuracy near 0.27. Results show that for most frontier models, self-reports understate knowledge. GPT-5 answers 76% of controlled facts correctly but claims to know 38%, and answers 61% of the facts it says it does not know. Knowledge claims can persist beyond the measured knowledge boundary, by up to seven quarters, and a declared date removes most of the claims of prior knowledge while leaving accuracy unchanged. Backtests inside a model's training window therefore cannot be certified leak-free by self-report, instruction or stated cutoff. These findings motivate behavioral measurement of temporal knowledge boundaries, and FinDendro provides a benchmark and procedure for selecting backtest periods based on demonstrated factual knowledge.",
      "upvotes": 33,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://huggingface.co/spaces/TheFinAI/FinDendro",
      "comments": 3,
      "org": "The Fin AI",
      "url": "https://huggingface.co/papers/2611.06808",
      "arxiv_url": "https://arxiv.org/abs/2611.06808",
      "title_ja": "LLMは自分の知識を知らない：金融バックテストのための時間的自己知識のベンチマーク",
      "summary_ja": "LLMが未来の事実を「知らない」と主張しながら実は知っている現象を検証するベンチマーク。"
    },
    {
      "id": "2610.40131",
      "title": "VideoMemBench: How Well Do MLLMs Remember in Video Conversations?",
      "abstract": "Multimodal large language models (MLLMs) can now process hour-long videos, making extended multi-turn dialogue over a single video a natural mode of use. Sustaining such a dialogue requires more than answering each question in isolation: the model must retrieve and reuse information established earlier in the conversation, both what it has seen and what it has said, an ability we term in-context video memory. Existing video QA benchmarks leave this ability unmeasured: their questions are mutually independent, never reference one another, and each is answerable from the video alone, so nothing ever requires carrying information across turns. We introduce VideoMemBench, in which each sample pairs a single video with a long multi-turn dialogue, whose turns are connected by typed cross-turn dependencies: an Episodic Dependency refers back to a visual episode described in an earlier turn, probing memory of what the model has seen, while an Answer Dependency builds on the model's own earlier answer, probing memory of what the model has said. Every dependency is verified considering two properties: 1) necessity, meaning the question cannot be answered without its earlier turns, and 2) non-leakage, meaning the question does not restate the information from its earlier turns. To enforce these properties, we design a construction pipeline with three LLM roles: a planner, a generator, and a judger, with each dialogue reviewed by human experts. VideoMemBench comprises 326 videos with 2,476 turns, of which 1,387 depend on earlier turns, including multi-parent dependencies and long-range call-back. Among over 20 evaluated open- and closed-source MLLMs, Claude Opus 5 performs the best with an overall score of only 45.7%, highlighting the challenge of in-context video memory. Our dataset and evaluation are released.",
      "upvotes": 33,
      "github_stars": 4,
      "github_repo": "https://github.com/Oliiveralien/VideoMemBench",
      "project_page": "https://videomembench.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.40131",
      "arxiv_url": "https://arxiv.org/abs/2610.40131",
      "title_ja": "VideoMemBench: 動画対話においてMLLMはどれだけ記憶しているか？",
      "summary_ja": "長時間動画の対話で、過去の発言や見た内容を再利用する「コンテキスト内記憶力」を評価。"
    },
    {
      "id": "2610.42148",
      "title": "Flide: Accelerating Decision Inference with Exact State Forking",
      "abstract": "Decision models such as Jev have emerged as a highly promising paradigm for LLM agent systems, providing lightweight and reliable categorical reasoning for rapid System One execution. However, existing generation-oriented inference engines fail to support these workloads effectively, suffering from severe prefix recomputation overheads or distorted output probabilities. To address this challenge, we propose Flide, an efficient and exact inference engine that decouples the logical tree structure of a decision request from its physical execution within a single flattened token stream. Through ForkAttention, Flide navigates request dependencies using GPU-resident indices across both standard attention and recurrent Gated DeltaNet layers, guaranteeing in exact arithmetic that every query branch evaluates identically to an isolated forward pass. By expressing branch topologies directly in GPU-resident metadata, Flide accommodates diverse request mixtures with a compact set of pre-recorded execution graphs while enabling expanding agent histories to resume from checkpoints saved in earlier passes. Extensive evaluations on public hybrid and decision models demonstrate that Flide answers queries up to 9.5 times faster than vLLM and SGLang while staying closest to a float32 reference in total variation distance. By unifying physical execution throughput with mathematical exactness, Flide establishes a principled foundation for scalable, latency-critical decision intelligence in agent systems.",
      "upvotes": 31,
      "github_stars": 344,
      "github_repo": "https://github.com/OmniJev/Flide",
      "project_page": "https://flide.org/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.42148",
      "arxiv_url": "https://arxiv.org/abs/2610.42148",
      "title_ja": "Flide: 正確な状態フォークによる意思決定推論の加速",
      "summary_ja": "決定木構造と物理実行を分離することで、重複計算を排除し正確かつ高速な意思決定推論を実現。"
    },
    {
      "id": "2611.06856",
      "title": "LongBanana: An Expert-Verified Benchmark for Long-Context Multi-Reference Image Synthesis",
      "abstract": "We introduce LongBanana, to our knowledge the first expert-designed and expert-verified benchmark for long-context multi-reference image synthesis in the age of agent-driven image generation. The task requires retrieving dispersed visual evidence, rejecting distractors, binding entities and relations, and composing one coherent final image from multiple references. LongBanana contains 90 carefully designed tasks organized by a 3-by-3 taxonomy; each task includes about 32 reference images, 20 constraints, and 50 evaluation items, yielding 4,670 expert-specified atomic evaluation items in total. Its graph-grounded evaluation design instantiates each task with reference images and an entity-relation graph, then converts node, edge, and whole-graph obligations into checklist items for Content Fidelity, Relational Binding, and Global Constraint Satisfaction. Reviewed expert labels include a 15% double-labeled subset with 89.4% exact agreement and 0.83 quadratic weighted kappa. We further introduce LongBanana-Gen, an agent-harness framework for long-horizon image generation; experiments show that minimal agent harnesses improve over direct generation, while a ReAct-Plan-Exec-Reflect (RPR) workflow yields harness-dependent gains by strengthening evidence grounding and repair. Together, LongBanana provides an auditable testbed for measuring dense visual evidence use and a shared target for developing stronger agent-driven image-generation systems. Code and data are available at the project page: https://long-banana.com/.",
      "upvotes": 31,
      "github_stars": 2,
      "github_repo": "https://github.com/KlingAIResearch/LongBanana",
      "project_page": "https://klingairesearch.github.io/LongBanana/",
      "comments": 3,
      "org": "Kolors Team, Kuaishou Technology",
      "url": "https://huggingface.co/papers/2611.06856",
      "arxiv_url": "https://arxiv.org/abs/2611.06856",
      "title_ja": "LongBanana: 長文脈・多参照画像合成のためのエキスパート検証済みベンチマーク",
      "summary_ja": "多数の参照画像と複雑な制約から一貫した画像を合成する能力を、専門家が詳細に評価する。"
    },
    {
      "id": "2611.08452",
      "title": "ReproBridge: Building Reproducibility into ML Research Artifacts",
      "abstract": "Reproducing machine learning experiments requires reconstructing procedures from information scattered across papers, released code, and supporting artifacts. For coding agents, reproduction success can therefore depend on their ability to fill in missing details, rather than on the released artifacts alone. We ask whether preserving recovered procedures and decisions improves subsequent independent reproduction. We define a standardized artifact design comprising a refined codebase, environment setup, experiment launchers, and a reproduction guide, and introduce ReproBridge, an agent workflow for constructing these refined reproducible artifacts. ReproBridge-Bench provides 1,029 tasks from 387 experiments across 36 papers, anchored by five human-verified reference scores per task. Agents attempt tasks in fresh sessions with raw code or refined artifacts; a separate Auditor checks execution evidence. Across four evaluated models, refined artifacts raise mean reproduction success from 76.4% to 92.6% and reduce downstream API spending by 19.7% on average. The cross-model success-rate spread narrows from 21.6 to 3.9 percentage points, with all four models achieving mean success rates above 90%. Removing any component reduces success in the ablation study, with the largest losses from code and environment removal. These results suggest that preserving execution knowledge helps even models with lower raw-code success reproduce experiments more reliably and at lower API cost.",
      "upvotes": 30,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://wyyyb.github.io/reprobridge_website/",
      "comments": 3,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.08452",
      "arxiv_url": "https://arxiv.org/abs/2611.08452",
      "title_ja": "ReproBridge: 機械学習研究成果物への再現性の組み込み",
      "summary_ja": "散らばった情報から実験手順を復元し、標準化された再現可能な成果物を自動構築するAI手法。"
    },
    {
      "id": "2611.06728",
      "title": "Turns Matter: Advancing Streaming Video RL via Turn-Level Credit",
      "abstract": "Streaming video understanding requires models to repeatedly decide whether to respond or continue observing. Recently, Group Relative Policy Optimization (GRPO) has been applied to this setting, with existing approaches emphasizing reward design while retaining a single trajectory-level advantage across turns. Such shared credit can reinforce redundant replies after earlier successes and discourage useful follow-ups after earlier failures. We propose TurnWise, a turn-level GRPO framework that aligns learning with individual streaming decisions. TurnWise addresses the mismatch between trajectory-level feedback and turn-level interaction, promoting informative responses and reducing redundancy. Specifically, turn-level credit assignment uses silence-completed prefix scoring to construct group-relative advantages from each decision's remaining return, separating its learning signal from earlier rewards. Turn-mean policy optimization averages token losses within each turn and then across turns, giving response and waiting decisions equal weight regardless of output length. These complementary designs improve streaming policy learning without a learned critic or additional rollouts. Extensive experiments show our method outperforms prior RL approaches for streaming video understanding.",
      "upvotes": 30,
      "github_stars": 67,
      "github_repo": "https://github.com/XD111ds/turn-wise-rl",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.06728",
      "arxiv_url": "https://arxiv.org/abs/2611.06728",
      "title_ja": "ターンが重要：ターンレベルのクレジットによるストリーミング動画RLの進展",
      "summary_ja": "各ターンの判断に適切に報酬を割り当てることで、冗長な応答を減らし有益な情報を増やす手法。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "Gilbert + Tobin rethinks the business of law with AI",
      "summary": "A conversation with Sam Nickless, Partner and Chief Executive Officer at Gilbert + Tobin.",
      "url": "https://openai.com/index/gilbert-tobin-sam-nickless",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "Gilbert + Tobin が AI で法律業務を再考",
      "summary_ja": "Gilbert + Tobin の CEO が AI の導入による法律ビジネスの変革について語る。"
    },
    {
      "lab": "AlphaSignal",
      "title": "UT Austin's Tiny 8M Model Generates Testable Child Language Hypotheses",
      "summary": "Researchers use small language models trained on child-directed speech as simulated learners to generate testable hypotheses about how children acquire dative verbs.",
      "url": "https://alphasignal.ai/news/ut-austin-s-tiny-8m-model-generates-testable-child-language-hypotheses",
      "published": "2026-11-11T10:14:09+09:00",
      "title_ja": "テキサス大学、子供の言語習得をシミュレートする 8M モデルを発表",
      "summary_ja": "子供向けの会話で学習させた小規模言語モデルを用い、動詞の習得過程を検証可能にする。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Gives Merchants a Dashboard and Agent Inside ChatGPT",
      "summary": "OpenAI's Business Hub lets US ecommerce brands claim profiles, track ChatGPT mentions, and deploy a Business Agent that answers customer questions.",
      "url": "https://alphasignal.ai/news/openai-gives-merchants-a-dashboard-and-agent-inside-chatgpt",
      "published": "2026-11-11T03:06:42+09:00",
      "title_ja": "OpenAI、ChatGPT 内に加盟店向けダッシュボードとエージェントを導入",
      "summary_ja": "米国の EC ブランドがプロファイルを管理し、顧客対応用のエージェントを配備できる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Turns Claude Into a Full Office Suite With Sheets and Whiteboards",
      "summary": "Anthropic adds collaborative spreadsheets, whiteboards, and embedded third-party apps to Claude, pushing it from chat window into a full team workspace.",
      "url": "https://alphasignal.ai/news/anthropic-turns-claude-into-a-full-office-suite-with-sheets-and-whiteboards",
      "published": "2026-11-11T02:26:03+09:00",
      "title_ja": "Anthropic、Claude をスプレッドシートやホワイトボードを備えたオフィススイート化",
      "summary_ja": "共同作業用のシートや外部アプリ連携を追加し、Claude をチーム用ワークスペースへ拡張。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google's Gemini 4 Carbon Tops Cursor's Coding Benchmark at Half the Price",
      "summary": "Google's new frontier coding model tops CursorBench at 60.4% and ships in Cursor at half price through the end of November.",
      "url": "https://alphasignal.ai/news/google-s-gemini-4-carbon-tops-cursor-s-coding-benchmark-at-half-the-price",
      "published": "2026-11-11T01:35:16+09:00",
      "title_ja": "Google の Gemini 4 Carbon、半額で Cursor のコーディング指標の頂点に",
      "summary_ja": "新モデルが CursorBench で首位を獲得し、11月末まで Cursor 上で半額で提供される。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbon が利用可能に",
      "summary_ja": "Google の最新コーディングモデルである Gemini 4 Carbon が正式に提供開始された。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google DeepMind's Gemini Robotics 2.5 Hits 96% in Mercedes Factory Pilot",
      "summary": "DeepMind's new vision-language-action model hits 96% accuracy on factory kitting and jumps 30-100% on dexterity tasks over its predecessor.",
      "url": "https://alphasignal.ai/news/google-deepmind-s-gemini-robotics-2-5-hits-96-in-mercedes-factory-pilot",
      "published": "2026-11-11T00:00:42+09:00",
      "title_ja": "DeepMind の Gemini Robotics 2.5、メルセデスの工場試行で 96% の精度を達成",
      "summary_ja": "新しい視覚・言語・行動モデルが、工場の部品収集や手先の器用な作業の精度を大幅に向上。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Open-Source ha-mcp Gives AI Agents 87 Tools to Run Your Smart Home",
      "summary": "An unofficial MCP server exposes 87 Home Assistant tools to Claude, ChatGPT, and other LLMs for building, debugging, and controlling smart homes.",
      "url": "https://alphasignal.ai/news/open-source-ha-mcp-gives-ai-agents-87-tools-to-run-your-smart-home",
      "published": "2026-11-10T21:04:56+09:00",
      "title_ja": "オープンソース ha-mcp がスマートホーム操作用に 87 のツールを AI に提供",
      "summary_ja": "非公式 MCP サーバー経由で Home Assistant ツールを LLM に繋ぎ、家の制御や修正が可能に。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Code の紹介：複雑なソフトウェアの深層検証における突破口",
      "summary_ja": "AI エージェントが 300 万行の証明コードを記述し、Signal の中核となる暗号化を検証した。"
    },
    {
      "lab": "OpenAI",
      "title": "Helping caregivers use AI in everyday life",
      "summary": "OpenAI Academy is bringing free, hands-on ChatGPT workshops to caregivers in five U.S. cities, helping them build practical AI skills for everyday life.",
      "url": "https://openai.com/index/helping-caregivers-use-ai-in-everyday-life",
      "published": "2026-11-10T21:00:00+09:00",
      "title_ja": "介護者の日常生活における AI 活用を支援",
      "summary_ja": "OpenAI Academy が介護者向けに ChatGPT ワークショップを開催し、実用的なスキルを伝える。"
    },
    {
      "lab": "OpenAI",
      "title": "Introducing Businesses in ChatGPT",
      "summary": "Manage your business information, get insights about how your business shows up, and turn interest into action in ChatGPT.",
      "url": "https://openai.com/index/introducing-businesses-chatgpt",
      "published": "2026-11-10T19:00:00+09:00",
      "title_ja": "ChatGPT でのビジネス機能の導入",
      "summary_ja": "ChatGPT 上でビジネス情報を管理し、分析結果を得ることで顧客の関心を具体的な行動に繋げる。"
    },
    {
      "lab": "OpenAI",
      "title": "Closing the AI guidance gap in education",
      "summary": "New ThinkYoung research and lessons from OpenAI’s EMEA education partnerships on supporting teachers, AI literacy, and independent learning.",
      "url": "https://openai.com/index/closing-ai-guidance-gap-education",
      "published": "2026-11-10T18:00:00+09:00",
      "title_ja": "教育における AI 指針の格差を解消する",
      "summary_ja": "教師支援や AI リテラシー、自律学習を促進するための調査と教育パートナーシップの成果を紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "Work at the Frontier: AI’s effect on freelance work",
      "summary": "New research from OpenAI and Upwork finds shifting demand for freelance work, new skill combinations, and larger budgets and more hours for AI-related projects.",
      "url": "https://openai.com/index/ai-effect-on-freelance-work",
      "published": "2026-11-10T16:00:00+09:00",
      "title_ja": "フロンティアでの仕事：AI がフリーランス業務に与える影響",
      "summary_ja": "AI 関連プロジェクトで予算と時間が増加するなど、フリーランスの需要とスキルに変化が生じている。"
    },
    {
      "lab": "Hugging Face",
      "title": "Pay for Hugging Face Hub with your Google Cloud Account",
      "summary": "",
      "url": "https://huggingface.co/blog/hub-gcp-marketplace",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "Hugging Face Hub の支払いを Google Cloud アカウントで実施可能に",
      "summary_ja": "Google Cloud アカウントを通じて Hugging Face Hub の利用料を支払えるようになった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Decision Models in Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/decision",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "Hugging Face における意思決定モデル",
      "summary_ja": "Hugging Face プラットフォーム上で利用可能な意思決定モデルについての解説。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorer で世界の言語を探求する",
      "summary_ja": "自然言語処理技術を用いて、世界中の多様な言語を探索する取り組みの紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini Robotics 2.5 accelerates real-world general dexterity",
      "summary": "Our most capable vision-language-action model enhances robot dexterity, reliability, and safety",
      "url": "https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/",
      "published": "2026-11-10T04:51:47+09:00",
      "title_ja": "Gemini Robotics 2.5 が現実世界での汎用的な器用さを加速",
      "summary_ja": "最新の視覚・言語・行動モデルにより、ロボットの器用さ、信頼性、安全性が向上した。"
    },
    {
      "lab": "OpenAI",
      "title": "ChatGPT Enterprise now available in AWS Marketplace",
      "summary": "ChatGPT Enterprise is now available through AWS Marketplace, helping organizations simplify procurement through existing AWS purchasing and billing relationships.",
      "url": "https://openai.com/index/chatgpt-enterprise-aws-marketplace",
      "published": "2026-11-10T04:00:00+09:00",
      "title_ja": "ChatGPT Enterprise が AWS Marketplace で提供開始",
      "summary_ja": "AWS の既存の請求関係を通じて、ChatGPT Enterprise の調達を簡素化できるようになった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Nemotron-Personas-Finance-Japan: A Synthetic Dataset Capturing Japan's Demographics and Financial Context",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-personas-finance-japan",
      "published": "2026-11-10T00:05:57+09:00",
      "title_ja": "Nemotron-Personas-Finance-Japan: 日本の人口統計と金融文脈を捉えた合成データセット",
      "summary_ja": "日本の人口構成や金融背景を反映させた、モデル学習用のペルソナ合成データセット。"
    },
    {
      "lab": "Hugging Face",
      "title": "Your Experts Have Partners. There's HOPE for Keeping Them Together",
      "summary": "",
      "url": "https://huggingface.co/blog/amazon/higher-order-pruning-experts",
      "published": "2026-11-09T21:34:29+09:00",
      "title_ja": "専門家にはパートナーがいる。彼らを結びつけるための HOPE",
      "summary_ja": "専門家とそのパートナーの関係性を維持するための支援や研究についての取り組み。"
    },
    {
      "lab": "Berkeley BAIR",
      "title": "BAIR at CoRL 2026",
      "summary": "The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. BAIR faculty, postdocs and students will be presenting research at various sessions, including an Early Career Keynote from Professor Negar Mehr. See below for the full schedule of sessions with BAIR members, including papers co-authored with collaborators at other universities and companies. November 9–12, 2026 Austin, Texas All times CST · UTC−6 33 Main-conference papers 4 Late-breaking results (LBR) posters 10 Orals & spotlights 3 orals · 7 spotlights 4 Days of research November 9–12 Mon Nov 9 Tue Nov",
      "url": "http://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/",
      "published": "2026-11-09T18:00:00+09:00",
      "title_ja": "CoRL 2026 における BAIR の活動",
      "summary_ja": "2026 年のロボット学習会議にて、BAIR メンバーが発表する 33 本の論文や講演の予定。"
    },
    {
      "lab": "Hugging Face",
      "title": "ToyBlocks: A controlled world for robot learning and evaluation",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/toyblocks",
      "published": "2026-11-06T23:00:48+09:00",
      "title_ja": "ToyBlocks: ロボット学習と評価のための制御された環境",
      "summary_ja": "ロボットの学習効率を高め、性能を評価するために設計された制御済みの仮想世界の紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Egyptian and Nigerian English join the Open ASR Leaderboard",
      "summary": "",
      "url": "https://huggingface.co/blog/open-asr-leaderboard-liva",
      "published": "2026-11-06T09:00:00+09:00",
      "title_ja": "エジプト英語とナイジェリア英語が Open ASR リーダーボードに参加",
      "summary_ja": "オープンな音声認識ベンチマークに、エジプトとナイジェリアの英語データが追加された。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/",
      "published": "2026-11-06T02:05:16+09:00",
      "title_ja": "Gemini Omni 1.2 Flash: 長尺動画に対応した高速・低コストモデル",
      "summary_ja": "より長いクリップの処理に対応し、コスト効率と速度を両立した新モデルの紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Detecting signs of hypertension using wearable sensors",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
      "published": "2026-11-06T01:01:08+09:00",
      "title_ja": "ウェアラブルセンサーを用いた高血圧の兆候検知",
      "summary_ja": "身に着けるデバイスのセンサーデータを活用し、高血圧の初期兆候を特定する研究。"
    },
    {
      "lab": "Apple ML",
      "title": "Faster Retrieval for Better, More Efficient RAG",
      "summary": "Maximum inner product search (MIPS) sits at the core of recommendation systems, search, and retrieval-augmented generation (RAG). Given a query vector, MIPS systems search within a database of millions of candidate key vectors for the one that best matches the query. The original data point associated with that best-matching key is then used to handle the query: in RAG, the document that is best suited to answer the question is typically prefixed to the query.\nAs the number of keys grows to millions and vector dimensions reach thousands, the computational cost of running an exhaustive…",
      "url": "https://machinelearning.apple.com/research/faster-retrieval",
      "published": "2026-11-05T09:00:00+09:00",
      "title_ja": "より良く、効率的な RAG のための高速検索",
      "summary_ja": "膨大なベクトルから最適な回答を高速に探し出す MIPS 技術により RAG の効率を向上させる。"
    },
    {
      "lab": "Google Research",
      "title": "Agile Deliberation: How AI helps humans define the gray areas",
      "summary": "Data Mining & Modeling",
      "url": "https://research.google/blog/agile-deliberation-how-ai-helps-humans-define-the-gray-areas/",
      "published": "2026-11-05T03:07:05+09:00",
      "title_ja": "機敏な審議：AI が人間の「グレーゾーン」定義をどう支援するか",
      "summary_ja": "データマイニングとモデリングを通じ、AI が人間の複雑な意思決定の境界線画定をサポートする。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Agentic cheminformatics with Google Antigravity",
      "summary": "Learn how Google Antigravity and our Cheminformatics Skills accelerate drug discovery workflows, search compounds, and propose novel rigidified macrocycles.",
      "url": "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/",
      "published": "2026-11-04T02:01:49+09:00",
      "title_ja": "Google Antigravity によるエージェント型ケモインフォマティクス",
      "summary_ja": "創薬ワークフローを加速し、化合物の探索や新たなマクロサイクルの提案を AI が行う。"
    },
    {
      "lab": "Apple ML",
      "title": "Attention to Mamba: A Recipe for Cross-Architecture Distillation",
      "summary": "State Space Models (SSMs) such as Mamba have become a popular alternative to Transformer models, due to their reduced memory consumption and higher throughput at generation compared to their Attention-based counterparts. On the other hand, the community has built up a considerable body of knowledge on how to train Transformers, and many pretrained Transformer models are readily available. To facilitate the adoption of SSMs while leveraging existing pretrained Transformers, we aim to identify an effective recipe to distill an Attention-based model into a Mamba-like architecture. In prior work…",
      "url": "https://machinelearning.apple.com/research/attention-mamba-distillation",
      "published": "2026-11-03T09:00:00+09:00",
      "title_ja": "Attention to Mamba: アーキテクチャを跨ぐ蒸留のレシピ",
      "summary_ja": "既存の Transformer モデルの知識を、メモリ効率の良い Mamba 系モデルへ転移させる手法の提案。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Speeding up planning decisions with AI",
      "summary": "Google DeepMind and UK government work together to reduce planning assessment times",
      "url": "https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/",
      "published": "2026-10-30T23:18:30+09:00",
      "title_ja": "AI による計画決定の迅速化",
      "summary_ja": "Google DeepMind と英国政府が協力し、都市計画の審査時間を短縮する取り組み。"
    }
  ]
};
