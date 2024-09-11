import React from 'react';

const Body = () => {
  return (
    <div className="container-fluid pb-2">
      <div className="row bodycon">
        {/* Left Section */}
        <div className="left-section col-md-6">
          <h1>Elevate Your Business with S4 Smart Solutions</h1>
          <p>
            With 20+ years of experience, our proven record of innovation and
            performance in the digital marketing industry will help you drive
            results.
            <span className="border-right-6"></span>
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section col-md-6">
          {/** First Item */}
          <div className="item">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/663a05a92dbca0ca2d2a0f94_Icon-3.webp"
              alt="Team Icon"
              className="icon"
            />
            <div>
              <h3>Take control of your business goals</h3>
             
              <p>with a team of experts behind you</p>
            </div>
            </div>
         

          {/** Second Item */}
          <div className="item">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/663db399bfa2df8a64075956_Icon-5.webp"
              alt="Partner Icon"
              className="icon"
            />
            <div>
              <h3>Feel secure knowing you have a partner</h3>
              <p>that will help you get ahead</p>
            </div>
          </div>

          {/** Third Item */}
          <div className="item">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/663db3998a65bd40fb989855_Group-795.webp"
              alt="Data Icon"
              className="icon"
            />
            <div>
              <h3>Tap into actionable data and insights</h3>
              <p>with our smart technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Body;
