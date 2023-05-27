import ClipboardHighlight from "./ClipboardHighlight";
import ClipboardPara from "./ClipboardPara";
import ClipboardText from "./ClipboardText";
import ClipboardTextarea from "./ClipboardTextarea";
import { Container, Row } from "reactstrap";

const ClipboardContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <ClipboardText />
        <ClipboardTextarea />
        <ClipboardPara />
        <ClipboardHighlight />
      </Row>
    </Container>
  );
};

export default ClipboardContainer;
