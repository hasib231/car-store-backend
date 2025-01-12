import { Router } from 'express'
import { CarsController } from './cars.controller'

const carRouter = Router()

carRouter.post('/', CarsController.createCar)

carRouter.get('/', CarsController.getCars)

carRouter.get('/:carId', CarsController.getSingleCar)

carRouter.put('/:carId', CarsController.updateCar)

export default carRouter