import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BasicCardContainer from "../../../Components/BounsUi/BasicCard";
const BasicCard = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Basic Card" />
        <BasicCardContainer />
      </div>
    </Fragment>
  );
};

export default BasicCard;
