import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Reusing the same logic from your main email.js
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,               // Hardcoded to avoid .env string errors
    secure: false,           // Hardcoded to false for STARTTLS
    auth: {
      // We still keep the sensitive login info in the .env
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
    tls: {
      // Critical for MacBook Pro: ignores self-signed certificate errors
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2'
    }
  });
};

export const sendChatEnquiryEmail = async (payload) => {
  const { name, email, phone, message } = payload;
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.EMAIL_USER,
    to: 'drcloud912@gmail.com', // Your destination
    subject: 'New DrCloud Chatbot Enquiry',
    html: `
      <h3>New Chatbot Enquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br>
      <p>Sent from DrCloud AI Chatbot</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};