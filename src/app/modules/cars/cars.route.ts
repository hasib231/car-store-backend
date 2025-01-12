import { Router } from 'express'
import { CarsController } from './cars.controller'

const carRouter = Router()

carRouter.post('/', CarsController.createCar)

export default carRouter