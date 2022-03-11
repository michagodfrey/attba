import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__title">
          <div className="title--acronym">
            <h1>QQ</h1>
            <hr></hr>
          </div>
          <div className="title--full">
            <h1>Quarantine Query</h1>
            <hr></hr>
            <span className="caption">Australian Interstate Biosecurity</span>
          </div>
        </div>
        <div className="nav__menu">
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
