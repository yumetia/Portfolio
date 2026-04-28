import { useLanguage } from "@context/LanguageContext";
import languages from "@locales/languages";
import { Locale } from "@context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type LangModalProps = {
  locales: readonly Locale[];
  currentLang: string;
  isVisible?: boolean;
  onClose: () => void;
};

// not necessary as an HELPER, so putting it here for now..
const mappingLang = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  ja: "日本語",
};

const LangModal = ({
  locales,
  currentLang,
  isVisible = false,
  onClose,
}: LangModalProps) => {
  const { switchLanguage, language } = useLanguage();
  const { langBtn, modalClose } = languages[language].navbar;

  // function returning the initial state value so we can actually reset
  const getInitialPositions = () => {
    const w = window.innerWidth;
    if (w < 640) return { x: 54, y: 17 };   // ~mobile
    if (w < 1024) return { x: 78, y: 10 }; // ~tablet
    return { x: 90, y: 12 };                // desktop
  };

  const [position, setPosition] = useState(getInitialPositions);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - (position.x / 100) * window.innerWidth,
      y: e.clientY - (position.y / 100) * window.innerHeight,
    };
  };

  // reset position every time the modal closes
  useEffect(() => {
    if (!isVisible) {
      setPosition(getInitialPositions());
    }
  }, [isVisible]);

  // drag listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: ((e.clientX - offset.current.x) / window.innerWidth) * 100,
        y: ((e.clientY - offset.current.y) / window.innerHeight) * 100,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  if (!isVisible) return null;

  return createPortal(
    <div
      className="fixed bg-secondary rounded p-6 border select-none z-[999]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      {/* drag handle */}
      <div
        onMouseDown={handleMouseDown}
        className="mb-4 flex justify-center cursor-grab active:cursor-grabbing"
      >
        <h2 className="text-center text-neutral font-bold">{langBtn}</h2>
      </div>

      {/* rendering lang buttons */}
      {locales.map((lang, key) => {
        const isBetaLang = languages[lang].isBetaLang;
        return (
          <div key={key} className="flex mb-2">
            <button
              className="btn rounded-xl"
              onClick={() => switchLanguage(lang)}
            >
              {isBetaLang ? `${mappingLang[lang]} (beta)` : mappingLang[lang]}
            </button>
          </div>
        );
      })}

      {/* close modal button */}
      <button
        className="mt-2 btn btn-outline hover:bg-accent text-neutral rounded"
        onClick={onClose}
      >
        <span>{modalClose}</span>
      </button>
    </div>,
    document.body,
  );
};

export default LangModal;
