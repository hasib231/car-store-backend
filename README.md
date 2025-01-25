# Car Store Backend

This is the backend for the Car Store application, built with Node.js, Express, and MongoDB. It provides APIs for managing cars and orders.

## Features

- **Car Management**: Create, read, update, and delete car records.
- **Order Management**: Create orders and calculate total revenue from all orders.
- **Search Functionality**: Search cars by brand, model, or category.
- **Error Handling**: Comprehensive error handling for various scenarios.
- **Environment Configuration**: Uses dotenv for environment variable management.
- **Linting and Formatting**: Configured with ESLint and Prettier for code quality and consistency.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

## live URL - https://car-store-backend-three.vercel.app/

## Getting Started

### Clone the Repository

`git clone https://github.com/your-username/car-store-backend.git`
`cd car-store-backend`

### Install Dependencies

`npm install`

### Set Up Environment Variables

Create a .env file in the root directory and add the environment variables

### Build the Project

`npm run build`

### Run the Project

### Development

`npm run start:dev`

### Production

`npm run start:prod`

### Lint and Format Code

### Lint

`npm run lint`

### Fix Lint Issues

`npm run lint:fix`

### Format Code

`npm run format`

## API Endpoints

### Cars

- **POST /api/cars**:- Create a new car
- **GET /api/cars**:- Get all cars (with optional search)
- **GET /api/cars/:carId**:- Get a single car by ID
- **PUT /api/cars/:carId**:- Update a car by ID
- **DELETE /api/cars/:carId**:- Delete a car by ID

### Orders

- **POST /api/orders**:- Create a new order
- **GET /api/orders/revenue**:- Calculate total revenue from all orders

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.