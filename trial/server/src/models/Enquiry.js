import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },
    serviceType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    message: {
      type: String,
      required: false,
      trim: true,
      maxlength: 2000
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'enquiries'
  }
);

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;

