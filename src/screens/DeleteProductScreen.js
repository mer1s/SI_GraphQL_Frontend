import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { DELETE_PRODUCT } from "../mutations/productMutations";
import { GET_PRODUCTS } from "../queries/productQueries";

const DeleteProductScreen = () => {
  const [id, setId] = useState(0);

  const [deleteProduct, {data, loading, error}] = useMutation(DELETE_PRODUCT, {
    variables: { id: parseInt(id) },
    refetchQueries: [{query: GET_PRODUCTS}]
  });

  if(loading) return <h1>Loading</h1>

  return (
    <Container className="px-5 d-flex flex-column justify-content-center align-items-center">
      <h2 className={`${data ? data.deleteProduct === "Invalid operation." ? 'text-danger' : 'text-success' : 'text-dark'} py-5 fw-light`}>{data ? data.deleteProduct : 'Delete product:'}</h2>
      <div className="w-100 bg-light d-flex flex-column justify-content-center align-items-center text-dark fw-light py-3 pt-4 mb-2 rounded">
        <div className="d-flex align-items-center pt-2 align-items-center">
          <h5 className="h-0 m-0 fw-light">
            Enter the ID of the product you want to delete:
          </h5>
            <input
              type={"number"}
              onChange={(e) => setId(e.target.value)}
              value={id === 0 ? ' ' : id}
              className="number-control"
            />
        </div>
        <div className="d-flex py-4 justify-content-center w-100">
          <button
            onClick={deleteProduct}
            className="form-control btn btn-danger w-50"
            disabled={parseInt(id) === 0 || id === ""}
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DeleteProductScreen;
