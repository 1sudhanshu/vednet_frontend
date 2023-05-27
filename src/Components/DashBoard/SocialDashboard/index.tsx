import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import Connection from "./Connection/Connection";
import MemberProfile from "./Connection/MemberProfile";
import SocialProfile from "./SocialProfile";
import ChatApp from "./ChatApp";
import Elana from "./Elana";
import JoinedGroups from "./JoinedGroups";
import RecentActivity from "./RecentActivity";
import UserCard from "./Common/UserCard";
import { AlenaKetrol, JasonBorne } from "../../../Constant";

const SocialDashboardContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl="9" className="xl-100 box-col-12">
          <Header />
        </Col>
        <Col xl="3" className="xl-100 box-col-12">
          <Connection />
          <MemberProfile />
        </Col>
        <SocialProfile />
        <UserCard tittle={JasonBorne} imageLink="11.jpg" />
        <ChatApp />
        <UserCard tittle={AlenaKetrol} imageLink="2.jpg" />
        <Elana />
        <JoinedGroups />
        <RecentActivity />
      </Row>
    </Container>
  );
};

export default SocialDashboardContainer;
