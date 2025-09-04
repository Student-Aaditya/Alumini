// /student/My_Profile.jsx
import React from "react";

const profileData = {
  personal: {
    name: "Olivia Bennett",
    email: "olivia.bennett@email.com",
    university: "Stanford University",
    major: "Computer Science",
  },
  academic: {
    graduationYear: "2025",
    gpa: "3.8",
    coursework: "Data Structures, Algorithms, Machine Learning",
  },
  interests: [
    "AI",
    "Finance",
    "Design",
    "Entrepreneurship",
    "Product Management",
    "Consulting",
  ],
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCYDUi_nv0lp6v0_HPgCgYMYp8By8Iof1VYrUfNMyb3bSRaU_3f6c35gH7Kf-EvN0zM8syZmGqh512kkiyKyuISzj7heJ0nIhOqIh5rJffllPmRaxbIgPGAKAoxQHFT0QJscWkkT3eoY1BxOr8o9XDCG5y9Qaa61tBgX2CUuKBsHaFPOUPcb3bXtGdqCK-TBVwG26UBJP_4ZACtIqV_xXhzqMLBtgWy5jPyx8r_vqRBO1J63_ZklOKjzZVKLi3Jg45pirfgF97hTQK8",
};

const My_Profile = () => {
  return (
    <div className="container py-4" style={{ maxWidth: "960px" }}>
      {/* Avatar & Name */}
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4 p-4">
        <div className="d-flex align-items-center gap-4">
          <img
            src={profileData.avatar}
            alt={profileData.personal.name}
            className="rounded-circle"
            style={{ width: "128px", height: "128px", objectFit: "cover" }}
          />
          <div>
            <h2 className="fw-bold">{profileData.personal.name}</h2>
            <p className="text-muted mb-0">
              Student at {profileData.personal.university}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <section className="mt-4">
        <h4 className="fw-bold mb-3">Personal Information</h4>
        <div className="row border-top">
          {Object.entries(profileData.personal).map(([key, value], index) => (
            <div
              key={index}
              className="col-md-6 d-flex justify-content-between border-top py-2"
            >
              <span className="text-muted text-capitalize">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Information */}
      <section className="mt-4">
        <h4 className="fw-bold mb-3">Academic Information</h4>
        <div className="row border-top">
          {Object.entries(profileData.academic).map(([key, value], index) => (
            <div
              key={index}
              className="col-md-6 d-flex justify-content-between border-top py-2"
            >
              <span className="text-muted text-capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mt-4">
        <h4 className="fw-bold mb-3">Interests</h4>
        <div className="d-flex flex-wrap gap-2">
          {profileData.interests.map((interest, index) => (
            <span
              key={index}
              className="badge bg-light text-dark border px-3 py-2"
            >
              {interest}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-primary">Save Interests</button>
        </div>
      </section>
    </div>
  );
};

export default My_Profile;
