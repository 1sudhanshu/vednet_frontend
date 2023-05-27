import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import BaseInputsContainer from "../../../../Components/forms/forms-control/BaseInputs";

const BaseInputs = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="forms-control" title="Base Inputs" />
      <BaseInputsContainer />
    </div>
  );
};

export default BaseInputs;