import { useState, useEffect } from "react";
import { useTitle } from "./useTitle";

export const useFetch = (apiPath, title, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API}&query=${queryTerm}`;

  useTitle(title);
  console.log(data);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results || json);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
