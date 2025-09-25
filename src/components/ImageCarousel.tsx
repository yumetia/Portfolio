// components/ImageCarousel.tsx
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;       // default: true
  interval?: number;        // ms, default: 3500
  loop?: boolean;           // default: true
  showIndicators?: boolean; // default: true
  showArrows?: boolean;     // default: true
};

export default function ImageCarousel({
  images,
  alt,
  className,
  autoPlay = true,
  interval = 3500,
  loop = true,
  showIndicators = true,
  showArrows = true,
}: Props) {
  const count = images?.length ?? 0;
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // swipe (pointer)
  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dxRef = useRef(0);

  // autoplay
  const autoplayTimer = useRef<number | null>(null);

  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const clamp = (i: number) => (loop ? (i + count) % count : Math.max(0, Math.min(count - 1, i)));

  const prev = () => {
    if (isAnimating || count <= 1) return;
    setAnimating(true);
    setIndex((i) => clamp(i - 1));
  };

  const next = () => {
    if (isAnimating || count <= 1) return;
    setAnimating(true);
    setIndex((i) => clamp(i + 1));
  };


  useEffect(() => {
    if (!isAnimating) return;
    const t = window.setTimeout(() => setAnimating(false), 140);
    return () => window.clearTimeout(t);
  }, [isAnimating]);

  useEffect(() => {
    if (!autoPlay || prefersReduced || isPaused || count <= 1) return;
    autoplayTimer.current = window.setInterval(() => {
      next();
    }, Math.max(1500, interval)) as unknown as number;
    return () => {
      if (autoplayTimer.current) {
        window.clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    };
  }, [autoPlay, prefersReduced, isPaused, interval, count]);

  useEffect(() => {
    const onVis = () => setPaused(document.visibilityState !== "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);


  const SWIPE_THRESHOLD = 40;

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button,[role='tab']")) return;
    isDragging.current = true;
    dxRef.current = 0;
    startX.current = e.clientX;
    lastX.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;
    lastX.current = e.clientX;
    dxRef.current = (lastX.current ?? 0) - (startX.current ?? 0);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
    isDragging.current = false;
    const dx = dxRef.current;
    dxRef.current = 0;
    startX.current = null;
    lastX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      dx > 0 ? prev() : next();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "ArrowRight":
      case "PageDown":
        e.preventDefault();
        next();
        break;
      case "Home":
        e.preventDefault();
        setIndex(0);
        break;
      case "End":
        e.preventDefault();
        setIndex(count - 1);
        break;
    }
  };

  const a11yLabel = count ? `Slide ${index + 1} of ${count}` : "No image";

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-96 rounded-xl overflow-hidden select-none ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >

      {count > 0 ? (
        <img
          src={images[index]}
          alt={`${alt} — ${a11yLabel}`}
          className="w-full h-full object-contain bg-base-2 00 transition-transform duration-150"
          loading="lazy"
          decoding="async"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />
      ) : (
        <div className="w-full h-full grid place-items-center bg-base-200 text-base-content/60">
          No image
        </div>
      )}

      <div className="sr-only" aria-live="polite">
        {a11yLabel}
      </div>


      {count > 1 && (
        <div className="absolute inset-0 grid grid-cols-2 z-10">
          <button
            type="button"
            aria-label="Previous slide area"
            className="h-full w-full focus:outline-none"
            onClick={(e) => {
              if (Math.abs(dxRef.current) < 5) prev();
              dxRef.current = 0;
            }}
          />
          <button
            type="button"
            aria-label="Next slide area"
            className="h-full w-full focus:outline-none"
            onClick={(e) => {
              if (Math.abs(dxRef.current) < 5) next();
              dxRef.current = 0;
            }}
          />
        </div>
      )}

      {/* flèches visibles (au-dessus des zones) */}
      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            className="btn btn-circle btn-sm md:btn-md absolute left-2 top-1/2 -translate-y-1/2 shadow-md focus:outline-none focus:ring focus:ring-primary/50 z-40"
            onClick={prev}
            aria-label="Previous slide"
            disabled={isAnimating || (!loop && index === 0)}
          >
            ❮
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm md:btn-md absolute right-2 top-1/2 -translate-y-1/2 shadow-md focus:outline-none focus:ring focus:ring-primary/50 z-40"
            onClick={next}
            aria-label="Next slide"
            disabled={isAnimating || (!loop && index === count - 1)}
          >
            ❯
          </button>
        </>
      )}

      {/* puces (au-dessus des zones) */}
      {showIndicators && count > 1 && (
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-base-100/70 backdrop-blur px-2 py-1 rounded-full z-30"
          role="tablist"
          aria-label="Slides"
        >
          {images.map((_, i) => {
            const selected = i === index;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={selected}
                aria-label={`Go to slide ${i + 1}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-transform ${
                  selected ? "bg-primary scale-110" : "bg-base-content/40 hover:bg-base-content/60"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
