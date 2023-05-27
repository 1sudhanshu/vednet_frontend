import { Col, Container, Row } from "reactstrap";
import Groups from "./Groups";
import Initials from "./Initials";
import Sizing from "./Sizing";
import StatusIndicator from "./StatusIndicator";
import Shape from "./Shape";
import Ratio from "./Ratio";

const AvatarsContainer = () => {
  return (
    <Container fluid={true}>
      <div className="user-profile">
        <Row>
          <Col sm="12">
            <Sizing />
          </Col>
          <Col sm="12">
            <StatusIndicator />
          </Col>
          <Col sm="12">
            <Initials />
          </Col>
          <Col xl="6" className="xl-100">
            <Shape />
          </Col>
          <Col xl="6" className="xl-100">
            <Ratio />
          </Col>
          <Col sm="12">
            <Groups />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AvatarsContainer;
