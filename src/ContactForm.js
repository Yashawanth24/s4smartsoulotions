import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    emailjs
      .send(
        'service_pln3ih9',               
        'template_u71vpr7',              
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'BGm1KxPNzljTNcisk'               
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again later.');
        }
      );
  };

  if (submitted) {
    return <p className="thankform">Thanks for contacting us!</p>;
  }

  return (
    <div className="contact-form-container">
      <div className="d-flex justify-content-center align-items-center min-vh-100 text-white container">
        <div className="contact-form text-center">
          <h6 className="text-uppercase">Get in Touch</h6>
          <h1 className="display-6 font-weight-bold">CONTACT US</h1>

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control bg-dark text-white"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control bg-dark text-white"
                placeholder="e.g. johndoe@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control bg-dark text-white"
                placeholder="(123) 456-789"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                name="message"
                className="form-control bg-dark text-white"
                rows="4"
                placeholder="Write Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-success btn-lg mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
