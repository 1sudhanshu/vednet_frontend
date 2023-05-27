import { Card, CardBody,  Col, Container, Row } from "reactstrap";
import { BillingDetails } from "../../../../Constant";
import CheckoutTableData from "./CheckoutTableData";
import ProductPlaceOrder from "./ProductPlaceOrder";
import HeadingCommon from "../../../../Common/HeadingCommon";

const CheckoutContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Card className="checkout">
            <HeadingCommon Heading={BillingDetails}/>
            <CardBody>
              <Row>
                <CheckoutTableData />
                <ProductPlaceOrder />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutContainer;
