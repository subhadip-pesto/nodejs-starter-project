import { DemoService } from '../services';
import Logger from '../utils/logger';

const logger = Logger('demo.controller');

const getDemos = async (req, res) => {
  const demos = DemoService.getAllDemos();
  logger.info(JSON.stringify(demos));
  res.send(demos);
};

const getDemo = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'id is required' });
    return;
  }
  const demo = DemoService.getDemoById(req.params.id);
  res.send(demo);
};

export default {
  getDemos,
  getDemo,
};
