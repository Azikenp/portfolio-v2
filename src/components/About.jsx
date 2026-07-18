import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

const About = () => {
  const elementRef = useRef(null);
  const { hasParentWithId, checkParentId, setHasParentWithId, refs } =
    useContext(AppContext);
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
      threshold: 0.1, // Adjust threshold as needed
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
           Software Engineer with 4 years of experience building scalable, responsive web applications using React, Next.js, TypeScript, and modern frontend technologies. Experienced in developing enterprise applications across fintech, identity management, and HR systems. Proven track record delivering solutions for 2,000+ users at major financial institutions. Experienced in building reusable component libraries, optimizing web performance, and implementing WCAG-compliant interfaces. Passionate about clean code, modern development practices, and mentoring junior developers.
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
