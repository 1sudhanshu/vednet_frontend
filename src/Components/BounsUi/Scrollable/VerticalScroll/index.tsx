import { Fragment } from "react";
import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import VerticalScrollCardBody from "./VerticalScrollCardBody";

const VerticalScroll = () => {
  return (
    <Fragment>
      <Col sm="6" md="6">
        <Card>
          <HeadingCommon Heading="Vertical Scroll" />
          <VerticalScrollCardBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default VerticalScroll;
