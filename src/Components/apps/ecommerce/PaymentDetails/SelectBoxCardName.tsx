import { FormGroup, Input } from "reactstrap";
import { SelectCard } from "../../../../Constant";

const SelectBoxCardName = () => {
  return (
    <FormGroup className="col-12">
      <Input type="select" size={1}>
        <option>{SelectCard}</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    </FormGroup>
  );
};

export default SelectBoxCardName;
