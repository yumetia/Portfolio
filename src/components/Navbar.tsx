import { useEffect, useState } from "react";
import { Container, Languages, Palette } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import languages from "../locales/languages";

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


  const { language, toggleLanguage } = useLanguage();
  const { home, about, skills, experiences, projects, contact, themeBtn,toggleBtn } = languages[language].navbar;

  // navLinkClass const
  const navLinkClass = "btn btn-sm btn-ghost text-lg";

  // modal change theme
  const [themeModal,setThemeModal] = useState(false);

  const themes = [
    "emerald",
    "dracula",
    "cyberpunk",
    "halloween",
  ]

  
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
        <a href="/" className="flex items-center font-bold text-3xl md:text-xl lg:text-2xl">
          <Container className="text-accent lg:size-7" />
          <p className="p-1"> Yumetia</p>
        </a>

        <ul className="hidden lg:flex space-x-4">
          <li><a href="#Home" className={navLinkClass}>{home}</a></li>
          <li><a href="#About" className={navLinkClass}>{about}</a></li>
          <li><a href="#Skills" className={navLinkClass}>{skills}</a></li>
          <li><a href="#Projects" className={navLinkClass}>{projects}</a></li>
          <li><a href="#Experiences" className={navLinkClass}>{experiences}</a></li>
          <li><a href="#Contact" className={navLinkClass}>{contact}</a></li>
        </ul>

        <div className="flex gap-10 mt-5 
        md:mt-0
        lg:gap-2
        ">
           {/* theme selector button*/}
          <button
            onClick={()=>{renderModalTheme()}}
            className="btn btn-outline rounded-full"
          >
            <Palette className="size-4
            lg:size-5" />
            <span>{themeBtn}</span>
          </button>

            {/* toggle lang button */}
          <button
            id="toggle-lang"
            onClick={toggleLanguage}
            className="btn btn-outline rounded-full"
          >
            <Languages className="size-4 
            lg:size-5" />
            <span>{toggleBtn}</span>
          </button>
        </div>

        {/* theme modal */}
         {themeModal===true &&(
            <div className="absolute top-40 right-40 
            sm:right-70 md:top-20 md:right-30
            bg-primary rounded p-6
            ">
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

      </div>
    </div>
  );
};

export default Navbar;
