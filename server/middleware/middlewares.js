

import bodyParser from 'body-parser';
import cors from 'cors';
import { logger } from './index.js';

export default (app) => {
  app.use(bodyParser.json({ limit: "30mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  app.use(logger);
};
