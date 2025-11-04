# 🌿 EcoExchange

**EcoExchange** is a full-stack web application built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It provides a platform for users to **exchange, donate, or recycle used items**, promoting sustainability and reducing waste.

---

## 🚀 Features

- ♻️ Add, view, and manage reusable items.
- 🖼️ Upload or link item images.
- 📍 Store and display item location and condition.
- 🌐 RESTful API built with Express and MongoDB.
- 💅 Beautiful responsive UI built with **React + Tailwind CSS**.
- ⚡ Real-time updates via API integration.
- 🔒 Secure backend setup with environment variables and MongoDB Atlas.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🌍 Axios for API calls
- 🔄 React Router DOM

### **Backend**
- 🧩 Node.js + Express.js
- 🍃 MongoDB + Mongoose
- 🔐 dotenv for environment configuration
- 🌐 CORS enabled for frontend-backend communication

---

## 📁 Folder Structure
ecoexchange/
│
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ ├── models/
│ │ └── itemModel.js # Mongoose schema
│ ├── routes/
│ │ └── itemRoutes.js # API routes for CRUD
│ ├── server.js # Express app entry point
│ ├── .env # Environment variables (MONGO_URI, PORT)
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── AddItemForm.jsx
│ │ ├── pages/
│ │ │ └── ItemList.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── tailwind.config.js
│ ├── postcss.config.cjs
│ ├── vite.config.js
│ └── package.json
│
└── README.md
