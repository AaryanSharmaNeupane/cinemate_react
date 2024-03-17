import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <section className="pt-5 m-auto max-w-7xl flex flex-col ">
        <div
          className="flex
        flex-col items-center"
        >
          <p className="text-7xl p-4  dark:text-white">404, Oops!! </p>
          <img
            className="max-w-2xl rounded"
            src={NotFoundImage}
            alt="page not found"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/">
            <button className="shadow rounded-lg dark:bg-white p-4 text-xl font-bold dark:text-black bg-slate-700 text-white">
              Go Back To Cinemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
