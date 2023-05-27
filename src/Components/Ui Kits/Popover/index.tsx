import { Container, Row } from "reactstrap";
import Basic from "./Basic";
import Directions from "./Directions";
import HtmlContents from "./HtmlContents";
import Offset from "./Offset";

const PopoverContainer = () => {
  return (
    <Container fluid={true}>
      <Row className="popover-main">
        <Basic/>
        <Directions />
        <HtmlContents  />
        <Offset/>
      </Row>
    </Container>
  );
};

export default PopoverContainer;
