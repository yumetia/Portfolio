// components/navbar.jsx
import { Container, Languages, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  // navbar text
  const {
    home,
    about,
    experiences,
    projects,
    contact,
    toggleBtn,
  } = languages[language].navbar;

  const { cvLink } = languages[language].footer;

  return (
    <div className="flex justify-center md:justify-between items-center p-4 flex-wrap">
      <a href="/" className="flex items-center font-bold text-3xl md:text-xl">
        <Container />
        <span className="p-1">Remi</span>
        <span className="text-accent"> BOUYEDA</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            {home}
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            {about}
          </a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-sm btn-ghost">
            {experiences}
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost">
            {projects}
          </a>
        </li>
        <li>
          <a href="#Contact" className="btn btn-sm btn-ghost">
            {contact}
          </a>
        </li>
      </ul>

      {/* Actions à droite : Toggle langue + Download CV */}
      <div className="ml-4 flex items-center gap-2">
        <button
          id="toggle-lang"
          onClick={toggleLanguage}
          className="btn btn-outline btn-sm rounded-full px-4 gap-2"
          aria-label="Toggle language"
          type="button"
        >
          <Languages className="w-4 h-4" />
          <span>{toggleBtn}</span>
        </button>

        <a
          href={cvLink}
          download
          className="btn btn-outline btn-accent btn-sm rounded-full px-4 gap-2"
          aria-label="Download CV (PDF)"
        >
          <Download className="w-4 h-4" />
          <span>CV</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
