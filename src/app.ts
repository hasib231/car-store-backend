import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import carRouter from './app/modules/cars/cars.route';
import orderRouter from './app/modules/orders/orders.route';


const app: Application = express()

// middleware
app.use(express.json())
app.use(cors());


app.use('/api/cars', carRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app