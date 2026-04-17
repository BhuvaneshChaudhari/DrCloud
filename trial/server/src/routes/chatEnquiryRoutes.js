import express from 'express';
import ChatEnquiry from '../models/ChatEnquiry.js';
import { sendChatEnquiryEmail } from '../config/chatEmail.js'; // 1. Add this import

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message required' });
    }

    // 2. Save to MongoDB
    const enquiry = new ChatEnquiry({ name, email, phone, message });
    await enquiry.save();

    // 3. Trigger the Email (New Addition)
    try {
      await sendChatEnquiryEmail({ name, email, phone, message });
    } catch (emailError) {
      // We log the email error but don't stop the success response 
      // because the data is already saved in the database.
      console.error('Email failed to send, but data saved:', emailError);
    }

    res.json({ success: true, message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Enquiry save error:', error);
    res.status(500).json({ error: 'Server error. Try again.' });
  }
});

export default router;