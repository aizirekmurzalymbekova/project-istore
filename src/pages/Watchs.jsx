import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../context/ClientContext";

const Watchs = () => {
  const data = useContext(clientContext);
  const { watch, getWatchs } = data;

  useEffect(() => {
    getWatchs();
  }, []);

  return (
    <Container>
      <div className="products-list">
        {watch.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <MyPagination />
    </Container>
  );
};

export default Watchs;
