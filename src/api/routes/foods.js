console.log("Loading foods.js...");

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

const db_path = "../data/users.db"; // The path to your SQLite database

/**
 * @swagger
 * /foods/{userId}:
 *   get:
 *     description: Get favorite foods for a specific user by user ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: number
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
 *               user_id:
 *                 type: number
 *               food_name:
 *                 type: string
 *               date_added:
 *                 type: date
 *               rating:
 *                 type: number
 *               comments:
 *                 type: string
 *               meal_time:
 *                 type: string
 *               cuisine_type:
 *                 type: string
 *               recipe_link:
 *                 type: string
 */
router.get("/:userId", (req, res) => {
  // Extract the user ID from the path parameter
  const userId = req.params.userId;

  // Create a connection to the SQLite database
  const db = new sqlite3.Database(db_path, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("Error opening the SQLite database:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  });

  // Fetch favorite foods for the user from the database
  db.all("SELECT * FROM favorite_foods WHERE user_id = ?", [userId], (err, rows) => {
    if (err) {
      console.error(
        "Error fetching favorite foods from the SQLite database:",
        err.message
      );
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    // Close the database connection
    db.close((err) => {
      if (err) {
        console.error("Error closing the SQLite database:", err.message);
      }
    });

    // Send the fetched favorite foods as a response
    res.json(rows);
  });
});

module.exports = router;
