import { useEffect, useState } from "react";
import { Container, Languages, Palette } from "lucide-react";
import { useLanguage } from "@context/LanguageContext";
import languages from "@locales/languages";

import ThemeModal from "./modals/ThemeModal";
import LangModal from "./modals/LangModal";

import { Locales } from "@context/LanguageContext";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const { language } = useLanguage();
  const { home, about, skills, experiences, projects, contact, themeBtn,toggleBtn } = languages[language].navbar;

  // navLinkClass const
  const navLinkClass = "btn btn-sm btn-ghost text-lg";

  // modals visibility states

  const [themeModalVisible,setThemeModalVisible] = useState(false);
  const [langModalVisible,setLangModalVisible] = useState(false);

  const themes = [
    "emerald",
    "dracula",
    "cyberpunk",
    "halloween",
  ]

  // renders
  
  const renderThemeModal = () => {
    themeModalVisible===false? setThemeModalVisible(true): setThemeModalVisible(false);
  }

  const renderLangModal = () => {
    langModalVisible===false? setLangModalVisible(true): setLangModalVisible(false);
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        bg-base-300/80 backdrop-blur-md border-b border-base-200`}
    >
      <div className="flex flex-col items-center p-4 md:justify-between md:flex-row">
        <a href="/" className="flex items-center font-bold text-3xl md:text-xl lg:text-2xl">
          <Container className="text-accent lg:size-7" />
          <p className="ml-1 p-1">Yumetia</p>
        </a>

        <ul className="hidden lg:flex space-x-4">
          <li><a href="#Home" className={navLinkClass}>{home}</a></li>
          <li><a href="#About" className={navLinkClass}>{about}</a></li>
          <li><a href="#Skills" className={navLinkClass}>{skills}</a></li>
          <li><a href="#Projects" className={navLinkClass}>{projects}</a></li>
          <li><a href="#Experiences" className={navLinkClass}>{experiences}</a></li>
          <li><a href="#Contact" className={navLinkClass}>{contact}</a></li>
        </ul>

      {/* theme & lang buttons  */}
        <div className="flex gap-10 mt-5 
        md:mt-0
        lg:gap-2
        ">

        {/* theme selector button*/}
          <button
            onClick={()=>{renderThemeModal()}}
            className="btn btn-outline rounded-full"
          >
            <Palette className="size-4
            lg:size-5" />
            <span>{themeBtn}</span>
          </button>

        {/* toggle lang button */}
          <button
            id="toggle-lang"
            onClick={()=>renderLangModal()}
            className="btn btn-outline rounded-full"
          >
            <Languages className="size-4 
            lg:size-5" />
            <span>{toggleBtn}</span>
          </button>
        </div>

        <ThemeModal themes={themes}
          language={language}
          isVisible={themeModalVisible}
          onClose={()=>{setThemeModalVisible(false)}}
        />
        
        <LangModal
          locales={Locales}
          currentLang={language}
          isVisible={langModalVisible}
          onClose={()=>setLangModalVisible(false)}
        />


      </div>
    </div>
  );
};

export default Navbar;
