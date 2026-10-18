// app/layout.js
import "@/app/globals.css";
import "@/app/design-a.css";
import { Anton, IBM_Plex_Sans, IBM_Plex_Sans_JP } from "next/font/google";

// 見出し: Anton / 本文: IBM Plex Sans（英語）・IBM Plex Sans JP（日本語）
// Plex は英日が同じ設計なので、日本語の中に英字が混ざっても揃って見える
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});
const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});
const plexSansJp = IBM_Plex_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-jp",
  display: "swap",
  preload: false,
});

// Next.js Metadata（app/layout.js または各ページに設定）
export const metadata = {
  verifications: {
    google: "fMH9Paa4GuwRywOfUUakZjPnBqE4Ngh7ky2qzbCFbV4",
  },
  title: "Kan Kusakabe | HCI Researcher - Hokkaido University",
  description:
    "Kan Kusakabe, PhD student at Hokkaido University specializing in mobile interaction, gesture recognition, 3D printing, and interactive interface design. Explore my projects and publications.",
  keywords: [
    "Kan Kusakabe",
    "HCI",
    "Human-Computer Interaction",
    "mobile interaction",
    "gesture recognition",
    "3D printing",
    "interactive design",
    "Hokkaido University",
  ],
  openGraph: {
    title: "Kan Kusakabe - Interactive Design and Gesture Recognition Research",
    description:
      "Explore innovative research by Kan Kusakabe on mobile interaction, user-centered gesture design, and bridging digital and physical experiences.",
    url: "https://kankusakabe.github.io/Portfolio",
    siteName: "Kan Kusakabe's Portfolio",
    images: [
      {
        url: "https://kankusakabe.github.io/Portfolio/image/KanKusakabe.png",
        width: 800,
        height: 600,
        alt: "Kan Kusakabe Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kan Kusakabe - HCI Researcher at Hokkaido University",
    description:
      "PhD research on mobile interaction, gesture recognition, and innovative interactive designs by Kan Kusakabe.",
    creator: "@HCI_kan",
    images: ["https://kankusakabe.github.io/Portfolio/image/KanKusakabe.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${plexSans.variable} ${plexSansJp.variable}`}
      // 下の script が描画前に "js" クラスを足すので、その差分は警告しない
      suppressHydrationWarning
    >
      <head>
        {/* Google Search Consoleのためのタグ */}
        <meta
          name="google-site-verification"
          content="fMH9Paa4GuwRywOfUUakZjPnBqE4Ngh7ky2qzbCFbV4"
        />
        {/* JS が動く環境だけ、ヘッダー写真をランダムに選ぶまで隠す（design-a.css の .js 参照） */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>

      <body className={`antialiased`}>
        {/* ナビは各ページ（トップ・プロジェクト）が共通の Topbar で描く */}
        <main>{children}</main>
      </body>
    </html>
  );
}
