window.papersData = {
  "updated_at": "2026-11-21 12:01 JST",
  "arxiv": [
    {
      "id": "2611.26450",
      "title": "A CPU Inside an LLM: Zero-Gradient Compilation of Exact Circuits into Pretrained Weights",
      "url": "https://arxiv.org/abs/2611.26450",
      "pdf": "https://arxiv.org/pdf/2611.26450",
      "authors": [
        "Tanmay Sah"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "27 pages, 3 figures, 24 tables",
      "hf_upvotes": 3,
      "star_votes": 2,
      "star_level": 2,
      "star_codes": [
        "cap",
        "new"
      ],
      "star_quote": "We introduce closed-form, zero-gradient circuit-grafting primitives that compile deterministic computation directly into pretrained LM weights",
      "signals": [],
      "headline": "学習不要かつ閉形式の重み書き換えにより、LLM内部へ正確な算術演算回路を実装する手法",
      "what": "学習データや実行時のフックを使用せず、事前学習済みLMの重みを解析的に直接修正（Circuit-grafting）して、多桁の算術演算などの決定論的計算回路を埋め込む手法です。Mellin-GLU求積法やChebyshev Indefinite-RoPEなどの機構を組み合わせ、モデルの言語能力を維持しつつ演算精度を保証します。",
      "enables": "6桁の算術演算において、Qwen 3.5 4Bなどで最大100%の精度を達成し、少数のサンプルを用いたLoRA（精度42.2-61.7%）を大幅に上回ります。埋め込まれた回路は自然言語のコンテキスト内でも動作し、文の途中からの計算再開も可能です。",
      "why_it_matters": "勾配による微調整なしに、事前学習済みモデルに特定のアルゴリズム機能を数学的・決定論的に「インストール」できる可能性を示した画期的なアプローチです。",
      "tags": [
        "LLM",
        "ウェイトプログラミング",
        "算術演算"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.24738",
      "title": "Jeveration: System One Models Now Generate",
      "url": "https://arxiv.org/abs/2611.24738",
      "pdf": "https://arxiv.org/pdf/2611.24738",
      "authors": [
        "Yuhe Liu",
        "Qi Li",
        "Shihua Zhang",
        "Xinchao Wang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 114,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap",
        "new",
        "sota"
      ],
      "star_quote": "Jeveration generates a 512x512 image in 78 ms, up to 122x faster than existing unified models",
      "signals": [
        "HF ▲114"
      ],
      "headline": "1回のフォワードパスで画像生成・編集・密度予測を行う統合モデルJeveration",
      "what": "高速な並列予測を行うSystem Oneモデル（Jev）を画像生成に拡張した手法です。位置間で共有されるランダム状態を条件付けに用いることで、単一のパスでグローバルな一貫性を保った画像生成、画像変換、およびセグメンテーションなどの密度予測を同時にサポートします。",
      "enables": "512x512の画像をわずか78msで生成し、既存の統合モデルと比較して最大122倍の高速化を実現しながら、競争力のある画質を維持しました。",
      "why_it_matters": "拡散モデルのような反復的なサンプリングを必要とせず、単一のモデルで多様なビジョンタスクを極めて高速に実行できる点に意義があります。",
      "tags": [
        "画像生成",
        "コンピュータビジョン",
        "高速推論"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.26020",
      "title": "FrontierReplay: Split-Free Exact Prefix Caching for Hybrid Language Models",
      "url": "https://arxiv.org/abs/2611.26020",
      "pdf": "https://arxiv.org/pdf/2611.26020",
      "authors": [
        "Zekun Wang",
        "Yizhuo Wang"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages (12 pages main text + references), 12 figures, 4 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "FrontierReplay delivers clear gains over existing exact caches, lowering median time to first token (TTFT) by 16-89% (up to 8.9x)",
      "signals": [],
      "headline": "Hybrid LLMのプレフィル計算を分割せず、高効率かつ正確にステートを再利用するFrontierReplay",
      "what": "Self-attentionとRecurrentレイヤーを組み合わせたHybrid LMにおいて、文脈の境界（ターンの終わり等）でState-only replayカーネルを用いて状態を復元するキャッシュシステムです。プレフィルパスを中断することなく、短い入力ウィンドウをログに記録して再計算することで、正確なチェックポイントを生成します。",
      "enables": "既存手法と比較してTTFT（Time to First Token）を16-89%低減し、Goodputを最大4.26倍向上させます。近似手法と異なりタスク精度を100%維持し、長文コンテキストでの精度低下を回避します。",
      "why_it_matters": "従来のキャッシュ手法が抱えていた「プレフィル計算の分割によるオーバーヘッド」と「状態の近似による精度低下」の両方を、計算コストの低いリプレイ機構によって解決した点に意義があります。",
      "tags": [
        "LLM推論",
        "キャッシュ最適化",
        "Hybridモデル"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25960",
      "title": "When Sounds Turn Heads: Recovering Event Timing That Audio LLMs Fail to Say",
      "url": "https://arxiv.org/abs/2611.25960",
      "pdf": "https://arxiv.org/pdf/2611.25960",
      "authors": [
        "Jongbhin Woo",
        "Jaewook Jeong",
        "Joon Son Chung"
      ],
      "categories": [
        "cs.SD",
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "To bring this timing into the answer, we introduce head-guided decoding, which needs no training.",
      "signals": [],
      "headline": "Audio LLMの内部アテンションヘッドを利用して音イベントの正確な発生時間を特定する手法",
      "what": "Audio LLMの特定のアテンションヘッドが、クエリされた音のタイミングを正確に追跡していることを発見し、その情報をデコードに活用する手法です。モデルの出力テキストに含まれる不正確なタイムスタンプではなく、ヘッドから直接読み取った情報で候補をスコアリングし直すHead-guided decodingを提案しています。",
      "enables": "トレーニングなしで、新しい録音データに対するmIoU（Mean Intersection over Union）を0.07-0.36から0.48-0.56へと向上させます。モデルが「聞き取っている」にもかかわらず「言い淀んでいる」情報を、推論時の制御だけで引き出すことが可能です。",
      "why_it_matters": "マルチモーダルモデルの内部表現と最終的な出力の乖離を特定し、モデルの自己注意機構自体が時間情報の欠落を補完できることを実証しました。",
      "tags": [
        "オーディオ理解",
        "インタープリタビリティ",
        "デコーディング"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26619",
      "title": "TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming",
      "url": "https://arxiv.org/abs/2611.26619",
      "pdf": "https://arxiv.org/pdf/2611.26619",
      "authors": [
        "Jinbin Luo",
        "Xiaozhe Yao",
        "Shang Yang",
        "Zhijian Liu",
        "Song Han",
        "Qinghao Hu"
      ],
      "categories": [
        "cs.DC",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "13 pages",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "TideCache completes up to 2.04x as many agent turns, reduces overall P50 per-token latency by 20--59%",
      "signals": [],
      "headline": "CPU-GPUスーパーチップ環境でHybrid LLMのキャッシュ管理と転送を最適化するTideCache",
      "what": "AttentionレイヤーとRecurrentレイヤーが混在するHybridモデル向けに、GPUメモリを動的に再配分し、ホストメモリ間でのレイヤー単位のストリーミングを行うサービングシステムです。計算の合間に次のレイヤーのキャッシュをプリフェッチするCache Streamerなどのコンポーネントで構成されます。",
      "enables": "SGLangと比較して、エージェントのターン処理数を最大2.04倍に増やし、TTFTを1.40-3.05倍改善します。限られたHBM（高帯域メモリ）を有効活用し、スループットと遅延の両面で性能を向上させます。",
      "why_it_matters": "モデル構造に応じた不均一なキャッシュ要求を透過的に管理することで、次世代のハードウェア構成における大規模モデル推論のボトルネックを解消します。",
      "tags": [
        "LLM推論",
        "システム最適化",
        "GPUメモリ"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.24541",
      "title": "Fuse Before Reconstruct: A Novel Reconstruction Paradigm for Multimodal Industrial Anomaly Detection",
      "url": "https://arxiv.org/abs/2611.24541",
      "pdf": "https://arxiv.org/pdf/2611.24541",
      "authors": [
        "Zhi Li",
        "Hanyu Wang",
        "Qiyu Chen",
        "Fei Shen",
        "Zhengtao Zhang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint before peer review. Includes supplementary material. Code: https://github.com/LiZhi-CASIA/FBR",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "surpassing previous state-of-the-art methods by +2.9% and +4.1%, respectively.",
      "signals": [],
      "headline": "特徴融合を再構成の前に行う産業用異常検知の新パラダイム「Fuse Before Reconstruct」",
      "what": "画像と点群のマルチモーダルデータを用いた異常検知において、特徴の融合を再構成処理の前に行うFuse Before Reconstruct (FBR) パラダイムを提案しています。双方向クロスモーダルアテンションとピクセル単位のゲート付き融合により、モダリティ間の相補性を最大限に活用します。",
      "enables": "MVTec 3D-ADで98.3%、Eyecandiesで92.6%のI-AUROCを達成し、既存のSOTA手法をそれぞれ2.9%、4.1%更新しました。",
      "why_it_matters": "従来の再構成手法における「モダリティ間の情報不足」や「一対多の曖昧なマッピング」という課題を、特徴融合を先行させることで解決しています。",
      "tags": [
        "異常検知",
        "マルチモーダル",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24689",
      "title": "Stealing Exact Training Data from Other Clients during Federated Learning",
      "url": "https://arxiv.org/abs/2611.24689",
      "pdf": "https://arxiv.org/pdf/2611.24689",
      "authors": [
        "Omkar Shrikanth",
        "Soham Dambalkar",
        "Parag Jyoti Pal",
        "Advik Raj Basani",
        "Arnab K. Paul"
      ],
      "categories": [
        "cs.LG",
        "cs.CR",
        "cs.DC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Preprint. 22 pages, 21 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "We show, for the first time, exact sentence recovery, with 100% precision",
      "signals": [],
      "headline": "連合学習において他クライアントの正確な訓練データを盗み出す新しい勾配反転攻撃",
      "what": "連合学習の勾配更新情報から元データを復元する、反復的なループを用いた勾配反転攻撃パイプラインです。あるラウンドで復元に成功した文を勾配から差し引くことで、残りの文の信号を浮かび上がらせ、複数のクライアントが混ざった勾配から個別のデータを特定します。",
      "enables": "モデルの隠れ層次元の4倍までのトークンが含まれる集計データから、最大80.2%の文を100%の精度で正確に復元することに初めて成功しました。",
      "why_it_matters": "従来の攻撃では困難だった「複数クライアントが混ざった状態からの正確なテキスト復元」が可能であることを示し、連合学習のプライバシーリスクを浮き彫りにしています。",
      "tags": [
        "セキュリティ",
        "連合学習",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24830",
      "title": "A Foundation Model to Measure and Predict Human Behaviour",
      "url": "https://arxiv.org/abs/2611.24830",
      "pdf": "https://arxiv.org/pdf/2611.24830",
      "authors": [
        "Haoran Ye",
        "Tianrui Huo",
        "Hangzhen Li",
        "Xin Zhang",
        "Guojie Song"
      ],
      "categories": [
        "cs.CL",
        "cs.AI",
        "cs.HC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "48 pages, 6 figures",
      "hf_upvotes": 2,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "It predicts individual behaviour more accurately than frontier LLMs (up to 28.4% relative improvement).",
      "signals": [],
      "headline": "人間の心理状態と行動を高い精度で予測する基盤モデルChiron",
      "what": "心理学的構成概念の表現、個人の行動予測、および人口統計的な応答分布の調整を同時に行うためにLLMを微調整した基盤モデルです。36の行動ドメインと78の社会科学実験を含む大規模なデータセットで学習されています。",
      "enables": "既存のLLMと比較して個人の行動予測精度が最大28.4%向上し、社会科学実験のシミュレーションにおける効果量の推定誤差を82.2%〜94.3%削減しました。",
      "why_it_matters": "従来のLLMが抱えていた「人間らしさの歪み」を解消し、心理測定や社会科学研究に利用可能な信頼性の高い計算モデルを提供します。",
      "tags": [
        "心理学AI",
        "LLM",
        "行動科学"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24637",
      "title": "Hypnos: A Dual-Phase End-to-End Platform for Scalable Continual Learning at the Edge",
      "url": "https://arxiv.org/abs/2611.24637",
      "pdf": "https://arxiv.org/pdf/2611.24637",
      "authors": [
        "Guilherme Guedes",
        "Marco Apolinario Lainez",
        "Charlotte Frenkel"
      ],
      "categories": [
        "cs.AR",
        "cs.AI",
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
      "star_quote": "It sets a new state-of-the-art accuracy of 78.6%-81.6% for edge CL systems",
      "signals": [],
      "headline": "覚醒と睡眠のサイクルを模倣したエッジデバイス向け継続学習プラットフォームHypnos",
      "what": "脳の覚醒（低負荷な適応）と睡眠（長期的な記憶定着）に着想を得た、エッジ向けの継続学習システムです。覚醒時はMCU上で勾配を使わないプロトタイプ更新を行い、睡眠時は充電器側のリソースを用いてリハーサルベースの勾配更新を行います。",
      "enables": "CORe50ベンチマークにおいて、既存手法より22倍少ない計算量で78.6%〜81.6%というSOTAの精度を達成しました。",
      "why_it_matters": "電力とメモリに制約があるエッジデバイスにおいて、プライバシーを保ちつつ動的なデータ変化に適応するための実用的なアーキテクチャを提示しています。",
      "tags": [
        "継続学習",
        "エッジコンピューティング",
        "組み込み"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.22124",
      "title": "FrameSeg3D: Learned Local Frames for Segmenting Small Parts on High-Resolution 3D Scans",
      "url": "https://arxiv.org/abs/2611.22124",
      "pdf": "https://arxiv.org/pdf/2611.22124",
      "authors": [
        "Xinwen Zhang",
        "Tongyan Wang",
        "Huawei Lin"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "31 pages, 6 figures, 16 tables",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "outperforms state-of-the-art methods on hand scans (mean Dice 0.970 on nails)",
      "signals": [],
      "headline": "高解像度3Dスキャン上の微小部位を、局所座標系の予測により高精度にセグメンテーションする手法",
      "what": "手のスキャンにおける爪や口腔スキャンにおける歯など、微小な部位のセグメンテーションのために、まず部位の中心と向き（局所フレーム）を予測し、その視点から高解像度で再描画して処理するFrameSeg3Dを提案しています。スキャン全体を一度に処理する際の解像度不足や視点の歪みの問題を回避します。",
      "enables": "爪のセグメンテーションでmean Dice 0.970、歯のセグメンテーションでIoU 96.5を達成し、既存のSOTA手法を上回る精度を実現しました。",
      "why_it_matters": "計算資源の制約による解像度の低下を防ぎ、部位の向きやスケールを正規化することで、少数のラベルデータからでも高精度な学習が可能になります。",
      "tags": [
        "3Dビジョン",
        "セグメンテーション",
        "医療画像処理"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22231",
      "title": "From Temperature-Limited to Battery-Limited Legged Locomotion",
      "url": "https://arxiv.org/abs/2611.22231",
      "pdf": "https://arxiv.org/pdf/2611.22231",
      "authors": [
        "Rapha\\\"el S\\'egas",
        "Bal\\'azs Opra",
        "L\\'eo Ghafari",
        "Thomas Stewart"
      ],
      "categories": [
        "cs.RO",
        "cs.LG",
        "cs.SY",
        "eess.SY"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "9 pages, 7 figures, 2 tables. Supplementary video in the ancillary files. Dataset: https://doi.org/10.5281/zenodo.24274994",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "turns sustained locomotion from temperature-limited to battery-limited",
      "signals": [],
      "headline": "モータの熱制約を考慮した強化学習により、脚式ロボットの歩行時間をバッテリー限界まで延長",
      "what": "モータの温度を直接観測せず、トルクと関節速度から推定される熱モデル（13ノードのRCネットワーク）に基づき、将来の収束温度（漸近線）を報酬関数に組み込む強化学習手法です。ロボットが過熱する前に熱を分散させる歩容を学習させます。",
      "enables": "Unitree Go2において、熱による停止（シャットダウン）を回避し、走行距離を1.1km（19分）から10.0km（174分、バッテリー枯渇まで）へと大幅に延長しました。",
      "why_it_matters": "脚式ロボットの実運用におけるボトルネックがバッテリー容量ではなく、モータの熱であることを指摘し、それを制御層で解決する実用的なアプローチを提示しています。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "システム制御"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22355",
      "title": "SandBAR: A Band-Asymmetric Architecture for Underwater Image Restoration with Removable Frequency Scaffolding",
      "url": "https://arxiv.org/abs/2611.22355",
      "pdf": "https://arxiv.org/pdf/2611.22355",
      "authors": [
        "Yanzi Liu",
        "Haoran Hou",
        "Jiachi Tong",
        "Shen Chen",
        "Shuang Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to WACV 2027. Camera-ready version. 9 pages, 6 figures",
      "hf_upvotes": null,
      "star_votes": 2,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "establishes a new three-domain mean state of the art on the benchmark family",
      "signals": [],
      "headline": "周波数特性の非対称性を利用した水中画像復元アーキテクチャSandBAR",
      "what": "水中画像の劣化が低周波（色かぶり）と高周波（局所的なボケ）で異なる性質を持つことに着目した、帯域非対称（Band-Asymmetric）な復元アーキテクチャです。SPARKモジュールにより、低周波には広範な色の修正を、高周波には軽量な詳細復元を並列に適用します。",
      "enables": "主要な3つの水中画像ベンチマーク（EUVP, LSUI, UIEB）において、既存手法を約1.0 dB上回る新たなSOTAを達成しました。",
      "why_it_matters": "水中特有の光学現象を物理的な特性に合わせてモデル化しており、推論時の計算負荷を増やすことなく高い復元性能を実現しています。",
      "tags": [
        "画像復元",
        "水中画像処理",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22737",
      "title": "Proximal Targets: Training Looped Refiners on Problems with Many Correct Answers",
      "url": "https://arxiv.org/abs/2611.22737",
      "pdf": "https://arxiv.org/pdf/2611.22737",
      "authors": [
        "Syed Affan Daimi"
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
        "new"
      ],
      "star_quote": "propose the proximal target: train each pass toward the correct answer nearest to its own input",
      "signals": [],
      "headline": "正解が複数存在する問題において、入出力間の距離に基づく学習により推論を収束させる手法",
      "what": "数独やグラフ彩色など、正解が複数ある反復型の推論モデル（Looped Refiner）のためのProximal Target学習法です。出力を特定の固定された一正解に近づけるのではなく、現在の入力に最も近い正解をターゲットに設定することで、平均化による不正解状態への陥りを防ぎます。",
      "enables": "数独において、標準的な学習では2.5%だった正解率を98.8%まで向上させ、10,000以上の正解がある疎な問題でも高い性能を示しました。",
      "why_it_matters": "反復的な推論モデルにおいて「多義性」が学習を不安定化させるという理論的課題を解決し、推論の収束性を保証する新しい枠組みを提供します。",
      "tags": [
        "AI",
        "推論",
        "強化学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22955",
      "title": "ResoLUT: Distilling Residual Networks into Lookup-Table Networks",
      "url": "https://arxiv.org/abs/2611.22955",
      "pdf": "https://arxiv.org/pdf/2611.22955",
      "authors": [
        "Katarzyna Fojcik",
        "Aidas Mikalauskas",
        "Matthias Kampa",
        "Renaldas Zioma",
        "Jogundas Armaitis"
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
        "sota"
      ],
      "star_quote": "best results of logic and lookup-table networks on CIFAR-10 and CIFAR-100",
      "signals": [],
      "headline": "ResNetをルックアップテーブルの木に蒸留し、FPGAでの超高速推論を実現するResoLUT",
      "what": "学習済みのResNetを、多ビットの残差接続（residual stream）を維持したまま、ルックアップテーブル（LUT）の木構造へと層ごとに蒸留する手法です。論理ネットワークでありながら、ディープな階層構造と数値精度を両立させます。",
      "enables": "CIFAR-100で78.87%の精度を達成し、FPGA実装において毎秒18万9千枚という極めて高いスループットを記録しました。",
      "why_it_matters": "論理回路ベースのネットワークにおいて課題だった深層化と精度の両立を実現し、エッジデバイスやFPGAでのAI実装の可能性を広げました。",
      "tags": [
        "モデル圧縮",
        "FPGA",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.25235",
      "title": "Some Memories Must Fade: Persistence and Decay of User Memories in Model Parameters",
      "url": "https://arxiv.org/abs/2611.25235",
      "pdf": "https://arxiv.org/pdf/2611.25235",
      "authors": [
        "Sanidhya Vijayvargiya",
        "Rahul Lokesh"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "30 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Our substrate is a fixed-capacity LoRA adapter that consists of k-hot rank combinations",
      "signals": [],
      "headline": "モデルの重み自体にユーザー情報を保持し、時間経過による忘却も制御するパラメトリックメモリ管理",
      "what": "RAGなどの外部検索に頼らず、固定容量のLoRAアダプタを用いてユーザーの記憶をモデルの重みに直接保存するシステムです。情報の定着、更新、そして一時的な情報の減衰（忘却）を制御する学習済みポリシーを導入し、記憶のライフサイクルを管理します。",
      "enables": "情報の有効期間内は正確に回答し、期限切れ後は適切に棄却することで、オラクル（理想的な記憶管理）の86%の性能を達成しました。継続学習（CL）やRAGのベースラインを上回る柔軟な記憶制御を可能にします。",
      "why_it_matters": "「すべての情報を永続的に保持する」という従来の制約を脱し、人間の記憶のように情報の重要度や鮮度に応じた管理をモデル内部で実現する新しい記憶の枠組みを提示しています。",
      "tags": [
        "パーソナライゼーション",
        "継続学習",
        "LLM"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25476",
      "title": "WeightCode: Installing New Capabilities into Neural Networks via Weight-Space Programming",
      "url": "https://arxiv.org/abs/2611.25476",
      "pdf": "https://arxiv.org/pdf/2611.25476",
      "authors": [
        "Bo Li",
        "Taoyong Cui",
        "Bob Zhang",
        "Mengran Li",
        "Chengyang Zhang",
        "Yang Zhang"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "26 pages, 11 figures, including appendix. Code: https://github.com/Gen-Verse/WeightCode",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "WeightCode, a WSP framework, uses a frozen language model to write executable weight programs",
      "signals": [],
      "headline": "勾配学習なしで既存モデルに新機能をインストールするWeight-Space Programming",
      "what": "言語モデルが記述した実行可能なプログラム（WeightCode）を通じて、学習済みネットワークの重みを直接操作し、新しい計算能力を埋め込むフレームワークです。画像認識やロボット制御モデルに対し、勾配を用いたトレーニングを一切行わずにタスク知識をインストールします。",
      "enables": "ImageNetにおいて、既存のクリーン精度を維持したまま、特定のノイズ堅牢性などの指標を8.84-17.62ポイント向上させ、8つのファインチューニング手法を上回る結果を出しました。また、未知のコマンド合成や新しいアクションの追加にも成功しています。",
      "why_it_matters": "モデルをブラックボックスとしてではなく、プログラムによって拡張・修正可能なデータ構造として扱う新しいパラダイム（WSP）を確立しました。",
      "tags": [
        "モデル編集",
        "ウェイトプログラミング",
        "画像認識"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25614",
      "title": "Don't Lose the Future: Latent-Aware 4-Bit Quantization of World Action Models",
      "url": "https://arxiv.org/abs/2611.25614",
      "pdf": "https://arxiv.org/pdf/2611.25614",
      "authors": [
        "Yichen Guo",
        "Yanlong Chen",
        "Xinyue Zhang",
        "Mohan Liu",
        "Song Zhang",
        "Yawei Li"
      ],
      "categories": [
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 4 figures, 6 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LAQ reaches 76.4% and 83.3% average success on Fast-WAM and Cosmos-Policy, within 1.2 percentage points of the 16-bit models and all above the baselines with 16-bit KV caches.",
      "signals": [],
      "headline": "ロボット動作予測の精度を維持する、潜在表現を考慮した4ビット量子化フレームワークLAQ",
      "what": "World Action Models (WAMs)をロボットの車載コンピュータ向けに量子化する際、将来のシーン予測（潜在表現）の劣化が動作エラーに繋がることに着目した手法です。予測結果が動作決定に与える影響度を測定するReader Metricに基づき、ビット割り当てを最適化します。",
      "enables": "重み・アクティベーション・KVキャッシュのすべてを4ビットに圧縮しながら、16ビットモデルと遜色ない成功率（差は1.2ポイント以内）を維持します。ピークメモリを2.3倍削減し、実行速度を1.66倍向上させます。",
      "why_it_matters": "単なる出力エラーの最小化ではなく、モデル内部の「未来予測」プロセスを保護することで、軽量化と高精度な制御を両立させた点が特徴です。",
      "tags": [
        "量子化",
        "ロボティクス",
        "WorldModels"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26018",
      "title": "Does the Workspace Do the Work? A Causal Protocol for Verifying Global-Workspace Computation in a Language Model",
      "url": "https://arxiv.org/abs/2611.26018",
      "pdf": "https://arxiv.org/pdf/2611.26018",
      "authors": [
        "Diaoxuan He",
        "Linqian Wu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "q-bio.NC"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 8 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We introduce a causal protocol that identifies who computes when modules communicate.",
      "signals": [],
      "headline": "言語モデル内部のモジュール間通信がグローバルワークスペース理論に従うかを検証する因果プロトコル",
      "what": "情報のグローバルな放送と統合を仮定する「意識」の理論（GWT）に基づき、学習済みモデルのモジュールが受け取った情報を「無視」「転送」「再結合」のいずれで処理しているかを、メッセージの移植実験を通じて特定する手法です。モデルの中間層で通信される情報を操作し、その結果生じる出力の変化を因果的に分析します。",
      "enables": "AFGWという特定のアーキテクチャにおいて、メッセージが再結合されるケースが97%に達することを確認し、モデルが自身のメモリから情報を取得する際に放送されたメッセージがガイドとして機能していることを明らかにしました。",
      "why_it_matters": "認知科学の理論をAIモデルの内部動作の検証に応用し、ブラックボックス化された通信プロセスの具体的な計算内容を定量的に評価可能にしました。",
      "tags": [
        "インタープリタビリティ",
        "意識理論",
        "LLM"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.23339",
      "title": "Optimize the Cob, Then the Kernel: Optimizing Beam Search for Generative Recommendation Inference",
      "url": "https://arxiv.org/abs/2611.23339",
      "pdf": "https://arxiv.org/pdf/2611.23339",
      "authors": [
        "Shing Wai Pun",
        "Kai Wu",
        "Pengfei Xia",
        "Hui Zang",
        "Wei Guo",
        "Yong Liu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 4 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "our approach reduces end-to-end latency by up to 25x over vLLM on Ascend NPUs",
      "signals": [],
      "headline": "Generative Recommendationの推論をTree Attentionと静的KV管理で最大25倍高速化",
      "what": "Generative Recommendation（GR）特有の長い入力と広いBeam Search、短い出力という特性に最適化した推論エンジンです。Tree AttentionによるKVキャッシュアクセスの重複排除に加え、静的なKVキャッシュ割り当てやTorchAirによるグラフコンパイル、語彙制約デコードなどを統合しています。",
      "enables": "カスタムカーネルを使用せずに、Ascend NPU上でvLLMに対し最大25倍の推論レイテンシ削減を実現し、最新のカスタムカーネル手法に匹敵する性能を達成しました。",
      "why_it_matters": "LLMサービングの既存手法であるvLLMなどはGRの推論特性に対して冗長な処理が多く、個別のカーネル開発の前にパイプライン全体をホリスティックに最適化する重要性を示しています。",
      "tags": [
        "推論加速",
        "推薦システム",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23581",
      "title": "ExiST: Existence-Aware Self-Training for Semi-Supervised Multi-Organ Segmentation",
      "url": "https://arxiv.org/abs/2611.23581",
      "pdf": "https://arxiv.org/pdf/2611.23581",
      "authors": [
        "Maxx Richard Rahman",
        "Prakhar Kumar",
        "Wolfgang Maass"
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
      "star_quote": "ExiST outperforms the current state-of-the-art methods and reaches 77.1 mean Dice",
      "signals": [],
      "headline": "多臓器セグメンテーションにおける「臓器の欠如」を考慮した自己学習手法ExiST",
      "what": "半教師あり学習において、教師モデルが小さな臓器を見逃した際に背景として誤学習してしまう問題を解決する「Existence-aware Self-Training (ExiST)」を提案しています。臓器が未検出の場合は「不在」ではなく「未解決」として扱い、セット値ターゲットを用いたマージナルクロスエントロピー損失で学習します。",
      "enables": "AMOSデータセットにおいて5%のラベル付きデータで75.9 mean Dice、Synapseにおいて20%のデータで77.1 mean Diceを達成し、従来手法を上回りました。",
      "why_it_matters": "ラベル付きデータが少ない環境での微小臓器の消失というセルフトレーニング特有の失敗モードを、不確実性の明示的な扱いによって克服しています。",
      "tags": [
        "画像分割",
        "半教師あり学習",
        "医療AI"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23633",
      "title": "Option-GRPO: Hierarchical RL Against AI Slop in Code Generation for Unseen SDKs",
      "url": "https://arxiv.org/abs/2611.23633",
      "pdf": "https://arxiv.org/pdf/2611.23633",
      "authors": [
        "Prashank Kadam"
      ],
      "categories": [
        "cs.SE",
        "cs.CL",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Accepted to Findings of EACL 2027. 27 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Option-GRPO, a hierarchical reinforcement learning framework that adapts a code LLM",
      "signals": [],
      "headline": "階層型RL「Option-GRPO」による未知のSDK向けコード生成の効率化と冗長性排除",
      "what": "学習データに含まれない未知のSDKに対して、ソースコードのみから適応する階層型強化学習フレームワークです。SDKの構造から再利用可能なパターンを「Option」として定義し、機能の正当性とコードのエレガンス（冗長性の排除）を同時に最適化します。",
      "enables": "12種類の未知のSDKにおいて、標準的なGRPOを8.7ポイント上回る61.4%のpass@1を達成し、API呼び出し回数を34.7%削減、コード長を27%短縮しました。",
      "why_it_matters": "機能的には正しいが冗長で非効率な「AI slop」と呼ばれるコード生成の問題に対し、階層的な報酬設計と行動空間の定義によって直接アプローチしています。",
      "tags": [
        "LLM",
        "コード生成",
        "強化学習"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23896",
      "title": "Kernel Ridge Attention: Nonlinear Memory with Selective Forgetting",
      "url": "https://arxiv.org/abs/2611.23896",
      "pdf": "https://arxiv.org/pdf/2611.23896",
      "authors": [
        "Haowei Chen",
        "Yichen Wang",
        "Congfu Xu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "Kernel Ridge Attention (KRA) is a recurrent sequence mixer",
      "signals": [],
      "headline": "非線形メモリと選択的忘却を備えた再帰型シーケンスミキサーKernel Ridge Attention",
      "what": "学習された非線形特徴量と共分散ガイド付きのメモリ更新を組み合わせた新しいアーキテクチャです。再帰的なリッジ回帰を用いて関連性を保存し、Ornstein-Uhlenbeck遷移によってコンテンツ依存の保持と忘却を制御します。",
      "enables": "推論状態のサイズをコンテキスト長に依存せず一定に保ちつつ、Attentionや既存の再帰型モデルを上回る予測精度と連想想起能力を実現しました。",
      "why_it_matters": "Attentionの表現力とRNNの効率性を、カーネル解釈が可能な数理的基盤に基づいて統合しており、スケーラブルな長系列処理の新たな選択肢となります。",
      "tags": [
        "アーキテクチャ",
        "RNN",
        "Attention"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24011",
      "title": "WAM-Policy: World Action Models with On-Policy Distillation for Quadrupedal Loco-Manipulation",
      "url": "https://arxiv.org/abs/2611.24011",
      "pdf": "https://arxiv.org/pdf/2611.24011",
      "authors": [
        "Junlin Long",
        "Xu Deng",
        "Yiran Wang",
        "Yue Yang",
        "Yang Zhao",
        "Zeyu Zhang"
      ],
      "categories": [
        "cs.RO",
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Code: https://github.com/AIGeeksGroup/WAM-Policy, Website: https://aigeeksgroup.github.io/WAM-Policy/",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "yet no existing policy for it follows language instructions.",
      "signals": [],
      "headline": "四足歩行ロボットの言語指示による物体操作を実現するWAM-Policy",
      "what": "アーム型ロボット用のWorld Action Model (WAM) を四足歩行ロボットに転移・適応させる2段階の学習フレームワークです。オンポリシー自己蒸留（OPSD）による高速化と、強化学習およびマルチティーチャー蒸留による性能向上を組み合わせています。",
      "enables": "シミュレーション環境の10タスクにおいて85.0%の成功率を達成し、実機のUnitree Go2 Airへのデプロイにも成功しました。また、推論速度を元のモデルより14倍高速化しました。",
      "why_it_matters": "既存の言語指示対応モデルが少なかった四足歩行ロボットのloco-manipulationにおいて、アーム用モデルの知識を効率的に転移し、かつエッジデプロイ可能な速度を実現しています。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "蒸留"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24576",
      "title": "Late Entry in Looped Language Models",
      "url": "https://arxiv.org/abs/2611.24576",
      "pdf": "https://arxiv.org/pdf/2611.24576",
      "authors": [
        "Ziqi Jin",
        "Jiaxi Li",
        "Weiwen Xu",
        "Aixin Sun"
      ],
      "categories": [
        "cs.CL"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 9 figures",
      "hf_upvotes": 9,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "late entry, where new tokens skip initial passes and enter directly into the final",
      "signals": [],
      "headline": "Looped LMの推論を最大12.5倍高速化するLate EntryとWake Verification",
      "what": "重み共有ブロックを繰り返すLooped LMにおいて、新しいトークンが初期のパスをスキップして後半のパスから直接処理に入る「Late Entry」手法を提案しています。過去のトークンが深層パスを並行して完了させるWake Verificationを組み合わせることで、精度の低下を抑えつつ高速化します。",
      "enables": "Ouro-2.6Bモデルで5.2倍から6.8倍、Huginn-3.5B (T=64) では最大12.5倍の推論高速化を達成しました。",
      "why_it_matters": "モデルの深さを再帰回数で制御するLooped LM特有の柔軟性を活用し、精度の維持と推論レイテンシの劇的な削減を両立させるシステム的なアプローチです。",
      "tags": [
        "LLM",
        "推論加速",
        "Looped Transformer"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24872",
      "title": "MicroAssert: Microarchitecture-Aware Structured Assertion Generation for CPU Verification",
      "url": "https://arxiv.org/abs/2611.24872",
      "pdf": "https://arxiv.org/pdf/2611.24872",
      "authors": [
        "Hongqin Lyu",
        "Yonghao Wang",
        "Zhiteng Chao",
        "Wenxing Li",
        "Tiancheng Wang",
        "Evangeline F. Y. Young"
      ],
      "categories": [
        "cs.AR",
        "cs.SE"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "7 pages, 7 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "MicroAssert achieves 100% syntax correctness and complete branch, statement, and toggle coverage",
      "signals": [],
      "headline": "CPU検証におけるマイクロアーキテクチャを考慮したアサーション生成「MicroAssert」",
      "what": "RTL（ハードウェア記述言語）から機能領域を直接特定し、構造化された契約と検証プリミティブを通じてCPUのアサーションを自動生成するフレームワークです。カバレッジガイド付きのフィードバックを用いて、検証の網羅性を段階的に向上させます。",
      "enables": "5つのRISC-V CPUでの評価において、100%の構文正当性と高い分岐カバレッジを達成し、既存手法より最大3.5倍高いエラー検出率を示しました。",
      "why_it_matters": "従来の自動生成手法が苦手としていた、CPU内部の複雑なマイクロアーキテクチャ挙動や領域間の相互作用を捉えた検証が可能になります。",
      "tags": [
        "ハードウェア検証",
        "CPU設計",
        "形式検証"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23731",
      "title": "RecallFlow: Episodic Memory as the Source Distribution of Generative Robot Policies",
      "url": "https://arxiv.org/abs/2611.23731",
      "pdf": "https://arxiv.org/pdf/2611.23731",
      "authors": [
        "Xuji Zhang",
        "Qilin Zhong",
        "Zichen Zhang",
        "Wei Zhai",
        "Jian Di",
        "Kun Li"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "17 pages, 7 figures, 17 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "RecallFlow achieves a state-of-the-art average success rate of 80.4% on the public MIKASA-Robo memory benchmark",
      "signals": [],
      "headline": "エピソード記憶をソース分布として利用し記憶依存の操作を安定させるRecallFlow",
      "what": "ロボットの視覚運動学習において、ガウスノイズの代わりにエピソード記憶から生成した分布を初期状態として用いるFlow-basedモデルです。「Recall-Relocalization」により記憶内のターゲットと現在の視界を紐付け、適切なアクションの近くからサンプリングを開始します。",
      "enables": "MIKASA-RoboメモリベンチマークでSOTAとなる80.4%の成功率を記録し、実機ロボットのタスクでも既存の最強のベースラインを18.8ポイント上回りました。",
      "why_it_matters": "長い履歴情報を条件として与えるだけの従来手法で発生していた「偽の相関」や「記憶負荷増大による精度の低下」という問題を、生成の起点自体を変えることで解決しています。",
      "tags": [
        "ロボティクス",
        "模倣学習",
        "メモリシステム"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23813",
      "title": "SWIFT: Slow World, Instant Freshness, and Timely Action for Asynchronous Autonomous Driving",
      "url": "https://arxiv.org/abs/2611.23813",
      "pdf": "https://arxiv.org/pdf/2611.23813",
      "authors": [
        "Jiazhe Wang",
        "Tianyi Yang",
        "Ruihang Li",
        "Fan Lu",
        "Xianming Zeng",
        "Jianyun Xu"
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
      "star_quote": "SWIFT achieves the best results among compared world-action methods, establishing a favorable accuracy-latency trade-off.",
      "signals": [],
      "headline": "非同期処理により鮮度とリアルタイム性を両立する自動運転システムSWIFT",
      "what": "ワールドモデルの更新を操作のクリティカルパスから切り離した非同期アーキテクチャです。バックグラウンドでVideo DiTが未来の環境を予測し、フォアグラウンドの軽量なAction DiTが最新の視覚フィードバックと組み合わせて即座に判断を下します。",
      "enables": "NAVSIMベンチマークで94.2 PDMSを達成しつつ、109.9msのフォアグラウンドレイテンシを実現し、精度と速度の優れたトレードオフを確立しました。",
      "why_it_matters": "高負荷な生成モデルを自動運転に組み込む際の課題である「推論中の環境変化」と「制御の遅延」を、予測的なワールドコンテキストと高速なアクション決定の分離によって解決しています。",
      "tags": [
        "自動運転",
        "ワールドモデル",
        "リアルタイム制御"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23822",
      "title": "Mapping the Design Space of Feature Sampling for Optical Flow",
      "url": "https://arxiv.org/abs/2611.23822",
      "pdf": "https://arxiv.org/pdf/2611.23822",
      "authors": [
        "Liping Zhang"
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
      "star_quote": "SAGE reduces the end-point error (EPE) by 24.2% and 16.4% on Sintel clean and final",
      "signals": [],
      "headline": "画素ごとに最適なサンプリング領域を学習するオプティカルフロー推定手法SAGE",
      "what": "オプティカルフロー推定における特徴サンプリングを改善する手法（Sampling with Anisotropic Gaussian Expectation）です。一律のサンプリングではなく、各画素の領域特性に合わせて異方性ガウス期待値を用いたサンプリング範囲と方向を適応的に学習します。",
      "enables": "計算量の増加をわずか1.5%に抑えつつ、Sintelデータセットでのエンドポイントエラー（EPE）を最大24.2%削減し、ゼロショットのドメイン間汎化性能を大幅に向上させました。",
      "why_it_matters": "従来手法の固定的なサンプリングが冗長または不十分であった点を指摘し、サンプリングの形状自体を分析・設計可能な変数として扱えるようにしました。",
      "tags": [
        "コンピュータビジョン",
        "オプティカルフロー",
        "サンプリング"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24104",
      "title": "SCOPE: Single-Cell Omics Prediction from Histology via RNA-Protein Prior Enhancement",
      "url": "https://arxiv.org/abs/2611.24104",
      "pdf": "https://arxiv.org/pdf/2611.24104",
      "authors": [
        "Leyang Tao",
        "Xuan Gong",
        "Luyuan Xie",
        "Arjun Beniwal",
        "Yuqi Tan",
        "Kun-Hsing Yu"
      ],
      "categories": [
        "cs.CV",
        "q-bio.GN"
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
      "star_quote": "SCOPE improves the average RNA Pearson correlation over the strongest baseline by 8.8%.",
      "signals": [],
      "headline": "RNAとタンパク質の相関知識を活用して病理画像から単一細胞情報を予測するSCOPE",
      "what": "H&E染色画像から細胞単位のRNAおよびタンパク質含有量を予測するフレームワークです。RNAとタンパク質の間の生物学的な相関関係を事前知識（RNA-protein prior）として取り込み、限られた教師データでも相互に知識を転移させる設計となっています。",
      "enables": "16臓器にわたるデータセットでRNA予測の相関係数を8.8%改善し、学習に含まれていない未知のマーカーに対しても11.9%の精度向上を達成しました。",
      "why_it_matters": "高品質なシングルセルデータの不足という課題に対し、マルチモーダルな生物学的知見をモデルに組み込むことで、空間オミクス解析の適用範囲を大幅に広げています。",
      "tags": [
        "バイオ情報学",
        "コンピュータビジョン",
        "医療AI"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24206",
      "title": "GALA: Gallery-Level Alignment for Real-Life Vision Decoding from EEG",
      "url": "https://arxiv.org/abs/2611.24206",
      "pdf": "https://arxiv.org/pdf/2611.24206",
      "authors": [
        "Philippe Forest",
        "Giulia Lioi",
        "Mai Pham Quyen",
        "Alix Lamouroux",
        "Javen Shi",
        "Adrien Merlini"
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
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "GALA is the most accurate label-free method in every setting, 6.6 points above the best competing method",
      "signals": [],
      "headline": "ラベルなしデータで新しいユーザーに適応するEEG視覚デコード手法GALA",
      "what": "脳波（EEG）から見ている画像を解読する際に、新しいユーザーに対してラベルなしのデータのみでキャリブレーションを行う手法です。候補となる画像のギャラリーと蓄積されるユーザーのEEG埋め込みを、Sinkhorn-Procrustesアラインメントなどを用いて自動的に整合させます。",
      "enables": "THINGS-EEG-2において、53分間の使用（ラベルなし）で、未知の被験者に対するTop-1精度を28%から67%まで引き上げました。",
      "why_it_matters": "被験者ごとにラベル付きデータを収集する手間を省けるため、実用的なブレイン・コンピュータ・インターフェース（BCI）の普及を大きく後押しします。",
      "tags": [
        "BCI",
        "EEG",
        "ドメイン適応"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24301",
      "title": "LoopCache: Accelerating Long-Context Self-Speculative Decoding for Looped Transformers",
      "url": "https://arxiv.org/abs/2611.24301",
      "pdf": "https://arxiv.org/pdf/2611.24301",
      "authors": [
        "Zizhuo Fu",
        "Haochen Huang",
        "Shengxuan Qiu",
        "Linye Wei",
        "Ziyu Tang",
        "Runsheng Wang"
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
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "LoopCache achieves average 10.25x and 14.56x speedup over WFD and LoopSpec.",
      "signals": [],
      "headline": "Looped Transformerの推論を最大14倍高速化するLoopCache",
      "what": "重みを共有する再帰型Looped Transformerに特化した自己投機的デコード（Self-Speculative Decoding）手法です。確信度に基づく動的なドラフト更新と、KVキャッシュを循環させてメモリトラフィックを削減するCyclic KV Cache戦略を導入しています。",
      "enables": "既存の高速化手法であるWaveFront DecodingやLoopSpecと比較して、平均で10.25倍から14.56倍のスピードアップを達成しました。",
      "why_it_matters": "長いコンテキストを扱う際の最大のボトルネックであるKVキャッシュのメモリ転送量に対し、モデル構造を活かした循環的な管理手法で抜本的な改善をもたらしています。",
      "tags": [
        "LLM",
        "推論加速",
        "Looped Transformer"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24310",
      "title": "Proprioceptive Simultaneous Base and Terrain Elevation Estimation for Legged Robot Locomotion",
      "url": "https://arxiv.org/abs/2611.24310",
      "pdf": "https://arxiv.org/pdf/2611.24310",
      "authors": [
        "Michael Maravgakis",
        "Stylianos Piperakis",
        "Panos Trahanias"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 12 Figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "reducing the absolute trajectory error by 22.1% relative to the best of three state-of-the-art proprioceptive estimators.",
      "signals": [],
      "headline": "地形をランドマークとして扱い垂直ドリフトを抑制する脚式ロボット推定法SBEE",
      "what": "視覚が使えない環境での脚式ロボット向けに、地形自体を永続的なランドマークとして扱う推定フレームワークです。Invariant Kalman Filterによるフローティングベース推定とグリッドベースの標高マップを双方向ループで結合し、足跡からの高さ計測で自己位置の垂直軸を補正します。オープンソースとして公開されています。",
      "enables": "ANYmal-Dでの実験において、従来のSOTAな自己固有感覚推定手法と比較して、絶対軌道誤差を22.1%削減することに成功しました。",
      "why_it_matters": "カメラやLiDARが機能しない環境で特に問題となる垂直方向のドリフトを、地面との接触情報のみを用いて効果的に抑えることができる実用的な手法です。",
      "tags": [
        "ロボティクス",
        "自己位置推定",
        "制御"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24431",
      "title": "Let a Small Model Read First: Faster Prefill for Long Interleaved Image-Text Inputs",
      "url": "https://arxiv.org/abs/2611.24431",
      "pdf": "https://arxiv.org/pdf/2611.24431",
      "authors": [
        "Xiaolin Lin",
        "Kai-Chiang Wu",
        "Bing Li",
        "Grace Li Zhang"
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
      "star_quote": "SkimPrefill speeds up the prefill of Qwen3.5-9B, Gemma-4-12B and Qwen3-VL-32B by 3.7 times, 11.6 time and 8.2 times",
      "signals": [],
      "headline": "小型モデルが先行して重要箇所を特定する長文VLM推論加速法SkimPrefill",
      "what": "長い画像・テキスト混在入力に対し、まず超軽量なハイブリッドモデル（Qwen3.5-0.8Bなど）が低解像度の画像を用いて入力をスキャンする手法です。特定のAttentionヘッドが質問に関係する重要な画像や段落を特定し、その部分だけをターゲットの大型モデルに渡します。",
      "enables": "128Kトークンの入力において、精度の低下を抑えつつ、Qwen3.5-9BやGemma-4-12BのPrefill速度を3.7倍から11.6倍に高速化しました。",
      "why_it_matters": "VLMの長文入力におけるPrefillの待ち時間を、学習不要なセレクターと小型モデルの効率的な「拾い読み」によって大幅に短縮しています。",
      "tags": [
        "VLM",
        "推論加速",
        "LLM"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24708",
      "title": "F$^3$: What Makes Good Experience in World-Action Models?",
      "url": "https://arxiv.org/abs/2611.24708",
      "pdf": "https://arxiv.org/pdf/2611.24708",
      "authors": [
        "Zihe Huang",
        "Sirui Zhou",
        "Haozhi Han",
        "Ruge Zhang",
        "Teng Ma",
        "Tao Ma"
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
        "sota"
      ],
      "star_quote": "over native Cosmos 3 Nano, it raises success by 12.0 pp and 10.8 pp",
      "signals": [],
      "headline": "自身の経験を「Form・Fit・Fusion」で活用し性能を高めるWorld-Action Model",
      "what": "World-Action Model (WAM) が自身の過去の経験（成功・失敗の両方）を効果的に利用するための学習・推論フレームワークです。経験を要約された操作記録に変換し（Form）、その有用性を予測し（Fit）、アクションの事前知識として統合（Fusion）します。",
      "enables": "MolmoSpacesなどのベンチマークで、ネイティブモデルに対して成功率を約12ポイント向上させ、成功までのステップ数を約12%削減しました。",
      "why_it_matters": "単に過去のロールアウトを文脈として与えるだけでは逆に性能が下がることもあるという問題に対し、経験をどのように抽出し、いつ、どこで使うべきかを明示した手法です。",
      "tags": [
        "ロボティクス",
        "マルチモーダル学習",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.24805",
      "title": "Edge-Efficient Joint RAW Image Compression and Restoration for Smart Wearable Devices",
      "url": "https://arxiv.org/abs/2611.24805",
      "pdf": "https://arxiv.org/pdf/2611.24805",
      "authors": [
        "Yunong Sun",
        "Sicheng Chen",
        "Fei Xia"
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
      "star_quote": "On SIDD, our method improves PSNR by more than 1.5 dB over cascaded baselines",
      "signals": [],
      "headline": "ウェアラブルデバイス向けの軽量RAW画像圧縮・復元フレームワークCRAW",
      "what": "スマートグラス等のリソース制約が厳しいデバイス向けに、RAW画像の圧縮と復元を共同最適化する非対称フレームワークです。デバイス側の軽量なエンコーダでノイズ混じりのRAWデータを圧縮し、バックエンドの強力なデコーダでノイズ除去とデモザイクを同時に行います。",
      "enables": "SIDDデータセットにおいて、従来の圧縮・復元を個別に行う手法よりも1.5dB高いPSNRを達成し、NPU上での推論を既存の復元モデルより27.6倍高速化しました。",
      "why_it_matters": "エッジでの計算負荷と通信コストのトレードオフに対し、センサーノイズをビットレートとして消費しない「復元を前提とした圧縮」というアプローチで解決しています。",
      "tags": [
        "画像処理",
        "エッジコンピューティング",
        "データ圧縮"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23352",
      "title": "Streaming Generative Video Compression with Embedding Alignment and In-Context Propagation",
      "url": "https://arxiv.org/abs/2611.23352",
      "pdf": "https://arxiv.org/pdf/2611.23352",
      "authors": [
        "Zhitao Wang",
        "Hengyu Man",
        "Han Liu",
        "Wenrui Li",
        "Debin Zhao",
        "Xiaopeng Fan"
      ],
      "categories": [
        "eess.IV",
        "cs.CV",
        "cs.MM"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "15 pages, 18 figures, 5 tables, including supplementary material",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "SGVC achieves competitive rate-perception performance, with average BD-rate savings of 71.97% over S$^2$VC",
      "signals": [],
      "headline": "Diffusion Transformerを用いた超低ビットレート動画圧縮手法SGVC",
      "what": "事前学習済みのVideo DiTを因果的なピクセル空間のリファイナーとして適応させる動画圧縮フレームワークです。Embedding Alignmentによる特徴量の整合と、過去の生成コンテキストを再利用するIn-Context Propagationにより、遅延を抑えた逐次的な復号を実現します。",
      "enables": "従来の生成型動画圧縮手法であるS2VCと比較して、DISTS指標に基づき平均71.97%のBD-rate削減を達成しました。",
      "why_it_matters": "計算コストの高いVAEデコーダーをバイパスし、DiTの強力な生成能力をストリーミング形式で活用することで、知覚品質の高い超低ビットレート圧縮を実用化に近づけています。",
      "tags": [
        "動画圧縮",
        "生成AI",
        "Diffusion Model"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23728",
      "title": "AdaS-ViT: Test-Time Adaptive Routing for Spiking Vision Transformers with Ultra-High Energy Efficiency",
      "url": "https://arxiv.org/abs/2611.23728",
      "pdf": "https://arxiv.org/pdf/2611.23728",
      "authors": [
        "Zecheng Hao",
        "Zihan Huang",
        "Shenghao Xie",
        "Jiyuan Zhang",
        "Zhaofei Yu",
        "Tiejun Huang"
      ],
      "categories": [
        "cs.NE",
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
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "attains an accuracy-per-energy ratio of 32$\\times$ to 72$\\times$, operating in an economical inference regime",
      "signals": [],
      "headline": "テストタイムの適応的ルーティングで超低消費電力を実現したAdaS-ViT",
      "what": "スパイクニューラルネットワーク（SNN）を用いたVision Transformerにおいて、アテンションスコアに基づきトークンごとに発火パターンを適応的に切り替える手法（AdaE-IF）を提案しています。重要な領域には精細なパターン、それ以外には省電力なパターンを割り当てます。",
      "enables": "ImageNet-1kにおいて、1画像あたりわずか1.02〜2.45mJのエネルギー消費で高い精度を維持し、精度対電力比を既存の32倍〜72倍に向上させました。",
      "why_it_matters": "計算の冗長性を排除する適応的ルーティングをSNNに導入し、エッジAI等で重要となるエネルギー効率の限界を大幅に押し広げています。",
      "tags": [
        "SNN",
        "Vision Transformer",
        "低消費電力"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.21880",
      "title": "Cancellation-Free Constrained SquareCB for Safe Controller Selection",
      "url": "https://arxiv.org/abs/2611.21880",
      "pdf": "https://arxiv.org/pdf/2611.21880",
      "authors": [
        "Kartik Pandit",
        "Sourav Ganguly",
        "Arnob Ghosh"
      ],
      "categories": [
        "cs.LG",
        "cs.AI",
        "stat.ML"
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
      "star_quote": "the violation is 6 to 9 times lower than that of primal-dual and virtual-queue baselines",
      "signals": [],
      "headline": "制約付きコンテキスチュアルバンディットにおける予算超過を抑制する安全なコントローラ選択手法",
      "what": "予算制約付きのコンテキスチュアルバンディットにおいて、SquareCBアルゴリズムに推定コストに基づく整流化された重みを導入する手法です。既存のラグランジュ乗数法とは異なり、各ラウンドで推定コストが予算を超えた場合のみ、予算内に戻すための最小限の修正を行います。",
      "enables": "ドローンやビル管理の制御において、既存のベースラインと比較して違反を6〜9倍低減しつつ、同等以上の累積報酬（regret）を維持できます。",
      "why_it_matters": "従来のラグランジュ乗数法では累積的な違反が許容される傾向にありましたが、本手法は各ステップでの安全性が求められる実システムの制御において、より高い安全性を提供します。",
      "tags": [
        "強化学習",
        "オンライン学習",
        "制御理論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.21917",
      "title": "Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention",
      "url": "https://arxiv.org/abs/2611.21917",
      "pdf": "https://arxiv.org/pdf/2611.21917",
      "authors": [
        "Wenhe Zhang",
        "Boxing Chen"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 8 figures, 20 tables. Code: https://github.com/zhangwenhe1007/blind-attention-heads",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "lifts multi-key retrieval accuracy from 54.1 to 97.5%, level with full attention",
      "signals": [],
      "headline": "Sparse Attentionにおける特定の「盲目なヘッド」の特定と修正による長文読解能力の回復",
      "what": "Sparse Attentionモデルが長文コンテキストの検索精度を落とす原因を、情報の希釈を引き起こす特定の「盲目なヘッド（blind heads）」にあると突き止めた診断・修復手法です。これらのヘッドを特定し、そこだけFull Attentionに戻す、あるいは4-bitのスカラーを用いることで精度を改善します。",
      "enables": "MiniCPM4.1-8Bにおいて、マルチキー検索精度を54.1%からFull Attentionと同等の97.5%まで引き上げ、推論速度のメリットを維持したまま精度を回復させました。",
      "why_it_matters": "すべてのトークンに注意を向けるのではなく、ボトルネックとなっている極少数のヘッド（KVヘッドの数%）に焦点を当てるだけで、長文処理性能が劇的に改善することを示しています。",
      "tags": [
        "LLM",
        "効率化",
        "自然言語処理"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22244",
      "title": "PhyVGGT: Feed-Forward Articulated Object Reconstruction from Monocular Videos",
      "url": "https://arxiv.org/abs/2611.22244",
      "pdf": "https://arxiv.org/pdf/2611.22244",
      "authors": [
        "Qi Shao",
        "Zhihao Cao",
        "Shuhao Zhai",
        "Anh Nguyen",
        "Hong Liang",
        "Baoru Huang"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "10 pages, 5 figures, 7 tables. Project page: https://phyvggt.github.io",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "achieves state-of-the-art monocular performance across five benchmarks",
      "signals": [],
      "headline": "単眼ビデオからの可動部位・関節パラメータを含む3D多関節オブジェクトの高速再構成",
      "what": "単一の動画像から、3Dの可動パーツ、関節パラメータ、未学習のポーズをワンパスで推定するPhyVGGTフレームワークです。3D基盤モデルを活用しつつ、静止した土台（ベース）に対する相対的な幾何学的特徴と運動の不確実性（Bingham prior）をデコードすることで、関節軸とピボットを閉形式で算出します。",
      "enables": "48フレームのビデオを6.8秒で処理でき、数時間を要する従来のシーン最適化手法を上回る精度と圧倒的な速度を両立しました。",
      "why_it_matters": "外部の奥行き情報やカメラポーズを必要とせず、単眼カメラのみでロボット操作やデジタルツインに必要な多関節モデルを効率的に生成できます。",
      "tags": [
        "3D再構成",
        "コンピュータビジョン",
        "ロボティクス"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23022",
      "title": "Dissecting the GPU Load/Store Unit and Exposing Its Security Risks",
      "url": "https://arxiv.org/abs/2611.23022",
      "pdf": "https://arxiv.org/pdf/2611.23022",
      "authors": [
        "Wenbo Han",
        "Pierre Talbot"
      ],
      "categories": [
        "cs.AR",
        "cs.CR"
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
      "star_quote": "we recover a full AES-128 key under the threat model of prior GPU AES timing attacks.",
      "signals": [],
      "headline": "GPUのLoad/Storeユニットの構造解明と、それを通じた新たなセキュリティ脆弱性の指摘",
      "what": "NVIDIA GPUのLoad/Store Unit（LSU）の内部挙動をリバースエンジニアリングし、メモリアクセスの競合がサイク単位でどのように発生するかを詳細に分析した研究です。アドレス依存のバンク競合やタグ検索が、情報の漏洩やプロセスの飢餓状態を引き起こすことを示しました。",
      "enables": "特定のワープを長時間待機させることで、他のプロセスのcuBLAS行列演算をA100上で最大750倍遅延させたり、暗号鍵（AES-128）を特定したりすることが可能であることを実証しました。",
      "why_it_matters": "GPUのアーキテクチャレベルでの脆弱性を明らかにし、マルチプロセス共有環境におけるセキュリティ対策の必要性を警鐘しています。",
      "tags": [
        "ハードウェア",
        "セキュリティ",
        "GPU"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23102",
      "title": "CADENCE: Learning Acyclic Gaits for Model-Based Quadruped Locomotion",
      "url": "https://arxiv.org/abs/2611.23102",
      "pdf": "https://arxiv.org/pdf/2611.23102",
      "authors": [
        "Owen Sullivan",
        "Sourav Selvaraj",
        "Mahdi Agheli"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "18 pages, 8 figures, 2 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "cap"
      ],
      "star_quote": "The policy we analyzed developed an acyclic gait, with no fixed period or stepping order",
      "signals": [],
      "headline": "歩行スケジュールに縛られない、非周期的な歩容を学習する4足歩行ロボット制御手法",
      "what": "従来の4足歩行コントローラのような固定された周期（トロットなど）を持たず、状況に応じて最適な脚を最適なタイミングで踏み出すCADENCEを提案しています。強化学習によるステッププランナーと凸モデル予測制御（MPC）を組み合わせ、非周期的な歩容を動的に生成します。",
      "enables": "穴の空いた足場（空隙率49%）などの困難な地形で、従来の周期的なコントローラ（43.0%）を大きく上回る72.9%の成功率を達成しました。",
      "why_it_matters": "環境の制約に合わせて柔軟に歩行パターンを変化させることが可能になり、不整地におけるロボットの走破能力を向上させます。",
      "tags": [
        "ロボティクス",
        "強化学習",
        "モデル予測制御"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.21791",
      "title": "Regularized Score Centering",
      "url": "https://arxiv.org/abs/2611.21791",
      "pdf": "https://arxiv.org/pdf/2611.21791",
      "authors": [
        "Hao Bai",
        "Chenlu Ye",
        "Xuanchang Zhang",
        "Aviral Kumar",
        "Tong Zhang"
      ],
      "categories": [
        "cs.LG"
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
      "star_quote": "it achieves top performance across all six agentic tasks, improving by 14.3% on AppWorld",
      "signals": [],
      "headline": "非同期強化学習の安定性を向上させる正規化スコアセンタリング手法（RSC）",
      "what": "オフポリシー強化学習における報酬ベースラインの影響を排除するScore Centering（SC）に、行動ポリシーとの乖離を抑える逆KLダイバージェンス制約を加えた手法です。学習データの古さや推論時のミスマッチによる不安定性を緩和します。",
      "enables": "AppWorldなどのエージェント系タスクにおいて、既存の最強のベースラインと比較して最大14.3%の向上、BabyAIでは9.9倍のスコアを達成しました。",
      "why_it_matters": "LLMを用いたエージェント学習において不可欠な、非同期・オフポリシー環境での学習効率と安定性を同時に改善する重要な知見を提供します。",
      "tags": [
        "強化学習",
        "LLM",
        "AIエージェント"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22415",
      "title": "SpatialMind: Adaptive Multi-Level Geometric Fusion for Spatial Reasoning in Multimodal Large Language Models",
      "url": "https://arxiv.org/abs/2611.22415",
      "pdf": "https://arxiv.org/pdf/2611.22415",
      "authors": [
        "Shibin Zhao",
        "Hao Tan",
        "Fan Yang",
        "Haixin Wang",
        "Feilong Chen",
        "Yidong Ma"
      ],
      "categories": [
        "cs.CV",
        "cs.CG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Includes supplementary material. Code available at https://github.com/zhaosb-star/SpatialMind",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "attaining a state-of-the-art score of 72.3 on VSI-Bench",
      "signals": [],
      "headline": "タスクに応じた幾何学的粒度の適応的統合によるMLLMの3D空間推論能力の向上",
      "what": "マルチモーダルLLMにおいて、距離推定や経路計画といった異なるレベルのタスクに必要な幾何学情報の細かさを動的に調整するSpatialMindフレームワークです。指示、視覚、幾何学情報の各条件に基づいてゲートが作動し、最適な深さの幾何学特徴をLLMに融合します。",
      "enables": "3D空間推論ベンチマークのVSI-Benchにおいて、SOTAとなるスコア72.3を記録しました。",
      "why_it_matters": "一律に幾何学情報を与えるのではなく、タスクの要求に合わせて「粒度を使い分ける」という人間の認知に近いアプローチで、LLMの3D理解を深めました。",
      "tags": [
        "マルチモーダルLLM",
        "3D理解",
        "空間推論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22508",
      "title": "Reliability-Driven Feature Correction for Hyperspectral and LiDAR Classification",
      "url": "https://arxiv.org/abs/2611.22508",
      "pdf": "https://arxiv.org/pdf/2611.22508",
      "authors": [
        "Lianming Zhang",
        "Xiaolu Wang",
        "Qiya Song",
        "Jinyang Liu",
        "Renwei Dian",
        "Xudong Kang"
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
        "new"
      ],
      "star_quote": "we propose ReDF, a reliability-driven framework that quantifies the reliability of each modality's features at each spatial location",
      "signals": [],
      "headline": "信頼度駆動型の特徴量補正による、ハイパースペクトルとLiDARデータの高精度分類",
      "what": "異なるセンサーから得られる情報の信頼性を各空間地点で定量化し、それをガイドとして情報の補正と統合を行うReDFフレームワークです。一方のセンサー情報が曖昧な場合に、他方の確実な情報を用いて補正する双方向のメカニズムを備えています。",
      "enables": "土地利用分類において、従来のハイパースペクトル・LiDAR統合手法を超える平均正解率とKappa係数を達成しました。",
      "why_it_matters": "異種センサーのデータの単純な結合ではなく、データの「不確かさ」を明示的に扱うことで、複雑な地表条件でも安定した認識を可能にします。",
      "tags": [
        "リモートセンシング",
        "画像分類",
        "マルチモーダル学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22549",
      "title": "Physically Admissible Generative Flow Matching for Sparse Flow Reconstruction",
      "url": "https://arxiv.org/abs/2611.22549",
      "pdf": "https://arxiv.org/pdf/2611.22549",
      "authors": [
        "Yuhao Wang",
        "Yuanxi Peng"
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
      "star_quote": "We introduce Feasible Subspace Consistency (FSC), a framework that preserves physical admissibility as an invariant of continuous generative dynamics",
      "signals": [],
      "headline": "物理的保存則を常に満たしながら流体場を再構成する、FSCを用いたFlow Matching",
      "what": "疎な観測データから流体の全速度場を再構成する際、生成過程のあらゆるステップで物理的制約（非圧縮性、境界条件）を数学的に保証するFeasible Subspace Consistency (FSC) フレームワークです。潜在空間上の輸送問題を解くことで、出力の物理的正当性を保ちます。",
      "enables": "疎なデータからの再構成において、グローバル誤差を最大50%削減しつつ、物理的にあり得ない歪みのない、信頼性の高い不確実性推定を可能にしました。",
      "why_it_matters": "深層学習による流体予測において、事後的な修正ではなく「物理的に妥当な解しか生成しない」という強固な制約を組み込んだ点が画期的です。",
      "tags": [
        "流体力学",
        "生成モデル",
        "科学技術計算"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22650",
      "title": "Must You See Fakes to Catch Fakes? Language Says What to Look For, Real Images What to Ignore",
      "url": "https://arxiv.org/abs/2611.22650",
      "pdf": "https://arxiv.org/pdf/2611.22650",
      "authors": [
        "Tianchi Xu",
        "Yuxuan Zhou",
        "Yuheng Zhang",
        "Yanan Guan",
        "Tao Dai",
        "Shu-Tao Xia"
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
      "star_quote": "reaches a mean AUC of 98.2% with MoE-ViE, 4.2 points above the best existing detector",
      "signals": [],
      "headline": "生成画像を使わずにAI生成画像を検知する、テキスト誘導型検知手法SaySee",
      "what": "特定のジェネレータで生成された画像で訓練するのではなく、テキスト記述から「生成らしさ」の方向を定義し、実画像でフォーマットの偏りを補正する、訓練不要（training-free）の検知手法です。ビジョン基盤モデルが既に持つ「生成画像」の概念をテキストで引き出します。",
      "enables": "24種類の評価データセットにおいて、最新のジェネレータに対しても平均AUC 98.2%という、既存手法を4.2ポイント上回る高い汎用性を実現しました。",
      "why_it_matters": "特定のモデルに対する過学習を防ぎ、未知のジェネレータや画像形式に対しても頑健な検知が可能になります。",
      "tags": [
        "フェイク検知",
        "コンピュータビジョン",
        "ゼロショット学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22728",
      "title": "LoopZip: Visual Token Compression for Efficient Looped Vision-Language Models",
      "url": "https://arxiv.org/abs/2611.22728",
      "pdf": "https://arxiv.org/pdf/2611.22728",
      "authors": [
        "Weizhong Huang",
        "Zhicheng Liu",
        "Yan Zhang",
        "Fei Chao",
        "Xiawu Zheng",
        "Liujuan Cao"
      ],
      "categories": [
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "11 pages, 10 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "new"
      ],
      "star_quote": "We propose LoopZip, a training-free visual token compression algorithm addressing both issues.",
      "signals": [],
      "headline": "反復計算を行う視覚言語モデル向けの効率的なトークン圧縮アルゴリズムLoopZip",
      "what": "計算を繰り返すLooped VLMにおいて、計算コストとメモリ使用量を削減するための訓練不要なトークン圧縮手法です。最初の数回の呼び出しでの注目度（Attention）を平均化して重要なトークンを選別し、出力の偏差を最小化する補正を行います。",
      "enables": "性能を維持したままトークンの50%を削減し、GPUメモリ消費を約58%削減、エンドツーエンドの推論速度を2.01〜2.47倍に高速化しました。",
      "why_it_matters": "モデルの層を共通化してパラメータを減らすLoopedモデルの利点を、計算効率の面でもさらに最大化する手法です。",
      "tags": [
        "モデル圧縮",
        "マルチモーダルLLM",
        "効率化推論"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.22782",
      "title": "PANO: Parallel Latent Space Neural Operator for Solving PDEs",
      "url": "https://arxiv.org/abs/2611.22782",
      "pdf": "https://arxiv.org/pdf/2611.22782",
      "authors": [
        "Zijiang Yang",
        "Xiaomeng Wu",
        "Chen Kuang",
        "Dongmei Fu"
      ],
      "categories": [
        "cs.LG",
        "cs.AI"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "39 pages, 24 figures, 23 tables",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "demonstrate that PANO achieves state-of-the-art performance",
      "signals": [],
      "headline": "並列潜在空間を用いたニューラルオペレータによる大規模PDE問題の高精度解法",
      "what": "偏微分方程式（PDE）を解く際に、複数の独立した「並列潜在空間」で物理的相互作用を学習し、それらを統合して結果を予測するPANO手法です。単一の圧縮パターンに依存せず、多様な物理情報を保持することを可能にします。",
      "enables": "航空機の揚力係数予測で21.4%以上、成形加工の歪み予測で28.3%以上のエラー削減を達成し、多くのベンチマークでSOTAを記録しました。",
      "why_it_matters": "複雑な幾何形状や大規模な観測データを持つ物理現象に対して、Transformerベースのモデルをより効果的に適用できるようにしました。",
      "tags": [
        "PDE",
        "ニューラルオペレータ",
        "ディープラーニング"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.23001",
      "title": "NVIDIA Kumo Tabular: Pushing the Accuracy-Efficiency Frontier for Tabular Prediction",
      "url": "https://arxiv.org/abs/2611.23001",
      "pdf": "https://arxiv.org/pdf/2611.23001",
      "authors": [
        "Jingang Qu",
        "Valter Hudovernik",
        "Martin Jurkovi\\v{c}",
        "Cedric Lorenz",
        "David Holzm\\\"uller",
        "Federico Lopez"
      ],
      "categories": [
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "25 pages, 13 figures",
      "hf_upvotes": null,
      "star_votes": 1,
      "star_level": 1,
      "star_codes": [
        "sota"
      ],
      "star_quote": "Kumo Tabular-L ranks first on eight benchmarks: TabArena, TALENT, BeyondArena",
      "signals": [],
      "headline": "テーブルデータ専用の基盤モデルKumo Tabularによる超高速・高精度な予測",
      "what": "分類・回帰タスク向けの、追加学習なしで即座に使用できるテーブルデータ用基盤モデル（最大2.1億パラメータ）です。人工的に生成されたテーブルデータで事前学習され、行の埋め込みとコンテキスト内学習（In-Context Learning）を用いて予測を行います。",
      "enables": "8つの主要なベンチマークで1位を獲得し、既存の有力モデル（TabPFNなど）と比較して1.7倍から36倍高速な推論を実現しました。",
      "why_it_matters": "10万列を超えるような大規模なテーブルや、テキスト・画像が混在する複雑なデータにも対応でき、実務におけるテーブルデータ解析を効率化します。",
      "tags": [
        "テーブルデータ",
        "基盤モデル",
        "機械学習"
      ],
      "fetched_at": "2026-11-19T11:58:57.640797+09:00"
    },
    {
      "id": "2611.26444",
      "title": "Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation",
      "url": "https://arxiv.org/abs/2611.26444",
      "pdf": "https://arxiv.org/pdf/2611.26444",
      "authors": [
        "Yuzhi Huang",
        "Jie Wu",
        "Fanding Huang",
        "Junchao Lin",
        "Weichen Zhang",
        "Ziyi Xiong"
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
      "hf_upvotes": 45,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲45"
      ],
      "headline": "思考・実行・それらの構成を分離して評価するロボット操作ベンチマークMind2Act World",
      "what": "ロボットの複雑なタスクにおける失敗が、「過去の履歴に基づく推論（Mind）」、「正確な実行（Act）」、あるいは「環境フィードバックを通じた両者の統合（Mind2Act）」のどこに起因するかを診断するベンチマークです。30種類のタスクと180の設定で構成されています。",
      "enables": "最新のVLAやWAMを評価した結果、個別の要素（MindやAct）で高い成功率を持つモデルでも、それらを統合するMind2Actタスクでは成功率が大幅に低下（12.0%など）することを浮き彫りにしました。これにより、現在のモデルが環境変化に応じた柔軟な意思決定の統合に課題があることを診断できます。",
      "why_it_matters": "単一のタスク成功率だけでなく、失敗の根本原因を特定するための具体的な指標を提供することで、具現化AI（Embodied AI）の開発指針を明確にします。",
      "tags": [
        "ロボティクス",
        "ベンチマーク",
        "VLA"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26590",
      "title": "Probing the \"Conscious\" Mind: Selective Access and Global Workspace in Vision-Language Models",
      "url": "https://arxiv.org/abs/2611.26590",
      "pdf": "https://arxiv.org/pdf/2611.26590",
      "authors": [
        "Jiahao Huang",
        "Jun Wang"
      ],
      "categories": [
        "cs.AI",
        "cs.CV",
        "cs.LG"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 40,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲40"
      ],
      "headline": "MC-Lensを用いてVision-Languageモデル内の概念アクセシビリティと選択的アクセスを解析",
      "what": "視覚エンコーダと言語デコーダの中間状態を共通のセマンティック空間に投影する「マルチモーダル・ヤコビアン・レンズ（MC-Lens）」を用いた解析手法です。モデル内部で視覚・言語情報がどのように概念として表現され、タスクに応じて選択的にアクセスされるかを調査します。",
      "enables": "異なるモダル間の概念のアライメント（一致度）を追跡する指標を開発し、トレーニングの過程でアクセシビリティ（読み取り可能性）の後に選択的アクセス能力が発達することを発見しました。また、内部概念への介入が下流の推論に直接影響を与えることを示しました。",
      "why_it_matters": "VLMの内部で視覚情報と言語情報がどのように統合・選択されているかを可視化・操作可能にし、モデルの透明性向上とクロスモーダルな改善に寄与します。",
      "tags": [
        "VLM",
        "インタープリタビリティ",
        "マルチモーダル"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26409",
      "title": "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding",
      "url": "https://arxiv.org/abs/2611.26409",
      "pdf": "https://arxiv.org/pdf/2611.26409",
      "authors": [
        "Changli Tang",
        "Jie Yang",
        "Tianyi Wang",
        "Lei Li",
        "Daoze Zhang",
        "Zijie Xin"
      ],
      "categories": [
        "cs.CV",
        "eess.AS"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "",
      "hf_upvotes": 40,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲40"
      ],
      "headline": "思考モードを搭載したオープンソースの全方位動画理解モデルWeMM-Video",
      "what": "画像、音声、動画、テキストを統合的に処理する中英バイリンガルの大規模モデルファミリーです。高速な応答を行う通常モードに加え、ステップバイステップで推論を行う「Thinking Mode」をサポートしており、約1.2兆トークンのデータで学習されています。",
      "enables": "35Bモデルにおいて、Qwen3.5-Omni-Flashなどの商用モデルを上回るオープンソースのSOTAを達成しました。120以上のベンチマークで高い性能を示し、特に音声を含む動画の推論において強力な能力を発揮します。",
      "why_it_matters": "オープンソースでありながら、商用モデルに匹敵する「思考プロセス」を伴う動画理解を実現し、マルチモーダル基盤モデルの可能性を広げました。",
      "tags": [
        "マルチモーダル",
        "動画理解",
        "オープンソース"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26595",
      "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
      "url": "https://arxiv.org/abs/2611.26595",
      "pdf": "https://arxiv.org/pdf/2611.26595",
      "authors": [
        "Yiyan Ji",
        "Qixun Wang",
        "Yang Shi",
        "Zhuoran Zhang",
        "Yifan Xu",
        "Tengfei Liu"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "47 pages",
      "hf_upvotes": 32,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲32"
      ],
      "headline": "3Dプロキシを用いて動画生成の一貫性と物理的妥当性を向上させるCoda-DaVinci",
      "what": "エージェントが3Dプロキシ（中間的な幾何構造）を作成し、それをガイドとして動画を生成するCode2Videoフレームワークを拡張した手法です。エンティティごとにモデリングの粒度を最適化し、物理シミュレーションとプロキシに基づいたプロンプト生成を組み合わせます。",
      "enables": "直接生成する手法と比較して、シーンの一貫性（R2Mベンチマーク）や指示追従性を大幅に向上させ、より物理的に妥当な挙動の動画を生成できます。長尺動画においてもイベント構造の維持が可能です。",
      "why_it_matters": "「動画を直接描く」のではなく「構造を作ってから描く」アプローチにより、AIによる動画生成における構造的な制御不能問題を解決する一石を投じています。",
      "tags": [
        "動画生成",
        "エージェント",
        "物理シミュレーション"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.26629",
      "title": "Posterior Matching Distillation",
      "url": "https://arxiv.org/abs/2611.26629",
      "pdf": "https://arxiv.org/pdf/2611.26629",
      "authors": [
        "Hidir Yesiltepe",
        "Julius Berner",
        "Arash Vahdat",
        "Pinar Yanardag"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": false,
      "talk": false,
      "workshop": false,
      "comment": "Project Page: https://pmd-distillation.github.io/",
      "hf_upvotes": 31,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "HF ▲31"
      ],
      "headline": "分布の多様性を維持しつつ少数ステップで画像を生成するPosterior Matching Distillation (PMD)",
      "what": "拡散モデルの蒸留において、生徒モデルが教師モデルの事後分布全体を学習するように、指数重み付けされた平均を一致させる新しい蒸留手法です。従来のKLダイバージェンスに基づく手法が陥りやすかった「多様性の欠如」を回避します。",
      "enables": "SDXLやFLUX.2において、わずか4ステップのサンプリングで最高水準のFID（画像の質）を達成しつつ、プロンプトへの忠実度と知覚的品質を両立させます。学習後の追加訓練なしで、任意のステップ数でのサンプリングが可能です。",
      "why_it_matters": "高速化（蒸留）と生成の多様性・品質というトレードオフを、事後分布の数学的な整合性を保つことで解消した点に技術的な優位性があります。",
      "tags": [
        "画像生成",
        "拡散モデル",
        "モデル蒸留"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25297",
      "title": "ScaleDiag: Diagnosing the Limits of Test-Time Scaling in GUI Grounding",
      "url": "https://arxiv.org/abs/2611.25297",
      "pdf": "https://arxiv.org/pdf/2611.25297",
      "authors": [
        "Chen Liu",
        "Zhen Fang",
        "Xin Yu",
        "Dadong Wang",
        "Ling Chen"
      ],
      "categories": [
        "cs.CV"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Accepted by ICDM@D2AI 2026 Best Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "GUI操作タスクにおけるテストタイムスケーリングの効果と限界を診断するScaleDiag",
      "what": "GUIの要素特定（Grounding）タスクにおいて、画像解像度、指示文の詳しさ、サンプリング数（Scaling）が性能に与える影響を、ターゲットのサイズや周囲の文脈を独立して変化させることで詳細に分析するフレームワークです。",
      "enables": "視覚的なズームは対象が画面の0.32%を占めれば十分でありそれ以上は逆効果であること、指示文は「色・形」よりも「外観・空間」情報が90%以上の寄与を占めること、多数サンプリングしても正解の「選択」が困難であることを明らかにしました。",
      "why_it_matters": "「計算量や情報を増やせば性能が上がり続ける」という想定がGUIタスクの特定領域では当てはまらないことを示し、実用的な最適化の指針を提供しました。",
      "tags": [
        "GUIオートメーション",
        "VLM",
        "評価・診断"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25555",
      "title": "UniReFP: Robust Unified Fingerprinting for Vision Models against Cross-Task Repurposing Attacks",
      "url": "https://arxiv.org/abs/2611.25555",
      "pdf": "https://arxiv.org/pdf/2611.25555",
      "authors": [
        "Ziye Geng",
        "Guang Yang",
        "Yihang Chen",
        "Lingfeng Yao",
        "Xing Shi",
        "Miao Pan"
      ],
      "categories": [
        "cs.CV",
        "cs.CR"
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
      "headline": "タスクの転用攻撃に耐性を持つ、ビジョンモデル向けの統一フィンガープリント手法UniReFP",
      "what": "保護対象のモデルが別のタスクに再利用（Repurpose）されても所有権を証明できる、新しいフィンガープリントフレームワークです。特定のタスク出力ではなく、共有されたクラスレベルのセマンティック空間で所有権の証拠を埋め込み、検証します。",
      "enables": "出力フォーマットが異なる別タスクへモデルが転用された場合でも、高い所有権検証精度を維持します。従来のフィンガープリント手法が無効化されるような複合的なモデル改変攻撃に対しても堅牢です。",
      "why_it_matters": "モデルの知的財産保護において、単純なコピーだけでなく「モデルの一部を流用して別の目的で使う」という現実的で強力な攻撃への対策を可能にしました。",
      "tags": [
        "モデルセキュリティ",
        "知的財産保護",
        "コンピュータビジョン"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.25934",
      "title": "AGSR: Aperture-Guided Super-Resolution for Gaussian Splatting",
      "url": "https://arxiv.org/abs/2611.25934",
      "pdf": "https://arxiv.org/pdf/2611.25934",
      "authors": [
        "Ayman Alkhateeb",
        "Hadi Amirpour",
        "Christian Timmerer"
      ],
      "categories": [
        "cs.CV",
        "cs.GR"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "Accepted at the 2026 IEEE International Workshop on Multimedia Signal Processing (MMSP 2026). Recipient of the Best Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "3D Gaussian Splattingの超解像をリアルタイムで実現するAGSR",
      "what": "3D Gaussian Splatting (3DGS)の描画時に、ガウス分布の共分散を収縮させることで詳細な構造を復元し、マルチアパーチャ（多開口）レンダリングを統合する軽量な超解像フレームワークです。事前学習済みの3DGSモデルにプラグインとして適用可能です。",
      "enables": "Mip-NeRF 360などのデータセットで既存の超解像手法を上回る画質を実現し、特に元のモデルの品質が低い場合に高い改善効果を示します。最大139kという非常に少ないパラメータ数でリアルタイム性能を維持します。",
      "why_it_matters": "3DGSの弱点であるボケ（レンダリング時の帯域制限）を数学的な洞察に基づき解消し、高品質な新規視点合成を低コストで実現しました。",
      "tags": [
        "3DGS",
        "超解像",
        "レンダリング"
      ],
      "fetched_at": "2026-11-21T12:01:11.568490+09:00"
    },
    {
      "id": "2611.23531",
      "title": "RESCUE Jumper: A Centimeter-Scale Rolling and Jumping Robot for Search and Rescue",
      "url": "https://arxiv.org/abs/2611.23531",
      "pdf": "https://arxiv.org/pdf/2611.23531",
      "authors": [
        "Kiran Marques",
        "Shashwat Singh",
        "Ben D'Ambrosia",
        "Zeynep Temel",
        "Melisa Orta Martinez"
      ],
      "categories": [
        "cs.RO"
      ],
      "venues": [],
      "award": true,
      "talk": false,
      "workshop": false,
      "comment": "8 pages, 9 figures, IEEE International Symposium on Safety, Security, and Rescue Robotics 2026, Best Paper Award",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "受賞"
      ],
      "headline": "車輪走行とバネによる跳躍を切り替えて移動するセンチメートル級ロボット",
      "what": "重量125g、幅6.2cmの小型ロボットで、車輪の回転方向を切り替えることで走行モードと跳躍モードを使い分けます。逆回転によって板バネの尾を巻き上げ、弾性エネルギーを一気に解放することで、自身のサイズを超える段差や隙間を乗り越えます。",
      "enables": "最大9.2cmの高さと11.2cmの水平移動距離の跳躍が可能で、尾を巻く速度を変えることで跳躍方向（仰角45度から-11度）を制御できます。",
      "why_it_matters": "小型ロボットが直面する障害物走破性の低さを、アクチュエータの数を増やさずに走行・跳躍のハイブリッド化で解決しており、災害時の探索などへの応用が期待されます。",
      "tags": [
        "ロボティクス",
        "検索救助",
        "ハードウェア設計"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    },
    {
      "id": "2611.23801",
      "title": "Improved Leverage Score Sampling for Constrained Active Linear Regression",
      "url": "https://arxiv.org/abs/2611.23801",
      "pdf": "https://arxiv.org/pdf/2611.23801",
      "authors": [
        "Aarshvi Gajjar",
        "Syamantak Kumar",
        "Aditya Makkar",
        "Christopher Musco",
        "Joey Zhou"
      ],
      "categories": [
        "stat.ML",
        "cs.LG",
        "cs.NA",
        "math.NA"
      ],
      "venues": [
        "NeurIPS"
      ],
      "award": false,
      "talk": true,
      "workshop": false,
      "comment": "To appear in NeurIPS 2026 (Spotlight)",
      "hf_upvotes": null,
      "star_votes": 0,
      "star_level": 1,
      "star_codes": [],
      "star_quote": "",
      "signals": [
        "Oral等"
      ],
      "headline": "制約付き線形回帰における異方性レバレッジスコアサンプリングによるクエリ削減",
      "what": "制約条件がある線形回帰において、少ないクエリ数で近似解を求めるアクティブ学習手法です。制約条件の形状（異方性）を楕円体で近似し、その形状に合わせてサンプリングをバイアスさせる「ellipsoid-regularized leverage scores」を提案しています。",
      "enables": "クエリ複雑度が制約の幾何学的形状に依存する「異方性有効次元」によって支配されることを証明し、従来のサンプリング手法よりも大幅に少ないクエリで同等の精度を達成しました。",
      "why_it_matters": "制約条件を考慮しない従来のレバレッジスコア手法が異方性の強い（特定の方向に偏った）制約に対して非効率だった点を改善し、物理シミュレーションなどの高コストなデータ収集を効率化します。",
      "tags": [
        "機械学習",
        "最適化",
        "アクティブ学習"
      ],
      "fetched_at": "2026-11-20T11:53:34.599390+09:00"
    }
  ],
  "hf": [
    {
      "id": "2611.22115",
      "title": "TeleChat to Xing4: Advancing Frontier Agentic Models on Domestic Chips and Frameworks",
      "abstract": "We present Xing 4, a series of large language models that extends the TeleChat lineage through coordinated advances in model architecture and training infrastructure on Ascend. This report describes the design principles and systems engineering behind the series, spanning architecture selection, large-scale pretraining, and reasoning and agentic post-training. We study how sparse activation, attention design, model depth and width, and speculative decoding balance model capacity with computation, memory access, and execution overhead. Our pretraining infrastructure builds on MindSpore HyperParallel, combining topology-aware hybrid sharding, efficient distributed optimizer execution, and coordinated management of long-sequence workloads and activation memory. CPU affinity and core isolation further reduce host scheduling interference. Together, these mechanisms support the pretraining of a 285B-parameter model on 8,192 Ascend 910C cards, providing a concrete setting for the architectural and systems studies. For post-training, we introduce TeleGym, a unified agent execution platform that connects execution, evaluation, and trajectory construction to policy optimization. Disaggregated asynchronous execution, bounded oversampling, and partial rollout accommodate heterogeneous task durations while preserving trajectory continuity across policy updates. Together, these advances establish an Ascend-oriented training foundation for the continued development of Xing 4 across model scales and increasingly demanding reasoning and agent workloads.",
      "upvotes": 165,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://github.com/XingChen-AGI",
      "comments": 3,
      "org": "XingChen-AGI",
      "url": "https://huggingface.co/papers/2611.22115",
      "arxiv_url": "https://arxiv.org/abs/2611.22115",
      "title_ja": "TeleChat to Xing4：国産チップとフレームワークにおけるフロンティア・エージェントモデルの進展",
      "summary_ja": "Ascend上で構築され、疎な活性化や推論の最適化により計算効率と性能を両立した大規模言語モデルシリーズ。"
    },
    {
      "id": "2611.24738",
      "title": "Jeveration: System One Models Now Generate",
      "abstract": "System One models such as Jev return decisions through fast, parallel prediction. In this paper, we introduce Jeveration, showing that the same decision paradigm can also generate high-quality images in a single forward pass. Jeveration builds on a frozen vision-language model, repurposing its visual-semantic knowledge for holistic image generation. The key challenge is to maintain global consistency. A single prompt admits many valid images, yet parallel predictions must converge on a coherent whole. We therefore condition all positions on a shared random state to coordinate parallel predictions, so that each draw yields a different but coherent image. Since the model tends to ignore this state under direct image supervision, we first learn a distribution over discrete image codes to guide single-pass generation. Beyond text-to-image generation, we further unify image-to-image generation and dense prediction within the same architecture, so that one checkpoint supports all three tasks, each in one forward pass. Experiments show that Jeveration generates a 512x512 image in 78 ms, up to 122x faster than existing unified models, while maintaining competitive image quality and dense prediction performance.",
      "upvotes": 146,
      "github_stars": 72,
      "github_repo": "https://github.com/Carol-lyh/Jeveration",
      "project_page": "https://carol-lyh.github.io/Jeveration/",
      "comments": 4,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.24738",
      "arxiv_url": "https://arxiv.org/abs/2611.24738",
      "title_ja": "Jeveration：システム1モデルによる高速画像生成",
      "summary_ja": "凍結された視覚言語モデルを利用し、共有ランダム状態を用いて並列予測を調整することで、1回の推論での画像生成を実現。"
    },
    {
      "id": "2611.18397",
      "title": "Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent",
      "abstract": "We introduce Gamer, a generalist agent framework built for long-horizon tasks in complex interactive environments. Its end-to-end architecture combines perception, memory management, and multi-step reasoning. A shared training and deployment pipeline supports interaction with both conventional 2D graphical interfaces and complex 3D simulated worlds. We first continue pre-training on a dataset constructed from tens of thousands of hours of device-level keyboard and mouse interaction. These trajectories span simulated games and embodied environments, allowing the model to learn environmental dynamics across both physical and virtual domains. Sparse-thinking instruction tuning then substantially reduces redundant computation while preserving the reasoning needed for complex decisions. We train the policy for long-horizon interaction with a stable multi-turn reinforcement learning method that addresses finite context windows, accumulated rollout errors, and sparse rewards. For real-time interaction, a cloud-edge inference engine serves numerous simulated game environments concurrently, supports unbounded-context execution, and keeps online inference latency low. Across multiple challenging 3D open-world games, Gamer demonstrates solid generalization and operational efficiency comparable to skilled players. It also achieves competitive results on a range of conventional 2D game benchmarks. These results suggest that even repetitive keyboard and mouse trajectories can support substantial gains from scaling data and learning algorithms. Training on these trajectories helps Gamer learn complex skills more steadily in environments with both physical and digital properties. This approach offers a path toward generalist agents that can interact across digital and physical worlds.",
      "upvotes": 144,
      "github_stars": 1050,
      "github_repo": "https://github.com/RainBowLuoCS/Gamer",
      "project_page": "https://mihoyo-gamer.github.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.18397",
      "arxiv_url": "https://arxiv.org/abs/2611.18397",
      "title_ja": "Gamer：長期的なタスクに対応する汎用的な視覚・言語・行動基盤モデル",
      "summary_ja": "数万時間の操作データで学習し、2Dインターフェースと3D環境の両方で複雑な意思決定と行動が可能なゲームエージェント。"
    },
    {
      "id": "2611.18359",
      "title": "Envisioning Agentic Robotics: A New Era of Robotic Systems",
      "abstract": "The release of GPT-6 Astra marks the emergence of a new paradigm in robotics: agentic robotics. Within weeks, frontier models with agentic harnesses matched or exceeded task-specific policies on many embodied benchmarks. Instead of training a dedicated policy for each family of tasks, an agentic robotic system applies a foundation model to open-world embodied tasks. It operates in a closed loop: observing the environment, interpreting user intent, reasoning about the task, invoking skills and tools, verifying outcomes, and adapting its strategy. Despite these advances, the community has yet to converge on a shared definition, a reliable evaluation framework, or a research roadmap. We argue that Embodied System 2, realized by a foundation model together with an embodied harness, forms the decision-making core of agentic robotics. Its central challenge is to translate general-purpose reasoning into effective and verifiable actions under physical constraints such as limited reaction time, mechanical limits, unpredictable environment changes, and irreversible consequences. Motivated by this perspective, we propose an evaluation framework that measures both model capabilities and closed-loop system performance. Furthermore, we identify the principles that carry over from digital to physical agents and the challenges that must be addressed to achieve reliable physical autonomy. On top of the Embodied System 2 and the evaluation framework, we envision a research roadmap toward sustained autonomy: the ability to perform work safely and reliably with progressively broader responsibility, from executing individual primitives to fulfilling standing roles.",
      "upvotes": 136,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://grid-robotics-official.github.io/agentic-robotics-roadmap",
      "comments": 5,
      "org": "Grid Robotics",
      "url": "https://huggingface.co/papers/2611.18359",
      "arxiv_url": "https://arxiv.org/abs/2611.18359",
      "title_ja": "エージェント・ロボティクスの展望：ロボットの新時代",
      "summary_ja": "基盤モデルをオープンワールドのタスクに適用し、意図解釈から推論、実行までをクローズドループで行う新パラダイムを定義。"
    },
    {
      "id": "2611.21218",
      "title": "InclusionMed: Benchmarking AI for Inclusive Healthcare",
      "abstract": "Advancing medical AI for inclusive healthcare requires evaluation across diverse healthcare roles, tasks, and care settings, but benchmark coverage remains uneven. We introduce InclusionMed, an open medical AI evaluation initiative for inclusive healthcare. The InclusionMed Atlas organizes benchmarks across three healthcare roles and three AI capabilities. For the first release, we selected four public benchmarks from 388 candidates through structured audits and independent reproduction. With InclusionMed-DxFiles, our private diagnostic reasoning benchmark, the Atlas contains five benchmarks covering three of its nine role--capability cells. We evaluated frontier large language models on the Atlas and aggregated their results into the InclusionMed Index, with overall scores ranging from 17.5 to 49.1 out of 100. The Index also reports scores by healthcare role and AI capability, showing that a model's rank varied with the role or capability considered. A within-benchmark analysis using task-level tags showed that the ten highest-ranked models in the Index all scored higher on patient communication than on clinical decision-making. Models with similar Index scores also differed substantially in estimated inference cost. These findings highlight the need for evaluation covering more diverse healthcare needs and for context-specific model selection. Through open collaboration and community contributions, InclusionMed seeks to ensure that diverse healthcare needs worldwide shape how medical AI progress is defined and measured.",
      "upvotes": 104,
      "github_stars": 73,
      "github_repo": "https://github.com/panuvi/inclusionmed",
      "project_page": "https://inclusionmed.ai/",
      "comments": 2,
      "org": "",
      "url": "https://huggingface.co/papers/2611.21218",
      "arxiv_url": "https://arxiv.org/abs/2611.21218",
      "title_ja": "InclusionMed：包括的ヘルスケアに向けたAI評価ベンチマーク",
      "summary_ja": "多様な医療的役割とタスクにわたり、AIの診断推論能力などを客観的に評価するためのオープンな評価基盤。"
    },
    {
      "id": "2611.21072",
      "title": "Sage S2.1 Flash Technical Report",
      "abstract": "We introduce Sage S1.5 Flash, a 320-billion-parameter general-purpose mixture-of-experts model designed to reason over scientific evidence and act in interactive environments. Sage Sci-Perception uses dedicated encoders for molecular graphs and biological sequences and represents spectra as ordered patches of measurements. Modality-specific projectors map these representations into the input space of a shared backbone, which processes them alongside text and images. To develop the model's agent capabilities, we construct verifiable environments for tool use, search, and coding, as well as specialized workflows involving machine learning experiments and scientific software. Task completion is checked against execution results, changes in environment state, or submitted artifacts. We evaluate Sage S1.5 Flash on 33 benchmarks across seven domains. In the primary comparison against five baselines, it ranks first on OfficeQA Pro (72.2), MLE-bench Lite (90.3 HumanRank), Harvey LAB, and SpreadsheetBench~2, and second on OSWorld-Verified (85.2), WebArena-Verified (67.6), and DeepResearch Bench~II (54.2). These results show particular strengths in using documentary evidence, producing verifiable workbooks, and carrying out machine learning tasks, alongside competitive performance in desktop and browser workflows that require the model to act on visual feedback.",
      "upvotes": 98,
      "github_stars": 35,
      "github_repo": "https://github.com/InternLM/Sage-S2.1-Flash",
      "project_page": "https://internlm.github.io/Sage-S2.1-Flash/",
      "comments": 4,
      "org": "Intern Large Models",
      "url": "https://huggingface.co/papers/2611.21072",
      "arxiv_url": "https://arxiv.org/abs/2611.21072",
      "title_ja": "Sage S2.1 Flash テクニカルレポート",
      "summary_ja": "分子グラフやスペクトルを処理する専用エンコーダを備え、科学的証拠の推論と実験の自動実行が可能な3200億パラメータのMoEモデル。"
    },
    {
      "id": "2611.17621",
      "title": "AscendGYM: A Cost-Aware Kernel Optimization Benchmark for Real-World Workloads on Ascend NPUs",
      "abstract": "Kernel optimization is essential for efficient large language model (LLM) training and inference on Ascend NPUs. Existing Ascend kernel benchmarks primarily focus on kernel generation, with less emphasis on the ability of agents to optimize existing implementations under input configurations drawn from real workloads. To address this requirement, we introduce AscendGYM, a benchmark whose initial suite comprises 48 kernels across three difficulty levels. Each kernel is paired with test cases whose data types and tensor shapes are collected from real-world training and inference tasks. Consequently, performance improvements on AscendGYM map directly to the corresponding workloads. In terms of usability, two evaluation modes are supported in AscendGYM: model evaluation and model-harness evaluation. The kernel optimization capabilities of both trained models and custom agents are allowed to be measured. It provides a complete execution environment that closely reproduces how Ascend kernels are invoked in practical pipelines. For model evaluation, it additionally includes a built-in harness equipped with search orchestration and experience accumulation. Finally, we propose a new metric, the Speedup-Token Score (STS), which quantifies performance gains relative to token cost. By jointly considering speedup and cost, STS enables the assessment of practical kernel optimization capability of a model or harness under an acceptable budget. AscendGYM is available at https://github.com/SLAI-AITP/AscendGYM.",
      "upvotes": 92,
      "github_stars": 33,
      "github_repo": "https://github.com/SLAI-AITP/AscendGYM",
      "project_page": "https://slai-aitp.github.io/AscendGYM/",
      "comments": 3,
      "org": "SLAI-AITP",
      "url": "https://huggingface.co/papers/2611.17621",
      "arxiv_url": "https://arxiv.org/abs/2611.17621",
      "title_ja": "AscendGYM：Ascend NPU上の実ワークロードに基づくコスト意識型カーネル最適化ベンチマーク",
      "summary_ja": "実務に即した48種類のカーネルを用い、エージェントが既存の実装を実際の入出力設定に合わせて最適化する能力を測定。"
    },
    {
      "id": "2611.21003",
      "title": "K2-Horizon: A Frontier Fleet of Open Source Language Models",
      "abstract": "We present K2-Horizon, a fleet of six fully open language models, from a 0.9B dense model to a 375B-A23B MoE, built for general-purpose reasoning and agentic work across math and science, software engineering, deep research, office automation, and beyond. The models lead or are competitive with strong open models of their size on agentic and coding benchmarks. On the modeling side, to strengthen reasoning, we introduce Mixture-of-Value Attention (MoVA), applying MoE to attention value projections, and softplus attention gating, a more flexible, theoretically motivated gate. Our 36B-A4B model uses both and nearly matches a 32B dense model trained on the same data, with one-seventh the active parameters. We also introduce Uno, lossless diffusion adapters that speed up decoding by up to 2.2x without a separate draft model. Our release follows the LLM360 definition of open source for transparency and reproducibility: the full development history, including intermediate checkpoints from every training stage, pre-training data, training logs, and all training, evaluation, and infrastructure code, notably our production-scale xLLM framework for dense and MoE training and the RL360 reinforcement-learning stack. Beyond the data itself, we release and document in detail every pipeline that built it, the part of model development that open releases most rarely disclose. These pipelines produced roughly 10T synthetic pre-training tokens, showing that synthetic data can be a major ingredient of pre-training at scale. Four of the models share one 22T-token pre-training corpus and recipe, revealing consistent scaling behavior and enabling controlled studies of scale and sparsity. All artifacts are available at https://ifm.ai/k2/",
      "upvotes": 88,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://ifm.ai/k2/",
      "comments": 2,
      "org": "Institute of Foundation Models",
      "url": "https://huggingface.co/papers/2611.21003",
      "arxiv_url": "https://arxiv.org/abs/2611.21003",
      "title_ja": "K2-Horizon：オープンソース言語モデルのフロンティア・フリート",
      "summary_ja": "MoVA等の新技術を導入し、数学・科学・研究等のエージェント業務で高性能を発揮する0.9Bから375Bまでのモデル群。"
    },
    {
      "id": "2611.15789",
      "title": "VibePrevisBench: Evaluating Agentic Coding for 4D Scene Generation in Blender",
      "abstract": "Controllable real-world video generation models can condition on a rendered graybox proxy video, which fixes layout, motion and camera. Coding agents can build such videos by reconstructing a 4D scene in Blender, yet no benchmark checks both these videos and the long, multi-shot scenes behind them. We introduce VibePrevisBench, a benchmark for 4D scene reconstruction: an agent turns a brief into an executable 4D scene and renders its proxy video. Its 242 tasks span four input kinds, including scripts, photos, continuations, and reference videos. Each delivery is scored along two evaluation dimensions. Rule-based Scene Check re-runs the code and compares the exported 4D scene with hidden ground truth facts in nine dimensions. VLM-based Screen Check asks a VLM judge whether the facts that pass can be recognized in the proxy video. We analyze the evaluation results and trajectories of 11 frontier coding agents and identify three key observations. First, multimodal understanding separates the agents, especially in understanding space and camera motion. Second, all agents seem to already master basic camera work and staging, and fail at challenging requests. Third, agents inspect their own renders but fail to correct their errors. Agents thus need better visual understanding of space and camera, explicit checks for challenging requests, and item-by-item verification of renders against the brief.",
      "upvotes": 87,
      "github_stars": 20,
      "github_repo": "https://github.com/vibeprevisbench/vibeprevisbench",
      "project_page": "https://vibeprevisbench.github.io/",
      "comments": 3,
      "org": "Kling-Keye",
      "url": "https://huggingface.co/papers/2611.15789",
      "arxiv_url": "https://arxiv.org/abs/2611.15789",
      "title_ja": "VibePrevisBench：Blenderでの4Dシーン生成エージェントの評価",
      "summary_ja": "指示から実行可能な4Dシーンを構築し動画をレンダリングするエージェントを、物理的一貫性やコード精度で評価するベンチマーク。"
    },
    {
      "id": "2611.19937",
      "title": "AllocFlow: End-to-End Portfolio Trading Action Generation from Raw Market Data",
      "abstract": "Real-world portfolio management requires converting noisy market observations into coordinated, simultaneous allocations across multiple assets under shared capital constraints. Advances in forecasting models and alpha discovery help identify opportunities. However, traditional pipelines often decouple signal forecasting from portfolio construction, potentially misaligning learning with allocation and execution objectives. We present AllocFlow, an end-to-end flow-matching framework that directly generates joint portfolio allocations from raw multi-asset market histories. To capture dependencies among portfolio positions, AllocFlow employs a cross-asset flow Transformer conditioned on temporal market representations to generate continuous, signed position weights across all instruments jointly. To address the sample inefficiency and instability of learning continuous allocation policies from scratch, we establish a two-stage training scheme: strategy-supervised imitation shapes a structured distribution of candidate portfolios, followed by group-relative reinforcement learning (RL) that refines joint decisions using portfolio-level financial rewards and a frozen policy reference. On hourly cryptocurrency perpetual futures, RL refinement raises the annualized net return of the imitation policy from 27.79% to 51.38% and its Calmar ratio from 0.955 to 4.043, surpassing the teacher strategy on every metric, and AllocFlow reaches a Calmar ratio of 4.90 on six further months of unseen 2026 data without retraining.",
      "upvotes": 72,
      "github_stars": 36,
      "github_repo": "https://github.com/allocflow/AllocFlow",
      "project_page": "https://allocflow.github.io/",
      "comments": 4,
      "org": "Nanyang Technological University",
      "url": "https://huggingface.co/papers/2611.19937",
      "arxiv_url": "https://arxiv.org/abs/2611.19937",
      "title_ja": "AllocFlow：生市場データからのエンドツーエンドなポートフォリオ取引アクション生成",
      "summary_ja": "予測と構築を統合し、複数資産間の依存関係を考慮しながら直接最適な資産配分を生成するフロー変換フレームワーク。"
    },
    {
      "id": "2611.14848",
      "title": "Tideway: Phase-Aware Tiered Memory Management for MoE Inference on Consumer Devices",
      "abstract": "Large language model (LLM) agents are rapidly becoming a dominant paradigm for AI applications. Recently, there is a growing demand to deploy large-scale Mixture-of-Experts (MoE) models locally on consumer PCs to balance data privacy, API costs, and inference efficiency. However, unlike datacenter servers with abundant DRAM, consumer devices are tightly constrained in both GPU VRAM and host RAM, forcing massive MoE weights to spill across VRAM, host RAM, and SSD. Under such spilling, we observe that existing systems fail to fully utilize this memory hierarchy, treating the tiers as independent caches and thrashing in inference. We present TIDEWAY, a system for efficient inference of large MoE models on memory-constrained consumer devices. Our core insight is to manage host RAM and GPU VRAM as a unified memory pool. Within this pool, TIDEWAY couples phase-aware memory layouts, which adapt to the distinct access patterns of prefill and decode, with an execution engine that optimizes CUDA Graph execution under expert paging. Our evaluations on representative consumer hardware with frontier MoE models demonstrate that TIDEWAY significantly outperforms state-of-the-art systems. On average, TIDEWAY achieves speedups of 1.97x in end-to-end latency and 2.40x in Time-to-First-Token (TTFT), along with 1.61x higher decode throughput against the fastest baseline. Our source code is publicly available at https://github.com/Afterglow231/Tideway .",
      "upvotes": 65,
      "github_stars": 7,
      "github_repo": "https://github.com/Afterglow231/Tideway",
      "project_page": "",
      "comments": 3,
      "org": "Duke University",
      "url": "https://huggingface.co/papers/2611.14848",
      "arxiv_url": "https://arxiv.org/abs/2611.14848",
      "title_ja": "Tideway：消費者向けデバイスでのMoE推論に向けたフェーズ認識型階層メモリ管理",
      "summary_ja": "GPUメモリ、ホストRAM、SSDにまたがる階層構造を効率的に活用し、メモリ制約のあるPCでのMoEモデル推論を高速化。"
    },
    {
      "id": "2611.22055",
      "title": "Weight-Space Programming Doesn't Need Transformers",
      "abstract": "Standard neural architectures such as the Transformer were chosen because they train well with gradient descent and run fast on GPUs. In weight-space programming, a large language model (LLM) writes target weights by hand without gradient-based training, so those reasons no longer apply. Should we keep the Transformer? Given minimal guidance, ten labeled examples, and a sandbox, mainly on multiple-choice questions, we task three frontier LLMs with either generating the weights of a fixed architecture or designing the architecture themselves. When free to design, all three compile plain-text facts into a sparse table queried by a fixed procedure, reaching up to 54.4% test accuracy. An LLM-designed model achieves higher test accuracy than the most accurate released Transformer that the same LLM wrote while using about 1,800x fewer parameters. Without gradients, they choose a table, in which the LLM can state what each weight means and can find and rewrite a wrong one. Each wrong answer points to one row, and removing a row changes about one other answer. From this, we propose an associative-memory-based model up to 17x faster on GPUs than a same-sized Transformer. We also test pretrained weights, other benchmarks, and tasks where models generate answers. Pretrained LLMs remain more accurate; the claim concerns which structure to build when writing weights.",
      "upvotes": 58,
      "github_stars": 47,
      "github_repo": "https://github.com/effl-lab/Weight-Space-Programming",
      "project_page": "https://wsp-no-transformer.github.io/",
      "comments": 3,
      "org": "Pohang University of Science and Technology",
      "url": "https://huggingface.co/papers/2611.22055",
      "arxiv_url": "https://arxiv.org/abs/2611.22055",
      "title_ja": "重み空間プログラミングにTransformerは不要である",
      "summary_ja": "LLMが直接ネットワークの重みを設計する手法において、固定の手順で疎なテーブルを参照する独自の構造が有効であることを実証。"
    },
    {
      "id": "2611.12068",
      "title": "MIRIX-2.0: Multi-Agent Memory System",
      "abstract": "Long-term memory lets LLM agents personalize, stay consistent, and reuse what worked before. Parametric memories need training, consolidation can lose details for good, and keeping every record leaves a growing store to search. We present MIRIX-2.0, a multi-agent memory system designed to be practical, accurate, and efficient at once. It is the most accurate of the compared systems on four of five QA benchmarks. It reaches 91.4% on LoCoMo and 72.6% on LongMemEval-S, where it leads the strongest baseline by 14.3 points, and with AutoDream disabled it gains 31.0 and 22.0 points over HyperMem on single-hop and multi-hop document QA. As procedural memory, it yields the highest mean success among the compared memory methods on ALFWorld and WebShop and reaches 49.2% on MetaClaw-Bench, against 44.0% for MetaClaw's skill library. Six typed memory agents keep complete records as the system of record, and a provenance hypergraph indexes episodic and semantic records with n-ary frames that cite their rows. Retrieval runs under explicit budgets, so the evidence a question inspects does not grow with the history. AutoDream merges duplicate anchors outside the write path without rewriting any record, and it distills task sessions into skills. With AutoDream disabled, MIRIX-2.0 answers faster than HyperMem on all five timed benchmarks. It needs no fine-tuning, runs with closed and open models, and its code is public.",
      "upvotes": 55,
      "github_stars": 3508,
      "github_repo": "https://github.com/Mirix-AI/MIRIX",
      "project_page": "https://mirix.io/",
      "comments": 4,
      "org": "",
      "url": "https://huggingface.co/papers/2611.12068",
      "arxiv_url": "https://arxiv.org/abs/2611.12068",
      "title_ja": "MIRIX-2.0：マルチエージェント・メモリシステム",
      "summary_ja": "長期的な記憶の保存と検索を効率化し、文書QAや複雑な手続きを必要とするタスクで高い精度と成功率を実現するシステム。"
    },
    {
      "id": "2611.20218",
      "title": "SWE-CoWork: Benchmarking Coding Agents as Digital Employees in Organizations",
      "abstract": "A coding agent working within a software organization must establish what to build, collaborate with colleagues, and verify what it delivers. We introduce SWE-CoWork, a benchmark comprising 101 development assignments across 101 real repositories, 11 programming languages, and 12 application domains. Each assignment places an agent in a simulated engineering organization with 26 colleagues who have distinct responsibilities, bounded knowledge, and controlled collaboration behavior. Starting from a brief handoff, agents must recover requirements distributed across colleagues and workplace records, reconcile conflicting evidence, and implement changes evaluated by private executable tests. We evaluate eleven models and find a substantial gap between partial implementation and complete task delivery. The two leading models satisfy approximately 63% of fail-to-pass (F2P) tests but complete fewer than 8% of assignments. Providing complete requirements upfront improves F2P by approximately 16 percentage points for Seed Evolving and GPT-6 Astra, yet leaves complete task success unchanged. Requirement-level trajectory analysis reveals failures throughout the delivery process: Claude-Opus-5.5 directs a mean of 93% of first questions about queried cards to their accountable owners across runs but obtains only 64% of colleague-held requirements. Deferred questions go unfollowed, implementations remain incomplete even after requirements are acquired, and 31% of requirements reported as completed fail their tests. These findings highlight sustained requirement tracking, from clarification through implementation, verification, and handoff, as a key challenge for reliable autonomous software engineering.",
      "upvotes": 51,
      "github_stars": 15,
      "github_repo": "https://github.com/TokenWave-AI/swe-cowork-bench",
      "project_page": "https://tokenwave-ai.github.io/swe-cowork-page",
      "comments": 4,
      "org": "Tokenwave.AI",
      "url": "https://huggingface.co/papers/2611.20218",
      "arxiv_url": "https://arxiv.org/abs/2611.20218",
      "title_ja": "SWE-CoWork：組織内のデジタル従業員としてのコーディングエージェントのベンチマーク",
      "summary_ja": "模擬組織内で同僚との対話や要件整理、実装、テストを行い、実世界の共同開発能力を多角的に評価する基盤。"
    },
    {
      "id": "2611.21373",
      "title": "WeVisForensics: Self-Evolving Agent for Omni AI-Generated Video Detection",
      "abstract": "Recent advances in video generation call for reliable detection grounded in explicit forensic evidence. However, current methods primarily depend on single-pass chain-of-thought reasoning that overlooks brief or localized artifacts, or on predefined multi-agent workflows that offer limited flexibility in selecting relevant inspections. Even with adaptive investigation, optimizing the investigation policy alone does not directly improve the forensic capabilities of fixed experts. We introduce WeVisForensics, an agentic framework in which a main investigator agent coordinates a self-evolving library of forensic inspector sub-agents spanning visual and audio cues. The investigator learns which artifact type to examine, over which window, and when to conclude, and these interactions provide shared feedback for both levels of agents. Our dual-timescale policy optimization strategy, DTPO, closes this loop through fast reinforcement learning of the investigator and slower refinement of the inspectors, guided by annotated artifact intervals, to report subtle artifacts they once dismissed. Furthermore, we curate ForenCue-30K, combining role-specific forensic annotations and interaction trajectories to supervise individual inspections and their coordination, with an accompanying reinforcement-learning pool. Experiments show that WeVisForensics averages 95.2% detection accuracy across in-domain, out-of-domain and agentic benchmarks, 9.0% above the strongest prior detector, while grounding its verdicts in localized evidence.",
      "upvotes": 49,
      "github_stars": 45,
      "github_repo": "https://github.com/Tencent/WeVisForensics",
      "project_page": "https://tencent.github.io/WeVisForensics",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.21373",
      "arxiv_url": "https://arxiv.org/abs/2611.21373",
      "title_ja": "WeVisForensics：オムニAI生成ビデオ検出のための自己進化型エージェント",
      "summary_ja": "調査エージェントが視覚・音声の専門エージェント群を統括し、証拠に基づき偽造ビデオを検出する自己進化型フレームワーク。"
    },
    {
      "id": "2611.19800",
      "title": "Multi-Branch Transformer",
      "abstract": "Transformer language models are commonly scaled by making their blocks wider or stacking them deeper. In this work, we explore a complementary path: branching, the parallel composition of full Transformer blocks. We introduce the Multi-Branch Transformer (MBT), which processes the input through shared initial layers, executes independently parameterized branches of sequential blocks in parallel, and fuses their outputs before shared final layers. At comparable training compute, we study three MBT variants: Wide-Shallow preserves block width, Narrow-Deep preserves sequential depth, and Balanced interpolates between them. In controlled pretraining experiments at four mixture-of-experts scales (0.8B to 2.1B total parameters), 2-branch Wide-Shallow MBTs consistently outperform sequential Transformers under matched parameter and training-compute budgets. Balanced MBTs improve further and retain comparable quality as the number of branches increases. To improve inference efficiency at long contexts, we introduce Joint-KV, which constructs a shared KV cache from branch representations at each depth. Our final recipe combines Balanced MBTs with Joint-KV, supported by an inference engine that exploits branch grouping and shared-cache reuse. Fitted scaling curves indicate that standard Transformers require up to 1.26x as much training body compute to match our final models' validation loss. These models reduce full-model KV-cache storage by up to 34% and deliver up to 51.4% higher decoding throughput on a single H200 GPU. Ablation studies show that branching yields gains beyond changes in width and depth, enables an effective KV-sharing strategy (Joint-KV), remains robust across fusion functions, and performs best in the middle layers. These findings show that branching offers a practical path for scaling language models toward both better modeling quality and faster inference.",
      "upvotes": 46,
      "github_stars": 13,
      "github_repo": "https://github.com/GaotangLi/Multi-Branch-Transformer",
      "project_page": "https://gaotangli.github.io/project_page/Multi-Branch-Transformer/",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.19800",
      "arxiv_url": "https://arxiv.org/abs/2611.19800",
      "title_ja": "Multi-Branch Transformer",
      "summary_ja": "Transformerブロックを並列に配置する「ブランチ化」により、一定の計算量下でモデルの表現力を高める新たな構成手法。"
    },
    {
      "id": "2611.26444",
      "title": "Mind2Act World: A Diagnostic Benchmark for Embodied Mind, Physical Action, and Mind-Action Composition in Robotic Manipulation",
      "abstract": "Embodied intelligence aims to let robots perform complex physical tasks with human-like adaptability and reliability, which requires three complementary capabilities: history-based cognitive reasoning, precise and timely physical execution, and the composition of reasoning and execution through environmental feedback. Yet existing benchmarks either evaluate reasoning and execution within the same tasks or assess them separately without their composition, so they reveal little about whether a failure comes from reasoning, execution, or their composition. We introduce Mind2Act World, a diagnostic benchmark of 30 simulated manipulation tasks from five real-world application domains. Each task has three difficulty levels and two scene settings (Clean and Random), yielding 180 configurations. The tasks form three views: Mind tests decisions based on past observations, Act tests precise and timely execution, and Mind2Act combines both in closed-loop tasks where action outcomes guide later decisions. Comparing the three views shows whether a system lacks a capability or fails to compose capabilities it already has. A diagnosis harness further attributes the failed episodes of three representative systems to Mind, Act, or their composition and summarizes each system in a profile card. Our evaluation of multimodal agents, vision-language-action models (VLAs), and world-action models (WAMs) shows that competence in a single view does not carry over to Mind2Act tasks. Even the strongest agent succeeds in 52.7% of Mind and 39.0% of Act episodes but in only 12.0% of Mind2Act episodes. The strongest agent retains task state but struggles with sustained contact, whereas end-to-end policies execute practiced motions but retain little task state. These findings point to composing reasoning and execution through environmental feedback as the main open problem.",
      "upvotes": 45,
      "github_stars": 27,
      "github_repo": "https://github.com/Mind2Act/Mind2Act_World",
      "project_page": "https://mind2act-world.com/",
      "comments": 3,
      "org": "Mind2Act-World",
      "url": "https://huggingface.co/papers/2611.26444",
      "arxiv_url": "https://arxiv.org/abs/2611.26444",
      "title_ja": "Mind2Act World：ロボット操作における思考、物理行動、思考・行動統合の診断ベンチマーク",
      "summary_ja": "ロボットの失敗が認知推論、物理的実行、あるいはその統合のどこに起因するかを切り分けて評価可能な30のシミュレーションタスク。"
    },
    {
      "id": "2611.07222",
      "title": "SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection",
      "abstract": "Tool-using agents act on email, files, and payments, so an instruction hidden in a web page or a shared document can make an agent send data or money to an attacker. Many runtime defenses put a language model on the decision that lets an action through, so the decision depends on a model that may read the attacker's text and adds model calls to every step. Provenance defenses keep the model off the final check but need a model to plan or route each task first. Where an action goes can instead be read from the tools' typed returns: an email's sender or a payment's account arrives in a typed field, while injected instructions arrive as free text. SPILLWAY turns this observation into a deterministic floor with no per-task plan. The check admits a call when each target value that appears in tool output but not in the user's task was returned by a read-only tool in a typed field or is covered by a fixed delegation rule. A deterministic sanitizer removes instruction-like regions its fixed rules match before the model reads them and retains the removed spans as evidence, and a local judge may restore a refused call, never one whose target lies in the removed text. Across three backbones, and seven task suites on one of them, no standard templated injection redirects an action to an attacker's target under SPILLWAY, at the highest observed mean utility and composite scores (NRP, ERS) of the defenses we run under that attack. A forged chat template also produces a raw zero, and mean in-scope attack success under a released reinforcement-learning attacker is .007. SPILLWAY reaches this floor with no defense-triggered backbone re-run and almost no added model call. As personal AI agents act on users' email, files, and payments, SPILLWAY gives them an auditable refusal floor on where their actions go that keeps them useful and holds across backbones.",
      "upvotes": 45,
      "github_stars": 5,
      "github_repo": "https://github.com/saintmachines/spillway",
      "project_page": "https://saintmachines.github.io/spillway/",
      "comments": 3,
      "org": "SAINT Machines",
      "url": "https://huggingface.co/papers/2611.07222",
      "arxiv_url": "https://arxiv.org/abs/2611.07222",
      "title_ja": "SPILLWAY：ターゲット承認と無害化の分離による、ツール利用エージェントへのプロンプト注入防御",
      "summary_ja": "ツールの戻り値に含まれる型情報を利用し、自由記述の注入攻撃を決定論的に識別して不正なアクションを阻止する防御手法。"
    },
    {
      "id": "2611.21099",
      "title": "ForceHarness: Turning Force into Action and Physics for Frozen Frontier Models",
      "abstract": "Frontier multimodal models can now control robots zero-shot from images, yet many manipulation tasks depend on contact forces that images cannot show. Bringing force to an API-only frozen model raises two challenges. First, contact evolves much faster than an API model can decide, so the system must close the loop on force beneath the model. Second, a frozen model cannot interpret raw force streams, so force must be returned in a form the model can reason about. Therefore, we present ForceHarness, a harness that lets frozen models use force without demonstrations or finetuning. After calibrating hand force from a wrist sensor or joint torques alone, ForceHarness addresses the first challenge with self-terminating force primitives that regulate force on their own and return at a contact event. To address the second challenge, a physics translation layer turns each force trace into physical quantities with uncertainty as the tool result. To evaluate ForceHarness against expert force controllers and learned policies under identical conditions, we also build HiddenPhys, a seven-task MuJoCo benchmark with hidden physical variables. On a real arm without a wrist force sensor, ForceHarness raises the zero-shot success rate of GPT-6 Astra from 3.3% to 90.0%. In simulation, it adds 17.5 percentage points on the public ForceBench suite and 34.3 percentage points on HiddenPhys, surpassing force-aware policies trained on demonstrations on both benchmarks and matching hand-written expert controllers on HiddenPhys. Ablations further show that smaller models make significantly better decisions when given physical quantities rather than raw force values.",
      "upvotes": 44,
      "github_stars": 48,
      "github_repo": "https://github.com/showlab/ForceHarness",
      "project_page": "https://showlab.github.io/ForceHarness/",
      "comments": 3,
      "org": "Show Lab",
      "url": "https://huggingface.co/papers/2611.21099",
      "arxiv_url": "https://arxiv.org/abs/2611.21099",
      "title_ja": "ForceHarness：凍結されたフロンティアモデルにおける力の制御と物理の統合",
      "summary_ja": "微細な力の変化をエージェントが解釈可能な形式に変換し、モデルの更新なしに力制御を伴うロボット操作を可能にするシステム。"
    },
    {
      "id": "2611.18482",
      "title": "MMFlash: Faster Speculative Decoding for Vision-Language Models",
      "abstract": "Speculative decoding accelerates generation by letting a lightweight drafter propose tokens for parallel verification by a target model. Diffusion drafters such as DFlash propose an entire token block in a single forward pass, but mainly focus on text-only tasks, leaving multimodal drafting underexplored. To study this setting, we first introduce a metric of token-level visual dependence based on the KL divergence between next-token distributions with and without visual input. We find that acceptance rates decrease from 46% in the lowest visual-dependence quartile to 22% in the highest, with this disparity persisting after multimodal training. Motivated by this observation, we propose MMFlash, a simple and effective framework that adaptively upweights visually dependent tokens that the drafter predicts poorly. For long video inputs, MMFlash further employs sparse attention to reduce redundant attention computation and improve drafting quality. Across various multimodal benchmarks, MMFlash achieves lossless decoding speedups of up to 3.58times, outperforming EAGLE-3 and DFlash by up to 195.4% and 17.1%, respectively.",
      "upvotes": 42,
      "github_stars": 45,
      "github_repo": "https://github.com/fscdc/MMFlash",
      "project_page": "https://fscdc.github.io/MMFlash/",
      "comments": 3,
      "org": "National University of Singapore",
      "url": "https://huggingface.co/papers/2611.18482",
      "arxiv_url": "https://arxiv.org/abs/2611.18482",
      "title_ja": "MMFlash：視覚言語モデルのための高速投機的デコーディング",
      "summary_ja": "トークンの視覚依存度に基づき草案モデルの動作を動的に調整し、マルチモーダル環境でのデコード速度を向上させる手法。"
    },
    {
      "id": "2611.26590",
      "title": "Probing the \"Conscious\" Mind: Selective Access and Global Workspace in Vision-Language Models",
      "abstract": "Vision-language models (VLMs) integrate visual and textual information, but their outputs do not reveal internal concept representations. Global workspace theory (GWT) proposes that information is selected from parallel brain processes, integrated in a shared workspace, and made available to specialised processes. We introduce the Multimodal Concept Lens (MC-Lens), a multimodal Jacobian lens, to study these functions in VLM concept processing. Its vision encoder and language decoder lenses map intermediate states to a shared semantic space defined by the decoder's output vocabulary to compare concept accessibility across modalities. MC-Lens supports internal concept interventions to examine the role of accessed concepts in downstream computation. (i) Accessibility and selective access. Multimodal concept information is readable in intermediate states and selectively accessible as tasks require. We extend \"readout carriers\" from one name token to a token set to better capture and express concept information and support counterfactual experiments. (ii) Concepts in downstream computation. Counterfactual experiments show that accessed concept information participates in downstream computation and reasoning. (iii) Development of cross-modal alignment and selective access. We develop two J-space metrics tracking the development of cross-modal concept alignment more clearly than hidden state cosine in controlled VLM training. The experiment also shows that reliable selective access develops later than concept accessibility. (iv) Shared functions across models. Across VLM families and sizes, we find shared patterns of concept accessibility, query-dependent selectivity and cross-task intervention effects despite differences in internal organisation. These findings offer an experimental basis to study GWT in multimodal artificial systems and how it can guide cross-modal alignment improvements.",
      "upvotes": 40,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 2,
      "org": "University College London",
      "url": "https://huggingface.co/papers/2611.26590",
      "arxiv_url": "https://arxiv.org/abs/2611.26590",
      "title_ja": "「意識」の探求：視覚言語モデルにおける選択的アクセスとグローバル・ワークスペース",
      "summary_ja": "MC-Lensを用いて中間状態を共通のセマンティック空間に写像し、内部的な概念表現の統合やアクセシビリティを解析。"
    },
    {
      "id": "2611.26409",
      "title": "WeMM-Video: Pushing the Frontiers of Open-Source Omni-Modal Video Understanding",
      "abstract": "Video understanding, particularly with accompanying audio, remains a central challenge in multimodal intelligence. In this report, we introduce WeMM-Video, a family of Chinese-English bilingual omni-modal foundation models spanning 2B, 4B, 9B, and 35B-A3B variants. Centering on joint audio-visual perception and reasoning, WeMM-Video unifies text, image, audio, and video processing within a hybrid-thinking paradigm, seamlessly supporting both a non-thinking instruct mode for fast, direct responses and a thinking mode for explicit step-by-step reasoning. The models are trained on a large-scale multimodal corpus of approximately 1.2 trillion tokens through progressive pre-training and a multi-stage post-training pipeline incorporating multi-teacher OPD, anti-repetition MrDPO, and specialist RL. Evaluated across more than 120 benchmarks, WeMM-Video demonstrates superior performance in omni-modal video understanding and reasoning, while maintaining highly competitive capabilities across general audio, silent video, image, and text tasks. Specifically, in omni-modal video evaluations, our flagship WeMM-Video-35B-A3B establishes a new open-source state of the art, substantially outperforming proprietary models such as Qwen3.5-Omni-Flash and Seed2.0-Mini-0428 while narrowing the gap with the strong Gemini-3.0-Flash, and our compact WeMM-Video-9B surpasses the larger open-source Qwen3-Omni-30B-A3B-Instruct. We publicly release the WeMM-Video family along with our evaluation and reproduction pipeline to foster further research and development in the open-source community.",
      "upvotes": 40,
      "github_stars": 38,
      "github_repo": "https://github.com/Tencent/WeMM-Video",
      "project_page": "",
      "comments": 3,
      "org": "Tencent",
      "url": "https://huggingface.co/papers/2611.26409",
      "arxiv_url": "https://arxiv.org/abs/2611.26409",
      "title_ja": "WeMM-Video：オープンソース・オムニモーダル・ビデオ理解のフロンティア",
      "summary_ja": "画像・音声・動画を統合処理し、即時応答モードと論理的思考モードを使い分け可能な高性能ビデオ理解モデルシリーズ。"
    },
    {
      "id": "2611.21366",
      "title": "ALIVE: Making Streaming Video Models Interactive",
      "abstract": "Streaming video LLMs can continuously observe the world, yet often handle user requests in isolation. We introduce ALIVE, an interactive streaming video model supporting proactive monitoring, streaming task coordination, and feedback-seeking interaction. We construct ALIVE-SFT-288K and ALIVE-RL-3K for two-stage training. Contrastive supervised fine-tuning teaches when and how to respond, while reinforcement learning with Behavior-Aligned Credit Assignment (BACA) combines trajectory-level and local advantages to refine decisions, responses, and silence across multi-turn interactions. We also introduce FSI-Bench to evaluate feedback seeking and subsequent task completion. ALIVE achieves the highest overall scores among the compared models on four public benchmarks and FSI-Bench, demonstrating strong streaming understanding and interactive capabilities.",
      "upvotes": 40,
      "github_stars": 23,
      "github_repo": "https://github.com/lijinzhao30/ALIVE",
      "project_page": "https://lijinzhao30.github.io/ALIVE/",
      "comments": 4,
      "org": "Tsinghua University",
      "url": "https://huggingface.co/papers/2611.21366",
      "arxiv_url": "https://arxiv.org/abs/2611.21366",
      "title_ja": "ALIVE：ストリーミングビデオモデルをインタラクティブにする",
      "summary_ja": "常時映像を監視しながら能動的に情報を確認し、強化学習によって適切なタイミングでの発話や沈黙を実現したモデル。"
    },
    {
      "id": "2611.21607",
      "title": "ScaleVLA: Scaling Vision-Language-Action Models to 552 Billion Parameters",
      "abstract": "Frontier Vision-Language Models (VLMs) such as GPT-6 Astra have demonstrated remarkable capabilities in robot control, suggesting that broad pretraining provides knowledge valuable for physical action. Yet most Vision-Language-Action (VLA) policies still rely on much smaller VLM backbones, leaving this potential largely untapped. We ask whether frontier-scale representations can provide a stronger foundation for robot learning. We introduce ScaleVLA, which connects a 552B DeepSeek-V4.1-Flash backbone to a trainable action DiT, and systematically compare VLMs from 2B to 552B under a shared training setup. We evaluate three fundamental capabilities of robot foundation models. In sample efficiency, just 10 demonstrations outperform a 2B backbone trained with 50 (87.8% vs. 85.6%). In generalization, LIBERO-PRO success reaches 45.1%, compared with at most 31.3% for smaller backbones. In precise manipulation, real-world charger insertion improves from 4/10 to 9/10 successes, with gains concentrated in contact-sensitive alignment. Despite its scale, ScaleVLA achieves 216 ms median latency per action chunk. Our findings suggest that frontier VLMs can serve not only as reasoning agents, but also as powerful representational foundations for efficient and generalizable robot policies.",
      "upvotes": 39,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://galaxygeneralrobotics.github.io/scalevla/",
      "comments": 2,
      "org": "galbot",
      "url": "https://huggingface.co/papers/2611.21607",
      "arxiv_url": "https://arxiv.org/abs/2611.21607",
      "title_ja": "ScaleVLA：視覚・言語・行動モデルを5520億パラメータに拡張",
      "summary_ja": "巨大なVLMバックボーンと行動生成DiTを接続し、モデルの規模がロボット操作の学習効率や汎用性に与える影響を検証。"
    },
    {
      "id": "2611.23068",
      "title": "The Resolution Hypothesis: Agent Evolution's Key Is Identifying Improvements",
      "abstract": "Agent evolution follows a simple loop: a proposer writes candidate artifacts (prompts, skills, memories) and selection accepts those that score higher. This loop has shown promise, yet practitioners face a puzzle: methods trade wins across papers, and evolution often fails to bootstrap on certain tasks. We trace this puzzle to the Resolution Hypothesis: agent evolution stalls not because methods fail to propose better artifacts, but because noisy evaluations cannot reliably identify them. Across seven evolution methods and six models (over 10M LLM calls), we find support for the hypothesis at both levels where evaluation scores are used. At the candidate level (choosing artifacts), helpful candidate artifacts exist, but selection is no better than random at telling them from harmful ones, so errors accumulate across rounds. At the method level (ranking methods), typical margins of a few percentage points are smaller than the difference between two independent runs of the same method, so published rankings often rest on luck. Together, these findings indicate that agent evolution is often bottlenecked by reliably identifying improvements. This calls for a shift in how we develop and evaluate self-improving agents, from designing ever more candidate improvement systems to making true improvements detectable and accumulable.",
      "upvotes": 37,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "https://lineshogan.github.io/resolution-hypothesis/",
      "comments": 6,
      "org": "ShanghaiTech University",
      "url": "https://huggingface.co/papers/2611.23068",
      "arxiv_url": "https://arxiv.org/abs/2611.23068",
      "title_ja": "解像度仮説：エージェント進化の鍵は改善箇所の特定にある",
      "summary_ja": "エージェントの自己進化が停滞するのは、生成物の質が低いからではなく、評価のノイズにより良し悪しを正しく判断できないためという説。"
    },
    {
      "id": "2611.18856",
      "title": "Self-Improvement Memory Enables Continual Recursive Self-Improvement",
      "abstract": "Harness optimization is often studied with a fixed policy model and benchmark. When either changes, the optimizer must decide which parts of an evolved harness to reuse or revise, but the harness alone may not explain why earlier edits were made or how they performed. In this work, we study Continual Recursive Self-Improvement (CRSI), a setting for continuing existing harness-optimization methods across compatible benchmarks or policy models. We propose Self-Improvement Memory (SIM) for the harness optimizer, rather than the task-solving policy. SIM groups edits by recurring harness problem and records their rationale, predicted and observed outcomes, and evaluation context. New attempts extend this history as optimization continues. In our experiments across four domains, SIM achieves higher final scores than harness-only and root-cause-only continuation in cross-dataset and pairwise cross-model comparisons. Across ten independent source runs in coding, paired continuations with SIM improve final scores by an average of 2.36 points over harness-only continuation (p=0.003).",
      "upvotes": 35,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 6,
      "org": "Google",
      "url": "https://huggingface.co/papers/2611.18856",
      "arxiv_url": "https://arxiv.org/abs/2611.18856",
      "title_ja": "自己改善メモリによる継続的な再帰的自己改善",
      "summary_ja": "エージェントの構成（ハーネス）の変更履歴とその理由、結果を記録し、異なるモデルや課題でも過去の改善を再利用可能にする手法。"
    },
    {
      "id": "2611.15348",
      "title": "Breath-Dx: A Time Series Classification Benchmark for Disease Screening with eNose",
      "abstract": "Electronic nose (eNose) technology offers a portable, non-invasive route for disease screening via exhaled breath analysis. However, progress in the field is hindered by the lack of systematic benchmarks that compare machine learning methods under realistic conditions, particularly sensor drift, a known but rarely quantified failure mode. Most existing studies rely on small, private datasets with inconsistent protocols, rendering results non-comparable and slowing progress. We introduce Breath-Dx, the first comprehensive benchmark of time series classification methods for breath-based disease screening. Our work leverages the Scent of Health (S-OH) dataset, the largest public clinical eNose collection to date, comprising 1,234 patients across nine diagnostic groups, each providing a 17-channel multivariate time series with explicit temporal train/test splits that account for sensor drift. We systematically evaluate 10 methods spanning four families: feature-based tabular learners, convolution-based models, graph-based, and time series architectures. All methods degrade significantly under temporal validation (0.05-0.12 AUC drop compared to random cross-validation), confirming that drift embeds a strong temporal signal. Under this realistic evaluation, the best methods achieve ROC AUC of 0.74-0.76 for some lung conditions, though others remain near chance. Recurrent architectures show the most consistent performance across diseases, while specialized time series methods achieve the highest peak results. Demographic confounders matter: breath signals provide independent diagnostic value for some conditions but add little beyond age for others. We release the S-OH dataset, all temporal splits, evaluation protocols, and code to enable reproducible research and accelerate progress in clinical breathomics.",
      "upvotes": 33,
      "github_stars": 5,
      "github_repo": "https://github.com/ivanpodd/Breath-Dx",
      "project_page": "",
      "comments": 3,
      "org": "",
      "url": "https://huggingface.co/papers/2611.15348",
      "arxiv_url": "https://arxiv.org/abs/2611.15348",
      "title_ja": "Breath-Dx：eNoseによる疾患スクリーニングのためのタイムシリーズ分類ベンチマーク",
      "summary_ja": "呼気分析デバイスのデータを用い、センサドリフト等の実用上の課題を考慮した機械学習アルゴリズムの評価用データセット。"
    },
    {
      "id": "2611.17834",
      "title": "PaperCritic: Training AI Reviewers to Assess the Soundness of Papers",
      "abstract": "As AI conference submissions grow rapidly, AI reviewers are being considered as an alternative. However, simply imitating human reviewing is problematic because reviewing serves multiple purposes, including evaluating papers' soundness, interestingness, and clarity, the last two of which are subjective. In this work, we focus solely on evaluating soundness, the most important and objective criterion, and define the learning objective as jointly maximizing (1) precision, based on the soundness and substantiveness of review points, and (2) recall, the coverage of high-quality reference review points. Under this problem formulation, we construct a quality-labeled review point dataset, PaperSound-23K, using 1K ICLR submissions and 23K human-written and LLM-generated review points. Using this dataset, we train an AI reviewer model, PaperCritic, through reinforcement learning with the F1 score of precision and recall as the reward. Our experiments show that PaperCritic outperforms frontier models and models trained with other AI reviewer training methods on an in-domain test set. Surprisingly, learning to review ICLR submissions also transfers to reviewing Nature-family papers and even to out-of-domain reviewing tasks (e.g., code review, legal contract review, and feedback on story writing).",
      "upvotes": 33,
      "github_stars": 0,
      "github_repo": "",
      "project_page": "",
      "comments": 3,
      "org": "Carnegie Mellon University",
      "url": "https://huggingface.co/papers/2611.17834",
      "arxiv_url": "https://arxiv.org/abs/2611.17834",
      "title_ja": "PaperCritic：論文の妥当性を評価するAI査読者の訓練",
      "summary_ja": "客観的な基準である「妥当性」に焦点を絞り、査読指摘の適合率と網羅率を最大化するよう学習させたAI査読システム。"
    },
    {
      "id": "2611.26595",
      "title": "Coda-DaVinci: Reimagining Video Generation with Code2Video",
      "abstract": "Code2Video uses agent-authored 3D proxies to guide video generation, enabling explicit control over structure and dynamics. However, how to construct proxies and prompts for optimal downstream quality remains underexplored, as do the capabilities and limitations of this paradigm. Through controlled experiments and blinded human evaluation, we study proxy granularity, physics simulation, and prompting. The results reveal task-dependent trade-offs: coarse proxies favor natural motion, while medium-grained proxies favor consistency. Physics simulation and proxy-aligned prompting further improve average quality. Guided by these findings, we introduce Coda-DaVinci, a task-adaptive agentic framework for Code2Video generation that selects between proxy-guided and direct generation, adapts modeling granularity to each entity, and coordinates simulation with proxy-grounded prompting. Its multi-agent harness preserves scene assets and guides repairs through visual inspection and independent review. Experiments demonstrate leading instruction following on VTR and scene consistency on R2M, improved physical plausibility over direct generation, and higher visual realism than the compared Code2Video baselines. Long-video evaluations further show gains in event structure and consistency across successive interactions, while revealing limitations in transition stability and adherence to scene settings.",
      "upvotes": 32,
      "github_stars": 13,
      "github_repo": "https://github.com/FrankYang-17/Coda",
      "project_page": "https://coda-davinci.github.io/",
      "comments": 4,
      "org": "KlingAI Research",
      "url": "https://huggingface.co/papers/2611.26595",
      "arxiv_url": "https://arxiv.org/abs/2611.26595",
      "title_ja": "Coda-DaVinci：Code2Videoによるビデオ生成の再構築",
      "summary_ja": "エージェントが作成した3Dプロキシを介してビデオ生成を制御し、構造の粒度や物理シミュレーションを最適化する適応型フレームワーク。"
    },
    {
      "id": "2611.26629",
      "title": "Posterior Matching Distillation",
      "abstract": "Diffusion distillation accelerates image and video generation by compressing a pretrained teacher's iterative sampling process into a few network evaluations. Distribution-based methods achieve this by matching the student's output distribution to the teacher's. This matching is often driven by reverse-KL objectives, whose mode-seeking bias favors dominant teacher modes at the expense of diversity across samples. We introduce Posterior Matching Distillation (PMD), a new member of the distribution-based distillation family that combines mode-covering posterior sampling with any-step generation. At zero population loss, PMD recovers the teacher's full posterior of clean images at each trained noise level. Its stochastic student supports any-step sampling budgets within the trained timestep grid without further training. To learn these posteriors, PMD matches exponentially reweighted averages of student samples conditioned on a fixed noisy state to corresponding teacher posterior means. Under Gaussian corruption, exponentially tilted posterior mean is a single teacher evaluation at a shifted input. We prove that, matching tilted means over an open neighborhood uniquely identifies the full posterior. PMD thus supervises the entire conditional distribution through a family of mean constraints, without any auxiliary student-score network. Experiments on SDXL and FLUX.2 [klein] 4B demonstrate that PMD achieves the best FID among 4-step methods on both models, while maintaining competitive or leading performance across prompt-alignment and perceptual-quality metrics.",
      "upvotes": 31,
      "github_stars": 7,
      "github_repo": "https://github.com/yesiltepe-hidir/PMD",
      "project_page": "https://pmd-distillation.github.io/",
      "comments": 4,
      "org": "NVIDIA",
      "url": "https://huggingface.co/papers/2611.26629",
      "arxiv_url": "https://arxiv.org/abs/2611.26629",
      "title_ja": "Posterior Matching Distillation：事後分布マッチングによる蒸留",
      "summary_ja": "拡散モデルの高速化において、事後分布の多様性を維持しつつ少ないステップ数で高品質な画像を生成可能にする新たな蒸留手法。"
    }
  ],
  "labs": [
    {
      "lab": "Google Research",
      "title": "How Google Duplex evolved to also call businesses for you in Gemini",
      "summary": "Generative AI",
      "url": "https://research.google/blog/how-google-duplex-evolved-to-also-call-businesses-for-you-in-gemini/",
      "published": "2026-11-21T08:30:30+09:00",
      "title_ja": "Google DuplexがGeminiで進化、店舗への自動電話が可能に",
      "summary_ja": "生成AIのGeminiが、Google Duplexの技術によりユーザーに代わって店舗への電話を行えるようになった。"
    },
    {
      "lab": "OpenAI",
      "title": "Combatting adversarial distillation",
      "summary": "OpenAI’s layered approach to adversarial distillation combines model training, safeguards, detection, and enforcement to protect against capability extraction.",
      "url": "https://openai.com/index/combatting-adversarial-distillation",
      "published": "2026-11-20T19:00:00+09:00",
      "title_ja": "敵対的蒸留への対策：OpenAIの多層的アプローチ",
      "summary_ja": "モデル訓練、保護、検知、執行を組み合わせ、能力の抽出を防ぐための多層的な防御手法を導入した。"
    },
    {
      "lab": "OpenAI",
      "title": "Hebbia sees improvements in financial research with GPT-6 Astra",
      "summary": "Hebbia tested GPT-6 Astra for financial research. Its prerelease evaluations found gains in source coverage, citation relevance, and presentation quality.",
      "url": "https://openai.com/business/customer-stories/hebbia",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Hebbia、GPT-6 Astraによる金融リサーチの向上を確認",
      "summary_ja": "GPT-6 Astraにより、ソースの網羅性、引用の関連性、プレゼンテーション品質が向上することが実証された。"
    },
    {
      "lab": "OpenAI",
      "title": "Can AI help scientists identify promising drug candidates?",
      "summary": "MedChemBench evaluates how well AI models interpret molecular structures, reason from experimental evidence, and select compounds in early drug discovery.",
      "url": "https://openai.com/index/introducing-medchembench",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "AIは科学者の有望な新薬候補の特定を支援できるか？",
      "summary_ja": "MedChemBenchを用いて、AIが分子構造の解釈や実験証拠に基づく推論、化合物の選別をどの程度行えるか評価した。"
    },
    {
      "lab": "Apple ML",
      "title": "Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth",
      "summary": "We present Depth Pro 2, an approach to estimating dense metric depth for images and video at full resolution. By analyzing prior methods for monocular depth estimation, we find that they commonly trade off temporal consistency and boundary sharpness: multi-frame methods favor consistency, single-frame methods favor sharpness. To overcome this trade-off, we train a single, scalable network that processes both images and video and predicts depth maps at native resolution. Depth Pro 2 produces depth maps that are metrically accurate, sharp, and temporally consistent all at once, outperforming…",
      "url": "https://machinelearning.apple.com/research/depth-pro-2-monocular",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Depth Pro 2：鮮明で時間的一貫性のある単眼深度推定",
      "summary_ja": "単一のネットワークにより、画像と動画の双方で解像度を維持したまま、正確かつ鮮明で一貫性のある深度推定を実現した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup",
      "summary": "",
      "url": "https://huggingface.co/blog/inkling2mini",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Inkling 2 Miniの発表：ローカル環境向けの最先端パフォーマンス",
      "summary_ja": "ローカル環境で動作する、最先端のパフォーマンスを備えた小型モデル「Inkling 2 Mini」を導入した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost",
      "summary": "",
      "url": "https://huggingface.co/blog/harness-adapters-at-scale",
      "published": "2026-11-20T09:00:00+09:00",
      "title_ja": "Harness Adaptersの導入：性能向上とコスト削減のためのモデル適応",
      "summary_ja": "好みのモデルを独自のハーネスに適応させることで、パフォーマンスの向上とコストの最適化を可能にした。"
    },
    {
      "lab": "Google Research",
      "title": "A game you cannot win unless you have a quantum computer",
      "summary": "Quantum",
      "url": "https://research.google/blog/a-game-you-cannot-win-unless-you-have-a-quantum-computer/",
      "published": "2026-11-20T05:03:00+09:00",
      "title_ja": "量子コンピュータなしでは勝てないゲーム",
      "summary_ja": "量子コンピュータ特有の能力を必要とする、従来の計算機では勝利が不可能なゲームについての研究。"
    },
    {
      "lab": "OpenAI",
      "title": "How OpenAI’s Performance Factory keeps ChatGPT fast",
      "summary": "Learn how OpenAI built the Performance Factory, a system of Codex-powered workflows that finds and fixes performance issues to help keep ChatGPT fast.",
      "url": "https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast",
      "published": "2026-11-19T17:00:00+09:00",
      "title_ja": "OpenAIのPerformance FactoryがChatGPTの高速性を維持する仕組み",
      "summary_ja": "Codexを活用し、パフォーマンスの問題を自動で発見・修正するワークフローを構築することで、ChatGPTの速度を維持している。"
    },
    {
      "lab": "OpenAI",
      "title": "Explore the Codex Security Plugin",
      "summary": "Watch a demo of the Codex Security Plugin and see the workflow in action, from getting started to reviewing the results shown in the recording.",
      "url": "https://openai.com/business/learn/codex-security-plugin-demo",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "Codex Security Pluginの探索",
      "summary_ja": "Codex Security Pluginのデモを通じて、利用開始から結果の確認までのセキュリティワークフローを公開した。"
    },
    {
      "lab": "OpenAI",
      "title": "See PR scans in action",
      "summary": "Watch a walkthrough of PR scans and see how the presenter reviews scan results in a pull request workflow.",
      "url": "https://openai.com/business/learn/pr-scans-demo",
      "published": "2026-11-19T09:00:00+09:00",
      "title_ja": "PRスキャンの実演",
      "summary_ja": "プルリクエストのワークフローにおいて、スキャン結果をレビューする実際の手順を解説した。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Neon",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-neon/",
      "published": "2026-11-19T06:35:43+09:00",
      "title_ja": "Gemini 4 Neonの発表",
      "summary_ja": "Gemini 4シリーズの新たなモデル「Neon」を導入した。"
    },
    {
      "lab": "Hugging Face",
      "title": "DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency",
      "summary": "",
      "url": "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin",
      "published": "2026-11-19T04:54:56+09:00",
      "title_ja": "DaisyRose-27B：ポストトレーニング効率の限界に挑む",
      "summary_ja": "27Bパラメータを持つDaisyRoseにより、学習後の効率化における最先端の成果を提示した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Why your fine-tuning job takes longer than the FLOPs say",
      "summary": "",
      "url": "https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time",
      "published": "2026-11-19T03:53:43+09:00",
      "title_ja": "ファインチューニングが理論上の演算量よりも時間がかかる理由",
      "summary_ja": "ファインチューニングの実行時間が、理論上のFLOPsから算出される時間よりも長くなる要因について解説している。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Genie 4 is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/genie-4-is-now-available/",
      "published": "2026-11-19T03:13:42+09:00",
      "title_ja": "Genie 4が利用可能に",
      "summary_ja": "最新モデル「Genie 4」の提供を開始した。"
    },
    {
      "lab": "Hugging Face",
      "title": "Time-Series Models in the Streamhouse: A New Frontier and Use Cases",
      "summary": "",
      "url": "https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse",
      "published": "2026-11-19T00:00:23+09:00",
      "title_ja": "Streamhouseにおける時系列モデル：新たなフロンティアとユースケース",
      "summary_ja": "Streamhouse環境での時系列モデル活用の可能性と、具体的な利用シナリオを提示した。"
    },
    {
      "lab": "Hugging Face",
      "title": "180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers",
      "summary": "",
      "url": "https://huggingface.co/blog/moe-expert-streaming",
      "published": "2026-11-18T09:00:00+09:00",
      "title_ja": "180Bパラメータを32GB RAMで：TransformersによるMoE推論の限界",
      "summary_ja": "大規模な混合専門家（MoE）モデルの推論を、限られたメモリ容量で実行するための技術的挑戦。"
    },
    {
      "lab": "Apple ML",
      "title": "Split-and-Scale Latent 3D Representations",
      "summary": "Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity. In this paper, we address…",
      "url": "https://machinelearning.apple.com/research/split-scale-latent-3d",
      "published": "2026-11-16T09:00:00+09:00",
      "title_ja": "分割・スケール型潜在3D表現",
      "summary_ja": "潜在容量を効率的に拡張することで、複雑な物体の微細な詳細を捉えることができる新しい3D生成モデル手法。"
    },
    {
      "lab": "Google Research",
      "title": "Advancing science & engineering with Antigravity’s /teamwork",
      "summary": "Education Innovation",
      "url": "https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/",
      "published": "2026-11-14T05:47:18+09:00",
      "title_ja": "Antigravityの/teamworkによる科学・工学の進歩",
      "summary_ja": "教育イノベーションを通じて、科学や工学分野における共同作業と研究を促進する取り組み。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing Gemini 4 Hydrogen",
      "summary": "",
      "url": "https://deepmind.google/blog/introducing-gemini-4-hydrogen/",
      "published": "2026-11-13T03:00:50+09:00",
      "title_ja": "Gemini 4 Hydrogenの導入",
      "summary_ja": "Gemini 4シリーズの新たなバリエーションとして「Hydrogen」を発表した。"
    },
    {
      "lab": "Apple ML",
      "title": "Theoretical Limits of Language Model Alignment",
      "summary": "Language model (LM) alignment improves model outputs to reflect human preferences while preserving the capabilities of the base model. The most common alignment approaches are (i) reinforcement learning, which maximizes the expected reward under a KL-divergence constraint, and (ii) best-of-NNN alignment, which selects the highest-reward output among NNN independent samples. Despite their widespread use, the fundamental limits of reward improvement under a KL budget remain poorly understood. We characterize the information-theoretic limits of KL-regularized alignment by deriving the maximum…",
      "url": "https://machinelearning.apple.com/research/theoretical-limits-alignment",
      "published": "2026-11-12T09:00:00+09:00",
      "title_ja": "言語モデルアライメントの理論的限界",
      "summary_ja": "KLダイバージェンス制約下での報酬改善の限界を情報理論的に導出し、アライメント手法の特性を明らかにした。"
    },
    {
      "lab": "Google Research",
      "title": "Using wearables to enable cardiovascular-kidney-metabolic (CKM) risk profiling for personalized coaching",
      "summary": "Health & Bioscience",
      "url": "https://research.google/blog/using-wearables-to-enable-cardiovascular-kidney-metabolic-ckm-risk-profiling-for-personalized-coaching/",
      "published": "2026-11-12T04:54:00+09:00",
      "title_ja": "ウェアラブルを用いたCKMリスク評価と個別化コーチング",
      "summary_ja": "ウェアラブル端末のデータを活用し、心血管・腎臓・代謝のリスクを把握して個人に合わせた指導を行う。"
    },
    {
      "lab": "Google DeepMind",
      "title": "AlphaGenome 2: Deciphering how cells read DNA to better understand disease",
      "summary": "Predicting how DNA sequences and their variations impact specific human cell types and disease.",
      "url": "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      "published": "2026-11-12T00:00:15+09:00",
      "title_ja": "AlphaGenome 2：細胞のDNA解読メカニズムを解明し疾患を理解する",
      "summary_ja": "DNA配列の変化が特定の細胞型や疾患にどのような影響を与えるかを予測する技術。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Gemini 4 Carbon is now available",
      "summary": "",
      "url": "https://deepmind.google/blog/gemini-4-carbon-is-now-available/",
      "published": "2026-11-11T01:03:47+09:00",
      "title_ja": "Gemini 4 Carbonが利用可能に",
      "summary_ja": "Gemini 4シリーズの最新モデル「Carbon」の提供を開始した。"
    },
    {
      "lab": "Google DeepMind",
      "title": "Introducing AlphaProof Code: a breakthrough in verifying complex software at depth",
      "summary": "AlphaProof Code agents wrote three  million lines of proofs in Lean to verify Signal’s core encryption.",
      "url": "https://deepmind.google/blog/introducing-alphaproof-code/",
      "published": "2026-11-10T21:02:28+09:00",
      "title_ja": "AlphaProof Codeの導入：複雑なソフトウェアの深層検証における突破口",
      "summary_ja": "Signalの暗号化の検証において、Lean言語で300万行の証明を記述することに成功した。"
    },
    {
      "lab": "Apple ML",
      "title": "Evaluating the Evaluators: Investigating LLM Judges for Personalized Writing Style Assessment",
      "summary": "This paper was accepted at the Can We Trust AI Evaluation? Workshop at NeurIPS 2026.\nWe evaluate how good large language model (LLM) judges are for personalized writing tasks. This is important when a user’s preferred writing style is known (e.g., “upbeat”) and an LLM judge is used to evaluate whether generated text adheres to this preference. We examine how the writing task, the combination of generator and judge LLM, the evaluation objective, and general commonsense and reasoning ability impact LLM judge performance. To this end, we generate text with four LLMs for three long-form writing…",
      "url": "https://machinelearning.apple.com/research/evaluating-evaluators-llm-judges",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "評価者の評価：パーソナライズされた執筆スタイル評価におけるLLM Judgeの調査",
      "summary_ja": "特定の書き方に基づいたテキスト生成に対し、LLMによる評価がどの程度信頼できるかを様々な要因から分析した。"
    },
    {
      "lab": "Apple ML",
      "title": "On the Importance of Gating: Memorization vs. In-Context Learning in State Space Models",
      "summary": "State Space Models (SSMs) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute. Although SSMs exhibit reasonable performance and favorable computational characteristics, they continue to lag behind Transformers on tasks that require in-context learning and precise retrieval, slowing their adoption for large-scale language modeling. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent…",
      "url": "https://machinelearning.apple.com/research/gating-memorization-in-context",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "ゲート機構の重要性：状態空間モデルにおける暗記 vs コンテキスト内学習",
      "summary_ja": "SSMがTransformerに劣る理由を分析し、ゲート機構がコンテキスト内学習や精密な情報抽出に果たす役割を解明した。"
    },
    {
      "lab": "Apple ML",
      "title": "Weighted State Souping for Efficient Long-Context Retrieval",
      "summary": "This paper was accepted at the Workshop on Personalized, Aligned, Long-term Memory for AI Systems (PALM) at NeurIPS 2026.\nState space models (SSMs) combine fast inference and fixed state size with competitive language-modeling performance. Recently, state souping has been proposed as a procedure whereby an SSM independently encodes chunks of tokens like documents, tool definitions, or memory records. The resulting state encodings may be cached and recombined to cheaply construct a context for downstream queries. However, both state souping and vanilla SSMs deteriorate on long, crowded…",
      "url": "https://machinelearning.apple.com/research/weighted-state-souping",
      "published": "2026-11-10T09:00:00+09:00",
      "title_ja": "効率的な長文脈検索のための重み付きState Souping",
      "summary_ja": "SSMで独立した情報の埋め込みを再結合する際、長文や情報の密集による精度低下を抑えるための効率的な手法。"
    },
    {
      "lab": "Google Research",
      "title": "Exploring the world's languages with Language Explorer",
      "summary": "Natural Language Processing",
      "url": "https://research.google/blog/exploring-the-worlds-languages-with-language-explorer/",
      "published": "2026-11-10T05:29:39+09:00",
      "title_ja": "Language Explorerで世界の言語を探索する",
      "summary_ja": "自然言語処理技術を用いて、世界中の多様な言語を調査・探索するプロジェクト。"
    },
    {
      "lab": "Berkeley BAIR",
      "title": "BAIR at CoRL 2026",
      "summary": "The Conference on Robot Learning (CoRL) takes place November 9–12, 2026, in Austin, Texas. BAIR faculty, postdocs and students will be presenting research at various sessions, including an Early Career Keynote from Professor Negar Mehr. See below for the full schedule of sessions with BAIR members, including papers co-authored with collaborators at other universities and companies. November 9–12, 2026 Austin, Texas All times CST · UTC−6 33 Main-conference papers 4 Late-breaking results (LBR) posters 10 Orals & spotlights 3 orals · 7 spotlights 4 Days of research November 9–12 Mon Nov 9 Tue Nov",
      "url": "http://bair.berkeley.edu/blog/2026/11/09/bair-at-corl-2026/",
      "published": "2026-11-09T18:00:00+09:00",
      "title_ja": "CoRL 2026におけるBAIRの発表内容",
      "summary_ja": "ロボット学習会議にて、BAIRのメンバーが33本の主論文を含む最新の研究成果を発表する。"
    }
  ]
};
