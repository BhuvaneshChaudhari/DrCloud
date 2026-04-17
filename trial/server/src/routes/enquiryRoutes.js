import express from 'express';
import xss from 'xss';
import validator from 'validator';
import Enquiry from '../models/Enquiry.js';
import { createTransporter, buildEnquiryEmail } from '../config/email.js';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const router = express.Router();

const sanitize = (value) => xss(value?.toString().trim() || '');

router.post('/', async (req, res) => {
  try {
    const raw = req.body || {};

    const name = sanitize(raw.name);
    const email = sanitize(raw.email);
    const phone = sanitize(raw.phone);
    const serviceType = sanitize(raw.serviceType);
    const message = sanitize(raw.message);

    if (!name || name.length < 2) {
      return res.status(400).json({ message: 'Name is required.' });
    }
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: 'Valid email is required.' });
    }
    if (!phone || phone.length < 6) {
      return res.status(400).json({ message: 'Valid phone number is required.' });
    }
    if (!serviceType) {
      return res.status(400).json({ message: 'Service type is required.' });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ message: 'Message should be at least 10 characters.' });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      serviceType,
      message
    });

    const adapter = new JSONFile('db.json');
    const defaultData = { enquiries: [] };
    const db = new Low(adapter, defaultData);
    await db.read();
    db.data ||= { enquiries: [] };
    db.data.enquiries.push({
      _id: enquiry._id,
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      serviceType: enquiry.serviceType,
      message: enquiry.message,
      createdAt: enquiry.createdAt
    });
    await db.write();

    const transporter = createTransporter();
    const { subject, text, html } = buildEnquiryEmail(enquiry);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFY_EMAIL_TO || process.env.SMTP_FROM,
      subject,
      text,
      html
    });

    return res.status(201).json({ message: 'Enquiry submitted successfully.' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error handling enquiry:', error);
    return res
      .status(500)
      .json({ message: 'Failed to submit enquiry. Please try again later.' });
  }
});

export default router;
