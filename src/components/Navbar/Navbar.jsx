import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";
import HamburgerMenu from "../Hamburgermeny/HamburgerMenu";

const Navbar = () => {
  const { cart } = useContext(CartContext); 
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">BLAAAA</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/Search" className="link">SEARCH</Link>
        </li>
        <li>
          <Link to="/Login" className="link">LOG IN</Link>
        </li>
        <li>
          <Link to="/Help" className="link">HELP</Link>
        </li>
        <li>
          <Link to="/kundvagnSida" className="link">
            SHOPPING BAG 
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
      <HamburgerMenu className="hamburger-container" />
    </nav>
  );
};

export default Navbar;

