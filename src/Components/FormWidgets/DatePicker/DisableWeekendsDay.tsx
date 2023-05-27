import { Row, Label, Col } from "reactstrap";
import { DisableDaysOfWeek } from "../../../Constant";
import DatePicker from "react-datepicker";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";

const DisableWeekendsDay = ({ handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        {DisableDaysOfWeek}
      </Label>
      <Col xl="5" sm="9">
        <DatePicker
          className="form-control digits"
          placeholderText="Click to select a date"
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default DisableWeekendsDay;
