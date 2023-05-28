import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import EnterpriseContainer from "../../../Components/DashBoard/Enterprise";

const Enterprise = () => {
  return (
    <Fragment>
      <div className="page-body" style={{paddingTop:20}}>
        {/* <Breadcrumbs parent="DashBoard" title="Enterprise" /> */}
        <EnterpriseContainer />
      </div>
    </Fragment>
  );
};

export default Enterprise;
