import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TouchspinComponent from "../../../Components/FormWidgets/Touchspin";
const Touchspin = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Touchspin" />
      <TouchspinComponent />
    </div>
  );
};

export default Touchspin;
