
import sqlite3
import os
from datetime import datetime

# Define the path to the directory and database
db_directory = "../data"
db_path = os.path.join(db_directory, 'users.db')

# Ensure the directory exists
if not os.path.exists(db_directory):
    os.makedirs(db_directory)

# Create or connect to the SQLite database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create the users table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        username TEXT UNIQUE NOT NULL,
        date_joined DATE NOT NULL
    )
''')

# Create the favorite_foods table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS favorite_foods (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        food_name TEXT NOT NULL,
        date_added DATE NOT NULL,
        rating INTEGER,
        comments TEXT,
        meal_time TEXT,
        cuisine_type TEXT,
        recipe_link TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
''')

# Insert 10 sample records for users

# Insert 10 sample records
sample_users = [
    ("John Doe", "john@example.com", "john_doe", datetime.now().date()),
    ("Jane Smith", "jane@example.com", "jane_smith", datetime.now().date()),
    ("Alice", "alice@example.com", "alice", datetime.now().date()),
    ("Bob", "bob@example.com", "bob", datetime.now().date()),
    ("Charlie", "charlie@example.com", "charlie", datetime.now().date()),
    ("David", "david@example.com", "david", datetime.now().date()),
    ("Eve", "eve@example.com", "eve", datetime.now().date()),
    ("Frank", "frank@example.com", "frank", datetime.now().date()),
    ("Grace", "grace@example.com", "grace", datetime.now().date()),
    ("Hannah", "hannah@example.com", "hannah", datetime.now().date())
]

cursor.executemany('''
    INSERT OR IGNORE INTO users (name, email, username, date_joined) 
    VALUES (?, ?, ?, ?)
''', sample_users)

# Insert sample records for favorite_foods for each user
sample_foods = [
    (1, "Pizza", datetime.now().date(), 5, "Love the cheese!", "Dinner", "Italian", "https://example.com/pizza_recipe"),
    (1, "Burger", datetime.now().date(), 4, "Juicy and delicious!", "Lunch", "American", "https://example.com/burger_recipe"),
    (1, "Ice Cream", datetime.now().date(), 4, "Favorite dessert!", "Dessert", "Dessert", "https://example.com/ice_cream_recipe"),
    (2, "Tacos", datetime.now().date(), 4, "Always a delight!", "Lunch", "Mexican", "https://example.com/tacos_recipe"),
    (2, "Sushi", datetime.now().date(), 5, "Fresh and tasty!", "Dinner", "Japanese", "https://example.com/sushi_recipe"),
    (3, "Pasta", datetime.now().date(), 4, "Italian pasta!", "Dinner", "Italian", "https://example.com/pasta_recipe"),
    (4, "Salad", datetime.now().date(), 3, "Healthy choice!", "Lunch", "Salad", "https://example.com/salad_recipe"),
    (5, "Curry", datetime.now().date(), 4, "Spicy and flavorful!", "Dinner", "Indian", "https://example.com/curry_recipe"),
    (6, "Steak", datetime.now().date(), 5, "Perfectly grilled!", "Dinner", "American", "https://example.com/steak_recipe"),
    (7, "Sushi", datetime.now().date(), 4, "Fresh and delicious!", "Dinner", "Japanese", "https://example.com/sushi_recipe"),
    (8, "Burger", datetime.now().date(), 4, "Classic burger!", "Lunch", "American", "https://example.com/burger_recipe"),
    (9, "Pizza", datetime.now().date(), 5, "All-time favorite!", "Dinner", "Italian", "https://example.com/pizza_recipe"),
    (10, "Ice Cream", datetime.now().date(), 5, "Sweet treat!", "Dessert", "Dessert", "https://example.com/ice_cream_recipe"),
]

cursor.executemany('''
    INSERT INTO favorite_foods (user_id, food_name, date_added, rating, comments, meal_time, cuisine_type, recipe_link)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
''', sample_foods)

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Script execution completed!")
