import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SocialDashboardContainer from "../../../Components/DashBoard/SocialDashboard";

const SocialDashboard = () => {
  return (
    <Fragment>
      <div className="page-body">

      <Breadcrumbs parent="DashBoard" title="Social Dashboard" />
      <SocialDashboardContainer />
      </div>
    </Fragment>
  );
};

export default SocialDashboard;
