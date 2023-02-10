import express from 'express';
import Controllers from '../controllers';

const DemoRouter = express.Router();

DemoRouter.get('/', Controllers.DemoController.getDemos);
DemoRouter.get('/:id', Controllers.DemoController.getDemo);

export default DemoRouter;
