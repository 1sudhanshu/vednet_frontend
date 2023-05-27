import { Col, Row } from "reactstrap";
import Sale from "./Sale";
import Invoices from "./Invoices";
import MyStatus from "./MyStatus";

const MonthlySale = () => {
  return (
    <Col xl="3" className=" xl-40 box-col-12">
      <Row>
        <Sale />
        <Invoices />
        <MyStatus />
      </Row>
    </Col>
  );
};

export default MonthlySale;
