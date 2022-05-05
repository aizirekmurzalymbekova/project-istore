import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Imacs = () => {
  const data = useContext(clientContext);
  const { imacs, getImacs } = data;

  useEffect(() => {
    getImacs();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {imacs.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default Imacs;
