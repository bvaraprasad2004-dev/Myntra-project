import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default SearchBar;