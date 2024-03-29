import React from 'react';
import './Header.css'; // Import CSS file for header styles
import Logo from '../assets/logo.png'

function Header() {

  return (
    <header id="header" style={{background:"red"}}> 
      <div className="logo">
        <img src={Logo} alt="Logo" />
      
      </div>
      <h1>Dream11</h1>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">prize</a></li>
          <li><a href="/contact">Rules</a></li>
          <li><a href="/contact">Services</a></li>
        </ul>
      </nav>
  
    </header>
  );
}

export default Header;

