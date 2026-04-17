import mongoose from 'mongoose';

const chatEnquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
}, { collection: 'chat_enquiries' });

export default mongoose.model('ChatEnquiry', chatEnquirySchema);