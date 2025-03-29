# 📌 EmployWise - User Management App

A **React application** for managing users, built using **React, React Router, Axios, and Tailwind CSS**. 
---

## 🚀 Features
- **User Listing** with Pagination
- **Edit User Details**
- **Delete User Functionality**
- **Responsive UI** using Tailwind CSS
- **State Management** using component state

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Axios, Tailwind CSS
- **API:** [Reqres API](https://reqres.in/) (Mock API for authentication and user management)

---

## 📂 Project Structure
```
EmployWise/
│── public/
│── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Users.jsx
│   │   ├── EditUser.jsx
│   ├── App.jsx
│   ├── index.js
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/employwise.git
cd employwise
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Application
```sh
npm run dev
```
The app will be running on **`http://localhost:5173`** (or your default Vite port).

---

## 🔑 Authentication Details  ------------------IMPORTANT FOR lOGIN---------------
- Use the **Reqres API's predefined credentials**:
  - **Email:** `eve.holt@reqres.in`
  - **Password:** `cityslicka`

---

## 🛠️ API Endpoints Used
- **Login:** `POST https://reqres.in/api/login`
- **Fetch Users:** `GET https://reqres.in/api/users?page=1`
- **Edit User:** `PUT https://reqres.in/api/users/:id`
- **Delete User:** `DELETE https://reqres.in/api/users/:id`

---

## 📌 Assumptions & Considerations
1. **Authentication** is handled using a mock token from the Reqres API.
2. **Pagination** is implemented but relies on Reqres API's limited dataset.
3. **No real database** is used; all changes (like edits and deletes) are not persistent.
4. **Logout clears the token** from local storage, requiring re-login.
5. **Error handling** is minimal due to Reqres API constraints.
6. **CSS Styling** follows a simple, user-friendly design with Tailwind CSS.

---

## 🤝 Contribution
If you'd like to contribute:
1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature/new-feature`)
5. Open a **Pull Request**

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 🌟 Show Your Support
If you found this project helpful, **please star this repo!** ⭐

