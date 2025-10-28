# 🎟️ Ventix

**A modern ticket management web app with authentication and CRUD features built using React and LocalStorage.**

---

## 🚀 Overview

Ventix is a simple and user-friendly ticket management application built with **React**.  
It allows users to sign up, log in, and manage tickets directly in the browser using **LocalStorage** for data persistence.

The app simulates a real-world helpdesk system, making it ideal for learning frontend state management, CRUD operations, and authentication flow.

---

## ✨ Features

- 🔐 **User Authentication**
  - Local signup and login system using LocalStorage.
  - Session-based access control for dashboard and ticket management.
  - Logout clears session and redirects to the landing page.

- 🎫 **Ticket Management**
  - Create, read, update, and delete tickets.
  - Filter tickets by status (All, Open, In Progress, Closed).
  - Real-time updates stored in LocalStorage.

- 💬 **Notifications**
  - Integrated toast notifications for success and error messages (React Toastify).

- 🧭 **Protected Routing**
  - Dashboard and Ticket Management pages are protected.
  - Redirects unauthenticated users to the login page.

- 🎨 **Modern UI**
  - Clean and responsive design using CSS Modules.
  - Styled with white and green (`#40c156`) color theme.

---

## 🛠️ Tech Stack

- **React 19**
- **React Router DOM v6.30**
- **CSS Modules**
- **React Toastify**
- **LocalStorage (for CRUD and session simulation)**


---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ventix.git
Navigate to the project folder:

cd ventix
Install dependencies:

npm install
Start the development server:

npm run dev
🔑 Authentication Details
Authentication is simulated using LocalStorage.

Session key name: ticketapp_session.
example login credentials : dekolaadeola@gmail.com
password:12345678

Only logged-in users can access /dashboard and /tickets.

Logout clears session and redirects to /auth/login.


Add user roles (admin/staff).

👩‍💻 Author
Developed by Adeola Adekola

📜 License
This project is open-source and free to use for educational purposes.
