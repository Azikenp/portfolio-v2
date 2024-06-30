import React from "react";

const About = () => {
  return (
    <section id="about" className="lg:px-5">
      <h1 className="uppercase text-zinc-200 font-bold text-[14px] mb-8 lg:hidden">
        About
      </h1>

      <p className="mb-4 lg:mb-6">
        I am a skilled Frontend Developer with a deep passion for web
        development, i have honed my skills in creating beautiful, intuitive
        user interfaces using the latest technologies. With a strong commitment
        to learning and growth, i am always seeking new opportunities to expand
        my skills and contribute to meaningful projects.
      </p>

      <p className="mb-4 lg:mb-6">
        I sometimes write at{" "}
        <a
          className="text-teal-200"
          href="https://hashnode.com/@Azikenp"
          target="_blank"
          rel="noreferrer"
        >
          Hashnode
        </a>{" "}
        and{" "}
        <a
          className="capitalize text-teal-200"
          href="https://medium.com/@azikenp"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          medium
        </a>{" "}
        too. You can check out my blog and support me by liking my posts.
      </p>

      <p>Connect with me to learn more about my work and interests.</p>
    </section>
  );
};

export default About;
