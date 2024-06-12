import React from "react";
import Card from "./Card";

const Features = () => {
  const featureList = [
    { img: "/dashboard (1).png", title: "Web design" },
    { img: "/code.png", title: "Development" },
    { img: "/user.png", title: "Branding" },
    { img: "/play.png", title: "Media buying" },
    { img: "/search.png", title: "Search engine" },
    { img: "/clipboard.png", title: "Brand strategy" },
    { img: "/placeholder.png", title: "Local search marketing" },
    { img: "/growth.png", title: "Lead Tracking & Management" },
    { img: "/contacts.png", title: "Contact management" },
    { img: "/playlist.png", title: "Media management" },
    { img: "/clipboard.png", title: "Social scheduling" },
    { img: "/digital-campaign.png", title: "Ad retargeting" },
  ];

  return (
    <div data-aos="fade-up">
      <div className="flex items-center justify-center gap-x-2 mt-24 px-20 lg:px-0 ">
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
        <h1 className=" text-2xl lg:text-3xl font-bold uppercase">OUR CORE FEATURES</h1>
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
      </div>
      <p className="text-center px-5 md:px-10 lg:px-24 mt-6 leading-7 text-base lg:text-lg">
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 px-5 md:px-14 lg:px-28 mt-20">
        {featureList?.map((list, index) => {
          return <Card classes={"bg-[#f6f6f6] p-6 rounded-md hover:bg-blue-100 ease-in-out duration-300"}>
                   <div className="flex gap-x-5 items-center">
                   <img src={list?.img} alt="" className="h-6 lg:h-8" loading="lazy"/>
                    <h4 className="font-bold text-base lg:text-lg">{list?.title}</h4>
                   </div>
          </Card>;
        })}
      </div>
    </div>
  );
};

export default Features;
