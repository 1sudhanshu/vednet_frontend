import { Col, FormGroup } from "reactstrap";
import { H6, P } from "../../../AbstractElements";
import DatePicker from "react-datepicker";
interface propType {
  startDate1: Date;
  handleChange: (date: Date) => void;
}
const SingleDatePicker = ({ startDate1, handleChange }: propType) => {
  return (
    <Col xl="6">
      <H6 className="sub-title">Single Date Picker</H6>
      <P>
        The Date Range Picker can be turned into a single date picker widget
        with only one calendar. In this example, dropdowns to select a month and
        year have also been enabled at the top of the calendar to quickly jump
        to different months.
      </P>
      <div className="theme-form">
        <FormGroup>
          <DatePicker
            className="form-control digits"
            selected={startDate1}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        </FormGroup>
      </div>
    </Col>
  );
};

export default SingleDatePicker;
