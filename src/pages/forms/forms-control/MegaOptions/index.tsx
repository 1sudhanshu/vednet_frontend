import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import MegaOptionsContainer from "../../../../Components/forms/forms-control/MegaOptions";
const MegaOptions = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="forms-control" title="Mega Options" />
      <MegaOptionsContainer />
    </div>
  );
};

export default MegaOptions;
