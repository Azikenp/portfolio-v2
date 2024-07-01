import React from "react";

const Footer = () => {
  return (
    <div className="lg:px-5 mt-28 md:mt-40 lg:mt-60">
      <p className="text-[14px]">
        This website was written in{" "}
        <span className="tracking-wide text-slate-200/90">
          Visual studio code{" "}
        </span>
        using <span className="tracking-wide text-slate-200/90">React</span>,{" "}
        <span className="tracking-wide text-slate-200/90">Tailwind</span> and{" "}
        <span className="tracking-wide text-slate-200/90">Framer Motion</span>,
        deployed using{" "}
        <span className="tracking-wide text-slate-200/90">Vercel</span>. All
        text is set in{" "}
        <span className="tracking-wide text-slate-200/90">Inter</span> font
        family.
      </p>

      <p className="text-[14px] mt-2">
        Inspired by{" "}
        <a className="text-slate-200/90" href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
          Brittany chiang
        </a>.
      </p>
      <p className="mt-2 text-slate-200/90 text-[10px]">
        &copy; Aziken Precious 2024
      </p>
    </div>
  );
};

export default Footer;
