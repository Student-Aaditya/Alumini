// src/pages/admin/File_Storage.jsx
import React from "react";

export default function File_Storage() {
  return (
    <div className="container mt-4">
      {/* Page Title */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">File Storage</h2>
          <p className="text-muted small">
            Upload and manage files related to alumni, students, events, and
            donations.
          </p>
        </div>
        <button className="btn btn-primary">Upload File</button>
      </div>

      {/* File Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>File Name</th>
                <th>Type</th>
                <th>Uploaded By</th>
                <th>Date Uploaded</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resume_Sophia_Brown.pdf</td>
                <td className="text-muted">PDF</td>
                <td className="text-muted">Admin User</td>
                <td className="text-muted">2024-01-15</td>
                <td>
                  <span className="text-primary fw-bold">
                    View | Download
                  </span>
                </td>
              </tr>
              <tr>
                <td>Event_Poster_Spring_Fair.jpg</td>
                <td className="text-muted">Image</td>
                <td className="text-muted">Admin User</td>
                <td className="text-muted">2024-02-20</td>
                <td>
                  <span className="text-primary fw-bold">
                    View | Download
                  </span>
                </td>
              </tr>
              <tr>
                <td>Donation_Receipt_2023.pdf</td>
                <td className="text-muted">PDF</td>
                <td className="text-muted">Admin User</td>
                <td className="text-muted">2024-03-10</td>
                <td>
                  <span className="text-primary fw-bold">
                    View | Download
                  </span>
                </td>
              </tr>
              <tr>
                <td>Student_Transcript_Ethan_Chen.pdf</td>
                <td className="text-muted">PDF</td>
                <td className="text-muted">Admin User</td>
                <td className="text-muted">2024-04-05</td>
                <td>
                  <span className="text-primary fw-bold">
                    View | Download
                  </span>
                </td>
              </tr>
              <tr>
                <td>Alumni_Newsletter_May_2024.pdf</td>
                <td className="text-muted">PDF</td>
                <td className="text-muted">Admin User</td>
                <td className="text-muted">2024-05-01</td>
                <td>
                  <span className="text-primary fw-bold">
                    View | Download
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
