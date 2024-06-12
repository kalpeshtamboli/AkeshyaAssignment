import React from "react";

const About = () => {
  const targets = [
    { score: "3835039", img: "/growth.png", title: "Organic Reach (Global)" },
    { score: "85", img: "/dashboard (1).png", title: "Campaigns" },
    { score: "14081", img: "/google-docs.png", title: "Watch Hours(Asia)" },
    { score: "17", img: "/globe-earth.png", title: "Excellent CTR% (Asia)" },
  ];

  return (
    <div data-aos="fade-up">
      <div className="flex items-center justify-center gap-x-2 mt-20">
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
        <h1 className="text-2xl lg:text-3xl font-bold">ABOUT US</h1>
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
      </div>

      <section className="flex flex-col lg:flex-row md:px-6 lg:px-20 gap-x-10 text-lg mt-5 md:mt-20">
        <div className=" px-5 lg:px-0  lg:w-3/4 text-base md:text-lg lg:text-lg ">
          <p>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>

          <ul className="mt-4 flex flex-col gap-y-4">
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-[#14279b]"
              >
                <path
                  fill="currentColor"
                  d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                />
              </svg>
              We started with a simple idea: do what is best for the client.
            </li>
            <li className="flex  gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7em"
                height="1.7em"
                viewBox="0 0 24 24"
                className="text-[#14279b]"
              >
                <path
                  fill="currentColor"
                  d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                />
              </svg>
              Our methodical and individual approach to each project delivers
              the <br /> finest possible results for your media.
            </li>
            <li className="flex  gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                className="text-[#14279b]"
              >
                <path
                  fill="currentColor"
                  d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001z"
                />
              </svg>
              Our day-to-day work is to solve your problems utilising the most
              up-to-date, practical adaptive technology, and we have a lot of
              fun doing it.
            </li>
          </ul>
        </div>

        <div className="text-base md:text-lg lg:text-lg flex flex-col px-5 lg:px-0 pt-10 lg:pt-0  lg:w-3/4">
          We're professional, but we're also friendly, and we'll always pay
          attention to your concerns. We expect to work with innovative people
          that have an open mind and are dedicated to making every idea a
          reality. We want to hear from you if you're interested in SEO, have
          Web Development ideas, or require a graphic designer who can match
          your goals.
          <button className=" border-2 w-32 lg:w-52 text-[#14279b] font-medium border-[#14279b] mt-10 py-2 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      <div className="flex flex-col md:flex-col md:gap-y-10 lg:flex-row items-center lg:gap-x-20 justify-center mt-10 md:mt-20 ">
        <img
          data-aos="fade-right"
          src="/counts-img.svg"
          alt=""
          className="h-80 px-10 md:px-0 lg:px-0"
          loading="lazy"
        />

        <div
          className="grid grid-cols-2 gap-5 px-5 md:gap-x-56 md:gap-y-12"
          data-aos="fade-left"
        >
          {targets?.map((count, index) => {
            return (
              <div key={index}>
                {" "}
                <div className="flex gap-x-3">
                  <img src={count?.img} alt="" className="h-8" loading="lazy" />
                  <h1 className="text-xl md:text-3xl font-bold">
                    {count?.score}
                  </h1>
                </div>
                <p className="font-semibold text-sm md:text-base">
                  {count?.title}
                </p>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
