# Comparison of Original and Enhanced Portfolio Implementation

## Overview

This document outlines the evolution of my portfolio website from a **static frontend application** to a **dynamic, database-driven system** built using serverless cloud technologies.

The enhancement focuses on improving scalability, maintainability, and separation of concerns by integrating a NoSQL database and backend API.

---

## Original Implementation

The original version of the portfolio was designed as a static website using HTML, CSS, and JavaScript.

### Key Characteristics

* Project data stored in a **hardcoded JavaScript array**
* Frontend responsible for both **data storage and presentation**
* No backend or database integration
* Updates required **manual modification of HTML/JavaScript files**
* Limited scalability as the number of projects grows

### Example (Original Data Structure)

```javascript
const projects = [
  {
    title: "Industrial Automation & PLC Systems",
    summary: "Designed PLC-based control systems...",
    imageUrl: "images/projects/door-control/door-sim.PNG",
    detailsUrl: "door-control.html"
  }
];
```

This approach worked for initial development but introduced redundancy and made long-term maintenance inefficient.

---

## Enhanced Implementation

The enhanced version redesigns the application to use a **serverless, database-backed architecture**.

### Key Improvements

* Project data stored in **Amazon DynamoDB**
* Backend implemented using **AWS Lambda**
* API layer provided by **Amazon API Gateway**
* Frontend retrieves data dynamically via HTTP requests
* Clear separation between **data, logic, and presentation**

---

## Architecture Comparison

### Original Architecture

Frontend Only:

```
Browser → Static HTML/CSS/JS → Hardcoded Data
```

### Enhanced Architecture

Serverless Architecture:

```
Browser → API Gateway → Lambda → DynamoDB
```

---

## Feature Comparison

| Feature                | Original Implementation | Enhanced Implementation        |
| ---------------------- | ----------------------- | ------------------------------ |
| Data Storage           | Hardcoded JS array      | DynamoDB (NoSQL)               |
| Backend                | None                    | AWS Lambda                     |
| API                    | None                    | API Gateway                    |
| Data Retrieval         | Local JS variable       | HTTP request (fetch)           |
| Updates                | Manual code edits       | Insert/update database records |
| Scalability            | Limited                 | Highly scalable                |
| Maintainability        | Low                     | High                           |
| Separation of Concerns | None                    | Clear separation               |

---

## Database Design

The enhanced implementation introduces a **NoSQL data model** using DynamoDB.

### Table Structure

* **Table Name:** PortfolioProjects
* **Primary Key:** `projectId`

### Attributes

* `projectId` (String)
* `title`
* `summary`
* `imageUrl`
* `detailsUrl`
* `buttonText`
* `displayOrder`

### Example Record

```json
{
  "projectId": "proj-001",
  "title": "3-Tier Architecture on AWS",
  "summary": "Designed and deployed a secure 3-tier architecture...",
  "imageUrl": "images/pic01.jpg",
  "detailsUrl": "3-tier.html",
  "buttonText": "Learn More",
  "displayOrder": 2
}
```

This structure allows flexible, schema-less data storage while supporting efficient retrieval and expansion.

---

## Frontend Changes

The frontend was updated to remove hardcoded project data and instead request data from the API.

### Before

* Projects defined directly in JavaScript
* Rendering based on local array

### After

```javascript
async function loadProjects() {
  const response = await fetch("/projects");
  const projects = await response.json();
  renderProjects(projects);
}
```

This enables real-time updates without modifying frontend code.

---

## Backend Implementation

### AWS Lambda

* Handles requests from API Gateway
* Retrieves project records from DynamoDB
* Returns JSON response

### API Gateway

* Exposes endpoint:

  ```
  GET /projects
  ```
* Connects frontend to backend services

---

## Benefits of the Enhancement

### 1. Scalability

The application can now handle a growing number of projects without requiring structural changes to the frontend.

### 2. Maintainability

New projects can be added by inserting records into DynamoDB rather than editing multiple files.

### 3. Separation of Concerns

* Frontend: Presentation
* Backend: Logic
* Database: Data storage

### 4. Real-World Cloud Architecture

The system reflects modern cloud-native design patterns using serverless services.

---

## Conclusion

This enhancement transforms the portfolio from a static website into a **cloud-based application**, demonstrating practical experience with:

* NoSQL database design
* Serverless backend development
* API-driven frontend architecture
* Scalable and maintainable system design

---

## Academic Context

This enhancement was documented as part of my CS-499 Capstone project under the **Databases category**, where the focus was on demonstrating the integration of a NoSQL database into an existing application.

