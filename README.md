# Express Simple CRUD App

Express Simple CRUD App is a basic backend application built using Express.js for learning purposes and as part of my portfolio. The app provides API endpoints for managing products in a MongoDB database. It supports basic CRUD (Create, Read, Update, Delete) operations and uses Mongoose as the interface to interact with the database hosted in the cloud.

## Features

- **Create Product**: Add new products to the database.
- **Read Product**: Retrieve all products or a specific product by ID.
- **Update Product**: Update product details by ID.
- **Delete Product**: Remove a product from the database by ID.
- **Environment Variables**: The database connection string is stored in an `.env` file (not included in the repository) for security.
- **Example Environment File**: `.env.example` is provided with placeholders for easy setup.

## Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Database ODM**: Mongoose
- **Environment Variables**: dotenv
- **Development Tool**: nodemon

## Installation and Setup

### Prerequisites
- Node.js (version 18 or newer)
- MongoDB Atlas account or a local MongoDB instance

### Steps to Run the App
**1. Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/express-simple-crud-app.git
   cd express-simple-crud-app
   ```

**2. Install dependencies:**
   ```bash
    npm install
   ```

**3. Configure environment variables:**
  - Rename the .env.example file to .env.
  - Replace YOUR_CONNECTION_STRING in the .env file with your MongoDB connection string.

**4. Start the server in development mode:**
  ```bash
  npm run dev
  ```

**5. Access the app:**
  - Navigate to http://localhost:3000 in your browser or use tools like Postman to test API endpoints.

## API Endpoints
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/products`       | Retrieve all products        |
| GET    | `/api/products/:id`   | Retrieve a specific product  |
| POST   | `/api/products`       | Create a new product         |
| PUT    | `/api/products/:id`   | Update an existing product   |
| DELETE | `/api/products/:id`   | Delete a product             |

## Acknowledgments
This project is inspired by my interest in learning backend development and exploring the use of Node.js, Express and MongoDB with reference from [CRUD API Tutorial – Node, Express, MongoDB](https://youtu.be/_7UQPve99r4?si=BmUEwf9PhbgIASBS).





