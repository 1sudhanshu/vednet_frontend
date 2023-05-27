import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4 } from "../../../../AbstractElements";

const ElementFour = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2016 - 2017"
      iconClassName="bg-info"
      icon={<i className="icon-pulse"></i>}
    >
      <H4 className="vertical-timeline-element-subtitle">San Francisco, CA</H4>
      <audio controls preload="none">
        <source src="horse.ogg" type="audio/ogg" />
        {"Your browser does not support the audio element."}
      </audio>
    </VerticalTimelineElement>
  );
};

export default ElementFour;
