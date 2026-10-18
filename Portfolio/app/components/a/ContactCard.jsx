// app/components/a/ContactCard.jsx
// 連絡先のカード（メール・CV・GitHub・X・Instagram・LinkedIn）。ヘッダーの写真に重ねて置く。
import contact from "@/public/contact.json";
import { DownloadIcon, GithubIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";

export default function ContactCard({ title, cvLabel, cvHref }) {
  const email = contact.mail.replace(/^mailto:/, "");
  return (
    <div className="a-contact" id="contact">
      <h3>{title}</h3>
      <ul>
        <li className="wide"><MailIcon /><a href={contact.mail}>{email}</a></li>
        <li>
          <DownloadIcon />
          <a href={cvHref} target="_blank" rel="noopener noreferrer">{cvLabel}</a>
        </li>
        <li>
          <GithubIcon />
          <a href={contact.github} target="_blank" rel="noopener noreferrer">/KanKusakabe</a>
        </li>
        <li>
          <XIcon />
          <a href={contact.xacount} target="_blank" rel="noopener noreferrer">@kusakabekanv5</a>
        </li>
        <li>
          <InstagramIcon />
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer">@kusakabekanv5</a>
        </li>
        <li>
          <LinkedInIcon />
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">/kan-kusakabe</a>
        </li>
      </ul>
    </div>
  );
}
