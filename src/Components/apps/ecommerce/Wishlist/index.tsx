import { Container, Row, Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Wishlist } from "../../../../Constant";
import WishListTable from "./WishListTable";

const WishlistContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={Wishlist} />
            <CardBody>
              <WishListTable/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WishlistContainer;
