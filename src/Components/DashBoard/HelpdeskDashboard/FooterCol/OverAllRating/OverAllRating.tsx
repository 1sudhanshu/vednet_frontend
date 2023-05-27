import { Card, Col, CardBody, Row } from "reactstrap";
import HeadingWithIcon from "../../Common/HeadingWithIcon";
import RatingBox from "./RatingBox";
import SmallRating from "./SmallRating";

const OverAllRating = () => {
  return (
    <Col sm="12">
      <Card className=" card-with-border overall-rating">
        <HeadingWithIcon Tittle="Over All Rating" />
        <CardBody className="rating-box p-0">
          <Row className="m-0">
            <RatingBox />
            <SmallRating />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OverAllRating;
