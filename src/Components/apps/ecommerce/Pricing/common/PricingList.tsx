import { H6, LI, UL } from "../../../../../AbstractElements";
import { pricingListData } from "../../../../../Data/apps/ecommerce/PricingCardData";

const PricingList = () => {
  return (
    <UL className="simple-list pricing-inner">
      {pricingListData.map((data, index) => (
        <LI key={index}>
          <H6>
            <b>{data.boldText}</b> {data.heading}
          </H6>
        </LI>
      ))}
    </UL>
  );
};

export default PricingList;
