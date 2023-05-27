import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TimelineContainer from "../../../Components/BounsUi/Timeline";
const Timeline = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Timeline" />
        <TimelineContainer />
      </div>
    </Fragment>
  );
};

export default Timeline;
