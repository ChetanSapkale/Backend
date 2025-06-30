import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="navbar-title">
          <Link to="/">Navbar</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
