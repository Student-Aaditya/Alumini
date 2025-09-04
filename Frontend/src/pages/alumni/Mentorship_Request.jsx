// src/pages/alumni/Mentorship_Request.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const mentorshipRequests = [
  {
    name: "Ethan Carter",
    course: "Computer Science",
    year: "Class of 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8CrXscpYY1lm5ZHLP72HpCQXNE0t9C16bd1osR_1dQdvcrPBpBhBQX2cP763l29Qe6qIlTKXIVP7rxFr_U8RhjMiG-FNQRKOY7GsIvqHVi_u5Yk1zkRWcngoTpOvE1Z5bJS07XANPSW4dXl070XlTzH_CXsLh2hZlEl0gQLxmujF0_GQTgHFWAla2og382HXWo1uW2K2fMZ3iKSlPkPmR0MWjNOYNTq6KETbOVqDyaLqTFmAFcrPr1MB6kTiXHQH_qZoOY_FzY-c",
  },
  {
    name: "Olivia Bennett",
    course: "Business Administration",
    year: "Class of 2025",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfZh5y0rI4iDOLrd1HGIwJ2Hswvsxs1uyCP89mMZQGtxCctJDcnBVHyp-40mJI8z_029ohfQEOBTku4ujOuNTsesLoSyrwxJcm7PBBk87HTLThaW2grh4hGVDrE0nuoTMuSZALT-P88Dkq0Zx2sTuu8LExdBi-v-OfyR1Mdkc31-_c1jlfWpDAr2VihZAXQrrN1i0ehjOGaaf2ROKqV034kfiPmvmxJK7RF48bb4pBJzJWm2RMc5wCTLGrTK_ukiksTz-9MqgKfDA",
  },
  // Add more requests here...
];

const Mentorship_Request = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "960px" }}>
      <h1 className="fw-bold mb-4 text-dark">Mentorship Requests</h1>
      {mentorshipRequests.map((request, index) => (
        <div
          key={index}
          className="d-flex align-items-center justify-content-between bg-light p-3 mb-3 rounded"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={request.image}
              alt={request.name}
              className="rounded-circle"
              style={{ height: "56px", width: "56px", objectFit: "cover" }}
            />
            <div>
              <p className="mb-1 fw-medium text-dark">{request.name}</p>
              <p
                className="mb-0 text-secondary"
                style={{ fontSize: "0.9rem" }}
              >
                {request.course}, {request.year}
              </p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-success btn-sm">Accept</button>
            <button className="btn btn-danger btn-sm">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mentorship_Request;
