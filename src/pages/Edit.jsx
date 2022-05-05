import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../context/AdminContext";

const Edit = () => {
  const data = React.useContext(adminContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Редактировать товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            value={editedProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, color: e.target.value })
              }
              value={editedProduct.color}
              label="Выберите цвет"
              labelId="color-select-label"
            >
              <MenuItem value="black">Черный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="red">Красный</MenuItem>
              <MenuItem value="pink">Розовый</MenuItem>
              <MenuItem value="yellow">Желтый</MenuItem>
              <MenuItem value="green">Зеленый</MenuItem>
              <MenuItem value="blue">Синий</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="memory-select-label">Выберите память</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, memory: e.target.value })
              }
              value={editedProduct.memory}
              label="Выберите память"
              labelId="memory-select-label"
            >
              <MenuItem value="128">128 GB</MenuItem>
              <MenuItem value="256">256 GB</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            Сохранить изменения
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Edit;
