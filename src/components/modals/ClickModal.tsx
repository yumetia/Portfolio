// components/ClickModal.tsx
import { useLanguage } from "@context/LanguageContext";
interface ClickModalProps {
  isVisible: boolean;
  message?: string;
  position?: { x: number; y: number };
}

function ClickModal({ isVisible }: ClickModalProps) {
  if (!isVisible) return null;
  const language = useLanguage().language

  const messagesLang = {
    en: "Copied!",
    fr: "Copié!",
    de: "Kopiert!",
    ja: "コピーしました!"
    }
  return (
    <div
      className="alert alert-success fixed z-50 w-auto shadow-lg animate-bounce
      left-40 bottom-50
      md:left-10
      md:bottom-10
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="font-semibold">{messagesLang[language]}</span>
    </div>
  );
}

export default ClickModal;
