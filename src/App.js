import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import DeleteProductScreen from "./screens/DeleteProductScreen";
import CreateProductScreen from "./screens/CreateProductScreen";

const client = new ApolloClient({
  uri: "http://localhost:5250/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/products" element={<AllProductsScreen />} />
            <Route path="/delete-product" element={<DeleteProductScreen />} />
            <Route path="/create-product" element={<CreateProductScreen />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
