import { Fragment } from "react";
import Timeline1 from "./timeline1";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import VerticalTimelineComp from "./verticalTimelineComp/verticalTimelineComp";

const TimelineContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading="Examples 1" />
              <CardBody>
                <Timeline1 />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading="Examples 2" />
              <CardBody>
                <VerticalTimelineComp />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TimelineContainer;
