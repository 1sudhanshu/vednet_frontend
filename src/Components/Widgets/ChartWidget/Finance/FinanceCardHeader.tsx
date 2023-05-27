import { CardHeader, Col, Row } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { Navigation } from "react-feather";
import { finance } from "../../../../Constant";

const FinanceCardHeader = () => {
  return (
    <CardHeader>
      <Row>
        <Col xs="9">
          <H5>{finance}</H5>
        </Col>
        <Col xs="3" className="text-end">
          <Navigation className="text-muted" />
        </Col>
      </Row>
    </CardHeader>
  );
};

export default FinanceCardHeader;
