# Table of Contents

- [Introduction](#introduction)
- [Key Concepts](#key-concepts)
  - [Representational](#representational)
  - [State](#state)
  - [Transfer](#transfer)
  - [HTTP Methods](#http-methods)
  - [Endpoints](#endpoints)
  - [Resource-Oriented](#resource-oriented)
  - [Uniform Interface](#uniform-interface)
  - [Status Codes](#status-codes)
  - [Error Handling](#error-handling)
- [REST API Examples](#rest-api-examples)
  - [GET Request](#1-get-request)
  - [POST Request](#2-post-request)
  - [PUT Request](#3-put-request)


# REST API in Plain English

A **REST API** (Representational State Transfer Application Programming Interface) is a way for software systems to talk to each other and share information over the internet. Think of it as a shared language between different computer programs.

## Analogy:

Imagine a website without its graphical user interface—the buttons, images, and designs you normally see. Instead, all that exists are the underlying functions of the website, like getting user information, saving new data, or deleting specific records. This 'hidden' website is hosted on a server, just like any other site. Instead of interacting with it via clickable buttons or forms, you use specific web addresses (or "routes") to tell it exactly what you want to do. That's what a REST API is—like an invisible website that your software applications can visit and give instructions to.

# Key Concepts:

## Representational
- Deals with "representations" of data rather than the actual data.
- Common formats used: JSON or XML.
  - **Example**: `{ "name": "John", "age": 30, "city": "New York" }`

## State
- Refers to the current condition or data of an application.
- REST APIs are **stateless**: every request from a client to a server has all the information the server needs. No memory of past requests.
  - **Example**: Each time you access a website, you might log in anew, without the server remembering you from your last visit.

## Transfer
- Sharing of data between two points, typically a client (like a web browser) and a server (a computer storing the website).
  - **Example**: When you open a news app on your phone, it fetches the latest news from its server using a REST API.

## HTTP Methods
- **GET**: Fetching data.
  - **Example**: Viewing a friend's profile on social media.
- **POST**: Sending data to create something new.
  - **Example**: Signing up for a new account on a website.
- **PUT**: Updating data.
  - **Example**: Changing your profile picture.
- **DELETE**: Removing data.
  - **Example**: Deleting a post you made.

## Endpoints
- Specific URLs where the API can be accessed for operations.
  - **Example**: `https://api.example.com/users` might retrieve user data.

## Resource-Oriented
- Designed around "resources" – objects or data that clients can interact with.
  - **Example**: On an e-commerce site, resources could be users, products, or orders.

## Uniform Interface
- REST APIs have a predictable and consistent structure.
  - **Example**: If you know how to fetch data from one REST API, you can likely do the same with another API.

## Status Codes
- Indicate the outcome of an API request using codes.
  - **Example**: `200 OK` means your request was successful, while `404 Not Found` means the resource you requested couldn't be located.

## Error Handling
- Provides feedback when things go wrong.
  - **Example**: If you input incorrect data, the API might return an error like `{ "error": "Invalid input" }`.

In essence, a REST API is a structured way for different software systems to communicate over the internet. It uses common web standards and a stateless design, ensuring a simple, scalable, and standardized way to share data and functionality.

# REST API Examples

## 1. GET Request

**Goal**: Retrieve a list of books

**URL**: `https://api.bookstore.com/books`

**Headers**:
```
Accept: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Response**:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "year": 1925
        },
        {
            "id": 2,
            "title": "Moby Dick",
            "author": "Herman Melville",
            "year": 1851
        }
    ]
}
```

---

## 2. POST Request

**Goal**: Add a new book to the list

**URL**: `https://api.bookstore.com/books`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Body**:
```json
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960
}
```

**Response**:
```json
{
    "status": "success",
    "data": {
        "id": 3,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960
    }
}
```

---

## 3. PUT Request

**Goal**: Update the details of a book (e.g., change the year of publication)

**URL**: `https://api.bookstore.com/books/3`

**Headers**:
```
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Body**:
```json
{
    "year": 1961
}
```

**Response**:
```json
{
    "status": "success",
    "data": {
        "id": 3,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1961
    }
}
```

---

Note: These are typical patterns for GET, POST, and PUT requests in a REST API. The specific URLs, headers, request bodies, and responses can vary based on the API you're interacting with. Also, the "Authorization: Bearer YOUR_ACCESS_TOKEN" header is a common way to authenticate requests, but the specifics of authentication can differ between APIs.
