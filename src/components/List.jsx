import React from "react";
import useGetList from "../hooks/useGetList";
import { moviesData } from "../data";

const List = ({ kind }) => {
  const getList = useGetList(kind.link);
  return (
    <section className="">
      <h2 className="my-10 w-full text-3xl">{kind.name}</h2>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {getList.map((movie, index) => (
            <div
              className="flex h-80 w-40 flex-col border-2 border-slate-800"
              key={index}>
              <div className="h-60 w-full bg-blue-400">
                <img
                  className="h-full w-full"
                  src={`${process.env.REACT_APP_BASEIMAGEURL}${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-between px-2 text-sm">
                <h2 className="font-bold">{movie.title}</h2>
                <p className="">Rating: {movie.vote_average}</p>
                <p>Release: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
