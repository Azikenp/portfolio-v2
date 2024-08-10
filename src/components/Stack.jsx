import { techStack } from "../data";

const Stack = () => {
  return (
    <div className="lg:px-5 lg:mt-[150px] mb-24">
      <h2 className="uppercase text-zinc-200 font-bold text-[14px]  lg:text-[24px] mb-8 mt-24">
        Technologies i use
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((stacks, i) => {
          return (
            <p key={i} className="flex text-teal-300 bg-teal-400/10 text-[12px] capitalize w-fit py-2 px-3 rounded-full">
              {stacks}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
