import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
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
declare const ImageCarousel: React.FC<ImageCarouselProps>;
export default ImageCarousel;
