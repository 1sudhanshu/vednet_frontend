import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import StepsContainer from "../../../Components/BounsUi/Steps";
const Steps = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Steps" />
        <StepsContainer />
      </div>
    </Fragment>
  );
};

export default Steps;
