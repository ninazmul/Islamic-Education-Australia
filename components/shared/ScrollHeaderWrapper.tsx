"use client";

import { useState, useEffect } from "react";

export default function ScrollHeaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-[99999] ${
        showHeader
          ? "transform translate-y-0 shadow-black/20 shadow-lg"
          : "transform -translate-y-full"
      }`}
      style={{ height: "82px" }} 
    >
      {children}
    </div>
  );
}
