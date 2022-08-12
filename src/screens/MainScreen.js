import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <Container className="w-100 h-100-vh d-flex flex-column align-items-center">
      <h2 className="text-center fw-light py-5">Select an operation</h2>
      <Row className="w-100">
        <Col md="2"></Col>
        <Col md="4" className="p-1 h-35-vh">
          <Link to={"/products"} className="text-decoration-none">
            <h3 className="h-100 w-100 bg-primary justify-content-center d-flex align-items-center text-light fw-light">
              View all products
            </h3>
          </Link>
        </Col>
        <Col md="4" className="p-1 h-35-vh">
          <Link to={"/products"} className="text-decoration-none">
            <h3 className="h-100 w-100 bg-success justify-content-center d-flex align-items-center text-light fw-light">
              Create new product
            </h3>
          </Link>
        </Col>
        <Col md="2"></Col>
        <Col md="2"></Col>
        <Col md="4" className="p-1 h-35-vh">
          <Link to={"/products"} className="text-decoration-none">
            <h3 className="h-100 w-100 bg-warning justify-content-center d-flex align-items-center text-light fw-light">
              Edit product
            </h3>
          </Link>
        </Col>
        <Col md="4" className="p-1 h-35-vh">
          <Link to={"/products"} className="text-decoration-none">
            <h3 className="h-100 w-100 bg-danger justify-content-center d-flex align-items-center text-light fw-light">
              Delete product
            </h3>
          </Link>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

export default MainScreen;
