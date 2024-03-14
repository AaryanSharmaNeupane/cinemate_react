import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/company_logo.png";

export const Header = () => {
  return (
    <header>
      <div className="flex p-3 items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img className="w-12 " src={Logo} alt="Company logo" />
          <h1 className="text-2xl ml-2 font-semibold">Cinemate</h1>
        </div>
        <nav className="w-1/3">
          <ul className="flex justify-between">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="movies/popular">Popular</NavLink>
            </li>
            <li>
              <NavLink to="movies/top">Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="movies/upcoming">Upcoming</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex ">
          <button className="border px-4 rounded-lg mr-4 hover:border-slate-500">
            <i class="bi bi-moon-fill"></i>
          </button>
          <div className="border p-2 rounded-lg hover:border-slate-500 focus-within:border-slate-500 ">
            <i class="bi bi-search "></i>
            <input
              className=" outline-none ml-2"
              placeholder=" Search..."
              autoComplete="off"
              name="search"
              type="text"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
