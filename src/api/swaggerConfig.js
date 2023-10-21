console.log("Loading swaggerConfig...");

const swaggerConfig = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User API",
            version: "1.0.0",
            description: "A simple Express User API",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/users.js", "./routes/index.js"],
};

module.exports = swaggerConfig;
