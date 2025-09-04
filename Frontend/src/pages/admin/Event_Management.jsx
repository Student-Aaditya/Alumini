// src/pages/admin/Event_Management.jsx
import React from "react";

const Event_Management = () => {
  return (
    <div className="container-fluid py-4">
      {/* Page Title + Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Event Management</h2>
        <button className="btn btn-outline-primary rounded-pill px-4">
          + Add Event
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-light border-0">
            <i className="bi bi-search text-secondary"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Search events"
          />
        </div>
      </div>

      {/* Events Table */}
      <div className="table-responsive">
        <table className="table table-hover align-middle border">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Category</th>
              <th className="text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hackathon 2025</td>
              <td>15 March 2025</td>
              <td>Technical</td>
              <td className="fw-bold text-primary">Update | Delete</td>
            </tr>
            <tr>
              <td>Alumni Meet</td>
              <td>20 April 2025</td>
              <td>Networking</td>
              <td className="fw-bold text-primary">Update | Delete</td>
            </tr>
            <tr>
              <td>Workshop on AI</td>
              <td>10 May 2025</td>
              <td>Workshop</td>
              <td className="fw-bold text-primary">Update | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Event_Management;
