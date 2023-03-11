import React, { useState } from "react";
import Navbar from "./Navbar";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch =()=>{
    setShowSearch(!showSearch)
    console.log('search clicked');
  }

  return (
    <div className="head">
      <div className="header">
        <div className="h-left">
          <span>EN</span>
          <span>USD</span>
        </div>

        <div className="h-right">
          <span>
            <BsPerson />
            My profile
          </span>
          <span>
            <FiShoppingCart />
            <span>0</span>
          </span>
          <span>
            <BiSearch onClick={handleSearch} />
          </span>
        </div>
      </div>

      <div className={`search-container ${showSearch ? 'show-search' : ""}`} >
        <div className="input-container">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
