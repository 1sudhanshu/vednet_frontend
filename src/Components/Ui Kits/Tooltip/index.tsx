import React from "react";
import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import Directions from "./Directions";
import HtmlElementAndOffsets from "./HtmlElementAndOffsets";

const TooltipContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Basic />
        <Directions />
        <HtmlElementAndOffsets />
      </Row>
    </Container>
  );
};

export default TooltipContainer;
