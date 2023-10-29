console.log("Loading users.js...");

const express = require("express");
const sqlite3 = require("sqlite3").verbose(); // Require the sqlite3 module
const router = express.Router();

const db_path = "../data/users.db"; // The path to your SQLite database

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
router.get("/", (req, res) => {
  // Create a connection to the SQLite database
  const db = new sqlite3.Database(db_path, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("Error opening the SQLite database:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  });

  // Fetch users from the database
  db.all("SELECT id, name, email FROM users", [], (err, rows) => {
    if (err) {
      console.error(
        "Error fetching users from the SQLite database:",
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

    // Send the fetched users as a response
    res.json(rows);
  });
});

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     description: Get a user by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             name:
 *               type: string
 *             email:
 *               type: string
 */
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  // Create a connection to the SQLite database
  const db = new sqlite3.Database(db_path, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("Error opening the SQLite database:", err.message);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  });

  // Fetch a user by ID from the database
  db.get(
    "SELECT id, name, email FROM users WHERE id = ?",
    [userId],
    (err, row) => {
      if (err) {
        console.error(
          "Error fetching a user from the SQLite database:",
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

      if (!row) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      // Send the fetched user as a response
      res.json(row);
    }
  );
});

module.exports = router;
