import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UPDATE_PRODUCT } from "../mutations/productMutations";
import { GET_PRODUCTS } from "../queries/productQueries";

const UpdateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");

  const [updateProduct, { data, loading, error }] = useMutation(
    UPDATE_PRODUCT,
    {
      refetchQueries: [{ query: GET_PRODUCTS }],
    }
  );

  const updateProductHandler = async () => {
    console.log('poziva se')
    await updateProduct({
        variables: {
            input: {
                id: id,
                name: name,
                description: description,
                price: parseInt(price),
            },
        },
    });
    console.log('poziva se 2')

    setId(0)
    setDescription('')
    setPrice(0)
    setName('')
  };

  return (
    <Container fluid className="p-0 m-0">
      <h2 className="py-5 fw-light text-center">Update a existing product:</h2>
      <Row className="w-100">
        <Col md="4" className=""></Col>
        <Col
          md="4"
          className="p-5 bg-light d-flex justify-content-center align-items-center"
        >
          <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h5 className="w-100 text-start fw-light p-0 m-0">Product ID</h5>
            <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              className="w-100 form-control mb-3"
              type="number"
            />
            <h5 className="w-100 text-start fw-light p-0 m-0">Product name</h5>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-100 form-control mb-3"
              type="text"
            />
            <h5 className="w-100 text-start fw-light p-0 m-0">Product price</h5>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-100 form-control mb-3"
              type="number"
            />
            <h5 className="w-100 text-start fw-light p-0 m-0">
              Product description
            </h5>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-100 form-control mb-3"
              type="text"
            />
            <button
              onClick={updateProductHandler}
              className="btn w-100 btn-warning text-light py-2 mt-2"
            >
              UPDATE
            </button>
          </div>
        </Col>
        <Col md="4" className=""></Col>
      </Row>
    </Container>
  );
};

export default UpdateProductScreen;
