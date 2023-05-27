import React from "react";
import { Row, Col, Label, Input } from "reactstrap";


interface propsTypes{
  VerticalColor:string
  HorizontalColor:string
  valueHandler: (value: string, keys: string) => void;
}

const RowThree = (props:propsTypes) => {
  return (
    <Row>
      <Col lg={6}>
        <Label>Vertical line color</Label>
        <Input
          name="VerticalColor"
          type="color"
          onChange={(e) => props.valueHandler(e.target.value, e.target.name)}
          value="#655af3"
        />
      </Col>
      <Col lg={6}>
        <Label>Horizontal line color</Label>
        <Input
          type="color"
          name="HorizontalColor"
          value="#655af3"
          onChange={(e) => props.valueHandler(e.target.value, e.target.name)}
        />
      </Col>
    </Row>
  );
};

export default RowThree;
