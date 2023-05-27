import AnimatedCheckboxCardBody from "./AnimatedCheckboxCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { AnimatedCheckboxButtons } from "../../../../../Constant";
import { Card, Col } from "reactstrap";

const AnimatedCheckboxCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading={AnimatedCheckboxButtons} />
        <AnimatedCheckboxCardBody />
      </Card>
    </Col>
  );
};

export default AnimatedCheckboxCard;
