import React from "react";
import "./ProductCard.css";
import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="image-container">
        <img src={product.image} alt={product.title} />

        <button className="wishlist-btn">
          <FaHeart />
        </button>
      </div>

      <div className="product-info">

        <h3>{product.brand}</h3>

        <p>{product.title}</p>

        <div className="rating">
          <FaStar className="star" />
          {product.rating}
        </div>

        <div className="price">

          <span className="current-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{product.originalPrice}
          </span>

          <span className="discount">
            {product.discount}
          </span>

        </div>

        <button className="cart-btn">
          Add to Bag
        </button>

      </div>

    </div>
  );
};

export default ProductCard;