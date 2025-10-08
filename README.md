

# 🎓 Student-Course CRUD App (Node.js + MySQL)

## 📘 Overview
A simple CRUD API built with Node.js (Express) and MySQL to manage students and courses.

## 🧩 Features
- Create, Read, Update, Delete students and courses  
- Enforce unique emails and course codes  
- Uses environment variables for secure DB connection  

## 🛠️ Setup
1. Clone this repo:
   ```bash
   git clone <your-repo-link>
   cd student-course-crud

## Install dependencies:

npm install

## Set up database:

mysql -u root -p < schema.sql

## Configure .env file (copy from .env.example).

Run server:

npm run dev

## 🧪 API Endpoints

| Method   | Endpoint        | Description       |
| -------- | --------------- | ----------------- |
| `POST`   | `/students`     | Add a new student |
| `GET`    | `/students`     | List all students |
| `GET`    | `/students/:id` | Get student by ID |
| `PUT`    | `/students/:id` | Update a student  |
| `DELETE` | `/students/:id` | Delete a student  |
| `POST`   | `/courses`      | Add a course      |
| `GET`    | `/courses`      | List all courses  |
| `DELETE` | `/courses/:id`  | Delete a course   |

curl -X POST http://localhost:3000/students \
-H "Content-Type: application/json" \
-d '{"first_name":"Yvonne","last_name":"Samwel","email":"yvonne@example.com"}'
curl -X POST http://localhost:3306/students -H "Content-Type: application/json" -d "{\"first_name\":\"Yvonne\",\"last_name\":\"Samwel\",\"email\":\"yvonne@example.com\"}"
