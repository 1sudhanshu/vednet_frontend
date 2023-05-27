import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import HelperClassesContainer from "../../../Components/Ui Kits/HelperClasses";
const HelperClasses = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Helper Classes" />
        <HelperClassesContainer />
      </div>
    </Fragment>
  );
};

export default HelperClasses;
