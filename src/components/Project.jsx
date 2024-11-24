import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ data }) => {
  return (
    <div>
      {/* mobile screen */}
      <div className="mb-16 pb-7 border-b-[1px] border-slate-700 md:hidden">
        <a
          className="link w-fit flex items-center gap-2 text-zinc-200 hover:text-teal-200 font-bold"
          href={data.liveSite}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="mb-2 text-[18px]">{data.title}</h2>
          <FiArrowUpRight
            id="arrow-up-right"
            className="text-[14px] transition-all"
          />
        </a>
        <p className="mb-4">{data.text}</p>
        <img className="w-[200px] h-[120px] rounded" src={data.src} alt="" />
        <a
          href={data.codeSite}
          target="_blank"
          rel="noreferrer"
          className="group text-[20px] hover:text-teal-200 block w-fit"
        >
          <FaGithub className="mt-4 group-hover:scale-[110%] transition-all" />
        </a>

        <div className="flex flex-wrap gap-2 mt-4">
          {data.tools?.map((tool, i) => (
            <p
              className="flex text-teal-300 bg-teal-400/10 text-[12px] capitalize w-fit py-2 px-3 rounded-full"
              key={i}
            >
              {tool}
            </p>
          ))}
        </div>
      </div>

      {/* tablets */}
      <div className="hidden md:flex lg:hidden flex-col mb-24 lg:p-5 lg:hover:bg-slate-800/50 transition-all ease-in-out  pb-7 border-b-[1px] border-slate-700">
        <div className="flex gap-6">
          <div className="min-w-[200px] h-[100px] lg:w-[350px] lg:h-[50px]">
            <img
              className="h-[100%] w-[100%]  rounded"
              src={data.src}
              alt={data.title}
            />
          </div>
          <div>
            <a
              href={data.liveSite}
              target="_blank"
              rel="noreferrer"
              className="link w-fit flex gap-2 items-center text-zinc-200 font-[500] hover:text-teal-200 text-[18px] mb-2"
            >
              <h2>{data.title}</h2>
              <FiArrowUpRight id="arrow-up-right" className="transition-all" />
            </a>
            <p className="mb-2">{data.text}</p>
            <a
              className="text-[18px] hover:text-teal-200 block w-fit"
              href={data.codeSite}
              target="_blank"
              rel=" noreferrer"
            >
              <FaGithub className="mt-4 hover:scale-[110%] transition-all" />
            </a>

            <div className="flex gap-2 mt-4">
              {data.tools?.map((tool, i) => (
                <p
                  className="flex text-teal-300 bg-teal-400/10 text-[12px] capitalize w-fit py-2 px-3 rounded-full"
                  key={i}
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex flex-col mb-9 lg:p-5 lg:hover:bg-slate-800/50 transition-all ease-in-out rounded">
        <a
          className="flex gap-6"
          href={data.liveSite}
          target="_blank"
          rel="noreferrer"
        >
          <div className="min-w-[100px] h-[100px] lg:max-w-[350px] lg:h-[50px]">
            <img
              className="h-[100%] w-[100%]  rounded"
              src={data.src}
              alt={data.title}
            />
          </div>
          <div>
            <div className="link w-fit flex   gap-2 items-center text-zinc-200 font-[500] hover:text-teal-200 text-[18px] mb-2">
              <h2>{data.title}</h2>
              <FiArrowUpRight id="arrow-up-right" className="transition-all" />
            </div>
            <p className="mb-2">{data.text}</p>
            <a
              className="text-[18px] hover:text-teal-200 block w-fit"
              href={data.codeSite}
              target="_blank"
              rel=" noreferrer"
            >
              <FaGithub className="mt-4 hover:scale-[110%] transition-all" />
            </a>

            <div className="flex gap-2 mt-4">
              {data.tools?.map((tool, i) => (
                <p
                  className="flex text-teal-300 bg-teal-400/10 text-[12px] capitalize w-fit py-2 px-3 rounded-full"
                  key={i}
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
