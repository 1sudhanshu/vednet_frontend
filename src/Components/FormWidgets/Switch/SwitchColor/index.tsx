import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { SwitchColor } from "../../../../Constant";
import SwitchColorCardBody from "./SwitchColorCardBody";

const BasicColor = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={SwitchColor} />
        <SwitchColorCardBody />
      </Card>
    </Col>
  );
};
export default BasicColor;
