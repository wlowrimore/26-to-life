"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TopNavbar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="w-full text-lg font-light tracking-wide flex items-center justify-center px-8 mx-auto">
      {currentPath === "/about" ? (
        <>
          <div className="w-full flex justify-evenly items-center mx-auto text-white">
            {/* <div className="h-0.5 bg-zinc-600 w-[20%]"></div> */}
            <Link
              href="/gallery_series"
              className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
            >
              Gallery Series
            </Link>
            <Link
              href="/lumber"
              className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
            >
              Lumber
            </Link>
            <Link
              href="/session_series"
              className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
            >
              Session Series
            </Link>
            <Link
              href="/stock"
              className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
            >
              Stock
            </Link>
            <Link
              href="/request"
              className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
            >
              Request Form
            </Link>
            {/* <div className="h-0.5 bg-zinc-600 w-[20%]"></div> */}
          </div>
        </>
      ) : currentPath !== "/about" ? (
        <div className="w-full flex justify-evenly items-center mx-auto text-white">
          <Link
            href="/about"
            className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/stock"
            className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
          >
            Stock
          </Link>
          <Link
            href="/request"
            className="flex w-full justify-center items-center px-2 rounded hover:bg-indigo-200/60 hover:text-black transition-colors duration-300 ease-in-out"
          >
            Request Form
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default TopNavbar;
