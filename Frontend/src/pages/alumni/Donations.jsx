// src/pages/alumni/Donations.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Donations = () => {
  const [donationAmount, setDonationAmount] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f4f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1rem",
      }}
    >
      <div
        className="p-5 rounded shadow-lg"
        style={{
          background: "#ffffff",
          maxWidth: "500px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Gradient Circle */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6c63ff, #00c6ff)",
            opacity: 0.2,
            zIndex: 0,
          }}
        ></div>

        {/* Header */}
        <div className="text-center mb-4" style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#1a202c",
              letterSpacing: "1px",
            }}
          >
            Make a Donation
          </h2>
          <p className="text-secondary" style={{ fontSize: "1rem", maxWidth: "90%", margin: "0 auto" }}>
            Support our Alumni Fund to empower students and strengthen our community. Every contribution counts.
          </p>
        </div>

        {/* Donation Form */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="mb-4">
            <label className="form-label fw-semibold text-dark">Donation Amount</label>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="$0.00"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              style={{
                borderRadius: "12px",
                padding: "0.75rem 1rem",
                border: "1px solid #cbd5e0",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Donate Button */}
          <div className="d-grid">
            <button
              className="btn fw-bold"
              style={{
                padding: "0.75rem",
                fontSize: "1rem",
                borderRadius: "25px",
                background: "linear-gradient(135deg, #6c63ff, #00c6ff)",
                color: "#fff",
                border: "none",
              }}
            >
              Donate Now
            </button>
          </div>

          {/* Transaction Info */}
          <p className="text-secondary text-center mt-3" style={{ fontSize: "0.85rem" }}>
            Your transaction is secure. A receipt with a transaction hash will be sent upon successful submission.
          </p>
        </div>

        {/* Decorative Bottom Circle */}
        <div
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "-50px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff7a7a, #ffb347)",
            opacity: 0.15,
            zIndex: 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Donations;
