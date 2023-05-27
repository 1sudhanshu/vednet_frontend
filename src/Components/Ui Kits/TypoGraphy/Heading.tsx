import { Card, CardBody, Col } from "reactstrap";
import { H3 } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";

const Heading = () => {
  const span =
    " Use the included utility classes to recreate the small secondary heading text.";
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Headings" dangerouslySetInnerHTML={span} />
        <CardBody className="typography">
          <H3>
            Fancy display heading
            <small className="text-muted">With faded secondary text</small>
          </H3>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Heading;
