import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, P } from "../../../../AbstractElements";

const ElementSix = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 2014"
      iconClassName="bg-danger"
      icon={<i className="icon-pencil-alt"></i>}
    >
      <H4 className="vertical-timeline-element-subtitle">Certification</H4>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
        dolorum provident rerum aut hic quasi placeat iure tempora laudantium
        ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
      </P>
    </VerticalTimelineElement>
  );
};

export default ElementSix;
