import { Container, Row } from "reactstrap";
import ItemBullets from "./ItemBullets";
import ActiveAndDisabledLinks from "./ActiveAndDisabledLinks/ActiveAndDisabledLinks";
import InlineNav from "./InlineNav/InlineNav";
import SubNav from "./SubNav";
import SectionAndSeparator from "./SectionAndSeparator";
import DefaultNav from "./DefaultNav";

const NavsContainer = () => {
  return (
    <Container fluid={true} className="navs-items">
      <Row>
        <DefaultNav />
        <ItemBullets />
        <SectionAndSeparator />
        <ActiveAndDisabledLinks />
        <InlineNav />
        <SubNav />
      </Row>
    </Container>
  );
};

export default NavsContainer;
