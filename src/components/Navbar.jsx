import React from "react";

import Dropdown from "../tools/Dropdown";
import { tvsData, moviesData } from "../data";

const Navbar = ({ titleSite }) => {
  const movieOptions = [
    moviesData.popular,
    moviesData.topRated,
    moviesData.nowPlaying,
  ];
  const tvOptions = [tvsData.popular, tvsData.topRated, tvsData.onTheAir];

  return (
    <nav className="relative z-[100] text-slate-200">
      <div className="fixed flex h-14 w-full items-center justify-between gap-2 border-b-[1px] border-b-slate-900 bg-slate-100/30 px-4 font-inter backdrop-blur-md">
        <h1 className="flex-none text-center font-aboreto text-xl font-bold sm:w-1/3">
          {titleSite}
        </h1>
        <div className="flex grow items-center justify-end gap-1 sm:mx-20 sm:gap-4">
          <Dropdown name={"Movies"} options={movieOptions} />
          <Dropdown name={"TV Series"} options={tvOptions} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
