import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import PaymentDetailsContainer from '../../../../Components/apps/ecommerce/PaymentDetails/index';

const PaymentDetails = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Payment Details" />
      <PaymentDetailsContainer/>
    </div>
  );
};

export default PaymentDetails;
