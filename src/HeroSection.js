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
    className="img-fluid position-absolute moving-image1"
    style={{
      maxWidth: '60%',
      right: '80%',
      bottom: '12%',
      transform: 'rotate(-15deg)',
      borderRadius: '20px'
    }}
  />
  <img
    src="image/hero2.jpg"
    alt="Sticker"
    className="img-fluid position-absolute moving-image2"
    id='moving2'
    style={{
      maxWidth: '38%',
      right: '34%',
      bottom: '-24%',
      height: '300px',
      transform: 'rotate(20deg)',
      borderRadius: '20px'
      
    }}
  />
</div>


        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-start custom-text-section">
          <h1 className="main-heading" style={{ fontWeight: 'bold', textAlign: 'left' , fontFamily:'Inter', display:'block', width:'450px', paddingRight:'20px'}}>
            Unlock Your Business Potential With AI-Powered Solutions.
          </h1>
          <p className="subheading" style={{ fontSize: '17px', maxWidth: '500px', marginBottom: '0', textAlign: 'left', display:'block', fontWeight:'100px',  width:'450px' }}>
            Find, convert, and keep more customers with our growth marketing platform. We offer innovative technology and unparalleled expertise to move your business forward.
          </p>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
