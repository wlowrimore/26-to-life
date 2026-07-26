"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dot } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <footer className="bg-black text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {pathname !== "/contact" ? (
        <Link
          href="/contact"
          className="flex justify-center items-center text-center text-sm mb-6"
        >
          <span className="w-fit py-1 px-2 text-black bg-indigo-300/60 rounded hover:bg-zinc-800 hover:text-white transition-colors duration-300 ease-in-out">
            Contact Us
          </span>
        </Link>
      ) : (
        <Link
          href="/"
          className="flex justify-center items-center text-center text-sm mb-6"
        >
          <span className="w-fit py-1 px-2 text-black bg-indigo-300/60 rounded hover:bg-zinc-800 hover:text-white transition-colors duration-300 ease-in-out">
            Home
          </span>
        </Link>
      )}
      <p className="flex justify-center items-center text-center text-sm">
        &copy; 2026 <Dot /> 26 Roots Hand-Crafted Instruments
        <Dot />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
