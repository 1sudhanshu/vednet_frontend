import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import CreativeCardContainer from "../../../Components/BounsUi/CreativeCard";
const CreativeCard = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Creative Card" />
        <CreativeCardContainer />
      </div>
    </Fragment>
  );
};

export default CreativeCard;
