import React from "react";
import LeftSide from "./components/sides/LeftSide";
import RightSide from "./components/sides/RightSide";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row px-7 lg:px-24 py-12 lg:py-24 bg-slate-900 text-slate-400">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default App;
