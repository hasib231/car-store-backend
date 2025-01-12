import { Schema, model } from 'mongoose';
import { TCars } from './cars.interface';

const carsSchema = new Schema<TCars>({
    brand: {
        type: String,
        required: [true, 'Please provide brand name']
    },
    model: {
        type: String,
        required: [true, 'Please provide model name']
    },
    year: {
        type: Number,
        required: [true, 'Please provide year of manufacture']
    },
    price: {
        type: Number,
        required: [true, 'Please provide car price']
    },
    category: {
        type: String,
        enum: {
            values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
            message: '{VALUE} is not supported'
        },
        required: true,
    },
    description: {
        type: String,
        required: [true, 'Please provide brief description of the cars features']
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide car quantity of the car available']
    },
    inStock: {
        type: Boolean,
        required: [true, 'Please provide indicates if the car is in stock']
    }
},
    {
        timestamps: true // This will automatically add `createdAt` and `updatedAt` fields
})

export default model<TCars>('Cars', carsSchema);