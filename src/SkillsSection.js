import React from 'react';


const SkillsSection = () => {
  return (
    <div className="skills-container">
      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-card container">
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
      <div className="cta-section container">
        <div className="cta-card">
          <div className="title-flex-wrapper">
            <h5>LET'S</h5>
            <h2 className="cta-title" >TALK</h2>
          </div>
          <div className="cta-content">
            <div className="cta-avatar-flex">
              <div className="avatars-flex">
              <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370735d_arrow_out.svg" alt="Arrow Icon" className="services-arrow-image" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707335_Team2.jpg" alt="Team Member 1" width="64" height="64" className="about-avatar" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707336_Team3.jpg" alt="Team Member 2" width="64" height="64" className="about-avatar" />
                <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370733e_Team1.jpg" alt="Team Member 3" width="64" height="64" className="about-avatar" />
              </div>
              
            </div>
            <p className="cta-text">
              Beautiful design has the power to captivate.
              <br />
              Get in touch with our team of designers.
            </p>
            <a href="/contact" className="cta-button3">
              CONTACT US →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
