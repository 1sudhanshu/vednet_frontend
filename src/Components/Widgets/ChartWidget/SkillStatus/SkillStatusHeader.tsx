import { CardHeader, Col, Row } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { TrendingUp } from "react-feather";
import { skillStatus } from "../../../../Constant";

const SkillStatusHeader = () => {
  return (
    <CardHeader>
      <Row>
        <Col xs="9">
          <H5>{skillStatus}</H5>
        </Col>
        <Col xs="3" className="text-end">
          <TrendingUp className="text-muted" />
        </Col>
      </Row>
    </CardHeader>
  );
};

export default SkillStatusHeader;
