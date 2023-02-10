import express from 'express';
import config from './config';
import Logger from './utils/logger';
import { errorHandler, successHandler } from './middlewares/logger.middleware';
import Routes from './routes';

const app = express();
const logger = Logger('app');

app.use(successHandler);
app.use(errorHandler);

app.use('/demo', Routes.DemoRoutes);

app.listen(config.SERVER_PORT, () => {
  logger.info(`server is up at ${config.SERVER_PORT}`);
});
