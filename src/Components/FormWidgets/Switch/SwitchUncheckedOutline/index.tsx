import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import CommonSwitchOutline from "../common/CommonSwitchOutline";
import { SwitchUncheckedOutline } from "../../../../Constant";

const SwitchUncheckedOutlineCard = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={SwitchUncheckedOutline} />
        <CommonSwitchOutline />
      </Card>
    </Col>
  );
};

export default SwitchUncheckedOutlineCard;
