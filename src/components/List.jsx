import React from "react";
import useGetList from "../hooks/useGetList";

const List = ({ kind }) => {
  const getList = useGetList(kind.link);

  // Signature: Movie or TV Series
  const isMovies = kind.signature == "Movies";

  return (
    <section className="">
      {/* Header */}
      <h2 className="my-10 w-full text-3xl">
        {kind.name} {kind.signature}
      </h2>

      {/* List of all cards */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        {getList.map((card, index) => (
          <div
            key={index}
            className="group relative top-0 left-0 h-80 w-40 transition-all duration-200 hover:-top-1 hover:-left-1">
            <div className="relative z-10 flex h-full w-full flex-col border-2 border-slate-800 bg-slate-200">
              {/* Card image */}
              <div className="h-60 w-full bg-blue-400">
                <img
                  className="h-full w-full"
                  src={`${process.env.REACT_APP_BASEIMAGEURL}${card.poster_path}`}
                  alt=""
                />
              </div>
              {/* Card description */}
              <div className="flex flex-col items-center justify-between px-2 text-sm">
                {isMovies ? (
                  // Movies
                  <div>
                    <div className="flex h-1/2 items-center justify-center text-center">
                      <h2 className="font-bold">{card.title}</h2>
                    </div>
                    <p className="">Rating: {card.vote_average}</p>
                    <p>Release: {card.release_date}</p>
                  </div>
                ) : (
                  // TV Series
                  <div>
                    <div className="flex h-1/2 items-center justify-center text-center">
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
