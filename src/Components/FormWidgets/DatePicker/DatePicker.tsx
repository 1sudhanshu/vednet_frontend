import { useState } from "react";
import { Form } from "reactstrap";
import ChildDatepicker from "./ChildDatepicker";
import DefaultDate from "./DefaultDate";
import DateWithTime from "./DateWithTime";
import TimeOnly from "./TimeOnly";
import CustomDate from "./CustomDate";
import TodayBtn from "./TodayBtn";
import DisableWeekendsDay from "./DisableWeekendsDay";
import DisableDatePicker from "./DisableDatePicker";
import InlineDate from "./InlineDate";

const DatePickersData = () => {
  const [startDate, setstartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setstartDate(date);
  };
  return (
    <Form className="theme-form">
      <DefaultDate startDate={startDate} handleChange={handleChange} />
      <DateWithTime startDate={startDate} handleChange={handleChange} />
      <TimeOnly startDate={startDate} handleChange={handleChange} />
      <CustomDate startDate={startDate} handleChange={handleChange} />
      <TodayBtn startDate={startDate} handleChange={handleChange} />
      <DisableWeekendsDay handleChange={handleChange} />
      <ChildDatepicker />
      <DisableDatePicker startDate={startDate} handleChange={handleChange} />
      <InlineDate startDate={startDate} handleChange={handleChange} />
    </Form>
  );
};
export default DatePickersData;
