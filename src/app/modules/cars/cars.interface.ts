// Definition of the interface for the cars module
export type TCars = {
    brand: string;
    model: string;
    year: number;
    price: number;
    category: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
    description: string;
    quantity: number;
    inStock: boolean;
}