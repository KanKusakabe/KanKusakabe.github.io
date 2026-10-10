window.papersData = {
  "updated_at": "2026-10-10 10:34 JST",
  "arxiv": [
    {
      "id": "2610.12099",
      "title": "UNITAS: A 3D-Native World Action Model for Embodied Manipulation",
      "url": "https://arxiv.org/abs/2610.12099",
      "pdf": "https://arxiv.org/pdf/2610.12099",
      "authors": [
        "Ruixiang Wang",
        "Yongyi Su",
        "Wenlve Zhou",
        "Bo Yue",
        "Hengyan Liu",
        "Dekun Lu"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, 11 figures and 13 tables. Under review",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "the first 3d-native world action model that unifies observations, actions, and scene dynamics",
      "signals": [],
      "headline": "共通の3Dメートル空間で行動と環境変化を予測するネイティブ3DワールドアクションモデルUNITAS",
      "what": "画像ベースではなく、3D点群（point cloud）を直接扱うワールドアクションモデル（WAM）です。ロボットの行動を3D軌跡（Action flow）として表現し、それによる周囲の変化を3D変位（Scene flow）として共通の座標系で予測・統合します。",
      "enables": "RoboTwin環境でのシーン予測誤差を既存手法より最大49%削減し、LIBEROベンチマークで99.8%の成功率を達成するなど、高い操作性能を実現しました。",
      "why_it_matters": "視点に依存する画像ではなく、物理的な距離を直接扱える3D表現を用いることで、異なるロボット間や人間とロボット間での知識共有を容易にします。",
      "tags": [
        "ワールドモデル",
        "ロボティクス",
        "3D理解"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12133",
      "title": "Rehearse Everything, Remember Nothing: Attic-KV Rehearses What Will Be Read",
      "url": "https://arxiv.org/abs/2610.12133",
      "pdf": "https://arxiv.org/pdf/2610.12133",
      "authors": [
        "Zhiyun Shi"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "14 pages, 5 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "a training-free rehearsal in which the model quizzes itself with question-answer pairs",
      "signals": [],
      "headline": "自己クイズ形式の再演によりKVキャッシュの圧縮効率を飛躍させるAttic-KV",
      "what": "KVキャッシュの圧縮において、単なるコンテキストの再読み込み（rehearsal）ではなく、モデル自身に質問・回答のペアを作成させてテストさせることで重要な情報を特定するAttic-KVを提案しています。予算が厳しい状況で、何を残すべきかをモデルの自己判断で決定します。",
      "enables": "保持率3%という極めて低い予算において、従来の全再演手法を41.9ポイント上回る性能を達成し、RULERやLongBenchなどのベンチマークで最良の学習不要手法となりました。",
      "why_it_matters": "「すべてを再読すると何も覚えない」という現象を指摘し、効率的なメモリ管理のための新たな原理を提示しています。",
      "tags": [
        "LLM",
        "KVキャッシュ",
        "長文処理"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
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
      "id": "2610.10608",
      "title": "From Investigation Failures to Reliable SOC Agents: Understanding and Improving LLM-Based Alert Triage",
      "url": "https://arxiv.org/abs/2610.10608",
      "pdf": "https://arxiv.org/pdf/2610.10608",
      "authors": [
        "Saimon Amanuel Tsegai (Daphne)",
        "Alex Kantchelian (Daphne)",
        "Danfeng (Daphne)",
        "Yao",
        "Peng Gao"
      ],
      "categories": [
        "cs.CR",
        "cs.AI",
        "cs.MA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "AIDA achieves an F1 score of 0.958, compared with 0.371-0.744 for the studied approaches",
      "signals": [],
      "headline": "マルチエージェントSOCフレームワークAIDAによるアラート調査の信頼性とF1スコアの大幅な向上",
      "what": "SOC（セキュリティオペレーションセンター）のアラート対応を自動化するマルチエージェントフレームワークAIDAを提案しています。独立したChallengeエージェントによる反論と、判断を確定させるJudgeエージェントの導入、さらに追記専用のInvestigation Ledgerによる履歴管理を特徴としています。",
      "enables": "既存のLLMエージェント手法と比較して、F1スコアを0.371-0.744から0.958へと大幅に改善し、偽陰性率を40.4%から3.1%にまで低減させることが可能になりました。",
      "why_it_matters": "従来のエージェントでは証拠不足のままアラートを却下する傾向がありましたが、対抗的な推論構造を導入することで実用的な信頼性を確保できることを示しています。",
      "tags": [
        "LLMエージェント",
        "サイバーセキュリティ",
        "マルチエージェント"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.10932",
      "title": "World-Model Policy Arbiter for Goal-Conditioned Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.10932",
      "pdf": "https://arxiv.org/pdf/2610.10932",
      "authors": [
        "Junwei Quan",
        "Evgenii Opryshko",
        "Nicholas Rhinehart",
        "Igor Gilitschenski"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 3 figures, 14 tables. Project page: https://junwei0102.github.io/wmpa-webpage/ Code: https://github.com/junwei0102/World-Model-Policy-Arbiter",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "WMPA improves the macro-average success rate from the 44% achieved by the best policy selected per dataset to 58%",
      "signals": [],
      "headline": "複数の凍結済み方策をワールドモデルで評価・選択するWMPAによるオフライン強化学習の汎用化",
      "what": "既存の複数の学習済み方策（frozen policies）をポートフォリオとして扱い、実行時に最適な方策を動的に選択するフレームワークWMPAを提案しています。学習済みの状態空間ワールドモデル内で各方策の挙動をシミュレーションし、共通の価値関数を用いて最も有望な方策を一定期間実行します。",
      "enables": "18種類のデータセットを用いた評価において、単一の最良方策の平均成功率44%を58%にまで向上させ、特に複雑な操作タスクで30ポイント以上の改善を達成しました。",
      "why_it_matters": "追加の学習を必要とせず、特性の異なる複数の方策を統合して単一の方策を上回る性能を引き出せる実用的なアプローチです。",
      "tags": [
        "強化学習",
        "ワールドモデル",
        "ロボット操作"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.10990",
      "title": "Omni-Diffusion-Distill: Few-Step Distillation of Unified Multimodal Diffusion Large Language Models",
      "url": "https://arxiv.org/abs/2610.10990",
      "pdf": "https://arxiv.org/pdf/2610.10990",
      "authors": [
        "Hong Huang",
        "Chenhongyi Yang",
        "Junzhe Sun",
        "Animesh Sinha",
        "Wuyang Chen",
        "Yifan Jiang"
      ],
      "categories": [
        "cs.CV",
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
      "star_quote": "reducing image generation from 128 to 8 decoding steps and multimodal understanding from 512 to 64",
      "signals": [],
      "headline": "統一マルチモーダル拡散LLMの推論を20倍以上高速化する蒸留手法Omni-Diffusion-Distill",
      "what": "画像生成とマルチモーダル理解の両方を1つのアーキテクチャでこなすdLLMを、少数の推論ステップで動作させるための2段階蒸留フレームワークです。離散トークン空間でのアライメント、反復抑制のためのペアワイズ衝突ペナルティ、エントロピー適合ガイダンスなどの技術を導入しています。",
      "enables": "画像生成を128ステップから8ステップへ、理解タスクを512ステップから64ステップへ削減し、それぞれ18.2倍と21.2倍の実行時間高速化を実現しました。",
      "why_it_matters": "従来は画像生成かテキスト生成のいずれかに特化していた蒸留手法を統合モデルに適用可能にし、高い性能を維持したまま効率的な推論を可能にしました。",
      "tags": [
        "拡散モデル",
        "LLM",
        "知識蒸留"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11119",
      "title": "FOCUS: From Privileged States to RGB-D with Controlled Modality Switching and Representation Alignment",
      "url": "https://arxiv.org/abs/2610.11119",
      "pdf": "https://arxiv.org/pdf/2610.11119",
      "authors": [
        "Filip Grigorov",
        "Kourosh Darvish",
        "Nandita Vijaykumar"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "38 pages, 9 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FOCUS raises average test success from 0.71 to 0.93 relative to the strongest RGB-D-at-test baseline",
      "signals": [],
      "headline": "特権情報からRGB-Dへのモダリティ切り替え制御による視覚ベース強化学習の効率化フレームワークFOCUS",
      "what": "シミュレーション上の特権情報（privileged state）と現実的なRGB-D入力のギャップを埋めるシングルステージのPPOフレームワークです。アクターが生成する行動分布のKLダイバーシティに基づき、特権情報とRGB-D入力のどちらを使用してロールアウトを行うかを自動的に調整します。",
      "enables": "5つの操作タスクにおいて、従来のベースラインの成功率0.71を0.93に向上させ、Pick-and-Placeタスクでは学習効率を5倍に高めることに成功しました。",
      "why_it_matters": "特権情報から視覚情報への移行を動的に制御することで、サンプル効率の向上とテスト時のモダリティ適合を両立させています。",
      "tags": [
        "強化学習",
        "ロボティクス",
        "表現学習"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11583",
      "title": "SDPAD: A Fully Spike-Driven Pipeline for End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.11583",
      "pdf": "https://arxiv.org/pdf/2610.11583",
      "authors": [
        "Chengjun Zhang",
        "Yuhao Zhang",
        "Jie Yang",
        "Mohamad Sawan"
      ],
      "categories": [
        "cs.RO",
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
        "cap"
      ],
      "star_quote": "SDPAD is the first fully spike-driven planner evaluated in end-to-end autonomous driving",
      "signals": [],
      "headline": "スパイク駆動型ニューラルネットワークによる高効率かつ高精度な自動運転プランナーSDPAD",
      "what": "完全なスパイク駆動型（spike-driven）のエンドツーエンド自動運転プランニングパイプラインです。量子化されたANN2SNN変換、スパイク駆動型3Dリフト、およびSpike-QFormerを用いたクエリベースの融合により、全演算を整数スパイクで処理します。",
      "enables": "nuScenesベンチマークで従来のANNプランナーと同等の精度（衝突率0.12%）を維持しつつ、消費エネルギーを既存のANNベースラインの2%未満（69.9mJ）に抑えました。",
      "why_it_matters": "複雑な運転タスクにおいて、SNNが精度の劣化なしにANNを代替できることを実証し、エッジデバイスへの展開に道を開きました。",
      "tags": [
        "スパイクニューラルネットワーク",
        "自動運転",
        "低消費電力"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11685",
      "title": "HI3D 3.0 (Twinkle3D): Object-specific 3D Asset Generation with High Resolution",
      "url": "https://arxiv.org/abs/2610.11685",
      "pdf": "https://arxiv.org/pdf/2610.11685",
      "authors": [
        "Ziying Li",
        "Shengchu Zhao",
        "Huiang He",
        "Yiyang Chen",
        "Jianwen Huang",
        "Bailin Li"
      ],
      "categories": [
        "cs.CV",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Hi3D 3.0 (Twinkle3D) Technical Report",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "recovering 82.1% of inscribed characters at 98.2% precision, compared with 21.7% recall for the strongest competitor.",
      "signals": [],
      "headline": "2048解像度でブランド名や形状を忠実に再現する3D資産生成システムHi3D 3.0",
      "what": "画像から3Dメッシュを生成する際、形状の忠実性を高めるためのDiT（Diffusion Transformer）ベースのモデルTwinkle3Dを核としたシステムです。30万個の幾何トークンを扱うスケーリング、シングルステージでの高精細化、画像と3D間の微細な相互作用メカニズムを導入しています。",
      "enables": "従来手法が21.7%しか再現できなかった微細な文字やロゴなどの特徴を、82.1%の再現率かつ98.2%の適合率で復元することに成功しました。",
      "why_it_matters": "汎用的な形状生成にとどまらず、工業製品などのアイデンティティに関わる詳細な幾何構造を高品質に生成できる点が画期的です。",
      "tags": [
        "3D生成",
        "拡散モデル",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12336",
      "title": "asdex: Automatic Sparse Differentiation in JAX",
      "url": "https://arxiv.org/abs/2610.12336",
      "pdf": "https://arxiv.org/pdf/2610.12336",
      "authors": [
        "Adrian Hill",
        "Guillaume Dalle"
      ],
      "categories": [
        "cs.MS",
        "cs.LG",
        "cs.NA",
        "math.NA"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "1 table",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "asdex offers the first standalone ASD toolkit in the popular JAX ecosystem",
      "signals": [],
      "headline": "JAX環境で大規模なスパース・ヤコビ行列/ヘッセ行列を高速計算するasdex",
      "what": "JAXエコシステムに統合された自動疎微分（Automatic Sparse Differentiation, ASD）ツールキットです。入力に対する出力の依存関係の疎性を検出し、グラフ彩色アルゴリズムを用いて計算を圧縮することで、必要な微分パスの回数を劇的に削減します。",
      "enables": "jax.jacobianやjax.hessianのドロップイン置換として機能し、次元に依存しない効率的な導関数計算を可能にします。",
      "why_it_matters": "科学計算や機械学習における大規模最適化問題において、メモリと計算時間のコストを大幅に削減する実用的なインフラを提供します。",
      "tags": [
        "自動微分",
        "JAX",
        "数値計算"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
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
      "id": "2610.12468",
      "title": "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training",
      "url": "https://arxiv.org/abs/2610.12468",
      "pdf": "https://arxiv.org/pdf/2610.12468",
      "authors": [
        "Junyan Li",
        "Ruizhi Li",
        "Yu Liu",
        "Xiangshuo Liu",
        "Mingchao Sun",
        "Hongyu Pan"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "project page: https://brave-eai.github.io/DreamTrue; code: https://github.com/brave-eai/DreamTrue",
      "hf_upvotes": 34,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "DreamTrue attains state-of-the-art action following",
      "signals": [
        "HF ▲34"
      ],
      "headline": "反実仮想的なポストトレーニングにより行動追従性を高めたワールドモデルDreamTrue",
      "what": "マルチビュー対応のロボットワールドモデルです。行動軌跡を画像空間の条件としてレンダリングし、オフラインの幾何学的キャリブレーションで整合性を高めるとともに、失敗例を含む反実仮想的なデータを用いた強化バイアスへの対策を施しています。",
      "enables": "人間による評価において、相互作用の不具合率を48.12%から6.25%へと劇的に減少させ、AgiBot World Challenge 2026のワールドモデル部門で首位を獲得しました。",
      "why_it_matters": "ロボットが自らの行動による未来の変化を正確にシミュレーションできるようになり、より安全で信頼性の高いプランニングが可能になります。",
      "tags": [
        "ワールドモデル",
        "ロボティクス",
        "ビデオ生成"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
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
      "id": "2610.11458",
      "title": "Generative Adversarial Loops",
      "url": "https://arxiv.org/abs/2610.11458",
      "pdf": "https://arxiv.org/pdf/2610.11458",
      "authors": [
        "Kislay Aditya Oj",
        "Nidhi Jain",
        "Sri Surya Varma Datla",
        "Priyanka Jayaswal",
        "Kumar Krishna Agrawal",
        "Aditya Desai"
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
      "star_quote": "we propose Generative Adversarial Loop (GAL), a generator-discriminator framework alternating between two agentic searches",
      "signals": [],
      "headline": "ベンチマーク作成と手法発見を自己進化させるフレームワークGenerative Adversarial Loops",
      "what": "現在のシステムの弱点を突くアドバーサリアルなデータを生成するDiscriminatorと、それを克服するアルゴリズムを発見するGeneratorを交互に実行するGALフレームワークを提案しています。KV圧縮やコンテキスト拡張など、4つの効率的推論タスクに適用しています。",
      "enables": "KV圧縮において、既存のCompactorPressをQwen3-4B上で改善し、Discriminator用データセットでのスコアを0.35から0.97へと向上させました。",
      "why_it_matters": "AIによる自動研究において手法の発見だけでなく、目標設定（ベンチマーク作成）も自動化することで、自律的なシステムの進化を可能にします。",
      "tags": [
        "自己進化",
        "LLM",
        "アルゴリズム発見"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11627",
      "title": "Beyond Action Entropy: Quotient-Space Exploration for Genome-Scale Metabolic Model Repair",
      "url": "https://arxiv.org/abs/2610.11627",
      "pdf": "https://arxiv.org/pdf/2610.11627",
      "authors": [
        "Xuan Gong",
        "Hanbo Huang",
        "Wenbin Dai",
        "Jing Wang",
        "Lei Bai",
        "Xiang Xiao"
      ],
      "categories": [
        "cs.LG",
        "q-bio.MN"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Under Review",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce QuotientPO, which collapses equivalent repairs into canonical mechanisms and optimizes exploration directly over the resulting quotient space.",
      "signals": [],
      "headline": "商空間での探索により科学モデル修復の多様性と精度を高めるQuotientPO",
      "what": "ゲノム規模代謝モデル（GEM）の修復において、生物学的に同等な修正案を単一のメカニズムとして集約するQuotientPOを提案しています。出力空間の多様性ではなく、等価な修復を「商空間（quotient space）」として扱い、核となる修正メカニズムのレベルで探索を最適化します。",
      "enables": "2,212個のモデルを用いた評価において、修復成功率を17.93%から20.10%へ向上させ、限られたサンプリング予算内でより多くの異なる解決策を発見しました。",
      "why_it_matters": "科学的な仮説生成において、表面上の多様性ではなく本質的なメカニズムの多様性を追求するための数学的枠組みを提供しています。",
      "tags": [
        "強化学習",
        "バイオインフォマティクス",
        "探索アルゴリズム"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12189",
      "title": "Just Weather Scoring: Efficient End-to-end Nowcasting with Distributional Diffusion",
      "url": "https://arxiv.org/abs/2610.12189",
      "pdf": "https://arxiv.org/pdf/2610.12189",
      "authors": [
        "Jannik Wiese",
        "Johannes Schusterbauer",
        "Tommaso Martorella",
        "Bj\\\"orn Ommer"
      ],
      "categories": [
        "cs.LG",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://compvis.github.io/jws",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "on the SEVIR and MeteoNet benchmarks, JWS achieves state-of-the-art probabilistic forecasting",
      "signals": [],
      "headline": "レーダー空間での直接学習により高速・高精度な降水予測を実現する拡散モデルJWS",
      "what": "圧縮や決定論的な予測コンポーネントを介さず、レーダー空間で直接予測を行うシングルステージの拡散モデルです。高次元の時空間データに適応したMasked Asynchronous Diffusionサンプリングと、少数の推論ステップで高精度な生成を可能にするスコアリングルール目的関数を採用しています。",
      "enables": "SEVIRなどのベンチマークでSOTAの予測精度を達成し、パラメータ数を大幅に削減しつつ、既存手法より17倍以上の高速な推論が可能になりました。",
      "why_it_matters": "気象予測特有の不確実性を考慮しつつ、実運用に耐えうる低遅延な確率的ナウキャスト手法を確立しています。",
      "tags": [
        "気象予測",
        "拡散モデル",
        "時系列予測"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12402",
      "title": "SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in Vision-Language Models",
      "url": "https://arxiv.org/abs/2610.12402",
      "pdf": "https://arxiv.org/pdf/2610.12402",
      "authors": [
        "Hongxing Li",
        "Jinyue Su",
        "Dingming Li",
        "Wenqi Zhang",
        "Weiming Lu",
        "Jun Xiao"
      ],
      "categories": [
        "cs.CV",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/ZJU-REAL/SpaceCast-Bench Dataset: https://huggingface.co/datasets/hongxingli/SpaceCast-Bench",
      "hf_upvotes": 7,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "SpaceCast-Bench, the first benchmark to directly and diagnostically evaluate this capability",
      "signals": [],
      "headline": "VLMの予測的空間推論能力を診断する新ベンチマークSpaceCast-Bench",
      "what": "単なる物体の認識（知覚）ではなく、介入による変化や未観察の結果を推論する「予測的空間推論」を評価するベンチマークです。182の現実シーンに基づいた3,862の質問で構成され、静的な知覚、局所的な予測、全体的な予測の3レベルで評価します。",
      "enables": "最新のVLMを評価した結果、人間が87.2%の正解率であるのに対し、最強のモデルでも58.0%に留まるという大きな性能乖離があることを明らかにしました。",
      "why_it_matters": "既存の知覚中心の評価から、物理的な世界理解を必要とするより高度な空間知能の研究へと焦点を移す指標となります。",
      "tags": [
        "VLM",
        "空間推論",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.10646",
      "title": "Masked Generative Motion Planning with Geometry-Guided Token Search",
      "url": "https://arxiv.org/abs/2610.10646",
      "pdf": "https://arxiv.org/pdf/2610.10646",
      "authors": [
        "Lipeng Zhuang",
        "Yingdong Ru",
        "Shiyu Fan",
        "Edmond S. L. Ho",
        "Gerardo Aragon Camarasa",
        "Paul Henderson"
      ],
      "categories": [
        "cs.RO",
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
      "star_quote": "exceeding the strongest external baselines by 23 and 25 percentage points, respectively.",
      "signals": [],
      "headline": "幾何情報を利用したトークン探索により経路レベルの修正を可能にするモーションプランナーMGMP",
      "what": "マスク生成トランスフォーマーを用いたモーションプランニング手法です。Geometry-Guided Token Search (GGTS)により、シーンの幾何形状に基づいて離散的な軌跡候補のどこを修正すべきかを特定し、並列的に代替案を生成・検証します。",
      "enables": "Ring Maze環境で96%の成功率を達成し、従来の最強のベースラインを20ポイント以上上回る修正成功率を記録しました。",
      "why_it_matters": "局所的な形状変形にとどまっていた従来の修正手法と異なり、障害物を回避するための根本的な経路変更を効率的な離散探索として実現しています。",
      "tags": [
        "ロボット計画",
        "トランスフォーマー",
        "幾何推論"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11370",
      "title": "RIT-RAG: Navigating Document Corpora with Retrieval-Induced Trees",
      "url": "https://arxiv.org/abs/2610.11370",
      "pdf": "https://arxiv.org/pdf/2610.11370",
      "authors": [
        "Meghanadh Pulivarthi",
        "Swaraj Kumar Biswal",
        "Kushagra Bhushan",
        "Yatin Nandwani",
        "Sachindra Joshi",
        "Dinesh Raghu"
      ],
      "categories": [
        "cs.AI",
        "cs.IR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages (main text through Limitations ends on page 9, followed by references and appendix), 9 figures, 16 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "it improves accuracy by 6.8 to 11.4 points over the strongest baseline across three LLMs.",
      "signals": [],
      "headline": "文書構造を木として誘導し大規模コーパスをナビゲートするRIT-RAG",
      "what": "従来のチャンク単位の検索ではなく、検索結果から文書構造のサブツリーを動的に構成してLLMに探索させる手法です。オフラインで構築された文書の目次構造を活用し、LLMエージェントがどのノードを詳しく読むべきかを判断しながら検索を深化させます。",
      "enables": "284万ページの技術ドキュメントを含むEntQABenchにおいて、従来のRAG手法と比較して正解率を最大11.4ポイント向上させました。",
      "why_it_matters": "大規模なコーパスにおいて文書構造を失わずに探索できるため、類似したチャンクに惑わされることなく正確な証拠にたどり着くことが可能です。",
      "tags": [
        "RAG",
        "LLMエージェント",
        "情報検索"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11371",
      "title": "SignRAG: Unified Retrieval-Augmented Gloss-Free Sign Language Translation",
      "url": "https://arxiv.org/abs/2610.11371",
      "pdf": "https://arxiv.org/pdf/2610.11371",
      "authors": [
        "Zhi Rao",
        "Yucheng Zhou",
        "Qianran Sun",
        "Yiqing Huang",
        "Longcan Yuan",
        "Jiayi Hou"
      ],
      "categories": [
        "cs.CL",
        "cs.CV",
        "cs.MM"
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
      "star_quote": "SignRAG is the first gloss-free approach to outperform gloss-supervised methods across all reported metrics on CSL-Daily.",
      "signals": [],
      "headline": "手話辞書を介さず直接翻訳を実現する検索拡張型フレームワークSignRAG",
      "what": "グロス（手話単語のラベル）を介さないSign-to-Text翻訳のためのフレームワークです。階層的プリトレーニング、検索によるターゲットドメインの補助情報の活用、および検索の有用性に基づいた強化学習（RUG-RFT）を組み合わせています。",
      "enables": "CSL-Dailyベンチマークにおいて、グロス情報を使用しない手法として初めて、グロス監督ありの手法をすべての指標で上回る性能を達成しました。",
      "why_it_matters": "データセットの制約が強いグロス情報に頼らず、最新のデコーダー専用LLMを手話翻訳に効率的に適合させる道を示しました。",
      "tags": [
        "手話翻訳",
        "マルチモーダル理解",
        "RAG"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11423",
      "title": "Policy Alignment: New Signals for Membership Auditing in On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.11423",
      "pdf": "https://arxiv.org/pdf/2610.11423",
      "authors": [
        "Yilong Yang",
        "Wenzhuo Shang",
        "Yule Liu",
        "Jiale Teng",
        "Zhuo Ma"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "PAMA achieves AUC values of 0.791--0.941, improving AUC by 14.6--20.6% over state-of-the-art baselines.",
      "signals": [],
      "headline": "方策アライメントの追跡によりオン方策蒸留の機密プロンプトを特定するPAMA",
      "what": "オン方策蒸留（OPD）において、特定のプロンプトが教師モデルからの知識抽出に使われたかどうかを判定するメンバーシップ監査フレームワークです。プロンプトがモデル更新の方向にどのように寄与したかを測定するTeacher Alignment Gain (TAG)という新指標を導入しています。",
      "enables": "MATHデータセットにおいてAUC 0.791-0.941を達成し、既存のSOTA手法に対して14.6-20.6%の性能向上を実現しました。",
      "why_it_matters": "高品質なプロンプトセットの機密保護を可能にし、モデルの学習過程におけるプライバシー漏洩のリスクをより正確に評価できます。",
      "tags": [
        "知識蒸留",
        "プライバシー",
        "モデル監査"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12362",
      "title": "Closing the Horizon Gap in Policy Optimization for Adversarial MDPs",
      "url": "https://arxiv.org/abs/2610.12362",
      "pdf": "https://arxiv.org/pdf/2610.12362",
      "authors": [
        "Mingyi Li",
        "Taira Tsuchiya"
      ],
      "categories": [
        "cs.LG",
        "stat.ML"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 2 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "using regularized $Q$-functions, which allow us to control the stability of the local updates",
      "signals": [],
      "headline": "正則化Q関数を用いてアドバーサリアルMDPにおける方策最適化の誤差界を改善",
      "what": "損失が敵対的に設定されるタブラー型マルコフ決定過程（MDP）における方策最適化アルゴリズムの研究です。正則化されたQ関数を導入することで、全状態・行動ペアに対する更新の安定性を制御し、ホライゾン（H）に対する依存性を低減させています。",
      "enables": "遷移確率が既知および未知の場合の両方で、既存の理論的限界（regret bound）をHの係数分だけ改善し、最適な依存性を達成しました。",
      "why_it_matters": "占有測度（occupancy measure）の最適化を避ける方策最適化手法が、理論的にも最良の効率を達成できることを示し、強化学習の基盤理論を強化しました。",
      "tags": [
        "強化学習理論",
        "方策最適化",
        "オンライン学習"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
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
      "id": "2610.12374",
      "title": "AgentGarten: Code Worlds for Evolving Agents",
      "url": "https://arxiv.org/abs/2610.12374",
      "pdf": "https://arxiv.org/pdf/2610.12374",
      "authors": [
        "Jiawei Chi",
        "Shangchen Miao",
        "Zhiyuan Shi",
        "Kailu Wu",
        "Hanyang Wang",
        "Weiliang Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://mirros-lab.github.io/agent-garten",
      "hf_upvotes": 132,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲132"
      ],
      "headline": "シミュレータとニューラルレンダラーを結合しエージェントを自律進化させるAgentGarten",
      "what": "プログラムで定義されたゲームエンジン等のシミュレータと、学習済みのビデオモデルをベースにしたニューラルレンダラーを組み合わせた対話型環境構築フレームワークです。エージェントは視覚情報を通じてリアルタイムに操作を行い、その経験をPlaybookとして後続へ継承します。",
      "enables": "従来数百万回の試行が必要だった強化学習と比較し、わずか4ラウンドの対話経験から効率的に学習できることを実証しました。",
      "why_it_matters": "環境自体をコードとして定義しつつ、リアルな視覚フィードバックを提供できるため、エージェントの能力向上に合わせて難易度をスケールさせることが容易になります。",
      "tags": [
        "ロボット学習",
        "シミュレーション",
        "ニューラルレンダリング"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12242",
      "title": "TokenRouter: Efficient Serving System for Token-Level LLM Routing",
      "url": "https://arxiv.org/abs/2610.12242",
      "pdf": "https://arxiv.org/pdf/2610.12242",
      "authors": [
        "Tianyu Fu",
        "Tengxuan Liu",
        "Ruoxi Wang",
        "Yixin Dong",
        "Yi Ge",
        "Yichen You"
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
      "comment": "Accepted by NeurIPS 2026",
      "hf_upvotes": 104,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲104"
      ],
      "headline": "トークン単位のLLMルーティングを最大64倍高速化するサービングシステムTokenRouter",
      "what": "複数のLLMを動的に使い分ける際、従来のクエリ単位ではなくトークン単位で経路を切り替える推論システムです。モデルごとのサブサーバー化と、スループット理論モデルに基づく最適遅延バッチングスケジューラにより、ルーティングに伴う同期遅延を解消しています。",
      "enables": "多様なルーティングアルゴリズムとワークロードにおいて、既存システムよりもデコードスループットを2.01倍から最大64.15倍向上させました。",
      "why_it_matters": "トークンレベルのきめ細かなルーティングが持つポテンシャルを、実用的なサービングコストで引き出すためのインフラを構築しました。",
      "tags": [
        "LLM推論",
        "システム最適化",
        "ルーティング"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12126",
      "title": "SuperNav: An Agentic Navigation System for Any Task in Any Scene",
      "url": "https://arxiv.org/abs/2610.12126",
      "pdf": "https://arxiv.org/pdf/2610.12126",
      "authors": [
        "Jinkai Zhang",
        "Jingyi Xu",
        "Yuanhong Yu",
        "Jiarui Guo",
        "Ruizhen Hu",
        "Hujun Bao"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "20 pages, 7 figures. Project page: https://zju3dv.github.io/SuperNav/",
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "MLLMにナビゲーションツールを装備した汎用エージェントシステムSuperNav",
      "what": "事前学習済みマルチモーダルLLM（MLLM）を、ナビゲーション専用の追加学習なしでエージェント化するシステムです。MLLMを「判断役」とし、実際の移動や画像内の座標指定を「ナビゲーションスキル」ツールに委ねることで、未知の環境や指示に対応します。",
      "enables": "複数物体の探索や指示に基づく移動タスクにおいて4つのベースラインを上回り、実際の4足歩行ロボットへの搭載にも成功しました。",
      "why_it_matters": "ナビゲーション固有のデータセットに縛られず、MLLMの持つ汎用的な推論能力を直接ロボットの移動能力に結びつけることができます。",
      "tags": [
        "ロボティクス",
        "MLLMエージェント",
        "ビジュアルナビゲーション"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11959",
      "title": "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement",
      "url": "https://arxiv.org/abs/2610.11959",
      "pdf": "https://arxiv.org/pdf/2610.11959",
      "authors": [
        "Core Team",
        "Zongming Qiao",
        "Ziyue Hua",
        "Zirui Ou",
        "Zihao Yue",
        "Zihan Jiang"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 57,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲57"
      ],
      "headline": "大規模な強化学習のスケーリングにより自己進化を目指すモデルシリーズMiMo-V2.6",
      "what": "強化学習（RL）の計算量を大幅にスケールアップさせた、マルチモーダルな基盤モデルシリーズです。非同期トレーニングによる巨大バッチ処理、100万トークンのコンテキスト長、およびエージェントベースの報酬（Grader）システムによる報酬設計を特徴としています。",
      "enables": "コード、視覚、サイバー領域などの多様なドメインにおいて、より少ないトークンで正確な解を導くための自己進化能力を強化しました。",
      "why_it_matters": "強化学習のスケーリングがモデルの知能向上にどのように寄与するかを、インフラストラクチャレベルからオープンソース化して提示しています。",
      "tags": [
        "強化学習",
        "LLM",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12299",
      "title": "Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction",
      "url": "https://arxiv.org/abs/2610.12299",
      "pdf": "https://arxiv.org/pdf/2610.12299",
      "authors": [
        "Dahyun Chung",
        "Siyoon Jin",
        "Hyunwook Choi",
        "Honggyu An",
        "Junyoung Seo",
        "Hyunsung Kim"
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
      "hf_upvotes": 44,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲44"
      ],
      "headline": "複数エージェントの微細な相互作用を同時に予測するワールドモデルME-World",
      "what": "共有された環境内で複数のエージェントが同時に行動する様子を、それぞれの第一人称視点（egocentric）ビデオとして生成するモデルです。全エージェントのトークンを単一の系列でデノイズし、共通の環境メモリとポーズ情報で一貫性を保ちます。",
      "enables": "移動だけでなく物体の操作を含む微細なアクションにおいて、他者の行動が自分の視界に反映されるなど、高い一貫性を持つ複数視点の動画生成を可能にしました。",
      "why_it_matters": "マルチエージェント環境における世界理解を、個別の予測ではなく共有された世界状態の更新としてモデル化する手法を確立しました。",
      "tags": [
        "ワールドモデル",
        "マルチエージェント",
        "ビデオ生成"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12421",
      "title": "Beyond Spatio-Temporal Priors: A Generalizable Approach for Dense Correspondence Matching",
      "url": "https://arxiv.org/abs/2610.12421",
      "pdf": "https://arxiv.org/pdf/2610.12421",
      "authors": [
        "Luping Liu",
        "Bingyi Kang",
        "Yifan Wang",
        "Dong Xu"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at NeurIPS 2026. 24 pages, 7 figures, including appendices",
      "hf_upvotes": 32,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲32"
      ],
      "headline": "物理的な連続性を超えて同一性を維持した対応付けを行うFreeMatching",
      "what": "画像編集や生成タスクにおいて、物体の見た目の同一性を保ちながら密な対応関係（dense correspondence）を抽出するフレームワークです。意味的な特徴量と、動画追跡や合成データからの教師信号を組み合わせた反復的洗練プロセスを導入しています。",
      "enables": "画像編集後のペアなど、従来の物理的な滑らかさが仮定できない状況において、対応付けの精度を大幅に向上させました。",
      "why_it_matters": "古典的なビジョンタスクだけでなく、生成AIによる画像変形が「どれだけ元画像のアイデンティティを保っているか」を定量化する評価指標としても機能します。",
      "tags": [
        "コンピュータビジョン",
        "表現学習",
        "画像編集"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12461",
      "title": "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs",
      "url": "https://arxiv.org/abs/2610.12461",
      "pdf": "https://arxiv.org/pdf/2610.12461",
      "authors": [
        "You-Zhe Xie",
        "Ting-Wei Chou",
        "Yu-Hsuan Li",
        "Kaipeng Zhang",
        "Zhixiang Wang",
        "Yu-Lun Liu"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://ouroworld.userwei.com",
      "hf_upvotes": 30,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲30"
      ],
      "headline": "静止した3Dシーンを多様な動きが無限ループするシネマグラフに変えるOuroWorld",
      "what": "静止した3D Gaussian Splattingシーンに対し、VLMで推論した動きを反映させて無限ループする3Dシネマグラフを生成する手法です。フーリエ級数を用いた変形フィールドにより構造的にループを保証し、視点間の矛盾を吸収するGrounded Drift Fieldを導入しています。",
      "enables": "流体のような動きだけでなく、物体の変形や照明の変化を含む多様な動きを、あらゆる角度からシームレスに観察可能な4Dシーンとして生成できます。",
      "why_it_matters": "マスク指定などの手作業なしに、任意の3Dシーンに「生命感（vividness）」を吹き込むことができる汎用的なツールとなります。",
      "tags": [
        "3D Gaussian Splatting",
        "ビデオ生成",
        "4D生成"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11152",
      "title": "Do LLMs Learn from Rewards in Context? : Rethinking the role of reward in In-Context Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.11152",
      "pdf": "https://arxiv.org/pdf/2610.11152",
      "authors": [
        "Minchan Kwon",
        "Seunghee Koh",
        "Sunghyun Baek",
        "Minsung Bae",
        "Junmo Kim"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "NeurIPS 2026 Spotlight (Negative Results Track)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "コンテキスト内の報酬信号はLLMの改善にほとんど寄与していないという分析結果",
      "what": "LLMが推論時に文脈内の経験から学習する「In-Context Reinforcement Learning (ICRL)」において、報酬信号（reward）が実際にどのような役割を果たしているかを調査した研究です。報酬の値を反転させたりランダムにしたりした場合の挙動を、複数のモデルとベンチマークで比較しました。",
      "enables": "報酬を操作してもモデルの性能向上曲線がほとんど変わらないことを明らかにし、ICRLが本質的には強化学習というより、従来のICL（コンテキスト内学習）の特殊なケースであることを示しました。",
      "why_it_matters": "エージェントの設計において、報酬の精緻化よりもデモンストレーションの分布や入力の質に注力すべきであるという示唆を与えています。",
      "tags": [
        "LLM",
        "強化学習",
        "コンテキスト内学習"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.11506",
      "title": "Compactness and Consistency: A Conjoint Framework for Deep Graph Clustering",
      "url": "https://arxiv.org/abs/2610.11506",
      "pdf": "https://arxiv.org/pdf/2610.11506",
      "authors": [
        "Wei Ju",
        "Siyu Yi",
        "Kangjie Zheng",
        "Yifan Wang",
        "Ziyue Qiao",
        "Li Shen"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.IR",
        "cs.SI"
      ],
      "venues": [
        "ICLR"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted by Proceedings of the Fourteenth International Conference on Learning Representations (ICLR 2026 Oral)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "低ランク埋め込みによる緻密性と一貫性を追求したグラフクラスタリング手法CoCo",
      "what": "グラフニューラルネットワーク（GNN）を用いたクラスタリングにおいて、ノード表現の「緻密性（compactness）」と「一貫性（consistency）」を同時に最適化するフレームワークです。グラフ畳み込みフィルタを用いてローカル・グローバル両方の情報を抽出し、ノイズを除去した低ランク表現を学習します。",
      "enables": "ノード間のグローバルな関係性を捉えつつ、データに含まれる冗長性やノイズを効果的に除去し、既存のSOTA手法を上回るクラスタリング精度を達成しました。",
      "why_it_matters": "メッセージパッシングに依存するGNNの限界を克服し、より堅牢で解釈性の高いグラフ表現学習を可能にします。",
      "tags": [
        "グラフニューラルネットワーク",
        "データマイニング",
        "クラスタリング"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12007",
      "title": "REACT: Rolling Denoising and Dual Decoupling for Reactive Robot Control with VLA Models",
      "url": "https://arxiv.org/abs/2610.12007",
      "pdf": "https://arxiv.org/pdf/2610.12007",
      "authors": [
        "Houlong Xiong",
        "Zhenqi Qiu",
        "Zechen Wang",
        "Suohang Zhang",
        "Yiyu Ren",
        "Wanting Xu"
      ],
      "categories": [
        "cs.RO",
        "cs.AI"
      ],
      "venues": [
        "CoRL"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted to CoRL 2026 as Spotlight. Project page: https://react-vla.github.io",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "ローリング・デノイジングによりVLAモデルの反応速度と一貫性を両立するREACT",
      "what": "Vision-Language-Action (VLA)モデルにおける「行動チャンク（action chunk）」の実行において、逐次的にバッファを更新しながらデノイズを行うフレームワークです。また、センシング、エンコーディング、デノイズ、実行の各工程を分離（dual decoupling）して並列化しています。",
      "enables": "長期的なコンテキストを維持したまま、頻繁な再計画に伴う軌跡の不連続性を抑え、反応の遅延（latency）を大幅に短縮しつつ成功率を向上させました。",
      "why_it_matters": "計算コストの高いVLM/VLAモデルを、リアルタイムかつスムーズなロボット制御に適用するための実用的な解法を提供します。",
      "tags": [
        "ロボティクス",
        "VLA",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
    },
    {
      "id": "2610.12431",
      "title": "Control-Ready Uncertainty for Trajectory Diffusion",
      "url": "https://arxiv.org/abs/2610.12431",
      "pdf": "https://arxiv.org/pdf/2610.12431",
      "authors": [
        "Zhiwei Xue",
        "Jia Yue Kam",
        "Jinhang Qiu",
        "Yifeng Cheng",
        "Ege Gursoy",
        "Jiaming Wang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "CoRL"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted at the Conference on Robot Learning (CoRL) 2026 as a Spotlight presentation. 39 pages, 12 figures",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "モンテカルロ法なしで拡散モデルからリアルタイムに不確実性を抽出するSCOPE",
      "what": "軌跡生成用の拡散モデルに付加し、不確実性（分散）を高速に推定するための軽量モジュールです。スコア関数の曲率情報を蒸留することで、名目上の軌跡の周囲にキャリブレーションされた「ガウス型のチューブ（Gaussian tubes）」を少ないオーバーヘッドで生成します。",
      "enables": "繰り返しサンプリングを行うことなく、制御に利用可能な精度の高い共分散推定を可能にし、歩行者予測やロボット操作における安全性を向上させました。",
      "why_it_matters": "計算資源が限られたリアルタイム制御の現場で、拡散モデルが持つマルチモーダルな予測能力を不確実性評価とともに利用可能にします。",
      "tags": [
        "拡散モデル",
        "不確実性推定",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-10T10:34:42.701570+09:00"
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
    }
  ],
  "hf": [
    {
      "id": "2610.01780",
      "title": "RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations",
      "abstract": "A companion that talks with a person for months should come to understand them. It should remember what they said, infer who they are, and know when the past bears on the message in front of it. Testing this requires a real person's record, and such records are private, so benchmarks generate the person and the questions and settle in advance what matters. We release \\bench, ten real relationships with an AI companion: 27,218 messages over up to 120 days, released as the conversation and four files derived from it, a profile, a persona, a chat ground truth and a question set, each citing the messages it rests on. Every chat label carries the reasoning trace that produced it, checked stage by stage against the conversation. Three findings follow. First, the past is rarely needed and far away. Pooled measures mislead: a recency window finds the required message for 95.9\\% of probes and 2.2\\% of those that need memory, and at the natural rate 96\\% of the gain from supplying recorded evidence comes from messages that need none. Second, no detector we tried can tell when memory is needed on real messages, authored questions over the same histories leak the cue, and labeling the same messages as memories raises their use by ten to fourteen points. Third, three agent systems reconstruct the persona with the same F1 at a 31-fold difference in cost.",
      "upvotes": 276,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Quis Lab",
      "url": "https://huggingface.co/papers/2610.01780",
      "arxiv_url": "https://arxiv.org/abs/2610.01780",
      "title_ja": "RealCompanion: 長期的な実世界会話を通じた人間理解のベンチマーク",
      "summary_ja": "最大120日間に及ぶAIとの実対話データを用い、長期的な文脈から個人の属性や過去の発言を推論する能力を評価する。"
    },
    {
      "id": "2610.08448",
      "title": "Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability",
      "abstract": "On-Policy Distillation (OPD) trains a student on its own generations using teacher feedback. With different tokenizers, comparing teacher and student predictions requires alignment at both sequence and vocabulary levels. In this paper, we examine whether expanding this alignment coverage improves learning. Across three heterogeneous teacher--student pairs on mathematical reasoning and code generation, strict 1:1 groups already cover most student-generated tokens despite substantial vocabulary mismatch. On responses sampled from the students before distillation, the shared vocabulary retains nearly all teacher and student probability mass at strictly aligned positions on average. Restricting reverse KL to a student-selected top-16 subset of the shared vocabulary at each strict position achieves accuracy comparable to full shared-vocabulary OPD, outperforming the evaluated cross-tokenizer baselines. Adding mean squared error supervision on span log-probabilities in mismatch groups gives complete supervision coverage, yet reduces accuracy. At checkpoints from training with only the strict loss, the span gradients show weak or negative directional agreement with the strict gradients and grow in magnitude relative to them. These diagnostics may help explain the accuracy drop from adding span supervision. Our findings motivate a shift from maximizing alignment coverage to prioritizing supervision reliability: compact supervision at strict positions can be more effective than broader coverage that introduces weakly aligned or conflicting training signals.",
      "upvotes": 185,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.08448",
      "arxiv_url": "https://arxiv.org/abs/2610.08448",
      "title_ja": "クロストークナイザー・オンポリシー蒸留の再考",
      "summary_ja": "語彙が異なる教師・生徒モデル間でも、厳密にアライメントされたトークンのみで十分な学習が可能であることを実証した。"
    },
    {
      "id": "2610.05608",
      "title": "Kandinsky 6.0 Video: Foundation Models for Synchronized Video and Audio Generation",
      "abstract": "We present Kandinsky 6.0 Video, a family of foundation diffusion models for synchronized text-to-audio-video generation, comprising Kandinsky 6.0 Video Lite (3B parameters) and Kandinsky 6.0 Video Pro (29B parameters). Both models generate 5-second video clips with synchronized 44 kHz audio, including lip-sync, in text-to-audio-video (T2AV) and image-to-audio-video (I2AV) modes; a built-in super-resolution model raises the output resolution to Full-HD (1920times1080). Building on the video generation capabilities of Kandinsky 5.0, Kandinsky 6.0 Video employs a dual-stream CrossDiT architecture that connects a pretrained video stream and a newly trained audio stream through bidirectional cross-attention for temporal and semantic alignment. Our continuous pretraining strategy first trains the audio stream from scratch on large-scale audio corpora and then trains both streams jointly on paired audio-video data while preserving unimodal fidelity; pretraining is followed by supervised fine-tuning, reinforcement-learning-based post-training, and distillation. In side-by-side human evaluation, Kandinsky 6.0 Video Pro clearly outperforms its predecessor, Kandinsky 5.0 Video Pro, and remains competitive with leading audio-video generation models, particularly in speech quality. To accelerate open research and deployment in multimedia generation, we release the code, model checkpoints, and diffusers integration under the MIT license.",
      "upvotes": 160,
      "github_stars": 242,
      "github_repo": "https://github.com/kandinskylab/kandinsky-6",
      "project_page": "https://kandinskylab.ai/",
      "comments": 4,
      "org": "Kandinsky Lab",
      "url": "https://huggingface.co/papers/2610.05608",
      "arxiv_url": "https://arxiv.org/abs/2610.05608",
      "title_ja": "Kandinsky 6.0 Video: 同期した映像・音声生成のための基盤モデル",
      "summary_ja": "二流のCrossDiTアーキテクチャにより、リップシンクを含む5秒間の同期した高品質な映像と音声を一括生成できる。"
    },
    {
      "id": "2610.08077",
      "title": "Self-Retrospection Distillation: Turning Post-hoc Experiences into Prior Foresight",
      "abstract": "Reinforcement learning with verifiable rewards (RLVR) turns agent experience into learning signals primarily through scalar outcome rewards after interaction. For group-relative objectives, however, this signal vanishes when all rollouts receive the same reward, even though their trajectories may reveal useful information about what the task requires and how the agent fails. We ask a complementary question: can hindsight teach an agent what it could have anticipated before acting? We introduce prospective learning, which uses post-hoc experience to supervise foresight predictions from the pre-interaction view, and instantiate it with Self-Retrospection Distillation (SRD). Intuitively, a completed trajectory reveals knowledge that would have been useful and pitfalls that should be avoided; SRD distills this privileged hindsight into trajectory-blind foresight of the same policy. Foresight serves only as a training target and need not be explicitly generated at inference time. Across 10 tool-integrated reasoning and long-horizon agentic tasks, SRD complements RLVR and self-distillation baselines with gains of up to 24.2 pp. Its advantage is especially pronounced when reward contrast is scarce: when 37--98% of rollout groups are reward-uniform across model scales, yet SRD can still exploit learning signal from sampled trajectories. In the 2B setting, where 98% of groups are all-failure, the RLVR training ends up at 0.0% success, while adding SRD reaches 60.6% under the same rollout budget. Our results suggest that post-hoc agent experience is useful not only for evaluating or improving behavior, but also for shaping predictive representations before available interaction.",
      "upvotes": 135,
      "github_stars": 2,
      "github_repo": "https://github.com/SalesforceAIResearch/SRD",
      "project_page": "",
      "comments": 2,
      "org": "Salesforce AI Research",
      "url": "https://huggingface.co/papers/2610.08077",
      "arxiv_url": "https://arxiv.org/abs/2610.08077",
      "title_ja": "自己回顧蒸留：事後の経験を事前の先見性に変える",
      "summary_ja": "相互作用後の経験（事後情報）を教師として、行動前に結果を予測する「先見的学習」により、RLVRの学習効率を高める。"
    },
    {
      "id": "2610.12374",
      "title": "AgentGarten: Code Worlds for Evolving Agents",
      "abstract": "Interactive virtual worlds allow agents to learn through exploration and interaction. What agents can learn is bounded by the environments they practice in, which must be faithful, with consistent state, rules, and dynamics, and realistic, with observations that follow the real-world visual distributions. Achieving both across diverse worlds remains a bottleneck. We introduce AgentGarten, a framework that couples simulators and game engines with a shared neural renderer to build real-time interactive environments. Its simulation backends maintain persistent world state and execute program-defined interaction rules, while the renderer generates visual observations from structured conditions exported through a common interface. To build the neural renderer, we adapt a pretrained video model to geometry conditions, distill it with our proposed Adversarial Forcing, and optimize inference for real-time interaction. Adversarial Forcing makes history prefilling differentiable through exact replay, so that losses on later predictions update how the renderer encodes prior observations, and adds real-data adversarial supervision to improve its visual quality. In AgentGarten, agents perceive the world through visual observations, interact with it in real time, and improve by distilling each round of experience into playbooks that subsequent agents inherit and refine. Our empirical study demonstrates a substantial gain in learning efficiency, with agents learning from just 4 rounds compared with millions for a conventional reinforcement learning counterpart. As new worlds can be written as code and rendered through the same interface, environments can scale in both number and difficulty alongside their agents, a step toward agents that keep evolving through interactive experience.",
      "upvotes": 132,
      "github_stars": 105,
      "github_repo": "https://github.com/MirroS-Lab/AgentGarten",
      "project_page": "https://mirros-lab.github.io/agent-garten/",
      "comments": 1,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.12374",
      "arxiv_url": "https://arxiv.org/abs/2610.12374",
      "title_ja": "AgentGarten: エージェント進化のためのコード化された世界",
      "summary_ja": "シミュレーターとニューラルレンダラーを統合し、一貫した状態管理とリアルな視覚を兼ね備えた対話型環境を構築する。"
    },
    {
      "id": "2610.09823",
      "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
      "abstract": "Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.",
      "upvotes": 130,
      "github_stars": 18,
      "github_repo": "https://github.com/LINs-lab/UltraText_Bench",
      "project_page": "",
      "comments": 2,
      "org": "Westlake University",
      "url": "https://huggingface.co/papers/2610.09823",
      "arxiv_url": "https://arxiv.org/abs/2610.09823",
      "title_ja": "UltraText Bench: 画像生成における視覚的テキスト描写評価ベンチマーク",
      "summary_ja": "英中二言語で4～12箇所のテキスト領域を持つ複雑な画像を対象に、正確な配置と読みやすさを評価する。"
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
      "title_ja": "MotorMind: 汎用視覚言語モデルを用いたゼロショット・ロボット操作",
      "summary_ja": "汎用VLMに推論と行動出力を直接行わせることで、追加の特殊訓練なしに未知のタスクや環境でのロボット操作を可能にする。"
    },
    {
      "id": "2610.12242",
      "title": "TokenRouter: Efficient Serving System for Token-Level LLM Routing",
      "abstract": "Large language model (LLM) routing distributes inference work across different models, advancing the cost-quality Pareto frontier of LLM serving. While coarse-grained routing at the session or query level has been widely adopted in production systems, recent algorithmic work shows that fine-grained token-level routing can yield substantial efficiency and quality gains. However, efficiently serving token-level routed inference poses significant challenges to existing systems. Built on single-LLM assumptions, current systems suffer from severe step desynchronization and frequent batch admission delays under token-level routing, and they also impose high implementation complexity on developers. To address these challenges, we design TokenRouter, an efficient and developer-friendly serving system for token-level routed LLM inference. TokenRouter follows the principle of request-centric programming, model-centric execution: developers describe routing logic from the perspective of a single request, while the runtime launches a subserver for each LLM and dispatches requests asynchronously. Each subserver employs a delayed-batching scheduler, whose optimal hyperparameters are derived from a mathematical throughput model of the system. Across diverse routing algorithms, workloads, and model pairs, TokenRouter achieves 2.01-64.15x higher decoding throughput than existing systems, substantially advancing the serving efficiency of token-level LLM routing. Our code is available at https://github.com/thu-nics/TokenRouter.",
      "upvotes": 104,
      "github_stars": 20,
      "github_repo": "https://github.com/thu-nics/TokenRouter",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/tokenrouter/",
      "comments": 2,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.12242",
      "arxiv_url": "https://arxiv.org/abs/2610.12242",
      "title_ja": "TokenRouter: トークンレベルのLLMルーティング向け効率的サービングシステム",
      "summary_ja": "従来は困難だったトークン単位でのモデル切り替えを、非同期化を防ぐバッチ管理により効率的に実行しコスト性能を向上させる。"
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
      "title_ja": "再帰的自己書き換えによる複雑タスクの軌跡スケーリング",
      "summary_ja": "単一のベースモデルが多様な環境で解を探索・再構成し、専門ツールなしで実行可能な高品質な学習用軌跡を自動生成する。"
    },
    {
      "id": "2610.10528",
      "title": "Long-WAM: Scaling the Context of World-Action Models",
      "abstract": "Real-time robot control demands enough visual history to infer motion and task progress, but processing that history can delay action. We present Long-WAM, a model-system framework for scaling the context of causal world-action models under real-time control constraints. Our central finding is that access to history is not the same as using it: longer histories pay off far more when the video foundation is pretrained autoregressively (AR). We first learn causal prediction from robot and egocentric videos without action labels, then preserve this history-to-future structure during world-action adaptation. On RoboCasa GR-1, increasing context from 0.0 to 19.2 seconds raises success from 63.3% to 78.7%, whereas a bidirectionally pretrained initialization shows no net gain; robot-domain AR pretraining further raises peak success on GR-1 and LIBERO-Long. Long-WAM also achieves the best results among compared methods on LIBERO-Long, RoboTwin 2.0, and DOMINO. Streaming observation encoding, asynchronous execution, and hardware-specific acceleration enable deployment on RTX 5090, DGX Spark, and Jetson AGX Thor without dropping future prediction; on RTX 5090, each action chunk, including future-video latent prediction, takes 107.4 ms. Real-time deployment on Unitree G1 and YAM supports dynamic and long-horizon manipulation, including 95% success on dynamic cup stacking, where Pi0.5 and Fast-WAM succeed in none of 20 trials. As a memory-informed executor, Long-WAM also complements higher-level planning in composite tasks.",
      "upvotes": 100,
      "github_stars": 2722,
      "github_repo": "https://github.com/NVlabs/LongLive",
      "project_page": "https://nvlabs.github.io/LongLive/Long-WAM/",
      "comments": 2,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.10528",
      "arxiv_url": "https://arxiv.org/abs/2610.10528",
      "title_ja": "Long-WAM: 世界行動モデルのコンテキスト拡張",
      "summary_ja": "自己回帰的な事前学習により、最大19.2秒の長い視覚履歴を有効活用してリアルタイムロボット制御の成功率を高める。"
    },
    {
      "id": "2610.08215",
      "title": "Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?",
      "abstract": "Learning from experience is essential for LLM agents to adapt to unfamiliar and dynmaic environments. Evaluating this ability is therefore important for understanding how effectively agents acquire and use new knowledge. Existing benchmarks have sought to evaluate this ability, but they primarily evaluate tasks whose rules are provided in the instructions or already familiar to pretrained models, making it difficult to distinguish learning from interactions from reasoning with existing knowledge. To address this, we introduce Learn2Play Bench, a benchmark of newly designed text-based games, whose rules are novel or counterintuitive, requiring agents to acquire knowledge through interaction rather than rely solely on pretrained knowledge. These games provide reproducible feedback and automatic scoring, enabling controlled evaluation of learning across repeated attempts. We also vary game instances to test whether agents can apply what they have learned to new situations. Therefore, we evaluate how backbone models, self-evolving methods, and agent harnesses affect agents' learning ability, revealing three findings: (1) Experience retention: Retaining complete records of actions and feedback can support more effective learning than summarizing these experiences into rules or strategies. (2) Human agent gap: Top-performing human players achieve higher peak scores than the evaluated agents. Human explore more varied strategies, and repeat actions less. (3) Harness matters: With the backbone fixed, changing the harness can improve performance while reducing estimated inference cost. Together, these findings provide insights into how LLM agents learn from experience and suggest directions for future work to improve their learning ability. Project website: https://liushiliushi.github.io/learn2play-bench-website/",
      "upvotes": 98,
      "github_stars": 12,
      "github_repo": "https://github.com/liushiliushi/Learn2Play-Bench",
      "project_page": "https://liushiliushi.github.io/learn2play-bench-website/",
      "comments": 1,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.08215",
      "arxiv_url": "https://arxiv.org/abs/2610.08215",
      "title_ja": "Learn2Play Bench: LLMエージェントは未知の環境で経験から学べるか？",
      "summary_ja": "既存知識が通用しない独自のルールを持つテキストゲームを用い、純粋に相互作用を通じて知識を獲得する能力を測定する。"
    },
    {
      "id": "2610.06100",
      "title": "From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation",
      "abstract": "Realistic environment replicas are increasingly valuable for training and evaluating LLM agents, yet the original systems may be inaccessible or impractical to reproduce. We explore agentic language world modeling: rather than rebuilding an executable environment, a world model agent serves as the environment for a task agent and supports faithful and stateful simulation. We instantiate this paradigm with Trace2Env, a learning-free framework for settings where the original system is unavailable but historical interaction traces remain accessible. Trace2Env reconstructs these traces into a reusable environment worldbook containing environment schemas, grounded evidence, and induced behavioral knowledge. At runtime, the world model agent actively consults the worldbook together with persistent episodic state to infer each action's observation and lasting state effects. Across nine environments, Trace2Env improves both next-observation fidelity and long-horizon interaction consistency over conventional prompt-based LWMs. In multi-turn interaction, task agent actions generated against Trace2Env remain valid more often when replayed in the real environment, indicating that its simulated dynamics better preserve the consequences of earlier actions across successive turns. These results establish agentic language world modeling as an alternative direction for building realistic environment replicas without reconstructing the original executable system.",
      "upvotes": 98,
      "github_stars": 29,
      "github_repo": "https://github.com/ruyue0001/trace2env",
      "project_page": "https://quanyulong.net/trace2env/",
      "comments": 1,
      "org": "Nanyang Technological University Singapore",
      "url": "https://huggingface.co/papers/2610.06100",
      "arxiv_url": "https://arxiv.org/abs/2610.06100",
      "title_ja": "トレースからエージェント的世界へ：対話型環境シミュレーションのためのエージェント的世界モデル",
      "summary_ja": "過去の相互作用ログ（トレース）から、システムそのものを再構築せずに忠実な動作を再現するシミュレーション環境を生成する。"
    },
    {
      "id": "2610.08699",
      "title": "nanoMuse: An Open-Source Personal Agent for Every Device You Own",
      "abstract": "Assistants from 2011 answered and waited, and agents from 2023 did a task and stopped. In September 2026 Meta's Muse showed an agent for one person, with accounts, devices, memory and a conversation that lasts, closed, in a vendor's cloud, in one country. Such an agent is expected to act on a person's accounts and devices, remember them across weeks, speak first when it is worth it, and answer for what it did. It is a kind of software, not a model, and until now had no open counterpart. This report defines the personal agent in five questions and three horizons. It reads how Muse is built from Meta's public record and a copy of its production prompt, each statement marked by its source. It then presents nanoMuse, the open-source counterpart under the GPL-3.0, one agent on every device a person owns, with hands on the phone's screen and the computer's. They share one conversation over a relay anyone can run; every action goes through a Sentinel, memory is files the person can read, and the model is their choice. Its size and cost are given as estimates. What is open, memory with provenance, an evaluation suite for the hands and an open model for them, is set out as a roadmap.",
      "upvotes": 98,
      "github_stars": 539,
      "github_repo": "https://github.com/nano-muse/nanoMuse",
      "project_page": "https://nanomuse.cn/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.08699",
      "arxiv_url": "https://arxiv.org/abs/2610.08699",
      "title_ja": "nanoMuse: 全てのデバイスのためのオープンソース個人用エージェント",
      "summary_ja": "個人のデバイスやメモリを管理し、自ら話しかけ数週間にわたり継続的に対話できる個人用エージェントのオープンな設計を定義。"
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
      "title_ja": "漸進的視覚計画を用いた世界行動モデル",
      "summary_ja": "行動と同時にまばらな視覚的サブゴールを順次予測することで、長時間のタスク実行における行動生成の精度を向上させる。"
    },
    {
      "id": "2610.03543",
      "title": "DuoMatching: Joint-Marginal Distribution Matching for Few-Step Video Generation",
      "abstract": "Streaming video generation has benefited from distribution matching distillation (DMD), which matches the joint distribution of video frames to a video teacher's approximation of the real video distribution. Although this joint matching mitigates drift during autoregressive rollouts, limitations remain in visual quality and semantic alignment. To address these limitations, we propose DuoMatching, a distribution matching framework that approximates the real video distribution through a unified joint-marginal formulation. On top of existing joint matching formulations, the additional marginal matching objective provides dedicated frame-level supervision from an image generator, transferring complementary visual and semantic priors from it. To apply this frame-level supervision in video generation, we introduce LatentBridge to resolve the latent representation mismatch between the video student and the image teacher. Latent Variation Sampling further distributes such frame-level supervision across distinct temporal segments, reducing redundancy. Experiments demonstrate that DuoMatching improves visual quality, composition, and semantic alignment while largely preserving motion dynamics. Human evaluations show overall preference rates above 80% against all evaluated baselines. The project page is available at https://johnzhan2023.github.io/DuoMatching/.",
      "upvotes": 88,
      "github_stars": 49,
      "github_repo": "https://github.com/JohnZhan2023/DuoMatching",
      "project_page": "https://johnzhan2023.github.io/DuoMatching/",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2610.03543",
      "arxiv_url": "https://arxiv.org/abs/2610.03543",
      "title_ja": "DuoMatching: 数ステップの動画生成のための結合・周辺分布一致法",
      "summary_ja": "動画全体の分布に加え、個別のフレーム単位でも教師モデルと一致させることで、少ステップ生成の品質と意味的一貫性を高める。"
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
      "title_ja": "世界行動モデルのための動画からのネイティブな行動事前学習",
      "summary_ja": "行動ラベルのない動画から直接行動ポリシーを事前学習するNAVA-WAMにより、ロボットデータの不足を補い制御性能を向上させる。"
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
      "title_ja": "LLM事後学習の汎化を支えるオンポリシー・パラメータ更新方向",
      "summary_ja": "オンポリシー学習特有の柔軟な更新方向の調整を教師あり学習に導入することで、モデルの汎化性能を向上させる手法を提案。"
    },
    {
      "id": "2610.08621",
      "title": "Recursive Game Creator: An Agentic Product-Level Experience-Oriented Game Harness",
      "abstract": "Recent game design agents have made substantial progress in generating playable games. However, program correctness does not ensure an enjoyable experience for players. We present Recursive Game Creator, an experience-oriented harness to advance agentic game development from rough game prototypes into entertaining games. Recursive Game Creator organizes recursive development around four components: Designer, Builder, Player, and Reviewer. The Designer translates user instructions and Reviewer's feedback into detailed plans. The Builder turns these plans into candidate games. The coding-native Player creates and executes reusable policies through programmatic interfaces to efficiently collect diverse gameplay trajectories, mitigating evaluation bias caused by slow GUI-based collection. The Reviewer uses carefully designed trajectory-based metrics to induce player preferences, integrating with visual evidence and explicit textual preferences to evaluate games against game-specific criteria. Finally, the Reviewer accepts the better version and provides improvement reviews for the next round, closing the recursive loop. Our method achieves state-of-the-art overall performance of 77.89 on GameCraft-Bench. On GameASG-Bench, it achieves a strict task success rate of 53.2%, a 34.1% improvement over the same-model baseline, and the highest mean runtime-check pass rate at 93.4% among compared methods. A user study shows longer playtime and higher ratings. Code is coming soon.",
      "upvotes": 86,
      "github_stars": 37,
      "github_repo": "https://github.com/IMBALDY/RecursiveGameCreator",
      "project_page": "https://imbaldy.github.io/recursive-game-creator",
      "comments": 2,
      "org": "The University of Hong Kong",
      "url": "https://huggingface.co/papers/2610.08621",
      "arxiv_url": "https://arxiv.org/abs/2610.08621",
      "title_ja": "Recursive Game Creator: 体験を重視したエージェントによるゲーム開発基盤",
      "summary_ja": "設計・構築・プレイ・評価を再帰的に繰り返すことで、単に動作するだけでなく「遊んで楽しい」ゲームを自動開発する。"
    },
    {
      "id": "2609.38169",
      "title": "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization",
      "abstract": "Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding steps; spatially, errors in different key rows affect model outputs differently, while state magnitudes vary substantially along both rows and columns. Motivated by these observations, we propose STEPQuant, a spatial-temporal post-training quantization framework for Delta-rule recurrent states. STEPQuant allocates precision according to error magnitude and memory lifetime, and jointly fits key-row and value-column scales based on state distributions and key-row impact on output error. Experiments on Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct across both long- and short-generation benchmarks show that STEPQuant closely matches FP32-state accuracy under a nominal 6-bit budget and outperforms uniform INT8 in its 4-bit configuration. Integrated into SGLang with optimized GPU kernels, 6-bit STEPQuant achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%. Our code is available at https://github.com/Dreamer-Toby/STEPQuant.",
      "upvotes": 81,
      "github_stars": 100,
      "github_repo": "https://github.com/Dreamer-Toby/STEPQuant",
      "project_page": "",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.38169",
      "arxiv_url": "https://arxiv.org/abs/2609.38169",
      "title_ja": "STEPQuant: デルタルール回帰状態量子化における誤差の影響評価",
      "summary_ja": "線形アテンションの回帰状態の量子化誤差が時間・空間的に与える影響を分析し、精度低下を抑えつつメモリを削減する手法を提案。"
    },
    {
      "id": "2609.38839",
      "title": "FrameMorrow: Future-guided Frame Selection with Prospective Tokens for Long-Horizon Video Generation",
      "abstract": "Long-horizon video generation requires models to effectively leverage an increasingly long generation history. As the generated history grows, retaining all previous content becomes increasingly expensive and redundant, making effective historical selection essential. Existing approaches often determine historical relevance based on the current content. However, information relevant to the present is not necessarily useful for future generation, while seemingly less relevant history may become important later. Our key insight is that historical information should be selected according to its relevance to future information needs. Capturing these needs does not require generating the full future; instead, a compact representation of what becomes important next is sufficient to guide historical selection. Building on this insight, we propose FrameMorrow, a prospective frame selector that predicts a small set of prospective tokens representing future information needs and uses them to identify relevant information from history. FrameMorrow selects explicit historical frames rather than model-specific internal states, enabling plug-and-play integration across diverse generators, including closed-source models, with little additional inference cost. We evaluate FrameMorrow across five benchmarks and 11 generative models spanning long-video generation, interactive generation, and action-conditioned world models. Extensive experiments demonstrate consistent improvements in long-range consistency, visual quality, and action alignment across diverse generation settings.",
      "upvotes": 79,
      "github_stars": 29,
      "github_repo": "https://github.com/YinBo0927/FrameMorrow",
      "project_page": "https://yinbo0927.github.io/FrameMorrow/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2609.38839",
      "arxiv_url": "https://arxiv.org/abs/2609.38839",
      "title_ja": "FrameMorrow: 未来のトークンを用いた長尺動画生成のための未来主導型フレーム選択",
      "summary_ja": "生成済みの履歴から、現在の内容ではなく「将来必要になる情報」を予測して選択することで、長尺動画生成の効率と品質を両立。"
    },
    {
      "id": "2610.10524",
      "title": "GRACE: Generation-aware latent compression for efficient video generation",
      "abstract": "Highly compressed video autoencoders offer an effective way to accelerate video diffusion models, as the Diffusion Transformer (DiT) operates on far fewer tokens. However, such autoencoders are challenging to train, since a higher compression ratio degrades reconstruction quality and recovering it requires more channels, which is known to slow the convergence of the DiT. The compressed latent also differs from the one the DiT was trained on, so the pretrained DiT must be either retrained from scratch or adapted at considerable cost. Compressing the autoencoder the DiT was trained with appears to preserve compatibility, yet optimizing it for reconstruction alone still shifts the latent away from the distribution the DiT has learned. To address this, we propose Generation-Aware Latent Compression for Efficient Video Generation (GRACE), a two-stage framework that compresses a pretrained video autoencoder while keeping it compatible with the pretrained DiT. Specifically, we keep a frozen base latent from the pretrained encoder and learn a residual latent for the information lost under stronger compression, while aligning the compressed latent with the pretrained latent in the feature space of the frozen DiT so that the autoencoder is optimized for generation. We then adapt the DiT with lightweight fine-tuning and asymmetric denoising, where the base is denoised ahead of the residual. GRACE reduces the token count of Wan2.1-I2V-14B by 8x and its latency by 11.1x at 480x832x81, while matching the generation quality of the pretrained pipeline before compression on VBench.",
      "upvotes": 76,
      "github_stars": 23,
      "github_repo": "https://github.com/cvlab-kaist/GRACE",
      "project_page": "https://cvlab-kaist.github.io/GRACE/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.10524",
      "arxiv_url": "https://arxiv.org/abs/2610.10524",
      "title_ja": "GRACE: 効率的な動画生成のための生成を考慮した潜在空間圧縮",
      "summary_ja": "既存の事前学習済みDiTとの互換性を保ちながら、高い圧縮率と高品質な再構成を両立する動画オートエンコーダを提案。"
    },
    {
      "id": "2610.04198",
      "title": "ALoDLM: Adaptively Looped Diffusion Language Models",
      "abstract": "Diffusion language models (DLMs) enable fast generation by predicting multiple tokens in parallel, but their practical adoption remains limited by a persistent quality gap relative to comparably sized autoregressive (AR) models. We attribute this gap to a computation-difficulty mismatch: within a partially observed sequence, some unknown tokens are easy to predict, while others require substantially more computation. Existing DLMs nevertheless apply uniform computational depth to all unknown positions at each denoising step. We introduce ALoDLM, which replaces uniform computation with token-adaptive latent recurrence. At each denoising step, ALoDLM iteratively refines latent representations and allocates computation according to token difficulty. Tokens ready to commit are fed back as discrete context, while unresolved tokens retain and further refine their latent states through additional recurrent passes. To learn token prediction and computation allocation jointly, we formulate token-wise computation schedules as latent variables and derive a conditional negative evidence lower bound (NELBO). We train ALoDLM at 1.7B and 8B parameter scales. Across eleven benchmarks, ALoDLM outperforms all evaluated DLMs and the corresponding AR baselines in average benchmark score at both scales. ALoDLM also retains fast parallel decoding, yielding a strong quality-efficiency trade-off among evaluated autoregressive and diffusion models under optimized inference engines.",
      "upvotes": 74,
      "github_stars": 28,
      "github_repo": "https://github.com/amazon-science/ALoDLM",
      "project_page": "https://alo-dlm.github.io/",
      "comments": 2,
      "org": "Amazon",
      "url": "https://huggingface.co/papers/2610.04198",
      "arxiv_url": "https://arxiv.org/abs/2610.04198",
      "title_ja": "ALoDLM: 適応的ループ拡散言語モデル",
      "summary_ja": "トークンの予測難易度に応じて計算回数を適応的に変化させることで、拡散言語モデルの生成品質を自己回帰型に近づける。"
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
      "title_ja": "Latent-MOPD: 潜在空間を用いたマルチ教師オンポリシー蒸留",
      "summary_ja": "複数の専門家モデルの出力だけでなく、内部の中間表現（隠れ状態）も統合して生徒モデルを訓練する世界初の蒸留手法。"
    },
    {
      "id": "2610.04299",
      "title": "Questioning the Questions: Sustaining Self-Evolution in Reasoning Models",
      "abstract": "Self-evolving reasoning models learn from their own generated questions, yet repeated self-training can lead to performance collapse. In this paper, we investigate why performance deteriorates over successive rounds and how to sustain self-evolution. Our analysis identifies two recurring quality problems in self-generated questions: invalid questions and repeated variants of the same mathematical questions. First, invalid questions become more prevalent across rounds, and answer-consistency filtering further increases their proportion in training data. Second, existing question diversity controls based on lexical similarity can miss mathematically equivalent questions expressed in different ways, which leads to question diversity collapse in later training rounds. Building on these findings, we introduce R-Quest, which uses question validity and novelty feedback to guide self-evolution. We first train the solver to recognize and reject invalid questions, then use its judgments to guide questioner rewards and filter solver training data. To avoid question repetition, we use a frozen base model to compare sampled question pairs and provide novelty feedback. Empirically, our method consistently achieves the highest average performance on 12 benchmarks in mathematical reasoning, general-domain reasoning, and code generation across two model families. Additionally, R-Quest maintains stable performance gains over ten rounds of self-evolution, peaking in the final round and outperforming R-Zero by 17.32 points.",
      "upvotes": 69,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://jinyuanli0012.github.io/R-Quest/",
      "comments": 2,
      "org": "Huang's INTelligence lab",
      "url": "https://huggingface.co/papers/2610.04299",
      "arxiv_url": "https://arxiv.org/abs/2610.04299",
      "title_ja": "問題への問いかけ：推論モデルにおける自己進化の持続",
      "summary_ja": "自己生成した問題の不備や重複が性能低下を招くことを解明し、多様性と妥当性を確保することで自己進化を継続させる。"
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
      "title_ja": "LexReward: 法律言語モデルのためのタクソノミー駆動型報酬フレームワーク",
      "summary_ja": "スタイル、構成要素、推論の鎖という3つの側面から法律回答の質を細粒度に評価し、解釈性の高い報酬信号を提供する。"
    },
    {
      "id": "2610.12126",
      "title": "SuperNav: An Agentic Navigation System for Any Task in Any Scene",
      "abstract": "General-purpose service robots need navigation systems that can handle diverse human requests in unfamiliar environments, combining task generality with scene generality. Some existing methods fine-tune multimodal large language models (MLLMs) to predict navigation actions, making their behavior dependent on the coverage of navigation training data and potentially limiting generalization to new requests and environments. Our key insight is to let the MLLM focus on interpreting requests, understanding scenes, and making decisions while preserving its general-purpose capabilities and delegating motion execution to navigation tools. To realize this idea, we introduce SuperNav, which equips a pretrained MLLM with a specialized agent harness without navigation-specific fine-tuning of the MLLM. Our harness supports these decisions with Navigation Skills, agent-oriented Tools for physical interaction, and task-progress and context management. A unified visual-point interface connects decision-making to motion by allowing the model to specify destinations directly in images and revise its decisions from execution feedback. Together, these components support sustained navigation across different task requirements and environments. SuperNav outperforms four evaluated baselines on instance-level, multi-object, and demand-driven tasks. Category-level evaluation on HM3D and deployment on a real quadruped robot further demonstrate its applicability across environments. Project Page: https://zju3dv.github.io/SuperNav/",
      "upvotes": 63,
      "github_stars": 51,
      "github_repo": "https://github.com/zju3dv/SuperNav",
      "project_page": "https://zju3dv.github.io/SuperNav/",
      "comments": 1,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.12126",
      "arxiv_url": "https://arxiv.org/abs/2610.12126",
      "title_ja": "SuperNav: あらゆるシーン・タスクに対応するエージェント型ナビゲーション",
      "summary_ja": "MLLMを推論と意思決定に特化させ、移動を既存ツールに任せることで、未知の環境や複雑な要求への汎化性能を高める。"
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
      "title_ja": "Pivot-SD: マスク型拡散言語モデルのための効率的自己蒸留",
      "summary_ja": "生成結果に大きな影響を与える特定のトークン（ピボット）を選択的に学習することで、効率的に推論能力を向上させる。"
    },
    {
      "id": "2609.34715",
      "title": "PDE-JEPA: Predictive Representation Learning of Latent Dynamics Modeling for Parametric PDEs",
      "abstract": "Physical trajectories contain more than snapshots of a system: they also reveal how its states evolve under governing conditions. However, representation learning for parametric partial differential equations (PDEs) has largely relied on reconstruction-based objectives that emphasize recovering observed physical fields. In this paper, we investigate predictive representation pretraining as an alternative to reconstruction-based learning. We find that predictive representations preserve rich physical information, yet this advantage alone does not ensure accurate field evolution. Based on these observations, we introduce PDE-JEPA for parametric PDE dynamics. Specifically, we first train an encoder using a masked-latent prediction to capture the underlying regularities of PDE dynamics. To explicitly adapt the pretrained representation toward a more dynamics-aligned state space, we then introduce a geometry projector that aligns latent trajectory geometry with the evolution geometry of physical fields. Finally, building on this geometry-aligned latent space, we further develop a physics-structured latent predictor that decomposes the dynamics into parameter-independent evolution and parameter-dependent response components. Extensive experiments on nine widely used PDE benchmarks demonstrate that our framework outperforms existing state-of-the-art methods by an average of 33.4\\% in-distribution, while achieving an average improvement of 51.4\\% when extrapolating to unseen governing parameters. The project page is available https://tanpig-x.github.io/PDE-JEPA/{here}.",
      "upvotes": 62,
      "github_stars": 11,
      "github_repo": "https://github.com/Tanpig-X/PDE-JEPA",
      "project_page": "https://tanpig-x.github.io/PDE-JEPA/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.34715",
      "arxiv_url": "https://arxiv.org/abs/2609.34715",
      "title_ja": "PDE-JEPA: パラメトリック偏微分方程式の潜在ダイナミクス予測学習",
      "summary_ja": "物理フィールドの再構成ではなく未来の予測を学習目標とすることで、複雑なPDEダイナミクスを捉える表現学習を実現する。"
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
      "title_ja": "PointWAM: 器用なロボット操作のための3D世界行動モデル",
      "summary_ja": "世界を3D点群として捉え、環境と手の動きを同一空間で予測することで、精密な接触が必要な器用な操作を可能にする。"
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
      "title_ja": "HyperBrowseComp: Web閲覧エージェントのための多言語・マルチモーダル・ストレスチェック",
      "summary_ja": "動画や地図の確認など、多段階の推論を必要とする13言語の超難問により、Web閲覧エージェントの限界を厳密に評価する。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Open-Source REA Gives Coding Agents a Full Reverse-Engineering Toolkit",
      "summary": "REA ships a local MCP server that lets coding agents decompile, trace and reconstruct features from binaries, Electron apps and websites.",
      "url": "https://alphasignal.ai/news/open-source-rea-gives-coding-agents-a-full-reverse-engineering-toolkit",
      "published": "2026-10-10T09:30:13+09:00",
      "title_ja": "オープンソースREA：コーディングエージェントに完全なリバースエンジニアリング機能を付与",
      "summary_ja": "バイナリやWebサイトのデコンパイル・トレースを可能にするMCPサーバーを提供し、エージェントによる機能再構築を実現する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Umi-OCR Hits 47K Stars Bringing Private Offline Text Extraction to Desktops",
      "summary": "Umi-OCR crosses 47k stars offering a free, fully offline OCR toolkit with screenshot capture, batch jobs, PDF extraction, and an HTTP API.",
      "url": "https://alphasignal.ai/news/umi-ocr-hits-47k-stars-bringing-private-offline-text-extraction-to-desktops",
      "published": "2026-10-10T09:03:23+09:00",
      "title_ja": "Umi-OCRが4万7千スター獲得、デスクトップ向け完全オフライン文字認識ツール",
      "summary_ja": "完全オフラインで動作し、スクリーンショットやPDFからのテキスト抽出、バッチ処理、HTTP API機能を無料で提供する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's Qwen2.5-Coder Hits 775K Downloads Running on 8GB GPUs",
      "summary": "A community 4-bit AWQ build of Qwen2.5-Coder-7B-Instruct is pulling in three quarters of a million downloads, shrinking the model to under 6GB of VRAM.",
      "url": "https://alphasignal.ai/news/alibaba-s-qwen2-5-coder-hits-775k-downloads-running-on-8gb-gpus",
      "published": "2026-10-10T07:00:37+09:00",
      "title_ja": "アリババのQwen2.5-Coder、8GBのGPUで動作し77万5千ダウンロードを記録",
      "summary_ja": "コミュニティによる4bit AWQ版により、VRAM使用量を6GB未満に抑えつつ高性能なコーディング支援モデルを利用可能にした。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's Codex Now Predicts Your Next Coding Command Before You Type",
      "summary": "Codex now drafts your next prompt for you, learning from how your conversation has unfolded and the way you naturally phrase requests.",
      "url": "https://alphasignal.ai/news/openai-s-codex-now-predicts-your-next-coding-command-before-you-type",
      "published": "2026-10-10T03:22:25+09:00",
      "title_ja": "OpenAIのCodex、入力前に次のコーディングコマンドを予測する新機能",
      "summary_ja": "会話の流れやユーザー特有の言い回しを学習し、次に行うべきプロンプトのドラフトを自動生成できるようになった。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Now Orchestrates 1,000 Agents, Finding 66 of 70 Bugs",
      "summary": "Claude's dynamic workflows exit research preview with a new multiagent API type, letting a lead agent plan and orchestrate up to 1,000 subagents per run.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-now-orchestrates-1-000-agents-finding-66-of-70-bugs",
      "published": "2026-10-10T01:12:03+09:00",
      "title_ja": "AnthropicのClaude、1,000体のエージェントを指揮しバグ発見率の大幅向上に成功",
      "summary_ja": "マルチエージェントAPIにより、1つのメインエージェントが最大1,000体のサブエージェントを制御・連携させることが可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Jina's jina-embeddings-v5-omni-small Searches Images and Audio Without Re-Embedding Text",
      "summary": "Jina ships a 1.74B multimodal embedding model that encodes text, images, video, and audio into one shared vector space without reindexing.",
      "url": "https://alphasignal.ai/news/jina-s-jina-embeddings-v5-omni-small-searches-images-and-audio-without-re",
      "published": "2026-10-10T01:00:57+09:00",
      "title_ja": "Jinaのマルチモーダル埋め込みモデル、再インデックスなしで画像・音声を検索",
      "summary_ja": "テキスト、画像、動画、音声を1つの共有ベクトル空間にエンコードし、既存のテキストインデックスを維持したまま検索ができる。"
    },
    {
      "lab": "Hugging Face",
      "title": "Impactful scheduling for GPU clusters",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/impactful-scheduling",
      "published": "2026-10-10T00:20:29+09:00",
      "title_ja": "GPUクラスターにおける効果的なスケジューリング",
      "summary_ja": "GPUクラスターのリソース割り当てと処理のスケジューリングがもたらす影響について解説している。"
    },
    {
      "lab": "OpenAI",
      "title": "Sophos cuts threat investigation time by 96% with OpenAI Daybreak",
      "summary": "Discover how Sophos uses OpenAI’s Daybreak to cut cyber-threat investigation time by 96% and automate 52% of MDR cases while preserving human oversight.",
      "url": "https://openai.com/index/sophos",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "Sophos、OpenAI Daybreakの活用により脅威調査時間を96%削減",
      "summary_ja": "OpenAIのDaybreakを導入し、MDRケースの52%を自動化することで、サイバー脅威の調査スピードを大幅に向上させた。"
    },
    {
      "lab": "OpenAI",
      "title": "Asana cuts model costs 76x in browser tests with GPT-6.1 Sol",
      "summary": "Using GPT-6 Astra in Codex, Asana made its browser agent 76x cheaper and 5x faster in tests to offer customers more capable models.",
      "url": "https://openai.com/index/asana-browser-agent",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "Asana、GPT-6.1 Solを用いたブラウザテストでモデルコストを76分の1に削減",
      "summary_ja": "GPT-6 Astra等のモデルをCodex内で活用し、ブラウザエージェントのコストを劇的に抑えつつ、速度を5倍に向上させた。"
    },
    {
      "lab": "OpenAI",
      "title": "How Oracle turns days of work into minutes with ChatGPT and Codex",
      "summary": "Across recruiting, engineering, and operations, Oracle turns specialist knowledge into fast, repeatable workflows with ChatGPT Work and Codex.",
      "url": "https://openai.com/index/oracle",
      "published": "2026-10-09T01:00:00+09:00",
      "title_ja": "Oracle、ChatGPTとCodexにより数日かかる業務を数分に短縮",
      "summary_ja": "採用やエンジニアリング等の現場で、専門知識をChatGPT WorkとCodexを活用した高速で反復可能なワークフローに変換している。"
    },
    {
      "lab": "OpenAI",
      "title": "Pollo AI turns creative ideas into campaigns with OpenAI",
      "summary": "With GPT-5.6, GPT-6 Astra, and GPT‑Image‑2.5, Pollo AI helps creators turn bold ideas into detailed images and cinematic video ads.",
      "url": "https://openai.com/index/pollo-ai",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "Pollo AI、OpenAIの最新モデルでアイデアをクリエイティブキャンペーンに変換",
      "summary_ja": "GPT-5.6やGPT-6 Astra等を活用し、クリエイターのアイデアから詳細な画像や映画のようなビデオ広告を生成する。"
    },
    {
      "lab": "OpenAI",
      "title": "LegalOn halves Codex costs while maintaining development speed",
      "summary": "LegalOn cut estimated daily Codex costs by 65% while maintaining development speed. It matched Astra, Sol, and Luna to tasks and managed budgets strategically.",
      "url": "https://openai.com/index/legalon-halves-codex-costs",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "LegalOn、開発速度を維持しつつCodexの運用コストを半減",
      "summary_ja": "タスクに合わせて複数のモデルを戦略的に使い分けることで、開発効率を損なわずにCodexの推定日次コストを65%削減した。"
    },
    {
      "lab": "OpenAI",
      "title": "Disrupting AI-enabled “false front” operations",
      "summary": "OpenAI disrupted two AI-enabled influence operations that used false-front journalists and a think tank to spread geopolitical messaging.",
      "url": "https://openai.com/index/disrupting-ai-enabled-false-front-operations",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "AIを悪用した「偽のフロント」工作の阻止",
      "summary_ja": "ジャーナリストやシンクタンクを装い地政学的なメッセージを拡散していた、AI利用による2つの世論工作活動をOpenAIが遮断した。"
    },
    {
      "lab": "Apple ML",
      "title": "Normalizing Trajectory Models",
      "summary": "Diffusion-based models decompose sampling into many small Gaussian denoising steps, an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. Architecturally, NTM combines shallow invertible blocks within each step with a deep parallel…",
      "url": "https://machinelearning.apple.com/research/normalizing-trajectory-models",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "正規化軌道モデル（NTM）の導入",
      "summary_ja": "拡散モデルの逆工程を条件付き正規化流としてモデル化し、少ないステップ数でも正確な尤度学習と高品質な生成を両立させる。"
    },
    {
      "lab": "Hugging Face",
      "title": "The model that didn't exist, so you made it yourself",
      "summary": "",
      "url": "https://huggingface.co/blog/building-with-ml-intern",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "存在しなかったモデルを自ら作り上げる",
      "summary_ja": "既存の選択肢にないモデルを、ユーザー自身の手で構築・カスタマイズしていく過程やその重要性について述べている。"
    },
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "優れた成果は常に優れた労働者を意味するか？",
      "summary_ja": "AIの導入によって得られる成果の向上と、それに関わる人間のスキルや労働環境の変化の相関関係について考察している。"
    },
    {
      "lab": "Hugging Face",
      "title": "Multimodal open d1 decision models for the edge",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/open-d1",
      "published": "2026-10-08T01:54:33+09:00",
      "title_ja": "エッジデバイス向けのマルチモーダル・オープンd1意思決定モデル",
      "summary_ja": "リソースの限られたエッジ環境で動作する、画像やテキスト等の複数データを扱える意思決定モデルについて紹介している。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing Falcon ASR",
      "summary": "",
      "url": "https://huggingface.co/blog/tiiuae/falcon-asr",
      "published": "2026-10-07T22:21:03+09:00",
      "title_ja": "Falcon ASRの発表",
      "summary_ja": "高い精度と効率性を備えた、新しい自動音声認識（ASR）モデル「Falcon ASR」を公開する。"
    },
    {
      "lab": "Hugging Face",
      "title": "One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026",
      "published": "2026-10-07T21:45:31+09:00",
      "title_ja": "Nemotronの微調整により、数学・情報の国際オリンピックレベルの結果を達成",
      "summary_ja": "1つのモデルファミリーを微調整することで、IOI（情報）とIMO（数学）の両分野でゴールドレベルの優れた成績を収めた。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：軽量なオープンマルチモーダル埋め込みモデル",
      "summary_ja": "Gemma 2をベースにした、画像やテキストを扱えるオープンかつ軽量なマルチモーダル埋め込みモデルを紹介する。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "地球規模の公衆衛生に向けたEarth AIの地理空間基盤モデルの活用",
      "summary_ja": "地球観測データを用いたAI基盤モデルを、世界の公衆衛生課題の解決や分析に役立てる取り組みについて解説している。"
    },
    {
      "lab": "Apple ML",
      "title": "RISED: Rubrics for Agentic Multi-Environment Selection and Self-Distillation",
      "summary": "Training a single LLM agent jointly across diverse interactive environments has attracted increasing attention as a route to generalist agents. Existing curriculum and data-selection strategies often allocate training at the environment level or prioritize local reward-based signals, without explicitly considering relationships between current rollouts across environments for prompt-group selection. Meanwhile, as environments are learned at different rates, all-failure and all-success rollout groups can coexist within a batch, leaving those data without group-relative reward signals. Both…",
      "url": "https://machinelearning.apple.com/research/rised-multi-environment-selection",
      "published": "2026-10-06T09:00:00+09:00",
      "title_ja": "RISED：エージェントの環境選択と自己蒸留のためのルーブリック",
      "summary_ja": "複数の環境間でロールアウトの関係性を考慮し、報酬信号が乏しいデータでも効果的に学習できるエージェント訓練手法を提案する。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決問題",
      "summary_ja": "生成AIエージェントが普及する中で生じる、プライバシー保護やセキュリティ確保に関する文脈的な課題と展望を論じている。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "個人向けセンシングシステムにおける存在論的境界の交渉",
      "summary_ja": "ユーザー自身が機械学習モデルを訓練する体験を通じ、システム設計の権限をユーザーに与える際の設計上の課題を調査した。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Agent Said It Was Done. The Database Disagreed.",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox",
      "published": "2026-10-04T07:56:48+09:00",
      "title_ja": "エージェントは「完了」と言ったが、データベースは否定した",
      "summary_ja": "AIエージェントの自己申告と実際のシステム状態の乖離を通じ、エージェントの信頼性と実行確認の重要性について指摘している。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能なプライバシー保護学習に向けて",
      "summary_ja": "モバイルシステム等において、分散されたデータからプライバシーを数学的に保護しつつ学習を行う手法の進展について述べている。"
    },
    {
      "lab": "Apple ML",
      "title": "Language Discrimination Improves Linguistic Learning in Multilingual Speech Models",
      "summary": "Multilingual self-supervised speech models can benefit from sharing information across languages, but under a matched total pretraining data budget they still fall short of monolingual models. We show that strengthening the model’s ability to discriminate languages during pretraining reduces and, on some measures, closes this multilingual gap on continuous phonetic and higher-level linguistic measures, while preserving substantial cross-language sharing. Using a controlled English/French HuBERT setting, we test two interventions which strengthen language discrimination: an auxiliary language…",
      "url": "https://machinelearning.apple.com/research/language-discrimination-multilingual-learning",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "言語識別機能の強化が多言語音声モデルの学習を改善する",
      "summary_ja": "事前学習中に言語を識別する能力を強めることで、多言語共有の利点を保ちつつ、単一言語モデルとの性能差を解消できることを示した。"
    },
    {
      "lab": "Apple ML",
      "title": "Limits of Confidence in Diffusion",
      "summary": "Discrete diffusion, including remasking and uniform-state samplers, generate a sequence by writing multiple token positions per step, drawing each from a per-position distribution and choosing which positions to write from those same distributions. For domains of general interest (pixels, phonemes, or words) there are inherent dependencies between tokens. We show that a step matches the training distribution only when the positions it writes are conditionally independent given the tokens already fixed, that no product of per-position distributions can match a dependent group, and that…",
      "url": "https://machinelearning.apple.com/research/limits-confidence-diffusion",
      "published": "2026-10-02T09:00:00+09:00",
      "title_ja": "離散拡散モデルにおける信頼性の限界",
      "summary_ja": "トークン間の依存関係がある場合、各位置の独立した分布から生成を行うステップが訓練分布と一致しない理論的な限界を明らかにした。"
    },
    {
      "lab": "Apple ML",
      "title": "How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?",
      "summary": "Recent autonomous machine learning engineering (MLE) agents have made significant progress on public leaderboards. Often motivated by progress stagnation over long-horizon cycles and limited Large Language Model (LLM) primitives, modern MLE agents are deployed on top of increasingly elaborate machinery: multi-agent orchestrators, dedicated retrieval subagents, and more. While such harnesses expand, the use of more primitive but improved coding agents—where LLMs have direct access to the execution environment through read, write, and bash primitives—has received little attention in the field…",
      "url": "https://machinelearning.apple.com/research/harness-autonomous-ml-engineering",
      "published": "2026-10-01T09:00:00+09:00",
      "title_ja": "自律的な機械学習エンジニアリングに複雑な枠組みは必要か？",
      "summary_ja": "高度なオーケストレーターよりも、実行環境への直接アクセス権を持つシンプルなコーディングエージェントの有効性を検証した。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "飛躍的な進化を遂げた次世代のAIモデル「Gemini 4 Argon」による、知能の新たな時代について紹介する。"
    }
  ]
};
