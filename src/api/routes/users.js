console.log("Loading users.js...");

const express = require('express');
const router = express.Router();

// Sample user data
const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com'
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com'
    },
    {
        id: 5,
        name: 'Charlie Wilson',
        email: 'charlie.wilson@example.com'
    }
];

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 */
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
