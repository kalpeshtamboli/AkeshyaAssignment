import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className=" flex flex-col-reverse md:items-center md:flex-row lg:flex lg:flex-row justify-around px-4 md:px-6  lg:px-24 mt-20 lg:mt-10">
        <div className="" data-aos="fade-up">
          <div className=" text-[26px] md:text-4xl md:w-4/5  lg:text-5xl font-semibold text-[#14279b] lg:w-3/5 mt-16 leading-tight">
            Grow your business with Akeshya
          </div>
          <p className="text-lg w-[370px] md:w-4/5   lg:text-3xl lg:w-4/6 mt-5">
            We are team of talented website designers, developers & digital
            marketeers
          </p>
          <div className="mt-7 lg:mt-14">
            <button className="hover:bg-[#14279b] hover:text-white text-[#14279b] lg:text-lg border-2 border-[#14279b] px-8 py-2.5 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="hero-img.png" alt="" className="w-[20rem] md:w-[23rem]  lg:w-[40rem]" data-aos="fade-left" loading="lazy"  /> 
        </div>
      </div>
      

      <div
        className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-center place-items-center mt-24 bg-[#f3f9fd] py-5"
        data-aos="fade-right"
      >
        <img src="client-1.png" alt="" className="w-16" loading="lazy" />
        <img src="client-2.png" alt="" className="w-16" loading="lazy" />
        <img src="client-3.png" alt="" className="w-16" loading="lazy" />
        <img src="client-4.png" alt="" className="w-16" loading="lazy" />
        <img src="client-5.png" alt="" className="w-16" loading="lazy" />
        <img src="client-6.png" alt="" className="w-16" loading="lazy" />
      </div>
    </div>
  );
};

export default Header;
