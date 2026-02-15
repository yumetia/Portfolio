// components/footer.jsx

import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";


import github from "../assets/institutions/github.png"
import { Container } from "lucide-react";

function Footer() {
  const { language } = useLanguage();
  const { copyright } =
    languages[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Container className="w-10 h-10 text-accent" />
        <p className="font-bold">
          <span className="text-primary">Yumetia</span>
        </p>
        <p>{copyright.replace("{year}", currentYear.toString())}</p>
      </aside>

        <div className="grid grid-flow-col gap-4">
          <div>
            <a
              href="https://github.com/yumetia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn btn-neutral btn-circle"
              title="GitHub"
            >
              <img src={github} alt="github" className="w-6 w-6"/>
            </a>
          </div>

        </div>
    </footer>
  );
}

export default Footer;
