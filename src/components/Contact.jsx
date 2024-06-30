import React, { useContext } from "react";
import { FaEnvelope } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const {refs} = useContext(AppContext)
  return (
    <div ref={refs.section3} id="contact" className="lg:px-5 lg:mt-[200px]">
      <h2 className="uppercase text-zinc-200 font-bold text-[14px] mb-8 mt-24 lg:hidden">
        Contact Me
      </h2>
      <h4 className="text-slate-200 mb-4 text-[30px] lg:text-[44px]">
        Let's Discuss
      </h4>
      <a
        href="mailto:azikenp26@gmail.com"
        className="flex gap-2 items-center hover:text-slate-200 transition-all bg-slate-700/50 hover:bg-slate-500/50 w-[200px] p-2 rounded"
        target="_blank"
        rel="noreferrer"
      >
        Send me an email <FaEnvelope />
      </a>
    </div>
  );
};

export default Contact;
