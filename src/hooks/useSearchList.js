import { useEffect, useState } from "react";
import { getSearch } from "../utilities/api";

const useSearchList = (link, searchName) => {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    const tmp = async () => {
      const result = await getSearch(link, searchName);
      setListMovies(result);
    };
    tmp();
  }, [link, searchName]);

  return listMovies;
};

export default useSearchList;
