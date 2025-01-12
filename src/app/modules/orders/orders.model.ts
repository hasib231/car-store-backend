import { Schema, model } from 'mongoose';
import { TOrders } from './orders.interface';

// This is the schema used to create an order in the database
const ordersSchema = new Schema<TOrders>({
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        validate: {
          validator: function (value: string) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    },
    car: {
        type: String,
        required: [true, 'Please provide car id']
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide quantity of cars']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Please provide total price of the order']
    }
},
    {
        timestamps: true // This will automatically add `createdAt` and `updatedAt` fields
    });

export default model<TOrders>('Orders', ordersSchema);

