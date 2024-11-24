import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import configureMiddlewares from './middleware/middlewares.js'; // Import middleware configurations
import postRoutes from './routes/postRoutes.js';
import testRoutes from './routes/testRoutes.js';
import sampleRoutes from './routes/sampleRoutes.js';
import loginRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
configureMiddlewares(app);

app.use('/posts', postRoutes);
app.use('/tests', testRoutes);
app.use('/sample', sampleRoutes);
app.use('/auth', loginRoutes);

if (!process.env.CONNECTION_URL) {
  console.error('Error: CONNECTION_URL is not defined in the environment variables.');
  process.exit(1);
}

const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.error('Database connection error:', error.message));

process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.connection.close();
  process.exit(0);
});
