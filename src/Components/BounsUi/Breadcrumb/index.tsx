import { Fragment } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import ColoredNavigation from "./ColoredNavigation";
import HeadingCommon from "../../../Common/HeadingCommon";
import Navbreadcrumb from "./Navbreadcrumb";
import BreadcrumbCardBody from "./BreadcrumbCardBody";

const BreadcrumbContainer = () => {
  const span = `use class <code>.breadcrumb to ol</code>`;
  return (
    <Fragment>
      <Container fluid={true} className="breadcrumb-items">
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading="Default bootstrap breadcrumb" dangerouslySetInnerHTML={span} />
              <BreadcrumbCardBody />
            </Card>
          </Col>
          <Navbreadcrumb />
          <ColoredNavigation />
        </Row>
      </Container>
    </Fragment>
  );
};
export default BreadcrumbContainer;
