import React from "react";

const List = ({ title, signature, hookGetApi, showSiganture = true }) => {
  const getList = hookGetApi();

  // Signature: Movie or TV Series
  const isMovies = signature === "Movies";

  return (
    <section className="">
      {/* Header */}
      <h2 className="my-10 w-full font-roboto-mono text-3xl font-bold text-slate-200 md:px-8 lg:px-12">
        {title} {showSiganture && signature}
      </h2>

      {/* List of all cards */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        {getList.map((card, index) => (
          <div
            key={index}
            className="group relative top-0 left-0 h-[20rem] w-[10rem] transition-all duration-200 hover:-top-1 hover:-left-1 sm:h-[25rem] sm:w-[12.5rem]">
            <div className="relative z-10 flex h-full w-full flex-col border-[3px] border-violet-600 bg-slate-200">
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
            <div className="absolute top-0 left-0 h-full w-full border-[3px] border-slate-800 bg-teal-500 opacity-0 duration-200 group-hover:top-2 group-hover:left-2 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
