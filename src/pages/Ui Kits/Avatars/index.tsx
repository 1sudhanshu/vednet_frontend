import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import AvatarsContainer from "../../../Components/Ui Kits/Avatars";
const Avatars = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Avatars" />
        <AvatarsContainer />
      </div>
    </Fragment>
  );
};

export default Avatars;
