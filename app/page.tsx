import Image from "next/image";

import Hero from "./root/components/LandingComps/Hero";

export default function Home() {
  return (
    <main className="grid grid-cols-2 bg-white dark:bg-black h-screen p-24 m-6">
      <div className="col-span-1">
        <h1 className="text-6xl font-bold text-black dark:text-white">
          <div className="max-w-[20rem]">
            <Image
              src="/logos/company_logo.jpeg"
              alt="Company Logo"
              width={1000}
              height={1000}
              className="max-h-[7rem]"
            />
          </div>
        </h1>
      </div>
      <Hero />
    </main>
  );
}
