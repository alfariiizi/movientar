import React from "react";

const Navbar = ({ titleSite }) => {
  return (
    <nav className="relative z-[100]">
      <div className="fixed flex h-14 w-full items-center justify-between border-b-[1px] border-b-slate-900 bg-slate-100/30 px-4 backdrop-blur-sm">
        <h1 className="text-xl">{titleSite}</h1>
        <div className="flex w-1/2 justify-around">
          <div>Items</div>
          <div>Items</div>
          <div>Items</div>
          <div>Items</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
