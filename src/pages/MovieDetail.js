import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Backup_img from "../assets/images/backup.png";

export const MovieDetail = () => {
  const params = useParams({});
  const { data } = useFetch(`/movie/${params.id}`);
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : Backup_img;

  return (
    <main>
      <section className="flex flex-arap justify-around py-5   dark:text-white">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt="movie poster" />
        </div>
        <div className="max-w-2xl text-lg">
          <h1 className="text-3xl font-bold mb-5">{data.original_title}</h1>
          <p className="mb-8">{data.overview}</p>
          <div className="flex justify-around mb-10">
            {/* {data.genres.map((g) => (
              <h1 className="border p-3 rounded-full border-slate-500 bg-slate-500 cursor-pointer ">
                {g.name}
              </h1>
            ))} */}
          </div>
          <div className="flex ">
            <i className="bi bi-star-half text-yellow-400"></i>
            <p className="ml-2 font-bold">{data.vote_average}</p>
            <p className="ml-2"> &</p>
            <span className="ml-2 flex">
              <p className="font-bold">{data.vote_count}</p>

              <p className="ml-1">reviews</p>
            </span>
          </div>
          <div>
            <span className="flex ">
              <p className="font-bold">Runtime:</p>
              <p className="ml-2">{data.runtime}min.</p>
            </span>
            <span className="flex ">
              <p className="font-bold">Budget:</p>
              <p className="ml-2">${data.budget}</p>
            </span>
            <span className="flex ">
              <p className="font-bold">Revenue:</p>
              <p className="ml-2">${data.revenue}</p>
            </span>
            <span className="flex ">
              <p className="font-bold">Release Date:</p>
              <p className="ml-2">{data.release_date}</p>
            </span>
            <span className="flex ">
              <p className="font-bold">IMDB Code:</p>
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                className="ml-2"
              >
                {data.imdb_id}
              </a>
            </span>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
};
