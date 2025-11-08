// context/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  toggleLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
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
