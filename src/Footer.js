import React from 'react';


const Footer = () => {
  return (
    <footer className="footer-footer-top">
      <div className="footer-row">
        {/* Logo */}
        <a href="/" className="logo-link-wrapper">
          <img
            src="image/logo.png" // replace with the actual logo URL
            alt="S4 Smart Solutions Logo"
            className="footer-logo"
          />
        </a>

        {/* Main Section */}
        <div className="footer-section">
          <h5>Main</h5>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
          </ul>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h5>Pages</h5>
          <ul className="footer-links">
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© 2024 S4 Smart Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
