import React from "react";

export default function Donations() {
  return (
    <div className="container mt-4">
      {/* Page Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Donations</h2>
        <button className="btn btn-primary">+ Add Donation</button>
      </div>

      {/* Donations Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Donor Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Purpose</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>₹10,000</td>
                <td>2025-09-01</td>
                <td>Scholarship Fund</td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>₹5,000</td>
                <td>2025-08-25</td>
                <td>Library Development</td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary me-2">
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more donation rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
