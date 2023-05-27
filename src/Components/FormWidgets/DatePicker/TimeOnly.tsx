import { Col, Label, Row } from "reactstrap";
import { SelectTimeOnly } from "../../../Constant";
import DatePicker from "react-datepicker";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";

const TimeOnly = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        {SelectTimeOnly}
      </Label>
      <Col xl="5" sm="9">
        <DatePicker
          className="form-control digits"
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Col>
    </Row>
  );
};

export default TimeOnly;
