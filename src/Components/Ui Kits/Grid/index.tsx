import { Col, Container, Row } from "reactstrap";
import GridOptions from "./GridOptions/GridOptions";
import HorizontalAlignment from "./HorizontalAlignment";
import Offset from "./Offset";
import SettingOneColumnWidth from "./SettingOneColumnWidth";
import GridColumn from "./GridColumn/GridColumn";
import NestingColumn from "./NestingColumn";
import Order from "./Order";
import VerticalAlignment from "./VerticalAlignment/VerticalAlignment";

const GridContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <GridOptions />
        </Col>
        <Col sm="12">
          <GridColumn />
        </Col>
        <Col sm="12">
          <SettingOneColumnWidth />
        </Col>
        <Col sm="12">
          <VerticalAlignment />
        </Col>
        <Col sm="12">
          <HorizontalAlignment />
        </Col>
        <Col sm="12">
          <NestingColumn />
        </Col>
        <Col sm="12">
          <Order />
        </Col>
        <Col sm="12">
          <Offset />
        </Col>
      </Row>
    </Container>
  );
};

export default GridContainer;
