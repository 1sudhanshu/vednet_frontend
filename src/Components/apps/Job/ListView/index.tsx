import { Col, Container, Row } from "reactstrap";
import Sidebar from "../JobSearch/Sidebar";
import CardsPagination from "../JobSearch/Cards/CardsPagination";
import ListViewCard from "./ListViewCard";

const JobListViewContainer = () => {
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
            <ListViewCard />
            <CardsPagination />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobListViewContainer;
