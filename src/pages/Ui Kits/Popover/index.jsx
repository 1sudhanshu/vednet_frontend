import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import PopoverContainer from "../../../Components/Ui Kits/Popover";
const Popover = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Popover" />
        <PopoverContainer />
      </div>
    </Fragment>
  );
};

export default Popover;
