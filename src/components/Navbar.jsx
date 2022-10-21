import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="d-flex justify-content-between align-items-center p-3 flex-column flex-md-row">
        <div className="logo text-light d-flex justify-content-between align-items-center">
          <Link to="/">
            <div className="logoDiv">
              <img className="logo-img" src="images/logo.png" alt="logo" />
            </div>
          </Link>
          <button
            className="hamburger fs-2 d-flex justify-content-between align-items-center text-light d-md-none border-0 bg-transparent"
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {showMenu ? (
          <div className="links d-flex fs-4 flex-column flex-md-row gap-md-4 flex-wrap">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-danger border-1 border-bottom border-danger text-center"
                  : "border-1 border-bottom border-danger text-center"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-danger border-1 border-bottom border-danger text-center"
                  : "border-1 border-bottom border-danger text-center"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-danger border-1 border-bottom border-danger text-center"
                  : "border-1 border-bottom border-danger text-center"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-danger border-1 border-bottom border-danger text-center"
                  : "border-1 border-bottom border-danger text-center"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        ) : (
          <div className="links d-md-flex gap-4 fs-4 d-none ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger fw-bold" : "text-light"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-danger fw-bold" : "text-light"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink 
            className={({isActive})=> isActive ? "text-danger fw-bold " :"text-light"} 
            to="/projects">
              Projects
            </NavLink>
            <NavLink 
            className={({isActive})=> isActive ? "text-danger fw-bold" :"text-light"} 
            to="/contact">
              Contact
            </NavLink>
          </div>
        )}
      </nav>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
