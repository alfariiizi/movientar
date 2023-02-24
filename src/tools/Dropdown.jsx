import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ name, options }) => {
  return (
    <button className="group relative flex h-full items-center justify-between border-2 border-slate-800 p-2">
      {name}
      <RiArrowDropDownLine />
      <div className="absolute top-10 left-0 z-[110] hidden h-auto w-auto flex-col divide-y-2 divide-slate-400 border-2 border-slate-800 duration-100 group-hover:flex">
        {options.map((option, index) => (
          <Link
            className="h-full w-full bg-slate-100/80 p-1 duration-100 hover:bg-slate-200"
            key={index}
            to={option.link}>
            {option.name}
          </Link>
        ))}
      </div>
    </button>
  );
};

export default Dropdown;
