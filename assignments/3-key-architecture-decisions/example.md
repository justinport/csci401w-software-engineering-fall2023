# Key Architectural Decisions for Blockr.io

## Table of Contents

- [Directions](#directions)
- [1. Introduction](#1-introduction)
  - [1.1. Purpose](#11-purpose)
- [2. System Overview](#2-system-overview)
- [3. Technical Choices](#3-technical-choices)
- [4. Other Considerations](#4-other-considerations)
- [5. Decision Log](#5-decision-log)

## Directions:

This assignment is designed to guide you in understanding the foundational aspects of your project. Remember, in software engineering, understanding the "why" behind decisions is often as important as the decisions themselves.

---

## 1. Introduction

### 1.1. Purpose

Solution Definition for the Blockr.io ecosystem.

---

## 2. System Overview

**Reference Architecture - Level 1:** 

The C4 diagram below shows the high-level view of systems used on the Blockr.io ecosystem. The user has a single interface to interact with Blockr.io and the data. The Blockr.io user interface makes calls to the blockr.io webserver which handles further interactions with the datastore both internal and external. 

Diagram (Placeholder)

**Container View - Level 2:** 

The C4 diagram below shows additional details about the Blockr.io ecosystem.

Diagram (Placeholder)

---

## 3. Technical Choices

### 3.1. Frontend Framework

**Choice:** Angular.js

**Why:** Documentation and developer experience. 

**Considerations:** MVC design requires greater overhead in terms of components.

### 3.2. Backend Framework

**Choice:** Node.js

**Why:** Simple webserver design allows for quick product design and testing. JavaScript is a popular web scripting language for frontend, and node.js allows us to design our backend with JavaScript.

**Considerations:** Faster development.

### 3.3. Database System

**Choice:** MongoDB

**Why:** We will use mongo db to store app data because it allows use to store objects such as json formatted data natively.

**Considerations:** We will use mongoose to build object relational models (ORM) to communicate with the mongodb instance. This may be a new concept for some on the team.

---

## 4. Other Considerations

### 4.1. Assumptions & Constraints

- **Rate Limits:** Limitations from blockchain.com/bitcoinabuse.com cap at 5 calls per minute, preventing real-time access.
  
- **API Key Access:** Requires individual user access provisioning or a system-wide API key arrangement.

### 4.2. Risks & Mitigators

- **Database Creation:** Due to the project's scope and time constraint, there isn't time to create a database for user's login. A mitigation plan is assigning words to specific user logins within the code.

- **API Rate Limit:** The rate limit will prevent real-time access to blockchain.com and bitcoinabuse.com. Strategies include checking the blockchain transactions' recency and downloading bitcoin abuse data nightly.

---

## 5. Decision Log

| Decision        | Rationale                                                                             | Impact                                                                                  |
|-----------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Angular.js      | Documentation and developer experience.                                                | MVC design requires more overhead.                                                      |
| Node.js         | Simple webserver design and the popularity of JavaScript.                              | Faster development.                                                                     |
| CSS template    | Expedite development using a ready-to-use template.                                    | Faster deployment but may challenge those unfamiliar with CSS and HTML.                 |
| MongoDB         | Native storage for JSON formatted data.                                                | Use of mongoose for ORM might be new for some team members.                             |
