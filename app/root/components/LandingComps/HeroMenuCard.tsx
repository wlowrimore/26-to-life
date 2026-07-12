import React from "react";
import { Fade } from "react-awesome-reveal";
import { cardDetails } from "./contentData/card-details";
import Link from "next/link";
import MenuLinkBtn from "../ui/buttons/MenuLinkBtn";
import Image from "next/image";

export interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const HeroMenuCard: React.FC<{ card: Card }> = ({ card }) => {
  const { id, title, description, url } = card;
  const Details = cardDetails;

  return (
    // <Link href={url}>
    <Fade
      cascade
      direction={"down"}
      duration={1000}
      triggerOnce
      className="bg-white/70 text-black w-full rounded-lg shadow-lg p-4 my-4 flex flex-col justify-center mx-auto hover:bg-indigo-500/50 hover:text-white transition-colors duration-500 ease-in-out"
    >
      {Details.map((detail) => (
        <Link href={detail.url} key={detail.id}>
          <div>
            <div className="flex flex-col gap-2 py-2">
              <h2 className="flex text-2xl font-bold w-full leading-6">
                {detail.title}
              </h2>
              <div className="flex">
                <Image
                  src={detail.image}
                  alt="about us"
                  width={300}
                  height={300}
                  className="w-50 h-56 object-cover rounded-lg hover:scale-105 transition-scale duration-500 ease-in-out"
                />
                <p className="text-lg pl-3">{detail.description}</p>
              </div>
            </div>
            {/* <MenuLinkBtn link={detail.url} />{" "} */}
          </div>
        </Link>
      ))}
    </Fade>
    // </Link>
  );
};

export default HeroMenuCard;
