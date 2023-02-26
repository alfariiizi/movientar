import { Routes, Route } from "react-router-dom";
import List from "./List";
import { tvsData, moviesData, searchData } from "../data";
import SearchList from "./SearchList";

const MainMenu = () => {
  return (
    <Routes>
      {/* Movies */}
      <Route
        path={moviesData.popular.link}
        element={
          <List
            title={moviesData.popular.name}
            hookGetApi={() => {
              return moviesData.customHook(moviesData.popular.tmdbLink);
            }}
            signature="Movies"
          />
        }
      />
      <Route
        path={moviesData.topRated.link}
        element={
          <List
            title={moviesData.topRated.name}
            hookGetApi={() => {
              return moviesData.customHook(moviesData.topRated.tmdbLink);
            }}
            signature="Movies"
          />
        }
      />
      <Route
        path={moviesData.nowPlaying.link}
        element={
          <List
            title={moviesData.nowPlaying.name}
            hookGetApi={() => {
              return moviesData.customHook(moviesData.nowPlaying.tmdbLink);
            }}
            signature="Movies"
          />
        }
      />

      {/* TV Series */}
      <Route
        path={tvsData.popular.link}
        element={
          <List
            title={tvsData.popular.name}
            hookGetApi={() => {
              return tvsData.customHook(tvsData.popular.tmdbLink);
            }}
            signature="TV"
          />
        }
      />
      <Route
        path={tvsData.topRated.link}
        element={
          <List
            title={tvsData.topRated.name}
            hookGetApi={() => {
              return tvsData.customHook(tvsData.topRated.tmdbLink);
            }}
            signature="TV"
          />
        }
      />
      <Route
        path={tvsData.onTheAir.link}
        element={
          <List
            title={tvsData.onTheAir.name}
            hookGetApi={() => {
              return tvsData.customHook(tvsData.onTheAir.tmdbLink);
            }}
            signature="TV"
          />
        }
      />

      {/* Search */}
      <Route
        path={searchData.link}
        element={<SearchList resource={searchData} />}
      />
    </Routes>
  );
};

export default MainMenu;
