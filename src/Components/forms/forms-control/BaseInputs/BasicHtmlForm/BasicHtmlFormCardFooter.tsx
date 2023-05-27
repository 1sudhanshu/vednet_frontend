import React from "react";
import { CardFooter } from "reactstrap";
import { Col } from "react-bootstrap";
import { Btn } from "../../../../../AbstractElements";
import { Cancel, Submit } from "../../../../../Constant";

const BasicHtmlFormCardFooter = () => {
  return (
    <CardFooter>
      <Col sm="9" className=" offset-sm-3">
        <Btn color="primary" type="submit" className="me-2">
          {Submit}
        </Btn>
        <Btn color="light" type="reset">
          {Cancel}
        </Btn>
      </Col>
    </CardFooter>
  );
};

export default BasicHtmlFormCardFooter;
