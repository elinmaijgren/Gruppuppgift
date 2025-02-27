import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <li>
          <Link to="/">BLAAAA</Link>
        </li>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="#">LOG IN</Link>
        </li>
        <li>
          <Link to="#">HELP</Link>
        </li>
        <li>
          <Link to="/kundvagnSida">SHOPPING BAG</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
