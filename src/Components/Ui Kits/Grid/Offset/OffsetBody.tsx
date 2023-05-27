import { Fragment } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";

const OffsetBody = () => {
  return (
    <Fragment>
      {" "}
      <Row>
        <Col md="4">
          <span>.col-md-4</span>
        </Col>
        <Col md="4" className=" offset-md-4">
          <span>.col-md-4 .offset-md-4</span>
        </Col>
      </Row>
      <Row>
        <Col md="3" className=" offset-md-3">
          <span>.col-md-3 .offset-md-3</span>
        </Col>
        <Col md="3" className=" offset-md-3">
          <span>.col-md-3 .offset-md-3</span>
        </Col>
      </Row>
      <Row>
        <Col md="6" className=" offset-md-3">
          <span>.col-md-6 .offset-md-3</span>
        </Col>
      </Row>
      <Row>
        <Col sm="5" md="6">
          <span>.col-sm-5 .col-md-6</span>
        </Col>
        <Col sm="5" md="6" className=" offset-sm-2  offset-md-0">
          <span>.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</span>
        </Col>
      </Row>
      <Row>
        <Col sm="6" md="5" lg="6">
          <span>.col-sm-6 .col-md-5 .col-lg-6</span>
        </Col>
        <Col sm="6" md="5" lg="6" className="  offset-md-2  offset-lg-0">
          <span>.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default OffsetBody;
