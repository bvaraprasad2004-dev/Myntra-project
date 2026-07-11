import React from "react";
import "./SortFilter.css";

const SortFilter = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-container">
      <label>Sort By:</label>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Recommended</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Customer Rating</option>
      </select>
    </div>
  );
};

export default SortFilter;