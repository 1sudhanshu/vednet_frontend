import { Card } from "reactstrap";
import { SolidInputStyle } from "../../../../../Constant";
import SolidInputFormCardBody from "./SolidInputFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const SolidInputFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={SolidInputStyle} />
      <SolidInputFormCardBody />
    </Card>
  );
};

export default SolidInputFormCard;
