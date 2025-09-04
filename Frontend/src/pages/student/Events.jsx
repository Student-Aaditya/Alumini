// src/pages/student/Events.jsx
import React from "react";

const eventsData = [
  {
    title: "Networking Mixer",
    date: "October 26, 2024",
    time: "6:00 PM - 8:00 PM",
  },
  {
    title: "Career Fair",
    date: "November 15, 2024",
    time: "7:00 PM - 9:00 PM",
  },
  {
    title: "Holiday Social",
    date: "December 5, 2024",
    time: "5:30 PM - 7:30 PM",
  },
  {
    title: "Alumni Panel Discussion",
    date: "January 18, 2025",
    time: "6:30 PM - 8:30 PM",
  },
  {
    title: "Mentorship Workshop",
    date: "February 22, 2025",
    time: "7:00 PM - 9:00 PM",
  },
];

const Events = () => {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-3">Upcoming Events</h2>

      <div className="list-group">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center mb-2"
            style={{ minHeight: "72px" }}
          >
            <div>
              <p className="mb-1 fw-medium">{event.title}</p>
              <small className="text-muted">
                {event.date} | {event.time}
              </small>
            </div>
            <button className="btn btn-outline-secondary">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
