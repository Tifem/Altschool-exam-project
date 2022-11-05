import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="nav-app container-fluid">
      <div className="logo-name">
        <h3>AltSchool Exam Project</h3>
      </div>

      <nav className="nav-item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-repo">All Repos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
