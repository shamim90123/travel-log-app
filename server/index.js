import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { check, validationResult } from 'express-validator'

// middleware
import {logger} from './middleware/index.js'
// routes start...
import postRoutes from './routes/postRoutes.js'
import testRoutes from './routes/testRoutes.js'
import sampleRoutes from './routes/sampleRoutes.js'
// routes end...
import dotenv from 'dotenv';
dotenv.config();

// const urlencodedParser = bodyParser.urlencoded

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(logger); // application level middleware for all routes
app.use('/posts', postRoutes);
app.use('/tests', testRoutes);
app.use('/sample', sampleRoutes);

// application configuration start....
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));
