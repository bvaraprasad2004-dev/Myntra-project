import React, { useState } from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import SortFilter from "../SortFilter/SortFilter";
import products from "../../data/products";

const ProductGrid = () => {
  const [sortOption, setSortOption] = useState("");

  let sortedProducts = [...products];

  if (sortOption === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="product-grid-container">

      <div className="grid-header">
        <h2 className="grid-title">TRENDING PRODUCTS</h2>

        <SortFilter
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};

export default ProductGrid;