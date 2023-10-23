# Express API with Swagger Documentation

This project is a basic Express API for user resources, integrated with Swagger for API documentation.

## Assumptions

- You have administrative privileges on your machine.
- You have `git` installed on your machine.
- You're working in a development environment; be cautious when applying these in a production setting.

## Quickstart

### 1. Prerequisites:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

### 2. Clone the Repository:

```
git clone <repository-url>   # Replace with your repository's URL
cd api
```

### 3. Install Dependencies:

Install the necessary packages:

```
npm install
```

### 4. Installation Instructions:

#### i. Install Node.js:

Visit the [official Node.js website](https://nodejs.org/) to download and install Node.js. This will also install `npm`, the Node.js package manager.

#### ii. Install Python:

- **Windows**: Visit the [official Python website](https://www.python.org/downloads/windows/) to download the installer. Run the installer and ensure "Add Python to PATH" is checked.

- **Mac (using Homebrew)**:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install python
```

#### iii. Install pip (if not already installed with Python):

- You can check if pip is installed using:

```
pip --version
```

- If it's not installed, you can get it using:

```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
```

### 5. Setting up the Database:

- Before running the API server, you need to set up the database. Navigate to the `scripts/` folder:

```
cd scripts/
```

- Now, execute the Python scripts to set up and populate the database:

```
python database_setup_script.py
python populate_database_script.py
```

- Once done, navigate back to the `api/` folder:

```
cd ..
```

### 6. Start the Server:

```
node server.js
```

Once started, the API will be available at [http://localhost:3000](http://localhost:3000), and the Swagger documentation will be at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Project Structure

- `server.js`: The main entry point for the application.
- `swaggerOptions.js`: Configuration file for Swagger documentation.
- `data/
