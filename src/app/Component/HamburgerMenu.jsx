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
    <div className="flex z-10 relative justify-end">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
        aria-label="Toggle menu"
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
        <div className="fixed inset-0 bg-white bg-opacity-100 z-20">
          <div className="flex justify-end  p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-5 text-sm mt-5">
            {navList.map((item, index) => (
              <li
                key={index}
                className="flex justify-start pl-5 gap-5 font-semibold tracking-wide"
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
            <li>
              <button className="bg-[#14279b] ml-5 py-2 rounded-full font-semibold text-white w-80">
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
