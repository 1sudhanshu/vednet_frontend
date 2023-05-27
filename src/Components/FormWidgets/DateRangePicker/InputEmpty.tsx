import { Col, FormGroup } from "reactstrap";
import H6 from "../../../CommonElements/Headings/H6Element";
import P from "../../../CommonElements/Paragraph/index";
import DatePicker from "react-datepicker";
import { InputInitiallyEmpty } from "../../../Constant";
interface propsType {
  startDate: null;
  endDate: null;
  setDateRange: (update: any) => void;
}
const InputEmpty = ({ startDate, endDate, setDateRange }: propsType) => {
  return (
    <Col xl="6">
      <H6 className="sub-title">{InputInitiallyEmpty}</H6>
      <P>
        If you're using a date range as a filter, you may want to attach a
        picker to an input but leave it empty by default. This example shows how
        to accomplish that using the <code>autoUpdateInput</code> setting, and
        the <code>apply</code> and <code>cancel</code> events.
      </P>
      <div className="theme-form">
        <FormGroup>
          <DatePicker
            className="form-control digits"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            monthsShown={2}
          />
        </FormGroup>
      </div>
    </Col>
  );
};

export default InputEmpty;
