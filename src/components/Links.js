import React from 'react';
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <ul className="links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/export">Export</Link>
        </li>
        <li className="link">
          <Link to="/pests">Pests</Link>
        </li>
      </ul>
    </>
  );
}
export default Links