// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file for footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* Add more footer links as needed */}
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 Your Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
