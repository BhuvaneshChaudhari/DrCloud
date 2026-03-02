import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDb } from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*'
  })
);
app.use(express.json());
app.use(morgan('tiny'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/enquiry', enquiryRoutes);

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

