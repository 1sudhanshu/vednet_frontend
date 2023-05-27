import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, Image, } from "../../../../AbstractElements";

const ElementThree = () => {
  const images = require.context("../../../../assets/images/banner/", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2017 - 2018"
      iconClassName="bg-success"
      icon={<i className="icon-image"></i>}
    >
      <H4 className="vertical-timeline-element-subtitle">Los Angeles, CA</H4>
      <Image
        className="img-fluid p-t-20"
        src={`${dynamicImage("1.jpg")}`}
        alt="timelineImg1"
      />
    </VerticalTimelineElement>
  );
};

export default ElementThree;
