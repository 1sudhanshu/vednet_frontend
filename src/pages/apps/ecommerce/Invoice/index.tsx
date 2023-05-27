import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import InvoiceContainer from '../../../../Components/apps/ecommerce/Invoice/index';

const Invoice = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Invoice" />
      <InvoiceContainer />
    </div>
  );
};

export default Invoice;
