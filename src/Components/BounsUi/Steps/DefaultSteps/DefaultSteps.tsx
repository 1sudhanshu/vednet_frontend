import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DefaultStepsCardBody from "./DefaultStepsCardBody";

const DefaultSteps = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Default Pearls Steps" />
        <DefaultStepsCardBody />
      </Card>
    </Col>
  );
};

export default DefaultSteps;
