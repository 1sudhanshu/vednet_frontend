import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import VerticalStepCardBody from "./VerticalStepCardBody";

const VerticalStepClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Vertical Step" />
        <VerticalStepCardBody />
      </Card>
    </Col>
  );
};

export default VerticalStepClass;
