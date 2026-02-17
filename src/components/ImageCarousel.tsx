// src/components/ImageCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCards,
} from "swiper/modules";

// CSS Swiper (voir note en bas si TS râle sur ces imports)
import "swiper/css";
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
  interval?: number;
  effect?: EffectName;
  showNavigation?: boolean;

  heightClass?: string;

  roundedClass?: string;

  alts?: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt = "slide image",
  className = "",
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
        modules={[Navigation,EffectCards]}
        grabCursor
        navigation={{
          prevEl:".custom-prev",
          nextEl:".custom-next",
        }}
        className={`${roundedClass} overflow-hidden`}

      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={`flex justify-center w-full`}>
              <img
                src={src}
                alt={alts?.[i] ?? alt}
                className={`h-96 mx-auto object-cover ${roundedClass}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          </SwiperSlide>
          
        ))}
        {/* buttons */}
          <button className="btn bg-transparent custom-prev absolute 
          left-5 top-1/2 z-10
          lg:left-5
          p-0 md:p-2 lg:p-3
          [&.swiper-button-disabled]:hidden">
            <CornerDownLeft className="text-accent" />
          </button>

          <button className="btn bg-transparent custom-next absolute 
          right-5 top-1/2 z-10
          lg:right-5
          p-0 md:p-2 lg:p-3
          [&.swiper-button-disabled]:hidden">
            <CornerDownRight className="text-accent"/>
          </button>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
