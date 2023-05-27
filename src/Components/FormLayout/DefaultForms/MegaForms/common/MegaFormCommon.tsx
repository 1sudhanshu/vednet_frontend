import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
interface propType {
  label:string;
  type:"text" |"email" |"number";
  placeholder:string;
}
const MegaFormCommon = ({ label, type, placeholder }: propType) => {
  return (
    <FormGroup>
      <Label className="col-form-label">{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </FormGroup>
  );
};

export default MegaFormCommon;
