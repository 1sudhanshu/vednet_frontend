import { FormGroup, Input } from "reactstrap";
import { BankName, Icici, Kotak, Sbi, bob } from "../../../../Constant";

const SelectBoxBankName = () => {
  return (
    <FormGroup className="col-6">
      <Input type="select" size={1}>
        <option>{BankName}</option>
        <option>{Sbi}</option>
        <option>{Icici}</option>
        <option>{Kotak}</option>
        <option>{bob}</option>
      </Input>
    </FormGroup>
  );
};

export default SelectBoxBankName;
