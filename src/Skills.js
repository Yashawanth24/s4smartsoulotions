import React from 'react';


const Skills = () => {
  return (
    <div className="skills-container">
      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-card">
          <h6 className="skills-subtitle">OUR</h6>
          <h1 className="skills-title">SKILLS</h1>
          <div className="skills-list">
            <div className="skill-item">
              <h2 className="skill-percentage">70%</h2>
              <div className="skill-line"></div>
              <h5 className="skill-name">WEB DESIGN</h5>
            </div>
            <div className="skill-item">
              <h2 className="skill-percentage">80%</h2>
              <div className="skill-line"></div>
              <h5 className="skill-name">DEVELOPMENT</h5>
            </div>
            <div className="skill-item">
              <h2 className="skill-percentage">90%</h2>
              <div className="skill-line"></div>
              <h5 className="skill-name">UX/UI CONCEPT</h5>
            </div>
            <div className="skill-item">
              <h2 className="skill-percentage">65%</h2>
              <div className="skill-line"></div>
              <h5 className="skill-name">BRANDING</h5>
            </div>
          </div>
        </div>
      </div>

      {/* LET'S TALK Section */}
      <div className="cta-section">
        <div className="cta-card">
          <div className="title-flex-wrapper">
            <h5>LET'S</h5>
            <h2 className="cta-title" >TALK</h2>
          </div>
          <div className="cta-content">
            {/* Avatar Section */}
            <div className="cta-avatar-flex">
              <div className="avatars-flex">
              <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370735d_arrow_out.svg" alt="Arrow Icon" className="services-arrow-image" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707335_Team2.jpg" alt="Team Member 1" width="64" height="64" className="about-avatar" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707336_Team3.jpg" alt="Team Member 2" width="64" height="64" className="about-avatar" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370733e_Team1.jpg" alt="Team Member 3" width="64" height="64" className="about-avatar" />
              </div>
              
            </div>
            {/* Text Section */}
            <p className="cta-text">
              "Beautiful design has the power to captivate."
              <br />
              "Get in touch with our team of designers."
            </p>
            {/* Contact Button */}
            <a href="/contact" className="cta-button">
              CONTACT US →
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Skills;
