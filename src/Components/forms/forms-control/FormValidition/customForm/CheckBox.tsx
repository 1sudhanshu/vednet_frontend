import { FormGroup, Input, Label } from 'reactstrap';

const CheckBox = () => {
  return (
    <FormGroup>
      <div className="form-check">
        <div className="checkbox p-0">
          <Input
            className="form-check-input"
            id="invalidCheck"
            type="checkbox"
          />
          <Label className="form-check-label" htmlFor="invalidCheck">
            {"Agree to terms and conditions"}
          </Label>
        </div>
        <div className="invalid-feedback">
          {"You must agree before submitting."}
        </div>
      </div>
    </FormGroup>
  );
};

export default CheckBox;
