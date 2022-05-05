import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Phones = () => {
  const data = useContext(clientContext);
  const { phones, getPhones } = data;

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {phones.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <MyPagination />
    </Container>
  );
};

export default Phones;
