// app/components/HomePage.jsx
// トップページ（デザインA: Retro Résumé）。文言はすべて public/{en,ja}/common.json の design_a から読む。
import Link from "next/link";
import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import { CustomMarkdown } from "@/app/components/CustomMarkdown";
import Hero, { Lines } from "@/app/components/a/Hero";
import RevealObserver from "@/app/components/a/RevealObserver";
import Topbar from "@/app/components/a/Topbar";
import Footer from "@/app/components/a/Footer";
import ContactCard from "@/app/components/a/ContactCard";
import { TalkIcon } from "@/app/components/a/icons";

// 新しい順に並べるための表示年と並び替えキー
const pubYear = (p) => (p.date ? p.date.slice(0, 4) : String(p.year));
const pubKey = (p) => p.date || `${p.year}0000`;

function Timeline({ items, yearKey = "year" }) {
  return (
    <ul className="a-timeline">
      {items.map((item, i) => (
        <li key={i}>
          <span className="yr">{item[yearKey]}</span>
          <span className="what">
            {item.title ?? item.school}
            <small>{item.detail}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage({ common, projects, samplePublications, lang }) {
  const BASE_PATH = nextConfig.basePath || "";
  const a = common.design_a;
  const { sections } = a;
  const isJa = lang.startsWith("ja");
  const prefix = isJa ? "/ja" : "";

  const groups = a.publication_groups
    .map((g) => ({
      ...g,
      items: samplePublications
        .filter((p) => p.category === g.key)
        .sort((x, y) => pubKey(y).localeCompare(pubKey(x))),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="a-page">
      <RevealObserver />
      <Topbar nav={a.nav} isJa={isJa} homeHref={isJa ? "/ja" : "/"} enHref="/" jaHref="/ja" />
      <Hero a={a} basePath={BASE_PATH}>
        <ContactCard title={sections.contact} cvLabel={a.hello.cv_label} cvHref={`${BASE_PATH}/${common.cv}`} />
      </Hero>

      {/* ================= Hello ================= */}
      {/* 見出しと本文を横に並べる（狭い画面では縦に積む）。Contact カードはヘッダーの写真に重ねている */}
      <section className="a-hello" id="profile">
        <div className="a-wrap a-hello-grid">
          <h2 className="a-reveal">
            <Lines text={a.hello.title} />
          </h2>
          <div className="a-lead a-reveal">
            <CustomMarkdown>{common.introduction}</CustomMarkdown>
          </div>
        </div>
      </section>

      {/* ================= Education + Skills ================= */}
      <section className="a-green" id="resume">
        <div className="a-outline-word" aria-hidden="true">
          <span>RESUME</span>
        </div>
        <div className="a-wrap a-green-grid">
          <div className="a-reveal">
            <h3 className="a-sec-title">{sections.education}</h3>
            <Timeline items={a.education} yearKey="years" />
          </div>
          <div className="a-skills a-reveal">
            <h3 className="a-sec-title">{sections.skills}</h3>
            <div className="a-skills-cols">
              <div>
                <h4>{sections.languages}</h4>
                <div className="a-app-icons">
                  {a.skills.languages.map((l) => (
                    <span key={l.abbr} title={l.name} aria-label={l.name}>{l.abbr}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4>{sections.tools}</h4>
                <ul className="a-list-2">
                  {a.skills.tools.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>
            <div className="a-chips">
              {a.skills.chips.map((c) => <span className="a-chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Highlights + Topics + Talks ================= */}
      <section>
        <div className="a-wrap a-duo">
          <div className="a-yellow a-reveal">
            <h3 className="a-sec-title">{sections.highlights}</h3>
            <Timeline items={a.highlights} />
          </div>
          <div>
            <div className="a-topics a-reveal">
              <h3 className="a-sec-title">{sections.topics}</h3>
              <div className="a-topic-row">
                {a.topics.map((t) => (
                  <b key={t.title}>{t.title}</b>
                ))}
              </div>
            </div>
            <div className="a-talks a-reveal">
              <h3 className="a-sec-title">{sections.talks}</h3>
              <div className="a-icons-row">
                {a.talks.map((t) => (
                  <a key={t.label} href={t.url} target="_blank" rel="noopener noreferrer">
                    <div className="ic"><TalkIcon name={t.icon} /></div>
                    <Lines text={t.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Selected Works ================= */}
      <section className="a-work" id="works">
        <div className="a-wrap">
          <div className="a-work-head a-reveal">
            <h3 className="a-sec-title"><Lines text={sections.work} /></h3>
          </div>
          <div className={`a-cards cols-${Math.min(projects.length, 5)}`}>
            {projects.map((work) => (
              <Link key={work.id} className="a-card a-reveal" href={`${prefix}/works/${work.id}`}>
                <div className="pic">
                  <Image src={`${BASE_PATH}${work.thumbnail}`} alt="" width={400} height={300} />
                </div>
                <h3>{work.short_title ?? work.title}</h3>
                {work.summary && <p>{work.summary}</p>}
                {work.venue && <span className="venue">{work.venue}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Publications ================= */}
      <section className="a-pubs" id="publications">
        <div className="a-wrap">
          <h3 className="a-sec-title a-reveal">{sections.publications}</h3>
          {groups.map((g) => (
            <div className="a-pub-group" key={g.key}>
              <h4 className="a-grp a-reveal">
                {g.title}
                <small>{g.note} · {g.items.length}</small>
              </h4>
              <ul className="a-pub-list">
                {g.items.map((p, i) => (
                  <li className="a-reveal" key={i}>
                    <span className="yr">{pubYear(p)}</span>
                    <div>
                      <div className="t"><CustomMarkdown>{p.title}</CustomMarkdown></div>
                      <div className="au"><CustomMarkdown>{p.authors}</CustomMarkdown></div>
                      <div className="pubr">
                        <CustomMarkdown>{p.publisher}</CustomMarkdown>{" "}
                        {p.url && <CustomMarkdown>{p.url}</CustomMarkdown>}
                      </div>
                      {p.award && <span className="a-award">{p.award}</span>}
                    </div>
                    <span className="v">{p.venue}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer footer={a.footer} cvHref={`${BASE_PATH}/${common.cv}`} />
    </div>
  );
}
