import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John White',
      role: 'CEO',
      email: 'john@agency.com',
      image: 'https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707347_portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling.jpg', // Replace with actual image URL
      socials: {
        youtube: 'https://youtube.com',
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
    {
      name: 'Jane Doe',
      role: 'Designer',
      email: 'jane@agency.com',
      image: 'https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707336_Team3.jpg', // Replace with actual image URL
      socials: {
        youtube: 'https://youtube.com',
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
    {
      name: 'John Doe',
      role: 'Developer',
      email: 'john@agency.com',
      image: 'https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707335_Team2.jpg', // Replace with actual image URL
      socials: {
        youtube: 'https://youtube.com',
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
      },
    },
  ];

  return (
    <div className="about-us-container ">
      <div className="about-us-content container">
        <div className="about-us-text">
          <h2 className="about-us-heading">OUR AGENCY</h2>
          <h1 className="about-us-title">ABOUT</h1>
          <div className="about-us-team">
            <h1 className="about-us-subtitle">US</h1>
            <div className="avatars-container">
              <img
                src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370733e_Team1.jpg"
                alt="Team Member 1"
                className="team-photo"
              />
              <img
                src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707335_Team2.jpg"
                alt="Team Member 2"
                className="team-photo"
              />
              <img
                src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707336_Team3.jpg"
                alt="Team Member 3"
                className="team-photo"
              />
            </div>
          </div>


          <p className="about-us-container">
            We specialize in creating visually captivating designs that leave a lasting impression by transforming your ideas into stunning visuals.
          </p>
        </div>

    
        <div className="about-us-image">
          <img
            src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370734d_womanwithlaptop-p-800.jpg"
            alt="Laptop Workstation"
            className="laptop-image"
          />
        </div>
      </div>
      <div className='space-122px'></div>
      <div className="history-section container">
      {/* Statistics */}
      <div className="statistics">
        <div className="stat-box">
          <h1>76</h1>
          <p>Projects</p>
        </div>
        <div className="stat-box">
          <h1>98</h1>
          <p>Clients</p>
        </div>
        <div className="stat-box">
          <h1>16</h1>
          <p>Awards</p>
        </div>
        <div className="stat-box">
          <h1>10</h1>
          <p>Years</p>
        </div>
      </div>
      <div className='space-122px'></div>
      {/* History */}
      <div className="history-content">
      <div className="row container">
        {/* Left Column for Year */}
        <div className="col-left">
          <h2 className="year">2013</h2>
        </div>

        {/* Right Column for History Title */}
        <div className="col-right">
          <h5 className="our">OUR</h5>
          <h1 className="history">HISTORY</h1>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.
          </p>
       
      </div>
     
      <div className="timeline">
  <div className="timeline-item">
    <div className="icon-text">
      <div className="circle">
        <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370735f_electric_bolt.svg" alt="Founded" />
      </div>
      <p>Founded</p>
    </div>
  </div>
  <div className="timeline-separator">
    <hr />
  </div>
  <div className="timeline-item">
    <div className="icon-text">
      <div className="circle">
        <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370735e_double_arrow.svg" alt="Expand" />
      </div>
      <p>Expand</p>
    </div>
  </div>
  <div className="timeline-separator">
    <hr />
  </div>
  <div className="timeline-item">
    <div className="icon-text">
      <div className="circle">
        <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707345_Webclip.png" alt="Today" />
      </div>
      <p>Today</p>
    </div>
  </div>
</div>
<div className='space-122px'></div>
<div className=" story-section">
      <div className="row container">
        <div className="col-md-6 ">
          <div className="title-container">
            <div className="title">
              <h4>OUR</h4>
              <h1>STORY</h1>
            </div>
          </div>
          <div className='left-content'>
          <p className="paragraph">
            Established in 2013, our agency emerged from a collective passion for design, technology, and the boundless potential of the internet.
          </p>
          <p className="paragraph">
            Initially comprising a close-knit circle sharing a belief in the Internet's transformative capacity for enriching digital interactions, we commenced our journey from humble beginnings.
          </p>
          <p className="paragraph">
            Evolving steadily, we've transformed into a vibrant, proficient team, driven by a singular mission to enhance the web's landscape, pixel by pixel.
          </p>
          <p className="paragraph">
            Our triumphs are owed to our unwavering commitment to excellence, ingenuity, and teamwork, propelling our journey towards success.
          </p>
        </div>
        </div>
        <div className="col-md-6 right-content">
          <h5>GET TO KNOW</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis.</p>
          <img 
            src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba9370736f_ParallaxImage.jpg" 
            alt="Technology items"
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
    
    <div className='space-122px'></div>
    <div className="team-sections text-center py-5  text-light container">
      <div className='team-text'>
      <h2 className="mb-4 team-heading">GET TO KNOW US</h2>
      <h1 className="display-4 team-hugetext" >THE TEAM</h1>
      <p className="lead2 mb-5">Our team of talented designers and developers bring expertise and creativity to every project.</p>
      </div>
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="team-member p-4  ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mb-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h3 className="text-success">{member.name}</h3>
                <p className="text-muted">{member.role}</p>
                <div className="social-icons mb-2">
                  <a href={member.socials.youtube} target="_blank" rel="noreferrer" className="text-light mx-2">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="text-light mx-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.socials.tiktok} target="_blank" rel="noreferrer" className="text-light mx-2">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </div>
                <p>{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='space-122px'></div>
    <div className="skills-section ">
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


    </div>
    </div>
    </div>
  );
};

export default AboutUs;
