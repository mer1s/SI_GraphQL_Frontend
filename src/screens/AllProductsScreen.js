import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/productQueries";
import { useSearchParams } from "react-router-dom";

const AllProductsScreen = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [params] = useSearchParams();

  const updatedId = params.get("updated") ? params.get("updated") : null;
  const createdId = params.get("created") ? params.get("created") : null;

  if (loading)
    return (
      <div className="h-100-vh d-flex justify-content-center align-items-center">
        <h3 className="fw-light text-center">Loading...</h3>
      </div>
    );
  if (error)
    return (
      <div className="h-100-vh d-flex justify-content-center align-items-center">
        <h3 className="fw-light text-center text-danger">
          Something went wrong.
        </h3>
      </div>
    );

  return (
    <div>
      {!loading && !error && data.products.length > 0 ? (
        <Container className="px-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-5 fw-light">All available products:</h2>

          <Row className="w-100 bg-primary text-light py-2 mb-2 rounded">
            <Col md="2">
              <h5 className="m-0 p-0 d-flex align-items-center fw-light w-100 text-start">
                Product ID
              </h5>
            </Col>
            <Col md="2">
              <h5 className="m-0 p-0 d-flex align-items-center fw-light w-100 text-start">
                Name
              </h5>
            </Col>
            <Col md="2">
              <h5 className="m-0 p-0 d-flex align-items-center fw-light w-100 text-start">
                Price
              </h5>
            </Col>
            <Col md="6">
              <h5 className="m-0 p-0 d-flex align-items-center fw-light w-100 text-start">
                Description
              </h5>
            </Col>
          </Row>
          {data.products.map((n) => (
            <Row
              key={n.id}
              className={`w-100 ${
                updatedId != null && parseInt(updatedId) === n.id
                  ? "border border-primary"
                  : ""
              } ${
                createdId != null && parseInt(createdId) === n.id
                  ? "border border-success"
                  : ""
              } bg-light py-2 mb-2 rounded`}
            >
              <Col md="2">
                <h6 className="m-0 d-flex h-100 align-items-center p-0 w-100 text-start">
                  {n.id}
                </h6>
              </Col>
              <Col md="2">
                <h5 className="m-0 d-flex h-100 align-items-center p-0 fw-light w-100 text-start">
                  {n.name}
                </h5>
              </Col>
              <Col md="2">
                <h5 className="m-0 d-flex h-100 align-items-center p-0 fw-light w-100 text-start">
                  {n.price}
                </h5>
              </Col>
              <Col md="6">
                <h6 className="m-0 p-0 h-100 d-flex align-items-center fw-light w-100 text-start">
                  {n.description}
                </h6>
              </Col>
            </Row>
          ))}
          <div className="pb-5 mb-5"></div>
        </Container>
      ) : (
        <Container className="px-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-5 fw-light text-danger">
            No products available currently...
          </h2>
        </Container>
      )}
    </div>
  );
};

export default AllProductsScreen;
