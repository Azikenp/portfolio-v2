import React from "react";
import { data } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="mt-16">
      <h2 className="uppercase text-zinc-200 font-bold text-[14px] mb-8 lg:hidden">
        Projects
      </h2>
      {data.map((datas, i) => {
        return <Project key={i} data={datas} />;
      })}
    </section>
  );
};

export default Projects;
