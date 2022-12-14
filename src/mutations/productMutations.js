import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation ($id: Int!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation addProduct($input: ProductInput!) {
    saveProduct(newProduct: $input) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation ($input: ProductInput!) {
    updateProduct(updateProduct: $input) {
      id
      name
      description
      price
    }
  }
`;
