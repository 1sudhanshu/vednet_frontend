import React from "react";
import { Row, Label, Col, InputGroup } from "reactstrap";
import DatePicker from "react-datepicker";

interface propsType {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

const ViewMode = ({ startDate, setStartDate }: propsType) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">View Mode</Label>
      <Col xl="5" sm="7" lg="8">
        <InputGroup className="date" id="dt-view" data-target-input="nearest">
          <DatePicker
            className="form-control datetimepicker-input digits"
            selected={startDate}
            showTimeSelect
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <div
            className="input-group-text"
            data-target="#dt-view"
            data-toggle="datetimepicker"
          >
            <i className="fa fa-calendar"></i>
          </div>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default ViewMode;
