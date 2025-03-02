import { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <button className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <ul className="menu">
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
      )}
    </div>
  );
};

export default HamburgerMenu;
