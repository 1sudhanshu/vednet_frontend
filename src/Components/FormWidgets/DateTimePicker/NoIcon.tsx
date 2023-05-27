import { Label, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
interface propsType {
  startDate: Date;
  handleChange: (date: Date) => void;
}

const NoIcon = ({ startDate, handleChange }: propsType) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        No Icon (input field only)
      </Label>
      <Col xl="5" sm="7" lg="8">
        <DatePicker
          className="form-control datetimepicker-input digits"
          selected={startDate}
          showTimeSelect
          onChange={handleChange}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </Col>
    </Row>
  );
};

export default NoIcon;
