// src/pages/student/Alumni_Directory.jsx
import React from "react";

const alumniData = [
  {
    name: "Emily Harper",
    role: "Software Engineer at Tech Innovators Inc.",
    description: "Specializes in AI and Machine Learning",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA__EdJkFkjqePFmczQnADyWqypc67coOrqBmuJRyHyZhR0YwpFMu_a1NM0yVPOrV7IKgS0o7BiLdYXrCXRDxDpdu7IThMpzykGg_2zgVRDFaqphSehJgqRCosGMAN79skefTKFl6OjW2yeR07lUmr8tO0mkrsWa30OCfBZkQ1EGo6x0zluzjgcnc0AJDMDaGB1XBaKKHxAINqLSqdav7abCx8sjlJlfcfA8_62QRmQlj2AiBu4arQ6eYSP1znjYkIJN9jpAUNOSqqH",
  },
  {
    name: "Owen Turner",
    role: "Product Manager at Global Solutions Corp.",
    description: "Experienced in Agile methodologies and product strategy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsUNL-4UAm0Z5uv930YEjLWtMljGKvREnC9mJKkaTbHxRBriM-4j-C3PV2AAvlosmTn2Sz_3bxkVds57VS_e-p8KFSYyya19vzhgfkwwHT0xa7kGXLh4aJDxyJVDmnbvjHT4qW5zN7nGP4XlwSjxbdzYL-CS75r6cA9OOmO4qEmjuUdxJ5P_be11Iq4EwINi_g5y3Ou_K6Mn7JsbMfHRei6L6hUW7hMblLQEENz48Wrg6okMKqZ7wpqOs13MJPjFPKoB7iY5w67nK6",
  },
  {
    name: "Chloe Mitchell",
    role: "Marketing Director at Creative Marketing Agency",
    description: "Expert in digital marketing and brand management",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBa_j8h7hL-E8IQdyGJBZFAYgBi_2Vj2sb5ahOy_6IQofS-ztF9KkjxnyIUmDkXAKT8I0QIbf9GF15Yn16v7TvBZJaeYxd0U5ErBeRhkEsYSGmcrE-3ftdCg1Ufa5pVPWS5U5xZzgUWQADBbipvbV1sm0ACQzQs57ktbG2wR6pFw0Gn2_5uK08VwiBOBXJ7FImn3QpzvFx5YscfocrX8xN9wW1GGeVjmf-RVyZDxJhzyGDW6KQGaG1ebK2fggPNNEMKq0bvBUGJFfrH",
  },
  {
    name: "Noah Parker",
    role: "Financial Analyst at Investment Group LLC",
    description: "Focuses on investment analysis and portfolio management",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhAqqs-MaNLsT-NQ-4jq1rWVPZhaoAEbK5rbvymX-2JFdbGvzUruVAbjsDsGlcEXfTFIEATI64gtLzXCaBbOmnMomElWEhN1I0tyJLIEsm2b9PAkq9OJQ47Mn4VnkIoDpOvf5GscQGbVgr9Zkebqh3amts4_eo_98mnm7wNYnhQu2bqa46n2X_ukQ_lyuRlro-hRkmsezMsW_8qmgzhgiDJOYdAalVm49OtKxkPHMJqc8jpWTA0LsNAY0kQwDJ0dWbUnYf1fKAgjMa",
  },
];

const Alumni_Directory = () => {
  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Alumni Directory</h2>
          <p className="text-muted">
            Connect with fellow alumni and expand your network.
          </p>
        </div>
        <div className="d-flex gap-2 mt-3 mt-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, skills, or company"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {["Branch", "Year", "Skills", "Company"].map((filter) => (
          <button key={filter} className="btn btn-outline-secondary">
            {filter} <i className="bi bi-caret-down-fill"></i>
          </button>
        ))}
      </div>

      {/* Alumni Cards */}
      <div className="row g-4">
        {alumniData.map((alumni, index) => (
          <div className="col-12" key={index}>
            <div className="card flex-md-row">
              <div className="flex-grow-1 p-3 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{alumni.name}</h5>
                  <p className="card-text text-muted">
                    {alumni.role} | {alumni.description}
                  </p>
                </div>
                <button className="btn btn-secondary mt-2 align-self-start">
                  View Profile
                </button>
              </div>
              <div
                className="card-img-right flex-fill"
                style={{
                  backgroundImage: `url(${alumni.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              &laquo;
            </a>
          </li>
          {[1, 2, 3, "...", 10].map((page, i) => (
            <li
              key={i}
              className={`page-item ${page === 1 ? "active" : ""}`}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Alumni_Directory;
