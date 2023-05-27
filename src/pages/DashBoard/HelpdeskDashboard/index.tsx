import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import HelpdeskDashboardContainer from "../../../Components/DashBoard/HelpdeskDashboard";

const HelpdeskDashboard = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="DashBoard" title="Helpdesk Dashboard" />
        <HelpdeskDashboardContainer />
      </div>
    </Fragment>
  );
};

export default HelpdeskDashboard;
