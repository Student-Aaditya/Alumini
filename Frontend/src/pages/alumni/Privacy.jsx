// src/pages/alumni/Privacy.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Privacy = () => {
  const [isDeactivated, setIsDeactivated] = useState(false);

  return (
    <div className="container py-5" style={{ maxWidth: "512px" }}>
      <div className="mb-4">
        <h1 className="fw-bold text-dark">Privacy</h1>
      </div>

      {/* Account Deactivation */}
      <div className="mb-3">
        <h3 className="fw-bold text-dark mb-2">Account Deactivation</h3>
        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
          <div>
            <p className="mb-1 fw-medium text-dark">Deactivate Account</p>
            <p className="mb-0 text-secondary" style={{ fontSize: "0.9rem" }}>
              Deactivating your account will remove your profile from the platform
              and hide your activity. This action is reversible.
            </p>
          </div>
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="deactivateSwitch"
                checked={isDeactivated}
                onChange={() => setIsDeactivated(!isDeactivated)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-end">
        <button className="btn btn-primary fw-bold">Save Changes</button>
      </div>
    </div>
  );
};

export default Privacy;
