import { Fragment } from "react";
import { Col, Card, CardHeader } from "reactstrap";
import HeartIconsBody from "./HeartIconsBody";
import { H5 } from "../../../../AbstractElements";

const HeartIcons = () => {
  return (
    <Fragment>
      <Col xl="6" lg="12">
        <Card>
          <CardHeader>
            <H5>Heart Rating</H5>
          </CardHeader>
          <HeartIconsBody />
        </Card>
      </Col>
    </Fragment>
  );
};

export default HeartIcons;
