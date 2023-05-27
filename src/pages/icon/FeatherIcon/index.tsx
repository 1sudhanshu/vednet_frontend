import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FeatherIconContainer from "../../../Components/icon/FeatherIcon";
const FeatherIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="Feather-Icon" />
        <FeatherIconContainer />
      </div>
    </Fragment>
  );
};

export default FeatherIcon;
