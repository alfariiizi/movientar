import React from "react";

import Dropdown from "../tools/Dropdown";
import { tvsData, moviesData } from "../data";

const Navbar = ({ titleSite }) => {
  return (
    <nav className="z-[100drop down menu on navbar react] relative">
      <div className="fixed flex h-14 w-full items-center justify-between gap-2 border-b-[1px] border-b-slate-900 bg-slate-100/30 px-4 backdrop-blur-md">
        <h1 className="flex-none text-center text-xl sm:w-1/3">{titleSite}</h1>
        <div className="flex grow items-center justify-center gap-4">
          <Dropdown
            name={"Movies"}
            options={[moviesData.popular, moviesData.topRated]}
          />
          <Dropdown
            name={"TV Series"}
            options={[tvsData.popular, tvsData.topRated]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
