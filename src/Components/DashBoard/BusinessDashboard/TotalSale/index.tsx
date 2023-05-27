import { Card } from "reactstrap";
import SaleChart from "./SaleChart";
import SaleBody from "./SaleBody";

const TotalSale = () => {
  return (
    <Card className=" card-with-border o-hidden total-sale-widget">
      <div className="d-flex align-items-center">
        <SaleBody />
        <SaleChart />
      </div>
    </Card>
  );
};

export default TotalSale;
