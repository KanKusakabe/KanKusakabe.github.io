window.papersData = {
  "updated_at": "2026-11-08 10:11 JST",
  "arxiv": [
    {
      "id": "2611.07920",
      "title": "How Finite Brains Generalize Without Bound: Spatial Memory as a Universal Computer",
      "url": "https://arxiv.org/abs/2611.07920",
      "pdf": "https://arxiv.org/pdf/2611.07920",
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
      "comment": "57 pages, including appendices",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "a memory that grows while what the learner reads of it stays finite",
      "signals": [],
      "headline": "有限の脳が無限に一般化する仕組みを空間メモリの周期性から解明する理論とモデル",
      "what": "学習者が「座標（位置・時間）」ではなく「一致（同一性の判断）」のみを読み取ることで、入力サイズに依存しない普遍的な規則を獲得できることを示した理論的研究です。周期的なグリッドモジュールを模したマシンを提案し、ニューラルネットワークでの実装を行っています。",
      "enables": "40文字までの文字列で訓練されたモデルが、500文字までの未知の長さにおいて99%以上の正解率を達成し、TransformerやLSTMが失敗するタスクを解決しました。",
      "why_it_matters": "空間記憶の回路がなぜ算術や文法といった抽象的な能力に転用できるのかを理論的に説明し、LLMの長文外挿限界に対する新たな視点を与えています。",
      "tags": [
        "人工知能理論",
        "神経科学",
        "汎化性能"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.05735",
      "title": "Self-Supervised Learning of Universal Latent Spaces for Operator Learning",
      "url": "https://arxiv.org/abs/2611.05735",
      "pdf": "https://arxiv.org/pdf/2611.05735",
      "authors": [
        "Sepehr Mousavi",
        "Levi Lingsch",
        "Siddhartha Mishra",
        "Laura De Lorenzis"
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
      "star_level": 1,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "a functional autoencoder is pre-trained on analytic functions synthesized on the fly",
      "signals": [],
      "headline": "偏微分方程式の解や画像を共通して扱える自己学習型ユニバーサル潜在空間の構築",
      "what": "演算子学習（Operator Learning）において表現学習と学習タスクを分離し、解析関数を用いた自己学習によってタスクに依存しない潜在空間を事前学習する手法です。関数オートエンコーダにより、並進やスケーリングに対して完全な等変性を持つ潜在空間を凍結して再利用します。",
      "enables": "流体力学や音響学など28のタスクにおいて、既存手法を上回る精度を維持しつつ、最大で1桁高いスループットと2桁大きいモデルの学習を可能にしました。",
      "why_it_matters": "タスクごとに空間を再構築する必要がなく、キャッシュされた埋め込み上で学習を行うため、計算資源の大幅な節約と高度な物理シミュレーションの効率化に貢献します。",
      "tags": [
        "機械学習",
        "科学計算",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.07232",
      "title": "Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost",
      "url": "https://arxiv.org/abs/2611.07232",
      "pdf": "https://arxiv.org/pdf/2611.07232",
      "authors": [
        "Ruitian Wang",
        "Xinyu Yang",
        "Minshen Zhang",
        "Hao Zhang"
      ],
      "categories": [
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 6 figures, 17 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "each query has $O(\\log L)$ selection cost and reads $O(\\log L)$ entries",
      "signals": [],
      "headline": "対数コストで100万トークンの文脈長へ外挿するRecursive Sparse Attention（RecSA）",
      "what": "KVキャッシュ上にツリー構造を構築し、各ノードがサブツリーを1つのキーと平均プーリングされたバリューで要約する手法です。各レイヤーで共有されるプーラーを用いて階層的に上位k個の候補を選択し、未選択の要約と選択されたトークンを一つのSoftmaxで処理します。",
      "enables": "Qwen3-4Bをベースとした検証で、100万トークン時にRULERスコア60.5を達成し、既存のDense+DCA（40.0）を上回りました。524Kトークンでの推論において、H200 GPU 1枚でプリフィルを3.2倍、デコードを3.8倍に高速化します。",
      "why_it_matters": "従来の手法が選択コストにO(L)を要していたのに対し、O(log L)への削減と訓練長を超えた外挿を両立させており、超長文脈の効率的な処理を可能にします。",
      "tags": [
        "LLM",
        "Attentionメカニズム",
        "推論最適化"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07275",
      "title": "Efficient Diffusion Policy Fine Tuning with Latent Noise Representation Bridging",
      "url": "https://arxiv.org/abs/2611.07275",
      "pdf": "https://arxiv.org/pdf/2611.07275",
      "authors": [
        "Yuanchu Liang",
        "Yue Yang",
        "An-Chi He",
        "Hanna Kurniawati"
      ],
      "categories": [
        "cs.RO",
        "cs.AI"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Conference on Neural Information Processing Systems (NeurIPS), 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introducing the Latent Noise Linear Markov Decision Process (LNL-MDP)",
      "signals": [],
      "headline": "潜在ノイズ表現の架け橋により拡散ポリシーの強化学習を効率化するLARBRID",
      "what": "ノイズ空間とアクション空間の値を共通表現で整列させる「Latent Noise Linear Markov Decision Process (LNL-MDP)」を導入した手法です。この理論に基づき、事前学習済みモデルを環境に適応させるための初期分布を最適化するBridge Equationを導出しています。",
      "enables": "ロボットの移動や操作タスクにおいて、従来の拡散ポリシーの微調整手法と比較して最大2〜3倍のパフォーマンス向上を実現しました。",
      "why_it_matters": "拡散モデルのRL微調整における「ノイズ・エイリアシング（ノイズとアクションの対応付けの欠如）」を解決し、理論的保証を伴う効率的な学習を可能にしました。",
      "tags": [
        "ロボティクス",
        "拡散モデル",
        "強化学習"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.08342",
      "title": "4D Point Splatting for mmWave Radar Micro-Doppler Differentiable Rendering",
      "url": "https://arxiv.org/abs/2611.08342",
      "pdf": "https://arxiv.org/pdf/2611.08342",
      "authors": [
        "Adnan Armouti",
        "Guanyue Qian",
        "Rajalakshmi Nandakumar"
      ],
      "categories": [
        "cs.CV",
        "cs.GR",
        "cs.LG",
        "eess.SP"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Under Review",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Our reconstructions set the state of the art",
      "signals": [],
      "headline": "ミリ波レーダーのマイクロドップラーを高精度に再現する可微分レンダリング4DPS",
      "what": "シーンを位置、材質、法線、速度を持つ4Dポイントの集合として表現し、ミリ波レーダーの複雑な信号を直接シミュレートする物理ベースの可微分レンダラー「4D Point Splatting (4DPS)」です。",
      "enables": "実測データとの相関においてマイクロドップラーで0.988という高い忠実度を達成し、本手法で生成した合成データで訓練した姿勢推定モデルは実データにおいて21.9cmの誤差（既存手法127.6cm）まで精度を高めました。",
      "why_it_matters": "レーダーデータの収集コストとSim2Realギャップの課題を解決し、人間中心の多様なタスク向けに大規模な合成データセット構築を可能にします。",
      "tags": [
        "ミリ波レーダー",
        "可微分レンダリング",
        "データ合成"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07707",
      "title": "CAMP: Context-Aware Mapping and Placement for LLMs on 3D-IMC Arrays",
      "url": "https://arxiv.org/abs/2611.07707",
      "pdf": "https://arxiv.org/pdf/2611.07707",
      "authors": [
        "Orhun G\\\"orkem",
        "Athanasios Vasilopoulos",
        "Georgios Pagonis",
        "Victoria Clerico",
        "Hadjer Benmeziane",
        "Irem Boybat"
      ],
      "categories": [
        "cs.AR",
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
      "star_quote": "improving 3D-IMC compute utilization from 42.4% to 60.3%, delivering up to 2.0x higher 3D-IMC throughput and 1.74x higher end-to-end throughput over state-of-the-art mapping algorithms.",
      "signals": [],
      "headline": "3D-IMCチップ上のLLM推論を最適化する文脈依存の重みマッピング「CAMP」",
      "what": "3D積層型アナログインメモリコンピューティング（3D-IMC）において、行列ベクトル演算の並列実行を最大化する重み配置アルゴリズムです。アーキテクチャの制約や推論時のコンテキストを「コンフリクト行列」として捉え、探索空間を効率的に剪定します。",
      "enables": "ハードウェアの変更なしに計算リソースの利用率を42.4%から60.3%に向上させ、従来手法と比較して最大2.0倍のスループット向上を達成しました。",
      "why_it_matters": "メモリ帯域がボトルネックとなるLLM推論において、次世代ハードウェアのポテンシャルをソフトウェア最適化のみで引き出す実用的手法です。",
      "tags": [
        "LLM",
        "AIハードウェア",
        "インメモリコンピューティング"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.06084",
      "title": "Shallow Encoding Emits Deep Memories",
      "url": "https://arxiv.org/abs/2611.06084",
      "pdf": "https://arxiv.org/pdf/2611.06084",
      "authors": [
        "Mingyuan Ma",
        "Yangmin Li",
        "Harris Nover",
        "Zheyu Fu",
        "Po-Han Huang",
        "Alex Settle"
      ],
      "categories": [
        "cs.LG",
        "cs.DC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages. Mingyuan Ma and Yangmin Li contributed equally",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "emitters, therefore write a prompt's deep memories from the residual stream",
      "signals": [],
      "headline": "浅い層の計算から深い層のメモリを生成し、推論のメモリ効率と速度を向上させるSEED",
      "what": "ハイブリッド言語モデルにおいて、深い層のメモリ書き込みが浅い層の表現から予測可能であるという特性を利用し、中間層をスキップしてメモリ（KVキャッシュや再帰状態）を生成する手法です。さらに、再帰状態を低ランク因子に圧縮して保存することでデコード時のメモリ負荷を軽減します。",
      "enables": "Qwen3.8-Flash-Nextなどのモデルにおいて、性能を維持したままGPUあたりのスループットを1.2〜1.4倍に向上させることが可能です。",
      "why_it_matters": "モデルの深さと状態表現の両面で「浅さ」を追求することで、長文コンテキストや大規模エージェント実行時におけるメモリ帯域のボトルネックを解消します。",
      "tags": [
        "LLM",
        "推論最適化",
        "計算効率化"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06793",
      "title": "Transforming Integer Grids to Spatial Intuition: Perception, Not Planning, Governs ARC-AGI-3",
      "url": "https://arxiv.org/abs/2611.06793",
      "pdf": "https://arxiv.org/pdf/2611.06793",
      "authors": [
        "Harsidak Singh Banwait"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "24 pages, 17 figures, 8 tables. Submitted to the ARC Prize 2026 paper track. Code: https://github.com/Harsidak/SARBLOH",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap",
        "sota"
      ],
      "star_quote": "SARBLOH scored 16.53 on the hidden Kaggle evaluation, 13.7x the first Milestone winner.",
      "signals": [],
      "headline": "幾何学的知覚エンジンによりARC-AGIベンチマークの効率と精度を飛躍的に高めるSARBLOH",
      "what": "ARC-AGI-3という難関知能テストに対し、計画能力ではなく「空間知覚」を重視したアプローチです。整数のグリッドを幾何学的なオブジェクト目録や不変条件のブリーフィングに変換する高速な知覚エンジンと、コードを生成して実行するランタイムを組み合わせています。",
      "enables": "特定の評価指標において、スコアを3/28から25/28へと大幅に引き上げると同時に、使用トークン量を89.4%削減しました。",
      "why_it_matters": "LLMが苦手とする「グリッドをただの数値列として読み取る」ことによる空間構造の喪失を回避し、効率的な視覚的推論を実現する新しい道筋を示しました。",
      "tags": [
        "AIエージェント",
        "知能評価",
        "空間知覚"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.07294",
      "title": "Householder Motion Embedding: Noise Modulation for Motion-Controllable Video Generation",
      "url": "https://arxiv.org/abs/2611.07294",
      "pdf": "https://arxiv.org/pdf/2611.07294",
      "authors": [
        "Tao Jun Lin",
        "Jinhong Ni",
        "Ruyi Zha",
        "Yifu Wang",
        "Xibin Song",
        "Pan Ji"
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
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "HME exactly preserves the spatial Gaussian structure within each frame",
      "signals": [],
      "headline": "Householder変換によるチャンネル空間のノイズ変調を用いた動画生成の動き制御",
      "what": "動画生成において、ユーザーの動き指示をHouseholder反射（直交変換）のシーケンスとして各位置のチャンネルベクトルにエンコードするHouseholder Motion Embedding (HME)を提案しています。",
      "enables": "各フレーム内のガウス構造を正確に維持しつつフレーム間の相関を導入し、従来のnoise-warping手法と比較して2.7倍の高速化と、同等以上の生成品質を達成しました。",
      "why_it_matters": "従来の空間ワーピングで必要だった計算負荷の高い分布補正を不要にし、アーキテクチャに依存しない効率的な動き制御を実現しています。",
      "tags": [
        "動画生成",
        "拡散モデル",
        "画像処理"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07854",
      "title": "Towards Foundation Decision Models: Drex",
      "url": "https://arxiv.org/abs/2611.07854",
      "pdf": "https://arxiv.org/pdf/2611.07854",
      "authors": [
        "Nischay Dhankhar",
        "Alisher Amantay",
        "Zhanibek Datbayev",
        "Darkhan Akhmetov",
        "Yash Shah",
        "Nurmukhamed Ubaidullayev"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "51 pages, 13 figures, 25 tables. Models and code: https://huggingface.co/nace-ai",
      "hf_upvotes": 18,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Max sets a new state of the art among the decision models we compare",
      "signals": [],
      "headline": "非自己回帰で高速かつ安定した回答を実現する意思決定モデル「Drex」ファミリー",
      "what": "LLMの自己回帰デコードを行わず、与えられた選択肢に対する確率分布を直接出力する意思決定特化型モデルです。RLAF（Adjusted Feedbackからの強化学習）やオプション順序への頑健性を高めるConsistency Lossを用いて学習されています。",
      "enables": "最上位モデルのMaxは、典型的なリクエストに対して183msで回答し、Claude Opus 5.5（3.5秒）やGPT-6 Sol（2.0秒）に匹敵する精度を維持しながら大幅な低遅延化を実現しました。",
      "why_it_matters": "実運用でのLLM利用におけるコスト、レイテンシ、出力の不安定性を解消し、構造化された選択タスクにおける基盤モデルの新たな形態を提示しています。",
      "tags": [
        "LLM",
        "意思決定モデル",
        "推論高速化"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07896",
      "title": "AffordJEV: Affordance Grounding by Confirming Candidate Regions",
      "url": "https://arxiv.org/abs/2611.07896",
      "pdf": "https://arxiv.org/pdf/2611.07896",
      "authors": [
        "Jincheng Li",
        "Yutian Zhang",
        "Jianyu Zhang",
        "Xinshun Wang",
        "Mengyuan Liu"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 3 figures, 5 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "first approach to bring System One models to affordance grounding",
      "signals": [],
      "headline": "言語を介さず直接領域を選択するSystem One型のアフォーダンス接地「AffordJEV」",
      "what": "凍結されたセグメンターが提案する候補領域を、テキストを介さず1回の順伝播で直接判定するSystem Oneモデルです。物体、パーツ、サブパーツの階層レベルで領域を絞り込み、レベル間で情報をやり取りして修正を行う推論フレームワークを採用しています。",
      "enables": "Chain-of-Thought（System Two）を用いる手法を精度で上回り、かつ未知のドメイン（UMD、IIT-AFF）へのゼロショット転送においても優れた性能を示しました。",
      "why_it_matters": "アフォーダンス特定を知覚的な判断と捉え、言語推論のコストとエラーを排除したことで、より直接的で効率的なロボット操作への応用が期待されます。",
      "tags": [
        "ロボティクス",
        "コンピュータビジョン",
        "アフォーダンス"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.08236",
      "title": "Beyond Quadratic Attention: Separable Gaussian Operators for ODE Vision Transformers",
      "url": "https://arxiv.org/abs/2611.08236",
      "pdf": "https://arxiv.org/pdf/2611.08236",
      "authors": [
        "Carlos Boned Riera",
        "David Romero Sanchez",
        "Oriol Ramos Terrades"
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
        "new"
      ],
      "star_quote": "separable sum-of-Gaussians spatial operator that replaces dense self-attention",
      "signals": [],
      "headline": "ガウスカーネルの分離和によりVision Transformerの計算量を削減するSSoG演算子",
      "what": "自己注意機構を、学習可能な軸分離型ガウスカーネルの混合で置き換えるSeparable Sum-of-Gaussians (SSoG)を提案しています。数学的にはグローバルなリプシッツ連続性を保証し、Neural ODE（連続深度）形式での解の唯一性を担保します。",
      "enables": "1024x1024の高解像度画像において、従来の自己注意機構に比べ154%高いスループットと60%以上のピークメモリ削減を達成しつつ、精度も向上させました。",
      "why_it_matters": "自己注意機構の二次コスト（O(N^2)）を打破し、高解像度画像へのスケーリングを理論的裏付けを持って実用化する手法です。",
      "tags": [
        "Vision Transformer",
        "Neural ODE",
        "推論最適化"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07367",
      "title": "Test-Time Self-Play: Scaling without a Verifier",
      "url": "https://arxiv.org/abs/2611.07367",
      "pdf": "https://arxiv.org/pdf/2611.07367",
      "authors": [
        "Akira Yoshiyama",
        "Akmal Ashirmatov",
        "Jonas H\\\"ubotter",
        "Ido Hakimi",
        "Andreas Krause"
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
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "approach to test-time scaling using asymmetric self-play without reliance on a verifier",
      "signals": [],
      "headline": "検証器（Verifier）なしで推論時の計算量スケーリングを実現する非対称自己対戦",
      "what": "正解を判定する検証器が利用できない環境において、モデル同士の非対称な自己対戦（Self-Play）を通じて回答を改善するTest-Time Self-Play (TTSP)を提案しています。",
      "enables": "LiveCodeBenchにおいて、検証器がない条件下で平均@8の精度を絶対値で35%向上させ、検証器の精度によらず既存のベースラインを上回る性能を示しました。",
      "why_it_matters": "数学やコードのように正誤判定が容易なタスク以外でも、推論時に計算量を投入して性能を向上させるスケーリング則を適用可能にします。",
      "tags": [
        "LLM",
        "Test-Time Scaling",
        "自己対戦"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07437",
      "title": "IMUDINO: Self-distilled Foundation Model for Inertial Sensing",
      "url": "https://arxiv.org/abs/2611.07437",
      "pdf": "https://arxiv.org/pdf/2611.07437",
      "authors": [
        "Zhoutong Ye",
        "Chengwen Zhang",
        "Zixuan Wang",
        "Xufeng Jian",
        "Zhe He",
        "Qingyang Wan"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Official repo: https://github.com/Cambrian-yzt/IMUDINO-Release",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "the first foundation model (FM) for inertial sensing to achieve competitive performance",
      "signals": [],
      "headline": "多様なタスク・センサ設定に対応する慣性センシング基盤モデル「IMUDINO」",
      "what": "DINOの自己教師あり学習パラダイムを慣性データに適応させ、センサ位置やサンプリングレートの変化を模した変換を用いて学習した基盤モデルです。周波数認識型の位置エンコーディングを備えたPlain Transformerを採用しています。",
      "enables": "活動認識(HAR)、ヘルスケア、モーションキャプチャ、オドメトリといった多様なタスクで競争力のある性能を示し、未学習のセンサ位置や異なるロボット機体へも汎化しました。",
      "why_it_matters": "特定のタスクや固定設定に依存していた従来の慣性センサ向けモデルとは異なり、画像や言語の分野のような汎用的なバックボーンを提供します。",
      "tags": [
        "基盤モデル",
        "慣性センサ",
        "自己教師あり学習"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.05689",
      "title": "TRUST-Stereo: Teacher-Assisted Robust Uncertainty-Guided Search and Transfer for Fast Stereo Matching",
      "url": "https://arxiv.org/abs/2611.05689",
      "pdf": "https://arxiv.org/pdf/2611.05689",
      "authors": [
        "Pouya Sohrabipour",
        "Yihong Feng",
        "Chaitanya Kumar Reddy Pallerla",
        "Tuan Dang",
        "Ngan Le",
        "Dongyi Wang"
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
        "sota"
      ],
      "star_quote": "TRUST-Stereo achieves state-of-the-art results on several benchmark metrics",
      "signals": [],
      "headline": "不確実性に基づき探索範囲を適応させる高速かつ頑健なステレオマッチング手法の開発",
      "what": "Uncertainty-Guided Residual Search Module (UGRSM)を導入し、伝播された視差の信頼性を推定して探索中心を動的に補正する手法です。さらに、基盤モデルから軽量なバックボーンへ知識を転送する2段階のSenior-Junior Teacher Assistant蒸留戦略を採用しています。",
      "enables": "KITTI 2015でEPE 0.93、MiddleburyでBad 2.0 6.79%というSOTAの精度を達成しつつ、ステレオペア1組あたり約50msの高速な推論が可能です。",
      "why_it_matters": "従来のcoarse-to-fine手法が抱えていた誤差伝播による対応点消失の問題を解決し、実用的な速度と高いゼロショット汎化性能を両立しています。",
      "tags": [
        "コンピュータビジョン",
        "ステレオマッチング",
        "知識蒸留"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06781",
      "title": "Semantic Residual Vector Quantization for Sign Language Generation",
      "url": "https://arxiv.org/abs/2611.06781",
      "pdf": "https://arxiv.org/pdf/2611.06781",
      "authors": [
        "Chang Liu",
        "Ke Han",
        "Niccol\\`o Biondi",
        "Gloria Isotton",
        "Elisa Ricci",
        "Davide Talon"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to WACV 2027",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SRVQ achieves R@1 of 82.3 and 70.3, outperforming the previous SOTA by 30 and 46",
      "signals": [],
      "headline": "意味論から運動学への階層的アプローチによる高精度な手話生成フレームワーク",
      "what": "Semantic Residual Vector Quantization (SRVQ)を導入し、手話の内容（意味）と具体的な動き（運動学）を階層的にモデル化する手法です。第1レベルで手話の単語内容をコード化し、後続のレベルで手指の形や軌道などの詳細なポーズ情報を洗練させます。",
      "enables": "CSL-DailyデータセットにおいてR@1指標で82.3を記録し、従来手法を30ポイント以上上回る精度でテキストから手話動作を生成できます。",
      "why_it_matters": "「何を結ぶか」と「どう動くか」を明示的に分離することで、複雑な手話表現における文脈の正確性と微細な調音の再現性を向上させました。",
      "tags": [
        "コンピュータビジョン",
        "手話生成",
        "動作合成"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05591",
      "title": "C-GRPO: Conformal Group Relative Policy Optimization",
      "url": "https://arxiv.org/abs/2611.05591",
      "pdf": "https://arxiv.org/pdf/2611.05591",
      "authors": [
        "Arya Fayyazi",
        "Seyedarmin Azizi",
        "Mehdi Kamal",
        "Massoud Pedram"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Proceeding of NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "CGRPO, which replaces the fixed rollout budget of standard GPRO with calibrated conformal thresholds over task-specific nonconformity scores",
      "signals": [],
      "headline": "共形予測を用いた適応的な計算配分によりGRPOの学習効率を大幅に改善するC-GRPO",
      "what": "標準的なGRPOが固定のロールアウト数を用いるのに対し、タスクの難易度に応じて試行回数を適応的に変化させる手法です。Conformal Prediction（共形予測）を用いて停止規則を較正し、統計的な保証を提供しながら計算量を制御します。",
      "enables": "数学やコード生成のベンチマークにおいて、精度を維持したまま平均トレーニングロールアウト数を49〜70%削減することに成功しました。",
      "why_it_matters": "簡単な問題への過剰な計算と難問への探索不足という非効率性を、数学的根拠に基づいた適応的バジェット管理で解決しています。",
      "tags": [
        "LLM",
        "強強化学習",
        "学習最適化"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05643",
      "title": "Data-Efficient Scaling-Law Discovery for Recommendation Systems via Coupled Hyperparameter Scaling",
      "url": "https://arxiv.org/abs/2611.05643",
      "pdf": "https://arxiv.org/pdf/2611.05643",
      "authors": [
        "John Martabano Landy",
        "Louis C. Tiao",
        "Yao Xuan",
        "Luc Kien Hang",
        "Rupinder P. Khandpur",
        "Arvind M. Vepa"
      ],
      "categories": [
        "cs.LG",
        "cs.IR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "introduce a scaling layer, which groups primitive architecture parameters into semantically coherent groups and defines how they co-vary",
      "signals": [],
      "headline": "推薦システムにおける計算量と精度のスケーリング則を効率的に発見するAxiaワークフロー",
      "what": "推薦モデルの複雑なアーキテクチャパラメータを意味のあるグループにまとめ、低次元のハイパーパラメータ空間からスケーリング則を導き出す手法です。サロゲートモデルを用いて、少量の試行から効率的にパレート境界を推定します。",
      "enables": "Metaの広告推薦システムにおいて、オフラインでの正規化エントロピーを0.66%改善し、オンラインでも0.36%のリフトを達成しました。",
      "why_it_matters": "LLMとは異なり構造が多様な推薦モデルにおいて、不確実性を考慮しながら最適な計算資源配分を自動決定できる実用的なフレームワークを提供します。",
      "tags": [
        "推薦システム",
        "スケーリング則",
        "AutoML"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05835",
      "title": "Pathwise-Budgeted LLM Routing: Online Allocation with K-Bit Tail-Cost Learning",
      "url": "https://arxiv.org/abs/2611.05835",
      "pdf": "https://arxiv.org/pdf/2611.05835",
      "authors": [
        "Hanzhang Qin",
        "Sophie H. Yu",
        "Yuewei Zhang",
        "Zhi-Hai Zhang"
      ],
      "categories": [
        "cs.LG",
        "math.OC"
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
      "star_quote": "ADP-HT, which learns each model's task-specific success probability and constructs conservative cost estimates from coarsened response-length labels",
      "signals": [],
      "headline": "予算制約下で最適なLLMを選択しタスク成功率を最大化するパスワイズ・ルーティング手法",
      "what": "固定予算内で複数のLLMを使い分ける際、タスクごとの成功確率と予測コスト（応答長）を考慮してモデルを選択するコンテキストバンディットアルゴリズムです。コスト推定に不確実性を考慮した保守的な値を導入し、残予算に応じてペナルティを調整します。",
      "enables": "厳しい予算制約下において、MATH500やGPQAなどの難関タスクで既存のベースライン手法の2倍以上の解を導き出すことができました。",
      "why_it_matters": "実行後までコストが確定しないLLM APIの利用において、1回の長い回答による予算枯渇を防ぎ、システム全体のタスク完了数を最適化します。",
      "tags": [
        "LLM",
        "オンライン学習",
        "リソース管理"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06108",
      "title": "Learning When to Think Aloud in Latent Reasoning",
      "url": "https://arxiv.org/abs/2611.06108",
      "pdf": "https://arxiv.org/pdf/2611.06108",
      "authors": [
        "Zhehao Zhou",
        "Tongrui Su",
        "Shengyu Zhu",
        "Da Li",
        "Zeyu Liu",
        "Jun Zhu"
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
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "VITAL, an importance-guided hybrid reasoning framework that selectively verbalizes informative tokens as reasoning anchors while keeping most computation latent.",
      "signals": [],
      "headline": "重要な思考のみを言語化し、潜在空間での推論と組み合わせるハイブリッド推論枠組みVITAL",
      "what": "すべての思考をトークンとして出力するのではなく、重要なアンカーとなるトークンのみを選択的に言語化し、残りの計算を連続的な潜在状態で処理する手法です。ゲート機構により、言語化と潜在状態のフィードバックを動的に切り替えます。",
      "enables": "GPT-2やLlama-3.2において、従来の潜在推論手法より最大9.6%高い精度を達成し、かつ通常のChain-of-Thought（CoT）より短い系列長で推論可能です。",
      "why_it_matters": "CoTの高い精度と潜在推論の低コストを両立させ、推論効率を損なうことなく数学的推論などの精密なタスクに対応できます。",
      "tags": [
        "LLM",
        "推論効率化",
        "Chain-of-Thought"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06121",
      "title": "3D Pose Estimation in Projection Space via Pixel-level Visible Light Communication",
      "url": "https://arxiv.org/abs/2611.06121",
      "pdf": "https://arxiv.org/pdf/2611.06121",
      "authors": [
        "Michikuni Eguchi",
        "Takefumi Hiraki"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "submitted to IEEE Access",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "first realization of real-time 3D pose estimation coordinated with high-quality projected image content without external sensing infrastructure.",
      "signals": [],
      "headline": "可視光通信を用いたプロジェクタ映像によるドローンなどのリアルタイム3D位置推定",
      "what": "プロジェクタの各画素に高速な輝度変調を施すPixel-level Visible Light Communication (PVLC)を利用し、受信側の4つの光センサで3Dポーズを推定する手法です。PnP問題として定式化することで、平面上に限定されていた従来技術を3次元空間へ拡張しました。",
      "enables": "外部センサなしで、約8msの低遅延かつ19.2mm（RMSE）という高精度な3D位置推定と高品質な映像投影を両立しました。",
      "why_it_matters": "専用のモーションキャプチャ設備なしで、プロジェクタが照射する空間内でのロボットやデバイスの精密な位置制御が可能になります。",
      "tags": [
        "ロボティクス",
        "可視光通信",
        "AR"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06270",
      "title": "NextGAN: Towards Simple and Scalable GAN Training for Image and Video Generation",
      "url": "https://arxiv.org/abs/2611.06270",
      "pdf": "https://arxiv.org/pdf/2611.06270",
      "authors": [
        "Xinhao Lou",
        "Dongye Xie",
        "Peng Sun",
        "Chenyi Zhuang",
        "Kaicheng Yu",
        "Tao Lin"
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
      "star_quote": "regressing its input gradient onto displacements between independently paired reference and generated features at interpolated locations in frozen representation spaces.",
      "signals": [],
      "headline": "画像・動画生成における1ステップでの高品質なサンプリングを可能にするNextGAN",
      "what": "従来のGAN損失の代わりに、生成された特徴と参照特徴の間の変位に対して識別器の勾配を回帰させる新しい目的関数を提案しています。事前学習済みの大規模なImageNetモデルや動画生成モデル（Wan2.1）に適用可能です。",
      "enables": "14Bパラメータまでの大規模モデルを安定して学習でき、ImageNetでFID 1.54（1ステップ）、動画生成でもVBenchで既存手法を上回るスコアを記録しました。",
      "why_it_matters": "複雑な蒸留や補助的な損失を用いずに、大規模な拡散モデルなどを1〜2ステップで実行可能な高速生成モデルへと効率的に変換できます。",
      "tags": [
        "画像生成",
        "動画生成",
        "GAN"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06519",
      "title": "IDSISA: Influence-Distilled Sharded Training for Efficient Machine Unlearning",
      "url": "https://arxiv.org/abs/2611.06519",
      "pdf": "https://arxiv.org/pdf/2611.06519",
      "authors": [
        "Deeraj SK",
        "Sadhana Devarajan",
        "Tanmoy Hazra",
        "Anupam Shukla"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "This work has been submitted to the IEEE for possible publication. Copyright may be transferred without notice, after which this version may no longer be accessible",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "IDSISA (Influence-Distilled SISA), which uses influence functions to concentrate forget-prone samples into few shards and distillation from unaffected shards",
      "signals": [],
      "headline": "影響関数と知識蒸留により特定のデータの影響を効率的に削除するIDSISA",
      "what": "機械学習モデルから特定の学習データの影響を削除するUnlearningの手法です。影響関数を用いて削除対象になりやすいデータを特定のシャード（分割データ）に集中させ、削除後の性能低下を残りのシャードからの蒸留で補完します。",
      "enables": "SISAと比較して、選択的忘却の性能を14〜91%向上させ、モデルの有用性（Utility）の保持率を最大50%改善しました。",
      "why_it_matters": "プライバシー規制への対応として、モデル全体を再学習することなく、数学的な保証を維持しながら効率的かつ高品質なデータ削除を可能にします。",
      "tags": [
        "機械学習",
        "Machine Unlearning",
        "プライバシー"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06585",
      "title": "Signed, Sealed, Leaked: Trust Beyond Signature for MCP Toolchains",
      "url": "https://arxiv.org/abs/2611.06585",
      "pdf": "https://arxiv.org/pdf/2611.06585",
      "authors": [
        "Yichiet Aun (Universiti Tunku Abdul Rahman)",
        "Mohammed A. Alhartomi (University of Tabuk)",
        "Jing Jie Tan (National University of Singapore)",
        "Waqas Nadeem (Universiti Tunku Abdul Rahman)",
        "Adeb Salh (Universiti Tunku Abdul Rahman)",
        "Shankar Karuppayah (Bitranger"
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
      "comment": "24 pages, 5 figures, 15 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "germline execution, which limits information disclosure without inspecting or trusting tool implementations.",
      "signals": [],
      "headline": "AIエージェント用ツールの悪意ある動作を防ぐデータ隔離実行環境Germline Execution",
      "what": "署名済みツールであっても秘密情報の漏洩を防ぐため、機密データを含まない「Germline（生殖系列）」プロセスからエフェメラルなコピーを作成してツールを実行する手法です。各実行コピーには、その宛先に許可されたデータのみを提供し、情報流出の経路を物理的に遮断します。",
      "enables": "153回の攻撃実験において、既存の防御手法が漏洩を防げなかったケースでも、情報漏洩をゼロに抑えることに成功しました。",
      "why_it_matters": "Model Context Protocol (MCP)などのツール利用において、実装の信頼性に依存せず、構造的に情報の機密性を担保するセキュリティ手法を提供します。",
      "tags": [
        "AIエージェント",
        "セキュリティ",
        "Model Context Protocol"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.08449",
      "title": "VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding",
      "url": "https://arxiv.org/abs/2611.08449",
      "pdf": "https://arxiv.org/pdf/2611.08449",
      "authors": [
        "Yu-Cheng Chou",
        "Shihao Wang",
        "Jin Huang",
        "Chi-Pin Huang",
        "Chiao-An Yang",
        "Xianzhe Fan"
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
      "hf_upvotes": 91,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲91"
      ],
      "headline": "構造化デコードにより視覚的プランニングを25倍高速化するVFlash",
      "what": "ロボットの軌道や境界ボックスなどの視覚的プリミティブを、1トークンずつ生成するのではなく、軽量なドラフトモデルを用いて1回の順伝播で共同予測する「Flash Primitive Decoding」手法です。",
      "enables": "3Dポイントの動き予測において従来の自己回帰生成より約25倍高速化し、かつ予測誤差も削減しました。タスク成功率においてもベースラインの62.6%から70.2%へと向上しています。",
      "why_it_matters": "物理AIにおいて不可欠な空間的な計画策定を、精度を犠牲にすることなく、リアルタイム制御が可能な速度まで高速化しました。",
      "tags": [
        "ロボティクス",
        "Vision-Language Model",
        "推論高速化"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.08373",
      "title": "SLA: Scaling Spatial-Language-Action Model via Continual Pre-training",
      "url": "https://arxiv.org/abs/2611.08373",
      "pdf": "https://arxiv.org/pdf/2611.08373",
      "authors": [
        "Fuhao Li",
        "Wenxuan Song",
        "Qizhou Huang",
        "Ziyang Zhou",
        "Jingbo Wang",
        "Junwu E"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://SLA.github.io/ ; Github: https://github.com/OpenHelix-Team/Spatial-Forcing/tree/master/SLA",
      "hf_upvotes": 72,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲72"
      ],
      "headline": "空間的な位置合わせを継続事前学習で強化したVLAモデル「SLA」",
      "what": "視覚・言語・アクション（VLA）モデルにおいて、凍結された3D認識モデルの表現と視覚エンベディングを動的に整列させる手法です。不均一なロボットデータセットを統合し、特徴量依存のゲートを用いて空間情報を注入します。",
      "enables": "推論時のアーキテクチャを変更することなく、多様なロボット形態やシーンにおける3D空間理解と精密な操作能力を向上させました。",
      "why_it_matters": "2D視覚表現に依存しがちな既存のVLAに対し、ロボットの経験から直接的な空間教師あり学習を取り入れることで、より汎用的な空間操作能力の獲得を可能にします。",
      "tags": [
        "ロボティクス",
        "VLA",
        "3D認識"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.07392",
      "title": "WeLM-Image: A Unified Image Generation Model towards Visual Intelligence",
      "url": "https://arxiv.org/abs/2611.07392",
      "pdf": "https://arxiv.org/pdf/2611.07392",
      "authors": [
        "Canmiao Fu",
        "Chen Li",
        "Guohui Zhang",
        "Hao Lu",
        "Hongyang Wei",
        "Huadong Wu"
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
      "hf_upvotes": 38,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲38"
      ],
      "headline": "生成・編集・理解を統合した画像基盤モデル「WeLM-Image」",
      "what": "テキスト、参照画像、潜在変数を単一のシーケンスとして処理するMixture-of-Transformers (MoT)バックボーンを採用した統合モデルです。MoEによるスパース容量（31.7Bパラメータ）を持ち、強化学習とノイズ認識型蒸留で最適化されています。",
      "enables": "H20 GPU 1枚で1024x1024の画像を4.98秒で生成し、PRISM-Bench等のベンチマークでオープンソースモデルとして1位の性能を達成しました。",
      "why_it_matters": "画像生成と理解、指示ベースの編集を一つのモデルに高精度に統合し、単一GPUで動作する実用的なスケーラビリティを実現しています。",
      "tags": [
        "画像生成",
        "Mixture of Experts",
        "画像編集"
      ],
      "fetched_at": "2026-11-07T10:43:09.623673+09:00"
    },
    {
      "id": "2611.06728",
      "title": "Turns Matter: Advancing Streaming Video RL via Turn-Level Credit",
      "url": "https://arxiv.org/abs/2611.06728",
      "pdf": "https://arxiv.org/pdf/2611.06728",
      "authors": [
        "Shuai Dong",
        "Kanghui Tian",
        "Linghan Chen",
        "Wenqi Shao",
        "Hongrui Wu",
        "Haowen Hou"
      ],
      "categories": [
        "cs.CV",
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "16 pages, 4 figures",
      "hf_upvotes": 83,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲83"
      ],
      "headline": "発話ごとの報酬割り当てにより動画対話の冗長性を排除するTurnWise GRPO",
      "what": "ストリーミング動画理解において、モデルが「応答するか待機するか」を判断する各ターンの意思決定に対して個別に報酬を割り当てる手法です。前後のターンの影響を排除したアドバンテージを計算し、各決定の価値を正しく評価します。",
      "enables": "動画内の出来事に対する正確なタイミングでの応答を促進し、既存の強化学習手法よりも高い精度と低い冗長性を実現しました。",
      "why_it_matters": "対話全体ではなく個々の発話ターンの質に焦点を当てることで、リアルタイムな動画視聴・対話システムにおけるエージェントの振る舞いを最適化します。",
      "tags": [
        "動画理解",
        "強化学習",
        "ストリーミング"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06918",
      "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
      "url": "https://arxiv.org/abs/2611.06918",
      "pdf": "https://arxiv.org/pdf/2611.06918",
      "authors": [
        "Weichen Fan",
        "Haiwen Diao",
        "Penghao Wu",
        "Siyuan Hu",
        "Ziqi Huang",
        "Tianqi Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code link: https://github.com/EvolvingLMMs-Lab/NEO/tree/main/VLAKit",
      "hf_upvotes": 56,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲56"
      ],
      "headline": "視覚エンコーダを廃止し、視覚と行動を密接に統合するロボット制御フレームワークNEO-VLA",
      "what": "従来の「固定された視覚エンコーダの出力を言語モデルに渡す」構成ではなく、軽量なパッチトークン化から始まり、モデルの全層で視覚と行動が共に進化するエンコーダフリーなアーキテクチャです。フローマッチングを用いた行動エキスパートが、モデルの各深さの表現を直接参照します。",
      "enables": "多様な操作タスクや分布の変化において、エンコーダベースの従来モデルよりも一貫して高い性能と堅牢な制御を達成しました。",
      "why_it_matters": "ロボット操作に不可欠な微細な幾何学情報や深度情報が、視覚エンコーダによる抽象化で失われるのを防ぎ、より直接的な視覚・行動連携を可能にします。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "ビジョンランゲージアクションモデル"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06910",
      "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
      "url": "https://arxiv.org/abs/2611.06910",
      "pdf": "https://arxiv.org/pdf/2611.06910",
      "authors": [
        "Bingran You",
        "Wenjun Ke",
        "Ria Rosenauer",
        "Bo Liu",
        "Wenbo Chen",
        "Min Chen"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "41 pages (10 pages main text), 19 figures, 11 tables",
      "hf_upvotes": 47,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲47"
      ],
      "headline": "物理学研究の全工程をエージェントが完結できるかを評価するFrontierPhysics",
      "what": "文献調査から計画立案、実験、論文作成まで、物理学の専門家が作成した56のタスクを含むエンドツーエンドの評価ベンチマークです。9つの物理学領域をカバーし、結果の正しさだけでなく、研究としての質や出版可能性も評価します。",
      "enables": "22種類の最新モデルを評価した結果、最高設定でも全試行の3割未満しかパスできないことが明らかになり、エージェントの推論の厳密さや直感の不足を浮き彫りにしました。",
      "why_it_matters": "単なる知識の有無ではなく、現実の複雑な科学的研究を自律的に遂行する能力を測定する、より実践的なAI評価指標として機能します。",
      "tags": [
        "AIエージェント",
        "物理学",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06483",
      "title": "What Does Multi-Turn Reinforcement Learning Really Improve in LLM Agents?",
      "url": "https://arxiv.org/abs/2611.06483",
      "pdf": "https://arxiv.org/pdf/2611.06483",
      "authors": [
        "Kejian Zhu",
        "Zhuoran Jin",
        "Shangqing Tu",
        "Tianyi Men",
        "Yupu Hao",
        "Jiachun Li"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://rethinking-agentic-rl.github.io/",
      "hf_upvotes": 34,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲34"
      ],
      "headline": "複数ターン強化学習がエージェントの回復力と長期的なレジリエンスを向上させることを解明",
      "what": "多ターン対話を行うLLMエージェントにおいて、強化学習が具体的にどの能力を向上させているかを、サンプリング幅と対話の深さの観点から詳細に分析した研究です。また、トレーニング時のバジェット（ターン数）を変化させるBudgetMix RLを提案しています。",
      "enables": "強化学習が単一ステップの判断ミスを減らすのではなく、ミスからの回復（Error Recovery）能力を主に向上させていることを明らかにしました。",
      "why_it_matters": "エージェントの挙動の特性を理解することで、デプロイ時の計算予算に依存しない、より堅牢なエージェントの学習が可能になります。",
      "tags": [
        "LLM",
        "強化学習",
        "エージェント"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05711",
      "title": "Self-Supervised Pretraining for Label-Efficient Facial Expression Recognition using Smart Glasses",
      "url": "https://arxiv.org/abs/2611.05711",
      "pdf": "https://arxiv.org/pdf/2611.05711",
      "authors": [
        "Zhengtao Gao",
        "Francesco Bombassei De Bona",
        "Leonardo Alchieri",
        "Ivana Kiprijanovska",
        "Simon Stankoski",
        "Bojan Sofronievski"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "7 pages, 5 figures, 2 tables. Best Paper Award at the SEPH 2026 workshop, UbiComp Companion '26",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "スマートグラスを用いた表情認識において少量のラベルで高性能を実現する自己学習法",
      "what": "顔の筋肉の動きを検知するOMG（光筋電図）センサを搭載したスマートグラスにおいて、ラベルのない大量のデータからVision Transformerを事前学習する手法です。マスクドオートエンコーダ（MAE）の目的関数を用いて、顔の動きの表現を学習します。",
      "enables": "わずか5%のラベルデータのみを用いた学習で、すべてのラベルを使ってゼロから学習したモデルを上回る表情認識精度を達成しました。",
      "why_it_matters": "プライバシーに配慮したウェアラブルデバイスにおいて、高コストなラベル付け作業を大幅に削減し、個人に最適化された表情認識システムの構築を容易にします。",
      "tags": [
        "自己教師あり学習",
        "表情認識",
        "ウェアラブル"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.05979",
      "title": "Learning Object-Centric Motion Priors from Human for Robotic Dexterous Manipulation",
      "url": "https://arxiv.org/abs/2611.05979",
      "pdf": "https://arxiv.org/pdf/2611.05979",
      "authors": [
        "Zhengdong Hong",
        "Guofeng Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [
        "AAAI"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "Accepted as an oral paper at AAAI 2026 (Website: https://ojs.aaai.org/index.php/AAAI/article/view/38892)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "人間の動画から物体の動きの事前知識を学び、器用なロボット操作を可能にする手法",
      "what": "人間と物体の相互作用（HOI）データセットから、物体が将来どのように動くかを予測するモデルを学習し、その予測結果を強化学習の報酬として利用する手法です。特定のタスクに依存した報酬設計（Reward Engineering）への依存を減らします。",
      "enables": "3つのシミュレーションタスクおよび実世界のロボットハンドにおいて、未知の物体に対しても高い成功率と汎化性能を示しました。",
      "why_it_matters": "「人間がどう動くか」を模倣するのではなく「物体がどう動くべきか」という物理的な事前知識を活用することで、異なるロボットの形状（エンボディメント）にも適応可能な汎用的なスキルを獲得できます。",
      "tags": [
        "ロボティクス",
        "器用な操作",
        "強化学習"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    },
    {
      "id": "2611.06911",
      "title": "BEAKER: An Expert-Curated Benchmark for Embodied Brains in Self-Driving Chemical Laboratories",
      "url": "https://arxiv.org/abs/2611.06911",
      "pdf": "https://arxiv.org/pdf/2611.06911",
      "authors": [
        "Fei Lin",
        "Tengchao Zhang",
        "Ziyang Gong",
        "Xiaotong Yu",
        "Bohan Zhang",
        "Yifan Zhou"
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
      "comment": "Accepted by NeurIPS 2026 (Track on Evaluations and Datasets, Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "自動実験室におけるAIエージェントの判断力と行動能力を評価するBEAKERベンチマーク",
      "what": "自律型化学実験室（SDCL）において、AIモデルが実験装置の認識、軌道計画、安全確認、手順の推論などができるかを評価する、1,000件の専門家によるキュレーション済みデータセットです。",
      "enables": "最新のマルチモーダルLLMを評価した結果、大まかな手順は理解できているものの、具体的な操作領域の特定や微細な装置の状態認識に課題があることを明らかにしました。",
      "why_it_matters": "AIによる化学実験の自動化に向け、物理的な制約や安全性を考慮した実用的な行動能力を測定するための、専門性の高い評価基盤を提供します。",
      "tags": [
        "AIエージェント",
        "化学",
        "ベンチマーク"
      ],
      "fetched_at": "2026-11-06T11:32:14.796786+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.01860",
      "title": "Advances in Agentic Computer Graphics",
      "abstract": "Computer graphics is built on code. Large language model (LLM) agents can now generate graphics code and iteratively refine it through various feedback. This capability opens the door to a potentially new paradigm of computer graphics, with graphics algorithms increasingly built around agentic systems to automate progressively complex tasks. Over the past years, research on agentic graphics has expanded rapidly across a diverse range of tasks. This rapid growth makes it increasingly difficult for manual literature reviews to keep pace with new developments. At the same time, similar ideas are often described using different terminology across these tasks, further complicating efforts to develop a systematic understanding of the field. In this report, we address these challenges through two contributions. First, we introduce a unified taxonomy for characterizing agentic systems across diverse computer graphics tasks. Second, we develop an agentic literature system that can assist human researchers in analyzing existing and newly published papers at scale. Building on these contributions, we analyze emerging research trends and discuss open challenges in coordinating agents and tools across graphics tasks, designing interfaces and representations for human-agent collaboration, sustaining long-horizon planning and refinement, and reliably evaluating interactive graphics systems.",
      "upvotes": 143,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 4,
      "org": "University of Texas at Austin",
      "url": "https://huggingface.co/papers/2611.01860",
      "arxiv_url": "https://arxiv.org/abs/2611.01860",
      "title_ja": "エージェント・コンピュータグラフィックスの進展",
      "summary_ja": "LLMエージェントがコード生成と反復的な修正を通じて複雑なCGタスクを自動化する、新たなCG制作のパラダイムを提案。"
    },
    {
      "id": "2611.00859",
      "title": "Wave Forcing: Towards Speed-of-Light Streaming Video Generation",
      "abstract": "Real-time long-video generation requires continuous output with consistent appearance and natural motion. Existing chunk-wise autoregressive methods face challenges in both generation efficiency and long-video quality: serialized denoising and history-cache refresh require two forward passes even with one-step denoising, and longer rollouts can degrade quality and cause camera drift. We propose Wave Forcing (WF), which co-designs generation, training, and execution for continuous video output with multi-step denoising. WF uses chunk-wise causal attention to access earlier, cleaner chunks before their denoising is complete, and distributes staggered denoising and cache-refresh stages across full-model replicas to achieve 1F1C: one output chunk per concurrent forward round after pipeline fill. To adapt the model to this continuous generation process, we develop a three-stage training procedure that successively introduces mixed-noise denoising, motion supervision, and causal adaptation using self-generated history. To execute this process efficiently, Wave Runtime (WaveRT) uses Wave Parallelism (WP) for early K/V delivery and communication-computation overlap, together with optimized kernels and pipelined VAE decoding. Experiments on Wan2.1-T2V-1.3B show that 5-step WF maintains overall quality comparable to Rolling Forcing while achieving higher Dynamic Degree on both short and long videos. Our system efficiency experiments show that 4-step WF achieves 147.6 DiT FPS and 134.8 end-to-end FPS on eight H200 GPUs, yielding 7.07x the single-GPU end-to-end throughput. In DiT-only tests with matched SageAttention+W8A8 backends, denoising steps, and GPU counts, WP delivers up to 2.53x the throughput of the faster of the Ulysses and Ring context-parallel baselines across six model scales (1.3B-14B).",
      "upvotes": 125,
      "github_stars": 130,
      "github_repo": "https://github.com/SJTU-DENG-Lab/WaveForcing",
      "project_page": "https://sjtu-deng-lab.github.io/WaveForcing/",
      "comments": 6,
      "org": "DENG Lab @ SJTU",
      "url": "https://huggingface.co/papers/2611.00859",
      "arxiv_url": "https://arxiv.org/abs/2611.00859",
      "title_ja": "Wave Forcing: 光速のストリーミングビデオ生成に向けて",
      "summary_ja": "多段階デノイジングを時間軸で分散実行することで、一貫性を保ちつつリアルタイムでの高品質な長時間ビデオ生成を可能にする手法。"
    },
    {
      "id": "2611.08449",
      "title": "VFlash: Fast, Accurate Visual Planning via Flash Primitive Decoding",
      "abstract": "Models for physical AI tasks, such as robotics and autonomous driving, need not reason solely in language. They can use visual plans--points, bounding boxes, and trajectories--to represent spatial goals and anticipate motion. However, autoregressive vision-language models generate these plans one coordinate token at a time, making richer predictions increasingly costly. We introduce VFlash, a method for fast, accurate visual planning through Flash Primitive Decoding. VFlash exploits the known structure of visual primitives to predict their coordinates jointly, using a lightweight drafter that generates an entire primitive in one forward pass. The layout adapts to the primitive's type, dimensionality, and length, supporting compact boxes and long, variable-length trajectories. Crucially, spatial accuracy need not require reproducing an autoregressive model's exact token sequence. VFlash therefore trains on annotated primitives and directly accepts structurally valid predictions without target-token agreement. Across the evaluated 2D and 3D robot trajectory tasks, VFlash consistently reduces prediction errors relative to autoregressive decoding. Preliminary single-rollout measurements indicate approximately 25x faster generation for 3D point motion forecasting. A world action model conditioned on VFlash plans achieves 70.2% average success across four MolmoSpaces task suites, compared with 62.6% for the baseline.",
      "upvotes": 100,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://research.nvidia.com/labs/lpr/vflash/",
      "comments": 1,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.08449",
      "arxiv_url": "https://arxiv.org/abs/2611.08449",
      "title_ja": "VFlash: フラッシュ・プリミティブ・デコーディングによる高速・正確な視覚計画",
      "summary_ja": "視覚的プリミティブの構造を利用し、軽量なドラフターで座標を一括予測することで、自律システムの視覚計画を高速かつ正確に行う。"
    },
    {
      "id": "2611.03178",
      "title": "CoworkOS:Scaling Agent Coworkers for Real-world Automation",
      "abstract": "Rapid advances in cowork agents are shifting human-AI collaboration toward real-world automation, delivering software, designs, and other artifacts. However, such productivity work demands both high-quality delivery on complex productivity tasks and continued monitoring and decision-making over long horizons, a combination that remains an open challenge. We introduce CoworkOS, a general-purpose harness for long-horizon work that separates task strategy from execution management: the model decides actions, delegation, and acceptance, while the runtime maintains state and feedback. Its three-layer architecture enables direct execution or delegation to Subagents, synchronously or asynchronously, under stable responsibilities. Through a shared application layer, humans and agents inspect and revise the same evolving documents, presentations, CAD models, and Blender scenes, so human-in-the-loop participation can enter both through conversation and through direct modification of the work itself. To sustain continuity across agents and sessions, CoworkOS further introduces hierarchical workspaces and persistent semantic memory, so working files, key decisions, and long-running Job logs remain shareable, reusable, and resumable after interruption. Across 12 benchmarks and 6 categories of real-world applications, CoworkOS proves highly competitive with frontier agent applications such as Codex and DeepSeek Harness. As a sustained-work case study, CoworkOS uses GLM-5.3 as its backbone to conduct RSI-driven automated post-training on Qwen3.6-35B-A3B. Over five rounds, the model's average score across eight benchmarks rose from 33.19 to 42.95 (+9.76). Looking ahead, we believe CoworkOS opens a meaningful path toward general cowork-agent intelligence.",
      "upvotes": 100,
      "github_stars": 141,
      "github_repo": "https://github.com/RUC-NLPIR/CoworkOS",
      "project_page": "https://coworkos-ai.github.io",
      "comments": 4,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.03178",
      "arxiv_url": "https://arxiv.org/abs/2611.03178",
      "title_ja": "CoworkOS: 実世界自動化のためのエージェント同僚のスケーリング",
      "summary_ja": "タスク戦略と実行管理を分離した3層アーキテクチャにより、長期にわたる複雑な生産的タスクと状態監視を自動化する基盤。"
    },
    {
      "id": "2611.05376",
      "title": "From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence",
      "abstract": "For a decade, progress in artificial intelligence has been measured by how much a machine can do on its own. Large foundation models now write code and run multistep tasks, and personal agents act on a person's behalf. Yet people still forget what they once knew, miss what they are not looking at, fail to find the right words, and face hard choices without the benefit of their own history, because the machine that could help stands outside the situation. As AI moves into the physical world, attention has settled on one kind of intelligent individual, the embodied robot; we argue that the era of Physical AI holds a second kind of equal importance, the person augmented by AI. Alongside artificial general intelligence, which asks how intelligent a machine can be, stands AI-augmented human intelligence (AHI), which asks how much intelligence a machine can enable in a particular person. Realizing it calls for a new kind of system, a cognitive symbiont: a lifelong, embedded, real-time, private, low-friction, and proactive companion that senses what the person senses through external devices, keeps their context across years, models their situation and their mind, takes part in their thinking at the right moment, carries out everyday tasks with their context, and keeps learning the person as both change. We give the paradigm a conceptual core, the cognitive gap between what a person could bring to a situation and what they can hold in working memory, and organize its design space as a symbiosis loop of sensing, keeping, understanding, living alongside, acting for and thinking with the person, and growing, enclosed by a personal runtime and by trust. Because a symbiont changes what a person can do in front of others, it also raises risks of a new kind, from covert assistance in examinations to pressure on everyone to adopt it, and we treat their governance as part of the paradigm.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cognitive-symbiont.github.io/",
      "comments": 2,
      "org": "University of Oxford",
      "url": "https://huggingface.co/papers/2611.05376",
      "arxiv_url": "https://arxiv.org/abs/2611.05376",
      "title_ja": "自律エージェントから認知共生体へ：AIによる人間の知能拡張",
      "summary_ja": "AIを単なる自律機械ではなく、人間の記憶や判断を物理的・状況的に補助し知能を拡張する「認知共生体」として捉える重要性を提唱。"
    },
    {
      "id": "2611.08373",
      "title": "SLA: Scaling Spatial-Language-Action Model via Continual Pre-training",
      "abstract": "Reliable robotic manipulation requires both semantic understanding and precise control in three-dimensional space. However, vision-language-action (VLA) foundations largely inherit visual representations from 2D vision-language pre-training, while spatial supervision is often introduced only during task-specific adaptation. Developing spatial understanding as a transferable foundation-model capability therefore calls for learning from broader robot experience. We present SLA, a Spatial-Language-Action Model that scales implicit spatial alignment to continual pre-training and maintains it during downstream post-training. Initialized from a pretrained pi05 policy, SLA jointly optimizes action prediction and alignment between intermediate visual embeddings and spatial representations from a frozen 3D perception model. We curate and unify heterogeneous robot datasets to support spatial learning across diverse embodiments, tasks, and scenes. To accommodate this diversity, we introduce feature-dependent gates that adaptively aggregate visual embeddings from multiple VLA layers for spatial supervision. The teacher further exploits partially available depth and camera calibration alongside RGB observations, enabling effective use of heterogeneous geometric annotations. Probabilistic state dropout encourages reliance on visual cues and mitigates overfitting to demonstration trajectories. All auxiliary components are used only during training, allowing direct reuse of pretrained VLA weights and preserving the original inference architecture.",
      "upvotes": 81,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://embodiedsla.github.io/",
      "comments": 3,
      "org": "HKUSTGZ",
      "url": "https://huggingface.co/papers/2611.08373",
      "arxiv_url": "https://arxiv.org/abs/2611.08373",
      "title_ja": "SLA: 継続事前学習による空間・言語・行動モデルのスケーリング",
      "summary_ja": "ロボットの経験から空間的整合性を学習し、精密な3D操作とセマンティックな理解を両立させる基盤モデルSLAを提案。"
    },
    {
      "id": "2611.05275",
      "title": "Route Anything: A Study of Model and Policy Routing for General-Purpose AI Systems",
      "abstract": "Artificial general intelligence (AGI) requires a method that can understand, generate, reason, and act across diverse domains and modalities. Rather than relying on a single model to master every capability, a promising path toward AGI now is to orchestrate a heterogeneous ecosystem of specialized models, tools, and policies (candidates) into a unified AI system. At the heart of this vision lies a fundamental question: how can an AI system dynamically select and coordinate the most capable candidate for each task while balancing performance and computational cost? In this work, we present Route Anything, a unified framework for studying model and policy routing across general-purpose AI systems. We develop a unified theoretical foundation that characterizes optimal routing under quality--cost trade-offs and establishes how the information available to a router determines its attainable performance. To systematically investigate routing across diverse capabilities, we first construct an omni-modal trajectory matrix spanning 25 benchmarks across language understanding, image, video, and speech generation, coding and workplace agents, and robotic manipulation, comprising 374,401 scored runs from 452 candidate configurations. Building on this framework, we train and test different routers to investigate the potential of omni-modal model routing, the capabilities of learned routers, and the conditions under which routing improves efficiency. Our results reveal substantial opportunities for capability orchestration: per-input oracle routing outperforms the best fixed candidate by 5.4 points, and learned routers outperform it by 0.3 points across 16 benchmarks, by 2.1 points on video generation, and by 1.1 points on robot manipulation while using 24% less policy time. More importantly, routing raises efficiency by 8.82x on average compared with the reference model.",
      "upvotes": 79,
      "github_stars": 18,
      "github_repo": "https://github.com/InfRec-Cardinal/route-anything",
      "project_page": "https://mikeeeeeeeeeeeeee.github.io/RouteAnything",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.05275",
      "arxiv_url": "https://arxiv.org/abs/2611.05275",
      "title_ja": "Route Anything: 汎用AIシステムにおけるモデルと方策ルーティングの研究",
      "summary_ja": "多様な専門モデルやツールの中から、性能とコストのバランスを考慮して最適な候補を動的に選択・調整する統一フレームワーク。"
    },
    {
      "id": "2610.40191",
      "title": "Video Generation Meets Agent Harness: Agentic Video Generation, Agentic World Modeling and Recursive Self-Improvement",
      "abstract": "Video generation is shifting from end-to-end synthesis toward agentic generation, where planning, tool use, and feedback enable coherent, controllable multi-shot videos. In parallel, video world models provide action-conditioned observations and predicted futures, serving as interactive environments for agents. We study their intersection through the agent harness: an executable runtime that constructs context, exposes tools, maintains state, routes feedback, and manages budgets around video models. This report examines three directions. First, agentic video generation, where harnesses coordinate scripting, shot planning, asset management, production, and editing, alongside the evaluation challenges of these systems. Second, agentic world modeling, where harnesses mediate observation, control, execution, and state. We discuss hybrid designs in which game engines or agent-written programs maintain world state while video models render observations, and how agents and world models can mutually evaluate and improve one another. Third, recursive self-improvement (RSI) in video model development, distinguishing output revisions, updates to harness state, generator parameters, and evaluators, and changes to the improvement procedure itself. We identify how these improvements feed back into subsequent development. Across these directions, we analyze essential agent capabilities, including audiovisual perception, long-horizon planning, memory, code-based interaction, feedback-guided control, skill reuse, and multi-agent coordination. We conclude with challenges in autonomous video production, lifelong memory, programmable hybrid control, autonomous model development, provenance, cost accounting, and evaluation linking video quality and task performance to sustained improvements in models and harnesses.",
      "upvotes": 78,
      "github_stars": 56,
      "github_repo": "https://github.com/agentic-videogen/awesome-agentic-videogen",
      "project_page": "https://agentic-videogen.github.io/",
      "comments": 2,
      "org": "Video Rebirth",
      "url": "https://huggingface.co/papers/2610.40191",
      "arxiv_url": "https://arxiv.org/abs/2610.40191",
      "title_ja": "ビデオ生成とエージェント・ハーネスの融合",
      "summary_ja": "実行時の管理機構を介してビデオ生成モデルを制御し、脚本から編集までを統合的に管理するエージェント的生成アプローチの研究。"
    },
    {
      "id": "2611.00617",
      "title": "Words Caught in the Heart: Simulating Person-Specific Expression for Self-Opaque Clients in Psychotherapy",
      "abstract": "Psychotherapy clients may experience distress before they can coherently describe it, and their expression changes with emotion, perceived safety, and trust. Large language model-based client simulators often rely on clinically organized case descriptions, which can encourage responses explaining the client's difficulties more clearly than their current understanding warrants. We propose Pandora, a psychotherapy client simulation framework that models how psychological experience becomes situated, individual expression. Pandora updates psychological and relational states in response to therapist interventions, constructs subjective appraisals and attributions, and plans response content and strategy. A separate expression planner combines these decisions with language patterns distilled from the client's utterances to guide linguistic realization. We evaluate Pandora against five baselines on 115 cases from four counseling and motivational interviewing datasets. It achieves the highest expression similarity and overall disclosure-alignment score among the compared systems. In a four-evaluator study of 45 matched disclosure items, Pandora receives AI-like judgments in 7.2% of ratings, compared with 43.3--67.2% for the baselines and 35.6% without expression planning. The ablation also reduces expression similarity. These results support explicit expression planning in client simulation to improve alignment with individual language patterns and reduce perceived AI-like expression in the evaluated setting.",
      "upvotes": 77,
      "github_stars": 1,
      "github_repo": "https://github.com/whunextgen/Pandora",
      "project_page": "https://clain.org/Pandora/",
      "comments": 2,
      "org": "CLAIN-WHU",
      "url": "https://huggingface.co/papers/2611.00617",
      "arxiv_url": "https://arxiv.org/abs/2611.00617",
      "title_ja": "心に捉えられた言葉：心理療法における自己不透明なクライアントの個人特有の表現シミュレーション",
      "summary_ja": "心理状態や治療者との関係性を反映し、言語化できない苦悩を状況に応じて表現する、より現実的な心理療法クライアントシミュレータ。"
    },
    {
      "id": "2611.02737",
      "title": "MoviEdit: Long-form Multi-Shot Video Editing Made Easy",
      "abstract": "Long-form multi-shot video editing requires an intended edit to remain coherent across abrupt changes in scene, viewpoint, and subject appearance, while processing substantially longer visual context than conventional single-shot editors. We introduce MoviEdit, an end-to-end framework for scalable long-form multi-shot video editing that jointly addresses the challenges of data, modeling, and evaluation. To provide cross-shot supervision data at scale, we develop automatic data-generation pipelines spanning synchronized multi-view footage, real-world multi-shot videos, and generated multi-shot content, yielding 87K paired editing videos without manual annotation. Architecturally, MoviEdit employs a cascaded bidirectional-autoregressive design: a lightweight bidirectional stage first establishes a globally coherent editing draft over a spatiotemporally compressed representation, which is then autoregressively propagated and refined over the full video. We further introduce MoviEdit-Bench, a dedicated benchmark for systematic evaluation of long-form multi-shot video editing. Extensive experiments show that MoviEdit substantially outperforms existing open-source models and performs on par with industry frontier models across text-guided and image-guided editing. Visit our project page for complete results and to access the benchmark: https://multi-shot-edit.github.io/",
      "upvotes": 74,
      "github_stars": 18,
      "github_repo": "https://github.com/adobe-research/MoviEdit-Bench",
      "project_page": "https://multi-shot-edit.github.io/",
      "comments": 2,
      "org": "Adobe",
      "url": "https://huggingface.co/papers/2611.02737",
      "arxiv_url": "https://arxiv.org/abs/2611.02737",
      "title_ja": "MoviEdit: 長尺マルチショットビデオ編集を容易に",
      "summary_ja": "自動生成した大量の学習データと新アーキテクチャにより、シーンや視点が変化する長尺動画でも一貫性を保ち編集できるフレームワーク。"
    },
    {
      "id": "2611.04916",
      "title": "Behind Video Generation: Observations and Insights on Multimodal Understanding from Kling",
      "abstract": "Video generation has progressed from isolated clips to coherent short-form audiovisual sequences, and the bottleneck is shifting from rendering to semantic control. This report summarizes the observations and insights on multimodal understanding gained from successive generations of Kling. We argue that generation quality is the projection of multimodal understanding through the entire data--conditioning--alignment--evaluation chain, and we examine this chain module by module. Kling-MLLM, a shared multimodal foundation model that unifies image, video, audio, synchronized audio--video, and interleaved inputs, is specialized for each downstream module. Because a DiT is trained on far fewer training samples than a language model, we treat captioning as a semantic contract that maximizes description density, and extend it to reference-grounded captioning that makes reference bindings explicit. Prompt enhancement translates user intent into this caption distribution: basic PE is derived from captions of compelling videos and refined with text-level and generator-in-the-loop reinforcement learning, while agentic PE refines the story and retrieves compelling examples. We show that a reliable text encoder comes from perceptual training rather than from stronger language ability, and that candidates can be screened from text alone before end-to-end training. Reward modeling pairs a general reward model for explainable, localized critiques with a decision reward model for fast multidimensional scoring, treating perceptual bandwidth as a first-class design parameter. Finally, we review task-specific automatic evaluation, focusing on protocols that expose scoring shortcuts and help trace failures to their upstream source. We hope these lessons offer practical guidance for building the understanding stack behind controllable video generation.",
      "upvotes": 72,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://klingai.com/app",
      "comments": 2,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.04916",
      "arxiv_url": "https://arxiv.org/abs/2611.04916",
      "title_ja": "ビデオ生成の舞台裏：Klingから得られたマルチモーダル理解の知見",
      "summary_ja": "生成品質はマルチモーダル理解の投影であるとの視点から、Klingモデルの各モジュールにおける理解と整合の仕組みを分析。"
    },
    {
      "id": "2610.39497",
      "title": "Does Scaling Toward AGI Depend on What System-1 Lets System-2 Execute?",
      "abstract": "Progress toward artificial general intelligence (AGI) has largely relied on scaling a resource-intensive executive, System-2, through larger models, more data and compute, longer reasoning, and more agents. We ask whether the next stage may come instead from co-designing it with System-1, a lightweight, semantically aware predictor that evaluates candidate interactions before execution, so that System-2 acts only on those worth their cost. Our answer is a qualified yes. We study conditional interaction, a predict--gate--execute--update loop: System-1 estimates each candidate's utility, System-2 executes those admitted by an adaptive threshold, and the outcomes update System-1. The loop spans training, test-time reasoning, adaptive decision-making, and agentic tool use, with utility and cost defined by the application. Under ideal screening and equal execution costs, execution compute falls by a factor approaching 1/ρ_u, where ρ_u is the density of utility-relevant interactions (cost-weighted when costs differ); prediction errors, exploration, and distribution shift reduce the saving. We bound selection regret by predictor error and the utility margin. These results motivate our central hypothesis: ρ_u is a measurable coordinate of scaling efficiency and makes informative compute a better description of scaling than total compute.",
      "upvotes": 64,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cheemswang.github.io/blogs/sys1-sys2-codesign.html",
      "comments": 3,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2610.39497",
      "arxiv_url": "https://arxiv.org/abs/2610.39497",
      "title_ja": "AGIへのスケーリングはSystem-1がSystem-2に何をさせるかに依存するか？",
      "summary_ja": "軽量なSystem-1が実行の価値を予測・選別することで、計算資源を要するSystem-2の動作を効率化する共同設計の有効性を検証。"
    },
    {
      "id": "2611.04277",
      "title": "Harness-S: Learning from Sibling Harnesses for Generalizable Agent Training",
      "abstract": "Harness evolution from a common base exhibits Locality, Complementarity, and Nonstationarity: variants repair different failures, and their utility changes as the policy learns. Rather than seeking a universally superior harness, we introduce Harness-S to selectively rescue failures of a base execution system through sibling harnesses and transfer the resulting capabilities into a single policy that remains effective under the original harness. Directional Harness Evolution develops specialized sibling harnesses along distinct repair directions, forming a reusable Sibling Harness Pool that remains fixed during policy training. Complementary Harness Rescue Training invokes this pool only when all initial attempts under the base harness fail. The same policy generates fresh rollouts under selected auxiliary harnesses, and these trajectories replace the failed group for reinforcement learning. An Adaptive Harness Router selects the Top-k variants using Harness Behavior Profiles and voting across multiple LLMs. Policy-aware profile re-anchoring refreshes this evidence as the policy learns. Across AppWorld, SWE-Gym, and DBBench, the trained policy substantially outperforms policy-only training when returned to the original base harness. Behavioral analyses and held-out cases support the transfer of harness-elicited behaviors into the policy itself. Reusing the router for Rank-1 inference provides additional gains at the same executor rollout count.",
      "upvotes": 63,
      "github_stars": 57,
      "github_repo": "https://github.com/DeepExperience/Harness-S",
      "project_page": "",
      "comments": 5,
      "org": "Shanghai JiaoTong University",
      "url": "https://huggingface.co/papers/2611.04277",
      "arxiv_url": "https://arxiv.org/abs/2611.04277",
      "title_ja": "Harness-S: 汎用的なエージェント学習のための兄弟ハーネスからの学習",
      "summary_ja": "特定の失敗を補完する複数の「兄弟ハーネス」を使い、元の実行環境でも有効な単一の方策を効率的に訓練する手法。"
    },
    {
      "id": "2611.04814",
      "title": "Think Less, Locally: Local Preference Learning for Reasoning Compression",
      "abstract": "Large reasoning models achieve strong performance on challenging tasks, but their long chain-of-thought often incurs substantial inference costs by continuing to deliberate after sufficient information has been obtained. Existing reasoning compression methods primarily operate on reasoning trajectories, paying less attention to the local decision of whether further reasoning is necessary given the current state. We propose LoCo, a local preference learning method for reasoning compression. LoCo detects candidate overthinking states from the model's own traces, freezes the corresponding reasoning prefixes, regenerates shorter verified continuations from the same states, and trains on the resulting state-conditioned preference pairs with DPO. This formulation teaches the model when to continue reasoning and when to conclude, rather than simply encouraging shorter trajectories overall. We construct training data entirely from self-generated mathematical traces and evaluate LoCo on five mathematical and three code generation benchmarks. LoCo reduces completion length by 41.7\\%--45.4\\% on mathematics and 23.4\\%--36.3\\% on code, while maintaining or improving accuracy and achieving the best AUC across all code benchmarks. LoCo consistently improves the accuracy-efficiency trade-off on mathematics and transfers effectively to code generation despite math-only training, demonstrating the cross-domain generality of local preference learning for reasoning compression. The code and model will be publicly released at https://github.com/MuyaoYuan/LoCo.",
      "upvotes": 61,
      "github_stars": 10,
      "github_repo": "https://github.com/MuyaoYuan/LoCo",
      "project_page": "https://huggingface.co/MuyaoYuan/LoCo-7B",
      "comments": 7,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.04814",
      "arxiv_url": "https://arxiv.org/abs/2611.04814",
      "title_ja": "Think Less, Locally: 思考圧縮のためのローカル好みの学習",
      "summary_ja": "モデル自身が「考えすぎ」の箇所を検出し、より短い検証済み推論へと自己修正することで、性能を維持しつつ推論コストを削減する手法。"
    },
    {
      "id": "2611.06918",
      "title": "From Pixels to Actions - Towards Native Vision-Language-Action Policies",
      "abstract": "Vision-language-action models are typically built on a simple premise: perception is first compressed by visual encoders, and action reasoning begins only afterwards. Yet manipulation often hinges on precisely the visual signals most vulnerable to this abstraction, e.g., local geometry, boundaries, depth, and subtle state changes. This raises a fundamental question: should action policies inherit a fixed visual endpoint, or directly access evolving visual computation? We introduce NEO-VLA, a structurally encoder-free vision-language-action framework. Images are tokenized by lightweight patch convolutional layers and evolve jointly with language throughout the backbone, allowing a flow-matching action expert to draw from instruction-conditioned visual representations at different depths. This simple change reveals a consistent pattern. Native architectures outperform encoder-based counterparts under controlled comparisons; full fine-tuning reduces but does not erase the gap, and additional scale alone cannot recover it. More strikingly, layer-wise probing shows that the action-critical signals often peak well before the final visual representation. Across diverse manipulation settings and distribution shifts, NEO-VLA consequently achieves stronger and more robust control. Together, these results suggest that embodied control benefits from access to visual representations across the computational hierarchy, rather than a fixed encoder output.",
      "upvotes": 60,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.lmms-lab.com/posts/neo_vla/",
      "comments": 2,
      "org": "MMLab@NTU",
      "url": "https://huggingface.co/papers/2611.06918",
      "arxiv_url": "https://arxiv.org/abs/2611.06918",
      "title_ja": "ピクセルからアクションへ - ネイティブな視覚・言語・行動方策に向けて",
      "summary_ja": "エンコーダーを廃し、軽量パッチ変換により視覚と言語をバックボーン内で共に進化させることで、精密なロボット操作を実現する構造。"
    },
    {
      "id": "2611.05377",
      "title": "DreamX: Video Diffusion Model is a Universal Latent Action Learner",
      "abstract": "Learning a universal action representation from video requires modeling dynamics that are consistent across different executions of the same action yet invariant to changes in embodiment and appearance. Existing latent action models infer actions from visual transitions, but their representations often entangle the underlying action with irrelevant visual variations, limiting transfer across embodiments. We introduce DreamX, which repurposes a pretrained video diffusion model as a universal latent action learner. Our approach extracts compact latent actions from the video model's rich spatiotemporal features, compressing each latent video frame by 300times (1{,200 rightarrow 4} tokens). In addition, by leveraging the video model's generative prior, these latent actions capture action-relevant dynamics disentangled from visual appearance. The resulting latent space serves as a shared action interface across embodiments (human and robot), environments, and action parameterizations. On LARY-Bench, DreamX achieves state-of-the-art performance among latent action models. Moreover, actions encoded in one setting remain effective in another: the latent space supports any-to-any video transfer and zero-shot action transfer across diverse embodiments and environments. Furthermore, this shared interface also enables policy learning in a compact latent action space, reducing the computational cost of video-diffusion-based policies.",
      "upvotes": 57,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cvlab-kaist.github.io/DreamX/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05377",
      "arxiv_url": "https://arxiv.org/abs/2611.05377",
      "title_ja": "DreamX: ビデオ拡散モデルはユニバーサルな潜在アクション学習機である",
      "summary_ja": "学習済みビデオモデルから、外見に依存しない純粋な動作の潜在表現を抽出することで、異なるロボット間でも転用可能な行動学習を実現。"
    },
    {
      "id": "2611.06910",
      "title": "FrontierPhysics: Evaluating Agents for End-to-End Physics Research",
      "abstract": "AI agents are playing an increasingly important role in physics research. However, existing physics benchmarks only evaluate fixed questions, isolated sub-tasks, or paper reproduction with given solutions, and rarely check research quality alongside correctness. We introduce FrontierPhysics, an end-to-end benchmark with 56 tasks made by 42 physicists based on their own research, covering nine domains across theoretical, computational, and experimental physics. Each task requires agents to review the literature, develop a research plan, conduct research and experiments, and produce structured outputs and scientific manuscripts. Combining deterministic verifiers with expert-authored rubrics, FrontierPhysics evaluates whether agents' research is correct and publishable. Across 22 models in 26 configurations, no configuration passes more than 46 of its 168 rollouts. Manual review of agent trajectories shows that frontier agents' main weaknesses are insufficiently rigorous reasoning and limited expert intuition, rather than gaps in physics knowledge or execution errors.",
      "upvotes": 56,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://www.benchflow.ai/frontierphysics",
      "comments": 1,
      "org": "BenchFlow",
      "url": "https://huggingface.co/papers/2611.06910",
      "arxiv_url": "https://arxiv.org/abs/2611.06910",
      "title_ja": "FrontierPhysics: エンドツーエンドの物理学研究エージェントの評価",
      "summary_ja": "文献調査から実験、論文執筆まで、物理学者が作成した56のタスクを通じてAIエージェントの研究遂行能力を評価するベンチマーク。"
    },
    {
      "id": "2611.02497",
      "title": "RoboColosseum: Evaluating Physical Intelligence at Scale In-The-Wild",
      "abstract": "General-purpose robot policies must work across robots, tasks, and environments, yet the variation that makes physical trials informative also makes them difficult to reproduce. We introduce RoboColosseum, a distributed evaluation framework that combines unified policy serving and standardized protocols across a network of locally operated robots in diverse environments. Our initial study evaluates five vision-language-action (VLA) policies and three frontier AI agents across four embodiments (SO-101, Franka, Bimanual-YAM, and G1 Humanoid). The Open Track compares models without task-specific adaptation in blinded, pairwise trials under matched local conditions. The Fine-tune Track measures how well VLA policies adapt to 20 tasks across all four embodiments when each policy receives the same 100 demonstrations per task. Across 5,699 pairwise Open Track comparisons at 124 sites, frontier agents rival specialized VLA policies, while all systems struggle to complete open-world tasks reliably. After fine-tuning, GR00T N1.7 leads on SO-101 and pi0.5 leads on Franka and Bimanual-YAM. Policy rankings show weak agreement across embodiment-specific task suites (Kendall W = 0.24). Open Track rankings poorly predict relative performance after fine-tuning, with substantial rank reversals on all three embodiments shared between tracks. Measuring partial progress reveals differences that task success alone misses. On the G1 Humanoid, no policy completes any of the five tasks, yet average progress ranges from 13.3% to 23.2% across policies. Open Track rankings stabilize as trials accumulate, and active matchmaking achieves comparable ranking agreement with substantially fewer physical trials than uniform sampling. These results show how distributed physical evaluation can reveal where robot policies generalize, how well they adapt to new tasks, and how far they progress on tasks they fail to complete.",
      "upvotes": 50,
      "github_stars": 4,
      "github_repo": "https://github.com/RoboColosseum/robocolosseum-client",
      "project_page": "https://robocolosseum.ai/",
      "comments": 2,
      "org": "Hugging Face",
      "url": "https://huggingface.co/papers/2611.02497",
      "arxiv_url": "https://arxiv.org/abs/2611.02497",
      "title_ja": "RoboColosseum: 実環境での物理的知能の大規模評価",
      "summary_ja": "分散した拠点にある多様な実機ロボットに対し、統一されたプロトコルでモデルの汎用性を評価するネットワーク型フレームワーク。"
    },
    {
      "id": "2611.00883",
      "title": "Random Is Almost Enough? Stable and Low-Cost Benchmark Compression via BestRand",
      "abstract": "Benchmark compression reduces the often prohibitive time and cost of model evaluation by evaluating models on a small benchmark subset that closely matches full-benchmark results. To quantify estimation error, we derive an accurate analytical approximation to the error distribution when estimating full-benchmark scores from a subset, showing that most subsets yield small errors, while a few produce much larger errors, resulting in a long-tailed distribution. This means random sampling alone can achieve surprisingly strong performance with high probability, but remains unstable due to rare large errors. We further show that this instability is inherent to modern foundation models and persists even as more models are evaluated. Based on these findings, we introduce BestRand, a stable and low-cost benchmark compression method that preserves the efficiency of random sampling while substantially reducing its high-error tail. We validate BestRand on 70+ text, multimodal, and agent benchmarks, and further extend it to VLA evaluation. Compared with competitive methods, BestRand reduces high-error risk by 50.2% and estimation error by 16.4% on average, while requiring only 51.3% of the construction cost. It further reduces OOD estimation error by 21.8% on average across score-range, model-family, and temporal shifts. Together, our theory provides practical guidance for understanding and predicting the accuracy and reliability of benchmark compression, while BestRand enables stable and accurate compression at low cost. The code and data are publicly available onhttps://github.com/George-Ling3/BestRand.",
      "upvotes": 49,
      "github_stars": 8,
      "github_repo": "https://github.com/George-Ling3/BestRand",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.00883",
      "arxiv_url": "https://arxiv.org/abs/2611.00883",
      "title_ja": "ランダムで十分か？ BestRandによる安定かつ低コストなベンチマーク圧縮",
      "summary_ja": "誤差分布の分析に基づき、少数のサブセット評価で全ベンチマークの結果を安定的かつ高精度に推定する圧縮手法。"
    },
    {
      "id": "2611.06728",
      "title": "Turns Matter: Advancing Streaming Video RL via Turn-Level Credit",
      "abstract": "Streaming video understanding requires models to repeatedly decide whether to respond or continue observing. Recently, Group Relative Policy Optimization (GRPO) has been applied to this setting, with existing approaches emphasizing reward design while retaining a single trajectory-level advantage across turns. Such shared credit can reinforce redundant replies after earlier successes and discourage useful follow-ups after earlier failures. We propose TurnWise, a turn-level GRPO framework that aligns learning with individual streaming decisions. TurnWise addresses the mismatch between trajectory-level feedback and turn-level interaction, promoting informative responses and reducing redundancy. Specifically, turn-level credit assignment uses silence-completed prefix scoring to construct group-relative advantages from each decision's remaining return, separating its learning signal from earlier rewards. Turn-mean policy optimization averages token losses within each turn and then across turns, giving response and waiting decisions equal weight regardless of output length. These complementary designs improve streaming policy learning without a learned critic or additional rollouts. Extensive experiments show our method outperforms prior RL approaches for streaming video understanding.",
      "upvotes": 49,
      "github_stars": 67,
      "github_repo": "https://github.com/XD111ds/turn-wise-rl",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.06728",
      "arxiv_url": "https://arxiv.org/abs/2611.06728",
      "title_ja": "ターンが重要：ターンレベルのクレジットによるストリーミングビデオRLの進展",
      "summary_ja": "動画理解において、軌道単位ではなく各ターンの判断に対して報酬を与えることで、情報の重複を減らし応答の質を高める強化学習枠組み。"
    },
    {
      "id": "2611.05193",
      "title": "Factorized MLLM Embeddings for Composed Image Retrieval",
      "abstract": "Composed Image Retrieval (CIR) aims to retrieve a target image given a reference image and a modification text. Although recent approaches leveraging Multimodal Large Language Models (MLLMs) have shown significant progress, we argue that the MLLM's compositional understanding remains underutilized. This stems from directly mapping composed queries into a retrieval embedding via contrastive supervision alone, without explicitly resolving the intended visual modifications. In this work, we introduce Factorized MLLM Embeddings (FactEmbed), which decouples compositional query comprehension from building discriminative embeddings. Rather than directly projecting the composed query into a single embedding without internal reasoning, FactEmbed employs a set of factorized latents that simulate the intended visual modifications via an intermediate target imagination objective. This process encourages the latents to ground into target semantics before forming discriminative representations for retrieval. Subsequently, to propagate these factorized representations throughout the model for retrieval, we optimize a factor-level contrastive loss while distilling the decomposed representations into a deeper attention layer of the MLLM. Finally, for efficient inference, we retain the [EOS] token to establish a global-level embedding on top of these factorized latents, while we exploit the mean-pooled factorized latents to rerank a short candidate list at negligible cost, as both are produced by the same forward pass. Extensive evaluations demonstrate that FactEmbed outperforms prior works across CIR benchmarks.",
      "upvotes": 48,
      "github_stars": 15,
      "github_repo": "https://github.com/cvlab-kaist/FactEmbed",
      "project_page": "https://cvlab-kaist.github.io/FactEmbed/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2611.05193",
      "arxiv_url": "https://arxiv.org/abs/2611.05193",
      "title_ja": "複合画像検索のための因子分解MLLM埋め込み",
      "summary_ja": "画像と修正テキストを用いた検索において、クエリの理解と埋め込み生成を分離することで、複雑な意図を正確に捉える手法。"
    },
    {
      "id": "2611.03233",
      "title": "Axion 1.0: Open Agent Foundation Models, Simplified",
      "abstract": "We introduce Axion 1.0, a fully open agent foundation model that combines strong and broad agentic capabilities with a remarkably simple training recipe. Axion 1.0 is trained in only three stages: two lightweight supervised fine-tuning stages followed by reinforcement learning, without dedicated mid-training, direct preference optimization (DPO), or on-policy distillation (OPD). The first SFT stage develops strong self-contained reasoning through model-aware data construction, where we synthesize challenging problems and adversarially strengthen them based on the base model's own successful solution strategies. The second stage extends these capabilities to tool-dependent reasoning through a scalable pipeline for constructing diverse and automatically verifiable tasks grounded in real-world data sources and deterministic computation. Finally, reinforcement learning further strengthens long-horizon reasoning and interaction with external tools and environments. Despite this compact training recipe, Axion 1.0 achieves strong performance across a broad suite of agentic benchmarks and is competitive with leading commercial models on several of them. Equally importantly, Axion 1.0 is open beyond model weights: we release the complete recipe, including data construction, generation, filtering, verification, prompts, and training code, enabling the entire development process to be reproduced and extended. Axion 1.0 demonstrates that strong agent foundation models can be both open and simple, offering a practical and reproducible path toward advancing open agentic intelligence.",
      "upvotes": 48,
      "github_stars": 61,
      "github_repo": "https://github.com/bytedance/axion1_0",
      "project_page": "https://axion1-0.github.io/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03233",
      "arxiv_url": "https://arxiv.org/abs/2611.03233",
      "title_ja": "Axion 1.0: 簡素化されたオープンなエージェント基盤モデル",
      "summary_ja": "複雑な中間学習を省き、自己構築データによるSFTと強化学習のみで高度な推論とツール利用能力を実現したオープンモデル。"
    },
    {
      "id": "2611.01560",
      "title": "Democratizing Robot-Use Agents: A Unified Harness with Open Models",
      "abstract": "Robot-use Agents (RUAs) have shown promising zero-shot manipulation capabilities, but reliance on frontier, proprietary models limits research into further training. To democratize RUA research, we introduce uni-robot-agent, a unified harness for competitive open-weight robot use that supports further training. Without privileged inputs, an out-of-the-box Qwen3.8-Flash-Next achieves a RoboDojo Score of 31.39, surpassing the published GPT-6 Astra-RoboProbe result of 28.97 and many VLA/WAM baselines, and performs competitively on 19 real-world tasks. Our analysis across model generations, families, and sizes links effective robot use to four general capabilities, suggesting that future RUA training should develop them jointly.",
      "upvotes": 48,
      "github_stars": 276,
      "github_repo": "https://github.com/Open-RUA/uni-robot-agent",
      "project_page": "https://openrua.ai/uni-robot-agent",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.01560",
      "arxiv_url": "https://arxiv.org/abs/2611.01560",
      "title_ja": "ロボット利用エージェントの民主化：オープンモデルによる統合ハーネス",
      "summary_ja": "オープンモデルで既存の商用モデルを凌駕する操作性能を達成し、誰でも研究可能なロボット利用エージェントの統合環境を提供。"
    },
    {
      "id": "2610.22740",
      "title": "R^2Orch: Recursive Self-Improvement for Agent Orchestration via Self-Play within a Skill-Internalization Loop",
      "abstract": "In recent years, agentic orchestration has been widely applied to solve complex human tasks. However, existing orchestration learning still faces key challenges, including hand-designed curricula, advantage collapse when a task's rollouts all reach the same outcome, and unreliable evaluation signals that judge each skill by one noisy score. To address these challenges, we propose R^2Orch, a new paradigm of Recursive Self-Play Orchestration: an inner loop of self-play that improves the orchestrator on self-chosen tasks, and an outer loop that improves how the inner loop improves. To support this paradigm, we introduce Recursive Learnability, a training objective that rewards a Proposer for choosing tasks whose rollouts keep reaching different outcomes as skills are withdrawn. Built on this objective, we further propose Skill Withdrawal, in which the outer loop withdraws each skill once a controlled evaluation within self-play shows that the orchestrator performs as well without it. Moreover, the two loops form one cycle: failures are distilled into skills, skills into parameters, and withdrawals lead the Proposer to new failures, so the orchestrator moves toward zero-skill deployment. Experimental results on twelve datasets show that R^2Orch consistently outperforms baselines across question answering, math, code, and interactive tasks. Our code is available at https://github.com/beita6969/R2Orch.",
      "upvotes": 48,
      "github_stars": 48,
      "github_repo": "https://github.com/beita6969/R2Orch",
      "project_page": "",
      "comments": 3,
      "org": "Chinese University of Hong Kong, Shenzhen",
      "url": "https://huggingface.co/papers/2610.22740",
      "arxiv_url": "https://arxiv.org/abs/2610.22740",
      "title_ja": "R^2Orch: スキル内部化ループ内の自己対戦によるエージェント・オーケストレーションの再帰的自己改善",
      "summary_ja": "自己対戦を通じてタスクの提案と解決を繰り返し、オーケストレーターの性能を再帰的に向上させる学習パラダイム。"
    },
    {
      "id": "2611.03424",
      "title": "IdeaTaste: Do LLMs Share the Research Taste of Human Researchers?",
      "abstract": "Research taste, the judgment of what to read, which problems to pursue, and which methods to try, increasingly shapes the work of AI scientists, yet it remains far less understood than their ability to execute research. We introduce IdeaTaste, a benchmark that scores an LLM by how closely the research proposals it writes from a literature snapshot frozen at 2025 match the work the same communities published in 2026. Our experiments span six contemporary language models and four research areas from established to emerging fields, covering more than 90{,}000 proposals in total. LLM agents fall well short of human communities in both the literature they cite and the ideas they state, reaching about 26\\% of the human level on citation matching and only 18\\% on idea matching. Their populations can cite as diversely as a community and take up its tasks and methods, yet rarely arrive at the concrete approaches and research plans it pursues. Neither richer field context nor larger populations substantially close this gap. In blinded expert review, AI proposals trail the 2026 papers least in presentation and most in expected success, echoing their gap in concrete approaches, and those whose ideas no human paper shares fare worst, suggesting weaker directions rather than overlooked opportunities. These results indicate that the main bottleneck in AI research taste lies less in finding the directions a community works on than in turning them into the concrete approaches it goes on to pursue. We release IdeaTaste as an open, continuously updated leaderboard (https://cxcscmu.github.io/IdeaTaste) that benchmarks contemporary AI proposals against future publication cycles.",
      "upvotes": 46,
      "github_stars": 27,
      "github_repo": "https://github.com/cxcscmu/IdeaTaste",
      "project_page": "https://cxcscmu.github.io/IdeaTaste/",
      "comments": 3,
      "org": "Carnegie Mellon University School of Computer Science",
      "url": "https://huggingface.co/papers/2611.03424",
      "arxiv_url": "https://arxiv.org/abs/2611.03424",
      "title_ja": "IdeaTaste: LLMは人間の研究者と同じ研究の『センス』を持っているか？",
      "summary_ja": "過去の文献から未来の研究提案を生成させ、実際の採択論文と比較することで、LLMが優れた研究テーマを選ぶ能力を測定する指標。"
    },
    {
      "id": "2611.03126",
      "title": "CUA-Master: Scaling Computer-use Agents through Open-World Recursive Improvements",
      "abstract": "Despite recent advances in CUAs, their development remains constrained by the limited diversity, controllability, and reliability of interaction data. Moreover, conventional optimization pipelines lack iterative feedback, while existing recursive improvement approaches often rely on self-generated experiences, limiting ability expansion and yielding diminishing returns. To address these challenges, we introduce CUA-Master, a nested double-loop recursive improvement framework. At the system level, an outer world-data-model flywheel continuously incorporates open-world corpus and leverages evolving model weaknesses to guide subsequent data construction and optimization iterations. At the data level, an inner flywheel couples open-world seeding and autocatalytic propagation. The former mines authentic workflows as seed tasks from instructional videos, and employs visual-semantic dual-path trajectory reconstruction; The latter transforms these seeds into reusable primitives for controllable synthesis of diverse, complex, and verifiable tasks. To enable efficient and reliable trajectory collection, we further introduce a feedback-guided snapshot-rollback retry mechanism in various real environments. Extensive experiments demonstrate that CUA-Master-27B achieves competitive performance across GUI-only and GUI-CLI hybrid benchmarks, scoring 80.2 on OSWorld Verified, 36.9 on OSWorld 2.0, 43.9 on WeaveBench, and 25.0 on Agents' Last Exam. Our framework also substantially improves the quality and efficiency of data synthesis, and exhibits continuous gains across recursive iterations.",
      "upvotes": 46,
      "github_stars": 124,
      "github_repo": "https://github.com/xlyu0106/CUA-Master",
      "project_page": "https://xlyu0106.github.io/CUA-Master/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.03126",
      "arxiv_url": "https://arxiv.org/abs/2611.03126",
      "title_ja": "CUA-Master: オープンワールドの再帰的改善によるコンピュータ操作エージェントのスケーリング",
      "summary_ja": "外部世界のデータとモデルの弱点を結びつける2重の再帰ループにより、操作データの多様性と信頼性を継続的に向上させる枠組み。"
    },
    {
      "id": "2610.42149",
      "title": "Latent Reasoning in Continuous Space for Unified Multimodal Models",
      "abstract": "Unified Multimodal Models (UMMs) achieve remarkable success on diverse multimodal understanding and generation tasks, yet they still struggle to effectively leverage language-based chain-of-thought reasoning for image generation. As a result, existing reasoning-augmented UMMs often fail to inherit the test-time scaling and fine-grained controllability observed in large language models. We attribute this failure to a fundamental modality mismatch: reasoning is performed in a discrete token space, whereas image generation operates in a continuous space. To bridge this gap, we introduce a Latent Reasoning framework in Continuous space (LARC), which alleviates the token-level bottleneck by reasoning over continuous hidden states. Specifically, the training framework consists of two stages: (i) curriculum supervised fine-tuning (SFT), and (ii) information-gain reinforcement learning (RL). First, the curriculum SFT stage gradually converts token-level reasoning into latent reasoning. Subsequently, the information-gain RL stage self-evolves latent reasoning without ground truth supervision. Experiments across diverse text-to-image generation benchmarks show that LARC consistently improves generation quality, prompt following, and compositional fidelity. Notably, LARC achieves state-of-the-art performance on GenEval with a 7%p gain over BAGEL and demonstrates clear test-time scaling behavior, outperforming token-based generation under both parallel and sequential test-time scaling strategies.",
      "upvotes": 44,
      "github_stars": 10,
      "github_repo": "https://github.com/rootyJeon/LARC",
      "project_page": "https://rootyjeon.github.io/larc-umm/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.42149",
      "arxiv_url": "https://arxiv.org/abs/2610.42149",
      "title_ja": "統合マルチモーダルモデルのための連続空間における潜在推論",
      "summary_ja": "離散トークンではなく連続的な潜在空間で推論を行うことで、思考の連鎖（CoT）による画像生成の制御性を高めるフレームワーク。"
    },
    {
      "id": "2611.07392",
      "title": "WeLM-Image: A Unified Image Generation Model towards Visual Intelligence",
      "abstract": "We present WeLM-Image, a unified image foundation model that integrates multimodal understanding into text-to-image generation, instruction-guided editing, and multi-reference synthesis. Designed for single-GPU deployment in WeChat's large-scale consumer applications, the model processes text, reference images, and target latents as one interleaved sequence. A Mixture-of-Transformers (MoT) backbone combines shared attention with independent understanding and generation parameters to limit optimization interference. Equipping each path with Mixture-of-Experts (MoE) modules provides sparse capacity, with 31.7B stored parameters and approximately 5.4B generation parameters activated per target latent token. A generation-oriented data engine combines a knowledge-grounded visual vocabulary with large-scale visual clustering to balance semantic coverage and editing tasks, while training-time evaluation guides iterative data refinement. Bilingual annotations and verified editing supervision support progressive training up to native 1.5K resolution. We optimize generation and editing separately with rubric- and checklist-based rewards, then consolidate the specialized policies through noise-aware on-policy distillation. In the reported overall comparisons, the 1536-resolution model ranks first among the evaluated open-source models on PRISM-Bench, Qwen-Image-Bench, and UnicBench. MeanFlow-based few-step distillation yields WeLM-Image-Turbo, which generates a 1024times1024 image in 4.98\\,s on a single NVIDIA H20 GPU using eight guidance-free steps.",
      "upvotes": 42,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2611.07392",
      "arxiv_url": "https://arxiv.org/abs/2611.07392",
      "title_ja": "WeLM-Image: 視覚的知能に向けた統合画像生成モデル",
      "summary_ja": "画像生成・編集・参照合成を一つの配列として処理し、MoE構造により効率的に高い理解と生成能力を両立した基盤モデル。"
    },
    {
      "id": "2611.05036",
      "title": "ToolSpace: Scaling Tool-Centric Environment Synthesis for Long-Horizon Agents",
      "abstract": "Large language models are deployed as long-horizon agents that compose diverse tools across MCP services into executable workflows. Existing MCP environment-scaling methods are data-centric: they first synthesize a database and scenario, then derive tools and tasks from them. As a result, tool interfaces may not match real ones, tool compositions are not grounded in execution, and tasks rarely span more than one environment. We propose ToolSpace, a tool-centric framework that reverses this order. ToolSpace mines data, state, and retry dependencies from adjacent calls in execution traces of real MCP services and open agent corpora, using deterministic rules rather than LLM judgment, and clusters the resulting weighted tool-composition graph into environments. Databases are synthesized only for state-mutating environments, while query and stateless tools replay recorded returns. ToolSpace then performs state-aware random walks with rollback and decompiles each chain into a natural-language task with assertion-based checks, keeping only samples that replay successfully from the initial state. Applied to AutomationBench and tau3-Bench Banking, the pipeline produces harder Pro versions on which 7 frontier models drop by up to 38.2 points. Across seven long-horizon tool-use benchmarks, ToolSpace raises Qwen3.6-35B-A3B from 23.0 to 41.0 average score (43.2 with RL) and GLM-5.2 from 44.6 to 56.6, on par with Claude Opus 5. Ablations show that execution-witnessed edges clearly outperform LLM-judged ones, and performance keeps improving with data and environment scale.",
      "upvotes": 41,
      "github_stars": 36,
      "github_repo": "https://github.com/dongguanting/ToolSpace",
      "project_page": "https://toolspace-agent.github.io/",
      "comments": 3,
      "org": "Renmin University of China",
      "url": "https://huggingface.co/papers/2611.05036",
      "arxiv_url": "https://arxiv.org/abs/2611.05036",
      "title_ja": "ToolSpace: 長期実行エージェントのためのツール中心の環境合成のスケーリング",
      "summary_ja": "実際の実行ログからツールの依存関係を抽出して環境を構築することで、現実のMCPサービスに即した複雑なタスクを合成する手法。"
    },
    {
      "id": "2611.02074",
      "title": "SWE-Trail: History-Guided Trajectory Collection for Coding Agent Training",
      "abstract": "Coding agents solve repository issues through long sequences of exploration, editing, and validation. These trajectories are increasingly used as post-training data, so how they are collected shapes what the trained model learns. A common approach is to sample multiple trajectories independently for each issue and then select or curate them. However, as more trajectories are sampled independently, later trajectories become increasingly redundant, even though earlier trajectories could guide where subsequent collection effort should be spent. A natural way to use this history is to expose it to the coding agent as advice. But training on such trajectories can make the model rely on advice that is unavailable at test time, creating a train-test mismatch. Instead, we argue that history should guide where collection effort is spent, while the coding agent decides what to generate. We introduce SWE-Trail, a trajectory collector that uses earlier trajectories to guide subsequent collection while keeping that history outside the coding agent's context. During a new rollout, SWE-Trail uses history to identify a state where additional collection effort may be useful. There, the coding agent proposes candidate next actions from its ordinary context, and SWE-Trail briefly executes them from the same checkpoint to decide which route continues. We evaluate collection approaches by training student models on the trajectories they produce. For a 124B student initialized from Ling-3.0-flash-base, SWE-Trail improves mean resolution over independent sampling by 2.33 and 1.60 percentage points on SWE-bench Multilingual and SWE-bench Pro, respectively. Without history, the same pipeline produces more resolved trajectories than independent sampling, but improves by only 0.11 points on Multilingual. These results show the value of using history to guide collection without exposing it to the coding agent.",
      "upvotes": 40,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "Ant Group",
      "url": "https://huggingface.co/papers/2611.02074",
      "arxiv_url": "https://arxiv.org/abs/2611.02074",
      "title_ja": "SWE-Trail: コーディングエージェント訓練のための履歴誘導型軌跡収集",
      "summary_ja": "過去の試行履歴をアドバイスとして活用しつつ、アドバイスへの過度な依存を防ぎながら効率的に高品質な学習データを収集する手法。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Suno's Open-Source Bark Hits 39K Stars Turning Text Into Expressive Audio",
      "summary": "Suno's open source Bark model is trending again, offering a fully generative text-to-audio system that handles speech, music, laughter, and sound effects.",
      "url": "https://alphasignal.ai/news/suno-s-open-source-bark-hits-39k-stars-turning-text-into-expressive-audio",
      "published": "2026-11-08T09:08:22+09:00",
      "title_ja": "SunoのオープンソースBarkが39Kスターを獲得、テキストを表情豊かな音声へ",
      "summary_ja": "音声、音楽、笑い声、効果音を生成可能なオープンソースの完全生成型Text-to-Audioシステム。"
    },
    {
      "lab": "AlphaSignal",
      "title": "AutoTrust Labs' JEV-27B Scores Decisions in One Token Across 37 Benchmarks",
      "summary": "AutoTrust Labs released a 27B text decision model that scores option probabilities instead of generating free-form answers, hitting 97 on tool selection.",
      "url": "https://alphasignal.ai/news/autotrust-labs-jev-27b-scores-decisions-in-one-token-across-37-benchmarks",
      "published": "2026-11-08T07:03:25+09:00",
      "title_ja": "AutoTrust LabsのJEV-27B、37のベンチマークで単一トークンによる意思決定を記録",
      "summary_ja": "自由形式の回答ではなく選択肢の確率をスコアリングする27Bモデルで、ツール選択で97点を記録。"
    },
    {
      "lab": "AlphaSignal",
      "title": "TinyML Brings AI Crop Monitoring to Farms Too Small for the Cloud",
      "summary": "A new survey maps how TinyML is reshaping farm sensing on ESP32, STM32, and UAV hardware, exposing serious gaps in energy and memory reporting.",
      "url": "https://alphasignal.ai/news/tinyml-brings-ai-crop-monitoring-to-farms-too-small-for-the-cloud",
      "published": "2026-11-08T03:03:01+09:00",
      "title_ja": "TinyMLがクラウド利用が困難な小規模農場にAI作物モニタリングをもたらす",
      "summary_ja": "ESP32等のハードウェアを用いた農場検知の調査により、電力やメモリ報告の課題が浮き彫りに。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Ornith Drops Ornith-1.5 122B Open Coding Model Claiming 84.5 on SWE-bench",
      "summary": "A 122B mixture-of-experts reasoning model with MIT weights, a 262K context, and 84.5% on SWE-bench Verified, served from a single 80GB GPU.",
      "url": "https://alphasignal.ai/news/ornith-drops-ornith-1-5-122b-open-coding-model-claiming-84-5-on-swe-bench",
      "published": "2026-11-08T01:03:07+09:00",
      "title_ja": "OrnithがOrnith-1.5 122B公開、SWE-benchで84.5を主張",
      "summary_ja": "262Kコンテキストを備えた122BのMoE推論モデル。単一の80GB GPUで動作可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Prism ML Squeezes a 2B Vision Model Into 0.52 GB",
      "summary": "Prism ML's 2B vision-language model squeezes into roughly half a gigabyte using ternary weights while keeping a 262K context window and image input.",
      "url": "https://alphasignal.ai/news/prism-ml-squeezes-a-2b-vision-model-into-0-52-gb",
      "published": "2026-11-08T00:31:16+09:00",
      "title_ja": "Prism MLが2Bビジョンモデルを0.52 GBに圧縮",
      "summary_ja": "3値重みを用いることで、262Kコンテキストと画像入力を維持したまま約0.5GBへの軽量化を実現。"
    },
    {
      "lab": "AlphaSignal",
      "title": "VideoZeroBench Exposes Leading Video AI Models Scoring Near Zero on Visual Grounding",
      "summary": "A new 500-question long-video benchmark forces models to not just answer correctly but prove where in the video the evidence lives. Frontier systems collapse.",
      "url": "https://alphasignal.ai/news/videozerobench-exposes-leading-video-ai-models-scoring-near-zero-on-visual",
      "published": "2026-11-07T21:02:50+09:00",
      "title_ja": "VideoZeroBench、主要なビデオAIモデルのビジュアルグラウンディング能力の低さを露呈",
      "summary_ja": "動画内の証拠位置の特定を求める500問の新ベンチマークで、既存の先端システムが軒並み失速。"
    },
    {
      "lab": "Hugging Face",
      "title": "ToyBlocks: A controlled world for robot learning and evaluation",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/toyblocks",
      "published": "2026-11-06T23:00:48+09:00",
      "title_ja": "ToyBlocks：ロボットの学習と評価のための制御された世界",
      "summary_ja": "ロボットの学習および評価を行うために構築された、制御可能な環境「ToyBlocks」の紹介。"
    },
    {
      "lab": "OpenAI",
      "title": "Partnering with Hacktron to find vulnerabilities in OpenAI’s systems",
      "summary": "OpenAI is partnering with Hacktron to find vulnerabilities, test connections with third-party services, and strengthen defenses with frontier AI.",
      "url": "https://openai.com/index/partnering-with-hacktron",
      "published": "2026-11-06T17:00:00+09:00",
      "title_ja": "Hacktronとの提携によるOpenAIシステムの脆弱性発見",
      "summary_ja": "第三者サービスとの接続テストや脆弱性発見を通じ、フロンティアAIを用いて防御を強化する試み。"
    },
    {
      "lab": "OpenAI",
      "title": "Measuring how AI agents handle everyday wet-lab science",
      "summary": "OpenAI introduces BioBasicsBench, a 100-task benchmark measuring how well AI agents interpret raw experimental data and handle everyday wet-lab science.",
      "url": "https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science",
      "published": "2026-11-06T09:00:00+09:00",
      "title_ja": "AIエージェントによる日常的なウェットラボ科学の処理能力測定",
      "summary_ja": "生の実験データの解釈など、AIによる科学実験能力を測定する100タスクのベンチマークを導入。"
    },
    {
      "lab": "Hugging Face",
      "title": "Egyptian and Nigerian English join the Open ASR Leaderboard",
      "summary": "",
      "url": "https://huggingface.co/blog/open-asr-leaderboard-liva",
      "published": "2026-11-06T09:00:00+09:00",
      "title_ja": "エジプト英語とナイジェリア英語がOpen ASRリーダーボードに参加",
      "summary_ja": "オープンな自動音声認識（ASR）の評価指標に、エジプトとナイジェリアの英語が新たに追加。"
    },
    {
      "lab": "OpenAI",
      "title": "Cult.fit builds operational muscle with Codex",
      "summary": "Cult.fit is using Codex to help teams across functions build tools, move faster, and change how work gets done.",
      "url": "https://openai.com/index/cultfit-builds-with-codex",
      "published": "2026-11-06T05:00:00+09:00",
      "title_ja": "Cult.fitがCodexで運用力を強化",
      "summary_ja": "Codexを活用して社内ツールを構築し、各部門の業務スピード向上とワークフローの変革を実現。"
    },
    {
      "lab": "Hugging Face",
      "title": "New NVIDIA Cosmos 3 Open Models for Interactive World Simulation",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation",
      "published": "2026-11-06T04:35:16+09:00",
      "title_ja": "インタラクティブな世界シミュレーション向けの新しいNVIDIA Cosmos 3オープンモデル",
      "summary_ja": "インタラクティブな世界のシミュレーションを可能にする、新しいオープンモデル群の発表。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/",
      "published": "2026-11-06T02:05:16+09:00",
      "title_ja": "Gemini Omni 1.2 Flash：長尺クリップに対応し高速かつ低コストに",
      "summary_ja": "より長い動画クリップを扱えるようになり、高速かつ高いコストパフォーマンスを実現した新モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Australian universities are creating AI-native graduates",
      "summary": "Australian universities are expanding access to ChatGPT and bringing AI into teaching and learning to prepare students for an AI-enabled workforce.",
      "url": "https://openai.com/index/australian-universities-ai-native-graduates",
      "published": "2026-11-06T02:00:00+09:00",
      "title_ja": "オーストラリアの大学がAIネイティブな卒業生を育成",
      "summary_ja": "ChatGPTへのアクセス拡大と教育へのAI導入により、AI活用が前提の労働市場に備える学生を育成。"
    },
    {
      "lab": "Google Research",
      "title": "Detecting signs of hypertension using wearable sensors",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/detecting-signs-of-hypertension-using-wearable-sensors/",
      "published": "2026-11-06T01:01:08+09:00",
      "title_ja": "ウェアラブルセンサーを用いた高血圧の兆候検知",
      "summary_ja": "ヘルス＆バイオサイエンス分野において、ウェアラブルデバイスから高血圧の兆候を検出する技術。"
    },
    {
      "lab": "OpenAI",
      "title": "GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents",
      "summary": "Introducing GPT‑6 Cyber, OpenAI’s cybersecurity model for finding exploitable vulnerabilities and developing fixes, trained to stay within authorized scope.",
      "url": "https://openai.com/index/introducing-gpt-6-cyber",
      "published": "2026-11-05T18:00:00+09:00",
      "title_ja": "GPT-6 Cyber：アライメントされたサイバーセキュリティエージェントの最前線",
      "summary_ja": "脆弱性の発見と修正プログラムの開発を行う、認可範囲内での動作に特化したセキュリティ特化型モデル。"
    },
    {
      "lab": "OpenAI",
      "title": "Merge builds product and business tools with OpenAI technology",
      "summary": "Merge uses GPT-6 Astra, ChatGPT, and Codex to review product code and support marketing. Its teams also use AI to plan executive dinners and prepare sales updates.",
      "url": "https://openai.com/index/merge-builds-with-openai",
      "published": "2026-11-05T17:00:00+09:00",
      "title_ja": "MergeがOpenAI技術を活用し製品およびビジネスツールを構築",
      "summary_ja": "GPT-6 Astra等を用い、コードレビューからマーケティング支援、イベント計画まで幅広くAIを活用。"
    },
    {
      "lab": "Apple ML",
      "title": "Faster Retrieval for Better, More Efficient RAG",
      "summary": "Maximum inner product search (MIPS) sits at the core of recommendation systems, search, and retrieval-augmented generation (RAG). Given a query vector, MIPS systems search within a database of millions of candidate key vectors for the one that best matches the query. The original data point associated with that best-matching key is then used to handle the query: in RAG, the document that is best suited to answer the question is typically prefixed to the query.\nAs the number of keys grows to millions and vector dimensions reach thousands, the computational cost of running an exhaustive…",
      "url": "https://machinelearning.apple.com/research/faster-retrieval",
      "published": "2026-11-05T09:00:00+09:00",
      "title_ja": "より優れた効率的なRAGのための高速な検索技術",
      "summary_ja": "大規模なベクトルDBから最適な情報を高速に抽出するMIPS手法により、RAGの精度と効率を向上。"
    },
    {
      "lab": "Hugging Face",
      "title": "A Closer Look at Phonon TTS. Launching High-Quality On-Device Speech That Tops the Benchmarks.",
      "summary": "",
      "url": "https://huggingface.co/blog/phonon-tts",
      "published": "2026-11-05T09:00:00+09:00",
      "title_ja": "Phonon TTS詳解：ベンチマークを凌駕する高品質なオンデバイス音声の提供",
      "summary_ja": "デバイス上で動作し、既存のベンチマークを超える高い品質を実現した音声合成技術のリリース。"
    },
    {
      "lab": "Google Research",
      "title": "Agile Deliberation: How AI helps humans define the gray areas",
      "summary": "Data Mining & Modeling",
      "url": "https://research.google/blog/agile-deliberation-how-ai-helps-humans-define-the-gray-areas/",
      "published": "2026-11-05T03:07:05+09:00",
      "title_ja": "機敏な議論：AIはいかに人間がグレーゾーンを定義するのを助けるか",
      "summary_ja": "データマイニングとモデリングを通じて、人間が複雑な判断領域を定義するのをAIが支援する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Dharma Field Extractor: Any Document In, Structured Fields in JSON Out",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/dharma-field-extractor",
      "published": "2026-11-05T02:50:10+09:00",
      "title_ja": "Dharma Field Extractor：あらゆる文書から構造化されたJSONフィールドを抽出",
      "summary_ja": "入力されたあらゆるドキュメントから、特定のフィールドを構造化されたJSON形式で出力する機能。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Agentic cheminformatics with Google Antigravity",
      "summary": "Learn how Google Antigravity and our Cheminformatics Skills accelerate drug discovery workflows, search compounds, and propose novel rigidified macrocycles.",
      "url": "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/",
      "published": "2026-11-04T02:01:49+09:00",
      "title_ja": "Google Antigravityによるエージェント指向のケモインフォマティクス",
      "summary_ja": "創薬ワークフローの加速や化合物検索、新規マクロサイクルの提案を可能にするAI技術の紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Palette: teaching a small model to build decks in your design language",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/palette-deck-building",
      "published": "2026-11-04T01:35:36+09:00",
      "title_ja": "Palette：小規模モデルにデザイン言語に沿ったデッキ作成を学習させる",
      "summary_ja": "特定のデザインルールに基づいたプレゼン資料（デッキ）を作成する能力を小規模モデルに付与。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Speeding up planning decisions with AI",
      "summary": "Google DeepMind and UK government work together to reduce planning assessment times",
      "url": "https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/",
      "published": "2026-10-30T23:18:30+09:00",
      "title_ja": "AIによる計画決定の迅速化",
      "summary_ja": "Google DeepMindと英国政府が協力し、都市計画等の評価時間を短縮する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon: Our next frontier model",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
      "published": "2026-10-29T02:00:58+09:00",
      "title_ja": "Gemini 4 Carbon：次世代のフロンティアモデル",
      "summary_ja": "Googleが開発する次世代のフロンティアAIモデル「Gemini 4 Carbon」の発表。"
    },
    {
      "lab": "Google Research",
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "published": "2026-10-28T02:35:00+09:00",
      "title_ja": "sleepフレームワーク：継続的学習でLLMが知識を保持するための新手法",
      "summary_ja": "AIが学習を繰り返す中で、獲得した知識を効率的に定着させるための新しい学習フレームワーク。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4: A new generation of world simulation",
      "summary": "Genie 4: our new world model unlocking unprecedented realism in real-time simulation.",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      "published": "2026-10-28T01:01:38+09:00",
      "title_ja": "Genie 4：新世代の世界シミュレーション",
      "summary_ja": "リアルタイムシミュレーションにおいて、かつてないほどの写実性を実現した新しい世界モデル。"
    },
    {
      "lab": "Apple ML",
      "title": "GHARP: Real-Time Gaussian Head Animation from Large-Scale Reconstruction Prior",
      "summary": "We present GHARP (Real-time Gaussian Head Animation from Large-scale Reconstruction Prior), a method that animates 3D human heads in real time from a few input images of a subject and a driving expression signal. We decouple the problem into an identity stage that builds a representation of the subject’s geometry and appearance offline, and an animation stage that predicts expression-dependent residuals on top of it at runtime. This separation offers a favorable trade-off with respect to fidelity, quality and runtime: the identity stage can be expensive while the animation stage runs a…",
      "url": "https://machinelearning.apple.com/research/gharp-head-animation",
      "published": "2026-10-26T09:00:00+09:00",
      "title_ja": "GHARP：大規模再構成事前学習によるリアルタイムなGaussian Headアニメーション",
      "summary_ja": "少数の画像と表情信号から、3Dの人物の頭部をリアルタイムで高品質にアニメーション化する手法。"
    },
    {
      "lab": "Google Research",
      "title": "Bringing foundational models to the front lines of TB screening",
      "summary": "Generative AI",
      "url": "https://research.google/blog/bringing-foundational-models-to-the-front-lines-of-tb-screening/",
      "published": "2026-10-24T03:51:33+09:00",
      "title_ja": "結核スクリーニングの最前線に基盤モデルを導入",
      "summary_ja": "生成AI技術を活用し、結核（TB）の検査・選別プロセスの最前線に基盤モデルを適用する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Beyond tree cover: mapping the world’s forest types",
      "summary": "A global map categorizing every 10-meter patch of land on Earth into distinct forest types.",
      "url": "https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/",
      "published": "2026-10-22T23:30:24+09:00",
      "title_ja": "樹冠を超えて：世界の森林タイプをマッピングする",
      "summary_ja": "地球上のあらゆる10メートル区画を、詳細な森林タイプ別に分類したグローバルマップの作成。"
    }
  ]
};
