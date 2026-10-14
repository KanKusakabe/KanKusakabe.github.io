window.papersData = {
  "updated_at": "2026-10-14 09:57 JST",
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
      "upvotes": 277,
      "github_stars": 181,
      "github_repo": "https://github.com/MirroS-Lab/AgentGarten",
      "project_page": "https://mirros-lab.github.io/agent-garten/",
      "comments": 4,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.12374",
      "arxiv_url": "https://arxiv.org/abs/2610.12374",
      "title_ja": "AgentGarten：進化するエージェントのためのコード記述型ワールド",
      "summary_ja": "シミュレータと共有ニューラルレンダラーを結合し、現実的かつ一貫性のある対話型環境を構築するフレームワーク。"
    },
    {
      "id": "2610.13527",
      "title": "S-Space: Exploring Spatial Workspace in Multimodal Language Models",
      "abstract": "Multimodal language models (MLLMs) exhibit promising spatial reasoning capabilities, yet the internal mechanisms supporting them remain poorly understood. We uncover S-Space, a linear representation subspace in which object-token representations encode continuous coordinates along horizontal, vertical, and distance axes. Although we identify these axes by differentiating spatial-answer scores with respect to object-token activations, S-Space is intrinsic rather than induced by specific data or prompts, remaining readable under non-spatial questions. We show that S-Space functions as an internal spatial workspace of MLLMs. Perception encodes object locations into it, forming spatial representations that can be directly read out to support accurate spatial judgments. Internal reasoning transforms it for changing viewpoints. Verbal responses selectively access it, evidenced by causal interventions that alter spatial judgments while largely preserving non-spatial responses. Case studies further show that S-Space assigns locations to unseen entities and the observer, and connects physical directions with abstract linguistic meanings, suggesting both the capabilities and limitations of large-scale language training. Finally, we use S-Space as a diagnostic tool for spatial reasoning failures. Direction-word readouts reveal systematic coupling between cardinal and image-relative reference frames. More importantly, a perception-computation decomposition exposes a key bottleneck: MLLMs can form capable spatial representations, yet fall short in the spatial transformations required to reason reliably across viewpoint changes.",
      "upvotes": 272,
      "github_stars": 170,
      "github_repo": "https://github.com/mirros-lab/s-space",
      "project_page": "https://mirros.ai/blog/s-space",
      "comments": 2,
      "org": "MirroS",
      "url": "https://huggingface.co/papers/2610.13527",
      "arxiv_url": "https://arxiv.org/abs/2610.13527",
      "title_ja": "S-Space：マルチモーダル言語モデルにおける空間ワークスペースの探索",
      "summary_ja": "MLLM内部に存在する、オブジェクトの連続的な座標情報を符号化する線形表現サブスペース「S-Space」の特定。"
    },
    {
      "id": "2609.39601",
      "title": "GroundingPI: A Grounding Foundation Model towards Physical Intelligence with Visual Primitives",
      "abstract": "Precise grounding matters. It specifies which object is the target and where that object is, even in clutter and for tiny objects, and it has to be fast enough for closed-loop control. Yet vision-language-action (VLA) and world-action models (WAMs) take perception from general-purpose vision-language and video-generation backbones, which still fail in these settings. We introduce GroundingPI, a 4B grounding foundation model that generates points and boxes as quantized coordinates in a shared vocabulary. Training combines multimodal and spatial pretraining, supervised fine-tuning, and reinforcement learning with GRPO, using supervision from public datasets and dedicated data engines. Against 44 baselines across 34 grounding benchmarks spanning 11 perceptual capabilities, GroundingPI establishes a new state of the art, averaging 73.68%, above the larger GPT-6 Astra (71.54%). As a downstream visual backbone, GroundingPI improves performance on robotic manipulation and autonomous driving. On RoboTwin 2.0, it outperforms every mainstream backbone we evaluate in all four out-of-distribution settings, by up to 24.8% relative to the strongest backbone. On RoboCasa-GR1, GroundingPI trained with 50% of the demonstrations outperforms those baselines trained with 75%. On nuScenes, used as the visual backbone, GroundingPI attains an average open-loop L2 error of 0.296 m. We systematically analyze GroundingPI's pretraining in scale and data composition. Downstream autonomous driving and robotic manipulation improve as the pretraining is scaled. Analyzing the data recipe across these 11 perceptual capabilities shows dense grounding's substantial benefits for both, and OCR's potential as a catalyst for perceptual learning. These results support grounding as a perceptual foundation, and dedicated perceptual pretraining as a promising direction for foundation models of physical intelligence.",
      "upvotes": 246,
      "github_stars": 32,
      "github_repo": "https://github.com/groundingpi/GroundingPI",
      "project_page": "https://groundingpi.github.io/",
      "comments": 1,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39601",
      "arxiv_url": "https://arxiv.org/abs/2609.39601",
      "title_ja": "GroundingPI：視覚プリミティブを用いた物理的知性のための基盤モデル",
      "summary_ja": "量子化された座標を出力し、混雑した環境や微小物体でも高速かつ精密に物体を特定できる4B規模の基盤モデル。"
    },
    {
      "id": "2610.12572",
      "title": "DiffusionART: Efficient, Stable and Scalable Reinforcement of Diffusion Models",
      "abstract": "Online reinforcement learning (RL) fine-tunes diffusion models with black-box rewards, but reverse-process methods such as Flow-GRPO are limited in efficiency by poor credit assignment, while forward-process methods such as DiffusionNFT are efficient yet unstable without carefully tuned exponential-moving-average (EMA) off-policy training. We show that NFT-style objectives contain a hidden forward--reverse consistency force that joint positive--negative training cancels only partially, and that EMA stabilizes training through restoration rather than off-policy rollouts. We introduce DiffusionART (Diffusion Reinforcement with Aggregation-First Reward Tilting), which aggregates each prompt's rewards into a shared reward-improving direction for reverse-process states, removing the consistency force by construction, and adds a trust-region-masked second update for drift-adaptive restoration without EMA tuning. It requires no differentiable reward model, remains effective with fewer samples per prompt, and supports pairwise reward models (DiffusionART-Pairwise). Across image and video generation, DiffusionART trains efficiently and stably without per-task tuning. In particular, on HunyuanVideo-13B with equally weighted visual and motion quality rewards, DiffusionART reaches the late-stage mean reward levels of DiffusionNFT and Flow-GRPO-Fast with 12.02 and 11.72 times fewer GPU hours, respectively, while achieving 28.8% and 53.0% higher mean training rewards.",
      "upvotes": 242,
      "github_stars": 107,
      "github_repo": "https://github.com/vanzll/DiffusionART",
      "project_page": "https://vanzll.github.io/diffusionart-project/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2610.12572",
      "arxiv_url": "https://arxiv.org/abs/2610.12572",
      "title_ja": "DiffusionART：拡散モデルの効率的かつ安定、スケーラブルな強化学習",
      "summary_ja": "報酬チルティングを用いて順方向プロセスと逆方向プロセスの整合性を保ち、拡散モデルの微調整を安定化・効率化する手法。"
    },
    {
      "id": "2610.11765",
      "title": "Thinking Inertia: LLMs Keep Thinking When Told Not To",
      "abstract": "Large Language Models (LLMs) increasingly ship with explicit \"thinking modes\", yet their counterpart, \"no-thinking\", has received far less attention. We study LLMs' no-thinking behavior along two axes. a. How to measure no-thinking? Prior work typically defines no-thinking through proxies such as a disabled thinking mode or the absence of long traces. These proxies are unreliable: disabled thinking modes may still emit reasoning, while long traces may contain filler rather than genuine inference. We instead normalize each response into a pre-answer trace and final answer, and evaluate it at three levels: (i) Empty-Thinking Rate for strict answer-only compliance; (ii) instruction-aware Question-Pre-answer Relevance for similarity between the question and pre-answer trace; and (iii) LLM-as-judge Explicit Inference Rate for visible explicit inference. Together, these metrics distinguish answer-only output, relevant but non-inferential text, and explicit inference. b. How does no-thinking vary across tasks and models? We evaluate six prompting interventions on six LLMs across Boolean, multiple-choice, and open-ended questions. We find that explicit no-think controls cannot reliably eliminate visible inference. Models instead exhibit \"Thinking Inertia\": explicit inference persists even under strict controls and becomes more prevalent as the answer space opens. Accuracy remains stable on Boolean and multiple-choice tasks, whereas open-ended tasks reveal a trade-off between answer-only compliance and task accuracy. Rewriting the same questions across answer spaces shows that supplying candidate answers makes answer-only responses easier to produce. These findings establish no-thinking as a non-trivial capability: stopping explicit reasoning cannot be assumed from model settings or instructions alone and deserves systematic evaluation alongside reasoning ability.",
      "upvotes": 215,
      "github_stars": 3,
      "github_repo": "https://github.com/thinking-inertia/code",
      "project_page": "https://thinking-inertia.github.io/",
      "comments": 2,
      "org": "Stanford University",
      "url": "https://huggingface.co/papers/2610.11765",
      "arxiv_url": "https://arxiv.org/abs/2610.11765",
      "title_ja": "Thinking Inertia：LLMは「考えるな」と言われても考え続ける",
      "summary_ja": "思考モードをオフにしてもLLMが推論を続けてしまう現象を分析し、指示への遵守率を評価する新しい指標の提案。"
    },
    {
      "id": "2610.13361",
      "title": "AgentSWE: Can Coding Agents Build the Agent You Actually Want?",
      "abstract": "As the production of software passes into the hands of software itself, coding agents are increasingly commissioned to build agents fitted to their users' own workflows. This delegation carries a quiet assumption, that the delivered agent will faithfully serve the requirement it was built for, rather than merely appear to. No existing benchmark tests that assumption. We introduce AgentSWE, a benchmark for agent software engineering spanning three stages of the agent development lifecycle: Creation of a complete agent from a natural-language requirement, Editing of production agent codebases, and Optimization toward a measurable target. Each of its 25 tasks is framed as a commission rather than an exam: the builder iterates against a handful of illustrative cases, while acceptance exercises the frozen submission on held-out cases designed to span the full requirement, grading behavior against requirement-derived rubrics under hard pass/fail gates or, for Optimization, against the source benchmark's own objective. Evaluating a range of coding agents across models and harnesses, we find that none comes close to delivering what a requirement asks for: the gap between what a builder demonstrates and what it delivers is the norm, not the corner case. An accompanying empirical analysis of the failure trajectories identifies recurring failure modes, among them overfitting to the visible cases, hollow runtimes behind code that looks complete, and unsupported claims of completion, each a signal by which coding agents can learn to build the agents they are asked for.",
      "upvotes": 201,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.13361",
      "arxiv_url": "https://arxiv.org/abs/2610.13361",
      "title_ja": "AgentSWE：コーディングエージェントは望み通りのエージェントを作れるか？",
      "summary_ja": "エージェント開発のライフサイクル（作成、編集、最適化）を網羅し、要求通りのエージェントを構築できるかを測るベンチマーク。"
    },
    {
      "id": "2610.08077",
      "title": "Self-Retrospection Distillation: Turning Post-hoc Experiences into Prior Foresight",
      "abstract": "Reinforcement learning with verifiable rewards (RLVR) turns agent experience into learning signals primarily through scalar outcome rewards after interaction. For group-relative objectives, however, this signal vanishes when all rollouts receive the same reward, even though their trajectories may reveal useful information about what the task requires and how the agent fails. We ask a complementary question: can hindsight teach an agent what it could have anticipated before acting? We introduce prospective learning, which uses post-hoc experience to supervise foresight predictions from the pre-interaction view, and instantiate it with Self-Retrospection Distillation (SRD). Intuitively, a completed trajectory reveals knowledge that would have been useful and pitfalls that should be avoided; SRD distills this privileged hindsight into trajectory-blind foresight of the same policy. Foresight serves only as a training target and need not be explicitly generated at inference time. Across 10 tool-integrated reasoning and long-horizon agentic tasks, SRD complements RLVR and self-distillation baselines with gains of up to 24.2 pp. Its advantage is especially pronounced when reward contrast is scarce: when 37--98% of rollout groups are reward-uniform across model scales, yet SRD can still exploit learning signal from sampled trajectories. In the 2B setting, where 98% of groups are all-failure, the RLVR training ends up at 0.0% success, while adding SRD reaches 60.6% under the same rollout budget. Our results suggest that post-hoc agent experience is useful not only for evaluating or improving behavior, but also for shaping predictive representations before available interaction.",
      "upvotes": 191,
      "github_stars": 8,
      "github_repo": "https://github.com/SalesforceAIResearch/SRD",
      "project_page": "",
      "comments": 2,
      "org": "Salesforce AI Research",
      "url": "https://huggingface.co/papers/2610.08077",
      "arxiv_url": "https://arxiv.org/abs/2610.08077",
      "title_ja": "自己反省蒸留：事後の経験を事前の先見性に変える",
      "summary_ja": "強化学習での事後の失敗経験を、行動前の予測に反映させることで先見的な学習を可能にする「SRD」手法の提案。"
    },
    {
      "id": "2610.09823",
      "title": "UltraText Bench: A Comprehensive Bilingual Benchmark for Evaluating Visual Text Rendering in Image Generation",
      "abstract": "Dense visual text requires image generators to reproduce long strings across multiple regions with correct placement and legibility. As short-string rendering improves, evaluation must test sustained performance across more demanding scenes. We introduce UltraText Bench, a bilingual benchmark for prompt-only generation of dense visual text. It contains 432 prompts spanning 24 real-world scene categories and three difficulty levels, split equally between English and Chinese. Each human-reviewed prompt supplies exact strings for four to twelve text regions, paired with structured references for their content, placement, and visual attributes. We use the Q-Judger vision-language model to assess each image against the complete reference, reporting text fidelity, text clarity, spatial quality, and scene quality. Across 24 model configurations, these dimensions reveal different strengths: Z-Image-Turbo gains 3.81 clarity points over Z-Image-Base while losing 14.76 fidelity points under the reported settings. Performance also varies with workload; Qwen-Image-2512's English composite falls from 86.50 at L1 to 42.86 at L3. Ten participants took part in human evaluation of the automatic scores. Repository: https://github.com/LINs-lab/UltraText_Bench.",
      "upvotes": 187,
      "github_stars": 49,
      "github_repo": "https://github.com/LINs-lab/UltraText_Bench",
      "project_page": "",
      "comments": 2,
      "org": "Westlake University",
      "url": "https://huggingface.co/papers/2610.09823",
      "arxiv_url": "https://arxiv.org/abs/2610.09823",
      "title_ja": "UltraText Bench：画像生成における視覚的テキスト描写評価のための包括的ベンチマーク",
      "summary_ja": "英中二言語に対応し、複数領域にわたる長文の正確な配置と可読性を画像生成モデルが維持できるかを評価する。"
    },
    {
      "id": "2610.08215",
      "title": "Learn2Play Bench: How Well Do LLM Agents Learn from Experience in Unfamiliar Environments?",
      "abstract": "Learning from experience is essential for LLM agents to adapt to unfamiliar and dynmaic environments. Evaluating this ability is therefore important for understanding how effectively agents acquire and use new knowledge. Existing benchmarks have sought to evaluate this ability, but they primarily evaluate tasks whose rules are provided in the instructions or already familiar to pretrained models, making it difficult to distinguish learning from interactions from reasoning with existing knowledge. To address this, we introduce Learn2Play Bench, a benchmark of newly designed text-based games, whose rules are novel or counterintuitive, requiring agents to acquire knowledge through interaction rather than rely solely on pretrained knowledge. These games provide reproducible feedback and automatic scoring, enabling controlled evaluation of learning across repeated attempts. We also vary game instances to test whether agents can apply what they have learned to new situations. Therefore, we evaluate how backbone models, self-evolving methods, and agent harnesses affect agents' learning ability, revealing three findings: (1) Experience retention: Retaining complete records of actions and feedback can support more effective learning than summarizing these experiences into rules or strategies. (2) Human agent gap: Top-performing human players achieve higher peak scores than the evaluated agents. Human explore more varied strategies, and repeat actions less. (3) Harness matters: With the backbone fixed, changing the harness can improve performance while reducing estimated inference cost. Together, these findings provide insights into how LLM agents learn from experience and suggest directions for future work to improve their learning ability. Project website: https://liushiliushi.github.io/learn2play-bench-website/",
      "upvotes": 152,
      "github_stars": 12,
      "github_repo": "https://github.com/liushiliushi/Learn2Play-Bench",
      "project_page": "https://liushiliushi.github.io/learn2play-bench-website/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2610.08215",
      "arxiv_url": "https://arxiv.org/abs/2610.08215",
      "title_ja": "Learn2Play Bench：LLMエージェントは未知の環境での経験から学習できるか？",
      "summary_ja": "既存知識に頼れない新規または反直感的なルールを持つテキストゲームを通じて、エージェントの対話型学習能力を評価する。"
    },
    {
      "id": "2610.12772",
      "title": "Reflex: Visually Grounded Reactive Humanoid Control",
      "abstract": "Humans effortlessly react to the world; they adeptly return a tennis shot, catch a falling cup, step aside from a passing cart, or pass a box tossed during truck unloading. These everyday actions require anticipating a moving target and reflexively responding with the whole body within about a second. Such visual reactive whole-body control remains challenging for humanoids, which must (1) coordinate whole-body control, (2) react to object dynamics in real time, and (3) ground perception in egocentric vision. We study catching thrown boxes as a representative task that demands all three capabilities; existing systems cover only part of it, relying on end-effectors, motion capture, or marked objects. We present Reflex, a three-stage framework that learns these capabilities stage by stage while connecting them through a compact representation of object dynamics. First, a state-based policy learns whole-body catching with reinforcement learning. Second, the policy learns to infer the dynamics of a moving box from delayed and incomplete observations. Third, an egocentric RGB-D encoder learns to recover this dynamics representation directly from visual observations while keeping the whole-body controller fixed. This decomposition provides each capability with a direct training signal and makes visual learning substantially more scalable. In simulation, Reflex achieves 85.7% catch success from egocentric RGB-D, compared with 87.9% when given privileged box observations. Temporal visual history is critical: removing it reduces success by 35.6 and 39.8 points on centered and laterally offset throws. On a real Unitree G1, Reflex catches human-thrown boxes with 65% and 40% success at 2.5 and 5 m, reaching 76% and 59% of human catchers' success at the same distances.",
      "upvotes": 138,
      "github_stars": 25,
      "github_repo": "https://github.com/ToberJ/reflex",
      "project_page": "https://toberj.github.io/reflex/",
      "comments": 2,
      "org": "University of Washington",
      "url": "https://huggingface.co/papers/2610.12772",
      "arxiv_url": "https://arxiv.org/abs/2610.12772",
      "title_ja": "Reflex：視覚的接地によるリアクティブなヒューマノイド制御",
      "summary_ja": "飛んでくる箱をキャッチするなど、全身制御とリアルタイムな物体動態への反応、主観視点の視覚を統合するシステム。"
    },
    {
      "id": "2610.12242",
      "title": "TokenRouter: Efficient Serving System for Token-Level LLM Routing",
      "abstract": "Large language model (LLM) routing distributes inference work across different models, advancing the cost-quality Pareto frontier of LLM serving. While coarse-grained routing at the session or query level has been widely adopted in production systems, recent algorithmic work shows that fine-grained token-level routing can yield substantial efficiency and quality gains. However, efficiently serving token-level routed inference poses significant challenges to existing systems. Built on single-LLM assumptions, current systems suffer from severe step desynchronization and frequent batch admission delays under token-level routing, and they also impose high implementation complexity on developers. To address these challenges, we design TokenRouter, an efficient and developer-friendly serving system for token-level routed LLM inference. TokenRouter follows the principle of request-centric programming, model-centric execution: developers describe routing logic from the perspective of a single request, while the runtime launches a subserver for each LLM and dispatches requests asynchronously. Each subserver employs a delayed-batching scheduler, whose optimal hyperparameters are derived from a mathematical throughput model of the system. Across diverse routing algorithms, workloads, and model pairs, TokenRouter achieves 2.01-64.15x higher decoding throughput than existing systems, substantially advancing the serving efficiency of token-level LLM routing. Our code is available at https://github.com/thu-nics/TokenRouter.",
      "upvotes": 136,
      "github_stars": 56,
      "github_repo": "https://github.com/thu-nics/TokenRouter",
      "project_page": "https://fuvty.github.io/thinking_yard_project_page/projects/tokenrouter/",
      "comments": 2,
      "org": "Tsinghua-NICS-EFC",
      "url": "https://huggingface.co/papers/2610.12242",
      "arxiv_url": "https://arxiv.org/abs/2610.12242",
      "title_ja": "TokenRouter：トークンレベルのLLMルーティングのための効率的なサービングシステム",
      "summary_ja": "推論コストと品質を最適化するトークン単位のモデル振り分けにおいて、デシリアライズやバッチ遅延を解消するシステム。"
    },
    {
      "id": "2610.13166",
      "title": "Scaling Agentic Data for Long-Horizon Terminal Intelligence",
      "abstract": "Terminal agents are moving beyond local operations toward completing real-world professional tasks. Short trajectories can demonstrate commands and tool calls, but they do not fully show how agents accumulate evidence through exploration, use it to inform judgments, continually adjust strategies based on feedback, and turn intermediate results into final deliverables. High-quality long-horizon trajectories capture these agentic behavioral patterns and their connections within a single problem-solving process, providing richer experience for sustained autonomous work. However, environment synthesis may complete or simplify the key work underlying these patterns in advance and thus remove the need for exploration, implementation, and verification that the agent was meant to perform. To address this, we introduce TerminalHorizon, a fully automated data synthesis engine for long-horizon terminal agents. Starting from real-world professional work, it uses independent execution to identify key work omitted during construction and uses the resulting evidence to guide environment reconstruction. To extend these patterns across stages, it progressively expands tasks under the same goal, introducing new requirements that build on prior results and call for further exploration and improvement. Using this engine, we construct 1.5K task environments and perform supervised fine-tuning of Qwen3.5-27B on the resulting dataset to obtain TerminalHorizon-27B. We achieve substantial performance gains on all 12 benchmarks spanning coding-agent tasks, agentic tasks in real-world production settings, and general reasoning. Multiple RSI case studies, each with a 12-hour research budget, further demonstrate the model's ability to continue experimenting beyond an initial solution, improve its methods based on feedback, and retain effective improvements in its final deliverables.",
      "upvotes": 133,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://zs1314.github.io/TerminalHorizon",
      "comments": 1,
      "org": "alibaba",
      "url": "https://huggingface.co/papers/2610.13166",
      "arxiv_url": "https://arxiv.org/abs/2610.13166",
      "title_ja": "長期的な端末知能のためのエージェント的データのスケーリング",
      "summary_ja": "試行錯誤や証拠蓄積を含む長期的なタスク解決プロセスを記録した高品質な軌跡データにより、エージェントの自律性を向上。"
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
      "title_ja": "STEPQuant：デルタルール回帰状態量子化における誤差の影響",
      "summary_ja": "線形アテンションの状態量子化において、時間的・空間的な誤差の重要度を考慮し精度低下を抑える「STEPQuant」の提案。"
    },
    {
      "id": "2610.06100",
      "title": "From Traces to Agentic Worlds: Agentic Language World Models for Interactive Environment Simulation",
      "abstract": "Realistic environment replicas are increasingly valuable for training and evaluating LLM agents, yet the original systems may be inaccessible or impractical to reproduce. We explore agentic language world modeling: rather than rebuilding an executable environment, a world model agent serves as the environment for a task agent and supports faithful and stateful simulation. We instantiate this paradigm with Trace2Env, a learning-free framework for settings where the original system is unavailable but historical interaction traces remain accessible. Trace2Env reconstructs these traces into a reusable environment worldbook containing environment schemas, grounded evidence, and induced behavioral knowledge. At runtime, the world model agent actively consults the worldbook together with persistent episodic state to infer each action's observation and lasting state effects. Across nine environments, Trace2Env improves both next-observation fidelity and long-horizon interaction consistency over conventional prompt-based LWMs. In multi-turn interaction, task agent actions generated against Trace2Env remain valid more often when replayed in the real environment, indicating that its simulated dynamics better preserve the consequences of earlier actions across successive turns. These results establish agentic language world modeling as an alternative direction for building realistic environment replicas without reconstructing the original executable system.",
      "upvotes": 115,
      "github_stars": 57,
      "github_repo": "https://github.com/ruyue0001/trace2env",
      "project_page": "https://quanyulong.net/trace2env/",
      "comments": 2,
      "org": "Nanyang Technological University Singapore",
      "url": "https://huggingface.co/papers/2610.06100",
      "arxiv_url": "https://arxiv.org/abs/2610.06100",
      "title_ja": "トレースからエージェント的世界へ：対話型環境シミュレーションのための世界モデル",
      "summary_ja": "実行可能なシステムがない場合でも、過去の対話トレースから状態保持型のシミュレーション環境を再構築する手法。"
    },
    {
      "id": "2610.08699",
      "title": "nanoMuse: An Open-Source Personal Agent for Every Device You Own",
      "abstract": "Assistants from 2011 answered and waited, and agents from 2023 did a task and stopped. In September 2026 Meta's Muse showed an agent for one person, with accounts, devices, memory and a conversation that lasts, closed, in a vendor's cloud, in one country. Such an agent is expected to act on a person's accounts and devices, remember them across weeks, speak first when it is worth it, and answer for what it did. It is a kind of software, not a model, and until now had no open counterpart. This report defines the personal agent in five questions and three horizons. It reads how Muse is built from Meta's public record and a copy of its production prompt, each statement marked by its source. It then presents nanoMuse, the open-source counterpart under the GPL-3.0, one agent on every device a person owns, with hands on the phone's screen and the computer's. They share one conversation over a relay anyone can run; every action goes through a Sentinel, memory is files the person can read, and the model is their choice. Its size and cost are given as estimates. What is open, memory with provenance, an evaluation suite for the hands and an open model for them, is set out as a roadmap.",
      "upvotes": 113,
      "github_stars": 1082,
      "github_repo": "https://github.com/nano-muse/nanoMuse",
      "project_page": "https://nanomuse.cn/",
      "comments": 2,
      "org": "Zhejiang University",
      "url": "https://huggingface.co/papers/2610.08699",
      "arxiv_url": "https://arxiv.org/abs/2610.08699",
      "title_ja": "nanoMuse：すべての個人デバイスに搭載可能なオープンソースのパーソナルエージェント",
      "summary_ja": "デバイスやメモリを横断し長期的な対話を継続するパーソナルエージェントの定義と、オープンな構築方法の提示。"
    },
    {
      "id": "2610.10528",
      "title": "Long-WAM: Scaling the Context of World-Action Models",
      "abstract": "Real-time robot control demands enough visual history to infer motion and task progress, but processing that history can delay action. We present Long-WAM, a model-system framework for scaling the context of causal world-action models under real-time control constraints. Our central finding is that access to history is not the same as using it: longer histories pay off far more when the video foundation is pretrained autoregressively (AR). We first learn causal prediction from robot and egocentric videos without action labels, then preserve this history-to-future structure during world-action adaptation. On RoboCasa GR-1, increasing context from 0.0 to 19.2 seconds raises success from 63.3% to 78.7%, whereas a bidirectionally pretrained initialization shows no net gain; robot-domain AR pretraining further raises peak success on GR-1 and LIBERO-Long. Long-WAM also achieves the best results among compared methods on LIBERO-Long, RoboTwin 2.0, and DOMINO. Streaming observation encoding, asynchronous execution, and hardware-specific acceleration enable deployment on RTX 5090, DGX Spark, and Jetson AGX Thor without dropping future prediction; on RTX 5090, each action chunk, including future-video latent prediction, takes 107.4 ms. Real-time deployment on Unitree G1 and YAM supports dynamic and long-horizon manipulation, including 95% success on dynamic cup stacking, where Pi0.5 and Fast-WAM succeed in none of 20 trials. As a memory-informed executor, Long-WAM also complements higher-level planning in composite tasks.",
      "upvotes": 109,
      "github_stars": 2777,
      "github_repo": "https://github.com/NVlabs/LongLive",
      "project_page": "https://nvlabs.github.io/LongLive/Long-WAM/",
      "comments": 3,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2610.10528",
      "arxiv_url": "https://arxiv.org/abs/2610.10528",
      "title_ja": "Long-WAM：ワールドアクションモデルのコンテキストスケーリング",
      "summary_ja": "自己回帰的に事前学習したビデオ基盤モデルを用い、長期間の視覚履歴をリアルタイムなロボット制御に活用する手法。"
    },
    {
      "id": "2610.06293",
      "title": "VepAgent: Bridging Causal-Transition via Tool-Augmented Reinforcement Learning for Video Event Prediction",
      "abstract": "Multimodal Large Language Models (MLLMs) have demonstrated remarkable potential in video understanding, yet their reliance on retrospective summarization and text-centric priors often limits their ability to bridge unobserved causal transitions when applied to Video Event Prediction (VEP). To address this, we propose VepAgent, an agentic framework that integrates causal-transition reasoning with tool-augmented reinforcement learning (RL) for robust VEP. Unlike prior methods that passively project future trajectories from historical dependencies, our approach explicitly models the logical progression from terminal observed states to future events. Specifically, we first construct futurebench-4K, a high-quality chain-of-thought dataset for supervised fine-tuning (SFT) that effectively bridges the causal-logic gap by structuring the deduction of unobserved intermediate states. Subsequently, we develop a diagnostic tool library integrating state tracking, frame retrieval, and region magnification, enabling the agent to dynamically augment reasoning with external tools to recover missing spatio-temporal evidence and resolve visual ambiguities during inference. Moreover, we propose a composite reward mechanism that jointly optimizes prediction accuracy, causal coherence, and reliable prior, compelling the agent to rely on genuine visual grounding rather than superficial textual similarities. Extensive evaluations on FutureBench and NEPBench datasets demonstrate that our method achieves state-of-the-art performance, significantly outperforming larger MLLMs and validating the empirical effectiveness of our agentic, future-oriented reasoning paradigm.",
      "upvotes": 101,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "UCSC-VLAA",
      "url": "https://huggingface.co/papers/2610.06293",
      "arxiv_url": "https://arxiv.org/abs/2610.06293",
      "title_ja": "VepAgent：ツール拡張強化学習によるビデオイベント予測の因果遷移の橋渡し",
      "summary_ja": "ビデオの現在から未来への論理的進行を明示的にモデル化し、強化学習とツール活用でロバストなイベント予測を実現。"
    },
    {
      "id": "2610.08621",
      "title": "Recursive Game Creator: An Agentic Product-Level Experience-Oriented Game Harness",
      "abstract": "Recent game design agents have made substantial progress in generating playable games. However, program correctness does not ensure an enjoyable experience for players. We present Recursive Game Creator, an experience-oriented harness to advance agentic game development from rough game prototypes into entertaining games. Recursive Game Creator organizes recursive development around four components: Designer, Builder, Player, and Reviewer. The Designer translates user instructions and Reviewer's feedback into detailed plans. The Builder turns these plans into candidate games. The coding-native Player creates and executes reusable policies through programmatic interfaces to efficiently collect diverse gameplay trajectories, mitigating evaluation bias caused by slow GUI-based collection. The Reviewer uses carefully designed trajectory-based metrics to induce player preferences, integrating with visual evidence and explicit textual preferences to evaluate games against game-specific criteria. Finally, the Reviewer accepts the better version and provides improvement reviews for the next round, closing the recursive loop. Our method achieves state-of-the-art overall performance of 77.89 on GameCraft-Bench. On GameASG-Bench, it achieves a strict task success rate of 53.2%, a 34.1% improvement over the same-model baseline, and the highest mean runtime-check pass rate at 93.4% among compared methods. A user study shows longer playtime and higher ratings. Code is coming soon.",
      "upvotes": 93,
      "github_stars": 61,
      "github_repo": "https://github.com/IMBALDY/RecursiveGameCreator",
      "project_page": "https://imbaldy.github.io/recursive-game-creator",
      "comments": 2,
      "org": "The University of Hong Kong",
      "url": "https://huggingface.co/papers/2610.08621",
      "arxiv_url": "https://arxiv.org/abs/2610.08621",
      "title_ja": "再帰的ゲームクリエイター：製品レベルの体験を志向するゲーム開発基盤",
      "summary_ja": "設計者、構築者、プレイヤー、評価者の役割を再帰的に回すことで、単なる動作コードを超えた「楽しさ」を持つゲームを開発。"
    },
    {
      "id": "2610.12611",
      "title": "SoftwareGym: Scaling Computer-Use Agent Training with Diverse Synthesized Software Environments",
      "abstract": "Computer-use agents (CUAs) are rapidly improving, yet synthesizing diverse and reliable software environments at scale remains challenging. Native application environments require substantial construction and integration effort, which limits application coverage and increases the risk of application-specific overfitting. Browser-hosted environments provide limited interaction depth and workflow complexity. These limitations motivate SoftwareGym, an automated pipeline for synthesizing GUI software environments with diverse interfaces, executable functionality, and runtime-verified behavior. It generates structurally diverse designs, realizes them as runnable applications, and uses GUI evaluation with iterative repair to ensure functional reliability. Using SoftwareGym, we synthesize 182 applications across twelve categories and achieve a mean GUI task pass rate of 91.5%. We construct SoftwareGym-Bench, a 120-task evaluation suite spanning the same twelve categories, and use trajectories collected from these environments for CUA training. The resulting model improves Pass@3 from 41.39% to 56.97% on the strictly out-of-domain OSWorld benchmark and achieves 40.0% on SoftwareGym-Bench. These results demonstrate the potential of synthesized software environments as scalable and transferable supervision for CUA training.",
      "upvotes": 92,
      "github_stars": 18,
      "github_repo": "https://github.com/MrKiing-Jin/SoftwareGym",
      "project_page": "",
      "comments": 2,
      "org": "Shanghai Jiao Tong University",
      "url": "https://huggingface.co/papers/2610.12611",
      "arxiv_url": "https://arxiv.org/abs/2610.12611",
      "title_ja": "SoftwareGym：多様な合成ソフトウェア環境によるコンピュータ操作エージェントの学習スケーリング",
      "summary_ja": "多様なUIと実行機能を備えたソフトウェア環境を自動合成し、エージェントの汎化性能を高めるための訓練パイプライン。"
    },
    {
      "id": "2610.08995",
      "title": "PhysEvo: Astra Can Act, Let It",
      "abstract": "Astra can act, yet reliable manipulation depends on the system through which it observes and controls the world. We introduce PhysEvo, a framework for physical recursive self-improvement (RSI) around a single frozen model. A task agent executes robot tasks; a meta-agent uses the resulting trajectories to diagnose failures, revise tools and skills, and test corrections. The meta-agent can also improve its own diagnostic tools, so retained revisions support both later action and later self-improvement. This process develops joint-level control, evidence-seeking observation, and reusable manipulation skills without model-weight updates or a separately trained action policy. Across 42 RoboDojo tasks, held-out-layout evaluation of retained task-specific deployment versions yields a five-dimension average score of 68.14/100 and 62.00% success, compared with 47.17% for RoboDawn's one-shot Astra agent, the strongest published reference in our comparison. On eight manipulation tasks challenging direct Astra, PhysEvo achieves 55.00% success, compared with 1.25% for the direct-Astra reference. Deploying the simulation-evolved harness on AgileX PiPER and continuing skill revision yields 90.60/100 average score and 84.00% success across 25 trials on five real-world tasks. PhysEvo turns the consequences of action into persistent, testable changes to how a frozen model acts and improves.",
      "upvotes": 88,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://anonymous-report-777.github.io/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.08995",
      "arxiv_url": "https://arxiv.org/abs/2610.08995",
      "title_ja": "PhysEvo：モデルの重みを更新しない物理的な再帰的自己改善",
      "summary_ja": "メタエージェントがロボットタスクの失敗を診断し、スキルやツールを修正することで、学習なしに操作能力を向上させる手法。"
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
      "title_ja": "GRACE：効率的なビデオ生成のための生成を考慮した潜在空間圧縮",
      "summary_ja": "既存の事前学習済みDiTとの互換性を保ちながら、動画オートエンコーダーの圧縮率を高め、生成を高速化する手法。"
    },
    {
      "id": "2610.11959",
      "title": "MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Improvement",
      "abstract": "Reinforcement learning (RL) is the central training paradigm for advancing large foundation models towards self-improvement. This report introduces the MiMo-V2.6 series, an omni-modal family that pushes the frontier of model intelligence by scaling RL compute. Prior to RL, we conduct mid-training on a broad multimodal corpus to provide ample exploration space, and build a solid infrastructure on the pretrained hybrid-SWA architecture to support subsequent scale-up. We scale RL compute along three dimensions: (1) larger batches and higher throughput, with an asynchronous training that consumes 1,568 samples and 2.7-3.7B tokens per step at context lengths of up to 1M; (2) more diverse and complex environments, spanning code, general, visual, and cyber domains under a mixture of agent harnesses; and (3) more grader compute, via groupwise agentic grading that yields more accurate reward signals for long-horizon tasks and steers the model towards shorter, more token-efficient solutions. To keep training stable at scale, we freeze the MoE router and establish a multi-layer defense against reward hacking. We further build infrastructure for mixed-task agentic RL, including a unified trajectory representation, high-concurrency multi-framework rollout, decoupled control and data planes, and training-inference consistency. We open-source the training dynamics, RL environments, and RL framework to facilitate reproduction and further research on scaled RL and model self-improvement.",
      "upvotes": 86,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "Xiaomi MiMo",
      "url": "https://huggingface.co/papers/2610.11959",
      "arxiv_url": "https://arxiv.org/abs/2610.11959",
      "title_ja": "MiMo-V2.6：自己改善に向けた強化学習のスケーリング",
      "summary_ja": "RL計算量をバッチサイズ、コンテキスト長、タスクの多様性の3軸で拡大し、モデル知能の限界を押し広げるオムニモーダルLLM。"
    },
    {
      "id": "2610.12126",
      "title": "SuperNav: An Agentic Navigation System for Any Task in Any Scene",
      "abstract": "General-purpose service robots need navigation systems that can handle diverse human requests in unfamiliar environments, combining task generality with scene generality. Some existing methods fine-tune multimodal large language models (MLLMs) to predict navigation actions, making their behavior dependent on the coverage of navigation training data and potentially limiting generalization to new requests and environments. Our key insight is to let the MLLM focus on interpreting requests, understanding scenes, and making decisions while preserving its general-purpose capabilities and delegating motion execution to navigation tools. To realize this idea, we introduce SuperNav, which equips a pretrained MLLM with a specialized agent harness without navigation-specific fine-tuning of the MLLM. Our harness supports these decisions with Navigation Skills, agent-oriented Tools for physical interaction, and task-progress and context management. A unified visual-point interface connects decision-making to motion by allowing the model to specify destinations directly in images and revise its decisions from execution feedback. Together, these components support sustained navigation across different task requirements and environments. SuperNav outperforms four evaluated baselines on instance-level, multi-object, and demand-driven tasks. Category-level evaluation on HM3D and deployment on a real quadruped robot further demonstrate its applicability across environments. Project Page: https://zju3dv.github.io/SuperNav/",
      "upvotes": 84,
      "github_stars": 161,
      "github_repo": "https://github.com/zju3dv/SuperNav",
      "project_page": "https://zju3dv.github.io/SuperNav/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.12126",
      "arxiv_url": "https://arxiv.org/abs/2610.12126",
      "title_ja": "SuperNav：あらゆるシーン、あらゆるタスクに対応するエージェント型ナビゲーション",
      "summary_ja": "LLMを要求解釈と意思決定に集中させ、実際の移動を専門ツールに委ねることで、未知の環境への高い汎化性能を実現。"
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
      "title_ja": "DecepEval：LLMエージェントの欺瞞を評価するベンチマーク",
      "summary_ja": "エージェントが目的達成のために嘘をつく状況を、圧力、誘因、機会などの条件に基づいて体系的に評価するフレームワーク。"
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
      "title_ja": "問いに問う：推論モデルにおける自己進化の持続",
      "summary_ja": "自己生成した問題による学習で発生する「無効な問い」や「類似問題」を特定し、性能崩壊を防ぐ自己進化の手法を提案。"
    },
    {
      "id": "2610.09326",
      "title": "VIS-Ground: Video Interactive Storytelling with Contextual Grounding",
      "abstract": "Video interactive storytelling enables viewers to actively steer how a video unfolds. However, once we allow viewers to intervene during generation, a new challenge arises: The viewer's request can have latent dependencies on both the grounding source and the current rendered video state. These dependencies may not be explicitly stated in any individual input, but emerge only when the source, rendered history, and new viewer intent are considered jointly. Existing interactive video generation systems primarily emphasize following viewer instructions, while source-grounded video generation methods focus on aligning generated content with an external narrative or knowledge source. This leaves a fundamental question underexplored: What context should a generation model ground on during interactive continuation, and how can heterogeneous, unstructured inputs be transformed into such grounding context? In this work, we formulate contextual grounding as the process of transforming heterogeneous input context into an executable constraint model for video generation. To address this challenge, we introduce VIS-Ground, which performs Structured Context Abstraction to recover grounded states and cross-context dependencies, Generation Constraints Induction to project relevant dependencies into candidate-specific constraints, and Constrained Video Generation to enforce these constraints through planning, verification, revision, and rendering. Across three video generation backbones, VIS-Ground consistently achieves the highest overall composite score, reaching an average absolute improvement of 10.3 points over the strongest per-backbone baselines. Detailed analysis further shows gains across both narrative and knowledge grounding, and reveals remaining challenges in dependency extraction, and faithful realization during video rendering.",
      "upvotes": 78,
      "github_stars": 0,
      "github_repo": "https://github.com/vis-ground/code",
      "project_page": "https://vis-ground.github.io",
      "comments": 1,
      "org": "Google",
      "url": "https://huggingface.co/papers/2610.09326",
      "arxiv_url": "https://arxiv.org/abs/2610.09326",
      "title_ja": "VIS-Ground：文脈的接地を備えたビデオ対話型ストーリーテリング",
      "summary_ja": "視聴者の介入時に、過去の生成履歴、外部知識、新規意図の依存関係を統合して整合性のある動画を生成する手法。"
    },
    {
      "id": "2610.02054",
      "title": "UniWAM: Unified World-Action Model",
      "abstract": "Vision-language-action models benefit from the understanding and reasoning capabilities of pretrained vision-language models, but action-only supervision provides limited grounding in world dynamics. Conversely, world-action models inherit spatiotemporal priors from video generation models, yet remain limited in semantic understanding and reasoning under distribution shifts. We introduce UniWAM, a unified architecture that integrates a physical reasoner, a world generator, and an action predictor to jointly learn semantic understanding of the physical world, visual generation, and action prediction. To ensure the quality of the training data, we developed a rigorous data cleaning and annotation pipeline for both human egocentric data and robot data. To adapt the vision-language component to embodied tasks while preserving its inherited language capabilities, we represent low-level actions in natural language and introduce a pre-training recipe that assigns complementary supervision from visual question answering (VQA) data, human egocentric data, and robot demonstrations to the appropriate model components. During post-training, future visual noise augmentation reduces reliance on precise future predictions, while history-conditioned flow matching uses encoded action history to initialize action generation. Together, these designs significantly reduce denoising steps while maintaining performance. UniWAM achieves state-of-the-art (SOTA) performance across multiple evaluations, including in-distribution performance, robustness, generalization, instruction following, and long-horizon task execution. Furthermore, we uncover a log-linear scaling law of unified human-robot co-training, demonstrating the effectiveness of large-scale pre-training on a mixture of human and robot data.",
      "upvotes": 76,
      "github_stars": 123,
      "github_repo": "https://github.com/UniWAM/UniWAM",
      "project_page": "https://uniwam.github.io/",
      "comments": 3,
      "org": "HKUSTGZ",
      "url": "https://huggingface.co/papers/2610.02054",
      "arxiv_url": "https://arxiv.org/abs/2610.02054",
      "title_ja": "UniWAM：統合型ワールドアクションモデル",
      "summary_ja": "物理的推論、映像生成、行動予測を一つのアーキテクチャに統合し、世界の動態理解と行動決定を同時に学習するモデル。"
    },
    {
      "id": "2609.39600",
      "title": "GroundAnything: Reconciling Parallel Decoding with Precise Visual Grounding at Flash Speed",
      "abstract": "Autoregressive (AR) grounding models serialize spatial predictions, introducing sequential latency and imposing a causal order on output tokens. We view grounding as visual evidence extraction: objects, locations, and spatial relations are jointly constrained by the image and query, yet their dependencies do not imply an intrinsic left-to-right generation order. This distinction makes bidirectional diffusion a natural fit, allowing spatial hypotheses to emerge in parallel and be jointly refined through iterative denoising. We introduce GroundAnything, a 4B-parameter grounding foundation model that reconciles fast parallel decoding with precise localization through blockwise denoising. Training combines grounding pretraining from public datasets and dedicated data engines, direct AR-to-diffusion conversion with joint AR and diffusion objectives, supervised fine-tuning, and GRPO-based reinforcement post-training. Across 30 grounding benchmarks, our autoregressive variant, GroundAnything-VLM, establishes a new overall state of the art among similarly sized models at 72.42%, remaining competitive with GPT-6 Astra (71.35%). With entropy-guided decoding, GroundAnything also surpasses the prior state of the art at this scale, averaging 61.75% versus 53.32% for the fast MTP-based LocateAnything model. We further explore decoding strategies, showing that an optional self-speculative mode achieves a 4.51times speedup over the AR counterpart with a 0.74 percentage-point drop in COCO F1mIoU. Infrastructure experiments show that progressive inference optimizations translate parallel decoding into practical speedups. These support efficient visual grounding in latency-sensitive real-world systems.",
      "upvotes": 71,
      "github_stars": 29,
      "github_repo": "https://github.com/groundingpi/GroundAnything",
      "project_page": "https://groundingpi.github.io/groundanything/",
      "comments": 1,
      "org": "XPENG AI",
      "url": "https://huggingface.co/papers/2609.39600",
      "arxiv_url": "https://arxiv.org/abs/2609.39600",
      "title_ja": "GroundAnything：並列デコードと精密な視覚的接地を高速に両立",
      "summary_ja": "物体特定を視覚証拠抽出として捉え、双方向拡散モデルを用いることで、高速な並列デコードと高精度な座標出力を実現。"
    },
    {
      "id": "2610.13021",
      "title": "EmbodiedCLBench: Evaluating Continual Learning for Self-Evolving Embodied Agents",
      "abstract": "Continual learning requires models to accumulate past experience and transfer it to new tasks. Despite substantial research on continual learning, existing work remains largely confined to non-embodied settings, without extending to embodied environments. To address this gap, we introduce EmbodiedCLBench, the first benchmark in embodied simulation for evaluating the continual learning capability of self-evolving agents. With compositional generalization as the core evaluation principle, our benchmark evaluates whether agents can first learn from basic tasks and then recombine the acquired skills to solve complex, unseen advanced tasks. Based on EmbodiedCLBench, we conduct extensive experiments across multiple agent harnesses and learning methods, revealing consistent limitations and distinctive behaviors. Our results show that while advanced tasks can be hardly solved under zero-shot setting, the experience from basic tasks enables consistent improvement. Such benefit from the experience remains stable even if the task complexity increases. However, this improvement does not scale accordingly with the number of learning samples, and current agents cannot extract meaningful information from additional experience. Collectively, our findings highlight continual learning as a fundamental yet underexplored capability, and our benchmark offers valuable resources for designing effective self-evolving agents in embodied environments. Our code and dataset are available at https://pku-value-lab.github.io/EmbodiedCLBench-homepage.",
      "upvotes": 66,
      "github_stars": 15,
      "github_repo": "https://github.com/PKU-VaLuE-Lab/EmbodiedCLBench",
      "project_page": "https://pku-value-lab.github.io/EmbodiedCLBench-homepage/",
      "comments": 3,
      "org": "PKU-VaLuE-Lab",
      "url": "https://huggingface.co/papers/2610.13021",
      "arxiv_url": "https://arxiv.org/abs/2610.13021",
      "title_ja": "EmbodiedCLBench：自己進化型身体知能エージェントの継続学習評価",
      "summary_ja": "基本タスクから学んだスキルを組み合わせて未知の複雑なタスクを解けるかを評価する、身体シミュレーション環境初の継続学習ベンチ。"
    },
    {
      "id": "2610.12299",
      "title": "Multi-Agent Egocentric World Model with Fine-Grained Embodied Interaction",
      "abstract": "Egocentric world models predict first-person observations conditioned on an agent's actions, but most focus on a single agent. Real embodied settings often involve multiple agents that act and interact within a shared environment. Existing multi-agent world models rely on coarse actions like locomotion, camera control, or discrete commands, leaving fine-grained embodied interactions underexplored. We formulate multi-agent egocentric world modeling as synchronized ego-stream generation for multiple agents interacting through fine-grained actions in a shared world. This requires cross-view action consistency, shared-environment consistency, and consistent propagation of interaction-induced state updates. We propose Multi-agent Egocentric World Model (ME-World), which jointly denoises multiple ego streams in a shared token sequence, conditions each stream on all agents' target-view poses, and grounds generation with shared environment memory. We train and evaluate on real and synthetic multi-agent data and introduce shared-world consistency metrics for environment, update, and identity consistency. Experiments show ME-World improves shared-world consistency, action control, identity preservation, and video quality over existing methods.",
      "upvotes": 66,
      "github_stars": 20,
      "github_repo": "https://github.com/cvlab-kaist/ME-World",
      "project_page": "https://cvlab-kaist.github.io/ME-World/",
      "comments": 2,
      "org": "KAIST AI",
      "url": "https://huggingface.co/papers/2610.12299",
      "arxiv_url": "https://arxiv.org/abs/2610.12299",
      "title_ja": "細粒度な身体対話を伴うマルチエージェント主観視点世界モデル",
      "summary_ja": "共有された環境内で、複数のエージェントが互いに干渉し合う際の視覚的な一貫性と状態変化を予測する世界モデル。"
    }
  ],
  "labs": [
    {
      "lab": "Google DeepMind",
      "title": "Developing Gemini 4 Argon responsibly and safely",
      "summary": "",
      "url": "https://deepmind.google/blog/developing-gemini-4-argon-responsibly-and-safely/",
      "published": "2026-10-14T04:43:07+09:00",
      "title_ja": "Gemini 4 Argonを責任を持って安全に開発する",
      "summary_ja": "Googleの最新モデルGemini 4 Argonの安全性確保と責任ある開発体制の概要。"
    },
    {
      "lab": "Hugging Face",
      "title": "Run fast, private agents on-device with LFM2.5-24B-A2B",
      "summary": "",
      "url": "https://huggingface.co/blog/LiquidAI/lfm25-24b-a2b",
      "published": "2026-10-14T02:05:48+09:00",
      "title_ja": "LFM2.5-24B-A2Bによるオンデバイスでの高速・プライベートなエージェント実行",
      "summary_ja": "オンデバイス環境でプライバシーを保ちつつ高速に動作する24B規模のエージェントモデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic Ditched Git and Built Scion After Claude Caused 12x Merge Surge",
      "summary": "Anthropic replaced git with Scion, an in-house version control system built for agents, after daily merges grew from 2,500 to over 30,000.",
      "url": "https://alphasignal.ai/news/anthropic-ditched-git-and-built-scion-after-claude-caused-12x-merge-surge",
      "published": "2026-10-14T01:36:41+09:00",
      "title_ja": "Claudeによるマージ急増を受け、AnthropicがGitを廃止しScionを構築",
      "summary_ja": "AIによる開発でマージ数が12倍に激増したため、Gitに代わる独自システムを構築。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Google DeepMind's Gemini 4 Argon Tops Vals Index With 1M-Token Window",
      "summary": "Google's new frontier model tops the Vals Index at 68.9%, ships with a 1M token window, and launches at $2/$10 per million tokens.",
      "url": "https://alphasignal.ai/news/google-deepmind-s-gemini-4-argon-tops-vals-index-with-1m-token-window",
      "published": "2026-10-14T01:05:40+09:00",
      "title_ja": "Google DeepMindのGemini 4 Argonが100万トークンの窓でVals Index首位に",
      "summary_ja": "100万トークンのコンテキスト窓を備えた新モデルが、ベンチマークで首位を獲得。"
    },
    {
      "lab": "AlphaSignal",
      "title": "mlx-community Shrinks Alibaba's Qwen3.8-27B to Fit a 24 GB Mac",
      "summary": "A 4-bit MLX conversion of Qwen3.8-27B squeezes a native multimodal dense model into roughly 16 GB, making it practical on Apple Silicon Macs.",
      "url": "https://alphasignal.ai/news/mlx-community-shrinks-alibaba-s-qwen3-8-27b-to-fit-a-24-gb-mac",
      "published": "2026-10-14T01:02:33+09:00",
      "title_ja": "mlx-communityがQwen3.8-27Bを24GBのMacに適合するよう縮小",
      "summary_ja": "4ビット量子化により、27B規模のマルチモーダルモデルをMacで実用可能に。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Fish Audio's Drama 3 Lets Developers Direct AI Voices Like a Film Script",
      "summary": "Fish Audio's new 35B mixture-of-experts text-to-speech model ships open weights, with plain-language direction, mid-sentence voice shifts, and word-level audio inpainting.",
      "url": "https://alphasignal.ai/news/fish-audio-s-drama-3-lets-developers-direct-ai-voices-like-a-film-script",
      "published": "2026-10-14T01:02:18+09:00",
      "title_ja": "Fish AudioのDrama 3：脚本のようにAI音声を演出可能に",
      "summary_ja": "文章による指示や文中の声色変更が可能な35B規模のオープンな音声合成モデル。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon for Robotics",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-argon-for-robotics/",
      "published": "2026-10-14T01:01:58+09:00",
      "title_ja": "ロボット工学のためのGemini 4 Argon",
      "summary_ja": "Gemini 4 Argonがロボットの制御やタスク実行にどのよう活用されるかの紹介。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Argon: Built to solve your hardest problems",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-argon/",
      "published": "2026-10-14T01:01:52+09:00",
      "title_ja": "Gemini 4 Argon：最も困難な問題を解決するために構築",
      "summary_ja": "高度な推論と能力により、複雑で難解な課題を解決するために設計された最新モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "AutoTrust AI's JEV-35B Turns Open-Source Decisions Into 204ms API Calls",
      "summary": "AutoTrust AI's open-weights JEV-35B turns a Qwen3.5 MoE into a System 1 decision model that picks among 256 options in 204 ms.",
      "url": "https://alphasignal.ai/news/autotrust-ai-s-jev-35b-turns-open-source-decisions-into-204ms-api-calls",
      "published": "2026-10-14T00:02:51+09:00",
      "title_ja": "AutoTrust AIのJEV-35BがOSの意思決定を204msのAPIコールに変換",
      "summary_ja": "256の選択肢からわずか204ミリ秒で意思決定を行うSystem 1推論モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "RELIA Toolkit Makes AI Release Decisions Replayable and Auditable",
      "summary": "A trending open-source toolkit brings reproducible release gates, A/B ship decisions, and offline-verifiable records to real-time ML decision systems.",
      "url": "https://alphasignal.ai/news/relia-toolkit-makes-ai-release-decisions-replayable-and-auditable",
      "published": "2026-10-13T21:05:14+09:00",
      "title_ja": "AIのリリース決定を再現・監査可能にするRELIAツールキット",
      "summary_ja": "リアルタイムMLシステムのリリース判断を検証可能にするオープンソースツール。"
    },
    {
      "lab": "OpenAI",
      "title": "Higgsfield takes AI video from 1 minute to over 10",
      "summary": "Higgsfield brings creators longer videos with GPT-6 Astra, precise visuals with GPT-Image-2.5, and a path to voice filmmaking with GPT-Live.",
      "url": "https://openai.com/index/higgsfield-longer-videos-voice",
      "published": "2026-10-13T21:00:00+09:00",
      "title_ja": "HiggsfieldがAI動画を1分から10分以上に延長",
      "summary_ja": "GPT-6 Astra等の活用により、長尺で正確な描写のビデオ生成と映画制作を支援。"
    },
    {
      "lab": "Apple ML",
      "title": "Mix, Don't Tune: Bilingual Pre-Training Outperforms Hyperparameter Search in Data-Constrained Settings",
      "summary": "For most languages of the world, language model pre-training operates in a data-constrained regime where models must repeat their training data many times, degrading generalization. Two remedies exist: aggressive hyperparameter tuning such as high weight decay, and mixing in data from a high-resource auxiliary language to directly aid the low-resource target. While hyperparameter tuning regularizes the model by shrinking weights to restrict network capacity, auxiliary data mixing uses a tunable mixing ratio to expand the training distribution and diversify the training signal with new…",
      "url": "https://machinelearning.apple.com/research/mix-dont-tune",
      "published": "2026-10-13T09:00:00+09:00",
      "title_ja": "調整ではなく混合：データ制約下でバイリンガル事前学習がハイパラ探索を凌駕",
      "summary_ja": "低リソース言語の学習において、調整よりも高リソース言語とのデータ混合が有効。"
    },
    {
      "lab": "Apple ML",
      "title": "Large Language Models for Machine Translation Quality Annotation: Humans and Models Are Both Challenged",
      "summary": "Large Language Models (LLMs) are considered to be a more efficient and cost-effective alternative to human judgment for Machine Translation (MT) evaluation. With MT evaluation spanning a large number of language pairs, domains and levels of annotation granularity, LLMs must be thoroughly evaluated across these dimensions before being reliably used as alternatives to human evaluation. In this paper, we evaluate the performance of LLMs for two prominent MT quality evaluation schemes: Multidimensional Quality Metrics (MQM) and Error Span Annotation (ESA) by comparing their agreement with human…",
      "url": "https://machinelearning.apple.com/research/llm-translation-quality-annotation",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "機械翻訳の品質注釈におけるLLM：人間とモデル双方への挑戦",
      "summary_ja": "機械翻訳評価においてLLMが人間の代替となり得るかを複数の評価手法で検証。"
    },
    {
      "lab": "Apple ML",
      "title": "Minions: A Dynamic and Distributed Virtual GPU Cloud Built on Idle Apple Silicon Devices",
      "summary": "The increasing demand for GPU-accelerated machine learning inference has exposed limitations in centralized GPU infrastructures, including high cost, limited elasticity, and long wait times under resource constraints. At the same time, modern Apple Silicon–based macOS devices are equipped with powerful GPUs that remain largely idle during normal usage. This paper presents Minions, a dynamic and distributed virtual GPU cloud that aggregates idle Apple Silicon GPUs across macOS devices to execute large-scale machine learning inference workloads. Minions enables teams to leverage existing…",
      "url": "https://machinelearning.apple.com/research/distributed-gpu-cloud",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "Minions：待機状態のApple Siliconデバイスを分散仮想GPUクラウド化",
      "summary_ja": "Macのアイドル状態のGPUを統合し、大規模な推論ワークロードを実行するシステム。"
    },
    {
      "lab": "Apple ML",
      "title": "Self-Compacting Language Model Agents",
      "summary": "Long agent traces composed of chains of thought and tool calls accumulate stale content that anchor subsequent generations, and eventually outgrow the context window. Existing scaffolds mitigate it with fixed-interval compaction triggered at a token threshold. Such triggers pay no heed to trajectory structure, risking discard of partial results mid-derivation or mid-search.  We propose SELFCOMPACT, a scaffold that allows the model itself to decide when and how to compact. Specifically, it pairs two inference-time elements: (i) a compaction tool the model invokes to summarize the accumulated…",
      "url": "https://machinelearning.apple.com/research/self-compacting-language-agents",
      "published": "2026-10-12T09:00:00+09:00",
      "title_ja": "自己圧縮型言語モデルエージェント",
      "summary_ja": "エージェントが自ら適切なタイミングで履歴を要約・圧縮し、文脈制限を回避する手法。"
    },
    {
      "lab": "Hugging Face",
      "title": "Impactful scheduling for GPU clusters",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/impactful-scheduling",
      "published": "2026-10-10T00:20:29+09:00",
      "title_ja": "GPUクラスターのためのインパクト重視のスケジューリング",
      "summary_ja": "計算リソースの効率を最大化するための、GPUクラスターにおける最適なタスク管理。"
    },
    {
      "lab": "OpenAI",
      "title": "Sophos cuts threat investigation time by 96% with OpenAI Daybreak",
      "summary": "Discover how Sophos uses OpenAI’s Daybreak to cut cyber-threat investigation time by 96% and automate 52% of MDR cases while preserving human oversight.",
      "url": "https://openai.com/index/sophos",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "SophosがOpenAI Daybreakで脅威調査時間を96%削減",
      "summary_ja": "OpenAIの技術を活用し、サイバー脅威調査の高速化と管理ケースの半数自動化を実現。"
    },
    {
      "lab": "OpenAI",
      "title": "Asana cuts model costs 76x in browser tests with GPT-6.1 Sol",
      "summary": "Using GPT-6 Astra in Codex, Asana made its browser agent 76x cheaper and 5x faster in tests to offer customers more capable models.",
      "url": "https://openai.com/index/asana-browser-agent",
      "published": "2026-10-09T16:00:00+09:00",
      "title_ja": "AsanaがGPT-6.1 Solによるブラウザテストでモデルコストを76分の1に削減",
      "summary_ja": "最新モデルの活用でブラウザエージェントを5倍高速化し、劇的なコスト削減を達成。"
    },
    {
      "lab": "OpenAI",
      "title": "How Oracle turns days of work into minutes with ChatGPT and Codex",
      "summary": "Across recruiting, engineering, and operations, Oracle turns specialist knowledge into fast, repeatable workflows with ChatGPT Work and Codex.",
      "url": "https://openai.com/index/oracle",
      "published": "2026-10-09T01:00:00+09:00",
      "title_ja": "OracleがChatGPTとCodexを用いて数日の仕事を数分に短縮",
      "summary_ja": "採用やエンジニアリング等の専門業務を、AIによる反復可能な高速ワークフローへ変換。"
    },
    {
      "lab": "OpenAI",
      "title": "Pollo AI turns creative ideas into campaigns with OpenAI",
      "summary": "With GPT-5.6, GPT-6 Astra, and GPT‑Image‑2.5, Pollo AI helps creators turn bold ideas into detailed images and cinematic video ads.",
      "url": "https://openai.com/index/pollo-ai",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "Pollo AIがOpenAIを活用してクリエイティブなアイデアをキャンペーンに変換",
      "summary_ja": "GPT-6 Astra等を用い、アイデアから詳細な画像や映画のような広告動画を生成。"
    },
    {
      "lab": "OpenAI",
      "title": "LegalOn halves Codex costs while maintaining development speed",
      "summary": "LegalOn cut estimated daily Codex costs by 65% while maintaining development speed. It matched Astra, Sol, and Luna to tasks and managed budgets strategically.",
      "url": "https://openai.com/index/legalon-halves-codex-costs",
      "published": "2026-10-08T21:00:00+09:00",
      "title_ja": "LegalOnが開発速度を維持しつつCodexのコストを半減",
      "summary_ja": "タスクに応じたモデルの使い分けにより、速度を落とさずコストを65%削減。"
    },
    {
      "lab": "Apple ML",
      "title": "Normalizing Trajectory Models",
      "summary": "Diffusion-based models decompose sampling into many small Gaussian denoising steps, an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process. We introduce Normalizing Trajectory Models (NTM), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training. Architecturally, NTM combines shallow invertible blocks within each step with a deep parallel…",
      "url": "https://machinelearning.apple.com/research/normalizing-trajectory-models",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "正規化軌道モデル（NTM）",
      "summary_ja": "少ステップ生成でも正確な尤度を保つ、条件付き正規化流を用いた新しい拡散モデル。"
    },
    {
      "lab": "Hugging Face",
      "title": "The model that didn't exist, so you made it yourself",
      "summary": "",
      "url": "https://huggingface.co/blog/building-with-ml-intern",
      "published": "2026-10-08T09:00:00+09:00",
      "title_ja": "存在しなかったモデルを、あなたが自ら作り上げた",
      "summary_ja": "ユーザーが必要なモデルを自らカスタマイズ・構築したプロセスについての記録。"
    },
    {
      "lab": "Google Research",
      "title": "Does better work always mean better workers?",
      "summary": "",
      "url": "https://research.google/blog/does-better-work-always-mean-better-workers/",
      "published": "2026-10-08T05:19:57+09:00",
      "title_ja": "優れた成果は常に優れた労働者を意味するか？",
      "summary_ja": "AIによる業務効率化が、働く人間やそのスキル評価に与える影響についての考察。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing Falcon ASR",
      "summary": "",
      "url": "https://huggingface.co/blog/tiiuae/falcon-asr",
      "published": "2026-10-07T22:21:03+09:00",
      "title_ja": "Falcon ASRの導入",
      "summary_ja": "高い精度と効率を備えた新しい自動音声認識（ASR）モデルの紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026",
      "published": "2026-10-07T21:45:31+09:00",
      "title_ja": "一つのモデル・ファミリーで二つの金メダル：IOIとIMOに向けたNemotronの微調整",
      "summary_ja": "情報および数学のオリンピック問題で金メダル級の成績を収めたモデルの微調整手法。"
    },
    {
      "lab": "Google DeepMind",
      "title": "EmbeddingGemma 2: an open, lightweight multimodal embedding model",
      "summary": "",
      "url": "https://deepmind.google/blog/embeddinggemma-2-an-open-lightweight-multimodal-embedding-model/",
      "published": "2026-10-07T04:57:04+09:00",
      "title_ja": "EmbeddingGemma 2：オープンで軽量なマルチモーダル埋め込みモデル",
      "summary_ja": "多様なデータ形式に対応した、軽量で利用しやすい新しい埋め込みモデル。"
    },
    {
      "lab": "Google Research",
      "title": "Unlocking Earth AI’s planetary geospatial foundation models for global public health",
      "summary": "Earth AI",
      "url": "https://research.google/blog/earth-ais-planetary-geospatial-foundation-models-for-global-public-health/",
      "published": "2026-10-07T00:05:11+09:00",
      "title_ja": "世界の公衆衛生のためにEarth AIの地球空間基盤モデルを解禁",
      "summary_ja": "公衆衛生の向上のため、地球規模の地理空間データを用いたAIモデルを活用。"
    },
    {
      "lab": "Apple ML",
      "title": "RISED: Rubrics for Agentic Multi-Environment Selection and Self-Distillation",
      "summary": "Training a single LLM agent jointly across diverse interactive environments has attracted increasing attention as a route to generalist agents. Existing curriculum and data-selection strategies often allocate training at the environment level or prioritize local reward-based signals, without explicitly considering relationships between current rollouts across environments for prompt-group selection. Meanwhile, as environments are learned at different rates, all-failure and all-success rollout groups can coexist within a batch, leaving those data without group-relative reward signals. Both…",
      "url": "https://machinelearning.apple.com/research/rised-multi-environment-selection",
      "published": "2026-10-06T09:00:00+09:00",
      "title_ja": "RISED：エージェントの環境選択と自己蒸留のためのルーブリック",
      "summary_ja": "多様な環境で汎用エージェントを効率的に学習させるための新しいデータ選択戦略。"
    },
    {
      "lab": "Google Research",
      "title": "Open and Emergent Problems in Agentic Privacy and Security: A Contextual Angle",
      "summary": "Generative AI",
      "url": "https://research.google/blog/open-and-emergent-problems-in-agentic-privacy-and-security-a-contextual-angle/",
      "published": "2026-10-06T06:08:00+09:00",
      "title_ja": "エージェントのプライバシーとセキュリティにおける未解決・創発的問題",
      "summary_ja": "AIエージェントが直面するセキュリティ上の課題を、文脈的な視点から分析。"
    }
  ]
};
