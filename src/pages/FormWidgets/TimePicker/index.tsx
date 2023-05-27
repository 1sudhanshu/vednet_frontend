import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TypeaheadComponent from "../../../Components/FormWidgets/TimePicker";
const Typeahead = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Typeahead" />
      <TypeaheadComponent />
    </div>
  );
};

export default Typeahead;
