import React, { useState } from "react";
import { CardBody, Row, Col } from "reactstrap";
import { Rating } from "react-simple-star-rating";

const CustomTextBody = () => {
  const [rating, setRating] = useState(5);
  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            showTooltip
            fillColor="#655af3"
            tooltipArray={["Terrible", "Bad", "Average", "Great", "Prefect"]}
            initialValue={rating}
            onClick={(rate) => setRating(rate)}
          />
        </Col>
      </Row>
    </CardBody>
  );
};

export default CustomTextBody;
