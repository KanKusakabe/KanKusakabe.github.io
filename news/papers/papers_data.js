window.papersData = {
  "updated_at": "2026-10-18 08:51 JST",
  "arxiv": [
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "url": "https://arxiv.org/abs/2610.22276",
      "pdf": "https://arxiv.org/pdf/2610.22276",
      "authors": [
        "Luozheng Qin",
        "Yuhan Zhu",
        "Changhai Zhou",
        "Qian Qiao",
        "Jun Gao",
        "Yuhua Zhou"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 7 figures, 27 tables. Code: https://github.com/Fr0zenCrane/MJev-Spatial",
      "hf_upvotes": 141,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves the highest overall score (65.64%) among eight tested models",
      "signals": [
        "HF ▲141"
      ],
      "headline": "VLMの内部アテンションを用いた分類ベースの高速な空間知能モデルMJev-Spatial",
      "what": "空間的な位置関係や距離、座標の予測を自由形式のテキスト生成ではなく、事前学習済みのバックボーンのアテンション（QueryとKey）を利用した統一的な分類タスクとして解く手法です。自己回帰的なデコードを排除し、単一のフォワードパスで判断を行います。",
      "enables": "Qwen3.5-4Bをベースとし、空間ベンチマークにおいて従来モデルを上回る最高スコア（65.64%）を記録しました。推論速度はベースモデルより5.6倍、最も速い自己回帰ベースラインよりも2.5倍高速です。",
      "why_it_matters": "低遅延が求められる物理世界でのインタラクションにおいて、VLMを生成器ではなく決定器として効率的に利用するSystem 1的なアプローチを提示しています。",
      "tags": [
        "VLM",
        "空間知能",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20901",
      "title": "TGrasp6D: Task-Informed Vision-Language Priors and Pose Refinement enable Zero-Shot Task-Oriented 6DoF Grasping",
      "url": "https://arxiv.org/abs/2610.20901",
      "pdf": "https://arxiv.org/pdf/2610.20901",
      "authors": [
        "Manav Kulshrestha",
        "Apoorva Vashisth",
        "Damon Conover",
        "Aniket Bera"
      ],
      "categories": [
        "cs.RO",
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
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "Our approach achieves state-of-the-art success rate of 94% on the TaskGrasp dataset, with the best baseline at 74%.",
      "signals": [],
      "headline": "VLMの事前知識を活用したゼロショットでのタスク指向型6自由度グリッピング生成",
      "what": "RGB-D画像からタスクに適したセマンティック・アフォーダンスを推論し、初期のタスク指向型プリオールを生成する手法です。このプリオールを衝突回避のための6自由度ポーズ最適化によって洗練させることで、特定のタスクに合致した把持姿勢を決定します。",
      "enables": "TaskGraspデータセットにおいて、既存の最良手法の成功率74%を大きく上回る94%の最先端（SOTA）性能を達成しました。実機のFranka Research 3ロボットにおいても、未知の物体に対するゼロショットでの汎化性能を実証しています。",
      "why_it_matters": "手動アノテーションされたデータセットに依存せず、画像と言語の事前知識から「ナイフを切るために持つか、渡すために持つか」といった文脈に応じた把持を可能にします。",
      "tags": [
        "ロボティクス",
        "VLM",
        "物体把持"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.19625",
      "title": "DAGFormer: Global Topology Prediction for Transformer Cross-Layer Connections",
      "url": "https://arxiv.org/abs/2610.19625",
      "pdf": "https://arxiv.org/pdf/2610.19625",
      "authors": [
        "Xiaocong Yang",
        "Yuren Hao",
        "ChengXiang Zhai"
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
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "propose DAGFormer, a Transformer language model whose cross-layer connections",
      "signals": [],
      "headline": "Transformerの層間接続を動的に最適化し学習効率を向上させるDAGFormer",
      "what": "トポロジー予測器を同時に学習し、標準的な残差接続を超えて、入力トークンに基づいた最適な層間接続を動的に計画するアーキテクチャです。モデル全体のルーティングを一括で決定する点が特徴です。",
      "enables": "1Bパラメータモデルにおいて、従来のTransformerが10Bトークン学習して到達する精度を5Bトークンの学習で上回り、WikiText-2のPerplexityを最大25%改善しました。",
      "why_it_matters": "層間の情報の流れを最適化することで、既存のルーティング手法よりも高いデータ効率と性能、および構造的プルーニングへの耐性を獲得しています。",
      "tags": [
        "Transformer",
        "アーキテクチャ",
        "LLM"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19942",
      "title": "MorphingNet: Symbolic Regression Where the Network Is the Formula",
      "url": "https://arxiv.org/abs/2610.19942",
      "pdf": "https://arxiv.org/pdf/2610.19942",
      "authors": [
        "Jincheng Gao",
        "Jiahe Yi",
        "Shuo Sun"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 1 figure, 9 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "introduce MorphingNet, a network for symbolic regression (SR)",
      "signals": [],
      "headline": "ネットワーク自体が数式として機能し連続最適化が可能な記号回帰手法MorphingNet",
      "what": "関数の形式を学習可能なパラメータとし、指数関数や正弦波などに連続的に変化できるユニットで構成されたネットワークです。学習プロセス全体が連続最適化問題として処理され、最終的に簡潔な数式へと変換されます。",
      "enables": "SRBenchでSOTAを達成し、大規模データにおいて最強の探索ベース手法よりも最大100倍高速に動作し、生成元の数式を正確に復元しました。",
      "why_it_matters": "離散的な数式探索をGPUフレンドリーな密な線形代数に置き換えることで、科学的発見におけるスケーラビリティの問題を解決しています。",
      "tags": [
        "記号回帰",
        "科学的機械学習",
        "GPU加速"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20637",
      "title": "Expanding Attention: A Taylor-Series Route to Linear-Time Transformers with a Fixed Number of Recurrent States",
      "url": "https://arxiv.org/abs/2610.20637",
      "pdf": "https://arxiv.org/pdf/2610.20637",
      "authors": [
        "Zicong Huang"
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
      "star_quote": "We expand the exponential kernel of attention into a truncated Taylor series of $n$ terms and factorize each term into a tensor-power inner product",
      "signals": [],
      "headline": "テイラー展開によるアテンションの線形化と固定次元のリカレント状態による定数時間デコード",
      "what": "Exponential Kernelをn項のテイラー展開で近似し、各項をテンソル積の形式で分解することで、因果的履歴をn個の固定サイズのリカレント状態に集約する手法です。これによりコンテキスト長に関わらず、各トークンの更新をランク1の外積で行うことが可能になります。",
      "enables": "コンテキスト長65,536において、Softmaxベースの手法と比較してデコードのレイテンシを76.0倍高速化し、7.3μsの一定時間で処理できます。計算コストは項数nに対して組み合わせ的に増加しますが、n=3で十分な精度が得られることを示しました。",
      "why_it_matters": "従来手法の二次的な計算複雑性を排除しつつ、リカレント状態への圧縮を損失なし（float64精度）で行える理論的枠組みを提供し、超長文コンテキストの効率的な処理を可能にします。",
      "tags": [
        "Transformer",
        "線形アテンション",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21404",
      "title": "Multi-Reward Hacking: From Aggregation-Induced Drift to Trust-Anchored Defense",
      "url": "https://arxiv.org/abs/2610.21404",
      "pdf": "https://arxiv.org/pdf/2610.21404",
      "authors": [
        "Yushu Li",
        "Jiin Woo",
        "Xiaoxiao Li",
        "Youngsuk Park"
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
        "new"
      ],
      "star_quote": "We propose Trust-Anchored Gating (TAG), which first elects an anchor channel based on the policy drift induced by optimizing each channel alone",
      "signals": [],
      "headline": "複数報酬の最適化における報酬ハッキングを防ぐTrust-Anchored Gating手法",
      "what": "主報酬（正確性など）と補助報酬（簡潔さなど）を組み合わせる際、補助報酬が容易に得られる場合に発生する「報酬ハッキング」を理論的に分析し、それに対処するTAG手法を提案しています。TAGは主報酬の充足状況に基づいて補助報酬のクレジットを制御します。",
      "enables": "Qwen3-4Bを用いた数学およびプログラム合成のタスクにおいて、単純な加算型の報酬集計が性能を大幅に低下させる（Pass@4が0.220）のに対し、TAGは高い性能（0.581）を維持しつつ、応答長を44%短縮することに成功しました。",
      "why_it_matters": "複数の報酬関数を用いた事後学習における不安定性の原因を特定し、ハイパーパラメータ調整に依存せず構造的に報酬ハッキングを抑制する実用的な枠組みを提供します。",
      "tags": [
        "LLM",
        "強化学習",
        "報酬設計"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22232",
      "title": "WaveLLM: Wavelet-Domain LLM Entropy Modeling for Lossless Image Compression",
      "url": "https://arxiv.org/abs/2610.22232",
      "pdf": "https://arxiv.org/pdf/2610.22232",
      "authors": [
        "Yue Yu",
        "Bowei Kang",
        "Changsheng Gao",
        "Dong Liu",
        "Xiaoyan Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at ACM Multimedia 2026 (MM '26). 10 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "WaveLLM achieves 2.51, 2.24, and 2.27 bpsp on Kodak, CLIC.pro, and DIV2K",
      "signals": [],
      "headline": "ウェーブレット領域でのLLMエントロピーモデリングによる可逆画像圧縮の効率化",
      "what": "画像をマルチレベルのウェーブレットサブバンドに分解し、構造化・統計的均質化されたデータをLlama-3.2ベースのLLMで自己回帰的に確率推定する手法です。数値シンボルを扱うための専用インターフェースと、サブバンドに適応するためのタスク適応プロンプトを導入しています。",
      "enables": "Kodak、CLIC.pro、DIV2Kの各ベンチマークで、それぞれ2.51、2.24、2.27 bpspを達成しました。これは同じウェーブレット変換を使用するPixelCNNベースの手法を約0.4 bpsp上回り、既存のLLMベースの圧縮手法の中でも最高水準です。",
      "why_it_matters": "ピクセルや残差を直接シリアル化する従来のLLMベース手法の予測困難性を、信号処理的な知見（ウェーブレット分解）と組み合わせることで解決しました。",
      "tags": [
        "画像圧縮",
        "LLM",
        "ウェーブレット変換"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22306",
      "title": "ARC-SORT: Adaptive, Robust, Compensated Multi-Object Tracking with Interacting Multiple Models",
      "url": "https://arxiv.org/abs/2610.22306",
      "pdf": "https://arxiv.org/pdf/2610.22306",
      "authors": [
        "Girish Kumar Adari"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 4 figures, 13 tables; supplementary material included as appendix; qualitative video as ancillary file",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ARC-SORT reaches 81.82 HOTA on the SportsMOT test set",
      "signals": [],
      "headline": "不確実性に基づき探索領域を適応させるスポーツ放送向け高速多物体追跡ARC-SORT",
      "what": "学習不要でリアルタイム動作するTracking-by-detection手法で、IMMカルマンフィルタが算出する予測共分散を用いて探索領域（Expansion IoU）を動的に調整します。交差時のID取り違えを事後的に1回だけ修正する機構や、画面外からの再登場を外見のみで紐付ける機能を備えています。",
      "enables": "SportsMOTテストセットにおいて81.82 HOTAを達成し、全69エントリの中で最も少ないIDスイッチ数を記録しました。ラップトップのRTX 3060で50fpsの動作が可能です。",
      "why_it_matters": "カメラのパン・ズームや選手の急な動きが激しいスポーツ映像において、予測の不確実性を自己測定して追跡動作に反映させる手法の有効性を示しました。",
      "tags": [
        "多物体追跡",
        "コンピュータビジョン",
        "リアルタイム"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22035",
      "title": "ETH: Data-Balanced Heterogeneous Pipeline Parallelism for Training Large Models",
      "url": "https://arxiv.org/abs/2610.22035",
      "pdf": "https://arxiv.org/pdf/2610.22035",
      "authors": [
        "Mianjie Yu",
        "Zhongmin Zhao",
        "Zizhao Mo",
        "Jianxiong Liao",
        "Wenxuan Li",
        "Yulin Qiao"
      ],
      "categories": [
        "cs.DC",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "19 pages, 14 figures. Accepted at USENIX NSDI 2027",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ETH achieves up to 2x training speedup",
      "signals": [],
      "headline": "異種ハードウェア混在環境での学習を最適化するデータバランス型パイプライン並列ETH",
      "what": "性能の異なるGPUが混在するクラスタにおいて、パイプラインステージ間およびステージ内の負荷を階層的に最適化する学習システムです。ブロック単位の勾配集約により、非対称なAll-Reduceによる通信オーバーヘッドを軽減します。",
      "enables": "既存の最先端システムと比較して、最大2倍の学習スピードアップを達成し、最適な構成を探すためのサーチコストを最大56倍削減しました。",
      "why_it_matters": "従来の「レイヤー数を変える」だけの粗い負荷分散に対し、より細かい粒度でのデータバランス調整を可能にし、メモリ制約と計算効率を両立させました。",
      "tags": [
        "分散学習",
        "パイプライン並列",
        "異種コンピューティング"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.19033",
      "title": "How Many Ranks Does a Token Need? A Noise-Floor Squelch for Rank-One LoRA Experts",
      "url": "https://arxiv.org/abs/2610.19033",
      "pdf": "https://arxiv.org/pdf/2610.19033",
      "authors": [
        "Mei Okonkwo",
        "Owen Castellanos",
        "Ingrid Solberg",
        "Yusuf Demirel"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "preprint",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce SQUELCH, a router-free mixture of rank-one experts",
      "signals": [],
      "headline": "LoRAエキスパートの最適なランク数を動的に決定するノイズ除去手法SQUELCHの提案",
      "what": "LoRAの各成分に対するトークンの応答をガウスノイズと見なし、Steinの推定量を用いてトークンごとに最適なソフト閾値を決定する手法です。さらにValue Gram行列を用いた修正ステップにより、冗長な成分を抑制し相補的な成分を活性化させます。",
      "enables": "追加の学習パラメータなしで、LLaMA-3.1-8B等においてLoRAを2.2～3.2ポイント上回り、平均8.6個のコンポーネント活性化で従来のMoE手法を凌駕しました。",
      "why_it_matters": "固定のランク数や学習済みルーターを必要とせず、数学的なリスク一貫性に基づいて推論効率と精度の両立を実現しています。",
      "tags": [
        "LoRA",
        "MoE",
        "推論最適化"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20375",
      "title": "Hypothesis Selection via Weighted Medians",
      "url": "https://arxiv.org/abs/2610.20375",
      "pdf": "https://arxiv.org/pdf/2610.20375",
      "authors": [
        "Liang-Yu Zou"
      ],
      "categories": [
        "cs.DS",
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
      "star_quote": "The running time improves the dependence on the failure probability from polynomial to logarithmic",
      "signals": [],
      "headline": "重み付き中央値を利用し対数的な失敗確率で最適な仮説を選択する高速アルゴリズム",
      "what": "複数の分布候補からターゲット分布に最も近いものを選択する問題に対し、重み付き中央値を用いた新しいアルゴリズムを提案しています。サンプル複雑度と近似因子の両方で最適性を備えています。",
      "enables": "実行時間の失敗確率への依存度を多項式から対数（log(1/δ)）へと改善し、状態空間のサイズに対して効率的な計算を可能にしました。",
      "why_it_matters": "理論的な計算量上限を達成しつつ、先行研究で未解決だった計算効率の問題を解消したアルゴリズム理論上の進展です。",
      "tags": [
        "アルゴリズム理論",
        "分布推定",
        "統計的学習理論"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20681",
      "title": "IneqAgent: Agentic Inequality Proving in Lean with Symbolic Computation",
      "url": "https://arxiv.org/abs/2610.20681",
      "pdf": "https://arxiv.org/pdf/2610.20681",
      "authors": [
        "Gaolei He",
        "Jinhui Li",
        "Ruobing Zuo",
        "Xia Zeng",
        "Zhengfeng Yang"
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
        "cap",
        "sota"
      ],
      "star_quote": "solves 175 of 186 problems (94.09%), achieving the highest overall success rate",
      "signals": [],
      "headline": "LLMの推論と数式処理を統合したLean4用不等式証明エージェントIneqAgent",
      "what": "Lean4での不等式証明において、LLMによる推論と、Sum-of-Squares法やBernstein多項式などの数式処理バックエンドをMCTS（モンテカルロ木探索）で統合したエージェントです。数式処理の結果から証明書を自動生成し、Leanの証明コードに組み込みます。",
      "enables": "4つのベンチマークで186問中175問（94.09%）を解決し、評価手法の中で最高の成功率を達成しました。また、Dittert予想やHolens-Djokovic不等式に関連する未解決数学問題の証明にも成功しています。",
      "why_it_matters": "LLMの直感的な推論と数式処理の厳密性を組み合わせることで、従来の自動定理証明機では困難だった複雑な不等式の形式的証明を可能にしました。",
      "tags": [
        "AI for Science",
        "自動定理証明",
        "Lean"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.19139",
      "title": "Online Tokenization with Optimal Delay in Linear Time",
      "url": "https://arxiv.org/abs/2610.19139",
      "pdf": "https://arxiv.org/pdf/2610.19139",
      "authors": [
        "Mina Dalirrooyfard",
        "Christopher Ye"
      ],
      "categories": [
        "cs.DS",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "58 pages, 9 figures, 6 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We give a near-linear time algorithm with optimal delay (up to constant factors).",
      "signals": [],
      "headline": "理論的に最適な遅延と線形時間計算を実現するオンラインBPEトークナイザー",
      "what": "BPEトークン化をストリーミング入力に対してリアルタイムで実行するオンラインアルゴリズムです。「遅延（delay）」という概念を定式化し、最適な遅延を保ちながら入力サイズに依存しない一定のメモリ使用量を実現しました。",
      "enables": "OpenAIのtiktokenと比較して、最初のトークン出力までのレイテンシを7.9～34.8倍改善し、スループットも2.4～7.0倍向上させました。",
      "why_it_matters": "LLMの推論においてボトルネックとなり得る前処理を、理論的な裏付けを持ちつつ劇的に高速化・省メモリ化する実用的な成果です。",
      "tags": [
        "トークナイゼーション",
        "LLM",
        "ストリーミングアルゴリズム"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20682",
      "title": "TurboMamba: Faster Inference, Faster Training, and Better Prediction with Lexical Memory",
      "url": "https://arxiv.org/abs/2610.20682",
      "pdf": "https://arxiv.org/pdf/2610.20682",
      "authors": [
        "Hanxin Zhang"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "TurboMamba achieves the lowest mean test prediction loss (negative log-likelihood, NLL) among all twelve models.",
      "signals": [],
      "headline": "グローバルなMamba-3とローカルなTransformerを統合した高速推論モデルTurboMamba",
      "what": "トークンブロックごとに実行されるグローバルなMamba-3モデルと、そのコンテキストを利用して次トークンを予測する小型Transformerを組み合わせたアーキテクチャです。直前ブロックの最終トークンへの直接アクセスや、最近のトークン頻度に基づく混合モデルなどの軽量な拡張が含まれています。",
      "enables": "Mamba-3と比較して平均テスト予測損失（NLL）を9.4%低減し、学習スループットを2.60倍、バッチ推論のレイテンシを3.12倍高速化しました。JambaやZambaのバリアントに対しても大幅な精度向上と速度向上を達成しています。",
      "why_it_matters": "SSM（状態空間モデル）とTransformerのハイブリッド構造を最適化し、推論効率と予測精度のトレードオフを大幅に改善した実用的な構成を提案しています。",
      "tags": [
        "LLM",
        "Mamba",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21059",
      "title": "NOMAI: Scalable Federated Learning with Private Weights",
      "url": "https://arxiv.org/abs/2610.21059",
      "pdf": "https://arxiv.org/pdf/2610.21059",
      "authors": [
        "Yiyi Sun",
        "Mushtari Sadia",
        "Amrita Roy Chowdhury"
      ],
      "categories": [
        "cs.CR"
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
      "star_quote": "achieving three orders-of-magnitude improvements over prior work while seamlessly supporting populations of over 106 users.",
      "signals": [],
      "headline": "マルチコミッティMPCによる数百万ユーザー規模のプライバシー保護型連合学習システム",
      "what": "マルチコミッティMPCアーキテクチャとPacked Shamir秘密分散を組み合わせた、スケーラブルな秘密計算ベースの連合学習システムです。モデルのプライバシー、データのプライバシー、および整合性の3つの性質を同時に保証し、悪意のある攻撃者が存在する設定にも対応します。",
      "enables": "100万ユーザー以上の規模をサポートし、MNISTの学習において1イテレーションあたりのユーザー側計算時間を350ms（半誠実モデル）から700ms（悪意のあるモデル）未満に抑制しました。これは従来手法と比較して3桁以上の改善です。",
      "why_it_matters": "MPCベースの連合学習が、プライバシーや完全性を損なうことなく、現実世界の数百万規模のデプロイに耐えうる計算コストで実行可能であることを初めて示しました。",
      "tags": [
        "連合学習",
        "プライバシー",
        "MPC"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21132",
      "title": "Trajectory Prediction Method for person under WSN with Hierarchical Envelope Adversarial Domain Adaptation",
      "url": "https://arxiv.org/abs/2610.21132",
      "pdf": "https://arxiv.org/pdf/2610.21132",
      "authors": [
        "Wenqian Jiang",
        "Qifeng Sun",
        "Xiaosong Gao",
        "Xin Zou",
        "Xingrui Ni",
        "Yuan Hu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ADE and FDE metrics reduced by 17.6% and 19.1% respectively.",
      "signals": [],
      "headline": "階層的ドメイン適応と疎密結合モデルによる歩行者軌道予測の精度向上",
      "what": "「エンベロープ・サンプル」を用いたグラフ構造の構築と、局所的および大域的な戦略を統合した敵対的ドメイン適応を組み合わせた軌道予測モデル（HEADA-LTCTPM）です。歩行者間の多様な相互作用とシナリオ間のドメインシフトに動的に適応します。",
      "enables": "公開データセットにおいて、既存のベースラインと比較してADE（平均変位誤差）を17.6%、FDE（最終変位誤差）を19.1%削減し、高い予測精度を達成しました。計算時間は実用的な要件を満たしています。",
      "why_it_matters": "特定の統計指標に依存する従来のドメイン適応の限界を克服し、複雑で動的な環境における歩行者予測のロバスト性を高めました。",
      "tags": [
        "軌道予測",
        "ドメイン適応",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22362",
      "title": "CoDA: Co-Evolution of Data Engines and Action Policies",
      "url": "https://arxiv.org/abs/2610.22362",
      "pdf": "https://arxiv.org/pdf/2610.22362",
      "authors": [
        "Tianjiao Yu",
        "Zhilin Ou",
        "Yifan Shen",
        "Xinzhuo Li",
        "Yuanzhe Liu",
        "Onkar Kishor Susladkar"
      ],
      "categories": [
        "cs.RO",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Website: https://plan-lab.github.io/projects/coda/",
      "hf_upvotes": 9,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce CoDA, a framework in which a simulation data engine and an action policy",
      "signals": [],
      "headline": "シミュレーション環境と行動ポリシーを相互進化させるロボット学習枠組みCoDA",
      "what": "VLMクリティックによるポリシーの失敗診断をシミュレーション生成プログラムに変換し、失敗を克服するための学習を繰り返す共進化フレームワークです。診断結果をポテンシャル関数に変換して報酬を整形するText2potential手法を導入しています。",
      "enables": "4つの操作タスク群において、教師あり微調整後の未知環境（OOD）成功率5.3%を27.6%まで向上させました。LIBERO-Proでは、指示の変動に対する成功率を1%から76%に引き上げました。",
      "why_it_matters": "単に物理的に妥当なシミュレーションを増やすのではなく、ポリシーの弱点に焦点を当てた難易度の高い環境と適切な報酬を自動生成することで学習効率を高めています。",
      "tags": [
        "ロボティクス",
        "シミュレーション",
        "強化学習"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22369",
      "title": "SoftCache: Adaptive Step Size Caching for Diffusion Transformers",
      "url": "https://arxiv.org/abs/2610.22369",
      "pdf": "https://arxiv.org/pdf/2610.22369",
      "authors": [
        "Shimon Malnick",
        "Nadav Orenstein",
        "Ohad Fried",
        "Shai Avidan"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://malnick.net/softcache",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose SoftCache, which performs soft caching: instead of a binary switch",
      "signals": [],
      "headline": "拡散モデルのキャッシュ残量を活用した適応型ステップサイズ制御SoftCache",
      "what": "Diffusion Transformerの各ステップでの計算を再利用する際、キャッシュの「鮮度（スタレネス）」信号を単なる切り替えスイッチとしてではなく、次のジャンプ幅を決定する指標として利用する手法です。キャッシュに余裕があるときは大きくスキップし、更新が近づくとステップを小さくします。",
      "enables": "FLUX、HunyuanVideo、Wan2.1などの最新モデルにおいて、3.5倍から6.9倍の高速化を達成しつつ、既存のキャッシング手法を上回る忠実度指標を記録しました。追加の学習やモデルごとの設定変更は不要です。",
      "why_it_matters": "従来の「使うか使わないか」の二値的なキャッシュ制御を連続的なステップ制御に拡張し、生成品質を維持したまま計算量を大幅に削減しました。",
      "tags": [
        "拡散モデル",
        "キャッシュ",
        "推論高速化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22371",
      "title": "Gen4P: Video Generators are 4D Perceivers",
      "url": "https://arxiv.org/abs/2610.22371",
      "pdf": "https://arxiv.org/pdf/2610.22371",
      "authors": [
        "Yitong Xia",
        "Zeren Jiang",
        "Chuanxia Zheng"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://gen4p.github.io/",
      "hf_upvotes": 4,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "pretrained video generator can be repurposed into a feed-forward 4D perceiver",
      "signals": [],
      "headline": "ビデオ生成モデルを4次元知覚モデルに転用するフレームワークGen4P",
      "what": "事前学習済みのビデオ生成モデルの重みを固定し、単一のエンコーダパスと軽量なデコーダを介して3Dポイント追跡、深度推定、カメラ姿勢推定などの4D属性を抽出する手法です。反復的なデノイジングを行わず、クエリベースで必要な情報をオンデマンドで取得します。",
      "enables": "3Dポイント追跡やビデオ深度推定などのタスクで、最先端またはそれに匹敵する性能を達成しました。追加の学習パラメータなしで、ビデオ深度LoRAを幾何プリオールとして組み込むことが可能です。",
      "why_it_matters": "ビデオ生成学習を通じてモデルが獲得した「世界の物理的構造に関する理解」を知覚タスクに直接転用できることを示しました。",
      "tags": [
        "ビデオ生成",
        "3D復元",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21773",
      "title": "CF-AVSS: A Coarse-to-Fine Audio-Visual Speech Separation Framework with Target-Speaker Refinement and Post-Fusion for Real-World AVSE Challenge",
      "url": "https://arxiv.org/abs/2610.21773",
      "pdf": "https://arxiv.org/pdf/2610.21773",
      "authors": [
        "Longjie Luo",
        "Zhongshu Hou",
        "Yuepeng Li",
        "Gang Yang",
        "Shidong Shang",
        "Fan Zhou"
      ],
      "categories": [
        "cs.SD",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by ISCSLP 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our system tied for first place on Track 1 and ranked second on Track 2",
      "signals": [],
      "headline": "ターゲット話者の洗練と融合を用いた二段階オーディオ・ビジュアル音声分離",
      "what": "視覚情報を用いてターゲット話者の音声を分離・強調する2段階フレームワークです。第1段階で妨害音を抑制し、第2段階でオリジナルの混合音と中間結果を入力としてターゲット話者の音声を詳細に復元・洗練します。",
      "enables": "ISCSLP 2026 Real-World AVSE Challengeにおいて、Track 1で同率1位、Track 2で2位を獲得し、両トラックで最低の文字誤り率（CER 12.31%および14.79%）を達成しました。",
      "why_it_matters": "残響やノイズ、話者の重なりが激しい実環境下での音声強調において、視覚キューと多段階の洗練プロセスを組み合わせる有効性を証明しました。",
      "tags": [
        "音声分離",
        "マルチモーダル",
        "音声強調"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20822",
      "title": "Temporal Specification Guidance for Text-to-Video Generation",
      "url": "https://arxiv.org/abs/2610.20822",
      "pdf": "https://arxiv.org/pdf/2610.20822",
      "authors": [
        "Avishree Khare",
        "Hideki Okamoto",
        "Bardh Hoxha",
        "Georgios Fainekos",
        "Rajeev Alur"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "representing these requirements as specifications in a formal Temporal Logic",
      "signals": [],
      "headline": "時相論理仕様を用いたテキスト・ビデオ生成の順序・タイミング制御技術TSG",
      "what": "ビデオ生成時のオブジェクトの出現順序やタイミングの要求を「時相論理（Temporal Logic）」の仕様として記述し、推論時にデノイジングの方向をガイドする手法です。ビデオとテキストのアテンション履歴から微分可能なスコアを算出し、勾配を用いて制御を行います。",
      "enables": "追加の学習や外部分類器なしで、既存の5つのビデオ生成モデルにおいて、仕様の充足精度を9.5〜20ポイント向上させました。オブジェクトの登場順や状態遷移などの時間的制約を正確に反映できます。",
      "why_it_matters": "自然言語だけでは曖昧になりがちなビデオの時系列的な制御を、論理学の形式言語を用いることで厳密かつ柔軟に行えるようにしました。",
      "tags": [
        "ビデオ生成",
        "時相論理",
        "制御可能性"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21125",
      "title": "Noise-Space Reward Alignment for Few-Step Generative Models",
      "url": "https://arxiv.org/abs/2610.21125",
      "pdf": "https://arxiv.org/pdf/2610.21125",
      "authors": [
        "Woocheol Shin",
        "Taeyoung Yun",
        "Jiwon Sung",
        "Hyeongyu Kang",
        "Jeongmin Park",
        "Jaewoo Lee"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://shin-woocheol.github.io/npo/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "learn an amortized flow policy over the initial noise space of the generator.",
      "signals": [],
      "headline": "ノイズ空間でのポリシー最適化による数ステップ生成モデルの報酬アライメント",
      "what": "数ステップで生成を完了するモデルにおいて、モデルの重みを固定したまま、初期ノイズ空間上で報酬が高い方向へ分布を変換する「フローポリシー」を学習する手法（NPO）です。生成器の知識を保ちつつ、報酬と品質のトレードオフを最適化します。",
      "enables": "画像、言語、タンパク質構造生成の各ドメインで、直接的なファインチューニングよりも優れた品質を維持しつつ、テスト時の探索手法（Best-of-Nなど）と比較して16〜549倍低い推論コストで同等の報酬値を達成しました。",
      "why_it_matters": "学習コストが高い数ステップ生成モデルに対し、生成品質を損なう「報酬の過剰最適化」を避けながら、効率的に望ましい属性（報酬）へ誘導することを可能にします。",
      "tags": [
        "生成モデル",
        "強化学習",
        "アライメント"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21202",
      "title": "UltraDiff: Transferring High-Fidelity Priors to Compressed Latent Spaces for High-Resolution Image Generation",
      "url": "https://arxiv.org/abs/2610.21202",
      "pdf": "https://arxiv.org/pdf/2610.21202",
      "authors": [
        "Jingjing Ren",
        "Haitian Zheng",
        "Haoyu Chen",
        "Connelly Barnes",
        "Zhifei Zhang",
        "Yuqian Zhou"
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
        "new"
      ],
      "star_quote": "joint latent diffusion learning followed by marginal score distillation.",
      "signals": [],
      "headline": "高圧縮潜在空間への高精細プリオール転送による超解像画像生成UltraDiff",
      "what": "圧縮率の高い潜在空間（f32）で生じる情報損失を、標準的な空間（f8）のモデルから蒸留することで解決するフレームワークです。デュアルブランチのDiT（MixTeacher）を用いて共有アテンションにより曖昧さを解消し、ベクトル場蒸留によってアーティファクトを除去します。",
      "enables": "f8レベルの高品質を維持しつつ、A100 GPU 1枚を用いて2K画像を6.2秒で生成できます。これはベースラインのf8モデルと比較して40倍以上の高速化です。",
      "why_it_matters": "高解像度画像生成における「計算コスト」と「生成品質」のトレードオフを、異なる圧縮率の潜在空間を橋渡しする学習手法によって解消しました。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "蒸留"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21325",
      "title": "CertEx: Exact Visual Retrieval at Scale by Certified Exclusion",
      "url": "https://arxiv.org/abs/2610.21325",
      "pdf": "https://arxiv.org/pdf/2610.21325",
      "authors": [
        "Dongfang Zhao"
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
      "star_quote": "7.1$\\times$ to 18.0$\\times$ the throughput of the fastest cuVS search",
      "signals": [],
      "headline": "下界プロジェクションを用いたGPUでの厳密なk近傍検索手法CertEx",
      "what": "高次元ベクトル検索において、低精度（half precision）での下界プロジェクションによる「除外の証明」を行い、厳密な距離計算が必要な候補を大幅に絞り込む手法です。Tensor Coreを利用したドット積に丸め誤差の証明を組み込むことで、数学的な厳密性を保証します。",
      "enables": "最大1億件のデータセットにおいて、全Queryで厳密な解（Recall=1.0）を返しつつ、最速のGPU検索ライブラリ（cuVS）の7.1倍から18.0倍のスループットを達成しました。",
      "why_it_matters": "近似検索（ANN）の精度低下を許容できない用途（重複検知やLLMのメモリなど）において、厳密検索を近似検索に近い速度で実行できる実用的な手段を提供します。",
      "tags": [
        "ベクトル検索",
        "kNN",
        "GPU計算"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21337",
      "title": "Does On-Policy Distillation Need to Complete Every Rollout?",
      "url": "https://arxiv.org/abs/2610.21337",
      "pdf": "https://arxiv.org/pdf/2610.21337",
      "authors": [
        "Zhengxin Zhang",
        "Maosen Tang",
        "Ning Wang",
        "Changhao Li",
        "Jingren Zhou",
        "Bo Dai"
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
      "star_quote": "correcting the resulting sampling bias with blockwise inverse-probability weighting",
      "signals": [],
      "headline": "ロールアウトの確率的打ち切りによるポリシー蒸留の効率化手法STOPD",
      "what": "教師モデルから生徒モデルへ知識を移転する際、生徒のロールアウトをランダムな位置で打ち切り、発生するサンプリングバイアスをブロック単位の逆確率重み付け（IPW）で補正する手法です。全てのトークンを生成し切ることなく学習を進めます。",
      "enables": "生成トークン数を25〜48%削減しつつ、従来の蒸留手法と同等の精度を維持し、全体的な学習速度を1.3〜2.2倍高速化しました。数学、コード、対話などの多様なドメインで有効性が確認されています。",
      "why_it_matters": "計算コストが非常に高い「生徒の生成に基づく事後学習」において、期待値を維持したまま計算量を削減する理論的根拠に基づいた高速化手法を提案しています。",
      "tags": [
        "LLM",
        "蒸留",
        "効率化"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21340",
      "title": "Dimension-Free PAC-Bayes Generalization for Deep Neural Networks via Dirichlet Processes",
      "url": "https://arxiv.org/abs/2610.21340",
      "pdf": "https://arxiv.org/pdf/2610.21340",
      "authors": [
        "Sumit Vashishtha"
      ],
      "categories": [
        "stat.ML",
        "cs.LG",
        "math.ST",
        "stat.TH"
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
      "star_quote": "shifting prior specification from internal parameters to the non-parametric space",
      "signals": [],
      "headline": "ディリクレ過程を用いたニューラルネットワークのパラメータ数に依存しない汎化境界",
      "what": "従来のPAC-Bayes理論がパラメータ空間に事前分布を置いていたのに対し、データの分布空間上にディリクレ過程（DP）を用いた事前分布を定義する新しい理論です。データ処理不等式を用いて、パラメータ空間の相対エントロピーをデータ空間のDPダイバージェンスで抑え込みます。",
      "enables": "MNISTを用いた実験で、420万パラメータの深層学習モデルに対し、従来の境界が1,000%を超える（意味をなさない）のに対し、8.8%〜9.4%という極めてタイトで有効な汎化証明を与えました。",
      "why_it_matters": "「モデルが巨大化しても汎化性能が悪化しない」という現代の深層学習の挙動を、パラメータ数に依存しない形で数学的に証明できる道を開きました。",
      "tags": [
        "機械学習理論",
        "汎化性能",
        "ベイズ"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21634",
      "title": "Anchor3DGS: Feed-Forward 3D Gaussian Splatting with Compact Anchor-Based Representation",
      "url": "https://arxiv.org/abs/2610.21634",
      "pdf": "https://arxiv.org/pdf/2610.21634",
      "authors": [
        "Sheng Ye",
        "Jiangke Lin",
        "Fudong Wang",
        "Yi Yuan",
        "Zhen-Hui Dong",
        "Yong-Jin Liu"
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
      "comment": "NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Anchor3DGS achieves state-of-the-art novel view synthesis quality",
      "signals": [],
      "headline": "アンカーベースの表現による効率的なフィードフォワード3D Gaussian Splatting",
      "what": "ピクセル単位でガウス分布を予測する代わりに、シーン内の幾何学的複雑さに応じてアンカー（3D点）を配置し、そこからローカルなガウス分布を生成する手法です。情報の量（エントロピー）に基づいてアンカーを集中させ、疎密のある効率的な表現を実現します。",
      "enables": "既存の手法と比較して、ガウス分布の数を10分の1に削減しながら、同等以上の高品質な新規視点合成を達成しました。ポーズ情報が未知の状態からの再構成も可能です。",
      "why_it_matters": "入力解像度やビュー数に依存してデータ量が増大する従来の課題を克服し、コンパクトで計算効率の高い3Dシーン表現を可能にします。",
      "tags": [
        "3DGS",
        "3D復元",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22352",
      "title": "SUPRA-TEX: 3D Generation with Super-Aligned Texture",
      "url": "https://arxiv.org/abs/2610.22352",
      "pdf": "https://arxiv.org/pdf/2610.22352",
      "authors": [
        "Chen Yang",
        "Jiemin Fang",
        "Fanpeng Meng",
        "Zihao Huang",
        "Jichen Pang",
        "Guanjun Wu"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://supra-3d.github.io/supratex/",
      "hf_upvotes": 7,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SUPRA-Tex achieves SOTA performance in both geometry-conditioned texturing",
      "signals": [],
      "headline": "1枚の画像から高品質なPBRテクスチャを生成・補完するSUPRA-TEX",
      "what": "単一画像から3Dメッシュに対して物理ベースレンダリング（PBR）用のテクスチャを適用する手法です。見える部分のPBRマップ推定、表面アライメント、見えない部分の3D補完の3つの工程に分離し、Flow Transformerを用いて一貫性のあるテクスチャを生成します。",
      "enables": "入力画像に忠実な「WYSIWYG（見たままが得られる）」品質を維持しつつ、見えない背面なども一貫性を保って補完します。商用システムに匹敵、あるいは一部上回るテクスチャ品質を公開データのみの学習で達成しました。",
      "why_it_matters": "画像と3Dの一貫性不足や細部の消失という既存の課題を、工程の明示的な分離と参照画像をアンカーとして保持するアーキテクチャにより解決しました。",
      "tags": [
        "3D生成",
        "テクスチャ生成",
        "PBR"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.19305",
      "title": "Data-free Multistep Diffusion Distillation",
      "url": "https://arxiv.org/abs/2610.19305",
      "pdf": "https://arxiv.org/pdf/2610.19305",
      "authors": [
        "Ngoc Duy Tran",
        "Kien Do",
        "Duc Thanh Nguyen",
        "Truyen Tran"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 14 figures, 10 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose Progressive Multistep Data-free Distillation (PMDD)",
      "signals": [],
      "headline": "データフリーかつ複数ステップ対応の蒸留手法PMDDによる拡散モデルの高速化",
      "what": "各推論ステップ数に対応する専用の適応ネットワークを割り当てつつ、先行ステップの生成を保護するunforget lossを組み合わせたPMDDを提案しています。単一モデルで複数の推論予算をサポートし、最適化のバイアスを低減します。",
      "enables": "ImageNet 64x64で2ステップ時にFID 1.99を達成し、教師モデル（512ステップ）を上回る品質を、既存手法の約4〜5倍低い計算コストで実現しました。",
      "why_it_matters": "学習データを必要とせず、高品質なマルチステップ生成と計算効率を同時に達成できる実用的な蒸留フレームワークです。",
      "tags": [
        "拡散モデル",
        "モデル蒸留",
        "画像生成"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19364",
      "title": "Dynamic Graph World Modelling: Learning Future Dynamics from Temporal Context",
      "url": "https://arxiv.org/abs/2610.19364",
      "pdf": "https://arxiv.org/pdf/2610.19364",
      "authors": [
        "Bo Li",
        "Yue Yang",
        "Yujin Huang",
        "Siao Liu",
        "David Lemphers",
        "Sara E Rodriguez Gomez"
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
      "star_quote": "propose Dynamic Graph World Modelling (DyG-WM), the first framework",
      "signals": [],
      "headline": "時間的コンテキストから将来のグラフ状態を予測する動的グラフ世界モデルDyG-WM",
      "what": "履歴のノード・関係の軌跡を要約するエンコーダーと、構造変化を捉えるパスシグネチャエンコーダーを備えたフレームワークです。生グラフを再構成せずにターゲットの埋め込み表現を直接予測する目的関数を採用しています。",
      "enables": "12のリンク予測と2つのノード分類データセットにおいて、構造の経時変化を捉えることで高精度な将来予測が可能になりました。",
      "why_it_matters": "ノードと関係の進化を分離・統合して学習する初の世界モデルであり、スパースな将来の観測データに対しても頑健な学習を実現しています。",
      "tags": [
        "グラフニューラルネットワーク",
        "世界モデル",
        "時系列予測"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20331",
      "title": "Are We Overthinking One-Step Generation?",
      "url": "https://arxiv.org/abs/2610.20331",
      "pdf": "https://arxiv.org/pdf/2610.20331",
      "authors": [
        "Woobin Park",
        "Jaeyeon Kim",
        "Yilun Du",
        "Sitan Chen",
        "Bohyung Han"
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
      "star_quote": "introduce Priming Models, a simple two-stage framework",
      "signals": [],
      "headline": "再構成学習と特徴量空間の分布調整によるシンプルで高速な1ステップ画像生成モデル",
      "what": "Priming Modelsと呼ばれる2段階の学習フレームワークで、まず固定ノイズレベルでの再構成（デノイジング）を学習し、その後に特徴量空間での分布学習を行います。複雑な蒸留手法を必要としません。",
      "enables": "ImageNet 256x256において、既存手法の約1/10の計算コストで、1ステップ生成モデルとして最高水準のFID 1.19を達成しました。",
      "why_it_matters": "1ステップ生成における学習の難しさが、単純な再構成学習の先行実施だけで解消できることを示し、学習効率のパレート限界を更新しました。",
      "tags": [
        "画像生成",
        "1ステップ生成",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20400",
      "title": "HRTF Upsampling and Personalization via Neural Operators",
      "url": "https://arxiv.org/abs/2610.20400",
      "pdf": "https://arxiv.org/pdf/2610.20400",
      "authors": [
        "Meenakshi Krishnan",
        "You Zhang",
        "Ramani Duraiswami",
        "C. Phillip Brown"
      ],
      "categories": [
        "cs.SD",
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
      "star_quote": "18% lower LSD and 43% lower ILD error than the strongest baseline at 100 measurements",
      "signals": [],
      "headline": "ニューラルオペレーターを用いて少数の測定からHRTFを高速・高精度に復元するSPARO",
      "what": "まばらな空間方向の測定値を連続的なHRTFフィールドに写像するニューラルオペレーター手法です。測定値を球面潜在モードに投影し、Transformerで処理した後に任意の方向でデコードします。",
      "enables": "既存手法と比較してLSDを18%、ILD誤差を43%削減しつつ、ニューラルフィールドベースの手法よりも15〜373倍高速な復元を実現しました。",
      "why_it_matters": "個人の耳の形状等に依存するHRTFのパーソナライズにおいて、極めて少ない測定負担で高品質なバイノーラルオーディオを提供可能にします。",
      "tags": [
        "音声信号処理",
        "ニューラルオペレーター",
        "パーソナライゼーション"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19201",
      "title": "Into the LidarVerse: A Real-Time Unified LiDAR World Model Across Tasks and Sensors",
      "url": "https://arxiv.org/abs/2610.19201",
      "pdf": "https://arxiv.org/pdf/2610.19201",
      "authors": [
        "Henry Che",
        "Xuanchi Ren",
        "Sanja Fidler",
        "Shenlong Wang",
        "Laura Leal-Taix\\'e",
        "Shengyu Huang"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 17 figures. Project page: https://research.nvidia.com/labs/sil/projects/lidarverse",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LidarVerse achieves state-of-the-art performance on most reported metrics across all three evaluation protocols",
      "signals": [],
      "headline": "LiDARシミュレーションと予測を統合したリアルタイム世界モデルLidarVerse",
      "what": "LiDARシーケンスを共通の潜在空間にマップするユニバーサルトークナイザーを用いた生成フレームワークです。単一のモデルで、新規シーン生成、ポイントクラウド予測、既存シーンの再シミュレーションの3タスクを統合しています。",
      "enables": "H100 GPU 1枚で11 FPSのリアルタイム動作を実現し、32/64/128ビームの異なるセンサー構成や未知の走査パターンに対しても高い汎用性を示しました。",
      "why_it_matters": "再構成ベースの幾何学的整合性と、生成ベースの多様性を一つのモデルで両立させ、自律走行システム等のクローズドループ評価に貢献します。",
      "tags": [
        "自動運転",
        "LiDAR",
        "世界モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19408",
      "title": "ForkGRPO: Efficient Exploration and Fine-Grained Credit Assignment for Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.19408",
      "pdf": "https://arxiv.org/pdf/2610.19408",
      "authors": [
        "Zhaoyan Jia",
        "Chengwei Zhou",
        "Gourav Datta",
        "Massoud Pedram"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 5 figures. The first two authors contributed equally",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "ForkGRPO, an RL framework that couples efficient exploration with fine-grained segment-level credit assignment.",
      "signals": [],
      "headline": "拡散言語モデルの推論能力を高める効率的な探索と報酬割り当て手法ForkGRPO",
      "what": "高エントロピーな中間状態から複数の継続をサンプリングするForking戦略を用いた強化学習フレームワークです。セグメントレベルでの報酬割り当てと、共有プレフィックスの再利用により効率化を図っています。",
      "enables": "既存のGRPO手法と比較して、生成トークン数を最大27.8%削減しながら、数学や推論のベンチマークで最大1.2ポイントの精度向上を達成しました。",
      "why_it_matters": "拡散モデルベースのLLMにおいて課題であった探索の停滞と報酬の細粒度化を解決し、学習速度と性能の両立を可能にしました。",
      "tags": [
        "強化学習",
        "拡散モデル",
        "推論"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20107",
      "title": "Why Generate a Click? Plug-in Decision Heads for Web Agents",
      "url": "https://arxiv.org/abs/2610.20107",
      "pdf": "https://arxiv.org/pdf/2610.20107",
      "authors": [
        "Chengguang Gan",
        "Yunhao Liang",
        "Hanjun Wei",
        "Qinghao Zhang",
        "Zhixi Cai",
        "Shiwen Ni"
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
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "Plug-in decision heads on a frozen generator predict the action type, pool the visual tokens inside each numbered box to pick the target",
      "signals": [],
      "headline": "Webエージェントの行動決定をトークン生成から分離するPlug-in Decision Heads",
      "what": "VLMの隠れ状態を直接利用して行動タイプやクリック対象を選択する軽量なヘッドを追加する手法です。確信度が高い場合はヘッドが即座に決定し、低い場合のみ通常のテキスト生成にフォールバックするカスケード構造を持ちます。",
      "enables": "WebArenaでの成功率を最大1.3%向上させつつ、生成トークン数を半分以下に削減しました。また、フリーズされたモデルに適用することで元の性能劣化を防いでいます。",
      "why_it_matters": "Webブラウジングのような構造的選択肢が多いタスクにおいて、冗長なテキスト生成を省略し、効率的かつ高精度なエージェント運用を可能にします。",
      "tags": [
        "Webエージェント",
        "VLM",
        "推論加速"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20586",
      "title": "Continuum Attention",
      "url": "https://arxiv.org/abs/2610.20586",
      "pdf": "https://arxiv.org/pdf/2610.20586",
      "authors": [
        "Afshin Khadangi"
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
      "hf_upvotes": 7,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "replaces discrete key and value lookup with integration over a continuous, piecewise linear memory curve.",
      "signals": [],
      "headline": "離散的なアテンションを連続的な積分に置き換えるContinuum Attention",
      "what": "キーと値のルックアップを区分線形なメモリ曲線上の積分に置き換える新しいアテンション演算子です。クエリが曲線上の指数的な関連性密度を誘発し、閉形式の指数モーメントから正確な正規化アテンションを計算します。",
      "enables": "標準的なSoftmaxやFocal Attentionと比較して、検証データの負の対数尤度を0.02〜0.048 nats/byte低減し、すべての比較で優れた性能を示しました。",
      "why_it_matters": "Transformerのデコーダー構造を維持したまま、離散的なトークン単位の制約を超えたより柔軟な情報の表現と利用を可能にする基礎的な提案です。",
      "tags": [
        "Transformer",
        "アテンション",
        "言語モデル"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20590",
      "title": "Feed-Forward Multi-View Feature Coding for 3D Gaussian Splatting",
      "url": "https://arxiv.org/abs/2610.20590",
      "pdf": "https://arxiv.org/pdf/2610.20590",
      "authors": [
        "Seungmi Choi",
        "Ji-Hyoun Choi",
        "Suhyun Jo",
        "Tae-Gwon Park",
        "Hui Yong Kim"
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
      "star_quote": "MFGS achieves 99.76-99.86% bitrate savings over the generate-then-compress pipeline",
      "signals": [],
      "headline": "3D Gaussian Splattingの幾何と外観を統合的に圧縮するフィードフォワード符号化",
      "what": "入力画像から抽出した多視点特徴を直接コンパクトなビットストリームに符号化し、受信側でGaussian属性を予測するMFGSフレームワークです。幾何と外観の冗長性を同時に活用するレート歪み学習を導入しています。",
      "enables": "既存の圧縮パイプラインと比較して、同等以上の品質で99.76%以上のビットレート削減を達成し、処理速度を約12倍高速化しました。",
      "why_it_matters": "微分不可能な操作を排除したエンドツーエンド学習により、3Dシーンの超効率的な配信とレンダリング予算に応じた動的な品質調整を可能にしました。",
      "tags": [
        "3D Gaussian Splatting",
        "データ圧縮",
        "3D復元"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.21601",
      "title": "Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.21601",
      "pdf": "https://arxiv.org/pdf/2610.21601",
      "authors": [
        "Bingxi Hou",
        "Guochao Jiang",
        "Guofeng Quan",
        "Weiqing Li",
        "Wenfeng Feng",
        "Guohua Liu"
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
      "hf_upvotes": 451,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲451"
      ],
      "headline": "学習途中のチェックポイントを用いた方策の変化方向の一致による知識蒸留の改善",
      "what": "RL学習後の教師モデルから生徒へ知識を移転する際、最終的な方策の差分だけでなく、学習途中の「ウェイポイント」での変化方向も参照する手法です。初期と後期の変化方向が一致している場合にのみ蒸留の重みを高めるゲート機構を導入しています。",
      "enables": "Qwen3モデルを用いた数学およびコードの推論タスクにおいて、単純な蒸留手法を全てのケースで上回る最高スコアを達成しました。特定の行動に対する「迷い」のない確実な学習変化を選択的に生徒に伝えます。",
      "why_it_matters": "RLによる学習過程のダイナミクスを利用することで、最終結果だけでは見えない「一貫性のあるスキルの進化」を効率的に生徒モデルに転送できることを示しました。",
      "tags": [
        "LLM",
        "強化学習",
        "知識蒸留"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "url": "https://arxiv.org/abs/2610.22200",
      "pdf": "https://arxiv.org/pdf/2610.22200",
      "authors": [
        "Hanzhang Zhou",
        "Long Li",
        "Quyu Kong",
        "Lei Wang",
        "Panrong Tong",
        "Long Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 270,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲270"
      ],
      "headline": "視覚とプログラム実行を統合したオープンな汎用コンピュータ操作エージェント",
      "what": "GUI操作だけでなく、エージェントが自らコードを書いて実行し、その結果をもとに次の行動を決定するオープンなスタックです。タスクの状態判断を固定のルールからモデル自身に委ねる「harness-to-model transfer」を特徴としています。",
      "enables": "OSWorld-v2において、GPT-6 AstraやClaude Opus 5を含む全評価モデルでスコアを改善し、平均的なタスクの部分スコアを19.6ポイント向上させました。また、従来のGUI操作のみの手法と比較してタスク完了までのステップ数を平均53.0%削減しました。",
      "why_it_matters": "ブラックボックス化している先端のエージェントシステムに対し、コード実行を統合したオープンな実装を提供し、実デバイスでの実行効率と成功率を大幅に向上させました。",
      "tags": [
        "AIエージェント",
        "Computer Use",
        "オープンソース"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "url": "https://arxiv.org/abs/2610.22350",
      "pdf": "https://arxiv.org/pdf/2610.22350",
      "authors": [
        "Dongxu Yang",
        "Hongda Yan",
        "Renxin Wang",
        "Baoli Zhang",
        "Haojia Zuo",
        "Ying Zhao"
      ],
      "categories": [
        "cs.AI",
        "cs.CL",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 8 figures, 4 tables. Website: https://fde-gym.com/paper ; Code: https://github.com/deeplethe/fde-gym ; Data: https://huggingface.co/datasets/DeepLethe/FDE-Gym",
      "hf_upvotes": 229,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲229"
      ],
      "headline": "曖昧な要求やライブ環境での課題解決を評価する実務型エージェントベンチマーク",
      "what": "明確なチケットが存在しない現実の顧客デリバリー業務を模したベンチマーク（FDE-Gym）です。エージェントはステークホルダー（スクリプト）と対話し、曖昧な要件の明確化や、明文化されていない制約の発見、本番に近いシステムでの稼働が求められます。",
      "enables": "既存の最高性能モデルでも、隠れた制約を特定しなければならない状況では95タスク中14タスクしか解決できず、平均スコアは0.56に留まりました。情報を全て与えられた場合でもビジネス上の成功指標を十分に満たせない課題が浮き彫りになりました。",
      "why_it_matters": "「仕様書通りのコードを書く」段階を超えて、顧客のビジネス成功に寄与する実務的なAIシステム構築能力を客観的に測定する指標となります。",
      "tags": [
        "AIエージェント",
        "ベンチマーク",
        "ソフトウェアエンジニアリング"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22341",
      "title": "3DCodeVerse: Exploring 3D Worlds as Code",
      "url": "https://arxiv.org/abs/2610.22341",
      "pdf": "https://arxiv.org/pdf/2610.22341",
      "authors": [
        "Yipeng Gao",
        "Ziyao Zeng",
        "Jinfa Huang",
        "Yijiang Li",
        "Haolin Xiong",
        "Wang Qin"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://3dcodeverse.com/",
      "hf_upvotes": 99,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲99"
      ],
      "headline": "コード実行による空間推論と自動検証を行う3Dコンテンツ生成エコシステム",
      "what": "3Dシーンをプログラム（コード）として生成・編集するためのデータセットと実行環境です。200万件の実行可能な3Dコードを含む「3DCodeVerse-2M」と、視覚フィードバックや空間計測を用いて自己修正を行うマルチエージェント・フレームワークで構成されます。",
      "enables": "オープンソースモデルの3Dコーディング能力を大幅に向上させ、人間によるブラインドテストにおいてClaude Design（3D Object）に対して90%の勝率を記録しました。生成された3Dデータは編集可能かつ検証可能です。",
      "why_it_matters": "ブラックボックスな3D資産生成ではなく、人間が編集・再利用できる「コードとしての3D」というパラダイムを大規模データと自動検証で強化しました。",
      "tags": [
        "3D生成",
        "AIコーディング",
        "空間推論"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20939",
      "title": "MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments",
      "url": "https://arxiv.org/abs/2610.20939",
      "pdf": "https://arxiv.org/pdf/2610.20939",
      "authors": [
        "Panrong Tong",
        "Quyu Kong",
        "Pengxiang Li",
        "Tianyu Xia",
        "Hanzhang Zhou",
        "Lei Wang"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 15 pages",
      "hf_upvotes": 94,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲94"
      ],
      "headline": "モバイル・PC・Webを跨ぐ大規模なGUIエージェント学習・評価プラットフォーム",
      "what": "最大2万の並列環境をサポートする、GUIエージェントのための強化学習および評価プラットフォームです。モックアプリの自動合成機能や、アプリを跨いだタスクの検証機を備えており、一貫したパイプラインでのデータ収集とオンラインRLを可能にします。",
      "enables": "9Bパラメータのモデル（MAI-Gym-9B）で、MobileWorld（78.4%）やOSWorld（76.2%）において10B以下のオープンモデルとして最高性能を達成しました。モック環境での学習が実機の物理スマートフォン上の操作成功率向上（28.8%→48.1%）に寄与することを確認しました。",
      "why_it_matters": "GUIエージェントの学習に不可欠な「スケーラブルな環境」と「検証可能な報酬」の問題を解決し、実機への転移可能性を高めました。",
      "tags": [
        "AIエージェント",
        "強化学習",
        "GUI操作"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22264",
      "title": "SCOPE: Semantic Bounded Credit Optimization for Prompt Engineering in Text-to-image Generation",
      "url": "https://arxiv.org/abs/2610.22264",
      "pdf": "https://arxiv.org/pdf/2610.22264",
      "authors": [
        "Yufei Jiao",
        "Jinfa Huang",
        "Zeyue Xue",
        "Tianyu Xie",
        "Yuexiao Ma",
        "Rongrong Ji"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/MAC-AutoML/SCOPE",
      "hf_upvotes": 77,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲77"
      ],
      "headline": "意味論的なスパンに基づく報酬最適化による画像生成プロンプトの改善手法",
      "what": "テキストから画像への生成（T2I）において、プロンプト書き換えモデルを強化学習する際、単一のトークンではなく、オブジェクトや属性などの意味的なまとまり（スパン）ごとに勾配の重みを調整する手法（SCOPE）です。GRPOをベースに、意味的な境界を考慮した最適化を行います。",
      "enables": "SD3やFLUXなどの主要モデルにおいて、標準的なGRPOと比較してGeneValで9.48%、T2I-CompBenchで7.62%の相対的な精度向上を達成しました。追加の画像レンダリングや個別のスパン報酬は不要です。",
      "why_it_matters": "単語単位での学習ではなく、文章の構造的な意味（意味論的スパン）を強化学習の帰納バイアスとして導入することで、より正確な画像生成プロンプトの修正を可能にしました。",
      "tags": [
        "画像生成",
        "プロンプトエンジニアリング",
        "強化学習"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22347",
      "title": "Speculative Forcing for Efficient Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2610.22347",
      "pdf": "https://arxiv.org/pdf/2610.22347",
      "authors": [
        "Hyunwook Choi",
        "Seungryong Kim",
        "Dongyoon Han",
        "Sangdoo Yun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 72,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲72"
      ],
      "headline": "中間ステップでのトークン早期確定による自己回帰型ビデオ生成の高速化",
      "what": "ビデオ生成のデノイジング過程において、初期段階で最終出力に近い値に収束したトークンを自動で判定し、それ以降の計算をスキップする「投機的強制（Speculative Forcing）」手法です。確定したトークンはフリーズされ、残りのトークンのためのコンテキスト（KVキャッシュ）としてのみ機能します。",
      "enables": "生成品質を維持したまま計算量を大幅に削減し、LongLiveデータセットにおいて4ステップの生成を約1.7ステップ分のコストで実行、41.7fps（1.5倍超の高速化）を達成しました。学習不要な手法と、学習ベースの判定器の双方が提案されています。",
      "why_it_matters": "全てのトークンに均一な計算を割り当てる非効率性を解消し、ビデオ生成のリアルタイム化に向けたトークン単位の適応的計算を可能にしました。",
      "tags": [
        "ビデオ生成",
        "推論高速化",
        "自己回帰モデル"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.21306",
      "title": "VLA-$\\Delta$: Learning Physical State Transition for Vision-Language-Action Models",
      "url": "https://arxiv.org/abs/2610.21306",
      "pdf": "https://arxiv.org/pdf/2610.21306",
      "authors": [
        "Qi Lu",
        "Jiarun Li",
        "Ce Zhang",
        "Miao Pan",
        "Yi Pan",
        "Xu Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 8 figures, 9 tables, including appendices. Code: https://github.com/ZJU-OmniAI/VLA-Delta",
      "hf_upvotes": 53,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲53"
      ],
      "headline": "物理的な状態遷移の学習によりロバスト性を向上させた視覚言語行動モデル",
      "what": "VLA（Vision-Language-Action）モデルにおいて、現在の観測から直接行動を予測するだけでなく、将来の物理的な状態変化（デルタ）を明示的に学習ターゲットとするフレームワークです。セマンティクスと視覚的な動きの変化を網羅した大規模な事前学習データセットを構築しています。",
      "enables": "LIBEROやRoboTwinなどのベンチマークで最先端の性能を達成し、実機ロボット実験でもπ0.5などの既存手法を上回りました。推論時には追加のオーバーヘッドなしで行動を生成できます。",
      "why_it_matters": "「見た目と行動の直接対応」への過学習を防ぎ、物体がどのように物理的に変化するかという「変化の予測」を介することで、より汎用的なロボット操作を実現します。",
      "tags": [
        "ロボティクス",
        "VLA",
        "表現学習"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22174",
      "title": "Mosaic: Multi-Session Agentic Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.22174",
      "pdf": "https://arxiv.org/pdf/2610.22174",
      "authors": [
        "Yilong Xu",
        "Minrui Xu",
        "Xinyu Zhou",
        "Xiang Long",
        "Haochen Tan",
        "Zhijiang Guo"
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
      "hf_upvotes": 48,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲48"
      ],
      "headline": "複数セッションにまたがるエージェント行動を最適化する階層的強化学習手法",
      "what": "コンテキスト圧縮やサブエージェントの分岐など、一つのタスクで複数のセッション（コンテキスト）が発生するエージェントの行動を最適化する手法（Mosaic）です。セッションごとの限界寄与度を推定し、セッションの割り当て効率と個別の行動の質を階層的に最適化します。",
      "enables": "BrowseCompベンチマークにおいて、従来の単純な報酬放送（Broadcasting）よりも高い成功率を達成しつつ、使用するセッション数を削減し、効率的なリソース配分を実現しました。",
      "why_it_matters": "従来の「単一の長いコンテキスト」を前提としたRL学習の限界を打破し、現代的なエージェントの実行形態に即した、セッション効率の高い学習を可能にしました。",
      "tags": [
        "AIエージェント",
        "強化学習",
        "コンテキスト管理"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20818",
      "title": "Intern Lumina U2: A Multi-Codebook Diffusion Large Language Model for Omni-Visual Understanding and Image Generation",
      "url": "https://arxiv.org/abs/2610.20818",
      "pdf": "https://arxiv.org/pdf/2610.20818",
      "authors": [
        "Qian Yu",
        "Zongyang Qiu",
        "Juncheng Yan",
        "Hongliang Li",
        "Qi Qin",
        "Keqi Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages, 12 figures, 22 tables",
      "hf_upvotes": 40,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲40"
      ],
      "headline": "多重コードブックを用いた完全離散空間での統合型拡散言語モデルIntern Lumina U2",
      "what": "テキストと画像を同一の離散的な最適化空間で扱う、多重コードブック（Multi-Codebook）形式の拡散言語モデルです。各視覚位置を複数のコードで表現することで表現力を高めつつ、自己回帰的なヘッドと並列処理を行う拡散バックボーンを組み合わせています。",
      "enables": "画像、ビデオ、3Dデータの理解と生成において、単一のバックボーンで最高水準の性能を達成しました。また、安定性に基づいたサンプリング戦略により、画像生成を4.45倍高速化しています。",
      "why_it_matters": "離散トークン（テキスト）と連続表現（画像）の混在による最適化の対立を、多重コードブックによる完全離散化によって解消し、マルチモーダルな生成と理解を真に一つの空間で実現しました。",
      "tags": [
        "マルチモーダル",
        "拡散モデル",
        "離散表現"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.22194",
      "title": "AutoSFT: An Agentic System for Automated Data Research in Supervised Fine-Tuning",
      "url": "https://arxiv.org/abs/2610.22194",
      "pdf": "https://arxiv.org/pdf/2610.22194",
      "authors": [
        "Bingxiang He",
        "Pengqi Sun",
        "Shihao Peng",
        "Shaoxuan Li",
        "Huiyu Xiao",
        "Hongjian Shi"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, 16 figures",
      "hf_upvotes": 35,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲35"
      ],
      "headline": "SFTデータの研究・改善プロセスを自動化するマルチエージェントシステムAutoSFT",
      "what": "教師あり微調整（SFT）のデータ選定、修正、合成のサイクルを自動化するシステムです。単一のエージェントではなく、実行と分析を分離するメタエージェント、複数の視点から提案を行う分析エージェント、不足データを補う合成エージェントで構成されます。",
      "enables": "IFEvalやMBPP+などのベンチマークにおいて、単一エージェントによる自動化と比較して大幅な精度向上（IFEvalで最大+9.9など）を達成しました。データエンジニアが行う「割合調整、剪定、修復、合成」のフルレンジの操作を自動で再現します。",
      "why_it_matters": "ポストトレーニングにおけるデータの質向上の重要性に着目し、人間のデータエンジニアが行う複雑な意思決定プロセスをマルチエージェント構造で模倣・自動化しました。",
      "tags": [
        "LLM",
        "SFT",
        "データパイプライン"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20693",
      "title": "Orbia: Do Generated Videos Form a Consistent 3D World?",
      "url": "https://arxiv.org/abs/2610.20693",
      "pdf": "https://arxiv.org/pdf/2610.20693",
      "authors": [
        "Dongyue Lu",
        "Guian Fang",
        "Hur Lim",
        "Yonggang Wu",
        "Yanrong Wang",
        "Hongshan Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical Report; 70 pages, 43 figures, 12 tables; Project page at https://orbia-bench.github.io/ Code at https://github.com/worldbench/Orbia Dataset at https://huggingface.co/datasets/Orbia/Orbia",
      "hf_upvotes": 31,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲31"
      ],
      "headline": "ビデオ生成モデルの3D一貫性を多角的に測定する評価ベンチマークOrbia",
      "what": "生成されたビデオが物理的に矛盾のない3D世界を描いているかを評価する初の体系的ベンチマークです。「入力の保存（Input Preservation）」「生成内容の永続性（Persistence）」「3D自己整合性（Self-consistency）」の3次元で、720件のインスタンスを用いて評価します。",
      "enables": "27種類のビデオ生成モデルを評価し、これまで主観的にしか判断できなかった「再訪問時の風景の一貫性」や「視点移動に伴う幾何学的矛盾」を定量的に診断できるようにしました。",
      "why_it_matters": "「見た目がリアルな動画」と「一貫したシミュレーション世界」の乖離を明確にし、より高度なインタラクティブ世界モデルの開発を加速させます。",
      "tags": [
        "ビデオ生成",
        "ベンチマーク",
        "3D一貫性"
      ],
      "fetched_at": "2026-10-17T09:12:47.640001+09:00"
    },
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "url": "https://arxiv.org/abs/2610.20571",
      "pdf": "https://arxiv.org/pdf/2610.20571",
      "authors": [
        "Weijie Wang",
        "Haomin Zhang",
        "Ye Li",
        "Akide Liu",
        "Zeyu Zhang",
        "Haoyu Zhao"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://lhmd.top/atas/, Code: https://github.com/ziplab/ATAS",
      "hf_upvotes": 323,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲323"
      ],
      "headline": "シーンとイベントのメモリ管理により長尺動画の整合性を保つATASフレームワーク",
      "what": "脚本をロケーション、カメラ、イベント時間の参照を含むショット要求に変換し、シーンメモリ（静的幾何）とイベントメモリ（動的観測）を利用して生成を制御するフレームワークです。生成後にメモリを更新・登録する仕組みを持ちます。",
      "enables": "既存の4つの動画生成モデルすべてにおいて、ショット間の一貫性指標を大幅に改善し、ターゲット画像の空間的な再訪問精度において最高スコアを達成しました。",
      "why_it_matters": "プロンプトの受け渡しだけでは不十分だった長尺動画における「同じ場所への戻り」や「過去の出来事の再現」を、明示的なメモリ機構で解決しました。",
      "tags": [
        "動画生成",
        "一貫性",
        "エージェント"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "url": "https://arxiv.org/abs/2610.20584",
      "pdf": "https://arxiv.org/pdf/2610.20584",
      "authors": [
        "Mingyu Ouyang",
        "Yiran Wang",
        "Siyuan Hu",
        "Xingyilang Yin",
        "Huiqiang Sun",
        "Guangzhi Wang"
      ],
      "categories": [
        "cs.CV",
        "cs.AI",
        "cs.HC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://player-1-project.github.io/ and code: https://github.com/TencentARC/Player-1",
      "hf_upvotes": 256,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲256"
      ],
      "headline": "合成環境を用いた強化学習によりゲーム操作能力を獲得するPlayer-1",
      "what": "人間によるデモンストレーションを超えて、検証可能な報酬を備えた16種類の合成環境（Player-1-Gym）でモデルを強化学習させるフレームワークです。相対移動や複合アクションを含む拡張された操作空間を扱います。",
      "enables": "MineDojo-300において、教師あり学習のみのモデルから成功率を最大27.8ポイント向上させ、既存の最強ベースラインを大幅に上回る38.33%を記録しました。",
      "why_it_matters": "デモデータの不足という問題を、多様なゲーム要素を抽象化した合成環境でのRLによって解決し、汎用的なデジタル制御能力の獲得経路を示しました。",
      "tags": [
        "コンピュータ操作エージェント",
        "強化学習",
        "VLM"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "url": "https://arxiv.org/abs/2610.20344",
      "pdf": "https://arxiv.org/pdf/2610.20344",
      "authors": [
        "Yuyao Ge",
        "Shenghua Liu",
        "Peizhong Gao",
        "Chendi Ge",
        "Chenxu Liu",
        "Yiwei Wang"
      ],
      "categories": [
        "cs.SE",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 5 figures, 4 tables",
      "hf_upvotes": 93,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲93"
      ],
      "headline": "コーディングエージェントの実行環境構築能力を測定する新ベンチマークDoc2Harness",
      "what": "ドキュメントとスケルトンから、実際のテストをパスする完全な実行環境（ハーネス）を構築する能力を評価する2段階のベンチマークです。構築された環境は隔離されたコンテナ内で実際に動作チェックされます。",
      "enables": "最新のGPT-4クラスのモデルでも約半数のテストケースで失敗すること、特にモジュール間の機能分割において失敗が集中することを明らかにしました。",
      "why_it_matters": "単なるコード生成ではなく、エージェントを支えるインフラ（ハーネス）を自律的に構築するという、より高度で長期的なエンジニアリング能力を定量化できます。",
      "tags": [
        "ソフトウェアエンジニアリング",
        "エージェント",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19789",
      "title": "More Methods, Better Agents? A Reality Check on Self-Distillation in Agentic Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.19789",
      "pdf": "https://arxiv.org/pdf/2610.19789",
      "authors": [
        "Linhao Zhong",
        "Bozhen Fang",
        "Xuehao Wang",
        "Duochao Shi",
        "Zekai Luo",
        "Guangming Yao"
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
      "hf_upvotes": 72,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲72"
      ],
      "headline": "エージェントRLにおける自己蒸留手法の安定性と実用性を検証するReality Check",
      "what": "10種類の代表的な自己蒸留手法を、GRPOをベースラインとして4つのタスクと3つのモデルサイズで統一環境にて評価した調査研究です。計132回のトレーニング、12,000時間以上のGPU計算を用いて比較を行いました。",
      "enables": "多くの手法がGRPOに対して一貫した優位性を示せないこと、最終性能が高くても学習が不安定なケースがあること、計算コストが性能に直結しないことなどを特定しました。",
      "why_it_matters": "乱立する手法に対して公平な比較基準を提供し、実用的なエージェント学習において何が本当に有効で安定しているかを明確にしました。",
      "tags": [
        "強化学習",
        "エージェント",
        "自己蒸留"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20572",
      "title": "Recovering Reliable Supervision via Critique-Guided On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.20572",
      "pdf": "https://arxiv.org/pdf/2610.20572",
      "authors": [
        "Kaixiang Zhao",
        "Tianrun Yu",
        "Shangzhe Li",
        "Yuxiao Yang",
        "Amanda Hughes",
        "Weitong Zhang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages. Code: https://github.com/kzhao5/CriticOPD",
      "hf_upvotes": 70,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲70"
      ],
      "headline": "間違いを認識し修正を促すことで教師モデルの回復力を高めるCriticOPD",
      "what": "学生モデルの誤ったロールアウトを教師モデルが批判（Critique）し、それを踏まえて学生が再執筆するプロセスを学習に取り入れるオンポリシー蒸留手法です。教師モデルが学生のミスに引きずられる問題を解決します。",
      "enables": "Qwen3を学生とした実験で、数学的推論ベンチマーク全般、特に難易度の高いコンペティションレベルの問題で性能を向上させました。",
      "why_it_matters": "教師モデルが「間違いを認識できても、そこから正解に導くことが難しい」という弱点を克服し、より信頼性の高い教師信号を学生に提供できます。",
      "tags": [
        "モデル蒸留",
        "推論",
        "LLM"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19975",
      "title": "LatentLoop: Scaling Looped MoE Models with Asymmetric Compute Allocation",
      "url": "https://arxiv.org/abs/2610.19975",
      "pdf": "https://arxiv.org/pdf/2610.19975",
      "authors": [
        "Zefeng He",
        "Yunkai Chai",
        "Xiaoyang Chen",
        "Tong Zhu",
        "Zongliang Wu",
        "Yun Luo"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 8 figures",
      "hf_upvotes": 64,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲64"
      ],
      "headline": "非対称な計算資源割り当てによりLooped MoEの効率を最大化するLatentLoop",
      "what": "同じブロックを2回通るループ型MoEにおいて、1回目の訪問でシーケンスを圧縮し、2回目で全解像度を保持する非対称な設計を提案しています。浮いた計算資源をモデルの隠れ層サイズの拡大に再配分します。",
      "enables": "1.3B～7Bの構成において、通常のMoEと比較して19.0%、既存のループ型と比較して7.9%の計算コスト削減を達成しつつ、検証ロスを低減しました。",
      "why_it_matters": "パラメータ共有を行いつつ、各ループの役割に応じた最適な計算配分を行うことで、限られたリソース下でのモデル性能を底上げする手法です。",
      "tags": [
        "MoE",
        "アーキテクチャ",
        "効率化"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.20399",
      "title": "Cortex: Consolidating Context into Parametric Memory",
      "url": "https://arxiv.org/abs/2610.20399",
      "pdf": "https://arxiv.org/pdf/2610.20399",
      "authors": [
        "Jintian Zhang",
        "Feng He",
        "Xinnian Liang",
        "Ziwen Xu",
        "Haoming Xu",
        "Haojing Huang"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.CV",
        "cs.LG",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical report",
      "hf_upvotes": 62,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲62"
      ],
      "headline": "コンテキスト情報を低ランク更新でパラメータメモリへ統合するCortex",
      "what": "外部コンテキストから得られる知識を、将来のクエリを予測・生成して蒸留することで、FFNの低ランク更新や構造的更新としてモデル内部に取り込む手法です。生物学的な「記憶の固定化（Consolidation）」に着想を得ています。",
      "enables": "14Bモデルでの50回の連続的な知識編集において、元の性能を99.8%維持したまま、コンテキスト由来の性能向上を88.9%保持することに成功しました。",
      "why_it_matters": "コンテキストウィンドウを消費し続けることなく、知識を効率的にモデルの重みに永続化させ、かつ忘却を最小限に抑えることが可能です。",
      "tags": [
        "知識編集",
        "メモリ管理",
        "LLM"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19820",
      "title": "ActionOPD: Distilling Decisions, Not Tokens",
      "url": "https://arxiv.org/abs/2610.19820",
      "pdf": "https://arxiv.org/pdf/2610.19820",
      "authors": [
        "Huining Yuan",
        "Xiangmin Yi",
        "Zelai Xu",
        "Zixu Wang",
        "Xinlei Chen",
        "Xiao-Ping Zhang"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 53,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲53"
      ],
      "headline": "トークンではなく行動レベルの合致を最適化するエージェント蒸留手法ActionOPD",
      "what": "学生が生成した状態において教師モデルからアクションをサンプリングし、その意味的な一致度を報酬として学習するオンポリシー蒸留手法です。教師のトークン確率や思考プロセスへのアクセスを必要としません。",
      "enables": "Qwen3を用いたツール利用タスクにおいて、未知のデータセットに対して平均3.3〜6.9ポイントの精度向上を達成しました。",
      "why_it_matters": "教師と学生でトークナイザーやモデル構造が異なっても適用可能であり、エージェントの「意思決定」の本質を効率的に小規模モデルへ移植できます。",
      "tags": [
        "モデル蒸留",
        "エージェント",
        "ツール利用"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    },
    {
      "id": "2610.19366",
      "title": "Seeing, Maintaining, and Learning: The Evolution of Multimodal Agent Memory",
      "url": "https://arxiv.org/abs/2610.19366",
      "pdf": "https://arxiv.org/pdf/2610.19366",
      "authors": [
        "Minghao Guo",
        "Qingyue Jiao",
        "Xiujin Liu",
        "Jianhong Pang",
        "Ruimeng Yang",
        "Naihao Xu"
      ],
      "categories": [
        "cs.AI",
        "cs.CL",
        "cs.RO"
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
      "headline": "マルチモーダルエージェントのメモリ進化に関する包括的分析フレームワークの提示",
      "what": "情報の形成・表現（Axis I）とメモリ管理の適応レベル（Axis II）の2軸でメモリ機構を分類するフレームワークです。静的、動的、そして自己進化的なメモリ管理への進化を定義しています。",
      "enables": "既存の多様なメモリ設計パターンを整理し、抽象化と忠実度のバランス、時間的な有効性の維持、根拠に基づいたメモリ使用などの設計原則を導出しました。",
      "why_it_matters": "長期的なタスクや生涯学習を行う次世代エージェントにおいて、どのようにメモリを構築・進化させるべきかの設計指針となります。",
      "tags": [
        "マルチモーダルエージェント",
        "メモリ機構",
        "サーベイ"
      ],
      "fetched_at": "2026-10-16T09:08:52.557938+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.21601",
      "title": "Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation",
      "abstract": "Policy-shift distillation reuses the difference between a teacher's log probabilities before and after reinforcement learning (RL) as supervision on student-generated trajectories. However, this endpoint policy shift cannot reveal whether local action preferences evolved consistently during teacher training. The same endpoint shift can result from early and late shifts that reinforce or partially cancel each other. We investigate whether agreement between early and late teacher policy shifts can guide selective transfer. We introduce Waypoint-guided On-Policy Distillation (Waypoint-OPD), which uses an intermediate teacher checkpoint from the same RL run to compare early and late shifts in relative action preferences at student-visited prefixes. We gate the endpoint shift according to the directional agreement between the early and late shifts, suppressing it when they point in opposing directions. Compared with endpoint-only transfer, our method requires only one additional frozen-teacher scoring pass. Using RL-trained Qwen3-4B teachers, we evaluate our method with Qwen3-8B, Qwen3-14B, and Qwen3-30B-A3B as student models in mathematical and code reasoning. In all six domain--student settings, Waypoint-OPD achieves the highest domain-average score among the compared distillation methods. Ablations with the Qwen3-8B student show that removing or shuffling gates reduces mathematical reasoning performance. These results support the use of directional agreement between early and late teacher policy shifts to weight the endpoint shift during student training.",
      "upvotes": 665,
      "github_stars": 3,
      "github_repo": "https://github.com/hhhbxloveai/WaypointOPD",
      "project_page": "",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21601",
      "arxiv_url": "https://arxiv.org/abs/2610.21601",
      "title_ja": "Waypoint-OPD：ゲート付きオンポリシー蒸留によるRL誘導型方策シフトの転移",
      "summary_ja": "強化学習の中間チェックポイントを用い、方策シフトの整合性を評価することで、生徒モデルへの効果的な知識転移を実現する手法Waypoint-OPDを提案。"
    },
    {
      "id": "2610.18829",
      "title": "OmniCompass: A Holistic Benchmark for Omni-Modal Video Grounding and Understanding",
      "abstract": "With the rapid development of multimodal large language models (MLLMs), evaluating their video understanding capabilities has become increasingly important. Existing video understanding benchmarks cover only part of the evaluation dimensions, limiting systematic diagnosis of omni-modal video understanding. We introduce OmniCompass, a holistic benchmark for omni-modal video grounding and understanding. OmniCompass defines two evaluation tracks: OmniCompass-VL assesses vision-language models on tasks requiring visual evidence, while OmniCompass-AV assesses omni-modal models on tasks requiring joint audio-visual evidence. Each track includes three complementary tasks: temporal grounding (TG), spatial grounding (SG), and question answering (QA), assessing when a referenced target appears, where it is, and what happens. QA covers five perception and three reasoning categories in OmniCompass-VL, and three perception and two reasoning categories in OmniCompass-AV. OmniCompass-VL contains 820 videos and 2,460 instances across domains and three duration types: short, medium, and long. A narrative- and audio-rich subset forms OmniCompass-AV with 240 videos and 720 instances. Each instance is evaluated under two paired settings: text-only and text+image, specifying the same target through text and visual-language guidance. All instances are manually annotated with multi-round quality verification. Evaluations of 50 MLLMs show that open-source models still lag behind proprietary counterparts, particularly in audio-visual understanding. Precise temporal and spatial grounding remains challenging even for leading models, and their predictions still exhibit inconsistencies across the paired target specifications.",
      "upvotes": 577,
      "github_stars": 69,
      "github_repo": "https://github.com/PolyU-VCLab/OmniCompass",
      "project_page": "https://omnicompass.netlify.app/",
      "comments": 4,
      "org": "VCLab",
      "url": "https://huggingface.co/papers/2610.18829",
      "arxiv_url": "https://arxiv.org/abs/2610.18829",
      "title_ja": "OmniCompass：全様態のビデオグラウンディングと理解のための包括的ベンチマーク",
      "summary_ja": "視覚と言語、あるいは音声と視覚の両方を必要とするタスクを定義し、マルチモーダルLLMの動画理解能力を多角的に診断できる新しいベンチマークを導入。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 410,
      "github_stars": 87,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva：第一原理に基づくシステム1モデル",
      "summary_ja": "決定問題の構造を尊重し、並べ替え不変性やキャッシュ可能性などの4つの要件を満たす、低遅延で直接的な意思決定を可能にする新しいアーキテクチャJevaを提案。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 359,
      "github_stars": 161,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 3,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev：動画理解とインタラクションのためのシステム1モデル",
      "summary_ja": "動画の時間的範囲特定と多肢選択式回答を統合した共有ヘッドを採用し、エージェントが直接利用できる効率的な意思決定を実現するVideoJevモデル群を導入。"
    },
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "abstract": "Spatial intelligence lets an agent perceive and act in the physical world, and many of its judgments must be made at interaction rates: which spatial relation holds, how far an object is, or where to place it. Vision-language models (VLMs) produce these answers by free-form text generation, paying for autoregressive decoding and answer parsing even though the output space is compact: one of a few options, a scalar, or a 2D point. In light of this, we introduce MJev-Spatial, a System 1 multimodal decision model that tackles all three types of spatial understanding tasks within a unified classification framework. Specifically, MJev-Spatial treats each candidate as a class and scores it using the backbone's pretrained query and key projections, without adding parameters. The candidates are the given options for choice tasks, or value bins and image regions refined through coarse-to-fine classification for numerical and point prediction, respectively. At inference, each classification decision takes a single forward pass and generates no answer tokens. To train on heterogeneous spatial data efficiently, we supervise all coarse-to-fine stages jointly with teacher forcing in one forward pass, and combine this with length-aware global batching and cross-GPU load balancing, raising training throughput by 30.8% over the original batching strategy. Built on Qwen3.5-4B and trained on 12.3M question-answer pairs converted from existing spatial datasets, MJev-Spatial achieves the highest overall score (65.64%) among eight tested models, ranks first on seven of twelve benchmarks, and outperforms its unmodified autoregressive base model on all twelve, while running 2.5 times faster than the fastest autoregressive baseline and 5.6 times faster than the base model.",
      "upvotes": 351,
      "github_stars": 8,
      "github_repo": "https://github.com/Fr0zenCrane/MJev-Spatial",
      "project_page": "https://fr0zencrane.github.io/mjev-spatial-project/",
      "comments": 2,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.22276",
      "arxiv_url": "https://arxiv.org/abs/2610.22276",
      "title_ja": "MJev-Spatial：ネイティブなアテンションマッチングによるシステム1空間知能",
      "summary_ja": "空間関係の判断やスカラー、座標出力を統一的な分類枠組みで扱うことで、テキスト生成を介さずに高速かつ正確な空間理解を可能にするマルチモーダルモデルを提案。"
    },
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "abstract": "Long-form agentic video generation must turn a screenplay into shots that remain spatially and temporally consistent across nonconsecutive requests. Passing prompts or recent frames between shots does not provide a shared spatial frame for revisiting a scene or a time-indexed record for replaying an earlier event. We present Any Time, Any Space (ATAS), which compiles a screenplay into shot requests with explicit location, camera, and event-time references. Before generation, it retrieves relevant evidence from a scene memory of registered static geometry and an event memory of dynamic observations indexed by scene, event, and time. After generation, ATAS reconstructs and registers the clip. It updates memory only when review and state checks accept the observation, while film delivery remains independent of memory admission. Across four video generators, ATAS improves all reported cross-shot consistency measures and achieves the highest aggregate benchmark score for each backbone. It also outperforms the compared agents and 3D-guided methods on target-image spatial revisit, leads three event-recapture criteria, and receives the highest human ratings on all six criteria. The video results and code are available on our project page: https://lhmd.top/atas/.",
      "upvotes": 343,
      "github_stars": 244,
      "github_repo": "https://github.com/ziplab/ATAS",
      "project_page": "https://lhmd.top/atas/",
      "comments": 3,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.20571",
      "arxiv_url": "https://arxiv.org/abs/2610.20571",
      "title_ja": "Any Time, Any Space：エージェント型動画生成のための世界状態中心フレームワーク",
      "summary_ja": "脚本から場所や時間を参照し、シーン・イベントメモリを活用することで、非連続な生成リクエスト間でも空間的・時間的一貫性を維持する動画生成フレームワークを提案。"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "abstract": "Computer-use agents have demonstrated strong capabilities in interpreting screens and executing keyboard and mouse actions. However, games, with their visually rich worlds and diverse mechanics, remain challenging and offer a demanding next step toward general digital control. Current game-agent learning pipelines often rely on large-scale demonstrations with limited coverage of dynamic game states, while scalable environments for interactive training remain difficult to obtain. We introduce Player-1, a post-training framework for learning game control beyond demonstrations through synthetic experience. We extend the computer-use action space with relative pointer motion, sustained inputs, and composite actions. For supervised initialization, we fine-tune computer-use models on 6,044 curated gameplay trajectories that pair recorded actions with task instructions and visual reasoning. We construct Player-1-Gym, sixteen synthetic 2D and 3D environments designed around control demands shared across games. Programmatically verifiable rewards and randomized observations and control dynamics support multi-environment reinforcement learning with PPO. The resulting Player-1-9B and Player-1-35B-A3B improve MineDojo-300 success over their SFT policies by 27.8 and 17.7 percentage points, respectively. Player-1-9B reaches 38.33% success compared with 12.63% for the strongest evaluated baseline, with further gains over SFT on ViZDoom-10 and GameWorld. Further analyses show that broader synthetic environment coverage improves transfer, while the use of composite actions that combine multiple keyboard and mouse inputs increases during RL. We demonstrate that learning from synthetic experience substantially improves game control beyond supervised initialization, with gains that generalize beyond the RL training suite.",
      "upvotes": 334,
      "github_stars": 109,
      "github_repo": "https://github.com/TencentARC/Player-1",
      "project_page": "https://player-1-project.github.io/",
      "comments": 3,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.20584",
      "arxiv_url": "https://arxiv.org/abs/2610.20584",
      "title_ja": "Player-1：合成経験からのプレイ学習",
      "summary_ja": "デモ動画が不足するゲームにおいて、相対ポインタ移動などの拡張アクション空間と合成経験を用いた学習により、多様なゲーム状態に対応する制御能力を獲得する手法。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 320,
      "github_stars": 107,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI：視覚プリミティブを用いた物理的知能に向けたグラウンディング基盤モデル",
      "summary_ja": "座標を共通語彙のトークンとして扱い、強化学習等を組み合わせて訓練することで、複雑な環境下でも精密かつ高速に物体を特定できる4Bパラメータの基盤モデルを開発。"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 318,
      "github_stars": 141,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART：拡散モデルの効率的、安定かつ拡張可能な強化学習",
      "summary_ja": "報酬の集計と傾斜（Tilting）を行うDiffusionARTにより、拡散モデルのオンライン強化学習における不安定性を解消し、効率的で安定した最適化を実現。"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "abstract": "Computer use has reached a turning point: the focus is expanding from GUI-only interaction to systems that complete tasks on users' computers through visual and programmatic interfaces. We define a generalist computer-use agent (GCUA) as a system in which the model chooses how to observe, act, and organize its work across visual and programmatic interfaces. Yet frontier implementations, such as GPT-6 Astra's computer-use system, remain largely closed, limiting systematic study of their design. We introduce Open Generalist CUA (OpenGCUA), an ongoing project to develop and open the full stack for GCUAs with the community. This report presents the first release of OpenGCUA. Code execution is a key feature of our agent design: it lets intermediate results determine subsequent operations and enables models to apply their existing programming capabilities directly to computer interaction. We also propose harness-to-model decision transfer, moving selected observations and task-state decisions from fixed harness rules to the model. On OSWorld-v2, our full configuration improves task scores across all eight evaluated models, including GPT-6 Astra and Claude Opus 5, raising mean partial score by +19.6 points and reducing reported steps per task by an average of 53.0% relative to batched GUI-only execution. We release our implementation and prompts, evaluation trajectories from all eight models, and preliminary versions of a real-device harness and a cross-device SDK. The harness addresses real-device challenges not fully captured by benchmarks, while the SDK provides a common programming interface across computers, mobiles and browsers. Across four real macOS tasks under our real-device harness, selected Qwen3.8-Max runs use 19.4 times as many reported reasoning tokens as GPT-6 Astra, highlighting substantial differences between models in real-device execution efficiency.",
      "upvotes": 315,
      "github_stars": 75,
      "github_repo": "https://github.com/Tongyi-MAI/OpenGCUA",
      "project_page": "https://tongyi-mai.github.io/OpenGCUA/",
      "comments": 3,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.22200",
      "arxiv_url": "https://arxiv.org/abs/2610.22200",
      "title_ja": "OpenGCUA：汎用的コンピュータ使用のための完全オープンスタックに向けて",
      "summary_ja": "視覚とプログラムの両インターフェースを操作してタスクを完遂する汎用エージェントの設計を研究するため、完全オープンの開発スタックを公開。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 297,
      "github_stars": 174,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space：マルチモーダル言語モデルにおける空間的な作業領域の探索",
      "summary_ja": "MLLM内部に存在する、物体の3次元座標を線形に表現する「S-Space」を発見。これが知覚と推論を繋ぐ内部的な空間作業領域として機能することを解明。"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "abstract": "Existing agent benchmarks typically evaluate agents on well-specified tasks defined by issue reports, specifications, or task tickets. Real-world customer delivery is different: forward-deployed engineers (FDEs) must clarify ambiguous requirements, work in live systems, and uncover unstated constraints. We introduce FDE-Gym, a benchmark of 95 end-to-end delivery tasks from 20 customer scenarios across 18 sectors, each adapted by industry experts from real-world delivery projects. In simulated customer environments with scripted stakeholders and modifiable customer systems, agents interact with stakeholders and operate on production-like systems to deliver working solutions. FDE-Gym scores a delivery by how much it improves the customer's own success metric, normalized between 0 (unchanged system) and 1 (reference solution), with penalties for stakeholder interactions (messages, trial runs, and waiting time). An online platform lets humans practice FDE skills under the same grading criteria. We evaluate 13 model configurations from seven providers. In the realistic setting, where unstated constraints must be discovered, the best configuration achieves a mean FDE-Gym score of 0.56 and resolves only 14 of the 95 tasks (a score of at least 0.8 with no incident). Discovering unstated constraints is the primary bottleneck: performance drops sharply when models must uncover them without explicit guidance. Yet information discovery alone does not account for the gap: even on the 23 tasks where the best configuration obtains every key fact from stakeholders, it reaches a normalized business uplift of 0.8 or above on only 10. These results reveal a substantial gap between solving well-specified tasks and delivering effective AI systems for real customers.",
      "upvotes": 282,
      "github_stars": 102,
      "github_repo": "https://github.com/deeplethe/fde-gym",
      "project_page": "https://fde-gym.com/paper",
      "comments": 2,
      "org": "DeepLethe",
      "url": "https://huggingface.co/papers/2610.22350",
      "arxiv_url": "https://arxiv.org/abs/2610.22350",
      "title_ja": "FDE-Gym：AIデリバリーのラストマイル",
      "summary_ja": "曖昧な要件定義やライブシステムでの運用など、実社会のエンジニアが直面する20の顧客シナリオを再現した、AIエージェント向けの高度な実務ベンチマークを提案。"
    },
    {
      "id": "2610.11765",
      "title": "Thinking Inertia: LLMs Keep Thinking When Told Not To",
      "abstract": "Large Language Models (LLMs) increasingly ship with explicit \"thinking modes\", yet their counterpart, \"no-thinking\", has received far less attention. We study LLMs' no-thinking behavior along two axes. a. How to measure no-thinking? Prior work typically defines no-thinking through proxies such as a disabled thinking mode or the absence of long traces. These proxies are unreliable: disabled thinking modes may still emit reasoning, while long traces may contain filler rather than genuine inference. We instead normalize each response into a pre-answer trace and final answer, and evaluate it at three levels: (i) Empty-Thinking Rate for strict answer-only compliance; (ii) instruction-aware Question-Pre-answer Relevance for similarity between the question and pre-answer trace; and (iii) LLM-as-judge Explicit Inference Rate for visible explicit inference. Together, these metrics distinguish answer-only output, relevant but non-inferential text, and explicit inference. b. How does no-thinking vary across tasks and models? We evaluate six prompting interventions on six LLMs across Boolean, multiple-choice, and open-ended questions. We find that explicit no-think controls cannot reliably eliminate visible inference. Models instead exhibit \"Thinking Inertia\": explicit inference persists even under strict controls and becomes more prevalent as the answer space opens. Accuracy remains stable on Boolean and multiple-choice tasks, whereas open-ended tasks reveal a trade-off between answer-only compliance and task accuracy. Rewriting the same questions across answer spaces shows that supplying candidate answers makes answer-only responses easier to produce. These findings establish no-thinking as a non-trivial capability: stopping explicit reasoning cannot be assumed from model settings or instructions alone and deserves systematic evaluation alongside reasoning ability.",
      "upvotes": 250,
      "github_stars": 7,
      "github_repo": "https://github.com/thinking-inertia/code",
      "project_page": "https://thinking-inertia.github.io/",
      "comments": 6,
      "org": "Stanford University",
      "url": "https://huggingface.co/papers/2610.11765",
      "arxiv_url": "https://arxiv.org/abs/2610.11765",
      "title_ja": "Thinking Inertia：思考を止めるよう指示されてもLLMは考え続ける",
      "summary_ja": "「思考なし」モードのLLMを調査し、指示に反して内部で推論を行う「思考慣性」現象を特定。思考の有無を測定するための信頼性の高い評価指標を導入。"
    },
    {
      "id": "2610.13521",
      "title": "Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation",
      "abstract": "Multi-teacher on-policy distillation (MOPD) extends on-policy distillation (OPD) by routing domain-specific data to specialized teachers, integrating their capabilities through dense token-level supervision on student-generated trajectories. However, domain routing only distinguishes the supervision sources for different domains; updates from all domains still act on shared parameters. When teachers differ substantially in response style and domain expertise, supervision that is effective in isolation may still lead to persistent gradient conflicts and capability degradation during joint optimization. To address this challenge, we propose Cross-Teacher Guarding for MOPD (Road MOPD), which introduces non-routed teachers as auxiliary cross-domain critics on the same student trajectories and coordinates multi-teacher supervision through token-level credit assignment and gradient updates. Specifically, cross-teacher-guided credit assignment uses teacher agreement to strengthen token-level corrections jointly supported by the teachers and attenuate conflicting signals; preventive multi-teacher gradient projection uses auxiliary gradients from the same trajectories to constrain potentially conflicting updates and adaptively controls projection strength to retain target-domain learning signals. In experiments, Road MOPD mitigates degradation in the disadvantaged domain, gains over 5 percentage points under high conflict, and improves overall performance in low-conflict and three-domain settings.",
      "upvotes": 242,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.13521",
      "arxiv_url": "https://arxiv.org/abs/2610.13521",
      "title_ja": "ドメインを超えた教師による監視：マルチ教師オンポリシー蒸留のためのRoad MOPD",
      "summary_ja": "複数の教師モデルから学習する際、教師間のスタイル差による勾配の衝突を防ぐため、クロス教師によるガードを導入して学生モデルの性能低下を抑制する。"
    },
    {
      "id": "2610.13361",
      "title": "AgentSWE: Can Coding Agents Build the Agent You Actually Want?",
      "abstract": "As the production of software passes into the hands of software itself, coding agents are increasingly commissioned to build agents fitted to their users' own workflows. This delegation carries a quiet assumption, that the delivered agent will faithfully serve the requirement it was built for, rather than merely appear to. No existing benchmark tests that assumption. We introduce AgentSWE, a benchmark for agent software engineering spanning three stages of the agent development lifecycle: Creation of a complete agent from a natural-language requirement, Editing of production agent codebases, and Optimization toward a measurable target. Each of its 25 tasks is framed as a commission rather than an exam: the builder iterates against a handful of illustrative cases, while acceptance exercises the frozen submission on held-out cases designed to span the full requirement, grading behavior against requirement-derived rubrics under hard pass/fail gates or, for Optimization, against the source benchmark's own objective. Evaluating a range of coding agents across models and harnesses, we find that none comes close to delivering what a requirement asks for: the gap between what a builder demonstrates and what it delivers is the norm, not the corner case. An accompanying empirical analysis of the failure trajectories identifies recurring failure modes, among them overfitting to the visible cases, hollow runtimes behind code that looks complete, and unsupported claims of completion, each a signal by which coding agents can learn to build the agents they are asked for.",
      "upvotes": 234,
      "github_stars": 40,
      "github_repo": "https://github.com/VectorSpaceLab/AgentSWE",
      "project_page": "https://vectorspacelab.github.io/AgentSWE/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.13361",
      "arxiv_url": "https://arxiv.org/abs/2610.13361",
      "title_ja": "AgentSWE：コーディングエージェントは望み通りのエージェントを構築できるか？",
      "summary_ja": "エージェント開発のライフサイクルに基づき、自然言語から完全なエージェントを構築・編集・最適化する能力を評価する、エージェントのためのソフトウェア工学ベンチマーク。"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "abstract": "Large language models have evolved from single-turn chatbots into interactive agents capable of long-horizon reasoning. In real deployments, MCP tool services can return noisy feedback and users may intervene to correct the agent, but existing methods provide limited supervision for reflection learning and failure recovery. To bridge this gap, we propose Agent-Reflex, a general training framework for incentivizing proactive reflection in agents. Specifically, Agent-Reflex comprises three stages. First, Environment Reflection Skill Discovery (RSD) injects grounded tool-feedback perturbations into environment scaling, samples a capability-diverse LLM pool, mines matched success-failure pairs, and summarizes reusable reflection meta-skills. Building on this skill library, we then apply Reflective Supervised Fine-Tuning (ReSFT) that converts each skill into supervision for self-reflection, skill recovery, and user-centric correction, strengthening complementary reflective behaviors. Finally, we propose On-Policy Reflective Policy Optimization (ORPO) to combine agentic reinforcement learning under noisy interactions with reflection-guided on-policy distillation to further elicit proactive reflection. Built on Qwen3-8B, Agent-Reflex reaches 58.6 overall on five long-horizon tool-use benchmarks and 29.1 on AgentNoiseBench, surpassing strong environment-scaling and reflection baselines. Experiments on six challenging agent benchmark suites demonstrate the effectiveness of Agent-Reflex. Further analyses show that Agent-Reflex improves agents' robustness to noise while maintaining stable training dynamics, supporting scalable agent training. Our code is available at https://github.com/RUC-NLPIR/Agent-Reflex.",
      "upvotes": 207,
      "github_stars": 229,
      "github_repo": "https://github.com/RUC-NLPIR/Agent-Reflex",
      "project_page": "",
      "comments": 3,
      "org": "NLPIR Lab @ RUC",
      "url": "https://huggingface.co/papers/2610.17953",
      "arxiv_url": "https://arxiv.org/abs/2610.17953",
      "title_ja": "Agent-Reflex：言語エージェントに反省的行動を教える",
      "summary_ja": "環境からのノイズや失敗を契機とした自己反省を促す訓練フレームワーク。失敗ペアからの学習や能動的な反省判断により、未知の環境での適応能力を向上させる。"
    },
    {
      "id": "2610.17665",
      "title": "RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment",
      "abstract": "Can vision-language models turn 2D observations into 3D understanding that supports precise action? This requires inferring object geometry, anticipating the effects of rotation, and refining actions through visual feedback. We introduce RoTA-Bench to evaluate these abilities through interactive 3D-to-2D projection alignment. Given a target silhouette, a model observes a rotated object and chooses successive rotations to recover the target projection within a limited action budget. Our automated pipeline constructs silhouette-preserving 3D objects from 2D icons and uses reversible initialization to guarantee solvability, yielding 674 tasks and a stratified 100-task test set. Empirically, we find that (i) a substantial human-model gap persists: GPT-5.6-Sol succeeds on only 17% of tasks, whereas 20 undergraduate participants collectively complete the test set four times with a 100% success rate; (ii) image-space and pose-space progress can diverge: at matched states, the model more often improves silhouette overlap while worsening pose alignment than humans (19.4% vs. 10.9%); and (iii) fine-grained control is sensitive to interaction history: removing it leaves 96.8% of the model's actions at a coarse 30-degree step size and sharply reduces observed task success. These findings highlight the challenge of converting visual evidence into precise 3D control, beyond recognizing or matching individual images.",
      "upvotes": 201,
      "github_stars": 4,
      "github_repo": "https://github.com/MAC-AutoML/RoTA-Bench",
      "project_page": "https://www.modelscope.cn/studios/san2333333/rotabench-anon?mode=full&app_path=%2Fportal",
      "comments": 2,
      "org": "MAC-AutoML",
      "url": "https://huggingface.co/papers/2610.17665",
      "arxiv_url": "https://arxiv.org/abs/2610.17665",
      "title_ja": "RoTA-Bench：対話型投影アライメントによる3D空間推論の評価",
      "summary_ja": "2Dのシルエット画像から3D形状を推論し、適切な回転操作を繰り返して目標の状態に合わせる能力を評価する、新しい対話型空間推論ベンチマーク。"
    },
    {
      "id": "2610.18813",
      "title": "Self-Evolving Agent Harness",
      "abstract": "Harness self-evolution revises an agent's software scaffolding, including prompts, memory, workflows, and executable components, while keeping model weights fixed. We formalize a feedback-driven process in which accepted revisions persist across runs. The framework separates update targets from proposal and admission mechanisms. It distinguishes changes to interpreted state from revisions to tools and code, repository-level control logic, and plugin composition. We characterize search through evolutionary optimization and examine its reliability through continual PAC-learning. Under explicit assumptions, the analysis yields an expected generalization bound, a retention bound conditional on historical regression budgets, and a high-probability admission rule using fresh, independent validation data. We examine how persistent harness revisions affect knowledge sharing and organizational workflows, with implications for scientific reliability, physical safety, and institutional accountability. Cases from prior work illustrate model--harness co-design, distributed execution, and plugin reuse. Reliable deployment requires continual validation as task distributions and evaluators change, with independent safeguards for learning, runtime privileges, and consequential actions. We provide a comprehensive 66-page discussion of related work, theory, algorithms, evaluation, applications, and the broader impact of Harness RSI, together with continuously updated code and supplementary materials, at https://github.com/zgcagi/Harness-RSI.",
      "upvotes": 196,
      "github_stars": 165,
      "github_repo": "https://github.com/zgcagi/Harness-RSI",
      "project_page": "https://zgcagi.github.io/Harness-RSI/",
      "comments": 6,
      "org": "ZGCAGI",
      "url": "https://huggingface.co/papers/2610.18813",
      "arxiv_url": "https://arxiv.org/abs/2610.18813",
      "title_ja": "自己進化するエージェントハーネス",
      "summary_ja": "モデルの重みを変えず、プロンプトやワークフローなどの周辺ソフトウェア構造をフィードバックに基づいて自動修正・進化させるフレームワークを提案。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 162,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期的な端末インテリジェンスのためのエージェント型データのスケーリング",
      "summary_ja": "試行錯誤やフィードバックに基づく戦略修正を含む高品質な長時間軌跡データを生成し、自律的な問題解決プロセスを学習させることで端末操作エージェントの性能を向上。"
    },
    {
      "id": "2610.20939",
      "title": "MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments",
      "abstract": "Online reinforcement learning (RL) with verifiable rewards has driven rapid progress in mathematics, coding, and tool use, but scaling this success to GUI agents remains challenging due to the high cost of interactive environments and the scarcity of realistic training tasks. We introduce MAI-Gym, an open all-in-one platform that unifies GUI agent evaluation, data collection, and online RL training across mobile, computer, and web environments. Through a shared rollout pipeline, MAI-Gym ensures consistent agent behavior across evaluation and training, supports ten established benchmarks, and scales to 20,000 parallel environment instances. Beyond scalable infrastructure, MAI-Gym enables automated synthesis of diverse GUI applications and challenging tasks, including resettable mocked apps and coherent cross-app worlds with execution-validated task verifiers. Using MAI-Gym, we train MAI-Gym-9B, a unified 9B agent for mobile and computer use, achieving state-of-the-art performance among open GUI agents under 10B parameters: 78.4% on MobileWorld and 76.2% on OSWorld-Verified. Importantly, RL in a mocked train-ticketing app transfers to its real-world counterpart, improving task success on a phys- ical phone from 28.8% to 48.1%. We release the framework, synthesis skills, mocked apps, 2,000 verified tasks, and the model checkpoint to support repro- ducible research and further advances in scalable GUI agent training.",
      "upvotes": 153,
      "github_stars": 24,
      "github_repo": "https://github.com/Tongyi-MAI/MAI-Gym",
      "project_page": "https://tongyi-mai.github.io/MAI-Gym/",
      "comments": 1,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.20939",
      "arxiv_url": "https://arxiv.org/abs/2610.20939",
      "title_ja": "MAI-Gym：モバイル・PC環境を横断するGUIエージェント評価とRL訓練のためのプラットフォーム",
      "summary_ja": "モバイル、PC、ウェブの環境を統合し、大規模な並列実行と自動タスク生成により、GUI操作エージェントの効率的な強化学習と評価を可能にする基盤を提供。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 153,
      "github_stars": 33,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex：視覚的に接地された反応的人型ロボット制御",
      "summary_ja": "投げられた箱をキャッチするなどのタスクを通じ、一人称視点から物体の動態を瞬時に把握し、全身の動きをリアルタイムで制御する反応的な人型ロボット制御を研究。"
    },
    {
      "id": "2610.14993",
      "title": "Learning Where to Split: Dynamic Band Splitting for Audio Source Separation",
      "abstract": "Audio source separation models must preserve fine spectral structure while keeping the cost of the separator tractable. Band-split architectures reduce this cost by manually partitioning the spectrum into predefined frequency bands and encoding each band as a token, but the same boundaries are used for every mixture. Because informative spectral structure varies with source content, fixed boundaries can merge discriminative components or spend tokens where little resolution is needed. We introduce Dynamic Band Splitting (DBS), an end-to-end framework that adapts boundary locations and band widths to each mixture under a fixed band-token budget. DBS predicts content-conditioned boundary scores within frequency blocks, selects a prescribed number of boundaries using hard Top-K, and applies content-dependent pooling to obtain compact band tokens. After separation, it smooths and expands these tokens to the original STFT grid, refines them along frequency, and decodes complex masks with a frequency-shared head. DBS improved separation over the corresponding static models on DnR v2, MUSDB18-HQ, and EchoSet, with DBS-BSRNN achieving relative gain of 29.0% in average SI-SDR on DnR v2. These results and boundary analyses on DnR v2 show that content-adaptive frequency partitioning benefits multiple separator backbones under a fixed band-token budget. Code and audio demos are available at https://cslikai.cn/Dynamic-Band-Splitting",
      "upvotes": 134,
      "github_stars": 21,
      "github_repo": "https://github.com/JusperLee/Dynamic-Band-Splitting",
      "project_page": "https://cslikai.cn/Dynamic-Band-Splitting/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.14993",
      "arxiv_url": "https://arxiv.org/abs/2610.14993",
      "title_ja": "分割箇所の学習：音源分離のためのダイナミック・バンド・スプリッティング",
      "summary_ja": "音源の内容に応じて周波数帯域の分割境界を適応的に変化させることで、限られた計算コストで重要な情報を保持し、分離精度を向上させるDBSフレームワークを提案。"
    },
    {
      "id": "2610.18860",
      "title": "AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards",
      "abstract": "Generating information-rich visual artifacts such as slides, posters, and dashboards as code is appealing because the outputs are structured, editable, and verifiable. Yet code models cannot see how their choices of layout and color come together on the canvas, often limiting spatial planning and aesthetic quality. Image generators excel at visual design but can misrender requested content, making their outputs unreliable targets for direct reproduction. We therefore introduce AesCode, which generates code grounded in the content prompt while using an image generated from the same prompt as an aesthetic guidance. To do so, AesCode represents the target as a design graph that describes the whole canvas and makes each property attributable. From this graph, we derive complementary cross-modal rewards: deterministic verifiers score properties parsable from code and rendering, while a VLM judge assesses the non-parsable ones with a sample-specific Visual Graph Rubric (VGR) tied to graph elements and relations. We optimize these decoupled rewards through reinforcement learning with per-channel normalization to jointly improve spatial planning, aesthetic quality, and verifiable correctness. To evaluate this setting, we build a benchmark that scores verifiable correctness and visual quality separately, with visual scores highly consistent with human judgments. We find that reference images substantially improve the visual quality of code generated by existing models, and ablations show that AesCode benefits from references both as model input and as a source of visual rewards. Relative to same-scale Qwen3-VL baselines given the same references, AesCode-8B and AesCode-32B improve visual quality by 31.1 and 22.4 percentage points, reaching scores comparable to those of closed-source frontier models such as GPT-5.5 and Claude Opus 4.8.",
      "upvotes": 129,
      "github_stars": 90,
      "github_repo": "https://github.com/microsoft/AesCode",
      "project_page": "https://microsoft.github.io/AesCode/",
      "comments": 2,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.18860",
      "arxiv_url": "https://arxiv.org/abs/2610.18860",
      "title_ja": "AesCode：切り離されたクロスモーダル報酬による審美的なコード生成",
      "summary_ja": "コードの構造的正確さと、画像生成モデルによる審美的なデザイン指針を組み合わせ、視覚的に優れたスライドやポスターのコードを生成する手法AesCodeを提案。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 128,
      "github_stars": 99,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex：都市規模の3Dシーンのためのエージェント型空間グラウンディング",
      "summary_ja": "都市規模の3D空間における物体特定を、エージェントによる能動的な視点移動とズーム操作による探索問題として定式化し、強化学習で最適化する手法Urbexを提案。"
    },
    {
      "id": "2610.20341",
      "title": "InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views",
      "abstract": "Feed-forward Gaussian reconstruction builds 3D scenes directly from input images for novel view rendering, but learning Gaussian attributes from predicted geometry for high-quality rendering under large viewpoint changes remains challenging. We analyze limitations in Gaussian attribute learning and introduce InfiniSplat v2, which improves rendering quality through architectural and training changes. Our method decouples geometry and attribute prediction with a frozen geometry branch, aligns predicted Gaussians using ground-truth camera poses during training, and adopts large-angle target view supervision. Across six datasets, the feed-forward outputs of the same trained model achieve state-of-the-art mean LPIPS and DISTS among the evaluated methods in both pose-conditioned and pose-free settings. In the pose-conditioned setting, mean LPIPS and DISTS decrease by 25.8% and 32.9%, respectively, compared with the strongest evaluated baselines. We further find that opacity learned with only image reconstruction supervision suppresses geometrically inconsistent points. Project page: https://zju3dv.github.io/InfiniSplat2/",
      "upvotes": 118,
      "github_stars": 405,
      "github_repo": "https://github.com/zju3dv/InfiniSplat",
      "project_page": "https://zju3dv.github.io/InfiniSplat2/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.20341",
      "arxiv_url": "https://arxiv.org/abs/2610.20341",
      "title_ja": "InfiniSplat v2：任意の視点からのフィードフォワード3DGSの分析と改善",
      "summary_ja": "幾何学と属性の予測を切り離し、地上検証用ポーズを用いた整列を行うことで、広角の視点変更でも高品質なレンダリングを可能にする3Dガウス表現再構成手法を提案。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 113,
      "github_stars": 19,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym：多様な合成ソフトウェア環境によるコンピュータ使用エージェントの学習スケーリング",
      "summary_ja": "多様なUIと実行機能を備えたソフトウェア環境を自動合成し、ランタイムで動作を検証することで、エージェントの訓練用データを大規模かつ効率的に収集する手法。"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "abstract": "Long-horizon agents have drawn growing attention for their ability to work autonomously -- from hours to days -- on economically valuable tasks, a capability essential to automated discovery and recursive self-improvement (RSI). Yet open-source models still struggle on long-horizon tasks, largely for lack of both training data and a working recipe, and scaling both is hard: long, complex tasks are difficult to curate and verify, and their rewards are sparse. We address both. First, we introduce Tev-Gym, the first long-horizon agent training dataset with verifiable, dense, progressive rewards -- 1,170 verified task environments across 7 domains. It is built on a latent-world-first approach that first constructs a latent world: a complete and correct hidden specification of the task domain, workflow, and expected state after each step. Each task is then progressively rendered from this specification into an agent-facing environment, enabling controllable complexity and a natural progress metric. Second, we turn this metric into a training recipe: via progress-potential reward shaping (PPRS), we convert progress into a dense per-step reward that improves training efficiency and makes otherwise-intractable tasks trainable. Training with this recipe yields Tev-27B, which achieves substantial gains on the Agents' Last Exam computing and math sciences domains (ALE-CM), matching GPT-6 Astra and Claude Opus 5 at Pass@5. Despite training only on ALE-related data, it generalizes to the Terminal-Bench (TB) 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash, and reaches Claude Opus 4.8-level performance on middle-horizon tasks such as TB 2.1.",
      "upvotes": 108,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tev-agent.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.18868",
      "arxiv_url": "https://arxiv.org/abs/2610.18868",
      "title_ja": "Tev：濃密な進捗報酬による長期スパンのエージェント環境のスケーリング",
      "summary_ja": "長時間にわたる複雑なタスクに対し、検証可能な段階的報酬を付与した1,170の環境データセットTev-Gymを構築し、長期スパンのエージェント学習を促進。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 108,
      "github_stars": 864,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2：オープンワールドに向けた再帰的なエージェントハーネスの構築",
      "summary_ja": "未知のタスクに対し、内部での自己検証とドメイン間の知識転移を組み合わせることで、エージェントの実行環境（ハーネス）を再帰的に自己改善させるフレームワーク。"
    },
    {
      "id": "2610.21261",
      "title": "Behavioral Compositionality of Sparse Autoencoder Representations",
      "abstract": "Sparse autoencoders (SAEs) represent model activations with sparse, linearly decoded features, but the downstream effects of those features need not compose additively. We introduce SAE Additivity Residuals (SAR), which measure the behavioral variation left unexplained above a chosen interaction order. Under independent feature subset sampling, population SAR is exactly the normalized energy of interactions above that order and bounds coalition ordering error for the optimal low order approximation. To distinguish compositionality associated with the SAE representation from that induced by downstream computation, we compare learned SAE coordinates with sum preserving random rotations of the same selected subspace and find lower first order residuals for the learned coordinates across all 18 model and behavior settings. The coordinates are nevertheless not fully additive: pairwise terms improve held out coalition ordering in every setting and outperform parameter matched models using randomly selected third order terms. In a combined steering experiment, pairwise modeling raises rank fidelity from 0.5874 to 0.7790 and reduces ordering error from 0.1444 to 0.0606. Together, these results show that SAE coordinates support comparatively compositional behavioral descriptions while faithful joint explanations and interventions still require interactions beyond individual feature effects. Code is available at https://github.com/OpenSAE/SAE-Behavioral-Compositionality.",
      "upvotes": 105,
      "github_stars": 5,
      "github_repo": "https://github.com/OpenSAE/SAE-Behavioral-Compositionality",
      "project_page": "https://opensae.github.io/SAE-Behavioral-Compositionality",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21261",
      "arxiv_url": "https://arxiv.org/abs/2610.21261",
      "title_ja": "稀疎オートエンコーダ表現の行動構成性",
      "summary_ja": "疎な特徴表現がモデルの出力行動に与える加法的な影響を測定する指標SARを提案し、下流の計算による構成性の変化を定量的に分析。"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "abstract": "Agents driven by large language models are increasingly deployed on long-horizon tasks, where they use tools and modify real workspaces. How well they perform depends as much on the harness around the model as on the model itself. Existing benchmarks measure downstream task success under a fixed harness, leaving harness engineering itself unexplored. We propose Doc2Harness, a two-stage benchmark that evaluates long-horizon harness engineering directly. In Stage 1, a build model operating inside a fixed builder harness receives an interface-only contract skeleton and a development document that consolidates behavior across twelve frontier harnesses, and then constructs a complete candidate harness in an isolated container. In Stage 2, the frozen candidate harness runs in containers separate from the construction environment, one per test case, and is driven end to end by a scripted mock model. We score each test case using four observable channels, namely the requests sent to the model, the files on disk, the process exit code, and the command output; positive controls rule out vacuous passes. Across nineteen frontier models, each evaluated with three independent builds on 328 test cases, GPT-6 Astra achieves the highest pass rate at 53.05%, while the weakest model reaches 27.44%, a gap of roughly twenty-six percentage points. Even the strongest model fails nearly half of the test cases, and failures cluster around how cross-cutting functionality is split across modules. To our knowledge, Doc2Harness provides the first deterministic benchmark for measuring long-horizon harness engineering.",
      "upvotes": 105,
      "github_stars": 110,
      "github_repo": "https://github.com/YuyaoGe/doc2harness",
      "project_page": "https://geyuyao.com/doc2harness/",
      "comments": 2,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2610.20344",
      "arxiv_url": "https://arxiv.org/abs/2610.20344",
      "title_ja": "Doc2Harness：コーディングエージェントの長期ハーネスエンジニアリングのベンチマーク",
      "summary_ja": "仕様書や既存の設計からエージェントの実行環境（ハーネス）を構築・修正する能力を、2つのステージで直接評価する新しいベンチマークDoc2Harnessを提案。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "CMU and Idiap Build Synth-DoPaCo, a 1,329-Hour Medical AI Benchmark",
      "summary": "A new open dataset of 8,800 synthetic doctor-patient conversations with 1,329 hours of audio tests whether audio language models can summarize long clinical visits.",
      "url": "https://alphasignal.ai/news/cmu-and-idiap-build-synth-dopaco-a-1-329-hour-medical-ai-benchmark",
      "published": "2026-10-18T08:26:57+09:00",
      "title_ja": "CMUとIdiap、医療AIベンチマーク「Synth-DoPaCo」を構築",
      "summary_ja": "8,800件の架空の医師・患者間の会話データを用いて、長時間にわたる臨床診察の要約能力をテストできる。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Apple's DFN5B-CLIP Hits 84% ImageNet Accuracy by Teaching AI to Pick Its Own Data",
      "summary": "Apple's DFN5B-CLIP-ViT-H-14-378 keeps climbing Hugging Face charts, hitting 84.2% zero-shot ImageNet accuracy by rethinking how training data is filtered.",
      "url": "https://alphasignal.ai/news/apple-s-dfn5b-clip-hits-84-imagenet-accuracy-by-teaching-ai-to-pick-its-own-data",
      "published": "2026-10-18T01:00:41+09:00",
      "title_ja": "AppleのDFN5B-CLIP、データ選択手法の改善でImageNet精度84%を達成",
      "summary_ja": "学習データのフィルタリング方法を再考することで、ImageNetのゼロショット精度を84.2%まで向上させた。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Datalab's Indra OCR Parses 49 Pages per Second on a CPU",
      "summary": "Datalab's new 1M-parameter Indra OCR reads 49 pages per second on CPU, outpacing Tesseract and PaddleOCR while keeping layout and reading order intact.",
      "url": "https://alphasignal.ai/news/datalab-s-indra-ocr-parses-49-pages-per-second-on-a-cpu",
      "published": "2026-10-17T21:18:40+09:00",
      "title_ja": "DatalabのIndra OCR、CPU上で毎秒49ページの解析を実現",
      "summary_ja": "100万パラメータの軽量モデルで、レイアウトを保持したまま既存ツールを凌駕する高速なOCR処理が可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "ScrapeCreators Ships 13 Open-Source Agent Skills for Social Media Research",
      "summary": "ScrapeCreators shipped a plugin bundle of 13 agent skills that lets coding assistants run full social media research workflows across TikTok, Instagram, YouTube, Reddit, X, LinkedIn and more.",
      "url": "https://alphasignal.ai/news/scrapecreators-ships-13-open-source-agent-skills-for-social-media-research",
      "published": "2026-10-17T21:04:08+09:00",
      "title_ja": "ScrapeCreators、SNSリサーチ用のオープンソースなエージェントスキル13種を公開",
      "summary_ja": "TikTok、X、LinkedInなど複数のSNSにまたがるリサーチ業務を自動化するプラグイン群を提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Shanghai Jiao Tong Builds AirQA to Stress-Test AI Research Agents on 14,000 Papers",
      "summary": "A new benchmark of 1,246 questions over 13,956 AI papers exposes how badly current LLM agents handle real literature-review workflows.",
      "url": "https://alphasignal.ai/news/shanghai-jiao-tong-builds-airqa-to-stress-test-ai-research-agents-on-14-000",
      "published": "2026-10-17T21:00:50+09:00",
      "title_ja": "上海交通大学、AI研究エージェントを1.4万本の論文でテストする「AirQA」を構築",
      "summary_ja": "既存のLLMエージェントが実際の文献調査ワークフローにおいて抱える課題を浮き彫りにするベンチマーク。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Comfy-Org Makes Black Forest Labs' FLUX.2 Klein Run in 1.2 Seconds Locally",
      "summary": "Comfy-Org repackaged the FLUX.2 klein 4B text encoder and VAE for drop-in ComfyUI use, pushing the sub-second open model past 800k downloads.",
      "url": "https://alphasignal.ai/news/comfy-org-makes-black-forest-labs-flux-2-klein-run-in-1-2-seconds-locally",
      "published": "2026-10-17T19:00:43+09:00",
      "title_ja": "Comfy-Org、FLUX.2 Kleinのローカル実行で1.2秒を達成",
      "summary_ja": "40億パラメータのテキストエンコーダ等をComfyUI向けに再パッケージ化し、高速な画像生成を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "How Itaú is building generative AI for its entire customer base",
      "summary": "With ia.i, a conversational interface, and the IARA governance platform, Itaú is applying its AI First strategy to customers and employees — in one of Brazil’s most regulated sectors.",
      "url": "https://openai.com/index/itau-generative-ai",
      "published": "2026-10-17T04:00:00+09:00",
      "title_ja": "ブラジルのItaú銀行、全顧客ベースに向けた生成AI構築の取り組み",
      "summary_ja": "対話型インターフェース「ia.i」などを通じ、規制の厳しい金融分野でAI First戦略を推進している。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地させる：自律型ウェットラボの構成要素",
      "summary_ja": "科学分野において、AIエージェントを実際の生物学的な実験環境に統合するための基礎要素を解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining",
      "published": "2026-10-16T10:44:47+09:00",
      "title_ja": "インド諸言語の事前学習のスケーリング：2.8兆トークンとデータ生成パイプライン",
      "summary_ja": "大規模なデータセットとオープンなデータ生成手法を用いて、インド系言語のAI学習を拡張する。"
    },
    {
      "lab": "OpenAI",
      "title": "Benefit Street Partners answers questions faster with Codex",
      "summary": "Anant Kumar builds tools to compare loan valuations and analyze credit agreements, using Codex for code review and faster follow-ups.",
      "url": "https://openai.com/index/benefit-street-partners",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Benefit Street Partners、Codexの活用で質問回答を迅速化",
      "summary_ja": "ローン評価の比較やクレジット契約の分析ツールにCodexを導入し、コードレビューや追跡調査を効率化。"
    },
    {
      "lab": "OpenAI",
      "title": "Stack Overflow for Agents triples signups with ChatGPT plugin",
      "summary": "Two engineers shipped Stack Overflow for Agents in a few weeks with Codex, and its ChatGPT plugin helped drive up to 10× growth in agent creation.",
      "url": "https://openai.com/index/stack-overflow-chatgpt-plugin",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Stack Overflow for Agents、ChatGPTプラグインによりサインアップ数が3倍に",
      "summary_ja": "Codexを用いて短期間で開発され、ChatGPT経由でエージェント作成数が最大10倍の成長を記録。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Beam: a 501B open model you can own, customize, and scale",
      "summary": "",
      "url": "https://huggingface.co/blog/reflection-beam",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Beamのご紹介：所有・カスタマイズ・拡張が可能な501Bオープンモデル",
      "summary_ja": "ユーザーが自ら所有し、ニーズに合わせて規模を調整したりカスタマイズしたりできる5,010億パラメータのモデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
      "published": "2026-10-16T05:34:01+09:00",
      "title_ja": "Granite Switch 4.1：チャット、意思決定、音声を一つのエンドポイントで",
      "summary_ja": "対話から意思決定、音声処理までを単一のインターフェースから利用可能にする新モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Bringing GPT-Rosalind to academic research labs",
      "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
      "url": "https://openai.com/index/introducing-the-rosalind-academic-plan",
      "published": "2026-10-16T04:00:00+09:00",
      "title_ja": "GPT-Rosalindを学術研究機関へ提供開始",
      "summary_ja": "適格な研究室にGPT-Rosalindへのアクセスを支援し、ライフサイエンス研究を加速させるアカデミックプラン。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用ツール「Google Antigravity」を活用し、新規の抗菌ペプチドを発見するプロセスを高速化する。"
    },
    {
      "lab": "OpenAI",
      "title": "Teaching students to think and learn through questions",
      "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
      "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
      "published": "2026-10-15T22:00:00+09:00",
      "title_ja": "質問を通じて生徒の思考と学習を促す教育手法",
      "summary_ja": "教育者向けAIの提供や「学習モード」を通じ、生徒の能動的なステップバイステップの学習を支援できる。"
    },
    {
      "lab": "OpenAI",
      "title": "Sullivan & Cromwell brings legal expertise into agreement review",
      "summary": "In collaboration with OpenAI, Sullivan & Cromwell developed Agreement Analyzer, an AI tool for identifying issues in a draft agreement.",
      "url": "https://openai.com/index/sullivan-cromwell",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Sullivan & Cromwell、契約書レビューに法的専門知識を導入",
      "summary_ja": "OpenAIとの提携により、契約書案の問題点を特定するAIツール「Agreement Analyzer」を開発。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上のMLXとRDMAによるローカルおよび分散LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、最新モデルの推論や微調整をローカルのプライベート環境で実験できる。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論（SSR）：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由記述ではなく選択式にすることで、推論コストを抑えつつ小型モデルの行動精度を向上させる手法。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャのスケーリング調査",
      "summary_ja": "LLMが抽象的なツールスタブを生成してから検索する「PtR」手法など、最適なAPI呼び出し手法を評価。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Muse Spark Open: open-weight frontier multimodal mixture-of-experts model from Meta",
      "summary": "",
      "url": "https://huggingface.co/blog/meta-muse-spark-open",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Muse Spark Open：Metaによるオープンなマルチモーダル混合専門家モデル",
      "summary_ja": "Metaが公開した、重みがオープンな最先端のマルチモーダルMixture-of-Experts（MoE）モデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome FLUX.3 Image Klein in Diffusers",
      "summary": "",
      "url": "https://huggingface.co/blog/flux-3",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "FLUX.3 Image KleinがDiffusersで利用可能に",
      "summary_ja": "Black Forest Labsの新モデルがDiffusersライブラリに統合され、容易に利用できるようになった。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Earth AIの活用：地球規模の課題解決に向けた地理空間エージェント",
      "summary_ja": "地理空間データを扱うAIエージェントを用いて、地球が抱える大きな課題に取り組むための手法。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewを用いた技術文書の分析",
      "summary_ja": "複雑な技術文書を詳細にレビュー・分析するための、科学研究向けAIツールの活用方法。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創意工夫を増幅させる10の方法",
      "summary_ja": "2026年に向けて、AIがいかにして人間の創造性や能力を拡張していくかについてのビジョン。"
    },
    {
      "lab": "Hugging Face",
      "title": "HiRO-ACEv2: Simulating extreme weather at 3 km resolution for a fraction of the cost",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/hiro-acev2",
      "published": "2026-10-15T01:12:42+09:00",
      "title_ja": "HiRO-ACEv2：低コストで3km解像度の極端気象シミュレーションを実現",
      "summary_ja": "従来よりも大幅に低いコストで、高解像度な異常気象のシミュレーションを可能にする技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用の微調整AIモデルを構築",
      "summary_ja": "軽量なGemmaモデルを用い、データをクラウドに送らずデバイス内でプライベートチャットの詐欺を検知する。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルの言語選択次元によるコードスイッチング検出",
      "summary_ja": "発話内での言語切り替えを、テキスト化せずに音声から直接検出する軽量な手法を提案。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モーダル・マスク拡散モデルの設計空間",
      "summary_ja": "テキスト、画像、音声を統合した初の3モーダル拡散モデルを構築し、最適な学習・推論条件を分析。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "最新モデル「Gemini 4 Argon」の開発における、安全性と社会的責任を担保するための取り組み。"
    }
  ]
};
