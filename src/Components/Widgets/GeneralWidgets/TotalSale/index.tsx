import { Card, Col } from "reactstrap";
import { Fragment } from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const TotalSale = () => {
  return (
    <Fragment>
      <Col xl="6" className="xl-100 box-col-12">
        <Card className="widget-joins widget-arrow">
          <FirstRow />
        </Card>
      </Col>
      <Col xl="6" className="xl-100 box-col-12">
        <Card className="widget-joins ">
          <SecondRow />
        </Card>
      </Col>
    </Fragment>
  );
};

export default TotalSale;
