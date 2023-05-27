import { CardBody, Row } from "reactstrap";
import PricingCardCommon from "./common";
import { Business, Premium, Standard } from "../../../../Constant";

const PricingTableWithRibbonsCardBody = () => {
  return (
    <CardBody className=" pricing-card-design-3">
      <Row className="pricing-content-ribbons">
        <PricingCardCommon price={10} pricingPlan={Standard}  ribbonLeft/>
        <PricingCardCommon price={20} pricingPlan={Business} />
        <PricingCardCommon price={30} pricingPlan={Premium} />
        <PricingCardCommon price={10} pricingPlan={Standard} />
        <PricingCardCommon price={20} pricingPlan={Business} ribbonCenter />
        <PricingCardCommon price={30} pricingPlan={Premium} />
        <PricingCardCommon price={10} pricingPlan={Standard} />
        <PricingCardCommon price={20} pricingPlan={Business} />
        <PricingCardCommon price={30} pricingPlan={Premium} ribbonRight  />

      </Row>
    </CardBody>
  );
};

export default PricingTableWithRibbonsCardBody;
