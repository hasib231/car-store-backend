import { TOrders } from "./orders.interface";
import Orders from "./orders.model";
import Cars from "../cars/cars.model";

// This function is used to create an order in the database
const createOrder = async (order: TOrders) => {
    // Find the car by ID
    const car = await Cars.findById(order.car);
    if (!car) {
        throw new Error('Car not found');
    }

    // Check if the car is in stock and has sufficient quantity
    if (!car.inStock || car.quantity < order.quantity) {
        throw new Error('Insufficient stock');
    }

    // Reduce the quantity in the car model
    car.quantity -= order.quantity;

    // Set inStock to false if the quantity goes to zero
    if (car.quantity === 0) {
        car.inStock = false;
    }

    // Save the updated car
    await car.save();

    // Create the order
    const result = await Orders.create(order);
    return result;
}

export const orderService = {
    createOrder,
}