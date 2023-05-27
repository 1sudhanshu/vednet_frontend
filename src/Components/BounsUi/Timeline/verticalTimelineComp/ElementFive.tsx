import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, Image } from "../../../../AbstractElements";

const ElementFive = () => {
    const images = require.context("../../../../assets/images/banner/", true);
    const dynamicImage = (image: string) => {
      return images(`./${image}`);
    };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="April 2016"
      iconClassName="bg-warning"
      icon={<i className="icon-image"></i>}
    >
      <H4 className="vertical-timeline-element-subtitle">Online Course</H4>
      <Image
        className="img-fluid p-t-20"
        src={`${dynamicImage("3.jpg")}`}
        alt="timelineImg2"
      />
    </VerticalTimelineElement>
  );
};

export default ElementFive;
