import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { CardBody, Col, Row } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { useState } from "react";

const HeartIconsBody = () => {
  const [rating, setRating] = useState(3);

  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            transition
            fillColor="#655af3"
            fillIcon={<MdFavorite size={50} />}
            emptyIcon={<MdFavoriteBorder size={50} />}
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

export default HeartIconsBody;
