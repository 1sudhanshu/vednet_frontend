import { CardBody, Row } from "reactstrap";
import PricingCardCommon from "./common";
import { Business, Premium, Standard } from "../../../../Constant";

const ColorHighlightCardBody = () => {
  return (
    <CardBody className="pricing-card-design-1">
      <Row className="pricing-content">
        <PricingCardCommon price={10} pricingPlan={Standard} />
        <PricingCardCommon price={20} pricingPlan={Business} ColorHighlight />
        <PricingCardCommon price={30} pricingPlan={Premium} />
      </Row>
    </CardBody>
  );
};

export default ColorHighlightCardBody;
