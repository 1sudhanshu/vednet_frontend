import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import PricingContainer from '../../../../Components/apps/ecommerce/Pricing/index';

const Pricing = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Pricing" />
      <PricingContainer />
    </div>
  );
};

export default Pricing;
