import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BootstrapNotifyContainer from "../../../Components/BounsUi/BootstrapNotify";
const BootstrapNotify = () => {
  return (
    <Fragment>
      <div className="page-body">
      <Breadcrumbs parent="BounsUi" title="BootstrapNotify" />
      <BootstrapNotifyContainer />
      </div>
    </Fragment>
  );
};

export default BootstrapNotify;
