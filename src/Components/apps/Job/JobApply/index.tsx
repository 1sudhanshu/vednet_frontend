import { Col, Container, Row } from "reactstrap";
import Sidebar from "../JobSearch/Sidebar";
import JobApply from "./Form";

const JobApplyContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl="3" className="xl-40">
          <div className="default-according style-1 faq-accordion job-accordion">
            <Sidebar />
          </div>
        </Col>
        <Col xl="9" className="xl-60">
          <JobApply />
        </Col>
      </Row>
    </Container>
  );
};

export default JobApplyContainer;
