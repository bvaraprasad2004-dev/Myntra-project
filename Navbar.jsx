import "./Navbar.css";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <header className="navbar">


      <div className="logo">
        <Link to="/">
          <span>MYNTRA</span>
        </Link>
      </div>


      <nav className="nav-links">

        <Link to="/category/men">
          MEN
        </Link>

        <Link to="/category/women">
          WOMEN
        </Link>

        <Link to="/category/kids">
          KIDS
        </Link>

        <Link to="/category/home">
          HOME
        </Link>

        <Link to="/category/beauty">
          BEAUTY
        </Link>

        <Link to="/category/footwear">
          FOOTWEAR
        </Link>

        <Link to="/category/studio">
          STUDIO
        </Link>

      </nav>


      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for products, brands and more"
        />

      </div>


      <div className="icons">


        <div className="icon-item">

          <Link to="/login">

            <FaUser />

            <span>
              Profile
            </span>

          </Link>

        </div>



        <div className="icon-item">

          <Link to="/wishlist">

            <FaHeart />

            <span>
              Wishlist
            </span>

          </Link>

        </div>



        <div className="icon-item">

          <Link to="/cart">

            <FaShoppingBag />

            <span>
              Bag
            </span>

          </Link>

        </div>


      </div>


    </header>

  );

}

export default Navbar;