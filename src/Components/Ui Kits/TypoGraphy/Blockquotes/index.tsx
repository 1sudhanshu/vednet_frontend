import { Card, CardBody, Col } from "reactstrap";
import { P } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicBlockquotes from "./DynamicBlockquotes";

const Blockquotes = () => {
  const span = `Add a <code>&lt;footer className="blockquote-footer"&gt;</code> for
  identifying the source. Wrap the name of the source work in
  <code>&lt;cite&gt;</code>.`;

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={span} Heading="Blockquotes" />
        <CardBody>
          <P className="sub-title">Naming a source</P>
          <blockquote className="blockquote">
            <P className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </P>
            <footer className="blockquote-footer">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
          <DynamicBlockquotes />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Blockquotes;
