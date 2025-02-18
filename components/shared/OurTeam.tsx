"use client";

import Image from "next/image";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useState } from "react";

const teamMembers = [
  {
    name: "Mizan Howlader",
    role: "Finance & Community Leader",
    image: "/assets/images/Teams/MH IEA Profile Photo 3.png",
    socials: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Sheikh Youssef Hassan",
    role: "Educator & Family Counsellor",
    image: "/assets/images/Teams/Sheikh Youssef Hassan.jpg",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "AKM Moniruzzaman",
    role: "IT Specialist & Islamic Finance Advocate",
    image: "/assets/images/Teams/AK Moniruzzaman.jpg",
    socials: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  // Add more team members here
];

const OurTeam = () => {
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
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
    <div className="relative h-auto overflow-hidden">
      <div className="p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Our Team members
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Team</span>
          </h1>
        </div>
      </div>
      <div
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="keen-slider py-10"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center text-center space-y-4 p-4 shadow-lg rounded-md"
          >
            <div className="flex justify-center w-full relative">
              <Image
                src={member.image}
                width={500}
                height={500}
                alt="Islamic Education Australia logo"
                className="w-full md:w-2/3 z-10"
              />
              <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[12%] -top-[8%] md:-top-[10%] lg:-top-[9%] rounded-none p-10 bg-yellow-400 " />
              <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[12%] -bottom-[8%] md:-bottom-[9%] lg:-bottom-[8%] rounded-none p-10 bg-yellow-400 " />
            </div>
            <div className="pt-4">
              <h2 className="font-bold text-lg">{member.name}</h2>
              <h3 className="text-primary-500">{member.role}</h3>
              <div className="flex items-center justify-center gap-4 py-4">
                <Link href={member.socials.facebook} target="_blank">
                  <ImFacebook className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={member.socials.twitter} target="_blank">
                  <FaXTwitter className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
                <Link href={member.socials.linkedin} target="_blank">
                  <FaLinkedinIn className="size-8 bg-primary-500 p-2 rounded-md text-white hover:text-black shadow hover:bg-yellow-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
