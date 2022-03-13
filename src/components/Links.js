import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
      <ul className="links">
        <Link to="/home">
          <li className="link link--home">Home</li>
        </Link>
        <Link to="/regulations">
          <li className="link link--regs">Rules</li>
        </Link>
        <Link to="/pests">
          <li className="link link--pest">Pests</li>
        </Link>
      </ul>
  );
};

export default Links;
