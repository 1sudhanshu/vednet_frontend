import { Container, Row } from "reactstrap";
import BottomTab from "./BottomTab";
import InfoColorTab from "./InfoColorTab";
import LeftTab from "./LeftTab";
import PrimaryColorTab from "./PrimaryColorTab";
import RightTab from "./RightTab";
import SecondaryColorTab from "./SecondaryColorTab";
import Simple from "./Simple";
import SuccessColorTab from "./SuccessColorTab";

const LineTabsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Simple />
        <BottomTab />
        <LeftTab />
        <RightTab />
        <PrimaryColorTab />
        <SecondaryColorTab />
        <SuccessColorTab />
        <InfoColorTab />
      </Row>
    </Container>
  );
};

export default LineTabsContainer;
