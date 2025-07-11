import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/booking.js';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import paymentRoutes from './routes/payment.js';
import profileRoutes from './routes/profile.js';
import propertyRoutes from './routes/property.js';
import reviewRoutes from './routes/review.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();

export const prisma = new PrismaClient();

app.use(cors());
app.use(json());

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', profileRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api', userRoutes);

app.get('/health/status', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy!' });
});

export default app;
