import { FormGroup } from "reactstrap";
import { SelectYear } from "../../../../Constant";

const SelectBoxYear = () => {
  return (
    <FormGroup className="mb-3 col-6">
      <select className="form-select" size={1}>
        <option>{SelectYear}</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
      </select>
    </FormGroup>
  );
};

export default SelectBoxYear;
