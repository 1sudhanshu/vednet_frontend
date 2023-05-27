import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import StarRatingClass from "./StarRating";
import CustomSVGgroup from "./CustomSVGgroup/CustomSVGgroup";
import HeartIcons from "./HeartIcons/HeartIcons";
import ColorRange from "./ColorRange/ColorRange";
import TooltipLive from "./TooltipLive/TooltipLive";
import CustomText from "./CustomText/CustomText";

const RatingContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <StarRatingClass />
          <CustomSVGgroup />
          <HeartIcons />
          <ColorRange />
          <TooltipLive />
          <CustomText />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RatingContainer;
