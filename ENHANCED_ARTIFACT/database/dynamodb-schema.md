# DynamoDB Schema – PortfolioProjects

## Overview

This document describes the NoSQL database design used for the enhanced version of my portfolio website.

The original site stored project information directly in frontend JavaScript. In the enhanced version, project metadata is stored in Amazon DynamoDB and retrieved through AWS Lambda and API Gateway. This separates data storage from presentation and makes the portfolio easier to maintain and expand.

---

## Table Information

- **Table Name:** `PortfolioProjects`
- **Database Type:** NoSQL
- **Service:** Amazon DynamoDB

---

## Primary Key

The table uses a simple primary key:

- **Partition Key:** `projectId` (String)

Each project record is uniquely identified by a `projectId`.

Example:
- `proj-001`
- `proj-002`
- `proj-003`

---

## Attributes

Each project item contains the following attributes:

| Attribute | Type | Purpose |
|---|---|---|
| `projectId` | String | Unique identifier for the project |
| `title` | String | Project title shown on the portfolio |
| `summary` | String | Short description displayed on the project card |
| `imageUrl` | String | Path to the project image |
| `detailsUrl` | String | Link to the project details page or external URL |
| `imagePosition` | String | Controls image alignment in the UI |
| `buttonText` | String | Text displayed on the action button |
| `displayOrder` | Number | Determines the order projects appear on the page |

---

## Example Item

```json
{
  "projectId": "proj-001",
  "title": "Industrial Automation & PLC Systems",
  "summary": "Designed PLC-based control systems including motor interlocking, timer-based sequencing, and HMI integration using ladder logic.",
  "imageUrl": "images/projects/door-control/door-sim.PNG",
  "detailsUrl": "door-control.html",
  "imagePosition": "center center",
  "buttonText": "View Project",
  "displayOrder": 1
}


