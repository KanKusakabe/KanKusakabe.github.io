// app/components/ProjectPage.jsx
// プロジェクトページ（デザインA）。共通のナビ・フッターに、緑の見出し帯、サムネイル、
// 「見出し｜内容」の2列で Abstract / Videos / PDF / Publications を並べる。
import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import { CustomMarkdown } from "@/app/components/CustomMarkdown";
import Topbar from "@/app/components/a/Topbar";
import Footer from "@/app/components/a/Footer";
import RevealObserver from "@/app/components/a/RevealObserver";

const BASE_PATH = nextConfig.basePath || "";

// ヘルパー関数：通常のYouTube URL を埋め込み用 URL に変換
function getEmbedUrl(url) {
  const regExp =
    /^.*(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/))([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[1].length === 11) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  // マッチしなかった場合は、元のURLをそのまま返す
  return url;
}

function Section({ title, children }) {
  return (
    <section className="a-proj-sec a-reveal">
      <h2>{title}</h2>
      <div className="a-proj-sec-body">{children}</div>
    </section>
  );
}

// otherProjects / otherBase: もう一方の言語の作品一覧とパス（言語切り替えの行き先に使う）
export default async function ProjectPage(props) {
  // props.params は Promise で渡される可能性があるので、await してから利用する
  const { id } = await props.params;
  const { projects, commons, otherProjects = [], otherBase = "" } = props;
  const project = projects.find((p) => String(p.id) === id);

  const a = commons.design_a;
  const isJa = commons.path.startsWith("/ja");
  const here = isJa ? "/ja" : "";
  // もう一方の言語に同じ作品が無ければ、その言語のトップへ
  const other = otherProjects.some((p) => String(p.id) === id) ? `${otherBase}/works/${id}` : otherBase || "/";
  const anchorBase = `${BASE_PATH}${here}`; // トップのセクションへのリンク（/Portfolio#works など）

  const topbar = (
    <Topbar
      nav={a.nav}
      isJa={isJa}
      anchorBase={anchorBase}
      homeHref={here || "/"}
      enHref={isJa ? other : `/works/${id}`}
      jaHref={isJa ? `/ja/works/${id}` : other}
    />
  );

  if (!project) {
    return (
      <div className="a-page">
        {topbar}
        <div className="a-wrap a-proj-missing">
          <p>{commons.project_not_found}</p>
          <a className="a-proj-back" href={`${anchorBase}#works`}>← {a.project.back}</a>
        </div>
      </div>
    );
  }

  const name = project.short_title ?? project.title;
  const videos = project.youtube ?? [];
  const pubs = project.publication ?? [];

  return (
    <div className="a-page">
      <RevealObserver />
      {topbar}

      <header className="a-proj-head">
        <div className="a-wrap">
          <div className="a-proj-meta">
            <a href={`${anchorBase}#works`}>← {a.project.back}</a>
            {project.venue && <span className="a-proj-venue">{project.venue}</span>}
          </div>
          <h1 className="a-proj-title">{name}</h1>
          {project.short_title && <p className="a-proj-full">{project.title}</p>}
        </div>
      </header>

      {/* サムネイルは緑と本文のクリームの境目にまたがる */}
      <div className="a-proj-figure">
        <div className="a-proj-figure-inner">
          <Image src={`${BASE_PATH}${project.thumbnail}`} alt={name} width={1600} height={1200} priority />
        </div>
      </div>

      <div className="a-proj-body">
        <div className="a-wrap">
          {project.abstract && (
            <Section title={a.project.abstract}>
              <p className="a-proj-abstract">{project.abstract}</p>
            </Section>
          )}

          {videos.length > 0 && (
            <Section title={a.project.videos}>
              {videos.map((url, index) => (
                <div key={index} className="a-proj-video">
                  <iframe
                    src={getEmbedUrl(url)}
                    title={`${name} — video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </Section>
          )}

          {project.pdf && (
            <Section title={a.project.pdf}>
              {/* iframe の子要素はハイドレーションエラーになるので、リンクは外に置く */}
              <iframe className="a-proj-pdf" src={`${BASE_PATH}${project.pdf}`} title={`${name} — PDF`} />
              <a className="a-proj-link" href={`${BASE_PATH}${project.pdf}`} target="_blank" rel="noopener noreferrer">
                {a.project.open_pdf} ↗
              </a>
            </Section>
          )}

          {pubs.length > 0 && (
            <Section title={a.project.publications}>
              <ul className="a-pub-list compact">
                {pubs.map((pub, index) => (
                  <li key={index}>
                    <span className="yr">{pub.year}</span>
                    <div>
                      <div className="t"><CustomMarkdown>{pub.title}</CustomMarkdown></div>
                      <div className="au"><CustomMarkdown>{pub.authors}</CustomMarkdown></div>
                      <div className="pubr">
                        <CustomMarkdown>{pub.publisher}</CustomMarkdown>{" "}
                        {pub.url && <CustomMarkdown>{pub.url}</CustomMarkdown>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <a className="a-proj-back" href={`${anchorBase}#works`}>← {a.project.back}</a>
        </div>
      </div>

      <Footer footer={a.footer} cvHref={`${BASE_PATH}/${commons.cv}`} />
    </div>
  );
}
