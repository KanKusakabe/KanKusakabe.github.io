# latex/ — CV・研究業績書のソース

サイトで配布している CV と、研究業績書の LaTeX ソースです。

## ファイルと出力先

| ソース | 出力 | 用途 |
|---|---|---|
| `resume-research.tex` | `public/CV-en.pdf`（と `latex/resume-research.pdf`） | 英語の CV（サイトの「Download CV」） |
| `CV-JP.tex` | `public/CV-jp.pdf` | 日本語の CV（サイトの「Download CV」）。顔写真は `face.png` |
| `resume-work.tex` | `public/image/CV-work.pdf`（と `latex/resume-work.pdf`） | 職務経歴寄りの英語版（サイトからはリンクしていない） |
| `研究業績書.tex` | `latex/研究業績書.pdf` | 研究業績書 |
| `resume.cls` | — | 共通のクラス（見出しは Biolinum 太字、箇条書きの行間もここ） |

## ビルド

pLaTeX + dvipdfmx です（`latexmkrc` に設定済み）。`latex/` で次を実行します。

```sh
latexmk CV-JP.tex
```

作業ファイル（`*.aux`, `*.dvi`, `*.log` など）は `.gitignore` で除外しています。PDF は成果物として管理するので、ビルドしたら上の表の出力先へコピーしてください。

## 書体

博論と同じです。英文は Linux Libertine（`libertine`）、和文は原ノ味フォント（`pxchfon` の `haranoaji`）、見出しは Linux Biolinum の太字です。

## 注意

- `CV-JP.tex` の `hyperref` は `dvipdfmx` オプションにしてください。`dvipdfm` だと顔写真が出力されません。
- 業績を足すときは、サイトの `public/{en,ja}/publications.json` とそろえてください。
