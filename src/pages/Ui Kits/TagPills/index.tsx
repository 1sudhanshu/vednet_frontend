import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TagPillsContainer from "../../../Components/Ui Kits/TagPills";
const TagPills = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Tag&Pills" />
        <TagPillsContainer />
      </div>
    </Fragment>
  );
};

export default TagPills;
