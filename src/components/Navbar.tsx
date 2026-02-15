import { useEffect, useState } from "react";
import { Container, Languages, Palette } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { home, about, skills,experiences, projects, contact, themeBtn,toggleBtn } =
    languages[language].navbar;

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // modal change theme

  const [themeModal,setThemeModal] = useState(false);

  const themes = [
    "emerald",
    "dracula",
    "cyberpunk",
    "halloween",
  ]
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

  
  const renderModalTheme = ()=>{
    themeModal===false? setThemeModal(true): setThemeModal(false);
  }

  // handles functions
  const handleCloseModal = () =>{
    setThemeModal(false);
  }

  const handleTheme = (theme: string) =>{
    // 1) get the current theme
    // 2) change with the theme pressed
    // 3) storing in local storage
    
    // 1 & 2)
    const html = document.documentElement;
    html.dataset.theme = theme;

    // 3)
    localStorage.setItem("theme",theme);
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
        bg-base-300/80 backdrop-blur-md border-b border-base-200`}
    >
      <div className="flex flex-col items-center p-4 md:justify-between md:flex-row">
        <a href="/" className="flex items-center font-bold text-3xl md:text-xl">
          <Container className="text-accent" />
          <span className="text-primary p-1"> Yumetia</span>
        </a>

        <ul className="hidden md:flex space-x-4">
          <li><a href="#Home" className="btn btn-sm btn-ghost text-sm">{home}</a></li>
          <li><a href="#About" className="btn btn-sm btn-ghost text-sm">{about}</a></li>
          <li><a href="#Skills" className="btn btn-sm btn-ghost text-sm">{skills}</a></li>
          <li><a href="#Projects" className="btn btn-sm btn-ghost text-sm">{projects}</a></li>
          <li><a href="#Experiences" className="btn btn-sm btn-ghost text-sm">{experiences}</a></li>
          <li><a href="#Contact" className="btn btn-sm btn-ghost text-sm">{contact}</a></li>
        </ul>

        <div className="flex gap-2">
          {/* theme selector button*/}
          <button
            id="toggle-lang"
            onClick={()=>{renderModalTheme()}}
            className="btn btn-outline btn-sm rounded-full px-4 gap-2"
          >
            <Palette className="w-4 h-4" />
            <span>{themeBtn}</span>
          </button>


          {themeModal===true &&(
            <div className="absolute bg-primary rounded p-6 top-20">
              {/* modal title */}
              <div className="mb-4 flex justify-center">
                <h2 className="text-center text-neutral font-bold">{themeBtn}</h2>
              </div>

              {/* rendering themes button */}
              {themes.map((theme,key)=>(
                <div key={key} className="flex mb-2 ">
                  <button className="btn" onClick={()=>{handleTheme(theme)}}>
                    {theme}
                  </button>
                </div>
              ))}

              {/* close modal button */}
              <button 
                className="mt-2 btn btn-outline hover:bg-accent text-neutral"
                onClick={()=>{handleCloseModal()}}
              >
                <span>{language === "fr" ? "Fermer" : "Close"}</span>
              </button>
            </div>
          )}



          {/* toggle lang button */}
          <button
            id="toggle-lang"
            onClick={toggleLanguage}
            className="btn btn-outline btn-sm rounded-full px-4 gap-2"
          >
            <Languages className="w-4 h-4" />
            <span>{toggleBtn}</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
