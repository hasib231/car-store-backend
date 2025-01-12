import { Request, Response } from 'express';
import { carService } from './cars.service';

// This function is used to create a car in the database
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

// This function is used to get all cars and search can with category,brand,model from the database
const getCars = async (req: Request, res: Response) => { 
    try {
        const searchTerm = req.query.searchTerm as string;
        const result = await carService.getCars(searchTerm);
        res.status(200).json({
            message: 'Cars retrieved successfully',
            status: true,
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

//This function is used to get a single car from the database
const getSingleCar = async (req: Request, res: Response) => { 
    try {
        const carId = req.params.carId;
        const result = await carService.getSingleCar(carId);
        if (!result) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({
            message: 'Car retrieved successfully',
            status: true,
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

// This function is used to update a car in the database
const updateCar = async (req: Request, res: Response) => { 
    try {
        const carId = req.params.carId;
        const result = await carService.updateCar(carId, req.body);
        res.status(200).json({
            message: 'Car updated successfully',
            status: true,
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

// This function is used to delete a car in the database
const deleteCar = async (req: Request, res: Response) => { 
    try {
        const carId = req.params.carId;
        const result = await carService.deleteCar(carId);
        res.status(200).json({
            message: 'Car deleted successfully',
            status: true,
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
    getCars,
    getSingleCar,
    updateCar,
    deleteCar,
}