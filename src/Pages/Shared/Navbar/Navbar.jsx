import { Link } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/career"}>Career</Link>
      </li>
      <li>
        <Link to={"/login"}>login</Link>
      </li>
    </>
  );
  return (
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-1"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
          </div>
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn text-white bg-[#403F3F] rounded-none">
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn text-white bg-[#403F3F] rounded-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
