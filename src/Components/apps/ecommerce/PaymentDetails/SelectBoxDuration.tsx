import { FormGroup, Input } from "reactstrap";
import { SelectDuration } from "../../../../Constant";

const SelectBoxDuration = () => {
  return (
    <FormGroup className="col-12">
      <Input type="select" size={1}>
        <option>{SelectDuration}</option>
        <option>2015-2016</option>
        <option>2016-2017</option>
        <option>2017-2018</option>
        <option>2018-2019</option>
      </Input>
    </FormGroup>
  );
};

export default SelectBoxDuration;
