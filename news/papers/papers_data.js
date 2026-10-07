window.papersData = {
  "updated_at": "2026-10-07 10:15 JST",
  "arxiv": [
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
    },
    {
      "id": "2610.03665",
      "title": "Pivot-SD: Efficient Self-Distillation for Masked Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.03665",
      "pdf": "https://arxiv.org/pdf/2610.03665",
      "authors": [
        "Seo Hyun Kim",
        "Sunwoo Hong",
        "Younwoo Choi",
        "Chen-Hao Chao",
        "Se-Young Yun",
        "Rahul G. Krishnan"
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
      "hf_upvotes": 50,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲50"
      ],
      "headline": "情報の不確実性を大幅に減らす「ピボット」に絞った自己蒸留手法",
      "what": "マスク型拡散言語モデル（dLMs）において、回答の方向性を決定づける重要なトークン（ピボット）を選択的に学習する「Pivot-SD」です。情報利得を指標としてピボットを特定し、成功例からは学習、失敗例からは対照的に学習を避ける手法をとります。",
      "enables": "LLaDA-8B-Instructにおいて、全系列を学習するSFTや強化学習ベースラインを上回る効率で、数学やコードの性能を向上させました。",
      "why_it_matters": "拡散モデルにおける「どのステップやトークンが結果に影響を与えたか」というクレジット割り当て問題を、情報理論的なアプローチで解決しました。",
      "tags": [
        "LLM",
        "拡散モデル",
        "自己蒸留"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.02304",
      "title": "SimuVerity: Benchmarking Agents for Engineering-Grade Simulink Model Generation",
      "url": "https://arxiv.org/abs/2610.02304",
      "pdf": "https://arxiv.org/pdf/2610.02304",
      "authors": [
        "Ruiqi Zhang",
        "Jiahao Wang",
        "Mingxuan Li",
        "Haichen Luo",
        "Chaoting Wang",
        "Guoyu Mou"
      ],
      "categories": [
        "cs.SE",
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "エンジニアリング要件への適合性を評価するSimulinkモデル生成ベンチマーク",
      "what": "単なるコンパイルの可否や構造の類似性ではなく、エンジニアリング要件を満足するかを評価する101個のタスクからなる「SimuVerity」です。6つの次元（精度、動的応答、制御の整合性など）で階層的に評価を行います。",
      "enables": "最新のAIエージェントを評価したところ、総合スコアが最大でも42.86に留まり、物理的な動作要件を満たすことの難しさを浮き彫りにしました。",
      "why_it_matters": "工業製品の開発に不可欠なSimulinkモデル生成において、実務レベルの品質と信頼性を測定するための体系的な基準を確立しました。",
      "tags": [
        "ソフトウェア工学",
        "エージェント",
        "Simulink"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.02298",
      "title": "EditHero: A Benchmark for Long-Horizon Part-Level 3D Editing and Vibe Modeling",
      "url": "https://arxiv.org/abs/2610.02298",
      "pdf": "https://arxiv.org/pdf/2610.02298",
      "authors": [
        "Ruihan Yu",
        "Yu-Ju Tsai",
        "Muyao Niu",
        "Runyi Li",
        "Lian Fu",
        "Hanqing Liu"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 45,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲45"
      ],
      "headline": "3Dアセットの反復的なパーツ編集を評価するベンチマーク「EditHero」",
      "what": "一連の自然言語指示に従って、3Dモデルの幾何とテクスチャをパーツ単位で逐次的に編集していく能力を測るベンチマークです。指示に従って変更した部分以外が不当に変更されていないかを厳密にチェックします。",
      "enables": "非エージェント的な全体再生成手法よりも、LLM/VLMを用いたボトムアップなコード書き換え手法の方が、元の形状を維持しつつ正確に編集できることを明らかにしました。",
      "why_it_matters": "単発の編集ではなく、実際の制作フローに近い「長期にわたる反復的な修正」という、より実用的な視点での3D編集評価を可能にしました。",
      "tags": [
        "3Dビジョン",
        "ベンチマーク",
        "LLM"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03632",
      "title": "World Embedding Benchmark",
      "url": "https://arxiv.org/abs/2610.03632",
      "pdf": "https://arxiv.org/pdf/2610.03632",
      "authors": [
        "Yiqi Liu",
        "Ruifeng Yuan",
        "Yang Wang",
        "Long Li",
        "Fengyu Cai",
        "Hou Pong Chan"
      ],
      "categories": [
        "cs.CV",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 41,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲41"
      ],
      "headline": "ビデオ表現が物理情報をどの程度保持しているかを測定するベンチマーク",
      "what": "流体力学、剛体力学、光学など80の物理シミュレーションファミリーからなる「World Embedding Benchmark」です。ビデオ埋め込みからの物理量回帰、クロスモーダル検索、ペア分類の3つのタスクを通じて物理的情報の保持度を評価します。",
      "enables": "物理情報の「検索（Alignment）」と「復元（Recoverability）」にはトレードオフがあることを明らかにし、RAG（検索拡張生成）による動画生成の品質向上を実証しました。",
      "why_it_matters": "世界モデルや動画生成モデルが「物理法則を理解しているか」を定量的に評価し、改善するための基盤を提供しました。",
      "tags": [
        "世界モデル",
        "ベンチマーク",
        "物理シミュレーション"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03367",
      "title": "Multilingual GSM-Symbolic: What determines capability transfer across languages?",
      "url": "https://arxiv.org/abs/2610.03367",
      "pdf": "https://arxiv.org/pdf/2610.03367",
      "authors": [
        "Kenneth Enevoldsen",
        "Riley Herchert",
        "Sofie Mosegaard",
        "Dan Saattrup Smart",
        "Simon Enni",
        "Isaac Chung"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 40,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲40"
      ],
      "headline": "言語間での能力移転を規定する要因を明らかにした多言語数学データセット",
      "what": "シンボリックなテンプレートを用いて数百万通りのバリエーションを生成可能な、15言語・3万ペアの数学問題データセット「Multilingual GSM-Symbolic」です。言語間の性能差を規定する要因（モデルサイズ、リソース量、類型論的距離など）を定量的・統合的に分析します。",
      "enables": "言語間の性能差の92%を説明可能なフレームワークを構築し、未学習の言語における性能を数パーセントの誤差で予測することを可能にしました。",
      "why_it_matters": "低リソース言語においてモデルサイズや推論能力がどのように性能差を埋めるかを数式化し、効率的な多言語展開の指針を提供しました。",
      "tags": [
        "LLM",
        "多言語",
        "数学推論"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    },
    {
      "id": "2610.03195",
      "title": "Source Preference in the Wild: How LLM Agents Favor Items by Source, and How to Reduce It",
      "url": "https://arxiv.org/abs/2610.03195",
      "pdf": "https://arxiv.org/pdf/2610.03195",
      "authors": [
        "Jonghyun Song",
        "Haewon Park",
        "Jeonghoon Shim",
        "Woojung Song",
        "Yohan Jo"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "LLMエージェントが情報の「提供元」に抱くバイアスの特定と軽減",
      "what": "LLMエージェントが検索結果から商品やホテルを選ぶ際、特定のサイト（ソース）を過度に優先するバイアスがあるかを調査した研究です。情報の欠落や、訓練時のショートカット学習が原因であることを特定し、対策を提案しています。",
      "enables": "ソース名を隠したり、不足情報を提供したりすることで、品質の低い選択肢をソースの知名度だけで選んでしまう傾向を大幅に軽減できることを示しました。",
      "why_it_matters": "エージェントがユーザーの代理として意思決定を行う際、特定のプラットフォームを不当に優遇しない、公平な推薦を実現するための重要な知見です。",
      "tags": [
        "LLMエージェント",
        "バイアス",
        "検索"
      ],
      "fetched_at": "2026-10-06T11:07:38.445701+09:00"
    }
  ],
  "hf": [
    {
      "id": "2609.39102",
      "title": "False Frontiers: Diagnosing and Mitigating Co-Cheating in Self-Evolving Search Agents",
      "abstract": "Self-evolving search agents build their own training curricula by jointly optimizing a proposer that generates questions and a solver that answers them. This closed loop introduces a failure mode we call co-cheating: the proposer and solver increasingly agree on shared errors, so internal reward improves without a matching gain in external correctness. A post-hoc audit against source evidence shows co-cheating growing more severe over successive rounds of self-evolution, with pseudo-label correctness stagnating or declining even as the in-loop training signal improves. The most direct mitigation is to verify proposals before training: we introduce multi-sample verification (MSV), which queries the same model three times with the source and three times without it to decide task admission and replace unreliable pseudo-labels. MSV partially reduces false agreement but leaves substantial residual co-cheating and costs six extra labeler generations per candidate. These limitations motivate CrossFit, our main method: it partitions the proposer's source documents into groups A and B; questions generated from A are scored by an auxiliary solver trained only on B, and vice versa. The cross-fitted agreement determines proposer reward, so a same-source pseudo-label cannot be reproduced through the feedback solver, while the original solver's update rule is unchanged. Rerunning the loop with Qwen3.5-4B and Qwen3.5-9B, MSV reduces false-agreement mass from 6.1% to 5.7% and from 8.8% to 7.2%, whereas CrossFit reduces it to 3.0% and 3.7%. Replaying identical proposals with source-excluded feedback further reduces false agreement to 0.4% and 0.1%, isolating feedback ancestry from curriculum changes. Across seven downstream search benchmarks, CrossFit improves average performance over standard coupled self-evolution by 8.8 and 8.4 points and over Search-R1 by 8.7 and 7.8 points at 4B and 9B.",
      "upvotes": 670,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Rutgers University",
      "url": "https://huggingface.co/papers/2609.39102",
      "arxiv_url": "https://arxiv.org/abs/2609.39102",
      "title_ja": "偽りのフロンティア：自己進化型検索エージェントにおける共謀の診断と緩和",
      "summary_ja": "自己進化エージェントの学習で発生する、正解を伴わず内部報酬だけが高まる「共謀」現象を特定。複数サンプル検証（MSV）によりこの偽りの進歩を緩和できる。"
    },
    {
      "id": "2609.36484",
      "title": "The Teacher Is a Direction, Not a Destination: Extrapolating RL-Induced Representation Residuals in On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student to match the teacher's next-token distributions on the student's own trajectories and has yielded substantial empirical gains. Generalized variants allow the student to surpass the teacher by extrapolating an implicit reward in output space. The language-model head, however, attenuates this change anisotropically: much of the change encoded in the teacher's hidden states reaches the logits at a small fraction of its weight, and the sampled-token log-probability ratios on which output-space extrapolation relies inject noise that the extrapolation amplifies, making training unstable. We observe that reinforcement learning (RL) shifts a model's internal representations relative to its base checkpoint, and that the direction of this shift can be measured at every layer. Motivated by this observation, we propose RIDE (RL-Induced Direction Extrapolation), which extrapolates the RL-induced change directly in representation space: at every layer and token position, RIDE computes the residual between the teacher and its pre-RL checkpoint and regresses the student's hidden states toward targets displaced beyond the teacher along this residual. Conditioned on a sampled trajectory, this regression is equivalent to maximizing a linear directional reward defined by the residual under a quadratic penalty centered at the teacher, which makes explicit how the objective moves the student along the RL-induced direction while limiting its deviation from the teacher. Across four base/RL-teacher pairs spanning different scales, architectures, and pre-training lineages, RIDE approaches or exceeds the RL-trained teacher on every pair and is the only method whose mean does so, and it consistently outperforms output-space extrapolation, which degrades the student whenever the teacher is close to its base. Project page: https://github.com/xixixixixxxx/RIDE.",
      "upvotes": 533,
      "github_stars": 6,
      "github_repo": "https://github.com/xixixixixxxx/RIDE",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2609.36484",
      "arxiv_url": "https://arxiv.org/abs/2609.36484",
      "title_ja": "教師は目的地ではなく方向：オンポリシー蒸留におけるRL誘導表現残差の補外",
      "summary_ja": "RLによる内部状態の変化を「方向」として捉え補外することで、出力空間の不安定性を回避し、生徒モデルが教師モデルを安定して超える手法を提案。"
    },
    {
      "id": "2609.38426",
      "title": "LoopVL: Recurrent Visual Intelligence",
      "abstract": "We introduce LoopVL to study whether Loop Transformers can be effectively extended to vision- language models. LoopVL combines Module-Loop and Model-Loop computation to iteratively update a unified vision-language state through shared modules. We train LoopVL from scratch through language pre-training, multimodal training, and post-training. LoopVL outperforms a range of similarly sized and larger non-recurrent models on multimodal understanding and visual reasoning benchmarks. We also observe Visual Aha Moments in LoopVL, characterized by pronounced shifts in visual attention across loops. LoopVL provides practical evidence for recurrent vision-language modeling and offers an intuitive perspective on how shared parameters can support deeper multimodal computation over continuously evolving visual-language states.",
      "upvotes": 469,
      "github_stars": 128,
      "github_repo": "https://github.com/Tier-Flow/LoopVL",
      "project_page": "https://huggingface.co/TierFlow/LoopVL",
      "comments": 2,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2609.38426",
      "arxiv_url": "https://arxiv.org/abs/2609.38426",
      "title_ja": "LoopVL：回帰型視覚知能",
      "summary_ja": "ループ型TransformerをVLMに拡張し、視覚・言語状態を反復的に更新。軽量ながら大規模モデルを凌駕する性能を示し、ループ間の視覚的注目の変化も確認。"
    },
    {
      "id": "2609.38721",
      "title": "UniEvo-VL: An On-policy Self-Distillation Training Recipe for Multimodal Model Self-improvement",
      "abstract": "Modern multimodal models bring generation and understanding into a single unified system, which enables them to provide and learn from their own feedback. Motivated by this unified capacity, we introduce UniEvo-VL, a self-evolving framework for multimodal models to learn from this constructive self-correction feedback during test-time compute. Instead of relying on a separate, often larger, teacher, we leverage their self-critiques as privileged information and ask a single multimodal model to act as both teacher and student with different contexts. The student only sees the vanilla question, while the teacher conditions on the privileged critique. Then training minimizes the per-state divergence between their denoising diffusion distributions over the student's own sampling trajectories. Experiments demonstrate that UniEvo-VL improves the image generation capabilities of multimodal models, while maintaining their sensitivity to additional reflection information. Specifically, we build on top of the open-source Qwen-image-2512 and observe a significant performance gain from 0.747 to 0.808 on GenEval and from 32.97 to 35.53 on GenEval2 Soft-TIFA. Moreover, attempts with more powerful external critics (e.g., GPT5.6-Luna) show that multimodal models with strong judge capabilities can anticipate a higher self-evolving ceiling. Last but not least, mixed text-rendering outcomes show that our self-improvements may not be uniform across different tasks. Our study aims to shed light on the current hot recursive self-improvement research line to enhance the user experience when using multimodal models without external supervision or guidance.",
      "upvotes": 292,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Stanford NLP",
      "url": "https://huggingface.co/papers/2609.38721",
      "arxiv_url": "https://arxiv.org/abs/2609.38721",
      "title_ja": "UniEvo-VL：マルチモーダルモデル自己改善のためのオンポリシー自己蒸留レシピ",
      "summary_ja": "外部モデルに頼らず、自身の自己批判を特権情報として活用。テスト時に自身を教師・生徒の両役として学習させることで、マルチモーダルモデルの性能を自己改善させる。"
    },
    {
      "id": "2610.01780",
      "title": "RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations",
      "abstract": "A companion that talks with a person for months should come to understand them. It should remember what they said, infer who they are, and know when the past bears on the message in front of it. Testing this requires a real person's record, and such records are private, so benchmarks generate the person and the questions and settle in advance what matters. We release \\bench, ten real relationships with an AI companion: 27,218 messages over up to 120 days, released as the conversation and four files derived from it, a profile, a persona, a chat ground truth and a question set, each citing the messages it rests on. Every chat label carries the reasoning trace that produced it, checked stage by stage against the conversation. Three findings follow. First, the past is rarely needed and far away. Pooled measures mislead: a recency window finds the required message for 95.9\\% of probes and 2.2\\% of those that need memory, and at the natural rate 96\\% of the gain from supplying recorded evidence comes from messages that need none. Second, no detector we tried can tell when memory is needed on real messages, authored questions over the same histories leak the cue, and labeling the same messages as memories raises their use by ten to fourteen points. Third, three agent systems reconstruct the persona with the same F1 at a 31-fold difference in cost.",
      "upvotes": 267,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Quis Lab",
      "url": "https://huggingface.co/papers/2610.01780",
      "arxiv_url": "https://arxiv.org/abs/2610.01780",
      "title_ja": "RealCompanion：長期的な現実世界の会話に基づく推論からの人間理解ベンチマーク",
      "summary_ja": "AIコンパニオンとの最大120日間の実会話データを含むベンチマーク。個人の性格や過去の発言を推論し、根拠に基づいた一貫性のある理解ができるかを評価可能。"
    },
    {
      "id": "2610.01762",
      "title": "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction",
      "abstract": "Streaming video LLMs must retain evidence before its relevance to future tasks is known and respond when sufficient evidence becomes available. The challenge is to form reusable factual memory without compromising real-time perception. We introduce OneStreamer, which jointly learns query-independent evidence recording and task response through a shared proactive generation process. Its Proactive Hierarchical Caption Memory (PHCM) produces time-grounded local-detail captions and summaries of completed events. Streaming caption targets supervise the interpretation of observed video prefixes during training. At inference, model-generated records complement a recent visual window, providing reusable factual context without revisiting historical visual features. Proactive State Transition Learning (PSTL) reduces the dominance of repeated waiting states by preserving supervision at all output anchors and selecting representative state-change and state-persistence tokens. We further develop a streaming data synthesis pipeline that aligns output content and timing with available evidence. Combining the resulting streaming captions and QA with cleaned open-source data yields OneStreamer-1M, a broad-coverage streaming video interaction dataset with over one million records spanning diverse tasks. Our 4B model achieves the best results among the compared methods across all eight evaluated streaming video understanding benchmarks. Ablations show that retaining generated captions improves historical QA without degrading real-time perception. PSTL also outperforms dense state supervision while supervising only 27.5% of annotated state tokens. Together, these results support proactive generation as a shared learning interface connecting perception, memory formation, and timely response in streaming video interaction.",
      "upvotes": 229,
      "github_stars": 157,
      "github_repo": "https://github.com/MCG-NJU/OneStreamer",
      "project_page": "https://mcg-nju.github.io/OneStreamer",
      "comments": 2,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2610.01762",
      "arxiv_url": "https://arxiv.org/abs/2610.01762",
      "title_ja": "OneStreamer：ストリーミングビデオ対話における知覚、メモリ、能動的応答の統合",
      "summary_ja": "階層的なキャプチャメモリを共有プロセスで生成。実時間の知覚を損なわずに、過去のイベントの要約と現在の視覚情報を組み合わせて能動的な応答を可能にする。"
    },
    {
      "id": "2609.34563",
      "title": "Rethinking Latent Visual Reasoning: Grounding Latent Reasoning in Visual Evidence",
      "abstract": "Latent visual reasoning (LVR) enables multimodal large language models (MLLMs) to perform intermediate computation in continuous latent tokens rather than expressing every reasoning step in words. However, unlike textual CoT, latent reasoning is not directly observable, making it difficult to supervise what latent tokens learn. In this work, we first conduct a thorough analysis of latent-token behavior and identify a latent evidence-credit gap: latent tokens respond only weakly to image perturbations that alter the correct answer. We hypothesize that this issue stems from the lack of explicit supervision during GRPO training. These findings suggest that a final-answer reward provides too little guidance on what visual evidence to preserve or how credit should be assigned across latent tokens. To bridge this gap, we propose ReaLVR, which brings visual-evidence supervision to the model's own free-running latent trajectories. ReaLVR contrasts correct and model-generated wrong answers to determine where stronger supervision is needed, and relevant and mismatched visual evidence to specify what to preserve. Across three model families, ReaLVR consistently outperforms evaluated LVR baselines, achieving the highest five-task average of 63.7% on Qwen2.5-VL-7B. Crucially, we are the first to scale visual reasoning in latent space, showing that our framework continues to deliver robust improvements at frontier model scales up to 235B. Further analyses show more question-sensitive latent-token positions, stronger alignment with relevant visual regions, and greater fixed-context dependence on the most attended latent tokens.",
      "upvotes": 217,
      "github_stars": 40,
      "github_repo": "https://github.com/xixiaouab/ReaLVR-code",
      "project_page": "https://xixiaouab.github.io/projects/ReaLVR/",
      "comments": 2,
      "org": "Amazon",
      "url": "https://huggingface.co/papers/2609.34563",
      "arxiv_url": "https://arxiv.org/abs/2609.34563",
      "title_ja": "潜在的視覚推論の再考：潜在推論を視覚的証拠に定着させる",
      "summary_ja": "潜在トークンを用いた視覚推論の弱点を分析。GRPO学習中に視覚的証拠への敏感さを高める補助報酬を導入することで、思考プロセスを強化し精度を向上させる。"
    },
    {
      "id": "2609.35259",
      "title": "On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics",
      "abstract": "On-policy learning has been argued to reduce catastrophic forgetting, produce sparser parameter updates, and improve generalisation. However, existing comparisons between supervised fine-tuning and reinforcement learning vary many factors simultaneously, making the contribution of rollout policy difficult to isolate. We study the effect of rollout policy in a controlled strong-to-weak distillation setting, by independently varying rollout policy, token-level KL direction, and learning rate across the Llama3 and Qwen2.5 model families and reasoning tasks spanning scientific, medical, and arithmetic domains. Our analysis reveals a nuanced picture of distillation dynamics in which rollout policy does not necessarily play a central role. Instead, token-level KL direction more clearly shapes task performance and output coverage, while learning rate governs forgetting and update sparsity. Analysis of KL gradients and experiments along a continuous student-teacher rollout-policy spectrum explain this pattern: forward KL is remarkably robust to rollout policy, with its performance stable and strong despite changes to the rollout policy, whereas reverse KL is substantially more sensitive and favours student-generated rollouts. On-policy data nevertheless improves generalisation to harder variants of the Countdown arithmetic task under both KL directions, although this advantage does not reliably persist after subsequent RLVR. Our broader conclusions remain robust to removing gradient clipping, using sampled KL estimators, and training on tasks requiring longer reasoning chains. Overall, our results challenge the view that on-policy rollouts are inherently preferable and show that their value depends critically on the objective, evaluation setting, and optimisation hyperparameters.",
      "upvotes": 194,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://antoninbrthn.github.io/on-off-policy-distillation/",
      "comments": 3,
      "org": "University of Cambridge",
      "url": "https://huggingface.co/papers/2609.35259",
      "arxiv_url": "https://arxiv.org/abs/2609.35259",
      "title_ja": "オンポリシーかオフポリシーか？蒸留ダイナミクスの系統的調査",
      "summary_ja": "LLMの強から弱への蒸留において、ロールアウトポリシーの影響を多角的に調査。タスクや学習率、モデルの種類に応じた最適な学習手法の使い分けを明らかにした。"
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
      "title_ja": "GraphForge：グラフに裏打ちされたワークスペース合成による実務エージェントの訓練",
      "summary_ja": "実ファイルとそれらに基づく証拠グラフを用いて、検証可能なタスクとワークスペースを自動生成。多様で現実的なデータにより実務エージェントの訓練を可能にする。"
    },
    {
      "id": "2609.38288",
      "title": "AREX-2: Advancing Self-Improving Agents through Long-Horizon Reflective Tasks",
      "abstract": "We present AREX-2, an effort to advance the self-improving capability of LLM agents, which we define as the ability to iteratively refine a solution at test time. This ability rests on two complementary capabilities: reflection, which produces a solution better than the current one, and long-horizon execution, which keeps the iteration effective over many rounds. We hypothesize that both capabilities are domain-agnostic, and can therefore be learned in scenarios that are well suited for supervision. Accordingly, we synthesize long-horizon improvement trajectories from machine learning and algorithmic programming tasks, two domains that offer verifiable feedback and reward sustained iteration. Trained on this data, our agent, built on Qwen3.8-27B, achieves strong results on MLE-bench Lite (81.8) and Frontier-CS (70.7), transfers to deep research with 84.0 on BrowseComp, 52.6 on HLE, 92.2 on GAIA, and 93.8 on DeepSearchQA, and keeps improving as its budget of rounds grows. These results show that long-horizon reflective data is an effective route toward self-improving agents.",
      "upvotes": 139,
      "github_stars": 31,
      "github_repo": "https://github.com/VectorSpaceLab/AREX-2",
      "project_page": "https://github.com/VectorSpaceLab/AREX-2",
      "comments": 3,
      "org": "Beijing Academy of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2609.38288",
      "arxiv_url": "https://arxiv.org/abs/2609.38288",
      "title_ja": "AREX-2：長期的な反映タスクを通じた自己改善エージェントの進展",
      "summary_ja": "推論時の反復的な解法修正能力を高めるため、検証可能なフィードバックが得られるプログラミング等の領域から長期的な改善軌跡を合成し、エージェントを学習させる。"
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
      "title_ja": "適応的報酬ルーティング：前方プロセスRLによる音響・映像同時拡散のための動的マルチ報酬最適化",
      "summary_ja": "拡散モデルの学習中に、報酬を適用すべき箇所と重みを動的に調整。音と映像の質や同期性を効率的に最適化し、マルチモーダルな生成品質を向上させる。"
    },
    {
      "id": "2609.39982",
      "title": "Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents",
      "abstract": "Terminal agents act through stochastic model generations, yet the ability to generate a useful action does not ensure its reliable execution. A poor command (e.g., wrong package install) can change the environment in ways that hinder subsequent progress, even when the model could generate a better alternative. We investigate whether allocating test-time compute at the model-harness boundary can improve action reliability and trajectory success, and what makes this allocation effective. To study these questions, we introduce Mid-Harness, which samples and verifies candidate actions before forwarding one for execution, while keeping the generator and harness unchanged. With a TMAX-9B generator, more action sampling yields little benefit under weak verification, whereas a capable verifier can exploit useful alternatives from the same generator. On TerminalBench-Lite, a GPT-5.6 Sol verifier raises Pass@1 from 50.00% for the base agent to 68.03% with 8 sampled actions. When the same TMAX-9B model serves as the verifier, pairwise verification performs best among the evaluated verification mechanisms. Distilling responses from the stronger verifier into TMAX-9B further improves Pass@1, while leaving the action generator unchanged. With TMAX-9B on TerminalBench-Lite, combining action and trajectory scaling reaches higher success at lower estimated token cost than generating more trajectories alone. Mid-Harness also improves performance across additional models, benchmarks, and harnesses. These findings identify action scaling as a promising target for test-time compute scaling in terminal agents.",
      "upvotes": 116,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://byungkwanlee.github.io/MidHarness-page/",
      "comments": 5,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2609.39982",
      "arxiv_url": "https://arxiv.org/abs/2609.39982",
      "title_ja": "Mid-Harness：端末エージェントにおけるモデルとハーネス間のアクションスケーリング",
      "summary_ja": "実行前にアクション候補をサンプリング・検証する中間層を導入。生成モデルや環境を変えずに、テスト時の計算量を活用してエージェントの行動の信頼性と成功率を高める。"
    },
    {
      "id": "2610.05608",
      "title": "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation",
      "abstract": "We present Kandinsky 6.0 Video, a family of foundation diffusion models for synchronized text-to-audio-video generation, comprising Kandinsky 6.0 Video Lite (3B parameters) and Kandinsky 6.0 Video Pro (29B parameters). Both models generate 5-second video clips with synchronized 44 kHz audio, including lip-sync, in text-to-audio-video (T2AV) and image-to-audio-video (I2AV) modes; a built-in super-resolution model raises the output resolution to Full-HD (1920times1080). Building on the video generation capabilities of Kandinsky 5.0, Kandinsky 6.0 Video employs a dual-stream CrossDiT architecture that connects a pretrained video stream and a newly trained audio stream through bidirectional cross-attention for temporal and semantic alignment. Our continuous pretraining strategy first trains the audio stream from scratch on large-scale audio corpora and then trains both streams jointly on paired audio-video data while preserving unimodal fidelity; pretraining is followed by supervised fine-tuning, reinforcement-learning-based post-training, and distillation. In side-by-side human evaluation, Kandinsky 6.0 Video Pro clearly outperforms its predecessor, Kandinsky 5.0 Video Pro, and remains competitive with leading audio-video generation models, particularly in speech quality. To accelerate open research and deployment in multimedia generation, we release the code, model checkpoints, and diffusers integration under the MIT license.",
      "upvotes": 113,
      "github_stars": 119,
      "github_repo": "https://github.com/kandinskylab/kandinsky-6",
      "project_page": "https://kandinskylab.ai/",
      "comments": 2,
      "org": "Kandinsky Lab",
      "url": "https://huggingface.co/papers/2610.05608",
      "arxiv_url": "https://arxiv.org/abs/2610.05608",
      "title_ja": "Kandinsky 6.0 Video：同期したビデオ・オーディオ生成のための基盤モデル",
      "summary_ja": "テキストや画像から音響付き動画を生成する29B規模のモデル。二流のCrossDiT構造により、高解像度な映像と44kHzの音声を高い同期精度で生成可能。"
    },
    {
      "id": "2609.40340",
      "title": "EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery",
      "abstract": "Evolutionary search with large language models (LLMs) can stall when progress requires external knowledge the model lacks. Supplying relevant documents helps, but simply adding web search tool can keep returning the same pages as solutions change. We introduce EvoDuet, a bi-level optimization method that co-evolves solutions and search queries with fixed model parameters. At each iteration, a retrieval gate lets the LLM assess its knowledge gap and choose to retrieve new documents, reuse stored ones, or proceed without them. An inner loop refines queries and ranks documents by the solution scores they are predicted to yield; an outer loop generates candidates in parallel from these documents and records the evaluated outcomes for later searches. Across 21 optimization tasks with one candidate per iteration, EvoDuet raises OpenEvolve's normalized discovery gain from 74.1% to 78.0% with GPT-5.6-Luna and from 61.3% to 82.3% with Gemini-3.8-Flash, whereas Qwen3.5-9B does not benefit. Our best runs surpass the previously reported best scores on eight tasks, including Swap Reduction on Q20 and Rosetta, and match them on three more. EvoDuet also improves with other scaffolds (e.g., Top-K, EvoX) on Sums/Diffs and Denoising, demonstrating its applicability across evolutionary search scaffolds.",
      "upvotes": 109,
      "github_stars": 4,
      "github_repo": "https://github.com/Open-Galapagos/EvoDuet",
      "project_page": "https://open-galapagos.github.io/evoduet_project_page/",
      "comments": 1,
      "org": "Minnesota NLP",
      "url": "https://huggingface.co/papers/2609.40340",
      "arxiv_url": "https://arxiv.org/abs/2609.40340",
      "title_ja": "EvoDuet：科学的発見のためのウェブ検索とタスク解決の二段階共進化",
      "summary_ja": "モデルの知識不足を補うため、解法と検索クエリを同時に進化させる手法。必要な時だけ検索し、予測される貢献度に基づき文書をランク付けすることで効率的に課題を解決。"
    },
    {
      "id": "2609.38879",
      "title": "Does Learning Protein Folding Generalize to Broader Reasoning?",
      "abstract": "Large language models rely heavily on human text, which often conveys surface answers rather than the spatial and structural logic behind them. Protein folding is a natural testbed, because one solved structure yields thousands of exactly checkable spatial and topological statements. We ask: can learning to fold proteins teach general models reusable reasoning capabilities? To answer this, we build FoldingCorpus, a protein-derived question-answer dataset, and Fold2Reason, a recipe that post-trains on it through two complementary signals: discrete structural answers predicted via the model's native language head, and continuous 3D geometry decoded from the same shared representations. On FoldBench, Fold2Reason achieves structure prediction scores 2.7 to 3.5 times those of Qwen3.5-9B. Beyond protein structure prediction, it improves performance on all 10 benchmarks spanning spatial, graph, scientific, and general reasoning, raising macro-average accuracy from 45.09% to 48.33% (+3.23 pp), with positive gains on all 10 benchmarks, while matched controls built from random, synthetic, and shuffled structure yield substantially smaller or negative gains. Our work shows that non-linguistic, structure-dense scientific data can systematically improve broad reasoning in language models, making a solved scientific problem a practical source of post-training supervision.",
      "upvotes": 105,
      "github_stars": 28,
      "github_repo": "https://github.com/GENTEL-lab/Fold2Reason",
      "project_page": "",
      "comments": 4,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2609.38879",
      "arxiv_url": "https://arxiv.org/abs/2609.38879",
      "title_ja": "タンパク質折り畳みの学習は広範な推論に一般化するか？",
      "summary_ja": "タンパク質構造予測の学習を通じて、モデルに空間的・論理的推論能力を習得させる。言語と3D幾何学の両面で学習することで、科学的推論ベンチマークの性能が向上。"
    },
    {
      "id": "2610.01509",
      "title": "Sharpening Tax in Post-Training",
      "abstract": "An emerging hypothesis about reinforcement learning (RL) post-training of large language models (LLMs) is that it merely sharpens existing behaviors of a base model, improving single-shot accuracy at the cost of solution coverage. Although this trade-off has been observed in math and coding tasks, it need not extend to agentic tasks, where multi-turn tool use and interaction may require capabilities newly acquired during post-training. Our surprising finding is that pre-trained LLMs, equipped with a light inference harness, can serve as capable agents. Despite far lower accuracy (pass@1), they often surpass their post-trained counterparts in solution coverage (pass@K) given a sufficient test-time budget. We further analyze the underlying mechanism and show that post-training pushes tasks toward two extremes, always solved or never solved, and thereby improves sampling efficiency and consistency at the cost of solution coverage. To measure this cost, we propose Sharpening Tax, a diagnostic metric that quantifies the loss in test-time scalability after post-training. Across 14 base/post-trained model pairs from four families and three agentic benchmarks (42 cases in total), the tax is prevalent in most settings, can be estimated from a few rollouts, and correlates well with other metrics. Finally, we present posterior-tempered group sampling (PTGS), a simple plug-and-play Bayesian sampler that adapts the sampling temperature per prompt to its estimated difficulty. Applied during RL training in two agentic environments, PTGS pays a smaller tax than the fixed-temperature baseline, solving more tasks under repeated sampling while also improving single-shot accuracy.",
      "upvotes": 102,
      "github_stars": 25,
      "github_repo": "https://github.com/changdaeoh/sharpening-tax",
      "project_page": "https://changdaeoh.github.io/sharpening-tax/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.01509",
      "arxiv_url": "https://arxiv.org/abs/2610.01509",
      "title_ja": "事後学習における「研ぎ澄まし」の代償",
      "summary_ja": "RL等の事後学習は、特定の正解精度を高める一方で、解決策の多様性（網羅性）を損なう傾向があることを発見。未調整モデルの方が多様な試行により難題を解く場合がある。"
    },
    {
      "id": "2609.40325",
      "title": "WorldAuditBench: Interactive 3D World Auditing with Multimodal Agents",
      "abstract": "As interactive 3D worlds are increasingly used to study intelligent behavior, it becomes important to develop efficient pipelines for identifying anomalies in these simulated environments, such as floating objects, traversable walls, or objects inconsistent with the surrounding scene. Multimodal AI systems, including vision-language models (VLMs) and vision-language-action models (VLAs), have shown potential for automating this task. However, 3D world auditing is complex, requiring the close coupling of two distinct capabilities: action, to navigate the 3D world and search for anomalies systematically and efficiently; and visual reasoning, to understand the environment and identify anomalies from multimodal observations. It remains largely unexplored whether multimodal agents can effectively couple these two capabilities, using visual reasoning to identify potential anomalies while taking actions to validate them. In this paper, we introduce WorldAuditBench, a benchmark for 3D world auditing comprising 213 anomaly tasks across 13 environments built with Unreal Engine 5 and Three.js, spanning five anomaly families. We evaluate five frontier models under a fixed exploration budget using two auditing paradigms: VLA-based exploration followed by VLM-based anomaly identification, and an end-to-end VLM agent in which visual reasoning directly guides action selection. Across the evaluated models and two paradigms, success rates range from 6.6% to 42.3%, substantially below human performance (83.4%). Through the task of world auditing, WorldAuditBench provides a testbed for studying how multimodal agents couple action and visual reasoning in interactive 3D environments, while highlighting current limitations in their ability to gather and interpret evidence during exploration.",
      "upvotes": 102,
      "github_stars": 4,
      "github_repo": "https://github.com/UCSB-NLP-Chang/WorldAuditBench",
      "project_page": "https://ucsb-nlp-chang.github.io/WorldAuditBench/",
      "comments": 3,
      "org": "University of California, Santa Barbara",
      "url": "https://huggingface.co/papers/2609.40325",
      "arxiv_url": "https://arxiv.org/abs/2609.40325",
      "title_ja": "WorldAuditBench：マルチモーダルエージェントによる対話型3D空間の監査",
      "summary_ja": "3D環境内の浮遊物体や不自然な壁などの異常を、エージェントが自律的に探索・特定するためのベンチマーク。ナビゲーションと視覚推論の統合能力を評価する。"
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
      "title_ja": "予測クレジット：科学的説明が実験予測に加える価値の測定",
      "summary_ja": "AIによる科学的説明が、単なる記述以上に将来の実験結果の予測精度を高めているかを厳密に測定。現時点では説明による有意な予測精度の向上は確認されなかった。"
    },
    {
      "id": "2609.32259",
      "title": "Prefill-Free Cross-Family KV Cache Transfer for Heterogeneous Multi-Agent LLMs",
      "abstract": "Recent multi-agent LLM systems increasingly combine heterogeneous models for specialized agent roles. However, text-based communication requires each receiver to prefill shared context already processed by the sender. Reusing the sender's key-value (KV) cache avoids this redundancy, but prefill-free transfer across model families must handle differences in tokenization, model depth, and KV representations. To address these issues, we propose HeteroFold, a prefill-free cross-family KV cache transfer method that keeps both the sender and receiver frozen. HeteroFold aligns model structures, maps the sender cache into the receiver space, and calibrates it to preserve receiver behavior. Across six transfer directions, HeteroFold achieves the best cache-transfer performance on all four long-context benchmarks and most short-context settings. It also matches text-based communication on the multi-agent benchmark. At 32K context length, Llama-3.1-8BrightarrowMinistral-3-14B transfer is 10.7times faster than Native Prefill and 1.18--1.47times faster than the state-of-the-art prefill-free baselines, Dense Latent and KV Ridge. These results show that HeteroFold enables efficient cross-family KV reuse without receiver prefill.",
      "upvotes": 94,
      "github_stars": 1,
      "github_repo": "https://github.com/daniel-eai/Prefill-Free-Multi-Agent-LLMs",
      "project_page": "",
      "comments": 2,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2609.32259",
      "arxiv_url": "https://arxiv.org/abs/2609.32259",
      "title_ja": "異種マルチエージェントLLMのためのプリフィル不要なクロスファミリーKVキャッシュ転送",
      "summary_ja": "異なるモデル間でKVキャッシュを再利用するHeteroFoldを提案。構造の整合とキャリブレーションにより、再計算（プリフィル）なしで高速な情報共有を実現。"
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
      "title_ja": "記憶を超えて：明示的な信念状態を活用した長期実行エージェント",
      "summary_ja": "対話履歴だけでなく、現在の世界の状態と未達の要件を「信念状態」として明示的に管理。一貫性の検証と進捗監視により、エージェントが袋小路に陥るのを防ぐ。"
    },
    {
      "id": "2609.38839",
      "title": "FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation",
      "abstract": "Long-horizon video generation requires models to effectively leverage an increasingly long generation history. As the generated history grows, retaining all previous content becomes increasingly expensive and redundant, making effective historical selection essential. Existing approaches often determine historical relevance based on the current content. However, information relevant to the present is not necessarily useful for future generation, while seemingly less relevant history may become important later. Our key insight is that historical information should be selected according to its relevance to future information needs. Capturing these needs does not require generating the full future; instead, a compact representation of what becomes important next is sufficient to guide historical selection. Building on this insight, we propose FrameMorrow, a prospective frame selector that predicts a small set of prospective tokens representing future information needs and uses them to identify relevant information from history. FrameMorrow selects explicit historical frames rather than model-specific internal states, enabling plug-and-play integration across diverse generators, including closed-source models, with little additional inference cost. We evaluate FrameMorrow across five benchmarks and 11 generative models spanning long-video generation, interactive generation, and action-conditioned world models. Extensive experiments demonstrate consistent improvements in long-range consistency, visual quality, and action alignment across diverse generation settings.",
      "upvotes": 92,
      "github_stars": 26,
      "github_repo": "https://github.com/YinBo0927/FrameMorrow",
      "project_page": "https://yinbo0927.github.io/FrameMorrow/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.38839",
      "arxiv_url": "https://arxiv.org/abs/2609.38839",
      "title_ja": "FrameMorrow：将来のトークンに導かれた長期ビデオ生成のための将来主導型フレーム選択",
      "summary_ja": "長尺動画生成において、将来必要になる情報を予測して過去のフレームを選択的に参照する。計算コストを抑えつつ、一貫性のある長期的な動的変化の生成を可能にする。"
    },
    {
      "id": "2609.39045",
      "title": "RSIGame: Autonomous Agentic Game Development with Recursive Self-improvement",
      "abstract": "Recent advances in large language models have made automatic game generation increasingly feasible, yet reliably improving generated games beyond a playable version remains challenging. Naive iterative refinement can easily overfit a small set of test cases, producing fragile games with unresolved bugs, missing behaviors, and poor generalization to broader player interactions. We introduce RSIGame, an autonomous agentic game development framework with recursive self-improvement. RSIGame organizes development into complementary local and global loops. Concretely, a local explore-diagnose-improve loop broadly explores the executable game, diagnoses and prioritizes discovered issues, and performs evidence-grounded revision, where an evolving checklist continually accumulates new testing and improvement guidance. A global loop tracks overall quality, preserves the best checkpoint, and detects saturation or regression over long-horizon development. Beyond test-time improvement, RSIGame further internalizes successful development experience into the generator through training. Across 140 GameCraft-Bench tasks, two game engines, and five generators, RSIGame consistently improves game quality under matched development budgets. Notably, experience internalization enables Qwen3.8-27B to reach 61.38 on Godot and 58.53 on Phaser, exceeding GPT-5.5 one-shot scores while reducing Qwen's generation tokens by 11 times.",
      "upvotes": 91,
      "github_stars": 125,
      "github_repo": "https://github.com/WenyiWU0111/RSIGame",
      "project_page": "https://huggingface.co/spaces/RSIGame/rsigame-page",
      "comments": 2,
      "org": "RSIGame",
      "url": "https://huggingface.co/papers/2609.39045",
      "arxiv_url": "https://arxiv.org/abs/2609.39045",
      "title_ja": "RSIGame：再帰的自己改善による自律型エージェントゲーム開発",
      "summary_ja": "局所的なバグ修正ループと大局的な機能改善ループを組み合わせ、再帰的にゲームを洗練。頑健で一般性の高いゲーム開発を自律的に行うフレームワークを提案。"
    },
    {
      "id": "2609.38078",
      "title": "MotorMind: Scaffolding General Vision Language Models for Zero-Shot Robot Manipulation",
      "abstract": "Vision-language-action (VLA) models have advanced robotic manipulation, but their zero-shot generalization in new tasks and environments remains limited, and their reliance on specialized training keeps them from benefiting directly from rapidly advancing general-purpose vision-language models (VLMs). In parallel, recent agentic robotic systems leverage VLMs for high-level reasoning or coding agents for robot control, but often depend on extensive external models and tools, introducing additional complexity and cost. This motivates us to ask: Can a general-purpose VLM itself operate a robot more like the human teleoperator by reasoning directly from observations, issuing actions, and continuously adapting to execution feedback, without relying on external models such as learned action experts, coding agents or grounding tools like SAM3? In this work, we introduce MotorMind, a robot manipulation harness that connects VLM-proposed mid-level actions to deterministic robot control and feedback, with asynchronous monitoring and background memory updates. Without task-specific policy training, coding agents, or additional grounding tools such as SAM3, MotorMind achieves 66.7% success on the base LIBERO-PRO suites and 53.8% under perturbations, compared with at most 13.3% and 19.2%, respectively, for the prior zero-shot methods we evaluate. The same interface reaches 95% average success on a real xArm6 robot across direct manipulation and human-perturbation settings. Replacing the backbone with a stronger VLM further improves performance, while the remaining failures - primarily due to visual grounding, embodied reasoning, and action knowledge - decrease as VLM capability improves. These results show that a general-purpose VLM, when equipped with an appropriate mid-level action representation and asynchronous execution harness, can perform effective zero-shot robotic manipulation.",
      "upvotes": 90,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://motor-mind.github.io",
      "comments": 2,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2609.38078",
      "arxiv_url": "https://arxiv.org/abs/2609.38078",
      "title_ja": "MotorMind：ゼロショット・ロボット操作のための汎用VLMのスキャフォールディング",
      "summary_ja": "汎用VLMに視覚的推論と行動出力を直接行わせる手法。特殊な訓練や外部ツールなしで、人間のような試行錯誤を通じたゼロショットのロボット操作を実現。"
    },
    {
      "id": "2610.02826",
      "title": "Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite",
      "abstract": "Successful trajectories on difficult tasks provide valuable supervision for model improvement, but specialized harnesses introduce interventions that may be unavailable during deployment. We propose Recursive Self-Rewrite (RSR), a framework that uses one base model, Qwen-3.8-27B, to discover successful solutions under diverse harnesses and reconstruct them as training trajectories under a general harness. A planner extracts procedures into runbooks, a critic screens for verifier and solution leakage and guides recursive revision, and an executor follows qualified runbooks in fresh sandboxes. Across approximately 3K self-curated terminal tasks, three harnesses jointly solve 759 tasks, 34.3% more than the strongest individual harness in the recorded pool. RSR expands 2,001 successful source trajectories into 11,094 rewritten trajectories for supervised finetuning. Training on these trajectories outperforms both the base model and direct trajectory SFT. Compared with the base model, pass@3 increases from 57.0% to 74.2% on Terminal-Bench 2, from 1.5% to 9.1% on Terminal-Bench 4, from 39.0% to 63.0% on our self-curated Terminal-Bench Hard, and from 3.0% to 6.0% on our Software Terminal-Bench. Process reward on Long-Horizon Terminal-Bench rises from 0.21 to 0.29. These results show how diverse harness-assisted experiences can be reconstructed into reusable capabilities for a model operating under a general harness.",
      "upvotes": 90,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.02826",
      "arxiv_url": "https://arxiv.org/abs/2610.02826",
      "title_ja": "再帰的自己書き換えによる複雑なタスクの軌跡スケーリング",
      "summary_ja": "困難なタスクを解いた複雑な手順を、汎用的な実行環境で再現可能な形式へ再構成。モデル自身の書き換え能力により、高品質な学習用データを大規模に自動生成する。"
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
      "summary_ja": "離散トークンの生成と連続状態のデノイジングを結合。並列デコード時の統計的依存関係を維持しつつ、高品質で制約を満たしたテキスト生成を可能にする。"
    },
    {
      "id": "2609.35690",
      "title": "Agent Priors-guided Policy Learning",
      "abstract": "Robots that learn from a few demonstrations often require two forms of generalization. Compositional generalization recombines skills to solve new tasks, and skill generalization lets the learned policy behind each skill work in new situations. The two depend on each other, yet information is lost between composition and the skills it calls. Where a skill works is determined by the structure its policy is trained with, while composition sees the skill only through a separate description, such as a name, an instruction, or a symbolic operator, that omits this structure. Our key idea is to use each policy's structural prior as part of the interface between composition and the skill. A structural prior states what a behavior depends on, for example that a grasp depends only on the gripper's pose relative to the object. Built into training, it shapes where the policy generalizes; stated in language, it tells composition where the policy applies. We instantiate this idea in Agent Priors-guided Policy Learning (APPL). A construction agent segments complete demonstrations into reusable skills, proposes several structural priors for each skill, and trains and verifies one policy per prior. A runtime agent then selects among these prior-specific policies and composes them toward new task goals using their interfaces. Across MetaWorld and long-horizon ManiSkill tasks, APPL improves out-of-distribution skill generalization and enables previously unseen skill compositions; ablating the interface information substantially reduces performance. These results support the use of training-time structural assumptions as a bridge between skill learning and skill composition.",
      "upvotes": 84,
      "github_stars": 3,
      "github_repo": "https://github.com/Agentics-robotics/Agent-Priors-guided-Policy-Learning",
      "project_page": "https://agentics-robotics.github.io/APPL/",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.35690",
      "arxiv_url": "https://arxiv.org/abs/2609.35690",
      "title_ja": "エージェント・プライヤー誘導型ポリシー学習",
      "summary_ja": "ロボットスキルの構造的特性（事前分布）をインターフェースとして活用。新しいタスクに対して既存スキルを最適に組み合わせ、効率的な一般化と実行を実現する。"
    },
    {
      "id": "2610.02508",
      "title": "World Action Modeling with Progressive Visual Planning",
      "abstract": "World action models (WAMs) have emerged as a promising paradigm for robotic control by jointly predicting future visual dynamics and actions from an initial observation and instruction. However, existing WAMs struggle with long-horizon prediction, as generating dense video rollouts is highly inefficient. Some recent WAMs address this by predicting a single future frame without generating the full video, but this approach neglects how to progress toward the goal. We present ProWAM, a progressive world action model that jointly predicts actions and an ordered sequence of sparse visual sub-goals, providing explicit visual guidance to anchor action generation throughout task execution. This design scales naturally, as sub-goal prediction can be learned from large-scale action-free videos, allowing the video backbone to offload complex visual planning from the action policy. For efficient action generation, ProWAM executes a single video-backbone forward pass to cache sparse sub-goal features, eliminating iterative full-video generation and requiring only lightweight action denoising during replanning. Across extensive evaluations, ProWAM achieves superior out-of-distribution robustness. On simulation benchmarks, it sets new state-of-the-art results on LIBERO-Plus (85.8%) and randomized RoboTwin (75.7%), outperforming the strongest baseline with relative gains of up to +35.9%. On RoboCasa365, ProWAM achieves a 48.1% success rate and 18.2% on the challenging Composite-Unseen split, ranking 4th overall. Crucially, in zero-shot real-world experiments, ProWAM achieves 70.0% success, outperforming the strongest baseline by +15.0 (from 55.0% to 70.0%, a +27.3% relative gain) in novel scenes. These results demonstrate the value of progress-indexed visual foresight for closed-loop control. Our program is in https://sii-ferenas.github.io/ProWAM-page.",
      "upvotes": 83,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://sii-ferenas.github.io/ProWAM-page/",
      "comments": 3,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.02508",
      "arxiv_url": "https://arxiv.org/abs/2610.02508",
      "title_ja": "進歩的視覚計画を伴う世界行動モデリング",
      "summary_ja": "アクション予測と同時に、疎な視覚的サブゴール列を予測。動画全編を生成することなく、視覚的な道しるべを設けることで長期的なタスク遂行の精度を高める。"
    },
    {
      "id": "2610.02162",
      "title": "World Observer: Joint Actor-Observer Generation for Persistent World Modeling",
      "abstract": "How can a world model continuously observe regions beyond the actor's current view? Video world models simulate how an environment evolves from an agent's actions, yet remain actor-centric. Once an object leaves the actor's view, they lose direct evidence of its evolution, often failing to preserve its state and dynamics upon re-entry. To address this, we introduce World Observer, which decouples observing from acting by jointly generating a perspective actor for the agent-centric view with one or more panoramic observers that watch selected world regions. This allows objects that leave the actor's view to remain visually evolving in an observer, so their updated states are reflected when they re-enter. We ground the actor and observers by warping from a shared panoramic source for explicit geometric correspondence, and introduce an Observer Sink of high-resolution perspective references to restore fine appearance upon re-entry. Since the observers are decoupled from the actor, they can be placed freely across the scene, extended to multiple locations for broader coverage, and driven by control signals to steer out-of-view evolution. To evaluate out-of-view evolution, we further introduce world-space metrics and a benchmark spanning real and synthetic scenes. World Observer substantially improves out-of-view dynamics while remaining competitive in visual fidelity, camera control, and 3D adherence.",
      "upvotes": 83,
      "github_stars": 30,
      "github_repo": "https://github.com/cvlab-kaist/world-observer",
      "project_page": "https://cvlab-kaist.github.io/world-observer/",
      "comments": 4,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.02162",
      "arxiv_url": "https://arxiv.org/abs/2610.02162",
      "title_ja": "World Observer：持続的な世界モデリングのためのアクター・オブザーバー同時生成",
      "summary_ja": "主観視点のアクターと俯瞰視点のオブザーバーを同時生成。視界から消えた物体もパノラマ視点で追跡し続けることで、再登場時の一貫性を保つ世界モデルを構築。"
    },
    {
      "id": "2609.38143",
      "title": "Learning Meta-Skills for Agent Harness Design in Test-Time AI4AI",
      "abstract": "Agent performance depends on both reasoning ability and the environment in which it acts. We study test-time AI-for-AI, asking how a Builder can learn to construct better execution environments for a Target while both models' weights remain fixed. To make the Builder's experience reusable, we introduce Meta-Skill: principles specifying when support is needed and what resources to provide. The Builder learns these principles from Target's execution feedback on the development set, then uses the frozen skill bank to construct harnesses for unseen tasks. Across Harness-Bench and NewtonBench, full-bank meta-skills improve macro-average performance by 8.95 percentage points over no-skill construction, and 12.02 points over direct delivery of the same bank to the Target. These results highlight the value of translating experience into executable support. Gains when the same model serves both roles further suggest a path to system level self-improvement through learning to build better environments.",
      "upvotes": 83,
      "github_stars": 9,
      "github_repo": "https://github.com/qiancheng-apodex/MetaSkill-AI4AI",
      "project_page": "",
      "comments": 2,
      "org": "Apodex",
      "url": "https://huggingface.co/papers/2609.38143",
      "arxiv_url": "https://arxiv.org/abs/2609.38143",
      "title_ja": "テスト時AI4AIにおけるハーネス設計のためのメタスキル学習",
      "summary_ja": "ターゲットモデルの重みを変えず、実行環境（ハーネス）を最適化するBuilderを訓練。抽出された「メタスキル」を用いることで、未知のタスクでも性能を大幅に向上。"
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
      "title_ja": "ActiveSaddler：エージェントハーネス最適化のための自動カリキュラム学習",
      "summary_ja": "ハーネスの進化に合わせて、最も学習効果の高いシナリオを動的に選択する自動カリキュラム学習を導入。効率的かつ効果的なエージェントの動作最適化を実現。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Drops 722 Math Papers From a Model Smarter Than GPT-6",
      "summary": "OpenAI dropped 722 AI-generated math manuscripts across 372 problem families, with Lean-verified proofs, reasoning traces, and compute budgets",
      "url": "https://alphasignal.ai/news/openai-drops-722-math-papers-from-a-model-smarter-than-gpt-6",
      "published": "2026-10-07T07:19:48+09:00",
      "title_ja": "OpenAI、GPT-4を超える数学能力を持つモデルから722の論文を公開",
      "summary_ja": "Leanで検証済みの証明や推論プロセスを含む、AI生成の数学論文データを公開。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：オープンかつ軽量なマルチモーダル埋め込みモデル",
      "summary_ja": "Gemma 2をベースとした、軽量でオープンなマルチモーダル対応の埋め込みモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Now Reads and Edits Google Docs, Sheets, and Slides",
      "summary": "Anthropic's new Workspace add-on puts Claude in a sidebar beside Docs, Sheets, and Slides, with two-way file editing and approval cards.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-now-reads-and-edits-google-docs-sheets-and-slides",
      "published": "2026-10-07T02:25:17+09:00",
      "title_ja": "AnthropicのClaudeがGoogleドキュメント、スプレッドシート、スライドの編集に対応",
      "summary_ja": "サイドバーからファイルを直接読み込み・編集し、承認も行えるアドオンが登場。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Expands Claude Startups With a $7,000 Package for Founders",
      "summary": "Anthropic widens access to its startup program with up to $7,500 in Claude credits, a partner stack worth $45,000, and direct time with its Applied AI team.",
      "url": "https://alphasignal.ai/news/anthropic-expands-claude-startups-with-a-7-000-package-for-founders",
      "published": "2026-10-07T01:49:07+09:00",
      "title_ja": "Anthropic、創業者向けに7,000ドルのパッケージでスタートアップ支援を拡大",
      "summary_ja": "最大7,500ドルのクレジット付与や応用AIチームによる直接支援を提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google's Nano Banana 2.1 Beats Pro on Image Editing at Flash Prices",
      "summary": "Google's updated workhorse image model keeps Flash-level speed while beating Nano Banana 2 and even Pro on most editing benchmarks.",
      "url": "https://alphasignal.ai/news/google-s-nano-banana-2-1-beats-pro-on-image-editing-at-flash-prices",
      "published": "2026-10-07T01:00:40+09:00",
      "title_ja": "GoogleのNano Banana 2.1、Flash並みの低価格でProを凌ぐ画像編集性能を実現",
      "summary_ja": "高速性を維持しつつ、編集ベンチマークでProモデルを上回る性能を達成。"
    },
    {
      "lab": "OpenAI",
      "title": "Atlassian and OpenAI expand partnership to turn enterprise knowledge into action",
      "summary": "Atlassian and OpenAI are expanding their partnership to connect frontier models with enterprise knowledge and help teams plan, build, and deliver work.",
      "url": "https://openai.com/index/atlassian-partnership",
      "published": "2026-10-07T01:00:00+09:00",
      "title_ja": "AtlassianとOpenAIが提携を拡大し、企業の知識をアクションへ変換",
      "summary_ja": "最先端モデルを企業知識と連携させ、チームの計画立案や業務遂行を支援する。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "公衆衛生のためのEarth AI地球空間基盤モデルの解放",
      "summary_ja": "地球規模の公衆衛生向上のため、Earth AIの地理空間データを活用する。"
    },
    {
      "lab": "OpenAI",
      "title": "How Jump Trading is scaling quant research with ChatGPT",
      "summary": "Jump Trading uses OpenAI to expand quantitative research. See how longer-running AI workflows combine multiple data sources with human review.",
      "url": "https://openai.com/index/jump-trading",
      "published": "2026-10-06T21:00:00+09:00",
      "title_ja": "Jump TradingがChatGPTでクオンツ研究をスケールさせる方法",
      "summary_ja": "OpenAIを活用し、複数データと人間による確認を組み合わせたAIワークフローを構築。"
    },
    {
      "lab": "OpenAI",
      "title": "Sharing AI progress in mathematics",
      "summary": "OpenAI publishes new results on open problems in mathematics from an internal frontier model and shares Lean proof formalizations and research details on GitHub.",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics",
      "published": "2026-10-06T21:00:00+09:00",
      "title_ja": "数学におけるAIの進歩の共有",
      "summary_ja": "数学の未解決問題に関する研究結果を公開し、Lean形式の証明などをGitHubで共有。"
    },
    {
      "lab": "OpenAI",
      "title": "Advancing computer use with Ironclad",
      "summary": "Learn how OpenAI and Ironclad are training and evaluating AI agents on complex contracting workflows to advance computer use for professional work.",
      "url": "https://openai.com/index/advancing-computer-use-with-ironclad",
      "published": "2026-10-06T19:00:00+09:00",
      "title_ja": "Ironcladと共に進めるコンピュータ操作の進化",
      "summary_ja": "複雑な契約業務でAIエージェントを訓練し、実務におけるPC操作の自動化を推進。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Unsloth Shrinks Alibaba's Z-Image-Turbo to 3.64 GB for Consumer GPUs",
      "summary": "Unsloth released GGUF quantizations of Tongyi's Z-Image-Turbo, a 6B parameter text-to-image model that runs in under 16GB VRAM with 8-step inference.",
      "url": "https://alphasignal.ai/news/unsloth-shrinks-alibaba-s-z-image-turbo-to-3-64-gb-for-consumer-gpus",
      "published": "2026-10-06T18:28:13+09:00",
      "title_ja": "Unsloth、アリババのZ-Image-Turboを一般GPU向けに3.64GBへ縮小",
      "summary_ja": "60億パラメータの画像生成モデルを、16GB以下のVRAMで動作可能に量子化。"
    },
    {
      "lab": "Hugging Face",
      "title": "Falcon-Emirati: When an LLM Learns the Dialect, the Culture, and the Nuance",
      "summary": "",
      "url": "https://huggingface.co/blog/tiiuae/falcon-emirati",
      "published": "2026-10-06T15:44:39+09:00",
      "title_ja": "Falcon-Emirati：方言、文化、ニュアンスを学習したLLM",
      "summary_ja": "地域の特定の方言や文化的なニュアンスを学習した大規模言語モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Humanizer Rewrites AI Text Locally So Detectors Flag Just 11 of 210",
      "summary": "A locally-run 12B model fine-tuned from Gemma-4 rewrites AI drafts into natural human prose while preserving every number, name, and quote.",
      "url": "https://alphasignal.ai/news/humanizer-rewrites-ai-text-locally-so-detectors-flag-just-11-of-210",
      "published": "2026-10-06T12:02:14+09:00",
      "title_ja": "HumanizerがAIテキストをローカルで書き換え、検知率を大幅に低下",
      "summary_ja": "12Bモデルを用い、固有名詞等を維持したままAI文を自然な人間風の文章に修正。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決・創発的問題",
      "summary_ja": "生成AIエージェントのプライバシーとセキュリティに関する文脈的な課題を考察。"
    },
    {
      "lab": "OpenAI",
      "title": "Our approach to EU text provenance rules",
      "summary": "How OpenAI is approaching text watermarking under EU rules. Learn where watermarks apply, how detection works, and why access starts with researchers.",
      "url": "https://openai.com/index/eu-text-provenance",
      "published": "2026-10-06T00:00:00+09:00",
      "title_ja": "EUのテキスト出典規則に対する当社のアプローチ",
      "summary_ja": "OpenAIがEU規則に従い、テキストへの電子透かしの適用と検知方法を説明。"
    },
    {
      "lab": "OpenAI",
      "title": "Building advertising for the way people use AI",
      "summary": "OpenAI introduces a new visual ad format in ChatGPT and expands measurement tools, attribution partnerships, and brand suitability for advertisers.",
      "url": "https://openai.com/index/new-chatgpt-ads-format-and-measurement",
      "published": "2026-10-05T19:00:00+09:00",
      "title_ja": "AI利用に合わせた広告構築",
      "summary_ja": "ChatGPT内に新しい視覚的広告フォーマットを導入し、測定ツールなどを拡充。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "パーソナルセンシングにおけるオントロジー境界の交渉",
      "summary_ja": "ユーザー自身が機械学習モデルを訓練・設計し、システムの制約を再定義する試み。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Agent Said It Was Done. The Database Disagreed.",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox",
      "published": "2026-10-04T07:56:48+09:00",
      "title_ja": "エージェントは「完了」と言ったが、データベースは否定した",
      "summary_ja": "AIエージェントの出力と、実際のデータベース内での実行結果の乖離に関する課題。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open-sourcing AstaBrief, the fast report-generation model in Asta",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/astabrief",
      "published": "2026-10-03T00:19:50+09:00",
      "title_ja": "Astaの高速レポート生成モデル「AstaBrief」をオープンソース化",
      "summary_ja": "Asta内で利用されている、高速なレポート生成用モデルを一般公開。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "フェデレーテッドデータからの証明可能なプライバシー保護学習に向けて",
      "summary_ja": "モバイルシステム等において、プライバシーを保護しつつ連合学習を行う手法の検討。"
    },
    {
      "lab": "Hugging Face",
      "title": "AutoSynthData: Generating Training Data for Enterprise Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata",
      "published": "2026-10-02T13:01:31+09:00",
      "title_ja": "AutoSynthData：企業用エージェント向けの学習データ生成",
      "summary_ja": "エンタープライズ領域のAIエージェント訓練に必要なデータを自動生成する手法。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "言語識別が多言語音声モデルの言語学習を改善する",
      "summary_ja": "事前学習中に言語を識別する能力を強めることで、多言語モデルの性能差を解消する。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "拡散モデルにおける確信の限界",
      "summary_ja": "離散拡散モデル生成時のトークン間の依存関係が分布一致に与える影響を分析。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的機械学習エンジニアリングに強力なエージェントの枠組みはどれほど必要か",
      "summary_ja": "複雑な管理機構より、実行環境に直接アクセスできる単純なコード作成モデルの有効性を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "RLTL;DR: Self-Improvement by Internalizing Self-Generated Feedback",
      "summary": "The common paradigm of reinforcement learning with verifiable rewards (RLVR) is to let agents make multiple attempts at a task, and optimize towards the successful ones. This becomes problematic in the realms of self-improvement, where tasks are so difficult that the agent has a low or even no chance of success, and where there are no teacher models or example solutions to distill from. In this paper, we introduce RLTL;DR. After each failed attempt, we show the policy the verifier outputs and let it write its own feedback, in the form of a single TL;DR insight. The next rollout is conditioned…",
      "url": "https://machinelearning.apple.com/research/rltl-dr-self-improvement",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "RLTL;DR：自己生成フィードバックの内部化による自己改善",
      "summary_ja": "失敗した試行から自ら要約フィードバックを書き、次の試行に活かして性能を向上。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "次世代の最先端知能モデル「Gemini 4 Argon」の登場。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの紹介",
      "summary_ja": "生物学的機能を維持したまま、AI生成タンパク質に電子透かしを入れる概念実証。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Effectiveness-Fluency Trade-Off in LLM Conditioning: A Systematic Study",
      "summary": "Controlling the output of Large Language Models (LLMs) is a central challenge for their reliable deployment, yet a clear understanding of the involved trade-offs remains elusive. Current approaches to conditioning are often evaluated with a narrow focus on their effectiveness at injecting or removing a target concept, neglecting generation quality. We systematically investigate a range of conditioning methods in both injection and removal scenarios. We find that efficient steering methods frequently achieve conditioning at a steep cost to fluency. Furthermore, we identify a critical yet…",
      "url": "https://machinelearning.apple.com/research/effectiveness-fluency-llm-conditioning",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "LLMの条件付けにおける効果と流暢さのトレードオフ：系統的研究",
      "summary_ja": "モデル制御手法が、概念の注入・削除には成功しても文章の自然さを損なう実態を調査。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning",
      "summary": "",
      "url": "https://huggingface.co/blog/open-tts-leaderboard",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "Open TTS Leaderboard：多言語音声合成と声のクローンの大規模評価",
      "summary_ja": "多言語対応のテキスト読み上げおよび音声クローン技術を評価するベンチマーク。"
    },
    {
      "lab": "Google Research",
      "title": "How Diffusion Controller unifies and simplifies AI image generation",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/how-diffusion-controller-unifies-and-simplifies-ai-image-generation/",
      "published": "2026-09-30T03:38:27+09:00",
      "title_ja": "Diffusion ControllerがいかにAI画像生成を統合し簡略化するか",
      "summary_ja": "アルゴリズムにより、AI画像生成のプロセスを統合・簡素化する仕組みの解説。"
    }
  ]
};
