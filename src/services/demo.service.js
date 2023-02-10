import { demoModel } from '../models/demo.model';

const getAllDemos = () => demoModel;

const getDemoById = (id) => demoModel.find((demo) => demo.id === id);

export default {
  getAllDemos,
  getDemoById,
};
