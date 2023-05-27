import { Fragment } from "react";
import { Col, Card, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import StarRatingClassBody from "./StarRatingClassBody";

const StarRatingClass = () => {
  return (
    <Fragment>
      <Col xl="6" lg="12">
        <Card>
          <CardHeader>
            <H5>Star Rating</H5>
          </CardHeader>
          <StarRatingClassBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default StarRatingClass;
