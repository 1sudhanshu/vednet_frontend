import PricingSvgCommon from "./PricingSvgCommon";
import StandardPricing from "./StandardPricing";
import PricingList from "./PricingList";
import { Card, Col } from "reactstrap";
import { Popular, Subscribe } from "../../../../../Constant";
import { Btn, H3 } from "../../../../../AbstractElements";

interface PricingCardCommoninterface {
  price: number;
  pricingPlan: string;
  ColorHighlight?:boolean
  ribbonRight?:boolean
  ribbonCenter?:boolean
  ribbonLeft?:boolean
}

const PricingCardCommon = ({price,pricingPlan,ColorHighlight,ribbonRight,ribbonCenter,ribbonLeft}: PricingCardCommoninterface) => {
  return (
    <Col md="4">
      <Card className={`pricing-block text-center ${ColorHighlight? "bg-primary":""}`} >
      {ribbonLeft && <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger"><i className="icofont icofont-love"></i></div>}
      {ribbonRight && <div className="ribbon ribbon-clip-right ribbon-right ribbon-danger">{Popular}</div>}
      {ribbonCenter && <div className="ribbon ribbon-bookmark ribbon-danger">{Popular}</div>}
        <PricingSvgCommon price={price} />
        <div className="pricing-inner">
          <H3 className="font-primary">{pricingPlan}</H3>
          {pricingPlan === "Standard" && <StandardPricing />}
          {pricingPlan === "Business" && <PricingList />}
          {pricingPlan === "Premium" && <PricingList />}
          <Btn color="primary" size="lg">{Subscribe}</Btn>
        </div>
      </Card>
    </Col>
  );
};

export default PricingCardCommon;
