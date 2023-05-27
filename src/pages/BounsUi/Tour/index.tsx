import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TourContainer from "../../../Components/BounsUi/Tour";
const Tour = () => {
  return (
    <Fragment>
      <div className="page-body">
      <Breadcrumbs parent="BounsUi" title="Tour" />
      <TourContainer />
      </div>
    </Fragment>
  );
};

export default Tour;
