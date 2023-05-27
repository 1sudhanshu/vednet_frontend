import { Col } from "reactstrap";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { H3, P } from "../../../../../AbstractElements";

const RatingBox = () => {
  const [rating, setRating] = useState(4);

  return (
    <Col sm="6" className="p-0 main-rating">
      <div className="rating-box">
        <H3>{rating}</H3>
        <div className="rating-container">
          <div className="star-ratings">
            <Rating
              className="stars stars-example-fontawesome-o"
              initialValue={rating}
              onClick={(rate) => setRating(rate)}
            />
          </div>
        </div>
        <P>Measures the quality or your support team’s efforts.</P>
      </div>
    </Col>
  );
};

export default RatingBox;
