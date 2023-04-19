import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <div className="btn btn-ghost normal-case text-xl">daisyUI</div>
        <div className="mx-auto">
          <Link className="mr-4" to="/">
            Home
          </Link>
          <Link className="mr-4" to="/order">
            Order
          </Link>
          <Link className="mr-4" to="/profile">
            Profile
          </Link>
        </div>
        {!user ? (
          <div className="mr-8">
            <Link
              to="login"
              className={`btn btn-success ${
                location.pathname === "/login" && "hidden"
              }`}
            >
              Log In{" "}
            </Link>
            <Link
              to="/register"
              className={`btn btn-success ${
                location.pathname === "/login" ? "" : "hidden"
              }`}
            >
              Sing Up{" "}
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end mr-8">
            <label tabIndex={0} className="btn btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/vite.svg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <button onClick={handelLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
