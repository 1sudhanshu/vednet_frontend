import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";

const OrderBody = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <span>First, but unordered</span>
        </Col>
        <Col className=" order-12">
          <span>Second, but last</span>
        </Col>
        <Col className=" order-1">
          <span>Third, but first</span>
        </Col>
      </Row>
      <Row>
        <Col className=" order-last">
          <span>First, but last</span>
        </Col>
        <Col>
          <span>Second, but unordered</span>
        </Col>
        <Col className=" order-first">
          <span>Third, but first</span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default OrderBody;
