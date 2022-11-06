import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          AltSchool Exam Project
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/all-repo"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Repos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;