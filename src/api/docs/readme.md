# Express API with Swagger Documentation

This project is a basic Express API for user resources, integrated with Swagger for API documentation.

## Quickstart

1. **Prerequisites**:
   - [Node.js](https://nodejs.org/)
   - [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

2. **Clone the Repository**:
   
```
   git clone <repository-url>   # Replace with your repository's URL
   cd api
```

3. **Install Dependencies**:
   
   Before running the application, you need to install the necessary packages:

```
   npm install
```

4. **Start the Server**:

```
   node server.js
```

   Once started, the API will be available at [http://localhost:3000](http://localhost:3000), and the Swagger documentation will be at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Project Structure

- `server.js`: The main entry point for the application.
- `swaggerOptions.js`: Configuration file for Swagger documentation.
- `routes/`: Contains all route definitions.
   - `users.js`: Specific routes for user-related endpoints.
   - `index.js`: Central router aggregating other route files.

## Installation Instructions

1. **Install Node.js**:

   Visit the [official Node.js website](https://nodejs.org/) to download and install Node.js. This will also install `npm`, the Node.js package manager.
