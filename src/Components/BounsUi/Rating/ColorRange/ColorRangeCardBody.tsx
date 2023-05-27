import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { CardBody, Col, Row } from "reactstrap";
import { H6 } from "../../../../AbstractElements";

const ColorRangeCardBody = () => {
  const [rating, setRating] = useState(3);
  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            fillColorArray={[
              "#f17a45",
              "#f19745",
              "#f1a545",
              "#f1b345",
              "#f1d045",
            ]}
            transition
            fillIcon={<MdFavorite size={50} />}
            emptyIcon={<MdFavoriteBorder size={50} />}
            initialValue={rating}
            onClick={(rate: number) => setRating(rate)}
          />
        </Col>
        <Col sm="4">
          <H6 className="mb-0 text-end">You Rated : {rating}</H6>
        </Col>
      </Row>
    </CardBody>
  );
};

export default ColorRangeCardBody;
