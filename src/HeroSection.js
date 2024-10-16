import React from 'react';

const HeroSection = () => {
  return (
    <div className="container-fluid text-white p-5" id="body" style={{ backgroundColor: 'black', paddingBottom:'60px' }}>
      <div className="row ">
        <div className="col-md-1"></div>
        <div className="col-md-5 position-relative d-flex justify-content-start align-items-start rounded-lg image-container1">
  <img
    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707340_Free_4_Photorealistic_Folders_Mockup-p-500.jpg"
    alt="Illustration"
    className="img-fluid position-absolute moving-image1"
    style={{
      maxWidth: '60%',
      right: '80%',
      bottom: '23%',
      transform: 'rotate(-15deg)',
      borderRadius: '20px',
    }}
  />
  <img
    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707342_Sticker-Mockup-p-500.jpg"
    alt="Sticker"
    className="img-fluid position-absolute moving-image2"
    id='moving2'
    style={{
      maxWidth: '44%',
      right: '27%',
      bottom: '-10%',
    
      transform: 'rotate(20deg)',
      borderRadius: '20px'
      
    }}
  />
</div>


        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-start custom-text-section">
          <h1 className="main-heading" style={{ fontWeight: 'bold' , fontFamily:'Inter', display:'block', paddingRight:'20px'}}>
            Unlock Your Business Potential With AI-Powered Solutions.
          </h1>
          <p className="subheading" style={{ fontSize: '17px', maxWidth: '450px', marginBottom: '0', textAlign: 'left', display:'block', fontWeight:'100px',  }}>
            Find, convert, and keep more customers with our growth marketing platform. We offer innovative technology and unparalleled expertise to move your business forward.
          </p>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default HeroSection;
