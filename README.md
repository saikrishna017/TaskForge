# TaskForge – Backend Developer Intern Assignment

TaskForge is a backend-focused web application developed as part of a Backend Developer Intern assignment. The project demonstrates secure authentication, role-based access control, and CRUD operations using a RESTful API. A simple React frontend is included to interact with and validate the backend APIs.

---

## Project Overview

The objective of this project is to design and implement a secure backend system with proper authentication and authorization. The frontend is intentionally kept minimal and is used only to demonstrate API functionality.

Primary focus: Backend development  
Frontend: Supportive UI for API interaction

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- CORS

### Frontend
- React.js
- Fetch API
- CSS

## Repository Structure
```text
taskforge/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ └── server.js
│ ├── package.json
│ ├── .env.example
│ └── README.md
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── .gitignore
└── README.md
```

---

## Features

### Authentication & Authorization
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (user / admin)
- Protected routes using middleware

### Task Management (CRUD)
- Create tasks
- View tasks of the logged-in user
- Update tasks
- Delete tasks
- All task APIs are JWT-protected

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or above)
- npm
- MongoDB Atlas account

---

### Backend Setup

```bash
cd backend
npm install

Create a .env file inside the backend directory:

PORT=5000
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection_string

Start the backend server:
npx nodemon src/server.js

Backend runs on:
http://localhost:5000
```

### Frontend Setup
```bash
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000
```

### API Endpoints

Authentication:
```text

POST /api/v1/auth/register

POST /api/v1/auth/login
```

Tasks (JWT Required):
```text

POST /api/v1/tasks

GET /api/v1/tasks

PUT /api/v1/tasks/:id
