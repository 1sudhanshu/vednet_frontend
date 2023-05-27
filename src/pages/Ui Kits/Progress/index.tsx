import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ProgressContainer from "../../../Components/Ui Kits/Progress";
const Progress = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Ui Kits" title="Progress" />
        <ProgressContainer />
      </div>
    </Fragment>
  );
};

export default Progress;
