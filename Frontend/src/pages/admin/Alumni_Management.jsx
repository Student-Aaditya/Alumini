import React from "react";

export default function Alumni_Management() {
  return (
    <div className="container mt-4">
      {/* Page Title */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Alumni Management</h2>
        <button className="btn btn-primary">+ Add Alumni</button>
      </div>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search alumni by name or email"
        />
      </div>

      {/* Filters */}
      <div className="d-flex gap-2 mb-4">
        <select className="form-select w-auto">
          <option>Branch</option>
          <option>Computer Science</option>
          <option>Electrical Engineering</option>
          <option>Mechanical Engineering</option>
          <option>Civil Engineering</option>
        </select>
        <select className="form-select w-auto">
          <option>Year</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>

      {/* Alumni Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Owen Carter</td>
                <td className="text-primary">owen.carter@email.com</td>
                <td>Computer Science</td>
                <td>2018</td>
                <td>Tech Innovators Inc.</td>
                <td>
                  <span className="text-primary fw-bold">
                    Approve | Deactivate | Edit
                  </span>
                </td>
              </tr>
              {/* ...other rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}