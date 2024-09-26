import { Link } from "react-router-dom";
const Product = () => {
  
  return (
    <div className='product'>
      <div className="container " >
        <div className="row align-items-center">
          <div className="col-md-6 textcontant">
            <h6 className="text-uppercase">Products & Services</h6>
            <h1 className="producth1">Built for you and your needs</h1>
            <p className="lead">
              Be more efficient in your marketing with our all-in-one growth platform. 
              We’ll equip your business with the tools you need to succeed – and thrive.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img 
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/663dbca2e7b8bda92e2a7fb2_liq-homepage-blue-star-orange-arr-left.webp" 
              alt="Icon"
              className="img-fluid" 
              id="productimg"
              style={{ maxWidth: '360px' }} 
            />
          </div>
        </div>
        </div>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Social Ads</h5>
                </div>
                <p className="card-text1 mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <Link to="/services/socialads" className="font-weight-bold text-uppercase">
      Grow Your Business &rarr;
    </Link>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Display Ads</h5>
                </div>
                <p className="card-text1 mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <a href="/services/displayads" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }}  
                  />
                  <h5 className="card-title m-4">Search Ads</h5>
                </div>
                <p className="card-text1 mt-3">
                Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across
                </p>
                <a href="/services/searchads" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Listings</h5>
                </div>
                <p className="card-text1 mt-3">
                Make sure your business gets found with our business listings management solution. We’ll help you get accurately listed where it matters to drive more visits, calls, and clicks to your business.
                </p>
                <a href="/services/listings" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }}  
                  />
                  <h5 className="card-title m-4">Website and Landing Pages</h5>
                </div>
                <p className="card-text1 mt-3">
                Your website is your first chance to make a great impression with potential customers. Convert more visitors with a site that’s current, fully optimized, and gets found on search engines.
                </p>
                <a href="/services/websites" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Targeted Email Marketing</h5>
                </div>
                <p className="card-text1 mt-3">
                Increase brand awareness, drive site traffic, or promote a specific offer or event with targeted email marketing. We’ll work with you to build a strategy around your business goals.
                </p>
                <a href="/services/emailmarketing" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">SEO</h5>
                </div>
                <p className="card-text1 mt-3">
                Maximize your online visibility with our local SEO solution. We’ll work with you to get to know your business, your competitors, and more, so you always show up where you want to be.
                </p>
                <a href="/services/seo" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }}  
                  />
                  <h5 className="card-title m-4">Social Media Marketing</h5>
                </div>
                <p className="card-text1 mt-3">
                Managing your social media accounts is a 24/7 job. Grow your brand presence on Facebook, Twitter, and more with smart automation features for social media marketing.
                </p>
                <a href="/services/socialmedia" className="font-weight-bold text-uppercase productgrow">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Drupal Development Services</h5>
                </div>
                <p className="card-text1 mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <a href="/services/drupaldevelopment" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }}  
                  />
                  <h5 className="card-title m-4">WordPress Development Services</h5>
                </div>
                <p className="card-text1 mt-3">
                  Reach more of your potential customers and boost online visibility with social media advertising. 
                  We’ll work with you to build an effective social ad strategy based on your unique goals and budget.
                </p>
                <a href="/services/wordpress" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Application Development Services</h5>
                </div>
                <p className="card-text1 mt-3">
                At S4 Smart Solutions, we understand that every business has unique needs. Our custom application development services are designed to create innovative software solutions that drive
                efficiency and growth. From mobile apps to complex enterprise solutions, we have you covered.
                </p>
                <a href="/services/appliactiondevelopment" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Salesforce Development Services</h5>
                </div>
                <p className="card-text1 mt-3">
                At S4 Smart Solutions, we help businesses unlock the full potential of Salesforce through
                customized development solutions. Our certified Salesforce experts tailor the platform to fit your
                unique business processes, enhancing efficiency and driving growth.
                </p>
                <a href="/services/salesforcedevelopmentservices" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }} 
                  />
                  <h5 className="card-title m-4">Oracle Database Services</h5>
                </div>
                <p className="card-text1 mt-3">
                we provide comprehensive Oracle Database services that help businesses manage and optimize their data effectively. Our team of experts delivers customized
                solutions to meet your data management needs, ensuring reliability and performance.
                </p>
                <a href="/services/oracledatabaseservices" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
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
                    style={{ width: '100px', height: '100px' }}  
                  />
                  <h5 className="card-title m-4">PHP Development Services</h5>
                </div>
                <p className="card-text1 mt-3">
                we specialize in delivering high-quality PHP development services tailored to meet the unique needs of your business. Our team of experienced developers is proficient in creating dynamic, robust, and scalable web applications using PHP.
                </p>
                <a href="/services/phpdevelopmentservices" className="font-weight-bold text-uppercase">
                  Grow Your Business &rarr;
                </a>
              </div>
              </Link>
            </div>
          </div>
        </div>
      
    </div>
  );
};
export default Product;