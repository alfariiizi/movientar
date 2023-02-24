import React from "react";
import useGetList from "../hooks/useGetList";

const List = ({ kind }) => {
  const getList = useGetList(kind.link);

  // Signature: Movie or TV Series
  const isMovies = kind.signature == "Movies";

  return (
    <section className="">
      {/* Header */}
      <h2 className="my-10 w-full font-inter text-3xl font-bold md:px-8 lg:px-12">
        {kind.name} {kind.signature}
      </h2>

      {/* List of all cards */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        {getList.map((card, index) => (
          <div
            key={index}
            className="group relative top-0 left-0 h-[20rem] w-[10rem] transition-all duration-200 hover:-top-1 hover:-left-1 sm:h-[25rem] sm:w-[12.5rem]">
            <div className="relative z-10 flex h-full w-full flex-col border-2 border-slate-800 bg-slate-200">
              {/* Card image */}
              <div className="h-[15rem] w-full bg-blue-400 sm:h-[18rem]">
                <img
                  className="h-full w-full object-cover"
                  src={`${process.env.REACT_APP_BASEIMAGEURL}${card.poster_path}`}
                  alt=""
                />
              </div>
              {/* Card description */}
              <div className="flex h-full w-full flex-col items-center justify-between px-2 font-inter text-[0.6rem] sm:text-xs">
                {isMovies ? (
                  // Movies
                  <div className="my-1 flex h-full w-full flex-col justify-center gap-2">
                    <div className="flex items-center justify-center text-center font-roboto-mono">
                      <h2 className="font-bold">{card.title}</h2>
                    </div>
                    <p className="">Rating: {card.vote_average}</p>
                    <p>Release: {card.release_date}</p>
                  </div>
                ) : (
                  // TV Series
                  <div className="my-1 flex h-full w-full flex-col justify-center gap-2">
                    <div className="flex items-center justify-center text-center font-roboto-mono">
                      <h2 className="font-bold">{card.name}</h2>
                    </div>
                    <p className="">Rating: {card.vote_average}</p>
                    <p>Release: {card.first_air_date}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Backside retro card style */}
            <div className="absolute top-0 left-0 h-full w-full border-2 border-slate-800 bg-teal-500 opacity-0 duration-200 group-hover:top-2 group-hover:left-2 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
