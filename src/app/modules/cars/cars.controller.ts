import { Request, Response } from 'express';
import { carService } from './cars.service';

const createCar = async (req: Request, res: Response) => {
    try {
        const result = await carService.createCar(req.body);
        res.status(200).json({
            message: 'Car created successfully',
            success: true,
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            message: err.message || 'something went wrong',
            success: false,
            error: err,
            stack: err.stack
        });
    }
}

export const CarsController = {
    createCar,
}