import { Router } from 'express';
import { OrderController } from './orders.controller';

const orderRouter = Router();

orderRouter.post('/', OrderController.createOrder);

export default orderRouter;