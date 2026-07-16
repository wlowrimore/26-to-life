import Image from "next/image";

import Hero from "./root/components/LandingComps/Hero";

export default function Home() {
  return (
    <main className="w-1/2 md:w-full flex flex-col bg-black items-center">
      <Hero />
    </main>
  );
}
