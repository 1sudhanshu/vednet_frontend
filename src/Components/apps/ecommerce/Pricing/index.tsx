import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import {
  ColorHighlight,
  PricingTableWithBorder,
  PricingTableWithRibbons,
  SimplePricingCard,
} from "../../../../Constant";
import SimplePricingCardCol from "./SimplePricingCardCol";
import PricingCardCol from "./PricingCardCol";
import PricingTableWithBorderCardBody from "./PricingTableWithBorderCardBody";
import ColorHighlightCardBody from "./ColorHighlightCardBody";
import PricingTableWithRibbonsCardBody from "./PricingTableWithRibbonsCardBody";

const PricingContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={SimplePricingCard} />
            <CardBody className="row pricing-content">
              <SimplePricingCardCol />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={SimplePricingCard} />
            <PricingCardCol />
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={PricingTableWithBorder} />
            <PricingTableWithBorderCardBody />
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={ColorHighlight} />
            <ColorHighlightCardBody />
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={PricingTableWithRibbons} />
            <PricingTableWithRibbonsCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingContainer;
