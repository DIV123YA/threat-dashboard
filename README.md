# 🛡️ Threat Intelligence Dashboard

A full-stack **single-page web application (SPA)** that visualizes cybersecurity threat data using an interactive and responsive dashboard.
The app provides real-time threat summaries, visual statistics, search and filtering capabilities, and detailed views — all powered by a RESTful API backend.

---

## 🔍 What It Does

This dashboard allows security analysts and users to:

- View total number of threats and distribution by **category** and **severity**
- Search for threats by keyword
- Filter threats by **category**
- Paginate through threat records
- Click on a threat to see its detailed information
- Enjoy a visually styled interface for usability

---

## ✨ Features

- 📊 Interactive dashboard with summary stats (cards)
- 🗂️ Filter & search threats
- 🧾 Detailed threat view
- 🎨 Responsive, modern UI with Tailwind CSS
- ⚙️ RESTful API using Express + Sequelize + SQLite/MySQL/Postgres

---

## 🛠️ Tech Stack

| Frontend               | Backend                      | Database     |
|------------------------|------------------------------|--------------|
| React + Vite           | Node.js + Express.js         | SQLite (or MySQL/Postgres) |
| Tailwind CSS           | Sequelize ORM                |              |

---

## 📁 Folder Structure

threat-dashboard/
│
├── backend/
│ ├── controllers/ # Threat API logic
│ ├── models/ # Sequelize model
│ ├── routes/ # API routes
│ ├── config/ # DB config
│ └── server.js # Express server entry
│
├── frontend/
│ ├── public/ # Static files (backgrounds, icons)
│ └── src/
│ ├── components/ # DashboardStats, ThreatTable
│ ├── pages/ # Home, ThreatDetailPage
│ ├── api.js # Axios instance
│ └── main.jsx, App.jsx # App bootstrap
│
└── README.md

** HOW TO RUN THIS CODE**

1) Make changes to evn file 
   DB_NAME=database_name
   DB_USER=root
   DB_PASSWORD=password
   DB_HOST=localhost
   DB_DIALECT=mysql
   PORT=5000

1️⃣ Clone the repository
git clone https://github.com/DIV123YA/threat-dashboard/
cd threat-dashboard

2️⃣ Navigate to the backend directory
cd backend

3️⃣ Install backend dependencies
npm install

4️⃣ Configure your database
In backend/config/db.js, configure your preferred database. By default, it uses SQLite.

Example for SQLite:
dialect: "sqlite",
storage: "threats.db"

5️⃣ Seed sample data (Optional)

6️⃣ Start the backend server
bash
npm start
Backend server will run at: http://localhost:5000

🎨 Frontend Setup
7️⃣ Navigate to the frontend directory
bash
cd ../frontend

8️⃣ Install frontend dependencies
bash
npm install

9️⃣Start the frontend development server
bash
npm run dev

Frontend will be available at: http://localhost:5173

Open http://localhost:5173 in your browser to view the UI."
