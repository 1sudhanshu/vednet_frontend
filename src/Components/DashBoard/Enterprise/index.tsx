import { Col, Container, Row } from "reactstrap";
import ProjectOverview from "./projectOverview";
import FirmActivity from "./FirmActivity";
import ProjectStatus from "./ProjectStatus";
import MonthlySale from "./MonthlySale";
import TotalEmployee from "./TotalEmployee";
import TotalProducts from "./TotalProducts/index";
import MonthlyRevenue from "./MonthlyRevenue";

const EnterpriseContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <ProjectOverview />
        <FirmActivity />
        <ProjectStatus />
        <MonthlySale />
        <Col sm="12" className=" box-col-12">
          <Row className=" overall-report">
            <TotalEmployee />
            <TotalProducts />
            <MonthlyRevenue />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EnterpriseContainer;
