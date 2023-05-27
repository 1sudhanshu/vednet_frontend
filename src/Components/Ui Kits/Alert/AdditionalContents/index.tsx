import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicAditionalContent from "./DynamicAditionalContent";
import StaticAditionalContent from "./StaticAditionalContent";

const AdditionalContents = () => {
  const span = `Alerts can also contain additional HTML elements like headings, paragraphs and dividers.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading="Additional Content"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <StaticAditionalContent />
          <DynamicAditionalContent />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContents;
