import { Routes, Route } from "react-router-dom";
import List from "./List";
import { tvsData, moviesData } from "../data";

const MainMenu = () => {
  return (
    <Routes>
      {/* Movies */}
      <Route
        path={moviesData.popular.link}
        element={<List kind={moviesData.popular} />}
      />
      <Route
        path={moviesData.topRated.link}
        element={<List kind={moviesData.topRated} />}
      />
      <Route
        path={moviesData.nowPlaying.link}
        element={<List kind={moviesData.nowPlaying} />}
      />

      {/* TV Series */}
      <Route
        path={tvsData.popular.link}
        element={<List kind={tvsData.popular} />}
      />
      <Route
        path={tvsData.topRated.link}
        element={<List kind={tvsData.topRated} />}
      />
      <Route
        path={tvsData.onTheAir.link}
        element={<List kind={tvsData.onTheAir} />}
      />
    </Routes>
  );
};

export default MainMenu;
