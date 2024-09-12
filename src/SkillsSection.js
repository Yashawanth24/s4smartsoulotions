import React from 'react';


const SkillsSection = () => {
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
    </div>
  );
};

export default SkillsSection;
