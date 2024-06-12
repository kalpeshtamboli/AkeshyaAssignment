"use client";
import React, { useState, useEffect } from "react";

const HamburgerMenu = ({ navList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex  justify-end md:hidden">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0  bg-[white] bg-opacity-100">
          <div className="flex justify-end">
           

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-6"
              onClick={toggleMenu}
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex  flex-col gap-5 text-sm">
            {navList.map((item, index) => (
              <li
                key={index}
                className="flex justify-start pl-5 gap-5 font-semibold  tracking-wide"
              >
                <span
                  className={` ${
                    item === "HOME" ? "text-[#14279b]" : "text-black"
                  }`}
                >
                  {item}
                </span>
                
              </li>
            ))}
            <li className="">
              <button className="bg-[#14279b] ml-5   py-2 rounded-full  font-semibold text-white  w-80">
                CONTACT Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
