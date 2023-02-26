import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";

// The option contain "name" and "link" properties

const NavbarMobile = ({ movieOptions, tvOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-inter sm:hidden">
      {/* Burger-menu */}
      <div className="rounded-full bg-slate-200/30 p-1 hover:bg-slate-300/20">
        <button
          onClick={handleButton}
          className="flex flex-col justify-center text-xl">
          <FiMenu />
        </button>
      </div>

      {isOpen && (
        // When the burger-menu is clicked
        <div className="absolute left-0 top-0 h-screen w-screen bg-slate-900 text-slate-200">
          {/* Close button */}
          <div className="m-10 flex justify-end">
            <button
              onClick={handleButton}
              className="hover:te-300 rounded-full bg-slate-600/80 p-1 text-3xl hover:bg-slate-600/40">
              <SlClose />
            </button>
          </div>
          {/* Content */}
          <div className="m-5 flex h-4/5 flex-col items-center gap-10">
            {/* Movies */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="my-3 text-4xl">Movies</h3>
              {movieOptions.map((movie, index) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  to={movie.link}
                  className="underline underline-offset-2 duration-200 hover:text-slate-400 hover:underline-offset-[6px]"
                  key={index}>
                  {movie.name}
                </Link>
              ))}
            </div>
            {/* TV Series */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="my-3 text-4xl">TV Series</h3>
              {tvOptions.map((tv, index) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  to={tv.link}
                  className="underline underline-offset-2 duration-200 hover:text-slate-400 hover:underline-offset-[6px]"
                  key={index}>
                  {tv.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
