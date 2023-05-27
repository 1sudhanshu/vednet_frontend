import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import NavsContainer from "../../../Components/Ui Kits/Navs";
const Navs = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Navs" />
        <NavsContainer />
      </div>
    </Fragment>
  );
};

export default Navs;
