import { Card, Col } from "reactstrap";
import CustomCheckboxsCardBody from "./CustomCheckboxsCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { CustomCheckbox } from "../../../../../Constant/index";

const CustomCheckboxsCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading={CustomCheckbox} />
        <CustomCheckboxsCardBody />
      </Card>
    </Col>
  );
};

export default CustomCheckboxsCard;
