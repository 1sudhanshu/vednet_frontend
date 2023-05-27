import { Col, Card } from "reactstrap";
import SwitchwithColor from "./SwitchwithColor";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { SwitchWithColor } from "../../../../Constant/index";

const SwitchWithColorCard = () => {
  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={SwitchWithColor} />
        <SwitchwithColor />
      </Card>
    </Col>
  );
};

export default SwitchWithColorCard;
