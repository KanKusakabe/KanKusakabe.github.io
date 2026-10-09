window.papersData = {
  "updated_at": "2026-10-09 10:49 JST",
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
      "id": "2610.09139",
      "title": "Breaking the Space Barrier and its Application to Language Model Inference",
      "url": "https://arxiv.org/abs/2610.09139",
      "pdf": "https://arxiv.org/pdf/2610.09139",
      "authors": [
        "Arip Asadulaev"
      ],
      "categories": [
        "cs.AI",
        "cs.CC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "text the format forces is written without running the model, the mask is recomputed on the GPU without any table, recursive formats use a small stack, every output stays valid under a token limit, and independent fields are decoded in parallel and verified.",
      "signals": [],
      "headline": "構造化出力の制約を非常に少ないメモリで高速に処理する推論エンジン技術",
      "what": "JSONやツール呼び出しなどの構造化出力を強制するオートマトンの特性を計算量理論の観点から解析し、Savitchの定理を下回るO(log2 n / log log n)の空間計算量で到達可能性を判定する手法を提案しています。これを実装し、GPU上でマスクを再計算するメモリ効率の高い推論エンジンを構築しました。",
      "enables": "Qwen3.5を用いたスキーマ抽出において、標準的なセットアップに対し1.2〜1.3倍の高速化を実現し、グラマー保持に必要なメモリを最大1.5GBから3MBへ削減しました。また、1つのサーバーで16個のグラマーを同時に保持することが可能になり、ツール呼び出しエージェントの完了速度が2.5倍に向上しました。",
      "why_it_matters": "LLMの構造化出力におけるメモリ制約と計算コストのトレードオフを解消し、リソースの限られた環境でも複雑な制約付き推論を効率化できます。",
      "tags": [
        "LLM推論",
        "計算複雑性理論"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10311",
      "title": "Fault-tolerant foundation models",
      "url": "https://arxiv.org/abs/2610.10311",
      "pdf": "https://arxiv.org/pdf/2610.10311",
      "authors": [
        "Trevor McCourt",
        "Ila R. Fiete",
        "Isaac L. Chuang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.AR"
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
      "star_quote": "Modified neural scaling laws inferred from 40,000 GPU-hours of training runs on simulated faulty digital hardware quantify this trend and suggest that models learn to compute within \"good\" error-correcting codes",
      "signals": [],
      "headline": "計算エラーを許容するように訓練された大規模言語モデルの耐故障性と省電力化の可能性",
      "what": "ハードウェアの信頼性を下げる代わりに省電力化を図る際、LLMが計算エラーを許容できるように訓練可能であることを示した研究です。4万GPU時間のシミュレーションを通じて、モデルの規模が大きくなるほどエラーに対する耐性（resilience）が向上するという神経スケーリング則を導出しました。",
      "enables": "LLMが学習を通じて「良好な誤り訂正符号」内で計算することを学習している可能性を示唆し、将来的に低エネルギーで動作する不安定なハードウェア上でのAI推論という道筋を提示しています。",
      "why_it_matters": "モデル自体の耐故障性を形式的に証明できれば、エネルギー効率と引き換えに信頼性を犠牲にする次世代チップでの大規模AI運用が可能になります。",
      "tags": [
        "LLM",
        "ハードウェア"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10391",
      "title": "MOTIP2: Spatial Priors for End-to-End Multi-Object Tracking",
      "url": "https://arxiv.org/abs/2610.10391",
      "pdf": "https://arxiv.org/pdf/2610.10391",
      "authors": [
        "Beno\\^it Roussel",
        "Damien Bouet",
        "Liming Chen",
        "Pierre Perrault"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at BMVC 2026. 27 pages (14 pages main paper, appendix and references), 6 figures, 10 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Trained without extra data, its main model, MOTIP2-L, sets a new state of the art",
      "signals": [],
      "headline": "空間的な制約を明示的に組み込み物体追跡のIDスイッチを抑制するMOTIP2",
      "what": "End-to-Endの多物体追跡（MOT）において、データ、損失関数、表現の3段階で空間的プライア（Spatial Priors）を導入する手法です。具体的には、空間的な重なりを考慮したIDスイッチのバイアス、距離に応じたペナルティ、およびトークンへのフレーム位置情報の付与（Spatial Anchor）を行っています。",
      "enables": "DanceTrackで73.4 HOTA、SportsMOTで76.0 HOTAという新記録を達成しました。また、軽量モデルのMOTIP2-Sは、従来モデルの3倍以上の速度で同等の精度を実現しています。",
      "why_it_matters": "End-to-Endモデルが陥りやすかった「画面の端から端へのIDの飛び」といった空間的に不自然なエラーを、後処理なしでモデル内部の構造により解決しています。",
      "tags": [
        "コンピュータビジョン",
        "物体追跡"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10437",
      "title": "Q-Learning with Scalar Adjoint Matching",
      "url": "https://arxiv.org/abs/2610.10437",
      "pdf": "https://arxiv.org/pdf/2610.10437",
      "authors": [
        "Yonghoon Dong",
        "Minsung Yoon",
        "Jaehyuk Kim",
        "Jungwoo Park",
        "Changyeon Kim",
        "Jinwoo Shin"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 17,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SQAM's gains concentrate on the four hardest OGBench domains, where its success rate exceeds that of the strongest baseline in each domain by 18 to 35 percentage points.",
      "signals": [],
      "headline": "フローポリシーの微調整を効率化するスカラー随伴マッチングを用いたQ学習",
      "what": "デモンストレーションを超えた性能向上を目指すフローポリシー（Flow Policies）のオフポリシー強化学習手法です。ステップごとのベクトル-ヤコビアン積を計算する代わりに、ヤコビアンが対角成分に集中するという発見に基づき、計算コストの低い「スカラー随伴（Scalar Adjoint）」を導出しました。",
      "enables": "OGBenchの最難関ドメインにおいて、最強のベースラインを18〜35ポイント上回る成功率を達成しました。実機の双腕ロボットを用いた実験でも、教師あり学習による微調整を全タスクで上回る改善を確認しています。",
      "why_it_matters": "表現力の高いフローベースのモデルに対し、計算負荷を抑えつつ価値関数の情報を効率的に逆伝播させることで、実用的なロボット制御への適用を容易にしました。",
      "tags": [
        "ロボティクス",
        "強化学習"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10453",
      "title": "RFPO: Rectified Flow Policy Optimization for Embodied Control",
      "url": "https://arxiv.org/abs/2610.10453",
      "pdf": "https://arxiv.org/pdf/2610.10453",
      "authors": [
        "Ting Huang",
        "Lisiyu Pan",
        "Haoyu Wang",
        "Zeyu Zhang",
        "Siyuan Qian",
        "Yanjun Li"
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
        "cap"
      ],
      "star_quote": "RFPO consistently preserves full-step control performance under one-step execution, with one-step returns remaining within 2.4% of their corresponding 64-step values",
      "signals": [],
      "headline": "フローベースのロボット制御を1ステップの推論に高速化するRFPO",
      "what": "反復的なODE積分を必要とするフローベースのポリシーを、精度を落とさずに少数ステップ（1ステップ）で実行可能にする最適化フレームワークです。オンラインのReflowによる輸送経路の整流化と、教師モデル（PPOコントローラ）による補完的なアクション空間の監督を組み合わせています。",
      "enables": "Unitree Go2ロボットにおいて、64ステップ実行時の報酬の98.5%を維持したまま、推論レイテンシを4.39msから0.08msへ54.9倍高速化しました。実機での安定した1ステップ歩行を実現しています。",
      "why_it_matters": "高精度だが計算コストが高いフローモデルを、モバイルロボットのハードウェア上でリアルタイム動作可能な速度まで軽量化することに成功しました。",
      "tags": [
        "ロボティクス",
        "モデル圧縮"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
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
      "id": "2610.10528",
      "title": "Long-WAM: Scaling the Context of World-Action Models",
      "url": "https://arxiv.org/abs/2610.10528",
      "pdf": "https://arxiv.org/pdf/2610.10528",
      "authors": [
        "Wei Huang",
        "Bohan Zhang",
        "Chenzhi Liu",
        "Isabella Liu",
        "Shuai Yang",
        "Weian Mao"
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
      "comment": "",
      "hf_upvotes": 89,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "95% success on dynamic cup stacking, where Pi0.5 and Fast-WAM succeed in none of 20 trials",
      "signals": [
        "HF ▲89"
      ],
      "headline": "長期の視覚履歴を効率的に活用しロボット制御を向上させるLong-WAM",
      "what": "リアルタイム制御の制約下で、ロボットの長い視覚履歴（コンテキスト）を扱うための世界・行動モデル（World-Action Model）です。自己回帰的な（AR）事前学習が長期履歴の活用に不可欠であることを示し、ストリーミング・エンコーディングと非同期実行により低遅延での推論を実現しました。",
      "enables": "RoboCasa GR-1において、履歴を19.2秒に増やすことで成功率を63.3%から78.7%に向上させました。実機のUnitree G1等において、既存手法が全敗した動的なカップ積みタスクで95%の成功率を達成し、RTX 5090上で約107msの推論速度を維持しています。",
      "why_it_matters": "視覚履歴の長さが動作の安定性と成功率に直結することを示し、リアルタイム性が求められる複雑な物理操作における長期コンテキストの重要性を確立しました。",
      "tags": [
        "ロボティクス",
        "世界モデル"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10459",
      "title": "NeuralBES: A Differentiable, Control-Aware Emulator for Scalable Building Energy Modeling",
      "url": "https://arxiv.org/abs/2610.10459",
      "pdf": "https://arxiv.org/pdf/2610.10459",
      "authors": [
        "Ting-Yu Dai",
        "Takuya Kurihana",
        "Wing Yee Au",
        "Hon Yung Wong"
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
        "cap",
        "new"
      ],
      "star_quote": "NeuralBES (Building Energy Simulation), a differentiable emulator that resolves this tradeoff by parameterizing a resistance--capacitance (RC) based thermal model",
      "signals": [],
      "headline": "物理構造とニューラルネットワークを統合した建物エネルギーエミュレータNeuralBES",
      "what": "建物の熱モデル（RCモデル）を微分可能なニューラルエンコーダでパラメータ化するエミュレーション手法です。建物のメタデータを物理的に制約された熱容量や熱貫流率にマッピングし、対数空間での並列スキャンを用いて線形漸化式として解くことで、物理的な整合性と計算効率を両立しています。",
      "enables": "物理的に矛盾のない予測を保証しつつ、トランスフォーマーやRNNベースのモデルと比較して10分の1以下のパラメータ数で、最強のベースラインと同等の精度（誤差4 MAPE以内）を達成しました。物理的に妥当なベースラインとの比較では、誤差を半分以下に削減しています。",
      "why_it_matters": "高精度な物理シミュレータの正確さと、データ駆動型モデルのスケーラビリティを統合し、大規模かつ多様な建物群のエネルギー予測を可能にします。",
      "tags": [
        "スマートグリッド",
        "ディープラーニング"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
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
      "id": "2610.09108",
      "title": "Convex-Concave Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.09108",
      "pdf": "https://arxiv.org/pdf/2610.09108",
      "authors": [
        "Shripad V. Deshmukh",
        "Yaswanth Chittepu",
        "Dhawal Gupta",
        "Philip Thomas",
        "Scott Niekum"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 5 figures. Code: https://github.com/UMass-SCALAR-Lab/Convex-Concave-RL",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "the exact per-iteration objective, computable via per-decision importance sampling (PDIS), is a difference-of-convex-constrained difference-of-convex (DC-constrained DC) program.",
      "signals": [],
      "headline": "強化学習の目的関数をDC計画法として定式化し収束性と性能を向上させるCCRL",
      "what": "強化学習の非凸な報酬最大化問題を、log-density-ratio座標系を用いて差凸関数（DC-constrained DC）プログラムとして再定義する手法です。この構造を利用し、逐次凸計画法（SCP）を用いて各反復のプログラムを解くConvex-Concave Reinforcement Learning (CCRL)を提案しています。",
      "enables": "TRPOやPPOなどの既存手法を特殊なケースとして包含しつつ、多段階の意思決定を結合するk軸の導入が可能になりました。ヘルスケア領域のタスクにおいて、調整済みのPPOよりも高速に収束し、学習曲線下の面積（AUC）を11.3%向上させています。",
      "why_it_matters": "従来は代理関数の最適化で回避されていた強化学習の非凸性を、最適化理論の枠組みで構造的に扱うことで、理論的保証と実用的なパフォーマンスの両立を図っています。",
      "tags": [
        "強化学習",
        "数理最適化"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10266",
      "title": "LoomSC: Scalable Deep Subspace Clustering with Projector Factorization and Exact Spectral Reduction",
      "url": "https://arxiv.org/abs/2610.10266",
      "pdf": "https://arxiv.org/pdf/2610.10266",
      "authors": [
        "Nairouz Mrabah",
        "Youssef Melki",
        "Mohamed Bouguessa",
        "Riadh Ksantini",
        "Shakeeb Murtaza",
        "Tehseen Zia"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 7 figures, 5 tables; includes appendices",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LoomSC ranks first or second in all 15 dataset-metric comparisons against 9 state-of-the-art baselines. Its mean accuracy exceeds the highest baseline mean by 6.66 percentage points.",
      "signals": [],
      "headline": "射影行列の分解により大規模データへ線形計算量で対応する部分空間クラスタリングLoomSC",
      "what": "高密度な自己表現行列やスペクトラルクラスタリングのボトルネックを解消するため、射影行列の因数分解（projector factorization）と厳密なスペクトル削減を行うフレームワークです。サンプル数に対して線形な時間・空間計算量を維持しつつ、交互プロクリュステス（Alternating Procrustes）更新により直交性を保ちます。",
      "enables": "5つのベンチマークにおいて既存の最先端9手法を上回る精度を達成し、平均精度が次点のモデルを6.66ポイント上回りました。合成データを用いた実験では、50万サンプルという大規模データにおいても99.8%以上の精度を維持しながらスケールすることが確認されています。",
      "why_it_matters": "従来は計算コストの面で困難だった大規模データに対する高精度な部分空間クラスタリングを、数学的な最適化の工夫により実用レベルに引き上げました。",
      "tags": [
        "クラスタリング",
        "機械学習"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10351",
      "title": "Measurement-Efficient Differentiable Quantum Architecture Search for Combinatorial Optimization",
      "url": "https://arxiv.org/abs/2610.10351",
      "pdf": "https://arxiv.org/pdf/2610.10351",
      "authors": [
        "Lukas Thei{\\ss}inger",
        "Thore Gerlach",
        "Christian Bauckhage"
      ],
      "categories": [
        "quant-ph",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "6 pages, 2 figures. Accepted at the 2026 IEEE 2nd International Conference on Quantum Artificial Intelligence (QAI). Code and data: https://github.com/Newida/ME-DQAS",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We derive the proposed measurement reduction scheme theoretically and validate it experimentally on 3-SAT and MaxCut benchmark problems.",
      "signals": [],
      "headline": "組み合わせ最適化における量子回路探索の測定コストを約40%削減するDQAS手法",
      "what": "微分可能量子アーキテクチャ探索（DQAS）において、ハードウェア実行のボトルネックとなる回路測定回数を削減する手法です。一般的な回転ゲートのパラメータ化と組み合わせ最適化問題のクラスに対し、最適化目標を変えずに勾配測定コストを削減する理論的枠組みを導出しました。",
      "enables": "3-SATおよびMaxCutのベンチマーク問題において、古典的な後処理のオーバーヘッドをほとんど増やすことなく、勾配測定のコストを約39〜41%削減することに成功しました。",
      "why_it_matters": "量子ハードウェアの利用コストが高い現状において、自動化された回路設計（NAS）の実用性を高める重要な一歩となります。",
      "tags": [
        "量子コンピューティング",
        "アーキテクチャ探索"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.09032",
      "title": "Shape-Bayes: Bayesian Inference of Structured Shapes under Visual Ambiguity",
      "url": "https://arxiv.org/abs/2610.09032",
      "pdf": "https://arxiv.org/pdf/2610.09032",
      "authors": [
        "Mani Kumar Tellamekala",
        "Tosh Brown",
        "Michel Valstar"
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
      "star_quote": "Shape-Bayes achieves an absolute improvement of up to ~34% IDR over state-of-the-art deterministic models.",
      "signals": [],
      "headline": "視覚的曖昧さや閉塞に強いベイズ推論を用いた構造化形状復元Shape-Bayes",
      "what": "形状復元を決定論的な回帰ではなくベイズ推論として捉え、不確実性を考慮した視覚認識と幾何学的なプライアを結合するフレームワークです。ノイズの多いランドマーク予測と、PCA形状多様体上の適応的プライアを微分可能なベイズソルバーで統合し、閉形式で事後分布を計算します。",
      "enables": "激しい閉塞がある状況下で、従来の決定論的モデルと比較してIDR（不整合率）を最大34%改善し、相対誤差を12.5%削減しました。また、信頼性の高い不確実性の境界を出力することが可能です。",
      "why_it_matters": "顔の形状復元のような厳密な解剖学的制約があるタスクにおいて、視覚情報の欠損を幾何学的な知識で補完する堅牢なアプローチを提供します。",
      "tags": [
        "コンピュータビジョン",
        "ベイズ推論"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.09118",
      "title": "TopoCurve: Geometry-Aware Topology Reasoning via B\\'ezier Curves in Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.09118",
      "pdf": "https://arxiv.org/pdf/2610.09118",
      "authors": [
        "Mihai Bogdan Deaconu",
        "Laura Dio\\c{s}an"
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
      "comment": "Accepted at NeurIPS 2026 (main track). 15 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "outperforms all existing approaches on endpoint detection (56.8 vs. 52.6 on DET_p).",
      "signals": [],
      "headline": "ベジェ曲線を用いた幾何学的な3Dレーン・トポロジー推論モデルTopoCurve",
      "what": "自動運転における3Dレーンの検出とトポロジー推論を、3次ベジェ曲線という幾何学的なパラメータ表現に基づいて行う建築です。レーンを連続的な曲線としてモデル化し、端点の距離や接線方向の整合性をフーリエ特徴量として符号化してトポロジー予測に利用します。",
      "enables": "OpenLane-V2ベンチマークにおいて、後処理なしのEnd-to-Endカメラ限定手法として最高の50.6 OLSを達成しました。特に端点検出の精度（DET_p）において、従来手法を大きく上回る56.8を記録しています。",
      "why_it_matters": "従来の離散的なポリライン表現の欠点であった滑らかさの欠如や方向情報の曖昧さを、ベジェ曲線による連続的な幾何表現で解決し、推論精度を向上させました。",
      "tags": [
        "自動運転",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.09346",
      "title": "OnlineQAT: On-Policy Distillation for Ultra-Low-Bit Large Language Models",
      "url": "https://arxiv.org/abs/2610.09346",
      "pdf": "https://arxiv.org/pdf/2610.09346",
      "authors": [
        "Wenjun Wang",
        "Heng Li",
        "Yanggan Gu",
        "Hongxia Yang"
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
      "comment": "",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "OnlineQAT obtains the best average among the compared quantized methods: 57.28 at W3A16 and 32.52 at W2A16",
      "signals": [],
      "headline": "量子化LLMの精度低下を自身の生成応答を用いた蒸留で回復するOnlineQAT",
      "what": "4ビット未満の超低ビット量子化LLM向けに、2段階のトレーニングを行うフレームワークです。まずブロック単位の量子化訓練（QAT）を行い、次にモデル自身が生成した応答に対して教師モデルから蒸留信号（reverse-KL）を受け取る「オンポリシー蒸留（OPD）」を適用します。",
      "enables": "Qwen3-1.7Bにおいて、3ビット（W3A16）で57.28、2ビット（W2A16）で32.52という平均スコアを達成し、既存のReasoningQATなどの手法を上回る精度回復を実現しました。",
      "why_it_matters": "量子化モデルが推論時に直面する独自の分布（自身が生成したコンテキスト）上で学習することで、従来の固定データを用いたオフライン学習よりも効果的に量子化誤差を補正できます。",
      "tags": [
        "LLM",
        "モデル量子化"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10507",
      "title": "RECAST: Learning to Compute the Right Context through Adaptive Evidence Routing",
      "url": "https://arxiv.org/abs/2610.10507",
      "pdf": "https://arxiv.org/pdf/2610.10507",
      "authors": [
        "Yilun Hao",
        "Krishna Sayana",
        "Isabella Ye",
        "James S Ren",
        "Sukhdeep Sodhi",
        "Craig Boutilier"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "35 pages, 2 figures, 13 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "formulates evidence construction as a sequential decision process over heterogeneous retrieval and computation operations",
      "signals": [],
      "headline": "複数の情報源から必要な証拠を動的に計算・合成して回答するRECAST",
      "what": "単一の検索結果では不十分な複雑なタスクに対し、検索・フィルタリング・集計などの操作を「証拠構築プロセス」として学習させるフレームワークです。RouterLMが証拠の不足を判断し、必要に応じてCompilerLMがコードを実行してデータを処理し、最終的にAnswerLMが回答を生成します。",
      "enables": "6つのベンチマークファミリーにおいて平均成功率75.6%を達成し、最強のベースラインを15.9%上回りました。また、未学習のベンチマークにおいても平均15.0%の精度向上を示し、高いゼロショット汎化性能を実証しました。",
      "why_it_matters": "従来のRAG（検索拡張生成）が苦手としていた、情報の集約や計算が必要な「導出型」の証拠構築を、エージェント的な意思決定プロセスとして解決しています。",
      "tags": [
        "LLM",
        "RAG"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10054",
      "title": "Transition Path Sampling Using Koopman Operators and Exit-Time Optimal Control",
      "url": "https://arxiv.org/abs/2610.10054",
      "pdf": "https://arxiv.org/pdf/2610.10054",
      "authors": [
        "Boya Hou",
        "Shane Wang",
        "Siddharth Ambekar",
        "Maxim Raginsky",
        "Olgica Milenkovic"
      ],
      "categories": [
        "eess.SY",
        "cs.LG",
        "cs.SY",
        "stat.ML"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "30 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "we propose a new approach for the problem based on Koopman operators",
      "signals": [],
      "headline": "クープマン作用素を用いて稀な状態遷移を効率的にサンプリングするTPS手法",
      "what": "分子力学などの動的システムにおける稀な状態遷移サンプリング（TPS）を、クープマン作用素と脱出時間最適制御として定式化する手法です。クープマン作用素の固有関数から遷移確率（committor関数）を推定し、目標状態に到達するまでの時間を最小化する制御器をRKHS上で閉形式で導出します。",
      "enables": "アラニン・ジペプチドのシミュレーションにおいて、ターゲット到達率を0%から93%（1ps以内）へと向上させました。最適制御器の構築を、単一の等式制約付き二次計画法（KKTシステム）を解くことに帰着させています。",
      "why_it_matters": "シミュレーションを繰り返す従来の機械学習手法に比べ、計算コストを抑えつつ理論的裏付けのある制御器を構築でき、複雑な系の解析を加速させます。",
      "tags": [
        "動力学",
        "最適制御"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
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
      "id": "2610.09823",
      "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
      "url": "https://arxiv.org/abs/2610.09823",
      "pdf": "https://arxiv.org/pdf/2610.09823",
      "authors": [
        "Deyuan Liu",
        "Yihao Hu",
        "Jingxuan Zhang",
        "Xingying Li",
        "Jun Xie",
        "Jiacheng Liu"
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
      "hf_upvotes": 65,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲65"
      ],
      "headline": "画像生成モデルの密なテキスト描画能力を多言語で評価するUltraText Bench",
      "what": "画像内に多数のテキスト領域を含む「密な視覚テキスト」の生成能力を評価する、日英バイリンガルのベンチマークです。24のシーンカテゴリ、3段階の難易度からなる432個のプロンプトを含み、VLM（Q-Judger）を用いて忠実度、鮮明度、空間品質、シーン品質を多角的に測定します。",
      "enables": "最新モデルでも難易度が上がると性能が大幅に低下することを明らかにしました。例えば、Qwen-Image-2512の英語スコアは、低難易度の86.50から高難易度の42.86まで低下することが確認されました。",
      "why_it_matters": "短文のレンダリングが向上する中、現実のポスターや看板のような複雑なテキスト配置に対する生成モデルの限界と特性を定量化するための新たな基準を提供します。",
      "tags": [
        "画像生成",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10524",
      "title": "GRACE: Generation-aware latent compression for efficient video generation",
      "url": "https://arxiv.org/abs/2610.10524",
      "pdf": "https://arxiv.org/pdf/2610.10524",
      "authors": [
        "Jiyoung Kim",
        "Paul Hyunbin Cho",
        "Jisu Nam",
        "Donghoon Lee",
        "Hyunsung Go",
        "Yeonkyeong Lee"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page : https://cvlab-kaist.github.io/GRACE/, 43 pages, 24 figures",
      "hf_upvotes": 64,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲64"
      ],
      "headline": "学習済みDiTとの互換性を保ちつつビデオ生成を11倍高速化するGRACE",
      "what": "学習済みのビデオDiffusion Transformer (DiT) の潜在空間を維持しながら、ビデオオートエンコーダを圧縮する2段階フレームワークです。エンコーダの潜在空間の一部を凍結して互換性を保ち、圧縮で失われる情報を残差として学習し、DiTの特徴空間でアライメントを行うことで生成品質を維持します。",
      "enables": "Wan2.1-I2V-14Bモデルにおいて、トークン数を8分の1に削減し、推論レイテンシを11.1倍（480p解像度で）高速化しました。この大幅な圧縮後も、VBenchにおいて圧縮前と同等の生成品質を維持しています。",
      "why_it_matters": "既存の高品質な学習済みモデルをゼロから再学習することなく、大幅に軽量化・高速化できるため、高解像度ビデオ生成の効率的なデプロイを可能にします。",
      "tags": [
        "動画生成",
        "モデル圧縮"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10429",
      "title": "SGF+: Decoupling Gradient Flows for Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2610.10429",
      "pdf": "https://arxiv.org/pdf/2610.10429",
      "authors": [
        "Zihan Su",
        "Junhao Zhuang",
        "Yaowei Li",
        "Siwen Lu",
        "Haoran Li",
        "Lingen Li"
      ],
      "categories": [
        "cs.CV"
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
      "headline": "自己回帰型ビデオ生成の品質と一貫性を向上させる勾配デカップリング手法SGF+",
      "what": "自己回帰ビデオ生成において、「現在のフレームのノイズ除去」と「将来のためのコンテキスト書き込み」のパラメータを分離する手法（Self Gradient Forcing Plus）です。これら2つの役割の勾配が負の相関（逆向きの更新）を持つという発見に基づき、役割固有のパラメータを割り当てることで最適化を効率化します。",
      "enables": "5秒の動画で学習したモデルを用いて、追加のビデオデータや長い訓練期間なしで、最大24時間にわたる連続的なビデオ生成を可能にしました。既存手法と比較して視覚的品質と長期の一貫性が向上しています。",
      "why_it_matters": "単一のパラメータに複数の役割を負わせる従来の設計が学習を阻害していたことを特定し、モデルの構造的工夫だけで長時間の動画生成を実現できることを示しました。",
      "tags": [
        "動画生成",
        "自己回帰モデル"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10539",
      "title": "Tetris3D: 3D Scene Generation With Objects That Fit Together",
      "url": "https://arxiv.org/abs/2610.10539",
      "pdf": "https://arxiv.org/pdf/2610.10539",
      "authors": [
        "Jaeyeong Kim",
        "Jinhyuk Jang",
        "Jongmin Lee",
        "Kyehong Park",
        "Seungryong Kim"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://cvlab-kaist.github.io/Tetris3D/",
      "hf_upvotes": 35,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲35"
      ],
      "headline": "隣接する物体間の物理的・幾何学的整合性を考慮した3Dシーン生成Tetris3D",
      "what": "単一画像から、物体同士が物理的に噛み合う（fit together）ような整合性のある3Dシーンを復元するフレームワークです。各物体の生成を周囲の物体の幾何学的な物理関係で条件付け、さらに120万シーンを含む物理シミュレーションデータセット「ComOb」を構築して学習に利用しています。",
      "enables": "物体が重なり合ったり隠れたりしている複雑なシーンにおいても、物理的に安定し、かつ幾何学的に妥当な物体の形状とポーズを復元できます。既存手法を上回る生成品質と物理的安定性を達成しました。",
      "why_it_matters": "個別の物体を独立して生成するのではなく、シーン全体としての「収まり」を陽に扱うことで、より現実に即した3D空間の再構成が可能になります。",
      "tags": [
        "3D復元",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10444",
      "title": "RunningTab: Direct Workspace Interaction with Environment-Side Tabs",
      "url": "https://arxiv.org/abs/2610.10444",
      "pdf": "https://arxiv.org/pdf/2610.10444",
      "authors": [
        "Jinheon Baek",
        "Soyeong Jeong",
        "Yumin Choi",
        "Dongsu Han",
        "Sung Ju Hwang"
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
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "LLMエージェントの作業履歴と未読ファイルを管理しタスク完遂を支援するRunningTab",
      "what": "LLMエージェントがファイル群を直接操作して成果物を作る際、コンテキスト窓から溢れがちな作業状況を環境側で記録するフレームワークです。「未完了の要件」「既読ファイルからの抜粋」「リストアップされたが未読の候補」をタブとして管理し、エージェントが終了しようとする際にチェックを行います。",
      "enables": "3つのLLMを用いたベンチマークにおいて、モデル内部で記録を保持する手法を安定して上回るパフォーマンスを示しました。エージェントが必要な情報を見落とさず、すべての要件を解決してから回答する確率が高まります。",
      "why_it_matters": "長文や多数のファイルを扱う実務的なタスクにおいて、エージェントの短期記憶の限界を「環境側の補助記憶」で補完する、実用的なワークフローの設計指針となります。",
      "tags": [
        "LLMエージェント",
        "RAG"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10114",
      "title": "Mechanics of Long-Context Hybrid Models Part 1.1: From Hybrid Attention to Hybrid Position",
      "url": "https://arxiv.org/abs/2610.10114",
      "pdf": "https://arxiv.org/pdf/2610.10114",
      "authors": [
        "Xiaoran Liu",
        "Ziwei He",
        "Xipeng Qiu"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "60 pages, 36 figures, 25 tables, under review",
      "hf_upvotes": 30,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲30"
      ],
      "headline": "ハイブリッド型LLMにおける注意機構の組み合わせとコンテキスト長の関係性を解明",
      "what": "フルアテンションとスライディングウィンドウ（SWA）または線形アテンション（LA）を組み合わせたハイブリッドモデルの挙動を解析した研究です。SWAは長さの補外に、LAは継続事前学習によるコンテキスト拡張に強いという「シーソー効果」を発見し、その原因が位置バイアスの違いにあることを特定しました。",
      "enables": "LAハイブリッドにおいて「Sliding-Window Linear Attention」を提案し、64kのコンテキスト長において性能を維持したまま、学習なしで16倍の長さへの補外（extrapolation）を実現しました。",
      "why_it_matters": "効率的なロングコンテキスト対応のために急速に普及しているハイブリッドモデルの設計指針を理論と実験の両面から提供しています。",
      "tags": [
        "LLM",
        "トランスフォーマー"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.09327",
      "title": "MCFR: A Mask-Guided Coarse-to-Fine Regression Framework for Robust Multi-Variant Board-to-Board Connector Assembly",
      "url": "https://arxiv.org/abs/2610.09327",
      "pdf": "https://arxiv.org/pdf/2610.09327",
      "authors": [
        "Guanghui Shen",
        "Song Wang",
        "Dan Wu"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "IROS"
      ],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 7 figures, 1 table. Accepted for presentation at the 2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026). Finalist for the IROS Best Paper Award for Industrial Robotics Research for Applications",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "基板コネクタの自動組み立て精度を高めるマスク誘導型 coarse-to-fine 回帰 MCFR",
      "what": "電子機器製造における多品種の基板対基板（BTB）コネクタの自動挿入のためのフレームワークです。物体認識マスクをプライアとして導入し、さらに明示的な光度補正（photometric refinement）を行うことで、背景の干渉を抑えつつ高精度な位置合わせを行います。",
      "enables": "実際のスマートフォンの組み立てタスクにおいて、平均99.25%という高い実機挿入成功率を達成しました。背景の変化やコネクタの外観バリエーションに対しても堅牢な動作が確認されています。",
      "why_it_matters": "製品のバリエーションが多く、背景のノイズが多い実際の製造現場において、高い汎用性と信頼性を持つ自動組み立てを実現する実用的な手法です。",
      "tags": [
        "ロボティクス",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
    },
    {
      "id": "2610.10227",
      "title": "From Prompts to Trees: Effective LLM-Guided Tree Generation for Few-Shot Tabular Classification",
      "url": "https://arxiv.org/abs/2610.10227",
      "pdf": "https://arxiv.org/pdf/2610.10227",
      "authors": [
        "Yue Qiu",
        "Zekang Du",
        "Yiqun Diao",
        "Bingsheng He",
        "Qinbin Li"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted to EMNLP 2026 Main as an oral presentation. Code available: https://github.com/yueqiu0/LLMTree",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "LLMの知識を解釈可能な決定木に蒸留し少数データでの表形式分類を改善する手法",
      "what": "LLMが持つ世界知識を決定木に蒸留することで、少数の学習データ（Few-shot）でも高精度かつ解釈可能な表形式データ分類を実現するフレームワークです。LLMに決定木を直接生成させるのではなく、まずルールを生成させ、それを木構造に整理する3段階のパラダイムを提案しています。",
      "enables": "複数の現実世界のデータセットにおいて、既存のベースラインよりも大幅に低いプロンプトコストで、高い分類精度と透明性を両立しました。特にデータが少ない環境での決定木の弱点をLLMの知識で補完しています。",
      "why_it_matters": "LLMの高い推論コストとブラックボックス性を、決定木の高速性と解釈可能性で置き換えることで、実運用に適したAIモデルの構築を可能にします。",
      "tags": [
        "LLM",
        "機械学習"
      ],
      "fetched_at": "2026-10-09T10:49:11.717329+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2610.01780",
      "title": "RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations",
      "abstract": "A companion that talks with a person for months should come to understand them. It should remember what they said, infer who they are, and know when the past bears on the message in front of it. Testing this requires a real person's record, and such records are private, so benchmarks generate the person and the questions and settle in advance what matters. We release \\bench, ten real relationships with an AI companion: 27,218 messages over up to 120 days, released as the conversation and four files derived from it, a profile, a persona, a chat ground truth and a question set, each citing the messages it rests on. Every chat label carries the reasoning trace that produced it, checked stage by stage against the conversation. Three findings follow. First, the past is rarely needed and far away. Pooled measures mislead: a recency window finds the required message for 95.9\\% of probes and 2.2\\% of those that need memory, and at the natural rate 96\\% of the gain from supplying recorded evidence comes from messages that need none. Second, no detector we tried can tell when memory is needed on real messages, authored questions over the same histories leak the cue, and labeling the same messages as memories raises their use by ten to fourteen points. Third, three agent systems reconstruct the persona with the same F1 at a 31-fold difference in cost.",
      "upvotes": 275,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Quis Lab",
      "url": "https://huggingface.co/papers/2610.01780",
      "arxiv_url": "https://arxiv.org/abs/2610.01780",
      "title_ja": "RealCompanion: 長期的な現実世界の会話からの推論による人間理解のベンチマーク",
      "summary_ja": "最大120日間のAIとの実対話データを公開し、長期記憶と推論による深い人間理解を評価可能にする。"
    },
    {
      "id": "2610.08448",
      "title": "Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability",
      "abstract": "On-Policy Distillation (OPD) trains a student on its own generations using teacher feedback. With different tokenizers, comparing teacher and student predictions requires alignment at both sequence and vocabulary levels. In this paper, we examine whether expanding this alignment coverage improves learning. Across three heterogeneous teacher--student pairs on mathematical reasoning and code generation, strict 1:1 groups already cover most student-generated tokens despite substantial vocabulary mismatch. On responses sampled from the students before distillation, the shared vocabulary retains nearly all teacher and student probability mass at strictly aligned positions on average. Restricting reverse KL to a student-selected top-16 subset of the shared vocabulary at each strict position achieves accuracy comparable to full shared-vocabulary OPD, outperforming the evaluated cross-tokenizer baselines. Adding mean squared error supervision on span log-probabilities in mismatch groups gives complete supervision coverage, yet reduces accuracy. At checkpoints from training with only the strict loss, the span gradients show weak or negative directional agreement with the strict gradients and grow in magnitude relative to them. These diagnostics may help explain the accuracy drop from adding span supervision. Our findings motivate a shift from maximizing alignment coverage to prioritizing supervision reliability: compact supervision at strict positions can be more effective than broader coverage that introduces weakly aligned or conflicting training signals.",
      "upvotes": 165,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.08448",
      "arxiv_url": "https://arxiv.org/abs/2610.08448",
      "title_ja": "オンポリシー蒸留の再考：アライメントの網羅性から監視の信頼性へ",
      "summary_ja": "語彙が異なるモデル間でも、厳密に一致するトークンのみを教師として利用することで、効率的かつ安定した蒸留が可能。"
    },
    {
      "id": "2610.05608",
      "title": "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation",
      "abstract": "We present Kandinsky 6.0 Video, a family of foundation diffusion models for synchronized text-to-audio-video generation, comprising Kandinsky 6.0 Video Lite (3B parameters) and Kandinsky 6.0 Video Pro (29B parameters). Both models generate 5-second video clips with synchronized 44 kHz audio, including lip-sync, in text-to-audio-video (T2AV) and image-to-audio-video (I2AV) modes; a built-in super-resolution model raises the output resolution to Full-HD (1920times1080). Building on the video generation capabilities of Kandinsky 5.0, Kandinsky 6.0 Video employs a dual-stream CrossDiT architecture that connects a pretrained video stream and a newly trained audio stream through bidirectional cross-attention for temporal and semantic alignment. Our continuous pretraining strategy first trains the audio stream from scratch on large-scale audio corpora and then trains both streams jointly on paired audio-video data while preserving unimodal fidelity; pretraining is followed by supervised fine-tuning, reinforcement-learning-based post-training, and distillation. In side-by-side human evaluation, Kandinsky 6.0 Video Pro clearly outperforms its predecessor, Kandinsky 5.0 Video Pro, and remains competitive with leading audio-video generation models, particularly in speech quality. To accelerate open research and deployment in multimedia generation, we release the code, model checkpoints, and diffusers integration under the MIT license.",
      "upvotes": 158,
      "github_stars": 222,
      "github_repo": "https://github.com/kandinskylab/kandinsky-6",
      "project_page": "https://kandinskylab.ai/",
      "comments": 4,
      "org": "Kandinsky Lab",
      "url": "https://huggingface.co/papers/2610.05608",
      "arxiv_url": "https://arxiv.org/abs/2610.05608",
      "title_ja": "Kandinsky 6.0 Video：同期したビデオとオーディオを生成する基盤モデル",
      "summary_ja": "デュアルストリーム構造により、リップシンクを含む5秒間の同期したビデオと44kHz音声をテキストや画像から生成。"
    },
    {
      "id": "2610.06647",
      "title": "LoGRA: Scaling LLM Reinforcement Learning with Low-Rank Gradient Sketches",
      "abstract": "Reinforcement learning (RL) has greatly advanced the capabilities of large language models (LLMs), but its memory demands remain a barrier to broader adoption. We introduce LoGRA, an approach to RL post-training that reduces memory by retaining useful learning signals in low-rank gradient sketches. These compact representations support both model updates and efficient policy synchronization. To prevent overly large updates from disrupting learning, we complement gradient compression with predicted-KL step control, which estimates policy changes before applying each update and adjusts its magnitude accordingly. Across reasoning tasks, LoGRA reduces average training memory by up to 45.7\\% without sacrificing performance. It also enables stable training of a 27B-parameter model for over 1,100 steps on a single eight-GPU node, where dense Adam runs out of memory, making previously memory-infeasible RL training practical. Code is available in the https://github.com/skzhang1/labs-molt/tree/logra/examples/scripts/logra{Molt library}.",
      "upvotes": 120,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.06647",
      "arxiv_url": "https://arxiv.org/abs/2610.06647",
      "title_ja": "LoGRA: 低ランク勾配スケッチによるLLM強化学習のスケールアップ",
      "summary_ja": "勾配情報を低ランクに圧縮して保持することで、推論タスクの強化学習におけるメモリ消費を最大45.7%削減。"
    },
    {
      "id": "2609.38879",
      "title": "Does Learning Protein Folding Generalize to Broader Reasoning?",
      "abstract": "Large language models rely heavily on human text, which often conveys surface answers rather than the spatial and structural logic behind them. Protein folding is a natural testbed, because one solved structure yields thousands of exactly checkable spatial and topological statements. We ask: can learning to fold proteins teach general models reusable reasoning capabilities? To answer this, we build FoldingCorpus, a protein-derived question-answer dataset, and Fold2Reason, a recipe that post-trains on it through two complementary signals: discrete structural answers predicted via the model's native language head, and continuous 3D geometry decoded from the same shared representations. On FoldBench, Fold2Reason achieves structure prediction scores 2.7 to 3.5 times those of Qwen3.5-9B. Beyond protein structure prediction, it improves performance on all 10 benchmarks spanning spatial, graph, scientific, and general reasoning, raising macro-average accuracy from 45.09% to 48.33% (+3.23 pp), with positive gains on all 10 benchmarks, while matched controls built from random, synthetic, and shuffled structure yield substantially smaller or negative gains. Our work shows that non-linguistic, structure-dense scientific data can systematically improve broad reasoning in language models, making a solved scientific problem a practical source of post-training supervision.",
      "upvotes": 120,
      "github_stars": 37,
      "github_repo": "https://github.com/GENTEL-lab/Fold2Reason",
      "project_page": "",
      "comments": 4,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2609.38879",
      "arxiv_url": "https://arxiv.org/abs/2609.38879",
      "title_ja": "タンパク質折り畳みの学習は広範な推論に汎用化されるか？",
      "summary_ja": "タンパク質構造予測の学習を通じて、3D形状や論理構造に関する汎用的な推論能力をモデルに獲得させる手法の提案。"
    },
    {
      "id": "2609.38839",
      "title": "FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation",
      "abstract": "Long-horizon video generation requires models to effectively leverage an increasingly long generation history. As the generated history grows, retaining all previous content becomes increasingly expensive and redundant, making effective historical selection essential. Existing approaches often determine historical relevance based on the current content. However, information relevant to the present is not necessarily useful for future generation, while seemingly less relevant history may become important later. Our key insight is that historical information should be selected according to its relevance to future information needs. Capturing these needs does not require generating the full future; instead, a compact representation of what becomes important next is sufficient to guide historical selection. Building on this insight, we propose FrameMorrow, a prospective frame selector that predicts a small set of prospective tokens representing future information needs and uses them to identify relevant information from history. FrameMorrow selects explicit historical frames rather than model-specific internal states, enabling plug-and-play integration across diverse generators, including closed-source models, with little additional inference cost. We evaluate FrameMorrow across five benchmarks and 11 generative models spanning long-video generation, interactive generation, and action-conditioned world models. Extensive experiments demonstrate consistent improvements in long-range consistency, visual quality, and action alignment across diverse generation settings.",
      "upvotes": 112,
      "github_stars": 29,
      "github_repo": "https://github.com/YinBo0927/FrameMorrow",
      "project_page": "https://yinbo0927.github.io/FrameMorrow/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.38839",
      "arxiv_url": "https://arxiv.org/abs/2609.38839",
      "title_ja": "FrameMorrow: 将来のトークンをガイドとした長期ビデオ生成のためのフレーム選択",
      "summary_ja": "現在の文脈だけでなく「将来必要になる情報」に基づいて過去の履歴を選択し、長期ビデオ生成の効率と質を向上。"
    },
    {
      "id": "2609.38078",
      "title": "MotorMind: Scaffolding General Vision Language Models for Zero-Shot Robot Manipulation",
      "abstract": "Vision-language-action (VLA) models have advanced robotic manipulation, but their zero-shot generalization in new tasks and environments remains limited, and their reliance on specialized training keeps them from benefiting directly from rapidly advancing general-purpose vision-language models (VLMs). In parallel, recent agentic robotic systems leverage VLMs for high-level reasoning or coding agents for robot control, but often depend on extensive external models and tools, introducing additional complexity and cost. This motivates us to ask: Can a general-purpose VLM itself operate a robot more like the human teleoperator by reasoning directly from observations, issuing actions, and continuously adapting to execution feedback, without relying on external models such as learned action experts, coding agents or grounding tools like SAM3? In this work, we introduce MotorMind, a robot manipulation harness that connects VLM-proposed mid-level actions to deterministic robot control and feedback, with asynchronous monitoring and background memory updates. Without task-specific policy training, coding agents, or additional grounding tools such as SAM3, MotorMind achieves 66.7% success on the base LIBERO-PRO suites and 53.8% under perturbations, compared with at most 13.3% and 19.2%, respectively, for the prior zero-shot methods we evaluate. The same interface reaches 95% average success on a real xArm6 robot across direct manipulation and human-perturbation settings. Replacing the backbone with a stronger VLM further improves performance, while the remaining failures - primarily due to visual grounding, embodied reasoning, and action knowledge - decrease as VLM capability improves. These results show that a general-purpose VLM, when equipped with an appropriate mid-level action representation and asynchronous execution harness, can perform effective zero-shot robotic manipulation.",
      "upvotes": 111,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://motor-mind.github.io",
      "comments": 2,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2609.38078",
      "arxiv_url": "https://arxiv.org/abs/2609.38078",
      "title_ja": "MotorMind: ゼロショット・ロボット操作のための汎用視覚言語モデルの構築",
      "summary_ja": "外部ツールに頼らず、汎用VLM自体が直接観測から推論し、行動を出力してロボットを自律制御するフレームワーク。"
    },
    {
      "id": "2610.02826",
      "title": "Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite",
      "abstract": "Successful trajectories on difficult tasks provide valuable supervision for model improvement, but specialized harnesses introduce interventions that may be unavailable during deployment. We propose Recursive Self-Rewrite (RSR), a framework that uses one base model, Qwen-3.8-27B, to discover successful solutions under diverse harnesses and reconstruct them as training trajectories under a general harness. A planner extracts procedures into runbooks, a critic screens for verifier and solution leakage and guides recursive revision, and an executor follows qualified runbooks in fresh sandboxes. Across approximately 3K self-curated terminal tasks, three harnesses jointly solve 759 tasks, 34.3% more than the strongest individual harness in the recorded pool. RSR expands 2,001 successful source trajectories into 11,094 rewritten trajectories for supervised finetuning. Training on these trajectories outperforms both the base model and direct trajectory SFT. Compared with the base model, pass@3 increases from 57.0% to 74.2% on Terminal-Bench 2, from 1.5% to 9.1% on Terminal-Bench 4, from 39.0% to 63.0% on our self-curated Terminal-Bench Hard, and from 3.0% to 6.0% on our Software Terminal-Bench. Process reward on Long-Horizon Terminal-Bench rises from 0.21 to 0.29. These results show how diverse harness-assisted experiences can be reconstructed into reusable capabilities for a model operating under a general harness.",
      "upvotes": 103,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.02826",
      "arxiv_url": "https://arxiv.org/abs/2610.02826",
      "title_ja": "再帰的な自己書き換えによる複雑なタスクの軌跡スケーリング",
      "summary_ja": "モデルが多様な環境下で解決策を自ら発見・修正し、高品質なトレーニングデータとして再構築する再帰的枠組み。"
    },
    {
      "id": "2609.38169",
      "title": "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization",
      "abstract": "Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding steps; spatially, errors in different key rows affect model outputs differently, while state magnitudes vary substantially along both rows and columns. Motivated by these observations, we propose STEPQuant, a spatial-temporal post-training quantization framework for Delta-rule recurrent states. STEPQuant allocates precision according to error magnitude and memory lifetime, and jointly fits key-row and value-column scales based on state distributions and key-row impact on output error. Experiments on Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct across both long- and short-generation benchmarks show that STEPQuant closely matches FP32-state accuracy under a nominal 6-bit budget and outperforms uniform INT8 in its 4-bit configuration. Integrated into SGLang with optimized GPU kernels, 6-bit STEPQuant achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%. Our code is available at https://github.com/Dreamer-Toby/STEPQuant.",
      "upvotes": 100,
      "github_stars": 91,
      "github_repo": "https://github.com/Dreamer-Toby/STEPQuant",
      "project_page": "",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.38169",
      "arxiv_url": "https://arxiv.org/abs/2609.38169",
      "title_ja": "STEPQuant: デルタルール回帰状態量子化における誤差の時空間的影響",
      "summary_ja": "線形アテンションの状態量子化誤差が時間的・空間的に与える影響を分析し、精度を維持したままメモリを削減。"
    },
    {
      "id": "2610.02508",
      "title": "World Action Modeling with Progressive Visual Planning",
      "abstract": "World action models (WAMs) have emerged as a promising paradigm for robotic control by jointly predicting future visual dynamics and actions from an initial observation and instruction. However, existing WAMs struggle with long-horizon prediction, as generating dense video rollouts is highly inefficient. Some recent WAMs address this by predicting a single future frame without generating the full video, but this approach neglects how to progress toward the goal. We present ProWAM, a progressive world action model that jointly predicts actions and an ordered sequence of sparse visual sub-goals, providing explicit visual guidance to anchor action generation throughout task execution. This design scales naturally, as sub-goal prediction can be learned from large-scale action-free videos, allowing the video backbone to offload complex visual planning from the action policy. For efficient action generation, ProWAM executes a single video-backbone forward pass to cache sparse sub-goal features, eliminating iterative full-video generation and requiring only lightweight action denoising during replanning. Across extensive evaluations, ProWAM achieves superior out-of-distribution robustness. On simulation benchmarks, it sets new state-of-the-art results on LIBERO-Plus (85.8%) and randomized RoboTwin (75.7%), outperforming the strongest baseline with relative gains of up to +35.9%. On RoboCasa365, ProWAM achieves a 48.1% success rate and 18.2% on the challenging Composite-Unseen split, ranking 4th overall. Crucially, in zero-shot real-world experiments, ProWAM achieves 70.0% success, outperforming the strongest baseline by +15.0 (from 55.0% to 70.0%, a +27.3% relative gain) in novel scenes. These results demonstrate the value of progress-indexed visual foresight for closed-loop control. Our program is in https://sii-ferenas.github.io/ProWAM-page.",
      "upvotes": 96,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://sii-ferenas.github.io/ProWAM-page/",
      "comments": 3,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.02508",
      "arxiv_url": "https://arxiv.org/abs/2610.02508",
      "title_ja": "漸進的視覚プランニングによる世界行動モデリング",
      "summary_ja": "疎な視覚的サブゴールを順次予測することで、長時間のロボットタスクにおいても正確な行動生成をガイドするモデル。"
    },
    {
      "id": "2610.10528",
      "title": "Long-WAM: Scaling the Context of World-Action Models",
      "abstract": "Real-time robot control demands enough visual history to infer motion and task progress, but processing that history can delay action. We present Long-WAM, a model-system framework for scaling the context of causal world-action models under real-time control constraints. Our central finding is that access to history is not the same as using it: longer histories pay off far more when the video foundation is pretrained autoregressively (AR). We first learn causal prediction from robot and egocentric videos without action labels, then preserve this history-to-future structure during world-action adaptation. On RoboCasa GR-1, increasing context from 0.0 to 19.2 seconds raises success from 63.3% to 78.7%, whereas a bidirectionally pretrained initialization shows no net gain; robot-domain AR pretraining further raises peak success on GR-1 and LIBERO-Long. Long-WAM also achieves the best results among compared methods on LIBERO-Long, RoboTwin 2.0, and DOMINO. Streaming observation encoding, asynchronous execution, and hardware-specific acceleration enable deployment on RTX 5090, DGX Spark, and Jetson AGX Thor without dropping future prediction; on RTX 5090, each action chunk, including future-video latent prediction, takes 107.4 ms. Real-time deployment on Unitree G1 and YAM supports dynamic and long-horizon manipulation, including 95% success on dynamic cup stacking, where Pi0.5 and Fast-WAM succeed in none of 20 trials. As a memory-informed executor, Long-WAM also complements higher-level planning in composite tasks.",
      "upvotes": 89,
      "github_stars": 2687,
      "github_repo": "https://github.com/NVlabs/LongLive",
      "project_page": "https://nvlabs.github.io/LongLive/Long-WAM/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.10528",
      "arxiv_url": "https://arxiv.org/abs/2610.10528",
      "title_ja": "Long-WAM: 世界行動モデルのコンテキストスケーリング",
      "summary_ja": "自己回帰的な事前学習により、最大19.2秒の長い視覚履歴を有効活用し、ロボット操作の成功率を大幅に向上。"
    },
    {
      "id": "2610.07767",
      "title": "TRACE: Rollout-Guided Quantization-Aware Training for FP4 Reinforcement Learning of MoE Language Models",
      "abstract": "Reinforcement learning (RL) for post-training large language models (LLMs) incurs substantial computation and memory overhead during rollout generation, which motivates low-precision rollout for efficient RL training. However, existing FP4 RL methods suffer from a key limitation: they primarily optimize quantization accuracy on the training and rollout paths independently rather than directly reducing the discrepancy between the two quantized execution paths. In this work, we propose TRACE (Train-Rollout Quantization Alignment via Compact GuidancE), an FP4 quantization framework for RL training of Mixture-of-Experts (MoE) language models that addresses the limitation of existing FP4 RL methods. TRACE incorporates rollout-guided quantization-aware training that uses rollout-side quantization outcomes to guide training-side FP4 rounding decisions, directly reducing train-rollout discrepancy. Moreover, TRACE adopts an efficient quantization-information caching scheme that selectively retains mantissa and scale information from deeper layers to reduce the storage and communication overhead introduced by rollout guidance. We evaluate TRACE on four large-scale MoE language models across reasoning, coding, and long-horizon RL tasks. Our results demonstrate that TRACE enables joint FP4 weight/activation and FP4 KV-cache rollout with RL performance comparable to BF16 rollout, while achieving up to 5.4xrollout speedup and strong final FP4 performance compared with post-hoc FP4 quantization of BF16-trained policies.",
      "upvotes": 88,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Qwen",
      "url": "https://huggingface.co/papers/2610.07767",
      "arxiv_url": "https://arxiv.org/abs/2610.07767",
      "title_ja": "TRACE: MoE言語モデルのFP4強化学習のためのロールアウト誘導型量子化訓練",
      "summary_ja": "訓練とロールアウトの量子化パスの乖離を抑える手法により、FP4精度での効率的なMoEモデル強化学習を実現。"
    },
    {
      "id": "2610.03391",
      "title": "Native Action-Prior Learning from Videos for World Action Models",
      "abstract": "World action models integrate future visual dynamics with robot action prediction, but their scalability remains limited by the need for action-annotated robot trajectories. Observation-only videos contain rich evidence about interaction dynamics, but existing approaches typically use them either to pretrain visual representations that must later be adapted for control, or to infer latent actions that are subsequently grounded to robot commands. We present NAVA-WAM, which introduces native action-prior learning by directly pretraining the action policy from observation-only videos, avoiding indirect representation-to-control transfer or a separate latent-action model. Our training consists of two stages. First, we pretrain on observation-only videos, where future-video flow-matching supervision over visual transitions is propagated through transition-structured joint attention to optimize the Action-DiT and learn action-relevant priors. Second, we use action-labeled demonstrations to post-train the Action-DiT for robot control through joint video--action flow matching, while asymmetric attention decouples the visual branch from iterative action denoising and enables efficient action-only inference. Extensive experiments show that NAVA-WAM consistently outperforms prior approaches under both in-distribution and out-of-distribution settings, while demonstrating strong action-label efficiency and effective real-robot generalization. These results establish native action-prior learning as an effective approach to directly pretrain action policies from observation-only videos, providing a scalable path beyond action-labeled robot data.",
      "upvotes": 88,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zhaochongan.github.io/projects/NAVA-WAM/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.03391",
      "arxiv_url": "https://arxiv.org/abs/2610.03391",
      "title_ja": "世界行動モデルのためのビデオからの生のアクションプライア学習",
      "summary_ja": "行動ラベルのない動画から直接行動方針を事前学習し、ロボット操作の学習効率とスケーラビリティを向上。"
    },
    {
      "id": "2609.36659",
      "title": "On-Policy Parameter Update Direction Underlies Generalization in LLM Post-Training",
      "abstract": "The strong generalization performance of on-policy post-training paradigms has motivated studies of their parameter update behaviors. However, these studies treat the observed behaviors only as byproducts in on-policy training, overlooking their potential to serve as optimization principles for improving the generalization of other paradigms such as supervised fine-tuning (SFT). To address this limitation, we investigate whether there exists a specific on-policy update behavior that can achieve such improvements. First, our analyses reveal that SFT updates parameters along consistent directions, while the on-policy paradigm continuously adjusts the direction during training. This difference inspires us to focus on the cumulative update direction of each parameter as a promising behavior. Then, we evaluate its effectiveness for improving generalization by proposing On-Policy direction-constrained Supervised Fine-Tuning (OPSFT), which constrains SFT updates to the direction identified by on-policy paradigms. The strong performance of OPSFT indicates that the generalization advantage of on-policy paradigms can be transferred to SFT through the parameter update direction. Once such a direction is identified, even SFT can generalize with its updates constrained to this direction. This finding offers two practical benefits by combining the strong generalization of on-policy paradigms with the advantages of SFT, including the high training efficiency and ability to leverage high-quality trajectories. For efficiency, we identify update directions that support strong generalization using a few on-policy training steps, and subsequently apply OPSFT to achieve high training efficiency. For leveraging high-quality trajectories, OPSFT can utilize these trajectories to continue improving a post-trained model along its update direction without disrupting the ability learned from on-policy training.",
      "upvotes": 87,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "ucas",
      "url": "https://huggingface.co/papers/2609.36659",
      "arxiv_url": "https://arxiv.org/abs/2609.36659",
      "title_ja": "LLMポストトレーニングの汎化を支えるオンポリシーパラメータ更新の方向性",
      "summary_ja": "オンポリシー学習特有の柔軟な更新方向を教師あり微調整に導入することで、モデルの汎化性能を向上させる。"
    },
    {
      "id": "2610.08699",
      "title": "nanoMuse: An Open-Source Personal Agent for Every Device You Own",
      "abstract": "Assistants from 2011 answered and waited, and agents from 2023 did a task and stopped. In September 2026 Meta's Muse showed an agent for one person, with accounts, devices, memory and a conversation that lasts, closed, in a vendor's cloud, in one country. Such an agent is expected to act on a person's accounts and devices, remember them across weeks, speak first when it is worth it, and answer for what it did. It is a kind of software, not a model, and until now had no open counterpart. This report defines the personal agent in five questions and three horizons. It reads how Muse is built from Meta's public record and a copy of its production prompt, each statement marked by its source. It then presents nanoMuse, the open-source counterpart under the GPL-3.0, one agent on every device a person owns, with hands on the phone's screen and the computer's. They share one conversation over a relay anyone can run; every action goes through a Sentinel, memory is files the person can read, and the model is their choice. Its size and cost are given as estimates. What is open, memory with provenance, an evaluation suite for the hands and an open model for them, is set out as a roadmap.",
      "upvotes": 83,
      "github_stars": 355,
      "github_repo": "https://github.com/nano-muse/nanoMuse",
      "project_page": "https://nanomuse.cn/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.08699",
      "arxiv_url": "https://arxiv.org/abs/2610.08699",
      "title_ja": "nanoMuse: あらゆるデバイスのためのオープンソース個人用エージェント",
      "summary_ja": "ユーザーの全デバイスやアカウントを把握し、長期記憶を持って自律的に行動・対話するオープンな個人用エージェント。"
    },
    {
      "id": "2610.08621",
      "title": "Recursive Game Creator: An Agentic Product-Level Experience-Oriented Game Harness",
      "abstract": "Recent game design agents have made substantial progress in generating playable games. However, program correctness does not ensure an enjoyable experience for players. We present Recursive Game Creator, an experience-oriented harness to advance agentic game development from rough game prototypes into entertaining games. Recursive Game Creator organizes recursive development around four components: Designer, Builder, Player, and Reviewer. The Designer translates user instructions and Reviewer's feedback into detailed plans. The Builder turns these plans into candidate games. The coding-native Player creates and executes reusable policies through programmatic interfaces to efficiently collect diverse gameplay trajectories, mitigating evaluation bias caused by slow GUI-based collection. The Reviewer uses carefully designed trajectory-based metrics to induce player preferences, integrating with visual evidence and explicit textual preferences to evaluate games against game-specific criteria. Finally, the Reviewer accepts the better version and provides improvement reviews for the next round, closing the recursive loop. Our method achieves state-of-the-art overall performance of 77.89 on GameCraft-Bench. On GameASG-Bench, it achieves a strict task success rate of 53.2%, a 34.1% improvement over the same-model baseline, and the highest mean runtime-check pass rate at 93.4% among compared methods. A user study shows longer playtime and higher ratings. Code is coming soon.",
      "upvotes": 79,
      "github_stars": 29,
      "github_repo": "https://github.com/IMBALDY/RecursiveGameCreator",
      "project_page": "https://imbaldy.github.io/recursive-game-creator",
      "comments": 2,
      "org": "The University of Hong Kong",
      "url": "https://huggingface.co/papers/2610.08621",
      "arxiv_url": "https://arxiv.org/abs/2610.08621",
      "title_ja": "再帰的ゲームクリエイター：エージェントによる製品レベルの体験重視型ゲーム開発",
      "summary_ja": "設計・構築・プレイ・評価の4役をAIが担い、コードの正しさだけでなくプレイヤーの楽しさを追求したゲームを開発。"
    },
    {
      "id": "2610.03543",
      "title": "DuoMatching: Joint-Marginal Distribution Matching for Few-Step Video Generation",
      "abstract": "Streaming video generation has benefited from distribution matching distillation (DMD), which matches the joint distribution of video frames to a video teacher's approximation of the real video distribution. Although this joint matching mitigates drift during autoregressive rollouts, limitations remain in visual quality and semantic alignment. To address these limitations, we propose DuoMatching, a distribution matching framework that approximates the real video distribution through a unified joint-marginal formulation. On top of existing joint matching formulations, the additional marginal matching objective provides dedicated frame-level supervision from an image generator, transferring complementary visual and semantic priors from it. To apply this frame-level supervision in video generation, we introduce LatentBridge to resolve the latent representation mismatch between the video student and the image teacher. Latent Variation Sampling further distributes such frame-level supervision across distinct temporal segments, reducing redundancy. Experiments demonstrate that DuoMatching improves visual quality, composition, and semantic alignment while largely preserving motion dynamics. Human evaluations show overall preference rates above 80% against all evaluated baselines. The project page is available at https://johnzhan2023.github.io/DuoMatching/.",
      "upvotes": 78,
      "github_stars": 46,
      "github_repo": "https://github.com/JohnZhan2023/DuoMatching",
      "project_page": "https://johnzhan2023.github.io/DuoMatching/",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2610.03543",
      "arxiv_url": "https://arxiv.org/abs/2610.03543",
      "title_ja": "DuoMatching: 数ステップのビデオ生成のための結合・周辺分布マッチング",
      "summary_ja": "動画全体の整合性と個々のフレームの質の双方を最適化することで、わずか数ステップで高品質な動画を生成。"
    },
    {
      "id": "2610.04198",
      "title": "ALoDLM: Adaptively Looped Diffusion Language Models",
      "abstract": "Diffusion language models (DLMs) enable fast generation by predicting multiple tokens in parallel, but their practical adoption remains limited by a persistent quality gap relative to comparably sized autoregressive (AR) models. We attribute this gap to a computation-difficulty mismatch: within a partially observed sequence, some unknown tokens are easy to predict, while others require substantially more computation. Existing DLMs nevertheless apply uniform computational depth to all unknown positions at each denoising step. We introduce ALoDLM, which replaces uniform computation with token-adaptive latent recurrence. At each denoising step, ALoDLM iteratively refines latent representations and allocates computation according to token difficulty. Tokens ready to commit are fed back as discrete context, while unresolved tokens retain and further refine their latent states through additional recurrent passes. To learn token prediction and computation allocation jointly, we formulate token-wise computation schedules as latent variables and derive a conditional negative evidence lower bound (NELBO). We train ALoDLM at 1.7B and 8B parameter scales. Across eleven benchmarks, ALoDLM outperforms all evaluated DLMs and the corresponding AR baselines in average benchmark score at both scales. ALoDLM also retains fast parallel decoding, yielding a strong quality-efficiency trade-off among evaluated autoregressive and diffusion models under optimized inference engines.",
      "upvotes": 73,
      "github_stars": 24,
      "github_repo": "https://github.com/amazon-science/ALoDLM",
      "project_page": "https://alo-dlm.github.io/",
      "comments": 2,
      "org": "Amazon",
      "url": "https://huggingface.co/papers/2610.04198",
      "arxiv_url": "https://arxiv.org/abs/2610.04198",
      "title_ja": "ALoDLM: 適応型ループ拡散言語モデル",
      "summary_ja": "予測が難しいトークンに計算資源を重点的に配分する適応的再帰処理により、拡散言語モデルの生成品質を向上。"
    },
    {
      "id": "2610.02381",
      "title": "Latent-MOPD: Latent Multi-Teacher On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student on the responses it generates. Existing LLM multi-teacher OPD transfers what specialists predict through their output distributions. We introduce Latent-MOPD, to our knowledge the first representation-level multi-teacher OPD method for LLMs. It integrates existing specialists through both their predictions and the hidden states used to compute them, without additional teacher training. To coordinate representation supervision from multiple specialists, we select late-layer targets according to the teacher-student relationship, bridge unequal hidden widths with a shared projection, and group updates by domain. Each teacher's supervision gradually shifts from hidden states to token predictions, with both channels using the same routed specialist. In our main same-family setting, Latent-MOPD outperforms the token-only, representation-only and uniform-averaging baselines on all nine benchmarks across math, code and logic. With the same parameter count as each teacher, the student also surpasses the per-benchmark best teacher on a majority of these benchmarks. With larger, separately developed cross-family teachers, Latent-MOPD outperforms both single-channel baselines on all benchmarks. A same-family all-layer representation-only control remains stable with domain-pure updates but collapses when teacher domains are interleaved within an update. Our results show that a single student can integrate capabilities from several specialists through both their output distributions and internal representations.",
      "upvotes": 70,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://arxiv.org/abs/2610.02381",
      "comments": 3,
      "org": "Zillow",
      "url": "https://huggingface.co/papers/2610.02381",
      "arxiv_url": "https://arxiv.org/abs/2610.02381",
      "title_ja": "Latent-MOPD: 潜在空間におけるマルチ教師オンポリシー蒸留",
      "summary_ja": "複数の専門家モデルから出力分布だけでなく潜在表現も転送し、学生モデルの性能を効率的に高める手法。"
    },
    {
      "id": "2610.07967",
      "title": "DecepEval: A Benchmark for Evaluating Deception in LLM Agents",
      "abstract": "As large language model (LLM) agents become increasingly autonomous, they may pursue task performance through deception, raising concerns about their reliable deployment. Existing evaluations show that LLM agents can deceive, but often examine isolated scenarios or narrowly defined conditions, limiting systematic understanding of when deception becomes more likely. To address this gap, we introduce DecepEval, a benchmark comprising 1,532 instances across 3 task families and 28 professional scenarios. Drawing on classical fraud theories, we propose the LLM Deception Diamond framework, which characterizes four external conditions that may induce deception: pressure, incentive, opportunity, and conflict. DecepEval pairs neutral and induced versions of each instance to measure condition-dependent changes in deception rates, while explicit task facts and observable agent behavior help distinguish deception from capability-related errors. Evaluations of nine frontier LLMs show that inducements increase deception across models and task families, even among models with low baseline deception rates. DecepEval makes these vulnerabilities measurable, providing a shared benchmark for progress toward trustworthy artificial intelligence.",
      "upvotes": 66,
      "github_stars": 3,
      "github_repo": "https://github.com/functy/DECEPEVAL",
      "project_page": "",
      "comments": 1,
      "org": "Xi'an Jiaotong University",
      "url": "https://huggingface.co/papers/2610.07967",
      "arxiv_url": "https://arxiv.org/abs/2610.07967",
      "title_ja": "DecepEval: LLMエージェントにおける欺瞞行為評価ベンチマーク",
      "summary_ja": "圧力や動機などの要因がLLMの欺瞞行為（嘘）を誘発するかを、1,532件のシナリオを通じて体系的に評価。"
    },
    {
      "id": "2610.09823",
      "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
      "abstract": "Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.",
      "upvotes": 65,
      "github_stars": 15,
      "github_repo": "https://github.com/LINs-lab/UltraText_Bench",
      "project_page": "",
      "comments": 2,
      "org": "Westlake University",
      "url": "https://huggingface.co/papers/2610.09823",
      "arxiv_url": "https://arxiv.org/abs/2610.09823",
      "title_ja": "UltraText Bench: 画像生成における視覚的テキスト描画評価の包括的ベンチマーク",
      "summary_ja": "画像内の多地点かつ高密度な文字描画の正確性を、日英両言語で厳密に測定するためのベンチマーク。"
    },
    {
      "id": "2610.10524",
      "title": "GRACE: Generation-aware latent compression for efficient video generation",
      "abstract": "Highly compressed video autoencoders offer an effective way to accelerate video diffusion models, as the Diffusion Transformer (DiT) operates on far fewer tokens. However, such autoencoders are challenging to train, since a higher compression ratio degrades reconstruction quality and recovering it requires more channels, which is known to slow the convergence of the DiT. The compressed latent also differs from the one the DiT was trained on, so the pretrained DiT must be either retrained from scratch or adapted at considerable cost. Compressing the autoencoder the DiT was trained with appears to preserve compatibility, yet optimizing it for reconstruction alone still shifts the latent away from the distribution the DiT has learned. To address this, we propose Generation-Aware Latent Compression for Efficient Video Generation (GRACE), a two-stage framework that compresses a pretrained video autoencoder while keeping it compatible with the pretrained DiT. Specifically, we keep a frozen base latent from the pretrained encoder and learn a residual latent for the information lost under stronger compression, while aligning the compressed latent with the pretrained latent in the feature space of the frozen DiT so that the autoencoder is optimized for generation. We then adapt the DiT with lightweight fine-tuning and asymmetric denoising, where the base is denoised ahead of the residual. GRACE reduces the token count of Wan2.1-I2V-14B by 8x and its latency by 11.1x at 480x832x81, while matching the generation quality of the pretrained pipeline before compression on VBench.",
      "upvotes": 64,
      "github_stars": 17,
      "github_repo": "https://github.com/cvlab-kaist/GRACE",
      "project_page": "https://cvlab-kaist.github.io/GRACE/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.10524",
      "arxiv_url": "https://arxiv.org/abs/2610.10524",
      "title_ja": "GRACE: 効率的なビデオ生成のための生成を考慮した潜在圧縮",
      "summary_ja": "再構成品質だけでなく、拡散モデルの学習効率や互換性を維持したままビデオを高倍率に圧縮する手法。"
    },
    {
      "id": "2610.04299",
      "title": "Questioning the Questions: Sustaining Self-Evolution in Reasoning Models",
      "abstract": "Self-evolving reasoning models learn from their own generated questions, yet repeated self-training can lead to performance collapse. In this paper, we investigate why performance deteriorates over successive rounds and how to sustain self-evolution. Our analysis identifies two recurring quality problems in self-generated questions: invalid questions and repeated variants of the same mathematical questions. First, invalid questions become more prevalent across rounds, and answer-consistency filtering further increases their proportion in training data. Second, existing question diversity controls based on lexical similarity can miss mathematically equivalent questions expressed in different ways, which leads to question diversity collapse in later training rounds. Building on these findings, we introduce R-Quest, which uses question validity and novelty feedback to guide self-evolution. We first train the solver to recognize and reject invalid questions, then use its judgments to guide questioner rewards and filter solver training data. To avoid question repetition, we use a frozen base model to compare sampled question pairs and provide novelty feedback. Empirically, our method consistently achieves the highest average performance on 12 benchmarks in mathematical reasoning, general-domain reasoning, and code generation across two model families. Additionally, R-Quest maintains stable performance gains over ten rounds of self-evolution, peaking in the final round and outperforming R-Zero by 17.32 points.",
      "upvotes": 64,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://jinyuanli0012.github.io/R-Quest/",
      "comments": 2,
      "org": "Huang's INTelligence lab",
      "url": "https://huggingface.co/papers/2610.04299",
      "arxiv_url": "https://arxiv.org/abs/2610.04299",
      "title_ja": "問いへの問い：推論モデルにおける自己進化の持続",
      "summary_ja": "自己生成した問題の質の低下を防ぐフィルタリング手法により、反復的な自己学習による性能崩壊を回避。"
    },
    {
      "id": "2609.39071",
      "title": "LexReward: A Taxonomy-Driven Reward Framework for Legal Language Models",
      "abstract": "Legal language models require reward signals that capture not only answer correctness but also the multidimensional quality of legal responses. Existing reward methods, however, often rely on coarse-grained holistic judgments, providing limited domain specificity and interpretability. We introduce LexReward, a taxonomy-driven framework for legal reward modeling. LexReward characterizes legal response quality along three complementary dimensions: Style, covering lexical and syntactic quality; Element, assessing legal subjects, facts, statutes, and decisions; and Chain, evaluating the order, completeness, correctness, and non-redundancy of legal reasoning. For each dimension, we develop rubrics that specify evaluation criteria and quality levels. The resulting rewards are used to construct pairwise preference data for Direct Preference Optimization (DPO) and reward-model training. Experiments show that the rubric-based rewards reliably distinguish legal responses of different quality and that DPO training on the preference data improves performance across all three dimensions. The learned reward models, LexRM, also support effective downstream optimization: each dimension-specific reward model improves policy performance in its corresponding dimension through reinforcement learning, without requiring reference answers at reward time. Dimension-wise analyses further support the effectiveness of the proposed taxonomy and reward construction.",
      "upvotes": 64,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Tsinghua NLP Group",
      "url": "https://huggingface.co/papers/2609.39071",
      "arxiv_url": "https://arxiv.org/abs/2609.39071",
      "title_ja": "LexReward: 法律言語モデルのためのタクソノミー駆動型報酬枠組み",
      "summary_ja": "スタイル、構成要素、論理の連鎖という3つの法的次元から回答品質を多角的に評価し、解釈性の高い報酬を付与。"
    },
    {
      "id": "2610.03665",
      "title": "Pivot-SD: Efficient Self-Distillation for Masked Diffusion Language Models",
      "abstract": "Masked diffusion language models (dLMs) offer a promising parallel alternative to autoregressive models for complex reasoning. However, they face a distinct credit-assignment challenge, since a few commitments during denoising sharply reduce the uncertainty over the remaining masked positions and shape much of the response. Most post-training recipes for dLMs do not use this signal to decide which tokens to train on: they typically train on the final text or assign rewards to whole denoising steps, rather than selecting the individual commitments that shape the response. We introduce Pivot-SD, an efficient offline self-distillation framework that supervises only these high-impact commitments (pivots). Pivot-SD selects pivots using an information-gain metric measuring uncertainty reduction over the remaining masked positions. Pivots from successful trajectories are trained with cross-entropy, and pivots from failed trajectories with targeted unlikelihood, leaving the rest of the failed trajectory untouched. Using only 200 questions and four rollouts each, Pivot-SD improves LLaDA-8B-Instruct over full-sequence SFT and budget-matched diffusion RL baselines across math and code benchmarks.",
      "upvotes": 62,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://sunwoohong.github.io/pivot-sd",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.03665",
      "arxiv_url": "https://arxiv.org/abs/2610.03665",
      "title_ja": "Pivot-SD: マスク型拡散言語モデルのための効率的な自己蒸留",
      "summary_ja": "生成の不確実性を大きく減らす「重要なトークンの決定」のみに焦点を当てて学習し、効率的に推論能力を向上。"
    },
    {
      "id": "2609.34715",
      "title": "PDE-JEPA: Predictive Representation Learning of Latent Dynamics Modeling for Parametric PDEs",
      "abstract": "Physical trajectories contain more than snapshots of a system: they also reveal how its states evolve under governing conditions. However, representation learning for parametric partial differential equations (PDEs) has largely relied on reconstruction-based objectives that emphasize recovering observed physical fields. In this paper, we investigate predictive representation pretraining as an alternative to reconstruction-based learning. We find that predictive representations preserve rich physical information, yet this advantage alone does not ensure accurate field evolution. Based on these observations, we introduce PDE-JEPA for parametric PDE dynamics. Specifically, we first train an encoder using a masked-latent prediction to capture the underlying regularities of PDE dynamics. To explicitly adapt the pretrained representation toward a more dynamics-aligned state space, we then introduce a geometry projector that aligns latent trajectory geometry with the evolution geometry of physical fields. Finally, building on this geometry-aligned latent space, we further develop a physics-structured latent predictor that decomposes the dynamics into parameter-independent evolution and parameter-dependent response components. Extensive experiments on nine widely used PDE benchmarks demonstrate that our framework outperforms existing state-of-the-art methods by an average of 33.4\\% in-distribution, while achieving an average improvement of 51.4\\% when extrapolating to unseen governing parameters. The project page is available https://tanpig-x.github.io/PDE-JEPA/{here}.",
      "upvotes": 62,
      "github_stars": 9,
      "github_repo": "https://github.com/Tanpig-X/PDE-JEPA",
      "project_page": "https://tanpig-x.github.io/PDE-JEPA/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.34715",
      "arxiv_url": "https://arxiv.org/abs/2609.34715",
      "title_ja": "PDE-JEPA: パラメトリック偏微分方程式の潜在ダイナミクスモデリング",
      "summary_ja": "再構成ではなく、将来の物理状態を予測する学習を通じて、物理現象の進化を正確に捉える表現を獲得。"
    },
    {
      "id": "2610.02840",
      "title": "PointWAM: 3D World Action Modeling for Dexterous Robotic Manipulation",
      "abstract": "World action models jointly learn to forecast world dynamics and predict robot actions, such that the learned internal world dynamics guide accurate actions. Existing approaches typically represent the world as RGB frames or latent counterparts while predicting actions as end-effector poses or joint angles, but they often struggle to capture the 3D spatial structure and contact geometry central to dexterous manipulation. We introduce Point World Action Model (PointWAM), a 3D world action model that decomposes the world into a scene (i.e., environment) and hands (i.e., actor), and jointly forecasts both as 3D point trajectories within a shared space-time coordinate frame. This explicit, disentangled representation enables effective pre-training on large-scale human demonstration videos without requiring any task-specific object or keypoint selection. Given a colored point cloud and a language instruction, PointWAM predicts how the scene and hands co-evolve in 3D space over time, then retargets the forecast hand motion to robot actions. Pre-training on human videos improves average DexJoCo success by 56.9 percentage points, and scene-trajectory supervision adds 10.9 points over forecasting the hands alone. With both, PointWAM surpasses the prior state of the art on ten DexJoCo tasks by 11.7 points and outperforms strong VLAs on a real robot.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://chrockey.github.io/PointWAM/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.02840",
      "arxiv_url": "https://arxiv.org/abs/2610.02840",
      "title_ja": "PointWAM: 器用なロボット操作のための3D世界行動モデリング",
      "summary_ja": "環境と手を3D点群の軌跡として予測することで、器用な操作に不可欠な3D空間構造と接触幾何学を把握。"
    },
    {
      "id": "2610.03574",
      "title": "HyperBrowseComp: A Multilingual and Multimodal Stress Test for Web-Browsing Agents",
      "abstract": "We introduce HyperBrowseComp, a multilingual and multimodal browsing benchmark comprising 423 manually authored and human-validated questions across 13 languages, written by native or highly proficient speakers. Questions are designed to be extremely challenging. Each question targets a concise, publicly verifiable answer whose discovery requires locating obscure evidence, following multi-step clue chains, or inspecting heterogeneous sources such as videos, scanned documents, images, or maps. Easier questions are filtered out by evaluating them with models without internet access to reduce the likelihood that they can be answered with parametric knowledge alone. We evaluate several models using provider-native search and a shared external retrieval harness under a common agent protocol. To contextualize model performance and effort, we also conduct a human evaluation on a sample of the questions. HyperBrowseComp provides a challenging testbed for persistent information seeking across languages and evidence modalities, with difficulty arising from discovering and connecting evidence on the open web.",
      "upvotes": 60,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Mohamed Bin Zayed University of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2610.03574",
      "arxiv_url": "https://arxiv.org/abs/2610.03574",
      "title_ja": "HyperBrowseComp: Web閲覧エージェントのための多言語・マルチモーダル・ストレステスト",
      "summary_ja": "知識だけでは解けず、動画や文書の調査が必要な13言語の超難問により、Web閲覧能力を厳密に評価。"
    },
    {
      "id": "2610.00531",
      "title": "Science or Slop?: Benchmarking and Mitigating Scientific Slop in AI-Generated Papers",
      "abstract": "AI-generated content, often called AI slop, is increasingly common everywhere, particularly in academia. Slop in AI-generated scientific papers, however, has more complex patterns that cannot be easily detected by existing token-based AI detectors. Each part of such a paper looks plausible while the scientific reasoning that connects the parts breaks down, which can mislead how readers assess the work. We benchmark these failures as scientific slop through six measures across Structure, Argument, and Artifacts. We construct SciSlopBench with 390 AI-generated papers, mostly in computer science but spanning the life, social, and natural sciences, each paired with a human-written paper matched by research problem and contribution type. Our measures identify the AI paper in each pair with 85.9% accuracy, compared with 68.7% for Binoculars. Higher scientific slop accompanies lower ICLR ratings and distinguishes rejected from accepted papers above chance in every year from 2017 to 2025. Reducing these patterns, however, is not as simple as directly optimizing the measures. We therefore propose SciSlopHarness, a harness-level framework that guides a fixed LLM to revise slop only where the experiment records support the change. While standard revisions leave residual slop and direct slop-aware prompting triggers reward hacking, SciSlopHarness reduces the remaining AI-human gap by 63% over the strongest revision baseline without requiring human reference targets. Overall, we demonstrate that AI-generated scientific papers leave fundamental traces in their global reasoning, and that responsible mitigation demands strict evidentiary grounding rather than mere prose refinement.",
      "upvotes": 59,
      "github_stars": 13,
      "github_repo": "https://github.com/yerimoh/ScientificSlop",
      "project_page": "https://yerimoh.github.io/scientific-slop-demo/",
      "comments": 2,
      "org": "Seoul National University",
      "url": "https://huggingface.co/papers/2610.00531",
      "arxiv_url": "https://arxiv.org/abs/2610.00531",
      "title_ja": "科学か、それとも「スロップ」か？: AI生成論文における科学的低品質内容の評価",
      "summary_ja": "一見まともだが論理が破綻しているAI生成の「科学的スロップ」を、構造や論理の指標で検出するベンチマーク。"
    },
    {
      "id": "2610.05162",
      "title": "Memadapter: Counterfactual Adaptation Against Memory-induced Sycophancy",
      "abstract": "Long-term memory enables LLM-based agents to retain and reuse information across tasks and sessions, supporting personalization and long-horizon interactions. However, persistent memories can also induce sycophancy, causing agents to over-align with users' historical beliefs even when they are inaccurate, outdated, or inconsistent with objective evidence. Existing mitigation methods assume that memory-induced sycophancy originates from biased or incorrect memories and attempt to reduce this risk by filtering such memories at different stages of the memory pipeline. However, in the real world, objective and correct memories can still induce sycophancy, and the same memory can warrant different influence across different contexts. To this end, we propose MemAdapter, a novel framework that adaptively integrates retrieved memories to support objective and reliable reasoning. Specifically, MemAdapter consists of three components: (i) Counterfactual Induction, which leverages counterfactual reasoning to uncover the potential risk of retrieved memories; (ii) Context-Aware Reflection, which calibrates the inferential influence of each retrieved memory in light of the current task via self-reflection; and (iii) Evidence-Based Reasoning, which grounds the final response in appropriate evidence while preserving the legitimate influence of memory. Extensive experiments on three benchmarks demonstrate that MemAdapter consistently improves memory reliability across diverse scenarios. Our code is available at https://github.com/DEEP-JLU/MemAdapter.",
      "upvotes": 58,
      "github_stars": 27,
      "github_repo": "https://github.com/DEEP-JLU/MemAdapter",
      "project_page": "https://github.com/DEEP-JLU/MemAdapter.git",
      "comments": 2,
      "org": "DEEP Group at Jilin University",
      "url": "https://huggingface.co/papers/2610.05162",
      "arxiv_url": "https://arxiv.org/abs/2610.05162",
      "title_ja": "Memadapter: 記憶に起因する追従を抑制する反事実的適応",
      "summary_ja": "長期記憶を持つエージェントが、誤った過去情報に盲従（同調）せず客観的な証拠を優先するよう調整する手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Liquid AI's d1-3B Makes Structured AI Decisions in 8 Milliseconds Without Generating Text",
      "summary": "Liquid AI's d1-3B skips token generation entirely, returning calibrated classifications and scores in a single forward pass, with multimodal input on edge hardware.",
      "url": "https://alphasignal.ai/news/liquid-ai-s-d1-3b-makes-structured-ai-decisions-in-8-milliseconds-without",
      "published": "2026-10-09T07:00:19+09:00",
      "title_ja": "Liquid AIのd1-3B：テキスト生成なしで8ミリ秒の構造化AI判断を実現",
      "summary_ja": "トークン生成を省き、単一のパスで分類やスコアを返すことで高速な意思決定を可能にするエッジ向けマルチモーダルモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Ships Claude Dashboards and Motion to Turn Data Into Auditable Animations",
      "summary": "Claude can now generate live, query-backed dashboards from your warehouse and build code-driven animated explainers you export as MP4.",
      "url": "https://alphasignal.ai/news/anthropic-ships-claude-dashboards-and-motion-to-turn-data-into-auditable",
      "published": "2026-10-09T04:01:22+09:00",
      "title_ja": "AnthropicがClaude DashboardsとMotionを公開：データをアニメーションに変換",
      "summary_ja": "倉庫のデータからライブダッシュボードを作成し、コード駆動のアニメーション解説をMP4形式で書き出せる新機能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Brings 8x Faster Ultrafast Inference to GPT-6.1 Sol",
      "summary": "OpenAI's premium speed tier now covers its mid-tier reasoning model, hitting up to 8x standard token generation speeds for latency-critical agentic workloads.",
      "url": "https://alphasignal.ai/news/openai-brings-8x-faster-ultrafast-inference-to-gpt-6-1-sol",
      "published": "2026-10-09T03:26:38+09:00",
      "title_ja": "OpenAIがGPT-6.1 Solに8倍速の超高速推論を導入",
      "summary_ja": "中位推論モデルにプレミアム速度階層を適用し、エージェント型ワークロードの遅延を抑えるため標準の最大8倍の生成速度を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "EMA Lightning Beats ElevenLabs on Turkish Speech in Just 34 MB",
      "summary": "A 8.6M parameter Turkish text-to-speech model beats ElevenLabs v4 and a 2.38B competitor on accuracy while running 440x faster than real time.",
      "url": "https://alphasignal.ai/news/ema-lightning-beats-elevenlabs-on-turkish-speech-in-just-34-mb",
      "published": "2026-10-09T01:00:17+09:00",
      "title_ja": "EMA Lightning：わずか34MBでElevenLabsを凌駕するトルコ語音声合成",
      "summary_ja": "リアルタイムの440倍速で動作し、精度面でElevenLabsなどの大型モデルを上回る超軽量なトルコ語TTSモデル。"
    },
    {
      "lab": "OpenAI",
      "title": "How Oracle turns days of work into minutes with ChatGPT and Codex",
      "summary": "Across recruiting, engineering, and operations, Oracle turns specialist knowledge into fast, repeatable workflows with ChatGPT Work and Codex.",
      "url": "https://openai.com/index/oracle",
      "published": "2026-10-09T01:00:00+09:00",
      "title_ja": "OracleがChatGPTとCodexで数日の作業を数分に短縮した方法",
      "summary_ja": "採用や開発、運用において、ChatGPT WorkとCodexを活用し専門知識を迅速かつ反復可能なワークフローに変換。"
    },
    {
      "lab": "OpenAI",
      "title": "Pollo AI turns creative ideas into campaigns with OpenAI",
      "summary": "With GPT-5.6, GPT-6 Astra, and GPT‑Image‑2.5, Pollo AI helps creators turn bold ideas into detailed images and cinematic video ads.",
      "url": "https://openai.com/index/pollo-ai",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "Pollo AIがOpenAIの最新モデルで創造的なアイデアをキャンペーンに変換",
      "summary_ja": "GPT-5.6やGPT-6 Astra等を用い、クリエイターがアイデアを詳細な画像や映画のようなビデオ広告にするのを支援。"
    },
    {
      "lab": "OpenAI",
      "title": "LegalOn halves Codex costs while maintaining development speed",
      "summary": "LegalOn cut estimated daily Codex costs by 65% while maintaining development speed. It matched Astra, Sol, and Luna to tasks and managed budgets strategically.",
      "url": "https://openai.com/index/legalon-halves-codex-costs",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "LegalOnが開発速度を維持しつつCodexのコストを半減",
      "summary_ja": "タスクに応じたモデル選択と戦略的な予算管理により、開発スピードを保ちながらCodexの推定コストを65%削減。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Meta's Llama 3.3 70B Now Fits on a Single 48 GB GPU",
      "summary": "A 4-bit AWQ build of Meta's Llama 3.3 70B Instruct shrinks the 70B model to fit on a single 48GB GPU while preserving most benchmark scores.",
      "url": "https://alphasignal.ai/news/meta-s-llama-3-3-70b-now-fits-on-a-single-48-gb-gpu",
      "published": "2026-10-08T19:00:18+09:00",
      "title_ja": "MetaのLlama 3.3 70Bが単一の48GB GPUで動作可能に",
      "summary_ja": "4-bit AWQビルドにより、性能をほぼ維持したまま70Bモデルを単体の48GB GPUに収まるサイズに軽量化。"
    },
    {
      "lab": "AlphaSignal",
      "title": "AgentCraft Turns Minecraft Into a Live Claude Coding Agent Control Room",
      "summary": "A new open-source Fabric mod turns multi-agent Claude coding into a walkable Minecraft studio, with git worktrees, in-game diffs, and merge gating.",
      "url": "https://alphasignal.ai/news/agentcraft-turns-minecraft-into-a-live-claude-coding-agent-control-room",
      "published": "2026-10-08T15:47:06+09:00",
      "title_ja": "AgentCraft：MinecraftをClaudeコーディングエージェントの管制室に",
      "summary_ja": "Minecraft内で複数のClaudeエージェントによる開発を視覚的に管理し、差分確認や統合制御を行えるオープンソースMod。"
    },
    {
      "lab": "OpenAI",
      "title": "Disrupting AI-enabled “false front” operations",
      "summary": "OpenAI disrupted two AI-enabled influence operations that used false-front journalists and a think tank to spread geopolitical messaging.",
      "url": "https://openai.com/index/disrupting-ai-enabled-false-front-operations",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "AIを活用した「偽装フロント」工作の阻止",
      "summary_ja": "架空のジャーナリストやシンクタンクを装い地政学的なメッセージを拡散していた、AI利用の2つの影響力工作をOpenAIが解体。"
    },
    {
      "lab": "Apple ML",
      "title": "Normalizing Trajectory Models",
      "summary": "Diffusion-based models decompose sampling into many small Gaussian denoising steps, an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. Architecturally, NTM combines shallow invertible blocks within each step with a deep parallel…",
      "url": "https://machinelearning.apple.com/research/normalizing-trajectory-models",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "正規化軌道モデル（NTM）の導入",
      "summary_ja": "逆ステップを条件付き正規化流としてモデル化し、生成ステップを圧縮しても厳密な尤度学習を可能にする新しい拡散モデル。"
    },
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "優れた成果は常に優れた労働者を意味するか？",
      "summary_ja": "AIなどの技術による成果の向上が、必ずしもそれを行う労働者の資質や能力の向上を意味するのかを考察する。"
    },
    {
      "lab": "OpenAI",
      "title": "Helping teens learn, plan, and shape the future of AI",
      "summary": "College Planner is coming to ChatGPT for Teens to help students manage college applications, alongside new flashcards, quizzes, and a teen AI council.",
      "url": "https://openai.com/index/teens-learn-and-plan",
      "published": "2026-10-07T21:00:00+09:00",
      "title_ja": "10代の学習と将来設計を支援するAI機能",
      "summary_ja": "ChatGPT for Teensに大学出願管理、単語帳、クイズ機能を追加し、10代のAI評議会と共に未来を形作る。"
    },
    {
      "lab": "OpenAI",
      "title": "Radisson Hotel Group brings hotel discovery into ChatGPT",
      "summary": "Radisson partnered with Accenture to build a ChatGPT plugin using OpenAI technology, helping travelers find, compare, and book hotels while planning their trips.",
      "url": "https://openai.com/index/radisson",
      "published": "2026-10-07T16:00:00+09:00",
      "title_ja": "ラディソン・ホテル・グループがChatGPTにホテル検索を導入",
      "summary_ja": "旅行の計画中にChatGPT上でホテルの検索、比較、予約を直接行えるようにするOpenAI技術活用のプラグイン。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：オープンかつ軽量なマルチモーダル埋め込みモデル",
      "summary_ja": "テキストや画像などの多様なデータをベクトル化し、関連性検索などを可能にする軽量な公開モデル。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "グローバルな公衆衛生のためのEarth AI地球空間基盤モデルの活用",
      "summary_ja": "Earth AIの持つ地球規模の地理空間データを、世界の公衆衛生課題を解決するための基盤モデルとして開放。"
    },
    {
      "lab": "Apple ML",
      "title": "RISED: Rubrics for Agentic Multi-Environment Selection and Self-Distillation",
      "summary": "Training a single LLM agent jointly across diverse interactive environments has attracted increasing attention as a route to generalist agents. Existing curriculum and data-selection strategies often allocate training at the environment level or prioritize local reward-based signals, without explicitly considering relationships between current rollouts across environments for prompt-group selection. Meanwhile, as environments are learned at different rates, all-failure and all-success rollout groups can coexist within a batch, leaving those data without group-relative reward signals. Both…",
      "url": "https://machinelearning.apple.com/research/rised-multi-environment-selection",
      "published": "2026-10-06T09:00:00+09:00",
      "title_ja": "RISED：エージェントのマルチ環境選択と自己蒸留のためのルーブリック",
      "summary_ja": "多様な環境で学習するLLMエージェントにおいて、報酬信号の乏しいデータや環境間の関係性を考慮した学習選択戦略。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェント型AIのプライバシーとセキュリティにおける未解決問題",
      "summary_ja": "生成AIエージェントが自律的に動く際に生じる、文脈に応じたプライバシー保護とセキュリティ上の新たな課題を分析。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "ユーザー主導のパーソナルセンシングにおける存在論的境界の交渉",
      "summary_ja": "ユーザーが自ら機械学習を訓練する手法を用い、システム設計の権限をユーザーに与えた際の概念的な境界の変化を調査。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能なプライベート学習に向けて",
      "summary_ja": "分散されたモバイル端末などのデータから、プライバシーを数学的に保証しつつ学習を行う手法の研究。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "言語識別が多言語音声モデルの言語学習を改善する",
      "summary_ja": "事前学習中に言語を識別する能力を強化することで、多言語モデル特有の性能低下を抑え、音声・言語的尺度を向上させる。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "拡散モデルにおける信頼性の限界",
      "summary_ja": "離散拡散モデルにおいて、トークン間の依存関係が生成ステップの品質に与える影響と、訓練分布と一致するための条件を解明。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的MLエンジニアリングに強力なエージェント用フレームワークはどこまで必要か",
      "summary_ja": "複雑なオーケストレーターよりも、実行環境へ直接アクセスできるシンプルなコーディングエージェントの有効性を検証。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：フロンティア・インテリジェンスの次なる時代",
      "summary_ja": "次世代の高度な知能を実現する、最先端のAIモデルシリーズ「Gemini 4 Argon」の発表。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの導入",
      "summary_ja": "生物学的な機能を維持したまま、AIが生成したタンパク質に電子透かしを入れる技術の概念実証。"
    },
    {
      "lab": "Google Research",
      "title": "How Diffusion Controller unifies and simplifies AI image generation",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/how-diffusion-controller-unifies-and-simplifies-ai-image-generation/",
      "published": "2026-09-30T03:38:27+09:00",
      "title_ja": "Diffusion ControllerがAI画像生成をいかに統合し簡素化するか",
      "summary_ja": "画像生成のプロセスを制御し、アルゴリズムと理論の観点から生成ワークフローを効率化・統合する技術。"
    },
    {
      "lab": "Google Research",
      "title": "Automating coherent long-form video generation",
      "summary": "Generative AI",
      "url": "https://research.google/blog/coherent-long-form-video-generation/",
      "published": "2026-09-25T04:40:00+09:00",
      "title_ja": "一貫性のある長尺ビデオ生成の自動化",
      "summary_ja": "生成AIを用いて、長時間にわたるビデオ映像を内容の矛盾なく自動で生成する技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 3.8 Live with Live Avatar",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-38-live-with-live-avatar/",
      "published": "2026-09-25T01:20:39+09:00",
      "title_ja": "Live Avatarを備えたGemini 3.8 Liveを発表",
      "summary_ja": "リアルタイムで動くアバターと対話できる、Gemini 3.8 Liveの新しいインタラクティブ機能。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Advancing Private AI Compute with secure, server-side memory",
      "summary": "Introducing private, server-side memory to Private AI Compute for personal AI.",
      "url": "https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/",
      "published": "2026-09-24T01:00:57+09:00",
      "title_ja": "セキュアなサーバーサイドメモリによるプライベートAI計算の進歩",
      "summary_ja": "パーソナルAIのために、サーバー側にセキュアなメモリ領域を導入し、プライバシーを保護した高度な計算を実現。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 3.8 text-to-speech says hello",
      "summary": "",
      "url": "https://deepmind.google/blog/say-hello-to-gemini-38-text-to-speech/",
      "published": "2026-09-24T00:25:14+09:00",
      "title_ja": "Gemini 3.8 音声合成（TTS）の公開",
      "summary_ja": "より自然で流暢な発話が可能な、Gemini 3.8シリーズの新しいテキスト読み上げ技術。"
    }
  ]
};
