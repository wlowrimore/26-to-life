import Image from "next/image";

import Hero from "./root/components/LandingComps/Hero";

export default function Home() {
  return (
    <main className="flex flex-col bg-black items-center">
      <Hero />
    </main>
  );
}
