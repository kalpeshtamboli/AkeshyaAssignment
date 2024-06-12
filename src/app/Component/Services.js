import React from "react";
import Card from "./Card";
const Services = () => {
  const servicesData = [
    {
      img: "/dribble-big-logo.png",
      title: "Design",
      content:
        "Design Our web design services can assist you in reclaiming your company is online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    },
    {
      img: "/google-docs.png",
      title: "Development",
      content:
        "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    },
    {
      img: "/globe-earth.png",
      title: "Marketing",
      content:
        "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    },
    {
      img: "/dashboard.png",
      title: "Support",
      content:
        "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we have created a system to ensure that we are always available.",
    },
  ];

  return (
    <div className="" data-aos="fade-up">
      <div className="flex items-center justify-center gap-x-2 mt-24">
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
        <h1 className="  text-2xl lg:text-3xl font-bold uppercase">services</h1>
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
      </div>
      <p className="text-center mt-5 px-5 lg:px-0 text-sm md:text-lg">
        Akeshya will serve as your consultant and development partner to help
        you turn your idea into a reality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center  px-10 md:px-14 lg:px-20 md:gap-x-5 lg:gap-x-16">
        {servicesData?.map((data, index) => {
          return (
            <Card
              classes={
                "group shadow-lg p-10 rounded-xl mt-10 hover:bg-[#14279b] hover:text-white w-80 ease-in duration-300"
              }
              key={index}
            >
              <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full bg-[#14279b] flex items-center justify-center  group-hover:bg-white ease-in duration-300">
                <img
                  src={data?.img}
                  alt=""
                  className="h-8 lg:h-10 text-white group-hover:text-[#14279b]"
                  loading="lazy"
                />
              </div>
              <p className="py-4 text-xl  font-bold">{data?.title}</p>
              <p className="text-sm md:text-[16px] md:tracking-wide md:leading-6 lg:leading-7 lg:text-base">{data?.content}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
