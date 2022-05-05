import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Macbooks = () => {
  const data = useContext(clientContext);
  const { macbooks, getMacbooks } = data;

  useEffect(() => {
    getMacbooks();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {macbooks.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default Macbooks;
