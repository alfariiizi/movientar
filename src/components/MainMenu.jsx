import { Routes, Route } from "react-router-dom";
import List from "./List";
import { moviesData } from "../data";

const MainMenu = () => {
  return (
    <Routes>
      <Route path="/" element={<List kind={moviesData.popular} />} />
      <Route
        path={moviesData.topRated.link}
        element={<List kind={moviesData.topRated} />}
      />
    </Routes>
  );
};

export default MainMenu;
