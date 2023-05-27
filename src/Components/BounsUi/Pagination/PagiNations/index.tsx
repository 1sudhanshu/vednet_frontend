import HeadingCommon from "../../../../Common/HeadingCommon";
import PagiNationsCardBody from "./PagiNationsCardBody";
import { Card, Col } from "reactstrap";

const PagiNations = () => {
  return (
    <Col xl="6">
      <Card>
        <HeadingCommon Heading="PagiNations" />
        <PagiNationsCardBody />
      </Card>
    </Col>
  );
};

export default PagiNations;
