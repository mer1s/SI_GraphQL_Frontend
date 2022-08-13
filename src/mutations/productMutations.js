import { gql } from "@apollo/client";

export const DELETE_PRODUCT = gql`
  mutation ($id: Int!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation ($saveProduct: ProductInput!) {
    saveProduct(newProduct: $saveProduct) {
      id
    }
  }
`;
