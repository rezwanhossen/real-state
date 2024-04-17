import { Link, NavLink } from "react-router-dom";
import userimg from "../../assets/user.png";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update"
          className={({ isActive }) =>
            isActive ? " btn btn-outline btn-success " : " "
          }
        >
          Update profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl ">
            City<span className="font-bold text-rose-500">Dwellers</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks} </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                <img className="w-10  " src={userimg} alt="" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  z-[1] menu  p-2 shadow bg-base-100 rounded-box "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className=" btn btn-outline btn-success"
                  >
                    {" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // <div className="mr-4">
            //   <img className="w-10  " src={userimg} alt="" />
            // </div>
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
