// src/pages/alumni/Professional_Details.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Professional_Details = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "512px" }}>
      <div className="mb-4">
        <h1 className="fw-bold text-dark">Professional Details</h1>
        <p className="text-secondary">
          Update your professional information to connect with fellow alumni and
          explore opportunities.
        </p>
      </div>

      {/* Company */}
      <div className="mb-3">
        <label className="form-label fw-medium text-dark">Company</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your company"
        />
      </div>

      {/* Position */}
      <div className="mb-3">
        <label className="form-label fw-medium text-dark">Position</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your position"
        />
      </div>

      {/* Skills */}
      <div className="mb-3">
        <label className="form-label fw-medium text-dark">Skills</label>
        <textarea
          className="form-control"
          rows="5"
          placeholder="Enter your skills"
        ></textarea>
      </div>

      {/* Save Button */}
      <div className="text-end">
        <button className="btn btn-primary fw-bold">Save Changes</button>
      </div>
    </div>
  );
};

export default Professional_Details;
