import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
interface propType {
  label:string;
  type:"text" |"email" |"number"|"select";
  placeholder:string;
  onChange?: (event:React.ChangeEvent<HTMLInputElement> ) =>void;
  name?:string
  value?:string
}
const MegaFormCommon = ({ label, type, placeholder,onChange,name,value }: propType) => {
  return (
    <FormGroup>
      <Label className="col-form-label">{label}</Label>
      <Input type={type} placeholder={placeholder} onChange={onChange} name={name} value ={value}/>
    </FormGroup>
  );
};

export default MegaFormCommon;