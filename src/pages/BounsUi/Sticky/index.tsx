import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import StickyContainer from "../../../Components/BounsUi/Sticky";
const Sticky = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Sticky" />
        <StickyContainer />
      </div>
    </Fragment>
  );
};

export default Sticky;
