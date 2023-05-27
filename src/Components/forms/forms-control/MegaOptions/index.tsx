import DefaultStyles from "./DefaultStyles";
import HorizontalStyles from "./HorizontalStyles";
import InlineStyles from "./InlineStyles";
import NoBorders from "./NoBorders";
import OfferStyle from "./OfferStyle";
import SolidBoard from "./SolidBoard";
import VerticalStyles from "./VerticalStyles";
import { Container, Row } from "reactstrap";

const MegaOptionsContainer = () => {
  return (
    <Container fluid={true} className="megaoptions-items">
      <Row>
        <DefaultStyles />
        <NoBorders />
        <SolidBoard />
        <OfferStyle />
        <InlineStyles />
        <VerticalStyles />
        <HorizontalStyles />
      </Row>
    </Container>
  );
};
export default MegaOptionsContainer;
