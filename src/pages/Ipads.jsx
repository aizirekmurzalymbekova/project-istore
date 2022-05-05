import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Ipads = () => {
  const data = useContext(clientContext);
  const { ipads, getIpads } = data;

  useEffect(() => {
    getIpads();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {ipads.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default Ipads;
