// src/pages/admin/Students.jsx
import React from "react";
import { Table, Button, Form, InputGroup } from "react-bootstrap";

const Students = () => {
  const students = [
    { name: "Owen Mitchell", branch: "Computer Science", interests: "AI, Machine Learning" },
    { name: "Chloe Sullivan", branch: "Electrical Engineering", interests: "Robotics, Control Systems" },
    { name: "Caleb Parker", branch: "Mechanical Engineering", interests: "Thermodynamics, Fluid Mechanics" },
    { name: "Emily Reed", branch: "Civil Engineering", interests: "Structural Analysis, Geotechnical Engineering" },
    { name: "Logan Brooks", branch: "Chemical Engineering", interests: "Process Design, Reaction Engineering" },
    { name: "Grace Coleman", branch: "Aerospace Engineering", interests: "Aerodynamics, Propulsion" },
    { name: "Henry Foster", branch: "Biomedical Engineering", interests: "Biomaterials, Biomechanics" },
    { name: "Lily Hughes", branch: "Industrial Engineering", interests: "Operations Research, Supply Chain Management" },
    { name: "Samuel Jenkins", branch: "Environmental Engineering", interests: "Water Resources, Air Quality" },
    { name: "Ella Knight", branch: "Materials Science and Engineering", interests: "Nanomaterials, Ceramics" },
  ];

  return (
    <div className="container py-4">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Students</h2>
        <Button variant="outline-primary" className="rounded-pill">
          Add Student
        </Button>
      </div>

      {/* Search Bar */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-icon">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Search students"
          aria-label="Search students"
          aria-describedby="search-icon"
        />
      </InputGroup>

      {/* Table */}
      <div className="table-responsive shadow-sm rounded">
        <Table hover borderless className="align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Interests</th>
              <th className="text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, idx) => (
              <tr key={idx}>
                <td>{s.name}</td>
                <td className="text-secondary">{s.branch}</td>
                <td className="text-secondary">{s.interests}</td>
                <td className="text-primary fw-bold">Update | Deactivate</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
