import { CardBody, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import {useState} from 'react';
import { MdOutlineSentimentDissatisfied, MdOutlineSentimentNeutral, MdOutlineSentimentSatisfied, MdOutlineSentimentVeryDissatisfied, MdOutlineSentimentVerySatisfied,} from "react-icons/md";
import { H6 } from "../../../../AbstractElements";

const CustomSVGgroupBody = () => {
  const customIcons = [
    { icon: <MdOutlineSentimentDissatisfied size={50} /> },
    { icon: <MdOutlineSentimentNeutral size={50} /> },
    { icon: <MdOutlineSentimentSatisfied size={50} /> },
    { icon: <MdOutlineSentimentVeryDissatisfied size={50} /> },
    { icon: <MdOutlineSentimentVerySatisfied size={50} /> },
  ];
  const [rating, setRating] = useState(0);

  return (
    <CardBody>
      <Row className="rating">
        <Col sm="8">
          <Rating
            fillColor="#655af3"
            customIcons={customIcons}
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

export default CustomSVGgroupBody;
