import { Container } from "@mui/material";
import React from "react";

const Contacts = () => {
  return (
    <Container className="contacts">
      <h2>Контакты</h2>
      <h3>Звоните или пишите нам</h3>
      <h4>Наши номера</h4>
      <h5>
        +996 (555) 802 000 <br />
        +996 (505) 802 000
      </h5>
      <h4>Наша почта</h4>
      <h5>istorekg@gmail.com</h5>
      <h4>График работы</h4>
      <h5>Пн - Вс 10:00 - 20:00</h5>
      <h3>Мы рады ответить на все ваши интересующие вопросы</h3>
    </Container>
  );
};

export default Contacts;
