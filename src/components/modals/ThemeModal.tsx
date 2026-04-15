import { useState, useRef, useEffect } from "react";
import languages from "@locales/languages";

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
     if (w < 640) return { x: 10, y: 160 }; // mobile
     if (w < 1024) return { x: w/2 + 50, y: 80 }; // tablet
     return { x: 1270, y: 90 }; // desktop
   }
  const [position, setPosition] = useState(getInitialPositions());

  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    // remember where inside the modal we clicked
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };
  const handleClose = ()=> {
    setPosition(getInitialPositions())
    onClose()
  }
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    globalThis.addEventListener("mousemove", handleMouseMove);
    globalThis.addEventListener("mouseup", handleMouseUp);
    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleTheme = (theme: string) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bg-primary rounded p-6 border select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
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
        onClick={handleClose}
      >
        <span>{modalClose}</span>
      </button>
    </div>
  );
};

export default ThemeModal;
