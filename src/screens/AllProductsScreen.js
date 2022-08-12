import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  query {
    products {
      id
      name
      description
      price
    }
  }
`;

const AllProductsScreen = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <div>
      {!loading && !error && (
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
            <Row key={n.id} className="w-100 bg-light py-2 mb-2 rounded">
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
        </Container>
      )}
    </div>
  );
};

export default AllProductsScreen;
