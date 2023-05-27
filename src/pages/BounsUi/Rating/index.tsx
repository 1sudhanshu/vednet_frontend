import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import RatingContainer from "../../../Components/BounsUi/Rating";
const Rating = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="BounsUi" title="Rating" />
        <RatingContainer />
      </div>
    </Fragment>
  );
};

export default Rating;
