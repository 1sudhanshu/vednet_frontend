import { H6, P } from "../../../AbstractElements";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup } from "reactstrap";
import { DateAndTime } from "../../../Constant";

const TimeAndDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Col lg="12">
      <H6 className="sub-title">{DateAndTime}</H6>
      <P> The Date Range Picker can also be used to select times. Hour, minute and (optional) second dropdowns are added below the calendars. An option exists to set the increment count of the minutes dropdown to e.g. offer only 15-minute or 30-minute increments.</P>
      <div className="theme-form">
        <FormGroup>
          <DatePicker
            className="form-control digits"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            monthsShown={2}
            showYearDropdown
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </FormGroup>
      </div>
    </Col>
  );
};
export default TimeAndDate;
