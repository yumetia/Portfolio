import { Locale } from "@context/LanguageContext";
type LangModalProps = {
    locales: readonly Locale[];
    currentLang: string;
    isVisible?: boolean;
    onClose: () => void;
};
declare const LangModal: ({ locales, currentLang, isVisible, onClose }: LangModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default LangModal;
