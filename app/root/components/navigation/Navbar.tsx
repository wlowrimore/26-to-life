import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-tr  from-transparent via-transparent to-white/30 flex justify-between items-center border-b border-black/10 ">
      <Link
        href="/"
        className="max-w-[20rem] hover:opacity-70 transition-opacity duration-500 ease-in-out"
      >
        <Image
          src="/logos/company_logo_1.png"
          alt="Company Logo"
          width={1000}
          height={1000}
          className="max-h-36"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
