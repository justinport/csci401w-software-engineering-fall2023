console.log("Loading index.js...");

const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const foodsRouter = require('./foods'); // Importing the foods router

router.use('/users', usersRouter);
router.use('/foods', foodsRouter); // Adding the foods route

module.exports = router;
