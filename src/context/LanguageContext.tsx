// context/LanguageContext.tsx
import { createContext, useContext, useState } from "react";


export const Locales = ["en", "de", "fr","ja"] as const;
export type Locale = typeof Locales[number];


type LanguageContextType = {
  language: Locale,
  switchLanguage:(lang:Locale) =>void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  switchLanguage: (lang: Locale)=>{}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const savedLang: string = localStorage.getItem("lang")
  
  const [language, setLanguage] = useState(()=>{
    if (savedLang && Locales.includes(savedLang as any)) return savedLang as Locale;
    return "en";
  });

  const switchLanguage = (lang: Locale) => {

    localStorage.setItem("lang",lang)
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
