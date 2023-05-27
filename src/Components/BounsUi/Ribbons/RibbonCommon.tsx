import { Fragment } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { P, Ribbon } from "../../../AbstractElements";
import DynamicRibbon from "./DynamicRibbon";

const RibbonComponent = () => {
  return (
    <Fragment>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <Ribbon className="ribbon ribbon-primary">Ribbon</Ribbon>
            <P>Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text</P>
          </CardBody>
        </Card>
      </Col>
      <DynamicRibbon/>
    </Fragment>
  );
};

export default RibbonComponent;
