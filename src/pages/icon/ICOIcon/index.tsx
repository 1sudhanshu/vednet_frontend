import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import IcoIconsContainer from "../../../Components/icon/IcoIcon";
const ICOIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="Ico-Icons" />
        <IcoIconsContainer />
      </div>
    </Fragment>
  );
};

export default ICOIcon;
