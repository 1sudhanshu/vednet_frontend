import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

interface propType {
  type: "email" | "password" | "number" | "text" | "url";
  tittle: string;
  placeHolder: string;
}

const HorizonatalFormRowCommon = ({ type, tittle, placeHolder }: propType) => {
  return (
    <FormGroup className="row">
      <Label className="col-sm-3 col-form-label">{tittle}</Label>
      <Col sm="9">
        <Input type={type} placeholder={placeHolder} />
      </Col>
    </FormGroup>
  );
};

export default HorizonatalFormRowCommon;
