// components/Navbar.tsx
import { Container } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  // navbar text
  const { home, about, experiences, projects, contact, toggleBtn } =
    languages[language].navbar;

  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="/"
        className="flex items-center font-bold text-3xl md:text-xl">
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

      {/* Bouton de changement de langue */}
      <ul className="ml-4">
        <li>
          <button
            id="toggle-lang"
            className="btn btn-ghost cursor-pointer"
            onClick={toggleLanguage}
          >
            {toggleBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
