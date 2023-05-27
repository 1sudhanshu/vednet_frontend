import { CardBody } from "reactstrap";
import PricingCardCommon from "./common";
import { Business, Premium, Standard } from "../../../../Constant";

const PricingTableWithBorderCardBody = () => {
  return (
    <CardBody className="row pricing-card-design-2 pricing-content">
      <PricingCardCommon price={10} pricingPlan={Standard} />
      <PricingCardCommon price={20} pricingPlan={Business} />
      <PricingCardCommon price={30} pricingPlan={Premium} />
    </CardBody>
  );
};

export default PricingTableWithBorderCardBody;
