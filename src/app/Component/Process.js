import React from "react";
import Card from "./Card";

const Process = () => {
  const processData = [
    {
      title: "1. Planning",
      content:
        "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we are all on the same page.",
    },
    {
      title: "2. Design",
      content:
        "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
      title: "3. Development",
      content:
        "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      title: "4. Marketing",
      content:
        "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];
  return (
    <div data-aos="fade-up">
      <div className="flex items-center justify-center gap-x-2 mt-24">
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
        <h1 className=" text-2xl lg:text-3xl font-bold uppercase">
          our process
        </h1>
        <div className="w-16 h-[2.5px] bg-[#14279b] rounded-full" />
      </div>

      <p className="text-center text-base px-5 lg:px-0 lg:text-lg">
        Over the years we’ve evolved a tested method for attaining achievement
        for each one of our clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10  lg:grid-cols-2 lg:gap-x-10 gap-y-12 lg:gap-y-32 mt-16 px-5 md:px-14 lg:px-28">
        {processData?.map((data, index) => {
          return (
            <Card
              classes={
                "shadow-md py-10 px-5 bg-[#f6f6f6] hover:bg-[#14279b] rounded-lg hover:text-white ease-in duration-300"
              }
              key={index}
            >
              <h2 className="font-bold text-center text-xl">{data?.title}</h2>
              <p className="pt-5">{data?.content}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
