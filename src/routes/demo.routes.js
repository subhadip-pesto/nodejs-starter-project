import express from 'express';
import { DemoController } from '../controllers';

const DemoRouter = express.Router();

DemoRouter.get('/', DemoController.getDemos);
DemoRouter.get('/:id', DemoController.getDemo);

export default DemoRouter;
