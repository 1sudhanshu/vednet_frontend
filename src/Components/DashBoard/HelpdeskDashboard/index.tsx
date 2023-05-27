import { Container, Row } from "reactstrap";
import TictketStatus from "./TictketStatus";
import RecentActivities from "./RecentActivities/RecentActivities";
import FooterCol from "./FooterCol/FooterCol";
import TictketByResponse from "./TictketByResponse";
import CustomerSatisfaction from "./CustomerSatisfaction";
import Complaint from "./Complaint/Complaint";

const HelpdeskDashboardContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <TictketStatus />
        <TictketByResponse />
        <CustomerSatisfaction />
        <Complaint />
        <RecentActivities />
        <FooterCol />
      </Row>
    </Container>
  );
};

export default HelpdeskDashboardContainer;
