import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">Logo</h1>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${currentPath === "/" ? "navactive" : ""}`}
            >
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li
              className={`nav-item ${
                currentPath === "/aboutus" ? "navactive" : ""
              }`}
            >
              <a className="nav-link">ABOUT</a>
            </li>
            <li
              className={`nav-item ${
                currentPath === "/contactus" ? "navactive" : ""
              }`}
            >
              <a className="nav-link">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
