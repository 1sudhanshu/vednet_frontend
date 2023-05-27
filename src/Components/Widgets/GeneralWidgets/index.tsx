import { Container, Row } from "reactstrap";
import TopWidgets from "./TopWidgets";
import TotalSale from "./TotalSale";
import RecentActivity from "./RecentActivity";
import ManagerCard from "./ManagerCard";
import DevloperCard from "./DevloperCard";
import SocialMeadia from "./SocialMedia";
import BrowserWidget from "./BrowserWidget";
import ProductCard from "./ProductCard";
import EmployeeStatus from "./EmployeeStatus";
import CalenderWidget from "./CalenderWidget";
import ContactUs from "./ContactUs";

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <TopWidgets />
        <TotalSale />
        <RecentActivity />
        <ManagerCard />
        <DevloperCard />
        <SocialMeadia />
        <BrowserWidget />
        <ProductCard />
        <EmployeeStatus />
        <CalenderWidget />
        <ContactUs />
      </Row>
    </Container>
  );
};

export default GeneralWidgetsContainer;
