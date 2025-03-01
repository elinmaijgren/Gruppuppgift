import { useState } from "react";
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
          <li>WOMEN’S</li>
          <li>MEN’S</li>
          <li>JEWELRY</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
