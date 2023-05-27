import { useState } from "react";
import { CardBody, Row, Col } from "reactstrap";
import { Rating } from "react-simple-star-rating";

const TooltipLiveBody = () => {
  const [rating, setRating] = useState(5);

  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            fillColor="#655af3"
            showTooltip
            initialValue={rating}
            onClick={(rate) => setRating(rate)}
          />
        </Col>
      </Row>
    </CardBody>
  );
};

export default TooltipLiveBody;
