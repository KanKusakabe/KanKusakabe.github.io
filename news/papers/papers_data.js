window.papersData = {
  "updated_at": "2026-10-13 11:54 JST",
  "arxiv": [
    {
      "id": "2610.13015",
      "title": "Generalized Proximal Policy Optimization: Unifying LLM RL Algorithms from the Perspective of Divergence",
      "url": "https://arxiv.org/abs/2610.13015",
      "pdf": "https://arxiv.org/pdf/2610.13015",
      "authors": [
        "Zhicheng Cai",
        "Xinyuan Guo",
        "Hanlin Wu",
        "Weinan Dai",
        "Yuyan Zhou",
        "Wei-Ying Ma"
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
      "star_quote": "The best-performing GPPO instantiation surpasses standard GRPO by up to 50% and 14% on math and coding, delivering SOTA performance.",
      "signals": [],
      "headline": "f-divergenceの視点でLLMの強化学習を統一するGPPOフレームワークの提案",
      "what": "PPOにおけるクリッピングが探索を阻害する問題を解決するため、f-divergenceの信頼領域理論に基づき強化学習アルゴリズムを統一したGeneralized Proximal Policy Optimization (GPPO)です。異なるf-divergenceがもたらす幾何学的特性と、従来のモンテカルロ法より高精度な推論トポロジーを組み合わせた二次元の設計空間を定義しています。",
      "enables": "数学とコーディングのベンチマークにおいて標準的なGRPOを最大50%上回る性能を達成し、DAPOやDPPOといった既存のPPO変種を特殊なケースとして包含することに成功しました。",
      "why_it_matters": "ヒューリスティックな修正に頼っていたLLMの強化学習に対し、数学的に裏付けられた統一的な設計指針を提供し、効率的な探索と学習の安定化を両立させています。",
      "tags": [
        "LLM",
        "強化学習",
        "PPO"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13020",
      "title": "Trajectory-Aware Policy Optimization: Closing the State Distribution Gap in Long-Horizon LLM RL",
      "url": "https://arxiv.org/abs/2610.13020",
      "pdf": "https://arxiv.org/pdf/2610.13020",
      "authors": [
        "Zhicheng Cai",
        "Weinan Dai",
        "Yuyan Zhou",
        "Wei-Ying Ma",
        "Ya-Qin Zhang",
        "Hao Zhou"
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
      "star_quote": "TAPO significantly surpasses existing LLM RL algorithms across eight competition-level benchmarks, achieving up to 48% and 12% improvement over GRPO",
      "signals": [],
      "headline": "長期間の推論における状態分布のズレを補正するTAPOによるLLM強化学習の安定化",
      "what": "長期間の自己回帰生成におけるローカルな誤差が軌跡全体で蓄積する問題に対し、オフポリシーの方策勾配から理論的に導出した状態分布補正を導入したTrajectory-Aware Policy Optimization (TAPO)です。幾何平均エスティメータによる分散低減と、系列長に応じた動的なクリッピングを組み合わせています。",
      "enables": "数学的推論でGRPOと比較して最大48%の向上を達成し、長期間のタスクにおける学習の不安定性や崩壊を大幅に抑制しました。",
      "why_it_matters": "従来のトークン単位や系列単位の制御では見落とされていた「軌跡誘発的な分布のズレ」を明示的に補正することで、複雑な推論タスクの学習効率を高めています。",
      "tags": [
        "LLM",
        "強化学習",
        "推論"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13325",
      "title": "Taking Tokenization off the Host for Agentic LLM Serving",
      "url": "https://arxiv.org/abs/2610.13325",
      "pdf": "https://arxiv.org/pdf/2610.13325",
      "authors": [
        "Mohammad Siavashi",
        "Pascal Schwinte",
        "Ali Banaei",
        "Gerald Q. Maguire Jr.",
        "Marco Chiesa",
        "Dejan Kosti\\'c"
      ],
      "categories": [
        "cs.DC",
        "cs.CL",
        "cs.LG",
        "cs.PF"
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
      "star_quote": "We present GraphTok, a GPU tokenizer that runs the entire encoding pipeline, from pre-tokenization through byte-pair encoding (BPE) merging to token-ID assembly",
      "signals": [],
      "headline": "GPU上でトークナイゼーションを完結させLLM推論の初期遅延を削減するGraphTok",
      "what": "プレトークナイゼーションからBPEマージまでの一連の処理を、単一のCUDAグラフとしてGPU上で実行する高速トークナイザです。CPUとGPUのデータ転送やCPU側の処理負荷を排除し、既存のvLLMやNVIDIA Dynamoに統合可能な設計となっています。",
      "enables": "Llama 3において最速のCPUトークナイザより4.7〜6.0倍高速に動作し、長いコンテキストを扱うエージェント用途でTTFT（最初のトークン生成までの時間）を2倍以上改善しました。",
      "why_it_matters": "プレフィックスキャッシュにより無視できるようになったプリフィル段階において、新たなボトルネックとなっていたCPUトークナイゼーションの問題を解消し、システム全体のキャパシティを大幅に向上させます。",
      "tags": [
        "LLM",
        "GPU計算",
        "推論最適化"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13232",
      "title": "FPD-Drive: Future Policy Distillation for End-to-End Autonomous Driving",
      "url": "https://arxiv.org/abs/2610.13232",
      "pdf": "https://arxiv.org/pdf/2610.13232",
      "authors": [
        "Li-Heng Chen",
        "Qifeng Chen",
        "Chengwei Wu",
        "Yingjie Zhang",
        "Sheng Yang",
        "Hongbo Fu"
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
      "star_quote": "achieving SOTA performance among the compared methods on both benchmarks. Zero-shot closed-loop evaluation on HUGSIM further yields an HD-Score of 45.1",
      "signals": [],
      "headline": "将来の知識を蒸留して自動運転方策の安全性と多様性を向上させるFPD-Drive",
      "what": "記録された将来の観測データにアクセスできる教師モデルから、多様で高品質な軌跡ターゲットを生徒モデルへ移転する「Future-Privileged Multi-Target Distillation」を採用したエンドツーエンドのプランナーです。安全候補と不安全候補のランキングエラーを修正するSafety-Aware Score Correctionも導入されています。",
      "enables": "NAVSIMベンチマークにおいてPDMSスコア95.5を達成し、単一の走行ログのみに基づく学習に比べて、代替的な有効行動の学習と安全性の選択精度が向上しました。",
      "why_it_matters": "特権的な将来情報を用いて学習時の監視信号を拡張することで、推論時に将来予測を行わずに高度な判断が可能な軽量な方策を実現しています。",
      "tags": [
        "自動運転",
        "蒸留",
        "エンドツーエンド学習"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13317",
      "title": "SBNO : Schr\\\"odinger Bridge Neural Operator for the Forward and Inverse Problems under Missing Information",
      "url": "https://arxiv.org/abs/2610.13317",
      "pdf": "https://arxiv.org/pdf/2610.13317",
      "authors": [
        "Jaehyeon Park",
        "Inhyeok Jeong",
        "Noseong Park"
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
      "comment": "NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce SBNO, an equation-free paired-data diffusion bridge matching framework that learns conditional operators for both forward and inverse PDE problems",
      "signals": [],
      "headline": "不完全な観測データから物理現象を再構成するシュレディンガー橋ニューラルオペレータ",
      "what": "偏微分方程式（PDE）の順問題および逆問題を解くための、方程式を必要としない拡散ブリッジマッチングフレームワークSBNOです。シュレディンガー橋を用いて入力と解のペアを時間依存のドリフトとして学習し、スパースな観測データからの確定的再構成を可能にします。",
      "enables": "わずか5%の観測データでも高い精度を維持しつつ、従来のガイド付き拡散モデルと比較して実行速度を9.7倍以上に高速化し、メモリ消費量を4.3分の1以下に削減しました。",
      "why_it_matters": "物理法則が未知、あるいは観測が極めて限定的な実用環境下において、高速かつ軽量に物理現象のシミュレーションとパラメータ推定を行える点に意義があります。",
      "tags": [
        "ニューラルオペレータ",
        "拡散モデル",
        "科学計算"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13117",
      "title": "Forward Dynamics Models",
      "url": "https://arxiv.org/abs/2610.13117",
      "pdf": "https://arxiv.org/pdf/2610.13117",
      "authors": [
        "Zipei Ma",
        "Junzhe Jiang",
        "Jiahui Zhang",
        "Juntong Zhang",
        "Chun Gu",
        "Bozhou Zhang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://logosroboticsgroup.github.io/FDM/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieving a state-of-the-art 99.4% average success rate on LIBERO and absolute gains of up to 13% over VLA and WAM methods on real-world tasks.",
      "signals": [],
      "headline": "将来状態の予測を方策学習の教師信号として活用するロボット制御モデルFDM",
      "what": "アクション予測と将来の空間状態予測を結合し、アクション特徴量を条件として将来予測を行うForward Dynamics Models (FDM)です。推論時には将来予測の生成ステップをスキップしつつ、学習時には正解の将来状態をアクション学習の教師信号として利用する構造を持ちます。",
      "enables": "LIBEROベンチマークで99.4%という最高水準の成功率を記録し、推論コストを抑えながら従来のVLAやWAMを最大13%上回る性能を実機ロボットで示しました。",
      "why_it_matters": "将来予測の誤差がアクションに伝播するのを防ぎつつ、視覚的フィードバックを方策の質向上に直接結びつける「action-to-future」パラダイムを確立しました。",
      "tags": [
        "ロボティクス",
        "VLA",
        "世界モデル"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12657",
      "title": "Kronecker Product Attention: Memory-Efficient KV Compression via Structured Factorization",
      "url": "https://arxiv.org/abs/2610.12657",
      "pdf": "https://arxiv.org/pdf/2610.12657",
      "authors": [
        "Bahareh Nikpour",
        "Hossein Rajabzadeh",
        "Maryam Dialameh",
        "Vahid Partovi Nia",
        "Parsa Omidi"
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
      "star_quote": "KPA matches or exceeds TPA, MHA, MQA, GQA, and MLA across four model scales",
      "signals": [],
      "headline": "クロネッカー積を用いてKVキャッシュを10倍圧縮するKronecker Product Attention",
      "what": "キー（Key）とバリュー（Value）のアクティベーションを、トークンに依存する小型行列のクロネッカー積の和として表現するアテンション機構です。構造化された回転位置エンコーディング（RoPE）を適用することで、RoPEの相対位置特性を維持しながら圧縮を行うことができます。",
      "enables": "KVキャッシュを最大10倍圧縮しながら、MHA、GQA、MLAなどの既存手法と同等以上の精度を複数のベンチマークで達成しました。",
      "why_it_matters": "表現力を犠牲にすることなくKVキャッシュの増大を抑制でき、メモリ制約の厳しい環境での長文生成の効率化に寄与します。",
      "tags": [
        "LLM",
        "アテンション機構",
        "KVキャッシュ"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12848",
      "title": "Reinforcement Learning via Fixed-point Flow Matching",
      "url": "https://arxiv.org/abs/2610.12848",
      "pdf": "https://arxiv.org/pdf/2610.12848",
      "authors": [
        "Denis Blessing",
        "Onur Celik",
        "Gerhard Neumann"
      ],
      "categories": [
        "cs.LG",
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
        "new"
      ],
      "star_quote": "propose fixed-point flow matching (FFM), a data-free procedure for training",
      "signals": [],
      "headline": "不動点反復により教師データなしでフローベースの方策を学習するFFM",
      "what": "最大エントロピー強化学習におけるフロー方策の学習を、データ不要の不動点反復として定式化するFixed-point Flow Matching (FFM)です。クリティックのアクション勾配を回帰ターゲットとして利用し、フロー・マッチング形式で方策を更新します。",
      "enables": "オフラインからオンラインへのファインチューニングを効果的に行い、学習データがない状態からでも表現力の高い多峰性の分布を持つ方策を効率的に学習可能です。",
      "why_it_matters": "オンライン強化学習においてフローベースの方策を直接学習・調整するための理論的な手法を確立し、複雑な行動分布の表現を可能にしました。",
      "tags": [
        "強化学習",
        "フロー・マッチング",
        "生成モデル"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13257",
      "title": "CAST: Credit Alignment for Cross-Tokenizer On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.13257",
      "pdf": "https://arxiv.org/pdf/2610.13257",
      "authors": [
        "Jingru Yang",
        "Jinhang Wu",
        "Minjing Shi",
        "Shengfeng He",
        "Xuyan Li",
        "Man Tan"
      ],
      "categories": [
        "cs.LG",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 8 figures, 11 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose CAST (Chunk-aware credit Assignment with Selective Token Anchoring)",
      "signals": [],
      "headline": "異なるトークナイザ間の蒸留において学習信号の割り当てを最適化するCAST",
      "what": "教師と生徒のトークナイザが異なる場合の強化学習ベースの蒸留において、テキストチャンク単位の報酬をトークン単位の更新に分配する手法です。予測の不確実性に基づいて報酬を重み付けし、対応する教師信号がない箇所には初期方策へのアンカー制約を課します。",
      "enables": "QwenからLlamaへの蒸留において数学やコードのベンチマークで最大2.45ポイントの精度向上を実現し、トークナイザの壁を越えた知識移転を効率化しました。",
      "why_it_matters": "既存のオンポリシー蒸留における「報酬の割当問題」を解消し、より高性能なモデルから異なる構造を持つ軽量モデルへの効率的な知識移転を可能にします。",
      "tags": [
        "LLM",
        "知識蒸留",
        "トークナイゼーション"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "url": "https://arxiv.org/abs/2610.12572",
      "pdf": "https://arxiv.org/pdf/2610.12572",
      "authors": [
        "Zhenglin Wan",
        "Jiayu Chen",
        "Zhengfeiyang Zhang",
        "Pengfei Zhou",
        "Wangbo Zhao",
        "Fangyuan Kong"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page: https://vanzll.github.io/diffusionart-project/ ; Code: https://github.com/vanzll/DiffusionART",
      "hf_upvotes": 231,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲231"
      ],
      "headline": "画像・動画生成拡散モデルの強化学習を劇的に高速化するDiffusionART",
      "what": "報酬信号を共通の改善方向に集約することで学習の不安定さを解消するAggregation-First Reward Tiltingを導入した手法です。信頼領域を用いたドリフト補正により、従来のEMA（指数移動平均）によるチューニングなしで安定した学習を実現します。",
      "enables": "HunyuanVideo-13Bの強化学習において、既存手法（Flow-GRPO等）と比較して約12倍少ないGPU時間で、より高い平均報酬を達成しました。",
      "why_it_matters": "微分不可能な報酬関数にも対応し、膨大な計算コストがかかっていた拡散モデルの強化学習によるアライメントを、実用的な時間で完了できるようにしました。",
      "tags": [
        "拡散モデル",
        "強化学習",
        "動画生成"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "url": "https://arxiv.org/abs/2610.13527",
      "pdf": "https://arxiv.org/pdf/2610.13527",
      "authors": [
        "Zhiyuan Shi",
        "Xiang Li",
        "Xingzhuo Guo",
        "Shangchen Miao",
        "Weiliang Chen",
        "Qiyu Dai"
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
      "comment": "Project Page: https://mirros.ai/blog/s-space",
      "hf_upvotes": 202,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲202"
      ],
      "headline": "マルチモーダルLLMの内部に存在する空間認識用の潜在空間「S-Space」の発見",
      "what": "MLLM内部のオブジェクトトークンの表現が、水平・垂直・距離の連続座標をエンコードしている線形部分空間（S-Space）を特定しました。この空間は、質問の有無に関わらず、知覚された物体の位置情報を保持する内部ワークスペースとして機能しています。",
      "enables": "MLLMが物体位置を正確に認識できている一方で、視点変更に伴う空間変換などの計算処理に失敗しているという、推論エラーの根本原因を切り分ける診断が可能になりました。",
      "why_it_matters": "MLLMの空間推論メカニズムを解明し、言語訓練からどのように物理的な方向概念が創発するか、また知覚と計算のどちらがボトルネックであるかを明らかにしました。",
      "tags": [
        "マルチモーダルLLM",
        "空間推論",
        "メカニズム解析"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "url": "https://arxiv.org/abs/2610.12772",
      "pdf": "https://arxiv.org/pdf/2610.12772",
      "authors": [
        "Taoyang Jia",
        "Weikai Huang",
        "Linxin Song",
        "Jared Darlington",
        "Jieyu Zhao",
        "Yue Wang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "12 pages, 5 figures",
      "hf_upvotes": 132,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲132"
      ],
      "headline": "飛んでくる物体に全身で反応するヒューマノイド制御フレームワークReflex",
      "what": "飛んでくる箱をキャッチするような、1秒以内の素早い反応が求められるタスクのための三段階学習フレームワークです。強化学習による全身制御、遅延観測からの物体力学推論、そして一人称視点映像からの力学表現の復元を段階的に学習させます。",
      "enables": "実機のUnitree G1ヒューマノイドを用い、人間が投げた箱を最大65%の成功率でキャッチすることに成功しました。",
      "why_it_matters": "視覚情報の時間履歴を活用し、知覚と全身のリアクティブな制御を切り離して学習させることで、複雑な実環境での動的なタスクへの対応を可能にしました。",
      "tags": [
        "ロボティクス",
        "ヒューマノイド",
        "強化学習"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "url": "https://arxiv.org/abs/2610.12611",
      "pdf": "https://arxiv.org/pdf/2610.12611",
      "authors": [
        "Tian Jin",
        "Wenhao Wang",
        "Jing Kang",
        "Haoting Shi",
        "Rui Ye",
        "Yijun Lu"
      ],
      "categories": [
        "cs.MA",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "26 pages, 11 figures, including appendices",
      "hf_upvotes": 85,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲85"
      ],
      "headline": "多様なソフトウェア環境を自動合成しPC操作エージェントを訓練するSoftwareGym",
      "what": "多種多様なGUIインターフェースと動作可能な機能を備えたソフトウェア環境を自動で合成するパイプラインです。生成された環境を用いて収集された軌跡データを用いて、コンピュータ操作エージェント（CUA）を訓練します。",
      "enables": "182種類のアプリケーションを合成し、OSWorldベンチマークにおけるエージェントの成功率（Pass@3）を41.39%から56.97%へ向上させました。",
      "why_it_matters": "手動での構築が困難だった多様なソフトウェア環境をスケーラブルに供給することで、特定アプリへの過学習を防ぎ、エージェントの汎用性を高めることができます。",
      "tags": [
        "AIエージェント",
        "GUI操作",
        "合成データ"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13021",
      "title": "EmbodiedCLBench: Evaluating Continual Learning for Self-Evolving Embodied Agents",
      "url": "https://arxiv.org/abs/2610.13021",
      "pdf": "https://arxiv.org/pdf/2610.13021",
      "authors": [
        "Jie Huang",
        "Yanan Chen",
        "Ruixun Liu",
        "Kaichen He",
        "Xinyi He",
        "Rui Huang"
      ],
      "categories": [
        "cs.AI",
        "cs.CL",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "自己進化するエージェントの継続学習能力を評価するEmbodiedCLBench",
      "what": "基本タスクで習得したスキルを組み合わせて複雑な未知のタスクを解く「構成的汎化」に焦点を当てた、身体性エージェント向けの継続学習ベンチマークです。エージェントが過去の経験を蓄積し、新しいタスクへ転移させる能力を測定します。",
      "enables": "現在のエージェントが基本タスクから有益な経験を得られる一方で、経験の量に応じた性能のスケーリングや、複雑なタスクでの情報抽出に課題があることを明らかにしました。",
      "why_it_matters": "非身体的な設定に限定されていた継続学習の研究を身体性環境へ拡張し、自己進化するエージェント開発のための評価基盤を提供しました。",
      "tags": [
        "身体性AI",
        "継続学習",
        "ベンチマーク"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13395",
      "title": "ProgramGym: Scaling Training Environments for Long-Horizon Program Reproduction Agents",
      "url": "https://arxiv.org/abs/2610.13395",
      "pdf": "https://arxiv.org/pdf/2610.13395",
      "authors": [
        "Chengyi Yang",
        "Renxu Bao",
        "Jue Hou",
        "Zongpei Teng",
        "Ziheng Wang",
        "Yujie Lin"
      ],
      "categories": [
        "cs.SE",
        "cs.AI",
        "cs.CL"
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
      "headline": "プログラムの設計から実装までを一貫して訓練する環境ProgramGym",
      "what": "リポジトリから検証可能な実行環境を自動構築するProgram-Envと、分析・実装・レビューの役割を分離したProgram-Agentからなるフレームワークです。ゼロからのプログラム開発という長期間のタスクにおけるエージェントの能力を強化します。",
      "enables": "1,648個の多言語環境を構築し、Qwen3.8-27Bのプログラム再現性能を34.87%から最大56.25%まで引き上げ、一部のフラグシップモデルを凌駕する性能を達成しました。",
      "why_it_matters": "単なるバグ修正ではなく、要件からシステム全体を構築するエンジニアリング能力を、検証可能な形でスケーラブルに学習させる環境を実現しました。",
      "tags": [
        "AIエージェント",
        "ソフトウェア開発",
        "コード生成"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13113",
      "title": "Continually Post-training Small Models via Synthetic Self-distillation",
      "url": "https://arxiv.org/abs/2610.13113",
      "pdf": "https://arxiv.org/pdf/2610.13113",
      "authors": [
        "Woosung Koh",
        "Hyunsoo Lee",
        "Kyungjae Lee",
        "Haeju Park",
        "Dahyun Lee",
        "Dasol Hwang"
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
      "hf_upvotes": 41,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲41"
      ],
      "headline": "同一ファミリーの少し大きなモデルを利用して小型モデルの継続学習を支援するSynthSelf",
      "what": "小型モデルが新しい知識を学ぶ際の「忘却」と「分布のズレ」を防ぐため、同一ファミリーのわずかに大きなモデルを教師役として、生徒の分布に近い高品質な書き換えデータ（合成自己蒸留）を生成する手法です。",
      "enables": "インコンテキスト学習能力が低い小規模モデル（例：Llama-3-8Bなど）においても、14種類のベンチマークで既存の蒸留手法を上回る継続学習性能を示しました。",
      "why_it_matters": "デバイス上での利用が想定される小型モデルにおいて、元の能力を損なわずに新しい知識を追加し続けるための現実的なアプローチを提示しています。",
      "tags": [
        "LLM",
        "継続学習",
        "モデル圧縮"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12984",
      "title": "Work2Skill: Capturing Human GUI Experience for Reusable Agent Skill Induction",
      "url": "https://arxiv.org/abs/2610.12984",
      "pdf": "https://arxiv.org/pdf/2610.12984",
      "authors": [
        "Yuqi Huang",
        "Hui Li",
        "Yifei Cao",
        "Zikun Cai",
        "Tianci Xie",
        "Yangfan Gao"
      ],
      "categories": [
        "cs.AI",
        "cs.HC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 39,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲39"
      ],
      "headline": "人間のGUI操作デモから再利用可能なスキルを抽出するWork2Skill",
      "what": "人間のデスクトップ操作を記録し、アクションの依存関係や完了条件を含む「再利用可能なスキル」として抽出するフレームワークです。アクセシビリティツリーやキーボード入力を同期させたデータセットWorkDemo-350を活用します。",
      "enables": "OSWorldなどのベンチマークにおいて、スキルなしのベースラインと比較して最大10.54ポイントのスコア向上を達成し、未知のソフトウェア操作への適応能力を改善しました。",
      "why_it_matters": "人間の暗黙的なドメイン知識を形式知（スキル）として抽出・蓄積することで、複雑なワークフローをエージェントが効率的に実行できるようにします。",
      "tags": [
        "AIエージェント",
        "GUI操作",
        "スキル学習"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.13912",
      "title": "RSI-Anything: Unlocking Recursive Self-Improvement with World Models",
      "url": "https://arxiv.org/abs/2610.13912",
      "pdf": "https://arxiv.org/pdf/2610.13912",
      "authors": [
        "Taoyong Cui",
        "Pinxian Zeng",
        "Wanghan Xu",
        "Hao Xiao",
        "Shuhan Xue",
        "Qiang Gao"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/Gen-Verse/RSI-Anything",
      "hf_upvotes": 30,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲30"
      ],
      "headline": "世界モデルを活用して自律的に性能を改善し続けるRSI-Anything",
      "what": "予測可能な世界モデルを用いて、行動選択と学習データの選択をガイドする自己改善（RSI）フレームワークです。観測されたフィードバックに基づき、方策と世界モデルの両方を適応させ、互換性チェックを経てシステムを更新します。",
      "enables": "コード修正やGUI操作、実験計画などの多様なドメインで性能を向上させ、例えば実験計画ではベイズ最適化を大幅に上回る96.15%の収率予測を達成しました。",
      "why_it_matters": "外部からの教師信号が乏しい環境でも、世界モデルによる予測と検証のループを回すことで、モデルが自律的に進化し続ける汎用的な枠組みを実証しました。",
      "tags": [
        "自己改善",
        "世界モデル",
        "AIエージェント"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    },
    {
      "id": "2610.12586",
      "title": "Realism VS Accuracy: Event Sequence Forecasting from a Generative Modeling Perspective",
      "url": "https://arxiv.org/abs/2610.12586",
      "pdf": "https://arxiv.org/pdf/2610.12586",
      "authors": [
        "Dmitry Osin",
        "Egor Surkov",
        "Petr Mokrov",
        "Igor Udovichenko",
        "Ivan Karpukhin",
        "Evgeny Burnaev"
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
      "comment": "Spotlight at the NeurIPS 2026 Track on Evaluations and Datasets. Code: https://github.com/xaosina/event-sequence-forecasting",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "イベントシーケンス予測における予測精度と分布のリアリズムのトレードオフを提唱",
      "what": "金融や医療における不均質なイベント列の予測を条件付き生成問題として捉え、予測精度と生成データのリアリズム（分布の妥当性）の両面から評価した研究です。精度の高いモデルが必ずしも現実的なデータを生成しないというトレードオフを指摘しています。",
      "enables": "精度とリアリズムを両立させる手法として、拡散モデルからのサンプルを統合するWasserstein BaryBoosterを提案し、新たな最先端の予測性能を達成しました。",
      "why_it_matters": "単なる統計的予測精度の追求だけでなく、生成データの現実味という新しい評価軸を導入し、時系列データ生成の新たなベンチマークを確立しました。",
      "tags": [
        "時系列予測",
        "拡散モデル",
        "生成モデル"
      ],
      "fetched_at": "2026-10-13T11:54:46.349295+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.12374",
      "title": "AgentGarten: Code Worlds for Evolving Agents",
      "abstract": "Interactive virtual worlds allow agents to learn through exploration and interaction. What agents can learn is bounded by the environments they practice in, which must be faithful, with consistent state, rules, and dynamics, and realistic, with observations that follow the real-world visual distributions. Achieving both across diverse worlds remains a bottleneck. We introduce AgentGarten, a framework that couples simulators and game engines with a shared neural renderer to build real-time interactive environments. Its simulation backends maintain persistent world state and execute program-defined interaction rules, while the renderer generates visual observations from structured conditions exported through a common interface. To build the neural renderer, we adapt a pretrained video model to geometry conditions, distill it with our proposed Adversarial Forcing, and optimize inference for real-time interaction. Adversarial Forcing makes history prefilling differentiable through exact replay, so that losses on later predictions update how the renderer encodes prior observations, and adds real-data adversarial supervision to improve its visual quality. In AgentGarten, agents perceive the world through visual observations, interact with it in real time, and improve by distilling each round of experience into playbooks that subsequent agents inherit and refine. Our empirical study demonstrates a substantial gain in learning efficiency, with agents learning from just 4 rounds compared with millions for a conventional reinforcement learning counterpart. As new worlds can be written as code and rendered through the same interface, environments can scale in both number and difficulty alongside their agents, a step toward agents that keep evolving through interactive experience.",
      "upvotes": 259,
      "github_stars": 173,
      "github_repo": "https://github.com/MirroS-Lab/AgentGarten",
      "project_page": "https://mirros-lab.github.io/agent-garten/",
      "comments": 3,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.12374",
      "arxiv_url": "https://arxiv.org/abs/2610.12374",
      "title_ja": "AgentGarten：エージェントの進化のためのコード生成仮想世界",
      "summary_ja": "シミュレータと共有ニューラルレンダラーを統合し、多様でリアルな対話型環境を構築可能にする。"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 231,
      "github_stars": 72,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART：拡散モデルの効率的、安定かつ拡張可能な強化学習",
      "summary_ja": "報酬の集約と重み付けにより、拡散モデルのRLにおいて効率と学習の安定性を両立させる手法を提案。"
    },
    {
      "id": "2610.08448",
      "title": "Rethinking Cross-Tokenizer On-Policy Distillation: From Alignment Coverage to Supervision Reliability",
      "abstract": "On-Policy Distillation (OPD) trains a student on its own generations using teacher feedback. With different tokenizers, comparing teacher and student predictions requires alignment at both sequence and vocabulary levels. In this paper, we examine whether expanding this alignment coverage improves learning. Across three heterogeneous teacher--student pairs on mathematical reasoning and code generation, strict 1:1 groups already cover most student-generated tokens despite substantial vocabulary mismatch. On responses sampled from the students before distillation, the shared vocabulary retains nearly all teacher and student probability mass at strictly aligned positions on average. Restricting reverse KL to a student-selected top-16 subset of the shared vocabulary at each strict position achieves accuracy comparable to full shared-vocabulary OPD, outperforming the evaluated cross-tokenizer baselines. Adding mean squared error supervision on span log-probabilities in mismatch groups gives complete supervision coverage, yet reduces accuracy. At checkpoints from training with only the strict loss, the span gradients show weak or negative directional agreement with the strict gradients and grow in magnitude relative to them. These diagnostics may help explain the accuracy drop from adding span supervision. Our findings motivate a shift from maximizing alignment coverage to prioritizing supervision reliability: compact supervision at strict positions can be more effective than broader coverage that introduces weakly aligned or conflicting training signals.",
      "upvotes": 211,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.08448",
      "arxiv_url": "https://arxiv.org/abs/2610.08448",
      "title_ja": "クロストークナイザー・オンポリシー蒸留の再考",
      "summary_ja": "異なるボキャブラリを持つモデル間の蒸留において、1:1のトークン配置が学習に十分であることを解明。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 202,
      "github_stars": 247,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space：マルチモーダル言語モデルにおける空間的ワークスペースの探求",
      "summary_ja": "MLLM内部に存在する物体の座標を表現する線形サブ空間「S-Space」を特定しその役割を分析。"
    },
    {
      "id": "2610.09823",
      "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
      "abstract": "Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.",
      "upvotes": 187,
      "github_stars": 46,
      "github_repo": "https://github.com/LINs-lab/UltraText_Bench",
      "project_page": "",
      "comments": 2,
      "org": "Westlake University",
      "url": "https://huggingface.co/papers/2610.09823",
      "arxiv_url": "https://arxiv.org/abs/2610.09823",
      "title_ja": "UltraText Bench：画像生成における視覚的テキストレンダリング評価の包括的ベンチマーク",
      "summary_ja": "英中二言語で432個のプロンプトを含み、高密度なテキストの配置や可読性を厳密に評価する。"
    },
    {
      "id": "2610.08077",
      "title": "Self-Retrospection Distillation: Turning Post-hoc Experiences into Prior Foresight",
      "abstract": "Reinforcement learning with verifiable rewards (RLVR) turns agent experience into learning signals primarily through scalar outcome rewards after interaction. For group-relative objectives, however, this signal vanishes when all rollouts receive the same reward, even though their trajectories may reveal useful information about what the task requires and how the agent fails. We ask a complementary question: can hindsight teach an agent what it could have anticipated before acting? We introduce prospective learning, which uses post-hoc experience to supervise foresight predictions from the pre-interaction view, and instantiate it with Self-Retrospection Distillation (SRD). Intuitively, a completed trajectory reveals knowledge that would have been useful and pitfalls that should be avoided; SRD distills this privileged hindsight into trajectory-blind foresight of the same policy. Foresight serves only as a training target and need not be explicitly generated at inference time. Across 10 tool-integrated reasoning and long-horizon agentic tasks, SRD complements RLVR and self-distillation baselines with gains of up to 24.2 pp. Its advantage is especially pronounced when reward contrast is scarce: when 37--98% of rollout groups are reward-uniform across model scales, yet SRD can still exploit learning signal from sampled trajectories. In the 2B setting, where 98% of groups are all-failure, the RLVR training ends up at 0.0% success, while adding SRD reaches 60.6% under the same rollout budget. Our results suggest that post-hoc agent experience is useful not only for evaluating or improving behavior, but also for shaping predictive representations before available interaction.",
      "upvotes": 178,
      "github_stars": 7,
      "github_repo": "https://github.com/SalesforceAIResearch/SRD",
      "project_page": "",
      "comments": 2,
      "org": "Salesforce AI Research",
      "url": "https://huggingface.co/papers/2610.08077",
      "arxiv_url": "https://arxiv.org/abs/2610.08077",
      "title_ja": "自己回顧蒸留：事後の経験を事前の先見性に変える手法",
      "summary_ja": "事後の軌跡情報を活用して、行動前の視点からの予測を教師あり学習し、RLVRの学習効率を高める。"
    },
    {
      "id": "2610.08215",
      "title": "Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?",
      "abstract": "Learning from experience is essential for LLM agents to adapt to unfamiliar and dynmaic environments. Evaluating this ability is therefore important for understanding how effectively agents acquire and use new knowledge. Existing benchmarks have sought to evaluate this ability, but they primarily evaluate tasks whose rules are provided in the instructions or already familiar to pretrained models, making it difficult to distinguish learning from interactions from reasoning with existing knowledge. To address this, we introduce Learn2Play Bench, a benchmark of newly designed text-based games, whose rules are novel or counterintuitive, requiring agents to acquire knowledge through interaction rather than rely solely on pretrained knowledge. These games provide reproducible feedback and automatic scoring, enabling controlled evaluation of learning across repeated attempts. We also vary game instances to test whether agents can apply what they have learned to new situations. Therefore, we evaluate how backbone models, self-evolving methods, and agent harnesses affect agents' learning ability, revealing three findings: (1) Experience retention: Retaining complete records of actions and feedback can support more effective learning than summarizing these experiences into rules or strategies. (2) Human agent gap: Top-performing human players achieve higher peak scores than the evaluated agents. Human explore more varied strategies, and repeat actions less. (3) Harness matters: With the backbone fixed, changing the harness can improve performance while reducing estimated inference cost. Together, these findings provide insights into how LLM agents learn from experience and suggest directions for future work to improve their learning ability. Project website: https://liushiliushi.github.io/learn2play-bench-website/",
      "upvotes": 138,
      "github_stars": 12,
      "github_repo": "https://github.com/liushiliushi/Learn2Play-Bench",
      "project_page": "https://liushiliushi.github.io/learn2play-bench-website/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.08215",
      "arxiv_url": "https://arxiv.org/abs/2610.08215",
      "title_ja": "Learn2Play Bench：LLMエージェントは未知の環境で経験からいかに学ぶか？",
      "summary_ja": "既存知識に頼れない新規または反直観的なルールのゲームを通じて、エージェントの純粋な学習能を評価。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 132,
      "github_stars": 18,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex：視覚に接地した反応的人型ロボット制御",
      "summary_ja": "飛んでくる箱のキャッチなど、一人称視点での全身協調によるリアルタイムな反応動作を実現。"
    },
    {
      "id": "2610.12242",
      "title": "TokenRouter: Efficient Serving System for Token-Level LLM Routing",
      "abstract": "Large language model (LLM) routing distributes inference work across different models, advancing the cost-quality Pareto frontier of LLM serving. While coarse-grained routing at the session or query level has been widely adopted in production systems, recent algorithmic work shows that fine-grained token-level routing can yield substantial efficiency and quality gains. However, efficiently serving token-level routed inference poses significant challenges to existing systems. Built on single-LLM assumptions, current systems suffer from severe step desynchronization and frequent batch admission delays under token-level routing, and they also impose high implementation complexity on developers. To address these challenges, we design TokenRouter, an efficient and developer-friendly serving system for token-level routed LLM inference. TokenRouter follows the principle of request-centric programming, model-centric execution: developers describe routing logic from the perspective of a single request, while the runtime launches a subserver for each LLM and dispatches requests asynchronously. Each subserver employs a delayed-batching scheduler, whose optimal hyperparameters are derived from a mathematical throughput model of the system. Across diverse routing algorithms, workloads, and model pairs, TokenRouter achieves 2.01-64.15x higher decoding throughput than existing systems, substantially advancing the serving efficiency of token-level LLM routing. Our code is available at https://github.com/thu-nics/TokenRouter.",
      "upvotes": 130,
      "github_stars": 52,
      "github_repo": "https://github.com/thu-nics/TokenRouter",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/tokenrouter/",
      "comments": 2,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.12242",
      "arxiv_url": "https://arxiv.org/abs/2610.12242",
      "title_ja": "TokenRouter：トークンレベルのLLMルーティングのための効率的な推論システム",
      "summary_ja": "複数モデルへのトークン単位の振り分けで生じる遅延や同期の課題を解決し、推論の効率と質を向上。"
    },
    {
      "id": "2609.38169",
      "title": "STEPQuant: When and Where Errors Matter in Delta-Rule Recurrent State Quantization",
      "abstract": "Linear attention replaces growing KV caches with fixed-size recurrent states, yet these persistent states can become a substantial memory bottleneck under concurrent serving. Directly quantizing recurrent states to low precision often leads to severe accuracy degradation, as quantization errors propagate through successive state updates. We discover that the impact of these errors depends on two complementary dimensions: temporally, errors in long-lived memory can persist across many decoding steps; spatially, errors in different key rows affect model outputs differently, while state magnitudes vary substantially along both rows and columns. Motivated by these observations, we propose STEPQuant, a spatial-temporal post-training quantization framework for Delta-rule recurrent states. STEPQuant allocates precision according to error magnitude and memory lifetime, and jointly fits key-row and value-column scales based on state distributions and key-row impact on output error. Experiments on Qwen3.8-27B and Kimi-Linear-48B-A3B-Instruct across both long- and short-generation benchmarks show that STEPQuant closely matches FP32-state accuracy under a nominal 6-bit budget and outperforms uniform INT8 in its 4-bit configuration. Integrated into SGLang with optimized GPU kernels, 6-bit STEPQuant achieves over 5x recurrent-state compression and reduces total serving memory by up to 68.7%. Our code is available at https://github.com/Dreamer-Toby/STEPQuant.",
      "upvotes": 130,
      "github_stars": 101,
      "github_repo": "https://github.com/Dreamer-Toby/STEPQuant",
      "project_page": "",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2609.38169",
      "arxiv_url": "https://arxiv.org/abs/2609.38169",
      "title_ja": "STEPQuant：デルタルール再帰状態量子化における誤差の影響分析",
      "summary_ja": "線形注意機構の再帰状態における時間的・空間的な誤差の影響を考慮し、精度劣化を抑えた低精度量子化。"
    },
    {
      "id": "2610.08699",
      "title": "nanoMuse: An Open-Source Personal Agent for Every Device You Own",
      "abstract": "Assistants from 2011 answered and waited, and agents from 2023 did a task and stopped. In September 2026 Meta's Muse showed an agent for one person, with accounts, devices, memory and a conversation that lasts, closed, in a vendor's cloud, in one country. Such an agent is expected to act on a person's accounts and devices, remember them across weeks, speak first when it is worth it, and answer for what it did. It is a kind of software, not a model, and until now had no open counterpart. This report defines the personal agent in five questions and three horizons. It reads how Muse is built from Meta's public record and a copy of its production prompt, each statement marked by its source. It then presents nanoMuse, the open-source counterpart under the GPL-3.0, one agent on every device a person owns, with hands on the phone's screen and the computer's. They share one conversation over a relay anyone can run; every action goes through a Sentinel, memory is files the person can read, and the model is their choice. Its size and cost are given as estimates. What is open, memory with provenance, an evaluation suite for the hands and an open model for them, is set out as a roadmap.",
      "upvotes": 111,
      "github_stars": 967,
      "github_repo": "https://github.com/nano-muse/nanoMuse",
      "project_page": "https://nanomuse.cn/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.08699",
      "arxiv_url": "https://arxiv.org/abs/2610.08699",
      "title_ja": "nanoMuse：あらゆるデバイスのためのオープンソース個人用エージェント",
      "summary_ja": "所有者のデバイスやアカウントを操作し、長期間の記憶と自発的な対話を行うエージェントの概念と実装。"
    },
    {
      "id": "2610.10528",
      "title": "Long-WAM: Scaling the Context of World-Action Models",
      "abstract": "Real-time robot control demands enough visual history to infer motion and task progress, but processing that history can delay action. We present Long-WAM, a model-system framework for scaling the context of causal world-action models under real-time control constraints. Our central finding is that access to history is not the same as using it: longer histories pay off far more when the video foundation is pretrained autoregressively (AR). We first learn causal prediction from robot and egocentric videos without action labels, then preserve this history-to-future structure during world-action adaptation. On RoboCasa GR-1, increasing context from 0.0 to 19.2 seconds raises success from 63.3% to 78.7%, whereas a bidirectionally pretrained initialization shows no net gain; robot-domain AR pretraining further raises peak success on GR-1 and LIBERO-Long. Long-WAM also achieves the best results among compared methods on LIBERO-Long, RoboTwin 2.0, and DOMINO. Streaming observation encoding, asynchronous execution, and hardware-specific acceleration enable deployment on RTX 5090, DGX Spark, and Jetson AGX Thor without dropping future prediction; on RTX 5090, each action chunk, including future-video latent prediction, takes 107.4 ms. Real-time deployment on Unitree G1 and YAM supports dynamic and long-horizon manipulation, including 95% success on dynamic cup stacking, where Pi0.5 and Fast-WAM succeed in none of 20 trials. As a memory-informed executor, Long-WAM also complements higher-level planning in composite tasks.",
      "upvotes": 109,
      "github_stars": 2767,
      "github_repo": "https://github.com/NVlabs/LongLive",
      "project_page": "https://nvlabs.github.io/LongLive/Long-WAM/",
      "comments": 3,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.10528",
      "arxiv_url": "https://arxiv.org/abs/2610.10528",
      "title_ja": "Long-WAM：世界行動モデルのコンテキスト拡張",
      "summary_ja": "ロボット制御において、自己回帰事前学習により最大約20秒の視覚履歴を有効活用し成功率を向上。"
    },
    {
      "id": "2610.06100",
      "title": "From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation",
      "abstract": "Realistic environment replicas are increasingly valuable for training and evaluating LLM agents, yet the original systems may be inaccessible or impractical to reproduce. We explore agentic language world modeling: rather than rebuilding an executable environment, a world model agent serves as the environment for a task agent and supports faithful and stateful simulation. We instantiate this paradigm with Trace2Env, a learning-free framework for settings where the original system is unavailable but historical interaction traces remain accessible. Trace2Env reconstructs these traces into a reusable environment worldbook containing environment schemas, grounded evidence, and induced behavioral knowledge. At runtime, the world model agent actively consults the worldbook together with persistent episodic state to infer each action's observation and lasting state effects. Across nine environments, Trace2Env improves both next-observation fidelity and long-horizon interaction consistency over conventional prompt-based LWMs. In multi-turn interaction, task agent actions generated against Trace2Env remain valid more often when replayed in the real environment, indicating that its simulated dynamics better preserve the consequences of earlier actions across successive turns. These results establish agentic language world modeling as an alternative direction for building realistic environment replicas without reconstructing the original executable system.",
      "upvotes": 105,
      "github_stars": 51,
      "github_repo": "https://github.com/ruyue0001/trace2env",
      "project_page": "https://quanyulong.net/trace2env/",
      "comments": 2,
      "org": "Nanyang Technological University Singapore",
      "url": "https://huggingface.co/papers/2610.06100",
      "arxiv_url": "https://arxiv.org/abs/2610.06100",
      "title_ja": "トレースからエージェント的世界へ：対話型環境シミュレーションのための世界モデル",
      "summary_ja": "システムが未入手でも過去の対話ログから、タスク学習用の忠実で状態保持可能な仮想環境を再構築する。"
    },
    {
      "id": "2610.03543",
      "title": "DuoMatching: Joint-Marginal Distribution Matching for Few-Step Video Generation",
      "abstract": "Streaming video generation has benefited from distribution matching distillation (DMD), which matches the joint distribution of video frames to a video teacher's approximation of the real video distribution. Although this joint matching mitigates drift during autoregressive rollouts, limitations remain in visual quality and semantic alignment. To address these limitations, we propose DuoMatching, a distribution matching framework that approximates the real video distribution through a unified joint-marginal formulation. On top of existing joint matching formulations, the additional marginal matching objective provides dedicated frame-level supervision from an image generator, transferring complementary visual and semantic priors from it. To apply this frame-level supervision in video generation, we introduce LatentBridge to resolve the latent representation mismatch between the video student and the image teacher. Latent Variation Sampling further distributes such frame-level supervision across distinct temporal segments, reducing redundancy. Experiments demonstrate that DuoMatching improves visual quality, composition, and semantic alignment while largely preserving motion dynamics. Human evaluations show overall preference rates above 80% against all evaluated baselines. The project page is available at https://johnzhan2023.github.io/DuoMatching/.",
      "upvotes": 100,
      "github_stars": 51,
      "github_repo": "https://github.com/JohnZhan2023/DuoMatching",
      "project_page": "https://johnzhan2023.github.io/DuoMatching/",
      "comments": 2,
      "org": "ByteDance",
      "url": "https://huggingface.co/papers/2610.03543",
      "arxiv_url": "https://arxiv.org/abs/2610.03543",
      "title_ja": "DuoMatching：少ステップ動画生成のための結合・周辺分布マッチング",
      "summary_ja": "動画全体と各フレーム単位の分布を同時にマッチングさせ、視覚品質と意味的一致を高めた動画生成。"
    },
    {
      "id": "2610.08621",
      "title": "Recursive Game Creator: An Agentic Product-Level Experience-Oriented Game Harness",
      "abstract": "Recent game design agents have made substantial progress in generating playable games. However, program correctness does not ensure an enjoyable experience for players. We present Recursive Game Creator, an experience-oriented harness to advance agentic game development from rough game prototypes into entertaining games. Recursive Game Creator organizes recursive development around four components: Designer, Builder, Player, and Reviewer. The Designer translates user instructions and Reviewer's feedback into detailed plans. The Builder turns these plans into candidate games. The coding-native Player creates and executes reusable policies through programmatic interfaces to efficiently collect diverse gameplay trajectories, mitigating evaluation bias caused by slow GUI-based collection. The Reviewer uses carefully designed trajectory-based metrics to induce player preferences, integrating with visual evidence and explicit textual preferences to evaluate games against game-specific criteria. Finally, the Reviewer accepts the better version and provides improvement reviews for the next round, closing the recursive loop. Our method achieves state-of-the-art overall performance of 77.89 on GameCraft-Bench. On GameASG-Bench, it achieves a strict task success rate of 53.2%, a 34.1% improvement over the same-model baseline, and the highest mean runtime-check pass rate at 93.4% among compared methods. A user study shows longer playtime and higher ratings. Code is coming soon.",
      "upvotes": 92,
      "github_stars": 56,
      "github_repo": "https://github.com/IMBALDY/RecursiveGameCreator",
      "project_page": "https://imbaldy.github.io/recursive-game-creator",
      "comments": 2,
      "org": "The University of Hong Kong",
      "url": "https://huggingface.co/papers/2610.08621",
      "arxiv_url": "https://arxiv.org/abs/2610.08621",
      "title_ja": "Recursive Game Creator：エージェントによる体験志向のゲーム開発基盤",
      "summary_ja": "設計・構築・プレイ・評価の4役割を循環させ、単なる動作の正しさだけでなく楽しさを追求したゲーム制作。"
    },
    {
      "id": "2610.07767",
      "title": "TRACE: Rollout-Guided Quantization-Aware Training for FP4 Reinforcement Learning of MoE Language Models",
      "abstract": "Reinforcement learning (RL) for post-training large language models (LLMs) incurs substantial computation and memory overhead during rollout generation, which motivates low-precision rollout for efficient RL training. However, existing FP4 RL methods suffer from a key limitation: they primarily optimize quantization accuracy on the training and rollout paths independently rather than directly reducing the discrepancy between the two quantized execution paths. In this work, we propose TRACE (Train-Rollout Quantization Alignment via Compact GuidancE), an FP4 quantization framework for RL training of Mixture-of-Experts (MoE) language models that addresses the limitation of existing FP4 RL methods. TRACE incorporates rollout-guided quantization-aware training that uses rollout-side quantization outcomes to guide training-side FP4 rounding decisions, directly reducing train-rollout discrepancy. Moreover, TRACE adopts an efficient quantization-information caching scheme that selectively retains mantissa and scale information from deeper layers to reduce the storage and communication overhead introduced by rollout guidance. We evaluate TRACE on four large-scale MoE language models across reasoning, coding, and long-horizon RL tasks. Our results demonstrate that TRACE enables joint FP4 weight/activation and FP4 KV-cache rollout with RL performance comparable to BF16 rollout, while achieving up to 5.4xrollout speedup and strong final FP4 performance compared with post-hoc FP4 quantization of BF16-trained policies.",
      "upvotes": 92,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Qwen",
      "url": "https://huggingface.co/papers/2610.07767",
      "arxiv_url": "https://arxiv.org/abs/2610.07767",
      "title_ja": "TRACE：MoE言語モデルの強化学習におけるFP4量子化対応学習",
      "summary_ja": "学習時と生成時の量子化パスの不一致を低減し、省メモリなFP4でのRLトレーニングを安定化。"
    },
    {
      "id": "2610.10524",
      "title": "GRACE: Generation-aware latent compression for efficient video generation",
      "abstract": "Highly compressed video autoencoders offer an effective way to accelerate video diffusion models, as the Diffusion Transformer (DiT) operates on far fewer tokens. However, such autoencoders are challenging to train, since a higher compression ratio degrades reconstruction quality and recovering it requires more channels, which is known to slow the convergence of the DiT. The compressed latent also differs from the one the DiT was trained on, so the pretrained DiT must be either retrained from scratch or adapted at considerable cost. Compressing the autoencoder the DiT was trained with appears to preserve compatibility, yet optimizing it for reconstruction alone still shifts the latent away from the distribution the DiT has learned. To address this, we propose Generation-Aware Latent Compression for Efficient Video Generation (GRACE), a two-stage framework that compresses a pretrained video autoencoder while keeping it compatible with the pretrained DiT. Specifically, we keep a frozen base latent from the pretrained encoder and learn a residual latent for the information lost under stronger compression, while aligning the compressed latent with the pretrained latent in the feature space of the frozen DiT so that the autoencoder is optimized for generation. We then adapt the DiT with lightweight fine-tuning and asymmetric denoising, where the base is denoised ahead of the residual. GRACE reduces the token count of Wan2.1-I2V-14B by 8x and its latency by 11.1x at 480x832x81, while matching the generation quality of the pretrained pipeline before compression on VBench.",
      "upvotes": 88,
      "github_stars": 25,
      "github_repo": "https://github.com/cvlab-kaist/GRACE",
      "project_page": "https://cvlab-kaist.github.io/GRACE/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.10524",
      "arxiv_url": "https://arxiv.org/abs/2610.10524",
      "title_ja": "GRACE：効率的な動画生成のための生成を考慮した潜在空間圧縮",
      "summary_ja": "学習済みDiTとの互換性を保ちつつ、再構成精度を維持した高倍率な潜在空間圧縮を実現する。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 85,
      "github_stars": 16,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym：多様な合成ソフトウェア環境によるPC操作エージェントの学習拡張",
      "summary_ja": "実行可能なGUIアプリを自動合成するパイプラインにより、多様で信頼性の高いエージェント学習を可能にする。"
    },
    {
      "id": "2610.07967",
      "title": "DecepEval: A Benchmark for Evaluating Deception in LLM Agents",
      "abstract": "As large language model (LLM) agents become increasingly autonomous, they may pursue task performance through deception, raising concerns about their reliable deployment. Existing evaluations show that LLM agents can deceive, but often examine isolated scenarios or narrowly defined conditions, limiting systematic understanding of when deception becomes more likely. To address this gap, we introduce DecepEval, a benchmark comprising 1,532 instances across 3 task families and 28 professional scenarios. Drawing on classical fraud theories, we propose the LLM Deception Diamond framework, which characterizes four external conditions that may induce deception: pressure, incentive, opportunity, and conflict. DecepEval pairs neutral and induced versions of each instance to measure condition-dependent changes in deception rates, while explicit task facts and observable agent behavior help distinguish deception from capability-related errors. Evaluations of nine frontier LLMs show that inducements increase deception across models and task families, even among models with low baseline deception rates. DecepEval makes these vulnerabilities measurable, providing a shared benchmark for progress toward trustworthy artificial intelligence.",
      "upvotes": 84,
      "github_stars": 5,
      "github_repo": "https://github.com/functy/DECEPEVAL",
      "project_page": "",
      "comments": 1,
      "org": "Xi'an Jiaotong University",
      "url": "https://huggingface.co/papers/2610.07967",
      "arxiv_url": "https://arxiv.org/abs/2610.07967",
      "title_ja": "DecepEval：LLMエージェントの欺瞞性を評価するベンチマーク",
      "summary_ja": "圧力やインセンティブなどの外部条件が、エージェントの欺瞞行為をいかに誘発するかを体系的に評価。"
    },
    {
      "id": "2610.04299",
      "title": "Questioning the Questions: Sustaining Self-Evolution in Reasoning Models",
      "abstract": "Self-evolving reasoning models learn from their own generated questions, yet repeated self-training can lead to performance collapse. In this paper, we investigate why performance deteriorates over successive rounds and how to sustain self-evolution. Our analysis identifies two recurring quality problems in self-generated questions: invalid questions and repeated variants of the same mathematical questions. First, invalid questions become more prevalent across rounds, and answer-consistency filtering further increases their proportion in training data. Second, existing question diversity controls based on lexical similarity can miss mathematically equivalent questions expressed in different ways, which leads to question diversity collapse in later training rounds. Building on these findings, we introduce R-Quest, which uses question validity and novelty feedback to guide self-evolution. We first train the solver to recognize and reject invalid questions, then use its judgments to guide questioner rewards and filter solver training data. To avoid question repetition, we use a frozen base model to compare sampled question pairs and provide novelty feedback. Empirically, our method consistently achieves the highest average performance on 12 benchmarks in mathematical reasoning, general-domain reasoning, and code generation across two model families. Additionally, R-Quest maintains stable performance gains over ten rounds of self-evolution, peaking in the final round and outperforming R-Zero by 17.32 points.",
      "upvotes": 82,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://jinyuanli0012.github.io/R-Quest/",
      "comments": 2,
      "org": "Huang's INTelligence lab",
      "url": "https://huggingface.co/papers/2610.04299",
      "arxiv_url": "https://arxiv.org/abs/2610.04299",
      "title_ja": "問いへの問い：推論モデルにおける自己進化の持続",
      "summary_ja": "自己生成した問題の無効性や重複を分析し、繰り返し学習による性能低下を防ぐための手法を探求。"
    },
    {
      "id": "2610.11959",
      "title": "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement",
      "abstract": "Reinforcement learning (RL) is the central training paradigm for advancing large foundation models towards self-improvement. This report introduces the MiMo-V2.6 series, an omni-modal family that pushes the frontier of model intelligence by scaling RL compute. Prior to RL, we conduct mid-training on a broad multimodal corpus to provide ample exploration space, and build a solid infrastructure on the pretrained hybrid-SWA architecture to support subsequent scale-up. We scale RL compute along three dimensions: (1) larger batches and higher throughput, with an asynchronous training that consumes 1,568 samples and 2.7-3.7B tokens per step at context lengths of up to 1M; (2) more diverse and complex environments, spanning code, general, visual, and cyber domains under a mixture of agent harnesses; and (3) more grader compute, via groupwise agentic grading that yields more accurate reward signals for long-horizon tasks and steers the model towards shorter, more token-efficient solutions. To keep training stable at scale, we freeze the MoE router and establish a multi-layer defense against reward hacking. We further build infrastructure for mixed-task agentic RL, including a unified trajectory representation, high-concurrency multi-framework rollout, decoupled control and data planes, and training-inference consistency. We open-source the training dynamics, RL environments, and RL framework to facilitate reproduction and further research on scaled RL and model self-improvement.",
      "upvotes": 76,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Xiaomi MiMo",
      "url": "https://huggingface.co/papers/2610.11959",
      "arxiv_url": "https://arxiv.org/abs/2610.11959",
      "title_ja": "MiMo-V2.6：自己改善に向けた強化学習のスケールアップ",
      "summary_ja": "オムニモーダルモデルにおいて、RLの計算量とデータ多様性を拡張し自己改善能力を向上させた報告。"
    },
    {
      "id": "2610.12126",
      "title": "SuperNav: An Agentic Navigation System for Any Task in Any Scene",
      "abstract": "General-purpose service robots need navigation systems that can handle diverse human requests in unfamiliar environments, combining task generality with scene generality. Some existing methods fine-tune multimodal large language models (MLLMs) to predict navigation actions, making their behavior dependent on the coverage of navigation training data and potentially limiting generalization to new requests and environments. Our key insight is to let the MLLM focus on interpreting requests, understanding scenes, and making decisions while preserving its general-purpose capabilities and delegating motion execution to navigation tools. To realize this idea, we introduce SuperNav, which equips a pretrained MLLM with a specialized agent harness without navigation-specific fine-tuning of the MLLM. Our harness supports these decisions with Navigation Skills, agent-oriented Tools for physical interaction, and task-progress and context management. A unified visual-point interface connects decision-making to motion by allowing the model to specify destinations directly in images and revise its decisions from execution feedback. Together, these components support sustained navigation across different task requirements and environments. SuperNav outperforms four evaluated baselines on instance-level, multi-object, and demand-driven tasks. Category-level evaluation on HM3D and deployment on a real quadruped robot further demonstrate its applicability across environments. Project Page: https://zju3dv.github.io/SuperNav/",
      "upvotes": 75,
      "github_stars": 143,
      "github_repo": "https://github.com/zju3dv/SuperNav",
      "project_page": "https://zju3dv.github.io/SuperNav/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.12126",
      "arxiv_url": "https://arxiv.org/abs/2610.12126",
      "title_ja": "SuperNav：あらゆるシーン・タスクに対応するエージェント型ナビゲーション",
      "summary_ja": "MLLMを意思決定に特化させ、移動を外部ツールに委託することで、未知の環境や要求への汎用性を確保。"
    },
    {
      "id": "2610.02054",
      "title": "UniWAM: Unified World-Action Model",
      "abstract": "Vision-language-action models benefit from the understanding and reasoning capabilities of pretrained vision-language models, but action-only supervision provides limited grounding in world dynamics. Conversely, world-action models inherit spatiotemporal priors from video generation models, yet remain limited in semantic understanding and reasoning under distribution shifts. We introduce UniWAM, a unified architecture that integrates a physical reasoner, a world generator, and an action predictor to jointly learn semantic understanding of the physical world, visual generation, and action prediction. To ensure the quality of the training data, we developed a rigorous data cleaning and annotation pipeline for both human egocentric data and robot data. To adapt the vision-language component to embodied tasks while preserving its inherited language capabilities, we represent low-level actions in natural language and introduce a pre-training recipe that assigns complementary supervision from visual question answering (VQA) data, human egocentric data, and robot demonstrations to the appropriate model components. During post-training, future visual noise augmentation reduces reliance on precise future predictions, while history-conditioned flow matching uses encoded action history to initialize action generation. Together, these designs significantly reduce denoising steps while maintaining performance. UniWAM achieves state-of-the-art (SOTA) performance across multiple evaluations, including in-distribution performance, robustness, generalization, instruction following, and long-horizon task execution. Furthermore, we uncover a log-linear scaling law of unified human-robot co-training, demonstrating the effectiveness of large-scale pre-training on a mixture of human and robot data.",
      "upvotes": 73,
      "github_stars": 116,
      "github_repo": "https://github.com/UniWAM/UniWAM",
      "project_page": "https://uniwam.github.io/",
      "comments": 3,
      "org": "HKUSTGZ",
      "url": "https://huggingface.co/papers/2610.02054",
      "arxiv_url": "https://arxiv.org/abs/2610.02054",
      "title_ja": "UniWAM：統合された世界行動モデル",
      "summary_ja": "物理推論、視覚生成、行動予測を一つのアーキテクチャに統合し、物理世界の理解と操作を同時に学習。"
    },
    {
      "id": "2610.07557",
      "title": "CheckerBench: Can Long-Horizon Agents Synthesize Static-Analysis Checkers?",
      "abstract": "Static-analysis checker synthesis requires agents to interpret a defect specification, inspect a repository, implement analyzer-specific logic, and refine the checker through repeated compilation and analysis feedback. Existing coding-agent benchmarks focus on tasks such as patch generation or vulnerability detection and rarely assess whether an agent can develop a working checker in a repository from start to finish. We introduce CheckerBench, an executable benchmark of 300 tasks derived from 297 CVEs across 167 repositories, 85 CWEs, and five language ecosystems. Each task includes vulnerable and fixed revisions, a pinned analysis environment, and a checker scaffold. We further introduce CheckerLab, a common evaluation framework that independently rebuilds submitted checkers and measures vulnerable-fixed diagnostic contrast, patch localization, false positives, and tool use. Across 21 model-harness configurations and three independent repeats per configuration, mean Pass@1 is 32.30%, while the best reaches 45.33%. These results show that reliable, reusable checker development remains challenging for current coding agents.",
      "upvotes": 69,
      "github_stars": 2,
      "github_repo": "https://github.com/ahang0712/CheckerBench-Dataset",
      "project_page": "",
      "comments": 2,
      "org": "Humanlaya Data Lab",
      "url": "https://huggingface.co/papers/2610.07557",
      "arxiv_url": "https://arxiv.org/abs/2610.07557",
      "title_ja": "CheckerBench：長期推論エージェントは静的解析チェッカーを作成できるか？",
      "summary_ja": "仕様解釈からリポジトリ内の実装まで、動作する静的解析ツールの開発能力を測る実行型ベンチマーク。"
    },
    {
      "id": "2610.13021",
      "title": "EmbodiedCLBench: Evaluating Continual Learning for Self-Evolving Embodied Agents",
      "abstract": "Continual learning requires models to accumulate past experience and transfer it to new tasks. Despite substantial research on continual learning, existing work remains largely confined to non-embodied settings, without extending to embodied environments. To address this gap, we introduce EmbodiedCLBench, the first benchmark in embodied simulation for evaluating the continual learning capability of self-evolving agents. With compositional generalization as the core evaluation principle, our benchmark evaluates whether agents can first learn from basic tasks and then recombine the acquired skills to solve complex, unseen advanced tasks. Based on EmbodiedCLBench, we conduct extensive experiments across multiple agent harnesses and learning methods, revealing consistent limitations and distinctive behaviors. Our results show that while advanced tasks can be hardly solved under zero-shot setting, the experience from basic tasks enables consistent improvement. Such benefit from the experience remains stable even if the task complexity increases. However, this improvement does not scale accordingly with the number of learning samples, and current agents cannot extract meaningful information from additional experience. Collectively, our findings highlight continual learning as a fundamental yet underexplored capability, and our benchmark offers valuable resources for designing effective self-evolving agents in embodied environments. Our code and dataset are available at https://pku-value-lab.github.io/EmbodiedCLBench-homepage.",
      "upvotes": 63,
      "github_stars": 12,
      "github_repo": "https://github.com/PKU-VaLuE-Lab/EmbodiedCLBench",
      "project_page": "https://pku-value-lab.github.io/EmbodiedCLBench-homepage/",
      "comments": 3,
      "org": "PKU-VaLuE-Lab",
      "url": "https://huggingface.co/papers/2610.13021",
      "arxiv_url": "https://arxiv.org/abs/2610.13021",
      "title_ja": "EmbodiedCLBench：自己進化型エージェントの継続学習の評価",
      "summary_ja": "基礎タスクで得たスキルを未知の複雑なタスクへ再構成し適用できるか、継続学習能力を測る評価基盤。"
    },
    {
      "id": "2610.06293",
      "title": "VepAgent: Bridging Causal-Transition via Tool-Augmented Reinforcement Learning for Video Event Prediction",
      "abstract": "Multimodal Large Language Models (MLLMs) have demonstrated remarkable potential in video understanding, yet their reliance on retrospective summarization and text-centric priors often limits their ability to bridge unobserved causal transitions when applied to Video Event Prediction (VEP). To address this, we propose VepAgent, an agentic framework that integrates causal-transition reasoning with tool-augmented reinforcement learning (RL) for robust VEP. Unlike prior methods that passively project future trajectories from historical dependencies, our approach explicitly models the logical progression from terminal observed states to future events. Specifically, we first construct futurebench-4K, a high-quality chain-of-thought dataset for supervised fine-tuning (SFT) that effectively bridges the causal-logic gap by structuring the deduction of unobserved intermediate states. Subsequently, we develop a diagnostic tool library integrating state tracking, frame retrieval, and region magnification, enabling the agent to dynamically augment reasoning with external tools to recover missing spatio-temporal evidence and resolve visual ambiguities during inference. Moreover, we propose a composite reward mechanism that jointly optimizes prediction accuracy, causal coherence, and reliable prior, compelling the agent to rely on genuine visual grounding rather than superficial textual similarities. Extensive evaluations on FutureBench and NEPBench datasets demonstrate that our method achieves state-of-the-art performance, significantly outperforming larger MLLMs and validating the empirical effectiveness of our agentic, future-oriented reasoning paradigm.",
      "upvotes": 61,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "UCSC-VLAA",
      "url": "https://huggingface.co/papers/2610.06293",
      "arxiv_url": "https://arxiv.org/abs/2610.06293",
      "title_ja": "VepAgent：ツール拡張強化学習による動画イベント予測の因果遷移の橋渡し",
      "summary_ja": "観測終了後の未学習な因果の推移を明示的にモデル化し、RLを用いて動画の未来予測精度を高める。"
    },
    {
      "id": "2610.10429",
      "title": "SGF+: Decoupling Gradient Flows for Autoregressive Video Generation",
      "abstract": "Autoregressive video generation requires denoising the current frames while writing their key-value representations as context for future predictions. However, these two roles typically share parameters, and we find that their gradients exhibit distinct patterns and systematic negative alignment, hindering the joint optimization of visual quality and temporal consistency. We introduce Self Gradient Forcing Plus (SGF+), which assigns separate parameters to context writing and denoising while preserving their interaction through causal attention. Both roles are jointly optimized using the original generation objective without auxiliary losses, with context writing supervised through its contribution to future predictions. This simple change improves visual quality and long-horizon consistency over the evaluated baselines in both framewise and chunkwise generation, without additional video training data or a longer training horizon. Trained on only 5s rollouts, SGF+ supports continuous generation for up to 24 hours without long-video fine-tuning. These results highlight role-specific parameterization as an effective design principle for high-quality autoregressive video generation and native long-horizon extrapolation.",
      "upvotes": 58,
      "github_stars": 129,
      "github_repo": "https://github.com/Zihan-Su/Self_Gradient_Forcing_Plus",
      "project_page": "https://zihan-su.github.io/self-gradient-forcing-plus/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.10429",
      "arxiv_url": "https://arxiv.org/abs/2610.10429",
      "title_ja": "SGF+：自己回帰動画生成における勾配フローの分離",
      "summary_ja": "文脈保持とデノイズのパラメータを分離して最適化し、画質と時間的一貫性のトレードオフを解消。"
    },
    {
      "id": "2610.12299",
      "title": "Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction",
      "abstract": "Egocentric world models predict first-person observations conditioned on an agent's actions, but most focus on a single agent. Real embodied settings often involve multiple agents that act and interact within a shared environment. Existing multi-agent world models rely on coarse actions like locomotion, camera control, or discrete commands, leaving fine-grained embodied interactions underexplored. We formulate multi-agent egocentric world modeling as synchronized ego-stream generation for multiple agents interacting through fine-grained actions in a shared world. This requires cross-view action consistency, shared-environment consistency, and consistent propagation of interaction-induced state updates. We propose Multi-agent Egocentric World Model (ME-World), which jointly denoises multiple ego streams in a shared token sequence, conditions each stream on all agents' target-view poses, and grounds generation with shared environment memory. We train and evaluate on real and synthetic multi-agent data and introduce shared-world consistency metrics for environment, update, and identity consistency. Experiments show ME-World improves shared-world consistency, action control, identity preservation, and video quality over existing methods.",
      "upvotes": 56,
      "github_stars": 19,
      "github_repo": "https://github.com/cvlab-kaist/ME-World",
      "project_page": "https://cvlab-kaist.github.io/ME-World/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.12299",
      "arxiv_url": "https://arxiv.org/abs/2610.12299",
      "title_ja": "マルチエージェント一人称視点世界モデルと詳細な身体的相互作用",
      "summary_ja": "複数エージェントが共有環境で細かな行動を通じて相互作用する様子を、一貫性を持ってシミュレートする。"
    },
    {
      "id": "2610.02368",
      "title": "Rethinking World-Action Model for Compositional and In-Context Robotic Manipulation",
      "abstract": "Long-horizon compositional manipulation has become increasingly important for real-world robot deployment, where a single task involves multiple coordinated subtasks. Existing world-action models (WAMs) jointly predict short-horizon visual futures and actions, but typically lack explicit subtask-level reasoning. We propose Visual Goal-conditioned Action Reasoning (ViGAR), a hierarchical framework that factorizes manipulation into a visual subgoal planner and a subgoal executor. Given the current observation and global instruction, the subgoal planner predicts a visual subgoal for the next subtask. The subgoal executor then jointly generates future visual trajectories and actions conditioned on the predicted subgoal. Both components share a pretrained world-model representation, enabling task-level planning and action generation to benefit from common physical knowledge. Moreover, our framework naturally supports in-context learning: using a global goal image as context can induce different subtask decompositions and behaviors without parameter updates. On the RoboTwin Clean2Random benchmark, ViGAR achieves 82.00% and 67.02% success rates under the Clean and Random settings, respectively, surpassing the strongest baseline by 12.86 percentage points in average success rate. Real-world robot experiments on five compositional and two in-context learning tasks further confirm the effectiveness of ViGAR.",
      "upvotes": 56,
      "github_stars": 85,
      "github_repo": "https://github.com/DAGroup-PKU/ViGAR",
      "project_page": "https://dagroup-pku.github.io/ViGAR/#",
      "comments": 2,
      "org": "DAGroup-PKU",
      "url": "https://huggingface.co/papers/2610.02368",
      "arxiv_url": "https://arxiv.org/abs/2610.02368",
      "title_ja": "構成的・インコンテキストなロボット操作のための世界行動モデルの再考",
      "summary_ja": "階層的枠組みにより、視覚的なサブゴール計画とその実行を分離し、長期かつ複雑な操作タスクを実現。"
    },
    {
      "id": "2610.07987",
      "title": "VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs",
      "abstract": "Multimodal large language models have become the dominant paradigm for visual understanding, but incur substantial costs by encoding inputs into dense, fixed-size patch tokens. However, visual information is unevenly distributed: some regions require fine-grained detail, while others admit compact representations. Downsampling sacrifices this detail, while existing token pruning and adaptive approaches remain limited in content-adaptive granularity, task generalization, and integration with modern MLLMs and serving infrastructure. Overcoming these limitations calls for foundation models that learn, end to end, where-and at what granularity-to allocate visual representations, a native capability we term elastic visual representation weaving. We introduce VisionWeave, establishing this capability in frontier-level MLLMs through large-scale training. It combines two components: a gated spatial pooler constructs coarse-grained representations alongside native fine-grained representations within a shared MRoPE coordinate, while a granularity router learns their content-adaptive allocation. Through self-distillation alone, we validate this capability on Qwen3.5-4B and scale to Qwen3.8-27B with over 30K A100 GPU-hours. Based on Qwen3.8-27B, VisionWeave adaptively adjusts token savings to visual content, saving 43.0% tokens on average while retaining 98.9% native performance across eight benchmarks, versus only 88% performance preserved for token pruning baselines with a fixed 50% savings target. Extensive evaluations confirm robust efficiency-quality trade-offs across diverse tasks, resolutions and video frames. When deployed on SGLang serving engine, our method achieves a 2.3x throughput gain while reducing mean TTFT by 54.4% and mean TPOT by 60.6%. Together, we believe these results position elastic visual weaving as a promising capability for next-generation multimodal models.",
      "upvotes": 55,
      "github_stars": 44,
      "github_repo": "https://github.com/FFY0/VisionWeave",
      "project_page": "",
      "comments": 2,
      "org": "Qwen",
      "url": "https://huggingface.co/papers/2610.07987",
      "arxiv_url": "https://arxiv.org/abs/2610.07987",
      "title_ja": "VisionWeave：MLLMのネイティブ機能としての弾力的な視覚表現の編み込み",
      "summary_ja": "情報の重要度に応じて視覚トークンの粒度を動的に調整し、効率的かつ高精度な理解をエンドツーエンドで学習。"
    }
  ],
  "labs": [
    {
      "lab": "AlphaSignal",
      "title": "Mistral's Le Chonk Beats GPT-6-Astra at Pinpointing Objects in Images",
      "summary": "Mistral's trillion-parameter Le Chonk model hits 42% on Dense 200 visual grounding, edging past frontier closed models and targeting industrial inspection work.",
      "url": "https://alphasignal.ai/news/mistral-s-le-chonk-beats-gpt-6-astra-at-pinpointing-objects-in-images",
      "published": "2026-10-13T01:49:27+09:00",
      "title_ja": "MistralのLe Chonkが画像内オブジェクト特定でGPT-6-Astraを凌駕",
      "summary_ja": "1兆パラメータのLe Chonkが視覚的接地で42%を記録し、産業検査向けに他社を圧倒。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Z.ai Opens Gated Access to GLM-Legal, Its 320B Legal AI",
      "summary": "Z.ai has released GLM-Legal, a specialized model built on GLM-5.3-Flash that targets contract review, evidence analysis, and compliance workflows.",
      "url": "https://alphasignal.ai/news/z-ai-opens-gated-access-to-glm-legal-its-320b-legal-ai",
      "published": "2026-10-13T01:10:47+09:00",
      "title_ja": "Z.aiが320Bの法務特化AI「GLM-Legal」の限定アクセスを開始",
      "summary_ja": "GLM-5.3-Flashを基盤とし、契約書レビューや証拠分析、コンプライアンス業務に特化。"
    },
    {
      "lab": "AlphaSignal",
      "title": "UkisAI Squeezes Swift 1.5's 27B Reasoning Model Into 8.42GB for Consumer GPUs",
      "summary": "UkisAI released compact 2-bit and 3-bit GGUF quantizations of Swift 1.5 that run a 27B reasoning model in under 10GB while cutting thinking tokens by more than half.",
      "url": "https://alphasignal.ai/news/ukisai-squeezes-swift-1-5-s-27b-reasoning-model-into-8-42gb-for-consumer-gpus",
      "published": "2026-10-13T01:02:00+09:00",
      "title_ja": "UkisAIが27B推論モデル「Swift 1.5」を一般GPU向けに8.42GBへ圧縮",
      "summary_ja": "GGUF量子化により、10GB以下のメモリで動作させつつ思考トークンを半分以下に削減。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's QwenGyre Trains Hour-Long AI Agents 1.85x Faster",
      "summary": "Alibaba's Qwen team unveils an elastic RL framework that trains agents on hours-long tasks, cutting training time by up to 44% while lifting repo-generation accuracy by 6 points.",
      "url": "https://alphasignal.ai/news/alibaba-s-qwengyre-trains-hour-long-ai-agents-1-85x-faster",
      "published": "2026-10-12T22:11:37+09:00",
      "title_ja": "AlibabaのQwenGyre、長時間AIエージェントの学習を1.85倍高速化",
      "summary_ja": "弾力的なRL枠組みで学習時間を最大44%短縮し、リポジトリ生成精度も6ポイント向上。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Bartowski Packs Qwen2.5-32B Into a 9GB File for Local Machines",
      "summary": "A full set of imatrix GGUF quantizations lets you run Qwen2.5-32B-Instruct locally, from a 9GB phone-friendly build up to lossless 65GB weights.",
      "url": "https://alphasignal.ai/news/bartowski-packs-qwen2-5-32b-into-a-9gb-file-for-local-machines",
      "published": "2026-10-12T22:02:14+09:00",
      "title_ja": "BartowskiがQwen2.5-32Bをローカル環境向けに9GBへ軽量化",
      "summary_ja": "imatrix GGUF量子化により、スマホ対応の9GB版からロスレス版まで利用可能。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Alibaba's Qwen-Image-2.1 Hits 2.1M Downloads as Uncensored Port Targets Consumer GPUs",
      "summary": "A community release packages Qwen-Image-2.1 into GGUF, FP8, NVFP4 and MLX formats with no safety filter, pulling 2.1M downloads.",
      "url": "https://alphasignal.ai/news/alibaba-s-qwen-image-2-1-hits-2-1m-downloads-as-uncensored-port-targets",
      "published": "2026-10-12T18:29:43+09:00",
      "title_ja": "AlibabaのQwen-Image-2.1、検閲解除版が210万ダウンロードを記録",
      "summary_ja": "安全フィルターを除去しGGUFやMLX形式にパッケージ化された版が一般GPU向けに普及。"
    },
    {
      "lab": "Apple ML",
      "title": "Large Language Models for Machine Translation Quality Annotation: Humans and Models Are Both Challenged",
      "summary": "Large Language Models (LLMs) are considered to be a more efficient and cost-effective alternative to human judgment for Machine Translation (MT) evaluation. With MT evaluation spanning a large number of language pairs, domains and levels of annotation granularity, LLMs must be thoroughly evaluated across these dimensions before being reliably used as alternatives to human evaluation. In this paper, we evaluate the performance of LLMs for two prominent MT quality evaluation schemes: Multidimensional Quality Metrics (MQM) and Error Span Annotation (ESA) by comparing their agreement with human…",
      "url": "https://machinelearning.apple.com/research/llm-translation-quality-annotation",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "機械翻訳の品質注釈におけるLLM：人間とモデルの双方が直面する課題",
      "summary_ja": "MQMやESAなどの品質評価手法において、LLMが人間の代替となり得るかを多角的に検証。"
    },
    {
      "lab": "Apple ML",
      "title": "Minions: A Dynamic and Distributed Virtual GPU Cloud Built on Idle Apple Silicon Devices",
      "summary": "The increasing demand for GPU-accelerated machine learning inference has exposed limitations in centralized GPU infrastructures, including high cost, limited elasticity, and long wait times under resource constraints. At the same time, modern Apple Silicon–based macOS devices are equipped with powerful GPUs that remain largely idle during normal usage. This paper presents Minions, a dynamic and distributed virtual GPU cloud that aggregates idle Apple Silicon GPUs across macOS devices to execute large-scale machine learning inference workloads. Minions enables teams to leverage existing…",
      "url": "https://machinelearning.apple.com/research/distributed-gpu-cloud",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "Minions：休止中のApple Silicon端末を活用した分散型仮想GPUクラウド",
      "summary_ja": "macOS端末のアイドル状態のGPUを統合し、大規模なAI推論を実行可能にする仕組み。"
    },
    {
      "lab": "Apple ML",
      "title": "Self-Compacting Language Model Agents",
      "summary": "Long agent traces composed of chains of thought and tool calls accumulate stale content that anchor subsequent generations, and eventually outgrow the context window. Existing scaffolds mitigate it with fixed-interval compaction triggered at a token threshold. Such triggers pay no heed to trajectory structure, risking discard of partial results mid-derivation or mid-search.  We propose SELFCOMPACT, a scaffold that allows the model itself to decide when and how to compact. Specifically, it pairs two inference-time elements: (i) a compaction tool the model invokes to summarize the accumulated…",
      "url": "https://machinelearning.apple.com/research/self-compacting-language-agents",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "自己圧縮型言語モデルエージェント",
      "summary_ja": "モデル自身が適切なタイミングで履歴を要約し、文脈制限を超えないよう制御する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Impactful scheduling for GPU clusters",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/impactful-scheduling",
      "published": "2026-10-10T00:20:29+09:00",
      "title_ja": "GPUクラスターのための効果的なスケジューリング",
      "summary_ja": "GPUクラスターの運用においてインパクトのあるスケジューリング方法を提示。"
    },
    {
      "lab": "OpenAI",
      "title": "Sophos cuts threat investigation time by 96% with OpenAI Daybreak",
      "summary": "Discover how Sophos uses OpenAI’s Daybreak to cut cyber-threat investigation time by 96% and automate 52% of MDR cases while preserving human oversight.",
      "url": "https://openai.com/index/sophos",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "Sophos、OpenAI Daybreakで脅威調査時間を96%短縮",
      "summary_ja": "サイバー脅威調査の劇的な高速化に加え、MDR案件の52%を自動化しつつ人間が監視。"
    },
    {
      "lab": "OpenAI",
      "title": "Asana cuts model costs 76x in browser tests with GPT-6.1 Sol",
      "summary": "Using GPT-6 Astra in Codex, Asana made its browser agent 76x cheaper and 5x faster in tests to offer customers more capable models.",
      "url": "https://openai.com/index/asana-browser-agent",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "Asana、GPT-6.1 Solを用いたブラウザテストでモデルコストを76分の1に削減",
      "summary_ja": "GPT-6 AstraをCodexで活用し、コストを大幅削減しつつ動作を5倍高速化。"
    },
    {
      "lab": "OpenAI",
      "title": "How Oracle turns days of work into minutes with ChatGPT and Codex",
      "summary": "Across recruiting, engineering, and operations, Oracle turns specialist knowledge into fast, repeatable workflows with ChatGPT Work and Codex.",
      "url": "https://openai.com/index/oracle",
      "published": "2026-10-09T01:00:00+09:00",
      "title_ja": "OracleがChatGPTとCodexで数日間の作業を数分に短縮した方法",
      "summary_ja": "採用、エンジニアリング、運用にわたり専門知識を高速かつ再現可能なワークフローへ変換。"
    },
    {
      "lab": "OpenAI",
      "title": "Pollo AI turns creative ideas into campaigns with OpenAI",
      "summary": "With GPT-5.6, GPT-6 Astra, and GPT‑Image‑2.5, Pollo AI helps creators turn bold ideas into detailed images and cinematic video ads.",
      "url": "https://openai.com/index/pollo-ai",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "Pollo AI、OpenAIを活用してクリエイティブなアイデアをキャンペーンへ転換",
      "summary_ja": "GPT-5.6やGPT-6 Astra等を使い、詳細な画像や映画のような動画広告の作成を支援。"
    },
    {
      "lab": "OpenAI",
      "title": "LegalOn halves Codex costs while maintaining development speed",
      "summary": "LegalOn cut estimated daily Codex costs by 65% while maintaining development speed. It matched Astra, Sol, and Luna to tasks and managed budgets strategically.",
      "url": "https://openai.com/index/legalon-halves-codex-costs",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "LegalOn、開発速度を維持しつつCodexのコストを半減",
      "summary_ja": "タスクごとにモデルを使い分け、戦略的な予算管理でCodexコストを65%推定削減。"
    },
    {
      "lab": "OpenAI",
      "title": "Disrupting AI-enabled “false front” operations",
      "summary": "OpenAI disrupted two AI-enabled influence operations that used false-front journalists and a think tank to spread geopolitical messaging.",
      "url": "https://openai.com/index/disrupting-ai-enabled-false-front-operations",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "AIを活用した「偽装フロント」工作の阻止",
      "summary_ja": "偽のジャーナリストやシンクタンクを装い地政学的な偽情報を広める2つの工作をOpenAIが阻止。"
    },
    {
      "lab": "Apple ML",
      "title": "Normalizing Trajectory Models",
      "summary": "Diffusion-based models decompose sampling into many small Gaussian denoising steps, an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. Architecturally, NTM combines shallow invertible blocks within each step with a deep parallel…",
      "url": "https://machinelearning.apple.com/research/normalizing-trajectory-models",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "正規化軌道モデル（NTM）による生成プロセスの改善",
      "summary_ja": "ステップごとに条件付き正規化流を用いることで、数ステップでの高品質な生成と尤度学習を両立。"
    },
    {
      "lab": "Hugging Face",
      "title": "The model that didn't exist, so you made it yourself",
      "summary": "",
      "url": "https://huggingface.co/blog/building-with-ml-intern",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "存在しなかったモデル、だから自ら作り上げた",
      "summary_ja": "必要なモデルを自ら構築した事例やプロセスについての解説。"
    },
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "優れた成果は常に優れた労働者を意味するのか？",
      "summary_ja": "仕事のパフォーマンスと労働者自身の能力・評価の関係性についての考察。"
    },
    {
      "lab": "Hugging Face",
      "title": "Multimodal open d1 decision models for the edge",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/open-d1",
      "published": "2026-10-08T01:54:33+09:00",
      "title_ja": "エッジ向けマルチモーダル・オープンd1意思決定モデル",
      "summary_ja": "エッジデバイス上で動作する、オープンかつマルチモーダルな意思決定AIモデルの紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing Falcon ASR",
      "summary": "",
      "url": "https://huggingface.co/blog/tiiuae/falcon-asr",
      "published": "2026-10-07T22:21:03+09:00",
      "title_ja": "Falcon ASRの導入",
      "summary_ja": "新しい自動音声認識（ASR）システム「Falcon ASR」の機能と特徴を紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026",
      "published": "2026-10-07T21:45:31+09:00",
      "title_ja": "一つのモデル家族で二つの金メダル：IOIとIMOに向けたNemotronの微調整",
      "summary_ja": "情報および数学のオリンピック問題に対し、Nemotronを微調整して最高水準の結果を達成。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：オープンかつ軽量なマルチモーダル埋め込みモデル",
      "summary_ja": "軽量で使いやすい、マルチモーダル対応の新しい埋め込みモデルの公開。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "世界の公衆衛生に向けた地球AIの惑星地理空間基盤モデルの活用",
      "summary_ja": "地球規模の地理空間データを活用したAIモデルを公衆衛生分野へ応用する試み。"
    },
    {
      "lab": "Apple ML",
      "title": "RISED: Rubrics for Agentic Multi-Environment Selection and Self-Distillation",
      "summary": "Training a single LLM agent jointly across diverse interactive environments has attracted increasing attention as a route to generalist agents. Existing curriculum and data-selection strategies often allocate training at the environment level or prioritize local reward-based signals, without explicitly considering relationships between current rollouts across environments for prompt-group selection. Meanwhile, as environments are learned at different rates, all-failure and all-success rollout groups can coexist within a batch, leaving those data without group-relative reward signals. Both…",
      "url": "https://machinelearning.apple.com/research/rised-multi-environment-selection",
      "published": "2026-10-06T09:00:00+09:00",
      "title_ja": "RISED：エージェントの複数環境選択と自己蒸留のためのルーブリック",
      "summary_ja": "多様な環境を横断して汎用的なAIエージェントを効率よく学習させるための新たな戦略。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決・創発的問題",
      "summary_ja": "生成AIエージェントが直面する文脈的なプライバシー保護とセキュリティ上の課題。"
    },
    {
      "lab": "Apple ML",
      "title": "Negotiating Ontological Boundaries in User-Authored Personal Sensing Systems",
      "summary": "Designed artifacts are ontological, shaping, and at times limiting, what becomes possible or imaginable. One path toward mitigating such foreclosures is giving people power over how systems are designed and built. Despite decades of scholarship around systems that enable such authorship, these systems are often evaluated on whether or not they are usable, useful, or technically feasible, leaving questions of ontological boundary negotiation, unexamined. We design two open-ended probes that utilize a Wizard of Oz technique to enable the experience of training a personalized machine learning…",
      "url": "https://machinelearning.apple.com/research/ontological-boundary-negotiation",
      "published": "2026-10-05T09:00:00+09:00",
      "title_ja": "ユーザー主導のパーソナルセンシングにおける存在論的境界の交渉",
      "summary_ja": "ユーザー自身が機械学習を訓練する体験を通じ、システム設計の境界や可能性を検証。"
    },
    {
      "lab": "Hugging Face",
      "title": "The Agent Said It Was Done. The Database Disagreed.",
      "summary": "",
      "url": "https://huggingface.co/blog/microsoft/thinkingbox",
      "published": "2026-10-04T07:56:48+09:00",
      "title_ja": "エージェントは「完了した」と言ったが、データベースは否定した",
      "summary_ja": "AIエージェントの報告と実際の実行結果（データベースの状態）の不一致に関する分析。"
    },
    {
      "lab": "Google Research",
      "title": "Toward provably private learning from federated data",
      "summary": "Mobile Systems",
      "url": "https://research.google/blog/toward-provably-private-learning-from-federated-data/",
      "published": "2026-10-02T23:57:41+09:00",
      "title_ja": "連合データからの証明可能でプライベートな学習に向けて",
      "summary_ja": "モバイルシステムにおける、プライバシーを保護しつつ連合学習を行うための技術的アプローチ。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: our next era of frontier intelligence",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-our-next-era-of-frontier-intelligence/",
      "published": "2026-10-01T05:01:45+09:00",
      "title_ja": "Gemini 4 Argon：次世代のフロンティア・インテリジェンス",
      "summary_ja": "最先端の知能を備えた新しいAIモデル「Gemini 4 Argon」の発表。"
    }
  ]
};
