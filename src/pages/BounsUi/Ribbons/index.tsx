import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import RibbonsContainer from "../../../Components/BounsUi/Ribbons";
const Ribbons = () => {
  return (
    <Fragment>
      <div className="page-body">

      <Breadcrumbs parent="BounsUi" title="Ribbons" />
      <RibbonsContainer />
      </div>
    </Fragment>
  );
};

export default Ribbons;
