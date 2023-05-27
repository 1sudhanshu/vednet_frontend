import { H6, Spinner } from "../../../AbstractElements";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import DynamicSpinners from "./DynamicSpinners";
import HeadingCommon from "../../../Common/HeadingCommon";

const SpinnersContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading="Loader Style" />
            <CardBody>
              <Row>
                <Col md="3" sm="6">
                  <H6 className="sub-title mb-0 text-center">Loader 1</H6>
                  <div className="loader-box">
                    <Spinner className="loader-1" />
                  </div>
                </Col>
                <DynamicSpinners />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SpinnersContainer;