import  { Fragment } from "react";
import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import Advanced from "./Advance";
import Alert from "./Alert";
const SweetAlertContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Basic />
          <Advanced />
          <Alert />
        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlertContainer;
