import { Col, Card } from "reactstrap";
import MonthlyRevenueHeading from "./MonthlyRevenueHeading";
import MonthlyRevenueBody from "./MonthlyRevenueBody";

const MonthlyRevenue = () => {
  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card className=" card-with-border tickets">
        <MonthlyRevenueHeading />
        <MonthlyRevenueBody />
      </Card>
    </Col>
  );
};

export default MonthlyRevenue;
