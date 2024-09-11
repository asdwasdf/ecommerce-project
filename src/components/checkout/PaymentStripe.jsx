import { useEffect } from "react";

import { CardElement, useElements } from "@stripe/react-stripe-js";

import { Card } from "@mui/material";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: 500,
      fontSize: "14px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#000" }
    },
    invalid: {
      iconColor: "#ff0000",
      color: "#ff0000"
    }
  }
};

const PaymentSripe = ({ onCardElementReady, errors }) => {
  const elements = useElements();

  useEffect(() => {
    const cardElement = elements.getElement(CardElement);
    onCardElementReady(cardElement);
  }, [elements, onCardElementReady]);
  return (
    <>
      <Card sx={{ py: 2, px: 2 }}>
        <CardElement options={CARD_OPTIONS} />
      </Card>
      {errors?.errorStripe && <div style={{ color: "red" }}>{errors?.errorStripe}</div>}
    </>
  );
};

export default PaymentSripe;
