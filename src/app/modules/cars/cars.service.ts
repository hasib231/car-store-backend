import { TCars } from "./cars.interface";
import Cars from "./cars.model";

// This function is used to create a car in the database
const createCar = async (car: TCars) => { 

    const result = await Cars.create(car);
    return result;
}

// This function is used to get all cars and search can with category,brand,model from the database
const getCars = async (searchTerm?: string) => { 
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { brand: { $regex: searchTerm, $options: 'i' } },
                { model: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } }
            ]
        };
    }
    const result = await Cars.find(query);
    return result;
}

// This function is used to get a single car from the database
const getSingleCar = async (id: string) => { 
    const result = await Cars.findById(id);
    return result;
}

// This function is used to update a car in the database
const updateCar = async (id: string, data: TCars) => {
    const result = await Cars.findByIdAndUpdate(id, data, {
        new: true,
    })
    return result;
}
 
// This function is used to delete a car in the database
const deleteCar = async (id: string) => { 
    const result = await Cars.findByIdAndDelete(id);
    return result;
}

export const carService = {
    createCar,
    getCars,
    getSingleCar,
    updateCar,
    deleteCar,
}
