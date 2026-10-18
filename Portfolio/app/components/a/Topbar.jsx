// app/components/a/Topbar.jsx
// サイト共通のナビ。スマホ以外では画面上部に追従する（design-a.css の .a-topbar）。
import Link from "next/link";

// anchorBase: セクションへのリンクの前につけるパス（トップでは ""、プロジェクトページではトップの URL）
// enHref / jaHref: 言語切り替えの行き先
export default function Topbar({ nav, isJa, anchorBase = "", homeHref, enHref, jaHref }) {
  const to = (hash) => `${anchorBase}#${hash}`;
  return (
    <div className="a-topbar">
      <div className="a-wrap">
        <nav className="a-nav" aria-label="Main">
          <Link href={homeHref} className="a-logo">
            Kan Kusakabe
          </Link>
          <ul>
            <li className="a-nav-link"><a href={to("profile")}>{nav.about}</a></li>
            <li className="a-nav-link"><a href={to("resume")}>{nav.resume}</a></li>
            <li className="a-nav-link"><a href={to("works")}>{nav.research}</a></li>
            <li className="a-nav-link"><a href={to("publications")}>{nav.papers}</a></li>
            <li className="a-lang">
              <Link href={enHref} aria-current={isJa ? undefined : "page"}>EN</Link>
              <span aria-hidden="true">/</span>
              <Link href={jaHref} aria-current={isJa ? "page" : undefined}>JA</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
