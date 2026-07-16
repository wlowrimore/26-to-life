import React from "react";
import HeroMenuCard from "./HeroMenuCard";
import { Card } from "./HeroMenuCard";

const HeroMenu = () => {
  const card: Card = {
    id: 1,
    title: "Card Title",
    description: "This is a description of the card.",
    image: "/backgrounds/landing_bass.jpeg",
    url: "/card-link",
  };
  return (
    <main className="w-1/2 mx-auto h-screen md:w-full md:mx-6 grid grid-cols-1 md:grid-cols-2 md:gap-6">
      <HeroMenuCard card={card} />
    </main>
  );
};

export default HeroMenu;
