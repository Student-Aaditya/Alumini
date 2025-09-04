// src/components/admin/AdminHeader.jsx
import React from "react";
import { Bell } from "react-bootstrap-icons";

const AdminHeader = () => {
  return (
    <header className="d-flex align-items-center justify-content-between border-bottom px-4 py-3 bg-white">
      {/* Logo + Title */}
      <div className="d-flex align-items-center gap-2 text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="me-2"
          viewBox="0 0 48 48"
        >
          <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
        </svg>
        <h2 className="h5 fw-bold mb-0">UniAlum</h2>
      </div>

      {/* Nav + Icons */}
      <div className="d-flex align-items-center gap-4">
        {/* Nav Links */}
        <nav className="d-flex align-items-center gap-4">
          <a href="/admin/Alumni_Management.jsx" className="text-dark text-decoration-none fw-medium small">
            Alumni
          </a>
          <a href="/admin/Students.jsx" className="text-dark text-decoration-none fw-medium small">
            Students
          </a>
          <a href="/admin/Event_Management.jsx" className="text-dark text-decoration-none fw-medium small">
            Events
          </a>
          <a href="/admin/Donations.jsx" className="text-dark text-decoration-none fw-medium small">
            Donations
          </a>
          <a href="/admin/File_Storage.jsx" className="text-dark text-decoration-none fw-medium small">
            Files
          </a>
        </nav>

        {/* Notification Button */}
        <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center p-2">
          <Bell size={18} />
        </button>

        {/* Profile Picture */}
        <div
          className="rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            backgroundImage: "url('https://via.placeholder.com/40')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </header>
  );
};

export default AdminHeader;
