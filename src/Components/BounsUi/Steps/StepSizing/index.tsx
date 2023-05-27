import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StepsSizingClassBody from "./StepsSizingClassBody";

const StepsSizingClass = () => {
  const span = `A step with classname <code>.u-steps-xs</code><code>.u-steps-sm</code><code>.u-steps-lg</code>`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Step Sizing" dangerouslySetInnerHTML={span}/>
        <StepsSizingClassBody />
      </Card>
    </Col>
  );
};

export default StepsSizingClass;
