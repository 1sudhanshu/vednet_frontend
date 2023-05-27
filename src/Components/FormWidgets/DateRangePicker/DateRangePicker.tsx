import { Col, FormGroup } from "reactstrap";
import { H6, P } from "../../../AbstractElements";
import DatePicker from "react-datepicker";
import { DaterangePicker } from "../../../Constant";
interface PropsType {
  startDate: null;
  endDate: null;
  setDateRange: (update: any) => void;
}
const DateRangePicker = ({ startDate, endDate, setDateRange }: PropsType) => {
  return (
    <Col xl="6">
      <H6 className="sub-title">{DaterangePicker}</H6>
      <P>
        The Date Range Picker use the current value of the input to initialize, and update the input if new dates are chosen.
      </P>
      <div className="theme-form">
        <FormGroup>
          <DatePicker
            className="form-control digits"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
        </FormGroup>
      </div>
    </Col>
  );
};

export default DateRangePicker;
