
import React from 'react';
//installera: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <h3>BLAAAA</h3>
        </div>


        <div className="footer-links">
          <ul>
            <li><a href="/about">Om oss</a></li>
            <li><a href="/shop">Butik</a></li>
            <li><a href="/customer-service">Kundservice</a></li>
            <li><a href="/terms">Villkor</a></li>
            <li><a href="/privacy-policy">Integritetspolicy</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Företagsnamn. Alla rättigheter reserverade.</p>
      </div>
    </footer>
  );
};

export default Footer;
