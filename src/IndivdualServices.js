import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const servicesData = {

  socialads: {
    title: "Social Ads",
    description: "Reach more of your potential customers and boost online visibility with social media advertising. We'll work with you to build an effective social ad strategy based on your unique goals and budget.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp",
    h3: "Connect with the right audiences through social ads",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features.webp",
  },
  displayads: {
    title: "Display Ads",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3: "Maximize your ROI with display ads",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  searchads: {
    title: "Search Ads",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Get more leads for your business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec25085dc1231bf1fa32_ppc-management-services-features.webp",
  },
  listings: {
    title: "Listings",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp",
    h3: "Managing your business listings is easier than ever",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features.webp",
  },
  websites: {
    title: "Website and Landing Pages",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7ba2038a5f4fad63a46_small-business-website-builder-site-security-p-500.webp",
    h3: "Set your website up for success",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile.webp",
  },
  emailmarketing: {
    title: "Targeted Email Marketing",
    description: "Increase brand awareness, drive site traffic, or promote a specific offer or event with targeted email marketing. We’ll work with you to build a strategy around your business goals.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp",
    h3: "Connecting you to the right people",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629eb3ab22f996542016c85_email-marketing-services-business-features.webp",
  },
  seo: {
    title: "SEO",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3: "Increase your business success with local SEO",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e89b296855116b41165f_small-business-seo-services-features.webp",
  },
  socialmedia: {
    title: "Social Media Marketing",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Build a better social media presence for your small business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  drupaldevelopment: {
    title: "Drupal Development Services",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e78303d00357b6088edc_social-media-marketing-dashboard-p-500.webp",
    h3: "Empowering Your Web Presence with Drupal",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  wordpress: {
    title: "WordPress Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c1dee9cd49d51c284e3f_1_uDJTLivemR18proTkBsMEQ-p-500.jpg",
    h3: "Transforming Ideas into Reality with WordPress",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c17b4f606da7eb6b3368_process-banner_1_.webp",
  },
  applicationdevelopmentservices: {
    title: "Application Development Services",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Crafting Custom Applications for Business Success",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bcc9ea0931b432483423_pexels-photo-4164418.webp",
  },
  salesforcedevelopmentservices: {
    title: "Salesforce Development Services",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcf9c63d095a2ee69a2_saleforce-development-services.jpg",
    h3: "Maximize your ROI with display ads",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  oracledatabaseservices: {
    title: "Oracle Database Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcd4554159d93bb689c_oracle.webp",
    h3: "Optimizing Data Management with Oracle Database Solutions",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbce4b25ba70add3718e_oracle-s.png",
  },
  phpdevelopmentservices: {
    title: "PHP Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bf49ed41fac1f20f96b0_PHP-Development-400x400.png",
    h3: "Expert PHP Development Solutions for Your Business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbd7c2e6b751afdc2ece_pexels-photo-574069.webp",
  },

};

const IndivdualServices = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion open by default

  const paragraphs = [
    { title: 'What is the best way to improve my business?', content: 'The best way is to focus on customer satisfaction and efficient processes.' },
    { title: 'How can I grow my revenue?', content: 'You can grow revenue by targeting new markets and improving your product.' },
    { title: 'What marketing strategies should I use?', content: 'Leverage social media and paid ads to target the right audience.' },
    { title: 'How do I increase customer retention?', content: 'Offering great customer service and loyalty programs can help increase retention.' }
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if clicked again
    } else {
      setOpenIndex(index); // Open the clicked accordion
    }
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <div className="social-ads-container">
        {/* First section for the social ad details */}
        <section className="header-content container py-5">
          <div className="row align-items-center">
            {/* Text content will appear first on all screens */}
            <div className="text-content col-12 col-md-6 order-1 order-md-1"> {/* Order 1 for both mobile and desktop */}
              <h1 className="display-4">{service.title}</h1>
              <p className="lead">{service.description}</p>
              <div className="cta-button-container mt-4 text-md-left">
                <button className="cta-button1">ASK US HOW IT WORKS</button>
              </div>
            </div>
            {/* Image content will appear second on mobile but beside the text on larger screens */}
            <div className="image-content col-12 col-md-6 order-2 order-md-2 text-center text-md-right">
              <img
                src={service.imageUrl}
                alt={`${service.title} Preview`}
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }} // Ensure the image doesn't overflow
              />
            </div>
          </div>
        </section>

        {/* Second section for the dashboard content with accordion */}
        <section className="dashboard-content container mt-5">
          <div className="row">
            <div className="text-content1 col-md-12"> {/* Full width content */}
              <h2 className="display-6">Get the best results for your business</h2>
              {paragraphs.map((para, index) => (
                <div key={index}>
                  <p
                    className="subheading1 lead"
                    onClick={() => toggleAccordion(index)}
                    style={{
                      cursor: 'pointer',
                      color: openIndex === index ? '#befb7c' : 'white', 
                      fontWeight: 'bold'
                    }}
                  >
                    {para.title}
                  </p>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p className="info-text">{para.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>





      <section className="display-ads-content">
        <div className="image-and-text">
          <img
            src={service.keyfeaturesimage}
            alt="Maximize Your ROI With Display Ads"
            className="display-ads-image"
          />
          <div className="display-ads-text">
            <h3>{service.h3}</h3>
            <h2>Maximize Your ROI With Display Ads</h2>
            <ul>
              <li>Take advantage of goal-based display ad management and targeting</li>
              <li>Use site and search retargeting to increase conversion rates</li>
              <li>Reach users where they are in real time with geofencing</li>
              <li>Replicate your best customers with lookalike audiences</li>
              <li>Explore a range of services for more effective display creative</li>
            </ul>
          </div>
        </div>
      </section>

      {/* New Section to Display Uploaded Image */}
      <section className="partner-recognition">
        <div className="content-wrapper">
          <div className="text-content3">
            <h2>Recognized By Industry-Leading Partners</h2>
            <p>Our team is recognized for maximizing customer success and driving growth through high-performing campaigns.</p>
          </div>
          <div className="image-row">
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660d1f1943c70caa5b6aa6f0_PremierBadgeClickable.svg" alt="Google Premier Partner" />
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660d1f196a7ef282a621d82a_2024-MSA-Partner-Program-Badge-Elite-2048x706-p-1600.webp" alt="Microsoft Advertising Elite Partner 2024" />
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660d1f1902766807ba75075b_meta-1.webp" alt="Meta Business Partner" />
          </div>
        </div>
      </section>
      <section>
        <div className="premium-section">
          <div className="text-content">
            <h4>Premium Solutions</h4>
            <h1>Ready To Get Started? Connect With Us.</h1>
            <Link to={"/contact"}>
              <button className="cta-button">GET A DEMO</button>
            </Link>
          </div>
          <div className="image-contentservice">
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660e77ec2dcc2cf4136017d4_two_arrows.webp" alt="Premium Solutions Stars" className="premium-image" />
          </div>
        </div>
      </section>
    </div>
  );
};


export default IndivdualServices;
