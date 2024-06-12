"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 350) {
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

  const handleScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-x-2 mt-24">
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
        <h1 className=" text-2xl lg:text-3xl font-bold uppercase">
          contact us
        </h1>
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
      </div>

      <footer className="flex flex-col md:flex-row  lg:flex-row gap-10 mt-16 px-5 lg:px-28">
        <div className="">
          <h1 className="text-3xl font-bold text-[#14279b]">Akeshya</h1>
          <p className="text-sm lg:text-lg lg:w-4/5 pt-3">
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-[#14279b]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p className="text-sm lg:text-lg lg:w-3/5">
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </p>
          </div>

          <div className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-[#14279b]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p className="text-sm lg:text-lg">info@akeshya.com</p>
          </div>

          <div className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8 text-[#14279b]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <p className="text-sm lg:text-lg">+91 94942 40922</p>
          </div>
        </div>
        <div>
          <form action="" className="flex flex-col space-y-4 pb-10">
            <input
              type="text"
              required
              className="border-2 outline-none py-4 px-3 lg:w-[400px]"
              placeholder="Your Name"
            />
            <input
              type="text"
              required
              className="border-2 outline-none py-4 px-3"
              placeholder="Your Email"
            />
            <input
              type="text"
              required
              className="border-2 outline-none py-4 px-3"
              placeholder="Subject"
            />
            <textarea
              name=""
              required
              id=""
              cols="30"
              rows="10"
              className="border-2 outline-none"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-center">
              <button className=" bg-[#14279b] rounded-full py-2 text-white w-48  ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </footer>

      <div className="flex items-center justify-between px-5 lg:px-28 shadow-lg border-2 rounded-md py-10">
        <p>
          © Copyright <span className="font-bold">Akeshya.</span> All Rights
          Reserved
        </p>

        <div>
          <ul className="flex flex-col lg:flex-row gap-x-5 text-[#14279b]">
            <li>Terms and conditions</li>
            <li>Refund policy</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {showScrollTop && (
          <button
            className="bg-[#14279b]  p-3 fixed -bottom-2 lg:bottom-0 right-5 lg:right-0  lg:mt-0 lg:m-4   rounded-lg"
            onClick={() => handleScrolltoTop()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-white"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
