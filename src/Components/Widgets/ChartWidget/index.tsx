import { Container, Row } from "reactstrap";
import FirstRow from "./FirstRow";
import MarketinExpenses from "./MarketinExpenses";
import TotalEarning from "./TotalEarning";
import SkillStatus from "./SkillStatus/SkillStatus";
import OrderStatus from "./OrderStatus";
import LiveProducts from "./LiveProducts";
import Turnover from "./Turnover";
import MonthlySales from "./MonthlySales";
import Uses from "./Uses";
import BrowserUses from "./BrowserUses";
import Finance from "./Finance";
import LiveOrderStatus from "./LiveOrderStatus";

const ChartWidgetContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <FirstRow />
      </Row>
      <Row>
        <MarketinExpenses />
        <TotalEarning />
        <SkillStatus />
        <OrderStatus />
      </Row>
      <Row>
        <LiveProducts />
        <Turnover />
        <MonthlySales />
        <Uses />
      </Row>
      <Row>
        <BrowserUses />
      </Row>
      <Row>
        <Finance />
        <LiveOrderStatus />
      </Row>
    </Container>
  );
};

export default ChartWidgetContainer;
