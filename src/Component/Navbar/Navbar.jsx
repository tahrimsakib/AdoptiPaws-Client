import React, { use, useEffect, useState } from "react";
import MyNavLink from "./MyNavlink";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navlink = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/pets">Pets & Supplies</MyNavLink>
      </li>
      {user ? (
        <>
          <li>
            <MyNavLink to="/add-listing">Add Listing</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/my-listings">My Listings</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/my-orders">My Orders</MyNavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm dark:bg-[#181818]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <figure>
          <img
            className="w-8 rounded-[10px]"
            src="/Gemini_Generated_Image_llkghsllkghsdfllkg.jpg"
            alt=""
          />
        </figure>
        <Link
          to="/"
          className="ml-2 text-2xl lg:text-3xl font-semibold tracking-tight bg-linear-to-r from-[#ff8a5b] via-[#ffb37a] to-[#ffd3a3] bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(255,138,91,0.35)] hover:drop-shadow-[0_2px_6px_rgba(255,138,91,0.55)] hover:scale-105 transition-all duration-300 ease-out flex items-center gap-1"
        >
          <span className="italic">Adopti</span>
          <span className="font-bold text-[#ff844a] dark:text-[#ff9c5a]">
            Paws
          </span>
          <span className="animate-[heartbeat_1.8s_ease-in-out_infinite] text-lg">
            🐾
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="space-x-2 navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <Link>
                <p className=" w-full font-semibold text-gray-700 dark:text-white text-center font2">
                  {user.displayName || "User"}
                </p>
              </Link>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn font2 btn-sm bg-red-500 text-white hover:bg-red-700 mt-2"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <MyNavLink to={"/auth/login"}>Login</MyNavLink>
            <MyNavLink to={"/auth/register"}>Register</MyNavLink>
          </>
        )}

        <label className="toggle w-10 text-base-content">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            value="synthwave"
            className="theme-controller "
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
