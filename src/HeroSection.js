import React from 'react';

const HeroSection = () => {
  return (
    <div className="container-fluid text-white p-5" id="body" style={{ backgroundColor: 'black', height: '100vh' }}>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 position-relative d-flex justify-content-start align-items-start rounded-lg image-container">
  <img
    src="image/hero1.jpg"
    alt="Illustration"
    className="img-fluid position-absolute moving-image hide-on-mobile"
    style={{
      maxWidth: '60%',
      right: '80%',
      bottom: '-4%',
      transform: 'rotate(-15deg)',
      borderRadius: '20px'
    }}
  />
  <img
    src="image/hero2.jpg"
    alt="Sticker"
    className="img-fluid position-absolute moving-image hide-on-mobile sticker"
    style={{
      maxWidth: '45%',
      right: '28%',
      bottom: '-54%',
      height: '300px',
      transform: 'rotate(18deg)',
      borderRadius: '20px'
    }}
  />
</div>


        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-start custom-text-section">
          <h1 className="main-heading" style={{ fontSize: '3.6rem', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '1rem', textAlign: 'left' }}>
            Unlock Your Business Potential With AI-Powered Solutions.
          </h1>
          <p className="subheading" style={{ fontSize: '1.2rem', maxWidth: '500px', marginBottom: '0', textAlign: 'left' }}>
            Find, convert, and keep more customers with our growth marketing platform. We offer innovative technology and unparalleled expertise to move your business forward.
          </p>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
