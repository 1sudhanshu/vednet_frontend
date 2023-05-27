import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import FormValiditionContainer from "../../../../Components/forms/forms-control/FormValidition";
const FormValidition = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="forms-control" title="Form Validation" />
      <FormValiditionContainer />
    </div>
  );
};

export default FormValidition;
