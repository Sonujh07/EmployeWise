/*
 * EmployWise Assignment - User Management App
 * Tech Stack: React, React Router, Axios, Tailwind CSS
 * Features:
 * - User authentication using Reqres API
 * - Fetch & display users with pagination
 * - Edit and delete user functionality
 * - State management using component state
 */

// Importing required libraries
import React, { useState } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/User";
import EditUser from "./components/EditUser";
import './index.css'; // Import Tailwind styles

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token)

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };


  return (
    <div className="w-screen bg-amber-800 h-screen">
      
    
    <Routes>
      
      
        <Route path="/" element={<Login setToken={setToken} token={token} />} />
        <Route 
          path="/users" 
          element={token ? <Users token={token} onLogout={handleLogout} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/edit-user/:id" 
          element={token ? <EditUser token={token} /> : <Navigate to="/" />} 
        />
      </Routes>
      </div>
    
  );
};

export default App;
