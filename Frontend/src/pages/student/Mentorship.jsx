// src/pages/student/Mentorship.jsx
import React from "react";

const mentorshipRequests = {
  pending: [
    {
      name: "Sophia Chen",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuT8GVk42PB7Xn4Z4PI2aXFgINsOkM_EgYu-xMsaHIuQHcNB60U8WjvaZ9zUFjTTFP5Mm2Lq00hoTix6QLIp-Pju8qbUOShZE2JHsA2gcVu2C2Z10GGBSEXQaKms7myE6NbcPNbnBSanS_QsUBvFFfK6UYHmPlphn1jOH49OI0OBxa7HDazwwh2FLL1RJ1U1pWPjjq2WRVmOXBT_iBjJy94R8FsHo9Cv3OpVwxtnsWsNOs2HdRQIv0vlFEEMWMq55swDlPJNK-NBbE",
      date: "Oct 26, 2023",
      status: "Pending",
    },
    {
      name: "Ethan Lee",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4GHBdROwil5eF8OskUbv-w2yY6a8G6NXbjTQZTr9zh8ov7hxP_WihbzJK3FPS6BBIbhC9gJLAcymVnzHexD08ieh3xzMEaychyVBF5dZ_PReoKfbixPVTAQ5Yh_bSBpxHDKOQ2mhF1OUPRpwb1HjgbEmqtFA3KuUSobIwwI1fJjpjOlY8nqVL7a1NrCqfbIQtX__hGJmL4tWyyGO4sEQ1LOtjWdQKxiK7FpcIs3WPnDASHOJLsMlPeNXkqfZOwiPXiVRNXWDh8JSu",
      date: "Nov 15, 2023",
      status: "Pending",
    },
  ],
  accepted: [
    {
      name: "Olivia Wong",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvEPi1oF6BXYXHGWFFBrBbOdsEeBCTlpfH6bh2riwj-0eObIit_p09JutqNBz5VA4OTrmlfG3u8XhNchPFEvDEaJnxZHRYBGtO4HhkBlgq7_hoMfXd1wtJZ3C2N6gYojb0t282U_FavrF8bwn_Y-fd3FlF2W3ib0JMW0zPw2rlXGsGO_SNXn-5RLqdj7vu01dSovQuaxd726RBB_l-B1onpQDByVBgSExflyKue1M02Kw8EUBRSshMDCT68HTaTuE9MQCouBxpsKRN",
      date: "Sep 10, 2023",
      status: "Accepted",
    },
  ],
  rejected: [
    {
      name: "Nathan Tan",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBX408dsh9s4d4d0v79r5Fe_KoQ-xw8DmWjNuTgGuOKfbsT_3L0vQ4gzO-QRdVYsPdDiA8on0k3LymwIWjVFU5jQbj-Qwwoso4UQU_XHl0059TVHzvvY449KNGTJPBWp5DRS1GDyh8pqscffhCN1mSacknxTibgToLT0eRErXzaYCifOOlukYPHSG1WmLZfCqb2KUQP2m4FEYvgyMddPmAGfl4hzVyOor5TbtQc9pDZqV2I_AYk9M-wAJHLMn9G6ajjRW21sR-IW_HR",
      date: "Aug 5, 2023",
      status: "Rejected",
    },
  ],
};

const Mentorship = () => {
  const renderRequests = (requests) =>
    requests.map((req, index) => (
      <div
        key={index}
        className="d-flex align-items-center justify-content-between bg-white p-3 mb-2"
        style={{ minHeight: "72px" }}
      >
        <div className="d-flex align-items-center gap-3">
          <img
            src={req.avatar}
            alt={req.name}
            className="rounded-circle"
            style={{ width: "56px", height: "56px", objectFit: "cover" }}
          />
          <div>
            <p className="mb-1 fw-medium">
              {req.status === "Accepted"
                ? `Mentorship with ${req.name}`
                : `Request to ${req.name}`}
            </p>
            <small className="text-muted">
              {req.status === "Pending"
                ? `Request sent on ${req.date}`
                : `Request ${req.status.toLowerCase()} on ${req.date}`}
            </small>
          </div>
        </div>
        <div>
          <span
            className={`fw-normal ${
              req.status === "Accepted"
                ? "text-success"
                : req.status === "Rejected"
                ? "text-danger"
                : "text-secondary"
            }`}
          >
            {req.status}
          </span>
        </div>
      </div>
    ));

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="fw-bold">Mentorship Requests</h2>
        <p className="text-muted">
          Track the status of your mentorship requests to alumni.
        </p>
      </div>

      <h3 className="fw-bold mt-4">Pending Requests</h3>
      {renderRequests(mentorshipRequests.pending)}

      <h3 className="fw-bold mt-4">Accepted Requests</h3>
      {renderRequests(mentorshipRequests.accepted)}

      <h3 className="fw-bold mt-4">Rejected Requests</h3>
      {renderRequests(mentorshipRequests.rejected)}
    </div>
  );
};

export default Mentorship;
