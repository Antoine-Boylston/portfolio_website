# 🌐 Cloud Portfolio Website

Welcome! This repository contains the source code for my personal portfolio website — a central hub for my cloud projects, certifications, and technical growth.

> **Live Site:** https://www.antoineboylston.com
> **Deployed via:** AWS Amplify (S3, CloudFront, Route 53)

---

## 🧱 About the Project

This portfolio is designed to showcase real-world projects and demonstrate practical experience with cloud technologies.

Originally built as a **static frontend application**, the site has evolved to incorporate a **serverless backend architecture**, improving scalability, maintainability, and separation of concerns.

---

## 🚀 Recent Enhancement: Database-Driven Architecture

One of the most significant improvements to this project was redesigning the Projects section to be **fully dynamic and database-driven**.

### What Changed

* Replaced hardcoded project data with **DynamoDB**
* Implemented **AWS Lambda** to retrieve project records
* Created a REST API using **API Gateway**
* Updated frontend to dynamically render project content from API responses

### Architecture

**Frontend → API Gateway → Lambda → DynamoDB**

This allows new projects to be added by inserting records into the database instead of modifying multiple HTML files.

---

## ⚙️ Tech Stack

| Layer           | Technology                    |
| --------------- | ----------------------------- |
| Frontend        | HTML, CSS, JavaScript         |
| Backend         | AWS Lambda                    |
| API             | API Gateway                   |
| Database        | DynamoDB                      |
| Hosting         | AWS Amplify (S3 + CloudFront) |
| Domain          | Route 53                      |
| Version Control | Git & GitHub                  |

---

## 📁 Repository Structure

```bash
portfolio_website/
├── ORIGINAL_ARTIFACT/        # Initial static version of the site
├── ENHANCED_ARTIFACT/        # Database-driven implementation
│   ├── frontend/
│   ├── lambda/
│   ├── database/
│   └── api/
├── COMPARISON.md             # Breakdown of improvements
└── README.md
```

---

## 📊 Key Improvement

| Feature      | Before             | After           |
| ------------ | ------------------ | --------------- |
| Data Storage | Hardcoded JS array | DynamoDB        |
| Backend      | None               | AWS Lambda      |
| API          | None               | API Gateway     |
| Updates      | Manual edits       | Database-driven |

---

## 🎯 Why This Matters

This enhancement reflects a shift from a static website to a **cloud-native application**, demonstrating:

* Scalable architecture design
* Backend development using serverless technologies
* Integration between frontend and cloud services
* Real-world application of AWS best practices

---

## 📌 Academic Context (CS-499 Capstone)

This enhancement was further formalized as part of my Computer Science capstone project, focusing on database design and cloud integration.

For academic documentation and comparison of the original and enhanced versions:

* See: `COMPARISON.md`
* Database design: `ENHANCED_ARTIFACT/database/`
* Backend implementation: `ENHANCED_ARTIFACT/lambda/`

---

## 📎 Notes

This repository reflects ongoing development. The portfolio continues to evolve as I build new projects and expand my cloud skill set.
