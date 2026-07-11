import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";

import {
  FaUserAlt,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Myntra" className="logo" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="/">MEN</a>
        <a href="/">WOMEN</a>
        <a href="/">KIDS</a>
        <a href="/">HOME</a>
        <a href="/">BEAUTY</a>

        <a href="/" className="studio">
          STUDIO
          <span className="new-tag">NEW</span>
        </a>
      </nav>

      {/* Search Bar */}
      <SearchBar />

      {/* Icons */}
      <div className="nav-icons">

        <div className="icon-item">
          <FaUserAlt />
          <span>Profile</span>
        </div>

        <div className="icon-item">
          <FaRegHeart />
          <span>Wishlist</span>
        </div>

        <div className="icon-item">
          <FaShoppingBag />
          <span>Bag</span>
        </div>

      </div>

    </header>
  );
};

export default Navbar;