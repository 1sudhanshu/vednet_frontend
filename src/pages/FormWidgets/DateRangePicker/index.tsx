import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DateRangerComponent from "../../../Components/FormWidgets/DateRangePicker";
const DateRangepicker = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Date Range picker" />
      <DateRangerComponent />
    </div>
  );
};

export default  DateRangepicker;
