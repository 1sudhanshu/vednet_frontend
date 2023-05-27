import {  Card, Col } from "reactstrap";
import CommonSwitchOutline from "../common/CommonSwitchOutline";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { SwitchOutline } from "../../../../Constant";

const SwitchOutlineCard = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <HeadingCommon Heading={SwitchOutline} />
        <CommonSwitchOutline Checked={true} />
      </Card>
    </Col>
  );
};

export default SwitchOutlineCard;
