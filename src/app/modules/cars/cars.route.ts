import { Router } from 'express'
import { CarsController } from './cars.controller'

// This is the router for the cars module
const carRouter = Router()

carRouter.post('/', CarsController.createCar)

carRouter.get('/', CarsController.getCars)

carRouter.get('/:carId', CarsController.getSingleCar)

carRouter.put('/:carId', CarsController.updateCar)

carRouter.delete('/:carId', CarsController.deleteCar)

export default carRouter