import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import MonthlyRevenueGrowth from "./MonthlyRevenueGrowth";
import NewVendors from "./NewVendors";
import DailyTransaction from "./DailyTransaction";
import ProductDetails from "./ProductDetails";
import TotalInvestment from "./TotalInvestment";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import TotalSale from "./TotalSale";
import TotalCustomer from "./TotalCustomer";

const BusinessDashboardContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col lg="12" className="box-col-12">
            <Row className="total-sale-col">
              <Col xxl="5" className=" box-col-12">
                <Row>
                  <WelcomeCard />
                  <Col sm="12">
                    <TotalSale />
                    <TotalCustomer />
                  </Col>
                </Row>
              </Col>
              <Col xxl="7" className=" box-col-12">
                <MonthlyRevenueGrowth />
              </Col>
            </Row>
          </Col>
          <Col className="box-col-12" xxl="6">
            <NewVendors />
          </Col>
          <Col className="box-col-12" xxl="6">
            <DailyTransaction />
          </Col>
          <Col xxl="5" className="box-col-12">
            <TotalInvestment />
          </Col>
          <Col xxl="7" className="box-col-12">
            <ProductDetails />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BusinessDashboardContainer;
