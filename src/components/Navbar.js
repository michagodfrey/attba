import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">Logo</div>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/pests">Pests</Link>
        </li>
        <li className="nav__link">
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
