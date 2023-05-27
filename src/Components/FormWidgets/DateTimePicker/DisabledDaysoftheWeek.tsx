import { Col, InputGroup, Label } from "reactstrap";
import DatePicker from "react-datepicker";
interface propsType {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

const DisabledDaysoftheWeek = ({ startDate, setStartDate }: propsType) => {
  return (
    <div className="mb-3 row g-3 mb-0">
      <Label className="col-sm-3 col-form-label text-end">
        Disabled Days of the Week
      </Label>
      <Col xl="5" sm="7" lg="8">
        <InputGroup
          className="date"
          id="dt-disab-days"
          data-target-input="nearest"
        >
          <DatePicker
            className="form-control datetimepicker-input digits"
            selected={startDate}
            showTimeSelect
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <div
            className="input-group-text"
            data-target="#dt-disab-days"
            data-toggle="datetimepicker"
          >
            <i className="fa fa-calendar"></i>
          </div>
        </InputGroup>
      </Col>
    </div>
  );
};

export default DisabledDaysoftheWeek;
