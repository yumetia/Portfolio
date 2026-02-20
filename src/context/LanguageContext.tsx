// context/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

export const LOCALES = ["en", "de", "fr", "jp"] as const;
export type Language = typeof LOCALES[number];

interface LanguageContextProps {
  language: Language;
  switchLanguage: (lang:Language) => void;toggleLanguage
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  switchLanguage: ()=>{}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  
  const [language, setLanguage] = useState<Language>(()=>{
    if (savedLang=="en"||savedLang=="fr") return savedLang;
    return "en";
  });

  const switchLanguage = (lang:string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
