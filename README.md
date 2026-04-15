# 🔐 Password Manager (MERN + MongoDB)

A full-stack password manager web application built using the MERN stack.
This version securely stores passwords in a MongoDB database instead of local storage.

---

## 🚀 Features

* 🔑 Store and manage passwords using MongoDB
* 👁️ Show / Hide password toggle
* 📋 Copy password to clipboard
* ✏️ Edit saved credentials
* ❌ Delete passwords
* ⚡ Fast and responsive UI with React + Vite
* 🌐 REST API with Node.js & Express

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📂 Project Structure

password-manager/
│
├── frontend/        # React (Vite) client
├── backend/         # Express server & API
├── README.md
└── package.json

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/your-username/password-manager-mongodb.git
cd password-manager-mongodb

---

### 2️⃣ Backend Setup

cd backend
npm install

Create a `.env` file inside backend folder:

MONGO_URI=mongodb://localhost:27017/passwordManager
PORT=3000

Run backend:

npx nodemon index.js

---

### 3️⃣ Frontend Setup

cd ../frontend
npm install
npm run dev

---

## 🌐 API Endpoints

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | /        | Fetch all passwords |
| POST   | /        | Add new password    |
| PUT    | /:id     | Update password     |
| DELETE | /:id     | Delete password     |

---

## 🔐 Security Note

Currently, passwords are stored in plain text.
For real-world applications, encryption (bcrypt/AES) should be implemented.

---

## 📌 Future Improvements

* 🔒 Password encryption
* 👤 User authentication (JWT)
* ☁️ Deployment (Render / Vercel / MongoDB Atlas)
* 🧠 Password strength checker

---

## 🙌 Author

**Anant Gupta**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
