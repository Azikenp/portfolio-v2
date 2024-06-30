import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Header = () => {
  useEffect(() => {
    // smooth scroll with offset
    const handleNavClick = (e) => {
      e.preventDefault();
      // matching strategy
      if (e.target.classList.contains("nav--link")) {
        const id = e.target.getAttribute("href");
        const targetElement = document.querySelector(id);
        if (targetElement) {
          const offset = 100; // Set the offset in pixels
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    const navElement = document.querySelector("nav");
    if (navElement) {
      navElement.addEventListener("click", handleNavClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (navElement) {
        navElement.removeEventListener("click", handleNavClick);
      }
    };
  }, []);

  return (
    <header className="pr-16 mb-32 lg:h-[100vh]">
      <h2 className="capitalize text-[29px] lg:text-[41px] font-bold mb-2 tracking-wide text-slate-200">
        Aziken Precious
      </h2>
      <h4 className="text-[18px] lg:text-[22px] font-bold mb-4 text-slate-200">
        Frontend Developer
      </h4>
      <p className="mb-6 lg:mb-16">
        I build intuitive and pixel-perfect user interfaces using the latest
        technologies.
      </p>
      <nav className="links hidden lg:flex flex-col gap-y-5 uppercase font-bold text-[13px]">
        <a
          className="nav--link group flex items-center gap-4 w-44"
          href="#about"
        >
          <span className="w-8 bg-slate-600 h-[1px] rounded transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 group-focus-visible:w-16"></span>
          <span className="group-hover:text-slate-200 tracking-widest">
            about
          </span>
        </a>
        <a
          className="nav--link group flex items-center gap-4 w-44"
          href="#projects"
        >
          <span className="w-8 bg-slate-600 h-[1px] rounded transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 group-focus-visible:w-16"></span>
          <span className="group-hover:text-slate-200 tracking-widest">
            Projects
          </span>
        </a>
        <a
          className="nav--link group flex items-center gap-4 w-44"
          href="#contact"
        >
          <span className="w-8 bg-slate-600 h-[1px] rounded transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 group-focus-visible:w-16"></span>
          <span className="group-hover:text-slate-200 tracking-widest">
            Contact
          </span>
        </a>
      </nav>

      <div className="icons flex items-center gap-3 lg:gap-6 mt-9 lg:mt-[3rem]">
        <a
          href="https://www.linkedin.com/in/aziken-precious-712043237/"
          className="hover:text-slate-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-[24px]" />
        </a>
        <a
          href="https://github.com/Azikenp"
          className="hover:text-slate-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-[24px] lg:text-[28px]" />
        </a>
        <a
          href="mailto:azikenp26@gmail.com"
          className="hover:text-slate-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="text-[24px]" />
        </a>
        <a
          href="https://hashnode.com/@Azikenp"
          className="hover:text-slate-200 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaHashnode className="text-[24px]" />
        </a>
      </div>
    </header>
  );
};

export default Header;
