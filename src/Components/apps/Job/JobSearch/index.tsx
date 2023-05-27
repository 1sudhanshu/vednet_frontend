import { Container, Row } from "reactstrap";
import Sidebar from "./Sidebar";
import { Col } from "react-bootstrap";
import CardsClass from "./Cards";
import CardsPagination from "./Cards/CardsPagination";

const JobSearchContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl="3" className="xl-40">
          <div className="default-according style-1 faq-accordion job-accordion">
            <Sidebar />
          </div>
        </Col>
        <Col xl="9" className="xl-60">
          <Row>
            <CardsClass />
            <CardsPagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobSearchContainer;
