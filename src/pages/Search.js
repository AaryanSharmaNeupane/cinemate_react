import { useSearchParams } from "react-router-dom";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className="max-w-7xl m-auto py-7">
        <h1 className="text-3xl dark:text-white">
          {movies.length === 0
            ? `No results found for "${queryTerm}"`
            : `Search for "${queryTerm}"`}
        </h1>
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
