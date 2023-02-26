import axios from "axios";

export const getList = async (kind) => {
  // It can be movies or tv series
  const movies = await axios.get(
    `${process.env.REACT_APP_BASEURL}${kind}?api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movies.data.results;
};

export const getSearch = async (kind, searchName) => {
  // It can be movies or tv series
  const movies = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search${kind}?api_key=${process.env.REACT_APP_APIKEY}&query=${searchName}`
  );

  return movies.data.results;
};
