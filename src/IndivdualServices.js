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
    ],
    keypoints:[[
    {  title: "Social Ads",},
      {point:'Facebook ad management'},
      {point:'Instagram ad management'},
      {point:'Facebook Audience Network ads'},
      {point:'Advanced targeting options'},
    ]],
          repeatKeypoints: false,
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
    ],
    keypoints:[[
     { title: "Display Ads"},
      {point:'Take advantage of goal-based display ad management and targeting'},
      {point:'Use site and search retargeting to increase conversion rates'},
      {point:'Reach users where they are in real time with geofencing'},
      {point:'Replicate your best customers with lookalike audiences'},
         ] ]
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
    ],
    keypoints:[[
      {  title: "Search Ads"},
      {point:'Flexible search ad management across Google, Microsoft, and all major search engines'},
      {point:'Smart budget optimization'},
      {point:'Comprehensive and easy-to-read reporting'},
      {point:'Explore additional features like Local Services Ads, Shopping Ads, and mobile ad call extensions'},
          ]]
   
  },
  listings: {
   title: "Listings",
    description: "Make sure your business gets found with our business listings management solution. We’ll help you get accurately listed where it matters to drive more visits, calls, and clicks to your business.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features-p-500.webp",
    h3: "Managing your business listings is easier than ever",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f798dfe0688fee2bd632_local-business-listing-management-tool-features.webp",
    accordionContent: [
      { title: 'Update all your listings with one click', content: 'Your business listings can be easily managed across up to 50+ online directories, including Google Business Profile, Apple Maps, Bing, Yelp, and more—all from one master listing in a single dashboard.' },
      { title: 'Get easy-to-read dashboard reports', content: 'See how your local business listings are performing, make updates and review your online info, and view reports on how people are getting to your listings.' },
      { title: 'Increase your business’s visibility', content: 'Be seen by the right audiences. Your directory listings show up in search results when it counts, so you can attract new customers.' },
      { title: 'Stay on top of your reviews', content: 'See your average star rating and most recent reviews, then easily respond to them with our all-in-one platform.' },
    ],
    keypoints:[[
      {title: "Listings"},
      {point:'Manage your listings across one or multiple business locations'},
      {point:'Up to 50+ online business listing directories'},
      {point:'A single dashboard to manage and automate listings updates'},
      {point:'Simplified review monitoring and management'},
      {point:'Comprehensive and easy-to-read reporting'},
          ]]
  },
  websites: {
    title: "Website and Landing Pages",
    description: "Your website is your first chance to make a great impression with potential customers. Convert more visitors with a site that’s current, fully optimized, and gets found on search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7ba2038a5f4fad63a46_small-business-website-builder-site-security-p-500.webp",
    h3: "Set your website up for success",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628f7bb1312e259fc83eda0_small-business-website-builder-site-design-desktop-mobile.webp",
    accordionContent: [
      { title: 'Increase your conversions', content: 'Convert your website visitors into leads through click to call, web forms, call tracking, and more.' },
      { title: 'Understand what’s working', content: 'See what leads people to your site and what drives them to contact you with our tracking and capture technology.' },
      { title: 'Get everything you need in one place', content: 'Track your leads, listen to recorded phone calls, and follow up directly from our marketing dashboard.' },
      { title: 'Ensure your website is secure and user-friendly', content: 'Get a mobile-optimized and SEO-friendly site along with an SSL certificate to show search engines it’s safe.' },
    ],
    keypoints:[[
      {title: "Website and Landing Pages"},
      {point:'Website creation from a choice of designs'},
      {point:'Expert copywriting'},
      {point:'Responsive, mobile-friendly, and search-optimized templates'},
      {point:'Lead tracking technology'},
      {point:'Monthly updates and support'},
          ]]
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
    ],
    keypoints:[[
{title: "Targeted Email Marketing"},
      {point:'Email copywriting, list building, and delivery'},
      {point:'Location and demographic-based audience targeting'},
      {point:'Matchback reporting'},
      {point:'Explore additional features like retargeted direct mail and reminder emails'},
          ]]
  },
  seo: {
    title: "SEO",
    description: "Maximize your online visibility with our local SEO solution. We’ll work with you to get to know your business, your competitors, and more, so you always show up where you want to be",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628b168ef8096e539023b2e_display-advertising-services-performance-dashboard-p-800.webp",
    h3: "Increase your business success with local SEO",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e89b296855116b41165f_small-business-seo-services-features.webp",
    accordionContent: [
      { title: 'Optimize your site performance', content: 'We use strategic SEO keywords, topics, and tactics to help your business perform better in search results.' },
      { title: 'Improve visibility', content: 'See what leads people to your site and what drives them to contact you with our tracking and capture technology.' },
      { title: 'See real results', content: 'Get a view of new leads and traffic sources, discover which pages and search queries drive the most clicks, and more.' },
    ],
    keypoints:[[
      {title: "SEO"},
      {point:'Website and SEO competitor analyses and strategy development'},
      {point:'Strategic site and content optimizations'},
      {point:'Technical site enhancements'},
      {point:'EComprehensive and easy-to-read reporting'},
      {point:'Explore additional features like blog content, topical SEO, location-based SEO, and infographics'},
          ]]
  },
  socialmedia: {
   title: "Social Media Marketing",
    description: "Managing your social media accounts is a 24/7 job. Grow your brand presence on Facebook, Twitter, and more with smart automation features for social media marketing.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Build a better social media presence for your small business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
    accordionContent: [
      { title: 'Increase social engagement', content: 'Grow your reach with consistent, relevant posts that drive interactions with followers.' },
      { title: 'Manage your reviews', content: 'Maintain a strong online reputation. Our platform uses brand listening to find active conversations related to your business and then helps you respond.' },
      { title: 'Do it all in less time', content: 'There are never enough hours in your day. We’ll help manage your primary social media channels and review feedback, so you can focus on your customers.' },
    ],
    keypoints:[[{ title: "Social Media Marketing"},
      {point:'Website and SEO competitor analyses and strategy development'},
      {point:'Strategic site and content optimizations'},
      {point:'Technical site enhancements'},
      {point:'EComprehensive and easy-to-read reporting'},
      {point:'Explore additional features like blog content, topical SEO, location-based SEO, and infographics'},
          ]]
  },
  drupaldevelopment: {
    title:"Drupal Development Services",
    description: "At [Your Company Name], we harness the flexibility and robustness of Drupal to create powerful web solutions tailored to your business needs. Whether you are a startup or an established enterprise, our Drupal development services can help you achieve a dynamic onlinenpresence",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6629e78303d00357b6088edc_social-media-marketing-dashboard-p-500.webp",
    h3: "Empowering Your Web Presence with Drupal",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
    keypoints:[[
      {  title: "Drupal Development Services"},
      {point:'Custom Drupal Solutions: We build tailored Drupal websites that cater to your specific requirements.'},
      {point:'Module Development: Enhance your site with custom modules designed to extend functionality.'},
      {point:'Theme Customization: Develop responsive and visually appealing themes that resonate with your brand.'},
      {point:'Drupal Migration: Seamlessly migrate your existing site to Drupal, ensuring data integrity.'},
      {point:'Support and Maintenance: Ongoing support to keep your Drupal site updated and secure.'},
          ],
          [
            {title:"Why Choose Us?"},
            {point:'Experienced Developers: Our team has extensive experience in delivering high-quality Drupal solutions.'},
            {point:'Innovative Solutions: We use the latest Drupal technologies to provide innovative web solutions.'},
            {point:'Client-Centric Approach: We work closely with our clients to ensure their vision is realized.'},
            {point:'Competitive Pricing: High-quality services at competitive rates.'},
            {point:'Support and Maintenance: Ongoing support to keep your Drupal site updated and secure.'},
                ],
                [
              
                  {title:"Our Development Process"},
                  {point:'Consultation: Understand your business needs and goals.'},
                  {point:'Planning: Develop a detailed project roadmap'},
                  {point:'  Design: Create user-friendly and engaging designs.'},
                  {point:'Development: Build robust and scalable Drupal websites.'},
                  {point:'Testing: Rigorous testing to ensure optimal performance.'},
                  {point:'Launch: Deploy your site and ensure smooth operation.'},
                  {point:'Maintenance: Provide ongoing support and updates.'}]],
                  repeatSection: 3,


  },
  wordpress: {
    title: "WordPress Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c1dee9cd49d51c284e3f_1_uDJTLivemR18proTkBsMEQ-p-500.jpg",
    h3: "Transforming Ideas into Reality with WordPress",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2c17b4f606da7eb6b3368_process-banner_1_.webp",
    keypoints:[[
      {point:'Custom WordPress Development: Tailor-made websites designed to meet your unique business needs.'},
      {point:'Theme Development and Customization: Crafting themes that are visually appealing and responsive.'},
      {point:'Plugin Development: Enhancing your site capabilities with custom plugins'},
      {point:'E-commerce Solutions: Building robust online stores using WooCommerce.'},

    ],
    [
      {point:'Custom WordPress Development: Tailor-made websites designed to meet your unique business needs.'},
      {point:'Theme Development and Customization: Crafting themes that are visually appealing and responsive.'},
      {point:'Plugin Development: Enhancing your site capabilities with custom plugins'},
      {point:'E-commerce Solutions: Building robust online stores using WooCommerce.'},

    ],
    [
      {point:'Custom WordPress Development: Tailor-made websites designed to meet your unique business need.'},
      {point:'Theme Development and Customization: Crafting themes that are visually appealing and responsive.'},
      {point:'Plugin Development: Enhancing your site capabilities with custom plugins'},
      {point:'E-commerce Solutions: Building robust online stores using WooCommerce.'},

    ]
  ],
          repeatSection: 3,
  },
  applicationdevelopmentservices: {
    title: "Application Development Services",
    description: "Drive more leads to your business with S4 Smart solutions innovative PPC management technology and expertise. We’ll help you do everything from account setup and keyword creation to data analysis and reporting across Google Ads and other search engines.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/6628ec625cf5484477abd8ef_ppc-management-services-dashboard-p-500.webp",
    h3: "Crafting Custom Applications for Business Success",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bcc9ea0931b432483423_pexels-photo-4164418.webp",
    keypoints:[[
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},

    ],[
    {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
    {point:'Web Application Development: Creating dynamic and responsive web applications.'},
    {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
    {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},

  ],
  [
    {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
    {point:'Web Application Development: Creating dynamic and responsive web applications.'},
    {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
    {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},

  ]],
  repeatSection: 3,
  },
  salesforcedevelopmentservices: {
    title: "Salesforce Development Services",
    description: "Ensure your business gets found with our business listings management solution.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcf9c63d095a2ee69a2_saleforce-development-services.jpg",
    
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66289cc0cedfaf4f4a0f4b29_display-advertising-services-features-2.webp",
    keypoints:[[
     {h3: "Maximize your ROI with display ads",},
      {point:'Custom Development: Building custom Salesforce solutions to fit your specific needs.'},
      {point:'System Integration: Integrating Salesforce with your existing systems for seamless operations.'},
      {point:'App Development: Creating custom applications on the Salesforce platform.'},
      {point:'Data Migration: Smoothly transitioning data from other systems to Salesforce.'},
    ],[
      {h3: "Maximize your ROI with display a",},
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ],
    [
      {h3: "Maximize your ROI with display as",},
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ]],
    repeatSection: 3,
          
  },
  oracledatabaseservices: {
    title: "Oracle Database Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbcd4554159d93bb689c_oracle.webp",
    h3: "Optimizing Data Management with Oracle Database Solutions",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbce4b25ba70add3718e_oracle-s.png",
    keypoints:[[
      {point:'Database Development: Designing and developing custom Oracle Database solutions.'},
      {point:'Performance Tuning: Optimizing database performance for maximum efficiency.'},
      {point:'Data Migration: Seamless migration of data to Oracle Database.'},
      {point:'Backup and Recovery: Implementing robust backup and recovery strategies.'},
    ],[
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ],
    [
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ]],
    repeatSection: 3,
          
  },
  phpdevelopmentservices: {
    title: "PHP Development Services",
    description: "Make a great first impression with a fully optimized and searchable website.",
    imageUrl: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bf49ed41fac1f20f96b0_PHP-Development-400x400.png",
    h3: "Expert PHP Development Solutions for Your Business",
    keyfeaturesimage: "https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/66e2bbd7c2e6b751afdc2ece_pexels-photo-574069.webp",
    keypoints:[[
      {point:'Custom PHP Development: We build custom PHP applications from scratch, ensuring they are fully tailored to your specific business requirements.'},
      {point:'PHP Framework Development: Our expertise in popular PHP frameworks such as Laravel, Symfony, and CodeIgniter allows us to develop high-performance web applications quickly and efficiently.'},
      {point:'E-commerce Solutions: We create powerful and secure e-commerce platforms using PHP, providing a seamless shopping experience for your customers.'},
      {point:'API Integration: Our team integrates third-party APIs to enhance the functionality of your PHP applications, ensuring they meet all your business needs.'},
    ],[
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ],
    [
      {point:'Mobile App Development: Building user-friendly mobile applications for iOS and Android.'},
      {point:'Web Application Development: Creating dynamic and responsive web applications.'},
      {point:'Enterprise Solutions: Developing scalable and secure applications for enterprise use.'},
      {point:'Cloud Integration: Leveraging cloud technologies to enhance application performance and scalability.'},
  
    ]],
    repeatSection: 3,
      
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
    {service.keypoints.slice(0, service.repeatSection).map((keypointsForSection, idx) => (
      <div key={idx} className="col-12" style={{ marginBottom: '60px' }}>
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={service.keyfeaturesimage}
              alt={service.title}
              className="display-ads-image"
              style={{ maxWidth: '400px', height: 'auto' }}
            />
          </div>
          <div className="col-md-6 display-ads-text">
            {keypointsForSection[0]?.title ? (
              <h3 className="keypointsheader black-border-btm">{keypointsForSection[0].title}</h3>
            ) : (
              <h3>{service.h3}</h3> // Fallback to the default h3 if title is not present
            )}
            {/* <h2>{service.title}</h2> */}
            <ul>
              {Array.isArray(keypointsForSection) && keypointsForSection.length > 0 ? (
                keypointsForSection.map((keypoint, index) => (
                  <li key={index}>{keypoint.point}</li>
                ))
              ) : (
                <li>No key points available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    ))}
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
            <img src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/660d1f1902766807ba75075b_meta-1.webp" alt="Meta Business Partner" id="metaimg" />
          </div>
        </div>
        </div>
      </section>
      
      <section>
  <div className="premium-section">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-12 col-md-6 text-center text-md-left">
          <h4 id="premh4">Premium Solutions</h4>
          <h1 id="prem1">Ready To Get Started? Connect With Us.</h1>
          <Link to={"/contact"}>
            <button className="cta-button">GET A DEMO</button>
          </Link>
        </div>


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
