import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DateTimerComponent from "../../../Components/FormWidgets/DateTimePicker";
const DateTimePicker = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Date Time Picker" />
      <DateTimerComponent />
    </div>
  );
};

export default DateTimePicker;
