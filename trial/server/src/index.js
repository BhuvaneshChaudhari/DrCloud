import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDb } from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import chatEnquiryRoutes from './routes/chatEnquiryRoutes.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["https://drcloud-phi.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// ✅ ADD THIS
app.get('/', (_req, res) => {
  res.send('DrCloud API is running 🚀');
});

app.use('/api/enquiry', enquiryRoutes);
app.use('/api/chat-enquiry', chatEnquiryRoutes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`DrCloud API listening on port ${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

start();


