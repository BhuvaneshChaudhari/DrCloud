import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEnquiryEmail = async (payload) => {
  const { name, email, phone, serviceType, message, createdAt } = payload;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.NOTIFY_EMAIL_TO,
    subject: 'New Enquiry Received | DrCloud Website',
    html: `
      <p>A new enquiry has been submitted on the <strong>DrCloud</strong> website.</p>
      <p>
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Service:</strong> ${serviceType}<br/>
        <strong>Timestamp:</strong> ${createdAt.toISOString()}
      </p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  });
};