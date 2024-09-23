import React from 'react';

const HeroSection = () => {
  return (
    <div className="container-fluid text-white p-5" id="body" style={{ backgroundColor: 'black', paddingBottom:'60px' }}>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 position-relative d-flex justify-content-start align-items-start rounded-lg image-container">
  <img
    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707340_Free_4_Photorealistic_Folders_Mockup-p-500.jpg"
    alt="Illustration"
    className="img-fluid position-absolute moving-image1"
    style={{
        max-width: 60%; right: 80%; bottom: 20%; transform: rotate(-15deg); border-radius: 20px;
    }}
  />
  <img
    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707342_Sticker-Mockup-p-500.jpg"
    alt="Sticker"
    className="img-fluid position-absolute moving-image2"
    id='moving2'
    style={{
      max-width: 44%; right: 26%; bottom: -19%; height: 300px; transform: rotate(20deg); border-radius: 20px;
      
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
