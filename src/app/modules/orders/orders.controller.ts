import { Request, Response } from 'express';
import { orderService } from './orders.service';

// This function is used to create an order in the database
const createOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderService.createOrder(req.body);
        res.status(200).json({
            message: 'Order created successfully',
            status: true,
            data: result
        });
    
    } catch (err: any) {
        if (err.message === 'Car not found') {
            res.status(404).json({
                message: 'Car not found',
                success: false,
                error: err,
                stack: err.stack
            });
        }
        else if (err.message === 'Insufficient stock') {
            res.status(400).json({
                message: 'Insufficient stock',
                success: false,
                error: err,
                stack: err.stack
            });
        }
        else {
            res.status(500).json({
                message: err.message || 'something went wrong',
                success: false,
                error: err,
                stack: err.stack
        
            });
        }
    }
}

// This function is used to calculate the total revenue from all orders
const calculateRevenue = async (req: Request, res: Response) => {
    try {
        const totalRevenue = await orderService.calculateRevenue();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: {
                totalRevenue
            }
        });
    } catch (err: any) {
        if (err.message === 'Order not found') {
            res.status(404).json({
                message: 'Order not found',
                success: false,
                error: err,
                stack: err.stack
            });
        }
        else {
            res.status(500).json({
                message: err.message || 'something went wrong',
                success: false,
                error: err,
                stack: err.stack
        
            });
        }
    }
};

export const OrderController = {
    createOrder,
    calculateRevenue
}