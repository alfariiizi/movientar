import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlEncoder } from "../tools/urlEncoder";
import List from "./List";

const SearchList = ({ resource }) => {
  const { id } = useParams();

  return (
    <section className="flex flex-col gap-10">
      <List
        title={`Search Movie: ${id.charAt(0).toUpperCase() + id.slice(1)}`}
        signature="Movies"
        showSiganture={false}
        hookGetApi={() => {
          return resource.customHook(resource.moviesTmdbLink, encodeURI(id));
        }}
      />
      <List
        title={`Search TV Series: ${id.charAt(0).toUpperCase() + id.slice(1)}`}
        signature="TV Series"
        showSiganture={false}
        hookGetApi={() => {
          return resource.customHook(resource.tvsTmdbLink, encodeURI(id));
        }}
      />
    </section>
  );
};

export default SearchList;
