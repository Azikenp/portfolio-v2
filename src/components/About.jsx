import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const About = () => {
  const elementRef = useRef(null);
  const {hasParentWithId, checkParentId, setHasParentWithId, refs} = useContext(AppContext)
  // console.log(hasParentWithId);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        const idSection = "about";
        const result = checkParentId(entry.target, idSection);
        setHasParentWithId(result);
      } else {
        setHasParentWithId(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Adjust threshold as needed
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [checkParentId, setHasParentWithId]);


  // const handleScroll = () => {
  //   let idSection = "about"
  //   if (elementRef.current) {
  //     const result = checkParentId(elementRef.current, idSection);
  //     setHasParentWithId(result);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
    
  //   // Initial check
  //   handleScroll();

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  

  return (
    <section ref={refs.section1} id="about" className="lg:px-5">
      <div ref={elementRef}>
        <h1 className="uppercase text-zinc-200 font-bold text-[14px] mb-8 lg:hidden">
          About
        </h1>

        <p className="mb-4 lg:mb-6">
          I am a skilled Frontend Developer with a deep passion for web
          development, i have honed my skills in creating beautiful, intuitive
          user interfaces using the latest technologies. With a strong
          commitment to learning and growth, i am always seeking new
          opportunities to expand my skills and contribute to meaningful
          projects.
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
      </div>
    </section>
  );
};

export default About;
