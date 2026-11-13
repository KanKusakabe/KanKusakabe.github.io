window.papersData = {
  "updated_at": "2026-11-13 11:28 JST",
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
      "id": "2611.12806",
      "title": "Learning Heterogeneous Tactile Representation for General Dexterous Manipulation",
      "abstract": "Tactile sensing is an indispensable modality for contact-rich dexterous manipulation, a capability that hints at the ultimate frontiers of embodied intelligence. However, commercially available tactile sensors are still at a relatively early stage of development, with each type of sensor offering irreplaceable strengths alongside its own drawbacks. A key challenge is thus to free tactile understanding from sensor-specific physics, so that embodied models can effectively leverage heterogeneous tactile data. To this end, we develop LingBot-Touch, a tactile foundation model characterized by the following properties. (i) Our model yields a unified representation across different tactile sensors (i.e., piezoresistive, magnetic, and visuotactile sensors), and is easily extensible to new sensor types. (ii) The resulting tactile tokens are plug-and-play: they can be seamlessly integrated into policy models across paradigms, from diffusion policy to vision-language-action (VLA) models such as π_{0.5} and LingBot-VLA, consistently enhancing manipulation dexterity. (iii) Extensive experiments, spanning simulation and real-robot deployments across multiple hardware platforms, demonstrate that our tactile representation substantially benefits complex manipulation tasks while maintaining strong computational efficiency. We believe the findings in this work demonstrate the potential of leveraging cross-sensor data to scale tactile learning, and offer encouraging insights for the design of future hardware and embodied models.",
      "upvotes": 102,
      "github_stars": 367,
      "github_repo": "https://github.com/Robbyant/lingbot-touch",
      "project_page": "https://technology.robbyant.com/lingbot-touch",
      "comments": 2,
      "org": "Robbyant",
      "url": "https://huggingface.co/papers/2611.12806",
      "arxiv_url": "https://arxiv.org/abs/2611.12806",
      "title_ja": "多種多様な触覚表現を学習する汎用器用操作モデル",
      "summary_ja": "異種触覚センサのデータを統合表現に変換し、多様なセンサ構成で器用な操作を可能にする触覚基盤モデルを提案。"
    },
    {
      "id": "2611.06043",
      "title": "Confucius4-R2T2: A Stable-Prefix Streaming ASR Model for Real Real-Time Transcription",
      "abstract": "Streaming speech recognition is increasingly consumed by machines, such as translators and voice agents, that act on each token as it appears. A token that is later revised costs wasted work or a wrong action. In this work, we present Confucius4-R2T2 (short for Real Real-Time Transcription), a stable-prefix streaming ASR model that never modifies its earlier output while maintaining high accuracy and low latency. R2T2 is obtained by post-training Qwen3-ASR-1.7B on 1,500 hours of Chinese and English audio while freezing its pre-trained audio encoder and projector. The adaptation is based on the concept of Longest Stable Prefix (LSP), a new notion that we introduce in this work. We prove that LSP is monotone under the prefix order, consistent with the full-audio output, and maximal among labels that equal a whole earlier output. Learning from LSP labels converts a full-context model into a stable-prefix streaming one without any architectural change. Extensive evaluations show that R2T2 brings streaming recognition close to the base model's full-context quality while delivering stable text with low emission lag. Its gains extend beyond the post-training languages, demonstrating a practical path from full-context ASR to stable streaming. We open-source the model weights and code at https://huggingface.co/netease-youdao/Confucius4-R2T2 and https://github.com/netease-youdao/Confucius4-R2T2.",
      "upvotes": 92,
      "github_stars": 885,
      "github_repo": "https://github.com/netease-youdao/Confucius4-R2T2",
      "project_page": "https://r2t2.ai/",
      "comments": 2,
      "org": "Netease Youdao",
      "url": "https://huggingface.co/papers/2611.06043",
      "arxiv_url": "https://arxiv.org/abs/2611.06043",
      "title_ja": "Confucius4-R2T2: リアルタイム転写のための安定プレフィックス・ストリーミングASRモデル",
      "summary_ja": "過去の出力を一切修正しない「最長安定プレフィックス」の概念を用い、高精度かつ低遅延なリアルタイム音声認識を実現。"
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
      "title_ja": "条件シフトによる少数ステップのストリーミングビデオ生成",
      "summary_ja": "外部の判定ネットワークを排除し、生成モデル内部の条件シフトで速度場を推定することで、効率的な動画生成を可能にする。"
    },
    {
      "id": "2611.08264",
      "title": "SplatAnything: Gaussian Spacing Normalization for Feed-forward 3DGS across Arbitrary Scenes",
      "abstract": "We identify a key limitation of existing feed-forward 3DGS methods: Gaussian attributes are typically predicted in a radial-distance-normalized space that canonicalizes a global radial statistic of the reconstructed geometry, while the spacing between neighboring Gaussian centers can still vary substantially across scene scales and camera configurations. This mismatch induces systematic shifts in Gaussian-scale targets, leading to ambiguous supervision. To address this, we propose SplatAnything with Gaussian Spacing Normalization (GSNorm), which canonicalizes a robust scene-level statistic of Gaussian spacing to provide a more consistent spatial reference for Gaussian prediction. To rigorously assess our method, we further establish a systematic benchmark spanning diverse datasets, input sparsity levels, and challenging extrapolated viewpoints. Extensive experiments demonstrate that SplatAnything achieves state-of-the-art performance, with particularly strong gains under substantial variations in scene scale and viewpoint.",
      "upvotes": 69,
      "github_stars": 205,
      "github_repo": "https://github.com/zju3dv/SplatAnything",
      "project_page": "https://zju3dv.github.io/SplatAnything/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2611.08264",
      "arxiv_url": "https://arxiv.org/abs/2611.08264",
      "title_ja": "SplatAnything: 任意シーンに対応するフィードフォワード3DGSのためのガウス間隔正規化",
      "summary_ja": "ガウス間隔正規化によりシーン尺度やカメラ構成に依存しない空間基準を提供し、一貫性のある高品質な3DGS予測を実現。"
    },
    {
      "id": "2611.03953",
      "title": "P^2-MOPD: Accelerating Multi-Teacher On-Policy Distillation via Parameter Priors",
      "abstract": "Multi-teacher on-policy distillation consolidates expert capabilities by supervising student-generated trajectories, whereas task arithmetic offers a training-free alternative through linear parameter combinations. We view the linear combination of student and expert parameters as a single differentiable model and propose P^2-MOPD, which jointly optimizes the mixing coefficients and the student weights under the same on-policy distillation objective. Unlike task arithmetic, which stays within the span of the frozen student and expert parameters for any choice of merging coefficients, P^2-MOPD keeps the student trainable, so the experts act as parameter priors without confining it to this span. Across four domains at 1.7B and 4B scales, P^2-MOPD achieves faster and more balanced recovery than MOPD from the same initialization, surpassing its final average recovery in half the training steps. At the end of training, our 1.7B model reaches 94.7% average recovery, versus 80.9% for MOPD.",
      "upvotes": 68,
      "github_stars": 18,
      "github_repo": "https://github.com/SinuoWang/P2-MOPD",
      "project_page": "",
      "comments": 8,
      "org": "StepFun",
      "url": "https://huggingface.co/papers/2611.03953",
      "arxiv_url": "https://arxiv.org/abs/2611.03953",
      "title_ja": "P^2-MOPD: パラメータプライアによるマルチティーチャー・オンポリシー蒸留の加速",
      "summary_ja": "混合係数と学生の重みを同時に最適化し、教師モデルを単なる線形結合の枠を超えた「パラメータプライア」として活用する手法。"
    },
    {
      "id": "2611.14320",
      "title": "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents",
      "abstract": "External memory enables LLM agents to improve from experience by distilling trajectories of past tasks into concise lessons for new tasks. However, memory can also lead to memory-induced degradation, where an agent fails on tasks it would solve without memory, often because it follows a lesson that is incorrect, or misapplies or misreads a valid one. This is because lessons are inferred from trajectories labeled only with task success or failure, yet are typically provided without the trajectories they came from, leaving the agent no way to check them. To address this, we introduce WikiTrace, an evidence-linked memory system designed to let agents check each lesson against its original trajectory. Specifically, motivated by the finding that a trajectory often still holds the evidence needed to catch an erroneous lesson, WikiTrace stores each lesson as a concise insight linked to a summary of why its trajectory succeeded or failed and to the raw trajectory itself. Then, on a new task, the agent starts from all insights and, whenever one lacks details needed to act, conflicts with another, or comes from a failed task, descends through its links with terminal tools to fill in missing details or correct the insight before acting. We validate WikiTrace on five agentic benchmarks, showing that it consistently outperforms existing memory approaches and a baseline given the same insights alone, while also reducing memory-induced degradation. Our code is available at https://github.com/yukyeongleee/wikitrace",
      "upvotes": 62,
      "github_stars": 14,
      "github_repo": "https://github.com/yukyeongleee/wikitrace",
      "project_page": "https://yukyeongleee.github.io/wikitrace/",
      "comments": 7,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.14320",
      "arxiv_url": "https://arxiv.org/abs/2611.14320",
      "title_ja": "エビデンス連携メモリによるLLMエージェントのメモリ起因の性能劣化の抑制",
      "summary_ja": "教訓を元の実行ログと紐付ける「WikiTrace」により、エージェントが過去の経験を検証可能にし、誤った教訓による劣化を防ぐ。"
    },
    {
      "id": "2611.14210",
      "title": "Tree-Ising: Repairing Language Models with Bit-Level Ising Edits",
      "abstract": "Weight-space programming, introduced in recent MIT work by Takehi et al., enables a frontier LLM agent to read a network's weights and write a repair. Their GPT-6 Astra agent corrected the reasoning loops of Qwen3.5-0.8B without gradients, using 158 agent turns, 89.7 million tokens, and 50 forward-pass requests. Our method, Tree-Ising, casts this repair as a sparse discrete optimization problem over the model's own BF16 weights. Forward statistics define an objective that weakens a loop direction, strengthens a concluding direction, and preserves the layer's output on productive tokens. Within a state-tree representation, where lossless BF16 storage acts as a special case, the admissible edits are sign flips and exponent shifts that preserve all shared group exponents and mantissas. We decompose this objective exactly into independent QUBO (Ising) problems, one per output row, which we solve on a GPU using simulated annealing or quantum-inspired simulated bifurcation. On the agent's two layers, Tree-Ising achieves 54.6% on MATH-500, outperforming the agent's edit (51.7%) under the same evaluation protocol, while the base model scores 7.9% as reported. The simulated bifurcation solver yields a statistically indistinguishable repair at 55.1%. Both solvers outperform the agent edit across all five math benchmarks, with statistically significant improvements on MATH-500 and GSM8K after correcting for multiple comparisons. Our approach modifies 13% to 17% fewer weights and reduces BF16 bit flips by a factor of 2.2 to 2.3. It requires only four forward-pass requests and zero LLM tokens, with the annealing recipe costing about $0.90 in GPU time. On Qwen3.5-2B, with layers and dose selected using only the base model, the same recipe increases greedy GSM8K accuracy from 21.6% to 69.4%. As a proof of concept, we execute an eight-variable repair subproblem using QAOA on an IBM Heron processor.",
      "upvotes": 62,
      "github_stars": 8,
      "github_repo": "https://github.com/TheQuantumGOAT/Tree-Ising",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.14210",
      "arxiv_url": "https://arxiv.org/abs/2611.14210",
      "title_ja": "Tree-Ising: ビットレベルのイジング編集による言語モデルの修復",
      "summary_ja": "モデルの重みを離散最適化問題として扱い、勾配なしでビットレベルの修正を行うことで、推論ループなどの不具合を直接修復する。"
    },
    {
      "id": "2611.12885",
      "title": "World In-Context Learning for Agentic Robot Manipulation",
      "abstract": "Trained action policies write manipulation skill into network weights, tying what is learned to the distribution it is learned from. In-context learning (ICL) avoids this coupling but has not matched trained policies, because a demonstration recorded in another scene carries no feedback from the world the robot currently faces. We observe that what an agent learns in context is semantic, recording task steps and object roles rather than visual appearance, so experience gathered in one world transfers to another. Based on this insight, we propose World In-Context Learning (WICL), a paradigm in which a frozen model starts from a demonstration, rehearses the task in a world such as a simulator, and writes the feedback into its context rather than its weights. We build RoboScript, a modular infrastructure that implements WICL for agentic manipulation. From a single demonstration, RoboScript learns each task through rehearsal in simulation, freezes the learned knowledge as a Task Memory, and deploys the frozen memory on new scenes with data isolation that ensures every deployment input is available on a real robot. On all 50 tasks of RoboTwin 2.0, RoboScript reaches 83.4% mean success across clean and randomized settings with one demonstration per task and no gradient updates, exceeding the strongest trained action policy by over 20 points. The method generalizes across visual distributions, improves through reflection, scales with the foundation model, and transfers to a physical dual-arm robot through cross-embodiment memory adaptation. With a world in the loop, a robot can learn a manipulation task in its context as well as it learns one in its weights. All code is available at https://github.com/ArcheOne-AI/RoboScript",
      "upvotes": 58,
      "github_stars": 116,
      "github_repo": "https://github.com/ArcheOne-AI/RoboScript",
      "project_page": "https://archeone-ai.github.io/RoboScript/",
      "comments": 3,
      "org": "ArcheOne-AI",
      "url": "https://huggingface.co/papers/2611.12885",
      "arxiv_url": "https://arxiv.org/abs/2611.12885",
      "title_ja": "ロボット操作エージェントのためのワールド・インコンテキスト学習",
      "summary_ja": "デモを基にシミュレータ等の別環境でタスクを予行演習させ、環境に依存しない意味的な知識を抽出して未知の環境に適用する。"
    },
    {
      "id": "2611.10771",
      "title": "WorldFoundry: Towards Unified Infrastructure for World Intelligence",
      "abstract": "Visual generative models increasingly blur the line between synthesizing observations and simulating environments. Yet visual plausibility alone does not constitute successful world modeling: compelling outputs may lack persistent state, physical dynamics, or causally consistent responses to interactions. We define a generative world model as a predictive dynamical system that maintains a persistent, history-conditioned representation of an environment, updates that representation in response to actions or interventions, and generates temporally coherent trajectories that reflect outcomes under observed and counterfactual interventions. From this definition, we derive an intelligence-oriented framework spanning perceptual grounding, persistent state modeling, controllable transformation, dynamics-aware prediction, and closed-loop interaction. We present WorldFoundry, open-source infrastructure for reproducible inference and evaluation across video, 3D and 4D, embodied action, and interactive world systems. WorldFoundry unifies model and benchmark discovery, runtime and asset preparation, execution orchestration, artifact management, and interactive visualization, while modality-specific adapters preserve native inputs, execution semantics, output representations, and evaluation protocols. Explicit manifests, durable artifact contracts, and evidence-aware scorecards separate execution readiness from evaluative claims, making each claim traceable to its supporting artifacts. The catalog contains 270 model entries, 74 benchmarks, and 62 registered metric entries, with readiness and execution evidence recorded separately. WorldFoundry enables reproducible comparison of persistent, controllable dynamics across heterogeneous systems, advancing the field from perceptual synthesis toward measurable world intelligence.",
      "upvotes": 58,
      "github_stars": 350,
      "github_repo": "https://github.com/OpenEnvision/WorldFoundry",
      "project_page": "https://openenvision.org/WorldFoundry/",
      "comments": 2,
      "org": "OpenEnvision",
      "url": "https://huggingface.co/papers/2611.10771",
      "arxiv_url": "https://arxiv.org/abs/2611.10771",
      "title_ja": "WorldFoundry: 世界知能のための統一インフラストラクチャに向けて",
      "summary_ja": "永続的な状態維持や因果的に一貫した応答、反実仮想的な介入への対応を備えた、真の「生成的世界モデル」の定義と基盤を提示。"
    },
    {
      "id": "2611.12762",
      "title": "Sage-Taiyi: A Metacognitive Architecture for Scientific Discovery",
      "abstract": "We introduce Sage-Taiyi, a metacognition-inspired architecture that uses accumulated scientific understanding to guide what to investigate next and how to investigate it. Through explicit monitoring and control, the system revises its understanding of evidence, assumptions, and unresolved questions, then uses these assessments to adapt research targets and select reusable reasoning methods. On Taiyi-Bench, an AI co-scientist ideation benchmark comprising 265 tasks from 50 papers across ten disciplines, Sage-Taiyi ranks first on all eight metrics of historical rediscovery and open-ended ideation, achieving an Overall score of 54.0 compared with 47.9 for the strongest baseline, AI Scientist-v2. It also performs well on two external scientific ideation benchmarks. Five expert-guided collaborations further connect its proposals to experimental and computational validation across chemistry, materials science, and engineering. In chemistry, reaction-condition optimization raises the yield of cobalt-catalyzed carbonylation from trace amounts to 84% and photocatalytic allylic amination from 13% to 69%. These results support metacognitive regulation as an approach to scientific ideation and its progression toward practical validation.",
      "upvotes": 56,
      "github_stars": 18,
      "github_repo": "https://github.com/Alpha-Innovator/Sage-Taiyi",
      "project_page": "https://alpha-innovator.github.io/Sage-Taiyi/",
      "comments": 2,
      "org": "Shanghai AI Laboratory",
      "url": "https://huggingface.co/papers/2611.12762",
      "arxiv_url": "https://arxiv.org/abs/2611.12762",
      "title_ja": "Sage-Taiyi: 科学的発見のためのメタ認知アーキテクチャ",
      "summary_ja": "メタ認知により自身の理解を監視・制御し、研究対象の選定や手法を動的に調整することで、科学的アイデア創出の精度を向上。"
    },
    {
      "id": "2611.09124",
      "title": "Toward the Era of Agentic Embodied Intelligence",
      "abstract": "Foundation models increasingly guide robot actions, yet sustained autonomy requires efficient control and failure recovery. We introduce A2-MEAS, an embodied multi-agent framework built around code as a scaling interface. Learned correction codes combine corrective language, spatial evidence, execution history, and action proposals. MetaBrain provides training supervision and runtime guidance. A correction encoder and adapter absorb this knowledge into policy weights during training, while fresh codes adapt behavior with frozen weights at deployment. The action model, A2-WLA, adds motion-aware history and a latent world model to a vision-language-action policy. Surprisingly, this simple design with action pretraining and task specialization reaches 0.5755 Q-score on the 50-task BEHAVIOR 2026 public subset before online correction, 2.21x the 2025 winner's reported 0.2605 across different benchmark editions and training configurations. On all 100 BEHAVIOR 2026 public tasks, A2-MEAS achieves 0.6411 Q-score and 45.40% task success. On RoboTwin 2.0, A2-WLA achieves 93.98% average success, rising to 95.05% with the complete system. Across 12 real-robot tasks in five household settings, A2-WLA achieves 57.92% average success versus 26.67% for pi0.5. In long-horizon pour-over coffee preparation, a history-conditioned adapter raises post-failure completion at two filter-handling steps from 14% to 94% and from 8% to 82%, compared with A2-WLA retries. Our training infrastructure delivers 427.1 samples per second, 4.03x the throughput of a pi0.5 reference implementation on matched hardware. We will release the system, models, training scripts, and infrastructure to support efficient embodied learning.",
      "upvotes": 53,
      "github_stars": 22,
      "github_repo": "https://github.com/AutoLab-SAI-SJTU/A2MEAS",
      "project_page": "https://a2-meas.github.io/",
      "comments": 3,
      "org": "AutoLab",
      "url": "https://huggingface.co/papers/2611.09124",
      "arxiv_url": "https://arxiv.org/abs/2611.09124",
      "title_ja": "エージェント型身体知能の時代に向けて",
      "summary_ja": "コードを媒介とした修正機能と、履歴や世界モデルを統合した政策モデルにより、身体的ロボットの持続的な自律性と回復力を実現。"
    },
    {
      "id": "2611.08175",
      "title": "PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?",
      "abstract": "Automating printed circuit board (PCB) routing requires coordinating board-level connectivity decisions with geometric execution under strict design rules. Although recent agents can interact with native routing tools, reliable routing on complex boards remains challenging. We present PCBRouteAgent, a multimodal PCB routing agent inspired by how human engineers coordinate global strategy with local execution. A Global Routing Planner combines board images and structured electrical and geometric information to specify connection topology, routing order, corridors, and layer transitions. A Detailed Routing Executor realizes these guides through KiCad's native routing engine and performs bounded local recovery. Unresolved failures are returned as structured feedback, enabling targeted guide revisions while preserving accepted routes. We evaluate PCBRouteAgent on 247 synthetic and real-world boards from four PCBWorld-Bench test splits. It achieves clean-pass rates of 100%, 94.9%, 100%, and 40% on D2, D3-A, D3-B, and D3-C, respectively. On the three real-world subsets, PCBRouteAgent outperforms the best evaluated baseline in clean-pass rate by 13.9, 36, and 10 percentage points, respectively.",
      "upvotes": 42,
      "github_stars": 57,
      "github_repo": "https://github.com/chip-ai-agent/PCBRouteAgent",
      "project_page": "https://chip-ai-agent.github.io/research/pcbrouteagent/",
      "comments": 8,
      "org": "",
      "url": "https://huggingface.co/papers/2611.08175",
      "arxiv_url": "https://arxiv.org/abs/2611.08175",
      "title_ja": "PCBRouteAgent: LLMエージェントはプリント基板設計エンジニアにどこまで近づけるか",
      "summary_ja": "グローバルな配線計画とローカルな幾何実行を連携させ、KiCad等のツールを用いて複雑なプリント基板の自動配線を可能にする。"
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
      "title_ja": "OneTrans-GSR: 再ランキングと混合ランキングを統合する生成的スレート順位付け",
      "summary_ja": "1つの自己回帰トランスフォーマーで多種多様なコンテンツの推薦リスト（スレート）を生成し、手動ルールの制約を排除する手法。"
    },
    {
      "id": "2611.12886",
      "title": "Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning",
      "abstract": "Agentic reinforcement learning (RL) and multi-teacher on-policy distillation (MOPD) offer complementary routes to post-training. For visual agents, however, tool use presents two related challenges. Models may overlook useful tool-returned observations, while poorly grounded actions can limit the evidence available for subsequent distillation. We introduce Reframe, a post-training framework that treats the observation state, rather than only the output distribution, as an object of alignment. First, Ground-Drop-GRPO (GD-GRPO) trains spatial and temporal specialists with evidence-aware rewards and stochastic removal of the original visual input, encouraging them to acquire grounded evidence and use the returned observations. Second, Observation-Gated-MOPD (OG-MOPD) replaces deficient tool actions with canonical ones mid-rollout and resumes distillation from the repaired observation. The two stages complement each other, as learning to rely on tool-returned observations can help the policy benefit from observation repair. Neither stage requires a task-specific SFT cold start. Extensive experiments over 14 image and video benchmarks demonstrate that Reframe outperforms both Mix-RL and vanilla MOPD. Ablation results show that GD-GRPO increases observation dependence and tool gain compared with outcome-based GRPO.",
      "upvotes": 40,
      "github_stars": 34,
      "github_repo": "https://github.com/EliYuan30/Reframe",
      "project_page": "",
      "comments": 3,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2611.12886",
      "arxiv_url": "https://arxiv.org/abs/2611.12886",
      "title_ja": "Reframe: 視覚推論エージェントのための観測整合型マルチティーチャー・オンポリシー蒸留",
      "summary_ja": "出力分布だけでなく「観測状態」そのものを位置合わせの対象とし、ツールからの情報や視覚的証拠を正しく捉える能力を強化する。"
    },
    {
      "id": "2610.40394",
      "title": "Scaling Mathematical Proof Supervision from Structured Textbooks",
      "abstract": "Mathematical supervision for language models is typically flattened into isolated problem-solution pairs, discarding the curricular organization and evidential structure of the original sources. We introduce TOME-Math (Textbook-Oriented Mathematical Evidence), a large-scale corpus that converts 2,118 textbooks spanning the core areas of university-level mathematics subjects into approximately 380K structured proof-supervision records while preserving chapter order, proposition-proof links, dependency references, and source provenance. Leveraging these structural signals, we explore curriculum learning across multiple mathematical subjects and characterize scaling patterns with supervision volume and source breadth. At full scale, fine-tuning on TOME-Math raises the unweighted mean score across our held-out evaluations and established public benchmarks by 16.7 percentage points over the base model, while exceeding all three public instruction-data baselines evaluated in aggregate. Our findings highlight structured textbooks as both a scalable source of mathematical supervision and an empirical framework for studying the impact of data organization on mathematical reasoning. We will release the corpus to facilitate further research on structured mathematical supervision.",
      "upvotes": 39,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tome-math.github.io/",
      "comments": 3,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.40394",
      "arxiv_url": "https://arxiv.org/abs/2610.40394",
      "title_ja": "構造化教科書からの数学的証明監督のスケーリング",
      "summary_ja": "教科書の章立てや定理の依存関係を保持した大規模データセット「TOME-Math」を構築し、構造化された数学学習を可能にする。"
    },
    {
      "id": "2611.13001",
      "title": "One Table, Many Queries: Benchmarking Generalist Tabular Models Across Generation, Imputation, and Prediction",
      "abstract": "Generation, imputation, and prediction query different aspects of the same tabular distribution, but are usually evaluated separately. This leaves unclear which capabilities they share, how their training objectives interact, and whether one model can perform all three well. We introduce the One Table Benchmark (), spanning 56 datasets, 46 registered methods, and 20 capability axes under aligned data splits and explicit task contracts. We compare task ranks on aligned support, train five backbones under all seven non-empty objective combinations on five datasets with three seeds, and contrast fixed-model profiles with specialist portfolios. Rank comparisons connect imputation and prediction through numerical recovery and dependence preservation, and link generation to both through predictive utility; distributional fidelity follows different, sometimes opposing, rankings. Objective interventions show the largest pooled gains from including the recipient's own objective. Generation has the broadest coverage of positive pooled auxiliary effects, while prediction shows potential to improve imputation and synthetic-data utility, with responses that vary across backbones. Cross-addition effects reveal that objective benefits need not add and depend on the objectives already present. Fixed-model comparisons expose corresponding utility--fidelity trade-offs: some generalists surpass specialist portfolios on utility, while fidelity continues to favor specialization. Frozen foundation models show strong prediction and numerical point imputation, together with promising synthetic-data utility, highlighting their potential across all three tasks. These findings motivate unified tabular models that share useful conditional information while improving categorical reconstruction and faithful joint sampling.",
      "upvotes": 39,
      "github_stars": 0,
      "github_repo": "https://github.com/limix-ldm-ai/OTBench",
      "project_page": "",
      "comments": 6,
      "org": "Stable AI",
      "url": "https://huggingface.co/papers/2611.13001",
      "arxiv_url": "https://arxiv.org/abs/2611.13001",
      "title_ja": "1つのテーブル、多数のクエリ：生成・補完・予測にわたる汎用表形式モデルのベンチマーク",
      "summary_ja": "表形式データの生成、欠損補完、予測を統合的に評価するベンチマークを導入し、学習目的間の相互作用やモデルの汎用性を解明。"
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
      "title_ja": "dNaViT: 汎用的な視覚表現としての離散コード",
      "summary_ja": "視覚情報を言語トークンのような離散的なプリミティブとして扱い、自然な解像度で視覚と学習言語モデルを統合する枠組みを提案。"
    },
    {
      "id": "2611.11995",
      "title": "Infrathon: Benchmarking Language Agents for Real-World, Long-Horizon AI Infra Optimization",
      "abstract": "In this work, we study whether frontier agent can continually improve real-world AI infrastructure over long horizons. We introduce Infrathon, a benchmark of diverse, long-horizon AI infrastructure optimization tasks across different levels. We evaluate six models across 150 runs with 24-hour budgets, totaling over 10,000 GPU-hours. Our results show that model rankings vary with the evaluation horizon, while 135 of the 150 runs achieve further improvements during the second half of their budgets. These findings indicate that shorter evaluations can overlook both optimization gains and changes in relative model performance. We also find agents can discover solutions that outperform human-designed baselines: Claude Opus 5.5 increases the mean KV-cache compression ratio from 6.82% with the human-designed Quant-VideoGen codec to 19.86%. Analysis of agent trajectories identifies task violations, unreliable testing, and premature completion as barriers to sustained improvement. Together, Our Infrathon framework provide resources for constructing long-horizon tasks, evaluating frontier agents, and discovering good infrastructure solutions.",
      "upvotes": 35,
      "github_stars": 27,
      "github_repo": "https://github.com/InfrathonX/Infrathon",
      "project_page": "https://infrathonx.github.io/",
      "comments": 9,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2611.11995",
      "arxiv_url": "https://arxiv.org/abs/2611.11995",
      "title_ja": "Infrathon: 現実の長期AIインフラ最適化のための言語エージェント・ベンチマーク",
      "summary_ja": "実世界のAIインフラを長期間継続的に改善できるかを評価し、短期間の評価では見落とされがちな性能変化や最適化の成果を可視化。"
    },
    {
      "id": "2610.42148",
      "title": "Flide: Accelerating Decision Inference with Exact State Forking",
      "abstract": "Decision models such as Jev have emerged as a highly promising paradigm for LLM agent systems, providing lightweight and reliable categorical reasoning for rapid System One execution. However, existing generation-oriented inference engines fail to support these workloads effectively, suffering from severe prefix recomputation overheads or distorted output probabilities. To address this challenge, we propose Flide, an efficient and exact inference engine that decouples the logical tree structure of a decision request from its physical execution within a single flattened token stream. Through ForkAttention, Flide navigates request dependencies using GPU-resident indices across both standard attention and recurrent Gated DeltaNet layers, guaranteeing in exact arithmetic that every query branch evaluates identically to an isolated forward pass. By expressing branch topologies directly in GPU-resident metadata, Flide accommodates diverse request mixtures with a compact set of pre-recorded execution graphs while enabling expanding agent histories to resume from checkpoints saved in earlier passes. Extensive evaluations on public hybrid and decision models demonstrate that Flide answers queries up to 9.5 times faster than vLLM and SGLang while staying closest to a float32 reference in total variation distance. By unifying physical execution throughput with mathematical exactness, Flide establishes a principled foundation for scalable, latency-critical decision intelligence in agent systems.",
      "upvotes": 35,
      "github_stars": 471,
      "github_repo": "https://github.com/OmniJev/Flide",
      "project_page": "https://flide.org/",
      "comments": 6,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.42148",
      "arxiv_url": "https://arxiv.org/abs/2610.42148",
      "title_ja": "Flide: 正確な状態フォークによる意思決定推論の加速",
      "summary_ja": "決定要求の論理ツリー構造を物理実行から分離し、フォーク時のプレフィックス再計算を排除することで、高速かつ正確な推論を実現。"
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
      "title_ja": "LLMは自身の既知事項を知らない：金融バックテストのための時系列自己知識のベンチマーク",
      "summary_ja": "モデルがいつの時点の金融知識を持っているかを厳密に検証し、カットオフ日や学習データの汚染がバックテストに与える影響を評価。"
    },
    {
      "id": "2611.11558",
      "title": "InfraRSI: Harnessing Recursive Self-Improvement for Training Infrastructure",
      "abstract": "While Recursive Self-Improvement (RSI) accelerates isolated algorithm and kernel synthesis, distributed LLM training depends on tightly coupled launch settings, operator kernels, and communication schedules, where single edits often hit out-of-memory (OOM) boundaries, compiler conflicts, measurement jitter, or silent numerical drift. We present InfraRSI, the agentic harness that turns open-ended human commands into verified training optimizations via a five-stage workflow: init locks editable scope and a fixed task contract over workload, loss, and timing invariants to prevent reward hacking, doctor profiles baseline phases and calibrates cluster noise, run co-optimizes launch knobs and code patches before re-verifying top candidates against the baseline and logging findings to a cross-hardware experience bank, and report and apply audit source paths, track failed-trial costs, and commit promoted changes. Rather than stepping greedily from a single incumbent, InfraRSI initializes from diverse experience-seeded configurations and fits global execution-time and censored peak-memory models across all trials, including OOMs. Using these models, it prices per-setting memory costs, revises miscalibrated LLM priors from live runs, and pairs memory-hungry optimizations with memory savers and verified code patches. Across four single- and multi-node dense and Mixture-of-Experts (MoE) LLM workloads, InfraRSI achieves a speedup of up to 2.75times and lifts mean Model FLOPs Utilization (MFU) from 17.4% to 30.0%, outperforming existing tuners and coding agents while transferring experience across GPUs. As it improves training infrastructure efficiency, InfraRSI forms a two-level Recursive Self-Improvement loop---revising priors online within runs and distilling experience across clusters---to push foundation model scaling.",
      "upvotes": 32,
      "github_stars": 47,
      "github_repo": "https://github.com/TokenRhythm/InfraRSI",
      "project_page": "https://infrarsi.github.io/",
      "comments": 5,
      "org": "TokenRhythm",
      "url": "https://huggingface.co/papers/2611.11558",
      "arxiv_url": "https://arxiv.org/abs/2611.11558",
      "title_ja": "InfraRSI: 再帰的自己改善による訓練インフラの最適化",
      "summary_ja": "分散訓練の複雑な設定やカーネルをエージェントが自動で試行・検証し、人手を超える最適な訓練構成を自律的に発見する枠組み。"
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
      "title_ja": "ReproBridge: ML研究成果物に再現性を組み込む",
      "summary_ja": "散在する情報を統合して標準化された再現可能アーティファクトを構築するエージェントを提案し、ML実験の再現成功率を向上させる。"
    },
    {
      "id": "2611.13410",
      "title": "SteerDistill: Quantizing LLM Agents via Closed-Loop Teacher Steering",
      "abstract": "Low-bit quantization reduces the inference cost of LLM agents but can compromise task success. Examining failed rollouts, we find that quantized agents overlook task requirements or environmental conditions, producing environment transitions that diverge from successful full-precision references. Correcting these behavioral divergences remains difficult: offline data may miss the student's failure contexts, while its own rollouts may provide few correct responses in those contexts. We introduce SteerDistill, a quantization-aware distillation method in which a full-precision teacher guides the student to revise failed responses and iteratively refines its guidance using feedback from student execution. This closed-loop teacher steering produces locally verified behavioral corrections. We internalize these corrections by training the student without guidance to match the steered student's predictions at corrected turns and the full-precision teacher's at other turns, enabling unassisted inference. Across five agentic benchmarks and three models, SteerDistill exceeds the strongest quantized baseline by 1.67--2.18 points in average score under W4A16 and stays within one point of BF16. On τ^2-Bench, it outperforms QeRL by 1.84 percentage points in success rate using 67% fewer training GPU hours and produces shorter successful trajectories than the quantized baselines.",
      "upvotes": 31,
      "github_stars": 7,
      "github_repo": "https://github.com/air-embodied-brain/SteerDistill",
      "project_page": "https://air-embodied-brain.github.io/SteerDistill",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.13410",
      "arxiv_url": "https://arxiv.org/abs/2611.13410",
      "title_ja": "SteerDistill: クローズドループの教師制御によるLLMエージェントの量子化",
      "summary_ja": "高精度な教師モデルが学生の失敗をその場で誘導・修正し、フィードバックを与えることで、量子化による性能低下を抑える手法。"
    },
    {
      "id": "2611.06856",
      "title": "LongBanana: An Expert-Verified Benchmark for Long-Context Multi-Reference Image Synthesis",
      "abstract": "We introduce LongBanana, to our knowledge the first expert-designed and expert-verified benchmark for long-context multi-reference image synthesis in the age of agent-driven image generation. The task requires retrieving dispersed visual evidence, rejecting distractors, binding entities and relations, and composing one coherent final image from multiple references. LongBanana contains 90 carefully designed tasks organized by a 3-by-3 taxonomy; each task includes about 32 reference images, 20 constraints, and 50 evaluation items, yielding 4,670 expert-specified atomic evaluation items in total. Its graph-grounded evaluation design instantiates each task with reference images and an entity-relation graph, then converts node, edge, and whole-graph obligations into checklist items for Content Fidelity, Relational Binding, and Global Constraint Satisfaction. Reviewed expert labels include a 15% double-labeled subset with 89.4% exact agreement and 0.83 quadratic weighted kappa. We further introduce LongBanana-Gen, an agent-harness framework for long-horizon image generation; experiments show that minimal agent harnesses improve over direct generation, while a ReAct-Plan-Exec-Reflect (RPR) workflow yields harness-dependent gains by strengthening evidence grounding and repair. Together, LongBanana provides an auditable testbed for measuring dense visual evidence use and a shared target for developing stronger agent-driven image-generation systems. Code and data are available at the project page: https://long-banana.com/.",
      "upvotes": 31,
      "github_stars": 3,
      "github_repo": "https://github.com/KlingAIResearch/LongBanana",
      "project_page": "https://klingairesearch.github.io/LongBanana/",
      "comments": 3,
      "org": "Kolors Team, Kuaishou Technology",
      "url": "https://huggingface.co/papers/2611.06856",
      "arxiv_url": "https://arxiv.org/abs/2611.06856",
      "title_ja": "LongBanana: 長文コンテキスト・複数参照画像合成のための専門家検証済みベンチマーク",
      "summary_ja": "多数の参照画像や制約から1つの画像を生成するタスクにおいて、視覚的証拠の検索や関係性の構築能力を厳密に評価する。"
    },
    {
      "id": "2611.10649",
      "title": "MACaQ: Fast, Model Agnostic Calibrated Quantization for Low-Precision Weights and Activations",
      "abstract": "Weight-activation quantization can reduce the memory and compute cost of neural-network inference, but recent methods often require expensive optimization and architecture-specific propagation of basis transforms across layers. We introduce MACaQ, an MXFP4 W4A4 post-training quantization method that treats every linear layer independently. MACaQ applies a per-channel scale and a block-Hadamard transform online to each layer's activations, while absorbing the corresponding inverse transforms into its weights. Retaining these transforms online avoids cross-layer dependencies and enables a simple streaming implementation of the quantization process, in which only one layer must reside in memory at a time. To improve over round-to-nearest quantization, we introduce Flip-Refinement, a Hessian-aware coordinate-descent procedure that greedily moves individual FP4 codes to adjacent representable values. Despite executing the activation transforms at inference time, MACaQ adds only 2.3% end-to-end overhead over pure MXFP4 on Qwen3-32B in vLLM. MACaQ reaches lower perplexity than DuQuant++ and MR-GPTQ, and already matches their best perplexity on Llama-3-8B in 11 times less quantization time. We further apply MACaQ without architecture-specific modifications to an image diffusion model, illustrating the generality of its layer-local design and show quantization of a 122B parameter model in 64 minutes, using only 32.5GB GPU RAM.",
      "upvotes": 30,
      "github_stars": 203,
      "github_repo": "https://github.com/huawei-csl/MACaQ",
      "project_page": "https://huawei-csl.com/blog/macaq/",
      "comments": 2,
      "org": "HUAWEI Computing Systems Lab",
      "url": "https://huggingface.co/papers/2611.10649",
      "arxiv_url": "https://arxiv.org/abs/2611.10649",
      "title_ja": "MACaQ: 低精度な重みと活性化のためのモデル非依存な較正済み量子化",
      "summary_ja": "各層を独立に処理し、ストリーミング形式でオンライン変換を適用することで、低いメモリコストでW4A4量子化を実現する手法。"
    },
    {
      "id": "2610.39671",
      "title": "Incentivizing Self-Learning in Large Language Models via Reinforcement Learning",
      "abstract": "Large language models (LLMs) draw on parametric knowledge and retrieval-augmented generation (RAG) to solve knowledge-intensive tasks. Yet problem solving in unfamiliar domains calls for tightly coupled knowledge acquisition and reasoning, beyond factual retrieval and aggregation or learning solely from a preassembled context. We study self-learning -- autonomously retrieving, studying, and applying knowledge from long-form reference materials on the fly. To investigate this capability, we formulate a textbook-based mathematical problem-solving task. LLMs must navigate textbook exposition, learn and apply relevant principles, and construct proofs for exercises, with reference solutions withheld. We introduce a BookNavigator interface to support this human-inspired study process and incentivize self-learning through reinforcement learning (RL) with fine-grained rewards. Experiments show that our method improves performance across in-domain and out-of-domain textbooks and subjects, raising Intern-S2-Preview-35B's overall proof accuracy from 51.5% to 79.5% and outperforming RL-trained textbook-free and fixed-retrieval baselines. These gains extend to complex long-context benchmarks involving different task types, with improvements over the base model of 1.7 and 2.3 percentage points on BrowseComp-Plus and CL-bench, respectively. Together, these findings suggest that RL can foster a domain-agnostic self-learning strategy, highlighting the potential of self-learning from long-form corpora to strengthen broader problem-solving capabilities on complex, long-context tasks.",
      "upvotes": 28,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 8,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2610.39671",
      "arxiv_url": "https://arxiv.org/abs/2610.39671",
      "title_ja": "強化学習を通じたLLMの自己学習の動機付け",
      "summary_ja": "長文の教科書を参照して未知の知識を自律的に学習・適用し、難解な数学問題を解く能力を強化学習によって評価・強化する。"
    },
    {
      "id": "2611.09017",
      "title": "Frontier3DBench: Benchmarking Coding Agents for 3D Creation across Objects, Scenes, and Interactive Open Worlds",
      "abstract": "Coding agents combine visual understanding with program execution, offering a new route to automated 3D creation. By translating images and instructions into editable programs, they bring reconstruction, generation, and editing into a shared workflow. Yet existing benchmarks fragment evaluation across task scopes and protocols, leaving their capabilities across construction levels unclear. We propose Frontier3DBench, a unified benchmark of 145 tasks across 9 categories spanning object, scene, and interactive open-world creation, with joint evaluation of appearance, structure, and behavior. Experiments with 11 model-harness configurations reveal strengths that vary by level: GPT-6.1-sol leads the object and scene levels and achieves the highest overall score of 66.02/100, whereas GPT-6-astra leads interactive world construction. However, all configurations score lower on reference reconstruction than on text-driven generation in object and scene tasks. Producing plausible content thus remains easier than reproducing specified geometry, layouts, and visual details. Moreover, generated worlds average 83.08/100 on local mechanisms but only 20.82 on motion clearance and 30.26 on stateful workflows: individual mechanisms often function, whereas complete activities that require coordinated actions and persistent state remain difficult. These results identify reference fidelity and coordinated activity completion as central bottlenecks for coding agents in 3D creation.",
      "upvotes": 28,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lab.einsia.ai/frontier3dbench/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.09017",
      "arxiv_url": "https://arxiv.org/abs/2611.09017",
      "title_ja": "Frontier3DBench: 物体、シーン、対話型オープンワールドにわたる3D制作のためのコーディングエージェント・ベンチマーク",
      "summary_ja": "画像や指示をプログラムに変換するエージェントに対し、形状・構造・挙動の3軸で3D制作能力を包括的に評価する枠組み。"
    },
    {
      "id": "2611.12177",
      "title": "Embodied First Exam",
      "abstract": "Early successes on agentic robotics point to a potential paradigm shift toward using coding agents to control robots. Existing robotics benchmarks are built around visuomotor policy learning, leaving it open whether coding agents can reliably control diverse robots under physical-world constraints. We therefore introduce the Embodied First Exam, a unified, comprehensive, and agent-native evaluation framework where coding agents can choose their own control approach: direct control, code to control, or train a policy to control. We hope it serves as a first exam for coding agents before they enter the physical world, with 1,156 tasks in 35 suites on 47 robots, including 9 new suites that go beyond pick-and-place to spatial puzzles, dexterous manipulation, multi-robot interaction, dynamic whole-body control, and sim-to-sim engineering. Each task can be run in up to three evaluation settings. The Standard Setting mimics the real world: the agent receives only sensor observations and, by default, cannot reset the environment. Its Realtime variant keeps the environment running while the agent reasons. The Privileged Setting gives the agent access to the full simulator state and unlimited resets, allowing it to search for an oracle solution for training purposes. Success rates in this setting serve as an approximate upper bound. On the 456 core tasks, the strongest of eight agents, GPT-6 Astra in Codex, achieves a success rate of 34% in the Standard Setting, leaving much room for improvement. To see where agents fail, we label the stage at which failed attempts go wrong and compare failures across agents, settings, and stage categories.",
      "upvotes": 27,
      "github_stars": 266,
      "github_repo": "https://github.com/mll-lab-nu/embodied-first-exam",
      "project_page": "https://www.embodied-first-exam.ai/",
      "comments": 3,
      "org": "MLL Lab",
      "url": "https://huggingface.co/papers/2611.12177",
      "arxiv_url": "https://arxiv.org/abs/2611.12177",
      "title_ja": "Embodied First Exam: 多様なロボット制御のためのエージェント・ネイティブな評価フレームワーク",
      "summary_ja": "コーディングエージェントが、直接制御やコード生成、学習など自ら制御手法を選んで多種多様なロボットを動かせるかを試す総合試験。"
    },
    {
      "id": "2611.14309",
      "title": "MMDM: Measuring Massive Multitask Decision Making",
      "abstract": "System-1 Decision Models directly make structured probabilistic decisions over query-specified options given a state in a single forward pass, without autoregressively generating reasoning trajectories or textual responses. Recent evaluations cover diverse tasks but often rely on existing benchmarks, where prior exposure to test material can obscure generalization. Moreover, real-world decision making often involves long contexts, large option spaces, and complex logical dependencies, challenges that existing benchmarks do not adequately capture together. Thus, we introduce MMDM (Massive Multitask Decision Making), a benchmark of 5,448 high-quality questions across 16 task categories, combining newly constructed tasks with source-grounded recompositions and rewrites for single-select, multi-select, and soft-label decision making in fresh contexts. It covers realistic scenarios such as agent state tracking, tool and skill selection, preference judgments, and rubric scoring, with option spaces ranging from 2 to 1,024 and inputs extending to 64,817 tokens. With MMDM, we conduct a comprehensive quantitative evaluation of 28 decision models, showing that many perform well on common knowledge yet struggle with interdependent options, constrained decisions, and multi-select tasks. For example, Perplexity Decider-V1.2 reaches 78.75% Hard Single-select Accuracy on world knowledge, but only 53.95% on option logic and 47.95% on constraint planning, while the best Hard Multi-select Accuracy across all models is 36.81%. These results highlight joint reasoning, constraint-aware selection, and complete multi-select recovery as key priorities for decision model development, with MMDM providing a testbed for measuring this progress.",
      "upvotes": 27,
      "github_stars": 10,
      "github_repo": "https://github.com/mmdm-benchmark/mmdm",
      "project_page": "https://mmdm-benchmark.github.io/",
      "comments": 3,
      "org": "The Chinese University of Hong Kong",
      "url": "https://huggingface.co/papers/2611.14309",
      "arxiv_url": "https://arxiv.org/abs/2611.14309",
      "title_ja": "MMDM: 大規模マルチタスク意思決定の測定",
      "summary_ja": "推論過程を出力せず直接確率的な決定を下すモデルに対し、長文コンテキストや複雑な論理依存を含む16カテゴリの課題で評価を行う。"
    },
    {
      "id": "2611.07464",
      "title": "FINCOSMOS: An Open-World Evaluation Paradigm for Agents in Finance",
      "abstract": "Language agents increasingly work for users on the open Web, and finance is where trusting them is hardest. The data must come from the Web, the strategy lives in the user's head, and correctness depends on time, so an agent can fail silently: a strategy the user never asked for, unverified data, or a backtest that uses the future yields a report as convincing as a correct one. Existing benchmarks close the world somewhere, fixing the task, the data, or the timeline, and thereby remove these failures instead of measuring them. We introduce FINCOSMOS, an open-world evaluation paradigm for agents doing financial work. A simulated user holds a hidden strategy sampled from a compositional grammar and reveals it only when asked. The agent receives no data, so it must acquire data from the Web, build its own backtest under a data cutoff, and deliver verifiable results. Grading needs no reference answer. Programs verify point-in-time correctness and recompute every reported metric, the delivered strategy is checked against the hidden specification, and a run is accepted only when the user is satisfied and none of 15 veto checks fails. Across four coding agents and a model without tools in 150 sessions, no session is accepted: every session that the simulated user signed off fails a program check, and agents raise only 54--64\\% of the details they were not told. Human experts attribute 88.33\\% of failures to the agents. With FINCOSMOS feedback, an agent with persistent memory learned all ten tasks.",
      "upvotes": 25,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://huggingface.co/spaces/YupengCao/FinCosmos",
      "comments": 4,
      "org": "The Fin AI",
      "url": "https://huggingface.co/papers/2611.07464",
      "arxiv_url": "https://arxiv.org/abs/2611.07464",
      "title_ja": "FINCOSMOS: 金融エージェントのためのオープンワールド評価パラダイム",
      "summary_ja": "ウェブからのデータ取得やユーザーの隠れた戦略を扱うなど、現実的な制約下での金融タスクの遂行能力と信頼性を評価する。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Meetings Joins Google Meet Calls to Build Working Documents Live",
      "summary": "Anthropic puts Claude inside Google Meet calls as a visible participant that drafts docs, timelines, and action items while you talk.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-meetings-joins-google-meet-calls-to-build-working-documents",
      "published": "2026-11-13T05:16:20+09:00",
      "title_ja": "AnthropicがGoogle Meet向けClaude Meetingsを発表",
      "summary_ja": "ClaudeがGoogle Meetに参加し、会話しながらドキュメント作成やタスク管理を行う。"
    },
    {
      "lab": "OpenAI",
      "title": "How Amplitude ships product improvements in 1–2 days with OpenAI",
      "summary": "Built primarily on OpenAI models, Amplitude’s proactive product agent, Wave, identifies what to build, helps teams ship changes with coding agents, and measures the impact.",
      "url": "https://openai.com/business/customer-stories/amplitude",
      "published": "2026-11-13T05:00:00+09:00",
      "title_ja": "Amplitude、OpenAIを活用し1〜2日で製品改善を実現",
      "summary_ja": "OpenAIベースのエージェント「Wave」が、開発項目の特定から実装、効果測定までを支援。"
    },
    {
      "lab": "Hugging Face",
      "title": "LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite",
      "published": "2026-11-13T04:07:35+09:00",
      "title_ja": "Granite 4.1 3Bおよび8BにLLMネイティブなマークアップ言語LLMONを導入",
      "summary_ja": "IBMのGranite 4.1モデルにおいて、LLMネイティブなマークアップ言語LLMONが利用可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google Releases Gemini 4 Hydrogen to Run Agent Tasks 19% Faster",
      "summary": "Google rolls out Gemini 4 Hydrogen globally as its daily driver for agentic workflows, available free via auto model selection and across every product tier.",
      "url": "https://alphasignal.ai/news/google-releases-gemini-4-hydrogen-to-run-agent-tasks-19-faster",
      "published": "2026-11-13T03:03:39+09:00",
      "title_ja": "GoogleがGemini 4 Hydrogenをリリース、エージェントタスクが19%高速化",
      "summary_ja": "エージェント業務向けに最適化されたモデルをグローバル展開。無料版や各製品層で利用可能。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenのご紹介",
      "summary_ja": "Googleの最新モデル「Gemini 4 Hydrogen」を発表。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Lets Enterprises Self-Host the Claude Agent Control Plane",
      "summary": "Anthropic now lets enterprises run the full Managed Agents stack, including the orchestration brain, inside their own cloud or on-premise environment.",
      "url": "https://alphasignal.ai/news/anthropic-lets-enterprises-self-host-the-claude-agent-control-plane",
      "published": "2026-11-13T02:57:14+09:00",
      "title_ja": "Anthropic、企業向けにClaudeエージェント制御プレーンのセルフホストを提供",
      "summary_ja": "企業の自社クラウドやオンプレ環境で、マネージドエージェントの全スタックを実行可能に。"
    },
    {
      "lab": "AlphaSignal",
      "title": "AutoTrust's AutoTrust-JEV Turns AI Decisions Into a Single Token at 97% Accuracy",
      "summary": "AutoTrust's 27B decision model outputs calibrated option probabilities instead of free text, topping tool selection and intent classification benchmarks.",
      "url": "https://alphasignal.ai/news/autotrust-s-autotrust-jev-turns-ai-decisions-into-a-single-token-at-97-accuracy",
      "published": "2026-11-13T00:34:54+09:00",
      "title_ja": "AutoTrust-JEV、AIの意思決定を97%の精度で単一トークン化",
      "summary_ja": "27Bの意思決定モデルが、ツール選択や意図分類において調整済みの確率値を出力する。"
    },
    {
      "lab": "OpenAI",
      "title": "Gondola doubles revenue as its team builds more with Codex",
      "summary": "Gondola helps creatives get credit and get hired, with Codex raising its lead engineer’s output by 50% and ChatGPT simplifying daily work.",
      "url": "https://openai.com/business/customer-stories/gondola",
      "published": "2026-11-12T21:00:00+09:00",
      "title_ja": "Gondola、Codexの活用により開発効率を高め収益を倍増",
      "summary_ja": "Codexの導入でリードエンジニアの生産性が50%向上し、ChatGPTで日常業務を簡素化。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Files for IPO Targeting $1 Trillion With Claude's $80B Run Rate",
      "summary": "The Claude maker is going public at up to a $1.4 trillion valuation, offering 825 million shares and up to $64.4 billion in proceeds.",
      "url": "https://alphasignal.ai/news/anthropic-files-for-ipo-targeting-1-trillion-with-claude-s-80b-run-rate",
      "published": "2026-11-12T20:30:46+09:00",
      "title_ja": "Anthropicが1兆ドルの評価額を目指しIPOを申請",
      "summary_ja": "Claudeの収益ランレート800億ドルを背景に上場し、最大644億ドルの資金調達を計画。"
    },
    {
      "lab": "OpenAI",
      "title": "Holiday Extras is rethinking what it can build with Codex",
      "summary": "With Codex, Holiday Extras is turning customer expertise into better apps, higher booking conversion and new possibilities for growth.",
      "url": "https://openai.com/business/customer-stories/holidays-extras-codex",
      "published": "2026-11-12T18:30:00+09:00",
      "title_ja": "Holiday Extras、Codexで構築の可能性を再考",
      "summary_ja": "Codexを活用し、顧客の専門知識をアプリ改善や予約転換率の向上、成長に繋げている。"
    },
    {
      "lab": "AlphaSignal",
      "title": "STDec Makes Diffusion LLMs 14x Faster Without Touching Model Weights",
      "summary": "A training-free decoder exploits spatial and temporal stability in diffusion language models to deliver up to 14x throughput gains without hurting accuracy.",
      "url": "https://alphasignal.ai/news/stdec-makes-diffusion-llms-14x-faster-without-touching-model-weights",
      "published": "2026-11-12T15:01:04+09:00",
      "title_ja": "STDec、モデルの重み変更なしで拡散LLMを14倍高速化",
      "summary_ja": "空間・時間的安定性を活用するデコーダーにより、精度を維持したままスループットを向上。"
    },
    {
      "lab": "OpenAI",
      "title": "Supporting research on AI and children’s safety",
      "summary": "OpenAI commits $2 million to research on AI and children’s safety. The work supports shared tools to measure risks and opportunities for young people.",
      "url": "https://openai.com/index/children-first-declaration",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "AIと子供の安全に関する研究への支援",
      "summary_ja": "OpenAIが200万ドルを投じ、若年層へのリスクと機会を測定する共通ツールの研究を支援。"
    },
    {
      "lab": "OpenAI",
      "title": "Gilbert + Tobin rethinks the business of law with AI",
      "summary": "A conversation with Sam Nickless, Partner and Chief Executive Officer at Gilbert + Tobin.",
      "url": "https://openai.com/index/gilbert-tobin-sam-nickless",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "Gilbert + Tobin、AIによる法律ビジネスの再編",
      "summary_ja": "法律事務所Gilbert + TobinのCEOが、AI活用によるビジネスの変化について語る。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルアライメントの理論的限界",
      "summary_ja": "KL正則化を用いたアライメントにおける、報酬向上と能力維持の情報の理論的限界を導出。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Definitive Fine-Tuning Guide for 3D Generation Models",
      "summary": "",
      "url": "https://huggingface.co/blog/3d-lora-finetuning",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "3D生成モデルの決定版ファインチューニングガイド",
      "summary_ja": "3D生成AIモデルを微調整するための決定版ガイドラインを紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブルを用いたCKMリスク評価と個別コーチングの提供",
      "summary_ja": "健康・バイオサイエンス分野で、ウェアラブル機器による心臓・腎臓・代謝リスクの分析を実施。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：細胞によるDNA解読の仕組みを解明し病気を理解する",
      "summary_ja": "DNA配列とその変異が、特定のヒト細胞タイプや疾患にどのような影響を与えるかを予測。"
    },
    {
      "lab": "OpenAI",
      "title": "ChatGPT Plus for veterans and servicemembers",
      "summary": "More than 20,000 veterans and transitioning service members have claimed a free year of ChatGPT Plus. See how they use it to prepare for civilian careers.",
      "url": "https://openai.com/index/chatgpt-plus-for-veterans",
      "published": "2026-11-11T17:00:00+09:00",
      "title_ja": "退役軍人と現役軍人向けのChatGPT Plus提供",
      "summary_ja": "2万人以上の軍関係者に1年間の無料プランを提供し、民間キャリアへの移行準備を支援。"
    },
    {
      "lab": "Hugging Face",
      "title": "BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model",
      "summary": "",
      "url": "https://huggingface.co/blog/qvac/botpsy",
      "published": "2026-11-11T14:01:16+09:00",
      "title_ja": "BotPsy：10億パラメータ未満の言語モデルによるオンデバイス・アシスタント",
      "summary_ja": "デバイス上で動作する小型のエージェント型言語モデルによるパーソナルアシスタント。"
    },
    {
      "lab": "Hugging Face",
      "title": "Token Pooling-Aware Training for Multi-Vector Embedding Models",
      "summary": "",
      "url": "https://huggingface.co/blog/token-pooling",
      "published": "2026-11-11T09:00:00+09:00",
      "title_ja": "マルチベクトル埋め込みモデルのためのトークンプール認識トレーニング",
      "summary_ja": "マルチベクトル埋め込みモデルの精度を高めるための、トークンプールを考慮した学習手法。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonが提供開始",
      "summary_ja": "Googleの最新AIモデル「Gemini 4 Carbon」が利用可能になった。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの導入：複雑なソフトウェアの深層検証における突破口",
      "summary_ja": "AlphaProof CodeエージェントがSignalの暗号化検証のために300万行の証明を記述。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者の評価：パーソナライズされた文章スタイル評価におけるLLM Judgeの調査",
      "summary_ja": "LLMによる評価者が、特定の書き手スタイルへの適合性をどの程度正確に判定できるかを検証。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲート機構の重要性：状態空間モデルにおける記憶 vs 文脈内学習",
      "summary_ja": "SSMがTransformersに劣る文脈内学習能力について、ゲート機構の役割からその原因を究明。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的な長文検索のためのWeighted State Souping",
      "summary_ja": "ドキュメント群を低コストで文脈化する手法を改良し、長文や密集データでの劣化を抑制。"
    },
    {
      "lab": "Hugging Face",
      "title": "Pay for Hugging Face Hub with your Google Cloud Account",
      "summary": "",
      "url": "https://huggingface.co/blog/hub-gcp-marketplace",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "Google CloudアカウントでのHugging Face Hub支払いが可能に",
      "summary_ja": "Hugging Face Hubの利用料をGoogle Cloudの請求に統合して支払えるようになった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Decision Models in Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/decision",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "Hugging Faceにおける意思決定モデル",
      "summary_ja": "Hugging Faceプラットフォームで利用可能な意思決定モデル（Decision Models）の紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorerによる世界中の言語の探索",
      "summary_ja": "自然言語処理技術を用いて、世界の多様な言語を探索・分析する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini Robotics 2.5 accelerates real-world general dexterity",
      "summary": "Our most capable vision-language-action model enhances robot dexterity, reliability, and safety",
      "url": "https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/",
      "published": "2026-11-10T04:51:47+09:00",
      "title_ja": "Gemini Robotics 2.5が実世界での汎用的な器用さを加速",
      "summary_ja": "最新のVLAモデルにより、ロボットの器用さ、信頼性、安全性が向上。"
    },
    {
      "lab": "Berkeley BAIR",
      "title": "BAIR at CoRL 2026",
      "summary": "The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. BAIR faculty, postdocs and students will be presenting research at various sessions, including an Early Career Keynote from Professor Negar Mehr. See below for the full schedule of sessions with BAIR members, including papers co-authored with collaborators at other universities and companies. November 9–12, 2026 Austin, Texas All times CST · UTC−6 33 Main-conference papers 4 Late-breaking results (LBR) posters 10 Orals & spotlights 3 orals · 7 spotlights 4 Days of research November 9–12 Mon Nov 9 Tue Nov",
      "url": "http://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/",
      "published": "2026-11-09T18:00:00+09:00",
      "title_ja": "CoRL 2026におけるBAIRの発表内容",
      "summary_ja": "ロボット学習会議にて、33件の主論文を含むBAIRの最新研究成果を多数発表。"
    }
  ]
};
