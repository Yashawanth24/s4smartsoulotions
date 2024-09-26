import React from 'react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  return (
    <div className="services-section">
        <section >
      <div className="services-content">
        <h2 className="services-title">OUR</h2>
        <h1 className="services-heading font-weight-bold">SERVICES</h1>
        <p className="services-description">
          Our design agency offers innovative solutions that captivate customers, drive engagement, and get results.
        </p>
        <hr className="services-line" />
      </div>
      </section>
      <div className="container">
  <div className="row mt-5">
    <div className="col-md-6">
      <Link to="/services/socialads" className="text-decoration-none">
        <div className="card p-4 mb-4 shadow-sm">
          <div className="d-flex align-items-center">
            <img 
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp" 
              alt="Social Ads" 
              className="img-fluid me-3" 
              style={{ width: '40px', height: '40px' }} 
            />
            <h5 className="card-title m-4">Social Ads</h5>
          </div>
          <p className="card-text">
            Reach more of your potential customers and boost online visibility with social media advertising. 
            We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
          </p>
          <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
        </div>
      </Link>
    </div>
  
    <div className="col-md-6">
            <Link to="/services/displayads" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Display Ads</h5>
                </div>
                <p className="card-text mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            
            <div className="col-md-6">
            <Link to="/services/searchads" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec25085dc1231bf1fa32_ppc-management-services-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }}  
                  />
                  <h5 className="card-title m-4">Search Ads</h5>
                </div>
                <p className="card-text mt-3">
                Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/listings" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Listings</h5>
                </div>
                <p className="card-text mt-3">
                Make sure your business gets found with our business listings management solution. We’ll help you get accurately listed where it matters to drive more visits, calls, and clicks to your business.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/websites" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }}  
                  />
                  <h5 className="card-title m-4">Website and Landing Pages</h5>
                </div>
                <p className="card-text mt-3">
                Your website is your first chance to make a great impression with potential customers. Convert more visitors with a site that’s current, fully optimized, and gets found on search engines.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/emailmarketing" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629ea8a1e8805c27f400f01_email-marketing-services-email-example-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Targeted Email Marketing</h5>
                </div>
                <p className="card-text mt-3">
                Increase brand awareness, drive site traffic, or promote a specific offer or event with targeted email marketing. We’ll work with you to build a strategy around your business goals.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/seo" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e89b296855116b41165f_small-business-seo-services-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">SEO</h5>
                </div>
                <p className="card-text mt-3">
                Maximize your online visibility with our local SEO solution. We’ll work with you to get to know your business, your competitors, and more, so you always show up where you want to be.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/socialmedia" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e7825d907d89ae91c05f_social-media-marketing-management-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }}  
                  />
                  <h5 className="card-title m-4">Social Media Marketing</h5>
                </div>
                <p className="card-text mt-3">
                Managing your social media accounts is a 24/7 job. Grow your brand presence on Facebook, Twitter, and more with smart automation features for social media marketing.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/drupaldevelopment" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Drupal Development Services</h5>
                </div>
                <p className="card-text mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/wordpress" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }}  
                  />
                  <h5 className="card-title m-4">WordPress Development Services</h5>
                </div>
                <p className="card-text mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/appliactiondevelopment" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec25085dc1231bf1fa32_ppc-management-services-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Application Development Service</h5>
                </div>
                <p className="card-text mt-3">
                At S4 Smart Solutions, we understand that every business has unique needs. Our custom application development services are designed to create innovative software solutions that drive
                efficiency.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/salesforcedevelopmentservices" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Salesforce Development Services</h5>
                </div>
                <p className="card-text mt-3">
                At S4 Smart Solutions, we understand that every business has unique needs. Our custom application development services are designed to create innovative software solutions that drive
                efficiency.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/oracledatabaseservices" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                  <h5 className="card-title m-4">Oracle Database Services</h5>
                </div>
                <p className="card-text mt-3">
                we provide comprehensive Oracle Database services that help businesses manage and optimize their data effectively. Our team of experts delivers customized
                solutions.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6">
            <Link to="/services/phpdevelopmentservices" className="text-decoration-none">
              <div className="card p-4 mb-4 shadow-sm">
                <div className="d-flex align-items-center">
                  <img 
                    src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629ea8a1e8805c27f400f01_email-marketing-services-email-example-p-500.webp" 
                    alt="Social Ads" 
                    className="img-fluid me-3" 
                    style={{ width: '40px', height: '40px' }}  
                  />
                  <h5 className="card-title m-4 ">PHP Development Services</h5>
                </div>
                <p className="card-text mt-3">
                we specialize in delivering high-quality PHP development services tailored to meet the unique needs of your business. Our team of experienced developers is proficient in creating dynamic, robust, and scalable web applications using PHP.
                </p>
                <div className="d-flex justify-content-between align-items-center learn-more-container">
            <h5 className="learn-more-text mb-0">Learn More</h5>
            <img className="arr-img" src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6604adbe42b73cba93707334_ArrowSide.svg" alt="arrow" />
          </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="cta-section">
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
              "Beautiful design has the power to captivate."
              <br />
              "Get in touch with our team of designers."
            </p>
            <a href="/contact" className="cta-button">
              CONTACT US →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection