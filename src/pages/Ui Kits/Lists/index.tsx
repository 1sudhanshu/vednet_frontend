import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ListsConatiner from "../../../Components/Ui Kits/Lists";
const Lists = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Lists" />
        <ListsConatiner />
      </div>
    </Fragment>
  );
};

export default Lists;
