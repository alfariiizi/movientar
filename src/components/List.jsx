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
          <div
            className="flex h-80 w-40 flex-col border-2 border-slate-800"
            key={index}>
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
        ))}
      </div>
    </section>
  );
};

export default List;
