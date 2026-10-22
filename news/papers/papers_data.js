window.papersData = {
  "updated_at": "2026-10-22 09:29 JST",
  "arxiv": [
    {
      "id": "2610.28623",
      "title": "Planning under Noise with Neural Operators",
      "url": "https://arxiv.org/abs/2610.28623",
      "pdf": "https://arxiv.org/pdf/2610.28623",
      "authors": [
        "Michael Chen",
        "Hong Chul Nam",
        "Xi Deng",
        "Anima Anandkumar"
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
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "We introduce Planning Under Noise (PUN), a neural operator that learns noise-aware value fields for planning in unseen geometries.",
      "signals": [],
      "headline": "不確実な環境下での経路計画を高速化するニューラルオペレータ「PUN」",
      "what": "制御ノイズがある環境での確率的最適制御において、境界条件にNeumann条件とDirichlet条件を組み合わせたPDE（偏微分方程式）を解く手法です。モンテカルロ・ソルバーの結果を学習することで、未知の幾何形状に対する価値場（Value Field）を推定します。",
      "enables": "4Dの再計画ベンチマークにおいて、他のプランナーより3.29倍から32.15倍高速でありながら、ノイズの多い設定で10.7%から60.6%の相対的な成功率向上を達成しました。",
      "why_it_matters": "高次元かつノイズの多い実世界でのナビゲーションにおいて、膨大なサンプリングを必要とする従来の確率的計画法の計算コストを大幅に削減できます。",
      "tags": [
        "ロボティクス",
        "経路計画",
        "ニューラルオペレータ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28626",
      "title": "UniWALM: Unified World Action Language Model for Embodied Robot Control",
      "url": "https://arxiv.org/abs/2610.28626",
      "pdf": "https://arxiv.org/pdf/2610.28626",
      "authors": [
        "Rahul Sajnani",
        "Diego Romeres",
        "Mingyuan Zhang",
        "Kai Gao",
        "Carl Qi",
        "Baichuan Huang"
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
      "comment": "Preprint: 25 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "UniWALM, a unified world-action-language model that learns video, action, and language in a single shared representation",
      "signals": [],
      "headline": "動画・行動・言語を共通表現で統合学習するロボット制御モデル「UniWALM」",
      "what": "複数のモダリティを同期的にデノイジングする単一のバックボーンを用いたモデルです。言語を「メモリ」として自己ループさせることで、外部のプランナーなしで長期的な依存関係を伴うタスクを処理します。",
      "enables": "実世界のアイテム探索タスクにおいて、テキストメモリの生成により成功率を11.1%から61.1%へと大幅に向上させました。これは既存のVLA（Vision-Language-Action）モデルを凌駕する数値です。",
      "why_it_matters": "推論、視覚、行動を別々のコンポーネントとして組み合わせるのではなく、単一のトランスフォーマー内で統合的に扱うことで、記憶が必要な複雑な操作タスクの効率を高めています。",
      "tags": [
        "ロボット制御",
        "VLA",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.24519",
      "title": "Axiomatic World Modeling for Physics Reasoning",
      "url": "https://arxiv.org/abs/2610.24519",
      "pdf": "https://arxiv.org/pdf/2610.24519",
      "authors": [
        "Xinye Yang",
        "Zhenyang Liu",
        "Yuxuan Wang",
        "Yuanyuan Lei"
      ],
      "categories": [
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to NeurIPS 2026",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "We propose Reinforcement Learning with Axiomatic World Modeling (RLAWM), which optimizes the policy by penalizing divergence",
      "signals": [],
      "headline": "公理的世界モデルとの乖離を罰することで物理推論の精度を高めるRLAWM",
      "what": "物理学の推論においてモデルが勝手に前提を書き換える「モデリング・ドリフト」を防ぐため、公理的世界モデル（AWM）を導入した強化学習手法です。抽象的なモデル構築レベルと、構築された世界内での具現化された推論レベルの2段階で報酬を与えます。",
      "enables": "PhysReasonで12.2ポイント、PHYSICSで5.2ポイントの精度向上を達成し、オリンピックレベルの難問に対しても最強のベースラインを10ポイント上回るゼロショット性能を示しました。",
      "why_it_matters": "単なる計算精度の向上ではなく、モデルが認識している物理的な「世界の公理」を正しく保つことに焦点を当て、物理推論の信頼性を根本から改善しています。",
      "tags": [
        "LLM",
        "物理推論",
        "強化学習"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25600",
      "title": "Vector-Quantized World Model: Latent Feedback Motion Planning for Robot Manipulation",
      "url": "https://arxiv.org/abs/2610.25600",
      "pdf": "https://arxiv.org/pdf/2610.25600",
      "authors": [
        "Xuezhou Xu",
        "Chung-Pang Wang",
        "Zhenzhen Li",
        "Benjamin Riviere"
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
        "cap",
        "new"
      ],
      "star_quote": "we introduce Vector-Quantized World Model (VQ-WM), a latent feedback motion planning framework",
      "signals": [],
      "headline": "離散探索と連続制御を統合した世界モデルによる長期間のロボット操作V-WM",
      "what": "ベクトル量子化された潜在空間上での離散的な長期計画と、連続的な視覚フィードバック制御を統合したフレームワークです。準メトリックとして「初到達時間」の推定値を用いることで、プランナーの抽象化レベルをコントローラーの能力に適合させます。",
      "enables": "「ハノイの塔」パズルにおいて、訓練データに全行程が含まれていなくても、短い操作データからの合成により成功率100%を達成しました。",
      "why_it_matters": "世界モデルを用いた計画において、予測エラーの蓄積と行動の到達可能性という2つの主要な課題を、離散と連続のハイブリッド設計で解決しています。",
      "tags": [
        "ロボティクス",
        "世界モデル",
        "動作計画"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25926",
      "title": "MIRA: A Multimodal Illustrated Deep Research Agent for Controllable Reports",
      "url": "https://arxiv.org/abs/2610.25926",
      "pdf": "https://arxiv.org/pdf/2610.25926",
      "authors": [
        "Hongrui Wu",
        "Kaiwen Tuo",
        "Congcong Wang",
        "Gen Li",
        "Shuai Dong",
        "Xinlei Yu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "33 pages, 8 figures, 9 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new",
        "sota"
      ],
      "star_quote": "MIRA achieves state-of-the-art performance among open agents on 7 representative, established multimodal-search",
      "signals": [],
      "headline": "マルチモーダル証拠を統合し図説付きレポートを生成するリサーチ・エージェントMIRA",
      "what": "ウェブ検索を通じてテキストと画像の両方の証拠を収集し、ユーザーの要件に合わせた詳細な図説レポートを生成するエージェントです。証拠収集、レポート提出、フィードバックによる修正、最終納品という4つのステージを管理するMIRA-Harnessを核としています。",
      "enables": "Qwen3.6-35B-A3Bを用いた評価において、7つの主要なマルチモーダル検索・エージェントベンチマークで最高性能を達成し、検証可能な証拠を伴う図説レポートの生成を可能にしました。",
      "why_it_matters": "従来の検索エージェントが軽視しがちだった「画像証拠の活用」と「柔軟なレポート構成の制御」を統合した実用的なフレームワークです。",
      "tags": [
        "LLMエージェント",
        "マルチモーダル",
        "深層調査"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
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
      "id": "2610.27078",
      "title": "LEAF: LUT-aware Efficient Attention on FPGAs",
      "url": "https://arxiv.org/abs/2610.27078",
      "pdf": "https://arxiv.org/pdf/2610.27078",
      "authors": [
        "Arianna Cox",
        "Chang Sun",
        "Lauri Laatu",
        "Benedikt Maier",
        "Aadeesh Sharma",
        "Leo Rozanov"
      ],
      "categories": [
        "cs.LG",
        "hep-ex"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted for the 9th Workshop on Machine Learning and the Physical Sciences (ML4PS 2026)",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "improves accuracy by 1.8 percentage points while using 2.9 times fewer LUTs than the previous state-of-the-art",
      "signals": [],
      "headline": "FPGAネイティブなLUTベース学習による超低遅延Transformer「LEAF」",
      "what": "FPGAのルックアップテーブル（LUT）を考慮した学習を行う、ナノ秒スケールの推論を実現するTransformer層およびLinformer層です。Attentionブロックの行列ベクトル演算を数式形式で残しつつ、射影層やFFN層をハードウェア親和性の高い形式に変換します。",
      "enables": "ジェットタギングのベンチマークにおいて、既存のサブマイクロ秒Transformerと比較してLUT使用量を2.9倍削減しながら、精度を1.8ポイント向上させました。64粒子のLinformer構成で35nsの推論速度を達成しています。",
      "why_it_matters": "CERNのようなリアルタイムシステムが要求するサブマイクロ秒の制約を満たしつつ、FPGAに収まるサイズで高い表現力を維持できるため、物理実験やエッジデバイスでのLLM応用を加速させます。",
      "tags": [
        "FPGA",
        "エッジ推論",
        "Transformer"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28555",
      "title": "Learning Computational Structure for Sample-Efficient Prediction",
      "url": "https://arxiv.org/abs/2610.28555",
      "pdf": "https://arxiv.org/pdf/2610.28555",
      "authors": [
        "Hangyu Zhou",
        "Constantine Dovrolis",
        "Stephen Mussmann"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "36 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "new"
      ],
      "star_quote": "we introduce Learned Wiring (LeWi): each neuron has a learned low-dimensional embedding, only nearby neurons connect",
      "signals": [],
      "headline": "神経回路の空間組織に着想を得て結合と重みを同時学習する「Learned Wiring」",
      "what": "各ニューロンに低次元の埋め込みを学習させ、近傍のニューロン間のみを接続する「Learned Wiring (LeWi)」を提案しています。高次元データの統計的学習において、隠れた計算構造を効率的に捉えるための手法です。",
      "enables": "32種類の計算グラフを用いたベンチマークにおいて、密なネットワーク（Dense Network）と比較して学習曲線下面積を27%削減し、高いサンプル効率を実現しました。また、17のワールドモデル予測タスクのうち16でベースラインを上回っています。",
      "why_it_matters": "次元の呪いを克服するために疎な組成構造を利用しており、物理的な制御やナビゲーションなど、構造的な依存関係が重要なドメインでの効率的な学習に寄与します。",
      "tags": [
        "機械学習",
        "サンプル効率",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28586",
      "title": "Capable Teacher, Myopic Scorer: Reward-Free Teacher Repair for Agentic On-Policy Distillation",
      "url": "https://arxiv.org/abs/2610.28586",
      "pdf": "https://arxiv.org/pdf/2610.28586",
      "authors": [
        "Shu Zhao",
        "Tan Yu"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 5 figures, 13 tables. Project page: https://tree-shu-zhao.github.io/r2s/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "R2S outperforms three state-of-the-art agentic-OPD methods in all twelve teacher-student-environment cells, by 12.8 success points on average",
      "signals": [],
      "headline": "次トークンスコアの近視眼性を解消する蒸留手法「Rollout-to-Scorer Distillation」",
      "what": "エージェントのオンポリシー蒸留において、教師モデルが将来を予測せずに各トークンを評価してしまう「ロールアウト・スコアラー・ギャップ」を解消する手法です。不一致が生じる状態で教師による「やり直し」を行い、その結果に基づいて教師をファインチューニングします。",
      "enables": "3つの環境と複数のモデルを用いた評価において、既存の最先端（SOTA）手法を全ての条件で上回り、平均12.8ポイントの成功率向上を達成しました。報酬設計が困難なタスクでも動作します。",
      "why_it_matters": "教師モデルの評価と実際の行動の乖離を埋めることで、長期的な推論が必要なエージェントタスクにおいて学生モデルがより安定した行動を選択できるようになります。",
      "tags": [
        "LLMエージェント",
        "知識蒸留",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28610",
      "title": "InterWebCoder: Learning Interactive Webpage Generation from Executable Tests via Reinforcement Learning",
      "url": "https://arxiv.org/abs/2610.28610",
      "pdf": "https://arxiv.org/pdf/2610.28610",
      "authors": [
        "Jingyu Xiao",
        "Dasen Dai",
        "Yuxuan Wan",
        "Jen-tse Huang",
        "Yintong Huo",
        "Hongyu Zhang"
      ],
      "categories": [
        "cs.SE"
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
      "star_quote": "InterWebCoder achieves final scores of 48.54 and 48.42 with a 9B backbone, outperforming 30B-level models and Gemini-3.7-Flash",
      "signals": [],
      "headline": "実行可能なテストを用いて対話型Webページ生成を強化する「InterWebCoder」",
      "what": "実世界のインタラクション軌跡を記録し、自己完結型のコードとテストスクリプトを合成するフレームワークです。テスト通過率と視覚的類似度に基づくポリシー最適化（GRPO）を組み合わせ、実行ベースのフィードバックから学習します。",
      "enables": "9BモデルでGemini-3.7-Flashを上回るスコアを達成し、Claude-Sonnet-5に匹敵する性能を示しました。従来のマルチモーダルLLMによる検証と比較して、報酬計算のレイテンシを97%以上削減しています。",
      "why_it_matters": "Webエージェントによる検証を、高速で再現可能な実行テストに置き換えることで、コード生成の精度向上と学習プロセスの大幅な加速を同時に実現しました。",
      "tags": [
        "コード生成",
        "Web開発",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28053",
      "title": "Slots Are Not Speakers: Training-Free Speaker Linking for Frozen Streaming Diarizers",
      "url": "https://arxiv.org/abs/2610.28053",
      "pdf": "https://arxiv.org/pdf/2610.28053",
      "authors": [
        "Aditya Srinivas Menon",
        "Kumarmanas Nethil",
        "Kavya Manohar"
      ],
      "categories": [
        "cs.SD",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Submitted to ICASSP 2027",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "cap"
      ],
      "star_quote": "allows a frozen streaming diarizer to track more speakers than it has output slots.",
      "signals": [],
      "headline": "学習不要で動作し、出力スロット数以上の話者を追跡可能にする「Speaker Linking」",
      "what": "固定されたスロット数を持つストリーミング型話者分離（Diarization）モデルのための後処理手法です。スロット内での話者交代を検出し、外部のスピーカーエンコーダーとマッチングすることで、スロット数を超える話者を特定します。",
      "enables": "4スロットのモデルにおいて、スロット数を超える話者が登場する場合のDER（Diarization Error Rate）を36.8%から22.6%へと劇的に改善しました。また、23人の話者が参加する法廷でのcpWERを82.7%から24.4%に低減しました。",
      "why_it_matters": "モデル自体を再学習することなく、実環境の多人数会議やストリーミング配信における話者追跡性能を大幅に拡張できる実用性の高い手法です。",
      "tags": [
        "音声処理",
        "話者分離",
        "ストリーミング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.23904",
      "title": "LVMH: A Meta-Optimization Harness for Long-Video Agent Memory",
      "url": "https://arxiv.org/abs/2610.23904",
      "pdf": "https://arxiv.org/pdf/2610.23904",
      "authors": [
        "Liwei Che",
        "Benlin Liu",
        "Dai Li",
        "Xiangyan Li",
        "Zijian Wu",
        "Changjiang Li"
      ],
      "categories": [
        "cs.CV",
        "cs.MA"
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
      "star_quote": "SEEM with GPT-5 achieves 65.7% average accuracy, surpassing the previous state of the art by 7.7 percentage points",
      "signals": [],
      "headline": "マルチエージェント型コード探索により長時間ビデオのメモリ設計を自動最適化するLVMH",
      "what": "Long Video Meta-memory Harness (LVMH)は、メモリ設計を「回答モデルを固定したマルチオブジェクト・コード探索」として定式化する自動化フレームワークです。実装、独立レビュー、メタメモリ記録の役割を分担させ、最適なコンテキスト管理ポリシーを自動的に発見します。",
      "enables": "Self-Evolving Evidence Memory (SEEM)と呼ばれる効率的なポリシーを導き出し、GPT-5 miniでの評価において従来手法を精度で7.7ポイント上回りつつ、トークン消費量を約32分の1、応答時間を91分の1に削減しました。",
      "why_it_matters": "従来の手動設計によるメモリ管理ポリシーを自動最適化へ置き換え、パフォーマンスとコスト効率のトレードオフを大幅に改善する実用的なアプローチを提示しています。",
      "tags": [
        "LLMエージェント",
        "ビデオ理解",
        "メモリ管理"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.23951",
      "title": "LatLM: Line-Parallel Language Models with Deferred Commitment",
      "url": "https://arxiv.org/abs/2610.23951",
      "pdf": "https://arxiv.org/pdf/2610.23951",
      "authors": [
        "Shaorong Zhang",
        "Shiyuan Li",
        "Longxuan Yu",
        "Greg Ver Steeg"
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
      "star_quote": "we introduce the Lattice Language Model (LatLM), making commitment schedules an adaptive decoding-time choice.",
      "signals": [],
      "headline": "適応的なデコード決定により推論の誤りを防ぐ並列言語モデルLatLM",
      "what": "Lattice Language Model (LatLM)は、複数の行を並列にデコードする際、各トークンの確定タイミングを適応的に遅延させる（Deferred Commitment）手法です。2D因果マスキングを用いたラティス構造により、先行する文脈が不足している場合に決定を保留し、依存関係が解消された段階でコミットします。",
      "enables": "混合依存関係のあるタスクにおいて、固定スケジュールのLCLMが78.5%の精度に留まる中、96.5%の精度を達成し、自己回帰モデルと比較して半分以下のデコードラウンド数で動作します。",
      "why_it_matters": "従来の並列デコードにおける「依存関係を無視した早すぎる決定」によるエラーの蓄積を解消し、推論の正確性と速度の両立を実現しています。",
      "tags": [
        "LLM",
        "並列計算",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.24462",
      "title": "O-SCD++: Replay-Free Online Scene Change Detection via Recursive Evidence Fusion",
      "url": "https://arxiv.org/abs/2610.24462",
      "pdf": "https://arxiv.org/pdf/2610.24462",
      "authors": [
        "Chamuditha Jayanga Galappaththige",
        "Jason Lai",
        "Lloyd Windrim",
        "Timothy Patten",
        "Donald G. Dansereau",
        "Niko Suenderhauf"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page:https://chumsy0725.github.io/O-SCD/",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our method improves mean intersection over union from 0.489 to 0.575 and throughput from 11.8 to 25.6 frames per second",
      "signals": [],
      "headline": "再帰的証拠統合によりリプレイ不要で高速・高精度なオンライン・シーン変化検知を実現するO-SCD++",
      "what": "3D Gaussian Splattingを用いたオンライン・シーン変化検知手法で、過去の観測を再利用せずに逐次的に更新する再帰的定式化を採用しています。レンダラーの単一バックワードパスのみで各ガウス分布の状態を更新し、ソートに基づくラベルフリーな閾値決定も組み込んでいます。",
      "enables": "PASLCDデータセットにおいて、mIoUを0.489から0.575へ改善し、スループットも11.8fpsから25.6fpsへと倍増させ、オフライン手法をも上回る精度をリアルタイムで達成しました。",
      "why_it_matters": "計算負荷の高い再最適化（リプレイ）を排除することで、精度と速度のトレードオフを解消し、自律エージェントの実環境での変化検知能力を高めています。",
      "tags": [
        "コンピュータビジョン",
        "3D Gaussian Splatting",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25012",
      "title": "Conjugate Compilation: Self-Improving Agentic Co-Compilation for Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.25012",
      "pdf": "https://arxiv.org/pdf/2610.25012",
      "authors": [
        "Annabelle Sujun Tang",
        "Rohan Mahapatra",
        "Christopher Priebe",
        "Hanyang Xu",
        "Manya Ghobadi",
        "Christopher Rossbach"
      ],
      "categories": [
        "cs.LG",
        "cs.DC",
        "cs.PL"
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
      "star_quote": "We introduce CONJUGATE COMPILATION, which reframes speculative decoding as a cross-model compilation problem",
      "signals": [],
      "headline": "投機的デコードをモデル横断的に共同最適化するConjugate Compilation",
      "what": "投機的デコードにおけるドラフトモデルとターゲットモデルを、別個にコンパイルするのではなく「共有実行環境」として一括でコンパイル・最適化する手法です。LLMエージェントがコード編集と実測を繰り返す自己改善型探索により、最適なカーネル融合やメモリアラインメントを見つけ出します。",
      "enables": "NVIDIA B300およびRTX 5090において、従来の実行方式に対し幾何平均で1.37倍、最大で1.59倍の推論高速化を達成し、GPU利用率も約1.5倍向上しました。",
      "why_it_matters": "モデル間の境界を越えたコンパイラ最適化を可能にすることで、推論パイプライン全体のハードウェア効率を極限まで引き出しています。",
      "tags": [
        "LLM",
        "推論加速",
        "コンパイラ"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26090",
      "title": "RGB--Event Object Detection Across Operating Frequencies via Reliability-Supervised Routing and Asymmetric-Resolution Fusion",
      "url": "https://arxiv.org/abs/2610.26090",
      "pdf": "https://arxiv.org/pdf/2610.26090",
      "authors": [
        "Peijun Shi",
        "Jiannan Zhao",
        "Xiujin Zhu",
        "Zhenguo Lao",
        "Chee-Onn Chow",
        "Wei Ru Wong"
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
      "star_quote": "ERA-Det, sets a new state of the art at 63.2 mAP, 3.7 mAP above FlexEvent",
      "signals": [],
      "headline": "高周波数環境下で信頼性ベースのルーティングを行うRGB--イベント物体検知ERA-Det",
      "what": "フレームカメラの合間にイベントカメラからの情報で高速意思決定（180Hz以上）を行う検出器です。場所ごとに最適なセンサー重みを学習する「信頼性監視ルーティング」と、解像度の異なる両センサーを統合する非対称融合を採用しています。",
      "enables": "DSEC-Detデータセットにおいて、180Hzの高頻度動作時でも精度低下を最小限に抑え、従来手法に対し3.7 mAP向上の63.2 mAPというSOTAを達成しました。",
      "why_it_matters": "自動運転など超高速な反応が求められる場面で、情報が疎になるイベントカメラの弱点をフレーム側の情報で補完しつつ、リアルタイム性能を担保しています。",
      "tags": [
        "物体検知",
        "イベントカメラ",
        "自動運転"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
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
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "url": "https://arxiv.org/abs/2610.26625",
      "pdf": "https://arxiv.org/pdf/2610.26625",
      "authors": [
        "Xinhao Ji",
        "Hui En Pang",
        "Hao Li",
        "Kairui Hu",
        "Jiner Wang",
        "Mingze Sun"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 121,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame",
      "signals": [
        "HF ▲121"
      ],
      "headline": "一人称視点ビデオからカメラ・手・物体を世界座標で一括復元するEgoXperience",
      "what": "一人称視点（Egocentric）ビデオから、カメラの動き、周囲の3D形状、手と物体のインタラクションを共通の世界座標系で一元的に再構築する手法です。SLAMと物体トラッキングを統合した自動アノテーションエンジン「EgoX-Engine」で作成した6Mサンプル以上のデータを活用します。",
      "enables": "単一のフォワードパスで、カメラ・手・深度の誤差をそれぞれ68.9%、65.6%、42.9%削減し、既存のベースラインを大幅に上回る一貫した世界構築を実現しました。",
      "why_it_matters": "バラバラに推定されがちだった「自己」「物体」「環境」を、大規模な自動教師あり学習により首尾一貫した一つの3D世界として捉えることに成功しています。",
      "tags": [
        "3D復元",
        "一人称視点理解",
        "ロボティクス"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "url": "https://arxiv.org/abs/2610.25736",
      "pdf": "https://arxiv.org/pdf/2610.25736",
      "authors": [
        "Chao Yu",
        "Shu'ang Yu",
        "Hao Lin",
        "Hongzhi Zang",
        "Yuxiang Yan",
        "Chenxi Jiang"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 107,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience",
      "signals": [
        "HF ▲107"
      ],
      "headline": "デプロイ中の失敗を共有して共同でポリシーを改善するロボット学習CEL",
      "what": "複数のロボット（フリート）が実稼働中に経験した失敗を共有し、追加の専門家アノテーションなしに自律的に学習するCollective Experience Learning (CEL)パラダイムです。失敗時のコンテキストから共有プールの成功例を検索し、それをもとにポリシーを更新するFERT手法を用います。",
      "enables": "96台のロボットによる共同学習において、多段階のパッキングタスクの成功率を79.2%から98.3%に向上させ、フリート規模の拡大が性能向上に直結することを示しました。",
      "why_it_matters": "人間による介入（遠隔操作）への依存を減らし、デプロイされたロボット群が自己改善を続けるためのスケーラブルな基盤を提供します。",
      "tags": [
        "ロボティクス",
        "フリート学習",
        "自己改善"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "url": "https://arxiv.org/abs/2610.26802",
      "pdf": "https://arxiv.org/pdf/2610.26802",
      "authors": [
        "Zhuofan Josh Ying",
        "Guanglong Sun",
        "Nolan Ho",
        "Kieran Liu",
        "Rui Yang",
        "Andrew Chen"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "38 pages, 13 figures, 20 tables. Code available at https://github.com/zfying/brain-lora",
      "hf_upvotes": 233,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge.",
      "signals": [
        "HF ▲233"
      ],
      "headline": "PEFTにより100B超の超大規模モデルを脳信号エンコーディングに適合させるBrainLoRA",
      "what": "104Bパラメータまでの巨大なマルチモーダルバックボーンを、LoRA（低ランクアダプター）を用いて脳活動予測（Brain Encoding）タスクに最適化する手法です。因果構造を利用して複数のタイムポイントを一括予測し、計算コストを大幅に削減しています。",
      "enables": "Algonauts 2025チャレンジで最高性能を達成し、アンサンブルモデルによってリーダーボード1位を獲得しました。適応後のモデルは脳の感覚トポグラフィを正しく再現する解釈性も備えています。",
      "why_it_matters": "コストのかかる脳データの学習にPEFTを適用することで、超大規模な基盤モデルの持つ表現力を神経科学分野で効率的に活用できることを証明しました。",
      "tags": [
        "神経科学",
        "PEFT",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26337",
      "title": "CIS-Transolver: A Cross-Layer Incremental-State Neural Operator for Fine-Scale Automotive Aerodynamic Flow Prediction",
      "url": "https://arxiv.org/abs/2610.26337",
      "pdf": "https://arxiv.org/pdf/2610.26337",
      "authors": [
        "Jianglong Liu",
        "Zhicheng Zhu",
        "Jia Hao",
        "Liangyue Jia"
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
        "new",
        "sota"
      ],
      "star_quote": "CIS-Transolver achieves the lowest mean relative L2 error among the evaluated methods",
      "signals": [],
      "headline": "層間でのインクリメンタルな状態遷移により微細な流体解析を実現するCIS-Transolver",
      "what": "自動車の空力シミュレーションにおいて、微細な形状周囲の複雑な流れを予測するためのニューラルオペレーターです。局所的な詳細情報を幾何モーメント状態として符号化し、層を跨いで伝播・更新し続けることで、大域的な相関と局所的な詳細の両立を図ります。",
      "enables": "ShapeNet-Carの圧力予測で16.38%、AhmedMLの速度予測で15.60%の相対誤差削減を達成し、評価したすべての空力ベンチマークで最高精度を記録しました。",
      "why_it_matters": "従来手法が苦手としていた「局所的な細かい流れの情報の損失」を防ぐ仕組みを導入し、複雑な形状に対する実用的な空力予測の精度を向上させました。",
      "tags": [
        "流体解析",
        "AI for Science",
        "ニューラルオペレーター"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.27815",
      "title": "ProVe: Proposer-Verifier Decoding",
      "url": "https://arxiv.org/abs/2610.27815",
      "pdf": "https://arxiv.org/pdf/2610.27815",
      "authors": [
        "Ziqi Jin",
        "Weiwen Xu",
        "Jiaxi Li",
        "Yujie Zhong",
        "Qi She",
        "Aixin Sun"
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
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "ProVe-lossless reaches 2.5x average AR throughput without training a separate draft head.",
      "signals": [],
      "headline": "大規模モデルが自身でブロック予測し検証する効率的な推論手法「ProVe」",
      "what": "標準的な自己回帰（AR）モデルをファインチューニングし、1回のフォワードパスで将来のトークンブロックを予測する「Proposer」として動作させ、別のパスで検証を行う手法です。検証器には小型モデルまたはProposer自身を利用できます。",
      "enables": "32Bモデルを用いたProVe-lossless設定で、精度の低下なしに平均2.5倍のスループット向上を達成しました。小型の3B検証器を用いた場合、わずかな精度低下で2.7倍の高速化が可能です。",
      "why_it_matters": "投機的デコーディング（Speculative Decoding）におけるドラフトモデルの役割を大規模モデルに持たせることで、別途ドラフト用のヘッドを学習させる手間を省きつつ、高い推論効率を実現します。",
      "tags": [
        "推論加速",
        "LLM",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28559",
      "title": "Large Flow Language Models",
      "url": "https://arxiv.org/abs/2610.28559",
      "pdf": "https://arxiv.org/pdf/2610.28559",
      "authors": [
        "Arnav Chavan",
        "Chanhyuk Lee",
        "Udbhav Bamba",
        "Jaehoon Yoo",
        "Seunghoon Hong",
        "Aditi Raghunathan"
      ],
      "categories": [
        "cs.CL",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code available at: https://github.com/lafa-gh/large-flow-lms",
      "hf_upvotes": 10,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "This yields 2.54x the throughput of an AR model at comparable quality, outperforming multi-token prediction",
      "signals": [],
      "headline": "連続フローを言語モデルに適用し高速な並列生成を実現する「Lafa」",
      "what": "8Bパラメータ規模にスケーリングされた、ブロック単位のフローベース言語モデルです。因果的アテンションを持つプレフィックスと、各ブロック内の双方向かつ非同期なフローを組み合わせた設計を採用しています。",
      "enables": "30Bトークン未満の学習データで、自己回帰（AR）モデルと同等以上の性能を達成しつつ、ARモデルの2.54倍のスループットを実現しました。マルチトークン予測（MTP）や離散拡散モデルを上回る性能を示しています。",
      "why_it_matters": "離散拡散モデルでは困難だった数十億パラメータ規模での言語モデリングを効率的に実現し、並列生成と自己投機的デコーディングの両立を可能にしました。",
      "tags": [
        "言語モデル",
        "並列生成",
        "Flow Matching"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26938",
      "title": "GRaSP: Latency-Aware Optimization for Geo-Distributed Retrieval-Augmented Generation",
      "url": "https://arxiv.org/abs/2610.26938",
      "pdf": "https://arxiv.org/pdf/2610.26938",
      "authors": [
        "Hardik Ruparel",
        "Raj Kumar Pandey",
        "Pramod Kumar"
      ],
      "categories": [
        "cs.IR",
        "cs.AI",
        "cs.CL"
      ],
      "venues": [
        "SIGIR"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at the 4th International ACM SIGIR Conference on Information Retrieval in the Asia Pacific (SIGIR-AP 2026)",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We formalize the Geo-RAG Selection Problem (GRaSP), a drop-in re-scoring layer that decays relevance by latency and adds an optional cost penalty",
      "signals": [],
      "headline": "地理分散型RAGにおいてレイテンシとコストを最適化する再スコアリング層「GRaSP」",
      "what": "地理的に分散したサーバー環境において、検索の質だけでなくWANのレイテンシや転送料金を考慮してドキュメントを選択する手法です。検索結果の適合度をレイテンシで減衰させる欲張りアルゴリズムを用います。",
      "enables": "エンドツーエンドのQAタスクにおいて、適合度のみを優先する場合と比較して、回答精度（EM）の低下をわずか0.062に抑えつつ、コンテキスト取得のレイテンシを43%削減しました。",
      "why_it_matters": "データ所在地やネットワークコストが制約となる実用的なRAGシステムにおいて、追加学習なしで導入でき、パフォーマンスのPareto最適化を可能にします。",
      "tags": [
        "RAG",
        "分散システム",
        "最適化"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26904",
      "title": "Pareto-Optimal RTL Code Generation via Multi-Objective Reinforcement Learning with Large Language Models",
      "url": "https://arxiv.org/abs/2610.26904",
      "pdf": "https://arxiv.org/pdf/2610.26904",
      "authors": [
        "Koki Takeshita",
        "Kenji Uebayashi",
        "Hikaru Tomonari",
        "Masaya Tsunokake",
        "Koichiro Yawata",
        "Tatsuya Sasaki"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at COLM 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "propose a learning method for LLM-based circuit generation that optimizes, not the quality of a single circuit, but the quality and diversity of the entire circuit set",
      "signals": [],
      "headline": "多目的強化学習により電力・遅延・面積が最適なRTL回路を生成する「MORL-LLM」",
      "what": "ハードウェア設計（RTL）生成において、電力（Power）、性能（Performance）、面積（Area）のトレードオフ（PPA）を最適化する手法です。Hypervolume Contribution（HVC）に基づく報酬関数を用い、多様なPareto最適解を生成するよう学習します。",
      "enables": "PPA最適化を行わないベースラインと比較して、相対的なハイパーボリューム（指標）を13.3ポイント向上させ、単一目的の強化学習よりも多様で高品質な回路セットの生成に成功しました。",
      "why_it_matters": "設計要件に応じて「低電力重視」や「低遅延重視」といった異なる最適化が必要な実務において、AIが設計者に複数の選択肢を提示できる利点があります。",
      "tags": [
        "LLM",
        "ハードウェア設計",
        "強化学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.26909",
      "title": "Uncertainty Gates the Gradient: Adaptive Updates for Generalized Few-Shot 3D Segmentation",
      "url": "https://arxiv.org/abs/2610.26909",
      "pdf": "https://arxiv.org/pdf/2610.26909",
      "authors": [
        "Yifei Zhao",
        "Fanyu Zhao",
        "Shengtang Wu",
        "Han Zhang",
        "Ruike Cao",
        "Yinsheng Li"
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
      "star_codes": [
        "sota"
      ],
      "star_quote": "On ScanNet200 and ScanNet++ (1-/5-shot), UGA sets new state of the art with an average +3.08 HM IoU over the strongest prior baseline.",
      "signals": [],
      "headline": "不確実性を利用して勾配更新を制御するFew-shot 3Dセグメンテーション「UGA」",
      "what": "少量のサンプルから3D点群のセグメンテーションを行う際、サンプルの信頼度（不確実性）を推定し、勾配の更新をゲート制御する手法です。信頼性の低いサンプルがモデルの最適化軌跡を乱すのを防ぎます。",
      "enables": "ScanNet200およびScanNet++のベンチマークにおいて、最強のベースラインと比較して平均3.08ポイントのHM IoU向上を達成し、新しい状態（SOTA）を記録しました。",
      "why_it_matters": "オクルージョンやノイズが多い3Dデータにおいて、低品質なアノテーションから誤った幾何パターンを学習してしまうリスクを軽減し、ロバストな概念学習を可能にします。",
      "tags": [
        "3Dビジョン",
        "Few-shot学習",
        "セグメンテーション"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27119",
      "title": "PORA: Learning When More Reasoning Pays Off for LLM Agents",
      "url": "https://arxiv.org/abs/2610.27119",
      "pdf": "https://arxiv.org/pdf/2610.27119",
      "authors": [
        "Bo Yan",
        "Qi Zhang",
        "Zhen Tan",
        "Tianlong Chen",
        "Song Wang"
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
        "sota"
      ],
      "star_quote": "On BFCL memory, it exceeds the strongest existing method by 17.4--32.9 percentage points.",
      "signals": [],
      "headline": "予算に応じて「思考の深さ」を適応的に選択するLLMエージェント「PORA」",
      "what": "タスクの実行中に「短時間の思考（Short Reasoning）」と「長時間の思考（Long Reasoning）」のどちらが効果的かを判断するコントローラーです。過去の試行から長期的な価値を見積もり、残りの予算と照らし合わせて選択を行います。",
      "enables": "計算予算を節約しながら、コードや数学のタスクにおいて、常に長時間思考する設定と同等以上の性能を達成しました。特に数学ではモデルへのリクエスト数を31.2%削減しつつ精度を維持しています。",
      "why_it_matters": "推論コストやAPI制限がある中で、エージェントが効率的にタスクを完了させるための「思考の資源配分」という重要な課題に対処しています。",
      "tags": [
        "LLMエージェント",
        "推論最適化",
        "計算資源"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27146",
      "title": "PRIMFLOW: Learning Trajectory Primitives for Few-Step Distillation",
      "url": "https://arxiv.org/abs/2610.27146",
      "pdf": "https://arxiv.org/pdf/2610.27146",
      "authors": [
        "Hongyi Fang",
        "Benjia Zhou"
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
      "star_quote": "achieves a T-FID of 20.92 and an HPSv2 score of 28.35 at one NFE, improving both metrics over a trajectory-distillation baseline.",
      "signals": [],
      "headline": "連続的な軌跡プリミティブを学習し、1ステップでの画像生成を強化する「PRIMFLOW」",
      "what": "教師モデルのサンプリング軌跡に沿った累積変位を「軌跡プリミティブ」として学習する蒸留手法です。固定された時間刻みに依存せず、局所的な速度情報から大域的な更新を直接学習します。",
      "enables": "大規模なText-to-Image生成において、わずか1回のネットワーク評価（NFE）でT-FID 20.92を達成し、従来の軌跡蒸留ベースラインを上回る画質と忠実度を実現しました。",
      "why_it_matters": "拡散モデルの推論を極限まで高速化（1ステップ化）しつつ、従来の離散的な予測手法よりも高い精度で教師モデルの挙動を再現できる点が重要です。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "モデル蒸留"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27159",
      "title": "Learned Control Variates for Rare Grid-Outage Estimation at Electric Vehicle Charging Stations",
      "url": "https://arxiv.org/abs/2610.27159",
      "pdf": "https://arxiv.org/pdf/2610.27159",
      "authors": [
        "Sulyman Iyanda",
        "Mansur Arief"
      ],
      "categories": [
        "cs.AI",
        "cs.CE",
        "cs.SY",
        "eess.SY",
        "stat.ML"
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
      "star_quote": "we propose a control variate (CV) built from a learned classifier of the outage, trained on cheap observable features such as temperature and load forecasts.",
      "signals": [],
      "headline": "EV充電による電力網の稀な停電リスクを推定する学習型制御変量法",
      "what": "電気自動車（EV）の急速充電が電力網に負荷をかける際、発生確率の極めて低い大規模停電（レアイベント）を推定する手法です。機械学習モデルを「制御変量（Control Variates）」として利用し、モンテカルロ・シミュレーションの分散を削減します。",
      "enables": "インドネシアのSurabaya市の電力網シミュレーションにおいて、シミュレーション回数を増やすことなく、従来のモンテカルロ法と比較して停電日数の推定誤差を3分の1に削減し、分散の約60%を除去しました。",
      "why_it_matters": "計算コストの高い電力シミュレーターを用いながら、10年に1度といった稀なリスクを精度良く評価できるため、高信頼なインフラ設計に寄与します。",
      "tags": [
        "スマートグリッド",
        "リスク評価",
        "機械学習"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27200",
      "title": "Preference-Aware Pareto Steering for Multi-Task Speech LLMs",
      "url": "https://arxiv.org/abs/2610.27200",
      "pdf": "https://arxiv.org/pdf/2610.27200",
      "authors": [
        "Liuyuan Jiang",
        "Vishal Sunder",
        "Samuel Thomas",
        "Brian Kingsbury",
        "Jeff Kuo",
        "Lisha Chen"
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
        "sota"
      ],
      "star_quote": "increases endpoint-inclusive normalized hypervolume by 17.8% over fixed loss weighting.",
      "signals": [],
      "headline": "音声LLMの多タスク性能を動的に調整するPareto最適化学習「EA-SURF」",
      "what": "音声認識、翻訳、タイムスタンプ予測など、複数のタスクを同時に学習する音声LLMにおいて、学習中に損失の重みを適応的に変化させる手法です。ユーザーが望む特定のタスク優先度（Preference）にモデルを誘導します。",
      "enables": "固定された重みで学習する場合と比較して、全タスクの性能バランスを示す正規化ハイパーボリュームを17.8%向上させ、指定した優先度通りの性能分布を達成しました。",
      "why_it_matters": "一つのモデルで複数の機能を担う音声モデルにおいて、デプロイ先の要件（例：翻訳精度を重視したい）に合わせた最適なチューニングを自動化できます。",
      "tags": [
        "音声LLM",
        "多目的最適化",
        "マルチタスク"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27290",
      "title": "TEX: Test-Time Scaling Testing Agents via Execution-based Cross-Validation",
      "url": "https://arxiv.org/abs/2610.27290",
      "pdf": "https://arxiv.org/pdf/2610.27290",
      "authors": [
        "Akash Gokul",
        "Srijan Bansal",
        "Yingbo Zhou",
        "Semih Yavuz"
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
        "sota"
      ],
      "star_quote": "On SWT-Bench Verified, TEX achieves 86.4%, establishing a new state-of-the-art and improving +9.0% over single-agent baselines.",
      "signals": [],
      "headline": "エージェント間の相互実行検証によりコード修正精度を高める「TEX」",
      "what": "複数のエージェントがテストケースとコード修正（パッチ）を並列生成し、お互いの出力をクロス実行して検証するフレームワークです。実行結果のフィードバック行列を用いて、エージェントが自身の解を洗練させます。",
      "enables": "ソフトウェア修正ベンチマークであるSWE-bench Verifiedにおいて、86.4%という新たなSOTAを達成し、単一エージェントのベースラインから9.0%の精度向上を記録しました。",
      "why_it_matters": "単に多くの候補を生成するだけでなく、実行ベースの客観的なフィードバックを共有・活用することで、長期間のタスクにおける推論の信頼性を高めることができます。",
      "tags": [
        "LLMエージェント",
        "コード生成",
        "自己修正"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27558",
      "title": "AnchorRM: Parallel Intra-Batch State Reconstruction with Anchor-Based Residual Memory for Temporal Graph Neural Networks",
      "url": "https://arxiv.org/abs/2610.27558",
      "pdf": "https://arxiv.org/pdf/2610.27558",
      "authors": [
        "Haroon Gharwi",
        "Kai Shu",
        "Yue Dai"
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
      "star_quote": "we propose AnchorRM, an anchor-based residual memory mechanism that reconstructs event-specific intra-batch node states without executing sequential recurrent updates.",
      "signals": [],
      "headline": "バッチ内のノード状態を並列に再構築し高速化する動的グラフ学習「AnchorRM」",
      "what": "時間とともに変化するグラフ（Temporal Graph）の学習において、逐次的なメモリ更新を回避する手法です。バッチ開始時の状態を固定「アンカー」とし、バッチ内の履歴から残差を計算して各イベントの個別状態を並列に推定します。",
      "enables": "動的グラフの学習において、平均6.16倍（最大10.05倍）の高速化と、最大40倍のバッチサイズのスケーリングを達成しました。これにより、予測精度を維持したまま学習効率を大幅に向上させました。",
      "why_it_matters": "メモリベースの動的グラフ学習におけるボトルネックであった「逐次処理による依存関係」を解消し、GPUの並列演算能力を最大限に活用可能にしました。",
      "tags": [
        "グラフニューラルネットワーク",
        "高速化",
        "動的グラフ"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27812",
      "title": "SliMOO: Interpretable Multi-Objective Evolutionary Search for LLM Depth Pruning",
      "url": "https://arxiv.org/abs/2610.27812",
      "pdf": "https://arxiv.org/pdf/2610.27812",
      "authors": [
        "Guanchen Li",
        "Yixing Xu",
        "Xuanwu Yin",
        "Dong Li",
        "Emad Barsoum"
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
      "star_quote": "Llama-3.1-70B at 25% sparsity, it improves the math-domain average from 24.33% to 34.40% and the code-domain average from 35.03% to 39.14%.",
      "signals": [],
      "headline": "多目的進化アルゴリズムを用いたLLMの解釈可能な層削除「SliMOO」",
      "what": "LLMの深さを削減（ pruning）する際、タスクごとに重要な層が異なる性質を利用するフレームワークです。層の寄与度を事前にマップ化し、NSGA-IIアルゴリズムを用いて複数のタスク性能を維持するPareto最適な削除パターンを探索します。",
      "enables": "Llama-3.1-70Bを25%疎にした場合、従来の単純な手法と比較して数学ドメインの平均スコアを24.33%から34.40%へ、コードドメインを35.03%から39.14%へと大幅に改善しました。",
      "why_it_matters": "単純なランキングによる層削除では特定のベンチマーク性能が損なわれやすいという課題を、多目的最適化によって解決し、汎用性を保ったままの軽量化を可能にします。",
      "tags": [
        "モデル軽量化",
        "LLM",
        "進化計算"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28355",
      "title": "Beyond the Point Mass: Acceptance-Derived Weights and Distributional Losses for Speculative Decoding",
      "url": "https://arxiv.org/abs/2610.28355",
      "pdf": "https://arxiv.org/pdf/2610.28355",
      "authors": [
        "Tianyu Wu",
        "Zhuohan Wang",
        "Jonathan Geuter",
        "Yu Yao",
        "Weifan Jiang",
        "Chengxi Zhang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/Lucas-TY/D-PAL-SpecForge",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We derive D-PAL (Dynamic Position-wise Acceptance Loss) from the exact expected accepted length, using this overlap as the acceptance signal.",
      "signals": [],
      "headline": "受理率の数理モデルから導出した投機的デコーディングの最適損失「D-PAL」",
      "what": "投機的デコーディングにおけるドラフトモデルの学習手法を改善したものです。ターゲットモデルの分布との「重なり（Overlap）」に基づいて、各トークン位置の重み付けと、ログ受理率（Log Acceptance）に基づく損失関数を導入します。",
      "enables": "Qwen3-4Bをターゲットとした評価において、既存手法のD-PACEを上回る平均受理長とスループットを達成しました。また、Rényiダイバージェンスを用いた損失が受理率の向上に有効であることを示しました。",
      "why_it_matters": "ターゲットモデルの分布を点推定ではなく分布として捉えることで、拒絶サンプリングの理論に合致したより効率的なドラフトモデルの学習が可能になります。",
      "tags": [
        "推論加速",
        "LLM",
        "投機的デコーディング"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27678",
      "title": "PhonoBridge: Error-Aware Phoneme-Mediated EMG-to-Text Reconstruction",
      "url": "https://arxiv.org/abs/2610.27678",
      "pdf": "https://arxiv.org/pdf/2610.27678",
      "authors": [
        "Wen Qiu",
        "Jiacheng Zhang",
        "Xuanda Chen",
        "Siqi Cai",
        "Haizhou Li"
      ],
      "categories": [
        "cs.SD",
        "cs.CL",
        "cs.HC"
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
      "star_quote": "PhonoBridge achieves 24.77% WER, outperforming the previously reported best of 28.27% on the same test split.",
      "signals": [],
      "headline": "音素を媒介としLLMで誤りを補正する筋電位からの発話復元「PhonoBridge」",
      "what": "喉の表面の筋電位（EMG）から「声を出さない会話」をテキスト化する技術です。EMGを直接テキストにするのではなく、一旦「音素」に変換し、その音素列に含まれる誤りをLLMが文脈から補正して最終的なテキストを生成します。",
      "enables": "オープンデータセットにおいて、単語誤り率（WER）を従来の28.27%から24.77%へと改善し、最高精度を更新しました。音素列への人工的なノイズ付加による学習（EPGA）が効果を発揮しています。",
      "why_it_matters": "音声データとEMGデータのペアが少ないという課題を、音素を介することで大量のテキストデータを利用可能にし、かつフロントエンドの認識ミスに強いシステムの構築に成功しました。",
      "tags": [
        "ヒューマンコンピュータインタラクション",
        "音声認識",
        "LLM"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.24814",
      "title": "SL-Ground: Sentence-Level Grounding for Fine-Grained Open-Vocabulary Object Detection",
      "url": "https://arxiv.org/abs/2610.24814",
      "pdf": "https://arxiv.org/pdf/2610.24814",
      "authors": [
        "Yang-Syu Li",
        "Cheng-Huan Yang",
        "Chia-Yung Jui",
        "Peggy Joy Lu"
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
      "star_quote": "At the finest car-model granularity, SL-Ground raises AP over the token-level variant from 14.5 to 70.6",
      "signals": [],
      "headline": "文レベルの接地により高精度なオープン語彙物体検知を実現するSL-Ground",
      "what": "従来のトークン単位でのマッチングではなく、カテゴリ説明文全体を一つのベクトルとして符号化して物体クエリと照合するSentence-Level Grounding手法です。属性が複雑に組み合わさった詳細な説明（fine-grained description）に対する検知能力を強化します。",
      "enables": "Stanford Carsベンチマークの最も詳細な階層において、AP（平均精度）を従来の14.5から70.6へと大幅に向上させ、完全語彙学習時には86.0に達しました。",
      "why_it_matters": "オープン語彙検知における「単語の断片化」による情報損失というボトルネックを解消し、複雑な条件指定が必要な実用的な物体検知の精度を向上させます。",
      "tags": [
        "物体検知",
        "オープン語彙",
        "マルチモーダル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25474",
      "title": "P(Yes): 15$\\times$ Improvements via Test-Time Scaling of Decision Models",
      "url": "https://arxiv.org/abs/2610.25474",
      "pdf": "https://arxiv.org/pdf/2610.25474",
      "authors": [
        "Lev Stambler"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "22 pages, 5 figures. Interactive version: https://research.tearlabs.ai/pyes-search/ . Code and data: https://github.com/tear-labs/pyes-search",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We add test-time search to frozen decision models, with no training: we show the model a complete proposed answer",
      "signals": [],
      "headline": "テスト時の「Yes」判定の確率探索により、論理パズルの正解数を15倍にするP(Yes)",
      "what": "モデルを学習させることなく、テスト時に提案された回答の正しさを「Yes」と言う確率に基づいて探索・最適化する手法です。個々の回答を1つずつ修正する編集型探索、または複数の回答を同時に更新する結合最適化を用います。",
      "enables": "Qwen3.8-27Bを用いた論理パズル128件の評価で、完全に正解したパズル数を2から30へと15倍に増加させ、正解精度を27.8%から48.5%へ向上させました。",
      "why_it_matters": "モデル内部の自己評価指標を活用するだけで、学習なしに推論時の性能を大幅に引き上げられることを示しており、テスト時計算量（Test-time scaling）の新たな可能性を提示しています。",
      "tags": [
        "LLM",
        "推論時最適化",
        "論理推論"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25523",
      "title": "FracTS: Hierarchical and Autoregressive Time Series Generation",
      "url": "https://arxiv.org/abs/2610.25523",
      "pdf": "https://arxiv.org/pdf/2610.25523",
      "authors": [
        "Jiayu Li",
        "Umair Afzal",
        "Zilong Zhao",
        "Milad Abdollahzadeh",
        "Uzair Javaid",
        "Biplab Sikdar"
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
      "star_quote": "predictive ML utility is averagely improved by 100.0% and 75.0-81.0% for unconditional and conditional time series datasets",
      "signals": [],
      "headline": "階層的・自己回帰的な多変量時系列生成で長期コヒーレンスを実現するFracTS",
      "what": "画像のフラクタル生成に触発され、1次元の時系列データに対して多スケール表現を学習する階層的な自己回帰モデルです。大域的な軌道構造を粗いスケールで、局所的なダイナミクスを細かいスケールで捉えつつ、静的な特徴量も取り込んで生成します。",
      "enables": "5つのデータセットでの実験において、予測精度の有用性が非条件付き生成で100%、条件付き生成で75〜81%改善し、長期の相関保持能力でも従来手法を凌駕しました。",
      "why_it_matters": "従来の自己回帰モデルが抱えていたエラーの蓄積と長期依存関係のモデル化の困難さを、階層的なアプローチによって克服しています。",
      "tags": [
        "時系列生成",
        "自己回帰モデル",
        "データ拡張"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25646",
      "title": "Spherical Fixed-Point Reasoners: Adaptive Loop Halting on the Hypersphere",
      "url": "https://arxiv.org/abs/2610.25646",
      "pdf": "https://arxiv.org/pdf/2610.25646",
      "authors": [
        "Arber Zela",
        "Artavazd Maranjyan",
        "Pol Puigdemont",
        "David Berghaus",
        "Valentyn Boreiko",
        "Volkan Cevher"
      ],
      "categories": [
        "cs.AI",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "37 pages, 24 figures, 6 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce Spherical Fixed-Point Reasoners (SFPRM), which perform the same computation on the unit hypersphere",
      "signals": [],
      "headline": "超球面上での反復演算により適応的に計算量を調整するSpherical Fixed-Point Reasoners",
      "what": "入力を繰り返し重み共有トランスフォーマーに通す際、計算を単位超球面上の測地的操作（geodesic operations）として定義するSFPRMを提案します。従来のユークリッド空間での不動点推論（FPRM）で見られた係数の結合や発散の問題を構造的に解消しています。",
      "enables": "Sudoku-ExtremeやMaze-Hardなどの難解な推論タスクにおいて、それぞれ96.6%、87.9%という高いテスト精度を達成し、既存のFPRMを上回る効率的な計算配分を実現しました。",
      "why_it_matters": "入力の難易度に応じて計算ステップ数を適応的に変化させるメカニズムを数学的に安定させ、解釈可能な幾何学的収束特性をモデルに持たせています。",
      "tags": [
        "LLM",
        "適応的計算",
        "アーキテクチャ"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25675",
      "title": "LIRQuant: An Efficient Locally Isolated Rotation Quantization Method for Large Language Models",
      "url": "https://arxiv.org/abs/2610.25675",
      "pdf": "https://arxiv.org/pdf/2610.25675",
      "authors": [
        "Desheng Xu",
        "Hanglin Li",
        "Tianchen Song",
        "Zhiyong Zhao",
        "Kun Zhan"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [
        "EMNLP"
      ],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to EMNLP 2026",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "demonstrate that LIRQuant achieves state-of-the-art accuracy under the challenging W4A4KV4 setting",
      "signals": [],
      "headline": "感度に応じた局所的な回転量子化でLLMの推論効率を最大化するLIRQuant",
      "what": "外れ値の影響を受けやすいチャンネルを特定し、学習可能な回転をそれらに対して選択的に適用するポストトレーニング量子化（PTQ）手法です。他のチャンネルには軽量な固定回転のみを適用することで、最適化の複雑さを低減します。",
      "enables": "LLaMA-3-8Bを25分、20.3GBのビデオメモリで量子化完了し、推論時にはFP16と比較して最大3.5倍のメモリ節約と2.3倍のプリフィル高速化を達成しました。",
      "why_it_matters": "グローバルな変換一辺倒ではなく、チャンネルの不均質性を考慮することで、高精度かつ低リソースでの大規模言語モデルのデプロイを可能にします。",
      "tags": [
        "LLM",
        "量子化",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25723",
      "title": "Learning to Couple: Context-Adaptive Joint Denoising for Diffusion Language Models",
      "url": "https://arxiv.org/abs/2610.25723",
      "pdf": "https://arxiv.org/pdf/2610.25723",
      "authors": [
        "Zilei Shao",
        "Ian Li",
        "Heng Zhao",
        "Kewei Lian",
        "Guy Van den Broeck",
        "Zhe Zeng"
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
      "star_quote": "Codpula sets new state-of-the-art results across a broad suite of reasoning benchmarks",
      "signals": [],
      "headline": "コンテキスト適応型の結合デノイジングにより拡散言語モデルの精度を高めるCodpula",
      "what": "拡散言語モデルにおいて、同時予測されるトークン間の依存関係を明示的にモデル化する手法です。Transformerが生成する潜在変数と、それを結合パラメータに変換する確率推論レイヤー（Codpula）を組み合わせ、コンテキストに応じたトークン間の「結びつき」を調整します。",
      "enables": "数学的推論やコード生成において、既存の拡散言語モデルの精度・レイテンシのパレート境界を更新し、多くのベンチマークで新たなSOTAを記録しました。",
      "why_it_matters": "各ポジションを独立してデノイジングしていた従来の拡散モデルの限界を、条件付き確率推論を導入することで克服し、推論の質と並列性のバランスを最適化しています。",
      "tags": [
        "LLM",
        "拡散モデル",
        "推論加速"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25742",
      "title": "Functional Cross-layer Experts Routing for One-step Diffusion Distillation",
      "url": "https://arxiv.org/abs/2610.25742",
      "pdf": "https://arxiv.org/pdf/2610.25742",
      "authors": [
        "Zile Huang",
        "Ser-nam Lim"
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
      "star_quote": "Across COCO-10K, DeMoE establishes state-of-the-art fidelity and diversity among single-step models",
      "signals": [],
      "headline": "1ステップ拡散蒸留において層間エキスパートのルーティングを最適化するDeMoE",
      "what": "拡散モデルの1ステップ蒸留において、モデル内部の計算資源を効率化するDeMoEを提案します。常にアクティブな「共有バックボーン」と、必要に応じて呼び出される「条件付きルーティング・エキスパート」を組み合わせ、プロンプトに応じた最適な詳細表現を実現します。",
      "enables": "FLUX.2-4Bを用いた生成において、FFNの幅を80.5%しか使用しないにもかかわらず、50ステップを要する元のモデルと同等以上の画質と正確な計数（counting）能力を1ステップで達成しました。",
      "why_it_matters": "1ステップという極めて制限された推論ステップの中で、どのようにモデル容量を割り当てるべきかという課題に対し、MoE構造を用いた有力な解決策を提示しています。",
      "tags": [
        "画像生成",
        "モデル圧縮",
        "拡散モデル"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25763",
      "title": "TrajWAM: An Efficient Trajectory-Guided World Action Model for Dynamic Robotic Manipulation",
      "url": "https://arxiv.org/abs/2610.25763",
      "pdf": "https://arxiv.org/pdf/2610.25763",
      "authors": [
        "Haohan Geng",
        "Sha Zhang",
        "Weishuo Sun",
        "Guanting Ye",
        "Wenhao Yu",
        "Yuang Xie"
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
      "star_quote": "TrajWAM achieves state-of-the-art performance on dynamic object manipulation tasks",
      "signals": [],
      "headline": "軌道予測に基づき高速かつ動的なロボット操作を実現するTrajWAM",
      "what": "対象物の将来の動きをマスク軌道として明示的に予測し、その情報をControlNet経由でビデオモデルに注入してアクションを生成する手法です。ビデオ生成とアクション予測の1ステップ化を実現するために、切り離された蒸留スキームを導入しています。",
      "enables": "動的な物体操作タスクにおいて、1ステップという極低レイテンシでの推論を維持しつつ、物理世界とシミュレーションの両方でSOTA性能を達成しました。",
      "why_it_matters": "視覚的想像（将来予測）と行動生成を強固に結びつけることで、予測エラーが致命的になる動的な操作において高い信頼性と速度を両立しています。",
      "tags": [
        "ロボティクス",
        "世界モデル",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25832",
      "title": "Hihaze: One-Step Diffusion for High-Resolution Real-World Image Dehazing",
      "url": "https://arxiv.org/abs/2610.25832",
      "pdf": "https://arxiv.org/pdf/2610.25832",
      "authors": [
        "Zheng Chen",
        "Yuchen Huang",
        "Xiaoyang Liu",
        "Jue Gong",
        "Linghe Kong",
        "Yulun Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code is available at: https://github.com/zhengchen1999/Hihaze",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "delivers PSNR improvements of 3.62~dB on Dense-Haze and 3.69~dB on NH-HAZE compared with the strongest baselines",
      "signals": [],
      "headline": "1ステップ拡散モデルと大域ガイド付き融合による高解像度画像除霧Hihaze",
      "what": "1ステップでリアルタイムの画像除霧（dehazing）を行う拡散フレームワークです。ヘイズの不均一性を考慮した変調モジュール（ASC、SDA）と、パッチごとの予測の不整合を解消する「大域ガイド付きパッチ融合（GPF）」を特徴とします。",
      "enables": "Dense-Haze等のベンチマークでPSNR値を最大3.69dB改善し、視覚的品質と推論速度の両面で既存のSOTAを凌駕しました。",
      "why_it_matters": "高解像度画像の復元で課題となっていたパッチ間の不一致と計算コストを、効率的なモジュール設計と学習不要の融合手法により解決しています。",
      "tags": [
        "画像復元",
        "拡散モデル",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25929",
      "title": "OmniGround: Strengthening Omni-Modal Temporal Grounding via Attention-Consistency Training",
      "url": "https://arxiv.org/abs/2610.25929",
      "pdf": "https://arxiv.org/pdf/2610.25929",
      "authors": [
        "Zixuan Chen",
        "Depeng Wang",
        "Hao Lin",
        "Ke Xu",
        "Ya Guo",
        "Huijia Zhu"
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
      "star_quote": "OmniGround reaches state-of-the-art omni-modal temporal grounding, including 37.5 mIoU on LongVALE",
      "signals": [],
      "headline": "内部アテンションを基準に位置特定精度を高めるOmniGround",
      "what": "オーディオ・ビデオ・テキストを横断する全方位モーダル（Omni-modal）LLMの時間軸位置特定（Temporal Grounding）を強化する手法です。モデル内部のアテンションが生成されるタイムスタンプよりも正確であるという発見に基づき、アテンションを教師データと整合させる学習（TACG）を行います。",
      "enables": "LongVALEで37.5 mIoU、UnAV-100で35.7 mIoUを達成し、他のタスクの汎用性を維持したまま時間軸の特定精度を大幅に引き上げました。",
      "why_it_matters": "特別なマーカーや追加情報を入力せず、モデルが本来持っている内部証拠を引き出すことで精度を向上させる効率的な学習パラダイムを提案しています。",
      "tags": [
        "マルチモーダル",
        "ビデオ理解",
        "アテンション"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26213",
      "title": "ExMR: Extremity Motion Refinement for Monocular Human Motion Capture",
      "url": "https://arxiv.org/abs/2610.26213",
      "pdf": "https://arxiv.org/pdf/2610.26213",
      "authors": [
        "Tom Wehrbein",
        "Bodo Rosenhahn"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Extended version of the 3DV 2026 paper \"Improving 3D Foot Motion Reconstruction in Markerless Monocular Human Motion Capture\". 17 pages main paper + 4 pages supplementary material. Project page and video: https://twehrbein.github.io/exmr-website/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing hand per-vertex error and ankle joint angle error on MOYO by 19% and 18%, respectively",
      "signals": [],
      "headline": "手足の微細な動きを局所証拠から精密に復元する単眼モーションキャプチャExMR",
      "what": "単眼ビデオから全身だけでなく、手（指）と足の関節の動きを精密に推定するフレームワークです。全身推定後の残差として、手足の局所的なキーポイントや画像特徴を再訪して詳細な回転を補正する「HandMR/FootMR」モジュールを導入しました。",
      "enables": "MOYOデータセット等において、従来手法に対し手の頂点誤差を19%、足首の角度誤差を18%削減し、より自然で正確な動きの復元が可能になりました。",
      "why_it_matters": "全身の統計モデルに依存しすぎて手足の細部がぼやけるという課題を、局所的な画像情報の再評価によって解決しています。",
      "tags": [
        "モーションキャプチャ",
        "コンピュータビジョン",
        "ヒューマンポーズ推定"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.25330",
      "title": "Follow the Mixed Groups: Ridge-Tracking Gaussian Sampling for Zero-Variance Web Rollouts",
      "url": "https://arxiv.org/abs/2610.25330",
      "pdf": "https://arxiv.org/pdf/2610.25330",
      "authors": [
        "Tomas Duncun",
        "Jonah Ellison",
        "Owen Pell",
        "Mateo Ruiz",
        "Hanae Fujita",
        "Ingrid Solberg"
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
      "star_quote": "RIDGE keeps the Gaussian curriculum and changes the coordinate, the center, and the width.",
      "signals": [],
      "headline": "報酬の分散を最大化するガウス分布サンプリングによりGRPOの学習を効率化するRIDGE",
      "what": "強化学習手法のGRPOにおいて、回答の正誤が混ざり合い報酬の分散が大きくなるような「学習効率の高い質問」を重点的にサンプリングする手法です。Beta事後分布から導出されたガウス分布の重み付けを用い、すでに正答率が極端に近い問題をスキップします。",
      "enables": "数学の推論タスク等において、従来のGRPOと比較してロールアウト数を約30%削減しつつ、平均正解精度を最大3.4ポイント向上させました。",
      "why_it_matters": "全正解または全不正解の「学習に寄与しない」サンプルへの計算資源投入を避け、限られたコンピューティングリソースを有効活用するサンプリング戦略を提示しています。",
      "tags": [
        "LLM",
        "強化学習",
        "学習効率"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26165",
      "title": "TriTD: Tri-Partite Trajectory-Distribution Distillation for Real-Time Autoregressive Video Generation",
      "url": "https://arxiv.org/abs/2610.26165",
      "pdf": "https://arxiv.org/pdf/2610.26165",
      "authors": [
        "Jia Li",
        "Xurui Peng",
        "Haowei Zhu",
        "Tianyu Zhao",
        "Jiexi Wang",
        "Youwei Zheng"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "21 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reaching a real-time throughput of 26.8 FPS on a single H100 GPU",
      "signals": [],
      "headline": "リアルタイムな自己回帰ビデオ生成を可能にする3部構成の蒸留フレームワークTriTD",
      "what": "自己回帰ビデオ拡散モデルの累積エラーと推論コストを削減するための3つの蒸留・最適化モジュール（NTD, CGN, OP-DMD）を組み合わせた手法です。ノイズスケジュールの調整により冗長なKVキャッシュの更新を排除し、学習と推論の不整合を抑えます。",
      "enables": "単一のH100 GPU上で26.8 FPSというリアルタイムのスループットを維持しながら、既存のベースラインを超える高品質なビデオ生成を達成しました。",
      "why_it_matters": "ストリーミングビデオ生成などのインタラクティブな用途に耐えうる「画質」と「実行速度」の両立に向けた理論的裏付けと実践的手法を提供しています。",
      "tags": [
        "ビデオ生成",
        "拡散モデル",
        "リアルタイム"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
    },
    {
      "id": "2610.26216",
      "title": "RoAR-VAE: Improving Latent Diffusability through Robust Prediction",
      "url": "https://arxiv.org/abs/2610.26216",
      "pdf": "https://arxiv.org/pdf/2610.26216",
      "authors": [
        "Yang Yue",
        "Fangyun Wei",
        "Yitong Wang",
        "Jinjing Zhao",
        "Henry Zheng",
        "Dong Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code is available at https://github.com/LeapLabTHU/RoAR_VAE",
      "hf_upvotes": 26,
      "star_votes": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "RobustAlign predicts pretrained semantic features from corrupted latents to preserve high-level structure",
      "signals": [],
      "headline": "頑健な意味・外観予測を通じて拡散モデルの学習効率を高めるRoAR-VAE",
      "what": "拡散モデルの入力となる潜在変数を生成するVAEにおいて、破損した潜在変数からも元の意味的特徴や細部の外観を復元できるように学習させる「Robust Prediction」の原則を導入した手法です。生成に重要な情報を潜在空間の目立つ方向に配置します。",
      "enables": "同等の学習コストで、画像生成ベンチマークのスコアを2.19ポイント向上させ、特にFLUX.1-VAEと比較して小さいテキストの再現精度を16.93ポイント改善しました。",
      "why_it_matters": "単に画像を再構成するだけでなく「後の拡散モデルが学習しやすい形式」で情報を符号化することが生成性能の向上に繋がることを示しています。",
      "tags": [
        "画像生成",
        "VAE",
        "潜在空間"
      ],
      "fetched_at": "2026-10-21T09:26:25.501820+09:00"
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
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "url": "https://arxiv.org/abs/2610.27999",
      "pdf": "https://arxiv.org/pdf/2610.27999",
      "authors": [
        "Jihai Zhang",
        "Runjia Qian",
        "Kaiqin Kong",
        "Biao Jiang",
        "Puyi Wang",
        "Siru Chen"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project page, videos, code and models: https://matrix-game-v4-0.github.io/page/",
      "hf_upvotes": 181,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲181"
      ],
      "headline": "軽量エンジンと動画生成モデルによるリアルタイム操作可能な世界「Matrix-Game 4.0」",
      "what": "ゲームの状態管理を行う軽量エンジンと、その出力を高品質な映像に変換する動画生成モデルを分離したシステムです。自然言語による指示でシーンやルールを動的に変更でき、RTX 5090単体での動作を実現しています。",
      "enables": "480pの解像度において、60FPSの安定したゲームプレイと112msの低遅延を実現しました。1ステップのデノイジング設定では最大83FPSのスループットに達します。",
      "why_it_matters": "生成AIによる「プレイ可能な世界」の構築において、計算コストと遅延の壁を克服し、実用的なフレームレートでのインタラクティブな体験を可能にした点が画期的です。",
      "tags": [
        "動画生成",
        "ゲーム開発",
        "リアルタイム推論"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "url": "https://arxiv.org/abs/2610.27628",
      "pdf": "https://arxiv.org/pdf/2610.27628",
      "authors": [
        "Pan Wang",
        "Yihao Hu",
        "Guangyuan Dong",
        "Yitong Lin",
        "Hang Wang",
        "Zimi Liu"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 147,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲147"
      ],
      "headline": "学習時の16倍の長さまで汎化する状態追跡の再帰学習法「PAR」",
      "what": "ループ型言語モデルにおいて、特定のステップ $k$ での出力が最初の $k$ 回の操作結果と一致するように学習し、再帰状態のノルムを一定に保つ手法です。これにより、学習時より遥かに長いステップの実行を可能にします。",
      "enables": "最大32手の移動を学習したQwen2.5-0.5Bモデルにおいて、512手（学習時の16倍）の移動後の状態を95.5%の精度で追跡することに成功しました。これは既存手法の55.7%を大きく上回ります。",
      "why_it_matters": "Chain-of-Thoughtなどの手法が学習データより長い推論で失敗しやすい問題を、進行状況の明示的な整列と状態のスケーリングによって解決し、計算の「深さ」による汎化能力を向上させました。",
      "tags": [
        "LLM",
        "汎化",
        "状態追跡"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28354",
      "title": "S-Agent 2.0: Spatial Reasoning with a General Coding Agent",
      "url": "https://arxiv.org/abs/2610.28354",
      "pdf": "https://arxiv.org/pdf/2610.28354",
      "authors": [
        "Rui Gong",
        "Ruoyu Wang",
        "Yalun Dai",
        "Hao Li",
        "Sidi Yang",
        "Qihao Zhao"
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
      "hf_upvotes": 91,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲91"
      ],
      "headline": "コーディングエージェントに空間認知ツールを統合した「S-Agent 2.0」",
      "what": "汎用的なコーディングエージェント（Qwen等）に、3D知覚ツールキットを装備させた空間推論エージェントです。取得した証拠を永続的な「シーンメモリ」に保存し、自然な空間言語で解釈するループを構築します。",
      "enables": "空間推論ベンチマークMMSI-Benchにおいて、ツールなしのモデルから13.9ポイント、専用システムであるSpatialClawから3.9ポイントの性能向上を達成しました。Gemini-3.8-Flashとの組み合わせでも高い性能を示しています。",
      "why_it_matters": "モデル単体での3D理解の限界を、外部ツールとコード実行による「証拠の解釈ループ」で補完することで、複雑な実世界情報の処理能力を大幅に拡張しました。",
      "tags": [
        "LLMエージェント",
        "空間推論",
        "VLM"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28578",
      "title": "Sage-A1.5: From Long-Horizon Execution to Scientific Exploration with Capability Composition",
      "url": "https://arxiv.org/abs/2610.28578",
      "pdf": "https://arxiv.org/pdf/2610.28578",
      "authors": [
        "Wenjie Lou",
        "Tianshuo Peng",
        "Shiyang Feng",
        "Shengji Tang",
        "Runmin Ma",
        "Ruizhe Chen"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Token-plan for Sage-A1.5: https://discovery.intern-ai.org.cn/token-plan/home?tabIndex=0 model checkpoints: https://huggingface.co/InternScience/Sage-A1.5",
      "hf_upvotes": 63,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲63"
      ],
      "headline": "適応的な役割分担と自己検証を行う35B規模の科学探査エージェント「Sage-A1.5」",
      "what": "長期間のタスク解決のために、タスクの委譲、並列コラボレーション、戦略の自己修正を行う混合エキスパート（MoE）モデルです。単一の回答生成を超え、証拠の検証や科学的な探索を目的とした設計がなされています。",
      "enables": "複数のサブエージェントが独立した文脈で並列に作業することで、干渉を抑えつつ複雑なタスクを効率的に遂行できます。科学的な問いに対して、検査可能な研究成果物を作成することが可能です。",
      "why_it_matters": "AIエージェントの役割を「命令の実行」から「自律的な科学的発見のパートナー」へと拡張し、長時間の推論が必要な高度な研究タスクへの道を開きました。",
      "tags": [
        "LLMエージェント",
        "科学探査",
        "コラボレーション"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28630",
      "title": "SolarRenderer: Few-Step Generative Reference Rendering",
      "url": "https://arxiv.org/abs/2610.28630",
      "pdf": "https://arxiv.org/pdf/2610.28630",
      "authors": [
        "Guian Fang",
        "Shengju Qian",
        "Dongyue Lu",
        "Junchao Huang",
        "Lutao Jiang",
        "Xin Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Technical Report; 28 pages, 17 figures, 10 tables; Project page at https://enderfga.cn/SolarRenderer Code at https://github.com/Enderfga/SolarRenderer",
      "hf_upvotes": 46,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲46"
      ],
      "headline": "わずか4ステップで構造から高精細動画を生成する「SolarRenderer」",
      "what": "ゲームエンジン等の粗い構造情報を、高品質なビデオに変換する構造条件付きレンダラーです。33B規模のバックボーンに軽量なLoRAを適用し、参照パスを活用することでポーズや点群などの多様な表現に対応します。",
      "enables": "従来の50ステップ必要なサンプリングと比較して12.3倍高速な4ステップでの描画を実現しました。768p解像度のビデオにおいて、ストリーミング再生が可能なリアルタイム性能を達成しています。",
      "why_it_matters": "特定のエンジンに依存せず、かつ11種類の未知の構造表現（スケルトンや図面等）に対しても汎化する高い制御性能を持ち、動画生成の柔軟性と速度を両立させています。",
      "tags": [
        "動画生成",
        "レンダリング",
        "LoRA"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    },
    {
      "id": "2610.28594",
      "title": "Learning the 4D World through Point Trajectory Forecasting",
      "url": "https://arxiv.org/abs/2610.28594",
      "pdf": "https://arxiv.org/pdf/2610.28594",
      "authors": [
        "Byungwoo Jeon",
        "Sunghwan Hong",
        "Dohyeon Kim",
        "Jonghoon Lee",
        "Jungwoo Park",
        "Inhee Lee"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "43 pages; 14 figures",
      "hf_upvotes": 41,
      "star_votes": 0,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲41"
      ],
      "headline": "点軌跡の予測を通じて4次元世界を理解するワールドモデル「VPM」",
      "what": "マルチビューの動画履歴と指示を入力とし、将来の映像と「特定の点の3D軌跡」を同時に予測するモデルです。動画生成と同時に物理的な点の動きを学習させることで、3D空間における一貫性を担保します。",
      "enables": "ロボット操作タスクにおいて、動画のみを学習したモデルと比較して、操作の成功率と3D動作の正確性が向上しました。シミュレーションと実環境の両方で高い汎化性能を示しています。",
      "why_it_matters": "見た目の変化（ビデオ生成）を物理的な動き（軌跡）に紐付けることで、より物理的に正しく一貫した「世界の理解」をモデルに獲得させることができ、高度なロボット制御に寄与します。",
      "tags": [
        "ワールドモデル",
        "ロボティクス",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-10-22T09:29:47.616054+09:00"
    }
  ],
  "hf": [
    {
      "id": "2610.21046",
      "title": "PremiseCheck: Efficient Fact-Checking of Human and AI Peer Reviews",
      "abstract": "Peer review is under strain from the growth of submissions, and review comments written by humans or AI can misstate what a paper says. We introduce ReviewFact, a benchmark that labels such factual errors in review comments under one definition across NLP, machine learning, and the natural sciences, and that measures cost and latency alongside accuracy. A frontier LLM checks comments well but must read the whole paper for each check, while cheap decision models, which score whether a statement holds in a text, fall far short on whole comments that mix several implicit assertions. PremiseCheck is a framework that combines the two. An LLM rewrites each comment as explicit premises without reading the paper, and a decision model checks each premise against the paper. When each comment is checked on its own, PremiseCheck reaches accuracy comparable to GPT-5.5 across all three fields at about half its cost, and on NLP reviews at a quarter of its cost and less than half its latency.",
      "upvotes": 728,
      "github_stars": 5,
      "github_repo": "https://github.com/OpenLAIR/PremiseCheck",
      "project_page": "https://openlair.github.io/premisecheck/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21046",
      "arxiv_url": "https://arxiv.org/abs/2610.21046",
      "title_ja": "PremiseCheck：人間とAIによる査読の効率的なファクトチェック",
      "summary_ja": "査読の誤りを検証するベンチマークを導入し、LLMによる前提の書き換えと低コストな判定モデルを組み合わせて、高精度かつ低遅延なファクトチェックを実現する。"
    },
    {
      "id": "2610.20951",
      "title": "LEV: Thinking Fast and Deep with Looped Decision Models",
      "abstract": "Decision models answer typed questions about an input with one probability per option, computed in a single forward pass without generating text. Like the fast System 1 of dual-process theory, they answer at once, but their depth is fixed at training time, so they spend the same computation on easy and hard questions. Models that reason in generated text can think longer, but they pay for every extra step in decoded tokens. We present LEV, a decision model that thinks deeper by rerunning its layers in a loop instead of generating tokens. LEV builds on a language model pretrained as a loop, reads the options after every loop step and trains all steps jointly, so one checkpoint can answer at any depth. On three looped backbones, accuracy rises with depth on the same weights, mostly on hard questions, and a 2.6B LEV goes from 63.2% at depth one to 76.2% at depth four on JevBench. On-demand depth, set per question by a small stopper with a threshold fitted on unlabelled requests, saves 15% to 24% of the computation at a cost of under one accuracy point, level with or slightly above a fixed mix of depths. On a locked test set, the 1.4B and 3B models are 5.4 to 8.8 points more accurate than dense (non-looped) models and cascades of the same latency below 50 ms.",
      "upvotes": 603,
      "github_stars": 7,
      "github_repo": "https://github.com/OpenLAIR/lev",
      "project_page": "https://openlair.github.io/lev/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2610.20951",
      "arxiv_url": "https://arxiv.org/abs/2610.20951",
      "title_ja": "LEV：ループ型意思決定モデルによる「速い思考と深い思考」",
      "summary_ja": "トークン生成の代わりに層をループ実行することで、追加のデコードコストを支払わずに問題の難易度に応じた計算時間をかけ、より深い推論を可能にする意思決定モデル。"
    },
    {
      "id": "2610.22276",
      "title": "MJev-Spatial: System One Spatial Intelligence via Native Attention Matching",
      "abstract": "Spatial intelligence lets an agent perceive and act in the physical world, and many of its judgments must be made at interaction rates: which spatial relation holds, how far an object is, or where to place it. Vision-language models (VLMs) produce these answers by free-form text generation, paying for autoregressive decoding and answer parsing even though the output space is compact: one of a few options, a scalar, or a 2D point. In light of this, we introduce MJev-Spatial, a System 1 multimodal decision model that tackles all three types of spatial understanding tasks within a unified classification framework. Specifically, MJev-Spatial treats each candidate as a class and scores it using the backbone's pretrained query and key projections, without adding parameters. The candidates are the given options for choice tasks, or value bins and image regions refined through coarse-to-fine classification for numerical and point prediction, respectively. At inference, each classification decision takes a single forward pass and generates no answer tokens. To train on heterogeneous spatial data efficiently, we supervise all coarse-to-fine stages jointly with teacher forcing in one forward pass, and combine this with length-aware global batching and cross-GPU load balancing, raising training throughput by 30.8% over the original batching strategy. Built on Qwen3.5-4B and trained on 12.3M question-answer pairs converted from existing spatial datasets, MJev-Spatial achieves the highest overall score (65.64%) among eight tested models, ranks first on seven of twelve benchmarks, and outperforms its unmodified autoregressive base model on all twelve, while running 2.5 times faster than the fastest autoregressive baseline and 5.6 times faster than the base model.",
      "upvotes": 560,
      "github_stars": 17,
      "github_repo": "https://github.com/Fr0zenCrane/MJev-Spatial",
      "project_page": "https://fr0zencrane.github.io/mjev-spatial-project/",
      "comments": 2,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.22276",
      "arxiv_url": "https://arxiv.org/abs/2610.22276",
      "title_ja": "MJev-Spatial：ネイティブなアテンションマッチングによるシステム1空間知覚",
      "summary_ja": "空間理解タスクを分類問題として扱い、候補をクラスとしてスコアリングすることで、逐次的なテキスト生成を介さずに高速かつ直接的な空間推論を可能にする手法。"
    },
    {
      "id": "2610.20424",
      "title": "BizBench: Unveiling Hidden Challenges in Deploying Long-Horizon Agents for Real-World Business",
      "abstract": "Existing long-horizon agent benchmarks often emphasize final task success while providing limited assessment of intermediate execution validity. Yet real-world business operations require agents to navigate extensive, potentially outdated or conflicting policies while satisfying critical constraints throughout execution. These requirements are particularly consequential in high-stakes domains such as payments, where intermediate violations can incur financial losses or regulatory consequences regardless of the final outcome. To bridge this evaluation gap, we introduce BizBench, a multi-turn benchmark grounded in real-world procedures from a leading payments company. Its executable environment integrates 789 knowledge documents and 601 discoverable business tools, with consistent policies, states, and tool behavior. The benchmark comprises 50 tasks involving resource constraints, temporal dependencies, prior commitments, and conflicting or outdated guidance. Each task is validated through reference execution, while deterministic checks assess both goal attainment and execution validity without prescribing a single solution path. Experiments reveal substantial limitations even among frontier models: Claude Opus 5 and GPT-6 Sol achieve strict success rates of only 64.0% and 61.3%, respectively. For Qwen3.8-27B, goal attainment reaches 42.0%, but strict success drops to 32.7%, demonstrating how outcome-based evaluation can mask invalid execution. Beyond success rates, DeepSeek-V4.1-Flash averages 191.3 tool calls per run, approximately 70% more than reference executions, revealing substantial execution overhead. Overall, BizBench establishes a testbed for evaluating and advancing long-horizon agents beyond task completion, toward reliable and constraint-compliant execution in complex business environments.",
      "upvotes": 490,
      "github_stars": 28,
      "github_repo": "https://github.com/ant-intl/BizAgentBench",
      "project_page": "",
      "comments": 3,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.20424",
      "arxiv_url": "https://arxiv.org/abs/2610.20424",
      "title_ja": "BizBench：実世界のビジネスにおける長期エージェント配備の隠れた課題",
      "summary_ja": "最終成功だけでなく、実行過程での規約遵守や制約充足を評価する、実世界の決済業務に基づいた長期的なタスク実行能力を測定するためのベンチマーク。"
    },
    {
      "id": "2610.22471",
      "title": "Has GPT-6-Astra Achieved Embodied Intelligence?",
      "abstract": "GPT-6-Astra demonstrates a level of competence in robotic manipulation and navigation that challenges the conventional paradigm of building specialized models for individual tasks and embodiments. In this report, we ask not only how capable GPT-6-Astra is, but what its capabilities imply for the field. First, we probe the limits of standalone GPT-6-Astra. We conduct a large-scale evaluation across 12 representative benchmarks spanning tabletop manipulation, humanoids, mobile platforms, and dexterous hands. Under a unified protocol that allows in-context learning (ICL) from training-set demonstrations and substantially increases the number of execution steps, GPT-6-Astra achieves unprecedented performance (Fig. 1). Future research may focus on improving 1) the generality of ICL 2) cost and execution time, 3) physical-state verification, 4) recovery from irreversible failures, and 5) long-horizon preservation of progress. Second, we study the agentic harness for embodied control. We identify that close-loop coordination between a high-level \"System 2\" reasoner (i.e., GPT-6-Astra) and a low-level \"System 1\" controller (e.g., π0.5) is costly but effective. Third, we examine GPT-6-Astra on real-world deployment. Our experiments on 8 robot configurations reveal substantial gaps: 1) robot demonstrations required for ICL are expensive to collect, and 2) it is implausible to trade longer execution for higher success rates with physical constraints. Fourth, we envision the next generation of embodied benchmarks. We develop a prototype that 1) derives tasks from real-world needs, 2) provides no in-domain demonstrations, and 3) judges agents on a world clock that keeps running while they deliberate. Taken together, our results suggest that GPT-6-Astra has largely crossed the threshold of embodied competence, but not yet that of practical embodied intelligence.",
      "upvotes": 455,
      "github_stars": 218,
      "github_repo": "https://github.com/OpenSenseNova/SenseNova-RoboRSI",
      "project_page": "https://sensenova.ai/has-gpt-6-astra-achieved-embodied-intelligence",
      "comments": 2,
      "org": "SenseNova",
      "url": "https://huggingface.co/papers/2610.22471",
      "arxiv_url": "https://arxiv.org/abs/2610.22471",
      "title_ja": "GPT-6-Astraは汎用身体知能を達成したか？",
      "summary_ja": "GPT-6-Astraが多様なロボット形態やタスクにおいて、専用モデルを超え、文脈内学習を通じて前例のないレベルの操作・ナビゲーション能力を示すことを報告する。"
    },
    {
      "id": "2610.22200",
      "title": "OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use",
      "abstract": "Computer use has reached a turning point: the focus is expanding from GUI-only interaction to systems that complete tasks on users' computers through visual and programmatic interfaces. We define a generalist computer-use agent (GCUA) as a system in which the model chooses how to observe, act, and organize its work across visual and programmatic interfaces. Yet frontier implementations, such as GPT-6 Astra's computer-use system, remain largely closed, limiting systematic study of their design. We introduce Open Generalist CUA (OpenGCUA), an ongoing project to develop and open the full stack for GCUAs with the community. This report presents the first release of OpenGCUA. Code execution is a key feature of our agent design: it lets intermediate results determine subsequent operations and enables models to apply their existing programming capabilities directly to computer interaction. We also propose harness-to-model decision transfer, moving selected observations and task-state decisions from fixed harness rules to the model. On OSWorld-v2, our full configuration improves task scores across all eight evaluated models, including GPT-6 Astra and Claude Opus 5, raising mean partial score by +19.6 points and reducing reported steps per task by an average of 53.0% relative to batched GUI-only execution. We release our implementation and prompts, evaluation trajectories from all eight models, and preliminary versions of a real-device harness and a cross-device SDK. The harness addresses real-device challenges not fully captured by benchmarks, while the SDK provides a common programming interface across computers, mobiles and browsers. Across four real macOS tasks under our real-device harness, selected Qwen3.8-Max runs use 19.4 times as many reported reasoning tokens as GPT-6 Astra, highlighting substantial differences between models in real-device execution efficiency.",
      "upvotes": 330,
      "github_stars": 396,
      "github_repo": "https://github.com/Tongyi-MAI/OpenGCUA",
      "project_page": "https://tongyi-mai.github.io/OpenGCUA/",
      "comments": 4,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.22200",
      "arxiv_url": "https://arxiv.org/abs/2610.22200",
      "title_ja": "OpenGCUA：汎用コンピュータ操作のための完全オープンスタックに向けて",
      "summary_ja": "視覚とプログラムインターフェースを統合してPCを操作する汎用エージェントの開発を促進するため、設計が不透明な既存モデルに対し、オープンな全スタックを提供する。"
    },
    {
      "id": "2610.23479",
      "title": "HexaShell: A Thin Harness for Exploring the Limits of VLM Agents as Robot Coding Agents",
      "abstract": "Agents built on vision language models (VLMs) now compete with learned policies on robot manipulation leaderboards. We ask how far a coding agent can go when it controls a robot instead of a computer, and where it stops. Our system, HexaShell, keeps the harness thin: it only turns the agent's commands into robot motion. The agent drives a robot with two arms through one command line. It sees three RGB cameras and knows their calibration. After each failed attempt, the agent reads the log, finds the cause, and writes or fixes small programs called tools. In this way it keeps what it learns as code, as a coding agent does when it fixes a failing test. The tools may use only what the robot observes. They use triangulation to find where objects are, relative to each other and to the gripper. If two cameras see the same point, the point lies where the two camera rays meet. If a point lies on a known plane, such as the table or the top of a block, it lies where its ray meets that plane. When the head camera is not enough, the robot moves a wrist camera to get a second view. We build the tools on only ten layouts of one seed per task, then freeze them and test them on ten new layouts of the same seed. We use Codex with GPT-6-Astra at medium reasoning effort. On all 42 RoboDojo tasks, HexaShell reaches a success rate of 39.7% and a progress score of 48.0, averaged in the same way as the leaderboard. This is a new state of the art on RoboDojo. The limit is contact, not reasoning: pushing reaches 92.5% and memory tasks 65.0%, but tight insertion only 8.3%. When the agent fails, it usually sees the failure but cannot make the motion work. We open source the tools evolved so far at https://github.com/HexaFuture/HexaShell.",
      "upvotes": 313,
      "github_stars": 84,
      "github_repo": "https://github.com/HexaFuture/HexaShell",
      "project_page": "https://hexafuture.ai/home/",
      "comments": 3,
      "org": "HexaFuture",
      "url": "https://huggingface.co/papers/2610.23479",
      "arxiv_url": "https://arxiv.org/abs/2610.23479",
      "title_ja": "HexaShell：ロボットコーディングエージェントの限界を探る薄いハーネス",
      "summary_ja": "VLMエージェントがコマンドラインを通じてロボットを制御し、失敗から原因を分析して実行可能なプログラム（ツール）を自ら記述・修正するフレームワーク。"
    },
    {
      "id": "2610.24087",
      "title": "OR-License: Evaluating LLM Agents as Real-World Operations Research Practitioners",
      "abstract": "Can large language model (LLM) agents deliver expert-level operations research (OR) solutions directly from original client materials, without prior expert reformulation? Existing OR benchmarks typically begin with self-contained descriptions or predefined optimization tasks, underrepresenting the translation of original business materials into professionally validated solutions. We introduce OR-License, an end-to-end benchmark of 31 instances across 10 industrial scenarios from paid OR engagements totaling USD 3.68 million. It preserves original requirements, input data, deliverable formats, and information boundaries after de-identification. To study information acquisition, we introduce ORSim, a controlled client simulator that discloses business facts without supplying OR expertise. Hidden evaluation checks feasibility and compares objective quality against original expert solutions accepted by clients before benchmark construction. Deployment-Adjusted Quality (DAQ) averages expert-relative quality across instances, assigning zero to infeasible deliveries. Across 11 frontier LLMs using coding-agent harnesses, several exceed the expert reference in conditional objective quality, but none matches its DAQ; the strongest primary Claude Code configuration achieves 88.39% strict feasibility and a DAQ of 0.87 against the expert reference of 1. Client information acquisition extends beyond clarification into solution development and validation, with some later stages showing higher confirmed issue-resolution proportions. Trajectory analysis identifies formulation and implementation failures, while task-equalized research-chain completion rates range from 24% to 45% across models on evaluable tasks. These findings motivate sustained information-gap resolution, faithful problem formulation, and evidence-linked self-improvement for reliable long-horizon agents.",
      "upvotes": 291,
      "github_stars": 5,
      "github_repo": "https://github.com/NineAbyss/OR-License",
      "project_page": "https://www.or-license.com/",
      "comments": 3,
      "org": "ALLE AI",
      "url": "https://huggingface.co/papers/2610.24087",
      "arxiv_url": "https://arxiv.org/abs/2610.24087",
      "title_ja": "OR-License：実世界のオペレーションズ・リサーチ実務者としてのLLM評価",
      "summary_ja": "顧客提供の生の資料から専門家による定式化なしに実務的な最適化ソリューションを導き出せるかを評価する、31の実際の案件に基づいたエンドツーエンドのベンチマーク。"
    },
    {
      "id": "2610.22350",
      "title": "FDE-Gym: The Last Mile of AI Delivery",
      "abstract": "Existing agent benchmarks typically evaluate agents on well-specified tasks defined by issue reports, specifications, or task tickets. Real-world customer delivery is different: forward-deployed engineers (FDEs) must clarify ambiguous requirements, work in live systems, and uncover unstated constraints. We introduce FDE-Gym, a benchmark of 95 end-to-end delivery tasks from 20 customer scenarios across 18 sectors, each adapted by industry experts from real-world delivery projects. In simulated customer environments with scripted stakeholders and modifiable customer systems, agents interact with stakeholders and operate on production-like systems to deliver working solutions. FDE-Gym scores a delivery by how much it improves the customer's own success metric, normalized between 0 (unchanged system) and 1 (reference solution), with penalties for stakeholder interactions (messages, trial runs, and waiting time). An online platform lets humans practice FDE skills under the same grading criteria. We evaluate 13 model configurations from seven providers. In the realistic setting, where unstated constraints must be discovered, the best configuration achieves a mean FDE-Gym score of 0.56 and resolves only 14 of the 95 tasks (a score of at least 0.8 with no incident). Discovering unstated constraints is the primary bottleneck: performance drops sharply when models must uncover them without explicit guidance. Yet information discovery alone does not account for the gap: even on the 23 tasks where the best configuration obtains every key fact from stakeholders, it reaches a normalized business uplift of 0.8 or above on only 10. These results reveal a substantial gap between solving well-specified tasks and delivering effective AI systems for real customers.",
      "upvotes": 272,
      "github_stars": 107,
      "github_repo": "https://github.com/deeplethe/fde-gym",
      "project_page": "https://fde-gym.com/paper",
      "comments": 2,
      "org": "DeepLethe",
      "url": "https://huggingface.co/papers/2610.22350",
      "arxiv_url": "https://arxiv.org/abs/2610.22350",
      "title_ja": "FDE-Gym：AIデリバリーの「ラストワンマイル」",
      "summary_ja": "定義済みのタスクではなく、曖昧な要求の明確化や生きたシステムでの作業が必要な、実世界の導入エンジニアの業務をシミュレートする95のタスクからなるベンチマーク。"
    },
    {
      "id": "2610.26802",
      "title": "Scaling Parameter-Efficient Fine-Tuning for Brain Encoding",
      "abstract": "Brain encoding models aim to predict neural responses to stimuli. The most widely used approach fits readouts from frozen pretrained backbones. Using neural data to train large models from scratch or fully fine-tune them after task-pretraining has proven difficult because neural data is costly and limited. We show that parameter-efficient fine-tuning (PEFT) enables us to effectively adapt very large pretrained backbones for brain encoding with a small number of trainable parameters. To make it computationally practical, we exploit the backbone's causal structure to predict multiple timepoints in a single pass instead of using sliding windows, significantly reducing feature-extraction cost. This enables efficient fine-tuning of multimodal backbones with up to 104B parameters, the largest model adapted for brain encoding to our knowledge. Trained with a low-rank adapter (LoRA) and a lightweight readout, our approach consistently improves brain encoding performance across nine diverse multimodal backbones. On the same Qwen3-Omni backbone as the prior state-of-the-art (SoTA), our method BrainLoRA achieves the best published performance on the Algonauts 2025 Challenge. We also show the adapted multimodal backbones remain interpretable: modality attribution recovers the canonical sensory topography that prior work often obtains by construction from separate unimodal encoders, and neural adaptation increases the contribution of audio inputs and cross-modal mixing within the backbone. To scale out the number of adapted models, we develop a multi-LoRA kernel that accelerates joint training of multiple LoRAs on a shared backbone. This enables an ensemble of 200+ adapted models that ranks first on the public Algonauts post-challenge leaderboard at the time of writing. Together, our results highlight PEFT as an efficient and powerful paradigm for brain encoding.",
      "upvotes": 237,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Mind Lab",
      "url": "https://huggingface.co/papers/2610.26802",
      "arxiv_url": "https://arxiv.org/abs/2610.26802",
      "title_ja": "脳エンコーディングのためのパラメータ効率の良いファインチューニングの拡張",
      "summary_ja": "PEFTを用いて巨大な事前学習済みモデルを少量の脳活動データに適応させ、因果構造を利用して一括予測を行うことで、計算コストを抑えつつ脳応答予測精度を向上させる。"
    },
    {
      "id": "2610.26203",
      "title": "Focused Omni-Modal GUI Agents",
      "abstract": "Graphical User Interface (GUI) agents increasingly act over streaming omni-modal observations spanning screenshots, audio, video, interaction history, and device states. However, exposing this complete context uniformly at every step ignores that relevance is transient and sparse: the signal determining one action can become clutter at the next. Because executed actions feed back into the context, these errors compound into Sequential Distraction, driving the agent into irreversible trajectory drift. We formulate the underlying requirement as Focused Perception: a representation that is step-adaptive, action-sufficient, and non-intrusive. We realize this in FocusGUI, a lightweight adapter that dynamically prioritizes multimodal channels against a step-specific decision reference. Instead of uniformly processing all inputs, it compresses the most relevant evidence into a compact latent and subtly injects it into the frozen decoder's embeddings, guiding the model's attention without altering its native parameter space. FocusGUI trains from action supervision alone, requiring neither modality-relevance labels nor backbone fine-tuning. Across four omni-modal backbones, it raises overall Type Match by +33.2 and Exact Match by 3.0 times over the frozen backbone on average, and Type Match by +30.1 over the strongest existing enhancement method.",
      "upvotes": 224,
      "github_stars": 10,
      "github_repo": "https://github.com/fyzhang1/FocusGUI",
      "project_page": "https://fyzhang1.github.io/FocusGUI/",
      "comments": 2,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2610.26203",
      "arxiv_url": "https://arxiv.org/abs/2610.26203",
      "title_ja": "フォーカスされた全方位モーダルGUIエージェント",
      "summary_ja": "GUI操作における情報の氾濫を防ぐため、ステップごとに必要な情報のみを抽出する軽量アダプタ「FocusGUI」により、無関係な刺激による軌道逸脱を抑制する。"
    },
    {
      "id": "2610.21601",
      "title": "Waypoint-OPD: Transferring RL-Induced Policy Shifts via Gated On-Policy Distillation",
      "abstract": "Policy-shift distillation reuses the difference between a teacher's log probabilities before and after reinforcement learning (RL) as supervision on student-generated trajectories. However, this endpoint policy shift cannot reveal whether local action preferences evolved consistently during teacher training. The same endpoint shift can result from early and late shifts that reinforce or partially cancel each other. We investigate whether agreement between early and late teacher policy shifts can guide selective transfer. We introduce Waypoint-guided On-Policy Distillation (Waypoint-OPD), which uses an intermediate teacher checkpoint from the same RL run to compare early and late shifts in relative action preferences at student-visited prefixes. We gate the endpoint shift according to the directional agreement between the early and late shifts, suppressing it when they point in opposing directions. Compared with endpoint-only transfer, our method requires only one additional frozen-teacher scoring pass. Using RL-trained Qwen3-4B teachers, we evaluate our method with Qwen3-8B, Qwen3-14B, and Qwen3-30B-A3B as student models in mathematical and code reasoning. In all six domain--student settings, Waypoint-OPD achieves the highest domain-average score among the compared distillation methods. Ablations with the Qwen3-8B student show that removing or shuffling gates reduces mathematical reasoning performance. These results support the use of directional agreement between early and late teacher policy shifts to weight the endpoint shift during student training.",
      "upvotes": 218,
      "github_stars": 10,
      "github_repo": "https://github.com/hhhbxloveai/WaypointOPD",
      "project_page": "",
      "comments": 6,
      "org": "",
      "url": "https://huggingface.co/papers/2610.21601",
      "arxiv_url": "https://arxiv.org/abs/2610.21601",
      "title_ja": "Waypoint-OPD：ゲート付きオンポリー蒸留による強化学習由来の方針変化の転送",
      "summary_ja": "RL学習中の中間チェックポイントを用いて、初期と後期のポリシー変化の一致度を検証することで、教師モデルの進化をより効果的に生徒モデルへ蒸留する手法。"
    },
    {
      "id": "2610.18813",
      "title": "Self-Evolving Agent Harness",
      "abstract": "Harness self-evolution revises an agent's software scaffolding, including prompts, memory, workflows, and executable components, while keeping model weights fixed. We formalize a feedback-driven process in which accepted revisions persist across runs. The framework separates update targets from proposal and admission mechanisms. It distinguishes changes to interpreted state from revisions to tools and code, repository-level control logic, and plugin composition. We characterize search through evolutionary optimization and examine its reliability through continual PAC-learning. Under explicit assumptions, the analysis yields an expected generalization bound, a retention bound conditional on historical regression budgets, and a high-probability admission rule using fresh, independent validation data. We examine how persistent harness revisions affect knowledge sharing and organizational workflows, with implications for scientific reliability, physical safety, and institutional accountability. Cases from prior work illustrate model--harness co-design, distributed execution, and plugin reuse. Reliable deployment requires continual validation as task distributions and evaluators change, with independent safeguards for learning, runtime privileges, and consequential actions. We provide a comprehensive 66-page discussion of related work, theory, algorithms, evaluation, applications, and the broader impact of Harness RSI, together with continuously updated code and supplementary materials, at https://github.com/zgcagi/Harness-RSI.",
      "upvotes": 217,
      "github_stars": 297,
      "github_repo": "https://github.com/zgcagi/Harness-RSI",
      "project_page": "https://zgcagi.github.io/Harness-RSI/",
      "comments": 7,
      "org": "ZGCAGI",
      "url": "https://huggingface.co/papers/2610.18813",
      "arxiv_url": "https://arxiv.org/abs/2610.18813",
      "title_ja": "自己進化するエージェント・ハーネス",
      "summary_ja": "モデルの重みを固定したまま、プロンプトやワークフローなどのソフトウェア基盤をフィードバックに基づき自動で修正・改善し続け、汎化性能を高めるフレームワーク。"
    },
    {
      "id": "2610.17665",
      "title": "RoTA-Bench: Evaluating 3D Spatial Reasoning through Interactive Projection Alignment",
      "abstract": "Can vision-language models turn 2D observations into 3D understanding that supports precise action? This requires inferring object geometry, anticipating the effects of rotation, and refining actions through visual feedback. We introduce RoTA-Bench to evaluate these abilities through interactive 3D-to-2D projection alignment. Given a target silhouette, a model observes a rotated object and chooses successive rotations to recover the target projection within a limited action budget. Our automated pipeline constructs silhouette-preserving 3D objects from 2D icons and uses reversible initialization to guarantee solvability, yielding 674 tasks and a stratified 100-task test set. Empirically, we find that (i) a substantial human-model gap persists: GPT-5.6-Sol succeeds on only 17% of tasks, whereas 20 undergraduate participants collectively complete the test set four times with a 100% success rate; (ii) image-space and pose-space progress can diverge: at matched states, the model more often improves silhouette overlap while worsening pose alignment than humans (19.4% vs. 10.9%); and (iii) fine-grained control is sensitive to interaction history: removing it leaves 96.8% of the model's actions at a coarse 30-degree step size and sharply reduces observed task success. These findings highlight the challenge of converting visual evidence into precise 3D control, beyond recognizing or matching individual images.",
      "upvotes": 206,
      "github_stars": 6,
      "github_repo": "https://github.com/MAC-AutoML/RoTA-Bench",
      "project_page": "https://www.modelscope.cn/studios/san2333333/rotabench-anon?mode=full&app_path=%2Fportal",
      "comments": 2,
      "org": "MAC-AutoML",
      "url": "https://huggingface.co/papers/2610.17665",
      "arxiv_url": "https://arxiv.org/abs/2610.17665",
      "title_ja": "RoTA-Bench：インタラクティブな投影アライメントによる3D空間推論の評価",
      "summary_ja": "2Dのシルエットに合わせて3Dオブジェクトを回転させるタスクを通じ、VLMが2Dの観察から3D構造を理解し、精緻な操作を行えるかを評価するベンチマーク。"
    },
    {
      "id": "2610.27999",
      "title": "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds",
      "abstract": "Moving from controllable videos to genuinely playable worlds requires persistent world state, executable game rules, and low-latency interaction. We outline a roadmap for the next generation of Matrix-Game that separates game execution from visual generation through an executable game harness, and introduce Matrix-Game 4.0 as the first system built on this design. A lightweight game engine maintains world state and executes interaction rules, a multimodal coding agent translates player ideas into game code and dynamic scene captions, and a renderer based on autoregressive video model transforms engine-rendered low-poly proxies into detailed visuals, conditioned on dynamic captions and memory references. This framework provides continuous guidance for visual generation and enables natural-language creation and modification of scenes and gameplay. Our renderer is trained on aligned low-poly and high-fidelity video pairs and distilled into a causal generator that generates in four-frame chunks with one or two denoising steps. Together with targeted inference optimizations, Matrix-Game 4.0 enables 480p, 60 FPS gameplay on a single NVIDIA RTX5090 with a key-press-to-display latency of 112ms. Single-step generation achieves 83FPS steady-state throughput with 18.2GiB of peak GPU memory usage. With fixed prompts, steady-state throughput also reaches 67FPS on an RTX5080 and 58FPS on an RTX5070Ti. We demonstrate customizable shooter and driving games with engine-enforced mechanics, and release code, model weights, and low-poly game assets to support research and creation of playable game worlds.",
      "upvotes": 181,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://matrix-game-v4-0.github.io/page/",
      "comments": 1,
      "org": "",
      "url": "https://huggingface.co/papers/2610.27999",
      "arxiv_url": "https://arxiv.org/abs/2610.27999",
      "title_ja": "Matrix-Game 4.0：リアルタイムでプレイ可能なゲーム世界のためのビデオモデル活用",
      "summary_ja": "実行エンジン、コーディングエージェント、ビデオ生成モデルを統合し、プレイヤーの入力を即座にゲームコードと高品質な映像に反映する、一貫性のある遊べる世界を実現。"
    },
    {
      "id": "2610.26855",
      "title": "Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience",
      "abstract": "World models enable embodied agents to anticipate action consequences, yet jointly modeling locomotion and manipulation across diverse embodiments remains challenging due to heterogeneous action spaces and limited multimodal supervision. We present Ropedia W0, the first egocentric loco-manipulation world foundation model spanning humans and robots with diverse embodiments. We curate Xp-Data, comprising 10k hours of egocentric human data and 3k hours of robot data with unified multimodal annotations and systematic quality control. A unified kinematic representation encodes locomotion through camera poses and manipulation through projected skeletons, with robot skeletons combining embodiment-specific forward kinematics with extensive manual keypoint annotation and correction. We also introduce Xp-Teleop, a long-horizon loco-manipulation benchmark based on high-quality dexterous humanoid teleoperation data. Evaluations demonstrate state-of-the-art performance across five cross-embodiment benchmarks (DreamDojo, Ψ_0, ω-HOME, Xp-Teleop, and AgiBot) and on held-out human egocentric video, from zero-shot inference to few-shot and full-data post-training. Scaling human pre-training data improves performance on both human and robot evaluations. After distillation, our model supports real-time, minute-long rollouts, enabling live VR interaction. Applications in policy evaluation, model-based planning, and world-action modeling further demonstrate the model's utility for embodied decision-making.",
      "upvotes": 176,
      "github_stars": 36,
      "github_repo": "https://github.com/Ropedia/ropedia-w0",
      "project_page": "https://ropedia.github.io/ropedia-w0/",
      "comments": 1,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26855",
      "arxiv_url": "https://arxiv.org/abs/2610.26855",
      "title_ja": "Ropedia W0：人間の経験を用いた多様な形態にわたる移動・操作世界モデルの拡張",
      "summary_ja": "人間とロボットの膨大な一人称視点データを用い、カメラポーズと骨格投影を統合した表現により、異なる身体を持つエージェントの移動と操作を統合的に予測する世界モデル。"
    },
    {
      "id": "2610.21783",
      "title": "Learning to Think and Explore in 3D World",
      "abstract": "We study how vision-language models (VLMs) can learn to think and actively explore in 3D space. Instead of providing multi-view images, videos, or 3D representations to the model, we preserve the native visual encoding of VLMs, i.e., a single image, one at a time, just like humans, and treat the 3D representation only as an environment with which the model can interact through actions (e.g., move left) and observations (rendered images). Each rollout begins from an initial first-person view and a visual question. The model can then iteratively reason, navigate, and reorient its viewpoint before committing to a final answer. Following an initial trajectory-supervised finetuning, we apply reinforcement learning (RL) with rewards driven primarily by final-answer correctness. Crucially, RL provides no direct supervision over which viewpoints the model should visit or which exploration actions it should take. Instead, the model must learn an effective exploration policy solely from the extent to which its interactions improve performance. Across six 3D benchmarks, our model ACT3D achieves an average accuracy of 53.2% that improves its base Qwen model by 22.0% and surpasses proprietary Gemini 3.6 Flash. ACT3D also outperforms existing open-source 3D methods while using 50-70% fewer input frames, and generalizes to unseen domains with an average improvement of 5.9% over its supervised initialization. Further analysis reveals adaptive, question-conditioned exploration. Performance gains over the base model increase from 0.6% on questions answerable from the initial view to 16.3% on those requiring extensive exploration. ACT3D searches for occluded targets, avoids unnecessary exploration, and acquires complementary viewpoints for spatial comparisons. These findings demonstrate that outcome-based RL enables VLMs not only to reason over visual evidence, but also to learn when and how to acquire it.",
      "upvotes": 173,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://williamium3000.github.io/act3d/",
      "comments": 2,
      "org": "University of California at San Diego",
      "url": "https://huggingface.co/papers/2610.21783",
      "arxiv_url": "https://arxiv.org/abs/2610.21783",
      "title_ja": "3D空間における思考と探索の学習",
      "summary_ja": "VLMに単一視点の画像のみを与え、行動を通じて視点を変えながら推論を繰り返すRLプロセスにより、能動的に3D空間を探索して質問に答える能力を学習させる。"
    },
    {
      "id": "2610.26625",
      "title": "EgoXperience: Learning World-Grounded Egocentric Representations from Human Experience",
      "abstract": "Reconstructing human activity from egocentric video requires more than recovering individual 3D components: the observer's motion, surrounding geometry, and hand-object interactions must fit together in a consistent world. Achieving this coherence requires both joint reconstruction and aligned supervision, yet existing methods and datasets offer limited support for either. We present EgoXperience, a full-stack paradigm that addresses these needs through data collection, automatic annotation, unified modeling, and benchmarking. Central to EgoXperience is an automatic annotation engine, EgoX-Engine, that couples geometrically verified object tracking with SLAM-based world alignment, yielding consistent supervision for the camera, scene, hands, and objects. This yields EgoX-Data-6M, a 50-hour dataset of task-driven manipulation and locomotion within and across indoor and outdoor environments, with second-level task captions. We carefully select one hour across these activity categories as EgoX-Bench to evaluate joint reconstruction. To translate this supervision into reconstruction, we introduce EgoX, trained with EgoX-Data-6M and complementary annotations from additional public datasets. Given monocular egocentric video and first-frame object masks, our model achieves joint metric reconstruction of the camera, scene, hands, and objects in a shared world coordinate frame with a single forward pass. Extensive experiments demonstrate state-of-the-art performance across scene estimation and world-space hand-object pose recovery. Against the strongest evaluated baselines, EgoX reduces camera, hand, and depth errors by 68.9%, 65.6%, and 42.9%, and improves object pose scores by 28.0%.",
      "upvotes": 170,
      "github_stars": 18,
      "github_repo": "https://github.com/Ropedia/EgoXperience",
      "project_page": "https://ropedia.github.io/EgoXperience",
      "comments": 2,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26625",
      "arxiv_url": "https://arxiv.org/abs/2610.26625",
      "title_ja": "EgoXperience：人間の経験からの世界に根ざした一人称表現の学習",
      "summary_ja": "一人称視点ビデオから観察者の動き、周囲の幾何構造、手の操作を整合的に再構成するため、自動アノテーションと幾何検証を組み合わせたデータ構築・学習パラダイム。"
    },
    {
      "id": "2610.26549",
      "title": "Holi-World: Building Holistic World Intelligence from Human-Ego Experience",
      "abstract": "Human egocentric experience offers a rich foundation for learning how the world is organized and how it changes through interaction. Realizing this potential at scale requires turning growing volumes of recordings into learning resources that connect scene structure, object semantics, and interaction histories across viewpoints and time, while reducing dependence on costly manual annotation. We introduce HOLI-WORLD, an integrated ecosystem connecting experience capture, world representation, automated data construction, model learning, and independent evaluation. To sup- port learning at scale, HOLIWORLD-Foundry combines complementary static and dynamic perception to automatically construct world records that connect persistent scene structure and evolving object states with interaction histories and supporting observations. HOLIWORLD-Data organizes these records from approximately 100 self-collected scenes into grounded learning resources, including approximately 80K QA pairs used to train HOLIWORLD-VL-4B. Independent human annotations of heldout recordings form HOLIWORLD-Bench, supporting evaluation of both annotation quality and learned spatial and temporal understanding. Experiments on ScanNet, ScanNet++, Aria Digital Twin, and HOLIWORLD-Bench demonstrate strong performance in static perception and dynamic tracking, while training on HOLIWORLD-Data substantially improves HOLIWORLD-VL-4B's spatial and temporal reasoning on HOLI- WORLD-Bench and EgoDynamic4D. HOLIWORLD provides a practical foundation for expanding learning resources from the continuous flow of human experience and advancing machine understanding of the dynamic world.",
      "upvotes": 156,
      "github_stars": 13,
      "github_repo": "https://github.com/Ropedia/holi-world",
      "project_page": "https://ropedia.github.io/holi-world",
      "comments": 3,
      "org": "Ropedia",
      "url": "https://huggingface.co/papers/2610.26549",
      "arxiv_url": "https://arxiv.org/abs/2610.26549",
      "title_ja": "Holi-World：人間の経験から総合的な世界知能を構築する",
      "summary_ja": "人間の一人称視点記録から、シーン構造や相互作用の履歴を自動抽出し、手動ラベルに頼らずに世界の仕組みを学習するための統合的なデータ構築・モデル学習エコシステム。"
    },
    {
      "id": "2610.19159",
      "title": "Into the Unknown: Benchmarking AI agents on open scientific research problems",
      "abstract": "Can AI agents carry out research on open scientific problems? We introduce Into the Unknown, a benchmark that provides an agent with a science paper along with a research direction to pursue and tasks it to write a follow-up paper. We work with scientists at US Department of Energy (DOE) national laboratories, who each contribute an unpublished follow-up direction from their own work together with the necessary conditions a submission must meet. While assessing the quality of a follow-up paper is challenging in general, using these conditions to form a rubric makes evaluation more tractable for research problems that have no reference answer. We have nine frontier agents write 15 follow-ups each, spanning quantum computing, plasma physics, computational chemistry, materials science, and scientific machine learning domains. None of the 135 submissions satisfies all the conditions, and 114 fail our integrity check, most often because the paper claims work that was never done or reports numbers that contradict the recorded evidence. Overall, agents readily produce papers that look like follow-ups, but none meets the standard of the domain scientist, leaving substantial headroom. Our code and data are publicly available.",
      "upvotes": 155,
      "github_stars": 18,
      "github_repo": "https://github.com/prometheus-eval/into-the-unknown",
      "project_page": "https://prometheus-eval.github.io/into-the-unknown/viewer/#/",
      "comments": 2,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2610.19159",
      "arxiv_url": "https://arxiv.org/abs/2610.19159",
      "title_ja": "未知への挑戦：オープンな科学研究問題におけるAIエージェントのベンチマーク",
      "summary_ja": "既存の論文から未発表の続編研究を執筆させるタスクを通じ、正解のない科学的問いに対して、専門家が作成した評価基準（ルーブリック）を用いてエージェントの能力を測定。"
    },
    {
      "id": "2610.20939",
      "title": "MAI-Gym: An Open All-in-One Platform for GUI Agent Evaluation and RL Training across Mobile and Computer Environments",
      "abstract": "Online reinforcement learning (RL) with verifiable rewards has driven rapid progress in mathematics, coding, and tool use, but scaling this success to GUI agents remains challenging due to the high cost of interactive environments and the scarcity of realistic training tasks. We introduce MAI-Gym, an open all-in-one platform that unifies GUI agent evaluation, data collection, and online RL training across mobile, computer, and web environments. Through a shared rollout pipeline, MAI-Gym ensures consistent agent behavior across evaluation and training, supports ten established benchmarks, and scales to 20,000 parallel environment instances. Beyond scalable infrastructure, MAI-Gym enables automated synthesis of diverse GUI applications and challenging tasks, including resettable mocked apps and coherent cross-app worlds with execution-validated task verifiers. Using MAI-Gym, we train MAI-Gym-9B, a unified 9B agent for mobile and computer use, achieving state-of-the-art performance among open GUI agents under 10B parameters: 78.4% on MobileWorld and 76.2% on OSWorld-Verified. Importantly, RL in a mocked train-ticketing app transfers to its real-world counterpart, improving task success on a phys- ical phone from 28.8% to 48.1%. We release the framework, synthesis skills, mocked apps, 2,000 verified tasks, and the model checkpoint to support repro- ducible research and further advances in scalable GUI agent training.",
      "upvotes": 149,
      "github_stars": 38,
      "github_repo": "https://github.com/Tongyi-MAI/MAI-Gym",
      "project_page": "https://tongyi-mai.github.io/MAI-Gym/",
      "comments": 2,
      "org": "Tongyi-MAI",
      "url": "https://huggingface.co/papers/2610.20939",
      "arxiv_url": "https://arxiv.org/abs/2610.20939",
      "title_ja": "MAI-Gym：モバイルおよびPC環境にわたるGUIエージェント評価とRL学習のための統合プラットフォーム",
      "summary_ja": "モバイル、PC、Webを跨ぐ最大2万個の並列環境を提供し、検証可能な報酬を用いたオンライン強化学習と一貫性のある評価を可能にするオープンなプラットフォーム。"
    },
    {
      "id": "2610.27628",
      "title": "PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking",
      "abstract": "Looped language models can run more iterations at test time, but additional iterations need not help them solve longer problems. For sequential state tracking, final-answer supervision does not specify how far each iteration should advance, and repeated updates can change the scale of the recurrent state. We introduce Progress-Aligned Recurrence (PAR), which trains the prediction at iteration k to match the state after the first k operations and rescales recurrent states to their first-iteration norms. On swap-S_5, a Qwen2.5-0.5B model trained on at most 32 moves achieves 95.5\\% mean full-state accuracy at 512 moves, or 16times the training length, compared with 55.7\\% reported for RLT and 0.8\\% for explicit chain of thought on the same backbone. Controlled S_5 ablations show that removing norm anchoring reduces the extrapolation factor from 16times to below 2.2times, and replacing progress-aligned targets with final-answer supervision reduces it to at most 8times. A learned completion readout selects when to answer without a supplied stopping depth. When intermediate labels are unavailable, prefix self-distillation induces the correspondence from shorter problem prefixes using only final answers. The gains apply across sequential state-tracking tasks, establishing the task structure required for depth extrapolation. These findings support training intermediate predictions and state scale together to make additional recurrent depth useful for longer problems.",
      "upvotes": 147,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 1,
      "org": "ant-international",
      "url": "https://huggingface.co/papers/2610.27628",
      "arxiv_url": "https://arxiv.org/abs/2610.27628",
      "title_ja": "PAR：状態追跡における長さの汎化のための進捗整列再帰",
      "summary_ja": "ループ型モデルの学習時、各反復が進捗の各ステップに対応するよう整列させ、状態のノルムを再調整することで、学習時よりも遥かに長い操作列の追跡を可能にする手法。"
    },
    {
      "id": "2610.14993",
      "title": "Learning Where to Split: Dynamic Band Splitting for Audio Source Separation",
      "abstract": "Audio source separation models must preserve fine spectral structure while keeping the cost of the separator tractable. Band-split architectures reduce this cost by manually partitioning the spectrum into predefined frequency bands and encoding each band as a token, but the same boundaries are used for every mixture. Because informative spectral structure varies with source content, fixed boundaries can merge discriminative components or spend tokens where little resolution is needed. We introduce Dynamic Band Splitting (DBS), an end-to-end framework that adapts boundary locations and band widths to each mixture under a fixed band-token budget. DBS predicts content-conditioned boundary scores within frequency blocks, selects a prescribed number of boundaries using hard Top-K, and applies content-dependent pooling to obtain compact band tokens. After separation, it smooths and expands these tokens to the original STFT grid, refines them along frequency, and decodes complex masks with a frequency-shared head. DBS improved separation over the corresponding static models on DnR v2, MUSDB18-HQ, and EchoSet, with DBS-BSRNN achieving relative gain of 29.0% in average SI-SDR on DnR v2. These results and boundary analyses on DnR v2 show that content-adaptive frequency partitioning benefits multiple separator backbones under a fixed band-token budget. Code and audio demos are available at https://cslikai.cn/Dynamic-Band-Splitting",
      "upvotes": 143,
      "github_stars": 30,
      "github_repo": "https://github.com/JusperLee/Dynamic-Band-Splitting",
      "project_page": "https://cslikai.cn/Dynamic-Band-Splitting/",
      "comments": 2,
      "org": "Tsinghua Machine Learning Group",
      "url": "https://huggingface.co/papers/2610.14993",
      "arxiv_url": "https://arxiv.org/abs/2610.14993",
      "title_ja": "分割場所の学習：音源分離のための動的帯域分割",
      "summary_ja": "音源の内容に応じて周波数帯域の境界を動的に最適化することで、固定の帯域分割よりも計算効率を高めつつ、重要な音響構造を精密に維持する音源分離フレームワーク。"
    },
    {
      "id": "2610.09872",
      "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
      "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
      "upvotes": 131,
      "github_stars": 9,
      "github_repo": "https://github.com/RaymondVoldemortFu/LiveMACE",
      "project_page": "",
      "comments": 3,
      "org": "Fudan University",
      "url": "https://huggingface.co/papers/2610.09872",
      "arxiv_url": "https://arxiv.org/abs/2610.09872",
      "title_ja": "LiveMACE：変化する市場におけるLLMエージェント能力のプロセス重視の評価",
      "summary_ja": "生の金融市場をテストベッドとし、最終的な利益だけでなく、メモリ使用やルール遵守などの意思決定プロセス全体を30日間にわたり診断・評価するベンチマーク。"
    },
    {
      "id": "2610.20341",
      "title": "InfiniSplat v2: Analyzing and Improving Feed-Forward 3DGS from Any Views",
      "abstract": "Feed-forward Gaussian reconstruction builds 3D scenes directly from input images for novel view rendering, but learning Gaussian attributes from predicted geometry for high-quality rendering under large viewpoint changes remains challenging. We analyze limitations in Gaussian attribute learning and introduce InfiniSplat v2, which improves rendering quality through architectural and training changes. Our method decouples geometry and attribute prediction with a frozen geometry branch, aligns predicted Gaussians using ground-truth camera poses during training, and adopts large-angle target view supervision. Across six datasets, the feed-forward outputs of the same trained model achieve state-of-the-art mean LPIPS and DISTS among the evaluated methods in both pose-conditioned and pose-free settings. In the pose-conditioned setting, mean LPIPS and DISTS decrease by 25.8% and 32.9%, respectively, compared with the strongest evaluated baselines. We further find that opacity learned with only image reconstruction supervision suppresses geometrically inconsistent points. Project page: https://zju3dv.github.io/InfiniSplat2/",
      "upvotes": 131,
      "github_stars": 523,
      "github_repo": "https://github.com/zju3dv/InfiniSplat",
      "project_page": "https://zju3dv.github.io/InfiniSplat2/",
      "comments": 2,
      "org": "zju3dv",
      "url": "https://huggingface.co/papers/2610.20341",
      "arxiv_url": "https://arxiv.org/abs/2610.20341",
      "title_ja": "InfiniSplat v2：あらゆる視点からのフィードフォワード3DGSの分析と改善",
      "summary_ja": "幾何予測と属性予測を分離し、大きな視点変化に対応した学習を行うことで、入力画像から高品質な3Dシーンを直接再構成する3Dガウシアン・スプラッティング手法。"
    },
    {
      "id": "2610.26825",
      "title": "MemT-1.0: Towards Memory-Native Evolution",
      "abstract": "Memory-native evolution requires making memory an intrinsic capability of foundation models, enabling them to continuously accumulate and utilize information. To this end, we introduce MemT-1.0, a new architecture of memory foundation models that internalize memory as part of model computation. Building on Metis, MemT-1.0 employs Gated DeltaNet-2 with a stable token-level memory update mechanism within each turn. We further introduce Mixture-of-Storage to scale native memory capacity. Following a deliberate backbone preparation, we develop a two-stage training pipeline consisting of continued pre-training and post-training, supported by 34B tokens of training data and efficient training and inference infrastructure. We release a model family comprising MemT-1.0-Nano and MemT-1.0-Flash, and conduct a comprehensive evaluation of memory and general capabilities. The results show that they outperform the parametric memory baselines on average and remain competitive with retrieval-augmented methods, while largely preserving general capabilities. At a history length of 128K tokens, MemT-1.0-Nano achieves approximately 1.86times end-to-end inference speedup and a 66times reduction in persistent storage relative to full context KV cache. By internalizing retrieved procedural experience, MemT-1.0 improves task success on agentic tasks, providing a practical step toward memory-native evolution.",
      "upvotes": 118,
      "github_stars": 272,
      "github_repo": "https://github.com/MemTensor/MemT-1.0",
      "project_page": "https://huggingface.co/collections/MemTensor/memt-1",
      "comments": 3,
      "org": "MemTensor",
      "url": "https://huggingface.co/papers/2610.26825",
      "arxiv_url": "https://arxiv.org/abs/2610.26825",
      "title_ja": "MemT-1.0：メモリネイティブな進化に向けて",
      "summary_ja": "メモリをモデル計算に組み込む新アーキテクチャとMixture-of-Storageにより、情報を蓄積・活用する能力をモデル自体に内在化させたメモリ基盤モデル。"
    },
    {
      "id": "2610.18784",
      "title": "Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents",
      "abstract": "Long-horizon agents accumulate progress in persistent task state, yet repeatedly process interaction histories describing how that progress was achieved. This raises a natural question: can long-horizon context instead be organized around reusable progress rather than the history that produced it? In this paper, we introduce CarryOn, an object-oriented context runtime that organizes continuation around reusable task objects. Rather than treating compressed histories or reconstructed accounts of progress as the primary basis for continuation, CarryOn builds a context view from continuation carriers, complementary execution context, and a live tail of recent interactions. A core challenge is keeping this reusable basis valid after its surrounding history is retired: how can CarryOn update the basis without reconstructing the full representation at every fold? CarryOn maintains carrier records across folds, revising affected records against bound evidence and applicable environment checks while carrying forward unaffected records and jointly updating execution context. Experiments on OSWorld 2.0 and BrowseComp-Plus show improved gains of 5.8% and 7.0% while reducing total token usage by 51.9% and 22.9%, respectively. Project page: https://ethannju.github.io/carryon",
      "upvotes": 117,
      "github_stars": 5,
      "github_repo": "https://github.com/Ethannju/carryon",
      "project_page": "https://ethannju.github.io/carryon/",
      "comments": 3,
      "org": "McAuley-Lab",
      "url": "https://huggingface.co/papers/2610.18784",
      "arxiv_url": "https://arxiv.org/abs/2610.18784",
      "title_ja": "Pack Light, CarryOn：長期エージェントのためのオブジェクト指向コンテキストの構築",
      "summary_ja": "過去の全履歴を繰り返し処理する代わりに、再利用可能な「タスクオブジェクト」として進捗を整理することで、長期間のタスクを効率的に継続できるランタイム。"
    },
    {
      "id": "2610.22341",
      "title": "3DCodeVerse: Exploring 3D Worlds as Code",
      "abstract": "We introduce 3DCodeVerse, a research ecosystem that enables coding agents to create editable and verifiable 3D content at scale. 3DCodeVerse comprises large-scale, high-quality datasets of executable 3D code, a coding harness for spatial reasoning and automated verification, and practical guidance for 3D coding. First, we construct 3DCodeVerse-2M, a large-scale curated dataset of standalone 3D executable code. We build this corpus by collecting open-source data, converting specialized representations, and generating new programs with coding agents. Each program is packaged with the source files and associated assets required for execution in its declared environment, along with available descriptions and verification records. Second, we develop the 3DCodeVerse Harness, a multi-agent directed acyclic graph framework for generating and refining 3D content. It uses execution checks, spatial measurements, and visual feedback to automatically evaluate and revise generated programs without human feedback during generation. Third, we conduct systematic empirical studies of 3D coding, establishing baselines with fine-tuned open models and deriving practical guidance through component-level analyses of our harness. Extensive experiments demonstrate that fine-tuning on our dataset significantly improves the 3D coding capabilities of open-source models. Notably, our 3DCodeVerse harness achieves a 90% win rate against Claude Design (3D Object) in pairwise human evaluations, when both are utilized by Claude Opus 5.5.",
      "upvotes": 117,
      "github_stars": 182,
      "github_repo": "https://github.com/gaoypeng/3dcodeverse",
      "project_page": "https://3dcodeverse.com/",
      "comments": 2,
      "org": "University of Southern California",
      "url": "https://huggingface.co/papers/2610.22341",
      "arxiv_url": "https://arxiv.org/abs/2610.22341",
      "title_ja": "3DCodeVerse：コードとしての3D世界の探索",
      "summary_ja": "実行可能な3Dコードの200万件データセットと検証環境を構築し、エージェントが空間推論を行いながら編集可能で正確な3Dコンテンツをコードを通じて生成・修正する研究。"
    },
    {
      "id": "2610.25736",
      "title": "Learning from Fleet Experience: A Collective Learning Paradigm for Robots",
      "abstract": "Experience generated during deployment offers an opportunity for robots to improve policy reliability through learning from their own executions. However, learning through human corrections requires teleoperators to monitor execution and intervene when policies fail, a demand that is difficult to meet as robot fleets grow. We introduce collective experience learning (CEL), a learning paradigm in which deployed robots share their execution experience to improve a common policy. We realize CEL through failure-guided experience retrieval fine-tuning (FERT), which uses failure contexts from robot executions to retrieve relevant trajectory segments from the fleet's shared successful experience and uses their actions as supervision for policy updates, without collecting additional expert demonstrations or corrective actions. A fault-tolerant asynchronous training system (FATS) coordinates experience collection, policy optimization and policy distribution despite local interruptions within the robot fleet. Across five real-world manipulation tasks, the resulting policies achieve success rates of 93.3-99.2%, evaluated over 120 trials per task on robots excluded from training data collection. With collection time per robot held fixed, larger fleets provide more experience and FERT generally achieves higher success rates across the evaluated sizes. On multi-stage phone packaging, learning with 96 robots increases success from 79.2% to 98.3%. These results support collective experience as a practical basis for scalable robot learning and a path towards improving policy reliability during deployment without collecting additional expert corrective actions.",
      "upvotes": 112,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://cel-robot-learning.github.io",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2610.25736",
      "arxiv_url": "https://arxiv.org/abs/2610.25736",
      "title_ja": "フリートの経験から学ぶ：ロボットのための集団学習パラダイム",
      "summary_ja": "配備された多数のロボットが失敗コンテキストを共有し、成功した他機体の経験から関連シーンを検索・学習することで、人間の監視なしにポリシーを自己改善する手法。"
    },
    {
      "id": "2610.21261",
      "title": "Behavioral Compositionality of Sparse Autoencoder Representations",
      "abstract": "Sparse autoencoders (SAEs) represent model activations with sparse, linearly decoded features, but the downstream effects of those features need not compose additively. We introduce SAE Additivity Residuals (SAR), which measure the behavioral variation left unexplained above a chosen interaction order. Under independent feature subset sampling, population SAR is exactly the normalized energy of interactions above that order and bounds coalition ordering error for the optimal low order approximation. To distinguish compositionality associated with the SAE representation from that induced by downstream computation, we compare learned SAE coordinates with sum preserving random rotations of the same selected subspace and find lower first order residuals for the learned coordinates across all 18 model and behavior settings. The coordinates are nevertheless not fully additive: pairwise terms improve held out coalition ordering in every setting and outperform parameter matched models using randomly selected third order terms. In a combined steering experiment, pairwise modeling raises rank fidelity from 0.5874 to 0.7790 and reduces ordering error from 0.1444 to 0.0606. Together, these results show that SAE coordinates support comparatively compositional behavioral descriptions while faithful joint explanations and interventions still require interactions beyond individual feature effects. Code is available at https://github.com/OpenSAE/SAE-Behavioral-Compositionality.",
      "upvotes": 110,
      "github_stars": 23,
      "github_repo": "https://github.com/OpenSAE/SAE-Behavioral-Compositionality",
      "project_page": "https://opensae.github.io/SAE-Behavioral-Compositionality",
      "comments": 2,
      "org": "OpenSAE",
      "url": "https://huggingface.co/papers/2610.21261",
      "arxiv_url": "https://arxiv.org/abs/2610.21261",
      "title_ja": "稀疎自己符号化器（SAE）表現の行動的構成性",
      "summary_ja": "SAEの疎な特徴が下流の挙動に与える影響が、単純な足し合わせ（線形）で説明できるかを測定する指標SARを導入し、表現と計算の構成性を定量的に分析する。"
    }
  ],
  "labs": [
    {
      "lab": "OpenAI",
      "title": "Broad access through consistent standards",
      "summary": "How OpenAI works with distribution partners to uphold consistent safeguards, support responsible access, and clarify expectations in our Usage Policies.",
      "url": "https://openai.com/index/broad-access-through-consistent-standards",
      "published": "2026-10-22T06:00:00+09:00",
      "title_ja": "一貫した標準を通じた広範なアクセス",
      "summary_ja": "OpenAIが配信パートナーと連携し、利用ポリシーに基づき安全策と責任あるアクセスを維持する方法。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Duet Runs Your Work in the Background While You Sleep",
      "summary": "Anthropic opens a waitlist for Claude Duet, a proactive agent built on Opus 5.5 that monitors your apps and messages you only when something needs you.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-duet-runs-your-work-in-the-background-while-you-sleep",
      "published": "2026-10-22T04:09:35+09:00",
      "title_ja": "AnthropicのClaude Duet：不在中もバックグラウンドで動作する自律エージェント",
      "summary_ja": "Opus 5.5搭載。アプリを監視し、必要な時だけ連絡してくるプロアクティブなエージェントの待機リスト公開。"
    },
    {
      "lab": "Hugging Face",
      "title": "NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required",
      "summary": "",
      "url": "https://huggingface.co/blog/nvidia/kumo-relational",
      "published": "2026-10-22T03:26:30+09:00",
      "title_ja": "NVIDIA Kumo Relational：トレーニング不要でリレーショナルデータの教師あり学習を凌駕",
      "summary_ja": "事前トレーニングを必要とせず、リレーショナルデータにおいて従来の教師あり機械学習を上回る性能を発揮する。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Anthropic's Claude Security Now Tracks and Fixes Over a Million Code Vulnerabilities",
      "summary": "Anthropic's code vulnerability scanner now runs continuously on connected repos, tracks fixes automatically, and plugs into dev workflows via API and MCP.",
      "url": "https://alphasignal.ai/news/anthropic-s-claude-security-now-tracks-and-fixes-over-a-million-code",
      "published": "2026-10-22T02:40:31+09:00",
      "title_ja": "Claude Securityが100万件以上のコード脆弱性を追跡・修正",
      "summary_ja": "接続されたリポジトリを継続的にスキャンし、APIやMCPを通じて修正状況を自動追跡して開発ワークフローに統合。"
    },
    {
      "lab": "Hugging Face",
      "title": "How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization",
      "published": "2026-10-22T02:35:36+09:00",
      "title_ja": "SLMの語彙の専門化により推論コストを77%削減する方法",
      "summary_ja": "小規模言語モデル（SLM）の語彙を特定の用途に特化させることで、実際のアプリケーションにおける推論コストを大幅削減。"
    },
    {
      "lab": "OpenAI",
      "title": "How AT&T is rethinking in-house legal work with OpenAI",
      "summary": "AT&T is working with OpenAI to make legal knowledge easier to access. Learn how its LegalEdge team is rethinking intake and scaling legal judgment.",
      "url": "https://openai.com/index/att-legal",
      "published": "2026-10-22T02:00:00+09:00",
      "title_ja": "AT&TがOpenAIで社内法務業務を再考する方法",
      "summary_ja": "OpenAIとの提携により、LegalEdgeチームが法務知識へのアクセスを容易にし、法務判断の規模を拡大。"
    },
    {
      "lab": "Google Research",
      "title": "Empowering frontline maternal care with AI-assisted ultrasound",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/empowering-frontline-maternal-care-with-ai-assisted-ultrasound/",
      "published": "2026-10-22T01:23:53+09:00",
      "title_ja": "AI支援超音波検査による妊産婦ケアの強化",
      "summary_ja": "AIを活用した超音波検査により、最前線での妊産婦ケアを強化するヘルスケア・バイオサイエンスの取り組み。"
    },
    {
      "lab": "Hugging Face",
      "title": "Profiling TorchNeuron (Part 1): System-level profiling on AWS Trainium.",
      "summary": "",
      "url": "https://huggingface.co/blog/amazon/profiling-torchneuron-part-1",
      "published": "2026-10-22T01:04:43+09:00",
      "title_ja": "TorchNeuronのプロファイリング（パート1）：AWS Trainium上のシステムレベル解析",
      "summary_ja": "AWS TrainiumにおけるTorchNeuronのシステムレベルでのプロファイリング手法についての解説。"
    },
    {
      "lab": "Hugging Face",
      "title": "Granite Speech 5.0: Transcribe, Translate, and Attribute more Accurately and Faster",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-granite/granite-speech-5",
      "published": "2026-10-21T23:58:18+09:00",
      "title_ja": "Granite Speech 5.0：より正確かつ高速な文字起こし、翻訳、属性付与",
      "summary_ja": "音声の文字起こしや翻訳、発話者の属性特定を、従来よりも高速かつ高精度に実行する新しい音声モデル。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's PHP2Shell Exposes 70% of Websites to Remote Code Attacks",
      "summary": "OpenAI's Patch the Planet coalition and Wiz used frontier models to uncover PHP2Shell, two critical RCE flaws impacting roughly 70% of the web.",
      "url": "https://alphasignal.ai/news/openai-s-php2shell-exposes-70-of-websites-to-remote-code-attacks",
      "published": "2026-10-21T23:04:23+09:00",
      "title_ja": "OpenAIのPHP2Shellによりウェブサイトの70%がリモートコード攻撃の危機に",
      "summary_ja": "最先端モデルを用いて、ウェブの約7割に影響を与えるRCE（遠隔コード実行）の重大な脆弱性を発見。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI's GPT-Rosalind Mapped a Brain CRISPR Atlas in 32 Minutes",
      "summary": "OpenAI, PerturbAI, and Scripps deployed thousands of GPT-Rosalind agents in parallel to mine brain-cell data and surface new drug leads in 32 minutes.",
      "url": "https://alphasignal.ai/news/openai-s-gpt-rosalind-mapped-a-brain-crispr-atlas-in-32-minutes",
      "published": "2026-10-21T22:32:35+09:00",
      "title_ja": "OpenAIのGPT-Rosalindが32分で脳のCRISPRアトラスを作成",
      "summary_ja": "数千のAIエージェントを並列稼働させ、脳細胞データをマイニングして創薬の手がかりをわずか32分で特定。"
    },
    {
      "lab": "OpenAI",
      "title": "ChatGPT Ads expands to 26 new countries as over 100,000 advertisers have used the platform",
      "summary": "From local businesses to global brands, more advertisers can now reach people as they explore, compare and decide what to buy in ChatGPT.",
      "url": "https://openai.com/index/chatgpt-ads-expands-26-new-countries",
      "published": "2026-10-21T22:00:00+09:00",
      "title_ja": "ChatGPT広告が新たに26カ国へ拡大、広告主は10万社を突破",
      "summary_ja": "ChatGPT内で商品比較や検討を行うユーザーに対し、広告主がアプローチできる地域が大幅に拡大。"
    },
    {
      "lab": "OpenAI",
      "title": "OpenAI models are coming to Google Cloud",
      "summary": "OpenAI and Google Cloud are bringing frontier models and Codex workflows to Gemini’s Model Garden, available through Google Cloud Marketplace.",
      "url": "https://openai.com/index/openai-models-google-cloud",
      "published": "2026-10-21T21:00:00+09:00",
      "title_ja": "OpenAIのモデルがGoogle Cloudに登場",
      "summary_ja": "最新のフロンティアモデルとCodexワークフローがGoogle Cloud MarketplaceのGemini Model Gardenで利用可能に。"
    },
    {
      "lab": "AlphaSignal",
      "title": "Unitree's H2-X Humanoid Promises 8-Hour Shifts Guarding and Rescuing",
      "summary": "Unitree's new H2-X variant pushes humanoid battery life to roughly eight hours and leans hard into physical force, with warnings to keep your distance.",
      "url": "https://alphasignal.ai/news/unitree-s-h2-x-humanoid-promises-8-hour-shifts-guarding-and-rescuing",
      "published": "2026-10-21T17:14:23+09:00",
      "title_ja": "Unitree H2-Xヒューマノイド：8時間の警備・救助活動を約束",
      "summary_ja": "バッテリー寿命を約8時間に延ばし、物理的な力に特化した新型機。強力なパワーを持つため距離を保つよう警告。"
    },
    {
      "lab": "OpenAI",
      "title": "Patch the Planet: global response coordination as agents uncover critical vulnerabilities",
      "summary": "Patch the Planet connects security researchers, maintainers, and incident responders to help address critical vulnerabilities across open source.",
      "url": "https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities",
      "published": "2026-10-21T16:00:00+09:00",
      "title_ja": "Patch the Planet：エージェントが重大な脆弱性を発見する中でのグローバルな対応調整",
      "summary_ja": "セキュリティ研究者と開発者を繋ぎ、オープンソースにおける重大な脆弱性の解決を支援する国際的な取り組み。"
    },
    {
      "lab": "AlphaSignal",
      "title": "OpenAI Codex and Claude Co-Author a Real Particle Physics Paper",
      "summary": "Two AI coding agents performed a full particle physics measurement on archived ALEPH data, from event selection to unfolding to writing the paper.",
      "url": "https://alphasignal.ai/news/openai-codex-and-claude-co-author-a-real-particle-physics-paper",
      "published": "2026-10-21T15:03:43+09:00",
      "title_ja": "OpenAI CodexとClaudeが素粒子物理学の論文を共著",
      "summary_ja": "2つのAIエージェントが、イベント選択からデータ展開、執筆まで、ALEPHのデータを用いた素粒子測定の全工程を完遂。"
    },
    {
      "lab": "OpenAI",
      "title": "Using thousands of AI agents to uncover new leads in biological data",
      "summary": "See how OpenAI, PerturbAI, and Scripps Research used distributed AI agents to uncover promising research leads in data from millions of brain cells.",
      "url": "https://openai.com/index/scaling-ai-research-for-complex-biological-data",
      "published": "2026-10-21T13:50:00+09:00",
      "title_ja": "数千のAIエージェントを使用して生物学的データの新しい手がかりを解明",
      "summary_ja": "分散型AIエージェントを活用し、数百万の脳細胞データから有望な研究の手がかりを特定する手法の紹介。"
    },
    {
      "lab": "Hugging Face",
      "title": "FairStress: A deeper evaluation of fairness in LLM decision-making",
      "summary": "",
      "url": "https://huggingface.co/blog/allenai/fairstress",
      "published": "2026-10-21T01:09:19+09:00",
      "title_ja": "FairStress：LLMの意思決定における公平性の詳細な評価",
      "summary_ja": "大規模言語モデルによる意思決定プロセスにおいて、公平性がどのように保たれているかを深く評価・分析。"
    },
    {
      "lab": "Hugging Face",
      "title": "ALTK-Evolve: How learned memory tops the τ²-bench leaderboard on customer service tasks without a frontier model",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/altk-evolve-bc",
      "published": "2026-10-21T00:19:48+09:00",
      "title_ja": "ALTK-Evolve：学習メモリがフロンティアモデルなしで顧客サービス指標の首位を獲得",
      "summary_ja": "フロンティアモデルを使わずに、学習されたメモリ機能を活用してカスタマーサービス向けベンチマークでトップを記録。"
    },
    {
      "lab": "Google Research",
      "title": "Grounding AI agents in biological reality: Building blocks for autonomous wet labs",
      "summary": "General Science",
      "url": "https://research.google/blog/grounding-ai-agents-in-biological-reality-building-blocks-for-autonomous-wet-labs/",
      "published": "2026-10-17T03:11:34+09:00",
      "title_ja": "AIエージェントを生物学的現実に接地させる：自律型ウェットラボの構築ブロック",
      "summary_ja": "AIエージェントを実際の生物学的な制約に適合させ、自律的な実験室（ウェットラボ）を実現するための基礎技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Accelerating the search for antimicrobial peptides with Google Antigravity",
      "summary": "Accelerating the search for novel antimicrobial peptides using Google Antigravity for Science.",
      "url": "https://deepmind.google/blog/accelerating-antimicrobial-discovery/",
      "published": "2026-10-16T01:08:03+09:00",
      "title_ja": "Google Antigravityによる抗菌ペプチド探索の加速",
      "summary_ja": "科学用AI「Google Antigravity」を用いて、新しい抗菌ペプチドの探索プロセスを高速化する取り組み。"
    },
    {
      "lab": "Apple ML",
      "title": "Local and Distributed Large LLM Inference with MLX and RDMA on Mac Studio",
      "summary": "MLX on Mac with Apple silicon lets AI researchers and developers experiment locally with the latest models and methods in a private environment. The open-source array framework leverages the unified memory architecture of Apple silicon, enabling anyone to run new inference and fine-tuning methods on their own hardware and explore other AI techniques. In a previous post , we highlighted the advantages of the M5 architecture and its GPU Neural Accelerators.",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "Mac StudioにおけるMLXとRDMAを用いたローカルおよび分散型LLM推論",
      "summary_ja": "Appleシリコンの統合メモリを活用し、プライベートな環境で最新モデルの推論や微調整を可能にするフレームワーク。"
    },
    {
      "lab": "Apple ML",
      "title": "Selection-Based Structured Reasoning: Toward Efficient Multimodal Search Agents",
      "summary": "Multimodal agents commonly generate freeform reasoning before each action. For small models, limited model capacity can result in lengthy reasoning that provides little useful guidance for action generation while incurring substantial inference cost. To address this challenge, we introduce Selection-based Structured Reasoning (SSR), a framework that reformulates reasoning as selection instead of open-ended generation. SSR represents recurring high-level reasoning as pre-specified, reusable natural-language candidates. At each turn, the model selects from the reasoning candidates based on their",
      "url": "https://machinelearning.apple.com/research/selection-structured-reasoning",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "選択ベースの構造化推論：効率的なマルチモーダル検索エージェントに向けて",
      "summary_ja": "自由記述の代わりに、あらかじめ用意された推論候補を選択させることで、推論コストを抑えつつ行動精度を向上させる枠組み。"
    },
    {
      "lab": "Apple ML",
      "title": "Plan or Retrieve First? A Scale Study of Tool Discovery Architectures",
      "summary": "Tool-augmented LLM agents discover relevant APIs from large registries before planning execution, yet finite context windows prohibit injecting all tool definitions into a single prompt. The dominant approach, which we term Retrieve-then-Plan (RtP), embeds the user query and retrieves similar tools via approximate nearest-neighbor search. We study an alternative Plan-then-Retrieve (PtR) paradigm in which the LLM first generates Abstract Tool Stubs (hypothesized function signatures describing needed capabilities) which then serve as retrieval queries against the registry. Evaluating on…",
      "url": "https://machinelearning.apple.com/research/plan-retrieve-tool-discovery",
      "published": "2026-10-15T09:00:00+09:00",
      "title_ja": "計画が先か検索が先か？ツール発見アーキテクチャの規模別調査",
      "summary_ja": "膨大なAPIからツールを探す際、従来の検索後に計画する手法に対し、抽象的なスタブを生成してから検索する新手法を比較。"
    },
    {
      "lab": "Google Research",
      "title": "Putting Earth AI to work: Geospatial agents for our planet's biggest challenges",
      "summary": "Earth AI",
      "url": "https://research.google/blog/putting-earth-ai-to-work-geospatial-agents-for-our-planets-biggest-challenges/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "地球AIの実装：地球規模の課題に対応する地理空間エージェント",
      "summary_ja": "地理空間データとAIエージェントを組み合わせ、地球上の重大な問題に対処するための取り組み。"
    },
    {
      "lab": "Google Research",
      "title": "Analyzing technical documents with Deep Review",
      "summary": "General Science",
      "url": "https://research.google/blog/analyzing-technical-documents-with-deep-review/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Deep Reviewによる技術文書の分析",
      "summary_ja": "Deep Reviewを用いて、複雑な技術文書を詳細に分析し、内容を理解・精査するための一般科学向け手法。"
    },
    {
      "lab": "Google Research",
      "title": "Research@ 2026: 10 ways we're amplifying human ingenuity",
      "summary": "General Science",
      "url": "https://research.google/blog/research-2026-10-ways-were-amplifying-human-ingenuity/",
      "published": "2026-10-15T01:14:00+09:00",
      "title_ja": "Research@ 2026：人間の創意工夫を増幅させる10の方法",
      "summary_ja": "2026年に向けて、AIがいかにして人間の創造性や知的能力を強化・拡張していくかを示す10の指針。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection",
      "summary": "Learn how Google DeepMind and GovTech Singapore uses lightweight on-device Gemma models to intercept conversational scams in private chats with zero cloud data egress.",
      "url": "https://deepmind.google/blog/on-device-ai-scam-detection-mddi/",
      "published": "2026-10-14T11:00:14+09:00",
      "title_ja": "Google DeepMindとシンガポール政府、詐欺検知用微調整モデルを共同開発",
      "summary_ja": "軽量なGemmaモデルを端末内で動作させ、データをクラウドに出さずにプライベートなチャット上の詐欺を検知・阻止。"
    },
    {
      "lab": "Apple ML",
      "title": "Code-Switching Detection via Language-Selective Dimensions in Speech Foundation Models",
      "summary": "Code-switching (CS), the alternation between languages within an utterance, is common in multilingual speech but underrepresented in pretraining corpora. Increasing CS coverage requires finding relevant utterances in large speech collections so that they can be included in training data. One way to find such utterances is to transcribe the speech and detect language alternation in the text, but this depends on obtaining accurate multilingual transcriptions. We propose a lightweight method that detects CS directly from speech. It uses frame-level language information in pretrained speech…",
      "url": "https://machinelearning.apple.com/research/code-switching-detection",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "音声基盤モデルにおける言語選択的次元によるコードスイッチング検出",
      "summary_ja": "発話内の言語切り替えを、テキスト化せずに音声から直接検出する軽量な手法を提案し、多言語データの収集を効率化。"
    },
    {
      "lab": "Apple ML",
      "title": "The Design Space of Tri-Modal Masked Diffusion Models",
      "summary": "Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent work initializing and finetuning a base unimodal model for bi-modal generation. Diverging from previous approaches, we introduce the first tri-modal Masked Diffusion Models (MDM) pretrained from scratch on text, image-text, and audio-text data. We systematically analyze multimodal scaling laws, modality mixing ratios, noise schedules, batch-size effects and provide optimized inference sampling defaults. Our batch-size analysis yields a novel stochastic differential equation (SDE) based…",
      "url": "https://machinelearning.apple.com/research/tri-modal-masked-diffusion",
      "published": "2026-10-14T09:00:00+09:00",
      "title_ja": "3モード・マスク拡散モデルの設計空間",
      "summary_ja": "テキスト、画像、音声をゼロから学習した初の3モード拡散モデルを導入。スケーリング則や最適なサンプリング手法を分析。"
    }
  ]
};
