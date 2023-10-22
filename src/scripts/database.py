import pymysql

# Database connection parameters
host = "p3nlmysql1plsk.secureserver.net"
port = 3306
user = "sandbox"
password = ""
database = "sandbox"

# Connect to the database
connection = pymysql.connect(host=host, port=port, user=user, password=password, db=database)

try:
    with connection.cursor() as cursor:
        # Create user table
        sql_create_table = """
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
        """
        cursor.execute(sql_create_table)

        # Insert dummy data
        dummy_users = [("Alice", "alice@email.com"), ("Bob", "bob@email.com"), ("Charlie", "charlie@email.com")]
        sql_insert = "INSERT INTO users (name, email) VALUES (%s, %s)"
        cursor.executemany(sql_insert, dummy_users)

        connection.commit()
finally:
    connection.close()
