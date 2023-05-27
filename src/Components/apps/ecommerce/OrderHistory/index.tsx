import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { DatatableOrderHistory, OrdersHistory } from "../../../../Constant";
import OrderHistoryTable from "./OrderHistoryTable";
import DataTableOrderHistoryTable from "./DataTableOrderHistoryTable";

const OrderHistoryContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={OrdersHistory} />
            <CardBody>
              <OrderHistoryTable />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={DatatableOrderHistory} />
            <CardBody>
              <div className="order-history table-responsive">
              <DataTableOrderHistoryTable />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderHistoryContainer;
