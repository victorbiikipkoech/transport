// src/components/Header.js

import React from 'react';
import './Header.css';  // Create styles for the header

function Header() {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="#contact">Contact</a>
        <a href="#sign-up" className="cta">Sign Up</a>
      </nav>
    </header>
  );
}

export default Header;
