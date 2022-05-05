import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Carousel } from "react-bootstrap";
import MyPagination from "../components/MyPagination";
import "./Main.css";
import AOS from "aos";

import ProductCard from "../components/ProductCard.jsx";
import { clientContext } from "../context/ClientContext";

const Main = () => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/cashabck-promotion.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/iphone-13-green-pc.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/buy-iphone-se-2022-pc.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/buy-ipad-air-4-2022-pc.webp"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/mac-studio-pc.webp"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/studio-display-pc.webp"
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/buy-macbook-pro-14-16-pc.webp"
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.istore.kg/media/mainpageslider/buy-watch-series-7-pc.webp"
            alt="Eighth slide"
          />
        </Carousel.Item>
      </Carousel>

      <span className="p1">Выберите свой iPhone</span>
      <span className="p2">Сравните все модели iPhone</span>

      <Container>
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <MyPagination />
      </Container>
      <div className="animation">
        <span className="p1">HERO10</span>
        <span className="p2">Быстрее. Плавнее. Легче.</span>

        <div data-aos="fade-down-right">
          <img
            width={600}
            src="https://www.ixbt.com/img/n1/news/2021/7/0/GoPro-Hero-10-Black-camera-13.png"
            alt="1"
          />
        </div>
        <span className="p1">Гаджеты</span>
        <span className="p2">Всегда рядом</span>
        <div data-aos="fade-down-left">
          <img
            width={800}
            src="https://www.kivano.kg/images/product/61869/154288163215035_full.jpg"
            alt="2"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
