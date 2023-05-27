import React from "react";
import { CardBody } from "reactstrap";
import { P } from "../../../../AbstractElements";
import GridColumnBody from "./GridColumnBody";

const GridColumnCardBody = () => {
  return (
    <CardBody className="grid-showcase">
      <P>
        Using a single set of <code>.col-md-*</code> grid classes, you can
        create a basic grid system that starts out stacked on mobile devices and
        tablet devices (the extra small to small range) before becoming
        horizontal on desktop (medium) devices. Place grid columns within any{" "}
        <code>.row</code>.
      </P>
      <GridColumnBody />
    </CardBody>
  );
};

export default GridColumnCardBody;
