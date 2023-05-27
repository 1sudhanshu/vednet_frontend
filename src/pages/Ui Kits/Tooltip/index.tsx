import{ Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TooltipContainer from "../../../Components/Ui Kits/Tooltip";
const Tooltip = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Ui Kits" title="Tooltip" />
        <TooltipContainer />
      </div>
    </Fragment>
  );
};

export default Tooltip;
