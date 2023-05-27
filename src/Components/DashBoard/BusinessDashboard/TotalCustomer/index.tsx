import { Card } from "reactstrap";
import TotalCustomerBody from "./TotalCustomerBody";
import TotalCustomerChart from "./TotalCustomerChart";

const TotalCustomer = () => {
  return (
    <Card className=" card-with-border o-hidden total-sale-widget">
      <div className="d-flex align-items-center">
        <TotalCustomerBody />
        <TotalCustomerChart />
      </div>
    </Card>
  );
};

export default TotalCustomer;
