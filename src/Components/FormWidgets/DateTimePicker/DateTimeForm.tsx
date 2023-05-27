import { useState } from "react";
import { Form } from "reactstrap";
import MinimumSetup from "./MinimumSetup";
import UsingLocales from "./UsingLocales";
import TimeOnly from "./TimeOnly";
import DateOnly from "./DateOnly";
import NoIcon from "./NoIcon";
import EnabledDisabledDates from "./EnabledDisabledDates";
import ViewMode from "./ViewMode";
import DisabledDaysoftheWeek from "./DisabledDaysoftheWeek";

const DateTimeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };
  return (
    <Form className="theme-form">
      <MinimumSetup startDate={startDate} handleChange={handleChange} />
      <UsingLocales startDate={startDate} handleChange={handleChange} />
      <TimeOnly startDate={startDate} handleChange={handleChange} />
      <DateOnly startDate={startDate} handleChange={handleChange} />
      <NoIcon startDate={startDate} handleChange={handleChange} />
      <EnabledDisabledDates startDate={startDate} setStartDate={setStartDate} />
      <ViewMode startDate={startDate} setStartDate={setStartDate} />
      <DisabledDaysoftheWeek startDate={startDate} setStartDate={setStartDate}/>
    </Form>
  );
};
export default DateTimeForm;
