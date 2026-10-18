window.papersData = {
  "updated_at": "2026-10-19 08:59 JST",
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
    }
  ],
  "hf": [
    {
      "id": "2610.21601",
      "title": "Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation",
      "abstract": "Policy-shift distillation reuses the difference between a teacher's log probabilities before and after reinforcement learning (RL) as supervision on student-generated trajectories. However, this endpoint policy shift cannot reveal whether local action preferences evolved consistently during teacher training. The same endpoint shift can result from early and late shifts that reinforce or partially cancel each other. We investigate whether agreement between early and late teacher policy shifts can guide selective transfer. We introduce Waypoint-guided On-Policy Distillation (Waypoint-OPD), which uses an intermediate teacher checkpoint from the same RL run to compare early and late shifts in relative action preferences at student-visited prefixes. We gate the endpoint shift according to the directional agreement between the early and late shifts, suppressing it when they point in opposing directions. Compared with endpoint-only transfer, our method requires only one additional frozen-teacher scoring pass. Using RL-trained Qwen3-4B teachers, we evaluate our method with Qwen3-8B, Qwen3-14B, and Qwen3-30B-A3B as student models in mathematical and code reasoning. In all six domain--student settings, Waypoint-OPD achieves the highest domain-average score among the compared distillation methods. Ablations with the Qwen3-8B student show that removing or shuffling gates reduces mathematical reasoning performance. These results support the use of directional agreement between early and late teacher policy shifts to weight the endpoint shift during student training.",
      "upvotes": 668,
      "github_stars": 4,
      "github_repo": "https://github.com/hhhbxloveai/WaypointOPD",
      "project_page": "",
      "comments": 5,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21601",
      "arxiv_url": "https://arxiv.org/abs/2610.21601",
      "title_ja": "Waypoint-OPD: ゲート付きオンポリシー蒸留によるRL誘導型方策シフトの転移",
      "summary_ja": "教師モデルのRL過程における初期と後期の学習の整合性を考慮し、効果的な知識のみを選択的に生徒へ転移する手法「Waypoint-OPD」を提案。"
    },
    {
      "id": "2610.18829",
      "title": "OmniCompass: A Holistic Benchmark for Omni-Modal Video Grounding and Understanding",
      "abstract": "With the rapid development of multimodal large language models (MLLMs), evaluating their video understanding capabilities has become increasingly important. Existing video understanding benchmarks cover only part of the evaluation dimensions, limiting systematic diagnosis of omni-modal video understanding. We introduce OmniCompass, a holistic benchmark for omni-modal video grounding and understanding. OmniCompass defines two evaluation tracks: OmniCompass-VL assesses vision-language models on tasks requiring visual evidence, while OmniCompass-AV assesses omni-modal models on tasks requiring joint audio-visual evidence. Each track includes three complementary tasks: temporal grounding (TG), spatial grounding (SG), and question answering (QA), assessing when a referenced target appears, where it is, and what happens. QA covers five perception and three reasoning categories in OmniCompass-VL, and three perception and two reasoning categories in OmniCompass-AV. OmniCompass-VL contains 820 videos and 2,460 instances across domains and three duration types: short, medium, and long. A narrative- and audio-rich subset forms OmniCompass-AV with 240 videos and 720 instances. Each instance is evaluated under two paired settings: text-only and text+image, specifying the same target through text and visual-language guidance. All instances are manually annotated with multi-round quality verification. Evaluations of 50 MLLMs show that open-source models still lag behind proprietary counterparts, particularly in audio-visual understanding. Precise temporal and spatial grounding remains challenging even for leading models, and their predictions still exhibit inconsistencies across the paired target specifications.",
      "upvotes": 578,
      "github_stars": 83,
      "github_repo": "https://github.com/PolyU-VCLab/OmniCompass",
      "project_page": "https://omnicompass.netlify.app/",
      "comments": 4,
      "org": "VCLab",
      "url": "https://huggingface.co/papers/2610.18829",
      "arxiv_url": "https://arxiv.org/abs/2610.18829",
      "title_ja": "OmniCompass: 全方位ビデオグラウンディングと理解のための包括的ベンチマーク",
      "summary_ja": "視覚と言語、または視聴覚両方の証拠を必要とするタスクを網羅し、マルチモーダルLLMのビデオ理解能力を多角的に診断する新しいベンチマークを構築。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 418,
      "github_stars": 103,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva: 第一原理に基づくシステム1モデル",
      "summary_ja": "低遅延な意思決定のために、順列不変性やキャッシュ可能性などの構造的要件を満たした、意思決定に特化したアーキテクチャ「Jeva」を提案。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 367,
      "github_stars": 165,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 3,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev: ビデオ理解と相互作用のためのシステム1モデル",
      "summary_ja": "MLLMの自己回帰的デコードを共通のスコアリングヘッドに置き換え、時間領域の特定と選択肢回答を統一することで、高速かつ効率的なビデオ意思決定を実現。"
    },
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "abstract": "Spatial intelligence lets an agent perceive and act in the physical world, and many of its judgments must be made at interaction rates: which spatial relation holds, how far an object is, or where to place it. Vision-language models (VLMs) produce these answers by free-form text generation, paying for autoregressive decoding and answer parsing even though the output space is compact: one of a few options, a scalar, or a 2D point. In light of this, we introduce MJev-Spatial, a System 1 multimodal decision model that tackles all three types of spatial understanding tasks within a unified classification framework. Specifically, MJev-Spatial treats each candidate as a class and scores it using the backbone's pretrained query and key projections, without adding parameters. The candidates are the given options for choice tasks, or value bins and image regions refined through coarse-to-fine classification for numerical and point prediction, respectively. At inference, each classification decision takes a single forward pass and generates no answer tokens. To train on heterogeneous spatial data efficiently, we supervise all coarse-to-fine stages jointly with teacher forcing in one forward pass, and combine this with length-aware global batching and cross-GPU load balancing, raising training throughput by 30.8% over the original batching strategy. Built on Qwen3.5-4B and trained on 12.3M question-answer pairs converted from existing spatial datasets, MJev-Spatial achieves the highest overall score (65.64%) among eight tested models, ranks first on seven of twelve benchmarks, and outperforms its unmodified autoregressive base model on all twelve, while running 2.5 times faster than the fastest autoregressive baseline and 5.6 times faster than the base model.",
      "upvotes": 354,
      "github_stars": 13,
      "github_repo": "https://github.com/Fr0zenCrane/MJev-Spatial",
      "project_page": "https://fr0zencrane.github.io/mjev-spatial-project/",
      "comments": 2,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.22276",
      "arxiv_url": "https://arxiv.org/abs/2610.22276",
      "title_ja": "MJev-Spatial: ネイティブアテンションマッチングによるシステム1空間知能",
      "summary_ja": "空間関係、距離、座標の推定を統一的な分類フレームワークとして扱い、テキスト生成を介さずに高速かつ高精度な空間判断を行うモデルを開発。"
    },
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "abstract": "Long-form agentic video generation must turn a screenplay into shots that remain spatially and temporally consistent across nonconsecutive requests. Passing prompts or recent frames between shots does not provide a shared spatial frame for revisiting a scene or a time-indexed record for replaying an earlier event. We present Any Time, Any Space (ATAS), which compiles a screenplay into shot requests with explicit location, camera, and event-time references. Before generation, it retrieves relevant evidence from a scene memory of registered static geometry and an event memory of dynamic observations indexed by scene, event, and time. After generation, ATAS reconstructs and registers the clip. It updates memory only when review and state checks accept the observation, while film delivery remains independent of memory admission. Across four video generators, ATAS improves all reported cross-shot consistency measures and achieves the highest aggregate benchmark score for each backbone. It also outperforms the compared agents and 3D-guided methods on target-image spatial revisit, leads three event-recapture criteria, and receives the highest human ratings on all six criteria. The video results and code are available on our project page: https://lhmd.top/atas/.",
      "upvotes": 343,
      "github_stars": 267,
      "github_repo": "https://github.com/ziplab/ATAS",
      "project_page": "https://lhmd.top/atas/",
      "comments": 3,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.20571",
      "arxiv_url": "https://arxiv.org/abs/2610.20571",
      "title_ja": "Any Time, Any Space: エージェント型ビデオ生成のための世界状態中心フレームワーク",
      "summary_ja": "シーンメモリとイベントメモリを活用し、脚本から空間・時間的一貫性を保った長尺のビデオを生成するフレームワーク「ATAS」を提案。"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "abstract": "Computer-use agents have demonstrated strong capabilities in interpreting screens and executing keyboard and mouse actions. However, games, with their visually rich worlds and diverse mechanics, remain challenging and offer a demanding next step toward general digital control. Current game-agent learning pipelines often rely on large-scale demonstrations with limited coverage of dynamic game states, while scalable environments for interactive training remain difficult to obtain. We introduce Player-1, a post-training framework for learning game control beyond demonstrations through synthetic experience. We extend the computer-use action space with relative pointer motion, sustained inputs, and composite actions. For supervised initialization, we fine-tune computer-use models on 6,044 curated gameplay trajectories that pair recorded actions with task instructions and visual reasoning. We construct Player-1-Gym, sixteen synthetic 2D and 3D environments designed around control demands shared across games. Programmatically verifiable rewards and randomized observations and control dynamics support multi-environment reinforcement learning with PPO. The resulting Player-1-9B and Player-1-35B-A3B improve MineDojo-300 success over their SFT policies by 27.8 and 17.7 percentage points, respectively. Player-1-9B reaches 38.33% success compared with 12.63% for the strongest evaluated baseline, with further gains over SFT on ViZDoom-10 and GameWorld. Further analyses show that broader synthetic environment coverage improves transfer, while the use of composite actions that combine multiple keyboard and mouse inputs increases during RL. We demonstrate that learning from synthetic experience substantially improves game control beyond supervised initialization, with gains that generalize beyond the RL training suite.",
      "upvotes": 334,
      "github_stars": 149,
      "github_repo": "https://github.com/TencentARC/Player-1",
      "project_page": "https://player-1-project.github.io/",
      "comments": 3,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.20584",
      "arxiv_url": "https://arxiv.org/abs/2610.20584",
      "title_ja": "Player-1: 合成体験からのゲームプレイ学習",
      "summary_ja": "デモデータに頼らず、合成された体験を通じて相対的なポインタ移動や持続入力を含む高度なゲーム操作を学習するポストトレーニング手法を提案。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 320,
      "github_stars": 121,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 2,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI: 視覚プリミティブを用いた物理的知能のためのグラウンディング基盤モデル",
      "summary_ja": "座標を量子化した語彙として扱うことで、混雑した環境や微小な物体に対しても高速かつ正確に位置特定が可能な40億パラメータの基盤モデルを開発。"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "abstract": "Computer use has reached a turning point: the focus is expanding from GUI-only interaction to systems that complete tasks on users' computers through visual and programmatic interfaces. We define a generalist computer-use agent (GCUA) as a system in which the model chooses how to observe, act, and organize its work across visual and programmatic interfaces. Yet frontier implementations, such as GPT-6 Astra's computer-use system, remain largely closed, limiting systematic study of their design. We introduce Open Generalist CUA (OpenGCUA), an ongoing project to develop and open the full stack for GCUAs with the community. This report presents the first release of OpenGCUA. Code execution is a key feature of our agent design: it lets intermediate results determine subsequent operations and enables models to apply their existing programming capabilities directly to computer interaction. We also propose harness-to-model decision transfer, moving selected observations and task-state decisions from fixed harness rules to the model. On OSWorld-v2, our full configuration improves task scores across all eight evaluated models, including GPT-6 Astra and Claude Opus 5, raising mean partial score by +19.6 points and reducing reported steps per task by an average of 53.0% relative to batched GUI-only execution. We release our implementation and prompts, evaluation trajectories from all eight models, and preliminary versions of a real-device harness and a cross-device SDK. The harness addresses real-device challenges not fully captured by benchmarks, while the SDK provides a common programming interface across computers, mobiles and browsers. Across four real macOS tasks under our real-device harness, selected Qwen3.8-Max runs use 19.4 times as many reported reasoning tokens as GPT-6 Astra, highlighting substantial differences between models in real-device execution efficiency.",
      "upvotes": 316,
      "github_stars": 111,
      "github_repo": "https://github.com/Tongyi-MAI/OpenGCUA",
      "project_page": "https://tongyi-mai.github.io/OpenGCUA/",
      "comments": 4,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.22200",
      "arxiv_url": "https://arxiv.org/abs/2610.22200",
      "title_ja": "OpenGCUA: 汎用コンピュータ操作のための完全オープンスタックへ向けて",
      "summary_ja": "視覚とプログラムの両面でPCを操作するエージェント開発のため、コード実行やツール利用を含むフルスタックのオープンソースプロジェクトを公開。"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "abstract": "Existing agent benchmarks typically evaluate agents on well-specified tasks defined by issue reports, specifications, or task tickets. Real-world customer delivery is different: forward-deployed engineers (FDEs) must clarify ambiguous requirements, work in live systems, and uncover unstated constraints. We introduce FDE-Gym, a benchmark of 95 end-to-end delivery tasks from 20 customer scenarios across 18 sectors, each adapted by industry experts from real-world delivery projects. In simulated customer environments with scripted stakeholders and modifiable customer systems, agents interact with stakeholders and operate on production-like systems to deliver working solutions. FDE-Gym scores a delivery by how much it improves the customer's own success metric, normalized between 0 (unchanged system) and 1 (reference solution), with penalties for stakeholder interactions (messages, trial runs, and waiting time). An online platform lets humans practice FDE skills under the same grading criteria. We evaluate 13 model configurations from seven providers. In the realistic setting, where unstated constraints must be discovered, the best configuration achieves a mean FDE-Gym score of 0.56 and resolves only 14 of the 95 tasks (a score of at least 0.8 with no incident). Discovering unstated constraints is the primary bottleneck: performance drops sharply when models must uncover them without explicit guidance. Yet information discovery alone does not account for the gap: even on the 23 tasks where the best configuration obtains every key fact from stakeholders, it reaches a normalized business uplift of 0.8 or above on only 10. These results reveal a substantial gap between solving well-specified tasks and delivering effective AI systems for real customers.",
      "upvotes": 284,
      "github_stars": 107,
      "github_repo": "https://github.com/deeplethe/fde-gym",
      "project_page": "https://fde-gym.com/paper",
      "comments": 2,
      "org": "DeepLethe",
      "url": "https://huggingface.co/papers/2610.22350",
      "arxiv_url": "https://arxiv.org/abs/2610.22350",
      "title_ja": "FDE-Gym: AIデリバリーの「ラストマイル」",
      "summary_ja": "曖昧な要求の明確化や稼働中のシステムへの対応など、実社会のエンジニアが直面する20の顧客シナリオを再現した、エージェント向けの新ベンチマーク。"
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
      "title_ja": "Thinking Inertia: LLMは「考えるな」と言われても考え続ける",
      "summary_ja": "LLMの「思考なしモード」の実態を調査し、指示に反して内部で推論が行われる「思考の慣性」現象を定義・測定する新たな指標を提案。"
    },
    {
      "id": "2610.13521",
      "title": "Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation",
      "abstract": "Multi-teacher on-policy distillation (MOPD) extends on-policy distillation (OPD) by routing domain-specific data to specialized teachers, integrating their capabilities through dense token-level supervision on student-generated trajectories. However, domain routing only distinguishes the supervision sources for different domains; updates from all domains still act on shared parameters. When teachers differ substantially in response style and domain expertise, supervision that is effective in isolation may still lead to persistent gradient conflicts and capability degradation during joint optimization. To address this challenge, we propose Cross-Teacher Guarding for MOPD (Road MOPD), which introduces non-routed teachers as auxiliary cross-domain critics on the same student trajectories and coordinates multi-teacher supervision through token-level credit assignment and gradient updates. Specifically, cross-teacher-guided credit assignment uses teacher agreement to strengthen token-level corrections jointly supported by the teachers and attenuate conflicting signals; preventive multi-teacher gradient projection uses auxiliary gradients from the same trajectories to constrain potentially conflicting updates and adaptively controls projection strength to retain target-domain learning signals. In experiments, Road MOPD mitigates degradation in the disadvantaged domain, gains over 5 percentage points under high conflict, and improves overall performance in low-conflict and three-domain settings.",
      "upvotes": 243,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.13521",
      "arxiv_url": "https://arxiv.org/abs/2610.13521",
      "title_ja": "ドメイン分割監督を超えて：マルチ教師オンポリシー蒸留のための教師間ガード",
      "summary_ja": "複数の専門教師モデルからの知識を統合する際、教師間の応答スタイルの違いによる勾配の衝突と能力低下を防ぐ手法「Road MOPD」を提案。"
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
      "title_ja": "AgentSWE: コーディングエージェントは望み通りのエージェントを構築できるか？",
      "summary_ja": "自然言語の要求からエージェントを新規作成、編集、最適化する能力を評価し、要求に忠実な実装ができるかを検証するベンチマーク。"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "abstract": "Large language models have evolved from single-turn chatbots into interactive agents capable of long-horizon reasoning. In real deployments, MCP tool services can return noisy feedback and users may intervene to correct the agent, but existing methods provide limited supervision for reflection learning and failure recovery. To bridge this gap, we propose Agent-Reflex, a general training framework for incentivizing proactive reflection in agents. Specifically, Agent-Reflex comprises three stages. First, Environment Reflection Skill Discovery (RSD) injects grounded tool-feedback perturbations into environment scaling, samples a capability-diverse LLM pool, mines matched success-failure pairs, and summarizes reusable reflection meta-skills. Building on this skill library, we then apply Reflective Supervised Fine-Tuning (ReSFT) that converts each skill into supervision for self-reflection, skill recovery, and user-centric correction, strengthening complementary reflective behaviors. Finally, we propose On-Policy Reflective Policy Optimization (ORPO) to combine agentic reinforcement learning under noisy interactions with reflection-guided on-policy distillation to further elicit proactive reflection. Built on Qwen3-8B, Agent-Reflex reaches 58.6 overall on five long-horizon tool-use benchmarks and 29.1 on AgentNoiseBench, surpassing strong environment-scaling and reflection baselines. Experiments on six challenging agent benchmark suites demonstrate the effectiveness of Agent-Reflex. Further analyses show that Agent-Reflex improves agents' robustness to noise while maintaining stable training dynamics, supporting scalable agent training. Our code is available at https://github.com/RUC-NLPIR/Agent-Reflex.",
      "upvotes": 213,
      "github_stars": 230,
      "github_repo": "https://github.com/RUC-NLPIR/Agent-Reflex",
      "project_page": "",
      "comments": 3,
      "org": "NLPIR Lab @ RUC",
      "url": "https://huggingface.co/papers/2610.17953",
      "arxiv_url": "https://arxiv.org/abs/2610.17953",
      "title_ja": "Agent-Reflex: 言語エージェントに反射的な行動を教える",
      "summary_ja": "ツールのノイズやユーザーの介入に対し、自律的に状況を判断し失敗から回復するための反射的なスキルを学習させる訓練フレームワーク。"
    },
    {
      "id": "2610.17665",
      "title": "RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment",
      "abstract": "Can vision-language models turn 2D observations into 3D understanding that supports precise action? This requires inferring object geometry, anticipating the effects of rotation, and refining actions through visual feedback. We introduce RoTA-Bench to evaluate these abilities through interactive 3D-to-2D projection alignment. Given a target silhouette, a model observes a rotated object and chooses successive rotations to recover the target projection within a limited action budget. Our automated pipeline constructs silhouette-preserving 3D objects from 2D icons and uses reversible initialization to guarantee solvability, yielding 674 tasks and a stratified 100-task test set. Empirically, we find that (i) a substantial human-model gap persists: GPT-5.6-Sol succeeds on only 17% of tasks, whereas 20 undergraduate participants collectively complete the test set four times with a 100% success rate; (ii) image-space and pose-space progress can diverge: at matched states, the model more often improves silhouette overlap while worsening pose alignment than humans (19.4% vs. 10.9%); and (iii) fine-grained control is sensitive to interaction history: removing it leaves 96.8% of the model's actions at a coarse 30-degree step size and sharply reduces observed task success. These findings highlight the challenge of converting visual evidence into precise 3D control, beyond recognizing or matching individual images.",
      "upvotes": 202,
      "github_stars": 4,
      "github_repo": "https://github.com/MAC-AutoML/RoTA-Bench",
      "project_page": "https://www.modelscope.cn/studios/san2333333/rotabench-anon?mode=full&app_path=%2Fportal",
      "comments": 2,
      "org": "MAC-AutoML",
      "url": "https://huggingface.co/papers/2610.17665",
      "arxiv_url": "https://arxiv.org/abs/2610.17665",
      "title_ja": "RoTA-Bench: 対話的な投影アライメントによる3D空間推論の評価",
      "summary_ja": "2Dのシルエット画像に一致するように3Dオブジェクトを回転させるタスクを通じ、モデルの3D構造理解と精密な操作能力を評価する。"
    },
    {
      "id": "2610.18813",
      "title": "Self-Evolving Agent Harness",
      "abstract": "Harness self-evolution revises an agent's software scaffolding, including prompts, memory, workflows, and executable components, while keeping model weights fixed. We formalize a feedback-driven process in which accepted revisions persist across runs. The framework separates update targets from proposal and admission mechanisms. It distinguishes changes to interpreted state from revisions to tools and code, repository-level control logic, and plugin composition. We characterize search through evolutionary optimization and examine its reliability through continual PAC-learning. Under explicit assumptions, the analysis yields an expected generalization bound, a retention bound conditional on historical regression budgets, and a high-probability admission rule using fresh, independent validation data. We examine how persistent harness revisions affect knowledge sharing and organizational workflows, with implications for scientific reliability, physical safety, and institutional accountability. Cases from prior work illustrate model--harness co-design, distributed execution, and plugin reuse. Reliable deployment requires continual validation as task distributions and evaluators change, with independent safeguards for learning, runtime privileges, and consequential actions. We provide a comprehensive 66-page discussion of related work, theory, algorithms, evaluation, applications, and the broader impact of Harness RSI, together with continuously updated code and supplementary materials, at https://github.com/zgcagi/Harness-RSI.",
      "upvotes": 201,
      "github_stars": 195,
      "github_repo": "https://github.com/zgcagi/Harness-RSI",
      "project_page": "https://zgcagi.github.io/Harness-RSI/",
      "comments": 7,
      "org": "ZGCAGI",
      "url": "https://huggingface.co/papers/2610.18813",
      "arxiv_url": "https://arxiv.org/abs/2610.18813",
      "title_ja": "自己進化するエージェント・ハーネス",
      "summary_ja": "モデルの重みは固定したまま、プロンプトやメモリ、ワークフローなどのソフトウェア基盤をフィードバックに基づいて自動的に改良し続ける枠組みを定式化。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 163,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 2,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期間のターミナル・インテリジェンスのためのエージェント・データのスケーリング",
      "summary_ja": "試行錯誤や戦略調整を含む長期的な実行ログを収集することで、単なるコマンド実行を超えた持続的な自律作業能力をエージェントに学習させる。"
    },
    {
      "id": "2610.20939",
      "title": "MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments",
      "abstract": "Online reinforcement learning (RL) with verifiable rewards has driven rapid progress in mathematics, coding, and tool use, but scaling this success to GUI agents remains challenging due to the high cost of interactive environments and the scarcity of realistic training tasks. We introduce MAI-Gym, an open all-in-one platform that unifies GUI agent evaluation, data collection, and online RL training across mobile, computer, and web environments. Through a shared rollout pipeline, MAI-Gym ensures consistent agent behavior across evaluation and training, supports ten established benchmarks, and scales to 20,000 parallel environment instances. Beyond scalable infrastructure, MAI-Gym enables automated synthesis of diverse GUI applications and challenging tasks, including resettable mocked apps and coherent cross-app worlds with execution-validated task verifiers. Using MAI-Gym, we train MAI-Gym-9B, a unified 9B agent for mobile and computer use, achieving state-of-the-art performance among open GUI agents under 10B parameters: 78.4% on MobileWorld and 76.2% on OSWorld-Verified. Importantly, RL in a mocked train-ticketing app transfers to its real-world counterpart, improving task success on a phys- ical phone from 28.8% to 48.1%. We release the framework, synthesis skills, mocked apps, 2,000 verified tasks, and the model checkpoint to support repro- ducible research and further advances in scalable GUI agent training.",
      "upvotes": 154,
      "github_stars": 26,
      "github_repo": "https://github.com/Tongyi-MAI/MAI-Gym",
      "project_page": "https://tongyi-mai.github.io/MAI-Gym/",
      "comments": 2,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.20939",
      "arxiv_url": "https://arxiv.org/abs/2610.20939",
      "title_ja": "MAI-Gym: モバイル・PC環境にわたるGUIエージェント評価とRL訓練のための統合プラットフォーム",
      "summary_ja": "モバイル、PC、Webの各環境で最大2万の並列実行が可能な、GUI操作エージェントの評価、データ収集、オンライン強化学習のためのオープン基盤。"
    },
    {
      "id": "2610.18860",
      "title": "AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards",
      "abstract": "Generating information-rich visual artifacts such as slides, posters, and dashboards as code is appealing because the outputs are structured, editable, and verifiable. Yet code models cannot see how their choices of layout and color come together on the canvas, often limiting spatial planning and aesthetic quality. Image generators excel at visual design but can misrender requested content, making their outputs unreliable targets for direct reproduction. We therefore introduce AesCode, which generates code grounded in the content prompt while using an image generated from the same prompt as an aesthetic guidance. To do so, AesCode represents the target as a design graph that describes the whole canvas and makes each property attributable. From this graph, we derive complementary cross-modal rewards: deterministic verifiers score properties parsable from code and rendering, while a VLM judge assesses the non-parsable ones with a sample-specific Visual Graph Rubric (VGR) tied to graph elements and relations. We optimize these decoupled rewards through reinforcement learning with per-channel normalization to jointly improve spatial planning, aesthetic quality, and verifiable correctness. To evaluate this setting, we build a benchmark that scores verifiable correctness and visual quality separately, with visual scores highly consistent with human judgments. We find that reference images substantially improve the visual quality of code generated by existing models, and ablations show that AesCode benefits from references both as model input and as a source of visual rewards. Relative to same-scale Qwen3-VL baselines given the same references, AesCode-8B and AesCode-32B improve visual quality by 31.1 and 22.4 percentage points, reaching scores comparable to those of closed-source frontier models such as GPT-5.5 and Claude Opus 4.8.",
      "upvotes": 135,
      "github_stars": 95,
      "github_repo": "https://github.com/microsoft/AesCode",
      "project_page": "https://microsoft.github.io/AesCode/",
      "comments": 2,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.18860",
      "arxiv_url": "https://arxiv.org/abs/2610.18860",
      "title_ja": "AesCode: 切り離されたクロスモーダル報酬による美的コード生成",
      "summary_ja": "スライド等の生成において、内容の正確性はプロンプトから、レイアウト等の美しさはAI生成画像からガイドを得ることで、編集可能で美しい出力を実現。"
    },
    {
      "id": "2610.14993",
      "title": "Learning Where to Split: Dynamic Band Splitting for Audio Source Separation",
      "abstract": "Audio source separation models must preserve fine spectral structure while keeping the cost of the separator tractable. Band-split architectures reduce this cost by manually partitioning the spectrum into predefined frequency bands and encoding each band as a token, but the same boundaries are used for every mixture. Because informative spectral structure varies with source content, fixed boundaries can merge discriminative components or spend tokens where little resolution is needed. We introduce Dynamic Band Splitting (DBS), an end-to-end framework that adapts boundary locations and band widths to each mixture under a fixed band-token budget. DBS predicts content-conditioned boundary scores within frequency blocks, selects a prescribed number of boundaries using hard Top-K, and applies content-dependent pooling to obtain compact band tokens. After separation, it smooths and expands these tokens to the original STFT grid, refines them along frequency, and decodes complex masks with a frequency-shared head. DBS improved separation over the corresponding static models on DnR v2, MUSDB18-HQ, and EchoSet, with DBS-BSRNN achieving relative gain of 29.0% in average SI-SDR on DnR v2. These results and boundary analyses on DnR v2 show that content-adaptive frequency partitioning benefits multiple separator backbones under a fixed band-token budget. Code and audio demos are available at https://cslikai.cn/Dynamic-Band-Splitting",
      "upvotes": 134,
      "github_stars": 22,
      "github_repo": "https://github.com/JusperLee/Dynamic-Band-Splitting",
      "project_page": "https://cslikai.cn/Dynamic-Band-Splitting/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.14993",
      "arxiv_url": "https://arxiv.org/abs/2610.14993",
      "title_ja": "分割場所の学習：音源分離のための動的バンド分割",
      "summary_ja": "音源の内容に応じて周波数帯域の区切り方を適応的に変化させることで、計算コストを抑えつつ重要な音響構造を精密に分離する手法を提案。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 133,
      "github_stars": 101,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex: 都市規模3Dシーンのためのエージェント型空間グラウンディング",
      "summary_ja": "都市全体の3D空間において、VLMエージェントが視点の変更やズームを能動的に行いながら対象物を探索・特定する強化学習ベースのフレームワーク。"
    },
    {
      "id": "2610.20341",
      "title": "InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views",
      "abstract": "Feed-forward Gaussian reconstruction builds 3D scenes directly from input images for novel view rendering, but learning Gaussian attributes from predicted geometry for high-quality rendering under large viewpoint changes remains challenging. We analyze limitations in Gaussian attribute learning and introduce InfiniSplat v2, which improves rendering quality through architectural and training changes. Our method decouples geometry and attribute prediction with a frozen geometry branch, aligns predicted Gaussians using ground-truth camera poses during training, and adopts large-angle target view supervision. Across six datasets, the feed-forward outputs of the same trained model achieve state-of-the-art mean LPIPS and DISTS among the evaluated methods in both pose-conditioned and pose-free settings. In the pose-conditioned setting, mean LPIPS and DISTS decrease by 25.8% and 32.9%, respectively, compared with the strongest evaluated baselines. We further find that opacity learned with only image reconstruction supervision suppresses geometrically inconsistent points. Project page: https://zju3dv.github.io/InfiniSplat2/",
      "upvotes": 120,
      "github_stars": 452,
      "github_repo": "https://github.com/zju3dv/InfiniSplat",
      "project_page": "https://zju3dv.github.io/InfiniSplat2/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.20341",
      "arxiv_url": "https://arxiv.org/abs/2610.20341",
      "title_ja": "InfiniSplat v2: あらゆる視点からのフィードフォワード3DGSの分析と改善",
      "summary_ja": "幾何構造と属性予測を分離し、大きな視点変化でも高品質なレンダリングを可能にする、訓練済みモデルによるフィードフォワード型の3Dシーン再構成手法。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 115,
      "github_stars": 3414,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2: オープンワールドのための再帰的エージェント・ハーネス構築",
      "summary_ja": "未知のタスクに対して正解データがない環境でも、再帰的な自己改善を通じてエージェントの実行基盤（ハーネス）を自動進化させるフレームワーク。"
    },
    {
      "id": "2610.18868",
      "title": "Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards",
      "abstract": "Long-horizon agents have drawn growing attention for their ability to work autonomously -- from hours to days -- on economically valuable tasks, a capability essential to automated discovery and recursive self-improvement (RSI). Yet open-source models still struggle on long-horizon tasks, largely for lack of both training data and a working recipe, and scaling both is hard: long, complex tasks are difficult to curate and verify, and their rewards are sparse. We address both. First, we introduce Tev-Gym, the first long-horizon agent training dataset with verifiable, dense, progressive rewards -- 1,170 verified task environments across 7 domains. It is built on a latent-world-first approach that first constructs a latent world: a complete and correct hidden specification of the task domain, workflow, and expected state after each step. Each task is then progressively rendered from this specification into an agent-facing environment, enabling controllable complexity and a natural progress metric. Second, we turn this metric into a training recipe: via progress-potential reward shaping (PPRS), we convert progress into a dense per-step reward that improves training efficiency and makes otherwise-intractable tasks trainable. Training with this recipe yields Tev-27B, which achieves substantial gains on the Agents' Last Exam computing and math sciences domains (ALE-CM), matching GPT-6 Astra and Claude Opus 5 at Pass@5. Despite training only on ALE-related data, it generalizes to the Terminal-Bench (TB) 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash, and reaches Claude Opus 4.8-level performance on middle-horizon tasks such as TB 2.1.",
      "upvotes": 112,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://tev-agent.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.18868",
      "arxiv_url": "https://arxiv.org/abs/2610.18868",
      "title_ja": "Tev: 密な進捗報酬による長期間実行エージェント環境のスケーリング",
      "summary_ja": "検証可能な密な進捗報酬を備えた1,170のタスク環境を提供し、数時間から数日に及ぶ長期的な自律作業を学習・評価するためのデータセットを構築。"
    },
    {
      "id": "2610.22341",
      "title": "3DCodeVerse: Exploring 3D Worlds as Code",
      "abstract": "We introduce 3DCodeVerse, a research ecosystem that enables coding agents to create editable and verifiable 3D content at scale. 3DCodeVerse comprises large-scale, high-quality datasets of executable 3D code, a coding harness for spatial reasoning and automated verification, and practical guidance for 3D coding. First, we construct 3DCodeVerse-2M, a large-scale curated dataset of standalone 3D executable code. We build this corpus by collecting open-source data, converting specialized representations, and generating new programs with coding agents. Each program is packaged with the source files and associated assets required for execution in its declared environment, along with available descriptions and verification records. Second, we develop the 3DCodeVerse Harness, a multi-agent directed acyclic graph framework for generating and refining 3D content. It uses execution checks, spatial measurements, and visual feedback to automatically evaluate and revise generated programs without human feedback during generation. Third, we conduct systematic empirical studies of 3D coding, establishing baselines with fine-tuned open models and deriving practical guidance through component-level analyses of our harness. Extensive experiments demonstrate that fine-tuning on our dataset significantly improves the 3D coding capabilities of open-source models. Notably, our 3DCodeVerse harness achieves a 90% win rate against Claude Design (3D Object) in pairwise human evaluations, when both are utilized by Claude Opus 5.5.",
      "upvotes": 107,
      "github_stars": 124,
      "github_repo": "https://github.com/gaoypeng/3dcodeverse",
      "project_page": "https://3dcodeverse.com/",
      "comments": 2,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2610.22341",
      "arxiv_url": "https://arxiv.org/abs/2610.22341",
      "title_ja": "3DCodeVerse: コードとしての3D世界の探索",
      "summary_ja": "200万件の実行可能な3Dコードデータセットと、コードを通じた空間推論・3Dコンテンツ作成を評価するエージェント向けエコシステムを構築。"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "abstract": "A robot needs a world model that predicts how its actions will change the scene and a policy that chooses those actions. Models are usually built and evaluated for only one of these roles, and every robot records its actions in its own format. We ask whether one robot world model can serve both roles across different bodies, and what makes this work. We present GreenWAM, a world foundation model for robotics, together with the recipe that produces it: (1) a shared anatomical action space that describes 20 robot families, from bimanual arms to dexterous humanoids, in common joint coordinates; (2) joint training on these families in visual, action-conditioned and world-action modes; and (3) policies that split an action expert off the generator. As a world model, GreenWAM attains top-tier trajectory, depth and 3D accuracy on WorldArena 1.0, ahead of every world-action model and video generator in our comparison. As a policy, it scores among the top entries of the RoboTwin 2.0 leaderboard, reaches the highest zero-shot LIBERO-plus success among the compared methods and is competitive with dedicated vision-language-action and world-action policies on CALVIN and LIBERO. We further adapt GreenWAM to a real humanoid, where it succeeds more often than policies adapted from π_{0.5} and from Cosmos 3 Edge, and distill it into a single-step policy for real-time control. Controlled experiments yield three findings: robot specialization improves world prediction and control together; an action expert helps when split off at the start of adaptation; and keeping world-model modes during policy adaptation preserves robustness to scene changes.",
      "upvotes": 107,
      "github_stars": 6,
      "github_repo": "https://github.com/greenvla/GreenWAM",
      "project_page": "https://greenvla.github.io/GreenWAM/",
      "comments": 3,
      "org": "Sber Robotics Center",
      "url": "https://huggingface.co/papers/2610.18774",
      "arxiv_url": "https://arxiv.org/abs/2610.18774",
      "title_ja": "GreenWAM: ロボティクスのための世界基盤モデル",
      "summary_ja": "20種類の異なるロボット種を共通の解剖学的アクション空間で扱い、行動予測と方策決定の両方を一貫して行える基盤モデル「GreenWAM」を開発。"
    },
    {
      "id": "2610.21261",
      "title": "Behavioral Compositionality of Sparse Autoencoder Representations",
      "abstract": "Sparse autoencoders (SAEs) represent model activations with sparse, linearly decoded features, but the downstream effects of those features need not compose additively. We introduce SAE Additivity Residuals (SAR), which measure the behavioral variation left unexplained above a chosen interaction order. Under independent feature subset sampling, population SAR is exactly the normalized energy of interactions above that order and bounds coalition ordering error for the optimal low order approximation. To distinguish compositionality associated with the SAE representation from that induced by downstream computation, we compare learned SAE coordinates with sum preserving random rotations of the same selected subspace and find lower first order residuals for the learned coordinates across all 18 model and behavior settings. The coordinates are nevertheless not fully additive: pairwise terms improve held out coalition ordering in every setting and outperform parameter matched models using randomly selected third order terms. In a combined steering experiment, pairwise modeling raises rank fidelity from 0.5874 to 0.7790 and reduces ordering error from 0.1444 to 0.0606. Together, these results show that SAE coordinates support comparatively compositional behavioral descriptions while faithful joint explanations and interventions still require interactions beyond individual feature effects. Code is available at https://github.com/OpenSAE/SAE-Behavioral-Compositionality.",
      "upvotes": 106,
      "github_stars": 14,
      "github_repo": "https://github.com/OpenSAE/SAE-Behavioral-Compositionality",
      "project_page": "https://opensae.github.io/SAE-Behavioral-Compositionality",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21261",
      "arxiv_url": "https://arxiv.org/abs/2610.21261",
      "title_ja": "疎な自己符号化器（SAE）表現の行動構成性",
      "summary_ja": "SAEの抽出した特徴が下流の挙動に与える影響が、単純な加算で説明できるかを測定するための新しい指標「SAR」を提案。"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "abstract": "Agents driven by large language models are increasingly deployed on long-horizon tasks, where they use tools and modify real workspaces. How well they perform depends as much on the harness around the model as on the model itself. Existing benchmarks measure downstream task success under a fixed harness, leaving harness engineering itself unexplored. We propose Doc2Harness, a two-stage benchmark that evaluates long-horizon harness engineering directly. In Stage 1, a build model operating inside a fixed builder harness receives an interface-only contract skeleton and a development document that consolidates behavior across twelve frontier harnesses, and then constructs a complete candidate harness in an isolated container. In Stage 2, the frozen candidate harness runs in containers separate from the construction environment, one per test case, and is driven end to end by a scripted mock model. We score each test case using four observable channels, namely the requests sent to the model, the files on disk, the process exit code, and the command output; positive controls rule out vacuous passes. Across nineteen frontier models, each evaluated with three independent builds on 328 test cases, GPT-6 Astra achieves the highest pass rate at 53.05%, while the weakest model reaches 27.44%, a gap of roughly twenty-six percentage points. Even the strongest model fails nearly half of the test cases, and failures cluster around how cross-cutting functionality is split across modules. To our knowledge, Doc2Harness provides the first deterministic benchmark for measuring long-horizon harness engineering.",
      "upvotes": 105,
      "github_stars": 111,
      "github_repo": "https://github.com/YuyaoGe/doc2harness",
      "project_page": "https://geyuyao.com/doc2harness/",
      "comments": 2,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2610.20344",
      "arxiv_url": "https://arxiv.org/abs/2610.20344",
      "title_ja": "Doc2Harness: コーディングエージェントの長期ハーネス開発に関するベンチマーク",
      "summary_ja": "開発ドキュメントからエージェントの実行基盤（ハーネス）を構築・最適化する能力を直接評価し、エージェント開発プロセスの自動化レベルを測定。"
    },
    {
      "id": "2610.01496",
      "title": "SALD: Self-Referenced Advantage Learning for Diffusion Models",
      "abstract": "Recent work on language-model adaptation has shown that single models can obtain informative training signals by evaluating their behavior in demonstrationor feedback-augmented contexts, with the help of a teacher network, which is driven by the student's learned parameters. Inspired by this internal-reference principle, we investigate how diffusion models can identify self-referenced training signals without external demonstrations or teacher networks. We introduce SALD, a self-referenced training framework that evaluates each image-caption pair at two noise levels using the same model. The easier, lower-noise path is evaluated without gradient tracking to provide a reference, while the harder, higher-noise path provides the training gradient. Rather than directly distilling the easy-path prediction, SALD uses the difference between two path errors to adapt the hardpath objective. The proposed Advantage-Guided Diffusion (AGD) converts this relative error into a differentiable sample-level weight. Temporal Advantage Memory (TAM) accumulates relative difficulty across training and adapts the future gap between the two noise levels. Spectral Advantage Decomposition (SAD) further compares the residual power spectra of the two paths and constructs a differentiable, frequency-derived latent-element weight. All components share a single set of model parameters, requiring neither an external teacher network nor additional trainable parameters during training or inference, and no modification to the inference procedure. Experiments across multiple architectures and datasets demonstrate consistent improvements in generation quality, while component-wise ablations quantify the contributions of the proposed components.",
      "upvotes": 103,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Indian Institute of Technology, Kanpur",
      "url": "https://huggingface.co/papers/2610.01496",
      "arxiv_url": "https://arxiv.org/abs/2610.01496",
      "title_ja": "SALD: 拡散モデルのための自己参照型アドバンテージ学習",
      "summary_ja": "外部データや教師モデルを使わず、単一のモデル内で異なるノイズレベルの出力を比較することで、学習信号を自己生成する拡散モデルの学習手法。"
    },
    {
      "id": "2610.09326",
      "title": "VIS-Ground: Video Interactive Storytelling with Contextual Grounding",
      "abstract": "Video interactive storytelling enables viewers to actively steer how a video unfolds. However, once we allow viewers to intervene during generation, a new challenge arises: The viewer's request can have latent dependencies on both the grounding source and the current rendered video state. These dependencies may not be explicitly stated in any individual input, but emerge only when the source, rendered history, and new viewer intent are considered jointly. Existing interactive video generation systems primarily emphasize following viewer instructions, while source-grounded video generation methods focus on aligning generated content with an external narrative or knowledge source. This leaves a fundamental question underexplored: What context should a generation model ground on during interactive continuation, and how can heterogeneous, unstructured inputs be transformed into such grounding context? In this work, we formulate contextual grounding as the process of transforming heterogeneous input context into an executable constraint model for video generation. To address this challenge, we introduce VIS-Ground, which performs Structured Context Abstraction to recover grounded states and cross-context dependencies, Generation Constraints Induction to project relevant dependencies into candidate-specific constraints, and Constrained Video Generation to enforce these constraints through planning, verification, revision, and rendering. Across three video generation backbones, VIS-Ground consistently achieves the highest overall composite score, reaching an average absolute improvement of 10.3 points over the strongest per-backbone baselines. Detailed analysis further shows gains across both narrative and knowledge grounding, and reveals remaining challenges in dependency extraction, and faithful realization during video rendering.",
      "upvotes": 101,
      "github_stars": 12,
      "github_repo": "https://github.com/vis-ground/code",
      "project_page": "https://vis-ground.github.io",
      "comments": 2,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.09326",
      "arxiv_url": "https://arxiv.org/abs/2610.09326",
      "title_ja": "VIS-Ground: 文脈的グラウンディングを伴うビデオ対話型ストーリーテリング",
      "summary_ja": "視聴者の介入による動画の展開変化において、物語の出典、過去の生成履歴、新たな意図の依存関係を統合的に考慮し、一貫した動画生成を実現。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "ScoringBench Reshuffles AI Leaderboards by Grading Full Prediction Uncertainty",
      "summary": "A new open benchmark reveals that tabular foundation models rank very differently when judged on full probability distributions instead of RMSE.",
      "url": "https://alphasignal.ai/news/scoringbench-reshuffles-ai-leaderboards-by-grading-full-prediction-uncertainty",
      "published": "2026-10-19T08:27:33+09:00",
      "title_ja": "ScoringBench：予測の不確実性評価によるAIリーダーボードの再編",
      "summary_ja": "RMSEではなく確率分布全体で評価することで、表形式基礎モデルのランキングが大きく変わることを明らかにした新しいベンチマーク。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Liquid AI's LFM2.5-24B Runs 184 Tokens per Second for Local Agents",
      "summary": "Liquid AI's new 24B mixture-of-experts activates only 2B parameters per token, delivers 184 tokens/sec on an M5 Max, and ships in GGUF for llama.cpp.",
      "url": "https://alphasignal.ai/news/liquid-ai-s-lfm2-5-24b-runs-184-tokens-per-second-for-local-agents",
      "published": "2026-10-19T06:03:25+09:00",
      "title_ja": "Liquid AIのLFM2.5-24B、ローカル環境で毎秒184トークンの推論を実現",
      "summary_ja": "24BのMoEモデルながら1トークンあたり2Bのみを活性化。M5 Maxで高速動作し、llama.cpp用のGGUF形式で提供される。"
    },
    {
      "lab": "AlphaSignal",
      "title": "SGS-SLAM Bakes Semantic Labels Directly Into 3D Gaussian Maps",
      "summary": "A trending open-source SLAM system fuses 3D Gaussian Splatting with semantic segmentation to deliver object-aware dense reconstruction in real time.",
      "url": "https://alphasignal.ai/news/sgs-slam-bakes-semantic-labels-directly-into-3d-gaussian-maps",
      "published": "2026-10-18T21:04:22+09:00",
      "title_ja": "SGS-SLAM：3Dガウシアンマップにセマンティックラベルを直接統合",
      "summary_ja": "3D Gaussian Splattingと領域分割を融合し、物体認識が可能な高密度再構成をリアルタイムで実現するオープンソースのSLAMシステム。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Ephemeral AI Lab's LayerFS Gives Parallel AI Agents Forkable Isolated Filesystems",
      "summary": "A Rust-based filesystem gives each AI agent a disposable, zero-copy fork of a shared base, enabling cheap branching, rollback, and parallel rollouts.",
      "url": "https://alphasignal.ai/news/ephemeral-ai-lab-s-layerfs-gives-parallel-ai-agents-forkable-isolated",
      "published": "2026-10-18T21:01:43+09:00",
      "title_ja": "LayerFS：並列AIエージェント向けの分岐可能な隔離ファイルシステム",
      "summary_ja": "各エージェントにゼロコピーの使い捨てファイルシステムを提供し、安価な分岐、ロールバック、並列実行を可能にするRust製ツール。"
    },
    {
      "lab": "AlphaSignal",
      "title": "LoopRPT Teaches AI to Think Smarter With Every Recurrent Pass",
      "summary": "A new reinforcement pre-training recipe pushes rewards into the hidden iterations of looped transformers, improving accuracy and cutting compute per token.",
      "url": "https://alphasignal.ai/news/looprpt-teaches-ai-to-think-smarter-with-every-recurrent-pass",
      "published": "2026-10-18T21:01:04+09:00",
      "title_ja": "LoopRPT：反復パスごとに知能を高めるAI学習法",
      "summary_ja": "ループ型Transformerの隠れた反復処理に報酬を与える強化事前学習により、推論精度を向上させつつ1トークンあたりの計算コストを削減。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Geo-sleuth Turns Any Coding Agent Into an Open-Source Photo Detective",
      "summary": "Geo-sleuth is an open-source agent skill that locates photos to within meters using OpenStreetMap, elevation skylines, satellite tiles and street view, with no landmarks required.",
      "url": "https://alphasignal.ai/news/geo-sleuth-turns-any-coding-agent-into-an-open-source-photo-detective",
      "published": "2026-10-18T19:03:13+09:00",
      "title_ja": "Geo-sleuth：あらゆるコーディングエージェントを写真探偵に変える技術",
      "summary_ja": "ランドマークがなくてもOSMや衛星画像、ストリートビューを用いて写真の場所を数メートル単位の精度で特定するオープンソーススキル。"
    },
    {
      "lab": "OpenAI",
      "title": "How Itaú is building generative AI for its entire customer base",
      "summary": "With ia.i, a conversational interface, and the IARA governance platform, Itaú is applying its AI First strategy to customers and employees — in one of Brazil’s most regulated sectors.",
      "url": "https://openai.com/index/itau-generative-ai",
      "published": "2026-10-17T04:00:00+09:00",
      "title_ja": "Itaú銀行がいかに全顧客向けに生成AIを構築しているか",
      "summary_ja": "対話型インターフェースia.iとガバナンス基盤IARAを活用し、規制の厳しい金融分野でAI First戦略を顧客と従業員に適用。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に適応させる：自律型ウェットラボの構成要素",
      "summary_ja": "自律的なウェットラボ（実験室）構築に向けた、AIエージェントを生物学的な現実に即して動作させるための基礎要素の解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining",
      "published": "2026-10-16T10:44:47+09:00",
      "title_ja": "インド諸言語の事前学習のスケーリング：2.8兆トークンとオープンなデータ生成",
      "summary_ja": "2.8兆トークンの大規模データセットと、オープンなデータ生成パイプラインを用いたインド諸言語向けAIモデルの学習規模拡大。"
    },
    {
      "lab": "OpenAI",
      "title": "Benefit Street Partners answers questions faster with Codex",
      "summary": "Anant Kumar builds tools to compare loan valuations and analyze credit agreements, using Codex for code review and faster follow-ups.",
      "url": "https://openai.com/index/benefit-street-partners",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Benefit Street Partners、Codexでローン評価の回答を高速化",
      "summary_ja": "Codexを活用してコードレビューやローン評価比較、クレジット契約分析を行い、ツール構築とフォローアップの迅速化を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Stack Overflow for Agents triples signups with ChatGPT plugin",
      "summary": "Two engineers shipped Stack Overflow for Agents in a few weeks with Codex, and its ChatGPT plugin helped drive up to 10× growth in agent creation.",
      "url": "https://openai.com/index/stack-overflow-chatgpt-plugin",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Stack Overflow for Agents、ChatGPTプラグインによりサインアップ数が3倍に",
      "summary_ja": "Codexを用いて短期間でエージェント用ツールを開発し、ChatGPTプラグインを通じてエージェント作成数を最大10倍に成長させた事例。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Beam: a 501B open model you can own, customize, and scale",
      "summary": "",
      "url": "https://huggingface.co/blog/reflection-beam",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Beamへようこそ：所有、カスタマイズ、拡張が可能な501Bオープンモデル",
      "summary_ja": "ユーザーが独自に所有、カスタマイズ、スケーリングを行うことができる501Bパラメータの大規模なオープンソースモデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
      "published": "2026-10-16T05:34:01+09:00",
      "title_ja": "Granite Switch 4.1：1つのエンドポイントでチャット、意思決定、音声を処理",
      "summary_ja": "チャット応答、意思決定、音声処理の機能を単一のエンドポイントから提供するGranite Switchの新バージョン。"
    },
    {
      "lab": "OpenAI",
      "title": "Bringing GPT-Rosalind to academic research labs",
      "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
      "url": "https://openai.com/index/introducing-the-rosalind-academic-plan",
      "published": "2026-10-16T04:00:00+09:00",
      "title_ja": "GPT-Rosalindを学術研究室へ導入",
      "summary_ja": "ライフサイエンス研究を加速させるため、対象となる学術研究室にGPT-Rosalindへの支援アクセスとツールを提供するアカデミックプラン。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学向けツール「Google Antigravity」を活用し、新たな抗菌ペプチドの探索プロセスを高速化する取り組み。"
    },
    {
      "lab": "OpenAI",
      "title": "Teaching students to think and learn through questions",
      "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
      "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
      "published": "2026-10-15T22:00:00+09:00",
      "title_ja": "質問を通じて学生の思考と学習を促す教育手法",
      "summary_ja": "AIによるステップバイステップの学習支援（Study Mode）を通じ、教師が学生の能動的な学びをサポートする方法を提示。"
    },
    {
      "lab": "OpenAI",
      "title": "Sullivan & Cromwell brings legal expertise into agreement review",
      "summary": "In collaboration with OpenAI, Sullivan & Cromwell developed Agreement Analyzer, an AI tool for identifying issues in a draft agreement.",
      "url": "https://openai.com/index/sullivan-cromwell",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Sullivan & Cromwell、契約書レビューに法律の専門知識を導入",
      "summary_ja": "OpenAIとの提携により、契約書のドラフトから問題を特定するAIツール「Agreement Analyzer」を開発。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上でのMLXとRDMAを用いたLLMのローカルおよび分散推論",
      "summary_ja": "Appleシリコンの統合メモリを活用するMLXにより、Mac上でプライバシーを保ちながら最新LLMの推論や微調整を可能にする手法。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "自由形式の推論の代わりに事前定義された候補から選択するSSR方式を導入し、小型モデルの推論コスト削減と精度向上を実現。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "LLMが先に抽象的なスタブを生成して検索を行う「PtR」手法を研究し、大量のAPIから最適なツールを見つけ出す方法を評価。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Muse Spark Open: open-weight frontier multimodal mixture-of-experts model from Meta",
      "summary": "",
      "url": "https://huggingface.co/blog/meta-muse-spark-open",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Muse Spark Open：Metaによるオープンウェイトの最先端マルチモーダルMoEモデル",
      "summary_ja": "Metaが公開した、オープンウェイトで提供される最先端のマルチモーダル混合専門家（MoE）モデルの紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome FLUX.3 Image Klein in Diffusers",
      "summary": "",
      "url": "https://huggingface.co/blog/flux-3",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "DiffusersにFLUX.3 Image Kleinが登場",
      "summary_ja": "画像生成ライブラリ「Diffusers」において、FLUX.3 Image Kleinモデルが利用可能になったことの告知。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの実装：地球規模の課題に挑む地理空間エージェント",
      "summary_ja": "地球が直面する大きな課題を解決するために、地理空間情報を活用するAIエージェント（Earth AI）を適用する取り組み。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewというツールを用いて、複雑な技術文書の内容を分析・精査する科学研究分野の活用事例。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創造性を増幅する10の方法",
      "summary_ja": "2026年に向けた研究ロードマップとして、AIが人間の知見や創造性を拡張するための10のアプローチを紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "HiRO-ACEv2: Simulating extreme weather at 3 km resolution for a fraction of the cost",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/hiro-acev2",
      "published": "2026-10-15T01:12:42+09:00",
      "title_ja": "HiRO-ACEv2：低コストで3km解像度の異常気象シミュレーションを実現",
      "summary_ja": "従来よりも大幅に低いコストで、3kmという高解像度での異常気象シミュレーションを可能にする新技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検知AIモデルを共同開発",
      "summary_ja": "軽量なGemmaモデルを使い、データをクラウドに送らずデバイス内でプライベートなチャット詐欺を検知する仕組みを構築。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基礎モデルの言語選択次元によるコードスイッチング検知",
      "summary_ja": "音声から直接、複数言語の混在（コードスイッチング）を検知する軽量な手法。文字起こしなしで学習用データの収集を可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モーダル・マスク拡散モデルの設計空間",
      "summary_ja": "テキスト・画像・音声をゼロから学習した初の3モーダル拡散モデルを紹介。スケーリング則や混合比率、推論の最適化を分析。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "次世代モデル「Gemini 4 Argon」を開発する上での、責任あるAIの原則と安全性に関する取り組み。"
    }
  ]
};
