import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FontAwesomeIconContainer from "../../../Components/icon/FontAwesomeIcon";
const FontAwesomeIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="FontAwesome" />
        <FontAwesomeIconContainer />
      </div>
    </Fragment>
  );
};

export default FontAwesomeIcon;
