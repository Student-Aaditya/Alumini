import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/student">
            Student Portal
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/Alumni_Directory">
                  Alumni Directory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/Events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/Mentorship">
                  Mentorship
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/My_Profile">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
