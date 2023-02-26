import useGetList from "./hooks/useGetList";
import useSearchList from "./hooks/useSearchList";

export const moviesData = {
  customHook: useGetList,
  popular: {
    signature: "Movies",
    name: "Popular",
    link: "movientar",
    tmdbLink: "/movie/popular",
  },
  topRated: {
    signature: "Movies",
    name: "Top Rated",
    link: "movientar/movie/top_rated",
    tmdbLink: "/movie/top_rated",
  },
  nowPlaying: {
    signature: "Movies",
    name: "Now Playing",
    link: "movientar/movie/now_playing",
    tmdbLink: "/movie/now_playing",
  },
};

export const tvsData = {
  customHook: useGetList,
  popular: {
    signature: "TV Series",
    name: "Popular",
    link: "movientar/tv/popular",
    tmdbLink: "/tv/popular",
  },
  topRated: {
    signature: "TV Series",
    name: "Top Rated",
    link: "movientar/tv/top_rated",
    tmdbLink: "/tv/top_rated",
  },
  onTheAir: {
    signature: "TV Series",
    name: "On The Air",
    link: "movientar/tv/on_the_air",
    tmdbLink: "/tv/on_the_air",
  },
};

// export const movieOptions = moviesData.map((movie) => movie.name);

// export const tvOptions = tvsData.map((tv) => tv.name);

export const searchData = {
  customHook: useSearchList,
  link: "movientar/search/:id", // with id
  linkWithoutId: "movientar/search/",
  moviesTmdbLink: "/search/movie",
  tvsTmdbLink: "/search/tv",
};
