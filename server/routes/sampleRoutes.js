import express from 'express';

import { postSamplePosts } from '../controllers/home/SampleController.js'

const app = express()

app.get('/', postSamplePosts);

export default app;