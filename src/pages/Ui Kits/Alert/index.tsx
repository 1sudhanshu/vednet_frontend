import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import AlertContainer from "../../../Components/Ui Kits/Alert";
const Alert = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Ui Kits" title="Alert" />
        <AlertContainer />
      </div>
    </Fragment>
  );
};
export default Alert;
