import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import InlineTextElementsCardBody from "./InlineTextElementsCardBody";

const InlineTextElements = () => {
  const span = `Styling for common inline HTML5 elements.`;

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon
          dangerouslySetInnerHTML={span}
          Heading="Inline text elements"
        />
        <InlineTextElementsCardBody />
      </Card>
    </Col>
  );
};

export default InlineTextElements;
