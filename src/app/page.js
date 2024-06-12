"use client";

import HamburgerMenu from "./Component/HamburgerMenu";
import Navbar from "./Component/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Homepage from "./Component/Homepage";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="">
      <div className="hidden md:block lg:block">
        <Navbar />
      </div>

      <div className="block md:hidden lg:hidden">
        <HamburgerMenu navList={["HOME", "ABOUT", "SERVICES"]} />
      </div>
      <Homepage />
    </main>
  );
}
