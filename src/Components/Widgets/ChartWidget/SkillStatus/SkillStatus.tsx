import { Card, Col } from "reactstrap";
import SkillStatusHeader from "./SkillStatusHeader";
import SkillStatusBody from "./SkillStatusBody";

const SkillStatus = () => {
  return (
    <Col xl="4" lg="12" className="box-col-6 xl-50">
      <Card>
        <SkillStatusHeader />
        <SkillStatusBody />
      </Card>
    </Col>
  );
};

export default SkillStatus;
