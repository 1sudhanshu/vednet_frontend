import { DatePickerInterFace } from "./common/commonDatePickerInterFace";
import { Col, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
import { TodayButton } from "../../../Constant";

const TodayBtn = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">{TodayButton}</Label>
      <Col xl="5" sm="9">
        <DatePicker
          className="form-control digits"
          todayButton="Vandaag"
          selected={startDate}
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default TodayBtn;