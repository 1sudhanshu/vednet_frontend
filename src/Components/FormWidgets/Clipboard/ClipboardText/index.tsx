import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ClipboardOnTextInput } from "../../../../Constant";
import ClipboardTextCardBody from "./ClipboardTextCardBody";

const ClipboardText = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <HeadingCommon Heading={ClipboardOnTextInput} />
        <ClipboardTextCardBody />
      </Card>
    </Col>
  );
};
export default ClipboardText;
