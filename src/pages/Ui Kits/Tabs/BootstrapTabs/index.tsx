import React, { Fragment } from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import BootstrapTabsContainer from "../../../../Components/Ui Kits/Tabs/BootstrapTabs";
const BootstrapTabs = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Bootstrap Tabs" />
        <BootstrapTabsContainer />
      </div>
    </Fragment>
  );
};

export default BootstrapTabs;
