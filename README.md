# MERN Enquiry Management System

##  Project Overview

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed for managing enquiries with complete CRUD functionality.

The backend follows MVC architecture, and the frontend is built using React (Vite). Authentication is handled using Clerk Authentication.

The system supports secure user login/signup and performs API-based data operations between frontend and backend.

---

#  Features

* Create Enquiry
* View All Enquiries
* Update Enquiry
* Delete Enquiry
* REST API integration
* MVC Architecture (Backend)
* MongoDB Database Integration
* Clerk Authentication (Login/Signup/Session)
* Protected Routes
* Toast Notifications
* Confirmation Alerts (SweetAlert2)
* Responsive UI (Tailwind CSS + Flowbite)

---

#  Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* CORS
* dotenv

## Frontend

* React.js (Vite)
* Axios
* Tailwind CSS
* Flowbite React
* React Toastify
* SweetAlert2
* Clerk Authentication (`@clerk/clerk-react`)

---

#  Project Structure

```text id="proj123"
Web_Development/
│
├── client/                     # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── enquiry/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│
└── server/                     # Backend (Node + Express)
    ├── App/
    │   ├── controllers/
    │   ├── models/
    │   └── routes/
    ├── index.js
    ├── package.json
```

---

#  API Endpoints

## Base URL

```
/api/website/enquiry
```

## Routes

### Get All Enquiries

```http id="api1"
GET /api/website/enquiry/view
```

### Insert Enquiry

```http id="api2"
POST /api/website/enquiry/insert/
```

### Update Enquiry

```http id="api3"
PUT /api/website/enquiry/:id
```

### Delete Enquiry

```http id="api4"
DELETE /api/website/enquiry/delete/:id
```

---

# ⚙ Backend Setup

## 1. Navigate to server folder

```bash id="b1"
cd server
```

## 2. Install dependencies

```bash id="b2"
npm install
```

## 3. Install required backend packages

```bash id="b3"

npm install express mongoose cors dotenv
```

## 4. Install nodemon (development)

```bash id="b4"
npm i nodemon
npm install nodemon --save-dev
```

OR

```bash id="b5"
npm install nodemon -D
```

---

#  Run Backend

## Using Node

```bash id="b6"
node index.js
```

## Using Nodemon

```bash id="b7"
npx nodemon index.js
```

OR (if script added in package.json)

```bash id="b8"
npm run start
```

---

#  Frontend Setup

## 1. Navigate to client folder

```bash id="f1"
cd client
```

## 2. Install dependencies

```bash id="f2"
npm install
```

## 3. Install frontend packages

```bash id="f3"
npm install axios react-toastify sweetalert2 flowbite flowbite-react tailwindcss
```

## 4. Install Clerk Authentication

```bash id="f4"
npm install @clerk/clerk-react
```

---

# Run Frontend

```bash id="f5"
npm run dev
```

---

#  Authentication (Clerk)

This project uses Clerk for authentication.

## Setup

Create `.env` file in client folder:

```env id="env1"
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Features

* Sign Up
* Sign In
* Sign Out
* Session Management
* Protected Routes

---

# 🗄 Database Setup

* MongoDB used as database
* Connected using Mongoose
* Models created using MVC pattern
* Backend connected with frontend via REST APIs

---

#  Third-Party Packages Summary

## Backend

* express
* mongoose
* cors
* dotenv
* nodemon

## Frontend

* react
* axios
* react-toastify
* sweetalert2
* flowbite
* flowbite-react
* tailwindcss
* @clerk/clerk-react

---

#  Author

**Muhammad Idrees**

---

# Notes

* Ensure MongoDB is running before starting backend
* Ensure `.env` file is configured properly
* Backend runs on default port (e.g. 5000)
* Frontend runs on Vite dev server (e.g. 5173)
