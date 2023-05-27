import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { totalEarning } from "../../../../Constant";
import TotalEarningCardBody from "./TotalEarningCardBody";

const TotalEarning = () => {
  return (
    <Col xl="5" md="12" className="box-col-12">
      <Card className="o-hidden">
        <CardHeader>
          <H5>{totalEarning}</H5>
        </CardHeader>
        <TotalEarningCardBody />
      </Card>
    </Col>
  );
};

export default TotalEarning;
