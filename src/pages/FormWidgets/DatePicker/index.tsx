import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DatePickerComponent from "../../../Components/FormWidgets/DatePicker";
const Datepicker = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Date picker" />
      <DatePickerComponent />
    </div>
  );
};

export default Datepicker;
