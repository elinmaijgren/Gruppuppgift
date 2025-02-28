import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
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
    </nav>
  );
};

export default navbar;
