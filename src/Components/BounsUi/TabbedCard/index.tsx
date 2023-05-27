import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import TabCardCommon from "./tabCard";
import TabCardCommonClass from "./TabsWithIcon";
import ColorTabClass from "./ColorTab";
import ColorOptionClass from "./ColorOption";
import MaterialTabWithColorClass from "./MaterialTabWithColor";

const TabbedCardContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <TabCardCommon />
          <TabCardCommonClass />
          <ColorTabClass />
          <ColorOptionClass />
          <MaterialTabWithColorClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TabbedCardContainer;
