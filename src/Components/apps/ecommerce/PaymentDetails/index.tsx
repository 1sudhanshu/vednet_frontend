import React from "react";
import { Container, Row } from "reactstrap";
import CreditCardCol from "./CreditCardCol";
import DebitCardCol from "./DebitCardCol";
import CodCol from "./CodCol";
import EMICol from "./EMICol";
import NetBankingCol from "./NetBankingCol";

const PaymentDetailsContainer = () => {
  return (
    <Container fluid className="credit-card">
      <Row>
        <CreditCardCol />
        <DebitCardCol />
        <CodCol/>
        <EMICol/>
        <NetBankingCol/>
      </Row>
    </Container>
  );
};

export default PaymentDetailsContainer;
