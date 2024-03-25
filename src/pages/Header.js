import React from 'react';
import './Header.css'; // Import CSS file for header styles
import Logo from '../assets/logo.png'
function Header() {

  return (
    <header id="header" style={{background:"green"}}> 
      <div className="logo">
        {/* Your logo image or text */}
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

