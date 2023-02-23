import React from "react";

const MainMenu = () => {
  const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="flex w-full justify-center">
      <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {someArr.map((arr, index) => (
          <div
            className="flex h-72 w-40 flex-col border-2 border-slate-800"
            key={index}>
            <div className="h-60 w-full bg-blue-400"></div>
            <div className="flex h-[4ch] items-center justify-center">
              <h2 className="font-mono font-bold">Some Title</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainMenu;
