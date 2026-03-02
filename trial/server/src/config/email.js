import nodemailer from 'nodemailer';

export const createTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    SMTP_FROM
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error('SMTP configuration is incomplete');
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  return transporter;
};

export const buildEnquiryEmail = (payload) => {
  const { name, email, phone, serviceType, message, createdAt } = payload;

  const subject = 'New Enquiry Received – DrCloud Website';

  const text = [
    'A new enquiry has been submitted on the DrCloud website.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${serviceType}`,
    '',
    'Message:',
    message,
    '',
    `Timestamp: ${createdAt.toISOString()}`
  ].join('\n');

  const html = `
    <p>A new enquiry has been submitted on the <strong>DrCloud</strong> website.</p>
    <p>
      <strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Phone:</strong> ${phone}<br/>
      <strong>Service:</strong> ${serviceType}<br/>
      <strong>Timestamp:</strong> ${createdAt.toISOString()}
    </p>
    <p>
      <strong>Message:</strong><br/>
      ${message.replace(/\n/g, '<br/>')}
    </p>
  `;

  return { subject, text, html };
};

