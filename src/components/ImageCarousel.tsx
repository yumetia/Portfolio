// src/components/ImageCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCards,
} from "swiper/modules";

// CSS Swiper (voir note en bas si TS râle sur ces imports)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";


import { CornerDownLeft, CornerDownRight } from "lucide-react";

type EffectName = "slide" | "fade" | "coverflow" | "cards";

export interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  effect?: EffectName;

  showPagination?: boolean;
  showNavigation?: boolean;

  heightClass?: string;

  roundedClass?: string;

  alts?: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt = "slide image",
  className = "",
  autoPlay = true,
  interval = 4000,
  effect = "slide",
  heightClass = "h-64 md:h-80",
  roundedClass = "rounded-xl",
  alts,
}) => {
  if (!images || images.length === 0) {
    return (
      <div
        className={`${className} ${heightClass} ${roundedClass} bg-base-200 grid place-items-center text-base-content/60`}
      >
        No image
      </div>
    );
  }

  return (
    <div className={className}>
      <Swiper
        modules={[Autoplay,Pagination,Navigation,EffectCards]}
        grabCursor
        // Effets
        effect={effect === "slide" ? undefined : effect}
        fadeEffect={effect === "fade" ? { crossFade: true } : undefined}
        navigation={{
          prevEl:".custom-prev",
          nextEl:".custom-next",
        }}
        // Autoplay
        autoplay={
          autoPlay
            ? { delay: interval, disableOnInteraction: false, pauseOnMouseEnter: true }
            : false
        }
        className={`${roundedClass} overflow-hidden`}

      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={`h-full`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alts?.[i] ?? alt}
                className="mx-auto "
                loading="lazy"
                draggable={false}
              />
            </div>
          </SwiperSlide>
          
        ))}
        {/* buttons */}
          <button className="btn custom-prev absolute 
          left-5 top-1/2 z-10
          [&.swiper-button-disabled]:hidden">
            <CornerDownLeft />
          </button>

          <button className="btn custom-next absolute 
          right-5 top-1/2 z-10
          [&.swiper-button-disabled]:hidden">
            <CornerDownRight />
          </button>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
