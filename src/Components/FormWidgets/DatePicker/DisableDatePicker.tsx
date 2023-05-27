import { Col, Label, Row } from "reactstrap";
import { DisableDatepicker } from "../../../Constant";
import DatePicker from 'react-datepicker';
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";

const DisableDatePicker = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        {DisableDatepicker}
      </Label>
      <Col sm="3">
        <div className="datepicker-here" data-language="en">
          <DatePicker
            className="form-control digits"
            selected={startDate}
            onChange={handleChange}
            disabled
            placeholderText="This is disabled"
          />
        </div>
      </Col>
    </Row>
  );
};

export default DisableDatePicker;
