import React from "react";
import useGetList from "../hooks/useGetList";

const List = ({ kind }) => {
  const getList = useGetList(kind.link);
  return (
    <section className="">
      {/* Header */}
      <h2 className="my-10 w-full text-3xl">
        {kind.name} {kind.signature}
      </h2>

      {/* List of all cards */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        {getList.map((movie, index) => (
          <div key={index} className="group relative h-80 w-40 transition-all">
            <div className="relative z-10 flex h-full w-full flex-col border-2 border-slate-800 bg-slate-200">
              {/* Card image */}
              <div className="h-60 w-full bg-blue-400">
                <img
                  className="h-full w-full"
                  src={`${process.env.REACT_APP_BASEIMAGEURL}${movie.poster_path}`}
                  alt=""
                />
              </div>
              {/* Card description */}
              <div className="flex flex-col items-center justify-between px-2 text-sm">
                <h2 className="font-bold">{movie.title}</h2>
                <p className="">Rating: {movie.vote_average}</p>
                <p>Release: {movie.release_date}</p>
              </div>
            </div>
            {/* Backside retro card style */}
            <div className="absolute top-2 left-2 hidden h-full w-full border-2 border-slate-800 bg-teal-500 transition-all group-hover:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
