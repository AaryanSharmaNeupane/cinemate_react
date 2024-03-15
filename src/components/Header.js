import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/company_logo.png";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const activeClass =
    "text-lg font-medium  border rounded-lg shadow p-3 bg-slate-700 text-white dark:bg-slate-100 dark:text-black";
  const inactiveClass = "text-lg font-medium dark:text-white";

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };
  return (
    <header className="border-b-2   dark:bg-gray-900  ">
      <div className="flex p-3 items-center justify-between">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <img className="w-12 " src={Logo} alt="Company logo" />
            <h1 className="text-3xl ml-2 font-semibold dark:text-white">
              Cinemate
            </h1>
          </div>
        </Link>

        <nav className="w-1/3 h-6">
          <ul className="flex justify-between items-center ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movies/popular"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movies/top"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="movies/upcoming"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <button
            className="border  px-4 rounded-lg mr-4 bg-white hover:border-slate-500 dark:bg-white dark:hover:border-slate-900"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <i className="bi bi-brightness-high-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </button>
          <div className="flex border p-2 rounded-lg bg-white hover:border-slate-500 focus-within:border-slate-500  dark:bg-white dark:hover:border-slate-900">
            <i className="bi bi-search "></i>
            <form onSubmit={handleSubmit}>
              <input
                className=" outline-none ml-2  "
                placeholder=" Search..."
                autoComplete="off"
                name="search"
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
