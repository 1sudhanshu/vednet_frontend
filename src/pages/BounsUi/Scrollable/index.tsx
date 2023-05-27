import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ScrollableContainer from "../../../Components/BounsUi/Scrollable";
const Scrollable = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Scrollable" />
        <ScrollableContainer />
      </div>
    </Fragment>
  );
};

export default Scrollable;
