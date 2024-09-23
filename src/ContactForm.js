import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

  const [state, handleSubmit] = useForm("xdoqqrdk"); 

  if (state.succeeded) {
    return <p className='thankform'>Thanks for contacting us!</p>;
  }

  return (
    <div className="contact-form-container d-flex justify-content-center align-items-center min-vh-100 text-white">
      <div className="contact-form text-center">
        <h6 className="text-uppercase">Get in Touch</h6>
        <h1 className="display-6 font-weight-bold">CONTACT US</h1>

        {/* Formspree Form */}
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-dark text-white"
              placeholder="e.g. John Doe"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control bg-dark text-white"
              placeholder="e.g. johndoe@email.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control bg-dark text-white"
              placeholder="(123) - 456 - 789"
              required
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              className="form-control bg-dark text-white"
              rows="4"
              placeholder="Write Your Message Here"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="btn btn-success btn-lg mt-3" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
