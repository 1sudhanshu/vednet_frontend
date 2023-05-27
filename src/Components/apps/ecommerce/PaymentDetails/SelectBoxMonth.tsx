import { FormGroup } from "reactstrap";
import { April, Fab, Jan, March, SelectMonth } from "../../../../Constant";

const SelectBoxMonth = () => {
  return (
    <FormGroup className="mb-3 col-6 p-r-0">
      <select className="form-control form-select" size={1}>
        <option>{SelectMonth}</option>
        <option>{Jan}</option>
        <option>{Fab}</option>
        <option>{March}</option>
        <option>{April}</option>
      </select>
    </FormGroup>
  );
};

export default SelectBoxMonth;
