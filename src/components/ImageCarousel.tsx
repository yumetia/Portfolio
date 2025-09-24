import { useState, useRef } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ImageCarousel({ images, alt, className }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    touchStartX.current = null;
  };

  return (
    <div
      className={`relative w-full h-96 rounded-xl overflow-hidden ${className ?? ""}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <img
        src={images[index]}
        alt={alt}
        className="w-full h-full object-contain bg-base-200"
        loading="lazy"
      />

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="btn btn-circle btn-sm md:btn-md absolute left-2 top-1/2 -translate-y-1/2"
            onClick={prev}
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm md:btn-md absolute right-2 top-1/2 -translate-y-1/2"
            onClick={next}
            aria-label="Next image"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === index ? "bg-primary scale-110" : "bg-base-content/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
