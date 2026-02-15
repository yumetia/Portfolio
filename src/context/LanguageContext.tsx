// context/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

type Language = "en"|"fr";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  toggleLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {

  // if lang saved set it as default
  // else, set eng
  const savedLang = localStorage.getItem("lang");
  
  const [language, setLanguage] = useState<Language>(()=>{
    if (savedLang=="en"||savedLang=="fr") return savedLang;
    return "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev==="en"? "fr": "en";
      // save the lang (localStorage)
      localStorage.setItem("lang",newLang); 
      return newLang;
    });
    
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
