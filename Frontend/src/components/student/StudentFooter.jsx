import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const StudentFooter = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Alumni Network. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/admin/dashboard" className="text-light me-3 text-decoration-none">
              Dashboard
            </a>
            <a href="/admin/alumni-management" className="text-light me-3 text-decoration-none">
              Alumni
            </a>
            <a href="/admin/settings" className="text-light text-decoration-none">
              Settings
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default StudentFooter;
