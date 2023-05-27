import { CardFooter, Col, Row } from "reactstrap";
import { H3, H6 } from "../../../AbstractElements";
import { Follower, Following, TotalPost } from "../../../Constant";
import { cardsType } from "./AllCards";
interface propsType {
  item: cardsType;
}
const AllCardsCardFooter = ({ item }: propsType) => {
  return (
    <CardFooter>
      <Row>
        <Col sm="4" xs="4">
          <H6>{Follower}</H6>
          <H3 className="counter">{item.follower}</H3>
        </Col>
        <Col sm="4" xs="4">
          <H6>{Following}</H6>
          <H3>
            <span className="counter">{item.following}</span>K
          </H3>
        </Col>
        <Col sm="4" className="col-4">
          <H6>{TotalPost}</H6>
          <H3>
            <span className="counter">{item.totalPost}</span>M
          </H3>
        </Col>
      </Row>
    </CardFooter>
  );
};

export default AllCardsCardFooter;
