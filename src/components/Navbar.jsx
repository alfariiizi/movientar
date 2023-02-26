import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Dropdown from "../tools/Dropdown";
import { tvsData, moviesData, searchData } from "../data";

const Navbar = ({ titleSite }) => {
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();

  const movieOptions = [
    moviesData.popular,
    moviesData.topRated,
    moviesData.nowPlaying,
  ];
  const tvOptions = [tvsData.popular, tvsData.topRated, tvsData.onTheAir];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `${searchData.linkWithoutId}${encodeURI(searchName.toLowerCase())}`
    );
  };

  return (
    <nav className="relative z-[100] text-slate-200">
      <div className="fixed flex h-14 w-full items-center justify-between border-b-[1px] border-b-slate-900 bg-slate-100/30 px-4 font-inter backdrop-blur-md">
        <Link
          to={moviesData.popular.link}
          className="flex-none text-center font-aboreto text-xl font-bold">
          {titleSite}
        </Link>
        <form onSubmit={handleSubmit} className="mx-10 w-full">
          <input
            type="text"
            placeholder="&#x1F50D; Search..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="w-full rounded p-2 text-sm text-black"
          />
          <button type="submit"></button>
        </form>
        <div className="flex grow items-center justify-center gap-1 sm:w-1/3 sm:gap-4">
          <Dropdown name={"Movies"} options={movieOptions} />
          <Dropdown name={"TV"} options={tvOptions} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
