import languages from "@locales/languages";
type ThemeModalProps = {
    themes: string[];
    language: keyof typeof languages;
    isVisible?: boolean;
    onClose: () => void;
};
declare const ThemeModal: ({ themes, language, isVisible, onClose }: ThemeModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default ThemeModal;
