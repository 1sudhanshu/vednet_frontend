import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import PearlCardBody from "./PearlCardBody";

const PearlsStepsClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Pearls Steps with icon" />
        <PearlCardBody />
      </Card>
    </Col>
  );
};

export default PearlsStepsClass;
