import { Col, Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ClipboardOnParagraph } from "../../../../Constant/index";
import ClipboardParaGraphCardBody from "./ClipboardParaGraphCardBody";

const ClipboardPara = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon Heading={ClipboardOnParagraph} />
        <ClipboardParaGraphCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardPara;
