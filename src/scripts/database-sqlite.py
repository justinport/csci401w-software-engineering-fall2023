
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

# Check if any records already exist in the 'users' table
cursor.execute('SELECT COUNT(*) FROM users')
record_count = cursor.fetchone()[0]

if record_count == 0:
    try:
        cursor.executemany('''
            INSERT INTO users (name, email, username, date_joined) 
            VALUES (?, ?, ?, ?)
        ''', sample_users)
    except sqlite3.IntegrityError:
        print("Error: Attempted to insert a duplicate record.")
else:
    print(f"{record_count} records already exist in the 'users' table. Not inserting sample records.")

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Script execution completed!")
