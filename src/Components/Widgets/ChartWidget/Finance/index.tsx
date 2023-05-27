import { Card, Col } from "reactstrap";
import FinanceCardBody from "./FinanceCardBody";
import FinanceCardHeader from "./FinanceCardHeader";

const Finance = () => {
  return (
    <Col xl="5" lg="12" className="box-col-12">
      <Card>
        <FinanceCardHeader />
        <FinanceCardBody />
      </Card>
    </Col>
  );
};

export default Finance;
