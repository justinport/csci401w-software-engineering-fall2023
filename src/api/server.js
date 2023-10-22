// Logging the start of the server script
console.log("Executing server.js...");

// Importing necessary modules and configurations
const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swaggerConfig");
const cors = require("cors");
const FoodDataService = require("./services/foodDataService");
const mysql = require("mysql2");

// Initializing an Express application
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware to handle Cross-Origin Resource Sharing (CORS) issues
app.use(
  cors({
    origin: "null",
  })
);

// Setting up Swagger for API documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Initializing the service to interact with the food database API
const foodDataService = new FoodDataService();

// Linking the main route handlers
app.use("/", mainRoutes);

// Starting the Express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
  console.log(`Swagger docs available on http://localhost:${port}/api-docs`);
});

// IIFE (Immediately Invoked Function Expression) for running asynchronous code
(async () => {
  try {
    // Testing the FoodDataService by fetching data for 'cheddar cheese'
    const data = await foodDataService.searchFood(
      "cheddar cheese",
      "Kar Nut Products Company"
    );
    console.log(data);
  } catch (error) {
    // Handling and logging any errors that might occur during the API call
    console.error("Error fetching food data:", error.message);
  }

  // Database connection parameters
  const db = mysql.createConnection({
    host: "p3nlmysql1plsk.secureserver.net",
    user: "sandbox",
    password: "",
    database: "sandbox",
    port: 3306,
  });

  // Connecting to the MySQL database
  db.connect((error) => {
    if (error) {
      // Handling and logging any connection errors
      console.error("Error connecting to the database:", error);
      return;
    }
    console.log("Connected to the MySQL database.");

    // Fetching all user data from the 'users' table once connected
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        // Handling and logging any errors during the query execution
        console.error("Error fetching users:", err);
        return;
      }

      // Logging the fetched user data
      console.log("Users:", results);

      // Closing the database connection
      db.end((endError) => {
        if (endError) {
          // Handling and logging any errors that might occur while ending the connection
          console.error("Error ending the database connection:", endError);
        } else {
          console.log("Disconnected from the MySQL database.");
        }
      });
    });
  });
})();
