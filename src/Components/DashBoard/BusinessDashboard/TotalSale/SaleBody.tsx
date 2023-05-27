import { DollarSign } from "react-feather";
import { H3, P } from "../../../../AbstractElements";
import { LastYear, Totalsales } from "../../../../Constant";

const SaleBody = () => {
  return (
    <div className="media-left">
      <div className="card-no-border p-20">
        <div className="d-flex">
          <div className="flex-grow-1">
            <P className="mb-0">
              {Totalsales}
              <span className="font-warning"> 3.56%<i className="fa fa-caret-up" /></span>
            </P>
            <div className="sales-widgets d-flex">
              <H3 className="mt-1 mb-0 f-w-600">
                <DollarSign className="me-1" />
                <span className="counter">12,461</span>
              </H3>
              <P className="mb-0">{LastYear}</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBody;
