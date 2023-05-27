import { FormGroup, Input, Label } from "reactstrap";
import { TermsAndConditions } from "../../../../../Constant";

const BrowserDefaultFormGroup = () => {
  return (
    <FormGroup>
      <div className="form-check">
        <div className="checkbox p-0">
          <Input
            className="form-check-input"
            id="invalidCheck2"
            type="checkbox"
            required
          />
          <Label className="form-check-label" htmlFor="invalidCheck2">{TermsAndConditions}</Label>
        </div>
      </div>
    </FormGroup>
  );
};

export default BrowserDefaultFormGroup;
