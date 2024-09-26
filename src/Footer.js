import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-footer-top  ">
      <div className="footer-row container">
        {/* Logo Section */}
        <div className="col-4">
          <a href="/" className="logo-link-wrapper">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/669117fd7e590071c77616f7_s4m-logo-main.png"
              alt="S4 Smart Solutions Logo"
              className="footer-logo"
            />
          </a>
        </div>

     
        <div className="col-4 footer-section">
          <h5>Main</h5>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
          </ul>
        </div>


        <div className="col-4 footer-section">
          <h5>Pages</h5>
          <ul className="footer-links">
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="terms" className="footer-link">Terms & Conditions</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-copyright">
        <p>© 2024 S4 Smart Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
