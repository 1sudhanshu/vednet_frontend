import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SweetAlertContainer from "../../../Components/BounsUi/SweetAlert";
const SweetAlert = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="BounsUi" title="SweetAlert" />
        <SweetAlertContainer />
      </div>
    </Fragment>
  );
};

export default SweetAlert;
