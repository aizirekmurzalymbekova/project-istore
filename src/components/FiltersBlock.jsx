import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clientContext } from "../context/ClientContext";
import ProductCard from "./ProductCard";

const FiltersBlock = ({ getProduct }) => {
  // const data = useContext(clientContext);
  // const { products } = data;

  return (
    <div className="filters-block">
      <div className="filters-block-category">
        <Link to="/phones">
          <div className="category">
            <img src="https://istore.kg/static/img/iphone.svg" alt="iPhones" />
            <span>iPhone</span>
          </div>
        </Link>
        <Link to="/macbooks">
          <div className="category">
            <img src="https://istore.kg/static/img/macbook.svg" alt="Mac" />
            <span>Mac</span>
          </div>
        </Link>
        <Link to="/ipads">
          <div className="category">
            <img src="https://istore.kg/static/img/ipad.svg" alt="iPad" />
            <span>iPad</span>
          </div>
        </Link>

        <Link to="/imacs">
          <div className="category">
            <img src="https://istore.kg/static/img/iMac.svg" alt="iMac" />
            <span>iMac</span>
          </div>
        </Link>
        <Link to="/watchs">
          <div className="category">
            <img
              src="https://istore.kg/static/img/watch.svg"
              alt="Apple Watch"
            />
            <span>Apple Watch</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FiltersBlock;
