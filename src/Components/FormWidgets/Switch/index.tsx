import BasicColor from "./SwitchColor";
import { Container, Row } from "reactstrap";
import BasicSwitch from "./BasicSwitch";
import SwitchOutlineCard from "./SwitchOutline/index";
import SwitchUncheckedOutlineCard from "./SwitchUncheckedOutline/index";
import SwitchSizingCard from "./SwitchSizing";
import SwitchWithIconCard from "./SwitchWithIcon/index";
import SwitchWithColorCard from "./SwitchWithColor/index";

const SwitchContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BasicSwitch />
        <BasicColor />
        <SwitchOutlineCard />
        <SwitchUncheckedOutlineCard />
        <SwitchSizingCard />
        <SwitchWithIconCard />
        <SwitchWithColorCard />
      </Row>
    </Container>
  );
};
export default SwitchContainer;
