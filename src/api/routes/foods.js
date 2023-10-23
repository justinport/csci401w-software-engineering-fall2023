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
  const userId = req.params.userId;
  const db = new sqlite3.Database(db_path, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error("Error opening the SQLite database:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  db.all(
    "SELECT * FROM favorite_foods WHERE user_id = ?",
    [userId],
    (err, rows) => {
      if (err) {
        console.error(
          "Error fetching favorite foods from the SQLite database:",
          err.message
        );
        return res.status(500).json({ error: "Internal server error" });
      }
      db.close((err) => {
        if (err) {
          console.error("Error closing the SQLite database:", err.message);
        }
      });
      res.json(rows);
    }
  );
});
/**
 * @swagger
 * /foods:
 *   post:
 *     description: Add a new favorite food for a user
 *     parameters:
 *       - name: food
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             user_id:
 *               type: number
 *             food_name:
 *               type: string
 *             date_added:
 *               type: date
 *             rating:
 *               type: number
 *             comments:
 *               type: string
 *             meal_time:
 *               type: string
 *             cuisine_type:
 *               type: string
 *             recipe_link:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", (req, res) => {
  const {
    user_id,
    food_name,
    date_added,
    rating,
    comments,
    meal_time,
    cuisine_type,
    recipe_link,
  } = req.body;

  // Validation checks for required fields
  if (!user_id || !food_name || !date_added || !rating) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const db = new sqlite3.Database(db_path);

  const insertQuery =
    "INSERT INTO favorite_foods (user_id, food_name, date_added, rating, comments, meal_time, cuisine_type, recipe_link) " +
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [
    user_id,
    food_name,
    date_added,
    rating,
    comments || null,
    meal_time || null,
    cuisine_type || null,
    recipe_link || null,
  ];

  db.run(insertQuery, values, function (err) {
    if (err) {
      console.error("Error inserting favorite food:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    const foodId = this.lastID; // Get the ID of the inserted food
    db.close();

    return res
      .status(201)
      .json({ message: "Food created successfully", foodId });
  });
});

/**
 * @swagger
 * /foods/{foodId}:
 *   put:
 *     description: Update an existing food by its ID
 *     parameters:
 *       - name: foodId
 *         in: path
 *         required: true
 *         type: number
 *       - name: food
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             food_name:
 *               type: string
 *             date_added:
 *               type: date
 *             rating:
 *               type: number
 *             comments:
 *               type: string
 *             meal_time:
 *               type: string
 *             cuisine_type:
 *               type: string
 *             recipe_link:
 *               type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const {
    food_name,
    date_added,
    rating,
    comments,
    meal_time,
    cuisine_type,
    recipe_link,
  } = req.body;

  const updateQuery =
    "UPDATE favorite_foods " +
    "SET food_name = ?, date_added = ?, rating = ?, comments = ?, meal_time = ?, cuisine_type = ?, recipe_link = ? " +
    "WHERE id = ?";

  const values = [
    food_name,
    date_added,
    rating,
    comments || null,
    meal_time || null,
    cuisine_type || null,
    recipe_link || null,
    foodId,
  ];

  const db = new sqlite3.Database(db_path);

  db.run(updateQuery, values, function (err) {
    if (err) {
      console.error("Error updating favorite food:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    db.close();

    return res.status(200).json({ message: "Food updated successfully" });
  });
});

/**
 * @swagger
 * /foods/{foodId}:
 *   delete:
 *     description: Delete a food by its ID
 *     parameters:
 *       - name: foodId
 *         in: path
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const db = new sqlite3.Database(db_path);

  const deleteQuery = "DELETE FROM favorite_foods WHERE id = ?";

  db.run(deleteQuery, foodId, function (err) {
    if (err) {
      console.error("Error deleting favorite food:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    db.close();

    return res.status(200).json({ message: "Food deleted successfully" });
  });
});

module.exports = router;
