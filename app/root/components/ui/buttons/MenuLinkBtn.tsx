import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MenuLinkBtn = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className=" flex items-center justify-center text-white hover:bg-purple-300/60 transition-colors duration-300 bg-sky-100 rounded-full"
    >
      <Image
        src="/logos/26_brand_logo.png"
        alt="26 Brand Logo"
        width={300}
        height={300}
        className="h-8 w-8 rounded-full p-1"
      />
      <h3 className="text-black">take me there</h3>
      <ChevronRight />
    </Link>
  );
};

export default MenuLinkBtn;
