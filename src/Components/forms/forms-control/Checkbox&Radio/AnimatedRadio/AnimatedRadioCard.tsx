import { Card, Col } from "reactstrap";
import AnimatedRadioCardBody from "./AnimatedRadioCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { AnimatedRadioButtons } from "../../../../../Constant";

const AnimatedRadioCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading={AnimatedRadioButtons} />
        <AnimatedRadioCardBody />
      </Card>
    </Col>
  );
};

export default AnimatedRadioCard;
