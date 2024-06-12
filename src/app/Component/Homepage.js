import React from "react";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Process from "./Process";
import Services from "./Services";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Process />
      <Features />
      <Footer />
    </>
  );
};

export default Homepage;
