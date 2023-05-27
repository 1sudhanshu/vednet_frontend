import { Col, Container, Row } from "reactstrap";
import BasicProgressCard from "./BasicProgressCard";
import CustomHeightProgressBars from "./CustomHeightProgressBars";
import LargeProgressBars from "./LargeProgressBars";
import ProgressBarsStriped from "./ProgressBarsStriped";
import SmallProgressBars from "./SmallProgressBars";
import ProgressBarsStates from "./ProgressBarsStates";
import MultipleBars from "./MultipleBars";
import ProgressBarsAnimated from "./ProgressBarsAnimated";

const ProgressContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <BasicProgressCard />
          <SmallProgressBars />
          <LargeProgressBars />
          <CustomHeightProgressBars />
          <ProgressBarsStates />
          <MultipleBars />
          <ProgressBarsStriped />
          <ProgressBarsAnimated />
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressContainer;
