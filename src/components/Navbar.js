// import React, { useState } from "react";
// import Links from "./Links";
// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <nav className="nav">
//       <div className="nav__title">
//         <h1 className="title--acronym">ATTBA</h1>
//         <h1 className="title--full">
//           Australian Travel &amp; Trade Biosecurity Assistant
//         </h1>
//       </div>
//       <div className="nav__menu">
//         <button className="btn--toggle" onClick={() => setShowMenu(!showMenu)}>
//           <FaBars />
//         </button>
//         <div className={}>{showMenu && <Links />}</div>
//         <div className="nav__links--widescreen">
//           <Links />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="nav">
      <div className="nav__title">
        <h1 className="title--acronym">ATTBA</h1>
        <h1 className="title--full">
          Australian Travel &amp; Trade Biosecurity Assistant
        </h1>
      </div>
      <div className="nav__menu">
        <button className="btn--toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
