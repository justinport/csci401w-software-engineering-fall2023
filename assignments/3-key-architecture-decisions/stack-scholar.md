# Key Architectural Decisions for StackScholar

## Table of Contents

- [Directions](#directions)
- [1. Introduction](#1-introduction)
  - [1.1. Purpose](#11-purpose)
- [2. System Overview](#2-system-overview)
- [3. Technical Choices](#3-technical-choices)
  - [3.1. Frontend Framework](#31-frontend-framework)
  - [3.2. Backend Framework](#32-backend-framework)
  - [3.3. Database System](#33-database-system)
- [4. Other Considerations](#4-other-considerations)
  - [4.1. Team Skills and Learning](#41-team-skills-and-learning)
  - [4.2. Community and Support](#42-community-and-support)
  - [4.3. Future Adaptability](#43-future-adaptability)
- [5. Decision Log](#5-decision-log)

## Directions:

This assignment is designed to guide you in understanding the foundational aspects of your project. Remember, in software engineering, understanding the "why" behind decisions is often as important as the decisions themselves.

---

## 1. Introduction

### 1.1. Purpose

This document provides insights into the architectural choices made for StackScholar, detailing the rationale behind each decision.

---

## 2. System Overview

StackScholar is a repository designed for educational purposes, allowing users to explore simple frontend designs, API connections, database interactions, and backend utilities.

---

## 3. Technical Choices

### 3.1. Frontend Framework

**Choice:** HTML & jQuery

**Reason:** Aim to keep things simple and straightforward. jQuery provides an easy-to-use method to handle DOM manipulations and AJAX calls without the overhead of modern frontend frameworks.

### 3.2. Backend Framework

**Choice:** Express.js (Node.js)

**Reason:** Express.js offers a minimalist and fast web application framework for Node.js, ideal for building simple APIs and middleware.

### 3.3. Database System

**Choice:** SQLite

**Reason:** SQLite is a lightweight, serverless, and self-contained SQL database engine, perfect for educational purposes where ease of setup and simplicity are paramount.

---

## 4. Other Considerations

### 4.1. Team Skills and Learning

The choices reflect a balance between simplicity and functionality. Using HTML, jQuery, and Express.js allows for straightforward development, and Python scripts offer flexibility for setup and one-off tasks.

### 4.2. Community and Support

Both jQuery and Express.js have extensive communities, ensuring availability of tutorials, forums, and third-party tools. SQLite, being widely adopted, has solid documentation and community support.

### 4.3. Future Adaptability

The simplicity of the chosen tech stack ensures ease of understanding for beginners. However, the modular nature of Express.js allows for future extensions or more advanced features.

---

## 5. Decision Log

| Date       | Decision                                 | Reasoning                                                                                                            |
|------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| 2023-10-22 | Chose HTML & jQuery for the frontend.    | Simplicity and ease of use without the overhead of modern frameworks.                                                 |
| 2023-10-22 | Adopted Express.js for the backend.      | The lightweight nature and ease of setup for simple APIs and middleware.                                              |
| 2023-10-22 | Decided on SQLite for the database.      | Its serverless nature and self-contained setup make it perfect for educational projects.                               |

