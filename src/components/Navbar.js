import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}`;
  //   } else {
  //     linksContainerRef.current.style.height = "0";
  //   }
  // }, [showLinks])
  

  return (
    <nav className="nav">
      <h1 className="title--acronym">ATTBA</h1>
      <h1 className="title--full">
        Australian Travel &amp; Trade Biosecurity Assistant
      </h1>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__link">
          <Link to="/import">Importing</Link>
        </li>
        <li className="nav__link">
          <Link to="/export">Exporting</Link>
        </li>
        <li className="nav__link">
          <Link to="/pests">Pests</Link>
        </li>
      </ul>
      <div
        className="nav__menu-toggle"
        onClick={() => setShowLinks(!showLinks)}
      >
        <FaBars />
        <div
          className={`${showLinks ? "nav__menu nav__menu--show" : "nav_menu"}`}
        >
          {/* I'm attempting to buld a drop down here for mobile screens */}
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
            <li className="nav__link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
