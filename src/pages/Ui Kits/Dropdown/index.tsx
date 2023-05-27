import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DropdownContainer from "../../../Components/Ui Kits/Dropdown";
const Dropdown = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Dropdown" />
        <DropdownContainer />
      </div>
    </Fragment>
  );
};

export default Dropdown;
