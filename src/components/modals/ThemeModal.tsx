import { useState, useRef, useEffect } from "react";
import languages from "@locales/languages";
import { createPortal } from "react-dom";

type ThemeModalProps = {
  themes: string[];
  language: keyof typeof languages;
  isVisible?: boolean;
  onClose: () => void;
};

const ThemeModal = ({
  themes,
  language,
  isVisible = false,
  onClose,
}: ThemeModalProps) => {

  const { themeBtn, modalClose } = languages[language].navbar;

  // function returning the initial state value so we can actually reset
  const getInitialPositions = () => {
    const w = window.innerWidth;
    if (w < 640) return { x: 3, y: 17 }; // ~mobile
    if (w < 1024) return { x: 57, y: 10 }; // ~tablet
    return { x: 80, y: 9 }; // desktop
  };
  const [position, setPosition] = useState(getInitialPositions());

  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    // remember where inside the modal we clicked
    offset.current = {
      x: e.clientX - (position.x / 100) * window.innerWidth,
      y: e.clientY - (position.y / 100) * window.innerHeight,
    };
  };
  useEffect(() => {
    if (!isVisible){
      setPosition(getInitialPositions());
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: ((e.clientX - offset.current.x) / window.innerWidth) * 100,
        y: ((e.clientY - offset.current.y) / window.innerHeight) * 100,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    globalThis.addEventListener("mousemove", handleMouseMove);
    globalThis.addEventListener("mouseup", handleMouseUp);
    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging,isVisible]);

  const handleTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };

  if (!isVisible) return null;

  return createPortal(
    <div
      className="fixed bg-primary rounded p-6 border select-none z-[999]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      {/* drag handle — only this part starts a drag */}
      <div
        onMouseDown={handleMouseDown}
        className="mb-4 flex justify-center cursor-grab active:cursor-grabbing"
      >
        <h2 className="text-center text-neutral font-bold">{themeBtn}</h2>
      </div>

      {themes.map((theme, key) => (
        <div key={key} className="flex mb-2">
          <button className="btn rounded-xl" onClick={() => handleTheme(theme)}>
            {theme}
          </button>
        </div>
      ))}

      <button
        className="mt-2 btn btn-outline rounded hover:bg-accent text-neutral"
        onClick={onClose}
      >
        <span>{modalClose}</span>
      </button>
    </div>,
    document.body,
  );
};

export default ThemeModal;
