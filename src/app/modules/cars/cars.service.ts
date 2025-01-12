import { TCars } from "./cars.interface";
import Cars from "./cars.model";

const createCar = async (car: TCars): Promise<TCars> => { 

    const result = await Cars.create(car);
    return result;
}

export const carService = {
    createCar,
}
