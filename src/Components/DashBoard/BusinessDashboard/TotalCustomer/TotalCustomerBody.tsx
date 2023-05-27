import { H3, P } from "../../../../AbstractElements";
import { ActiveCustomer, LastDay } from "../../../../Constant";

const TotalCustomerBody = () => {
  return (
    <div className="media-left">
      <div className="card-no-border p-20">
        <div className="d-flex">
          <div className="flex-grow-1">
            <P className="mb-0">
              {ActiveCustomer}
              <span className="font-success"> 01.56<i className="fa fa-caret-up" /></span>
            </P>
            <div className="sales-widgets d-flex">
              <H3 className="mt-1 mb-0 f-w-600">
                <span className="counter">10,14,12</span>
              </H3>
              <P className="mb-0">{LastDay}</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCustomerBody;
