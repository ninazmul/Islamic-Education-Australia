import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center min-h-[950px] lg:min-h-[620px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src="/assets/images/Service/knowledge.png"
            width={500}
            height={500}
            alt="Islamic Education Australia Ltd logo"
            className="animate-float"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="h1-bold">
            Empowering Future Leaders through
            <br />
            <span className="text-primary-500">Faith and Education</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20">
            At Muslim College Sydney, we are dedicated to nurturing young minds
            and shaping the future by providing a strong foundation of academic
            excellence, Islamic values, and moral integrity. Join us in building
            a confident and balanced generation of Australian Muslims.
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
      <div className="absolute -right-20 top-[90%] md:top-[80%] lg:-top-20 rounded-full p-24 md:p-36 bg-primary-500 lg:bg-yellow-400 " />
      <div className="absolute top-0 left-0 w-full h-64 lg:left-0 lg:w-64 bg-yellow-400 lg:min-h-screen" />
    </div>
  );
};

export default Hero;
