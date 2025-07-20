import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Blogify</h4>
          <p>Empowering voices through storytelling.</p>
        </div>

        <div className="footer-column">
          <h5>Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/create">Create</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Connect</h5>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
