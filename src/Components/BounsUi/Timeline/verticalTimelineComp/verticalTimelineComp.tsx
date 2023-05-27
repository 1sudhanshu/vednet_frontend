import { Fragment } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ElementOne from "./ElementOne";
import ElementTwo from "./ElementTwo";
import ElementThree from "./ElementThree";
import ElementFour from "./ElementFour";
import ElementFive from "./ElementFive";
import ElementSix from "./ElementSix";

const VerticalTimelineComp = () => {
  return (
    <Fragment>
      <VerticalTimeline layout={"1-column"}>
        <ElementOne />
        <ElementTwo />
        <ElementThree />
        <ElementFour />
        <ElementFive />
        <ElementSix />
      </VerticalTimeline>
    </Fragment>
  );
};
export default VerticalTimelineComp;
