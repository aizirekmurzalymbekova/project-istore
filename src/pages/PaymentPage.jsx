import { Container, TextField } from "@mui/material";
import React from "react";

const PaymentPage = () => {
  return (
    <Container>
      <div className="payment">
        <div className="payment-card">
          <img
            src="https://www.picng.com/upload/credit_card/png_credit_card_30291.png"
            alt=""
          />
        </div>
        <div className="payment-card-inputs">
          <TextField
            style={{ margin: 10 }}
            id="outlined-required"
            label="card number"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-required"
            label="name"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-required"
            label="VALID THRU"
          />
        </div>
      </div>
    </Container>
  );
};

export default PaymentPage;
