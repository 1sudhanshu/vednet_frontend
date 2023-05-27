import { Col, Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import ClipboardHighlightCardBody from "./ClipboardHighlightCardBody";
import { CopyPortionFromParagraph } from "../../../../Constant/index";

const ClipboardHighlight = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon Heading={CopyPortionFromParagraph} />
        <ClipboardHighlightCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardHighlight;
