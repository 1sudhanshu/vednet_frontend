import { Col, Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ClipboardOnTextarea } from "../../../../Constant/index";
import ClipboardTextareaCardBody from "./ClipboardTextareaCardBody";

const ClipboardTextarea = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon Heading={ClipboardOnTextarea} />
        <ClipboardTextareaCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardTextarea;
