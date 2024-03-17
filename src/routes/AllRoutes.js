import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, Search, PageNotFound } from "../pages";

import React from "react";

export const AllRoutes = () => {
  return (
    <main className="dark:bg-slate-800 min-h-svh">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="/movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="/movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="/movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="/movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="/search/movie" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </main>
  );
};
