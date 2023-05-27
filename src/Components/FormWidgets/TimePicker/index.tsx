import { Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import DefaultTypeahead from "./DefaultTypeahead";
import Multiples from "./Multiples";
import CustomSelection from "./CustomSelection";
import RemoteTypeahead from "./RemoteTypeahead";

const TypeaheadComponent = () => {
  return (
    <Container fluid={true}>
      <div className="typeahead">
        <Row>
          <Col sm="12" xl="6">
            <DefaultTypeahead />
          </Col>
          <Col sm="12" xl="6">
            <Multiples />
          </Col>
          <Col sm="12" xl="6">
            <CustomSelection />
          </Col>
          <Col sm="12" xl="6">
            <RemoteTypeahead />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TypeaheadComponent;
