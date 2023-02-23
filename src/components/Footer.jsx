import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-indigo-800 px-5 py-4 text-slate-200">
        This data is gotten from{" "}
        <a
          href="https://www.themoviedb.org/"
          className="text-blue-400 hover:text-blue-500">
          The Movie DB
        </a>
      </div>
    </footer>
  );
};

export default Footer;
