import React from 'react';



const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 className="about-us-heading">OUR AGENCY</h2>
          <h1 className="about-us-title">ABOUT</h1>
          <div className="about-us-team">
          <h1 className="about-us-subtitle">US</h1>
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370733e_Team1.jpg" alt="Team Member 1" className="team-photo" />
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707335_Team2.jpg" alt="Team Member 2" className="team-photo" />
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707336_Team3.jpg" alt="Team Member 3" className="team-photo" />
          </div>
        <div>  <p className="about-us-description">
            We specialize in creating visually captivating designs that leave a lasting impression by transforming your ideas into stunning visuals.
          </p></div>
        </div>
        <div className="about-us-image">
          <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370734d_womanwithlaptop-p-800.jpg "alt="Laptop Workstation" className="laptop-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
