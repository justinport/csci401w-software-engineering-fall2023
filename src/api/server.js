console.log("Executing server.js...");

const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes');  // imports our main router from routes/index.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require('./swaggerConfig');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({
  origin: 'null'
}));


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    console.log(`Swagger docs available on http://localhost:${port}/api-docs`);
});
