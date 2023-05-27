import { Card, Col } from "reactstrap";
import CustomRadiosCardBody from "./CustomRadiosCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { CustomRadio } from "../../../../../Constant";

const CustomRadiosCard = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading={CustomRadio} />
        <CustomRadiosCardBody />
      </Card>
    </Col>
  );
};

export default CustomRadiosCard;
