import { Fragment } from "react";
import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import BothSideScrollCardBody from "./BothSideScrollCardBody";

const BothSideScroll = () => {
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <HeadingCommon Heading="Both Side Scroll" />
          <BothSideScrollCardBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default BothSideScroll;
