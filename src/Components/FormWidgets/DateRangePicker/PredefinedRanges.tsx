import { Col } from "react-bootstrap";
import { H6, P } from "../../../AbstractElements";
import { FormGroup, Input } from "reactstrap";
import { PreDefinedRanges } from "../../../Constant";
interface propType {
  handleChange: (date: string) => void;
  startDate1: string;
}
const PredefinedRanges = ({ handleChange, startDate1 }: propType) => {
  return (
    <Col xl="6">
      <H6 className="sub-title">{PreDefinedRanges}</H6>
      <P>
        This example shows the option to predefine date ranges that the user can
        choose from a list.
      </P>
      <div className="theme-form">
        <FormGroup>
          <Input type="select" className="form-control digits" value={startDate1} onChange={(e) => handleChange(e.target.value)} placeholder="Select">
            <option>--Select--</option>
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
          </Input>
        </FormGroup>
      </div>
    </Col>
  );
};
export default PredefinedRanges;