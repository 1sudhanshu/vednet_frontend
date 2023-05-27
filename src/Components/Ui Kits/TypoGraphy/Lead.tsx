import { Card, CardBody, Col } from "reactstrap";
import { P } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";

const Lead = () => {
  const span = `Make a paragraph stand out by adding <code>.lead</code>.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={span} Heading="Lead" />
        <CardBody>
          <P className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Lead;
