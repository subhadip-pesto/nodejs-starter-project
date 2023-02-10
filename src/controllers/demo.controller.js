import Services from '../services';

const getDemos = async (req, res) => {
  const demos = Services.DemoService.getAllDemos();
  res.send(demos);
};

const getDemo = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'id is required' });
    return;
  }
  const demo = Services.DemoService.getDemoById(req.params.id);
  res.send(demo);
};

export default {
  getDemos,
  getDemo,
};
