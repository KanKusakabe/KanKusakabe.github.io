window.papersData = {
  "updated_at": "2026-10-30 10:41 JST",
  "arxiv": [
    {
      "id": "2610.33351",
      "title": "Real Time Motion Detection in Video Inspired by Photonic Time Stretch",
      "url": "https://arxiv.org/abs/2610.33351",
      "pdf": "https://arxiv.org/pdf/2610.33351",
      "authors": [
        "Callen MacPhee",
        "Yiming Zhou",
        "Bahram Jalali"
      ],
      "categories": [
        "cs.CV",
        "eess.IV",
        "physics.optics"
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
      "star_quote": "The resulting algorithm achieves unprecedented performance in both motion characterization and motion magnification, providing full-resolution motion mapping in real time at nearly 200 frames per second at 4K resolution",
      "signals": [],
      "headline": "物理学のタイムストレッチ原理を応用した4K/8K対応の超高速リアルタイム動作検出技術",
      "what": "光学物理のPhotonic Time Stretchに着想を得たMoViDアルゴリズムです。ビデオを画素ごとの光学時系列波形として扱い、仮想的な分散と位相検出を通じて、ピラミッド再構成を介さず広帯域信号から直接運動を抽出します。",
      "enables": "4K解像度で約200fps、8Kで70fpsという高速なフル解像度モーションマッピングを実現しました。従来のオプティカルフローや学習ベースの手法よりも数桁速い処理が可能です。",
      "why_it_matters": "空間解像度を犠牲にすることなく、計算負荷の極めて低い動作検出を実現しており、ロボティクスや自律走行車におけるリアルタイムな動き補償への応用が期待されます。",
      "tags": [
        "コンピュータビジョン",
        "動作検出",
        "高速計算"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33811",
      "title": "Rectified Language Flow",
      "url": "https://arxiv.org/abs/2610.33811",
      "pdf": "https://arxiv.org/pdf/2610.33811",
      "authors": [
        "Baiyu Su",
        "Runlong Liao",
        "Lizhang Chen",
        "Qiang Liu"
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
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We present Rectified Language Flow (ReLF), a language model that generates text by transporting noise to token embeddings using rectified flow.",
      "signals": [],
      "headline": "Rectified Flowを用いた高品質かつ高速な並列テキスト生成を実現するReLF",
      "what": "連続状態のフローモデルを用いてテキスト生成を行う手法です。Hellinger-SVDによる固定トークン埋め込み、自己コンディショニング・ガイダンス、そして有効なトークン埋め込みへのコミットを促すSingular Logitsを組み合わせています。",
      "enables": "1,024トークンのシーケンス生成において、自己回帰型ベースラインと同等の多様性を維持しつつ、バッチサイズ1で15〜19倍の高速化を実現しました。64ステップの評価でベースラインを上回る生成Perplexityを達成しています。",
      "why_it_matters": "自己回帰モデルの逐次的な制約を打破し、非自己回帰的なフローモデルで高品質な言語生成と推論の高速化を両立させています。",
      "tags": [
        "言語モデル",
        "生成モデル",
        "並列計算"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34875",
      "title": "RubriX: A Fast, Fine-Tunable Non-Autoregressive Rubric Judge",
      "url": "https://arxiv.org/abs/2610.34875",
      "pdf": "https://arxiv.org/pdf/2610.34875",
      "authors": [
        "Balamurugan Paramasivam (CobuildX)",
        "Sudalai Rajkumar (CobuildX)"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 6 figures, 3 tables. Model: https://huggingface.co/CobuildX-AI/RubriX-8B",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "RubriX's latency stays at about 28 ms per judgment as level descriptions grow from 10 to 3,000 tokens",
      "signals": [],
      "headline": "ルーブリックに基づく評価を生成なしで高速・高精度に行うエンコーダ型モデルRubriX",
      "what": "対照学習モデルに着想を得た非自己回帰型の評価モデルです。入力とルーブリックの各レベルの説明を個別にエンコードし、コサイン類似度のソフトマックスによってレベルを判定するため、テキスト生成プロセスを必要としません。",
      "enables": "既存のJevやQwen3-8Bベースのジャッジと比較して大幅な高速化を達成し、3,000トークンのレベル説明文がある条件で18.8倍高速に動作します。精度面でも75.4%のExact Accuracyを記録し、GPT-3.5ベースのG-Evalを凌駕しました。",
      "why_it_matters": "LLM-as-a-Judgeのコストと遅延の原因である「ルーブリック説明文の読み込み」と「トークン生成」を排除し、実用的なスケーラビリティを提供します。",
      "tags": [
        "LLM-as-a-Judge",
        "高速推論",
        "NLP"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35706",
      "title": "Triage: Skip, Skim, or Refine Attention Tiles in Video Diffusion Transformers",
      "url": "https://arxiv.org/abs/2610.35706",
      "pdf": "https://arxiv.org/pdf/2610.35706",
      "authors": [
        "Yeonjae Kim",
        "Omin Kwon",
        "Seong Hoon Seo",
        "Jae W. Lee"
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
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "Triage, a training-free attention method that assigns each tile one of three approximation tiers",
      "signals": [],
      "headline": "ビデオ生成モデルのAttention計算を3段階の精度に振り分け2.3倍高速化するTriage",
      "what": "ビデオDiffusion Transformer（DiT）のAttention計算において、各タイルを「スキップ（ブロック平均）」「スキム（NVFP4）」「洗練（残差補正ありNVFP4）」の3つのティアに動的に割り当てる手法です。軽量なルーターが近似誤差を予測し、最適な演算を選択します。",
      "enables": "Wan2.2やHunyuanVideoにおいて、FlashAttentionと比較して生成速度を最大2.32倍に高めました。他の近似手法と比較しても、より高いPSNR（0.3-3.0dB向上）を維持しています。",
      "why_it_matters": "RTX Blackwell GPUのFP4機能を最大限活用し、生成品質を損なうことなく動画生成の計算コストを大幅に削減します。",
      "tags": [
        "ビデオ生成",
        "Diffusionモデル",
        "推論最適化"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33470",
      "title": "The Future Is Finer: Multivariate Time Series Super-Resolution Forecasting",
      "url": "https://arxiv.org/abs/2610.33470",
      "pdf": "https://arxiv.org/pdf/2610.33470",
      "authors": [
        "Shuhao Li",
        "Weidong Yang",
        "Yue Cui",
        "Fan Zhang",
        "Lu Qin"
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
      "star_quote": "TimeMagnifier is best on every dataset, resolution coefficient, and metric against 15 baselines and cuts MSE by 12.3% on average.",
      "signals": [],
      "headline": "粗い履歴から高解像度な未来を予測する多変量時系列超解像予測手法TimeMagnifier",
      "what": "低解像度でアーカイブされた多変量時系列データから高解像度な予測を行うMTS-SRFタスクを定義し、TimeMagnifierを提案しています。Fourier Anchorによるスパース性の解消、解像度軸に沿った段階的なデノイズ、バンド付きDTWによるアライメントの3段階で構成されます。",
      "enables": "15のベースラインに対し、10個のデータセットすべてにおいて平均12.3%のMSE削減を達成しました。また、プラグインとして既存の予測モデルに適用した場合でもMSEを5.1%〜9.0%改善します。",
      "why_it_matters": "ストレージ節約のために低頻度で保存された過去データから、オートスケーリングやアラートに必要な高頻度の予測を導き出せるようになります。",
      "tags": [
        "時系列予測",
        "超解像",
        "データマイニング"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34952",
      "title": "DimFlow: Bidirectional Grid-Expert Learning for Dynamic Gaussian Reconstruction",
      "url": "https://arxiv.org/abs/2610.34952",
      "pdf": "https://arxiv.org/pdf/2610.34952",
      "authors": [
        "Gabriel Adineera",
        "Jinoh Kim"
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
        "sota"
      ],
      "star_quote": "DimFlow achieves 39.73 dB PSNR, improving on 4D-GS by 1.92 dB while matching its reported 85 FPS",
      "signals": [],
      "headline": "多解像度グリッドと座標ベースExpertの双方向学習による動的3Dシーン復元DimFlow",
      "what": "動的なGaussian Splattingにおいて、効率的な多解像度グリッドと表現力の高い座標ベースのエキスパートブランチを相互作用させるフレームワークです。特徴レベルの敵対的アライメントと適応的融合により、幾何と外観の変化を組織化します。",
      "enables": "D-NeRFやDAVISなどのベンチマークで39.73dBのPSNRを達成し、4D-GSと比較して1.92dBの精度向上を実現しつつ、同等のレンダリング速度（85fps）を維持しました。",
      "why_it_matters": "コンパクトなモデルサイズ（18.9MB）を保ちながら、動的なシーンの再構成品質を大幅に向上させています。",
      "tags": [
        "動的3D復元",
        "3DGS",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35556",
      "title": "LoopFold: Parallelizing Recurrent Depth in Looped Transformers",
      "url": "https://arxiv.org/abs/2610.35556",
      "pdf": "https://arxiv.org/pdf/2610.35556",
      "authors": [
        "Feichen Song",
        "Boyi Zeng",
        "Yiqin Hao",
        "Shixiang Song",
        "He Li",
        "Yizhou Yang"
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
      "star_quote": "LoopFold, which folds computation at multiple recurrent depths into parallel batches for the same token prefix",
      "signals": [],
      "headline": "Looped Transformerの再帰計算を並列化し推論遅延を46%削減するLoopFold",
      "what": "同じ重みを繰り返し適用するLooped Transformerにおいて、複数の再帰深度の計算を並列バッチとして処理する手法です。軽量な予測器（Predictor）が後続ループの入力を推定し、修正器（Corrector）が結果を洗練することで、逐次的な依存関係を緩和します。",
      "enables": "1.4Bモデルを用いた実験で、標準的な9ループのモデルと比較してデコード遅延を46%削減しました。また、再帰の深化に伴う精度の向上も従来の並列手法より安定しています。",
      "why_it_matters": "パラメータ数を抑えつつ計算量を増やして性能を稼ぐLooped Transformerの最大の弱点である、推論の遅延問題を解決するアプローチです。",
      "tags": [
        "Transformer",
        "高速推論",
        "並列計算"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35829",
      "title": "Reva: Real-Time Vulnerability Detection through Contextual Probing of Large Language Models",
      "url": "https://arxiv.org/abs/2610.35829",
      "pdf": "https://arxiv.org/pdf/2610.35829",
      "authors": [
        "Amine Lbath",
        "Massih-Reza Amini"
      ],
      "categories": [
        "cs.CR",
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
        "cap",
        "sota"
      ],
      "star_quote": "REVA on GLM-5.3-Flash reaches 60.0% accuracy in about one second per function. This matches VulTriage",
      "signals": [],
      "headline": "LLMの内部表現をプローブすることで脆弱性検出を250倍以上高速化するREVA",
      "what": "関数単体を判断するのではなく、静的解析結果やコールグラフ情報をコンテキストとして与えられたLLMの「内部表現」を学習済みのプローブで読み取る手法です。エージェントのような多段階の思考プロセスを介さず、1回のフォワードパスで脆弱性を判定します。",
      "enables": "最新のエージェント型検出器と同等の精度（60.0%）を維持しながら、250倍以上の高速化と10分の1以下のコスト削減を達成しました。推論時間は1関数あたり約1秒です。",
      "why_it_matters": "開発中のリアルタイムなスクリーニングに耐えうる速度と、エージェント型に近い高い分析精度を両立させています。",
      "tags": [
        "脆弱性検出",
        "LLM",
        "セキュリティ"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33356",
      "title": "Tight Learned Event-Inertial Odometry (TLEIO): a Transformer-Based Architecture for End-to-End Motion from Event Streams",
      "url": "https://arxiv.org/abs/2610.33356",
      "pdf": "https://arxiv.org/pdf/2610.33356",
      "authors": [
        "Matteo Cascone",
        "David Jensen",
        "Alessandro Pirini",
        "Angelo Stefanini",
        "Pietro Ven\\`e",
        "Marta Tintor\\'e Gazulla"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "On TartanAir, TLEIO reduces average ATE from 2.26 m to 1.10 m over the IMU-only TLIO baseline, while achieving up to 48.9% lower runtime than optimization-based event odometry methods.",
      "signals": [],
      "headline": "イベントカメラとIMUを統合し高速運動下での高精度なオドメトリを実現するTLEIO",
      "what": "イベントストリームから短時間の相対運動を直接学習するEventsFormerをフロントエンドに採用した、フィルタベースのEnd-to-End型オドメトリ手法です。学習された変位予測と不確実性を、EKFを用いてIMUの伝搬と密結合（Tight Coupling）させます。",
      "enables": "TartanAirベンチマークにおいて、IMUのみのベースラインと比較して平均絶対軌道誤差（ATE）を2.26mから1.10mに半減させました。最適化ベースの既存手法よりも最大48.9%短い実行時間を達成しています。",
      "why_it_matters": "明示的な特徴追跡や推論時のポーズ最適化を必要とせず、イベントカメラの特性を活かした低遅延かつ高精度な自己位置推定を可能にします。",
      "tags": [
        "イベントカメラ",
        "自己位置推定",
        "Transformer"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33880",
      "title": "DIGEST: Discovery-Guided LLM Tuning for Symbolic Regression",
      "url": "https://arxiv.org/abs/2610.33880",
      "pdf": "https://arxiv.org/pdf/2610.33880",
      "authors": [
        "Kaifeng Jin",
        "Ruizhong Qiu",
        "Zihao Li",
        "Xiao Lin",
        "Dongqi Fu",
        "Yinglong Xia"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "29 pages, 6 figures, 12 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "DIGEST outperforms the strongest competitor by up to 2.59% in recovery. Among LLM-based baselines, it improves recovery by at least 54.91% while using at most 17.4% of the strongest competitor's mean search time.",
      "signals": [],
      "headline": "LLMのモデリング能力を活用して記号回帰の探索を適応的に導くDIGEST",
      "what": "軽量LLMのデコーダブロックを遺伝的プログラミング（GP）の集団生成ポリシーとして再利用し、数式構造を探索する手法です。GPで発見された高品質な数式をオンラインでLLMのポリシーにフィードバックし、学習を更新するループを構築しています。",
      "enables": "既存のLLMベース手法と比較して、探索時間を最大17.4%に抑えつつ、正解数式の復元率を少なくとも54.91%向上させました。122のブラックボックスデータセットでも最高精度を記録しています。",
      "why_it_matters": "LLMを単なる生成器としてではなく、過去の探索結果を内面化して次の探索をガイドする適応的なエージェントとして機能させている点が特徴です。",
      "tags": [
        "記号回帰",
        "LLM",
        "最適化"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33988",
      "title": "Hybrid Mamba-Transformer Network for Single-Shot 3D Reconstruction from Fringe Patterns",
      "url": "https://arxiv.org/abs/2610.33988",
      "pdf": "https://arxiv.org/pdf/2610.33988",
      "authors": [
        "Xinjie Zhou",
        "XiaoLei Li"
      ],
      "categories": [
        "cs.CV",
        "physics.optics"
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
      "star_quote": "the proposed method achieves an RMSE of 0.548 mm and an SSIM of 0.9985, reducing RMSE by 65.2% and 59.6% relative to UHRNet and HiDNet, respectively.",
      "signals": [],
      "headline": "MambaとTransformerを融合し格子パターン投影による高精度な1枚の画像からの3D復元",
      "what": "Swin TransformerベースのU字型アーキテクチャに、Mambaの視覚状態空間モデルを導入したハイブリッドネットワークです。局所的な縞構造を保持するADVSSブロックにより、線形計算量を維持しつつ長距離の依存関係をモデル化します。",
      "enables": "1枚の格子画像のみからRMSE 0.548mmという高精度な復元を達成し、既存のUHRNetやHiDNetと比較してRMSEを約60〜65%削減しました。SSIMは0.9985に達しています。",
      "why_it_matters": "広域的な一貫性と微細な幾何学的ディテールの両立が困難だったシングルショット3D計測において、計算効率と精度の双方を改善しています。",
      "tags": [
        "3D復元",
        "Mamba",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34248",
      "title": "HNSecW: A Logarithmic-Time MPC Protocol for Approximate Nearest Neighbor Search",
      "url": "https://arxiv.org/abs/2610.34248",
      "pdf": "https://arxiv.org/pdf/2610.34248",
      "authors": [
        "Fahong Zhang",
        "Weijie Jin",
        "Lixu Wang",
        "Ning Luo",
        "Xiao Wang",
        "Wei Dong"
      ],
      "categories": [
        "cs.CR",
        "cs.DB"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose HNSecW, a novel MPC protocol for ANN search that achieves the $O(\\log N)$ search time for the first time.",
      "signals": [],
      "headline": "秘密計算下で対数時間の近似最近傍探索を可能にするHNSecWプロトコル",
      "what": "HNSWアルゴリズムをベースに、制御フローとデータ構造をデータ非依存（Data-independent）に再設計したセキュアマルチパーティ計算（MPC）プロトコルです。オフラインのシャッフルとデータの部分複製を用いることで、探索時間を従来の$O(\\sqrt{N})$から$O(\\log N)$へと短縮しました。",
      "enables": "百万規模のデータセットにおいて、プレーンテキストのHNSWと同等の高精度（再現率90%以上）を維持しながら、従来手法の20倍以上の効率向上を実現しました。",
      "why_it_matters": "RAGシステム等におけるプライバシー保護と検索速度の両立において、理論的な計算量を対数時間まで引き下げた実用的なブレイクスルーです。",
      "tags": [
        "秘密計算",
        "近似最近傍探索",
        "プライバシー"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34263",
      "title": "RacerGS: Residual-Autoregressive Context for 3D Gaussian Splatting Compression",
      "url": "https://arxiv.org/abs/2610.34263",
      "pdf": "https://arxiv.org/pdf/2610.34263",
      "authors": [
        "Wenqing Wang",
        "Huimin Zeng",
        "Yun Fu"
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
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "RacerGS achieves more than 150x compression over vanilla 3DGS and 28x over Scaffold-GS, while providing comparable rendering quality.",
      "signals": [],
      "headline": "残差自己回帰コンテキストを用いて3D Gaussian Splattingを150倍以上に圧縮するRacerGS",
      "what": "アンカーハッシュエンコーディングをコンパクトな特徴量に投影し、自己回帰型GRUを用いてエントロピーモデルのパラメータを動的に洗練する圧縮フレームワークです。空間的な整合性を利用して量子化残差を効率的に符号化します。",
      "enables": "バニラの3DGSに対して150倍以上、Scaffold-GSに対して28倍の圧縮率を達成しながら、レンダリング品質を同等レベルで維持しています。",
      "why_it_matters": "3DGSの課題である巨大なパラメータサイズを大幅に削減し、ネットワークを介した配信やモバイルデバイスでのストレージ効率を向上させます。",
      "tags": [
        "3DGS",
        "データ圧縮",
        "3Dレンダリング"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34321",
      "title": "TopX: Text-to-Motion for Unseen Skeletons from the Skeleton File Alone",
      "url": "https://arxiv.org/abs/2610.34321",
      "pdf": "https://arxiv.org/pdf/2610.34321",
      "authors": [
        "Tengjiao Sun",
        "Pengcheng Fang",
        "Xiaoyu Zhan",
        "Dongjie Fu",
        "Xiaohao Cai",
        "Hansung Kim"
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
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We present TopX, a 73M-parameter flow-matching transformer that generates joint rotations and a root trajectory for any kinematic tree from its tree, rest pose and joint names.",
      "signals": [],
      "headline": "骨格ファイルのみから未知のキャラクターの動作を生成するText-to-Motion技術TopX",
      "what": "Flow-matching Transformerを用い、キャラクターの運動学ツリー、静止ポーズ、関節名のみを入力として動作を生成します。熱核（Heat-kernel）座標を用いた空間・時間エンコーディングにより、任意のトポロジーを持つ骨格に対応します。",
      "enables": "学習データに含まれない未知の骨格（4〜142関節）に対して高品質な動作を生成し、UniMate等の既存手法と比較してFIDスコアを大幅に改善しました。リターゲティングや追加学習なしで動作可能です。",
      "why_it_matters": "多種多様なキャラクターに対して、ボーン構成や種族を問わず即座に自然なアニメーションを提供できる汎用性を備えています。",
      "tags": [
        "Text-to-Motion",
        "アニメーション",
        "Transformer"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34632",
      "title": "RIDE-Splat: Reflection Removal for In-the-Wild Driving Environments",
      "url": "https://arxiv.org/abs/2610.34632",
      "pdf": "https://arxiv.org/pdf/2610.34632",
      "authors": [
        "Kevin David Hayes",
        "Alex Hanson",
        "Allen Tu",
        "Pranav Asthana",
        "Matthias Zwicker",
        "Tom Goldstein"
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
      "star_quote": "RIDE-Splat outperforms 3DGS, DC-Gaussian, and RobustSplat on all nine aggregate metrics, improving PSNR by up to 3.59 dB and reducing LPIPS by up to 0.0876.",
      "signals": [],
      "headline": "走行映像からフロントガラスの反射を除去しクリアな3D復元を行うRIDE-Splat",
      "what": "3D Gaussian Splatting（3DGS）において、世界空間で一貫した透過成分と、カメラに付随する反射成分を分離して学習する手法です。2パスの学習プロセスにより、反射マスクや学習済みネットワークなしで反射のないクリーンな再構成を行います。",
      "enables": "実環境の走行データにおいて、標準的な3DGSや既存のロバスト手法を全指標で上回り、PSNRを最大3.59dB改善しました。評価用の非反射画像に対しても高い忠実度を示しています。",
      "why_it_matters": "車載カメラ映像特有の写り込みを幾何学的に分離することで、自動運転のシミュレーションやデジタルツイン作成の精度を向上させます。",
      "tags": [
        "3DGS",
        "反射除去",
        "自動運転"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34886",
      "title": "ThinkBit: Search Codewords, Recalibrate Scales, Select by Reasoning",
      "url": "https://arxiv.org/abs/2610.34886",
      "pdf": "https://arxiv.org/pdf/2610.34886",
      "authors": [
        "Rhea Sanjay Sukthanker",
        "Pashmina Cameron"
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
      "hf_upvotes": 4,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "at 0.52 GB it is smaller than every published 2-bit GGUF of the model yet more accurate on MATH-500",
      "signals": [],
      "headline": "数学的推論能力を維持したままモデルを2ビットに圧縮するThinkBitフレームワーク",
      "what": "重みの感度に基づきレイヤーごとにビット幅を割り当て、Gumbel-softmaxを用いたスカラー量子化と知識蒸留によるスケール再調整を行う手法です。最後に推論テストを用いて最適なチェックポイントを選択します。",
      "enables": "Qwen3-1.7Bにおいて、0.52GBという極小サイズでありながら、MATH-500ベンチマークで既存の2ビット手法（30.0）を大きく上回る73.0というスコアを達成しました。14Bモデルでも、元のBF16モデルに近い推論性能を維持しています。",
      "why_it_matters": "量子化によって大幅に低下しがちだった「数学的推論能力」を、高度な最適化パイプラインによって極低ビットでも保持できることを示しました。",
      "tags": [
        "モデル量子化",
        "推論最適化",
        "LLM"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34959",
      "title": "GUIFlow: Temporal Redundancy-Aware Incremental Inference for GUI Agents",
      "url": "https://arxiv.org/abs/2610.34959",
      "pdf": "https://arxiv.org/pdf/2610.34959",
      "authors": [
        "Ye Li",
        "Haoran Ding",
        "Huanan Liu",
        "Yuan Meng",
        "Yutian Shen",
        "Yuansong Wang"
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
        "new"
      ],
      "star_quote": "GUIFlow, a framework for full-pipeline incremental inference in multi-image GUI interaction",
      "signals": [],
      "headline": "GUIエージェントの推論を時間的冗長性の活用により最大3.5倍高速化するGUIFlow",
      "what": "マルチステップのGUI操作において、過去の計算状態（KVキャッシュ等）を現在の文脈に位置合わせして注入し、変更があった部分のみを選択的に更新するインクリメンタル推論フレームワークです。追加学習なしで視覚エンコーダとLLMの両方の計算を再利用します。",
      "enables": "OSWorldなどのベンチマークにおいて、タスク性能を維持したまま、推論速度を幾何平均で最大3.39倍から3.49倍高速化しました。",
      "why_it_matters": "画面の大部分が重複するGUI操作において、重複計算を排除することでVLMベースのエージェントの実用性を高めます。",
      "tags": [
        "GUIエージェント",
        "高速推論",
        "VLM"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35868",
      "title": "Retriever-Free Retrieval: Navigating Documents with Decision Models",
      "url": "https://arxiv.org/abs/2610.35868",
      "pdf": "https://arxiv.org/pdf/2610.35868",
      "authors": [
        "Chao Wan",
        "Paul J\\\"unger",
        "Beixi Du",
        "Bodong Liu",
        "Navaneetha Krishnan",
        "Kilian Q. Weinberger"
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
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "DecisionRAG, which brings the capabilities of pretrained language models to retrieval using decision models",
      "signals": [],
      "headline": "外部リトリーバーなしで文書構造をナビゲートする意思決定型RAG「DecisionRAG」",
      "what": "単一のフォワードパスで複数の候補ブランチを同時に評価する決定モデル（Decision Model）を用い、コーパスの階層構造を直接探索する手法です。既存の類似度ベースの検索ではなく、モデルが共有コンテキスト内で各候補の関連性を直接判断します。",
      "enables": "8Bモデルを用いた再ランキング手法と比較して、MultiDoc2Dialで13.8ポイント、Natural Questionsで17.4ポイントの精度向上を達成しました。268万件のWikipediaデータでも1.8秒以内での検索が可能です。",
      "why_it_matters": "従来の「検索（Retrieval）してから生成（Generation）」という分離をなくし、モデルの推論能力を検索プロセスそのものに統合しています。",
      "tags": [
        "RAG",
        "情報検索",
        "LLM"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35336",
      "title": "One Megakernel is Not Enough: Predicting Where to Cut for Streaming Inference",
      "url": "https://arxiv.org/abs/2610.35336",
      "pdf": "https://arxiv.org/pdf/2610.35336",
      "authors": [
        "Aditya Chatterjee",
        "Anand Joseph X M",
        "Sanjay Singh Chauhan"
      ],
      "categories": [
        "cs.PF",
        "cs.DC",
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
      "star_quote": "framework that selects megakernel regions in a streaming inference model from conventional-graph profiles",
      "signals": [],
      "headline": "複数の「メガカーネル」を最適に組み合わせストリーミング推論を高速化するフレームワーク",
      "what": "単一の巨大なメガカーネル（Monolith Megakernel）を作るのではなく、複数のメガカーネルの最適な境界（Cut）を予測し組み合わせる手法です。プロファイルデータから各設計の出力開始時間（TTFA）をシミュレーションにより予測します。",
      "enables": "NH-TTSモデルにおいて、従来のTensorRTグラフ実行と比較して、最初の音声出力までの時間を4.05倍短縮し、スループットを19.7%向上させました。単一メガカーネル構成よりも優れた性能を示します。",
      "why_it_matters": "カーネル融合の限界を打破し、モデル構造やバッチサイズに応じて最適な計算単位を自動構成できる実用的なコンパイラ技術です。",
      "tags": [
        "推論最適化",
        "GPUカーネル",
        "音声合成"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35821",
      "title": "Recertifying decisions via e-closure: uniform improvements of conformal risk control and randomized e-BH",
      "url": "https://arxiv.org/abs/2610.35821",
      "pdf": "https://arxiv.org/pdf/2610.35821",
      "authors": [
        "Tian Bai",
        "Aaditya Ramdas"
      ],
      "categories": [
        "stat.ME",
        "math.ST",
        "stat.ML",
        "stat.TH"
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
      "star_quote": "recertification, a general paradigm for improving procedures by exploiting computable slack",
      "signals": [],
      "headline": "統計的リスク制御の「遊び」を再活用し予測セットや検定精度を向上させる再認定法",
      "what": "Conformal Risk Control (CRC) などの手法において、未使用のリスク予算（スラック）をe-value表現を用いて定量化し、より保守的でない（タイトな）決定を構築する数学的枠組みです。再帰的な計算により、許容可能なコントローラーへと収束させます。",
      "enables": "CIFAR-100の階層分類などの実験において、従来の手法よりも有効性を保ちつつ、より情報量の多い予測セットや、偽発見率（FDR）制御における検出力の向上を確認しました。",
      "why_it_matters": "統計的な保証を維持したまま、既存手法の「慎重すぎた部分」を数学的に削ぎ落とし、実用的な性能を引き出します。",
      "tags": [
        "不確実性定量化",
        "統計的学習理論",
        "信頼予測"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34403",
      "title": "No Cones, No Duals: A Fast and Scalable Solver for NRSfM",
      "url": "https://arxiv.org/abs/2610.34403",
      "pdf": "https://arxiv.org/pdf/2610.34403",
      "authors": [
        "Suryansh Kumar"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages, 14 figures, 19 tables, Accepted for publication at IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "7x-1000x runtime improvements on dense sequences with 28,887 tracked points.",
      "signals": [],
      "headline": "高コストな錐最適化を回避し非剛体3D復元を最大1000倍高速化するNRSfMソルバー",
      "what": "非剛体構造復元（NRSfM）において、微分可能なユークリッド補正とアンロール（Unrolled）化されたスペクトル近接ソルバーを導入した手法です。従来のSDPソルバーやADMMを使わず、現代の高速な線形代数演算にマッピング可能な構造としています。",
      "enables": "約2.9万点の高密度な点群追跡データにおいて、精度を維持したまま、従来手法比で7倍から1000倍の実行時間短縮を達成しました。",
      "why_it_matters": "これまで計算負荷の高さから困難だった、長時間・高密度の映像からの柔軟な3D形状復元を実用的な時間で可能にします。",
      "tags": [
        "3D復元",
        "コンピュータビジョン",
        "最適化"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35690",
      "title": "EvoRouter: Cost-Efficient Multi-Agent Routing via Insight-Guided On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.35690",
      "pdf": "https://arxiv.org/pdf/2610.35690",
      "authors": [
        "Yitao Xiao",
        "Xu Zhang",
        "Ye Cheng",
        "Shaoyong Guo",
        "Yan Sun",
        "Ziyue Zhu"
      ],
      "categories": [
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages, 12 figures, 4 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "EvoRouter achieves an average in-domain accuracy of 68.69%, outperforming the strongest routing baseline by 7.23 percentage points",
      "signals": [],
      "headline": "インサイト共有と知識蒸留によりコスト効率の高いマルチエージェントを構築するEvoRouter",
      "what": "マルチエージェントの構成（モデル選択、協力モード、対話回数等）を動的に最適化するルーティング手法です。専門家エージェントが過去の成功・失敗から「インサイト」を抽出し、それを用いたオンポリシー蒸留を通じてルーターの計画能力を向上させます。",
      "enables": "19のデータセットにおいて、既存の最強ルーティング手法を精度で7.23ポイント上回りつつ、推論コストを50.95%削減することに成功しました。",
      "why_it_matters": "膨大なマルチエージェントの組み合わせ空間から、性能とコストのバランスが最適な構成を自己進化的に導き出せるようになります。",
      "tags": [
        "マルチエージェント",
        "LLM",
        "強化学習"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33568",
      "title": "Trajectory2Gym: Decision-Grounded Compositional Interaction Synthesis for Tool-Use Agents",
      "url": "https://arxiv.org/abs/2610.33568",
      "pdf": "https://arxiv.org/pdf/2610.33568",
      "authors": [
        "Yihao Hu",
        "Zhihao Wen",
        "Yitong Lin",
        "Siyuan Lu",
        "Pan Wang",
        "Wei Wu"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 336,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲336"
      ],
      "headline": "エージェントが見える情報のみに基づいた「根拠ある学習経験」を構築するTrajectory2Gym",
      "what": "ツール利用エージェントの学習において、単に成功した軌跡を集めるのではなく、エージェントがその時点で観測可能な情報から判断可能なステップ（Decision Grounding）のみを抽出・生成して学習に用いる手法です。",
      "enables": "Qwen3の各サイズにおいて、ツール利用ベンチマーク（Tau1/2, BFCL）のスコアを16.9〜29.8ポイント大幅に改善しました。特に多ターンの複雑な対話で高い効果を発揮します。",
      "why_it_matters": "「成功はしているが学習には適さない（根拠が不明瞭な）」データを排除し、質の高い対話経験を意図的に構成することの重要性を示しています。",
      "tags": [
        "ツール利用",
        "LLMエージェント",
        "SFT"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34662",
      "title": "StreamVibe: Proactive Video Agents for Evolving User Intent",
      "url": "https://arxiv.org/abs/2610.34662",
      "pdf": "https://arxiv.org/pdf/2610.34662",
      "authors": [
        "Chengzhi Liu",
        "Yuxiang Lai",
        "Yuzhe Yang",
        "Yanqing Liu",
        "Jiheng Hou",
        "Yue Cao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "43 pages",
      "hf_upvotes": 245,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲245"
      ],
      "headline": "ユーザーの潜在的な意図を察して能動的に応答するビデオエージェントStreamVibe",
      "what": "ストリーミングビデオ観測からユーザーの明示的・暗示的な意図を推論し、階層的メモリを用いて意図の状態を管理する能動的（Proactive）モデルです。新しいベンチマークStreamVibe-Benchとともに、適切な応答タイミングと内容を学習します。",
      "enables": "一般的なビデオ理解性能を維持しつつ、暗示的な意図への対応においてベースライン比で10.7%〜12.3%の応答品質向上を達成しました。",
      "why_it_matters": "「何々をして」と言われるのを待つ受動的なAIから、画面の状況からユーザーの困りごとを察して動く次世代のアシスタントへの進化を目指しています。",
      "tags": [
        "ビデオ理解",
        "LLMエージェント",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33966",
      "title": "InteractiveWorld: A Verifiable Human-Centric Environment for Building Better Interactive MLLM Assistants",
      "url": "https://arxiv.org/abs/2610.33966",
      "pdf": "https://arxiv.org/pdf/2610.33966",
      "authors": [
        "Qinsi Wang",
        "Wei Wen",
        "Chong Zhou",
        "Saksham Suri",
        "Zechun Liu",
        "Lemeng Wu"
      ],
      "categories": [
        "cs.HC",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 113,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲113"
      ],
      "headline": "物理作業を行う人間をAIがガイドする能力を検証する環境InteractiveWorld",
      "what": "AIアシスタントが人間に指示を出し、人間が行動した結果を環境に反映する、人間中心のクローズドループ検証プラットフォームです。これに基づき、120のタスクからなる動的なベンチマークInteractiveBenchを構築しました。",
      "enables": "Claude 5.1などの最先端MLLMでも、長期的なガイダンスや計画タスクにおいて成功率は20〜25%に留まることを明らかにしました。既存モデルが物理世界での人間支援において依然として大きな課題を抱えていることが示されました。",
      "why_it_matters": "ウェアラブルデバイス等を通じた「現実世界での人間支援AI」の研究を、検証可能な形で促進するための基盤となります。",
      "tags": [
        "MLLM",
        "人間支援AI",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35845",
      "title": "Work Agents: Systems, Capabilities, and Optimization",
      "url": "https://arxiv.org/abs/2610.35845",
      "pdf": "https://arxiv.org/pdf/2610.35845",
      "authors": [
        "Zishan Xu",
        "Enjun Du",
        "Mingqi Gao",
        "Cheng Yang",
        "Junhao Shen",
        "Zirong Chen"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 103,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲103"
      ],
      "headline": "デジタル空間での実務を遂行する「ワークエージェント」の能力体系と最適化の枠組み",
      "what": "単なる情報生成を超え、ツールやアプリケーションを駆使して実務（Work）を遂行するエージェントを、システムレベルの視点から定義・分類したサーベイ論文です。永続性と開放性の2軸で動作条件を体系化しています。",
      "enables": "信頼性の高い実務遂行に必要な5つのコア能力ファミリーを特定し、モデルと実行環境（Harness）の双方をいかに共同最適化すべきかの指針を提示しました。",
      "why_it_matters": "ワークエージェントという新しい分野に対して、評価指標から今後の研究の方向性までを網羅した統一的なフレームワークを提供します。",
      "tags": [
        "LLMエージェント",
        "実務遂行",
        "サーベイ"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33956",
      "title": "Continual Learning Exam: Benchmarking Long-Horizon RSI and Experiential Learning in LLM Agents",
      "url": "https://arxiv.org/abs/2610.33956",
      "pdf": "https://arxiv.org/pdf/2610.33956",
      "authors": [
        "Haoyu Zhao",
        "Sitian Tu",
        "Yuxuan Huang",
        "Huichi Zhou",
        "Zhangyue Yin",
        "Jiahao Huang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CL",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://haoyu-zhao.github.io/CLE/index.html",
      "hf_upvotes": 49,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲49"
      ],
      "headline": "専門職のワークフローを通じた長期的な経験学習能力を測定するCLEベンチマーク",
      "what": "50人以上の専門家が作成した、89の職種にわたる120のタスク（5段階の難易度）からなる継続学習ベンチマークです。エージェントは前のレベルで得た経験を活かして、より難易度の高い次のレベルに挑む必要があります。",
      "enables": "最先端のLLMでも、全5レベルを完遂できたのは23.3%に過ぎないことが判明しました。フィードバックによる修正を許容しても、完遂率はわずか5.3ポイントの向上に留まり、継続学習の困難さが浮き彫りになりました。",
      "why_it_matters": "単発のタスク性能ではなく、「経験から知識を蓄積し、次に応用する」という知的な成長能力を厳密に評価できます。",
      "tags": [
        "継続学習",
        "LLMエージェント",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33135",
      "title": "WorldCast: World-Consistent Character Video Generation with Large-Angle Camera Control",
      "url": "https://arxiv.org/abs/2610.33135",
      "pdf": "https://arxiv.org/pdf/2610.33135",
      "authors": [
        "Lei Cao",
        "Yu Liu",
        "Wenhua Liao",
        "Peng Zhang",
        "Fei Wang",
        "Hao Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "大きなカメラ視点の変化下でも一貫したキャラクター動画を生成するWorldCast",
      "what": "1枚の画像から深度推定を用いて3D点群を作成し、ターゲットの軌道に沿って投影することで幾何学的なガイドを行うフレームワークです。GAMA（幾何整列メモリアテンション）により、複数の参照ビューから視点に適した特徴を抽出します。",
      "enables": "大きな回転や移動を伴うカメラワークにおいても、キャラクターのアイデンティティや幾何構造を崩さずに一貫性のある動画生成が可能です。",
      "why_it_matters": "既存の動画生成モデルが苦手としていた「大幅な視点変更による未描画領域の補完」において、3D幾何学的アプローチを組み合わせることで高い品質を達成しています。",
      "tags": [
        "動画生成",
        "3D幾何",
        "キャラクター一貫性"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34415",
      "title": "Spatial Audio Generation and Editing with Executable Plans and Self-Distilling Transfusion",
      "url": "https://arxiv.org/abs/2610.34415",
      "pdf": "https://arxiv.org/pdf/2610.34415",
      "authors": [
        "Kam Man Wu",
        "Yu Zhang",
        "Pengjun Fang",
        "Mingfei Chen",
        "Weijia Chen",
        "Zeyue Tian"
      ],
      "categories": [
        "cs.SD",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "28 pages, 2 figures",
      "hf_upvotes": 42,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲42"
      ],
      "headline": "生成・編集プランに基づき高品質な立体音響を合成するフレームワークAMBIT",
      "what": "ScenePlanと呼ばれる実行可能なプランに基づき、一次アンビソニックス（FOA）形式の立体音響を生成・編集する手法です。自己回帰的なプランニングとRectified Flowによる音声レンダリングをTransfusionバックボーンで結合しています。",
      "enables": "指示文に基づき、特定の音源の3D軌跡を変更したり、音源を追加・削除したりする高精度な編集を、他の音源の品質を損なうことなく実現しました。",
      "why_it_matters": "音響の生成だけでなく、「プラン」を介することで直感的な3D空間オーディオの編集を可能にしている点が革新的です。",
      "tags": [
        "立体音響",
        "音声生成",
        "AI編集"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33413",
      "title": "AV-FABLE: Audio-Visual Manipulation Forensics in Long-Form Videos",
      "url": "https://arxiv.org/abs/2610.33413",
      "pdf": "https://arxiv.org/pdf/2610.33413",
      "authors": [
        "Yuesheng Huang",
        "Hoi Fan Au",
        "Jiaqi Hou",
        "Ruicheng Zhang",
        "Jiarui He",
        "Haocheng Yang"
      ],
      "categories": [
        "cs.CV",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "41 pages, 10 figures, including appendices",
      "hf_upvotes": 37,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲37"
      ],
      "headline": "長尺映像内の微細なAI改ざんを音と映像の両面から検知するAV-FABLE",
      "what": "長尺動画（計998時間）に含まれる音と映像の個別の改ざんタイムラインを持つ、新しいディープフェイク検知ベンチマークです。AV-LLMの凍結された特徴量から音と映像のデコーダを分離して読み取るNFSR手法を提案しています。",
      "enables": "AV-LLMのゼロショット判定では困難だった改ざん検知において、内部特徴を読み取ることで高い局所化精度を達成しました。未知のデータセットに対しても高い汎化性能を示します。",
      "why_it_matters": "従来の「顔のすり替え」だけでなく、長尺動画の中で一瞬だけ行われる音声や映像の巧妙な改ざんを特定する実用的なフォレンジック技術です。",
      "tags": [
        "ディープフェイク検知",
        "マルチモーダル",
        "動画解析"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.33512",
      "title": "Eat Your Precision: Precision Objective Mitigates Reward Hacking in Rubric-based RL",
      "url": "https://arxiv.org/abs/2610.33512",
      "pdf": "https://arxiv.org/pdf/2610.33512",
      "authors": [
        "Hyun Ryu",
        "Jong-Heon Kim",
        "Yiqing Xie",
        "Seungone Kim",
        "Carolyn Rose",
        "Eunho Yang"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 33,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲33"
      ],
      "headline": "「正確さと必要性」を報酬に組み込みLLMの不必要な冗長さを抑えるFORK",
      "what": "ルーブリックに基づく強化学習（RL）において、網羅性（再現率）だけでなく、回答の各要素が正確かつ必要であるか（精密性）を評価するFORK報酬を提案しています。不必要な記述や事実誤認をペナルティ化します。",
      "enables": "従来の再現率重視のRLと比較して、医療や健康に関するベンチマークで勝率が大幅に向上（10.6%→68.0%など）しました。回答の質を保ちながら長さを適切に短縮できます。",
      "why_it_matters": "RLHFなどで発生しがちな「長く書けば報酬が高くなる」という報酬ハッキング（Reward Hacking）を抑制し、簡潔で正確な回答を促します。",
      "tags": [
        "強化学習",
        "LLM",
        "報酬設計"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.34785",
      "title": "Natural Jammers: When Non-Robust Features Become Antagonistic",
      "url": "https://arxiv.org/abs/2610.34785",
      "pdf": "https://arxiv.org/pdf/2610.34785",
      "authors": [
        "Jiaming Zhang",
        "Fuyao Zhang",
        "Pengjun Xie",
        "Wei Yang Bryan Lim"
      ],
      "categories": [
        "cs.CV",
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 Spotlight",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "特定の幾何学的構造がAIを誤らせる現象「Natural Jammers」の解明",
      "what": "標準的なモデルが正解できず、ロバストなモデルが正解できる「Jammed Set」を分析し、高周波成分と特定の空間構造が一致したときに発生する「Spectral-spatial Locking」という現象を特定しました。",
      "enables": "画像にわずかな幾何学的変換やスペクトルフィルタリングを施すだけで、誤予測を修正できることを示しました。一方で、このジャミング現象は変換によって消滅するのではなく、画像全体に再分配されるという性質も明らかにしました。",
      "why_it_matters": "敵対的攻撃なしの自然な画像においても、特定の視覚パターンがAIを「妨害（Jamming）」していることを示し、モデルの非ロバスト性の本質に迫っています。",
      "tags": [
        "信頼性",
        "ロバスト性",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35501",
      "title": "Learning Scene Coordinate Reconstruction from Unposed Images via Pose Graph Optimization",
      "url": "https://arxiv.org/abs/2610.35501",
      "pdf": "https://arxiv.org/pdf/2610.35501",
      "authors": [
        "Tze Ho Elden Tse",
        "Jizong Peng",
        "Angela Yao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [
        "CVPR"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted to CVPR 2026 (Highlight). Project page: https://eldentse.github.io/visual_localization_pgo_public/",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "ポーズグラフ最適化によりラベルなし画像群からの3Dポーズ推定精度を向上",
      "what": "順序のない画像集合からカメラポーズとシーン座標を学習するACE-Zeroに、ポーズグラフ最適化（PGO）を統合した手法です。不確実性を考慮し、エピポーラ幾何やオプティカルフローの整合性を利用してカメラポーズを精緻化します。",
      "enables": "グローバルな幾何学的整合性を強制することで、複雑なシーンや曖昧なシーンにおけるポーズのドリフト（蓄積誤差）を抑制し、推定の堅牢性を高めました。",
      "why_it_matters": "学習ベースの推論と伝統的な幾何学的最適化を融合させることで、教師なしSfMの精度を一段階引き上げています。",
      "tags": [
        "SfM",
        "3D復元",
        "最適化"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    },
    {
      "id": "2610.35710",
      "title": "Detecting bus delays and service anomalies in Niter\\'oi with autoencoder latent feature representations",
      "url": "https://arxiv.org/abs/2610.35710",
      "pdf": "https://arxiv.org/pdf/2610.35710",
      "authors": [
        "Matheus Germano",
        "Claudio E. C. Campelo"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 9 figures, 11 tables. Full report for the NetMob 2026 Data Challenge (Niterói, Brazil). Winner of the Best Poster award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "GPSテレメトリの自己符号化器表現を用いたバスの遅延とサービス異常の検知",
      "what": "ブラジルのバス運行データを用い、オートエンコーダーでトリップを低次元ベクトルに圧縮し、遅延分類と異常検知を行う手法の検証です。再構成誤差を異常スコアとして利用します。",
      "enables": "遅延検知においては、潜在表現を用いるよりも従来のサマリー特徴量を用いた方が精度が高い（ROC-AUC 0.846）という結果になりました。一方で、運行日の異常性については安定したスコアが得られることを確認しました。",
      "why_it_matters": "都市交通における教師なし学習の適用限界と可能性を実データで示しており、解釈性の課題や特徴量選択の影響を明らかにしています。",
      "tags": [
        "スマートシティ",
        "異常検知",
        "オートエンコーダー"
      ],
      "fetched_at": "2026-10-28T10:02:33.036298+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.34283",
      "title": "ChronoReplay: One Answer Interface Is Not Enough for Streaming Spatial Intelligence",
      "abstract": "Training a spatial VLM to answer which side an object lies on does not require it to preserve the metric displacement that determines that answer, while supervision for a distance estimate may leave categorical relations largely unconstrained. When post-training emphasizes one readout, improvements can therefore concentrate on that interface while transfer to others remains weak or even degrades; we call this observed specialization interface lock-in. ChronoReplay addresses it by replaying heterogeneous spatial supervision as chronologically ordered episodes, retaining source-native targets, and balancing supervision across families. Under the same observation access, a single ChronoReplay checkpoint improves OVO-S-Bench, OST-Bench, and UCS-Bench together, including a 13.41-point gain on OST-Bench, and achieves the highest three-benchmark mean among the supervision settings compared here. Same-data controls further separate the ingredients of this transfer: answer serialization redistributes gains across OST and UCS, family-balanced learning improves over ordinary joint SFT and natural turn weighting, and chronological replay exceeds a shifted-order control by about 2.41 OST points across two paired seeds. Adaptive frame selection then changes evidence access while keeping the trained model fixed, providing an additional inference-time gain at lower visual cost. Streaming spatial performance depends on what distinctions supervision preserves, how heterogeneous histories are organized during learning, and what causal evidence inference makes available at test time.",
      "upvotes": 413,
      "github_stars": 19,
      "github_repo": "https://github.com/yihaohu0118/ChronoReplay",
      "project_page": "https://yihaohu0118.github.io/ChronoReplay/",
      "comments": 2,
      "org": "LINs lab",
      "url": "https://huggingface.co/papers/2610.34283",
      "arxiv_url": "https://arxiv.org/abs/2610.34283",
      "title_ja": "ChronoReplay：ストリーミング空間知能のための多角的インターフェース",
      "summary_ja": "異種の空間教師データを時系列エピソードとして再生し、特定の回答形式への特化を防ぐことで、単一モデルによる距離推定と関係把握の両立を可能にする手法の提案。"
    },
    {
      "id": "2610.36077",
      "title": "The Trinity:Capability-Driven Recursive Self-Improvement for Multimodal Agents",
      "abstract": "Multimodal intelligence can be viewed as human-guided co-evolution between worlds and agents through interaction. However, scaling this process faces two bottlenecks: constructing heterogeneous, verifiable environments is costly, and manual Harness iteration cannot keep pace with growing task diversity and complexity. A key insight is that tasks with different modalities and surface forms can share the same underlying capability requirements. We therefore introduce The Trinity, a recursive self-improvement framework coupling world generation with Harness evolution through three roles: Creator, Explorer, and Evolver. Drawing on verified execution trajectories, Evolver shifts the basis of task organization from surface categories to shared requirements, reorganizing the original task tree into a hierarchical capability tree. We introduce Capability-Driven Real2Sim2Real: for heterogeneous tasks at the same node, Creator abstracts their common requirements into simplified, verifiable simulated worlds for capability learning, while evaluation on original tasks measures transfer. Along this capability tree, Explorer progressively evolves reusable capability modules through selective inheritance, forming a Harness tree whose validated updates accumulate across iterations within a fixed topology. The resulting Harnesses specialize in different capabilities, motivating a Capability-Aware Harness Router that uses public task information to select compatible module configurations from the tree. Our evolved Harnesses improve mean performance by 34 points across 28 training benchmarks and 26 points across 18 unseen benchmarks, including two real-world embodied tasks.",
      "upvotes": 386,
      "github_stars": 30,
      "github_repo": "https://github.com/InfRec-Cardinal/The-Trinity",
      "project_page": "https://trinity-rsi.github.io/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.36077",
      "arxiv_url": "https://arxiv.org/abs/2610.36077",
      "title_ja": "The Trinity：マルチモーダルエージェントのための能力駆動型再帰的自己改善",
      "summary_ja": "生成、探索、進化の3つの役割を連携させ、検証済みの実行軌跡から環境構築とタスク進化を自動化することで、マルチモーダルエージェントの能力を再帰的に向上させる枠組み。"
    },
    {
      "id": "2610.35013",
      "title": "Multiscale Policy Optimization for Long-Horizon LLM Agents",
      "abstract": "Long-horizon LLM agents interact with their environments through complete assistant turns while generating each action token by token. We observe that critic values vary primarily across turns, motivating optimization anchored at turns with finer credit allocation among tokens. We propose Multiscale Policy Optimization (MPO), combining Multiscale Advantage Estimation (MAE) and turn-level importance sampling to align credit assignment and policy updates at the turn scale. Extensive experiments across search, tool-use, and automation tasks with 4B and 30B-A3B models demonstrate consistent gains over strong RL baselines.",
      "upvotes": 380,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "IQuest",
      "url": "https://huggingface.co/papers/2610.35013",
      "arxiv_url": "https://arxiv.org/abs/2610.35013",
      "title_ja": "長期間LLMエージェントのためのマルチスケール方策最適化",
      "summary_ja": "トークン単位とターン単位の利点を組み合わせたMPOを提案し、検索やツール利用などの長期間タスクにおいて、適切な報酬割り当てと効率的な学習を実現。"
    },
    {
      "id": "2610.33568",
      "title": "Trajectory2Gym: Decision-Grounded Compositional Interaction Synthesis for Tool-Use Agents",
      "abstract": "Successful tool-use trajectories are not necessarily useful supervision. Even successful interactions may underrepresent multi-step dependencies or contain actions that are unjustified by the information visible to the agent at decision time. We identify two coupled requirements for effective trajectory supervision: compositional coverage, so that important observation-action dependencies are represented, and decision grounding, so that each supervised action is supported by the learner-visible interaction history. We introduce Trajectory2Gym, which constructs executable interactions around under-supported compositional structures and derives supervision only from grounded decisions in their realized executions. Structural-support selection allocates the resulting experience, while parent-normalized supervised fine-tuning preserves the semantic interaction as the unit of training weight. This reframes trajectory generation as the deliberate construction of learnable interaction experience, rather than the collection of successful trajectories. Across five Qwen3 scales, Trajectory2Gym improves Tau1, Tau2, and BFCL at every tested scale, increasing the equal-weight three-benchmark mean by 16.9-29.8 percentage points. The gains are strongest in stateful and multi-turn interaction, where later decisions depend on earlier observations and feedback. Our results suggest that scaling tool-use agents depends not only on collecting more successful trajectories, but on constructing interactions whose dependencies are represented and whose decisions are learnable from the agent's visible history.",
      "upvotes": 367,
      "github_stars": 23,
      "github_repo": "https://github.com/yihaohu0118/Trajectory2Gym",
      "project_page": "https://yihaohu0118.github.io/Trajectory2Gym-page/",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.33568",
      "arxiv_url": "https://arxiv.org/abs/2610.33568",
      "title_ja": "Trajectory2Gym：ツール利用エージェントのための意思決定根拠に基づいた構成的対話合成",
      "summary_ja": "重要な依存関係を網羅し、かつエージェントが視認可能な履歴に基づいた行動のみを教師データとして抽出・生成することで、効果的なツール利用学習を可能にする手法。"
    },
    {
      "id": "2610.32285",
      "title": "Trial by Trace: Benchmarking AI Agent Harnesses for Reliability and Failure Attribution",
      "abstract": "LLM agents are increasingly used to solve real-world problems, and their effectiveness depends on both the underlying models and the harnesses that support their operation. However, most existing benchmarks focus on model capabilities and overall agent performance, with limited attention to the evaluation of agent harnesses. To address this gap, we introduce TraceTrial-Bench, which organizes harness reliability into seven components covering context, execution, governance, lifecycle, observability, tools, and verification. We construct 95 expert-level, mechanism-oriented tasks with executable or state-based ground truth to support semantically equivalent comparisons while preserving the native behavior of each harness. We design a Trajectory Tracing (TT) module to capture agent execution traces and introduce a two-layer evaluation framework that separately assesses agent performance and harness reliability. In addition, we design a Multi-source Evidence Acquisition (MEA) module to provide evidence from the agent context, harness, and execution environment for LLM-based evaluation, and develop a Failure Attribution (FA) module that uses explicit mechanism chains to support attribution at the run level. Across 4 harnesses, 9 models, and 95 tasks, our evaluation of 3,420 runs yields macro-averaged harness scores ranging from 59.8% to 72.0%, while 31.1% of runs achieve task success despite failing at least one harness criterion. TraceTrial-Bench provides an auditable and reproducible foundation for comparing agent harnesses, diagnosing their failures, and studying how harness design interacts with model behavior.",
      "upvotes": 299,
      "github_stars": 23,
      "github_repo": "https://github.com/TraceLite-AI/TraceTrial-Bench",
      "project_page": "https://tracelite.ai/trial-by-trace.html",
      "comments": 6,
      "org": "TraceLite AI",
      "url": "https://huggingface.co/papers/2610.32285",
      "arxiv_url": "https://arxiv.org/abs/2610.32285",
      "title_ja": "Trial by Trace：信頼性と失敗原因特定のためのAIエージェント実行基盤ベンチマーク",
      "summary_ja": "モデル性能ではなく、実行基盤（ハーネス）の信頼性に焦点を当て、ツール使用や実行管理など7つの要素を評価する95の専門的なタスクを備えたベンチマークの提案。"
    },
    {
      "id": "2610.31668",
      "title": "Reading, Writing, Sharing, and Interacting with the World through Video",
      "abstract": "Video foundation models have advanced rapidly in understanding and generating visual sequences, while video world models seek to capture the underlying dynamics of the world they depict. Despite their different objectives, both concern the relationship between video observations and an evolving world. This survey adopts world modeling as a unifying lens for examining these developments. Viewing an observed video as a partial, lossy, and temporally ordered projection of a latent temporal world, we organize the literature around four complementary operations: reading infers world properties from observed video; writing synthesizes video from specified or learned world conditions; sharing integrates understanding and generation through common modeling mechanisms; and interacting predicts and updates world states under actions and evolving observations. This perspective distinguishes temporal coherence in observed or generated sequences from consistency in the underlying world state. Across tasks, representations, models, datasets, and benchmarks, we trace a shift in emphasis from clip-level recognition and perceptual fidelity toward persistent state, controllable evolution, physical and causal validity, and evaluation grounded in interaction and downstream decisions, and we distill the open challenges that follow.",
      "upvotes": 295,
      "github_stars": 32,
      "github_repo": "https://github.com/vid-gen/awesome-video-world-model",
      "project_page": "https://vid-gen.github.io/video-world-model-survey/",
      "comments": 2,
      "org": "University of Oxford",
      "url": "https://huggingface.co/papers/2610.31668",
      "arxiv_url": "https://arxiv.org/abs/2610.31668",
      "title_ja": "ビデオを通じた世界の読み取り、書き込み、共有、対話",
      "summary_ja": "ビデオを潜在的な世界の不完全な投影と捉え、読み取り、書き込み、共有、相互作用という4つの操作軸でビデオ基盤モデルと世界モデルの関連性を整理したサーベイ。"
    },
    {
      "id": "2610.34662",
      "title": "StreamVibe: Proactive Video Agents for Evolving User Intent",
      "abstract": "Vision-language models are shifting from offline passive understanding toward online proactive interaction. However, prevailing methods largely rely on explicit requests while miss the implicit user intent (e.g., \"where should I click next?\" while a user navigate a website), meanwhile fail to update the state simultaneously as user requests might update continuously. These limitations make them less suited to intent-aware interaction in practical. To address these challenges, we introduce StreamVibe-Bench, a new benchmark serving as testbed for user intent interaction, with 4.1K evaluation samples and 85K training samples spanning explicit, implicit, and dynamic intents. Building on this benchmark, we develop StreamVibe-VL, a streaming proactive model that infers implicit user intents from continuous observations and dynamically tailors its interactions as these intents evolve. We further introduce StreamVibe-Harness, which maintains user intents as persistent states with a fleixble lifecycles via a hierarchical memory to track the latest user intent and environmental state. Our experiments reveal three key findings: (i) StreamVibe-VL preserves strong general video understanding while improving response timing and answer quality by 10.7% over other baselines; (ii) existing proactive models remain limited in understanding user intent and deciding when to respond, especially under implicit and dynamic intents; and (iii) StreamVibe-Harness further improves response consistency and adaptation over sustained interaction, resulting in a 12.3% gain in proactive interaction.",
      "upvotes": 172,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.34662",
      "arxiv_url": "https://arxiv.org/abs/2610.34662",
      "title_ja": "StreamVibe：進化するユーザーの意図に対応する能動的ビデオエージェント",
      "summary_ja": "明示的な要求だけでなく、ウェブ操作中の「次はどこをクリックすべきか」といった潜在的・動的なユーザー意図を汲み取って能動的に対話するためのベンチマークを導入。"
    },
    {
      "id": "2610.34073",
      "title": "Memory Tax: Dissecting the Net Value of Agent Memory",
      "abstract": "Memory is increasingly used in long-horizon agents, yet the net value of building memory over direct retrieval from raw history remains largely unclear. Through a large-scale evaluation across multiple benchmarks and model backbones, we find many dedicated memory systems underperform naive RAG in many cases, indicating a negative net value. Taking RAG as a reference, we dissect the net value of memory into the gains and losses over direct retrieval, termed memory benefit and memory tax. These gains and losses arise because memory process changes how the raw information is organized and accessed. We view such changes as the double-edged deviations from the raw history. They are originally designed and introduced to benefit the task, for example by reorganizing facts or distilling preferences, but some may also remove or obscure evidence, giving rise to memory tax. Since memory benefit reflects the expected gains of its design, we then focus more on the overlooked memory tax, study how it arises from the system and evaluation side, and generalize the concept to more application scenarios of memory. We hope the notion of memory tax can provide a new lens and shift more attention from standalone performance to the net value of memory, informing more reliable memory designs and evaluations. We will open-source the code and results to the community. Project Page: https://hexuan21.github.io/MemoryTax/",
      "upvotes": 151,
      "github_stars": 10,
      "github_repo": "https://github.com/hexuan21/MemoryTax",
      "project_page": "https://hexuan21.github.io/MemoryTax/",
      "comments": 5,
      "org": "University of Illinois at Urbana-Champaign",
      "url": "https://huggingface.co/papers/2610.34073",
      "arxiv_url": "https://arxiv.org/abs/2610.34073",
      "title_ja": "Memory Tax：エージェントメモリの純価値の解剖",
      "summary_ja": "専用のメモリシステムが単純なRAGより劣る「メモリ税」の存在を指摘し、情報の再構成がもたらす利益と損失を大規模評価を通じて分析。"
    },
    {
      "id": "2610.32749",
      "title": "Efficient Streaming Audio-Visual Target Speaker Extraction for Real-World Acoustic Scenes",
      "abstract": "Streaming audio-visual target speaker extraction (AVTSE) is essential for latency-sensitive applications. However, current causal systems face two coupled gaps. First, standard benchmarks fix the number of speakers at two and ignore the near-/far-field interference, reverberation, and sudden noise of real scenes. Second, high-performance causal architectures are too heavy for edge deployment. Lightweight alternatives try to reclaim capacity by repeatedly invoking a small separator, which offsets the savings. To address the first gap, we release RealSSA, a realistic AVTSE benchmark consisting of RealSSA-Sim and RealSSA-Real. RealSSA-Sim provides controllable simulated scenes with 1--5 dynamic near-field interfering speakers; scenes with far-field interference additionally include 10--15 far-field interfering speakers. RealSSA-Real provides a held-out real-recorded evaluation set. To address the second gap, we propose Falcon, a causal AVTSE method. Its Separator performs multi-scale time-frequency separation in a single encoder--decoder pass. We train Falcon with an encoder-space speaker contrastive loss. This loss suppresses near-field leakage at zero inference cost and transfers across backbones. Falcon achieves state-of-the-art extraction quality on RealSSA-Sim, LRS2-2Mix, LRS3-2Mix, and VoxCeleb2-2Mix. Compared with the causal AV-TFGridNet baseline, it cuts parameters by 91.9%, computation by 20.2 times, and GPU inference latency by 11.1 times. Code and demo are available at https://cslikai.cn/Falcon/.",
      "upvotes": 150,
      "github_stars": 20,
      "github_repo": "https://github.com/JusperLee/Falcon",
      "project_page": "https://cslikai.cn/Falcon/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.32749",
      "arxiv_url": "https://arxiv.org/abs/2610.32749",
      "title_ja": "現実の音響シーンに向けた効率的なストリーミング視聴覚対象話者抽出",
      "summary_ja": "多人数や騒音、残響がある過酷な実環境をシミュレートしたベンチマークを公開し、エッジデバイスで動作する軽量かつ高性能なストリーミング視聴覚話者抽出システムを開発。"
    },
    {
      "id": "2610.37381",
      "title": "PDRVLA: A Vision-Language-Action Model with Physical Dynamics Representations",
      "abstract": "Vision--Language--Action (VLA) models generate robot actions from visual observations and language instructions, but their understanding of physical dynamics remains limited. Video world models can capture scene dynamics, yet generating future videos introduces high latency into the control loop. We introduce PDRVLA, whose lightweight Physical Dynamics Module extracts physical tokens from vision--language features to condition action generation without online video generation. The module learns through direct prediction of future RGB, depth, and optical-flow features, with auxiliary supervision through a frozen pretrained video world model. Training relies entirely on publicly available data, expanded through human-to-robot synthesis, subtask annotation, and embodied chain-of-thought (ECoT) annotation. Across four simulation benchmarks, PDRVLA achieves success rates of 99.3% on LIBERO, 89.9% on LIBERO-Plus, 93.6% on RoboTwin~2.0, and 81.5% on SimplerEnv. Ablations show improved future prediction with world-model supervision and evaluate how subtask conditioning, future object-pose supervision, and ECoT training affect action success.",
      "upvotes": 145,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37381",
      "arxiv_url": "https://arxiv.org/abs/2610.37381",
      "title_ja": "PDRVLA：物理力学表現を備えた視覚・言語・行動モデル",
      "summary_ja": "軽量な物理力学モジュールにより、オンラインのビデオ生成を行わずに将来の特徴量を予測することで、物理現象の理解を伴うロボット操作を低遅延で実現する手法。"
    },
    {
      "id": "2610.34467",
      "title": "DynaFlow: Learning Free-Form Multi-Agent Orchestration",
      "abstract": "Multi-agent systems often rely on predefined collaboration structures, limiting their ability to adapt to diverse task requirements. We introduce DynaFlow, a framework that integrates free-form executable workflow synthesis into the action space of the main agent. The agent decides when collaboration is needed and generates task-specific programs that coordinate sub-agents through sequential or parallel execution, structured information exchange, and verification. Execution results and traces inform subsequent actions, enabling the agent to adapt collaboration as reasoning progresses. We train only the main agent through supervised fine-tuning on distilled trajectories, followed by refinement on examples filtered for unsupported premises, biased verification, and information-flow defects. All sub-agents remain fixed, separating orchestration learning from executor capability improvement. Across six benchmarks spanning mathematical reasoning, scientific question answering, and multi-hop retrieval, DynaFlow achieves 88.08% overall accuracy in Forced mode, outperforming the strongest evaluated baseline by 10.90 percentage points with the same Qwen3.5-27B backbone. Workflow analysis finds more explicit use, verification, and refinement of upstream outputs after training, highlighting cross-stage information flow as a key dimension of multi-agent orchestration.",
      "upvotes": 142,
      "github_stars": 152,
      "github_repo": "https://github.com/amiya-special/Dynaflow",
      "project_page": "https://amiya-special.github.io/DynaFlow-website",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.34467",
      "arxiv_url": "https://arxiv.org/abs/2610.34467",
      "title_ja": "DynaFlow：自由形式のマルチエージェントオーケストレーション学習",
      "summary_ja": "メインエージェントが必要に応じてサブエージェントを動員するワークフローをプログラムとして生成・実行し、タスクに合わせて柔軟に連携構造を構築できるフレームワーク。"
    },
    {
      "id": "2610.19687",
      "title": "Function-Space Temporal Self-Distillation for Policy Optimization",
      "abstract": "Reinforcement Learning with Verifiable Rewards (RLVR) improves reasoning in language models, but scalar outcomes provide coarse supervision over response trajectories. Self-distillation offers denser token-level guidance by comparing an unassisted policy with a feedback-informed self-teacher, yet the teacher evolves with the student, creating unstable targets and motivating additional regularization. We introduce Function-Space Policy Optimization (FSPO), a single-policy framework that combines current privileged adaptation with function-space temporal consolidation. FSPO stores sparse historical next-token distributions as fixed temporal targets, providing temporal separation without maintaining a persistent teacher model. It further introduces privileged disagreement correction to explicitly suppress locally overvalued actions, reliability-adaptive grounding that strengthens reference supervision when self-generated evidence repeatedly fails, and quality and coverage-aware temporal memory that retains verified behaviors and improves privileged demonstrations. Across reasoning and tool-use benchmarks, FSPO achieves the highest average accuracy under a 5-hour training budget, improving over the strongest baseline by approximately 4% points on average while reducing peak memory from about 70 GB to 56 GB on Olmo3-7B-Instruct.",
      "upvotes": 140,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Indian Institute of Technology, Kanpur",
      "url": "https://huggingface.co/papers/2610.19687",
      "arxiv_url": "https://arxiv.org/abs/2610.19687",
      "title_ja": "方策最適化のための関数空間時間的自己蒸留",
      "summary_ja": "過去の行動分布を固定ターゲットとして保持し、現在のモデルと対比させることで、追加の報酬モデルなしで安定かつ詳細なトークン単位の学習を可能にするFSPO法。"
    },
    {
      "id": "2610.33966",
      "title": "InteractiveWorld: A Verifiable Human-Centric Environment for Building Better Interactive MLLM Assistants",
      "abstract": "People have long dreamed of an assistant that is always there to guide them and remind what they forget, from new dishes to lost keys. Powered by multimodal large language models (MLLMs), egocentric AI assistants on wearable devices are bringing this dream within reach: they see what the user sees and give instructions for user's physical work when necessary. However, testing such assistance is challenging and usually requires real people. The expensive and rare real interaction data leaves a key question unanswered: Can today's MLLMs truly help people in physical world? To answer this question, we propose InteractiveWorld, the first verifiable environment for closed-loop interaction between human and AI assistant. Unlike existing robot-centric simulators, InteractiveWorld lets the assistant guide a human agent who observes the scene, understands instructions, and acts independently. It thus realistically simulates how AI assistant collaborates with human: the assistant instructs, the human acts, and the environment executes actions and updates what they see next. Building on it, we introduce InteractiveBench, the first dynamic benchmark for egocentric AI assistants, with 120 multi-turn tasks across six categories. In each task, the assistant guides the human in real time, and every instruction shapes the outcome, which is scored by verifiable, state-based rewards. Experiments with 12 frontier MLLMs show they are still far from reliable assistants. Even the strongest model, Claude Fable 5.1, achieves at most 20% and 25% on long-horizon Guidance and Planning tasks, respectively. Overall, our work offers a verifiable platform and a rigorous evaluation set, laying a solid foundation for research on interactive MLLM assistants that truly help people in the physical world.",
      "upvotes": 126,
      "github_stars": 49,
      "github_repo": "https://github.com/facebookresearch/InteractiveWorld",
      "project_page": "https://meta-interactiveworld.github.io/",
      "comments": 2,
      "org": "Meta",
      "url": "https://huggingface.co/papers/2610.33966",
      "arxiv_url": "https://arxiv.org/abs/2610.33966",
      "title_ja": "InteractiveWorld：対話型MLLMアシスタント構築のための検証可能な人間中心環境",
      "summary_ja": "ウェアラブル端末を想定し、ユーザーの視界を共有しながら物理的な作業を支援するマルチモーダルLLMの性能を、閉ループ対話を通じて評価・検証できる初の世界環境。"
    },
    {
      "id": "2610.36729",
      "title": "Hy-Nomas: Towards Free-form Interactive World Generation",
      "abstract": "Interactive world generation requires models to follow successive commands while preserving relevant history and action consequences. We present Hy-Nomas, a video world model with an 8B diffusion backbone that supports free-form text instructions and continuous camera control across multiple interaction turns. It generates variable-length segments conditioned on current inputs and cached history. Our central design aligns structured video captions with action-aware causal attention: descriptive context remains accessible across segments, while action instructions are restricted to their intended temporal windows. A vision-language Prompt Enhancer (PE) translates user requests and multimodal interaction histories into structured conditions for the next segment. A multi-stage curriculum progressively introduces causal generation, text interaction, camera control, and training on model-generated histories, followed by diffusion distillation. In human evaluation, Hy-Nomas shows superior performance over existing world models. We release model weights, code and benchmarks, together with a lightweight adaptation workflow, to support reproducible research on interactive world generation.",
      "upvotes": 124,
      "github_stars": 379,
      "github_repo": "https://github.com/Tencent-Hunyuan/Hy-Nomas",
      "project_page": "https://hy-nomas.hy.tencent.com/",
      "comments": 2,
      "org": "Tencent Hunyuan",
      "url": "https://huggingface.co/papers/2610.36729",
      "arxiv_url": "https://arxiv.org/abs/2610.36729",
      "title_ja": "Hy-Nomas：自由形式の対話的世界生成に向けて",
      "summary_ja": "自由なテキスト指示と連続的なカメラ制御に対応し、過去の文脈を維持しながら一貫性のあるビデオを複数ターンにわたって生成できる8B規模のビデオ世界モデル。"
    },
    {
      "id": "2610.32046",
      "title": "Can Test-Time Memory Evolution Outperform Test-Time Training for Scientific Discovery?",
      "abstract": "Recent test-time training (TTT) frameworks have enabled open-weight large language models (LLMs) to outperform inference-only frameworks powered by frontier models on scientific discovery tasks. However, TTT introduces additional computational cost for online weight updates during the discovery process, making computational efficiency an important consideration when scaling to larger models. This motivates us to explore an efficient test-time adaptation method for scientific discovery. We introduce Test-Time Memory Evolution (TTME), a plug-and-play test-time adaptation method, as an alternative to TTT. TTME continually updates the external memory by distilling the experience to guide subsequent discovery without updating model weights. To have a clean comparison, we evaluate TTME and TTT under the same discovery framework, replacing only the test-time adaptation method. Our evaluation shows that TTME outperforms TTT on all five mathematical tasks, while reducing computational cost by 82.8-84.6% in FLOPs and 47.7-58.4% in runtime. These results establish TTME as an effective and computationally efficient alternative to TTT in the evaluated discovery settings.",
      "upvotes": 120,
      "github_stars": 3,
      "github_repo": "https://github.com/yepengliu/TTME",
      "project_page": "",
      "comments": 3,
      "org": "University of California, Santa Barbara",
      "url": "https://huggingface.co/papers/2610.32046",
      "arxiv_url": "https://arxiv.org/abs/2610.32046",
      "title_ja": "科学的発見においてテスト時メモリ進化はテスト時トレーニングを凌駕できるか？",
      "summary_ja": "モデルの重みを更新する代わりに、外部メモリに経験を蓄積・蒸留して後続の推論に活用するTTMEを提案し、科学的発見タスクにおいて効率的かつ高性能な適応を実現。"
    },
    {
      "id": "2610.35845",
      "title": "Work Agents: Systems, Capabilities, and Optimization",
      "abstract": "As foundation models evolve from information generation to digital work execution, agents are increasingly capable of completing complex tasks across tools, applications, and workflows. However, existing research lacks a unified perspective on how agents reliably accomplish delegated work. To address this gap, we present a work-centric, system-level perspective that views work agents as systems combining foundation models and runtime harnesses to execute tasks in stateful workspaces and deliver verifiable outcomes. We introduce two complementary dimensions, work persistence and work openness, to characterize working conditions, and classify digital work into five forms according to task scope and organization. Building on this framework, we identify five core capability families required for reliable work execution and examine approaches to model optimization, harness optimization, and their joint optimization. We further analyze existing evaluation methods and metrics from the perspective of work outcomes. Finally, we discuss future research directions, including sustained work delegation, adaptation to open environments, and the interaction between work execution and capability improvement. This paper provides a unified framework for understanding, optimizing, and evaluating work agents, supporting the development of systems capable of delivering reliable, verifiable, and practically valuable work outcomes.",
      "upvotes": 118,
      "github_stars": 68,
      "github_repo": "https://github.com/EnjunDu/awesome-working-agent",
      "project_page": "https://enjundu.com/blog/working_agents",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.35845",
      "arxiv_url": "https://arxiv.org/abs/2610.35845",
      "title_ja": "ワークエージェント：システム、能力、および最適化",
      "summary_ja": "基盤モデルと実行基盤を組み合わせ、デジタルワークスペースで検証可能な成果を出す「ワークエージェント」という概念を、持続性と開放性の観点から体系化したサーベイ。"
    },
    {
      "id": "2610.35864",
      "title": "VibeVideoBench: Evaluating Multimodal Agents on Code-Driven Video Generation",
      "abstract": "Diffusion video models produce striking clips, but they cannot reliably render an exact formula, a correct chart, a rule-consistent game or narration synchronized to on-screen events. A different route is emerging: multimodal agents that write code to render every frame and synthesize every sound. We introduce VibeVideoBench, a benchmark for evaluating agents on code-driven video generation. Its 239 self-contained tasks in English and Chinese span 12 categories, from data stories and music-driven pieces to classroom lessons and paper explainers; each asks an agent, running in its native harness inside a sandbox with no image or video generation model, to deliver a finished MP4 with sound within one hour. Evaluation is hierarchical and evidence-based: program checks of the delivery spec, about 13k task-specific rubric checks traced to the requirements they enforce, and five quality dimensions anchored per task, scored by three VLM judge panels. Across nine frontier agent systems and 2,151 scored rollouts, GPT-6 Astra and Claude Opus 5.5 rank first and second with both the judges and human annotators, and the strongest system satisfies every core requirement on 76.3% of tasks. Delivery is a second axis: counting missing videos as zero changes the ranking, and three quarters of the lost videos are final renders that started too late, ran too slowly or never started, a failure of how agents plan their hour. Agents build their own rendering pipelines and inspect their own frames, yet how much they look does not predict quality. The judges' ranking of the systems closely matches blind human preferences.",
      "upvotes": 89,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://vibevideobench.github.io/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.35864",
      "arxiv_url": "https://arxiv.org/abs/2610.35864",
      "title_ja": "VibeVideoBench：コード駆動型ビデオ生成におけるマルチモーダルエージェントの評価",
      "summary_ja": "生成モデルを使わず、コード作成によって数式や図表、音声を正確にレンダリングしたビデオを制作する能力を測定する、12カテゴリに及ぶ239のタスクからなるベンチマーク。"
    },
    {
      "id": "2610.24520",
      "title": "HABIT-Bench: Evaluating Habit Induction from Longitudinal Weak Evidence in Agent Memory",
      "abstract": "In long-term interactions with large language model (LLM) agents, users reveal habits through their choices and actions. These habits capture implicit user information that agents must infer across conversations. However, individual observations may provide only partial evidence about a habit or when it applies. Retaining past interactions alone does not ensure that agents can infer habits and apply them appropriately. We introduce HABIT-Bench to evaluate how well agent memory systems infer habits from weak evidence and apply them to later requests. We construct synthetic user histories from task-oriented dialogue data and controlled habit graphs. The histories span hundreds of sessions across food, finance, software, and travel. Four-choice tasks assess agents' ability to infer user habits and apply them appropriately. They include temporary exceptions, changes in habits, and suggestions that users have not accepted. Sampled tasks undergo independent human review. We evaluate eight memory methods with Qwen3-235B-A22B and GLM-5.3-Flash. The best-performing memory method achieves 33.61\\% macro accuracy across the four domains. Performance remains limited even when annotated evidence is supplied directly. These results expose a persistent gap between access to past interactions and the ability to infer and appropriately use user habits.",
      "upvotes": 88,
      "github_stars": 4,
      "github_repo": "https://github.com/LUMIA-Group/habit-bench",
      "project_page": "https://hollyming.github.io/habit-bench-site/",
      "comments": 7,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.24520",
      "arxiv_url": "https://arxiv.org/abs/2610.24520",
      "title_ja": "HABIT-Bench：エージェントメモリにおける断片的な証拠からの習慣推論の評価",
      "summary_ja": "数百セッションにわたる対話履歴から、ユーザーの潜在的な好みや習慣を正しく推論し、将来のリクエストに適応できるかを評価するための長期記憶ベンチマーク。"
    },
    {
      "id": "2610.36068",
      "title": "Rollback: Experience Backtracking in World Models for Policy Improvement",
      "abstract": "Action-conditioned world models offer a scalable alternative to costly real-world interaction for improving robot policies. However, existing world-model-based methods largely treat world models as forward-only surrogates of the physical environment, leaving untapped a capability no physical environment affords: rewinding to past decision points to explore counterfactual futures. We introduce Rollback, a policy improvement paradigm that turns world models from passive simulators into counterfactual engines: it rolls back to critical decision points, branches into alternative actions, and contrasts their outcomes to attribute success to individual decisions. This concentrates imagination where it matters most and distills counterfactual outcomes into fine-grained, action-level supervision without a separately learned value model. We build a scalable training system that unifies distributed world-model search with asynchronous real-robot execution, forming a self-reinforcing cycle: real-world experience continually sharpens the world model, and a sharper world model in turn drives further policy improvement. We term the world-model side of this cycle test-time physics grounding, a capability that hand-built physics simulators lack: while the world model serves as the training environment, real transitions from the policy it trains correct its dynamics through a lightweight LoRA pipeline. Experiments on three challenging real-world tasks show that Rollback improves success rates over the strongest baseline by an absolute 10.67%, 11.11%, and 11.85% on block extraction, ball tossing, and tabletop curling, respectively, while achieving more stable improvement throughout training. Although initialized from teleoperated demonstrations far below human level, Rollback surpasses the average success rate of human players on both ball tossing and tabletop curling within 8 hours of training.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://rollback-wm.github.io/",
      "comments": 2,
      "org": "AgiBot World",
      "url": "https://huggingface.co/papers/2610.36068",
      "arxiv_url": "https://arxiv.org/abs/2610.36068",
      "title_ja": "Rollback：方策改善のための世界モデルにおける経験バックトラッキング",
      "summary_ja": "世界モデルを「巻き戻し可能なエンジン」として使い、過去の分岐点から別の行動を試行・比較することで、成功要因を特定し効率的にロボット方策を改善する手法。"
    },
    {
      "id": "2610.30932",
      "title": "UserArena: Benchmarking Interactive User Simulation for Long-Horizon Shopping Agents",
      "abstract": "Agentic recommendation pursues shopper goals through sequences of context-dependent decisions. Developing and evaluating such policies requires faithful recommendation world models that capture both the interactive shopping environment and users' behavioral responses over long interactions. Existing resources rarely provide long-horizon, fine-grained real-user trajectories or support trajectory-level evaluation and offline validation against production A/B results. We introduce UserArena, a real-world e-commerce interactive benchmark containing 64,729 session trajectories from 11,010 users, spanning 566,102 items and 13 action types. UserArena pairs these trajectories with an interactive environment and supports offline validation against outcomes from a controlled production A/B test, enabling five-level evaluation from output validity and local decisions to sequential behavior, personalization, and outcomes. To improve simulator fidelity over these long-horizon interactions, we further propose On-Policy Trajectory Distillation (OPTD), which uses trajectory-level intent to provide dense teacher targets on student-generated rollouts. Experiments show that OPTD achieves the strongest overall fidelity among the evaluated simulators under UserArena's evaluation protocol and most closely reproduces the production policy effect in offline simulation.",
      "upvotes": 63,
      "github_stars": 9,
      "github_repo": "https://github.com/RecGPT-Team/UserArena",
      "project_page": "https://recgpt-team.github.io/UserArena-Page/",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.30932",
      "arxiv_url": "https://arxiv.org/abs/2610.30932",
      "title_ja": "UserArena：長期間ショッピングエージェントのための対話型ユーザーシミュレーション評価",
      "summary_ja": "実世界の膨大なEC履歴と対話環境を組み合わせ、ユーザーの行動反応を再現することで、長期的な推薦戦略の有効性をオフラインで検証可能にするベンチマーク。"
    },
    {
      "id": "2610.21240",
      "title": "Representation Redistribution in Sparse Autoencoders",
      "abstract": "Sparse autoencoders (SAEs) decompose language model activations into sparse features, but prompt transformations designed to preserve the underlying request can redistribute activity across them. A feature change observed on one transformed prompt need not recur, and even a recurring change need not affect a downstream computation. We introduce the redistribution sensitivity score (RSS), which identifies large feature responses that recur in a consistent direction, and evaluate the resulting supports on variants excluded from selection. Across 27 pretrained SAEs spanning eight language models, the tested prompt transformations produce a reproducible redistribution profile on these excluded variants. We then separate recurring representation change from signed readout contribution and decision failure. For a fixed linear readout, an exact decomposition shows how response magnitude, readout coefficients, directional alignment, and the clean margin determine downstream consequences. In two frozen safety readouts, combining RSS support erosion with the full clean margin yields recurrent failure AUROCs of 0.935 and 0.958 using median supports of 20 and 19 features, compared with 0.965 and 0.964 using full erosion. RSS therefore provides a way to identify recurring sparse representation changes and quantify their contribution to a downstream readout without equating representation change with failure. Code is available at https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "upvotes": 61,
      "github_stars": 2,
      "github_repo": "https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "project_page": "https://github.com/OpenSAE/Redistribution-Sensitivity-Score",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21240",
      "arxiv_url": "https://arxiv.org/abs/2610.21240",
      "title_ja": "疎な自己符号化器における表現の再分配",
      "summary_ja": "プロンプトの細かな変化が特徴量の活性化にどう影響するかを測定するRSS指標を導入し、複数の言語モデルとSAEにおいて一貫した特徴量の変化パターンが存在することを解明。"
    },
    {
      "id": "2610.33956",
      "title": "Continual Learning Exam: Benchmarking Long-Horizon RSI and Experiential Learning in LLM Agents",
      "abstract": "Continual learning is the ability of LLM agents to improve over time by acquiring, refining, and applying knowledge from experience while retaining useful prior knowledge. It is essential for agents learning over long time horizons, yet current evaluations largely assess individual task performance rather than improvement through accumulated experience. We introduce Continual Learning Exam (CLE), a large-scale benchmark developed by 50+ domain experts to measure experience-driven improvement in realistic professional workflows. CLE comprises 120 human-authored tasks, each organised as a five-level ladder, yielding 600 levels spanning 89 professional roles across 12 occupational domains. Agents must pass each level to unlock the next, with later levels building on experience accumulated during earlier assignments. An evaluation agent assesses each submission against human-authored rubrics. We compare a single-submission setting with one that provides diagnostic feedback after failure and allows one revision. Across 17 harness-model configurations using frontier LLMs, feedback and revision yield a median completion gain of 5.3 percentage points. Yet the best-performing system clears only 47.7% of levels and completes all five levels in just 23.3% of tasks, highlighting the difficulty of sustained learning from experience for existing frontier LLMs. As such, the dataset can also be used to post-train LLMs to strengthen their continual learning capabilities.",
      "upvotes": 61,
      "github_stars": 11,
      "github_repo": "https://github.com/haoyu-zhao/Continual-Learning-Exam",
      "project_page": "https://haoyu-zhao.github.io/CLE/index.html",
      "comments": 2,
      "org": "University College London",
      "url": "https://huggingface.co/papers/2610.33956",
      "arxiv_url": "https://arxiv.org/abs/2610.33956",
      "title_ja": "継続学習試験：LLMエージェントにおける長期RSIと経験学習のベンチマーク",
      "summary_ja": "単発のタスクではなく、89の専門職種にわたる難易度別の課題を通じて、過去の経験から知識を蓄積・適用し、時間の経過とともに能力を向上させる「継続学習」能力を測定。"
    },
    {
      "id": "2610.31162",
      "title": "HiSTEVE 1.0: Harnessing Human-Interface VLA Agents for Open-World Games",
      "abstract": "Building virtual embodied agents that operate in open-ended games like human players is a long-standing goal requiring both long-horizon autonomy and reliable native-interface control. As a procedurally generated open world, Minecraft provides a natural testbed for studying the integration of these capabilities. Existing agents typically provide either native visuomotor control without long-horizon autonomy or high-level planning executed through environment APIs or predefined skills. To bridge this gap, we propose HiSTEVE, a hierarchical VLA agent with a capability-aware agent harness. At the orchestration level, we equip the harness with structured memory for tracking progress and a VLM planner for selecting subtasks within the VLA's capabilities. To reliably determine subtask completion, we further introduce a policy-coupled task completion state detector that conditions on VLA policy context to signal candidate completion. At the control level, a single VLA executes all subtasks with vision-only perception and native keyboard-and-mouse actions. To mitigate interference between heterogeneous GUI and non-GUI interactions, we introduce regime-specific RMSNorm branches and separate mouse-movement token embeddings. We also train the VLA through world knowledge injection, imitation learning, and reinforcement learning with environment feedback to improve reliability and recovery. HiSTEVE achieves state-of-the-art atomic-task performance, scoring 85.0% on MineStudio Bench and a 37.4% average success rate on OpenHA, while also completing long-horizon tasks such as crafting an iron pickaxe from scratch like human players.",
      "upvotes": 57,
      "github_stars": 1,
      "github_repo": "https://github.com/Andytonglove/HiSTEVE-1.0",
      "project_page": "",
      "comments": 4,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2610.31162",
      "arxiv_url": "https://arxiv.org/abs/2610.31162",
      "title_ja": "HiSTEVE 1.0：オープンワールドゲーム用人間インターフェースVLAエージェント",
      "summary_ja": "Minecraftを舞台に、記憶管理とVLMによる計画を統合し、APIを使わず画面操作とキー入力のみで長期的な探索と生存を可能にする階層型VLAエージェント。"
    },
    {
      "id": "2610.32965",
      "title": "RynnUnify: Towards Unified Embodied Brain",
      "abstract": "We introduce RynnUnify, a 16B unified embodied model that combines strong embodied understanding with long-horizon visual planning through interleaved video--language reasoning. With capabilities spanning spatial reasoning, physical prediction, and grounding, RynnUnify connects an understanding of the physical world with visual anticipation of how it evolves across successive subtasks. Building on these capabilities, we further develop an agentic extension through reinforcement learning to selectively use video predictions for reasoning about unobserved states and interaction outcomes. We also develop a world-action extension of the full RynnUnify model, translating its understanding and prediction capabilities into robot control. To evaluate these capabilities, we introduce Rynn-VP and Rynn-GEU for long-horizon visual planning and anticipatory reasoning. Experiments show that RynnUnify achieves the highest average embodied understanding score among the evaluated unified multimodal models and improves the Rynn-VP overall score by 9.75 points over Cosmos 3 Nano. Its agentic extension improves the Rynn-GEU average by 6.0 points over direct reasoning, while the world-action extension achieves 51.5\\% success on 20 selected composite RoboCasa365 tasks and 46.7\\% average success across three real-robot tasks. Together, these results establish RynnUnify as a shared foundation for embodied understanding, visual planning, and robot control, taking a step toward a unified embodied brain.",
      "upvotes": 55,
      "github_stars": 48,
      "github_repo": "https://github.com/alibaba-damo-academy/RynnUnify",
      "project_page": "https://alibaba-damo-academy.github.io/RynnUnify.github.io/",
      "comments": 2,
      "org": "DAMO Academy",
      "url": "https://huggingface.co/papers/2610.32965",
      "arxiv_url": "https://arxiv.org/abs/2610.32965",
      "title_ja": "RynnUnify：統合された身体的知能に向けて",
      "summary_ja": "物理的な予測と空間推論、長期的な視覚計画を、ビデオと言語の交互推論によって実現し、未観測の状態や行動結果を想像しながらタスクを遂行できる16B規模の統合モデル。"
    },
    {
      "id": "2610.37666",
      "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
      "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a fundamental trade-off between scalable data and explicit action grounding. We introduce ThinkWorld, a VLA learning framework that grounds action reasoning in world dynamics and strengthens it through reinforcement learning with world imagination. ThinkWorld represents each action thought as a Chain-of-Dynamics (CoD), a sequence of discrete motion tokens that captures the intermediate dynamics connecting the current world to a future state and serves as a common action representation across embodiments. We first initialize CoD with action-labeled demonstrations, then predict the future induced by each CoD and reinforce those whose predictions better match the observed outcome. This enables videos without action annotations to provide direct supervision from observed state transitions, allowing human and robot experience to refine the same reasoning space. Experiments in simulation and on real robots demonstrate effective human-to-robot transfer and strong generalization to unseen tasks and environments.",
      "upvotes": 54,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://thinkworld-project.github.io/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.37666",
      "arxiv_url": "https://arxiv.org/abs/2610.37666",
      "title_ja": "ThinkWorld：世界の想像が動力学連鎖の推論を強化する",
      "summary_ja": "行動を「動力学の連鎖（CoD）」として捉え、世界モデルによるシミュレーション（想像）を強化学習に組み込むことで、ラベル付きデータの少ない環境でも高い汎用性を獲得。"
    },
    {
      "id": "2610.34415",
      "title": "Spatial Audio Generation and Editing with Executable Plans and Self-Distilling Transfusion",
      "abstract": "Spatial audio authoring coordinates source decisions with soundfield synthesis. For editing, plans specify what to change and retain, while reference audio supplies further acoustic detail. We present AMBIT, a unified framework for native First-Order Ambisonics (FOA) generation and editing with three connected contributions. First, a shared Transfusion backbone couples autoregressive planning with rectified-flow rendering through executable ScenePlans that specify source content, activity, and 3D trajectories. For editing, the plan describes the full target scene, including retained sources; contrastive features ground the requested change, while full reference latents supply residual acoustic detail for preservation. Second, an FOA-aware continuous VAE combines shared-decoder omnidirectional recovery, asymmetric grouped KL, and spatial covariance matching to preserve content and inter-channel structure. Third, joint Transfusion on-policy self-distillation (OPSD) refines planning on student-generated prefixes and rendering at sampling states reached under student plans, with target-conditioned teachers supervising both modes of the shared student. Evaluations across speech, music, and sound show improved generation content and spatial quality, acoustic fidelity during instruction-guided editing, and unedited-source preservation over the compared baselines. Project page: https://wjm-george.github.io/AMBIT/",
      "upvotes": 54,
      "github_stars": 19,
      "github_repo": "https://github.com/WJM-George/AMBIT",
      "project_page": "https://wjm-george.github.io/AMBIT/",
      "comments": 2,
      "org": "NoizAI",
      "url": "https://huggingface.co/papers/2610.34415",
      "arxiv_url": "https://arxiv.org/abs/2610.34415",
      "title_ja": "実行可能な計画と自己蒸留Transfusionによる立体音響の生成と編集",
      "summary_ja": "3D軌跡や音源情報を含む実行計画（ScenePlan）を用い、音源の配置・移動の指示から編集、参照音源に基づく詳細なレンダリングまでを統合的に行うAMBITフレームワーク。"
    },
    {
      "id": "2610.33135",
      "title": "WorldCast: World-Consistent Character Video Generation with Large-Angle Camera Control",
      "abstract": "Precise camera control is essential for cinematic character video generation, yet existing methods struggle to follow large-angle trajectories with combined rotation, translation, and radius variation from arbitrary initial azimuths. Such viewpoint changes also reveal character regions unseen in the initial frame, causing geometric distortions, appearance degradation, and identity drift. To systematically study these coupled challenges, we introduce CLACT, a large-scale Character-centric dataset and benchmark covering diverse Large-Angle Camera Trajectories, with accurate camera geometry and multi-view character observations for training and evaluation. We further propose WorldCast, a framework for world-consistent character video generation under diverse large-angle camera motions. Specifically, we back-project the initial frame into a 3D point cloud using estimated depth, align the point-cloud scale with the target camera trajectory, and render it along the trajectory to obtain explicit geometric guidance and coverage masks. To complement the incomplete character information, we introduce Geometry-Aligned Memory Attention (GAMA). Using relative camera poses estimated jointly from the initial frame and multi-view character anchors, we express anchor and target-view geometry in a common coordinate frame. GAMA uses this geometric alignment to guide the retrieval and injection of view-relevant character features during generation. Evaluations across diverse large-angle camera trajectories demonstrate accurate trajectory following while preserving character geometry, appearance, and identity.",
      "upvotes": 54,
      "github_stars": 51,
      "github_repo": "https://github.com/PixCtrol/WorldCast",
      "project_page": "https://pixctrol.github.io/WorldCast/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.33135",
      "arxiv_url": "https://arxiv.org/abs/2610.33135",
      "title_ja": "WorldCast：広角カメラ制御による世界一貫性のあるキャラクタービデオ生成",
      "summary_ja": "大幅な視点変更による歪みやアイデンティティの消失を防ぎつつ、回転やズームを含む自由な広角カメラ移動に合わせて一貫性のあるキャラクター動画を生成する手法。"
    },
    {
      "id": "2610.37662",
      "title": "Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?",
      "abstract": "Discrete visual tokens represent vision in a discrete form analogous to language, offering a native interface for multimodal modeling under a shared next-token prediction objective. However, quantization error is widely assumed to cause unavoidable semantic loss, fundamentally limiting the semantic fidelity of discrete visual tokens and positioning continuous visual representations as an intrinsic upper bound. Using multimodal understanding as a proxy for semantic fidelity, we revisit this assumption and find quantization error unreliable, as discrete representations with substantially larger errors can achieve better understanding. Instead, the effective bit budget of discrete indices emerges as a key determinant of downstream performance. However, existing quantizers eventually saturate as additional codebooks contribute progressively less semantic information. As one approach to alleviating this saturation, we introduce Factorized Vector Quantization, which quantizes complementary, fixed-dimensional views of the visual feature with symmetric parallel codebooks. It continues to improve at larger bit budgets, ultimately matching continuous visual representations in multimodal understanding. Trained on industrial-scale multimodal data, our model achieves state-of-the-art performance among discrete-representation models, outperforming UniAR and Emu3-Chat by 22.8% and 59.2%, respectively, on a nine-metric average. To our knowledge, it is also the first discrete-representation model competitive with strong continuous-representation models such as Qwen3-VL, including on fine-grained OCR tasks. We further identify the key principles and a practical recipe enabling this competitiveness. These results and insights support the potential of discrete visual representations to underpin large-scale native multimodal foundation models. Code and models are available at https://github.com/hustvl/FVQ",
      "upvotes": 53,
      "github_stars": 33,
      "github_repo": "https://github.com/hustvl/FVQ",
      "project_page": "https://doctor-james.github.io/FVQ-Page/",
      "comments": 2,
      "org": "LongCat",
      "url": "https://huggingface.co/papers/2610.37662",
      "arxiv_url": "https://arxiv.org/abs/2610.37662",
      "title_ja": "離散トークンは視覚信号のセマンティック・ロスレスな表現になり得るか？",
      "summary_ja": "量子化誤差は理解性能の低下に直結しないことを示し、インデックス数の適切な割当によって離散表現が連続表現と同等以上のセマンティック情報を保持できることを実証。"
    },
    {
      "id": "2610.37341",
      "title": "CodeCap-Bench: Can Code Serve as a Good Video Caption?",
      "abstract": "Video captioning aims to preserve visual information through compact descriptions, predominantly using natural language. However, precisely expressing fine-grained spatial structures and temporal dynamics in natural language often leads to lengthy and potentially ambiguous descriptions. In this work, we explore Code as Video Caption, a paradigm where executable programs serve as a complementary representation of visual content through graphical primitives, layout rules, and functions of time. To examine whether code captions effectively preserve video information, we compare them with natural language captions on downstream question answering and video reconstruction tasks. Our results show that code captions achieve superior reasoning accuracy and reconstruction fidelity. Despite these advantages, realizing the potential of code captioning depends on whether current multimodal large language models (MLLMs) can generate faithful code captions. To systematically assess this capability, we introduce CodeCap-Bench, which comprises 323 videos spanning five categories of structured 2D content, along with fine-grained annotations and a multi-level evaluation framework. Extensive experiments reveal that while leading proprietary MLLMs demonstrate promising code captioning capabilities, they still struggle to faithfully capture complex temporal dynamics, with open-source models lagging substantially behind.",
      "upvotes": 50,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://codecap-bench.github.io/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.37341",
      "arxiv_url": "https://arxiv.org/abs/2610.37341",
      "title_ja": "CodeCap-Bench：コードは優れたビデオキャプションになり得るか？",
      "summary_ja": "自然言語では曖昧になりがちな動画の空間構造や時間変化を、実行可能なコード（プログラム）として記述することで、情報保持能力が向上するかを検証するベンチマーク。"
    },
    {
      "id": "2610.36456",
      "title": "LociArt: A Unified Paradigm for Free-Style Local Video Stylization",
      "abstract": "Video stylization typically transforms entire scenes, while local artistic editing requires precise region--style association, spatial control, and temporal consistency. We introduce LociArt, a unified paradigm for free-style local video stylization that explicitly specifies where to stylize and what style to apply while preserving non-target content. At its core, GRNStyle builds on Generative Refinement Networks (GRN) and introduces a polar style-aware mask that embeds style identities as equal-norm directions within selected regions. Complementary representation--geometry conditioning combines encoded mask features with raw-mask spatial support, integrating spatiotemporal context with geometric control. To provide paired supervision, we develop an automated pipeline combining global stylization, video object removal, matting, and compositing, and construct the LociArt-100K Dataset with 100K local stylization pairs. We further establish the LociArt Benchmark, comprising 80 source videos and 84 target masks covering 168 foreground/background stylization cases, with a Style Prototype Similarity (SPS) evaluation scheme for regional style quality and complementary measures of non-target preservation and temporal consistency. Experiments show that GRNStyle outperforms existing methods in regional style quality and spatial control while maintaining strong temporal consistency. Qualitative examples further illustrate joint stylization of multiple regions with the same or different learned styles, despite training only on single-region, single-style pairs. Together, these components provide a unified foundation for learning and evaluating controllable local video stylization. Project page: https://higherhu.github.io/lociart/.",
      "upvotes": 50,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://higherhu.github.io/lociart/",
      "comments": 2,
      "org": "Xiaomi Research",
      "url": "https://huggingface.co/papers/2610.36456",
      "arxiv_url": "https://arxiv.org/abs/2610.36456",
      "title_ja": "LociArt：フリースタイルな局所ビデオスタイ化のための統合パラダイム",
      "summary_ja": "動画内の特定の領域とスタイルを「極座標マスク」で関連付け、背景などの非対象領域を維持したまま、指定した箇所のみを一貫性を持って芸術的に加工する手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Ships Claude to CarPlay, Adding Voice Mode and 33 Languages",
      "summary": "Anthropic ships multi-account switching, CarPlay voice mode, 24 new languages, and a laptop-style Android layout for Chromebooks and foldables.",
      "url": "https://alphasignal.ai/news/anthropic-ships-claude-to-carplay-adding-voice-mode-and-33-languages",
      "published": "2026-10-30T02:32:41+09:00",
      "title_ja": "AnthropicがClaudeをCarPlayに対応、ボイスモードと33言語を追加",
      "summary_ja": "CarPlayボイスモードや複数アカウント切り替え、Androidレイアウト刷新、24の追加言語に対応した。"
    },
    {
      "lab": "OpenAI",
      "title": "An updated Model Spec for more capable and beneficial AI",
      "summary": "OpenAI’s updated Model Spec outlines five core values to guide more capable AI toward sound judgment, human agency, and faithfulness to human intent.",
      "url": "https://openai.com/index/updated-model-spec",
      "published": "2026-10-30T02:00:00+09:00",
      "title_ja": "AIの能力と有益性を向上させる更新版Model Spec",
      "summary_ja": "AIが健全な判断と人間の意図への忠実さを維持するための5つのコアバリューを定義し、能力向上を図る。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Mistral Drops Large 4, a 1 Trillion Parameter Open Coding Agent",
      "summary": "Mistral released the open weights for its 1-trillion parameter Mistral Large 4 model, now leading open-weight coding benchmarks with multimodal input and cyberdefense tuning.",
      "url": "https://alphasignal.ai/news/mistral-drops-large-4-a-1-trillion-parameter-open-coding-agent",
      "published": "2026-10-29T23:21:24+09:00",
      "title_ja": "Mistralが1兆パラメータのオープン・コーディング・エージェントMistral Large 4を公開",
      "summary_ja": "1兆パラメータを持つ大規模モデルで、マルチモーダル入力とサイバー防御調整によりコーディング性能を向上。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1.1 — Update models like you update software",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1",
      "published": "2026-10-29T22:37:07+09:00",
      "title_ja": "Granite Switch 4.1.1 — ソフトウェアのようにモデルを更新する",
      "summary_ja": "ソフトウェアのアップデートと同じ感覚でモデルを更新できるようにするGranite Switchの最新版。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Liquid AI's LFM3 Beats 9B Rivals Using a Tiny 1.7B On-Device Model",
      "summary": "Liquid AI launched LFM3, a tri-hybrid family of six open-weight 2B models spanning text, vision, audio, omni, and decision tasks, all fine-tunable on a single GPU.",
      "url": "https://alphasignal.ai/news/liquid-ai-s-lfm3-beats-9b-rivals-using-a-tiny-1-7b-on-device-model",
      "published": "2026-10-29T21:40:29+09:00",
      "title_ja": "Liquid AIのLFM3が1.7Bのオンデバイスモデルで9Bのライバルを凌駕",
      "summary_ja": "単一GPUで微調整可能なテキスト・画像・音声対応の2Bモデル群。小型ながら高性能な推論を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Poolside Drops Laguna M.1, a 225B Open-Weight Coding Agent",
      "summary": "Poolside's 225B Mixture-of-Experts coding model lands with open weights, 262K context, and benchmark scores rivaling frontier closed systems.",
      "url": "https://alphasignal.ai/news/poolside-drops-laguna-m-1-a-225b-open-weight-coding-agent",
      "published": "2026-10-29T19:00:05+09:00",
      "title_ja": "Poolsideが225Bのオープン・コーディング・エージェントLaguna M.1を公開",
      "summary_ja": "225Bの混合専門家モデル。262Kのコンテキスト長を持ち、商用モデルに匹敵するコーディング能力を提供。"
    },
    {
      "lab": "OpenAI",
      "title": "How we detect frontier model misalignment",
      "summary": "OpenAI uses layered monitoring to detect frontier model misalignment and unauthorized agent behavior so responders can intervene before incidents escalate.",
      "url": "https://openai.com/index/how-we-detect-frontier-model-misalignment",
      "published": "2026-10-29T18:00:00+09:00",
      "title_ja": "フロンティアモデルのアライメント異常を検知する方法",
      "summary_ja": "階層的なモニタリングにより、モデルの不整合や未承認のエージェント動作を検知し、事故を未然に防ぐ。"
    },
    {
      "lab": "OpenAI",
      "title": "How Ropes & Gray is developing AI for transactional diligence",
      "summary": "Ropes & Gray is developing AI for transactional diligence with OpenAI. Lawyers review grouped documents, summaries, and reports before advising clients.",
      "url": "https://openai.com/index/ropes-gray-ai-diligence",
      "published": "2026-10-29T16:00:00+09:00",
      "title_ja": "Ropes & Grayによる取引デューデリジェンス向けAI開発",
      "summary_ja": "OpenAIと連携し、弁護士による文書のグループ化や要約、報告書作成を支援するAIツールを開発中。"
    },
    {
      "lab": "AlphaSignal",
      "title": "CCORE's Qwen3.5-4B-3D-Coder Turns Text Prompts Into 3D Browser Scenes",
      "summary": "An independent 4B fine-tune of Qwen3.5 turns plain text prompts into self-contained Three.js scenes, with weights, dataset, and GGUFs public.",
      "url": "https://alphasignal.ai/news/ccore-s-qwen3-5-4b-3d-coder-turns-text-prompts-into-3d-browser-scenes",
      "published": "2026-10-29T15:37:40+09:00",
      "title_ja": "CCOREのQwen3.5-4B-3D-Coderがテキストから3Dブラウザシーンを生成",
      "summary_ja": "テキストプロンプトからThree.jsによる3Dシーンを直接生成可能。重みやデータセットも公開された。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Tel Aviv University Turns Silent Seismic Sensors Into Nuclear Test Detectors",
      "summary": "A new framework turns physics-based expert models into interpretable fit scores, beating random forests on seismic monitoring when training data is scarce.",
      "url": "https://alphasignal.ai/news/tel-aviv-university-turns-silent-seismic-sensors-into-nuclear-test-detectors",
      "published": "2026-10-29T15:01:04+09:00",
      "title_ja": "テルアビブ大学が静かな地震センサーを核実験検知器に転換",
      "summary_ja": "物理ベースのモデルを解釈可能なスコアに変換。訓練データが少ない環境でも、高い精度で地震監視が可能。"
    },
    {
      "lab": "Hugging Face",
      "title": "Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready",
      "summary": "",
      "url": "https://huggingface.co/blog/announcing-project-protostar",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Project ProtoStarの発表：公的資金による科学をAI対応に",
      "summary_ja": "公的研究の成果をAIが活用しやすい形式に整備し、科学の発展を加速させるプロジェクトの告知。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Le Chonk: Mistral Large 4 on Hugging Face",
      "summary": "",
      "url": "https://huggingface.co/blog/mistral-large4",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "Mistral Large 4がHugging Faceに登場",
      "summary_ja": "Mistralの最新大規模モデル「Le Chonk」ことMistral Large 4がHugging Faceで利用可能になった。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing AnySpeechRecognizer and AnyDecisionModel: Open Models for Speech and Decisions on Apple Platforms",
      "summary": "",
      "url": "https://huggingface.co/blog/anydecisionmodel",
      "published": "2026-10-29T09:00:00+09:00",
      "title_ja": "AnySpeechRecognizerとAnyDecisionModelの紹介：Appleプラットフォーム向けのオープンモデル",
      "summary_ja": "Appleデバイス上で動作する、音声認識と意思決定タスクのためのオープンソースモデル。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代のフロンティアモデル",
      "summary_ja": "Googleの次世代フラグシップモデル「Gemini 4 Carbon」に関する予告記事。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Nemotron 3.5 Transcribe and Granary v2: Intelligent Multilingual Transcription You Can Prompt and Adapt",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-transcribe-granary",
      "published": "2026-10-28T23:58:17+09:00",
      "title_ja": "NVIDIA Nemotron 3.5 TranscribeとGranary v2：プロンプト可能な多言語文字起こし",
      "summary_ja": "プロンプトによる指示や適応が可能な、インテリジェントな多言語文字起こしシステム。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI and ServiceNow expand partnership across enterprise workflows",
      "summary": "OpenAI and ServiceNow expand their partnership to bring OpenAI models and agents into ServiceNow and ServiceNow workflows into ChatGPT and Codex.",
      "url": "https://openai.com/index/openai-servicenow-partnership-expansion",
      "published": "2026-10-28T22:15:00+09:00",
      "title_ja": "OpenAIとServiceNowが企業ワークフロー全体の提携を拡大",
      "summary_ja": "OpenAIのモデルをServiceNowに、ServiceNowの機能をChatGPTに統合し、業務効率を向上させる。"
    },
    {
      "lab": "OpenAI",
      "title": "The future of the firm",
      "summary": "How AI might enter the org chart—beneath, beside, and between us.",
      "url": "https://openai.com/index/the-future-of-the-firm",
      "published": "2026-10-28T19:00:00+09:00",
      "title_ja": "企業の未来",
      "summary_ja": "AIが組織図のどこに配置されるか、人間との協働や介在のあり方の変化について考察している。"
    },
    {
      "lab": "OpenAI",
      "title": "Legora is building the agentic operating system for legal work",
      "summary": "See how Legora uses OpenAI models, ChatGPT, and Codex to accelerate legal workflows, expand contract analysis, and free lawyers to focus on higher-value work.",
      "url": "https://openai.com/index/legora",
      "published": "2026-10-28T18:30:00+09:00",
      "title_ja": "Legoraが法務業務向けのエージェントOSを構築",
      "summary_ja": "OpenAIの技術を活用し、契約分析の拡張や法務ワークフローの加速により、弁護士を単純作業から解放する。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "Sleepフレームワーク：LLMが継続学習で知識を保持するための新手法",
      "summary_ja": "継続的な学習プロセスにおいて、大規模言語モデルが過去の知識を忘却せずに保持するための新しい手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Build specialized multimodal models with LFM3",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm3",
      "published": "2026-10-28T02:16:52+09:00",
      "title_ja": "LFM3で特化型マルチモーダルモデルを構築する",
      "summary_ja": "LFM3モデル群を活用して、特定の用途に合わせたマルチモーダルなAIモデルを開発するためのガイド。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイム・シミュレーションにおいて、これまでにないリアリズムを実現する新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成先行学習によるリアルタイム・ガウス頭部アニメーション",
      "summary_ja": "少数の画像から人間の頭部を3D化し、表情信号に合わせたリアルタイムなアニメーションを実現する手法。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "基盤モデルを結核スクリーニングの最前線へ",
      "summary_ja": "生成AIや基盤モデルを、結核の診断やスクリーニング現場に導入するための取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠被覆の先へ：世界の森林タイプをマッピング",
      "summary_ja": "地球上の全陸地を10メートル単位で解析し、森林の種類を詳細に分類したグローバルマップ。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "AIを活用した超音波検査支援により、医療現場の最前線での妊産婦ケアを向上させる取り組み。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地させる：自律型ウェットラボの構成要素",
      "summary_ja": "生物学的な実験室（ウェットラボ）の自動化に向けた、AIエージェントの基盤構築について。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用Google Antigravityを活用し、新しい抗菌ペプチドの探索プロセスを高速化する。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたLLMのローカル・分散推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、プライベートな環境で最新モデルの推論や微調整を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由生成ではなく候補からの「選択」にすることで、推論コストを抑えつつ動作の精度を高める手法。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か、検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMがスタブを生成してから検索する手法と、先に類似ツールを検索する手法の性能を比較・研究。"
    }
  ]
};
