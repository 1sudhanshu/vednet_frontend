import React from "react";
import { Container, Row } from "reactstrap";
import AllClose from "./AllClose";
import PrimaryColorAccordian from "./PrimaryColorAccordian";
import SecondaryColorAccordian from "./SecondaryColorAccordian";
import BasicAccordions from "./BasicAccordions";
import WithIcon from "./WithIcon/WithIcon";
import WithOperand from "./WithOperand";

const AccordionContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BasicAccordions />
        <AllClose />
        <PrimaryColorAccordian />
        <SecondaryColorAccordian />
        <WithIcon />
        <WithOperand />
      </Row>
    </Container>
  );
};

export default AccordionContainer;
