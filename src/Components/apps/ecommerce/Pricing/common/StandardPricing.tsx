import { H6, LI, UL } from "../../../../../AbstractElements";
import { standardPricingListData } from "../../../../../Data/apps/ecommerce/PricingCardData";

const StandardPricing = () => {
  return (
    <UL className="simple-list pricing-inner">
      {standardPricingListData.map((data, index) => (
        <LI key={index}>
          <H6>
            <b>{data.boldText}</b> {data.heading}
          </H6>
        </LI>
      ))}
    </UL>
  );
};

export default StandardPricing;
