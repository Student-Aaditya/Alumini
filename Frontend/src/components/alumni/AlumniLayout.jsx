import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AlumniLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/alumni">
            Alumni Portal
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Mentorship_Request">
                  Mentorship
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Privacy">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/alumni/Professional_Details">
                  Professional Details
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

export default AlumniLayout;
