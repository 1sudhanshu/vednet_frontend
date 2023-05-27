import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ShadowContainer from "../../../Components/Ui Kits/Shadow/";
const Shadow = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Shadow" />
        <ShadowContainer />
      </div>
    </Fragment>
  );
};

export default Shadow;
