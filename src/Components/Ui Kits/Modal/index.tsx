import { Container, Row, Col } from "reactstrap";
import BasicModal from "./BasicModal/BasicModal";
import SizesModal from "./SizesModal";
import StaticExample from "./StaticExample";
import VaryingModalContent from "./VaryingModalContent/VaryingModalContent";

const ModalContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <StaticExample />
        </Col>
        <Col sm="12">
          <BasicModal />
        </Col>
        <Col sm="12">
          <VaryingModalContent />
        </Col>
        <Col sm="12">
          <SizesModal />
        </Col>
      </Row>
    </Container>
  );
};

export default ModalContainer;
