import React from "react";
import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import BasicColor from "./BasicColor";
import Rounded from "./Rounded";
import SplitButton from "./SplitButton";
import WithDisable from "./WithDisable";
import WithDivider from "./WithDivider";
import WithDropUp from "./WithDropUp";
import WithHeader from "./WithHeader";

const DropdownContainer = () => {
  return (
    <Container fluid={true} className="dropdown-page">
      <Row>
        <Basic />
        <BasicColor />
        <SplitButton />
        <Rounded />
        <WithDivider />
        <WithHeader />
        <WithDropUp />
        <WithDisable />
      </Row>
    </Container>
  );
};

export default DropdownContainer;
