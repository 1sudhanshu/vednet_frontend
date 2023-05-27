import React from "react";
import { Col, Label, Row } from "reactstrap";
import { SelectDateWithTime } from "../../../Constant";
import DatePicker from "react-datepicker";
import { DatePickerInterFace } from "./common/commonDatePickerInterFace";

const DateWithTime = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Label className="col-sm-3 col-form-label text-end">
        {SelectDateWithTime}
      </Label>
      <Col xl="5" sm="9">
        <DatePicker
          className="form-control digits"
          showPopperArrow={false}
          selected={startDate}
          showTimeSelect
          dateFormat="Pp"
          onChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default DateWithTime;
