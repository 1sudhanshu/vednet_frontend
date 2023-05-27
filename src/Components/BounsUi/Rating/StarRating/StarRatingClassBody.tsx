import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { CardBody, Col, Row } from "reactstrap";
import { H6 } from "../../../../AbstractElements";

const StarRatingClassBody = () => {
  const [rating, setRating] = useState(5);
  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            fillColor="#655af3"
            initialValue={rating}
            onClick={(rate) => setRating(rate)}
          />
        </Col>
        <Col sm="4">
          <H6 className="mb-0 text-end">You Rated : {rating}</H6>
        </Col>
      </Row>
    </CardBody>
  );
};

export default StarRatingClassBody;
