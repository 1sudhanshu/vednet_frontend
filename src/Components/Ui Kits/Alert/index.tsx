import React from "react";
import { Container, Row } from "reactstrap";
import AdditionalContents from "./AdditionalContents";
import AlertWithDarkDismiss from "./AlertWithDarkDismiss";
import AlertWithLightDismiss from "./AlertWithLightDismiss";
import DarkOutlineAlert from "./DarkOutlineAlert";
import IconInverse from "./IconInverse";
import IconsWithOutline from "./IconsWithOutline";
import LightAlerts from "./LightAlerts";
import LightLinkColor from "./LightLinkColor";
import LinkColor from "./LinkColor";
import OutlineAlert from "./OutlineAlert";
import TextAsActions from "./TextAsActions";
import ThemeColorAlerts from "./ThemeColorAlerts";
import AlertWithIcons from "./AlertWithIcons";

const AlertContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <ThemeColorAlerts />
        <LinkColor />
        <AlertWithDarkDismiss />
        <AlertWithIcons />
        <LightAlerts />
        <LightLinkColor />
        <AlertWithLightDismiss/>
        <OutlineAlert/>
        <DarkOutlineAlert />
        <IconsWithOutline />
        <IconInverse />
        <TextAsActions />
        <AdditionalContents/>
      </Row>
    </Container>
  );
};

export default AlertContainer;
