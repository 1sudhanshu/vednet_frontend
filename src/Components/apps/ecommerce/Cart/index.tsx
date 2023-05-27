import { Row, Col, Card, CardBody } from 'reactstrap';
import { CartTitle } from "../../../../Constant";
import CartData from "./CartData";
import HeadingCommon from "../../../../Common/HeadingCommon";

const CartContainer = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <HeadingCommon Heading={CartTitle} />
          <CardBody>
            <CartData />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CartContainer;
