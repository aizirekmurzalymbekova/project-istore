import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { clientContext } from "../context/ClientContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Apartment } from "@mui/icons-material";

const CheckOutPage = () => {
  const data = React.useContext(clientContext);
  const { addDelivery } = data;
  const navigate = useNavigate();
  const [newDelivery, setNewDelivery] = React.useState({
    lastname: "",
    name: "",
    city: "",
    street: "",
    apartment: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newDelivery) {
      if (!newDelivery[key]) {
        alert("Заполните поля");
        return;
      }
    }
    navigate("/creditcard");
    addDelivery(newDelivery);

    setNewDelivery({
      lastname: "",
      name: "",
      city: "",
      street: "",
      apartment: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="checkout"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Введите адрес доставки</h2>
      </div>
      <div className="checkout-iputs">
        <TextField
          style={{ margin: 10 }}
          value={newDelivery.lastname}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, lastname: e.target.value })
          }
          required
          id="outlined-required"
          label="Фамилия"
        />
        <TextField
          style={{ margin: 10 }}
          value={newDelivery.name}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, name: e.target.value })
          }
          required
          id="outlined-required"
          label="Имя"
        />
        <TextField
          style={{ margin: 10 }}
          value={newDelivery.city}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, city: e.target.value })
          }
          required
          id="outlined-required"
          label="Город"
        />
      </div>
      <div className="checkout-iputs">
        <TextField
          style={{ margin: 10 }}
          value={newDelivery.street}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, street: e.target.value })
          }
          required
          id="outlined-required"
          label="улица"
        />
        <TextField
          style={{ margin: 10 }}
          value={newDelivery.apartment}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, apartment: e.target.value })
          }
          required
          id="outlined-required"
          label="номер дома"
          type="number"
        />

        <TextField
          style={{ margin: 10 }}
          id="outlined-required"
          label="Комментарии к доставке"
        />
      </div>

      <Button type="submit" variant="outlined" margin="normal">
        Далее
      </Button>
    </form>
  );
};

export default CheckOutPage;
