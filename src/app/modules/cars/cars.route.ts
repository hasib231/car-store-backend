import { Router } from 'express'
import { CarsController } from './cars.controller'

const carRouter = Router()

carRouter.post('/', CarsController.createCar)

carRouter.get('/', CarsController.getCars)

carRouter.get('/:carId', CarsController.getSingleCar)

export default carRouter