import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop-page">

      <h1>🛍️ Welcome to Myntra Shop</h1>

      <p>
        Discover the latest fashion collections from your
        favourite brands.
      </p>

      <div className="category-grid">

        <Link to="/category/men" className="category-box">👔 Men</Link>

        <Link to="/category/women" className="category-box">👗 Women</Link>

        <Link to="/category/kids" className="category-box">🧒 Kids</Link>

        <Link to="/category/footwear" className="category-box">👟 Footwear</Link>

        <Link to="/category/beauty" className="category-box">💄 Beauty</Link>

        <Link to="/category/home" className="category-box">🏠 Home</Link>

      </div>

      <div className="offers">

        <h2>🔥 Today's Offers</h2>

        <ul>
          <li>Flat 50% OFF on selected products</li>
          <li>Free Delivery on orders above ₹999</li>
          <li>Easy 7-Day Returns</li>
          <li>100% Original Brands</li>
        </ul>

      </div>

    </div>
  );
}

export default Shop;