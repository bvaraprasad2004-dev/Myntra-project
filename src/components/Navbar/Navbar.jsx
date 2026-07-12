import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import {
  FaUserAlt,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="Myntra" className="logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/home-living">HOME</Link>
        <Link to="/beauty">BEAUTY</Link>

        <Link to="/studio" className="studio">
          STUDIO
          <span className="new-tag">NEW</span>
        </Link>
      </nav>

      {/* Search Bar */}
      <SearchBar />

      {/* Icons */}
      <div className="nav-icons">
        <div className="icon-item">
          <FaUserAlt />
          <span>Profile</span>
        </div>

        <Link to="/wishlist" className="icon-item">
          <FaRegHeart />
          <span>Wishlist</span>
        </Link>

        <Link to="/bag" className="icon-item">
          <FaShoppingBag />
          <span>Bag</span>
        </Link>
      </div>

    </header>
  );
}

export default Navbar;