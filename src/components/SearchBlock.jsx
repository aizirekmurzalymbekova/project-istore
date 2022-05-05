import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clientContext } from "../context/ClientContext";
import "./SearchBlock.css";

const SearchBlock = () => {
  const data = useContext(clientContext);
  const { getProducts } = data;
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [sizeValue, setSizeValue] = useState(filter.get("size") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setSizeValue(filter.get("size") || "");
    getProducts();
  };
  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setSizeValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="search-block">
      <div>
        <img
          className="search-block-img"
          width={100}
          src="https://istore.kg/static/_image/istore_logo.png"
          alt="logo-footer"
        />
      </div>
      <div>
        <span>Магазин техники Apple в Бишкеке</span>
      </div>
      <div className="search-block-leftside-item">
        <span className="bold">Режим работы</span>
        <span>Пн - Вс 10:00 - 20:00</span>
      </div>
      <div className="search-block-leftside-item">
        <span className="bold">+996 (555) 802 000</span>
        <span className="bold">+996 (505) 802 000</span>
      </div>
      <TextField
        variant="standard"
        className="live-search"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Живой поиск..."
      />
      <FormControl variant="standard">
        <InputLabel id="color-label"> Цвет</InputLabel>
        <Select
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Выберите цвет"
          labelId="color-label"
        >
          <MenuItem value="black">Черный</MenuItem>
          <MenuItem value="white">Белый</MenuItem>
          <MenuItem value="blue">Синий</MenuItem>
          <MenuItem value="red">Красный</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="color-label"> Пямять</InputLabel>
        <Select
          value={sizeValue}
          onChange={(e) => handleFilters("size", e.target.value)}
          label="Выберите размер"
          labelId="size-label"
        >
          <MenuItem value="64">64</MenuItem>
          <MenuItem value="128">128</MenuItem>
          <MenuItem value="256">256</MenuItem>
          <MenuItem value="512">512</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={resetFilter}>
        Сбросить
      </Button>
    </div>
  );
};

export default SearchBlock;
