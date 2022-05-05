import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard.jsx";
import { clientContext } from "../context/ClientContext";

const ProductPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};
export default ProductPage;
