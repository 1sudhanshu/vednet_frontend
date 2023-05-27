import { DatePickerInterFace } from "./common/commonDatePickerInterFace";
import { Label, Row } from "reactstrap";
import { CustomDateFormat } from "../../../Constant";
import { Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CustomDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        {CustomDateFormat}
      </Label>
      <Col xl="5" sm="9">
        <DatePicker
          className="form-control digits"
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default CustomDate;
