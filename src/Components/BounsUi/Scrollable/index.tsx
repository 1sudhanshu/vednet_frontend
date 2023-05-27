import { Container, Row } from "reactstrap";
import BothSideScroll from "./BothSideScroll";
import HorizontalScroll from "./HorizontalScroll";
import NoScrollbar from "./NoScrollbar";
import VerticalScroll from "./VerticalScroll";

const ScrollableContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BothSideScroll />
        <HorizontalScroll />
        <NoScrollbar />
        <VerticalScroll />
      </Row>
    </Container>
  );
};

export default ScrollableContainer;
