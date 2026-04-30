import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendChatEnquiryEmail = async (payload) => {
  const { name, email, phone, message } = payload;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'drcloud912@gmail.com',
    subject: 'New DrCloud Chatbot Enquiry',
    html: `
      <h3>New Chatbot Enquiry Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br>
      <p>Sent from DrCloud AI Chatbot</p>
    `
  });
};