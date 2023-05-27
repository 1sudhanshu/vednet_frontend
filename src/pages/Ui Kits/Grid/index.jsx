import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import GridContainer from "../../../Components/Ui Kits/Grid";
const Grid = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Grid" />
        <GridContainer />
      </div>
    </Fragment>
  );
};

export default Grid;