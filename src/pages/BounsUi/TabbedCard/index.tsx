import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TabbedCardContainer from "../../../Components/BounsUi/TabbedCard";
const TabbedCard = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Tabbed Card" />
        <TabbedCardContainer />
      </div>
    </Fragment>
  );
};

export default TabbedCard;
