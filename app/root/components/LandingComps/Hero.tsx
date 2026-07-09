"use client";

import { useState } from "react";
import HeroMenu from "./HeroMenu";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [isMenuRevealed, setIsMenuRevealed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsMenuRevealed(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsMenuRevealed(false);
  };

  return (
    <>
      <main
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative bg-[url('/backgrounds/laid_down_body.jpeg')] bg-cover bg-center sm:justify-start  sm:pt-8 sm:px-6 lg:px-8 dark:bg-[url('/backgrounds/laid_down_body.jpeg')] rounded-bl-4xl rounded-tr-4xl border-r border-white sm:items-start opacity-75"
      >
        {isMenuRevealed && (
          <div className="absolute inset-0 flex items-center">
            <HeroMenu />
          </div>
        )}
      </main>
    </>
  );
};

export default Hero;
