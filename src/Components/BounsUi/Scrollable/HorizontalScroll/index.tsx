import { Fragment } from "react";
import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import HorizontalScrollBody from "./HorizontalScrollBody";

const HorizontalScroll = () => {
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <HeadingCommon Heading="Horizontal Scroll" />
          <HorizontalScrollBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default HorizontalScroll;