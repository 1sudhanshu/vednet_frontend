import { Card, CardBody, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicMultipleBars from "./DynamicMultipleBars";

const MultipleBars = () => {
  const span = `Include multiple progress bars in a progress component if you need.`;
  return (
    <Card>
      <HeadingCommon Heading="Multiple Bars" dangerouslySetInnerHTML={span} />
      <CardBody>
        <Row className="progress-showcase">
          <DynamicMultipleBars />
        </Row>
      </CardBody>
    </Card>
  );
};

export default MultipleBars;
