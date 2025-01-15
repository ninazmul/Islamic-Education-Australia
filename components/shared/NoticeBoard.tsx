"use client";

import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Notice {
  notice: string;
}

interface NoticeBoardProps {
  notices: Notice[];
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1 },
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
    <div className="flex flex-col items-center gap-3 md:gap-6 p-8 md:p-10 lg:p-20 max-w-5xl mx-auto">
      <h1 className="h2-bold text-center">
        Volunteers <span className="text-primary-500">Notice Board</span>
      </h1>
      <div
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="keen-slider relative overflow-hidden"
      >
        {notices.map((notice, index) => (
          <div
            key={index}
            className="keen-slider__slide p-6 flex justify-center items-center text-center"
          >
            <div className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center shadow-md rounded-lg p-4 lg:p-6 border border-blue-200 max-w-xl">
              <p className="text-lg lg:text-xl font-serif text-gray-800 leading-relaxed line-clamp-3">
                &quot;
                {notice.notice
                  ? notice.notice
                  : "Welcome to the Volunteers Notice Board. All important announcements, updates, and notices for our organization’s volunteers will be shared here. Please check this space regularly to stay informed."}
                &quot;
              </p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="p-medium-12 md:p-medium-16 text-primary-500 text-center">
        Hover over the notice to pause the carousel.
      </h3>
    </div>
  );
};

export default NoticeBoard;
