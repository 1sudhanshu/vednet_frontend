import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BusinessDashboardContainer from "../../../Components/DashBoard/BusinessDashboard";
import { ShoppingCart } from 'react-feather';
const BusinessDashboard = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="DashBoard" title="Business Dashboard" />
        <BusinessDashboardContainer />
        <a href="https://1.envato.market/a1BQ0R" rel="noreferrer" target="_blank" className="buy-now"><ShoppingCart/></a>
      </div>
    </Fragment>
  );
};

export default BusinessDashboard;
