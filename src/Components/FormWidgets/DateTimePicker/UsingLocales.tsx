import { Col, InputGroup, Label, Row } from "reactstrap";
import DatePicker from "react-datepicker";
interface propsType {
  startDate: Date;
  handleChange: (date: Date) => void;
}

const UsingLocales = ({ startDate, handleChange }: propsType) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">Using Locales</Label>
      <Col xl="5" sm="7" lg="8">
        <InputGroup
          className="date"
          id="dt-minimum"
          data-target-input="nearest"
        >
          <DatePicker
            className="form-control datetimepicker-input digits"
            selected={startDate}
            showTimeSelect
            onChange={handleChange}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <div
            className="input-group-text"
            data-target="#dt-local"
            data-toggle="datetimepicker"
          >
            <i className="fa fa-calendar"></i>
          </div>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default UsingLocales;
