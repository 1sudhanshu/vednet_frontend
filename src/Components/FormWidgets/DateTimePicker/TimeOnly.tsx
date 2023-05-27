import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from "reactstrap";
interface propsType {
  startDate: Date;
  handleChange: (date: Date) => void;
}

const TimeOnly = ({ startDate, handleChange }: propsType) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">Time Only</Label>
      <Col xl="5" sm="7" lg="8">
        <InputGroup
          className="date"
          id="dt-minimum"
          data-target-input="nearest"
        >
          <DatePicker
            className="form-control datetimepicker-input digits"
            selected={startDate}
            onChange={handleChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
          <div
            className="input-group-text"
            data-target="#dt-time"
            data-toggle="datetimepicker"
          >
            <i className="fa fa-clock-o"></i>
          </div>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TimeOnly;
