
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const Donations = () => {
  const [donationAmount, setDonationAmount] = useState("");

 
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonation = async () => {
    if (!donationAmount || isNaN(donationAmount)) {
      alert("Please enter a valid donation amount");
      return;
    }

   
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    console.log("Razorpay SDK loaded:", res);

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

   
    const order = await axios.post("http://127.0.0.1:7023/user/create", {
      amount: donationAmount , 
    });

    const { id, amount, currency } = order.data;

    const options = {
      key: import.meta.env.VITE_DONATION_KEY, 
      amount: amount.toString(),
      currency: currency,
      name: "Alumni Fund",
      description: "Donation",
      order_id: id,
      handler: async function (response) {
        const verify = await axios.post("http://127.0.0.1:7023/user/verify", response);
        alert(verify.data.message);
      },
      theme: {
        color: "#3399cc",
      },
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
      },
    };
    console.log("Razorpay Key from ENV:", import.meta.env.VITE_DONATION_KEY);

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    setDonationAmount(" ");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "512px" }}>
      {/* Page Title */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark">Make a Gift</h1>
        <p className="text-secondary mb-3">
          Your gift to the Alumni Fund supports current students and strengthens
          our community. Every contribution, no matter the size, makes a
          difference.
        </p>
      </div>

      {/* Donation Amount Input */}
      <div className="mb-3">
        <label className="form-label fw-medium text-dark">Donation Amount</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount (INR)"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
        />
      </div>

      {/* Donate Button */}
      <div className="d-flex mb-2">
        <button onClick={handleDonation} className="btn btn-primary flex-grow-1 fw-bold">
          Donate Now
        </button>
      </div>

      {/* Transaction Info */}
      <p className="text-secondary text-center" style={{ fontSize: "0.9rem" }}>
        Your transaction will be processed securely. You will receive a receipt
        with a transaction hash upon successful submission.
      </p>
    </div>
  );
};

export default Donations;
