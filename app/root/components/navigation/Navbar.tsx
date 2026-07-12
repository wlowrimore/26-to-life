import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-linear-to-tr  from-transparent via-transparent to-white/30 flex justify-between items-center border-b border-black/10 ">
      <div className="max-w-[20rem]">
        <Image
          src="/logos/company_logo_1.png"
          alt="Company Logo"
          width={1000}
          height={1000}
          className="max-h-36"
        />
      </div>
    </nav>
  );
};

export default Navbar;
