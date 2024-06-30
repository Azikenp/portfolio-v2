import React from "react";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Stack from "../Stack";
import Footer from "../Footer";

const RightSide = () => {
  return (
    <div className="lg:w-[55%] lg:translate-x-[80%] lg:pl-8">
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default RightSide;
