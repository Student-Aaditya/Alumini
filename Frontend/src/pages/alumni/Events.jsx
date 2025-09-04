// src/pages/alumni/Events.jsx
import React from "react";

const events = [
  {
    title: "Alumni Homecoming Gala",
    description:
      "Join us for an evening of networking and reminiscing at the annual Alumni Homecoming Gala. Reconnect with classmates, faculty, and friends while enjoying live music, delicious food, and a special keynote address from a distinguished alumnus.",
    date: "October 26, 2024 · 6:00 PM - 9:00 PM",
  },
  {
    title: "Entrepreneurship Panel Discussion",
    description:
      "Attend a virtual panel discussion featuring successful alumni entrepreneurs who will share their insights, experiences, and advice on launching and growing a business. This event is perfect for aspiring entrepreneurs and those interested in learning about the startup ecosystem.",
    date: "November 15, 2024 · 7:00 PM - 8:30 PM",
  },
  {
    title: "Holiday Alumni Mixer",
    description:
      "Celebrate the holiday season with fellow alumni at our annual Holiday Mixer. Enjoy festive drinks, appetizers, and holiday cheer in a relaxed and social atmosphere. This is a great opportunity to network and connect with alumni from various fields.",
    date: "December 5, 2024 · 5:30 PM - 7:00 PM",
  },
  {
    title: "Career Development Workshop",
    description:
      "Participate in a career development workshop designed to help alumni enhance their professional skills and advance their careers. Topics will include resume writing, interview techniques, and networking strategies. This workshop is ideal for alumni seeking new job opportunities or career growth.",
    date: "January 18, 2025 · 10:00 AM - 12:00 PM",
  },
];

const Events = () => {
  return (
    <div className="container py-5" style={{ maxWidth: "960px" }}>
      <h1 className="fw-bold mb-4 text-dark">Upcoming Events</h1>
      {events.map((event, index) => (
        <div
          key={index}
          className="d-flex gap-3 bg-light p-3 mb-3 justify-content-between align-items-center rounded"
        >
          <div className="flex-1">
            <p className="mb-1 fw-medium text-dark">{event.title}</p>
            <p
              className="mb-1 text-secondary"
              style={{ fontSize: "0.9rem" }}
            >
              {event.description}
            </p>
            <p
              className="mb-0 text-secondary"
              style={{ fontSize: "0.85rem" }}
            >
              {event.date}
            </p>
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

export default Events;
