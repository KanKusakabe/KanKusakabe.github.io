window.papersData = {
  "updated_at": "2026-10-08 10:37 JST",
  "arxiv": [
    {
      "id": "2610.07324",
      "title": "Scale-Invariant Training for Time Series Foundation Models",
      "url": "https://arxiv.org/abs/2610.07324",
      "pdf": "https://arxiv.org/pdf/2610.07324",
      "authors": [
        "Ignacy Stepka",
        "Willa Potosnak",
        "Kin G. Olivares",
        "Artur Dubrawski"
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
        "new",
        "sota"
      ],
      "star_quote": "ScaleIn lowers MASE in all 24 architecture-benchmark comparisons",
      "signals": [],
      "headline": "時系列基盤モデルの学習におけるスケーリング由来のバイアスを解消するScaleIn",
      "what": "時系列データの値の大きさが損失関数の勾配に与える影響を理論的に解明し、スケーリング後のターゲットで損失を計算する手法を提案しています。既存のReVINなどの手法（ScaleCon）では、データのスケールが暗黙的に重みとして働き、学習が不安定になることを指摘しています。",
      "enables": "既存のTSFMアーキテクチャにおいてMASEを平均18.8%から21.9%改善し、監視付き予測においても20設定中16設定で精度が向上しました。1行のコード変更で既存のパイプラインに導入可能です。",
      "why_it_matters": "モデルやドメインを問わず、時系列データのスケール不変性を数学的に保証し、モデル学習を安定化させる標準的な手法としての普及が期待されます。",
      "tags": [
        "時系列予測",
        "基盤モデル",
        "正規化"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07609",
      "title": "PhysLDM: Latent Diffusion for High-Fidelity Deformable Simulation",
      "url": "https://arxiv.org/abs/2610.07609",
      "pdf": "https://arxiv.org/pdf/2610.07609",
      "authors": [
        "Yu Zhang",
        "Xudong Xu",
        "Xingang Pan"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
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
      "star_quote": "PhysLDM is the first high-fidelity spatiotemporal autoencoder",
      "signals": [],
      "headline": "高解像度3Dメッシュの複雑な変形シミュレーションを実現する潜在拡散モデルPhysLDM",
      "what": "3Dメッシュの物理シミュレーションのための時空間VAEと潜在拡散モデル（LDM）を組み合わせたフレームワークです。決定論的な回帰ではなく拡散モデルを用いることで、カオス的な変形挙動の分布を物理的に妥当な形で生成します。",
      "enables": "最大78倍のトークン圧縮を実現しながら、2.48mm精度の再構成が可能になり、未知のデータセットに対してもゼロショットで一般化します。微分可能なため、逆問題の解決や設計最適化にも応用できます。",
      "why_it_matters": "計算コストの高い高解像度物理シミュレーションを潜在空間で効率化しつつ、回帰モデルが陥りやすい「非物理的な平均値」への収束を回避しています。",
      "tags": [
        "物理シミュレーション",
        "拡散モデル",
        "コンピュータグラフィックス"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.04457",
      "title": "RPFQ-ViT: Rotated Phase-Frame Quantization for Extremely Low-Bit Weights in Vision Transformers",
      "url": "https://arxiv.org/abs/2610.04457",
      "pdf": "https://arxiv.org/pdf/2610.04457",
      "authors": [
        "Mengyuan Fan",
        "Bokai Huang",
        "JiaMing Pan",
        "Xiaokun Yuan",
        "Peizhuang Cong",
        "Zhewen Tan"
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
        "new",
        "sota"
      ],
      "star_quote": "On ImageNet-1K, RPFQ-ViT-B/16 reaches 79.33% Top-1 / 94.48% Top-5 under W2/A4",
      "signals": [],
      "headline": "2ビット重みでも高精度を維持しiOS/Android上で高速動作するRPFQ-ViT",
      "what": "Vision Transformer（ViT）向けの極低ビット量子化手法で、チャネルをペアにして2次元平面（位相平面）上で量子化するRotated Phase-Frame Quantizationを提案しています。学習可能な回転と位相アンカーを用いることで、重みの方向情報を保持しつつ圧縮します。",
      "enables": "2ビット重みのRPFQ-ViT-B/16でImageNet-1KのTop-1精度79.33%を達成しました。実デバイス（iOS/Android）上での展開では、FP32モデルと比較してサイズを5.4〜7.1倍削減し、推論速度を1.4〜1.6倍高速化しています。",
      "why_it_matters": "計算資源の限られたモバイル端末において、ViTのような大規模モデルを高精度かつ効率的に動作させるための重要なブレークスルーです。",
      "tags": [
        "モデル量子化",
        "Vision Transformer",
        "エッジAI"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05939",
      "title": "Structural Foundations of Nonlinear Systems with Unknown Inputs: The UID-Induced Normal Form and Minimal-Sensing Structure-from-Motion",
      "url": "https://arxiv.org/abs/2610.05939",
      "pdf": "https://arxiv.org/pdf/2610.05939",
      "authors": [
        "Agostino Martinelli"
      ],
      "categories": [
        "math.OC",
        "cs.CV",
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
      "star_quote": "establishes the first general structural solution to the problem of state estimation",
      "signals": [],
      "headline": "未知の入力駆動下での非線形システムの状態推定を実現するUID誘導標準形",
      "what": "入力が不明な非線形システムにおいて、状態を推定するための構造的解法を提示しています。未知入力を、観測可能な動特性から分離された成分と、動特性に影響を与える成分に分解する「UID誘導標準形」という等価な表現形式を導出しました。",
      "enables": "3つの特徴点と1軸のジャイロスコープのみという最小構成のセンサ情報から、カメラの3次元的な動きと構造を推定（Structure-from-Motion）することを可能にし、実データでその有効性を検証しました。",
      "why_it_matters": "制御理論における長年の課題であった未知入力下の状態推定に対し、モデルや統計的仮定に依存しない普遍的な数学的枠組みを提供しています。",
      "tags": [
        "制御理論",
        "状態推定",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.02478",
      "title": "Tropical Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.02478",
      "pdf": "https://arxiv.org/pdf/2610.02478",
      "authors": [
        "Arip Asadulaev",
        "Aladin Djuhera",
        "Karim Salta",
        "Holger Boche",
        "Fakhri Karray",
        "Martin Takac"
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
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "we propose Tropical Reinforcement Learning, which rests on a simple change of algebra",
      "signals": [],
      "headline": "Tropical代数を用いた強化学習による言語モデルの推論能力向上",
      "what": "強化学習の期待リターン計算において、確率の和（期待値）をとる代わりに、トロピカル半環（Tropical semiring）に基づき最大値（max）をとる手法「Tropical Reinforcement Learning」です。これにより、複数の異なるロールアウトから得られた最適なサブステップ（PrefixとSuffix）を結合して学習に利用できます。",
      "enables": "SokobanやWebShopなどのエージェントタスクにおいて、強力なオンポリシーのベースラインを最大16ポイント上回る性能を達成しました。",
      "why_it_matters": "従来の和の定式化では学習済みの解を忘却するリスクがありましたが、最大値をとることでモデルが「どの解が有効だったか」を直接学習し、構成的な推論をより正確に扱えるようになります。",
      "tags": [
        "LLM",
        "強化学習",
        "推論"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03604",
      "title": "Mastering Atari 2600 Games with Discovered Options",
      "url": "https://arxiv.org/abs/2610.03604",
      "pdf": "https://arxiv.org/pdf/2610.03604",
      "authors": [
        "Erik M. Lintunen",
        "Marlos C. Machado"
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
        "new",
        "sota"
      ],
      "star_quote": "Wayfarer achieves state-of-the-art performance among single-stream agents",
      "signals": [],
      "headline": "ラプラシアン表現学習を用いたオプション発見による複雑なAtariゲームの攻略",
      "what": "高次元の観測からラプラシアン表現学習を通じて「オプション（時間的抽象化）」を自動発見し、制御に活用する深層強化学習エージェント「Wayfarer」です。汎用的かつ領域非依存な方法でオプションを発見し、探索とクレジット割り当てを加速します。",
      "enables": "Montezuma's Revengeなどの長期的な探索と戦略が必要なAtari 2600ゲームにおいて、シングルストリームのエージェントとして最高性能（SOTA）を達成しました。",
      "why_it_matters": "手動設計の表現に頼らず、高次元ドメインで有効なオプション発見を実現したことで、複雑な環境での強化学習の効率を大幅に改善しました。",
      "tags": [
        "強化学習",
        "Atari",
        "階層型強化学習"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.07290",
      "title": "A Single-Loop, Constant-Batch First-Order Penalty Method for Stochastic Bilevel Optimization",
      "url": "https://arxiv.org/abs/2610.07290",
      "pdf": "https://arxiv.org/pdf/2610.07290",
      "authors": [
        "Xingyu Chen",
        "Ming Yang",
        "Quanqi Hu",
        "Tianbao Yang"
      ],
      "categories": [
        "math.OC",
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
      "star_quote": "this is the first work to match the best-known convergence rate for fully first-order SBO methods using a single loop and a constant batch size.",
      "signals": [],
      "headline": "非凸な強凸2段階最適化問題をシングルループかつ定数バッチサイズで解くSICO法",
      "what": "2次微分を必要としない1次形式のペトリメソッドで、下位問題とペナルティ問題の更新を同期させる手法を提案しています。指数移動平均を用いて勾配推定値を安定化させることで、理論的な収束性を保証しています。",
      "enables": "定数バッチサイズでサンプル複雑度 $O(\\epsilon^{-6})$ または $O(\\epsilon^{-4})$ を達成し、大規模なバッチ処理や多重ループなしでの収束を可能にしました。既存手法の課題であった大きなペナルティ値による不安定さを克服しています。",
      "why_it_matters": "計算資源が限られた環境でも効率的に実行可能な、完全に1次のみの確率的2段階最適化手法を確立した理論的成果です。",
      "tags": [
        "最適化アルゴリズム",
        "機械学習理論",
        "2段階最適化"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.04093",
      "title": "Beyond Masked Sparsity: SNACK Enables Truly Sparse Neural Networks on GPU",
      "url": "https://arxiv.org/abs/2610.04093",
      "pdf": "https://arxiv.org/pdf/2610.04093",
      "authors": [
        "Jafar Badour",
        "Maurice van Keulen",
        "Elena Mocanu"
      ],
      "categories": [
        "cs.LG",
        "cs.DC"
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
      "star_quote": "We propose SNACK, a truly sparse GPU layer that stores and computes only non-zero connections.",
      "signals": [],
      "headline": "GPU上の疎行列演算を最適化しGPT-2のメモリ消費を40%削減するSNACKフレームワーク",
      "what": "疎なニューラルネットワークをGPU上で効率的に扱うためのSNACKフレームワークと、カスタムCOO形式のSpMM（Sparse Matrix-Matrix Multiplication）カーネルであるSNACK-COOを提案しています。既存のマスクを用いた疑似的な疎行列ではなく、非ゼロ要素のみを保存・計算する真の疎行列パラダイムをPyTorch APIを通じて提供します。",
      "enables": "90%のスパース性において、従来の密なレイヤーと比較して学習を3.7倍、推論を2倍に高速化し、メモリ使用量を72%削減します。GPT-2の学習ではピークメモリを最大40%削減し、99%のスパース性で推論レイテンシを4.8倍高速化しました。",
      "why_it_matters": "理論的な疎計算のメリットをGPUの実効速度に変換することに成功しており、巨大化するモデルの学習・推論コストをハードウェアレベルで抑制する実用的な手段となります。",
      "tags": [
        "GPU最適化",
        "疎ニューラルネットワーク",
        "効率的学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04351",
      "title": "LoCoSplat: Real-Time Feed-Forward 3D Gaussian Splatting with Minimal 3D Reasoning",
      "url": "https://arxiv.org/abs/2610.04351",
      "pdf": "https://arxiv.org/pdf/2610.04351",
      "authors": [
        "Sinan Wang",
        "Jinjin He",
        "Yuchen Sun",
        "Duowen Chen",
        "Shenyifan Lu",
        "Bo Zhu"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
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
      "star_quote": "On RealEstate10K, LoCoSplat outperforms every prior feed-forward method on PSNR, SSIM, and LPIPS at 6, 12, and 24 views",
      "signals": [],
      "headline": "3D推論を局所平均化で簡略化し推論速度を4.2倍に高めたLoCoSplat",
      "what": "3D Gaussian Splatting（3DGS）において、重い3Dネットワークを介さずに、点群の周囲から局所的な特徴をグリッドに集約（splat）して読み出すことでスケールや回転などを予測する手法です。全エンコーダを単一のfp16 CUDAグラフとして実行可能なほど軽量に設計されています。",
      "enables": "従来最高速の手法と比較して4.2倍高速、6.7倍少ないメモリで推論可能です。RealEstate10Kデータセットにおいて、VolSplatなどの既存手法をPSNR等の精度指標で上回りました。",
      "why_it_matters": "フィードフォワード型の3D生成において、複雑な3D推論を局所的な処理に置き換えることで、実時間かつ低リソースなシーン再構成を実現しています。",
      "tags": [
        "3D Gaussian Splatting",
        "リアルタイムレンダリング",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04572",
      "title": "Only Project Once: Projection-Adaptive Loss for Exact Constraint Satisfaction",
      "url": "https://arxiv.org/abs/2610.04572",
      "pdf": "https://arxiv.org/pdf/2610.04572",
      "authors": [
        "Tim Aebersold",
        "Soheyl Massoudi",
        "Mark Fuge"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CE"
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
      "star_quote": "contrary to common practice, a single detached projection step suffices in training. We accomplish this with a Projection-Adaptive Loss (PAL)",
      "signals": [],
      "headline": "単一の射影ステップのみで厳密な制約を満足させる学習手法PAL",
      "what": "物理制約などの厳密な条件を満たすニューラルネットワーク学習において、従来の多段階の反復計算（unroll）を必要とせず、単一の detached projection ステップと制約違反に基づく適応的な重み付け損失（PAL）を組み合わせる手法です。",
      "enables": "複雑な非線形制約においてもほぼ完璧な実行可能性を維持しつつ、従来手法のDC3と比較して学習を2.5倍高速化しました。また、制約評価にニューラルサロゲートが必要なメモリ消費の激しい設定でも学習可能です。",
      "why_it_matters": "計算コストを劇的に抑えながら物理的・数学的制約を厳密に守る必要があるエンジニアリング分野の深層学習応用を加速させます。",
      "tags": [
        "制約付き最適化",
        "物理情報深層学習",
        "学習アルゴリズム"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04781",
      "title": "Super-Resolution in The Right Latent Space: A Frozen Vision-Foundation Substrate",
      "url": "https://arxiv.org/abs/2610.04781",
      "pdf": "https://arxiv.org/pdf/2610.04781",
      "authors": [
        "Wanzhou Lei",
        "Cuifeng Sheng",
        "Yanjin He",
        "Maohua Li",
        "Hua Yuan",
        "Per-Olof Persson"
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
      "star_quote": "RAESR, attains the best fidelity--perception trade-off among state-of-the-art adversarial and diffusion-based restorers on RealSR, DRealSR, LSDIR and DIV2K-Val",
      "signals": [],
      "headline": "凍結されたDINOv3の潜在空間を利用し劣化画像を鮮明化するRAESR",
      "what": "リアル世界の超解像（SR）において、凍結されたDINOv3-Lの潜在空間を復元の土台として採用する手法です。この空間は、劣化画像と高品質画像が近くに配置される性質と、セマンティック情報を保持する階層構造を持っており、単一パスのデコーダで高品質な画像を生成します。",
      "enables": "RealSR等のベンチマークにおいて、既存の拡散モデルや敵対的生成ネットワークベースの手法を上回る忠実度と知覚品質のトレードオフを達成しました。H20 GPUで512x512の画像を37msで処理可能です。",
      "why_it_matters": "超解像をピクセル空間や単純なVAE空間ではなく、事前に学習された強力な視覚基盤モデルの潜在空間で解くことの有効性を示しています。",
      "tags": [
        "超解像",
        "基盤モデル",
        "画像処理"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05115",
      "title": "PCLM: Small-target localization with frozen CLIP via prototype contrast and local magnification",
      "url": "https://arxiv.org/abs/2610.05115",
      "pdf": "https://arxiv.org/pdf/2610.05115",
      "authors": [
        "Zhipeng Ye",
        "Feng Jiang",
        "Qiufeng Wang",
        "Hao Li"
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
      "star_quote": "PCLM achieves higher mean pixel AP than every evaluated text-conditioned localization baseline on each dataset under our evaluation protocol.",
      "signals": [],
      "headline": "凍結CLIPとプロトタイプ対比を用いて微小対象物を高精度に特定するPCLM",
      "what": "凍結されたCLIPエンコーダを利用した、サポート画像に基づく物体局在化手法です。サポート画像から抽出した前景・背景のプロトタイプ（特徴の代表）を対比させることで識別方向を定め、クエリ画像を拡大して走査する「局所拡大」を組み合わせて微小な物体を検出します。",
      "enables": "VOCやCOCO等の微小ターゲットを含むクエリにおいて、テキスト条件ベースの既存手法を5.63〜13.23ポイント上回る平均ピクセル精度（pixel AP）を達成しました。拡大処理を効率化しつつ精度を向上させています。",
      "why_it_matters": "画像内のごく一部しか占めない物体に対し、CLIPの強力な表現能力を活かしつつ、背景とのコントラストを明示的に扱うことで検出精度を高めています。",
      "tags": [
        "物体局在化",
        "CLIP",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05879",
      "title": "Learning to Learn a Language",
      "url": "https://arxiv.org/abs/2610.05879",
      "pdf": "https://arxiv.org/pdf/2610.05879",
      "authors": [
        "Lennart Carstens-Behrens",
        "Holger Fr\\\"ohlich"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 6 figures, 5 tables, Code: https://github.com/cbl/prior-fitted-language-model, weights: https://huggingface.co/lennartcb/pflm1",
      "hf_upvotes": 3,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "We present the Prior-Fitted Language Model (PFLM), a 300M-parameter byte-level transformer pretrained only on samples from a synthetic non-linguistic prior.",
      "signals": [],
      "headline": "自然言語を一切見ずに「言語を学習する方法」を習得した3億パラメータモデルPFLM",
      "what": "単一の自然言語も含まない、純粋に合成された構造化データのみで事前学習されたバイトレベルTransformerモデルです。回帰的な因果構造モデルから生成されたデータを学習することで、文脈の「言語規則」を推論して次の文字を予測する能力を鍛えています。",
      "enables": "Wikipediaのテキストに対して、100万バイトのコンテキストを与えると0.9〜2.4 bits per byteという高い圧縮率を達成しました。また、未学習のはずの数値計算やソースコードの圧縮においても既存ツールを凌駕する性能を示しました。",
      "why_it_matters": "「言語そのものを学ぶ」のではなく「言語の統計的構造を学ぶ方法」を学習するという新しい事前学習パラダイムを提示しています。",
      "tags": [
        "言語モデル",
        "事前学習",
        "メタ学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06540",
      "title": "WaveGSSM: Graph Wave State Space Models for Propagating Spatio-Temporal Patterns",
      "url": "https://arxiv.org/abs/2610.06540",
      "pdf": "https://arxiv.org/pdf/2610.06540",
      "authors": [
        "Junyou Zhu",
        "Fenying Cai",
        "Ping Xiong",
        "Christian Nauck",
        "Langzhou He",
        "Chao Gao"
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
        "sota"
      ],
      "star_quote": "reduces the geopotential RMSE by 20.2% on average for 1- to 5-day weather forecasts",
      "signals": [],
      "headline": "空間的なパターン伝播を2次状態空間モデルで表現するWaveGSSM",
      "what": "時空間グラフデータ（気象など）において、現在の状態だけでなく「変化率」を保持する2次グラフ状態空間モデルです。ノードごとに連動する2つの潜在状態を管理し、グラフ上の波動（Wave）のような伝播現象を直接モデル化します。",
      "enables": "4つのベンチマークと全球気象予測において最高性能を達成しました。特に1〜5日間の気象予測では、従来のモデルと比較してジオポテンシャル高度のRMSEを平均20.2%削減し、大規模な大気パターンをより正確に捉えました。",
      "why_it_matters": "単に時刻ごとのスナップショットを繋ぐのではなく、物理的な「動き」を状態空間に組み込むことで、複雑な時系列パターンの予測精度を向上させています。",
      "tags": [
        "状態空間モデル",
        "時空間予測",
        "気象予測"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06672",
      "title": "VideoTapestry: Query-Adaptive Memory Refinement for Multi-Agent Long-Video Understanding",
      "url": "https://arxiv.org/abs/2610.06672",
      "pdf": "https://arxiv.org/pdf/2610.06672",
      "authors": [
        "Yucheng Liu",
        "Yufei Yin",
        "Mingxiao Feng",
        "Jiajun Deng",
        "Wengang Zhou",
        "Houqiang Li"
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
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves absolute accuracy gains of 17.2%, 14.9%, 9.8%, and 7.0% on LVBench",
      "signals": [],
      "headline": "階層型メモリをクエリに応じて動的に洗練する長時間ビデオ理解フレームワークVideoTapestry",
      "what": "長時間のビデオ理解のための、トレーニング不要なマルチエージェントフレームワークです。ビデオを「全体物語」「イベント」「詳細な関係性」の3階層メモリとして構築し、クエリ（質問）に応じてそれぞれの階層を専門とするエージェントがメモリを詳細化・再構成します。",
      "enables": "LVBenchやLongVideoBench等のベンチマークにおいて、GPT-4o（GPT-5.5相当設定）を最大17.2%上回る精度を達成し、SOTAを記録しました。質問に関係する部分のみを階層的に掘り下げて推論に反映します。",
      "why_it_matters": "全ての情報を一律に処理するのではなく、クエリ駆動で必要な詳細度を選択的に取得することで、長尺動画の情報を効率的かつ正確に抽出できます。",
      "tags": [
        "ビデオ理解",
        "マルチエージェント",
        "長文コンテキスト"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06804",
      "title": "Sharpen Without Search: On-Policy Distillation of Sequence-Level Power Distribution",
      "url": "https://arxiv.org/abs/2610.06804",
      "pdf": "https://arxiv.org/pdf/2610.06804",
      "authors": [
        "Erfan Baghaei Potraghloo",
        "Seyedarmin Azizi",
        "Arya Fayyazi",
        "Saeid Shokoufa",
        "Mehdi Kamal",
        "Souvik Kundu"
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
      "hf_upvotes": 1,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Training raises single-generation accuracy by up to 23.0 points on MATH500",
      "signals": [],
      "headline": "探索を行わずに「もっともらしい回答」への集中を1回の推論で実現するOPPD",
      "what": "言語モデルが「正しいが確率が低い」回答を選んでしまうのを防ぐため、推論結果を尖らせる（sharpening）手法を学習に組み込む「オンポリシー累乗蒸留（OPPD）」を提案しています。逐次モンテカルロ法で生成された候補を教師モデルで重み付けし、その分布を生徒モデルに蒸留します。",
      "enables": "MATH500で23.0ポイント、GSM8Kで27.3ポイントの大幅な精度向上を達成しました。従来の「64個生成して選ぶ」手法を、単一の生成だけで上回る性能を引き出します。また、GRPOなどの強化学習手法とも補完的です。",
      "why_it_matters": "推論時の計算コスト（生成回数）を増やすことなく、モデル自身の持つ潜在的な推論能力を単一回答の精度として凝縮させる革新的なアプローチです。",
      "tags": [
        "LLM推論",
        "知識蒸留",
        "数学的推論"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05107",
      "title": "SearchJev: A Fast and Calibrated System-1 Model for Search Agents",
      "url": "https://arxiv.org/abs/2610.05107",
      "pdf": "https://arxiv.org/pdf/2610.05107",
      "authors": [
        "Congfeng Cao",
        "Lipeng Zuo",
        "Konstantinos Papakostas",
        "Qiwei Xu",
        "Songwei Xu",
        "Lun Zhou"
      ],
      "categories": [
        "cs.IR",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 14,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "a fast and calibrated System-1 model that separates search decisions from System-2",
      "signals": [],
      "headline": "エージェントの検索判断をSystem-1モデルで高速化・信頼化するSearchJev",
      "what": "検索エージェントが頻繁に行う「検索結果の関連性判断」や「情報の十分性確認」を、重い自己回帰生成ではなく直接スコアリングで行う高速なSystem-1モデルです。不確実な教師データから確率を学習し自信度を補正するSLCD法を導入しています。",
      "enables": "同サイズのQwen2.5（自己回帰）と比較して5.2〜5.3倍高速に判断を下し、キャリブレーション誤差を41〜74%削減しました。エージェント全体の検索時間を3.7〜4.7倍高速化し、正解率も45%から54%へ向上させています。",
      "why_it_matters": "思考（System-2）と直感的な判断（System-1）を分離することで、AIエージェントの動作を劇的に高速化し、かつ不確実性への信頼性を高める設計指針となります。",
      "tags": [
        "AIエージェント",
        "情報検索",
        "モデル高速化"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06348",
      "title": "IGA-KAN: Isogeometric Analysis with Physics-Informed Closed-Form Kolmogorov-Arnold Networks for Forward and Inverse PDEs",
      "url": "https://arxiv.org/abs/2610.06348",
      "pdf": "https://arxiv.org/pdf/2610.06348",
      "authors": [
        "Sima Naraghi",
        "Kourosh Parand",
        "Amirhossein Sadr",
        "Dara Rahmati"
      ],
      "categories": [
        "math.NA",
        "cs.LG",
        "cs.NA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "29 pages, 14 figures, 9 tables. Code and notebooks: https://github.com/Sima-Naraghi/iga-kan",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "uses local Kolmogorov-Arnold networks, fitted in closed form, to improve the IGA",
      "signals": [],
      "headline": "アイソジオメトリック解析とKANを融合し物理シミュレーションを格段に高精度化するIGA-KAN",
      "what": "正確な形状表現が可能なアイソジオメトリック解析（IGA）に、Kolmogorov-Arnold Network (KAN)を組み合わせたハイブリッド手法です。IGAで得られた解の残差を、閉形式の局所的なKANモデルで補正し、基底関数で滑らかに結合します。",
      "enables": "標準的なIGAと比較して、誤差をL2ノルムで4.2〜90倍、H1ノルムで4.1〜220倍削減しました。また、スクラッチから学習したKANと比較して最大6万倍も高い精度を達成し、逆問題においても非常に高い復元精度を示しました。",
      "why_it_matters": "深層学習と古典的な数値解析を「置き換え」ではなく「補完」の関係で統合し、学習の不安定さを排除したまま圧倒的な精度向上を実現しています。",
      "tags": [
        "数値解析",
        "Kolmogorov-Arnold Network",
        "科学計算"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.02593",
      "title": "Fisher-Guided Submodular Data Selection for Continual Pre-Training of Large Language Models",
      "url": "https://arxiv.org/abs/2610.02593",
      "pdf": "https://arxiv.org/pdf/2610.02593",
      "authors": [
        "Zhenghao Zhao",
        "Gaowen Liu",
        "Zhiling Lan",
        "Yan Yan"
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
        "sota"
      ],
      "star_quote": "1B selected tokens already outperform the replay strategy trained with 10B tokens",
      "signals": [],
      "headline": "Fisher情報量を用いたサブモジュラデータ選択による破滅的忘却の抑制",
      "what": "継続事前学習（Continual Pre-training）において、モデルパラメータの移動をFisher情報量で制御するデータ選択手法です。候補データの勾配を、既存の知識を保持する「アンカー成分」と、新しい知識を獲得する「フロンティア成分」に分解し、サブモジュラ最適化を用いて選択します。",
      "enables": "TinyLlama-1.1BやLlama-3.1-8Bでの実験において、リプレイ戦略と比較して10分の1のトークン数で、ターゲットドメインの品質向上と既存知識の保持を両立しました。",
      "why_it_matters": "損失ベースの選択が重要なパラメータ座標をドリフトさせる原因であることを特定し、パラメータ空間の動態を直接考慮した効率的な学習を可能にしました。",
      "tags": [
        "LLM",
        "継続学習",
        "データ選択"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03691",
      "title": "FlowHMR: Physically Plausible Motion Capture from Video",
      "url": "https://arxiv.org/abs/2610.03691",
      "pdf": "https://arxiv.org/pdf/2610.03691",
      "authors": [
        "Zhanke Wang",
        "Chengfeng Zhao",
        "Qing Shuai",
        "Jingzhong Lin",
        "Heng Li",
        "Zeyu Ling"
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
      "star_quote": "achieves a physical tracking success rate of 82.47%, compared with 62.82% for the strongest baseline, GVHMR.",
      "signals": [],
      "headline": "物理的整合性を備えた3D人間動作復元を実現するFlowHMR",
      "what": "単一のビデオから物理的に妥当な3D動作を復元するための「FlowHMR」です。Flow Matchingモデルで多様な動作候補を生成し、GRPO（Group Relative Policy Optimization）を用いてビデオへの忠実度と、物理コントローラーでの追従性の両方を報酬として事後学習を行います。",
      "enables": "物理的追従の成功率において、最強のベースライン（62.82%）を大きく上回る82.47%を達成し、ビデオへの忠実度も向上させました。",
      "why_it_matters": "従来の直接回帰モデルが陥りやすい平均化された解や物理的不整合を、強化学習的なアプローチによって解決し、高品質なモーションキャプチャを可能にしました。",
      "tags": [
        "コンピュータビジョン",
        "動作生成",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03716",
      "title": "MoSE3: Learning World-Space SE(3) at Every Pixel",
      "url": "https://arxiv.org/abs/2610.03716",
      "pdf": "https://arxiv.org/pdf/2610.03716",
      "authors": [
        "Jiahuan Cheng",
        "Zhiyi Li",
        "Tian Xia",
        "Ruojin Cai",
        "Yilun Du",
        "Qianqian Wang"
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
        "new"
      ],
      "star_quote": "the first feed-forward model that predicts dense SE(3) motion from monocular RGB video",
      "signals": [],
      "headline": "ピクセル単位の6自由度剛体運動を予測するMoSE3",
      "what": "単一のRGBビデオから、各ピクセルにおけるワールド空間での完全な6自由度（SE(3)）剛体変換を予測するフィードフォワードモデルです。ピクセル単位の3D点追跡と剛体埋め込みを学習し、それらを微分可能な変換フィッティングによって統合します。",
      "enables": "剛体および関節を持つオブジェクトのベンチマークにおいて、ピクセル・パーツ・オブジェクトレベルの全域で最高レベルの推定精度を達成しました。",
      "why_it_matters": "従来の3自由度の点追跡とは異なり、回転やグループ化を含む豊かなシーンの動きを捉えることができ、複雑な相互作用を伴う動的シーンの理解を深めます。",
      "tags": [
        "コンピュータビジョン",
        "動作推定",
        "SE(3)"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.08750",
      "title": "Neural Petri flows for chemical reactions",
      "url": "https://arxiv.org/abs/2610.08750",
      "pdf": "https://arxiv.org/pdf/2610.08750",
      "authors": [
        "Jose Eduardo Escrig Molina",
        "Daniel Probst"
      ],
      "categories": [
        "cs.LG",
        "physics.chem-ph",
        "q-bio.QM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "30 pages, 3 figures, 19 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "EC numbers of ECREACT are predicted at the third level for 90.2% of reactions, 5.6 points ahead of the best published method.",
      "signals": [],
      "headline": "ペトリネットの構造を制約として組み込み化学反応の物理法則を遵守するNeural Petri flows",
      "what": "化学反応を記述するペトリネットの動態を学習するアーキテクチャで、原子の原子価予算や非負性などの保存則をハードウェア的に制約として組み込んでいます。学習可能なのは反応速度（Rate law）のみであり、他のセマンティクスはパラメータなしのレイヤーとして固定されています。",
      "enables": "学習なしでもRXNMapperを超える88.8%の精度でアトムマッピングを行い、EC番号の予測では既存の最高精度を5.6ポイント上回りました。生成される全ての予測がフィルタなしで有効な分子構造となることが保証されます。",
      "why_it_matters": "ニューラルネットワークに物理的な整合性を強制することで、少量のデータでも高い汎化性能と信頼性を持つ化学AIが構築可能であることを示しています。",
      "tags": [
        "AI創薬",
        "ペトリネット",
        "物理制約学習"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.03562",
      "title": "A Secure dToF LiDAR SoC with Dual-Domain Fingerprinting and Event-Driven AFE Circuit Achieving Sensor-Level Attack Resilience",
      "url": "https://arxiv.org/abs/2610.03562",
      "pdf": "https://arxiv.org/pdf/2610.03562",
      "authors": [
        "Risa Nonaka",
        "Ryoya Matsuno",
        "Shota Nagai",
        "Satomi Miyagi",
        "Yuki Hayakawa",
        "Ryo Suzuki"
      ],
      "categories": [
        "cs.CR",
        "cs.AR"
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
      "star_quote": "presents the first dToF LiDAR system-on-chip (SoC) with integrated sensor-level hardware security",
      "signals": [],
      "headline": "スプーフィング攻撃耐性を備えた安全なdToF LiDAR SoC",
      "what": "ランダム化されたレーザーパルスの時間間隔と振幅比を認証に用いる「デュアルドメイン・フィンガープリント（DDF）」を統合したdToF LiDAR用SoCです。イベント駆動型のアナログフロントエンド（AFE）を採用し、必要なタイミングのみADCを動作させます。",
      "enables": "スプーフィング攻撃下で、従来手法では0%だったポイントクラウドの保護率を73%まで向上させ、AFE電力を60%削減しました。",
      "why_it_matters": "LiDARに対する物理的な偽装攻撃（歩行者の消去など）をセンサーチップレベルのハードウェアセキュリティで防ぐ、初の統合的な解決策を提示しました。",
      "tags": [
        "LiDAR",
        "ハードウェアセキュリティ",
        "自動運転"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.07659",
      "title": "DLoop: Looped Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.07659",
      "pdf": "https://arxiv.org/pdf/2610.07659",
      "authors": [
        "Geonmo Gu",
        "Byeongho Heo",
        "HeeJae Jun",
        "Yoohoon Kang",
        "Sangmin Lee",
        "Sangdoo Yun"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose DLoop, a looped form of speculative decoding",
      "signals": [],
      "headline": "ドラフト段階を適応的にループさせ検証回数を減らす投機的デコード手法DLoop",
      "what": "LLMの投機的デコードにおいて、ドラフトモデルが確信を持っている間は検証を挟まずにドラフト生成を継続する手法です。ループを意識した学習により、未検証の隠れ状態を参照してもドラフトの信頼性が維持されるように設計されています。",
      "enables": "EAGLE-3やDFlashなどの既存手法に対して、生成の正確性を保ったまま処理速度を5%から41%向上させました。ターゲットモデルによる検証回数を効果的に削減します。",
      "why_it_matters": "ターゲットモデルの計算負荷が支配的な投機的デコードにおいて、ドラフトモデルの柔軟な反復利用が推論加速の新たな鍵となることを示しています。",
      "tags": [
        "LLM",
        "推論加速",
        "投機的デコード"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.06963",
      "title": "WavePrune: One period is often enough for RoPE",
      "url": "https://arxiv.org/abs/2610.06963",
      "pdf": "https://arxiv.org/pdf/2610.06963",
      "authors": [
        "Guancheng Du",
        "Luotian Huang",
        "Shaowen Wang",
        "Si Li",
        "Kaifeng Lyu"
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
        "new"
      ],
      "star_quote": "Together, these results show that RoPE's periodic structure, widely regarded as essential, is largely redundant beyond the first rotation period.",
      "signals": [],
      "headline": "RoPEの周期性を排除しロングコンテキスト性能と速度を向上させるWavePrune",
      "what": "回転位置埋め込み（RoPE）において、各チャネルの回転を最初の1周期分のみに制限する手法です。特定の周期ごとに発生する位置エイリアシング（位置の混同）がアテンションマップに与える悪影響を取り除きます。",
      "enables": "Qwen3-8BなどでHELMETスコアを35.7から40.0に改善し、FlashAttention-2比でプリフィル時1.15倍、デコード時1.24倍の高速化を達成しました。追加のチューニングなしで既存モデルに適用可能です。",
      "why_it_matters": "RoPEの「周期性」が長距離依存性の学習において実は冗長であり、むしろノイズとなっていたことを明らかにした重要な発見です。",
      "tags": [
        "LLM",
        "長文コンテキスト",
        "RoPE"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.04281",
      "title": "OctMesh: A Unified Octree-Hierarchical Framework for Lossless Triangle Mesh Compression",
      "url": "https://arxiv.org/abs/2610.04281",
      "pdf": "https://arxiv.org/pdf/2610.04281",
      "authors": [
        "Shiyu Feng",
        "Xihua Sheng",
        "Lingyu Zhu",
        "Chunyang Fu",
        "Shiqi Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
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
      "star_quote": "We propose OctMesh, a learned framework that codes geometry and connectivity on a shared octree hierarchy.",
      "signals": [],
      "headline": "八分木構造を利用してジオメトリとトポロジーを統合圧縮する3Dメッシュ圧縮手法OctMesh",
      "what": "頂点位置と接続情報の両方を共通の八分木（Octree）階層上で符号化する、学習ベースの可逆3Dメッシュ圧縮フレームワークです。接続情報の変化パターンを4つのカテゴリに分類し、ニューラルネットワークを用いた予測器と算術符号を組み合わせて効率的に圧縮します。",
      "enables": "MPEG V-DMCのテストシーケンスにおいて、既存のV-Meshよりも12.8%低いビットレート（平均7.033 bits per face）で可逆圧縮を達成しました。また、9段階のプログレッシブな詳細化表示もサポートしています。",
      "why_it_matters": "点群だけでなくメッシュの接続構造までを階層的にモデル化することで、データサイズを抑えつつ精細な3D資産の配信や保存が可能になります。",
      "tags": [
        "3D圧縮",
        "八分木",
        "コンピュータグラフィックス"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04426",
      "title": "UnAct: Gradient-Free Unlearning via Targeted Activation Intervention",
      "url": "https://arxiv.org/abs/2610.04426",
      "pdf": "https://arxiv.org/pdf/2610.04426",
      "authors": [
        "Saeed Abdul Muizz",
        "Aayat Rafiq",
        "Iqra Altaf Gillani",
        "Janibul Bashir"
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
      "star_codes": [
        "cap"
      ],
      "star_quote": "UnAct, a gradient-free class-unlearning method that needs only forward passes over the forget images.",
      "signals": [],
      "headline": "勾配計算不要で少数のデータから特定クラスを忘却させる手法UnAct",
      "what": "学習済みモデルから特定データを消去するマシンアンラーニング（Machine Unlearning）において、忘却対象の画像に対する順伝播のみを利用する手法です。モデル後半のユニットの活性化応答に基づき、強い応答を示す接続を減衰させることで、再学習や勾配計算なしで忘却を実行します。",
      "enables": "CIFAR-10においてわずか5枚の忘却対象画像のみで、再学習に近い精度を維持しつつ忘却を達成しました。従来のSSD等の手法が少数のデータではモデルが崩壊するのに対し、高い保持精度（Retain Accuracy）を維持しています。",
      "why_it_matters": "プライバシー保護や不適切なデータの削除要求に対し、計算コストを抑えつつ極めて少ないデータから柔軟に対応できる実務的な解を提供します。",
      "tags": [
        "マシンアンラーニング",
        "勾配フリー",
        "プライバシー"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04963",
      "title": "MAGIC: Topology-Aware Analytic Graph Few-Shot Class-Incremental Learning",
      "url": "https://arxiv.org/abs/2610.04963",
      "pdf": "https://arxiv.org/pdf/2610.04963",
      "authors": [
        "Junlin Chen",
        "Yuhan Wang",
        "Xuefei Wang",
        "Xiao Wang",
        "Ruijie Wang",
        "Jianxin Li"
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
      "star_quote": "MAGIC improves Mean Accuracy and Final Accuracy by 5.48 percentage points and 9.33 percentage points on average",
      "signals": [],
      "headline": "トポロジーを考慮した解析的アプローチでグラフの少数事例増分学習を実現するMAGIC",
      "what": "新しいクラスのノードが少数のみ追加され続けるグラフ学習において、凍結された表現バックボーンと閉形式（解析的）な継続学習を組み合わせたフレームワークです。トポロジー的な事前知識の注入と、表現のドリフトを抑える蒸留アルゴリズムにより、過学習と忘却を抑制します。",
      "enables": "5-shotの設定において、既存の最高性能なベースラインと比較して平均精度を5.48ポイント向上させ、精度の低下（Performance Drop）を10.78ポイント改善しました。また、学習時間も大幅に短縮されています。",
      "why_it_matters": "データの追加が頻繁かつ少量である実世界のグラフデータにおいて、再学習のコストを抑えつつ継続的に精度を維持する手法として有用です。",
      "tags": [
        "グラフニューラルネットワーク",
        "継続学習",
        "少数事例学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05163",
      "title": "Blocking at the Boundary: Auditing Long-Horizon Agents against Staged Prompt Injection",
      "url": "https://arxiv.org/abs/2610.05163",
      "pdf": "https://arxiv.org/pdf/2610.05163",
      "authors": [
        "Jingkai Liu",
        "Yufei Han",
        "Xiaoting Lyu",
        "Wei Wang",
        "Ting Yu"
      ],
      "categories": [
        "cs.CR",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "29 pages, 10 figures, 20 tables. Code and data: https://anonymous.4open.science/r/audit-artifact-E593",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "The confirmed attacks span eight workflow scenarios, seven attack goals, and six injection surfaces, showing that production agents are vulnerable to context-aware, multi-step injection over long horizons.",
      "signals": [],
      "headline": "長期実行エージェントへのプロンプト注入攻撃を検知・遮断するPAA監査システム",
      "what": "外部ツールやコンテンツを扱うAIエージェントに対する「段階的プロンプト注入（Staged Prompt Injection）」を防御するための監査手法です。実行前の各アクションに対し、その根拠となる情報のソースを追跡し、攻撃者が到達可能なソースからの不当な指示がないかを検証するPath-Aligned Attribution (PAA)を提案しています。",
      "enables": "Claude 3.5 Sonnetをバックエンドとしたテストにおいて、誤検知率を6〜8%に抑えつつ、86%の攻撃を遮断することに成功しました。これは既存のARGUS等の手法（遮断率44〜47%）を大幅に上回る性能です。",
      "why_it_matters": "AIエージェントが自律的にツールを操作する際のリスクを低減し、実用的なセキュリティ境界（ガードレール）を構築するための重要な知見です。",
      "tags": [
        "AIセキュリティ",
        "LLMエージェント",
        "プロンプト注入"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05219",
      "title": "Safe Context Switching for Agents in the Wild: Mitigating Subspace Interference via Orthogonal Adaptation",
      "url": "https://arxiv.org/abs/2610.05219",
      "pdf": "https://arxiv.org/pdf/2610.05219",
      "authors": [
        "Akash Das",
        "Ishan Roy"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "ICLR (WS)"
      ],
      "award": false,
      "talk": false,
      "workshop": true,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "By explicitly estimating the null space of the alignment manifold and constraining reasoning updates to its orthogonal complement, AURA enables models to improve logical reasoning without compromising safety.",
      "signals": [],
      "headline": "論理的推論の学習による安全性の低下を幾何学的正則化で防ぐAURA",
      "what": "LLMにおいて、論理的推論（数学やコード生成）のファインチューニングを行うと、安全性のためのアライメントが損なわれる「Reasoning Drift」現象を幾何学的に分析しています。推論学習の更新を安全性の多様体の直交補空間に制限する正則化フレームワークAURAを提案しました。",
      "enables": "標準的な手法で推論学習を行った際の安全性の低下（約23.3%）を、AURAを用いることでほぼ回復させつつ、推論能力の向上を両立できることを実証しました。",
      "why_it_matters": "推論能力を高める学習と安全性を保つ学習が互いに干渉し合うという本質的な課題を、モデルの潜在空間の幾何学的な性質を利用して解決しています。",
      "tags": [
        "LLMアライメント",
        "AI安全性",
        "ファインチューニング"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04226",
      "title": "PaLoRA: Paced Low-Rank Adaptation for Continual Learning",
      "url": "https://arxiv.org/abs/2610.04226",
      "pdf": "https://arxiv.org/pdf/2610.04226",
      "authors": [
        "Yuxuan Li",
        "Fanhu Zeng",
        "Hao Tang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 5,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Under an anisotropic leakage model, we derive a pacing law $s^*=\\sqrt{R/c}$ that characterizes the optimal scaling of gradient steps",
      "signals": [],
      "headline": "タスクの蓄積に応じた適応的な更新制限で忘却を抑える継続学習手法PaLoRA",
      "what": "LoRAを用いた継続学習において、過去のタスク知識への「リーク（漏れ）」を数学的に分析し、タスクの蓄積（有効ランクの増大）に合わせて学習のペース（勾配更新の大きさ）を適応的に制限する「Paced Low-Rank Adaptation（PaLoRA）」を提案しています。",
      "enables": "50タスクに及ぶ長期的なImageNet-A/Rベンチマークにおいて、既存手法を4%上回る精度を達成しました。タスク数が増えるほど深刻化する「知識のリーク」を効果的に抑制します。",
      "why_it_matters": "継続学習における安定性と可塑性のトレードオフに対し、理論的な裏付けに基づいた適応的なスケーリング則を導入した点が画期的です。",
      "tags": [
        "継続学習",
        "LoRA",
        "転移学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04313",
      "title": "MOIRA: Mass-Oriented Indexing with Ragged Attention for Long-Context Decoding",
      "url": "https://arxiv.org/abs/2610.04313",
      "pdf": "https://arxiv.org/pdf/2610.04313",
      "authors": [
        "Dich Nhat Minh Nguyen",
        "Tran Dang Duong Nguyen"
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
      "star_quote": "A new kernel, self-planning attention, lets each thread block derive its own share of the work from the list lengths",
      "signals": [],
      "headline": "層やヘッドごとに必要なKVキャッシュを適応的に選択し高速化するMOIRA",
      "what": "LLMの長文コンテキスト推論において、アテンションの寄与度（mass）に応じて層やアテンションヘッドごとにKVキャッシュの読み込み量を動的に調整するスパースデコーディング手法です。各スレッドブロックが自律的に作業を計画し、CUDAグラフ内で完結する新しいカーネルを実装しています。",
      "enables": "H200上での128kコンテキスト推論において、従来の密なFlashAttention-3（FA3）と同等の精度を保ちつつ、推論速度（TPOT）を2.2〜2.5倍高速化し、高負荷時のスループットを51%向上させました。",
      "why_it_matters": "コンテキスト全体を読み込む必要がないという性質を、ソフトウェア・ハードウェアの両面から最適化し、長文推論の実用的なコスト削減に貢献します。",
      "tags": [
        "LLM高速化",
        "アテンション",
        "推論エンジン"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04875",
      "title": "SpecFold: Folding Multi-Branch Redundancy for Faster Speculative Decoding in Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.04875",
      "pdf": "https://arxiv.org/pdf/2610.04875",
      "authors": [
        "Chung-En Ho",
        "Weiyu Sun",
        "Cheng-Jhih Shih",
        "He Li",
        "Yong Liu",
        "Yingyan Celine Lin"
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
        "new"
      ],
      "star_quote": "We propose SpecFold, an algorithm-system co-design that exploits this multi-branch redundancy to reduce the cost of multi-branch speculative verification.",
      "signals": [],
      "headline": "複数のドラフトブランチ間の計算冗長性を排除し拡散言語モデルを高速化するSpecFold",
      "what": "拡散言語モデル（DLLM）の投機的デコーディングにおいて、複数のドラフトブランチが親ノードから多くのトークンを引き継ぐ点に着目し、共通部分の計算を「折り畳む（Folding）」手法です。残差接続のゲート制御と専用のTritonカーネルにより、冗長な計算をスキップします。",
      "enables": "既存の加速手法Spiffyと比較して最大1.64倍、通常のデコーディングと比較して最大1.99倍のスループットを達成しました。既存のキャッシュ手法とも直交し、併用が可能です。",
      "why_it_matters": "拡散モデルベースのテキスト生成において、モデルの重みを変更することなく、システム側の最適化によって実効速度を大幅に向上させることができます。",
      "tags": [
        "拡散モデル",
        "投機的デコーディング",
        "モデル高速化"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05431",
      "title": "PharmAgent: Constraint-Aware Search with Frozen Language Models for Molecular Optimization",
      "url": "https://arxiv.org/abs/2610.05431",
      "pdf": "https://arxiv.org/pdf/2610.05431",
      "authors": [
        "Nihui Shao",
        "Guanxing Chen",
        "Jilong Shi",
        "Zhengyang Bai",
        "Haohuai He",
        "Zhenchao Tang"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 15 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "it achieves a property-adjusted AUC of 0.7076, improving over the strongest online baseline, ExLLM, by 53.8%.",
      "signals": [],
      "headline": "凍結されたLLMと適応的な制約制御で分子構造を最適化するPharmAgent",
      "what": "創薬における分子最適化を、LLMをエージェントとして用いて解決する手法です。制約違反の履歴を「圧力」として蓄積するラグランジュ制御器と、過去の成功事例を再利用するリプレイ機構を組み合わせ、凍結されたLLMでも厳密な制約を満たした最適化を可能にします。",
      "enables": "ターゲット特性の最適化において、既存手法のMOLLEOを37.3%上回るAUCを達成し、制約を伴う設定でもExLLMを53.8%上回る最高性能を記録しました。",
      "why_it_matters": "化学的な知識を持つLLMに、数値的な制約制御の枠組みを組み合わせることで、専門性の高い創薬プロセスを自動化・効率化できることを示しています。",
      "tags": [
        "創薬",
        "LLMエージェント",
        "制約付き最適化"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.05538",
      "title": "LiFT: Loop Flow Transformers",
      "url": "https://arxiv.org/abs/2610.05538",
      "pdf": "https://arxiv.org/pdf/2610.05538",
      "authors": [
        "Mohammad Mahdi Derakhshani",
        "Pedro M. P. Curvo",
        "Gertjan J. Burghouts",
        "Jan-Willem van de Meent",
        "Cees G. M. Snoek"
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
      "hf_upvotes": 5,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Loop Flow Transformers (LiFT), a family of looped generative models that scales computation",
      "signals": [],
      "headline": "同一の層を繰り返し適用することでパラメータ数を抑えて高性能化するLiFT",
      "what": "共通のDiffusion Transformer (DiT) コアを再帰的に適用するループ型の生成モデルです。学習時に各ステップのターゲットを連続的な深さ座標でインデックス化することで、推論時には学習時よりも多くの回数ループを回して精度を高めることができます。",
      "enables": "ImageNet (256x256) において、従来のDiT-XL/2と比較してパラメータ数を60%、学習計算量を32%、推論計算量を52%削減しながら、FIDスコアを3.34ポイント改善しました。",
      "why_it_matters": "モデルを巨大化させるのではなく、同じ回路を繰り返すことで「計算量」を増やして性能を稼ぐという、リソース効率に優れた新しいアーキテクチャの方向性を示しています。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "モデル圧縮"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06331",
      "title": "DexForge: High-Fidelity Physics-Informed Dexterous Retargeting",
      "url": "https://arxiv.org/abs/2610.06331",
      "pdf": "https://arxiv.org/pdf/2610.06331",
      "authors": [
        "Meizhong Wang",
        "Kun Cao",
        "Ruiqi Ni",
        "Lihua Xie",
        "Yiguang Hong"
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
      "star_quote": "show success-rate gains of approximately 35-53 percentage points over the baseline",
      "signals": [],
      "headline": "物理ベースの微分可能シミュレータを用いて人間の動作をロボットに転写するDexForge",
      "what": "人間のビデオから抽出した手の動きや物体操作を、ロボットの軌道に高精度に変換するフレームワークです。球体ガウス関数を用いた衝突判定を含む微分可能シミュレータを構築し、接触と力の両面からロボットの動作を最適化します。",
      "enables": "7種類のロボットハンドを用いた実験において、既存のベースラインより成功率を35〜53ポイント向上させ、物体の位置・姿勢の追従誤差を大幅に削減しました。現実のロボットへの適用も実証されています。",
      "why_it_matters": "人間のデモンストレーションという豊富なデータソースを、物理的な制約を保ったままロボット学習に効率的に活用するための強力なツールとなります。",
      "tags": [
        "ロボット制御",
        "物理シミュレーション",
        "模倣学習"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.02660",
      "title": "SpectralCache: Accelerating Diffusion-Based World Models via Spectral Feature Caching",
      "url": "https://arxiv.org/abs/2610.02660",
      "pdf": "https://arxiv.org/pdf/2610.02660",
      "authors": [
        "Zhendong Mi",
        "Pu Zhao",
        "Ziyu Hu",
        "Xiaodong Yu",
        "Yanzhi Wang",
        "Grace Li Zhang"
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
      "star_quote": "SpectralCache achieves 5.22x acceleration while maintaining a WorldScore of 65.90",
      "signals": [],
      "headline": "スペクトル特徴量のキャッシュによる拡散世界モデルの推論高速化",
      "what": "拡散ベースの世界モデルにおいて、デノイジングステップ間で安定している特徴量の特異値部分空間を再利用するトレーニングフリーなフレームワーク「SpectralCache」です。特異値の進化パターンを線形補外で推定し、高コストなバックボーン評価をスキップします。",
      "enables": "HunyuanWorld-Voyager-13Bにおいて、生成品質を維持したまま5.22倍の推論高速化を実現しました。",
      "why_it_matters": "従来の特徴量やトークンレベルのキャッシュとは異なり、拡散モデルの特徴量が持つ数学的なスペクトル構造を活用することで、効率と品質を高いレベルで両立させています。",
      "tags": [
        "世界モデル",
        "拡散モデル",
        "高速化"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.02700",
      "title": "Learning from Evolving Errors: Adaptive Iterative Repair for On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.02700",
      "pdf": "https://arxiv.org/pdf/2610.02700",
      "authors": [
        "Rui Li",
        "Liyang He",
        "Zheng Zhang",
        "Zhenya Huang",
        "Linbo Zhu",
        "Qi Liu"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages, 3 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "improving over the strongest baseline by up to 3.6 points",
      "signals": [],
      "headline": "エラーに対する適応的・反復的修正を学習するオンポリシー蒸留",
      "what": "失敗した応答に対して、ガイダンス生成器が修正用のヒントを提供し、学生モデルが反復的に再試行するオンポリシー自己蒸留フレームワーク「AIR-OPD」です。結果の正誤だけでなく、エラーから修正へのプロセスを教師モデルが監視し、段階的に重み付けを行います。",
      "enables": "Qwen3-4B/8Bを用いた数学推論ベンチマークにおいて、最強のベースラインを最大3.6ポイント上回る精度向上を達成しました。",
      "why_it_matters": "正解へのショートカット（答えありきの学習）を防ぎ、モデルが自らの誤りを動的に修正する能力を直接強化できる点が特徴です。",
      "tags": [
        "LLM",
        "知識蒸留",
        "数学推論"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03388",
      "title": "KungfuAthleteBot: learning high-dynamic humanoid motion from video with unified robust recovery",
      "url": "https://arxiv.org/abs/2610.03388",
      "pdf": "https://arxiv.org/pdf/2610.03388",
      "authors": [
        "Zhongxiang Lei",
        "Lulu Cao",
        "Xuyang Wang",
        "Tianyi Qian",
        "Jinyan Liu",
        "Xuesong Li"
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
        "cap"
      ],
      "star_quote": "KAB learns dynamic skills from video and recovers from arbitrary falls in about 0.7 s",
      "signals": [],
      "headline": "ビデオから高ダイナミックな動作を学習し、高速な転倒復帰を実現する人型ロボット制御",
      "what": "物理的に不整合なビデオデータから人型ロボットの動作を学習するためのフレームワーク「KungfuAthleteBot (KAB)」です。物理ガイド付きの軌道修正や、実行可能な状態へのサンプリング（LKEサンプリング）、外部攪乱と転倒復帰を統合した直接訓練を含みます。",
      "enables": "実機の人型ロボットにおいて、任意の転倒から約0.7秒で復帰するという、単一ポリシーとしては最高速の復帰能力を実証しました。",
      "why_it_matters": "単にビデオデータを増やすのではなく、データの不整合を修復し、動作と復帰を統合的に学習させることで、現実的で俊敏なスキル獲得が可能であることを示しました。",
      "tags": [
        "ロボット",
        "強化学習",
        "人型ロボット"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03453",
      "title": "I2CD: Direct Image-to-Convex Decomposition for Simulation-Ready Collision Geometry",
      "url": "https://arxiv.org/abs/2610.03453",
      "pdf": "https://arxiv.org/pdf/2610.03453",
      "authors": [
        "Qian Wang",
        "Liam Merz Hoffmeister",
        "Brian Scassellati",
        "Daniel Rakita"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "I2CD attains the highest volumetric IoU among eight reconstruct-then-decompose",
      "signals": [],
      "headline": "画像からシミュレーション用凸形状を直接予測する高速な幾何生成手法",
      "what": "単一のRGB画像から、物理エンジンで直接利用可能な凸分解（Convex Decomposition）を生成する「I2CD」です。事前学習済みの拡散トランスフォーマーを凍結し、軽量なクロスアテンションヘッドのみを学習させることで、K個の凸多面体のパラメータを直接出力します。",
      "enables": "既存の再構成・分解パイプラインと比較して6〜37倍高速（約0.5秒）に、物理エンジンに即座にロードできるコンパクトな形状を生成します。",
      "why_it_matters": "視覚的メッシュを生成してから修正・分解する従来の手法の脆弱性を解消し、エージェントが視覚から即座に物理的な衝突判定モデルを得ることを可能にしました。",
      "tags": [
        "ロボット",
        "3Dビジョン",
        "物理シミュレーション"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.08448",
      "title": "Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability",
      "url": "https://arxiv.org/abs/2610.08448",
      "pdf": "https://arxiv.org/pdf/2610.08448",
      "authors": [
        "Bingxi Hou",
        "Guochao Jiang",
        "Guofeng Quan",
        "Weiqing Li",
        "Wenfeng Feng",
        "Guohua Liu"
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
      "hf_upvotes": 153,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲153"
      ],
      "headline": "異なるトークナイザ間の蒸留においてアラインメントの「網羅性」より「信頼性」を優先する手法",
      "what": "生徒と教師モデルのトークナイザが異なる場合のOn-Policy Distillation（OPD）における最適な教師信号を調査しています。語彙が厳密に一致する箇所のみに蒸留を制限する手法と、全範囲をカバーしようとする手法を比較分析しています。",
      "enables": "厳密に一致した位置でのトップ16語彙に制限した逆KLを用いることで、全語彙を用いた場合と同等の精度を保ちつつ既存のベースラインを上回りました。不正確なアラインメントによる負の影響を回避できます。",
      "why_it_matters": "知識蒸留において単に情報の網羅性を高めるのではなく、不確実な信号を排除する「 supervision reliability」の重要性を提唱しています。",
      "tags": [
        "LLM",
        "知識蒸留",
        "トークナイザ"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07767",
      "title": "TRACE: Rollout-Guided Quantization-Aware Training for FP4 Reinforcement Learning of MoE Language Models",
      "url": "https://arxiv.org/abs/2610.07767",
      "pdf": "https://arxiv.org/pdf/2610.07767",
      "authors": [
        "Xin Wang",
        "Hao Yu",
        "Zhengyang Zhuge",
        "Bochao Mao",
        "Zheng Li",
        "Junda Feng"
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
      "hf_upvotes": 74,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲74"
      ],
      "headline": "FP4量子化を用いたMoEモデルの強化学習を安定化・加速するTRACE",
      "what": "FP4精度での重み・活性化・KVキャッシュ量子化を用いた、Mixture-of-Experts (MoE) モデル向けの強化学習フレームワークです。ロールアウト時の量子化結果を学習時の丸め処理に反映させるRollout-guided QATを導入しています。",
      "enables": "BF16を用いたロールアウトと同等の性能を維持しつつ、最大5.4倍の高速化を達成しました。推論だけでなく学習過程全体でのメモリおよび計算コストを大幅に削減します。",
      "why_it_matters": "大規模言語モデルの事後学習（RLHF等）における計算資源の制約を緩和し、超低精度での実用的な学習パイプラインを提供します。",
      "tags": [
        "量子化",
        "強化学習",
        "MoE"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07753",
      "title": "From Evidence to Action: How Tool-Using Agents Fail",
      "url": "https://arxiv.org/abs/2610.07753",
      "pdf": "https://arxiv.org/pdf/2610.07753",
      "authors": [
        "Hongzhan Lin",
        "Shidong Cao",
        "Ziyang Luo",
        "Wenhao Chai",
        "Mong-Li Lee",
        "Wynne Hsu"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "36 pages. Project page: https://safeact.github.io",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "ツール利用エージェントが「証拠に基づいた行動」に失敗する要因を特定するSafeActBench",
      "what": "エージェントが行動を決定する前に必要な証拠を確立できているかを評価するベンチマークと、そのプロセスを追跡するEvidence Ledgerを提案しています。静的な判断から動的な複数ステップのワークフローまでを5段階で評価します。",
      "enables": "エージェントが「実行自体はできるが、必要な証拠が集まる前に動き出してしまう」といった失敗のパターンを詳細に特定できます。656個のケースを通じて10種類のモデル構成の脆弱性を明らかにしました。",
      "why_it_matters": "エージェントの評価において、最終的な結果だけでなく、意思決定プロセスの論理的整合性を検証することの重要性を強調しています。",
      "tags": [
        "AIエージェント",
        "信頼性評価",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.08144",
      "title": "Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs",
      "url": "https://arxiv.org/abs/2610.08144",
      "pdf": "https://arxiv.org/pdf/2610.08144",
      "authors": [
        "Alexander Bastounis",
        "Fabian Circelli",
        "Anders C. Hansen"
      ],
      "categories": [
        "math.AP",
        "cs.AI",
        "math.LO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 4 Figures",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HN 248pt"
      ],
      "headline": "AIによる形式手法変換（Lean）の検証が自然言語の証明の正しさを保証しない問題の指摘",
      "what": "OpenAIが発表したNavier-Stokes方程式に関する証明を例に、自然言語からLeanなどの形式言語への自動変換における意味的忠実性の欠如を分析しています。数学的記述の曖昧さ解消はHalting problem（停止問題）よりも計算困難であることを理論的に示しています。",
      "enables": "形式検証エンジンがパスしても、その基礎となる自然言語の論理構造と乖離している「誤翻訳」の具体例を多数提示しました。AIによる証明の正当性評価に警鐘を鳴らしています。",
      "why_it_matters": "形式手法による検証が数学的真理の最終回答と見なされがちな現状に対し、自動変換プロセスの限界とリスクを明確にしました。",
      "tags": [
        "数学的推論",
        "形式手法",
        "AI安全性"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07131",
      "title": "The Implicit Bias of Hyperbolic Representation Learning for Multiclass Data: A Busemann Risk Perspective",
      "url": "https://arxiv.org/abs/2610.07131",
      "pdf": "https://arxiv.org/pdf/2610.07131",
      "authors": [
        "Xingrun Li",
        "Sho Kuno",
        "Yusuke Mukuta",
        "Xin Yang",
        "Tatsuya Harada"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026 as a Spotlight",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "双曲空間における多クラス分類学習の暗黙的バイアスと境界収束性の解明",
      "what": "双曲空間を用いた表現学習において、リーマン勾配フローがどのように境界付近で挙動するかをBusemann関数を用いて理論解析しています。特に「境界飽和（Boundary saturation）」と「境界付近のクラスタリング」という現象を数学的に定式化しています。",
      "enables": "ドリフト係数の符号によって、埋め込みが理想境界に向かうか内部に留まるかの二分性が証明されました。これにより、ハイパーボリック学習における最適なプロトタイプ配置や学習の収束予測が可能になります。",
      "why_it_matters": "階層構造の表現に優れた双曲幾何学を用いたディープラーニングにおいて、学習ダイナミクスの理論的基盤を強化する成果です。",
      "tags": [
        "機械学習理論",
        "双曲幾何学",
        "表現学習"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07340",
      "title": "CausalBind: Causal Modeling and Learning for Protein-Molecule Virtual Screening",
      "url": "https://arxiv.org/abs/2610.07340",
      "pdf": "https://arxiv.org/pdf/2610.07340",
      "authors": [
        "Loka Li",
        "Jin Tian",
        "Kun Zhang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 (Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "タンパク質と分子の疎な相互作用パターンを因果モデルで抽出するCausalBind",
      "what": "バーチャルスクリーニングにおいて、全体的な構造ではなく特定の局所的・疎な相互作用（水素結合など）に着目した因果モデルです。Heckman型の選択モデルと構造的疎性制約を用いて、ノイズに強い潜在概念を特定します。",
      "enables": "DUD-EやLIT-PCBAベンチマークにおいて、既存の検索ベース手法を一貫して上回り、特に学習データとは異なる標的や骨格（OOD）に対する一般化性能が向上しました。",
      "why_it_matters": "ドラッグディスカバリーにおける表現学習を、単なる相関ではなく物理的根拠に近い因果関係として捉え直すアプローチを提案しています。",
      "tags": [
        "AI創薬",
        "因果推論",
        "表現学習"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07390",
      "title": "AeroBuoy: A Drone Deployable, 3D Printed, Autonomous Robotic Buoy for Environmental Inspection in Remote and Hazardous River Systems",
      "url": "https://arxiv.org/abs/2610.07390",
      "pdf": "https://arxiv.org/pdf/2610.07390",
      "authors": [
        "Reuben O'Brien",
        "Angus Lynch",
        "Minas Liarokapis"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [
        "IROS"
      ],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "7 pages. Accepted version. Published in the 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). Winner of the IROS 2025 Best Paper Award on Safety, Security, and Rescue Robotics in memory of Motohiro Kisoi. Reuben O'Brien and Angus Lynch contributed equally",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "ドローンで展開可能な3Dプリント製・自律型河川調査用ブイAeroBuoy",
      "what": "人が立ち入れない遠隔地や危険な河川にドローンで投下・回収できる自律型ロボットブイです。GPSと磁力計を使用して川の流れを利用しながら自律操舵し、水温や酸素濃度、水深などを計測します。",
      "enables": "建設現場の流出汚染や気候変動の影響を、従来は困難だったアクセス不能な地点から安全かつ低コストで収集可能にしました。自己復元機能を持ち、転倒しても継続稼働できます。",
      "why_it_matters": "3Dプリンティングと民生用コンポーネントを組み合わせることで、過酷な環境での環境モニタリングをスケールさせる実用的なハードウェア・エコシステムを提示しています。",
      "tags": [
        "ロボティクス",
        "環境モニタリング",
        "ドローン"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07398",
      "title": "An Autonomous, 3D Printed, Waterjet-Powered, Open-Source Robotic Trimaran for Environmental Inspection and Monitoring",
      "url": "https://arxiv.org/abs/2610.07398",
      "pdf": "https://arxiv.org/pdf/2610.07398",
      "authors": [
        "Reuben O'Brien",
        "Martin Lambrechtse-Reid",
        "Minas Liarokapis"
      ],
      "categories": [
        "cs.RO",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [
        "IROS"
      ],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "8 pages. Accepted version. Published in the 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). Finalist for the IROS 2024 Best Application Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "低コストで再現可能な水噴射推進式・自律型調査用ロボット三胴船",
      "what": "3Dプリンティングとオフザシェルフ部品を活用した、オープンソースの自律型三胴船（トリマラン）プラットフォームです。プロペラではなくウォータージェット推進を採用しており、岩の多い浅瀬や複雑な水域でも障害物を回避しながら動作します。",
      "enables": "600ドルから1,500ドルの低予算で、水深計測（バスメトリ）や水質テストが可能なロボットを構築できます。最大2m/sの速度で、重量5kg未満と取り回しにも優れています。",
      "why_it_matters": "高価な調査船を必要とせず、誰でも再現可能な形式で水環境調査の民主化を促進するオープンな設計を提供しています。",
      "tags": [
        "ロボティクス",
        "オープンソース",
        "水環境調査"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07766",
      "title": "OTel: Open Telco AI Datasets, Benchmarks, and Models",
      "url": "https://arxiv.org/abs/2610.07766",
      "pdf": "https://arxiv.org/pdf/2610.07766",
      "authors": [
        "Farbod Tavakkoli",
        "Gregory Diamos",
        "Kenneth Church",
        "David Kanter",
        "Mark Austin",
        "Imtiaz Karim"
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
      "comment": "Accepted to NeurIPS 2026, ED Track, Spotlight",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "通信業界向けAI開発を加速するオープンなデータセットとモデル群OTel",
      "what": "通信ドメインに特化した検索、再ランキング、インストラクションチューニング用のデータセットおよび、それらで学習済みの17個の言語モデルを含む30個のベースラインリソースです。学習レシピから評価用パーティションまで一貫して公開されています。",
      "enables": "通信特化の検索においてNDCG@10で93.1%、言語モデルの正解率で87.8%を達成しました。既に1600万回以上のダウンロードを記録しており、業界標準のベースラインとして機能しています。",
      "why_it_matters": "汎用モデルでは対応が難しい専門性の高い通信分野において、再現可能なデータとモデルを提供することで、特定の産業ドメインにおけるLLM活用を加速させます。",
      "tags": [
        "ドメイン特化LLM",
        "オープンデータセット",
        "通信技術"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07916",
      "title": "Can We Model the Artifacts Explicitly? Disentangle Artifacts via Pairwise Edit Relations for Image Manipulation Localization",
      "url": "https://arxiv.org/abs/2610.07916",
      "pdf": "https://arxiv.org/pdf/2610.07916",
      "authors": [
        "Xuekang Zhu",
        "Kaiwen Feng",
        "Ruifeng Wang",
        "Xiwen Wang",
        "Xiaochen Ma",
        "Bo Du"
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
      "comment": "NeurIPS 2026 (Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "画像編集の「痕跡」を明示的に抽出して改ざん箇所を特定するPALパラダイム",
      "what": "画像改ざん特定（IML）を潜在変数問題として再定義し、編集によって生じるアーティファクト（痕跡）を明示的に学習する二段階の学習手法です。ペア学習を通じて編集前後の関係から痕跡を分離・抽出します。",
      "enables": "多様な既存のIMLモデルに適用可能で、一貫した精度向上を達成しました。また、新たに4.5万件の編集グループデータセット「EditGroup-45K」を提供し、高精度な痕跡の識別を可能にしました。",
      "why_it_matters": "改ざんマスクを直接予測する従来の手法に対し、編集プロセスの本質である「痕跡」に着目することで、より根拠に基づいた高精度な検知を実現しています。",
      "tags": [
        "画像フォレンジック",
        "特徴量分離",
        "不正検知"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07204",
      "title": "SPEAR: Five Principles for Interactive Human-Agent Alignment",
      "url": "https://arxiv.org/abs/2610.07204",
      "pdf": "https://arxiv.org/pdf/2610.07204",
      "authors": [
        "Tao Long",
        "Lydia B. Chilton"
      ],
      "categories": [
        "cs.HC",
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "3 pages. Best Talk Award at the ACM Conference on Human-AI Complementarity and Alignment (HCOMP 2026)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "人間とエージェントの長期的な協調を実現する5つの柱「SPEAR」の提唱",
      "what": "AIアライメントを「学習・デプロイ」の固定的なプロセスではなく、運用中の「継続的なインタラクションデザイン」と捉え直すポジションペーパーです。Specification、Process、Evaluation、Adaptation、Recalibrationの5つの要素を軸としています。",
      "enables": "エージェントがいつ行動し、いつ人間に問いかけるべきか、またユーザーがどのようにエージェントへの信頼を調整すべきかといった、実運用上のフレームワークを提供します。",
      "why_it_matters": "静的なベンチマーク評価を超えて、社会的な文脈や長期的な利用シーンにおける人間とAIの望ましい共生関係を設計するための指針となります。",
      "tags": [
        "AIアライメント",
        "人間とAIの相互作用",
        "インタラクションデザイン"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.07761",
      "title": "Contrastive Learning for Aspect Representation towards Explainable Recommendation",
      "url": "https://arxiv.org/abs/2610.07761",
      "pdf": "https://arxiv.org/pdf/2610.07761",
      "authors": [
        "Emrul Hasan",
        "Chen Ding"
      ],
      "categories": [
        "cs.IR",
        "cs.AI"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "8 pages. Published in WI-IAT 2025. Best Student Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "レビューの観点を考慮した対照学習で推薦の精度と説明性を向上させるCLARER",
      "what": "ユーザーの評価値（レーティング）とテキストレビューから抽出した「アスペクト（観点）」情報を統合する推薦モデルです。Transformerエンコーダと対照学習を用いて、ユーザーが重視するアスペクトを効果的に表現学習に取り入れます。",
      "enables": "3つのベンチマークデータセットにおいて、推薦精度と説明文生成の両面で既存手法を上回る性能を達成しました。単なる推薦だけでなく、なぜその商品が選ばれたかの言語的説明を高品質に生成します。",
      "why_it_matters": "ユーザーの好みを単一の数値ベクトルではなく、多角的な観点として捉えることで、より納得感の高いパーソナライズ推薦が可能になります。",
      "tags": [
        "推薦システム",
        "説明可能なAI",
        "対照学習"
      ],
      "fetched_at": "2026-10-08T10:37:31.663524+09:00"
    },
    {
      "id": "2610.05608",
      "title": "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation",
      "url": "https://arxiv.org/abs/2610.05608",
      "pdf": "https://arxiv.org/pdf/2610.05608",
      "authors": [
        "Team Kandinsky",
        "Julia Agafonova",
        "Bulat Akhmatov",
        "Mikhail Aksyutin",
        "Grigorii Alekseenko",
        "Anastasia Aliaskina"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.LG",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical report on the open-source T2AV model. GitHub: https://github.com/kandinskylab/kandinsky-6",
      "hf_upvotes": 113,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲113"
      ],
      "headline": "映像と44kHz音声が同期した5秒間の動画を生成する基盤モデルKandinsky 6.0 Video",
      "what": "テキストや画像から音声付き動画を生成する拡散基盤モデルです。29BパラメータのProモデルと3BのLiteモデルがあり、映像ストリームと音声ストリームを双方向のクロスアテンションで結合するCrossDiTアーキテクチャにより、リップシンクを含む高度な同期を実現しています。",
      "enables": "フルHD解像度の5秒間の動画と高品質音声を生成可能です。人間による評価において、先行モデルのKandinsky 5.0を明確に上回り、既存の最先端モデルとも比肩する音声・映像品質を達成しました。",
      "why_it_matters": "映像と音声を別々に生成するのではなく、一つのモデル内で緊密に連携させることで、より自然で没入感のあるコンテンツ生成が可能になります。",
      "tags": [
        "動画生成",
        "マルチモーダル生成",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.04198",
      "title": "ALoDLM: Adaptively Looped Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.04198",
      "pdf": "https://arxiv.org/pdf/2610.04198",
      "authors": [
        "Liancheng Fang",
        "Zhuowei Li",
        "Youngeun Kim",
        "Tianchen Zhao",
        "Rajat Koner",
        "Jiaye Wu"
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
      "hf_upvotes": 55,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲55"
      ],
      "headline": "トークンごとの難易度に合わせて計算量を適応的に配分するALoDLM",
      "what": "拡散言語モデル（DLM）において、すべての位置に一律の計算を適用するのではなく、トークンの予測難易度に応じて再帰的な計算回数を変化させる手法です。準備ができたトークンは離散コンテキストとしてフィードバックし、未確定のものはさらに潜在状態で洗練を続けます。",
      "enables": "1.7Bおよび8Bスケールの11個のベンチマークにおいて、同サイズの自己回帰モデルおよび既存の拡散モデルの平均スコアを上回りました。拡散モデルの利点である並列デコードを維持しつつ、高い品質を実現しています。",
      "why_it_matters": "「予測が難しい単語にはより多くの計算資源を割く」という直感的なアプローチを拡散モデルに導入し、自己回帰モデルとの性能差を埋めることに成功しています。",
      "tags": [
        "拡散言語モデル",
        "並列デコード",
        "適応的計算"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.06056",
      "title": "ROT: Rotating Hidden States towards Contextual Vectors for Hallucination Mitigation in LVLMs",
      "url": "https://arxiv.org/abs/2610.06056",
      "pdf": "https://arxiv.org/pdf/2610.06056",
      "authors": [
        "Yijing Du",
        "Xiangcheng Zhan",
        "Shuo Yang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted in EMNLP 2026 Oral",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "中間層の隠れ状態を回転させてマルチモーダルな文脈に引き戻し幻覚を抑制するROT",
      "what": "視覚と言語を扱うLVLMにおける物体の幻覚（存在しないものを記述する現象）を抑制する手法です。幻覚が起きる際、隠れ状態が文脈から幾何学的に逸脱していることを発見し、それを正しい文脈の平面へ回転（Rotation）させて補正します。",
      "enables": "追加の学習なしで、複数のモデルアーキテクチャやスケールにおいて一貫して幻覚の発生率を減少させ、根拠に基づいた（grounded）生成を改善しました。",
      "why_it_matters": "アテンションの重みなどの間接的な制御ではなく、モデル内部のベクトル表現を直接幾何学的に操作することで、効率的かつ効果的に信頼性を向上させています。",
      "tags": [
        "LVLM",
        "幻覚抑制",
        "幾何学的解釈"
      ],
      "fetched_at": "2026-10-07T10:15:57.945897+09:00"
    },
    {
      "id": "2610.02826",
      "title": "Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite",
      "url": "https://arxiv.org/abs/2610.02826",
      "pdf": "https://arxiv.org/pdf/2610.02826",
      "authors": [
        "Zongxia Li",
        "Yucheng Shi",
        "Zhongzhi Li",
        "Junyao Yang",
        "Ruhan Wang",
        "Chengsong Huang"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 83,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲83"
      ],
      "headline": "多様な環境での経験を汎用的な学習データへ再構築するRecursive Self-Rewrite",
      "what": "複数の特殊な環境（ハーネス）で得られた成功軌跡を、プランナー・批評家・実行器を用いて、汎用的な環境で利用可能なトレーニング軌跡に再構築するフレームワーク「RSR」です。一貫した手順（ランブック）を抽出し、サンドボックスでの実行を通じて再帰的に修正します。",
      "enables": "Terminal-Bench 2でのPass@3を57.0%から74.2%に引き上げるなど、既存のSFTを上回る性能向上を達成しました。",
      "why_it_matters": "モデルが特定のツールや環境に依存せずに、多様な成功体験から汎用的な能力を「自己書き換え」を通じて獲得できることを示しました。",
      "tags": [
        "LLM",
        "自己改善",
        "エージェント"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03391",
      "title": "Native Action-Prior Learning from Videos for World Action Models",
      "url": "https://arxiv.org/abs/2610.03391",
      "pdf": "https://arxiv.org/pdf/2610.03391",
      "authors": [
        "Zhaochong An",
        "Fei Zhang",
        "Menglin Jia",
        "Duncan Frost",
        "Zijian Zhou",
        "Yikai Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 76,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲76"
      ],
      "headline": "行動ラベルのないビデオから直接行動ポリシーを事前学習するNAVA-WAM",
      "what": "ロボットの行動ラベルがないビデオデータから、視覚的ダイナミクスのFlow Matchingを通じて行動ポリシーを直接事前学習する手法「NAVA-WAM」です。第2段階として、少量の行動ラベル付きデータを用いて、ビデオと行動の同時デノイジングによる事後学習を行います。",
      "enables": "分布外（OOD）の設定において従来手法を上回る性能を示し、実機ロボットへの高い汎用性と行動ラベル効率を実証しました。",
      "why_it_matters": "潜在行動の推定や中間表現を介さず、ビデオから直接行動のプライアを学習することで、大規模なインターネットビデオをロボット制御に直接活用する道を開きました。",
      "tags": [
        "ロボット",
        "世界モデル",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.02508",
      "title": "World Action Modeling with Progressive Visual Planning",
      "url": "https://arxiv.org/abs/2610.02508",
      "pdf": "https://arxiv.org/pdf/2610.02508",
      "authors": [
        "Fei Zhang",
        "Zhaochong An",
        "Duncan Frost",
        "Yikai Wang",
        "Pengfei Liu",
        "Ya Zhang"
      ],
      "categories": [
        "cs.AI",
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://sii-ferenas.github.io/ProWAM-page",
      "hf_upvotes": 74,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲74"
      ],
      "headline": "疎な視覚サブゴールを用いた段階的計画による世界行動モデル",
      "what": "将来のビデオを全フレーム生成する代わりに、重要な視覚的サブゴールを順序立てて予測し、それを指標として行動を生成する「ProWAM」です。サブゴール予測は行動ラベルのない大規模ビデオから学習可能で、推論時にはサブゴール特徴量をキャッシュして効率化します。",
      "enables": "シミュレーション環境において、最強のベースラインに対し最大35.9%の相対的な利得を達成し、未知のシーンでの実機実験でも70.0%の成功率を記録しました。",
      "why_it_matters": "長期的な計画が必要なタスクにおいて、密なビデオ生成の非効率性と単一フレーム予測の情報の少なさを、疎なサブゴールという形式で解決しました。",
      "tags": [
        "ロボット",
        "世界モデル",
        "視覚計画"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.02381",
      "title": "Latent-MOPD: Latent Multi-Teacher On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.02381",
      "pdf": "https://arxiv.org/pdf/2610.02381",
      "authors": [
        "Zhengyu Fang",
        "Seoyeon Hong",
        "Jie Yang",
        "Muyang Li",
        "Koyoshi Shindo",
        "Brandon Joseph Lwowski"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 54,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲54"
      ],
      "headline": "内部表現レベルで複数の専門家教師から学習するオンポリシー蒸留",
      "what": "出力トークンだけでなく、中間層の隠れ状態（Representation）も用いて複数の専門家教師から学生モデルへ知識を転移する「Latent-MOPD」です。ドメインごとに隠れ状態の重みを調整し、出力分布への監督へ段階的に移行するルーティング手法を採用しています。",
      "enables": "数学、コード、論理の9つのベンチマークにおいて、トークンのみの蒸留や単一教師の性能を上回り、教師モデルの最高値すら超える性能を示しました。",
      "why_it_matters": "異なるアーキテクチャを持つ教師からも知識を統合できることを示し、モデル内部の表現レベルでの協調学習を可能にしました。",
      "tags": [
        "LLM",
        "知識蒸留",
        "マルチタスク"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03574",
      "title": "HyperBrowseComp: A Multilingual and Multimodal Stress Test for Web-Browsing Agents",
      "url": "https://arxiv.org/abs/2610.03574",
      "pdf": "https://arxiv.org/pdf/2610.03574",
      "authors": [
        "Alham Fikri Aji",
        "Faiz Rizki Ramadhan",
        "Zayd M. K. Zuhri",
        "Seung Hun Eddie Han",
        "Ryandito Diandaru",
        "Qinrong Cui"
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
      "hf_upvotes": 51,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲51"
      ],
      "headline": "Webブラウジングエージェントのための多言語・マルチモーダルな高難易度テスト",
      "what": "13言語にわたる423件の人間による検証済み質問で構成される、ブラウジングエージェント用ベンチマーク「HyperBrowseComp」です。ビデオ、スキャン文書、地図などの多様なソースから、多段階の推論を必要とする回答を探し出す設定になっています。",
      "enables": "モデルが持つパラメータ知識だけで回答できないようフィルタリングされており、現在のエージェントモデルや検索エンジンの限界を測定できます。",
      "why_it_matters": "既存のブラウジング評価よりも実世界の探索タスクに近く、多言語環境下での情報の発見と統合能力を厳密に評価できるベンチマークを提供しました。",
      "tags": [
        "エージェント",
        "多言語",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.01780",
      "title": "RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations",
      "abstract": "A companion that talks with a person for months should come to understand them. It should remember what they said, infer who they are, and know when the past bears on the message in front of it. Testing this requires a real person's record, and such records are private, so benchmarks generate the person and the questions and settle in advance what matters. We release \\bench, ten real relationships with an AI companion: 27,218 messages over up to 120 days, released as the conversation and four files derived from it, a profile, a persona, a chat ground truth and a question set, each citing the messages it rests on. Every chat label carries the reasoning trace that produced it, checked stage by stage against the conversation. Three findings follow. First, the past is rarely needed and far away. Pooled measures mislead: a recency window finds the required message for 95.9\\% of probes and 2.2\\% of those that need memory, and at the natural rate 96\\% of the gain from supplying recorded evidence comes from messages that need none. Second, no detector we tried can tell when memory is needed on real messages, authored questions over the same histories leak the cue, and labeling the same messages as memories raises their use by ten to fourteen points. Third, three agent systems reconstruct the persona with the same F1 at a 31-fold difference in cost.",
      "upvotes": 274,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Quis Lab",
      "url": "https://huggingface.co/papers/2610.01780",
      "arxiv_url": "https://arxiv.org/abs/2610.01780",
      "title_ja": "RealCompanion: 長期的な現実世界の会話からの推論による人間理解のベンチマーク",
      "summary_ja": "AIとの最長120日間にわたる実世界の対話ログを用い、記憶や人物像の推論能力を測定する。"
    },
    {
      "id": "2610.01762",
      "title": "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction",
      "abstract": "Streaming video LLMs must retain evidence before its relevance to future tasks is known and respond when sufficient evidence becomes available. The challenge is to form reusable factual memory without compromising real-time perception. We introduce OneStreamer, which jointly learns query-independent evidence recording and task response through a shared proactive generation process. Its Proactive Hierarchical Caption Memory (PHCM) produces time-grounded local-detail captions and summaries of completed events. Streaming caption targets supervise the interpretation of observed video prefixes during training. At inference, model-generated records complement a recent visual window, providing reusable factual context without revisiting historical visual features. Proactive State Transition Learning (PSTL) reduces the dominance of repeated waiting states by preserving supervision at all output anchors and selecting representative state-change and state-persistence tokens. We further develop a streaming data synthesis pipeline that aligns output content and timing with available evidence. Combining the resulting streaming captions and QA with cleaned open-source data yields OneStreamer-1M, a broad-coverage streaming video interaction dataset with over one million records spanning diverse tasks. Our 4B model achieves the best results among the compared methods across all eight evaluated streaming video understanding benchmarks. Ablations show that retaining generated captions improves historical QA without degrading real-time perception. PSTL also outperforms dense state supervision while supervising only 27.5% of annotated state tokens. Together, these results support proactive generation as a shared learning interface connecting perception, memory formation, and timely response in streaming video interaction.",
      "upvotes": 232,
      "github_stars": 169,
      "github_repo": "https://github.com/MCG-NJU/OneStreamer",
      "project_page": "https://mcg-nju.github.io/OneStreamer",
      "comments": 2,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2610.01762",
      "arxiv_url": "https://arxiv.org/abs/2610.01762",
      "title_ja": "OneStreamer: ストリーミングビデオ対話における知覚、メモリ、能動的応答の統合",
      "summary_ja": "階層的なキャプションメモリにより、リアルタイム知覚と事実の記録、能動的な応答を統合する。"
    },
    {
      "id": "2609.35259",
      "title": "On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics",
      "abstract": "On-policy learning has been argued to reduce catastrophic forgetting, produce sparser parameter updates, and improve generalisation. However, existing comparisons between supervised fine-tuning and reinforcement learning vary many factors simultaneously, making the contribution of rollout policy difficult to isolate. We study the effect of rollout policy in a controlled strong-to-weak distillation setting, by independently varying rollout policy, token-level KL direction, and learning rate across the Llama3 and Qwen2.5 model families and reasoning tasks spanning scientific, medical, and arithmetic domains. Our analysis reveals a nuanced picture of distillation dynamics in which rollout policy does not necessarily play a central role. Instead, token-level KL direction more clearly shapes task performance and output coverage, while learning rate governs forgetting and update sparsity. Analysis of KL gradients and experiments along a continuous student-teacher rollout-policy spectrum explain this pattern: forward KL is remarkably robust to rollout policy, with its performance stable and strong despite changes to the rollout policy, whereas reverse KL is substantially more sensitive and favours student-generated rollouts. On-policy data nevertheless improves generalisation to harder variants of the Countdown arithmetic task under both KL directions, although this advantage does not reliably persist after subsequent RLVR. Our broader conclusions remain robust to removing gradient clipping, using sampled KL estimators, and training on tasks requiring longer reasoning chains. Overall, our results challenge the view that on-policy rollouts are inherently preferable and show that their value depends critically on the objective, evaluation setting, and optimisation hyperparameters.",
      "upvotes": 197,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://antoninbrthn.github.io/on-off-policy-distillation/",
      "comments": 3,
      "org": "University of Cambridge",
      "url": "https://huggingface.co/papers/2609.35259",
      "arxiv_url": "https://arxiv.org/abs/2609.35259",
      "title_ja": "オンポリシーかオフポリシーか？蒸留ダイナミクスの体系的研究",
      "summary_ja": "モデルの蒸留において、生成ポリシーや学習率が汎化性能や忘却に与える影響を体系的に分析。"
    },
    {
      "id": "2610.08448",
      "title": "Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability",
      "abstract": "On-Policy Distillation (OPD) trains a student on its own generations using teacher feedback. With different tokenizers, comparing teacher and student predictions requires alignment at both sequence and vocabulary levels. In this paper, we examine whether expanding this alignment coverage improves learning. Across three heterogeneous teacher--student pairs on mathematical reasoning and code generation, strict 1:1 groups already cover most student-generated tokens despite substantial vocabulary mismatch. On responses sampled from the students before distillation, the shared vocabulary retains nearly all teacher and student probability mass at strictly aligned positions on average. Restricting reverse KL to a student-selected top-16 subset of the shared vocabulary at each strict position achieves accuracy comparable to full shared-vocabulary OPD, outperforming the evaluated cross-tokenizer baselines. Adding mean squared error supervision on span log-probabilities in mismatch groups gives complete supervision coverage, yet reduces accuracy. At checkpoints from training with only the strict loss, the span gradients show weak or negative directional agreement with the strict gradients and grow in magnitude relative to them. These diagnostics may help explain the accuracy drop from adding span supervision. Our findings motivate a shift from maximizing alignment coverage to prioritizing supervision reliability: compact supervision at strict positions can be more effective than broader coverage that introduces weakly aligned or conflicting training signals.",
      "upvotes": 153,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.08448",
      "arxiv_url": "https://arxiv.org/abs/2610.08448",
      "title_ja": "クロストークナイザー・オンポリシー蒸留の再考：アライメント網羅率から監視の信頼性まで",
      "summary_ja": "異なるトークナイザ間での蒸留において、語彙の不一致が学習に与える影響を調査。"
    },
    {
      "id": "2609.38923",
      "title": "GraphForge: Training Working Agents with Graph-Anchored Workspace Synthesis",
      "abstract": "Working agents need to read diverse files, coordinate tools, and produce deliverables. Training such agents requires tasks built on many real files with verifiable results, but few pipelines exist to synthesize this kind of data. Existing pipelines either generate files with models, which lack realism and diversity, or build tasks on real files without task-specific verifiers, leaving result quality unchecked. We introduce GraphForge, an evidence-graph based framework that grounds both the task and its verification in real files. Starting from occupation-grounded seeds for controlled diversity, GraphForge assembles a workspace of real files for each seed and builds an evidence graph over their relations. Since the task statement and rubrics are both derived from this graph, task requirements are backed by the workspace files and each criterion is anchored to the files needed to verify it. An initial rollout further tests executability, and a revision agent repairs the task and rubrics against the original files before trajectories are collected. Fine-tuning Qwen3.6-27B on 2,169 GraphForge trajectories brings GDPVal to 1445.7 (+65.7) under OpenHands, and Workspace-Bench-Lite and SpreadsheetBench II to 63.7 (+7.7) and 24.0 (+13.7) under Claude Code. Rejection fine-tuning on the SFT model's own rollouts, with candidates selected by the evidence-anchored rubrics, yields further improvements on all three benchmarks, suggesting that the rubrics provide a useful selection signal. The data and models are available.",
      "upvotes": 146,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "University of Science and Technology of China",
      "url": "https://huggingface.co/papers/2609.38923",
      "arxiv_url": "https://arxiv.org/abs/2609.38923",
      "title_ja": "GraphForge: グラフに固定されたワークスペース合成による実務エージェントのトレーニング",
      "summary_ja": "実ファイルに基づいたタスクと検証グラフを合成し、多様で検証可能な実務エージェントを訓練。"
    },
    {
      "id": "2609.37200",
      "title": "Adaptive Reward Routing: Dynamic Multi-Reward Optimization for Joint Audio-Video Diffusion via Forward-Process RL",
      "abstract": "Multi-reward guided reinforcement learning (i.e., RL) offers a promising way to improve joint audio-video diffusion models along several complementary objectives, including modality-specific quality, cross-modal semantic alignment, and temporal synchronization. Its effectiveness, however, depends on two quantities that change during training: where reward-driven updates should act, and how competing rewards should be combined. Existing methods tend to rely on fixed routing and reward weights, failing to track evolving model functions. To address these limitations, we propose Adaptive Reward Routing to jointly adapt update locations and reward coordination during forward-process RL (i.e., DiffusionNFT) of joint audio-video diffusion models. Our method consists of two components. (i) Cross-Modal Influence-Guided Routing (Localizing Updates): We use bidirectional cross-attention responses as an efficient proxy for evolving cross-modal influence, dynamically reweighting token-aware losses and scaling gradients across cross-modal layers without additional model interventions. (ii) Preference-Preserving Modality-Aware Reweighting (Coordinating Rewards): We preserve predefined weights as preference priors and use branch-specific reward-gradient interactions as residual corrections after warm-up. This resolves evolving conflicts without letting dominant rewards suppress weak but essential objectives. Extensive experiments demonstrate consistent improvements in modality quality, semantic consistency, and audio-video synchronization over strong RL baselines. Ablations and mechanism analyses further validate the complementary benefits of adaptive update routing and reward coordination.",
      "upvotes": 138,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2609.37200",
      "arxiv_url": "https://arxiv.org/abs/2609.37200",
      "title_ja": "Adaptive Reward Routing: 前方プロセスRLによる音響・映像同時拡散のための動的な多報酬最適化",
      "summary_ja": "学習の進行に合わせて報酬の重みと更新箇所を動的に調整し、映像と音声の同期品質を高める。"
    },
    {
      "id": "2610.05608",
      "title": "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation",
      "abstract": "We present Kandinsky 6.0 Video, a family of foundation diffusion models for synchronized text-to-audio-video generation, comprising Kandinsky 6.0 Video Lite (3B parameters) and Kandinsky 6.0 Video Pro (29B parameters). Both models generate 5-second video clips with synchronized 44 kHz audio, including lip-sync, in text-to-audio-video (T2AV) and image-to-audio-video (I2AV) modes; a built-in super-resolution model raises the output resolution to Full-HD (1920times1080). Building on the video generation capabilities of Kandinsky 5.0, Kandinsky 6.0 Video employs a dual-stream CrossDiT architecture that connects a pretrained video stream and a newly trained audio stream through bidirectional cross-attention for temporal and semantic alignment. Our continuous pretraining strategy first trains the audio stream from scratch on large-scale audio corpora and then trains both streams jointly on paired audio-video data while preserving unimodal fidelity; pretraining is followed by supervised fine-tuning, reinforcement-learning-based post-training, and distillation. In side-by-side human evaluation, Kandinsky 6.0 Video Pro clearly outperforms its predecessor, Kandinsky 5.0 Video Pro, and remains competitive with leading audio-video generation models, particularly in speech quality. To accelerate open research and deployment in multimedia generation, we release the code, model checkpoints, and diffusers integration under the MIT license.",
      "upvotes": 132,
      "github_stars": 151,
      "github_repo": "https://github.com/kandinskylab/kandinsky-6",
      "project_page": "https://kandinskylab.ai/",
      "comments": 3,
      "org": "Kandinsky Lab",
      "url": "https://huggingface.co/papers/2610.05608",
      "arxiv_url": "https://arxiv.org/abs/2610.05608",
      "title_ja": "Kandinsky 6.0 Video: 同期したビデオおよびオーディオ生成のための基盤モデル",
      "summary_ja": "二流のアーキテクチャにより、音声と映像が同期した5秒間の高画質動画を生成可能。"
    },
    {
      "id": "2609.38879",
      "title": "Does Learning Protein Folding Generalize to Broader Reasoning?",
      "abstract": "Large language models rely heavily on human text, which often conveys surface answers rather than the spatial and structural logic behind them. Protein folding is a natural testbed, because one solved structure yields thousands of exactly checkable spatial and topological statements. We ask: can learning to fold proteins teach general models reusable reasoning capabilities? To answer this, we build FoldingCorpus, a protein-derived question-answer dataset, and Fold2Reason, a recipe that post-trains on it through two complementary signals: discrete structural answers predicted via the model's native language head, and continuous 3D geometry decoded from the same shared representations. On FoldBench, Fold2Reason achieves structure prediction scores 2.7 to 3.5 times those of Qwen3.5-9B. Beyond protein structure prediction, it improves performance on all 10 benchmarks spanning spatial, graph, scientific, and general reasoning, raising macro-average accuracy from 45.09% to 48.33% (+3.23 pp), with positive gains on all 10 benchmarks, while matched controls built from random, synthetic, and shuffled structure yield substantially smaller or negative gains. Our work shows that non-linguistic, structure-dense scientific data can systematically improve broad reasoning in language models, making a solved scientific problem a practical source of post-training supervision.",
      "upvotes": 115,
      "github_stars": 30,
      "github_repo": "https://github.com/GENTEL-lab/Fold2Reason",
      "project_page": "",
      "comments": 4,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2609.38879",
      "arxiv_url": "https://arxiv.org/abs/2609.38879",
      "title_ja": "タンパク質折り畳みの学習は広範な推論に汎化されるか？",
      "summary_ja": "タンパク質の構造予測学習が、モデルの一般的な空間・幾何学的推論能力を向上させるか検証。"
    },
    {
      "id": "2609.38078",
      "title": "MotorMind: Scaffolding General Vision Language Models for Zero-Shot Robot Manipulation",
      "abstract": "Vision-language-action (VLA) models have advanced robotic manipulation, but their zero-shot generalization in new tasks and environments remains limited, and their reliance on specialized training keeps them from benefiting directly from rapidly advancing general-purpose vision-language models (VLMs). In parallel, recent agentic robotic systems leverage VLMs for high-level reasoning or coding agents for robot control, but often depend on extensive external models and tools, introducing additional complexity and cost. This motivates us to ask: Can a general-purpose VLM itself operate a robot more like the human teleoperator by reasoning directly from observations, issuing actions, and continuously adapting to execution feedback, without relying on external models such as learned action experts, coding agents or grounding tools like SAM3? In this work, we introduce MotorMind, a robot manipulation harness that connects VLM-proposed mid-level actions to deterministic robot control and feedback, with asynchronous monitoring and background memory updates. Without task-specific policy training, coding agents, or additional grounding tools such as SAM3, MotorMind achieves 66.7% success on the base LIBERO-PRO suites and 53.8% under perturbations, compared with at most 13.3% and 19.2%, respectively, for the prior zero-shot methods we evaluate. The same interface reaches 95% average success on a real xArm6 robot across direct manipulation and human-perturbation settings. Replacing the backbone with a stronger VLM further improves performance, while the remaining failures - primarily due to visual grounding, embodied reasoning, and action knowledge - decrease as VLM capability improves. These results show that a general-purpose VLM, when equipped with an appropriate mid-level action representation and asynchronous execution harness, can perform effective zero-shot robotic manipulation.",
      "upvotes": 110,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://motor-mind.github.io",
      "comments": 2,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2609.38078",
      "arxiv_url": "https://arxiv.org/abs/2609.38078",
      "title_ja": "MotorMind: ゼロショット・ロボット操作に向けた汎用視覚言語モデルの足場作り",
      "summary_ja": "外部ツールなしで、汎用VLMが直接観測から推論・行動し、未知のロボット操作を遂行する。"
    },
    {
      "id": "2609.38839",
      "title": "FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation",
      "abstract": "Long-horizon video generation requires models to effectively leverage an increasingly long generation history. As the generated history grows, retaining all previous content becomes increasingly expensive and redundant, making effective historical selection essential. Existing approaches often determine historical relevance based on the current content. However, information relevant to the present is not necessarily useful for future generation, while seemingly less relevant history may become important later. Our key insight is that historical information should be selected according to its relevance to future information needs. Capturing these needs does not require generating the full future; instead, a compact representation of what becomes important next is sufficient to guide historical selection. Building on this insight, we propose FrameMorrow, a prospective frame selector that predicts a small set of prospective tokens representing future information needs and uses them to identify relevant information from history. FrameMorrow selects explicit historical frames rather than model-specific internal states, enabling plug-and-play integration across diverse generators, including closed-source models, with little additional inference cost. We evaluate FrameMorrow across five benchmarks and 11 generative models spanning long-video generation, interactive generation, and action-conditioned world models. Extensive experiments demonstrate consistent improvements in long-range consistency, visual quality, and action alignment across diverse generation settings.",
      "upvotes": 107,
      "github_stars": 29,
      "github_repo": "https://github.com/YinBo0927/FrameMorrow",
      "project_page": "https://yinbo0927.github.io/FrameMorrow/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.38839",
      "arxiv_url": "https://arxiv.org/abs/2609.38839",
      "title_ja": "FrameMorrow: 長時間ビデオ生成のための将来予測トークンによる未来主導のフレーム選択",
      "summary_ja": "将来の生成に必要な情報を予測し、過去の履歴から最適なフレームを選択して効率を向上。"
    },
    {
      "id": "2610.01509",
      "title": "Sharpening Tax in Post-Training",
      "abstract": "An emerging hypothesis about reinforcement learning (RL) post-training of large language models (LLMs) is that it merely sharpens existing behaviors of a base model, improving single-shot accuracy at the cost of solution coverage. Although this trade-off has been observed in math and coding tasks, it need not extend to agentic tasks, where multi-turn tool use and interaction may require capabilities newly acquired during post-training. Our surprising finding is that pre-trained LLMs, equipped with a light inference harness, can serve as capable agents. Despite far lower accuracy (pass@1), they often surpass their post-trained counterparts in solution coverage (pass@K) given a sufficient test-time budget. We further analyze the underlying mechanism and show that post-training pushes tasks toward two extremes, always solved or never solved, and thereby improves sampling efficiency and consistency at the cost of solution coverage. To measure this cost, we propose Sharpening Tax, a diagnostic metric that quantifies the loss in test-time scalability after post-training. Across 14 base/post-trained model pairs from four families and three agentic benchmarks (42 cases in total), the tax is prevalent in most settings, can be estimated from a few rollouts, and correlates well with other metrics. Finally, we present posterior-tempered group sampling (PTGS), a simple plug-and-play Bayesian sampler that adapts the sampling temperature per prompt to its estimated difficulty. Applied during RL training in two agentic environments, PTGS pays a smaller tax than the fixed-temperature baseline, solving more tasks under repeated sampling while also improving single-shot accuracy.",
      "upvotes": 104,
      "github_stars": 25,
      "github_repo": "https://github.com/changdaeoh/sharpening-tax",
      "project_page": "https://changdaeoh.github.io/sharpening-tax/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.01509",
      "arxiv_url": "https://arxiv.org/abs/2610.01509",
      "title_ja": "事後学習におけるシャーペニングの代償",
      "summary_ja": "RLによる事後学習が正解精度を高める一方で、解決策の多様性（カバレッジ）を損なう現象を分析。"
    },
    {
      "id": "2610.02826",
      "title": "Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite",
      "abstract": "Successful trajectories on difficult tasks provide valuable supervision for model improvement, but specialized harnesses introduce interventions that may be unavailable during deployment. We propose Recursive Self-Rewrite (RSR), a framework that uses one base model, Qwen-3.8-27B, to discover successful solutions under diverse harnesses and reconstruct them as training trajectories under a general harness. A planner extracts procedures into runbooks, a critic screens for verifier and solution leakage and guides recursive revision, and an executor follows qualified runbooks in fresh sandboxes. Across approximately 3K self-curated terminal tasks, three harnesses jointly solve 759 tasks, 34.3% more than the strongest individual harness in the recorded pool. RSR expands 2,001 successful source trajectories into 11,094 rewritten trajectories for supervised finetuning. Training on these trajectories outperforms both the base model and direct trajectory SFT. Compared with the base model, pass@3 increases from 57.0% to 74.2% on Terminal-Bench 2, from 1.5% to 9.1% on Terminal-Bench 4, from 39.0% to 63.0% on our self-curated Terminal-Bench Hard, and from 3.0% to 6.0% on our Software Terminal-Bench. Process reward on Long-Horizon Terminal-Bench rises from 0.21 to 0.29. These results show how diverse harness-assisted experiences can be reconstructed into reusable capabilities for a model operating under a general harness.",
      "upvotes": 101,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.02826",
      "arxiv_url": "https://arxiv.org/abs/2610.02826",
      "title_ja": "再帰的自己書き換えによる複雑なタスクの軌跡スケーリング",
      "summary_ja": "一つのモデルが自ら成功事例を発見し、汎用的な訓練データへと再構成する学習フレームワーク。"
    },
    {
      "id": "2610.00314",
      "title": "Predictive Credit: Measuring What Scientific Explanations Add to Experimental Forecasts",
      "abstract": "Research agents explain planned experiments. We measure predictive credit with paired forecasts sharing an intervention, forecaster, and outcome while varying description, matched explanation, and donor context. Five checks track commitment, delivery, predictive gain, alignment, and known-signal uptake. Across 336 prospective states in controlled learning, 12 Tox21 endpoints, and 24 OpenML tasks, v5's frozen credit decision was inconclusive. Tox21's preregistered ROC AUC interval-score harm test was unmet (D-M=-.0026, 95 percent interval [-.0174, .0104]); OpenML's joint formation, point-equivalence, and repeatability rule was unmet. Matched point-accuracy gains over description remained unconfirmed, and Tox21/OpenML seed-donor intervals spanned zero. Under requested DeepSeek V4 Pro, matched and donor cards reduced secondary Tox21 drift by 64.5 and 59.1 percent. A DeepSeek V4 Flash replay raised matched point MAE from .01823 to .02020 and missed matched-donor interval-score equivalence. OpenML full-card assignment widened nominal 80 percent intervals by 21 percent, with 49.3 percent coverage versus 51.4 percent for description and content in 66/144 cards. Direct-text Flash delivered all 144 notes without detectable matched point-accuracy gain. A researcher-authored mechanism positive control lowered point MAE by 2.60 percentage points versus description. The protocol measures predictive credit for research-agent benchmarks and scientific forecasting; natural-explanation credit remained unconfirmed at the tested donor resolutions.",
      "upvotes": 101,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.00314",
      "arxiv_url": "https://arxiv.org/abs/2610.00314",
      "title_ja": "Predictive Credit: 科学的説明が実験予測に与える付加価値の測定",
      "summary_ja": "科学的な説明がAIの予測精度向上に真に寄与しているかを厳密なテストで評価する手法。"
    },
    {
      "id": "2609.32259",
      "title": "Prefill-Free Cross-Family KV Cache Transfer for Heterogeneous Multi-Agent LLMs",
      "abstract": "Recent multi-agent LLM systems increasingly combine heterogeneous models for specialized agent roles. However, text-based communication requires each receiver to prefill shared context already processed by the sender. Reusing the sender's key-value (KV) cache avoids this redundancy, but prefill-free transfer across model families must handle differences in tokenization, model depth, and KV representations. To address these issues, we propose HeteroFold, a prefill-free cross-family KV cache transfer method that keeps both the sender and receiver frozen. HeteroFold aligns model structures, maps the sender cache into the receiver space, and calibrates it to preserve receiver behavior. Across six transfer directions, HeteroFold achieves the best cache-transfer performance on all four long-context benchmarks and most short-context settings. It also matches text-based communication on the multi-agent benchmark. At 32K context length, Llama-3.1-8BrightarrowMinistral-3-14B transfer is 10.7times faster than Native Prefill and 1.18--1.47times faster than the state-of-the-art prefill-free baselines, Dense Latent and KV Ridge. These results show that HeteroFold enables efficient cross-family KV reuse without receiver prefill.",
      "upvotes": 95,
      "github_stars": 1,
      "github_repo": "https://github.com/daniel-eai/Prefill-Free-Multi-Agent-LLMs",
      "project_page": "",
      "comments": 2,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2609.32259",
      "arxiv_url": "https://arxiv.org/abs/2609.32259",
      "title_ja": "不均一なマルチエージェントLLMのためのプリフィル不要なクロスファミリーKVキャッシュ転送",
      "summary_ja": "異なるモデルファミリー間でのKVキャッシュ共有を可能にし、冗長な再計算を排除する手法。"
    },
    {
      "id": "2610.01415",
      "title": "Beyond Memory: Harnessing Long-Horizon Agents with Explicit Belief States",
      "abstract": "Large language model (LLM) agents can now undertake increasingly complex tasks, but the way they organize interaction history into memory does not ensure a coherent understanding of the current world. We introduce PoS, an inference-time framework that constructs and continually maintains explicit belief states as the agent's decision context. Each belief combines an estimate of the current world state with unresolved task requirements, making explicit what the agent still needs to learn and accomplish. To keep this belief reliable and actionable, PoS validates its consistency and monitors task progress to detect Belief Trapping, where the agent continues to act without making meaningful progress toward the goal. Recovery is then tailored to both the trapping pattern and the type of unresolved task requirement. Experiments on four benchmarks spanning execution and diagnosis show that PoS achieves the highest overall performance on every benchmark with all three LLM backbones. Ablations demonstrate the importance of consistency validation and recovery, while context-scaling experiments show resilience to context growth. Together, these results support belief construction and continual maintenance as a foundation for long-horizon context management beyond history retention and compression.",
      "upvotes": 93,
      "github_stars": 28,
      "github_repo": "https://github.com/luoyu100/PoS",
      "project_page": "https://luoyu100.github.io/projects/progression-of-states/project/",
      "comments": 3,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.01415",
      "arxiv_url": "https://arxiv.org/abs/2610.01415",
      "title_ja": "記憶を超えて：明示的な信念状態を持つ長期エージェントの活用",
      "summary_ja": "世界の状態と未完了のタスクを「信念」として明示的に管理し、一貫した意思決定を実現。"
    },
    {
      "id": "2610.02508",
      "title": "World Action Modeling with Progressive Visual Planning",
      "abstract": "World action models (WAMs) have emerged as a promising paradigm for robotic control by jointly predicting future visual dynamics and actions from an initial observation and instruction. However, existing WAMs struggle with long-horizon prediction, as generating dense video rollouts is highly inefficient. Some recent WAMs address this by predicting a single future frame without generating the full video, but this approach neglects how to progress toward the goal. We present ProWAM, a progressive world action model that jointly predicts actions and an ordered sequence of sparse visual sub-goals, providing explicit visual guidance to anchor action generation throughout task execution. This design scales naturally, as sub-goal prediction can be learned from large-scale action-free videos, allowing the video backbone to offload complex visual planning from the action policy. For efficient action generation, ProWAM executes a single video-backbone forward pass to cache sparse sub-goal features, eliminating iterative full-video generation and requiring only lightweight action denoising during replanning. Across extensive evaluations, ProWAM achieves superior out-of-distribution robustness. On simulation benchmarks, it sets new state-of-the-art results on LIBERO-Plus (85.8%) and randomized RoboTwin (75.7%), outperforming the strongest baseline with relative gains of up to +35.9%. On RoboCasa365, ProWAM achieves a 48.1% success rate and 18.2% on the challenging Composite-Unseen split, ranking 4th overall. Crucially, in zero-shot real-world experiments, ProWAM achieves 70.0% success, outperforming the strongest baseline by +15.0 (from 55.0% to 70.0%, a +27.3% relative gain) in novel scenes. These results demonstrate the value of progress-indexed visual foresight for closed-loop control. Our program is in https://sii-ferenas.github.io/ProWAM-page.",
      "upvotes": 92,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://sii-ferenas.github.io/ProWAM-page/",
      "comments": 3,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.02508",
      "arxiv_url": "https://arxiv.org/abs/2610.02508",
      "title_ja": "漸進的視覚プランニングによる世界行動モデリング",
      "summary_ja": "まばらな視覚的サブゴールを逐次予測することで、長期間のロボットタスク実行を導く。"
    },
    {
      "id": "2610.02193",
      "title": "Hierarchical Continuous Diffusion Language Models",
      "abstract": "Discrete diffusion language models offer a compelling alternative to autoregressive generation for tasks demanding bidirectional reasoning and global constraint satisfaction. Yet they share a structural bottleneck: when decoding in parallel, each token is sampled independently from its marginal, severing the statistical dependencies among the tokens decoded together. Continuous diffusion language models avoid this by denoising a shared continuous state, but their denoiser sees only that state, so nothing ties it to a valid token configuration until it is finally decoded. To address this, we propose Hierarchical Continuous Diffusion Language Models (HC-DLM), which couple discrete token generation with a continuous latent trajectory in a single, principled denoising process, whose training objective is derived from a variational bound on the token likelihood. In contrast to recent methods that attach continuous context to a self-contained discrete chain, HC-DLM makes the latent the only persistent generative state: tokens are read out from it at every step and feed back as a scaffold for the next latent update. On structured reasoning (Sudoku), mathematical planning (Countdown) and language modeling (LM1B), HC-DLM improves over discrete and continuous diffusion baselines at matched model size, in puzzle accuracy on Sudoku and Countdown and in generative perplexity on LM1B. Project page: https://hc-dlm.github.io/.",
      "upvotes": 89,
      "github_stars": 57,
      "github_repo": "https://github.com/rhfeiyang/HC-DLM",
      "project_page": "https://hc-dlm.github.io/",
      "comments": 2,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2610.02193",
      "arxiv_url": "https://arxiv.org/abs/2610.02193",
      "title_ja": "階層型連続拡散言語モデル",
      "summary_ja": "離散トークンと連続状態の生成を結合し、並列デコード時の統計的な依存関係を改善。"
    },
    {
      "id": "2610.03391",
      "title": "Native Action-Prior Learning from Videos for World Action Models",
      "abstract": "World action models integrate future visual dynamics with robot action prediction, but their scalability remains limited by the need for action-annotated robot trajectories. Observation-only videos contain rich evidence about interaction dynamics, but existing approaches typically use them either to pretrain visual representations that must later be adapted for control, or to infer latent actions that are subsequently grounded to robot commands. We present NAVA-WAM, which introduces native action-prior learning by directly pretraining the action policy from observation-only videos, avoiding indirect representation-to-control transfer or a separate latent-action model. Our training consists of two stages. First, we pretrain on observation-only videos, where future-video flow-matching supervision over visual transitions is propagated through transition-structured joint attention to optimize the Action-DiT and learn action-relevant priors. Second, we use action-labeled demonstrations to post-train the Action-DiT for robot control through joint video--action flow matching, while asymmetric attention decouples the visual branch from iterative action denoising and enables efficient action-only inference. Extensive experiments show that NAVA-WAM consistently outperforms prior approaches under both in-distribution and out-of-distribution settings, while demonstrating strong action-label efficiency and effective real-robot generalization. These results establish native action-prior learning as an effective approach to directly pretrain action policies from observation-only videos, providing a scalable path beyond action-labeled robot data.",
      "upvotes": 87,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zhaochongan.github.io/projects/NAVA-WAM/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.03391",
      "arxiv_url": "https://arxiv.org/abs/2610.03391",
      "title_ja": "世界行動モデルのためのビデオからのネイティブな行動事前学習",
      "summary_ja": "行動ラベルのないビデオから直接行動ポリシーを学習し、効率的にロボット操作を事前学習。"
    },
    {
      "id": "2609.36659",
      "title": "On-Policy Parameter Update Direction Underlies Generalization in LLM Post-Training",
      "abstract": "The strong generalization performance of on-policy post-training paradigms has motivated studies of their parameter update behaviors. However, these studies treat the observed behaviors only as byproducts in on-policy training, overlooking their potential to serve as optimization principles for improving the generalization of other paradigms such as supervised fine-tuning (SFT). To address this limitation, we investigate whether there exists a specific on-policy update behavior that can achieve such improvements. First, our analyses reveal that SFT updates parameters along consistent directions, while the on-policy paradigm continuously adjusts the direction during training. This difference inspires us to focus on the cumulative update direction of each parameter as a promising behavior. Then, we evaluate its effectiveness for improving generalization by proposing On-Policy direction-constrained Supervised Fine-Tuning (OPSFT), which constrains SFT updates to the direction identified by on-policy paradigms. The strong performance of OPSFT indicates that the generalization advantage of on-policy paradigms can be transferred to SFT through the parameter update direction. Once such a direction is identified, even SFT can generalize with its updates constrained to this direction. This finding offers two practical benefits by combining the strong generalization of on-policy paradigms with the advantages of SFT, including the high training efficiency and ability to leverage high-quality trajectories. For efficiency, we identify update directions that support strong generalization using a few on-policy training steps, and subsequently apply OPSFT to achieve high training efficiency. For leveraging high-quality trajectories, OPSFT can utilize these trajectories to continue improving a post-trained model along its update direction without disrupting the ability learned from on-policy training.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ucas",
      "url": "https://huggingface.co/papers/2609.36659",
      "arxiv_url": "https://arxiv.org/abs/2609.36659",
      "title_ja": "オンポリシーのパラメータ更新方向がLLM事後学習の汎化を支える",
      "summary_ja": "オンポリシー学習の動的な更新方向をSFTに取り入れることで、LLMの汎化性能を向上させる。"
    },
    {
      "id": "2609.35690",
      "title": "Agent Priors-guided Policy Learning",
      "abstract": "Robots that learn from a few demonstrations often require two forms of generalization. Compositional generalization recombines skills to solve new tasks, and skill generalization lets the learned policy behind each skill work in new situations. The two depend on each other, yet information is lost between composition and the skills it calls. Where a skill works is determined by the structure its policy is trained with, while composition sees the skill only through a separate description, such as a name, an instruction, or a symbolic operator, that omits this structure. Our key idea is to use each policy's structural prior as part of the interface between composition and the skill. A structural prior states what a behavior depends on, for example that a grasp depends only on the gripper's pose relative to the object. Built into training, it shapes where the policy generalizes; stated in language, it tells composition where the policy applies. We instantiate this idea in Agent Priors-guided Policy Learning (APPL). A construction agent segments complete demonstrations into reusable skills, proposes several structural priors for each skill, and trains and verifies one policy per prior. A runtime agent then selects among these prior-specific policies and composes them toward new task goals using their interfaces. Across MetaWorld and long-horizon ManiSkill tasks, APPL improves out-of-distribution skill generalization and enables previously unseen skill compositions; ablating the interface information substantially reduces performance. These results support the use of training-time structural assumptions as a bridge between skill learning and skill composition.",
      "upvotes": 85,
      "github_stars": 3,
      "github_repo": "https://github.com/Agentics-robotics/Agent-Priors-guided-Policy-Learning",
      "project_page": "https://agentics-robotics.github.io/APPL/",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.35690",
      "arxiv_url": "https://arxiv.org/abs/2609.35690",
      "title_ja": "エージェント・プライヤーに導かれたポリシー学習",
      "summary_ja": "スキルの構造的な事前知識をインターフェースとし、少数のデモからロボットの汎化を改善。"
    },
    {
      "id": "2610.02162",
      "title": "World Observer: Joint Actor-Observer Generation for Persistent World Modeling",
      "abstract": "How can a world model continuously observe regions beyond the actor's current view? Video world models simulate how an environment evolves from an agent's actions, yet remain actor-centric. Once an object leaves the actor's view, they lose direct evidence of its evolution, often failing to preserve its state and dynamics upon re-entry. To address this, we introduce World Observer, which decouples observing from acting by jointly generating a perspective actor for the agent-centric view with one or more panoramic observers that watch selected world regions. This allows objects that leave the actor's view to remain visually evolving in an observer, so their updated states are reflected when they re-enter. We ground the actor and observers by warping from a shared panoramic source for explicit geometric correspondence, and introduce an Observer Sink of high-resolution perspective references to restore fine appearance upon re-entry. Since the observers are decoupled from the actor, they can be placed freely across the scene, extended to multiple locations for broader coverage, and driven by control signals to steer out-of-view evolution. To evaluate out-of-view evolution, we further introduce world-space metrics and a benchmark spanning real and synthetic scenes. World Observer substantially improves out-of-view dynamics while remaining competitive in visual fidelity, camera control, and 3D adherence.",
      "upvotes": 84,
      "github_stars": 31,
      "github_repo": "https://github.com/cvlab-kaist/world-observer",
      "project_page": "https://cvlab-kaist.github.io/world-observer/",
      "comments": 4,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.02162",
      "arxiv_url": "https://arxiv.org/abs/2610.02162",
      "title_ja": "World Observer: 持続的な世界モデリングのためのアクター・オブザーバー同時生成",
      "summary_ja": "視野外を監視する「観測者」を導入し、アクターの視点から消えた物体の状態変化を維持する。"
    },
    {
      "id": "2610.00906",
      "title": "ActiveSaddler: Automated Curriculum Learning for Agent Harness Optimization",
      "abstract": "Automated harness optimization can substantially improve LLM agents by iteratively updating their prompts, tool interfaces, and control logic from execution feedback. However, existing methods primarily optimize how the harness is updated while largely fixing which training scenarios generate the feedback that drives those updates. As the harness evolves, the scenarios most useful for further optimization can change, suggesting that the training curriculum itself should adapt alongside the harness. We formulate this missing dimension of harness optimization as an automated curriculum learning problem and introduce ActiveSaddler. ActiveSaddler models the evolving curriculum as a non-stationary bandit with dynamically instantiated optimization targets. It abstracts recurring failures into reusable failure-pattern arms, estimates the potential learning progress from further targeting each pattern, and adaptively balances revisiting known weaknesses with exploring unseen scenarios for new ones. Optimization outcomes continually update both the set of discovered failure patterns and their priorities, allowing the curriculum to co-evolve with the harness. Experiments on GAIA2 and Terminal-Bench 2.0 show that ActiveSaddler consistently discovers stronger harnesses, improving test Pass@1 by 4.4 and 7.5 percentage points over the same harness optimizer using a scenario order fixed before optimization, respectively. Ablations further show that these gains depend on dynamically constructing optimization targets, estimating their evolving utility, and balancing continued optimization with new failure discovery. Together, these results establish automated curriculum learning as a new crucial optimization dimension for harness optimization.",
      "upvotes": 82,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://autosaddler-projectpage.github.io/activesaddler/",
      "comments": 2,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.00906",
      "arxiv_url": "https://arxiv.org/abs/2610.00906",
      "title_ja": "ActiveSaddler: エージェント基盤最適化のための自動カリキュラム学習",
      "summary_ja": "進化するモデルの能力に合わせて、最適な訓練シナリオを動的に選択し、効率的に最適化。"
    },
    {
      "id": "2609.32993",
      "title": "X-Tree: Tokenizing Reusable Experience for Efficient Agent Generalization",
      "abstract": "Multi-step agents are trained on flat action streams: SFT and RLVR weight every token uniformly and ignore the sub-procedures that recur across tasks, the hierarchy that lets humans plan top-down from reusable routines. This structure sits unused, and flat training uses each scarce trajectory less fully than its content allows. Recent agents do use that structure, but only as LLM-written skills in context, never in the weights, so their gains do not generalize beyond retrieval. We instead recover this hierarchy from the data itself and train on it, with no LLM calls. Following text tokenizers, which build a vocabulary by counting alone, we score action spans by reusability and merge canonicalized actions into a reusable eXperience tree (X-Tree). Each X-Tree node captures how a frequent and success-bearing skill is composed from sub-skills, guiding efficient generalization. We integrate X-Tree into three training settings: offline RL, with each node as a training instance; online RLVR, with an adaptive skill bonus; and on-policy self-distillation, with X-Tree as the self-teacher's privileged context. Across WebArena, ScienceWorld, and WebShop at three model scales, X-Tree improves over standard recipes at matched data and budget by up to 4.5% SR on WebArena, 5.8% SR on ScienceWorld and 4.1% success on WebShop. Matched analyses attribute the gains to the X-Tree structure and the three integrations.",
      "upvotes": 76,
      "github_stars": 2,
      "github_repo": "https://github.com/sitaocheng/X-Tree",
      "project_page": "https://sitaocheng.github.io/xtree/",
      "comments": 2,
      "org": "University of Waterloo",
      "url": "https://huggingface.co/papers/2609.32993",
      "arxiv_url": "https://arxiv.org/abs/2609.32993",
      "title_ja": "X-Tree: 効率的なエージェント汎化のための再利用可能な経験のトークン化",
      "summary_ja": "行動データから再利用可能な階層構造を自動抽出して学習し、未知タスクへの汎化を強化。"
    },
    {
      "id": "2609.39027",
      "title": "A Missing Piece for Trustworthy AI Reviewers: From Benchmarking Rhetorical Robustness to SciCore Review",
      "abstract": "AI reviewers can assign different judgments to manuscripts that report the same science in different wording, potentially rewarding rhetorical optimization over scientific improvement. We formulate Rhetorical Robustness as the joint requirement of stability across content-preserving rewrites and discrimination across papers. We introduce RobustReview, a controlled full-manuscript benchmark with 1,260 manuscript versions, and evaluate 30 reviewer configurations. The benchmark reveals false robustness, where low rewrite sensitivity coincides with score collapse across papers, and shows that human alignment and rhetorical robustness rank reviewers differently. Moreover, the evaluated content-focused prompting protocol does not consistently improve robustness across backbones. Motivated by these findings, we introduce SciCore, a dual-branch reviewer that averages a full-manuscript judgment with a judgment based on an extracted, structured science core. This design combines manuscript-level assessment with a content-normalized view intended to reduce rhetorical sensitivity. In our primary GPT-5.5 comparison, SciCore achieves a leading joint stability-discrimination profile among the benchmarked reviewers while maintaining competitive human alignment. These results identify rhetorical robustness as a distinct evaluation target and demonstrate the potential of science-core review to improve it.",
      "upvotes": 76,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2609.39027",
      "arxiv_url": "https://arxiv.org/abs/2609.39027",
      "title_ja": "信頼できるAI査読者のためのミッシングピース：レトリックの頑健性からSciCore査読まで",
      "summary_ja": "書き換えに惑わされない「レトリックの頑健性」を評価するベンチマークでAI査読を検証。"
    },
    {
      "id": "2609.36585",
      "title": "Transformers Stop Thinking Too Early, and a Tiny LoRA Fixes It",
      "abstract": "Pretrained transformers use little of their depth to follow references in context. Thirteen base models reliably follow only 1.4-3.6 lines, and extra pretrained loops add little. A task-trained rank-8 LoRA at one early layer extends this computation with all model weights frozen. Qwen3-8B improves from 15.5% to 99% exact accuracy on 24-line chains; a longer-trained LoRA reaches 50 lines. Ouro-1.4B reaches 60 lines after four loops and at least 160 after eight. The LoRA starts a relay: program lines pass on their chain identity through a short range of middle layers. Frozen heads read progressively further up the chain, and removing parent-line attention stops the relay. A frozen-model measurement locates the last useful intervention layer within tolerance in three of four held-out models. Task-specific LoRAs also improve MuSiQue. Default answers therefore understate the computation accessible through a tiny edit. Code and an interactive demo are available at https://lunamos.github.io/stop-thinking-too-early/",
      "upvotes": 75,
      "github_stars": 3,
      "github_repo": "https://github.com/Lunamos/stop-thinking-too-early",
      "project_page": "https://lunamos.github.io/stop-thinking-too-early/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2609.36585",
      "arxiv_url": "https://arxiv.org/abs/2609.36585",
      "title_ja": "トランスフォーマーは思考を止めるのが早すぎる。それを解決する小さなLoRA修正",
      "summary_ja": "初期層に微小なLoRAを追加するだけで、文中の長い参照を追跡する能力が劇的に向上。"
    },
    {
      "id": "2610.07767",
      "title": "TRACE: Rollout-Guided Quantization-Aware Training for FP4 Reinforcement Learning of MoE Language Models",
      "abstract": "Reinforcement learning (RL) for post-training large language models (LLMs) incurs substantial computation and memory overhead during rollout generation, which motivates low-precision rollout for efficient RL training. However, existing FP4 RL methods suffer from a key limitation: they primarily optimize quantization accuracy on the training and rollout paths independently rather than directly reducing the discrepancy between the two quantized execution paths. In this work, we propose TRACE (Train-Rollout Quantization Alignment via Compact GuidancE), an FP4 quantization framework for RL training of Mixture-of-Experts (MoE) language models that addresses the limitation of existing FP4 RL methods. TRACE incorporates rollout-guided quantization-aware training that uses rollout-side quantization outcomes to guide training-side FP4 rounding decisions, directly reducing train-rollout discrepancy. Moreover, TRACE adopts an efficient quantization-information caching scheme that selectively retains mantissa and scale information from deeper layers to reduce the storage and communication overhead introduced by rollout guidance. We evaluate TRACE on four large-scale MoE language models across reasoning, coding, and long-horizon RL tasks. Our results demonstrate that TRACE enables joint FP4 weight/activation and FP4 KV-cache rollout with RL performance comparable to BF16 rollout, while achieving up to 5.4xrollout speedup and strong final FP4 performance compared with post-hoc FP4 quantization of BF16-trained policies.",
      "upvotes": 74,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Qwen",
      "url": "https://huggingface.co/papers/2610.07767",
      "arxiv_url": "https://arxiv.org/abs/2610.07767",
      "title_ja": "TRACE: MoE言語モデルのFP4強化学習のためのロールアウト誘導型量子化認識訓練",
      "summary_ja": "訓練とロールアウト間の量子化誤差を最小化し、FP4精度での効率的な強化学習を実現。"
    },
    {
      "id": "2610.02205",
      "title": "ROWBench: Do Video Models Render What the Program Specifies?",
      "abstract": "Programmable world models separate executable dynamics from visual generation, offering a promising foundation for next-generation game engines. However, their visual adherence to explicit rules and interactions remains insufficiently evaluated. Existing benchmarks assess visual quality, controllability, and instruction or physical adherence, but rarely test fidelity to fine-grained, program-specified world events. We introduce PROWBench, comprising 170 programmatically constructed episodes and 600 proxy videos covering diverse scenes and interactions. PROWBench logs entity states and timestamped events, including those outside the camera's field of view, as replayable world records, from which it renders synchronized views and proxy representations. This enables generated videos to be checked against the observable consequences of program execution. An extensible framework constructs scenes, controls behaviors, and can render each camera view in different representations, such as coarse 3D, and bounding boxes. The benchmark covers first- and third-person perspectives, with synchronized multi-view observations available for a subset of episodes. Grounded in these records, PROWBench evaluates entity control, long-horizon memory, and, with two VLM-based metrics, Logic-Render Alignment and Interaction Success Rate, adherence to the prescribed timeline and the visual realization of timestamped engine-recorded events.",
      "upvotes": 71,
      "github_stars": 32,
      "github_repo": "https://github.com/AlayaLab/PROWBench",
      "project_page": "https://alaya-lab.github.io/PROWBench",
      "comments": 2,
      "org": "Alaya Lab",
      "url": "https://huggingface.co/papers/2610.02205",
      "arxiv_url": "https://arxiv.org/abs/2610.02205",
      "title_ja": "ROWBench: ビデオモデルはプログラムが指定した内容をレンダリングしているか？",
      "summary_ja": "プログラムで制御されたイベントに対し、ビデオ生成モデルがどれほど忠実に再現できるかを評価。"
    },
    {
      "id": "2610.03543",
      "title": "DuoMatching: Joint-Marginal Distribution Matching for Few-Step Video Generation",
      "abstract": "Streaming video generation has benefited from distribution matching distillation (DMD), which matches the joint distribution of video frames to a video teacher's approximation of the real video distribution. Although this joint matching mitigates drift during autoregressive rollouts, limitations remain in visual quality and semantic alignment. To address these limitations, we propose DuoMatching, a distribution matching framework that approximates the real video distribution through a unified joint-marginal formulation. On top of existing joint matching formulations, the additional marginal matching objective provides dedicated frame-level supervision from an image generator, transferring complementary visual and semantic priors from it. To apply this frame-level supervision in video generation, we introduce LatentBridge to resolve the latent representation mismatch between the video student and the image teacher. Latent Variation Sampling further distributes such frame-level supervision across distinct temporal segments, reducing redundancy. Experiments demonstrate that DuoMatching improves visual quality, composition, and semantic alignment while largely preserving motion dynamics. Human evaluations show overall preference rates above 80% against all evaluated baselines. The project page is available at https://johnzhan2023.github.io/DuoMatching/.",
      "upvotes": 69,
      "github_stars": 33,
      "github_repo": "https://github.com/JohnZhan2023/DuoMatching",
      "project_page": "https://johnzhan2023.github.io/DuoMatching/",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2610.03543",
      "arxiv_url": "https://arxiv.org/abs/2610.03543",
      "title_ja": "DuoMatching: 数ステップのビデオ生成のための結合・周辺分布マッチング",
      "summary_ja": "ビデオ全体の結合分布とフレーム単位の周辺分布を同時に適合させ、画質と意味的一致を両立。"
    },
    {
      "id": "2610.02381",
      "title": "Latent-MOPD: Latent Multi-Teacher On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student on the responses it generates. Existing LLM multi-teacher OPD transfers what specialists predict through their output distributions. We introduce Latent-MOPD, to our knowledge the first representation-level multi-teacher OPD method for LLMs. It integrates existing specialists through both their predictions and the hidden states used to compute them, without additional teacher training. To coordinate representation supervision from multiple specialists, we select late-layer targets according to the teacher-student relationship, bridge unequal hidden widths with a shared projection, and group updates by domain. Each teacher's supervision gradually shifts from hidden states to token predictions, with both channels using the same routed specialist. In our main same-family setting, Latent-MOPD outperforms the token-only, representation-only and uniform-averaging baselines on all nine benchmarks across math, code and logic. With the same parameter count as each teacher, the student also surpasses the per-benchmark best teacher on a majority of these benchmarks. With larger, separately developed cross-family teachers, Latent-MOPD outperforms both single-channel baselines on all benchmarks. A same-family all-layer representation-only control remains stable with domain-pure updates but collapses when teacher domains are interleaved within an update. Our results show that a single student can integrate capabilities from several specialists through both their output distributions and internal representations.",
      "upvotes": 68,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://arxiv.org/abs/2610.02381",
      "comments": 3,
      "org": "Zillow",
      "url": "https://huggingface.co/papers/2610.02381",
      "arxiv_url": "https://arxiv.org/abs/2610.02381",
      "title_ja": "Latent-MOPD: 潜在空間におけるマルチ教師オンポリシー蒸留",
      "summary_ja": "複数の専門家モデルの出力だけでなく、潜在的な中間状態も活用して生徒モデルを訓練。"
    },
    {
      "id": "2609.39378",
      "title": "EgoTools: Towards Tool-Centric Reasoning in Real-World Egocentric Videos",
      "abstract": "Real-world embodied tasks, from everyday activities to professional procedures, require agents to act under physical constraints while tracking evolving object and task states. Tool use sits at the heart of such tasks, as many everyday and professional activities are tool-mediated. Understanding them requires reasoning about affordances, hand-tool-object geometry, procedural progress, and causal effects on target objects. Yet despite strong performance on perception-oriented video tasks such as captioning and general video QA, current multimodal video models remain limited in this form of tool-centric embodied reasoning. Progress in this direction has been limited by the lack of real-world egocentric data and diagnostic benchmarks. To address this gap, we introduce EgoTools, the first comprehensive suite for egocentric tool-use understanding. It consists of two complementary components: EgoTools-Data, a large-scale corpus of 100 hours of tool-centric egocentric recordings with synchronized audio, dense captions, reasoning-heavy narrations, and supplementary 3D information; and EgoTools-Bench, a diagnostic benchmark of 1,000 QA pairs across four tracks that cover tool-use understanding from perception and geometry to procedure and causal reasoning. Experimental results show that current models still struggle to ground tool use in visual evidence: Gemini-3.1-Pro achieves 66.9% overall accuracy but only 51.7% on Perception & Grounding. Beyond evaluation, we validate EgoTools-Data as a training resource. On the full 1,000-question benchmark, full supervised fine-tuning improves Qwen3-VL-8B-Instruct from 50.0% to 60.9%, under strict source-video separation. Together, these results establish EgoTools as a unified resource for both training and diagnostic evaluation of real-world egocentric tool-use understanding.",
      "upvotes": 67,
      "github_stars": 9,
      "github_repo": "https://github.com/Ropedia/EgoTools",
      "project_page": "https://ropedia.github.io/egotools/",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2609.39378",
      "arxiv_url": "https://arxiv.org/abs/2609.39378",
      "title_ja": "EgoTools: 現実世界の主観視点ビデオにおけるツール中心の推論に向けて",
      "summary_ja": "現実世界の道具使用シーンを通じ、幾何学的制約や因果関係を推論する能力を評価する。"
    }
  ],
  "labs": [
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "優れた成果は常に優れた労働者を意味するか？",
      "summary_ja": "AIの導入によって、必ずしも労働者の能力向上が直接的な成果向上に結びつくわけではない可能性について検討する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Aleph Alpha's Kolibri-1 Brings Open German-English Reasoning to a Single GPU",
      "summary": "Aleph Alpha ships a 78B Mixture-of-Experts model with 3.46B active parameters, a 1M-token context, and Apache 2.0 weights focused on German and English.",
      "url": "https://alphasignal.ai/news/aleph-alpha-s-kolibri-1-brings-open-german-english-reasoning-to-a-single-gpu",
      "published": "2026-10-08T04:09:02+09:00",
      "title_ja": "Aleph Alphaが独英推論モデルKolibri-1を公開",
      "summary_ja": "独英に特化した78Bの混合専門家モデルで、100万トークンの文脈に対応し、単一GPUでの運用が可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-6 Turns ChatGPT Replies Into Interactive Apps for 1.2B Users",
      "summary": "OpenAI brings GPT-6 to all ChatGPT tiers with Intelligent UI, letting the model generate interactive widgets, charts, and mini-apps inside conversations.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-6-turns-chatgpt-replies-into-interactive-apps-for-1-2b-users",
      "published": "2026-10-08T03:05:04+09:00",
      "title_ja": "GPT-6がChatGPTの回答をインタラクティブなアプリへ進化",
      "summary_ja": "GPT-6のIntelligent UIにより、会話内で対話型ウィジェットや図表、ミニアプリを直接生成できる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Haiku 5.5 Slashes Costs 75% and Adds Adjustable Reasoning",
      "summary": "Anthropic's smallest model gets a 1M context window, adjustable effort, and roughly 75% lower cost per token than Haiku 4.5.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-haiku-5-5-slashes-costs-75-and-adds-adjustable-reasoning",
      "published": "2026-10-08T03:01:16+09:00",
      "title_ja": "AnthropicがClaude Haiku 5.5を発表、コストを75%削減",
      "summary_ja": "100万トークンの文脈窓と推論の調整機能を追加し、前モデルよりトークン単価を約75%低減させた。"
    },
    {
      "lab": "Hugging Face",
      "title": "Multimodal open d1 decision models for the edge",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/open-d1",
      "published": "2026-10-08T01:54:33+09:00",
      "title_ja": "エッジデバイス向けのマルチモーダル・オープンd1意思決定モデル",
      "summary_ja": "エッジ環境での利用を想定した、意思決定能力を持つマルチモーダルなオープンモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Kokoro-82M Clones Any Voice From a 3-Second Clip for Under $20",
      "summary": "A tiny 24MB adapter turns Kokoro-82M into a zero-shot voice cloner that enrolls a reference clip in under two seconds on CPU.",
      "url": "https://alphasignal.ai/news/kokoro-82m-clones-any-voice-from-a-3-second-clip-for-under-20",
      "published": "2026-10-08T01:00:10+09:00",
      "title_ja": "20ドル未満で声を複製できるKokoro-82M",
      "summary_ja": "24MBの小型アダプタにより、CPU上で3秒の音源から2秒以内にゼロショットの音声クローン作成が可能。"
    },
    {
      "lab": "Hugging Face",
      "title": "One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026",
      "published": "2026-10-07T21:45:31+09:00",
      "title_ja": "1つのモデルファミリーで2つの金メダル：IOIとIMO向けNemotronの微調整",
      "summary_ja": "Nemotronを微調整し、国際情報オリンピックと国際数学オリンピックの両方で金メダル級の結果を達成。"
    },
    {
      "lab": "OpenAI",
      "title": "Helping teens learn, plan, and shape the future of AI",
      "summary": "College Planner is coming to ChatGPT for Teens to help students manage college applications, alongside new flashcards, quizzes, and a teen AI council.",
      "url": "https://openai.com/index/teens-learn-and-plan",
      "published": "2026-10-07T21:00:00+09:00",
      "title_ja": "ティーンの学習と計画、AIの未来形成を支援",
      "summary_ja": "大学出願管理、フラッシュカード、クイズ機能、および十代のAI評議会をChatGPTに導入する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google Playground Turns Plain Text Into Playable Browser Games",
      "summary": "Google Labs rolled out Playground, a browser-based platform that turns text prompts into playable 2D and 3D games with no coding required.",
      "url": "https://alphasignal.ai/news/google-playground-turns-plain-text-into-playable-browser-games",
      "published": "2026-10-07T20:48:22+09:00",
      "title_ja": "Google Playground：テキストから遊べるブラウザゲームを作成",
      "summary_ja": "コードを書かずに、テキストプロンプトだけで2Dや3Dのブラウザゲームを生成して遊べるプラットフォーム。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Snowflake's Arctic Embed L Beats OpenAI and Google at Semantic Search",
      "summary": "Snowflake's open-source Arctic Embed L delivers 55.98 NDCG@10 on MTEB Retrieval, matching closed APIs from OpenAI and Cohere at a fraction of the size.",
      "url": "https://alphasignal.ai/news/snowflake-s-arctic-embed-l-beats-openai-and-google-at-semantic-search",
      "published": "2026-10-07T18:28:48+09:00",
      "title_ja": "SnowflakeのArctic Embed Lが意味検索でOpenAIらを超える",
      "summary_ja": "MTEB Retrievalで高いスコアを記録し、軽量ながらOpenAIなどのクローズドAPIに匹敵する性能を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Radisson Hotel Group brings hotel discovery into ChatGPT",
      "summary": "Radisson partnered with Accenture to build a ChatGPT plugin using OpenAI technology, helping travelers find, compare, and book hotels while planning their trips.",
      "url": "https://openai.com/index/radisson",
      "published": "2026-10-07T16:00:00+09:00",
      "title_ja": "ラディソン・ホテル・グループがChatGPTでの宿泊施設発見を導入",
      "summary_ja": "ChatGPTプラグインを通じて、旅行の計画中にホテルの検索、比較、予約を直接行えるようにする。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT-6 and Intelligent UI for everyone",
      "summary": "GPT‑6 is rolling out globally in ChatGPT with Intelligent UI, delivering faster responses with visuals and interactive experiences you can explore and use directly.",
      "url": "https://openai.com/index/gpt-6-for-everyone",
      "published": "2026-10-07T09:00:00+09:00",
      "title_ja": "すべての人にGPT-6とIntelligent UIを",
      "summary_ja": "視覚的でインタラクティブな体験を直接操作できるIntelligent UIを備えたGPT-6をグローバルに展開。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：オープンで軽量なマルチモーダル埋め込みモデル",
      "summary_ja": "マルチモーダルな情報を扱うことができる、オープンかつ軽量なGemma 2ベースの埋め込みモデル。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "地球規模の公衆衛生に向けたEarth AIの地理空間基盤モデルの活用",
      "summary_ja": "地球規模の公衆衛生課題を解決するために、Earth AIの惑星規模の地理空間基盤モデルを解放する。"
    },
    {
      "lab": "OpenAI",
      "title": "How Jump Trading is scaling quant research with ChatGPT",
      "summary": "Jump Trading uses OpenAI to expand quantitative research. See how longer-running AI workflows combine multiple data sources with human review.",
      "url": "https://openai.com/index/jump-trading",
      "published": "2026-10-06T21:00:00+09:00",
      "title_ja": "Jump TradingがChatGPTでクオンツ研究を拡張する方法",
      "summary_ja": "複数のデータソースと人間によるレビューを組み合わせ、AIワークフローを用いてクオンツ研究を効率化。"
    },
    {
      "lab": "OpenAI",
      "title": "Sharing AI progress in mathematics",
      "summary": "OpenAI publishes new results on open problems in mathematics from an internal frontier model and shares Lean proof formalizations and research details on GitHub.",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics",
      "published": "2026-10-06T21:00:00+09:00",
      "title_ja": "数学におけるAIの進歩を共有",
      "summary_ja": "数学の未解決問題に関する研究結果を公開し、Lean形式の証明や詳細な研究内容をGitHubで共有。"
    },
    {
      "lab": "OpenAI",
      "title": "Advancing computer use with Ironclad",
      "summary": "Learn how OpenAI and Ironclad are training and evaluating AI agents on complex contracting workflows to advance computer use for professional work.",
      "url": "https://openai.com/index/advancing-computer-use-with-ironclad",
      "published": "2026-10-06T19:00:00+09:00",
      "title_ja": "Ironcladと共にコンピュータ操作能力を向上",
      "summary_ja": "複雑な契約ワークフローを用いてAIエージェントを訓練・評価し、専門業務でのコンピュータ操作を自動化する。"
    },
    {
      "lab": "Apple ML",
      "title": "RISED: Rubrics for Agentic Multi-Environment Selection and Self-Distillation",
      "summary": "Training a single LLM agent jointly across diverse interactive environments has attracted increasing attention as a route to generalist agents. Existing curriculum and data-selection strategies often allocate training at the environment level or prioritize local reward-based signals, without explicitly considering relationships between current rollouts across environments for prompt-group selection. Meanwhile, as environments are learned at different rates, all-failure and all-success rollout groups can coexist within a batch, leaving those data without group-relative reward signals. Both…",
      "url": "https://machinelearning.apple.com/research/rised-multi-environment-selection",
      "published": "2026-10-06T09:00:00+09:00",
      "title_ja": "RISED：エージェントの環境選択と自己蒸留のためのルーブリック",
      "summary_ja": "複数の環境を跨ぐエージェント学習において、データ間の関係性を考慮した効率的なデータ選択と訓練手法を提案。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決・創発的問題",
      "summary_ja": "生成AIエージェントにおけるプライバシーとセキュリティの課題を、文脈的な視点から分析する。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "ユーザー主導のパーソナル・センシング・システムにおける境界の交渉",
      "summary_ja": "ユーザー自身が機械学習モデルを訓練・定義できるようにし、システムの設計権限を人々に与える手法の調査。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Agent Said It Was Done. The Database Disagreed.",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox",
      "published": "2026-10-04T07:56:48+09:00",
      "title_ja": "エージェントは完了と言ったが、データベースは否定した",
      "summary_ja": "AIエージェントの実行完了報告と、実際のデータベースの状態が一致しない不整合の課題について。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open-sourcing AstaBrief, the fast report-generation model in Asta",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/astabrief",
      "published": "2026-10-03T00:19:50+09:00",
      "title_ja": "AstaBriefをオープンソース化：高速なレポート生成モデル",
      "summary_ja": "Asta内で利用されている、高速なレポート作成を可能にするモデルAstaBriefを公開。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能なプライバシー保護学習に向けて",
      "summary_ja": "モバイルシステムにおいて、分散したデータからプライバシーを保護しつつ学習を行う手法の検討。"
    },
    {
      "lab": "Hugging Face",
      "title": "AutoSynthData: Generating Training Data for Enterprise Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata",
      "published": "2026-10-02T13:01:31+09:00",
      "title_ja": "AutoSynthData：企業向けエージェント用の学習データ生成",
      "summary_ja": "エンタープライズ環境で動作するAIエージェントを訓練するための合成データを自動生成する。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "言語識別能力が多言語音声モデルの言語学習を改善する",
      "summary_ja": "事前学習中に言語を識別する能力を強化することで、多言語モデル特有の性能ギャップを解消し精度を向上させる。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "拡散モデルにおける確信度の限界",
      "summary_ja": "離散拡散モデルにおいて、一度に複数のトークンを生成する際のトークン間の依存関係と分布の一致に関する理論的分析。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的MLエンジニアリングに強力なエージェント用フレームワークはどこまで必要か？",
      "summary_ja": "複雑なオーケストレーターよりも、実行環境へ直接アクセスできるシンプルなコーディングエージェントの有用性を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "RLTL;DR: Self-Improvement by Internalizing Self-Generated Feedback",
      "summary": "The common paradigm of reinforcement learning with verifiable rewards (RLVR) is to let agents make multiple attempts at a task, and optimize towards the successful ones. This becomes problematic in the realms of self-improvement, where tasks are so difficult that the agent has a low or even no chance of success, and where there are no teacher models or example solutions to distill from. In this paper, we introduce RLTL;DR. After each failed attempt, we show the policy the verifier outputs and let it write its own feedback, in the form of a single TL;DR insight. The next rollout is conditioned…",
      "url": "https://machinelearning.apple.com/research/rltl-dr-self-improvement",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "RLTL;DR：自己生成フィードバックの内部化による自己改善",
      "summary_ja": "失敗した試行から自ら短い教訓（TL;DR）を書き、それを次回の条件として学習することで困難な課題を克服する。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "次世代の最先端知能を象徴する、新たなGeminiモデル「Argon」の紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの導入",
      "summary_ja": "生物学的機能を維持したまま、AIが生成したタンパク質に電子透かしを埋め込む技術の概念実証。"
    }
  ]
};
