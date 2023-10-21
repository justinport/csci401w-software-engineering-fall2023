console.log("Loading users.js...");

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', (req, res) => {
    res.json({ message: 'List of users' });
});

module.exports = router;
