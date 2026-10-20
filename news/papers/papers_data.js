window.papersData = {
  "updated_at": "2026-10-20 09:57 JST",
  "arxiv": [
    {
      "id": "2610.23344",
      "title": "Language Models Learn to Improve Language Models",
      "url": "https://arxiv.org/abs/2610.23344",
      "pdf": "https://arxiv.org/pdf/2610.23344",
      "authors": [
        "Minhua Lin",
        "Zijun Wang",
        "Zewen Liu",
        "Zhaotian Weng",
        "Bing He",
        "Zhan Shi"
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
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "LM2LM enables Qwen3.8-27B to outperform GPT-6-sol, even when GPT-6-sol is given 300 real experimental records in context",
      "signals": [],
      "headline": "実環境のフィードバックから言語モデル改善案の生成を強化学習で訓練するLM2LM",
      "what": "LLMの性能を向上させる提案を生成するためのRLフレームワークで、Research World Model（RWM）を報酬モデルとして使用します。実際の実験記録に基づいてRWMが報酬を予測し、定期的に実機検証の結果をフィードバックすることで報酬の信頼性を維持します。",
      "enables": "Qwen3.8-27Bをベースにしたモデルが、データ生成コストを33%抑えつつ、コンテキスト内に300件の実験記録を持つGPT-6-solを上回る性能を示しました。",
      "why_it_matters": "AI研究の自動化において、高コストな実トレーニングを代替する効率的かつ信頼性の高いセルフリサーチサイクルを可能にします。",
      "tags": [
        "LLM",
        "強化学習",
        "AI自動化"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23125",
      "title": "Reliability-Consistent Appearance Modeling for RGB-Infrared Multi-Object Tracking",
      "url": "https://arxiv.org/abs/2610.23125",
      "pdf": "https://arxiv.org/pdf/2610.23125",
      "authors": [
        "Bingyang Wang",
        "Jiazuo Yu",
        "Lu Zhang",
        "Lihe Zhang",
        "Huchuan Lu",
        "You He"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 6 figures. Submitted to IEEE Transactions on Multimedia",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "RCA-MOT sets new SOTA results on VT-MOT and UniRTL, improving the previous best HOTA by 5.402/6.075 points and IDF1 by 11.549/12.789 points, respectively",
      "signals": [],
      "headline": "RGB・赤外線マルチオブジェクトトラッキングにおける信頼性ベースの外観モデリング手法RCA-MOT",
      "what": "RGBと赤外線のモダリティを統合せず、個別および融合したアイデンティティ表現を保持する信頼性一貫型外観モデリングフレームワークです。学習不要の推定器により各ブランチの信頼性を算出し、候補のキャリブレーションや外観メモリの更新強度を動的に制御します。",
      "enables": "VT-MOTおよびUniRTLデータセットにおいて、HOTAを5.402/6.075ポイント、IDF1を11.549/12.789ポイント改善し、新たなState-of-the-art（SOTA）を達成しました。",
      "why_it_matters": "従来のモダリティを圧縮する手法と異なり、一方が劣化しても信頼性の高い情報を選択的に利用できるため、信頼性の低い証拠による関連付けの歪みやメモリ汚染を防げます。",
      "tags": [
        "コンピュータビジョン",
        "マルチオブジェクトトラッキング",
        "マルチモーダル学習"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23203",
      "title": "SimpleVLN: Towards Simple and Frontier Vision-Language Navigation",
      "url": "https://arxiv.org/abs/2610.23203",
      "pdf": "https://arxiv.org/pdf/2610.23203",
      "authors": [
        "Lingyi Hong",
        "Weiren Cai",
        "Jiayu Chen",
        "Xinyu Zhou",
        "Bailin He",
        "Yunfei Guo"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "homepage: https://simplevln.github.io/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SimpleVLN achieves 76.7% and 80.1% success rates on the R2R-CE and RxR-CE splits, respectively, substantially outperforming existing methods.",
      "signals": [],
      "headline": "タスク特化設計なしでマルチモーダルLLMの視覚言語ナビゲーション能力を引き出すSimpleVLN",
      "what": "マルチモーダルLLM（MLLM）の構造を維持したまま、固定予算のグローバル・ローカルメモリとアクションチャンクを活用するナビゲーションフレームワークです。模倣学習、DAgger、強化学習を組み合わせたプログレッシブな最適化パイプラインにより、ネイティブなMLLMの能力を最大化します。",
      "enables": "R2R-CEで76.7%、RxR-CEで80.1%の成功率を記録し、既存手法を大幅に上回る性能を多様なMLLMバックボーンで実証しました。",
      "why_it_matters": "複雑なタスク固有アーキテクチャを追加することなく、データの構成と学習プロセスの工夫だけで高度なナビゲーションが可能であることを示しています。",
      "tags": [
        "ロボティクス",
        "MLLM",
        "視覚言語ナビゲーション"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.22435",
      "title": "TRACE: Transformer Residual Activation Codebook Encoding for Communication-efficient Distributed Edge Inference",
      "url": "https://arxiv.org/abs/2610.22435",
      "pdf": "https://arxiv.org/pdf/2610.22435",
      "authors": [
        "Muhammad Azlan Qazi",
        "Alexandros Iosifidis",
        "Qi Zhang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.DC"
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
      "star_quote": "Trace achieves up to 1.89% higher accuracy and up to 1.27x end-to-end inference speedup",
      "signals": [],
      "headline": "分散エッジ推論の通信ボトルネックを解消する残差アクティベーションのコードブック符号化技術TRACE",
      "what": "Transformer層の残差部分にベクトル量子化（VQ）を導入し、Key/Value表現をあらかじめコードブック化してインデックスで転送する手法です。受信側は計算を待たずにテーブル参照でKVを復元できるため、通信と計算のオーバーラップが可能になります。",
      "enables": "ViT-Baseなどの実験において、既存のVQ手法より最大1.89%高い精度と1.27倍の推論高速化を達成し、非圧縮時と比較して通信量を最大22,624倍削減しました。",
      "why_it_matters": "通信帯域が限られるエッジデバイス間での分散推論において、通信と計算の直列的な依存関係を解消し、リアルタイム性を向上させます。",
      "tags": [
        "分散推論",
        "Transformer",
        "エッジコンピューティング"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.22439",
      "title": "Sparse Autoencoders Can Induce Local Geometry for Mitigating Catastrophic Forgetting",
      "url": "https://arxiv.org/abs/2610.22439",
      "pdf": "https://arxiv.org/pdf/2610.22439",
      "authors": [
        "Kamil Faber",
        "Katarzyna Filus",
        "{\\L}ukasz Pawela"
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
        "sota"
      ],
      "star_quote": "accuracy gains of 12.15, 4.79, and 3.22 percentage points over the strongest conventional baseline",
      "signals": [],
      "headline": "疎な自己符号化器を用いて表現のドリフトを制約し破滅的忘却を抑制する手法SAGA",
      "what": "タスク境界ごとに訓練されたSparse Autoencoder（SAE）から、表現のドリフトに対する局所的な低ランク制約を生成する継続学習手法です。エンコーダのヤコビアンから得られる特異ベクトルを用いて、過去の情報を損なう表現変化のみをペナルティ化します。",
      "enables": "ViT-B/16を用いたベンチマークで、CIFAR-100において12.15ポイント、ImageNet-Rにおいて3.22ポイントの精度向上を達成し、忘却を最小限に抑えました。",
      "why_it_matters": "可塑性を維持しつつ、どの方向の表現変化を抑制すべきかという課題に対し、SAEによる幾何学的な制約が有効であることを示しました。",
      "tags": [
        "継続学習",
        "Sparse Autoencoder",
        "深層学習"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23239",
      "title": "Response-Informed Value Estimation for Cost-Aware Multi-Turn LLM Routing",
      "url": "https://arxiv.org/abs/2610.23239",
      "pdf": "https://arxiv.org/pdf/2610.23239",
      "authors": [
        "Haotian Yan",
        "Jiaqi Liu",
        "Bingyi Jing",
        "Tianjun Yao"
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
      "star_quote": "Conditioning on the response turns response-induced return variation from residual noise into an observed covariate",
      "signals": [],
      "headline": "マルチターンLLMルーティングのコスト効率を向上させる応答情報活用型価値推定RIVET",
      "what": "推論時には利用できない「生成された応答」の情報を、訓練時のみ活用してモデルの価値を推定するルーティング手法です。共有表現の上に、デプロイ用のルーティング推定器と、応答を観測して分散を抑制する応答情報推定器の2つを共同で学習させます。",
      "enables": "MINTベンチマークにおいて、最強のベースラインよりも少ないコスト（74.7%減）で、より多くのタスクを解決することが可能になりました。",
      "why_it_matters": "事後的な結果しか得られないマルチターン環境において、中間ステップの応答を共変量として利用することで、推定精度の向上とコスト最適化を両立しています。",
      "tags": [
        "LLMルーティング",
        "価値推定",
        "コスト最適化"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23826",
      "title": "Self-Building Labs",
      "url": "https://arxiv.org/abs/2610.23826",
      "pdf": "https://arxiv.org/pdf/2610.23826",
      "authors": [
        "Jiaru Bai",
        "Yuchi Zhao",
        "Han Hao",
        "Miroslav Bogdanovic",
        "Yang Cao",
        "Varinia Bernales"
      ],
      "categories": [
        "cs.AI",
        "cs.MA",
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
      "star_quote": "designs, configures, and operates its own laboratory setup given a high-level scientific goal.",
      "signals": [],
      "headline": "科学的目標から実験環境の構成・ロボット操作までを自律的に設計・実行するSelf-building Labs",
      "what": "高レベルな科学的目標が与えられると、ラボのレイアウト、デジタルツイン、ロボットのスキル、実験ワークフローを自律的に構築するエージェントシステムです。既存の固定的な自動化ラボと異なり、空き部屋からでも必要な機能をゼロから構築することを目指します。",
      "enables": "量子ドット合成実験などの実世界タスクにおいて、複数のロボットが協力してラボを構築・運用できることを実証しました。",
      "why_it_matters": "研究者が装置のプログラミングや物理的な設定に費やす時間を削減し、科学的発見の自動化をより柔軟かつスケーラブルにします。",
      "tags": [
        "AIエージェント",
        "ロボティクス",
        "科学的発見"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "url": "https://arxiv.org/abs/2610.23479",
      "pdf": "https://arxiv.org/pdf/2610.23479",
      "authors": [
        "Hongcheng Gao",
        "Alex Zhou",
        "Jay Zhu",
        "Zelin Zheng",
        "Shijia Ge",
        "Xiping Li"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/HexaFuture/HexaShell",
      "hf_upvotes": 284,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲284"
      ],
      "headline": "コード生成VLMエージェントによるロボット操作の限界を探索する軽量フレームワークHexaShell",
      "what": "VLMエージェントがプログラムを生成・修正してロボットを制御するシステムで、失敗ログの分析から「ツール」と呼ばれる小規模なコードを作成し蓄積します。三角測量などの幾何学的な計算をツールに含めることで、観測から物体の位置関係を正確に把握します。",
      "enables": "RoboDojoの42タスクで成功率39.7%を達成し、新たなSOTAを記録しました。特に押し操作では92.5%の高い成功率を示しましたが、精密な挿入タスクなどは8.3%に留まるという限界も示されました。",
      "why_it_matters": "推論能力ではなく物理的な接触制御がVLMエージェントのボトルネックであることを特定し、今後の課題を明確にしています。",
      "tags": [
        "ロボティクス",
        "VLMエージェント",
        "コード生成"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "url": "https://arxiv.org/abs/2610.22471",
      "pdf": "https://arxiv.org/pdf/2610.22471",
      "authors": [
        "SenseNova",
        "Joint Research Team",
        ":",
        "Zhongang Cai",
        "Ziang Cao",
        "Tailai Chen"
      ],
      "categories": [
        "cs.RO",
        "cs.CV",
        "cs.LG",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Homepage: https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "hf_upvotes": 236,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲236"
      ],
      "headline": "GPT-6-Astraによる汎用的な身体知能の可能性と実用化への課題の評価",
      "what": "GPT-6-Astraを、人型ロボット、多指ハンド、移動プラットフォームなど12の広範なベンチマークで評価した技術報告書です。In-context learning（ICL）を用いた操作能力や、高レベル推論器（System 2）と低レベル制御器（System 1）の連携の有効性を分析しています。",
      "enables": "身体化されたタスクにおいて前例のないパフォーマンスを達成し、タスク特化型モデルを構築する従来のパラダイムを打破する能力を示しました。",
      "why_it_matters": "GPT-6-Astraが身体的知能の閾値を超えつつあることを示唆する一方で、実世界デプロイにおけるデータ収集コストや実時間制約などの未解決な課題を提示しています。",
      "tags": [
        "身体知能",
        "ロボティクス",
        "GPT-6-Astra"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23121",
      "title": "Scene-Designer: Learning Design Intelligence for Agentic 3D Scene Generation",
      "url": "https://arxiv.org/abs/2610.23121",
      "pdf": "https://arxiv.org/pdf/2610.23121",
      "authors": [
        "Xuanyu Liu",
        "Hongyan Feng",
        "Miao Pan",
        "Sunlai Chen",
        "Lizhou Liang",
        "Bing Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 49,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲49"
      ],
      "headline": "設計と批評の相互学習により高品質な3Dシーンを生成するエージェントScene-Designer",
      "what": "3D室内シーンの設計（Observation-Thought-Action）と批評（Observation-Thought-Critic）を学ぶエージェントフレームワークです。批判モデルのガイドを用いたGRPO（Scene-GRPO）により、物理的妥当性や機能性を備えたレイアウト生成を最適化します。",
      "enables": "物理的整合性、機能的正しさ、レイアウトのコヒーレンスにおいて、汎用的なモデルを大幅に上回る性能を実現しました。",
      "why_it_matters": "単なる静的なシーンの学習ではなく、設計プロセスと批評プロセスの相互作用によって、ドメイン特化型の「設計インテリジェンス」を獲得できることを示しました。",
      "tags": [
        "3Dシーン生成",
        "AIエージェント",
        "強化学習"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23181",
      "title": "Tree-Aware Posterior Distillation for Long-Horizon Agentic Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.23181",
      "pdf": "https://arxiv.org/pdf/2610.23181",
      "authors": [
        "Heming Zou",
        "Qi Wang",
        "Yixiu Mao",
        "Yun Qu",
        "Yuyi Guo",
        "Zeyuan Liu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 32,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲32"
      ],
      "headline": "長期間の対話タスクにおける疎な報酬課題を解決するTree-Aware Posterior Distillation",
      "what": "価値ネットワークを使用せずに、対話のターンごとにツリー状の継続パターンを生成し、最終報酬を各ターンに割り当てる強化学習フレームワークTreeOPSDです。固定されたターゲット分布に対する自己蒸留を行うことで、ポリシーのドリフトを抑制しながら学習を進めます。",
      "enables": "Qwen3-30Bにおいて、Deep Research設定での平均精度をGRPOと比較して4.97ポイント向上させるなど、長期間の推論タスクで高い性能を示しました。",
      "why_it_matters": "学習の複雑さを増大させる批判モデル（Critic）やステップレベルのアノテーションなしに、長期スパンのクレジット割り当てと安定した学習を可能にします。",
      "tags": [
        "強化学習",
        "LLM",
        "クレジット割り当て"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.22992",
      "title": "GOLD: Geometric Optimized Latent Diffusion for Structure-Aware RNA Inverse Folding",
      "url": "https://arxiv.org/abs/2610.22992",
      "pdf": "https://arxiv.org/pdf/2610.22992",
      "authors": [
        "Qi Si",
        "Xuyang Liu",
        "Penglei Wang",
        "Shuo Su",
        "Limei Han",
        "Mengzhu Li"
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
      "comment": "Accept as a Spotlight Paper in NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "RNA配列と3D構造を統一潜在空間で共拡散させる構造特化型生成モデルGOLD",
      "what": "RNAの離散配列と連続的なサイドチェーンの幾何形状を、GeoVAEを用いて単一の滑らかな潜在マニフォールドに投影する生成モデルです。サンプリング時に物理的制約から計算された勾配を用いてフィードバックを行う、勾配誘導型サンプリング機構を備えています。",
      "enables": "配列の回復率、二次構造の妥当性、および3D折り畳み性能の指標において、従来手法を凌駕するState-of-the-artの性能を達成しました。",
      "why_it_matters": "1次元配列だけでなく、構造安定性に不可欠な3次元のサイドチェーン形状を同時に最適化することで、より実用的なRNA設計を可能にします。",
      "tags": [
        "バイオインフォマティクス",
        "拡散モデル",
        "RNA設計"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    },
    {
      "id": "2610.23157",
      "title": "Cross-Centaur: Modeling Individual Decision-Making Across Psychological Tasks with Language Models",
      "url": "https://arxiv.org/abs/2610.23157",
      "pdf": "https://arxiv.org/pdf/2610.23157",
      "authors": [
        "Hikaru Asano",
        "Hidezo Suganuma",
        "Ryutaro Mori",
        "Yukino Baba"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted to EMNLP 2026 (Main Conference, Oral Presentation)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "心理学タスクを通じて個人の意思決定特性を学習・予測するLLM、Cross-Centaur",
      "what": "複数の心理学実験にまたがる個人の行動データを集めたCross-Psych-101データセットで学習したLLMモデルです。特定の参加者の過去のタスク行動から、未知のタスクにおけるその個人の行動を予測します。",
      "enables": "既存のLLMやCentaurモデルを上回り、タスク間を跨いで個人の行動傾向（行動バイアスなど）を予測することに成功しました。",
      "why_it_matters": "集団平均的な傾向だけでなく、個人の行動の一貫性をモデル化できることを示しており、人間の意思決定の計算モデルとしてのLLMの可能性を広げます。",
      "tags": [
        "行動心理学",
        "LLM",
        "意思決定モデル"
      ],
      "fetched_at": "2026-10-20T09:57:49.145508+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "abstract": "Spatial intelligence lets an agent perceive and act in the physical world, and many of its judgments must be made at interaction rates: which spatial relation holds, how far an object is, or where to place it. Vision-language models (VLMs) produce these answers by free-form text generation, paying for autoregressive decoding and answer parsing even though the output space is compact: one of a few options, a scalar, or a 2D point. In light of this, we introduce MJev-Spatial, a System 1 multimodal decision model that tackles all three types of spatial understanding tasks within a unified classification framework. Specifically, MJev-Spatial treats each candidate as a class and scores it using the backbone's pretrained query and key projections, without adding parameters. The candidates are the given options for choice tasks, or value bins and image regions refined through coarse-to-fine classification for numerical and point prediction, respectively. At inference, each classification decision takes a single forward pass and generates no answer tokens. To train on heterogeneous spatial data efficiently, we supervise all coarse-to-fine stages jointly with teacher forcing in one forward pass, and combine this with length-aware global batching and cross-GPU load balancing, raising training throughput by 30.8% over the original batching strategy. Built on Qwen3.5-4B and trained on 12.3M question-answer pairs converted from existing spatial datasets, MJev-Spatial achieves the highest overall score (65.64%) among eight tested models, ranks first on seven of twelve benchmarks, and outperforms its unmodified autoregressive base model on all twelve, while running 2.5 times faster than the fastest autoregressive baseline and 5.6 times faster than the base model.",
      "upvotes": 542,
      "github_stars": 15,
      "github_repo": "https://github.com/Fr0zenCrane/MJev-Spatial",
      "project_page": "https://fr0zencrane.github.io/mjev-spatial-project/",
      "comments": 2,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.22276",
      "arxiv_url": "https://arxiv.org/abs/2610.22276",
      "title_ja": "MJev-Spatial: ネイティブアテンションマッチングによるシステム1空間知能",
      "summary_ja": "VLMの自由形式生成を廃し、分類フレームワークで空間関係や距離を高速に判定する。"
    },
    {
      "id": "2610.18773",
      "title": "Jeva: System One Models from First Principles",
      "abstract": "System one models enable direct, low-latency decision-making. Yet recent practice of predicting an answer from serialized text does not, by itself, respect the structure of a decision problem. We argue that current designs underemphasize four important structural requirements. (i) null-aware: Models should distinguish answer absence from uncertainty among candidates; (ii) permutation-invariant: Reordering alternatives should not change the decision; (iii) option-scalable: Growing candidate sets should not require redefining the output space; (iv) cacheable: Request-independent computation over recurring alternatives should be reusable across requests. We introduce Jeva, a decision-native architecture that addresses these requirements jointly. A shared encoder independently represents the request and each option, while a compact decision stack refines only the request state against immutable option memory. Symmetric aggregation yields permutation-equivariant probabilities; shared scoring accommodates variable-size candidate sets. A separate coverage estimate distinguishes answer absence from candidate competition, enabling explicit null outcomes. Request-independent option representations and layer projections support reuse across newly assembled sets. These mechanisms unify Choice, Noul, and Score outputs. Across evaluations, Jeva combines strong typed-decision performance with near-perfect null detection and no decision flips under any tested permutations. It scales to thousands of candidates and substantially reduces latency through cross-request reuse without changing decisions.",
      "upvotes": 417,
      "github_stars": 110,
      "github_repo": "https://github.com/LiQiiiii/Jeva",
      "project_page": "https://liqiiiii.github.io/Jeva/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.18773",
      "arxiv_url": "https://arxiv.org/abs/2610.18773",
      "title_ja": "Jeva: 第一原理に基づくシステム1モデル",
      "summary_ja": "構造的要件を満たし、低遅延かつ決定論的な意思決定を可能にする新しい意思決定アーキテクチャ。"
    },
    {
      "id": "2610.18615",
      "title": "VideoJev: System One Model for Video Understanding and Interaction",
      "abstract": "Visual agents must turn video observations into timely decisions to track progress and choose what to do next. Building on the emerging System One paradigm, we introduce VideoJev, a family of models that cast video understanding and interaction as structured decision tasks. We adapt pretrained multimodal large language models (MLLMs) by replacing autoregressive answer decoding with a shared head that scores temporal intervals and textual options against video evidence. These scores yield event spans or answer choices, unifying temporal grounding and multiple-choice video question answering. This combines the semantic flexibility of MLLMs with efficient decisions that agents can use directly. As an interaction unfolds, new goals and intermediate results prompt further queries about the same visual history. VideoJev therefore reuses visual computation through Cached inference for queries as they arrive and Joint inference for multiple queries in a single forward pass. Across three temporal grounding benchmarks, VideoJev-4B and VideoJev-35B-A3B improve mean mIoU over their backbones by 6.7 and 10.8 points, respectively, with measured inference speedups of 2.8-3.1times. On four video QA benchmarks, both achieve performance comparable to their backbones in Thinking mode, with measured inference speedups exceeding 100times. These results offer a unified, reusable decision interface for composing structured visual judgments into complex, open-ended workflows.",
      "upvotes": 363,
      "github_stars": 179,
      "github_repo": "https://github.com/MCG-NJU/VideoJev",
      "project_page": "https://mcg-nju.github.io/VideoJev/",
      "comments": 3,
      "org": "Multimedia Computing Group-Nanjing University",
      "url": "https://huggingface.co/papers/2610.18615",
      "arxiv_url": "https://arxiv.org/abs/2610.18615",
      "title_ja": "VideoJev: ビデオ理解と相互作用のためのシステム1モデル",
      "summary_ja": "MLLMを適応させ、ビデオの理解と相互作用を構造化された意思決定タスクとして統合・効率化する。"
    },
    {
      "id": "2610.20571",
      "title": "Any Time, Any Space: A World-State-Centric Framework for Agentic Video Generation",
      "abstract": "Long-form agentic video generation must turn a screenplay into shots that remain spatially and temporally consistent across nonconsecutive requests. Passing prompts or recent frames between shots does not provide a shared spatial frame for revisiting a scene or a time-indexed record for replaying an earlier event. We present Any Time, Any Space (ATAS), which compiles a screenplay into shot requests with explicit location, camera, and event-time references. Before generation, it retrieves relevant evidence from a scene memory of registered static geometry and an event memory of dynamic observations indexed by scene, event, and time. After generation, ATAS reconstructs and registers the clip. It updates memory only when review and state checks accept the observation, while film delivery remains independent of memory admission. Across four video generators, ATAS improves all reported cross-shot consistency measures and achieves the highest aggregate benchmark score for each backbone. It also outperforms the compared agents and 3D-guided methods on target-image spatial revisit, leads three event-recapture criteria, and receives the highest human ratings on all six criteria. The video results and code are available on our project page: https://lhmd.top/atas/.",
      "upvotes": 357,
      "github_stars": 289,
      "github_repo": "https://github.com/ziplab/ATAS",
      "project_page": "https://lhmd.top/atas/",
      "comments": 3,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.20571",
      "arxiv_url": "https://arxiv.org/abs/2610.20571",
      "title_ja": "Any Time, Any Space: エージェント型ビデオ生成のための世界状態中心フレームワーク",
      "summary_ja": "シーンとイベントのメモリを活用し、長尺ビデオ生成における空間的・時間的一貫性を確保する。"
    },
    {
      "id": "2610.20584",
      "title": "Player-1: Learning to Play from Synthetic Experience",
      "abstract": "Computer-use agents have demonstrated strong capabilities in interpreting screens and executing keyboard and mouse actions. However, games, with their visually rich worlds and diverse mechanics, remain challenging and offer a demanding next step toward general digital control. Current game-agent learning pipelines often rely on large-scale demonstrations with limited coverage of dynamic game states, while scalable environments for interactive training remain difficult to obtain. We introduce Player-1, a post-training framework for learning game control beyond demonstrations through synthetic experience. We extend the computer-use action space with relative pointer motion, sustained inputs, and composite actions. For supervised initialization, we fine-tune computer-use models on 6,044 curated gameplay trajectories that pair recorded actions with task instructions and visual reasoning. We construct Player-1-Gym, sixteen synthetic 2D and 3D environments designed around control demands shared across games. Programmatically verifiable rewards and randomized observations and control dynamics support multi-environment reinforcement learning with PPO. The resulting Player-1-9B and Player-1-35B-A3B improve MineDojo-300 success over their SFT policies by 27.8 and 17.7 percentage points, respectively. Player-1-9B reaches 38.33% success compared with 12.63% for the strongest evaluated baseline, with further gains over SFT on ViZDoom-10 and GameWorld. Further analyses show that broader synthetic environment coverage improves transfer, while the use of composite actions that combine multiple keyboard and mouse inputs increases during RL. We demonstrate that learning from synthetic experience substantially improves game control beyond supervised initialization, with gains that generalize beyond the RL training suite.",
      "upvotes": 342,
      "github_stars": 172,
      "github_repo": "https://github.com/TencentARC/Player-1",
      "project_page": "https://player-1-project.github.io/",
      "comments": 3,
      "org": "ARC Lab, Tencent",
      "url": "https://huggingface.co/papers/2610.20584",
      "arxiv_url": "https://arxiv.org/abs/2610.20584",
      "title_ja": "Player-1: 合成経験からのゲームプレイ学習",
      "summary_ja": "デモに頼らず合成経験を通じて、相対的なポインタ移動などを含む高度なゲーム操作を学習する。"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "abstract": "Computer use has reached a turning point: the focus is expanding from GUI-only interaction to systems that complete tasks on users' computers through visual and programmatic interfaces. We define a generalist computer-use agent (GCUA) as a system in which the model chooses how to observe, act, and organize its work across visual and programmatic interfaces. Yet frontier implementations, such as GPT-6 Astra's computer-use system, remain largely closed, limiting systematic study of their design. We introduce Open Generalist CUA (OpenGCUA), an ongoing project to develop and open the full stack for GCUAs with the community. This report presents the first release of OpenGCUA. Code execution is a key feature of our agent design: it lets intermediate results determine subsequent operations and enables models to apply their existing programming capabilities directly to computer interaction. We also propose harness-to-model decision transfer, moving selected observations and task-state decisions from fixed harness rules to the model. On OSWorld-v2, our full configuration improves task scores across all eight evaluated models, including GPT-6 Astra and Claude Opus 5, raising mean partial score by +19.6 points and reducing reported steps per task by an average of 53.0% relative to batched GUI-only execution. We release our implementation and prompts, evaluation trajectories from all eight models, and preliminary versions of a real-device harness and a cross-device SDK. The harness addresses real-device challenges not fully captured by benchmarks, while the SDK provides a common programming interface across computers, mobiles and browsers. Across four real macOS tasks under our real-device harness, selected Qwen3.8-Max runs use 19.4 times as many reported reasoning tokens as GPT-6 Astra, highlighting substantial differences between models in real-device execution efficiency.",
      "upvotes": 313,
      "github_stars": 186,
      "github_repo": "https://github.com/Tongyi-MAI/OpenGCUA",
      "project_page": "https://tongyi-mai.github.io/OpenGCUA/",
      "comments": 4,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.22200",
      "arxiv_url": "https://arxiv.org/abs/2610.22200",
      "title_ja": "OpenGCUA: 汎用コンピュータ利用のための完全オープンスタックに向けて",
      "summary_ja": "視覚とプログラムの両界面を操作する汎用エージェントの設計を研究するためのオープンな基盤。"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "abstract": "Agents built on vision language models (VLMs) now compete with learned policies on robot manipulation leaderboards. We ask how far a coding agent can go when it controls a robot instead of a computer, and where it stops. Our system, HexaShell, keeps the harness thin: it only turns the agent's commands into robot motion. The agent drives a robot with two arms through one command line. It sees three RGB cameras and knows their calibration. After each failed attempt, the agent reads the log, finds the cause, and writes or fixes small programs called tools. In this way it keeps what it learns as code, as a coding agent does when it fixes a failing test. The tools may use only what the robot observes. They use triangulation to find where objects are, relative to each other and to the gripper. If two cameras see the same point, the point lies where the two camera rays meet. If a point lies on a known plane, such as the table or the top of a block, it lies where its ray meets that plane. When the head camera is not enough, the robot moves a wrist camera to get a second view. We build the tools on only ten layouts of one seed per task, then freeze them and test them on ten new layouts of the same seed. We use Codex with GPT-6-Astra at medium reasoning effort. On all 42 RoboDojo tasks, HexaShell reaches a success rate of 39.7% and a progress score of 48.0, averaged in the same way as the leaderboard. This is a new state of the art on RoboDojo. The limit is contact, not reasoning: pushing reaches 92.5% and memory tasks 65.0%, but tight insertion only 8.3%. When the agent fails, it usually sees the failure but cannot make the motion work. We open source the tools evolved so far at https://github.com/HexaFuture/HexaShell.",
      "upvotes": 284,
      "github_stars": 29,
      "github_repo": "https://github.com/HexaFuture/HexaShell",
      "project_page": "https://hexafuture.ai/home/",
      "comments": 2,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2610.23479",
      "arxiv_url": "https://arxiv.org/abs/2610.23479",
      "title_ja": "HexaShell: VLMエージェントをロボットコーディングエージェントとして活用する薄いハーネス",
      "summary_ja": "VLMエージェントが自らツールを記述・修正しながらロボットを制御する仕組みを最小限の構成で提供。"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "abstract": "Existing agent benchmarks typically evaluate agents on well-specified tasks defined by issue reports, specifications, or task tickets. Real-world customer delivery is different: forward-deployed engineers (FDEs) must clarify ambiguous requirements, work in live systems, and uncover unstated constraints. We introduce FDE-Gym, a benchmark of 95 end-to-end delivery tasks from 20 customer scenarios across 18 sectors, each adapted by industry experts from real-world delivery projects. In simulated customer environments with scripted stakeholders and modifiable customer systems, agents interact with stakeholders and operate on production-like systems to deliver working solutions. FDE-Gym scores a delivery by how much it improves the customer's own success metric, normalized between 0 (unchanged system) and 1 (reference solution), with penalties for stakeholder interactions (messages, trial runs, and waiting time). An online platform lets humans practice FDE skills under the same grading criteria. We evaluate 13 model configurations from seven providers. In the realistic setting, where unstated constraints must be discovered, the best configuration achieves a mean FDE-Gym score of 0.56 and resolves only 14 of the 95 tasks (a score of at least 0.8 with no incident). Discovering unstated constraints is the primary bottleneck: performance drops sharply when models must uncover them without explicit guidance. Yet information discovery alone does not account for the gap: even on the 23 tasks where the best configuration obtains every key fact from stakeholders, it reaches a normalized business uplift of 0.8 or above on only 10. These results reveal a substantial gap between solving well-specified tasks and delivering effective AI systems for real customers.",
      "upvotes": 263,
      "github_stars": 111,
      "github_repo": "https://github.com/deeplethe/fde-gym",
      "project_page": "https://fde-gym.com/paper",
      "comments": 2,
      "org": "DeepLethe",
      "url": "https://huggingface.co/papers/2610.22350",
      "arxiv_url": "https://arxiv.org/abs/2610.22350",
      "title_ja": "FDE-Gym: AIデリバリーのラストマイル",
      "summary_ja": "実世界の曖昧な要件や生きたシステムでの作業を評価する、95件のデリバリータスクを含むベンチマーク。"
    },
    {
      "id": "2610.13521",
      "title": "Beyond Domain-Routed Supervision: Cross-Teacher Guarding for Multi-Teacher On-Policy Distillation",
      "abstract": "Multi-teacher on-policy distillation (MOPD) extends on-policy distillation (OPD) by routing domain-specific data to specialized teachers, integrating their capabilities through dense token-level supervision on student-generated trajectories. However, domain routing only distinguishes the supervision sources for different domains; updates from all domains still act on shared parameters. When teachers differ substantially in response style and domain expertise, supervision that is effective in isolation may still lead to persistent gradient conflicts and capability degradation during joint optimization. To address this challenge, we propose Cross-Teacher Guarding for MOPD (Road MOPD), which introduces non-routed teachers as auxiliary cross-domain critics on the same student trajectories and coordinates multi-teacher supervision through token-level credit assignment and gradient updates. Specifically, cross-teacher-guided credit assignment uses teacher agreement to strengthen token-level corrections jointly supported by the teachers and attenuate conflicting signals; preventive multi-teacher gradient projection uses auxiliary gradients from the same trajectories to constrain potentially conflicting updates and adaptively controls projection strength to retain target-domain learning signals. In experiments, Road MOPD mitigates degradation in the disadvantaged domain, gains over 5 percentage points under high conflict, and improves overall performance in low-conflict and three-domain settings.",
      "upvotes": 247,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "jingdong",
      "url": "https://huggingface.co/papers/2610.13521",
      "arxiv_url": "https://arxiv.org/abs/2610.13521",
      "title_ja": "ドメインルーティング型監督を超えて：複数教師によるオンポリシー蒸留のためのクロス教師ガーディング",
      "summary_ja": "複数教師間のスタイルや専門性の違いによる勾配衝突を防ぎ、学生モデルの性能低下を抑制する。"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "abstract": "GPT-6-Astra demonstrates a level of competence in robotic manipulation and navigation that challenges the conventional paradigm of building specialized models for individual tasks and embodiments. In this report, we ask not only how capable GPT-6-Astra is, but what its capabilities imply for the field. First, we probe the limits of standalone GPT-6-Astra. We conduct a large-scale evaluation across 12 representative benchmarks spanning tabletop manipulation, humanoids, mobile platforms, and dexterous hands. Under a unified protocol that allows in-context learning (ICL) from training-set demonstrations and substantially increases the number of execution steps, GPT-6-Astra achieves unprecedented performance (Fig. 1). Future research may focus on improving 1) the generality of ICL 2) cost and execution time, 3) physical-state verification, 4) recovery from irreversible failures, and 5) long-horizon preservation of progress. Second, we study the agentic harness for embodied control. We identify that close-loop coordination between a high-level \"System 2\" reasoner (i.e., GPT-6-Astra) and a low-level \"System 1\" controller (e.g., π0.5) is costly but effective. Third, we examine GPT-6-Astra on real-world deployment. Our experiments on 8 robot configurations reveal substantial gaps: 1) robot demonstrations required for ICL are expensive to collect, and 2) it is implausible to trade longer execution for higher success rates with physical constraints. Fourth, we envision the next generation of embodied benchmarks. We develop a prototype that 1) derives tasks from real-world needs, 2) provides no in-domain demonstrations, and 3) judges agents on a world clock that keeps running while they deliberate. Taken together, our results suggest that GPT-6-Astra has largely crossed the threshold of embodied competence, but not yet that of practical embodied intelligence.",
      "upvotes": 236,
      "github_stars": 141,
      "github_repo": "https://github.com/OpenSenseNova/SenseNova-RoboRSI",
      "project_page": "https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "comments": 1,
      "org": "SenseNova",
      "url": "https://huggingface.co/papers/2610.22471",
      "arxiv_url": "https://arxiv.org/abs/2610.22471",
      "title_ja": "GPT-6-Astraは身体的知能を達成したか？",
      "summary_ja": "GPT-6-Astraを12のロボットベンチマークで評価し、汎用的な身体的知能の可能性を調査する。"
    },
    {
      "id": "2610.17953",
      "title": "Agent-Reflex: Teaching Language Agents to Act Reflectively",
      "abstract": "Large language models have evolved from single-turn chatbots into interactive agents capable of long-horizon reasoning. In real deployments, MCP tool services can return noisy feedback and users may intervene to correct the agent, but existing methods provide limited supervision for reflection learning and failure recovery. To bridge this gap, we propose Agent-Reflex, a general training framework for incentivizing proactive reflection in agents. Specifically, Agent-Reflex comprises three stages. First, Environment Reflection Skill Discovery (RSD) injects grounded tool-feedback perturbations into environment scaling, samples a capability-diverse LLM pool, mines matched success-failure pairs, and summarizes reusable reflection meta-skills. Building on this skill library, we then apply Reflective Supervised Fine-Tuning (ReSFT) that converts each skill into supervision for self-reflection, skill recovery, and user-centric correction, strengthening complementary reflective behaviors. Finally, we propose On-Policy Reflective Policy Optimization (ORPO) to combine agentic reinforcement learning under noisy interactions with reflection-guided on-policy distillation to further elicit proactive reflection. Built on Qwen3-8B, Agent-Reflex reaches 58.6 overall on five long-horizon tool-use benchmarks and 29.1 on AgentNoiseBench, surpassing strong environment-scaling and reflection baselines. Experiments on six challenging agent benchmark suites demonstrate the effectiveness of Agent-Reflex. Further analyses show that Agent-Reflex improves agents' robustness to noise while maintaining stable training dynamics, supporting scalable agent training. Our code is available at https://github.com/RUC-NLPIR/Agent-Reflex.",
      "upvotes": 213,
      "github_stars": 233,
      "github_repo": "https://github.com/RUC-NLPIR/Agent-Reflex",
      "project_page": "",
      "comments": 3,
      "org": "NLPIR Lab @ RUC",
      "url": "https://huggingface.co/papers/2610.17953",
      "arxiv_url": "https://arxiv.org/abs/2610.17953",
      "title_ja": "Agent-Reflex: 言語エージェントに反射的な行動を教える",
      "summary_ja": "ノイズの多いフィードバックやユーザーの修正に対し、能動的な内省と失敗からの回復を促す訓練枠組み。"
    },
    {
      "id": "2610.17665",
      "title": "RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment",
      "abstract": "Can vision-language models turn 2D observations into 3D understanding that supports precise action? This requires inferring object geometry, anticipating the effects of rotation, and refining actions through visual feedback. We introduce RoTA-Bench to evaluate these abilities through interactive 3D-to-2D projection alignment. Given a target silhouette, a model observes a rotated object and chooses successive rotations to recover the target projection within a limited action budget. Our automated pipeline constructs silhouette-preserving 3D objects from 2D icons and uses reversible initialization to guarantee solvability, yielding 674 tasks and a stratified 100-task test set. Empirically, we find that (i) a substantial human-model gap persists: GPT-5.6-Sol succeeds on only 17% of tasks, whereas 20 undergraduate participants collectively complete the test set four times with a 100% success rate; (ii) image-space and pose-space progress can diverge: at matched states, the model more often improves silhouette overlap while worsening pose alignment than humans (19.4% vs. 10.9%); and (iii) fine-grained control is sensitive to interaction history: removing it leaves 96.8% of the model's actions at a coarse 30-degree step size and sharply reduces observed task success. These findings highlight the challenge of converting visual evidence into precise 3D control, beyond recognizing or matching individual images.",
      "upvotes": 196,
      "github_stars": 4,
      "github_repo": "https://github.com/MAC-AutoML/RoTA-Bench",
      "project_page": "https://www.modelscope.cn/studios/san2333333/rotabench-anon?mode=full&app_path=%2Fportal",
      "comments": 2,
      "org": "MAC-AutoML",
      "url": "https://huggingface.co/papers/2610.17665",
      "arxiv_url": "https://arxiv.org/abs/2610.17665",
      "title_ja": "RoTA-Bench: 対話的投影アライメントを通じた3D空間推論の評価",
      "summary_ja": "2Dのシルエットから物体の幾何学を推論し、視覚フィードバックを得ながら回転操作を行う能力を評価。"
    },
    {
      "id": "2610.18813",
      "title": "Self-Evolving Agent Harness",
      "abstract": "Harness self-evolution revises an agent's software scaffolding, including prompts, memory, workflows, and executable components, while keeping model weights fixed. We formalize a feedback-driven process in which accepted revisions persist across runs. The framework separates update targets from proposal and admission mechanisms. It distinguishes changes to interpreted state from revisions to tools and code, repository-level control logic, and plugin composition. We characterize search through evolutionary optimization and examine its reliability through continual PAC-learning. Under explicit assumptions, the analysis yields an expected generalization bound, a retention bound conditional on historical regression budgets, and a high-probability admission rule using fresh, independent validation data. We examine how persistent harness revisions affect knowledge sharing and organizational workflows, with implications for scientific reliability, physical safety, and institutional accountability. Cases from prior work illustrate model--harness co-design, distributed execution, and plugin reuse. Reliable deployment requires continual validation as task distributions and evaluators change, with independent safeguards for learning, runtime privileges, and consequential actions. We provide a comprehensive 66-page discussion of related work, theory, algorithms, evaluation, applications, and the broader impact of Harness RSI, together with continuously updated code and supplementary materials, at https://github.com/zgcagi/Harness-RSI.",
      "upvotes": 194,
      "github_stars": 224,
      "github_repo": "https://github.com/zgcagi/Harness-RSI",
      "project_page": "https://zgcagi.github.io/Harness-RSI/",
      "comments": 7,
      "org": "ZGCAGI",
      "url": "https://huggingface.co/papers/2610.18813",
      "arxiv_url": "https://arxiv.org/abs/2610.18813",
      "title_ja": "自己進化型エージェントハーネス",
      "summary_ja": "モデルの重みを変えず、プロンプトやワークフローなどのソフトウェア基盤をフィードバックに基づき自動修正。"
    },
    {
      "id": "2610.20424",
      "title": "BizBench: Unveiling Hidden Challenges in Deploying Long-Horizon Agents for Real-World Business",
      "abstract": "Existing long-horizon agent benchmarks often emphasize final task success while providing limited assessment of intermediate execution validity. Yet real-world business operations require agents to navigate extensive, potentially outdated or conflicting policies while satisfying critical constraints throughout execution. These requirements are particularly consequential in high-stakes domains such as payments, where intermediate violations can incur financial losses or regulatory consequences regardless of the final outcome. To bridge this evaluation gap, we introduce BizBench, a multi-turn benchmark grounded in real-world procedures from a leading payments company. Its executable environment integrates 789 knowledge documents and 601 discoverable business tools, with consistent policies, states, and tool behavior. The benchmark comprises 50 tasks involving resource constraints, temporal dependencies, prior commitments, and conflicting or outdated guidance. Each task is validated through reference execution, while deterministic checks assess both goal attainment and execution validity without prescribing a single solution path. Experiments reveal substantial limitations even among frontier models: Claude Opus 5 and GPT-6 Sol achieve strict success rates of only 64.0% and 61.3%, respectively. For Qwen3.8-27B, goal attainment reaches 42.0%, but strict success drops to 32.7%, demonstrating how outcome-based evaluation can mask invalid execution. Beyond success rates, DeepSeek-V4.1-Flash averages 191.3 tool calls per run, approximately 70% more than reference executions, revealing substantial execution overhead. Overall, BizBench establishes a testbed for evaluating and advancing long-horizon agents beyond task completion, toward reliable and constraint-compliant execution in complex business environments.",
      "upvotes": 169,
      "github_stars": 21,
      "github_repo": "https://github.com/ant-intl/BizAgentBench",
      "project_page": "",
      "comments": 2,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.20424",
      "arxiv_url": "https://arxiv.org/abs/2610.20424",
      "title_ja": "BizBench: 実世界のビジネスにおける長期間エージェント配備の隠れた課題を暴く",
      "summary_ja": "決済業務等の制約の多いビジネス環境で、最終的な成功だけでなく実行プロセスの妥当性を評価する。"
    },
    {
      "id": "2610.21783",
      "title": "Learning to Think and Explore in 3D World",
      "abstract": "We study how vision-language models (VLMs) can learn to think and actively explore in 3D space. Instead of providing multi-view images, videos, or 3D representations to the model, we preserve the native visual encoding of VLMs, i.e., a single image, one at a time, just like humans, and treat the 3D representation only as an environment with which the model can interact through actions (e.g., move left) and observations (rendered images). Each rollout begins from an initial first-person view and a visual question. The model can then iteratively reason, navigate, and reorient its viewpoint before committing to a final answer. Following an initial trajectory-supervised finetuning, we apply reinforcement learning (RL) with rewards driven primarily by final-answer correctness. Crucially, RL provides no direct supervision over which viewpoints the model should visit or which exploration actions it should take. Instead, the model must learn an effective exploration policy solely from the extent to which its interactions improve performance. Across six 3D benchmarks, our model ACT3D achieves an average accuracy of 53.2% that improves its base Qwen model by 22.0% and surpasses proprietary Gemini 3.6 Flash. ACT3D also outperforms existing open-source 3D methods while using 50-70% fewer input frames, and generalizes to unseen domains with an average improvement of 5.9% over its supervised initialization. Further analysis reveals adaptive, question-conditioned exploration. Performance gains over the base model increase from 0.6% on questions answerable from the initial view to 16.3% on those requiring extensive exploration. ACT3D searches for occluded targets, avoids unnecessary exploration, and acquires complementary viewpoints for spatial comparisons. These findings demonstrate that outcome-based RL enables VLMs not only to reason over visual evidence, but also to learn when and how to acquire it.",
      "upvotes": 144,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://williamium3000.github.io/act3d/",
      "comments": 1,
      "org": "University of California at San Diego",
      "url": "https://huggingface.co/papers/2610.21783",
      "arxiv_url": "https://arxiv.org/abs/2610.21783",
      "title_ja": "3D世界で考え探索することを学ぶ",
      "summary_ja": "単一画像のみを視覚入力とし、3D空間内での能動的な推論・移動・探索を強化学習で習得する。"
    },
    {
      "id": "2610.18860",
      "title": "AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards",
      "abstract": "Generating information-rich visual artifacts such as slides, posters, and dashboards as code is appealing because the outputs are structured, editable, and verifiable. Yet code models cannot see how their choices of layout and color come together on the canvas, often limiting spatial planning and aesthetic quality. Image generators excel at visual design but can misrender requested content, making their outputs unreliable targets for direct reproduction. We therefore introduce AesCode, which generates code grounded in the content prompt while using an image generated from the same prompt as an aesthetic guidance. To do so, AesCode represents the target as a design graph that describes the whole canvas and makes each property attributable. From this graph, we derive complementary cross-modal rewards: deterministic verifiers score properties parsable from code and rendering, while a VLM judge assesses the non-parsable ones with a sample-specific Visual Graph Rubric (VGR) tied to graph elements and relations. We optimize these decoupled rewards through reinforcement learning with per-channel normalization to jointly improve spatial planning, aesthetic quality, and verifiable correctness. To evaluate this setting, we build a benchmark that scores verifiable correctness and visual quality separately, with visual scores highly consistent with human judgments. We find that reference images substantially improve the visual quality of code generated by existing models, and ablations show that AesCode benefits from references both as model input and as a source of visual rewards. Relative to same-scale Qwen3-VL baselines given the same references, AesCode-8B and AesCode-32B improve visual quality by 31.1 and 22.4 percentage points, reaching scores comparable to those of closed-source frontier models such as GPT-5.5 and Claude Opus 4.8.",
      "upvotes": 137,
      "github_stars": 100,
      "github_repo": "https://github.com/microsoft/AesCode",
      "project_page": "https://microsoft.github.io/AesCode/",
      "comments": 2,
      "org": "Microsoft",
      "url": "https://huggingface.co/papers/2610.18860",
      "arxiv_url": "https://arxiv.org/abs/2610.18860",
      "title_ja": "AesCode: 分離されたクロスモーダル報酬による審美的なコード生成",
      "summary_ja": "画像生成モデルの審美性をガイドに、構造化され再編集可能な美しい視覚成果物のコードを生成する。"
    },
    {
      "id": "2610.14993",
      "title": "Learning Where to Split: Dynamic Band Splitting for Audio Source Separation",
      "abstract": "Audio source separation models must preserve fine spectral structure while keeping the cost of the separator tractable. Band-split architectures reduce this cost by manually partitioning the spectrum into predefined frequency bands and encoding each band as a token, but the same boundaries are used for every mixture. Because informative spectral structure varies with source content, fixed boundaries can merge discriminative components or spend tokens where little resolution is needed. We introduce Dynamic Band Splitting (DBS), an end-to-end framework that adapts boundary locations and band widths to each mixture under a fixed band-token budget. DBS predicts content-conditioned boundary scores within frequency blocks, selects a prescribed number of boundaries using hard Top-K, and applies content-dependent pooling to obtain compact band tokens. After separation, it smooths and expands these tokens to the original STFT grid, refines them along frequency, and decodes complex masks with a frequency-shared head. DBS improved separation over the corresponding static models on DnR v2, MUSDB18-HQ, and EchoSet, with DBS-BSRNN achieving relative gain of 29.0% in average SI-SDR on DnR v2. These results and boundary analyses on DnR v2 show that content-adaptive frequency partitioning benefits multiple separator backbones under a fixed band-token budget. Code and audio demos are available at https://cslikai.cn/Dynamic-Band-Splitting",
      "upvotes": 136,
      "github_stars": 22,
      "github_repo": "https://github.com/JusperLee/Dynamic-Band-Splitting",
      "project_page": "https://cslikai.cn/Dynamic-Band-Splitting/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.14993",
      "arxiv_url": "https://arxiv.org/abs/2610.14993",
      "title_ja": "分割場所の学習：音源分離のための動的バンド分割",
      "summary_ja": "音源の内容に応じて周波数バンドの境界を動的に最適化し、低コストで高精度な音源分離を実現する。"
    },
    {
      "id": "2610.20939",
      "title": "MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments",
      "abstract": "Online reinforcement learning (RL) with verifiable rewards has driven rapid progress in mathematics, coding, and tool use, but scaling this success to GUI agents remains challenging due to the high cost of interactive environments and the scarcity of realistic training tasks. We introduce MAI-Gym, an open all-in-one platform that unifies GUI agent evaluation, data collection, and online RL training across mobile, computer, and web environments. Through a shared rollout pipeline, MAI-Gym ensures consistent agent behavior across evaluation and training, supports ten established benchmarks, and scales to 20,000 parallel environment instances. Beyond scalable infrastructure, MAI-Gym enables automated synthesis of diverse GUI applications and challenging tasks, including resettable mocked apps and coherent cross-app worlds with execution-validated task verifiers. Using MAI-Gym, we train MAI-Gym-9B, a unified 9B agent for mobile and computer use, achieving state-of-the-art performance among open GUI agents under 10B parameters: 78.4% on MobileWorld and 76.2% on OSWorld-Verified. Importantly, RL in a mocked train-ticketing app transfers to its real-world counterpart, improving task success on a phys- ical phone from 28.8% to 48.1%. We release the framework, synthesis skills, mocked apps, 2,000 verified tasks, and the model checkpoint to support repro- ducible research and further advances in scalable GUI agent training.",
      "upvotes": 135,
      "github_stars": 31,
      "github_repo": "https://github.com/Tongyi-MAI/MAI-Gym",
      "project_page": "https://tongyi-mai.github.io/MAI-Gym/",
      "comments": 2,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.20939",
      "arxiv_url": "https://arxiv.org/abs/2610.20939",
      "title_ja": "MAI-Gym: モバイル・コンピュータ環境におけるGUIエージェント評価とRL訓練のためのオールインワンプラットフォーム",
      "summary_ja": "多数のベンチマークに対応し、2万の並列環境でGUIエージェントのデータ収集と強化学習を可能にする。"
    },
    {
      "id": "2610.18356",
      "title": "Urbex: Agentic Spatial Grounding for City-Scale 3D Scenes",
      "abstract": "City-scale 3D grounding is commonly formulated as candidate ranking, which requires precomputed instance proposals and becomes inefficient in large outdoor scenes. We propose Urbex, an agentic vision-language framework that instead casts grounding as active spatial search. Urbex represents a city-scale 3D scene as an interactive multi-view environment, allowing a VLM agent to query landmarks, zoom into local regions, render oblique views, and commit a grounded bounding box. We optimize this tool-use policy with reinforcement learning on CityRefer, using smooth localization rewards and lightweight shaping rewards for efficient exploration. Experiments show that Urbex achieves the best Hit@1 and IoU on CityRefer, supports candidate-free grounding without ground-truth boxes, and is substantially faster than the strongest city-scale ranking baseline. Zero-shot results on STPLS3D-Refer further indicate improved cross-scene robustness.",
      "upvotes": 134,
      "github_stars": 104,
      "github_repo": "https://github.com/AMAP-ML/Urbex",
      "project_page": "https://www.wangfaye.cn/paper/urbex",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.18356",
      "arxiv_url": "https://arxiv.org/abs/2610.18356",
      "title_ja": "Urbex: 都市規模の3Dシーンに対するエージェント型空間グラウンディング",
      "summary_ja": "都市規模の3D空間における対象特定を、能動的な視点移動とズームを用いた探索タスクとして解決する。"
    },
    {
      "id": "2610.19159",
      "title": "Into the Unknown: Benchmarking AI agents on open scientific research problems",
      "abstract": "Can AI agents carry out research on open scientific problems? We introduce Into the Unknown, a benchmark that provides an agent with a science paper along with a research direction to pursue and tasks it to write a follow-up paper. We work with scientists at US Department of Energy (DOE) national laboratories, who each contribute an unpublished follow-up direction from their own work together with the necessary conditions a submission must meet. While assessing the quality of a follow-up paper is challenging in general, using these conditions to form a rubric makes evaluation more tractable for research problems that have no reference answer. We have nine frontier agents write 15 follow-ups each, spanning quantum computing, plasma physics, computational chemistry, materials science, and scientific machine learning domains. None of the 135 submissions satisfies all the conditions, and 114 fail our integrity check, most often because the paper claims work that was never done or reports numbers that contradict the recorded evidence. Overall, agents readily produce papers that look like follow-ups, but none meets the standard of the domain scientist, leaving substantial headroom. Our code and data are publicly available.",
      "upvotes": 131,
      "github_stars": 14,
      "github_repo": "https://github.com/prometheus-eval/into-the-unknown",
      "project_page": "https://prometheus-eval.github.io/into-the-unknown/viewer/#/",
      "comments": 1,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.19159",
      "arxiv_url": "https://arxiv.org/abs/2610.19159",
      "title_ja": "未知の世界へ：未解決の科学研究課題におけるAIエージェントのベンチマーク",
      "summary_ja": "実在の科学者が提示した未発表の追究方向に基づき、AIが後続論文を執筆できるかを評価する。"
    },
    {
      "id": "2610.20341",
      "title": "InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views",
      "abstract": "Feed-forward Gaussian reconstruction builds 3D scenes directly from input images for novel view rendering, but learning Gaussian attributes from predicted geometry for high-quality rendering under large viewpoint changes remains challenging. We analyze limitations in Gaussian attribute learning and introduce InfiniSplat v2, which improves rendering quality through architectural and training changes. Our method decouples geometry and attribute prediction with a frozen geometry branch, aligns predicted Gaussians using ground-truth camera poses during training, and adopts large-angle target view supervision. Across six datasets, the feed-forward outputs of the same trained model achieve state-of-the-art mean LPIPS and DISTS among the evaluated methods in both pose-conditioned and pose-free settings. In the pose-conditioned setting, mean LPIPS and DISTS decrease by 25.8% and 32.9%, respectively, compared with the strongest evaluated baselines. We further find that opacity learned with only image reconstruction supervision suppresses geometrically inconsistent points. Project page: https://zju3dv.github.io/InfiniSplat2/",
      "upvotes": 121,
      "github_stars": 481,
      "github_repo": "https://github.com/zju3dv/InfiniSplat",
      "project_page": "https://zju3dv.github.io/InfiniSplat2/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.20341",
      "arxiv_url": "https://arxiv.org/abs/2610.20341",
      "title_ja": "InfiniSplat v2: 任意視点からのフィードフォワード3DGSの分析と改善",
      "summary_ja": "幾何と属性の予測を分離し、大きな視点変化下でも高品質な3Dシーン再構成を可能にする。"
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
      "title_ja": "Tev: 密な進捗報酬による長期間エージェント環境の拡張",
      "summary_ja": "報酬が希薄な長期タスクに対し、検証可能な密な進捗報酬を備えた1170件の学習用環境を提供。"
    },
    {
      "id": "2610.09872",
      "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
      "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
      "upvotes": 111,
      "github_stars": 7,
      "github_repo": "https://github.com/RaymondVoldemortFu/LiveMACE",
      "project_page": "",
      "comments": 2,
      "org": "Fudan University",
      "url": "https://huggingface.co/papers/2610.09872",
      "arxiv_url": "https://arxiv.org/abs/2610.09872",
      "title_ja": "LiveMACE: 進化する市場におけるLLMエージェント能力のプロセス認識評価",
      "summary_ja": "実際の金融市場を舞台に、結果だけでなく意思決定プロセスも含めてLLMの永続的実行能力を評価。"
    },
    {
      "id": "2610.22341",
      "title": "3DCodeVerse: Exploring 3D Worlds as Code",
      "abstract": "We introduce 3DCodeVerse, a research ecosystem that enables coding agents to create editable and verifiable 3D content at scale. 3DCodeVerse comprises large-scale, high-quality datasets of executable 3D code, a coding harness for spatial reasoning and automated verification, and practical guidance for 3D coding. First, we construct 3DCodeVerse-2M, a large-scale curated dataset of standalone 3D executable code. We build this corpus by collecting open-source data, converting specialized representations, and generating new programs with coding agents. Each program is packaged with the source files and associated assets required for execution in its declared environment, along with available descriptions and verification records. Second, we develop the 3DCodeVerse Harness, a multi-agent directed acyclic graph framework for generating and refining 3D content. It uses execution checks, spatial measurements, and visual feedback to automatically evaluate and revise generated programs without human feedback during generation. Third, we conduct systematic empirical studies of 3D coding, establishing baselines with fine-tuned open models and deriving practical guidance through component-level analyses of our harness. Extensive experiments demonstrate that fine-tuning on our dataset significantly improves the 3D coding capabilities of open-source models. Notably, our 3DCodeVerse harness achieves a 90% win rate against Claude Design (3D Object) in pairwise human evaluations, when both are utilized by Claude Opus 5.5.",
      "upvotes": 110,
      "github_stars": 154,
      "github_repo": "https://github.com/gaoypeng/3dcodeverse",
      "project_page": "https://3dcodeverse.com/",
      "comments": 2,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2610.22341",
      "arxiv_url": "https://arxiv.org/abs/2610.22341",
      "title_ja": "3DCodeVerse: コードとしての3D世界を探求する",
      "summary_ja": "編集・検証可能な3Dコンテンツを大規模に作成するための、200万件の3D実行コードデータ群。"
    },
    {
      "id": "2610.18774",
      "title": "GreenWAM: A World Foundation Model for Robotics",
      "abstract": "A robot needs a world model that predicts how its actions will change the scene and a policy that chooses those actions. Models are usually built and evaluated for only one of these roles, and every robot records its actions in its own format. We ask whether one robot world model can serve both roles across different bodies, and what makes this work. We present GreenWAM, a world foundation model for robotics, together with the recipe that produces it: (1) a shared anatomical action space that describes 20 robot families, from bimanual arms to dexterous humanoids, in common joint coordinates; (2) joint training on these families in visual, action-conditioned and world-action modes; and (3) policies that split an action expert off the generator. As a world model, GreenWAM attains top-tier trajectory, depth and 3D accuracy on WorldArena 1.0, ahead of every world-action model and video generator in our comparison. As a policy, it scores among the top entries of the RoboTwin 2.0 leaderboard, reaches the highest zero-shot LIBERO-plus success among the compared methods and is competitive with dedicated vision-language-action and world-action policies on CALVIN and LIBERO. We further adapt GreenWAM to a real humanoid, where it succeeds more often than policies adapted from π_{0.5} and from Cosmos 3 Edge, and distill it into a single-step policy for real-time control. Controlled experiments yield three findings: robot specialization improves world prediction and control together; an action expert helps when split off at the start of adaptation; and keeping world-model modes during policy adaptation preserves robustness to scene changes.",
      "upvotes": 110,
      "github_stars": 6,
      "github_repo": "https://github.com/greenvla/GreenWAM",
      "project_page": "https://greenvla.github.io/GreenWAM/",
      "comments": 3,
      "org": "Sber Robotics Center",
      "url": "https://huggingface.co/papers/2610.18774",
      "arxiv_url": "https://arxiv.org/abs/2610.18774",
      "title_ja": "GreenWAM: ロボットのための世界基盤モデル",
      "summary_ja": "20種類のロボットに共通の行動空間を定義し、異なる機体間で予測と制御を両立する基盤モデル。"
    },
    {
      "id": "2610.14224",
      "title": "Harness^2: Recursive Agent Harnessing for an Open World",
      "abstract": "LLM agents' capabilities depend not only on their underlying models but also on their execution harnesses. Recursive self-improvement (RSI) offers a promising approach to automatically evolve these harnesses. However, deploying RSI in open-world settings still faces two critical challenges. First, open-world tasks are typically unseen during the harness design phase and novel at test time, leaving no ground-truth verifiers to reliably guide online harness edits. Second, the RSI process remains highly task-specific and fails to generalize to novel scenarios. We introduce Harness^2, a plug-and-play, recursive agent harnessing framework that addresses these challenges through two connected levels of recursion. Task-level recursion refines the current task's harness using a contrastive Propose-Probe-Compose step that reliably guides edits without ground-truth verifiers, and can be scaled further via parallel or sequential recursion. Harnessing-level recursion then extracts experience from these edits to update a continual improvement harness, enabling the agent to better adapt to future tasks. Across three professional benchmarks and four model-harness configurations, a single step consistently improves GLM-5 and Gemini 3.5 Flash over their base harnesses, yielding gains of up to 11.5 points on WorkBuddy-Bench, 4.5 points on JobBench, and 11.8 percentage points on LAB, with further gains as the task-level recursion budget increases.",
      "upvotes": 110,
      "github_stars": 9746,
      "github_repo": "https://github.com/google-research/harness2",
      "project_page": "https://harness2.github.io/",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.14224",
      "arxiv_url": "https://arxiv.org/abs/2610.14224",
      "title_ja": "Harness^2: オープンワールドのための再帰的エージェントハーネシング",
      "summary_ja": "未知のタスクに対し、正解データなしでエージェントの実行基盤（ハーネス）を再帰的に自己進化させる。"
    },
    {
      "id": "2610.20344",
      "title": "Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",
      "abstract": "Agents driven by large language models are increasingly deployed on long-horizon tasks, where they use tools and modify real workspaces. How well they perform depends as much on the harness around the model as on the model itself. Existing benchmarks measure downstream task success under a fixed harness, leaving harness engineering itself unexplored. We propose Doc2Harness, a two-stage benchmark that evaluates long-horizon harness engineering directly. In Stage 1, a build model operating inside a fixed builder harness receives an interface-only contract skeleton and a development document that consolidates behavior across twelve frontier harnesses, and then constructs a complete candidate harness in an isolated container. In Stage 2, the frozen candidate harness runs in containers separate from the construction environment, one per test case, and is driven end to end by a scripted mock model. We score each test case using four observable channels, namely the requests sent to the model, the files on disk, the process exit code, and the command output; positive controls rule out vacuous passes. Across nineteen frontier models, each evaluated with three independent builds on 328 test cases, GPT-6 Astra achieves the highest pass rate at 53.05%, while the weakest model reaches 27.44%, a gap of roughly twenty-six percentage points. Even the strongest model fails nearly half of the test cases, and failures cluster around how cross-cutting functionality is split across modules. To our knowledge, Doc2Harness provides the first deterministic benchmark for measuring long-horizon harness engineering.",
      "upvotes": 108,
      "github_stars": 111,
      "github_repo": "https://github.com/YuyaoGe/doc2harness",
      "project_page": "https://geyuyao.com/doc2harness/",
      "comments": 2,
      "org": "Institute of Computing Technology",
      "url": "https://huggingface.co/papers/2610.20344",
      "arxiv_url": "https://arxiv.org/abs/2610.20344",
      "title_ja": "Doc2Harness: コーディングエージェントの長期間ハーネスエンジニアリングにおけるLLMの評価",
      "summary_ja": "既存のエージェント能力測定ではなく、エージェントを動かす「基盤設計」そのものの能力を測る。"
    },
    {
      "id": "2610.21261",
      "title": "Behavioral Compositionality of Sparse Autoencoder Representations",
      "abstract": "Sparse autoencoders (SAEs) represent model activations with sparse, linearly decoded features, but the downstream effects of those features need not compose additively. We introduce SAE Additivity Residuals (SAR), which measure the behavioral variation left unexplained above a chosen interaction order. Under independent feature subset sampling, population SAR is exactly the normalized energy of interactions above that order and bounds coalition ordering error for the optimal low order approximation. To distinguish compositionality associated with the SAE representation from that induced by downstream computation, we compare learned SAE coordinates with sum preserving random rotations of the same selected subspace and find lower first order residuals for the learned coordinates across all 18 model and behavior settings. The coordinates are nevertheless not fully additive: pairwise terms improve held out coalition ordering in every setting and outperform parameter matched models using randomly selected third order terms. In a combined steering experiment, pairwise modeling raises rank fidelity from 0.5874 to 0.7790 and reduces ordering error from 0.1444 to 0.0606. Together, these results show that SAE coordinates support comparatively compositional behavioral descriptions while faithful joint explanations and interventions still require interactions beyond individual feature effects. Code is available at https://github.com/OpenSAE/SAE-Behavioral-Compositionality.",
      "upvotes": 104,
      "github_stars": 17,
      "github_repo": "https://github.com/OpenSAE/SAE-Behavioral-Compositionality",
      "project_page": "https://opensae.github.io/SAE-Behavioral-Compositionality",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21261",
      "arxiv_url": "https://arxiv.org/abs/2610.21261",
      "title_ja": "稀疎自己符号化器（SAE）表現の行動的構成性",
      "summary_ja": "SAEの各特徴が下流の挙動に与える影響が、単純な足し算で説明できるかを測定・分析する手法。"
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
      "title_ja": "SALD: 拡散モデルのための自己参照アドバンテージ学習",
      "summary_ja": "外部デモなしに、同一モデル内の異なるノイズレベルでの評価を比較して学習信号を得る訓練枠組み。"
    },
    {
      "id": "2610.18784",
      "title": "Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents",
      "abstract": "Long-horizon agents accumulate progress in persistent task state, yet repeatedly process interaction histories describing how that progress was achieved. This raises a natural question: can long-horizon context instead be organized around reusable progress rather than the history that produced it? In this paper, we introduce CarryOn, an object-oriented context runtime that organizes continuation around reusable task objects. Rather than treating compressed histories or reconstructed accounts of progress as the primary basis for continuation, CarryOn builds a context view from continuation carriers, complementary execution context, and a live tail of recent interactions. A core challenge is keeping this reusable basis valid after its surrounding history is retired: how can CarryOn update the basis without reconstructing the full representation at every fold? CarryOn maintains carrier records across folds, revising affected records against bound evidence and applicable environment checks while carrying forward unaffected records and jointly updating execution context. Experiments on OSWorld 2.0 and BrowseComp-Plus show improved gains of 5.8% and 7.0% while reducing total token usage by 51.9% and 22.9%, respectively. Project page: https://ethannju.github.io/carryon",
      "upvotes": 99,
      "github_stars": 4,
      "github_repo": "https://github.com/Ethannju/carryon",
      "project_page": "https://ethannju.github.io/carryon/",
      "comments": 2,
      "org": "McAuley-Lab",
      "url": "https://huggingface.co/papers/2610.18784",
      "arxiv_url": "https://arxiv.org/abs/2610.18784",
      "title_ja": "Pack Light, CarryOn: 長期間エージェントのためのオブジェクト指向コンテキストの構築",
      "summary_ja": "過去の履歴を全て処理する代わりに、再利用可能な「タスクオブジェクト」単位で情報を整理し継承する。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "TAC Turns AI Uncertainty Scores Into Real Hallucination Detectors",
      "summary": "A new post-hoc calibration method called Truth AnChoring maps raw LLM uncertainty scores to probabilities grounded in actual correctness.",
      "url": "https://alphasignal.ai/news/tac-turns-ai-uncertainty-scores-into-real-hallucination-detectors",
      "published": "2026-10-20T08:28:19+09:00",
      "title_ja": "TAC：AIの不確実性スコアを実用的なハルシネーション検出器へ変換",
      "summary_ja": "LLMの未加工の不確実性スコアを、実際の正解率に基づいた確率にマッピングする新しい事後較正手法「Truth AnChoring」を開発。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-6 Astra Cracks COBOL, Scoring 72% on Banking's Ancient Code",
      "summary": "OpenAI's newest models jump from single-digit to near-perfect accuracy on COBOL migration and show massive gains across 20 programming languages.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-6-astra-cracks-cobol-scoring-72-on-banking-s-ancient-code",
      "published": "2026-10-20T07:30:05+09:00",
      "title_ja": "OpenAIのGPT-6 AstraがCOBOLを解読、銀行のレガシーコードで72%を記録",
      "summary_ja": "最新モデルがCOBOL移行の精度を劇的に向上させ、20以上のプログラミング言語全般で大幅な進歩を遂げた。"
    },
    {
      "lab": "AlphaSignal",
      "title": "The Commons Lab's Hemmingway-1 Beats GPT-6 Astra at Everyday Writing",
      "summary": "A 27B fine-tune of Qwen3.8 built for everyday messages beats much larger models at sounding like an actual human being.",
      "url": "https://alphasignal.ai/news/the-commons-lab-s-hemmingway-1-beats-gpt-6-astra-at-everyday-writing",
      "published": "2026-10-20T06:47:58+09:00",
      "title_ja": "Commons LabのHemmingway-1、日常の執筆でGPT-6 Astraを凌駕",
      "summary_ja": "Qwen3.8を微調整した27Bモデル。日常的なメッセージ作成において、巨大モデルよりも人間らしい自然な文章生成を可能にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's OSS Scanner Finds 880 Critical Vulnerabilities in Open-Source Code",
      "summary": "Anthropic's new OSS Scanner uses Claude Mythos to send unreviewed vulnerability reports with reproducers and patches directly to open-source maintainers.",
      "url": "https://alphasignal.ai/news/anthropic-s-oss-scanner-finds-880-critical-vulnerabilities-in-open-source-code",
      "published": "2026-10-20T06:47:24+09:00",
      "title_ja": "AnthropicのOSS Scanner、オープンソースコードから880件の深刻な脆弱性を発見",
      "summary_ja": "Claude Mythosを活用し、再現手順と修正パッチを含む脆弱性レポートをOSSメンテナに直接送信する新しいスキャナーを導入。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Nebius Turns Token Factory Into Runnable AI Recipes for Developers",
      "summary": "Nebius published an open cookbook of notebooks and reference apps for its Token Factory inference service, covering agents, RAG, fine-tuning, and distillation.",
      "url": "https://alphasignal.ai/news/nebius-turns-token-factory-into-runnable-ai-recipes-for-developers",
      "published": "2026-10-19T21:03:05+09:00",
      "title_ja": "Nebius、Token Factoryを開発者向けの実用的なAIレシピ集へ展開",
      "summary_ja": "エージェント、RAG、微調整、蒸留などを網羅した、推論サービス用のノートブックや参照アプリのオープンクックブックを公開。"
    },
    {
      "lab": "OpenAI",
      "title": "Advancing coding in low‑resource programming languages",
      "summary": "Learn how OpenAI is improving ChatGPT across low-resource programming languages, with new evaluations for software engineering, SQLite, and COBOL migration.",
      "url": "https://openai.com/index/low-resource-programming-languages",
      "published": "2026-10-19T21:00:00+09:00",
      "title_ja": "低リソースプログラミング言語におけるコーディングの進化",
      "summary_ja": "SQLiteやCOBOL移行などの新評価軸を用い、低リソース言語におけるChatGPTの性能を向上させる取り組みを紹介。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Nesterov Momentum Escapes AI Training's Worst Traps Almost Every Time",
      "summary": "A new analysis settles whether momentum-based optimizers can get stuck at saddle points, and designs a variant that escapes faster without hurting convergence.",
      "url": "https://alphasignal.ai/news/nesterov-momentum-escapes-ai-training-s-worst-traps-almost-every-time",
      "published": "2026-10-19T15:02:53+09:00",
      "title_ja": "ネステロフのモメンタムがAI訓練の最悪な罠をほぼ毎回回避",
      "summary_ja": "モメンタムベースの最適化手法が鞍点を脱出できるかを分析し、収束を妨げずに高速で脱出できる新バリアントを設計。"
    },
    {
      "lab": "Hugging Face",
      "title": "TorchNeuron: running HF models on AWS Trainium is easier than ever",
      "summary": "",
      "url": "https://huggingface.co/blog/hf-torchneuron",
      "published": "2026-10-19T09:00:00+09:00",
      "title_ja": "TorchNeuron：AWS TrainiumでのHFモデル実行がこれまで以上に容易に",
      "summary_ja": "AWS Trainium上でHugging Faceのモデルを実行するプロセスを簡略化するTorchNeuronのアップデート。"
    },
    {
      "lab": "OpenAI",
      "title": "How Itaú is building generative AI for its entire customer base",
      "summary": "With ia.i, a conversational interface, and the IARA governance platform, Itaú is applying its AI First strategy to customers and employees — in one of Brazil’s most regulated sectors.",
      "url": "https://openai.com/index/itau-generative-ai",
      "published": "2026-10-17T04:00:00+09:00",
      "title_ja": "Itaú銀行がいかに全顧客向け生成AIを構築しているか",
      "summary_ja": "ブラジルの厳しい規制下で、対話型UI「ia.i」とガバナンス基盤「IARA」を通じ、顧客と従業員双方にAI優先戦略を適用。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地させる：自律型ウェットラボの構成要素",
      "summary_ja": "自律的なウェットラボ（実験室）の構築に向け、AIエージェントを実際の生物学的事実に適応させるための基盤技術。"
    },
    {
      "lab": "Hugging Face",
      "title": "Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/scaling-indic-pretraining",
      "published": "2026-10-16T10:44:47+09:00",
      "title_ja": "インド系言語の事前学習のスケーリング：2.8兆トークンとオープンデータ生成パイプライン",
      "summary_ja": "2.8兆トークンに及ぶ大規模なインド系言語の事前学習と、それを支えるオープンなデータ生成パイプラインを公開。"
    },
    {
      "lab": "OpenAI",
      "title": "Stack Overflow for Agents triples signups with ChatGPT plugin",
      "summary": "Two engineers shipped Stack Overflow for Agents in a few weeks with Codex, and its ChatGPT plugin helped drive up to 10× growth in agent creation.",
      "url": "https://openai.com/index/stack-overflow-chatgpt-plugin",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Stack Overflow for Agents、ChatGPTプラグインで登録者数が3倍に",
      "summary_ja": "Codexを用いて短期間で開発され、ChatGPTプラグインの導入によりエージェント作成数が最大10倍の成長を記録。"
    },
    {
      "lab": "OpenAI",
      "title": "Benefit Street Partners answers questions faster with Codex",
      "summary": "Anant Kumar builds tools to compare loan valuations and analyze credit agreements, using Codex for code review and faster follow-ups.",
      "url": "https://openai.com/index/benefit-street-partners",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Benefit Street PartnersがCodexで質問回答を高速化",
      "summary_ja": "ローン評価比較やクレジット契約分析のツールを構築し、コードレビューやフォローアップ業務をCodexで効率化。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Beam: a 501B open model you can own, customize, and scale",
      "summary": "",
      "url": "https://huggingface.co/blog/reflection-beam",
      "published": "2026-10-16T09:00:00+09:00",
      "title_ja": "Beamへようこそ：所有・カスタマイズ・拡張が可能な501Bオープンモデル",
      "summary_ja": "ユーザーが独自に所有し、用途に合わせてスケールやカスタマイズができる501Bパラメータのオープンモデルを公開。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Switch 4.1: Chat, Decisions, and Speech from One Endpoint",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-switch-4-1",
      "published": "2026-10-16T05:34:01+09:00",
      "title_ja": "Granite Switch 4.1：チャット、意思決定、音声を一つのエンドポイントで提供",
      "summary_ja": "一つのエンドポイントから、対話、意思決定支援、音声処理の機能を統合的に利用できる新モデルのリリース。"
    },
    {
      "lab": "OpenAI",
      "title": "Bringing GPT-Rosalind to academic research labs",
      "summary": "Introducing the Rosalind Academic Plan, offering eligible academic labs sponsored access to GPT-Rosalind and tools to advance life sciences research.",
      "url": "https://openai.com/index/introducing-the-rosalind-academic-plan",
      "published": "2026-10-16T04:00:00+09:00",
      "title_ja": "GPT-Rosalindを学術研究室に提供開始",
      "summary_ja": "ライフサイエンス研究を推進するため、適格な学術研究室にGPT-Rosalindと関連ツールへのアクセスを支援するプランを導入。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用ツール「Google Antigravity」を活用し、新規の抗菌ペプチドを探索するプロセスを高速化。"
    },
    {
      "lab": "OpenAI",
      "title": "Teaching students to think and learn through questions",
      "summary": "Celebrate Teachers’ Day with AI for Educators in Brazilian Portuguese and see how Study Mode can help teachers support active, step-by-step learning.",
      "url": "https://openai.com/index/teaching-students-to-think-and-learn-through-questions",
      "published": "2026-10-15T22:00:00+09:00",
      "title_ja": "質問を通じて学生の思考と学習を促す教育手法",
      "summary_ja": "ブラジル・ポルトガル語圏の教師向けAIや、段階的な能動的学習を支援する「スタディモード」の活用方法を紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Apertus 1.5 Release Notes",
      "summary": "",
      "url": "https://huggingface.co/blog/swiss-ai/apertus-v15-release-notes",
      "published": "2026-10-15T18:08:45+09:00",
      "title_ja": "Apertus 1.5 リリースノート",
      "summary_ja": "Apertus 1.5における新機能、改善点、および修正内容をまとめたリリース詳細。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac Studio上のMLXとRDMAによるローカルおよび分散LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、最新のAI手法や推論、微調整をプライベートなハードウェア環境で実験可能にする。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択型構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "推論を自由形式の生成ではなく、事前定義された候補からの「選択」として再構成することで、推論コストを抑えつつ精度を向上。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャのスケーリング調査",
      "summary_ja": "LLMが抽象的なツールスタブを生成してから検索を行う「Plan-then-Retrieve」手法の効果を、従来手法と比較検証。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Muse Spark Open: open-weight frontier multimodal mixture-of-experts model from Meta",
      "summary": "",
      "url": "https://huggingface.co/blog/meta-muse-spark-open",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Muse Spark Open：Metaによるオープンウェイトの最先端マルチモーダルMoEモデル",
      "summary_ja": "Metaが開発した、混合専門家（MoE）アーキテクチャを採用した高性能なマルチモーダル・オープンモデルの紹介。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Earth AIの実用化：地球規模の課題に挑む地理空間エージェント",
      "summary_ja": "地球規模の大きな課題を解決するために、地理空間データを活用して動作するAIエージェントの活用方法。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewを用いて、複雑な技術ドキュメントを効率的に解析・理解するための科学的手法。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創造性を増幅する10の方法",
      "summary_ja": "AIを通じて人間の独創性や知性をさらに高めるための、2026年に向けた10の研究アプローチ。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検出用の微調整AIモデルを構築",
      "summary_ja": "軽量なGemmaモデルを使い、クラウドへデータを送ることなくデバイス上でプライベートチャット内の詐欺を阻止する仕組み。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルにおける言語選択次元を用いたコードスイッチング検出",
      "summary_ja": "多言語が混在する音声から、文字起こしを介さず直接コードスイッチング（言語の切り替え）を検出する軽量な手法を提案。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "トライモーダル・マスクド拡散モデルのデザイン空間",
      "summary_ja": "テキスト、画像、音声をゼロから学習した初の三様態拡散モデルを導入。スケーリング法則や最適な推論設定を分析。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonの責任ある安全な開発",
      "summary_ja": "次世代モデル「Gemini 4 Argon」の開発において、安全性と倫理的責任を確保するために講じられている対策。"
    }
  ]
};
