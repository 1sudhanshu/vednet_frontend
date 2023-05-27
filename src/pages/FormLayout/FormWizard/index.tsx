import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FormWizardContainer from "../../../Components/FormLayout/FormWizard";
const FormWizard = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Layout" title="Form Wizard" />
      <FormWizardContainer />
    </div>
  );
};

export default FormWizard;
