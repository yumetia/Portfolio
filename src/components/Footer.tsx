// components/footer.jsx
import { Container, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

function Footer() {
  const { language } = useLanguage();
  const { title, subtitle, copyright } =
    languages[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          <span className="p-1">{title}</span>
          <span className="text-accent">{subtitle}</span>
        </p>
        <p>{copyright.replace("{year}", currentYear.toString())}</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/yumetia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-ghost btn-circle"
            title="GitHub"
          >
            <Github className="w-6 h-6 text-current" />
          </a>

        </div>
      </nav>
    </footer>
  );
}

export default Footer;
