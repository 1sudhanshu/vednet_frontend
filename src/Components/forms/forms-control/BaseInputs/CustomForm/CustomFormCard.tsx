import { Card } from "reactstrap";
import CustomFormCardBody from "./CustomFormCardBody";
import { CustomControls } from "../../../../../Constant";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const CustomFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={CustomControls} />
      <CustomFormCardBody />
    </Card>
  );
};

export default CustomFormCard;
