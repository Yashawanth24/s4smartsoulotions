import React from 'react';


const ContactForm = () => {
  return (
    <div className="contact-form-container d-flex justify-content-center align-items-center min-vh-100  text-white">
      <div className="contact-form text-center">
        <h6 className="text-uppercase">Get in Touch</h6>
        <h1 className="display-6 font-weight-bold">CONTACT US</h1>
        
        <form className="mt-5">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control bg-dark text-white" placeholder="e.g. John Doe" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control bg-dark text-white" placeholder="e.g. johndoe@email.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="form-control bg-dark text-white" placeholder="(123) - 456 - 789" />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea className="form-control bg-dark text-white" rows="4" placeholder="Write Your Message Here"></textarea>
          </div>

          <button type="submit" className="btn btn-success btn-lg mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
