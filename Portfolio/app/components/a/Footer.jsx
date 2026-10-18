// app/components/a/Footer.jsx
// サイト共通のフッター（大きな「Get in touch!」とリンク）
import contact from "@/public/contact.json";

export default function Footer({ footer, cvHref }) {
  return (
    <footer className="a-footer">
      <div className="a-wrap">
        <div className="a-big-cta">
          <span className="o" aria-hidden="true">{footer.cta_outline}</span>
          <span><a href={contact.mail}>{footer.cta}</a></span>
          <span className="o" aria-hidden="true">{footer.cta_outline}</span>
        </div>
        <div className="a-foot-row">
          <span>{footer.copyright}</span>
          <ul>
            <li><a href={contact.xacount} target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={cvHref} target="_blank" rel="noopener noreferrer">CV</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
