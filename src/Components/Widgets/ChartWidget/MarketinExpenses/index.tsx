import { Card, Col, CardHeader, CardBody } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ChartRow from "./ChartRow";
import TotalSaleRow from "./TotalSaleRow";
import { marketinExpenses } from "../../../../Constant";

const MarketinExpenses = () => {
  return (
    <Col xl="7" md="12" className="box-col-12">
      <Card className=" o-hidden">
        <CardHeader>
          <H5>{marketinExpenses}</H5>
        </CardHeader>
        <div className="bar-chart-widget">
          <CardBody className="bottom-content">
            <ChartRow />
            <TotalSaleRow />
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default MarketinExpenses;
