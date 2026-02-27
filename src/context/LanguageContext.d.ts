export declare const Locales: readonly ["en", "de", "fr", "ja"];
export type Locale = typeof Locales[number];
type LanguageContextType = {
    language: Locale;
    switchLanguage: (lang: Locale) => void;
};
export declare function LanguageProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useLanguage(): LanguageContextType;
export {};
