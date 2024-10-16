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
    accordionContent: [
      { title: 'Get the best results for your business', content: 'Optimize your budget with cross-media optimization. Our XMO technology lets you set one budget for your business goals, adjusting spend between channels based on real-time performance.' },
      { title: 'Have everything you need in one place', content: 'See performance and results from your social ad campaigns across multiple platforms in one unified marketing dashboard.' },
      { title: 'Know your campaigns are in good hands', content: 'You deserve a partner that’s committed to delivering excellence. Our experts can help you run great ads across Facebook, Instagram, Snapchat, and more.' },
    ]
  },
  displayads: {
    title: "Display Ads",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3: "Maximize your ROI with display ads",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
    accordionContent: [
      { title: 'Get your message delivered', content: 'Your display ads will run across the web where people are spending time online, helping you reach hundreds of millions of unique users each month.' },
      { title: 'Gain exposure for your business', content: 'Reach more audiences faster. Our networks give your business access to 1 out of 2 adults in the US.' },
      { title: 'See how your ads are performing', content: 'Measure and track your display campaign performance and leads with our marketing dashboard.' },
      { title: 'See how your ads are performing', content: 'Measure and track your display campaign performance and leads with our marketing dashboard.' },
    ]
  },
  searchads: {
    title: "Search Ads",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Get more leads for your business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec25085dc1231bf1fa32_ppc-management-services-features.webp",
    accordionContent: [
      { title: 'Experience the power of XMO', content: 'Optimize your search ad campaigns with help from our cross-media optimization technology. XMO enables goal-based advertising using insights, optimizations, and actions to deliver results.' },
      { title: 'Maximize your budget', content: 'Get real leads, not just clicks. Our platform uses historical data to continuously optimize your Google ads and other PPC campaigns over time, finding the right keywords, bids, and placements for your business.' },
      { title: 'Know exactly how your campaigns are performing', content: 'View real-time data like site visits, calls, emails, and forms submitted with online and mobile reports through our lead dashboard.' },
      { title: 'Put your trust in us', content: 'Get the latest and greatest insights for your business. We have leading partnerships with Google, Yahoo, and Microsoft that will help you grow.' },
    ]
  },
  listings: {
    title: "Listings",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp",
    h3: "Managing your business listings is easier than ever",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features.webp",
    accordionContent: [
      { title: 'Update all your listings with one click', content: 'Your business listings can be easily managed across up to 50+ online directories, including Google Business Profile, Apple Maps, Bing, Yelp, and more—all from one master listing in a single dashboard.' },
      { title: 'Get easy-to-read dashboard reports', content: 'See how your local business listings are performing, make updates and review your online info, and view reports on how people are getting to your listings.' },
      { title: 'Increase your business’s visibility', content: 'Be seen by the right audiences. Your directory listings show up in search results when it counts, so you can attract new customers.' },
      { title: 'Stay on top of your reviews', content: 'See your average star rating and most recent reviews, then easily respond to them with our all-in-one platform.' },
    ]
  },
  websites: {
    title: "Website and Landing Pages",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7ba2038a5f4fad63a46_small-business-website-builder-site-security-p-500.webp",
    h3: "Set your website up for success",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile.webp",
    accordionContent: [
      { title: 'Increase your conversions', content: 'Convert your website visitors into leads through click to call, web forms, call tracking, and more.' },
      { title: 'Understand what’s working', content: 'See what leads people to your site and what drives them to contact you with our tracking and capture technology.' },
      { title: 'Get everything you need in one place', content: 'Track your leads, listen to recorded phone calls, and follow up directly from our marketing dashboard.' },
      { title: 'Ensure your website is secure and user-friendly', content: 'Get a mobile-optimized and SEO-friendly site along with an SSL certificate to show search engines it’s safe.' },
    ]
  },
  emailmarketing: {
    title: "Targeted Email Marketing",
    description: "Increase brand awareness, drive site traffic, or promote a specific offer or event with targeted email marketing. We’ll work with you to build a strategy around your business goals.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660c0f4206348c58b1365a69_social-media-advertising-services-features-p-500.webp",
    h3: "Connecting you to the right people",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629eb3ab22f996542016c85_email-marketing-services-business-features.webp",
    accordionContent: [
      { title: 'Reach your intended audience', content: 'We follow proven best practices and target prospects by location, life event, and demographics to make sure your emails hit the mark.' },
      { title: 'Improve your campaign results', content: 'Send your message to people who actually want to hear from you. Our list-verification practices ensure emails are being delivered to your most likely customers.' },
      { title: 'Get tailored business solutions', content: 'Track your leads, listen to recorded phone calls, and follow up directly from our marketing dashboard.' },
    ]
  },
  seo: {
    title: "SEO",
    description: "Reach bigger audiences and increase your brand awareness. We’ll help identify your business goals and then run targeted display campaigns using retargeting, geofencing, and other advanced tactics.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3: "Increase your business success with local SEO",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e89b296855116b41165f_small-business-seo-services-features.webp",
    accordionContent: [
      { title: 'Optimize your site performance', content: 'We use strategic SEO keywords, topics, and tactics to help your business perform better in search results.' },
      { title: 'Improve visibility', content: 'See what leads people to your site and what drives them to contact you with our tracking and capture technology.' },
      { title: 'See real results', content: 'Get a view of new leads and traffic sources, discover which pages and search queries drive the most clicks, and more.' },
    ]
  },
  socialmedia: {
    title: "Social Media Marketing",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Build a better social media presence for your small business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
    accordionContent: [
      { title: 'Increase social engagement', content: 'Grow your reach with consistent, relevant posts that drive interactions with followers.' },
      { title: 'Manage your reviews', content: 'Maintain a strong online reputation. Our platform uses brand listening to find active conversations related to your business and then helps you respond.' },
      { title: 'Do it all in less time', content: 'There are never enough hours in your day. We’ll help manage your primary social media channels and review feedback, so you can focus on your customers.' },
    ]
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
  const [openIndex, setOpenIndex] = useState(0);

  const paragraphs = [
    { title: 'What is the best way to improve my business?', content: 'The best way is to focus on customer satisfaction and efficient processes.' },
    { title: 'How can I grow my revenue?', content: 'You can grow revenue by targeting new markets and improving your product.' },
    { title: 'What marketing strategies should I use?', content: 'Leverage social media and paid ads to target the right audience.' },
    { title: 'How do I increase customer retention?', content: 'Offering great customer service and loyalty programs can help increase retention.' }
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
     <div className="social-ads-container">
      {/* Header Section */}
      <section className="header-content container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="text-content1 col-12 col-md-6 order-1 order-md-1">
            <h1 className="display-4">{service.title}</h1>
            <p className="lead">{service.description}</p>
            <div className="cta-button-container text-md-left">
              <Link className="nav-link px-3" to="/contact">
                <button className="cta-button1">ASK US HOW IT WORKS</button>
              </Link>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="image-content3 col-12 col-md-6 order-3 order-md-2 text-center text-md-right">
            <img
              src={service.imageUrl}
              alt={`${service.title} Preview`}
              className="img-fluid indivdualimg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-content container">
        <div className="row">
          <div className="text-content1 col-md-12">
            {service.accordionContent &&
              service.accordionContent.map((item, index) => (
                <div key={index}>
                  <p
                    className="subheading1 lead"
                    onClick={() => toggleAccordion(index)}
                    style={{
                      cursor: "pointer",
                      color: openIndex === index ? "#befb7c" : "white",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </p>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p className="info-text">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>


    </div>



    <section className="display-ads-content container">
  <div className="row align-items-center" style={{ marginTop: '120px', background: '#ffffff' }}>
    <div className="col-md-6 d-flex justify-content-center">
      <img
        src={service.keyfeaturesimage}
        alt="Maximize Your ROI With Display Ads"
        className="display-ads-image"
        style={{ maxWidth: '400px', height: 'auto' }}
      />
    </div>
    <div className="col-md-6 display-ads-text">
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



      
      <section className="partner-recognition ">
      <div className="container">
        <div className="content-wrapper ">
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
        </div>
      </section>
      
      <section>
  <div className="premium-section">
    <div className="container">
      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-12 col-md-6 text-center text-md-left">
          <h4>Premium Solutions</h4>
          <h1>Ready To Get Started? Connect With Us.</h1>
          <Link to={"/contact"}>
            <button className="cta-button">GET A DEMO</button>
          </Link>
        </div>

        {/* Right Image Content */}
        <div className="col-12 col-md-6 text-center">
          <div className="image-contentservice">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660e77ec2dcc2cf4136017d4_two_arrows.webp"
              alt="Premium Solutions Stars"
              className="premium-image img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};


export default IndivdualServices;
