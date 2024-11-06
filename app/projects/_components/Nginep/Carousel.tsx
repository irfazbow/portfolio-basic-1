import EmblaParallaxCarousel from "@/components/ParallaxCarousel/EmblaParallaxCarousel";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

const Carousel = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  };
  const SLIDE_COUNT = 11;
  const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, i) => ({
    src: `/projects/nginep-car${i}.webp`,
    alt: `Slide ${i}`,
  }));

  return (
    <>
      <div className="flex justify-center items-center text-lg font-light text-primary-orange">
        A glimpse of the project
      </div>
      <EmblaParallaxCarousel slides={SLIDES} options={OPTIONS} className="p-2 border-2 border-orange-300" />
    </>
  );
};

export default Carousel;