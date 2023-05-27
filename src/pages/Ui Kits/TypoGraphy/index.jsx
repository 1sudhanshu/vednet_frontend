import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TypoGraphyContainer from "../../../Components/Ui Kits/TypoGraphy";
const TypoGraphy = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="TypoGraphy" />
        <TypoGraphyContainer />
      </div>
    </Fragment>
  );
};

export default TypoGraphy;
