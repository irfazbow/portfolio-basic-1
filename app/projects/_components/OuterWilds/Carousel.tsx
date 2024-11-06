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
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from({ length: SLIDE_COUNT }, (_, i) => ({
    src: `/projects/owv-car${i}.webp`,
    alt: `Slide ${i}`,
  }));

  return (
    <>
      <EmblaParallaxCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
};

export default Carousel;
