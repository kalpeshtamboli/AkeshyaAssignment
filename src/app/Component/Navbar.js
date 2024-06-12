"use client";
import Image from 'next/image'

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center px-20 bg-white py-2 ${
        showScrollTop
          ? "shadow-xl fixed top-0 w-full z-10 scroll-smooth"
          : "shadow-none"
      }`}
    >
      <div className="flex items-center">
        <Image src="/logo.png" alt="" width={100} height={100} loading="lazy" />
        <h1 className="uppercase text-3xl text-[#14279b] font-bold">akeshya</h1>
      </div>

      <ul className="flex gap-8 text-lg">
        <li className="text-blue-800">Home</li>
        <li>About</li>
        <li>Services</li>
        <li className="-mt-2">
          <button className="bg-[#14279b] text-white px-7 py-1.5 rounded-full">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
