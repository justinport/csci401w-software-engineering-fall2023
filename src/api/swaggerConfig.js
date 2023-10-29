console.log("Loading swaggerConfig...");

const swaggerConfig = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User and Food API",  // Updated the title to reflect both User and Food data
            version: "1.0.0",
            description: "A simple Express API for Users and their Favorite Foods",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/users.js", "./routes/foods.js", "./routes/index.js"], // Added the foods.js path
};

module.exports = swaggerConfig;
