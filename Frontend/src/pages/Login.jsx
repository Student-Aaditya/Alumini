// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("admin"); // Default role = admin
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin/Students");
    } else if (role === "student") {
      navigate("/student/My_Profile");
    } else if (role === "alumni") {
      navigate("/alumni/Professional_Details");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">CampusConnect Login</h3>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" required />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>

          {/* Role Selector */}
          <div className="mb-3">
            <label className="form-label">Login as</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;