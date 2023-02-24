import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ name, options }) => {
  return (
    <button className="group relative h-full border-2 border-slate-800 bg-gray-200 p-2">
      {name}
      <div className="absolute top-10 left-0 z-[110] hidden h-auto w-auto border-2 border-slate-800 bg-gray-200 group-hover:flex group-hover:flex-col group-hover:gap-1">
        {options.map((option, index) => (
          <div key={index} className="h-full w-full p-1 hover:bg-gray-300">
            <Link to={option.link}>{option.name}</Link>
          </div>
        ))}
      </div>
    </button>
  );
};

export default Dropdown;