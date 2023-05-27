import React, { Fragment } from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import LineTabsContainer from "../../../../Components/Ui Kits/Tabs/LineTabs";
const LineTabs = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Line Tabs" />
        <LineTabsContainer />
      </div>
    </Fragment>
  );
};

export default LineTabs;
