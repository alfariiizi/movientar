import axios from "axios";

export const getList = async (kind) => {
  const movies = await axios.get(
    `${process.env.REACT_APP_BASEURL}${kind}?api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movies.data.results;
};
