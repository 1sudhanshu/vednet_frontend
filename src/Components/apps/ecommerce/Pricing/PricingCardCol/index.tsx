import { CardBody } from "reactstrap";
import PricingCardCommon from "../common";
import { Standard, Business, Premium } from "../../../../../Constant";

const PricingCardCol = () => {
  return (
    <CardBody className="row pricing-content">
      <PricingCardCommon price={10} pricingPlan={Standard} />
      <PricingCardCommon price={20} pricingPlan={Business} />
      <PricingCardCommon price={30} pricingPlan={Premium} />
    </CardBody>
  );
};

export default PricingCardCol;
