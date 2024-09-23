import React from "react";
import { useParams } from "react-router-dom";

const servicesData = {
  socialads: {
    title: "Social Ads",
    description: "Reach more of your potential customers and boost online visibility with social media advertising. We'll work with you to build an effective social ad strategy based on your unique goals and budget.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp",
    h3:"Connect with the right audiences through social ads",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features.webp",
  },
  displayads: {
    title: "Display Ads",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3:"Maximize your ROI with display ads",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  searchads: {
    title: "Search Ads",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3:"Get more leads for your business",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec25085dc1231bf1fa32_ppc-management-services-features.webp",
  },
  listings: {
    title: "Listings",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp",
    h3:"Managing your business listings is easier than ever",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features.webp",
  },
  websites: {
    title: "Website and Landing Pages",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7ba2038a5f4fad63a46_small-business-website-builder-site-security-p-500.webp",
    h3:"Set your website up for success",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile.webp",
  },
  emailmarketing: {
    title: "Targeted Email Marketing",
    description: "Increase brand awareness, drive site traffic, or promote a specific offer or event with targeted email marketing. We’ll work with you to build a strategy around your business goals.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp",
    h3:"Connecting you to the right people",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629eb3ab22f996542016c85_email-marketing-services-business-features.webp",
  },
  seo: {
    title: "SEO",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3:"Increase your business success with local SEO",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e89b296855116b41165f_small-business-seo-services-features.webp",
  },
  socialmedia: {
    title: "Social Media Marketing",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3:"Build a better social media presence for your small business",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  drupaldevelopment: {
    title: "Drupal Development Services",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e78303d00357b6088edc_social-media-marketing-dashboard-p-500.webp",
    h3:"Empowering Your Web Presence with Drupal",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  wordpress: {
    title: "WordPress Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c1dee9cd49d51c284e3f_1_uDJTLivemR18proTkBsMEQ-p-500.jpg",
    h3:"Transforming Ideas into Reality with WordPress",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c17b4f606da7eb6b3368_process-banner_1_.webp",
  },
  applicationdevelopmentservices: {
    title: "Application Development Services",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3:"Crafting Custom Applications for Business Success",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bcc9ea0931b432483423_pexels-photo-4164418.webp",
  },
  salesforcedevelopmentservices: {
    title: "Salesforce Development Services",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcf9c63d095a2ee69a2_saleforce-development-services.jpg",
    h3:"Maximize your ROI with display ads",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
  },
  oracledatabaseservices: {
    title: "Oracle Database Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcd4554159d93bb689c_oracle.webp",
    h3:"Optimizing Data Management with Oracle Database Solutions",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbce4b25ba70add3718e_oracle-s.png",
  },
  phpdevelopmentservices: {
    title: "PHP Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bf49ed41fac1f20f96b0_PHP-Development-400x400.png",
    h3:"Expert PHP Development Solutions for Your Business",
    keyfeaturesimage:"https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbd7c2e6b751afdc2ece_pexels-photo-574069.webp",
  },

};

const IndivdualServices = () => {
  const { serviceId } = useParams(); 
  const service = servicesData[serviceId]; 

  if (!service) {
    return <div>Service not found</div>; 
  }

  return (
    <div>
    <div className="social-ads-container">

      <section className="header-content">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <div className="cta-button-container">
          <button className="cta-button1">ASK US HOW IT WORKS</button>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="text-content">
          <h2>Get the best results for your business</h2>
          <p className="subheading1">Have everything you need in one place</p>
          <p className="info-text">
            See performance and results from your campaigns across multiple platforms in one unified marketing dashboard.
          </p>
          <p className="info-text">Know your campaigns are in good hands</p>
        </div>

        <div className="image-content">
          <img src={service.imageUrl} alt={`${service.title} Preview`} />
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
    
    </div>
  );
};


export default IndivdualServices;
