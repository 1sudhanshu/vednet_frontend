import React from "react";
import { Fragment } from "react";
import { Col, Row } from "reactstrap";

const VerticalAlignmentBody = () => {
  return (
    <Fragment>
      <Row>
        <Col className=" align-self-start">
          <span>One of three columns</span>
        </Col>
        <Col className=" align-self-center">
          <span>One of three columns</span>
        </Col>
        <Col className=" align-self-end">
          <span>One of three columns</span>
        </Col>
      </Row>
      <Row className=" align-items-start">
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
      </Row>
      <Row className=" align-items-center">
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
      </Row>
      <Row className=" align-items-end">
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
        <Col>
          <span>One of three columns</span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default VerticalAlignmentBody;
