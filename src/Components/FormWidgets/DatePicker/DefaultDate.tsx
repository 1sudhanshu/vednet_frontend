import { Col, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { Default } from "../../../Constant/index";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";

const DefaultDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">{Default}</Label>
      <Col xl="5" sm="9">
        <div className="input-group">
          <DatePicker
            className="form-control digits"
            selected={startDate}
            onChange={handleChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default DefaultDate;
