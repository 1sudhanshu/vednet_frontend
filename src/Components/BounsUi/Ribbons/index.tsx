import { Fragment } from "react";
import { Row, Col, Card, Container } from "reactstrap";
import RibbonClass from "./RibbonClass";
import RibbonComponent from "./RibbonCommon";
import HeadingCommon from "../../../Common/HeadingCommon";

const RibbonsContainer = () => {
  const span = `use class <code>.ribbons-colored .bg-primary</code>`;
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12" xl="12" md="12">
            <Card>
              <HeadingCommon Heading="ColoredBreadcrumb" dangerouslySetInnerHTML={span}/>
              <RibbonClass />
            </Card>
          </Col>
          <RibbonComponent />
        </Row>
      </Container>
      ;
    </Fragment>
  );
};

export default RibbonsContainer;
