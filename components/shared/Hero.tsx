"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Banner {
  title: string;
  image: string;
}

interface HeroProps {
  banners: Banner[];
}

const Hero: React.FC<HeroProps> = ({ banners }) => {
  const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
    const [sliderRef, sliderInstanceRef] = useKeenSlider({
      loop: true,
      mode: "free-snap",
      slides: { perView: 1},
      created() {
        startAutoplay();
      },
      destroyed() {
        stopAutoplay();
      },
    });
  
    const startAutoplay = () => {
      stopAutoplay();
      timerRef.current = setInterval(() => {
        if (!isPaused && sliderInstanceRef.current) {
          sliderInstanceRef.current.next();
        }
      }, 3000);
    };
  
    const stopAutoplay = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
  
    const handleMouseLeave = () => {
      setIsPaused(false);
    };
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1070px] md:h-[1030px] lg:h-[680px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-4 md:p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2">
          <div
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="keen-slider py-10"
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center lg:p-4 "
              >
                <div className="flex flex-col items-center gap-4 w-full lg:backdrop-blur-md lg:bg-white lg:bg-opacity-20 lg:rounded-md">
                  <Image
                    src={banner.image}
                    width={500}
                    height={500}
                    alt="Islamic Education Australia Ltd logo"
                    className="animate-float w-full lg:rounded-t-md"
                  />
                  <i className="font-serif font-semibold text-blue-900 line-clamp-2 px-2 py-1 lg:px-4 lg:py-3">
                    &quot;{banner.title}&quot;
                  </i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="h1-bold">
            Empowering Future Leaders through{" "}
            <span className="text-primary-500">Faith and Education</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20">
            At Islamic Education Australia, our vision is to be a leading force
            in shaping a generation of knowledgeable, compassionate, and
            ethically grounded individuals who embody the values of Islam in
            their daily lives. We aim to create an inclusive educational
            environment that not only imparts academic knowledge but also
            instils a strong sense of spiritual and moral responsibility.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Button className="rounded-md bg-primary-500 text-white font-bold px-6 py-2 hover:bg-yellow-400 flex items-center gap-2">
              Learn More
            </Button>
            <Button className="rounded-md bg-yellow-400 text-primary-900 font-bold px-6 py-2 hover:bg-primary-500 flex items-center gap-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 top-[90%] md:top-[85%] lg:-top-20 rounded-full p-24 md:p-30 bg-primary-500 lg:bg-yellow-400 " />
      <div className="absolute top-0 left-0 w-full h-96 md:h-[550px] lg:left-0 lg:w-64 bg-yellow-400 lg:min-h-screen" />
    </div>
  );
};

export default Hero;
