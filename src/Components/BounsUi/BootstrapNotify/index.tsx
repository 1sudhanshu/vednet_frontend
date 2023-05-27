import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import CustomAutocloseClass from "./CustomAutocloseClass/CustomAutocloseClass";
import CustomDirectionsClass from "./CustomDirectionsClass";

const BootstrapNotifyContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Basic />
          <CustomDirectionsClass />
          <CustomAutocloseClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BootstrapNotifyContainer;
