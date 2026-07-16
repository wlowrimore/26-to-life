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
    <main className="max-w-7xl w-7xl h-[80vh]">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full md:w-full bg-[url('/backgrounds/laid_down_body.jpeg')] bg-cover bg-center sm:justify-start sm:pt-8 sm:px-6 lg:px-8 dark:bg-[url('/backgrounds/laid_down_body.jpeg')]sm:items-start opacity-75 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out"
      >
        <div className='absolute top-3 right-3 bg-[url("/logos/26_brand_logo.png")] bg-cover bg-center h-20 w-20 opacity-60'></div>
        {isMenuRevealed && (
          <div className="absolute inset-2 flex items-center justify-center">
            <HeroMenu />
          </div>
        )}
      </div>
    </main>
  );
};

export default Hero;
