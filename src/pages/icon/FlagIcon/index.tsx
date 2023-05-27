import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FlagIconContainer from "../../../Components/icon/FlagIcon";
const FlagIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="Flag-Icon" />
        <FlagIconContainer />
      </div>
    </Fragment>
  );
};

export default FlagIcon;
