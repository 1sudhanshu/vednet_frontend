import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
interface propType {
  label:string;
  type:"text" |"email" |"number"|"select";
  placeholder:string;
  onChange?: (event:React.ChangeEvent<HTMLInputElement> ) =>void;
}
const MegaFormCommon = ({ label, type, placeholder,onChange }: propType) => {
  return (
    <FormGroup>
      <Label className="col-form-label">{label}</Label>
      <Input type={type} placeholder={placeholder} onChange={onChange}/>
    </FormGroup>
  );
};

export default MegaFormCommon;