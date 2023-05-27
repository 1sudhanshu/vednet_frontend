import { Fragment } from "react";
import { Col, Row } from "reactstrap";

const HorizontalAlignmentBody = () => {
  return (
    <Fragment>
      <Row className=" justify-content-start">
        <Col>
          <span>One of two columns</span>
        </Col>
        <Col>
          <span>One of two columns</span>
        </Col>
      </Row>
      <Row className="row justify-content-center">
        <Col xs="4" className="col-4">
          <span>One of two columns</span>
        </Col>
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
      </Row>
      <Row className="row justify-content-end">
        <Col xs="4" className="col-4">
          <span>One of two columns</span>
        </Col>
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
      </Row>
      <Row className=" justify-content-around">
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
      </Row>
      <Row className=" justify-content-between">
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
        <Col xs="4">
          <span>One of two columns</span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HorizontalAlignmentBody;
