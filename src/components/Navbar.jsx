import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Icon.png";
import { navbarData } from "../data/navbarData";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link>
          <img src={Logo} alt="" />
          <span>E-comm</span>
        </Link>
      </div>

      <ul className="nav-menu">
        {navbarData.map((tab, i) => {
          return (
            <li key={i}>
              <Link to={tab.url}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
