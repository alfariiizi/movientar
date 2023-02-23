import { useEffect, useState } from "react";
import { getList } from "../utilities/api";

const useGetList = (link) => {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    const tmp = async () => {
      const result = await getList(link);
      setListMovies(result);
    };
    tmp();
  }, [link]);
  return listMovies;
};

export default useGetList;
