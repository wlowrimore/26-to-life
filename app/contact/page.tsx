// import Link from "next/link";
// import React from "react";
// import {
//   PiFacebookLogoThin,
//   PiInstagramLogoThin,
//   PiLinkedinLogoThin,
//   PiXCircleThin,
//   PiYoutubeLogoThin,
// } from "react-icons/pi";
// import { RiFacebookBoxLine } from "react-icons/ri";

// const Contact = () => {
//   return (
//     <main className="w-full bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-3xl mx-auto">
//         {/* Main Header */}
//         <header className="mb-12 text-center sm:text-left">
//           <p className="text-lg font-light tracking-wide text-white mb-2">
//             If you have any questions or inquiries, please do not hesitate to
//             contact us!
//           </p>
//           <Link
//             href="mailto:Oj2dM@example.com"
//             className="text-indigo-200 text-[0.925rem] tracking-wide font-light"
//           >
//             info@26roots.com
//           </Link>
//           <div className="h-1 w-20 bg-zinc-700 mt-4 mb-24 mx-auto sm:mx-0"></div>
//         </header>

//         {/* Social Media Links */}
//         <section className="space-y-6 text-zinc-300 text-lg leading-relaxed">
//           <p className="text-3xl font-light tracking-wide text-zinc-300 mb-2 italic">
//             AND...
//           </p>
//           <p className="font-light tracking-wide text-lg text-white mb-6">
//             Be sure to follow us on social media to stay up to date on our
//             latest products and releases!
//           </p>
//           <div className="flex gap-8 items-center">
//             <Link
//               href="facebook@26roots.com"
//               className="text-white font-semibold"
//             >
//               <PiFacebookLogoThin
//                 className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
//                 size={28}
//               />
//             </Link>
//             <Link
//               href="facebook@26roots.com"
//               className="text-white font-semibold"
//             >
//               <PiInstagramLogoThin
//                 className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
//                 size={28}
//               />
//             </Link>
//             <Link
//               href="facebook@26roots.com"
//               className="text-white font-semibold"
//             >
//               <PiLinkedinLogoThin
//                 className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
//                 size={28}
//               />
//             </Link>
//             <Link
//               href="facebook@26roots.com"
//               className="text-white font-semibold"
//             >
//               <PiYoutubeLogoThin
//                 className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
//                 size={28}
//               />
//             </Link>
//             <Link
//               href="facebook@26roots.com"
//               className="text-white font-semibold"
//             >
//               <PiXCircleThin
//                 className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
//                 size={28}
//               />
//             </Link>
//           </div>
//           <div className="h-1 w-20 bg-zinc-700 mt-4 mb-24 mx-auto sm:mx-0"></div>
//         </section>
//         <section className="text-zinc-300 text-lg">
//           <p className="text-lg font-light tracking-wide text-zinc-300">
//             Get the inside scoop on our latest products and releases! It&apos;s
//             100% free!
//           </p>
//           <p className="w-fit font-light tracking-wide text-lg py-1 px-2 bg-indigo-300/60 rounded text-black mb-6 mt-4">
//             {/* modal trigger */}
//             Yes, Sign Me Up
//           </p>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Contact;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiXCircleThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";
import { InsideScoopModal } from "../root/components/ui/modals/InsideScoopModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Main Header */}
        <header className="mb-12 text-center sm:text-left">
          <p className="text-lg font-light tracking-wide text-white mb-2">
            If you have any questions or inquiries, please do not hesitate to
            contact us!
          </p>
          <Link
            href="mailto:info@26roots.com"
            className="text-indigo-200 text-[0.925rem] tracking-wide font-light"
          >
            info@26roots.com
          </Link>
          <div className="h-1 w-20 bg-zinc-700 mt-4 mb-24 mx-auto sm:mx-0"></div>
        </header>

        {/* Social Media Links */}
        <section className="space-y-6 text-zinc-300 text-lg leading-relaxed">
          <p className="text-3xl font-light tracking-wide text-zinc-300 mb-2 italic">
            AND...
          </p>
          <p className="font-light tracking-wide text-lg text-white mb-6">
            Be sure to follow us on social media to stay up to date on our
            latest products and releases!
          </p>
          <div className="flex gap-8 items-center">
            <Link
              href="https://facebook.com"
              className="text-white font-semibold"
            >
              <PiFacebookLogoThin
                className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
                size={28}
              />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-white font-semibold"
            >
              <PiInstagramLogoThin
                className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
                size={28}
              />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-white font-semibold"
            >
              <PiLinkedinLogoThin
                className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
                size={28}
              />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-white font-semibold"
            >
              <PiYoutubeLogoThin
                className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
                size={28}
              />
            </Link>
            <Link href="https://x.com" className="text-white font-semibold">
              <PiXCircleThin
                className="text-indigo-200 hover:scale-110 hover:text-zinc-500 transition transform duration-500 ease-in-out"
                size={28}
              />
            </Link>
          </div>
          <div className="h-1 w-20 bg-zinc-700 mt-4 mb-24 mx-auto sm:mx-0"></div>
        </section>

        {/* Modal Trigger Section */}
        <section className="text-zinc-300 text-lg">
          <p className="text-lg font-light tracking-wide text-zinc-300">
            Get the inside scoop on our latest products and releases! It&apos;s
            100% free!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-fit font-light tracking-wide text-lg py-2 px-4 bg-indigo-300/80 hover:bg-indigo-300 transition-colors rounded text-black mb-6 mt-4 cursor-pointer"
          >
            Yes, Sign Me Up
          </button>
        </section>
      </div>

      {/* Modal Component */}
      <InsideScoopModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default Contact;
