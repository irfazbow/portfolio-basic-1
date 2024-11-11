import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full  bg-gradient-to-br from-background/50 to-background">
      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-10 py-16 sm:py-20">
        <div className="absolute hidden sm:block right-0 top-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] opacity-90 pointer-events-none">
          <Image
            src="/about/hero-background-avatar.svg"
            alt=""
            width={1000}
            height={1000}
            className="object-contain"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          <div className="relative mx-auto sm:mx-0 h-32 w-32 rounded-full overflow-hidden ring-2 ring-primary-orange/50 shadow-lg">
            <Image
              src="/about/hero-avatar.jpg"
              alt="Irfan's profile picture"
              width={1000}
              height={1000}
              className="object-cover object-center"
              priority
            />
          </div>

          <h1 className="text-xl sm:text-2xl font-medium mx-auto sm:mx-0">
            Hi, there! It's <span className="text-primary-orange">Irfan</span>
          </h1>

          <p className="text-sm sm:text-base text-justify leading-relaxed max-w-4xl">
            <span className="text-primary-orange">Tinkering</span> with gadgets
            has been Irfan's passion since junior high school. From{" "}
            <span className="text-primary-orange">
              dismantling keyboards, mice, robots, computers, and laptops
            </span>{" "}
            to solving their technical issues, his natural{" "}
            <span className="text-primary-orange">curiosity</span> and
            dedication to understanding how things work has shaped him into a
            skilled <span className="text-primary-orange">problem solver</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
