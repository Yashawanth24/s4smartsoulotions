require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests

// POST route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use any email service like Gmail, Outlook, etc.
    auth: {
      user: process.env.EMAIL, // Sender email address (environment variable)
      pass: process.env.PASSWORD, // Sender email password (environment variable)
    },
  });

  const mailOptions = {
    from: email, // Email sent from the user's email
    to: process.env.RECEIVER_EMAIL, // Email received at your email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
