// src/components/Footer.js

import React from 'react';
import './Footer.css';  // Create styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
        <nav className="footer-nav">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="social-icons">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
