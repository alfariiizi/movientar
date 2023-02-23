import React from "react";
import { Link } from "react-router-dom";
import { moviesData } from "../data";

const Navbar = ({ titleSite }) => {
  return (
    <nav className="relative z-[100]">
      <div className="fixed flex h-14 w-full items-center justify-between border-b-[1px] border-b-slate-900 bg-slate-100/30 px-4 backdrop-blur-md">
        <h1 className="text-xl">{titleSite}</h1>
        <div className="flex w-1/2 justify-around">
          <Link to="/">{moviesData.popular.name}</Link>
          <Link to={moviesData.topRated.link}>{moviesData.topRated.name}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
