import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath, title);

  return (
    <main>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
