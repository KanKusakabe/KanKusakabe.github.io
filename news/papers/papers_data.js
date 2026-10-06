window.papersData = {
  "updated_at": "2026-10-06 11:07 JST",
  "arxiv": [
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
      "id": "2609.33439",
      "title": "Raven: The Harness of Harnesses for Composable Agentic Intelligence",
      "abstract": "As large language models advance, AI agents are moving beyond isolated, domain-specific tasks toward long-horizon, cross-domain workflows. This transition exposes two challenges: increasing harness complexity makes manual design difficult to scale, while tighter coupling to specific domains limits the generality of a single harness. The central question thus shifts from how to engineer a stronger harness for one domain to how to autonomously construct specialized harnesses, improve them through experience, and orchestrate them across domains. We introduce Raven, The Harness of Harnesses, an open-source multi-agent ecosystem that automatically constructs and evolves modular harnesses for specific models and domains, treating each executable model--harness pair as a composable unit of intelligence. To support an All-Domain Collaboration Network, its Host Agent decomposes goals, matches subtasks to specialized agents, coordinates execution dependencies, and integrates results, while a host archive and EverOS preserve experience across tasks and Skill Forge makes that experience available as reusable procedures. Our theory establishes sufficient conditions for such composition to expand reliable task coverage beyond that of the available individual agents under a shared resource budget. On complex and long-horizon tasks, Raven significantly outperforms the state-of-the-art agent systems, pushing the frontier of composable agentic intelligence.",
      "upvotes": 563,
      "github_stars": 5207,
      "github_repo": "https://github.com/EverMind-AI/Raven",
      "project_page": "https://raven.evermind.ai/",
      "comments": 3,
      "org": "EverMind",
      "url": "https://huggingface.co/papers/2609.33439",
      "arxiv_url": "https://arxiv.org/abs/2609.33439",
      "title_ja": "Raven: 構成可能なエージェント知能のためのハーネス・オブ・ハーネス",
      "summary_ja": "ドメインを横断するワークフローに対応するため、特化型ハーネスを自律的に構築・改善・統合するマルチエージェント型のエコシステムを提案。"
    },
    {
      "id": "2609.36484",
      "title": "The Teacher Is a Direction, Not a Destination: Extrapolating RL-Induced Representation Residuals in On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) trains a student to match the teacher's next-token distributions on the student's own trajectories and has yielded substantial empirical gains. Generalized variants allow the student to surpass the teacher by extrapolating an implicit reward in output space. The language-model head, however, attenuates this change anisotropically: much of the change encoded in the teacher's hidden states reaches the logits at a small fraction of its weight, and the sampled-token log-probability ratios on which output-space extrapolation relies inject noise that the extrapolation amplifies, making training unstable. We observe that reinforcement learning (RL) shifts a model's internal representations relative to its base checkpoint, and that the direction of this shift can be measured at every layer. Motivated by this observation, we propose RIDE (RL-Induced Direction Extrapolation), which extrapolates the RL-induced change directly in representation space: at every layer and token position, RIDE computes the residual between the teacher and its pre-RL checkpoint and regresses the student's hidden states toward targets displaced beyond the teacher along this residual. Conditioned on a sampled trajectory, this regression is equivalent to maximizing a linear directional reward defined by the residual under a quadratic penalty centered at the teacher, which makes explicit how the objective moves the student along the RL-induced direction while limiting its deviation from the teacher. Across four base/RL-teacher pairs spanning different scales, architectures, and pre-training lineages, RIDE approaches or exceeds the RL-trained teacher on every pair and is the only method whose mean does so, and it consistently outperforms output-space extrapolation, which degrades the student whenever the teacher is close to its base. Project page: https://github.com/xixixixixxxx/RIDE.",
      "upvotes": 532,
      "github_stars": 6,
      "github_repo": "https://github.com/xixixixixxxx/RIDE",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2609.36484",
      "arxiv_url": "https://arxiv.org/abs/2609.36484",
      "title_ja": "教師は方向であり、目的地ではない：方策内蒸留におけるRL誘導表現残差の外挿",
      "summary_ja": "強化学習による内部表現の変化を分析し、ロジット空間での外挿の不安定さを解消するために隠れ状態の残差を直接外挿して生徒モデルの性能を向上。"
    },
    {
      "id": "2609.39102",
      "title": "False Frontiers: Diagnosing and Mitigating Co-Cheating in Self-Evolving Search Agents",
      "abstract": "Self-evolving search agents build their own training curricula by jointly optimizing a proposer that generates questions and a solver that answers them. This closed loop introduces a failure mode we call co-cheating: the proposer and solver increasingly agree on shared errors, so internal reward improves without a matching gain in external correctness. A post-hoc audit against source evidence shows co-cheating growing more severe over successive rounds of self-evolution, with pseudo-label correctness stagnating or declining even as the in-loop training signal improves. The most direct mitigation is to verify proposals before training: we introduce multi-sample verification (MSV), which queries the same model three times with the source and three times without it to decide task admission and replace unreliable pseudo-labels. MSV partially reduces false agreement but leaves substantial residual co-cheating and costs six extra labeler generations per candidate. These limitations motivate CrossFit, our main method: it partitions the proposer's source documents into groups A and B; questions generated from A are scored by an auxiliary solver trained only on B, and vice versa. The cross-fitted agreement determines proposer reward, so a same-source pseudo-label cannot be reproduced through the feedback solver, while the original solver's update rule is unchanged. Rerunning the loop with Qwen3.5-4B and Qwen3.5-9B, MSV reduces false-agreement mass from 6.1% to 5.7% and from 8.8% to 7.2%, whereas CrossFit reduces it to 3.0% and 3.7%. Replaying identical proposals with source-excluded feedback further reduces false agreement to 0.4% and 0.1%, isolating feedback ancestry from curriculum changes. Across seven downstream search benchmarks, CrossFit improves average performance over standard coupled self-evolution by 8.8 and 8.4 points and over Search-R1 by 8.7 and 7.8 points at 4B and 9B.",
      "upvotes": 511,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Rutgers University",
      "url": "https://huggingface.co/papers/2609.39102",
      "arxiv_url": "https://arxiv.org/abs/2609.39102",
      "title_ja": "偽のフロンティア：自己進化型検索エージェントにおける共謀行動の診断と緩和",
      "summary_ja": "提案者と回答者が共通の誤りに同調する「共謀」を特定。複数の回答を照合するマルチサンプル検証（MSV）により、学習信号の質と外部的な正確性を改善。"
    },
    {
      "id": "2609.38426",
      "title": "LoopVL: Recurrent Visual Intelligence",
      "abstract": "We introduce LoopVL to study whether Loop Transformers can be effectively extended to vision- language models. LoopVL combines Module-Loop and Model-Loop computation to iteratively update a unified vision-language state through shared modules. We train LoopVL from scratch through language pre-training, multimodal training, and post-training. LoopVL outperforms a range of similarly sized and larger non-recurrent models on multimodal understanding and visual reasoning benchmarks. We also observe Visual Aha Moments in LoopVL, characterized by pronounced shifts in visual attention across loops. LoopVL provides practical evidence for recurrent vision-language modeling and offers an intuitive perspective on how shared parameters can support deeper multimodal computation over continuously evolving visual-language states.",
      "upvotes": 467,
      "github_stars": 103,
      "github_repo": "https://github.com/Tier-Flow/LoopVL",
      "project_page": "https://huggingface.co/TierFlow/LoopVL",
      "comments": 2,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2609.38426",
      "arxiv_url": "https://arxiv.org/abs/2609.38426",
      "title_ja": "LoopVL：再帰的視覚知能",
      "summary_ja": "共有モジュールを通じて視覚と言語の状態を反復更新する再帰型VLMを提案。同規模の非再帰モデルを凌駕し、反復計算による注意の変化（Aha Moments）を実現。"
    },
    {
      "id": "2609.34309",
      "title": "MaLiang-Harness: A Programmable Path to Image and Video Generation",
      "abstract": "Executable programs offer explicit control over how images and videos are constructed, but generating runnable code is only the beginning of visual creation. A program can execute correctly while violating the requested composition, appearance, or motion. We define this discrepancy as the Program-to-Visual (P2V) gap and introduce MaLiang-Harness, a unified framework for organizing MLLM-driven visual generation into a persistent process of construction, inspection, and revision. Its central design is to make the evolving visual program, its construction history, and its verification share a common revision reference. We define the Persistent Executable Generation (PEG) state as preserving programs and task context. Traceable Generation Process (TGP) connects edits to rendered evidence, and Revision-aware Editing and Verification (REV) supports restoration and checks the current revision before completion. Together, these mechanisms coordinate planning, execution, and visual feedback across rendering backends. We evaluate 11 powerful closed-source MLLMs on MaLiang-IBench and four on MaLiang-VBench, measuring generation success, visual quality, and computational cost. GPT-6-Astra achieves 100% generation success on both benchmarks, with 96.0% of image tasks and 76.9% of video tasks meeting all quality thresholds. The comparison also reveals a mismatch between general capability scores and visual generation performance, with similarly scored models differing substantially in their ability to satisfy visual requirements. MaLiang-Harness provides a systematic basis for studying how MLLMs translate executable code into visual outcomes, exposing both the potential of programmable generation and the limitations of general benchmarks as predictors of this ability. The project is available at https://github.com/gulucaptain/MaLiang-Harness.",
      "upvotes": 411,
      "github_stars": 28,
      "github_repo": "https://github.com/gulucaptain/MaLiang-Harness",
      "project_page": "https://gulucaptain.github.io/MaLiang-Harness/",
      "comments": 1,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.34309",
      "arxiv_url": "https://arxiv.org/abs/2609.34309",
      "title_ja": "MaLiang-Harness：画像・ビデオ生成へのプログラム可能なパス",
      "summary_ja": "生成コードと視覚結果の乖離を解消するため、構築・検査・修正の履歴を共有・永続化してMLLMによる画像・動画生成を制御するフレームワークを提案。"
    },
    {
      "id": "2609.36012",
      "title": "In-Context Learning for Robots: Methods and Applications",
      "abstract": "General-purpose robots must infer what a new task requires and translate that understanding into appropriate physical action. In-context learning (ICL) for robots supports this process by using demonstrations and interaction to direct existing competence with neural parameters held fixed during deployment. We organize this literature review around the interfaces connecting contextual evidence to execution, distinguishing four families: context-conditioned policies, geometric demonstration transfer, world-model-based control, and skill- and agent-based execution. Comparing these interfaces clarifies their transfer assumptions and the roles of training, correspondence, and memory in making context useful. Across manipulation and navigation, we examine how these mechanisms preserve taught requirements as objects, environments, and execution conditions change. This analysis links method design to evaluation practices that distinguish responsiveness to teaching, physical transfer, and benefits from retained experience. The resulting agenda connects compositional task acquisition and faithful transfer with physical recursive self-improvement, in which experience improves the ability to learn subsequent tasks.",
      "upvotes": 388,
      "github_stars": 17,
      "github_repo": "https://github.com/JethroJames/awesome-robots-icl",
      "project_page": "https://jethrojames.github.io/awesome-robots-icl/",
      "comments": 2,
      "org": "Knowin AI",
      "url": "https://huggingface.co/papers/2609.36012",
      "arxiv_url": "https://arxiv.org/abs/2609.36012",
      "title_ja": "ロボットのためのインコンテキスト学習：手法と応用",
      "summary_ja": "パラメータを固定したままデモや相互作用からタスクを推論するロボットICLを、ポリシー・幾何変換・世界モデル・スキルの4つのインターフェースに分類し概説。"
    },
    {
      "id": "2609.32722",
      "title": "Scaling Properties of Same-Family On-Policy Distillation",
      "abstract": "*Reinforcement learning (RL)* can induce substantial reasoning capabilities in large language models (LLMs), but how much of this capability transfers across model scales, and how quickly, remains unclear. We study the scaling properties of *on-policy distillation (OPD)* across *weak-to-strong*, *same-base*, and *strong-to-weak* teacher--student setups. We find that early OPD training dynamics uniformly exhibit a regular *useful-transfer* regime, in which held-out accuracy (the *gold score*, G) rises approximately linearly in d=mathrm{KL(π_θVert π_{ref})}, the square root of token-level reverse KL divergence from the student initialization. In every observed weak-to-strong pair, the student's peak gold score exceeds its teacher's own, so a compact RL expert can transfer capability to a much larger student via OPD. To estimate OPD outcomes, we fit *power laws* for how G_{peak} and the slope of the useful-transfer regime scale with student and teacher parameter counts and with teacher gold score. These laws show that peak gold score improves with teacher scale only up to roughly the student's scale, and that at a matched gold score smaller teachers transfer better, so a teacher's score alone does not define its supervision value. We also study the scaling effects of two OPD variants, bootstrapping weak-to-strong OPD, and the degree of on-policy supervision.",
      "upvotes": 321,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://colored-dye.github.io/blog/2026/opd-scaling/",
      "comments": 5,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.32722",
      "arxiv_url": "https://arxiv.org/abs/2609.32722",
      "title_ja": "同ファミリー内の方策内蒸留におけるスケーリング特性",
      "summary_ja": "方策内蒸留（OPD）の学習動態を調査し、初期段階ではモデルの規模に関わらず、KL離散度の平方根に対して精度が線形に向上する規則的な転移体制を発見。"
    },
    {
      "id": "2609.31847",
      "title": "Omni-IO Skills: Harnessing Your Agent Omni-Native",
      "abstract": "General-purpose agents can plan, reason, and act over long horizons, yet their production capabilities remain fragmented across text, images, audio, video, documents, 3D assets, and code. Extending a foundation model to additional modalities ties capability growth to costly model updates, while assembling specialist models and tools leaves unresolved how procedures, dependencies, intermediate assets, and cross-turn revisions should be coordinated. We present Omni-IO Skills, a plug-and-play Agent Harness that makes existing agents omni-native through hierarchical Skills, a standardized multimodal execution interface, dependency-aware orchestration, and a persistent Asset Registry. Multi-asset workflows are represented as Declare Execution Graphs, which schedule independent operations concurrently and register successful outputs for downstream and cross-turn reuse across replaceable execution backends. Its 27 Skills cover 38 representative tasks spanning seven artifact modalities and four capability families: understanding, generation, reasoning, and retrieval. On UniM-90, the harness raises the input-support rates of GPT-5.6 Sol and Claude Sonnet 5 from 40.00% and 38.89% to 100%, while increasing relative Semantic--Quality Coupled Score from 26.99 to 74.94 and from 27.82 to 77.78, respectively; Strict Structure Score reaches 100.00 and 99.78. These results establish harness-level capability composition as a practical route to broad, evolvable Omni systems without changing the host agent's reasoning core.",
      "upvotes": 292,
      "github_stars": 68,
      "github_repo": "https://github.com/any2any-mllm/Omni-IO-Skill",
      "project_page": "https://github.com/any2any-mllm/Omni-IO-Skill",
      "comments": 2,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.31847",
      "arxiv_url": "https://arxiv.org/abs/2609.31847",
      "title_ja": "Omni-IO Skills：エージェントをオムニ・ネイティブ化する",
      "summary_ja": "既存エージェントに階層的なスキルと標準化されたマルチモーダル実行I/Fを付与し、テキストや動画など多様な資産を横断して自律的に調整・実行可能にする。"
    },
    {
      "id": "2609.38721",
      "title": "UniEvo-VL: An On-policy Self-Distillation Training Recipe for Multimodal Model Self-improvement",
      "abstract": "Modern multimodal models bring generation and understanding into a single unified system, which enables them to provide and learn from their own feedback. Motivated by this unified capacity, we introduce UniEvo-VL, a self-evolving framework for multimodal models to learn from this constructive self-correction feedback during test-time compute. Instead of relying on a separate, often larger, teacher, we leverage their self-critiques as privileged information and ask a single multimodal model to act as both teacher and student with different contexts. The student only sees the vanilla question, while the teacher conditions on the privileged critique. Then training minimizes the per-state divergence between their denoising diffusion distributions over the student's own sampling trajectories. Experiments demonstrate that UniEvo-VL improves the image generation capabilities of multimodal models, while maintaining their sensitivity to additional reflection information. Specifically, we build on top of the open-source Qwen-image-2512 and observe a significant performance gain from 0.747 to 0.808 on GenEval and from 32.97 to 35.53 on GenEval2 Soft-TIFA. Moreover, attempts with more powerful external critics (e.g., GPT5.6-Luna) show that multimodal models with strong judge capabilities can anticipate a higher self-evolving ceiling. Last but not least, mixed text-rendering outcomes show that our self-improvements may not be uniform across different tasks. Our study aims to shed light on the current hot recursive self-improvement research line to enhance the user experience when using multimodal models without external supervision or guidance.",
      "upvotes": 290,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Stanford NLP",
      "url": "https://huggingface.co/papers/2609.38721",
      "arxiv_url": "https://arxiv.org/abs/2609.38721",
      "title_ja": "UniEvo-VL：マルチモーダルモデルの自己改善に向けた方策内自己蒸留レシピ",
      "summary_ja": "外部の教師モデルに頼らず、モデル自身の自己批判を特権情報として活用。異なる文脈を与えることで自ら教師と生徒を兼ね、テスト時の計算で自己進化する枠組みを提案。"
    },
    {
      "id": "2610.01780",
      "title": "RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations",
      "abstract": "A companion that talks with a person for months should come to understand them. It should remember what they said, infer who they are, and know when the past bears on the message in front of it. Testing this requires a real person's record, and such records are private, so benchmarks generate the person and the questions and settle in advance what matters. We release \\bench, ten real relationships with an AI companion: 27,218 messages over up to 120 days, released as the conversation and four files derived from it, a profile, a persona, a chat ground truth and a question set, each citing the messages it rests on. Every chat label carries the reasoning trace that produced it, checked stage by stage against the conversation. Three findings follow. First, the past is rarely needed and far away. Pooled measures mislead: a recency window finds the required message for 95.9\\% of probes and 2.2\\% of those that need memory, and at the natural rate 96\\% of the gain from supplying recorded evidence comes from messages that need none. Second, no detector we tried can tell when memory is needed on real messages, authored questions over the same histories leak the cue, and labeling the same messages as memories raises their use by ten to fourteen points. Third, three agent systems reconstruct the persona with the same F1 at a 31-fold difference in cost.",
      "upvotes": 249,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Quis Lab",
      "url": "https://huggingface.co/papers/2610.01780",
      "arxiv_url": "https://arxiv.org/abs/2610.01780",
      "title_ja": "RealCompanion：長期的な現実世界の対話からの推論を通じた人間理解のベンチマーク",
      "summary_ja": "実在する10組のAIコンパニオンとの長期対話データを公開。過去の文脈や推論過程を紐付けたラベルにより、時間経過に伴うパーソナライズ能力を評価可能に。"
    },
    {
      "id": "2610.01762",
      "title": "OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction",
      "abstract": "Streaming video LLMs must retain evidence before its relevance to future tasks is known and respond when sufficient evidence becomes available. The challenge is to form reusable factual memory without compromising real-time perception. We introduce OneStreamer, which jointly learns query-independent evidence recording and task response through a shared proactive generation process. Its Proactive Hierarchical Caption Memory (PHCM) produces time-grounded local-detail captions and summaries of completed events. Streaming caption targets supervise the interpretation of observed video prefixes during training. At inference, model-generated records complement a recent visual window, providing reusable factual context without revisiting historical visual features. Proactive State Transition Learning (PSTL) reduces the dominance of repeated waiting states by preserving supervision at all output anchors and selecting representative state-change and state-persistence tokens. We further develop a streaming data synthesis pipeline that aligns output content and timing with available evidence. Combining the resulting streaming captions and QA with cleaned open-source data yields OneStreamer-1M, a broad-coverage streaming video interaction dataset with over one million records spanning diverse tasks. Our 4B model achieves the best results among the compared methods across all eight evaluated streaming video understanding benchmarks. Ablations show that retaining generated captions improves historical QA without degrading real-time perception. PSTL also outperforms dense state supervision while supervising only 27.5% of annotated state tokens. Together, these results support proactive generation as a shared learning interface connecting perception, memory formation, and timely response in streaming video interaction.",
      "upvotes": 222,
      "github_stars": 137,
      "github_repo": "https://github.com/MCG-NJU/OneStreamer",
      "project_page": "https://mcg-nju.github.io/OneStreamer",
      "comments": 2,
      "org": "Nanjing University",
      "url": "https://huggingface.co/papers/2610.01762",
      "arxiv_url": "https://arxiv.org/abs/2610.01762",
      "title_ja": "OneStreamer：ストリーミングビデオ対話における知覚、メモリ、およびプロアクティブな応答の統合",
      "summary_ja": "リアルタイム知覚と記憶保持を両立。動的なキャプション生成と要約により、過去の出来事と最新の視覚情報を統合した、問合せに依存しない記憶形成と応答を実現。"
    },
    {
      "id": "2609.34563",
      "title": "Rethinking Latent Visual Reasoning: Grounding Latent Reasoning in Visual Evidence",
      "abstract": "Latent visual reasoning (LVR) enables multimodal large language models (MLLMs) to perform intermediate computation in continuous latent tokens rather than expressing every reasoning step in words. However, unlike textual CoT, latent reasoning is not directly observable, making it difficult to supervise what latent tokens learn. In this work, we first conduct a thorough analysis of latent-token behavior and identify a latent evidence-credit gap: latent tokens respond only weakly to image perturbations that alter the correct answer. We hypothesize that this issue stems from the lack of explicit supervision during GRPO training. These findings suggest that a final-answer reward provides too little guidance on what visual evidence to preserve or how credit should be assigned across latent tokens. To bridge this gap, we propose ReaLVR, which brings visual-evidence supervision to the model's own free-running latent trajectories. ReaLVR contrasts correct and model-generated wrong answers to determine where stronger supervision is needed, and relevant and mismatched visual evidence to specify what to preserve. Across three model families, ReaLVR consistently outperforms evaluated LVR baselines, achieving the highest five-task average of 63.7% on Qwen2.5-VL-7B. Crucially, we are the first to scale visual reasoning in latent space, showing that our framework continues to deliver robust improvements at frontier model scales up to 235B. Further analyses show more question-sensitive latent-token positions, stronger alignment with relevant visual regions, and greater fixed-context dependence on the most attended latent tokens.",
      "upvotes": 215,
      "github_stars": 28,
      "github_repo": "https://github.com/xixiaouab/ReaLVR-code",
      "project_page": "https://xixiaouab.github.io/projects/ReaLVR/",
      "comments": 2,
      "org": "Amazon",
      "url": "https://huggingface.co/papers/2609.34563",
      "arxiv_url": "https://arxiv.org/abs/2609.34563",
      "title_ja": "潜在的視覚推論の再考：潜在推論を視覚的証拠に接地させる",
      "summary_ja": "潜在トークンによる推論が視覚的変化に鈍感な課題を特定。最終回答の報酬だけでなく、視覚的特徴の再構築を補助タスクとして課すことで推論の質と透明性を向上。"
    },
    {
      "id": "2609.35259",
      "title": "On-Policy or Off-Policy Learning? A Systematic Study of Distillation Dynamics",
      "abstract": "On-policy learning has been argued to reduce catastrophic forgetting, produce sparser parameter updates, and improve generalisation. However, existing comparisons between supervised fine-tuning and reinforcement learning vary many factors simultaneously, making the contribution of rollout policy difficult to isolate. We study the effect of rollout policy in a controlled strong-to-weak distillation setting, by independently varying rollout policy, token-level KL direction, and learning rate across the Llama3 and Qwen2.5 model families and reasoning tasks spanning scientific, medical, and arithmetic domains. Our analysis reveals a nuanced picture of distillation dynamics in which rollout policy does not necessarily play a central role. Instead, token-level KL direction more clearly shapes task performance and output coverage, while learning rate governs forgetting and update sparsity. Analysis of KL gradients and experiments along a continuous student-teacher rollout-policy spectrum explain this pattern: forward KL is remarkably robust to rollout policy, with its performance stable and strong despite changes to the rollout policy, whereas reverse KL is substantially more sensitive and favours student-generated rollouts. On-policy data nevertheless improves generalisation to harder variants of the Countdown arithmetic task under both KL directions, although this advantage does not reliably persist after subsequent RLVR. Our broader conclusions remain robust to removing gradient clipping, using sampled KL estimators, and training on tasks requiring longer reasoning chains. Overall, our results challenge the view that on-policy rollouts are inherently preferable and show that their value depends critically on the objective, evaluation setting, and optimisation hyperparameters.",
      "upvotes": 183,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "University of Cambridge",
      "url": "https://huggingface.co/papers/2609.35259",
      "arxiv_url": "https://arxiv.org/abs/2609.35259",
      "title_ja": "方策内学習か方策外学習か？蒸留ダイナミクスの系統的研究",
      "summary_ja": "強から弱へのモデル蒸留において、ロールアウトポリシーの影響を制御実験で調査。特定のドメインや学習設定により方策内学習の優位性が変動する詳細な動態を解明。"
    },
    {
      "id": "2609.34759",
      "title": "PanoVLN: Towards Effective Panoramic Vision-and-Language Navigation",
      "abstract": "Recent vision-language models (VLMs) have advanced vision-and-language navigation (VLN), enabling models to predict navigation actions from visual observations and language instructions. In this work, we explore VLN with panoramic observations and introduce PanoVLN. The motivation is straightforward: more complete visual context should enable better-informed navigation decisions. For example, a panorama can reveal a passage outside a perspective camera's field of view, allowing the model to identify the intended route without additional exploration. However, we find that simply replacing perspective images with panoramas yields only limited gains. Our diagnosis suggests that fully exploiting wider visibility requires modifications to action prediction, training supervision, and visual representation. First, wider visibility supports longer-horizon action planning. We make the model predict longer action sequences, enabling larger turns and subsequent movement from a single panorama. Specifically, we introduce a confidence-guided execution (CGE) strategy that dynamically determines how many predicted actions to execute before replanning. Second, wider visibility also brings more complex route choices. We therefore construct training routes with frequent branching points and clear instructions to provide targeted supervision for route selection. Third, panoramic navigation requires understanding spatial relationships across viewing directions, beyond recognizing individual landmarks. We combine semantic and geometric features from RGB panoramas to capture both scene content and spatial layout without adding visual tokens. With a 4B backbone and RGB-only input, PanoVLN surpasses the previous SOTA by 11.9% and 8.7% in success rate on R2R-CE and RxR-CE Val-Unseen. Real-world experiments on a quadruped further demonstrate faster navigation with fewer pauses than prior VLN methods.",
      "upvotes": 166,
      "github_stars": 56,
      "github_repo": "https://github.com/wangzhen-w/PanoVLN",
      "project_page": "https://wangzhen-w.github.io/PanoVLN/",
      "comments": 1,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.34759",
      "arxiv_url": "https://arxiv.org/abs/2609.34759",
      "title_ja": "PanoVLN：効果的なパノラマ視覚・言語ナビゲーションに向けて",
      "summary_ja": "広範な視界を持つパノラマ画像をVLNに活用。単純な置換では限定的だった効果を、パノラマの特徴を活かすモジュール設計により改善し、探索効率を向上。"
    },
    {
      "id": "2609.32607",
      "title": "VoxMem: Benchmarking Multimodal Memory in Large Audio Language Models",
      "abstract": "Spoken conversational systems must recover information from prior interactions (i.e., memory), yet relevant information in speech extends beyond what was said to who said it, how it was spoken, and what was audible, information that exists only in the audio signal and cannot be recovered from a transcript. Beyond what to remember, memory also demands diverse operations: retrieving a single fact, integrating evidence across turns, tracking an evolving state. Real interactions further unfold across sessions, meaning information accumulates across distinct episodes rather than a single continuous recording. Existing benchmarks fall short on all three dimensions: they focus primarily on lexical content, adopt limited and ad hoc memory operations, and treat memory as a single-session problem. We argue that principled memory evaluation requires jointly characterizing the acoustic evidence to be retained and the operations applied to it, and introduce a taxonomy along these two axes. Building on this taxonomy, we present VoxMem: 3,196 evaluation instances over 34,743 spoken sessions (177 hours) crossing four acoustic evidence types (speech semantics, speaker identity, paralinguistic cues, environmental sound) with four memory operations (information extraction, multi-session reasoning, temporal tracking, and answer refusal), grounded in multi-session histories and stratified across context budgets from 8K to 64K tokens. Evaluating 15 LALMs, no model exceeds 40% at 32K. Models retain what was said far better than who said it, how, or what was audible, a gap that widens for complex operations, grows with history length, and manifests as qualitatively distinct failure modes across evidence types. VoxMem aims to provide a foundation to measure and drive progress on the full scope of spoken conversational memory.",
      "upvotes": 153,
      "github_stars": 3,
      "github_repo": "https://github.com/swagshaw/voxmem",
      "project_page": "https://swagshaw.github.io/voxmem/",
      "comments": 2,
      "org": "The University of Melbourne",
      "url": "https://huggingface.co/papers/2609.32607",
      "arxiv_url": "https://arxiv.org/abs/2609.32607",
      "title_ja": "VoxMem：大規模音声言語モデルにおけるマルチモーダルメモリのベンチマーク",
      "summary_ja": "話者や感情、音響背景など、音声信号特有の情報を長期間・複数セッションにわたって記憶し、統合・想起する能力を測定するための高度な音声対話ベンチマーク。"
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
      "title_ja": "GraphForge：グラフに接地したワークスペース合成による実務エージェントのトレーニング",
      "summary_ja": "実ファイルに基づき、タスクと検証条件を証拠グラフで紐付けたワークスペースを自動生成。リアルで検証可能な実務タスクデータセットの構築を可能にする。"
    },
    {
      "id": "2609.38288",
      "title": "AREX-2: Advancing Self-Improving Agents through Long-Horizon Reflective Tasks",
      "abstract": "We present AREX-2, an effort to advance the self-improving capability of LLM agents, which we define as the ability to iteratively refine a solution at test time. This ability rests on two complementary capabilities: reflection, which produces a solution better than the current one, and long-horizon execution, which keeps the iteration effective over many rounds. We hypothesize that both capabilities are domain-agnostic, and can therefore be learned in scenarios that are well suited for supervision. Accordingly, we synthesize long-horizon improvement trajectories from machine learning and algorithmic programming tasks, two domains that offer verifiable feedback and reward sustained iteration. Trained on this data, our agent, built on Qwen3.8-27B, achieves strong results on MLE-bench Lite (81.8) and Frontier-CS (70.7), transfers to deep research with 84.0 on BrowseComp, 52.6 on HLE, 92.2 on GAIA, and 93.8 on DeepSearchQA, and keeps improving as its budget of rounds grows. These results show that long-horizon reflective data is an effective route toward self-improving agents.",
      "upvotes": 138,
      "github_stars": 28,
      "github_repo": "https://github.com/VectorSpaceLab/AREX-2",
      "project_page": "https://github.com/VectorSpaceLab/AREX-2",
      "comments": 3,
      "org": "Beijing Academy of Artificial Intelligence",
      "url": "https://huggingface.co/papers/2609.38288",
      "arxiv_url": "https://arxiv.org/abs/2609.38288",
      "title_ja": "AREX-2：長期的な内省タスクを通じた自己改善エージェントの進展",
      "summary_ja": "内省と長期実行の2能力を重視し、検証可能な検証フィードバックが得られるプログラミング等のタスクから改善軌跡を合成。テスト時に解を反復修正する能力を強化。"
    },
    {
      "id": "2609.36380",
      "title": "LEGO-Anything: Coding Agents for 3D Scene Reconstruction",
      "abstract": "A 3D scene reconstructed from a single image is most useful when represented not as a rendering or a fixed 3D output, but as an explicit scene program whose execution yields a scene that can be inspected, edited, and queried. We present LEGO-Anything, an Image-to-Code framework in which a coding agent iteratively writes and executes Blender code, inspects scenes and renderings, and revises the program. To evaluate end-to-end scene recovery, we introduce LEGO-Bench, a simulator-grounded benchmark with 208 images from 104 diverse indoor and outdoor scenes. LEGO-Bench separately scores artifact validity, visible-surface geometry, and rendered appearance. Its simulator-grounded design enables extensibility and precise automatic evaluation. Among evaluated agents, GPT-6-astra achieves the strongest overall results, with 53.4% indoor and 39.6% outdoor scores, yet substantial gaps remain between delivering valid scene artifacts and faithfully recovering scene geometry and appearance. Analysis of agent construction trajectories reveals three recurring issues: weak scene initialization, regressive edits during iteration, and unreliable self-evaluation. These findings motivate LEGO-Plugin, a training-free harness plugin for more controlled iterative scene construction, which improves all six evaluated models, with relative gains of up to 62.7% in overall score. Finally, we test whether reconstructed scenes can represent natural images and support vision tasks. In LEGO-World, we derive object detections, instance masks, and relative depth as deterministic queries on scenes reconstructed by GPT-6-astra. These readouts show non-trivial performance across all three tasks but fall well short of specialized vision models, suggesting that program-constructed scenes from current coding agents are a promising but not yet sufficiently precise representation of natural images.",
      "upvotes": 137,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lego-anything.com/",
      "comments": 2,
      "org": "Amazon Web Services",
      "url": "https://huggingface.co/papers/2609.36380",
      "arxiv_url": "https://arxiv.org/abs/2609.36380",
      "title_ja": "LEGO-Anything：3Dシーン再構成のためのコーディングエージェント",
      "summary_ja": "画像から編集可能なBlenderコードを生成・実行・修正するエージェント。物理形状や外観を評価するベンチマークを通じ、構造化された3D空間の復元を実現。"
    },
    {
      "id": "2609.34981",
      "title": "What Makes World Action Models Generalize? An Empirical Study of Test-Time Future Modeling",
      "abstract": "World action models (WAMs) predict the future alongside actions during training. Due to the heavy computation cost of video denoising, whether the future must still be generated during inference is disputed: Explicit WAMs denoise it into clean frames along with every action chunk, whereas Latent WAMs discard it entirely for acceleration. We find that latent WAMs, despite matching explicit ones on in-distribution tasks, fail to retain the generalization benefits that originally motivated WAMs. To demonstrate this, we evaluate generalization along three axes: environmental perturbation, data efficiency, and task generalization. Controlled comparisons with a matched backbone, training data, and budget reveal consistent degradation across all three axes when the action expert no longer conditions on future representations. Further analysis shows that the gap arises almost entirely from the first denoising step: the benefit comes from preparing the future, not generating it. We therefore propose Simple-WAM, which simplifies future modeling into a single forward pass of fully noised video tokens and adapts the training-time noise schedule to this inference behavior. Across simulation and real-world tasks, Simple-WAM achieves the best of both worlds, leading explicit WAMs in generalization performance with efficiency comparable to Latent WAMs. Project Page: https://zrporz.github.io/Simple-WAM-Web/",
      "upvotes": 136,
      "github_stars": 72,
      "github_repo": "https://github.com/LeapLabTHU/Simple-WAM",
      "project_page": "https://zrporz.github.io/Simple-WAM-Web/",
      "comments": 2,
      "org": "Tsinghua-LeapLab",
      "url": "https://huggingface.co/papers/2609.34981",
      "arxiv_url": "https://arxiv.org/abs/2609.34981",
      "title_ja": "何が世界アクションモデルを汎用化させるのか？テスト時未来モデリングの実証研究",
      "summary_ja": "推論時に未来画像を生成しない潜在型WAMが、環境変化やデータ効率への汎用性を失うことを指摘。将来予測の明示的な実行がモデルの汎用能力保持に不可欠であることを解明。"
    },
    {
      "id": "2609.37200",
      "title": "Adaptive Reward Routing: Dynamic Multi-Reward Optimization for Joint Audio-Video Diffusion via Forward-Process RL",
      "abstract": "Multi-reward guided reinforcement learning (i.e., RL) offers a promising way to improve joint audio-video diffusion models along several complementary objectives, including modality-specific quality, cross-modal semantic alignment, and temporal synchronization. Its effectiveness, however, depends on two quantities that change during training: where reward-driven updates should act, and how competing rewards should be combined. Existing methods tend to rely on fixed routing and reward weights, failing to track evolving model functions. To address these limitations, we propose Adaptive Reward Routing to jointly adapt update locations and reward coordination during forward-process RL (i.e., DiffusionNFT) of joint audio-video diffusion models. Our method consists of two components. (i) Cross-Modal Influence-Guided Routing (Localizing Updates): We use bidirectional cross-attention responses as an efficient proxy for evolving cross-modal influence, dynamically reweighting token-aware losses and scaling gradients across cross-modal layers without additional model interventions. (ii) Preference-Preserving Modality-Aware Reweighting (Coordinating Rewards): We preserve predefined weights as preference priors and use branch-specific reward-gradient interactions as residual corrections after warm-up. This resolves evolving conflicts without letting dominant rewards suppress weak but essential objectives. Extensive experiments demonstrate consistent improvements in modality quality, semantic consistency, and audio-video synchronization over strong RL baselines. Ablations and mechanism analyses further validate the complementary benefits of adaptive update routing and reward coordination.",
      "upvotes": 127,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2609.37200",
      "arxiv_url": "https://arxiv.org/abs/2609.37200",
      "title_ja": "適応的報酬ルーティング：前方プロセスRLによるオーディオ・ビデオ同時拡散の動的マルチ報酬最適化",
      "summary_ja": "学習の進捗に合わせて報酬を適用するネットワーク部位と重みを動的に調整。音と映像の質、意味的な整合性、時間同期を同時に最適化する拡散モデル学習手法を提案。"
    },
    {
      "id": "2609.39982",
      "title": "Mid-Harness: Scaling Actions Between Model and Harness for Terminal Agents",
      "abstract": "Terminal agents act through stochastic model generations, yet the ability to generate a useful action does not ensure its reliable execution. A poor command (e.g., wrong package install) can change the environment in ways that hinder subsequent progress, even when the model could generate a better alternative. We investigate whether allocating test-time compute at the model-harness boundary can improve action reliability and trajectory success, and what makes this allocation effective. To study these questions, we introduce Mid-Harness, which samples and verifies candidate actions before forwarding one for execution, while keeping the generator and harness unchanged. With a TMAX-9B generator, more action sampling yields little benefit under weak verification, whereas a capable verifier can exploit useful alternatives from the same generator. On TerminalBench-Lite, a GPT-5.6 Sol verifier raises Pass@1 from 50.00% for the base agent to 68.03% with 8 sampled actions. When the same TMAX-9B model serves as the verifier, pairwise verification performs best among the evaluated verification mechanisms. Distilling responses from the stronger verifier into TMAX-9B further improves Pass@1, while leaving the action generator unchanged. With TMAX-9B on TerminalBench-Lite, combining action and trajectory scaling reaches higher success at lower estimated token cost than generating more trajectories alone. Mid-Harness also improves performance across additional models, benchmarks, and harnesses. These findings identify action scaling as a promising target for test-time compute scaling in terminal agents.",
      "upvotes": 115,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://byungkwanlee.github.io/MidHarness-page/",
      "comments": 5,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2609.39982",
      "arxiv_url": "https://arxiv.org/abs/2609.39982",
      "title_ja": "Mid-Harness：ターミナルエージェントにおけるモデルとハーネス間のアクションスケーリング",
      "summary_ja": "モデルが生成した実行前のコマンドを、モデル・ハーネス境界で検証・選別。テスト時の計算資源を有効活用し、誤操作による不可逆な環境変化を防ぎ成功率を向上。"
    },
    {
      "id": "2609.38155",
      "title": "Beyond the Timeline: Augmenting Long-Video Memory with Grounded Entity Biographies",
      "abstract": "Answering questions about long videos often requires connecting events involving the same objects across hours or days. Chronological descriptions and text-derived entities can leave physical identity unresolved: different objects may share a description, while observations of the same object remain disconnected across events. Retrieving relevant events therefore does not necessarily recover the \"biography\" of the particular entity a question concerns. To address this, we introduce Grounded Entity Biographies (GEB), a long-video memory framework that groups visually grounded observations of the same physical instance across clips into retrievable biographies while preserving the context of each moment. During question answering, the biography is retrieved alongside episodic evidence, allowing the model to follow an entity through events using identity links established during memory construction. Evaluations across four benchmarks, including day-long and week-long recordings, demonstrate improvements over prior memory frameworks in both multiple-choice and open-ended question answering. On EgoLifeQA, GEB achieves 72.0% accuracy, 4.4 percentage points above the best published result. Ablations show that grounded identity association and biography reading both contribute to the gains, which additional descriptions alone do not fully recover.",
      "upvotes": 114,
      "github_stars": 59,
      "github_repo": "https://github.com/rhfeiyang/GEB",
      "project_page": "https://geb-video.github.io/",
      "comments": 1,
      "org": "Amazon Science",
      "url": "https://huggingface.co/papers/2609.38155",
      "arxiv_url": "https://arxiv.org/abs/2609.38155",
      "title_ja": "タイムラインを超えて：接地されたエンティティ伝記による長尺ビデオメモリの増強",
      "summary_ja": "長尺動画内の同一物体を物理的な「伝記」として集約。単なる時系列説明では混同しやすい同一種類の別個体などを識別し、時間・場面を跨いだ正確な情報検索を実現。"
    },
    {
      "id": "2609.40340",
      "title": "EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving for Scientific Discovery",
      "abstract": "Evolutionary search with large language models (LLMs) can stall when progress requires external knowledge the model lacks. Supplying relevant documents helps, but simply adding web search tool can keep returning the same pages as solutions change. We introduce EvoDuet, a bi-level optimization method that co-evolves solutions and search queries with fixed model parameters. At each iteration, a retrieval gate lets the LLM assess its knowledge gap and choose to retrieve new documents, reuse stored ones, or proceed without them. An inner loop refines queries and ranks documents by the solution scores they are predicted to yield; an outer loop generates candidates in parallel from these documents and records the evaluated outcomes for later searches. Across 21 optimization tasks with one candidate per iteration, EvoDuet raises OpenEvolve's normalized discovery gain from 74.1% to 78.0% with GPT-5.6-Luna and from 61.3% to 82.3% with Gemini-3.8-Flash, whereas Qwen3.5-9B does not benefit. Our best runs surpass the previously reported best scores on eight tasks, including Swap Reduction on Q20 and Rosetta, and match them on three more. EvoDuet also improves with other scaffolds (e.g., Top-K, EvoX) on Sums/Diffs and Denoising, demonstrating its applicability across evolutionary search scaffolds.",
      "upvotes": 108,
      "github_stars": 4,
      "github_repo": "https://github.com/Open-Galapagos/EvoDuet",
      "project_page": "https://open-galapagos.github.io/evoduet_project_page/",
      "comments": 1,
      "org": "Minnesota NLP",
      "url": "https://huggingface.co/papers/2609.40340",
      "arxiv_url": "https://arxiv.org/abs/2609.40340",
      "title_ja": "EvoDuet：科学的発見のためのWeb検索とタスク解決のバイレベル共進化",
      "summary_ja": "解の生成と検索クエリの最適化を同時に行う。LLMが知識不足を自己判断して新情報を取得し、既存文書の再利用と合わせて科学的な解の精度を反復的に高める。"
    },
    {
      "id": "2609.40325",
      "title": "WorldAuditBench: Interactive 3D World Auditing with Multimodal Agents",
      "abstract": "As interactive 3D worlds are increasingly used to study intelligent behavior, it becomes important to develop efficient pipelines for identifying anomalies in these simulated environments, such as floating objects, traversable walls, or objects inconsistent with the surrounding scene. Multimodal AI systems, including vision-language models (VLMs) and vision-language-action models (VLAs), have shown potential for automating this task. However, 3D world auditing is complex, requiring the close coupling of two distinct capabilities: action, to navigate the 3D world and search for anomalies systematically and efficiently; and visual reasoning, to understand the environment and identify anomalies from multimodal observations. It remains largely unexplored whether multimodal agents can effectively couple these two capabilities, using visual reasoning to identify potential anomalies while taking actions to validate them. In this paper, we introduce WorldAuditBench, a benchmark for 3D world auditing comprising 213 anomaly tasks across 13 environments built with Unreal Engine 5 and Three.js, spanning five anomaly families. We evaluate five frontier models under a fixed exploration budget using two auditing paradigms: VLA-based exploration followed by VLM-based anomaly identification, and an end-to-end VLM agent in which visual reasoning directly guides action selection. Across the evaluated models and two paradigms, success rates range from 6.6% to 42.3%, substantially below human performance (83.4%). Through the task of world auditing, WorldAuditBench provides a testbed for studying how multimodal agents couple action and visual reasoning in interactive 3D environments, while highlighting current limitations in their ability to gather and interpret evidence during exploration.",
      "upvotes": 101,
      "github_stars": 4,
      "github_repo": "https://github.com/UCSB-NLP-Chang/WorldAuditBench",
      "project_page": "https://ucsb-nlp-chang.github.io/WorldAuditBench/",
      "comments": 3,
      "org": "University of California, Santa Barbara",
      "url": "https://huggingface.co/papers/2609.40325",
      "arxiv_url": "https://arxiv.org/abs/2609.40325",
      "title_ja": "WorldAuditBench：マルチモーダルエージェントによるインタラクティブな3D世界の監査",
      "summary_ja": "シミュレーション空間内の物理的・視覚的な異常（浮遊物等）を自律的に探索・特定するためのベンチマーク。行動（ナビゲーション）と視覚推論の密接な連携を評価。"
    },
    {
      "id": "2609.37372",
      "title": "Think Before You Score: Thinking Reward Model for Visual Generation",
      "abstract": "Visual reward models are essential for evaluating and improving visual generation models, yet existing approaches typically map task conditions and candidate outputs directly to scalar rewards, leaving implicit what should be evaluated for each individual case. We introduce Think Before You Score, a paradigm that explicitly determines what matters for each case before judging how well the candidate performs. Following this principle, we propose the Thinking Reward Model (TRM), which formulates case-adaptive rubrics, performs rubric-guided assessment, and produces fine-grained pointwise rewards. We further observe that conventional pairwise preference optimization can induce score polarization, and introduce Pairwise Dual-Group Relative Policy Optimization (PD-GRPO), which leverages pairwise supervision to improve reward discrimination while preserving fine-grained pointwise scoring. Extensive experiments on image generation and editing reward-modeling benchmarks demonstrate that TRM achieves state-of-the-art performance among open-source reward models while remaining highly competitive with proprietary alternatives. Moreover, using TRM as a reward for reinforcement learning consistently improves diverse visual generation models, demonstrating that its fine-grained, case-adaptive rewards translate into effective optimization signals for visual generation.",
      "upvotes": 101,
      "github_stars": 32,
      "github_repo": "https://github.com/bxhsort/Thinking_Reward_Model",
      "project_page": "https://bxhsort.github.io/Thinking-Reward-Model/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2609.37372",
      "arxiv_url": "https://arxiv.org/abs/2609.37372",
      "title_ja": "採点前に思考せよ：視覚生成のための思考報酬モデル",
      "summary_ja": "評価前に評価基準を自ら策定する「思考報酬モデル（TRM）」を提案。一律の評価ではなくケース毎の個別基準に基づいた詳細な評価により、生成モデルの品質を向上。"
    },
    {
      "id": "2609.36322",
      "title": "Periodic Weak Spots: Phase Sensitivity from Chunked KV-Cache Compression",
      "abstract": "Chunked KV-cache compression reduces the memory and attention costs of long-context inference by compressing windows of consecutive tokens into fewer cache entries at a fixed stride. Such compression also introduces a new positional coordinate: a token's phase, or its position relative to compression-window boundaries. We uncover a systematic asymmetry in models using such compression: the same information can be easy to retrieve at one phase and difficult at another. We call this periodic variation in retrieval performance phase sensitivity. In large open-weight models with such compression, long-context retrieval accuracy can differ by up to 40 percentage points across phases, revealing periodic weak spots that average benchmark scores can conceal. To investigate this behavior, we pretrain a family of transformers from scratch across multiple KV-compression designs, reproducing phase sensitivity across the variants. Mechanistic analysis using causal interventions in these models reveals phase specialization: different attention components contribute asymmetrically to retrieving information at different source phases. We further analyze idealized retrieval models, showing how gradient flow dynamics may favor sharp phase specialization. Evaluating models with chunked KV-cache compression thus requires measuring across compression phases: high average accuracy can coexist with systematic positional failures.",
      "upvotes": 100,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ultimatejupiter.github.io/blog/periodic-weak-spots/",
      "comments": 3,
      "org": "ByteDance Seed",
      "url": "https://huggingface.co/papers/2609.36322",
      "arxiv_url": "https://arxiv.org/abs/2609.36322",
      "title_ja": "周期的な弱点：チャンク化KVキャッシュ圧縮によるフェーズ感度",
      "summary_ja": "KVキャッシュ圧縮を行うモデルにおいて、情報の位置（フェーズ）によって検索精度が最大40%激変する現象を特定。特定の圧縮境界で情報が欠落する脆弱性を解明。"
    },
    {
      "id": "2609.38879",
      "title": "Does Learning Protein Folding Generalize to Broader Reasoning?",
      "abstract": "Large language models rely heavily on human text, which often conveys surface answers rather than the spatial and structural logic behind them. Protein folding is a natural testbed, because one solved structure yields thousands of exactly checkable spatial and topological statements. We ask: can learning to fold proteins teach general models reusable reasoning capabilities? To answer this, we build FoldingCorpus, a protein-derived question-answer dataset, and Fold2Reason, a recipe that post-trains on it through two complementary signals: discrete structural answers predicted via the model's native language head, and continuous 3D geometry decoded from the same shared representations. On FoldBench, Fold2Reason achieves structure prediction scores 2.7 to 3.5 times those of Qwen3.5-9B. Beyond protein structure prediction, it improves performance on all 10 benchmarks spanning spatial, graph, scientific, and general reasoning, raising macro-average accuracy from 45.09% to 48.33% (+3.23 pp), with positive gains on all 10 benchmarks, while matched controls built from random, synthetic, and shuffled structure yield substantially smaller or negative gains. Our work shows that non-linguistic, structure-dense scientific data can systematically improve broad reasoning in language models, making a solved scientific problem a practical source of post-training supervision.",
      "upvotes": 98,
      "github_stars": 3,
      "github_repo": "https://github.com/GENTEL-lab/Fold2Reason",
      "project_page": "",
      "comments": 4,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2609.38879",
      "arxiv_url": "https://arxiv.org/abs/2609.38879",
      "title_ja": "タンパク質折り畳みの学習は広範な推論へ汎用化するか？",
      "summary_ja": "空間構造の論理を学ぶためタンパク質データを活用。テキストと3D幾何情報を同時に学習することで、構造理解だけでなく数学や物理などの一般的な推論能力が向上。"
    },
    {
      "id": "2609.37226",
      "title": "Follow the Entities: A Corpus Map for Agentic Search",
      "abstract": "Answering questions and completing tasks over large document collections often requires connecting evidence spread across multiple documents, such as a project's approval recorded in one, its requirements in another, and its latest status in a third. Recent LLM agents approach this by iteratively searching the full corpus rather than reading only a fixed set of top-ranked documents. However, when the corpus is exposed only as a flat collection of files, a relevant document gives no indication of how it relates to others, so the agent must rediscover these relationships for every query, often missing complementary evidence while simultaneously consuming substantial additional tokens. To address this, we introduce CorpusMap, a navigation layer that organizes the corpus around its recurring entities, which are identifiable from the documents themselves and can link a single document to many others across sources. Specifically, CorpusMap represents each recurring entity as an Entity Page that aggregates information about it and links to every document that refers to it, forming a graph between entities and documents that the agent can traverse to gather otherwise disconnected evidence. Moreover, since CorpusMap is constructed offline by resolving mentions of the same entity across documents, its links are shared across queries rather than rediscovered repeatedly at inference time. Using 7 different models with 3 benchmark datasets, we show that CorpusMap improves both evidence discovery and answer quality over raw-corpus agentic search while using fewer tokens on average, and further outperforms 4 alternative navigation layers, suggesting that entities serve as effective anchors for navigating large document collections.",
      "upvotes": 98,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2609.37226",
      "arxiv_url": "https://arxiv.org/abs/2609.37226",
      "title_ja": "エンティティを追え：エージェント型検索のためのコーパスマップ",
      "summary_ja": "大量文書間の関係を事前にマップ化。エージェントが関連文書を個別に再発見する無駄を省き、エンティティに基づき文書間を横断することで、検索効率と回答精度を大幅改善。"
    },
    {
      "id": "2610.00314",
      "title": "Predictive Credit: Measuring What Scientific Explanations Add to Experimental Forecasts",
      "abstract": "Research agents explain planned experiments. We measure predictive credit with paired forecasts sharing an intervention, forecaster, and outcome while varying description, matched explanation, and donor context. Five checks track commitment, delivery, predictive gain, alignment, and known-signal uptake. Across 336 prospective states in controlled learning, 12 Tox21 endpoints, and 24 OpenML tasks, v5's frozen credit decision was inconclusive. Tox21's preregistered ROC AUC interval-score harm test was unmet (D-M=-.0026, 95 percent interval [-.0174, .0104]); OpenML's joint formation, point-equivalence, and repeatability rule was unmet. Matched point-accuracy gains over description remained unconfirmed, and Tox21/OpenML seed-donor intervals spanned zero. Under requested DeepSeek V4 Pro, matched and donor cards reduced secondary Tox21 drift by 64.5 and 59.1 percent. A DeepSeek V4 Flash replay raised matched point MAE from .01823 to .02020 and missed matched-donor interval-score equivalence. OpenML full-card assignment widened nominal 80 percent intervals by 21 percent, with 49.3 percent coverage versus 51.4 percent for description and content in 66/144 cards. Direct-text Flash delivered all 144 notes without detectable matched point-accuracy gain. A researcher-authored mechanism positive control lowered point MAE by 2.60 percentage points versus description. The protocol measures predictive credit for research-agent benchmarks and scientific forecasting; natural-explanation credit remained unconfirmed at the tested donor resolutions.",
      "upvotes": 97,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.00314",
      "arxiv_url": "https://arxiv.org/abs/2610.00314",
      "title_ja": "予測クレジット：科学的説明が実験予測に加える価値の測定",
      "summary_ja": "AIによる科学的説明が予測精度に寄与しているかを厳密に測定。複数の予測タスクにおいて、現状のモデルでは説明が予測の向上に必ずしも直結していないことを報告。"
    },
    {
      "id": "2609.36601",
      "title": "SAKI: Maximal-Coupling-Routed Teacher Supervision for On-Policy Distillation",
      "abstract": "On-policy distillation (OPD) reduces train-test state mismatch by training a student on its own generated trajectories, but weak students may visit teacher-misaligned prefixes where supervision is less representative. We introduce SAKI (Supervision Allocation with KL-constrained Interpolation), which combines a KL-constrained teacher-guided rollout with maximal coupling and reuses realized accept/correction events to route token-level supervision. Accepted positions retain sampled-token reverse-KL supervision, while correction positions receive direct supervision on the teacher's highest-probability token. Under maximal coupling, the correction probability is exactly TV(p_t, q_t), so the same trust-region radius controls rollout deviation and upper-bounds intervention and specialized-supervision frequency. We further implement an engine-resident speculative verifier that preserves the exact-q trajectory distribution and coupling semantics while improving matched-workload rollout throughput by 4.22x. Across seven mathematical reasoning benchmarks, SAKI improves the matched teacher-guided baseline in Mean@8 and Pass@8 for both 1.7B and 0.6B students. Placement controls and fixed-prefix analysis further support correction-triggered routing as a conflict-adaptive supervision signal.",
      "upvotes": 94,
      "github_stars": 34,
      "github_repo": "https://github.com/Miteto-sudo/SAKI",
      "project_page": "",
      "comments": 1,
      "org": "meituan",
      "url": "https://huggingface.co/papers/2609.36601",
      "arxiv_url": "https://arxiv.org/abs/2609.36601",
      "title_ja": "SAKI：方策内蒸留のための最大結合ルーティングによる教師指導",
      "summary_ja": "生徒の生成が教師と一致する場合は逆KL、不一致の場合は直接教師の正解を指導するように動的に切り替え。学習の不安定さを抑え、効率的な知識蒸留を実現。"
    }
  ],
  "labs": [
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:31+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決・新興の課題",
      "summary_ja": "AIエージェントの文脈的な視点から、プライバシーとセキュリティに関する教育革新と課題を考察する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Vals AI Deploys 90 Claude Agents to Hunt Room-Temperature Magnetic Semiconductors",
      "summary": "A swarm of Claude Opus 5.5 agents ran hundreds of DFT simulations and surfaced two candidate magnets that could unlock faster, denser spintronic memory.",
      "url": "https://alphasignal.ai/news/vals-ai-deploys-90-claude-agents-to-hunt-room-temperature-magnetic",
      "published": "2026-10-06T05:21:07+09:00",
      "title_ja": "Vals AI、90基のClaudeエージェントを室温磁性半導体の探索に投入",
      "summary_ja": "Claude Opus 5.5による大規模シミュレーションで、次世代メモリを実現し得る磁石候補を2つ特定。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Reflection AI's Beam Challenges DeepSeek With 501B Open-Weight Reasoning Model",
      "summary": "Reflection AI's first open-weight model is a 501B Mixture-of-Experts system that reasons 3-4x more efficiently than comparable open models.",
      "url": "https://alphasignal.ai/news/reflection-ai-s-beam-challenges-deepseek-with-501b-open-weight-reasoning-model",
      "published": "2026-10-06T04:11:09+09:00",
      "title_ja": "Reflection AI、DeepSeekに対抗する501Bオープン推論モデル「Beam」を公開",
      "summary_ja": "既存のオープンモデルより3〜4倍効率的に推論可能な、501BパラメータのMoEシステムを開発。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Lipflow Lets Mac Users Silently Mouth Words Into Any App",
      "summary": "A new open-source Mac app reads your lips through the webcam so you can silently dictate text at your cursor, no mic required.",
      "url": "https://alphasignal.ai/news/lipflow-lets-mac-users-silently-mouth-words-into-any-app",
      "published": "2026-10-06T03:43:44+09:00",
      "title_ja": "Lipflow、Macユーザーが声を出さず口の動きだけで文字入力可能に",
      "summary_ja": "ウェブカメラで唇の動きを読み取り、マイクを使わず無音でテキストを代筆できるMac用アプリ。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Ships textGrain to Invisibly Watermark AI Text for EU Compliance",
      "summary": "OpenAI is rolling out textGrain, an invisible statistical watermark for ChatGPT and Codex output in the EU, with opt-in API access worldwide.",
      "url": "https://alphasignal.ai/news/openai-ships-textgrain-to-invisibly-watermark-ai-text-for-eu-compliance",
      "published": "2026-10-06T02:42:56+09:00",
      "title_ja": "OpenAI、EUの規制遵守に向けAIテキスト電子透かし「textGrain」を導入",
      "summary_ja": "ChatGPT等の出力に不可視の統計的透かしを付与。EUで展開し、世界的にAPIアクセスも提供。"
    },
    {
      "lab": "AlphaSignal",
      "title": "AutoTrust's JEV-27B-VL Beats GPT-4o and Scores Images in One Pass",
      "summary": "A vision-capable 27B decision model that returns calibrated probabilities in one forward pass, matching collaborative filtering with zero training data.",
      "url": "https://alphasignal.ai/news/autotrust-s-jev-27b-vl-beats-gpt-4o-and-scores-images-in-one-pass",
      "published": "2026-10-06T00:02:02+09:00",
      "title_ja": "AutoTrustのJEV-27B-VL、GPT-4oを凌駕し画像スコアリングを高速化",
      "summary_ja": "追加学習なしで、画像判定の確率を1回の計算パスで算出できる27Bの意思決定特化型視覚モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Our approach to EU text provenance rules",
      "summary": "How OpenAI is approaching text watermarking under EU rules. Learn where watermarks apply, how detection works, and why access starts with researchers.",
      "url": "https://openai.com/index/eu-text-provenance",
      "published": "2026-10-06T00:00:00+09:00",
      "title_ja": "EUのテキスト出所規則に対するOpenAIのアプローチ",
      "summary_ja": "EU規制に基づくテキスト透かしの適用範囲や検出の仕組み、研究者への優先提供について解説。"
    },
    {
      "lab": "OpenAI",
      "title": "Building advertising for the way people use AI",
      "summary": "OpenAI introduces a new visual ad format in ChatGPT and expands measurement tools, attribution partnerships, and brand suitability for advertisers.",
      "url": "https://openai.com/index/new-chatgpt-ads-format-and-measurement",
      "published": "2026-10-05T19:00:00+09:00",
      "title_ja": "AI利用の進化に合わせた広告モデルの構築",
      "summary_ja": "ChatGPTへの新しい視覚的広告フォーマットの導入や、広告主向けの計測・帰属ツールの拡充。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Gender-Classifier-Mini Hits 97.2% Accuracy and 778K Monthly Downloads",
      "summary": "A compact SigLIP2 fine-tune hits 97.2% accuracy on binary gender classification, pulling 778K downloads with a 93M-parameter footprint.",
      "url": "https://alphasignal.ai/news/gender-classifier-mini-hits-97-2-accuracy-and-778k-monthly-downloads",
      "published": "2026-10-05T18:29:43+09:00",
      "title_ja": "Gender-Classifier-Mini、97.2%の精度と月間77.8万ダウンロードを達成",
      "summary_ja": "わずか93Mパラメータという軽量設計ながら、高精度な性別分類を実現したSigLIP2微調整モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "パーソナル・センシング・システムにおける存在論的境界の交渉",
      "summary_ja": "ユーザー主導でML学習を行えるプロトタイプを通じ、システム設計が人の想像力をどう形作るか調査。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Agent Said It Was Done. The Database Disagreed.",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox",
      "published": "2026-10-04T07:56:48+09:00",
      "title_ja": "エージェントは完了と言ったが、データベースは同意しなかった",
      "summary_ja": "（本文詳細なし）エージェントの実行報告と実際のデータベース状態の不一致に関する考察。"
    },
    {
      "lab": "OpenAI",
      "title": "A model guide for the GPT-6 family",
      "summary": "Learn how startups can choose GPT-6 models, tune reasoning effort, improve prompts and skills, coordinate tools, and prepare workflows for production.",
      "url": "https://openai.com/index/practical-guide-building-gpt-6",
      "published": "2026-10-03T01:15:00+09:00",
      "title_ja": "GPT-6ファミリー向けモデル活用ガイド",
      "summary_ja": "スタートアップがGPT-6を選択し、推論の調整やワークフローの構築を行うための実践的ガイド。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open-sourcing AstaBrief, the fast report-generation model in Asta",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/astabrief",
      "published": "2026-10-03T00:19:50+09:00",
      "title_ja": "高速レポート生成モデル「AstaBrief」をオープンソース化",
      "summary_ja": "Asta内で利用されている、高速なレポート作成を可能にするモデル「AstaBrief」を公開。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能なプライバシー保護学習に向けて",
      "summary_ja": "モバイルシステムにおいて、プライバシーを数学的に保証しつつ分散データから学習する手法の研究。"
    },
    {
      "lab": "Hugging Face",
      "title": "AutoSynthData: Generating Training Data for Enterprise Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/ServiceNow-AI/autosynthdata",
      "published": "2026-10-02T13:01:31+09:00",
      "title_ja": "AutoSynthData：企業用エージェント向けトレーニングデータの生成",
      "summary_ja": "（本文詳細なし）エンタープライズ向けAIエージェントの学習に用いるデータを自動生成する手法。"
    },
    {
      "lab": "OpenAI",
      "title": "Chatham scales its capital markets expertise with OpenAI",
      "summary": "Chatham Financial uses Codex and GPT-5.6 to build technology and redesign workflows, cutting trade validation from 30 minutes to under 4.",
      "url": "https://openai.com/index/chatham-financial",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "Chatham、OpenAI製品で資本市場の専門性を拡大",
      "summary_ja": "CodexとGPT-5.6を活用し、取引の検証作業を30分から4分未満へと大幅に短縮。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "言語識別が多言語音声モデルの言語学習能力を向上させる",
      "summary_ja": "事前学習中に言語を区別する能力を強化することで、多言語モデルの性能格差を縮小し精度を向上。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "拡散モデルにおける信頼性の限界",
      "summary_ja": "トークン間の依存関係が拡散プロセスの学習分布に与える影響と、現在のサンプリング手法の限界を解明。"
    },
    {
      "lab": "OpenAI",
      "title": "The eternal complement",
      "summary": "Advanced AI may matter most for the routine work behind breakthrough ideas. Explore why execution could shape the next economy and the pace of progress.",
      "url": "https://openai.com/index/the-eternal-complement",
      "published": "2026-10-02T02:00:00+09:00",
      "title_ja": "永遠の補完：ルーチンワークを支えるAI",
      "summary_ja": "高度なAIが日常的な実行業務を担うことが、将来の経済や進歩のペースを形作る可能性を探る。"
    },
    {
      "lab": "OpenAI",
      "title": "How Albertsons Companies is reimagining retail from the inside out",
      "summary": "Albertsons Cos. is using ChatGPT Enterprise and the OpenAI API to help teams work faster and make grocery shopping easier for millions of customers.",
      "url": "https://openai.com/index/albertsons-reimagining-retail",
      "published": "2026-10-02T01:00:00+09:00",
      "title_ja": "Albertsons Companiesが再定義する小売の形",
      "summary_ja": "ChatGPT Enterprise等を活用し、チームの業務高速化と数百万人の顧客の買い物体験向上を実現。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的MLエンジニアリングに強力なエージェント用フレームワークは必要か？",
      "summary_ja": "複雑な管理機構より、環境への直接アクセスを持つシンプルなコーディングエージェントの有用性を検証。"
    },
    {
      "lab": "Apple ML",
      "title": "RLTL;DR: Self-Improvement by Internalizing Self-Generated Feedback",
      "summary": "The common paradigm of reinforcement learning with verifiable rewards (RLVR) is to let agents make multiple attempts at a task, and optimize towards the successful ones. This becomes problematic in the realms of self-improvement, where tasks are so difficult that the agent has a low or even no chance of success, and where there are no teacher models or example solutions to distill from. In this paper, we introduce RLTL;DR. After each failed attempt, we show the policy the verifier outputs and let it write its own feedback, in the form of a single TL;DR insight. The next rollout is conditioned…",
      "url": "https://machinelearning.apple.com/research/rltl-dr-self-improvement",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "RLTL;DR：自己生成フィードバックの内面化による自己改善",
      "summary_ja": "失敗から独自の「TL;DR（要約）」教訓を書き出し、それを次回の試行に活かす新しい強化学習手法。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "（本文詳細なし）次世代の最先端知能モデル「Gemini 4 Argon」の登場を予告。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing SynthID Bio",
      "summary": "Proof of concept for watermarking AI-generated proteins while preserving biological function.",
      "url": "https://deepmind.google/blog/introducing-synthid-bio/",
      "published": "2026-10-01T00:03:07+09:00",
      "title_ja": "SynthID Bioの紹介",
      "summary_ja": "生物学的機能を維持したまま、AIが生成したタンパク質に電子透かしを埋め込む技術の概念実証。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Effectiveness-Fluency Trade-Off in LLM Conditioning: A Systematic Study",
      "summary": "Controlling the output of Large Language Models (LLMs) is a central challenge for their reliable deployment, yet a clear understanding of the involved trade-offs remains elusive. Current approaches to conditioning are often evaluated with a narrow focus on their effectiveness at injecting or removing a target concept, neglecting generation quality. We systematically investigate a range of conditioning methods in both injection and removal scenarios. We find that efficient steering methods frequently achieve conditioning at a steep cost to fluency. Furthermore, we identify a critical yet…",
      "url": "https://machinelearning.apple.com/research/effectiveness-fluency-llm-conditioning",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "LLM条件付けにおける有効性と流暢さのトレードオフ：系統的研究",
      "summary_ja": "出力を制御する手法が、特定の概念の導入・削除には有効でも、生成の自然さを損なう実態を調査。"
    },
    {
      "lab": "Hugging Face",
      "title": "Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning",
      "summary": "",
      "url": "https://huggingface.co/blog/open-tts-leaderboard",
      "published": "2026-09-30T09:00:00+09:00",
      "title_ja": "Open TTS Leaderboard：多言語音声合成と声のクローンの拡張可能な評価",
      "summary_ja": "（本文詳細なし）多言語TTSや音声クローン技術の性能をスケーラブルに比較・評価する掲示板。"
    },
    {
      "lab": "Google Research",
      "title": "How Diffusion Controller unifies and simplifies AI image generation",
      "summary": "Algorithms & Theory",
      "url": "https://research.google/blog/how-diffusion-controller-unifies-and-simplifies-ai-image-generation/",
      "published": "2026-09-30T03:38:27+09:00",
      "title_ja": "Diffusion ControllerがいかにAI画像生成を統合・簡素化するか",
      "summary_ja": "アルゴリズムと理論に基づき、画像生成プロセスを一元化し効率化するDiffusion Controllerの仕組み。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-tabular",
      "published": "2026-09-30T00:30:38+09:00",
      "title_ja": "NVIDIA Kumo Tabularが表データ予測の精度と効率で新境地を開拓",
      "summary_ja": "（本文詳細なし）表形式データの予測において、高い精度と処理効率を両立する新しい技術。"
    },
    {
      "lab": "Hugging Face",
      "title": "Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents",
      "summary": "",
      "url": "https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source",
      "published": "2026-09-29T22:07:00+09:00",
      "title_ja": "事実だけでなく出所を正しく：MCPエージェントのためのソース意識検証",
      "summary_ja": "（本文詳細なし）AIエージェントが情報の正しさだけでなく、その根拠となる情報の出所を正確に特定する技術。"
    },
    {
      "lab": "Google Research",
      "title": "Automating coherent long-form video generation",
      "summary": "Generative AI",
      "url": "https://research.google/blog/coherent-long-form-video-generation/",
      "published": "2026-09-25T04:40:00+09:00",
      "title_ja": "一貫性のある長尺動画生成の自動化",
      "summary_ja": "生成AIを用いて、一貫性を保ったまま長い時間の動画を自動で作り出すための技術。"
    }
  ]
};
