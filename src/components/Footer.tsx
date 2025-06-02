import { Container, Github, Linkedin,ArrowDownFromLine } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

function Footer() {
  const { language } = useLanguage();
  const { title, subtitle, copyright,cvLink } = languages[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          {title}
          <span className="text-accent">{subtitle}</span>
        </p>
        <p>{copyright.replace("{year}", currentYear.toString())}</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/yumetia" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/remi-bouyeda-186846290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-current" />
          </a>

          <a href={cvLink} download>
            <ArrowDownFromLine />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
