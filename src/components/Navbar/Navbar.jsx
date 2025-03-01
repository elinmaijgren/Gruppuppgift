import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../Hamburgermeny/HamburgerMenu";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
       <div className="nav-logo">
        <Link to="/">BLAAAA</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="#" className="link">
            SEARCH
          </Link>
        </li>
        <li>
          <Link to="/Login" className="link">
            LOG IN
          </Link>
        </li>
        <li>
          <Link to="/Help" className="link">
            HELP
          </Link>
        </li>
        <li>
          <Link to="/kundvagnSida" className="link">
            SHOPPING BAG
          </Link>
        </li>
      </ul>
      <HamburgerMenu className="hamburger-container" />
    </nav>
  );
};

export default Navbar;
