import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h4>ONLINE SHOPPING</h4>

          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Kids</a>
          <a href="/">Home & Living</a>
          <a href="/">Beauty</a>
          <a href="/">Gift Cards</a>
        </div>

        <div className="footer-section">
          <h4>CUSTOMER POLICIES</h4>

          <a href="/">Contact Us</a>
          <a href="/">FAQ</a>
          <a href="/">Terms Of Use</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Returns</a>
        </div>

        <div className="footer-section">

          <h4>EXPERIENCE OUR APP</h4>

          <div className="app-buttons">
            <button>Google Play</button>
            <button>App Store</button>
          </div>

          <h4 className="social-title">
            KEEP IN TOUCH
          </h4>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 Myntra Clone. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ using React
        </p>

      </div>

    </footer>
  );
};

export default Footer;