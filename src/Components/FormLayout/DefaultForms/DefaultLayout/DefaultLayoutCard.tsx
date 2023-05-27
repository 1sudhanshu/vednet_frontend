import { Col } from "react-bootstrap";
import { Card } from "reactstrap";
import { DefaultFormLayout } from "../../../../Constant";
import DefaultLayoutCardBody from "./DefaultLayoutCardBody";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DefaultLayoutCardFooter from "./DefaultLayoutCardFooter";

const DefaultLayoutCard = () => {
  const spanNext = `Using the<a href="#javascript">card</a>component, you can extend the default collapse behavior to create an accordion`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DefaultFormLayout} dangerouslySetInnerHTML={spanNext}/>
        <DefaultLayoutCardBody />
        <DefaultLayoutCardFooter />
      </Card>
    </Col>
  );
};

export default DefaultLayoutCard;
